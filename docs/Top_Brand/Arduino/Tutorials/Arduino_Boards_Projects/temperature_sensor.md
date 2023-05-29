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
