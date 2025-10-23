---
description: This guide will help you set up and configure network connections for your SenseCAP Watcher Agent
title: Device Network Setup Guide
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Network Setup
  - IoT Configuration
  - WiFi Configuration
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /device_network_setup
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Device Network Setup Guide

This document will guide you through the network configuration process for your SenseCAP Watcher Agent. Follow these steps to easily connect your device to your network and get started.

The following video serves as a step-by-step tutorial on how to configure your device using the Web Control Panel.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Prerequisites

Before starting the configuration, please ensure you have the following:

- SenseCAP Watcher with Agent firmware installed
- Available 2.4GHz Wi-Fi network (Except for networks that require secondary authentication, e.g., enterprise networks)
- Mobile device or computer for configuration

## Network Configuration Steps

### Initial Setup

Step 1. Power up your device
- Connect the device to a power source, or press and hold the scroll wheel button in the upper right corner for 5 seconds and then release.
:::tip Note
If the configuration starts immediately after flashing the firmware, use a pin to gently press the reset button.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- The device will power on and enter  Wi-Fi configuration mode



### WiFi Configuration

Step 1. Connect to Device Hotspot
- On your mobile device or computer, look for a WiFi network named "Watcher-XXXX"
- Connect to this network
- Wait a few seconds for the connection to establish
- A configuration interface should automatically open in your browser
:::note
If the configuration page doesn't open automatically, ensure you're still connected to the "Watcher-XXXX" network and manually navigate to `http://192.168.4.1` in web browser.
:::

Step 2. Configure WiFi Connection
- Wait approximately 5 seconds for the WiFi scan to complete
- From the list of available 2.4GHz networks, select your home Wi-Fi network
- The SSID will be automatically filled in
- Enter the password for your selected WiFi network
- Click the "Connect" button to submit

:::note
Only 2.4GHz networks are supported
If using an iPhone hotspot, enable the "Maximum Compatibility" option
The WiFi scanning page may take about 5 seconds to load - please don't close or cancel the page
:::

Step 3. Complete Connection Process
- If the WiFi credentials are correct, the device will connect automatically
- A green checkmark will appear, indicating successful network configuration
- The device will automatically restart after 3 seconds
- After restarting, the device will automatically connect to the configured WiFi network

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 


### Device Registration

Step 1. Device display a verification code
- Listen/Look for the 6-digit verification code
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

Step 2. Register Device
- Access the [SenseCraft AI-Watcher Agent platform](https://sensecraft.seeed.cc/ai/watcher-agent)
- Configure your Agent according to this [WiKi](https://wiki.seeedstudio.com/watcher_web_control_panel/)

### Basic Operations

1. Power On
   - Press and hold the scroll wheel for 3-5 seconds, then release

2. Power Off
   - Unplug the power supply
   - Press and hold the scroll wheel for 3 seconds, then release

3. Restart
   - Use a pin to gently press the reset button

4. Factory Reset
   - Press and hold the scroll wheel for 10 seconds

5. Re-enter Network Configuration Mode
   - When the device display "Scanning Wi-Fi" state
   - Press the scroll wheel once
   - The device will re-enter network configuration mode

## Troubleshooting

If you encounter connection issues:

1. Common Problems
   - Double-check the Wi-Fi name and password
   - Ensure you're connecting to a 2.4GHz network


## FAQ

**Q: Why can't I find the Watcher-XXXX network?**

A: Try use a pin to gently press the reset button again to restart the device and enter configuration mode.
If you have previously paired to a network, restart device and press the scroll wheel once while the device is displaying "Scanning Wi-Fi" to re-enter pairing mode

**Q: What should I do if the configuration page doesn't load automatically?**

A: Manually navigate to `http://192.168.4.1` in web browser while connected to the Watcher-XXXX network.

**Q: How to access other Wi-Fi networks?**

A: When "Scanning Wi-Fi" is displayed upon startup, press the scroll wheel to enter the wifi configuration mode. The configured wifi will be saved.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>