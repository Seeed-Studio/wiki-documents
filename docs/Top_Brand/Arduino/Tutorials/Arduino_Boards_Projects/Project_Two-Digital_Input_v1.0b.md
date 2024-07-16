---
description: Project Two - Digital Input v1.0b
title: Project Two - Digital Input v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Two-Digital_Input_v1.0b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Two - Digital Input v1.0b
category: Tutorial
oldwikiname:  Project Two - Digital Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
--- -->

The purpose of this project is to demonstrate two forms of digital input – using the button Grove and the tilt switch Grove . Pressing the button will light the LED, and activating the tilt-switch will light the LED.

**Wiring it:**

1. Connect the LED Module to the D1/D2 Digital I/O jack, like it was in Projects 1.

2. Arduino Pin D1 powers the LED on the Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.

3. Connect the Tilt Switch Grove to the D5/D6 Digital I/O jack.

4. The Tilt Switch Grove's SIG connector sends a high or low signal to the Arduino's D5 digital input.

5. Connect the Button Module to the D7/D8 input jack (on the second row.)

6. The Button Grove uses the SIG connector to send a signal to the Arduino's D7 digital input.
![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg)

_**Now upload the following Arduino sketch:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

}
```

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
