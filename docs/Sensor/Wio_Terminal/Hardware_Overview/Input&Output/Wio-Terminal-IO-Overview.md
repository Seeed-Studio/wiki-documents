---
title: Overview
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /Wio-Terminal-IO-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Overview

This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!

## Hardware Schematics

### Wio Terminal RPI Pinout

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

Wio Terminal has 40 pin GPIO breaking out from the SAMD51, which has the same breakout as the Raspberry Pi!

To use them, simply use the defined pin names as above! Some pins are multifunctional so can be referenced by different ways.

#### *For more information, please check `variant.h` for more information*

### Wio Terminal Grove Port Pinout

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

As you can see, There are two Grove Ports available on Wio Terminal. One is the default **I2C Port** and other one is **configurable Digital/Analog Pin**, it can also be used for PWM outputs. Both Grove ports can be used as Digital.

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
