---
description: WatcherとNode-REDからTelegramにメッセージを送信する
title: Watcher & Node-RED to Telegram
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /ja/watcher_node_red_to_telegram
last_update:
  date: 06/07/2024
  author: Allen
---

# Watcher To Telegram クイックスタート

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## [Telegram](https://telegram.org/)とは

Telegramは、ユーザーと開発者の両方に幅広い機能を提供する人気のメッセージングアプリです。オープンなAPIとプロトコルにより、開発者はカスタムTelegramクライアント、ボットを作成し、Telegramのサービスを自分のアプリケーションに統合することができます。Telegramは、リアルタイム通信のための安全で信頼性の高いプラットフォームを提供し、様々なメディアタイプ、グループチャット、エンドツーエンド暗号化をサポートしています。クラウドベースのインフラストラクチャにより、デバイス間でのシームレスな同期を保証し、簡単なスケーラビリティを可能にします。開発者は、Telegramの機能とツールを活用して、革新的なソリューションを構築し、プロジェクト内でのユーザーエクスペリエンスを向上させることができます。

## Telegram APIへのアクセス方法

### ステップ1. ボットトークンの取得

1. まず、TelegramアプリをダウンロードしてBotFatherページに入ります。**/newbot**を送信し、ヒントに従って**ボットに名前を付けます**。

2. その後、ページ2の**リンクをクリック**してあなたのボット（ページ3）にジャンプし、**ボットに何かを送信します**。何かを送信することを忘れないでください。そうしないとchatidを取得できません。

3. もう一つの重要なことは、ページ2でモザイクをかけた部分の**トークンを保存する**ことです。後で使用します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ページ1</th>
      <th>ページ2</th>
      <th>ページ3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### ステップ2. ボットchatIdの取得

前のステップに従って、BotFatherはボットを作成した際にフィードバックを提供します。フィードバック内で**Token**を見つけることができ、形式は次のようになります：**123456789:AoUJnnpoFlkkdfJbCXlo....** そして、あなたのTokenを使用してこのリンクにアクセスし、**ChatId**を取得します。

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

以下の画像に従って**ChatId**を見つけてください。ChatIdは次のようになります：**7283028524**。**TokenとChatIdを保存してください**。後で使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## Node-REDでTelegramモジュールを設定する

### ステップ3. Telegramモジュールをインストールする

以下の画像に従ってTelegramモジュールをインストールしてください。まだNode-REDをインストールしていない場合は、[こちらを参照してください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**telegramを検索**して、3番目のものをインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### ステップ4. モジュールを接続して設定する

これらのモジュールをワークスペースに**ドラッグ**して、一緒に接続してください。**OpenStream**の設定方法がわからない場合は、[このリンクを参照してください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

次に**function**モジュールを設定します。ダブルクリックして、以下のコードを貼り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // change to your Telegram Chat ID

// set payload to send photo
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// set payload to send message
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// send photo
node.send({ payload: photoPayload });

// send message
node.send({ payload: messagePayload });
```

その後、以下の画像に従って**sender**モジュールを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

ここに**ボット名、トークン、ChatId**を貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

もう一つの**sender**の設定も同様で、以下の画像に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## Telegramに情報を送信

### ステップ5. Watcherでタスクを実行

まず、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細については[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ6. Telegramにメッセージと写真を送信

タスクがトリガーされると、WatcherからメッセージとNode-REDとTelegramアプリの両方でメッセージを受信します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Node-RED</th>
      <th>Telegram</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/8.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/13.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

おめでとうございます！WatcherのTelegramへの接続が成功しました！開発の旅路において、エキサイティングな可能性の世界が開かれました。Telegramの強力な機能を活用した革新的なアプリケーションを探索し、作成する準備が整いました。未来は明るく、あなたが次に何を構築するかを見るのが待ちきれません！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
