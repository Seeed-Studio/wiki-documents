---
description: OpenWrt-FAQ
title: How to use a CM4 without eMMC on the Dual Gigabit Ethernet Carrier Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_a_CM4_witout_eMMC
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC? -->

If you want to use a Compute Module 4 without eMMC on the Dual Gigabit Ethernet Carrier Board, then you need to flash OpenWrt on to a micro-SD card and insert it into the board. Follow the steps below according to your operating system.

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 3.** Run **balenaEtcher** as **administrator**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Step 4.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 5.** Click **Select target** and select the connected micro-SD card

- **Step 6.** Finally, click **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 7.** Eject the micro-SD card from computer and insert it into the Dual Gigabit Ethernet Carrier Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>
