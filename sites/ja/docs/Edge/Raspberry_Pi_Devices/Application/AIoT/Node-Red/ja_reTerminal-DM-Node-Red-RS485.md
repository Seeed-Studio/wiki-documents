---
description: reTerminal DM RS485ポートとNode-RED
title: reTerminal DM RS485ポートとNode-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Node-Red-RS485
last_update:
  date: 04/04/2023
  author: Peter Pan
---

# reTerminal DM RS485ポートとNode-RED

## RS485、Modbus、Modbus RTU、およびModbus Node-REDノードについての概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485はデバイス間でデータを送信するために使用されるシリアル通信プロトコルです。RS485は、産業用アプリケーションで一般的に使用されるデータのシリアル通信伝送の標準です。差動信号を使用し、通信用に2つのデータライン（AとB）と1つのグランドライン（GND）があることを意味します。この差動信号により、より優れたノイズ耐性が提供され、最大4,000フィートまでのより長いケーブル長が可能になります。RS485の最大データレートは通常RS232よりも高く、最大10 Mbpsです。RS485はマルチポイント通信用に設計されています。これは、RS485が同じバス上の複数のデバイス間でデータを送信できることを意味します。要約すると、RS485は産業制御システムなど、複数のデバイス間の長距離通信に一般的に使用されます。

### Modbus RTU

Modbus RTUは、監視制御およびデータ取得（SCADA）システムにおけるデバイス間のデータ交換に使用される人気の産業通信プロトコルです。これは、RS485またはRS232バス標準の上で動作するシリアル通信プロトコルです。Modbus RTUはマスター・スレーブアーキテクチャを使用し、マスターデバイスが1つ以上のスレーブデバイスとの通信を開始します。マスターはスレーブデバイスに要求メッセージを送信し、スレーブデバイスは要求されたデータを含むメッセージで応答します。Modbus RTUメッセージは、ヘッダー、データ、およびエラーチェックフィールドで構成されます。ヘッダーには、スレーブアドレスやファンクションコードなど、メッセージに関する情報が含まれます。データフィールドには、送信される実際のデータが含まれます。エラーチェックフィールドは、メッセージの整合性を確保するために使用されます。Modbus RTUは、バイナリ、整数、浮動小数点、文字列など、さまざまなデータタイプをサポートします。また、ホールディングレジスタの読み取り、単一コイルの書き込み、入力レジスタの読み取りなど、さまざまなタイプのデータアクセスを可能にするさまざまなファンクションコードもサポートします。Modbus RTUの利点の1つは、その単純さと実装の容易さです。さまざまなデバイスやソフトウェアで広くサポートされており、産業オートメーションおよび制御システムの人気の選択肢となっています。また、リアルタイムデータ交換と低遅延通信を必要とするアプリケーションにも適しています。

Modbus RTUは、以下のようなさまざまな産業アプリケーションで使用される人気の通信プロトコルです：

  *  ビルディングオートメーションおよび制御システム：Modbus RTUは、照明、HVAC、およびその他のビルディングシステムの監視と制御に一般的に使用されます。

  *  エネルギー管理システム：Modbus RTUは、商業および産業ビルでのエネルギー消費の監視と制御に使用できます。

  *  製造およびプロセス制御：Modbus RTUは、組立ライン、コンベヤシステム、包装機械などの製造プロセスの監視と制御によく使用されます。

  *  上下水道処理：Modbus RTUは、上下水道処理施設でのポンプ、バルブ、およびその他の機器の動作の監視と制御に使用されます。

  *  石油・ガス生産：Modbus RTUは、石油・ガス生産施設でポンプ、コンプレッサー、およびその他の機器の監視と制御に使用されます。

  *  再生可能エネルギーシステム：Modbus RTUは、ソーラーパネル、風力タービン、およびその他の再生可能エネルギーシステムの監視と制御に使用できます。

  *  交通システム：Modbus RTUは、交通システムにおける信号機、照明、およびその他の機器の監視と制御に使用されます。

一般的に、産業環境でリアルタイムデータ交換と低遅延通信を必要とするアプリケーションは、Modbus RTUの使用から恩恵を受けることができます。

### Modbusノード

Node-REDには組み込みのModbusノードがあり、ユーザーはModbusデバイスをNode-REDワークフローに簡単に統合できます。ModbusノードはModbus TCPとModbus RTUの両方のプロトコルをサポートし、Modbusデバイスからデータを読み書きするために使用できます。

Node-REDでModbusノードを使用するには、キャンバスにドラッグアンドドロップし、デバイスアドレス、ファンクションコード、データタイプなどの適切なModbus設定で構成するだけです。構成が完了すると、Modbusノードはワークフロー内の他のノードに接続して、データを処理および表示できます。

Node-REDには、その機能を拡張し、他のシステムやデバイスと統合するために使用できる他のノードやプラグインも多数あります。たとえば、MQTT、HTTP、およびその他の通信プロトコル用のノード、ならびにデータ処理、可視化、およびストレージ用のノードがあります。

