---
name: Grove - IMU 10DOF v2.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html
oldwikiname:
prodimagename: Grove-imu-10dof-v2.0.JPG
bzprodimageurl: https://statics3.seeedstudio.com/seeed/img/2016-08/mr7fhEvszUFQsHT2SjUSVb29.jpg
surveyurl: https://www.research.net/r/Grove-IMU_10DOF_v2
sku: 101020252
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/Grove-imu-10dof-v2.0.jpg)

Grove-IMU 10DOF v2.0 is a upgrade version of Grove-IMU-10DOF， which replace BMP180 with BMP280. As the successor to the widely adopted BMP180, the BMP280 delivers high performance in all applications that require precise pressure measurement. This module is base on MPU-9250 and BMP280, the MPU-9250 is a 9-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a Digital Motion Processor(DMP), and BMP280 is a high precision, ultra-low power digital pressure sensors for consumer applications. This module is very suitable for the application of smartphones, tablets and wearable devices.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)

## Version

|  Product Version       | Changes                                                                                                                                                                                                                                      | Released Date  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| Grove - IMU 10DOF      | Built on [MPU-9250 ](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/MPU-9250A_Product_Specification.pdf ) and [BMP180 ](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/BMP180.pdf )  | March 2015     |
| Grove - IMU 10DOF v2.0 | Upgrade BMP180 sensor to [BMP280 ](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/master/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf ) from BOSCH                                         | September 2016 |


## Specifications


-   I2C Grove interface, include GND, VCC, SDA, SCL.
-   MPU-9250 I2C address selectable
-   Low Power Consumption
-   400kHz Fast Mode I2C for communicating with all registers
-   Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250, ±500, ±1000, and ±2000°/sec
-   Digital-output 3-Axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g
-   Digital-output magnetometer with a full scale range of ±4800uT
-   Digital-output barometer with range of 300 ~ 1100hPa(+9000m ~ -500m relating to sea level)
-   Dimensions: 25.43mm x 20.35mm
- I2C Address: default connected a and b address from I2C select pad is 0x68, if connect b and c address is 0x69

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Hardware Overview

![](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/dimensions.jpg)


-  MPU-9250 I2C address select Pad, default connected **a** and **b** address is 0x68, if connect **b** and **c** address is 0x69
-  MPU-9250 interrupt pin, the interrupt should be configured, available interrupt sources are: motion detection, fifo overflow, data ready, i2c master error
- Orientation of Axes:
The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/img/Imu-10dof-dir-axes.png)
- The BMP280 is an absolute barometric pressure sensor especially designed for mobile applications. The sensor module is housed in an extremely compact 8-pin metal-lid LGA package with a footprint of only 2.0 × 2.5 mm2 and 0.95 mm package height. Its small dimensions and its low power consumption of 2.7 μA @1Hz allow the implementation in battery driven devices such as mobile phones, GPS modules or watches.



## Getting started


### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/Grove-imu-10dof-v2.0_s.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)|

- **Step 2.** Connect Grove - IMU 10DOF v2.0 to **I2C** port of base shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--link-->
![with_ardu](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/with_ardu.jpg)



#### Software

- **Step 1.** Download the [Grove-IMU_10DOF_v2 library.](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
- **Step 2.** Please follow [how to install an arduino library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install library.
- **Step 3.** Restart the Arduino IDE. Open “ IMM_10DOF_Test example via the path: **File -> Example ->GROVE_IMU_10DOF_V2-master-> IMU_10DOF_V2_Test**.

![](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/library%20example.jpg)
- **Step 4.** Upload the code. Note that we should select the correct board type and COM port.
We can see:

![](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/img/ardu_result.jpg)


## Resources


-   **[Eagle]** [Grove - IMU 10DOF v2 eagle file](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/res/Grove%20-%20IMU%2010DOF%20v2.0.zip)
-   **[PDF]** [Grove - IMU 10DOF v2 schematics pdf file](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/res/Grove%20-%20IMU%2010DOF%20v2.0%20Sch.pdf)
-   **[PDF]** [Grove - IMU 10DOF v2 PCB pdf file](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/res/Grove%20-%20IMU%2010DOF%20v2.0%20PCB.pdf)
-   **[Library]** [Get library from github](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
-   **[Dtasheet]** [BMP280 datasheet](https://github.com/SeeedDocument/Grove-IMU_10DOF_v2.0/raw/master/res/BMP280-Datasheet.pdf)
-   **[Dtasheet]** [MPU-9250 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_10DOF/master/res/MPU-9250A_Product_Specification.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF -->

## Projects

**Motorcycle Data App**: Learn from your ride like a pro! Motorcycle race teams have used IMU data for years, with RideData+Arduino it's easy for you to do the same.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>