---
description: ODYSSEY - X86J41x5
title: Android-x86 Installation
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Installing-Android
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-Android/
sku: 102110399
--- -->

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" /></div>

This tutorial demonstrates how to install the Android-x86 on the ODYSSEY-X86J41x5 and use it as a smart TV box to watch live stream TV or media from local storage(such as NAS) with the help of [Kodi](https://kodi.tv/).

The Android-x86 is a project to port Android open source project to x86 platform, formerly known as "patch hosting for android x86 support". For more reference, please visit the official [Android-x86](https://www.android-x86.org/).

## Hardware Requirements

- A Working Computer

- USB Drive x 1 (>= 8GB is recommended)

- A Monitor

- Keyboard

## Download the Android-x86 OS Image

First, download the [Android-x86 OS Image](https://www.android-x86.org/download.html) into your drive. It should be a `.iso` file.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png" /></div>

In this tutorial, `android-x86-7.1-r4-k419` is used.

## Creating a Bootable USB

### Step 1 - Prepare your Bootable USB

Format one of the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select `Format`.  

**Note:** Choose `FAT32` for the File System.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Step 2 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Step 3 - Writing the OS Image into USB

Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Installing the Android-x86

### Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5

Plugin your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing **`DEL`** key to enter the setup screen. Navigate to **`Advanced`** -> **`CSM Support`** and press Enter to enable it.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Step 2 - Install the OS

Reboot your ODYSSEY - X86J41x5 and keep pressing **`F7`** to enter the boot manager screen. Select the bootable USB (Installer) and press Enter.

**Note:** Remember to choose the one that has the Android-x86 iso image on it.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Step 3 - Installing process

Under **GRUB options**, select `Advanced options`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png" /></div>

Select `Android-x86** Auto Install to specific harddisk`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png" /></div>

This goes into the installation process and you can choose where the Android-x86 is installed on ODYSSEY-X86. Here is installed onto the onboard eMMC.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png" /></div>

Select `Yes` for confirmation:

<div align="center"><img src="https://files.seeedstudio.com/wiki/
ODYSSEY-X86J4105-Installing-Android/4.png" /></div>

Now, the installing process is taking place and once it's done, select `Reboot`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png" /></div>

Take out the bootable USB and reboot the device. Android-x86 should be booted up.

!!!Note
        If not booted up properly, please press F7 and select the drive you installed Android-x86 to boot from.

## Configurations

If everything goes well, you will booted into the Android-x86 like the screen below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png" /></div>

This may look familiar with people who use Android phones!

## Setting up as Smart TV Box

To get ODYSSEY-X86J41x5 to work as a smart TV Box, we will need to install [Kodi](https://kodi.tv/).

Kodi is a free, open source piece of media centre software that can run on anything from your Android phone to your home PC, and plenty of other devices in between. And of course it supports Android-x86!

### Download and Install KODI for Android-x86

You can download the [Kodi for Android-x86 here](https://mirrors.kodi.tv/releases/android/x86/). You may want to download it from another PC and save the `.apk` file into a USB drive and install the app from USB.

### Kodi IPTV Settings

Open **Kodi** and navigate to **TV** -> **More Add-on**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png" /></div>

Choose **PVR clients**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png" /></div>

Select **PVR IPTV Simple Client**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png" /></div>

Select **configure** and type in the **IPTV streaming `m3u` url**. You may check this [`iptv repo`](https://github.com/iptv-org/iptv/blob/master/README.md) for reference. Select **OK** and remember to **enable**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png" /></div>

REboot the Kodi and you should have channels loaded! Now you have truned your ODYSSEY-X86 into a Smart TV Box!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png" /></div>

### Boot from Start-up

If you want the ODYSSEY-X86 to boot Kodi from boot up, you can simply achieve this by installing `Boot apps` from the Google Play Store!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png" /></div>

Install the app and select Kodi as boot from start apps!

## Resources

- [Kodi](https://kodi.tv/)

- [How To Use Kodi – Everything You Need To Know for Unlimited Streaming](https://troypoint.com/how-to-use-kodi/)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
