---
description: Development_Tutorial_of_Wio-Tracker 1110 
title: Development Tutorial
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /development_tutorial_for_Wio-trakcer
last_update:
  date: 9/4/2023
  author: Jessie
---


## Preparation

* Wio-Tracker 1110 Dev Board
* Computer x 1
* USB Type-C Cable x 1

### Device connection

Connect th Wio-Tracker 1110 Dev Board to your PC by a USB Type-C cable.

### Setup your toolchian

#### Install Arduino IDE

The Arduino IDE (Integrated Development Environment) is an open-source software, mainly used for writing, compiling & uploading code to almost all Arduino Modules.
It is available for all operating systems i.e. MAC, Windows, Linux and runs on the Java Platform that comes with inbuilt functions and commands that play a vital role in debugging, editing and compiling the code.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software">
            <strong><span><font color={'FFFFFF'} size={"4"}> Arduino IDE Download </font></span></strong>
    </a>
</div>

:::info
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::


### Firmware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/rm-overview.png" alt="pir" width={800} height="auto" /></p>


#### Add Seeed Board


Click `Board Manager`.
Search `Seeed nRF52 Boards` and install it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>


Then need to select the Board and Port.<br/>
Search `Seeed Wio Tracker 1110` and select it, choose the port and click `OK`.

:::info
The port should be like 'Serial Port(USB)'
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>


### Install Library
