---
title: Grove - Temperature&Humidity Sensor (HDC1000)
category: Sensor
bzurl: https://seeedstudio.com/Grove-Temperature&Humidity-Sensor-(HDC1000)-p-2535.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor_(HDC1000)
prodimagename: Grove-TemperatureAndHumidity_Sensor-HDC1000-p1.jpg
bzprodimageurl: http://statics3.seeedstudio.com/seeed/img/2016-09/MAVhqWeEjBMyo5O1o2MfVA4S.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor-HDC1000
sku: 101020087
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p1.jpg)

Grove - Temperature&Humidity Sensor (HDC1000) utilizes a HDC1000 sensor.HDC1000 was designed by Texas Instruments.It is a digital humidity sensor with integrated temperature sensor that provides excellent measurement accuracy at very low power.The device measures humidity based on a novel capacitive sensor.The humidity and temperature sensors are factory calibrated.The innovative WLCSP (Wafer Level Chip Scale Package) simplifies board design with the use of an ultra-compact package. The sensing element of the HDC1000 is placed on the bottom part of the device, which makes the HDC1000 more robust against dirt, dust, and other environmental contaminants. The HDC1000 is functional within the full –40°C to +125°C temperature range,and 0-100% RH range.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)

Features
--------

-   Grove connector compatible
-   IIC Interface
-   Low Power
-   Wide operating voltage range
-   I2C Serial Bus Address Configuration

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Specifications
--------------

<table border="1" cellspacing="0" width="800">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Supply Voltage
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Working Current
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Relative Humidity Accuracy (Typ)
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Relative Humidity Operating Range (Typ)
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Temperature Accuracy
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Temperature Range
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Operating Temperature Range
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
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
40*20
</td>
<td>
mm
</td>
</tr>
</table>

Platforms Supported
-------------------

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg)

1.  Grove connector.
2.  Ready：Ready for a conversion.
3.  Default address: 0x40.
4.  ADDR0, ADDR1: I2C Serial Bus Address Configuration(0x40,0x41,0x42,0x43)

Get Started
-----------

### With Arduino

Here is how to use Grove - Temperature&Humidity Sensor (HDC1000) with Seeeduino Lotus.

**Hardware Installation**

1.  Part lists: 
    - Seeeduino Lotus v1.0 or other Microcontroller development board that combination of Seeeduino
    - Grove - Temperature&Humidity Sensor (HDC1000).

2.  Hardware linking is very easy.Grove - Temperature&Humidity Sensor (HDC1000) communicate over I2C. Connecting Grove - Temperature&Humidity Sensor (HDC1000) and Seeeduino Lotus v1.0 by Grove cable, as shown below.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p2.jpg)

**Software Part**

1.  To download the demo code in github, click [here](https://github.com/Seeed-Studio/HDC1000).
2.  To install Arduino Library, please click [here](/How_to_install_Arduino_Library "How to install Arduino Library")
3.  Open the HDC1000 example sketch
4.  In the Tools -> Board menu, select right board and serial port.
5.  Upload demo code to Seeeduino Lotus v1.0.

**We can get the temperature and relative humidity information from the serial terminal**

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p4.jpg)

### With Launchpad

#### Material required

-   TI MSP430FR4133 LaunchPad\] × 1
-   USB cable(type A to mini type-b) × 1
-   [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](http://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
-   [Grove - Temperature&Humidity Sensor (HDC1000)](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### Hardware connections

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG)

#### Download code and flash it to Launchpad

1. Download the [demo code](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/res/HDC1000-HDC1000_energia.zip).

    <div class="admonition note">
<p class="admonition-title">Note</p>
You have to copy the file <span style="font-style:italic">readTempHumi.ino</span> (in the folder <span style="font-style:italic">examples</span>) into the same folder as <span style="font-style:italic">HDC1000.h</span>.
</div>

2. Flash the code into Launchpad.

3. Open *Serial Monitor* (**Tool**->**Serial Monitor**) to view data detected.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png)

Resources
---------

- [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip "File:Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip")
- [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf "File:Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf")
- [Demo code](https://github.com/Seeed-Studio/HDC1000)
- [HDC1000\_DataSheet.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor-HDC1000/master/res/HDC1000.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) -->
