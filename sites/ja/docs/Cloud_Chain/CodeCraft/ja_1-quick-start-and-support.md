---
description: CodeCraft の開始方法、ログイン、メンバーシップの購入と有効化、請求と使用状況の管理、ヘルプとサポートの見つけ方について説明します。
title: CodeCraft クイックスタート & サポート
keywords:
  - CodeCraft
  - クイックスタート
sidebar_label: 1. クイックスタート & サポート
image: https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-banner.webp
slug: /codecraft/quick-start-and-support
sidebar_position: 2
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/ja/codecraft/quick-start-and-support/
---

# CodeCraft クイックスタート & サポート

![CodeCraft Banner](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-banner.webp)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://codecraft.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>CodeCraft を今すぐ体験 🚀</font></span></strong>
    </a>
</div>

## 1.1 CodeCraft の概要

### 1.1.1 「こうしたい」と言うだけで動く

CodeCraft は、ハードウェアシナリオに特化して設計された AI プログラミングアシスタントです。やりたいことを自然言語で説明するだけで、CodeCraft が実行可能なハードウェアプログラムを生成してくれます。

開発環境をゼロから構築することなく、素早くハードウェア制作を完了したいユーザーに適しています。学生、教師、メイカー、ハードウェアプログラミング初心者のいずれであっても、会話を通じてアイデアから実行までの全プロセスを完了できます。

### 1.1.2 アイデアから実行まで 4 ステップ

<!--![CodeCraft Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-how-it-works.png)-->

CodeCraft の基本的なワークフローはとてもシンプルです：

1. **Describe**  
   「ポモドーロタイマーを作る」「開発ボードで温度と湿度を検知する」といったように、自然言語でアイデアを説明します。

2. **Generate**  
   CodeCraft が説明に基づいて、実行可能なコードとプロジェクトドキュメントを自動生成します。

3. **Flash**  
   Web 経由のワンクリックで、プログラムを開発ボードに書き込みます。

4. **Share**  
   完成後、プロジェクトを SenseCraft AI コミュニティに公開し、再利用や共有ができます。

### 1.1.3 CodeCraft はあなたのハードウェアを理解します

<!--![CodeCraft vs General Coding Tools Comparison](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-comparison.png)-->

一般的な AI コーディングツールと比べて、CodeCraft はハードウェアシナリオにより特化しています。コードを生成するだけでなく、開発ボード、センサー、通信プロトコル、ハードウェアライブラリも理解します。

| 機能 | 一般的なコーディングツール | CodeCraft |
| :--- | :---: | :---: |
| ソフトウェアコード生成 | 対応 | 対応 |
| MCU ピンやボード仕様の理解 | 常に対応しているとは限らない | 対応 |
| センサーおよび通信プロトコルのサポート | 常に対応しているとは限らない | 対応 |
| クラウドコンパイル、ローカル環境構築不要 | 常に対応しているとは限らない | 対応 |
| 開発ボードへのワンクリック書き込み | 常に対応しているとは限らない | 対応 |
| SenseCraft AI ハードウェアコミュニティへの共有 | 常に対応しているとは限らない | 対応 |

### 1.1.4 コア機能

<!--![CodeCraft Core Features](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-core-features.png)-->

CodeCraft のコア機能には次のものが含まれます：

| 従来の開発ワークフロー（複雑すぎる ❌） | CodeCraft のコア機能（とてもシンプル ✅） |
| :--- | :--- |
| ❌ 大規模な IDE をインストール | ✨ インストール不要：完全 Web ベースでクライアント不要 |
| ❌ 複雑な環境構築 | ✨ 設定不要：ドライバや環境構築は一切不要 |
| ❌ コードをゼロから記述 | 🤖 AI ネイティブ：ピンやセンサーを理解し、ハードウェアコードを直接生成 |
| ❌ 複雑なツールチェーンの管理 | ☁️ クラウドコンパイル：バックエンドで完全自動コンパイル |
| ❌ 手動での書き出しと書き込み | 🚀 ワンクリック書き込み：デバイスへ直接アップロード |
| ❌ 孤立した開発 | 🌐 コミュニティ共有：SenseCraft AI を通じてプロジェクトを公開・再利用 |

