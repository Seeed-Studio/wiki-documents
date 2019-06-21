---
name: Grove - Barometer Sensor (BMP280)
category: Sensor
bzurl: https://seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html
oldwikiname: Grove_-_Barometer_Sensor_(BMP280)
prodimagename: Grove-Barometer_Sensor-BMP280-700_s.jpg
bzprodimageurl: http://statics3.seeedstudio.com/seeed/img/2016-06/oVNA7LQwPYYFnB674KEPM9w7.jpg
surveyurl: https://www.research.net/r/Grove-Barometer_Sensor-BMP280
sku: 101020192
---

![](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/raw/master/img/BMP280.jpg)

**Grove - Barometer Sensor (BMP280)** is a breakout board for Bosch BMP280 high-precision and low-power digital barometer. This module can be used to measure **temperature** and **atmospheric pressure** accurately. As the atmospheric pressure changes with altitude, it can also measure approximate **altitude** of a place. It can be connected to a microcontroller with I<sup>2</sup>C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this product easier to use.

The BMP280 is an upgraded version of BMP180. BMP280 gets dramatic improvements from BMP180. BMP280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added interface SPI, more measuring modes, higher measuring rate and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features in the library. Hence, Grove - Barometer Sensor (BMP280) would be more reliable in providing precise temperature, atmospheric pressure values and approximate altitude data.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board using [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) to I2C Grove connector. Then, use the provided library and example code from GitHub. If you are using an Arduino either use Base Shield v2.0 or simply connect the VCC pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).

Typical applications: Enhancement of GPS navigation, outdoor/indoor navigation, weather forecast, or any other project that requires an accurate atmospheric pressure reading.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)

## Features


-   Get more precise temperature, atmospheric pressure values, and approximate altitude data.
-   Grove compatible and easy to use
-   Highly abstracted library for building projects quicker

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications


| Parameter                            | Value                                                                                                                       |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Input voltage                        | 3.3V or 5V                                                                                                                  |
| I/O voltage                          | 3.3V or 5V                                                                                                                  |
| Operating current                    | 0.6mA                                                                                                                       |
| Operating temperature                | -40 - 85 ℃                                                                                                                  |
| Effective pressure measurement range | 300 - 1100 hPa (1 hPa= one hundred Pa) with ±1.0 hPa accuracy                                                               |
| Temperature measurement accuracy     | ±1.0°C                                                                                                                      |
| Measurement modes                    | Piezo & Temperature, forced or periodic                                                                                     |
| Chip                                 | BMP280 ([datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/master/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| Possible sampling rate               | 182 Hz (typical)                                                                                                            |
| Interface Bus                        | SPI, I<sup>2</sup>C (use either one of them)                                                                                |
| Weight                               | 3 g (for breakout board)                                                                                                    |
| Dimensions                           | 40 (width) × 20 (depth) mm                                                                                                  |
| I2C Address | 0x77()default or 0x76 |

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p> 1. We will show/describe how to select interface bus soon.</p>
<p> 2. The altitude is calculated by a combination of temperature and atmospheric pressure. No specialized components for altitude.</p>
</div>

## Platforms supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

## Hardware Overview

![](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/raw/master/img/dimensions.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/master/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg)

-   **SPI soldering pads**, a voltage monitoring circuit.
-   **Interface bus selection pads** , to select I<sup>2</sup>C bus, connect the two pads by soldering (this is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.
-   **Slave board address selection pads**, to select slave board address to avoid address collision.

If you have selected I2C bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, connect only left two (disconnect right two) by soldering.

**Tips:** You can disconnect pads with just a sharp knife.

If you have selected SPI bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, disconnect all three pads.

<div class="admonition note">
<p class="admonition-title">Note</p>
Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.
</div>

## Package includes (main parts)

| Parts name                                                                                                                    | Quantity |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Barometer Sensor (BMP280)                                                                                             | 1 piece  |
| [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

## Getting Started


### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

- **Step 2.** Connect Grove-Barometer_Sensor-BMP280 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![with_ardu](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/raw/master/img/with_ardu.jpg)


!!!Note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.

<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |



#### Software

**Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_BMP280) from Github.

**Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->bmp280_example->bmp280_example

Here is the code:

```c++
/*
 * bmp280_example.ino
 * Example sketch for BMP280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor, CHN
 * Create Time:
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");//add a line between output of different times.

  delay(1000);
}
```


**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude.


## Resources

- **[Eagle]** [Grove-Barometer Sensor BMP280 Schematic](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/raw/master/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[Datasheet]** [BMP280 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP280/master/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[Library]** [Grove_BMP280 Library](https://github.com/Seeed-Studio/Grove_BMP280) on GitHub
- **[References]**  [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Project

**Intelligent alarm system made with BBG ( IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Monitoring System for Smart Crops** Design and build a system to monitor the status of your crops using the Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>