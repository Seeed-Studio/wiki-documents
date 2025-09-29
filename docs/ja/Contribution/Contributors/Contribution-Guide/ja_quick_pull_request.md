---
description: クイックで簡潔な手順
title: クイックプルリクエスト
keywords:
- コミュニティ
- プロジェクト
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/quick_pull_request
last_update:
  date: 05/15/2025
  author: Matthew
---


### Seeed Studio ファイルへの貢献をご検討いただきありがとうございます！

この簡潔な貢献プロセスは、ローカルでウェブサイトをデプロイする必要なく、迅速にファイルをプルリクエスト（PR）できるようにするものです。変更やページの追加をローカルで確認したい場合は、[こちら](/ja/full_steps_pull_request)をクリックしてください。

## オールインワンコード

Markdown ファイルと画像のみを追加する場合：

1. [Seeed Studio Wiki Platform の GitHub リポジトリ](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version)にアクセスし、`wiki-documents` リポジトリを自分のアカウントに `fork` してください。

2. 以下のコードを一括でコピーしてコマンドを実行します（`{your repo}` を自分のフォークしたリポジトリに置き換えてください）：

:::tip
例えば、私の GitHub ユーザー名が `MatthewJeffson` の場合、最初のコマンドは次のようになります：`git clone --no-checkout --depth 1 https://github.com/MatthewJeffson/wiki-documents.git`
:::

```bash
git clone --no-checkout --depth 1 https://github.com/{your repo}/wiki-documents.git
cd wiki-documents
git sparse-checkout init --cone
git sparse-checkout set sidebars.js docs 
git switch docusaurus-version
git pull origin docusaurus-version
```

PC 上に "wiki-documents" というフォルダが作成されます。

2. すべてのファイル（Markdown ファイルと画像）を "Contributor_Files" フォルダに保存してください：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

3. 以下のコマンドを実行して、すべてのファイルを GitHub にプッシュします：

```
git add .
git commit -m "Add new document"
git push origin docusaurus-version
```

4. 自分のリポジトリで "Pull Request" をクリックすれば完了です。

<strong><font color={'8DC215'} size={"5"}>完了！</font></strong>

## 自動チェック付きのステップバイステップ手順

上記の手順を詳しく説明し、自動チェックコードを紹介します。

1. まず、以下のコマンドを使用してリポジトリをクローンします：

   ```
   git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
   ```

   ここでは、以下のオプションを使用しています：
   - `--no-checkout`: ファイルをチェックアウトせずにリポジトリのメタデータのみを取得します。これによりクローン処理が高速化されます。
   - `--depth 1`: 最新のコミットとメタデータのみをクローンし、履歴全体を取得しません。これによりダウンロードするデータ量がさらに削減されます。

2. クローン後、リポジトリのディレクトリに移動します：

   ```
   cd wiki-documents
   ```

3. 次に、Git のスパースチェックアウト機能を有効にします：

   ```
   git sparse-checkout init --cone
   ```

   スパースチェックアウトを使用すると、リポジトリ全体ではなく一部のファイルのみをチェックアウトできます。`--cone` オプションは、より柔軟なパスマッチングをサポートするコーンモードを有効にします。

4. スパースチェックアウトのルールを設定します：

   ```
   git sparse-checkout set sidebars.js docs
   ```

   このコマンドは、`sidebars.js` ファイルと `docs` ディレクトリのみをチェックアウトするように Git に指示します。`sidebars.js` は Docusaurus の設定ファイルであり、`docs` ディレクトリにはすべての Markdown ドキュメントが含まれています。

5. スパースチェックアウトのルールを設定した後、`docusaurus-version` ブランチに切り替えます：

   ```
   git switch docusaurus-version
   ```

   このステップは、ドキュメントがこのブランチで開発および管理されているため必要です。

6. ターゲットブランチに切り替えた後、設定されたファイルとディレクトリをプルします：

   ```
   git pull origin docusaurus-version
   ```

   このコマンドは、リモートリポジトリの `docusaurus-version` ブランチから最新の `sidebars.js` と `docs` をプルします。

7. これで、コントリビューターは `docs` ディレクトリに新しい Markdown ファイルを追加し、`sidebars.js` ファイルを編集して新しいドキュメントのパスを追加できます。

8. 新しいドキュメントを追加した後、Lint Markdown ツールを使用して新しいファイルの構文をチェックします：

   ```
   npm install -g @lint-md/cli
   npx @lint-md/cli docs/new-file.md
   ```

   新しいファイルに構文エラーや規約違反がある場合、Lint Markdown がプロンプトを表示します。コントリビューターは、エラーメッセージがなくなるまでプロンプトに基づいて修正を行うことができます。

9. 一部の一般的な構文エラーを自動的に修正したい場合は、`--fix` オプションを使用します：

   ```
   npx @lint-md/cli docs/new-file.md --fix
   ```

   このコマンドは、中国語と英語の間のスペース不足や、誤った省略記号の使用など、一般的なフォーマットの問題を自動的に修正します。

10. 最後に、すべての修正が完了したら、変更をコミットしてリモートリポジトリにプッシュします：

    ```
    git add .
    git commit -m "Add new document"
    git push origin docusaurus-version
    ```

    これで、新しいドキュメントがリモートリポジトリの `docusaurus-version` ブランチに正常に追加されます。

ステップ 8 と 9 で Lint Markdown ツールを使用することで、新しく追加されたドキュメントが規約に準拠していることを確認し、ドキュメント全体の品質と一貫性を向上させることができます。

この簡潔な貢献プロセスとスパースチェックアウトおよび Lint Markdown の使用により、コントリビューターのワークフローが最適化され、より効率的で使いやすくなります。