---
description: Chirpstack LNS connection based on Wio SX1262 with XIAO esp32s3 module 
title: Connect to Chirpstack
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

# Wio-SX1262 with XIAO ESP32S3 Kit Connect to Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>

## Overview

LoRaWAN is a low-power, wide-area networking protocol built on top of the LoRa technique. It wirelessly connects devices to the internet and manages communication between end-node devices and network gateways.

Followed the Get Started for Lora, we configured Wio-SX1262 with XIAO ESP32S3 as one channel hub lora gateway.

This wiki page explains how set up LoraWAN based on Wio-SX1262 with XIAO ESP32S3 kit as single channel gateway exchange data. And also connect the Sensecap S210x lora sensor node to Wio-SX1262 with XIAO ESP32S3 kit and transmit the sensor data to Chirpstack.

## Install Chirpstack locally

Please refer to [instruction](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.) for installing Chirpstack locally.

1. open a browser and visit http://localhost:8080 .

You should see the ChirpStack login page.

2. Sign in with the default username `admin` and password `admin`.

## Add Device Profile

Add device profiles under Tenant:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## Add LaRaWAN Gateway

Register gateway and fill in the gateway EUI:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

Added successfully!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>

## Add SenseCAP LoRa Sensor

### Configure LoRa Sensor via Sensecraft APP

We are going to add a sensecap sensor node to TTN.

**Step 1**. Download and Open the Sensecraft App.

**Step 2**. Press the sensor button and hold for 3 seconds, the LED will flash at 1s frequency.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Step 3**. Please click “Scan” to add new device and start scanning the QR code on device.

**Step 4**. Click the "Advanced Configuration" and select the platform of "Other Platform"

**Step 5**. Select the Frequenct Plan consistent to gateway. We set gateway to EU868 already, so also sensor as EU868.

**Step 6**. The device uses OTAA to join the LoRaWAN network by default. Take down the `device EUI`, `App EUI` and `APP key`.

### Add to Chirpstack

**Step 1**. Create an Application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**Step 2**. Add device in the application and copy the `Device EUI` and `AppKEY` to corresponding blank.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**Step 3**. Check sensor status

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

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
