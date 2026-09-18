# 公開方法

このフォルダは gaburieru-dotcom/gaburieru-dotcom.github.io の main に接続されています。
HTML・CSS・画像のフォルダ構成を保ってGitで送信してください。

```sh
sh scripts/deploy.sh "サイトを更新"
```

リモートの変更確認 → 全変更のステージ → 公開ファイルの作成と参照チェック
→ コミット → push を実行します。GitHubへの書き込み認証とGitのuser.name / user.emailが必要です。
このコマンドはこのフォルダの全変更をコミットします。機密情報を置かないでください。
リモートに未反映の変更がある場合は停止するため、内容を確認して統合してください。

mainへのpush後、GitHub Actionsが同じチェックを実行し、成功時のみGitHub Pagesに公開します。
GitHubの Settings → Pages → Source は GitHub Actions を使用します。
既存のCNAME（sbmgtech.com）は維持しています。

公開状況: https://github.com/gaburieru-dotcom/gaburieru-dotcom.github.io/actions

ローカル確認だけを行う場合:

```sh
git add --all
python3 scripts/build_site.py
python3 -m http.server 8000 --directory _site
```

公開には `_site` 内のWeb用ファイルのみを使用し、Git履歴・作業メモ・スクリプトは含めません。

既存の apps.html / articles.html の tower_defense.png は元画像が存在しないため警告扱いです。
タイピングアプリの入力・復元処理の検証: `node --test tests/typing.test.cjs`
