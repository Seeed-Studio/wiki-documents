---
description: Grove - RS485模块
title: Grove - RS485模块
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-RS485
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - RS485
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103020193
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

Grove RS-485模块让您的Arduino设备可以轻松连接RS-485设备，只需即插即用。此模块具有极高的稳定性，支持无差错的500k bps传输。

RS485是串行通信中一种经济高效的解决方案，它可用于高达10Mbit/s的数据传输速率，或在较低速度下实现长达1200米的传输距离。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本      | 变更   | 发布日期   |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | 初始版 | 2018年11月 |

## 特点

- 供电电压：3.3V/5V
- 接口：UART
- 500k bps无差错传输

## 规格

| 参数     | 数值                     |
|---|---|
| 尺寸     | L: 40mm W: 20mm H: 12mm  |
| 重量     | 4.9g                     |
| 包装尺寸 | L: 135mm W: 85mm H: 13mm |
| 毛重     | 11g                      |

## 硬件概述

### 引脚输出

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>Figure 1</b>. <i>Pinout</i></figcaption>
</figure>
</div>
## 入门指南

:::注意
如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

Grove - NFC支持I2C和UART，[Seeed Arduino NFC库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)支持Arduino Uno/Seeeduino v4.2、Arduino Mega/Seeeduino Mega、Arduino Zero/Seeeduino Lorawan和Arduino Leonardo/Seeeduino Lite。

### 与Arduino配合使用

#### 硬件

**所需材料**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove Base Shield V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**连接材料**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **步骤1.** 将Seeeduino Lotus和Seeeduino V4.2都连接到电脑上。

- **步骤2.** 将Grove - Base Shield插入到Seeeduino Lite中。
- **步骤3.** 使用端口6和端口7作为软端口RX和TX，通过两个Grove RS485模块连接两块开发板。

#### 软件

- **步骤1.** 打开两个Arduino IDE窗口，并分别复制以下代码。其中一个设备作为主设备，另一个设备作为从设备。

```c++
/*      Slave     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Slave is ready!");
  Slave.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Slave.write(val);
  }

  while(Slave.available()) {
    val = Slave.read();
    Serial.write(val);
  }
}
```

```c++
/*      Master      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Master is ready!");
  Master.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Master.write(val);
  }

  while(Master.available()) {
    val = Master.read();
    Serial.write(val);
  }
}
```

- **步骤2.** 使用Grove RS485时，请为不同的设备选择不同的端口。

- **步骤3.** 发送消息并检查结果。

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## 支持平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - RS485 原理图文件](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Max13478E 数据手册](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

## 技术支持与产品讨论


感谢您选择我们的产品！我们为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
