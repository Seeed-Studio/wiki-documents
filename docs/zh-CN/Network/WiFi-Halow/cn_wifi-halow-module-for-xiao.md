---
description: XIAO ESP32S3 与 Wio-WM6180 Wi-Fi HaLow 模块教程
title: XIAO Wi-Fi HaLow 模块入门指南
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /cn/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
---


# XIAO Wi-Fi HaLow 模块入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

本教程将指导您设置和使用 Wio-WM6180 Wi-Fi HaLow 模块与 XIAO ESP32S3 构建 Wi-Fi HaLow 客户端。Wi-Fi HaLow（IEEE 802.11ah）专为长距离、低功耗物联网应用而设计，工作在亚 1 GHz 频段。我们将详细介绍硬件设置、软件配置，并演示如何为您的物联网项目建立 Wi-Fi HaLow 连接。

### 主要特性

- 长距离 Wi-Fi 连接，视距可达 1 公里
- 低功耗，非常适合物联网设备
- 亚 1 GHz 工作频率，具有更好的墙体和障碍物穿透能力
- 兼容 XIAO ESP32S3 开发板
- 易于遵循的设置和配置过程

## 硬件概述

下表概述了 Wio-WM6180 Wi-Fi HaLow 模块的主要规格：

| 特性 | 数值 | 单位 |
|:-------------:|:-----:|:----:|
| 工作电压 | 3.3 | V |
| 工作电流 | 待定 | mA |
| Wi-Fi 协议 | IEEE 802.11ah | - |
| 频段 | 亚 1 GHz | - |
| 范围 | 最高 1 | km |
| 接口 | SPI | - |
| 尺寸 | 待定 | mm |

## 什么是 Wi-Fi HaLow？

Wi-Fi HaLow 是基于 IEEE 802.11ah 标准的无线网络协议，专门为物联网（IoT）应用而设计。工作在亚 1 GHz 频段（通常为 900 MHz），Wi-Fi HaLow 相比传统 Wi-Fi 具有几个显著优势：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **扩展范围**：Wi-Fi HaLow 在视距条件下可达到 1 公里的距离，远超传统 Wi-Fi 的范围。

2. **改善穿透性**：较低频率的信号能更好地穿透墙体和其他障碍物，使其非常适合具有挑战性的环境。

3. **低功耗**：专为物联网设备设计，Wi-Fi HaLow 可使连接设备实现数年的电池寿命。

4. **可扩展性**：支持数千台设备连接到单个接入点，非常适合大规模物联网部署。

5. **安全性**：继承了 Wi-Fi 系列的强大安全功能，包括 WPA3 加密。

### 为什么 Wi-Fi HaLow 很重要

Wi-Fi HaLow 满足了物联网应用日益增长的需求，这些应用需要长距离连接、低功耗以及同时处理众多设备的能力。它弥合了传统 Wi-Fi 和 LPWAN 技术之间的差距，提供：

- **工业物联网**：在工厂、仓库和工业环境中实现可靠连接。
- **智慧农业**：为传感器网络提供大型农业区域的覆盖。
- **智慧城市**：支持城市环境中连接设备的广泛网络。
- **资产跟踪**：允许对有价值的资产和设备进行长距离跟踪。

通过将 Wi-Fi 的熟悉性与低功耗、长距离连接的优势相结合，Wi-Fi HaLow 将在各行业物联网应用的扩展中发挥关键作用。

### Wi-Fi HaLow 系统架构

典型的 Wi-Fi HaLow 网络由几个关键组件组成，它们协同工作以实现长距离、低功耗的物联网连接：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **接入点（AP）**：Wi-Fi HaLow 网络的中央枢纽，负责管理连接并在设备和互联网之间路由数据。

2. **站点（STA）**：连接到接入点的客户端设备。这些可以是传感器、执行器或其他物联网设备。

