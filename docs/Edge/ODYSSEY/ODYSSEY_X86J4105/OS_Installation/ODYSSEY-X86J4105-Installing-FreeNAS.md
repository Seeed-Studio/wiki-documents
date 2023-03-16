---
description: ODYSSEY - X86J41x5
title: FreeNAS Installation
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Installing-FreeNAS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-FreeNAS/
sku: 102110399
--- -->

This tutorial demonstrates how to install the open-source Storage operating system.  [FreeNAS](https://www.freenas.org/) is an operating system that can be installed on virtually any hardware platform to share data over a network. By installing FreeNAS on ODYSSEY - X86J41x5 you have built yourself a personal cloud drive!

## Hardware Requirements

- A Working Computer

- USB Drive x 2 (>= 8GB is recommended)

- A Monitor

- Keyboard

## Download the FreeNAS OS Image

First, download the [FreeNAS OS Image](https://www.freenas.org/download-freenas-release/) into your drive. It should be a `.iso` file.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg)

In this tutorial, FreeNAS 11.3 is used. FreeNAS will need to install on a different drive. You can install the FreeNAS on an HDD or SSD Hard Drive.

**Note:** In this tutorial, FreeNAS OS is installed onto a USB drive for convenience.

## Creating a Bootable USB

### Step 1 - Prepare your Bootable USB

Format one of the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select `Format`.  

**Note:** Choose `FAT32` for the File System.

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Step 2 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Step 3 - Writing the OS Image into USB

Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Installing FreeNAS OS

### Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5

Plugin your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing **`DEL`** key to enter the setup screen. Navigate to **`Advanced`** -> **`CSM Support`** and press Enter to enable it.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Step 2 - Install the OS

Reboot your ODYSSEY - X86J41x5 and keep pressing **`F7`** to enter the boot manager screen. Select the bootable USB (Installer) and press Enter.

**Note:** Remember to choose the one that has the FreeNAS iso image on it.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Step 3 - Installing process

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg)

A boot screen like above should appear. Press `Enter` to select the Boot FreeNAS Installer.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg)

Once entered into the installer, an options menu should appear as follow, select **Install/Select** and press `Enter`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg)

Select a drive to install the FreeNAS image. Here we should be able to see the other USB drive.

**Note:** Use `spacebar` to select the USB drive.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg)

A warning will appear stating that everything in the chosen drive will be wiped, simply press Yes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg" /></div>

Create your root password for logging into the FreeNAS from Web interface later.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg)

The installing process will take place, and wait until the installing is finished. When it's done, it should like above.

The installing process is all done, you can reboot the ODYSSEY - X86J41x5 and unplug the bootable USB(Installer).

Plug in the Ethernet cable for internet and can be accessed to the Web interface.

## Configurations

Reboot the ODYSSEY - X86J41x5 and press `F7` again to enter Boot Manager Screen, and choose the USB drive that just installed the FreeNAS.

**Note:** Can also change it in the set-up by pressing `DEL` and set the USB drive as the first boot-up option.

Once booted into the FreeNAS, you should see the Web interface address:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg" /></div>

**Note:** If states Web interface cannot be accessed, please check your internet connection.

Use another computer using the same internet i.e. your laptop to type the address into the web browser:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg)

The user name is `root` and the password is the one set during installation.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg)

If you able see this screen then you have successfully installed the FreeNAS and feel free to add more storage to the ODYSSEY - X86J41x5 and have fun with personal cloud drive!

*For further development, you can visit the [FreeNAS official Forum](https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136) and find out more about plugins and features*

## Acrylic Case

We have also designed an Acrylic Case for building your own NAS into a enclosure! Here provides two versions of enclosure depending on the size of your hard drive:

1. For [**2.5 inches of SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg) Hard Drive.

2. For [**3.5 inches of SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg) Hard Drive.

**Materials Required:**

- 3mm Acrylics sheets

- M3 x 20mm Hexagon Female-Female Threaded Pillar x 4

- M3 x 40mm Hexagon Female-Female Threaded Pillar x 4 (or use M3 x 20mm to stack up to 40mm)

- M3 Screws

## Resources

- Explaining Computers Video on FreeNAS on Odyssey-X86:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qyz91Q_JrBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Other useful applications:

- [Getting Started With FreeNAS 11 Install, Configure, Setup Users, Setup Shares & How Snapshots Work](https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11)

- [How to set up a home file server using FreeNAS](https://www.windowscentral.com/how-to-set-up-freenas-home-file-server)

- [Backing Up FreeNAS and TrueNAS to Backblaze B2](https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
