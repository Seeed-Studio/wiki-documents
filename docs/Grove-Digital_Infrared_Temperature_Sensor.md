---
name: Grove - Digital Infrared Temperature Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html
oldwikiname: Grove_-_Digital_Infrared_Temperature_Sensor
prodimagename: Grove－Digital_Infrared_Temperature_Sensor_4.jpg)
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020077 1.jpg
surveyurl: https://www.research.net/r/Grove-Digital_Infrared_Temperature_Sensor
sku: 101020077
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg"></td>
        <td><img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg"></td>
    </tr>
</table>

The Digital Infrared temperature sensor is a non-contact temperature measurement module which bases on MLX90615. Both the IR sensitive thermopile detector chip and the signal conditioning chip are integrated in the same package. This module communicates with Arduino using SMBus, up to 127 sensors can be read via common 2 wires. Thanks to the module's low noise amplifier, 16-bit ADC and powerful DSP unit, it can achieved a high accuracy of 1℃ over wide temperature rage and a high measurement resolution of 0.02℃.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)

Specifications
-------------

<table border="1" cellspacing="0" width="50%">
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

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg)

| Pin Number | Name | Type   | Function Description                             |
|------------|------|--------|--------------------------------------------------|
| 1          | GND  | -      | Signal ground                                    |
| 2          | VCC  | in     | Positive Power Supply Input Terminal(3.3V or 5V) |
| 3          | SDA  | in/out | I2C data input/output                            |
| 4          | SCL  | in     | I2C CLK                                          |



## Getting Started

### Play With Arduino

We provide an example here to show you how to use this sensor to measure the temperature of the target which is in front of the sensor, and print the result on the serial monitor.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

#### Hardware

**Hardware components:**

| Seeeduino V4.2 | Base Shield|  Grove - Digital Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/thumbnail.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **Step 1.** Plug Grove - Digital Infrared Temperature Sensor into D2 port of Grove-Base Shield.
- **Step 2.** Plug Grove - Base Shield into Seeeduino.
- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/raw/master/img/connection.JPG)


!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Digital Infrared Temperature Sensor to Arduino as below.

| Seeeduino       | Grove - Digital Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| D3           | NA                   |
| D2            | Yellow                  |

#### Software


- **Step 1.** Download the library and demo code [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615).
- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Open the demo code directly by the path:

  **File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**. As the following picture shown:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/example.png)

Since the sensor is factory calibrated with the digital SMBus compatible interface enabled, but the library is based on a soft i2c library, so you can use any digital pins on any AVR chip to drive the **SDA** and **SCL** lines. We use **D2** as the **SCL** pin and **D3** as the **SDA** pin in this demo code. You can use other port as long as you modify the code with matched pins.

- **Step 4.** Upload the code into Arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 5.** Click **Tool -> Serial Monitor** to start up the Serial Monitor. And you will see the result.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg)


Now, you can measure the temperature with this sensor. Ambient temperature is the MLX90615 package temperature and Object temperature is the object target temperature. According to our experiment, when you place the sensor in the normal indoor temperature, and ensure that there is nothing source of heat in front of the sensor's 1M scope. The Object temperature will approximately equal to Ambient temperature. When measuring the Object temperature, you should ensure the object is as close as possible whit the sensor, but do not touch the surface of the sensor, we recommend the distance is less than 3cm. Wish you have a fun try.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Resources
--------

- **[Zip]** [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip "File:Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip")
- **[PDF]** [MLX90615.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/res/MLX90615.pdf "File:MLX90615.pdf")
- **[Code]** [Demo Code](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>