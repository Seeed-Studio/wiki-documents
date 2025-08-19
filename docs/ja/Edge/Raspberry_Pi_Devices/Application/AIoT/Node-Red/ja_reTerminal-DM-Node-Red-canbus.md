---
description: reTerminal DM CANBUSをNode-REDで使用する
title: reTerminal DM CANBUSをNode-REDで使用する
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Node-Red-canbus
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM CAN BUSをNode-REDで使用する

## CAN BUSについての簡単な情報

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

CANバス（Controller Area Networkバス）は、車両や産業システム内の複数の電子制御ユニット（ECU）を接続するために使用されるネットワークの一種です。1980年代にBoschによって開発され、車両やその他のアプリケーションにおけるシリアル通信の国際標準（ISO 11898）となりました。

CANバスはECU間での高速データ交換を可能にし、情報を共有し、活動を調整することができます。2本のワイヤーシステムを使用し、1本はデータ送信用、もう1本はデータ受信用です。また、複数のノードをサポートしており、多くのデバイスが相互に通信する必要がある複雑なシステムに最適です。

CANバス技術は、自動車産業でエンジン制御、トランスミッション制御、ABS（アンチロックブレーキシステム）、エアバッグ制御など、さまざまな用途で広く使用されています。また、産業オートメーション、医療機器、航空宇宙など、デバイス間の信頼性が高く効率的な通信が必要な他の産業でも使用されています。

CANバスには、高い信頼性、低コスト、過酷な環境での動作能力など、多くの利点があります。設置と保守が容易で、電磁干渉に対して非常に強い耐性を持っています。これらの特徴により、信頼性が高く効率的な通信が必要なさまざまなアプリケーションに最適な選択肢となっています。

## reTerminal DMでのCAN BUSノードの使用開始

Node-REDでCANバスを使用するには、reTerminal DMのCAN BUSポートに接続するCANバスインターフェースデバイスと、ネットワーク上でメッセージを送受信できるNode-RED CANバスノードが必要です。このチュートリアルでは、`node-red-contrib-socketcan`ノードを一緒に探求します。Node-REDにCANバスノードをインストールしたら、CANバスネットワークからデータを読み取り、それを処理し、他のシステムやデバイスに送信するフローを構築できます。例えば、車両のCANバスからエンジンのRPMを読み取り、データを処理して燃料消費量を計算し、その結果をダッシュボードに表示することができます。

詳細は[node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan)ページをご覧ください。

Senscraft Edge OSを使用している場合は、Socketcanノードのインストール手順をスキップできます。

### 前提条件

#### ハードウェア

