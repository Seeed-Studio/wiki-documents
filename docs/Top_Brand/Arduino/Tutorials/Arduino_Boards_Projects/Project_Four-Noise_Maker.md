---
description: Project Four – Noise Maker
title: Project Four – Noise Maker
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Four-Noise_Maker
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Four – Noise Maker
category: Tutorial
oldwikiname:  Project Four – Noise Maker
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
--- -->

The purpose of this sketch is to use the piezo buzzer to make a beeping noise.
The potentiometer is used again as an analog input to vary the delay time.  As you adjust the potentiometer, the speed of the beeps will change.
The picture is incorrect - you need to Connect the Potentiometer to the Analog A0/A1 input jack, like it was in Project 3.
The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.
Connect the Buzzer to the D6/D7 Digital I/O Jack.  The sketch uses Arduino Pin D6 to send power to the Buzzer on its D1 input.

![](https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg)

_**Now upload the following Arduino sketch:**_

```cpp
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```

As you can see, the piezo can be used as another form of digital output. When using this Grove unit, don't forget to set the output pin connected to the Grove back to LOW when you want the sound to turn off.

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
