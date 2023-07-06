---
description: reTerminal-FAQ
title: How to flash OS if I replace the CM4 with non-eMMC version
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flashing_os_on_non-eMMC_CM4_replacement
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q4: How can I flash OS if I replace the CM4 with non-eMMC version -->

If you want to use a Compute Module 4 without eMMC on the reTerminal, then you need to insert a micro-SD and flash the OS of your choice. Follow the steps below according to your operating system.

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **Raspberry Pi Imager** software by visiting [this link](https://www.raspberrypi.org/software/)

:::note
You can choose to download for either **Windows, Mac or Ubuntu**
:::

- **Step 3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 5.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

:::note
You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Step 6.** Click **CHOOSE STORAGE** and select the connected micro-sd card

- **Step 7.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Please wait a few minutes until the flashing process is complete.

- **Step 8.** Eject the micro-SD card from computer and insert it into the reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Note:** You need to open the shell of the reTerminal to access the micro-sd card slot
