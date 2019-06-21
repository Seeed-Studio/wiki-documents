---
name: Xadow Basic Sensors
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html
oldwikiname: Xadow - Basic Sensors
prodimagename: Xadow_Basic_Sensors.JPG
surveyurl: https://www.surveymonkey.com/r/Xadow-Basic-Sensors
sku: 101040006
---

---
![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/Xadow_Basic_Sensors.JPG)

Xadow Basic Sensors integrates three different sensors on one single board:
- 3-Axis Accelerometer for motion detection, activity monitoring and speed tracking
- Dual diode Digital Light Sensor that can separately measure infrared, full-spectrum or human-visible light
- Temperature Sensor for temperature monitoring.

[![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)

## Features
---
- Three-in-one sensor board
- Plug-and-play if connected with RePhone Kit Create
- Open source and modular design
- Slim and small
- Built-in 11 PIN Xadow Connectors for fully flexible connection with other Xadow Modules
- Stackable, chain-able and sew-able with other Xadow Modules.

## Specification
---
**Overview**

|Item|Value|
|---|---|
|Microcontroller	|STM32F030F4
|Core|	ARM® 32-bit Cortex® -M0 CPU
|Power Supply|	3.3 ~ 6 V (via breakout pins)
|Flash	|16 KB
|SRAM|	4 KB
|Clock Speed|	48 MHz
|Operating Temperature Range	|-30°C to 70°C
|Interfaces|	Interface with Xadow GSM+BLE through I2C (7-bit address 0x03)
|Dimension	|25.37mm × 20.30mm / 1” × 0.8”

**3-Axis Accelerometer (ADXL345)**

|Item|value|
|---|---|
|Test g Range|	±2g (default), ±4g, ±8g, or ±16g
|Resolution|	Increase with g range, up to 13-bit resolution at ±16g

**Digital Light Sensor (TSL2561) -- Approximates Human Eye Response**

|Item|Value|
|---|---|
|Dynamic Range (Lux)|	0.1 to 40,000 Lux
|Dual Photodiodes	|Infrared and full spectrum

**Temperature Sensor (LM75ADP)**

|Item|Value|
|---|---|
|Temperature Range|	-55°C to 125 °C
|Accuracy	|± 2°C for temperature range from -25°C to 100°C<br>± 3°C for temperature range from -55°C to 25°C and from 100 °C to 125°C|

## Hardware Overview
---
![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/Xadow_Basic_Sensors.png)

## Use it with RePhone Kit Create
---
**Obtain the Sensor Data**

Without any programming, you can connect it to the Core Module (Xadow GSM+BLE) of your ‘RePhone Kit Create' to read all the data from the sensors.
![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/Xadow_Basic_Sensors_Sensor_Value.png)

**Set 'If This Then That**

You can also set the sensor data as a condition to trigger a series of actuators like audio, LED matrix and LED strip, or trigger actions like making a call and sending a message.
![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png)

## RePhone Community
---
[![](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

**Frequently Asked Questions**

Some frequently asked questions in [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone) are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.


## Resources
---
We will be keep updating the source code on our github page:
- [Source Code for Xadow Basic Sensors](https://github.com/WayenWeng/Xadow_Basic_Sensors/)

The schematic diagram of Xadow Basic Sensors is provided in the following link:
- [Xadow Duino Schematic Files](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip)

Check more info about the datasheet for each sensors:
- [ADXL345 - 3_Axis Acceserometer](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/res/ADXL345-3_Axis_Acceserometer.pdf)
- [LM75A NXP - Temperature Sensor](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/res/LM75A_NXP-Temperature_Sensor_.pdf)
- [TSL2561 - Light Sensor](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/res/TSL2561-Light_Sensor_.pdf)

And the MCU STM32F030F4:
- [STM32F030F4](https://github.com/SeeedDocument/Xadow_Basic_Sensors/raw/master/res/STM32F030F4.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>