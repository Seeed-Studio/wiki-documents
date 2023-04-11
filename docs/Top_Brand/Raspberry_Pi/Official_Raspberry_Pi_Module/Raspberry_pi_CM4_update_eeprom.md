---
description: Update eeprom
title: Update EEPROM for Compute Module 4
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_pi_CM4_update_eeprom
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Update eeprom
category: Software
bzurl: 
wikiurl: 
sku: 
--- -->

# What is Compute Module 4

The Raspberry Pi Compute Module 4 (CM4) leverages the computing power of the popular Raspberry Pi 4 Model B, with dramatic performance changes compared to its predecessor: faster CPU cores, better multimedia, more interface capabilities. And for the first time, this release offers multiple choices of RAM density and wireless connectivity options.

In terms of external dimensions, this version adopts a completely new mechanical standard. The overall footprint of the module on its carrier board is reduced, resulting in a smaller and more compact form factor suitable for integration into products.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png" alt="pir" width={650} height="auto" /></p>

:::note
The power of Raspberry Pi 4 in a compact form factor for deeply embedded applications. Raspberry Pi Compute Module 4 incorporates a quad-core ARM Cortex-A72 processor, dual video output, and a wide selection of other interfaces. Available in 32 variants, with a range of RAM and eMMC Flash options, and with or without wireless connectivity. -- [Raspbarry Pi CM4](https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000){target=_blank}
:::

## Seeed Studio Compute Module 4 Products

| reTerminal  | Edgebox-RPI-100  |EdgeLogix-RPI-1000| reRouter| Dual Gigabit Ethernet NICs Carrier Board |
|---|---|---|---| --- |
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a> |  <a href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

## How to update CM4 EEPROM

### Prerequisite

**Hardware Required:**

* Linux Based Host Computer(could be one of following):
  * Raspbeery Pi 4B with Raspberry Pi OS installed
  * PC with latest Ubuntu OS installed
* USB Type-C cable

**Applicable Seeed Studio Hardware:**

| reTerminal | reRouter | Dual Gigabit Ethernet NICs Carrier Board |
|---|---|---|
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a>  | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

:::note
This process requires to put the CM4 eMMC stroage into 'USB mass storage' mode, which currently on applicable with reRouter and reTerminal. If you have Edgebox-RPI-200 or EdgeLogix-RPI-1000 you will need to have a CM4 development board that could put CM4 eMMC storage into USB storage mode, For example [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html){target=_blank}
:::

### Put CM4 eMMC Storage into USB mass storage Mode

**For reTerminal**

* **Step 1:** Open the case and remove the heatsink of reTerminal to get access the boot selection switch, Please follow the steps from the [reTerminal Getting Started Wiki Page](/reTerminal) until you have flipped the boot mode switch.

**For reRouter**

* **Step 1:** Open the case of reRouter by remove the bottom 4 screws and the bottom cover as shown below:
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg" alt="pir" width={600} height="auto" /></p>

* **Step 2:** Slide down the reRouter board from the case and take it out

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg" alt="pir" width={600} height="auto" /></p>

* **Step 3:** Locate the 3-pin interface and short the GND and BOOT pins.

:::note
**Dual Gigabit Ethernet NICs Carrier Board** is the same PCB as the reRouter which just need to do the **Step 3** to select the boot mode.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

### Software Setup and Update EEPROM Firmware

**On your PC or Raspberry Pi 4B (Flash Tool)**

:::note
To update the EEPROM for raspberry pi only support with Linux based operating system, The following steps only tested on **PC with Ubuntu 22.04** and **Raspbeery Pi 4B (Flash Tool) with Raspberry Pi OS (64-bit)**
:::

* **Step 1:** Install required system software package, please open **`Terminal`** app and type follow command:

```bash

sudo apt-get update

sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

* **Step 2:** Clone the **`usbboot`** tool repository

```bash
cd ~/

git clone --depth=1 https://github.com/raspberrypi/usbboot

cd usbboot
```

* **Step 3:** Build the **`usbboot`** tool

```bash

