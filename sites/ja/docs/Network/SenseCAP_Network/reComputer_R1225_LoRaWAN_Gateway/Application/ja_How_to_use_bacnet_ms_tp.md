---
description: この記事では主に、reComputer R1225 上で bacnet MS/TP プロトコルの機能テストを実行する方法を紹介します。
title: R1225 で bacnet MS/TP を使用する方法
keywords:
  - ゲートウェイ
  - SenseCAP
  - エッジコントローラ
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_bacnet_ms_tp_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/17/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/ja/how_to_use_bacnet_ms_tp_with_r1225/
updatedAt: '2026-04-30'
---

## はじめに

BACnet MS/TP（Master-Slave/Token Passing）は、ビルオートメーションおよび制御ネットワーク向けの通信プロトコルです。これは BACnet（Building Automation and Control Networks）プロトコルスイートの一部です。MS/TP は通常、RS-485 物理層とバストポロジを使用します。すべてのデバイスは同じツイストペアケーブルに接続されます。MS/TP ネットワークにはマスタ局とスレーブ局が存在します。マスタはトークンの生成と配布を担当し、スレーブは要求を受信したときのみ応答します。マスタデバイスはトークンを渡すことで、どのデバイスがデータを送信できるかを決定します。トークンパッシング機構により、バス上の通信は秩序立っており、競合が発生しないように保証されます。

この記事では主に、reComputer R1225 上で bacnet MS/TP プロトコルの機能テストを実行する方法を紹介します。reComputer R1225 上で bacnet MS/TP サーバをシミュレートし、その後 W10 PC 上の YABE を使用してデバイスが存在するかどうかを確認しました。シミュレートしたデバイスが正常に検出できれば、bacnet MS/TP 通信が正常であることを意味します。

## 準備

このプロジェクトを開始する前に、ここで説明するように、あらかじめハードウェアとソフトウェアを準備しておく必要があります。

### ハードウェアの準備

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### ソフトウェア

* bacnet MS/TP は RS485 物理層を使用するため、reComputer R1225 上で RS485 機能を使用する方法については、この [wiki](https://wiki.seeedstudio.com/ja/how_to_use_modbus_rs485_with_r1225/) を参照してください。
* `bacnet-stack` ライブラリアプリケーションを利用してサーバをシミュレートするため、以下のコマンドを入力してダウンロードする必要があります。

  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* この [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。
* この [link](https://www.wireshark.org/) にアクセスして、wireshark をダウンロードしてください。

### ハードウェア構成

RS485-USB 変換器を使用して、R1225 を Windows 10 PC に接続してテストを行います。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## bacnet mstp 通信機能をテストする手順

### 方法 1: コマンドラインインターフェース（CLI）の使用

**Step 1**: `bacnet-stack` をダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Step 2**: ポート番号を変更します

`bacnet-stack` のデフォルトシリアルポート番号は `/dev/ttyUSB0` です。実際に使用するポート番号がこれでない場合、通信はできないため、ポート番号を変更する必要があります。変更が必要なファイル名は `ports/ linux/rs485.c` です。これを使用するポート番号に変更します。ここでは `/dev/ttyAMA30` に変更しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Step 3**: 以下のコマンドを入力してコンパイルします。コンパイル結果は bin ディレクトリで確認できます。
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Step 4**: `bacserv` を実行し、`YABE` を使用してシミュレートしたデバイスを検索します。シミュレートしたデバイスが正常に検索されたことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Step 5**: wireshark を使用して bacnet MS/TP メッセージを確認します。シミュレートしたデバイスがトークンをパスしていることがわかります。バス上に他のデバイスがないため、トークンを渡し続けています。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

### 方法 2: グラフィカルユーザーインターフェース（GUI）の使用

#### RS485 パラメータ設定

[Quick Start](https://wiki.seeedstudio.com/ja/r1225_quick_start/) ガイドに従って、SenseCAP Gateway OS の Web インターフェースにアクセスします。

**Step 1**: Luci にログインします

ブラウザでデバイスの IP アドレスを入力して、Luci ページにアクセスします。
次に、デバイスのユーザー名とパスワードを入力してログインし、Login ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Step 2**: `RS485` - `Serial Settings` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

R1225 の 3 つの 485 チャネルすべてのパラメータ設定がここに統合されています。

まず、使用したいチャネル（CH1、CH2、CH3）を選択します。

次に、ボーレート、データビット、ストップビット、パリティ、フロー制御、読み取りタイムアウトなどのパラメータを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

#### BACnet MS/TP パラメータ設定

3 つの RS-485 ポートのパラメータ（デフォルト設定は「9600, 8, 1, N」）を構成した後、BACnet MS/TP の設定を続行できます。

**Step 3**: `RS485` - `Protocol Configuration` をクリックします

デバッグしたいチャネル（CH1、CH2、CH3）を選択します。

プロトコルステータスで「Enable」を選択し、プロトコルタイプで「BACnet MS/TP」を選択します。

有効化すると BACnet MS/TP の設定画面が表示されます。接続されているセンサーのデータシートに従って設定するだけです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet1.png" alt="pir" width={800} height="auto" /></p>

**Step 4**: BACnet MS/TP パラメータ設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet2.png" alt="pir" width={800} height="auto" /></p>

**Step 5**: `Save & Apply` をクリックします

設定が有効になったら、`Read Data` をクリックすると、`Frame Sata` に取得したデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet3.png" alt="pir" width={800} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
