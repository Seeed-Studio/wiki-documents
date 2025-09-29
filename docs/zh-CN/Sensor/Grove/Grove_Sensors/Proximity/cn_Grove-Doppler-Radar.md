---
title: Grove-多普勒雷达
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Doppler-Radar/
slug: /cn/Grove-Doppler-Radar
last_update:
  date: 01/04/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)



<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>



您会如何构建一个能够计算到物体距离或检测是否存在运动的系统？通常您会使用超声波或激光雷达传感器进行距离测量，使用PIR运动传感器进行运动检测。如果我们告诉您有一个一体化模块能够更精确地完成所有这些功能，并且还能执行移动物体速度检测和物体角度检测等功能，您会相信吗？我们厌倦了在运动感应应用中使用这些传统模块，希望为您提供一个更好的解决方案，集成新技术。好吧...在Grove历史上第一次，我们非常兴奋地为您带来基于雷达技术的Grove模块！

这就是Grove - 多普勒雷达。

Grove - 多普勒雷达基于BGT24LTR11硅锗MMIC，这是一个24GHz雷达收发器。它由基于Arm® Cortex®-M0的XMC1302 MCU驱动。这款产品采用紧凑封装，功耗极低，提供高精度测量。该模块的高频率允许高穿透性通过物体，因此在部署时不需要暴露在外部，而是可以放置在物体后面。这在安全系统中极其有用。此外，它能够在恶劣天气条件下工作，如高温、灰尘和雨水。

## 特性

- Grove系列中第一个基于雷达的传感器
- 紧凑尺寸，便于部署
- 轻量化设计，适合无人机应用
- 低功耗，延长使用时间
- 24GHz收发器MMIC，实现高精度测量
- 使用电磁波快速响应
- ESD保护，避免ESD冲击导致的系统故障
- 高穿透性，允许部署在物体后面
- 在恶劣天气条件下保持工作（温度、光线、灰尘、雨水）

## 规格
|项目|值|
|---|---|
|MMIC	|BGT24LTR11|
|MCU	|XMC1302 Arm® Cortex®-M0|
|传输频率	|最小值: 24GHz|
|典型值|21.125GHz|
|最大值|24.25GHz|
|输出功率 (EIRP)	|7dBm @ 25°C|
|更新时间|	300ms|
|通信接口	|UART (115200)|
|检测距离	|10m @ 0dBsm|
|标准检测范围|65° / 水平 (-6dB); 22° / 垂直 (-6dB)|
|供电电压	|3.3-5V|
|重量|5g|

## 应用
- 智能家居
- 智能建筑
- 自动门
- 照明控制
- 工业机器人
- 入侵报警系统
- 无人机

### 该模块中的多普勒雷达技术是如何工作的？

多普勒雷达通过从发射器（TX天线）发送具有精确频率的电磁辐射波束到移动物体上来工作。一旦电磁辐射波与物体接触，它就会向接收器（RX天线）反射回来。然而，当波从移动物体反射时，波现在具有与其发射的原始频率不同的频率。然后可以使用这个频率的变化来计算移动物体的速度。

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## 支持的平台
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## 入门指南

#### 所需材料

| Seeeduino XIAO | Grove-多普勒雷达| XIAO 扩展板|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[即将推出](https://www.seeedstudio.com/)|


#### 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### 外部接头引脚说明

|引脚编号|信号名称|引脚说明|
|---|---|----|
|1| DIV_OUT	|来自 BGT24LTR11 的分频器输出 |
|2|GND|接地|
|3|VCC_5V_EXT|外部+5.0V输入电源引脚（最大值=5.5V）|
|4|VTUNE|VCO频率调谐电压|
|5|IFQ_HG|BGT24LTR11 Q通道模拟信号输出-第二增益级|
|6|IFI_HG|BGT24LTR11 I通道模拟信号输出-第二增益级|
|7|PWM_OUT|带CCU4的外部用户可配置GPIO|
|8|OUT1|外部GPIO引脚（用户可配置）|
|9|OUT2|外部GPIO引脚（用户可配置）|

#### 硬件连接

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    请轻柔地插入USB线缆，将多普勒雷达接口插入Seeeduino XIAO扩展板接口，否则可能会损坏端口。

- **步骤 1.** 使用Grove线缆将多普勒雷达插入Seeeduino XIAO扩展板。

- **步骤 2.** 通过USB线缆将Seeeduino XIAO连接到PC。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在Arduino IDE的**串口监视器**屏幕上。
:::

#### 软件

:::tip
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::




- **步骤 1.** 下载[演示代码](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)。

- **步骤 2.** 复制整个**Seeed_Arduino_DopplerRadar**文件并将其粘贴到您的Arduino IDE库文件中。

- **步骤 3.** 使用Arduino IDE打开**BGT24LTR11_DETECTION_TARGET**文件。

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

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
		如果一切顺利，您可以转到**串口监视器**查看如下结果：
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-多普勒雷达结果" title="demo" />
<figcaption><b>图 3</b>. <i> 无物体接近</i></figcaption>
</figure>
</div>

如果有物体接近雷达或经过，结果将如下所示：


<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-多普勒雷达结果" title="demo" />
<figcaption><b>图 3</b>. <i>物体接近</i></figcaption>
</figure>
</div>

:::note
    传感器能够检测到的最小速度精度为52cm/s，相当于0.52m/s、3.6km/h和2.23mph。此外，函数getSpeed()返回的结果是52cm/s的倍数，并且相应地是绝对值。
:::

## 资源

- **[ZIP]** [演示代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>