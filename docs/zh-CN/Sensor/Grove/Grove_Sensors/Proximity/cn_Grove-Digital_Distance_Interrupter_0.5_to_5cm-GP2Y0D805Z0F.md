---
title: Grove - 数字距离中断器 0.5 到 5cm(GP2Y0D805Z0F)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F_P/
slug: /cn/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F
last_update:
  date: 01/04/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/main.JPG)

Grove - 数字距离中断器 0.5 到 5cm 是一个基于 GP2Y0D805Z0F 的红外距离感应模块。通常该传感器的输出为 1（高电平），当物体进入传感器的测量范围时，它将被触发并输出 0（低电平）。同时板载 LED 将点亮。顾名思义，测量范围为 0.5cm 到 5cm。

Grove - 数字距离中断器 0.5 到 5cm 有两种类型：Grove - 数字距离中断器 0.5 到 5cm(GP2Y0D805Z0F) 和 [Grove - 数字距离中断器 0.5 到 5cm(GP2Y0D805Z0F)(P)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html)。对于不带字母 P 的版本，镜头和 grove 接口在同一侧；对于带字母 P 的版本，镜头和 grove 接口在不同侧。

GP2Y0D805Z0F 是一个距离测量传感器单元，由 PD（光电二极管）、IRED（红外发射二极管）和信号处理电路的集成组合构成。由于采用三角测量法，物体反射率的变化、环境温度和工作持续时间不容易影响距离检测。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank"><img src=https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

## 特性

- 易于使用
- 集成指示 LED  
- 数字输出

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3v/5v|
|触发范围|0.5cm - 5cm |
|工作温度|-10℃ -- 60℃|

## 应用

- 非接触式开关（卫生设备、照明控制等）
- 扫地机器人

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 数字距离中断器 0.5 到 5cm |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆是否合适，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将Grove - 数字距离中断器 0.5 到 5cm插入Grove-Base Shield的**D2**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。

- **步骤 3.** 通过USB线缆将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/connect.jpg)

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove-Mech keycap连接到Seeeduino，如下所示。
:::

| Seeeduino     | Grove - 数字距离中断器 0.5 到 5cm|
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D2            | 黄色                  |

#### 软件

- **步骤 1.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
/*
 *  
 * Copyright (c) 2018 Seeed Technology Co., Ltd.
 * Website    : www.seeed.cc
 * Author     : downey
 * Create Time: May 2018
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#define SENSOR  2

void setup()
{
 Serial.begin(115200);
 pinMode(SENSOR,INPUT);
}


void loop()
{
 short val=0;
 val=digitalRead(SENSOR);
 Serial.print("val=");
 Serial.println((int)val);
 if(0==val)
 {
  Serial.println("Sensor is triggered!!");
 }
 delay(100);
}

```

- **步骤 2.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 3.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率更改为**115200**。
如果一切正常，您将获得此模块的输出。

结果应该类似于：

```
val=1
val=1
val=1
val=1
val=1
val=1
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=1
val=1
val=1
val=1
```

通常此传感器的输出为1（高电平），当物体进入传感器的测量范围时，它将被触发并输出0（低电平）

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 数字距离中断器 0.5 到 5cm eagle 文件](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip)
- **[PDF]** [GP2Y0D805Z0F 数据手册](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/GP2Y0D805Z0F.pdf)

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