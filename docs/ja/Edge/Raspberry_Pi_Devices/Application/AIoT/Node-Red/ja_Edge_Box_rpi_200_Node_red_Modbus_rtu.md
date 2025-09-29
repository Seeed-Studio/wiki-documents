---
description: Edge Box RPi 200とNode-REDを使用してModbus RTU通信を設定・構成する方法を学びます。このガイドでは、Modbusノードのインストール、Modbusゲッターとサーバーの構成、温度・湿度データを抽出するためのファンクションブロックの使用について説明します。ステップバイステップの手順に従って、Modbus RTUデバイスを産業用IoTセットアップとシームレスに統合できます。プロセスの効率的な監視と制御を簡単に実現します。

title: Edge Box RPi 200とNode RedおよびModbus RS485
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 06/07/2024
  author: Kasun Thushara
---

## はじめに

Modbus RTU（Remote Terminal Unit）は、センサーやコントローラーなどのデバイスをシリアル通信回線で接続するための産業オートメーションで人気のプロトコルです。シンプルさと信頼性で知られ、産業プロセスの監視と制御に広く使用されています。Edge Box RPi 200は、Raspberry Piベースの産業用IoTゲートウェイで、Modbus RTUデバイスを最新のネットワークと統合することを可能にします。フローベースの開発ツールであるNode-REDを使用して、このwikiはEdge Box RPi 200でModbus RTU通信を設定するためのガイドをユーザーに提供します。エネルギー管理、環境監視、プロセス制御などのアプリケーションを紹介しています。このリソースは、さまざまな産業シナリオでModbus RTUを活用するための迅速で実用的なアプローチを提供します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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

### ソフトウェアの準備

Edge Boxは、Raspberry Pi OSがプリインストールされた状態でお手元に届きます。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/)をお読みください。[Node-REDのGetting Startedガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)も用意しています。このwikiを進める前に、このガイドを確認することをお勧めします。このチュートリアルでは、YABE室温シミュレーターを実行するホストPCと、Edge Box上で動作するNode-REDを接続します。

### RS485

Edge Box RPi 200には、1つのRS-485ポートがあります。詳細は[こちら](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/#serial-ports--rs232-and-rs485)で確認できます。Node-REDで作業する前に、デバイスを適切に配線する必要があります。

## Modbusノードのインストール

Modbusノードをインストールするには、Edge BoxでNode-REDを起動します。通常、Webブラウザを開いて`http://<your-edgebox-ip>:1880`にアクセスできます。以下の手順に従ってください：

**ステップ1.** 右上角にある**三本線**アイコンで示される設定ボタンをクリックし、**Manage palette**を選択します。

**ステップ2.** パレットタブで、**Installタブ**に移動します。

**ステップ3.** ノード検索バーを使用して、目的の[Modbusノード](https://flows.nodered.org/node/node-red-contrib-modbus)を見つけます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**ステップ4.** ノードの横にある**Install**ボタンをクリックします。

**ステップ5.** プロンプトが表示されたら、ドロップダウン警告ウィンドウから**Install**ボタンをクリックしてインストールを確認します。

**ステップ6.** インストールプロセスが完了するまで待ちます。完了すると、**Install**ボタンが**Installed**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Modbusアドレスの特定

正しいModbusアドレスを特定することは重要なステップです。入力、出力、保持レジスタを含むModbusアドレスの詳細情報については、PLC、デバイス、またはセンサーメーカーのデータシートを参照することをお勧めします。

ここでは、SHT20 RS485温度センサーを使用します。RS485ハードウェアインターface（雷保護設計付き）を使用し、プロトコル層は標準産業用Modbus-Rtuプロトコルと互換性があります。データシートを調べると、温度と湿度データを提供する入力レジスタを見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600,
height:'auto'}}/></div>

## デバイスからのデータ取得

必要なノード：`Modbus Getter`、2つの`Function`ノード、2つの`Debug`ノード、`Modbus Response`。

これらのノードをドラッグ&ドロップし、以下の方法/順序で接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Modbus Getterノードの設定

1. **Modbus Getter**ノードをダブルクリックします。
2. **Unit ID**を`1`に設定します。
3. **FC**を`FC4: Read Input Registers`に設定します。
4. **Address**を`1`に設定します（シミュレーションデバイスのデータシートで提供されている通り）。
5. **Quantity**を`2`に設定します（2つのブロックを読み取るため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600,
height:'auto'}}/></div>

### Modbusサーバーの設定

1. **Server**セクションで、鉛筆ボタンをクリックして新しいサーバー設定を作成します。
2. サーバーに名前を付けます。
3. **Type**を`Serial Expert`に設定します。
4. **Serial Port**を`/dev/ttyACM0`に設定します。
5. **Serial Type**を`RTU`に設定します。
6. その他の設定はそのままにしておきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Functionブロックの設定

関連する温度と湿度の値を抽出するためにfunctionブロックを使用します。getterノードの出力は整数部と浮動小数点部の両方を含む10進数なので、基本的な数学を使用して調整する必要があります。

#### 温度用

```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

#### 湿度について

```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

### デプロイ

**Deploy** ボタンを押してください。デバッグウィンドウで湿度と温度の値が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800,
height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
