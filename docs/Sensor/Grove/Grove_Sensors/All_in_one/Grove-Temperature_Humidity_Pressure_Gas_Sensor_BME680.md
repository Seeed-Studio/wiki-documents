---
description: Grove - Temperature Humidity Pressure Gas Sensor(BME680)
title: Grove - Temperature Humidity Pressure Gas Sensor(BME680)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

The Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) is a multiple function sensor which can measure temperature, pressure, humidity and gas at the same time. It is based on the BME680 module and you can use this sensor in your GPS, IoT devices or other device which needs those four parameters.



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::note
  The 'gas' means air quality which is mainly affected by the [VOCs](https://en.wikipedia.org/wiki/Volatile_organic_compound) (volatile organic compounds) gas.  At this time Augest 8,2018, this module do not support gas mearsue for some Arduino board. It is only available for the Arduino board with the large memory arduino platform like ATMEGA2560. If you use other arduino platform, like: arduino uno, seeedunio v4.2... the gas value you get is not accurate.
:::

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

## Features

- 4-in-1 for multiple measurement
- low consumption
- Wide measurement range
- Optional output:

    Individual humidity, pressure and gas sensors can be independently enabled/diabled

## Specification

|Item|Value|
|---|---|
|Working voltage|3.3V/5V|
|Operating range|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|Digital interface|I2C(up to 3.4MHZ)/ SPI(3 and 4 wire, up to 10MHz)|
|I2C address|0x76(default)/ 0x77(optional)|

## Hardware Overview

### Pin Map

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
        If you want to change the default settings, you may need to cut the pad and solder by yourself, please follow the picture above and please be careful when you use knife or soldering iron.
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Get One Now</a>|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

:::note
If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “BME680” example via the path: **File --> Examples --> Seeed BME680 --> seeed_bme680_test**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.

The result should be like:

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::notebug
        1 - To get the stable and accurate value, you need to let the arduino run the code for about 2 hours. The result is much more reliable then.

        2 - For the gas part, it's a variable resistance which reflect the value of the VOC gas, so the unit is Kohms. 
        
        3 - If you want to get a reliable result for gas part, please use Arduino Mega and check [here](https://github.com/Seeed-Studio/Seeed_BME680_V1)
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove-BME680 Eagle file](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Library]** [Seeed BME680 Library](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [Datasheet of BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
