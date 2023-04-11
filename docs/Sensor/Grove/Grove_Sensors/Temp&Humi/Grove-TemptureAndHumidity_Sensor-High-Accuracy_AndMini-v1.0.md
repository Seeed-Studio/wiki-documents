---
description: Grove - Temperature&amp;Humidity Sensor (High-Accuracy &amp;Mini) v1.0
title: Grove - Temperature&amp;Humidity Sensor (High-Accuracy &amp;Mini) v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/main.jpg" /></div>

This is a multifunctional sensor that gives you temperature and relative humidity information at the same time. It utilizes a TH02 sensor that can meet measurement needs of general purposes. It provides reliable readings when environment humidity condition in between 0-80% RH, and temperature condition in between 0-70°C, covering needs in most home and daily applications that don't contain extreme conditions.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody></table>

Specifications
--------------

- Wide operating voltage range
  - (3.3V ~ 5V)
- Low Power Consumption
  - 350 µA during RH conversion
- 0 to 100% RH operating range
- Measuring Range:
  - Humidity: 0% - 80% RH
  - Temperature: 0 ~ 70 °C
- Accuracy:
  - Humidity: ±4.5% RH
  - Temperature: ±0.5°C
- I2C host interface
- Excellent long term stability

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## 　Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Applications

- Industrial HVAC/R
- Thermostats/humidistats
- Micro-environments/data centers

## Getting Started

:::note
If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/Thumbnail.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|

- **Step 2.** Connect Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) v1.0 to **I2C** port of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/arduino_connect.jpg" /></div>

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.
:::

| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL            | Yellow                  |

#### Software

- **Step 1.** Download the  [Grove Temperature&Humidity TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)  from Github.

- **Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “ TH02_demo” example via the path: **File --> Examples --> Grove Temper Humidity_TH02 --> TH02_demo**. Through this demo, we can read the temperature and relative humidity information of the environment.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/path.png" /></div>

This demo is going to show you how to read temperature and humidity information from this Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) Sensor.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature.

The result should be like:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/result_arduino.png" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) V1.0 sch pcb](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
- **[PDF]** [TH02_SENSOR.pdf](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf)
- **[Library]** [Grove_Temper_Humidity_TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)

## Projects

**Smart Mali**: A Smart Pot for Indoor Gardening! {Wondering what Mali means?}

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/smartmali-1fbdda/embed' width='350'></iframe>

**Cold Transport Chain Monitoring and Tracking**: IoT based solution to make delivery of temperature sensitive perishable products more efficient and to reduce wastage.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/musketeers/cold-transport-chain-monitoring-and-tracking-48b2c5/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
