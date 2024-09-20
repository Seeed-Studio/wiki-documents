---
description: This tutorial mainly introduces the hardware connection configuration of M.2 Hat and dual Hat and how to make the Raspberry Pi boot from the SSD.
title: Raspberry Pi 5 uses PCIe hat/dual hat
keywords:
  - M.2 hat
  - dual hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /raspberry_pi_5_uses_pcie_hat_dual_hat
last_update:
  date: 08/26/2024
  author: ShuishengPeng

---

## Introduction

This tutorial mainly introduces the hardware connection configuration of M.2 Hat/dual Hat and how to make the Raspberry Pi boot from the SSD.And introduces two installation methods, with and without casing.

## Getting Start

### Hardware Preparation

For installation without a casing, you need to prepare the following materials:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIe devices
- ④ PCIe devices fixing screw
- ⑤ PCIe connection cable between M.2 Hat and Raspberry Pi 
- ⑥ Screw sleeve、long screws and nuts

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

For installation with a casing, you need to prepare the following materials:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIe devices
- ④ PCIe devices fixing screw
- ⑤ PCIe connection cable between M.2 Hat and Raspberry Pi
- ⑥ Long screws and nuts 
- ⑦ [outer casing](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>



### Installation


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Installation without housing">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Step 1**: Insert the PCIe connection cable into the M.2 Hat, paying attention to the insertion direction of the cable. Insert the PCIe interface of the M.2 Hat with the metal side facing downwards, as shown in the figure after insertion:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Step 2**: Insert the PCIe connection cable into Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Please pay attention to the insertion direction of the cable. Insert the PCIe interface of Raspberry Pi 5 with the metal side facing up, as shown in the figure after insertion:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Step 3**: Overlap the Raspberry Pi 5 with the M.2 Hat and insert the screw sleeve into the screw.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

Then insert the screws into the screw holes of Raspberry Pi 5 and M.2 Hat, as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**Step 4**: Screw the stud into the screw and secure the screw to the circuit board, as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**Step 5**: Insert the SSD and AI Kit into M.2 dual Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

Then insert the fixing screws to secure the SSD and AI Kit in the M.2 Hat, as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="Installation with housing">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Step 1**: Insert the PCIe connection cable into the M.2 Hat. Please pay attention to the insertion direction of the cable. Plug the metal side downward into the PCIe interface of the M.2 Hat. After insertion, as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Step 2**: Plug the PCIe connection cable into the Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Please pay attention to the insertion direction of the cable. Plug it into the PCIe interface of Raspberry Pi 5 with the metal side facing up. After insertion, it is as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Step 3**: Overlap the Raspberry Pi 5 and M.2 Hat, and prepare the shell, screws, nuts and PCIe devices

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

Place the overlapping M.2 Hat and Raspberry Pi into the case, with the Raspberry Pi on top, as shown in the picture:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**Step 4**: Screw the screws into the reserved screw holes in the casing. This hole will connect the M.2 Hat and the Raspberry Pi, thereby fixing the M.2 Hat, Raspberry Pi 5 and the casing.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**Step 5**: Screw the studs into the screws to fix the M.2 Hat, Raspberry Pi 5 and case

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**Step 6**: Insert the SSD and AI Kit into the M.2 Hat, as shown in the figure:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**Step 7**: Screw in the fixing screws to fix the SSD in the M.2 Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**Step 8**: Install the remaining shell

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>





### Use SD Card Copier tool to flash OS onto the NVME SSD On Raspberry Pi OS

*This method works if you have an SD card and have booted the device successfully. Please make sure your system is the latest Raspberry Pi system (Bookworm or later) and and your RPi 5 firmware is updated to 2023-12-06 (Dec 6th) or newer, otherwise it may not recognize the NVME-related configurations.*


**Step 1**:Ensure that your Raspberry Pi system is up-to-date (Bookworm or later), enter the following command to update the RPi 5 firmware:
```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```
Scroll down to `Advanced Options` and press Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Scroll down to `Bootloader Version` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

And finally choose `Latest`, and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Select `No` here - you want the `latest` bootloader.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

And exit from the tool by selecting `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

If asked to reboot, select `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Step 2**：Cick **Applications** =>**Accessories** =>**SD Card Copier** on the main screen, run the **SD Card Copier** program, and copy the OS to the NVME ssd as shown in the figure below.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Setting the Raspberry Pi to boot from the NVMe SSD
If you have easy access to your SD card slot you could turn off your Pi, pop out the SD card and (if everything's working as expected) it should automagically boot from your NVMe drive the next time you start it up. If you want to leave the SD card where it is and still boot from NVMe though, you'll need to change the boot order.

**Step 1**:Enter the following command:
```shell
  sudo raspi-config
```
Scroll down to `Advanced Options` and press Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Step 2**:Scroll down to `Boot Order` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Step 3**:Choose `NVMe/USB Boot` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

Configuration will be confirmed. Press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Step 4**:Return to the first screen by selecting `Back` or pressing the Esc key. Then navigate to Finish using the right cursor key.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

You will be asked whether you want to reboot now. Click `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>


### Modify PCIe speed

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat supports PCIe Gen 2 and PCIe Gen 3 modes

**Step 1**: Enter the following command to open the `/boot/firmware/config.txt` file
```shell
sudo nano /boot/firmware/config.txt
```

**Step 2**:Add the following to the [all] section at the end of the `/boot/firmware/config.txt` file:
```shell
dtparam=pciex1_gen=3
```
Save the file and reboot again, you may see a speed increase!.
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">
M.2 dual Hat does not support PCIe speed adjustment for the time being. We are further developing it and there will be corresponding updates in the future, so stay tuned!
</TabItem>
</Tabs>

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