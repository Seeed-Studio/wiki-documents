---
description: 《Zigbee》网络：使用 XBee Series 2 和 Seeed 产品
title: 《Zigbee》网络：使用 XBee Series 2 和 Seeed 产品
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products
last_update:
  date: 1/13/2023
  author: shuxu hu
---

<!-- 1. 本教程是一个分步指南，旨在帮助用户学习如何使用 XBee ZB 模块与 [Seeeduino](/cn/Seeeduino_V2.2 "Seeeduino V2.2") / Arduino、[XBee® Shield](/cn/XBee_Shield "XBee® Shield")、[UartSBee_V3.1](/cn/UartSBee_V3.1 "UartSBee_V3.1")、[《Grove》 - XBee Carrier](/cn/Grove-XBee_Carrier "Grove - XBee Carrier")、Seeeduino Stalker v2.0。这些产品让使用 XBee ZB 模块的工作变得更加轻松。 -->

2. XBee ZB 模块可以以多种不同的方式使用，并提供许多配置参数。在本教程中，我们尝试通过简单的步骤展示基本配置。

3. <font color="darkred"> 请至少完整阅读一次本教程，然后再决定为您的应用选择哪种配置。 </font>

4. 本教程使用 **XBee Series 2** 模块，不使用旧的 Series 1 模块。我们在我们的 Bazaar 商店中销售 Series 2 模块。

## 《Zigbee》模块和网络

**《Zigbee》** 是一种基于 **IEEE 802** 标准的低功耗、短距离无线设备标准，适用于个人区域网络（**PAN**）。《Zigbee》模块工作在未授权的 ISM（工业、科学、医疗）频段。《Zigbee》设备支持点对点、点对多点和网状通信。它们为嵌入式系统提供了方便的低功耗无线解决方案，特别是在功耗是关键因素的情况下。《Zigbee》网络由三种不同类型的 ZigBee 设备组成：**协调器**、**路由器**、**终端设备**。每个网络都有一个 16 位的 **PAN ID**。网络中的所有设备都分配了一个唯一的 PAN ID。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Zigbee_Network_Topology.jpg)

### 设备类型

*   **ZigBee 协调器 (ZC)**：最强大的设备，协调器构成网络树的根，并可能桥接到其他网络。每个网络必须有一个 ZigBee 协调器，因为它是最初启动网络的设备。协调器通过选择一个 RF 信道和 PAN ID 来启动个人区域网络（PAN）。ZC 还允许路由器和终端设备加入 PAN。它能够存储有关网络的信息，包括充当信任中心和安全密钥的存储库。

*   **ZigBee 路由器 (ZR)**：除了运行应用功能外，路由器还可以作为中间路由器，转发其他设备的数据。路由器只有在与 **ZC** 建立连接后才能开始运行。

*   **ZigBee 终端设备 (ZED)**：仅包含与父节点（协调器或路由器）通信所需的功能；它无法中继其他设备的数据。这种关系允许节点大部分时间处于休眠状态，从而实现长电池寿命。ZED 必须像路由器一样加入 PAN 后才能发送任何传感器数据。ZED 需要的内存最少，因此比 ZR 或 ZC 更便宜制造。

### 设备地址

*   当设备连接到《Zigbee》网络时，它会获得一个 **16 位网络地址**。

*   每个设备（节点）都有一个 **64 位设备地址**。在 XBee ZB 模块中，这个 64 位地址是由制造商分配的唯一永久编号。这也是设备的序列号。

任何从一个《Zigbee》设备发送到另一个设备的数据，都是通过指定 16 位网络地址和 64 位设备地址来发送的。

## 获取 Zigbee 模块

**Seeedstudio Bazaar** 目前销售两种来自 [digi](http://www.digi.com/) 的 Zigbee 模块：

*   [XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142)

*   [XBee® Pro Series 2 RF module](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-rf-modules-znet-25-1-mw-chip-antenna-p-226.html?cPath=139_142)

[XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) 模块是 **Series 2** 硬件，配备 **ZNet 2.5 固件**。

在本教程中，我们将使用 **XBee ZB 固件** 在 **XBee ZNet 2.5 模块** 上运行。**XBee ZNet 2.5 模块** 可以通过以下步骤升级为 **XBee ZB 固件**：[将 XBee/XBee-PRO ZNet 2.5 模块转换为 ZB 模块](http://www.digi.com/support/kbase/kbaseresultdetl.jsp?id=3025)。此过程将在下一节中详细说明。

## XBee ZB 硬件和引脚布局

*   XBee ZB 模块配备芯片天线。

[https://www.seeedstudio.com/depot/images/product/xbee2.jpg](https://www.seeedstudio.com/depot/images/product/xbee2.jpg)

*   XBee ZB 模块的引脚如下所示。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_PinOut.jpeg)

## 使用 UartSBee_V3.1 或 Grove - XBee Carrier 升级 XBee 固件

### 安装 USB 转串口驱动程序

<table>
<tr>
<th>连接到 UartSBee_V3.1 的 XBee ZB 用于配置</th>
<th>连接到 Grove - XBee Carrier 的 XBee ZB 用于配置</th>
</tr>
<tr>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_UartSBee.jpg)</td>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_Stem-XBee-Carrier.jpg)</td>
</tr>
</table>

