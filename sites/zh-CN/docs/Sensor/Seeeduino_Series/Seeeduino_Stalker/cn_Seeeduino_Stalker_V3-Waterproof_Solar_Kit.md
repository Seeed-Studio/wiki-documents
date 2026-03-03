---
description: Seeeduino Stalker V3 - 防水太阳能套件
title: Seeeduino Stalker V3 - 防水太阳能套件
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Stalker_V3-Waterproof_Solar_Kit
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit.JPG)

Stalker 套件是一个基于 <a href="/cn/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker_v3 </font></span></a> 的**无线传感器网络**节点**数据记录器**。Seeeduino Stalker v3 是一个功能丰富的 Arduino 兼容无线传感器网络节点。它的模块化结构和板载外设如 RTC、SD 卡接口使其能够方便地定期记录带有精确时间戳的传感器数值。Seeeduino Stalker 是您所有跟踪、监控和控制项目的理想选择。

Stalker 套件包含与 Seeeduino Stalker v3.0 配合使用的所有必要组件。Stalker 套件可以在户外使用，因为它配有塑料防水外壳。因此，如果您有一些特殊想法，甚至可以将其放入水中。该套件配有太阳能电池板和锂聚合物电池。它们可以在沙漠或丛林等偏远地区使用，仅依靠收集并存储在锂聚合物电池中的太阳能工作。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3-Waterproof-Solar-Kit-p-2441.html)

## Stalker 套件内容

---
<table>
<tr>
<th>组件</th>
<th>描述</th>
<th>数量</th>
</tr>
<tr>
<td><a href="/cn/Seeeduino-Stalker_v3"><span><font size={"3"}>Seeeduino-Stalker_v3</font></span></a></td>
<td>Arduino 兼容的 WSN 节点</td>
<td>1</td>
</tr>
<tr>
<td>锂离子聚合物电池 - 1050mAh 容量</td>
<td>通过 Stalker v3 从太阳能电池板充电</td>
<td>1</td>
</tr>
<tr>
<td>SanDisk microSD™ 卡 4GB</td>
<td>记录传感器数值和时间戳数据。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html?cPath=178_179"><span><font size={"3"}>Mini USB 线缆 100cm</font></span></a></td>
<td>作为与 UartSBee 配合使用的编程线缆</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/uartsbee-v31-p-688.html?cPath=109"><span><font size={"3"}>UartSBee V4</font></span></a></td>
<td>提供 USB-串口端口，用于通过 Arduino IDE 编程 Stalker V3</td>
<td>1</td>
</tr>
<tr>
<td>6 针线缆</td>
<td>连接 UartSBee 到 Seeduino</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/Seeeduino-Stalker-v3-enclosure-p-2419.html"><span><font size={"3"}>Seeeduino Stalker v3 外壳</font></span></a></td>
<td>防水塑料外壳</td>
<td>1</td>
</tr>
<tr>
<td>0.5w 太阳能电池板 53x53mm</td>
<td>电源</td>
<td>1</td>
</tr>
<tr>
<td>CR2032 纽扣电池</td>
<td></td>
<td>1</td>
</tr>
</table>

## 特性

---

* 由于 Seeeduino Stalker 设计用作无线传感器网络节点，如果没有配套的防水外壳就不完整。考虑到这一点，在重新设计新版本的 Seeeduino Stalker（从 v1.0 修订到 v2.0）时，我们调整了 PCB 轮廓和螺丝位置，使其能够适配这个外壳。外壳坚固且具有防水密封。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Waterproof_enclosure.jpg).

* 外壳的顶盖保持透明，以便在其内部安装太阳能电池板。为了更好的稳定性，太阳能电池板粘贴在外壳顶盖下方，如图所示：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_v3.0_1.jpg).

* 1050mAh 锂聚合物电池可以放置在外壳内 Seeeduino Stalker 下方。您可以使用螺丝和塑料支柱将其固定。

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_battery.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3_with_battery.jpg)
|---|---|

<!-- ## Application Ideas

---

* Wireless Sensor Network (using XBee - bought separately)

* GPS 日志记录（使用 [GPSBee](/cn/GPS_Bee_kit "GPS_Bee_kit") - 需单独购买）

* 能够与运行在 iPhone/Android 手机/Windows Phone 上的应用程序通信的数据采集系统（使用[BluetoothBee](/cn/Bluetooth_Bee "Bluetooth Bee") - 需单独购买）

