---
name: Grove - 3-Axis Analog Accelerometer
category: Sensor
bzurl: https://seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html
oldwikiname: Grove_-_3-Axis_Analog_Accelerometer
prodimagename: Grove-3-axis_Analog_Accelerometer_photo.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/P2241478.JPG
surveyurl: https://www.research.net/r/Grove-3-Axis_Analog_Accelerometer
sku: 101020051
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/img/Grove-3-axis_Analog_Accelerometer_photo.JPG)

The ADXL335 is a small, thin, low power, complete 3-axis accelerometer with signal conditioned voltage outputs. The product measures acceleration with a minimum full-scale range of ±3 g.
The module was designed as breakout board because ADXL335's signal is analog( more ports requested ). But the board outline is grove module that you can fix it conveniently like other groves. The sensor combined 3.3 and 5V power supply, can be used in standard Arduino device and Seeeduino Stalker. The following program code includes first-order filter which can make the output smoothly if the sensor was used in robot or toy car.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)

Features
--------

-   Wide power range DC3V to 5V
-   Grove outline
-   3 axis sensing
-   Small, low-profile package: 4×4×1.45mm LFCSP
-   Low power 350µA at 3V (typical)
-   High sensitive
-   10,000 g shock survival
-   BW adjustment with a single capacitor per axis
-   RoHS/WEEE lead-free compliant

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Application Ideas
-----------------

-   Motion Sensor
-   Shock detector
-   Vibration sensor
-   Toy car
-   Robot

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Before usage
------------

We suggest you to read those knowledge before using the Gas sensor, it'll help you to learn more about Arduino and our products, and also it'll let you to use open souse hardware more easier.

-   [Getting Started with Arduino](/Getting_Started_with_Seeeduino)
-   [What is Grove system](/Grove_System)
-   [Why i need a Base shield?](/Base_Shield_V2)

After reading that you will know how to use Base shield with Grove products to work well with Arduino. Let's start it !


Getting Started
-----

The sensor's outline is breakout board, you can welding wire in the board or use jumper wire to connect the sensor.

-   The VCC connect to power source（DC5V or DC3.3V）, GND to ground, X to Arduino analog port A0, Y to A1, Z to A2.
    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg)
-   Download the [3-Axis Analog Accelerometer Library](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/res/AnalogAccelerometer.zip) and Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.
-   Regulate the sensor

The sensor is analog device, you should regulate the sensor before combining it with your system.

**Step 1:** Open the Demo: Calibration and upload it to Arduino.

**Step 2:** Open your serial monitor, make sure the sensor is connected. Follow the axis institutions printed on sensor's board. First, make sure that Z-axis direction is straight up, please type any character if you are ready. Change the sensor position, repeat the above operation to obtain X-axis and Y-axis direction are straight up .

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/img/3-Axis_Analog_Accelerometer.jpg)


**Step 3:** You can get the values as shown above. Please modify the macro definitions with these results in ADXL335.h

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/img/Analog_Accelerometer_Code.jpg)

Now the calibration has been completed.

-   Downloading the demo code: Measuring Acceleration, then open serial monitor, turn the sensor any angle, you can see the digital angle value sent from the accelerometer to the monitor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/img/3-Axis_Analog_Accelerometer1.jpg)

Resources
---------

-   [Grove - 3-Axis Analog Accelerometer Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip)

-   [3-Axis Analog Accelerometer Library](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/res/AnalogAccelerometer.zip)

-   [github repository for 3-Axis Analog Accelerometer](https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer)

-   [ADXL335 datasheet.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Analog_Accelerometer/master/res/ADXL335_datasheet.pdf)

## Project 

**Grove - Introduction in 3-Axis Digital Accelerometer** How to use a 3-axis digital accelerometer.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_3-Axis_Analog_Accelerometer -->

**Solar Panel Dual Management System (SP DMS)** This IoT prototype performs two functions: 1) Theft prevention and 2) Maintenance Indication of solar panel using LinkIt ONE and Sensors.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>