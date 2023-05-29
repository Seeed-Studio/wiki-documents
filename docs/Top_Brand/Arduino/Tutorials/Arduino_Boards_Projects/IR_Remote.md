---
description: IR Remote
title: IR Remote
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IR_Remote
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: IR Remote
category: Tutorial
oldwikiname:  IR Remote
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
--- -->
IR is a very common means of communication. This demo will show you how to use IR send and receive module.

Large of household appliances is controled by IR Remote, such as TV, air conditioning and so on.

We can use IR module to control those appliances also.

**Hardware Required：**

* Arduino

* IR Emitter

* IR Receiver

* Button

**Circuit：**

IR Emitter connect to D3 and IR Receiver connect to A4.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png)

**Code:**

There are two part of code: get value of Remote and Send command.

Get Value of Remote：

Open revTest of IRSendRev Library, open Serial Monitor. Take your Remote, press a button, then you can find a series of number had been printed.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png)

This series of number is what we need, note it, we'll use if later.

Send Command

Open Arduino IDE, click File-&gt;Sketchbook-&gt;infrared.

If you had get the value of your TV turn-on-off key, then point infrared emitter to your TV, and press the button.

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
