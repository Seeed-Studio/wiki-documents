---
description: Grove - 多通道气体传感器
title: Grove - 多通道气体传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Multichannel_Gas_Sensor
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor2.png" />
      </td>
    </tr>
  </tbody></table>



Grove – 多通道气体传感器是一款环境检测传感器，内置 MiCS-6814 芯片，可以检测多种有害气体。由于其多通道设计，可以同时测量三种气体，因此可以帮助您监测多种气体的浓度。

该传感器属于 **Grove 系统**，您可以将其插入 **Base shield** 并直接与 Arduino 配合使用，无需任何跳线。它的接口是 I2C，因此将其插入 Base shield 的 I2C 端口，然后就可以开始使用了。

<div class="admonition caution">
<p class="admonition-title">注意</p>
传感器数值仅反映气体浓度在允许误差范围内的大致趋势，并不代表精确的气体浓度。检测空气中的某些成分通常需要更精确和昂贵的仪器，这是单个气体传感器无法做到的。如果您的项目旨在获得非常精确的气体浓度，那么我们不推荐使用这款气体传感器。
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)

:::tip
     我们已经将产品升级为 [多通道气体传感器 v2](https://wiki.seeedstudio.com/cn/Grove-Multichannel-Gas-Sensor-V2/)，提供了更详细的文档和更多的板载传感器模块。此外，我们还发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

## 使用前准备

### 相关阅读

我们建议您在使用气体传感器之前阅读这些知识，这将帮助您更多地了解 Arduino 和我们的产品，也会让您更容易使用开源硬件。

-   Arduino 入门指南
-   什么是 Grove 系统
-   为什么我需要 Base shield？

阅读完这些内容后，您将了解如何使用 Base shield 与 Grove 产品配合 Arduino 正常工作。让我们开始吧！

### 准备工作

本教程将包括一些必要的产品：

-   Arduino UNO R3 或 Seeeduino v4
-   Base Shield
-   Grove - 多通道气体传感器

硬件概述
-----------------

<!-- <center>
![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png)
</center> -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" alt="pir" width={600} height="auto" /></p>


上图中标出了四个引脚

| 引脚标签 | 描述             |
|-----------|-------------------------|
| GND       | 连接到地       |
| VCC       | 电源供电：3.3V - 5V |
| SDA       | I2C 数据                |
| SCL       | I2C 时钟               |

电源供电范围是 3.3V 到 5V，因此该传感器可以与输出电压为 3.3V 的微控制器兼容。

特性
-------

-   一个封装内有三个完全独立的传感元件
-   内置 ATmega168PA
-   I2C 接口，可编程地址
-   加热功率可关闭以实现低功耗
-   可检测气体
    -   一氧化碳 CO 1 – 1000ppm
    -   二氧化氮 NO2 0.05 – 10ppm
    -   乙醇 C2H6OH 10 – 500ppm
    -   氢气 H2 1 – 1000ppm
    -   氨气 NH3 1 – 500ppm
    -   甲烷 CH4 &gt;1000ppm
    -   丙烷 C3H8 &gt;1000ppm
    -   异丁烷 C4H10 &gt;1000ppm

框图
-------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg" alt="pir" width={600} height="auto" /></p>


支持的平台
<!-- -------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::


电气特性
--------------------------

| 项目          | 条件       | 最小值 | 典型值 | 最大值 | 单位 |
|---------------|------------|--------|--------|--------|------|
| 电压          | -          | 3.1    | 3.3    | 5.25   | V    |
| 纹波          | @最大功率  | -      | 80     | 100    | mV   |
| 加热功率      | -          | -      | -      | 88     | mW   |
| 最大功率      | -          | -      | -      | 150    | mW   |
| ADC精度       | -          | -      | 10     | -      | 位   |
| I2C速率       | -          | -      | 100    | 400    | kHz  |
| VIL           | @I2C       | -0.5   | -      | 0.99   | V    |
| VIH           | @I2C       | 2.31   | -      | 5.25   | V    |

### RED传感器性能

| RED传感器特性              | 符号 | 典型值 | 最小值 | 最大值 | 单位 |
|----------------------------|------|--------|--------|--------|------|
| 空气中感应电阻             | R0   | -      | 100    | 1500   | kΩ   |
| 典型CO检测范围             | FS   | -      | 1      | 1000   | ppm  |
| 灵敏度因子                 | SR   | -      | 1.2    | 50     | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg" alt="pir" width={600} height="auto" /></p>



### OX传感器性能

| OX传感器特性                | 符号 | 典型值 | 最小值 | 最大值 | 单位 |
|-----------------------------|------|--------|--------|--------|------|
| 空气中感应电阻              | R0   | -      | 0.8    | 20     | kΩ   |
| 典型NO2检测范围             | FS   | -      | 0.05   | 10     | ppm  |
| 灵敏度因子                  | SR   | -      | 2      | -      | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### NH3传感器性能

| NH3传感器特性               | 符号 | 典型值 | 最小值 | 最大值 | 单位 |
|-----------------------------|------|--------|--------|--------|------|
| 空气中感应电阻              | R0   | -      | 10     | 1500   | kΩ   |
| 典型NH3检测范围             | FS   | -      | 1      | 300    | ppm  |
| 灵敏度因子                  | SR   | -      | 1.5    | 15     | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg" alt="pir" width={600} height="auto" /></p>


入门指南
-------------

:::warning
    传感器需要预热至少10分钟才能获得稳定的数据。
:::
**硬件安装：**

1.将Grove - 多通道气体传感器连接到Seeeduino。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg" alt="pir" width={600} height="auto" /></p>


**上传代码：**

2.下载[Arduino库和Grove/Xadow固件](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor/archive/master.zip)并[安装](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)到Arduino库中。

3.通过路径直接打开代码：文件 -> 示例 -> Mutichannel_Gas_Sensor-> ReadSensorValue_Grove。

ReadSensorValue_Grove的代码如下所示。

```c
// Read Data from Grove - Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Serial.begin(115200);  // start serial for output
    Serial.println("power on!");
    gas.begin(0x04);//the default I2C address of the slave is 0x04 ; for verison 2 of the multichannel gas sensor the i2c address is 0x08
    gas.powerOn();
    Serial.print("Firmware Version = ");
    Serial.println(gas.getVersion());
}

void loop()
{
    float c;

    c = gas.measure_NH3();
    Serial.print("The concentration of NH3 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CO();
    Serial.print("The concentration of CO is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_NO2();
    Serial.print("The concentration of NO2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C3H8();
    Serial.print("The concentration of C3H8 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C4H10();
    Serial.print("The concentration of C4H10 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CH4();
    Serial.print("The concentration of CH4 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_H2();
    Serial.print("The concentration of H2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C2H5OH();
    Serial.print("The concentration of C2H5OH is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    delay(1000);
}
```

4.上传代码。记住要从Arduino环境的工具|开发板菜单中选择Seeeduino Uno，并选择Arduino正在使用的正确串口。

通过打开串口监视器，您可以看到从传感器读取的原始数据。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

更新固件
-----------------

这个 Grove 模块有一个 ATmega168 MCU，已刷入出厂固件。版本已在 2016 年 11 月 11 日更新到 V2。
上传以下代码来检测您传感器的版本。

```c
// 获取 Grove 多通道气体传感器的固件版本
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define SENSOR_ADDR     0X04        // 默认为 0x04

void setup()
{
    Serial.begin(115200);
    gas.begin(SENSOR_ADDR);
    
    unsigned char version = gas.getVersion();
    Serial.print("Version = ");
    Serial.println(version);    
}

void loop()
{
    // 无需执行任何操作
}
```

如果您传感器的版本是 V1，我们建议您将其升级到 V2 以获得更好的性能。

要更新固件，您需要：

* 一个 Arduino UNO/Seeeduino V3/
* 6 根杜邦线
* 电烙铁

板子背面有一个 ICSP 焊盘，您需要将这些焊盘连接到 Arduino 板。

| 传感器 | Arduino |
|--------|---------|
| MISO   | D12     |
| SCK    | D13     |
| NRST   | D10     |
| GND    | GND     |
| MOSI   | D11     |
| VCC    | 5V      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg" alt="pir" width={600} height="auto" /></p>


然后打开示例 **UpdateFrimware** 到您的 Arduino，打开串口监视器，您将看到一些打印的信息。
输入 'g' 开始。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png" alt="pir" width={600} height="auto" /></p>



校准
--------------

如果您总是得到不准确的值，请尝试校准传感器。
打开示例 **calibration** 并上传到您的 Arduino，打开串口监视器在校准时获取信息。

:::note
    校准已在模块出厂前完成。如果您想重新校准，请确保空气条件新鲜。校准可能需要几分钟到半小时。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [Grove - 多通道气体传感器 v1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_sch.pdf)
-   [Grove - 多通道气体传感器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip)
-   [Arduino 库 & Grove/Xadow 固件](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)
-   [MiCS-6814 数据手册](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Multichannel_Gas_Sensor -->

常见问题
---------
* **Q1. 如何更改模块的 I2C 地址**

    * *A1. 打开 I2C_Address 示例并运行它。*

* **Q2. 我更改了 I2C 地址，但不幸的是我忘记了它是什么。**

    * *A2. 不用担心，运行 factory_setting 示例将其恢复为默认值。请注意，校准数据也会恢复为出厂设置。*

* **Q3. 多通道气体传感器是否与 Wio GPS 和 Wio LTE 兼容？**

    * *A3. 是的，请参考以下代码。

Wio GPS：

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (12)
#define SENSOR_ADDR     0X04        // 默认为 0x04

void setup()
{
    SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```


Wio LTE：

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (26)
#define SENSOR_ADDR     0X04        // 默认为 0x04

void setup()
{
    // SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```

## 项目

**智能作物：在传统农业中实施物联网！**：我们与自然的使命是保护它，通过 Helium 借助物联网设计和实施技术和监测方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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
使用 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>