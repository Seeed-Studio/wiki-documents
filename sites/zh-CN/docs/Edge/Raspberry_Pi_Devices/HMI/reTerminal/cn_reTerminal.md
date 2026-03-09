---
description: reTerminal 入门指南
title: reTerminal 入门指南
keywords:
  - Edge
  - reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal
sku: 110070048,102110638,103060001,E2025081502,E2025081503
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/reTerminal/
---
# reTerminal 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

向大家介绍 reTerminal，这是我们 reThings 家族的新成员。这个面向未来的人机界面（HMI）设备可以轻松高效地与 IoT 和云系统协同工作，在边缘侧解锁无限应用场景。

reTerminal 由 Raspberry Pi Compute Module 4 (CM4) 提供算力，搭载四核 Cortex-A72 CPU，主频 1.5GHz，并配备一块 5 英寸 IPS 电容式多点触控屏，分辨率为 1280 x 720。它拥有足够的 RAM（4GB）以胜任多任务处理，同时还具备足够的 eMMC 存储空间（32GB）用于安装操作系统，从而实现快速启动和流畅的整体体验。它通过双频 2.4GHz/5GHz Wi-Fi 和 Bluetooth 5.0 BLE 提供无线连接能力。

reTerminal 由高速扩展接口和丰富的 I/O 组成，具备更强的可扩展性。该设备具备安全特性，例如带有安全硬件密钥存储的加密协处理器。它还内置了加速度计、光线传感器和 RTC（实时时钟）等模块。reTerminal 配备千兆以太网接口以实现更快的网络连接，并拥有双 USB 2.0 Type-A 接口。reTerminal 上的 40 针排针为其打开了广泛的 IoT 应用空间。


reTerminal 出厂即预装 Raspberry Pi OS。你只需接上电源，就可以开始构建你的创客项目、IoT 和家庭自动化项目，甚至是离网 DIY 实验。

| 发布日期 | 预装操作系统 | 预装 STM32 固件 | 板卡版本 | 其他信息 |
|---|---|---|---|---|
| 06/15/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | 初始版本 |
| 08/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 09/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | 将 IO 扩展芯片从 MCP23008-E 更换为 PCA9554，<br />将加密 Microchip 从 ATECC608A-SSHDA-B 更换为 ATECC608A-TNGTLSS-G [更多信息](#../reTerminal-FAQ#q13-如何检查加密芯片是-atecc608a-sshda-b-还是-atecc608a-tngtlss-g) |
| 11/02/2021 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 集成式模块化设计，具备高稳定性和高可扩展性
- 由 Raspberry Pi Computer Module 4 提供算力，配备 4GB RAM 和 32GB eMMC
- 5 英寸 IPS 电容式多点触控屏，分辨率 1280 x 720，293 PPI
- 通过双频 2.4GHz/5GHz Wi-Fi 和 Bluetooth 5.0 BLE 提供无线连接
- 高速扩展接口和丰富 I/O，带来更强扩展能力
- 具备安全硬件密钥存储的加密协处理器
- 内置加速度计、光线传感器和 RTC 等模块
- 千兆以太网接口和双 USB 2.0 Type-A 接口
- 面向 IoT 应用的 40 针排针

## 规格参数

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>规格</th>
      <th>详细信息</th>
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
      <td>64 位 SoC @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>内存</td>
      <td>容量</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>技术</td>
      <td>LPDDR4 带片上 ECC</td>
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
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>显示</td>
      <td>LCD</td>
      <td>5 英寸 720x1280 LCD</td>
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
      <td>1 x 2 通道 MIPI CSI 摄像头接口</td>
    </tr>
    <tr>
      <td rowSpan={3}>多媒体</td>
      <td>H.265 (4Kp60 解码)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60 解码，1080p30 编码)</td>
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
      <td>低备用电流；在 VDD = 3.0 V 和温度 = 25 ℃ 时典型值为 0.25μA</td>
    </tr>
    <tr>
      <td rowSpan={2}>加速度计</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16 位，±2g/±4g/±8g/±16g 动态可选满量程</td>
    </tr>
    <tr>
      <td rowSpan={2}>加密</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>安全硬件密钥存储，非对称签名、验证、密钥协商</td>
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
      <td rowSpan={8}>GPIO</td>
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
      <td>最多 3× GPCLK 输出</td>
    </tr>
    <tr>
      <td rowSpan={4}>垂直扩展<br />接口</td>
      <td>1 × PCIe 1 通道主机，Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0 端口（高速）</td>
    </tr>
    <tr>
      <td>26 x GPIO</td>
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
      <td>3A（最小值）</td>
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

