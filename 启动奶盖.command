#!/bin/bash
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

if ! command -v node >/dev/null 2>&1; then
  osascript -e 'display alert "无法启动奶盖" message "请先安装 Node.js LTS，然后再双击启动。"'
  exit 1
fi

if [ ! -d "node_modules/electron" ]; then
  echo "正在准备奶盖的运行环境..."
  npm install
fi

npm start
