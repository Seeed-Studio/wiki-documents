---
description: EdgeBox RPi 200でNode-REDを使用してModbus TCPを統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、および効率的な産業オートメーションと監視のためのNode-REDフローの作成について説明します。
title: Edge Box RPi 200とNode-REDおよびModbus TCP
keywords:
  - エッジコントローラー
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**Modbus**は、産業環境で広く使用されている通信プロトコルで、そのシンプルさと堅牢性で知られています。**Modbus RTU (Remote Terminal Unit)**は、RS-232またはRS-485物理層上で動作するシリアル通信プロトコルです。このプロトコルはデータをコンパクトでバイナリ形式で表現し、長距離やノイズの多い環境での伝送に効率的です。一方、**Modbus TCP**は、このプロトコルをイーサネットネットワークに拡張し、ModbusフレームをTCP/IPパケット内にカプセル化します。これにより、通信速度が向上し、Modbusを現代のITインフラストラクチャと統合することが可能になります。どちらのバージョンも、その信頼性、実装の容易さ、およびPLC、センサー、SCADAシステムなどの多種多様なデバイスやシステム間の通信を促進する能力から、産業環境で好まれています。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

#### Modbus対応デバイス

EdgeBox RPi 200は、**PLC、VFD、HMI、エネルギーメーター、BMS**システムなど、さまざまなデバイスとのModbus通信をサポートしています。このケースでは、**Modbus TCP/IPプロトコル**をサポートするSiemens LOGO PLCを使用します。

### ソフトウェアの準備

Edge Box-200は、Raspberry Pi OSがプリインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wikiを参照してください。
また、[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)も用意されています。このWikiを進める前に、このガイドを確認することをお勧めします。

### Modbus TCP/IPのためのイーサネット設定の構成

PLC/デバイスのIPドメインが無線設定と異なる場合、IP構成を手動で変更する必要があります。そのためには、以下の手順を実行してください。

- **ステップ01**: 次のコマンドを実行します。

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに従ってイーサネットポート設定を構成し、**metric**コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Modbusノードのインストール

Modbusノードをインストールするには、以下の手順に従ってください：

**ステップ1.** 右上隅にある**三本線**アイコンで示される**設定ボタン**をクリックし、**パレットの管理**を選択します。

**ステップ2.** パレットタブで、**インストールタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を検索します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**インストール**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合は、警告ウィンドウのドロップダウンから**インストール**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するのを待ちます。完了すると、**インストール**ボタンが**インストール済み**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。**Modbusアドレス（入力、出力、保持レジスタを含む）に関する詳細情報については、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。例えば、データシートで出力コイルQ1が8193と記載されている場合、Node-REDではアドレスを8192に設定する必要があります（**元のアドレスから1減算**）。同様に、ネットワーク入力が1と記載されており、それがコイルタイプの場合、Node-REDではアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ1.** **Modbus-Writeノードをドラッグ＆ドロップ**してワークスペースに配置し、ノードを**ダブルクリック**して設定を開きます。

**ステップ2.** **サーバータブ**で、以下の詳細を入力してデバイスを追加します：

   - **名前**: サーバー名
   - **タイプ**: TCP
   - **ホスト**: ModbusサーバーのIPアドレス
   - **ポート**: Modbusサーバーのポートアドレス（通常は502）
   - **ユニットID**: 255（ユニットIDは、Modbusネットワーク内で複数のデバイスが同じ通信ラインを共有する場合に個々のデバイスを識別するために使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ3.** **ノードに適切な名前を付けます**。例えば、「Network IP 1」とします。このデモでは、PLCプログラム内のネットワーク入力を制御します。

**ステップ4.** **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ5.** **アドレスを0**に設定します（入力0をアドレス指定しています）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ6.** Injectノードを使用してブール値を注入できます。この目的のためにいくつかのInjectノードを使用します。

全体の手順は以下のように示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Modbus-Read ノードの設定

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Read ノードをフローに追加します。このノードはパレットの Modbus タブにあります。

**ステップ 2**. Modbus-Read ノードを**ダブルクリック**して設定画面を開きます。

**ステップ 3**. 以下の設定を構成します:

   - **名前**: 適切な名前を付けます。例: "ReadOutputs"。
   - **FC 値**: FC 値を FC 5: Read Coil Status に変更します。
   - **アドレス**: メーカーのデータシートに基づき、アドレスを 8192 に設定します。
   - **数量**: 数量を 4 に設定します。この場合、4 つのデジタル出力があります。
   - **ポールレート**: アプリケーションのニーズに適したポールレートに変更します。
   - **サーバー**: サーバーを "MyPLC" に設定します（前の例で設定済み）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## Modbus-Response ノードの設定

**Modbus-Response ノード**は、Modbus Read/Write ノードの応答を表示するために使用されます。

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Response ノードをフローに追加します。

**ステップ 2**. **Modbus Read ノード**と接続します。応答は Modbus-Response ノードの下に数値の配列として表示されます。これらの数値は各デジタル出力のカウントを表します。

**ステップ 3**. **デバッグノードをドラッグ＆ドロップ**して検査目的で使用します。その後、**Modbus Read ノード**と接続します。

これらの手順を実行することで、Modbus TCP デバイスからレジスタやコイルの値を効果的に読み取り、表示することができます。

全体の手順は以下のように示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>