3. **网关**：充当 Wi-Fi HaLow 网络与其他网络（如以太网或蜂窝网络）之间的桥梁。

在本教程中，我们将配置 XIAO ESP32S3 作为连接到 Wi-Fi HaLow 接入点的站点（STA）客户端。XIAO 将使用 WM6180 模块建立和维护 HaLow 连接。

## MM-IoT-SDK 框架

WM6180 模块使用 [MorseMicro 的 MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32)，它提供：

- **多协议支持**：实现与各种物联网协议的无缝集成
- **低功耗管理**：为电池供电设备优化功耗
- **安全功能**：内置加密和身份验证机制
- **简易配置**：简化网络设置和管理的 API

MM-IoT-SDK 架构由几个层次组成：

1. **硬件抽象层 (HAL)**：为不同硬件平台提供统一接口
2. **网络协议栈**：实现 Wi-Fi HaLow 协议栈
3. **应用层**：为应用开发和设备管理提供 API

该框架允许开发者快速实现 Wi-Fi HaLow 功能，同时保持自定义应用的灵活性。

## 所需材料

以下是运行本教程所需的材料。

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
            <th>Wio-WM6180 Wi-Fi HaLow Module for XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:90, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
本教程适用于所有 XIAO ESP32 系列。在本教程中，我们将以 XIAO ESP32S3 Sense 为例。
:::

除了上述内容外，您可能还需要准备适用于 WiFi-Halow 使用的额外天线。以下是经过验证的推荐天线型号。

<div class="table-center">
    <table align="center">
        <tr>
            <th>长距离室内天线套件</th>
            <th>2.6dBi 长距离天线</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

要将天线连接到WiFi-Halow模块，您可能还需要购买**SMA转I-PEX天线电缆**。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA转I-PEX天线电缆</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

如果您是第一次使用，可以参考以下视频进行天线安装。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 安装 ESP-IDF v5.1.1

在开始编程之前，我们需要在您的计算机上安装 ESP-IDF v5.1.1。ESP-IDF 是 ESP32 系列芯片的官方开发框架。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**步骤 1.** 下载适用于 Windows 的 ESP-IDF 工具安装程序

下载适用于 Windows 的 [ESP-IDF 工具安装程序](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1)。此安装程序包含 ESP-IDF 开发所需的所有工具。

**步骤 2.** 运行安装程序

1. 以管理员身份运行下载的安装程序
2. 按照提示安装 Python、Git 和其他必需工具
3. 出现提示时，选择以下选项：
   - 安装 ESP-IDF v5.1.1
   - 安装 Python
   - 安装 Git
   - 将 ESP-IDF 工具添加到路径

**步骤 3.** 验证安装

打开新的命令提示符并运行：

```bash
esp-idf --version
```

如果安装成功，您应该看到版本号 5.1.1。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**步骤 1.** 安装先决条件

打开终端并安装 Homebrew（如果您还没有安装的话）：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install the required packages:

```bash
brew install cmake ninja dfu-util
```

**Step 2.** Download and install ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

将此行添加到您的 `~/.profile` 或 `~/.zshrc` 文件中，以便在打开新终端时自动设置环境变量。

</TabItem>

<TabItem value="Linux" label="Linux">

**步骤 1.** 安装先决条件

对于 Ubuntu 和 Debian：

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

For other distributions, please install equivalent packages.

**Step 2.** Download and install ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

将此行添加到您的 `~/.bashrc` 中，以便在打开新终端时自动设置环境变量。

</TabItem>
</Tabs>

:::tip
安装完成后，您可能需要重启计算机以确保所有环境变量都正确设置。
:::

:::note
有关安装 ESP-IDF v5.1.1 的更详细说明，您可以参考官方 Espressif 文档：

