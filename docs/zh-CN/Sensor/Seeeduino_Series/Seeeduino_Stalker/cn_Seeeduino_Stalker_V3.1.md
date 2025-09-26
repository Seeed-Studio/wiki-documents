---
description: Seeeduino Stalker V3.1
title: Seeeduino Stalker V3.1
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Stalker_V3.1
last_update:
  date: 1/31/2023
  author: shuxu hu
---

也许您对 Seeeduino stalker 系列非常熟悉，或者您对这个功能丰富的无线传感器网络节点完全陌生。无论您处于哪种情况，如果您要制作户外数据记录应用，您会发现 Seeeduino Stalker 是最好的开发板。

创建这个系列的主要目的是制作一个 X-bee 载板，以便用户可以更方便地制作户外应用。自从 2009 年发布第一个版本以来，Seeeders 一直在不断收集用户反馈并持续升级开发板。在过去的 7 年中曾经存在过 6 个版本，今年夏天我们很兴奋地发布 Seeeduino stalker 家族最新的成员----Seeeduino Stalker V3.1。

Seeeduino Stalker V3.1 不仅仅是 V3.0 的简单更新。您会发现这块开发板的主要惊喜是令人印象深刻的低功耗，在睡眠模式下，整个开发板的输出电流将低至 100uA，这是一个真正源于用户反馈的升级。（我们真的很关心您的意见）。让我们看看我们是如何实现的。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/cover.JPG)

### 版本追踪

|版本|发布日期|如何购买|
|--------|-----------|-----------|
|Seeeduino Stalker V1.0|2009年12月23日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.0|2010年12月10日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.1|2011年10月3日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.2|2011年12月27日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.3|2013年1月10日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.0|2014年6月6日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.1|2016年7月10日|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|

### Seeeduino Stalker V3.1 的新特性

**改进电源管理**

在 V3.1 中，当 MCU 处于睡眠模式时，所有其他电源供应，包括 Bee 区域端口、3.3v 端口、VCC 都可以手动切断，这样就能真正节省电源。

**其他变化**

在 X-bee 区域添加了一个拨动开关，允许您根据要连接的内容选择硬件串口或软件串口。

我们还在 RTC 电路上添加了 2 个拨动开关，对应 MCU 的 2 个 INT 引脚，这样用户可以轻松选择哪个 INT 引脚与 RTC INT 端口连接，然后激活 MCU。

## 功能特性

----

- Arduino UNO 兼容引脚布局，配备 Arduino Fio 引导程序
- 锂电池管理 IC 和太阳能充电输入（jst2.0 连接器）
- 板载实时时钟芯片 **DS1337S**（CR1220 纽扣电池插座，作为 RTC 的备用电源）
- 串行接口带 DTR，在独立模式下编程时可自动复位
- microSD 卡插座
- Grove 连接器（工作电压可选：5.0V 或 3.3V）
- XBee 模块和 ATMega328P 的复位按钮
- Bee 系列插座 2*10 针 2.0mm 间距

## 规格参数

----

|参数              |值          |
|-------------------    ----|---------------|
|微控制器         |Atmega328P        |
|时钟速度              |8 MHz             |
|I/O 电压              |3.3V              |
|RTC                      |DS1337S        |
|Arduino IDE 开发板    |Arduino Pro or Pro Mini (3.3v , 8 MHz)w/ATmega328    |
|电源供应            |3.7v 锂电池，使用 5VDC 太阳能板为电池充电|
|电源连接器        |2 针 JST/ USB|
|连接性            |I2C, UART, SPI|
|SD 卡                   |micro SD 卡 |
|开路电流    |最大 6 mA|
|充电电流        |300mA|
|3.3v 端口最大电流 |    800mA|
|PCB 尺寸             |86.74mm x 60.96mm|

## 应用创意

----

