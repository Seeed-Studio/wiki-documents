---
description: reComputer R1000でModbus TCPをNode-REDと統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、および効率的な産業オートメーションと監視のためのNode-REDフローの作成をカバーします。
title: reComputer R1000とNode-REDおよびModbus TCP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_node_red_modbus_tcp
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**Modbus**は、産業環境で広く使用されている通信プロトコルで、そのシンプルさと堅牢性で知られています。**Modbus RTU (Remote Terminal Unit)**は、RS-232またはRS-485物理層上で動作するシリアル通信プロトコルです。データをコンパクトでバイナリ形式で表現するため、長距離やノイズの多い環境での伝送に効率的です。一方、**Modbus TCP**はプロトコルをイーサネットネットワークに拡張し、ModbusフレームをTCP/IPパケット内にカプセル化します。これにより、通信速度が向上し、Modbusを現代のITインフラストラクチャと統合することが可能になります。両バージョンはその信頼性、実装の容易さ、およびPLC、センサー、SCADAシステムなどの多様なデバイスやシステム間の通信を促進する能力から、産業環境で好まれています。

## 始める前に

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

#### Modbus対応デバイス

reComputer R1000は、**PLC、VFD、HMI、エネルギーメーター、BMS**システムなど、さまざまなデバイスとのModbus通信をサポートしています。このケースでは、**Modbus TCP/IPプロトコル**をサポートするSiemens LOGO PLCを使用します。

### ソフトウェアの準備

reComputer R1000は、事前にRaspberry Pi OSがインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/) Wikiを参照してください。
また、[Node-REDの始め方ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/)を準備しています。このガイドを事前に確認することをお勧めします。

### Modbus TCP/IPのためのイーサネット設定の構成

PLC/デバイスのIPドメインが無線設定と異なるため、IP構成を手動で変更する必要がある場合があります。そのためには、

- **ステップ01**: **Bullseye**を実行している場合、以下のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに従ってイーサネットポート設定を構成し、**metric**コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **ステップ01**: **Bookworm OS**を実行している場合、GUIを使用してネットワークアイコンをクリックします。詳細オプションの下で「接続を編集」を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **ステップ02**: 「Wired Connection 2」（ETH 1）を選択し、IPv4設定の下でアドレス、ネットマスク、ゲートウェイを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Modbusノードのインストール

Modbusノードをインストールするには、以下の手順に従ってください：

**ステップ1.** 右上隅にある**三本線**アイコンで示される**設定ボタン**をクリックし、**パレットの管理**を選択します。

**ステップ2.** パレットタブで、**インストールタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を検索します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**インストール**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合は、警告ウィンドウのドロップダウンから**インストール**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するのを待ちます。完了すると、**インストール**ボタンが**インストール済み**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。**入力、出力、および保持レジスタを含むModbusアドレスに関する詳細情報については、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。たとえば、データシートで出力コイルQ1が8193としてリストされている場合、Node-REDではアドレスを8192に設定する必要があります（**元のアドレスから1減算**）。同様に、ネットワーク入力が1としてリストされており、それがコイルタイプの場合、Node-REDではアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ1.** **Modbus-Writeノードをドラッグ＆ドロップ**してワークスペースに配置し、ノードを**ダブルクリック**して設定を開きます。

**ステップ2.** **サーバータブ**で、以下の詳細を入力してデバイスを追加します：

   - **名前**: サーバー名
   - **タイプ**: TCP
   - **ホスト**: ModbusサーバーのIPアドレス
   - **ポート**: Modbusサーバーのポートアドレス（通常は502）
   - **ユニットID**: 255（ユニットIDは、Modbusネットワーク内で複数のデバイスが同じ通信ラインを共有する場合に個々のデバイスを識別するために使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ3.** **ノードに適切な名前を付けます**。たとえば、「Network IP 1」とします。このデモでは、PLCプログラム内のネットワーク入力を制御します。

**ステップ4.** **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ5.** **アドレスを0に設定**します（入力0をアドレス指定しています）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ6.** Injectノードを使用して、ブール値を注入できます。この目的のためにいくつかのInjectノードを使用します。

全体の手順は以下のように示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Modbus-Read ノードの設定

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Read ノードをフローに追加します。このノードはパレットの Modbus タブにあります。

**ステップ 2**. **ダブルクリック**して Modbus-Read ノードの設定を開きます。

**ステップ 3**. **以下の設定を構成します:**

   - **名前**: 適切な名前を付けます。例: "ReadOutputs"。
   - **FC 値**: FC 値を FC 5: Read Coil Status に変更します。
   - **アドレス**: メーカーのデータシートに基づき、アドレスを 8192 に設定します。
   - **数量**: 数量を 4 に設定します。この場合、4 つのデジタル出力があります。
   - **ポールレート**: アプリケーションのニーズに適したポールレートに変更します。
   - **サーバー**: サーバーを "MyPLC" に設定します（前の例で設定済み）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## Modbus-Response ノードの設定

**Modbus-Response ノード**は、Modbus Read/Write ノードのレスポンスを表示するために使用されます。

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Response ノードをフローに追加します。

**ステップ 2**. **Modbus Read ノード**と接続します。レスポンスは Modbus-Response ノードの下に数値の配列として表示されます。これらの数値は各デジタル出力のカウントを表します。

**ステップ 3**. **デバッグノードをドラッグ＆ドロップ**して検査目的で使用します。その後、**Modbus Read ノード**と接続します。

これらの手順を実行することで、Modbus TCP デバイスからレジスタやコイルの値を効果的に読み取り、表示することができます。

全体の手順は以下のように示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>