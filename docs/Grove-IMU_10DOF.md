---
title: Grove - IMU 10DOF
category: Sensor
bzurl: https://seeedstudio.com/Grove-IMU-10DOF-p-2386.html
oldwikiname: Grove_-_IMU_10DOF
prodimagename: Grove-imu-10dof.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020079 2.jpg
surveyurl: https://www.research.net/r/Grove-IMU_10DOF
sku: 101020079
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Grove-imu-10dof.JPG)

Grove - IMU 10DOF is a combination of Grove - IMU 9DOF and [Grove - Barometer Sensor (BMP180)](/Grove-Barometer_Sensor-BMP180 "Grove - Barometer Sensor (BMP180)"). This module is base on MPU-9250 and BMP180, the MPU-9250 is a 9-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a Digital Motion Processor(DMP), and BMP180 is a high precision, ultra-low power digital pressure sensors for consumer applications. This module is very suitable for the application of smartphones, tablets and wearable devices.


[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)

Specifications
-------------

-   I2C interface
-   MPU-9250 I2C address selectable
-   Low Power Consumption
-   400kHz Fast Mode I2C for communicating with all registers
-   Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250, ±500, ±1000, and ±2000°/sec
-   Digital-output 3-Axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g
-   Digital-output magnetometer with a full scale range of ±4800uT
-   Digital-output barometer with range of 300 ~ 1100hPa(+9000m ~ -500m relating to sea level)
-   Dimensions: 25.43mm x 20.35mm

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Platforms Supported
-------------------

Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Grove-imu10dof-layout.jpg)

-   1：MPU-9250 I2C address select Pad, default connected **a** and **b** address is 0x68, if connect **b** and **c** address is 0x69
-   2：MPU-9250 interrupt pin, the interrupt should be configured, available interrupt sources are: motion detection, fifo overflow, data ready, i2c master error

Usage
-----

We will provide an example here to show you how to use this sensor.

### Hardware Installation

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Imu-10dof-hardware-connection.JPG)

### Software Setup

1. Download the library from <https://github.com/Seeed-Studio/IMU_10DOF>.
2. Unzip it into the libraries file of Arduino IDE by the path.
3. Open the code directly by the path: File -> Example -> IMU_10DOF_Test.
4. Upload the code. Note that you should select the correct board type and COM port.

You can see:
![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Imu-10dof-test.png)

**Orientation of Axes**
The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Imu-10dof-dir-axes.png)

Resources
--------

-   [Grove - IMU 10DOF v1.0 eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip)
-   [Grove - IMU 10DOF v1.1 eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip)
-   [Grove - IMU 10DOF v1.0 schematics pdf file](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/Grove-IMU_10DOF_v1.0.pdf)
-   [Grove - IMU 10DOF v1.1 schematics pdf file](https://github.com/SeeedDocument/Grove-IMU_10DOF/raw/master/res/Grove%20-%20IMU%2010DOF%20v1.1.pdf)
-   [Get library from github](https://github.com/Seeed-Studio/IMU_10DOF)
-   [BMP180 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/BMP180.pdf)
-   [MPU-9250 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/MPU-9250A_Product_Specification.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF -->
