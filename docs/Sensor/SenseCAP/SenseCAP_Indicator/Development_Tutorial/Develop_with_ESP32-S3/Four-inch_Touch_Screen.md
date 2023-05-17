---
description: 4-inch Touch Screen
title: 4-inch Touch Screen
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4-inch_Touch_Screen
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **4-inch Touch Screen**

The SenseCAP Indicator is equipped with a 4-inch touch screen, which can customize the UI interface you need.
In this tutorial, we will guide you on how to use the LvGL (Light and Versatile Graphics Library) graphics library for SenseCAP Indicator.


**Pixel Coordinates Systems**

A digital 2-D image is made up of rows and columns of pixels. A pixel in the image is specified by saying which column and which row the pixel is in. In simple terms, a pixel can be identified by a pair of integers providing the column number and the row number. 

Conventionally, columns are numbered from the top left to right, starting from zero, but in some cases, it can also start from other corners(by setting rotation).

**16-bit colour model**

Pixels also expressed in colour form, so also better to cover some colour models. The 16 bit colour model is good for MCUs to work with so this is a good start. The colour model consists of 3 colour components - Red, Green, and Blue. Depending on the colour model, these 3 colour components will be stored into 16 bits variable.



| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Red   | Red   | Red   | Red   | Red   | Green   | Green   | Green   | Green   | Green   | Green   | Blue   | Blue   | Blue   | Blue   | Blue   |




**LCD Screen Initialisation**

To initialise the LCD screen on SenseCAP Indicator:

```
lcd init:
bsp_board_init()
```










    
# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc
