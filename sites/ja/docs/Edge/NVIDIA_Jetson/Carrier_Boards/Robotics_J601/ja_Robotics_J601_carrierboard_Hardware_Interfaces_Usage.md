---
description: このWikiでは、reComputer Jetson Robotics J601キャリアボードのハードウェア機能とインターフェースの使用方法について包括的に紹介します。詳細な仕様、対応モジュール、セットアップ手順、M.2、Ethernet、USB、CAN、RS485/RS232、UART、I2C、I2S、GMSL2カメラ拡張、5G、GPS など各種インターフェースの実用的な使用ガイドを網羅し、ユーザーがJ601プラットフォーム上でのロボティクス開発を素早く開始できるよう支援します。
title: インターフェースの使用方法
tags:
  - J601-Robotics キャリアボード
  - Jetson
  - AGX Thor
  - ロボティクス
  - インターフェースの使用方法
  - インターフェース
  - ハードウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 06/18/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-06-18'
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Robotics J601 キャリアボード ハードウェアインターフェースの使用方法

reComputer Robotics J601 は、NVIDIA Jetson AGX Thor モジュール向けに設計された高性能ロボティクスキャリアボードで、高度なエンボディドAIおよびロボット制御アプリケーションをターゲットとしています。高速 Ethernet、5G および Wi-Fi/BT モジュール用の M.2 スロット、USB 3.2 ポート、4系統の CAN（CAN FD 対応）、RS-232/485、I2C、I2S、UART、GMSL2 拡張（最大 8 台のカメラ）、ワイドレンジ DC 入力など、豊富な接続オプションを備えており、各種センサーからの複雑なデータを処理できる強力なロボットブレインとして機能します。

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1 などのフレームワークをサポートする reComputer Robotics J601 は、大規模言語モデルによる意思決定と、モーションプランニングやセンサーフュージョンといった物理ロボット制御との橋渡しを行います。自律ロボットの迅速な開発に最適で、すぐに使えるインターフェースと最適化されたAIフレームワークにより、製品化までの時間を短縮します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>
## インターフェースの使用方法

以下では、Robotics J601 ボードの各種インターフェースとその使用方法について紹介します。

## USB

Robotics J601 キャリアボードには複数の USB ポートが搭載されており、高速な周辺機器接続用の USB 3.2 Type-A ポート（ホスト）、フラッシュ用の USB 3.0 Type-C ポートが 1 つ、デバイスモード/デバッグ用の USB 2.0 Type-C ポートが 1 つ含まれます。

### USB 3.2 スピードテスト

USB 3.0 フラッシュドライブを挿入し、その読み書き速度をテストします。実際の速度は USB ドライブ自体の性能に依存する点に注意してください。

テストスクリプトを作成します：

```bash
vim test_usb_speed.sh
```

次の内容を貼り付けます：

```bash
#!/bin/bash

echo "seeed" | sudo -S dd if=/dev/zero of=/dev/sda bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
echo "seeed" | sudo -S dd if=/dev/sda of=/dev/null bs=1000M count=2
```

:::info
`/dev/sda` を実際の USB ドライブのデバイス名に置き換えてください。`lsblk` を使用して確認できます。
:::

スクリプトに実行権限を与えて実行します：

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### USB 2.0 Type-C デバッグポート

このシリアルポートを USB-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

#### Windows

**Step 1.** USB-C データケーブルで J601 を PC に接続します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG"/>
</div>


**Step2.** PC に [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) をダウンロードします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** PC を USB データケーブルで接続し、ダウンロードしたファイルを解凍して PC にドライバをインストールします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Windows PC でデバイスマネージャーを開き、reComputer Super に割り当てられた COM ポート番号を確認します。"Ports (COM & LPT)" の下に "Silicon Labs CP210x USB to UART Bridge (COMX)" と表示され、X が COM ポート番号になります。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Step5.** シリアルポートツールを開きます（ここでは例として MobaXterm ツールを使用）、新しいセッションを作成します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Serial ツールを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Step8.** ユーザー名とパスワードで reComputer Super にログインします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

#### Linux

**Step 1.** USB-C データケーブルで J601 を Linux PC に接続します。

