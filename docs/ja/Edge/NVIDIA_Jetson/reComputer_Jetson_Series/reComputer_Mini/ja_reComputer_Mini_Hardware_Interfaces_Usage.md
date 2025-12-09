---
description: この記事では、reComputer Mini J40シリーズのハードウェアとインターフェースについて説明します。電源、ディスプレイ、Wi-FiとSSD用のM.2スロット、USBポート、RTC、ファン管理などが含まれます。ユーザーがプロジェクトを拡張するためのセットアップ手順とパフォーマンステストのヒントを提供します。
title: reComputer Mini ハードウェアとインターフェースの使用方法
tags:
  - reComputer
  - reComputer mini
  - embedded computer
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /ja/recomputer_jetson_mini_hardware_interfaces_usage
last_update:
  date: 12/16/2024
  author: Youjiang
---

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>

このwikiでは、reComputer mini J40シリーズの様々なハードウェアとインターフェース、およびそれらを使用してプロジェクトのアイデアを拡張する方法について紹介します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱</font></span></strong>
    </a>
</div>

## ハードウェアインターフェース概要

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>
</div>

## 電源

reComputer Miniには**12-54V (XT30)**電源インターフェースが搭載されており、幅広い電圧入力範囲（12Vから54V）に対応しているため、様々な電源供給環境に適しています。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>

## ディスプレイ

この製品には、Host + DP（DisplayPort）機能を備えたType-Cポートが搭載されています。これは、データ転送をサポートするだけでなく、このポートを介してモニターを接続し、高品質なビデオ出力を可能にします。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>

## WIFI とBluetoothのためのM.2 Key E

reComputer MiniにはM.2 Key Eインターフェースが搭載されており、これを通じてデバイスのBluetoothとWi-Fi機能を拡張できます。

Intel Dual Band RTL8822CE Wireless NICの使用を推奨します。

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
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

## M.2 SSDのキーM

M.2 Key Mは高速ソリッドステートドライブ（SSD）用に設計されたインターフェースで、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

reComputer Industrialには、x4 PCIe Gen3のM.2 Key Mスロットに接続された128GBの産業グレードSSDが標準で含まれており、JetPackシステムがプリインストールされています。

### ハードウェア接続

付属のSSDを取り外して新しいものを取り付けたい場合は、お使いのSSDが以下の2つの条件を満たしていることを確認する必要があります：

- **x4 PCIe Gen3のM.2 Key Mスロット**インターフェースをサポートしている。
- **2242**サイズ仕様に準拠している。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

### 使用方法

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
テスト完了後、`sudo rm tempfile` コマンドを実行してキャッシュファイルを削除してください。
:::

## Ethernet

### ハードウェア接続

reComputer Miniは拡張ボード上に**RJ45ギガビットEthernetポート（10/100/1000M）**を搭載しています。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_photo.png"/>
</div>

### 使用方法

ターミナルで`ifconfig`と入力すると、Ethernetインターフェースにマッピングされたデバイス名が`eth0`であることが確認できます：
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_ifconfig.png"/>
</div>

ギガビットEthernet RJ45ケーブルを使用して**reComputer Mini**を**PC**に接続します。`iperf`ツールを使用して、Ethernetインターフェースの伝送速度を簡単にテストできます。
ターミナルを開き、**PC**と**reComputer Mini**の両方に`iperf3`をインストールします。

```bash
sudo apt update
sudo apt install iperf3
```

PCでターミナルを開き、`iperf3 -s`と入力します。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/iperf3PC.jpg"/>
</div>

次に、**reComputer Mini**でターミナルを開き、`iperf3 -c <あなたのPCのIP>`と入力します。
この場合、私のPCのネットワークインターフェースのIPアドレスは`192.168.12.211`です。コマンド例は以下の通りです：

```bash
iperf3 -c 192.168.12.211
```

次に、下図に示す結果に基づいて、reComputer MiniのEthernet伝送速度がギガビットレベルに達することがわかります。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/networkspeed.jpg"/>
</div>

## USB

### ハードウェア接続

reComputer Miniキャリアボードには合計4つのUSBポートがあります：USB 3.2 Type-Aポート2つ、フラッシュ用USB 2.0 Micro-Bポート1つ、USB 2.0 GH1.25ポート1つです。そして拡張ボードにはUSB 3.0 Type-Aポート4つがあります。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBshow.jpg"/>
</div>

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、**USB 2.0** 5ピンGH-1.25インターフェースの配線図を以下のように確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb2.0-datasheet.png"/>
</div>

