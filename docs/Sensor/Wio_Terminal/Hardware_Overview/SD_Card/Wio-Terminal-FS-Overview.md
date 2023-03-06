---
description: Overview
title: Overview
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-FS-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Overview

This repo introduce how to install the File System library used on Wio Terminal. It provides basic functionality of File operating with the SD card, allowing to Read/Write in or from the SD card using SPI interface.

## Installing the File System Library

1. Visit the [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) repositories and download the entire repo to your local drive.

2. Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_FS` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Installing the Dependent SFUD Libraries

1. Visit the [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) repositories and download the entire repo to your local drive.

2. Now, the SFUD library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_SFUD` file that you've have just downloaded.

## MicroSD Card Format

- **Maximum MicroSD Card Capacity: `16GB`**

- **MicroSD Card Format Supported:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT
