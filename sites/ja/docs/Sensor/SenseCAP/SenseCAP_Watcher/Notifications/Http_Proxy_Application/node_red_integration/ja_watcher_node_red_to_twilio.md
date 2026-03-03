---
description: WatcherとNode-REDからTwilioにメッセージを送信する
title: Watcher & Node-RED to Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /ja/watcher_node_red_to_twilio
last_update:
  date: 07/03/2024
  author: Allen
---

# Watcher To Twilio クイックスタート

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## パート1. [Twilio](https://www.twilio.com/)とは

Twilioは開発者向けの主要なクラウド通信プラットフォームです。アプリケーションに音声、ビデオ、メッセージング機能を統合するためのAPIセットを提供しています。Twilioを使用することで、開発者は音声通話、ビデオチャット、SMSメッセージングなどの強力な通信機能を簡単に構築できます。ユーザーフレンドリーなツールと信頼性の高いインフラストラクチャを提供し、開発者が革新的なアプリケーションを作成し、ユーザーエクスペリエンスを向上させるための最良の選択肢となっています。Twilioは従量課金制で動作し、開発者は使用する特定の通信サービスに対してのみ料金を支払うことができます。

## パート2. 登録方法

**ステップ1.**[こちらをクリックしてTwilioにアクセス](https://console.twilio.com/)してください。登録が完了すると、**SID**と**Token**が表示されます。さらに、メッセージを送信するために番号を購入する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**ステップ2.** このページに移動し、お好みの番号を選択して購入してください。新規ユーザーとして、Twilioは機能を試すために15ドルを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**ステップ3.** この番号の紹介が表示されます。確認してからBuyボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**ステップ4.** このページにはすべてのアクティブな番号が表示されます。先ほど購入した番号がここに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**ステップ5.** コンソールページに戻ると、**SID**、**Token**、**電話番号**が表示されます。これらが<span id="jump">後で</span>必要になるものです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## パート3. Node-REDでTwilioを設定する方法

WatcherからNode-REDにメッセージを送信する方法がまだわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

**ステップ1.** まず、Node-REDでTwilioアドオンをダウンロードする必要があります。**Manage palette**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**ステップ2.** twilioを検索し、最初のものをインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**ステップ3.** Twilioモジュールをワークスペースにドラッグし、ダブルクリックして、新しいTwilio設定を追加してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**ステップ4.** これらのプロパティを入力してください。**SID**、**From**、**Token**は[Twilioコンソール](#jump)から取得します。**Name**はこの設定の名前を意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**ステップ5.** これらのプロパティを入力してください。**Output**はSMSまたは電話通話のどちらを希望するかを意味し、**To**は送信先の電話番号を意味し、**Name**はこのモジュールの名前を意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**ステップ6.** その後、このページが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Part 4. Twilioにメッセージを送信する

### すべての結果を取得する

**ステップ 1.** Watcherでタスクを実行します。

まず最初に、以下の動画に従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 2.** sensecap **OpenStream**モジュールと**debug**モジュールをワークスペースにドラッグし、設定します。設定方法がわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。それらを接続し、右上角の**Deploy**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** **debugページ**と携帯電話の**Twilioメッセージ**の両方でメッセージを受信します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>debugページ</th>
      <th>Twilioメッセージ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### 特定の結果を取得する

**ステップ 1.** すべての結果を取得するのは多すぎると思い、特定の結果だけを取得したい場合は、**function モジュール**を中央にドラッグして接続する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2.** **function モジュール**をダブルクリックし、取得したいメッセージを指定するコードを記述します。**Done** をクリックして **Deploy** します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

特定のメッセージを1つ取得します。

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

複数のメッセージを取得したい場合は、以下のコードに従ってください。

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "Alert received at " + timestamp
};
return msg;
```

**ステップ 2.** Watcherでタスクを実行します。タスクの実行方法がわからない場合は、[こちらを参照してください。](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task)

**ステップ 3.** **デバッグページ**と**携帯電話のTwilioメッセージ**の両方でメッセージを受信します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>デバッグページ</th>
      <th>Twilioメッセージ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

WatcherとTwilioの接続が正常に完了しました！おめでとうございます！これで、この統合の力を解き放ち、シームレスな通信機能を活用した革新的なアプリケーションの構築を開始できます～

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