**Step 2.** シリアルデバイスを探します：

```bash
ls /dev/ttyUSB*
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG"/>
</div>

**Step 3.** シリアルコンソールに接続します：

```bash
screen /dev/ttyUSB0 -b 115200
```

これで J601 のシリアルコンソール出力が表示され、ユーザー名とパスワードでログインできるようになります。

## GMSL

Robotics J601 には GMSL カメラ拡張ヘッダーが搭載されており、**最大 8 台の GMSL カメラ** を同時にサポートし、マルチカメラによるロボットビジョンアプリケーションを実現できます。

### 対応 GMSL カメラモデル

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### ハードウェア接続

GMSL 拡張ボードを J601 キャリアボード上のカメラ拡張ヘッダーに接続し、その後 GMSL カメラを拡張ボードに接続します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png"/>
</div>

### 使用手順

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバを含む JetPack バージョンをインストールしていることを確認してください。
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



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png"/>
</div>



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png"/>
</div>

### Gemini 335Lg カメラの使用

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

初回起動時には、ファームウェアの更新が必要になる場合があります。データストリームを開くと、カメラからの映像を確認できます。

## I2S

Robotics J601 は、アンプ出力およびマイク入力を備えた I2S オーディオインターフェースを提供し、音声の再生と録音が可能です。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png"/>
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

**Step 2.** 自分のオーディオファイルを再生します：

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
`your_audio_file.wav` を実際のオーディオファイルへのパスに置き換えてください。オーディオファイルの形式が、指定されたサンプルレート（48000 Hz）およびチャンネル数（2）と一致していることを確認してください。
:::

## UART

Robotics J601 は、外部デバイスとのシリアル通信のために、標準 JST ヘッダー経由の UART インターフェースを提供します。

### ハードウェア接続

UART 通信を行うには、以下の配線に従って USB-to-TTL ツールを接続します：

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
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

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

## RGB

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
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif"/>
</div>

## I2C

Robotics J601 は標準 JST ヘッダを介して I2C インターフェースを提供しており、センサーや周辺機器を簡単に接続してシステムを拡張できます。

### ハードウェア接続

I2C デバイスをキャリアボード上の I2C インターフェースに接続します：

- 電源 → 電源
- SDA → SDA
- SCL → SCL
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png"/>
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

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG"/>
</div>

**Step 3.** I2C バス上のデバイスをスキャンします：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**Step 4.** I2C デバイスからレジスタを読み取ります。例えば、バス `i2c-1` 上のアドレス `0x58` のデバイスからレジスタ `0x00` を読み取るには：

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## CAN

CAN（Controller Area Network）は、ホストコンピュータなしでマイコンやデバイス同士が通信できる堅牢な車載バス規格です。Robotics J601 は JST コネクタ経由で **4 つの CAN インターフェース**（CAN0、CAN1、CAN2、CAN3）を提供し、すべて CAN FD モードをサポートします。

### 120Ω 終端抵抗の制御

各 CAN インターフェースには、ソフトウェア制御可能な 120Ω 終端抵抗があります。GPIO のマッピングは次のとおりです：

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

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG"/>
</div>

### CAN クラシック通信

ここでは CAN0 と CAN1 間のデータ通信をデモします。

**Step 1.** CAN ユーティリティをインストールします：

```bash
sudo apt update
sudo apt install can-utils -y
```

**Step 2.** CAN インターフェースを設定します：

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**Step 3.** 新しいターミナルを開き、CAN1 でデータを受信し、CAN0 からデータを送信します：

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png"/>
</div>

### CAN FD モード

CAN FD（Flexible Data-Rate）は、クラシック CAN プロトコルを拡張し、より高いデータレートと（最大 64 バイトまでの）大きなペイロードをサポートします。

**Step 1.** CAN0 と CAN1 を FD モード用に設定します：

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

**Step 2.** 新しいターミナルを開き、CAN FD 通信をテストします：

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

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### CAN 包括テストスクリプト

次のスクリプトは、依存関係の確認、インターフェース設定、基本的な通信検証、および 10 秒間のストレステストを含む、完全な CAN FD テストを実行します。

テストスクリプトを作成します：

```bash
vim can_test.sh
```

次の内容を貼り付けます：

<details>
<summary>クリックして CAN テストスクリプトを展開</summary>

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

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png"/>
</div>



# RS485

```bash
#Jetson 
sudo stty -F /dev/ttyAMA10 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
#(3, 0, 20, 0, 0, 0, 0, 0)

