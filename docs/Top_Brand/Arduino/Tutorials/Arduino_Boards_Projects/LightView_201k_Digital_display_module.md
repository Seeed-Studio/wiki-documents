---
description: LightView 201k Digital display module
title: LightView 201k Digital display module
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LightView_201k_Digital_display_module
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LightView 201k Digital display module
category: Tutorial
bzurl:
oldwikiname: LightView 201k Digital display module
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
--- -->

Start Guide for LightView 201k Digital Display
This guide will show you how to connect the LightView 201k digital display with the camera shield to easily get started.

1. Materials

- Seeeduino V3.0
- Camera Shield
- LightView 201k Digital Display

2. Connection

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/Lightviewdisplay.png)

1. – Brightness+
2. – Brightness-
3. – GND
4. – AV-
5. – AV+
6. – GND
7. – VCC (3.9~5V)

You need to connect only 4 lines.

1. 4 AV- =&gt; V_OUT- of Camera Shield (need soldering a 2PIN header)

2. 5 AV+ =&gt;V_OUT+ of Camera Shield(need soldering a 2PIN header)

3. 6 GND =&gt; GND of Arduino

4. 7 VCC =&gt; 5V of Arduino

The final assembly looks like:

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/图片2.jpg)

3. How it works
The display only needs an AV input. The camera shield is used to generate the AV signal. You need not uploading any code into the Seeeduino. Seeeduino only did one thing: power the camera shield. Outputing AV signal is the build-in functionality of the VC0706 chipset used at Camera Shield. In another words, you may not need the Seeeduino+Camera Shield. What you need is an AV signal. You can connect the display to any kind of TV box which can output the AV signal. You can also connect the display to GoPro’s AV output. That’s it.

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
