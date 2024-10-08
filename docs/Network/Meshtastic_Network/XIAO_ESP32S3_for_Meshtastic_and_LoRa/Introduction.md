---
description: The introduction of Meshtastic based on Wio SX1262 with XIAO esp32s3 module
title: XIAO ESP32S3 for Meshtastic & LoRa Introduction
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_xiao_esp32s3_for_meshtastic
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

This thumb-sized LoRa development kit, which consists of the XIAO ESP32S3 and the Wio-SX1262 LoRa module, is an ideal starter kit for Meshtastic and LoRa/LoRaWAN projects. Supporting WiFi, BLE, and LoRa, it includes a built-in power management chip and can be extended via IIC, UART, and other GPIO interfaces, and is compatible with Arduino development.
The XIAO ESP32S3 with wio-sx1262 is a single-channel LoRaWAN LoRa module with a low price and high cost performance. It is suitable for application scenarios with long distance, low power consumption, and small data volume. It supports more than 30 node devices (depending on upload interval, data payload, etc.).

## Features

* **Meshtactic works out of the box**: Pre-flashed with Meshtastic firmware, it is ready to work once powered on.
* **Outstanding RF performance**: Supports LoRa(862-930MHz)  2.4GHz Wi-Fi and BLE 5.0 dual wireless communication, support 2~5km(LoRa) and 100m+(Wi-Fi/BLE) remote communication when connected with U.FL antenna.
* **Thumb-sized Compact Design**: 21 x 18mm, adopting the classic form factor of XIAO, suitable for space-limited projects like wearable devices.
* **Powerful MCU Board**: Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor running at up to 240MHz, mounted multiple development ports, Arduino / MicroPython supported.
* **Elaborate Power Design**: Includes a Type-C USB interface and lithium battery charge management.



## Specification


| Feature | Details |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz |
| LoRa | Based on Semtech SX1262, supports 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Complete 2.4GHz Wi-Fi subsystem |
| Interface (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI(connect to SX1262),11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x Reset button, 1x Boot button |
| Interface (Wio-SX1262) | 1x User button, 1x SPI(connect to ESP32S3) |
| Power | Input voltage (Type-C): 5V <br/> Input voltage (BAT): 4.2V <br/> Charging battery current: 100mA |
| Working Temperature | -40°C ~ 65°C |
| Dimensions | 21 x 17.8mm |


## Hardware Preparation


### Part List

| Item | Quantity |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262 extension board | x1 |
| Wi-Fi antenna | x1 |
| LoRa antenna | x1 |

### Recommended accessories

Compatible with XIAO Expansion Board for adding screens and sensors, and add Grove sensors via the Grove expansion Board.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Expansion Board</th>
      <th>Grove Base for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Hardware Overview

<table align="center">
  <tr>
	    <th>Wio-SX1262 extension board diagram</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense front indication diagram</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense back indication diagram</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Pin List</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

## Flash Firmware

**Step 1**: Firstly, open a browser and visit https://flasher.meshtastic.org/# requires Chrome or Edge browser.

**Step 2**: Then, use a suitable USB cable to connect the device to the PC. You may need to turn off, then **press and hold the BOOT button** while plugging in the USB cable.

**Step 3**: Follow the following instruction provided to perform the subsequent flashing operations. Select the Device as "**Seeed XIAO S3**", Firmware as **the lastest** one, and then click "**Flash**". Don't forget to tick "Full Erase and Install" if you want to cover previous firmware.

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div></td>


## Software Overview

Meshtastic provides multiple platform softwares for users to choose from, including Android app, Apple app, web client. It also provides Python CLI, Linux Native and integration methods for developers to use.

For specific information, please refer to [the official website of Meshtastic](https://meshtastic.org/docs/software/).

* [Android App](https://meshtastic.org/docs/category/android-app/): Android application is available on F-Droid repo and Google Play Store. This allows you to connect to your Meshtastic device from your Android phone via Bluetooth, Wi-Fi (if on the same network) or USB On-The-Go (OTG).
* [Apple App](https://meshtastic.org/docs/category/apple-apps/): It is available on app store. By default, the Meshtastic app for iOS supports the use of native offline Apple Maps.
* [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web is a Meshtastic client that runs directly in your browser.
* [Python CLI](https://meshtastic.org/docs/software/python/cli/): The python pip package installs a "meshtastic" command line executable, which displays packets sent over the network as JSON and lets you see serial debugging information from the meshtastic devices.
* [Linux Native](https://meshtastic.org/docs/software/linux-native/): The device software can also run on a native Linux machine thanks to the Portduino framework.
* [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): The Meshtastic ecosystem is highly extensible and allows easy integration with a number of existing software products and projects.

## Resource

* [Wio SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Wio SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio SX1262 for XIAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>