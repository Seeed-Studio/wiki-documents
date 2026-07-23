---
description: SenseCraft AI Application Gallery を通じて CodeCraft プロジェクトを閲覧、再利用、公開します。
title: CodeCraft コミュニティ & 公開
keywords:
  - CodeCraft
  - 公開
sidebar_label: 3. コミュニティ & 公開
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/ja/codecraft/community-and-publishing/
createdAt: '2026-06-30'
updatedAt: '2026-06-30'
---

# CodeCraft コミュニティ & 公開

CodeCraft はゼロからプロジェクトを構築するだけでなく、SenseCraft AI Application Gallery を通じて作品を閲覧、再利用、公開することもできます。

Application Gallery では、プロジェクトのインスピレーションを探したり、公式サンプルを閲覧したり、コミュニティプロジェクトを体験したり、自分の CodeCraft 作品を公開してより多くのユーザーと共有したりできます。ほかのユーザーはあなたのプロジェクトを閲覧し、ファームウェアをデプロイし、許可されている場合は学習やさらなる開発のためにプロジェクトをクローンできます。

このドキュメントでは、Application Gallery でコミュニティプロジェクトを閲覧する方法と、CodeCraft プロジェクトを SenseCraft AI Application Gallery に公開する方法を説明します。

---

## 3.1 Application Gallery とコミュニティプロジェクト

