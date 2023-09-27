---
description: SenseCAP M1 Local Console
title: SenseCAP M1 Local Console
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---


**Overview**
============

**The latest feature updated on Jan 14, 2022:** To enhance the security level of SenseCAP Local Console, an extra password is added to log in to the Local Console besides CPUID, the default password is the Serial Number of the hotspot. It is highly recommended to change the password after the first login.

**Note**: Your computer and your Hotspot should be connected to the same router/network in order to use Local Console. If your Hotspot is remote, you currently will NOT be unable to run any of the features in the Local Console.

![Local Console](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**Login**
=========

**1\. Get your Hotspot's CPU ID and S/N**

*   If you do not have an account of SenseCAP M1 Dashboard, or haven't added your Hotspot to the Dashboard, please find the device label of your SenseCAP M1, and get the S/N and CPU ID

![Local Console Login Details](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   If you already have registered an account of SenseCAP M1 Dashboard and added your Hotspot, you can copy your Hotspot's CPU ID and S/N from the dashboard.

![Local Console Login Details 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2\. Get the IP Address of your hotspot**

*   If you do not have an account of SenseCAP M1 Dashboard, or haven't added your Hotspot to the Dashboard, please find the IP Address of your hotspot in your router admin page, or run diagnostic on your Helium APP to get the IP Address. Then type the IP Address in a browser to enter the Local Console page.
*   If you already have registered an account of SenseCAP M1 Dashboard and added your Hotspot, you can find your Hotspot's IP Address from the dashboard:
    *   Click the "**Wi-Fi IP Address**" or "**LAN IP Address**" link which directs to the Turbo Sync Local Console page.
    *   If you are connected via Wi-Fi, you will see the Hotspots Wi-Fi IP address to click.
    *   If you are connected via Ethernet cable or local LAN, you will see the Hotspot's LAN address to click.

![Local Console Login Details 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3\. Use the hotspot CPU ID and the default password (Serial Number, aka S/N) to log in**

![Local Console Login Details 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Local Console Login Details 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4\. Change the default password**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

After the first login, please do click the "**Change Password**" button to modify your default password. The new password should contain 8~32 digits with at least two combinations of the numbers, letters and symbols. The password will be encrypted and be only stored in your SenseCAP M1 locally.

For security concerns, we do not provide a “**Forget Password**” function yet, so please do remember your password well, and you will need to reflash the MicroSD card to resume the default password if you lost it.

For the CLI users, please note that every time the password has been changed, the Local Console device token will be automatically updated as well. Refresh the Local Console webpage and you will see the new device token. Please keep your device token safe and do not share it to any third party in any circumstance.

**5\. Get bind-key and add your Hotspot to SenseCAP Dashboard**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

Get the device CPU ID, device ETH MACand device bind key at the Local Console page above.

* * *

**Important Information**

**Note**: Turbo Sync may lead to frequent erasing and writing in the micro SD card and it is only suggested to do when it is necessary.

If the synced block height of your device is very close to the blockchain (less than 200 blocks), Turbo Sync is not necessary for your device and you will not be able to run it.

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

The Turbo Sync process may take a while to complete and depends on the network speed. Please maintain a solid Internet connection and be patient with the syncing process.

**IMPORTANT**: Please do not power off the device during the Turbo Sync process, otherwise your device will have a corrupted ledger during the next boot and will start syncing again from the last blessed snapshot. In that case, you will have to repeat the Turbo Sync process.

* * *

**Reboot**
==========

**Note**: You will need to log in to the Local Console.

Click the orange "Reboot" button to start the reboot process.

*   When you see \[reboot\] request sent + \[reboot going\], the process as started.
*   When you see "----log stream disconnected from the host----" and "----log stream connected to the host----", you have finished the reboot process.

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**Note**: Helium Blockchain ledger sometimes gets damaged by unexpected errors in the micro SD card resulting in the blockchain syncing process to halt on a block and fail in syncing.

Rebooting the hotspot in the Local Console may help to resolve the potential errors in the micro SD card.

**IMPORTANT**: Please do not reboot the hotspot frequently, only reboot it when necessary.

When the block height is stuck and does not increase, height stays at -1 or 1, please do a block reset. After following these steps, the hotspot will be fully synced again.

* * *

**Shut Down**
=============

The shutdown feature is suggested to use before unplugging the device in order to prevent the device from being damaged caused by a suddenly powering off.

**How To Use The Shutdown Feature**

Click the "**Shutdown**" button and accept the prompt.

*   The shutdown will take a few minutes.
*   You will see the blue led and the Ethernet port LEDs are off when the shutdown is finished.

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**ATTENTION**: Please confirm you are next to the SenseCAP M1 when you shut down since you will need to re-plug the adapter if you want to power up the device again.

* * *

**Reset Block**
===============

**Note**: You will need to log in to the Local Console.

Click the Red "**Reset Blocks**" button to start the reset blocks process.

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**Note**: SenseCAP M1 will start to load the latest blessed snapshot. The status in the dashboard may have delay and it is normal to temporary see "**Unknown**" sync status.

If you need to run Turbo Sync, please wait until the latest blessed snapshot is loaded (around 30 minutes).