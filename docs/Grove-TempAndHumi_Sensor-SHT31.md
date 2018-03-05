---
title: Grove - Temp&Humi Sensor(SHT31)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-(SHT31)-p-2655.html
oldwikiname: Grove_-_Temp&Humi_Sensor(SHT31)
prodimagename: Grove-TempAndHumi_Sensor-SHT31-Product_View_700_S.jpg
bzprodimageurl: https://statics3.seeedstudio.com/seeed/master/img/2016-06/bytoMkAMziVhHKidWvUshZYm.jpg
surveyurl: https://www.research.net/r/Grove-TempAndHumi_Sensor-SHT31
sku: 101020212
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-Product_View_700_S.jpg)

Grove - Temp&Humi Sensor(SHT31) is a highly reliable, accurate, quick response and integrated temperature & humidity sensor. The sensor(chip) used in the module is designed with Sensirion's CMOSens<sup>®</sup> technology. The chip is well calibrated, linearized and compensated for digital output.

The typical accuracy of this module can be **±2%RH** (for relative humidity) and **±0.3°C** (for temperature). This module is compatible with 3.3 Volts and 5 Volts and hence does not require a voltage level shifter. This module communicates using with I<sup>2</sup>C serial bus and can work up to 1 MHz speed. We also have provided a highly abstracted library to make this product more easier to use.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board with the main control board via [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57). Then use the provided library and example/demo code available at GitHub to get your data. If you're using an Arduino without a Base Shield, simply connect the VIN pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).


[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)

Features
--------

-   Highly reliable, accurate and quick response time
-   Grove compatible and easy to use
-   Well calibrated, linearized, compensated for digital output
-   Highly abstracted development library

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Specifications
--------------

| Parameter                | Value                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Input voltage (VCC)      | 3.3 volts or 5 volts                                                                                         |
| I/O Logic Level          | 3.3 volts or 5 volts based on VCC                                                                            |
| Operating Current        | 100 μA                                                                                                       |
| Operating Temperature    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| Temperature Sensor Range | -40–125 ℃, with ±0.3°C accuracy                                                                              |
| Humidity Sensor Range    | 0% - 100%(Relative Humidity), with ±2% accuracy                                                              |
| Sensor Chip              | SHT31([Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| Interface Bus            | I<sup>2</sup>C                                                                                               |
| Weight                   | 4 g (for breakout board), 9 g for whole package each piece                                                   |
| Dimensions               | 40(length)×20(width) mm                                                                                      |

Platforms Supported
-------------------

<table>
<tr>
<td>
Platform
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Raspberry Pi
</td>
<td>
Beaglebone
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
Supported status
</td>
<td>
Supported
</td>
<td>
Not supported
</td>
<td>
Supported
</td>
<td>
Supported
</td>
</tr>
<tr>
<td>
Notes
</td>
<td colspan="5">
If no version number is mentioned for a specific platform, it means this product support all versions within this platform.
</td>
</tr>
</table>

Hardware Overview
-----------------

This module is very easy to use using the Grove interface.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Do not touch, shake or let this product vibrate while using. Otherwise, it will affect the accuracy of data measured.
</div>


### **Package includes**(main parts)

| Parts name                                                                                                                    | Quantity |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Temp&Humi Sensor(SHT31)                                                                                               | 1 piece  |
| [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

Getting Started
---------------

Now let us run some basic examples with this module using the library/examples provided.

### With Arduino

This section shows you how to build a simple project with Arduino platform. If you are using a different type of main control board, these instructions and source code probably still helps.

#### Materials required

-   Grove - Temp&Humi Sensor(SHT31) × 1
-   [Seeeduino 4.2](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html) (Fully compatible with Arduino) or Arduino UNO (other models also are fine) × 1
-   Grove - Base Shield × 1 (This is optional if you use Seeeduino because there are two I2C sockets on Seeeduino v4.2)
-   USB cable (type A to type B, for Arduino) × 1 or USB cable (Type-A to micro Type-B, for Seeeduino) × 1
-   [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Connections

If you are using Seeeduino, connect the Grove module to I2C port like:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-wiki_demo_on_seeeduino1200_s.jpg)

If you are using Arduino UNO or other compatibles, first attach Grove - Base Shield V2. Then, connect the Grove module to I2C port like:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-wiki_demo_on_arduino1200_s.jpg)


#### Coding Work

You can find the demo sketch [here](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor/blob/master/example) and development library [here](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor).

1. A typical demo code. You can upload code to main control board with [Codebender](https://codebender.cc).

    <iframe frameborder="0" height="500" src="https://codebender.cc/embed/sketch:318318" width="50%">
</iframe>

2. Download and upload the code. If you do not know how to upload an Arduino sketch, please visit <https://www.arduino.cc/en/Guide/Windows> for Windows user or <https://www.arduino.cc/en/Guide/MacOSX> for Mac user. You can see the result as below.

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-Wiki_Demo_Result_600_S.jpg)

<div class="admonition tip">
<p class="admonition-title">Tip</p>
If you use Seeeduino, please also select <span style="font-weight:bold">Boards</span> under <span style="font-weight:bold">Tools</span> as you upload sketches.
</div>

Resources
---------

-   [EAGLE schematics, PCB files and PDF schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
-   [SHT31 Sensor Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
-   [Library and example code](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) on GitHub
-   [I<sup>2</sup>C How-to for Arduino](https://www.arduino.cc/en/Reference/Wire)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->
