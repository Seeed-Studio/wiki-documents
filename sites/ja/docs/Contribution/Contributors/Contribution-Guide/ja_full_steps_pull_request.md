---
description: 方法 - 簡潔で効率的
title: フルステッププルリクエスト
keywords:
- コントリビューター
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/full_steps_pull_request
last_update:
  date: 05/15/2025
  author: Matthew
---


### Seeed Studio ファイルへの貢献をご検討いただきありがとうございます！

この効率的な貢献プロセスは、ファイルをプルリクエストするための完全な手順を提供することを目的としています。Markdown ファイルや画像を追加するだけの場合は、[こちら](/ja/quick_pull_request)をご確認ください。

## リポジトリへのファイル提出手順

### 前提条件: リポジトリを `git clone` し、ウェブサイトをローカルでデプロイする

<strong><a href="/ja/Deploy_Page_Locally"><span><font color={'8DC215'} size={"4"}>こちらをクリックしてウェブサイトをローカルでデプロイし、変更を確認できます！</font></span></a></strong>

### 1. フォークしたブランチを最新の状態にする

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg" /></div>

### 2. ダウンロードしたファイルを更新する

以下のコードを使用して、ダウンロードしたファイルを更新してください。

```
git checkout docusaurus-version
git pull
```

### 3. 既存ファイルの内容を変更する

Wiki プラットフォーム上のすべてのファイルは "docs" フォルダに保存されています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg" /></div>

:::note
変更したいファイル名は通常 URL の最後の部分です（例として Seeed Studio XIAO ESP32C3 を使用）。
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg" /></div>
:::

#### ファイルを追加する場合

追加するすべてのファイル（Markdown ファイルと画像）は "Contributor_Files" フォルダに保存してください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

### 4. ローカルで変更したファイルを確認する

更新が完了したら、以下のコマンドを使用して正しく表示されるか確認してください。

```
yarn start
```

編集プラットフォーム上で:

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

ローカルページ上で:

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 5. 変更をフォークした GitHub リポジトリに保存してプッシュする

すべて問題がなければ、以下のコマンドを使用して変更をフォークした GitHub リポジトリにプッシュしてください。

```
git add "変更したファイル"
git commit -m "更新：変更を行いました ..."
git push
```

### 6. Seeed Studio リポジトリにプルリクエストを送る

変更を GitHub リポジトリにプッシュすると、自動的にカラムが表示されます。「Compare & Pull Request」ボタンをクリックしてください。

![image6](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/6.jpg)

編集内容を説明し、「create pull request」ボタンをクリックしてください。

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

ご貢献ありがとうございます！