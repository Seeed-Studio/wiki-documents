---
description: 更新 eeprom
title: 为 Compute Module 4 更新 EEPROM
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_pi_CM4_update_eeprom
last_update:
  date: 2/15/2023
  author: Peter Pan
---
<!-- ---
name: Update eeprom
category: Software
bzurl: 
wikiurl: 
sku: 
--- -->

# 什么是 Compute Module 4

Raspberry Pi Compute Module 4 (CM4) 利用了流行的 Raspberry Pi 4 Model B 的计算能力，与其前代产品相比具有显著的性能变化：更快的 CPU 内核、更好的多媒体、更多的接口功能。而且这是首次发布提供多种 RAM 密度和无线连接选项的版本。

在外部尺寸方面，这个版本采用了全新的机械标准。模块在其载板上的整体占用面积减少，形成了更小、更紧凑的外形尺寸，适合集成到产品中。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png" alt="pir" width={650} height="auto" /></p>

:::note
Raspberry Pi 4 的强大功能以紧凑的外形尺寸用于深度嵌入式应用。Raspberry Pi Compute Module 4 集成了四核 ARM Cortex-A72 处理器、双视频输出和广泛的其他接口选择。提供 32 种变体，具有一系列 RAM 和 eMMC Flash 选项，以及有或无无线连接功能。-- [Raspbarry Pi CM4](https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000)
:::

## Seeed Studio Compute Module 4 产品

| reTerminal  | Edgebox-RPI-100  |EdgeLogix-RPI-1000| reRouter| 双千兆以太网网卡载板 |
|---|---|---|---| --- |
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a> |  <a href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

## 如何更新 CM4 EEPROM

### 前提条件

**所需硬件：**

* 基于 Linux 的主机（可以是以下之一）：
  * 安装了 Raspberry Pi OS 的 Raspberry Pi 4B
  * 安装了最新 Ubuntu OS 的 PC
* USB Type-C 数据线

**适用的 Seeed Studio 硬件：**

| reTerminal | reRouter | 双千兆以太网网卡载板 |
|---|---|---|
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a>  | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

