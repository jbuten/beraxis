#!/usr/bin/env bash
# Beraxis — Auto Save
# Limpia cache, hace commit y push de los cambios al repositorio.
#
# Uso:
#   ./save.sh                        # commit con timestamp automatico
#   ./save.sh "mensaje"              # commit con mensaje personalizado
#   ./save.sh --dry-run              # muestra que haria sin ejecutar
#   ./save.sh "mensaje" --dry-run

set -euo pipefail

# -- Colores -------------------------------------------------------------------
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; CYAN='\033[0;36m'; BOLD='\033[1m'; NC='\033[0m'

ok()   { echo -e "  ${GREEN}✓${NC} $1"; }
fail() { echo -e "  ${RED}✗${NC} $1"; exit 1; }
info() { echo -e "  ${YELLOW}ℹ${NC} $1"; }
step() { echo -e "\n${CYAN}${BOLD}▶ $1${NC}"; }
run()  { echo -e "  ${BLUE}→${NC} $1"; }

# -- Args ----------------------------------------------------------------------
CUSTOM_MSG=""
DRY_RUN=0

for arg in "$@"; do
    case "$arg" in
        --dry-run) DRY_RUN=1 ;;
        *)         CUSTOM_MSG="$arg" ;;
    esac
done

# -- Header --------------------------------------------------------------------
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}  Beraxis — Save & Push${NC}"
[[ $DRY_RUN -eq 1 ]] && echo -e "${YELLOW}  [DRY RUN — no se ejecutara ningun cambio]${NC}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# -- 1. Verificar repositorio --------------------------------------------------
step "1/4  Repositorio"

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "No es un repositorio git"

BRANCH=$(git branch --show-current)
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "sin remote")
ok "Rama:   $BRANCH"
ok "Remote: $REMOTE_URL"

# -- 2. Limpiar archivos de cache del indice ----------------------------------
step "2/4  Limpieza de cache"

CACHE_PATTERNS=(
    '*.pyc'
    '*/__pycache__/*'
    '.DS_Store'
    '*/.DS_Store'
    '*/node_modules/*'
    '*/.next/*'
    '*/out/*'
    '*/build/*'
    '*/coverage/*'
    '*/.turbo/*'
    '*/.vercel/*'
    '*.tsbuildinfo'
)

REMOVED=0
for pattern in "${CACHE_PATTERNS[@]}"; do
    FILES=$(git ls-files "$pattern" 2>/dev/null || true)
    if [[ -n "$FILES" ]]; then
        COUNT=$(echo "$FILES" | wc -l | tr -d ' ')
        run "Removiendo $COUNT archivo(s): $pattern"
        [[ $DRY_RUN -eq 0 ]] && git rm -r --cached --quiet "$pattern" 2>/dev/null || true
        REMOVED=$((REMOVED + COUNT))
    fi
done

if [[ $REMOVED -eq 0 ]]; then
    ok "Indice limpio, sin archivos de cache"
else
    ok "$REMOVED archivo(s) de cache removidos del indice"
fi

# -- 3. Detectar cambios -------------------------------------------------------
step "3/4  Cambios"

run "git add (excluyendo secretos, dependencias y builds locales)"
if [[ $DRY_RUN -eq 0 ]]; then
    git add -A -- \
        ':!**/.env' \
        ':!**/.env.*' \
        ':!**/.env.local' \
        ':!**/node_modules' \
        ':!**/.next' \
        ':!**/out' \
        ':!**/build' \
        ':!**/coverage' \
        ':!**/.turbo' \
        ':!**/.vercel' \
        ':!**/.DS_Store' \
        2>/dev/null || true
fi

STAGED=$(git diff --cached --name-only 2>/dev/null | wc -l | tr -d ' ')
if [[ $DRY_RUN -eq 1 ]]; then
    CHANGES_FOR_COMMIT=$(git status --short 2>/dev/null | wc -l | tr -d ' ')
