---
description: Temperature Sensor
title: Temperature Sensor
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /temperature_sensor
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Temperature Sensor
category: Tutorial
oldwikiname:  Temperature Sensor
prodimagename:
surveyurl: https://www.research.net/r/Temperature_Sensor
--- -->
You can use Temp &amp; Humi Sensor to get temperature and humidity of your house.

This demo will show you how to get the value and show it to LCD.

**Hardware Required:**

* Arduino

* Temp &amp; Humi Sensor

* LCD

**Circuit：**

Temp &amp; Humi Sensor connect to A0.

About the connect of LCD, please refer to [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal)

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Shetchbook -&gt; TempHumiSensor.

You can get humidity by readHumidity() and temperature by readTemperature(). This 2 function will return a float value.

About LCD, please refer to [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal).

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
