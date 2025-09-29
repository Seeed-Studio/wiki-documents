---
description: reTerminal DM Getting Started with Node-Red
title: reTerminal DM Getting Started with Node-Red
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/04/2023
  author: Peter Pan
---
# reTerminal DM Node Redを始める

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-REDは、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で接続するためのプログラミングツールです。
> パレット内の幅広いノードを使用してフローを簡単に接続できるブラウザベースのエディタを提供し、ワンクリックでランタイムにデプロイできます。
>
> — nodered.org

reTerminal DMは、デジタルI/O、CANバス、RS485、RS232などの豊富な拡張性とハイブリッド接続性、およびWiFi、BLE、\*4G、\*LoRa®などの強力なワイヤレス通信機能を備えているため、Node-REDはこれらすべてを統括できる最高のローコードプログラミングツールの1つです。Node-RED Dashboardノードのおかげで、10.1インチ10点マルチタッチ高感度静電容量パネルと組み合わせて設定・活用し、現場でのヒューマンマシンインターフェース目的に使用できます。

> \*4Gおよび LoRa® モジュールは、reTerminal DMにデフォルトでは付属していません。関連するモジュールを適宜購入してください。

以下は、reTerminal DM上でNode-REDのセットアップ方法とNode-REDインターフェースに慣れるための入門ガイドです。

