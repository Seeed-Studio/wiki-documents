---
title: Grove - Water Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Water-Sensor-p-748.html
oldwikiname: Grove_-_Water_Sensor
prodimagename: Grove-Water_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020018 1.jpg
surveyurl: https://www.research.net/r/Grove-Water_Sensor
sku: 101020018
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor.jpg)

The Water Sensor module is part of the Grove system. It indicates whether the sensor is dry, damp or completely immersed in water by measuring conductivity. The sensor traces have a weak pull-up resistor of 1 MΩ. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace. Believe it or not this circuit will work with the digital I/O pins of your Arduino or you can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)


Features
--------

-   Grove compatible interface
-   Low power consumption
-   2.0cm x 2.0cm Grove module
-   High sensitivity

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Applications Ideas
------------------

-   Rainfall detecting
-   Liquid leakage
-   Tank overflow detector

<div class="admonition caution">
<p class="admonition-title">Caution</p>
This device is for educational and hobby applications only. It is not intended to be used in applications where its malfunction could result in damage to property or human safety.
</div>

Specifications
-------------

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
Working Voltage
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Working Temperature
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Working Humidity (without condensation)
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

Platforms Supported
-------------------

Getting Started
-----

### With [Arduino](/Arduino "Arduino")

Connect the module to the Basic board using any of the digital pin. You can gain the value of the signal pin. When there is water on the bare conducting wires, the value is LOW. Otherwise, it will be HIGH.

The following sketch demonstrates a simple application of using the Water sensor to control the buzzer. As the picture on the below indicates, the Water sensor is connected to digital port 8 of the **Grove - Base Shield** and the Buzzer is connected to digital port 12. When there is water on the bare conducting wires, the SIG pin output a LOW voltage. Then the Buzzer sounds. The hardware installation is as follows:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Water_Buzzer.jpg)

-   Then connect Arduino to PC by using a USB cable.
-   Copy and paste code below to a new Arduino sketch.

```c
/*macro definition of water sensor and the buzzer*/
#define WATER_SENSOR 8
#define BUZZER 12

void setup()
{
    pins_init();
}
void loop()
{
    if(isExposedToWater())
    soundAlarm();
}

void pins_init()
{
    pinMode(WATER_SENSOR, INPUT);
    pinMode(BUZZER, OUTPUT);
}

/************************************************************************/
/*Function: When the sensor is exposed to the water, the buzzer sounds  */
/*          for 2 seconds.                                              */
/************************************************************************/
void soundAlarm()
{
    for(uint8_t i = 0;i < 20;i ++)
    {
        digitalWrite(BUZZER, HIGH);
        delay(50);
        digitalWrite(BUZZER, LOW);
        delay(50);
    }
}

/************************************************************************/
/*Function: Determine whether the sensor is exposed to the water        */
/*Parameter:-void                                                       */
/*Return:   -boolean,if it is exposed to the water,it will return true. */
/************************************************************************/
boolean isExposedToWater()
{
    if(digitalRead(WATER_SENSOR) == LOW)
    return true;
    else return false;
}
```

-   Upload the code.

-   The buzzer sounds when the sensor is damp or completely immersed in water. Have a try!

### With Raspberry Pi

1.You should have a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePiPlus).

3.Connection

-   Plug the sensor to grovepi socket D2 by using a grove cable.

4.Navigate to the demos' directory:
```
cd yourpath/GrovePi/Software/Python/
```

-   To see the code
```
nano grove_water_sensor.py   # "Ctrl+x" to exit #
```
```
import time
import grovepi

# Connect the Grove Water Sensor to digital port D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

5.Run the demo.
```
sudo python grove_water_sensor.py
```

Resources
---------

-   [Water Sensor Eagle Files](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/res/Water_sensor.zip)
-   [Demo code for Water Sensor](https://github.com/Seeed-Studio/Grove_Water_Sensor)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Water_Sensor -->
