---
description: reTerminal DM MQTT with Node-RED
title: reTerminal DM MQTT with Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Node-Red-mqtt
last_update:
  date: 04/27/2023
  author: Peter Pan
---
# reTerminal DM MQTT と Node-RED

## MQTTについての簡単な情報

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTT & Node-RED

MQTT（Message Queuing Telemetry Transport）は、マシン・ツー・マシン（M2M）やモノのインターネット（IoT）環境でデバイス間の通信を可能にするために設計された軽量メッセージングプロトコルです。MQTTは1999年にIBMによって開発され、後にオープンスタンダードとなりました。MQTTは、デバイス間で小さなデータパケットを送信するシンプルで効率的な方法として設計されています。パブリッシュ/サブスクライブメッセージングパターンを使用し、メッセージがブローカーに公開され、特定のトピックにサブスクライブしたすべてのサブスクライバーに配信されます。これにより、デバイスは互いのIPアドレスやその他のネットワーク詳細を知ることなく、相互に通信することができます。MQTTは、低帯域幅や高遅延ネットワークなどの信頼性の低いネットワークでデバイスが接続されている状況で特に有用です。これは、少ない帯域幅を使用し、オーバーヘッドが低いためです。また、メッセージ配信の異なる信頼性レベルを可能にするサービス品質（QoS）レベルもサポートしています。MQTTは、そのシンプルさと効率性により、IoTおよびM2Mアプリケーションで人気の選択肢となっており、幅広いデバイスとプラットフォームでサポートされています。

MQTTブローカーは、MQTTベースのIoTまたはM2Mネットワーク内のデバイス間でのMQTTメッセージ交換の中心点として機能するサーバーです。デバイスによって公開されたメッセージを受信し、同じトピックにサブスクライブした他のデバイスに配信します。

MQTTは、Node-REDがサポートする多くのプロトコルの1つであり、MQTTベースのIoTアプリケーションを構築するための優れたツールとなっています。Node-REDはMQTT用の組み込みノードを提供し、ユーザーがMQTTブローカーに接続してメッセージを公開またはサブスクライブできるようにします。MQTTノードは、Node-REDインターフェースを使用して簡単に設定でき、ユーザーはブローカーアドレス、ポート、クライアントID、ユーザー名、パスワードを指定できます。ノードはまた、信頼性のあるメッセージ配信を確保するために設定できるMQTT QoSレベルもサポートしています。Node-REDでは、ユーザーは受信MQTTメッセージを処理し、メッセージペイロードに基づいてさまざまなアクションを実行するフローを作成できます。例えば、フローは温度センサーのMQTTトピックにサブスクライブし、温度値を解析し、温度が特定の閾値を超えた場合にアラートを送信することができます。Node-REDはまた、HTTPエンドポイント、データベース、クラウドサービスなど、他のIoTサービスやデバイスとの統合のためのさまざまなノードを提供します。これにより、ユーザーは幅広いデバイスやサービスと通信できる複雑なIoTアプリケーションを簡単に構築できます。

全体的に、Node-REDは、組み込みMQTTノードと他のIoTサービスおよびデバイスのサポートにより、MQTTベースのIoTアプリケーションを構築するためのシンプルで直感的な方法を提供します。

# reTerminal DMでMQTTノードを始める

MQTTノードはNode-REDに組み込まれているため、ノードをインストールする追加の手順なしでMQTTノードを使用できます。ただし、トピックにメッセージを発行または購読するためにはmqttブローカーが必要です。そのため、以下の手順では、reTerminal DMにローカルMQTTブローカーをインストールし、メッセージの送受信にMQTTブローカーを活用する方法を説明します。

## 前提条件

### ハードウェア

- 1 x reTerminal DM
- 1 x ホストコンピュータ

:::note
ホストコンピュータは、以下のセットアップ手順を実行するために、reTerminal DMへのインターネット接続が可能である必要があります。
:::

### ソフトウェア

