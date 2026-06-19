import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll add a generic Organization JSON-LD to index.html and other generic pages
# and BreadcrumbList / Article to others if needed. For now, let's just make sure
# we don't duplicate and we have at least WebSite for index.html.

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

if 'application/ld+json' not in content:
    json_ld = """  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "kpworks",
    "url": "https://gaburieru-dotcom.github.io/"
  }
  </script>
"""
    content = re.sub(r'</head>', f'{json_ld}</head>', content)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Added JSON-LD to index.html")
