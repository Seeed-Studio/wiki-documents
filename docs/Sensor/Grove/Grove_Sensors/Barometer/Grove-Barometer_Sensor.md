---
description: Grove - Barometer Sensor
title: Grove - Barometer Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg" alt="pir" width={600} height="auto" /></p>


This Grove - Barometer Sensor features a Bosch BMP085 high-accuracy chip to detect barometric pressure and temperature. It can widely measure pressure ranging from 300hPa to 1100hPa, AKA +9000m to -500m above sea level, with a super high accuracy of 0.03hPa(0.25m) in ultra-high resolution mode. The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/#Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html)

Features
--------

-   Digital two wire (I2C) interface
-   Wide barometric pressure range
-   Flexible supply voltage range
-   Ultra-low power consumption
-   Low noise measurement
-   Fully calibrated
-   Temperature measurement included

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Application Ideas
-----------------

-   Enhancement of GPS navigation
-   Indoor and outdoor navigation
-   Leisure and sports
-   Weather forecast
-   Vertical velocity indication (rise/sink speed)

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
3
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
89
</td>
<td>
/
</td>
<td>
130
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
1100
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
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
20.4*24.3*9.7
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
2
</td>
<td>
g
</td>
</tr>
</table>
Usage
-----

### With Arduino

Barometric condition is one of the criteria used to predict coming change in weather and deduce altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor.

1.Connect it to IIC port of Seeeduino or Grove - Base Shield via a Grove cable. And connect Arduino to PC via a USB cable.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG" alt="pir" width={600} height="auto" /></p>


2.Download the library [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip);Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.

3.Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor.

```
/* Barometer demo V1.0
*  Based largely on code by  Jim Lindblom
*  Get pressure, altitude, and temperature from the BMP085.
*  Serial.print it out at 9600 baud to serial monitor.
*
*  By:https://www.seeedstudio.com
*/
#include "Barometer.h"
#include <Wire.h>

float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;

void setup(){
    Serial.begin(9600);
    myBarometer.init();
}

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
    altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //display 2 decimal places
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //whole number only.
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //display 4 decimal places

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //display 2 decimal places
    Serial.println(" m");

    Serial.println();

    delay(1000); //wait a second and get values again.
}
```

4.Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus/).

3.Connection

-   Plug the barometer sensor into the i2c sockets on grovepi.

4.Navigate to the demos' directory:
```
cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/
```

-   To see the code

```
nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" to exit #
```

```
#!/usr/bin/python

import smbus
import RPi.GPIO as GPIO
#import grovepi from grove_i2c_barometic_sensor import BMP085

# ===========================================================================
# Example Code
# ===========================================================================

# Initialise the BMP085 and use STANDARD mode (default value)
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# To specify a different operating mode, uncomment one of the following:
# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode
# bmp = BMP085(0x77, 1)  # STANDARD Mode
# bmp = BMP085(0x77, 2)  # HIRES Mode
# bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = smbus.SMBus(1)
else:
    bus = smbus.SMBus(0)

temp = bmp.readTemperature()

# Read the current barometric pressure level
pressure = bmp.readPressure()

# To calculate altitude based on an estimated mean sea level pressure
# (1013.25 hPa) call the function as follows, but this won't be very accurate
# altitude = bmp.readAltitude()

# To specify a more accurate altitude, enter the correct mean sea level
# pressure level.  For example, if the current pressure level is 1023.50 hPa
# enter 102350 since we include two decimal places in the integer value
altitude = bmp.readAltitude(101560)

print "Temperature: %.2f C" % temp
print "Pressure:    %.2f hPa" % (pressure / 100.0)
print "Altitude:    %.2f m" % altitude
```

5.Run the demo.
```
sudo python grove_i2c_barometic_sensor_example.py
```

6.Result

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Grove - Barometer Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip)
-   [Barometer\_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)
-   [Github repository for Barometer Sensor Library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
