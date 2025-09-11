---
description: この記事では、reTerminal E シリーズ ePaper ディスプレイを TRMNL と組み合わせて使用する方法について説明します。
title: reTerminal E シリーズ ePaper ディスプレイと TRMNL の連携
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/reterminal_e10xx_trmnl
sidebar_position: 1
last_update:
  date: 07/21/2025
  author: Citric
---

:::caution
Wiki コンテンツは開発中のため、現在利用できません。
:::

# reTerminal E シリーズ ePaper ディスプレイと TRMNL の連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、ますます注意散漫になるデジタル世界において、人々が集中力を保ち、落ち着いた状態を維持できるよう支援するために設計された革新的なプラットフォームです。2023年に設立された TRMNL は、E Ink® ダッシュボード管理の主要ソリューションとして急速に成長し、従来のスクリーンの絶え間ない通知や気を散らす要素なしに情報を表示するユニークなアプローチを提供しています。

TRMNL の核心は、テクノロジーは絶え間ない注意を要求することなく私たちの生活を向上させるべきだという哲学に基づいています。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、より思慮深く、侵入的でない技術体験を創造します。

### なぜ TRMNL を使用するのか？

TRMNL の統合により、いくつかの魅力的な利点がもたらされます：

- **簡素化されたダッシュボード作成**: TRMNL の成長するアプリとインテグレーションライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**: TRMNL の効率的なソフトウェアと当社の E Ink® ディスプレイの最小限の電力要件の組み合わせにより、極めてエネルギー効率の高いソリューションを実現します
- **注意散漫のない情報表示**: 従来のスクリーンに関連する絶え間ない通知や眼精疲労なしに、必要な情報を取得できます
- **定期的なアップデート**: TRMNL の活発な開発により、新機能とインテグレーションが毎週追加され、ディスプレイの可能性を継続的に拡張します
- **開発者フレンドリー**: TRMNL のオープン API と開発者ツールにより、特定のニーズに合わせたカスタムプラグインとインテグレーションを作成できます

TRMNL の強力なプラットフォームと当社の高品質な E Ink® reTerminal E シリーズ ePaper ディスプレイを組み合わせることで、ユーザーの注意と時間の両方を尊重する、パーソナライズされた低消費電力情報ダッシュボードを作成するためのエレガントなソリューションを提供しています。

## TRMNL の開始方法

### TRMNL アカウントセットアップと TRMNL アクセス

キットを TRMNL に接続する前に、以下を行う必要があります：