- MQTTブローカー [Eclipse Mosquitto](https://mosquitto.org/)

## MQTTブローカー [Eclipse Mosquitto](https://mosquitto.org/) のインストール

このセクションでは、IoTおよびM2Mアプリケーションで広く使用されているオープンソースのMQTTブローカーである[Eclipse Mosquitto](https://mosquitto.org/)をインストールします。これはEclipse Foundationによって開発され、Eclipse Public Licenseの下で利用可能です。Mosquittoは軽量で効率的に設計されており、低電力デバイスや限られたネットワーク帯域幅の環境での使用に適しています。最新のMQTT 5.0プロトコルと、MQTT 3.1.1などの以前のバージョンをサポートしています。

まず最初に、SSH経由でreTerminal DMにアクセスする知識を復習してください。手順は[こちら](/ja/reterminal-dm-flash-OS#install-drivers)で確認できます。

SSHでreTerminal DMにアクセスできたら、以下の手順に進むことができます：

ステップ 1: 以下のコマンドを実行してパッケージリストを更新します：

```sh
sudo apt-get update
```

ステップ2：以下のコマンドを実行してMosquittoをインストールします：

```sh
sudo apt-get install mosquitto
```

ステップ 3: 次のコマンドを実行してMosquittoクライアントツールをインストールします：

```sh
sudo apt-get install mosquitto-clients
```

ステップ4：インストールが完了したら、以下のコマンドを実行してMosquittoサービスを開始できます：

```sh
sudo systemctl start mosquitto
```

ステップ5：Mosquittoが実行されているかどうかを確認するには、以下のコマンドを実行します：

```sh
sudo systemctl status mosquitto
```

デフォルトでは、MosquittoはMQTTトラフィック用に`ポート1883`でリッスンするように設定されています。Mosquittoクライアントツールを使用してトピックを購読することで、インストールをテストできます：

新しいSSHセッションを開き、以下のコマンドを実行してトピックを購読します：

```sh
mosquitto_sub -h localhost -t test
```

別のSSHセッションで、以下のコマンドを実行して同じトピックにメッセージを発行します：

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

最初のSSHセッションウィンドウでmosquitto_subコマンドを実行した場所に「Hello, world!」というメッセージが表示されるはずです。

これで完了です！reTerminal DMにMosquittoを正常にインストールし、Mosquittoクライアントツールを使用してテストしました。次に、Node-REDを使用したMQTT通信の方法について詳しく見ていきましょう。

## reTerminal DMでのMQTTノード

Node-REDには、それぞれSubscribeとPublishを表すMQTT inとMQTT outがあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### フローの編集

:::note

以下の手順はチュートリアル目的のためのものです。mqtt-inを使用して、mqtt outが同じトピックに公開したメッセージからメッセージを購読します。

:::

ステップ 1: `mqtt in`を`Flow Editor`パネルにドラッグします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

ステップ 2: `Modbus Server`と`mqtt in`ノードを設定します

ステップ 2-1: `mqtt in`をダブルクリックして`Node editor panel`を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

ステップ 2-2: サーバー設定オプションの`鉛筆`アイコンをクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

`鉛筆`アイコンをクリックすると、`Add new mqtt-broker config node`設定パネルが表示されます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

ステップ 2-3: `Connection`タブで以下のフィールドを適切に設定してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note

現在のところ、`Security`と`Messages`タブはそのままにしておくことができます。

:::

ステップ 2-4: 購読するトピックを設定します。ここでは`test-mqtt`を使用し、その他はすべてデフォルトのままにして、`Done`ボタンをクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

ステップ 2-5: 以下の手順では`debug`ノードを紹介します。この場合、`mqtt in`から購読したトピック出力を表示およびデバッグするために使用されます。下の画像に示すとおりです

ステップ 2-5-1: `debug`ノードを`Flow Editor`パネルにドラッグしてください

ステップ 2-5-2: `debug`ノードを`mqtt in`ノードに接続します

ステップ 2-5-3: `Option and Config panel`の`小さなバグボタン`をクリックして、`Option and Config panel`で`debug console`を開きます

ステップ 2-5-4: `Deploy`ボタンをクリックしてフローをデプロイします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note

まだmqttトピックパブリッシャーを設定していないため、`debug console`にはメッセージが表示されません

:::

ステップ 3: `mqtt out`ノードを設定します

ステップ 3-1: `mqtt out`ノードをダブルクリックして`Node editor panel`を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

ステップ 3-1: 下の画像に示すように、`mqtt out`ノードを`Flow Editor`パネルにドラッグしてください

ステップ 3-1-1: `ステップ 2-3:`で設定したのと同じサーバー（`localhost:1883`）を選択する必要があります

ステップ 3-1-2: `ステップ 2-4:`のトピック設定と同じトピック名（`test-mqtt`）を設定する必要があります。

ステップ 3-1-3: 同様に、QoSは`mqtt in`設定と同じ`2`に合わせる必要があります

ステップ 3-1-4: `Done`をクリックして設定を完了します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

ステップ 4: `inject`ノードを設定します

ステップ 4-1: `inject`ノードを`Flow Editor`パネルにドラッグします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

ステップ 4-2: `inject`ノードをダブルクリックして`Node editor panel`を開くと、`inject`ノードのデフォルト設定が表示されます

ステップ 4-2-1: msg.topic行の`x`をクリックして削除します

ステップ 4-2-2: `msg.payload`行の`timestamp`オプションをクリックしてドロップダウンリストを開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

ステップ 4-2-3: ドロップダウンリストで`string`オプションを選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

ステップ 4-2-4: メッセージボックスに`test-mqtt`トピックに送信するメッセージとして`this is the message`と入力し、`Done`をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

ステップ 4-2-5: `inject`ノードを`mqtt out`ノードに接続し、`Deploy`をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### 最終結果

おめでとうございます！reTerminal DMとNode-REDでMQTTプロトコルを使用する方法を正常に体験し、学習しました。最終結果は下の画像に示すようになるはずです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

以下のJSONコードをコピーしてノードをインポートできます

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

# reTerminal DM で node-RED を使用してより多くのノードを探索する

- [reTerminal DM RS485 Port with Node-RED](/ja/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM CAN BUS with Node-RED](/ja/reTerminal-DM-Node-Red-canbus)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
