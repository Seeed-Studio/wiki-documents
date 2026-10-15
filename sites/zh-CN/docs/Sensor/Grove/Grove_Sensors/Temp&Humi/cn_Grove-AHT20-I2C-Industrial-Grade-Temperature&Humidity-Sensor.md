---
description: Grove - AHT20 I2C 工业级温湿度传感器
title: Grove - AHT20 I2C 工业级温湿度传感器
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor
sku: 101990644
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" /></div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

AHT20 是新一代温湿度传感器，采用双排扁平无引脚 SMD 封装，适用于回流焊接。AHT20 配备了新设计的 ASIC 芯片：改进的 MEMS 半导体电容式湿度传感器和标准片上温度传感器。与上一代温湿度传感器（如 Grove - Temperature & Humidity Sensor Pro (AM2302/DHT22)）相比，AHT20 在恶劣环境下的性能更加稳定，实际上，AHT20 适用于大多数工业场景。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。为您的下一个成功的工业项目尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)。

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

- 温度测量范围 -40 ~ 85°C，湿度测量范围 0 ~ 100% RH
- 数字输出，Grove I2C 接口
- 优异的长期稳定性
- SMD 封装适用于回流焊接
- 快速响应和强抗干扰能力
- 兼容 Arduino
- 预留 4 针接口

## 规格参数

|项目|数值|
|---|---|
|工作电压 |DC: 2.0V-5.5V|
|测量范围（湿度） |0 ~ 100% RH|
|温度范围| -40 ~ + 85 ℃|
|湿度精度|± 2% RH (25 ℃)|
|温度精度| ± 0.3 ℃|
|分辨率| 温度：0.01 ℃；湿度：0.024% RH|
|输出接口|Grove I²C 接口|
|I2C 地址|0x38| -->

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

### 所需材料

| Seeeduino Lotus V1.1 |Grove-AHT20 温湿度传感器|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[立即购买](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/hardware-connection.jpg" /></div>

:::tip
请轻柔地插入 USB 线缆，将 Grove-AHT20 温湿度传感器接口插入 Seeeduino Lotus V1.1 接口，否则可能会损坏端口。
:::

- **步骤 1.** 使用 Grove 线缆将 Grove-AHT20 温湿度传感器插入 Seeeduino Lotus V1.1 的 **I2C** 接口。

- **步骤 2.** 通过 USB 线缆将 Seeeduino Lotus V1.1 连接到 PC。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在 Arduino IDE 的 **Serial Monitor** 屏幕上。

### 软件

:::caution
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载[演示代码](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/archive/master.zip)。

- **步骤 2.** 复制整个 **Seeed_Arduino_AHT20** 文件并将其粘贴到您的 Arduino IDE 库文件中。

- **步骤 3.** 使用 Arduino IDE 打开 **examples** 中的 **BasicRead** 文件。

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

#### 软件代码

```cpp
// ARDUINO DEMO FOR GROVE-AHT20
//
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void setup()
{
    Serial.begin(115200);
    Serial.println("AHT20 DEMO");
    AHT.begin();
}

void loop()
{
    float humi, temp;

    int ret = AHT.getSensor(&humi, &temp);

    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temerature: ");
        Serial.println(temp);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }

    delay(100);
}

// END FILE
```

:::tip
  如果一切顺利，您可以转到 **Serial Monitor** 查看如下结果：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/outcome_aht20.png" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box' }}>
</div>

### 与 Raspberry Pi 配合使用

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove-AHT20 温湿度传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3**. 将 Grove-AHT20 温湿度传感器连接到 Base Hat 的 **I2C** 端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
     如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 进入相关的虚拟环境。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```
<Tabs>
  <TabItem value="old" label="旧版本" default>

- **步骤 3**. 执行以下命令运行代码。

```
nano ~/grove_env/AHT20_demo.py
```

```python 
import time
from grove.i2c import Bus


class GroveTemperatureHumidityAHT20(object):
    def __init__(self, address=0x38, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        self.bus.write_i2c_block_data(self.address, 0x00, [0xac, 0x33, 0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        humidity = data[1]
        humidity <<= 8
        humidity += data[2]
        humidity <<= 4
        humidity += (data[3] >> 4)
        humidity /= 1048576.0
        humidity *= 100

        temperature = data[3] & 0x0f
        temperature <<= 8
        temperature += data[4]
        temperature <<= 8
        temperature += data[5]
        temperature = temperature / 1048576.0*200.0-50.0  # Convert to Celsius

        return temperature, humidity


def main():
    sensor = GroveTemperatureHumidityAHT20()
    while True:
        temperature, humidity  = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()
```

- 运行此代码

```
python AHT20_demo.py
```

  </TabItem>

  <TabItem value="new" label="新版本">

  - **步骤 3**. 执行以下命令运行代码。

- 以下是检查 grove_temperature_humidity aht20.py 代码。

```
less grove_temperature_humidity aht20.py
```


- 运行此代码
```
python grove_temperature_humidity aht20.py
```

  </TabItem>
</Tabs>


如果一切顺利，您将看到以下现象。😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.png" alt="pir" width={600} height="auto" /></p>



## 资源

- **[ZIP]** [Grove-AHT-eagle-file](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip)
- **[PDF]** [Datasheet of AHT20](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/AHT20-datasheet-2020-4-16.pdf)

## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