:::tip
- **Raspbian OS** ユーザーは: [Node-REDのインストール](#install-and-setting-up-node-red) へお進みください
- **Sensecraft Edge OS** ユーザーは: [Node-REDに慣れる](#getting-familiar-with-node-red) へお進みください。Sensecraft Edge OSにはNode-REDがプリインストールされています

:::

## Raspbian OS上でのNode-REDのインストールとセットアップ

[reTerminal DMにOSをインストール](/ja/reterminal-dm-flash-OS/)に従ってreTerminal DMに新しいオペレーティングシステムのセットアップが完了したら、以下の手順に従ってNode-REDをセットアップしてください。

### Node-REDのインストール

- **ステップ 1:** reTerminal DMへのアクセス

  - オプション 1: マウスとキーボードを直接接続

    reTerminal DM上で`Terminal`アプリを開いてください。

    reTerminal DMがインターネットに接続されていることを確認してください。

  - オプション 2: SSHを使用

    ホストコンピュータがネットワーク経由でreTerminal DMにアクセスでき、reTerminal DMがインターネットに接続されていることを確認してください

    **Windows上で:**

      **PowerShell**プログラムを開き、`ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`と入力してください。`{USERNAME}`と`{RETERMINALDM_IP_ADDRESS}`をあなたのセットアップに応じて置き換えてください：

      例えば、私の場合`{USERNAME}`は`pi`で`{RETERMINALDM_IP_ADDRESS}`は`192.168.43.100`です：

      ```sh
      ssh pi@192.168.43.100
      ```

      次に、reTerminal DMにセットアップしたオペレーティングシステムの`{USER}`のパスワードを入力してください

      例：Raspbian OSのデフォルトログイン認証情報は
    - ユーザー名: `pi`
    - パスワード: `raspberry`

    **Mac/Linux上で:**

      **Terminal**アプリを開き、`ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`と入力してください。`{USERNAME}`と`{RETERMINALDM_IP_ADDRESS}`をあなたのセットアップに応じて置き換えてください：

      例えば、私の場合`{USERNAME}`は`pi`で`{RETERMINALDM_IP_ADDRESS}`は`192.168.43.100`です：

      ```sh
      ssh pi@192.168.43.100
      ```

      次に、reTerminal DMにセットアップしたオペレーティングシステムの`{USER}`のパスワードを入力してください

      例：Raspbian OSのデフォルトログイン認証情報は
    - ユーザー名: `pi`
    - パスワード: `raspberry`

- **ステップ 2:** Node-REDのインストール:

Node-REDチームは[オールインワン](https://nodered.org/docs/getting-started/raspberrypi)スクリプトを用意してくれており、reTerminal DMのネイティブ`Terminal`アプリまたは上記のステップの`SSHシェル`で以下のコマンドを入力するだけです。

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

Raspberry PiにNode-REDをインストールする方法は多数あります。[公式ガイド](https://nodered.org/docs/getting-started/)を参照することもできますが、ここではreTerminal DMにNode-REDをインストールする[オールインワン](https://nodered.org/docs/getting-started/raspberrypi)ガイドを紹介します。
:::

インストールプロセスが完了すると、以下の画像に示すように`ls -all`コマンドで`.node-red`フォルダが表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Node-REDのセットアップ

Node-REDをインストールしたら、以下の手順に従ってセットアップし、Node-RED環境を準備してください。

- **ステップ1:** Node-REDを開始：
  
    [オールインワン](https://nodered.org/docs/getting-started/raspberrypi)スクリプトでのインストールが完了したら、以下のコマンドを適宜使用できます：
  
    `node-red-stop`を使用してNode-REDを停止<br />
    `node-red-start`を使用してNode-REDを再開始<br />
    `node-red-log`を使用して最近のログ出力を表示<br />
    `sudo systemctl enable nodered.service`を使用して起動時にNode-REDを自動開始<br />
    `sudo systemctl disable nodered.service`を使用して起動時の自動開始を無効化<br />

    Node-REDエディタを開始するには、reTerminal DMの`Terminal`アプリで以下のコマンドを実行します：

    ```sh
    node-red-start
    ```

    node-REDを自動開始サービスとして有効にしたい場合は、`sudo systemctl enable nodered.service`コマンドを使用でき、以下に示すような出力が表示されるはずです。

    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

- **ステップ2:** Node-REDエディタにアクセス：

    お気に入りのWebブラウザを開き、以下に説明するURLを入力してください：
  - オプション1：WebブラウザがreTerminal DM上でローカルに実行されている場合は、`http://127.0.0.1:1880`を使用。
  - オプション2：Webブラウザがホストコンピュータ上でリモートに実行されている場合は、`http://{RETERMINALDM_IP_ADDRESS}:1880`を使用。`{RETERMINALDM_IP_ADDRESS}`をreTerminal DMのIPアドレスに置き換えてください。

## Node-REDに慣れる

以下の画像のような結果が表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Node-REDエディタの概要

Node-REDエディタに慣れてください。

Node-REDエディタの中核要素は以下の通りです：

- ノードパネル
- フローエディタ
- 設定パネル
- 設定ボタン
- デプロイボタン

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### ノードのインストール

Node-REDノードモジュールをインストールする方法は2つあります。SenseCraft EDGE OSを使用している場合は、[Node-REDエディタ方式](#option-2-node-red-editor)を使用してください：

#### オプション1：コマンドライン

ステップ1：Node-REDフォルダに移動してください

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

ステップ2：Modbusノードをインストール

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

ステップ 3: ノードがインストールされたら、以下のコマンドでNode-REDサービスを再起動してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### オプション 2: Node-RED エディター

ステップ 1: 右上角にある「三本線」アイコンの `Settings` ボタンをクリックし、`Manage palette` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

ステップ 2: パレットタブで `Install` タブをクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

ステップ 3: ノード検索バーでノードを検索し、`install` ボタンをクリックしてインストールします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

ステップ 4: ドロップダウン警告ウィンドウから `Install` ボタンをクリックしてインストールを確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

ステップ 5: インストールが完了するまで待ち、`install` ボタンが `installed` に変わることを確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

ステップ 6: サイドバーに Modbus ノードが表示されることを確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# reTerminal DM サポート対象ノード

- [reTerminal DM RS485 ポートと Node-RED](/ja/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTT と Node-RED](/ja/reTerminal-DM-Node-Red-mqtt)
- [reTerminal DM CAN BUS と Node-RED](/ja/reTerminal-DM-Node-Red-canbus)
  
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
