---
description: Grove - Digital Infrared Temperature Sensor
title: Grove - Digital Infrared Temperature Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Digital_Infrared_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---


<table>
  <tbody><tr>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg" /></td>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg" /></td>
    </tr>
  </tbody></table>

The Digital Infrared temperature sensor is a non-contact temperature measurement module which bases on MLX90615. Both the IR sensitive thermopile detector chip and the signal conditioning chip are integrated in the same package. This module communicates with Arduino using SMBus, up to 127 sensors can be read via common 2 wires. Thanks to the module's low noise amplifier, 16-bit ADC and powerful DSP unit, it can achieved a high accuracy of 1℃ over wide temperature rage and a high measurement resolution of 0.02℃.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Specifications
-------------

<table border="1" cellspacing="0" width="70%">
<tr>
<th>
Item
</th>
<th>
Min
</th>
<th>
Typical
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
2.6
</td>
<td>
3
</td>
<td>
5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td>
</td>
<td>
1.4
</td>
<td>
1.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Ambient Temperature Range
</th>
<td colspan="3">
-40 - 85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Object Temperature Range
</th>
<td colspan="3">
-40 - 115
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
 20x40x9.6
</td>
<td>
mm
</td>
</tr>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Hardware Overview
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg" /></div>

| Pin Number | Name | Type   | Function Description                             |
|------------|------|--------|--------------------------------------------------|
| 1          | GND  | -      | Signal ground                                    |
| 2          | VCC  | in     | Positive Power Supply Input Terminal(3.3V or 5V) |
| 3          | SDA  | in/out | I2C data input/output                            |
| 4          | SCL  | in     | I2C CLK                                          |

## Getting Started

### Play With Arduino

We provide an example here to show you how to use this sensor to measure the temperature of the target which is in front of the sensor, and print the result on the serial monitor.

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

#### Hardware

**Hardware components:**

| Seeeduino V4.2 | Base Shield|  Grove - Digital Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **Step 1.** Plug Grove - Digital Infrared Temperature Sensor into D2 port of Grove-Base Shield.
- **Step 2.** Plug Grove - Base Shield into Seeeduino.
- **Step 3.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG" /></div>

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - Digital Infrared Temperature Sensor to Arduino as below.
:::

| Seeeduino       | Grove - Digital Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| D3           | NA                   |
| D2            | Yellow                  |

#### Software

- **Step 1.** Download the library and demo code [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615).
- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Open the demo code directly by the path:

  **File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**. As the following picture shown:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png" /></div>

Since the sensor is factory calibrated with the digital SMBus compatible interface enabled, but the library is based on a soft i2c library, so you can use any digital pins on any AVR chip to drive the **SDA** and **SCL** lines. We use **D2** as the **SCL** pin and **D3** as the **SDA** pin in this demo code. You can use other port as long as you modify the code with matched pins.

- **Step 4.** Upload the code into Arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).
- **Step 5.** Click **Tool -> Serial Monitor** to start up the Serial Monitor. And you will see the result.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg" /></div>

Now, you can measure the temperature with this sensor. Ambient temperature is the MLX90615 package temperature and Object temperature is the object target temperature. According to our experiment, when you place the sensor in the normal indoor temperature, and ensure that there is nothing source of heat in front of the sensor's 1M scope. The Object temperature will approximately equal to Ambient temperature. When measuring the Object temperature, you should ensure the object is as close as possible whit the sensor, but do not touch the surface of the sensor, we recommend the distance is less than 3cm. Wish you have a fun try.

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
--------

- **[Zip]** [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip)
- **[PDF]** [MLX90615.pdf](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf "File:MLX90615.pdf")
- **[Code]** [Demo Code](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
