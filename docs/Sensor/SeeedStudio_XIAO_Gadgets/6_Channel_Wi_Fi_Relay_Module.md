---
title: 6-Channel Wi-Fi Relay Module In Home Assistant
description: |
  A smart device from Seeed Studio designed to wirelessly control devices with safe DC voltage.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 01/04/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with 6-Channel Wi-Fi Relay Module In Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

## Overview

The **[6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)** is a smart device from Seeed Studio designed for control within a safe DC voltage range, not for AC-powered appliances. Its six-channel configuration supports independent control of up to six loads, making it an excellent choice for automating a variety of devices in smart home environments.

In addition to its six relay channels, this module also features two extra Grove expansion interfaces, allowing users to integrate additional sensors or actuators for more advanced automation scenarios.

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
            <td>DC 5V(For XIAO)</td>
        </tr>
        <tr>
            <th>DC withstand voltage</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>Maximum Load</th>
            <td>10A per channel</td>
        </tr>
        <tr>
            <th>Channels</th>
            <td>6 (independent control for each channel)</td>
        </tr>
        <tr>
            <th>Connection Type</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Electrical port</th>
            <td>NO (Normally Open), COM (Common), NC (Normally Closed)</td>
        </tr>
        <tr>
            <th>Grove extension</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Safety Warning

This relay module is designed for low-voltage DC operation. Do not connect it to AC power to avoid electrical hazards. Always disconnect the power supply before wiring the relay to prevent short circuits and electric shock.

Voltages exceeding 24V may cause electric shock or burns, especially in cases of broken skin or in moist environments. Exercise caution when handling electrical devices to avoid injury.

:::

### Physical Layout and Connections

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normally Open)**: The normally open terminal. By default, this terminal is not connected to the common terminal (COM). When the relay is activated, the NO terminal connects to the COM terminal. It is typically used to control a load's switch.
- **COM (Common)**: The common terminal of the relay, shared as a connection point to one side of the circuit.
- **NC (Normally Closed)**: The normally closed terminal. By default, this terminal is connected to the common terminal (COM). When the relay is activated, the connection between the NC terminal and the COM terminal is broken. It is typically used for scenarios requiring disconnection control.

   | XIAO GPIO | Relay Channel |
   | --------- | ------------- |
   | GPIO2     | Relay 1       |
   | GPIO21    | Relay 2       |
   | GPIO1     | Relay 3       |
   | GPIO0     | Relay 4       |
   | GPIO19    | Relay 5       |
   | GPIO18    | Relay 6       |

## Getting Started

### Requirements

1. **Core Components**:
   - [6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Network**:
   - Stable Wi-Fi for seamless interaction between hardware and Home Assistant.

### Step 1: Setting Up Home Assistant {#setting-up-home-assistant}

1. **Installation**: homeassistant is already pre-installed in [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Enabling ESPHome Add-on**:
   - Access the Home Assistant dashboard.
   - Navigate to the "Add-ons" section and search for the ESPHome add-on.
   - Click "Install" and then "Start" to enable it.
   - Once installed, configure the add-on to ensure proper communication with the XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

By gathering the necessary components and setting up Home Assistant with the ESPHome add-on, you'll be ready to proceed with the integration of the 6-Channel relay module.

### Step 2: Preparing the Relay Module

By default, your device (XIAO ESP32C6) comes pre-flashed with firmware for 6-Channel relay. However, there are two scenarios where you may need to update the firmware:

1. **Re-flashing the Firmware**: If the existing firmware is corrupted or you need to start fresh.
2. **Upgrading the Firmware**: If there is a newer version of the firmware with improved functionality.

There are two simple methods for flashing the firmware:

:::caution
Firefox does not support flashing firmware on ESP devices. Please use Google Chrome or Microsoft Edge instead.
:::

<Tabs>
<TabItem value='Web Tool'>

You can use this [Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) for an easy and direct method to flash your firmware. Simply follow the on-screen instructions.

- Click the `CONNECT` button to initiate the connection. The tool will automatically update the firmware.

If something goes wrong, follow the on-screen troubleshooting steps or switch to the `ESPHome Web` method to complete the process.

</TabItem>
<TabItem value='ESPHome Web'>

For this method, you'll need to download the `bin` firmware file from [here](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)(you'll need to unzip the downloaded file).

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
   - Upon powering up for the first time, the module will create a Wi-Fi network (SSID: `seeedstudio-6-channel-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Access Configuration**:
   - Connect to the network using a phone or PC.
   - Open a browser and navigate to [http://192.168.4.1](http://192.168.4.1).
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

After adding the device, you can see all six switches in the Overview page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

You can also set the name of each switch individually.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Step 5: Connect the appliances you want to control

:::warning Safety Warning

This relay module is designed for low-voltage DC operation. Do not connect it to AC power to avoid electrical hazards. Always disconnect the power supply before wiring the relay to prevent short circuits and electric shock.

Voltages exceeding 24V may cause electric shock or burns, especially in cases of broken skin or in moist environments. Exercise caution when handling electrical devices to avoid injury.

:::

1. Wiring:
    - Follow the Physical Layout and Connections section to wire the relay module.
    - Ensure all connections are secure, and there are no exposed wires.
2. Power On:
    - Power on the module through USB.
    - Turn on the DC power supply to control other electrical appliances.

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

- **GitHub Repository**: Access the ESPHome Firmware at the [Seeed Studio 6 Channel Relay Module GitHub page](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6).

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
