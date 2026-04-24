---
description: この記事では、epaper パネルを TRMNL と連携して使用する方法について説明します。
title: TRMNL と連携
keywords:
  - ePaper ディスプレイ
  - TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /xiao_7_5_inch_epaper_panel_with_trmnl
sku: 114993635
sidebar_position: 3
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/xiao_7_5_inch_epaper_panel_with_trmnl/
---

# XIAO 7.5" ePaper パネル TRMNL 連携ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、気が散りやすいデジタル環境の中で、人々が集中力と落ち着きを保てるように設計された革新的なプラットフォームです。2023 年に設立されて以来、TRMNL は E Ink® ダッシュボード管理のリーディングソリューションとして急速に成長し、従来の画面のような絶え間ない通知や気を散らす要素なしに情報を表示する、ユニークなアプローチを提供しています。

TRMNL の中核にあるのは、「テクノロジーは常に注意を要求するのではなく、生活を向上させるべきだ」という哲学です。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、よりマインドフルで侵入性の低いテクノロジー体験を実現します。

### なぜ XIAO 7.5" ePaper パネルと TRMNL を統合するのか？

TRMNL と XIAO 7.5" ePaper パネルを統合することで、次のような魅力的な利点が得られます。

- **ダッシュボード作成の簡素化**: TRMNL の拡大し続けるアプリと連携機能のライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます
- **低消費電力**: TRMNL の効率的なソフトウェアと、E Ink® ディスプレイの最小限の電力要件を組み合わせることで、非常に省エネなソリューションになります
- **気が散らない情報表示**: 従来の画面に伴う絶え間ない通知や目の疲れなしに、必要な情報だけを取得できます
- **定期的なアップデート**: TRMNL は活発に開発されており、新機能や連携機能が毎週追加されるため、ディスプレイの可能性が継続的に広がります
- **開発者フレンドリー**: TRMNL のオープンな API と開発者ツールを使って、ニーズに合わせたカスタムプラグインや連携機能を作成できます

TRMNL の強力なプラットフォームと高品質な E Ink® ディスプレイを組み合わせることで、ユーザーの注意力と時間の両方を尊重しながら、パーソナライズされた低消費電力の情報ダッシュボードを作成するためのエレガントなソリューションを提供します。

## TRMNL の利用を開始する

XIAO 7.5" ePaper パネルを TRMNL と連携させる前に、必要な材料を揃え、TRMNL の認証情報を準備しましょう。

### 必要なもの

この連携には、次のものが必要です。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO 7.5" ePaper パネル</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### TRMNL アカウントの作成と TRMNL アクセス

ePaper パネルを TRMNL に接続する前に、次の作業が必要です。

1. **TRMNL アクセスを購入する**

   - TRMNL Web アプリ + デバイス機能へのアクセスを以下から購入します: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
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

必要なものを揃え、TRMNL アクセスを購入したら、ePaper パネルを TRMNL プラットフォームに接続する作業に進むことができます。問題が発生したり質問がある場合は、team@usetrmnl.com から TRMNL チームに直接連絡できます。

### ファームウェアの書き込み

XIAO 7.5" ePaper パネルを TRMNL で動作させるには、対応するファームウェアをデバイスに書き込む必要があります。推奨される方法は 3 つあります。

#### 方法 1: TRMNL Web Flasher で書き込む（最も簡単）

1. **TRMNL Web Flasher にアクセスする**

:::tip
Seeed との互換性のために、**FW 1.5.12** 以降のファームウェアを使用してください。
:::

