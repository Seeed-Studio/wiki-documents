---
description: 光传感器和LED灯条
title: 光传感器和LED灯条
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Light_Sensor_and_LED_Bar
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
本演示将向您展示如何使用光传感器。为了指示光强度，我们需要一个LED灯条。

**所需硬件：**

* Arduino

* 光传感器

* LED灯条

**电路：**

光传感器的输出是模拟信号，所以我们将其连接到Seeeduino的A0端口。

LED灯条需要10个IO口，关于连接方式，请参考[LED Bar](https://arduino.cc/en/Tutorial/BarGraph)。

![](https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png)

**代码：**

打开Arduino IDE，点击File -> Sketchbook -> light_sensor。

我们可以使用analogRead()来读取光传感器的值，这个值将指示光的强度。当光线更强时，值更大。

为了使数据更加平滑，我们需要一些简单的滤波。我们读取32次值，并取平均值。

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