- 无线传感器网络（使用单独购买的 **XBee**）
- GPS 记录（使用单独购买的 [GPSBee](https://www.seeedstudio.com/wiki/GPS_Bee_kit)）
- 数据采集系统，能够与运行在 iPhone/Android 手机上的应用程序通信（使用单独购买的 [BluetoothBee](https://www.seeedstudio.com/wiki/Bluetooth_Bee)）
- RF 遥控（使用单独购买的 [RFBee](https://wiki.seeedstudio.com/cn/RFbee_V1.1-Wireless_Arduino_compatible_node/)）
- 作为简单的独立 Arduino 兼容物理计算平台

## 硬件概述

----

### 概述

Seeeduino Stalker V3.1 是一款功能丰富的应用板。RTC、锂电池连接器、Bee 插座和 SD 卡插座等。下面的概述图将介绍板子的各个部分，帮助您更好地了解这块板子。

[![点击查看大图](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)

| 名称 | 功能|
|-------|-------------------------------------|
|RTC BATTERY | 为 DS1337S 供电的纽扣电池  |
|RTC_INT | RTC 中断开关|
|Bee Serial Select|Bee RX/TX 引脚选择，您可以选择 D0/D1 或 D6/D7|
|Bee Socket|插入 Bee|
|CHARGE STATUS LED|**OK**：绿色 LED，充电完成时点亮。**CH**：红色 LED，充电时点亮|
|BEE RST|复位 Bee|
|SOLAR|太阳能输入为电池充电，输入 4.5~6V|
|LIPO |锂电池输入，3.7V|
|L|连接到 D13 的 LED，可作为监视器|
|GROVE2|Grove 端口，连接到 I2C|
|GROVE1|Grove 端口，连接到 D7/8|
|PROGRAM|编程端口，在此连接 UartSBee|
|RST|复位 Atmega328P|
|SD CARD|micro SD 卡插座|

### 引脚图

Seeeduino Stalker V3.1 与 Arduino 兼容，有许多模拟引脚、数字引脚以及串行引脚可用于制作您自己的应用程序。下面的引脚图将帮助您确定哪些引脚是空闲的或未使用的，以及已使用的引脚。

[![点击查看大图](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)

## 开始使用

----
如果这是您第一次使用 Seeeduino Stalker 进行编程，您可以按照以下步骤开始使用。在开始之前，请确保您手头有以下物品：

|Seeeduino Stalker V3.1|UartSBee V4|Mini USB 线缆|6针线缆|
|----------------------|-----------|--------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_stalker.JPG)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_uartsbee.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_6pincable.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|[立即购买](https://www.seeedstudio.com/UartSBee-V4-p-688.html)|[立即购买](https://www.seeedstudio.com/Mini-USB-cable-100cm-p-252.html)|[立即购买](https://www.seeedstudio.com/6-pin-dual-female-jumper-wire-300mm-(5-PCs-pack)-p-128.html)|

:::note
    UartSBee V4、Mini USB 线缆和 6 针线缆不包含在内。
:::

### 步骤1：连接

首先通过 6 针跳线将 Stalker 连接到 UartSBee，然后通过 mini USB 线缆将 UartSBee 连接到 PC。

|Seeeduino Stalker|UartSBee V4|
|-----------------|-----------|
|    DTR              |    DTR          |
|    TXD              |    RXD          |
|    RXD              |    TXD          |
|    5V               |    VCC          |
|    GND              |    GND          |

:::note
    UartSBee V4 上的电源开关设置为 5V
:::

### 步骤2：UartSBee 和驱动程序

UartSBee 是一个基于 FDTI 的 FT232RL 的 USB 转串口 UART 接口。点击下载该板的[驱动程序](https://www.ftdichip.com/FTDrivers.htm)。

在我们的案例中，它将执行三个功能：

- 对 Seeeduino Stalker 进行编程。
- 与 Seeeduino Stalker 通信。
- 为 Seeeduino Stalker（包括连接到它的任何外设）提供电源（来自 PC 的 USB 电源）。

### 步骤3：Arduino IDE

Seeeduino Stalker 是一个功能丰富的 Arduino 兼容板。如果您没有 Arduino IDE，您需要下载最新的 Arduino 软件来对板子进行编程。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

### 步骤4：将 Seeeduino Stalker 添加到您的 Arduino IDE

在您的 Arduino IDE 的板子选项中没有 *Seeeduino Stalker* 选项，请点击[如何将 Seeed 板子添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 查看说明。

### 步骤5：闪烁

这里我们将向 Stalker 上传一个简单的代码。打开您的 Arduino IDE，打开 **File > Examples > Basics > Blink**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/arduino_blink.png)

然后点击上传按钮，几秒钟后上传完成，检查板子上的 **L**，它将以 1 秒的频率闪烁。

### Stalker V3.1 的示例

Seeeduino Stalker V3.1 有许多示例，包括：

- 读取电池电压的示例
- 读取充电状态的示例
- 数据记录示例
- RTC 库和一些示例
- 睡眠相关功能

## RTC

板载有一个 DS1307S 和一个 3V 纽扣电池，即使在板子没有电源供应的情况下也能保持时间超过 3 年。DS1307S 的库已包含在 Stalker 的示例代码中。

### 调整日期/时间

打开 Arduino IDE，然后 **File > Sketchbook > RTC > Adjust**，然后使用示例中的 DateTime 类对象 **dt** 设置当前日期/时间：

    DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));
    Ex:- DateTime dt(2015, 10, 1, 11, 43, 0, 4);

编译并上传到 Stalker，然后时间就设置好了。

### 获取当前日期/时间

打开 Arduino IDE，然后 **File > Sketchbook > RTC > Now**，当前日期/时间通过 **RTC.now()** 函数从 DS1337 读取。

    Ex:- DateTime now = RTC.now();

编译并上传到 Stalker，然后打开串口监视器，你将看到日期和时间显示：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/rtc_now.png)

### DS1337 中断示例

这个示例演示了从 DS1337 INT 输出检测中断。这个功能对于数据记录器功能很有用，当不使用时 MCU 进入睡眠模式，DS1337 INT 定期唤醒 CPU。这延长了电池寿命。完整的操作在代码中有文档说明。

DS1337 有 2 个 INT 输出，INTA（连接到 **D2**）和 INTB（连接到 **D3**）。有一个开关来连接 INTA/INTB 和 D2/D3，如果你不需要中断，你可以关闭开关并节省 1 或 2 个 I/O。开关如下：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/RTC_INT_SELECT.png)

打开 Arduino IDE，然后 **File > Sketchbook > RTC > interrupts**，这个示例将每分钟产生一个中断。如果你需要其他类型的闹钟，请参考代码。

## SD 卡

有一个 micro SD 卡插槽，你可以插入一个 micro SD 卡来存储一些数据。Stalker 通过 SPI 接口读写 SD 卡。Arduino IDE 内有足够的示例使用 SD 库来操作 SD 卡。
打开你的 Arduino IDE，**File > Examples > SD**，你将得到许多示例。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/sd_cs.png)

:::note
    CS 引脚连接到 Stalker 的 D10，所以你需要在示例中将 CS 引脚改为 D10。
:::

## 电源管理器

Stalker 内置了锂电池管理电路。示例代码中提供了两个有用的功能。

### 读取锂电池电压

打开 Arduino IDE，**File > Sketchbook > ReadBattery** 打开示例。

电池电压与电池容量相关。下面是一个参考，但请注意这不适用于每个电池，对于特定电池，数据可能略有不同。

|容量(%)|100%| 80% | 60% | 40% | 20% | 0% |
|-----------|----|-----|-----|-----|-----|----|
|**电压(V)**|4.20|4.00 |3.87 |3.79 |3.73 |3.00|

### 获取充电状态

打开 Arduino IDE，**File > Sketchbook > ReadChageStatus** 打开示例。这个功能将返回 3 种状态：

    0: 没有插入电池
    1: 充电中
    2: 充电完成

## Bees

Bees 是一系列具有丰富功能的模块。例如 Wi-Fi、BLE、GPS 以及 RF 等。通过 XBee，Stalker 可以作为具有通信功能的节点。一个 Stalker 与另一个 Stalker 通信不再是不可能的。如果您需要更多关于 Bees 的详细信息，以下是一些参考资料。

|Bluetooth Bee |XBee Wi-Fi PCB Antenna| RFbee V1.1|
|---|---|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee3.jpg)|
|[立即购买](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)    |<a href="https://www.seeedstudio.com/XBee-Wi-Fi-PCB-Antenna-S6-p-1114.html">立即购买</a> |[立即购买](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

|Bluetooth Bee - Standalone|GPS Bee kit|Mesh Bee|
|:---:|:---:|:---:|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee6.jpg)|
|[立即购买](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)    |<a href="https://www.seeedstudio.com/GPS-Bee-kit-(with-Mini-Embedded-Antenna)-p-560.html">立即购买</a> |<a href="https://www.seeedstudio.com/Mesh-Bee-Open-Source-Zigbee-Pro-Module-with-MCU-(JN5168)-p-1751.html">立即购买</a>|

