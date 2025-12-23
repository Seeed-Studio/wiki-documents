---
description: reComputer Industrial R21xx Flash OS
title: reComputer Industrial R21xx Flash OS
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R21xx
- Flash OS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_r21xx_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
---
# reComputer Industrial R21xx Flash OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R21xx series is powered by Raspberry Pi CM5 and Hailo-8 AI accelerator, this compact edge AI system delivers 26 TOPS for real-time multi-channel vision processing. With a quad-core Cortex-A76 CPU, up to 16GB RAM, 64GB eMMC, and a versatile interface, it ensures seamless integration into industrial AI applications.

## Hardware Requirements

You need to prepare the following hardware

- reComputer Industrial R21xx x 1
- Host Computer (Windows/Mac/Linux) x 1
- Ethernet cable x 1
- Power adapter (12V-24V) BYO

## Software Requirements

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Flash OS

### For Windows host computer

- **Step 1.** Click the link below to download the device [image file](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)
Select the last one and click the date link to download:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **Step 2.** Download **Raspberry Pi Imager** software from **[here](https://www.raspberrypi.org/software/)**

- **Step 3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Step 4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **Step 5.** Click **CHOOSE OS** and Select the downloaded image file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

Continue burning the image until it succeeds.

Unplug the USB-C port, press the boot button again, and power on/off. If you can log in to the system normally, the image has been burned successfully and can be used normally.

### For MAC host computer

:::caution
**You need to install [homebrew](https://brew.sh/) before proceed the following steps.**
Please open a terminal and type ```brew -V``` to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.
:::

- **Step 1.** Download and Install **Raspberry Pi Imager** Application by visiting [this link](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)

- **Step 2.** Open the **Raspberry Pi Imager** Application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set local settings** and more

- **Step 4.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**NOTE:** You can select other OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Or you can use this link to download the image file:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 5.** Click **CHOOSE STORAGE**

- **Step 6.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

### For Linux host computer

- **Step 1.** Download snap

```sh
sudo apt install snap
```

- **Step 2.** Download **rpi-imager**

```sh
snap install rpi-imager
```

- **Step 3.** Open Raspberry Pi Imager software

```sh
rpi-imager
```

The result is shown as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **Step 4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set local settings** and more

- **Step 5.** Click **CHOOSE OS** and select your preferred OS

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTE:** You can select other OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Or you can use this link to download the image file:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 6.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 7.** Finally, click **NEXT** and **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.
The result is shown as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## Boot from NVME

### Update EEPROM

*This method works if you have an SSD and have booted the device successfully with emmc. Please make sure your system is the latest Raspberry Pi system (Bookworm or later) and and your RPi 5 firmware is updated to 2023-12-06 (Dec 6th) or newer, otherwise it may not recognize the NVME-related configurations.*

**Step 1**:Ensure that your Raspberry Pi system is up-to-date (Bookworm or later), enter the following command to update the RPi 5 firmware:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Scroll down to `Advanced Options` and press Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

Scroll down to `Bootloader Version` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

And finally choose `Latest`, and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

Select `No` here - you want the `latest` bootloader.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

And exit from the tool by selecting `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

If asked to reboot, select `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**Step 2**：Cick **Applications** =>**Accessories** =>**SD Card Copier** on the main screen, run the **SD Card Copier** program, and copy the OS to the NVME ssd as shown in the figure below.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Setting the Raspberry Pi to boot from the NVMe SSD

If you have easy access to your SD card slot you could turn off your Pi, pop out the SD card and (if everything's working as expected) it should automagically boot from your NVMe drive the next time you start it up. If you want to leave the SD card where it is and still boot from NVMe though, you'll need to change the boot order.

**Step 1**:Enter the following command:

```shell
  sudo raspi-config
```

Scroll down to `Advanced Options` and press Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**Step 2**:Scroll down to `Boot Order` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**Step 3**:Choose `NVMe/USB Boot` and press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

Configuration will be confirmed. Press Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**Step 4**:Return to the first screen by selecting `Back` or pressing the Esc key. Then navigate to Finish using the right cursor key.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

You will be asked whether you want to reboot now. Click `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## Flash ubuntu to NVME

### First: Update EEPROM with SD card

Please refer this [link](https://wiki.seeedstudio.com/r2000_series_getting_start/#update-eeprom).

To set the NVMe boot order as the highest priority, use the following command:

```
sudo rpi-eeprom-config --edit
```

And then change rpi-eeprom-config like below:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Use `Ctrl+X` and input `y` to store the result. And the result is as follows:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="800" height="auto" /></div>

### Second: Burn Ubuntu onto the NVMe

Open Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="800" height="auto" /></div>

Choose Ubuntu os:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="800" height="auto" /></div>

Finally, click `Next` and wait for the flashing process to complete.

### Third: Replace the OS file

Install `pcie-fix.dtbo` with this [link](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)

Copy pcie-fix.dtbo to /overlays file like below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="800" height="auto" /></div>

Modify the `config.txt`, add `dtoverlay=pcie-fix` at the end of the file like below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="800" height="auto" /></div>

And then Use `Ctrl+X` and input `y` to store this file.

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