make
```

* **Step 4:** Update the EEPROM

:::note
The **`usbboot`** github repo should have the latest EEPROM bootloader firmware updated, so following step should get you updated to the latest EEPROM bootloader firmware
:::

```bash

cd recovery

./update-pieeprom.sh
```

You should see the similar message as shown below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

**Optional:** If you want use the specific release of the bootloader firmware you could visit the [rpi-eeprom](https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/){target=_blank} repo firmware folder to select and download firmware bin file to replace the **`pieeprom.original.bin`** file, For example:

:::note
This optinal step will replace the **`pieeprom.original.bin`** file with the latest `stable` build **`pieeprom-2023-01-11.bin`** at the time of writing this wiki.
:::

```bash

cd ~/usbboot/recovery

rm -f pieeprom.original.bin

curl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin

./update-pieeprom.sh
```

You should see the similar message as shown below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

* **Step 5:** Connect the USB Type-C to the CM4 Device(**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) and the **`Host PC/Rasbperry Pi 4B(Flash Tool)`** Device, which the **CM4 Device** should be put into the **USB massive storage mode**.

* **Step 6:** To apply and update the EEPROM firmware

```bash

cd ~/usbboot

./rpiboot -d recovery

```

You should see the similar message as shown below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

At this point your **`CM4 Device`** should have the new boot order setup and updated EEPROM firmware.

### Change Boot Order and Update EEPROM

:::note
You should have followed the above setup step until **`Step 3`**
:::

* **Step 1:** Edit the `boot.conf`

```bash
cd ~/usbboot/recovery

nano boot.conf
```

the file should look like as following:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf25641
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

where the **`BOOT_ORDER=0xf25641`** line is the Boot order settings, where the current boot order setting is `SD CARD/eMMC > USB-MSD > NVME > BCM-USB-MSD > NETWORK > RESTART`. If you want to change to boot order to `NVME > USB-MSD > BCM-USB-MSD >  SD CARD/eMMC > NETWORK > RESTART` the boot order setting should be **`BOOT_ORDER=0xf21564`**.

Therefore the new boot order setting the `boot.conf` should looks like following:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf21564
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

Save and exit the `nano` editor.

The following is the table that defines the property of different boot modes setting for BOOT_ORDER for reference.

| Value | Mode  | Description |
|---|---|---|
|  0x0 | SD CARD DETECT | Try SD then wait for card-detect to indicate that the card has changed - deprecated now that 0xf (RESTART) is available.  |
|  0x1 | SD CARD/eMMC |  SD card (or eMMC on Compute Module 4).  |
|  0x2 | NETWORK  | Network boot  |
|  0x3 | RPIBOOT | RPIBOOT  |
|  0x4 | USB-MSD  | USB mass storage boot   |
|  0x5 | BCM-USB-MSD  |  USB 2.0 boot from USB Type C socket (CM4: USB type A socket on CM4IO board).  |
|  0x6 | NVME | CM4 only: boot from an NVMe SSD connected to the PCIe interface.   |
|  0x7 | HTTP | HTTP boot over ethernet.  |
|  0xe | STOP | Stop and display error pattern. A power cycle is required to exit this state. |
|  0xf | RESTART|  Restart from the first boot-mode in the BOOT_ORDER field i.e. loop |

> Reference: [BOOT_ORDER Property Table](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER)

* **Step 2:** Get the latest firmware

```bash

wget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin
```

* **Step 3:** Update the EEPROM firmware with the new `boot.conf`

```bash

./update-pieeprom.sh
```

* **Step 4:** Connect the USB Type-C to the CM4 Device(**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) and the **`Host PC/Rasbperry Pi 4B(Flash Tool)`** Device, which the **CM4 Device** should be put into the **USB massive storage mode**.

* **Step 5:** Apply the firmware to the device

```bash
cd ~/usbboot

sudo ./rpiboot -d recovery
```

You should see the similar message as shown below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

At this point your **`CM4 Device`** should have the new boot order setup and updated EEPROM firmware.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
