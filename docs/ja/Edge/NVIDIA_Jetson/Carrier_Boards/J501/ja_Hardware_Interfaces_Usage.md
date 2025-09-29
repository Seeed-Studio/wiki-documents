---
description: J501キャリアボードのハードウェアとインターフェース使用方法
title: インターフェース使用方法
tags:
  - J501
  - Jetson
  - Interface
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/j501_carrier_board_interfaces_usage
last_update:
  date: 08/20/2024
  author: Youjiang
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

このwikiでは、J501キャリアボード上の様々なハードウェアとインターフェースについて、プロジェクトアイデアを拡張するための使用方法を紹介します。

## GMSLカメラ

GMSL機能を有効にするには、J501キャリアボードと[GMSL拡張ボード](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html)を組み合わせる必要があります。J501 GMSL拡張ボードは、NVIDIA® Jetson AGX Orin™と互換性のあるreServer Industrial J501キャリアボードに最大8台のGMSLカメラを接続するために設計されています。この拡張ボードはデシリアライザー「MAX96724」を使用しています。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### 対応カメラ

- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **ステップ1.** J501キャリアボードに銅製スタンドオフを取り付けます。
- **ステップ2.** GMSL拡張ボードをJ501キャリアボードに接続し、ネジで固定します。
- **ステップ3.** GMSLカメラを接続します。

### 使用方法

:::note
GMSL機能を有効にする前に、GMSL拡張ボードドライバーを含むJetPackバージョンがインストールされていることを確認してください。
:::

**ステップ1.** jetsonデバイスのターミナルで、以下のコマンドを入力して、接続されたカメラが正しく認識されているかを確認します。

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

**ステップ3.** シリアライザーとデシリアライザーのチャネル形式を設定します。

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
デバイスが再起動するたびに、シリアライザーとデシリアライザーのチャンネル形式を設定する必要があります。
:::

**ステップ4.** 以下のコマンドを使用して、カメラを素早く起動し、ビデオストリームを表示するウィンドウを開くことができます。

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

各イーサネットポートには2つのLED（緑と黄色）があります：

- 緑LED: 1000M/10Gネットワークに接続されている場合のみ点灯。
- 黄LED: ネットワークアクティビティステータスを表示。

## SATAコネクタ

reServer J501キャリアボードは2x SATA 2.5" HDD/SSDをサポートし、SATAデータコネクタと電源コネクタの両方を備えています。以下のようにHDD/SSDを接続できます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### 使用方法

Jetsonデバイスシステムが起動した後、`lsblk`で接続されたSATAドライブを確認できます。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>

## M.2 Key M

M.2 Key Mは高速ソリッドステートドライブ（SSD）用に設計されたインターフェースで、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

### サポートされているSSDは以下の通りです：

