---
description: reTerminal DM Node-Red の使い方ガイド
title: reTerminal DM Node-Red の使い方ガイド
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM Node-Red の使い方ガイド

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED は、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で接続するためのプログラミングツールです。
> ブラウザベースのエディタを提供しており、パレット内の幅広いノードを使用してフローを簡単に接続し、ワンクリックでランタイムにデプロイできます。
>
> — nodered.org

reTerminal DM は、デジタル I/O、CAN バス、RS485、RS232 などの豊富な拡張性とハイブリッド接続性、WiFi、BLE、\*4G、\*LoRa® などの強力な無線通信機能を備えています。Node-RED は、それらすべてを統合できる最高のローコードプログラミングツールの 1 つです。また、Node-RED の Dashboard ノードを使用することで、10.1 インチの 10 点マルチタッチ高感度静電容量パネルを現場のヒューマンマシンインターフェースとして構成および利用することができます。

> \*4G および LoRa® モジュールは、reTerminal DM にデフォルトでは付属していません。関連するモジュールを別途購入してください。

以下は、Node-RED をセットアップし、reTerminal DM 上で Node-RED インターフェースに慣れるためのガイドです。

:::tip
* **Raspbian OS** ユーザーは次のセクションに進んでください: [Node-RED のインストール](#install-and-setting-up-node-red)
* **Sensecraft Edge OS** ユーザーは次のセクションに進んでください: [Node-RED に慣れる](#getting-familiar-with-node-red)。Sensecraft Edge OS には Node-RED がプリインストールされています。
:::

## Raspbian OS に Node-RED をインストールして設定する

reTerminal DM に新しいオペレーティングシステムをセットアップした後（[reTerminal DM に OS をインストールする](/ja/reterminal-dm-flash-OS/) を参照）、以下の手順に従って Node-RED をセットアップしてください。

### Node-RED のインストール

* **STEP 1:** reTerminal DM にアクセスする

  * オプション 1: マウスとキーボードを直接接続する

    reTerminal DM 上で `Terminal` アプリを開いてください。

    reTerminal DM がインターネットに接続されていることを確認してください。

  * オプション 2: SSH を使用する

    ホストコンピュータがネットワーク経由で reTerminal DM にアクセスでき、reTerminal DM がインターネットに接続されていることを確認してください。

    **Windows の場合:**

      **PowerShell** プログラムを開き、次のコマンドを入力してください: `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`。`{USERNAME}` と `{RETERMINALDM_IP_ADDRESS}` は設定に応じて置き換えてください。
            
      例: 私の場合、`{USERNAME}` は `pi`、`{RETERMINALDM_IP_ADDRESS}` は `192.168.43.100` です。

      ```sh
      ssh pi@192.168.43.100
      ```
      
      次に、reTerminal DM にセットアップしたオペレーティングシステムの `{USER}` のパスワードを入力してください。
      
      例: Raspbian OS のデフォルトのログイン資格情報は以下の通りです。
       * ユーザー名: `pi`
       * パスワード: `raspberry`

    **Mac/Linux の場合:**

      **Terminal** アプリを開き、次のコマンドを入力してください: `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`。`{USERNAME}` と `{RETERMINALDM_IP_ADDRESS}` は設定に応じて置き換えてください。
      
      例: 私の場合、`{USERNAME}` は `pi`、`{RETERMINALDM_IP_ADDRESS}` は `192.168.43.100` です。

      ```sh
      ssh pi@192.168.43.100
      ```

      次に、reTerminal DM にセットアップしたオペレーティングシステムの `{USER}` のパスワードを入力してください。
      
      例: Raspbian OS のデフォルトのログイン資格情報は以下の通りです。
       * ユーザー名: `pi`
       * パスワード: `raspberry`

* **STEP 2:** Node-RED をインストールする

Node-RED チームは [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) スクリプトを用意しており、以下のコマンドを reTerminal DM のネイティブ `Terminal` アプリまたは上記の手順で開いた `SSH Shell` に入力するだけでインストールできます。

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

Raspberry Pi に Node-RED をインストールする方法は多数あります。詳細は [公式ガイド](https://nodered.org/docs/getting-started/) を参照してください。ここでは、reTerminal DM に Node-RED をインストールするための [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) ガイドを紹介します。
:::

インストールプロセスが完了すると、以下の画像のように `ls -all` コマンドで `.node-red` フォルダが表示されるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Node-RED の設定

Node-RED をインストールしたら、以下の手順に従って Node-RED 環境を設定し準備してください。

* **STEP 1:** Node-RED を起動する
  
    [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) スクリプトを使用してインストールが完了した後、以下のコマンドを使用できます。
  
    `node-red-stop` を使用して Node-RED を停止<br />
    `node-red-start` を使用して Node-RED を再起動<br />
    `node-red-log` を使用して最近のログ出力を表示<br />
    `sudo systemctl enable nodered.service` を使用して起動時に Node-RED を自動起動<br />
    `sudo systemctl disable nodered.service` を使用して起動時の自動起動を無効化<br />

    Node-RED エディタを起動するには、reTerminal DM の `Terminal` アプリで以下のコマンドを実行してください。
    
    ```sh
    node-red-start
    ```
    Node-RED を自動起動サービスとして有効にしたい場合は、`sudo systemctl enable nodered.service` コマンドを使用してください。以下のような出力が表示されるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

* **STEP 2:** Node-REDエディタにアクセスする:

    お気に入りのWebブラウザを開き、以下のURLを入力してください:
    * オプション1: WebブラウザがreTerminal DM上でローカルに実行されている場合は、`http://127.0.0.1:1880`を使用してください。
    * オプション2: Webブラウザがホストコンピュータ上でリモートに実行されている場合は、`http://{RETERMINALDM_IP_ADDRESS}:1880`を使用してください。`{RETERMINALDM_IP_ADDRESS}`をreTerminal DMのIPアドレスに置き換えてください。

## Node-REDの基本操作

以下の画像のような画面が表示されるはずです:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Node-REDエディタの概要

Node-REDエディタに慣れてください。

Node-REDエディタの主要な要素は以下の通りです:

* ノードパネル
* フローエディタ
* 設定パネル
* 設定ボタン
* デプロイボタン

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### ノードのインストール

Node-REDノードモジュールをインストールする方法は2つあります。SenseCraft EDGE OSを使用している場合は、[Node-REDエディタの方法](#option-2-node-red-editor)を使用してください:

#### オプション1: コマンドライン

STEP 1: Node-REDフォルダに移動してください

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

STEP 2: Modbusノードをインストールする

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: ノードがインストールされたら、Node-REDサービスを再起動してください:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### オプション2: Node-REDエディタ

STEP 1: 右上隅にある「三本線」アイコンの`設定`ボタンをクリックし、`パレットの管理`を選択してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: パレットタブで`インストール`タブをクリックしてください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: ノード検索バーでノードを検索し、`インストール`ボタンをクリックしてインストールしてください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: ドロップダウン警告ウィンドウから`インストール`ボタンをクリックしてインストールを確認してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: インストールが完了するまで待機し、`インストール`ボタンが`インストール済み`に変わるのを確認してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: サイドバーにModbusノードが表示されるはずです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# reTerminal DM対応ノード

* [reTerminal DM RS485ポートとNode-RED](/ja/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTTとNode-RED](/ja/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUSとNode-RED](/ja/reTerminal-DM-Node-Red-canbus)
  
## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>