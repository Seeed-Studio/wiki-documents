---
description: Grove - 气压传感器 (BMP280)
title: Grove - 气压传感器 (BMP280)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BMP280
sku: 101020192
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP280/
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - Barometer Sensor (BMP280)** 是一款基于 Bosch BMP280 高精度、低功耗数字气压计的扩展板。该模块可用于精确测量**温度**和**大气压**。由于大气压会随海拔变化，它还可以测量某一地点的大致**海拔高度**。它可以通过集成 Grove 接口的 I<sup>2</sup>C 总线或 SPI 总线连接到微控制器。我们还提供了高度抽象的库，使该产品更易于使用。

BMP280 是 BMP180 的升级版本，相比 BMP180 有了显著提升。BMP280 具有更小的尺寸、更低的功耗、更低噪声的测量结果、更高分辨率的气压和温度测量、更低的 RMS 噪声、新增的 SPI 接口、更多测量模式、更高的测量速率以及新增的环境干扰滤波功能。由于大气压读数会受到海拔和温度的影响，我们在库中加入了补偿功能。因此，Grove - Barometer Sensor (BMP280) 在提供精确温度、大气压数值和大致海拔数据方面会更加可靠。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## 可升级为工业级传感器
借助 SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，你可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助你完成原型开发，还通过 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)为你的项目扩展提供可能。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。对于空气质量监测，请参考性能和可靠性更高的 S2101 无线温湿度传感器。该系列包括用于土壤湿度、空气温度和湿度、光照强度、CO2、EC 以及一体化 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，用于你下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空气温度与湿度</strong></a></td>
    </tr>
  </tbody>
</table>


## 预备阅读

如果你对**什么是气压传感器**以及**它是如何工作的**还不熟悉，强烈建议你先阅读相关介绍。请访问我们的[博客](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/)获取详细信息。

## 特性

-   获取更精确的温度、大气压数值以及大致海拔数据
-   兼容 Grove，且易于使用
-   高度抽象的库，可更快速地构建项目

:::tip
     关于 Grove 模块的更多信息，请参考 [Grove System](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::
## 规格参数


| 参数                                  | 数值                                                                                                                        |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 输入电压                             | 3.3V 或 5V                                                                                                                  |
| I/O 电压                             | 3.3V 或 5V                                                                                                                  |
| 工作电流                             | 0.6mA                                                                                                                       |
| 工作温度                             | -40 - 85 ℃                                                                                                                  |
| 有效气压测量范围                     | 300 - 1100 hPa（1 hPa = 一百 Pa），精度为 ±1.0 hPa                                                                          |
| 温度测量精度                         | ±1.0°C                                                                                                                      |
| 测量模式                             | 压力与温度，强制或周期性                                                                                                   |
| 芯片                                 | BMP280 ([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| 可能的采样率                         | 182 Hz（典型值）                                                                                                            |
| 接口总线                             | SPI，I<sup>2</sup>C（两者选其一）                                                                                           |
| 重量                                 | 3 g（扩展板）                                                                                                               |
| 尺寸                                 | 40（宽）× 20（深）mm                                                                                                       |
| I2C Address | 0x77()default or 0x76 |

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> 1. 我们很快会展示/说明如何选择接口总线。</p>
<p> 2. 海拔高度是通过温度和大气压的组合计算得出的，并没有专门用于海拔测量的元件。</p>
</div>

## 应用

- GPS 导航增强
- 室外/室内导航
- 天气预报
- 植物管理

## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     上述所提到的支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino 进行体验

#### 所需材料

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### 硬件概述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


-   **SPI 焊盘**，带有电压监测电路。
-   **接口总线选择焊盘**，若要选择 I<sup>2</sup>C 总线，通过焊接将两个焊盘连接起来（默认已连接）；若要选择 SPI 总线，用锋利的小刀或电烙铁将两个焊盘切断。
-   **从板地址选择焊盘**，用于选择从板地址以避免地址冲突。

:::tip
      * 如果你选择了 I2C 总线，从板的默认地址是 **0x77**（右侧两个焊盘相连）。如果你想使用地址 **0x76**，只焊接左侧两个焊盘（断开右侧两个）。

      * 你可以只用一把锋利的小刀就将焊盘切断。

      * 如果你选择了 SPI 总线，从板的默认地址是 **0x77**（右侧两个焊盘相连）。如果你想使用地址 **0x76**，请断开全部三个焊盘。
:::
<div class="admonition note">
<p class="admonition-title">Note</p>
当产品工作时，请不要触摸、摇晃或让其处于振动状态。这会产生干扰并影响采集数据的精度。
</div>

**步骤 1.** 将 Grove-Barometer_Sensor-BMP280 连接到 Grove-Base Shield 的 **I2C** 端口。

**步骤 2.** 将 Grove - Base Shield 插到 Seeeduino 上，并通过 USB 线将 Seeeduino 连接到电脑。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.
:::
<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### 软件

**步骤 1.** 从 Github 下载[库](https://github.com/Seeed-Studio/Grove_BMP280.git)。

**步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。


**步骤 3.** 新建一个 Arduino 草稿并将下面的代码粘贴进去，或者直接通过路径：File -> Example ->bmp280_example->bmp280_example 打开示例代码。

**代码如下：**

```cpp
/*
 * bmp280_example.ino
 * Example sketch for BMP280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor, CHN
 * Create Time:
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");//add a line between output of different times.

  delay(1000);
}
```

**步骤 4.** 上传代码。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**步骤 5.** 打开串口监视器以接收传感器的数据，包括温度、气压值和海拔高度。

:::success
        如果一切顺利，结果将如下所示显示在**串口**上。
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## 资源

<!-- - **[Eagle]** [Grove-Barometer Sensor BMP280 Schematic](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip) -->
- **[KiCad]** [Grove-Barometer Sensor (BMP280) v1.0 原理图 (PDF)](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-v1.0_SCH_20260820.pdf)
- **[KiCad]** [Grove-Barometer Sensor (BMP280) v1.0 原理图和 PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-v1.0_SCH-PCB_20260820.zip)
- **[Datasheet]** [BMP280 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[References]**  [I<sup>2</sup>C Arduino 使用指南](https://www.arduino.cc/en/Reference/Wire)

## 项目

**使用 BBG（物联网）制作的智能报警系统**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**智能农作物监控系统** 设计并构建一个系统，使用 Netduino 3 WiFi 监控作物的状态。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## 技术支持与产品讨论





