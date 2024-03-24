---
title: Grove - Solid State Relay V2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Solid_State_Relay_V2/
slug: /cn/Grove-Solid_State_Relay_V2
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/main.jpg)

不使用线圈，而是使用封装好的固态继电器（SSR），它们使用如可控硅和晶体管等功率半导体器件，这些器件提供了比机械继电器更快的切换速度。《Grove - 固态继电器 V2》是基于高质量的 **G3MC202P** 模块构建的，它允许您使用 5VDC 来控制最大 240VAC 的电流。在 Grove 接口的帮助下，将 SSR 与您的 Arduino 配合使用变得非常方便。

根据不同的应用场景，我们为您准备了一系列固态继电器。

Grove - 固态继电器 V2

[Grove - 2通道固态继电器](https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)

[Grove - 4通道固态继电器](https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay)

[Grove - 8通道固态继电器](https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本 | 变更内容                                                                                           | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 固态继电器 V2 | 初始版                                                                                            | 2018年8月 |

## 特点

- 相对于机械继电器的优势：

  - 固态继电器与机电继电器相比具有更快的切换速度，且没有物理触点磨损
  - 完全静音操作
  - 没有物理触点意味着不会产生火花，因此可以在爆炸性环境中使用，在这些环境中，切换时不能产生火花至关重要
  - 寿命更长，即使多次激活，因为没有运动部件磨损，也没有触点磨损或积碳
  - 紧凑、薄型单块结构固态继电器，采用一体化引线框架，集成了PCB、端子和散热器，体积远小于机械继电器，可以集成更多通道

- 劣势：

  - 闭合时电阻较高（产生热量），电气噪声增加
  - 断开时电阻较低，存在反向漏电流
  - 仅适用于交流负载

## 规格

|项目|值|
|---|---|
|操作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100 至 240 VAC 50/60 Hz|
|负载电压范围|75 至 264 VAC 50/60 Hz|
|负载电流|0.1 至 2 A|
|漏电流|最大 1.5 mA (在 200 VAC 下)|
|绝缘电阻|最小 1,000 MΩ (在 500 VDC 下)|
|操作时间|负载电源周期的一半 + 最多 1 ms|
|释放时间|负载电源周期的一半 + 最多 1 ms|
|存储温度|-30°C 至 100°C (无结冰或凝结)|
|操作温度|-30°C 至 80°C (无结冰或凝结)|
|操作湿度| 45% 至 85%RH |
|输入接口|数字|
|输出端口|DIP 母头蓝色 2 针脚 |
|过零检测|支持|
|认证|UL /  CSA|
|尺寸|长：40mm 宽：20mm 高：23mm|
|重量|8.2g|
|包装尺寸|长：120mm 宽：65mm 高：52mm|
|毛重|132g|

:::注意
        注意：**漏电流**为 1.5mA，这对于驱动低功率 LED 来说已经足够强，因此当继电器断开时，LED 可能仍会发出微弱的光。
:::

## 应用领域

- 需要低延迟切换的操作，例如舞台灯光控制
- 需要高稳定性的设备，例如医疗设备、交通信号灯
- 需要防爆、防腐、防潮的场合，例如煤炭、化工行业

## 硬件概述

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/PIN_map_.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** 是继电器模块，当在 **INT+** 和 **INT-** 之间施加 5V 电压时，继电器将被打开。此时**，LOAD1** 将连接到 **LOAD2**。我们使用一个 NPN 晶体管 **Q1**(BC817-40) 来控制 **INT+** 和 **INT-** 之间的电压。

**CTR** 是来自 Arduino 或其他控制板的控制信号。如果没有信号，10k 的 R2 会将其拉低，导致 **Q1** 的“门”（端口 1）为 0V**，Q1** 将会关闭，因此 K1 也会被关闭。如果 **CTR** 变为 5V，那么 **Q1** 将被打开**。K1** 的 **INT-** 将连接到系统的 GND，这样 **K1** 的 **INT+** 和 **INT-** 之间就会有 5V 的电压，因此 K1 将被打开**，LOAD1** 将连接到 **LOAD2**。

:::注意
        注意：在此部分，我们只展示了部分示意图，如需完整的文档，请参考[资源](https://yiyan.baidu.com/Resources)。
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::注意
    上述提到的支持平台只是该模块的软件或理论兼容性的一个说明。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。我们无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户需要编写自己的软件库。
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | 基础扩展板 | Grove - 固态继电器 V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻插入 USB 数据线，否则可能会损坏端口。请使用内部有 4 根线的 USB 数据线，2 根线的数据线无法传输数据。如果您不确定您现有的数据线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

    **2** 购买每个 Grove 模块时都会附带一条 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

- **步骤 1.** 将 Grove - 固态继电器连接到 Grove-Base Shield 的 **D7** 端口。

- **步骤 2.** 剪断一根导线，一端连接到 **LOAD1**，另一端连接到 **LOAD2**。

- **步骤 3.** 将 **LOAD1** 连接到电源，将 **LOAD2** 连接到风扇。

- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 5.** 通过 Micro-USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/connect.jpg)

#### 软件

:::注意
        如果您是第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 打开 Arduino IDE 并创建一个新文件，您可以直接点击代码块右上角的 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 图标，将以下代码复制到 Arduino IDE 中的新草图中。

```c++
#include <Arduino.h>
uint8_t pin = 7;
void setup() {
  pinMode(pin, OUTPUT);}
void loop() {
  digitalWrite(pin, HIGH);
  delay(5000);
  digitalWrite(pin, LOW);
  delay(5000);
}

```

- **步骤 2.** 上传示例程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

:::提示
    您将看到板载 LED 灯交替亮起和熄灭，风扇也会交替开启和关闭。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/Grove-Solid_State_Relay_V2_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - S固态继电器 V2 eagle 文件](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/Grove-Solid_State_Relay_V2_Eagle.zip)
- **[PDF]** [G3MC202P数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## 项目

这是本产品的介绍视频和一些简单的演示，您可以尝试操作一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
