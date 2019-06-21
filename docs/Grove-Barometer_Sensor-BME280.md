---
name: Grove - Temp&Humi&Barometer Sensor (BME280)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi&Barometer-Sensor-(BME280)-p-2653.html
oldwikiname: Grove_-_Barometer_Sensor(BME280)
prodimagename: Grove-Barometer_Sensor-BMP280-700_s.jpg
bzprodimageurl: https://statics3.seeedstudio.com/seeed/master/img/2016-06/R425Ianm2Rr93qmJQFUEwGx7.jpg
surveyurl: https://www.research.net/r/Grove-Barometer_Sensor-BME280
sku: 101020193
tags: plat_duino, plat_bbg, plat_linkit
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

![](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BME280/raw/master/img/BME280.jpg)

Grove - Temp&Humi&Barometer Sensor (BME280) is a breakout board for Bosch BMP280 high-precision, low-power combined humidity, pressure, and temperature sensor. This module can be used to measure temperature, atmospheric pressure and humidity accurately and fast. As the atmospheric pressure changes with altitude, it can also measure approximate **altitude** of a place. It can be connected to a microcontroller with I<sup>2</sup>C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this more product easier to use.

The BME280 is an upgraded version of BMP180, and BME280 gets dramatic improvements from BMP180. BME280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added SPI bus, more measuring modes, higher measuring rate, and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features. Hence, Grove - Temp&Humi&Barometer Sensor (BME280) will be more reliable in providing precise temperature, atmospheric pressure values, humidity and approximate altitude data.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board using [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) to I2C Grove connector. Then, use the provided library and example code from GitHub. If you are using an Arduino either use Base Shield v2.0 or simply connect the VCC pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).

Typical applications: Enhancement of GPS navigation, outdoor/indoor navigation, weather forecast, or any other project that requires accurate atmospheric pressure reading.


<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)

## Features

-   Get more precise temperature, atmospheric pressure values, humidity and approximate altitude data fast.
-   Grove compatible and easy to use
-   Highly abstracted library for building projects quicker

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications


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
| Dimensions                                    | 40 (length) × 20 (width) mm    | 
|I2C                                             | 0x76(default) or 0x77     |                                                                   


<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li>We will show/describe how to select interface bus soon.</li>
<li>The altitude is calculated by a combination of temperature and atmospheric pressure. No specialized components for altitude.</li></ol>
</div>

### Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Hardware Overview


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
| Grove - Temp&Humi&Barometer Sensor (BME280)                                                                                            | 1 piece  |
| [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

## Getting Started


Now let us run some basic examples with this module.

### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BME280/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

- **Step 2.** Connect Grove-Barometer_Sensor-BME280 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--link-->
![with_ardu](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BME280/raw/master/img/with_ardu.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.

<!--I2C-->
| seeeduino_v4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software
**Step 1.** Download the [Library and example code](https://github.com/Seeed-Studio/Grove_BME280) from Github.

**Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor.

Here is the code
```c

/*
 * bme280_example.ino
 * Example sketch for bme280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor
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
#include "Seeed_BME280.h"
#include <Wire.h>

BME280 bme280;

void setup()
{
  Serial.begin(9600);
  if(!bme280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bme280.getTemperature());
  Serial.println("C");//The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bme280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bme280.calcAltitude(pressure));
  Serial.println("m");

  //get and print humidity data
  Serial.print("Humidity: ");
  Serial.print(bme280.getHumidity());
  Serial.println("%");

  delay(1000);
}

```

**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, altitude and humidity.




## Resources


-  **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_Schematics](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
-  **[Datasheet]** [BME280 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BME280/master/res/Grove-Barometer_Sensor-BME280-.pdf)
-  **[Library]** [Grove_BME280 Library](https://github.com/Seeed-Studio/Grove_BME280) on GitHub
-  **[Reference]** [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Projects

**Seeed LoRa IoTea Solution**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>