*   按以下步骤安装 **FT232RL** 芯片的必要驱动程序：

#### **Windows**

*   在 Windows 操作系统中，首次插入设备（UartSBee 或 Grove - XBee Carrier）时，可能会要求安装驱动程序。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Detected_Windows.JPG)

从 FTDI 网站下载并安装 **虚拟 COM 端口** 驱动程序：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   安装驱动程序时会打开一个向导。选择“从列表或特定位置安装”。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_1.JPG)

*   选择下载的驱动程序路径。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.JPG)

*   如果下载的是未签名的驱动程序，会出现以下窗口。点击“继续安装”。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.1.JPG)

*   **UartSBee** 驱动程序成功安装。Windows 会为 **FT232RL** 分配一个 **COM** 端口名称，例如 **COM10**、**COM11** 等。请在设备管理器中检查确切的名称。在此示例中，**COM16** 被分配给 UartSBee。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_3.JPG)

##### **GNU/Linux**

所有现代 **GNU/Linux 操作系统**都自带 FT232RL 驱动程序。要检查是否检测到 UartSBee 或 Grove - XBee Carrier，请运行 **lsusb** 命令。输出应类似于以下内容。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Lsub.png)

**GNU/Linux** 会分配 **/dev/ttyUSB0**、**/dev/ttyUSB1** 等作为设备名称。

### 使用 Digi 的 X-CTU (XCTU) 软件

**X-CTU** 是 **X**Bee **C**onfiguration 和 **T**est **U**tility（配置和测试工具）。它主要用于配置 **XBee 模块**以及升级板载 MCU 固件。它还配备了一个 **串口终端**，可以使用 **AT** 命令与 XBee 调制解调器交互。X-CTU 是一个 Windows 应用程序，但已知可以通过 [Wine](http://www.winehq.org/) 在 GNU/Linux 上运行。

*   从 [Digi 的 X-CTU 页面](http://www.digi.com/support/productdetl.jsp?pid=3352&amp;osvid=57&amp;s=316&amp;tp=5&amp;tp2=0) 下载 X-CTU。

*   安装 X-CTU。

*   打开 X-CTU --&gt; PC Settings 标签。

*   选择连接到 UartSBee / Grove - XBee Carrier 的 USB 串口。

*   点击 Test / Query 按钮。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU1.jpeg)

*   一个对话框会显示 **调制解调器类型**、**调制解调器固件版本**和 **序列号**。

*   在此示例中，XBee ZNet 2.5 调制解调器显示为 **XB24-B**。需要将其升级为 **XB24-ZB** 固件。

*   打开 Modem Configuration 标签。

*   点击 Download New Versions 按钮。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_Update_Firmware.jpeg)

*   会打开以下对话框：

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Sources.jpeg)

*   点击 Web 按钮。这会从 Digi 的服务器下载所有设备固件。

*   一旦最新的固件下载完成，将显示更新摘要。这表明更新已成功完成且没有任何问题。如果未出现此对话框，请重复上述步骤。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Summary.jpeg)

*   打开 Modem Configuration（调制解调器配置）标签页。

*   点击 Modem Parameters and Firmware（调制解调器参数和固件）--&gt; Read（读取）按钮。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZNet2.5_firmware_detected.jpeg)

*   检测到 XBee ZNet 2.5 固件 XB24-B，并显示其所有配置参数。

*   它还显示固件的 **Function Set**（功能集）为 **ZIGBEE ROUTER/END DEVICE AT**，版本为 **1220**。

*   **Function Set** 决定了 XBee 模块已经编程或将要编程的固件。Series 2 设备可以用于多种不同模式（**ZC 或 ZR，ZED**）。我们需要选择适合的固件功能集。

*   现在，将固件更新为 **XB24-ZB**。（<font color="redorange">请注意，我们不是使用 **XB24-B** 固件，而是使用与 XBee ZNet 2.5 模块硬件兼容的不同固件集</font>）

*   选择 Modem:XBEE 为 **XB24-ZB**。

*   选择 Function Set 为 **ZIGBEE COORDINATOR AT**。
    *   注意：**ZIGBEE COORDINATOR AT** 是我们将在下一部分使用的一个功能集。您可以选择适合您应用的任何功能集。

*   选择最新版本的固件。在撰写本指南时，最新版本为 **208C**。

*   点击 Write（写入）按钮。这将永久将固件写入 XBee 模块。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZB_Firmware_Upgrade.jpeg)

## 使用 XBee ZB 模块和 PC 的无线 UART 演示

此演示配置两个 XBee 模块，使其在上电后自动连接并持续进行数据收发。此设置可用作无线 UART，将任意两台 PC 或带串口的 MCU 连接起来。

<!-- *   使用两个 [UartSBee_V3.1](/cn/UartSBee_V3.1 "UartSBee_V3.1") 或两个 [Grove - XBee Carrier](/cn/Grove-XBee_Carrier "Grove - XBee Carrier") 搭配两个 XBee ZB 模块。 -->

*   将这些模块连接到 PC 的串口，并确保驱动程序已安装。

*   打开 X-CTU，选择设备的 USB-串口，如下图所示：

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_1.png)

*   使用 **COORDINATOR AT** 功能集固件为一个模块编程，使用 **ROUTER AT** 功能集固件为另一个模块编程。始终使用最新版本的固件。请参阅上面的部分了解如何编程固件。

*   现在，打开 Modem Configuration（调制解调器配置）标签页，并配置两个模块的目标地址，如下所示：

    *   将 COORDINATOR 的目标地址高设置为 ROUTER 的序列号高。

        *   将 COORDINATOR 的目标地址低设置为 ROUTER 的序列号低。

        *   将 ROUTER 的目标地址高设置为 COORDINATOR 的序列号高。
    *   将 ROUTER 的目标地址低设置为 COORDINATOR 的序列号低。

        *   将这些参数写入模块。

*   在参数配置期间未修改 PAN ID。它保持为 0，因为附近只有一个 Zigbee 网络。您可能需要将两个模块的 PAN ID 更改为一个 16 位数字。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_2.png)

*   打开两个模块的 Terminal（终端）标签页，并点击 Show Hex（显示十六进制）按钮。

*   在 COORDINATOR 终端中输入一条消息，它将通过无线发送到 ROUTER。同样，在 ROUTER 终端中输入的任何文本都会发送到 COORDINATOR 终端。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_3.png)

## 使用 XBee ZB 模块和 Arduino 的无线 UART 演示

## 使用 XBee ZB 模块的无线传感器网络（WSN）演示

<!-- ### 使用 XBee ZB 模块和 [Grove - XBee Carrier](/cn/Grove-XBee_Carrier "Grove - XBee Carrier") 配置独立传感器节点

### 使用 XBee ZB 模块、Seeeduino 和 [XBee® Shield](/cn/XBee_Shield "XBee® Shield") 配置 Zigbee 协调器 -->

<!-- ### 使用 XBee ZB 模块、[Wifi Bee](/cn/Wifi_Bee "Wifi Bee") 和 [Bees Shield](/cn/Bees_Shield "Bees Shield") 将 Seeeduino 用作互联网网关 -->

## 参考资料

*   Wikipedia Zigbee 页面 - [设备类型](https://en.wikipedia.org/wiki/ZigBee#Device_types) (CC-BY-SA)

## 相关项目

如果您想使用 XBee 制作一些很棒的项目，这里有一些项目供参考。

### 蜂鸟项目

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot.JPG)

<!-- 这是一个由 XBee 和 [Grove](/cn/Grove_System "Grove System") 制作的有趣演示。 -->

该项目使用 Zigbee 网状网络和 GPRS SIM900 卡与服务器通信。服务器对数据进行分析，并为用户提供实时信息以及预测功能。

[<font color="#FF0000">**我想制作它。**</font>](https://www.seeedstudio.com/recipe/265-hummingbird.html)

### 热水太阳能锅炉项目

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot1.JPG)

<!-- 这是一个由 XBee 和 [Grove](/cn/Grove_System "Grove System") 制作的物联网演示。 -->

太阳能锅炉非常棒，因为它利用免费的太阳能为您提供热水，但如果阳光不足或者热水已经被用完怎么办？这个项目可以帮助您做出正确的决定。它会在您热水耗尽时发出警告，并允许您打开电加热器。它还会告诉您什么时候可以洗澡或淋浴！

[<font color="#FF0000">**我想制作它。**</font>](https://www.seeedstudio.com/recipe/168-hot-water-solar-boiler-project.html)

### 与我们分享您的精彩项目

怀着创造和分享的精神，这正是我们认为造物者的意义所在。

正因为如此，开源社区才能如此繁荣。

无论您是谁，无论您制作了什么，黑客、造物者、艺术家还是工程师，

只要您开始与他人分享您的作品，

您就成为了开源社区的一部分，并为其做出了贡献。

现在在 [Recipe](https://www.seeedstudio.com/recipe/) 上与我们分享您的精彩项目，并赢得成为 Seeed 核心用户的机会。

*   核心用户是那些对 Seeed 产品表现出高度兴趣并做出显著贡献的人。
*   我们与核心用户合作开发新产品，换句话说，核心用户将有机会在产品正式发布前体验 Seeed 的任何新产品，并为我们提供宝贵的反馈，帮助我们改进产品性能和用户体验。在大多数情况下，如果核心用户有任何好的创意，我们将提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

<font color="#FF0000">获取更多关于核心用户的信息，请发送邮件至：recipe@seeed.cc</font>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>