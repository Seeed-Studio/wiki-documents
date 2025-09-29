---
description: ローカルでWikiプラットフォームをデプロイする
title: ローカルでWikiプラットフォームをデプロイする
keywords:
- 貢献
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Deploy_Page_Locally
last_update:
  date: 05/15/2025
  author: Matthew
---

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ローカルでWikiプラットフォームをデプロイする

### 1. リポジトリをフォークしてダウンロードする

a. [Seeed Studio WikiプラットフォームのGithubリポジトリ](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version)にアクセスし、自分のアカウントに「wiki-documents」リポジトリを`フォーク`してください。

![image1](./1.jpg)

b. ファイルをローカルPCにダウンロードしてください。`git`をインストールしていない場合は、[こちら](https://git-scm.com/)からダウンロードできます。

```
git clone {あなたのリポジトリ}
```

![image2](./2.jpg)

### 2. node.jsをダウンロードする

お使いのオペレーティングシステム（Windows、Mac）に応じて[node.js](https://nodejs.org/en/download/)をダウンロードしてください。

`v20.18.1 (LTS)`バージョンのnode.jsをインストールしてください。そうしないと、インストールプロセス中にエラーが発生する可能性があります。

### 3. Visual Studio Codeをダウンロードする

お使いのオペレーティングシステム（Windows、Mac）に応じて[Visual Studio Code](https://code.visualstudio.com/Download)をダウンロードしてください。

### 4. Yarnをインストールする

"Visual Studio Code"を開き、以下のコマンドを使用してYarnをインストールしてください。

```
npm install --global yarn
```

詳細については[こちら](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)をご確認ください。

### 5. Yarnを使用して依存関係を自動的にインストールする

```
yarn
```

Windowsオペレーティングシステムを使用している場合は、「Powershell」を「Command Prompt(cmd)」に変更してから`yarn`を実行してください。

### 6. Yarnを使用してローカルでWikiプラットフォームをビルドする

```
yarn start
```

![image3](./3.jpg)

### 7. 変更を加えたりファイルを追加したりできます！

- [PRの完全な手順](/ja/full_steps_pull_request)
- [PRの簡易手順](/ja/quick_pull_request)