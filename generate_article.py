import os
import sys
import re
import markdown

def generate_article(md_path):
    if not os.path.exists(md_path):
        print(f"Error: {md_path} not found.")
        return

    # 1. Parse Markdown file
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    meta_match = re.search(r'^---\n(.*?)\n---\n(.*)', md_content, re.DOTALL)
    if not meta_match:
        print("Error: Markdown must start with metadata block.")
        return

    meta_text = meta_match.group(1)
    body_text = meta_match.group(2)

    metadata = {}
    for line in meta_text.split('\n'):
        if ':' in line:
            key, val = line.split(':', 1)
            metadata[key.strip()] = val.strip()

    title = metadata.get('title', 'No Title')
    description = metadata.get('description', '')
    badges_str = metadata.get('badges', '記事')
    filename = metadata.get('filename', 'new-article.html')
    category = metadata.get('category', 'fitness')

    # Markdown to HTML
    html_content = markdown.markdown(body_text, extensions=['tables', 'fenced_code'])
    # wrap with article tag
    html_content = f'<article class="guide-card">\n{html_content}\n</article>'

    # Badges HTML
    badges_html = ''
    for b in badges_str.split(','):
        badges_html += f'<span class="article-badge">{b.strip()}</span> '

    # 2. Inject into Template
    with open('article_template.html', 'r', encoding='utf-8') as f:
        template = f.read()

    template = template.replace('{{TITLE}}', title)
    template = template.replace('{{DESCRIPTION}}', description)
    template = template.replace('{{BADGES}}', badges_html.strip())
    template = template.replace('{{FILENAME}}', filename)
    template = template.replace('{{CONTENT}}', html_content)

    # Save HTML
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template)
    print(f"Generated: {filename}")

    # 3. Update articles.html
    update_articles_html(title, description, badges_str, filename, category)

    # 4. Update sitemap.xml
    update_sitemap(filename)


def update_articles_html(title, description, badges_str, filename, category):
    with open('articles.html', 'r', encoding='utf-8') as f:
        content = f.read()

    if filename in content:
        print(f"Info: {filename} already exists in articles.html")
        return

    badge_html = f'<span class="badge badge-primary">{badges_str.replace(",", "・")}</span>'

    new_card = f"""
        <!-- Auto Generated Article -->
        <div class="article-card-item reveal" data-category="{category}">
          <article class="card article-card">
            <div class="article-card-img flex-center" style="background: linear-gradient(135deg, #1e293b, #0f172a);">
              <h3 style="color:white;">{title}</h3>
            </div>
            <div class="article-card-content">
              <div class="article-meta">
                <span class="article-date">New</span>
                {badge_html}
              </div>
              <h3 class="article-card-title">
                <a href="{filename}" class="link-cover"></a>
                {title}
              </h3>
              <p class="article-card-desc">
                {description}
              </p>
              <div class="article-footer">
                <a href="{filename}" class="read-more">記事を読む <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
              </div>
            </div>
          </article>
        </div>"""

    # Insert right after the start of the grid
    grid_start_tag = '<div class="grid grid-3"'
    grid_pos = content.find(grid_start_tag)

    if grid_pos == -1:
        print("Error: Could not find grid in articles.html")
        return

    insert_pos = content.find('>', grid_pos) + 1

    updated_content = content[:insert_pos] + new_card + content[insert_pos:]
    with open('articles.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Updated: articles.html")

def update_sitemap(filename):
    with open('sitemap.xml', 'r', encoding='utf-8') as f:
        content = f.read()

    loc_tag = f"<loc>https://gaburieru-dotcom.github.io/{filename}</loc>"
    if loc_tag in content:
        print(f"Info: {filename} already in sitemap.xml")
        return

    new_url_block = f"""  <url>
    <loc>https://gaburieru-dotcom.github.io/{filename}</loc>
  </url>
"""
    updated_content = content.replace('</urlset>', f'{new_url_block}</urlset>')
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Updated: sitemap.xml")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 generate_article.py <markdown_file>")
    else:
        generate_article(sys.argv[1])
