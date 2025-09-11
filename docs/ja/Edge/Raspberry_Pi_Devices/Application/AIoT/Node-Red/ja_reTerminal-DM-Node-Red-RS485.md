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
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM RS485ポートとNode-RED

## RS485、Modbus、Modbus RTU、Modbus Node-REDノードについての簡単な情報

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485は、デバイス間でデータを送信するために使用されるシリアル通信プロトコルです。RS485はデータのシリアル通信伝送の標準であり、産業用途で一般的に使用されています。差動信号を使用しており、通信には2つのデータライン（AとB）と1つのグランドライン（GND）が必要です。この差動信号により、ノイズ耐性が向上し、最大4,000フィートの長いケーブル長が可能になります。RS485の最大データレートは通常RS232よりも高く、最大10 Mbpsに達します。RS485はマルチポイント通信向けに設計されています。つまり、RS485は同じバス上の複数のデバイス間でデータを送信することができます。要約すると、RS485は産業制御システムなどで複数のデバイス間の長距離通信に一般的に使用されています。

### Modbus RTU

Modbus RTUは、監視制御およびデータ収集（SCADA）システム内でデバイス間のデータ交換に使用される人気のある産業通信プロトコルです。これはRS485またはRS232バス標準の上で動作するシリアル通信プロトコルです。Modbus RTUはマスター-スレーブアーキテクチャを使用しており、マスターデバイスが1つ以上のスレーブデバイスと通信を開始します。マスターはスレーブデバイスにリクエストメッセージを送信し、スレーブデバイスは要求されたデータを含むメッセージで応答します。Modbus RTUメッセージはヘッダー、データ、およびエラーチェックフィールドで構成されています。ヘッダーには、スレーブアドレスや機能コードなどのメッセージに関する情報が含まれています。データフィールドには送信される実際のデータが含まれています。エラーチェックフィールドはメッセージの整合性を確保するために使用されます。Modbus RTUはバイナリ、整数、浮動小数点、文字列などのさまざまなデータ型をサポートしています。また、保持レジスタの読み取り、単一コイルの書き込み、入力レジスタの読み取りなど、さまざまな種類のデータアクセスを可能にする機能コードの範囲もサポートしています。Modbus RTUの利点の1つは、そのシンプルさと実装の容易さです。さまざまなデバイスやソフトウェアで広くサポートされており、産業オートメーションおよび制御システムで人気の選択肢となっています。また、リアルタイムのデータ交換と低遅延通信を必要とするアプリケーションに適しています。

Modbus RTUは、以下のようなさまざまな産業用途で使用されています：

  *  建物のオートメーションおよび制御システム：Modbus RTUは、照明、HVAC、その他の建物システムの監視と制御に一般的に使用されています。

  *  エネルギー管理システム：Modbus RTUは、商業および産業建物のエネルギー消費を監視および制御するために使用できます。

  *  製造およびプロセス制御：Modbus RTUは、組立ライン、コンベアシステム、包装機などの製造プロセスの監視および制御に頻繁に使用されています。

  *  水および廃水処理：Modbus RTUは、水および廃水処理施設でポンプ、バルブ、その他の設備の運転を監視および制御するために使用されています。

  *  石油およびガス生産：Modbus RTUは、石油およびガス生産施設でポンプ、コンプレッサー、その他の設備を監視および制御するために使用されています。

  *  再生可能エネルギーシステム：Modbus RTUは、太陽光パネル、風力タービン、その他の再生可能エネルギーシステムを監視および制御するために使用できます。

  *  交通システム：Modbus RTUは、交通信号、照明、その他の設備を監視および制御するために使用されています。

一般的に、産業環境でリアルタイムのデータ交換と低遅延通信を必要とするアプリケーションは、Modbus RTUの使用による恩恵を受けることができます。

### Modbusノード

Node-REDには組み込みのModbusノードがあり、ユーザーがModbusデバイスをNode-REDのワークフローに簡単に統合できるようになっています。このModbusノードは、Modbus TCPおよびModbus RTUプロトコルの両方をサポートしており、Modbusデバイスからデータを読み書きするために使用できます。

Node-REDでModbusノードを使用するには、単にキャンバスにドラッグ＆ドロップし、デバイスアドレス、機能コード、データ型などの適切なModbus設定で構成します。構成が完了すると、Modbusノードをワークフロー内の他のノードに接続してデータを処理および表示することができます。

Node-REDには、その他のノードやプラグインも多数あり、その機能を拡張し、他のシステムやデバイスと統合することができます。例えば、MQTT、HTTPなどの通信プロトコル用のノードや、データ処理、可視化、保存用のノードがあります。

全体として、Node-REDはIoTおよび産業オートメーションアプリケーションを構築するための強力で柔軟なプラットフォームを提供しており、組み込みのModbusノードにより、これらのワークフローにModbusデバイスを簡単に統合することができます。

# Modbus Nodeを使用したreTerminal DMの開始

[Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus)ページでさらに詳しい情報を見つけることができます。

