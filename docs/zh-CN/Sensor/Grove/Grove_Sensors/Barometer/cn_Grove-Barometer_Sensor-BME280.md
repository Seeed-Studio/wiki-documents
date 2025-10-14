---
description: Grove - 气压传感器 (BME280)
title: Grove - 气压传感器 (BME280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Barometer_Sensor-BME280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg" alt="pir" width={500} height="auto" /></p>


Grove - 温湿度气压传感器 (BME280) 是一款基于博世 BMP280 的高精度、低功耗组合湿度、气压和温度传感器的扩展板。该模块可以快速准确地测量温度、大气压和湿度。由于大气压随海拔变化，它还可以测量某地的近似**海拔**。它可以通过 I<sup>2</sup>C（集成了 Grove 接口）或 SPI 总线连接到微控制器。我们还提供了高度抽象的库，使该产品更易于使用。

BME280 是 BMP180 的升级版本，与 BMP180 相比，BME280 在多个方面得到了显著改进。BME280 具有更小的尺寸、更低的功耗、更低的噪声测量、更高的气压和温度分辨率、更低的 RMS 噪声、新增的 SPI 总线、更多的测量模式、更高的测量速率以及新增的抗环境干扰滤波功能。由于大气压读数会受到海拔和温度的影响，我们添加了补偿功能。因此，Grove - 温湿度气压传感器 (BME280) 在提供精确的温度、大气压值、湿度和近似海拔数据方面将更加可靠。

使用该传感器非常简单。对于 [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7)（兼容 Arduino），只需使用 [Grove 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) 将该扩展板连接到 I2C Grove 接口。然后，从 GitHub 上使用提供的库和示例代码。如果您使用的是 Arduino，可以使用 Base Shield v2.0，或者简单地将 VCC 引脚连接到 5V 电压引脚，GND 连接到地，SCL 连接到 I2C 时钟（模拟 5），SDA 连接到 I2C 数据（模拟 4）。

典型应用：增强 GPS 导航、室外/室内导航、天气预报或任何其他需要精确大气压读数的项目。


<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境传感提供开箱即用的体验。请参考性能更高、适用于空气质量监测的 S2101 无线温湿度传感器。该系列包括用于土壤湿度、空气温度和湿度、光照强度、二氧化碳、EC，以及 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，为您的下一个工业项目取得成功。

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

## 特性

- 快速获取更精确的温度、大气压力值、湿度和近似海拔数据。
- Grove 兼容且易于使用
- 高度抽象的库，能够更快地构建项目

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

| 参数                                           | 值                                                                                             |
|------------------------------------------------|------------------------------------------------------------------------------------------------|
| 输入电压                                       | 3.3V 或 5V                                                                                     |
| I/O 电压                                       | 3.3V 或 5V                                                                                     |
| 工作电流                                       | 0.4mA                                                                                          |
| 工作温度                                       | -40 - 85 ℃                                                                                     |
| 大气压力传感器测量范围                         | 300 - 1100 hPa (1 hPa= 百帕) ，精度 ±1.0 hPa                                                   |
| 温度传感器测量范围                             | -40 - 85 ℃，精度 ±1.0°C                                                                        |
| 湿度传感器测量范围                             | 0% - 100% 相对湿度，精度 ±3%                                                                   |
| 测量模式                                       | 压电 & 温度，强制或周期性                                                                      |
| 芯片                                           | BME280([数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)) |
| 接口总线                                       | SPI, I<sup>2</sup>C（任选其一）                                                            |
| 重量                                           | 3.2 g（分线板），每件完整包装 9.3 g                                                            |
| 尺寸                                           | 40（长度）× 20（宽度）mm                                                                       |
| I2C 地址                                       | 0x76（默认）或 0x77                                                                            |

<div class="admonition note">
<p class="admonition-title">注意</p>
<ol><li>我们将很快展示/描述如何选择接口总线。</li>
<li>海拔是通过温度和大气压力的组合计算得出的。没有专门用于海拔的组件。</li></ol>
</div>

### 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概览

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

-   **SPI 焊接点**，一个电压监测电路。
-   **接口总线选择焊接点**，选择 I<sup>2</sup>C 总线时，通过焊接连接两个焊接点（默认已连接）；选择 SPI 总线时，用锋利的刀或电烙铁切断两个焊接点。
-   **从板地址选择焊接点**，选择从板地址以避免地址冲突。

    - 如果选择了 I2C 总线，从板的默认地址为 **0x76**（右侧两个焊接点已连接）。如果需要使用地址 **0x77**，仅连接左侧两个焊接点（断开右侧两个焊接点）。
<div class="admonition tip">
<p class="admonition-title">提示</p>
您可以使用锋利的刀轻松断开焊接点。
</div>
    - 如果选择了 SPI 总线，从板的默认地址为 **0x76**（右侧两个焊接点已连接）。如果需要使用地址 **0x77**，断开所有三个焊接点。

<div class="admonition note">
<p class="admonition-title">注意</p>
在产品工作时，请勿触摸、摇晃或让产品处于振动状态。这会导致干扰并影响数据采集的准确性。
</div>

### **包装内容**（主要部件）

| 部件名称                                                                                                                    | 数量 |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - 温湿度气压传感器 (BME280)                                                                                            | 1 个  |
| [Grove 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 条  |

## 入门指南

现在让我们使用该模块运行一些基本示例。

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础扩展板 | Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **步骤 2.** 将 Grove-Barometer_Sensor-BME280 连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到 PC。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	如果没有 Grove 基础扩展板，我们也可以直接将该模块连接到 Seeeduino，如下所示。
:::
<!--I2C-->
| Seeeduino V4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### 软件
**步骤 1.** 从 Github 下载 [库和示例代码](https://github.com/Seeed-Studio/Grove_BME280)。

**步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

**步骤 3.** 创建一个新的 Arduino 草图，将以下代码粘贴到其中，或者直接通过路径打开代码：文件 -> 示例 -> Barometer_Sensor -> Barometer_Sensor。

以下是代码：
```c

/*
 * bme280_example.ino
 * bme280 示例代码
 *
 * 版权所有 (c) 2016 seeed technology inc.
 * 网站    : www.seeedstudio.com
 * 作者     : Lambor
 * 创建时间 :
 * 修改日志 :
 *
 * MIT 许可协议 (MIT)
 *
 * 特此免费授予任何获得本软件及相关文档副本的人使用本软件的权限，
 * 包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售本软件的副本，
 * 但需满足以下条件：
 *
 * 上述版权声明和本许可声明应包含在本软件的所有副本或主要部分中。
 *
 * 本软件按“原样”提供，不附带任何形式的明示或暗示担保，包括但不限于适销性、
 * 特定用途适用性和非侵权性。在任何情况下，作者或版权持有人均不对因本软件或
 * 本软件的使用或其他交易而产生的任何索赔、损害或其他责任负责，无论是合同、
 * 侵权行为或其他形式。
 */
#include "Seeed_BME280.h"
#include <Wire.h>

BME280 bme280;

void setup()
{
  Serial.begin(9600);
  if(!bme280.init()){
    Serial.println("设备错误！");
  }
}

void loop()
{
  float pressure;

  // 获取并打印温度
  Serial.print("温度: ");
  Serial.print(bme280.getTemperature());
  Serial.println("C");// 单位为摄氏度，因为原始 Arduino 不支持特殊符号

  // 获取并打印大气压力数据
  Serial.print("压力: ");
  Serial.print(pressure = bme280.getPressure());
  Serial.println("Pa");

  // 获取并打印海拔数据
  Serial.print("海拔: ");
  Serial.print(bme280.calcAltitude(pressure));
  Serial.println("m");

  // 获取并打印湿度数据
  Serial.print("湿度: ");
  Serial.print(bme280.getHumidity());
  Serial.println("%");

  delay(1000);
}

```

**步骤 4.** 上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**步骤 5.** 打开串口监视器以接收传感器的数据，包括温度、大气压力值、海拔和湿度。

### 使用 Wio Terminal (ArduPy)

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove-气压传感器-BME280 |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **步骤 2.** 将 Grove-气压传感器-BME280 连接到 Wio Terminal 的 **I2C** Grove 接口。

- **步骤 3.** 使用 USB Type-C 数据线将 Wio Terminal 连接到电脑。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照[**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/)配置 Wio Terminal 的 ArduPy 开发环境。

- **步骤 2.** 确保 ArduPy 固件已刷入 Wio Terminal。有关更多信息，请参考[**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip install Seeed-Studio/seeed-ardupy-bme280
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-bme280.py`：

```python
from arduino import grove_bme280
from machine import LCD
from machine import Sprite
import time

bme280 = grove_bme280()
lcd = LCD()
spr = Sprite(lcd) # 创建一个缓冲区

def main():
    spr.createSprite(320, 240)
    while True:
      spr.setTextSize(2)
      spr.fillSprite(spr.color.BLACK)
      spr.setTextColor(lcd.color.ORANGE)
      spr.drawString("BME280 数据读取", 90, 10)
      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
      spr.setTextColor(lcd.color.WHITE)
      spr.drawString("- 温度: ", 20, 50)
      spr.drawString("- 湿度: ", 20, 80)
      spr.drawString("- 压力: ", 20, 110)

      spr.drawFloat(bme280.temperature, 2, 220,50)
      spr.drawNumber(bme280.humidity, 220,80)
      spr.drawNumber(bme280.pressure, 220,110)
      spr.pushSprite(0,0)
      time.sleep_ms(500)

      print ("\n温度: ", bme280.temperature, "C")
      print ("湿度: ", bme280.humidity, "%")
      print ("压力: ", bme280.pressure, "Pa")

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-bme280.py` 保存到您知道的位置。运行以下命令，并将 `<YourPythonFilePath>` 替换为您的 `ArduPy-bme280.py` 文件路径。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
```

- **步骤 5.** 我们将在终端上看到如下显示的数值，同时这些数值也会显示在 Wio Terminal 的 LCD 屏幕上。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy

温度:  29.88 C
湿度:  55 %
压力:  100332 Pa

温度:  29.91 C
湿度:  55 %
压力:  100332 Pa

温度:  29.88 C
湿度:  54 %
压力:  100331 Pa
```

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png" alt="pir" width={600} height="auto" /></p>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源


-  **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_原理图](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
-  **[数据手册]** [BME280 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)
-  **[库文件]** [Grove_BME280 库](https://github.com/Seeed-Studio/Grove_BME280) 在 GitHub 上
-  **[参考]** [Arduino 的 I<sup>2</sup>C 使用指南](https://www.arduino.cc/en/Reference/Wire)

## 项目

**Seeed LoRa IoTea 解决方案**：一个应用于茶园的自动信息采集系统。它是智能农业信息采集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## 技术支持与产品讨论