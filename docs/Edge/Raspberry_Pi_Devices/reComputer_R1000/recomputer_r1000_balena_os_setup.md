---
description: reComputer R1000 balena OS Setup
title: reComputer R1000 balena OS Setup
keywords:
  - Edge
  - reComputer-R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer-r1000-balena-os-setup
last_update:
  date: 06/13/2024
  author: Shuisheng Peng
---
# Tutorial on flashing Balena OS on reComputer-R1000
This tutorial will show how to deploy Balena-OS on reComputer-R1000
## Hardware Configuration

Step 1: You need to set the switch on the side of the R1000 to boot mode, then power on the device
<div class="table-center">

| Switch Position                                              | Mode        | Description    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

Step 2: Please use a USB Type-c cable to connect reComputer R1000 to your computer.
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

## Image file acquisition

Step 1: Go to balenaCloud, create a free account, and then create a fleet for your Raspberry pi 4 or CM4 device
![fleet](https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/Balena/create_fleet.gif)
Step 2: Click "Add device", select the version information and configuration information you want, and then download the balenaOS image file in the lower right corner.
![download_image](https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/Balena/Download_image.gif)
**Note**: It is recommended to download the balenaOS image file first and then burn it. If you directly click "Flash" in the lower right corner of the window to burn it, it may fail to burn.

## Steps for Flashing Balena OS

Step 1: Open the [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) software, and then the system will show the new disk

Step 2: Open the flash tool [**balenaEtcher**](https://etcher.balena.io/), select the previously downloaded balena image file, then select the target disk, and finally click Burn.
![burn](https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/Balena/Burn.gif)
Step 3: After the flashing is completed, set the reComputer R1000 DIP switch to normal mode, then power on again. After a while, you can see the new device has been added successfully on balenaCloud.
![online](https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/Balena/online.png )