:::note
此过程需要将 CM4 eMMC 存储器置于"USB 大容量存储"模式，目前仅适用于 reRouter 和 reTerminal。如果您有 Edgebox-RPI-200 或 EdgeLogix-RPI-1000，您需要一个能够将 CM4 eMMC 存储器置于 USB 存储模式的 CM4 开发板，例如[双千兆以太网网卡载板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
:::

### 将 CM4 eMMC 存储器置于 USB 大容量存储模式

**对于 reTerminal**

* **步骤 1：** 打开外壳并移除 reTerminal 的散热器以访问启动选择开关，请按照 [reTerminal 入门指南页面](/cn/reTerminal) 中的步骤操作，直到您切换了启动模式开关。

**对于 reRouter**

* **步骤 1：** 通过移除底部 4 个螺丝和底盖来打开 reRouter 的外壳，如下所示：
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg" alt="pir" width={600} height="auto" /></p>

* **步骤 2：** 将 reRouter 板从外壳中滑出并取出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg" alt="pir" width={600} height="auto" /></p>

* **步骤 3：** 找到 3 针接口并短接 GND 和 BOOT 引脚。

:::note
**双千兆以太网网卡载板** 与 reRouter 是相同的 PCB，只需执行 **步骤 3** 来选择启动模式。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

### 软件设置和更新 EEPROM 固件

**在您的 PC 或 Raspberry Pi 4B（刷写工具）上**

:::note
更新 raspberry pi 的 EEPROM 仅支持基于 Linux 的操作系统，以下步骤仅在 **PC with Ubuntu 22.04** 和 **Raspberry Pi 4B（刷写工具）with Raspberry Pi OS（64位）** 上测试过
:::

* **步骤 1：** 安装所需的系统软件包，请打开 **`终端`** 应用程序并输入以下命令：

```bash

sudo apt-get update

sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

* **步骤 2：** 克隆 **`usbboot`** 工具仓库

```bash
cd ~/

git clone --depth=1 https://github.com/raspberrypi/usbboot

cd usbboot
```

* **步骤 3：** 构建 **`usbboot`** 工具

```bash

make
```

* **步骤 4：** 更新 EEPROM

:::note
**`usbboot`** github 仓库应该有最新的 EEPROM 引导加载程序固件更新，所以以下步骤应该能让您更新到最新的 EEPROM 引导加载程序固件
:::

```bash

cd recovery

./update-pieeprom.sh
```

您应该看到如下所示的类似消息：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

**可选：** 如果您想使用特定版本的引导加载程序固件，您可以访问 [rpi-eeprom](https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/) 仓库固件文件夹来选择和下载固件 bin 文件以替换 **`pieeprom.original.bin`** 文件，例如：

:::note
此可选步骤将用编写此 wiki 时最新的 `stable` 构建版本 **`pieeprom-2023-01-11.bin`** 替换 **`pieeprom.original.bin`** 文件。
:::

```bash

cd ~/usbboot/recovery

rm -f pieeprom.original.bin

curl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin

./update-pieeprom.sh
```

您应该看到如下所示的类似消息：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

* **步骤 5：** 将 USB Type-C 连接到 CM4 设备（**`reTerminal`** \ **`reRouter`** \ **`双千兆以太网网卡载板`**）和 **`主机 PC/Raspberry Pi 4B（刷写工具）`** 设备，其中 **CM4 设备** 应该置于 **USB 大容量存储模式**。

* **步骤 6：** 应用并更新 EEPROM 固件

```bash

cd ~/usbboot

./rpiboot -d recovery

```

您应该看到如下所示的类似消息：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

此时您的 **`CM4 设备`** 应该已经设置了新的启动顺序并更新了 EEPROM 固件。

### 更改启动顺序并更新 EEPROM

:::note
您应该已经按照上述设置步骤执行到 **`步骤 3`**
:::

* **步骤 1：** 编辑 `boot.conf`

```bash
cd ~/usbboot/recovery

nano boot.conf
```

文件应该如下所示：

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf25641
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

其中 **`BOOT_ORDER=0xf25641`** 行是启动顺序设置，当前启动顺序设置为 `SD CARD/eMMC > USB-MSD > NVME > BCM-USB-MSD > NETWORK > RESTART`。如果您想将启动顺序更改为 `NVME > USB-MSD > BCM-USB-MSD >  SD CARD/eMMC > NETWORK > RESTART`，启动顺序设置应为 **`BOOT_ORDER=0xf21564`**。

因此新的启动顺序设置的 `boot.conf` 应如下所示：

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf21564
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

保存并退出 `nano` 编辑器。

以下是定义 BOOT_ORDER 不同启动模式设置属性的表格，供参考。

| 值 | 模式  | 描述 |
|---|---|---|
|  0x0 | SD CARD DETECT | 尝试 SD 卡然后等待卡检测指示卡已更改 - 现在已弃用，因为 0xf (RESTART) 可用。  |
|  0x1 | SD CARD/eMMC |  SD 卡（或 Compute Module 4 上的 eMMC）。  |
|  0x2 | NETWORK  | 网络启动  |
|  0x3 | RPIBOOT | RPIBOOT  |
|  0x4 | USB-MSD  | USB 大容量存储启动   |
|  0x5 | BCM-USB-MSD  |  从 USB Type C 接口进行 USB 2.0 启动（CM4：CM4IO 板上的 USB type A 接口）。  |
|  0x6 | NVME | 仅限 CM4：从连接到 PCIe 接口的 NVMe SSD 启动。   |
|  0x7 | HTTP | 通过以太网进行 HTTP 启动。  |
|  0xe | STOP | 停止并显示错误模式。需要重新上电才能退出此状态。 |
|  0xf | RESTART|  从 BOOT_ORDER 字段中的第一个启动模式重新启动，即循环 |

> 参考：[BOOT_ORDER 属性表](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER)

* **步骤 2：** 获取最新固件

```bash

wget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin
```

* **步骤 3：** 使用新的 `boot.conf` 更新 EEPROM 固件

```bash

./update-pieeprom.sh
```

* **步骤 4：** 将 USB Type-C 连接到 CM4 设备（**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**）和 **`主机 PC/Raspberry Pi 4B（刷写工具）`** 设备，其中 **CM4 设备** 应置于 **USB 大容量存储模式**。

* **步骤 5：** 将固件应用到设备

```bash
cd ~/usbboot

sudo ./rpiboot -d recovery
```

您应该看到如下所示的类似消息：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

此时您的 **`CM4 设备`** 应该已经设置了新的启动顺序并更新了 EEPROM 固件。

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