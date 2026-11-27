import os
import json
import re
import datetime

SCRATCH_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_PATH = os.path.join(SCRATCH_DIR, "index.html")
SITEMAP_PATH = os.path.join(SCRATCH_DIR, "sitemap.xml")
GA_TAG = "G-2KWG97NY59"
BASE_URL = "https://sbmgtech.com"

# 厳選されたストックトピック
TOPIC_QUEUE = [
    {
        "slug": "pomodoro-technique-english-vocabulary",
        "category": "英語学習・集中力と習慣化",
        "title": "ポモドーロ・テクニック×英単語暗記！集中力が途切れない25分間サイクルの極意",
        "description": "25分集中＋5分休憩のポモドーロ・テクニックで英単語学習の効率を最大化する方法。休憩中のスマホ誘惑を断ち切り、集中リズムを維持するアプリ制限テクニックを解説。",
        "app_type": "anki",
        "faq": [
            ("ポモドーロの5分休憩中にスマホを見ても良いですか？", "スマホ画面は脳に強い情報刺激を与えるため、脳が休まらず次の25分の集中力が低下します。休憩中は水分補給や軽いストレッチを行い、スマホはロックしておくのがベストです。"),
            ("英単語の暗記には何セット行うのが効果的ですか？", "初心者はまず2〜3セット（約1時間〜1時間半）から始めるのがおすすめです。慣れてきたら午前中4セット、午後4セットなど無理のない範囲で組み立てましょう。")
        ],
        "sections": [
            ("なぜポモドーロ・テクニックは英単語暗記と相性が抜群なのか", 
             "<p>人間の脳の「深い集中力（ウルトラディアンリズム）」が持続するのは約20〜30分程度と言われています。何時間も連続で単語帳を開いていると、途中で視線だけが滑って頭に入らない「作業の錯覚」に陥りがちです。</p><p>25分という短いタイムリミットを設けることで、脳内に適度なノルアドレナリンが分泌され、1問あたりの処理速度と記憶定着率が大幅に向上します。</p>"),
            ("最大の落とし穴：5分間の休憩中にSNSを開いてしまう罠",
             "<p>ポモドーロ実践者の9割が失敗する原因が「5分間の休憩時間」です。「ちょっとだけインスタやXを見よう」とスマホを手に取った瞬間、SNSのアルゴリズムが放つ強烈なドーパミンによって脳のスイッチが切り替わり、5分で終わるはずが30分経過していた…という経験は誰にでもあるはずです。</p><p>休憩時間は脳のキャッシュメモリをクリアにする時間であり、余計な刺激を入れてはなりません。</p>"),
            ("暗記無双で休憩中のスマホ暴走に「物理ブレーキ」をかける",
             "<p>このポモドーロの休憩リズムを守り抜くために最適なのが、英語学習アプリ<strong>「暗記無双」</strong>です。</p><p>休憩中に無意識にSNSを開こうとしても、暗記無双のアプリ制限が発動して単語テストが立ち塞がります。テストを解くことで「あ、いまは休憩中だった」「次の25分に集中しよう」と我に返ることができ、学習リズムが乱れません。</p>")
        ]
    },
    {
        "slug": "morning-routine-study-habit-building",
        "category": "英語学習・集中力と習慣化",
        "title": "朝起きてすぐスマホを見てしまう人へ！朝イチの無駄スクロールを『英語学習』にすり替える技術",
        "description": "朝目覚めて布団の中でスマホをダラダラ見てしまう悪習慣を逆手に取り、自然に英単語学習のゴールデンタイムへ変える方法。意志の力を使わない習慣化メソッド。",
        "app_type": "anki",
        "faq": [
            ("朝一番の学習が記憶に良いと言われる理由は何ですか？", "睡眠によって脳内の記憶が整理され、前日の疲労物質がリセットされた朝の脳は最も情報処理能力が高い状態（ゴールデンタイム）だからです。"),
            ("朝起きるのが苦手でも続けられますか？", "布団から起き上がる必要はありません。寝転がったままスマホの関所テストを解くだけで脳に血流が回り、自然と目が冴えてきます。")
        ],
        "sections": [
            ("朝のベッドの中でのスマホスクロールが1日の集中力を破壊する",
             "<p>朝目覚めた瞬間にスマホを手に取り、SNSのタイムラインやショート動画を流し見していませんか？寝起きの無防備な脳に大量の受動的刺激を浴びせると、その日1日中集中できない脳になってしまいます。</p>"),
            ("習慣のすり替えテクニック：スマホを手放すのではなく『関所』にする",
             "<p>「朝スマホを見ないようにしよう」と我慢するのではなく、「スマホをタップしたら英単語テストが出る」という関所にすり替えることで、抵抗感なく学習をスタートできます。</p>"),
            ("暗記無双で目覚まし代わりに頭をブースト",
             "<p>暗記無双で朝よく開くSNSにロックをかけておけば、ベッドの中でスマホを触った瞬間にテストが起動。数問解くだけで頭が冴え渡ります。</p>")
        ]
    },
    {
        "slug": "vertical-jump-training-science",
        "category": "トレーニング・動作解析",
        "title": "垂直跳びを10cm伸ばす科学的トレーニング！接地時間とプライオメトリクス理論",
        "description": "ジャンプ力を上げるために必要なSSC（ストレッチ・ショートニング・サイクル）とプライオメトリクスの原理。スロー動画とカメラ測定で跳躍高を可視化する重要性。",
        "app_type": "jump",
        "faq": [
            ("垂直跳びを伸ばすのにスクワットだけでは不十分ですか？", "スクワットで基礎筋力を高めることは重要ですが、実際の跳躍では0.2秒以内の極めて短い時間で力を発揮する爆発的パワー（RFD）と腱のバネ（SSC）が不可欠です。"),
            ("自分の垂直跳びを正確に測るにはどうすればいいですか？", "スマホカメラのスロー動画から離地〜着地の滞空時間をフレーム単位で割り出す測定アプリ（formXなど）を使うと1人でも高精度に測定できます。")
        ],
        "sections": [
            ("垂直跳びの決定因子：最大筋力×力発揮率（RFD）",
             "<p>高く跳ぶためには、単にバーベルを重く担げるだけでは足りません。地面に足がついているわずか0.15〜0.2秒の間に、どれだけ大きな力を一気に地面に伝えられるか（RFD）が重要です。</p>"),
            ("SSC（ストレッチ・ショートニング・サイクル）を鍛えるプライオメトリクス",
             "<p>筋肉が引き伸ばされた直後に急激に収縮することで、腱の弾性エネルギーを爆発力に変換する仕組みをSSCと呼びます。デプスジャンプなどの跳躍ドリルが効果的です。</p>"),
            ("formX（タイム・垂直跳び測定）で滞空時間とフォームを徹底分析",
             "<p>アプリ『formX』を使えば、スマホカメラの映像から離地フレームと着地フレームを高精度にトラッキングし、滞空時間から垂直跳びの数値を自動算出します。</p>")
        ]
    }
]

