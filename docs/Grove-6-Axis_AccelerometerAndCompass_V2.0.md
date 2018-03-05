---
title: Grove - 6-Axis Accelerometer&Compass V2.0
category: Sensor
bzurl: https://seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html
oldwikiname: Grove_-_6-Axis_Accelerometer&Compass_V2.0
prodimagename: Accelerometer_And_Compass_v2.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020081 1.jpg
surveyurl: https://www.research.net/r/Grove-6-Axis_AccelerometerAndCompass_V2_0
sku: 101020081
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/Accelerometer_And_Compass_v2.JPG)

The Grove –6-Axis Accelerometer&Compass V2.0 is a 3-axis accelerometer combined with a 3-axis magnetic sensor. It is an upgraded version of Grove - 6-Axis Accelerometer&Compass V1.0 and based on the sensor module LSM303D which has a selectable linear acceleration full scale range of ±2g / ±4g / ±8g / ±16g and a selectable magnetic field full scale range of ±2 /±4 / ±8 / ±12 gauss. Both the magnetic parts and the accelerometer parts can be powered down separately to reduce the power consumption. The Arduino can get these data via the I2C interface with the given library for this module.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)

Specifications
-------------

-   Input Voltage: 5V
-   I2C Interface and selectable SPI Interface
-   Measuring scale selectable
-   6D orientation detection
-   2 independent programmable interrupt generators
-   Power-down mode

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/Grove-6-Axis_AccelerometerAndCompass_V2.0_inter.jpg)

-   ①Grove interface,connect to I2C
-   ②SPI Interface
-   ③I2C or SPI select pad(default is I2C), if want to use SPI, disconnect this pad
-   ④Interrupt digital output
-   ⑤Address select pad, default connected b and a address is 0x1E, if connect b and c address is 0x1D, if want to use SPI, disconnect this pad to either side.

Demonstration
-------------

The LSM303D is a 6D sensor module that contains a 3D accelerometer and a 3D magnetic sensor. It has an I2C digital interface so that the analog to digital converter is avoided.

The MCU can collect 6D sensor data directly through the I2C interface.OK, let's start on using this LSM303D 6D sensor module.

### Hardware Installation

1.  Hardware installation is very easy, because there's an I2C Grove in Seeeduino, so what we need to do is connect it to I2C Grove via a Grove cable.
2.  Connect the Seeeduino to PC via a USB cable to power up this system.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/6-Axis_AccelerometerAndCompass_V2.0_connect.jpg)

### Download Code and Upload

1.  Download [demo\_code](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2) which shows how to calculate level and 6-Axis Accelerometer&Compass heading using the LSM303D.
2.  Upload the Code.
3.  Open the serial monitor, you will see the output result of Color Sensor as shown below:

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/6-Axis_AccelerometerAndCompass_V2.0_demo.jpg)

4. You can see the acceleration values and the clockwise angle between the magnetic north and x-axis.

The X/Y/Z shows the 3 axis acceleration; and then the angle between the magnetic north and x-axis calculated.

And also the the angle between the magnetic north and the projection of positive x-axis calculated.

Please refer [here](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/res/LSM303_application_note.pdf) to know more about this parameter.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/Airplane.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/Airplane_calculated.jpg)

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p>1.  All ST MEMS accelerometers are factory calibrated, allowing the user to avoid any further calibration for most of the applications. However, to reach a heading accuracy of below 2°, an easy calibration procedure is needed.</p>
<p>2.  When test The clockwise angle between the magnetic north and x-axis, you can align the device Xa axis to any direction, but do not make it face down. Refer to the below picture:</p>
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/img/Testing.jpg)

Resources
---------

-   [6-Axis Accelerometer&Compass v2.0 Library](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2)
-   [LSM303D\_datashet](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/res/LSM303D_datasheet.pdf)
-   [6-Axis\_Accelerometer%26Compass\_v2.0 eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-6-Axis_AccelerometerAndCompass_V2.0/master/res/Grove-6-Axis_AccelerometerAndCompass_v2.0_sch_pcb.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Compass_V2.0 -->