## 硬件总览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_1.png" alt="pir" width="1000" height="auto"/></p>

## 方框图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_2.png" alt="pir" width="1000" height="auto"/></p>

## 引脚图

**注意：** 请确保保持 reTerminal 与下图所示方向一致。此时 LCD 朝向右侧，背面朝向左侧。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
请务必仔细注意上图中 reTerminal 的放置方向。LCD 和板载按键位于右侧，而 reTerminal 的背面位于左侧。同时整个设备是倒置放置的。
:::

## reTerminal 快速上手

如果你想用最快、最简单的方式开始使用 reTerminal，可以按照下面的指南进行操作。

### 所需硬件

在开始使用 reTerminal 之前，你需要准备以下硬件

- reTerminal
- 以太网线或 Wi-Fi 连接
- 电源适配器（5V/3A）
- USB Type-C 线缆

### 软件设置

#### 登录 Raspberry Pi OS

reTerminal 出厂时已预装 Raspberry Pi OS。因此我们可以直接打开 reTerminal 并立即登录 Raspberry Pi OS！

- **步骤 1.** 将 USB Type-C 线的一端连接到 reTerminal，另一端连接到电源适配器（5V/4A）

- **步骤 2.** Raspberry Pi OS 启动后，对 **Warning** 窗口按 **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 在 **Welcome to Raspberry Pi** 窗口中，按 **Next** 开始初始设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 4.** 选择您的**国家、语言、时区**，然后按 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 5.** 要更改密码，首先点击 **Raspberry Pi** 图标，导航到 `Universal Access > Onboard` 打开屏幕键盘

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 6.** 输入您想要的密码并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** 如果你想保持默认密码为 **raspberry**，可以将此处留空并点击 **Next**

- **步骤 7.** 对下面的内容点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 8.** 如果你想连接到 WiFi 网络，可以选择一个网络，连接后按 **Next**。但是，如果你想稍后再设置，可以按 **Skip**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 9.** **这一步非常重要。** 你需要确保按下 **Skip** 来跳过软件更新。但是，如果你想更新软件，可以参考 [this wiki](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **步骤 10.** 最后按下 **Done** 完成设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** 左上角的按钮可以在通过软件关机后用于重新开启 reTerminal

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**提示：** 如果你想在更大的屏幕上体验 Raspberry Pi OS，可以将显示器连接到 reTerminal 的 micro-HDMI 接口，并将键盘和鼠标连接到 reTerminal 的 USB 接口。

## reTerminal 入门指南（扩展）

如果你想自行安装 Raspberry Pi OS、安装其他操作系统（例如 64-bit Ubuntu）、通过 WiFi 上的 SSH、以太网上的 SSH 或 USB 转串口适配器登录 reTerminal，可以按照下面的指南进行操作！

### 所需硬件

你需要准备以下硬件

- reTerminal
- 电脑（Windows/Mac/Linux）
- 8GB（或更大）micro-SD 卡（可选）
- Micro-SD 读卡器（可选）
- USB 转串口转换器（可选）
- 以太网线（可选）
- Wi-Fi 连接（可选）
- 电源适配器（5V/3A）
- USB Type-C 线缆

### <span id="jump2">将 Raspberry Pi OS/ 64-bit Ubuntu OS 或其他 OS 烧录到 eMMC</span>

我们可以将 **Raspberry Pi OS/ 64-bit Ubuntu OS 或其他 OS** 烧录到 reTerminal 上 CM4 的 **eMMC 存储** 中。一旦安装好必要的驱动，只需将 reTerminal 的 USB Type-C 接口连接到你的电脑，它就会显示为一个外部驱动器。首先取下 reTerminal 的后壳。

> **注意：** Seeed 打包的最新系统镜像包含了合适的驱动程序：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)


- **步骤 1.** 取下 4 个橡胶盖，并拧下下面的 4 颗螺丝打开 reTerminal 后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **步骤 2.** 拆下 2 颗螺丝以卸下散热片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 按照下图将 **boot mode switch** 向下拨动

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

