---
title: Grove - IMU 9DOF v2.0
category: Sensor
bzurl: https://seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html
oldwikiname: Grove_-_IMU_9DOF_v2.0
prodimagename: Grove-IMU_9DOF_v2.0.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020080 2.jpg
surveyurl: https://www.research.net/r/Grove-IMU_9DOF_v2_0
sku: 101020080
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2.0.JPG)

Grove - IMU 9DOF v2.0 is an upgraded version of **Grove - IMU 9DOF v1.0** and it is a high performance 9-axis motion tracking module, which is based on MPU-9250. The MPU-9250 is an integrated 9-axis motion tracking device designed for the low power, low cost, and high performance requirements of consumer electronics equipment including smartphones, tablets and wearable sensors. MPU-9250 features three 16-bit ADC for digitizing the gyroscope outputs and three 16-bit ADCs for digitizing the accelerometer outputs and three 16-bit ADCs for digitizing the magnetometer outputs.


[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

Specifications
-------------

-   I2C/SPI interface
-   Auxiliary I2C
-   Low Power Consumption
-   400kHz Fast Mode I2C for communicating with all registers
-   Digital-output 3-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250, ±500, ±1000, and ±2000°/sec
-   Digital-output 3-Axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g
-   Digital-output 3-Axis accelerometer with a full scale measurement range is ±4800μT

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Platforms Supported
-------------------

Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2_inter.png)

① - Grove interface,connect to I2C

② - I2C or SPI select pad(default is I2C), if want to use SPI, disconnect this pad

③ - Address select pad, default connected b and c address is 0x68, if connect b and a address is 0x69, if want to use SPI, disconnect this pad to either side.

④ - SPI Interface

⑤ - Auxiliary I2C master serial data

⑥ - Auxiliary I2C master serial clock

⑦ - Interrupt digital output

Usage
-----

Based on library,we can display value of Accel&Gyro&Magnet on serial monitor. Now let's show how to use the module.

### Hardware Installation

Hardware installation is very easy, because there's an I2C Grove in Seeeduino, so what we need to do is connect it to I2C Grove via a Grove cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2.0_connect.jpg)

### Software Part

1. Download the [library](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove_IMU_9DOF_9250.zip).
2. Unzip libraries into the libraries file of Arduino IDE by the path: ..\arduino-1.0.5\libraries.
3. Unzip IMU_9D0F_Demo file into the libraries file of Arduino IDE by the path: ..\arduino-1.0.5\libraries.
4. Open the code directly by the path: File -> Example -> Grove_IMU_9DOF_9250
5. Upload the code. Note that you should select the correct board type and COM port.
6. You can see :

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2.0_demo.jpg)

In static state，the z-Axis output value is about 0.98g，so you can refer to this to test if your sensor can work normally.

**Orientation of Axes**

The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.Note the pin 1 identifier (•) in the figure.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/MPU9250_axes.jpg)

Orientation of Axes of Sensitivity and Polarity of Rotation for Accelerometer and Gyroscope

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/MPU9250_axes2.jpg)

Orientation of Axes of Sensitivity for Compass

Resources
--------

-   [Grove - IMU 9DOF v2.0 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
-   [MPU-9250 datashet](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/MPU-9250A_Product_Specification.pdf)
-   [MPU-9250 Register Map](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/MPU-9250A_Reg_Map.pdf)
-   [Grove - IMU 9DOF v2.0 library](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove_IMU_9DOF_9250.zip)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_IMU_9DOF_v2.0 -->
