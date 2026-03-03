---
description: Edge Box RPi 200 Getting Started with Node Red 
title: Edge Box RPi 200 Getting Started with Node Red 
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 05/14/2024
  author: Kasun Thushara
---
## はじめに

[Node-RED](https://nodered.org/) は、ハードウェアデバイス、API、オンラインサービスをシームレスに接続するために設計された多用途プログラミングツールです。ブラウザベースのフローエディタは、パレットからの様々なノードを使用して異なるコンポーネントを配線するプロセスを簡素化します。Node.js上に構築された軽量ランタイムにより、Raspberry Piやその他の低コストハードウェアを効率的に活用し、エッジネットワークアプリケーションに最適です。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

Edge Box-200は、Raspberry Pi OSがプリインストールされた状態でお手元に届きます。このデバイスを初回起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wikiをお読みください。

## Edge boxにNode Redをインストール

- **ステップ01**: EdgeboxにSSH接続
Windowsを使用している場合はPowerShellを開き、プログラムを使用している場合はTerminal APPを開いて、ssh `{USERNAME}@{EDGEBOX_IP_ADDRESS}`と入力してください。例として

```sh
ssh pi@192.168.43.100
```

次に、Edge Boxに設定したオペレーティングシステムの`{USER}`のパスワードを入力してください。

- **ステップ02**: Node-REDのインストール

Node-REDチームは、All-IN-ONEスクリプトを用意してくれており、上記のステップからEdgeBoxネイティブターミナルアプリ（VNCビューワー経由）またはSSHシェルで以下のコマンドを入力するだけです。

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

インストールの最後に、プロンプトからいくつかの質問が表示されるので、それらに答える必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 03**: Node-Redのセットアップ
All-IN-ONEスクリプトでのインストールが完了した後、以下のコマンドを適宜使用できます：

`node-red-start`を使用してNode-REDを開始<br />
`node-red-stop`を使用してNode-REDを停止<br />
`node-red-start`を使用してNode-REDを再開始<br />
`node-red-log`を使用して最近のログ出力を表示<br />
`sudo systemctl enable nodered.service`を使用して起動時にNode-REDを自動開始<br />
`sudo systemctl disable nodered.service`を使用して起動時の自動開始を無効化<br />

- **ステップ 04**: Node-REDエディターへのアクセス

お気に入りのWebブラウザを開いて、以下に説明するURLを入力してください：

- オプション 1: http://127.0.0.1:1880 を使用（WebブラウザがVNC経由でEdgeboxでローカルに実行されている場合）

- オプション 2: http://\{EdgeBox_IP_ADDRESS\}:1880を使用（Webブラウザがホストコンピューターでリモートに実行されている場合、\{EdgeBox_IP_ADDRESS\}をEdgeBoxのIPアドレスに置き換えてください）

## Node-REDに慣れる

以下の画像と同様の結果が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-REDエディターの概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **ノードパネル**: ユーザーがパレットからノードを参照・選択してフローに追加できるエリア
- **フローエディター**: ユーザーがノードを視覚的に接続してフローを作成するワークスペース
- **設定パネル**: ユーザーが選択したノードのプロパティと設定を構成できるセクション
- **設定ボタン**: ユーザーがNode-REDエディターの様々な設定と環境設定にアクセス・調整できる
- **デプロイボタン**: ユーザーがフローをNode-REDランタイムにデプロイして、アクティブで動作可能にできる

### ノードのインストール

いくつかのオプションがあります：一つはコマンドラインを使用する方法、もう一つはNode-REDエディターを使用する方法です。ここでは、最も簡単な方法であるNode-REDエディターを使用する方法を説明します。

- **ステップ 1**: 右上角にある**三本線**アイコンの設定ボタンをクリックし、「パレットの管理」を選択

- **ステップ 2**: パレットタブで「インストール」タブをクリック

- **ステップ 3**: ノード検索バーでノードを検索し、インストールボタンをクリックしてインストール

- **ステップ 4**: ドロップダウン警告ウィンドウから**インストール**ボタンをクリックしてインストールを確認

- **ステップ 5**: インストールが完了するまで待機し、インストールボタンがインストール済みに変わることを確認

- **ステップ 6**: サイドバーにインストールされたノードが表示されることを確認

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
