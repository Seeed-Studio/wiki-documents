---
description: RFID Control LED
title: RFID Control LED
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RFID_Control_LED
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: RFID Control LED
category: Tutorial
oldwikiname:  RFID Control LED
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
--- -->

125KHz RFID Reader can read data from RFID tag. It's can use for some IoT or Intelligent Control System.

This demo will show you how to Read data from RFID tag, and control a LED.

**Hardware Required：**

* Arduino

* 125KHz RFID Reader

* RFID tag

**Circuit：**

RFID Reader connect to D2, D3.

![](https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png)

**Code:**

RFID Reader module has internal control IC which make it easy to control. When there's a RFID tag close to the Reader, then it'll output the ID of the tag via UART.

You can do some processing in the code for different ID.

The folowing code didn't judge the ID, whatever tag close to Reader, it can change the state of the led.

Open Arduino IDE, click File -&gt; Sketchbook -&gt; RFID Reader.

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
