---
description: reRouter 承载板
title: reRouter 承载板
keywords:
- 设备
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4
last_update:
  date: 2022/1/10
  author: jianjing Huang
---

# Raspberry Pi Compute Module 4 双千兆以太网承载板入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/thumb.png" alt="pir" width="600" height="auto"/></p>

由 Raspberry Pi Compute Module 4 提供支持的双千兆承载板配备了双千兆以太网端口和双 USB 3.0 端口，非常适合软路由应用，同时将硬件保持在最小化。

它具有多种 I/O 外设，例如 MIPI CSI、MIPI DSI、micro-HDMI 用于连接显示器/摄像头，一个标准的 9 针 USB 3.0 接口用于更多 USB 扩展，一个 micro-SD 卡插槽和一个 FPC 接口，同时保持紧凑的外形尺寸！该板非常适合 HTPC 制作者、Linux 开发者、软路由爱好者以及大多数普通的 Raspberry Pi 用户。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 紧凑尺寸（75x64x21mm），配备丰富的 I/O 外设
- 双千兆以太网接口，适用于软路由应用
- 使用 MIPI CSI、MIPI DSI 和 micro-HDMI 接口连接摄像头/显示器
- 板载双 USB 3.0，另有一个 USB 3.0 9 针接口用于更多外部端口
- Micro-SD 卡插槽，用于非 eMMC 版本的 CM4 加载系统镜像
- 通过 FPC 接口（I2C、SPI）实现更多扩展
- 支持外部风扇，带风扇电源接口
- 使用 USB Type-C 供电

## 规格

| 规格 | 详情 |
|-|-|
| 网络 | 双千兆以太网接口 |
| USB 3.0 到 GbE<br />(千兆以太网桥) | Microchip 的 LAN7800 |
| USB | 2 个 USB 3.0 端口<br />1 个 USB 3.0 9 针接口 |
| 存储 | Micro-SD 卡插槽（用于非 eMMC CM4 版本加载系统镜像） |
| 摄像头 | 1 个 MIPI CSI 接口 |
| 显示 | 1 个 MIPI DSI 接口<br />1 个 Micro HDMI 接口 |
| FPC | I2C 和 SPI 接口 |
| 外部风扇 | 风扇电源接口 |
| 电源 | 通过 USB Type-C 接口提供 5V/3A 电源 |
| 尺寸 | 75x64x21mm |
| 重量 | 43g |

:::caution
由于该产品集成度较高，必须搭配 [CM4 散热片](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) 使用。否则可能导致 USB 或以太网不稳定。
:::

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/hw-overview.png" alt="pir" width="900" height="auto"/></p>

## 硬件介绍

### Raspberry Pi Compute Module 4 的 200 针接口

此承载板具有一个 **200 针接口**，分为两排，每排 100 针，可用于连接 [Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-CM4001000-p-4720.html)，实现您的项目！

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CM4.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/CM4.png) 查看更高分辨率图片

### 双千兆以太网端口

此承载板配备 **2 个千兆以太网端口 (RJ45)**。一个以太网端口连接到基于 **Broadcom BCM54210PE** 的 CM4 模块的 **千兆以太网 PHY**。另一个以太网端口连接到 **Microchip 的 LAN7800**，这是一个 **USB 3.0 到 GbE（千兆以太网桥）**。这里的 **USB 3.0 接口** 是从 CM4 模块的 **PCIe 接口** 扩展而来。此外，这两个端口均支持高达 1Gbps 的速度。

#### 双千兆以太网端口原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RJ45.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/RJ45.png) 查看更高分辨率图片

#### USB 3.0 到 GbE（千兆以太网桥）原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN7800.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/LAN7800.png) 查看更高分辨率图片

### CSI 摄像头接口

此承载板具有 **MIPI CSI 摄像头接口**，您可以通过 **15 针 CSI 软排线** 连接摄像头。此摄像头接口可用于目标检测和机器学习应用。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CSI.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/CSI.png) 查看更高分辨率图片

### DSI 显示接口

此承载板具有 **MIPI DSI 显示接口**，您可以通过 **15 针 DSI 软排线** 连接显示器。此显示接口可用于与承载板交互。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/DSI.png) 查看更高分辨率图片

### FPC 接口

