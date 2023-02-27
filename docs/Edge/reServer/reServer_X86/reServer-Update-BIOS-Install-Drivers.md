---
description: reServer X86
title: Upgrading BIOS and Installing Drivers
tags:
  - reServer
keywords:
  - reServer
image: https://avatars.githubusercontent.com/u/10758833
slug: /reServer-Update-BIOS-Install-Drivers
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: Upgrading BIOS and Installing Drivers
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Important Notes</p>
    <p style={{color: '#000000', fontSize: 14}}> It <b>wipes the old BIOS settings</b>, so you would need to <b>re-activate</b> your Windows(if using Windows) again (wipes the activation key, needs Internet to activate again). <br />
    </p></div>
</div>

## Upgrading BIOS

It is recommended to keep your reServer BIOS firmware up-to-date in order to get the best performance with all bug fixes. Please follow the below steps to upgrade the BIOS

### Latest BIOS Firmware

**[ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 58971f80fa26b35bc205baeabacf7b9b262a6075f6b3fbb689af3557ac97f8f7

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### Steps to Upgrade

- **Step 1.** Format flash drive as FAT32

- **Step 2.** Extract **ODYSSEY-TGL-A_v1.7a.zip**

- **Step 3.** Copy the 3 files included inside ODYSSEY-TGL-A_v1.1a to the root of the Flash Drive

- **Step 4.** Shutdown reServer if it is already ON

- **Step 5.** Plug the Flash Drive to reServer

- **Step 6.** Turn ON reServer and then press **DELETE** key to enter the BIOS setup

- **Step 7.** Choose **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**, then **ENTER**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **Step 8.** The board will enter shell environment (just wait, do nothing)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **Step 9.** Type **fs0:**

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **Step 10.** Type **dir**, and make sure the file is right. If not right, try to type **fs1:** or **fs2:** or **fs3:** then **dir** to list the files inside

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **Step 11.** Type **update.nsh** to flash the BIOS

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **Step 12.** If the BIOS update was successful, you will see the following message

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **Step 13.** Press the power button to turn OFF the board

- **Step 14.** Unplug the DC power and CMOS battery from the board

- **Step 15.** Wait a few minutes

- **Step 16.** Plug the DC power and CMOS battery back to the board

- **Step 17.** Finally turn ON the board by pressing the power button again

- **Step 18.** Please wait patiently and **DO NOT** unplug power (or the hardware) to corrupt the updating process. The process will take 6 ~ 8 minutes, feel free for a coffee break!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Attention</p>
    <p style={{color: '#000000', fontSize: 14}}>The first boot up from the BIOS upgrade is <b>relatively long</b>, please be patient to wait, and the installed OS will launch eventually. It will take <b>around 6 ~ 8 minutes</b>.</p>
  </div>
</div>

## Installing Drivers

If you are using Windows on the reServer, it is recommended to install the relevant drivers for better functionality of the system.

The drivers include:

- Realtek High Definition Audio Driver
- Intel® Chipset Device Software
- Intel® Graphics Driver
- Intel® HID Event Filter driver
- Intel® Converged Security and Management Engine Driver
- Intel® Serial IO Host Controller Driver
- WiFi Driver
- Ethernet Driver
- Bluetooth Driver

Please follow the below steps to install the above drivers

- **Step 1.** Download [this file](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip) and extract the **reServer-drivers.zip** file

- **Step 2.** Proceed to the steps below

### Realtek High Definition Audio Driver

- **Step 1.** Extract **audio_realtek_6.0.9057.1_w1064.zip**

- **Step 2.** Open **audio_realtek_6.0.9057.1_w1064**

- **Step 3.** Double click **Setup.exe**

### Intel® Chipset Device Software

- **Step 1.** Extract **chipset-10.1.18460.8229-public-mup.zip**

- **Step 2.** Open **1_chipset-10.1.18460.8229-public-mup**

- **Step 3.** Double click **SetupChipset.exe**

### Intel® Graphics Driver

- **Step 1.** Extract **Graphics Driver.zip**

- **Step 2.** Double click **igfx_win_101.1069.exe**

### Intel® HID Event Filter Driver

- **Step 1.** Extract **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**

- **Step 2.** Navigate to `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`

- **Step 3.** Double click **Setup.exe**

### Intel® Converged Security and Management Engine Driver

- **Step 1.** Extract **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**

- **Step 2.** Navigate to `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`

- **Step 3.** Double click **MEISetup.exe**

### Intel® Serial IO Host Controller Driver

- **Step 1.** Extract **SerialIO-Win10-30.100.2129.8.zip**

- **Step 2.** Double click **SetupSerialIO.exe**

### WiFi Driver

- **Step 1.** Extract **WiFi-22.90.0-Driver64-Win10-Win11.zip**

- **Step 2.** Double click **WiFi-22.90.0-Driver64-Win10-Win11.exe**

### Ethernet Driver

- **Step 1.** Extract **Wired_driver_26.6_x64.zip**

- **Step 2.** Double click **Wired_driver_26.6_x64.exe**

### Bluetooth Driver

- **Step 1.** Extract **Wireless Bluetooth.zip**

- **Step 2.** Double click **BT-22.90.2-32-64UWD-Win10-Win11.exe**

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
