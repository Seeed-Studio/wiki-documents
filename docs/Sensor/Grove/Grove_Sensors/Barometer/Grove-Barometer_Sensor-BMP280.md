---
description: Grove - Barometer Sensor (BMP280)
title: Grove - Barometer Sensor (BMP280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BMP280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - Barometer Sensor (BMP280)** is a breakout board for Bosch BMP280 high-precision and low-power digital barometer. This module can be used to measure **temperature** and **atmospheric pressure** accurately. As the atmospheric pressure changes with altitude, it can also measure approximate **altitude** of a place. It can be connected to a microcontroller with I<sup>2</sup>C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this product easier to use.

The BMP280 is an upgraded version of BMP180 and gets dramatic improvements from BMP180. BMP280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added interface SPI, more measuring modes, higher measuring rate and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features in the library. Hence, Grove - Barometer Sensor (BMP280) would be more reliable on providing precise temperature, atmospheric pressure values and approximate altitude data.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody></table>


## Pre-reading

An introduction of **What is a Barometric Pressure Sensor** and **How does it work** is strongly recommended reading ahead if you are not familiar with it. Please visit our [blog](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/) for detailed information.

## Feature

-   Get more precise temperature, atmospheric pressure values, and approximate altitude data
-   Grove compatible and easy to use
-   Highly abstracted library for building projects quicker

:::tip
     More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/).
:::
## Specification


| Parameter                            | Value                                                                                                                       |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Input voltage                        | 3.3V or 5V                                                                                                                  |
| I/O voltage                          | 3.3V or 5V                                                                                                                  |
| Operating current                    | 0.6mA                                                                                                                       |
| Operating temperature                | -40 - 85 ℃                                                                                                                  |
| Effective pressure measurement range | 300 - 1100 hPa (1 hPa= one hundred Pa) with ±1.0 hPa accuracy                                                               |
| Temperature measurement accuracy     | ±1.0°C                                                                                                                      |
| Measurement modes                    | Piezo & Temperature, forced or periodic                                                                                     |
| Chip                                 | BMP280 ([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
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

## Application

- Enhancement of GPS navigation
- Outdoor/indoor navigation
- Weather forecast
- Botany management

## Platforms supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play with Arduino

#### Materials required

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### Hardware Overview

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


-   **SPI soldering pads**, a voltage monitoring circuit.
-   **Interface bus selection pads** , to select I<sup>2</sup>C bus, connect the two pads by soldering (this is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.
-   **Slave board address selection pads**, to select slave board address to avoid address collision.

:::tip
      * If you have selected I2C bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, connect only left two (disconnect right two) by soldering.

      * You can disconnect pads with just a sharp knife.

      * If you have selected SPI bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, disconnect all three pads.
:::
<div class="admonition note">
<p class="admonition-title">Note</p>
Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.
</div>

**Step 1.** Connect Grove-Barometer_Sensor-BMP280 to port **I2C** of Grove-Base Shield.

**Step 2.** Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.
:::
<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_BMP280.git) from Github.

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->bmp280_example->bmp280_example

**Here is the code:**

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

**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude.

:::success
        The outcome will display on the **Serial Port** as following if everything goes well.
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove-Barometer Sensor BMP280 Schematic](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[Datasheet]** [BMP280 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[References]**  [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Project

**Intelligent alarm system made with BBG ( IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Monitoring System for Smart Crops** Design and build a system to monitor the status of your crops using the Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).



