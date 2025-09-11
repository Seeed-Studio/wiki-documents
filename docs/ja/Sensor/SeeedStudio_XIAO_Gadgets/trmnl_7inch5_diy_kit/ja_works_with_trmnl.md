---
description: この記事では、TRMNL 7.5inch(OG) DIY KitをTRMNLと連携させる方法について説明します。
title: TRMNLとの連携
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

# TRMNL 7.5inch(OG) DIY KitとTRMNLの連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:1000, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## [TRMNL](https://trmnl.app/)とは？

TRMNLは、ますます注意散漫になるデジタル世界において、人々が集中力を保ち、落ち着いた状態を維持できるよう支援するために設計された革新的なプラットフォームです。2023年に設立されたTRMNLは、E Ink®ダッシュボード管理の主要ソリューションとして急速に成長し、従来のスクリーンの絶え間ない通知や注意散漫から解放された情報表示の独自のアプローチを提供しています。

TRMNLの核心は、テクノロジーは絶え間ない注意を要求することなく私たちの生活を向上させるべきだという哲学に基づいています。このプラットフォームは、E Ink®ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、より思慮深く、侵入的でないテクノロジー体験を創造します。

### なぜTRMNLを使用するのか？

TRMNLの統合により、以下のような魅力的な利点がもたらされます：

- **簡素化されたダッシュボード作成**: TRMNLの成長するアプリとインテグレーションライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**: TRMNLの効率的なソフトウェアと当社のE Ink®ディスプレイの最小限の電力要件の組み合わせにより、極めてエネルギー効率の高いソリューションを実現します
- **注意散漫のない情報表示**: 従来のスクリーンに関連する絶え間ない通知や眼精疲労なしに、必要な情報を取得できます
- **定期的なアップデート**: TRMNLの活発な開発により、新機能とインテグレーションが毎週追加され、ディスプレイの可能性を継続的に拡張します
- **開発者フレンドリー**: TRMNLのオープンAPIと開発者ツールにより、特定のニーズに合わせたカスタムプラグインとインテグレーションを作成できます

TRMNLの強力なプラットフォームと当社の高品質E Ink®ディスプレイを組み合わせることで、ユーザーの注意と時間の両方を尊重する、パーソナライズされた低消費電力情報ダッシュボードを作成するためのエレガントなソリューションを提供しています。

## TRMNLの開始方法

### TRMNLアカウントセットアップとTRMNLアクセス

キットをTRMNLに接続する前に、以下の手順が必要です：

