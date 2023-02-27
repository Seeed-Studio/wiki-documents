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

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
