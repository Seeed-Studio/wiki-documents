---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 05/15/2025
  author: Corey Thompson
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::note
このドキュメントは、すでにネットワーク上で稼働している Ignition Edge Gateway を持っていることを前提としています。
これらの手順を試す前に、必要に応じて [Getting Started with Ignition Edge](/ja/reTerminal-DM-Getting-Started-with-Ignition-Edge) を参照してください。
:::

## ハードウェアの前提条件
- SSH ターミナル機能を備えた PC / Mac
- Ignition の Designer アプリケーションをインストールするための十分なハードドライブ容量を備えた PC / Mac
- 12-24V DC 電源
- イーサネットケーブル
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

## ライセンス
このチュートリアルでは、製品のアクティベーションは必要ありませんが、シリーズの進行速度によっては作業中に中断が発生する可能性があります。Ignition Edge 製品は、製品環境での完全な使用にはライセンスが必要です。製品の試用版が利用可能で、すべての機能がサポートされていますが、データは2時間ごとにクリアされます。

製品のライセンスを取得するには、Inductive Automation の営業担当者に連絡するか、[Inductive Automation Ignition pricing](https://inductiveautomation.com/pricing/ignition) ページで購入することができます。

ライセンスを入力するには、Ignition Edge Gateway のホームページに表示される緑色のバナーに従って Ignition をアクティベートしてください。エッジデバイスがインターネット接続されていることを確認し、6文字または8文字の文字列を入力すると、デバイスが数秒でアクティベートされます。

## Panel Designer を使用した Hello World ビューの作成

基本的なページを作成し、固定 URL で表示する方法を示すために、「hello world」パースペクティブプロジェクトを作成し、ウェブブラウザでゲートウェイ上で表示します。

ゲートウェイのホームページを読み込むには、reTerminal 自体で `localhost:8088` を使用してウェブブラウザを起動するか、ネットワーク上の別のデバイスから `{reterminalhostname}:8088` を使用するか、reTerminal 自体の IP アドレスを使用して `{reterminalip}:8088` にアクセスします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Ignition Edge Panel Builder のインストールとセットアップ

ゲートウェイのホーム画面には Designer Launcher をダウンロードするボタンがあります。Designer Launcher は HMI デザイナーソフトウェアで、ローカル PC/Mac にインストールされ、reTerminal DM にデザインをリモートでロードします。

まず、このインストーラーをダウンロードして実行します。インストーラーはオペレーティングシステムを検出し、非常に基本的なインストーラーでアプリをマシンにインストールします。インストールが完了すると、ゲートウェイから設定をインポートするかどうかを尋ねられます - **はい** をクリックしてください。

新しくインストールされた Ignition Designer Launcher を起動すると、デバイスへの接続が表示されます。デバイスをクリックし、右下の「open designer」ボタンをクリックします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

ログインプロンプトが表示されます。Edge Gateway のセットアップ時に入力した Ignition 管理者資格情報を入力してください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### パネルの作成とロード

1. 左側の列で「Perspectives」を展開し、「Views」を右クリックします。
2. 新しいビューを作成し、名前を「hello-world」とします。
3. コンポーネントパレットを見つけます。これは右側の隠しタブコンテナにある場合があります。「label」を検索し、キャンバスにドラッグします。
4. ラベルをダブルクリックしてテキストを「hello world」に変更します。
5. ファイルを保存し、上部メニューバーで File -> Update Project に移動してプロジェクト（「Perspective session」）をゲートウェイに公開します。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Perspective セッションを更新したので、ウェブブラウザでアクセスできます！
作成したビューの URL を見つけるのに役立つ情報を得るには、Edge Gateway Launcher に戻り、アクティブな Perspective セッションを表示します。これにより、セッションのホームページ URL がブラウザで起動されます。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## HMI の拡張
これで、ReTerminal のビジュアルを強化するための Ignition の Perspective モジュールの基本設定が完了しました。Ignition プラットフォームの全機能を活用して、より強力なビジュアルを作成するには、Tag サーバーや Historian データベースなどを設定する必要があるかもしれませんが、これらはこのチュートリアルの範囲外です。Ignition プラットフォームについてさらに学ぶには、[Inductive University](https://inductiveuniversity.com/) の優れたドキュメントと無料の指導を活用してください。

## Perspective と Vision の比較
Ignition では 2 種類のパネルビルダーソフトウェアを提供しており、どちらを使用するかを決めるのはよくある質問です。両者には多くの機能の重複がありますが、決定を下す際の重要なポイントがいくつかあります。

### ユーザーがモバイルファーストですか？Perspective を選択してください。
iOS や Android のネイティブパッケージ（位置情報サービスやカメラなど）を使用したい場合、これらの機能は Perspective を通じてのみ利用可能です。

### Web ブラウザよりもネイティブな感覚を求めますか？Vision を選択してください。
Google ドライブ、Outlook for web、Zoom for web などの多くのモダンな Web アプリの感覚を避け、完全に没入型のユーザー体験を提供したい場合は、Vision を選択してください。

### ユーザーがこのデバイスでマルチタスクを行いますか？Perspective を選択してください。
Perspective は JavaScript ベースの技術スタックであり、アプリケーションを表示するために Web ブラウザに依存しています。一方、Vision は Java ベースのアプリケーションで、もともと専用の HMI パネル用に構築されており、ホストマシンがアプリケーション専用であることを前提としています。ユーザーが HMI を最小化してオペレーティングシステム上の別のアプリケーションを使用する場合は、Perspective を選択してください。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>