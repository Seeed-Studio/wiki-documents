---
name: Grove - I2C Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html
oldwikiname: Grove_-_I2C_Touch_Sensor
prodimagename: Grove-I2C-Touch-Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/P3202380.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Touch_Sensor
sku: 101020047
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/img/Grove-I2C-Touch-Sensor.jpg)

The I2C Touch Sensor is based on the Proximity Capacitive Touch Sensor Controller from FreeScale - MPR121. It detects the touch or proximity of human fingers. This sensor includes a Touch Sensor controller and 4 finger feelers. One can insert the connectors of feelers into base of Sensor controller, and start sensing the touch. 

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-I2C-Touch-Sensor-p-840.html)

Specifications
-------------

| Parameter              | Value/Range                         |
|------------------------|-------------------------------------|
| Operating voltage      | 3~5.5V                              |
| Standby Mode Current   | 2μA                                 |
| Touch Channels         | 12 (Including 4 with Touch feelers) |
| Communicating Protocol | I2C                                 |
| I2C Address            | 0x5A                     |

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
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/img/DSC_0030.png)

There are 12 electrodes CH0-CH11. CH0-CH3 are connected to 4 Touch feelers.

The CH4-CH11 are for customer expanding the function. If you need more, you can make the feelers by yourself.

The wires of feelers are twisted to reduce the impact of environment. The black(ground) wire can be cut off if high sensitivity is needed.

The INT pin has to be led out if customers want to use the interrupt pin of MPR121.

Getting Started
---------------

### **Grove - Help**

Following documents help in getting the user started with Grove.

-   [Preface - Getting Started](http://www.seeedstudio.com/document/pdf/Preface.pdf)
-   [to Grove](http://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

<div class="admonition note">
<p class="admonition-title">Note</p>
Since each electrode needs to be auto-configured by the MPR121 during power up and there is no power reset on the touch sensor controller, everytime you insert or remove a feeler, you need to reset the power of Seeeduino.
</div>

The feelers can also feel the human being fingers with something between, that's to say, you do not need to touch the feelers with your fingers indeed.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/img/DSC_0026.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/img/DSC_0027.jpg)

With a paperboard about 3 mm thick, the feeler can feel the touch of fingers, makes it a good solution for many applications.

### Play with Codecraft

#### Hardware

**Step 1.** Using a Grove cable connect Grove - I2C Touch Sensor to Seeeduino's I2C port. If you are using Arduino, please take advantage of a Base Shield.

**Step 2.** Link Seeedino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/img/cc_I2C_Touch_Sensor.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will see which channel you touched in the Serial Monitor. 

Resources
---------

-   [I2C Touch Sensor Library](https://github.com/Seeed-Studio/Grove_I2C_Touch_Sensor)
-   [I2C Touch Sensor eagle files(v1.1).zip](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip)
-   [I2C Touch Sensor PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/res/Grove-I2C_Color_sensor_v1.2.pdf)
-   [How to detect finger touch?](/How_to_detect_finger_touch?)
-   [I2C Touch Sensor Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/res/Freescale_Semiconductor;MPR121QR2.pdf)
-   [Codecraft CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-I2C_Touch_Sensor/master/res/Grove_I2C_Touch_Sensor_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_I2C_Touch_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>