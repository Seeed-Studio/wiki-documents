---
description: Grove - 3-Axis Digitial Compass v2.0
title: Grove - 3-Axis Digitial Compass v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digitial_Compass_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg" alt="pir" width={600} height="auto" /></p>


The Grove - 3-Axis Digital Compass is a digital compass sensor based on Bosch BMM150. It allows measurement of the magnatic field in three perpendicular axes and the output can be read out over I2C and SPI interface, perfectly suitable for 3-Axis mobile applications.


This is the second generation of Grove - 3-Axis Digital Compass, comparing to the first version, this version can perfectly match the demanding requirements of all 3-Axis applications while the price is almost half of the first version, very cost effective.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

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

:::note
    If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).
:::
:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
## Platforms Supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting started


### Play with Arduino
####　Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Step 2.** Connect Grove-3-Axis_Digitial_Compass_v2.0 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

    <!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

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

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


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


**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data



<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg" alt="pir" width={600} height="auto" /></p>



**Step 6.** Within these 3 seconds， please tilt and rotate the compass back and forth on every axis, as shown in the picture below.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg" alt="pir" width={600} height="auto" /></p>

The calibration period time can be changed through the parameter timeout in the fuction **calibrate(uint16_t timeout)**.

:::note
      The compass needs to be calibrated, otherwise you will get the inaccurate data! Please make sure you have done the Step 5.
:::

**Step 7.** Finally, you will see the something like the following picture.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Heading value is in range of 0º ~ 360º, this value is for Y axis, 0º means Y axis points at North, 90º means Y axis points at West, 180º means Y axis points at South, 270º means Y points at East.
:::
Enjoy your compass!



### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - 3-axis compass|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the 3-axis compass to I2C port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg" alt="pir" width={600} height="auto" /></p>




#### Software


- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment and install the grove.py to your raspberry pi.


- **Step 2**. Excute below commands to run the code.

```
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_3_axis_compass_bmm150
```

Following is the grove_3_axis_compass_bmm150.py code.

```python
from __future__ import print_function
import time
import bmm150
import math


def main():
    device = bmm150.BMM150()  # Bus number will default to 1
    while (1):
        x, y, z = device.read_mag_data()

        heading_rads = math.atan2(x, y)

        heading_degrees = math.degrees(heading_rads)

        print("Magnetometer x: {0:.2f}".format(x), end=' ')
        print(" y: {0:.2f}".format(y), end=' ')
        print(" z: {0:.2f}".format(z), end=' ')
        print(" uT")

        print('heading(axis_Y point to): {0:.2f} degree'.format(heading_degrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()
```

:::success
    If everything goes well, you will be able to see the following result
:::
```python

pi@raspberrypi:~/grove.py/grove $ grove_3_axis_compass_bmm150
Magnetometer x: -34.12  y: 36.71  z: -21.25  uT
heading(axis_Y point to): 317.10 degree
Magnetometer x: -34.49  y: 38.20  z: -16.32  uT
heading(axis_Y point to): 317.92 degree
Magnetometer x: -34.12  y: 38.20  z: -9.87  uT
heading(axis_Y point to): 318.23 degree
Magnetometer x: -32.64  y: 38.94  z: -5.69  uT
heading(axis_Y point to): 320.03 degree
Magnetometer x: -31.52  y: 38.20  z: -2.28  uT
heading(axis_Y point to): 320.47 degree
Magnetometer x: -29.67  y: 38.20  z: 0.38  uT
heading(axis_Y point to): 322.16 degree
Magnetometer x: -26.33  y: 38.20  z: 4.55  uT
heading(axis_Y point to): 325.42 degree
^CExiting


```


You can quit this program by simply press ++ctrl+c++.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Library]**  [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[PDF]** [BST-BMM150-Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Datasheet.pdf)

- **[Zip]** [Grove-3-Axis Digital Compass v2_Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip)


## Tech Support & Product Discussion
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
