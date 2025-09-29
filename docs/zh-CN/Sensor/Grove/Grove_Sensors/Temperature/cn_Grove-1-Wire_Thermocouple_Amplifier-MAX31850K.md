---
description: Grove - 1-Wire 热电偶放大器(MAX31850K)
title: Grove - 1-Wire 热电偶放大器(MAX31850K)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/main.JPG" /></div>

Grove - 1-Wire 热电偶放大器 (MAX31850K) 是一款具有14位分辨率和冷端补偿功能的热电偶数字转换器。该模块设计用于与K型热电偶配合使用。热电偶的测量范围比热敏电阻大得多。例如，我们网站上的这款[K型热电偶](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html)的测量范围为-50℃至+600℃。

该模块基于MAX31850K芯片，集成了放大器、ADC和64位ROM。得益于64位ROM，每个设备都有唯一的64位序列号，这使得多个单元可以在同一条1-Wire总线上工作。因此，使用一个微控制器（主设备）来监控分布在大面积区域内的多个热电偶的温度变得非常简单。

再次强调，该模块无法单独工作，必须与K型热电偶配合使用，如果您没有热电偶，可以考虑我们商城中的[热电偶温度传感器K型-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html)。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 1-Wire 热电偶放大器 (MAX31850K) | 初始版本                                                                                               | 2018年8月      |

## 特性

- 集成冷端补偿
- 宽转换范围：允许读取-270℃至+1768℃的温度
- 14位，0.25℃分辨率
- 仅适用于K型热电偶，不能与其他类型的热电偶配合使用
- 检测热电偶对GND或VDD的短路
- 检测热电偶开路

:::caution
虽然该模块可以转换-270℃至+1768℃的温度，但温度测量范围也受到您使用的热电偶的限制。
:::

## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V/5V |
|温度分辨率|14位|
|温度精度|± 2℃ |
|工作温度范围|-40℃至+125℃|
|允许读取范围|-270℃至+1768℃|
|存储温度范围|-65℃至+150℃ |
|输入接口|DIP母座蓝色-2针|
|输出接口|1-Wire总线|
|尺寸|长：40mm 宽：20mm 高：18mm|
|重量|4.8g|
|包装尺寸|长：140mm 宽：90mm 高：20mm|
|毛重|11g|

## 应用

- 医疗
- 家电
- 工业
- HVAC（供暖、通风和空调）

## 硬件概述

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map_back.jpg" /></div>

### 原理图

**输入接口**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_1.jpg" /></div>

由于涉及的信号电平很小，我们采取了很多措施来过滤噪声。

- **1--L1,L2** 我们使用长达1米的热电偶。这样的长导线可以被视为天线，会接收空间电场干扰并产生高频噪声。因此我们使用两个电感来过滤高频噪声。

- **2--C1** 芯片制造商强烈建议添加一个10nF陶瓷表面贴装差分电容器，放置在T+和T-引脚之间，以过滤热电偶线路上的噪声。

- **3--D1** 我们使用SZNUP2105LT3G双向电压抑制器来保护此模块免受ESD（静电放电）的影响。

**双向电平转换电路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_2.jpg" /></div>