:::note

- 您需要为 Bee 选择串行引脚，D0/D1 和 D5/D6 可用。请参考硬件概述获取更多信息。
- D9 控制 Bee 插座的 Vcc 电源，如果您需要为 Bee 供电，您应该将 D9 设置为 HIGH：digitalWrite(9, HIGH)，并且不要忘记在 Setup 中添加 pinMode(9, OUTPUT)。
:::

## 数据记录器示例

-----
Seeeduino Stalker v3.0 的主要应用是记录传感器信号（如电池电压等）的数据以及时间戳。此代码在不执行数据采样/记录操作时将 MCU 置于睡眠模式。完整的实现在代码中有很好的文档说明。

打开 Arduino IDE，**File > Sketchbook > StalkerV30_DataLogger_10Sec** 打开示例。

- 此代码将电池电压数据记录到由 RTC.enableInterrupts(h, m, s) 函数配置的 SD 卡中。
- 周期性由 h、m 和 s 提供。一旦检测到中断，下一个中断时间通过推进 h、m 和 s 值来更新。DateTime 类在这里很有用。
- 例如：interruptTime = DateTime (interruptTime.get() + interruptInterval); //决定下一次中断的时间
- 此代码还产生详细输出，即 MCU 内部发生的各种事件会显示在串行终端中。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/data_log_example.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
**原理图**

