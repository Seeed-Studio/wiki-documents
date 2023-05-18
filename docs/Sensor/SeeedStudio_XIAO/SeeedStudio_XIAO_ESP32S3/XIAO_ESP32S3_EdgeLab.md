---
description: EdgeLab Getting Start with Seeed Studio XIAO ESP32S3.
title: EdgeLab Getting Start with Seeed Studio XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
- edgelab
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_edgelab
last_update:
  date: 10/04/2023
  author: LynnL4
---

# EdgeLab Getting Start with Seeed Studio XIAO ESP32S3

## Introduction
[EdgeLab](https://edgelab.readthedocs.io/en/latest/) is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implemention more user-friendly, achieving faster and more accurate inference on embedded devices.

## Hardware Required
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C Cable

## Software Required
- ESP-IDF v4.4
- EdgeLab v0.1.0
- Example Code: [edgelab-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## How to Install 
### Install ESP-IDF

### Install the ESP IDF

Follow the instructions of the
[ESP-IDF get started guide](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)
to setup the toolchain and the ESP-IDF itself.

The next steps assume that this installation is successful and the
[IDF environment variables are set](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables). Specifically,
* the `IDF_PATH` environment variable is set
* the `idf.py` and Xtensa-esp32 tools (e.g., `xtensa-esp32-elf-gcc`) are in `$PATH`

### get submodules
cd to the root directory of the project and run the following command to get the submodules:

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## How to Use
### Build the example

Go to example directory (`examples/<example_name>`) and build the example.

Set the IDF_TARGET (For ESP32-S3 target, IDF version `release/v4.4` is needed)

```
idf.py set-target esp32s3
```

Configure the example

```
idf.py menuconfig
```

- Select the Camera Module in `Component config` -> `Edgelab Configuration` -> `Camera Configuration` -> `Select Camera Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- Select the LCD Module in `Component config` -> `Edgelab Configuration` -> `LCD Configuration` -> `Select LCD Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-lcd.png)


To build this, run:

```
idf.py build
```


### Load and run the example

To flash (replace `/dev/ttyUSB0` with the device serial port):
```
idf.py --port /dev/ttyUSB0 flash
```

Monitor the serial output:
```
idf.py --port /dev/ttyUSB0 monitor
```


## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>


