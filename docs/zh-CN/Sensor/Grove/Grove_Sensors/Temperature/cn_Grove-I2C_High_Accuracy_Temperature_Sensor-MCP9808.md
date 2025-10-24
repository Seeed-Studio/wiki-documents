---
description: Grove - I2C 高精度温度传感器(MCP9808)
title: Grove - I2C 高精度温度传感器(MCP9808)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG" /></div>

Grove - I2C 高精度温度传感器(MCP9808) 是一个基于 MCP9808 的高精度数字模块。与其他传感器不同，您可以选择
此传感器的测量分辨率。除了高精度温度测量外，我们还提供可编程温度
报警功能。我们使用单独的引脚输出报警信号，您会发现将此信号用作中断来控制其他板子非常方便。

总而言之，我们相信这个传感器将成为温度控制领域的新星。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 来实现您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空气温湿度传感器</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特性

- 高精度
  - ±0.25 (典型值) 从 -40°C 到 +125°C
  - ±0.5°C (最大值) 从 -20°C 到 100°C
  - ±1°C (最大值) 从 -40°C 到 +125°C

- 用户可选择的测量分辨率
  - +0.5°C, +0.25°C, +0.125°C, +0.0625°C
- 用户可编程温度报警输出
- I2C 接口

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V/5V|
|工作范围|-40°C 到 +125°C|
|数字接口|I2C 标准 400 kHz|
|I2C 地址|0x18(默认)/ 0x18~0x1F(可选)|

## 应用

- 工业应用
- 工业冷冻机和冰箱
- 食品加工
- 个人电脑和服务器
- PC 外设
- 消费电子产品
- 手持/便携式设备

## 硬件概述

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg" /></div>

**I2C 地址**

我们在 PCB 背面提供了 3 组焊盘。默认情况下 AD0~AD2 都连接到低电平焊盘，您可以切断这些焊盘并将它们焊接到另一侧（高电平）。
I2C 地址是一个 7 位地址 <mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>。<mark>0011</mark> 是地址代码，这是出厂设置，我们无法更改。
<mark>A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark> 是从机地址，我们可以更改它。默认设置是 A<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0，所以默认 I2C
地址是 <mark>0011000</mark>。通常地址应该是 8 位，所以我们需要在 MSB（最高有效位）添加一位 0，然后我们得到 <mark>0001,1000</mark>。这是一个二进制地址，
我们在代码中经常使用十六进制地址，所以让我们将二进制地址转换为十六进制地址，这里我们得到 <mark>0x18</mark>。同样地，如果我们将所有焊盘焊接到
高电平，我们将得到 <mark>0001,1111</mark>，即 <mark>0x1F</mark>。所以 I2C 地址范围从 0x18 到 0x1F，其中您可以选择任何您想要的，只需确保您将在
**Grove_Temperature_sensor_MCP9808-master** 库中的 **Seeed_MCP9808.h** 文件中更改 I2C 地址。

```cpp
#define DEFAULT_IIC_ADDR  0X18
```

地址映射

A<sub>2</sub>=0|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-000,0x18|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-001,0x19
A<sub>1</sub>=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-010,0x1A|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-011,0x1B

A<sub>2</sub>=1|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-100,0x1C|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-101,0x1D
A<sub>1</sub>=0=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-110,0x1E|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-111,0x1F

**<span style={{textDecoration: 'overline'}}>ALE</span> 焊盘**

您可以在 PCB 背面看到 <span style={{textDecoration: 'overline'}}>ALE</span> 焊盘。从此焊盘输出的报警信号可以用作其他控制器的外部中断信号。
默认输出为高电平，在此板上应该是 3.3V。当满足条件时，输出电压变为低电平（0V）。当您完成本教程时，您可以设置条件 😄

### 原理图

**I2C 地址**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg" /></div>

如上所述，我们使用这三组焊盘来选择 I2C 地址，如果您想更改默认地址，您可以切断导线并重新焊接。

**MCP9808**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg" /></div>

