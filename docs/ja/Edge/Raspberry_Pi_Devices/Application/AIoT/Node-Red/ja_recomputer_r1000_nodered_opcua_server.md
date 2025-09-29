---
description: このwikiは、Raspberry PiベースのreComputer R1000でNode-REDを使用してOPC UAサーバーを設定するためのステップバイステップガイドを提供します。OPC UAサーバーノードのインストールと設定、Modbus TCPおよびRTUデバイスの接続、UaExpert OPCクライアントを使用したデータ監視の詳細な手順が含まれています。産業データの統合と可視化を簡単に行いたい方に最適です。
title: reComputer R1000をNode-REDでOPC UAサーバーとして動作させる

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_nodered_opcua_server
last_update:
  date: 08/14/2024
  author: Kasun Thushara
---

## はじめに

2008年に導入されたOPC Unified Architecture（UA）は、産業通信標準における重要な進歩を表しています。OPC Classicの傘下にあった前身とは異なり、OPC UAはプラットフォーム独立型のサービス指向アーキテクチャであり、以前のOPC仕様のすべての機能を単一の拡張可能なフレームワークに統合しています。この現代的なアプローチは、OPC Classicの中核機能を保持するだけでなく、今日の産業環境の複雑な要求を満たす多層設計でそれらを強化しています。

OPC UAのアーキテクチャは重要な原則を念頭に置いて設計されています：すべてのCOMベースのOPC Classic仕様をUAフレームワークにマッピングすることで**機能的等価性**を確保し、レガシーシステムのシームレスな移行を可能にします。OPC UAの**プラットフォーム独立性**により、組み込みマイクロコントローラからクラウドベースのインフラストラクチャまで、幅広いデバイスで動作することができ、汎用性があり将来性があります。**セキュリティ**はOPC UAの基盤であり、データの整合性と機密性を保護するための堅牢な暗号化、認証、監査機能を備えています。さらに、その**拡張可能な性質**により、既存のアプリケーションを中断することなく新機能を継続的に統合することができ、進化する産業ニーズに適応できることを保証しています。OPC UAの**包括的な情報モデリング**機能は、複雑な情報構造を定義するための強力なツールも提供し、詳細でスケーラブルなデータ管理ソリューションを必要とする産業にとって理想的な選択肢となっています。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

このチュートリアルでは、Node-REDを使用してreComputer R1000をOPC UAサーバーとして設定する実践的な例を作成します。Modbus TCPおよびRTUデバイスからのデータ収集に焦点を当てますが、MQTT、BACnet、その他のデバイスからもデータを収集できることは注目に値します。デモンストレーション目的で、具体的にModbus TCPとRTUを使用します。これらのプロトコルからのデータ収集に慣れていない場合は、以前のチュートリアルを参照してください：

