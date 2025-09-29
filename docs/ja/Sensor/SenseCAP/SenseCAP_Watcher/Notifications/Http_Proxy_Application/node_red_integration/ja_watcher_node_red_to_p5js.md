---
description: WatcherとNode-REDからp5jsにメッセージを送信
title: Watcher & Node-RED to P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /ja/watcher_node_red_to_p5js
last_update:
  date: 08/12/2024
  author: Allen
---

# Watcher & Node-RED To p5.js クイックスタート

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## [p5.js](https://p5js.org/)とは

p5.jsは、アーティストやデザイナーにとってコーディングをアクセシブルにするJavaScriptライブラリです。シンプルな構文を使用して、グラフィックス、アニメーション、インタラクティブなアプリケーションを簡単に作成する方法を提供します。キャンバスへの描画、ユーザー入力の処理、マルチメディアのサポートなどの機能により、p5.jsはクリエイティブコーディングプロジェクト、教育目的、デジタルアートに最適です。活発なコミュニティと豊富なリソースにより、あらゆるスキルレベルのユーザーが始めることができます。

## Node-REDの設定

### ステップ1. WatcherでタスクをRun

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ2. 設定

設定が必要なモジュールは4つあります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** WatcherからNode-REDにデータを取得します。[詳細はこちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

2. **function:** Watcherからのデータを処理します。functionモジュールを**ダブルクリック**して、以下のコードを貼り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** **サーバー**に<span id="post">POSTリクエスト</span>を送信し、その後p5.jsに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** 出力情報を確認し、デバッグを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### ステップ3.デプロイメント

設定が完了したら、**Deploy**することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## サーバーの構築

### ステップ4.サーバーコードのダウンロード

[このリンクをクリック](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js)してプロジェクト全体のコードをダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ5.サーバーの実行

サーバーを実行する前に、まずいくつかのパッケージをインストールする必要があります。 

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

パッケージを解凍してディレクトリに移動し、```node server.js```を実行してサーバーを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

これでサーバーがポート3000をリッスンしているので、[Node-RED](#post)からのメッセージがこのサーバーに送信され、その後p5.jsに転送されます。

## VScode設定

### ステップ6.拡張機能のインストール

2つの拡張機能をインストールする必要があります。**Live Server**と**p5.vscode**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### ステップ7.プロジェクトを開く

ダウンロードしたプロジェクトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

開くと、構造は以下の画像のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### ステップ7.プロジェクトの実行

**sketch.js**を開き、**Go Live**ボタンをクリックすると、デフォルトブラウザでプロジェクトがローカルで実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

効果は以下の画像のようになり、このサービスはポート5500で実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

人が検出されると、このように表示されます。

:::tip
Node-REDとserver.jsを実行し続ける必要があります
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

WatcherからP5.jsまでの旅を無事に完了おめでとうございます！貴重なスキルを身につけることができました。さらに多くのエキサイティングな機能があなたの探求を待っています。実験を続けて、これからの創造的な可能性をお楽しみください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>