---
description: Project One - Blink
title: Project One - Blink 
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_One-Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project One - Blink
category: Tutorial
oldwikiname:  Project One - Blink
prodimagename:
surveyurl: https://www.research.net/r/Project_One-Blink
--- -->

The purpose of this project is to demonstrate a simple digital-out display using the LED twig. Connect your equipment as shown in the image below:
Connect the LED Twig to the D1/D2 Digital I/O jack on the Grove Shield.
Arduino Pin D1 powers the Green LED on the Twig's SIG connector.

![](https://files.seeedstudio.com/wiki/Project_One-Blink/img/Blinkv1.0.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);

  delay(del);
  digitalWrite(1, LOW);

  delay(del);
}
```

te simple. The LED alternately blink, with the delay between the two set by the variable del. However, in doing so you can experience for yourself how simple the Grove system is to use.

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
