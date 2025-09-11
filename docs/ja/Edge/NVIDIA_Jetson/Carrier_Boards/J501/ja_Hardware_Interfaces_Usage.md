---
description: J501キャリアボードのハードウェアおよびインターフェースの使用方法
title: インターフェースの使用方法
tags:
  - J501
  - Jetson
  - インターフェース
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/j501_carrier_board_interfaces_usage
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

このWikiでは、J501キャリアボード上のさまざまなハードウェアおよびインターフェースと、それらを使用してプロジェクトアイデアを拡張する方法を紹介します。

## GMSLカメラ

J501キャリアボードと[GMSL拡張ボード](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html)を組み合わせて、GMSL機能を有効化する必要があります。J501 GMSL拡張ボードは、NVIDIA® Jetson AGX Orin™と互換性があり、reServer Industrial J501キャリアボードに最大8台のGMSLカメラを接続するために設計されています。この拡張ボードはデシリアライザ「MAX96724」を使用しています。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### 対応カメラ
- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **ステップ1.** J501キャリアボードに銅製シリンダーを取り付けます。
- **ステップ2.** GMSL拡張ボードをJ501キャリアボードに接続し、ネジで固定します。
- **ステップ3.** GMSLカメラを接続します。

### 使用手順

:::note
GMSL機能を有効化する前に、GMSL拡張ボードドライバを含むJetPackバージョンをインストールしていることを確認してください。
:::

**ステップ1.** Jetsonデバイスのターミナルで以下のコマンドを入力し、接続されたカメラが正しく認識されているか確認します。

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**ステップ2.** ビデオインターフェース設定ツールをインストールします。

```bash
sudo apt install v4l-utils
```

**ステップ3.** シリアライザおよびデシリアライザのチャンネルフォーマットを設定します。

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

:::note
デバイスが再起動するたびに、シリアライザおよびデシリアライザのチャンネルフォーマットを設定する必要があります。
:::

**ステップ4.** 以下のコマンドを使用してカメラをすばやく起動し、ビデオストリームを表示するウィンドウを開くことができます。

```bash
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_result.png"/>
</div>

## ギガビットイーサネットコネクタ

J501には2つのイーサネットポートがあります。
- eth0: 10/100/1000Mbps仕様の標準ギガビットイーサネットポート。
- eth1: 10ギガビットイーサネットポート。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

各イーサネットポートには2つのLED（緑と黄色）が付いています：
- 緑のLED: 1000M/10Gネットワークに接続されている場合のみ点灯。
- 黄色のLED: ネットワークのアクティビティステータスを表示。

## SATAコネクタ

reServer J501キャリアボードは2つのSATA 2.5インチHDD/SSDをサポートしており、SATAデータおよび電源コネクタが付属しています。以下の手順でHDD/SSDを接続できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### 使用手順
Jetsonデバイスのシステムが起動した後、`lsblk`コマンドを使用して接続されたSATAドライブを確認できます。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>

## M.2 Key M

M.2 Key Mは、高速なソリッドステートドライブ（SSD）向けに設計されたインターフェースで、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

### 対応するSSDは以下の通りです：
- [128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 使用手順

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
テスト完了後、キャッシュファイルを削除するために`sudo rm tempfile`コマンドを実行してください。
:::

## M.2 Key E

J501キャリアボードにはM.2 Key Eインターフェースが搭載されており、これを使用してデバイスのBluetoothおよびWi-Fi機能を拡張できます。

Intel Dual Band Wireless-Ac 8265 w/Bluetooth 8265.NGWMGモジュールの使用を推奨します。

### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### 使用手順

Wi-Fiモジュールをインストールしてデバイスの電源を入れた後、デバイスのWi-FiおよびBluetooth設定を構成できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

もちろん、以下のコマンドを使用してデバイスの動作状況を確認することもできます。
```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Key B

J501キャリアボードには、4Gおよび5GモジュールをサポートするM.2 Key Bコネクタが搭載されています。現在、**SIM8202G-M2 5Gモジュール**をテスト済みです。

### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  

## Mini PCIe

J501キャリアボードには、4GおよびLoRaモジュールをサポートするmini PCIeコネクタが搭載されています。ただし、4GモジュールまたはLoRaモジュールのいずれか一方のみを接続できます。一部の4GモジュールにはGPS機能が組み込まれています。この点についても説明します。

### 4Gモジュール

#### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>


- **ステップ1.** 20ピンヘッダーの**SIM_MUX_SEL**ピンと**GND**ピンの間にジャンパーを追加します。

- **ステップ2.** 4Gモジュールをmini PCIeスロットに挿入し、ネジで固定します。

- **ステップ3.** 4G対応のnano SIMカードをボードのSIMカードスロットに挿入します。

:::note
SIMカードを取り外す場合は、カードを押し込んで内部のスプリングを作動させ、スロットからカードを取り出します。
:::

### 使用手順

**ステップ1.** minicomをインストールします：

```bash
sudo apt update
sudo apt install minicom -y
```