Senscraft Edge OSを使用している場合は、Modbusノードのインストール手順をスキップして、[reTerminal DMでModbusノードを使用する方法](#how-to-use-modbus-node-with-retermianl-dm)に進んでください。

## Modbusノードのインストール

このセクションでは、`node-red-contrib-modbus`ノードをインストールします。ノードの[インストール方法](/ja/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)を確認してください。

### オプション1: コマンドライン

まず、SSHを使用してreTerminal DMにアクセスする方法を復習してください。手順は[こちら](/ja/reterminal-dm-flash-OS#install-drivers)を確認してください。

SSHでreTerminal DMにアクセスしたら、以下の手順を進めてください。

STEP 1: Node-REDフォルダに移動してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

STEP 2: Modbusノードをインストールしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: ノードがインストールされたら、以下のコマンドでNode-REDサービスを再起動してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### オプション2: Node-REDエディタ

STEP 1: 右上隅にある「三本線」アイコンの`設定`ボタンをクリックし、`パレットの管理`を選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: パレットタブで`インストール`タブをクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: ノード検索バーでノードを検索し、`インストール`ボタンをクリックしてインストールしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: ドロップダウン警告ウィンドウで`インストール`ボタンをクリックしてインストールを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: インストールが完了するまで待機し、`インストール`ボタンが`インストール済み`に変わるのを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: サイドバーにModbusノードが表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

## reTerminal DMでModbusノードを使用する方法

### 前提条件

#### ハードウェア

* 1 x USB to RS485/RS232アダプタ
* 6 x ケーブル
* 1 x reTerminal DM
* 1 x ホストコンピュータ

#### ソフトウェア

* ホストマシンにインストールされた[`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)のようなMODBUS通信GUIツール

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### 準備

STEP 1: 以下のようにハードウェアを接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

STEP 2: 以下の手順に従う場合は[`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)をインストールしてください。

STEP 2-1: [`ModbusMechanicリリース`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip)のリリースファイルをダウンロードしてください。

:::note

このWikiを準備した時点での`ModbusMechanic`の最新リリースバージョンはv2.7です。

:::

STEP 2-2: リリースファイルを解凍し、以下のコマンドを使用してLinuxでJava実行可能ファイル`ModbusMechanic.jar`を実行してください。

```sh
java -jar ModbusMechanic.jar
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

STEP 2-3: 以下のように`ModbusMechanic`の`シリアル設定ポート`を構成してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

STEP 3: `Slave Simulator`をセットアップしてください。

STEP 3-1: `ModbusMechanic`ツールから`Slave Simulator`を開いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

STEP 3-2: ポップアップで`RTU`を選択してください。

STEP 3-4-2: `レジスタ番号`に`1`を入力してください。

STEP 3-4-3: `データ型`に`U int 16`を選択してください。

STEP 3-4-4: `値`に`120`を入力してください。

STEP 3-4-5: `ワードスワップ`をチェックしてください。

STEP 3-4-6: `追加`をクリックして確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

STEP 3-5: 以下の画像のような設定が表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

STEP 3-6: STEP 4-4を繰り返して、以下のようにさらに2つのレジスタを追加してください。`レジスタ2`には`値12`、`レジスタ3`には`値1`を設定します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>

#### フローの編集

STEP 1: `Modbus Read`を`フローエディタ`パネルにドラッグしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

STEP 2: Modbusサーバーを構成してください。

STEP 2-1: `Modbus Read`をダブルクリックして`ノードエディタパネル`を開いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

STEP 2-2: サーバー構成オプションの`鉛筆`アイコンをクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

`鉛筆`アイコンをクリックすると、`新しい modbus-client 設定ノードを追加`するための設定パネルが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

STEP 2-3: 以下の手順に従って、画像に示されているようにModbusポートを設定してください。

STEP 2-3-1: ドロップダウンリストからタイプを`Serial Expert`に設定します。

STEP 2-3-2: シリアルポートを`/dev/ttyCH343USB1`に選択します。

STEP 2-3-3: 画像に示されているようにシリアルポートオプションを設定します。

STEP 2-3-4: 画像に示されているように追加のModbusサーバーポートオプションを設定します。

STEP 2-3-5: `Add`または`Update`をクリックして変更を適用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

STEP 3: 以下の画像に示されているようにModbus-Readノードを設定し、`Done`をクリックします。

:::note

以下の手順は例として示されています。設定はご自身の状況に応じて変更することができます。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>

STEP 4: `debug node`と`Modbus Response node`を見つけてドラッグし、以下の画像のようにノードを接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### 最終結果

おめでとうございます！これで、Node-REDを使用してreTerminal DMでModbusを利用する方法を体験し、学ぶことができました。最終結果は以下の画像のようになるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>

以下のJSONコードをコピーしてノードをインポートすることができます。

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

# reTerminal DMでNode-REDを使用したさらなるノードの探索

* [reTerminal DM MQTTとNode-RED](/ja/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUSとNode-RED](/ja/reTerminal-DM-Node-Red-canbus)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>