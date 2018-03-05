---
title: Grove - Flame Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Flame-Sensor-p-1450.html
oldwikiname: Grove_-_Flame_Sensor
prodimagename: Flame_Sensor_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Flame Sensor.jpg
surveyurl: https://www.research.net/r/Grove-Flame_Sensor
sku: 101020049
tags: grove_digital, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/Flame_Sensor_01.jpg)

The Grove - Flame Sensor can be used to detect fire source or other light sources of the wavelength in the range of 760nm - 1100 nm. It is based on the YG1006 sensor which is a high speed and high sensitive NPN silicon phototransistor. Due to its black epoxy, the sensor is sensitive to infrared radiation. In fire fighting robot game, the sensor plays a very important role, it can be used as a robot eyes to find the fire source.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

Features
-------

-   Grove Interface
-   High Photo Sensitivity
-   Fast Response Time
-   Easy to use
-   Sensitivity is adjustable

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
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
Voltage
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.30
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
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Range of Spectral Bandwidth
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
Detection range
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
Response Time
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
Operating Temperature
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

Platforms Supported
-------------------

Usage
-----

The module is mainly used to detect the infrared light. It outputs digital signal 0 and 1 through a Comparator output. The output value will be 0​​ when infrared light is detected. And the sensitivity is adjustable by the precision potentiometer.

Let's use it to control. When the output value is 0, the led will light up.

1.Connect the module to the D3 of [Grove - Base Shield](/Base_Shield_V2 "Grove - Base Shield") using the 4-pin grove cable.

2.Plug the Grove - Base Shield into Arduino.

3.Connect Arduino to PC by using a USB cable.

4.Copy and paste code below to a new Arduino sketch.

```
    /******************************************************************************/

    #define SENSOR 3 //connect SENSOR to digital pin3
    #define LED 2//connect Grove - LED to pin2

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

5.The LED will light up when there is infrared light. Please use it to designed your products.

Reference
---------

The sensor can detect the light source whose wavelength is in the range of 760nm - 1100 nm. The picture below shows the spectral sensitivity.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/Spectral_Sensitive.jpg)

Resources
--------

-   [Grove - Flame Sensor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
-   [Github repository for Grove_Flame_Sensor Library](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
-   [LM293D datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/res/LM293D.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor -->
