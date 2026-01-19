---
title: Seeed Studio XIAO ESP32-C5 Wi-Fi 吞吐量测试工具
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /cn/xaio_esp32c5_wifi_throughput_tester
last_update:
  date: 1/16/2026
  author: Zeller
---


Seeed Studio XIAO ESP32-C5 以 ESP32-C5 作为其核心处理器。ESP32-C5 是业界首款支持双频 Wi-Fi 6 (802.11ax) 的 RISC-V 微控制器，同时支持 2.4GHz 和 5GHz 频段。凭借卓越的无线性能，它在智能家居、物联网 (IoT) 和各种其他场景中具有巨大的应用潜力。

在实际使用中，Wi-Fi 的实际数据吞吐量是衡量传输能力的最重要指标之一。
接下来，我们将使用 Wi-Fi 吞吐量测试工具来直观展示基于 Wi-Fi 6 的 XIAO ESP32-C5 在 2.4GHz 和 5GHz 频段上的强大数据吞吐能力！

本教程将使用 [ESP-IDF](https://github.com/espressif/esp-idf) 进行开发。

*参考*：[ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/index.html)

## 硬件准备

您需要准备一块 XIAO ESP32-C5 开发板。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 天线安装

在 Seeed Studio XIAO ESP32-C5 的包装内，有一个专用的 **Wi-Fi/BT 天线连接器**。为了获得最佳的 WiFi/蓝牙信号强度，您需要取出包装中包含的天线并将其连接到连接器上。<br/>
:::tip
如果您想获得更强的信号增益效果，可以购买并安装 **2.4G/5G 外置天线（RP-SMA 公头连接器）** — 它比包装中包含的内置 FPC 天线提供更高的增益！
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G 外置天线（RP-SMA 公头连接器）</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 软件准备

### 安装 ESP-IDF

:::tip
本教程在 Windows 开发环境中开发。关于在 Linux / Mac 上进行 ESP-IDF 操作，请参考 [使用 Espressif ESP-IDF 在 XIAO 上开发](https://wiki.seeedstudio.com/cn/xiao_idf/)
:::

**Windows 系统**

**步骤 1.** 点击 [ESP32-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/windows-setup.html#esp-idf-tools-installer)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_1.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 选择合适的版本进行下载。

:::tip
XIAO ESP32-C5 需要 ESP-IDF v5.5 或更高版本。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_2.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 安装

1. 在下载的文件中，找到 `esp-idf-tools-setup-offline-5.5.2.exe` 并双击开始安装。选择您偏好的安装语言

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_3.png" style={{width:800, height:'auto'}}/></div><br/>

2. 选择 I accept the agreement，然后点击 Next。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_4.png" style={{width:800, height:'auto'}}/></div><br/>

3. 点击 Next。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_5.png" style={{width:800, height:'auto'}}/></div><br/>

4. 选择安装路径。安装需要大量存储空间，请选择合适的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_6.png" style={{width:800, height:'auto'}}/></div><br/>

5. 保持默认设置；无需更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_7.png" style={{width:800, height:'auto'}}/></div><br/>

6. 点击 Install 并等待安装完成。这可能需要一些时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_8.png" style={{width:800, height:'auto'}}/></div><br/>

7. 安装完成后，Windows 桌面上将显示以下两个快捷方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_9.png" style={{width:400, height:'auto'}}/></div><br/>

**Linux(Ubuntu/Debian) 和 macOS 系统**

**步骤 1.** 安装依赖项

```bash
# Linux
sudo apt update && sudo apt install \
    git wget flex bison gperf python3 python3-pip python3-venv \
    cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

```bash
#macOS
brew install git wget cmake ninja dfu-util ccache python3
pip3 install pyserial
```

**步骤 2.** 克隆指定版本的仓库。

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git -b v5.5.1 esp-idf-v5.5.1
```

**步骤 3.** 安装工具链

```bash
cd ~/esp/esp-idf-v5.5.1
./install.sh esp32c5
```

**步骤 4.** 添加环境变量

```bash
. $HOME/esp/esp-idf-v5.5.1/export.sh
```

### 安装 iperf

**Windows 系统**

**步骤 1.** 点击 [iperf](https://sourceforge.net/projects/iperf2/)，然后下载

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 将其放置在合适的文件夹中，然后右键点击并在此处打开终端。此步骤将在稍后使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n2.png" style={{width:800, height:'auto'}}/></div><br/>

**Linux(Ubuntu/Debian) 和 macOS 系统**

```bash
# Ubuntu/Debian
sudo apt install iperf

# macOS
brew install iperf
```

### 克隆测试项目

- 将测试项目克隆到您选择的文件夹中。

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32C5_iperf_test" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

```bash
git clone https://github.com/limengdu/XIAO-ESP32C5_iperf_test.git
```

**Windows 系统**

**步骤 1.** 点击桌面上的 `ESP-IDF 5.5 PowerShell`；然后将执行环境检查。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n3.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 打开克隆的测试项目

```bash
cd C:\User\yourname\XIAO-ESP32C5_iperf_test
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n4.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 将目标芯片设置为 `esp32c5`

```bash
idf.py --preview set-target esp32c5
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 构建项目

```bash
idf.py build
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5.png" style={{width:800, height:'auto'}}/></div>

构建完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n6.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 将代码烧录到 XIAO ESP32-C5 并打开串口监视器

您可以选择使用 `idf.py flash` 进行烧录；IDF 烧录工具会自动检测您的端口进行烧录，也可以使用 `idf.py -p PORT flash` 指定端口。在 Windows 上，您可以打开设备管理器来检查端口。

```bash
 idf.py flash monitor
or
 idf.py -p PORT flash monitor
or
```

指定烧录端口（具体端口号取决于您设备的端口。）

```bash
idf.py -p COM69 flash monitor
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n7.png" style={{width:800, height:'auto'}}/></div><br/>

烧录成功后，终端将显示 **`iperf>`** 提示符。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
如果没有出现 `iperf>` 提示符，请关闭 XIAO ESP32-C5 的电源，然后按下板载 Reset 按钮将其唤醒并重新连接。
:::

**适用于 Linux(Ubuntu/Debian) 和 macOS**

```bash
# Navigate to the project directory
cd esp32c5_iperf_test

# Set the target chip
idf.py --preview set-target esp32c5

# Compile the project
idf.py build

# Flash the firmware and open the serial monitor
idf.py flash monitor
```

## Wi-Fi 数据吞吐量测试

我们将使用 TCP 和 UDP 协议测试 XIAO ESP32-C5 在 2.4 GHz 和 5 GHz 频段的 Wi-Fi 数据吞吐量。

为什么我们需要同时测试 TCP 和 UDP？<br/>
在评估 XIAO ESP32-C5 的 Wi-Fi RF 性能时，TCP 和 UDP 提供了两个完全不同的视角：

- **TCP 测试（测量应用体验）：** TCP 是一种面向连接的可靠协议，包含握手、重传和拥塞控制机制。  
  - **目的：** 模拟对数据完整性要求严格的真实应用，如网页浏览、OTA 更新和 MQTT 控制。它反映了芯片在确保零数据丢失的同时处理复杂协议栈的整体能力（即**稳定性**）。

- **UDP 测试（测量硬件极限）：** UDP 是一种无连接协议，专注于发送数据而不保证传输。  
  - **目的：** 移除协议层确认开销，最大化 Wi-Fi 无线电的物理带宽极限。常用于音频/视频流测试，它揭示了芯片在 2.4GHz 和 5GHz 频段的最大"纯净"吞吐量潜力（即**速度**）。

### 检查 IP 地址

检查您的计算机连接的网络的 IP 地址，因为它将在后续步骤中使用。

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### 2.4GHz 频段吞吐量测试

实际测量 XIAO ESP32-C5 在 2.4GHz 频段的 Wi-Fi 数据吞吐量。

- 将 XIAO ESP32-C5 连接到 2.4G WiFi 网络

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

终端随后将打印 Wi-Fi 连接信息。您需要记下 XIAO ESP32-C5 的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCP 吞吐量测试

:::tip
请确保您的计算机和 XIAO ESP32-C5 连接到同一个 WiFi 网络或路由器。
:::

1. 下载测试（XIAO ESP32-C5 接收数据）

    1.1. **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -s -i 1
      ```

    1.2. **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 2.4G WiFi 上的平均 TCP 下载速度为 15 Mbps

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x2.png" style={{width:800, height:'auto'}}/></div>

2. 测试（XIAO ESP32-C5 发送数据）

    2.1 **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -s -i 1
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 2.4G WiFi 上的平均 TCP 上传速度为 17 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x3.png" style={{width:800, height:'auto'}}/></div>

#### UDP 吞吐量测试

:::tip
请确保您的计算机和 XIAO ESP32-C5 连接到同一个 WiFi 网络或路由器。
:::

1. 下载测试（XIAO ESP32-C5 接收数据）

    1.1. **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 2.4G WiFi 上的平均 UDP 下载速度为 18 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x4.png" style={{width:800, height:'auto'}}/></div>

2. 测试（XIAO ESP32-C5 发送数据）

    2.1 **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -s -u -i 1
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 2.4G WiFi 上的平均 UDP 上传速度为 27 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x5.png" style={{width:800, height:'auto'}}/></div>

:::tip
以上测试结果仅供参考。请以实际情况为准。
:::

### 5GHz 频段吞吐量测试

实际测量 XIAO ESP32-C5 在 5GHz 频段的 Wi-Fi 数据吞吐量。

- 将 XIAO ESP32-C5 连接到 5G WiFi 网络

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

终端随后将打印 Wi-Fi 连接信息。您需要记下 XIAO ESP32-C5 的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCP 吞吐量测试

:::tip
请确保您的计算机和 XIAO ESP32-C5 连接到同一个 WiFi 网络或路由器。
:::

1. 下载测试（XIAO ESP32-C5 接收数据）

    1.1. **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -s -i 1
      ```

    1.2. **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 5G WiFi 上的平均 UDP 下载速度为 27 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x6.png" style={{width:800, height:'auto'}}/></div>

2. 测试（XIAO ESP32-C5 发送数据）

    2.1 **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -s -i 1
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 5G WiFi 上的平均 UDP 上传速度为 29 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x7.png" style={{width:800, height:'auto'}}/></div>

#### UDP 吞吐量测试

:::tip
请确保您的计算机和 XIAO ESP32-C5 连接到同一个 WiFi 网络或路由器。
:::

1. 下载测试（XIAO ESP32-C5 接收数据）

    1.1. **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 5G WiFi 上的平均 TCP 上传速度为 50 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x8.png" style={{width:800, height:'auto'}}/></div>

2. 测试（XIAO ESP32-C5 发送数据）

    2.1 **在 XIAO ESP32-C5 端执行命令**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **在 PC 端执行命令**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) 和 macOS

      ```bash
      iperf -s -u -i 1
      ```

- 测试结果

从测试结果可以看出，XIAO ESP32-C5 在 5G WiFi 上的平均 TCP 上传速度为 50 Mbps。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x9.png" style={{width:800, height:'auto'}}/></div>

## 结论

测试结果表明，XIAO ESP32-C5 在 2.4 GHz 和 5 GHz 双频 Wi-Fi 6 环境中都表现出优异的数据传输性能，非常适合高带宽、低延迟的无线应用。

此外，本教程中的测试方法适用于整个 XIAO ESP 系列开发板。您只需参考本 Wiki 中的指南并在编译时调整目标芯片，即可对其他开发板执行相同的性能评估。我们期待您探索其潜力并与社区分享您的发现！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
