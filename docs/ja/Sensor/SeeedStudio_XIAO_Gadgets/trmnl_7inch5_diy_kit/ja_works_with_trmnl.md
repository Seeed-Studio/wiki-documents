---
description: この記事では、TRMNL 7.5inch(OG) DIY Kit を TRMNL と連携させる方法について説明します。
title: TRMNL との連携
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ja/ogdiy_kit_works_with_trmnl
sidebar_position: 2
last_update:
  date: 06/29/2025
  author: Allen
---

# TRMNL 7.5inch(OG) DIY Kit と TRMNL の連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:1000, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、ますます注意散漫になるデジタル世界において、人々が集中力を保ち、落ち着いた状態を維持できるよう支援するために設計された革新的なプラットフォームです。2023年に設立された TRMNL は、E Ink® ダッシュボード管理の主要なソリューションとして急速に成長し、従来のスクリーンの絶え間ない通知や気を散らす要素なしに情報を表示するユニークなアプローチを提供しています。

TRMNL の核心は、テクノロジーは絶え間ない注意を要求することなく私たちの生活を向上させるべきだという哲学に基づいています。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、より思慮深く、侵入的でないテクノロジー体験を創造します。

### なぜ TRMNL を使うのか？

TRMNL の統合により、いくつかの魅力的な利点がもたらされます：

- **簡素化されたダッシュボード作成**: TRMNL の成長するアプリとインテグレーションのライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**: TRMNL の効率的なソフトウェアと E Ink® ディスプレイの最小限の電力要件の組み合わせにより、極めてエネルギー効率の高いソリューションを実現します
- **気を散らさない情報表示**: 従来のスクリーンに関連する絶え間ない通知や眼精疲労なしに、必要な情報を取得できます
- **定期的なアップデート**: TRMNL の活発な開発により、新機能とインテグレーションが毎週追加され、ディスプレイの可能性を継続的に拡張します
- **開発者フレンドリー**: TRMNL のオープン API と開発者ツールにより、特定のニーズに合わせたカスタムプラグインとインテグレーションを作成できます

TRMNL の強力なプラットフォームと高品質な E Ink® ディスプレイを組み合わせることで、ユーザーの注意と時間の両方を尊重する、パーソナライズされた低消費電力情報ダッシュボードを作成するためのエレガントなソリューションを提供しています。

## TRMNL の使用開始

### 機器の設置

**ステップ 1. ディスプレイをドライバーボードに接続**  
FPC ケーブルを XIAO ePaper Display Board のコネクタに合わせ、ラッチを固定して確実な接続を確保します。  

:::tip
FPC ケーブルの金属面は上向きにする必要があります。そうでないと、コンテンツが表示されません。

以下の設置チュートリアルに従ってください。多くの人が間違えます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーの取り付け**  
バッテリーケーブルをドライバーボードの JST コネクタに接続し、正しい極性（赤線を +、黒線を - に）を確認します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャーの組み立て（オプション）**  