此承载板上有一个 **8 针 FPC 接口**，间距为 **0.5mm，H2.5**。您可以使用此接口将额外的硬件（如摄像头和显示器）连接到承载板。

#### 规格

- 额定电流：0.5A
- 额定电压：50V
- 耐压：500V
- 接触电阻：20mΩ
- 绝缘电阻：800mΩ
- 工作温度：-20°C ~ +85°C

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_Schematics.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

### 双 USB 3.0 接口和 9 针插针

Compute Module 4 原生仅支持 **USB 2.0 接口**。然而，我们利用 CM4 上现有的 **PCIe 接口**，将其扩展为 **带有 2 个 USB 3.0 接口的 USB 3.0 接口**。这些 USB 接口提供高达 5Gbps 的传输速度。

此外，还提供了一个 **USB 3.0 9 针插针**，您可以通过该插针连接更多的 USB 设备。

您可以先将 [9 针母头转 20 针母头适配器](https://www.amazon.com/SIENOC-Female-Motherboard-Housing-Adapter/dp/B00EOI3VC8/ref=sr_1_4?dchild=1&keywords=9+pin+to+20+pin&qid=1630315040&sr=8-4) 连接到此板上的 9 针插针，然后再将 [20 针公头转 USB3.0 适配器](https://www.amazon.com/Motherboard-Adapter-Header-Convert-Female/dp/B071NZHWHG/ref=sr_1_9?dchild=1&keywords=20-pin+usb3.0&qid=1630315493&sr=8-9) 连接到前一个 20 针母头。我们需要这两个产品，因为目前市场上没有 **9 针转 USB3.0 适配器**，只有 **9 针转 USB2.0 适配器** 可用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/USB-pins.jpg" alt="pir" width="1000" height="auto"/></p>

**注意：** 如果您想通过 **跳线** 将 [5V 风扇](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) 连接到此板上，可以将风扇的 **正极 (+)** 连接到 **VBUS**，将风扇的 **负极 (-)** 连接到 **GND** 引脚。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/fan-connect.jpg" alt="pir" width="1000" height="auto"/></p>

#### USB 3.0 主机的原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/USB3.0.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/USB3.0.png) 查看更高分辨率图片

#### PCIe 转 USB 3.0 的原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png) 查看更高分辨率图片

### Micro HDMI 接口

载板上有一个 micro HDMI 接口，您可以通过 **micro HDMI 转标准 HDMI 线** 将其连接到 HDMI 显示器。它支持高达 4K 分辨率、60fps 的视频输出。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png) 查看更高分辨率图片

### UART IO

载板上有一个 **4 针接口** 用于 **UART 通信**。您可以使用此接口，通过 **USB 转串口适配线** 直接登录到 **Raspberry Pi OS**。它包含以下引脚：**TX, RX, 3V3, GND**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

### 启动模式引脚

此 **3 针接口** 用于将载板设置为 **USB 设备**。当您将 **GND** 和 **BOOT** 引脚短接时，可以通过 **主机 PC** 访问 **eMMC 存储** 或 **micro-SD 卡存储**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

### 重置按钮

此按钮用于 **重置** CM4，相当于 **硬件重启**。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RESET.png" alt="pir" width="650" height="auto"/></p>

### Micro-SD 卡槽

载板配备了一个 **micro-SD 卡槽**。当使用 **无 eMMC 的 CM4 模块** 时，这对于在 micro-SD 卡上 **安装操作系统** 非常有用。建议使用至少 8GB 容量的卡。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro_SD.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/micro_SD.png) 查看更高分辨率图片

### USB Type-C 接口

载板上的 **USB Type-C 接口** 可用于通过 **5V/3A** 为载板供电。此外，它还可以用作 **USB 设备**，您可以将载板连接到 **主机 PC**，载板将作为 **USB 大容量存储设备**。在此情况下，您可以通过 PC 访问载板上的 **板载 eMMC** 和连接的 **micro-SD 卡**。

#### USB Type-C 作为 USB 设备的原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/type-c.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/type-c.png) 查看更高分辨率图片

#### 电源管理的原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/power-manage.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/power-manage.png) 查看更高分辨率图片

### 4 针风扇连接器

您可以将 **4 针 PWM 风扇** 连接到此接口，并通过软件进行控制。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Fan.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/Fan.png) 查看更高分辨率图片

### 电源和工作指示灯