全体的に、Node-REDはIoTおよび産業オートメーションアプリケーションを構築するための強力で柔軟なプラットフォームを提供し、その組み込みModbusノードにより、Modbusデバイスをこれらのワークフローに簡単に統合できます。

# reTerminal DMでのModbusノードの使用開始

詳細情報は[Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus)ページで確認できます。

Senscraft Edge OSを使用している場合は、modbusノードのインストール手順をスキップして、[reTerminal DMでのModbusノードの使用方法](#how-to-use-modbus-node-with-retermianl-dm)に進むことができます。

## Modbusノードのインストール

このセクションでは`node-red-contrib-modbus`ノードをインストールします。[ノードのインストール方法](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)を確認してください。

### オプション1: コマンドライン

まず、SSHを介してreTerminal DMにアクセスする知識を復習してください。手順は[こちら](/ja/reterminal-dm-flash-OS#install-drivers)で確認できます。

SSHでreTerminal DMにアクセスできたら、以下の手順に進んでください：

ステップ1: Node-REDフォルダに移動してください

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

ステップ 2: Modbus ノードのインストール

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

ステップ 3: ノードがインストールされたら、以下のコマンドでNode-REDサービスを再起動してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### オプション 2: Node-RED エディター

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


## reTerminal DM で Modbus ノードを使用する方法

### 前提条件

#### ハードウェア

* 1 x USB to RS485/RS232 アダプター
* 6 x ケーブル
* 1 x reTerminal DM
* 1 x ホストコンピューター

#### ソフトウェア 

* ホストマシンにインストールされた [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) などの MODBUS 通信 GUI ツール

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### 準備 

ステップ 1: 以下に示すようにハードウェアを接続してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

ステップ 2: 以下の手順に従いたい場合は、[`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) をインストールしてください。

ステップ 2-1: [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip) のリリースファイルをダウンロードします

:::note

この wiki を準備した時点で、`ModbusMechanic` の最新リリースバージョンは v2.7 です。

:::

ステップ 2-2: リリースファイルを解凍し、Linux で以下のコマンドを使用して Java 実行ファイル `ModbusMechanic.jar` を実行します：

```sh

java -jar ModbusMechanic.jar

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

ステップ 2-3: 以下に示すように、`ModbusMechanic`の`Serial Settings Port`を同じように設定してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

ステップ 3: `Slave Simulator`のセットアップ

ステップ 3-1: `ModbusMechanic`のToolsから`Slave Simulator`を開く

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

ステップ 3-2: ポップアップから`RTU`を選択する1 Mbit

ステップ 3-4-2: `Register number`として`1`を入力する

ステップ 3-4-3: `Data type`として`U int 16`を選択する

ステップ 3-4-4: `Value`として`120`を入力する

ステップ 3-4-5: `Word Swap`をチェックする

ステップ 3-4-6: `Add`をクリックして確定する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

ステップ 3-5: 以下の画像と同様の設定になっているはずです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

ステップ 3-6: ステップS 4-4を繰り返して、以下に示すように2つのレジスタを追加します。`Register 2`は`Value 12`、`Register 3`は`Value 1`とします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>


#### フローの編集

ステップ 1: `Modbus Read`を`Flow Editor`パネルにドラッグする

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

ステップ 2: Modbusサーバーの設定

ステップ 2-1: `Modbus Read`をダブルクリックして`Node editor panel`を開く

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

ステップ 2-2: サーバー設定オプションの`鉛筆`アイコンをクリックする

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

`鉛筆`アイコンをクリックすると、`Add new modbus-client config node`設定パネルが表示されます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

ステップ 2-3: 以下の画像に示すように、Modbusポートを設定するために以下の手順を注意深く実行してください。

ステップ 2-3-1: ドロップダウンリストからタイプをSerial Expertに設定する

ステップ 2-3-2: シリアルポート`/dev/ttyCH343USB1`を選択する

ステップ 2-3-3: 以下の画像に示すようにシリアルポートオプションを設定する

ステップ 2-3-4: 以下の画像に示すように追加のModbusサーバーポートオプションを設定する

ステップ 2-3-5: `Add`または`Update`をクリックして変更を適用する。


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

ステップ 3: 以下の画像に示すようにModbus-Readノードを設定し、`Done`をクリックする

:::note

以下の手順は単なる例の手順です。ご自身の状況に応じて設定を変更することができます

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>


ステップ 4: `debug node`と`Modbus Response node`を見つけてドラッグし、以下に示すようにノードを接続する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### 最終結果

おめでとうございます！reTerminal DMでnode-REDを使用してModbusを使用する方法を正常に体験し、学習しました。最終結果は以下に示す画像と同様になるはずです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>


以下のJSONコードをコピーしてノードをインポートできます

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
    }
]

``` 

# reTerminal DMでNode-REDを使用してより多くのノードを探索する

* [reTerminal DM MQTT with Node-RED](/ja/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS with Node-RED](/ja/reTerminal-DM-Node-Red-canbus)
* 
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
