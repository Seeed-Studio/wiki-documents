---
description: Sound Sensor And LED Bar
title: Sound Sensor And LED Bar
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sound_Sensor_And_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Sound Sensor And LED Bar
category: Tutorial
oldwikiname:  Sound Sensor And LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Relay_Control_LED
--- -->
This demo will show you how to use Sound Sensor, to indicate the intensity of sound, we need a LED Bar.

**Hardware Required:：**

* Arduino

* Sound Sensor

* LED BAR

**Circuit：**

The output of sound sensor is analog signal, we connect it to A0 of Seeeduino.

LED Bar needs 10 IOs, about the connection, please refer to [LED Bar](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Sketchbook -&gt; sound_sensor.

We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger.

To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value.

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
