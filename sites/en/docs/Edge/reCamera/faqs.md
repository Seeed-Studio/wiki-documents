---
description: Connecting network and some potential troubleshoot
title: FAQs
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recamera_network_connection
sidebar_position: 6
last_update:
  date: 04/08/2025
  author: Parker Hu
---

# Frequent Ask Questions

If you encounter a situation where the usb-connected device fails to recognize reCamera during the network configuration for reCamera, as well as the problem of network connection failure after configuring the network, please refer to this article.

It is necessary to modify and configure the computer network environment, including installing drivers on the Windows system, querying network cards on the Linux system, and configuring network priorities on the Mac system.

## Set up the working environment

### USB NET setup

To use USB networking, we enabled UsbNcm and DHCP by default on the system.
UsbNcm is driver-free on Linux, macOS, and the latest Windows systems. You can log in to recamera's terminal directly using `ssh recamera@192.168.42.1` ,`passwd = recamera` .

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

Make sure the Ncm driver is correctly installed on your computer, as shown in the image. You can check this by going to: Device Manager -> Network adapters.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

If your machine does not have this driver, follow the steps below to install Ncm.

#### Install NCM for windows

**step1**:
Press `win+x` and select `Device Manager`.
Find the unrecognized device in `other devices` and select `Update driver`.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**step2**:
Select `Browse my computer for drivers`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**step3:**:
Select `Let me pick from a list of available drivers on my computer`  

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**step4:**:
Select `Network adapters` and then click `next`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**step5**:Selet `Microsoft` -> `UsbNcm Host Device` then click Next.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**step6**:When the alert bar pops up, select `Yes`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**step7**:Enter ping 192.168.42.1 in a terminal window.
<br />
The following output shows that you have successfully connected to the reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

No extra setup, just plug in a USB cable. Enter `ifconfig`, and you will see the usb1 network adapter. For example: 192.168.42.89. The ip of the device is 192.168.42.1

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

Check the usb network adapter in System Settings -> Network. The ip of the device is 192.168.42.1

## Computer network error

### windows

If your Windows 10 System computer has network access issues after using the USB network of reCamera.
Press `win+x` click Control Panel. Select All Control Panel Items -> Network Connections.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

Right mouse click UsbNcm Host Device. Select `Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> Uncheck `Automatic metric` -> Enter `255` in the `Interface metric` field -> click `ok`
<br />

Then your network is back up.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

If your computer is running MacOS. You only need to set the priority of the computer network card UsbNcm network card last

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

The specific Settings are as follows:

**step1**: Select `System Settings`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**step2**: You will see this order, and we are about to change it.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**step3**: Drag all the way to the bottom, and click it.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**step4**: Select `Set Service Order`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**step5**: Drag NCM below Wi-Fi and then click `ok`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**step6**: Finally, you should see the Settings shown

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## Resources

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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
