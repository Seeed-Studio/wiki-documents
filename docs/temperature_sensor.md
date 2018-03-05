---
title: Temperature Sensor
category: Tutorial
oldwikiname:  Temperature Sensor
prodimagename:
surveyurl: https://www.research.net/r/Temperature_Sensor
---
You can use Temp &amp; Humi Sensor to get temperature and humidity of your house.

This demo will show you how to get the value and show it to LCD.

**Hardware Required:**

*   Arduino

*   Temp &amp; Humi Sensor

*   LCD

**Circuit：**

Temp &amp; Humi Sensor connect to A0.

About the connect of LCD, please refer to [LCD](http://arduino.cc/en/Tutorial/LiquidCrystal)

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Shetchbook -&gt; TempHumiSensor.

You can get humidity by readHumidity() and temperature by readTemperature(). This 2 function will return a float value.

About LCD, please refer to [LCD](http://arduino.cc/en/Tutorial/LiquidCrystal).
