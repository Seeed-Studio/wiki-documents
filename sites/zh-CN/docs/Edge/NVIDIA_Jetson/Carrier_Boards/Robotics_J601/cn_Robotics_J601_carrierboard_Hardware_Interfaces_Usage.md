---
description: 本维基详细介绍了 reComputer Jetson Robotics J601 载板的硬件特性和各接口的使用方法，涵盖详细规格、支持的模块、安装配置步骤，以及 M.2、以太网、USB、CAN、RS485/RS232、UART、I2C、I2S、GPIO、GMSL2 摄像头扩展、5G 和 GPS 等多种接口的实用使用指南，帮助用户快速在 J601 平台上开展机器人开发。
title: reComputer Robotics J601 硬件与接口
tags:
  - J601-Robotics 载板
  - Jetson
  - AGX Thor
  - 机器人
  - 接口使用
  - 接口
  - 硬件
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
url: https://wiki.seeedstudio.com/cn/jetson/recomputer_robotics_j601/hardware_and_interface_usage/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Robotics J601 硬件与接口

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

本指南说明 J601 载板的连接器接线、引脚定义、Linux 设备映射和接口检查。模组选择、规格、电源要求和完整的 JetPack 刷写流程，请从[入门指南](/jetson/recomputer_robotics_j601/getting_started/)开始。

已安装的 Jetson 模组决定可用的以太网和 CAN 连接：**T5000 支持四路 10GbE 和四路 CAN；T4000 支持三路 10GbE 和两路 CAN**。Wi-Fi/Bluetooth 和蜂窝功能需要兼容的扩展模组。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg" alt="reComputer Robotics J601 载板硬件概览" />
    <figcaption>J601 载板 · 机器人接口与扩展</figcaption>
  </figure>
</div>

## 接口指南

