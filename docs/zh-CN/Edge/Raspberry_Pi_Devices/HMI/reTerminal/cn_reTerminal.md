---
description: reTerminal 入门指南
title: reTerminal 入门指南
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal
last_update:
  date: 2023/1/31
  author: jianjing Huang
---
# reTerminal 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

介绍 reTerminal，这是我们 reThings 家族的新成员。这个面向未来的人机界面（HMI）设备可以轻松高效地与物联网和云系统协作，在边缘解锁无限场景。

reTerminal 由 Raspberry Pi Compute Module 4 (CM4) 提供支持，配备四核 Cortex-A72 CPU，运行频率为 1.5GHz，并拥有一块 5 英寸 IPS 电容式多点触摸屏，分辨率为 1280 x 720。它拥有充足的 RAM（4GB）以支持多任务处理，同时拥有充足的 eMMC 存储空间（32GB）以安装操作系统，从而实现快速启动和流畅的整体体验。它支持双频 2.4GHz/5GHz Wi-Fi 和 Bluetooth 5.0 BLE 无线连接。

reTerminal 包含高速扩展接口和丰富的 I/O，提供更多扩展性。该设备具有安全功能，例如带有安全硬件密钥存储的加密协处理器。它还内置了加速度计、光传感器和 RTC（实时时钟）等模块。reTerminal 配备千兆以太网端口以实现更快的网络连接，同时还拥有双 USB 2.0 Type-A 端口。reTerminal 的 40 针引脚头使其能够应用于广泛的物联网场景。

reTerminal 出厂时预装了 Raspberry Pi OS。您只需连接电源，即可立即开始构建您的物联网、人机界面和边缘 AI 应用！

| 发布日期 | 预装操作系统 | 预装 STM32 固件 | 板版本 | 附加信息 |
|---|---|---|---|---|
| 2021/06/15 | 2021-06-02-Raspbian(修改版)-32位 | V1.0 | v1.3 | 初始版本 |
| 2021/08/03 | 2021-06-02-Raspbian(修改版)-32位 | V1.1 | v1.4 |  |
| 2021/09/03 | 2021-06-02-Raspbian(修改版)-32位 | V1.6 | v1.6 | 更换 IO 扩展芯片从 MCP23008-E 到 PCA9554，<br />更换加密芯片从 ATECC608A-SSHDA-B 到 ATECC608A-TNGTLSS-G [更多信息](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 2021/11/02 | 2021-09-14-Raspbian(修改版)-32位 | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 集成模块化设计，具有高稳定性和扩展性
- 由 Raspberry Pi Compute Module 4 提供支持，配备 4GB RAM 和 32GB eMMC
- 5 英寸 IPS 电容式多点触摸屏，分辨率为 1280 x 720，293 PPI
- 支持双频 2.4GHz/5GHz Wi-Fi 和 Bluetooth 5.0 BLE 无线连接
- 高速扩展接口和丰富的 I/O，提供更多扩展性
- 带有安全硬件密钥存储的加密协处理器
- 内置模块，例如加速度计、光传感器和 RTC
- 千兆以太网端口和双 USB 2.0 Type-A 端口
- 40 针引脚头，适用于物联网应用

## 规格

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>规格</th>
      <th>详情</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>平台</td>
      <td>处理器</td>
      <td>Broadcom BCM2711 四核 Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>频率</td>
      <td>64位 SoC @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>内存</td>
      <td>容量</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>技术</td>
      <td>LPDDR4，带片上 ECC</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>容量</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>无线</td>
      <td>Wi-Fi</td>
      <td>2.4GHz 和 5.0GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>蓝牙</td>
      <td>蓝牙 5.0，BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>显示</td>
      <td>LCD</td>
      <td>5英寸 720x1280 LCD</td>
    </tr>
    <tr>
      <td>触控面板</td>
      <td>电容式触控面板（支持多点触控）</td>
    </tr>
    <tr>
      <td rowSpan={5}>视频</td>
      <td>HDMI</td>
      <td>1 x Micro HDMI 输出（支持最高 4Kp60）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x 2通道 MIPI CSI 摄像头接口</td>
    </tr>
    <tr>
      <td rowSpan={3}>多媒体</td>
      <td>H.265 (4Kp60 解码)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60 解码, 1080p30 编码)</td>
    </tr>
    <tr>
      <td>OpenGL ES 3.0 图形</td>
    </tr>
    <tr>
      <td rowSpan={10}>内置模块</td>
      <td rowSpan={2}>实时时钟</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>低备份电流；典型值 0.25μA，VDD = 3.0 V，温度 = 25 ℃</td>
    </tr>
    <tr>
      <td rowSpan={2}>加速度计</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16位，±2g/±4g/±8g/±16g 动态可选全量程</td>
    </tr>
    <tr>
      <td rowSpan={2}>加密</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>安全的硬件密钥存储，非对称签名、验证、密钥协商</td>
    </tr>
    <tr>
      <td rowSpan={2}>光传感器</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>数字光传感器</td>
    </tr>
    <tr>
      <td>内部 IO<br />扩展</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>蜂鸣器</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>外部 I/O</td>
      <td rowSpan={8}>GPIOs</td>
      <td>最多 5 × UART</td>
    </tr>
    <tr>
      <td>最多 5 × I2C</td>
    </tr>
    <tr>
      <td>最多 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × SDIO 接口</td>
    </tr>
    <tr>
      <td>1 × DPI（并行 RGB 显示）</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × PWM 通道</td>
    </tr>
    <tr>
      <td>最多 3 × GPCLK 输出</td>
    </tr>
    <tr>
      <td rowSpan={4}>垂直扩展<br />接口</td>
      <td>1 × PCIe 1通道主机，Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0 端口（高速）</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>电压</td>
      <td>5V DC</td>
    </tr>
    <tr>
      <td>电流</td>
      <td>3A（最低）</td>
    </tr>
    <tr>
      <td>温度</td>
      <td>工作温度</td>
      <td>0 - 70°C（LCD 屏幕：0 - 60°C）</td>
    </tr>
    <tr>
      <td rowSpan={2}>机械</td>
      <td>尺寸</td>
      <td>140mm x 95mm x 21mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>285g</td>
    </tr>
  </tbody>
