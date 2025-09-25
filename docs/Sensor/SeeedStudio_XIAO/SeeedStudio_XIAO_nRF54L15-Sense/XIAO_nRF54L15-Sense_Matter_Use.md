---
title: Seeed Studio XIAO nRF54L15 Matter
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## Introduction

The nRF54L15 from Nordic Semiconductor is a next-generation ultra-low-power wireless SoC designed for the Internet of Things. It supports multiple protocols, including Matter, Thread, Zigbee, Bluetooth LE, and NFC, enabling developers to build interoperable and future-proof smart home devices.

With the rise of Matter as a unified connectivity standard promoted by the Connectivity Standards Alliance (CSA), the nRF54L15 provides a robust development platform to explore and validate Matter applications. Its high performance, low power consumption, and integrated multiprotocol radio make it well suited for both consumer smart home products and industrial IoT devices.

In this documentation, we will walk through the Matter example applications available in the Nordic SDK for the nRF54L15. These examples demonstrate key features such as device onboarding, secure communication, and interaction with common ecosystems like Apple HomeKit, Google Home, and Amazon Alexa.


## Prerequisites

To begin developing a Matter application on the XIAO nRF54L15, ensure that the following hardware and software components are prepared and ready.

### Hadware
- Seeed Studio XIAO nRF54L15 board
- Support Matter Hub(e.g.Echo Dot)

### Software

:::tip
Before running the example, ensure that the XIAO nRF54L15 has been configured in the nRF Connect SDK. If not completed, refer to this [Wiki](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/) guide.
:::

## Quick Started with Matter Example

### Create a Matter routine
In the nRF Connect extension for VSCode, select:Create New Application → Copy Example → Enter “matter” → Select Matter Thermostat
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:900, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:900, height:'auto'}}/></div>
:::tip
- Please note that your SDK version must be 3.0.2. Versions below this may cause errors.

- Currently, only two routines are supported. Additional routines will be gradually added in the future.
:::

### Configure the development board

Create the following two files under the board directory, naming them respectively

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

Navigate to the `sysbuild/mcuboot/boards` directory and add the following two files:

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

###  Enable Partition and DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>

### Build Project
- Open the Add Build Configuration window.
- In the SDK field, select the required version (e.g., nRF Connect SDK v3.0.2).
- In the Toolchain field, select the matching version.
- For Board target:`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flashburn-in program
- Open the nRF terminal
- Just enter the west flash command,To flash your device, simply enter the west flash command. The path highlighted in red indicates the location of your compiled .elf file. You can use this same path to find the corresponding .hex file, which is suitable for programming with a J-Link debugger.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Add Matter device
After compiling and flashing the firmware to the XIAO nRF54L15, you can use the nRF Serial Terminal tool to view debug logs and retrieve the device commissioning QR code.

**Setp 1.** Open Manager Toolchains and launch the Terminal Tools.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**Setp 2.** In the sidebar toolbar, select nRF Serial Terminal to access the serial port.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**Setp 3.** From the pop-up menu, choose the serial port that corresponds to your XIAO nRF54L15.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**Setp 4.** Once the terminal is open, you will see a commissioning QR code link printed in the log. Copy this link and open it in your browser to generate the Matter device QR code.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**Setp 5.** Scan this QR code with a Matter-compatible platform to add your device.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>

## Reference & Resources

If you're new to Matter, the following resources provide foundational knowledge and development support for working within the Matter ecosystem:

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: An ideal starting point to learn the fundamentals of Matter, covering essential concepts and components of the ecosystem.
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**: A comprehensive guide through the Matter development process, including necessary tools, resources, and best practices for effective implementation.
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**: Technical specifications for the Matter protocol and its components. This is the primary resource for understanding the protocol’s capabilities and operational details.
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: An in-depth explanation of the device data model, which standardizes how device features and capabilities are represented in the Matter ecosystem.
- **[Matter Development Framework Overview](/matter_development_framework)**: A guide specifically tailored to the Matter Development Framework for the XIAO ESP32C6, offering an alternative approach for Matter device development.

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