现在我们继续进行软件设置。根据你想要的操作系统，按照以下步骤操作

##### 适用于 Windows

- **步骤 1.** 通过点击 **[this link](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** 下载 **rpiboot setup installer**，以安装必要的驱动和启动工具

- **步骤 2.** 通过 USB Type-C 线缆将 reTerminal 连接到电脑

Windows 现在会发现该硬件并安装必要的驱动

- **步骤 3.** 搜索之前安装的 **rpiboot** 工具并打开它

- **步骤 4.** 打开 **file explorer**，你会看到 Compute Module 4 的 eMMC 显示为一个 **USB mass storage device**

- **步骤 5.** 访问 **[this link](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 6.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 在键盘上按 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以 **set a hostname, enable SSH, set a password, configure wifi, set locale settings** 等

- **步骤 8.** 点击 **CHOOSE OS** 并选择你偏好的 OS

:::note
如果你正在尝试安装 Raspbian OS，我们已经进行了测试，发现 **Bullseye** 的 *32-bit 和 64-bit* 版本在 reTerminal 上都能很好地运行，不会遇到任何[**黑屏问题**](https://wiki.seeedstudio.com/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。此外，我们也测试了新的 **Bookworm** *64-bit* 版本，它在 reTerminal 上运行同样流畅。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择其他 OS，例如 **64-bit Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 10.** 最后点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

- **步骤 11.** 将 **Boot Mode switch** 拨回原来的位置，并重新装回 reTerminal 外壳

现在你可以跳转到 **[here](#登录到-raspberry-pi-os-ubuntu-os-或其他-os-使用-ssh-通过-wi-fi-以太网)** 部分

##### 适用于 MAC

:::caution
**在进行以下步骤之前，你需要先安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 来检查是否已经正确配置 homebrew 环境，你应该能看到已安装的 homebrew 环境的版本信息。
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

- **步骤 4.** 使用 make 进行构建

```sh
make
```

- **步骤 5.** 运行二进制文件

```sh
sudo ./rpiboot
```

- **步骤 6.** 通过 USB Type-C 线缆将 reTerminal 连接到你的 Mac 电脑

- **步骤 7.** 访问 [this link](https://www.raspberrypi.org/software/) 下载并安装 **Raspberry Pi Imager** 应用

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 在键盘上按 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以 **set a hostname, enable SSH, set a password, configure wifi, set locale settings** 等

- **步骤 10.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择 OS，例如 **64-bit Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 12.** 最后点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

- **步骤 13.** 将 **Boot Mode switch** 拨回原来的位置，并重新装回 reTerminal 外壳

现在你可以跳转到 **[here](#登录到-raspberry-pi-os-ubuntu-os-或其他-os-使用-ssh-通过-wi-fi-以太网)** 部分

##### 适用于 Linux

我们将使用 Git 获取 **rpiboot** 源代码，因此请确保已安装 Git

- **步骤 1.** 打开一个 **Terminal** 窗口并输入以下命令来更新 **packages list**

```sh
sudo apt-get update
```

- **步骤 2.** 通过以下命令安装 **Git**

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **步骤 3.** 如果日期设置不正确，Git 可能会报错。输入以下命令来修正

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 表示月份，**DD** 表示日期，**hh** 和 **mm** 分别表示小时和分钟。

- **步骤 4.** 克隆 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 5.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 6.** 运行 usbboot 工具，它将等待连接

```sh
sudo ./rpiboot
```

- **步骤 7.** 通过 USB Type-C 线将 reTerminal 连接到电脑

- **步骤 8.** 访问 [this link](https://www.raspberrypi.org/software/) 下载 **Raspberry Pi Imager** 软件

- **步骤 9.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 10.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 Wi-Fi、设置区域设置**等

- **步骤 11.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择诸如 **64-bit Ubuntu** 等操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 12.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 13.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

- **步骤 14.** 将 **Boot Mode switch** 拨回原来的位置，并组装好 reTerminal 外壳

### 通过 Wi-Fi/ 以太网使用 SSH 登录 Raspberry Pi OS/ Ubuntu OS 或其他操作系统

如果你想通过 **SSH over Wi-Fi/ Ethernet** 登录 Raspberry Pi OS，可以按照以下步骤操作。首先在 reTerminal 上设置 Wi-Fi/以太网，然后在 Windows/Mac/Linux 上通过 SSH 连接。

**注意：** 如果你已经使用 Raspberry Pi Imager 配置了 WiFi 并启用了 SSH，可以跳过步骤 1 - 4

- **步骤 1.** 如果你有 **Wi-Fi 连接**，点击 Raspberry Pi OS 桌面右上角的 **Wi-Fi icon**，选择你的 Wi-Fi 网络，并使用屏幕上的虚拟键盘输入密码

**注意：** 对于其他操作系统，Wi-Fi 设置的位置可能不同

- **步骤 2.** 如果你没有 **Wi-Fi 连接**，可以将一根以太网线从路由器连接到 reTerminal 的以太网端口

**注意：** 请确保 reTerminal 和你的电脑连接到同一网络

- **步骤 3.** 触摸左上角的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`，并点击 **Interfaces** 选项卡

- **步骤 4.** 选择 **Enable**（位于 **SSH** 旁边）并点击 **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

现在我们来配置电脑上的软件。请根据你的操作系统进行操作

##### 适用于 Windows

- **步骤 1.** 打开 **Command Prompt** 并输入以下内容

```sh
ssh pi@raspberrypi.local
```

- **步骤 2.** 在提示时输入 **yes**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **步骤 3.** 按如下方式输入密码

```sh
raspberry
```

- **步骤 4.** 如果你已经成功登录到 Raspberry Pi OS，你将看到如下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### 适用于 Mac/Linux

- **步骤 1.** 在电脑上打开 **Terminal** 并输入以下内容

```sh
ssh pi@raspberrypi.local
```

- **步骤 2.** 对于以下信息输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 3.** 当它要求输入密码时，输入以下内容

```sh
raspberry
```

- **步骤 4.** 如果你已经成功登录到 Raspberry Pi OS，你将看到如下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">在刷入新的 Raspberry Pi OS/ Ubuntu OS 或其他操作系统后安装 reTerminal 驱动</span>

reTerminal 出厂时已预装必要的驱动程序，因此你无需额外安装驱动程序。但是，如果你自己刷入新的操作系统，则需要单独安装必要的驱动。需要驱动的硬件包括 **5 英寸 LCD、触摸面板、加速度计、光线传感器、用户 LED、用户按键、RTC、蜂鸣器、加密协处理器**。

- **步骤 1.** 克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **步骤 2.** 进入该仓库

```sh
cd seeed-linux-dtoverlays
```

:::note
对于 **32bit OS**，在执行 `sudo ./scripts/reTerminal.sh` 之前，你需要添加以下步骤。完成安装后，记得**重启** reTerminal 以使更改生效。
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **步骤 3.** 输入以下内容以安装驱动

```sh
sudo ./scripts/reTerminal.sh
```

:::note

如果你不想同时升级内核，请输入以下内容：

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

如果你已经成功安装驱动，将会看到如下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>


- **步骤 4.** 重启 reTerminal

```sh
sudo reboot
```

### 将带有 seeed 驱动的 Raspberry Pi OS 刷写到 eMMC

- **步骤 1.** 与普通镜像烧录步骤一样，你需要先选择设备型号：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **步骤 2.** 在选择操作系统时，你需要下载所需的系统，在本地文件夹中解压，然后进行选择。

- **通过访问以下链接下载 Raspberry Pi OS**

| 版本                     | 描述      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

选择你下载的操作系统，它的结尾应为 **.img**。
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

如果你安装的是最新 bookworm 版本的镜像，请不要通过点击 advance option 按钮进行配置。不要进入此界面进行任何初始配置。
否则，可能会出现意外的驱动错误情况！！！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

如果你不小心进行了高级配置并出现屏幕翻转错误，你需要[重新安装驱动](#jump1)来解决问题。

:::

- **步骤 3.** 其他操作请参考[前面的步骤](#jump2)。
镜像安装完成后，你无需再安装驱动即可使用。（我们提供的镜像已包含驱动文件）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal 拆解指南

请查看下面的视频，了解如何拆解 reTerminal：

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 常见问题

关于常见问题，请[点击这里](https://wiki.seeedstudio.com/cn/reTerminal-FAQ)访问 reTerminal 使用常见问题解答页面

## 资源

- **[STP]** [reTerminal 3D 模型](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 数据手册](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 官方文档](https://www.raspberrypi.org/documentation/)

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