- [128GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 使用方法

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
テスト完了後は、`sudo rm tempfile` コマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key E

J501キャリアボードはM.2 Key Eインターフェースを搭載しており、これを通じてデバイスのBluetoothとWi-Fi機能を拡張できます。

Intel Dual Band Wireless-Ac 8265 w/Bluetooth 8265.NGWMGモジュールの使用を推奨します。

### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### 使用方法

Wi-Fiモジュールを取り付けてデバイスの電源を入れた後、デバイスのWi-FiとBluetoothの設定を構成できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

もちろん、以下のコマンドを使用してデバイスの動作状態を確認することもできます。

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

J501キャリアボードには、4Gおよび5GモジュールをサポートするM.2 Key Bコネクタが搭載されています。現在、**SIM8202G-M2 5Gモジュール**をテストしています。

### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  
## Mini PCIe

J501キャリアボードには、4GおよびLoRaモジュールをサポートするmini PCIeコネクタが搭載されています。ただし、4GモジュールまたはLoRaモジュールのいずれか一方のみを同時に接続できます。一部の4GモジュールにはGPS機能が組み込まれています。これについても説明します。

### 4Gモジュール

#### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>

- **ステップ1.** 20ピンヘッダーの**SIM_MUX_SEL**と**GND**ピンの間にジャンパーを追加します。

- **ステップ2.** 4GモジュールをminiPCIeスロットにスライドして挿入し、ネジで固定します。

- **ステップ3.** 4G対応のnano SIMカードをボード上のSIMカードスロットに挿入します。

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部のスプリングを作動させると、SIMがスロットから出てきます
:::

### 使用方法

**ステップ1.** minicomをインストールします：

```bash
sudo apt update
sudo apt install minicom -y
```

**ステップ2.** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話できるようにします：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ3.** Ctrl+Aを押してからEを押してローカルエコーをオンにします。

**ステップ4.** コマンド「AT」を入力してEnterを押します。「OK」という応答が表示されれば、4Gモジュールが正常に動作しています。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**ステップ5.** コマンド「ATI」を入力してモジュール情報を確認します。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

J501キャリアボードは4つのデジタル入力と4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されているため、電圧スパイクやその他の電気的外乱からメインボードを効果的に保護します。この同じコネクタには2つのCANインターフェースもあり、これについてはこのwikiで後述します。

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
      <th>V/A制限</th>
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
      <td rowSpan={4}>12V/ 合計20mA電流</td>
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
      <td rowSpan={4}>40V/ピンあたり40mA負荷</td>
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

- 12Vデジタル入力、グランド信号は**GND_DI**に接続する必要があります。

- デジタル出力、最大耐電圧40V、グランド信号は**GND_DO**に接続する必要があります。

- 標準差動信号を持つCANバス、グランド信号は**GND_ISO**に接続する必要があります。

:::

### DI接続概要

以下の図に従ってDIの接続を行うことができます。DI線に直列に抵抗を追加することをお勧めします。ここでは、DI1ピンに接続された4.7kΩ抵抗でテストしました。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### DIの使用方法

入力として検出されるためには、DI線に12Vの電圧を入力する必要があります。

**ステップ1.** 上記のようにDI1ピンに接続を行い、12Vを入力します。

**ステップ2.** 以下のようにDI1のGPIOを開きます：

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
DI/DOピン割り当てテーブルを参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンの場合、GPIO番号は444、BGA番号はPP.04です。
:::

**ステップ3.** 以下を実行してステータスを確認します：

```bash
cat value
```

0を出力する場合は12V入力があることを意味します。1を出力する場合は入力電圧がないことを意味します。

### DO の接続概要

以下の図に従ってDOの接続を行うことができます。DO線には直列に抵抗を追加することをお勧めします。ここでは4.7kΩ抵抗でテストしました。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### DO の使用方法

ここでは上記の図に示すように負荷を接続する必要があります。これをテストする最も簡単な方法は、マルチメーターがあればそれを接続するか、または最大40V未満の電圧を必要とする負荷を接続することです。

**ステップ1.** 上記のようにDO1ピンに接続を行い、最大40Vを入力します。

**ステップ2.** 以下のようにD01のGPIOを開きます：

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**ステップ3.** 以下を実行してピンをオンにします：

```bash
echo 1 > value
```

負荷がオンになっているか、マルチメーターが入力した電圧を出力している場合、テストは正常に機能しています。

### CAN

J501キャリアボードは、5MbpsでCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートする2つのCANインターフェースを搭載しています。CANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業および自動化アプリケーションにおいて信頼性の高い通信を確保します。120Ωの終端抵抗がデフォルトでインストールされており、GPIOを使用してこの抵抗をONおよびOFFに切り替えることができます。

:::note
CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号は**GND_ISO**ピンに接続する必要があります。
:::

### USB to CANアダプターとの接続概要

CANバスをテストしてインターフェースするには、以下に示すようにUSB to CANアダプターをボード上のCANコネクターに接続します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

ここでは、当社のBazaarで入手可能な[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)とUSBケーブルを使用しています。

### USB to CANアダプターでの使用方法

**ステップ1.** 使用しているUSB to CANアダプターのドライバーをメーカーのWebサイトからダウンロードしてインストールします。私たちの場合、使用したアダプターに応じて、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)で見つけることができます。

**ステップ2.** 一部のアダプターには、CANデバイスと通信するためのPC用の必要なソフトウェアも付属しています。私たちの場合、使用したアダプターに応じて、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました。

**ステップ3.** JetsonのCANインターフェースを初期化します。

Jetsonで**`can_init.sh`**という名前の新しいファイルを作成し、以下の内容を記述します：

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

