---
title: XIAO 2-Channel Wi-Fi AC Energy Meter In Home Assistant
description: |
  A smart device from Seeed Studio designed to detect the electricity usage of AC-powered appliances.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - Energy Meter
  - Smart Home
sidebar_position: 5
last_update:
  author: Hugo
  date: 04/01/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with XIAO 2-Channel Wi-Fi AC Energy Meter In Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

## Overview

The **[XIAO 2-Channel Wi-Fi AC Energy Meter](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)** is a smart device from Seeed Studio designed to detect the electricity usage of AC-powered appliances. Its dual-channel configuration supports independent detect of up to two loads, making it an excellent choice for automating a variety of devices in smart home environments.

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
            <th>Channels</th>
            <td>2 (independent detect for each channel)</td>
        </tr>
        <tr>
            <th>Connection Type</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Input Terminals</th>
            <td>L (Live), N (Neutral), PE (Protective Earthing)</td>
        </tr>
        <tr>
            <th>Effective Range of Current Detection</th>
            <td>10mA-100A @ 1mΩ (CT Mode)</td>
        </tr>
        <tr>
            <th>Active Electrical Energy</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Safety Warning

Always disconnect AC power before wiring.

:::

### Physical Layout and Connections

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (Live)**: Connect the live wire from the AC power supply.
- **N (Neutral)**: Connect the neutral wire from the AC power supply.
- **PE (Protective Earthing)**: Connect the protective earthing wire from the AC power supply.
- **CT1, CT2 (Current Transformer)**: Clamp the fixture of current transformer onto the live wire, with the arrow pointing from the power end to the load end.

#### Installation of Current Transformer

1. Firstly, open the fixture and place the wire into its circular area.

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step1.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

2. Then fasten the buckle, press it hard and hear a "click", the installation is complete.

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step2.gif"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::warning Installation of current transformer fixture

When installing the fixture, please ensure that the direction of the current matches the direction indicated by the arrow on the fixture.

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/current_flow_direction.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::

## Getting Started

### Requirements

1. **Core Components**:
   - [XIAO 2-Channel Wi-Fi AC Energy Meter](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [Non-invasive AC Current Transformer](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
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

By gathering the necessary components and setting up Home Assistant with the ESPHome add-on, you'll be ready to proceed with the integration of the XIAO 2-Channel Wi-Fi AC Energy meter.

### Step 2: Preparing the Energy Meter

By default, your device (XIAO ESP32C6) comes pre-flashed with firmware for XIAO 2-Channel Wi-Fi AC Energy Meter. However, there are two scenarios where you may need to update the firmware:

1. **Re-flashing the Firmware**: If the existing firmware is corrupted or you need to start fresh.
2. **Upgrading the Firmware**: If there is a newer version of the firmware with improved functionality.

There are two simple methods for flashing the firmware:

:::caution
Firefox does not support flashing firmware on ESP devices. Please use Google Chrome or Microsoft Edge instead.
:::

<Tabs>
<TabItem value='Web Tool'>

You can use this [Web Tool](https://gadgets.seeed.cc/) for an easy and direct method to flash your firmware. Simply follow the on-screen instructions. (Please choose **SeeedStuido-2CH-EM**)

- Click the `CONNECT` button to initiate the connection. The tool will automatically update the firmware.

If something goes wrong, follow the on-screen troubleshooting steps or switch to the `ESPHome Web` method to complete the process.

</TabItem>
<TabItem value='ESPHome Web'>

For this method, you'll need to download the `bin` firmware file from [here](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)(you'll need to unzip the downloaded file).

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
   - Upon powering up for the first time, the module will create a Wi-Fi network (SSID: `SeeedStudio-2CH-EM`).

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

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

1. **Manual Configuration**:
   - If not automatically discovered, manually add the device by specifying its IP address.

After adding the device, you can see a lighting control switch, two channels of current usage, two channels of power consumption, and the total voltage value on the Overview page.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->
<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png"
        style={{
            width: 'auto',
            height: '680px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

<br />
By clicking on any row icon, you can view the corresponding values and their recent changes in more detail, which are represented by a line graph.
<br /><br />

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_dashboard_detail.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

## Safety and Maintenance

1. Periodically inspect wiring for wear and tear.
2. Use proper circuit protection devices, such as fuses or breakers.
3. Keep the device away from water and excessive heat.

## FAQs

1. **What happens if the device is disconnected from Wi-Fi?**
   - The module will attempt to reconnect automatically. If it fails, it will enable its fallback access point for reconfiguration.

2. **What should I do if the device suddenly loses power unexpectedly?**
   - When the device suddenly loses power, if you want to remove the fixture of current transformer, please wait until the device restarts and is operating normally before removing it, otherwise it may damage the device.

## Resources

- **GitHub Repository**: Access the ESPHome Firmware at the [Seeed Studio Dual Channel Energy Meter GitHub page](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)

- **Dual Channel Energy Meter Schematic**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

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
