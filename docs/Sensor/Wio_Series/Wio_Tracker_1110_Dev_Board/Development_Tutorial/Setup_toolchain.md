---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Setup Your Toolchain
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /setup_toolchain_for_wio_tracker
last_update:
  date: 9/19/2023
  author: Jessie
---


The Wio Tracker 1110 Dev Board leverages Arduino to enhance your coding experience, before you start development, need to set up your toolchain first.


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

:::tip
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



### Add Libraries


In the Arduino IDE, you can search for it in the `Library Manager`, e.g. `Seeed_Arduino_AHT20`, and then install it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>Click to preview offline installation</summary>

To install it *offline*, you can **download the repo zip** from GitHub, navigate to **Sketch** -> **Include Library** -> **Add .ZIP Library**, then select the libraries you downloaded.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note Libraries for reference
[Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino Library](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::
