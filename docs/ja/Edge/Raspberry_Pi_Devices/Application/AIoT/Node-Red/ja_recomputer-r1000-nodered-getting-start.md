---
description: Node-RED を使用して reComputer-R1000 Raspberry Pi 上で IIoT ソリューションを効率的に管理および自動化します。さまざまな産業プロトコルからデータをシームレスに統合し、リアルタイムで可視化し、この強力で使いやすいプラットフォームで運用効率を向上させます。
title: reComputer-R1000 Node-RED の使い方
keywords:
  - Edge Controller
  - reComputer
  - IoT
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_getting_started_node_red
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[Node-RED](https://nodered.org/) は、ハードウェアデバイス、API、およびオンラインサービスをシームレスに接続するために設計された多用途なプログラミングツールです。そのブラウザベースのフローエディタは、パレットからさまざまなノードを使用して異なるコンポーネントを接続するプロセスを簡素化します。Node.js 上に構築された軽量ランタイムにより、Raspberry Pi やその他の低コストハードウェアを効率的に利用でき、エッジネットワークアプリケーションに最適です。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

reComputer-R1000 は、事前に Raspberry Pi OS がインストールされた状態でお手元に届きます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/) Wiki をお読みください。

## reComputer-R1000 に Node-RED をインストールする

- **ステップ 01**: reComputer-R1000 に SSH 接続する  
Windows を使用している場合は PowerShell を開き、Mac や Linux を使用している場合は Terminal アプリを開いて、以下のコマンドを入力してください。例として：

```sh
ssh pi@192.168.43.100
```

その後、reComputer のオペレーティングシステムで設定した `{USER}` のパスワードを入力してください。

- **ステップ 02**: Node-RED をインストールする  

Node-RED チームは、すべてを含むスクリプトを準備してくれています。以下のコマンドを reComputer のネイティブ Terminal アプリ（VNC ビューア経由）または上記のステップで使用した SSH シェルに入力してください。

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

インストールの最後に、プロンプトからいくつかの質問がされるので、それに答えてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 03**: Node-RED のセットアップ  
すべてを含むスクリプトによるインストールが完了したら、以下のコマンドを使用できます：

`node-red-start` を使用して Node-RED を開始する<br />
`node-red-stop` を使用して Node-RED を停止する<br />
`node-red-start` を使用して Node-RED を再度開始する<br />
`node-red-log` を使用して最近のログ出力を表示する<br />
`sudo systemctl enable nodered.service` を使用して Node-RED を毎回の起動時に自動開始する<br />
`sudo systemctl disable nodered.service` を使用して起動時の自動開始を無効にする<br />

- **ステップ 04**: Node-RED エディタにアクセスする  

お気に入りの Web ブラウザを開き、以下の URL を入力してください：

* オプション 1: `http://127.0.0.1:1880` を使用する場合、Web ブラウザが VNC 経由で reComputer 上でローカルに実行されている場合。
* オプション 2: `http://{reComputer_IP_ADDRESS}:1880` を使用する場合、Web ブラウザがホストコンピュータ上でリモートに実行されている場合。`{reComputer_IP_ADDRESS}` を reComputer の IP アドレスに置き換えてください。

## Node-RED に慣れる

以下の画像のような結果が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-RED エディターの概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

* **ノードパネル**: ユーザーがパレットからノードを閲覧し、フローに追加するためのエリア。
* **フローエディター**: ユーザーがノードを視覚的に接続してフローを作成するための作業スペース。
* **設定パネル**: 選択したノードのプロパティや設定を構成するためのセクション。
* **設定ボタン**: Node-RED エディターのさまざまな設定や環境設定にアクセスして調整するためのボタン。
* **デプロイボタン**: フローを Node-RED ランタイムにデプロイし、アクティブで運用可能にするためのボタン。

### ノードのインストール

ノードをインストールする方法はいくつかあります。コマンドラインを使用する方法と、Node-RED エディターを使用する方法です。ここでは、最も簡単な方法である Node-RED エディターを使用する方法を説明します。

- **ステップ 1**: 右上隅にある **三本線** アイコンの設定ボタンをクリックし、「パレットの管理」を選択します。

- **ステップ 2**: パレットタブで「インストール」タブをクリックします。

- **ステップ 3**: ノード検索バーでノードを検索し、「インストール」ボタンをクリックしてインストールします。

- **ステップ 4**: ドロップダウン警告ウィンドウから「インストール」ボタンをクリックしてインストールを確認します。

- **ステップ 5**: インストールが完了するまで待機し、「インストール」ボタンが「インストール済み」に変わるのを確認します。

- **ステップ 6**: サイドバーにインストールされたノードが表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>