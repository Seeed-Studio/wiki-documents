---
description: 带嵌入式电池管理芯片的Seeed Studio XIAO Grove扩展板
title: 带有电池管理芯片的XIAO Grove扩展板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 10/29/2023
  author: 金 菊
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>


Seeed Studio Grove Base for XIAO是适用于 **[Seeed Studio XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)** 的即插即用的Grove扩展板。借助板载的电池管理芯片和电池接点，您可以轻松使用锂电池为Seeed Studio XIAO供电并进行充电。扩展板上有8个Grove连接器，包括两个Grove I2C和一个UART接口。它充当了Seeed Studio XIAO和Seeed的Grove系统之间的桥梁。Flash SPI接点使您可以向Seeed Studio XIAO添加Flash以扩展其内存空间，为Seeed Studio XIAO提供更多可能性。

通过板上的电池管理芯片和电池接点，您可以轻松使用锂电池为Seeed Studio XIAO供电并进行充电，使您的项目，特别是可穿戴设备项目更加灵活和便携。您甚至可以根据项目的实际需求通过板上的PCB标记处断开板子（断开后尺寸仅为25*39毫米），使其变得更小，重量从13克减少到10克！
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

作为扩展板，Seeed Studio XIAO的Grove基板还能够引出Seeed Studio XIAO的全部14个引脚，并且其板载电源开关和充电状态指示灯使其更加用户友好。该扩展板甚至为高级开发人员预留了SPI-Flash连接点，这可能需要向Seeed Studio XIAO添加Flash以扩展其内存空间，为Seeed Studio XIAO提供更多可能性。

作为Seeed Studio XIAO的尺寸标准，所有Seeed Studio XIAO板都支持 [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。这两种扩展板之间的引脚略有不同，但通过查看引脚图，很容易管理。

:::请注意：此产品不包含Seeed Studio XIAO开发板，如果您需要购买，请点击 [此处](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 特点

- 板载锂电池充电和管理功能
- Grove连接器（Grove IIC x 2，Grove UART x 1），所有14个GPIO引脚引出
- 紧凑且可拆卸的设计
- 保留了Flash SPI连接点
- 板上电源开关和充电状态指示灯

## 规格

|项目|值|
|---|---|
|工作电压|3.3V / 3.7V 锂电池|
|负载容量|800mA|
|充电电流| 400mA (Max)|
|工作温度|- 40°C 到 85°C|
|储存温度|-55°C 到 150°C|
|Grove接口|I2C *2 / UART* 1|

## 应用领域

- 可穿戴设备
- 快速原型设计
- Grove模块测试
- 需要小尺寸的项目

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 所需材料

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-雷达| Seeed Studio XIAO专用Grove基座|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[点击购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[点击购买](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[点击购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

### 硬件概述

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></a></p> -->

如果您需要在Seeed Studio XIAO Grove 扩展板的背面使用SOIC8封装的Flash存储器，请焊接PIN1引脚。

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

####  Seeed Studio XIAO Grove扩展板的外部引脚描述

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO (xin).png.jpg" border={0} /></a></p> -->

#### Grove-Doppler 雷达的外部引脚描述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|引脚编号|信号名称|引脚描述|
|---|---|----|
|1| 分频输出 |BGT24LTR11的频率分频器输出 |
|2|GND|接地|
|3|外部+5V电源|外部+5.0V输入电源供应引脚（最大值=5.5V）|
|4|调谐电压|VCO频率调谐电压|
|5|IFQ_HG|BGT24LTR11的Q通道是指模拟信号输出的一路，它经过第二级增益放大|
|6|IFI_HG|BGT24LTR11的I通道是指模拟信号输出的一路，它经过第二级增益放大|
|7|脉宽调制输出|指带有CCU4功能的外部可配置GPIO|
|8|输出1|外部GPIO引脚（用户可配置）|
|9|输出2|外部GPIO引脚（用户可配置）|

### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::提示
请小心地将USB电缆插入Seeed Studio XIAO扩展板接口，否则可能会损坏端口。
:::

- **第一步.** 使用Grove电缆将多普勒雷达插入Seeed Studio XIAO扩展板。

- **第二步.** 使用USB电缆将Seeed Studio XIAO连接到电脑。

- **第三步.** 请下载代码，请参考软件部分。

- **第四步.** 运行代码后，结果将显示在Arduino IDE的 **串行监视器** 屏幕上 。

### 软件

:::注意
如果这是您第一次使用Arduino，我们强烈建议您在开始之前参阅 [Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) 。

- **第一步.** 下载 [演示代码](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar)。

- **第二步.** 将整个 **Seeed_Arduino_DopplerRadar** 文件复制并粘贴到您的Arduino IDE库文件夹中。

- **第三步.** 使用Arduino IDE打开**BGT24LTR11_DETECTION_TARGET**文件 。

- **第四步.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

#### 软件代码

```C++
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

:::成功
  如果一切顺利，您可以转到 **串行监视器** 来查看以下结果：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图像 3</b>. <i>无物体接近</i></figcaption>
  </figure>
</div>

如果有物体靠近雷达或经过，结果将如下所示改变：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>图像 3</b>. <i>物体接近</i></figcaption>
  </figure>
</div>

:::注意
该传感器能够检测的最小速度精度为52厘米/秒，相当于0.52米/秒、3.6千米/小时和2.23英里/小时。此外，函数getSpeed()返回的结果是52厘米/秒的倍数，并且是绝对值。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 参考资料

- **[ZIP]** [Seeed Studio Grove Base for XIAO的附件](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.zip)
- **[ZIP]** [演示代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar（BGT24LTR11）雷达模块通信协议v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 数据手册](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## 项目

<p><iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe></p>

## 技术支持和产品讨论

感谢选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
