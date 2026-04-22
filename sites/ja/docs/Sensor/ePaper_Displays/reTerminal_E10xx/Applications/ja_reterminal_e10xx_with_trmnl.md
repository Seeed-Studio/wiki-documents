---
description: この記事では、reTerminal E シリーズ ePaper Display を TRMNL と一緒に使用する方法について説明します。
title: TRMNL 対応
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sku: 100073581
sidebar_position: 3
last_update:
  date: 09/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl/
---

:::caution
TRMNL バージョン 1.6.7 から reTerminal E1001 が正式にサポートされました。ソフトウェアアーキテクチャ上の制限により、reTerminal E1002 フルカラー電子ペーパー・ディスプレイのサポートは**まだ**利用できません。
:::

# reTerminal E シリーズ ePaper Display は TRMNL に対応

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、気が散りやすいデジタル世界の中で、人々が集中力と落ち着きを保てるように設計された革新的なプラットフォームです。2023 年に設立されて以来、TRMNL は E Ink® ダッシュボード管理のリーディングソリューションとなり、従来の画面のような絶え間ない通知や気を散らす要素なしに情報を表示する、ユニークなアプローチを提供しています。

TRMNL の中核にあるのは、「テクノロジーは常に注意を要求するのではなく、私たちの生活を向上させるべきだ」という哲学です。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、よりマインドフルで侵入性の低いテクノロジー体験を実現します。

### なぜ TRMNL を使うのか？

TRMNL を統合することで、次のような魅力的なメリットが得られます。

- **ダッシュボード作成の簡素化**：TRMNL が持つ拡大中のアプリと連携機能のライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**：TRMNL の効率的なソフトウェアと、E Ink® ディスプレイの最小限の電力要件を組み合わせることで、非常に省エネルギーなソリューションを実現します
- **気が散らない情報表示**：従来の画面に伴う絶え間ない通知や目の疲れなしに、必要な情報だけを取得できます
- **定期的なアップデート**：TRMNL は活発に開発されており、新機能や連携機能が毎週追加されるため、ディスプレイの可能性が継続的に拡張されます
- **開発者フレンドリー**：TRMNL のオープンな API と開発者ツールを使って、ニーズに合わせたカスタムプラグインや連携機能を作成できます

TRMNL の強力なプラットフォームと、高品質な E Ink® reTerminal E シリーズ ePaper Display を組み合わせることで、ユーザーの注意力と時間の両方を尊重しながら、パーソナライズされた低消費電力の情報ダッシュボードを作成できる、エレガントなソリューションを提供します。

## TRMNL のはじめ方

### TRMNL アカウントの作成と TRMNL アクセス

キットを TRMNL に接続する前に、次の準備が必要です。

