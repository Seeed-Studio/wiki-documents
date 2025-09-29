---
description: 单总线温度传感器 DS18B20
title: 单总线温度传感器 DS18B20
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/One-Wire-Temperature-Sensor-DS18B20
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

这款2米长的单总线温度传感器具有防水探头和长线形状，适用于浸入式温度检测。该传感器内部的芯片是**DS18B20**，被广泛采用。原始版本内部包含三根线，您需要添加一个额外的电阻才能使其工作。对于这款传感器，我们将其调整为Grove接口，并预装了一个电阻，这样您就可以像使用常规Grove传感器一样使用它。本文将说明该传感器在树莓派上的使用方法，让我们开始吧！

## 可升级为工业传感器

使用SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了使用SenseCAP系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和鲁棒性的S2101无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。尝试最新的[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP工业传感器</strong></font></td>
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

---

- 数据接口仅需一根线
- 防水
- Grove 兼容
- 接受 3.0V 至 5.5V 电源供电
- 宽温度范围：-55°C 至 +125°C
- 高精度：±0.5°C（-10°C 至 +85°C）

:::caution
电缆部分不能长时间置于高于 70°C 的温度下。
:::

## 规格参数

|||
|--------|---------|
|工作电压 |3.0-5.5V|
|芯片|DS18B20|
|长度 |2m|
|工作温度| -55°C 至 +125°C |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

---
在本节之后，您只需几个步骤就可以让单总线温度传感器运行起来。

### 与 Arduino 一起使用

#### 所需材料

| Seeeduino Lotus V1.1 |单总线温度传感器|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[立即购买](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg" /></div>

:::tip
请轻柔地插入 USB 电缆，将单总线温度传感器接口插入 Seeeduino Lotus V1.1 接口，否则可能会损坏端口。
:::

- **步骤 1.** 使用 Grove 电缆将单总线温度传感器插入 Seeeduino Lotus V1.1 的 **D2** 接口。

- **步骤 2.** 通过 USB 电缆将 Seeeduino Lotus V1.1 连接到 PC。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，结果将显示在您的 Arduino IDE 中的**串口监视器**屏幕上。

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载 [Onewire 库](https://github.com/PaulStoffregen/OneWire/archive/master.zip) 和 [Arduino 温度控制库](https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip)

- **步骤 2.** 复制整个 **OneWire** 和 **Arduino-Temperature-Control-Library** 文件并将它们粘贴到您的 Arduino IDE 库文件中。

- **步骤 3.** 从下面的**软件代码**上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**软件代码**

```cpp
// Include the libraries we need
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 2


// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

/*
 * The setup function. We only start the sensors here
 */
void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();
}

/*
 * Main function, get and show the temperature
 */
void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  Serial.println("DONE");
  // After we got the temperatures, we can print them here.
  // We use the function ByIndex, and as an example get the temperature from the first sensor only.
  float tempC = sensors.getTempCByIndex(0);

  // Check if reading was successful
  if(tempC != DEVICE_DISCONNECTED_C) 
  {
    Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
  } 
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
```

:::tip
  如果一切顺利，您可以转到**串口监视器**查看如下结果：
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png" alt="1-wire'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

### 与 Raspberry Pi 一起使用

#### 所需材料

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|One Wire Temperature Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg" /></div>

**步骤 1.** 将 One Wire Temperature Sensor 连接到 Grove - Base Hat for Raspberry Pi 的 **D5** 端口，插入 Raspberry Pi 4 Model B。然后将 Raspberry Pi 4 Model B 与 PC 连接。

**步骤 2.** 访问 Raspberry Pi 系统后，git clone **[Seeed_Python_DS18B20](https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git)** 并通过插入以下命令安装 **grove.py**：

```shell
pip3 install Seeed-grove.py
```

或者在支持的 GNU/Linux 系统（如 Raspberry Pi）上，您可以从 PyPI 本地安装驱动程序：

```Shell
pip3 install seeed-python-Ds18b20
```

**步骤 3.** 要进行系统范围安装（在某些情况下可能需要）：

```Shell
sudo pip3 install seeed-python-Ds18b20
```

您可以插入以下命令从 PyPI 本地升级驱动程序：

```Shell
pip3 install --upgrade seeed-python-Ds18b20
```

#### 软件

```python
import seeed_ds18b20
import time

def main():
    DS18B20 = seeed_ds18b20.grove_ds18b20()
    print("Please use Ctrl C to quit")
    while True:
        temp_c,temp_f = DS18B20.read_temp
        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=" ")
        print('\r', end='')
        time.sleep(0.5)

if __name__ == "__main__":
    main()   
```

:::caution
在 Raspberry Pi 上运行演示代码时，您**可能**会被提醒启用 **1-Wire** 接口。然后您应该使用命令 **sudo raspi-config** 并重启以启用 1-Wire 设备：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png" /></div>

**步骤 4.** 通过以下命令运行演示：

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
          如果一切正常，结果将显示如下：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png" /></div>

## 资源

**[PDF]** [DS18B20-数据手册](https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>