如您所见，<span style={{textDecoration: 'overline'}}>ALE</span>
焊盘通过上拉电阻连接到 3.3V。

 **双向电平转换电路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg" /></div>

这是一个典型的双向电平转换电路，用于连接 I2C 总线的两个不同电压部分。该传感器的 I<sup>2</sup>C 总线使用 3.3V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V，则需要此电路。在上面的原理图中，**Q6** 和 **Q5** 是 N 沟道 MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::tip
        在本节中，我们只向您展示原理图的一部分，完整文档请参考 [资源](https://wiki.seeedstudio.com/cn/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上面提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - I2C高精度温度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank">立即购买</a>|

:::note

**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都配有一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - I2C高精度温度传感器连接到Grove-Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/connect.jpg" /></div>

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino     |  Grove-MCP9808          |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Grove MCP9808](https://github.com/Seeed-Studio/Grove_Temperature_sensor_MCP9808)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤3.** 重启Arduino IDE。通过路径打开示例：**文件 --> 示例 --> Grove Temperature Sensor MCP9808 --> MCP9808_demo_with_limit**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/demo_path.jpg" /></div>

:::tip
        如上图所示，我们为您提供了两个演示，**MCP9808_basic_demo**和**MCP9808_demo_with_limit**。**MCP9808_basic_demo**只提供温度，警报功能被禁用。
        而对于**MCP9808_demo_with_limit**演示，警报功能被启用。如果您只想要温度，基本演示就足够了。如果您想使用警报功能，您应该选择限制演示。
:::

- **步骤4.** 上传演示。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按++ctrl+shift+m++键。如果一切正常，您将得到结果。

结果应该像这样

```cpp
sensor init!!
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.19
temperature value is: 29.25
```

**现在，让我们看看如何使用 <span style={{textDecoration: 'overline'}}>ALE</span> 引脚。**

演示代码 **MCP9808_demo_with_limit** 中的代码：

```cpp
#include "Seeed_MCP9808.h"


MCP9808  sensor;

void setup()
{
    Serial.begin(115200);
    if(sensor.init())
    {
        Serial.println("sensor init failed!!");
    }
    //Set upper limit is 30°C
    sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
    delay(10);
    //Set upper limit is 32°C
    sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,0x0200);
    delay(10);
    //Enable the alert bit.The alert bit outputs low when the temperature value beyond limit.Otherwise stays high.
    sensor.set_config(SET_CONFIG_ADDR,0x0008);

    Serial.println("sensor init!!");
}


void loop()
{
    float temp=0;
    //Get temperature ,a float-form value.
    sensor.get_temp(&temp);
    Serial.print("temperature value is: ");
    Serial.println(temp);
    delay(1000);
}

```

除了测量温度外，这段代码还实现了一个功能。当温度低于30℃时，**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**输出默认高电平-3.3v。
当温度高于30℃时，**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**将输出低电平-0v。

所以你可能会问，如果我想改变阈值温度怎么办。好的，请看第14行：

```cpp
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
```

我们使用这个函数来控制温度，第一个参数是UPPER_LIMIT寄存器地址，第二个参数<mark>0x01e0</mark>是我们设置的十六进制温度，如上所述，它是30℃。<mark>0x01e0</mark>是一个四位十六进制数，右边的最后一位代表小数部分。我们将其设置为0，那么有效数字是<mark>0x1e</mark>。**e**在十进制中表示14，
高位**1**在十进制中表示16。所以<mark>0x1e</mark>等于16+14=30。

我们在文件**Seeed_MCP9808.cpp**中提供了3个函数。  
```sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16);```
```sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16);```
```sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16);```

如前所述，**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**的默认输出是高电平，当温度满足特定条件时，输出电平变为低电平。你可以使用这3个函数来设置你自己的条件。

**sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16)** 用于设置温度下限，**u16**是我们设置的4位十六进制温度。当温度低于我们设置的值时，**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**的输出将变低。

**sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16)** 用于设置温度上限，同样**u16**是我们设置的4位十六进制温度。当温度高于我们设置的值时，**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**的输出将变低。

**sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16)** 用于中断模式，在这个wiki中我们只展示如何作为比较器工作。如果你想了解更多，请查看[数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf)。

现在我们可以通过lower_limit和upper_limit设置一个条件区域，当温度进入条件区域时，输出将变低。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/Zone.jpg" /></div>

例如，如果你想要**<span style={{textDecoration: 'overline'}}>ALE</span> 引脚**在28℃和30℃之间输出高电平，当温度高于30℃或低于28℃时输出低电平。
代码应该是这样的：

```cpp

sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,0x01c0);
delay(10);
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
delay(10);

```

:::caution
        请确保**upper_limit**高于**lower_limit**，否则不会正常输出。并且请确保**critical_limit**高于**upper_limit**。需要一定的delay()来确保寄存器被正确写入。
:::

### 与树莓派一起使用

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| 树莓派 | Grove Base Hat for RasPi| Grove - I2C High Accuracy Temperature Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html)|

- **步骤 2**. 将Grove Base Hat插入树莓派。
- **步骤 3**. 将Grove - I2C High Accuracy Temperature Sensor连接到Base Hat的I2C端口。
- **步骤 4**. 通过USB线将树莓派连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/MCP9808_Hat.jpg" /></div>

#### 软件

:::caution
如果你使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，你必须**仅使用Python3**来使用这个命令行。
:::

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境并将grove.py安装到你的树莓派。

- **步骤 2**. 执行以下命令来运行代码。

```

# Python3 虚拟环境
virtualenv -p python3 env
source env/bin/activate
#输入命令
grove_high_accuracy_temperature
```

以下是 mcp9808.py 代码。

```python

import math
import threading
from grove.i2c import Bus 
from grove.temperature import Temper

RES_LOW = 0x00
RES_MEDIUM = 0x01
RES_HIGH = 0x02
RES_PRECISION = 0x03

MCP9808_REG_AMBIENT_TEMP = 0x05

class TemperMCP9808(Temper):
    def __init__(self, address=0x18):
        self._addr = address
        self._bus = Bus()
        self._resolution = Temper.RES_1_2_CELSIUS

    def _derive_res(self, res):
        ares = -1
        if res >= Temper.RES_1_2_CELSIUS:
            ares = RES_LOW
        elif res >= Temper.RES_1_4_CELSIUS:
            ares = RES_MEDIUM
        elif res >= Temper.RES_1_8_CELSIUS:
            ares = RES_HIGH
        elif res >= Temper.RES_1_16_CELSIUS:
            ares = RES_PRECISION

        if ares < 0:
            return False
        self._bus.write_byte(self._addr, ares)
        # print("ares = {}".format(ares))
        return True

    @property
    def temperature(self):
        result = self._bus.read_word_data(self._addr, MCP9808_REG_AMBIENT_TEMP)
        # Swap the bytes
        data = (result & 0xff)  8 | (result & 0xff00)  8
        # print("data = {}".format(data))
        # print("data = {}".format(hex(data)))
        # Check if the temperature is negative
        if data & 0x1000:
            data = -((data ^ 0x0FFF) + 1)
        else:
            data = data & 0x0fff
        return data / 16.0
```

:::tip success
如果一切顺利，您将能够看到以下结果
:::

```python

(env)pi@raspberrypi:~ grove_high_accuracy_temperature 
Insert Grove - I2C-High-Accuracy-Temperature
  to Grove-Base-Hat any I2C slot
Detecting temperature...
24.5 Celsius
24.5 Celsius
24.375 Celsius
^CTraceback (most recent call last):
  File "grove_high_accuracy_temperature.py", line 54, in <module>
    main()
  File "grove_high_accuracy_temperature.py", line 50, in main
    time.sleep(1)
KeyboardInterrupt

```

您可以通过简单地按 **ctrl+c** 来退出此程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C 高精度温度传感器(MCP9808) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Seeed MCP9808 库](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [MCP9808 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf)
- **[PDF]** [2N7002A 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)
- **[PDF]** [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HQr6jSmfJs0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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