**ステップ2.** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話します：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ3.** Ctrl+Aを押してからEを押し、ローカルエコーをオンにします。

**ステップ4.** コマンド「AT」を入力してEnterを押します。「OK」という応答が表示された場合、4Gモジュールは正常に動作しています。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**ステップ5.** コマンド「ATI」を入力してモジュール情報を確認します。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

J501キャリアボードは、4つのデジタル入力チャネルと4つのデジタル出力チャネルをサポートしており、すべて光学的に絶縁されています。これにより、メインボードを電圧スパイクやその他の電気的な障害から効果的に保護します。また、このコネクタには2つのCANインターフェースも含まれており、これについては後ほど説明します。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th>ラベル名</th>
      <th>回路図信号</th>
      <th>モジュールピン番号</th>
      <th>BGA番号</th>
      <th>GPIO番号</th>
      <th>電圧/電流制限</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>入力</td>
      <td>DI1</td>
      <td>DI_12V_1/DI_1_GPIO17</td>
      <td>A54</td>
      <td>PP.04</td>
      <td>444</td>
      <td rowSpan={4}>12V/ 合計20mA</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_12V_2/DI_2_GPIO18</td>
      <td>C55</td>
      <td>PQ.04</td>
      <td>452</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_12V_3/DI_3_GPIO19</td>
      <td>K56</td>
      <td>PN.02</td>
      <td>434</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_12V_4/DI_4_GPIO33</td>
      <td>C54</td>
      <td>PM.07</td>
      <td>431</td>
    </tr>
    <tr>
      <td rowSpan={4}>出力</td>
      <td>DO1</td>
      <td>DO_40V_1/DI_1_GPIO</td>
      <td>E59</td>
      <td>PAA.04</td>
      <td>320</td>
      <td rowSpan={4}>40V/ 各ピン40mA</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_40V_2/DI_2_GPIO</td>
      <td>F59</td>
      <td>PAA.07</td>
      <td>323</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_40V_3/DI_3_GPIO</td>
      <td>B62</td>
      <td>PBB.01</td>
      <td>325</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_40V_4/DI_4_GPIO</td>
      <td>C61</td>
      <td>PBB.00</td>
      <td>324</td>
    </tr>
  </tbody>
</table>

:::note
- 12Vデジタル入力の場合、グランド信号は**GND_DI**に接続する必要があります。

- デジタル出力の場合、最大耐圧は40Vで、グランド信号は**GND_DO**に接続する必要があります。

- CANバスは標準的な差動信号を使用し、グランド信号は**GND_ISO**に接続する必要があります。
:::

### DIの接続概要

以下の図に従ってDIの接続を行います。DIラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗をDI1ピンに接続してテストしました。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### DIの使用手順

DIラインに12Vの電圧を入力することで、入力として検出されます。

**ステップ1.** 上記の図に従ってDI1ピンに接続し、12Vを入力します。

**ステップ2.** DI1のGPIOを以下のように開きます：

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
DI/DOピン割り当て表を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンのGPIO番号は444、BGA番号はPP.04です。
:::

**ステップ3.** 状態を確認するには以下を実行します：

```bash
cat value
```

出力が0の場合、12Vの入力があります。出力が1の場合、入力電圧がありません。


### DOの接続概要 

以下の図に従ってDOの接続を行います。DOラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗を使用してテストしました。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### DOの使用手順 

ここでは、上記の図に示されているように負荷を接続する必要があります。最も簡単なテスト方法は、マルチメーターを接続することです。または、最大40V以下の電圧を必要とする負荷を接続します。

**ステップ1.** 上記の図に従ってDO1ピンに接続し、最大40Vを入力します。

**ステップ2.** DO1のGPIOを以下のように開きます：

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**ステップ3.** ピンをオンにするには以下を実行します：

```bash
echo 1 > value
```

負荷がオンになるか、マルチメーターが入力した電圧を出力する場合、テストは正常に機能しています。

### CAN

J501キャリアボードは、5MbpsのCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートする2つのCANインターフェースを備えています。CANインターフェースは容量性絶縁を使用しており、優れたEMI保護を提供し、産業および自動化アプリケーションでの信頼性の高い通信を保証します。デフォルトで120Ωの終端抵抗がインストールされており、この抵抗はGPIOを使用してONとOFFを切り替えることができます。

:::note
CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号は**GND_ISO**ピンに接続する必要があります。
:::

### USB to CANアダプターを使用した接続概要

CANバスをテストおよびインターフェースするには、以下の図のようにUSB to CANアダプターをボードのCANコネクタに接続します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

ここでは、[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)とBazaarで入手可能なUSBケーブルを使用しています。

### USB to CANアダプターを使用した使用手順

**ステップ1.** 使用しているUSB to CANアダプターのドライバーをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)から入手できます。

**ステップ2.** 一部のアダプターには、CANデバイスと通信するためのPC用ソフトウェアが付属しています。今回使用したアダプターの場合、必要なソフトウェアは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)からダウンロードしてインストールしました。

**ステップ3.** JetsonのCANインターフェースを初期化します。

