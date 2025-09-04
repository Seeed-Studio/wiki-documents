---
description: Get Started with SenseCAP Card Tracker T1000-E for LoRaWAN via SES
title: Get Started with SES 
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /open_source_lorawan
sidebar_position: 2
last_update:
  date: 1/2/2025
  author: Jessie
---


## Preparation

### Hardware Preparation

- SenseCAP T1000-E x 1
- USB Cable x 1
- Computer x 1

### Software Preparation

Before you can start developing，the following software tools are required.

#### SEGGER Embedded Studio (SES)

SES is an all-in-one solution for managing, building, testing and deploying embedded applications. This means smooth, efficient development operations thanks to its wide range of features. The powerful project manager enables the management of projects large and small. Version control features enable automatic application deployment.

Download the corresponding installation package according to your operating system.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>

:::tip
It's recommended to use 5.68 version.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

The nRF5 SDK provides a rich developing environment for nRF5 Series devices by including a broad selection of drivers, libraries, examples for peripherals, SoftDevices, and proprietary radio protocols.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed T1000-E Example Package

Seeed provides an example project for developers to get started more quickly. This example includes LoRaWAN communication, positioning information acquisition, onboard sensor data acquisition, etc.

<a  href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed Example-Download</span></a>

**Add Seeed Example file to nRF5 SDK**

Copy the `Seeed T1000-E Example file` to the following path of nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### Check the Bootloader info

Before start, please check the bootloader info first.

- **Step 1:** Enter DFU mode

 Connect the USB cable to your PC, press and hold the device button, then connect the charging cable, there should be a driver named `T1000-E` display.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Step 2:** Check the INFO_UF2.TXT

 The correct bootloader information is shown in the figure：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### Run LoRaWAN Example Project

**Import Example Project**

Here we take `08_ses_lorawan_gnss` project as an example.
Open SES and open the example project.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**Modify the LoRaWAN Params**

Define the REGION/DEVICE_EUI/JOIN_EUI/APP_KEY in `lorawan_key_config.h`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**Build the modified project**

Select the required project in the Project Explorer.<br/>
Choose `Build` > `Build` or press `F7`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### Convert to UF2 file

After the build is successful, there will be a `.hex` file in the output folder, we have included a Python script `uf2conv.py` in `Firmware` folder to convert the hex file to uf2 file.

Navigate to the file path and run the script:

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### Flash the Application Firmware

- **Step 1:** Enter DFU mode

 Connect the USB cable to your PC, press and hold the device button, then connect the charging cable, there should be a driver named `T1000-E` display.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Step 2:** Flash LoRaWAN Application Firmware

 Copy `UF2` file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.

### Connect to a LNS

In this section, we will connect the device to the LNS (here we take TTN as an example) to view the data, and check the location via TTN Mapper.

To begin, register for an account with The Things Industries or The Things Network.

#### Step 1: Create an application

Navigate to Applications page, click "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Enter an Application ID, click Create Application to save your changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Step 2: Register the Device

Click "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Set the following parameters:

**Frequency Plan**: Select the appropriate Frequency plan for the target region

**LoRaWAN version**:LoRaWAN Specification 1.0.4

**Regional Parameters version**: PR002 Regional Parameters V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: Which you defined in the 'lorawan_key_config.h' file in the previous setting.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**Check Live Data**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### Restore the Factory Firmware

- Use the factory firmware back, flash the `t1000_e_dev_kit_11_lorawan_tracker.uf2` firmware.
- Use the SenseCAP cloud, need to import the SenseCAP keys by scanning the QR code on the device label.
