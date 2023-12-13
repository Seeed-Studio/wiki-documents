---
description: reTerminal-FAQ
title: How to boot an OS from USB Flash Drive
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Boot_OS_from_USB_flash_drive
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q7: How can I boot an OS from USB Flash Drive -->

You can boot an OS from USB Flash Drive by following the steps below. Here we change the boot order to **USB Boot > eMMC Boot**, which means, if the USB Boot fails, it will boot from eMMC.

:::caution
You will have to use **Ubuntu** or **MacOS** as host PC for this method.
:::

- **Step 1.** Remove the 4 rubber covers and open the reTerminal back shell unscrewing the 4 screws underneath

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Step 2.** Remove the 2 screws to disassemble the heatsink and also the remaining 4 screws to take apart the entire case

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Step 3.** Flip down the **boot mode switch** according to the below diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Step 4.** Open a **Terminal** window inside the Host PC after connecting to reTerminal and type the following to update the **packages list**

```sh
sudo apt update
```

- **Step 5.** Install **Git** by the following command

```sh
sudo apt install git
```

- **Step 6.** Git might produce an error if the date is not set properly. Type the following to correct this

```sh
sudo date MMDDhhmm
```

**NOTE:** Where **MM** is the month, **DD** is the date, and **hh** and **mm** are hours and minutes respectively.

- **Step 7.** Clone and enter the **usbboot** tool repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 8.** Enter the following to install **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Step 9.** Build and install the usbboot tool

```sh
make
```

- **Step 10.** Open the bootloader configuration file

```sh
sudo nano recovery/boot.conf
```

- **Step 11.** Change the **BOOT_ORDER** field to the following

```sh
BOOT_ORDER=0xf15
```

Please note that the default of reTerminal is different from the cloned recovery/boot.conf.
The defaults for reTerminal are as follows.
Please rewrite recovery/boot.conf as necessary.

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=0
POWER_OFF_ON_HALT=1

# Try  SD- > USB PCIe MSD -> USB 2.0 BCM XHCI -> Network ->  Loop
BOOT_ORDER=0xf2541

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

**NOTE:** Here if USB Boot fails, it switches to eMMC boot

- **Step 12.** Run the following to update the EEPROM image

```sh
cd recovery
./update-pieeprom.sh
```

The pieeprom.bin file is now ready to be flashed to the Compute Module 4

- **Step 13.** Navigate back to the **usbboot** directory

```sh
cd ..
```

- **Step 14.** Run the usbboot tool to flash the bootloader EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **Step 15.** Connect reTerminal to the PC via USB Type-C cable

Now it will take a few seconds to transfer the necessary files to the reTerminal.

- **Step 16.** Turn off reTerminal, flip the Boot Mode switch back to the original position and assemble the reTerminal shell

- **Step 17.** Connect a bootable USB Flash Drive with a suitable OS inside, connect to one of the USB Ports on the reTerminal and turn on reTerminal

Now you will see reTerminal booting from the connected USB Drive
