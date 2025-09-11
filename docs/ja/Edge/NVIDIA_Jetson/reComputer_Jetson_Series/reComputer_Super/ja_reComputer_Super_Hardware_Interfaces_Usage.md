---
description: このガイドでは、reComputer Superのハードウェアコンポーネントとインターフェースの詳細な概要を提供します。CSIカメラ、USBポート、各種M.2インターフェース、mini PCIe、RTC、Ethernet、LED、ファン、CAN、拡張ポート、HDMIなどのデバイスの接続と使用方法について、ステップバイステップの手順とコマンド例を含めて説明します。
title: reComputer Super ハードウェアとインターフェース使用方法
keywords:
  - reComputer Super
  - Interfaces Usage
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /ja/recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 05/26/2025
  author: Zibo
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

このwikiでは、reComputer Super上の様々なハードウェアとインターフェースについて、それらをプロジェクトアイデアの拡張にどのように使用するかを紹介します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## CSIカメラ

reComputer Superは、画像とビデオキャプチャ用の標準4 MIPI CSIカメラをサポートしています。カメラの接続とテストを行うには、以下の手順に従ってください。

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Step1.** Recomputer Superの背面カバーを開きます。

**Step2.** MIPI CSIカメラをreComputer Super基板上の適切なCSIポートに接続します。

**Step3.** カメラを固定し、接続がしっかりしていることを確認します。

### 使用方法

:::note
CSIカメラを使用する前に、必要なカメラドライバーを含むJetPackバージョンがインストールされていることを確認してください。
:::

**Step1.** カメラがシステムに認識されているかを確認します：

```bash
ls /dev/video*
```

**ステップ2.** （オプション）ビデオユーティリティがまだインストールされていない場合はインストールします：

```bash
sudo apt install v4l-utils
```

**ステップ3.** 以下のコマンドを使用してカメラを起動し、ビデオストリームを表示します：

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
複数のカメラがある場合は、`--sensor-id` を適切な値に変更してください。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

reComputer Superには合計4つのUSB 3.2ポートと、デバッグ用の1つのUSB 2.0 Type-Cポートがあります。

### USB 3.2ポート

Jetsonターミナルで`watch -n 1 lsusb -tv`を入力してUSBポートを調べることができます。USBデバイスが接続されると、そのポートの詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

さらに、`dd`コマンドを使用してUSBストレージデバイスの読み書き速度をテストできます：

- **読み取り：**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **書き込み:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### USB 2.0 Type-C ポート

このシリアルポートを使用して、USB C データケーブル経由でPC側の入出力デバッグ情報を監視できます。

**Step1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Step2.** USB データケーブルでPCに接続し、PC上で[CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)をダウンロードします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** USB データケーブルでPCに接続し、ダウンロードしたファイルを解凍してPC上でドライバーをインストールします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Windows PC上でデバイスマネージャーを開き、reComputer Superに割り当てられたCOMポート番号を確認します。「ポート (COM & LPT)」の下に「Silicon Labs CP210x USB to UART Bridge (COMX)」として表示されます。ここでXはCOMポート番号です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Step5.** シリアルポートツール（ここではMobaXtermツールを例として使用）を開き、新しいセッションを作成します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Serialツールを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 対応するシリアルポートを選択し、ボーレートを115200に設定して「OK」をクリックします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Step8.** ユーザー名とパスワードでreComputer Superにログインします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key Mは高速ソリッドステートドライブ（SSD）用に設計されたインターフェースで、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

### サポートされているSSDは以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### 使用方法

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
テスト完了後は、`sudo rm /home/seeed/ssd/test` コマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key E

M.2 Key E インターフェースは、Wi-Fi や Bluetooth などのワイヤレス通信モジュール用に設計されたコンパクトで高速なデータインターフェースで、ワイヤレス機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### 使用方法

Wi-Fi モジュールを取り付けてデバイスの電源を入れた後、デバイスの Wi-Fi と Bluetooth 設定を構成できます。

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

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

reComputer superには、LTE 4Gモジュール用のmini-PCIeが搭載されています。

#### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部のスプリングを作動させると、SIMがスロットから出てきます
:::

### 使用方法

**Step1.** minicomをインストールします：

```bash
sudo apt update
sudo apt install minicom -y
```

**ステップ2.** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話できるようにします：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Step3.** Ctrl+Aを押してからEを押して、ローカルエコーをオンにします。

**Step4.** コマンド「AT」を入力してEnterを押します。レスポンスが「OK」と表示されれば、4Gモジュールが正常に動作しています。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Step5.** コマンド「ATI」を入力してモジュール情報を確認します。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

