---
description: Edge Box RPi 200 Node-RED の使い方
title: Edge Box RPi 200 Node-RED の使い方
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[Node-RED](https://nodered.org/) は、ハードウェアデバイス、API、オンラインサービスをシームレスに接続するための多用途なプログラミングツールです。ブラウザベースのフローエディタにより、パレットからさまざまなノードを使用して異なるコンポーネントを簡単に接続できます。Node.js 上に構築された軽量なランタイムを備え、Raspberry Pi やその他の低コストハードウェアを効率的に活用できるため、エッジネットワークアプリケーションに最適です。

## 始める前に

このプロジェクトを始める前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Edge Box-200 は、Raspberry Pi OS がプリインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wiki をご覧ください。

## Edge Box に Node-RED をインストールする

- **ステップ 01**: Edge Box に SSH 接続する  
Windows を使用している場合は PowerShell を開き、プログラムを使用している場合は Terminal アプリを開き、次のように入力します：  
`ssh USERNAME@EDGEBOX_IP_ADDRESS`
例としては以下のようになります：

```sh
ssh pi@192.168.43.100
```
その後、Edge Box のオペレーティングシステムで設定した `{USER}` のパスワードを入力してください。

- **ステップ 02**: Node-RED をインストールする  

Node-RED チームは、オールインワンスクリプトを用意しており、以下のコマンドを EdgeBox のネイティブ Terminal アプリ（VNC ビューア経由）または上記の SSH シェルに入力するだけでインストールできます。

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```
インストールの最後に、いくつかの質問がプロンプトで表示されるので、それに答えてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 03**: Node-RED を設定する  
オールインワンスクリプトによるインストールが完了したら、以下のコマンドを使用して操作できます：

`node-red-start` を使用して Node-RED を開始する<br />
`node-red-stop` を使用して Node-RED を停止する<br />
`node-red-start` を使用して再度 Node-RED を開始する<br />
`node-red-log` を使用して最近のログ出力を表示する<br />
`sudo systemctl enable nodered.service` を使用して、起動時に Node-RED を自動起動するよう設定する<br />
`sudo systemctl disable nodered.service` を使用して、起動時の自動起動を無効にする<br />

- **ステップ 04**: Node-RED エディタにアクセスする  

お好みの Web ブラウザを開き、以下の URL を入力してください：

* オプション 1: Edge Box 上でローカルに Web ブラウザを実行している場合は、http://127.0.0.1:1880 を使用します（VNC 経由）。  
* オプション 2: ホストコンピュータでリモートに Web ブラウザを実行している場合は、http://EdgeBox_IP_ADDRESS:1880 を使用します。EdgeBox_IP_ADDRESS を EdgeBox の IP アドレスに置き換えてください。

## Node-RED に慣れる

以下の画像と同様の結果が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-RED エディターの概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

* **ノードパネル**: ユーザーがパレットからノードを閲覧し、フローに追加するためのエリア。
* **フローエディター**: ユーザーがノードを視覚的に接続してフローを作成するワークスペース。
* **設定パネル**: 選択したノードのプロパティや設定を構成するセクション。
* **設定ボタン**: Node-RED エディターのさまざまな設定や環境設定にアクセスして調整するためのボタン。
* **デプロイボタン**: フローを Node-RED ランタイムにデプロイし、アクティブで運用可能にするためのボタン。

### ノードのインストール

ノードをインストールする方法はいくつかあります。一つはコマンドラインを使用する方法で、もう一つは Node-RED エディターを使用する方法です。ここでは最も簡単な方法である Node-RED エディターを使用する方法を説明します。

- **ステップ 1**: 右上隅にある **三本線**アイコンの設定ボタンをクリックし、「パレットの管理」を選択します。

- **ステップ 2**: パレットタブで「インストール」タブをクリックします。

- **ステップ 3**: ノード検索バーでノードを検索し、「インストール」ボタンをクリックしてインストールします。

- **ステップ 4**: ドロップダウン警告ウィンドウから「インストール」ボタンをクリックしてインストールを確認します。

- **ステップ 5**: インストールが完了するまで待機し、「インストール」ボタンが「インストール済み」に変わるのを確認します。

- **ステップ 6**: サイドバーにインストールされたノードが表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

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