def get_existing_slugs():
    slugs = set()
    for f in os.listdir(SCRATCH_DIR):
        if f.endswith(".html"):
            slugs.add(f[:-5])
    return slugs

def generate_article_html(topic):
    today = datetime.date.today().isoformat()
    app_cta = ""
    if topic["app_type"] == "anki":
        app_cta = """
      <!-- アプリCTA -->
      <div class="app-cta-card">
        <div class="app-cta-header">
          <img src="anki_musou_icon.png" alt="暗記無双 アイコン" width="68" height="68" class="app-cta-icon">
          <div class="app-cta-title-wrap">
            <h3>暗記無双</h3>
            <p class="app-cta-tagline">英単語帳とアプリ制限で勉強を習慣化する英語学習アプリ</p>
          </div>
        </div>
        <p class="app-cta-desc">SNSやYouTubeを開くたびに英単語テストが強制起動。スマホ依存を根本から断ち切り、無意識の時間を勉強時間に変えるiPhoneアプリ。</p>
        <a href="https://apps.apple.com/jp/app/%E8%87%AA%E5%88%86%E3%81%A7%E4%BD%9C%E3%82%8B%E5%8D%98%E8%AA%9E%E5%B8%B3-%E6%9A%97%E8%A8%98%E7%84%A1%E5%8F%8C/id6670315761" target="_blank" rel="noopener noreferrer" class="app-cta-btn">
          「暗記無双」をApp Storeで無料ダウンロード ↗
        </a>
        <p style="margin-top: 10px; font-size: 0.85rem;"><a href="anki-musou.html" style="color: inherit; text-decoration: underline;">アプリの機能・10秒体験デモを見る →</a></p>
      </div>
        """
    elif topic["app_type"] == "jump":
        app_cta = """
      <!-- アプリCTA -->
      <div class="app-cta-card">
        <div class="app-cta-header">
          <img src="vertical_jump_icon_new.png" alt="formX アイコン" width="68" height="68" class="app-cta-icon">
          <div class="app-cta-title-wrap">
            <h3>formX（タイム・垂直跳び測定）</h3>
            <p class="app-cta-tagline">動画からタイムや垂直跳びを測定・骨格表示による動作解析アプリ</p>
          </div>
        </div>
        <p class="app-cta-desc">スマホカメラのスロー動画から離地・着地をフレーム単位で自動検出。跳躍力アップのフォーム分析に最適。</p>
        <a href="https://apps.apple.com/jp/app/%E3%82%BF%E3%82%A4%E3%83%A0%E6%B8%AC%E5%AE%9A-%E5%9E%82%E7%9B%B4%E8%B7%B3%E3%81%B3%E6%B8%AC%E5%AE%9A/id6759228838" target="_blank" rel="noopener noreferrer" class="app-cta-btn">
          「formX」をApp Storeで見る ↗
        </a>
      </div>
        """

    app_shelf_html = """
    <!-- kpworks アプリ一覧 -->
    <section class="article-apps-section" aria-label="kpworksのアプリ一覧">
      <h2 class="article-apps-title">kpworksのアプリ</h2>
      <p class="article-apps-subtitle">日々の学習・トレーニング・習慣化をサポートするアプリを開発しています。</p>
      <div class="article-apps-grid">
        <a href="https://apps.apple.com/jp/app/%E8%87%AA%E5%88%86%E3%81%A7%E4%BD%9C%E3%82%8B%E5%8D%98%E8%AA%9E%E5%B8%B3-%E6%9A%97%E8%A8%98%E7%84%A1%E5%8F%8C/id6670315761" target="_blank" rel="noopener noreferrer" class="article-app-card">
          <img src="anki_musou_icon.png" alt="暗記無双" width="52" height="52" loading="lazy">
          <div class="article-app-info">
            <h4>暗記無双</h4>
            <p>SNS起動時に単語テストを強制。勉強を習慣化する英語アプリ。</p>
          </div>
        </a>
        <a href="https://apps.apple.com/jp/app/%E9%9F%B3%E6%A5%BD%E3%81%8C%E6%B5%81%E3%81%9B%E3%82%8B%E7%AD%8B%E3%83%88%E3%83%AC%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-hiit-%E3%81%9F%E3%81%B0%E3%81%9F%E5%BC%8F/id6754508192" target="_blank" rel="noopener noreferrer" class="article-app-card">
          <img src="muscle_timer_icon.png" alt="音楽が流せる筋トレタイマー" width="52" height="52" loading="lazy">
          <div class="article-app-info">
            <h4>音楽が流せる筋トレタイマー</h4>
            <p>音楽を流しながらインターバル管理できるワークアウトタイマー。</p>
          </div>
        </a>
        <a href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%B7%E3%83%A3%E3%83%88%E3%83%AB%E3%83%A9%E3%83%B3/id6752814242" target="_blank" rel="noopener noreferrer" class="article-app-card">
          <img src="shuttle_run_icon.png" alt="スマートシャトルラン" width="52" height="52" loading="lazy">
          <div class="article-app-info">
            <h4>スマートシャトルラン</h4>
            <p>20mシャトルランの公式音源再生と記録管理ツール。</p>
          </div>
        </a>
        <a href="https://apps.apple.com/jp/app/%E3%82%BF%E3%82%A4%E3%83%A0%E6%B8%AC%E5%AE%9A-%E5%9E%82%E7%9B%B4%E8%B7%B3%E3%81%B3%E6%B8%AC%E5%AE%9A/id6759228838" target="_blank" rel="noopener noreferrer" class="article-app-card">
          <img src="vertical_jump_icon_new.png" alt="formX" width="52" height="52" loading="lazy">
          <div class="article-app-info">
            <h4>formX（タイム・垂直跳び測定）</h4>
            <p>動画からタイムや垂直跳びを測定。骨格表示による動作解析も可能。</p>
          </div>
        </a>
        <a href="menus.html" class="article-app-card">
          <img src="app_icon.png" alt="トレリンク" width="52" height="52" loading="lazy">
          <div class="article-app-info">
            <h4>トレリンク / TreLink</h4>
            <p>筋トレの記録とメニュー共有のためのWeb/アプリ（公開メニューあり）。</p>
          </div>
        </a>
      </div>
    </section>
    """

    faq_json = []
    faq_html = []
    for q, a in topic["faq"]:
        faq_json.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })
        faq_html.append(f"<h3>Q. {q}</h3><p>{a}</p>")

    faq_json_str = json.dumps(faq_json, ensure_ascii=False, indent=6)

    sections_html = []
    toc_html = []
    for i, (heading, content) in enumerate(topic["sections"], 1):
        sec_id = f"section-{i}"
        toc_html.append(f'<li><a href="#{sec_id}">{i}. {heading}</a></li>')
        sections_html.append(f"""
    <article class="guide-card">
      <h2 id="{sec_id}">{i}. {heading}</h2>
      {content}
      {app_cta if i == len(topic["sections"]) else ""}
    </article>
        """)

    toc_html.append('<li><a href="#faq">よくある質問（FAQ）</a></li>')

    html = f"""<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{BASE_URL}/{topic['slug']}.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="icons/Icon-192.png">
  <title>{topic['title']} | kpworks</title>
  <meta name="description" content="{topic['description']}">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={GA_TAG}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', '{GA_TAG}');
  </script>

  <!-- JSON-LD Structured Data for Rich Snippets -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "Article",
        "headline": "{topic['title']}",
        "description": "{topic['description']}",
        "image": "{BASE_URL}/anki_musou_icon.png",
        "author": {{
          "@type": "Organization",
          "name": "kpworks"
        }},
        "publisher": {{
          "@type": "Organization",
          "name": "kpworks",
          "logo": {{
            "@type": "ImageObject",
            "url": "{BASE_URL}/anki_musou_icon.png"
          }}
        }},
        "mainEntityOfPage": {{
          "@type": "WebPage",
          "@id": "{BASE_URL}/{topic['slug']}.html"
        }},
        "inLanguage": "ja",
        "datePublished": "{today}",
        "dateModified": "{today}"
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "{BASE_URL}/index.html"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "{topic['category']}",
            "item": "{BASE_URL}/{topic['slug']}.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "mainEntity": {faq_json_str}
      }}
    ]
  }}
  </script>

  <link rel="stylesheet" href="assets/css/home.css">
  <link rel="stylesheet" href="assets/css/editorial.css">
  <style>
    .guide-container {{
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }}
    .guide-header {{
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      padding-bottom: 24px;
    }}
    .guide-category {{
      display: inline-block;
      font-size: 0.85rem;
      font-weight: 700;
      color: #6366f1;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }}
    .guide-title {{
      font-size: 2.1rem;
      line-height: 1.35;
      font-weight: 800;
      color: var(--text-main, #111827);
      margin-bottom: 16px;
    }}
    .guide-meta {{
      font-size: 0.9rem;
      color: var(--text-muted, #6b7280);
      display: flex;
      gap: 16px;
      align-items: center;
    }}
    .toc-card {{
      background: var(--card-bg, #f9fafb);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 40px;
    }}
    .toc-title {{
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: var(--text-main, #111827);
    }}
    .toc-list {{
      list-style: none;
      padding: 0;
      margin: 0;
    }}
    .toc-list li {{
      margin-bottom: 8px;
    }}
    .toc-list a {{
      color: #4f46e5;
      text-decoration: none;
      font-size: 0.95rem;
    }}
    .toc-list a:hover {{
      text-decoration: underline;
    }}
    .guide-card {{
      background: #ffffff;
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }}
    .guide-card h2 {{
      font-size: 1.45rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 16px;
      color: var(--text-main, #111827);
      border-left: 4px solid #6366f1;
      padding-left: 12px;
    }}
    .guide-card h3 {{
      font-size: 1.15rem;
      font-weight: 700;
      margin-top: 24px;
      margin-bottom: 12px;
    }}
    .guide-card p {{
      line-height: 1.8;
      color: var(--text-body, #374151);
      margin-bottom: 16px;
      font-size: 1rem;
    }}
    .guide-card ul, .guide-card ol {{
      line-height: 1.8;
      color: var(--text-body, #374151);
      padding-left: 24px;
      margin-bottom: 16px;
    }}
    .reading-next {{
      background: var(--card-bg, #f9fafb);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 12px;
      padding: 24px;
      margin-top: 40px;
    }}
    .reading-next h2 {{
      font-size: 1.1rem;
      margin-top: 0;
      margin-bottom: 12px;
    }}
    .reading-next a {{
      display: block;
      color: #4f46e5;
      text-decoration: none;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }}
  </style>
</head>
<body>

  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo">kpworks</a>
      <nav class="nav">
        <a href="index.html#apps">Apps</a>
        <a href="index.html#guides">Guides</a>
        <a href="index.html">Home</a>
      </nav>
    </div>
  </header>

  <main class="guide-container">
    <header class="guide-header">
      <span class="guide-category">{topic['category']}</span>
      <h1 class="guide-title">{topic['title']}</h1>
      <div class="guide-meta">
        <time datetime="{today}">{today.replace('-', '.')}</time>
        <span>執筆: kpworks 編集部</span>
        <span>読了目安: 5分</span>
      </div>
    </header>

    <!-- 目次 -->
    <nav class="toc-card" aria-label="目次">
      <div class="toc-title">目次</div>
      <ul class="toc-list">
        {''.join(toc_html)}
      </ul>
    </nav>

    <!-- 本文 -->
    {''.join(sections_html)}

    <!-- FAQ -->
    <article class="guide-card" id="faq">
      <h2>よくある質問（FAQ）</h2>
      <div style="margin-top: 20px;">
        {''.join(faq_html)}
      </div>
    </article>

    {app_shelf_html}

    <!-- 関連ガイド -->
    <nav class="reading-next" aria-label="あわせて読みたい">
      <h2>あわせて読みたい記事</h2>
      <a href="smartphone-addiction-study-guide.html">意志の力に頼るな！勉強中のスマホ依存を「物理的・構造的」に断ち切る究極の対策 →</a>
      <a href="sns-study-lock-habit.html">SNSの起動画面を『関所』にする！無意識のスマホいじりを勉強時間に変える逆転の発想 →</a>
      <a href="index.html">kpworks ホームへ戻る →</a>
    </nav>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 kpworks. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
"""
    return html

