---
description: Grove - Heelight 传感器
title: Grove - Heelight 传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Heelight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg" /></div>

Grove – Heelight 传感器是一个智能语音传感器，可以识别多达 500 个数字语音命令。它最初用于 Heelight——一个可以通过数字声波控制的智能彩色灯泡。现在我们将这个传感器引入到小巧精致的 Grove 模块中，让您能够在基于 Arduino 的项目中实现智能控制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 数字语音识别

- 支持超过 500 个数字语音命令

- 兼容 Grove 系统

## 规格参数

| 产品名称         | Grove-Heelight 传感器 |
|----------------------|-----------------------|
| 工作电压    | DC 3.3V~5V            |
| 工作电流    | 15mA                  |
| 识别范围 | 0.1~10m               |
| 角度范围          | 360°                  |
| 尺寸                 | 20*20mm               |
| 波特率            | 115200                |
| 串口输出   | TTL 逻辑电平       |

## 入门指南

### 我们需要什么？

|名称 |功能| 数量 |链接|
|---|---|---|---|
|Base Shield V2| 提供 Grove 连接器 |1 |[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2| 控制器 |1 |[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight 传感器 |传感器| 1| [立即获取](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|

### 硬件连接

- 将 Base Shield V2 插到 Seeeduino V4.2 上
- 将 Grove - Heelight 传感器连接到 Base Shield V2 的 D6 端口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG" /></div>

### 上传代码

在上传代码之前，请确保您已经选择了正确的开发板和 COM 端口。对于 Seeeduino V4.2，我们可以选择 Arduino/Genuino Uno。

这是一个基本示例，可以展示传感器的能力，当它接收（或听到）不同的数字声音时，会在串口监视器中输出不同的十六进制值。您也可以在资源中下载此示例

```
/*
  Software serial multple serial test

 Receives from the hardware serial, sends to software serial.
 Receives from software serial, sends to hardware serial.

 The circuit:
 * RX is digital pin 10 (connect to TX of other device)
 * TX is digital pin 11 (connect to RX of other device)

 Note:
 Not all pins on the Mega and Mega 2560 support change interrupts,
 so only the following can be used for RX:
 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69

 Not all pins on the Leonardo support change interrupts,
 so only the following can be used for RX:
 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

 created back in the mists of time
 modified 25 May 2012
 by Tom Igoe
 based on Mikal Hart's example

 This example code is in the public domain.
*/

#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 7); // RX, TX

void setup()
{
  // Open serial communications and wait for port to open:
  Serial.begin(57600);
   mySerial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }


  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port

  //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
  if (mySerial.available())
  {
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.println();
  }
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

### 结果

打开串口监视器，将波特率设置为 57600，然后播放声音。我们为您准备了 511 个不同的[数字声音](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)。每次播放一个声音时，heelight 传感器都会输出一个与声音对应的十六进制值，十六进制值的最后 2 个字符与声音值相同。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png" /></div>

:::note
如果通过 PC 或其他扬声器播放我们提供的特定声音时此传感器工作不正常，请将音量设置为较低水平。我们建议在 Windows PC 上设置为 10/100。
:::

## 资源

- [Heelight 官网](http://www.heelight.com/)
- [500+ 数字语音音频](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)
- [示例代码](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>