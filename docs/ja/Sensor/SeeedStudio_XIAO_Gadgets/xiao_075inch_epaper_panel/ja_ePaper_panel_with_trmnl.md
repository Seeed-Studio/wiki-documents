---
description: この記事では、ePaperパネルをTRMNLと連携させる方法について説明します。
title: TRMNLとの連携
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /ja/xiao_7_5_inch_epaper_panel_with_trmnl
sidebar_position: 4
last_update:
  date: 05/19/2025
  author: Citric
---

# XIAO 7.5インチ ePaperパネル TRMNLとの連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## [TRMNL](https://trmnl.app/)とは？

TRMNLは、ますます注意散漫になるデジタル世界において、人々が集中力を保ち、落ち着いた状態を維持できるよう支援するために設計された革新的なプラットフォームです。2023年に設立されたTRMNLは、E Ink®ダッシュボード管理の主要なソリューションとして急速に成長し、従来のスクリーンの絶え間ない通知や注意散漫から解放された情報表示の独自のアプローチを提供しています。

TRMNLの核心は、テクノロジーは絶え間ない注意を要求することなく私たちの生活を向上させるべきだという哲学に基づいています。このプラットフォームは、E Ink®ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、より思慮深く、侵入的でないテクノロジー体験を創造します。

### なぜTRMNLをXIAO 7.5" ePaperパネルと統合するのか？

TRMNLと当社のXIAO 7.5" ePaperパネルの統合により、いくつかの魅力的な利点がもたらされます：

- **簡素化されたダッシュボード作成**: TRMNLの成長するアプリとインテグレーションライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**: TRMNLの効率的なソフトウェアと当社のE Ink®ディスプレイの最小限の電力要件の組み合わせにより、極めてエネルギー効率の高いソリューションを実現します
- **注意散漫のない情報表示**: 従来のスクリーンに関連する絶え間ない通知や眼精疲労なしに、必要な情報を取得できます
- **定期的なアップデート**: TRMNLの活発な開発により、新機能とインテグレーションが毎週追加され、ディスプレイの可能性を継続的に拡張します
- **開発者フレンドリー**: TRMNLのオープンAPIと開発者ツールにより、特定のニーズに合わせたカスタムプラグインとインテグレーションを作成できます

TRMNLの強力なプラットフォームと当社の高品質E Ink®ディスプレイを組み合わせることで、ユーザーの注意と時間の両方を尊重する、パーソナライズされた低消費電力情報ダッシュボードを作成するためのエレガントなソリューションを提供しています。

## TRMNLの開始方法

XIAO 7.5" ePaperパネルをTRMNLでセットアップする前に、必要な材料を集め、TRMNLの認証情報を準備しましょう。

### 必要な材料

この統合には以下が必要です：

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO 7.5" ePaperパネル</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### TRMNLアカウントセットアップとTRMNLアクセス

ePaperパネルをTRMNLに接続する前に、以下を行う必要があります：

1. **TRMNLアクセスの購入**

   - TRMNLウェブアプリ + デバイス機能へのアクセスを購入してください：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNLのプラットフォームを使用するために必要な認証情報が提供されます
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

材料を揃え、TRMNLアクセスを購入したら、ePaperパネルをTRMNLのプラットフォームに接続することができます。問題が発生したり質問がある場合は、team@usetrmnl.comでTRMNLチームに直接連絡できます。

### ファームウェアの書き込み

XIAO 7.5" ePaperパネルをTRMNLで動作させるには、適切なファームウェアをデバイスに書き込む必要があります。推奨される方法は3つあります：

#### 方法1: TRMNLウェブフラッシャーで書き込み（最も簡単）

1. **TRMNLウェブフラッシャーにアクセス**

:::tip
Seeed互換性のため、**FW 1.5.12**以降のファームウェアを使用してください。
:::

