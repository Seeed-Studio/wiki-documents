---
description: WatcherとNode-REDからIFTTTにメッセージを送信する方法
title: Watcher & Node-REDからIFTTTへ
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /ja/watcher_node_red_to_ifttt
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからIFTTTへのクイックスタート

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Part 1. [IFTTT (If This Then That)](https://ifttt.com)とは？

IFTTTは、複雑なプログラミングを必要とせずに、さまざまなアプリ、デバイス、サービス間で自動化や統合を作成できるウェブベースのサービスです。ユーザーは「アプレット」と呼ばれる簡単な条件文を定義し、特定のイベントに基づいてアクションをトリガーすることができます。IFTTTは使いやすいインターフェースと豊富な事前構築されたアプレットライブラリを提供しており、開発者が効率的に強力な自動化や統合を作成することを可能にします。

## Part 2. IFTTTの設定方法

### Step 1. Webhooksの設定

まず、IFTTTアプレットを**作成**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

次に、**トリガーを追加**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

**Webhooks**を検索し、そのサービスをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

Webhooksトリガーの簡単な紹介が表示されます。ここでは2番目のオプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

トリガーに名前を付けて作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### Step 2. Emailの設定

トリガーが発動した際にアクションを実行する必要があります。ここでは、実行したいアクションを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

トリガーが発動した際にGmailを使用してメールを送信します。もちろん、利用可能なサービスは無数にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Gmailアカウントを選択し、送信先のメールアドレスを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

**件名**と**本文**をカスタマイズするか、デフォルトのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

**Continue**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### Step 3. アプレットの完了

**アプレットタイトル**を編集するか、デフォルトのままにして**Finish**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

完了したら、このリンクを保存してください。後で使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## Part 3. Node-REDでIFTTTにアクセスする

### ステップ4. WatcherからNode-REDへのメッセージ送信

これらのモジュールをワークスペースにドラッグし、接続してください。WatcherからNode-REDにメッセージを送信する方法がまだわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### ステップ5. IFTTTに送信するメッセージの処理

**function**モジュールをダブルクリックし、**value1**や**value2**、場合によっては**value3**を取得するコードを記述します。これらの値がIFTTTに送信されます。

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

**http request**モジュールをダブルクリックし、**POST**メソッドを選択して、IFTTTからコピーした**URLを貼り付け**ます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

完了したら、**Deploy**を忘れずに行ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## Part 4. IFTTTを介してメッセージを送信する

### ステップ6. Watcherにタスクを送信する

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ7. IFTTTと電話でメッセージを確認する

**My Applets**を開き、以前作成したアプレットをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

ページを下にスクロールし、**View activity**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

さらにスクロールして、この2つのボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

すると、Watcherから送信されたメッセージとメールが表示されます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>IFTTTメッセージ</th>
      <th>メールメッセージ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

WatcherからIFTTTへのメールデモの完了、おめでとうございます！これはIFTTTとの旅の始まりに過ぎません。まだまだ多くのアプリケーションや統合があなたを待っています。引き続き探索し、学び、自動化を進めて、生活をより効率的で生産的にしてください。IFTTTを使えば可能性は無限大ですので、楽しんで実験を続けてください！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>