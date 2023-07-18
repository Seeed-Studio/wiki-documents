---
description: EdgeBox RPi 200 with LoRaWAN® Module
title: EdgeBox RPi 200 with LoRaWAN® Module
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
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

## WM1302 LoRaWAN module


> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

:::note
        We has recently released the Wio-E5 Series based on Wio-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Wio-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN® End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN® Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

WM1302 module is a new generation of LoRaWAN® gateway module with mini-PCIe form-factor. Based on the Semtech® SX1302 baseband LoRaWAN® chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa® chip. 


WM1302 LoRaWAN® gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN® frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865.


WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN® gateway devices.
 
 
WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa® gateway devices, including LoRaWAN® gateway, hotspots, etc.


Please follow the steps below according to the module 
<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


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
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


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
