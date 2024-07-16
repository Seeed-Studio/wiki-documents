---
title:  Grove - 光耦继电器（M281）
description: Grove - 光耦继电器（M281）
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Optocoupler_Relay-M281/
slug: /cn/Grove-Optocoupler_Relay-M281
last_update:
  date: 03/21/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

这个模块是一个双向单刀单掷（SPSD）常开固态继电器（SSR）。Grove光耦继电器（M281）提供了非常低的导通电阻，从而允许高负载电流额定值。

与我们网站上的其他TRIAC SSR不同，这款继电器基于MOSFET，因此它可以承载交流负载和直流负载。如果您需要使用带有直流负载的SSR，那么这就是您所需要的！

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本 | 变更内容                                                                                           | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove光耦继电器 (M281) | 初始版                                                                                            | 2018年12月 |

## 特点

- 低导通电阻（最大0.5Ω）
- 1A连续负载电流
- 60V负载电压额定值
- 低输入控制电流（典型值3mA）
- 高输入输出隔离（最小值1.5kV）

## 应用

- 自动测试设备
- 抄表系统
- 医疗设备
- 电池监控
- 多路复用器

## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| -40 – 85℃|
|存储温度|- 55°C – 125°C|
|阻断电压|60 V|
|连续负载电流|1A|
|漏电流|0.2 uA(典型值)<br />1 uA(最大值)|
|导通电阻|0.5 Ω(典型值)<br />0.7 Ω(最大值)|
|隔离电阻|100 GΩ|
|开启时间|1.4 ms(典型值)<br />5 ms(最大值)|
|关闭时间|0.2 ms(典型值)<br />2 ms(最大值)|
|接口类型|数字接口|
|尺寸|长: 40mm 宽: 20mm 高: 13mm|
|重量|10.6g|
|包装尺寸|长: 135mm 宽: 85mm 高: 13mm|
|毛重|11g|
  <div align="center"><b>表 1.</b><i>一般规格参数</i></div>

## 硬件概述

### 引脚定义

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>图 1</b>. <i>定义</i></figcaption>
  </figure>
</div>


## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## 入门指南

### 玩转 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove - 光耦继电器 (M281) |红色 LED|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[立即获取](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>此外，您可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Baseshield 的组合。

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定自己所拥有的线的类型，可以点击[此处](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

    **2** 您购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

**硬件连接**

- **步骤 1.** 将Grove - Base Shield插入Seeeduino。

- **步骤 2.** 将Grove - Optocoupler Relay (M281)连接到Base Shield的**D5**端口。

- **步骤 3.** 将LED和Grove - Optocoupler Relay (M281)连接到Grove - Base Shield的**3.3V**和**GND**引脚。（请参考下面的图）

- **步骤 4.** 通过USB线将Seeeduino连接到电脑。

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>Figure 2</b>. <i>图2. 引脚定义，请确保连接到3.3v引脚，5v会损坏这个LED。</i></figcaption>
  </figure>
</div>
#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 将以下代码复制到Arduino IDE中的一个新草图中

```cpp
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **步骤 2.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

:::提示
  如果一切正常，我们会看到LED在闪烁。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - Optocoupler Relay (M281) 原理图文件](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [M281 数据手册](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