### 1.1.5 対応ハードウェアエコシステム

![CodeCraft Hardware Ecosystem](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-hardware-ecosystem-EN.png)

CodeCraft は Seeed Studio のハードウェアエコシステムとシームレスに統合されており、次のデバイスをサポートします：

* **Wio Terminal**: 2.4 インチディスプレイ、各種センサー、Wi-Fi、Bluetooth を備えたオールインワン開発ボード。
* **XIAO ESP32S3 Sense**: カメラとマイクを搭載したコンパクトな開発ボードで、AI ビジョンや音声プロジェクトに適しています。
* **Grove Beginner Kit**: モジュール一体型のオールインワンボードで、配線不要。初心者や教育用途に最適です。
* **300+ Grove センサー**: 動作検知、環境モニタリング、ディスプレイ出力、アクチュエータ制御、光・音センシング、イメージングに対応。

---

## 1.2 準備とログイン

CodeCraft は複数のログイン方法を提供しています。開発者、学生、教育者のいずれであっても、すぐに使い始めることができます。

### 1.2.1 個人アカウントの登録とログイン

初めて CodeCraft を使用する際は、複雑な登録は不要で、自動的にアカウントが作成されます。次の方法でログインできます：

* メールアドレスでログイン
* Google ログイン
* GitHub ログイン
* Apple ログイン
* Bazaar ログイン（Seeed Studio 公式ストアアカウント）

複数デバイス間でプロジェクトやクラウドデータを同期できるよう、普段から使用しているログイン方法を利用することをおすすめします。

![Sign-up / Log-in](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Sign-up-Log-in-EN.png)

### 1.2.2 クラスコードでのログイン

CodeCraft は教育シナリオ向けに、クラスコードでのログインにも対応しています。

クラスコードログインを利用すると、学生は登録を行わずに、教師が割り当てたクラス環境に直接入ることができます。

手順：

1. ログイン画面で「クラスコードでログイン」を選択します。
2. 教師から提供されたクラスコードを入力します。
3. クラス環境に入り、CodeCraft の利用を開始します。

クラスコードは通常、教師または学校から提供されます。教育用途のニーズについては、サポートに連絡するか、CodeCraft 教育ソリューションのページをご覧ください。

![Classroom Code Login](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Class-Code-Login-EN.png)

---

## 1.3 CodeCraft メンバーシップの購読と有効化

### 1.3.1 サブスクリプションプラン

![CodeCraft Subscription Plans](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-plans-EN.jpg)

CodeCraft は、さまざまな利用ニーズに対応する複数のサブスクリプションプランを提供しています。利用頻度、プロジェクト規模、AI 生成の要件に応じて選択できます。

| プラン | 対象ユーザー | 説明 |
| :--- | :--- | :--- |
| FREE | 初めてのユーザー | 基本的な AI クリエーション機能 |
| Pro | 学生、ホビーユーザー | 学習、プロジェクト、適度な利用に最適 |
| Max | 教師、メイカー、開発者 | 授業、開発、ヘビーユース向けの高いクォータ |

> 価格、クォータ、有効期間は、プロモーションや購入チャネルによって異なる場合があります。詳細は公式購入ページをご確認ください。

### 1.3.2 購入方法

CodeCraft メンバーシップは複数のチャネルから購入できます。価格、プロモーション、有効期間はチャネルによって異なる場合があります。

#### 方法 1: 公式サイトで購入