1. **TRMNL アクセスを購入する**

   - TRMNL Web アプリとデバイス機能へのアクセスを以下から購入します: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNL プラットフォームを利用するために必要な認証情報が提供されます
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) にアクセスして仮想デバイスを有効化します（購入後、反映まで最大 10 分かかる場合があります）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNL アカウントを作成する**

   - [TRMNL の Web サイト](https://usetrmnl.com) にアクセスします
   - "Sign Up" をクリックして新しいアカウントを作成します
   - 画面の指示に従って登録プロセスを完了します

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
TRMNL の認証情報は機密情報です。決して公開したり、バージョン管理システムにコミットしたりしないでください。
:::

必要なものを用意し、TRMNL アクセスを購入したら、デバイスを TRMNL プラットフォームに接続する手順に進むことができます。問題が発生した場合や質問がある場合は、team@usetrmnl.com から TRMNL チームに直接連絡できます。

### 必要なもの

すぐに開始できます。以降のチュートリアルを完了するために、次のいずれかの reTerminal を用意してください。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### ファームウェアの書き込み

まだ reTerminal E シリーズの工場出荷時ファームウェアを使用している場合は、デバイスを TRMNL に接続する前に、以下の方法で TRMNL ファームウェアを書き込む必要があります。

#### 方法 1: TRMNL Web Flasher で書き込む（最も簡単）

:::tip
Seeed との互換性のために、**FW 1.6.7** 以降のファームウェアを使用してください。
:::

1. **TRMNL Web Flasher にアクセスする**

   - [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセスします
   - このツールを使うと、ブラウザから直接デバイスにファームウェアを書き込むことができます。
   - 画面の指示に従って、書き込みプロセスを完了してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法 2: Sensecraft HMI プラットフォームで書き込む

1. [Sensecraft HMI プラットフォーム](https://sensecraft.seeed.cc/hmi/device) にアクセスします

2. 自分のデバイスを選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. TRMNL ファームウェアを選択します。HMI ファームウェアを書き込みたい場合は、それらを選択することもできます。その後、**Full Flash** と **Flash** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. デバイスをコンピュータに接続し、シリアルポートを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. 正常に完了すると、画面がリフレッシュされ、TRMNL ロゴと MAC アドレスが表示されます。これで自由に操作できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### 方法 3: ソースからビルドして書き込む（上級ユーザー／開発者向け）

1. **ファームウェアリポジトリをクローンする**

- [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware) にアクセスし、クローンします。

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

コードを更新して TRMNL に PR を送信し、表示される前にレビューしてもらう必要がある場合があります。最新のファームウェアバージョンをいち早く使用したい場合は、Seeed Project 配下の TRMNL リポジトリを利用することもできます。

- [Seeed リポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) にアクセスし、クローンします。

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **PlatformIO をインストールする**

   - [PlatformIO](https://platformio.org/) を VSCode の拡張機能として、またはコマンドラインからインストールします。

3. **プロジェクトを開く**

   - クローンした `firmware` フォルダを VSCode で開きます。

4. **正しい環境を選択する**

- `platformio.ini` で、

  - reTerminal E1001 を使用している場合は、`seeed_reTerminal_E1001` 環境を選択します。

  <!-- - If you are using reTerminal E1002, select the `seeed_reTerminal_E1002` environment. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスを接続する**

   - reTerminal E シリーズ ePaper Display デバイスを接続します。

6. **ビルドしてアップロードする**

   - PlatformIO で "Upload" ボタンをクリックするか、次を実行します。

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。

## Wi-Fi を設定して TRMNL にプレイリストを送信する

reTerminal E シリーズ ePaper Display を TRMNL で使用し、プレイリストを送信するには、まずデバイスを Wi-Fi ネットワークに接続する必要があります。このプロセスは「WiFi ペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行います。以下の手順に従ってください。

> 💡 **Wi-Fi のトラブルシューティングですか？** デバイスを Wi-Fi に接続する際に問題が発生した場合は、一般的なネットワークおよびルーター互換性の問題に対する解決策について、[TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源を入れてプロビジョニングモードに入る

- TRMNL ファームウェアを書き込み、デバイスの電源を入れると、まだ Wi-Fi に接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### TRMNL の Wi-Fi に接続する

- **スマートフォン**または**コンピュータ**で、利用可能な Wi-Fi ネットワーク一覧を開きます。
- **TRMNL** という名前のネットワークを探して接続します。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、Chrome や Edge などの Web ブラウザを開きます。
- デバイスは自動的に TRMNL の設定ページにリダイレクトするはずです。自動的に表示されない場合は、ブラウザで [http://4.3.2.1](http://4.3.2.1) に手動でアクセスしてください。

### Wi-Fi 認証情報を入力する

- 設定ページでは、利用可能な Wi-Fi ネットワークの一覧が表示されます。
- **2.4GHz の Wi-Fi ネットワークを選択します**（reTerminal E Series ePaper Display は 5GHz ネットワークをサポートしていません）。
- Wi-Fi パスワードを入力します。
- **Save** または **Connect** をクリックします。

> ⚠️ **重要:** 必ず 2.4GHz の Wi-Fi ネットワークを使用してください。5GHz ネットワークは reTerminal E Series ではサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに接続する

- デバイスは Wi-Fi への接続を試みます。
- 接続に成功すると、TRMNL Wi-Fi から切断され、自宅のネットワークに参加します。
- ウィンドウにはデバイスの MAC アドレスが表示されます。**後の手順で必要になるため、必ずこの MAC アドレスを記録してください**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MAC アドレスはキャプティブポータル上に 1〜2 秒間しか表示されません。見逃してしまった場合は、次の方法でも確認できます：
>
> - VS Code > PlatformIO のビルド／アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) の方法を使用し、フラッシュ中に Chrome／Edge／Firefox の開発者コンソールで MAC アドレスを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイス一覧から確認する。
>
> 詳細やスクリーンショットについては、公式ガイドを参照してください: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### TRMNL Web インターフェースへアクセスする

reTerminal E Series ePaper Display が Wi-Fi に接続され、MAC アドレス（Device ID）を記録したら、TRMNL アカウントにデバイスを追加できます：

1. **TRMNL Web インターフェースを開く**  
   - パソコンまたはモバイル端末でブラウザを開き、[TRMNL web interface](https://trmnl.app) にアクセスします。

2. **Devices ページへ移動する**  
   - TRMNL インターフェース内で **Devices** セクションに移動します。

3. **新しいデバイスを追加する**  
   - **Add new device** ボタンをクリックします。通常は Devices ページの右上または中央付近にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Device ID を入力する**  
   - ポップアップウィンドウで、TRMNL アクセスを購入した際に受け取った Device ID を入力します（これは MAC アドレスではありません）。購入確認メールまたは TRMNL ダッシュボードに記載されている Device ID を使用してください。
   - **Add new device** をクリックして処理を完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **reTerminal E Series ePaper Display の MAC アドレスを登録する**

   reTerminal E Series ePaper Display と TRMNL 間で接続を確立するために、TRMNL の設定ページ内で正しいデバイスの MAC アドレスを紐付ける必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - PlatformIO のアップロード処理中（アップロードログを確認）や、プロビジョニングポータル（Wi-Fi 設定後に表示されます）から MAC アドレスを取得できます。
   - 早い段階で MAC アドレスを追加しておくことで、スムーズなオンボーディングとデバイス管理が可能になります。

   - その後、reTerminal E Series ePaper Display に任意の名前を付けたり、必要に応じてその他の設定を調整したりできます。

これで reTerminal E Series ePaper Display が TRMNL アカウントにリンクされました！TRMNL インターフェースから、プレイリスト、画像、その他のコンテンツを直接ディスプレイに送信できます。

> 💡 **ヒント:** 複数の reTerminal E Series をお持ちの場合は、それぞれ固有の Device ID を使用して、上記の手順を各デバイスごとに繰り返してください。

:::caution
TRMNL Web インターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にしてください。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これらのオプションを有効のままにしておくと、インターネットに接続された際に、TRMNL から自動的にファームウェアアップデートをダウンロードしてインストールしてしまう可能性があります。これらのアップデートは公式 TRMNL ハードウェア向けであり、**reTerminal E Series とは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが誤動作したり、応答しなくなったりする恐れがあります。

reTerminal E Series を安定して動作させるために、常に両方のオプションを無効のままにしておいてください。
:::

## TRMNL のプレイリスト機能について

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL の Playlist 機能を使うと、reTerminal E Series ePaper Display に「何を」「いつ」表示するかを細かく制御できます。上のスクリーンショットに示した主なセクションと操作を以下に説明します：

### プレイリスト概要

- **プレイリストタイトル**: 上部には TRMNL デバイスの名前が表示されます（例: 「MengDu's TRMNL」）。
- **表示時間範囲**: プレイリストを有効にする時間帯を設定できます（例: 00:00 〜 23:45）。
- **更新間隔**: ディスプレイをどのくらいの頻度で更新するかを選択します（例: 5 分ごと）。
- **Add a Group / Add a Plugin**: これらのボタンを使ってプレイリストをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりできます。

### プレイリスト項目

プレイリスト内の各行は、reTerminal E Series ePaper Display に表示される画面またはウィジェットを表します（参考情報）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、この画面が現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 今年残りの日数のカウントダウンを表示します（例: 「2025」）。
   - ラベル（例: 「9 days ago」）は、この画面が最後に更新または表示された時刻を示します。
3. **Custom Text**
   - 任意のカスタムメッセージを表示できます（例: 「Hello World」）。
   - 最後に更新された時刻も表示されます。

各項目には、次のような操作が用意されています：

- **設定（歯車アイコン）**: プラグインのオプションを設定します。
- **削除（X アイコン）**: プレイリストから項目を削除します。
- **プレビュー（目のアイコン）**: 画面の見え方をプレビューします。
- **並べ替え（バーアイコン）**: ドラッグして画面が表示される順序を変更します。

### Smart Playlist

- **Smart Playlist オプション**: 下部では、内容が変化していない画面を自動的にスキップするかどうかを選択できます（例: 「Never skip screens」）。

> 📖 さらに詳しく知りたい場合は、[Smart Playlists に関するブログ記事](https://usetrmnl.com/blog/smart-playlists)を読んで、高度なヒントや詳細を確認してください。

この柔軟なプレイリストシステムにより、reTerminal E Series に何を表示するか、その更新頻度や表示順序を完全にカスタマイズできます。さまざまなプラグインを組み合わせて、自分のニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNL プラグインの探索

TRMNL のプラグインシステムこそが、reTerminal E Series ePaper Display を真に強力かつカスタマイズ可能なものにしています。プラグインはモジュール式のアプリやウィジェットで、デバイスにさまざまな情報やコンテンツを表示させることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは、天気、カレンダーイベント、株価、RSS フィード、モチベーションを高める名言、GitHub アクティビティなどを表示できる個々のコンテンツブロックです。プラグインを組み合わせて、自分のニーズに合ったダッシュボードを作成できます。

### 接続済みプラグイン

Plugins ページの上部には、すでに TRMNL アカウントに接続しているプラグインがすべて表示されます。これらはプレイリストに追加して、reTerminal E Series に表示する準備ができています。例としては次のようなものがあります：

- **Weather**: 現在の天気状況を表示します。
- **Days Left This Year**: 年末までのカウントダウンを表示します。
- **Stock Price**: お気に入りの株価を追跡します。
- **RSS Feed**: ニュースやブログの更新を表示します。
- **Reddit, Hacker News**: トレンドの投稿を表示します。
- **Language Learning, Motivational Quote, Custom Text**: 学習ツールやカスタムメッセージでディスプレイをパーソナライズします。

### プラグインマーケットプレイス

接続済みプラグインの下には、プラグインマーケットプレイスがあります。ここでは、デバイスに追加する新しいプラグインを閲覧、検索、発見できます。プラグインは #productivity、#news、#ecommerce などのカテゴリやタグで整理されており、必要なものを簡単に見つけられます。

- **閲覧と検索**: 検索バーやタグを使って、興味のあるプラグインを素早く見つけます。
- **プラグインを追加**: 任意のプラグインをクリックしてアカウントに接続し、プレイリストで使用を開始します。

開発者は自分でプラグインを作成して公開し、他のユーザーに利用してもらうこともできます。これによりエコシステムは常に拡大し、新しい可能性が次々と生まれます（[プラグイン作成について詳しく見る](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

TRMNL の使用方法について質問がある場合や、より高度な機能を知りたい場合は、公式 TRMNL ドキュメントを参照してください: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 謝辞

このプロジェクトに対する多大なサポートと貴重な協力をいただいた **TRMNL チーム全員** に心より感謝いたします。特に、開発およびドキュメント作成の過程を通じて献身的に支援してくださった **Bogdan**、**Ryan Kulp**、**Fr3d** をはじめ、すべてのチームメンバーの皆様に深く感謝申し上げます。

皆様の専門知識と献身的な取り組みにより、この統合が実現し、reTerminal E Series ePaper Display コミュニティのユーザー体験が大きく向上しました。

## トラブルシューティング

### ネットワークを再設定するには？

Green Button を 5 秒間長押しします。デバイスは初期の TRMNL インターフェースに戻り、AP を有効化します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
