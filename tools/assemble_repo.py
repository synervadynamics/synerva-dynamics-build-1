#!/usr/bin/env python3
import argparse, base64, os, re, sys, zipfile
from pathlib import Path

BLOCK_RE = re.compile(
    r'<<<FILE path="(?P<path>.+?)" mode="(?P<mode>text|base64)">>>\n(?P<body>.*?)\n<<<END FILE>>>',
    re.DOTALL,
)

def extract_bundles(zip_path: Path, out_dir: Path, force: bool = False):
    with zipfile.ZipFile(zip_path, "r") as zf:
        bundle_paths = [p for p in zf.namelist() if p.endswith(".bundle.txt") and "/sections/" in p]
        if not bundle_paths:
            raise SystemExit("No *.bundle.txt files found in the ZIP.")
        for bp in sorted(bundle_paths):
            with zf.open(bp) as fh:
                text = fh.read().decode("utf-8", errors="strict")
            for m in BLOCK_RE.finditer(text):
                rel = m.group("path").strip().lstrip("/").replace("\\", "/")
                mode = m.group("mode")
                body = m.group("body")
                dest = out_dir / rel
                dest.parent.mkdir(parents=True, exist_ok=True)
                if dest.exists() and not force:
                    continue
                if mode == "base64":
                    data = base64.b64decode(body.strip())
                    with open(dest, "wb") as f:
                        f.write(data)
                else:
                    with open(dest, "w", encoding="utf-8", newline="") as f:
                        f.write(body.rstrip() + "\n")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--zip", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()
    zip_path = Path(args.zip).expanduser().resolve()
    out_dir = Path(args.out).expanduser().resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    extract_bundles(zip_path, out_dir, force=args.force)
    print(f"assembled:{out_dir}")
    for rel in ["package.json", "app/layout.tsx", "app/page.tsx", "tailwind.config.ts"]:
        p = out_dir / rel
        print(("ok" if p.exists() else "missing"), rel)

if __name__ == "__main__":
    main()
