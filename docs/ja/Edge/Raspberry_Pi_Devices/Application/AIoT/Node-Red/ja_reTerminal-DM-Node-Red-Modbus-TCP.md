---
description: reTerminal DMでNode-REDとModbus TCPを統合する方法を学びます。このガイドでは、ハードウェアのセットアップ、Modbusデバイスの設定、効率的な産業オートメーションと監視のためのNode-REDフローの作成について説明します。
title: reTerminal DM with Node Red and Modbus TCP
keywords:
  - HMI
  - reTerminal DM
  - Node-Red
  - Modbus
  - Raspberry
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png
slug: /ja/reterminal_dm_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
---
## はじめに

**Modbus**は産業環境で広く使用されている通信プロトコルで、そのシンプルさと堅牢性で知られています。**Modbus RTU（Remote Terminal Unit）**は、RS-232またはRS-485物理層上で動作するシリアル通信プロトコルです。データのコンパクトなバイナリ表現を使用し、長距離やノイズの多い環境での伝送を効率的に行います。一方、**Modbus TCP**は、プロトコルをイーサネットネットワークに拡張し、ModbusフレームをTCP/IPパケット内にカプセル化します。これにより、より高速な通信速度とModbusの現代的なITインフラストラクチャとの統合が可能になります。両バージョンとも、信頼性、実装の容易さ、PLC、センサー、SCADAシステムなどの幅広いデバイスやシステム間の通信を促進する能力により、産業環境で好まれています。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

#### Modbus サポートデバイス

reTerminal DMは、**PLC、VFD、HMI、エネルギーメーター、BMS**システムを含む様々なデバイスとのModbus通信をサポートしています。このケースでは、**Modbus TCP/IPプロトコル**をサポートするSiemens LOGO PLCを使用します。reTerminal DMをイーサネットポートとModbus TCP対応デバイスで接続してください。

### ソフトウェアの準備

[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/)を用意しています。このwikiに進む前に、このガイドを確認することをお勧めします。

### Modbus TCP/IP用のイーサネット設定の構成

PLC/デバイスのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- **ステップ01**: 以下のコマンドを実行してください：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ 02**: 次に、PLC/デバイスのネットワークドメインに応じてイーサネットポートの設定を構成し、**metric** コマンドを使用して優先度を設定します。最も低いメトリック値が最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG" /></center>

## Modbus ノードのインストール

Modbus ノードをインストールするには、以下の手順に従ってください：

**ステップ 1.** 右上角にある**三本線**アイコンで示される設定ボタンをクリックし、**パレットの管理**を選択します。

**ステップ 2.** パレットタブで、**インストールタブ**に移動します。

**ステップ 3.** ノード検索バーを使用して、目的の[Modbus ノード](https://flows.nodered.org/node/node-red-contrib-modbus)を見つけます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/pallet.PNG" /></center>

**ステップ 4.** ノードの横にある**インストール**ボタンをクリックします。

**ステップ 5.** プロンプトが表示された場合、ドロップダウン警告ウィンドウから**インストール**ボタンをクリックしてインストールを確認します。

**ステップ 6.** インストールプロセスが完了するまで待ちます。完了すると、**インストール**ボタンが**インストール済み**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbus アドレスの識別

正しいModbusアドレスを識別することは重要なステップです。**入力、出力、保持レジスタを含むModbusアドレスの詳細情報については、PLCまたはデバイスメーカーのデータシートを参照することを推奨します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

この情報に基づいて、タグ設定でModbusアドレスを調整できます。例えば、データシートで出力コイルQ1が8193としてリストされている場合、Node-REDでアドレスを8192として設定する必要があります（**元のアドレスから1を減算**）。同様に、ネットワーク入力が1としてリストされ、それがコイルタイプの場合、Node-REDでアドレスを0に設定する必要があります。

## Modbus-Writeノードの設定

**ステップ 1**. Modbus-Writeノードをワークスペースに**ドラッグアンドドロップ**し、ノードを**ダブルクリック**して設定を開きます。

**ステップ 2**. **サーバー**タブで、以下の詳細を入力してデバイスを追加するために編集します：

- **名前**: サーバー名
- **タイプ**: TCP
- **ホスト**: ModbusサーバーのIPアドレス
- **ポート**: Modbusサーバーのポートアドレス（通常502）
- **Unit-Id**: 255（Unit-IDはModbusネットワーク内の個々のデバイスを識別するために使用され、特に複数のデバイスが同じ通信ラインを共有する場合に使用されます）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ 3**. **ノードに適切な名前を付けます**。例えば、「Network IP 1」。このデモでは、PLCプログラムのネットワーク入力を制御しています。

**ステップ 4**. **FCオプション**を**FC 5: Force Single Coil**に設定します。

**ステップ 5**. **アドレスを0に設定**します（入力0をアドレス指定しているため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ 6**. injectノードを使用して、ブール値を注入できます。ここでは、その目的のためにいくつかのinjectノードを使用します。

全体的な手順は以下のように実演できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## Modbus-Responseノードの設定

**Modbus-Responseノード**は、Modbus Read/Writeノードの応答を表示するために使用されます。

**ステップ1**. Modbus-Responseノードをフローに**ドラッグアンドドロップ**します。

**ステップ2**. **Modbus Read**ノードと接続します。応答はModbus-Responseノードの下に数値の配列を表示します。これらの数値は各デジタル出力のカウントを表します。

**ステップ3**. 検査目的で**Debugノードをドラッグアンドドロップ**します。次に**Modbus Read**ノードと接続します。

これらのステップに従うことで、Modbus TCPデバイスからレジスタ/コイルの値を効果的に読み取り、表示することができます。

全体的なステップは以下のように実演できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
