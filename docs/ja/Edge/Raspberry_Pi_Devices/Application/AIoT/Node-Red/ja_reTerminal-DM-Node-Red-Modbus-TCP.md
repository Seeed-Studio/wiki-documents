---
description: reTerminal DMでModbus TCPをNode-REDと統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、および効率的な産業オートメーションと監視のためのNode-REDフローの作成をカバーします。
title: reTerminal DMとNode-REDおよびModbus TCP
keywords:
  - HMI
  - reTerminal DM
  - Node-Red
  - Modbus
  - Raspberry
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png
slug: /ja/reterminal_dm_node_red_modbus_tcp
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

このプロジェクトを開始する前に、以下に記載されているように、事前にハードウェアとソフトウェアを準備する必要があります。

### ハードウェア 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

#### Modbus対応デバイス

reTerminal DMは、**PLC、VFD、HMI、エネルギーメーター、BMS**システムなど、さまざまなデバイスとのModbus通信をサポートしています。このケースでは、Modbus TCP/IPプロトコルをサポートするSiemens LOGO PLCを使用します。reTerminal DMをイーサネットポートとModbus TCP対応デバイスに接続してください。


### ソフトウェア準備

[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/)を準備しています。このガイドを進む前に確認することをお勧めします。

### Modbus TCP/IPのためのイーサネット設定を構成する

PLC/デバイスのIPドメインがワイヤレス設定と異なるため、IP構成を手動で変更する必要がある場合があります。そのためには、

- **ステップ01**: 以下のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスネットワークドメインに従ってイーサネットポート設定を構成し、**metric**コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG" /></center>

## Modbusノードのインストール

Modbusノードをインストールするには、以下の手順に従ってください：

**ステップ1.** 右上隅にある**三本線アイコン**で示される設定ボタンをクリックし、**Manage palette**を選択します。

**ステップ2.** パレットタブで、**Installタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を検索します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**Install**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合は、警告ウィンドウのドロップダウンから**Install**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するまで待ちます。完了すると、**Install**ボタンが**Installed**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。**PLCまたはデバイスメーカーのデータシートを参照して、入力、出力、および保持レジスタを含むModbusアドレスに関する詳細情報を確認することをお勧めします**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。例えば、データシートに出力コイルQ1が8193と記載されている場合、Node-REDではアドレスを8192に設定する必要があります（**元のアドレスから1減算**）。同様に、ネットワーク入力が1と記載されていて、それがコイルタイプの場合、Node-REDではアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ1.** Modbus-Writeノードをワークスペースに**ドラッグ＆ドロップ**し、ノードを**ダブルクリック**して設定を開きます。

**ステップ2.** **Server**タブで、以下の詳細を入力してデバイスを追加します：

   - **Name**: サーバー名
   - **Type**: TCP
   - **Host**: ModbusサーバーのIPアドレス
   - **Port**: Modbusサーバーのポートアドレス（通常502）
   - **Unit-Id**: 255（Unit-IDは、Modbusネットワーク内で複数のデバイスが同じ通信ラインを共有する場合に個々のデバイスを識別するために使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ3.** ノードに適切な名前を付けます。例えば、「Network IP 1」とします。このデモでは、PLCプログラム内のネットワーク入力を制御します。

**ステップ4.** **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ5.** **アドレスを0**に設定します（入力0をアドレス指定しています）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ6.** Injectノードを使用してブール値を注入できます。この目的のためにいくつかのInjectノードを使用します。

全体の手順は以下のように示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Modbus-Read ノードの設定

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Read ノードをフローに追加します。このノードはパレットの Modbus タブにあります。

**ステップ 2**. Modbus-Read ノードを**ダブルクリック**して設定画面を開きます。

**ステップ 3**. 以下の設定を構成します:

   - **名前**: 適切な名前を付けます。例: "ReadOutputs"。
   - **FC 値**: FC 値を FC 5: Read Coil Status に変更します。
   - **アドレス**: メーカーのデータシートに基づき、アドレスを 8192 に設定します。
   - **数量**: 数量を 4 に設定します。この場合、4 つのデジタル出力があります。
   - **ポールレート**: アプリケーションのニーズに適したポールレートに変更します。
   - **サーバー**: サーバーを "MyPLC" に設定します（前の例で構成済み）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## Modbus-Response ノードの設定

**Modbus-Response ノード**は、Modbus Read/Write ノードの応答を表示するために使用されます。

**ステップ 1**. **ドラッグ＆ドロップ**で Modbus-Response ノードをフローに追加します。

**ステップ 2**. **Modbus Read ノード**と接続します。応答は Modbus-Response ノードの下に数値の配列として表示されます。これらの数値は各デジタル出力のカウントを表します。

**ステップ 3**. **デバッグノードをドラッグ＆ドロップ**して検査目的で使用します。その後、**Modbus Read ノード**と接続します。

これらの手順を実行することで、Modbus TCP デバイスからレジスタやコイルの値を効果的に読み取り、表示することができます。

全体の手順は以下のように示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>