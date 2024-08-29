---
title: Grove - 2通道固态继电器
description: Grove - 2通道固态继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay/
slug: /cn/Grove-2-Channel_Solid_State_Relay
last_update:
  date: 03/18/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/mian.jpg)

与使用线圈的机械继电器不同，封装式固态继电器（SSR）使用功率半导体器件，如晶闸管和晶体管，这些器件的切换速度比机械继电器快得多。**Grove - 2通道固态继电器**基于高质量的**G3MC202P**模块，允许您使用5VDC来控制最大240VAC的电压。该模块有两个通道，您可以分别控制它们。在Grove接口的帮助下，将SSR与您的Arduino一起使用变得非常方便。

根据不同的应用场景，我们为您准备了一系列固态继电器。

[Grove - 固态继电器 V2](https://wiki.seeedstudio.com/Grove-Solid_State_Relay_V2)

Grove - 2-通道固态继电器

[Grove - 4-通道固态继电器](https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay)

[Grove - 8-通道固态继电器](https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本 | 变更内容                                                                                             | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 2-通道固态继电器 | 初始版                                                                                               | 2018年8月 |

## 特征

- 相较于机械继电器的优势：

  - 固态继电器与机械继电器相比具有更快的切换速度，且没有物理触点磨损
  - 完全静音操作
  - 没有物理触点意味着不会产生火花，因此可以在爆炸性环境中使用，在这些环境中，切换过程中不能产生火花至关重要
  - 使用寿命更长，即使频繁激活，因为没有运动部件磨损和触点磨损或积碳
  - 紧凑、薄型单体结构的固态继电器集成了印刷电路板、端子和散热器，比机械继电器小得多，并且可以集成更多通道

- 劣势:

  - 导通时，电阻较高（产生热量），并且会增加电气噪声
  - 断开时，电阻较低，并且存在反向漏电流
  - 仅适用于交流负载

## 规格

|项目|值|
|---|---|
|操作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100 至 240 VAC 50/60 Hz|
|负载电压范围|75 至 264 VAC 50/60 Hz|
|负载电流|每开关 0.1 至 2 A|
|漏电流|最大 1.5 mA（在 200 VAC 下）|
|绝缘电阻|最小 1,000 MΩ（在 500 VDC 下）|
|动作时间|负载电源周期的一半 + 1 ms 最大|
|释放时间|负载电源周期的一半 + 1 ms 最大|
|存储温度|-30°C 至 100°C（无结冰或凝结）|
|工作温度|-30°C 至 80°C（无结冰或凝结）|
|工作湿度| 45% 至 85%RH |
|输入接口|数字|
|输出端口|两个 DIP 母座蓝色 2 脚 |
|过零检测|支持|
|认证|UL /  CSA|
|尺寸|长：40mm 宽：40mm 高：23mm|
|重量|16.0g|
|包装尺寸|长：115mm 宽：65mm 高：50mm|
|毛重|138g|

:::注意
        请注意**漏电流**，1.5mA足以驱动低功耗LED，因此当继电器断开时，LED可能仍会发出微弱的光。
:::

## 应用领域

- 需要低延迟切换的操作，例如舞台灯光控制
- 需要高稳定性的设备，例如医疗设备、交通信号灯
- 需要防爆、防腐、防潮的场合，例如煤炭、化工等行业。

## 硬件概述

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/schematic_.jpg)

**K1** 是继电器模块。当在 **INT+** 和 **INT-** 之间施加 5V 电压时，继电器将被打开。然后 **LOAD1** 将与 **LOAD2** 连接。我们使用一个 NPN 晶体管 **Q2**(BC817-40) 来控制 **INT+** 和 **INT-** 之间的电压。

**CTR1** 是来自 Arduino 或其他板卡的控制信号。如果没有信号，那么它会被 10k 的电阻 R7 拉低，此时 **Q2** 的“栅极”（端口 1）将是 0v，并且 Q2 将被关闭，因此 K1 也将被关闭。如果 **CTR1** 变为 5v，那么 Q2 将被打开。K1 的 **INT-** 将连接到系统的 GND，对于 K1 来说**，INT+** 和 **INT-** 之间将有 5V 的电压，因此 K1 将被打开，并且 **LOAD1** 将与 **LOAD2** 连接。

:::注意
      本部分仅展示示意图的一部分，如需完整文档，请参考 [资源](/#resources)部分
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::注意
    上述列出的支持平台是对模块软件或理论兼容性的一个说明。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库或示例代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 使用 Arduino 入门

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展版 | Grove - 2-通道固态继电器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定您手头上的USB线是否合适，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

    **2** 每个Grove模块在购买时都会附带一根Grove电缆。如果您不小心丢失了Grove电缆，您可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买.
    
    **3** 您需要自备两个风扇。
:::

- **步骤 1.** 将 Grove - 2通道固态继电器连接到 Grove 基础扩展板的 **D2** 端口。

- **步骤 2.** 剪断一根线，一端连接到开关1的 **LOAD1**，另一端连接到开关1的 **LOAD2**。

- **步骤 3.** 剪断另一根线，一端连接到开关2的 **LOAD1**，另一端连接到开关2的 **LOAD2**。

- **步骤 4.** 将开关1的 **LOAD1** 连接到电源，并将开关1的 **LOAD2** 连接到风扇1。

- **步骤 5.** 将开关2的 **LOAD1** 连接到电源，并将开关2的 **LOAD2** 连接到风扇2。

- **步骤 6.** 将 Grove 基础扩展板插入 Seeeduino。

- **步骤 7.** 通过 Micro-USB 电缆将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/connect.jpg)

#### 软件

:::注意
       如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读 [Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) 。:::

- **步骤 1.** 打开Arduino IDE并创建一个新文件，您可以点击代码块右上角的 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)图标，将以下代码复制到Arduino IDE中的一个新草图中。

```cpp
#include <Arduino.h>
uint8_t channel1 = 2;
uint8_t channel2 = 3;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **步骤 2.** 上传示例程序。如果您不知道如何上传代码，请查阅 [如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)教程。

:::提示
    您会看到板载的两个LED灯交替亮起和熄灭，两个风扇也会交替开启和关闭。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 2-通道固态继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip)
- **[PDF]** [G3MC202P 数据文件](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## 项目

这是本产品的介绍视频，包含了一些简单的演示，您可以尝试操作一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您使用我们的产品时体验尽可能顺畅。为了满足不同的偏好和需求，我们提供了多种沟通渠道。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
