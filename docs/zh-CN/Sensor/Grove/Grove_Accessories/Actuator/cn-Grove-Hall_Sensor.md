---
description: Grove - Hall Sensor
title: Grove - Hall Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Hall_Sensor
last_update:
  date: 03/20/2024
  author: WuFeifei
---
<!-- ---
name: Grove - Hall Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Hall-Sensor-p-965.html
oldwikiname: Grove_-_Hall_Sensor
prodimagename: Grove-Hall_Sensor_New.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/hall sensor.jpg
surveyurl: https://www.research.net/r/Grove-Hall_Sensor
sku: 101020046
tags: grove_digital, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

霍尔传感器基于霍尔效应，该效应是指在导体中产生一个电压差，该电压差与导体中的电流横向，并且与电流垂直的磁场。在这个Grove模块上有一个连续时间开关。当垂直于霍尔传感器的磁场（南极性）超过操作点阈值BOP时，这些设备的输出会变为低电平（打开），而当磁场消失时，输出会变为高电平（关闭）。这个模块可以用来测量转速。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## 版本追踪

| 版本号 | 描述         | 发布日期 |
|----------|------------------------|------------|
| Grove - Hall Sensor v0.9b    | 初始公开发行版 | 2011年10月3日 |

## 功能特点

- Grove兼容接口
- 上升和下降转换周期为400ns。
- 连续时间霍尔效应传感器
- 反向电池保护

:::提示
更多关于Grove模块的信息，请参考[Grove系统](https://yiyan.baidu.com/（此处应提供Grove系统的链接或进一步解释）)
:::

## 规格

| 项目         | 最小值 | 典型值 | 最大值 | 单位 |
| ------------ | ------ | ------ | ------ | ---- |
| 工作电压     | 3.8    | 5.0    | 24     | V    |
| 工作电流     | 4.1    | -      | 24     | mA   |
| 工作温度范围 | -40    | -      | 85     | ºC   |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
上述提到的受支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要自行编写软件库。
:::

## 应用创意

- 转速计。
- 简易直流电机。

## 入门指南

:::注意
如果你是第一次使用Arduino，我们强烈建议你在开始前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 玩转 Arduino

#### 演示

霍尔传感器通过利用Arduino/Seeeduino上可用的外部中断来使用。在这个例子中，我们使用了中断0，它位于数字引脚2上。关于其他中断，请查看[attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt)函数。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础盾板 | Grove - 霍尔传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[立即获得](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获得](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获得](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **步骤 2.** 将Grove - 霍尔传感器连接到Grove-基础扩展板的D2端口。
- **步骤 3.** 将Grove - 基础扩展板插入Seeeduino。
- **步骤 4.** 通过USB线将Seeeduino连接到电脑。

:::注意
如果没有Grove基础扩展板，我们也可以直接将Grove - 霍尔传感器连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 霍尔传感器 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
| Not Conencted | 白色                 |
| D2            | 黄色                |

#### 软件

- **步骤 1.**  下载[霍尔传感器代码](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **步骤 2.**  打开其中一个代码文件。例如，演示程序**MagnetControlLED**

- **步骤 3.**  将代码复制到Arduino IDE并上传。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c
/****************************************************************************/ 
// Function: When a magnet whose south pole is facing up is approaching to 
//     the onboard sensor, the LED will be turned on.Otherwise, the 
//     LED will be turned off.
// Hardware: Grove - Hall Sensor, Grove - LED
// Arduino IDE: Arduino-1.0
// Author:  FrankieChu  
// Date:   Jan 20,2013
// Version: v1.0
// by www.seeedstudio.com
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*macro definitions of magnetic pin and LED pin*/
#define HALL_SENSOR 2
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
  pinsInit();
}
 
void loop() 
{
 if(isNearMagnet())//if the hall sensor is near the magnet?
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*If the hall sensor is near the magnet whose south pole is facing up, */
/*it will return ture, otherwise it will return false.    */
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW)//if the sensor value is LOW?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **步骤 4.**  当一个南极朝上的磁铁靠近板载传感器时，LED将点亮。否则，LED将熄灭。

### 玩转 Codecraft

#### 硬件

**步骤 1.** 将一个Grove - 霍尔传感器连接到D2端口，并将一个Grove - 红色LED连接到基础扩展板的D4端口。

**步骤 2.** 将基础扩展板插入你的Seeeduino/Arduino。

**步骤 3.** 通过USB线将Seeeduino/Arduino连接到你的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖入工作区。

:::注意
如果你是第一次使用Codecraft，也请查看[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 如果你是第一次使用Codecraft，也请查看[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

将程序上传到您的Arduino/Seeeduino。

:::提示成功
当代码上传完成后，霍尔传感器检测到磁场变化时，LED将亮起。
:::

## **在线原理图查看器**

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove-霍尔传感器原理图](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[演示程序]** [霍尔传感器演示代码](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[数据手册]** [A1101 数据手册](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持服务，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
