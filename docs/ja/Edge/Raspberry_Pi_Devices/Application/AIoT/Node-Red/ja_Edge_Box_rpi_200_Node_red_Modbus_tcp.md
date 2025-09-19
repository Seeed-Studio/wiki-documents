---
description: EdgeBox RPi 200でNode-REDとModbus TCPを統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、効率的な産業オートメーションと監視のためのNode-REDフローの作成について説明します。
title: Edge Box RPi 200 with Node Red and Modbus TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
---
## はじめに

**Modbus**は、そのシンプルさと堅牢性で知られる、産業環境で広く使用されている通信プロトコルです。**Modbus RTU（Remote Terminal Unit）**は、RS-232またはRS-485物理層上で動作するシリアル通信プロトコルです。データのコンパクトなバイナリ表現を使用するため、長距離やノイズの多い環境での伝送に効率的です。一方、**Modbus TCP**は、プロトコルをイーサネットネットワークに拡張し、ModbusフレームをTCP/IPパケット内にカプセル化します。これにより、より高速な通信速度と、Modbusの現代的なITインフラストラクチャとの統合が可能になります。両バージョンとも、信頼性、実装の容易さ、PLC、センサー、SCADAシステムなどの幅広いデバイスやシステム間の通信を促進する能力により、産業環境で好まれています。

## はじめに

このプロジェクトを開始する前に、ここで説明するように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>

</div>

#### Modbus サポートデバイス

EdgeBox RPi 200は、**PLC、VFD、HMI、エネルギーメーター、BMS**システムを含む様々なデバイスとのModbus通信をサポートしています。このケースでは、**Modbus TCP/IPプロトコル**をサポートするSiemens LOGO PLCを使用します。

### ソフトウェアの準備

Edge Box-200は、Raspberry Pi OSがプリインストールされた状態でお手元に届きます。このデバイスを初回起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wikiをお読みください。
[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)を用意しています。このwikiに進む前に、このガイドを確認することをお勧めします。

### Modbus TCP/IP用のイーサネット設定の構成

PLC/デバイスのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- **ステップ01**: 以下のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに応じてイーサネットポートの設定を構成し、**metric**コマンドを使用して優先度を設定します。最も低いメトリックが最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Modbusノードのインストール

Modbusノードをインストールするには、以下の手順に従ってください：

**ステップ1.** 右上角にある**三本線**アイコンで示される設定ボタンをクリックし、**パレットの管理**を選択します。

**ステップ2.** パレットタブで、**インストールタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を見つけます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**インストール**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合、ドロップダウン警告ウィンドウから**インストール**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するまで待ちます。完了すると、**インストール**ボタンが**インストール済み**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。**入力、出力、保持レジスタを含むModbusアドレスの詳細情報については、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。例えば、データシートで出力コイルQ1が8193としてリストされている場合、Node-REDでアドレスを8192として設定する必要があります（**元のアドレスから1を減算**）。同様に、ネットワーク入力が1としてリストされ、それがコイルタイプの場合、Node-REDでアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ1**. Modbus-Writeノードをワークスペースに**ドラッグアンドドロップ**し、ノードを**ダブルクリック**して設定を開きます。

**ステップ2**. **サーバー**タブで、以下の詳細を入力してデバイスを追加するために編集します：

- **名前**: サーバー名
- **タイプ**: TCP
- **ホスト**: ModbusサーバーのIPアドレス
- **ポート**: Modbusサーバーのポートアドレス（通常502）
- **Unit-Id**: 255（Unit-IDはModbusネットワーク内の個々のデバイスを識別するために使用され、特に複数のデバイスが同じ通信ラインを共有する場合に使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ3**. **ノードに適切な名前を付けます**。例えば、「Network IP 1」。このデモでは、PLCプログラムのネットワーク入力を制御しています。

**ステップ4**. **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ5**. **アドレスを0に設定**します（入力0をアドレス指定しているため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ6**. injectノードを使用して、ブール値を注入できます。ここでは、その目的のためにいくつかのinjectノードを使用します。

全体的な手順は以下のように実演できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Modbus-Readノードの設定

**ステップ1**. Modbus-Readノードをフローに**ドラッグアンドドロップ**します。このノードはパレットのModbusタブで見つけることができます。

**ステップ2**. Modbus-Readノードを**ダブルクリック**して設定を開きます。

**ステップ3**. **以下の設定を行います:**

- **Name**: 「ReadOutputs」など、適切な名前を付けます。
- **FC value**: FC値をFC 5: Read Coil Statusに変更します。
- **Address**: アドレスを8192に設定します（メーカーのデータシートに従って）。
- **Quantity**: 数量を4に設定します。この場合、4つのデジタル出力があります。
- **Poll Rate**: アプリケーションのニーズに適したポーリングレートに変更します。
- **Server**: サーバーを「MyPLC」に設定します（前の例で設定済み）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## Modbus-Responseノードの設定

**Modbus-Responseノード**は、Modbus Read/Writeノードの応答を表示するために使用されます。

**ステップ1**. Modbus-Responseノードをフローに**ドラッグアンドドロップ**します。

**ステップ2**. **Modbus Read**ノードと接続します。応答はModbus-Responseノードの下に数値の配列を表示します。これらの数値は各デジタル出力のカウントを表します。

**ステップ3**. 検査目的で**Debugノードをドラッグアンドドロップ**します。次に**Modbus Read**ノードと接続します。

これらのステップに従うことで、Modbus TCPデバイスからレジスタ/コイルの値を効果的に読み取り、表示することができます。

全体的なステップは以下のように実演できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