- [**Eagle** 格式原理图](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip)
- [**PDF** 格式原理图](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/Seeeduino%20Stalker%20v3.1.pdf)

**数据手册**

- [DS1307](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/ds1307.pdf)
- [CN3065](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/DSE-CN3065.pdf)
- [ETA3406](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/eta3406.pdf)
- [示例代码库](https://github.com/Seeed-Studio/Sketch_Stalker_V3_1)

## 常见问题

----

以下是我们通常从新用户那里收到的一些问题。如果您在使用 Seeeduino Stalker V3.1 时遇到任何其他问题，欢迎访问 [Arduino 社区](https://community.seeedstudio.com/discover.html?t=Arduino)，那里有许多专业用户等待为您提供建议，也有许多高级用户提供关于如何使用此产品的大量想法！

**Q1:** 断电重新上电后，RTC 重置为原始时间。
> 当系统没有电源时，有一个纽扣电池为 RTC 供电。纽扣电池应该至少能持续 3 年。您可以检查纽扣电池是否已耗尽。

**Q2:** 我无法将程序上传到 Stalker V3.1
> 首先，检查您的 USB-UART 是否正确连接到 Stalker，然后检查是否选择了正确的端口号和开发板（**Arduino Fio** 或 **Arduino Arduino Pro or Pro Mini (3.3v , 8 MHz)w/ATmega328**）。最后，如果您在插座上插入了 Bee 模块且 RX/TX 选择为 D0/D1，在上传程序时应该取下 bee 模块。

**Q3:** RTC 中断示例不工作，我无法获得任何中断。
> 首先，检查是否正确设置了闹钟时间，不要忘记将 RTC_INT 开关拨到右侧。

**Q4:** 太阳能电池板无法为锂电池充电。
> 确保您的太阳能电池板能够提供 4.5~6V 电压。

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