4Gネットワークを使用したインターネットアクセス

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

reComputer SuperはRTCインターフェースを搭載しており、システムの電源がオフの状態でも正確な時刻を保持できます。

### ハードウェア接続

以下に示すように、3V CR1225コイン電池をボード上のRTCソケットに接続します。電池の**プラス（+）**端子が上向きになるようにしてください。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### 使用方法

**Step1.** 上記の通りRTC電池を接続します。

**Step2.** reComputer Superの電源をオンにします。

**Step3.** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブルでネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます。
:::

**Step4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**ステップ5.** ネットワーク接続を切断してデバイスを再起動します。システム時刻は電源を失いましたが、まだ正常に機能していることがわかります。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

reComputer Superには10/100/1000Mをサポートする2つのRJ45ギガビットEthernetがあります。ETH0はネイティブEthernetポートで、もう一つのETH1はPCIeから変換されたものです。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

各Ethernetポートには2つのLED（緑と黄色）があります：

- 緑LED：1000M/10Gネットワークに接続されている場合のみ点灯。
- 黄LED：ネットワークアクティビティステータスを表示。

Ethernetの速度をテストします：

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` はサーバーのIPアドレスで、-R はリバースモードを意味します。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED インジケータ

reComputer Super には 2 つの LED インジケータ（PWR と ACT）が搭載されており、電源状態とシステムアクティビティを表示し、ユーザーがデバイスの動作をリアルタイムで監視できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## ファン

reComputer Super には、異なる電圧と冷却ニーズに対応するため、2 種類のファンコネクタが搭載されています：

- 1x 4ピンファンコネクタ（5V PWM）：低電圧、低消費電力の静音ファン用に設計されており、このコネクタは PWM 速度制御をサポートし、システム温度に基づいてファン速度をインテリジェントに調整することで、エネルギー効率を向上させ、ノイズを低減します。

- 1x 4ピンファンコネクタ（12V PWM）：標準的な 12V PWM ファンと互換性があり、精密な速度制御もサポートしており、高性能冷却要件に最適です。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

**ファン速度の設定：**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

さらに、jtopツールを使用して手動でファン速度を設定することもできます。

## CAN

CAN（Controller Area Network）インターフェースは、マイクロコントローラとデバイス間の通信に使用されるシリアル通信プロトコルで、高速、強力な抗干渉能力、マルチノード通信のサポートという特徴があります。

### ハードウェア接続

- 接続線の順序に注意してください（R OUT ↔ RX、D IN ↔ TX）。その後、CANバストランシーバーを通してCAN_LとCAN_Hに変換します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

- [PC CANツールダウンロード](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)
- 3.3V CMOSレベルCANバス（差動ではない）

:::note
CANインターフェースは絶縁電源を使用しています。これは、CANインターフェースに接続される外部デバイスのグランド信号を**GND_ISO**ピンに接続する必要があることを意味します。
:::

ここでは、当社のBazaarで入手可能な[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)とUSBケーブルを使用しました。

### 使用方法

**Step1.** 使用しているUSB to CANアダプターのドライバーをメーカーのWebサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)で見つけることができます。

**Step2.** 一部のアダプターには、CANデバイスと通信するためのPC用の必要なソフトウェアも付属しています。今回使用したアダプターの場合、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました。

**Step3.** JetsonのCANインターフェースを初期化します。

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

Then, run the file we just created in the Jetson terminal window:

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**Step4.** ターミナルでifconfigと入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**Step5.** 以前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに応じてインストールしたソフトウェアを開きます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**Step6.** USB to CANアダプターをPCに接続し、Windowsの検索バーで検索して**デバイスマネージャー**を開きます。接続されたアダプターが**ポート (COM & LPT)**の下に表示されます。ここに表示されているシリアルポートをメモしてください。下の画像によると、シリアルポートは**COM9**です。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**Step7.** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューをクリックして接続されたアダプターに応じてシリアルポートを選択します。**COM bps**はデフォルトのままにして、**Open**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**Step8.** **Mode**と**CAN bps**はデフォルトのままにし、**Type**を**Standard frame**に変更して**Set and Start**をクリックします。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**Step9.** reComputer Industrialで、以下のコマンドを実行してPCにCAN信号を送信します：

```sh
cansend can0 123#abcdabcd
```

以下のように、ソフトウェアが受信した上記の信号が表示されます

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**ステップ10.** reComputer Industrialで、以下のコマンドを実行してPCからのCAN信号の受信を待機します：

```sh
candump can0 &
```

**Step11.** CANソフトウェアで、**Send a single frame**をクリックします：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

これで、以下のようにreComputer Industrialで受信されることが確認できます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

## 拡張ポート

拡張ポートには40ピン拡張ヘッダーと12ピン制御・UARTヘッダーが含まれており、周辺機器や通信インターフェース用の多様な接続オプションを提供します。

40ピン拡張ヘッダー

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

40ピン拡張ヘッダーは、GPIO、I2C、SPI、UARTなどの様々な機能を提供する多用途拡張インターフェースで、センサー、周辺機器、その他のモジュールの接続を便利にします。

### 使用方法

**40ピンヘッダーの有効化：**

  ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

保存して再起動します。

**オーバーレイ設定を通じて制御されていないGPIOを設定する：**

**ステップ1.** [オーバーレイパッケージ](https://drive.weixin.qq.com/s?k=AGEAZwfLABEmqim3hXAXcApwZFAKM)をダウンロードし、Jetsonデバイスに展開します。

**ステップ2.** build.shとgpio-overlay.dtsをJetsonにコピーします。

**ステップ3.** sudo ./build.shを実行します。

**ステップ4.** sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"を実行します。

:::note
これは一度だけ実行する必要があり、その後実行する必要はありません。

:::

```bash
cd overlay/
ls -l
#total 16
#-rwxrwxr-x 1 seeed seeed  147 Sep  9 07:33 build.sh
#-rw-r--r-- 1 root  root  1353 Sep  9 07:36 gpio-overlay.cpp.dts
#-rw-r--r-- 1 root  root  1214 Sep  9 07:36 gpio-overlay.dtbo
#-rw-rw-r-- 1 seeed seeed 1879 Sep  9 07:35 gpio-overlay.dts
sudo ./build.sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
#Modified /boot/extlinux/extlinux.conf to add following DTBO entries:
#/boot/gpio-overlay.dtbo
#Reboot system to reconfigure.

