---
description: Edge Box RPi 200 と Node-RED を使用して Modbus RTU 通信を設定および構成する方法を学びます。このガイドでは、Modbus ノードのインストール、Modbus getter とサーバーの構成、温度と湿度データを抽出するための関数ブロックの使用について説明します。手順に従って、Modbus RTU デバイスを産業用 IoT 設定にシームレスに統合してください。効率的なプロセスの監視と制御を簡単に実現できます。

title: Edge Box RPi 200 と Node-RED および Modbus RS485
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

Modbus RTU（リモートターミナルユニット）は、センサーやコントローラーなどのデバイスをシリアル通信ラインで接続するための産業オートメーションにおいて人気のあるプロトコルです。そのシンプルさと信頼性で知られ、産業プロセスの監視と制御に広く使用されています。Raspberry Pi をベースにした産業用 IoT ゲートウェイである Edge Box RPi 200 は、Modbus RTU デバイスを最新のネットワークに統合することを可能にします。この Wiki では、Node-RED を使用して Edge Box RPi 200 で Modbus RTU 通信を設定する方法を案内します。エネルギー管理、環境モニタリング、プロセス制御などのアプリケーションを強調しています。このリソースは、さまざまな産業シナリオで Modbus RTU を活用するための迅速で実用的なアプローチを提供します。

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

### ソフトウェアの準備

Edge Box は Raspberry Pi OS がプリインストールされた状態で手元に届きます。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) をお読みください。また、[Node-RED の Getting Started Guide](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/) を準備しています。このガイドを確認してから Wiki に進むことをお勧めします。このチュートリアルでは、YABE 室温シミュレーターを実行しているホスト PC を Edge Box 上で実行されている Node-RED に接続します。

### RS485
Edge Box RPi 200 には RS-485 ポートが 1 つあります。詳細は [こちら](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/#serial-ports--rs232-and-rs485) をご覧ください。Node-RED を操作する前に、デバイスを正しく配線する必要があります。

## Modbusノードのインストール

Modbusノードをインストールするには、Edge BoxでNode-REDを起動します。通常、ウェブブラウザを開き、`http://<your-edgebox-ip>:1880`にアクセスすることで利用できます。以下の手順に従ってください：

**ステップ1.** 右上隅にある**三本線アイコン**で示される設定ボタンをクリックし、**Manage palette**を選択します。

**ステップ2.** パレットタブで、**Installタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を見つけます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**Install**ボタンをクリックします。

**ステップ5.** プロンプトが表示された場合は、警告ウィンドウのドロップダウンから**Install**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するのを待ちます。完了すると、**Install**ボタンが**Installed**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。入力、出力、および保持レジスタを含むModbusアドレスに関する詳細情報については、PLC、デバイス、またはセンサーのメーカーのデータシートを参照することをお勧めします。

ここでは、SHT20 RS485温度センサーを使用します。このセンサーはRS485ハードウェアインターフェース（雷保護設計付き）を使用し、プロトコル層は標準的な産業用Modbus-Rtuプロトコルと互換性があります。データシートを調べると、温度と湿度データを提供する入力レジスタが見つかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600, 
height:'auto'}}/></div>

## デバイスからデータを取得する

必要なノード: `Modbus Getter`、2つの`Function`ノード、2つの`Debug`ノード、`Modbus Response`。

これらのノードをドラッグ＆ドロップし、以下の順序で接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### Modbus Getterノードの設定

1. **Modbus Getter**ノードをダブルクリックします。
2. **Unit ID**を`1`に設定します。
3. **FC**を`FC4: Read Input Registers`に設定します。
4. **Address**を`1`に設定します（シミュレーションデバイスのデータシートで提供されている値）。
5. **Quantity**を`2`に設定します（2つのブロックを読み取るため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600, 
height:'auto'}}/></div>

### Modbusサーバーの設定

1. **Server**セクションで、鉛筆ボタンをクリックして新しいサーバー設定を作成します。
2. サーバーに名前を付けます。
3. **Type**を`Serial Expert`に設定します。
4. **Serial Port**を`/dev/ttyACM0`に設定します。
5. **Serial Type**を`RTU`に設定します。
6. 他の設定はそのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### Functionブロックの設定

Functionブロックを使用して、関連する温度と湿度の値を抽出します。Getterノードの出力は、整数部と小数部を含む10進数であるため、基本的な数学を使用して調整する必要があります。

#### 温度の場合
```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

#### 湿度の場合
```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

### デプロイ

**Deploy**ボタンを押します。デバッグウィンドウに湿度と温度の値が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800, 
height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>