---
description: "J601 キャリアボードのインターフェース：GMSL、USB、CAN、M.2 と 40 ピンピン配置、Linux デバイス名とポートごとの確認方法、さらにヒートシンクの取り付け。"
title: reComputer Robotics J601 ハードウェア & I/O
tags:
  - J601-Robotics キャリアボード
  - Jetson
  - AGX Thor
  - ロボティクス
  - インターフェースの使用方法
  - インターフェース
  - ハードウェア
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg
slug: /jetson/recomputer_robotics_j601/hardware_and_interface_usage
aliases:
  - /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/jetson/recomputer_robotics_j601/hardware_and_interface_usage/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Robotics J601 ハードウェア & I/O

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

このガイドでは、J601 キャリアボード上のコネクタ配線、ピン定義、Linux デバイスの対応関係、およびインターフェースの確認方法について説明します。モジュールの選定、仕様、電源要件、JetPack のフラッシュ手順全体については、まず [Getting Started](/ja/jetson/recomputer_robotics_j601/getting_started/) を参照してください。

搭載されている Jetson モジュールによって、利用可能な Ethernet と CAN 接続が決まります：**T5000 は 4 つの 10GbE ポートと 4 つの CAN インターフェースをサポートし、T4000 は 3 つの 10GbE ポートと 2 つの CAN インターフェースをサポートします**。Wi-Fi/Bluetooth とセルラー機能を使用するには、対応する拡張モジュールが必要です。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg" alt="reComputer Robotics J601 carrier board hardware overview" />
    <figcaption>J601 キャリアボード · ロボティクス向けインターフェースと拡張</figcaption>
  </figure>
</div>

## インターフェースガイド