```

以下は、gpiodツールキットを使用してGPIOピンを操作するためのコマンド例です。

**ステップ1.** gpiodをインストールします：

  ```bash
  sudo apt-get install gpiod
  ```

**ステップ2.** ピン番号を見つける：

  ```bash
  sudo gpiofind PH.00
  ```

**ステップ 3.** ピンをハイに設定：

  ```bash
  sudo gpioset --mode=wait 0 43=1
  ```

**ステップ4.** ピンをローに設定：

  ```bash
  sudo gpioset --mode=wait 0 43=0
  ```

**ステップ 5.** 入力を読み取る：

  ```bash
  gpioget 0 4
  ```

GPIO制御スクリプトの例

```bash
#!/bin/bash

# GPIO Control Script
# Usage:
#   gpio_ctrl.sh <pin_name> <command>
# Commands:
#   get    - Read the current pin level
#   set    - Drive the pin high
#   clear  - Drive the pin low

# Parameter validation
if [ $# -ne 2 ]; then
    echo "Usage: $0 <pin_name> <command>"
    echo "Commands:"
    echo "  get    - Read pin state"
    echo "  set    - Set to high level"
    echo "  clear  - Set to low level"
    exit 1
fi

# Map and parse arguments
PIN_NAME=$1
COMMAND=$2

# Locate the GPIO
GPIO_INFO=$(gpiofind "$PIN_NAME" 2>/dev/null)
if [ -z "$GPIO_INFO" ]; then
    echo "Hardware alert: GPIO pin $PIN_NAME not found"
    exit 1
fi

# Split info into chip and offset
GPIO_CHIP=$(echo "$GPIO_INFO" | cut -d' ' -f1 | tr -d 'gpiochip')
GPIO_OFFSET=$(echo "$GPIO_INFO" | awk '{print $2}')

# Execute command
case $COMMAND in
    "get")
        gpioget $GPIO_CHIP $GPIO_OFFSET
        ;;
    "set")
        echo "Setting $PIN_NAME to high level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=1
        ;;
    "clear")
        echo "Setting $PIN_NAME to low level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=0
        ;;
    *)
        echo "Error: Invalid command. Please use get, set, or clear."
        exit 1
        ;;
esac

```

12ピン制御およびUARTヘッダー

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

12ピン制御およびUARTヘッダーは、外部デバイスの接続と管理に必要な制御信号とUART通信インターフェースを提供します。

## HDMI

reComputer SuperはHDMI 2.1 Type Aポートを搭載しており、7680x4320の解像度をサポートしています。これにより、超高精細ビデオ出力が可能になります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
