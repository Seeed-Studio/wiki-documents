---
description: ODYSSEY - X86J41x5
title: Firmware Upgrade
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Updating-Firmware
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl:
--- -->

This tutorial demonstrates how to update the BIOS and EC (Embedded Controller) firmware for the ODYSSEY - X86.

## Hardware Requirements

- A Working Computer

- A USB Drive

- A Monitor

- A Keyboard

## How to Upgrade the BIOS

BIOS is also like an OS and can be upgraded to fix bugs and enhance performance of the ODYSSEY - X86J41x5. Here is the instruction how to upgrade the BIOS version on ODYSSEY - X86J41x5.

### Current Latest BIOS Version and Changelog

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Important Notes</p>
    <p style={{color: '#000000', fontSize: 14}}> 1. It <b>wipes the old BIOS settings</b>, and so you would need to <b>re-activate</b> your Windows(if using Windows) again (wipes the activation key, needs Internet to activate again). <br /><br /> 2. If you have the <b>non-EMMC version of ODYSSEY-X86</b>, before updating the BIOS, Please make sure to <b>disable eMMC in the BIOS Settings</b> Before and After the updates.</p>
  </div>
</div>

> You may check in the BIOS main page for BIOS and EC Firmware's versions.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" /></div>

### Latest BIOS Firmware

**[SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip)**

- Improve overall stability.

**Note:** If you want the above BIOS with **bifurcation feature enabled**, please contact techsupport@seeed.io

With bifurcation feature, you will be able to use the M.2 M-Key for 4 PCIe x1. This enables you to connect four different PCIe x1 devices to the M.2 such as multiple network ports, multiple SSDs and other expansion devices. With the normal BIOS without bifurcation feature, M.2 M-Key can be used for only one PCIe x4.

>**History BIOS:**

**[SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)**

- **SHA256:** 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2

- Improve overall stability.

> **[SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip)**

> - **SHA256:** 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5

>    1. Improve overall stability.

> **[SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip)**

> - **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480

>    1. Fix bug: loads into other OS other than Windows when set to load others.

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

Download the latest version of BIOS from [**here**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip).

### Step 2 -  Prepare bootable USB

Just like creating a bootable USB for installing OS, format the USB into `FAT32` file system. This time, just unzip the downloaded file and copy the contents into the USB.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png
" /></div>

### Step 3 - Upgrading BIOS

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Attention</p>
    <p style={{color: '#000000', fontSize: 14}}>The first boot up from the BIOS upgrade is <b>relatively long</b>, please be patient to wait, and the installed OS will launch eventually. It will take <b>around 3 ~ 5 minutes</b>.</p>
  </div>
</div>

Plug the USB into ODYSSEY - X86J41x5 and boot up and follow steps below:

- Keep pressing `F7` Key to Enter **Boot Manager Screen**. Select the `UEFI: Built-in EFI Shell` as boot device and press `Enter`.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg" /></div>

- Wait a couple of seconds to enter the EFI shell

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg" /></div>

- You will see the following message

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg" /></div>

- Type **BIOS.nsh** and press **ENTER** to start the update process

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg" /></div>

- If the BIOS update was successful, you will see the following output

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg" /></div>

### Step 4 - Reboot

- When the BIOS is upgraded, **press the ON/OFF button**, and you should see the blue light goes off.

- **Unplug the DC power jack and RTC battery** from the ODYSSEY-X86.

- Wait a couple of minutes

- Plug the RTC battery and DC power jack back to the ODYSSEY-X86.

- **Press the ON/OFF button and wait patiently**. You should see the blue light goes on.

### Step 5 - Wait Patiently

Please wait patiently and **DO NOT** unplug power (or the hardware) to corrupt the updating process. The process will take **6 ~ 8 minutes**, feel free for a coffee break!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Attention</p>
    <p style={{color: '#000000', fontSize: 14}}>The first boot up from the BIOS upgrade is <b>relatively long</b>, please be patient to wait, and the installed OS will launch eventually. It will take <b>around 6 ~ 8 minutes</b>.</p>
  </div>
</div>

## How to update the Embedded Controller

The X86 also has a embedded controller that can be updated. Updating the EC has the same procedure as updating BIOS(auto-update):

1. Download the firmware files.

2. Save them in the root location of a FAT32 formatted USB drive.

3. Start ODYSSEY-X86 and press **F7** to enter **Boot Select Mode**

4. Choose the connected flash drive (if there are 2 options for the flash drive, choose the one that starts with **UEFI**)

5. Wait and it will automatically start the flashing process.

6. Reboot the device when it's done.

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/r7M4T-HOZ20" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Latest EC Firmware

[**SD-EC-CJ41G-M-101-R 07/26/2022 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip)

1. **Fixing bug**: Increase overall stability.

>**History EC Firmware:**

[**SD-EC-CJ41G-M-101-Q 10/12/2021 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip)

- **SHA256:** 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4

1. **Fixing bug**: Increase overall stability.

[**SD-EC-CJ41G-M-101-O 08/16/2021 15:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip)

> - **SHA256:** a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13

> 1. **Fixing bug**: Increase overall stability.

> [**SD-EC-CJ41G-M-101-M 04/16/2021 01:20:07**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip)

> - **SHA256:** DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD

> 1. **Fixing bug**: Increase overall stability.

> [**SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

> - **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

> 1. **Fixing bug**: Increase stability of the EC firmware.

> [**SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **Fixing bug**: Shutting down during BIOS setting page causes the ODYSSEY needs to reset the power in order to turn back on.

> [**SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. Optimize FAN control logic

>**[SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. Optimize the problem of incorrect starting and turning temperature of the Fan.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
