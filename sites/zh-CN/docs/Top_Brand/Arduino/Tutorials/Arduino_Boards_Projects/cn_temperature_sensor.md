---
description: 温度传感器
title: 温度传感器
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/temperature_sensor
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
您可以使用温湿度传感器来获取房屋的温度和湿度。

本演示将向您展示如何获取数值并将其显示在LCD上。

**所需硬件：**

* Arduino

* 温湿度传感器

* LCD

**电路：**

温湿度传感器连接到A0。

关于LCD的连接，请参考[LCD](https://arduino.cc/en/Tutorial/LiquidCrystal)

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**代码：**

打开Arduino IDE，点击File -> Shetchbook -> TempHumiSensor。

您可以通过readHumidity()获取湿度，通过readTemperature()获取温度。这两个函数将返回一个浮点值。

关于LCD，请参考[LCD](https://arduino.cc/en/Tutorial/LiquidCrystal)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>