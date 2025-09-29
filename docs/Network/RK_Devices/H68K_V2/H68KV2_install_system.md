---
description: LinkStar-V2 Install Operating System
title: Install Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /H68KV2_install_system
last_update:
  date: 04/18/2024
  author: Parker
---

<!-- ---
name: LinkStar-H68K-1432-V2 Router with Wi-Fi 6, 4GB RAM & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed OpenWRT support Armbian
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

LinkStar-H68K-V2 router equips quad-core Cortex-A55 RK3568 chip, featuring 4 Ethernet interfaces for dual-2.5G and dual-1G, along with Wi-Fi 6 technology, while providing high storage capacity and media player functionality. In this wiki we will show you how to install operating system with TF card or eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## Select the system you need for LinkStar-V2

The powerful LinkStar-V2 supports a wide range of operating systems such as OpenWRT, Armbian and many more. In this section, we will bring you the installation methods for each system. Meanwhile, it is compatible with all [firmware](https://wiki.seeedstudio.com/linkstar-install-system/#flash-android--ubuntu-to-emmc) of older LinkStar H68K versions.

### Notes & Instructions

LinkStar-V2 has two types of storage, one is **TF card** storage and the other is **eMMC** storage. Both memories are available for flash memory systems.

In this chapter, we can use the TF card with a card reader to flash the system to the TF card. Due to the read/write speed and stability, this way can only be flashed into the **OpenWRT** system.

- [Flash OpenWRT to the TF card](#jump1)

We can also flash the system to the eMMC that comes with the LinkStar-V2. This method currently supports all supported operating systems from LinkStar-V2.

- [Flash OpenWRT to eMMC](#jump2)

When a TF card is inserted in the LinkStar-V2, the system in the TF card is the one that boots up when the system is turned on, as the **TF has priority to boot**.

### <span id="jump1">Flash OpenWRT to the TF card</span>

#### Preparation

- Windows/MacOS PC
- USB - C data cable
- A TF card
- A card reader
- [balenaEtcher](https://www.balena.io/etcher/) —— Please download and install balenaEtcher, we will use this software to flash the system to a TF card.
- OpenWRT package

Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below.

| Version | Description | Download |
|---------|----------|----------|
|  balenaEtcher  | ISO Burner Tool  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
|  OpenWRT R22.11.18  | Add Docker support. | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
When using a TF card with LinkStar-V2, it is important to note that it may be incompatible with some **high-speed cards**. If you are using a high speed card, you may experience data loading errors, boot-up errors or malfunctions during power-up and loading of the system due to the speed of the card.

The advantage of using a TF card is that different networks can be configured with different TF cards. It is also possible to have multiple systems - different systems can be used by replacing different TF cards.
:::

#### Procedure

**Step 1.** Connect the TF to the PC

Please put the TF into your prepared card reader and connect it to your PC.

**Step 2.** Flash the system onto a TF card

Open the balenaEtcher which has been installed in advance.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

Select the OpenWRT firmware you downloaded, it should end in **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

Select the drive you want to flash the system to.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

Click the **Flash** button and the software will flash the system into your TF.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
Some computers may prompt whether the USB device is not recognised after flashing the system and whether to format it, please **do not** reformat the card or the system inside will be erased.
:::

**Step 3.** Boot OpenWRT from the TF card

Remove the TF card from the card reader and insert it into the TF card slot of the LinkStar-V2.

Then power up the LinkStar, you can choose to power it via **Type-C power**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**Step 4.** Manage the OpenWRT backend

Use a network cable to connect to the ETH1/ETH2/ETH3 network port of the LinkStar-V2. Then enter the address: `192.168.100.1` into your browser to access the admin backend.

:::caution
ETH0 is the WAN port and the other network ports are LAN ports. If you want to manage LinkStar-V2's OpenWRT via a network cable, then connect the network cable to a LAN port other than ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

The initial account and password for the system are as follows.

```
account: root
password: password
```

Congratulations, you have now successfully installed OpenWRT via TF card.

### <span id="jump2">Flash OpenWRT to eMMC</span>

#### Preparation

- Windows PC
- USB - C data cable
- OpenWRT package
- Armbian package (Optional)

Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below.

| Version | Description | Download |
|---------|----------|----------|
| OpenWRT R22.11.18  | Add Docker support. | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Flash to eMMC tool & driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 desktop (Optional)  | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### Procedure

**Step 1.** Install the driver

The [file](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) you downloaded contains the following three files.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

Go to the **Rockchip_DriverAssitant_v5.1.2** folder and double click to open the **DriverInstall.exe** file to install the driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

In the driver installation software that launches, click on "驱动安装" (Driver Installation).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**Step 2.** Put the device into Maskrom mode

Go to the **RKDevTool_Release_v2.84** folder and double click to open the **RKDevTool.exe** file.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

At this point it should say "No Devices Found" at the bottom of the software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

Press the **Update keyhole** button continuously with the card pick-up pin and do not release it.Then keep your hands on the LinkStar-V2 and connect it to your computer using a USB-C type cable. Afterwards you can release the button.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

At this point watch the software again and it will show from "No Devices Found" to "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**Step 3.** Erase firmware

Click on "Upgrade Firmware", then click on "Firmware" and select the **H6XK-Boot-Loader.bin** file in the file directory.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

After importing the file, click on "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

Wait for the operation to complete and click "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**Step 4.** Flash OpenWRT

:::note
if you follow along the steps from above your LinkStar H68K-V2 should be still in MASKROOM Mode, if not please repeat and follow along the steps from **Step 2** again.
:::

Click on "Download Image" in the top left corner of the software, then select the **H6XK-Boot-Loader.bin** file for the first **Boot** option line.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

Then in the second line of **system** options, select the system image for OpenWRT. It should be a file ending in **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

Then click on the "Run" button below.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

Wait for the "Download image OK" prompt, then the system has been successfully installed into LInkStar-V2's eMMC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

Once the system flash is complete, the LinkStar H68K-V2 should automatically reboot and once rebooted it will enter the OpenWRT system.

**Step 5.** Manage the OpenWRT backend

Use a network cable to connect to the ETH1/ETH2/ETH3 network port of the LinkStar-V2. Then enter the address: `192.168.100.1` into your browser to access the admin backend.

:::caution
ETH0 is the WAN port and the other network ports are LAN ports. If you want to manage LinkStar-V2's OpenWRT via a network cable, then connect the network cable to a LAN port other than ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

The initial account and password for the system are as follows.

```
account: root
password: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

Congratulations, you have now successfully installed OpenWRT into eMMC.

## Resources

LinkStar H68K-V2 is open source hardware.Download links to relevant materials.

| Version                     | Description      | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Add Docker support| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Optional)|-| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Flash to eMMC tool & driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO Burner Tool  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | H68K schemetics  | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 Datasheet            | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi Module         | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

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
