---
description: reTerminal DM Hardware Guide
title: reTerminal DM Hardware Guide
keywords:
  - Edge
  - reTerminal-DM
  - Hardware Guide
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-hardware-guide
last_update:
  date: 05/19/2023
  author: Peter Pan
---
#  reTerminal DM Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM is A 10.1" open-source industrial HMI - an Integrated Device Master to unify data flow and manage the onsite device.

Based on Raspberry Pi CM4, and as a Panel PC, HMI, PLC, IIoT Gateway all-in-one device, reTerminal DM is a new generation of interactive sensing hub with an IP65 industrial-grade large screen.

It is equipped with rich scalability and hybrid connectivity, supporting CAN bus, RS485, RS232, Gigabit Ethernet port, and other interfaces, as well as powerful wireless communication capabilities such as 4G, LoRa®, WiFi, and BLE.

> \*4G and LoRa® modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly, for 
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

This Wiki will show you how to Assemble and Disassemble the unit to install peripherals components, as well as the option for mounting

## Hardware prerequisite 
You need to prepare the following hardware

- reTerminal DM x 1
- Screw Driver set
  * Phillips + 3.5 bit
  * Phillips + 3.0 bit
  * Slotted - 2.5 bit

### Assembly & Disassembly Back Cover Guide

**STEP 1:** Please carefully place the reTerminal DM screen-down on a flat surface.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>


**STEP 2:** Loosen the screws and remove the back cover.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### Assembly WiFi/BLE Antenna

**STEP 1:** Remove the back cover, take out the silicone plug.

**STEP 2:** Load the antenna SMA connector into the back cover, and screw the antenna into the SMA connector

**STEP 3:** Insert the other end of the antenna feeder (IPEX plug) into the IPEX socket of the CM4.

**STEP 4:** Cover the back cover and lock the screws.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>


### Assembly 4G Module and Antenna

**STEP 1:** Remove the back cover, take out the silicone plug.

**STEP 2:** Load the antenna SMA connector into the back cover, and screw the antenna into the SMA connector

**STEP 3:**  Insert the 4G module into the mainboard socket and lock the screws.

**STEP 4:**  Insert the other end of the antenna feeder (IPEX plug) into the IPEX socket of the 4G module.

**STEP 5:** Cover the back cover and lock the screws.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### Assembly LoRa® Module and Antenna

**STEP 1:** Remove the back cover, take out the silicone plug.

**STEP 2:** Load the antenna SMA connector into the back cover, and screw the antenna into the SMA connector

**STEP 3:**  Insert the  LoRa® module into the mainboard socket and lock the screws.

**STEP 4:**  Insert the other end of the antenna feeder (IPEX plug) into the IPEX socket of the  LoRa® module.

**STEP 5:** Cover the back cover and lock the screws.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### Install PCIe Extension Module

:::note
PCIe Extension Module will be released soon, please stay tuned.
:::

**STEP 1:** Remove the back cover.

**STEP 2:** Insert two sets of 16pin cables into sockets on PCIe Extension Module board and Dual Network Port Board.

**STEP 3:** Load the PCIe Extension Module board into the mainboard and lock the screws.

**STEP 4:** Put the Dual Network Port Board into the DM front cover, and lock the screws.

**STEP 5:** Take off the Network Port Baffle off the expansion Slot.

**STEP 6:** Cover the rear case and lock the screws.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>


### Install SSD

:::note
The M.2 SSD will be install on the PCIe Extension Module which will be released soon, please stay tuned.
:::

**STEP 1:** Remove the Back cover.

**STEP 2:** Load the PCIe Extension Module board into the mainboard and lock the screws.

**STEP 3:** Cover the rear case back and lock the screws.

**STEP 4:** Unscrew the quick remove cover screw and take out the quick remove cover.

**STEP 5:** Load the SSD into the M.2 socket and lock the screws.

**STEP 6:** Put the quick remove cover back on and lock the screws.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### Install Camera

:::note

The PiCamera V2 Module has been tested and working on reTerminal DM, You will need to get a customized long FPC camera module for used on reTerminal DM.

:::

**STEP 1:** Remove the back cover.

**STEP 2:** Insert the camera into the camera bottom board.

**STEP 3:** Insert the camera FPC cable into the socket of the camera bottom board.

**STEP 4:** Install the camera into the front cover and attach a sticker to fix it.

**STEP 5:** Assemble the camera module into the front cover, and lock the screws.

**STEP 6:** Plug the FPC into the mainboard socket, cover the back cover back and lock the screws

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### Install PoE Module

**STEP 1:** Remove the back cover and take out the mainboard.

**STEP 2:** Insert the PoE into the mainboard according to the dot mark.

**STEP 3:** Solder the PoE module on the back of the mainboard.

**STEP 4:** Lock back the mainboard, cover the back cover and lock the screws.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### RTC Battery Replacement

**STEP 1:** Remove the back cover.

**STEP 2:** Insert the RTC battery cable into the RTC battery socket, and attach the RTC battery to the network port.

**STEP 3:** Cover the back cover back and lock the screws.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### Fuse Replacement

**STEP 1:** Remove the back cover.

**STEP 2:** Take out the old fuse in the mainboard fuse socket and put in the new fuse.

**STEP 3:** Cover the back cover back and lock the screws.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### Chassis Grounding Guide

**STEP 1:** Loosen the grounding screw.

**STEP 2:** Load the grounding connector and tighten the screw

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### Terminal Connection Guide

**STEP 1:** Insert the power connector in the direction shown below.

**STEP 2:** Insert the cable connector in the direction shown below

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## Mounting Guide

The reTerminal DM supports multiple installation methods, and users can choose flexibly according to their usage scenarios. It
should be noted that the standard product does not come with the accessories required for Panel Mount and Din Rail Mount, and
defined accessories need to be purchased for installation. For details on accessories, please refer to section 2.3 Optional Interfaces
and Modules.

### Panel Mount

Panel mount Kit for reTerminal DM is required for panel mounting

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### VESA Mount

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### DIN Rail Mount

Sliding Block for Linear Guideway Rail is required for DIN Rail mounting

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

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