</table>

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## 模块图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/reTerminal_block_diagram-v1.3.png" alt="pir" width="1000" height="auto"/></p>

## 引脚图

**注意：** 请确保按照下图所示的方向保持 reTerminal 的正确方向。此处 LCD 面向右侧，背面面向左侧。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
请仔细注意上图中 reTerminal 的方向。LCD 和板载按钮位于右侧，而 reTerminal 的背面位于左侧。此外，整个设备是上下颠倒的。
:::

## 快速开始使用 reTerminal

如果您想以最快速、最简单的方式开始使用 reTerminal，可以按照以下指南操作。

### 所需硬件

在开始使用 reTerminal 之前，您需要准备以下硬件：

- reTerminal
- 以太网线或 Wi-Fi 连接
- 电源适配器（5V/3A）
- USB Type-C 数据线

### 软件设置

#### 登录 Raspberry Pi OS

reTerminal 随附预装的 Raspberry Pi OS，因此我们可以直接打开 reTerminal 并登录 Raspberry Pi OS！

- **步骤 1.** 将 USB Type-C 数据线的一端连接到 reTerminal，另一端连接到电源适配器（5V/4A）

- **步骤 2.** Raspberry Pi OS 启动后，在 **警告** 窗口中按 **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 在 **欢迎使用 Raspberry Pi** 窗口中，按 **Next** 开始初始设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 4.** 选择您的 **国家、语言、时区** 并按 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 5.** 要更改密码，请首先点击 **Raspberry Pi** 图标，导航到 `Universal Access > Onboard` 打开屏幕键盘

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 6.** 输入您想要的密码并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** 如果您想保留默认密码 **raspberry**，可以将此字段留空并点击 **Next**

