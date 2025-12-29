---
title: Seeed Studio XIAO ESP32-C5 Connect to HomeAssitant
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_homeassistant
last_update:
  date: 12/17/2025
  author: Zeller
  sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting XIAO ESP32-C5 to Home Assistant

This wiki tutorial will demonstrate how to connect the Seeed Studio XIAO ESP32-C5 to Home Assistant, as well as how to control devices or transmit data after connecting Grove modules to the XIAO ESP32-C5. So, let's get started!

## Introduction to [Home Assistant](https://www.home-assistant.io/)

Home Assistant is a powerful open-source home automation platform that allows you to control and monitor your smart home devices from a single, unified interface. It acts as the central hub for your smart home, enabling you to automate routines, monitor sensors, and create a more intelligent living space.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Learn More 🖱️</font></span></strong></a>
</div>

## [ESPHome](https://esphome.io/) Integration

ESPHome is an open-source firmware creation tool specifically designed for ESP8266 / ESP32 devices. It allows you to create custom firmware using simple YAML configuration files, which can then be flashed to your device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Learn More 🖱️</font></span></strong></a>
</div>

## Method 1: Using ESPHome

This example will connect to Home Assistant via ESPHome.

### Hardware Preparation

You need to prepare the items listed in the table.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Red LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Check More 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Install The Firmware

