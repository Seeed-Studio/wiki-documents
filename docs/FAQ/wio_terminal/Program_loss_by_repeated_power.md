---
description: Wio Terminal - FAQ
title: How to avoid the program loss after restarting Wio Terminal multiple times
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Program_loss_by_repeated_power
date: 1/31/2024
author: Seraphina
---


If you encounter a situation where the **Wio Terminal fails to boot up properly after multiple restarts**, please refer to the following Wiki for a solution:

During the power on/off process, if the bootloader program attempts to access the flash memory before the chip has stabilized, it may result in unexpected data loss. This situation can prevent the application program from starting because the bootloader fails to correctly read the application code or data stored in the flash memory.

To resolve this issue, we recommend updating the bootloader to the following version to ensure that it only accesses the flash memory after the chip has stabilized. Please follow the steps below for guidance:

**Step 1:** Download the latest Bootloader [here](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2)

**Step 2:** Plug-in the Seeeduino Wio Terminal to your PC via USB Type-C.

**Step 3:** Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#enter-bootloader)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Step 4:** An external drive named `Arduino` should appear in your PC. Drag the the downloaded [`update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2) files to the `Arduino` drive.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/update-bootloader-version.png" /></div>


Now that you have successfully updated your Bootloader, feel free to enjoy using your Wio Terminal!