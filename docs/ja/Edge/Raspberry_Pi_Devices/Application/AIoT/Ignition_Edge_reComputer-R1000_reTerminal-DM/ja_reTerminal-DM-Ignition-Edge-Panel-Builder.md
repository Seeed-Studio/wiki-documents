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
  date: 09/29/2023
  author: Corey Thompson
---

:::note
このドキュメントは、すでにIgnition Edgeゲートウェイが動作しており、ネットワークに接続されていることを前提としています。
これらの手順を試行する前に、サポートが必要な場合は[Ignition Edgeの開始方法](/ja/reTerminal-DM-Getting-Started-with-Ignition-Edge)に従ってください。
:::

## ハードウェア前提条件
- SSHターミナル機能を持つPC / Mac
- Ignitionのデザイナーアプリケーションをインストールするための利用可能なハードドライブ容量を持つPC / Mac
- 12-24V DC電源
- イーサネットケーブル
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

## ライセンス
このチュートリアルでは製品のアクティベーションは必要ありませんが、シリーズを進める際の作業ペースによっては中断が発生する可能性があります。Ignition Edge製品は本格的な本番環境での使用にはライセンスが必要です。製品には完全な機能サポートを持つ試用版が利用可能ですが、2時間ごとにデータがクリアされます。

製品のライセンスを取得するには、Inductive Automationの営業担当者に連絡するか、[Inductive Automation Ignition価格設定](https://inductiveautomation.com/pricing/ignition)ページで自分で購入することができます。

ライセンスを入力するには、Ignition EdgeゲートウェイのホームページでIgnitionのアクティベーションを促す緑のバナーに従ってください。エッジデバイスがインターネット接続を持っていることを確認し、6文字または8文字の文字列を入力すると、デバイスは数秒でアクティベートされます。

## Panel Designerを使用したHello Worldビューの作成

基本的なページを作成し、固定URLで表示する方法を実演するために、'hello world'パースペクティブプロジェクトを作成し、Webブラウザを使用してゲートウェイで表示します。

ゲートウェイのホームページを読み込むには、reTerminal自体で`localhost:8088`でWebブラウザを起動するか、ネットワーク上の他のデバイスから`{reterminalhostname}:8088`で、またはネットワーク上のどこからでもreTerminal自体のIPアドレスで`{reterminalip}:8088`でアクセスします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Ignition Edge Panel Builderのインストールとセットアップ

ゲートウェイのホーム画面には、Designer Launcherをダウンロードするボタンがあります。Designer LauncherはHMIデザイナーソフトウェアで、ローカルPC/Macにインストールされ、デザインをreTerminal DMにリモートで読み込みます。

まず、このインストーラーをダウンロードして実行してください。オペレーティングシステムを検出し、非常に基本的なインストーラーでマシンにアプリをインストールします。インストールが完了すると、ゲートウェイから設定をインポートするかどうかを尋ねられます - **はい**をクリックしてください。

新しくインストールされたIgnition Designer Launcherを起動すると、デバイスへの接続が表示されるはずです。デバイスをクリックし、下隅で有効になった'open designer'ボタンをクリックしてください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

ログインプロンプトが表示されるはずです。Edge Gatewayのセットアップ中に入力したIgnition管理者認証情報を入力してください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### パネルの作成と読み込み

1. 左列で'Perspectives'を展開し、'Views'を右クリックします
2. 新しいビューを作成し、'hello-world'という名前を付けます
3. 右側の隠れたタブコンテナにあることがあるコンポーネントパレットを見つけます。'label'を検索してキャンバスにドラッグします。
4. ラベルをダブルクリックして、テキストを'hello world'に変更します
5. ファイルを保存し、上部のメニューバーでFile -> Update Projectに移動して、更新されたプロジェクト（別名'Perspectiveセッション'）をゲートウェイに公開します。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Perspectiveセッションを更新したので、ライブになり、Webブラウザでナビゲートできます！
作成したビューのURLを見つけるヘルプを得るために、Edge Gateway Launcherに戻ってアクティブなPerspectiveセッションを表示できます。これにより、セッションのホームページURLでブラウザが起動されます。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## HMIの拡張
ReTerminalのビジュアルを強化するIgnitionのPerspectiveモジュールの基本設定が完了しました。Ignitionプラットフォームの全機能を活用してより強力なビジュアルを作成するには、タグサーバー、ヒストリアンデータベースなどの設定が必要になる場合がありますが、これらはこのチュートリアルの範囲外です。Ignitionプラットフォームについて詳しく学ぶには、[Inductive University](https://inductiveuniversity.com/)で無料で提供されている優れたドキュメントと手順をご利用ください。

## パースペクティブ vs ビジョン
Ignitionは2つのパネルビルダーソフトウェアを提供しており、どちらを使用するかを決めることはよくある質問です。両者の機能には多くの重複がありますが、決定を下すためのいくつかの重要な決定要因があります。

### ユーザーがモバイルファーストの場合はPerspectiveを選択
iOSやAndroidのネイティブパッケージ（位置情報サービスやカメラなど）を使用したい場合、これらの機能にアクセスできるのはPerspectiveのみです。

### Webブラウザよりもネイティブな感覚を求める場合はVisionを選択
多くの現代的なWebアプリ（Google Drive、Outlook for web、Zoom for webなど）の感覚を避けて、ユーザーエクスペリエンスに完全に没入したい場合は、Visionを選択すべきです。

### ユーザーがこのデバイスでマルチタスクを行う場合はPerspectiveを選択
PerspectiveはJavaScriptベースの技術スタックで、アプリケーションの表示にWebブラウザに依存しています。VisionはJavaベースのアプリケーションで、元々専用のHMIパネル向けに構築されており、ホストマシンがアプリケーション専用になることを前提としています。ユーザーがオペレーティングシステム上の他のアプリケーションを使用するためにHMIを最小化したい場合があるなら、Perspectiveを選択すべきです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品でのご体験ができる限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
