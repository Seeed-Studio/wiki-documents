---
description: SenseCAP Indicator - LoRaWAN Application
title: LoRaWAN Network - SenseCAP Indicator
keywords:
- LoRaWAN
- ESP32S3
- SenseCAP
- IoT
- Firmware Update
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 12/21/2023
  author: Spencer
---

# SenseCAP Indicator Application with LoRaWAN

## Overview

This wiki entry serves as a comprehensive guide to using the SenseCAP Indicator with LoRaWAN, detailing its functionality, setup process, and practical applications.

### Key Features

- **LoRaWAN Compatibility:** Efficient long-distance data transmission using the low-power LoRaWAN protocol.
- **Real-Time Data Transmission:** Seamless uploading of sensor data to the LoRaWAN network.
- **Responsive Downlink Communication:** Capable of receiving downlink messages from the network, indicated by the state change of the on-device light(simulated).
- **User-Friendly Interface:** Easy setup and operation, suitable for both beginners and advanced users in IoT.


## Setup and Configuration

### Requirements

- SenseCAP Indicator
- Computer with internet access
- Access to LoRaWAN Network server(Here we choose The Things Network (TTN))

### Firmware Update and Connection

Ensure your SenseCAP Indicator is running the latest firmware for optimal performance and security.
> Follow [this page](/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware) to build your own firmware.

1. **Download Firmware:** Visit the [GitHub Releases](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases) page to download the latest version of the LoRaWAN firmware for the SenseCAP Indicator. Check the [firmware flashing guide](/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware) if you're interested in building your own firmware.

2. **Flash Firmware:** Use the esptool (install instructions [here](https://github.com/espressif/esptool)) to flash the downloaded firmware onto the SenseCAP Indicator. Ensure you have the necessary drivers and tools installed on your computer.

3. **Connect to LoRaWAN Network:** After flashing the firmware, set up the device on The Things Network (TTN). Note the essential parameters like Device EUI and APPkey for the next steps.

### Configuring the TTN Console

Before your SenseCAP Indicator can communicate, you need to configure it on the TTN Console:

1. **Add Device:** Log into the TTN Console and add the SenseCAP Indicator as a new device under your application.

2. **Configure Device:** Input the necessary parameters, including Device EUI, Application EUI, and APPkey, to ensure proper communication between the device and the LoRaWAN network.

## Operating the SenseCAP Indicator

### Data Transmission

- **Uploading Sensor Data:** With the SenseCAP Indicator connected to LoRaWAN, observe the sensor data being transmitted to the TTN Console in real-time.
- **Viewing Data:** Access the TTN Console to view the uploaded data. You can monitor various metrics depending on the sensors connected to your SenseCAP Indicator.

### Downlink Communication

- **Sending Downlink Messages:** Schedule a downlink message from the TTN Console to the SenseCAP Indicator.
- **Indicator Response:** Monitor the SenseCAP Indicator's light or other responses to confirm successful reception of the downlink message.


## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.com/invite/QqMgVwHT3X) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!