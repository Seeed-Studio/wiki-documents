---
description: ODYSSEY, STM32MP135D
title: Getting Started with ODYSSEY – STM32MP135D 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-STM32MP135D
last_update:
  date: 10/13/2023
  author: Xogium
---

# Getting Started with ODYSSEY – STM32MP135D

ODYSSEY STM32MP135D is a compact STM32 MPU based single-board computer that offers powerful hardware in a small form factor designed for a variety of uses ranging from smart home, to vending machines, to IP Camera, etc. It offers a wide range of connectivity options designed to make it easy to prototype with. The hardware is available in two different variants:

- [ODYSSEY STM32MP135D](https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html), which offers all the connectivity with only basic micro sd as storage option
- [ODYSSEY STM32MP135D with eMMC](https://www.seeedstudio.com/Odyssey-MP135D-eMMC-p-5728.html), which adds a 4 GB eMMC for storage

Currently, only buildroot is supported as operating system.

## Hardware ##

- SoC: STM32MP135D
  - 32-bit Arm® Cortex®-A7
    - L1 32-Kbyte I / 32-Kbyte D
    - 128-Kbyte unified level 2 cache
    - Arm® NEON™ and Arm® TrustZone®

- Supports buildroot operating system.
- Connectivity:
  - 2x 10/100 mbit/s ethernet ports,
    - eth1 supports PoE and WOL.
  - 1x usb-a port,
  - 1x CSI 30p FPC Connector,
  - 1x LCD 40p FPC Connector,
  - 40 pins GPIO in raspberry pi compatible pinout.
- Storage / memories:
  - 4 gbits DRAM,
  - 256 kbits EEPROM with a 64 bytes pagesize,
  - Micro sd card slot supporting sd, sdhc and sdxc cards,
  - 4 gbytes eMMC (only on the variant with eMMC storage)
- Power supply options:
  - PoE through eth1 port,
  - 5v in via usb-c connector.
- Bare board dimentions: 85x56x17mm
- Bare board weight: 36g

## Getting started ##

### Hardware ###

To get started with the hardware, you will need the following:

- 1x ODYSSEY STM32MP135D,
- 1x usb-c to usb-a cable OR usb-c to usb-c cable,
- 1x ethernet cable,
- 1x usb to uart cable such as [this one](https://ftdichip.com/products/ttl-232r-rpi/).

First, carefully connect the usb to uart cable so you get access to the serial console. Refer to the following image to help you connect the pins properly.
![Top down view of STM32MP135D ODYSSEY board with debug pins next to the boot jumper circled. Pins listed in order of closeness to boot jumpers: WAKE, GND, TX, RX](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_558688_ff47Pijnl_CdTY5i_1689582643?w=1201&h=801&type=image/png "highlighted uart0 pins")

We will use the usb-c for power in this guide. Connect one end of the usb-c cable to the board, then connect the other end to your computer. Plug the ethernet cable into eth1 port of the ODYSSEY, and the other end into your router or network switch.

>### NOTE:If you want to use the precompiled package, please click this [link](http://files.seeedstudio.com/wiki/102110859_ODYSSEY_MP135D_img.zip)

### Software ###

This guide will use the following software components:

- [buildroot version 2023.02 or later](https://buildroot.org/download.html).
- The [buildroot external tree](https://github.com/xogium/buildroot-stm32mp135d-odyssey) to be used in conjunction with upstream buildroot.
- [snagboot](https://github.com/bootlin/snagboot), which is a set of utilities that helps with easier operation of DFU and usb mass storage. It consists of snagrecover which is intended to upload the fsbl and ssbl into the board's DRAM, and of snagflash which is designed to actually flash data onto persistent storage.

Note: please follow the instructions in the snagboot repository in order to set it up properly, this is out of scope for this guide.

#### Features ####

The external tree provides the following:

- A single stm32mp135d_odyssey_defconfig which builds a minimal and generic system consisting of tf-a, optee, u-boot, and the linux kernel for the boot chain. The userspace is minimal and consists of a simple busybox init system and shell.
  - This system can be used in the following ways:
    - Written and booted from the eMMC (if your hardware has it)
    - Written and booted from a micro sd card.
    - Booted over NFS.
- A post-build script is used to provide an easily writable bootloader image for the eMMC. It combines -tf-a and FIP image together in a single file, meant to be written using DFU, into the boot regions of said eMMC.
- A genimage configuration generates two disk images:
  - emmc.img contains an u-boot-env partition to easily store the u-boot environment into, along with the rootfs. It is expected that the bootloader be stored into the eMMC boot regions via DFU.
  - sdcard.img is comprised of two copies of tf-a into fsbl1 and fsbl2 partitions, respectively, along with one single fip partition which contains the FIP image. There is also an u-boot-env partition the same as in emmc.img, along with a single rootfs.
- The external tree provides an empty external.mk, Config.in and a packages directory to be used, should you wish to add additional options and content. Please refer to the corresponding section in the buildroot manual to learn more.

#### Getting the softwares ####

This example demonstrates getting buildroot and the required external tree, then setting them up to be used:

First install Buildroot's required dependencies. See: [The buildroot user manual, chapter 2: System requirements](https://buildroot.org/downloads/manual/manual.html#requirement). Then, set up the source code:

```
wget https://buildroot.org/downloads/buildroot-2023.02.5.tar.gz
tar -xf buildroot-2023.02.5.tar.gz
mv buildroot-2023.02.5 buildroot
git clone https://github.com/xogium/buildroot-stm32mp135d-odyssey
```

#### Building ####

Once the source code has been set up correctly, you can proceed with the build:

```
cd buildroot
make BR2_EXTERNAL=/absolute/path/to/buildroot-stm32mp135d-odyssey stm32mp135d_odyssey_defconfig
make
```

If everything goes well, you should now have a successfully built system in the output/images directory of your buildroot tree.

```
ls -1 output/images
combined-tf-a-and-fip.img
emmc.img
fip.bin
rootfs.ext2
rootfs.ext4
rootfs.tar
sdcard.img
stm32mp135d-odyssey.dtb
tee.bin
tee-header_v2.bin
tee-pageable_v2.bin
tee-pager_v2.bin
tf-a-stm32mp135d-odyssey.stm32
u-boot.dtb
u-boot-nodtb.bin
zImage
```

#### How to use the system ####

##### eMMC boot #####

Remove the middle boot jumper on the board to be sure DFU mode is active. Make sure to open the serial console using minicom or another similar program, you will need it.

As an example, here is how to use gnu screen to access a serial console named ttyUSB0. The baud rate is expected to be 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Then, execute the following command from the snagboot package and be prepared to interrupt the boot sequence when reaching u-boot, by pressing any key in the serial console window:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Once at the u-boot prompt, type the following to enable the eMMC boot partition: ```mmc partconf 1 1 1 1```. This enables the first eMMC boot partition and ensure it is possible to boot from it, by modifying ext csd register 179. Then, type ```dfu 0``` to expose all the DFU alt settings to your host machine, including the eMMC boot regions. They can be listed using the dfu-util command:

```
dfu-util -l
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=4, name="mmc1_boot2", serial="0021001A3232510937393835"
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=3, name="mmc1_boot1", serial="0021001A3232510937393835"
...
```

Then, use the snagflash tool to write the combined bootloader image into both boot regions:

```
snagflash -P dfu -p 0483:df11 --dfu-keep -D 3:combined-tf-a-and-fip.img
snagflash -P dfu -p 0483:df11 -D 4:combined-tf-a-and-fip.img
```

Once this is done, reset the board and confirm that the eMMC boot now works as expected by putting the middle boot jumper back onto the board. It will error out at booting from mmc1 partition 0 given the user area is blank, but this is normal at this stage.

When you're back at the u-boot prompt again, type ```ums 0 1``` to expose the user area of the eMMC as a usb mass storage device to your host machine. Use lsblk to determine which device node it was assigned, and replace sdX in the following command with the appropriate device node. Double check to ensure you will write on the correct device as it will be wiped entirely!

```
snagflash -P ums -s emmc.img -b /dev/sdX
```

When the writing has completed, press ctrl+c at the u-boot prompt to terminate the usb mass storage mode. Then, reset your board again, and confirm that it is now booting linux and that you get a login prompt. Log in with the root user and no password.

##### Micro sd card boot #####

If you wish to burn the system onto a micro sd card, please proceed as follows, replacing sdX with the appropriate device node:

```
sudo dd if=output/images/sdcard.img of=/dev/sdX bs=4M conv=fsync
```

Where sdX corresponds to the micro sd card device node. Refers to the output of lsblk command to make sure you get the correct device node! Otherwise, data loss will occure, as this erases the entire content of the target device.

Please use minicom or similar program to attach to the serial console of the board. As an example, here is how to use gnu screen to access a serial console named ttyUSB0. The baud rate is expected to be 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

When the micro sd card has been successfully written to, insert it into the micro sd socket of the STM32MP135D ODYSSEY board, and adjust the boot jumpers to boot from micro sd (all jumpers removed). If required, reset the board. Log in with the user root and no password once you get the buildroot login prompt.

##### Nfs boot #####

To boot the system via NFS, please ensure to set up your /etc/exports as demonstrated, replacing the subnet / allowed ip addresses as needed, doing the same for the exported paths:

```
/srv/nfs 192.168.1.0/24(rw,sync,crossmnt,fsid=0)
/srv/nfs/stm32mp135d 192.168.1.0/24(rw,nohide,insecure,no_subtree_check,async,no_root_squash)
```

Also make sure your nfs server configuration enables UDP mode, like so:

```
/etc/nfs.conf
[nfsd]
...
udp=y
```

Extract the generated rootfs tarball in the appropriate directory, in this case /srv/nfs/stm32mp135d:

```
cd output/images
sudo mkdir srv/nfs/stm32mp135d
sudo bsdtar -xpf rootfs.tar -C /srv/nfs/stm32mp135d
```

Remove the middle boot jumper to be sure DFU mode is active. Make sure to open the serial console using minicom or another similar program, you will need it. As an example, here is how to use gnu screen to access a serial console named ttyUSB0. The baud rate is expected to be 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Then, execute the following command from the snagboot package and be prepared to interrupt the boot sequence when reaching u-boot, by pressing any key in the serial console window:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Once you're at the u-boot prompt, you can boot over nfs by doing the following:

```
setenv eth1addr 2c:f7:f1:30:2b:62
setenv ethaddr 2c:f7:f1:30:2b:62
dhcp
nfs ${kernel_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/zImage
nfs ${fdt_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/stm32mp135d-odyssey.dtb
setenv bootargs root=/dev/nfs rootfstype=nfs ip=dhcp nfsroot=192.168.1.92:/srv/nfs/stm32mp135d,tcp,v3 rw quiet console=ttySTM0,115200n8 earlycon
bootz ${kernel_addr_r} - ${fdt_addr_r}
```

Where 192.168.1.92 in this example is the machine hosting the nfs server. The MAC address set is also an example and not to be used in the real world. It is required due to having no MAC addresses defined in the OTP of the board, but can be stored semi-permanently in the EEPROM (see below). Log in with the user root and no password.

## EEPROM ##

### Layout ###

The current implementation to read MAC addresses from the EEPROM is expecting the first one to start at offset 0 and have a length of 6 bytes. The second MAC must be stored at offset 0x10, and also have a length of 6 bytes.

- Tip: to generate random MAC, use a generator such as [this one](https://www.hellion.org.uk/cgi-bin/randmac.pl).

For storing the u-boot environment into the EEPROM if you wish to do so, please ensure that the environment begins on a new page boundary. Pages are 64 bytes in size. For example, you could set the environment offset to 0x40, the size remaining at 0x2000, and redundant offset to 0x2080. Here's an example u-boot config fragment:

```
CONFIG_ENV_IS_IN_EEPROM=y
CONFIG_ENV_OFFSET=0x40
CONFIG_ENV_OFFSET_REDUND=0x2080
CONFIG_I2C_EEPROM=y
CONFIG_SYS_I2C_EEPROM_ADDR=0x50
CONFIG_NVMEM=y
```

To apply it, run ```make menuconfig``` in the toplevel buildroot directory. Go to the bootloaders menu, scroll down to u-boot and modify the additional config fragments path, for example by inputting ```$(BR2_EXTERNAL_STM32MP135D_ODYSSEY_PATH)/board/stm32mp135d-odyssey/configs/uboot.config```.

Then, please do a rebuild using ```make clean && make```.

Ultimately the layout is free for you to use, except for the MAC addresses location and length.

### How to use the EEPROM ###

To make use of the EEPROM on your board, you get access to it as a nvmem device, in both u-boot and linux. For example, lets write a MAC address in it:

```
printf '\x2c\xf7\xf1\30\x2b\x62'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1
```

To store a second MAC address, do like so:

```
printf '\x2c\xf7\xf1\30\x2b\x63'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1 seek=16
```

## How to connect and use grove sensors ##

TODO

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Casey's efforts](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34112514) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Resources ##

- [Fork of ARM trusted firmware used in the external buildroot tree](https://git.xogium.me/xogium/st-arm-trusted-firmware/tree/v2.8-stm32mp-odyssey-r2)
- [Fork of OP-TEE](https://git.xogium.me/xogium/st-optee_os/tree/3.19.0-stm32mp-odyssey-r2)
- [Fork of U-Boot](https://git.xogium.me/xogium/st-u-boot/tree/v2022.10-stm32mp-odyssey-r2)
- [Fork of the Linux kernel](https://github.com/xogium/st-linux/releases/tag/v6.1-stm32mp-odyssey-r3)
