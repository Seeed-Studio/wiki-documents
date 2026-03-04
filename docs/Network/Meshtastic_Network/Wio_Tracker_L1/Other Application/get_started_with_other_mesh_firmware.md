---
description: Get Started with Wio Tracker L1 Series for Meshcore. Guiding for device installation, firmware flashing and device connection.
title:  Get Started with Meshcore
keywords:
- Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
---       


## Firmware Flashing

### Method1 via Web Flasher

Connect your device with a USB cable to the computer. Please make sure the cable supports data transmission. 

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Choose `Seeed Studio Wio Tracker L1 Pro` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Click `Enter DFU Mode`, choose the serial port named "L1 Pro" or "TinyUSB serial". Then click `Erase Flash` and choose the serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

If you have clicked `Erase Flash` but there is no response, click `Enter DFU` again and then click `Erase Flash` to make sure you have successfully entered DFU.

If you see "Flashing erase firmware:100%", the device has been successfully erased.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flash Firmware

Click `Enter DFU Mode`, choose the serial port named "L1 Pro" or "TinyUSB" serial. Then click `Flash` and choose the serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

If you have clicked `Flash` but there is no response, click `Enter DFU` again and then click `Flash` to make sure you have successfully entered DFU.

When the progress bar is completely filled, it indicates that Flash has completed. Then the device will automatically reboot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Method2 Drag and Drop

Connect your device with a USB cable to the computer. Please make sure the cable supports data transmission. 

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Choose `Seeed Studio Wio Tracker L1 Pro` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Double click the RST button to manually enter DFU mode. You can see a disk named `TRACKER L1` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will `NOT` automatically reboot.

#### Flash Firmware

Choose the latest firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Double click the RST button to manually enter DFU mode. You can see a disk named `TRACKER L1` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will NOT automatically reboot.

## Configuration

### Power on the device

Lift the power switch upwards to turn it on.

:::tip
If the device doesn't respond when you press the button, please charge it first. Do not use the fast-charging charger.
:::

### Get APP

Download from the Google Store or Apple Store. Or [click here](https://meshcore.co.uk/apps.html) to get the Meshcore APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Connect via App

Click `Connect` and choose the target device The default device ID is `Meshcore-MAC Address`. The MAC address can be seen on the label at the bottom of the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Enter the pin code shown on the device screen and then click `Pair` to connect the device.

:::tip
If the connection fails, open your phone's Bluetooth list and `forget` or `Unpair` the device. Then try to reconnect again.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Configure the LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Then reboot the device, or else the configuration will not take effect.

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868 MHz|869.4 - 869.65|10|27|

Now that you have set the LoRa region on your device, you can continue with configuring any [LoRa parameter](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) to suit your needs.

### Configure GPS

If you want to use GPS, please set it enabled. 

You can go to APP `Position Settings` to enable GPS. Or you can go to device GPS page and press the four-way joystick to turn on or off the GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configure Buzzer

Click the User button four times to control the buzzer turning on or off.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## Message Transmission

If you have two supported devices, and there are not many MeshCore users near you, flash both to BLE Companion firmware so you can use your devices to communicate with your nearby friends and family.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Advert

MeshCore allows you to manually broadcast your name, position and public encryption key, which is also signed to prevent spoofing. When you click the advert button, it broadcasts that data over LoRa. MeshCore calls that an Advert. There's two ways to advert, "zero hop" and "flood".

- **Zero hop** means your advert is broadcast out to anyone that can hear it, and that's it.
- **Flooded** means it's broadcast out and then repeated by all the repeaters that hear it.

You can send advert on the APP. Also you can send advert directly on the device advert page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Public Message

After you configure the LoRa, you can send messages in the primary channel. All nearby people in the same frequency band will hear it.


### Private Message

The two devices only establish a connection when they have both received each other's advert.


## FAQ

### Device bricked & Bootloader installation

**Description:**

The device is not responding, no LED, can not pair with your app. If you find the device completely dead after flashing your own firmware, you can try re-installing the bootloader too.

:::danger note
When you are flashing the bootloader, please make sure the cable connection is stable and **DO NOT** disconnect it during the flash process.
:::

- Step 1: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Step 2: Enter DFU mode

  Double click the RST button to enter DFU mode. The disk name "Tracker L1" will pop out.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- step 3: Paste the bootloader file

  Cover all the files on the disk with the downloaded bootloader file.

- step 4: Flash the firmware

  When you have completed the above steps, then you can follow this [step](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#flash-firmware-1) to flash the application firmware. You may need to [enter the DFU mode manually](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)


### Unable to enter DFU & Entering DFU Mode Manually

Connect the device to your PC, double-press the `Reset` button. The yellow LED will stay solid, and a new USB drive named `Tracker L1` will appear on your PC.

### Exiting DFU Mode

Press the `User` button once to exit DFU mode.

 ### Device automatically turns off

 #### Description

 - After the device turns on, it will turn off or reboot automatically after a while. 
 - The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcibly rebooting or turning off the device when the device is in the following states: not finishing the message transmission process, being configured......

 #### Troubleshoot

[Flash Erase](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#flash-erase-1) the firmware

### Factory Reset
If you want to restore to the default settings, you can do the factory reset. There are two methods for you to do a factory reset.

- [Flash Erase](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#flash-erase-1) the firmware

- Click the `Factory Reset` button on the app. The device will reboot with the factory configuration automatically. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>


### Signal Quality

- **SNR** reflects the quality of the communication link. Normal devices usually operate above -7 dB. A device with a SNR lower than -10 dB indicates poor performance.

- **RSSI** is determined jointly by the device and its surrounding environment. A normal device usually operates above -110 dBm. A device with an RSSI lower than -115 dBm is considered to have poor performance.

    To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

### Compatible Antenna

If you need an antenna replacement for the L1 Pro, [click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) to get one.

## Resource
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D printing reference file](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 New Four-way Joystick) 3D printing reference file](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [L1 Enclosure Design Challenge](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Outline File](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC Certification](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC Certification](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE Certification](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Power Consumption Test and Battery Life Calculation](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
