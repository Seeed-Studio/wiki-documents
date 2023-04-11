---
description: Overview
title: Overview
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBH-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Overview

This repo introduces how to use the Wio Terminal as a USB-Host, which means you could plug USB devices into the Wio Terminal and play with it just like a computer!

This functionality is dependent on [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD). The library has been tested with Wio Terminal(SAMD51) and working properly.

## Installing the USB Host Library SAMD

1. Visit the [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) repositories and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_LCD` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## USB Host Configurations

To enable USB Host on Wio Terminal, you must configure two pins. Need to set `PIN_USB_HOST_ENABLE` to **LOW** and `OUTPUT_CTR_5V` to **HIGH**.

You can do this simply by adding the following code in the `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```
