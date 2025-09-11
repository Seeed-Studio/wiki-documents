---
description: reTerminal DM MQTTとNode-RED
title: reTerminal DM MQTTとNode-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Node-Red-mqtt
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM MQTTとNode-RED

## MQTTについての簡単な情報

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTTとNode-RED

MQTT（Message Queuing Telemetry Transport）は、マシン間通信（M2M）やモノのインターネット（IoT）の文脈でデバイス間の通信を可能にするために設計された軽量なメッセージングプロトコルです。MQTTは1999年にIBMによって開発され、その後オープンスタンダードとなりました。MQTTは、デバイス間で小さなデータパケットを送信するためのシンプルで効率的な方法として設計されています。このプロトコルは、パブリッシュ/サブスクライブ型のメッセージングパターンを使用しており、メッセージはブローカーに公開され、その後特定のトピックを購読しているすべてのサブスクライバーに配信されます。これにより、デバイスはお互いのIPアドレスやその他のネットワーク詳細を知らなくても通信が可能になります。

MQTTは、低帯域幅や高遅延ネットワークなど、不安定なネットワークで接続されているデバイスに特に有用です。これは、帯域幅の使用量が少なく、オーバーヘッドが低いためです。また、メッセージ配信の信頼性を異なるレベルで保証するQuality of Service（QoS）レベルもサポートしています。そのシンプルさと効率性から、MQTTはIoTやM2Mアプリケーションにおいて人気のある選択肢となっており、幅広いデバイスやプラットフォームでサポートされています。

MQTTブローカーは、MQTTベースのIoTまたはM2Mネットワーク内でデバイス間のMQTTメッセージ交換の中心的な役割を果たすサーバーです。ブローカーはデバイスから公開されたメッセージを受信し、同じトピックを購読している他のデバイスに配信します。

MQTTはNode-REDがサポートする多くのプロトコルの1つであり、MQTTベースのIoTアプリケーションを構築するための優れたツールです。Node-REDはMQTT用の組み込みノードを提供しており、これによりユーザーはMQTTブローカーに接続し、メッセージを公開または購読することができます。MQTTノードはNode-REDのインターフェースを使用して簡単に設定でき、ブローカーのアドレス、ポート、クライアントID、ユーザー名、パスワードを指定することが可能です。また、ノードはMQTT QoSレベルをサポートしており、信頼性の高いメッセージ配信を保証するために設定できます。

Node-REDでは、受信したMQTTメッセージを処理し、メッセージのペイロードに基づいてさまざまなアクションを実行するフローを作成できます。例えば、温度センサーのMQTTトピックを購読し、温度値を解析し、温度が特定の閾値を超えた場合にアラートを送信するフローを作成することができます。また、Node-REDはHTTPエンドポイント、データベース、クラウドサービスなど、他のIoTサービスやデバイスと統合するためのさまざまなノードも提供しています。これにより、幅広いデバイスやサービスと通信できる複雑なIoTアプリケーションを簡単に構築することができます。

全体として、Node-REDは組み込みのMQTTノードと他のIoTサービスやデバイスのサポートにより、MQTTベースのIoTアプリケーションを簡単かつ直感的に構築する方法を提供します。

# MQTTノードをreTerminal DMで始める

MQTTノードはNode-REDに組み込まれているため、ノードをインストールする追加の手順なしで使用できます。ただし、トピックにメッセージを公開または購読するためには、MQTTブローカーが必要です。そのため、以下の手順では、reTerminal DMにローカルMQTTブローカーをインストールし、そのMQTTブローカーを利用してメッセージの送受信を行う方法を説明します。

## 前提条件

### ハードウェア

* 1 x reTerminal DM
* 1 x ホストコンピュータ

:::note
ホストコンピュータは、以下のセットアップ手順を実行するためにreTerminal DMとインターネット接続が可能である必要があります。
:::

### ソフトウェア 

