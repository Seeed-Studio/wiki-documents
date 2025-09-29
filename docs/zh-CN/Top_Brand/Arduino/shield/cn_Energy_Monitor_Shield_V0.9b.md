---
description: 能耗监测扩展板 V0.9b
title: 能耗监测扩展板 V0.9b
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Energy_Monitor_Shield_V0.9b
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Energy Monitor Shield V0.9b
category: 已停产
bzurl:
oldwikiname: Energy_Monitor_Shield_V0.9b
prodimagename:
bzprodimageurl: https://www.research.net/r/Energy_Monitor_Shield_V0-9b
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_intro.jpg)

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_h.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

能耗监测扩展板是一款兼容Arduino的扩展卡，专为构建带有LCD屏幕的能耗监测系统而设计，并提供了连接无线收发器nRF24L01+的接口。

型号：[830070001](https://www.seeedstudio.com/)

## 特性

* 可连接多达三个交流传感器（30-100A）。

* 支持Nokia LCD5110液晶屏

* 通过跳线关闭LCD背光

* 两个控制按钮（操作一个模拟引脚）

* 连接2.4G nRF24L01+收发器的接口

* GROVE兼容连接器：I2C

* 完全兼容以太网扩展板（Wiznet 5100 + SD）

## 布局和原理图

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/Em-top.jpg)

* EM扩展板左侧是三个电流传感器连接器，右侧是LCD屏幕连接器。

* 跳线JP1用于启用/禁用LCD屏幕背光。

* 右上角是I2C连接器。

* 右侧是两个按钮（标记为S1和S2）。

* 板子中央（LCD屏幕右侧）是nRF24L01+连接器。

**设备原理图**

## 基本功能

在基本版本中（不使用以太网扩展板），可以使用电流传感器组织对三个不同电路的能耗监测。有关当前消耗水平的信息可以显示在LCD屏幕上。设备管理可以使用扩展板上的两个按钮来组织。获得的数据可以通过nRF24L01+收发器传输。

## 扩展能力

此外，EM扩展板可以使用i2c Grove兼容连接器连接任何设备（传感器、显示器等）。
EM扩展板设计为完全兼容以太网扩展板（Wiznet 5100 + SD） - 因此您可以将这两个扩展板一起使用，创建更先进的电力监测设备（在SD卡上记录日志并在网页上呈现数据）。

## 接口

* A0、A1、A2 - 用于连接交流传感器

* A4（SDA）、A5（SCL） - 显示在"I2C"连接器上（连接器的另外两个引脚 - VCC和GND用于传感器供电）

* 连接RF模块nRF24L01+的接口：

  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D8 - RF_CE

    * D7 - RF_CSN

    * D2 - RF_IRQ

* 连接LCD5110的接口：

  * D11 - MOSI
  * D13 - SCK

    * D5 - LCD_D/C

    * D6 - LCD_RST

    * D3 - LCD_CS

* A3 - 按钮

## 库文件

### 必需的库文件

使用能耗监测扩展板需要以下库文件：