| 任务 | 接口与说明 |
| --- | --- |
| 安装散热 | [散热片安装](#heatsink-installation) |
| 连接外设或调试控制台 | [USB](#usb) 和 [UART](#uart) |
| 启用摄像头输入 | [GMSL](#gmsl) |
| 连接音频和传感器 | [I2S](#i2s)、[I2C](#i2c) 和 [GPIO](#gpio-gpigpo) |
| 连接控制器 | [CAN](#can)、[RS485](#rs485) 和 [DB9](#db9) |
| 检查状态指示灯 | [RGB LED](#rgb) |
| 连接网络 | [以太网](#ethernet)、[Wi-Fi/Bluetooth](#m2-key-e) 和 [5G/GPS](#5g-module-m2-key-b) |

在安装或拆卸模块、或接线排针之前，请先关闭载板电源。接线时请对照你所用板卡版本的原理图，核对连接器引脚编号和信号电压。

## 散热片安装 {#heatsink-installation}

为确保长时间运行时的稳定散热，你可以为 reComputer J601 载板安装散热片。

**所需材料：** 导热硅胶垫、散热器、reComputer J601 载板

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink1.png" alt="用于安装的散热片、风扇、导热垫和 J601 载板" loading="lazy" />
    <figcaption>用于安装的散热片、风扇、导热垫和 J601 载板</figcaption>
  </figure>
</div>

**步骤 1.** 将导热硅胶垫固定在散热片与载板之间的接触点。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink2.png" alt="导热硅胶垫贴在散热片接触点" loading="lazy" />
    <figcaption>导热硅胶垫贴在散热片接触点</figcaption>
  </figure>
</div>

**步骤 2.** 连接散热器和载板。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink3.png" alt="已安装到 J601 载板上的散热片和风扇" loading="lazy" />
    <figcaption>已安装到 J601 载板上的散热片和风扇</figcaption>
  </figure>
</div>

## USB {#usb}

Robotics J601 载板配备了多个 USB 接口，包括 4 个 USB 3.2 Type-A 接口（Host，10Gbps），用于高速外设连接；1 个 USB 3.0 Type-C 接口（J4），用于恢复/烧录；以及 1 个 USB 2.0 Type-C 接口（J3），用于串口调试。

### USB 3.2 速度测试

插入 USB 3.x 存储设备，并用 `lsblk -f` 确认挂载点。协商后的 USB 速度可以用 `lsusb -t` 查看；测得的吞吐量还取决于存储设备和文件系统。

下面的示例在已挂载的 USB 文件系统中写入一个 **1 GiB 的临时文件**，再读回并删除。将 `<usb-volume>` 替换为实际卷名，并确保至少有 1 GiB 可用空间。

```bash
lsblk -f
lsusb -t
USB_MOUNT="/media/$USER/<usb-volume>"
USB_TEST_FILE=$(mktemp "$USB_MOUNT/j601-usb-speed.XXXXXX")
dd if=/dev/zero of="$USB_TEST_FILE" bs=1M count=1024 conv=fdatasync status=progress
dd if="$USB_TEST_FILE" of=/dev/null bs=1M iflag=direct status=progress
rm -- "$USB_TEST_FILE"
```

在测试完成前保持设备处于挂载状态。如果文件系统不支持直接 I/O，请去掉 `iflag=direct`，并把读取结果理解为可能受到缓存影响。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG" alt="J601 USB 存储吞吐量测试示例" loading="lazy" />
    <figcaption>J601 USB 存储吞吐量测试示例</figcaption>
  </figure>
</div>

### USB 2.0 Type-C 调试接口

通过该串口，使用 USB-C 数据线，你可以在 PC 端监控输入和输出的调试信息。

#### Windows

**Step 1.** 通过 USB-C 数据线将 J601 与 PC 连接。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG" alt="J601 USB 2.0 Type-C 调试口连接" loading="lazy" />
    <figcaption>J601 USB 2.0 Type-C 调试口连接</figcaption>
  </figure>
</div>


**Step2.** 在你的 PC 上下载 [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png" alt="Silicon Labs CP210x USB 转 UART 驱动下载页" loading="lazy" />
    <figcaption>Silicon Labs CP210x USB 转 UART 驱动下载页</figcaption>
  </figure>
</div>

**Step3.** 通过 USB 数据线连接 PC，解压下载的文件并在 PC 上安装驱动。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png" alt="在 Windows 上安装 CP210x 驱动" loading="lazy" />
    <figcaption>在 Windows 上安装 CP210x 驱动</figcaption>
  </figure>
</div>

**Step4.** 在 Windows PC 上打开设备管理器，检查分配给 reComputer J601 的 COM 端口号。它应显示在“Ports (COM & LPT)”下，名称为“Silicon Labs CP210x USB to UART Bridge (COMX)”，其中 X 为 COM 端口号。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png" alt="Windows 设备管理器中的 USB 转 UART COM 端口" loading="lazy" />
    <figcaption>Windows 设备管理器中的 USB 转 UART COM 端口</figcaption>
  </figure>
</div>

**Step5.** 打开串口工具（此处以 MobaXterm 工具为例），创建一个新会话。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png" alt="MobaXterm 新建会话对话框" loading="lazy" />
    <figcaption>MobaXterm 新建会话对话框</figcaption>
  </figure>
</div>

**Step6.** 选择 Serial 工具。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png" alt="MobaXterm 串口会话设置" loading="lazy" />
    <figcaption>MobaXterm 串口会话设置</figcaption>
  </figure>
</div>

**Step7.** 选择对应的串口，将波特率设置为 115200，然后点击 “OK”。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png" alt="波特率设置为 115200 的串口控制台" loading="lazy" />
    <figcaption>波特率设置为 115200 的串口控制台</figcaption>
  </figure>
</div>

**Step8.** 使用用户名和密码登录你的 reComputer J601。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png" alt="Jetson 串口控制台登录提示" loading="lazy" />
    <figcaption>Jetson 串口控制台登录提示</figcaption>
  </figure>
</div>

#### Linux

**Step 1.** 通过 USB-C 数据线将 J601 与 Linux PC 连接。

**Step 2.** 查找串口设备：

```bash
ls /dev/ttyUSB*
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG" alt="Linux 上用于 J601 调试连接的 USB 串口设备" loading="lazy" />
    <figcaption>Linux 上用于 J601 调试连接的 USB 串口设备</figcaption>
  </figure>
</div>

**Step 3.** 连接到串口控制台：

```bash
screen /dev/ttyUSB0 115200
```

现在你应该可以看到 J601 的串口控制台输出，并可以使用用户名和密码登录。

## GMSL {#gmsl}

Robotics J601 配备了一个 GMSL 摄像头扩展排针，可同时支持多达 **8 路 GMSL 摄像头**，以实现多摄像头机器人视觉应用。

### 支持的 GMSL 摄像头型号

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 硬件连接

将 GMSL 扩展板连接到 J601 载板上的摄像头扩展排针，然后将你的 GMSL 摄像头连接到扩展板上。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png" alt="J601 上的 GMSL 扩展板与摄像头接线" loading="lazy" />
    <figcaption>J601 上的 GMSL 扩展板与摄像头接线</figcaption>
  </figure>
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



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png" alt="J601 GMSL 摄像头码流输出" loading="lazy" />
    <figcaption>J601 GMSL 摄像头码流输出</figcaption>
  </figure>
</div>



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png" alt="J601 GMSL 摄像头画面" loading="lazy" />
    <figcaption>J601 GMSL 摄像头画面</figcaption>
  </figure>
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

首次上电时，你可能需要更新固件。打开数据流后，你就可以查看来自摄像头的视频。

## UART {#uart}

Robotics J601 通过标准 JST 排针提供 UART 接口，用于与外部设备进行串行通信。该 UART 端口在 Jetson 系统中对应 `/dev/ttyTHS1`，默认波特率为 115200。

### 硬件连接

进行 UART 通信时，请根据以下接线方式连接 USB 转 TTL 工具：

- TX → RX
- RX → TX
- GND → GND

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="J601 UART 排针与 USB 转 TTL 接线" loading="lazy" />
    <figcaption>J601 UART 排针与 USB 转 TTL 接线</figcaption>
  </figure>
</div>

### 使用说明

将 USB 转 TTL 工具连接到 Robotics J601 的 UART 端口和 PC，然后在 PC 端打开串口工具，并将波特率设置为 **115200**。

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="J601 UART 排针与 USB 转 TTL 接线" loading="lazy" />
    <figcaption>J601 UART 排针与 USB 转 TTL 接线</figcaption>
  </figure>
</div>

## I2S {#i2s}

Robotics J601 提供 I2S 音频接口，带有功放输出和麦克风输入，可用于音频播放和录音。I2S 接口通过 J14 JST GH-1.25 连接器引出。

### 引脚定义

| Pin # | 模块引脚名称 | 模块引脚号 | 用途/描述 | 类型/方向 |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 电源 | 电源 |
| 2 | I2S2_DIN | F6 | I2S2 音频端口 2 数据输入（电平从 1.8V 转换为 3.3V） | 输入 |
| 3 | I2S2_FS | E4 | I2S2 音频端口 2 左/右声道时钟（电平从 1.8V 转换为 3.3V） | 双向 |
| 4 | I2S2_CLK | G4 | I2S2 音频端口 2 时钟（电平从 1.8V 转换为 3.3V） | 双向 |
| 5 | I2S2_DOUT | F5 | I2S2 音频端口 2 数据输出（电平从 1.8V 转换为 3.3V） | 输出 |
| 6 | - | - | 地 | 地 |

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png" alt="J601 I2S 排针连接" loading="lazy" />
    <figcaption>J601 I2S 排针连接</figcaption>
  </figure>
</div>

### 使用说明

**Step 1.** 配置 I2S2 音频复用并测试音频信号输出：

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
标志 `-l 1` 表示测试音只会播放一次然后停止。
:::

**步骤 2.** 播放你自己的音频文件：

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
将 `your_audio_file.wav` 替换为你实际音频文件的路径。确保音频文件格式与指定的采样率（48000 Hz）和声道数（2）匹配。
:::


## I2C {#i2c}

Robotics J601 通过 J12 JST GH-1.25 连接器提供 I2C 接口，可轻松连接传感器和外设以扩展系统。

### 引脚定义

| 引脚号 | 模块引脚名称 | 模块引脚号 | 用途/描述 | 类型/方向 |
| --- | --- | --- | --- | --- |
| 1 | - | - | 地 | Ground |
| 2 | DP_AUX_CH2_N | E18 | I2C4_SDA_3V3 | 双向 |
| 3 | DP_AUX_CH2_P | E19 | I2C4_SCL_3V3 | 输出 |
| 4 | - | - | 3V3 电源 | 电源 |

:::info
该 I2C 连接器使用 Jetson AGX Thor SoC 上的 **I2C4** 总线。
:::

### 硬件连接

将你的 I2C 设备连接到载板上的 I2C 接口：

- Ground → Ground（引脚 1）
- SDA → SDA（引脚 2）
- SCL → SCL（引脚 3）
- Power → 3V3（引脚 4）

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png" alt="J601 I2C 传感器接线" loading="lazy" />
    <figcaption>J601 I2C 传感器接线</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG" alt="J601 上的 Linux I2C 总线枚举" loading="lazy" />
    <figcaption>J601 上的 Linux I2C 总线枚举</figcaption>
  </figure>
</div>

**步骤 3.** 扫描 I2C 总线上的设备：

```bash
sudo i2cdetect -y -r 1
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png" alt="J601 上的 I2C 设备地址扫描" loading="lazy" />
    <figcaption>J601 上的 I2C 设备地址扫描</figcaption>
  </figure>
</div>

**步骤 4.** 从 I2C 设备读取寄存器。例如，从总线 `i2c-1` 上地址为 `0x58` 的设备读取寄存器 `0x00`：

```bash
sudo i2cget -y 1 0x58 0x00
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png" alt="I2C 寄存器读取结果" loading="lazy" />
    <figcaption>I2C 寄存器读取结果</figcaption>
  </figure>
</div>

## GPIO (GPI/GPO) {#gpio-gpigpo}

Robotics J601 通过两个 JST GH-1.25 连接器提供数字 GPIO 接口：一个带有 4 路输入通道的 **GPI（通用输入）** 连接器 J20，以及一个带有 4 路输出通道的 **GPO（通用输出）** 连接器 J17。所有 GPIO 信号都从 1.8V（SoC 域）电平转换到 3.3V，使其可直接兼容标准 3.3V 传感器和外设。

[J601 V1.0 原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf) 将 **GPO 标为 J17**、**I2S 标为 J14**。接线前请对照你的板卡版本核对这些丝印。

### 引脚定义

#### GPI 连接器 - J20（输入）

| 引脚号 | 模块引脚名称 | 模块引脚号 | 用途/描述 | 类型/方向 |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 电源 | 电源 |
| 2 | SPI2_MISO | D62 | GPI_1_3V3（从 1.8V 电平转换到 3.3V） | 输入，3.3V |
| 3 | GPIO64 | J6 | GPI_2_3V3（从 1.8V 电平转换到 3.3V） | 输入，3.3V |
| 4 | GPIO65 | J7 | GPI_3_3V3（从 1.8V 电平转换到 3.3V） | 输入，3.3V |
| 5 | GPIO49 | G6 | GPI_4_3V3（从 1.8V 电平转换到 3.3V） | 输入，3.3V |
| 6 | - | - | 地 | Ground |

#### GPO 连接器 - J17（输出）

| 引脚号 | 模块引脚名称 | 模块引脚号 | 用途/描述 | 类型/方向 |
| --- | --- | --- | --- | --- |
| 1 | - | - | 3V3 电源 | 电源 |
| 2 | GPIO13 | G7 | GPO_1_3V3（从 1.8V 电平转换到 3.3V） | 输出，3.3V |
| 3 | SPI2_CS0_N | D60 | GPO_2_3V3（从 1.8V 电平转换到 3.3V） | 输出，3.3V |
| 4 | SPI2_CLK | E61 | GPO_3_3V3（从 1.8V 电平转换到 3.3V） | 输出，3.3V |
| 5 | SPI2_MOSI | F60 | GPO_4_3V3（从 1.8V 电平转换到 3.3V） | 输出，3.3V |
| 6 | - | - | 地 | Ground |

### 硬件连接

使用 GH-1.25 线缆将你的 GPIO 设备连接到载板上的 GPI 或 GPO 连接器：

- VCC → 3V3（引脚 1）
- Signal → GPI/GPO 引脚（引脚 2–5）
- GND → 地（引脚 6）


### 使用说明

:::note
GPI 和 GPO 引脚可通过 `libgpiod`（`gpioset`/`gpioget`）访问。你可以使用 `gpioinfo` 查找 GPIO 芯片和线路编号。
:::

**步骤 1.** 安装 GPIO 工具：

```bash
sudo apt update
sudo apt-get install gpiod
```

**步骤 2.** 查看所有可用的 GPIO 芯片和线路：

```bash
gpioinfo
```

**步骤 3.** 读取 GPI 引脚。例如，读取 GPI_2（GPIO64，J20 上的引脚 3）：

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioget <chip> <line>
```

**步骤 4.** 写入 GPO 引脚。例如，将 GPO_1（GPIO13，J17 上的引脚 2）设置为高电平：

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioset <chip> <line>=1
```

**步骤 5.** 在 Python 脚本中使用 `gpiod` 库操作这些引脚：

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


## CAN {#can}

CAN（控制器局域网）是一种可靠的车载总线标准，使微控制器和设备无需主机计算机即可相互通信。搭配 **T5000** 模组时，Robotics J601 通过 JST GH-1.25 连接器提供 **四路 CAN FD 接口**（CAN0–CAN3）。**T4000** 模组支持 **两路 CAN 接口**。测试前请用 `ip -details link show type can` 检查当前 BSP 实际引出的接口，再选择端口。

### CAN 连接器引脚映射

| CAN 接口 | 连接器 | 引脚 1 | 引脚 2 | 引脚 3 | 引脚 4 |
| --- | --- | --- | --- | --- | --- |
| CAN0 | J31 | Ground | CAN0_L_ISO | CAN0_H_ISO | 5V 电源 |
| CAN1 | J30 | Ground | CAN1_L_ISO | CAN1_H_ISO | 5V 电源 |
| CAN2 | J28 | Ground | CAN2_L_ISO | CAN2_H_ISO | 5V 电源 |
| CAN3 | J25 | Ground | CAN3_L_ISO | CAN3_H_ISO | 5V 电源 |

:::info
CAN 接口均为隔离接口。每个连接器在引脚 4 提供 5V 电源。下表描述的是载板接线；已安装的模组决定哪些接口可用。
:::

### 120Ω 终端电阻控制

每个 CAN 接口都配有软件可控的 120Ω 终端电阻。GPIO 映射如下：

| 接口 | GPIO 芯片 | GPIO 线路 | 控制名称 |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | CAN0 终端 |
| CAN1_120R_EN_3V3 | 3 | 1 | CAN1 终端 |
| CAN2_120R_EN_3V3 | 3 | 2 | CAN2 终端 |
| CAN3_120R_EN_3V3 | 3 | 3 | CAN3 终端 |
| RS485_120R_EN_3V3 | 3 | 4 | RS485 终端 |

你可以通过以下命令查看对应的 GPIO 线路：

```bash
gpioinfo
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG" alt="用于终端电阻控制的 J601 GPIO 线路" loading="lazy" />
    <figcaption>用于终端电阻控制的 J601 GPIO 线路</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png" alt="J601 Classic CAN 通信结果" loading="lazy" />
    <figcaption>J601 Classic CAN 通信结果</figcaption>
  </figure>
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

**步骤 2.** 打开一个新终端测试 CAN FD 通信：

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
- `##` 后的数字是 BRS（比特率切换）标志：`1` = BRS 激活
- 后面的是数据负载（最多 64 字节，对应 128 个十六进制字符）
:::

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png" alt="J601 CAN FD 通信结果" loading="lazy" />
    <figcaption>J601 CAN FD 通信结果</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png" alt="J601 CAN 测试脚本输出" loading="lazy" />
    <figcaption>J601 CAN 测试脚本输出</figcaption>
  </figure>
</div>



## RS485 {#rs485}

reComputer J601 载板配备了一个专用的隔离 RS-485 接口，通过 J24 JST GH-1.25 4 针连接器引出。引脚定义如下：

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/rs485-jstpin.png" alt="J601 J24 RS-485 连接器引脚定义" loading="lazy" />
    <figcaption>J601 J24 RS-485 连接器引脚定义</figcaption>
  </figure>
</div>

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/jst485-c.png" alt="J601 专用 RS-485 排针接线" loading="lazy" />
    <figcaption>J601 专用 RS-485 排针接线</figcaption>
  </figure>
</div>

这里我们使用一个 `usb-to-rs485` 进行测试：

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
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png" alt="J601 485-1 接口连接" loading="lazy" />
    <figcaption>J601 485-1 接口连接</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png" alt="J601 485-2 接口连接" loading="lazy" />
    <figcaption>J601 485-2 接口连接</figcaption>
  </figure>
</div>



## DB9 (RS232 / RS422 / RS485) {#db9}

Robotics J601 提供一个可通过软件选择模式的 DB9 串行接口。该 DB9 接口在 Jetson 系统中对应 `/dev/ttyAMA9`，并可通过设置 SW3 拨码开关配置为 RS232、RS422 或 RS485 模式。

### 引脚定义

每个 DB9 引脚的功能取决于所选的通信模式。在连接适配器之前，请参考下表和下面的连接器示意图。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png" alt="J601 DB9 配置接口连接" loading="lazy" />
    <figcaption>J601 DB9 配置接口连接</figcaption>
  </figure>
</div>

### RS485 模式
### 硬件配置

将板底部的开关切换到 RS485 模式，如下图所示。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-mode.png" alt="J601 RS-485 模式接口连接" loading="lazy" />
    <figcaption>J601 RS-485 模式接口连接</figcaption>
  </figure>
</div>

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c.png" alt="J601 485-c 接口连接" loading="lazy" />
    <figcaption>J601 485-c 接口连接</figcaption>
  </figure>
</div>

:::tip
对于 RS485 接线，将 USB-RS485 适配器的 `A/D+` 连接到 DB9 引脚 2，`B/D-` 连接到 DB9 引脚 1。某些 USB-RS485 适配器的 A/B 标注可能相反。如果在 PC 未发送数据时 Jetson 收到随机字节，请交换 A 和 B 再次测试。
:::

### 通信测试

这里我们使用 minicom 进行测试：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
要在 minicom 中看到你输入的文本，需要启用 Local Echo 功能。默认情况下，minicom 不会显示你的按键输入，因此这是一个非常常见的问题。
- 步骤 1. 按下 `Ctrl+A`
- 步骤 2. 然后按下 `E`

:::

测试从 PC 向 Jetson 发送消息。 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c1.png" alt="J601 DB9 RS-485 硬件连接" loading="lazy" />
    <figcaption>J601 DB9 RS-485 硬件连接</figcaption>
  </figure>
</div>

由于 RS485 是半双工协议，为了测试 Jetson 能够通过 RS485 向 PC 发送信息，需要启用 RS485 模式。
- 步骤 1. 按下 `Ctrl+A`
- 步骤 2. 然后按下 `O` 打开配置选项。


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c2.png" alt="RS-485 串口工具配置菜单" loading="lazy" />
    <figcaption>RS-485 串口工具配置菜单</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c3.png" alt="串口工具的 RS-485 配置" loading="lazy" />
    <figcaption>串口工具的 RS-485 配置</figcaption>
  </figure>
</div>

最后，你就可以从 Jetson 向 PC 发送消息了。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c4.png" alt="主机串口控制台中收到的 RS-485 数据" loading="lazy" />
    <figcaption>主机串口控制台中收到的 RS-485 数据</figcaption>
  </figure>
</div>

### RS232 模式 

### 硬件配置

将板底部的开关切换到 RS232 模式，如下图所示。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-mode.png" alt="J601 RS-232 模式接口连接" loading="lazy" />
    <figcaption>J601 RS-232 模式接口连接</figcaption>
  </figure>
</div>

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c.png" alt="J601 232-c 接口连接" loading="lazy" />
    <figcaption>J601 232-c 接口连接</figcaption>
  </figure>
</div>

:::tip
- TX → RX
- RX → TX
- GND → GND
:::

### 通信测试

这里我们使用 minicom 进行测试：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
要在 minicom 中看到你输入的文本，需要启用 Local Echo 功能。默认情况下，minicom 不会显示你的按键输入，因此这是一个非常常见的问题。
- 步骤 1. 按下 `Ctrl+A`
- 步骤 2. 然后按下 `E`
:::

测试从 PC 向 Jetson 发送消息。 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c1.png" alt="J601 DB9 RS-232 模式开关位置" loading="lazy" />
    <figcaption>J601 DB9 RS-232 模式开关位置</figcaption>
  </figure>
</div>


同样打开测试模式。
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c2.png" alt="J601 RS-232 主机连接" loading="lazy" />
    <figcaption>J601 RS-232 主机连接</figcaption>
  </figure>
</div>

从 Jetson 向 PC 发送消息。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c3.png" alt="主机串口控制台中收到的 RS-232 数据" loading="lazy" />
    <figcaption>主机串口控制台中收到的 RS-232 数据</figcaption>
  </figure>
</div>

### RS422 模式

### 硬件配置

将板底部的开关切换到 RS422 模式，如下图所示。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-mode.png" alt="J601 RS-422 模式接口连接" loading="lazy" />
    <figcaption>J601 RS-422 模式接口连接</figcaption>
  </figure>
</div>

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c.png" alt="J601 422-c 接口连接" loading="lazy" />
    <figcaption>J601 422-c 接口连接</figcaption>
  </figure>
</div>

:::tip
- RXD+ ←─────→  TXD+  
- RXD- ←─────→  TXD-  
- TXD+ ←─────→  RXD+  
- TXD- ←─────→  RXD-
- GND  ←─────→  GND
:::

### 通信测试

这里我们使用 minicom 进行测试：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
要在 minicom 中看到你输入的文本，需要启用 Local Echo 功能。默认情况下，minicom 不会显示你的按键输入，因此这是一个非常常见的问题。
- 步骤 1. 按下 `Ctrl+A`
- 步骤 2. 然后按下 `E`
:::

测试从 PC 向 Jetson 发送消息。 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c1.png" alt="J601 422-c1 接口连接" loading="lazy" />
    <figcaption>J601 422-c1 接口连接</figcaption>
  </figure>
</div>


同样打开测试模式。
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c2.png" alt="J601 422-c2 接口连接" loading="lazy" />
    <figcaption>J601 422-c2 接口连接</figcaption>
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
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif" alt="J601 用户 RGB LED 颜色测试" loading="lazy" />
    <figcaption>J601 用户 RGB LED 颜色测试</figcaption>
  </figure>
</div>

## 以太网 {#ethernet}

Robotics J601 载板在搭配 **T5000** 时支持 **4 路 10GbE RJ45**，搭配 **T4000** 时支持 **3 路 10GbE**。请使用另一台对端设备和合适的网线测试端口。

### 硬件连接

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png" alt="J601 RJ45 以太网口位置" loading="lazy" />
    <figcaption>J601 RJ45 以太网口位置</figcaption>
  </figure>
</div>

### 使用说明

在两台设备上都安装 `iperf3`。在对端设备上启动服务器：

```bash
sudo apt install iperf3
iperf3 -s
```

在 J601 上，使用 `ip -br address` 确认待测端口分配到的地址，然后运行：

**上传速度测试：**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png" alt="J601 以太网上行吞吐量测试" loading="lazy" />
    <figcaption>J601 以太网上行吞吐量测试</figcaption>
  </figure>
</div>

**下载速度测试：**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png" alt="J601 以太网下行吞吐量测试" loading="lazy" />
    <figcaption>J601 以太网下行吞吐量测试</figcaption>
  </figure>
</div>

:::info
- `<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器以执行带宽测试。
- `<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
- `-R` 标志会反转测试方向，用于下载速度测试。
:::

## M.2 Key E {#m2-key-e}

M.2 Key E 接口是一个标准的 M.2 连接器，主要用于连接无线模块，例如 Wi-Fi 和蓝牙，以扩展无线通信能力。

### 硬件连接

断开电源后，将兼容的 M.2 2230 Wi-Fi/Bluetooth 模组装入 Key E 插槽并接上天线。下面的固件示例适用于 **RTL8822CE** 模组；其他模组需要各自的驱动和固件。

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png" alt="J601 上的 Wi-Fi 网络扫描" loading="lazy" />
    <figcaption>J601 上的 Wi-Fi 网络扫描</figcaption>
  </figure>
</div>

**步骤 5.** 连接到 Wi-Fi 网络：

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png" alt="J601 Wi-Fi 连接结果" loading="lazy" />
    <figcaption>J601 Wi-Fi 连接结果</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png" alt="J601 上的蓝牙设备扫描" loading="lazy" />
    <figcaption>J601 上的蓝牙设备扫描</figcaption>
  </figure>
</div>

## 5G 模块（M.2 Key B） {#5g-module-m2-key-b}

M.2 Key B 插槽支持 5G 模块扩展，为机器人和边缘 AI 场景提供高速蜂窝网络连接。

### 硬件连接

将 5G 模块安装到 M.2 Key B 插槽中，并连接天线。

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png" alt="安装在 J601 M.2 Key B 插槽中的蜂窝模块" loading="lazy" />
    <figcaption>安装在 J601 M.2 Key B 插槽中的蜂窝模块</figcaption>
  </figure>
</div>

### 使用说明

**步骤 1.** 打开 5G 模块串口控制台：

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**步骤 2.** 依次按下 **Ctrl+A** 然后 **E** 进入交互模式。

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png" alt="蜂窝模块识别与 AT 指令输出" loading="lazy" />
    <figcaption>蜂窝模块识别与 AT 指令输出</figcaption>
  </figure>
</div>

### Nano SIM

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png" alt="J601 Nano SIM 卡槽位置" loading="lazy" />
    <figcaption>J601 Nano SIM 卡槽位置</figcaption>
  </figure>
</div>

### GPS

GPS 是否可用以及 AT 指令取决于所安装的蜂窝模组。下面的示例使用移远（Quectel）风格的 `AT+QGPS` 指令；请在模组文档中确认是否支持，并核对串口分配。

### 使用说明

**步骤 1.** 打开 GPS AT 指令端口：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤 2.** 启用 GPS 接收机：

```
AT+QGPS=1
```

:::info
- 如果响应为 `OK`，则表示 GPS 接收机已成功启动。
- 如果响应为 `+CME ERROR: 549`，则表示 GPS 已启用——无需再次启用。
:::

**步骤 3.** 依次按下 **Ctrl+A** 然后 **X** 退出 minicom，并选择 **Yes** 退出。

**步骤 4.** 启用 GPS 后，卫星数据将从 GPS 数据端口（通常为 `/dev/ttyUSB1`）输出。读取原始 NMEA 数据：

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

[J601 资源汇总](/jetson/recomputer_robotics_j601/getting_started/#resources) 提供载板数据手册、V1.0 原理图、STEP 机械模型和 Linux_for_Tegra BSP 源码。信号走线和连接器位号请查阅原理图。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed 社区论坛"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="联系 Seeed 技术支持"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord 社区"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki 产品讨论"></a>
</div>

</div>