载板上有 3 个 LED。其中一个用于指示载板已通电，亮起 **蓝色**，另外两个 LED 用于指示载板的工作状态，分别亮起 **绿色** 和 **白色**。

#### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LEDs.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/102110497/LEDs.png) 查看更高分辨率的图片

## 入门指南 - 所需硬件

在开始使用 RPi CM4 双千兆以太网载板之前，您需要准备以下硬件：

- RPi CM4 双千兆以太网载板
- 16GB（或更大）micro-SD 卡
- micro-SD 卡读卡器
- 电脑（PC/Mac/Linux）
- 电源适配器（5V/3A）
- USB Type-C 数据线
- USB 转串口转换器、以太网线（可选）

## 入门指南 - 软件设置

### 刷写 Raspberry Pi OS

现在我们需要将 **Raspberry Pi OS** 刷写到 **micro-SD 卡（适用于非 eMMC 版本）** 或 **eMMC 存储（适用于 eMMC 版本）**，以便在 Raspberry Pi Compute Module 4 上运行。

#### 刷写到 micro-SD 卡（CM4 非 eMMC 版本）

如果您使用的是没有 eMMC 的 Compute Module 4，则需要插入 micro-SD 卡并刷写 Raspberry Pi OS。根据您的操作系统，按照以下步骤操作。

- **步骤 1.** 使用连接到电脑的 **micro-SD 卡读卡器** 或笔记本电脑上的 **内置读卡器**，将 micro-SD 卡插入电脑