这是一个典型的双向电平转换电路，用于连接两个不同的电压部分。左侧部分，MAX31850K的**DQ**引脚使用3.3V，如果Arduino使用5V，则需要此电路。在上面的原理图中，**Q6**是N沟道MOSFET [2N7002](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

:::note
      在本节中，我们只向您展示了部分原理图，完整文档请参考[资源](https://wiki.seeedstudio.com/cn/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)
:::

### 装配图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/Assembling.jpg" /></div>

:::tip
请将热电偶的<font style={{fontWeight: 'bold', color: '#AE0000'}}>红色</font>导线插入Grove - 1-Wire热电偶放大器（MAX31850K）的**T+**端口，将<font style={{fontWeight: 'bold', color: '#FFFFFF'}}>白色</font>导线插入**T-**端口。如果您没有使用我们商城的k型热电偶，颜色可能不同，请与卖家确认**+ -**极性。
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上面提到的支持平台是/是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与 Arduino 一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 1-Wire 热电偶放大器 x 2|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank">立即购买</a>|

|k型热电偶 x 2|Grove - I2C Hub|
|----|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thermocouple.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/12C%20hub.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html" target="_blank">立即购买</a>|

:::note
**1-** 我们提供了两个软件示例，**简单**和**多个**，上述材料要求是针对**多个**示例的。如果您想测试**简单**示例，那么 Grove - I2C Hub 不是必需的，只需要一个 Grove - 1-Wire 热电偶放大器就足够了。

**2-** 我们在这里使用 I2C Hub 不是作为 I2C 接口，而只是作为一个普通的一对二转换接口。
:::

- **步骤 1.** 将 k 型热电偶的红线插入 **T+**，将 k 型热电偶的浅白线插入 **T-**

- **步骤 2.** 将 Grove - I2C Hub 连接到 Base Shield 的 **D3** 端口。

- **步骤 3.** 将 Grove - 1-Wire 热电偶放大器 A 和 B 插入 Grove - I2C Hub。

- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 5.** 通过 USB 线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/connect.jpg" /></div>

:::note
如果我们没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     |  Grove 线缆 |Grove - I2C Hub |Grove - 1-Wire 热电偶放大器|
|---------------|-------------------------|----|-----|
| GND            |  黑色                   |G|GND|
| 5V           | 红色                   |V|VCC|
| NC            | 白色                   |SDA|NC|
| D3            | 黄色                  |SCL|DQOUT|

#### 软件

:::caution
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)
:::

- **步骤 1.** 从 Github 下载 [Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 解压库文件夹，按照路径找到并打开 **Multiple.ino** ---> **xxxx\Arduino\libraries\Seeed_MAX31850K-master\examples\Multiple**。xxxx 是您安装 Arduino 的路径。

此文件夹 **\Arduino\libraries\Seeed_MAX31850K-master\examples** 包含两个示例：**Multiple.ino** 和 **Simple.ino**。
>Simple.ino--单一模式（一个主机和一个从机）

>Multiple.ino--多个模式（一个主机和多个从机，基于 ROM 寻址-单总线搜索算法）

或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 中的新草图中。

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 3
#define TEMP_RESOLUTION 9

#define MAX_NUM_OF_DEVICE  10

// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

// arrays to hold device addresses
DeviceAddress Device_add[MAX_NUM_OF_DEVICE];
DeviceAddress insideThermometer, outsideThermometer;

void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();

  // locate devices on the bus
  Serial.print("Locating devices...");
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount(), DEC);
  Serial.println(" devices.");

  Serial.print("Parasite power is: "); 
  if (sensors.isParasitePowerMode()) Serial.println("ON");
  else Serial.println("OFF");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
    if(!sensors.getAddress(Device_add[i],i))
    {
      Serial.println("Find device error!!");
    }
    else
    {
      Serial.print("Device [");
      Serial.print(i);
      Serial.print("] addr =");
      printAddress(Device_add[i]);
    }
    Serial.println(" ");
  }

}

// function to print a device address
void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    // zero pad the address if necessary
    if (deviceAddress[i] < 16) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
  }
}

// function to print the temperature for a device
void printTemperature(DeviceAddress deviceAddress)
{
  float tempC = sensors.getTempC(deviceAddress);
  Serial.print("Temp C: ");
  Serial.print(tempC);
  Serial.print(" Temp F: ");
  Serial.print(DallasTemperature::toFahrenheit(tempC));
}

// function to print a device's resolution
void printResolution(DeviceAddress deviceAddress)
{
  Serial.print("Resolution: ");
  Serial.print(sensors.getResolution(deviceAddress));
  Serial.println();    
}

// main function to print information about a device
void printData(DeviceAddress deviceAddress)
{
  Serial.print("Device Address: ");
  printAddress(deviceAddress);
  Serial.print(" ");
  printTemperature(deviceAddress);
  Serial.println();
}

void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures();
  Serial.println("DONE");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
     printData(Device_add[i]);
  }

}
```

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。然后设置波特率为**115200**。

:::tip
     如果一切正常，您将得到结果。
:::

```cpp
DONE
Device Address: 3B23211800ing temperatures... 77.00
Requesting temperatures...DONE
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...Dallas Temperature IC Control Library Demo
Locating devices...Found 2 devices.
Parasite power is: OFF
Device [0] addr =3B4C965D06D80C98 
Device [1] addr =3B2321180000005C 
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 1-Wire热电偶放大器eagle文件](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip)
- **[Zip]** [Seeed_MAX31850K库](https://github.com/Seeed-Studio/Seeed_MAX31850K/archive/master.zip)
- **[PDF]** [MAX31850数据手册](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Max31850.pdf)

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

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了使用SenseCAP系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66外壳、蓝牙配置、与全球LoRaWAN®网络的兼容性、内置19 Ah电池以及APP的强大支持使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。为您下一个成功的工业项目尝试最新的SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>