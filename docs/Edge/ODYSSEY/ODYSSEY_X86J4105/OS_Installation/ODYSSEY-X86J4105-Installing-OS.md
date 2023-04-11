---
description: ODYSSEY - X86J41x5
title: Original OS
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Installing-OS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
--- -->

This tutorial demonstrates how to create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04) onto the ODYSSEY - X86J41x5.

## Hardware Requirements

- A Working Computer

- A USB Drive(>= 8GB is recommended)

- A Monitor

- Keyboard and Mouse

## Creating a Bootable USB

### Step 1 - Download the Operating System Image

Download your required OS Image to your local drive. In this tutorial, *Ubuntu Desktop 18.04* is used to demonstrate to install into the ODYSSEY - X86J41x5.

- You can download [Ubuntu](https://ubuntu.com/download/desktop) OS Image from here.

### Step 2 - Prepare your Bootable USB

Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select `Format`.  

**Note:** Choose `FAT32` for the File System.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Step 3 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Step 4 - Writing the OS Image into USB

Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Installing Operating System (Ubuntu)

### Step 1 - Selecting Bootable USB as Boot Device

Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing **`F7`** to enter the Boot Manager Screen. And use  &#8593; and &#8595; Key on keyboard to select your bootable USB.

In this Tutorial, `UEFI: Mass Storage Device 1.00` is the bootable USB.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png" /></div>

### Step 2 - Installing the OS

Select the **`Install ubuntu`** and press Enter. Follow through the installing instructions on the screen, i.e. system language, user name, location and etc.

**Note:** For detail steps of Installing ubuntu, you can follow [this](https://www.youtube.com/watch?v=vt5Lu_ltPkU) video for more information. *The Installing part starts at 3:20 in the video.*

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png" /></div>

### Step 3 - Reboot and Enjoy New OS

If everything goes well, ubuntu should be installed on the ODYSSEY - X86J41x5 and you can start enjoying your new OS!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" /></div>

## Notes

- **Ubuntu 16 is not supported by ODYSSEY - X86J41x5**

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
