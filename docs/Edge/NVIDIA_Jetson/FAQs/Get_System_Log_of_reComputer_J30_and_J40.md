---
description: This wiki provides a step-by-step guide on how to retrieve the boot logs of the reComputer J4012 (or similar device) using the Jetson serial port. 
title: How to get the system log of reComputer J30/J40?
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 1/22/2025
  author: Youjiang
---


This wiki will use the [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) as an example to demonstrate how to retrieve the boot logs of a device via the Jetson serial port.

## Prerequisites

- reComputer J4012/ J4011/ J3010 or J3011
- [USB to Serial (TTL) Module](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- A computer with a serial port debugging tool installed

:::info
You can download and install a serial port debugging tool according to your personal preference. We recommend using [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [XShell](https://www.netsarang.com/en/xshell/) or [MobaXterm](https://mobaxterm.mobatek.net/). 

This tutorial uses MobaXterm.
:::

## Hardware Connection

1. Connect the corresponding pins of the J15 interface to the USB2TTL module.
2. Connect the USB2TTL module to the computer with the serial port debugging tool installed.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## Get System Log

**Step1.** Obtain the identification number of the USB2TTL module recognized by the computer.

:::note
If your computer is running Windows, you can find the recognized identification number in the Device Manager.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**Setp2.** Open the serial port debugging tool, configure the serial port number, and set the baud rate to `115200`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**Setp3.** Power on the Jetson. If everything is working correctly, you should see the system boot logs in the serial port debugging tool window.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="Get Sys Log of reComputer J30/J40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
