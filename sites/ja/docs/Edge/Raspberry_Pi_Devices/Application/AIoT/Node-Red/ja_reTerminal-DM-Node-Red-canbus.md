---
description: reTerminal DM CANBUS with Node-RED
title: reTerminal DM CANBUS with Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/28/2023
  author: Peter Pan
---

# reTerminal DM CAN BUS と Node-RED

## CAN BUSについての簡単な情報

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

CAN bus（Controller Area Network bus）は、車両や産業システム内で複数の電子制御ユニット（ECU）を接続するために使用されるネットワークの一種です。1980年代にBoschによって開発され、車両やその他のアプリケーションにおけるシリアル通信の国際標準（ISO 11898）となっています。

CAN busはECU間での高速データ交換を可能にし、情報を共有して活動を調整することができます。データ送信用とデータ受信用の2線式システムを使用し、複数のノードをサポートするため、多くのデバイスが相互に通信する必要がある複雑なシステムでの使用に理想的です。

CAN bus技術は、エンジン制御、トランスミッション制御、ABS（アンチロックブレーキシステム）、エアバッグ制御など、さまざまなアプリケーションで自動車業界で広く使用されています。また、産業オートメーション、医療機器、航空宇宙など、デバイス間の信頼性が高く効率的な通信が不可欠な他の業界でも使用されています。

CAN busには、高い信頼性、低コスト、過酷な環境での動作能力など、多くの利点があります。設置と保守が簡単で、電磁干渉に対する耐性が非常に高いです。これらの特徴により、信頼性が高く効率的な通信が必要な多くの異なるアプリケーションにとって理想的な選択肢となっています。

## reTerminal DMでCAN BUS Nodeを使い始める

Node-REDをCAN busで使用するには、reTerminal DM CAN BUSポートに接続するCAN busインターフェースデバイスと、ネットワーク上でメッセージを送受信できるNode-RED CAN busノードが必要です。この場合、`node-red-contrib-socketcan`ノードを一緒に探索します。Node-REDにCAN busノードをインストールしたら、CAN busネットワークからデータを読み取り、処理し、他のシステムやデバイスに送信するフローの構築を開始できます。例えば、車両のCAN busからエンジンRPMを読み取り、データを処理して燃料消費量を計算し、結果をダッシュボードに送信して表示することができます。

詳細については、[node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan)ページで確認できます。

Senscraft Edge OSを使用している場合は、Socketcanノードのインストール手順をスキップできます。

### 前提条件

#### ハードウェア

- 1 x reTerminal DM
- 1 x ホストコンピュータ
- 1 x [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### ハードウェアの準備

以下に示すようにハードウェアを接続してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### ソフトウェア

:::note
ホストコンピュータは、以下のセットアップ手順を実行するために、reTerminal DMへのインターネット接続が可能である必要があります。
:::

##### Socketcanノードのインストール

このWikiチュートリアルでは`node-red-contrib-socketcan`ノードを使用するため、[ノードのインストール](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)ガイドに従って`node-red-contrib-socketcan`をインストールしてください。

##### reTerminal DMでのCAN BUSの設定

:::note
reTerminal DMの`Terminal`アプリに直接アクセスするか、SSH経由でreTerminal DMにアクセスできることを前提としています。そうでない場合は、[こちら](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red)の最初のステップに従って、その方法に慣れてください。
:::

reTerminal DMのCAN BUSポートでcan0という仮想canデバイスを有効にするために、以下のコマンドを一つずつ入力してください。

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

上記のコマンドを入力した後、以下に示すように `ifconfig` コマンドで `can0` デバイスが表示されるはずです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### ホストコンピュータのusb-canソフトウェアとドライバーの設定

:::note
同じ[USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用している場合は、以下の手順に従ってアナライザーを使用するためのソフトウェアドライバーをセットアップできます。
:::

`USB-CAN Analyzer`ドライバーのgithubリポジトリ[USB-CAN Analyzer system driver](https://github.com/kobolt/usb-can)にアクセスし、Readmeセクションに従ってお使いのオペレーティングシステムに応じてドライバーをインストールしてください。

CANバストラフィックを送受信するためのサンプルコマンド

```
# dump CAN bus traffic from CAN bus
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# send the bytes 0x00112233 from ID 005 on at CAN bus
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233

```

### reTerminal DM での Socketcan ノード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### フローのインポート

:::note

以下の手順はチュートリアル目的のためのものです。このセクションでは、JSON形式のフローをコピーして、インポートノードのポップアップメニューの入力ボックスに貼り付けることで、フローを素早くインポートする方法を説明します。

:::

ステップ 1: `設定ボタン`をクリックし、次に`インポート`ボタンをクリックして`ノードのインポート`ウィンドウを開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png" /></div>

ステップ 2: 以下のフロー JSON をコピーします

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

ステップ3：`Import nodes`ウィンドウで、`Clipboard`タブを選択し、上記のjsonフローコードを`赤いダイアログボックス`に貼り付けて、`import`ボタンをクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

ステップ4：上記の手順の後、`CAN BUS`という新しいフロータブが作成されているはずです。フローが以下に示すものと同じかどうか確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

ステップ5：canインターフェースを設定するには、`socketcan-in node`をダブルクリックして`edit node`ウィンドウを開く必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
reTerminal DM上でcan0インターフェースデバイスを作成するために、[Configure CAN BUS on reTerminal DM セクション](#configure-can-bus-on-reterminal-dm)の手順を完了していることを確認してください。
:::

ステップ6：`Edit socketcan-in node`ウィンドウで、`interface`オプションの`鉛筆`アイコンをクリックして`Add new socketcan-config config node`ウィンドウを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

ステップ7：`Add new socketcan-config config node`ウィンドウで、interfaceダイアログボックスに`can0`と入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

ステップ8：上記の手順で`Add`ボタンをクリックすると、`interface`が`can0`に設定されているのが確認できるはずです。その後、`Done`をクリックして適用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

ステップ9：`socketcan-out`のCAN Busインターフェースを設定します。`scoketcan-out`ノードをダブルクリックし、Configとして`can0`を選択して、`Done`をクリックするだけです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

ステップ10：`Deploy`をクリックしてください。

#### 最終テストと結果

おめでとうございます。reTerminal DMとnode-REDでCAN Busプロトコルを使用する方法を正常に体験し、学習できました。最終結果は以下に示す画像と同様になるはずです。

ホストコンピューターがCAN Busデータを送信し、reTerminal DMが受信する場合：

- ホストコンピューターのターミナルウィンドウから`./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233`コマンドを実行して`00112233`（16進数）をreTerminal DMに送信できます。reTerminal DMのデバッグウィンドウでデータが確認できます。

```json  
0: 0 
1: 17 
2: 34
3: 51
```

`x00 x11 x22 x33` HEXデータセットのバイナリ表現です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

ホストコンピュータがCANバスデータを受信し、reTerminal DMが送信する場合：

- 下の画像に示すように、reTerminal DM Node-Redの`inject`ボタンをクリックして、データ`01 02 03 04 05`をホストコンピュータに送信する必要があります。ホストコンピュータのターミナルウィンドウで受信コマンドは`./canusb -t -d /dev/ttyUSB0 -s 250000 -t`であり、受信データは先入れ先出し順序のため`05 04 03 02 01`となります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# Node-REDでreTerminal DMのより多くのノードを探索

- [reTerminal DM RS485ポートとNode-RED](/ja/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTTとNode-RED](/ja/reTerminal-DM-Node-Red-mqtt)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
