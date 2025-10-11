---
description: Grove - RS485
title: Grove - RS485
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-RS485
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

Grove RS-485 模块让您的 Arduino 可以轻松连接 RS-485 设备，只需即插即用即可。该模块具有高度稳定性，并支持 500k bps 的无误码传输。

RS485 是一种经济高效的串行通信解决方案，可支持 10Mbit/s 的数据速率，或在较低速率下实现最长 1200 米的传输距离。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本         | 变更                                                                                                  | 发布日期      |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | 初始版本                                                                                              | 2018年11月    |

## 特性

- 电源电压：3.3V/5V
- 接口：UART
- 500k bps 无误码传输

## 规格

| 参数         | 值                     |
|--------------|------------------------|
| 尺寸         | 长：40mm 宽：20mm 高：12mm |
| 重量         | 4.9g                  |
| 包装尺寸     | 长：135mm 宽：85mm 高：13mm |
| 毛重         | 11g                   |

## 硬件概览

### 引脚图

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>图 1</b>. <i>引脚图</i></figcaption>
</figure>
</div>

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

Grove - NFC 支持 I2C 和 UART，[Seeed Arduino NFC 库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) 支持 Arduino Uno/Seeeduino v4.2、Arduino Mega/Seeeduino Mega、Arduino Zero/Seeeduino Lorawan 和 Arduino Leonardo/Seeeduino Lite。

### 使用 Arduino

#### 硬件

**所需材料**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove 基础扩展板 V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**连接材料**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **步骤 1.** 将 Seeeduino Lotus 和 Seeeduino V4.2 都连接到 PC。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino Lite。

- **步骤 3.** 使用端口 6 和端口 7 作为软端口 RX 和 TX，用两个 Grove RS485 连接两块板。

#### 软件

- **步骤 1.** 打开两个 Arduino IDE 窗口，并分别复制以下代码。一个设备用作主设备，另一个设备用作从设备。

```cpp
/*      从设备     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("从设备已准备好！");
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

```cpp
/*      主设备      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("主设备已准备好！");
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

- **步骤 2.** 在使用 Grove RS485 时，为不同设备选择不同的端口。

- **步骤 3.** 发送消息并检查结果。

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - RS485 原理图文件](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Max13478E 数据手册](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>