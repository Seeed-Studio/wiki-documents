---
description: balena is a versatile IoT platform that enables developers to build, deploy, and manage IoT applications across various device architectures with ease, leveraging containerized deployment for seamless updates and robust device management. The reComputer R1000 edge IoT controller, powered by the Raspberry Pi CM4, offers high-performance capabilities for demanding edge computing tasks. Together, balena and reComputer R1000 provide a powerful and scalable solution for efficient and secure IoT application deployment and management in diverse environments.

title: reComputer R1000 with balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng and Kasun Thushara
---

## What is balena?

[balena](https://www.balena.io/) is an Internet of Things (IoT) platform designed to help developers build, deploy, and manage IoT  applications across a fleet of devices. It supports a wide range of device architectures and includes features for containerized application deployment, making it possible to easily update your IoT software and HostOS, fix bugs and introduce new features on your IoT applications. balena provides a unified way to push code updates, manage device configurations and ensure devices run reliably and securely in the field, regardless of their location or network conditions.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

* A [balenaCloud](https://balena.io) account (sign up here) and get the first 10 devices free.
* [balenaEtcher](https://etcher.balena.io/) to flash the CM4 memory.


## Hardware Configuration

**Step 1**: You need to set the switch on the side of the R1000 to boot mode, then power on the device

<div class="table-center">

| Switch Position                                              | Mode        | Description    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

**Step 2**: Please use a USB Type-c cable to connect reComputer R1000 to your computer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

## Image File Acquisition

**Step 1**: Go to balenaCloud, create a free account, and then create a fleet for your Raspberry pi 4 or CM4 device

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/createfleet.gif" alt="pir" width="700" height="auto" /></div>

**Step 2**: Click "Add device", select the version information and configuration information you want, and then download the balenaOS image file in the lower right corner.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Downloadimage.gif" alt="pir" width="700" height="auto" /></div>

:::note
It is recommended to download the balenaOS image file first and then burn it. If you directly click "Flash" in the lower right corner of the window to burn it, it may fail to burn.
:::

## Steps for Flashing balena OS

**Step 1**: Open the [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) software, and then the system will show the new disk

**Step 2**: Open the flash tool [balenaEtcher](https://etcher.balena.io/), select the previously downloaded balena image file, then select the target disk, and finally click Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Burn.gif" alt="pir" width="700" height="auto" /></div>


**Step 3**: After the flashing is completed, set the reComputer R1000 DIP switch to normal mode, then power on again. After a while, you can see the new device has been added successfully on balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/online.png" alt="pir" width="700" height="auto" /></div>

You can see that the online status of the device is `Online (Heartbeat only)`. This is due to the firewall restrictions in my area. If you have the same problem, you can connect a VPN to the device so that it can be displayed normally` Online`.



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