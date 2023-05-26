---
title: Overview
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/
slug: /Wio-Terminal-LCD-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Overview

This repo introduce how to install the TFT LCD library used on Wio Terminal. It provides basic graphical functions to the Wio Terminal with minimum effort!

## TFT LCD Library Default Installation

By default, the TFT LCD Library is **included inside the Wio Terminal Board Library**. Hence, there is no need to download the TFT LCD library again. Follow the next tutorials to get you started with the display!

## Installing the TFT LCD Library Separately

If you want to install the TFT LCD library separately, or updating just the TFT LCD library, follow the steps below:

1. Visit the [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD) repositories and download the entire repo to your local drive.

2. Now, the TFT LCD library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_LCD` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Installing the Adafruit Zero DMA Library

Some functions of the TFT LCD Library requires this library.

1. Navigate to `sketch` -> `Include Library` -> `Manager Library`, and a library manager window will appear.

2. Search **Adafruit Zero DMA** and click Install.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg" /></div>

## Tech Support & Product Discussion
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
