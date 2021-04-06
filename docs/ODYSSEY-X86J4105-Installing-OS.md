---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
---

# Creating Bootable USB and Installing OS (Ubuntu Desktop 18.04)

This tutorial demonstrates how to create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04) onto the ODYSSEY - X86J4105.

## Hardware Requirements

- A Working Computer

- A USB Drive(>= 8GB is recommended)

- A Monitor

- Keyboard and Mouse

## Creating a Bootable USB

### Step 1 - Download the Operating System Image

Download your required OS Image to your local drive. In this tutorial, *Ubuntu Desktop 18.04* is used to demonstrate to install into the ODYSSEY - X86J4105.

- You can download [Ubuntu](https://ubuntu.com/download/desktop) OS Image from here.

### Step 2 - Prepare your Bootable USB

Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select `Format`.  

**Note:** Choose `FAT32` for the File System.

<div align=center><img width=450 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"/></div>

### Step 3 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align=center><img width=500 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"/></div>

### Step 4 - Writing the OS Image into USB

Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go.

<div align=center><img width=500 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"/></div>

## Installing Operating System (Ubuntu)

### Step 1 - Selecting Bootable USB as Boot Device

Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J4105, and power up. When booting up, keep pressing **`F7`** to enter the Boot Manager Screen. And use  &#8593; and &#8595; Key on keyboard to select your bootable USB.

In this Tutorial, `UEFI: Mass Storage Device 1.00` is the bootable USB.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png"/></div>

### Step 2 - Installing the OS

Select the **`Install ubuntu`** and press Enter. Follow through the installing instructions on the screen, i.e. system language, user name, location and etc.

**Note:** For detail steps of Installing ubuntu, you can follow [this](https://www.youtube.com/watch?v=vt5Lu_ltPkU) video for more information. *The Installing part starts at 3:20 in the video.*

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png"/></div>

### Step 3 - Reboot and Enjoy New OS!

If everything goes well, ubuntu should be installed on the ODYSSEY - X86J4105 and you can start enjoying your new OS!

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg"/></div>

## How to Upgrade the BIOS

BIOS is also like an OS and can be upgraded to fix bugs and enhance performance of the ODYSSEY - X86J4105. Here is the instruction how to upgrade the BIOS version on ODYSSEY - X86J4105.

### Current Latest BIOS Version and Changelog

<div class="tips" style="display: table; table-layout: fixed; background-color: #fbd373; height: auto;  width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #FC4A1A; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="color: #000000; font-weight: bold; margin-top: 10px;">Important Notes</p>
<p style="color: #000000; font-size: 14px;"> 1. It <b>wipes the old BIOS settings</b>, and so you would need to <b>re-activate</b> your Windows(if using Windows) again (wipes the activation key, needs Internet to activate again). <br/><br/> 2. If you have the <b>non-EMMC version of ODYSSEY-X86</b>, before updating the BIOS, Please make sure to <b>disable eMMC in the BIOS Settings</b> Before and After the updates.</p>
</div>
</div>

> You may check in the BIOS main page for BIOS and EC Firmware's versions.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/latest-BIOS.png"/></div>

- **Latest BIOS:**

**SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07**

- **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480
    1. Fix bug: loads into other OS other than Windows when set to load others.

>**History BIOS:**

> **[SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip)**

> - **SHA256:** 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a

>    1. Added **Secure Boot**.
>    2. Added **Wake on LAN**.
>    3. Fix reboot into BIOS settings page under Linux environment (Eg. `systemctl reboot --firmware-setup`).
>    4. Fix Linux Wake on Lan light issue.

> **[SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20](http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip)**

> **SHA256:** eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206

>1. Under BIOS Menu, **Setup** -> **Chipset** -> **Fan Control**, added **Always On** options.

>**[SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip)**

>**SHA256:** 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2

>1. Fix the problem of incomplete display of startup Seeed logo screen.

!!!Note
        Latest BIOS support **auto-flash feature**, where you only need to place the files in the **root location of FAT32 format USB** and **select the USB-drive as boot up** option. It will automatic enters flashing.

### Step 1 - Download the newest version of BIOS

Download the latest version of BIOS from [**here**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip).

### Step 2 -  Prepare bootable USB

Just like creating a bootable USB for installing OS, format the USB into `FAT32` file system. This time, just unzip the downloaded file and copy the unzipped folder into the USB.

### Step 3 - Upgrading BIOS

<div class="tips" style="display: table; table-layout: fixed; background-color: #F5A9A9; height: auto;  width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #DF0101; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="color: #000000; font-weight: bold; margin-top: 10px;">Attention</p>
<p style="color: #000000; font-size: 14px;">The first boot up from the BIOS upgrade is <b>relatively long</b>, please be patient to wait, and the installed OS will launch eventually. It will take <b>around 3 ~ 5 minutes</b>.</p>
</div>
</div>

Plug the USB into ODYSSEY - X86J4105 and boot up and follow steps below:

- Keep pressing `F7` Key to Enter Boot Manager Screen. Select the `UEFI: Built-in EFI Shell` as boot device and press `Enter`.

<div align=center><img width= 500 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/upgrading-bios.png"/></div>

- Enter the shell by pressing any key.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/process1.png"/></div>

- Enter the USB drive by typing `fs1:` and press `Enter`. Then, use `dir` to check the directories. The folder name will appear and use `cd SD-BS-CJ41G-M101-A` to go into the folder.

**Note:** Can use `tab` to autofill the folder name

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/process2.png"/></div>

- Once inside this folder, use `dir` again to list out all the files in the folder and use `cd SD-BS-CJ41G-M-101-A` to go in this folder. Use `dir` one more time to list out files in this secondary folder.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/process3.png"/></div>

- Run the `BIOS.nsh` and the updating process will begin.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/process4.png"/></div>

- The BIOS update will finish in few moments.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/biosDone.png"/></div>

### Step 4 - Reboot

- When the BIOS is upgraded, **press the ON/OFF button**, and you should see the blue light goes off.

- **Unplug the DC power and RTC battery** from the ODYSSEY-X86.

- Plug the DC power and RTC battery back to the ODYSSEY-X86.

- **Press the ON/OFF button and wait patiently**. You should see the blue light goes on.

### Step 5 - Wait Patiently

Please wait patiently and **DO NOT** unplug power (or the hardware) to corrupt the updating process. The process will take **6 ~ 8 minutes**, feel free for a coffee break!

<div class="tips" style="display: table; table-layout: fixed; background-color: #F5A9A9; height: auto;  width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #DF0101; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="color: #000000; font-weight: bold; margin-top: 10px;">Attention</p>
<p style="color: #000000; font-size: 14px;">The first boot up from the BIOS upgrade is <b>relatively long</b>, please be patient to wait, and the installed OS will launch eventually. It will take <b>around 6 ~ 8 minutes</b>.</p>
</div>
</div>

## How to update the Embedded Controller

The X86 also has a embedded controller that can be updated. Updating the EC has the same procedure as updating BIOS(auto-update):

1. Download the firmware files.

2. Save them in the root location of a FAT32 format USB drive.

3. Start ODYSSEY-X86 and boot up from the USB drive. Wait and it will automatically start the flashing process.

4. Reboot the device when it's done.

### Latest EC Firmware

[**SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

- **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

1. **Fixing bug**: Increase stability of the EC firmware.

>**History EC Firmware:**

> [**SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **Fixing bug**: Shutting down during BIOS setting page causes the ODYSSEY needs to reset the power in order to turn back on.

> [**SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. Optimize FAN control logic

>**[SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. Optimize the problem of incorrect starting and turning temperature of the Fan.

## Notes

- **Ubuntu 16 is not supported by ODYSSEY - X86J4105**

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>