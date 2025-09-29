---
description: reComputer R1000でNode-REDとModbus TCPを統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、効率的な産業オートメーションと監視のためのNode-REDフローの作成について説明します。
title: reComputer R1000とNode RedおよびModbus TCP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_node_red_modbus_tcp
last_update:
  date: 07/04/2024
  author: Kasun Thushara
---
## はじめに

**Modbus**は産業環境で広く使用されている通信プロトコルで、そのシンプルさと堅牢性で知られています。**Modbus RTU（Remote Terminal Unit）**は、RS-232またはRS-485物理層上で動作するシリアル通信プロトコルです。データのコンパクトなバイナリ表現を使用するため、長距離やノイズの多い環境での伝送に効率的です。一方、**Modbus TCP**は、プロトコルをイーサネットネットワークに拡張し、ModbusフレームをTCP/IPパケット内にカプセル化します。これにより、より高速な通信速度とModbusの現代的なITインフラストラクチャとの統合が可能になります。両バージョンとも、信頼性、実装の容易さ、PLC、センサー、SCADAシステムなどの幅広いデバイスとシステム間の通信を促進する能力により、産業環境で好まれています。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

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

#### Modbus 対応デバイス

reComputer R1000は、**PLC、VFD、HMI、エネルギーメーター、BMS**システムを含む様々なデバイスとのModbus通信をサポートしています。このケースでは、**Modbus TCP/IPプロトコル**をサポートするSiemens LOGO PLCを使用します。


### ソフトウェアの準備

reComputer R1000は、Raspberry Pi OSがプリインストールされた状態でお手元に届きます。このデバイスを初回起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/)Wikiをお読みください。
[Node-REDスタートガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/)を準備しています。このwikiに進む前に、このガイドを確認することをお勧めします。

### Modbus TCP/IPのEthernet設定を構成する

PLC/デバイスのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- **ステップ01**: **Bullseye**を実行している場合は、以下のコマンドを実行してください：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに応じてイーサネットポートの設定を構成し、**metric**コマンドを使用して優先度を設定します。最も低いメトリック値が最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **ステップ01**: **Bookworm OS**を実行している場合は、GUIを使用してネットワークアイコンをクリックできます。詳細オプションの下で、「Edit Connections」を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **ステップ02**: 「Wired Connection 2」（ETH 1）を選択し、IPv4設定の下でアドレス、ネットマスク、ゲートウェイを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Modbusノードのインストール

Modbusノードをインストールするには、以下の手順に従ってください：

**ステップ1.** 右上角にある**三本線**アイコンで示される設定ボタンをクリックし、**Manage palette**を選択します。

**ステップ2.** パレットタブで、**Installタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を見つけます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**Install**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合は、ドロップダウン警告ウィンドウから**Install**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するまで待ちます。完了すると、**Install**ボタンが**Installed**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

##  Modbusアドレスの識別

正しいModbusアドレスを識別することは重要なステップです。**入力、出力、保持レジスタを含むModbusアドレスの詳細情報については、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。例えば、データシートで出力コイルQ1が8193としてリストされている場合、Node-REDでアドレスを8192として設定する必要があります（**元のアドレスから1を減算**）。同様に、ネットワーク入力が1としてリストされ、それがコイルタイプの場合、Node-REDでアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ1**. Modbus-Writeノードをワークスペースに**ドラッグアンドドロップ**し、ノードを**ダブルクリック**して設定を開きます。
   
**ステップ2**. **Server**タブで、以下の詳細を入力してデバイスを追加するために編集します：

   - **Name**: サーバー名
   - **Type**: TCP
   - **Host**: ModbusサーバーのIPアドレス
   - **Port**: Modbusサーバーのポートアドレス（通常502）
   - **Unit-Id**: 255（Unit-IDはModbusネットワーク内の個々のデバイスを識別するために使用され、特に複数のデバイスが同じ通信ラインを共有する場合に使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ3**. **ノードに適切な名前を付けます**。例えば、「Network IP 1」。このデモでは、PLCプログラムのネットワーク入力を制御しています。

**ステップ4**. **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ5**. **アドレスを0に設定**します（入力0をアドレス指定しているため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ6**. injectノードを使用して、ブール値を注入できます。ここでは、その目的のためにいくつかのinjectノードを使用します。

全体的な手順は以下のように実演できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Modbus-Readノードの設定

**ステップ1**. Modbus-Readノードをフローにドラッグ&ドロップします。このノードはパレットのModbusタブで見つけることができます。

**ステップ2**. Modbus-Readノードを**ダブルクリック**して設定を開きます。

**ステップ3**. **以下の設定を行います：**

   - **Name**: 「ReadOutputs」など適切な名前を付けます。
   - **FC value**: FC値をFC 5: Read Coil Statusに変更します。
   - **Address**: アドレスを8192に設定します（メーカーのデータシートに従って）。
   - **Quantity**: 数量を4に設定します。この場合、4つのデジタル出力があります。
   - **Poll Rate**: アプリケーションのニーズに適したポーリングレートに変更します。
   - **Server**: サーバーを「MyPLC」に設定します（前の例で設定済み）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## Modbus-Responseノードの設定

**Modbus-Responseノード**は、Modbus Read/Writeノードの応答を表示するために使用されます。

**ステップ1**. Modbus-Responseノードをフローにドラッグ&ドロップします。

**ステップ2**. **Modbus Read**ノードと接続します。応答はModbus-Responseノードの下に数値の配列として表示されます。これらの数値は各デジタル出力のカウントを表します。

**ステップ3**. 検査目的で**Debugノードをドラッグ&ドロップ**します。次に**Modbus Read**ノードと接続します。

これらのステップに従うことで、Modbus TCPデバイスからレジスタ/コイルの値を効果的に読み取り、表示することができます。

全体的なステップは以下のように実演できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>