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


| Item                         | Valnue                                |
|------------------------------|---------------------------------------|
| Working Voltage              | 3.3V / 5V                             |
| Magnetic field range typical | ±1300μT(x, y-axis),  ±2500μT(z-axis)  |
| Magnetic field resolution    | 0.3μT                                 |
| Output Degree                | 0º ~ 360º                             |
| Interface                    | I2C                                   |
| Working Temperature          | -40℃ to +85 ℃                        |
| Dimensions                   | 20mm x 20mm x 15mm                    |
|I2C Address|0x13|

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting started


### Play with Arduino
####　Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Step 2.** Connect Grove-3-Axis_Digitial_Compass_v2.0 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

    <!--link-->
![with_ardu](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/img/with_ardu.jpg)

!!!Note
    	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino_v4 | Grove-3-Axis_Digitial_Compass_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |





<div class="admonition warning">
<p class="admonition-title">Caution</p>
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><B>here</B></a> to buy
</div>



#### Software
**Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150) from Github.

**Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path: **File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master->compass**


Here is the code
```c
/**
 * This example
*/

#include <Arduino.h>
#include <Wire.h>
// libraries
#include "bmm150.h"
#include "bmm150_defs.h"

BMM150 bmm = BMM150();

void setup()
{
  Serial.begin(9600);

  if(bmm.initialize() == BMM150_E_ID_NOT_CONFORM) {
    Serial.println("Chip ID can not read!");
    while(1);
  } else {
    Serial.println("Initialize done!");
  }

}

void loop()
{
  bmm150_mag_data value;
  bmm.read_mag_data();

  value.x = bmm.raw_mag_data.raw_datax;
  value.y = bmm.raw_mag_data.raw_datay;
  value.z = bmm.raw_mag_data.raw_dataz;

  float xyHeading = atan2(value.x, value.y);
  float zxHeading = atan2(value.z, value.x);
  float heading = xyHeading;

  if(heading < 0)
    heading += 2*PI;
  if(heading > 2*PI)
    heading -= 2*PI;
  float headingDegrees = heading * 180/M_PI;
  float xyHeadingDegrees = xyHeading * 180 / M_PI;
  float zxHeadingDegrees = zxHeading * 180 / M_PI;

  Serial.print("Heading: ");
  Serial.println(headingDegrees);

  delay(100);
}
```


**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data



![](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/img/ardu_serial.jpg)


**Step 6.** Within these 3 seconds， please tilt and rotate the compass back and forth on every axis, as shown in the picture below.

![](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/img/calibrate.jpg)

The calibration period time can be changed through the parameter timeout in the fuction **calibrate(uint16_t timeout)**.

!!!Note
      The compass needs to be calibrated, otherwise you will get the inaccurate data! Please make sure you have done the Step 5.


**Step 7.** Finally, you will see the something like the following picture.

![](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/img/ardu_serial2.jpg)

!!!Tip
    Heading value is in range of 0º ~ 360º, this value is for Y axis, 0º means Y axis points at North, 90º means Y axis points at West, 180º means Y axis points at South, 270º means Y points at East.

Enjoy your compass!



## Resources

- **[Library]**  [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[PDF]** [BST-BMM150-Datasheet](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/res/Datasheet.pdf)

- **[Zip]** [Grove-3-Axis Digital Compass v2_Eagle File](https://github.com/SeeedDocument/Grove-3-Axis_Digitial_Compass_v2.0/raw/master/res/Eagle File.zip)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc.
