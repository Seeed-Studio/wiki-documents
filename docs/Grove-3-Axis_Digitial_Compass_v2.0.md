---
title: Grove-3-Axis Digitial Compass v2.0
category: Sensor
bzurl: https://seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html
oldwikiname: Grove_-_3-Axis_Compass_V1.0
prodimagename: Grove-3-Axis_Compass_V1.0.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020034 1.jpg
surveyurl: https://www.research.net/r/Grove-3-Axis_Compass_V1_0
sku: 101020492
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_wio
---

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/main_page.jpg)

The Grove - 3-Axis Digital Compass is a digital compass sensor based on Bosch BMM150. It allows measurement of the magnatic field in three perpendicular axes and the output can be read out over I2C and SPI interface, perfectly suitable for 3-Axis mobile applications.


This is the second generation of Grove - 3-Axis Digital Compass, comparing to the first version, this version can perfectly match the demanding requirements of all 3-Axis applications while the price is almost half of the first version, very cost effective.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

## Features

- High resolution
- High heading accuracy
- Easy to use

## Specifications
--------------

| Item                         | Valnue                                |
|------------------------------|---------------------------------------|
| Working Voltage              | 3.3V / 5V                             |
| Magnetic field range typical | ±1300μT(x, y-axis),  ±2500μT(z-axis)  |
| Magnetic field resolution    | 0.3μT                                 |
| Output Degree                | 0º ~ 360º                             |
| Interface                    | I2C                                   |
| Working Temperature          | -40℃ to +85 ℃                        |
| Dimensions                   | 20mm x 20mm x 15mm                    |

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started
-------------

### With [Arduino](http://wiki.seeedstudio.com/Arduino/)

You can choose any Arduino compatible board with I2C Port, in this wiki we use seeeduino V4.2.

**Materials**

| ReSpeaker Core v2 |  Grove -  PIR Motion Sensor |
|--------------|-------------|
|![enter image description here](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/seeeduino.jpg)|![enter image description here](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/little.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

#### Hardware Connection

- **Step 1.** Plug the Grove-3-Axis Digital Compass into Seeeduino V4.2 via the **Grove I2C** Port.
- **Step 2.** Connect the Seeeduino V4.2 board to your computer with an micro-USB cable.


![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/20180314-connect1.jpg)




<div class="admonition warning">
<p class="admonition-title">Caution</p>
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><B>here</B></a> to buy
</div>

### Software

!!!Note
    If this is the first time you are working with Seeeduino, please refer to this [page](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) to learn how to use Seeeduino and download the library.


- **Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150) for Grove-3-Axis Digital Compass.

- **Step 2.** After you installed the library, you can find the demo in **File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master**.

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/IDE_EXAM.png)

- **Step 3.** Make sure you've chosen the right port and Board, for this wiki we choose **Seeeduino V4(Atemega328P)**. Then click upload button at the top left corner, to upload the code.
.

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/port.png)


- **Step 4.** When the message **Done Uploading** pops up, you can click **Tools->Serial Monitor** to open the serial monitor. Please set the baud rate as 9600.

- **Step 5.** After a while you will see the monitor print the notice **Start figure-8 calibration after 3 seconds**

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/inital.png)

Within these 3 seconds， please tilt and rotate the compass back and forth on every axis, as shown in the picture below.

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/figure_8_calibration.jpg)

The calibration period time can be changed through the parameter timeout in the fuction **calibrate(uint16_t timeout)**.

!!!Note
    The compass needs to be calibrated, otherwise you will get the inaccurate data! Please make sure you have done the Step 5.


Finally, you will see the something like the following picture.

![](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/result.png)

!!!Tip
    Heading value is in range of 0º ~ 360º, this value is for Y axis, 0º means Y axis points at North, 90º means Y axis points at West, 180º means Y axis points at South, 270º means Y points at East.

Enjoy your compass!



## Resources
---------
- **[PDF]** [PDF of this Wiki](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/Grove-3-Axis_Digitial_Compass_v2.0.pdf)

- **[PDF]** [BST-BMM150-Datasheet](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/BST-BMM150-DS001-01-786480.pdf)

- **[Zip]** [Grove - 3-Axis Digital Compass v2_Eagle File](https://github.com/SeeedDocument/Bazaar_doc/raw/master/101020492/Grove%20-%203-Axis%20Digital%20Compass%20v2_Eagle%20File.zip)  


## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://forum.seeedstudio.com/).