Jetsonで**`can_init.sh`**という名前の新しいファイルを作成し、以下の内容を書き込みます：

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up
```

次に、Jetsonのターミナルウィンドウで作成したファイルを実行します：

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**ステップ4.** ターミナルで`ifconfig`を入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**ステップ5.** 以前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに応じてインストールしたソフトウェアを開きます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**ステップ6.** USB to CANアダプターをPCに接続し、Windowsの検索バーで「デバイスマネージャー」を検索して開きます。ここで、**ポート（COM & LPT）**の下に接続されたアダプターが表示されます。以下の画像によると、シリアルポートは**COM9**です。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**ステップ7.** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューをクリックして接続されたアダプターに応じたシリアルポートを選択します。**COM bps**はデフォルトのままにして**Open**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**ステップ8.** **Mode**と**CAN bps**はデフォルトのままにして、**Type**を**Standard frame**に変更し、**Set and Start**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**ステップ9.** reComputer Industrialで以下のコマンドを実行してPCにCAN信号を送信します：

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにソフトウェアで信号が受信されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**ステップ10.** reComputer Industrialで以下のコマンドを実行してPCからのCAN信号を受信待機します：

```sh
candump can0 &
```

**ステップ11.** CANソフトウェアで**Send a single frame**をクリックします：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

すると、以下のようにreComputer Industrialで受信されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
J501キャリアボードとreTerminal DM間でCANを介して通信を確立する方法については、[こちら](https://wiki.seeedstudio.com/ja/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm)を参照してください。
:::

## USB

reServer J501キャリアボードには合計5つのUSBポートがあります：3つのUSB 3.1 Type-Aポート、1つのUSB 3.1 Type-Cポート、そしてデバッグ用の1つのUSB 2.0 Type-Cポートです。

### 使用手順

Jetsonのターミナルで以下のコマンドを入力してUSBポートを調査できます：

```bash
watch -n 1 lsusb -tv
```

USBデバイスを接続すると、そのポートに関する詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

さらに、USBストレージデバイスの読み書き速度をテストするには、[M.2 Key M](#m2-key-m)を参照してください。

:::note
テストを行う前に、`cd`コマンドを使用してUSBストレージデバイスがマウントされているフォルダに移動してください。
:::


## RTC

J501キャリアボードにはRTCインターフェースが搭載されており、システムが電源オフの状態でも正確な時刻を保持できます。

### 接続方法

J501キャリアボードには、RTCバッテリーを接続するための2つの異なる方法が用意されています。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTCソケット">


3V CR1220コイン型電池を以下の図のようにボード上のRTCソケットに接続します。電池の**プラス（+）**端が上向きになるようにしてください。

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JSTソケット">

JSTコネクタ付きの3V CR2302コイン型電池を以下の図のようにボード上の**2ピン1.25mm** JSTソケットに接続します。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### 使用手順

**ステップ1.** 上記の方法でRTCバッテリーを接続します。

**ステップ2.** J501を起動します。

**ステップ3.** Ubuntuデスクトップで、右上のドロップダウンメニューをクリックし、`設定 > 日付と時刻`に移動します。Ethernetケーブルを使用してネットワークに接続し、**自動日付と時刻**を選択して日付/時刻を自動的に取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Ethernet経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

**ステップ4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します：

```bash
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません：

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**ステップ5.** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します：

```bash
sudo hwclock --systohc
```

**ステップ6.** Ethernetケーブルを取り外し、インターネットから時刻を取得しないようにしてからボードを再起動します：

```bash
sudo reboot
```

**ステップ7.** ハードウェアクロックの時刻を確認し、デバイスの電源がオフになっても日付/時刻が保持されていることを確認します。

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

**ステップ8.** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは**vi**テキストエディタを使用します：

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**ステップ9.** **i**キーを押して**挿入モード**に入り、以下の内容をファイル内にコピー＆ペーストします：

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**ステップ10.** スクリプトを実行可能にします：

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**ステップ11.** systemdファイルを作成します：

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```

**ステップ12.** ファイル内に以下を追加します：

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**ステップ13.** systemctlデーモンをリロードします：

```bash
sudo systemctl daemon-reload 
```

**ステップ14.** 作成したサービスを起動時に有効化し、サービスを開始します：

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**ステップ15.** スクリプトがsystemdサービスとして正常に動作していることを確認します：

```bash
sudo systemctl status hwtosys.service
```

**ステップ16.** ボードを再起動し、システムクロックがハードウェアクロックと同期していることを確認します。

## ファン

J501ボードのオンボードファンインターフェースは、`nvfancontrol`デーモンによって管理されており、Jetsonモジュールの動作状況に基づいてファン速度を適応的に調整します。このデーモンの動作モードは、設定ファイル `/etc/nvfancontrol.conf` を通じて構成できます。

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

さらに、`jtop`ツールを使用してファン速度を手動で設定することも可能です。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI 
J501はHDMI 2.1 Type Aポートを備えており、7680x4320の解像度をサポートしています。これにより、超高精細なビデオ出力が可能です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>