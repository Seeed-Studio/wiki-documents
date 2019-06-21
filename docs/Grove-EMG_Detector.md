---
name: Grove - EMG Detector
category: Sensor
bzurl: https://seeedstudio.com/Grove-EMG-Detector-p-1737.html
oldwikiname: Grove_-_EMG_Detector
prodimagename: Emg_product.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020058 1.jpg
surveyurl: https://www.research.net/r/Grove-EMG_Detector
sku: 101020058
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/img/Emg_product.jpg)

EMG detector is a bridge connects human body and electrical, the sensor gathers small muscle signal then process with 2th amplify and filter, the output signal can be recognized by Arduino. You can add this signal into your control system. 

<div class="admonition danger">
<p class="admonition-title">Note</p>
The sensor cannot be used for medical purposes.
</div>

In standby mode, the output voltage is 1.5V. When detect muscle active, the output signal rise up, the maximum voltage is 3.3V. You can use this sensor in 3.3V or 5V system.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html)

Features
--------

-   Grove Compatible
-   3.5mm Connector
-   6 Disposable Surface Electrodes
-   Power supply voltage: 3.3V-5V
-   1000mm Cable Leads
-   No additional power supply

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/img/Grove_EMG_detector.jpg)

-   J2: grove interface, connect to analog I/O;
-   J1: EMG Disposable Surface Electrodes connector.
-   U1: INA331IDGKT, difference amplifier.
-   U2, U3: OPA333, Zero drift amplifier.

Demonstration
-------------

This demonstration will show you how to use Grove - LCD RGB Backlight, we need a [Seeeduino V3.0](http://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html), a [Grove - LED Bar](/Grove-LED_Bar) and [Grove - Base Shield](/Base_Shield_V2).

### Hardware Installation

Plug Grove - Base Shield to Seeeduino, then connect Grove - LED Bar to D8, connect Grove - EMG Sensor to A0.

Finally, tack the three electrodes to your muscle, and keep a distance between each electrodes.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/img/Emg_connect.jpg)

### Download Code and Upload

You can download the demo code in github, click [here](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/), then extract it to anywhere.

Then upload the code to Seeeduino, if you have any problem about code uploading, please refer to [Getting Started With Seeeduino](/Getting_Started_with_Seeeduino)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/img/Emg_ide.png)

### Move

When finish downloading demo code, it'll take about 5s to initialize, you should keep static when initializing.

You can see that when initializing, the Led Bar will go form level 10 to level 0. When Led Bar All off, you can move now.

When you are moving, you can find that the level of Led Bar will change.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/img/Grove_emg_demo_2.gif)

Resources
--------

-   [Grove-EMG Sensor v1.0 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/res/Grove-EMG_Sensor_v1.0.zip)
-   [Grove-EMG Sensor v1.1 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/res/Grove-EMG_Sensor_v1.1_Eagle.zip)
-   [Grove-EMG Sensor v1.1 schematic PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-EMG_Detector/master/res/Grove-EMG_Sensor_v1.1_SCH.pdf)
-   [Demo Code](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>