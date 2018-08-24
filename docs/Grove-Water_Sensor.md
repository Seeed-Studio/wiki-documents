---
title: Grove - Water Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html
oldwikiname: Grove_-_Water_Sensor
prodimagename: Grove-Water_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020018 1.jpg
surveyurl: https://www.research.net/r/Grove-Water_Sensor
sku: 101020018
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_1.png)

The Water Sensor module is part of the Grove system. It indicates whether the sensor is dry, damp or completely immersed in water by measuring conductivity. The sensor traces have a weak pull-up resistor of 1 MΩ. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace. Believe it or not this circuit will work with the digital I/O pins of your Arduino or you can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces.


<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Water Sensor V1.1 | Initial                                                                                                                                                                                    | July 2014      |


## Features


- Grove compatible interface
- Low power consumption
- 2.0cm x 2.0cm Grove module
- High sensitivity

## Applications Ideas

- Rainfall detecting
- Liquid leakage
- Tank overflow detector

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

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see Getting Started with Arduino before the start.

### Play With Arduino

#### Hardware

Connect the module to the Basic board using any of the digital pin. You can gain the value of the signal pin. When there is water on the bare conducting wires, the value is LOW. Otherwise, it will be HIGH.

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Water Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_small.png)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **Step 2.** Connect Water Sensor to port D2 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/3.jpg)
!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove_Water_Sensor to Seeeduino as below.

| Seeeduino       | Grove - Water Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### Software
- **Step 1.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```
- **Step 2.** We will see the output display on terminal as below.

```c
1
1
0
0
1
1
```

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Water Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_small.png)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Water Sensor to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/7.jpg)
#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

-	**Step 3.** To see the code

```
nano grove_water_sensor.py
```

```python
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

-	**Step 4.** Run the demo.

```
sudo python grove_water_sensor.py
```

- **Step 5.** We will see the output display on terminal as below.

```
1
1
0
0
1
```

## Resources

- **[Eagle]** [Grove Water Sensor Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/res/Water_sensor.zip)
- **[Library]** [Demo code for Grove Water Sensor](https://github.com/Seeed-Studio/Grove_Water_Sensor)

<!-- This Markdown file was created from http://wiki.seeedstudio.com/Grove-Water_Sensor/ -->

## Project 

**Smart Crops: Implementing IoT in Conventional Agriculture!**:Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 