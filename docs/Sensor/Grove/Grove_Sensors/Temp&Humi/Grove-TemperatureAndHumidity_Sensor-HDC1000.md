---
description: Grove - Temperature&Humidity Sensor (HDC1000)
title: Grove - Temperature&Humidity Sensor (HDC1000)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TemperatureAndHumidity_Sensor-HDC1000
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg" /></div>

Grove - Temperature&Humidity Sensor (HDC1000) utilizes a HDC1000 sensor.HDC1000 was designed by Texas Instruments.It is a digital humidity sensor with integrated temperature sensor that provides excellent measurement accuracy at very low power.The device measures humidity based on a novel capacitive sensor.The humidity and temperature sensors are factory calibrated.The innovative WLCSP (Wafer Level Chip Scale Package) simplifies board design with the use of an ultra-compact package. The sensing element of the HDC1000 is placed on the bottom part of the device, which makes the HDC1000 more robust against dirt, dust, and other environmental contaminants. The HDC1000 is functional within the full –40°C to +125°C temperature range,and 0-100% RH range.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Grove connector compatible
- IIC Interface
- Low Power
- Wide operating voltage range
- I2C Serial Bus Address Configuration

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

<table border="1" cellspacing="0" width="800">
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
Supply Voltage
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Working Current
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Relative Humidity Accuracy (Typ)
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Relative Humidity Operating Range (Typ)
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Temperature Accuracy
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Temperature Range
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Operating Temperature Range
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
40*20
</td>
<td>
mm
</td>
</tr>
</table>

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Hardware Overview

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg" /></div>

1. Grove connector.
2. Ready：Ready for a conversion.
3. Default address: 0x40.
4. ADDR0, ADDR1: I2C Serial Bus Address Configuration(0x40,0x41,0x42,0x43)

## Getting Started

### Play With Arduino

Here is how to use Grove - Temperature&Humidity Sensor (HDC1000) with Seeeduino v4.2.

#### Materials required

| Seeeduino V4.2 | Base Shield| Grove - Temperature&Humidity Sensor(HDC1000) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy
:::

#### Hardwave

- **Step 1.** Connect Grove - Temperature&Humidity Sensor(HDC1000) to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg" /></div>

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - Temperature&Humidity Sensor(HDC1000) to Seeeduino as below.
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(HDC1000) |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the [Seeed DHT library](https://github.com/Seeed-Studio/HDC1000) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch.

```cpp
/*
 * HDC1000.h
 * A library for HDC1000 1.0
 *
 * Copyright (c) 2015 seeed technology inc.
 * Author     : Pillar Zuo (baozhu.zuo@seeed.cc)
 * Create Time: April 2015
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

#include <Wire.h>
#include <HDC1000.h>
 
HDC1000 mySensor;
//HDC1000 mySensor(0x41, 2) <-- DRDYn enabled and connected to Arduino pin 2 (allows for faster measurements).
 
void setup(){
 Serial.begin(9600);
 mySensor.begin();
}
 
void loop(){
 Serial.print("Temperature: ");
 Serial.print(mySensor.getTemp()); 
 Serial.print("C, Humidity: ");     
 Serial.print(mySensor.getHumi());
 Serial.println("%");
 delay(1000);
}


```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**. If every thing goes well, you will get the results.

The result should be like:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png" /></div>

:::tip
        It may need a period time before the result become stable.
:::

### Play With Raspberry Pi

#### Hardware

**Materials required**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank">Get One Now</a>|

- **Step 1.** Plug the GrovePi_Plus into Raspberry.

- **Step 2.** Connect this sensor to **I2C** port of GrovePi_Plus.

- **Step 3.** Connect the Raspberry to PC via USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg" /></div>

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

:::tip
In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.
:::

:::note
We firmly suggest you to update the firmware, or for some sensors you may get errors.
:::

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 4.** Excute below commands to get the value.

```
cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000
sudo python3 grove_hdc_1000_example.py
```

The result should be like:

```python

pi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py 
Temp    : 27.94 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.21 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.43 %
-----------------
Temp    : 29.23 C
Humidity: 78.04 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------

```

If you want to check the code, you can use the following command:

```
sudo nano grove_hdc_1000_example.py

```

### With Launchpad

#### Material required

- TI MSP430FR4133 LaunchPad\] × 1
- USB cable(type A to mini type-b) × 1
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
- [Grove - Temperature&Humidity Sensor (HDC1000)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### Hardware connections

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG" /></div>

#### Download code and flash it to Launchpad

1. Download the [demo code](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip).

  <div className="admonition note">
  <p className="admonition-title">Note</p>
  You have to copy the file <span style={{fontStyle: 'italic'}}>readTempHumi.ino</span> (in the folder <span style={{fontStyle: 'italic'}}>examples</span>) into the same folder as <span style={{fontStyle: 'italic'}}>HDC1000.h</span>.
</div>

2. Flash the code into Launchpad.

3. Open *Serial Monitor* (**Tool**->**Serial Monitor**) to view data detected.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip)
- **[Pdf]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf)
- **[Library]** [Demo code](https://github.com/Seeed-Studio/HDC1000)
- **[Datasheet]** [HDC1000\_DataSheet.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) -->

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>