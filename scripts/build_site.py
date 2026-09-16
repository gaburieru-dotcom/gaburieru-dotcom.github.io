#!/usr/bin/env python3
"""Stage tracked public files and reject missing HTML assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_site'
SUFFIXES = {'.html', '.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.svg',
            '.webp', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.mp3', '.wav',
            '.mp4', '.webmanifest', '.xml', '.txt'}
NAMES = {'CNAME', '.nojekyll', 'apple-app-site-association'}
# Pre-existing references with no source image in either repository or workspace.
LEGACY_MISSING = {('apps.html', 'assets/images/tower_defense.png'),
                  ('articles.html', 'assets/images/tower_defense.png')}

class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {'script', 'img', 'source', 'video', 'audio', 'iframe'}:
            self.urls.append(attrs.get('src', ''))
        if tag == 'link' and set(attrs.get('rel', '').split()) & {
                'stylesheet', 'icon', 'apple-touch-icon', 'manifest'}:
            self.urls.append(attrs.get('href', ''))

def main():
    tracked = subprocess.check_output(
        ['git', 'ls-files', '-z'], cwd=ROOT).decode().split('\0')
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for name in filter(None, tracked):
        path = Path(name)
        if any(part.startswith('.') and part not in {'.well-known', '.nojekyll'}
               for part in path.parts):
            continue
        if path.parts[0] in {'scripts', 'tests'}:
            continue
        if path.suffix not in SUFFIXES and path.name not in NAMES:
            continue
        source = ROOT / path
        if not source.is_file() or source.is_symlink():
            raise SystemExit(f'Invalid public file: {name}')
        target = OUTPUT / path
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    errors = []
    for required in ['index.html', 'assets/css/home.css', 'assets/css/editorial.css',
                     'assets/js/home.js', '.well-known/apple-app-site-association']:
        if not (OUTPUT / required).is_file():
            errors.append(f'Required file missing: {required}')
    for page in OUTPUT.rglob('*.html'):
        parser = Assets()
        parser.feed(page.read_text(encoding='utf-8', errors='replace'))
        for url in parser.urls:
            parsed = urlsplit(url)
            if not parsed.path or parsed.scheme or parsed.netloc:
                continue
            path = unquote(parsed.path)
            target = ((OUTPUT / path.lstrip('/')) if path.startswith('/')
                      else (page.parent / path)).resolve()
            if OUTPUT not in target.parents or not target.is_file():
                if (str(page.relative_to(OUTPUT)), url) in LEGACY_MISSING:
                    print(f'Warning: existing missing image in {page.name}: {url}')
                    continue
                errors.append(f'{page.relative_to(OUTPUT)}: missing asset {url}')
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print('Site prepared in _site; asset checks passed (legacy exceptions above).')
    return 0

if __name__ == '__main__':
    sys.exit(main())
