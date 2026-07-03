#!/usr/bin/env bash
# BERAXIS Landing Page — local dev runner
# Usage:
#   ./run.sh            # start landing-page
#   ./run.sh --logs     # tail logs only (app already running)
#
# Ports: landing-page=3700

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOGS_DIR="$ROOT/.logs"
mkdir -p "$LOGS_DIR"

# ── Colors ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'; YELLOW='\033[0;33m'; CYAN='\033[0;36m'
MAGENTA='\033[0;35m'; GREEN='\033[0;32m'; BLUE='\033[0;34m'
BOLD='\033[1m'; RESET='\033[0m'

# ── App definitions: name  port  dir  dev-command ────────────────────────────
declare -a NAMES=( "landing-page" )
declare -a PORTS=( "3700"         )
declare -a DIRS=(
  "$ROOT"
)
declare -a CMDS=(
  "PORT=3700 npm run dev"
)
declare -a COLORS=( "$CYAN" )

# ── Helpers ──────────────────────────────────────────────────────────────────
log()  { echo -e "${BOLD}[run]${RESET} $*"; }
err()  { echo -e "${RED}${BOLD}[run] ERROR:${RESET} $*" >&2; }

kill_port() {
  local port="$1"
  local pids
  pids=$(lsof -ti tcp:"$port" 2>/dev/null || true)
  if [[ -n "$pids" ]]; then
    log "Port ${port} in use — killing PID(s) ${pids}"
    echo "$pids" | xargs kill -9 2>/dev/null || true
    sleep 0.4
  fi
}

# Prefix every line of a process's output with a colored label, write to log file + stdout
stream() {
  local name="$1" color="$2" logfile="$3"
  local label
  label=$(printf "${color}${BOLD}%-14s${RESET}" "[$name]")
  while IFS= read -r line || [[ -n "$line" ]]; do
    echo -e "${label} ${line}" | tee -a "$logfile"
  done
}

start_app() {
  local i="$1"
  local name="${NAMES[$i]}" port="${PORTS[$i]}" dir="${DIRS[$i]}"
  local cmd="${CMDS[$i]}" color="${COLORS[$i]}"
  local logfile="$LOGS_DIR/${name}.log"

  kill_port "$port"

  if [[ ! -d "$dir" ]]; then
    err "Directory not found: $dir — skipping $name"
    return
  fi

  : > "$logfile"   # truncate log on each run
  log "Starting ${BOLD}${name}${RESET} on :${port} → ${BLUE}${logfile}${RESET}"

  (
    cd "$dir"
    # Load .env.local if present
    if [[ -f ".env.local" ]]; then
      set -a
      # shellcheck disable=SC1091
      source ".env.local"
      set +a
    fi
    exec bash -c "$cmd" 2>&1
  ) | stream "$name" "$color" "$logfile" &

  echo "$!" >> "$LOGS_DIR/.pids"
}

cleanup() {
  echo ""
  log "Shutting down all apps…"
  if [[ -f "$LOGS_DIR/.pids" ]]; then
    while IFS= read -r pid; do
      kill "$pid" 2>/dev/null || true
    done < "$LOGS_DIR/.pids"
    rm -f "$LOGS_DIR/.pids"
  fi
  # Belt-and-suspenders: kill by port
  for port in "${PORTS[@]}"; do
    kill_port "$port" 2>/dev/null || true
  done
  log "Done."
}

tail_logs() {
  local files=()
  for name in "${NAMES[@]}"; do
    local f="$LOGS_DIR/${name}.log"
    [[ -f "$f" ]] && files+=("$f")
  done
  if [[ ${#files[@]} -eq 0 ]]; then
    err "No log files found in $LOGS_DIR — start apps first."
    exit 1
  fi
  log "Tailing logs: ${files[*]}"
  tail -f "${files[@]}"
}

# ── Main ─────────────────────────────────────────────────────────────────────
trap cleanup INT TERM

# --logs mode: just tail existing logs
if [[ "${1:-}" == "--logs" ]]; then
  tail_logs
  exit 0
fi

# Determine which apps to start
TARGETS=()
if [[ $# -gt 0 ]]; then
  for arg in "$@"; do
    found=0
    # Allow loose matching (e.g. "landing" matches "landing-page")
    for i in "${!NAMES[@]}"; do
      if [[ "${NAMES[$i]}" == "$arg" || "${NAMES[$i]}" == "$arg-page" || "$arg" == "landing" && "${NAMES[$i]}" == "landing-page" ]]; then
        TARGETS+=("$i")
        found=1
        break
      fi
    done
    if [[ $found -eq 0 ]]; then
      err "Unknown app '${arg}'. Valid: ${NAMES[*]}"
      exit 1
    fi
  done
else
  TARGETS=( "${!NAMES[@]}" )
fi

: > "$LOGS_DIR/.pids"

echo ""
echo -e "${BOLD}BERAXIS Landing Page — local dev${RESET}"
echo -e "Logs: ${BLUE}${LOGS_DIR}/${RESET}"
echo ""

for i in "${TARGETS[@]}"; do
  start_app "$i"
done

echo ""
log "All apps started. Press ${BOLD}Ctrl+C${RESET} to stop."
log "To tail logs in another terminal: ${BOLD}./run.sh --logs${RESET}"
echo ""

# Wait for all background jobs
wait
