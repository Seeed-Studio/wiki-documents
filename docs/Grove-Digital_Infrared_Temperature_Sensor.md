---
title: Grove - Digital Infrared Temperature Sensor
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

The Digital Infrared temperature sensor is a non-contact temperature measurement module which bases on MLX90615.Both the IR sensitive thermopile detector chip and the signal conditioning chip are integrated in the same package.This module communicates with Arduino using SMBus,up to 127 sensors can be read via common 2 wires.Thanks to the module's low noise amplifier, 16-bit ADC and powerful DSP unit, it can achieved a high accuracy of 1℃ over wide temperature rage and a high measurement resolution of 0.02℃.

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
3.4
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

Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg)

| Pin Number | Name | Type   | Function Description                             |
|------------|------|--------|--------------------------------------------------|
| 1          | GND  | -      | Signal ground                                    |
| 2          | VCC  | in     | Positive Power Supply Input Terminal(3.3V or 5V) |
| 3          | SDA  | in/out | I2C data input/output                            |
| 4          | SCL  | in     | I2C CLK                                          |

Usage
-----

We will provide an example here to show you how to use this sensor to measure the temperature of the target which is in front of the sensor,and print the result on the serial monitor.

-   Connect this module to seeeduino using [Grove - Base Shield](/Base_Shield_V2 "Grove - Base Shield") port D2.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Digital_Infrared_Temperature_Sensor4.JPG)

### Software Part

1. Download the library and demo code [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615).
2. Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.5\\libraries.
3. Open the demo code directly by the path:File -&gt; Examples ->Digital_Infrared_Temperature_Sensor_MLX90615->MLX90615Soft.

    You can see :

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/MLX90615_demo_code.jpg)

    Since the sensor is factory calibrated with the digital SMBus compatible interface enabled,but the library is based on a soft i2c library,so you can use any digital pins on any AVR chip to drive the SDA and SCL lines.We use D2 as the SCL pin and D3 as the SDA pin in this demo code.

4. Upload the code into Arduino.
5. Start up the Serial Monitor.

    You can see :

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg)

Now, you can measure the temperature with this sensor.Ambient temperature is the MLX90615 package temperature and Object temperature is the object target temperature.According to our experiment,when you place the sensor in the normal indoor temperature,and ensure that there is nothing source of heat in front of the sensor's 1M scope.The Object temperature will approximately equal to Ambient temperature.When measuring the Object temperature,you should ensure the object is as close as possible whit the sensor,but do not touch the surface of the sensor,we recommend the distance is less than 3cm. Wish you have a fun try.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Resources
--------

- [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip "File:Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip")
- [MLX90615.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Digital_Infrared_Temperature_Sensor/master/res/MLX90615.pdf "File:MLX90615.pdf")
- [Demo Code](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->
