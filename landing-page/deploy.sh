#!/usr/bin/env bash
# BERAXIS — Landing Page (beraxis.com) deploy
# Inspired by paymo-core-platform deploy script

set -euo pipefail

echo "BERAXIS Landing Page - Production Deployment"
echo "=================================================="
echo ""

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_error()   { echo -e "${RED}✗ $1${NC}"; }
print_info()    { echo -e "${YELLOW}ℹ $1${NC}"; }
print_step()    { echo -e "${BLUE}▶ $1${NC}"; }

SERVER_USER="jbuten"
SERVER_HOST="beraxis-svr"
REMOTE_BASE="/home/jbuten/docker/beraxis"
REMOTE_SRC="$REMOTE_BASE/src"
APP_DIR="$REMOTE_BASE/landing-page"

IMAGE_NAME="beraxis_landing"
CONTAINER_NAME="beraxis_landing"
HOST_PORT="3700"
BACKUP_TAG="backup-$(date +%Y%m%d-%H%M%S)"

# Root directory of the repository (one level up from landing-page)
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

ssh_cmd() {
    ssh -o ControlMaster=auto \
        -o ControlPath=~/.ssh/control-%r@%h:%p \
        -o ControlPersist=5m \
        "$SERVER_USER@$SERVER_HOST" "$@"
}

scp_cmd() {
    scp -o ControlMaster=auto \
        -o ControlPath=~/.ssh/control-%r@%h:%p \
        -o ControlPersist=5m \
        "$@"
}

cleanup_on_error() {
    print_error "Deployment failed! Attempting rollback..."
    ssh_cmd "
        if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q '^${IMAGE_NAME}:${BACKUP_TAG}$'; then
            docker tag ${IMAGE_NAME}:${BACKUP_TAG} ${IMAGE_NAME}:latest
            cd ${APP_DIR} && docker compose -f docker-compose.prod.yml up -d
            echo 'Rolled back to ${BACKUP_TAG}'
        fi
    " || true
    exit 1
}
trap cleanup_on_error ERR

# ================================================================
# STEP 1: Validate local files
# ================================================================
print_step "STEP 1/5: Validating local files..."

[[ ! -f "$ROOT/landing-page/Dockerfile" ]]              && { print_error "Dockerfile not found"; exit 1; }
[[ ! -f "$ROOT/landing-page/docker-compose.prod.yml" ]] && { print_error "docker-compose.prod.yml not found"; exit 1; }

print_success "Local files validated"
echo ""

# ================================================================
# STEP 2: Create deployment tarball
# ================================================================
print_step "STEP 2/5: Creating deployment package..."

TEMP_TAR="/tmp/beraxis-landing-$(date +%s).tar.gz"
cd "$ROOT/landing-page"

if [[ "$OSTYPE" == "darwin"* ]]; then
    COPYFILE_DISABLE=1 tar -czf "$TEMP_TAR" \
        --exclude='.DS_Store' \
        --exclude='node_modules' \
        --exclude='.git' \
        --exclude='.logs' \
        --exclude='*.log' \
        --exclude='.next' \
        --exclude='build' \
        .
else
    tar -czf "$TEMP_TAR" \
        --exclude='.DS_Store' \
        --exclude='node_modules' \
        --exclude='.git' \
        --exclude='.logs' \
        --exclude='*.log' \
        --exclude='.next' \
        --exclude='build' \
        .
fi

print_success "Package created ($(du -h "$TEMP_TAR" | cut -f1))"
echo ""

# ================================================================
# STEP 3: Upload source to server
# ================================================================
print_step "STEP 3/5: Uploading source to server..."

print_info "Preparing source directory on server..."
ssh_cmd "mkdir -p $REMOTE_SRC && rm -rf $REMOTE_SRC/*"

print_info "Uploading package..."
scp_cmd "$TEMP_TAR" "$SERVER_USER@$SERVER_HOST:/tmp/"