else
    CHANGES_FOR_COMMIT=$STAGED
fi
UNPUSHED=$(git rev-list "origin/${BRANCH}..HEAD" --count 2>/dev/null || echo "0")

if [[ "$CHANGES_FOR_COMMIT" -eq 0 && "$UNPUSHED" -eq 0 ]]; then
    info "No hay cambios ni commits pendientes — nada que guardar"
    echo ""
    exit 0
fi

if [[ $DRY_RUN -eq 1 && "$CHANGES_FOR_COMMIT" -gt 0 ]]; then
    ok "$CHANGES_FOR_COMMIT cambio(s) detectado(s) para commit"
elif [[ "$STAGED" -gt 0 ]]; then
    ok "$STAGED archivo(s) listos para commit"
fi
[[ "$UNPUSHED" -gt 0 ]] && ok "$UNPUSHED commit(s) pendiente(s) de push"

if [[ "$CHANGES_FOR_COMMIT" -gt 0 ]]; then
    echo ""
    if [[ $DRY_RUN -eq 1 ]]; then
        STATUS_CMD=(git status --short)
    else
        STATUS_CMD=(git diff --cached --name-status)
    fi

    "${STATUS_CMD[@]}" | head -15 | while read -r status file; do
        case "$status" in
            A)  echo -e "    ${GREEN}+${NC} $file" ;;
            '??') echo -e "    ${GREEN}+${NC} $file" ;;
            M)  echo -e "    ${YELLOW}~${NC} $file" ;;
            MM) echo -e "    ${YELLOW}~${NC} $file" ;;
            D)  echo -e "    ${RED}-${NC} $file" ;;
            *)  echo -e "    ? $file" ;;
        esac
    done
    TOTAL_STAGED=$CHANGES_FOR_COMMIT
    [[ "$TOTAL_STAGED" -gt 15 ]] && echo -e "    ${YELLOW}... y $((TOTAL_STAGED - 15)) mas${NC}"
fi

# -- 4. Commit + Push ----------------------------------------------------------
step "4/4  Commit & Push"

TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

if [[ "$CHANGES_FOR_COMMIT" -gt 0 ]]; then
    if [[ -n "$CUSTOM_MSG" ]]; then
        MSG="$CUSTOM_MSG"
    else
        MSG="update ${TIMESTAMP}"
    fi

    run "git commit -m \"$MSG\""
    if [[ $DRY_RUN -eq 0 && "$STAGED" -gt 0 ]]; then
        git commit -m "$MSG"
        ok "Commit creado"
    elif [[ $DRY_RUN -eq 1 ]]; then
        ok "Commit simulado"
    fi
fi

run "git push origin $BRANCH"
if [[ $DRY_RUN -eq 0 ]]; then
    if git push origin "$BRANCH" 2>&1; then
        ok "Push completado"
    else
        echo ""
        echo -e "  ${RED}✗ Push fallo.${NC} Posibles causas:"
        echo -e "  ${YELLOW}  • Credenciales incorrectas — ejecuta: gh auth login${NC}"
        echo -e "  ${YELLOW}  • Sin acceso al remote — verifica tu token de GitHub${NC}"
        echo -e "  ${YELLOW}  • Prueba: git push https://jbuten@github.com/jbuten/beraxis.git ${BRANCH}${NC}"
        exit 1
    fi
fi

# -- Resumen -------------------------------------------------------------------
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
if [[ $DRY_RUN -eq 1 ]]; then
    echo -e "${YELLOW}${BOLD}  Dry run completo — sin cambios reales${NC}"
else
    echo -e "${GREEN}${BOLD}  ✓ Guardado y enviado correctamente${NC}"
    echo -e "  Rama:   ${BOLD}${BRANCH}${NC}"
    echo -e "  Hora:   ${TIMESTAMP}"
    echo -e "  Remote: ${REMOTE_URL}"
fi
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