* 与收发器 nRF24L01+ 配合使用 - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* 使用显示屏 LCD 51110（支持 SPI）- [LCD5110_Graph_SPI](https://github.com/stepanovalex/LCD5110_Graph_SPI/archive/master.zip)

* 与电流传感器配合使用 - [EmonLib](https://github.com/openenergymonitor/EmonLib/archive/master.zip)

* 您必须使用来自 - [www.mysensors.org](https://github.com/mysensors/Arduino/tree/master) 的库文件

* MySensors Arduino 库 [(v1.5)](http://www.mysensors.org/download/sensor_api_15)

需要在使用 RF24 和 LCD 显示屏时用到的库文件：SPI

### 使用库文件的特性

库文件使用了示例代码，通过这些示例可以理解它们的工作原理。

RF 模块的初始化如下：

```
... //RF24 radio(CE,CSN); RF24 radio(7,8); ...
```

LCD 显示屏的初始化如下：

```
... //LCD5110 myGLCD(DC,RST,CS); LCD5110 myGLCD(5,6,3); ...
```

## 简单演示

```cpp

#include <SPI.h>
#include <LCD5110_Graph_SPI.h>
#include "EmonLib.h"   

#define WINDOW 15
#define DELTA 1500

EnergyMonitor emon1;

double sIrms;
float Pcur;
float Pmax;
float Pmin=100;

LCD5110 myGLCD(5,6,3);

extern unsigned char SmallFont[];

unsigned long measureTime;
boolean flag=false;
double delta=0;

#define DELTAMEASURE 30000

void setup(void)
{
  myGLCD.InitLCD(70);
  myGLCD.setFont(SmallFont);

  myGLCD.update();

  emon1.current(0, 111.1);             // 电流：输入引脚，校准。
  double Irms[WINDOW];
  // 校准（查找偏移量）
  double cIrms = 0;
  flag = false;

  while (!flag) {
    myGLCD.print("calibrating", 0, 0);
    myGLCD.update();
    Irms[0] = emon1.calcIrms(1480); // 测量中的第一个值显然是"不准确的"
      //Serial.println("calculate delta");
      for (int i=0; i<WINDOW; i++) {
        Irms[i] = emon1.calcIrms(1480);
        cIrms = cIrms + Irms[i];
        delay(100);
      }
      delta = cIrms/WINDOW;
      flag = true;
  }

//myGLCD.print(" ready", 0, 0);
    //myGLCD.update();    

}

void loop(void)
{
  // 写入当前值
  sIrms = emon1.calcIrms(1480) - delta;  // 仅计算 Irms
  sIrms = abs(sIrms);
  Pcur = sIrms*0.220;

    // 打印接收到的数据
    char tbuf[6];
    dtostrf(Pcur,5,5,tbuf);
    myGLCD.print(tbuf, 0, 0);
    dtostrf(analogRead(A3),4,0,tbuf);
    myGLCD.print(tbuf, 30, 15);

    myGLCD.update();

    delay(250);

}
```

## 无线技术简单演示

```cpp
/*
 此示例代码属于公共领域。
 */

#include <SPI.h>
#include <MySensor.h>  // 包含 MySensors.org 库 V1.5
#include "EmonLib.h" // 包含 Emon 库
#include <LCD5110_Graph_SPI.h> // 包含 NOKIA5110 库

#define CHILD_ID_POWER 0

EnergyMonitor emon;

LCD5110 myGLCD(5,6,3);
extern unsigned char SmallFont[];

MyTransportNRF24 transport(7, 8); //用于 EMv1
MySensor gw(transport);

unsigned long lastSend;
unsigned long SEND_FREQUENCY = 20000; // 发送之间的最小时间间隔（以毫秒为单位）。我们不想向网关发送垃圾信息。

float Irms;
float lastIrms = -99;

char tbuf[8];
char sbuf[12];

MyMessage IrmsMsg(CHILD_ID_POWER, V_KWH);

void setup()  
{
  myGLCD.InitLCD();
  myGLCD.setFont(SmallFont);
  myGLCD.update();

  // 第三个参数启用中继器模式。
  gw.begin(NULL, AUTO, true),
  gw.sendSketchInfo("Energy Monitor v1", "1.0");

//  emon.current(0, 111.1);             // 电流：输入引脚，校准。
   emon.current(0, 66.5);

  // 向网关注册所有传感器（它们将被创建为子设备）

  gw.present(CHILD_ID_POWER, S_POWER);
}

void loop()      
{      
  gw.process();
  unsigned long now = millis();

  double Irms = emon.calcIrms(1480);  // 仅计算 Irms
  float realIrms  = emon.Irms*220;        //将实际功率提取到变量中

 if (realIrms != lastIrms) {
      gw.send(IrmsMsg.set(realIrms, 1)); //发送到网关

  lastIrms=realIrms;
  }

   dtostrf(realIrms,5,2,tbuf);
    sprintf(sbuf, "  %s kWt", tbuf);
    myGLCD.print(sbuf, 20, 0);   
    myGLCD.print("Powr:", 0, 0);  

    dtostrf(Irms,5,2,tbuf);
    sprintf(sbuf, "  %s Amp", tbuf);
    myGLCD.print(sbuf, 20, 10);   
    myGLCD.print("Irms:", 0, 10);  

    myGLCD.update();

      Serial.print("Power: ");
      Serial.println(realIrms);

  gw.sleep(SEND_FREQUENCY);
  }
```

## 版本跟踪

<table cellPadding={5} cellSpacing={0}>
  <tbody>
    <tr>
      <td width={150}>修订版本</td>
      <td width={450}>描述</td>
      <td width={80}>发布日期</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>1.0</td>
      <td>公开版本</td>
      <td>01.04.2014</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9b</td>
      <td>公开版本（未生产）</td>
      <td>20.10.2013</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9</td>
      <td>原型</td>
      <td>10.09.2013</td>
    </tr>
  </tbody>
</table>

## 问题与解答

* 博客 [Energy Monitor Shield - 无线能耗监控](//devicter.blogspot.ru/2014/03/energy-monitor-shield.html#more) RU

* 通过邮件提问 support@devicter.ru

## 如何购买  

本产品可通过以下渠道购买：

* 中国（全球发货）

  * [Seeed 商店](https://www.seeedstudio.com/depot/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html)

* 俄罗斯

  * [Devicter 商店](http://devicter.ru/goods/EM-Shield)

## 许可证  

本文档采用知识共享 [署名-相同方式共享许可证 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用

[GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可证，详情请参见源代码文件。

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