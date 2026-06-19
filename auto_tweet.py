import os
import random
import sys
from bs4 import BeautifulSoup
import tweepy

def get_random_article():
    # ルートディレクトリのhtmlファイルを取得
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]

    # 除外するファイル（アプリページ、インデックスなど記事ではないもの）
    exclude_files = ['index.html', 'apps.html', 'about.html', 'contact.html', 'discover.html', 'articles.html', 'article-detail.html', 'keyword-tool.html', 'menus.html']
    article_files = [f for f in html_files if f not in exclude_files]

    if not article_files:
        print("No article files found.")
        sys.exit(1)

    # ランダムに1つ選ぶ
    chosen_file = random.choice(article_files)

    with open(chosen_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # タイトルを取得（og:titleがあれば優先、なければtitleタグ）
    title = ""
    og_title = soup.find('meta', property='og:title')
    if og_title and og_title.get('content'):
        title = og_title['content']
    else:
        title_tag = soup.find('title')
        if title_tag:
            title = title_tag.text.strip()

    if not title:
        title = chosen_file.replace('.html', '').replace('-', ' ').title()

    # URLを作成
    base_url = "https://gaburieru-dotcom.github.io/"
    url = f"{base_url}{chosen_file}"

    return title, url

def generate_tweet_text(title, url):
    templates = [
        f"筋トレに関するおすすめの記事です！💪\n\n「{title}」\n詳細はこちらから👇\n{url}",
        f"今日のトレーニングの参考にどうぞ！🏋️‍♂️\n\n『{title}』\n{url}",
        f"新しい知識を取り入れて筋トレの効果をアップさせましょう！✨\n\n「{title}」\n{url} #筋トレ #フィットネス",
        f"おすすめ記事の紹介です！\n\n【{title}】\n{url}"
    ]
    return random.choice(templates)

def post_to_twitter(text):
    api_key = os.environ.get("TWITTER_API_KEY")
    api_secret = os.environ.get("TWITTER_API_SECRET")
    access_token = os.environ.get("TWITTER_ACCESS_TOKEN")
    access_token_secret = os.environ.get("TWITTER_ACCESS_TOKEN_SECRET")

    if not all([api_key, api_secret, access_token, access_token_secret]):
        print("Twitter API credentials are not set in environment variables.")
        sys.exit(1)

    client = tweepy.Client(
        consumer_key=api_key,
        consumer_secret=api_secret,
        access_token=access_token,
        access_token_secret=access_token_secret
    )

    try:
        response = client.create_tweet(text=text)
        print(f"Successfully posted to Twitter! Tweet ID: {response.data['id']}")
    except Exception as e:
        print(f"Error posting to Twitter: {e}")
        sys.exit(1)

def main():
    title, url = get_random_article()
    tweet_text = generate_tweet_text(title, url)

    print(f"Generated Tweet Text:\n---\n{tweet_text}\n---")

    # ドライランのチェック
    if os.environ.get("DRY_RUN") == "1":
        print("DRY_RUN is enabled. Skipping actual Twitter post.")
        return

    post_to_twitter(tweet_text)

if __name__ == "__main__":
    main()
