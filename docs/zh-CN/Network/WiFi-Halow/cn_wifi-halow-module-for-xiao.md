---
description: XIAO ESP32S3 搭配 Wio-WM6180 Wi-Fi HaLow 模块教程
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

本教程将指导您如何使用 Wio-WM6180 Wi-Fi HaLow 模块与 XIAO ESP32S3 配合，构建一个 Wi-Fi HaLow 客户端。Wi-Fi HaLow（IEEE 802.11ah）专为长距离、低功耗的物联网应用设计，工作在低于 1 GHz 的频段。我们将逐步介绍硬件设置、软件配置，并演示如何为您的物联网项目建立 Wi-Fi HaLow 连接。

### 主要特点

- 最远可达 1 公里的长距离 Wi-Fi 连接（视距条件下）
- 低功耗，非常适合物联网设备
- 低于 1 GHz 的频段，穿墙能力更强
- 兼容 XIAO ESP32S3 开发板
- 简单易懂的设置和配置流程

## 硬件概览

以下表格列出了 Wio-WM6180 Wi-Fi HaLow 模块的主要规格：

| 特性           | 值       | 单位 |
|:-------------:|:-------:|:----:|
| 工作电压       | 3.3     | V    |
| 工作电流       | 待定     | mA   |
| Wi-Fi 协议     | IEEE 802.11ah | -    |
| 频段           | 低于 1 GHz | -    |
| 范围           | 最远 1   | km   |
| 接口           | SPI | -    |
| 尺寸           | 待定     | mm   |

## 什么是 Wi-Fi HaLow？

Wi-Fi HaLow 是基于 IEEE 802.11ah 标准的无线网络协议，专为物联网（IoT）应用设计。它工作在低于 1 GHz 的频段（通常为 900 MHz），相比传统 Wi-Fi 具有以下显著优势：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **扩展范围**：在视距条件下，Wi-Fi HaLow 的通信距离可达 1 公里，远超传统 Wi-Fi。

2. **更强的穿透力**：较低的频率信号可以更好地穿透墙壁和其他障碍物，非常适合复杂环境。

3. **低功耗**：专为物联网设备设计，Wi-Fi HaLow 可实现设备多年的电池续航。

4. **可扩展性**：支持单个接入点连接数千台设备，非常适合大规模物联网部署。

5. **安全性**：继承了 Wi-Fi 系列的强大安全功能，包括 WPA3 加密。

### 为什么 Wi-Fi HaLow 很重要

Wi-Fi HaLow 满足了物联网应用对长距离连接、低功耗以及同时处理大量设备的需求。它弥合了传统 Wi-Fi 和 LPWAN 技术之间的差距，提供了以下优势：

- **工业物联网**：在工厂、仓库和工业环境中实现可靠连接。
- **智慧农业**：为大面积农业区域的传感器网络提供覆盖。
- **智慧城市**：支持城市环境中大规模的连接设备网络。
- **资产追踪**：实现对贵重资产和设备的长距离追踪。

通过结合 Wi-Fi 的易用性与低功耗、长距离连接的优势，Wi-Fi HaLow 在推动物联网应用扩展方面将发挥重要作用。

### Wi-Fi HaLow 系统架构

一个典型的 Wi-Fi HaLow 网络由几个关键组件组成，这些组件协同工作以实现长距离、低功耗的物联网连接：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **接入点（AP）**：Wi-Fi HaLow 网络的中心枢纽，负责管理连接并在设备与互联网之间路由数据。

2. **站点（STA）**：连接到接入点的客户端设备，这些设备可以是传感器、执行器或其他物联网设备。

3. **网关**：作为 Wi-Fi HaLow 网络与其他网络（如以太网或蜂窝网络）之间的桥梁。

在本教程中，我们将配置 XIAO ESP32S3 作为一个站点（STA）客户端，连接到 Wi-Fi HaLow 接入点。XIAO 将使用 WM6180 模块来建立和维护 HaLow 连接。

## MM-IoT-SDK 框架

WM6180 模组使用 [MorseMicro 的 MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32)，该 SDK 提供以下功能：

- **多协议支持**：支持与各种 IoT 协议的无缝集成
- **低功耗管理**：针对电池供电设备优化的功耗
- **安全功能**：内置加密和认证机制
- **简易配置**：简化的 API 用于网络设置和管理

