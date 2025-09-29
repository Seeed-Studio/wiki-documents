---
description: Grove - 电容式触摸滑动传感器(CY8C4014LQI)
title: Grove - 电容式触摸滑动传感器(CY8C4014LQI)
category: Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - 电容式触摸滑动传感器(CY8C4014LQI)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020552
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/main.jpg)

Grove - 电容式触摸滑动传感器(CY8C4014LQI)是一个多功能触摸传感器。您可以触摸两个按钮或在5段滑块上滑动，每个触摸板都有相应的LED来指示触摸状态。我们还提供了一个默认的高电平中断引脚，一旦您触摸按钮或滑动滑块，它就会变为低电平。

将此模块用作游戏控制器或应用于其他触摸应用将会非常有趣。

:::note
该产品配有亚克力外壳，我们强烈建议您不要拆除外壳使用。当您的手指触摸背面的走线或焊盘时，可能会被误触发。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 电容式触摸滑动传感器(CY8C4014LQI) | 初始版本                                                                                               | 2018年7月      |

## 特性

- 32位MCU子系统
- 16-MHz ARM Cortex-M0 CPU
- 高达16KB的闪存，带读取加速器
- 高达2KB的SRAM
- 在5 pF到45 pF传感器范围内的自动硬件调谐(SmartSense™)
- I2C接口

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作环境温度|-40°C 到 +85°C|
|工作结温|-40°C 到 +100°C|
|接口|I2C|
|默认I2C地址|0x08|
|尺寸|长: 60mm 宽: 20mm 高: 6mm|
|重量|8g|
|包装尺寸|长: 140mm 宽: 90mm 高: 10mm|
|毛重|15g|

## 应用

- 游戏控制器
- 触摸应用

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out_back.jpg)

### 原理图

**电源**

该模块基于**CY8C4014LQI**，该芯片的输入电压范围为1.71v-5.5v，因此您可以使用Arduino的3.3v和5v引脚为该模块供电。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上面提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 电容式触摸滑动传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank">立即购买</a>|

:::note
**1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将Grove - 电容式触摸滑动传感器连接到Grove-Base Shield的**I2C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。

- **步骤 3.** 通过USB线缆将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/connect.jpg)

:::note
如果我们没有Grove Base Shield，我们也可以按照以下方式直接将此模块连接到Seeeduino。
:::

| Seeeduino      |  Grove线缆       | Grove - 电容式触摸滑动传感器 |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V or 3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove_touch_sensor_CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤 3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**File --> Examples --> Grove_touch_sensor_CY8C40XX --> basic_demo**。
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path.png)

    2. 在您的计算机中点击**basic_demo.ino**打开，您可以在文件夹**XXXX\Arduino\libraries\Grove_touch_sensor_CY8C40XX-master\examples\basic_demo**中找到它，**XXXX**是您安装Arduino IDE的位置。
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path_1.jpg)

    3. 或者，您可以直接点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)将以下代码复制到Arduino IDE的新草图中。

```cpp

#include "Seeed_CY8C401XX.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

CY8C sensor;
void setup()
{
    SERIAL.begin(115200);
    
    sensor.init();
}


void loop()
{
    u8 value=0;
    sensor.get_touch_button_value(&value);
    SERIAL.print("button value is");
    SERIAL.println(value,HEX);
    if(value&0x01)
        SERIAL.println("button 1 is pressed");
    if(value&0x2)
        SERIAL.println("button 2 is pressed");

    sensor.get_touch_slider_value(&value);
    SERIAL.print("slider value is");
    SERIAL.println(value,HEX);
    SERIAL.println(" ");


    delay(1000);
}
```

:::caution
库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击**Tool-> Serial Monitor**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**115200**。

:::tip
如果一切正常，当您打开串口监视器并触摸滑动触摸传感器时，您将看到LED亮起，串口监视器显示如下：
:::

```cpp
button value is1
button 1 is pressed
slider value is0
 
button value is3
button 1 is pressed
button 2 is pressed
slider value is9
```

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/result.gif)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 电容式触摸滑动传感器(CY8C4014LQI) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip)

- **[Zip]** [Grove 触摸传感器 CY8C40XX 库](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX/archive/master.zip)

- **[PDF]** [CY8C4014LQI 数据手册](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/CY8C4014LQI_Datasheet.pdf)

## 技术支持与产品讨论



  <br />感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>