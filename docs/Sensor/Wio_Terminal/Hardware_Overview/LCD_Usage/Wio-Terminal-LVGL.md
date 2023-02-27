---
title: How to use LvGL Graphics Library
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LVGL/
slug: /Wio-Terminal-LVGL
last_update:
  date: 01/11/2022
  author: gunengyu
---

# How to use LvGL Graphics Library for Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

In this tutorial, we will teach you how to use the [**LvGL**](https://lvgl.io/) (Light and Versatile
Graphics Library) graphics library for Wio Terminal. This is a port from the original [lv_arduino](https://github.com/lvgl/lv_arduino) to Wio Terminal.

[**LvGL**](https://lvgl.io/) is an open-source graphics library providing everything you need to create embedded GUI with easy-to-use graphical elements, beautiful visual effects and low memory footprint.

## Hardware Required

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Get Started

- Follow [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) before the followings.

### Install the Seeed_Arduino_LvGL

1. Visit the [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) repositories and download the entire repo to your local drive.

2. Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_LvGL` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Examples

#### 1. Bench Mark

This is the benchmark demo of LvGL graphics library on Wio Terminal, simply upload the `benchmark.ino` to the device using Arduino IDE:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    The current port of the FPS under benchmark demo is not displaying properly, please stay tune to more updates.
:::

#### 2. Stress Test

This is the benchmark demo of LvGL graphics library on Wio Terminal, simply upload the `lv_stresss.ino` to the device using Arduino IDE:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

For more usage, you may also use the [**official document of LvGL**](https://docs.lvgl.io/latest/en/html/index.html) and [Arduino Example](https://github.com/lvgl/lvgl/tree/master/examples/arduino) for more reference.

## Resources

- [Official document of LvGL Library](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