MM-IoT-SDK 的架构由多个层组成：

1. **硬件抽象层 (HAL)**：为不同硬件平台提供统一接口
2. **网络栈**：实现 Wi-Fi HaLow 协议栈
3. **应用层**：提供用于应用开发和设备管理的 API

该框架允许开发者快速实现 Wi-Fi HaLow 功能，同时保持对定制应用的灵活支持。

## 所需材料

以下是运行本教程所需的材料。

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
            <th>Wio-WM6180 Wi-Fi HaLow 模组（适用于 XIAO）</th>
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
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
本教程适用于所有 XIAO ESP32 系列。我们将在本教程中以 XIAO ESP32S3 Sense 为例。
:::

除了上述材料外，您可能需要准备适用于 WiFi-HaLow 使用的额外天线。以下是经过验证的推荐天线型号。

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
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

要将天线连接到 WiFi-HaLow 模组，您可能还需要购买 **SMA 转 I-PEX 天线线缆**。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA 转 I-PEX 天线线缆</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

如果您是首次使用，可以参考以下视频进行天线安装。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 安装 ESP-IDF v5.1.1

在开始编程之前，我们需要在您的电脑上安装 ESP-IDF v5.1.1。ESP-IDF 是 ESP32 系列芯片的官方开发框架。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**步骤 1.** 下载适用于 Windows 的 ESP-IDF 工具安装程序

下载 [ESP-IDF 工具安装程序](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1)（适用于 Windows）。此安装程序包含 ESP-IDF 开发所需的所有工具。

**步骤 2.** 运行安装程序

1. 以管理员身份运行下载的安装程序。
2. 按提示安装 Python、Git 和其他所需工具。
3. 在提示时选择以下选项：
   - 安装 ESP-IDF v5.1.1
   - 安装 Python
   - 安装 Git
   - 将 ESP-IDF 工具添加到路径

**步骤 3.** 验证安装

打开一个新的命令提示符并运行：
```bash
esp-idf --version
```

如果安装成功，您应该看到版本号 5.1.1。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**步骤 1.** 安装必要的依赖项

打开终端并安装 Homebrew（如果尚未安装）：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

安装所需的软件包：
```bash
brew install cmake ninja dfu-util
```

**步骤 2.** 下载并安装 ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**步骤 3.** 设置环境变量

```bash
. $HOME/esp/esp-idf/export.sh
```

将此行添加到您的 `~/.profile` 或 `~/.zshrc` 文件中，以便在打开新终端时自动设置环境变量。

</TabItem>

<TabItem value="Linux" label="Linux">

**步骤 1.** 安装必要的依赖项

对于 Ubuntu 和 Debian：
```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

对于其他发行版，请安装等效的软件包。

**步骤 2.** 下载并安装 ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**步骤 3.** 设置环境变量

```bash
. $HOME/esp/esp-idf/export.sh
```

将此行添加到您的 `~/.bashrc` 文件中，以便在打开新终端时自动设置环境变量。

</TabItem>
</Tabs>

:::tip
安装完成后，您可能需要重启电脑以确保所有环境变量正确设置。
:::

:::note
有关安装 ESP-IDF v5.1.1 的更详细说明，您可以参考 Espressif 官方文档：
- [ESP-IDF 入门指南](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)
:::

## 克隆并配置 mm-iot-esp32 仓库

按照以下步骤克隆 mm-iot-esp32 仓库并设置环境变量：

<Tabs>
<TabItem value="Windows" label="Windows">

**步骤 1.** 克隆仓库
```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**步骤 2.** 导出 IDF 变量
```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**步骤 3.** 设置 MMIOT_ROOT 环境变量

您可以通过 Windows 系统属性永久设置：
1. 打开系统属性（Win + R，输入 `sysdm.cpl`）。
2. 点击“环境变量”。
3. 在“用户变量”下，点击“新建”。
4. 变量名：`MMIOT_ROOT`
5. 变量值：`C:\Users\YourUsername\mm-iot-esp32`（替换为您的实际路径）。
6. 点击“确定”保存。

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

**步骤 2.** 导出 IDF 变量
```bash
cd ~/mm-iot-esp32
source export.sh
```

**步骤 3.** 设置 MMIOT_ROOT 环境变量

临时使用：
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永久使用，请将以下内容添加到您的 shell 配置文件：
```bash
# 对于 bash 用户（添加到 ~/.bash_profile 或 ~/.bashrc）
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# 对于 zsh 用户（添加到 ~/.zshrc）
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

然后重新加载您的 shell 配置：
```bash
# 对于 bash
source ~/.bash_profile

# 对于 zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**步骤 1.** 克隆仓库
```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**步骤 2.** 导出 IDF 变量
```bash
cd ~/mm-iot-esp32
source export.sh
```

**步骤 3.** 设置 MMIOT_ROOT 环境变量

临时使用：
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永久使用，请将以下内容添加到您的 shell 配置文件：
```bash
# 对于 bash 用户
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# 对于 zsh 用户
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

然后重新加载您的 shell 配置：
```bash
# 对于 bash
source ~/.bashrc

# 对于 zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
设置 MMIOT_ROOT 环境变量时，请确保使用绝对路径。使用相对路径可能会导致构建项目时出现问题。
:::

:::note
设置环境变量后，您可能需要关闭并重新打开终端以使更改生效。
:::

## 构建示例固件

mm-iot-esp32 仓库包含多个示例应用程序，展示了不同的功能。以下是构建和配置这些示例的方法：

### 示例应用程序位置

所有示例应用程序都位于仓库的 `examples` 目录中。可用的示例包括：

- `scan`：Wi-Fi 扫描示例
- `iperf`：iperf 服务器示例
- `sta_reboot`：Wi-Fi 站点重启示例
- `sta_connect`：Wi-Fi 站点连接示例
- `web_camera_server`：网络摄像头服务器示例
- 以及更多...

### 配置网络凭据

在构建固件之前，需要在示例的配置文件中配置网络设置：

1. 导航到您选择的示例目录：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. 编辑配置文件：

```bash
# 打开配置文件
nano src/mm_app_loadconfig.c
```

3. 在此文件中，您可以修改以下内容：

- 国家代码（应设置为 **US**，因为该产品目前仅适用于北美地区）
- Wi-Fi HaLow 网络凭据
- 其他与网络相关的参数

:::caution
关于国家代码的重要说明：
- 国家代码必须设置为 "US"，因为该产品目前仅适用于北美市场
- 由于法规要求，该产品尚未在其他地区上市
- 在北美以外的地区使用该产品可能违反当地法规
:::

### 构建过程

在配置网络设置后，可以使用以下命令构建固件：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note
- `idf.py set-target` 命令每个示例只需运行一次
- `idf.py fullclean` 通过删除所有先前的构建文件确保干净的构建
- 构建成功后，固件二进制文件将位于 `build` 目录中
:::

### 构建输出

构建成功后，您应该会看到类似以下的输出：

```bash
# 项目构建完成。要烧录，请运行以下命令：
idf.py -p (PORT) flash
```

接下来，我们将演示几个示例。

## 示例 1. scan

此示例展示如何扫描您附近可用的 Wi-Fi HaLow 网络。按照以下步骤构建并运行扫描示例：

### 步骤 1：导航到扫描示例

```bash
cd ~/mm-iot-esp32/example/scan
```

### 步骤 2：配置国家代码

1. 打开配置文件：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 找到并修改国家代码行：

```c
#define COUNTRY_CODE "US"  // 必须使用 "US"，因为该产品仅适用于北美地区
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

如果一切正常：
- 烧录完成后，串口监视器会自动启动
- 程序将开始扫描 Wi-Fi HaLow 网络
- 如果有任何 Wi-Fi HaLow 网关在范围内，其信息将显示在串口监视器中

串口监视器中的示例输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip
- 确保您附近有 Wi-Fi HaLow 网关以检测网络
- 扫描过程会持续运行，因此您会定期看到可用网络的更新
- 按 Ctrl+C 停止监视器并退出程序
:::

:::note
如果未检测到任何网络：
- 确认您的 Wi-Fi HaLow 网关已通电并正常工作
- 检查您是否在网关的范围内
- 确保模块已正确连接到您的 XIAO ESP32S3
:::

## 示例 2. iperf

此示例演示如何使用 iPerf 测试您的 Wi-Fi HaLow 连接的网络性能。按照以下步骤构建并运行 iPerf 示例：

### 第 1 步：导航到 iPerf 示例

```bash
cd ~/mm-iot-esp32/example/iperf
```

### 第 2 步：配置网络设置

1. 打开配置文件：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 修改以下参数：

```cpp
// 设置国家代码（北美地区必须为 "US"）
#define COUNTRY_CODE "US"

