---
description: Edge Controller 入门指南
title: Edge Box RPI-200 入门指南
keywords:
- Raspberry pi
- Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge_Box_introduction
last_update:
  date: 2/29/2024
  author: Kasun Thushara
---

## 介绍


<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

EdgeBox-RPI-200 系列是一款基于 Raspberry Pi 的一体化工业边缘计算控制器，专为各种工业应用而定制。它拥有高可扩展性和坚固的硬件设计，与广泛的 Raspberry Pi 工业软件生态系统无缝集成。这使其成为智能自动化和工业物联网 (IIoT) 解决方案的最佳选择。

边缘控制器作为传统 PLC 和 PAC 的多功能替代方案，通过精心设计的操作系统同时满足运营技术 (OT) 和信息技术 (IT) 需求。它们确保确定性运行时间，并为分析等高级任务提供计算环境，增强了在各种工业场景中的实用性。由于智能手机时代的当代劳动力熟悉现代编程语言和开发套件环境，EdgeBox-RPI-200 系列控制器提供了用户友好的界面。其紧凑的外形尺寸支持实时操作和多进程控制，服务于各种工业用途，包括 PLC、PAC、IIoT 网关、OPC UA 服务器和工业 PC。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

**一体化控制器：** 集成 PLC、PAC、IIoT 网关、OPC UA 服务器和工业 PC 功能。

**强大的处理器：** Raspberry Pi Compute Module 4，配备 4GB RAM、16GB eMMC。支持实时操作和多进程。

**丰富的 IO 和接口：** 支持各种工业协议。

**通信能力：** 无线连接、千兆以太网。兼容多种云服务。

**坚固的硬件设计：** 铝制散热器、35mm DIN 导轨、壁挂安装。

**Raspberry Pi 生态系统：** 兼容 Codesys、Node Red、MQTT、OPC UA、Ignition 等。


## 规格参数


| 参数                      | 详细信息                                    |
|---------------------------|---------------------------------------------|
|**基本参数**                |                        |                                        
| CPU 核心                  | 4 核 Raspberry Pi CM4                       |
| 内存                      | 1GB 2GB 4GB 8GB                             |
| 存储                      | 8GB16GB 32GB                                |
| 无线                      | WiFi                                        |
|                           | 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac 配备|
| 蓝牙                      | 蓝牙 5.0, BLE 配备                          |
| 蜂窝网络                  | Mini-PCIe 支持 4G LTE (Quectel EC20/EC25 已测试) |
| LoRa®                     | Mini-PCIe 支持 LoRaWAN® (Seeed WM1302 已测试) |
| **接口**                  |                                        |
| 以太网                    | 1000M RJ45 *1                               |
| HDMI                     | HDMI 2.0 最高支持 4k@60fps                   |
| USB                      | USB2.0 A*2                                  |
| RS 串口                   | RS485 *1 (隔离)                         |
|                           | RS232 *1                                    |
| M.2 插槽                  | 2242 NVME SSD 卡                            |
| DI                        | 2 (隔离)                                    |
|                           | 直流输入电压 - 24V，电流 - 1000mA            |
| DO                        | 2 (隔离)                                    |
|                           | 输出电压 - 60 V 以下，电流容量 - 500 mA      |
| **额外特性**              |                                            |
| 电源供应                  | 直流 12V - 36V                              |
| RTC                       | RTC                                         |
| 看门狗定时器              | 独立                                        |
| 加密芯片                  | Atecc608a (可选)                            |
| 不间断电源                | UPS (可选)                                  |
| 工作温度                  | -20 到 +60 °C                               |
| 认证                      | RoHS, CE, FCC, TELEC, UKCA                  |

## Raspberry Pi 工业软件生态系统

凭借强大的 Raspberry Pi 工业软件生态系统，您会发现 EdgeBox 支持丰富的软件和自主平台。
- [**Codesys**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## 硬件概述

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## 框图 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## 多功能菲尼克斯连接器 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## 首次开机

**步骤 01：** 将电源线连接到引脚 1 和 2。引脚 1 为电源，引脚 2 为接地。


<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
PE 信号是可选的。如果没有 EMI 存在，PE 连接可以保持开路。
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**步骤 02**：接下来，连接以太网电缆。最终设置可能如下所示

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**步骤 03：** 之后，您可能需要识别 IP 地址。为此，请考虑使用 IP 扫描软件或您可以使用路由器 webUI。找到后，利用 SSH 与 Edge Box 200 建立通信。

:::note
用户名是 pi，密码是 raspberry
:::

Edge Box-200 出厂时预装了 raspberry pi OS。您也可以使用 HDMI 电缆或连接显示器并使用图形用户界面。为简单起见，我们可以使用 VNC 服务器。

为此，在命令行中输入：

```sh
sudo raspi-config
```

:::note 
对于全新的操作系统安装，您需要购买一个最小开发板，该开发板包含为 Raspberry Pi CM4 选择启动模式的功能。[双千兆以太网网卡载板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)非常适合此用途。
:::

**步骤 04：** 然后选择接口选项

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>


**步骤 05：** 接下来选择 VNC 并启用它

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**步骤 06：** 接下来重启 EdgeBox 

```sh
sudo reboot
```

然后使用您的局域网和安装了 Real VNC 的 PC，您可以直接与 Edge-box 200 RPi GUI 进行交互。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## 接口

### 串行端口（RS232 和 RS485）

有时，您可能需要与客户端使用 RS232 或 RS485 协议进行通信。EdgeBox RPI 200 具有用于串行通信的独立端口。连接如下：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note 
RS485 的 120 欧姆终端电阻已安装在内部。RS485_GND 信号与"GND"信号隔离。如果使用屏蔽双绞线，RS485 _GND 连接到屏蔽层。
:::

### DI&DO

两个数字隔离输入和两个数字输出可以连接到 EdgeBox RPI 200 设备。引脚定义如下所示

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

要进一步了解这些连接，请参考下面的图表

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note 
- 输入的直流电压为 24V（+- 10%）。
- 输出的直流电压应低于 60V，电流容量为 500ma。
- 输入的通道 0 和通道 1 相互隔离
- 输出的通道 0 和通道 1 相互隔离
:::

## 其他资源

- [Edgebox 产品说明书](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Edgebox 用户手册](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [EdgeBox 3D 文件](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## 技术支持


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>