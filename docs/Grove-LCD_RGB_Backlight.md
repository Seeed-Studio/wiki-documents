---
title: Grove - LCD RGB Backlight
category: Display
bzurl: https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html
oldwikiname: Grove_-_LCD_RGB_Backlight
prodimagename: intro.jpg
surveyurl: https://www.surveymonkey.com/r/LCD_Backlight
sku: 104030001
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/intro.jpg)
Done with tedious mono color backlight? This Grove enables you to set the color to whatever you like via
the simple and concise Grove interface. It takes I2C as communication method with your microcontroller.
So number of pins required for data exchange and backlight control shrinks from ~10 to 2, relieving IOs for
other challenging tasks. Besides, Grove - LCD RGB Backlight supports user-defined characters. Want to get
a love heart or some other foreign characters? Just take advantage of this feature and design it!
This product is a replacement of Grove - Serial LCD. If you are looking for primitive 16x2 LCD modules, we
have green yellow backlight version and blue backlight version on sale also.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](http://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)

!!!Note
    This document work for Version 1.0, 2.0 and 4.0.


## Features

* RGB Backlight
* I2C communication
* Built-in English fonts
* 16x2 LCD

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Specification

|Intem|Value|
|------|----------|
| Input Voltage|5V|
| Operating Current | <60mA |
|CGROM | 10880 bit |
| CGRAM | 64x8 bit |

## Application Ideas

* Human Machine Interface
* Smart House
* Sensor Hub

Here are some projects for your reference.

|Edison Wi-Fi Address|WiFi Enabled Greenhouse|Grove Lucky Dumpling|
|------------------------|-------------------|--------------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project3.jpg)|
|[Make it Now!](http://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/)|[Make it Now!](http://www.instructables.com/id/Arduino-Grove-Greenhouse/)|[Make it Now!](http://www.instructables.com/id/Grove-Lucky-Dumpling/)|


|Toothbrushing Instructor|LinkIt ONE Pager|LinkIt ONE IoT Demo|
|------------------------|-------------------|--------------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project5.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/project6.jpg)|
|[Make it Now!](http://www.instructables.com/id/Toothbrushing-Instructor/)|[Make it Now!](http://www.instructables.com/id/LinkIt-ONE-Pager/)|[Make it Now!](http://www.seeed.cc/project_detail.html?id=78)|


## Getting Started

This getting started will show you how to use Grove - LCD RGB Backlight, we need a [Seeeduino](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) as well.

!!!Note
    This demo is under Win10 and Arduino IDE1.6.9.

### STEP1. Download Arduino Library

You need to download the library and install to your Arduino IDE.

Please follow [how to install an arduino library](http://wiki.seeed.cc/How_to_install_Arduino_Library/) procedures to install LCD RGB Backlight library.

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/library.png)](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

### STEP2. Hardware Installation

Hardware installation is very easy, because there's an I2C Grove in Seeeduino, so what we need to do is
to connect it to I2C Grove via a Grove cable.

!!!Note
    Please select 5v via the toggle switch on Seeeduino V4.2, otherwise the Grove - LCD RGB Backlight may not function properly.

![// image 1](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/1.png)

### STEP3. Download Code and Upload

You can download the demo code in Github, click [here](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight), then extract it to anywhere.

If you have some problem with this step, please refer to [Getting Start with Seeeduino](http://wiki.seeed.cc/) there is a Hello World example in the library, open it, and upload to Seeeduino V4.2. Then you can see "Hello world" on the first row, and second row will print the number of second since reset.

![// image 1](https://raw.githubusercontent.com/SeeedDocument/Grove_LCD_RGB_Backlight/master/images/2.png)

### STEP4. Change Color of Backlight

One of Grove - LCD RGB Backlight's most important feature is: you can change the color backlight, and it's
a very simple thing, just use the following function:

    void setRGB(int r, int g, int b);

Then let's try a Red backlight.
Modify the code about color into:

    const int colorR = 255;
    const int colorG = 0;
    const int colorB = 0;

Upload the code again, woo, see the backlight turn to Red? Then why not try another color? Whatever you like.


## Resources

* [Software Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)
* [Github page for the Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight)
* [Github page for this document](https://github.com/SeeedDocument/Grove_LCD_RGB_Backlight)
