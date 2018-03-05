---
title: Grove - Haptic Motor
category: Actuator
bzurl: https://seeedstudio.com/Grove - Haptic Motor-p-2546.html
oldwikiname: Grove_-_Haptic_Motor
prodimagename: Grove_Haptic_Motor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/105020011 1.jpg
surveyurl: https://www.research.net/r/Grove-Haptic_Motor
sku: 105020011
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor.jpg)

Grove - Haptic motor is a grove module integrated with [DRV2605L](http://www.ti.com/product/DRV2605L) which will give your project more feelings. This motor is specially designed for various effects, such as ramping the vibration level up and down, for wearables and other IoT devices. Right now we have developed an easy-to-use library which simulate 123 kinds in total of vibrating modes and this will make your prototyping quicker. Also, you can develop more advanced functions with driver DRV2605L which will improve actuator performance in terms of acceleration consistency, start time, and break time and is accessible through a shared I2C compatible bus or PWM input signal.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)

Features
--------

-   More vibration effects.
-   Quicken your project prototyping process.
-   Easy-to-use library with 123 kinds of vibrating modes.
-   Powerful driver to implanting more advanced functions.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Specifications
-------------

| Parameter                      | Value          |
|--------------------------------|----------------|
| Operating voltage              | 3.3~5.0 V      |
| Ripples (at maximum power)     | 50~100 mV      |
| Max power                      | 750 mW         |
| I2C speed                      | 100 kHz        |
| Vibration effects              | 123 types      |
| Driver                         | DRV2605L       |
| Port                           | I<sup>2</sup>C |
| Default I<sup>2</sup>C Address | 0x5A           |

Platforms Supported
-------------------

Application ideas
-----------------

-   Mobile phone, tablets.
-   Wearable devices.
-   Remote controls, touch-enabled devices.
-   Industrial human-machine interfaces.

Hardware Overview
-----------------

**Front view:**
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor.jpg)

**Rear view:**
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor_back.jpg)

Getting started
---------------

<div class="admonition note">
<p class="admonition-title">Note</p>
This section only shows you how to build a basic development environment. You can build a development environment for your project with following guides:
</div>

### Build IDE

Refer to following guides to building an appropriate IDE:

[Getting Started on Windows](/Seeeduino_v4.2#Getting_Started_on_Windows)

[Getting Started on Mac OS X](/Seeeduino_v4.2#Getting_Started_on_Mac_OS_X)

<div class="admonition note">
<p class="admonition-title">Note</p>
Arduino board will also be fine if you happen to have no Seeeduino board because <a href="/Seeeduino_v4.2">Seeeduino</a> is compatible with Arduino.
</div>

### Hardware connection

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p>a. Make sure you have built a development environment successful through previous steps.</p>
<p>b.Make sure your board has selected Arduino Uno and COM port right chosen. Connect to I<sup>2</sup>C interface on Seeeduino board and Haptic motor with grove wire.</p>
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_haptic_motor_connection.jpg)

### Download sample code

1.  You can download [sample code](https://github.com/Seeed-Studio/Grove_Haptic_Motor) and library or header files.
2.  Click a button named "Download Zip" at [Github](https://github.com/Seeed-Studio/Grove_Haptic_Motor).
3.  Decompress the downloaded ZIP file.
4.  Remove the "-master" twice in decompressed file name.
5.  Copy the folder Grove_Haptic_Motor into your library folder (In default, it is same with Sketchbook Location which can be found by clicking File &gt; Preference).Under Windows, it will likely be called "My Documents\Arduino\libraries". For Mac users, it will likely be called "Documents/Arduino/libraries". On Linux, it will be the "libraries" folder in your sketchbook.
6.  Copy file **drv2605.cpp** and file **drv2605.h** to its parent directory.

### Load sample code

<div class="admonition note">
<p class="admonition-title">Note</p>
In this case we use <a href="/Seeeduino_v4.2">Seeeduino 4.2</a> as experiment board which is a compatible board with Arduino.
</div>

<div class="admonition tip">
<p class="admonition-title">Tip</p>
You can use <a href="/Base_Shield_V2">Base shield v2</a> as expansion board which will make your connection of modules simple.
</div>


<div class="admonition warning">
<p class="admonition-title">Warning</p>
Never touch driver DRV2605L which may cause damage to it when it is powered.
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor_cautions.png)

1.  Make sure haptic motor and main control board well connected.
2.  Load your sample code drv2605.ino under example file of decompressed file.
3.  Flash your code to your main control board by click Project->Upload(CTRL+U).
4.  After uploading, you now get haptic motor vibrate at a smooth style.

Resources
---------

-   Schematic files in [Eagle format](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/res/Grove_Haptic_Motor_v0.9_Eagle.zip) and [PDF format](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/res/Grove_Haptic_Motor_v0.9_SCH.pdf).
-   [More about drive circuit DRV2605L](http://www.ti.com/product/DRV2605L).
-   [Git repository](https://github.com/Seeed-Studio/Grove_Haptic_Motor)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Haptic_Motor -->
