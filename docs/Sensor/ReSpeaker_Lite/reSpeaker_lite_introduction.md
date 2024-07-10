---
description: Getting Started with ReSpeaker Lite
title: Getting Started with ReSpeaker Lite
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
last_update:
  date: 6/28/2024
  author: Jessie
---

## Introduction



ReSpeaker Lite is a plug-and-play modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices, or any other things in your daily life, all by your voice. The ReSpeaker project provides hardware components and software libraries to build voice-enabled device.

## Features

* **USB Plug-and-Play Convenience**： Support UAC 2.0

* **Audio Versatility**: Supports both 5W speaker and 3.5mm audio jack

* **Intuitive Privacy Controls**: Take control of your privacy with the accessible MUTE and USER buttons

* **Smart Home Ready**: Fully compatible with Home Assistant through the XIAO controller

* **Built-in audio processing algorithms**:
 Speech algorithms and features<br/>
 Voice Activity Detection<br/>
 Noise Suppression<br/>
 De-reverberation<br/>
 Acoustic Echo Cancellation<br/>

## Specification


## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/hardware.png" alt="pir" width={500} height="auto" /></p>


## Get Started

### Update firmware

* [Firmware Download](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/ffva_ua_v2.0.3.bin)


#### Install DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) is a command line tool for Device Firmware Upgrade via USB port.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

* Download the latest version of [dfu-util](http://dfu-util.sourceforge.net/releases) to your local system, e.g., under `D:\dfu-util`.

* Install `dfu-util.exe`

* Append the path of the `dfu-util.exe` to the system environment variable `Path`: "My Computer" > "Properties" > "Advanced" > "Environment Variables" > "Path". 

Please note that paths in the variable `Path` are seperated by semicolon `;`. This will allow dfu-util to be executed globally in command prompt.

* Install the [driver](https://zadig.akeo.ie/)


</TabItem>

<TabItem value="mac" label="MacOS">

Use "brew" to install or follow the instructions from [the official website](http://dfu-util.sourceforge.net/).

* Install [brew](http://brew.sh/) or start the Terminal to install it directly:

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

* In the Teminal, type this command to install the dfu-util:

```
brew install dfu-util
```

* Add the path of `dfu-util` to `PATH`:
```
export PATH=$PATH:PATH_TO_DFU_UTIL
```

This will allow dfu-util to be executed globally in command prompt.


</TabItem>

<TabItem value="lin" label="Linux">

* Download the [dfu-util](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries/linux-i386/) or use the package manager of your distribution to get the latest version:

```
$ sudo apt-get install dfu-util
```
* Add UDEV rule:

```
sudo nano /etc/udev/rules.d/77-mm-usb-device-blacklist.rules
```

Simply add this single line:

ATTRS{idProduct}=="d058", ATTRS{idVendor}=="2b04", MODE="664", GROUP="plugdev"

If it prompts "Cannot open DFU device", just reboot to try again.
</TabItem>

</Tabs>




#### Flash Firmware


* Connect the ReSpeaker board to your PC.

* Run the following command:
```
dfu-util -e -a 1 -D ffva_ua_v2.0.3.bin
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/flash-done.png" alt="pir" width={500} height="auto" /></p>

:::tip
After flashing is completed, please restart the board.
:::







