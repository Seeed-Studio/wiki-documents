---
description: WatcherとNode-REDからIFTTTにメッセージを送信
title: Watcher & Node-RED to IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /ja/watcher_node_red_to_ifttt
last_update:
  date: 06/28/2024
  author: Allen
---

# Watcher To IFTTT クイックスタート

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## パート1. [IFTTT (If This Then That)](https://ifttt.com/)とは

IFTTTは、開発者が複雑なプログラミングなしに様々なアプリ、デバイス、サービス間の自動化と統合を作成できるWebベースのサービスです。ユーザーは特定のイベントに基づいてアクションをトリガーする「アプレット」と呼ばれるシンプルな条件文を定義できます。ユーザーフレンドリーなインターフェースと豊富な事前構築されたアプレットライブラリを提供し、開発者が効率的に強力な自動化と統合を作成することを可能にします。

## パート2. IFTTTの設定方法

### ステップ1. Webhooksの設定

まず、IFTTTアプレットを**作成**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

トリガーを**追加**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

**Webhooks**を検索してそのサービスをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

Webhooksトリガーの簡単な紹介が表示され、2番目のオプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

トリガーに名前を付けて作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### ステップ2. メールの設定

トリガーが発火したときに、アクションを実行する必要があります。ここで実行したいアクションを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

トリガーが発火したときにGmail経由でメールを送信します。もちろん、使用できるサービスは数百万種類あります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Gmailアカウントを選択し、送信先のメールアドレスを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

**件名**と**本文**をお好みでカスタマイズするか、デフォルトのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

**Continue**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### ステップ3. アプレットの完成

**アプレットタイトル**を編集するか、デフォルトのままにして、**Finish**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

完了すると、後で使用するためこのリンクを保存できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## パート3. Node-REDでIFTTTにアクセス

### ステップ4. WatcherメッセージをNode-REDに送信

これらのモジュールをワークスペースにドラッグして、それらを接続します。WatcherからNode-REDにメッセージを送信する方法がまだわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### ステップ5. IFTTTに送信したいメッセージを処理

**function**モジュールをダブルクリックして、**value1**と**value2**、そして**value3**を取得するコードを書きます。これらの値はIFTTTに送信されます。

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

完了したら、**Deploy**することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## パート4. IFTTTを介してメッセージを送信

### ステップ6. Watcherにタスクを送信

まず最初に、以下の動画に従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ7. IFTTTと電話でメッセージを確認

**My Applets**を開き、以前に作成したアプレットをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

ページを下にスクロールして**View activity**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

さらに下にスクロールして、この2つのボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

そうすると、Watcherから送信されたメッセージとメールを確認できます。

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

WatcherからIFTTTメールデモの完了おめでとうございます！これはIFTTTでの旅の始まりに過ぎません。発見を待つ無数のアプリケーションと統合があります。探索、学習、自動化を続けて、あなたの生活をより効率的で生産的にしましょう。IFTTTでは可能性は無限大ですので、楽しんで実験してください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