1. **TRMNL アクセスの購入**

   - TRMNL ウェブアプリ + デバイス機能へのアクセスを以下で購入してください：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNL のプラットフォームを使用するために必要な認証情報が提供されます
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) にアクセスして仮想デバイスをアクティベートしてください（購入後最大10分かかる場合があります）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNL アカウントの作成**

   - [TRMNL のウェブサイト](https://usetrmnl.com) にアクセスしてください
   - 「Sign Up」をクリックして新しいアカウントを作成してください
   - 登録プロセスに従ってください

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
TRMNL の認証情報は機密情報です。公開したり、バージョン管理システムにコミットしたりしないでください。
:::

材料を準備し、TRMNL アクセスを購入したら、デバイスを TRMNL のプラットフォームに接続する手順に進むことができます。問題が発生したり質問がある場合は、team@usetrmnl.com で TRMNL チームに直接連絡できます。

### 必要な材料

すぐに開始してください。以下のいずれかの reTerminal を準備して、その後のチュートリアル内容を完了してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

### ファームウェアの書き込み

reTerminal Eシリーズでまだ工場出荷時のファームウェアを使用している場合は、デバイスをTRMNLに接続する前に、以下の方法でTRMNLファームウェアを書き込む必要があります。

#### 方法1: TRMNL Web Flasherで書き込み（最も簡単）

:::tip
Seeed互換性のため、**FW x.x.x**以降のファームウェアを使用してください。
:::

1. **TRMNL Web Flasherにアクセス**

   - [https://usetrmnl.com/flash](https://usetrmnl.com/flash)にアクセスしてください
   - このツールを使用すると、ブラウザから直接デバイスに書き込みができます。
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

コードを更新してTRMNLにPRを提出し、表示される前にレビューが必要な場合があります。最新のファームウェアバージョンを最初に使用したい場合は、Seed ProjectのTRMNLリポジトリも使用できます。

  - [Seedリポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)にアクセスしてクローンしてください：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```
:::

2. **PlatformIOのインストール**

   - [PlatformIO](https://platformio.org/)をVSCode拡張機能として、またはコマンドライン経由でインストールしてください。

3. **プロジェクトを開く**

   - VSCodeでクローンした`firmware`フォルダを開いてください。

4. **正しい環境を選択**

  - `platformio.ini`で、
  
    - reTerminal E1001を使用している場合は、`seeed_reTerminal_E1001`環境を選択してください。

    - reTerminal E1002を使用している場合は、`seeed_reTerminal_E1002`環境を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスを接続**

   - reTerminal EシリーズePaperディスプレイデバイスを接続してください。

6. **ビルドとアップロード**

   - PlatformIOで「Upload」ボタンをクリックするか、以下を実行してください：

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。


## Wi-Fiの設定とTRMNLへのプレイリスト送信

reTerminal EシリーズePaperディスプレイをTRMNLで使用してプレイリストを送信するには、まずデバイスをWi-Fiネットワークに接続する必要があります。このプロセスは「WiFiペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行われます。以下の手順に従ってください：

> 💡 **Wi-Fiのトラブルシューティング？** デバイスのWi-Fi接続で問題が発生した場合は、一般的なネットワークやルーター互換性の問題の解決策について[TRMNLデバイスWi-Fiトラブルシューティングガイド](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)を参照してください。

### 電源投入とプロビジョニングモードへの移行

- TRMNLファームウェアを書き込んでデバイスの電源を入れた後、まだWi-Fiに接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### TRMNL Wi-Fiに接続

- **スマートフォン**または**コンピューター**で、利用可能なWi-Fiネットワークのリストを開いてください。
- **TRMNL**という名前のネットワークを探して接続してください。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、Webブラウザ（ChromeやEdgeなど）を開いてください。
- デバイスは自動的にTRMNL設定ページにリダイレクトするはずです。リダイレクトされない場合は、ブラウザで手動で[http://4.3.2.1](http://4.3.2.1)にアクセスしてください。

### Wi-Fi認証情報を入力

- 設定ページで、利用可能なWi-Fiネットワークのリストが表示されます。
- **2.4GHz Wi-Fiネットワークを選択**してください（reTerminal EシリーズePaperディスプレイは5GHzネットワークをサポートしていません）。
- Wi-Fiパスワードを入力してください。
- **保存**または**接続**をクリックしてください。

> ⚠️ **重要：** 2.4GHz Wi-Fiネットワークを使用してください。5GHzネットワークはreTerminal Eシリーズでサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに接続

- デバイスはWi-Fiへの接続を試行します。
- 成功すると、TRMNL Wi-Fiから切断され、ホームネットワークに参加します。
- ウィンドウにデバイスのMACアドレスが表示されます。**MACアドレスを記録してください**。後の手順で必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MACアドレスはキャプティブポータルで1-2秒間のみ表示されます。見逃した場合は、以下の方法でも取得できます：
> - VS Code > PlatformIOのビルド/アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash)方法を使用し、書き込み中にChrome/Edge/Firefoxの開発者コンソールでMACアドレスを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイスリストで見つける。
>
> 詳細とスクリーンショットについては、公式ガイドを参照してください：[TRMNLのMACアドレスを見つける](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### TRMNL Webインターフェースへのアクセス

reTerminal EシリーズePaperディスプレイがWi-Fiに接続され、MACアドレス（デバイスID）を記録した後、TRMNLアカウントに追加できます：

1. **TRMNL Webインターフェースを開く**  
   - コンピューターまたはモバイルデバイスでブラウザを開き、[TRMNL Webインターフェース](https://trmnl.app)にアクセスしてください。

2. **デバイスページに移動**  
   - TRMNLインターフェースで、**デバイス**セクションに移動してください。

3. **新しいデバイスを追加**  
   - **Add new device**ボタンをクリックします。このボタンは通常、Devicesページの右上角または中央にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **デバイスIDを入力**  
   - ポップアップウィンドウで、TRMNLアクセスを購入した際に受け取ったデバイスIDを入力します（これはMACアドレスではありません）。購入確認メールまたはTRMNLダッシュボードからのデバイスIDを使用してください。
   - **Add new device**をクリックしてプロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **reTerminal E Series ePaper DisplayのMACアドレスを登録**

   reTerminal E Series ePaper DisplayとTRMNLの間の接続を構築するために、TRMNL設定ページ内で正しいデバイスMACアドレスをバインドする必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - MACアドレスはPlatformIOアップロードプロセス中に取得できます（アップロードログを確認）、またはプロビジョニングポータルから取得できます（Wi-Fi設定後に表示されます）。
   - MACアドレスを早期に追加することで、スムーズなオンボーディングプロセスとデバイス管理を確保できます。

   - その後、reTerminal E Series ePaper Displayにカスタム名を設定し、必要に応じて他の設定を調整できます。

これでreTerminal E Series ePaper DisplayがTRMNLアカウントにリンクされました！TRMNLインターフェースから直接プレイリスト、画像、その他のコンテンツをディスプレイに送信できるようになりました。

> 💡 **ヒント:** 複数のreTerminal E Seriesをお持ちの場合は、それぞれの固有のデバイスIDを使用して上記の手順を繰り返してください。

:::caution
TRMNLウェブインターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release**と**OTA Updates Enabled**の両方を**オフ**にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これらのオプションを有効にしたままにすると、デバイスがインターネットに接続された際にTRMNLからファームウェアアップデートを自動的にダウンロードしてインストールする可能性があります。これらのアップデートは公式TRMNLハードウェア用であり、**reTerminal E Seriesとは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが誤動作したり応答しなくなったりする可能性があります。

reTerminal E Seriesの安定した動作を確保するため、常に両方のオプションを無効にしておいてください。
:::

## TRMNLプレイリスト機能の理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNLプレイリスト機能により、reTerminal E Series ePaper Displayに何を表示するか、いつ表示するかを正確に制御できます。上記のスクリーンショットに示されている主要なセクションとコントロールの詳細は以下の通りです：

### プレイリスト概要
- **プレイリストタイトル**: 上部にTRMNLデバイスの名前が表示されます（例：「MengDu's TRMNL」）。
- **表示時間範囲**: プレイリストがアクティブな時間範囲を設定できます（例：00:00から23:45まで）。
- **更新間隔**: ディスプレイの更新頻度を選択します（例：5分ごと）。
- **Add a Group / Add a Plugin**: これらのボタンを使用してプレイリストをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりします。

### プレイリストアイテム
プレイリストの各行は、reTerminal E Series ePaper Displayに表示される画面またはウィジェットを表します（参考のみ）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、この画面が現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 現在の年の残り日数のカウントダウンを表示します（例：「2025」）。
   - ラベル（例：「9 days ago」）は、この画面が最後に更新または表示された時期を示します。
3. **Custom Text**
   - 任意のカスタムメッセージを表示できます（例：「Hello World」）。
   - 最後に更新された時期も表示されます。

各アイテムには複数のコントロールがあります：
- **設定（歯車アイコン）**: プラグインのオプションを設定します。
- **削除（Xアイコン）**: プレイリストからアイテムを削除します。
- **プレビュー（目のアイコン）**: 画面がどのように見えるかをプレビューします。
- **並び替え（バーアイコン）**: ドラッグして画面が表示される順序を変更します。

### スマートプレイリスト
- **スマートプレイリストオプション**: 下部で、コンテンツが変更されていない画面を自動的にスキップするかどうかを選択できます（例：「Never skip screens」）。

> 📖 詳細を知りたいですか？高度なヒントと詳細については、[Smart Playlistsブログ投稿](https://usetrmnl.com/blog/smart-playlists)をお読みください。

この柔軟なプレイリストシステムにより、reTerminal E Seriesに何を表示するか、どのくらいの頻度で更新するか、どの順序で表示するかを完全にカスタマイズできます。さまざまなプラグインを組み合わせて、ニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNLプラグインの探索

TRMNLのプラグインシステムは、あなたのreTerminal E Series ePaperディスプレイを真に強力でカスタマイズ可能にするものです。プラグインは、デバイスに追加して様々な情報やコンテンツを表示できるモジュラーアプリやウィジェットです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは、天気、カレンダーイベント、株価、RSSフィード、励ましの言葉、GitHubアクティビティなどを表示できる個別のコンテンツブロックです。プラグインを組み合わせて、あなたのニーズに合ったダッシュボードを作成できます。

### 接続済みプラグイン

プラグインページの上部には、すでにTRMNLアカウントに接続したすべてのプラグインが表示されます。これらはプレイリストに追加してreTerminal E Seriesに表示する準備ができています。例：
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


## 特別な謝辞

このプロジェクトに対する強力なサポートと貴重なご支援をいただいた**TRMNLチーム**全体に特別な感謝を申し上げます。特に、開発とドキュメント作成プロセス全体を通じて献身的にご支援いただいた**Bogdan**、**Ryan Kulp**、**Fr3d**、そして他のすべてのチームメンバーに感謝いたします。

皆様の専門知識とコミットメントにより、この統合が可能になり、reTerminal E Series ePaperディスプレイコミュニティのユーザーエクスペリエンスが大幅に向上しました。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

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

