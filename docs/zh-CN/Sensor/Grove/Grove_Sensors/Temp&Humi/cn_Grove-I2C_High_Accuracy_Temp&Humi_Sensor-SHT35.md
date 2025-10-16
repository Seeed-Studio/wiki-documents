---
description: Grove - I2C 高精度温湿度传感器(SHT35)
title: Grove - I2C 高精度温湿度传感器(SHT35)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/main.jpg" /></div>

Grove - I2C 高精度温湿度传感器(SHT35) 基于 SHT3x-DIS，这是 Sensirion 下一代温湿度传感器。它建立在新的 CMOSens® 传感器芯片基础上，该芯片是 Sensirion 新型湿度和温度平台的核心。与前代产品相比，SHT3x-DIS 具有更高的智能性、可靠性和改进的精度规格。其功能包括增强的信号处理、两个独特的用户可选择 I2C 地址以及高达 1 MHz 的通信速度。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和坚固性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。为您下一个成功的工业项目尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)。

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

- 高精度 ±1.5 %RH 和 ±0.1 °C
- 完全校准、线性化和温度补偿的数字输出
- I2C 接口，通信速度高达 1MHz，两个用户可选地址
- 启动和测量时间非常快

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|指定温度范围|-40°C 至 +125°C|
|温度分辨率|0.01°C|
|温度精度公差|±0.1 °C|
|指定湿度范围|0%RH 至 +100%RH|
|湿度分辨率|0.01%RH|
|湿度精度公差|±1.5 %RH|
|接口|I2C|
|I2C 地址|0x45(默认) / 0x44(可选)|

## 应用

- 工业冷冻机和冰箱
- 食品加工
- 个人电脑和服务器
- PC 外设
- 消费电子产品
- 手持/便携式设备

## 硬件概述

### 引脚定义

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out_back.jpg" /></div>

### 原理图

**电源**

该模块基于 **SHT35**，该芯片的输入电压范围为 2.15v-5.5v，因此您可以使用 Arduino 的 3.3v 和 5v 引脚为该模块供电。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove-SHT35 传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - I2C高精度温湿度传感器(SHT35)连接到Grove-Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/connect.jpg" /></div>

:::note
如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino      |  Grove线缆       | Grove - I2C高精度温湿度传感器(SHT35) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V or 3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |

#### 软件

:::caution
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Grove-SHT35传感器](https://github.com/Seeed-Studio/Seeed_SHT35)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove Temperature sensor SHT35 --> basic_demo**。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path.jpg" /></div>

    2. 在您的计算机中点击**basic_demo.ino**打开，您可以在文件夹**XXXX\Arduino\libraries\Seeed_SHT35-master\examples\basic_demo**中找到它，**XXXX**是您安装Arduino IDE的位置。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path_1.jpg" /></div>

    3. 或者，您可以点击代码块右上角的图标<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" /></div>将以下代码复制到Arduino IDE的新草图中。

```cpp
#include "Seeed_SHT35.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SDAPIN  20
  #define SCLPIN  21
  #define RSTPIN  7
  #define SERIAL SerialUSB
#else
  #define SDAPIN  A4
  #define SCLPIN  A5
  #define RSTPIN  2
  #define SERIAL Serial
#endif

SHT35 sensor(SCLPIN);


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    if(sensor.init())
    {
      SERIAL.println("sensor init failed!!!");
    }
    delay(1000);
}


void loop()
{
     u16 value=0;
    u8 data[6]={0};
    float temp,hum;
    if(NO_ERROR!=sensor.read_meas_data_single_shot(HIGH_REP_WITH_STRCH,&temp,&hum))
    {
      SERIAL.println("read temp failed!!");
      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    else
    {
      SERIAL.println("result======>");
      SERIAL.print("temperature =");
      SERIAL.println(temp);

      SERIAL.print("humidity =");
      SERIAL.println(hum);

      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    delay(1000);
}
```

:::caution
        库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或同时按++ctrl+shift+m++键。将波特率设置为**115200**。

:::tip
     如果一切顺利，当您打开串口监视器时，可能会显示如下内容：
:::

```cpp
serial start!!
=>
temperature =24.10
humidity =51.09


result======>
temperature =24.10
humidity =50.96
   
      
result======>
temperature =24.10
humidity =51.04
   
   
result======>
temperature =24.11
humidity =51.09
```

### 与树莓派一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| 树莓派 | Grove Base Hat for RasPi| Grove - SHT35传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html)|

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3**. 将 Grove - I2C 高精度温湿度传感器(SHT35) 连接到 Base Hat 的 **I2C** 端口。
- **步骤 4**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/With_Hat.jpg" /></div>

#### 软件

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令运行代码。

```
cd grove.py/grove
python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 

```

以下是 grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 代码。

```python

import time
from grove.i2c import Bus

def CRC(data):
  crc = 0xff
  for s in data:
    crc ^= s
    for i in range(8):
      if crc & 0x80:
        crc <<= 1
        crc ^= 0x131
      else:
        crc <<= 1
  return crc

class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x45, bus=None):
        self.address = address

        # I2C 总线
        self.bus = Bus(bus)

    def read(self):
        # 高重复性，时钟拉伸禁用
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # 测量持续时间 < 16 ms
        time.sleep(0.016)

        # 读取 6 字节数据
        # 温度 MSB, 温度 LSB, 温度 CRC, 湿度 MSB, 湿度 LSB, 湿度 CRC
        data = self.bus.read_i2c_block_data(0x45, 0x00, 6)
        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0
        if data[2] != CRC(data[:2]):
            raise RuntimeError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise RuntimeError("humidity CRC mismatch")
        return celsius, humidity

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

:::tip
    如果一切正常，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 
Temperature in Celsius is 20.47 C
Relative Humidity is 40.28 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.47 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.43 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.41 C
Relative Humidity is 40.60 %
^CTraceback (most recent call last):
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 89, in <module>
    main()
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 86, in main
    time.sleep(1)
KeyboardInterrupt

```

您可以通过简单地按 ++ctrl+c++ 退出此程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C 高精度温湿度传感器(SHT35) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip)

- **[Zip]** [Seeed SHT35 库](https://github.com/Seeed-Studio/Seeed_SHT35/archive/master.zip)

- **[PDF]** [SHT3x-DIS 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Datasheet%20SHT3x-DIS.pdf)

## 项目

**使用 Google Map 进行交通数据可视化**：我们使用 Wio LTE cat.1 来监控交通 GPS 和其他信息。对于冷链，我们可以监控 GPS 位置以及温度和湿度。对于骑行，我们可以监控 GPS 位置以及心率。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed" width={350} />

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