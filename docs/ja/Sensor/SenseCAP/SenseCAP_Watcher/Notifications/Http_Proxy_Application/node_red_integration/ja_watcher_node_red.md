---
description: Watcher から Node-RED へのメッセージ送信
title: Watcher to Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /ja/watcher_to_node_red
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher to Node-RED クイックスタート

<div class="table-center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) は、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で接続するためのプログラミングツールです。

ブラウザベースのエディタを提供しており、パレット内の幅広いノードを使用してフローを簡単に接続し、ワンクリックでランタイムにデプロイできます。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

ユーザーが **Watcher からさまざまな他の PaaS プラットフォームにデータを接続し、より深いデータ処理を行えるようにする** ために、例えば Watcher から IFTTT、Telegram、Twilio などへの接続を可能にします。私たちは **Watcher & Node-RED** に関する一連のチュートリアルを行います。

このチュートリアルはそのシリーズの最初のもので、Node-RED のインストールと使用方法、そして Watcher API を呼び出して Node-RED に接続する方法を説明します。

## パート 1. Node.js® のインストール

Node-RED をローカルにインストールするには、[サポートされている Node.js のバージョン](https://nodered.org/docs/faq/node-versions) が必要です。

公式の [Node.js ホームページ](https://nodejs.org/en/) から最新の 14.x LTS バージョンをダウンロードしてください。これがシステムに最適なバージョンを提供します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
ダウンロードした MSI ファイルを実行してください。Node.js のインストールにはローカル管理者権限が必要です。ローカル管理者でない場合、インストール時に管理者パスワードを求められます。インストール時はデフォルト設定を受け入れてください。インストールが完了したら、開いているコマンドプロンプトを閉じ、新しい環境変数が反映されるように再度開いてください。
:::

Node.js をインストールする際、プログラミング環境がインストールされていないコンピュータを使用している場合は、Node.js のインストール中に必要なツールをインストールするチェックボックスをオンにすることをお勧めします。これにより、多くの不要なトラブルを回避できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

Node-RED をインストールする最も簡単な方法は、Node のパッケージ管理ツールである **npm** を使用することです。ただし、npm 1.x で Node-RED をインストールすることは推奨されません。代わりに、最新の **npm 2.x** バージョンにアップグレードしてください。

:::note
**Windows**（Windows 10 以上が必要）では、**Win+R** ショートカットを使用してポップアップウィンドウに `cmd` と入力し、ターミナルを開いて次のコマンドを実行してください。

**MacOS** または **Linux** を使用している場合は、ターミナルで次のコマンドを実行し、非ルートユーザーの場合はコマンドの前に `sudo` を追加してください。
:::

```sh
npm install -g npm@2.x
```

インストールが完了したら、コマンドプロンプトを開き、次のコマンドを実行して Node.js と npm が正しくインストールされていることを確認してください。

```sh
node --version && npm --version
```

以下のような出力が返されるはずです：

```sh
> v16.17.0
> 2.15.12
```

## パート2. Node-REDのインストール

Node-REDをグローバルモジュールとしてインストールすると、システムパスに`node-red`コマンドが追加されます。以下のコマンドをプロンプトで実行してください：

```sh
npm install -g --unsafe-perm node-red
```

Node-REDがグローバルnpmパッケージとしてインストールされている場合、以下のコマンドを直接実行できます：

```sh
node-red
```

これにより、Node-REDのログがターミナルに出力されます。Node-REDを実行し続けるためには、ターミナルを開いたままにしておく必要があります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

これで、http://localhost:1880 でNode-REDエディタを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## パート3. Watcherでタスクを実行する

Watcherに何を手伝ってほしいかを伝えます。入力ボックスにいくつかのコマンドを入力するだけです。例えば、**「人を検知したら通知して」**や**「火事があれば教えて」**などです。詳細を知りたい場合は、[**こちらをクリックしてください**](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

Watcherが火事を検知すると、SenseCraftアプリを通じて通知されるほか、音声アラートやRGBライトの点滅で知らせてくれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## パート4. WatcherからNode-REDへのメッセージ送信

WatcherからNode-REDにメッセージを送信する方法として、SenseCAPノードとHTTPプロトコルの2つの方法を提供しています。お好きな方法を選択してください。

### 方法1: SenseCAPノードを使用する

#### ステップ1. Watcher APIキーを取得する

SenseCraftアプリを開き、以下の手順に従って**Organization ID**と**APIキー**を取得してください。これらは後で使用します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ページ1</th>
      <th>ページ2</th>
      <th>ページ3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>ページ4</th>
      <th>ページ5</th>
      <th>ページ6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### ステップ2. SenseCAPノードをインストールする

三本線のアイコンをクリックし、**Manage palette**オプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

**Install**オプションをクリックし、**sensecap**を検索してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

**OpenStream**モジュールと**debug**モジュールをワークスペースエリアにドラッグし、線で接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**OpenStream**モジュールをダブルクリックすると、サイドウィンドウが開きます。名前を付け、新しいアカウントを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

アカウントに名前を付け、先ほど取得した**Organization ID**と**APIキー**を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

**Done**ボタンをクリックして、プラットフォームからすべてのメッセージを取得するか、受信したい特定のメッセージを選択します。例えば、Watcherのメッセージだけを受信したい場合は、デバイスの**設定** -> **デバイス情報**で確認できる**EUIコード**や**ステップ6**のメッセージを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

**Deploy**ボタンをクリックします。このボタンはコンパイルと実行ボタンのようなものです。何か変更を加えた場合は、このボタンをクリックする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

その後、接続済みのサインが表示されれば、正常に動作していることを意味します。Watcherがメッセージを送信すると、Node-REDで受信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### 方法2: HTTPプロトコルを使用する

#### ステップ1. HTTPブロック機能を有効化する

タスクを実行する際に、**Detail Configs**ボタンをクリックし、**HTTP Push Notification**を有効化して**Go Setup**をクリックします。**コンピュータのIPアドレス**と**Node-REDのアクセスポート**（デフォルトポートは1880）を入力します。その後、**Update Now**をクリックしてタスクを実行します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ページ1</th>
      <th>ページ2</th>
      <th>ページ3</th>
      <th>ページ4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Step 2. Node-REDでの設定

まず、Node-REDにワークフローをインポートする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

以下のコードを貼り付けて、**Import**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// データを処理する部分\n// 例えば、アラーム情報を抽出する\n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

これで、Watcherが人を検知すると、自動的にNode-REDにメッセージを送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## Part 5. 画像のプレビュー

Watcherから画像をプレビューしたい場合は、Node-REDにライブラリをインストールする必要があります。

インストールしない場合、この部分は無視して構いません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

インストール後、**出力部分**でライブラリを見つけ、画像をプレビューしたい場所にドラッグして接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

このステップは非常に重要です。**画像プレビューノードをダブルクリック**し、このノードに**base64 URLを入力**してください。右上の**Doneボタン**と**Deployボタン**をクリックするのを忘れないでください。その後、Watcherからメッセージが再び届くと画像をプレビューできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

おめでとうございます！これでWatcherからNode-REDへのデータ送信が成功しました。次のWikiでは、Watcherから他のプラットフォームへのデータ送信方法を説明しますので、ぜひお試しください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>