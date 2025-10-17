---
description: 带有嵌入式电池管理芯片的 Seeed Studio XIAO Grove 扩展板
title: 带有电池管理芯片的 XIAO Grove 扩展板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 1/10/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概述

Seeed Studio Grove Base for XIAO 是一款即插即用的 Grove 扩展板，专为 **[Seeed Studio XIAO](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/)** 设计。通过板载电池管理芯片和电池焊接焊盘，您可以轻松使用锂电池为 Seeed Studio XIAO 供电并进行充电。板载 8 个 Grove 连接器，包括两个 Grove I2C 和一个 UART。它充当 Seeed Studio XIAO 和 Seeed 的 Grove 系统之间的桥梁。Flash SPI 焊接焊盘允许您为 Seeed Studio XIAO 添加 Flash 以扩展其内存空间，为 Seeed Studio XIAO 提供更多可能性。

通过板载电池管理芯片和电池焊接焊盘，您可以轻松使用锂 3.7V 电池为 Seeed Studio XIAO 供电并进行充电，使您的项目，特别是可穿戴项目，更加灵活和便携。您甚至可以根据项目的实际需要通过板载 PCB 邮票孔掰断电路板（掰断后尺寸仅为 25*39mm），使其比小更小，重量也会从 13g 减少到 10g！
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

作为扩展板，Seeed Studio Grove Base for XIAO 还引出了 Seeed Studio XIAO 的所有 14 个引脚，其板载电源开关和充电状态指示灯使其更加用户友好。该扩展板甚至为可能需要为 Seeed Studio XIAO 添加 Flash 以扩展其内存空间的高级开发者预留了 SPI-Flash 焊接焊盘，为 Seeed Studio XIAO 提供更多可能性。

作为 Seeed Studio XIAO 外形规格，所有 Seeed Studio XIAO 板都支持 [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。引脚之间存在细微差异，参考引脚图很容易管理。

:::note
本产品不包含 Seeed Studio XIAO 板，如果您需要，请点击[这里](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

#### 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### 引脚说明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 特性

- 板载锂电池充电和管理功能
- Grove 连接器（Grove IIC x 2，Grove UART x 1），所有 14 个 GPIO 引出
- 紧凑可分离设计
- 预留 Flash SPI 焊盘
- 板载电源开关和充电状态指示灯

## 规格

|项目|值|
|---|---|
|工作电压|3.3V / 3.7V 锂电池|
|负载能力|800mA|
|充电电流| 400mA（最大）|
|工作温度|- 40°C 至 85°C|
|存储温度|-55°C 至 150°C|
|Grove 接口|I2C *2 / UART* 1|

## 应用

- 可穿戴设备
- 快速原型制作
- Grove 模块测试
- 需要小尺寸的项目

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 所需材料

| Seeed Studio Seeed Studio XIAO | Grove-多普勒雷达| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[立即购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Grove-多普勒雷达的外部引脚描述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|引脚编号|信号名称|引脚描述|
|---|---|----|
|1| DIV_OUT |来自BGT24LTR11的分频器输出 |
|2|GND|接地|
|3|VCC_5V_EXT|外部+5.0V输入电源引脚（最大值=5.5V）|
|4|VTUNE|VCO频率调谐电压|
|5|IFQ_HG|BGT24LTR11 Q通道模拟信号输出-第二增益级|
|6|IFI_HG|BGT24LTR11 I通道模拟信号输出-第二增益级|
|7|PWM_OUT|带CCU4的外部用户可配置GPIO|
|8|OUT1|外部GPIO引脚（用户可配置）|
|9|OUT2|外部GPIO引脚（用户可配置）|

### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
请轻柔地将USB线缆、多普勒雷达接口插入Seeed Studio XIAO扩展板接口，否则可能会损坏端口。
:::

- **步骤 1.** 使用Grove线缆将多普勒雷达插入Seeed Studio XIAO扩展板。

- **步骤 2.** 通过USB线缆将Seeed Studio XIAO连接到PC。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在Arduino IDE的**串口监视器**屏幕上。

### 软件

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载[演示代码](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar)。

- **步骤 2.** 复制整个**Seeed_Arduino_DopplerRadar**文件并将其粘贴到您的Arduino IDE库文件中。

- **步骤 3.** 使用Arduino IDE打开**BGT24LTR11_DETECTION_TARGET**文件。

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

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
  如果一切顺利，您可以前往**串口监视器**查看如下结果：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i> 无物体接近</i></figcaption>
  </figure>
</div>

如果有物体接近雷达或经过，结果将如下所示：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图 3</b>. <i>物体接近</i></figcaption>
  </figure>
</div>

:::note
传感器能够检测到的最小速度精度为52cm/s，相当于0.52m/s、3.6km/h和2.23mph。此外，函数getSpeed()返回的结果是52cm/s的倍数，并且相应地是绝对值。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Seeed Studio Grove Base for XIAO 附件](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [演示代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) 雷达模块通信协议 v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 数据手册](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## 项目

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

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
