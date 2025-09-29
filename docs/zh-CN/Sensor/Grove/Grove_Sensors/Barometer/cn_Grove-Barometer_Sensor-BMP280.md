---
description: Grove - 气压传感器 (BMP280)
title: Grove - 气压传感器 (BMP280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Barometer_Sensor-BMP280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - 气压传感器 (BMP280)** 是一个基于 Bosch BMP280 高精度、低功耗数字气压计的扩展板。该模块可以准确测量**温度**和**大气压力**。由于大气压力随海拔变化，它还可以测量某地的近似**海拔高度**。它可以通过 I<sup>2</sup>C（集成了 Grove 插座）或 SPI 总线连接到微控制器。我们还提供了高度抽象的库，使该产品更易于使用。

BMP280 是 BMP180 的升级版本，并在 BMP180 的基础上进行了显著改进。BMP280 具有更小的尺寸、更低的功耗、更低的噪声测量、更高的压力和温度分辨率、更低的 RMS 噪声、新增的 SPI 接口、更多的测量模式、更高的测量速率以及新增的环境干扰过滤功能。由于大气压力读数受海拔和温度影响，我们在库中添加了补偿功能。因此，Grove - 气压传感器 (BMP280) 在提供精确的温度、大气压力值和近似海拔数据方面更加可靠。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## 可升级为工业传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供通过 SenseCAP 系列的坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境传感提供开箱即用的体验。请参考性能更高、可靠性更强的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括用于土壤湿度、空气温度和湿度、光照强度、二氧化碳、EC，以及一个 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，为您的下一个成功工业项目提供支持。

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
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空气温湿度传感器</strong></a></td>
    </tr>
  </tbody>
</table>

## 预读

如果您对**气压传感器是什么**以及**它是如何工作的**不熟悉，强烈建议您先阅读相关介绍。请访问我们的[博客](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/)以获取详细信息。

## 特性

-   获取更精确的温度、大气压值以及近似的海拔数据
-   兼容Grove，易于使用
-   高度抽象的库，便于更快速地构建项目

:::tip
     有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 规格参数

| 参数                                 | 值                                                                                                                          |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 输入电压                             | 3.3V 或 5V                                                                                                                  |
| I/O 电压                             | 3.3V 或 5V                                                                                                                  |
| 工作电流                             | 0.6mA                                                                                                                       |
| 工作温度                             | -40 - 85 ℃                                                                                                                  |
| 有效压力测量范围                     | 300 - 1100 hPa（1 hPa = 100 Pa），精度为 ±1.0 hPa                                                                            |
| 温度测量精度                         | ±1.0°C                                                                                                                      |
| 测量模式                             | 压电 & 温度，强制或周期性                                                                                                   |
| 芯片                                 | BMP280 ([数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| 可能的采样率                         | 182 Hz（典型值）                                                                                                            |
| 接口总线                             | SPI，I<sup>2</sup>C（可选择其中之一）                                                                                   |
| 重量                                 | 3 g（含开发板）                                                                                                             |
| 尺寸                                 | 40（宽）× 20（深）mm                                                                                                        |
| I2C 地址                             | 0x77（默认）或 0x76                                                                                                         |

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> 1. 我们将很快展示/描述如何选择接口总线。</p>
<p> 2. 海拔是通过温度和大气压的组合计算得出的。没有专门的海拔测量组件。</p>
</div>

## 应用

- GPS导航增强
- 室外/室内导航
- 天气预报
- 植物管理

## 支持的平台

| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 所需材料

| Seeeduino V4.2 | Base Shield | Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

-   **SPI 焊接点**，一个电压监测电路。
-   **接口总线选择焊接点**，选择 I<sup>2</sup>C 总线时，通过焊接连接两个焊点（默认已连接）；选择 SPI 总线时，用锋利的刀或电烙铁切断两个焊点。
-   **从板地址选择焊接点**，选择从板地址以避免地址冲突。

:::tip
      * 如果选择了 I2C 总线，从板的默认地址是 **0x77**（右侧两个焊点已连接）。如果需要使用地址 **0x76**，仅连接左侧两个焊点（断开右侧两个焊点）。

      * 您可以使用锋利的刀轻松断开焊点。

      * 如果选择了 SPI 总线，从板的默认地址是 **0x77**（右侧两个焊点已连接）。如果需要使用地址 **0x76**，断开所有三个焊点。
:::
<div class="admonition note">
<p class="admonition-title">注意</p>
请勿在产品工作时触摸、摇晃或使其处于振动状态。这会导致干扰并影响数据采集的准确性。
</div>

**步骤 1.** 将 Grove-Barometer_Sensor-BMP280 连接到 Grove-Base Shield 的 **I2C** 端口。

**步骤 2.** 将 Grove-Base Shield 插入 Seeeduino，并通过 USB 数据线将 Seeeduino 连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果您没有 Grove Base Shield，也可以直接按照以下方式将此模块连接到 [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino)。
:::

| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### 软件

**步骤 1.** 从 Github 下载 [库文件](https://github.com/Seeed-Studio/Grove_BMP280.git)。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图，并将以下代码粘贴到其中，或者通过路径直接打开代码：File -> Example -> bmp280_example -> bmp280_example

**以下是代码：**

```cpp
/*
 * bmp280_example.ino
 * BMP280 示例代码
 *
 * 版权所有 (c) 2016 seeed technology inc.
 * 网站    : www.seeedstudio.com
 * 作者     : Lambor, CHN
 * 创建时间 :
 * 修改日志 :
 *
 * MIT 许可协议 (MIT)
 *
 * 特此免费授予任何获得本软件及相关文档副本的人使用本软件的权利，
 * 包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售
 * 本软件的副本的权利，且允许获得本软件的人这样做，
 * 前提是以下版权声明和许可声明包含在所有副本或重要部分中。
 *
 * 本软件按“原样”提供，不附带任何形式的明示或暗示担保，
 * 包括但不限于适销性、适用性和非侵权性的担保。
 * 在任何情况下，作者或版权持有人均不对因本软件或使用本软件或其他交易
 * 而产生的任何索赔、损害或其他责任负责，无论是合同纠纷、侵权行为或其他原因。
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("设备错误！");
  }
}

void loop()
{
  float pressure;

  // 获取并打印温度
  Serial.print("温度: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // 单位为摄氏度，因为原始 Arduino 不支持特殊符号

  // 获取并打印大气压力数据
  Serial.print("压力: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  // 获取并打印海拔数据
  Serial.print("海拔: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");// 在不同时间的输出之间添加一行。

  delay(1000);
}
```

**步骤 4.** 上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**步骤 5.** 打开串口监视器以接收传感器的数据，包括温度、大气压值和海拔高度。

:::success
        如果一切正常，结果将显示在**串口**上，如下所示。
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## 原理图在线查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove-Barometer Sensor BMP280 原理图](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[Datasheet]** [BMP280 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[References]**  [Arduino 的 I<sup>2</sup>C 使用指南](https://www.arduino.cc/en/Reference/Wire)

## 项目

**基于 BBG 的智能报警系统 (IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**智能农作物监测系统** 设计并构建一个系统，通过 Netduino 3 WiFi 监测农作物的状态。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## 技术支持与产品讨论