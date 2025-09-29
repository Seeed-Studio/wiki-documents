---
description: RFbee V1.1 - 无线 Arduino 兼容节点
title: RFbee V1.1 - 无线 Arduino 兼容节点
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RFbee_V1.1-Wireless_Arduino_compatible_node
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/rfbee1.jpg)

RFbee 是一个 RF 模块，提供设备之间简单灵活的无线数据传输。它基于 AVR ATmega168，作为一个完全功能的 **Arduino**，通过 SPI 连接到 TI CC1101 RF 收发器。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/rfbee-v11-wireless-arduino-compatible-node-p-614.html)

版本追踪
---------------

| 修订版 | 描述                     | 发布日期      |
|--------|--------------------------|---------------|
| v1.0   | 初始版本                 | 2010年3月5日  |
| v1.1   | 修订版本                 | 2010年8月27日 |
| v1.2   | MCU 更改为 ATmega328     | 2015年10月10日 |

功能特点
--------

-   范围：室内/城市：最高可达 50m；室外视距：最高可达 120m；
-   接收灵敏度：-95dBm
-   RF 数据传输速率：4,800bps；76,800bps
-   工作频率：868MHz 和 915MHz
-   通信类型：点对点或点对多点
-   易于使用的串行接口和丰富的可扩展端口
-   易于使用的 AT 命令：设置工作模式、串行波特率等
-   开源硬件和固件
-   与 Xbee 插座兼容，因此可以作为快速替代插入任何 Xbee 插座

<div class="admonition note">
<p class="admonition-title">注意</p>
只有 Rx、Tx、VCC、GND 引脚与 Xbee 相同。RFbee 无法与 Xbee 通信，因此无线连接的两端都需要使用 RFbee。
</div>

应用场景
-----------------

-   强大的 RF 控制
-   易于实现无线传感器网络 (WSN)

规格参数
--------------

| 规格参数                | 值                                                          |
|-------------------------|------------------------------------------------------------|
| 微处理器               | ATmega168(版本 &lt; V1.2)，ATmega328(版本 &gt;= 1.2)       |
| PCB 尺寸               | 24.38mmx32.94mmx0.8mm                                       |
| 指示器                 | 无                                                          |
| 电源供应               | 3.3V                                                        |
| IO 数量                | 9                                                           |
| ADC 输入               | 7(6 与 IO 复用)                                             |
| 编程接口               | USB                                                         |
| 连接性                 | 与 XBee 插座兼容                                           |
| 通信协议               | Uart(TTL)                                                  |
| 工作频段               | ISM 868MHz 和 915MHz                                        |
| 外形尺寸               | 24.38mmx32.94mmx15mm                                        |

### 电气特性

| 规格参数             | 最小值 | 典型值 | 最大值 | 单位  |
|----------------------|--------|--------|--------|-------|
| 输入电压             | 3.0    | 3.3    | 3.6    | VDC   |
| 发射电流             |        | 34.5   |        | mA    |
| 接收电流             |        | 18.1   |        | mA    |
| 空闲电流             |        | 5.2    |        | mA    |
| 关机电流             |        | &lt;0.3 |        | mA    |
| 工作温度             | -50    |        | 125    | °C    |

硬件概览
-----------------

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-pin.jpg)

| 引脚    |  #  | 焊盘类型     | 描述                              | Arduino 引脚编号         |
|---------|-----|--------------|-----------------------------------|--------------------------|
| 3V3     | 1   | 电源输入     | VCC, +3.3V                       | -                        |
| TX      | 2   | 输出         | Uart Tx 端口                     | 1(DIO)                   |
| RX      | 3   | 输入         | Uart Rx 端口                     | 0(DIO)                   |
| PD4     | 4   | 输入/输出    | ATmega168 PD4                    | 4(DIO)                   |
|  !RESET | 5   | 输入         | ATmega168 复位端口               |                          |
| PB1     | 6   | 输入/输出    | ATmega168 PB1                    | 9(DIO)                   |
| PB0     | 7   | 输入/输出    | ATmega168 PB0                    | 8(DIO)                   |
| PD7     | 8   | 输入/输出    | ATmega168 PD7                    | 7(DIO)                   |
|  DTR    | 9   | 输入         | 用于编程 ATmega168               | -                        |
| GND     | 10  | GND          | GND                              | -                        |
| PC3     | 11  | 输入/输出    | ATmega168 PC3                    | 3(模拟输入)/17(DIO)      |
| PC2     | 12  | 输入/输出    | ATmega168 PC2                    | 2(模拟输入)/16(DIO)      |
| PC1     | 13  | 输入/输出    | ATmega168 PC1                    | 1(模拟输入)/15(DIO)      |
| VREF    | 14  | 输入         | ATmega168 AREF 端口              | -                        |
| PC0     | 15  | 输入/输出    | ATmega168 PC0                    | 0(模拟输入)/14(DIO)      |
| ADC7    | 16  | 输入         | ATmega168 ADC7                   | 7(模拟输入)              |
| PD5     | 17  | 输入/输出    | ATmega168 PD5                    | 5(DIO)                   |
| PD6     | 18  | 输入/输出    | ATmega168 PD6                    | 6(DIO)                   |
| PC5     | 19  | 输入/输出    | ATmega168 PC5                    | 5(模拟输入)/19(DIO)      |
| PC4     | 20  | 输入/输出    | ATmega168 PC4                    | 4(模拟输入)/18(DIO)      |

