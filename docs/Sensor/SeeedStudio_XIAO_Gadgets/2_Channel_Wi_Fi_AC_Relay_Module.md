---
title: 2-Channel Wi-Fi AC Relay Module In Home Assistant
description: |
  A smart device from Seeed Studio designed to control AC-powered appliances wirelessly
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /2_channel_wifi_ac_relay
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Spencer
  date: 2024-11-27T03:21:36.491Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with 2-Channel Wi-Fi AC Relay Module In Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

## Overview

The **[2-Channel Wi-Fi AC Relay Module](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** is a smart device from Seeed Studio designed to control AC-powered appliances wirelessly. Its dual-channel configuration supports independent control of two loads, making it an excellent choice for automating household appliances such as lights, fans, and other devices in a Home Assistant environment.

This guide provides a detailed walkthrough, including setup, integration, and advanced configuration for users ranging from beginners to smart-home enthusiasts.

### Key Features and Specifications

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Input Voltage</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Output Voltage</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Maximum Load</th>
            <td>10A per channel</td>
        </tr>
        <tr>
            <th>Channels</th>
            <td>2 (independent control for each channel)</td>
        </tr>
        <tr>
            <th>Connection Type</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Input Terminals</th>
            <td>N (Neutral), L (Live)</td>
        </tr>
        <tr>
            <th rolspan="2">Output Terminals</th>
            <td><b>Channel 1:</b> N1 (Neutral), L1 (Live) <br></br> <b>Channel 2:</b> N2 (Neutral), L2 (Live)</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Safety Warning

Always disconnect AC power before wiring the relay. Avoid using the USB port while the device is connected to AC power to prevent electrical hazards.

:::

### Physical Layout and Connections

#### Input and Output Terminals

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- Input
  - **N (Neutral)**: Connect the neutral wire from the AC power supply.
  - **L (Live)**: Connect the live wire from the AC power supply.
- Output
  - Channel 1
    - **N1 (Neutral)**: Neutral wire for the load connected to Relay 1.
    - **L1 (Live)**: Live wire for the load connected to Relay 1.
  - Channel 2
    - **N2 (Neutral)**: Neutral wire for the load connected to Relay 2.
    - **L2 (Live)**: Live wire for the load connected to Relay 2.

## Getting Started

### Requirements

1. **Core Components**:
   - [2-Channel Wi-Fi AC Relay Module](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Network**:
   - Stable Wi-Fi for seamless interaction between hardware and Home Assistant.

### Step 1: Set Up the Relay Module (Physical Setup)

1. **Installation**: homeassistant is already pre-installed in [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Enabling ESPHome Add-on**:
   - Access the Home Assistant dashboard.
   - Navigate to the "Add-ons" section and search for the ESPHome add-on.
   - Click "Install" and then "Start" to enable it.
   - Once installed, configure the add-on to ensure proper communication with the XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

By gathering the necessary components and setting up Home Assistant with the ESPHome add-on, you'll be ready to proceed with the integration of the 2-Channel Wi-Fi AC Relay Module.

### Step 2: Preparing the Relay Module

By default, your device (XIAO ESP32C3) comes pre-flashed with firmware for 2-Channel Wi-Fi AC Relay Module. However, there are two scenarios where you may need to update the firmware:

1. **Re-flashing the Firmware**: If the existing firmware is corrupted or you need to start fresh.
2. **Upgrading the Firmware**: If there is a newer version of the firmware with improved functionality.

There are two simple methods for flashing the firmware:

:::caution
Firefox does not support flashing firmware on ESP devices. Please use Google Chrome or Microsoft Edge instead.
:::

<Tabs>
<TabItem value='Web Tool'>

You can use this [Web Tool](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/) for an easy and direct method to flash your firmware. Simply follow the on-screen instructions.

- Click the `CONNECT` button to initiate the connection. The tool will automatically update the firmware.

If something goes wrong, follow the on-screen troubleshooting steps or switch to the `ESPHome Web` method to complete the process.

</TabItem>
<TabItem value='ESPHome Web'>

For this method, you'll need to download the `bin` firmware file from [here](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)(you'll need to unzip the downloaded file).

1. Connect the sensor kit to your PC.
2. Visit the [ESPHome Web](https://web.esphome.io/) page.
3. Select the firmware file with the `*.factory.bin` suffix.

Watch the following video for a detailed walkthrough of flashing the firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

With either method, you'll have your firmware updated and ready for integration with Home Assistant.

### Step 3: Network Configuration

1. **Enable Access Point**:
   - Upon powering up for the first time, the module will create a Wi-Fi network (SSID: `seeedstudio-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Access Configuration**:
   - Connect to the network using a phone or PC.
   - Open a browser and navigate to `http://192.168.4.1`.
   - Enter the SSID and password of your home Wi-Fi network.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant Integration**:
   - Once connected to the home network, the module will be discoverable in Home Assistant under `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

This way, you can connect the module to your Home Assistant network and let Home Assistant discover it.

### Step 4: Add the module device

1. **Automatic Discovery**:
   - Ensure the **ESPHome** is installed in Home Assistant.
   - Navigate to `Settings -> Devices & Services -> Integrations` and look for the device.
2. **Manual Configuration**:
   - If not automatically discovered, manually add the device by specifying its IP address.

After adding the device, you can see both switches in the Overview page. You can also set the name of each switch individually.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## Safety and Maintenance

1. Periodically inspect wiring for wear and tear.
2. Use proper circuit protection devices, such as fuses or breakers.
3. Keep the device away from water and excessive heat.

## FAQs

1. **What happens if the device is disconnected from Wi-Fi?**
   - The module will attempt to reconnect automatically. If it fails, it will enable its fallback access point for reconfiguration.
2. **Can I use the USB port while connected to AC power?**
   - No, using USB while connected to AC power may damage the device or create a safety hazard.
3. **Can this module work without Home Assistant?**
   - Yes, the module can be controlled via its **local IP address** or integrated with other platforms that support ESPHome or MQTT.

## Resources

- **GitHub Repository**: Access the ESPHome Firmware at the [Seeed Studio Dual Channel Relay Module GitHub page](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_2_channel_wifi_ac_energy_meter).
- **Dual Channel Relay Module Schematic**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
