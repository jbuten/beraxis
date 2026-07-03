#!/usr/bin/env bash
# BERAXIS — Save and Push changes to GitHub
# Usage:
#   ./save.sh "your commit message"

set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_error()   { echo -e "${RED}✗ $1${NC}"; }
print_info()    { echo -e "${YELLOW}ℹ $1${NC}"; }
print_step()    { echo -e "${BLUE}▶ $1${NC}"; }

# Root of the repository (one level up from landing-page)
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

print_step "Staging changes..."
cd "$ROOT"
git add .
print_success "All changes staged"

# Default commit message if none provided
COMMIT_MSG="${1:-"chore: automatic save before deploy"}"

print_step "Committing changes with message: '$COMMIT_MSG'..."
if git commit -m "$COMMIT_MSG"; then
    print_success "Changes committed successfully"
else
    print_info "No changes to commit"
fi

print_step "Pushing to GitHub..."
# Find the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if git push origin "$CURRENT_BRANCH"; then
    print_success "Pushed successfully to origin/$CURRENT_BRANCH"
else
    print_error "Push failed!"
    exit 1
fi

echo -e "${BOLD}${GREEN}Workspace saved and pushed successfully!${NC}"
