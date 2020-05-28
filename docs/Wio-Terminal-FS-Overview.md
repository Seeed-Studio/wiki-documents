# Overview

This repo introduce how to install the File System library used on Wio Terminal. It provides basic functionality of File operating with the SD card, allowing to Read/Write in or from the SD card using SPI interface.

## FS Library Default Installation

By default, the FS Library is **included inside the Wio Terminal Board Library**. Hence, there is no need to download the FS library again.

## Installing the File System Library Separately

If you want to install the FS library separately, or updating just the FS library, follow the steps below:

1. Visit the [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) repositories and download the entire repo to your local drive.

2. Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_FS` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## MicroSD Card Format

- **Maximum MicroSD Card Capacity: `16GB`**

- **MicroSD Card Format Supported:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT
