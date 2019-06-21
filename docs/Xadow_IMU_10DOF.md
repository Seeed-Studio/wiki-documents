---
name: Xadow - IMU 10DOF
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html
oldwikiname: Xadow - IMU 10DOF
prodimagename: Xadow-imu-10dof-shao.JPG
surveyurl: https://www.research.net/r/xadow_IMU_10DOF
sku:  101040004
---

![](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/img/Xadow-imu-10dof-shao.JPG)

Xadow - IMU 10DOF is a combination of [Xadow - IMU 9DOF](http://wiki.seeedstudio.com/Xadow_IMU_9DOF) and [Xadow - Barometer BMP180](http://wiki.seeedstudio.com/Xadow_Barometer_BMP180).This module is base on MPU-9250 and BMP180, the MPU-9250 is a 9-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a Digital Motion Processor(DMP), and BMP180 is a high precision,ultra-low power digital pressure sensors for consumer applications.This module is very suitable for the application of smartphones, tablets and wearable devices

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html)

## Specifications
---
- I2C interface
- MPU-9250 I2C address selectable
- Low Power Consumption
- 400kHz Fast Mode I2C for communicating with all registers
- Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250, ±500, ±1000, and ±2000°/sec
- Digital-output 3-Axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g
- Digital-output magnetometer with a full scale range of ±4800uT
- Digital-output barometer with range of 300 ~ 1100hPa(+9000m ~ -500m relating to sea level)
- Dimensions: 25.43mm x 20.35mm

## Interface Function
---
![](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/img/Xadow-IMU_10DOF_Interface.png)

- ①：MPU-9250 I2C address select Pad(default 0x68)
- ②：12P FPC bottom contact

## Usage
---
We will provide an example here to show you how to use this sensor.

**Hardware Installation**

![](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/img/Xadow-IMU_10DOF_installation.png)

!!!Note
    When connecting Xadow - IMU 10DOF to Xadow - Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

**Software Part**
1. Download the library from [https://github.com/Seeed-Studio/IMU_10DOF](https://github.com/Seeed-Studio/IMU_10DOF)
2. Unzip it into the libraries file of Arduino IDE by the path
2. Open the code directly by the path: **File -> Example -> IMU_10DOF_Test**
2. Upload the code. Note that you should select the correct board type and COM port.

You can see :

![](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/img/Imu-10dof-test.png)

**Orientation of Axes**

The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.

![](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/img/Imu-10dof-dir-axes.png)


## Resource
---
- [Xadow - IMU 10DOF v1.0 eagle file](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip)
- [IMU 10DOF library](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/res/IMU_10DOF_Library.zip)
- [BMP180 datasheet](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/res/BMP180.pdf)
- [MPU-9250 datasheet](https://github.com/SeeedDocument/Xadow_IMU_10DOF/raw/master/res/MPU-9250A_Product_Specification.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>