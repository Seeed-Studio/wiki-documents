---
description: Project One - Double Blink
title: Project One - Double Blink
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_One-Double_Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project One - Double Blink
category: Tutorial
oldwikiname:  Project One - Double Blink
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
--- -->
The purpose of this project is to demonstrate a simple digital-out display using the LED Grove. Connect your equipment as shown in the image below:
Connect the LED Grove to the D1/D2 Digital I/O jack on the Grove Shield.
Arduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector.

![](https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```

As you can see, it is quite simple. The two LEDs alternately blink, with the delay between the two set by the variable del. However, in doing so you can experience for yourself how simple the Grove system is to use.

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
