---
description: 本维基全面介绍了 reComputer Jetson Robotics J601 载板的硬件特性和接口使用方法。内容涵盖详细规格、支持的模块、安装配置步骤，以及 M.2、以太网、USB、CAN、RS485/RS232、UART、I2C、I2S、GMSL2 摄像头扩展、5G 和 GPS 等各类接口的实用使用指南，帮助用户快速在 J601 平台上开展机器人开发。
title: 接口使用
tags:
  - J601-Robotics 载板
  - Jetson
  - AGX Thor
  - Robotics
  - 接口使用
  - 接口
  - 硬件
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

# Robotics J601 载板硬件接口使用

reComputer Robotics J601 是一款为 NVIDIA Jetson AGX Thor 模组设计的高性能机器人载板，面向先进的具身智能和机器人控制应用。它配备了丰富的连接选项——包括高速以太网、用于 5G 和 Wi-Fi/BT 模组的 M.2 插槽、USB 3.2 接口、4 路 CAN（支持 CAN FD）、RS-232/485、I2C、I2S、UART、GMSL2 扩展（最多支持 8 路摄像头）以及宽范围直流电源输入——可作为强大的机器人“大脑”，用于处理来自各类传感器的复杂数据。

在支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架的同时，reComputer Robotics J601 将大语言模型驱动的决策能力与物理机器人控制（如运动规划和传感器融合）连接起来。它非常适合用于自主机器人快速开发，通过开箱即用的接口和优化的 AI 框架，加速产品上市进程。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>
## 接口使用

下面将介绍 Robotics J601 载板上的各类接口以及如何使用它们。

## USB

Robotics J601 载板配备了多个 USB 接口，包括用于高速外设连接的 USB 3.2 Type-A（Host）接口、一个用于刷机的 USB 3.0 Type-C 接口，以及一个用于设备模式/调试的 USB 2.0 Type-C 接口。

### USB 3.2 速度测试

插入一个 USB 3.0 U 盘并测试其读写速度。请注意，实际速度取决于 U 盘本身的性能。

创建一个测试脚本：

```bash
vim test_usb_speed.sh
```

粘贴以下内容：

```bash
#!/bin/bash

echo "seeed" | sudo -S dd if=/dev/zero of=/dev/sda bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
echo "seeed" | sudo -S dd if=/dev/sda of=/dev/null bs=1000M count=2
```

:::info
将 `/dev/sda` 替换为你实际 U 盘的设备名称。你可以使用 `lsblk` 进行查看。
:::

使脚本具有可执行权限并运行它：

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### USB 2.0 Type-C 调试接口

通过该串口，使用 USB-C 数据线，你可以在 PC 端监控输入和输出的调试信息。

#### Windows

**Step 1.** 通过 USB-C 数据线将 J601 与 PC 连接。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG"/>
</div>


**Step2.** 在你的 PC 上下载 [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** 通过 USB 数据线连接 PC，解压下载的文件并在 PC 上安装驱动。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** 在 Windows PC 上打开设备管理器，查看分配给 reComputer Super 的 COM 端口号。它应显示在“Ports (COM & LPT)”下，名称为“Silicon Labs CP210x USB to UART Bridge (COMX)”，其中 X 为具体的 COM 端口号。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Step5.** 打开串口工具（这里以 MobaXterm 工具为例），创建一个新会话。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** 选择 Serial 工具。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 选择对应的串口，将波特率设置为 115200，然后点击 "OK"。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Step8.** 使用用户名和密码登录你的 reComputer Super。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

#### Linux

**Step 1.** 通过 USB-C 数据线将 J601 与 Linux PC 连接。

**Step 2.** 查找串口设备：

```bash
ls /dev/ttyUSB*
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG"/>
</div>

**Step 3.** 连接到串口控制台：

```bash
screen /dev/ttyUSB0 -b 115200
```

现在你应该可以看到 J601 的串口控制台输出，并可使用用户名和密码登录。

## GMSL

Robotics J601 配备了 GMSL 摄像头扩展接口，可同时支持多达 **8 路 GMSL 摄像头**，以实现多摄像头机器人视觉应用。

### 支持的 GMSL 摄像头型号

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 硬件连接

将 GMSL 扩展板连接到 J601 载板上的摄像头扩展接口，然后将你的 GMSL 摄像头连接到扩展板上。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png"/>
</div>

### 使用说明

:::note
在启用 GMSL 功能之前，请确保你已安装带有 GMSL 扩展板驱动的 JetPack 版本。
:::

**Step 1.** 安装视频接口配置工具：

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

### 使用 Gemini 335Lg 摄像头

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

首次开启时，你可能需要更新固件。打开数据流后，你就可以查看来自摄像头的视频画面。

## I2S

Robotics J601 提供 I2S 音频接口，带有功放输出和麦克风输入，可用于音频播放和录制。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png"/>
</div>

### 使用说明

**Step 1.** 配置 I2S2 音频复用并测试音频输出：

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
`-l 1` 参数表示测试音只播放一次然后停止。
:::

**Step 2.** 播放你自己的音频文件：

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
将 `your_audio_file.wav` 替换为你实际音频文件的路径。请确保音频文件格式与指定的采样率（48000 Hz）和声道数（2）匹配。
:::

## UART

Robotics J601 通过标准 JST 接口提供 UART 接口，用于与外部设备进行串行通信。

### 硬件连接

对于 UART 通信，请按照以下接线方式连接 USB-to-TTL 工具：

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

### 使用说明

将 USB-to-TTL 工具连接到 Robotics J601 的 UART 接口和 PC，然后在 PC 端打开串口工具，并将波特率设置为 **115200**。

你可以使用一个简单的 Python 脚本进行串口通信测试：

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

在 Jetson 设备上运行该脚本：

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

Robotics J601 通过标准 JST 接口提供 I2C 接口，可轻松连接传感器和外设以扩展系统。

### 硬件连接

将你的 I2C 设备连接到载板上的 I2C 接口：

- 电源 → 电源
- SDA → SDA
- SCL → SCL
- 地 → 地

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png"/>
</div>

### 使用说明

**步骤 1.** 安装 I2C 测试工具：

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**步骤 2.** 查看 I2C 总线映射：

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG"/>
</div>

**步骤 3.** 扫描 I2C 总线上的设备：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**步骤 4.** 从 I2C 设备读取寄存器。例如，从总线 `i2c-1` 上地址为 `0x58` 的设备读取寄存器 `0x00`：

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## CAN

CAN（控制器局域网）是一种可靠的车载总线标准，使微控制器和设备无需主机计算机即可相互通信。Robotics J601 通过 JST 接口提供 **4 路 CAN 接口**（CAN0、CAN1、CAN2、CAN3），全部支持 CAN FD 模式。

### 120Ω 终端电阻控制

每个 CAN 接口都带有软件可控的 120Ω 终端电阻。GPIO 映射如下：

| 接口 | GPIO 芯片 | GPIO 线号 | 控制名称 |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | CAN0 终端电阻 |
| CAN1_120R_EN_3V3 | 3 | 1 | CAN1 终端电阻 |
| CAN2_120R_EN_3V3 | 3 | 2 | CAN2 终端电阻 |
| CAN3_120R_EN_3V3 | 3 | 3 | CAN3 终端电阻 |
| RS485_120R_EN_3V3 | 3 | 4 | RS485 终端电阻 |

你可以使用以下命令查看对应的 GPIO 线：

```bash
gpioinfo
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG"/>
</div>

### CAN Classic 通信

这里演示 CAN0 与 CAN1 之间的数据通信。

**步骤 1.** 安装 CAN 工具：

```bash
sudo apt update
sudo apt install can-utils -y
```

**步骤 2.** 配置 CAN 接口：

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**步骤 3.** 打开一个新终端在 CAN1 上接收数据，并从 CAN0 发送数据：

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png"/>
</div>

### CAN FD 模式

CAN FD（可变数据速率）在经典 CAN 协议基础上扩展，支持更高的数据速率和更大的负载（最多 64 字节）。

**步骤 1.** 将 CAN0 和 CAN1 配置为 FD 模式：

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

**步骤 2.** 打开一个新终端并测试 CAN FD 通信：

```bash
# Listen on CAN1 with extended output
candump can1 -x

# Test 1: Send a 16-byte frame with BRS active
cansend can0 5AA##111223344556677889900AABBCCDD

# Test 2: Send a full 64-byte payload frame with BRS active
cansend can0 7DF##1101020203030404050506060707080809090A0A0B0B0C0C0D0D0E0E0F0F0111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF
```

:::info
- `5AA` / `7DF` 是 CAN ID
- `##` 表示 CAN FD 帧
- `##` 后面的数字是 BRS（Bit Rate Switch，比特率切换）标志：`1` = BRS 激活
- 后面的是数据负载（最多 64 字节，对应 128 个十六进制字符）
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### CAN 综合测试脚本

下面的脚本会执行完整的 CAN FD 测试，包括依赖检查、接口配置、基础通信验证以及 10 秒压力测试。

创建测试脚本：

```bash
vim can_test.sh
```

粘贴以下内容：

<details>
<summary>点击展开 CAN 测试脚本</summary>

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

使脚本具有可执行权限并运行它，以测试任意两个 CAN 接口：

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

Robotics J601 提供一个可通过软件选择模式的 DB9 串行接口。该 DB9 端口在 Jetson 系统中连接到 `/dev/ttyAMA9`，并可通过设置 SW3 拨码开关配置为 RS232、RS422 或 RS485。

### 硬件连接

每个 DB9 引脚的功能取决于所选的通信模式。在为适配器接线之前，请参考下表和下面的连接器示意图。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

| DB9 引脚 | RS232 模式 | RS422 模式 | RS485 模式 |
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
对于 RS485 接线，将 USB-RS485 适配器的 `A/D+` 连接到 DB9 引脚 2，将 `B/D-` 连接到 DB9 引脚 1，将 `GND` 连接到 DB9 引脚 5。某些 USB-RS485 适配器的 A/B 标注是相反的。如果在 PC 未发送数据时 Jetson 收到随机字节，请交换 A 和 B 再次测试。
:::

### 使用 SW3 选择 DB9 模式

当开关为 ON 时，SW3 会将对应模式引脚拉低。换句话说，**ON = 0**，**OFF = 1**。

| 模式 | 原理图 MODE 值 (MODE_0 MODE_1 MODE_2) | SW3-1 (MODE_0) | SW3-2 (MODE_1) | SW3-3 (MODE_2) | SW3-4 (SLEW) |
| --- | --- | --- | --- | --- | --- |
| RS232 | `001` | ON | ON | OFF | 建议 ON |
| RS422 | `000` | ON | ON | ON | 建议 ON |
| RS422 | `100` | OFF | ON | ON | 建议 ON |
| RS485 | `010` | ON | OFF | ON | 建议 ON |
| RS485 | `110` | OFF | OFF | ON | 建议 ON |

:::note
对于 115200 bps 等低速测试，建议保持 SW3-4 (SLEW) 为 ON。这样可以限制驱动器的转换速率，有助于降低长线缆上的噪声。
:::

### 使能 DB9 收发器

在测试 DB9 端口之前，请在一个专用的 Jetson 终端中保持 DB9 收发器处于使能状态：

```bash
sudo gpioset --mode=wait gpiochip3 6=0
```

在测试期间保持该命令运行。仅在完成测试后，在此终端中按下 **Enter**。

### RS232 模式测试

使用 USB 转 RS232 适配器。如果适配器引出独立线缆，将适配器 TXD 连接到 DB9 引脚 2（RXD），适配器 RXD 连接到 DB9 引脚 3（TXD），适配器 GND 连接到 DB9 引脚 5（GND）。如果在两个 DTE 设备之间使用 DB9 对 DB9 线缆，通常需要空调制解调器线缆或交叉连接。

**步骤 1.** 将 SW3 设置为 RS232 模式。

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | OFF | ON |

**步骤 2.** 配置 Jetson DB9 端口：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**步骤 3.** 配置 PC 串口。

在 Linux 上：

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

在 macOS 上：

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

在 macOS 上，如需交互式终端，也可以使用：

```bash
screen $PC_DEV 115200
```

按 **Ctrl+A**，然后 **K**，再按 **Y** 以退出 `screen`。

**步骤 4.** 测试 PC 到 Jetson。

在 Jetson 上运行：

```bash
sudo cat /dev/ttyAMA9
```

然后从 PC 发送数据。

Linux PC：

```bash
echo "hello from pc to db9 rs232" | sudo tee $PC_DEV >/dev/null
```

macOS：

```bash
echo "hello from mac to db9 rs232" > $PC_DEV
```

**步骤 5.** 测试 Jetson 到 PC。

在 PC 上运行。

Linux PC：

```bash
sudo cat $PC_DEV
```

macOS：

```bash
cat $PC_DEV
```

然后从 Jetson 发送数据：

```bash
echo "hello from jetson db9 rs232" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS485 模式测试

使用 USB 转 RS485 适配器。将适配器 `A/D+` 连接到 DB9 引脚 2，将适配器 `B/D-` 连接到 DB9 引脚 1，将适配器 `GND` 连接到 DB9 引脚 5。

**步骤 1.** 将 SW3 设置为其中一种 RS485 模式。

推荐设置：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | OFF | ON | ON |

可选设置：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | OFF | ON | ON |

**步骤 2.** 配置 Jetson DB9 端口并启用 Linux RS485 模式：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA9",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",5,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
```

预期的 RS485 配置输出为：

```bash
(5, 0, 20, 0, 0, 0, 0, 0)
```

**步骤 3.** 配置 PC 串口。

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

**步骤 4.** 测试 PC 到 Jetson。

在 Jetson 上运行：

```bash
sudo cat /dev/ttyAMA9
```

然后从 PC 发送数据。

Linux PC：

```bash
echo "hello from pc to db9 rs485" | sudo tee $PC_DEV >/dev/null
```

macOS：

```bash
echo "hello from mac to db9 rs485" > $PC_DEV
```

**步骤 5.** 测试 Jetson 到 PC。

在 PC 上运行。

Linux PC：

```bash
sudo cat $PC_DEV
```

macOS：

```bash
cat $PC_DEV
```

然后从 Jetson 发送数据：

```bash
echo "hello from jetson db9 rs485" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS422 模式测试

使用 USB 转 RS422 适配器。将适配器 TXD+ 连接到 DB9 引脚 3（RXD+），TXD- 连接到 DB9 引脚 4（RXD-），RXD+ 连接到 DB9 引脚 2（TXD+），RXD- 连接到 DB9 引脚 1（TXD-），如果适配器提供 GND 端子，则将 GND 连接到 DB9 引脚 5。

**步骤 1.** 将 SW3 设置为其中一种 RS422 模式。

推荐设置：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | ON | ON |

可选设置：

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | ON | ON | ON |

**步骤 2.** 配置 Jetson DB9 端口：

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**步骤 3.** 将 PC 串口配置为 115200 8N1 且无流控，然后使用 RS232 章节中展示的相同 `cat` 和 `echo` 方法测试双向通信。

### 故障排查

- 如果无法打开 `/dev/ttyAMA9`，请关闭可能已经占用该端口的其他工具，例如 `cat`、`minicom` 或测试脚本。
- 如果在 PC 未发送任何数据时 RS485 收到随机字节，通常是 A/B 线接反或 GND 未连接。交换 A/B，并保持 DB9 引脚 5 连接到适配器 GND。
- 如果 PC 到 Jetson 正常，但 Jetson 到 PC 不工作，请确保 `sudo gpioset --mode=wait gpiochip3 6=0` 仍在单独的 Jetson 终端中运行。
- 如果 RS485 仍然无法从 Jetson 向 PC 发送数据，则所选模式的 RS485 方向极性可能被反转。尝试使用标志 `3` 而不是 `5` 的相同 RS485 ioctl 命令，然后再次测试 Jetson 到 PC。
- 在 macOS 上，请使用 `/dev/cu.*` 设备，例如 `/dev/cu.usbserial-0001`。不要在 macOS 上使用 `stty -F` 或 Linux RS485 ioctl 命令等仅适用于 Linux 的命令。
- 对于 RS485，USB-RS485 适配器通常在 PC 端处理半双工方向切换。只有 Jetson DB9 端口需要上述 Linux RS485 配置。

## 以太网

Robotics J601 载板配备高速以太网端口，用于有线网络连接，并计划支持 PTP 和 EtherCAT 协议。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png"/>
</div>

### 使用说明

要测试以太网端口速率，请按如下方式使用 `iperf3`：

**上传速率测试：**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png"/>
</div>

**下载速率测试：**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png"/>
</div>

:::info
- `<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器以执行带宽测试。
- `<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
- `-R` 标志会反转测试方向，用于下载速率测试。
:::

## M.2 Key E

M.2 Key E 接口是一个标准的 M.2 连接器，主要用于连接无线模块，例如 Wi-Fi 和蓝牙，以扩展无线通信能力。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_c1.png"/>
</div>

### 使用说明

**步骤 1.** 安装 Wi-Fi 驱动固件：

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

**步骤 2.** 重启设备：

```bash
sudo reboot
```

**步骤 3.** 重启后，启用无线网卡接口：

```bash
sudo ip link set wlP1p1s0 up
```

**步骤 4.** 扫描可用的 Wi-Fi 网络：

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png"/>
</div>

**步骤 5.** 连接到 Wi-Fi 网络：

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png"/>
</div>

### 蓝牙

蓝牙功能通过 M.2 Key E 插槽提供。

**步骤 1.** 打开蓝牙控制工具：

```bash
bluetoothctl
```

**步骤 2.** 上电并扫描附近的蓝牙设备：

```bash
power on
scan on
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png"/>
</div>

## 5G 模块（M.2 Key B）

M.2 Key B 插槽支持 5G 模块扩展，为机器人和边缘 AI 场景提供高速蜂窝网络连接。

### 硬件连接

将 5G 模块安装到 M.2 Key B 插槽中，并连接天线。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png"/>
</div>

### 使用说明

**步骤 1.** 打开 5G 模块串口控制台：

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**步骤 2.** 按下 **Ctrl+A** 然后 **E** 进入交互模式。

**步骤 3.** 测试 AT 指令：

```
AT
```

**步骤 4.** 检查信号强度：

```
AT+CSQ
```

**步骤 5.** 检查已注册的网络运营商：

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

M.2 Key B 插槽上的 5G 模块还提供 GPS 功能，用于位置跟踪。

### 使用说明

**步骤 1.** 打开 GPS AT 指令端口：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤 2.** 使能 GPS 接收机：

```
AT+QGPS=1
```

:::info
- 如果响应为 `OK`，则表示 GPS 接收机已成功启动。
- 如果响应为 `+CME ERROR: 549`，则表示 GPS 已经启用——无需再次启用。
:::

**步骤 3.** 按下 **Ctrl+A** 然后 **X** 退出 minicom，并选择 **Yes** 退出。

**步骤 4.** 启用 GPS 后，卫星数据会从 GPS 数据端口（通常为 `/dev/ttyUSB1`）持续输出。读取原始 NMEA 数据：

```bash
sudo cat /dev/ttyUSB1
```

你应该会看到标准的 GPS NMEA 语句，例如：

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
请确保有开阔的天空视野以获取 GPS 信号。获得有效定位可能需要几分钟时间。
:::

## 资源

- 详细硬件布局：TBD
- 烧录指南：TBD
- BSP 发行说明：TBD

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