| 購入経路 | 手順 | ユースケース |
| :--- | :--- | :--- |
| CodeCraft ホームから購入 | 1. https://codecraft.seeed.cc/pricing にアクセス<br/>2. プランを選択<br/>3. 支払いを完了 | プランを比較したいユーザー |
| ワークスペースからアップグレード | 1. https://codecraft.seeed.cc/workspace にアクセス<br/>2. Settings をクリック<br/>3. Billing に進む<br/>4. プランを購入 | 既存ユーザーのアップグレード |

> どちらの方法でも、同じアカウントに同一のメンバーシップが有効化されます。

#### 方法 2: Seeed Studio ストア（中国国内 & グローバル）

| 購入経路 | 手順 | ユースケース |
| :--- | :--- | :--- |
| [Seeed Studio Taobao 店](https://item.taobao.com/item.htm?id=1061524473439&skuId=6270812574966&spm=a213gs.v2success.0.0.17b14831MkryRQ) | 1. 公式 Taobao 店で購入<br/>2. 引き換えコードを受け取る<br/>3. CodeCraft の請求ページで入力 | 国内ユーザー、教育機関での調達 |
| [Seeed Studio 公式ストア](https://www.seeedstudio.com/CodeCraft-Hardware-focused-AI-Coding-Assistant-for-Wio-Terminal-Grove-Beginner-Kit-XIAO-ESP32.html) | 1. 公式ストアで購入<br/>2. 引き換えコードを受け取る<br/>3. CodeCraft の請求ページで有効化 | 海外ユーザー、各種団体 |

---

### 1.3.3 メンバーシップコードの引き換え

Taobao、公式ストア、またはプロモーションから引き換えコードを入手した場合：

1. https://codecraft.seeed.cc を開きます
2. ログインします
3. ワークスペースに入ります
4. Settings をクリックします
5. Account または Billing に進みます
6. 「Redeem Code」を探します
7. コードを入力して確定します

注意事項：

* 各コードは通常 1 回のみ使用可能です。
* 引き換え前に、正しいアカウントであることを確認してください。
* 有効期間は注文内容に依存します。
* 有効化されない場合は、ページを更新するか再ログインしてください。

---

## 1.4 請求と使用状況の管理

設定画面から、サブスクリプションの状態、残高、引き換え履歴、使用状況を確認できます。

手順：

1. ワークスペースを開く：https://codecraft.seeed.cc/workspace
2. Settings をクリック
3. Billing または Usage を選択

### 1.4.1 請求管理

![Billing Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/billing-interface-EN.png)

次の内容を確認できます：

* 現在のサブスクリプションプラン
* プランの特典と有効期間
* アカウント残高
* 引き換え履歴
* 請求履歴

### 1.4.2 使用状況の管理

![Usage Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Usage-Interface-EN.png)

次の内容を確認できます：

* 日次または週次の AI 利用量
* 残りクォータ
* リセット時間
* 追加の使用設定
* 使用履歴

教師や教育機関は、計画のために定期的に使用状況を確認することをおすすめします。

---

## 1.5 ヘルプとサポート

### 1.5.1 FAQ

**Q: 引き換えコードが無効なのはなぜですか？**  
A: コードの正しさ、使用状況、ログインしているアカウントを確認してください。

**Q: Taobao で購入しましたが、コードを受け取っていません。**  
A: 注文詳細を確認するか、店舗サポートにお問い合わせください。

**Q: 引き換え後にサブスクリプションが有効化されません。**  
A: ページを更新するか再ログインしてください。それでも無効な場合は、注文情報とともにサポートにお問い合わせください。

### 1.5.2 サポートへの連絡

#### 技術サポート

* ワークスペースの設定画面で「Contact Us」をクリック
* 新機能のベータ版アップデートをフォロー
* 教育機関はクラスコードやカスタマイズをリクエスト可能
* ハードウェア購入：https://seeedstudio.com  

![Contact Us](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/contact-us-EN.png)

#### 追加サポート

![Professional Support](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Professional-Support-EN.png)
