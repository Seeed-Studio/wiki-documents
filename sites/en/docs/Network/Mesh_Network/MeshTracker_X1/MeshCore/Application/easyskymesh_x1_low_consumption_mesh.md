---
description: This guide explains how to use EasySkyMesh with MeshTracker X1 to build low-power IoT sensor networks based on MeshCore.
title: Power Saving
keywords:
  - EasySkyMesh
  - MeshCore
  - MeshTracker X1
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png
slug: /easyskymesh_x1
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/easyskymesh_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# EasySkyMesh IoT Firmware for MeshTracker X1

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) is a community project based on [MeshCore](https://meshcore.io/) that focuses on building low-power firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png" style={{width:600, height:'auto'}}/></div>

EasySkyMesh adds features for **power saving and sensor data collection**. Sensor data can be collected by MeshCore nodes and transmitted through an existing MeshCore network. It is particularly useful for:

* Low-power sensor networks
* Remote monitoring
* Solar-powered deployments
* Environmental monitoring
* Infrastructure monitoring
* IoT prototyping

## Firmware Flashing

### Hardware Preparation

Before flashing the firmware, prepare:

* MeshTracker X1. [Click here](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) to get one.
* USB cable
* Computer

Connect the X1 to your computer using the USB Type-C port.

### Download EasySkyMesh Firmware

Go to the [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) page. Select a release that supports your board.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1firmware.png"style={{width:600, height:'auto'}}/></div>


EasySkyMesh releases may provide different firmware files for different hardware and different upgrade scenarios. For a new installation, the project generally provides a fresh-install firmware image. For an existing installation, use the upgrade firmware when you want to preserve the existing configuration.


### Flash the Firmware

The EasySkyMesh project recommends using the MeshCore Web Flasher for supported devices.

**Step1:** Open [MeshCore Web Flasher](https://meshcore.io/flasher)

**Step2:** Select **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Step3:** Select the EasySkyMesh firmware file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/x1folder.png" style={{width:600, height:'auto'}}/></div>

**Step4:** Enter DFU mode if required.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Enter.png" style={{width:900, height:'auto'}}/></div>

**Step5:** Start flashing. Wait until the flashing process is completed. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Flash.png" style={{width:900, height:'auto'}}/></div>

**Step6:** Reboot the device.

## Power Saving

The project provides PowerSaving firmware releases with optimizations for different MeshCore boards. EasySkyMesh releases have introduced power-saving features for ESP32 and nRF52-based devices, as well as additional power-management functions for different MeshCore roles.

### Companion Firmware

All PowerSaving features are enabled by default. RX PowerSaving is set as "balanced".

### Repeater & Room Server Firmware

Powersaving is off by default. You can enable PowerSaving through the MeshCore CLI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

Enable powersaving by:

```text
powersaving on
```

To check the current PowerSaving status:

```text
powersaving
```

[Click here](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) to use more commands.

## Troubleshooting

### The Device Does Not Appear in the Flasher

1. Make sure the USB cable supports data transfer.
2. Reconnect the X1.
3. Enter DFU mode again.
4. Refresh the Web Flasher.
5. Try another USB port or cable.


If the problem persists, check the [EasySkyMesh GitHub repository](https://github.com/IoTThinks/EasySkyMesh) for the latest documentation and issues.

## Resources

* [EasySkyMesh GitHub Repository](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh Flashing Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh Sensor Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## Tech Support & Product Discussion
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>