---
description: WatcherとNode-REDからTwilioにメッセージを送信する
title: Watcher & Node-RED to Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /ja/watcher_node_red_to_twilio
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからTwilioへのクイックスタート

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Part 1. [Twilio](https://www.twilio.com/)とは

Twilioは、開発者向けの主要なクラウド通信プラットフォームです。音声、ビデオ、メッセージング機能をアプリケーションに統合するためのAPIセットを提供しています。Twilioを使用すると、開発者は音声通話、ビデオチャット、SMSメッセージングなどの強力な通信機能を簡単に構築できます。使いやすいツールと信頼性の高いインフラを提供しており、革新的なアプリケーションを作成し、ユーザー体験を向上させるための開発者の第一選択肢となっています。Twilioは従量課金モデルで運営されており、開発者は使用した特定の通信サービスに対してのみ支払うことができます。

## Part 2. 登録方法

**Step 1.** [こちらをクリックしてTwilioに移動](https://console.twilio.com/)してください。登録が完了すると、**SID**と**Token**が表示されます。また、メッセージを送信するための番号を購入する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** このページに移動し、好きな番号を選択して購入してください。新規ユーザーには、Twilioが機能を試すための15ドルを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** この番号の概要が表示されますので、確認した後に購入ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** このページにはすべてのアクティブな番号が表示されます。先ほど購入した番号がここに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**Step 5.** コンソールページに戻ると、**SID**、**Token**、**電話番号**が表示されます。これらは後で必要になります<span id="jump">。</span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. Node-REDでTwilioを設定する方法

WatcherからNode-REDにメッセージを送信する方法がまだ分からない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

**Step 1.** まず、Node-REDでTwilioアドオンをダウンロードする必要があります。**Manage palette**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**Step 2.** Twilioを検索し、最初のものをインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** Twilioモジュールをワークスペースにドラッグし、ダブルクリックして新しいTwilio設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**Step 4.** 以下のプロパティを入力してください。**SID**、**From**、**Token**は[Twilioコンソール](#jump)から取得します。**Name**はこの設定の名前を意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**Step 5.** 以下のプロパティを入力してください。**Output**はSMSまたは電話を意味し、**To**は送信先の電話番号を指定します。**Name**はこのモジュールの名前を意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**Step 6.** その後、このページが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Part 4. Twilioにメッセージを送信する

### 全ての結果を取得する

**ステップ 1.** Watcherでタスクを実行する。

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 2.** SenseCAPの**OpenStream**モジュールと**debug**モジュールをワークスペースにドラッグし、それらを設定します。設定方法がわからない場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。それらを接続し、右上の**Deploy**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** **debugページ**と**Twilioメッセージ**の両方でメッセージを受信します。

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

**ステップ 1.** 全ての結果を取得するのが多すぎると感じ、特定の結果だけを取得したい場合は、**functionモジュール**を中央にドラッグして接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2.** **functionモジュール**をダブルクリックし、取得したいメッセージを指定するコードを記述します。**Done**をクリックし、**Deploy**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

特定の1つのメッセージを取得する場合：

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

複数のメッセージを取得したい場合は、以下のコードを使用してください。

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "アラート受信時刻: " + timestamp
};
return msg;
```

**ステップ 2.** Watcherでタスクを実行します。タスクの実行方法がわからない場合は[こちらを参照してください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task)。

**ステップ 3.** **debugページ**と**Twilioメッセージ**の両方でメッセージを受信します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>debugページ</th>
      <th>Twilioメッセージ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

WatcherとTwilioの接続に成功しました！この統合の力を活用し、シームレスな通信機能を活かした革新的なアプリケーションの構築を始めましょう～

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>