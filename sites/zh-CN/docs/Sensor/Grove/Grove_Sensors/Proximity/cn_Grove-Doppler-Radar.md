---
title: Grove-Doppler-Radar
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Doppler-Radar/
slug: /Grove-Doppler-Radar
sku: 109020021
last_update:
  date: 05/28/2026
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-Doppler-Radar/
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

你会如何构建一个能够计算与物体之间距离，或者检测是否存在运动的系统？通常，你会使用超声波或 LiDAR 传感器进行距离测量，并使用 PIR 人体红外传感器进行运动检测。如果我们告诉你，有一个一体化模块不仅可以更精确地完成这些功能，还能实现诸如运动物体速度检测和物体角度检测等功能，你会相信吗？我们已经厌倦了在运动感应应用中使用这些传统模块，并希望为你带来一个集成新技术的更好解决方案。于是……在 Grove 的历史上，我们首次非常激动地为你带来一款基于雷达技术的 Grove 模块！

这就是 Grove – 多普勒雷达。

Grove – 多普勒雷达基于 BGT24LTR11 硅锗 MMIC，它是一款 24GHz 雷达收发器。其由基于 Arm® Cortex®-M0 的 XMC1302 MCU 驱动。该模块采用紧凑封装并在超低功耗下运行，提供高精度测量。该模块的高频率使其具有很强的物体穿透能力，因此在部署时无需暴露在外部，而是可以放置在物体后面。这对于安防系统来说极其有用。此外，它还能在高温、粉尘和雨水等恶劣天气条件下保持正常工作。

## 特性

- Grove 家族中首款基于雷达的传感器
- 体积小巧，便于部署
- 轻量化设计，适用于无人机应用
- 低功耗，适合长时间使用
- 24GHz 收发 MMIC，实现高精度测量
- 使用电磁波实现快速响应
- 具备 ESD 保护，避免静电击穿导致的系统故障
- 高穿透力，可部署在物体后方
- 在恶劣天气条件下（高温、强光、粉尘、雨水）仍可保持工作

## 规格参数

|项目|参数|
|---|---|
|MMIC |BGT24LTR11|
|MCU |XMC1302 Arm® Cortex®-M0|
|发射频率 |最小：24GHz|
|典型值|21.125GHz|
|最大值|24.25GHz|
|输出功率 (EIRP) |7dBm @ 25°C|
|更新周期| 300ms|
|通信接口 |UART (115200)|
|检测距离 |10m @ 0dBsm|
|标准检测视场|65° / 水平 (-6dB); 22° / 垂直 (-6dB)|
|供电电压 |3.3-5V|
|重量|5g|

## 应用

- 智能家居
- 智能楼宇
- 自动门
- 照明控制
- 工业机器人
- 入侵报警系统
- 无人机

### 多普勒雷达技术在本模块中是如何工作的？

多普勒雷达通过从发射端（TX 天线）向运动物体发射具有精确频率的电磁波束来工作。当电磁波与物体接触后，会反射并返回接收端（RX 天线）。然而，当波从运动物体上反射回来时，其频率与最初发射的原始频率已经不同。然后，就可以利用这种频率变化来计算运动物体的速度。

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

#### 所需材料

| Seeeduino XIAO | Grove-Doppler-Radar| XIAO 扩展板|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Coming SOON](https://www.seeedstudio.com/)|

#### 硬件概览

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### 外部排针引脚说明

|引脚编号|信号名称|引脚说明|
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

#### 硬件连接

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    请轻轻插入 USB 线缆，将多普勒雷达接口插入 Seeeduino XIAO 扩展板接口，否则可能会损坏接口。

- **步骤 1.** 使用 Grove 线缆将多普勒雷达插入 Seeeduino XIAO 扩展板。

- **步骤 2.** 通过 USB 线缆将 Seeeduino XIAO 连接到电脑。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在 Arduino IDE 中 **Serial Monitor** 的屏幕上。

:::

#### 软件

:::tip
        如果这是你第一次使用 Arduino，我们强烈建议你在开始之前先阅读 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载[示例代码](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)。

- **步骤 2.** 复制整个 **Seeed_Arduino_DopplerRadar** 文件夹，并将其粘贴到 Arduino IDE 的库文件夹中。

- **步骤 3.** 使用 Arduino IDE 打开 **BGT24LTR11_DETECTION_TARGET** 文件。

- **步骤 4.** 上传示例程序。如果你不知道如何上传代码，请查看 [How to upload code](https://wiki.seeedstudio.com/cn/Upload_Code/)。

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

如果有物体接近雷达或从旁经过，结果将会变为如下所示：

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>图 3</b>. <i>物体接近</i></figcaption>
</figure>
</div>

## 资源

- **[ZIP]** [示例代码库](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## 技术支持与产品讨论

 如果你遇到任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
