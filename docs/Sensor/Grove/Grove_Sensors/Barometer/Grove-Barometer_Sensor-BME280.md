---
description: Grove - Barometer Sensor(BME280)
title: Grove - Barometer Sensor(BME280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BME280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg" alt="pir" width={500} height="auto" /></p>


Grove - Temp&Humi&Barometer Sensor (BME280) is a breakout board for Bosch BMP280 high-precision, low-power combined humidity, pressure, and temperature sensor. This module can be used to measure temperature, atmospheric pressure and humidity accurately and fast. As the atmospheric pressure changes with altitude, it can also measure approximate **altitude** of a place. It can be connected to a microcontroller with I<sup>2</sup>C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this more product easier to use.

The BME280 is an upgraded version of BMP180, and BME280 gets dramatic improvements from BMP180. BME280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added SPI bus, more measuring modes, higher measuring rate, and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features. Hence, Grove - Temp&Humi&Barometer Sensor (BME280) will be more reliable in providing precise temperature, atmospheric pressure values, humidity and approximate altitude data.

Using the sensor is easy. For [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board using [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) to I2C Grove connector. Then, use the provided library and example code from GitHub. If you are using an Arduino either use Base Shield v2.0 or simply connect the VCC pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).

Typical applications: Enhancement of GPS navigation, outdoor/indoor navigation, weather forecast, or any other project that requires accurate atmospheric pressure reading.


<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

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


## Features

-   Get more precise temperature, atmospheric pressure values, humidity and approximate altitude data fast.
-   Grove compatible and easy to use
-   Highly abstracted library for building projects quicker

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
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
| Chip                                          | BME280([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)) |
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

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Hardware Overview


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


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
| [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

## Getting Started


Now let us run some basic examples with this module.

### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Step 2.** Connect Grove-Barometer_Sensor-BME280 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software
**Step 1.** Download the [Library and example code](https://github.com/Seeed-Studio/Grove_BME280) from Github.

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

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

**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, altitude and humidity.

### Play With Wio Terminal (ArduPy)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Wio Terminal | Grove-Barometer Sensor-BME280 |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get One Now](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Step 2.** Connect Grove-Barometer Sensor-BME280 to the **I2C** Grove port of Wio Terminal.

- **Step 3.** Connect the Wio Terminal to PC through USB Type-C cable.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Step 1.** Follow [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ArduPy/) to configure the ArduPy development environment on Wio Terminal.

- **Step 2.** Make sure that the ArduPy firmware is flashed into Wio Terminal. For more information, please follow [**here**](https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-bme280
aip build
aip flash
```

- **Step 3.** Copy the following code and save it as `ArduPy-bme280.py`:

```python
from arduino import grove_bme280
from machine import LCD
from machine import Sprite
import time

bme280 = grove_bme280()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
      spr.setTextSize(2)
      spr.fillSprite(spr.color.BLACK)
      spr.setTextColor(lcd.color.ORANGE)
      spr.drawString("BME280 Reading", 90, 10)
      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
      spr.setTextColor(lcd.color.WHITE)
      spr.drawString("- Temperature: ", 20, 50)
      spr.drawString("- Humidity: ", 20, 80)
      spr.drawString("- Pressure: ", 20, 110)

      spr.drawFloat(bme280.temperature, 2, 220,50)
      spr.drawNumber(bme280.humidity, 220,80)
      spr.drawNumber(bme280.pressure, 220,110)
      spr.pushSprite(0,0)
      time.sleep_ms(500)

      print ("\nTemperature: ", bme280.temperature, "C")
      print ("Humidity: ", bme280.humidity, "%")
      print ("Pressure: ", bme280.pressure, "Pa")

if __name__ == "__main__":
    main()
```

- **Step 4.** Save the `ArduPy-bme280.py` in a location that you know. Run the following command and **replace** `<YourPythonFilePath>` with your `ArduPy-bme280.py` location.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
```

- **Step 5.** We will see the values display on terminal as below, and displaying on the Wio Terminal LCD screen.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy

Temperature:  29.88 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.91 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.88 C
Humidity:  54 %
Pressure:  100331 Pa
```

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png" alt="pir" width={600} height="auto" /></p>



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources


-  **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_Schematics](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
-  **[Datasheet]** [BME280 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)
-  **[Library]** [Grove_BME280 Library](https://github.com/Seeed-Studio/Grove_BME280) on GitHub
-  **[Reference]** [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Projects

**Seeed LoRa IoTea Solution**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).



