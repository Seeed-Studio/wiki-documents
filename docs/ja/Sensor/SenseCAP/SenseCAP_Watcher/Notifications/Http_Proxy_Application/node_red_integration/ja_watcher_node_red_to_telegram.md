---
description: WatcherとNode-REDからTelegramにメッセージを送信する
title: Watcher & Node-REDからTelegramへ
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /ja/watcher_node_red_to_telegram
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからTelegramへのクイックスタート

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## [Telegram](https://telegram.org)とは

Telegramは、ユーザーや開発者に幅広い機能を提供する人気のメッセージングアプリです。そのオープンAPIとプロトコルを活用することで、開発者はカスタムTelegramクライアントやボットを作成したり、Telegramのサービスを自分のアプリケーションに統合することができます。Telegramは、リアルタイム通信のための安全で信頼性の高いプラットフォームを提供し、さまざまなメディアタイプ、グループチャット、エンドツーエンド暗号化をサポートしています。そのクラウドベースのインフラストラクチャにより、デバイス間でのシームレスな同期が可能で、簡単にスケーラビリティを実現できます。開発者はTelegramの機能やツールを活用して、革新的なソリューションを構築し、プロジェクト内でのユーザー体験を向上させることができます。

## Telegram APIへのアクセス方法

### ステップ1. ボットトークンを取得する

1. まず、Telegramアプリをダウンロードし、**BotFather**ページにアクセスします。**/newbot**と送信し、指示に従って**ボットに名前を付けます**。

2. その後、ページ2にある**リンクをクリック**してボットのページ（ページ3）に移動し、**ボットに何かを送信**します。何かを送信しないと、チャットIDを取得できないので注意してください。

3. もう1つ重要なことは、ページ2でモザイクがかかっている**トークンを保存**することです。後で使用します。

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

### ステップ2. ボットのチャットIDを取得する

前のステップに従ってボットを作成すると、BotFatherからフィードバックが送られます。このフィードバックには**トークン**が含まれており、形式は次のようになります：**123456789:AoUJnnpoFlkkdfJbCXlo....**。次に、このトークンを使用して以下のリンクにアクセスし、**チャットID**を取得します。

```python
# トークンを使用してこのリンクにアクセス
https://api.telegram.org/bot{Token}/getUpdates

# 例
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

以下の画像のように、**チャットID**を見つけることができます。チャットIDは次のような形式になります：**7283028524**。**トークンとチャットIDを保存**してください。後で使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## Node-REDでTelegramモジュールを設定する

### ステップ3. Telegramモジュールをインストールする

以下の画像に従ってTelegramモジュールをインストールしてください。まだNode-REDをインストールしていない場合は、[こちらを参照してください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**Telegramを検索**し、3番目のモジュールをインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### ステップ4. モジュールを接続して設定する

**モジュールをドラッグ**してワークスペースに配置し、それらを接続してください。**OpenStream**の設定方法がわからない場合は、[こちらのリンク](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)を参照することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

次に、**function**モジュールを設定します。ダブルクリックして以下のコードを貼り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // あなたのTelegram Chat IDに変更してください

// 写真を送信するためのペイロードを設定
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// メッセージを送信するためのペイロードを設定
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// 写真を送信
node.send({ payload: photoPayload });

// メッセージを送信
node.send({ payload: messagePayload });
```

その後、次に**sender**モジュールを以下の画像に従って設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

ここに**ボット名、トークン、ChatId**を貼り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

もう一つの**sender**モジュールの設定も同様で、以下の画像に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## Telegramに情報を送信する

### ステップ5. Watcherでタスクを実行する

まず、以下の動画に従ってWatcherでタスクを実行してください。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ6. Telegramにメッセージと写真を送信する

タスクがトリガーされると、Watcherからメッセージを受信します。Node-REDとTelegramアプリの両方で確認できます。

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

WatcherをTelegramに正常に接続できたことをおめでとうございます！これで、開発の旅においてエキサイティングな可能性の世界が広がります。Telegramの強力な機能を活用した革新的なアプリケーションを探索し、作成する準備を整えましょう。未来は明るく、次に何を構築するのか楽しみにしています！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>