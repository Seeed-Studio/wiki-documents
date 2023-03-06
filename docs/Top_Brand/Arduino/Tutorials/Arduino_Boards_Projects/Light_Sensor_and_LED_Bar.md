---
description: Light Sensor and LED Bar
title: Light Sensor and LED Bar
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Light_Sensor_and_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Light Sensor and LED Bar
category: Tutorial
oldwikiname:  Light Sensor and LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Light_Sensor_and_LED_Bar
--- -->
This demo will show you how to use light sensor. In order to indicate the intensity of light, we need a Led Bar.

**Hardware Required：**

* Arduino

* Light Sensor

* LED Bar

**Circuit：**

The output of Light Sensor is analog signal, so we connect it to A0 of Seeeduino.

LED Bar needs 10 IOs, about the connection, please refer to [LED Bar](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Sketchbook -&gt; light_sensor.

We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger.

To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
