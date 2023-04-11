---
description: Grove - 3-Axis Digital Gyro
title: Grove - 3-Axis Digital Gyro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Gyro
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 3-Axis Digital Gyro module based on ITG 3200. It is the world’s first single-chip, digital-output, 3-axis MEMS motion processing gyro optimised for gaming, 3D mice, and motion-based remote control applications for Internet connected Digital TVs and Set Top Boxes. The ITG-3200 features three 16-bit analog-to-digital converters (ADCs) for digitising the gyro outputs, a user-selectable internal low-pass filter bandwidth, and a Fast-Mode I2C (400kHz) interface.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

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

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::
Demonstration
-------------

This demo will show you how to get data from this digital gyro, the data is in the unit of rad/s.

Here we need a Grove - 3-Axis Digital Gyro and a Seeeduino V3.0.

### Hardware Installation

Hardware installation is very easy, because there's an I2C Grove in Seeeduino,

So, what we need to do is connect it to I2C Grove via a Grove cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG" alt="pir" width={600} height="auto" /></p>


### Download Code and Upload

You can download the library in github, click [here](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/), then extract it to libraries folder of Arduino.

Then open File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro, you can open the demo code.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg" alt="pir" width={600} height="auto" /></p>


<!-- Click Upload to upload the code, if you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help. -->



### Check the result

Now, you can open the serial monitor to check the result.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg" alt="pir" width={600} height="auto" /></p>

Reference
---------

The diagram below shows the orientations of the 3 axes. You can use it to understand the physical meanings of the result.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Datasheet of ITG-3200.](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf)
-   [Grove - 3-Axis Digital Gyro Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [Digital Gyro Library](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
