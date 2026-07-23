---
description: 适用于 Seeed Studio XIAO 且带有嵌入式电池管理芯片的 Grove 扩展板
title: 适用于 XIAO 且带有电池管理芯片的 Grove 扩展板
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
sku: 103020312
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-20'
url: https://wiki.seeedstudio.com/cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概述

Seeed Studio Grove Base for XIAO 是一款适用于 **[Seeed Studio XIAO](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/)** 的即插即用 Grove 扩展板。借助板载电池管理芯片和电池焊盘，你可以轻松使用锂电池为 Seeed Studio XIAO 供电并对其充电。板载 8 个 Grove 接口，其中包括 2 个 Grove I2C 和 1 个 UART。它充当 Seeed Studio XIAO 与 Seeed Grove 系统之间的桥梁。Flash SPI 焊盘允许你为 Seeed Studio XIAO 增加 Flash 以扩展其存储空间，为 Seeed Studio XIAO 提供更多可能性。

借助板载电池管理芯片和电池焊盘，你可以轻松使用 3.7V 锂电池为 Seeed Studio XIAO 供电并对其充电，使你的项目，尤其是可穿戴项目，更加灵活便携。你甚至可以根据项目的实际需求，通过板载 PCB 预留的断开孔将电路板掰断（断开后尺寸仅为 25*39mm），使其变得更小更轻，重量也会从 13g 降低到 10g！
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

作为一块扩展板，Seeed Studio Grove Base for XIAO 还引出了 Seeed Studio XIAO 的全部 14 个引脚，并配备了板载电源开关和充电状态指示灯，使其更加易于使用。该 Shield 甚至为高级开发者预留了 SPI-Flash 焊盘，以便在需要时为 Seeed Studio XIAO 增加 Flash 来扩展其存储空间，为 Seeed Studio XIAO 提供更多可能性。

由于采用 Seeed Studio XIAO 外形尺寸，所有 Seeed Studio XIAO 板都同时支持 [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。引脚之间存在轻微差异，参考引脚图即可轻松进行管理。

:::note
本产品不包含 Seeed Studio XIAO 开发板，如需购买，请点击[这里](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

#### 硬件总览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### 引脚说明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 特性

- 板载锂电池充电与管理功能
- Grove 接口（Grove IIC x 2，Grove UART x 1），全部 14 个 GPIO 引出
- 紧凑且可掰断设计
- 预留 Flash SPI 焊盘
- 板载电源开关和充电状态指示灯

## 规格参数

|项目|参数|
|---|---|
|工作电压|3.3V / 3.7V 锂电池|
|负载能力|800mA|
|充电电流| 500mA（最大）|
|工作温度|- 40°C 至 85°C|
|存储温度|-55°C 至 150°C|
|Grove 接口|I2C *2 / UART* 1|

## 应用

- 可穿戴设备
- 快速原型开发
- Grove 模块测试
- 对尺寸要求较小的项目

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 所需材料

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Grove-Doppler Radar 外部排针引脚说明

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|引脚编号|信号名称|引脚描述|
|---|---|----|
|1| DIV_OUT |来自 BGT24LTR11 的分频器输出|
|2|GND|地|
|3|VCC_5V_EXT|外部 +5.0V 输入电源引脚（最大=5.5V）|
|4|VTUNE|VCO 频率调谐电压|
|5|IFQ_HG|BGT24LTR11 Q 通道模拟信号输出——第二级增益|
|6|IFI_HG|BGT24LTR11 I 通道模拟信号输出——第二级增益|
|7|PWM_OUT|带 CCU4 的外部用户可配置 GPIO|
|8|OUT1|外部 GPIO 引脚（用户可配置）|
|9|OUT2|外部 GPIO 引脚（用户可配置）|

### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
请轻轻插入 USB 线缆和 Doppler Radar 接口到 Seeed Studio XIAO 扩展板接口中，否则可能会损坏接口。
:::

- **步骤 1.** 使用一根 Grove 线缆，将 Doppler Radar 插入 Seeed Studio XIAO 扩展板。

- **步骤 2.** 通过 USB 线缆将 Seeed Studio XIAO 连接到电脑。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在 Arduino IDE 中 **Serial Monitor** 的屏幕上。

### 软件

:::note
如果这是你第一次使用 Arduino，我们强烈建议你在开始之前先阅读[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载[示例代码](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar)。

- **步骤 2.** 将整个 **Seeed_Arduino_DopplerRadar** 文件复制并粘贴到 Arduino IDE 的库文件夹中。

- **步骤 3.** 使用 Arduino IDE 打开 **BGT24LTR11_DETECTION_TARGET** 文件。

- **步骤 4.** 上传示例程序。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

#### 软件代码

```cpp
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // put your setup code here, to run once:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->detection target mode
        MODE 1 -->I/Q ADC mode
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // put your main code here, to run repeatedly:
    uint16_t state = 0;
    ShowSerial.print("target speed:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> target approach
    //1 --> target leave
    //0 --> Not Found target
    if (state == 2) {
        ShowSerial.println("target approach");
    } else if (state == 1) {
        ShowSerial.println("target leave");
    }
    delay(200);
}
```

:::success
  如果一切顺利，你可以打开 **Serial Monitor**，看到如下结果：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i> 无物体接近</i></figcaption>
  </figure>
</div>

如果有物体接近雷达或从旁经过，结果会变为如下所示：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i>物体接近</i></figcaption>
  </figure>
</div>

:::note
该传感器能够检测到的最低速度精度为 52cm/s，即 0.52m/s、3.6km/h 和 2.23mph。此外，函数 getSpeed() 返回的结果是 52cm/s 的倍数，并且是相应的绝对值。
:::

## 资源

- **[ZIP]** [示例代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) 雷达模块通信协议 v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 数据手册](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)
- **[ZIP]** [Grove Shield for Seeeduino XIAO v1.2 原理图和 PCB（KiCad）](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.2_KiCad_SCH_PCB.zip)
- **[PDF]** [Grove Shield for Seeeduino XIAO v1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0_SCH.pdf)

## 项目

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
