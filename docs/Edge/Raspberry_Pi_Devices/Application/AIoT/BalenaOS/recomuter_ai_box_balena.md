---
description: This tutorial will show you how to compile, configure and burn balenaOS for recomputer AI Box.
title: Build balenaOS for reComputer AI R2140
keywords:
  - Edge
  - reComputer R2140
  - balena
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/recomputer_ai_r2140.webp
slug: /recomputer_ai_r2140_balena
last_update:
  date: 11/4/2025
  author: JiahaoLi
---

[balena](https://www.balena.io/) is an Internet of Things (IoT) platform designed to help developers build, deploy, and manage IoT  applications across a fleet of devices. It supports a wide range of device architectures and includes features for containerized application deployment, making it possible to easily update your IoT software and HostOS, fix bugs and introduce new features on your IoT applications. balena provides a unified way to push code updates, manage device configurations and ensure devices run reliably and securely in the field, regardless of their location or network conditions.


<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation


<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

>Note: Prepare an SD card and a card reader to burn the image.

### Software

- A [balenaCloud](https://balena.io) account (sign up here) and get the first 10 devices free.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balena.png" alt="pir" width="800" height="auto" /></div>

- [balenaEtcher](https://etcher.balena.io/) to flash the reComputer R2140 memory.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balenaEtcher.png" alt="pir" width="800" height="auto" /></div>

### Creat fleet on balena cloud

Please refer to the process in the image below to create the fleet：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/creat_fleet.png" alt="pir" width="800" height="auto" /></div>

### Add device

Please refer to the process in the image below to add new reComputer AI R2140：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/add_device.png" alt="pir" width="800" height="auto" /></div>

### Install balena OS

Please refer to the process in the image below to install balena OS：
<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/install_image.png" alt="pir" width="800" height="auto" /></div>


### Flash balena OS

Please refer to the process in the image below to flash balena OS to SD card：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/flash_image.png" alt="pir" width="800" height="auto" /></div>


The image below shows what it looks like after the flashing is complete：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/finish_image.png" alt="pir" width="800" height="auto" /></div>


### Test device

Insert the flashed SD card into the recomputer AI box, then power it on and connect the Ethernet cable. After 2 minutes, you should be able to see the new device in Balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/test_device.png" alt="pir" width="800" height="auto" /></div>


When you click on the device, you'll enter the screen shown in the image below, which means you can remotely control the device.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/resul.png" alt="pir" width="800" height="auto" /></div>


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