USB 3.2/USB 2.0/USB 3.0経由でストレージデバイスをreComputer miniに接続し、USBの読み書き速度をテストするために、以下の手順を参照できます。**使用方法**では次のステップを表示します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBLINK.jpg"/>
</div>

### 使用方法

Jetsonターミナルで`watch -n 1 lsusb -tv`を入力してUSBポートを検出できます。USBデバイスが接続されると、そのポートの詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

USB 3.2/USB 2.0/USB 3.0経由でストレージデバイスを接続した後、ターミナルで以下のコマンドを入力してストレージデバイスによってマップされたパーティションを表示します：

```bash
ls /dev/sd*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/sda1.png"/>
</div>

**/dev/sda1** は、USB経由で接続されたストレージデバイスによってマップされたパーティションです。複数のデバイスが挿入されている場合、異なるマップされたパーティション名を持つ可能性があります。例：**/dev/sdb1**。

**GitHub** からテストプログラムをプルして実行し、USBの書き込み速度と読み取り速度を測定します。プログラムは **1GB** の一時データを書き込み、その後読み取りを行います。このデータはテスト完了後に削除されます。
`sudo ./USBIO` の後のパラメータは、USB経由で接続されたストレージデバイスのマップされたパーティションに依存します。

```bash
git clone https://github.com/jjjadand/Mini_USBIO_test.git
cd Mini_USBIO_test/
gcc -o USBIO USB_test.c
sudo ./USBIO /dev/sda1
```

USB 3.2経由で接続された外付けSSDでの1GBデータ転送の読み書き速度は以下の通りです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb-write-read.jpg"/>
</div>
このプログラムは他のUSBインターフェースのテストにも適用できます。

:::info
USB Micro-Bインターフェースの使用方法については、詳細なチュートリアルとして[このwiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_getting_started/)を参照してください。
:::

## UART

reComputer Miniキャリアボードには、**UART1**と**UART-DEBUG**の2つの4ピンGH-1.25 UARTインターフェースがあります。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart_photo.png"/>
</div>

### UART1

#### ハードウェア接続

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、**UART1** 4ピンGH-1.25インターフェースの配線図を以下のように確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart1_datasheet.png"/>
</div>

**UART1**の送信および受信機能をテストおよび監視するには、適切な[UART-to-USB](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InVhcnQgdXNiIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MSwiY190b3RhbF9yZXN1bHRzIjoxMywiY19zZWFyY2hfcmVzdWx0X3R5cGUiOiJQcm9kdWN0IiwiY19zZWFyY2hfZmlsdGVycyI6InN0b3JlQ29kZTpbcmV0YWlsZXJdICYmIHF1YW50aXR5X2FuZF9zdG9ja19zdGF0dXM6WzFdIn0%3D)モジュール（要件に基づいて）を選択し、データシートの配線図に従って接続し、その後cutecomをインストールします。

一端を**UART1**の4ピンGH-1.25インターフェースに接続し、もう一端をUSBポートに差し込み、TxがRxに、RxがTxに接続されていることを確認してください。
使用方法の説明では次のステップが表示されます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTLINK.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart2usb.png"/>
</div>

#### 使用方法

UART1でシステムが認識するシリアルポート番号は：**/dev/ttyTHS1**です。ターミナルで以下のコマンドを入力することで確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/ttyTHS.png"/>
</div>

**UART1**のデータ送受信をテストするために**Cutecom**をインストールします：

```bash
sudo apt update
sudo apt install cutecom
```

2つの異なるターミナルで**Cutecom**を開きます。

```bash
sudo cutecom
```

下図に従ってパラメータを設定してください：一方のターミナルでは、「device」オプションに **/dev/ttyTHS1** を選択します。もう一方のターミナルでは、「device」は**使用しているUART-to-USBモジュールに基づいて**選択する必要があります。「Input」フィールドにメッセージを入力して、データの送受信をテストできます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart1.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart.png"/>
</div>

### UART-DEBUG

#### ハードウェア接続

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、以下に示すようにUART-DEBUG 4ピンGH-1.25インターフェースの配線図を確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG.png"/>
</div>

**UART-DEBUG**をテストするには、**UART-to-USB**モジュールも必要で、下図に示すように**PC**に接続する必要があります。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTDBdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG_photo.jpg"/>
</div>

#### 使用方法

ハードウェア接続を完了した後。

まず、PCにシリアルポートログインツール[**MobaXterm**](https://mobaxterm.mobatek.net/)をインストールします。
次に、PCで**「デバイスマネージャー」**を開いて、**UART-to-USB**モジュールによってマップされたCOMポートを確認します。
**UART-DEBUG**をテストするには、**UART-to-USB**モジュールも必要で、下図に示すように**PC**に接続する必要があります。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax1.png"/>
</div>

**PC**で[**MobaXterm**](https://mobaxterm.mobatek.net/)を開き、「Session」をクリックし、次に「Serial」をクリックします。**「デバイスマネージャー」**でマップされたCOMポートに基づいてCOMポートを選択し、ボーレートを115200に設定します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax2.png"/>
</div>

ユーザー名とパスワードを入力した後、**UART-DEBUG**経由でreComputer Miniのターミナルにログインします。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax3.png"/>
</div>

<!-- ### Button and Lights -->

## RTC

reComputer MiniはRTCインターフェースを搭載しており、システムの電源がオフの場合でも正確な時刻管理を提供します。

JSTコネクタ付きの3V CR2032コイン電池をボード上の2ピン1.25mm JSTソケットに接続します。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### Usage Instruction -->

## FAN

reComputer Miniのオンボードファンインターフェースは、nvfancontrolデーモンによって管理され、Jetsonモジュールの動作状況に基づいてファン速度を適応的に調整します。設定ファイル`/etc/nvfancontrol.conf`を通じてデーモンの動作モードを設定できます。

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

さらに、**jtop**ツールを使用してファン速度を手動で設定することもできます。

ターミナルで以下のコマンドを入力して**jtop**をインストールできます。

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

その後、reComputer Miniを再起動してください：

```bash
sudo reboot
```

**jtop**をインストールした後、ターミナルで起動できます：

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

<!-- ### 5G module -->

## CAN

reComputer miniは2つのCANインターフェースを搭載し、拡張ボードには4つの外部CANインターフェースがあります。**CAN0**は2つの**XT30コネクタ（2+2）**で構成され、**CAN1**は2つの**4ピンGH-1.25**コネクタで構成されています。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can-photo.png"/>
</div>

### CAN0/CAN1通信

#### ハードウェア接続

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、以下に示すCAN0/CAN1インターフェースの配線図を確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can1-datasheet.png"/>
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

CAN0とCAN1を使用する前に、底面カバーを取り外し、両方の120Ω終端抵抗をON位置に設定してください。
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

ここでは、125 kbpsのボーレートでCAN0からCAN1に30秒間連続してデータを送信するデモンストレーションを行います。
まず、下図に示すように、CAN0の信号線をCAN1の信号線に接続します。具体的には、**CAN0_HをCAN1_H**に、**CAN0_LをCAN1_L**に接続します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CANdraw.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0toCAN1.jpg"/>
</div>

#### 使用方法

ハードウェア接続を完了した後。

ターミナルで以下のコマンドを入力して、CAN0とCAN1にマッピングされたデバイス名を確認します：

```bash
ifconfig -a
```

ここで、`can0` は **CAN0** インターフェースに対応し、`can1` は **CAN1** インターフェースに対応します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can_express.jpg"/>
</div>

ターミナルで `can-utils` をインストールします：

```bash
sudo apt-get update
sudo apt-get install can-utils
```

**ターミナル1**を開き、以下のコマンドを入力して`can0`から送信されるデータのバイト数を監視してください：

```bash
watch -n 1 'ifconfig can0 | grep "TX packets"'
```

**ターミナル2**を開く。GitHubからCAN通信をテストするためのスクリプトを取得して実行する：

```bash
git clone https://github.com/jjjadand/Mini_CANtest.git
cd Mini_CANtest
sudo ./canTest.sh
```

2つのターミナルを観察することで、**ターミナル1**では**CAN0**から送信されるバイト数が増加していることがわかります。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canTX.jpg"/>
</div>

**ターミナル2**では、**CAN1**が**CAN0**から受信したデータが印刷されます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canRX.jpg"/>
</div>

プログラムで **CAN** を使う前に、有効化する必要があります。ターミナルで次のコマンドを実行してください:

```bash
sudo gpioset --mode=wait 0 106=0 #enable CAN1
sudo gpioset --mode=wait 0 43=0 #enable CAN0
```

### CAN0電源出力

**CAN0-PPOWER**の出力電圧は、理論的にはreComputer Miniの現在の**DC**入力電圧と等しくなります。**DC**入力電圧範囲は`12-54V`です。したがって、**CAN0 XT30 (2+2)**の電源出力範囲も`12-54V`となります。

**DC**入力に異なる電圧を供給し、**CAN0-PPOWER**の出力電圧を測定します。
安定化電源とマルチメーターを使用し、以下の図に従って接続します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0connet.png"/>
</div>

**DC**入力が`26.3V`の場合、マルチメーターで測定した**CAN0-POWER**出力は`26.03V`です。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power1.jpg"/>
</div>

**DC**入力が`12.6V`の場合、マルチメーターで測定した**CAN0-POWER**出力は`12.48V`です。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power2.jpg"/>
</div>

上記のテスト結果に基づくと、**CAN0-POWER**の出力は**DC**入力に近いことがわかります。
詳細については、[回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)を参照してください。

## I2C

### ハードウェア接続

reComputerの拡張ボードには、2つの**4ピンGH-1.25** IICインターフェース、IIC0とIIC1があります。

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、IIC0/IIC1 4ピンGH-1.25インターフェースの配線図を以下のように確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC0-datasheet.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC1-datasheet.jpg"/>
</div>

テスト用のIICインターフェースデバイスを選択してください。選択はお任せします。ここでは、[IICインターフェースセンサー](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6IkkyYyIsImNfc2VhcmNoX3Jlc3VsdF9wb3MiOjQ3LCJjX3RvdGFsX3Jlc3VsdHMiOjUxLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)をI2C0/I2C1に接続してテスト目的で使用します。

ここでのテストプロセスでは、IIC0/IIC1に外部接続されたデバイスのアドレスをスキャンします。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IICdraw.png"/>
</div>

### 使用方法

ハードウェア接続を完了した後。

IICテスト用のツールをインストールする必要があります。デバイスをスキャンする前に、ターミナルで以下を入力してください：

```bash
sudo apt update
sudo apt-get install i2c-tools
```

次に、ターミナルで以下のコマンドを入力して、IICバス上のマップされた名前を表示します。

```bash
i2cdetect -l
```

拡張ボード上の外部インターフェース **IIC0-J7** は `i2c-1 i2c c240000.i2c` に対応し、外部インターフェース **IIC1-J7** は `i2c-7 i2c c250000.i2c` に対応します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic-l.jpg"/>
</div>

外部I2Cデバイスを接続してそのアドレスを設定した後、2つの異なるターミナルを開き、以下のコマンドを入力してI2C0とI2C1でスキャンを実行します：

```bash
sudo i2cdetect -y -r 1
sudo i2cdetect -y -r 7
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic0-addr.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic1-addr.png"/>
</div>

