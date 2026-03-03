---
description: WatcherからNode-REDにメッセージを送信する
title: Watcher to Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /ja/watcher_to_node_red
sidebar_position: 1
last_update:
  date: 06/28/2024
  author: Allen
---

# Watcher to Node-RED クイックスタート

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/)は、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で接続するためのプログラミングツールです。

パレット内の幅広いノードを使用してフローを簡単に接続できるブラウザベースのエディタを提供し、ワンクリックでランタイムにデプロイできます。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

ユーザーが**WatcherからのデータをさまざまなPaaSプラットフォームに接続して、より詳細なデータ処理を行う**ことを容易にするため、例えばWatcherからIFTTT、Telegram、Twilioなどへの接続において、**Watcher & Node-RED**のチュートリアルシリーズを提供します。

このチュートリアルは、シリーズの最初のもので、Node-redのインストールと使用方法、およびWatcher APIを呼び出してNode-REDに接続する方法について説明します。

## パート1. Node.js®のインストール

Node-REDをローカルにインストールするには、[サポートされているバージョンのNode.js](https://nodered.org/docs/faq/node-versions)が必要です。

公式の[Node.jsホームページ](https://nodejs.org/en/)から最新の14.x LTSバージョンのNode.jsをダウンロードしてください。お使いのシステムに最適なバージョンが提供されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
ダウンロードしたMSIファイルを実行してください。Node.jsのインストールにはローカル管理者権限が必要です。ローカル管理者でない場合は、インストール時に管理者パスワードの入力を求められます。インストール時はデフォルトを受け入れてください。インストール完了後、開いているコマンドプロンプトを閉じて再度開き、新しい環境変数が確実に読み込まれるようにしてください。
:::
Node.jsをインストールする際、プログラミング環境がインストールされていないコンピュータを使用している場合は、Node.jsのインストール中に必要なツールをインストールするチェックボックスをオンにすることをお勧めします。これにより、多くの必要なトラブルを回避できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

Node-REDをインストールする最も簡単な方法は、Nodeのパッケージ管理ツールである**npm**を使用することです。ただし、npm 1.xでNode-REDをインストールすることはお勧めしません。代わりに最新の**npm 2.x**バージョンにアップグレードすることをお勧めします。

:::note
**Windows**（Windows 10以上が必要）では、**Win+R**ショートカットを使用し、ポップアップウィンドウで`cmd`と入力してターミナルを起動し、以下のコマンドを実行してください。

**MacOS**または**Linux**を使用している場合は、ターミナルで以下のコマンドを実行し、非rootユーザーの場合はコマンドの前に`sudo`を追加してください。
:::

```sh
npm install -g npm@2.x
```

インストールが完了したら、コマンドプロンプトを開いて以下のコマンドを実行し、Node.jsとnpmが正しくインストールされていることを確認してください。

```sh
node --version && npm --version
```

以下のような出力が返されるはずです：

```sh
> v16.17.0
> 2.15.12
```

## パート2. Node-REDのインストール

Node-REDをグローバルモジュールとしてインストールすると、システムパスに`node-red`コマンドが追加されます。コマンドプロンプトで以下を実行してください：

```sh
npm install -g --unsafe-perm node-red
```

Node-REDがグローバルnpmパッケージとしてインストールされている場合は、node-redコマンドを直接実行します：

```sh
node-red
```

これによりNode-REDのログがターミナルに出力されます。Node-REDを実行し続けるためには、ターミナルを開いたままにしておく必要があります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

これにより、http://localhost:1880 でNode-REDエディターを表示できるようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## パート3. Watcherでタスクを実行する

Watcherに何を手伝ってもらいたいかを伝えます。入力ボックスにいくつかのコマンドを入力するだけです。例えば、**人を検出したら通知して**や**火災があったら教えて**などです。詳細を知りたい場合は、[**こちらをご覧ください**](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

Watcherは火災を検出すると、SenseCraft APPを通じて通知し、音声アラートと点滅するRGBライトでお知らせします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## パート4. WatcherからNode-REDにメッセージを送信する

WatcherからNode-REDにメッセージを送信する方法として、SenseCAP NodeとHTTPプロトコルの2つの方法を提供しています。お好みの方法を選択できます。

### 方法1: SenseCAP nodeを使用する

#### ステップ1. Watcher APIキーを取得する

SenseCraft APPを開き、以下の手順に従って**Organization ID**と**API Key**を取得してください。これらは後で使用します。

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

#### ステップ 2. SenseCAP ノードをインストール

三本線のアイコンをクリックし、**Manage palette** オプションをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

**Install** オプションをクリックし、**sensecap** を入力して検索し、**install** します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

**OpenStream** と **debug** モジュールをワークスペースエリアにドラッグし、線で**接続**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

OpenStream モジュールを**ダブルクリック**すると、サイドウィンドウが開きます。名前を付けて新しいアカウントを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

アカウントに名前を付け、先ほど取得した **Organization ID** と **API key** を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

**Done** ボタンをクリックしてプラットフォームからすべてのメッセージを取得するか、受信したい特定のメッセージを選択できます。例えば、Watcher のメッセージのみを受信したい場合は、デバイスの **Setting** -> **About Device** または **Step 6** のメッセージで確認できる **EUI** コードを入力できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

**Deploy** ボタンをクリックします。このボタンはコンパイルと実行ボタンのようなものです。何かを変更した場合は、このボタンをクリックする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

その後、接続サインが表示され、期待通りに動作していることを意味します。Watcher がメッセージを送信すると、Node-RED でそれらを受信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### 方法 2: HTTP プロトコルを使用

#### ステップ 1. HTTP ブロック機能を開く

タスクを実行する際、**Detail Configs** ボタンをクリックし、**HTTP Push Notification** を開いて **Go Setup** をクリックします。**コンピューターの IP アドレス**と **Node-RED アクセスポート**（デフォルトポートは 1880）を入力する必要があります。その後、**Update Now** と **Run Task** をクリックします。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ページ 1</th>
      <th>ページ 2</th>
      <th>ページ 3</th>
      <th>ページ 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### ステップ 2. Node-RED での設定

まず、Node-RED にワークフローをインポートする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

以下のコードを貼り付けて、**Import** ボタンをクリックします。

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
        "func": "// here to process data\n// for example, extract alarm info \n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
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

これで、watcherが人を検出すると、自動的にNode-REDにメッセージを送信します～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## パート5. 画像のプレビュー

Watcherからの画像をプレビューしたい場合は、Node-REDにライブラリをインストールする必要があります。

不要な場合は、この部分をスキップできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

インストール後、**出力部分**で見つけることができます。画像をプレビューしたい場所にドラッグして接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

このステップは非常に重要です。**画像プレビューノードをダブルクリック**し、**このノードにbase64 urlを入力**する必要があります。右上角の**DoneとDeployボタンをクリック**することを忘れないでください。その後、Watcherメッセージが再び来たときに画像をプレビューできます～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

おめでとうございます！これでWatcherからNode-REDへのデータ送信が成功しました。次のwikiでは、Watcherから他のプラットフォームへのデータ送信方法をご案内しますので、ぜひお試しください～

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
