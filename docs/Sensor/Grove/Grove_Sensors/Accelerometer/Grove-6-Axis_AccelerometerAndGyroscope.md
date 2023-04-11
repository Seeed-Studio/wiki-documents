---
description: Grove - 6-Axis Accelerometer&amp;Gyroscope
title: Grove - 6-Axis Accelerometer&amp;Gyroscope
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-6-Axis_AccelerometerAndGyroscope
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 6-Axis Accelerometer&Gyroscope is a cost-effective Grove interfaced and integrated sensor combination of 3-axis digital accelerometer and 3-axis digital gyroscope.

With a serious low power consumption digital chip LSM6DS3([datasheet](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)) and power supply regulator inside, it features high sensitivity, green tech and low noise interference. It can be configured to different sensitivity levels of acceleration and different angular rate measurement range. Provided with detailed SDK, it can make the prototyping process quicker and easier.

This product can be used for different applications for tilt, motion, and tap sensings, such as robotics, IoT devices and consumer electronic devices.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Gyroscope-p-2606.html)

Features
--------

-   Grove interfaced and cost-effective.
-   Digital-output for 6 DOF motion data.
-   ±2/±4/±8/±16 g full scale leaner acceleration sensing range for various environment.
-   ±125, ±245, ±500, ±1000, ±2000 degree per seconds(dps) for angular rate measurement range make it versatile.
-   Detailed SDK for easier programming.
-   Regulated power supply for reliable data to be collected.
-   Programmed interrupts for different event.
-   8 kB data buffering.

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Application ideas
-----------------

-   Robotics
-   Consumer-level aircraft
-   Computer input devices
-   Wearable devices.
-   IoT things

Specifications
--------------

For detailed information please refer to [datasheet](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf).

| Parameter                             | Value                                                                                |
|---------------------------------------|--------------------------------------------------------------------------------------|
| Analog supply voltage:                | 5V/3.3V(DC)                                                                          |
| Power consumption:                    | 0.9 mA in combo normal mode and 1.25 mA in combo high-performance mode up to 1.6 kHz |
| Linear acceleration measurement range | ±2/±4/±8/±16 g full scale (typical value)                                            |
| Angular rate measurement range        | ±125, ±245, ±500, ±1000, ±2000 dps(typical value)                                    |
| Linear acceleration sensitivity       | 0.061(FS = ±2), 0.122(FS = ±4), 0.244(FS = ±8), 0.488(FS = ±16) mg/LSB               |
| Angular rate sensitivity              | 4.375(FS = ±125), 8.75(FS = ±245), 17.50(FS = ±500), 35(FS = ±1000), 70(FS = ±2000)  |

### Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::
Hardware Overview
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

**Grove Port**   
Connect main control board such as Seeeduino board with driver board.

**LSM6DS3**   
Main MCU.

### **Parts list**

| Parts name                             | Quantity |
|----------------------------------------|----------|
| Grove - 6-Axis Accelerometer&Gyroscope | 1PC      |
| Grove wire                             | 1PC      |

Get started
-----------

### **Material required**

-   Seeeduino * 1

-   Grove - Base Shield v2

### **Preparations**

Refer to following guides to build an appropriate IDE:

<div class="admonition note">
<p class="admonition-title">Note</p>
We have chosen Seeeduino and it is compatible with Arduino in this case. You can also use Arduino board instead.
</div>

- Getting Started on Windows

- Getting Started on Mac OS X

### **Hardware connections**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

<div classname="admonition note">
  <p classname="admonition-title">Note</p>
  Plug Grove - 6-Axis Accelerometer&amp;Gyroscope to I<sup>2</sup>C interface on Grove - Base shield. Connect power supply with USB cable.
</div>




### **A little demo**

Download the [library](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3) for Grove - 6-Axis Accelerometer&Gyroscope. Refer to Guide to use demos downloaded from Seeed's Github for quicker flashing your code to main controller board. There are three demo examples in total in sub directory ***examples***.


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



# Resources
---------

- **[Eagle]** [Grove - 6-Axis Accelerometer&Gyroscopev 1.0 Eagle file](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip)
-  **[Library]** [Grove-6-Axis_AccelerometerAndGyroscope](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)
-  **[Datasheet]** [Datasheet of LSM6DS3](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)

## Project

**Plug 'n Play Remote Control Sailboat**

<iframe frameBorder="{0}" height="327.5" scrolling="no" src="https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed" width="{350}">
</iframe>



<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Gyroscope -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