SenseCraft AI の [Application Gallery](https://sensecraft.seeed.cc/ai/application) では、インスピレーションの発見からプロジェクト公開までの一連のワークフローを 1 か所で完結できます。

![CodeCraft Community Projects](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**ここでできること**

| 目的 | 説明 |
|------|----------|
| 🔍 インスピレーションを探す | 多数のプロジェクトを閲覧してアイデアを得る |
| 📖 公式サンプルを学ぶ | 公式チームが提供する標準的な実装を学習 |
| ♻️ コミュニティプロジェクトを再利用 | 既存の作品をそのままフォークまたは改変 |
| 🚀 自分の作品を公開 | 自分の作品をコミュニティに向けて発信 |
| 🎮 ハードウェアを素早く体験 | ミニゲームから高度なメイカープロジェクトまで、迅速なプロトタイピングを実現 |

**主なメリット**

- **CodeCraft で開発を加速** — プロトタイプを素早く構築でき、コーディングのハードルを下げます。
- **ワンクリック公開** — 完成したプロジェクトをギャラリーに直接公開し、世界中で再利用できます。

> 💡 カジュアルなプロジェクトから高度なメイカープロジェクトまで、あらゆる段階に適しています。初心者から上級者まで、誰でも活用できます。

---

**Application Gallery の使い方**

| 方法 | 動作内容 | ユースケース |
| :--- | :--- | :--- |
| **閲覧 & 再利用** | **Clone**（プロジェクトをコピー → 元の内容を基に変更） | • 開発ボードやセンサーを素早く体験<br/>• 既存のサンプルを改変<br/>• 公式プロジェクトを授業やデモ用にアレンジ |
| **作成 & 公開** | **Publish**（App → My Apps → Create New App → New Workspace） | • アイデアを公開してフィードバックを得る<br/>• 他の人向けにサンプルを提供<br/>• 個人のプロジェクトポートフォリオを構築 |

---

## 3.2 アプリケーションの公開

### 3.2.1 公開前の準備

公開前に、次の素材を準備してください。

| 項目 | 要件 | 備考 |
|--------|----------|------|
| **プロジェクト画像** | • カバー画像として推奨<br/>• アスペクト比：`4:3`<br/>• サイズ：`2MB` 未満<br/>• 明瞭で内容を視覚的に表現 | 必須 |
| **プロジェクト名 & 説明** | • 簡潔で魅力的な名前<br/>• デバイス名などのキーワードを含めてもよい（例：`Wio Terminal`、`XIAO ESP32S3 Sense`） | 必須 |
| **ファームウェアファイル** | • 形式：`.bin` または `.hex`<br/>• 実機でテスト済みであること<br/>• `.bin` は Wio Terminal / XIAO ESP32S3 Sense 用<br/>• `.hex` は Grove Beginner Kit で一般的 | 必須 |
| **ソースコードファイル** | • 例：`.ino` ファイル<br/>• 任意。学習や改変用 | 任意 |

---

### 3.2.2 公開に関する FAQ

| 質問 | 回答 |
|------|----------|
| **ファームウェアがない場合は？** | - ファームウェアは必須であり、ない場合は他のユーザーがプロジェクトを実行できません<br/>- アップロード前に必ず実機でファームウェアをテストしてください<br/>- まだ生成していない場合は、CodeCraft AI に「Please provide a `.bin` firmware file.」と依頼してください |
| **カバーやドキュメントで GIF は使えますか？** | - はい、カバー画像とドキュメントの両方で GIF をサポートしています<br/>- 動的なデモに推奨されます<br/>- 読み込みが遅くならないよう、ファイルサイズは小さく保ってください |
| **動画を埋め込めますか？** | - はい、動画リンクの埋め込みに対応しています<br/>- YouTube、Bilibili、抖音（Douyin）などのプラットフォームに対応<br/>- エディタにリンクを直接貼り付けると自動的に埋め込み表示されます |

---

## 3.3 SenseCraft AI で新しい App を公開する

### 3.3.1 SenseCraft AI へアクセス

[SenseCraft AI Application Gallery](https://sensecraft.seeed.cc/ai/application) を開きます。ここから新しいアプリケーションをゼロから作成することも、既存のアプリケーションをクローンして改変・再公開することもできます。

---

### 3.3.2 新しいアプリケーションを作成

ゼロから開始することも、既存のアプリケーションをテンプレートとして利用することもできます。

#### 3.3.2.1 既存の App をクローン

任意の公開済みアプリケーションを開き、`Clone` をクリックして、その内容を基に編集を続けます。

![Clone App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 新しい App を作成

Application Gallery に移動し、次をクリックします。

`My Apps` > `Create New App` > `Create New Workspace`

![Create New App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 コンテンツの編集

アプリケーションを作成したら、エディタを使って 4 つのステップで内容を完成させます。

![Edit App Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 App 概要

名前、説明、シナリオ、ライセンス、画像など、アプリの基本情報を入力します。

| 項目 | 説明 & 提案 | 必須 |
| :--- | :--- | :--- |
| **Name** | • 分かりやすく魅力的にする<br/>• `Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense`、`CodeCraft` などのデバイスキーワードを含める<br/>• 例：`CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **Description** | • 機能と使用ハードウェアを簡潔に説明<br/>• 該当する場合は「CodeCraft で作成した」ことを明記<br/>• 例：`This is a Wio Terminal project created with CodeCraft for real-time temperature and humidity display.` | ✅ |
| **Scenario** | 次から選択：<br/>• Education（教育）<br/>• Smart Home（スマートホーム）<br/>• Environmental Monitoring（環境モニタリング）<br/>• Sensor Applications（センサー応用）<br/>• AIoT Projects（AIoT プロジェクト） | ✅ |
| **License** | **1. クローンを許可：** 他のユーザーがプロジェクトをフォークして改変できるようにします<br/>**2. 商用利用を許可：** 許可する場合、商用利用を可能にします | ✅ |
| **Images** | • 実機の写真を使用<br/>• アスペクト比 `4:3`、サイズ `2MB` 未満<br/>• プロジェクトの出力がはっきり分かるもの<br/>• 最大 16 枚まで | ✅ |

---

#### 3.3.3.2 App 詳細

このセクションでは、プロジェクトの背景、開発プロセス、使用手順を記述します。ワンクリックでデプロイできるように、ファームウェアブロックを追加することもできます。

| カテゴリ | 記述内容 / コンテンツ | 例 |
| :--- | :--- | :--- |
| **プロジェクト紹介** | • 機能とハードウェアを説明<br/>• CodeCraft のワークフローを解説<br/>• 使用したプロンプトを列挙<br/>• 結果と注意点を示す<br/>• CodeCraft へのリンクを追加 | ![project-doc-interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **ファームウェア & デバイスへのデプロイ** | • 「Flash Firmware」ブロックを挿入<br/>• 対象デバイスを選択<br/>• Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense をサポート | ![Document Editing](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **ファームウェアファイルのアップロード** | • `.bin` または `.hex` ファイルをアップロード<br/>• `.hex` は主に Grove Beginner Kit 用<br/>• ファームウェアがテスト済みであることを確認 | ![Firmware Upload](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **ソースコードのアップロード（任意）** | • `.ino` などのソースファイルをアップロード<br/>• 学習や改変に役立ちます | ![Upload Source](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **開発 & テストの詳細** | • 手順を分かりやすく記述<br/>• テスト方法と結果を含める<br/>• 必要に応じてスクリーンショットやデータを追加 | — |

---

#### 3.3.3.3 部品表（Bill of Materials）

| Seeed 開発ボード | その他の Seeed 製品 | サードパーティ製ハードウェア / ツール |
| :--- | :--- | :--- |
| `Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense` | • Grove センサー、拡張モジュールなど<br/>• 対応デバイスがない場合は、[SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) からリクエストを送信 | • サードパーティ製ハードウェア<br/>• その他関連する部材 |

---

#### 3.3.3.4 プレビュー & 公開

**送信前に、次の点を確認してください。**

| カテゴリ | チェック項目 |
| :--- | :--- |
| **基本情報** | • カバー画像が鮮明で魅力的である<br/>• App 名が正確である<br/>• 説明が分かりやすい<br/>• ライセンス設定が正しい |
| **部品 & ファームウェア** | • 部品表が完全である<br/>• ファームウェアが正しくアップロードされている |
| **機能検証** | • ファームウェアを書き込んだ後、デバイスが正しく動作する |
| **任意コンテンツ** | • ソースコードがダウンロード可能（アップロードしている場合）<br/>• 3D モデルやベクター素材などの追加ファイル |

確認が完了したら、**Publish** をクリックし、免責事項に同意します。

---

### 3.3.4 公開後

審査に通過すると、あなたのアプリケーションは SenseCraft AI Application Gallery に表示されます。

アプリのリンクをコピーして、SNS、コミュニティフォーラム、プロジェクトドキュメントなどで共有することで、より多くのユーザーにあなたの CodeCraft プロジェクトを見つけてもらい、利用してもらうことができます。
