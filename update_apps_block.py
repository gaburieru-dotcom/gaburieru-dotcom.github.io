import glob
import re

new_block = """    <!-- App Introduction -->
    <section class="global-app-intro" style="margin-top: 48px; margin-bottom: 24px; padding: 32px 24px; background: var(--card-bg, #f8fafc); border: 1px solid var(--card-border, #e2e8f0); border-radius: var(--border-radius-md, 16px); box-shadow: var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.05)); text-align: center;">
      <p style="font-family: var(--font-display, sans-serif); font-size: 0.85rem; color: var(--primary-color, #f97316); font-weight: 700; letter-spacing: 0.05em; margin-bottom: 8px;">kpworks APPS</p>
      <h2 style="font-family: var(--font-display, sans-serif); font-size: 1.5rem; color: var(--text-primary, #0f172a); margin-bottom: 16px; margin-top: 0;">トレーニングをサポートするアプリ</h2>
      <p style="color: var(--text-secondary, #475569); font-size: 0.95rem; margin-bottom: 24px; line-height: 1.6;">
        kpworksでは、日々の筋トレや計測に役立つアプリを開発しています。ぜひお試しください。
      </p>
      <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
        <a href="formx-guide.html" style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 400px; padding: 16px; background: rgba(255, 255, 255, 0.5); border: 1px solid var(--card-border, #e2e8f0); border-radius: var(--border-radius-sm, 8px); text-decoration: none; color: var(--text-primary, #0f172a); transition: 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px; text-align: left;">
            <img src="vertical_jump_icon_new.png" alt="formX" style="width: 48px; height: 48px; border-radius: 12px; object-fit: cover;">
            <div>
              <h3 style="margin: 0 0 4px 0; font-size: 1.05rem;">formX</h3>
              <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary, #475569);">動画からタイムや垂直跳びを測定・比較</p>
            </div>
          </div>
          <span style="color: var(--primary-color, #f97316); font-weight: bold;">↗</span>
        </a>
        <a href="https://apps.apple.com/jp/app/%E9%9F%B3%E6%A5%BD%E3%81%8C%E6%B5%81%E3%81%9B%E3%82%8B%E7%AD%8B%E3%83%88%E3%83%AC%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-hiit-%E3%81%9F%E3%81%B0%E3%81%9F%E5%BC%8F/id6754508192" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 400px; padding: 16px; background: rgba(255, 255, 255, 0.5); border: 1px solid var(--card-border, #e2e8f0); border-radius: var(--border-radius-sm, 8px); text-decoration: none; color: var(--text-primary, #0f172a); transition: 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px; text-align: left;">
            <img src="muscle_timer_icon.png" alt="筋トレタイマー" style="width: 48px; height: 48px; border-radius: 12px; object-fit: cover;">
            <div>
              <h3 style="margin: 0 0 4px 0; font-size: 1.05rem;">音楽が流せる筋トレタイマー</h3>
              <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary, #475569);">音楽を流しながらインターバルを管理</p>
            </div>
          </div>
          <span style="color: var(--primary-color, #f97316); font-weight: bold;">↗</span>
        </a>
        <a href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%B7%E3%83%A3%E3%83%88%E3%83%AB%E3%83%A9%E3%83%B3/id6752814242" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 400px; padding: 16px; background: rgba(255, 255, 255, 0.5); border: 1px solid var(--card-border, #e2e8f0); border-radius: var(--border-radius-sm, 8px); text-decoration: none; color: var(--text-primary, #0f172a); transition: 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px; text-align: left;">
            <img src="shuttle_run_icon.png" alt="スマートシャトルラン" style="width: 48px; height: 48px; border-radius: 12px; object-fit: cover;">
            <div>
              <h3 style="margin: 0 0 4px 0; font-size: 1.05rem;">スマートシャトルラン</h3>
              <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary, #475569);">20mシャトルランの音声再生と記録</p>
            </div>
          </div>
          <span style="color: var(--primary-color, #f97316); font-weight: bold;">↗</span>
        </a>
      </div>
    </section>
    <!-- /App Introduction -->"""

files = glob.glob("*.html")
for f in files:
    with open(f, 'r', encoding='utf-8', errors='surrogateescape') as file:
        content = file.read()
    
    # Use regex to find the block
    pattern = r'<!-- App Introduction -->.*?<!-- /App Introduction -->'
    if re.search(pattern, content, flags=re.DOTALL):
        new_content = re.sub(pattern, new_block, content, flags=re.DOTALL)
        with open(f, 'w', encoding='utf-8', errors='surrogateescape') as file:
            file.write(new_content)
        print(f"Updated {f}")
    