* 1 x reTerminal DM
* 1 x ホストコンピュータ
* 1 x [USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### ハードウェアの準備

以下のようにハードウェアを接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### ソフトウェア

:::note
ホストコンピュータは、以下のセットアップ手順を実行するためにreTerminal DMとインターネット接続が可能である必要があります。
:::

##### Socketcanノードのインストール

このWikiチュートリアルでは、`node-red-contrib-socketcan`ノードを使用します。そのため、[ノードのインストール](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)ガイドに従って`node-red-contrib-socketcan`をインストールしてください。

##### reTerminal DMでのCAN BUSの設定

:::note
reTerminal DMの`Terminal`アプリに直接アクセスするか、SSH経由でreTerminal DMにアクセスできると仮定します。そうでない場合は、[こちら](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red)の最初のステップに従って、操作方法を確認してください。
:::

以下のコマンドを1つずつ入力して、reTerminal DMのCAN BUSポートで仮想CANデバイス`can0`を有効にしてください。

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

上記のコマンドを入力した後、以下のように`ifconfig`コマンドで`can0`デバイスが表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### ホストコンピュータのUSB-CANソフトウェアとドライバの設定

:::note
同じ[USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用している場合は、以下の手順に従ってアナライザー用のソフトウェアドライバを設定してください。
:::

`USB-CANアナライザー`ドライバのGitHubリポジトリ[USB-CAN Analyzer system driver](https://github.com/kobolt/usb-can)を訪問し、Readmeセクションに従ってオペレーティングシステムに応じたドライバをインストールしてください。

CANバストラフィックを送受信するための例コマンド：

```
# CANバスからトラフィックをダンプ
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# CANバスでID 005からバイト0x00112233を送信
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233
```

### reTerminal DMでのSocketcanノード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### フローのインポート

:::note

以下の手順はチュートリアル目的のみです。このセクションでは、JSON形式のフローをコピーしてインポートノードのポップアップメニューの入力ボックスに貼り付けることで、フローを迅速にインポートする方法を示します。

:::

STEP 1: `設定ボタン`をクリックし、次に`インポート`ボタンをクリックして`インポートノード`ウィンドウを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png" /></div>

STEP 2: 以下のフローJSONをコピーしてください

```json

[
    {
        "id": "829af3ee.a57c1",
        "type": "tab",
        "label": "CAN BUS",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7b24a62e.8f5458",
        "type": "debug",
        "z": "829af3ee.a57c1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 350,
        "y": 360,
        "wires": []
    },
    {
        "id": "5f671b29.cd24bc",
        "type": "socketcan-out",
        "z": "829af3ee.a57c1",
        "name": "socketcan-out",
        "config": "d9bf56bb5f3e2f92",
        "x": 150,
        "y": 360,
        "wires": [
            [
                "7b24a62e.8f5458"
            ]
        ]
    },
    {
        "id": "caba412f.047b2",
        "type": "socketcan-in",
        "z": "829af3ee.a57c1",
        "name": "socketcan-in",
        "config": "d9bf56bb5f3e2f92",
        "x": 350,
        "y": 120,
        "wires": []
    },
    {
        "id": "a64240cb.3f0788",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":false,\"canid\":123,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "3ff96369.ef6f5c",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "123#00112233",
        "payloadType": "str",
        "x": 160,
        "y": 200,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "6879c00a.5edb68",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - ext",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1F334455#1122334455667788",
        "payloadType": "str",
        "x": 160,
        "y": 240,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "1ee3b274.4cb8fe",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - ext",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":true,\"canid\":32278,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 160,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "391a4c45.7acd8c",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Send CAN frames in using different payloads on CAN0",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Receiove CAN data from interface CAN0",
        "info": "",
        "x": 220,
        "y": 320,
        "wires": []
    },
    {
        "id": "d9bf56bb5f3e2f92",
        "type": "socketcan-config",
        "interface": "can0"
    }
]

```

STEP 3: `Import nodes`ウィンドウで、`Clipboard`タブを選択し、上記のJSONフローコードを`赤いダイアログボックス`に貼り付けてから、`import`ボタンをクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

STEP 4: 上記の手順を完了すると、新しいフロータブ`CAN BUS`が作成されているはずです。以下の図と同じフローであることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

STEP 5: CANインターフェースを設定するには、`socketcan-inノード`をダブルクリックして`edit node`ウィンドウを開いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
[Configure CAN BUS on reTerminal DM セクション](#configure-can-bus-on-reterminal-dm)の手順を完了し、reTerminal DM上でcan0インターフェースデバイスを作成していることを確認してください。
:::

STEP 6: `Edit socketcan-in node`ウィンドウで、`interface`オプションの`鉛筆`アイコンをクリックして、`Add new socketcan-config config node`ウィンドウを開いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

STEP 7: `Add new socketcan-config config node`ウィンドウで、インターフェースダイアログボックスに`can0`を入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

STEP 8: 上記の手順で`Add`ボタンをクリックすると、`interface`が`can0`に設定されていることを確認し、`Done`をクリックして適用してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

STEP 9: `socketcan-out`のCANバスインターフェースを設定するには、`socketcan-out`ノードをダブルクリックし、Configで`can0`を選択してから`Done`をクリックするだけです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

STEP 10: 今すぐ `Deploy` をクリックしてください

#### 最終テストと結果

おめでとうございます！これで、reTerminal DM と Node-RED を使用して CAN Bus プロトコルを体験し、学ぶことができました。最終結果は以下の画像のようになるはずです。

ホストコンピュータが CAN Bus データを送信し、reTerminal DM が受信する場合:

* ホストコンピュータのターミナルウィンドウで `./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233` コマンドを実行して、reTerminal DM に `00112233`（16進数）を送信します。そして、reTerminal DM のデバッグウィンドウで以下のデータが表示されます。
```json  
0: 0 
1: 17 
2: 34
3: 51
```
これは `x00 x11 x22 x33` の HEX データセットをバイナリで表現したものです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

ホストコンピュータが CAN Bus データを受信し、reTerminal DM が送信する場合:

* reTerminal DM の Node-RED で以下の画像に示されている `inject` ボタンをクリックして、ホストコンピュータに `01 02 03 04 05` のデータを送信します。そして、ホストコンピュータのターミナルウィンドウで受信コマンド `./canusb -t -d /dev/ttyUSB0 -s 250000 -t` を実行すると、受信データは `05 04 03 02 01` となります。これは FIFO（先入れ先出し）順序で表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# reTerminal DM と Node-RED でさらに多くのノードを探索する

* [reTerminal DM RS485 ポートと Node-RED](/ja/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT と Node-RED](/ja/reTerminal-DM-Node-Red-mqtt)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>