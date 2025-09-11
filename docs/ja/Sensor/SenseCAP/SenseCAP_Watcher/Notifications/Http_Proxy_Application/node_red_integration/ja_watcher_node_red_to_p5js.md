---
description: Watcher & Node-RED から p5.js へのメッセージ送信
title: Watcher & Node-RED to P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /ja/watcher_node_red_to_p5js
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher & Node-RED から p5.js へのクイックスタート

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## [p5.js](https://p5js.org) とは

p5.js は、アーティストやデザイナーがコーディングを簡単に行えるようにする JavaScript ライブラリです。シンプルな構文を使用して、グラフィックス、アニメーション、インタラクティブなアプリケーションを作成するための簡単な方法を提供します。キャンバス上での描画、ユーザー入力の処理、マルチメディアのサポートなどの機能を備えた p5.js は、クリエイティブなコーディングプロジェクト、教育目的、デジタルアートに最適です。その活発なコミュニティと豊富なリソースにより、あらゆるスキルレベルのユーザーが簡単に始められます。

## Node-RED の設定

### ステップ 1. Watcher でタスクを実行

まず、以下のビデオに従って Watcher でタスクを実行する必要があります。詳細については、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ 2. 設定

以下の 4 つのモジュールを設定する必要があります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** Watcher から Node-RED にデータを取得します。[詳細はこちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

2. **function:** Watcher からのデータを処理します。**function モジュールをダブルクリック**し、以下のコードを貼り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** **サーバー**に <span id="post">POST リクエスト</span> を送信し、その後 p5.js に送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** 出力情報を確認し、デバッグします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### ステップ 3. デプロイ

設定が完了したら、**デプロイ**するのを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## サーバーを構築する

### ステップ 4. サーバーコードをダウンロードする

[こちらのリンクをクリックしてください](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) して、プロジェクトコード全体をダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. サーバーを実行する

サーバーを実行する前に、いくつかのパッケージをインストールする必要があります。

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

パッケージを解凍してその中に移動し、次に ```node server.js``` を実行してサーバーを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

現在、サーバーはポート 3000 をリッスンしています。そのため、[Node-RED](#post) からのメッセージはこのサーバーに送信され、その後 p5.js に送られます。

## VScode の設定

### ステップ 6. 拡張機能をインストールする

2 つの拡張機能をインストールする必要があります。それは **Live Server** と **p5.vscode** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### ステップ 7. プロジェクトを開く

先ほどダウンロードしたプロジェクトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

プロジェクトを開くと、以下の画像のような構造になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### ステップ 7. プロジェクトを実行する

**sketch.js** を開き、**Go Live** ボタンをクリックします。これにより、プロジェクトがデフォルトのブラウザでローカルで実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

以下の画像のような効果が得られます。このサービスはポート 5500 で実行されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

人を検知すると、以下のように表示されます。

:::tip
Node-RED と server.js を実行し続ける必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

Watcher から p5.js への旅を無事に完了したことをおめでとうございます！貴重なスキルを習得し、さらに多くのエキサイティングな機能があなたを待っています。引き続き実験を続け、創造的な可能性を楽しんでください！

## 技術サポートと製品に関するディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>