**I2C0**に接続されたデバイスがアドレス`0x15`に設定され、**I2C1**に接続されたデバイスがアドレス`0x19`に設定されていることがわかります。

## SPI

### ハードウェア接続

reComputerの拡張ボードには、**6ピンGH-1.25**外部SPIインターフェースが搭載されています。

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、以下に示すようにSPI 6ピンGH-1.25インターフェースの配線図を確認できます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-datasheet.jpg"/>
</div>

外部SPI-to-USBモジュールを使用しない場合は、**6ピンGH-1.25** SPIインターフェースを自分で接続してデータの送受信をテストできます。**MOSI**を**MISO**に、**CS0**を**SCK**に接続します。
配線図は以下の通りです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/SPIdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-photo.jpg"/>
</div>

### 使用方法

ハードウェア接続を完了した後。

次に、GitHubからSPIテスト用のコードを取得してコンパイルします：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

ターミナルで以下のコマンドを入力して、SPIにマッピングされたデバイス名を確認してください。例えば、`/dev/spidev0.0`は拡張ボード（J17）のSPI0に対応します。

```bash
ls -l /dev/spi*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-dev.png"/>
</div>

ターミナルで以下のコマンドを入力して、SPIテスト用のプログラムを実行します：

```bash
sudo ./spidev_test -v
```

拡張ボード（J17）のSPI0で送受信されるデータを観察できます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-res.jpg"/>
</div>

## リソース

- [reComputer Mini データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini 回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3Dモデル](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)

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
