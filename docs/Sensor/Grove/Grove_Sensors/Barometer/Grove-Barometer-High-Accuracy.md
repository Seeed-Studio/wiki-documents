---
description: Grove - Barometer (High-Accuracy)
title: Grove - Barometer (High-Accuracy)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer-High-Accuracy
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" alt="pir" width={600} height="auto" /></p>


This Grove - Barometer (High-Accuracy) Sensor features a HP206C high-accuracy chip to detect barometric pressure ,Altimeter and temperature. It can widely measure pressure ranging from 300mbar~1200mbar, with a super high accuracy of 0.01mbar(0.1m) in ultra-high resolution mode.The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html)


## Features


-   Digital two wire (I2C) interface
-   Command-based Reading, Compensated (Optional)
-   Programmable Events and Interrupt Controls
-   Full Data Compensation
-   Wide barometric pressure range
-   Flexible supply voltage range
-   Ultra-low power consumption
-   Altitude Resolution down to 0.01 meter
-   Temperature measurement included
-   I2C Address: 0x76

:::note
    If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).
:::
:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
## Application Ideas


-   High Precision Mobile Altimeter / Barometer
-   Industrial Pressure and Temperature Sensor System
-   Automotive Systems
-   Personal Electronics Altimetry
-   Adventure and Sports watches
-   Medical Gas Control System
-   Weather Station Equipment
-   Indoor Navigation and Map Assist
-   Heating, Ventilation, Air Conditioning

## Specifications


<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
3.3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td>
635
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Pressure Range
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1200
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
Faster I2C data transfer
</th>
<td>
/
</td>
<td>
/
</td>
<td>
10
</td>
<td>
MHz
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
20.4*41.8*9.7
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
Weight
</th>
<td colspan="3">
/
</td>
<td>
g
</td>
</tr>
</table>

## Platforms Supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::
## Hardware Overview
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>



## Getting started

### Play with Arduino

Barometric condition is one of the criteria used to predict coming change in weather and altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor.


#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Barometer-High-Accuracy |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html)|

- **Step 2.** Connect Grove-Barometer-High-Accuracy to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.


<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer-High-Accuracy  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |



#### Software

**Step 1.** Download the [library](https://github.com/Seeed-Studio/Grove_Barometer_HP20x) from Github.

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor.


Here is the code

```c
/*
* Demo name  ?: HP20x_dev demo
* Usage      ?: I2C PRECISION BAROMETER AND ALTIMETER [HP206C hopeRF]
* Author     ?: Oliver Wang from Seeed Studio
* Version    ?: V0.1
* Change log ?: Add kalman filter 2014/04/04
*/

#include <HP20x_dev.h>
#include <KalmanFilter.h>

#include "Arduino.h"
#include "Wire.h"

unsigned char ret = 0;

    /* Instance */
KalmanFilter t_filter;    //temperature filter
KalmanFilter p_filter;    //pressure filter
KalmanFilter a_filter;    //altitude filter


void setup()
{
    Serial.begin(9600);        // start serial for output

    Serial.println("****HP20x_dev demo by seeed studio****\n");
    Serial.println("Calculation formula: H = [8.5(101325-P)]/100 \n");
      /* Power up,delay 150ms,until voltage is stable*/
    delay(150);
      /* Reset HP20x_dev*/
    HP20x.begin();
    delay(100);

      /* Determine HP20x_dev is available or not*/
    ret = HP20x.isAvailable();
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("HP20x_dev is available.\n");
    }
    else
    {
        Serial.println("HP20x_dev isn't available.\n");
    }

}


void loop()
{
    char display[40];
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("------------------\n");
        long Temper = HP20x.ReadTemperature();
        Serial.println("Temper:");
        float t = Temper/100.0;
        Serial.print(t);
        Serial.println("C.\n");
        Serial.println("Filter:");
        Serial.print(t_filter.Filter(t));
        Serial.println("C.\n");

        long Pressure = HP20x.ReadPressure();
        Serial.println("Pressure:");
        t = Pressure/100.0;
        Serial.print(t);
        Serial.println("hPa.\n");
        Serial.println("Filter:");
        Serial.print(p_filter.Filter(t));
        Serial.println("hPa\n");

        long Altitude = HP20x.ReadAltitude();
        Serial.println("Altitude:");
        t = Altitude/100.0;
        Serial.print(t);
        Serial.println("m.\n");
        Serial.println("Filter:");
        Serial.print(a_filter.Filter(t));
        Serial.println("m.\n");
        Serial.println("------------------\n");
        delay(1000);
    }
}
```

**Step 4.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.


### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:


| Raspberry pi | GrovePi_Plus | Grove-Barometer-High-Accuracy |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html)|



- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Barometer-High-Accuracy  to **I2C** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.


<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>



#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.


```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 3.** Excute below commands to use this sensor


```bash
cd ~/GrovePi/Software/Python/grove_barometer_sensors/high_accuracy_hp206c_barometer
python high_accuracy_barometer_example.py
```

Here is the code :

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove - Barometer (High-Accuracy)(https://www.seeedstudio.com/depot/Grove-Barometer-HighAccuracy-p-1865.html
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this library?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
# This library is derived from the Arduino library written by Oliver Wang for SeeedStudio (https://github.com/Seeed-Studio/Grove_Barometer_HP20x/tree/master/HP20x_dev)
'''
## License

The MIT License (MIT)

GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''
import hp206c
h= hp206c.hp206c()

ret=h.isAvailable()
if h.OK_HP20X_DEV == ret:
    print("HP20x_dev is available.")
else:
    print("HP20x_dev isn't available.")

temp=h.ReadTemperature()
pressure=h.ReadPressure()
altitude=h.ReadAltitude()
print("Temperature\t: %.2f C\nPressure\t: %.2f hPa\nAltitude\t: %.2f m" %(temp,pressure,altitude))
```


## References
The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/Pressure_and_Altitude.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High-Accuracy_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

-  **[Eagle]** [Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle File](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High-Accuracy_v1.0_sch_pcb.zip)
-  **[Datasheet]** [HP206C Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206C_Datasheet.pdf)
-  **[Library]** [Github repository for Grove\_Barometer\_HP20x with arduino](https://github.com/Seeed-Studio/Grove_Barometer_HP20x)

## Projects

**Smart Crops**: Implementing IoT in Conventional Agriculture!
Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Tech Support & Product Discussion

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


