---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Configure the Parameters
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /configure_param_for_wio_tracker
last_update:
  date: 9/14/2023
  author: Jessie
---


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

#### Add Seeed Board

Navigate to `Arduino IDE` -> `Preferences`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

Copy this URL to `Additional boards manager URLs`, then click `OK`.

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

Click `Board Manager`.
Search `Seeed nRF52 Boards` and install it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>


Then need to select the Board and Port.<br/>
Search `Seeed Wio Tracker 1110` and select it, choose the port and click `OK`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
The port should be like 'Serial Port(USB)'
:::




#### Wio Tracker 1110 examples

SenseCAP provides `Wio Tracker 1110 Examples` for users to get started quickly.

Navigate to the `File` tab, select `Example`-> `Wio Tracker 1110 Examples`, then choose the one you need.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>


### Configure the region

The default region of the factory firmware is EU868, to configure the region, replace the 'Region' part in the LoRaWAN example.

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

Then click `Upload` to upload the program.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

You can also use the `Serial Monitor` button in the upper right corner to check the logs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>
