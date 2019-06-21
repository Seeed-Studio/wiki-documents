---
name: Grove - 3-Axis Digital Accelerometer(±400g)
category: Sensor
bzurl: https://seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(±400g)-p-1897.html
oldwikiname: Grove_-_3-Axis_Digital_Accelerometer(±400g)
prodimagename: Grove_3Axis_Accelerometer400g.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/grove 3Axis Accelerometer400g.jpg
surveyurl: https://www.research.net/r/Grove-3-Axis_Digital_Accelerometer-400g
sku: 101020071
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/img/Grove_3Axis_Accelerometer400g.jpg)

The H3LIS331DL is a low power high performance 3-axis linear accelerometer belonging to the “nano” family, with digital I2C serial interface standard output. The device features ultra low power operational modes that allow advanced power saving and smart sleep to wake-up functions. The H3LIS331DL has dynamically user selectable full scales of ±100g/±200 g/±400 g and it is capable of measuring accelerations with output data rates from 0.5 Hz to 1 kHz.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

Features
--------

-   Wide power range DC3.3V to 5V
-   Grove outline
-   3 axis sensing
-   Small, low-profile package: 3×3×1mm TFLGA
-   Low power 300µA at 3.3V (typical)
-   ±100g /±200 g /±400 g dynamically selectable full scale
-   I2C digital output interface
-   10000 g high shock survivability
-   ECOPACK®RoHS and “Green” compliant

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Application Ideas
-----------------

-   Shock detector
-   Impact recognition and logging
-   Concussion detection

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Usage
-----

Here below we show you how to read the raw data from this accelerometer.

1. Plug it onto the I2C port of your [Grove - Base Shield](http://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134).
![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg)

2. Download the [Digital Accelerometer(±400g) Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL) and unpack it into arduino-1.0\\libraries in your Arduino installation folder.

3. Open the demo code directly by the path:File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_AdjVal. It is a sketch to adjust the raw data of H3LIS331DL to make it more precise.

4. Upload the code and open the serial monitor.

5. Open the serial monitor to get the adjust value of reference as the steps described in serial output.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/img/Adjust_value_of_Accelerometer.jpg)

6. Open the demo code directly by the path:File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_Demo. Then modify the VAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXIS according to what you get from H3LIS331DL_AdjVal Sketch.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/img/Redefine_the_VAL_of_Accelerometer.jpg)

7. Upload the code and open the serial monitor and open the serial monitor to check the result.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/img/Raw_data_of_H3LIS331DL.jpg)

Resources
---------

-   [Grove - 3-Axis Digital Accelerometer(±400g) Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-400g/master/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [github repository for 3-Axis Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [H3LIS331DL Datasheet PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)
 

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>