- **步骤 7.** 点击 **Next** 继续

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 8.** 如果您想连接到 WiFi 网络，可以选择一个网络，连接后按 **Next**。如果您想稍后设置，可以按 **Skip**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 9.** **此步骤非常重要。** 您应该确保按 **Skip** 跳过软件更新。如果您想更新软件，可以参考 [此 Wiki](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 10.** 最后按 **Done** 完成设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** 左上角的按钮可以在通过软件关闭 reTerminal 后用于重新启动设备

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**提示：** 如果您想在更大的屏幕上体验 Raspberry Pi OS，可以将显示器连接到 reTerminal 的 micro-HDMI 接口，并将键盘和鼠标连接到 reTerminal 的 USB 接口。

## 开始使用 reTerminal（扩展版）

如果您希望自行安装 Raspberry Pi OS、安装其他操作系统（如 64 位 Ubuntu）、通过 WiFi 使用 SSH 登录 reTerminal、通过以太网使用 SSH 或使用 USB 转串口适配器登录，您可以按照以下指南进行操作！

### 所需硬件

您需要准备以下硬件：

- reTerminal
- 电脑（Windows/Mac/Linux）
- 8GB（或更大）micro-SD 卡（可选）
- Micro-SD 卡读卡器（可选）
- USB 转串口转换器（可选）
- 以太网线（可选）
- Wi-Fi 连接（可选）
- 电源适配器（5V/3A）
- USB Type-C 数据线

### <span id="jump2">将 Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统刷入 eMMC</span>

我们可以将 **Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统** 刷入 reTerminal 上 CM4 的 **eMMC 存储**。安装必要的驱动程序后，只需将 reTerminal 的 USB Type-C 接口连接到您的电脑，它将显示为外部驱动器。首先移除 reTerminal 的后壳。

> **注意：** Seeed 提供的最新系统镜像已包含适当的驱动程序：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **步骤 1.** 移除 4 个橡胶盖，并拧下下面的 4 个螺丝以打开 reTerminal 的后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **步骤 2.** 拧下 2 个螺丝以拆卸散热片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 根据下图将 **启动模式开关** 翻转到下方

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

现在我们开始进行软件设置。根据您选择的操作系统，按照以下步骤操作。

##### 对于 Windows

- **步骤 1.** 点击 **[此链接](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** 下载 **rpiboot 安装程序**，以安装必要的驱动程序和启动工具

- **步骤 2.** 使用 USB Type-C 数据线将 reTerminal 连接到电脑

Windows 将自动检测硬件并安装必要的驱动程序

- **步骤 3.** 搜索我们之前安装的 **rpiboot** 工具并打开它

- **步骤 4.** 打开 **文件资源管理器**，您将看到 CM4 的 eMMC 显示为 **USB 大容量存储设备**

- **步骤 5.** 访问 **[此链接](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 6.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 按键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置** 等。

- **步骤 8.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

:::note
如果您尝试安装 Raspbian OS，我们已经测试过，发现 **Bullseye** 的 *32 位和 64 位版本* 在 reTerminal 上运行良好，没有遇到任何 [**黑屏问题**](https://wiki.seeedstudio.com/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。此外，我们还测试了新的 **Bookworm** *64 位版本*，它在 reTerminal 上运行顺畅。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过导航到 **Other general purpose OS** 选择其他操作系统，例如 **64 位 Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 10.** 最后点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 11.** 将 **启动模式开关** 翻转回原始位置，并重新组装 reTerminal 的外壳

现在您可以跳转到 **[这里](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### 对于 MAC

:::caution
**您需要先安装 [homebrew](https://brew.sh/)，然后才能进行以下步骤。**
请打开终端并输入 ```brew -V``` 检查是否已正确设置 homebrew 环境，您应该看到已安装的 homebrew 环境版本。
:::

- **步骤 1.** 克隆 **usbboot** 仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 2.** 安装 **libusb**

```sh
brew install libusb
```

- **步骤 3.** 安装 **pkg-config**

```sh
brew install pkg-config
```

- **步骤 4.** 使用 make 构建

```sh
make
```

- **步骤 5.** 运行二进制文件

```sh
sudo ./rpiboot
```

- **步骤 6.** 使用 USB Type-C 数据线将 reTerminal 连接到您的 Mac 电脑

- **步骤 7.** 访问 [此链接](https://www.raspberrypi.org/software/) 下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 按键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以**设置主机名、启用SSH、设置密码、配置WiFi、设置区域设置**等。

- **步骤10.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择诸如 **64-bit Ubuntu** 的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤11.** 点击 **CHOOSE STORAGE** 并选择已连接的eMMC驱动器

- **步骤12.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

- **步骤13.** 将 **Boot Mode开关** 翻回到原始位置，并组装reTerminal外壳。

现在您可以跳转到 **[这里](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### 对于Linux

我们将使用Git获取 **rpiboot** 源代码，因此请确保已安装Git。

- **步骤1.** 打开一个 **终端** 窗口并输入以下命令以更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤2.** 使用以下命令安装 **Git**

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **步骤3.** 如果日期未正确设置，Git可能会产生错误。输入以下命令以纠正日期

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤4.** 克隆 **usbboot** 工具库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤5.** 构建并安装usbboot工具

```sh
make
```

- **步骤6.** 运行usbboot工具，它将等待连接

```sh
sudo ./rpiboot
```

- **步骤7.** 使用USB Type-C线将reTerminal连接到PC

- **步骤8.** 通过访问[此链接](https://www.raspberrypi.org/software/)下载 **Raspberry Pi Imager** 软件

- **步骤9.** 打开Raspberry Pi Imager软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤10.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以**设置主机名、启用SSH、设置密码、配置WiFi、设置区域设置**等。

- **步骤11.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择诸如 **64-bit Ubuntu** 的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤12.** 点击 **CHOOSE STORAGE** 并选择已连接的eMMC驱动器

- **步骤13.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

- **步骤14.** 将 **Boot Mode开关** 翻回到原始位置，并组装reTerminal外壳。

### 使用Wi-Fi/以太网通过SSH登录到Raspberry Pi OS/Ubuntu OS或其他操作系统

如果您想通过 **Wi-Fi/以太网** 使用SSH登录到Raspberry Pi OS，可以按照以下步骤操作。首先在reTerminal上设置Wi-Fi/以太网，然后使用Windows/Mac/Linux进行SSH连接。

**注意：** 如果您已使用Raspberry Pi Imager配置了WiFi并启用了SSH，则可以跳过步骤1 - 4。

- **步骤1.** 如果您有 **Wi-Fi连接**，点击Raspberry Pi OS桌面右上角的 **Wi-Fi图标**，选择您的Wi-Fi网络并使用屏幕上的虚拟键盘输入密码。

**注意：** 对于其他操作系统，Wi-Fi设置的位置可能不同。

- **步骤2.** 如果您没有 **Wi-Fi连接**，可以将以太网线从路由器连接到reTerminal的以太网端口。

**注意：** 请确保reTerminal和您的计算机连接到同一网络。

- **步骤3.** 点击左上角的Raspberry Pi图标，导航到 `Preferences > Raspberry Pi Configuration`，然后点击 **Interfaces** 标签。

- **步骤4.** 选择 **Enable**（位于 **SSH** 旁边），然后点击 **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

现在让我们在计算机上配置软件。请根据您的操作系统进行操作。

##### 对于Windows

- **步骤1.** 打开 **命令提示符** 并输入以下命令

```sh
ssh pi@raspberrypi.local
```

- **步骤2.** 对提示输入 **yes**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **步骤3.** 输入以下密码

```sh
raspberry
```

- **步骤4.** 如果您成功登录到Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### 对于Mac/Linux

- **步骤1.** 在计算机上打开 **终端** 并输入以下命令

```sh
ssh pi@raspberrypi.local
```

- **步骤2.** 对以下消息输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤3.** 当提示输入密码时，输入以下内容

```sh
raspberry
```

- **步骤 4.** 如果您已成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">在刷新新的 Raspberry Pi OS/Ubuntu OS 或其他操作系统后安装 reTerminal 驱动程序</span>

reTerminal 自带必要的驱动程序，开箱即用，因此您无需安装任何额外的驱动程序。然而，如果您自行刷新了新的操作系统，则需要单独安装必要的驱动程序。需要驱动程序的硬件包括 **5 英寸 LCD、触摸面板、加速度计、光传感器、用户 LED、用户按钮、RTC、蜂鸣器、加密协处理器**。

- **步骤 1.** 克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **步骤 2.** 进入仓库

```sh
cd seeed-linux-dtoverlays
```

:::note
对于 **32 位操作系统**，在执行 `sudo ./scripts/reTerminal.sh` 之前，您需要添加以下步骤。完成安装后，请记得 **重启** reTerminal 以使更改生效。
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **步骤 3.** 输入以下命令安装驱动程序

```sh
sudo ./scripts/reTerminal.sh
```

:::note

如果您不想同时升级内核，请输入以下命令：

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

如果您成功安装了驱动程序，将看到以下输出：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 重启 reTerminal

```sh
sudo reboot
```

### 将带有 Seeed 驱动程序的 Raspberry Pi OS 刷写到 eMMC

- **步骤 1.** 与普通镜像烧录步骤一样，您需要首先选择设备型号：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **步骤 2.** 在选择操作系统时，您需要下载所需的系统，将其解压到本地文件夹中，然后选择它。

- **通过访问以下链接下载 Raspberry Pi OS**

| 版本                     | 描述      | 标签                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64 位 Debian12(bookworm) Linux 版本 6.6.20 | 最新版 |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32 位 Debian12(bookworm) Linux 版本 6.6.20           | 最新版 |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64 位 Debian11(Bullseye) Linux 版本 5.15.32-v7+  | 发布版 |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32 位 Debian11(Bullseye) Linux 版本 5.15.32-v7+  | 发布版 |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

选择您下载的操作系统，它的文件名应以 **.img** 结尾。
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

如果您安装了最新的 bookworm 版本镜像，请不要通过点击高级选项按钮进行配置。不要进入此界面进行任何初始配置。
否则，可能会发生意外的驱动程序错误情况！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

如果您不小心进行了高级配置并出现屏幕翻转错误，您需要 [重新安装驱动程序](#jump1) 来解决问题。

:::

- **步骤 3.** 有关其他操作，请参考 [前面的步骤](#jump2)。
镜像安装完成后，您无需安装驱动程序即可使用。（我们提供的镜像已包含驱动程序文件）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal 拆解指南

请查看以下视频，了解如何拆解 reTerminal：

<p align="center"><iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>></p>

## 常见问题解答

有关常见问题解答，请[点击这里](https://wiki.seeedstudio.com/cn/reTerminal-FAQ)访问 reTerminal 使用的常见问题解答 Wiki 页面。

## 资源

- **[PDF]** [reTerminal 原理图 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [reTerminal 原理图 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [reTerminal 原理图 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 原理图 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [reTerminal 3D 模型](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 数据手册](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[网页]** [Raspberry Pi 官方文档](https://www.raspberrypi.org/documentation/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>