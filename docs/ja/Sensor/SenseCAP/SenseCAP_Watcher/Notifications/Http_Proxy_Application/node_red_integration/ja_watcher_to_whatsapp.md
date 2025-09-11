---
description: WatcherとNode-REDからWhatsAppにデータを送信する
title: Watcher & Node-REDからWhatsAppへ
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /ja/watcher_node_red_to_whatsapp
last_update:
  date: 05/15/2025
  author: Vincent
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからWhatsAppへのクイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/)は、Metaが所有するインスタントメッセージングおよびVoIPサービスです。ユーザーはテキスト、音声、ビデオメッセージを送信したり、音声通話やビデオ通話を行ったり、画像、ドキュメント、位置情報、その他のコンテンツを共有することができます。

このチュートリアルでは、Watcher APIをNode-REDと統合し、WatcherからWhatsAppにデータをシームレスに送信する方法を説明します。この統合により、**通知を受け取る簡単で効率的な方法が提供され、さらなるアプリケーションや統合の可能性が広がります**。

## パート1. Node-REDでWatcherを設定する

### ステップ1. Node-REDを設定する

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このセットアップにはNode-REDとWatcher APIが必要です。Node-REDをまだインストールしていない、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED Quick Start**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. Watcherからデータを取得する

WatcherをNode-REDと連携させた後、次のステップはWatcherからWhatsApp用のデータを準備することです。データを適切にフォーマットするために、関数ノードをダブルクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルでは、コンテンツと画像URLを送信します。ただし、アプリケーションに応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### データをフォーマットするためのNode-RED関数の例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## パート2. WhatsApp APIを設定する

### ステップ3. WhatsAppに登録する

次に進むには、WhatsAppアカウントが必要です。まだアカウントをお持ちでない場合は、[**こちらをクリック**](https://www.whatsapp.com)してアカウント作成手順を完了してください。

すでにアカウントをお持ちの場合は、[**ステップ4**](#step-4-get-callmebot-api-key)に進んでください。

### ステップ4. CallMeBot APIキーを取得する

WhatsAppアカウントを設定してログインしたら、次はCallMeBot APIを設定します。このAPIは、Node-REDとWhatsAppをリンクする役割を果たします。

CallMeBot APIキーを取得するには、以下の手順に従ってください（[**このGithubリポジトリ**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)から引用）：

1. 電話帳に電話番号「+34 644 66 32 62」を追加します。（好きな名前で保存してください）
2. WhatsAppを使用して、新しく作成した連絡先に「I allow callmebot to send me messages」というメッセージを送信します。
3. ボットから「API Activated for your phone number. Your APIKEY is 123123」というメッセージが届くまで待ちます。このプロセスはまだベータテスト中のため、アクティベーションには最大2分かかる場合があります。
4. ボットからのWhatsAppメッセージには、APIを使用してメッセージを送信するために必要なapikeyが含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
このチュートリアルで提供されているCallMeBot API用の電話番号が満杯で、リクエストを受け付けられない可能性があります。その場合、CallMeBotは代替の電話番号を記載したWhatsAppメッセージを送信します。

もしそのようなメッセージを受け取らず、提供されたすべての電話番号が満杯の場合は、Node-REDとWhatsAppをリンクするための代替APIを見つける必要があるかもしれません。CallMeBotのウェブサイトで最新の更新情報やドキュメントを確認するか、Node-REDと互換性のある他のWhatsAppメッセージングAPIを探してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## Part 3. Node-REDでWhatsAppを統合する

### ステップ5. WhatsAppモジュールをインストールする

三本線のアイコンをクリックし、**Manage palette**（パレットを管理）オプションを選択します。これにより、新しいウィンドウが開き、ノードの追加や削除が可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内で**Install**（インストール）タブに切り替えます。検索バーに`whatsapp`と入力してモジュールを探します。その後、**node-red-contrib-whatsapp-cmb**エントリの横にある**install**（インストール）ボタンをクリックします。

また、モジュールの仕組みやその可能性を最大限に活用する方法について詳しく理解したい場合は、[**ノードのドキュメント**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md)や関連する[**GitHubリポジトリ**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb)を確認することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-whatsapp-cmb**モジュールは、このチュートリアル執筆時点（2024年7月）での互換性と信頼性が推奨されています。ただし、Node-REDモジュールの利用可能性や機能は時間とともに変化する可能性があります。Node-REDライブラリやGitHubリポジトリで最新のユーザーフィードバックや互換性情報を確認することをお勧めします。このモジュールで問題が発生した場合は、Node-REDライブラリにリストされている他のWhatsAppモジュールを検討し、より適したオプションを探してください。
:::

### ステップ6. WhatsAppノードを設定する

WhatsAppモジュールをインストールしたら、**Send Message**（メッセージ送信）ノードをNode-REDフローにドラッグし、関数ノードに接続します。

**Send Message**ノードをダブルクリックして設定を行います。その後、Accountフィールドの横にあるプラスアイコンをクリックして、新しいアカウント設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. このアカウントに使用する名前を入力します。
2. WhatsAppアカウントに関連付けられている電話番号を入力します。
3. APIキーを入力します。

その後、**Add**（追加）または**Update**（更新）をクリックしてアカウント設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

アカウントが設定されたら、Messageフィールドの横にあるドロップダウンを**msg.**に変更し、テキストフィールドに`payload`と入力します。最後に、**Done**（完了）をクリックしてWhatsAppノードの設定を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. デプロイ

最後に、Node-REDインターフェースの右上にあるDeployボタンをクリックしてフローをデプロイします。この操作により、設定したノードが有効化され、関数ノードからCallMeBot APIへのデータフローが可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

これで、WatcherがトリガーされるたびにWhatsAppから通知を受け取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## デバッグ: Node-RED エラー

Node-RED を WhatsApp と統合しようとする際に、以下のようなエラーが発生する可能性があります。このような場合は、以下の手順を実行して問題を解決してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

この問題を解決するために、以下の手順を試してください：

1. Node-RED のユーザーディレクトリで不足している `aws4` モジュールをインストールします：

   ```sh
   npm install aws4
   ```

2. これで解決しない場合は、`request` パッケージを再インストールする必要があるかもしれません：

   ```sh
   npm install request
   ```

3. 問題がまだ解決しない場合は、WhatsApp ノードを再インストールする必要があるかもしれません：

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. 最後の手段として、npm キャッシュをクリアしてすべての依存関係を再インストールすることを試してください：

   ```sh
   npm cache clean --force
   npm install
   ```

これらの手順を試した後、Node-RED を再起動してエラーが解決されたか確認してください。問題がまだ続く場合は、Node.js のバージョン、Node-RED のバージョン、および使用しているパッケージのバージョン間の互換性を確認する必要があるかもしれません。

Watcher と WhatsApp の統合に成功したこと、おめでとうございます！これにより、開発の取り組みにおいて多くのエキサイティングな可能性が広がります。WhatsApp の強力な機能を活用した革新的なアプリケーションの作成に取り組む準備をしてください。次に開発する素晴らしいソリューションを楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>