- **步骤 2.** 通过访问 [此链接](https://www.raspberrypi.org/software/) 下载 **Raspberry Pi Imager** 软件

**注意：** 您可以选择下载适用于 **Windows、Mac 或 Ubuntu** 的版本

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 4.** 点击 **CHOOSE OS** 并选择最新版本的 **Raspberry Pi OS (32-bit)**

- **步骤 5.** 点击 **CHOOSE STORAGE** 并选择连接的 micro-SD 卡

- **步骤 6.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

#### 刷写到 eMMC（CM4 eMMC 版本）

如果您使用的是带有 eMMC 的 Compute Module 4，则可以直接将 Raspberry Pi OS 刷写到 eMMC 存储中。一旦安装了必要的驱动程序，只需将 CM4 的 USB Type-C 接口连接到您的电脑，它将显示为外部驱动器。根据您的操作系统，按照以下步骤操作。

##### Windows 系统

- **步骤 1.** 下载并运行 [此安装程序](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 以安装必要的驱动程序和启动工具

- **步骤 2.** 将跳线连接到 **Boot** 和 **GND** 引脚，如下图所示，以启用编程模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 使用 USB Type-C 数据线将载板连接到电脑

Windows 将自动检测硬件并安装必要的驱动程序

- **步骤 4.** 搜索并打开之前安装的 **rpiboot** 工具

- **步骤 5.** 打开 **文件资源管理器**，您将看到 Compute Module 4 的 eMMC 显示为 **USB 大容量存储设备**

- **步骤 6.** 通过访问 [此链接](https://www.raspberrypi.org/software/) 下载 **Raspberry Pi Imager** 软件

- **步骤 7.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 8.** 点击 **CHOOSE OS** 并选择最新版本的 **Raspberry Pi OS (32-bit)**

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 10.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

##### Mac/Linux 系统

我们将使用 Git 获取 **rpiboot** 源代码，因此请确保已安装 Git。

- **步骤 1.** 打开 **终端** 窗口并输入以下命令以更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤 2.** 使用以下命令安装 **Git**

```sh
sudo apt install git
```

- **步骤 3.** 如果 Git 出现日期未正确设置的错误，请输入以下命令进行修正

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤 4.** 克隆 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 5.** 输入以下命令安装 **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **步骤 6.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 7.** 运行 usbboot 工具，它将等待连接

```sh
sudo ./rpiboot
```

- **步骤 8.** 将跳线连接到 **Boot** 和 **GND** 引脚，如下图所示，以启用编程模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 使用 USB Type-C 数据线将载板连接到电脑

- **步骤 10.** 通过访问 [此链接](https://www.raspberrypi.org/software/) 下载 **Raspberry Pi Imager** 软件

- **步骤 11.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 12.** 点击 **CHOOSE OS** 并选择最新版本的 **Raspberry Pi OS (32-bit)**

- **步骤 13.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 14.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

### 登录到 Raspberry Pi OS

#### 方法 1：通过 Wi-Fi 使用 SSH

如果您想通过 **Wi-Fi 使用 SSH** 登录到 Raspberry Pi OS，可以按照以下步骤操作。请根据您的操作系统选择相应步骤。

##### 对于 Windows

- **步骤 1.** 使用连接到计算机的 **micro-SD 卡读卡器**，或使用笔记本电脑上的 **内置读卡器**，将安装了 Raspberry Pi OS 的 micro-SD 卡插入计算机。

- **步骤 2.** 打开 **记事本**，输入以下内容：

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**注意：** 国家代码（country）应设置为您使用开发板所在国家的 [ISO/IEC alpha2 代码](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)。

- **步骤 3.** 点击 `文件 > 保存`

- **步骤 4.** 导航到 micro-SD 卡的驱动器名称

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/select_USB.png" alt="pir" width="650" height="auto"/></p>

- **步骤 5.** 将文件名设置为 **wpa_supplicant.conf**，将 **保存类型** 选择为 **所有文件**，然后点击 **保存**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/wpa_supplicant.png" alt="pir" width="650" height="auto"/></p>

- **步骤 6.** 打开 **命令提示符**，导航到 micro-SD 卡

```sh
示例: 
C:\Users\user> F:
F:\>
```

- **步骤 7.** 进入 micro-SD 卡后，通过输入以下命令创建一个名为 **SSH** 的空文件：

```sh
echo > ssh
```

**注意：** 这是为了在 Raspberry Pi OS 上启用 SSH。

- **步骤 8.** 从 PC 弹出 micro-SD 卡并将其插入双千兆以太网载板。

- **步骤 9.** 将 USB Type-C 数据线连接到载板上的 Type-C 接口，并将数据线的另一端连接到电源适配器并打开电源。

- **步骤 10.** 通过访问[此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)下载并安装 **Putty**。

**注意：** Putty 是一个 SSH 和 Telnet 客户端，您可以使用它通过 SSH 连接到载板。

- **步骤 11.** 打开 Putty，将 PC 连接到载板。

- **步骤 12.** 在 **Connection Type** 下选择 **SSH**。

- **步骤 13.** 在 **Host Name** 下输入 **raspberrypi.local**，并将 **Port** 保持为 **22**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **步骤 14.** 点击 **Open**。

- **步骤 15.** 在 Putty 窗口中，输入以下登录信息：

```sh
- 用户名: pi
- 密码: raspberry
```

- **步骤 16.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### 对于 Mac/Linux

- **步骤 1.** 使用连接到计算机的 **micro-SD 卡读卡器**，或使用笔记本电脑上的 **内置读卡器**，将安装了 Raspberry Pi OS 的 micro-SD 卡插入计算机。

- **步骤 2.** 打开 **终端**，导航到 micro-SD 卡：

```sh
示例: 
cd /media/user/boot
```

**注意：** 在 **/media/user/boot** 中，将 **user** 替换为您的 PC 用户名。

- **步骤 3.** 进入 micro-SD 卡后，创建一个名为 **wpa_supplicant.conf** 的文件并打开它：

```sh
nano wpa_supplicant.conf
```

- **步骤 4.** 在文件中输入以下内容：

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**注意：** 国家代码（country）应设置为您使用开发板所在国家的 [ISO/IEC alpha2 代码](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)。

- **步骤 5.** 按下键盘上的 **Ctrl + x** 保存文件，然后按 **y** 和 **Enter** 确认更改。

- **步骤 6.** 在 **boot** 驱动器中，输入以下命令创建一个名为 **SSH** 的空文件：

```sh
touch ssh
```

**注意：** 这是为了在 Raspberry Pi OS 上启用 SSH。

- **步骤 7.** 从 PC 弹出 micro-SD 卡并将其插入双千兆以太网载板。

- **步骤 8.** 将 USB Type-C 数据线连接到载板上的 Type-C 接口，并将数据线的另一端连接到电源适配器并打开电源。

- **步骤 9.** 再次在 PC 上打开 **终端**，输入以下命令：

```sh
ssh pi@raspberrypi.local
```

- **步骤 10.** 对于以下消息，输入 **yes**：

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 11.** 当提示输入密码时，输入以下内容：

```sh
raspberry
```

- **步骤 12.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### 方法 2：通过以太网使用 SSH

如果您想通过 **以太网使用 SSH** 登录到 Raspberry Pi OS，可以按照以下步骤操作。请根据您的操作系统选择相应步骤。

##### 对于 Windows

- **步骤 1.** 使用连接到计算机的 **micro-SD 卡读卡器**，或使用笔记本电脑上的 **内置读卡器**，将安装了 Raspberry Pi OS 的 micro-SD 卡插入计算机。

- **步骤 2.** 打开 **命令提示符**，导航到 micro-SD 卡：

```sh
示例: 
C:\Users\user> F:
F:\>
```

- **步骤 3.** 进入 micro-SD 卡后，通过输入以下命令创建一个名为 **SSH** 的空文件：

```sh
echo > ssh
```

这是为了在 Raspberry Pi OS 上启用 SSH

- **步骤 4.** 从电脑中弹出 micro-SD 卡，并将其插入到双千兆以太网载板中

- **步骤 5.** 将 USB Type-C 数据线连接到载板上的 Type-C 接口，并将以太网线连接到载板上的一个以太网端口

- **步骤 6.** 将以太网线的另一端连接到路由器，同时将 Type-C 数据线的另一端连接到电源适配器并打开电源

- **步骤 7.** 通过访问[此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)下载并安装 **Putty**

**注意：** Putty 是一个 SSH 和 Telnet 客户端，可用于通过 SSH 连接到载板

- **步骤 8.** 打开 Putty，将电脑连接到载板

- **步骤 9.** 在 **Connection Type** 下选择 **SSH**

- **步骤 10.** 在 **Host Name** 下输入 **raspberrypi.local**，并将 **Port** 保持为 **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **步骤 11.** 点击 **Open**

- **步骤 12.** 在 Putty 窗口中，输入以下登录信息

```sh
- 用户名: pi
- 密码: raspberry
```

- **步骤 13.** 如果成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### 对于 Mac/Linux

- **步骤 1.** 使用连接到电脑的 **micro-SD 卡读卡器**，或使用笔记本电脑上的 **内置读卡器**，将 micro-SD 卡（已安装 Raspberry Pi OS）插入电脑

- **步骤 2.** 打开 **终端** 并导航到 micro-SD 卡

```sh
示例: 
cd /media/user/boot
```

**注意：** 在 **/media/user/boot** 中，将 **user** 替换为您的电脑用户名

- **步骤 3.** 进入 micro-SD 卡后，通过输入以下命令创建一个名为 **SSH** 的空文件

```sh
touch ssh
```

**注意：** 这是为了在 Raspberry Pi OS 上启用 SSH

- **步骤 4.** 从电脑中弹出 micro-SD 卡，并将其插入到双千兆以太网载板中

- **步骤 5.** 将 USB Type-C 数据线连接到载板上的 Type-C 接口，并将以太网线连接到载板上的一个以太网端口

- **步骤 6.** 将以太网线的另一端连接到路由器，同时将 Type-C 数据线的另一端连接到电源适配器并打开电源

- **步骤 7.** 再次在电脑上打开 **终端** 并输入以下命令

```sh
ssh pi@raspberrypi.local
```

- **步骤 8.** 对于以下提示消息，输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 9.** 当提示输入密码时，输入以下内容

```sh
raspberry
```

- **步骤 10.** 如果成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### 方法 3：使用 USB 转串口转换器

##### 对于 Windows

如果您有一个 **USB 转串口转换器**，可以按照以下步骤登录到 Raspberry Pi OS

- **步骤 1.** 使用连接到电脑的 **micro-SD 卡读卡器**，或使用笔记本电脑上的 **内置读卡器**，将 micro-SD 卡（已安装 Raspberry Pi OS）插入电脑

- **步骤 2.** 打开 **文件资源管理器** 并导航到连接的 micro-SD 卡

- **步骤 3.** 打开 **config.txt** 文件，并在最后添加以下内容

```sh
enable_uart=1
```

这是为了启用电脑与载板之间的 UART 通信

- **步骤 4.** 点击 `文件 > 保存` 以保存配置

- **步骤 5.** 从电脑中弹出 micro-SD 卡，并将其重新插入载板

- **步骤 6.** 将 **4 针公头排针** 焊接到载板上的 **UART IO**

- **步骤 7.** 将 USB 转串口转换器的跳线连接到载板上的 **UART IO 排针**，连接方式如下

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 8.** 将 USB 转串口转换器连接到电脑

- **步骤 9.** 在 Windows 搜索框中输入 **设备管理器** 打开 **设备管理器**

- **步骤 10.** 点击 **端口 (COM & LPT)** 下拉箭头，找到连接的串口名称（例如：**COM42**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png" alt="pir" width="320" height="auto"/></p>

- **步骤 11.** 通过访问[此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)下载并安装 **Putty**

**注意：** Putty 是一个 SSH 和 Telnet 客户端，可用于通过 SSH 连接到载板。如果您已安装 Putty，可跳过此步骤

- **步骤 12.** 打开 Putty，将电脑连接到载板

- **步骤 13.** 在 **Connection Type** 下选择 **Serial**

- **步骤 14.** 配置以下设置：

  - 串口：COM4（选择您的 COM 端口）
  - 波特率：115200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"/></p>

- **步骤 15.** 点击 **Open**

- **步骤 16.** 在 Putty 窗口中，输入以下登录信息

```sh
- 用户名: pi
- 密码: raspberry
```

- **步骤 17.** 如果成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### 对于 Mac/Linux

如果您有一个 **USB 转串口转换器**，可以按照以下步骤登录到 Raspberry Pi OS

- **步骤 1.** 使用连接到计算机的 **micro-SD 卡读卡器** 或笔记本电脑上的 **内置读卡器**，将安装了 Raspberry Pi OS 的 micro-SD 卡插入计算机

- **步骤 2.** 打开 **boot** 驱动器并导航到连接的 micro-SD 卡

- **步骤 3.** 打开 **config.txt** 文件，并在文件末尾添加以下内容

```sh
enable_uart=1
```

**注意：** 这是为了启用 PC 和载板之间的 UART 通信

- **步骤 4.** 点击 `File > Save` 保存配置

- **步骤 5.** 从 PC 弹出 micro-SD 卡并将其重新插入载板

- **步骤 6.** 将 **4 针公头排针** 焊接到载板上的 **UART IO**，如下所示

- **步骤 7.** 将 USB 转串口转换器的跳线连接到载板上的 **UART IO 排针**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 8.** 将 USB 转串口转换器连接到 PC

- **步骤 9.** 在 Mac/Linux 上打开一个 **终端窗口**

- **步骤 10.** 输入以下命令以更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤 11.** 输入以下命令安装 **minicom**

```sh
sudo apt-get install minicom
```

- **步骤 12.** 在终端中输入以下命令查看连接的串口设备

```sh
dmesg | grep tty
```

> 示例：<br />
  [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device

- **步骤 13.** 输入以下命令连接到串口设备

```sh
minicom -D /dev/ttyACM0 -b 115200
```

**注意：** 波特率设置为 115200

- **步骤 14.** 完成上述硬件连接后，从墙壁电源插座打开电源以启动载板

现在您已成功登录到 Raspberry Pi OS。

#### 方法 4：使用键盘、鼠标和显示器

如果您有 **HDMI 显示器、micro-HDMI 转全尺寸 HDMI 线缆、键盘和鼠标**，可以将它们连接到双千兆以太网载板并登录到 Raspberry Pi OS。

（绘制一个图示 - 不太重要）

### USB 端口配置

默认情况下，为了节省 CM4 的电源，**2 个 USB 3.0 端口**是**禁用**的，因此它们无法直接使用。然而，**USB 3.0 9 针排针**是**默认可用**的。

如果您想启用 2 个 USB 3.0 端口，需要在 **/boot** 目录中的 **config.txt** 文件末尾添加一行内容。

有两种方法可以实现：

#### 方法 1：从连接到 PC 的 micro-SD 卡修改文件

- **步骤 1.** 将安装了 Raspberry Pi OS 的 micro-SD 卡插入计算机

- **步骤 2.** 打开 **文件资源管理器** 并导航到连接的 micro-SD 卡

- **步骤 3.** 打开 **config.txt** 文件，并在文件末尾添加以下内容

```sh
dtoverlay=dwc2,dr_mode=host
```

- **步骤 4.** 保存文件

#### 方法 2：从载板修改文件

- **步骤 1.** 将 micro-SD 卡插入载板并启动

- **步骤 2.** 使用前面介绍的任意方法登录到 Raspberry Pi OS

- **步骤 3.** 输入以下命令导航到 **boot** 目录

```sh
cd /boot
```

- **步骤 4.** 使用 **nano 文本编辑器** 打开 **config.txt**

```sh
sudo nano config.txt
```

- **步骤 5.** 在文件末尾添加以下内容

```sh
dtoverlay=dwc2,dr_mode=host
```

- **步骤 6.** 按 **Ctrl + X**，然后按 **Y**，最后按 **Enter** 保存文件

### USB 端口速度测试

如果您想测试 USB 端口的速度，可以在 Raspberry Pi OS 终端中执行以下命令

```sh
sudo dd if=/dev/sda1 of=/dev/null bs=512k count=5000
```

输出结果如下所示

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/USB_test.png" alt="pir" width="900" height="auto"/></p>

**注意：** 在 **if=/dev/sda1** 中，**sda1** 是连接的 USB 驱动器。您可以通过输入 **lsblk** 找到它，如下所示

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/find_usb.png" alt="pir" width="700" height="auto"/></p>

### 以太网端口配置

将 Raspberry Pi OS 刷写到 CM4 模块后，您将仅在连接到 **CM4 模块的千兆以太网 PHY**（基于 **Broadcom BCM54210PE** 的右侧端口）的以太网端口上获得完整的千兆速度（1Gbps）。连接到 **Microchip 的 LAN7800 USB 3.0 到 GbE（千兆以太网桥）**（左侧端口）的端口将无法提供完整的 1Gbps 速度，而是大大降低的速度。这是因为 Raspberry 核心中的 lan78xx 驱动程序未更新。

按照以下步骤安装脚本并修复此问题：

- **步骤 1.** 进入 Raspberry Pi OS 终端窗口

- **步骤 2.** 输入以下命令下载仓库

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

- **步骤 3.** 进入仓库目录

```sh
cd seeed-linux-dtoverlays
```

- **步骤 4.** 输入以下命令安装脚本

```sh
sudo ./scripts/cm4_lan7800.sh
```

- **步骤 5.** 重启载板

```sh
sudo reboot
```

- **步骤 6.** 输入以下命令检查安装状态

```sh
dmesg | grep lan
```

如果看到以下输出，说明驱动程序已成功运行

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_Driver.png" alt="pir" width="900" height="auto"/></p>

**注意：** 如果您想查看帮助用法，请输入 **sudo ./cm4_lan7800.sh -h**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_help.png" alt="pir" width="900" height="auto"/></p>

### SD 卡速度测试

进入 Raspberry Pi OS 终端窗口并执行以下命令

```sh
sudo dd if=/dev/mmcblk0p2 of=/dev/null bs=512k count=5000
```

您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/SD_Test.png" alt="pir" width="900" height="auto"/></p>

### DSI 和 CSI 接口配置

如果您希望通过 DSI 接口连接显示屏，并通过 CSI 接口连接摄像头到载板，请按照以下步骤操作：

- **步骤 1.** 将显示屏连接到载板上的 DSI1 端口，并将摄像头连接到 CSI1 端口，如下所示：

- **步骤 2.** 在 Raspberry Pi OS 的终端窗口中执行以下命令以启用显示屏和摄像头：

```sh
sudo wget https://datasheets.raspberrypi.org/cmio/dt-blob-disp1-cam1.bin -O /boot/dt-blob.bin
```

**注意：** 此处的配置方法参考了 [cmio-display](https://github.com/raspberrypi/documentation/blob/master/hardware/computemodule/cmio-display.md) 和 [raspistill](https://www.raspberrypi.org/documentation/configuration/camera.md)。

- **步骤 3.** 运行以下命令从摄像头拍摄照片并在显示屏上预览：

```sh
raspistill -v -o test.jpg 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI_CSI.png" alt="pir" width="850" height="auto"/></p>

### I2C 配置

#### 硬件设置

如果您希望将 **I2C 设备**连接到 **FPC 接口**，请按照以下连接方式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_I2C.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### 软件设置

您可以将 I2C 设备连接到 **8 针 FPC 接口**，并使用 Raspberry Pi OS 控制它们。

- **步骤 1.** 访问 **Raspberry Pi 软件配置工具**：

```sh
sudo raspi-config
```

- **步骤 2.** 进入 `Interface Options > I2C` 并按下 **Enter**。

- **步骤 3.** 选择 **Yes** 以启用 I2C。

- **步骤 4.** **重启**载板：

```sh
sudo reboot
```

### I2C 调试

- **步骤 1.** 将 I2C 设备连接到载板的 **8 针 FPC 接口**。

- **步骤 2.** 列出所有可用的 I2C 总线：

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/I2C_Detect.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 使用默认方法立即扫描 I2C 总线 1（i2c-1）上的标准地址：

```sh
i2cdetect -y 1
```

**注意：** 1 表示 I2C 总线编号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/detect.png" alt="pir" width="1000" height="auto"/></p>

上图显示了一个 I2C 地址为 0x5c 的设备。

- **步骤 4.** 输入以下命令读取寄存器内容：

```sh
i2cget -f -y 1 0x5c 0x0f
```

- -y 禁用交互模式。默认情况下，i2cdetect 会在操作 I2C 总线之前等待用户确认。当使用此标志时，它会直接执行操作。
- 1 表示 I2C 总线编号。
- 0x5c 表示 I2C 设备地址。
- 0x0f 表示内存地址。

输出如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cget.png" alt="pir" width="400" height="auto"/></p>  

- **步骤 5.** 输入以下命令向寄存器写入数据：

```sh
i2cset -y 1 0x5c 0x11 0x10
```

- -y 禁用交互模式。默认情况下，i2cdetect 会在操作 I2C 总线之前等待用户确认。当使用此标志时，它会直接执行操作。
- 1 表示 I2C 总线编号。
- 0x5c 表示 I2C 设备地址。
- 0x11 表示内存地址。
- 0x10 表示内存地址中的具体内容。
<br />

- **步骤 6.** 输入以下命令读取所有寄存器值：

```sh
i2cdump -y 1 0x5c
```

- -y 禁用交互模式。默认情况下，i2cdetect 会在操作 I2C 总线之前等待用户确认。当使用此标志时，它会直接执行操作。
- 1 表示 I2C 总线编号。
- 0x5c 表示 I2C 设备地址。

输出如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cdump.png" alt="pir" width="1000" height="auto"/></p>  

### SPI 配置

#### 硬件设置

如果您希望将 **SPI 设备**连接到 **FPC 接口**，请按照以下连接方式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_SPI.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### 软件设置

您可以将 SPI 设备连接到 **8 针 FPC 接口**，并使用 Raspberry Pi OS 控制它们。

- **步骤 1.** 访问 **Raspberry Pi 软件配置工具**：

```sh
sudo raspi-config
```

- **步骤 2.** 进入 `Interface Options > SPI` 并按下 **Enter**。

- **步骤 3.** 选择 **Yes** 以启用 SPI。

- **步骤 4.** **重启**载板：

```sh
sudo reboot
```

### SPI 调试

- **步骤 1.** 将 SPI 设备连接到载板的 **8 针 FPC 接口**。

- **步骤 2.** 列出所有可用的 SPI 设备：

```sh
ls /dev/spi*
```

输出如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **步骤 3.** 将 micro-SD 卡插入电脑。

- **步骤 4.** 导航到 **boot** 驱动器。

- **步骤 5.** 下载 [此文件](https://files.seeedstudio.com/wiki/102110497/spidev_test) 并移动到 **boot** 驱动器。

- **步骤 6.** 从电脑中拔出 micro-SD 卡并插入载板。

- **步骤 7.** 打开载板并导航到 **boot** 目录：

```sh
cd /boot
```

- **步骤 8.** 使用跳线短接 **GPIO 10 (Pin 6)** 和 **GPIO 9 (Pin 7)**。

**注意：** 此处短接了 **MOSI 和 MISO 引脚**。

- **步骤 9.** 运行以下 SPI 测试工具：

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

如果您看到以下输出，说明 SPI 工作正常。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

## 资源

- **[PDF]** [树莓派 CM4 双千兆以太网载板原理图](https://files.seeedstudio.com/wiki/102110497/RapberryPi-CM4-Dual-GbE-Carrier-Board-V1.1_SCH.pdf)

- **[PDF]** [树莓派计算模块 4 数据手册](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[网页]** [树莓派官方文档](https://www.raspberrypi.org/documentation/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>