- [reComputer R1000 with Node-RED and BACnet IP](https://wiki.seeedstudio.com/ja/reComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000 with Node-RED and Modbus TCP](https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000 with Node-RED and MQTT](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/)

## OPC-UAサーバーノードのインストール

**reComputer R1000でNode-REDにアクセス**

Webブラウザを開き、`http://{reComputer_IP_ADDRESS}:1880`に移動して、reComputer R1000のNode-REDインターフェースにアクセスします。

**OPC-UAサーバーノードのインストール**

Node-REDで、右上のメニューに移動し、「パレットの管理」を選択します。

「インストール」タブで、`node-red-contrib-opcua-server`を検索します。

ノードパッケージの横にある「インストール」ボタンをクリックして、Node-RED環境に追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**Compact OPC-UAサーバーノードの追加**

インストール後、Node-REDパレットでOPC-UAノードを見つけます。compact serverノードをワークスペースにドラッグアンドドロップして、OPC-UAサーバーの設定を開始します。

## ポート設定

compact serverノードをワークスペースにドラッグした後、それをダブルクリックして設定画面を開きます。

設定パネルで、サーバーに割り当てられた**ポート番号**が表示されます。次のステップで必要になるため、このポート番号をメモしておいてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**エンドポイントURLの作成**

設定画面内の**Discovery**タブに切り替えます。

ここで、OPC-UAサーバーの**エンドポイントURL**を作成する必要があります。

URLには以下の形式を使用してください：
`opc.tcp://<IP_reComputer>:<Port>`

例えば、reComputerのIPアドレスが192.168.0.157で、割り当てられたポートが54840の場合、エンドポイントURLは次のようになります：
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## フローコンテキストでの変数の保存

Node-REDでは、flow.set()関数はフローコンテキストにデータを保存するために使用され、同じフロー内の任意のノードからアクセスできる情報を保存することができます。これは、フローの異なる部分間でデータを共有する必要がある場合に特に有用です。

**Functionノードの追加**

FunctionノードをNode-REDワークスペースにドラッグアンドドロップします。Functionノードをダブルクリックしてエディターを開きます。

**温度データの保存**

Modbus RTUセンサーからの温度値をフローコンテキスト変数として保存したいとします。Functionノードエディターで、以下のコードを入力します。

```bash
flow.set("Temperature", msg.payload);

```

このコードは温度データ（msg.payloadに含まれる）を「Temperature」と呼ばれるフローコンテキスト変数に保存します。

**Function Nodeの接続**

このFunction nodeを、生の温度データが入力されるnodeに接続します。これにより、センサーから受信されるとすぐに温度値が保存されることが保証されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**PLC DI/DO値の保存**

PLC Digital Input/Output（DI/DO）配列から特定の値を保存する必要がある場合は、同様のアプローチを使用できます。例えば、配列の3番目のコイルの値を保存するには、以下のコードを使用します：

```bash
flow.set("Coil3", msg.payload[2]);

```

このコードは、msg.payloadの配列から3番目の値を抽出し、「Coil3」という名前のフローコンテキスト変数に格納します。

**DI/DO用のFunctionノードの接続**

このFunctionノードをDI/DO配列を出力するノードに接続します。これにより、配列が更新されるたびに特定のコイル値が格納されます。

## OPC UA サーバーアドレス空間の設定

**Address Space**タブは、OPC UAサーバーの情報モデルが構築される場所です。このモデルは、node-opcua SDKのクラスとメソッドを使用して、OPC UAクライアントが利用できる構造とデータを定義します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Import the OPC UA SDK and utilities from the coreServer
const opcua = coreServer.choreCompact.opcua;

```

### 名前空間の作成

**名前空間**はサーバーのアドレス空間内に作成されます。この名前空間には、アプリケーション固有のすべてのノードと変数が含まれます。

```bash
// Create a new namespace for the server within the address space
const namespace = addressSpace.getOwnNamespace();
// Internal reference to the server instance for use within functions
var flexServerInternals = this;

```

### OPC UA データ型とステータスコード

OPC UA SDKの**Variant、DataType、およびStatusCodes**クラスは、サーバーによって公開される変数の型とステータスを定義するために使用されます。

```bash
// Define OPC UA data structures and types for later use
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```

### 変数の初期化

サーバーによって公開される変数は、フローコンテキストで初期化されます。これらの変数は、クライアントが読み取りまたは書き込みを行うデータを表します。

```bash
// Initialize variables in the flow context that will be exposed by the OPC UA server
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### アドレス空間でのフォルダ構造の定義

サーバーの名前空間内でフォルダ構造を定義して、ノードを整理します。この構造により、クライアントが利用可能なデータをナビゲートしやすくなります。

```bash
// Find the root folder node in the address space
const rootFolder = addressSpace.findNode("RootFolder");

// Add a new device folder under the root for the RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Add subfolders for digital outputs (DIO) and analog values under the device folder
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### OPC UA ビューの定義

OPC UA ビューは、デフォルトのフォルダ構造とは別に、クライアントがサーバーのデータを参照するための代替手段を提供するカスタム階層です。

```bash
// Create a view for digital outputs (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Create a view for analog values
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Add references to the nodes in the respective views
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Reference to the Humidity node
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Reference to the Coil2 node
});
```

## UaExpertを使用したOPC UAサーバーへの接続

OPC UAサーバーエンドポイントに接続するには、OPC UAクライアントが必要です。以下の手順に従って開始してください：

**UaExpertのダウンロード**

[こちらにアクセス](https://www.unified-automation.com/downloads/opc-ua-clients)して登録し、無料のOPC UAクライアントであるUaExpertをダウンロードしてください。

**UaExpertのインストール**

ダウンロード後、画面の指示に従ってコンピューターにUaExpertをインストールしてください。

**接続の設定**

UaExpertを起動し、Endpointsセクションに移動します。OPC UAサーバーのエンドポイントURLを入力して新しい接続を作成します。
例：`opc.tcp://<IP_reComputer>:<Port>`

例：`opc.tcp://192.168.0.157:54840`

サーバー設定に基づいて、必要なセキュリティ設定や接続ルールを設定してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**サーバーへの接続**

接続が確立されたら、UaExpertのAddress Spaceに移動します。Node-REDで作成したRaspberryPI-reComputerというラベルのメインフォルダが表示されます。このメインフォルダ内には、AnalogとDIOの2つのサブフォルダがあります。

**値の監視**

AnalogとDIOフォルダから変数をUaExpertのデータビューエリアにドラッグアンドドロップします。システムが動作する際に、値がリアルタイムでどのように変化するかを視覚的に監視できるようになります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
