---
description: このWikiは、Raspberry Piを搭載したreComputer R1000を使用してNode-REDでOPC UAサーバーをセットアップするためのステップバイステップガイドを提供します。OPC UAサーバーノードのインストールと設定、Modbus TCPおよびRTUデバイスの接続、UaExpert OPCクライアントを使用したデータの監視に関する詳細な手順が含まれています。産業データを簡単に統合および可視化したい方に最適です。
title: reComputer R1000をNode-REDでOPC UAサーバーとして使用する

keywords:
  - エッジコントローラー
  - reComputer R1000
  - Node-RED
  - Modbus
  - OPC UA
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_nodered_opcua_server
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

2008年に導入されたOPC Unified Architecture（UA）は、産業用通信標準における重要な進化を表しています。OPC Classicの傘下にある従来の仕様とは異なり、OPC UAはプラットフォームに依存しないサービス指向アーキテクチャであり、以前のOPC仕様のすべての機能を単一の拡張可能なフレームワークに統合しています。この現代的なアプローチは、OPC Classicのコア機能を保持するだけでなく、複雑な産業環境の要求を満たす多層設計によってそれらを強化しています。

OPC UAのアーキテクチャは、いくつかの重要な原則に基づいて設計されています。**機能的同等性**を確保するために、すべてのCOMベースのOPC Classic仕様をUAフレームワークにマッピングし、レガシーシステムのシームレスな移行を可能にします。OPC UAの**プラットフォーム非依存性**により、組み込みマイクロコントローラーからクラウドベースのインフラストラクチャまで、幅広いデバイスで動作可能であり、汎用性と将来性を備えています。**セキュリティ**はOPC UAの基盤であり、データの完全性と機密性を保護するための強力な暗号化、認証、および監査機能を備えています。さらに、その**拡張性**により、既存のアプリケーションを中断することなく新機能を継続的に統合できるため、進化する産業ニーズに適応できます。OPC UAの**包括的な情報モデリング**機能は、複雑な情報構造を定義するための強力なツールを提供し、詳細でスケーラブルなデータ管理ソリューションを必要とする業界にとって理想的な選択肢となっています。