def update_index_html(topic):
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    count_match = re.search(r'<span class="count">(\d+)\s+ARTICLES</span>', content)
    if count_match:
        cur_count = int(count_match.group(1))
        new_count = cur_count + 1
        content = content.replace(count_match.group(0), f'<span class="count">{new_count} ARTICLES</span>')

    link_html = f'<a class="guide-link" href="{topic["slug"]}.html"><div><h4>{topic["title"][:28]}...</h4><p>{topic["description"][:45]}...</p></div><span aria-hidden="true">↗</span></a></div></section>'
    if '</div></section><section class="about">' in content:
        content = content.replace('</div></section><section class="about">', link_html + '<section class="about">', 1)

    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(content)

def update_sitemap_xml(topic):
    today = datetime.date.today().isoformat()
    with open(SITEMAP_PATH, "r", encoding="utf-8") as f:
        sm = f.read()

    new_entry = f"""  <url>
    <loc>{BASE_URL}/{topic['slug']}.html</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""
    if topic["slug"] not in sm:
        sm = sm.replace("</urlset>", new_entry)
        with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
            f.write(sm)

def main():
    existing = get_existing_slugs()
    target_topic = None
    for t in TOPIC_QUEUE:
        if t["slug"] not in existing:
            target_topic = t
            break

    if not target_topic:
        print("All queue topics already exist!")
        return

    article_html = generate_article_html(target_topic)
    file_path = os.path.join(SCRATCH_DIR, f"{target_topic['slug']}.html")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(article_html)

    update_index_html(target_topic)
    update_sitemap_xml(target_topic)

    full_url = f"{BASE_URL}/{target_topic['slug']}.html"
    print(f"GENERATED_URL={full_url}")
    print(f"GENERATED_TITLE={target_topic['title']}")

    gh_output = os.getenv("GITHUB_OUTPUT")
    if gh_output:
        with open(gh_output, "a", encoding="utf-8") as f:
            f.write(f"page_url={full_url}\n")
            f.write(f"page_title={target_topic['title']}\n")
            f.write(f"slug={target_topic['slug']}\n")

if __name__ == "__main__":
    main()