1. **TRMNLアクセスの購入**

   - TRMNLウェブアプリ + デバイス機能へのアクセスを購入してください：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNLプラットフォームを使用するために必要な認証情報が提供されます
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device)にアクセスして仮想デバイスをアクティベートしてください（購入後最大10分かかる場合があります）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNLアカウントの作成**

   - [TRMNLのウェブサイト](https://usetrmnl.com)にアクセス
   - 「Sign Up」をクリックして新しいアカウントを作成
   - 登録プロセスに従ってください

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
TRMNLの認証情報は機密情報です。公開したり、バージョン管理システムにコミットしたりしないでください。
:::

材料を準備し、TRMNLアクセスを購入したら、デバイスをTRMNLプラットフォームに接続する手順に進むことができます。問題が発生したり質問がある場合は、team@usetrmnl.comでTRMNLチームに直接連絡できます。

### ファームウェアの書き込み

:::tip
新品のキットを入手した場合、内部にファームウェアが含まれています。そのため、この手順をスキップできます。
:::

TRMNL 7.5inch(OG) DIYキットをTRMNLと連携させるには、適切なファームウェアをデバイスに書き込む必要があります。推奨される方法は3つあります：

#### 方法1: TRMNL Web Flasherによる書き込み（最も簡単）

:::tip
Seeed互換性のために**FW 1.5.12**以降のファームウェアを使用してください。
:::

1. **TRMNL Web Flasherにアクセス**

   - [https://usetrmnl.com/flash](https://usetrmnl.com/flash)にアクセス
   - このツールを使用すると、ブラウザから直接デバイスを書き込むことができます。
   - 画面の指示に従って書き込みプロセスを完了してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法2: ソースからビルドして書き込み（上級ユーザー/開発者向け）

1. **ファームウェアリポジトリのクローン**

- [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware)にアクセスしてクローンしてください：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

コードを更新してTRMNLにPRを提出し、表示される前にレビューが必要な場合があります。最新のファームウェアバージョンを最初に使用したい場合は、Seeed ProjectのTRMNLリポジトリも使用できます。

- [Seedリポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)にアクセスしてクローンしてください：
  
    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **PlatformIOのインストール**

   - [PlatformIO](https://platformio.org/)をVSCode拡張機能として、またはコマンドライン経由でインストールしてください。

3. **プロジェクトを開く**

   - VSCodeでクローンした`firmware`フォルダを開いてください。

4. **正しい環境の選択**

   - `platformio.ini`で、`TRMNL_7inch5_OG_DIY_Kit`環境を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスを接続する**

   - TRMNL 7.5inch(OG) DIY キットを接続します。

6. **ビルドとアップロード**

   - PlatformIOで「Upload」ボタンをクリックするか、以下を実行します：

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。

## Wi-Fiを設定してプレイリストをTRMNLに送信する

TRMNL 7.5inch(OG) DIY キットをTRMNLで使用してプレイリストを送信するには、まずデバイスをWi-Fiネットワークに接続する必要があります。このプロセスは「WiFiペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行われます。以下の手順に従ってください：

> 💡 **Wi-Fiのトラブルシューティング？** デバイスをWi-Fiに接続する際に問題が発生した場合は、一般的なネットワークとルーターの互換性問題の解決策について[TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)を参照してください。

### 電源を入れてプロビジョニングモードに入る

- TRMNLファームウェアをフラッシュしてデバイスの電源を入れた後、Wi-Fiに接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### TRMNL Wi-Fiに接続する

- **スマートフォン**または**コンピューター**で、利用可能なWi-Fiネットワークのリストを開きます。
- **TRMNL**という名前のネットワークを探して接続します。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、Webブラウザ（ChromeやEdgeなど）を開きます。
- デバイスは自動的にTRMNL設定ページにリダイレクトするはずです。リダイレクトされない場合は、ブラウザで手動で[http://4.3.2.1](http://4.3.2.1)にアクセスしてください。

### Wi-Fi認証情報を入力する

- 設定ページで、利用可能なWi-Fiネットワークのリストが表示されます。
- **2.4GHz Wi-Fiネットワークを選択してください**（TRMNLは5GHzネットワークをサポートしていません）。
- Wi-Fiパスワードを入力します。
- **Save**または**Connect**をクリックします。

> ⚠️ **重要：** 2.4GHz Wi-Fiネットワークを使用してください。5GHzネットワークはESP32-C3チップでサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに接続する

- デバイスはWi-Fiへの接続を試行します。
- 成功すると、TRMNL Wi-Fiから切断され、ホームネットワークに参加します。
- ウィンドウとe-inkスクリーンにデバイスのMACアドレスが表示されます。**MACアドレスを記録してください**。後の手順で必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MACアドレスはキャプティブポータルで1-2秒間のみ表示されます。見逃した場合は、以下の方法でも取得できます：
>
> - VS Code > PlatformIOのビルド/アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash)方法を使用し、フラッシュ中にChrome/Edge/Firefoxの開発者コンソールでMACアドレスを確認する。
> - ルーターまたはMeshネットワークアプリの接続デバイスリストで見つける。
>
> 詳細とスクリーンショットについては、公式ガイドを参照してください：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### TRMNL Webインターフェースにアクセスする

TRMNL 7.5inch(OG) DIY キットがWi-Fiに接続され、MACアドレス（デバイスID）を記録した後、TRMNLアカウントに追加できます：

1. **TRMNL Webインターフェースを開く**  
   - コンピューターまたはモバイルデバイスでブラウザを開き、[TRMNL web interface](https://trmnl.app)にアクセスします。

2. **デバイスページに移動する**  
   - TRMNLインターフェースで、**Devices**セクションに移動します。

3. **新しいデバイスを追加する**  
   - **Add new device**ボタンをクリックします。通常、デバイスページの右上角または中央にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **デバイスIDを入力する**  
   - ポップアップウィンドウで、TRMNLアクセスを購入した際に受け取ったデバイスIDを入力します（これはMACアドレスではありません）。購入確認メールまたはTRMNLダッシュボードのデバイスIDを使用してください。
   - **Add new device**をクリックしてプロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **XIAO 7.5" デバイスMACアドレスを登録する**

   XIAO epaperパネルとTRMNLの間の接続を構築するために、TRMNL設定ページ内で正しいデバイスMACアドレスをバインドする必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - MACアドレスはPlatformIOアップロードプロセス中（アップロードログを確認）、またはプロビジョニングポータルから取得できます（Wi-Fi設定後に表示されます）。
   - MACアドレスを早期に追加することで、スムーズなオンボーディングプロセスとデバイス管理が確保されます。

   - その後、epaperパネルにカスタム名を設定し、必要に応じて他の設定を調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

TRMNL 7.5inch(OG) DIY キットがTRMNLアカウントにリンクされました！TRMNLインターフェースから直接プレイリスト、画像、その他のコンテンツをディスプレイに送信できるようになりました。

> 💡 **ヒント：** 複数のepaperパネルがある場合は、それぞれの固有のデバイスIDを使用して上記の手順を繰り返してください。

:::caution
TRMNL Webインターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release**と**OTA Updates Enabled**の両方を**オフ**にしてください。

これらのオプションを有効にしたままにすると、デバイスがインターネットに接続されている際に、TRMNLからファームウェアアップデートが自動的にダウンロードおよびインストールされる可能性があります。これらのアップデートは公式のTRMNLハードウェア向けであり、**TRMNL 7.5inch(OG) DIYキットとは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが誤動作したり応答しなくなったりする可能性があります。

XIAO ePaper Panelの安定した動作を確保するため、常に両方のオプションを無効にしておいてください。
:::

### ボタンの使用方法

この開発ボードには4つのボタンがあります。RESET、KEY1、KEY2、KEY3で、**TRMNLファームウェアではRESETとKEY1ボタンのみを使用します。**

**KEY1の使用方法:**

1. **ワンクリック:** ページを即座に更新します。
2. **ダブルクリック:** カスタム機能、設定ページで確認できます。
3. **長押し:** 約5秒間、ネットワークを再設定します。

**RESETの使用方法:** ワンクリックのみでデバイスをリセットします。

## TRMNL Playlist機能の理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL Playlist機能により、ePaper Panelに何を表示するか、いつ表示するかを正確に制御できます。上記のスクリーンショットに示されている主要なセクションとコントロールの詳細は以下の通りです：

### Playlistの概要

- **Playlistタイトル**: 上部に、TRMNLデバイスの名前が表示されます（例：「MengDu's TRMNL」）。
- **表示時間範囲**: playlistがアクティブな時間範囲を設定できます（例：00:00から23:45まで）。
- **更新間隔**: ディスプレイの更新頻度を選択します（例：5分ごと）。
- **Add a Group / Add a Plugin**: これらのボタンを使用してplaylistをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりします。

### Playlistアイテム

playlistの各行は、ePaper Panelに表示される画面またはウィジェットを表します（参考のみ）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、この画面が現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 今年の残り日数のカウントダウンを表示します（例：「2025」）。
   - ラベル（例：「9 days ago」）は、この画面が最後に更新または表示された時期を示します。
3. **Custom Text**
   - 任意のカスタムメッセージを表示できます（例：「Hello World」）。
   - 最後に更新された時期も表示されます。

各アイテムには、いくつかのコントロールがあります：

- **設定（歯車アイコン）**: プラグインのオプションを設定します。
- **削除（Xアイコン）**: playlistからアイテムを削除します。
- **プレビュー（目のアイコン）**: 画面がどのように表示されるかをプレビューします。
- **並び替え（バーアイコン）**: ドラッグして画面が表示される順序を変更します。

### Smart Playlist

- **Smart Playlistオプション**: 下部で、コンテンツが変更されていない画面を自動的にスキップするかどうかを選択できます（例：「Never skip screens」）。

> 📖 詳細を知りたいですか？高度なヒントと詳細については、[Smart Playlistsブログ記事](https://usetrmnl.com/blog/smart-playlists)をお読みください。

この柔軟なplaylistシステムにより、ePaper Panelに表示する内容、更新頻度、表示順序を完全にカスタマイズできます。さまざまなプラグインを組み合わせて、ニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNLプラグインの探索

TRMNLのプラグインシステムは、あなたのePaperパネルを真に強力でカスタマイズ可能にするものです。プラグインは、デバイスに追加して様々な情報やコンテンツを表示できるモジュラーアプリやウィジェットです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは、天気、カレンダーイベント、株価、RSSフィード、励ましの言葉、GitHubアクティビティなどを表示できる個別のコンテンツブロックです。プラグインを組み合わせて、あなたのニーズに合ったダッシュボードを作成できます。

### 接続済みプラグイン

プラグインページの上部には、すでにTRMNLアカウントに接続したすべてのプラグインが表示されます。これらはプレイリストに追加してePaperパネルに表示する準備ができています。例：

- **Weather**: 現在の天気状況を表示。
- **Days Left This Year**: 年末までのカウントダウン。
- **Stock Price**: お気に入りの株式を追跡。
- **RSS Feed**: ニュースやブログの更新を表示。
- **Reddit, Hacker News**: トレンドの投稿を表示。
- **Language Learning, Motivational Quote, Custom Text**: 学習ツールやカスタムメッセージでディスプレイをパーソナライズ。

### プラグインマーケットプレイス

接続済みプラグインの下に、プラグインマーケットプレイスがあります。ここでは、デバイスに追加する新しいプラグインを閲覧、検索、発見できます。プラグインはカテゴリとタグ（#productivity、#news、#ecommerceなど）で整理されており、必要なものを簡単に見つけることができます。

- **閲覧と検索**: 検索バーやタグを使用して、興味のあるプラグインを素早く見つけます。
- **プラグインの追加**: 任意のプラグインをクリックしてアカウントに接続し、プレイリストで使用を開始します。

開発者は他の人が使用できる独自のプラグインを作成・公開することもでき、エコシステムは新しい可能性で継続的に拡張されています（[プラグイン作成について詳しく学ぶ](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

TRMNLの使用について質問がある場合や、より高度な機能を探索したい場合は、公式TRMNLドキュメントを読んで詳細情報を確認することをお勧めします：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## トラブルシューティング

### Q1: WebやPlatformIOを使用する際に、ファームウェアをフラッシュできない問題が発生しました。どうすればよいですか？

時々、間違ったプログラムを使用すると、XIAOがポートを失ったり、正しく機能しなくなったりすることがあります。一般的な問題には以下があります：

- XIAOがコンピュータに接続されているが、*ポート番号が見つからない*。
- XIAOが接続され、ポート番号が表示されるが、*プログラムのアップロードが失敗する*。

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることを試すことができます。これにより、認識されないデバイスやアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- **ステップ1**. XIAO ESP32S3の`BOOT`ボタンを離さずに押し続けます。
- **ステップ2**. `BOOT`ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、`BOOT`ボタンを離します。
- **ステップ3**. プログラムをアップロードするか、ファームウェアをフラッシュして、XIAO ESP32S3の動作を確認します。

## 特別な謝辞

このプロジェクトに対する強力なサポートと貴重なご支援をいただいた **TRMNL チーム** 全体に特別な感謝を申し上げます。特に、開発とドキュメント作成プロセス全体を通じて献身的にご支援いただいた **Bogdan**、**Ryan Kulp**、**Fr3d** をはじめとするすべてのチームメンバーに感謝いたします。

皆様の専門知識とコミットメントにより、この統合が実現し、TRMNL 7.5inch(OG) DIY キットコミュニティのユーザーエクスペリエンスが大幅に向上しました。

## リソース

- **[ファームウェア]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[ハードウェア]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
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

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
