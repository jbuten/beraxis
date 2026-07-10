#!/bin/bash
# Script para iniciar el servidor local del website de BERAXIS en el puerto 3010

# Obtener la ruta del directorio del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Navegar a la carpeta del website
cd "$SCRIPT_DIR/website_antigravity" || {
  echo "Error: No se encontró la carpeta 'website_antigravity' en $SCRIPT_DIR"
  exit 1
}

# Puerto deseado
PORT=3010

echo "Verificando si el puerto $PORT está en uso..."
# Buscar el PID de cualquier proceso escuchando en el puerto 3010
PID=$(lsof -t -i:$PORT)

if [ -n "$PID" ]; then
  echo "⚠️ El puerto $PORT está en uso por el proceso $PID."
  echo "Deteniendo proceso $PID para liberar el puerto..."
  kill -9 $PID
  sleep 1.5
  echo "✓ Puerto $PORT liberado."
else
  echo "✓ El puerto $PORT está libre."
fi

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
  echo "Instalando dependencias necesarias primero..."
  npm install
fi

echo "Iniciando servidor de desarrollo de BERAXIS en el puerto $PORT..."
echo "Abre tu navegador en: http://localhost:$PORT"

# Ejecutar el servidor dev indicando el puerto 3010
npm run dev -- -p $PORT
