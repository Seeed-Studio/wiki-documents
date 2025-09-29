---
description: Grove - I2C 颜色传感器
title: Grove - I2C 颜色传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_Color_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

该模块基于具有数字输出 I2C 的颜色传感器 TCS3414CS。基于 8\*2 滤波光电二极管阵列和 16 位模数转换器，您可以测量环境光的颜色色度或物体的颜色。在 16 个光电二极管中，4 个具有红色滤光片，4 个具有绿色滤光片，4 个具有蓝色滤光片，4 个没有滤光片（透明）。通过同步输入引脚，外部脉冲光源可以提供精确的同步转换控制。

:::note
请注意，最新版本 V2.0 已将 IC 替换为 TCS3472，旧库也已更新。如果您使用的是 V2.0 版本，请使用[新库](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)。
:::

特性
--------

- Grove 兼容接口
- 16 位数字输出，支持 I2C
- SYNC 输入将积分周期同步到调制光源
- 工作温度范围 -40°C 至 85°C
- 可编程中断功能，具有用户定义的上下阈值设置
- 符合 RoHS 标准

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
-------------

| 参数 | 值/范围            |
|-----------|------------------------|
| PCB 尺寸  | 2.0 cm \* 4.0 cm       |
| 接口 | 2.0mm 间距排针 |
| VCC       | 3.3 - 6.0 V            |
| I2C 速度 | 400 kHz                |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南
---------------

以下文档帮助用户开始使用 Grove。

- [前言 - 入门指南](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Grove 介绍](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### 硬件连接

Grove 产品拥有一个生态系统，所有产品都具有相同的连接器，可以插入 Grove Base Shield。将此模块连接到 Base Shield 的 I2C 端口。但是，您也可以通过跳线将 Grove - I2C 颜色传感器连接到 Arduino，而无需 Base Shield。

| Arduino UNO | Grove - I2C 颜色传感器 |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

软件安装
---------------------

下载 Arduino 并安装 Arduino 驱动程序

Seeeduino/Arduino 入门指南

演示
-----

该模块可用于检测光源的颜色或物体的颜色。当用于检测光源颜色时，应关闭 LED 开关，光源应直接照射传感器。当用于检测物体颜色时，应打开 LED，并将物体紧贴外壳顶部放置。感测物体颜色的原理是反射感测理论。如下图所示。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### 颜色传感器库

我们创建了一个库来帮助您快速开始使用 Seeeduino/Arduino，在本节中我们将向您展示如何设置库。

#### 设置

1. 从 Grove_I2C_Color_Sensor github 页面[下载库代码的 zip 文件](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)。如果您使用的是最新版本 V2.0（IC 是 TCS3472），请使用这个[新库](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
2. 将下载的文件解压到您的 …/arduino/libraries 目录中。
3. 将解压的文件夹重命名为 "Color_Sensor"
4. 启动 Arduino IDE（如果已打开则重新启动）。

#### 功能描述

这是库中最重要/最有用的功能，我们邀请您自己查看 .h 和 .cpp 文件以了解所有可用的功能。

##### 通过库函数读取 RGB 数据

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** 保存 R 值的变量地址。
- **green:** 保存 G 值的变量地址。
- **blue:** 保存 B 值的变量地址。

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // 当打开颜色传感器 LED 时，ledStatus = 1；当关闭颜色传感器 LED 时，ledStatus = 0。
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //将 RGB 值读取到变量中。
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### 颜色传感器示例/应用

此示例展示了如何使用 Grove - I2C 颜色传感器的功能，并通过[可链接 RGB LED Grove](/cn/Grove-Chainable_RGB_LED/) 显示检测到的颜色。

:::note
如果您之前没有将 <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">Grove-可链接 RGB LED 库</a> 下载到您的 Arduino IDE 中，请先下载并设置该库。
:::

- 打开 File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED 示例以获取完整示例，或将下面的代码复制并粘贴到新的 Arduino 草图中。

**描述**：此示例可以测量环境光的颜色色度或物体的颜色，并通过可链接 RGB LED Grove 显示检测到的颜色。

您也可以使用其他显示模块来显示 Grove - I2C 颜色传感器检测到的颜色。

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>
 
#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            //可链接 RGB LED 的数量
 
ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);
 
void setup()
{
    Serial.begin(9600);
    Wire.begin();
}
 
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // 当打开颜色传感器 LED 时，ledStatus = 1；当关闭颜色传感器 LED 时，ledStatus = 0。
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //将 RGB 值读取到变量中。
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- 将代码上传到开发板。
- 然后 Grove_-_Chainable_RGB_LED 将显示检测到的颜色。

其他参考
---------------

该模块基于颜色传感器 TCS3414CS。TCS3414CS 数字颜色传感器从四个通道返回数据：红色(R)、绿色(G)、蓝色(B) 和透明(C)（无滤波）。来自红、绿、蓝通道 (RGB) 的响应可用于确定特定光源的色度坐标 (x, y)。这些标准由国际照明委员会 (CIE) 制定。CIE 是关注颜色和颜色测量的主要国际组织。为了使用 TCS3414CS 获取给定物体的颜色，我们必须首先将传感器响应 (RGB) 映射到 CIE 三刺激值 (XYZ)。然后需要计算色度坐标 (x, y)。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

色度计算过程概述

进行转换的方程式：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

转换方程式

- 当我们获得坐标 (x, y) 时，请参考下图以获得推荐的颜色。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## 常见问题

**Q1: 如何理解这些命令？例如，REG_GREEN_LOW = 0xD0**

A1: 从附图中，您可以看到命令中包含的内容。当使用字节协议命令时，必须是 0x80+ADDRESS 的格式。例如，REG_TIMING( 01h ) = 0x81
对于字节和块读取，命令应该是 0xC0+ADDRESS，REG_GREEN_LOW( 10h ) = 0xD0。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C 颜色传感器 Eagle 文件 V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C 颜色传感器 Eagle 文件 V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源

---------

- **[库文件]**[Grove - I2C 颜色传感器 V1.2 库文件](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[库文件]**[Grove - I2C 颜色传感器 V2.0 库文件](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Grove-I2C 颜色传感器 Eagle 文件 V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Grove-I2C 颜色传感器 Eagle 文件 V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[数据手册]**[TCS3414-A 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[数据手册]**[TCS3472 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

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

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松地将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>