print_info "Extracting package on server..."
ssh_cmd "
    cd $REMOTE_SRC
    tar -xzf /tmp/$(basename $TEMP_TAR) 2>&1 | grep -v 'Ignoring unknown extended header' || true
    rm /tmp/$(basename $TEMP_TAR)
"
rm "$TEMP_TAR"

print_success "Source uploaded"
echo ""

# ================================================================
# STEP 4: Build Docker image on server
# ================================================================
print_step "STEP 4/5: Building Docker image on server..."

ssh_cmd "
    mkdir -p $APP_DIR

    if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q '^${IMAGE_NAME}:latest$'; then
        echo '→ Backing up current image as ${BACKUP_TAG}...'
        docker tag ${IMAGE_NAME}:latest ${IMAGE_NAME}:${BACKUP_TAG}
    fi

    echo '→ Building image...'
    docker build \
        --no-cache \
        -f $REMOTE_SRC/Dockerfile \
        -t ${IMAGE_NAME}:latest \
        $REMOTE_SRC

    if ! docker images --format '{{.Repository}}:{{.Tag}}' | grep -q '^${IMAGE_NAME}:latest$'; then
        echo 'ERROR: Image build failed!'
        exit 1
    fi
    echo '→ Image built successfully'
"

print_success "Docker image built"
echo ""

# ================================================================
# STEP 5: Deploy with docker compose and verify
# ================================================================
print_step "STEP 5/5: Deploying container..."

ssh_cmd "
    if ! docker network ls | grep -q 'general_network'; then
        docker network create general_network
        echo '→ Created general_network'
    fi

    cp $REMOTE_SRC/docker-compose.prod.yml $APP_DIR/

    echo '→ Stopping old container...'
    cd $APP_DIR
    docker compose -f docker-compose.prod.yml down || true
    docker rm -f $CONTAINER_NAME 2>/dev/null || true

    echo '→ Starting new container...'
    docker compose -f docker-compose.prod.yml up -d

    echo '→ Waiting for container to be online...'
    RETRIES=10
    INTERVAL=3
    for i in \$(seq 1 \$RETRIES); do
        STATUS=\$(docker inspect --format='{{.State.Status}}' $CONTAINER_NAME 2>/dev/null || echo 'unknown')
        if [[ \"\$STATUS\" == 'running' ]]; then
            echo \"→ Container running after \$((i * INTERVAL))s\"
            break
        fi
        echo \"  [\$i/\$RETRIES] Status: \$STATUS — waiting \${INTERVAL}s...\"
        sleep \$INTERVAL
    done

    # Final curl check
    sleep 2
    if curl -sf http://localhost:${HOST_PORT} > /dev/null 2>&1; then
        echo '→ Web application serving HTTP requests successfully!'
    else
        echo 'WARNING: App is running but localhost:${HOST_PORT} is not responding yet — check container logs'
    fi

    # Clean up old backup images, keeping the latest 3 backups
    docker images | grep '${IMAGE_NAME}' | grep 'backup' | awk '{print \$2}' | sort -r | tail -n +4 \
        | xargs -r -I{} docker rmi ${IMAGE_NAME}:{} 2>/dev/null || true
"

print_success "Deployment completed"
echo ""

print_step "Container status:"
ssh_cmd "docker compose -f $APP_DIR/docker-compose.prod.yml ps"

echo ""
echo -e "${BOLD}${GREEN}beraxis_landing deployed!${NC}"
echo "=================================================="
print_info "Host URL:   http://${SERVER_HOST}:${HOST_PORT}"
print_info "Backup tag: $BACKUP_TAG"
print_info "Logs:       ssh $SERVER_USER@$SERVER_HOST 'docker logs -f $CONTAINER_NAME'"
print_info "Rollback:   ssh $SERVER_USER@$SERVER_HOST 'cd $APP_DIR && docker tag ${IMAGE_NAME}:${BACKUP_TAG} ${IMAGE_NAME}:latest && docker compose -f docker-compose.prod.yml up -d'"
echo ""