次に、Jetson のターミナルウィンドウで、今作成したファイルを実行します：

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**ステップ4.** ターミナルでifconfigと入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**ステップ5.** 以前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに応じてインストールしたソフトウェアを開きます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**ステップ6.** USB to CANアダプターをPCに接続し、Windowsの検索バーで検索して**デバイスマネージャー**を開きます。接続されたアダプターが**ポート (COM & LPT)**の下に表示されます。ここに表示されているシリアルポートをメモしてください。下の画像によると、シリアルポートは**COM9**です。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**ステップ7.** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューをクリックして接続されたアダプターに応じてシリアルポートを選択します。**COM bps**はデフォルトのままにして、**Open**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**ステップ8.** **Mode**と**CAN bps**はデフォルトのままにし、**Type**を**Standard frame**に変更して**Set and Start**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**ステップ9.** reComputer Industrialで、以下のコマンドを実行してPCにCAN信号を送信します：

```sh
cansend can0 123#abcdabcd
```

ソフトウェアで受信した上記の信号が以下のように表示されます

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**ステップ10.** reComputer Industrialで、以下のコマンドを実行してPCからのCAN信号の受信を待機します：

```sh
candump can0 &
```

**ステップ11.** CANソフトウェアで、**Send a single frame**をクリックします：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

これで、以下のようにreComputer Industrialで受信されることが確認できます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
また、[こちら](https://wiki.seeedstudio.com/ja/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm)を参照して、J501キャリアボードとreTerminal DMの間でCANを介した通信を確立することもできます。
:::

## USB

reServer J501キャリアボードには合計5つのUSBポートがあります：USB 3.1 Type-Aポート3つ、USB 3.1 Type-Cポート1つ、デバッグ用USB 2.0 Type-Cポート1つです。

### 使用方法

Jetsonターミナルで`watch -n 1 lsusb -tv`を入力してUSBポートを調べることができます。USBデバイスが接続されると、そのポートの詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

さらに、[M.2 Key M](#m2-key-m)を参照してUSBストレージデバイスの読み書き速度をテストすることができます。

:::note
テスト前に、`cd`コマンドを使用してUSBストレージデバイスがマウントされているフォルダに移動してください。
:::

## RTC

J501キャリアボードはRTCインターフェースを搭載しており、システムの電源が切れている間でも正確な時刻を保持します。

### 接続方法

J501キャリアボードには、RTCバッテリーに接続する2つの異なる方法が装備されています。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTC socket">

以下に示すように、3V CR1220コイン電池をボード上のRTCソケットに接続します。バッテリーの**プラス（+）**端子が上向きになるようにしてください。

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST socket">

以下に示すように、JSTコネクタ付きの3V CR2302コイン電池をボード上の**2ピン 1.25mm** JSTソケットに接続します

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### 使用方法

**ステップ1.** 上記のようにRTCバッテリーを接続します。

**ステップ2.** J501の電源を入れます。

**ステップ3.** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブルでネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

**ステップ4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します：

```bash
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません：

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**ステップ5.** 以下のコマンドを入力して、ハードウェアクロック時刻を現在のシステムクロック時刻に変更します：

```bash
sudo hwclock --systohc
```

**ステップ6.** インターネットから時刻を取得しないようにするため、接続されているイーサネットケーブルをすべて取り外し、ボードを再起動してください：

```bash
sudo reboot
```

**ステップ7.** ハードウェアクロック時刻を確認して、デバイスの電源がオフになっても日付/時刻が同じままであることを確認します。

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

**ステップ8.** お好みのテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは**vi**テキストエディタを使用します

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**ステップ9.** **i**を押して**挿入モード**に入り、ファイル内に以下の内容をコピー＆ペーストします：

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**ステップ10.** スクリプトを実行可能にする。

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

**ステップ14.** 新しく作成したサービスを起動時に開始するように有効化し、サービスを開始します：

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**ステップ15.** スクリプトがsystemdサービスとして起動し、実行されていることを確認します：

```bash
sudo systemctl status hwtosys.service
```

**ステップ16** ボードを再起動すると、システムクロックがハードウェアクロックと同期されていることが確認できます。

## ファン

J501ボードのオンボードファンインターフェースは、nvfancontrolデーモンによって管理されており、Jetsonモジュールの動作状況に基づいてファン速度を適応的に調整します。設定ファイル `/etc/nvfancontrol.conf` を通じてデーモンの動作モードを設定できます。

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

さらに、jtopツールを使用してファン速度を手動で設定することもできます。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI

J501にはHDMI 2.1 Type Aポートが搭載されており、7680x4320の解像度をサポートしています。これにより、超高精細ビデオ出力が可能です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