#PC
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#jetson
sudo cat /dev/ttyAMA10
#PC
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#PC 收
sudo cat /dev/ttyUSB0
#jetson
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png"/>
</div>



## DB9（RS232 / RS422 / RS485）

Robotics J601 は、ソフトウェアで切り替え可能な 1 つの DB9 シリアルインターフェースを提供します。DB9 ポートは Jetson システム上の `/dev/ttyAMA9` に接続されており、SW3 DIP スイッチを設定することで RS232、RS422、または RS485 として構成できます。

### ハードウェア接続

各 DB9 ピンの機能は、選択した通信モードによって異なります。アダプタを配線する前に、以下の表とコネクタ図を参照してください。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

| DB9 ピン | RS232 モード | RS422 モード | RS485 モード |
| --- | --- | --- | --- |
| 1 | - | TXD- (B) | Data- (B) |
| 2 | RXD | TXD+ (A) | Data+ (A) |
| 3 | TXD | RXD+ (A) | - |
| 4 | - | RXD- (B) | - |
| 5 | GND | GND | GND |
| 6 | - | - | - |
| 7 | RTS | - | - |
| 8 | CTS | - | - |
| 9 | - | - | - |

:::tip
RS485 配線では、USB-RS485 アダプタの `A/D+` を DB9 ピン 2 に、`B/D-` を DB9 ピン 1 に、`GND` を DB9 ピン 5 に接続します。一部の USB-RS485 アダプタでは A/B のラベルが逆になっている場合があります。PC が送信していないのに Jetson がランダムなバイトを受信する場合は、A と B を入れ替えて再度テストしてください。
:::

### SW3 で DB9 モードを選択

SW3 は、スイッチが ON のときに各モードピンを Low にプルダウンします。言い換えると、**ON = 0**、**OFF = 1** です。

| モード | 回路図上の MODE 値 (MODE_0 MODE_1 MODE_2) | SW3-1 (MODE_0) | SW3-2 (MODE_1) | SW3-3 (MODE_2) | SW3-4 (SLEW) |
| --- | --- | --- | --- | --- | --- |
| RS232 | `001` | ON | ON | OFF | ON 推奨 |
| RS422 | `000` | ON | ON | ON | ON 推奨 |
| RS422 | `100` | OFF | ON | ON | ON 推奨 |
| RS485 | `010` | ON | OFF | ON | ON 推奨 |
| RS485 | `110` | OFF | OFF | ON | ON 推奨 |

:::note
115200 bps などの低速テストでは、SW3-4 (SLEW) を ON のままにしておくことを推奨します。これによりドライバのスルーレートが制限され、長いケーブルでのノイズ低減に役立ちます。
:::

### DB9 トランシーバの有効化

DB9 ポートをテストする前に、専用の Jetson ターミナルから DB9 トランシーバを有効にしておきます：

```bash
sudo gpioset --mode=wait gpiochip3 6=0
```

テスト中はこのコマンドを実行し続けてください。テストが完了したら、このターミナルで **Enter** を押します。

### RS232 モードテスト

USB-RS232 アダプタを使用します。アダプタが個別の線を出している場合は、アダプタ TXD を DB9 ピン 2 (RXD)、アダプタ RXD を DB9 ピン 3 (TXD)、アダプタ GND を DB9 ピン 5 (GND) に接続します。2 つの DTE デバイス間を DB9-DB9 ケーブルで接続する場合は、通常、ヌルモデムケーブルまたはクロス接続が必要です。

**ステップ 1.** SW3 を RS232 モードに設定します。

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | OFF | ON |

**ステップ 2.** Jetson の DB9 ポートを設定します：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**ステップ 3.** PC のシリアルポートを設定します。

Linux の場合：

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS の場合：

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS で対話型ターミナルを使用するには、次のコマンドも利用できます：

```bash
screen $PC_DEV 115200
```

`screen` を終了するには **Ctrl+A**、次に **K**、次に **Y** を押します。

**ステップ 4.** PC から Jetson へのテストを行います。

Jetson 上で次を実行します：

```bash
sudo cat /dev/ttyAMA9
```

その後、PC からデータを送信します。

Linux PC：

```bash
echo "hello from pc to db9 rs232" | sudo tee $PC_DEV >/dev/null
```

macOS：

```bash
echo "hello from mac to db9 rs232" > $PC_DEV
```

**ステップ 5.** Jetson から PC へのテストを行います。

PC 上で次を実行します。

Linux PC：

```bash
sudo cat $PC_DEV
```

macOS：

```bash
cat $PC_DEV
```

その後、Jetson からデータを送信します：

```bash
echo "hello from jetson db9 rs232" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS485 モードテスト

USB-RS485 アダプタを使用します。アダプタの `A/D+` を DB9 ピン 2 に、`B/D-` を DB9 ピン 1 に、`GND` を DB9 ピン 5 に接続します。

**ステップ 1.** SW3 を RS485 モードのいずれかに設定します。

推奨設定：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | OFF | ON | ON |

代替設定：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | OFF | ON | ON |

**ステップ 2.** Jetson の DB9 ポートを設定し、Linux の RS485 モードを有効にします：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA9",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",5,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
```

期待される RS485 設定の出力は次のとおりです：

```bash
(5, 0, 20, 0, 0, 0, 0, 0)
```

**ステップ 3.** PC のシリアルポートを設定します。

Linux PC：

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS：

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**ステップ 4.** PC から Jetson へのテストを行います。

Jetson 上で次を実行します：

```bash
sudo cat /dev/ttyAMA9
```

その後、PC からデータを送信します。

Linux PC：

```bash
echo "hello from pc to db9 rs485" | sudo tee $PC_DEV >/dev/null
```

macOS：

```bash
echo "hello from mac to db9 rs485" > $PC_DEV
```

**ステップ 5.** Jetson から PC へのテストを行います。

PC 上で次を実行します。

Linux PC：

```bash
sudo cat $PC_DEV
```

macOS：

```bash
cat $PC_DEV
```

その後、Jetson からデータを送信します：

```bash
echo "hello from jetson db9 rs485" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS422 モードテスト

USB-RS422 アダプタを使用します。アダプタの TXD+ を DB9 ピン 3 (RXD+)、TXD- を DB9 ピン 4 (RXD-)、RXD+ を DB9 ピン 2 (TXD+)、RXD- を DB9 ピン 1 (TXD-) に接続し、アダプタが GND 端子を備えている場合は GND を DB9 ピン 5 に接続します。

**ステップ 1.** SW3 を RS422 モードのいずれかに設定します。

推奨設定：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | ON | ON |

代替設定：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | ON | ON | ON |

**ステップ 2.** Jetson の DB9 ポートを設定します：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**ステップ 3.** PC のシリアルポートを 115200 8N1、フロー制御なしに設定し、RS232 セクションで示したのと同じ `cat` と `echo` の方法を使用して双方向のテストを行います。

### トラブルシューティング

- `/dev/ttyAMA9` をオープンできない場合は、そのポートをすでに使用している可能性のある `cat`、`minicom`、テストスクリプトなどの他のツールを終了してください。
- PC が何も送信していないのに RS485 でランダムなバイトを受信する場合、通常は A/B 線が逆になっているか、GND が接続されていません。A/B を入れ替え、DB9 ピン 5 をアダプタの GND に接続したままにしてください。
- PC から Jetson への通信は動作するが Jetson から PC への通信が動作しない場合は、`sudo gpioset --mode=wait gpiochip3 6=0` が Jetson の別ターミナルでまだ実行中であることを確認してください。
- それでも Jetson から PC への RS485 送信ができない場合は、選択したモードに対して RS485 の方向極性が反転している可能性があります。フラグを `5` の代わりに `3` とした同じ RS485 ioctl コマンドを試し、その後もう一度 Jetson から PC への通信をテストしてください。
- macOS では `/dev/cu.*` デバイス（例：`/dev/cu.usbserial-0001`）を使用してください。`stty -F` や Linux RS485 ioctl コマンドなど、Linux 専用コマンドを macOS で使用しないでください。
- RS485 では、PC 側では通常 USB-RS485 アダプタが半二重の方向切り替えを処理します。Linux RS485 設定が必要なのは Jetson の DB9 ポートだけです。

## Ethernet

Robotics J601 キャリアボードには、有線ネットワーク接続用の高速 Ethernet ポートが搭載されており、PTP および EtherCAT プロトコルのサポートが予定されています。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png"/>
</div>

### 使用手順

Ethernet ポートの速度をテストするには、次のように `iperf3` を使用します：

**アップロード速度テスト：**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png"/>
</div>

**ダウンロード速度テスト：**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png"/>
</div>

:::info
- `<server_ip>` は iperf3 サーバの IP アドレスです。クライアントはこのサーバに接続して帯域幅テストを実行します。
- `<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスを指定してバインドします。
- `-R` フラグは、ダウンロード速度テストのためにテスト方向を反転させます。
:::

## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクタで、主に Wi-Fi や Bluetooth などの無線モジュールを接続し、無線通信機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_c1.png"/>
</div>

### 使用手順

**ステップ 1.** Wi-Fi ドライバファームウェアをインストールします：

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

**ステップ 2.** デバイスを再起動します：

```bash
sudo reboot
```

**ステップ 3.** 再起動後、無線インターフェースを有効にします：

```bash
sudo ip link set wlP1p1s0 up
```

**ステップ 4.** 利用可能な Wi-Fi ネットワークをスキャンします：

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png"/>
</div>

**ステップ 5.** Wi-Fi ネットワークに接続します：

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png"/>
</div>

### Bluetooth

Bluetooth 機能は M.2 Key E スロット経由で利用できます。

**ステップ 1.** Bluetooth 制御ツールを開きます：

```bash
bluetoothctl
```

**ステップ 2.** 電源をオンにして、近くの Bluetooth デバイスをスキャンします：

```bash
power on
scan on
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png"/>
</div>

## 5Gモジュール（M.2 Key B）

M.2 Key Bスロットは5Gモジュールの拡張をサポートしており、ロボティクスやエッジAIのシナリオ向けに高速なセルラー接続を実現します。

### ハードウェア接続

5GモジュールをM.2 Key Bスロットに取り付け、アンテナを接続します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png"/>
</div>

### 使用手順

**Step 1.** 5Gモジュールのシリアルコンソールを開きます：

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Step 2.** **Ctrl+A** を押してから **E** を押し、インタラクティブモードに入ります。

**Step 3.** ATコマンドをテストします：

```
AT
```

**Step 4.** 信号強度を確認します：

```
AT+CSQ
```

**Step 5.** 登録されているネットワークオペレーターを確認します：

```
AT+COPS?
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png"/>
</div>

## Nano SIM

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png"/>
</div>

## GPS

M.2 Key Bスロット上の5Gモジュールは、位置情報トラッキング用のGPS機能も提供します。

### 使用手順

**Step 1.** GPS ATコマンドポートを開きます：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Step 2.** GPSレシーバーを有効化します：

```
AT+QGPS=1
```

:::info
- 応答が `OK` の場合、GPSレシーバーは正常に起動しています。
- 応答が `+CME ERROR: 549` の場合、GPSはすでに有効になっているため、再度有効化する必要はありません。
:::

**Step 3.** **Ctrl+A** を押してから **X** を押し、**Yes** を選択してminicomを終了します。

**Step 4.** GPSが有効になると、衛星データがGPSデータポート（通常は `/dev/ttyUSB1`）からストリーミングされます。生のNMEAデータを読み取ります：

```bash
sudo cat /dev/ttyUSB1
```

標準的なGPS NMEAセンテンスが次のように表示されるはずです：

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
GPS信号を取得するために、空がよく見える場所にいることを確認してください。有効な測位が得られるまで数分かかる場合があります。
:::

## リソース

- 詳細なハードウェアレイアウト：TBD
- 書き込みガイド：TBD
- BSPリリースノート：TBD

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
