---
description: Grove - 温湿度传感器(SHT31)
title: Grove - 温湿度传感器(SHT31)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-TempAndHumi_Sensor-SHT31
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg" /></div>

Grove - 温湿度传感器(SHT31) 是一款高可靠性、高精度、快速响应的集成温湿度传感器。该模块中使用的传感器(芯片)采用 Sensirion 的 CMOSens<sup>®</sup> 技术设计。该芯片经过良好的校准、线性化和补偿，可提供数字输出。

该模块的典型精度可达 **±2%RH**（相对湿度）和 **±0.3°C**（温度）。该模块兼容 3.3V 和 5V 电压，因此不需要电压电平转换器。该模块使用 I<sup>2</sup>C 串行总线进行通信，工作速度可达 1 MHz。我们还提供了高度抽象的库，使该产品更易于使用。

使用传感器很简单。对于 [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7)（兼容 Arduino），只需通过 [Grove 线缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) 将此分线板与主控板连接即可。然后使用 GitHub 上提供的库和示例/演示代码来获取数据。如果您使用的是没有 Base Shield 的 Arduino，只需将 VIN 引脚连接到 5V 电压引脚，GND 连接到地，SCL 连接到 I2C 时钟（模拟引脚 5），SDA 连接到 I2C 数据（模拟引脚 4）。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和坚固性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

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

## 版本

| 产品版本              | 变更                                                                                                                                                                                    | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - 温湿度传感器(SHT31) V1.0 | 初始版本                                                                                                                                                                                    | 2016 年 1 月      |

## 特性

- 高可靠性、高精度和快速响应时间
- Grove 兼容且易于使用
- 经过良好校准、线性化、补偿的数字输出
- 高度抽象的开发库
- I2C 地址 0x44

:::note
    如果您想使用多个 I2C 设备，请参考 [Software I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove System](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

| 参数                | 值                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| 输入电压 (VCC)      | 3.3V 或 5V                                                                                         |
| I/O 逻辑电平          | 基于 VCC 的 3.3V 或 5V                                                                            |
| 工作电流        | 100 μA                                                                                                       |
| 工作温度    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| 温度传感器范围 | -40–125 ℃，精度 ±0.3°C                                                                              |
| 湿度传感器范围    | 0% - 100%（相对湿度），精度 ±2%                                                              |
| 传感器芯片              | SHT31（[数据手册](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)） |
| 接口            | I<sup>2</sup>C                                                                                               |
| 重量                   | 4 g（分线板），整个包装每件 9 g                                                   |
| 尺寸               | 40（长）×20（宽） mm                                                                                      |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

### 与 Arduino 一起使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 温湿度传感器(SHT31) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)|

- **步骤 2.** 将 Grove - Temperature&Humidity Sensor(SHT31) 连接到 Grove-Base Shield 的 I2C 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg" /></div>

## 硬件概述

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg" /></div>

:::caution
 使用时请勿触摸、摇晃或让本产品振动。否则会影响测量数据的准确性。
:::

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - Temperature&Humidity Sensor(SHT31) 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### 软件

- **步骤 1.** 从 Github 下载[库文件](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)。

- **步骤 2.** 参考[如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库文件。

- **步骤 3.** 重启 Arduino IDE。打开一个新的草图，并将以下代码复制到新草图中。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **Tool-> Serial Monitor** 打开 Arduino IDE 的 **Serial Monitor**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。如果一切正常，您将得到结果。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png" /></div>

### 与 Raspberry Pi 配合使用

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp&Hum Sensor(SHT31)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry。
- **步骤 3.** 将 Grove - Temperature&Humidity Sensor (SHT31) 连接到 Base Hat 的 **I2C** 端口。
- **步骤 4.** 通过 USB 线缆将 Raspberry Pi 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg" /></div>

#### 软件

- **步骤 1.** 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2.** 进入相关的虚拟环境。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **步骤 3.** 执行以下命令运行代码。

```
#Run code
python grove_temperature_humidity_sensor_sht3x.py
#View Code
less grove_temperature_humidity_sensor_sht3x.py
```

以下是 grove_temperature_humidity_sensor_sht3x.py 代码。

```python

import time
from grove.i2c import Bus


def CRC(data):
    crc = 0xff
    for s in data:
        crc ^= s
        for _ in range(8):
            if crc & 0x80:
                crc <<= 1
                crc ^= 0x131
            else:
                crc <<= 1
    return crc


class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x44, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise ValueError("humidity CRC mismatch")


        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()

```

- 运行此代码
```

python grove_temperature_humidity_sensor_sht3x.py
```

  如果一切正常，您将能够看到以下结果

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/GROVE-fix/SHT3.png" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

我们在 [geppetto](https://geppetto.seeedstudio.com/) 中提供了这个部件，使用 Seeed 和 Geppeto 进行简单的模块化电子设计。立即构建。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## 资源

- **[EAGLE]** [Grove - Temperature&Humidity Sensor(SHT31) PCB 文件和 PDF 原理图](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[数据手册]** [SHT31 传感器数据手册](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[库文件]** [库文件和示例代码](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[更多阅读]** [Arduino I<sup>2</sup>C 使用指南](https://www.arduino.cc/en/Reference/Wire)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## 项目

**MediaTek 开源硬件植物健康监测器**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

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