使用方法
-----

### 硬件安装

RFbee 可以通过多种方式连接，例如：

-   使用 UartSB 设备通过 USB 连接到 PC。
-   使用 XbeeShield 连接到 Seeeduino（或 Arduino）。
-   连接到任何具有 Uart 端口的设备。

<div class="admonition note">
<p class="admonition-title">注意</p>
UartSBee 设备和 XbeeShield 是单独销售的。
</div>

#### 图 1: 使用 UartSBee 的 USB（以下图片展示的是旧版本的 UartSBee）

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure1.jpg)

#### 图 2: 通过 XbeeShield（版本 1）连接的 Seeduino

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure2.jpg)

#### 使用 Uart 的任何设备

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure3.jpg)

### 示例

以下是一个教程，介绍如何使用 [SeeedStudio](https://www.seeedstudio.com) 的 RFBee 收发器与 [rf-explorer.com](https://www.rf-explorer.com) 的 RF Explorer 频谱分析仪。

#### 使用 RF Explorer 监控 RFBee

RFBee 是一个很棒的设备，它接受一些简单的 AT ASCII 命令字符串来进行基本配置。是一个理想的工具，用于实验数字 RF 传输。

此示例代码为公共领域代码，可从 [这里](http://micro.arocholl.com/download/RFBeeTutorial/Test_RFBee.pde) 下载，并在 Arduino IDE v0022 中测试。

|                                                                              |                                                                              |                                                                              |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam1.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam2.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam3.jpg) |

##### 要求

您可以使用 Seeeduino Stalker v02b 来托管 RFBee。只需将 RFBee 插入 XBee 插槽即可。您还需要一种方法将 Stalker 连接到您的 PC 以上传代码，我个人使用了 CP2102 USB 转接桥，您也可以使用其他 USB 转接桥，包括 Seeed 推荐的 UartSBee。

或者，您可以使用 Arduino 兼容板，但需要通过 XBee 2mm 接头将 RFBee 连接到 CPU 的 RX/TX，这可能不容易在当地商店找到。

最后，您需要两根跳线将 Stalker 的端口 2 连接到 GND，以及端口 3 和 GND。我们将使用它们作为简单的开关，以不同方式配置 RFBee。请查看简单的代码以更好地理解其工作原理，并根据需要进行修改。

需要对 RFExplorer 和 RFBee 用户手册有一定的熟悉，否则某些步骤可能不太明显。

##### 设置 RFBee 工作

在 Stalker 中上传脚本后，完全关闭设备电源，以便 Stalker 和 RFBee 的两个 ATMega 芯片同时重置，从而从干净状态开始。

重新打开设备电源，Stalker 的 LED 闪烁 6 次后将开始传输。

RFExplorer 将显示接收到的功率和频率。调整天线方向，直到获得最佳功率响应。在本教程中，我们将使用 RFBee 的 915Mhz，但在 868Mhz 频段也可以获得类似的结果。查看代码并取消注释为 868Mhz 编写的几行代码，如果您的 RF Explorer 在该频段。

**更多详情，请访问** [micro.arocholl.com](http://micro.arocholl.com/index.php?option=com_content&view=article&id=53:tutorial-how-to-use-rf-explorer-to-monitor-a-rfbee&catid=40:article&Itemid=61)。

支持
-------

### 如何更新固件

您可以使用 Arduino IDE 更新 RFBee 固件，具体步骤如下。此过程假设使用 UartSB，因为这是将 RFBee 连接到 PC 的最简单方法，请参阅硬件安装部分了解其他连接方式。

1. 将您的 RFBee 连接到 UartSB，将开关拨到 XBee 和 3.3v，然后通过 USB 数据线将其连接到您的电脑。
2. 将 RFBee 固件的源代码下载到您的 Arduino sketch 文件夹。
3. 打开 Arduino IDE 并打开 RFBee_vx_x 项目。然后选择工具 -> 板 -> Arduino Pro 或 Pro Mini (3.3v, 8MHz) w/ATmega168（当版本 >= V1.2 时选择 ATmega328）。从工具菜单中选择正确的串口。现在您可以上传 RFBee 固件。
4. 如果更新过程中配置发生丢失，请重新应用 RFBee 的配置更改。
5. 您可以根据需求添加或修改固件，因为 RFBee 能够作为 Arduino 独立工作。

**RFBee 固件:** [从 Google Code 下载](http://code.google.com/p/rfbee/downloads/list)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [RFBee 用户手册](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/rfbee-manual.pdf)
-   [RFbee Arduino 1.0 固件](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/RFbee_for_arduino1.0.zip)
-   [RFbee 固件 1.1（最新）](https://github.com/Seeed-Studio/RFBee)
-   [EAGLE 文件中的原理图和布局](https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip)
-   [论坛](https://forum.seeedstudio.com/viewtopic.php?f=10&t=682&sid=7a9b1bed4f9fd10a9b1003ca1e48e756)

<!-- 此 Markdown 文件来源于 https://wiki.seeedstudio.com/cn/RFbee_V1.1-Wireless_Arduino_compatible_node/ -->

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