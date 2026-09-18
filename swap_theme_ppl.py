import os
import re

filepath = "ppl-guide.html"

with open(filepath, 'r', encoding='utf-8', errors='surrogateescape') as f:
    content = f.read()

original_content = content

if "classList.toggle('light-mode')" in content:
    content = content.replace("currentTheme === 'light'", "currentTheme === 'dark'")
    content = content.replace("classList.add('light-mode')", "classList.add('dark-mode')")
    content = content.replace("classList.toggle('light-mode')", "classList.toggle('dark-mode')")
    content = content.replace("contains('light-mode')", "contains('dark-mode')")
    content = content.replace("? 'light' : 'dark'", "? 'dark' : 'light'")

if ".theme-toggle .sun-icon {" in content and "html.light-mode" in content:
    content = content.replace(".theme-toggle .sun-icon {\n      display: none;\n    }", ".theme-toggle .moon-icon {\n      display: none;\n    }")
    content = content.replace("html.light-mode .theme-toggle .moon-icon", "html.dark-mode .theme-toggle .sun-icon")
    content = content.replace("html.light-mode .theme-toggle .sun-icon", "html.dark-mode .theme-toggle .moon-icon")

content = content.replace("html.light-mode", "html.dark-mode")

root_match = re.search(r':root\s*\{([\s\S]*?)\n    \}', content)
dark_mode_match = re.search(r'html\.dark-mode\s*\{([\s\S]*?)\n    \}', content)

if root_match and dark_mode_match:
    root_content = root_match.group(1)
    dark_mode_content = dark_mode_match.group(1)
    content = content[:root_match.start(1)] + dark_mode_content + content[root_match.end(1):dark_mode_match.start(1)] + root_content + content[dark_mode_match.end(1):]

elif root_match and not dark_mode_match:
    if "--bg-color: #08090d;" in root_match.group(1):
        rc = root_match.group(1)
        rc = rc.replace("--bg-color: #08090d;", "--bg-color: #f8fafc;")
        rc = rc.replace("--bg-gradient: radial-gradient(circle at 50% 0%, #15162a 0%, #08090d 60%);", "--bg-gradient: radial-gradient(circle at 50% 0%, #eef2ff 0%, #f8fafc 80%);")
        rc = rc.replace("--text-primary: #f3f4f6;", "--text-primary: #0f172a;")
        rc = rc.replace("--text-secondary: #9ca3af;", "--text-secondary: #475569;")
        rc = rc.replace("--text-muted: #6b7280;", "--text-muted: #94a3b8;")
        rc = rc.replace("--card-bg: rgba(15, 17, 26, 0.6);", "--card-bg: rgba(255, 255, 255, 0.8);")
        rc = rc.replace("--card-border: rgba(255, 255, 255, 0.06);", "--card-border: rgba(0, 0, 0, 0.06);")
        rc = rc.replace("--header-bg: rgba(8, 9, 13, 0.7);", "--header-bg: rgba(248, 250, 252, 0.8);")
        rc = rc.replace("--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);", "--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);")
        rc = rc.replace("--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.3);", "--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);")
        rc = rc.replace("--shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.4);", "--shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.12);")
        content = content[:root_match.start(1)] + rc + content[root_match.end(1):]

if content != original_content:
    with open(filepath, 'w', encoding='utf-8', errors='surrogateescape') as f:
        f.write(content)
    print(f"Updated {filepath}")
else:
    print(f"No changes for {filepath}")

