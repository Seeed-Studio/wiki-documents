---
description: Project Two – Digital Input
title: Project Two – Digital Input
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Two-Digital_Input
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Two – Digital Input
category: Tutorial
oldwikiname:  Project Two – Digital Input
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-The_Basics
--- -->

The purpose of this project is to demonstrate two forms of digital input – using the button and the tilt switch . Pressing either of the buttons will light the respective LED, and activating the tilt-switch will light both LEDs.

1. Connect the LED to the D1/D2 Digital I/O jack, like it was in Projects 1 and

2. Arduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector.

3. Connect the Tilt Switch to the D5/D6 Digital I/O jack.

4. The Tilt Switch Grove's D1 connector sends a high or low signal to the Arduino's D5 digital input.
5. Connect the Twin Button Grove to the D7/D8 input jack (on the second row.)

6. The Twin Button Grove's red button uses the D1 connector to send a signal to the Arduino's D7 digital input, and the green button uses the D2 connector to send a signal to the Arduino's D8 digital input.
7.

![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input/img/Conn-two.jpg)

_**Now upload the following Arduino sketch:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
    pinMode(8, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        digitalWrite(2, HIGH);
        delay(100);
        digitalWrite(1, LOW);
        digitalWrite(2, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }
    if (digitalRead(8)==HIGH)
    {
        digitalWrite(2, HIGH);
        delay(200);
        digitalWrite(2, LOW);
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