| 作業 | インターフェースと手順 |
| --- | --- |
| 冷却機構を取り付ける | [ヒートシンクの取り付け](#ヒートシンクの取り付け) |
| 周辺機器またはデバッグコンソールを接続する | [USB](#usb) と [UART](#uart) |
| カメラインプットを有効にする | [GMSL](#gmsl) |
| オーディオとセンサーを接続する | [I2S](#i2s)、[I2C](#i2c)、[GPIO](#gpio-gpigpo) |
| コントローラを接続する | [CAN](#can)、[RS485](#rs485)、[DB9](#db9) |
| ステータスインジケータを確認する | [RGB LED](#rgb) |
| ネットワークに接続する | [Ethernet](#ethernet)、[Wi-Fi/Bluetooth](#m2-key-e)、[5G/GPS](#5g-module-m2-key-b) |

モジュールやヘッダ配線を取り付け・取り外しする前に、必ずキャリアボードの電源を切ってください。コネクタのピン番号と信号電圧が、お使いのボードリビジョンの回路図と一致していることを確認してください。

## ヒートシンクの取り付け

長時間の動作中も安定した放熱を確保するため、reComputer J601 キャリアボードにヒートシンクを取り付けることができます。

**必要なもの：**

- 熱伝導シリコンパッド
- ファン付きヒートシンク
- reComputer J601 キャリアボード

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink1.png" alt="Heatsink, fan, thermal pad, and J601 carrier board for installation" loading="lazy" />
    <figcaption>取り付け用のヒートシンク、ファン、熱伝導パッド、および J601 キャリアボード</figcaption>
  </figure>
</div>

**ステップ 1.** ヒートシンクとキャリアボードの接触部分に、熱伝導シリコンパッドを貼り付けます。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink2.png" alt="Copper heatsink plate with the blue thermal pads applied, next to the J601 carrier board" loading="lazy" />
    <figcaption>ヒートシンクの接触部に配置された熱伝導シリコンパッド</figcaption>
  </figure>
</div>

**ステップ 2.** ヒートシンクをキャリアボードに取り付けます。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink3.png" alt="Heatsink and fan attached to the J601 carrier board" loading="lazy" />
    <figcaption>J601 キャリアボードに取り付けられたヒートシンクとファン</figcaption>
  </figure>
</div>

## USB

Robotics J601 キャリアボードには複数の USB ポートが搭載されており、高速な周辺機器接続用に 4× USB 3.2 Type-A ポート（ホスト、10Gbps）、リカバリ／フラッシュ用に 1× USB 3.0 Type-C ポート（J4）、シリアルデバッグ用に 1× USB 2.0 Type-C ポート（J3）があります。

### USB 3.2 スピードテスト

USB 3.x ストレージデバイスを接続し、`lsblk -f` でマウントポイントを確認します。ネゴシエートされた USB 速度は `lsusb -t` で確認できます。実際のスループットはストレージデバイスやファイルシステムにも依存します。

次の例では、マウントされた USB ファイルシステム上に **1 GiB の一時ファイル**を書き込み、読み出してから削除します。`<usb-volume>` は実際のボリューム名に置き換え、少なくとも 1 GiB の空き容量があることを確認してください。

```bash
lsblk -f
lsusb -t
USB_MOUNT="/media/$USER/<usb-volume>"
USB_TEST_FILE=$(mktemp "$USB_MOUNT/j601-usb-speed.XXXXXX")
dd if=/dev/zero of="$USB_TEST_FILE" bs=1M count=1024 conv=fdatasync status=progress
dd if="$USB_TEST_FILE" of=/dev/null bs=1M iflag=direct status=progress
rm -- "$USB_TEST_FILE"
```

テストが完了するまで、デバイスはマウントしたままにしておきます。ファイルシステムがダイレクト I/O をサポートしていない場合は、`iflag=direct` を省略し、読み出し結果はキャッシュの影響を受ける可能性があるものとして解釈してください。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG" alt="Example J601 USB storage throughput result" loading="lazy" />
    <figcaption>J601 における USB ストレージスループット結果の一例</figcaption>
  </figure>
</div>

### USB 2.0 Type-C デバッグポート

このシリアルポートを USB-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

#### Windows

**ステップ 1.** USB-C データケーブルで J601 を PC に接続します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG" alt="J601 USB 2.0 Type-C debug port connection" loading="lazy" />
    <figcaption>J601 USB 2.0 Type-C デバッグポートの接続</figcaption>
  </figure>
</div>


**ステップ 2.** PC に [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) をダウンロードします。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png" alt="Silicon Labs CP210x USB-to-UART driver download page" loading="lazy" />
    <figcaption>Silicon Labs CP210x USB-to-UART ドライバのダウンロードページ</figcaption>
  </figure>
</div>

**ステップ 3.** PC を USB データケーブルで接続し、ダウンロードしたファイルを解凍して、PC にドライバをインストールします。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png" alt="CP210xVCPInstaller_x64.exe selected in the extracted driver folder" loading="lazy" />
    <figcaption>解凍したドライバフォルダ内の CP210xVCPInstaller_x64.exe</figcaption>
  </figure>
</div>

**ステップ 4.** Windows PC でデバイスマネージャーを開き、reComputer J601 に割り当てられた COM ポート番号を確認します。"Ports (COM & LPT)" の下に "Silicon Labs CP210x USB to UART Bridge (COMX)" と表示され、X が COM ポート番号になります。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png" alt="Windows Device Manager showing the USB-to-UART COM port" loading="lazy" />
    <figcaption>USB-to-UART の COM ポートを示す Windows デバイスマネージャー</figcaption>
  </figure>
</div>

**ステップ 5.** シリアルポートツールを開きます（ここでは例として MobaXterm ツールを使用します）。新しいセッションを作成します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png" alt="MobaXterm main window with the recent sessions list, including COM3" loading="lazy" />
    <figcaption>最近のセッション一覧を表示した MobaXterm のメインウィンドウ</figcaption>
  </figure>
</div>

**ステップ 6.** Serial ツールを選択します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png" alt="MobaXterm session type chooser with Serial highlighted" loading="lazy" />
    <figcaption>Serial が選択された MobaXterm のセッションタイプ選択画面</figcaption>
  </figure>
</div>

**ステップ 7.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png" alt="Serial console configured for 115200 baud" loading="lazy" />
    <figcaption>ボーレート 115200 に設定されたシリアルコンソール</figcaption>
  </figure>
</div>

**ステップ 8.** ユーザー名とパスワードを入力して、reComputer J601 にログインします。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png" alt="Jetson serial console login prompt" loading="lazy" />
    <figcaption>Jetson シリアルコンソールのログインプロンプト</figcaption>
  </figure>
</div>

#### Linux

**ステップ 1.** USB-C データケーブルで J601 を Linux PC に接続します。

**ステップ 2.** シリアルデバイスを探します：

```bash
ls /dev/ttyUSB*
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG" alt="Linux USB serial devices for the J601 debug connection" loading="lazy" />
    <figcaption>J601 デバッグ接続用の Linux USB シリアルデバイス</figcaption>
  </figure>
</div>

**ステップ 3.** シリアルコンソールに接続します：

```bash
screen /dev/ttyUSB0 115200
```

これで J601 のシリアルコンソール出力が表示され、ユーザー名とパスワードでログインできるようになります。

## GMSL

Robotics J601 には GMSL カメラ拡張ヘッダが搭載されており、**最大 8 台の GMSL カメラ**を同時に接続でき、マルチカメラのロボットビジョン用途を実現できます。

### 対応 GMSL カメラモデル

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### ハードウェア接続

GMSL 拡張ボードを J601 キャリアボード上のカメラ拡張ヘッダに接続し、その後 GMSL カメラを拡張ボードに接続します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png" alt="J601 board with the heatsink fan and the 40-pin cable fitted, and the two GMSL connectors boxed" loading="lazy" />
    <figcaption>J601 上の GMSL 拡張ボードとカメラ配線</figcaption>
  </figure>
</div>

### 使用手順

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバを含む JetPack バージョンがインストールされていることを確認してください。
:::

**Step 1.** ビデオインターフェース設定ツールをインストールします：

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
#example
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1080]'

v4l2-ctl -d /dev/video0 -c sensor_mode=1

rm -f /tmp/gmsl0.yuyv; mkfifo /tmp/gmsl0.yuyv

v4l2-ctl -d /dev/video0 --stream-mmap=2 --stream-to=/tmp/gmsl0.yuyv >/tmp/gmsl0_v4l2.log 2>&1 &
gst-launch-1.0 -q filesrc location=/tmp/gmsl0.yuyv do-timestamp=true blocksize=4147200 ! rawvideoparse format=yuy2 width=1920 height=1080 framerate=30/1 ! queue max-size-buffers=1 max-size-bytes=0 max-size-time=0 leaky=downstream ! videoconvert ! videoscale method=0 ! video/x-raw,width=892,height=489 ! xvimagesink sync=false async=false max-lateness=0 qos=false force-aspect-ratio=true
```



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png" alt="J601 GMSL camera support table: Sensing SG3S 3G and SG2/SG8S 6G models with resolutions, plus Orbbec Gemini 335Lg" loading="lazy" />
    <figcaption>J601 GMSL カメラストリーム出力</figcaption>
  </figure>
</div>



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png" alt="GMSL camera frame in a video window with the media-ctl output in the terminal" loading="lazy" />
    <figcaption>J601 GMSL カメラ表示</figcaption>
  </figure>
</div>

### Gemini 335Lg のカメラを使用する

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

初回起動時には、ファームウェアの更新が必要になる場合があります。データストリームを開くと、カメラからの映像を確認できます。

## UART

Robotics J601 は、外部デバイスとのシリアル通信のために標準 JST ヘッダ経由の UART インターフェースを提供します。UART ポートは Jetson システム上の `/dev/ttyTHS1` に接続されており、デフォルトのボーレートは 115200 です。

### ハードウェア接続

UART 通信を行うには、以下の配線に従って USB-to-TTL ツールを接続します：

- TX → RX
- RX → TX
- GND → GND

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="J601 UART header and USB-to-TTL wiring" loading="lazy" />
    <figcaption>J601 UART ヘッダと USB-to-TTL 配線</figcaption>
  </figure>
</div>

### 使用手順

USB-to-TTL ツールを Robotics J601 の UART ポートと PC に接続し、PC 側でシリアルポートツールを開いてボーレートを **115200** に設定します。

シリアル通信テストには、簡単な Python スクリプトを使用できます：

```python
import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:
    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

Jetson デバイス上でスクリプトを実行します：

```bash
python3 uart_test.py
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="J601 UART header and USB-to-TTL wiring" loading="lazy" />
    <figcaption>J601 UART ヘッダと USB-to-TTL 配線</figcaption>
  </figure>
</div>

## I2S

Robotics J601 は、オーディオ再生および録音のために、アンプ出力とマイク入力を備えた I2S オーディオインターフェースを提供します。I2S インターフェースは J14 JST GH-1.25 コネクタから引き出されています。

### ピン定義

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 電源 | Power |
| 2 | I2S2_DIN | F6 | I2S2 オーディオポート 2 データ入力（1.8V から 3.3V へレベル変換） | Input |
| 3 | I2S2_FS | E4 | I2S2 オーディオポート 2 左/右クロック（1.8V から 3.3V へレベル変換） | Bidir |
| 4 | I2S2_CLK | G4 | I2S2 オーディオポート 2 クロック（1.8V から 3.3V へレベル変換） | Bidir |
| 5 | I2S2_DOUT | F5 | I2S2 オーディオポート 2 データ出力（1.8V から 3.3V へレベル変換） | Output |
| 6 | - | - | グラウンド | Ground |

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png" alt="J601 I2S header connection" loading="lazy" />
    <figcaption>J601 I2S ヘッダ接続</figcaption>
  </figure>
</div>

### 使用手順

**Step 1.** I2S2 オーディオ MUX を設定し、テストトーン出力を行います：

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
`-l 1` フラグは、テストトーンが 1 回だけ再生され、その後停止することを意味します。
:::

**Step 2.** 任意のオーディオファイルを再生します：

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
`your_audio_file.wav` を実際のオーディオファイルへのパスに置き換えてください。オーディオファイル形式が指定されたサンプルレート（48000 Hz）とチャンネル数（2）に一致していることを確認してください。
:::


## I2C

Robotics J601 は、J12 JST GH-1.25 コネクタ経由の I2C インターフェースを提供し、センサーや周辺機器を容易に接続してシステムを拡張できます。

### ピン定義

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | グラウンド | Ground |
| 2 | DP_AUX_CH2_N | E18 | I2C4_SDA_3V3 | Bidir |
| 3 | DP_AUX_CH2_P | E19 | I2C4_SCL_3V3 | Output |
| 4 | - | - | 3V3 電源 | Power |

:::info
I2C コネクタは、Jetson AGX Thor SoC 上の **I2C4** バスを使用します。
:::

### ハードウェア接続

I2C デバイスをキャリアボード上の I2C インターフェースに接続します：

- Ground → Ground (Pin 1)
- SDA → SDA (Pin 2)
- SCL → SCL (Pin 3)
- Power → 3V3 (Pin 4)

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png" alt="J601 I2C sensor wiring" loading="lazy" />
    <figcaption>J601 I2C センサー配線</figcaption>
  </figure>
</div>

### 使用手順

**Step 1.** I2C テストツールをインストールします：

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Step 2.** I2C バスのマッピングを確認します：

```bash
i2cdetect -l
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG" alt="Linux I2C bus enumeration on J601" loading="lazy" />
    <figcaption>J601 上の Linux I2C バス列挙</figcaption>
  </figure>
</div>

**Step 3.** I2C バス上のデバイスをスキャンします：

```bash
sudo i2cdetect -y -r 1
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png" alt="I2C device address scan on J601" loading="lazy" />
    <figcaption>J601 上の I2C デバイスアドレススキャン</figcaption>
  </figure>
</div>

**Step 4.** I2C デバイスからレジスタを読み取ります。例えば、バス `i2c-1` 上のアドレス `0x58` のデバイスからレジスタ `0x00` を読み取るには：

```bash
sudo i2cget -y 1 0x58 0x00
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png" alt="I2C register read result" loading="lazy" />
    <figcaption>I2C レジスタ読み取り結果</figcaption>
  </figure>
</div>

## GPIO (GPI/GPO)

Robotics J601 は、2 つの JST GH-1.25 コネクタを介してデジタル GPIO インターフェースを提供します：4 つの入力チャネルを持つ **GPI (General Purpose Input)** コネクタ J20 と、4 つの出力チャネルを持つ **GPO (General Purpose Output)** コネクタ J17 です。すべての GPIO 信号は 1.8V（SoC ドメイン）から 3.3V へレベル変換されており、標準的な 3.3V センサーや周辺機器と直接互換性があります。

[J601 V1.0 回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf) では、**GPO は J17**、**I2S は J14** と定義されています。配線の前に、これらのラベルがお使いのボードリビジョンと一致していることを確認してください。

### ピン定義

#### GPI コネクタ - J20（入力）

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 電源 | Power |
| 2 | SPI2_MISO | D62 | GPI_1_3V3（1.8V から 3.3V へレベル変換） | Input, 3.3V |
| 3 | GPIO64 | J6 | GPI_2_3V3（1.8V から 3.3V へレベル変換） | Input, 3.3V |
| 4 | GPIO65 | J7 | GPI_3_3V3（1.8V から 3.3V へレベル変換） | Input, 3.3V |
| 5 | GPIO49 | G6 | GPI_4_3V3（1.8V から 3.3V へレベル変換） | Input, 3.3V |
| 6 | - | - | グラウンド | Ground |

#### GPO コネクタ - J17（出力）

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 電源 | Power |
| 2 | GPIO13 | G7 | GPO_1_3V3（1.8V から 3.3V へレベル変換） | Output, 3.3V |
| 3 | SPI2_CS0_N | D60 | GPO_2_3V3（1.8V から 3.3V へレベル変換） | Output, 3.3V |
| 4 | SPI2_CLK | E61 | GPO_3_3V3（1.8V から 3.3V へレベル変換） | Output, 3.3V |
| 5 | SPI2_MOSI | F60 | GPO_4_3V3（1.8V から 3.3V へレベル変換） | Output, 3.3V |
| 6 | - | - | グラウンド | Ground |

### ハードウェア接続

GH-1.25 ケーブルを使用して、GPIO デバイスをキャリアボード上の GPI または GPO コネクタに接続します：

- VCC → 3V3 (Pin 1)
- Signal → GPI/GPO ピン (Pin 2–5)
- GND → Ground (Pin 6)

### 使用手順

:::note
GPI および GPO ピンには `libgpiod`（`gpioset`/`gpioget`）経由でアクセスできます。`gpioinfo` を使用して GPIO チップおよびライン番号を確認できます。
:::

**Step 1.** GPIO ユーティリティをインストールします：

```bash
sudo apt update
sudo apt-get install gpiod
```

**ステップ 2.** 利用可能なすべての GPIO チップとラインを表示します：

```bash
gpioinfo
```

**ステップ 3.** GPI ピンを読み取ります。例えば、GPI_2（GPIO64、J20 のピン 3）を読み取るには：

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioget <chip> <line>
```

**ステップ 4.** GPO ピンに書き込みます。例えば、GPO_1（GPIO13、J17 のピン 2）を High に設定するには：

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioset <chip> <line>=1
```

**ステップ 5.** `gpiod` ライブラリを使用して Python スクリプト内でピンを使用します：

```python
import gpiod

# Replace chip and line numbers based on your gpioinfo output
chip = gpiod.Chip('<chip_number>')

# Read GPI example
gpi_line = chip.get_line(<gpi_line_number>)
gpi_line.request(consumer="gpi_test", type=gpiod.LINE_REQ_DIR_IN)
print("GPI value:", gpi_line.get_value())

# Write GPO example
gpo_line = chip.get_line(<gpo_line_number>)
gpo_line.request(consumer="gpo_test", type=gpiod.LINE_REQ_DIR_OUT)
gpo_line.set_value(1)  # Set high
```

## CAN

CAN（Controller Area Network）は、ホストコンピュータなしでマイコンやデバイス同士が通信できる堅牢な車載バス規格です。**T5000** モジュールを使用すると、Robotics J601 は JST GH-1.25 コネクタ経由で **4 つの CAN FD インターフェース**（CAN0–CAN3）を提供します。**T4000** モジュールは **2 つの CAN インターフェース**をサポートします。テスト用にポートを選択する前に、`ip -details link show type can` を使用して BSP によって公開されているインターフェースを確認してください。

### CAN コネクタのピンマッピング

| CAN インターフェース | コネクタ | ピン 1 | ピン 2 | ピン 3 | ピン 4 |
| --- | --- | --- | --- | --- | --- |
| CAN0 | J31 | Ground | CAN0_L_ISO | CAN0_H_ISO | 5V Power |
| CAN1 | J30 | Ground | CAN1_L_ISO | CAN1_H_ISO | 5V Power |
| CAN2 | J28 | Ground | CAN2_L_ISO | CAN2_H_ISO | 5V Power |
| CAN3 | J25 | Ground | CAN3_L_ISO | CAN3_H_ISO | 5V Power |

:::info
CAN インターフェースは絶縁されています。各コネクタはピン 4 から 5V 電源を供給します。コネクタ表はキャリアボードの配線を示しており、どのインターフェースが利用可能かは搭載されているモジュールによって決まります。
:::

### 120Ω 終端抵抗の制御

各 CAN インターフェースには、ソフトウェア制御の 120Ω 終端抵抗があります。GPIO のマッピングは次のとおりです：

| インターフェース | GPIO チップ | GPIO ライン | 制御名 |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | CAN0 終端 |
| CAN1_120R_EN_3V3 | 3 | 1 | CAN1 終端 |
| CAN2_120R_EN_3V3 | 3 | 2 | CAN2 終端 |
| CAN3_120R_EN_3V3 | 3 | 3 | CAN3 終端 |
| RS485_120R_EN_3V3 | 3 | 4 | RS485 終端 |

対応する GPIO ラインは次のコマンドで確認できます：

```bash
gpioinfo
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG" alt="J601 GPIO lines used for termination control" loading="lazy" />
    <figcaption>終端制御に使用される J601 の GPIO ライン</figcaption>
  </figure>
</div>

### CAN クラシック通信

ここでは CAN0 と CAN1 間のデータ通信をデモします。

**ステップ 1.** CAN ユーティリティをインストールします：

```bash
sudo apt update
sudo apt install can-utils -y
```

**ステップ 2.** CAN インターフェースを設定します：

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**ステップ 3.** 新しいターミナルを開き、CAN1 でデータを受信し、CAN0 からデータを送信します：

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png" alt="J601 classic CAN communication result" loading="lazy" />
    <figcaption>J601 クラシック CAN 通信結果</figcaption>
  </figure>
</div>

### CAN FD モード

CAN FD（Flexible Data-Rate）は、クラシック CAN プロトコルを拡張し、より高いデータレートと最大 64 バイトまでの大きなペイロードをサポートします。

**ステップ 1.** CAN0 と CAN1 を FD モード用に設定します：

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

sudo ip link set can0 txqueuelen 2000
sudo ip link set can1 txqueuelen 2000

sudo ip link set up can0
sudo ip link set up can1
```

**ステップ 2.** 新しいターミナルを開き、CAN FD 通信をテストします：

```bash
# Listen on CAN1 with extended output
candump can1 -x

# Test 1: Send a 16-byte frame with BRS active
cansend can0 5AA##111223344556677889900AABBCCDD

# Test 2: Send a full 64-byte payload frame with BRS active
cansend can0 7DF##1101020203030404050506060707080809090A0A0B0B0C0C0D0D0E0E0F0F0111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF
```

:::info
- `5AA` / `7DF` は CAN ID です
- `##` は CAN FD フレームを示します
- `##` の後の数字は BRS（Bit Rate Switch）フラグで、`1` = BRS 有効 を意味します
- その後に続くのがデータペイロードです（64 バイトの場合は最大 128 文字の 16 進数）
:::

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png" alt="J601 CAN FD communication result" loading="lazy" />
    <figcaption>J601 CAN FD 通信結果</figcaption>
  </figure>
</div>

### CAN 包括テストスクリプト

次のスクリプトは、依存関係の確認、インターフェース設定、基本的な通信検証、および 10 秒間のストレステストを含む、完全な CAN FD テストを実行します。

テストスクリプトを作成します：

```bash
vim can_test.sh
```

次の内容を貼り付けます：

<details>
<summary>CAN テストスクリプトを展開するにはクリック</summary>

```bash
#!/bin/bash

# Color output definitions
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Assign interfaces from arguments, default to can0 and can1 if empty
TX_DEV=${1:-can0}
RX_DEV=${2:-can1}

echo -e "${YELLOW}=== Jetson $TX_DEV <-> $RX_DEV Comprehensive Test Script ===${NC}"
echo -e "Note: Please ensure ${TX_DEV}_H -> ${RX_DEV}_H and ${TX_DEV}_L -> ${RX_DEV}_L are physically wired.\n"

# 1. Dependency Check
if ! command -v candump &> /dev/null; then
    echo -e "${YELLOW}[1/5] Installing can-utils...${NC}"
    sudo apt update && sudo apt install can-utils -y
else
    echo -e "${GREEN}[1/5] can-utils is already installed.${NC}"
fi

# 2. Reset and Configure Interfaces (Arbitration: 500K, Data: 2M, FD & BRS enabled)
echo -e "${YELLOW}[2/5] Configuring $TX_DEV and $RX_DEV (CAN FD Mode)...${NC}"
for dev in "$TX_DEV" "$RX_DEV"; do
    # Check if the interface exists in the system
    if ! ip link show "$dev" &> /dev/null; then
        echo -e "${RED}[ERROR] Interface $dev does not exist. Please check your spelling or hardware.${NC}"
        exit 1
    fi
    sudo ip link set down "$dev" 2>/dev/null
    sudo ip link set "$dev" type can bitrate 500000 dbitrate 2000000 fd on
    # Increase transmit queue length to prevent packet loss under heavy load
    sudo ip link set "$dev" txqueuelen 2000
    sudo ip link set up "$dev"
done
sleep 1

# 3. Basic Communication Test (Classic CAN Frame)
echo -e "${YELLOW}[3/5] Starting Basic Communication Test...${NC}"
# Listen for 1 frame on the receiver interface in the background and dump to a temp file
candump "$RX_DEV" -n 1 > /tmp/can_test_rx.log &
DUMP_PID=$!
sleep 0.5

# Send a single classic CAN frame from the transmitter interface
cansend "$TX_DEV" 123#DEADBEEF

# Wait for the background dump process to finish
wait $DUMP_PID 2>/dev/null

# Validate basic data
if grep -q "DE AD BE EF" /tmp/can_test_rx.log; then
    echo -e "${GREEN}[PASS] Basic communication successful! Data verified.${NC}"
else
    echo -e "${RED}[FAIL] Basic communication failed! No data received or data corrupted.${NC}"
    tail -n 2 /tmp/can_test_rx.log 2>/dev/null
    exit 1
fi

# 4. CAN FD High-Load Stress Test
echo -e "${YELLOW}[4/5] Starting CAN FD Stress & Stability Test (10 Seconds)...${NC}"
echo -e "--> $TX_DEV generating high-frequency 64-byte BRS random data stream to $RX_DEV..."

# Flood the bus using cangen (-f for FD, -b for BRS, -g 1 for 1ms interval)
cangen "$TX_DEV" -f -b -g 1 >/dev/null 2>&1 &
GEN_PID=$!

# Countdown timer
for i in {10..1}; do
    echo -ne "Remaining Time: ${i}s \r"
    sleep 1
done
echo ""

# Stop data generation
kill $GEN_PID 2>/dev/null
wait $GEN_PID 2>/dev/null
sleep 1

# 5. Analyze and Print Performance Report
echo -e "${YELLOW}[5/5] Generating Performance Report...${NC}"
echo "--------------------------------------------------"
echo -e "${YELLOW}$RX_DEV Receiver Statistics:${NC}"
# Extract packets and hardware error counters
ip -details -statistics link show "$RX_DEV" | grep -E -A 3 "(RX:|errors)"
echo "--------------------------------------------------"

# Smart assessment based on RX errors
ERRORS=$(ip -details -statistics link show "$RX_DEV" | grep -A 1 "RX: errors" | tail -n 1 | awk '{print $1}')
if [ "$ERRORS" ] && [ "$ERRORS" -gt 0 ]; then
    echo -e "${RED}[WARNING] Test completed, but $RX_DEV encountered $ERRORS errors/dropped packets during stress testing. Check your wiring and termination resistors!${NC}"
else
    echo -e "${GREEN}[SUCCESS] CAN FD stress test passed! Zero packet loss, zero hardware errors on $RX_DEV. Excellent board performance.${NC}"
fi

# Cleanup and tear down interfaces
for dev in "$TX_DEV" "$RX_DEV"; do sudo ip link set down "$dev"; done
rm -f /tmp/can_test_rx.log
```

</details>

スクリプトに実行権限を与え、任意の 2 つの CAN インターフェースをテストするために実行します：

```bash
chmod +x can_test.sh
./can_test.sh can0 can1
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png" alt="J601 CAN test script output" loading="lazy" />
    <figcaption>J601 CAN テストスクリプトの出力</figcaption>
  </figure>
</div>



## RS485

reComputer J601 キャリアボードには、J24 JST GH-1.25 4 ピンコネクタから出ている専用の絶縁 RS-485 ポートがあります。ピン定義は次のとおりです：

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/rs485-jstpin.png" alt="J601 J24 RS-485 connector pinout" loading="lazy" />
    <figcaption>J601 J24 RS-485 コネクタのピン配置</figcaption>
  </figure>
</div>

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/jst485-c.png" alt="USB-to-RS485 adapter wired to Data+(A) and Data-(B) on the J601 terminal block" loading="lazy" />
    <figcaption>J601 専用 RS-485 ヘッダー配線</figcaption>
  </figure>
</div>

ここでは `usb-to-rs485` を使用してテストします：

```bash
#[Jetson] Init UART: 115200 baud, 8N1, raw mode, no flow control.
sudo stty -F /dev/ttyAMA10 115200 cs8 -cst -parenb -ixon -ixoff -crtscts raw -echo
# [Jetson] Enable and verify RS485 mode via ioctl (TIOCSRS485 / TIOCGRS485).
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
# Verification output:(3, 0, 20, 0, 0, 0, 0, 0)

#[PC] Init USB UART with identical parameters.
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#[Jetson] Listen for data.
sudo cat /dev/ttyAMA10
#[PC] Send message.
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#[PC] Listen for data.
sudo cat /dev/ttyUSB0
#[Jetson] Send message.、
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png" alt="RS-485 port 1 test: received pattern data and &quot;hello from pc&quot; in the serial console" loading="lazy" />
    <figcaption>J601 485 1 インターフェース接続</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png" alt="RS-485 port 2 test: received pattern data and &quot;hello from pc&quot; in the serial console" loading="lazy" />
    <figcaption>J601 485 2 インターフェース接続</figcaption>
  </figure>
</div>



## DB9 (RS232 / RS422 / RS485) {#db9}

Robotics J601 はソフトウェアで選択可能な DB9 シリアルインターフェースを 1 つ提供します。DB9 ポートは Jetson システム上の `/dev/ttyAMA9` に接続されており、SW3 DIP スイッチを設定することで RS232、RS422、RS485 のいずれかに構成できます。

### ピン定義

各 DB9 ピンの機能は、選択した通信モードによって異なります。アダプタを配線する前に、以下の表とコネクタ図を参照してください。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png" alt="DB9 pin numbering with the RS-232 / RS-422 / RS-485 pin assignment table for the MODE settings" loading="lazy" />
    <figcaption>J601 db9 設定インターフェース接続</figcaption>
  </figure>
</div>

### RS485 モード
### ハードウェア構成

ボード底面のスイッチを、下図のように RS485 モードに切り替えます。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-mode.png" alt="SW2 switch with the RS485 Mode OFF_1 / ON_0 positions boxed" loading="lazy" />
    <figcaption>J601 485 モードインターフェース接続</figcaption>
  </figure>
</div>

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c.png" alt="USB-to-RS485 adapter wired to Data+(A) and Data-(B) on the J601 terminal block" loading="lazy" />
    <figcaption>J601 485 c インターフェース接続</figcaption>
  </figure>
</div>

:::tip
RS485 配線では、USB-RS485 アダプタの `A/D+` を DB9 ピン 2 に、`B/D-` を DB9 ピン 1 に接続します。一部の USB-RS485 アダプタでは A/B の表示が逆になっている場合があります。PC が送信していないのに Jetson がランダムなバイトを受信する場合は、A と B を入れ替えて再度テストしてください。
:::

### 通信テスト

ここでは、minicom を使用してテストを行います：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
minicom で入力した文字を表示するには、Local Echo 機能を有効にする必要があります。デフォルトでは minicom はキー入力を表示しないため、これは非常によくある問題です。
- step 1. `Ctrl+A` を押します
- step 2. 次に `E` を押します

:::

PC から Jetson へメッセージを送信するテストを行います。 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c1.png" alt="minicom windows on the PC and the Jetson exchanging &quot;hello jetson&quot; over RS-485" loading="lazy" />
    <figcaption>J601 DB9 RS-485 ハードウェア接続</figcaption>
  </figure>
</div>

RS485 は半二重プロトコルであるため、Jetson が RS485 経由で PC に情報を送信できることをテストするには、RS485 モードを有効にする必要があります。
- step 1. `Ctrl+A` を押します
- step 2. 次に `O` を押して設定オプションを開きます。


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c2.png" alt="Serial tool configuration menu for RS-485" loading="lazy" />
    <figcaption>RS-485 用シリアルツール設定メニュー</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c3.png" alt="Serial tool RS-485 configuration settings" loading="lazy" />
    <figcaption>シリアルツール RS-485 設定</figcaption>
  </figure>
</div>

最後に、Jetson から PC へメッセージを送信できるようになります。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c4.png" alt="RS-485 received data in the host serial console" loading="lazy" />
    <figcaption>ホストシリアルコンソールで受信した RS-485 データ</figcaption>
  </figure>
</div>

### RS232 モード 

### ハードウェア構成

ボード底面のスイッチを、下図のように RS232 モードに切り替えます。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-mode.png" alt="SW2 mode switch set for RS-232 on the J601 board" loading="lazy" />
    <figcaption>J601 232 モードインターフェース接続</figcaption>
  </figure>
</div>

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c.png" alt="TX, RX and GND wired between the J601 RS-232 header and the USB-to-TTL adapter" loading="lazy" />
    <figcaption>J601 232 c インターフェース接続</figcaption>
  </figure>
</div>

:::tip
- TX → RX
- RX → TX
- GND → GND
:::

### 通信テスト

ここでは、minicom を使用してテストを行います：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
minicom で入力した文字を表示するには、Local Echo 機能を有効にする必要があります。デフォルトでは minicom はキー入力を表示しないため、これは非常によくある問題です。
- step 1. `Ctrl+A` を押します
- step 2. 次に `E` を押します
:::

PC から Jetson へメッセージを送信するテストを行います。 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c1.png" alt="minicom windows on the PC and the Jetson exchanging &quot;Hello Jetson Rs232test&quot;" loading="lazy" />
    <figcaption>J601 DB9 RS-232 モードスイッチ位置</figcaption>
  </figure>
</div>


テストモードもオンにします。
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c2.png" alt="minicom serial port setup with RS485 Enable set to Yes during the RS-232 test" loading="lazy" />
    <figcaption>J601 RS-232 ホスト接続</figcaption>
  </figure>
</div>

Jetson から PC へメッセージを送信します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c3.png" alt="RS-232 received data in the host serial console" loading="lazy" />
    <figcaption>ホストシリアルコンソールで受信した RS-232 データ</figcaption>
  </figure>
</div>

### RS422 モード

### ハードウェア構成

ボード底面のスイッチを、下図のように RS422 モードに切り替えます。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-mode.png" alt="SW2 mode switch set for RS-422 on the J601 board" loading="lazy" />
    <figcaption>J601 422 モードインターフェース接続</figcaption>
  </figure>
</div>

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c.png" alt="RX+, RX-, TX+ and TX- wired between the J601 RS-422 header and the USB adapter, with a common GND" loading="lazy" />
    <figcaption>J601 422 c インターフェース接続</figcaption>
  </figure>
</div>

:::tip
- RXD+ ←─────→  TXD+  
- RXD- ←─────→  TXD-  
- TXD+ ←─────→  RXD+  
- TXD- ←─────→  RXD-
- GND  ←─────→  GND
:::

### 通信テスト

ここでは、minicom を使用してテストを行います：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
minicom で自分が入力したテキストを表示するには、Local Echo 機能を有効にする必要があります。デフォルトでは minicom はキー入力を表示しないため、これは非常によくある問題です。
- step 1. `Ctrl+A` を押します
- step 2. 次に `E` を押します
:::

PC から Jetson へメッセージを送信するテストを行います。


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c1.png" alt="minicom on the PC and the Jetson showing the first RS-422 test exchange" loading="lazy" />
    <figcaption>J601 422 c1 インターフェース接続</figcaption>
  </figure>
</div>


テストモードもオンにします。
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c2.png" alt="both minicom windows after the RS-422 test, each showing &quot;Hello Jetson RS422 Test&quot;" loading="lazy" />
    <figcaption>J601 422 c2 インターフェース接続</figcaption>
  </figure>
</div>


## RGB {#rgb}

<details>
<summary>test_rgb.sh</summary>

```bash
#!/bin/bash

# ==============================================================================
# Script Name: test_rgb.sh
# Target Platform: Seeed reComputer J601 (Jetson)
# Description: Automatically tests RGB LEDs by lighting up Red, Green, Blue, 
#              and White colors sequentially for 1 second each.
# Usage: sudo ./test_rgb.sh
# ==============================================================================

# Define LED paths
LED_DIR="/sys/class/leds"
RED="$LED_DIR/red/brightness"
GREEN="$LED_DIR/green/brightness"
BLUE="$LED_DIR/blue/brightness"

# Check if running as root (sysfs write access requires root privileges)
if [ "$EUID" -ne 0 ]; then
    echo "Error: Please run this script with sudo!"
    echo "Example: sudo $0"
    exit 1
fi

# Check if the hardware paths exist
if [ ! -d "$LED_DIR/red" ] || [ ! -d "$LED_DIR/green" ] || [ ! -d "$LED_DIR/blue" ]; then
    echo "Error: RGB LED hardware paths not found. Please check your driver or device model."
    exit 1
fi

# Helper function: Control LED states
# Arguments: set_leds <Red(0/1)> <Green(0/1)> <Blue(0/1)>
set_leds() {
    echo "$1" > "$RED"
    echo "$2" > "$GREEN"
    echo "$3" > "$BLUE"
}

echo "========================================"
echo "         Starting Jetson RGB LED Test    "
echo "========================================"

# 1. Initialization: Turn off all LEDs
echo "-> Initializing: Turning off all LEDs"
set_leds 0 0 0
sleep 0.5

# 2. Red LED on for 1 second
echo "-> [ON] Red Light"
set_leds 1 0 0
sleep 1

# 3. Green LED on for 1 second
echo "-> [ON] Green Light"
set_leds 0 1 0
sleep 1

# 4. Blue LED on for 1 second
echo "-> [ON] Blue Light"
set_leds 0 0 1
sleep 1

# 5. Mixed White LED on for 1 second (Red + Green + Blue mixed)
echo "-> [ON] White Light (RGB Mixed)"
set_leds 1 1 1
sleep 1

# 6. Test completed, turn off all LEDs
echo "-> Test completed: Turning off all LEDs"
set_leds 0 0 0

echo "========================================"
echo "             LED Test Ended             "
echo "========================================"
```

</details>

```bash
sudo chmod +x test_rgb.sh
sudo ./test_rgb.sh
```
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif" alt="J601 user RGB LED color test" loading="lazy" />
    <figcaption>J601 ユーザー RGB LED カラーテスト</figcaption>
  </figure>
</div>

## Ethernet

Robotics J601 キャリアボードは、**T5000 使用時は 4× 10GbE RJ45 接続**、**T4000 使用時は 3× 10GbE** をサポートします。ポートをテストするには、別のピアシステムと適切なケーブルを使用します。

### ハードウェア接続

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png" alt="Four RJ45 Ethernet ports and two M12 connectors on the J601 front panel" loading="lazy" />
    <figcaption>J601 RJ45 Ethernet ポート位置</figcaption>
  </figure>
</div>

### 使用手順

両方のシステムに `iperf3` をインストールします。ピアシステム側でサーバーを起動します：

```bash
sudo apt install iperf3
iperf3 -s
```

J601 では、`ip -br address` を使用してテスト対象ポートに割り当てられたアドレスを確認し、次を実行します：

**アップロード速度テスト：**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png" alt="J601 Ethernet upload throughput measurement" loading="lazy" />
    <figcaption>J601 Ethernet アップロードスループット測定</figcaption>
  </figure>
</div>

**ダウンロード速度テスト：**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png" alt="J601 Ethernet download throughput measurement" loading="lazy" />
    <figcaption>J601 Ethernet ダウンロードスループット測定</figcaption>
  </figure>
</div>

:::info
- `<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
- `<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスをバインドします。
- `-R` フラグは、ダウンロード速度テストのためにテスト方向を反転させます。
:::

## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクタで、主に Wi-Fi や Bluetooth などの無線モジュールを接続し、無線通信機能を拡張するために使用されます。

### ハードウェア接続

電源を切った状態で、対応する M.2 2230 Wi-Fi/Bluetooth モジュールを Key E スロットに装着し、アンテナを接続します。以下のファームウェア例は **RTL8822CE** モジュールに適用されます。他のモジュールでは、それぞれ専用のドライバとファームウェアが必要です。

### 使用手順

**Step 1.** Wi-Fi ドライバーファームウェアをインストールします：

```bash
# Decompress firmware files
cd /lib/firmware/rtw88/
sudo zstd -d rtw8822c_fw.bin.zst -o rtw8822c_fw.bin
sudo zstd -d rtw8822c_wow_fw.bin.zst -o rtw8822c_wow_fw.bin

# Load the driver modules
sudo modprobe rtw88_core
sudo modprobe rtw88_pci
sudo modprobe rtw88_8822c
sudo modprobe rtw88_8822ce
```

**Step 2.** デバイスを再起動します：

```bash
sudo reboot
```

**Step 3.** 再起動後、無線インターフェースを有効化します：

```bash
sudo ip link set wlP1p1s0 up
```

**Step 4.** 利用可能な Wi-Fi ネットワークをスキャンします：

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png" alt="Wi-Fi network scan on J601" loading="lazy" />
    <figcaption>J601 での Wi-Fi ネットワークスキャン</figcaption>
  </figure>
</div>

**Step 5.** Wi-Fi ネットワークに接続します：

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png" alt="J601 Wi-Fi connection result" loading="lazy" />
    <figcaption>J601 Wi-Fi 接続結果</figcaption>
  </figure>
</div>

### Bluetooth

Bluetooth 機能は M.2 Key E スロット経由で利用できます。

**Step 1.** Bluetooth 制御ツールを開きます：

```bash
bluetoothctl
```

**Step 2.** 電源をオンにして、近くの Bluetooth デバイスをスキャンします：

```bash
power on
scan on
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png" alt="Bluetooth device scan on J601" loading="lazy" />
    <figcaption>J601 での Bluetooth デバイススキャン</figcaption>
  </figure>
</div>

## 5G モジュール (M.2 Key B)

M.2 Key B スロットは 5G モジュール拡張をサポートしており、ロボティクスやエッジ AI シナリオ向けに高速セルラー接続を実現します。

### ハードウェア接続

5G モジュールを M.2 Key B スロットに装着し、アンテナを接続します。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png" alt="Cellular module installed in the J601 M.2 Key B slot" loading="lazy" />
    <figcaption>J601 M.2 Key B スロットに装着されたセルラーモジュール</figcaption>
  </figure>
</div>

### 使用手順

**Step 1.** 5G モジュールのシリアルコンソールを開きます：

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Step 2.** **Ctrl+A** を押してから **E** を押し、インタラクティブモードに入ります。

**Step 3.** AT コマンドをテストします：

```
AT
```

**Step 4.** 電波強度を確認します：

```
AT+CSQ
```

**Step 5.** 登録されているネットワークオペレーターを確認します：

```
AT+COPS?
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png" alt="lsusb output listing the Quectel EM060K-EA modem on the USB bus" loading="lazy" />
    <figcaption>セルラーモジュールの認識と AT コマンド出力</figcaption>
  </figure>
</div>

### Nano SIM

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png" alt="Ubuntu Settings mobile network panel showing the CHN-CT operator and network mode" loading="lazy" />
    <figcaption>J601 Nano SIM スロット位置</figcaption>
  </figure>
</div>

### GPS

GPS の利用可否と AT コマンドは、搭載されているセルラーモジュールに依存します。以下の例では Quectel 形式の `AT+QGPS` コマンドを使用しています。対応状況とシリアルポートの割り当てについては、使用するモジュールのドキュメントで確認してください。

### 使用手順

**Step 1.** GPS AT コマンドポートを開きます：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Step 2.** GPS 受信機を有効にします：

```
AT+QGPS=1
```

:::info
- 応答が `OK` の場合、GPS 受信機は正常に起動しています。
- 応答が `+CME ERROR: 549` の場合、GPS はすでに有効になっているため、再度有効化する必要はありません。
:::

**Step 3.** **Ctrl+A** を押してから **X** を押し、**Yes** を選択して minicom を終了します。

**ステップ 4.** GPS を有効にすると、衛星データが GPS データポート（通常は `/dev/ttyUSB1`）からストリーミングされます。生の NMEA データを読み取ります：

```bash
sudo cat /dev/ttyUSB1
```

標準的な GPS NMEA センテンスが次のように表示されます：

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
GPS 信号を取得するために、空がよく見える場所にいることを確認してください。有効な測位が得られるまで数分かかる場合があります。
:::

## リソース

[J601 resource collection](/ja/jetson/recomputer_robotics_j601/getting_started/#resources) では、キャリアボードのデータシート、V1.0 回路図、STEP メカニカルモデル、Linux_for_Tegra BSP ソースを提供しています。信号配線およびコネクタのリファレンスデザイン名には回路図を使用してください。

## 関連リソース

- [reComputer Robotics J401 のインターフェースとピン配置](/ja/recomputer_jetson_robotics_j401_getting_started/)
- [reComputer で EtherCAT 通信を実装する](/ja/recomputer_ethercat_communication/)
- [GR00T N1.7 をファインチューニングして Robotics J601 にデプロイする](/ja/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [wiki-documents リポジトリとディスカッション](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
