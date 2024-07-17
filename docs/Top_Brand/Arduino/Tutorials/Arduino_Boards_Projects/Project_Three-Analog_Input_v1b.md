---
description: Project Three – Analog Input v1.0b
title: Project Three – Analog Input v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Three-Analog_Input_v1b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Three – Analog Input v1.0b
category: Tutorial
oldwikiname:  Project Three – Analog Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
--- -->

The purpose of this sketch is to demonstrate a form of analog input using the potentiometer Grove. We will use this to set the delay for our blinking LEDs from project one.

Connect the LED module to the D1/D2 Digital I/O jack, like it was in Projects 1 and 2.
Arduino Pin D1 powers the LED Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.

Connect the Potentiometer module to the Analog A0/A1 input jack.

The Potentiometer module produces an analog voltage on its SIG output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

![](https://files.seeedstudio.com/wiki/Project_Three-Analog_Input_v1b/img/Analog_Input_v1.0b.jpg)

_**Now upload the following Arduino sketch:**_

```cpp
// Project Three - Analog Input
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

The maximum delay value is 1023, as this is the upper limit of the value returned by the analogRead() function. You could use mathematical functions to increase or scale down the range of the delay.

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
