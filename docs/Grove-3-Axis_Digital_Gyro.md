---
name: Grove - 3-Axis Digital Gyro
category: Sensor
bzurl: https://seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html
oldwikiname: Grove_-_3-Axis_Digital_Gyro
prodimagename: Grove-3-Axis_Digital_Gyro.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020050 1.jpg
surveyurl: https://www.research.net/r/Grove-3-Axis_Digital_Gyro
sku: 101020050
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/img/Grove-3-Axis_Digital_Gyro.jpg)

Grove - 3-Axis Digital Gyro module based on ITG 3200. It is the world’s first single-chip, digital-output, 3-axis MEMS motion processing gyro optimised for gaming, 3D mice, and motion-based remote control applications for Internet connected Digital TVs and Set Top Boxes. The ITG-3200 features three 16-bit analog-to-digital converters (ADCs) for digitising the gyro outputs, a user-selectable internal low-pass filter bandwidth, and a Fast-Mode I2C (400kHz) interface.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

Features
--------

-   Supply Voltage: 3.3V, 5V
-   Operation Current: 6.5mA
-   Standby current: 5μA
-   Sensitivity: 14 LSBs per °/sec
-   Full scale range: ±2000°/sec
-   Acceleration: 10,000g for 0.3ms
-   I2C Interface
-   ±2000°/s full scale range and 14.375 LSBs per °/s sensitivity
-   Three integrated 16-bit ADCs
-   On-chip temperature sensor
-   Integrated amplifiers and low-pass filters
-   Hermetically sealed for temp and humidity resistance
-   RoHS and Green compliant

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

Demonstration
-------------

This demo will show you how to get data from this digital gyro, the data is in the unit of rad/s.

Here we need a Grove - 3-Axis Digital Gyro and a Seeeduino V3.0.

### Hardware Installation

Hardware installation is very easy, because there's an I2C Grove in Seeeduino,

So, what we need to do is connect it to I2C Grove via a Grove cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG)

### Download Code and Upload

You can download the library in github, click [here](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/), then extract it to libraries folder of Arduino.

Then open File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro, you can open the demo code.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/img/ITG3200_gyro_ArduinoIde.jpg)

Click Upload to upload the code, if you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help.

### Check the result

Now, you can open the serial monitor to check the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg)

Reference
---------

The diagram below shows the orientations of the 3 axes. You can use it to understand the physical meanings of the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/img/Gyro_Reference_1.jpg)

Resources
---------

-   [Datasheet of ITG-3200.](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/res/ITG-3200.pdf)
-   [Grove - 3-Axis Digital Gyro Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Gyro/master/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [Digital Gyro Library](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>