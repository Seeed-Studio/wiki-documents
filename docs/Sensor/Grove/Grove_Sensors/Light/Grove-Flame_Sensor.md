---
description: Grove - Flame Sensor
title: Grove - Flame Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Flame_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg" /></div>

The Grove - Flame Sensor can be used to detect fire source or other light sources of the wavelength in the range of 760nm - 1100 nm. It is based on the YG1006 sensor which is a high speed and high sensitive NPN silicon phototransistor. Due to its black epoxy, the sensor is sensitive to infrared radiation. In fire fighting robot game, the sensor plays a very important role, it can be used as a robot eyes to find the fire source.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Features

- Grove Interface
- High Photo Sensitivity
- Fast Response Time
- Easy to use
- Sensitivity is adjustable

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

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

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting started

The module is mainly used to detect the infrared light. It outputs digital signal 0 and 1 through a Comparator output. The output value will be 0​​ when infrared light is detected. And the sensitivity is adjustable by the precision potentiometer.

### Play with Arduino

The module is mainly used to detect the infrared light. It outputs digital signal 0 and 1 through a Comparator output. The output value will be 0​​ when infrared light is detected. And the sensitivity is adjustable by the precision potentiometer.

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Flame_Sensor |Grove - Red LED|
|--------------|-------------|-----------------|-----|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|[Get One Now](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **Step 2.** Connect Grove-Flame_Sensor to port **D2** of Grove-Base Shield.
- **Step 3.** Connect Grove - Red LED to port **D3** of Grove-Base Shield.
- **Step 4.** Plug Grove - Base Shield into Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

<!--link-->
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg" /></div>

:::note
If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino       |  Grove-Flame_Sensor  |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

| Seeeduino       |  Grove - Red LED |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D3            | Yellow                  |

#### Software

**Step 1.** Copy the code and flash it into the controller board.

Here is the code

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 //connect SENSOR to digital pin2
#define LED 3 //connect Grove - LED to pin3

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

**Step 2.** The LED will light up when there is infrared light.

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Flame Sensor to port D2, and connect a Grove - Red LED to port D3 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png" /></div>

Upload the program to your Arduino/Seeeduino.

:::tipsuccess
When the code finishes uploaded, the LED will goes on when Flame Sensor detects flame.
:::

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Flame_Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Flame_Sensor  to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg" /></div>

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to use this sensor

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

Here is the code of example:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Flame Sensor (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
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
import time
import grovepi

# Connect the Grove Flame Sensor to digital port D2
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

## Reference

The sensor can detect the light source whose wavelength is in the range of 760nm - 1100 nm. The picture below shows the spectral sensitivity.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove - Flame Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[Library]** [Github repository for Grove_Flame_Sensor Library](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[Datasheet]** [LM293D datasheet](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip)

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
