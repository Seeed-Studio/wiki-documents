---
description: ODYSSEY - X86J41x5
title: OpenWRT Installation
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Installing-openwrt
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-openwrt/
sku: 102110399
--- -->

This tutorial demonstrates how to install the open source OS for router network. With the help of OpenWrt, your ODYSSEY - X86J41x5 can turn into a router and take care of your home network!

## Hardware Requirements

- A Working Computer

- A USB Drive(>= 8GB is recommended)

- A Monitor

- Keyboard and Mouse

- Ethernet Cable x 2

## Download the OpenWrt OS Image

First, download the [OpenWrt](https://downloads.openwrt.org/releases/) OS image. Choose the version you wanted, navigate to `x86` -> `64` and download your required version.

In this tutorial, 19.07 version is used and click [here](https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz) to download.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" /></div>

## Creating a Bootable USB

### Step 1 - Prepare your Bootable USB

Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select `Format`.  

**Note:** Choose `FAT32` for the File System.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Step 2 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Step 3 - Writing the OS Image into USB

Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Installing OpenWrt

### Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5

Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing **`DEL`** key to enter the setup Screen. Navigate to **`Advanced`** -> **`CSM Support`** and press Enter to enable it.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Step 2 - Install the OS

Reboot your ODYSSEY - X86J41x5 and keep pressing **`F7`** to enter the boot manager screen. Select the bootable USB and press Enter.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Step 3 - Installing process

Select the **`OpenWrt`** and press Enter. Follow through the installing instructions on the screen.
<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg" /></div>

When it's done, press Enter and you should see the screen as follow:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg" /></div>

Now your OpenWrt is installed and ready to be used!

## Configurations

Now, let's configure to access to the OpenWrt system from a web interface from another PC. Enter the following in the shell in OpenWrt:

```sh
vi /etc/config/network
```

And change the settings to as follow:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg" /></div>

Where you change the station IP address for LAN configurations so that you can use this IP to access to router. Here the IP is changed to `192.168.10.1`

**Note:** In vim, type **`i`** first to be insert mode so that you can edit. When done with editing, press **`ESC`** key and type **`:wq`** and enter to save and quit.

## Accessing from Another PC

Now, you can access the OpenWrt from another computer via LuCI web interface. Simply, use **a Ethernet cable to connect Ethernet Port that is close to the HDMI port**. Connect the other ethernet cable to the other Ethernet port on ODYSSEY - X86J41x5 and to the internet(This may be varied such as  PPPoE method).

Now, from your computer, type `192.168.10.1` (The IP address specified earlier) in the web browser and you should see the following screen:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg" /></div>

Now, you can access your OpenWrt from another PC!

## Configuring LAN and WAN

Navigate to **`Network`** -> **`Interfaces`** and configure WAN settings for internet access:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg" /></div>

 This shows the all the interfaces settings for OpenWrt. Here, simply make sure the the **WAN(eth1) port** is connected to the internet and is set to **DHCP client Protocol** as follow:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg" /></div>

  Now, your computer should access to the internet and your router is set to go!

  *For further development, you can start downloading and deploying all sort of applications such as Ad block, port mirroring and etc! For more, please visit [OpenWrt](https://openwrt.org/).*

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
