---
name: Grove - Q Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Q-Touch-Sensor-p-1854.html
oldwikiname: Grove_-_Q_Touch_Sensor
prodimagename: Grove-Q_Touch_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Grove-Q Touch Sensor.jpg
surveyurl: https://www.research.net/r/Grove-Q_Touch_Sensor
sku: 101020069
tags: grove_i2c, io_3v3, io_5v, plat_duino
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Grove-Q_Touch_Sensor.jpg)

The Q Touch Sensor is a high sensitivity and high noise immunity touch input device. It is based on Atmel AT42QT1070. The AT42QT1070 modulates its bursts in a spread-spectrum fashion in order to heavily suppress the effects of external noise, and to suppress RF emissions. The QT1070 uses a dual-pulse method of acquisition. This provides greater noise immunity and eliminates the need for external sampling capacitors, allowing touch sensing using a single pin.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Q-Touch-Sensor-p-1854.html)

Specifications
--------------

-   Operating Voltage: 3 ~ 5.5V
-   Operating Current @3.3V: 1mA
-   Touch Keys: 7 Keys ; key0, key1, key2 are on the Grove PCB bottom side
-   Communicating Protocol: I2C
-   I2C Address: 0x1B

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Hardware Overview
------------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Grove-Q_Touch.png)

① - On board touch key0

② - On board touch key1

③ - On board touch key2

④ - Touch key0 ~ key6 breakout

- The recommended range for key capacitance Cx is 1 pF – 30 pF. Larger values of Cx will give reduced sensitivity.

⑤ - GND

⑥ - Grove interface

Usage
-----

Demo: Who touched my lychee?

Have you ever heard of a lychee? Yes, it's a very famous fruit of south of China. If you have ever tasted, will love it.

Now let us begin our demo. When you touch the hit pan (lychee),the LED will turn on.

### Hardware Connections

1. Connect the I2C of Grove-Q Touch Sensor to the I2C socket on the Grove Base Shield.
2. Connect the Grove-LED to D3 (Digital Pin 3) on the Grove Base Shield.
3. Connect Key0 (marked K0) on the Grove-Q Touch sensor to a Lychee (Alternatively, you could touch the open end of the cable with a finger while testing).

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Grove-Q_Touch_Demo1.JPG)

### Software Part

1. Download the [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch).
2. Unzip it into the libraries folder of Arduino IDE, for example the path could be ..\arduino-1.0.5\libraries.

#### **Example 1**

a. Open the example via Arduino Menu 'File -> Examples -> Seeed_QTouch-master -> Grove_QTouch_demoCode_v_1_0'.

b. Upload the code. Note that you should select the correct board type and COM port.

c. On touching the Lychee, the LED would glow, as can be seen below.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Grove-Q_Touch_Demo2.JPG)

#### **Example 2**

a. Open the example via Arduino Menu 'File -> Examples -> Seeed_QTouch-master -> isTouch'.

b. Upload the code.

c. Open the Serial Monitor.

d. Touch and release the Lychee; The Serial Monitor would display the duration of touch as in the screenshot below.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Screenshot--QTouch.png)

You can try the [Codebender](http://www.codebender.cc) widget below to upload the code as well.

<iframe frameborder="0" height="510" src="https://codebender.cc/embed/example/Seeed_QTouch/isTouch" width="800"></iframe>

Please open the Serial monitor below to view data.

<iframe frameborder="0" height="300" src="https://codebender.cc/embed/serialmonitor" width="800"></iframe>

#### **Example 3**

a. Open the example via Arduino Menu 'File -> Examples -> Seeed_QTouch-master -> getTouchNumber'.

b. Upload the code.

c. Open the Serial Monitor.

d. On touching the Lychee, the Serial Monitor would display the Key that is connected, as in the screenshot below. One can connect the fruit to any other Key and verify.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/img/Screenshot--getTouchNumber.png)

You can try the [Codebender](http://www.codebender.cc) widget below to upload the code as well.

<iframe frameborder="0" height="510" src="https://codebender.cc/embed/example/Seeed_QTouch/getTouchNumber" width="80%"></iframe>

Please open the Serial monitor below to view data.

<iframe frameborder="0" height="300" src="https://codebender.cc/embed/serialmonitor" width="100%"></iframe>

Resources
--------

-   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)
-   [Schematic pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/res/Grove-Q_Touch_Sensor_v1.0.pdf)
-   [Eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/res/Grove_Q－Touch_Sensor_v1.0_sch_pcb.zip)
-   [AT42QT107 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Q_Touch_Sensor/master/res/AT42QT1070-MMH.pdf)
-   [How to detect finger touch?](/How_to_detect_finger_touch?)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Q_Touch_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>