// 设置您的 Wi-Fi HaLow 网络凭据
#define SSID             Your_HaLow_SSID           // 替换为您的网络名称
#define SAE_PASSPHRASE   Your_Password             // 替换为您的网络密码
```

### 第 3 步：硬件设置

1. 将 Wio-WM6180 Wi-Fi HaLow 模块连接到您的 XIAO ESP32S3
2. 通过 USB 将 XIAO ESP32S3 连接到您的计算机

### 第 4 步：构建和烧录

依次执行以下命令：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 第 5 步：运行性能测试

程序成功运行后，您将看到 iPerf 服务启动。现在，您可以从 Wi-Fi HaLow 网关运行性能测试。

对于 IPv4 测试，在网关上执行以下命令：

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

对于 IPv6 测试，在网关上执行以下命令：

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

参数说明：

- `-c`：以客户端模式运行
- `-p`：端口号
- `-i`：报告间隔（1 秒）
- `-u`：使用 UDP 协议
- `-b`：目标带宽（20 Mbps）
- `-V`：IPv6 模式（仅用于 IPv6 测试）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::提示
- 在运行性能测试之前，请确保您的设备已成功连接到 Wi-Fi HaLow 网络
- 设备的 IP 地址将在连接后显示在串行监视器中
- 您可以根据测试需求调整带宽（-b 参数）
:::

:::注意
常见问题及解决方法：
- 如果连接失败，请验证您的网络凭据
- 如果 iPerf 服务未启动，请检查您的硬件连接
- 如果性能较差，请确保您处于网关的良好范围内
:::

## 示例 3. web_camera_server

此示例演示如何通过 Wi-Fi HaLow 网络从 XIAO ESP32S3 Sense 流式传输摄像头画面。按照以下步骤构建并运行网络摄像头服务器：

### 第 1 步：导航到网络摄像头示例

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### 第 2 步：配置网络设置

1. 打开配置文件：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 修改 Wi-Fi HaLow 凭据：

```cpp
// 设置您的 Wi-Fi HaLow 网络凭据
#define SSID              Your_HaLow_SSID           // 替换为您的网络名称
#define SAE_PASSPHRASE    Your_Password             // 替换为您的网络密码
```

### 第 3 步：硬件设置

1. 将 Wio-WM6180 Wi-Fi HaLow 模块连接到您的 XIAO ESP32S3 Sense
2. 确保 XIAO ESP32S3 Sense 上的摄像头模块已正确连接
3. 通过 USB 将 XIAO ESP32S3 Sense 连接到您的计算机

### 第 4 步：构建和烧录

依次执行以下命令：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 第 5 步：访问摄像头画面

程序成功运行后：

1. 记录串行监视器中显示的 IP 地址
2. 在连接到同一 Wi-Fi HaLow 网关的任何设备上打开一个网页浏览器
3. 在浏览器地址栏中输入 IP 地址
4. 您现在应该可以看到来自 XIAO ESP32S3 Sense 的实时摄像头画面

示例 URL：

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::提示
为了获得最佳的流媒体体验：
- 确保良好的光线条件以获得更好的图像质量
- 将 XIAO ESP32S3 Sense 保持在 Wi-Fi HaLow 网关的良好范围内
- 使用现代网页浏览器以获得最佳兼容性
:::

:::注意
故障排除：
- 如果无法访问摄像头画面，请验证您的设备是否在与 Wi-Fi HaLow 网关相同的网络中
- 如果图像未显示，请检查摄像头模块是否正确连接
- 如果流媒体延迟较大，请尝试靠近 Wi-Fi HaLow 网关
:::

## 资源

- **[GITHUB]** [mm-iot-esp32 仓库](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot 文档](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB 文件](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H 短距离模块规格书_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>