If you have not set up Home Assistant, you can click this link and follow the official Home Assistant tutorial to complete the setup.[Home Assistant Installation](https://www.home-assistant.io/installation/)

**Step 1.** Install ESPhome<br/>

If you have already installed ESPHome, you can skip this step.

- Go to **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- Start ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Make sure that the version of ESPHome you have installed is **greater than or equal to 25.11.5**; otherwise, it may not support the XIAO ESP32-C5.
:::

**Step 2.** Add new device

Go to ESPHome, and click on the **Add New Device** button at the bottom right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Add a new device and name it **XIAO ESP32-C5**.
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**Step 3.** Install  firwmare

<details>
<summary>Reference YAML File Configuration</summary>

:::tip
You need to modify the parameters to match those of your device, such as the API key, SSID, password, and so on. In addition, the XIAO ESP32-C5 supports dual-band WiFi (2.4 GHz & 5 GHz), which means you can connect it to the 5 GHz router in your home.
:::

```yaml
esphome:
  name: xiao-esp32-c5
  friendly_name: XIAO ESP32-C5

esp32:
  board: esp32-c5-devkitc-1
  variant: esp32c5
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: 

ota:
  - platform: esphome
    password: 

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32-C5 Fallback Hotspot"
    password: 

captive_portal:
  # Example configuration entry
output:
  - platform: gpio
    pin: GPIO1
    id: led_gpio_output
    inverted: false

switch:
  - platform: output
    name: "LED Switch"
    output: led_gpio_output
    id: dev_board_led
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>

Click **INSTALL** to install the code to the device and you will see the following image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='Install through browser'>

:::tip
If your Home Assistant Host (Raspberry PI/Green/Yellow etc.) is far away from you, we recommend using this method. You can install it with the computer you have on hand.
:::

First, you need to click **Manual download** to download the compiled firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Open this website where we will upload the firmware to the XIAO ESP32-C5.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
Go back to ESPHome to download the firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>
<br/>
Select Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use USB cable to **connect the device to your computer** and click **CONNECT**.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>
<br/>
Select usbmodemxxx(Windows is COMxxx) and click connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Click **INSTALL** and select the firmware you just downloaded.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
If your Home Assistant Host (Raspberry PI/Green/Yellow etc.) is nearby, we recommend using this method as it is simpler.
:::

Before you install the code to the device, you need to use USB cable to **connect this device to your Raspberry Pi or HA Green(Yellow) etc** which is running Home Assistant.

Click the options following the image to install the code to the device.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

Wait a moment and you will see the feedback like the following image. It means the code is running successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
This is the simplest way, but on the premise that when installing the program for the first time, you should first upload the program to the ePaper Panel using the method on the left. After that, you can upload it via wifi. Also, make sure your YAML configuration includes properly configured `ota` and `api` sections with valid encryption keys for this method to work.
:::

In this way, you don't need to connect the XIAO ESP32-C5 to anything, just make sure it is online.

Click the option and then the firmware will be installed to ePaper penal automatically.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Wait a moment and you will see the feedback like the following image. If it fails, it may be due to a weak signal. Please move the device closer to your router.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**Step 4.** Add Device

- Navigate to **Settings** → **Devices & services**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>

- ESPHome Device -> Add.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_6.png" style={{width:800, height:'auto'}}/></div>

- If you have opted to add a secret key, you need to enter it, which can be found in the YAML file you created.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_7.png" style={{width:800, height:'auto'}}/></div>

- The following screen will be displayed after a successful addition.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_8.png" style={{width:800, height:'auto'}}/></div>

### Display on the Dashboard

**Step 1.**  Open Overview -> Click Edit in the upper right corner

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_9.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Create a section and name it **LED Control** -> Add the Card

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_10.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Add by entity -> Search **XIAO ESP32-C5** -> Continue

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_11.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Select **Add to dashboard** in the pop-up window -> Click **Done** in the upper right corner to complete the addition.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_12.png" style={{width:800, height:'auto'}}/></div>

- The effects are as follows:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_13.png" style={{width:800, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_effect_1.gif" style={{width:800, height:'auto'}}/></div>

## Method 2: [Seeed Home Assistant Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery)

- **Seeed HA Discovery** is a complete solution for easily connecting ESP32/nRF52840 devices to Home Assistant, provided by [Seeed Studio](https://www.seeedstudio.com/).<br/>
- With just a few lines of code in Arduino IDE or PlatformIO for your XIAO series development boards, you can connect to Home Assistant via WiFi or BLE.<br/>
- Here we will use an example of reading a greenhouse temperature and humidity sensor to show you how to use Seeed Home Assistant Discovery to connect the XIAO ESP32-C5 to Home Assistant.

### Hardware Preparation

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Check More 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Install HACS  Instagram

Before adding the **Seeed Home Assistant Discovery** integration, you need to install **HACS** first.

Installation Steps:

1. Settings -> Devices & services -> Add integration -> Search **HACS**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_1.png" style={{width:800, height:'auto'}}/></div>

2. Select all options -> Submit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_2.png" style={{width:800, height:'auto'}}/></div>

3. Click on the hyperlink and copy the activation code within it.

4. Enter the activation code mentioned earlier

5. Return to HomeAssistant -> Developer tools -> Reboot system

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_3.png" style={{width:800, height:'auto'}}/></div>

6. The left navigation bar shows HACS

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_4.png" style={{width:800, height:'auto'}}/></div>

### Install Integration

- One-Click Installation via HACS (Recommended)

1. Open HACS -> Integrations:

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_1.png" style={{width:800, height:'auto'}}/></div> -->

2. Click the **⋮** icon in the upper right corner -> **Custom repositories**

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_2.png" style={{width:800, height:'auto'}}/></div> -->

3. Enter `https://github.com/limengdu/Seeed-Homeassistant-Discovery`, elect category **Integration**

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_3.png" style={{width:800, height:'auto'}}/></div> -->

4. Click Add, then search for **Seeed HA Discovery** and install

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_4.png" style={{width:800, height:'auto'}}/></div> -->

5. Restart Home Assistant

### Install Arduino Library

#### Install the WiFi Dependency Library

- For Arduino IDE

1. Download the `arduino/SeeedHADiscovery` folder

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Copy to `C:\Users\yourname\Documents\Arduino\libraries\`

3. ArduinoJson (by Benoit Blanchon)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_5.png" style={{width:800, height:'auto'}}/></div>

4. WebSockets (by Markus Sattler)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_6.png" style={{width:800, height:'auto'}}/></div>

- For PlatformIO

```ini
lib_deps =
    bblanchon/ArduinoJson@^7.0.0
    links2004/WebSockets@^2.4.0
```

#### Install the BLE Dependency Library

- For Arduino IDE

1. Download the `arduino/SeeedHADiscoveryBLE` folder

2. Copy to `C:\Users\yourname\Documents\Arduino\libraries\`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. NimBLE-Arduino

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_7.png" style={{width:800, height:'auto'}}/></div>

- For PlatformIO

```ini
lib_deps =
    h2zero/NimBLE-Arduino@^1.4.0
```

### Write Arduino Program

Choose the corresponding version according to your actual needs.

<Tabs>
<TabItem value='WiFi Version Code'>

```cpp
#include <SeeedHADiscovery.h>

const char* WIFI_SSID = "Your WiFi Name";
const char* WIFI_PASSWORD = "Your WiFi Password";

SeeedHADiscovery ha;
SeeedHASensor* tempSensor;
SeeedHASensor* humiditySensor;

void setup() {
    Serial.begin(115200);
    ha.setDeviceInfo("Living Room Sensor", "ESP32-C5", "1.0.0");
    ha.enableDebug(true);

    if (!ha.begin(WIFI_SSID, WIFI_PASSWORD)) {
        Serial.println("WiFi connection failed!");
        while (1) delay(1000);
    }

    tempSensor = ha.addSensor("temperature", "Temperature", "temperature", "°C");
    tempSensor->setPrecision(1);

    humiditySensor = ha.addSensor("humidity", "Humidity", "humidity", "%");
    humiditySensor->setPrecision(0);
}

void loop() {
    ha.handle();

    static unsigned long lastUpdate = 0;
    if (millis() - lastUpdate > 5000) {
        lastUpdate = millis();
        tempSensor->setValue(25.5);
        humiditySensor->setValue(55);
    }
}
```

After uploading the code, open the serial monitor. Once the WiFi connection is successful, the corresponding IP address will be printed.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_8.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ESP-C5 supports dual-band WiFi (2.4 GHz & 5 GHz).<br/>
If you find manual network configuration too cumbersome, you can also use the firmware flashing webpage we launched.: [Web Firmware Flasher](https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/)
:::

</TabItem>

<TabItem value=' BLE Version Code'>

```cpp
#include <SeeedHADiscoveryBLE.h>

SeeedHADiscoveryBLE ble;
SeeedBLESensor* tempSensor;
SeeedBLESensor* humiditySensor;
SeeedBLESensor* batterySensor;

void setup() {
    Serial.begin(115200);
    ble.enableDebug(true);

    if (!ble.begin("XIAO Temperature Sensor")) {
        Serial.println("BLE initialization failed!");
        while (1) delay(1000);
    }

    // Use BTHome standard sensor types
    tempSensor = ble.addTemperature();
    humiditySensor = ble.addHumidity();
    batterySensor = ble.addBattery();
}

void loop() {
    // Set sensor values
    tempSensor->setValue(25.5f);      // Temperature 25.5°C
    humiditySensor->setValue(55.0f);  // Humidity 55%
    batterySensor->setValue(100.0f);    // Battery 100%

    // Send BLE broadcast
    ble.advertise();

    // Wait 10 seconds (BLE is suitable for low frequency updates)
    delay(10000);
}
```

After uploading the code, open the serial monitor, and the Bluetooth information of the XIAO ESP32-C5 will be output.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_9.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Add Device in Home Assistant

<Tabs>
<TabItem value='WiFi Device'>

It Will be automatically discovered! Or add manually:

1. Go to **Settings** -> **Devices & Services**

2. Click **Add Integration**

3. Search for **Seeed HA Discovery**

4. Enter the IP address of the ESP32

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_10.png" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value='BLE Device'>

It uses BTHome protocol, will be automatically discovered by Home Assistant!

1. Make sure HA has a Bluetooth adapter or ESP32 Bluetooth proxy

2. Device will automatically appear in Settings -> Devices & Services -> BTHome

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_11.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Effect Demonstration

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
Congratulations! By now, you should have mastered two methods to connect the **XIAO ESP32-C5** to **Home Assistant**. We look forward to seeing your amazing projects and welcome you to share them with us!

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