* MQTTブローカー [Eclipse Mosquitto](https://mosquitto.org/)

## MQTTブローカー [Eclipse Mosquitto](https://mosquitto.org/) のインストール

このセクションでは、[Eclipse Mosquitto](https://mosquitto.org/) をインストールします。これは、IoTやM2Mアプリケーションで広く使用されているオープンソースのMQTTブローカーです。Eclipse Foundationによって開発されており、Eclipse Public Licenseの下で利用可能です。Mosquittoは軽量で効率的に設計されており、低消費電力デバイスやネットワーク帯域幅が限られた環境での使用に適しています。最新のMQTT 5.0プロトコルだけでなく、MQTT 3.1.1などの以前のバージョンもサポートしています。

まず、SSHを使用してreTerminal DMにアクセスする方法を復習してください。手順は[こちら](/ja/reterminal-dm-flash-OS#install-drivers)をご覧ください。

SSHでreTerminal DMにアクセスできたら、以下の手順を進めてください：

STEP 1: 以下のコマンドを実行してパッケージリストを更新します：

```sh
sudo apt-get update
```

STEP 2: 以下のコマンドを実行してMosquittoをインストールします：

```sh
sudo apt-get install mosquitto
```

STEP 3: 以下のコマンドを実行してMosquittoクライアントツールをインストールします：

```sh
sudo apt-get install mosquitto-clients
```

STEP 4: インストールが完了したら、以下のコマンドを実行してMosquittoサービスを開始します：

```sh
sudo systemctl start mosquitto
```

STEP 5: Mosquittoが実行中かどうかを確認するには、以下のコマンドを実行します：

```sh
sudo systemctl status mosquitto
```

デフォルトでは、MosquittoはMQTTトラフィック用に`ポート1883`をリッスンするように設定されています。Mosquittoクライアントツールを使用してトピックを購読することでインストールをテストできます。以下のようにしてください：

新しいSSHセッションを開き、以下のコマンドを実行してトピックを購読します：

```sh
mosquitto_sub -h localhost -t test
```

別のSSHセッションで、以下のコマンドを実行して同じトピックにメッセージを公開します：

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

最初のSSHセッションウィンドウで`mosquitto_sub`コマンドを実行した場所に、メッセージ"Hello, world!"が表示されるはずです。

これで、reTerminal DMにMosquittoを正常にインストールし、Mosquittoクライアントツールを使用してテストしました。次に、Node-REDを使用したMQTT通信について掘り下げていきます。

## reTerminal DMでのMQTTノード

Node-REDでは、MQTT inとMQTT outがあり、それぞれ購読（Subscribe）と公開（Publish）を表します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### フローの編集

:::note

以下の手順はチュートリアル目的のものであり、mqtt-inを使用してmqtt-outが同じトピックに公開したメッセージを購読します。

:::

STEP 1: `mqtt in`を`フローエディタ`パネルにドラッグします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

STEP 2: `Modbus Server`と`mqtt in`ノードを設定します

STEP 2-1: `mqtt in`をダブルクリックして`ノードエディタパネル`を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

STEP 2-2: サーバー設定オプションの`鉛筆アイコン`をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

`鉛筆アイコン`をクリックすると、`新しいmqtt-broker設定ノードを追加`する設定パネルが表示されます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

STEP 2-3: `接続`タブで以下のフィールドを適切に設定してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note

現時点では`セキュリティ`と`メッセージ`タブはそのままにしておいてください。

:::

STEP 2-4: 購読するトピックを設定します。ここでは`test-mqtt`を使用し、その他の設定はデフォルトのままにして`完了`ボタンをクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

STEP 2-5: 次の手順では`debug`ノードを紹介します。この場合、`mqtt in`からの購読トピック出力を表示およびデバッグするために使用されます。以下の画像に示されています。

STEP 2-5-1: `debug`ノードを`フローエディタ`パネルにドラッグしてください

STEP 2-5-2: `mqtt in`ノードと`debug`ノードを接続してください

STEP 2-5-3: `オプションと設定パネル`の`小さなバグボタン`をクリックして`デバッグコンソール`を開きます

STEP 2-5-4: `デプロイ`ボタンをクリックしてフローをデプロイします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note

まだmqttトピックの公開者を設定していないため、`デバッグコンソール`にはメッセージが表示されません。

:::

STEP 3: `mqtt out`ノードを設定します

STEP 3-1: `mqtt out`ノードをダブルクリックして`ノードエディタパネル`を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

STEP 3-1: `mqtt out`ノードを以下の画像のように`フローエディタ`パネルにドラッグしてください

STEP 3-1-1: `STEP 2-3:`で設定したサーバー（`localhost:1883`）を選択してください

STEP 3-1-2: `STEP 2-4:`で設定したトピック名（`test-mqtt`）を同じように設定してください。

STEP 3-1-3: 同様に、QoSは`mqtt in`設定と一致するように`2`に設定してください。

STEP 3-1-4: `Done`をクリックして設定を完了します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

STEP 4: `inject`ノードの設定

STEP 4-1: `inject`ノードを`Flow Editor`パネルにドラッグします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

STEP 4-2: `inject`ノードをダブルクリックして`Node editor panel`を開きます。デフォルトの`inject`ノードの設定が表示されます。

STEP 4-2-1: msg.topic行の`x`をクリックして削除します。

STEP 4-2-2: msg.payload行の`timestamp`オプションをクリックしてドロップダウンリストを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

STEP 4-2-3: ドロップダウンリストから`string`オプションを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

STEP 4-2-4: メッセージボックスに`this is the message`と入力し、これを`test-mqtt`トピックに送信するメッセージとして設定します。その後、`Done`をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

STEP 4-2-5: `inject`ノードを`mqtt out`ノードに接続し、`Deploy`をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### 最終結果

おめでとうございます！これでreTerminal DMとNode-REDを使用してMQTTプロトコルを体験し、学ぶことができました。最終結果は以下の画像のようになるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

以下のJSONコードをコピーしてノードをインポートできます。

```json
[
    {
        "id": "8d317d539464f080",
        "type": "tab",
        "label": "MQTT",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "128fa85f993944d6",
        "type": "mqtt in",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b6a7c986cb61ea54",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 300,
        "y": 220,
        "wires": [
            [
                "a022e0bf3404fdd9"
            ]
        ]
    },
    {
        "id": "a022e0bf3404fdd9",
        "type": "debug",
        "z": "8d317d539464f080",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "9d0098383c96ee8b",
        "type": "mqtt out",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "b6a7c986cb61ea54",
        "x": 520,
        "y": 320,
        "wires": []
    },
    {
        "id": "3c967b7d5cc112fc",
        "type": "inject",
        "z": "8d317d539464f080",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "this is the message",
        "payloadType": "str",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "9d0098383c96ee8b"
            ]
        ]
    },
    {
        "id": "b6a7c986cb61ea54",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    }
]
```

# reTerminal DMでNode-REDを使用したさらなるノードの探索

* [reTerminal DM RS485ポートとNode-RED](/ja/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM CAN BUSとNode-RED](/ja/reTerminal-DM-Node-Red-canbus)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>