## 始めるにあたって

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備
このチュートリアルでは、Node-REDを使用してreComputer R1000をOPC UAサーバーとして設定する実践的な例を作成します。Modbus TCPおよびRTUデバイスからデータを収集することに焦点を当てますが、MQTT、BACnetなどの他のデバイスからデータを収集することも可能です。デモンストレーションの目的で、特にModbus TCPおよびRTUを使用します。これらのプロトコルからデータを収集する方法に不慣れな場合は、以下の以前のチュートリアルを参照してください：
- [reComputer R1000とNode-REDを使用したBACnet IP](https://wiki.seeedstudio.com/ja/reComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000とNode-REDを使用したModbus TCP](https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000とNode-REDを使用したMQTT](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/)

## OPC-UAサーバーノードのインストール

**reComputer R1000でNode-REDにアクセスする**

ウェブブラウザを開き、`http://{reComputer_IP_ADDRESS}:1880`にアクセスして、reComputer R1000上のNode-REDインターフェースに接続します。

**OPC-UAサーバーノードをインストールする**

Node-REDで、右上のメニューに移動し、「パレットの管理」を選択します。

「インストール」タブで、`node-red-contrib-opcua-server`を検索します。

ノードパッケージの横にある「インストール」ボタンをクリックして、Node-RED環境に追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**コンパクトOPC-UAサーバーノードを追加する**

インストール後、Node-REDのパレットでOPC-UAノードを見つけます。コンパクトサーバーノードをワークスペースにドラッグ＆ドロップして、OPC-UAサーバーの設定を開始します。

## ポート設定

コンパクトサーバーノードをワークスペースにドラッグした後、ダブルクリックして設定画面を開きます。

設定パネルでは、サーバーに割り当てられたポート番号が表示されます。このポート番号をメモしておいてください。次のステップで必要になります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**エンドポイントURLを作成する**

設定画面内の**Discovery**タブに切り替えます。

ここで、OPC-UAサーバーの**エンドポイントURL**を作成する必要があります。

URLの形式は以下の通りです：
`opc.tcp://<IP_reComputer>:<Port>`

例えば、reComputerのIPアドレスが192.168.0.157で、割り当てられたポートが54840の場合、エンドポイントURLは以下のようになります：
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## フローコンテキストに変数を保存する

Node-REDでは、`flow.set()`関数を使用してフローコンテキストにデータを保存できます。これにより、同じフロー内の任意のノードからアクセス可能な情報を保存することができます。これは、フローの異なる部分間でデータを共有する必要がある場合に特に便利です。

**関数ノードを追加する**

関数ノードをNode-REDのワークスペースにドラッグ＆ドロップします。関数ノードをダブルクリックしてエディタを開きます。

**温度データを保存する**

例えば、Modbus RTUセンサーからの温度値をフローコンテキスト変数として保存したい場合、関数ノードエディタに以下のコードを入力します。

```bash
flow.set("Temperature", msg.payload);
```

このコードは、温度データ（`msg.payload`に含まれる）を「Temperature」という名前のフローコンテキスト変数に保存します。

**関数ノードを接続する**

この関数ノードを、温度データの生データが入力されるノードに接続します。これにより、センサーからデータを受信するとすぐに温度値が保存されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**PLC DI/DO値を保存する**

PLCのデジタル入力/出力（DI/DO）配列から特定の値を保存する必要がある場合も、同様の方法を使用できます。例えば、配列内の3番目のコイルの値を保存するには、以下のコードを使用します：

```bash
flow.set("Coil3", msg.payload[2]);
```

このコードは、`msg.payload`配列の3番目の値を抽出し、「Coil3」という名前のフローコンテキスト変数に保存します。

**DI/DO用の関数ノードを接続する**

この関数ノードを、DI/DO配列を出力するノードに接続します。これにより、配列が更新されるたびに特定のコイル値が保存されます。

## OPC UA サーバーのアドレス空間設定

**Address Space** タブは、OPC UA サーバーの情報モデルを構築する場所です。このモデルは、node-opcua SDKのクラスとメソッドを使用して、OPC UA クライアントが利用できる構造とデータを定義します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// OPC UA SDKとcoreServerからユーティリティをインポート
const opcua = coreServer.choreCompact.opcua;

```
### ネームスペースの作成

**ネームスペース**は、サーバーのアドレス空間内で作成されます。このネームスペースには、アプリケーション固有のすべてのノードと変数が含まれます。

```bash
// アドレス空間内でサーバーの新しいネームスペースを作成
const namespace = addressSpace.getOwnNamespace();
// 関数内で使用するためのサーバーインスタンスへの内部参照
var flexServerInternals = this;

```

### OPC UA データ型とステータスコード

OPC UA SDKの**Variant、DataType、StatusCodes**クラスは、サーバーによって公開される変数の型とステータスを定義するために使用されます。

```bash
// 後で使用するためのOPC UAデータ構造と型を定義
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```
### 変数の初期化

サーバーによって公開される変数は、フローコンテキスト内で初期化されます。これらの変数は、クライアントが読み取ったり書き込んだりするデータを表します。

```bash
// OPC UAサーバーによって公開される変数をフローコンテキスト内で初期化
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### アドレス空間内のフォルダー構造の定義

サーバーのネームスペース内でノードを整理するためのフォルダー構造が定義されます。この構造により、クライアントが利用可能なデータを簡単にナビゲートできるようになります。

```bash
// アドレス空間内のルートフォルダノードを検索
const rootFolder = addressSpace.findNode("RootFolder");

// RaspberryPI-reComputer用の新しいデバイスフォルダーをルートフォルダーの下に追加
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// デバイスフォルダーの下にデジタル出力（DIO）とアナログ値用のサブフォルダーを追加
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### OPC UA ビューの定義

OPC UAビューは、クライアントがサーバーのデータをブラウズするためのデフォルトのフォルダー構造とは異なるカスタム階層を提供します。

```bash
// デジタル出力（DO）用のビューを作成
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// アナログ値用のビューを作成
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// それぞれのビュー内のノードへの参照を追加
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // 湿度ノードへの参照
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Coil2ノードへの参照
});
```

## UaExpertを使用してOPC UAサーバーに接続する

OPC UAサーバーのエンドポイントに接続するには、OPC UAクライアントが必要です。以下の手順に従って開始してください。

**UaExpertのダウンロード**

[こちら](https://www.unified-automation.com/downloads/opc-ua-clients)を訪問し、登録して無料のOPC UAクライアントであるUaExpertをダウンロードしてください。

**UaExpertのインストール**

ダウンロード後、画面の指示に従ってUaExpertをコンピュータにインストールしてください。

**接続の設定**

UaExpertを起動し、Endpointsセクションに移動します。新しい接続を作成し、OPC UAサーバーのエンドポイントURLを入力します。  
例: `opc.tcp://<IP_reComputer>:<Port>`

例: `opc.tcp://192.168.0.157:54840`

サーバー構成に基づいて必要なセキュリティ設定や接続ルールを構成してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**サーバーへの接続**

接続が確立されたら、UaExpertのAddress Spaceに移動します。Node-REDで作成したRaspberryPI-reComputerというラベルのメインフォルダーが表示されます。このメインフォルダー内には、AnalogとDIOという2つのサブフォルダーがあります。

**値の監視**

AnalogおよびDIOフォルダー内の変数をUaExpertのデータビューエリアにドラッグ＆ドロップします。これで、システムが動作する際に値がリアルタイムでどのように変化するかを視覚的に監視できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>