- [https://usetrmnl.com/flash](https://usetrmnl.com/flash)にアクセス
- このツールを使用すると、ブラウザから直接デバイスに書き込みができます。
- 画面の指示に従って書き込みプロセスを完了してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### 方法2: ソースからビルドして書き込み（上級ユーザー/開発者向け）

1. **ファームウェアリポジトリのクローン**

- [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware)にアクセスしてクローンしてください：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

コードを更新してTRMNLにPRを提出し、表示される前にレビューが必要な場合があります。最新のファームウェアバージョンを最初に使用したい場合は、Seeed ProjectのTRMNLリポジトリも使用できます。

- [Seeedリポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)にアクセスしてクローンしてください：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **PlatformIOのインストール**

   - [PlatformIO](https://platformio.org/)をVSCode拡張機能として、またはコマンドライン経由でインストールしてください。

3. **プロジェクトを開く**

   - クローンした`firmware`フォルダをVSCodeで開いてください。

4. **正しい環境を選択**

   - `platformio.ini`で、`seeed_xiao_esp32c3`環境を選択してください。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスの接続**

   - XIAO 7.5" ePaperパネルを接続してください。

6. **ビルドとアップロード**

   - PlatformIOで「Upload」ボタンをクリックするか、以下を実行してください：

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。

## Wi-Fiの設定とTRMNLへのプレイリスト送信

XIAO 7.5" ePaperパネルをTRMNLで使用してプレイリストを送信するには、まずデバイスをWi-Fiネットワークに接続する必要があります。このプロセスは「WiFiペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行われます。以下の手順に従ってください：

> 💡 **Wi-Fiのトラブルシューティング？** デバイスをWi-Fiに接続する際に問題が発生した場合は、一般的なネットワークとルーター互換性の問題の解決策について[TRMNLデバイスWi-Fiトラブルシューティングガイド](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)を参照してください。

### 電源投入とプロビジョニングモードへの移行

- TRMNLファームウェアを書き込んでデバイスの電源を入れた後、Wi-Fiにまだ接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### TRMNL Wi-Fiへの接続

- **スマートフォン**または**コンピューター**で、利用可能なWi-Fiネットワークのリストを開いてください。
- **TRMNL**という名前のネットワークを探して接続してください。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、ウェブブラウザ（ChromeやEdgeなど）を開いてください。
- デバイスは自動的にTRMNL設定ページにリダイレクトするはずです。リダイレクトされない場合は、ブラウザで手動で[http://4.3.2.1](http://4.3.2.1)にアクセスしてください。

### Wi-Fi認証情報の入力

- 設定ページで、利用可能なWi-Fiネットワークのリストが表示されます。
- **2.4GHz Wi-Fiネットワークを選択**してください（TRMNLは5GHzネットワークをサポートしていません）。
- Wi-Fiパスワードを入力してください。
- **Save**または**Connect**をクリックしてください。

> ⚠️ **重要:** 2.4GHz Wi-Fiネットワークを使用してください。5GHzネットワークはESP32-C3チップでサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスのネットワークへの接続

- デバイスはWi-Fiへの接続を試行します。
- 成功すると、TRMNL Wi-Fiから切断され、ホームネットワークに参加します。
- ウィンドウにデバイスのMACアドレスが表示されます。**MACアドレスを記録してください**。後の手順で必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MACアドレスはキャプティブポータルで1-2秒間のみ表示されます。見逃した場合は、以下の方法でも取得できます：
>
> - VS Code > PlatformIOのビルド/アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash)方法を使用し、書き込み中にChrome/Edge/Firefoxの開発者コンソールでMACアドレスを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイスリストで見つける。
>
>> 詳細とスクリーンショットについては、公式ガイドを参照してください：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### TRMNL Web インターフェースへのアクセス

XIAO 7.5" ePaper Panel が Wi-Fi に接続され、MAC アドレス（Device ID）を記録した後、TRMNL アカウントに追加できます：

1. **TRMNL Web インターフェースを開く**  
   - コンピューターまたはモバイルデバイスでブラウザを開き、[TRMNL web interface](https://trmnl.app) にアクセスします。

2. **デバイスページに移動**  
   - TRMNL インターフェースで、**Devices** セクションに移動します。

3. **新しいデバイスを追加**  
   - **Add new device** ボタンをクリックします。通常、デバイスページの右上角または中央にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Device ID を入力**  
   - ポップアップウィンドウで、TRMNL アクセスを購入した際に受け取った Device ID を入力します（これは MAC アドレスではありません）。購入確認メールまたは TRMNL ダッシュボードの Device ID を使用してください。
   - **Add new device** をクリックしてプロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **XIAO 7.5" デバイス MAC アドレスの登録**

   XIAO epaper panel と TRMNL の間の接続を構築するために、TRMNL 設定ページ内で正しいデバイス MAC アドレスをバインドする必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - MAC アドレスは PlatformIO アップロードプロセス中（アップロードログを確認）、またはプロビジョニングポータルから取得できます（Wi-Fi セットアップ後に表示されます）。
   - MAC アドレスを早期に追加することで、スムーズなオンボーディングプロセスとデバイス管理を確保できます。

   - その後、ePaper Panel にカスタム名を設定し、必要に応じて他の設定を調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

XIAO 7.5" ePaper Panel が TRMNL アカウントにリンクされました！TRMNL インターフェースから直接プレイリスト、画像、その他のコンテンツをディスプレイに送信できるようになりました。

> 💡 **ヒント:** 複数の ePaper Panel をお持ちの場合は、それぞれの固有の Device ID を使用して上記の手順を繰り返してください。

:::caution
TRMNL web インターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にしてください。  

これらのオプションが有効のままになっていると、デバイスがインターネットに接続された際に TRMNL からファームウェアアップデートを自動的にダウンロードしてインストールする可能性があります。これらのアップデートは公式 TRMNL ハードウェア用であり、**XIAO 7.5" ePaper Panel とは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが誤動作したり応答しなくなったりする可能性があります。

XIAO ePaper Panel の安定した動作を確保するため、常に両方のオプションを無効にしておいてください。
:::

## TRMNL プレイリスト機能の理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL プレイリスト機能により、ePaper Panel に何をいつ表示するかを正確に制御できます。上記のスクリーンショットに示されている主要なセクションとコントロールの内訳は以下の通りです：

### プレイリスト概要

- **プレイリストタイトル**: 上部に TRMNL デバイスの名前が表示されます（例：「MengDu's TRMNL」）。
- **表示時間範囲**: プレイリストがアクティブな時間範囲を設定できます（例：00:00 から 23:45 まで）。
- **更新間隔**: ディスプレイの更新頻度を選択します（例：5分ごと）。
- **Add a Group / Add a Plugin**: これらのボタンを使用してプレイリストをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりします。

### プレイリストアイテム

プレイリストの各行は、ePaper Panel に表示される画面またはウィジェットを表します（参考のみ）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、この画面が現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 現在の年の残り日数のカウントダウンを表示します（例：「2025」）。
   - ラベル（例：「9 days ago」）は、この画面が最後に更新または表示された時期を示します。
3. **Custom Text**
   - カスタムメッセージを表示できます（例：「Hello World」）。
   - 最後に更新された時期も表示されます。

各アイテムには、いくつかのコントロールがあります：

- **設定（歯車アイコン）**: プラグインのオプションを設定します。
- **削除（X アイコン）**: プレイリストからアイテムを削除します。
- **プレビュー（目のアイコン）**: 画面がどのように見えるかをプレビューします。
- **並び替え（バーアイコン）**: ドラッグして画面が表示される順序を変更します。

### スマートプレイリスト

- **スマートプレイリストオプション**: 下部で、コンテンツが変更されていない画面を自動的にスキップするかどうかを選択できます（例：「Never skip screens」）。

> 📖 詳細を知りたいですか？高度なヒントと詳細については、[Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) をお読みください。

この柔軟なプレイリストシステムにより、ePaper Panel に表示する内容、更新頻度、表示順序を完全にカスタマイズできます。さまざまなプラグインを組み合わせて、ニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNL プラグインの探索

TRMNL のプラグインシステムは、ePaper Panel を真に強力でカスタマイズ可能にするものです。プラグインは、デバイスに追加して様々な情報やコンテンツを表示できるモジュラーアプリまたはウィジェットです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは、天気、カレンダーイベント、株価、RSS フィード、励ましの言葉、GitHub アクティビティなどを表示できる個別のコンテンツブロックです。プラグインを組み合わせて、ニーズに合ったダッシュボードを作成できます。

### 接続済みプラグイン

プラグインページの上部には、すでに TRMNL アカウントに接続されているすべてのプラグインが表示されます。これらはプレイリストに追加して ePaper Panel に表示する準備ができています。例：

- **Weather**: 現在の天気状況を表示します。
- **Days Left This Year**: 年末までのカウントダウン。
- **Stock Price**: お気に入りの株式を追跡します。
- **RSS Feed**: ニュースやブログの更新を表示します。
- **Reddit, Hacker News**: トレンドの投稿を表示します。
- **Language Learning, Motivational Quote, Custom Text**: 学習ツールやカスタムメッセージでディスプレイをパーソナライズします。

### プラグインマーケットプレイス

接続済みプラグインの下に、プラグインマーケットプレイスがあります。ここで、デバイスに追加する新しいプラグインを閲覧、検索、発見できます。プラグインはカテゴリとタグ（#productivity、#news、#ecommerce など）で整理されており、必要なものを簡単に見つけることができます。

- **閲覧と検索**: 検索バーやタグを使用して、興味のあるプラグインを素早く見つけます。
- **プラグインの追加**: 任意のプラグインをクリックしてアカウントに接続し、プレイリストで使用を開始します。

開発者は他の人が使用できる独自のプラグインを作成して公開することもでき、エコシステムは新しい可能性で継続的に拡張されています（[プラグイン作成について詳しく学ぶ](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

TRMNL の使用について質問がある場合や、より高度な機能を探索したい場合は、詳細について公式 TRMNL ドキュメントをお読みください：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 特別な感謝

このプロジェクトに対する強力なサポートと貴重な支援をいただいた **TRMNL チーム** 全体に特別な感謝を申し上げます。特に、開発とドキュメント作成プロセス全体を通じて献身的な取り組みと支援をいただいた **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi**、およびその他すべてのチームメンバーに感謝いたします。

皆様の専門知識と献身により、この統合が可能になり、XIAO 7.5" ePaper Panel コミュニティのユーザーエクスペリエンスが大幅に向上しました。

## トラブルシューティング

### ネットワークを再設定するには？

XIAO のリセットボタンを押して離し、その後ブートボタンを5秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP をアクティブにします。

## リソース

- **[STP]**: [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [TRMNL firmware repository](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Seeed_TRMNL_Eink_Project repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
