---
description: Grove - 土壤湿度传感器
title: Grove - 土壤湿度传感器
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Moisture_Sensor
sku: 101020008
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/cn/Grove-Moisture_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div>

这款土壤湿度传感器可用于检测土壤的湿度，或判断传感器周围是否有水，让你花园里的植物在口渴时能够向人类发出求助信号。这个传感器非常易于使用，你只需将其插入土壤中即可读取数据。借助该传感器，你可以做一个小项目，让植物向你发送类似“我现在很渴，请给我浇点水”的信息。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本                      | 变更                                       | 发布日期      |
|------------------------------|-------------------------------------------|---------------|
| Grove - Moisture Sensor V1.4 | 初始版本                                   | 2014 年 6 月  |

## 可升级为工业级传感器

借助 SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，你可以轻松将 Grove 升级为 LoRaWAN® 传感器。Seeed 不仅帮助你完成原型开发，还为你提供使用 SenseCAP 系列坚固[工业级传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业级传感器为环境感知提供开箱即用的体验。对于土壤状况监测，请参考性能和可靠性更高的 S2105 无线土壤湿度、温度和 EC 传感器。该系列包括用于土壤湿度、空气温度和湿度、光照强度、CO2、EC 以及 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，用于你下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业级传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 土壤湿度 &amp; 温度 &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特性

- 基于土壤电阻率测量的土壤湿度传感器
- 易于使用
- 2.0 cm X 6.0 cm Grove 模块

:::tip
关于 Grove 模块的更多细节请参考 [Grove System](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

|项目|条件|最小|典型|最大|单位|
|---|---|---|---|---|---|
|电压|-|3.3|-|5|V|
|电流|-|0|-|35|mA|
|输出值|传感器在干燥土壤中，传感器在潮湿土壤中，传感器在水中|0, 300, 700,|-|300, 700, 950|-|

## 支持的平台

<table align="center">
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
</table>

:::caution
上面提到的支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 应用构想

- 植物园艺
- 湿度检测
- 一致性测量

## 入门指南

:::note
如果这是你第一次使用 Arduino，我们强烈建议你在开始之前先查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
### 使用 PlatformIO 进行体验
**硬件**

- **步骤 1.** 准备以下物品：

<table align="center">
  <tr>
    <th>XIAO ESP32 C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove - Soil Moisture Sensor</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881132_3.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
  </tr>
</table>

- **步骤 2.** 将 Grove-Moisture Sensor 连接到 Seeed Studio Grove Base for XIAO 的 A0 端口。
- **步骤 3.** 将 XIAO 插入 Seeed Studio Grove Base for XIAO。
- **步骤 4.** 通过 USB 线将 XIAO 连接到电脑。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Soil_Moisture_Temperature_Sensor/xiao.jpg" /></div>

**软件**

- **步骤 1.** 将代码复制到 PlatformIO 中

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **步骤 2.** 我们将在终端上看到如下所示的湿度显示。

```
Moisture = 0
Moisture = 31
Moisture = 48
Moisture = 139
Moisture = 155
Moisture = 124
Moisture = 236
Moisture = 218
Moisture = 215
Moisture = 221
```
你可以在产品详情页的 “Wiki & Learn” 部分找到一些实用或艺术性的演示。
### 使用 Arduino 进行体验

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove-Moisture Sensor |
|--------------|-------------|-----------------| 
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **步骤 2.** 将 Grove-Moisture Sensor 连接到 Grove-Base Shield 的 A0 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线将 Seeeduino 连接到电脑。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg" /></div>

:::note
如果我们没有 Grove Base Shield，也可以像下面这样将 Grove-Moisture Sensor 直接连接到 Seeeduino。
:::

| Seeeduino       | Grove-Moisture Sensor |
|---------------|-------------------------|
| 5V           | 红色                    |
| GND           | 黑色                    |
| Not Conencted | 白色                    |
| A0            | 黄色                    |

**软件**

- **步骤 1.** 将代码复制到 Arduino IDE 中并上传。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **步骤 2.** 我们将在终端上看到如下所示的湿度显示。

```
Moisture = 0
Moisture = 31
Moisture = 48
Moisture = 139
Moisture = 155
Moisture = 124
Moisture = 236
Moisture = 218
Moisture = 215
Moisture = 221
```

### 使用 Codecraft 进行体验

#### 硬件

**步骤 1.** 将 Grove - Moisture Sensor 连接到 Base Shield 的 A0 端口。

**步骤 2.** 将 Base Shield 插到你的 Seeeduino/Arduino 上。

**步骤 3.** 通过 USB 线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并拖动一个主程序到工作区。

:::note
如果这是你第一次使用 Codecraft，请同时参考[在 Arduino 上使用 Codecraft 的指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动积木，或者打开本页末尾可下载的 cdc 文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png" /></div>

将程序上传到你的 Arduino/Seeeduino。

:::tip
当代码上传完成后，你会在串口监视器中看到显示的湿度值。
:::

### 使用 Raspberry Pi 玩转（搭配 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**. 本项目中使用的器件：

| Raspberry pi | Grove Base Hat for RasPi | Grove - Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)

- **步骤 2**. 将 Grove Base Hat 插到 Raspberry Pi 上。
- **步骤 3**. 将 Grove - Moisture Sensor 连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线将 Raspberry Pi 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg" /></div>

#### 软件

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#安装) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3.** 执行下面的命令来运行代码。

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

下面是 grove_moisture_sensor.py 代码。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
#
# Grove Base Hat for the Raspberry Pi, used to connect grove sensors.
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
'''
This is the code for
    - Grove - Moisture Sensor <https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html>`_

Examples:

    .. code-block:: python

        import time
        from grove.grove_moisture_sensor import GroveMoistureSensor

        # connect to alalog pin 2(slot A2)
        PIN = 2

        sensor = GroveMoistureSensor(PIN)

        print('Detecting moisture...')
        while True:
            m = sensor.moisture
            if 0 <= m and m < 300:
                result = 'Dry'
            elif 300 <= m and m < 600:
                result = 'Moist'
            else:
                result = 'Wet'
            print('Moisture value: {0}, {1}'.format(m, result))
            time.sleep(1)
'''
import math
import sys
import time
from grove.adc import ADC

__all__ = ["GroveMoistureSensor"]

class GroveMoistureSensor:
    '''
    Grove Moisture Sensor class

    Args:
        pin(int): number of analog pin/channel the sensor connected.
    '''
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def moisture(self):
        '''
        Get the moisture strength value/voltage

        Returns:
            (int): voltage, in mV
        '''
        value = self.adc.read_voltage(self.channel)
        return value

Grove = GroveMoistureSensor


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveMoistureSensor(pin)

    print('Detecting moisture...')
    while True:
        m = sensor.moisture
        if 0 <= m and m < 300:
            result = 'Dry'
        elif 300 <= m and m < 600:
            result = 'Moist'
        else:
            result = 'Wet'
        print('Moisture value: {0}, {1}'.format(m, result))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::tip
如果一切顺利，你将能够看到如下结果：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_moisture_sensor.py 0
Detecting moisture...
Moisture value: 0, Dry
Moisture value: 1, Dry
Moisture value: 25, Dry
Moisture value: 3, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 1, Dry
^CTraceback (most recent call last):
  File "grove_moisture_sensor.py", line 74, in <module>
    main()
  File "grove_moisture_sensor.py", line 71, in main
    time.sleep(1)
KeyboardInterrupt

```

你可以使用该传感器来检测空气质量。按 ++ctrl+c++ 退出。

:::note
你可能已经注意到，对于模拟端口，丝印引脚编号类似 **A1, A0**，然而在命令中我们使用的参数是 **0** 和 **1**，与数字端口相同。所以请确保你将模块插入正确的端口，否则可能会发生引脚冲突。
:::

### 使用 Raspberry Pi 玩转（搭配 GrovePi_Plus）

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **步骤 2.** 将 GrovePi_Plus 插到 Raspberry 上。
- **步骤 3.** 将 Grove-Moisture Sensor 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 通过 USB 线将 Raspberry 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg" /></div>

**软件**

- **步骤 1.** 按照 [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行下面的命令，使用 Grove-Moisture Sensor 测量湿度。

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

下面是 grove_moisture_sensor.py 代码。

```python
#  Here are suggested sensor values:
#   Min  Typ  Max  Condition
#   0    0    0    sensor in open air
#   0    20   300  sensor in dry soil
#   300  580  700  sensor in humid soil
#   700  940  950  sensor in water


import time
import grovepi

# Connect the Grove Moisture Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        print(grovepi.analogRead(sensor))
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")
```

- **步骤 4.** 我们将在终端上看到如下所示的湿度显示。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_moisture_sensor.py
0
90
130
150
160
218
238
```

### 使用 TI LaunchPad 玩转

**硬件**

下面的示例演示了一个简单的土壤湿度检测应用。通过它，你可以根据传感器输出的结果来判断植物是否需要浇水。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg" /></div>

**软件**

```c
/*
  Moisture-Sensor
  The following sketch demonstrates a simple application of sensing
  the moisture of the soil. You can know whether a plant needs water
  or not by observing the results that the sensor outputs.
  The circuit:
    * Moisture-Sensor attached to pin 24 (J6 plug on Grove Base BoosterPack)
    * one side pin (either one) to ground
    * the other side pin to +VCC
    * LED anode (long leg) attached to RED_LED
    * LED cathode (short leg) attached to ground
  - NOTE:
    This example code is in the public domain.
    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* Macro Define */
#define CLK 39              /* 4-digital display clock pin */
#define DIO 38              /* 4-digiral display data pin */
#define BLINK_LED RED_LED   /* blink led */
#define MOISTURE_PIN 24     /* pin of moisture sensor */
#define THRESHOLD_VALUE 300 /* threshold for watering the flowers */
#define ON HIGH             /* led on */
#define OFF LOW             /* led off */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* handle led */

/* Global Varibles */
TM1637 tm1637(CLK, DIO);    /* 4-digital display object */
int analog_value = 0;       /* varible to store the value coming from rotary angle
sensor */
int8_t bits[4] = {0};       /* array to store the single bits of the value */
/* the setup() method runs once, when the sketch starts */
void setup() {
/* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* declare the red_led pin as an OUTPUT */
    pinMode(BLINK_LED, OUTPUT);
}
/* the loop() method runs over and over again */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* read the value from the sensor */
/* if the value is smaller than threshold, turn on led */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
/* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* display by 4-digital display */
    }
    delay(200);
}
```

## 常见问题

**Q1: 输出代表什么？电压还是计数值？**

A1: 输出是电压值。使用 analogRead() 时，5V 会被分成 1023 份。所以输出值 = Vout * 1023/5。输出电压越高，湿度越高。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]**[Grove - Moisture Sensor v1.4 原理图](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)

- **[Codecraft]**[CDC 文件](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip)

## 项目

**使用 AWS IoT 的植物监测系统**：如果你计划去度假，这里有一个很棒的项目，可以使用 dweet.io 和 AWS IoT 来跟踪你的植物的温度和土壤湿度。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
