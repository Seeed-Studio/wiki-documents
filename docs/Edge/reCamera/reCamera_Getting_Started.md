---
description: reCamera Getting Started 
title: reCamera
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reCamera_Getting_Started
last_update:
  date: 09/29/2024
  author: Parker Hu
---

# reCamera Getting Started
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/001.jpg" /></div>

reCamera is a combination of a **processor** and a camera **sensor**.

This combination makes reCamera a standalone system that can handle basic detection and control tasks on its own.

## Set up the working environment

### USB NET setup 
To use USB networking, we enabled UsbNcm and DHCP by default on the system.
UsbNcm is driver-free on Linux, macOS, and the latest Windows systems. You can log in to 
recamera's terminal directly using `ssh recamrea@192.168.42.1` ,`passwd = recamera` .

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

**step4**:Selet `Microsoft` -> `UsbNcm Host Device` then click Next.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**step5**:When the alert bar pops up, select `Yes`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**step6**:Enter ping 192.168.42.1 in a terminal window.
<br />
The following output shows that you have successfully connected to the reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>



### <span id="jump2"> Linux </span>

No extra setup, just plug in a USB cable. Enter `ifconfig`, and you will see the usb1 network adapter. For example: 192.168.42.89. The ip of the device is 192.168.42.1

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

Check the usb network adapter in System Settings -> Network. The ip of the device is 192.168.42.1

### Computer network error


If your Windows 10 System computer has network access issues after using the USB network of reCamera.
Press `win+x` click Control Panel. Select All Control Panel Items -> Network Connections. 
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

Right mouse click UsbNcm Host Device. Select `Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> Uncheck `Automatic metric` -> Enter `255` in the `Interface metric` field -> click `ok`
<br />

Then your network is back up.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

If your computer is running MacOS. You only need to set the priority of the computer network card UsbNcm network card last

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>


## System update and upgrade

You can check out the latest version of the [reCamera OS here.](https://github.com/Seeed-Studio/reCamera-OS)

Manually update the latest OTA firmware:
```bash
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

/mnt/system/upgrade.sh start
```

Manually update the specified version of OTA firmware. You can also update the system version in your branch.

```bash
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.0.5/sg2002_reccamera_emmc_md5sum.txt #Replace it with your branch link

/mnt/system/upgrade.sh start
```

Update the firmware manually using the local ota package.

```bash
/mnt/system/upgrade.sh start sg2002_reCamera_0.0.5_emmc_ota.zip
```
You can change system files to be readable or writable by typing `rootfs_rw on/off`.

Manually restore factory Settings.

```bash
/mnt/system/upgrade.sh recovery
```

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
