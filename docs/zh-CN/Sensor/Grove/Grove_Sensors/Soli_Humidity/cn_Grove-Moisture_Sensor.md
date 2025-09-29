---
description: Grove - 湿度传感器
title: Grove - 湿度传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Moisture_Sensor
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div>

这款湿度传感器可用于检测土壤的湿度或判断传感器周围是否有水，让您花园中的植物在口渴时能够向人类求助。这个传感器使用非常简单，您只需将其插入土壤中并读取数据即可。使用这个传感器，您可以制作一个小项目，让植物向您发送消息，比如"我现在渴了，请给我一些水。"

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本              | 变更                                   | 发布日期 |
|------------------------------|-------------------------------------------|---------------|
| Grove - 湿度传感器 V1.4 | 初始版本                                   | 2014年6月     |

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和坚固性的 S2105 无线土壤湿度、温度和 EC 传感器，用于土壤状况监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
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
- 2.0 cm X 6.0 cm grove 模块

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

|项目|条件|最小值|典型值|最大值|单位|
|---|---|---|---|---|---|
|电压|-|3.3|-|5|V|
|电流|-|0|-|35|mA|
|输出值|传感器在干燥土壤中，传感器在潮湿土壤中，传感器在水中|0, 300, 700,|-|300, 700, 950|-|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 应用创意

- 植物园艺
- 湿度感应
- 一致性测量

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 一起使用

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove-湿度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **步骤 2.** 将 Grove-湿度传感器连接到 Grove-Base Shield 的 A0 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg" /></div>

:::note
如果我们没有 Grove Base Shield，我们也可以直接将 Grove-湿度传感器连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove-湿度传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| A0            | 黄色                  |

**软件**

- **步骤 1.** 将代码复制到 Arduino IDE 中并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

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

- **步骤 2.** 我们将在终端上看到湿度显示如下。

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

### 与 Codecraft 一起使用

#### 硬件

**步骤 1.** 将 Grove - 湿度传感器连接到 Base Shield 的 A0 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用 Codecraft，请同时查看 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的 cdc 文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png" /></div>

将程序上传到您的 Arduino/Seeeduino。

:::tip
当代码上传完成后，您将在串口监视器中看到湿度值的显示。
:::

### 与 Raspberry Pi 一起使用（配合 Raspberry Pi 的 Grove Base Hat）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi | Grove - Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3**. 将 Grove - Moisture Sensor 连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg" /></div>

#### 软件

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

以下是 grove_moisture_sensor.py 代码。

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
如果一切顺利，您将能够看到以下结果：
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

您可以使用此传感器检测空气质量。按 ++ctrl+c++ 退出。

:::note
您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此请确保将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与 Raspberry Pi 配合使用（使用 GrovePi_Plus）

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-Moisture Sensor 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg" /></div>

**软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令使用 Grove-湿度传感器来测量湿度。

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

这里是 grove_moisture_sensor.py 代码。

```python
#  以下是建议的传感器数值：
#   最小值  典型值  最大值  条件
#   0    0    0    传感器在空气中
#   0    20   300  传感器在干燥土壤中
#   300  580  700  传感器在湿润土壤中
#   700  940  950  传感器在水中


import time
import grovepi

# 将 Grove 湿度传感器连接到模拟端口 A0
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

- **步骤 4.** 我们将在终端上看到湿度显示如下。

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

### 与 TI LaunchPad 一起使用

**硬件**

以下示例演示了检测土壤湿度的简单应用。通过这个，您可以通过观察传感器输出的结果来了解您的植物是否需要浇水

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg" /></div>

**软件**

```c
/*
  湿度传感器
  以下示例演示了检测土壤湿度的简单应用。
  您可以通过观察传感器输出的结果来了解植物是否需要浇水。
  电路：
    * 湿度传感器连接到引脚 24（Grove Base BoosterPack 上的 J6 插头）
    * 一侧引脚（任意一个）接地
    * 另一侧引脚接 +VCC
    * LED 阳极（长脚）连接到 RED_LED
    * LED 阴极（短脚）接地
  - 注意：
    此示例代码属于公共领域。
    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* 宏定义 */
#define CLK 39              /* 4位数码管时钟引脚 */
#define DIO 38              /* 4位数码管数据引脚 */
#define BLINK_LED RED_LED   /* 闪烁LED */
#define MOISTURE_PIN 24     /* 湿度传感器引脚 */
#define THRESHOLD_VALUE 300 /* 浇花阈值 */
#define ON HIGH             /* LED开 */
#define OFF LOW             /* LED关 */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* 处理LED */

/* 全局变量 */
TM1637 tm1637(CLK, DIO);    /* 4位数码管对象 */
int analog_value = 0;       /* 存储来自旋转角度传感器值的变量 */
int8_t bits[4] = {0};       /* 存储数值各位数字的数组 */
/* setup() 方法在程序开始时运行一次 */
void setup() {
/* 初始化4位数码管 */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* 声明红色LED引脚为输出 */
    pinMode(BLINK_LED, OUTPUT);
}
/* loop() 方法反复运行 */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* 从传感器读取数值 */
/* 如果数值小于阈值，点亮LED */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* 使用时重置数组 */
    for(int i = 3; i >= 0; i--) {
/* 获取模拟值的各位数字 */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* 通过4位数码管显示 */
    }
    delay(200);
}
```

## 常见问题

**Q1: 输出值是什么意思？是电压还是计数值？**

A1: 输出是电压值。当使用 analogRead() 时，5V 会被 1023 除。所以输出值 = Vout * 1023/5。输出电压越高，湿度越高。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]**[Grove - 湿度传感器 v1.4 原理图](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)

- **[Codecraft]**[CDC 文件](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip)

## 项目

**使用 AWS IoT 的植物监测系统**：如果您计划度假，这是一个使用 dweet.io 和 AWS IoT 跟踪植物温度和土壤湿度的绝佳项目。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

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