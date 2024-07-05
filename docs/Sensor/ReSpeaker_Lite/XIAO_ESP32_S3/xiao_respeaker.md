---
description: Integrating ReSpeaker Lite with XIAO ESP32S3
title: Integrated with XIAO ESP32S3
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_respeaker
last_update:
  date: 7/1/2024
  author: Jessie
---

[Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) leverages 240MHz Xtensa 32-bit LX7 dual-core processor, supporting both WiFi and BLE 5.0 wireless connectivities, a 2.4GHz Rod antenna, allows for deep sleep mode with power consumption as low as 14μA while supporting lithium battery charging management. 

This chapter will guide users on how to play ReSpeaker Lite with XIAO ESP32S3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>


### Flash the I2S firmware


Before we start this chapter, please make sure the ReSpeaker Lite's firmware is the I2S version.

* [I2S Firmware Download](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/ffva_i2s_v1.0.5.bin)


Check [Get Started](https://wiki.seeedstudio.com/reSpeaker_lite_introduction/#update-firmware) to flash the firmware.


### Software Preparation

#### Install Arduino IDE

 Download and Install the stable version of Arduino IDE according to your operating system.

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
 </div>

 <br></br>


#### Install Arduino-ESP32

To start the installation process using the Boards Manager, follow these steps:

* Install the current upstream Arduino IDE at the 1.8 level or later. The current version is at the [arduino.cc](https://www.arduino.cc/en/Main/Software) website.

* Start Arduino and open the `Settings` window.


* Enter one of the release links above into Additional Board Manager URLs field. You can add multiple URLs, separating them with commas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>


* Open `Boards Manager` from the sidebar, search `ESP32` and click `INSTALL`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>


* Restart Arduino IDE.


#### Install ReSpeaker Lite Library


We provide a library for users to quickly start:

Clone this project into the Arduino libraries folder e.g. with the following command:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

Or download the library as `zip` file and add it to the library in Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>