* RF 遥控器（使用 [RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - 无线 Arduino 兼容节点") - 需单独购买）

* 作为一个简单独立的 Arduino 兼容物理计算平台（必须单独购买 [UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4") 用于编程）

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/700px-Stalker_v3.0_and_the_Bees.jpg)

poly 441 45 508 17 567 79 505 120 [UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4")

poly 75 0 353 0 353 102 75 99 [WiFiBee](/cn/Wifi_Bee "Wifi_Bee")

poly 18 105 294 107 295 203 18 203 [BluetoothBee](/cn/Bluetooth_Bee "Bluetooth Bee")

poly 2 212 274 212 275 327 2 326 [XBee](/cn/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products "使用XBee Series_2和Seeeds产品进行Zigbee网络")

poly 18 337 303 338 303 448 15 447 [GPSBee](/cn/GPS_Bee_kit "GPS_Bee_kit")

poly 38 459 379 459 379 570 37 571 [RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - 兼容Arduino的无线节点")

poly 400 55 477 106 424 147 354 97 [WiFiBee](/cn/Wifi_Bee "Wifi_Bee")

poly 307 143 336 136 398 140 392 189 333 187 318 174 302 176 [BluetoothBee](/cn/Bluetooth_Bee "Bluetooth Bee")

poly 290 238 308 221 394 214 396 271 306 283 290 265 [XBee](/cn/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products "使用XBee Series_2和Seeeds产品进行Zigbee网络")

poly 321 353 333 330 395 306 427 364 359 393 335 380 [GPSBee](/cn/GPS_Bee_kit "GPS_Bee_kit")

poly 409 464 417 432 488 389 537 445 463 498 426 491 [RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - 无线Arduino兼容节点")

聚 455 280 454 215 490 186 683 184 724 211 740 297 706 331 494 333 489 278 [Seeeduino-Stalker v3](/cn/Seeeduino-Stalker_v3 "Seeeduino-Stalker v3")

poly 570 132 573 13 802 16 803 131 [UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4")
&lt;/imagemap&gt; -->

:::note
请注意，[UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4") 无法插入到 Seeeduino Stalker 上的 Bee 系列插座中。[UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4") 用于将其他 Bee 模块（如上图所示）连接到计算机，本身不能插入到为这些其他 Bee 模块设计的插座中。UartSBee_V4 和 Seeeduino Stalker 上都有一个单独的 5 针排针用于相互连接。这个排针包含：VCC（为 Stalker 供电）、TXD、RXD、DTR（用于控制 Stalker 的复位信号）和 GND。**
:::

## 使用方法

---
<big>入门指南</big>

如果您是"物理计算"世界的新手，并且 Seeeduino Stalker 是您想要开始使用的第一个物理计算平台，那么我们建议您从 <a href="/cn/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino </font></span></a> 开始。

以下步骤将帮助您组装硬件和软件资源，让您开始使用 Seeeduino Stalker v3

**步骤 1：获取硬件**

运行您的第一个程序需要以下硬件。

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeed_Stalker_v3-6.png)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Uartsb40.jpg)|
|:---:|:---:|
|**Seeeduino Stalker v3** [点击购买](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)|**UartsBee v4.0** 编程 Seeeduino Stalker 所需。[点击购买](https://www.seeedstudio.com/uartsbee-v31-p-688.html)|

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit_5pin_cable.jpg)|
|---|---|
|**Mini USB 数据线** 您可能已经有一根了，如果没有，可以在[这里](https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html)购买。我们将使用它将 UartSBee_V4 连接到计算机的 USB 端口之一。|**6 针双母头跳线** 连接 UartSBee_V4 到 Seeeduino Stalker 所需。您的工作台上可能已经有一些了。如果没有，您可以在[这里](https://www.seeedstudio.com/6-pin-dualfemale-jumper-wire-100mm-5-PCs-pack-p-129.html)购买彩色的。

**步骤 2：安装驱动程序并连接硬件**

1. [UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4") 就像物理计算世界的多功能瑞士军刀。[这里](/cn/UartSBee_V4 "UartSBee_V4")有针对 Windows 和 GNU/Linux 用户使用 UartSBee_V4 的详细程序。在我们的情况下，它将执行三个功能：
    * 允许我们对 Seeeduino Stalker 进行编程。
    * 允许我们与 Seeeduino Stalker 通信。
    * 为 Seeeduino Stalker（包括连接到它的任何外设）提供电源（来自计算机的 USB 电源）。

2. UartSBee_V4 的前两个功能（编程和通信）通过其上的集成电路 FT232RL 实现。在 FT232RL 可以用于这些目的之前，必须在您的 Windows/Ubuntu PC 上安装其驱动程序（来自 FT232RL 制造商的某些免费可用程序）。因此，在继续之前，请从[这里](https://www.ftdichip.com/Drivers/CDM/CDM20802_Setup.exe)下载驱动程序安装文件并将其安装在您的 Windows PC 上。

3. UartSBee_V4 有一个板载电压调节器和一个开关，允许您选择要向目标电路板提供的电压（5.0V 或 3.3V）。在我们的情况下，目标电路板是 Seeeduino Stalker，因此您需要将此滑动开关设置为 5.0 伏特

4. 我们硬件的接线连接方案是 **"<font color="Navy">计算机</font><font color="Grey">→（Mini USB 数据线）→</font><font color="Navy">UartSBee </font><font color="Grey">→（扁平带状电缆）→</font><font color="Navy">Seeeduino Stalker</font>"**。在将 UartSBee_V4 连接到计算机之前，必须在 UartSBee_V4 和 Seeeduino Stalker 之间连接跳线。参考下面的照片，确保信号线按表中所示对齐（**注意：TXD 和 RXD 引脚必须如表中所示交叉连接**）。

5. 接下来将 Mini USB 数据线从 UartSBee_V4 连接到您的计算机。如果您使用的是基于 Windows 的 PC，将弹出"发现新硬件"气球，几分钟内将安装 FT232RL（即 UartSBee_V4）的驱动程序。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_Uartsbee_4.0_Connection.jpg)

Seeeduino Stalker v3 &lt;---&gt; UartSBee v4.0 连接

<table>
<caption>跳线连接</caption>
<tr>
<th>Seeeduino Stalker</th>
<th>UartSBee_V4</th>
</tr>
<tr>
<td>USB5V</td>
<td>VCC</td>
</tr>
<tr>
<td><font color="Red">RXD</font></td>
<td><font color="Green">TXD</font></td>
</tr>
<tr>
<td><font color="Green">TXD</font></td>
<td><font color="Red">RXD</font></td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>DTR</td>
<td>DTR</td>
</tr>
</table>

<big>连接注意事项 </big>

* **Bee系列插座** - 2*10针脚2.0mm间距（可以与任何一个[无线模块](/cn/Wifi_Bee "Wifi_Bee")配合使用 - 一次一个：[XBee](/cn/XBee_Shield "Zigbee Networking with XBee Series_2 and Seeeds Products")、[BluetoothBee](/cn/Bluetooth_Bee "Bluetooth Bee")、[GPSBee](/cn/GPS_Bee_kit "GPS_Bee_kit")或[RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")。）与这些模块的通信通过UART完成。
* **串行接口** – 为了节省空间和降低成本，默认情况下不提供USB&lt;-&gt;串行连接。您可以使用基于FT232的[UartSBee_V4](/cn/UartSBee_V4 "UartSBee_V4")或其他USB转串行适配器板来进行编程或与PC通信。
* **用户LED** – 板载提供了一个LED，可根据需要在您的应用中使用。
* **I<sup>2</sup>C接口**：板载I<sup>2</sup>C电平转换IC提供3.3V和5V设备之间的电压转换。这允许您在微控制器工作在3.3V时连接5.0V的I<sup>2</sup>C IC。

## 编程示例

---

* 下载并安装资源部分提供的DS1337库和示例。DS1337库包含由[JeeLabs](http://jeelabs.net/projects/cafe/wiki/)的Jean-Claude Wippler修改的DateTime类版本

* 数据记录器演示示例使用Arduino SD库。

<big>调整日期/时间</big>

* 将Arduino板设置为`**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从DS1337库打开**adjust.ino**示例

* 在示例中使用DateTime类对象**dt**设置当前日期/时间：

  * `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`

    * **例如：** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* 编译并上传到<a href="/cn/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_adjust.png)

**adjust.ino输出**

获取当前日期/时间

* * *

* 将Arduino板设置为`**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从DS1337库打开**now.ino**示例

* 使用` RTC.now() `函数从DS1337读取当前日期/时间。

  * **例如：`DateTime now = RTC.now();`**

* 编译并上传到<a href="/cn/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_now.png)

**now.ino输出**

DS1337中断

此示例演示了从DS1337 INT输出检测中断。此功能对于数据记录器功能很有用，其中MCU在不使用时进入睡眠模式，DS1337 INT定期唤醒CPU。这延长了电池寿命。完整的操作在代码中有文档说明。

* 焊接P3跳线。

  * 这将DS1337中断输出引脚连接到ATmega328 INT0引脚。

* 将Arduino板设置为`**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从DS1337库打开**interrupts.ino**示例

* 编译并上传到<a href="/cn/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_interrupt.png)
**interrupts.ino输出**

数据记录器示例

* * *

Seeeduino Stalker v3.0的主要应用是记录传感器信号（如电池电压等）的数据以及时间戳。这些示例在不执行数据采样/记录操作时将MCU置于睡眠模式。完整的实现在代码中有很好的文档说明。以下部分给出了概述：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_SolarPanel.jpg)

**数据记录器示例硬件设置**

1. **StalkerV30_DataLogger_10Sec.ino**

    * 此示例将电池电压数据记录到SD卡，由**`RTC.enableInterrupts(_h, m, s_)`**函数配置。
    * _周期性_通过h、m和s提供。一旦检测到中断，下一个中断时间通过推进h、m和s值来更新。DateTime类在这方面很有用。

        * 例如：`interruptTime = DateTime(interruptTime.get() + interruptInterval);  //决定下一次中断的时间`

        * 此示例还产生详细输出，即MCU内部发生的各种事件显示在串行终端中。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3.0_datalogger_flowchart.png)

**数据记录器实现概述**

## 资源

---

* [Seeeduino Stalker 各版本之间的比较](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker)

* [SD卡读取mini-USB线缆，胶囊式](https://www.seeedstudio.com/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=77)

## 技术支持与产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>