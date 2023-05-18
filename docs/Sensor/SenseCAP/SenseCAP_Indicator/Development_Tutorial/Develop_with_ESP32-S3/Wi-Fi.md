---
description: Wi-Fi
title: Wi-Fi
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wi-Fi
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **Wi-Fi**






[**Examples**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

This [directory](https://github.com/espressif/esp-idf/tree/master/examples/wifi) contains a series of project examples that demonstrate Wi-Fi functionality and provides code that you can copy and adapt into your own projects.

**Using Examples**

Before building an example, be sure to follow the ESP-IDF Getting Started Guide to ensure you have the required development environment.

Building an example is the same as building any other project:

- Step 1: Change into the directory of the new example you'd like to build.

Run the following command to select the correct chip target to build before opening the project configuration menu:

`idf.py set-target esp32s3`

(By default the target is esp32. For all options see idf.py set-target --help)

- Step 2: Run the following command to open the project configuration menu:

`idf.py menuconfig`

Most examples have a project-specific "Example Configuration" section here (for example, to set the WiFi SSID & password to use)

- Step 3: Build the example:

`idf.py build`

Follow the printed instructions to flash, or run
`idf.py -p PORT flash`



    
# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc

