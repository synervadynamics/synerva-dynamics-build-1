#!/usr/bin/env bash
set -euo pipefail
TARGET_DIR="${HOME}/Desktop/syndicate-dynamics"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ZIP_PATH="${ROOT}/syndicate-dynamics-build.zip"
PDF_PATH="${ROOT}/Syndicate_Dynamics_Website_Copy_v2.pdf"
COVER_PATH="${ROOT}/rockstar-cover.png"
SS1="${ROOT}/Screenshot 2025-10-09 at 9.17.46 PM.png"
SS2="${ROOT}/Screenshot 2025-10-09 at 9.17.54 PM.png"
SS3="${ROOT}/Screenshot 2025-10-09 at 9.18.01 PM.png"
SS4="${ROOT}/Screenshot 2025-10-09 at 9.18.07 PM.png"
SS5="${ROOT}/Screenshot 2025-10-09 at 9.18.14 PM.png"
SS6="${ROOT}/Screenshot 2025-10-09 at 9.18.25 PM.png"
command -v python3 >/dev/null 2>&1 || exit 1
command -v unzip >/dev/null 2>&1 || exit 1
for f in "$ZIP_PATH" "$PDF_PATH" "$COVER_PATH" "$SS1" "$SS2" "$SS3" "$SS4" "$SS5" "$SS6"; do [ -f "$f" ] || exit 2; done
mkdir -p "${TARGET_DIR}/public" "${TARGET_DIR}/scripts" "${TARGET_DIR}/tools"
python3 "${TARGET_DIR}/tools/assemble_repo.py" --zip "$ZIP_PATH" --out "$TARGET_DIR"
cp "$COVER_PATH" "${TARGET_DIR}/public/rockstar-cover.png"
cp "$SS1" "${TARGET_DIR}/public/"
cp "$SS2" "${TARGET_DIR}/public/"
cp "$SS3" "${TARGET_DIR}/public/"
cp "$SS4" "${TARGET_DIR}/public/"
cp "$SS5" "${TARGET_DIR}/public/"
cp "$SS6" "${TARGET_DIR}/public/"
touch "${TARGET_DIR}/.env.example"
echo "18" > "${TARGET_DIR}/.nvmrc"
printf "%s\n" "cd \"${TARGET_DIR}\"" "npm install" "npm run dev"
