---
description: 入门指南 Edge Controller 
title: 入门指南 Edge Box RPI-200
keywords:
- 树莓派
- 边缘控制器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge_Box_introduction
last_update:
  date: 2/29/2024
  author: Kasun Thushara
---

## 简介

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

EdgeBox-RPI-200 系列是一款基于树莓派的工业边缘计算控制器，专为多种工业应用设计。它具有高扩展性和坚固的硬件设计，并与广泛的树莓派工业软件生态系统无缝集成。这使其成为智能自动化和工业物联网（IIoT）解决方案的理想选择。

边缘控制器作为传统 PLC 和 PAC 的多功能替代品，通过精心设计的操作系统满足操作技术（OT）和信息技术（IT）的需求。它们确保确定性运行时，并为高级任务（如分析）提供计算环境，从而在各种工业场景中增强实用性。随着现代劳动力因智能手机时代而熟悉现代编程语言和开发工具包环境，EdgeBox-RPI-200 系列控制器提供了用户友好的界面。其紧凑的外形设计支持实时操作和多进程控制，适用于多种工业用途，包括 PLC、PAC、IIoT 网关、OPC UA 服务器和工业 PC。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

**一体化控制器：** 集成 PLC、PAC、IIoT 网关、OPC UA 服务器和工业 PC 功能。

**强大的处理器：** 树莓派计算模块 4，配备 4GB RAM 和 16GB eMMC。支持实时操作和多进程。

**丰富的 IO 和接口：** 支持多种工业协议。

**通信能力：** 无线连接、千兆以太网。兼容多种云服务。

**坚固的硬件设计：** 铝制散热片，35mm DIN 导轨安装，墙面安装。

**树莓派生态系统：** 兼容 Codesys、Node Red、MQTT、OPC UA、Ignition 等。


## 规格

| 参数                      | 详情                                       |
|---------------------------|---------------------------------------------|
|**基本参数**               |                                             |                                        
| CPU 核心                 | 4核树莓派 CM4                              |
| 内存                     | 1GB 2GB 4GB 8GB                             |
| 存储                     | 8GB 16GB 32GB                               |
| 无线连接                 | WiFi                                        |
|                           | 配备 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac |
| 蓝牙                     | 配备蓝牙 5.0，BLE                          |
| 蜂窝网络                 | Mini-PCIe 支持 4G LTE（已测试 Quectel EC20/EC25） |
| LoRa®                    | Mini-PCIe 支持 LoRaWAN®（已测试 Seeed WM1302） |
| **接口**                 |                                             |
| 以太网                   | 1000M RJ45 *1                               |
| HDMI                     | HDMI 2.0，支持最高 4k@60fps                 |
| USB                      | USB2.0 A*2                                  |
| RS 串口                  | RS485 *1（隔离）                        |
|                           | RS232 *1                                    |
| M.2 插槽                 | 2242 NVME SSD 卡                           |
| DI                       | 2（隔离）                                   |
|                           | DC 输入电压 - 24V，电流 - 1000mA           |
| DO                       | 2（隔离）                                   |
|                           | 输出电压 - 小于 60V，电流容量 - 500mA      |
| **额外功能**             |                                             |
| 电源                     | DC 12V - 36V                                |
| RTC                      | 实时时钟                                    |
| 看门狗定时器             | 独立运行                                    |
| 加密芯片                 | Atecc608a（可选）                           |
| 不间断电源               | UPS（可选）                                 |
| 工作温度                 | -20 至 +60 °C                               |
| 认证                     | RoHS, CE, FCC, TELEC, UKCA                  |

## Raspberry Pi 工业软件生态系统

借助强大的 Raspberry Pi 工业软件生态系统，您会发现 EdgeBox 支持丰富的软件和自主平台。
- [**Codesys**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## 硬件概览

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## 功能框图

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## 多功能凤凰连接器

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## 首次启动

**步骤 01：** 将电源线连接到第 1 和第 2 号针脚。第 1 号针脚用于电源，第 2 号针脚用于接地。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
PE 信号是可选的。如果没有 EMI（电磁干扰）存在，PE 连接可以留空。
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**步骤 02：** 接下来，连接以太网线。最终设置可能如下所示：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**步骤 03：** 然后，您可能需要识别 IP 地址。为此，可以考虑使用 IP 扫描软件或使用路由器的 WebUI。一旦找到 IP 地址，使用 SSH 与 Edge Box 200 建立通信。

:::note
用户名为 pi，密码为 raspberry。
:::

Edge Box-200 随机附带预安装的 Raspberry Pi OS。您可以使用 HDMI 电缆连接显示器并使用图形用户界面。为了简化操作，我们可以使用 VNC 服务器。

在命令行中输入以下命令：

```sh
sudo raspi-config
```

:::note
对于全新操作系统安装，您需要购买一个最低开发板，该开发板包括选择 Raspberry Pi CM4 启动模式的功能。[双千兆以太网 NIC 扩展板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)非常适合此用途。
:::

**步骤 04：** 然后选择接口选项。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>

**步骤 05：** 接下来选择 VNC 并启用它。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**步骤 06：** 接下来重启 EdgeBox。

```sh
sudo reboot
```

然后使用您的局域网和安装了 Real VNC 的 PC，您可以直接与 EdgeBox 200 的 RPi 图形用户界面交互。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## 接口

### 串口 (RS232 和 RS485)

有时，您可能需要通过 RS232 或 RS485 协议与客户端进行通信。EdgeBox RPI 200 提供了独立的串行通信端口。连接方式如下：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note
RS485 的 120 欧姆终端电阻已安装在设备内部。RS485_GND 信号与 “GND” 信号隔离。如果使用屏蔽双绞线，RS485_GND 将连接到屏蔽层。
:::

### DI&DO

EdgeBox RPI 200 设备可以连接两个数字隔离输入和两个数字输出。引脚分布如下：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

要进一步了解这些连接，请参考下图：

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note
- 输入的直流电压为 24V（+- 10%）。
- 输出的直流电压应低于 60V，电流容量为 500mA。
- 输入的通道 0 和通道 1 彼此隔离。
- 输出的通道 0 和通道 1 彼此隔离。
:::

## 其他资源

- [Edgebox 产品说明书](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Edgebox 用户手册](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [EdgeBox 3D 文件](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>