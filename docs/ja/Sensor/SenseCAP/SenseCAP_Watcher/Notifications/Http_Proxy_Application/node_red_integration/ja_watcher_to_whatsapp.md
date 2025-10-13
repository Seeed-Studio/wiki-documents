---
description: WatcherとNode-REDからWhatsAppにデータを送信する
title: Watcher & Node-RED to WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /ja/watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2024
  author: Vincent
---

# Watcher To WhatsApp クイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) は、Metaが所有するインスタントメッセージングおよびVoice-over-IPサービスです。ユーザーはテキスト、音声、ビデオメッセージの送信、音声・ビデオ通話の実行、画像、文書、位置情報、その他のコンテンツの共有が可能です。

このチュートリアルでは、Watcher APIとNode-REDを統合して、WatcherからWhatsAppにシームレスにデータを送信する方法をガイドします。この統合により、**通知を受信するシンプルで効率的な方法を提供し、さらなるアプリケーションと統合への扉を開きます**。

## パート1. Node-REDでWatcherをセットアップする

### ステップ1. Node-REDをセットアップする

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このセットアップにはNode-REDとWatcher APIが必要です。Node-REDをインストールしていない、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED クイックスタート**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. Watcherからデータを取得する

WatcherをNode-REDと連携するようにセットアップした後、次のステップはWatcherからのデータをWhatsApp用に準備することです。ファンクションノードをダブルクリックして、データを適切にフォーマットします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルの目的では、コンテンツと画像URLを送信します。ただし、アプリケーションの必要に応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### データをフォーマットするNode-REDファンクションの例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## パート 2. WhatsApp API のセットアップ

### ステップ 3. WhatsApp にサインアップ

続行するには WhatsApp アカウントが必要です。まだアカウントをお持ちでない場合は、[**こちらをクリック**](https://www.whatsapp.com)してアカウント作成の手順を完了してください。

すでにアカウントをお持ちの場合は、[**ステップ 4**](#step-4-get-callmebot-api-key) に進んでください。

### ステップ 4. CallMeBot API キーを取得

WhatsApp アカウントのセットアップとログインが完了したら、次は CallMeBot API をセットアップします。これは Node-RED と WhatsApp を連携させる API です。

CallMeBot API キーを取得するには、以下の手順に従ってください（[**この Github リポジトリ**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)から引用）：

1. 電話番号 +34 644 66 32 62 を電話の連絡先に追加します。（お好きな名前を付けてください）
2. 作成した新しい連絡先に「I allow callmebot to send me messages」というメッセージを送信します（もちろん WhatsApp を使用）
3. ボットから「API Activated for your phone number. Your APIKEY is 123123」というメッセージを受信するまで待ちます。これはまだベータテスト中のため、アクティベーションには最大 2 分かかる場合があります。
4. ボットからの WhatsApp メッセージには、API を使用してメッセージを送信するために必要な apikey が含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
このチュートリアルで提供されている CallMeBot API の電話番号が満杯で、これ以上のリクエストを受け付けられない可能性があります。この場合、CallMeBot は使用する代替電話番号を含む WhatsApp メッセージを送信します。

そのようなメッセージを受信せず、提供されたすべての電話番号が満杯の場合は、Node-RED を WhatsApp にリンクする代替 API を見つける必要があるかもしれません。CallMeBot ウェブサイトで最新の更新情報とドキュメントを確認するか、Node-RED と互換性のある他の WhatsApp メッセージング API を探してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## パート 3. WhatsApp と Node-RED の統合

### ステップ 5. WhatsApp モジュールのインストール

三本線のアイコンをクリックし、**Manage palette** オプションをクリックします。これにより、ノードを追加または削除できる新しいウィンドウが開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内の **Install** タブに切り替えます。検索バーで `whatsapp` と入力してモジュールを見つけます。次に、**node-red-contrib-whatsapp-cmb** エントリの横にある **install** ボタンをクリックします。

モジュールの動作方法をより深く理解し、その潜在能力を最大化したい場合は、[**ノードのドキュメント**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md)と関連する [**Github リポジトリ**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb)を確認することもお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-whatsapp-cmb** モジュールは、このチュートリアルの執筆時点（2024年7月）での現在の互換性と信頼性のために推奨されています。ただし、Node-RED モジュールの可用性と機能は時間の経過とともに変わる可能性があります。Node-RED ライブラリまたは GitHub リポジトリで最新のユーザーフィードバックと互換性ノートを確認することをお勧めします。このモジュールで問題が発生した場合は、より適切なオプションとして Node-RED ライブラリにリストされている他の WhatsApp モジュールを探すことを検討してください。
:::

### ステップ 6. WhatsApp ノードの設定

WhatsApp モジュールをインストールしたら、**Send Message** ノードを Node-RED フローにドラッグし、function ノードに接続します。

**Send Message** ノードをダブルクリックして設定します。次に、Account フィールドの横にあるプラスアイコンをクリックして、新しい Account 設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. このアカウントに使用したい名前を入力します。
2. WhatsApp アカウントに関連付けられた電話番号を入力します。
3. API キーを入力します。

次に、**Add** または **Update** をクリックして Account 設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

アカウントが設定されたら、Message フィールドの横のドロップダウンを **msg.** に変更し、テキストフィールドに `payload` と入力します。最後に、**Done** をクリックして WhatsApp ノードの設定を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7. デプロイ

最後に、Node-RED インターフェースの右上にある Deploy ボタンをクリックしてフローをデプロイします。このアクションにより設定されたノードがアクティブになり、function ノードから CallMeBot API へのデータフローが可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

これで、Watcher がトリガーされるたびに WhatsApp から通知を受信するようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## デバッグ: Node-RED エラー

Node-RED を WhatsApp と統合しようとする際に、このようなエラーが発生する可能性があります。これが発生した場合は、以下の手順に従って修正できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

この問題を解決するには、以下の手順を試すことができます：

1. Node-RED ユーザーディレクトリで以下を実行して、不足している `aws4` モジュールをインストールします：

   ```sh
   npm install aws4
   ```

2. それでもうまくいかない場合は、`request` パッケージを再インストールする必要があるかもしれません：

   ```sh
   npm install request
   ```

3. 問題が解決しない場合は、WhatsAppノードを再インストールする必要があるかもしれません：

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. 最後の手段として、npmキャッシュをクリアしてすべての依存関係を再インストールすることを試すことができます：

   ```sh
    npm cache clean --force
    npm install
   ```

これらの手順を試した後、Node-REDを再起動してエラーが解決されるかどうかを確認してください。まだ問題が発生している場合は、Node.jsバージョン、Node-REDバージョン、および使用しているパッケージのバージョン間の互換性を確認する必要があるかもしれません。

WatcherとWhatsAppの統合が成功したことをお祝いします！開発の取り組みにおいて、エキサイティングな機会の扉を開きました。WhatsAppの堅牢な機能を活用した革新的なアプリケーションの作成に飛び込む準備をしてください。次に開発される素晴らしいソリューションを楽しみにしています！

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