- [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセスします
- このツールを使うと、ブラウザから直接デバイスに書き込むことができます。
- 画面の指示に従って書き込みプロセスを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### 方法 2: ソースからビルドして書き込む（上級者 / 開発者向け）

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

   - `platformio.ini` で、`seeed_xiao_esp32c3` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **デバイスを接続する**

   - XIAO 7.5" ePaper パネルを接続します。

6. **ビルドしてアップロードする**

   - PlatformIO で "Upload" ボタンをクリックするか、次を実行します。

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - ファームウェアがコンパイルされ、デバイスにアップロードされます。

## Wi-Fi を設定し、プレイリストを TRMNL に送信する

XIAO 7.5" ePaper パネルを TRMNL で使用し、プレイリストを送信するには、まずデバイスを Wi-Fi ネットワークに接続する必要があります。このプロセスは「WiFi ペアリングモード」と呼ばれ、シンプルなキャプティブポータルを通じて行います。以下の手順に従ってください。

> 💡 **Wi-Fi のトラブルシューティングですか？** デバイスを Wi-Fi に接続する際に問題が発生した場合は、一般的なネットワークおよびルーター互換性の問題に対する解決策について、[TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源を入れてプロビジョニングモードに入る

- TRMNL ファームウェアを書き込み、デバイスの電源を入れると、まだ Wi-Fi に接続されていない場合は自動的にプロビジョニングモードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### TRMNL Wi-Fi に接続する

- **スマートフォン** または **コンピュータ** で、利用可能な Wi-Fi ネットワーク一覧を開きます。
- **TRMNL** という名前のネットワークを探して接続します。（デフォルトではパスワードは不要です。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

- 接続したら、Chrome や Edge などの Web ブラウザを開きます。
- デバイスは自動的に TRMNL の設定ページへリダイレクトするはずです。自動的に開かない場合は、ブラウザで [http://4.3.2.1](http://4.3.2.1) にアクセスしてください。

### Wi-Fi の認証情報を入力する

- 設定ページには、利用可能な Wi-Fi ネットワークの一覧が表示されます。
- **2.4GHz の Wi-Fi ネットワーク** を選択します（TRMNL は 5GHz ネットワークをサポートしていません）。
- Wi-Fi パスワードを入力します。
- **Save** または **Connect** をクリックします。

> ⚠️ **重要:** 必ず 2.4GHz の Wi-Fi ネットワークを使用してください。5GHz ネットワークは ESP32-C3 チップではサポートされていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに接続する

- デバイスは Wi-Fi への接続を試みます。
- 接続に成功すると、TRMNL Wi-Fi から切断され、自宅のネットワークに参加します。
- ウィンドウにはデバイスの MAC アドレスが表示されます。**後の手順で必要になるため、MAC アドレスを必ず控えておいてください。**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MAC アドレスはキャプティブポータル上に 1～2 秒しか表示されません。見逃してしまった場合は、次の方法でも確認できます。
>
> - VS Code > PlatformIO のビルド / アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) の方法を使用し、書き込み中に Chrome / Edge / Firefox の開発者コンソールで MAC アドレスを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイス一覧から確認する。
>
> 詳細およびスクリーンショットについては、公式ガイド「[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)」を参照してください。

### TRMNL Web インターフェースへアクセスする

XIAO 7.5" ePaper Panel が Wi-Fi に接続され、MAC アドレス（Device ID）を記録したら、TRMNL アカウントに追加できます：

1. **TRMNL Web インターフェースを開く**  
   - パソコンまたはモバイル端末でブラウザを開き、[TRMNL web interface](https://trmnl.app) にアクセスします。

2. **Devices ページへ移動する**  
   - TRMNL インターフェース内で、**Devices** セクションに移動します。

3. **新しいデバイスを追加する**  
   - **Add new device** ボタンをクリックします。通常、このボタンは Devices ページの右上または中央付近にあります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Device ID を入力する**  
   - ポップアップウィンドウで、TRMNL アクセスを購入した際に受け取った Device ID を入力します（これは MAC アドレスではありません）。購入確認メールまたは TRMNL ダッシュボードに記載されている Device ID を使用してください。
   - **Add new device** をクリックして処理を完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **XIAO 7.5" デバイスの MAC アドレスを登録する**

   XIAO ePaper パネルと TRMNL 間の接続を構築するために、TRMNL の設定ページ内で正しいデバイス MAC アドレスを紐付ける必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - PlatformIO の書き込みプロセス中（アップロードログを確認）またはプロビジョニングポータル（Wi-Fi 設定後に表示されます）から MAC アドレスを取得できます。
   - 早い段階で MAC アドレスを追加しておくと、スムーズなオンボーディングとデバイス管理に役立ちます。

   - その後、ePaper Panel に任意の名前を設定し、必要に応じてその他の設定を調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これで XIAO 7.5" ePaper Panel は TRMNL アカウントにリンクされました！TRMNL インターフェースから、プレイリスト、画像、その他のコンテンツを直接ディスプレイに送信できます。

> 💡 **ヒント：** 複数の ePaper Panel をお持ちの場合は、それぞれのデバイス固有の Device ID を使用して、上記の手順を各デバイスごとに繰り返してください。

:::caution
TRMNL Web インターフェースでデバイスを追加した後、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にしてください。  

これらのオプションを有効のままにしておくと、インターネット接続時に TRMNL から自動的にファームウェアアップデートをダウンロードしてインストールする場合があります。これらのアップデートは公式 TRMNL ハードウェア向けであり、**XIAO 7.5" ePaper Panel とは互換性がありません**。互換性のないファームウェアをインストールすると、デバイスが正常に動作しなくなったり、応答しなくなったりする可能性があります。

XIAO ePaper Panel を安定して動作させるために、常に両方のオプションを無効のままにしておいてください。
:::

## TRMNL のプレイリスト機能を理解する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL の Playlist 機能を使うと、ePaper Panel に「何を」「いつ」表示するかを正確に制御できます。上のスクリーンショットに示されている主なセクションとコントロールを以下に説明します：

### プレイリスト概要

- **Playlist Title**: 上部には TRMNL デバイスの名前が表示されます（例：「MengDu's TRMNL」）。
- **Display Time Range**: プレイリストを有効にする時間帯を設定できます（例：00:00 〜 23:45）。
- **Update Interval**: ディスプレイの更新頻度を選択します（例：5 分ごと）。
- **Add a Group / Add a Plugin**: これらのボタンを使ってプレイリストをグループに整理したり、新しいコンテンツプラグイン（天気、カレンダー、カスタムテキストなど）を追加したりできます。

### プレイリストアイテム

プレイリスト内の各行は、ePaper Panel に表示される画面またはウィジェットを表します（参考情報）：

1. **Weather**
   - 選択した場所の現在の天気情報を表示します。
   - 緑色の「Displayed now」ラベルは、この画面が現在デバイスに表示されていることを示します。
2. **Days Left This Year**
   - 今年残りの日数のカウントダウンを表示します（例：「2025」）。
   - ラベル（例：「9 days ago」）は、この画面が最後に更新または表示された時刻を示します。
3. **Custom Text**
   - 任意のカスタムメッセージを表示できます（例：「Hello World」）。
   - 最後に更新された時刻も表示されます。

各アイテムには、次のようなコントロールがあります：

- **Settings（歯車アイコン）**: プラグインのオプションを設定します。
- **Delete（X アイコン）**: プレイリストからアイテムを削除します。
- **Preview（目のアイコン）**: 画面の見え方をプレビューします。
- **Reorder（バーアイコン）**: ドラッグして画面が表示される順序を変更します。

### Smart Playlist

- **Smart Playlist オプション**: 下部では、内容が変化していない画面を自動的にスキップするかどうかを選択できます（例：「Never skip screens」）。

> 📖 さらに詳しく知りたい場合は、詳細なヒントと説明が記載された [Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) をお読みください。

この柔軟なプレイリストシステムにより、ePaper Panel に何を表示するか、どのくらいの頻度で更新するか、どの順番で表示するかを完全にカスタマイズできます。さまざまなプラグインを組み合わせて、自分のニーズに合ったパーソナライズされたダッシュボードを作成できます。

## TRMNL プラグインを探る

TRMNL のプラグインシステムこそが、ePaper Panel を真に強力かつカスタマイズ可能なものにしています。プラグインはモジュール式のアプリやウィジェットで、デバイスに追加して多種多様な情報やコンテンツを表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### プラグインとは？

プラグインは個々のコンテンツブロックであり、天気、カレンダーイベント、株価、RSS フィード、モチベーションを高める名言、GitHub アクティビティなど、さまざまな情報を表示できます。プラグインを組み合わせて、自分のニーズに合ったダッシュボードを作成できます。

### Connected Plugins

Plugins ページの上部には、すでに TRMNL アカウントに接続されているすべてのプラグインが表示されます。これらはプレイリストに追加して ePaper Panel に表示する準備ができています。例としては次のようなものがあります：

- **Weather**: 現在の天気状況を表示します。
- **Days Left This Year**: 年末までのカウントダウンを表示します。
- **Stock Price**: お気に入りの株価を追跡します。
- **RSS Feed**: ニュースやブログの更新を表示します。
- **Reddit, Hacker News**: トレンドの投稿を表示します。
- **Language Learning, Motivational Quote, Custom Text**: 学習ツールやカスタムメッセージでディスプレイをパーソナライズします。

### Plugin Marketplace

接続済みプラグインの下には、Plugin Marketplace があります。ここでは、デバイスに追加する新しいプラグインを閲覧、検索、発見できます。プラグインは #productivity、#news、#ecommerce などのカテゴリやタグで整理されており、必要なものを簡単に見つけられます。

- **Browse & Search**: 検索バーやタグを使って、興味のあるプラグインを素早く見つけます。
- **Add Plugins**: 任意のプラグインをクリックしてアカウントに接続し、プレイリストで使用を開始します。

開発者は自分のプラグインを作成して公開し、他のユーザーに利用してもらうこともできます。これによりエコシステムは常に拡大し、新たな可能性が生まれ続けます（[プラグイン作成について詳しく見る](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

TRMNL の使用方法について質問がある場合や、より高度な機能を知りたい場合は、公式 TRMNL ドキュメントを参照してください： [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Special Thanks

このプロジェクトに対する力強いサポートと多大な支援をいただいた **TRMNL チーム全員** に心より感謝いたします。特に、開発およびドキュメント作成の過程を通じて献身的にご協力いただいた **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi** をはじめ、他のすべてのチームメンバーの皆様に深く感謝申し上げます。

皆様の専門知識と献身的な取り組みにより、この統合が実現し、XIAO 7.5" ePaper Panel コミュニティのユーザー体験が大きく向上しました。

## トラブルシューティング

### ネットワークを再設定するには？

XIAO の Reset ボタンを押して離し、その後 Boot ボタンを 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効化します。

## リソース

- **[STP]**: [3D モデル筐体](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [TRMNL firmware repository](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Seeed_TRMNL_Eink_Project repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
