---
description: H28K Boot Tutorial
title: Install Operating System
keywords:
- Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /H28K-install-system
last_update:
  date: 11/24/2023
  author: Parker
---

<!-- ---
name: H28K Router with 8GB eMMC, QWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

The LinkStar-H28K has two Gigabit network ports that use PCIE/RGMII gigabit technology and a Quad-core chip.  It has LPDDR4X 4GB memory and 8GB eMMC storage that can be expanded up to 512 GB with a TF card. It also has a 5V-12V Type-C connection for PD (Power Delivery) capability.  In this wiki we will show you how to install operating system with TF card or eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Select the system you need for H28K

The H28K supports Qwrt operating system. In this section, we will bring you the installation method for Qwrt system.

### Notes & Instructions

H28K has two types of storage, one is TF card storage and the other is eMMC storage. Both memories are available for flash memory systems.

In this chapter, we can use the TF card with a card reader to flash the system to the TF card. 

- [Flash QWRT to the TF card](#jump1)

We can also flash the system to the eMMC that comes with the H28K. 

- [Flash QWRT to eMMC](#jump2)

When a TF card is inserted in the H28K, the system in the TF card is the one that boots up when the system is turned on, as the **TF has priority to boot**.

### <span id="jump1">Flash QWRT to the TF card</span>

#### Preparation

- Windows/MacOS PC
- USB - C data cable
- A TF card
- A card reader
- [balenaEtcher](https://www.balena.io/etcher/) —— Please download and install balenaEtcher, we will use this software to flash the system to a TF card.
- QWRT package

Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below.

| Version           | Description                                               | Download                                                     |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher      | ISO Burner Tool                                           | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23              | Based on OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
When using a TF card with H28K, it is important to note that it may be incompatible with some **high-speed cards**. If you are using a high speed card, you may experience data loading errors, boot-up errors or malfunctions during power-up and loading of the system due to the speed of the card.

The advantage of using a TF card is that different networks can be configured with different TF cards. It is also possible to have multiple systems - different systems can be used by replacing different TF cards.
:::

#### Procedure

**Step 1.** Connect the TF to the PC

Please put the TF into your prepared card reader and connect it to your PC.

**Step 2.** Flash the system onto a TF card

Open the balenaEtcher which has been installed in advance.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

Select the QWRT firmware you downloaded, it should end in **.img**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

Select the drive you want to flash the system to.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

Click the **Flash** button and the software will flash the system into your TF.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
Some computers may prompt whether the USB device is not recognised after flashing the system and whether to format it, please **do not** reformat the card or the system inside will be erased.
:::

**Step 3.** Boot QWRT from the TF card

Remove the TF card from the card reader and insert it into the TF card slot of the H28K.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

Then power up the H28K, you can choose to power it via **USB-C-5V**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**Step 4.** Manage the QWRT backend

Use a network cable to connect to the ETH0 network port of the H28K. Then enter the address: `192.168.1.1` into your browser to access the admin backend.

:::caution
ETH0 is the LAN port and the ETH1 port is WAN ports. If you want to manage H28K's QWRT via a network cable, then connect the network cable to ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

The initial account and password for the system are as follows.

```text
account: root
password: password
```

Congratulations, you have now successfully installed QWRT via TF card.

### <span id="jump2">Flash QWRT to eMMC</span>

#### Preparation

- Windows PC
- USB - C data cable
- QWRT package 

Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below.

| Version                     | Description                                               | Download                                                     |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Based on OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Flash to eMMC tool & driver | V5.12                                                     | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### Procedure

**Step 1.** Install the driver

Go to the **DriverAssitant_v5.12** folder and double click to open the **DriverInstall.exe** file to install the driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

In the driver installation software that launches, click on "驱动安装" (Driver Installation).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**Step 2.** Put the device into Maskrom mode

Go to the **RKDevTool_Release_v2.84** folder and double click to open the **RKDevTool.exe** file.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

Press the **Update keyhole** button（Red box number one） continuously with the card pick-up pin and do not release it.

Then keep your hands on the H28K and connect it (Red box number two) to your computer using a USB-C type cable. Afterwards you can release the **Update keyhole** button.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

At this point watch the software and it will show "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**Step 3.** Erase firmware

Click on "Upgrade Firmware", then click on "Firmware" and select the **rk3528_spl_loader_v1.05.104.bin** file in the file directory.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

After importing the file, click on "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

Wait for the operation to complete and click "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**Step 4.** Flash QWRT

:::note
if you follow along the steps from above your H28K should be still in MASKROOM Mode, if not please repeat and follow along the steps from **Step 2** again.
:::

Click on "Download Image" in the top left corner of the software, then select the **rk3528_spl_loader_v1.05.104.bin** file for the first **Boot** option line.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

Then in the second line of **system** options, select the system image for QWRT. It should be a file ending in **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

Then click on the "Run" button below.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

Wait for the "Download image OK" prompt, then the system has been successfully installed into H28K's eMMC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

Once the system flash is complete, the H28K should automatically reboot and once rebooted it will enter the QWRT system.

**Step 5.** Manage the QWRT backend

Use a network cable to connect to the ETH0 network port of the H28K. Then enter the address: `192.168.1.1` into your browser to access the admin backend.

:::caution
ETH1 is the WAN port and the ETH0 is the LAN port. If you want to manage H28K's QWRT via a network cable, then connect the network cable to a LAN port.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

The initial account and password for the system are as follows.

```text
account: root
password: password
```

Congratulations, you have now successfully installed QqWRT into eMMC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Resources

H28K is open source hardware.Download links to relevant materials.


| Version                     | Description      | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Based on OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Flash to eMMC tool & driver | V5.12            | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                | ISO Burner Tool  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                    | H28K schemetics  | [Download](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

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
