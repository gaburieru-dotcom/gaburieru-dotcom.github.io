#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
if [ "$(git branch --show-current)" != main ]; then
  echo 'Switch to main before deploying.' >&2
  exit 1
fi
git fetch origin main
if ! git merge-base --is-ancestor origin/main HEAD; then
  echo 'Remote changes exist. Integrate origin/main before deploying.' >&2
  exit 1
fi
git add --all
python3 scripts/build_site.py
if ! git diff --cached --quiet; then
  git commit -m "${1:-Update website}"
fi
git push origin main
echo 'Sent to GitHub. Check deployment: https://github.com/gaburieru-dotcom/gaburieru-dotcom.github.io/actions'
