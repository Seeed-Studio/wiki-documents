---
title: Grove - Barometer (High-Accuracy)
category: Sensor
bzurl: https://seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html
oldwikiname: Grove_-_Barometer_(High-Accuracy)
prodimagename: Grove-Barometer-High-Accuracy.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Grove Barometer High-Accuracy.jpg
surveyurl: https://www.research.net/r/Grove-Barometer-High-Accuracy
sku: 101020068
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/img/Grove-Barometer-High-Accuracy.jpg)

This Grove - Barometer (High-Accuracy) Sensor features a HP206C high-accuracy chip to detect barometric pressure ,Altimeter and temperature. It can widely measure pressure ranging from 300mbar~1200mbar, with a super high accuracy of 0.01mbar(0.1m) in ultra-high resolution mode.The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification.It is designed to be connected directly to a micro-controller via the I2C bus.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html)


Features
--------

-   Digital two wire (I2C) interface
-   Command-based Reading, Compensated (Optional)
-   Programmable Events and Interrupt Controls
-   Full Data Compensation
-   Wide barometric pressure range
-   Flexible supply voltage range
-   Ultra-low power consumption
-   Altitude Resolution down to 0.01 meter
-   Temperature measurement included

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Application Ideas
-----------------

-   High Precision Mobile Altimeter / Barometer
-   Industrial Pressure and Temperature Sensor System
-   Automotive Systems
-   Personal Electronics Altimetry
-   Adventure and Sports watches
-   Medical Gas Control System
-   Weather Station Equipment
-   Indoor Navigation and Map Assist
-   Heating, Ventilation, Air Conditioning

Specifications
--------------

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

Platforms Supported
-------------------

Usage
-----

### With [Arduino](/Arduino "Arduino")

Barometric condition is one of the criteria used to predict coming change in weather and deduce altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor.

1.Connect it to I2C port of Seeeduino or Grove - Base Shield via a Grove cable. And connect Arduino to PC via a USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/img/Grove-Barometer_Sensor_hard.JPG)

2.Download the library [Grove_Barometer_HP20x](https://github.com/Seeed-Studio/Grove_Barometer_HP20x);Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.

3.Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -&gt; Example ->Barometer_Sensor->Barometer_Sensor.

```
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
      /* Power up,delay 150ms,until voltage is stable */
    delay(150);
      /* Reset HP20x_dev */
    HP20x.begin();
    delay(100);

      /* Determine HP20x_dev is available or not */
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

4.Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/img/Barometer_Sensor.jpg)

The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/img/Pressure_and_Altitude.jpg)

Resources
---------

-   [Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/res/Grove_Barometer_High-Accuracy_v1.0_sch_pcb.zip)
-   [HP206C Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer-High-Accuracy/master/res/HP206C_Datasheet.pdf)
-   [Github repository for Grove\_Barometer\_HP20x](https://github.com/Seeed-Studio/Grove_Barometer_HP20x)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Barometer_(High-Accuracy) -->