:::tip
スクリーンのフレキシブルケーブルは非常に壊れやすいことにご注意ください。操作時は注意してください。損傷すると、スクリーン全体が動作しなくなります。
:::
[リソース部分](#resources)からオープンソースのエンクロージャー部品を印刷し、内部にコンポーネントを組み立てます。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバーボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNL キットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

スクリーンをケースに差し込み、FPC を外に出します。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC 延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L字型エンクロージャーも非常に似ています。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNL キットがルーターから遠い場合は、アンテナをケースの外に移動できます。より良いパフォーマンスが得られます。
:::

### TRMNL アカウントの設定と TRMNL アクセス

キットを TRMNL に接続する前に、以下を行う必要があります：

1. **TRMNL アクセスの購入**

   - TRMNL ウェブアプリ + デバイス機能へのアクセスを購入：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNL のプラットフォームを使用するために必要な認証情報が提供されます
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) にアクセスして仮想デバイスをアクティベートします（購入後最大10分かかる場合があります）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNL アカウントの作成**

   - [TRMNL のウェブサイト](https://usetrmnl.com)にアクセス
   - "Sign Up" をクリックして新しいアカウントを作成
   - 登録プロセスに従います

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
TRMNL の認証情報は機密情報です。公開したり、バージョン管理システムにコミットしたりしないでください。
:::

材料を準備し、TRMNL アクセスを購入したら、デバイスを TRMNL のプラットフォームに接続する手順に進むことができます。問題が発生したり質問がある場合は、team@usetrmnl.com で TRMNL チームに直接連絡できます。

### ファームウェアの書き込み

:::tip
新品のキットを入手した場合、内部にファームウェアが入っているため、このステップをスキップできます。
:::

TRMNL 7.5inch(OG) DIY キットを TRMNL と連携させるには、デバイスに適切なファームウェアを書き込む必要があります。推奨される方法は3つあります：

#### 方法 1: TRMNL Web Flasher による書き込み（最も簡単）

:::tip
Seeed 互換性のため、**FW 1.5.12** 以降のファームウェアを使用してください。
:::

1. **TRMNL Web Flasher にアクセス**

   - [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセス
   - このツールを使用すると、ブラウザから直接デバイスに書き込みができます。
   - 画面の指示に従って書き込みプロセスを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法 2: ソースからのビルドと書き込み（上級ユーザー/開発者向け）

1. **ファームウェアリポジトリのクローン**

- [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware)にアクセスしてクローンします：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

コードを更新して TRMNL に PR を提出し、表示される前にレビューが必要な場合があります。最新のファームウェアバージョンを最初に使用したい場合は、Seeed Project の TRMNL リポジトリも使用できます。

- [Seeed リポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)にアクセスしてクローンします：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **PlatformIO のインストール**

   - [PlatformIO](https://platformio.org/) を VSCode 拡張機能として、またはコマンドライン経由でインストールします。

3. **プロジェクトを開く**

   - クローンした `firmware` フォルダを VSCode で開きます。

4. **正しい環境を選択**

   - `platformio.ini` で、`TRMNL_7inch5_OG_DIY_Kit` 環境を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスの接続**

   - TRMNL 7.5inch(OG) DIY キットを接続します。

6. **ビルドとアップロード**

   - PlatformIO で "Upload" ボタンをクリックするか、以下を実行します：

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。

## Wi-Fi の設定と TRMNL へのプレイリスト送信

TRMNL 7.5inch(OG) DIY キットを TRMNL で使用してプレイリストを送信するには、まずデバイスを Wi-Fi ネットワークに接続する必要があります。このプロセスは「WiFi ペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行われます。以下の手順に従ってください：

> 💡 **Wi-Fi のトラブルシューティング？** デバイスの Wi-Fi 接続で問題が発生した場合は、一般的なネットワークとルーター互換性の問題の解決策について [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源投入とプロビジョニングモードの開始

- TRMNL ファームウェアを書き込んでデバイスの電源を入れた後、Wi-Fi にまだ接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### TRMNL Wi-Fi に接続する

- **スマートフォン**または**コンピューター**で、利用可能な Wi-Fi ネットワークのリストを開きます。
- **TRMNL** という名前のネットワークを探して接続します。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、ウェブブラウザ（Chrome や Edge など）を開きます。
- デバイスは自動的に TRMNL 設定ページにリダイレクトするはずです。リダイレクトされない場合は、ブラウザで手動で [http://4.3.2.1](http://4.3.2.1) にアクセスしてください。

### Wi-Fi 認証情報を入力する

- 設定ページで、利用可能な Wi-Fi ネットワークのリストが表示されます。
- **2.4GHz Wi-Fi ネットワークを選択してください**（TRMNL は 5GHz ネットワークをサポートしていません）。
- Wi-Fi パスワードを入力します。
- **Save** または **Connect** をクリックします。

> ⚠️ **重要：** 2.4GHz Wi-Fi ネットワークを使用してください。5GHz ネットワークは ESP32-C3 チップでサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに接続する

- デバイスは Wi-Fi への接続を試行します。
- 成功すると、TRMNL Wi-Fi から切断され、ホームネットワークに参加します。
- ウィンドウと e-ink スクリーンにデバイスの MAC アドレスが表示されます。**MAC アドレスを記録してください**。後のステップで必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC アドレスはキャプティブポータルで 1-2 秒間のみ表示されます。見逃した場合は、以下の方法でも確認できます：
>
> - VS Code > PlatformIO のビルド/アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法を使用し、フラッシュ中に Chrome/Edge/Firefox の開発者コンソールで MAC アドレスを確認する。
> - ルーターまたは Mesh ネットワークアプリの接続デバイスリストで見つける。
>
> 詳細とスクリーンショットについては、公式ガイドを参照してください：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### TRMNL ウェブインターフェースにアクセスする

TRMNL 7.5inch(OG) DIY キットが Wi-Fi に接続され、MAC アドレス（デバイス ID）を記録したら、TRMNL アカウントに追加できます：

1. **TRMNL ウェブインターフェースを開く**  
   - コンピューターまたはモバイルデバイスでブラウザを開き、[TRMNL ウェブインターフェース](https://trmnl.app)にアクセスします。

2. **デバイスページに移動する**  
   - TRMNL インターフェースで、**Devices** セクションに移動します。

3. **新しいデバイスを追加する**  
   - **Add new device** ボタンをクリックします。通常、デバイスページの右上角または中央にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **デバイス ID を入力する**  
   - ポップアップウィンドウで、TRMNL アクセスを購入した際に受け取ったデバイス ID を入力します（これは MAC アドレスではありません）。購入確認メールまたは TRMNL ダッシュボードのデバイス ID を使用してください。
   - **Add new device** をクリックしてプロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **XIAO 7.5" デバイス MAC アドレスを登録する**

   XIAO epaper パネルと TRMNL の間の接続を構築するために、TRMNL 設定ページ内で正しいデバイス MAC アドレスをバインドする必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - PlatformIO アップロードプロセス中に MAC アドレスを取得できます（アップロードログを確認）、またはプロビジョニングポータルから取得できます（Wi-Fi セットアップ後に表示されます）。
   - MAC アドレスを早期に追加することで、スムーズなオンボーディングプロセスとデバイス管理を確保できます。

   - その後、ePaper パネルにカスタム名を設定し、必要に応じて他の設定を調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

TRMNL 7.5inch(OG) DIY キットが TRMNL アカウントにリンクされました！TRMNL インターフェースから直接プレイリスト、画像、その他のコンテンツをディスプレイに送信できるようになりました。

> 💡 **ヒント：** 複数の ePaper パネルがある場合は、それぞれの固有のデバイス ID を使用して上記の手順を繰り返してください。

:::caution
TRMNL ウェブインターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にしてください。  

これらのオプションが有効のままになっていると、デバイスがインターネットに接続された際に TRMNL からファームウェアアップデートを自動的にダウンロードしてインストールする可能性があります。これらのアップデートは公式 TRMNL ハードウェア用であり、**TRMNL 7.5inch(OG) DIY キットとは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが誤動作したり応答しなくなったりする可能性があります。

XIAO ePaper パネルの安定した動作を確保するため、常に両方のオプションを無効にしておいてください。
:::

### ボタンの使用方法

この開発ボードには 4 つのボタンがあります。RESET、KEY1、KEY2、KEY3 で、**TRMNL ファームウェアでは RESET と KEY3 ボタンのみを使用します。**

**KEY3 の使用方法：**

1. **ワンクリック：** ページを即座にリフレッシュします。
2. **ダブルクリック：** カスタム機能、設定ページで確認できます。
3. **長押し：** 約 5 秒間、ネットワークを再設定します。

**RESET の使用方法：** ワンクリックのみでデバイスをリセットします。

## TRMNL プレイリスト機能の理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL プレイリスト機能により、ePaper パネルに何を表示するか、いつ表示するかを正確に制御できます。上のスクリーンショットに示されているように、主要なセクションとコントロールの内訳は以下の通りです：

### プレイリスト概要

- **プレイリストタイトル**：上部に TRMNL デバイスの名前が表示されます（例：「MengDu's TRMNL」）。
- **表示時間範囲**：プレイリストがアクティブな時間範囲を設定できます（例：00:00 から 23:45 まで）。
- **更新間隔**：ディスプレイの更新頻度を選択します（例：5 分ごと）。
- **Add a Group / Add a Plugin**：これらのボタンを使用してプレイリストをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりします。

### プレイリストアイテム

プレイリストの各行は、ePaper パネルに表示されるスクリーンまたはウィジェットを表します（参考のみ）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、このスクリーンが現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 現在の年の残り日数のカウントダウンを表示します（例：「2025」）。
   - ラベル（例：「9 days ago」）は、このスクリーンが最後に更新または表示された時期を示します。
3. **Custom Text**
   - 任意のカスタムメッセージを表示できます（例：「Hello World」）。
   - 最後に更新された時期も表示されます。

各アイテムには、いくつかのコントロールがあります：

- **Settings（歯車アイコン）**：プラグインのオプションを設定します。
- **Delete（X アイコン）**：プレイリストからアイテムを削除します。
- **Preview（目のアイコン）**：スクリーンがどのように見えるかをプレビューします。
- **Reorder（バーアイコン）**：ドラッグしてスクリーンが表示される順序を変更します。

### スマートプレイリスト

- **スマートプレイリストオプション**：下部で、コンテンツが変更されていないスクリーンを自動的にスキップするかどうかを選択できます（例：「Never skip screens」）。

> 📖 詳しく知りたいですか？高度なヒントと詳細については、[Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) をお読みください。

この柔軟なプレイリストシステムにより、ePaper パネルに表示する内容、更新頻度、表示順序を完全にカスタマイズできます。さまざまなプラグインを組み合わせて、ニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNL プラグインの探索

TRMNL のプラグインシステムは、ePaper パネルを真に強力でカスタマイズ可能にするものです。プラグインは、さまざまな情報やコンテンツを表示するためにデバイスに追加できるモジュラーアプリまたはウィジェットです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは、天気、カレンダーイベント、株価、RSS フィード、励ましの言葉、GitHub アクティビティなどを表示できる個別のコンテンツブロックです。プラグインを組み合わせて、ニーズに合ったダッシュボードを作成できます。

### 接続済みプラグイン

プラグインページの上部には、すでに TRMNL アカウントに接続したすべてのプラグインが表示されます。これらはプレイリストに追加して ePaper パネルに表示する準備ができています。例：

- **Weather**：現在の天気状況を表示します。
- **Days Left This Year**：年末までのカウントダウン。
- **Stock Price**：お気に入りの株式を追跡します。
- **RSS Feed**：ニュースやブログの更新を表示します。
- **Reddit、Hacker News**：トレンドの投稿を表示します。
- **Language Learning、Motivational Quote、Custom Text**：学習ツールやカスタムメッセージでディスプレイをパーソナライズします。

### プラグインマーケットプレイス

接続済みプラグインの下に、プラグインマーケットプレイスがあります。ここで、デバイスに追加する新しいプラグインを閲覧、検索、発見できます。プラグインはカテゴリとタグ（#productivity、#news、#ecommerce など）で整理されており、必要なものを簡単に見つけることができます。

- **閲覧と検索**：検索バーやタグを使用して、興味のあるプラグインを素早く見つけます。
- **プラグインの追加**：任意のプラグインをクリックしてアカウントに接続し、プレイリストで使用を開始します。

開発者は独自のプラグインを作成して他の人が使用できるように公開することもでき、エコシステムは新しい可能性で継続的に拡張されています（[プラグイン作成について詳しく学ぶ](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

TRMNL の使用について質問がある場合や、より高度な機能を探求したい場合は、公式 TRMNL ドキュメントをお読みください：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## トラブルシューティング

### Q1: Web や PlatformIO を使用する際に、ファームウェアをフラッシュできない問題が発生しました。どうすればよいですか？

時々、間違ったプログラムを使用すると、XIAO がポートを失ったり、正常に機能しなくなったりすることがあります。一般的な問題には以下があります：

- XIAO がコンピュータに接続されているが、*ポート番号が見つからない*。
- XIAO が接続され、ポート番号が表示されるが、*プログラムのアップロードが失敗する*。

上記の2つの状況に遭遇した場合、XIAO を BootLoader モードにすることを試してください。これにより、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は以下の通りです：

- **ステップ 1**. XIAO ESP32S3 の `BOOT` ボタンを離さずに押し続けます。
- **ステップ 2**. `BOOT` ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、`BOOT` ボタンを離します。
- **ステップ 3**. プログラムをアップロードするか、ファームウェアをフラッシュして、XIAO ESP32S3 の動作を確認します。

## 特別な謝辞

このプロジェクトに対する強力なサポートと貴重なご協力をいただいた **TRMNL チーム** 全体に特別な感謝を申し上げます。特に、開発とドキュメント作成プロセス全体を通じて献身的にご協力いただいた **Bogdan**、**Ryan Kulp**、**Fr3d**、そして他のすべてのチームメンバーに感謝いたします。

皆様の専門知識と献身により、この統合が可能になり、TRMNL 7.5inch(OG) DIY キットコミュニティのユーザーエクスペリエンスが大幅に向上しました。

## トラブルシューティング

### ネットワークを再設定するには？

Key3（Reset ボタンの隣のボタン）を5秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP をアクティブにします。

## リソース

- **[ファームウェア]** [TRMNL ePaper ライブラリ (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[ハードウェア]** [ドライバーボード回路図](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[3Dプリント]** [三角形ベース](https://www.printables.com/model/1354873)  
- **[3Dプリント]** [保護付き三角形ベース](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[3Dプリント]** [L字型ベース](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角形ベース](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保護付き三角形ベース](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L字型ベース](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角形ベース](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保護付き三角形ベース](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L字型ベース](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
