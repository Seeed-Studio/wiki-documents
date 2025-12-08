---
description: Get Started with SenseCAP Indicator for Meshtastic
title: Get Started with Indicator for Meshtastic
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
last_update:
  date: 12/3/2024
  author: Michelle Huang
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator is a 4-inch touchscreen device designed for [Meshtastic®](https://meshtastic.org/), powered by dual MCUs, the ESP32 and RP2040, and supports Wi-Fi, BLE, and LoRa®. It is an open-source, powerful IoT development platform.

## Introduction

### Feature

- **Supports Meshtastic:** Pre-flashed with Meshtastic firmware, it is ready to work once powered on. You can also upgrade the firmware using Meshtastic Flasher.<br/>
- **Dual MCUs and Rich GPIOs:** Equipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options.<br/>
- **Local LoRa® Hub for IoT Connectivity:** Integrated with the Semtech SX1262 LoRa® chip, the device can be converted to a LoRaWAN® Single-Channel Gatewa via tutorial. Alternatively, connect LoRa® devices to popular IoT platforms like Matter via Wi-Fi.<br/>
- **Fully Open Source Platform:** Leverage the extensive ESP32 and Raspberry Pi open-source ecosystem for infinite application possibilities.<br/>
- **Suitable for Multiple Application Scenarios:** Can be used as a Meshtastic desktop node or a car node, as well as a LoRaWAN® Single-Channel Gateway.

### Specification

|Screen|3.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|**Screen Resolution**|480 x 480 pixels|
|**Power Supply**|5V-DC, 1A|
|**Battery**|N/A|
|**Processor**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit up to 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ up to 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|Support up to 32GB Micro SD Card (not included)|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|Support 862-930MHz|
|**Buzzer(Not developed yet)**|MLT-8530, Resonant Frequency：2700Hz|
|**Certification**|CE/FCC|

### Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Get Started
:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.
1. Not finishing the message transmission process
2. Being configured
:::

### Flash Application Firmware

:::caution note
Before flashing the firmware, please make sure that the indicator you purchased is the version for Meshtastic. Do not flash the Meshtastic firmware onto an indicator that is not compatible with Meshtastic. This may cause hardware damage. Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

**Video Instruction**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Select the target device to `Seeed SenseCAP Indicator` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Press and hold the button while plugging in the USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Enable the `Full Erase and Install`, and click `Erase Flash and Install`.

There will show 2 ports, select the `USB serial port` and click `Connect`.

:::caution note
Please select the `USB Serial` one, not the INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Flash GPS Firmware(optional)

The SenseCAP Indicator doesn't have a GPS built-in, to get the GPS location, a [Grove GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html) is required.<br/>
Connect the GPS Module to the Grove port and then flash the GPS firmware.

- **[GPS Firmware Download](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Long press this internal button using a needle, then connect the device to your PC by the provided USB type-C cable, release the button once connected.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Download the `UF2` file and copy it to the `RPI-RP2` drive. Firmware should be flashed after the file is downloaded and the device reboots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

Download `Meshtastic` App:

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### Connect via App

- Power on the device, the device page will display the mac address of the current device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code and then click `Pair` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configure the Parameters

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.

:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::

Now that you have set the LoRa region on your device, you can continue with configuring any [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) to suit your needs.

### Keyboard

:::tip note
The keyboard usage of version 2.5.xx(The factory firmware is v2.5.11.) and version newer than 2.6.xx is different. Please check the following according to your current firmware version.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### For version2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### For version2.6 +

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### FAQ

#### RP2040 part

RP2040 has not been developed yet, so the `buzzer`/`SD card`/`map` functions are not available yet. We are working with Meshtastic to optimize it.

#### Role Selection

:::caution
DO NOT select the `Repeater` role, which will cause the device to repeatedly reboot.
:::

#### GPS Module

If you didn't connect the GPS module, please disable the GPS function in the `Meshtastic` App, otherwise the device will keep trying to find the GPS module, which will cause the device to take a long time to boot up the screen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
