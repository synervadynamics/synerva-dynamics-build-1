#!/usr/bin/env bash
set -euo pipefail
TARGET_DIR="${HOME}/Desktop/syndicate-dynamics"
cd "$TARGET_DIR"
[ -f package.json ] || { echo "missing package.json"; exit 3; }
[ -f app/layout.tsx ] || { echo "missing app/layout.tsx"; exit 3; }
[ -f app/page.tsx ] || { echo "missing app/page.tsx"; exit 3; }
[ -f tailwind.config.ts ] || { echo "missing tailwind.config.ts"; exit 3; }
[ -f public/rockstar-cover.png ] || { echo "missing rockstar-cover.png"; exit 3; }
echo "ok"
