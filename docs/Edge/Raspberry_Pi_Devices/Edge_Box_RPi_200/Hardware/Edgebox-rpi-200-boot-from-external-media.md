---
description: EdgeBox RPi 200 boot From External Media
title: EdgeBox RPi 200 boot From External Media
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 6/14/2023
  author: Peter Pan
---


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::tipBefore you Proceed: 
Since we have updated the EEPROM of Raspberry Pi Compute Module 4 from the batch released after 30/03/2023, Which the boot order has changed to `NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`, for more information please visit the [Update EEPROM for Compute Module 4](/Raspberry_pi_CM4_update_eeprom/) page. 

**If you have purchased the Edgebox-RPI-200 prior than 30/03/2023, and you want to follow the guide to update EEPROM or to Flash Operating System on Edgebox-RPI-200, you will need to get a minimum development board which contains function for selecting the boot mode for Raspberry Pi CM4 which the [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) is perfect for this.**

Therefore, this Guide is only apply to the `EdgeBox-RPi-200 released after  30/03/2023`, where you can locate this information from the `S/N number` of `the product label sticker` the number highlighted in the image below `2312` indicate that `23` is the `production year 2023` and `12` is the `production week 12` of 2023.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## Prerequisites

- 1 x PC Host computer (Ubuntu OS)
- 1 x [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1x Storage Device:
  * Option 1: 1 x USB storage Drive (16Gb or above) 
  * Option 2: 1 x **M.2 NVMe Drive**

:::danger
The following steps will wipe out your Storage Device, so please be careful with the Storage Device you are trying to use and make sure it can be formated.
:::

### Setup you bootable device 

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="USB Storage">

#### Setup a Bootable USB Device with EdgeBox-RPI-200 factory default OS

:::note
We have backed-up the original OS image and released file on Sourceforge, you can visit to [this page](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download) to retrive the image file.
:::

Please follow [the steps here](https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/) on how to setup a Bootable Raspbian OS Device, by using the [Raspberry Pi official Imager](https://www.raspberrypi.com/software/)

#### Boot From USB 

Before you plug-in power to the EdgeBox-RPI-200, you should insert the USB Storage Device you have prepared from above steps. 

Then plug in power and wait for the device to boot up.

Now your EdgeBox-RPI-200 should have been booted from USB Storage.

##### Check the boot media

You can check which media has EdgeBox-RPI-200 been booted by using the `lsblk` command.

You should output as shown below:

```sh
pi@raspberrypi:~ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1    7G  0 part /
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part 
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```
:::note
If you see the output as following, which you probably does for the first time boot:

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1  4.6G  0 part 
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```
You will need to change the `root=` in the `/boot/cmdline.txt` to point to the correct storage device to mount the root directory as `root=/dev/sda2`, so your `/boot/cmdline.txt` should looks like this:

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```
Then reboot.
:::

</TabItem>
<TabItem value="NVMe Drive" label="NVMe Drive">

#### Install the NVMe drive

Please install the NVMe Drive in the M.2 Slot

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>


#### Create a bootable NVMe Drive

:::note
Make sure the NVMe Drive is formated and does not contain any bootable partitions 
:::

please plug in power and wait for the device to boot up.

Then please use SSH to access the EdgeBox-RPI-200, Here is [the guide](/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

Once you gain the SSH access, you can follow the steps below:


**STEP 1:** Check if the NVMe Drive is loaded correctly

Please enter `lsblk` command. you should see following output, where `nvme0n1` is the device name for NVMe drive. 

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part /boot
`-mmcblk0p2  179:2    0  14.3G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   200M  0 part 
`-nvme0n1p2  259:2    0   119G  0 part 
```

**STEP 2:** Download the EdgeBox-RPI-200 image file

Please enter the following command to download the image file:

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

You should see the downloading progress like:

```sh
pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img
Resolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130
Connecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5230625280 (4.9G) [application/octet-stream]
Saving to: 'edgeboxrpi200.img'

edgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s
```

**STEP 3:** Using `DD` tool to flash the OS image onto the NVMe Drive

Please enter following command, where `if` as the input file should be name of the image file `edgeboxrpi200.img`, the `of` as the NVMe drive name `/dev/nvme0n1`

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**STEP 4:** Reboot

Please enter following command:

```sh
sudo reboot
```

##### Check the boot media

Now your EdgeBox-RPI-200 should have been booted from NVMe Storage device.

You can check which media has EdgeBox-RPI-200 been booted by using the `lsblk` command.

Where boot directory `/boot`  is mounted on the `nvme0n1p1` partition and root directory `/` is mounted on the `nvme0n1p2` partition.

```sh
pi@raspberrypi:~ $ lsblk   
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part 
`-mmcblk0p2  179:2    0  14.3G  0 part 
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   256M  0 part /boot
`-nvme0n1p2  259:2    0   119G  0 part /
```

</TabItem>
</Tabs>

<!-- Code END -->

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