- [ESP-IDF 入门指南](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## 克隆和配置 mm-iot-esp32 仓库

按照以下步骤克隆 mm-iot-esp32 仓库并设置环境变量：

<Tabs>
<TabItem value="Windows" label="Windows">

**步骤 1.** 克隆仓库

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**步骤 3.** 设置 MMIOT_ROOT 环境变量

您可以通过 Windows 系统属性永久设置此变量：

1. 打开系统属性（Win + R，输入 `sysdm.cpl`）
2. 点击"环境变量"
3. 在"用户变量"下，点击"新建"
4. 变量名：`MMIOT_ROOT`
5. 变量值：`C:\Users\YourUsername\mm-iot-esp32`（替换为您的实际路径）
6. 点击"确定"保存

或者，您可以在命令提示符中临时设置：

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**步骤 1.** 克隆仓库

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Step 3.** Set MMIOT_ROOT environment variable

For temporary use:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

For permanent use, add to your shell configuration file:

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Then reload your shell configuration:

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**步骤 1.** 克隆仓库

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Step 3.** Set MMIOT_ROOT environment variable

For temporary use:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

For permanent use, add to your shell configuration file:

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Then reload your shell configuration:

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
在设置 MMIOT_ROOT 环境变量时，请确保使用绝对路径。相对路径可能会在构建项目时导致问题。
:::

:::note
设置环境变量后，您可能需要关闭并重新打开终端以使更改生效。
:::

## 构建示例固件

mm-iot-esp32 仓库包含多个示例应用程序，演示了不同的功能。以下是如何构建和配置这些示例：

### 示例应用程序位置

所有示例应用程序都可以在仓库的 `examples` 目录中找到。可用的示例包括：

- `scan`：Wi-Fi 扫描示例
- `iperf`：iperf 服务器示例
- `sta_reboot`：Wi-Fi 站点重启示例
- `sta_connect`：Wi-Fi 站点连接示例
- `web_camera_server`：Web 摄像头服务器示例
- 以及更多...

### 配置网络凭据

在构建固件之前，您需要在示例的配置文件中配置网络设置：

1. 导航到您选择的示例目录：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edit the configuration file:

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. 在此文件中，您可以修改：

- 国家代码（应设置为 **US**，因为该产品目前仅适用于北美地区）
- Wi-Fi HaLow 网络凭据
- 其他网络相关参数

:::caution
关于国家代码的重要说明：

- 国家代码必须设置为"US"，因为该产品目前仅适用于北美市场
- 由于监管要求，该产品尚未在其他地区上市
- 在北美以外的地区使用该产品可能违反当地法规

:::

### 构建过程

配置网络设置后，您可以使用以下命令构建固件：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- `idf.py set-target` 命令对于每个示例只需要运行一次
- `idf.py fullclean` 通过删除所有先前的构建产物来确保干净的构建
- 构建成功后，固件二进制文件将位于 `build` 目录中

:::

### 构建输出

构建成功后，您应该看到类似于以下的输出：

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

下面，我们将演示几个示例。

## 示例 1. 扫描

此示例演示如何扫描您附近可用的 Wi-Fi HaLow 网络。按照以下步骤构建并运行扫描示例：

### 步骤 1：导航到扫描示例

```bash
cd ~/mm-iot-esp32/example/scan
```

### 步骤 2：配置国家代码

1. 打开配置文件：

```bash
nano main/src/mm_app_loadconfig.c
```

2. Locate and modify the country code line:

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### 步骤 3：硬件设置

1. 将 Wio-WM6180 Wi-Fi HaLow 模块连接到您的 XIAO ESP32S3

2. 通过 USB 将 XIAO ESP32S3 连接到您的计算机

### 步骤 4：构建和烧录

按顺序执行以下命令：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 步骤 5：监控结果

如果一切工作正常：

- 串口监视器将在刷写后自动启动
- 程序将开始扫描 Wi-Fi HaLow 网络
- 如果范围内有任何 Wi-Fi HaLow 网关，它们的信息将显示在串口监视器中

串口监视器中的示例输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- 确保您附近有 Wi-Fi HaLow 网关以检测网络
- 扫描过程持续运行，因此您会看到可用网络的定期更新
- 按 Ctrl+C 停止监视器并退出程序

:::

:::note
如果您没有看到任何网络：

- 验证您的 Wi-Fi HaLow 网关已开机并正常工作
- 检查您是否在网关的范围内
- 确保模块正确连接到您的 XIAO ESP32S3

:::

## 示例 2. iperf

此示例演示如何使用 iPerf 测试 Wi-Fi HaLow 连接的网络性能。按照以下步骤构建并运行 iPerf 示例：

### 步骤 1：导航到 iPerf 示例

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Step 2: Configure Network Settings

1. Open the configuration file:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modify the following parameters:

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### 步骤 3：硬件设置

1. 将 Wio-WM6180 Wi-Fi HaLow 模块连接到您的 XIAO ESP32S3
2. 通过 USB 将 XIAO ESP32S3 连接到您的计算机

### 步骤 4：构建和烧录

按顺序执行以下命令：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 步骤 5：运行性能测试

程序成功运行后，您将看到 iPerf 服务启动。现在您可以从 Wi-Fi HaLow 网关运行性能测试。

对于 IPv4 测试，在您的网关上执行此命令：

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

For IPv6 testing, execute this command on your gateway:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

参数说明：

- `-c`：以客户端模式运行
- `-p`：端口号
- `-i`：报告间隔（1秒）
- `-u`：使用UDP协议
- `-b`：目标带宽（20 Mbps）
- `-V`：IPv6模式（仅用于IPv6测试）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- 在运行性能测试之前，请确保您的设备已成功连接到Wi-Fi HaLow网络
- 连接后，设备的IP地址将显示在串口监视器中
- 您可以根据测试需求调整带宽（-b参数）

:::

:::note
常见问题和解决方案：

- 如果连接失败，请验证您的网络凭据
- 如果iPerf服务无法启动，请检查您的硬件连接
- 如果性能较差，请确保您在网关的良好信号范围内

:::

## 示例3. web_camera_server

此示例演示如何通过Wi-Fi HaLow网络从XIAO ESP32S3 Sense流式传输摄像头画面。按照以下步骤构建和运行Web摄像头服务器：

### 步骤1：导航到Web摄像头示例

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Step 2: Configure Network Settings

1. Open the configuration file:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modify the Wi-Fi HaLow credentials:

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### 步骤 3：硬件设置

1. 将 Wio-WM6180 Wi-Fi HaLow 模块连接到您的 XIAO ESP32S3 Sense
2. 确保您的 XIAO ESP32S3 Sense 上的摄像头模块已正确连接
3. 通过 USB 将 XIAO ESP32S3 Sense 连接到您的计算机

### 步骤 4：构建和烧录

按顺序执行以下命令：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 步骤 5：访问摄像头画面

程序成功运行后：

1. 记下串口监视器中显示的 IP 地址
2. 在连接到与您的 Wi-Fi HaLow 网关相同网络的任何设备上打开网页浏览器
3. 在浏览器地址栏中输入该 IP 地址
4. 您现在应该能看到来自 XIAO ESP32S3 Sense 的实时摄像头画面

示例 URL：

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
为了获得最佳的流媒体体验：

- 确保良好的光照条件以获得更好的图像质量
- 保持 XIAO ESP32S3 Sense 在 Wi-Fi HaLow 网关的良好范围内
- 使用现代网络浏览器以获得最佳兼容性

:::

:::note
故障排除：

- 如果您无法访问摄像头画面，请验证您的设备与 Wi-Fi HaLow 网关在同一网络上
- 如果图像未显示，请检查摄像头模块是否正确连接
- 如果流媒体卡顿，请尝试靠近 Wi-Fi HaLow 网关

:::

## 资源

- **[GITHUB]** [mm-iot-esp32 仓库](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot 文档](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB 文件](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
