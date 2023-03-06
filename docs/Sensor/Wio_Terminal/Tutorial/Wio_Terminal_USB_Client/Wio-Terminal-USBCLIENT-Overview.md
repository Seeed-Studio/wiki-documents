---
description: Overview
title: Overview
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Overview

This repo introduce how to use the Wio Terminal as USB-Client, including using it for Human Interface Device(HID) such as keyboard, mouse and etc. It also supports Musical Instrument Digital Interface(MIDI).

This functionality is dependent on [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). The library has been tested with Wio Terminal(SAMD51) and working properly.

## Installing the Adafruit TinyUSB Library for Arduino

1. Visit the [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) repositories and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Adafruit_TinyUSB_Arduino` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)
