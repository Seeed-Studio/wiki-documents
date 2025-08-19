---
description: この記事では、reComputer Mini J40シリーズのハードウェアとインターフェースについて説明します。これには、電源、ディスプレイ、Wi-FiおよびSSD用のM.2スロット、USBポート、RTC、ファン管理などが含まれます。セットアップ手順や性能テストのヒントを提供し、ユーザーがプロジェクトを拡張するのを支援します。
title: reComputer Mini ハードウェアとインターフェースの使用方法
tags:
  - reComputer
  - reComputer mini
  - 組み込みコンピュータ
  - ロボット
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /ja/recomputer_jetson_mini_hardware_interfaces_usage
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>

このWikiでは、reComputer Mini J40シリーズのさまざまなハードウェアとインターフェースを紹介し、それらを使用してプロジェクトアイデアを拡張する方法を説明します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

## ハードウェアインターフェース概要
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>
</div>

## 電源

reComputer Miniは、**12-54V (XT30)** 電源インターフェースを備えており、幅広い電圧入力範囲（12Vから54V）に対応しているため、さまざまな電源環境に適しています。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>

## ディスプレイ

この製品は、Host + DP（DisplayPort）機能を備えたType-Cポートを搭載しており、データ転送をサポートするだけでなく、このポートを介してモニターを接続することで高品質なビデオ出力を可能にします。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>

## M.2 Key E for Wi-FiおよびBluetooth

reComputer MiniはM.2 Key Eインターフェースを備えており、これを使用してデバイスのBluetoothおよびWi-Fi機能を拡張できます。

Intel Dual Band RTL8822CE Wireless NICの使用を推奨します。

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
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

## M.2 Key M for SSD

M.2 Key Mは、高速なソリッドステートドライブ（SSD）向けに設計されたインターフェースであり、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

reComputer Industrialには、128GBの産業用グレードSSDが付属しており、x4 PCIe Gen3を備えたM.2 Key Mスロットに接続されています。このSSDにはJetPackシステムがプリインストールされています。

### ハードウェア接続

付属のSSDを取り外して新しいSSDを取り付けたい場合は、以下の2つの条件を満たしている必要があります：

- **x4 PCIe Gen3を備えたM.2 Key Mスロット**インターフェースをサポートしていること。
- **2242**サイズ仕様に準拠していること。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

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


## Ethernet
### ハードウェア接続
reComputer Miniは拡張ボードに**RJ45ギガビットイーサネットポート（10/100/1000M）**を備えています。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_photo.png"/>
</div>

### 使用手順
ターミナルで`ifconfig`を入力すると、イーサネットインターフェースによってマッピングされたデバイス名が`eth0`であることが確認できます：
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_ifconfig.png"/>
</div>

**reComputer Mini**を**PC**にギガビットイーサネットRJ45ケーブルで接続します。ツール`iperf`を使用して、イーサネットインターフェースの伝送速度を簡単にテストできます。ターミナルを開き、**PC**と**reComputer Mini**の両方に`iperf3`をインストールします。
```bash
sudo apt update
sudo apt install iperf3
```
PCのターミナルを開き、`iperf3 -s`を入力します。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/iperf3PC.jpg"/>
</div>

次に、**reComputer Mini**のターミナルを開き、`iperf3 -c <PCのIPアドレス>`を入力します。
この場合、私のPCのネットワークインターフェースのIPアドレスは`192.168.12.211`です。以下は例のコマンドです：
```bash
iperf3 -c 192.168.12.211
```

以下の図に示される結果に基づいて、reComputer Miniのイーサネット伝送速度がギガビットレベルに達することが確認できます。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/networkspeed.jpg"/>
</div>

## USB

### ハードウェア接続

reComputer Miniキャリアボードには合計4つのUSBポートがあります：2つのUSB 3.2 Type-Aポート、フラッシュ用の1つのUSB 2.0 Micro-Bポート、および1つのUSB 2.0 GH1.25ポート。また、拡張ボードには4つのUSB 3.0 Type-Aポートがあります。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBshow.jpg"/>
</div>

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)では、**USB 2.0** 5ピンGH-1.25インターフェースの配線図を以下のように確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb2.0-datasheet.png"/>
</div>

以下の手順を参考にして、USB 3.2/USB 2.0/USB 3.0を介してreComputer Miniにストレージデバイスを接続し、USBの読み書き速度をテストできます。**使用手順**では次のステップが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBLINK.jpg"/>
</div>

### 使用手順

Jetsonターミナルで`watch -n 1 lsusb -tv`を入力してUSBポートを調査します。USBデバイスが接続されると、そのポートの詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

USB 3.2/USB 2.0/USB 3.0を介してストレージデバイスを接続した後、ターミナルで以下のコマンドを入力してストレージデバイスによってマッピングされたパーティションを確認します：
```bash
ls /dev/sd*
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/sda1.png"/>
</div>

**/dev/sda1**はUSBを介して接続されたストレージデバイスによってマッピングされたパーティションです。複数のデバイスが挿入されている場合、それぞれ異なるマッピングパーティション名を持つ可能性があります。例：**/dev/sdb1**。

**GitHub**からテストプログラムを取得してUSBの書き込みおよび読み取り速度を測定します。このプログラムは**1GB**の一時データを書き込み、その後読み取ります。テスト完了後、データは削除されます。
USB接続されたストレージデバイスのマッピングパーティションに応じて、`sudo ./USBIO`の後のパラメータを設定します。
```bash
git clone https://github.com/jjjadand/Mini_USBIO_test.git
cd Mini_USBIO_test/
gcc -o USBIO USB_test.c
sudo ./USBIO /dev/sda1
```
USB 3.2を介して接続された外部SSDでの1GBデータ転送の読み書き速度は以下の通りです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb-write-read.jpg"/>
</div>
このプログラムは他のUSBインターフェースのテストにも適用可能です。

:::info
USB Micro-Bインターフェースの使用方法については、[このWiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_getting_started/)を参照して詳細なチュートリアルをご覧ください。
:::

## UART
reComputer Miniキャリアボードには、2つの4ピンGH-1.25 UARTインターフェース：**UART1**と**UART-DEBUG**があります。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart_photo.png"/>
</div>

### UART1
#### ハードウェア接続
[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)には、**UART1** 4ピンGH-1.25インターフェースの配線図が以下のように記載されています：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart1_datasheet.png"/>
</div>

**UART1**の送信および受信機能をテストおよび監視するには、適切な[UART-to-USB](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InVhcnQgdXNiIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MSwiY190b3RhbF9yZXN1bHRzIjoxMywiY19zZWFyY2hfcmVzdWx0X3R5cGUiOiJQcm9kdWN0IiwiY19zZWFyY2hfZmlsdGVycyI6InN0b3JlQ29kZTpbcmV0YWlsZXJdICYmIHF1YW50aXR5X2FuZF9zdG9ja19zdGF0dXM6WzFdIn0%3D)モジュールを選択し（要件に基づいて）、データシートの配線図に従って接続し、cutecomをインストールします。

一方の端を**UART1**の4ピンGH-1.25インターフェースに接続し、もう一方の端をUSBポートに接続します。TxをRxに、RxをTxに接続することを確認してください。
使用手順は次のステップで表示されます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTLINK.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart2usb.png"/>
</div>

#### 使用手順
システムが認識する**UART1**のシリアルポート番号は：**/dev/ttyTHS1**です。以下のコマンドをターミナルで入力して確認できます：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/ttyTHS.png"/>
</div>

**Cutecom**をインストールして、**UART1**のデータ送受信をテストします：
```bash
sudo apt update
sudo apt install cutecom
```
2つの異なるターミナルで**Cutecom**を開きます。
```bash
sudo cutecom
```
以下の図に従ってパラメータを設定します：1つのターミナルでは、「device」オプションに**/dev/ttyTHS1**を選択します。もう1つのターミナルでは、「device」は**使用しているUART-to-USBモジュールに基づいて選択**する必要があります。「Input」フィールドにメッセージを入力して、データの送受信をテストできます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart1.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart.png"/>
</div>

### UART-DEBUG
#### ハードウェア接続
[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)には、UART-DEBUG 4ピンGH-1.25インターフェースの配線図が以下のように記載されています：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG.png"/>
</div>

**UART-DEBUG**をテストするには、**UART-to-USB**モジュールも必要です。このモジュールを以下の図のように**PC**に接続します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTDBdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG_photo.jpg"/>
</div>

#### 使用手順
ハードウェア接続を完了した後。

まず、PCにシリアルポートログインツール[**MobaXterm**](https://mobaxterm.mobatek.net/)をインストールします。
次に、PCの**「デバイスマネージャー」**を開き、**UART-to-USB**モジュールによってマッピングされたCOMポートを確認します。
**UART-DEBUG**をテストするには、**UART-to-USB**モジュールも必要であり、以下の図のように**PC**に接続します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax1.png"/>
</div>

PC上で[**MobaXterm**](https://mobaxterm.mobatek.net/)を開き、「Session」をクリックし、その後「Serial」をクリックします。**「デバイスマネージャー」**でマッピングされたCOMポートを選択し、ボーレートを115200に設定します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax2.png"/>
</div>

ユーザー名とパスワードを入力すると、**UART-DEBUG**を介してreComputer Miniのターミナルにログインします。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax3.png"/>
</div>

<!-- ### ボタンとライト -->

## RTC

reComputer Mini は RTC インターフェースを備えており、システムが電源オフの状態でも正確な時刻を保持します。

3V CR2032 コイン型電池を JST コネクタで接続し、基板上の 2 ピン 1.25mm JST ソケットに接続してください。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### 使用方法 -->


## FAN

reComputer Mini のオンボードファンインターフェースは、nvfancontrol デーモンによって管理されており、Jetson モジュールの動作状況に基づいてファン速度を適応的に調整します。このデーモンの動作モードは、設定ファイル `/etc/nvfancontrol.conf` を通じて構成できます。

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

さらに、**jtop** ツールを使用して手動でファン速度を設定することもできます。

以下のコマンドをターミナルで入力して **jtop** をインストールしてください。

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```
その後、reComputer Mini を再起動します：
```bash
sudo reboot
```
**jtop** をインストールした後、ターミナルで以下のコマンドを入力して起動します：
```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>


<!-- ### 5G モジュール -->



## CAN
reComputer Mini は 2 つの CAN インターフェースを備えており、拡張ボードには 4 つの外部 CAN インターフェースがあります。**CAN0** は 2 つの **XT30 コネクタ (2+2)** で構成され、**CAN1** は 2 つの **4 ピン GH-1.25** コネクタで構成されています。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can-photo.png"/>
</div>

### CAN0/CAN1 通信
#### ハードウェア接続
[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf) には、以下のように CAN0/CAN1 インターフェースの配線図が記載されています：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can1-datasheet.png"/>
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

ここでは、CAN0 から CAN1 に 125 kbps のボーレートで 30 秒間データを連続送信するデモを行います。
まず、以下の図のように CAN0 の信号線を CAN1 の信号線に接続します。具体的には、**CAN0_H を CAN1_H** に、**CAN0_L を CAN1_L** に接続します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CANdraw.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0toCAN1.jpg"/>
</div>

#### 使用方法
ハードウェア接続を完了した後、以下のコマンドをターミナルで入力して、CAN0 と CAN1 にマッピングされたデバイス名を確認します：
```bash
ifconfig -a
```
ここで、`can0` は **CAN0** インターフェースに、`can1` は **CAN1** インターフェースに対応します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can_express.jpg"/>
</div>

ターミナルで `can-utils` をインストールします：
```bash
sudo apt-get update
sudo apt-get install can-utils
```

**ターミナル 1** を開き、以下のコマンドを入力して `can0` から送信されたデータのバイト数を監視します：
```bash
watch -n 1 'ifconfig can0 | grep "TX packets"'
```

**ターミナル 2** を開き、GitHub から CAN 通信テスト用スクリプトを取得して実行します：
```bash
git clone https://github.com/jjjadand/Mini_CANtest.git
cd Mini_CANtest
sudo ./canTest.sh
```
2 つのターミナルを観察すると、**ターミナル 1** では **CAN0** から送信されたバイト数が増加していることが確認できます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canTX.jpg"/>
</div>

**ターミナル 2** では、**CAN1** が **CAN0** から受信したデータが表示されます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canRX.jpg"/>
</div>

### CAN0 電源出力
**CAN0-PPOWER** の出力電圧は、理論上、reComputer Mini の現在の **DC** 入力電圧に等しくなります。**DC** 入力電圧範囲は `12-54V` です。したがって、**CAN0 XT30 (2+2)** の電源出力範囲も `12-54V` となります。

異なる電圧を **DC** 入力に供給し、**CAN0-PPOWER** の出力電圧を測定します。
安定した電源とマルチメーターを使用し、以下の図に従って接続してください。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0connet.png"/>
</div>

**DC** 入力が `26.3V` の場合、マルチメーターは **CAN0-POWER** 出力を `26.03V` と測定します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power1.jpg"/>
</div>

**DC** 入力が `12.6V` の場合、マルチメーターは **CAN0-POWER** 出力を `12.48V` と測定します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power2.jpg"/>
</div>

上記のテスト結果から、**CAN0-POWER** の出力は **DC** 入力に近いことが確認できます。
詳細を知りたい場合は、[回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z) を参照してください。

## I2C
### ハードウェア接続
reComputer の拡張ボードには、**4ピン GH-1.25** IICインターフェースが2つ（IIC0とIIC1）搭載されています。

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)には、IIC0/IIC1 4ピン GH-1.25インターフェースの配線図が以下のように記載されています：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC0-datasheet.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC1-datasheet.jpg"/>
</div>

テスト用にIICインターフェースデバイスを選択してください。選択は自由です。ここでは、[IICインターフェースセンサー](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6IkkyYyIsImNfc2VhcmNoX3Jlc3VsdF9wb3MiOjQ3LCJjX3RvdGFsX3Jlc3VsdHMiOjUxLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)をI2C0/I2C1に接続してテストを行います。

ここでのテストプロセスは、IIC0/IIC1に外部接続されたデバイスのアドレスをスキャンすることです。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IICdraw.png"/>
</div>

### 使用手順

ハードウェア接続を完了した後、IICテスト用のツールをインストールする必要があります。デバイスをスキャンする前に、以下のコマンドをターミナルで入力してください：
```bash
sudo apt update
sudo apt-get install i2c-tools
```
次に、以下のコマンドをターミナルで入力して、IICバス上のマッピングされた名前を確認します。

```bash
i2cdetect -l
```

拡張ボード上の外部インターフェース **IIC0-J7** は `i2c-1 i2c c240000.i2c` に対応し、外部インターフェース **IIC1-J7** は `i2c-7 i2c c250000.i2c` に対応します。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic-l.jpg"/>
</div>

外部I2Cデバイスを接続し、そのアドレスを設定した後、異なる2つのターミナルを開き、以下のコマンドを入力してI2C0およびI2C1をスキャンします：
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

**I2C0** に接続されたデバイスはアドレス `0x15` に設定され、**I2C1** に接続されたデバイスはアドレス `0x19` に設定されていることが確認できます。

## SPI
### ハードウェア接続
reComputer の拡張ボードには、**6ピン GH-1.25** 外部SPIインターフェースが搭載されています。

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)には、SPI 6ピン GH-1.25インターフェースの配線図が以下のように記載されています：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-datasheet.jpg"/>
</div>

外部SPI-to-USBモジュールを使用しない場合は、**6ピン GH-1.25** SPIインターフェースを自己接続してデータ送受信をテストできます。**MOSI** を **MISO** に接続し、**CS0** を **SCK** に接続します。
配線図は以下の通りです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/SPIdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-photo.jpg"/>
</div>

### 使用手順
ハードウェア接続を完了した後、GitHubからSPIテスト用のコードを取得し、コンパイルします：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```
次に、以下のコマンドをターミナルで入力して、SPIによってマッピングされたデバイス名を確認します。例えば、`/dev/spidev0.0` は拡張ボード上のSPI0（J17）に対応します。
```bash
ls -l /dev/spi*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-dev.png"/>
</div>

以下のコマンドをターミナルで入力して、SPIテスト用プログラムを実行します：
```bash
sudo ./spidev_test -v
```

拡張ボード（J17）上のSPI0で送受信されるデータを観察できます。
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-res.jpg"/>
</div>

## リソース
- [reComputer Mini データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini 回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3Dモデル](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>