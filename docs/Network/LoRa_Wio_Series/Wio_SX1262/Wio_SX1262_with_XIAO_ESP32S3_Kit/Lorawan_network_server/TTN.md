---
description: TTN LNS connection based on Wio SX1262 with XIAO esp32s3 module 
title: Connect to TTN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## Overview

LoRaWAN is a low-power, wide-area networking protocol built on top of the LoRa technique. It wirelessly connects devices to the internet and manages communication between end-node devices and network gateways.

Followed the Get Started for Lora, we configured Wio-SX1262 with XIAO ESP32S3 as one channel hub lora gateway.

This wiki page explains how set up LoraWAN based on Wio-SX1262 with XIAO ESP32S3 kit as single channel gateway exchange data with TTN. And also connect the Sensecap S210x lora sensor node to Wio-SX1262 with XIAO ESP32S3 kit and transmit the sensor data to TTN(The Things Network).

## Add LoRaWAN Gateway

Click and create a new account of TTN: https://www.thethingsnetwork.org/.

If you have an account can visit https://eu1.cloud.thethings.network/ directly.

Log in, then register a gateway.

**Step 1**. Register gateway

**Step 2**. Fill in correct information of `gateway EUI`, `gateway ID` and `frequency plan`.

**Step 3**. Reboot your gateway module and wait for about 2 mins. Then can check the gateway status of connected.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Create an Application

Add new application in TTN

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Add SenseCAP LoRa Sensor

### Configure LoRa Sensor via Sensecraft APP

We are going to add a sensecap sensor node to TTN.

**Step 1**. Download and Open the Sensecraft App.

**Step 2**. Press the sensor button and hold for 3 seconds, the LED will flash at 1s frequency.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Step 3**. Please click “Scan” to add new device and start scanning the QR code on device.

**Step 4**. Click the "Advanced Configuration" and select the platform of "The Things Network"

**Step 5**. Select the Frequenct Plan consistent to gateway. We set gateway to EU868 already, so also sensor as EU868.

**Step 6**. The device uses OTAA to join the LoRaWAN network by default. Take down the `device EUI`, `App EUI` and `APP key`.

There is a more [detailed instruction](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf) for connecting sensecap S210x sensor to The Things Network.

### Register on TTN

Register an end device.

**Step 1**. Select the end device type and fill in JoinEUI(AppEUI from sensecraft). Then click *Confirm*.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**Step 2**. Fill in DevEUI and AppKey.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**Step 3**. Double check provision information filled in, then click register end device. The sensor data would show up on dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## Resource

- [The Things Network](https://eu1.cloud.thethings.network/)
- [Instruction of Sensecap sensor to TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

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
