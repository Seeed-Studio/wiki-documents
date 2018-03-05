---
title: Grove - Barometer Sensor(BME280)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi&Barometer-Sensor-(BME280)-p-2653.html
oldwikiname: Grove_-_Barometer_Sensor(BME280)
prodimagename: Grove-Barometer_Sensor-BMP280-700_s.jpg
bzprodimageurl: https://statics3.seeedstudio.com/seeed/master/img/2016-06/R425Ianm2Rr93qmJQFUEwGx7.jpg
surveyurl: https://www.research.net/r/Grove-Barometer_Sensor-BME280
sku: 101020193
tags: plat_duino, plat_bbg, plat_linkit -->
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/img/Grove-Barometer_Sensor-BMP280-700_s.jpg)

Grove - Barometer Sensor (BME280) is a breakout board for Bosch BMP280 high-precision, low-power combined humidity, pressure, and temperature sensor. This module can be used to measure temperature, atmospheric pressure and humidity accurately and fast. As the atmospheric pressure changes with altitude, it can also measure approximate **altitude** of a place. It can be connected to a microcontroller with I<sup>2</sup>C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this more product easier to use.

The BME280 is an upgraded version of BMP180, and BME280 gets dramatic improvements from BMP180. BME280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added SPI bus, more measuring modes, higher measuring rate, and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features. Hence, Grove - Barometer Sensor (BME280) will be more reliable in providing precise temperature, atmospheric pressure values, humidity and approximate altitude data.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board using [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) to I2C Grove connector. Then, use the provided library and example code from GitHub. If you are using an Arduino either use Base Shield v2.0 or simply connect the VCC pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).

Typical applications: Enhancement of GPS navigation, outdoor/indoor navigation, weather forecast, or any other project that requires accurate atmospheric pressure reading.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)

Features
--------

-   Get more precise temperature, atmospheric pressure values, humidity and approximate altitude data fast.
-   Grove compatible and easy to use
-   Highly abstracted library for building projects quicker

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Specifications
--------------

| Parameter                                     | Value                                                                                             |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
| Input voltage                                 | 3.3V or 5V                                                                                        |
| I/O voltage                                   | 3.3V or 5V                                                                                        |
| Operating current                             | 0.4mA                                                                                             |
| Operating temperature                         | -40 - 85 ℃                                                                                        |
| Atmospheric pressure sensor measurement range | 300 - 1100 hPa (1 hPa= one hundred Pa) with ±1.0 hPa accuracy                                     |
| Temperature sensor measurement range          | -40 - 85 ℃, with ±1.0°C accuracy                                                                  |
| Humidity sensor measurements range            | 0% - 100% relative humidity , with ±3% accuracy                                                   |
| Measurement modes                             | Piezo & Temperature, forced or periodic                                                           |
| Chip                                          | BME280([datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-.pdf)) |
| Interface Bus                                 | SPI, I<sup>2</sup>C (use either one of them)                                                      |
| Weight                                        | 3.2 g (for breakout board), 9.3 g for whole package each piece                                    |
| Dimensions                                    | 40 (length) × 20 (width) mm                                                                       |

<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li>We will show/describe how to select interface bus soon.</li>
<li>The altitude is calculated by a combination of temperature and atmospheric pressure. No specialized components for altitude.</li></ol>
</div>

### Platforms Supported

<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li>The above list is only for battery.</li>
<li>If no version number is mentioned for a specific platform, it means this product supports all versions within this platform.</li></ol>
</div>

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg)

-   **SPI soldering pads**, a voltage monitoring circuit.
-   **Interface bus selection pads** , to select I<sup>2</sup>C bus, connect the two pads by soldering (it is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.
-   **Slave board address selection pads**, to select slave board address to avoid address collision.

    - If you have selected I2C bus, the default address for slave board is **0x76** (right-two pads are connected). If you want to use the address **0x77**, connect only the left two (disconnect right two) by soldering.
<div class="admonition tip">
<p class="admonition-title">Tip</p>
You can disconnect pads with just a sharp knife.
</div>
    - If you have selected SPI bus, the default address for slave board is **0x76** (right-two pads are connected). If you want to use the address **0x77**, disconnect all three pads.

<div class="admonition note">
<p class="admonition-title">Note</p>
Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.
</div>

### **Package includes** (main parts)

| Parts name                                                                                                                    | Quantity |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Barometer Sensor (BME280)                                                                                             | 1 piece  |
| [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

Getting Started
---------------

Now let us run some basic examples with this module.

### With Arduino

This section shows you how to build a simple project with Arduino platform. Even if you are using a different type of main control board, these instructions and source code are useful.

#### Materials required

-   Grove - Barometer Sensor (BME280) × 1
-   [Seeeduino 4.2](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html) (fully compatible with Arduino) or Arduino UNO (other models are also fine) × 1
-   Grove - Base Shield × 1 (it is optional if you are using Seeeduino which has two I2C sockets on Seeeduino v4.2)
-   USB cable (type A to type B, for Arduino) × 1 or USB cable (Type-A to micro Type-B, for Seeeduino) × 1
-   [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Connections

Connect all parts as follows: the first picture shows connection with Seeeduino, the second one demonstrates connection with Arduino UNO:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/img/Grove-Barometer_Sensor-BME_280-Demo_1200_s.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/img/Grove-Barometer_Sensor-BME_280-Demo_Arduino_UNO_1200_s.jpg)

#### Coding Work

You can find more demo sketches [here](https://github.com/Seeed-Studio/Grove_BME280/tree/master/example) and development library [here](https://github.com/Seeed-Studio/Grove_BME280).

1. A typical demo code. You can upload code to main control board with [Codebender](https://codebender.cc).

    <iframe frameborder="0" height="500" src="https://codebender.cc/embed/sketch:310854" width="50%">
</iframe>

2. Download and upload the code. If you do not know how to upload an Arduino sketch, please visit <https://www.arduino.cc/en/Guide/Windows> for Windows user or <https://www.arduino.cc/en/Guide/MacOSX> for Mac user. You can see the result as below.

<div class="admonition tip">
<p class="admonition-title">Tip</p>
If you use Seeeduino, please also select <span style="font-weight:bold">Boards</span> under <span style="font-weight:bold">Tools</span> as you upload sketches.
</div>

Resources
---------

-   [Schematic(Eagle) file](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
-   [BME280 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-.pdf)
-   [Library and example code](https://github.com/Seeed-Studio/Grove_BME280) on GitHub
-   [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor(BME280) -->
