---
description: EdgeBox RPi 200 balena OS Setup
title: EdgeBox RPi 200 balena OS Setup
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 07/20/2023
  author: Marc Pous & Peter Pan
---

## What is balena?

balena is an Internet of Things (IoT) platform designed to help developers build, deploy, and manage IoT  applications across a fleet of devices. It supports a wide range of device architectures and includes features for containerized application deployment, making it possible to easily update your IoT software and HostOS, fix bugs and introduce new features on your IoT applications. balena provides a unified way to push code updates, manage device configurations and ensure devices run reliably and securely in the field, regardless of their location or network conditions.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOS is the key component of the balena ecosystem. balenaOS is an open-source Linux-based operating system, made by balena, which is purpose-built for running containerized applications on embedded devices through balenaEngine, a lightweight, container engine optimized for IoT devices. It's optimized for reliability, robustness, and security, crucial factors for IoT and edge computing environments. Built on the Yocto project, balenaOS supports more than 100 different hardware platforms and includes built-in features like host OS updates and a supervisor API for controlling applications. By leveraging Docker containers, balenaOS ensures application portability and simplifies the development process.

balenaCloud provides a central dashboard to manage your fleet of IoT devices. It simplifies device management with functionality for remote updates, device and applications monitoring, troubleshooting and secure device access. With balenaCloud, you can easily monitor how to deploy applications to one device or thousands of devices with a single git push, balena CLI push or via built-in continuous integration and continuous deployment of your choice. balena is a scalable and robust IoT solution for anyone looking to efficiently manage a fleet of IoT devices, the software and host OS running on them.

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

In this document you will learn how to flash balenaOS to the Seeed Studio EdgeBox-RPI-200 to reduce the friction to update the software and host OS running on your fleet of EdgeBox-RPI-200s. 

### Hardware

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 
* [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) used for flash OS onto the CM4 in the EdgeBox-RPI-200.
* Din rail power supply 24V (DC) in this case `Mean Well HDR-100-24 AC-DC` is used.
* Cables to plug to the power supply with the EdgeBox-RPI-200.

### Software

* A [balenaCloud](https://balena.io) account (sign up here) and get the first 10 devices free.
* [balenaEtcher](https://etcher.balena.io/) to flash the CM4 memory.


## Flash balenaOS on the EdgeBox RPI200

To flash balenaOS on the EdgeBox-RPI-200 you will need to disassemble the device and get the Raspberry Pi Compute Module 4. 

**STEP 1:** Place the CM4 from the EdgeBox-RPI-200 into the [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html), Please follow [the wiki page](/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode) on how to Put CM4 eMMC Storage into USB mass storage Mode with the [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**STEP 2:** go to balenaCloud, create a free account and create a fleet for `Raspberry Pi 4` or `CM4` device types. 

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>


**STEP 3:** Click `Add Device` and download the balenaOS image with your network credentials. 

:::note
Remember that the EdgeBox RPI200 without a WiFi antenna is not going to be able to connect to your WiFi network.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**STEP 4**: Using [balenaEtcher](https://etcher.balena.io/), flash the CM4 with the balenaOS image downloaded from balenaCloud.

**STEP 5**: Once successfully done, place the CM4 back on the EdgeBox-RPI-200 and power it up with the DIN rail power adapter. The device might appear on the balenaCloud dashboard.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Configure the Phoenix Connector GPIO

To access the EdgeBox-RPI-200 Phoenix Connector GPIO it is necessary to update the Device Tree parameters of the default balenaOS image. 

To access the Phoenix Connector GPIO through the `/dev/ttyACM0` or `/dev/ttyACM1` go to `Device Configuration` and change the DToverlays

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

The device tree is defined on Define DT overlays as `"dwc2","dr_mode=host","w1-gpio"`. On Define DT parameters for the default overlay. I added the parameter "enable_serial=1".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

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
