import glob

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace references
    new_content = content.replace('/typing/', '/slashtyper/')
    new_content = new_content.replace('href="typing/"', 'href="slashtyper/"')
    new_content = new_content.replace('https://gaburieru-dotcom.github.io/typing/', 'https://sbmgtech.com/slashtyper/')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

replace_in_file("index.html")
replace_in_file("sitemap.xml")

for html_file in glob.glob("slashtyper/**/*.html", recursive=True):
    replace_in_file(html_file)

print("Done")
