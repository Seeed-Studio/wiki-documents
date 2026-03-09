---
description: Get Started with SenseCAP Card Tracker T1000-E for Meshcore. Guiding for device installation, firmware flashing and device connection.
title: Get Started with MeshCore on SenseCAP T1000-E
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.webp
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/
---
  


## Firmware Flashing

### Method1 via Web Flasher

Connect your device with a USB cable to the computer. 

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Choose `Seeed Studio SenseCAP T1000-E` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Click `Enter DFU Mode`, choose the serial port named "nRF xxx" or "TinyUSB" serial. Then click `Erase Flash` and choose the serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

If you have clicked `Erase Flash` but there is no response, click `Enter DFU` again and then click `Erase Flash` to make sure you have successfully entered DFU.

If you see "Flashing erase firmware:100%", the device has been successfully erased.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flash Firmware

Click `Enter DFU Mode`, choose the serial port named "nRF xxx" or "TinyUSB" serial. Then click `Flash` and choose the serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

If you have clicked `Flash` but there is no response, click `Enter DFU` again and then click `Flash` to make sure you have successfully entered DFU.

When the progress bar is completely filled, it indicates that Flash has completed. Then the device will automatically reboot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Method2 Drag and Drop

Connect your device with a USB cable to the computer.

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Choose `Seeed Studio Wio Tracker T1000-E` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Enter DFU mode manually: press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid on.

:::warning
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

You can see a disk named `T1000-E` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will `NOT` automatically reboot.

#### Flash Firmware

Choose the latest firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

Try to enter DFU mode manually: press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid on.

:::warning
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

You can see a disk named `T1000-E` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will automatically reboot.

## Configuration

### Power on the device

Press the button to turn it on. The LED will be on and there is a rising melody.

:::tip
If the device doesn't respond when you press the button, please charge it first. Do not use the fast-charging charger.
:::

### Get APP

Download from the Google Store or Apple Store. Or [click here](https://meshcore.co.uk/apps.html) to get the Meshcore APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Connect via App

Click `Connect` and choose the target device. The default device ID is `Meshcore-MAC Address`. The MAC address can be seen on the back of the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Enter the default pin code `123456` and then click `Pair` to connect the device.

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

You can go to APP `Position Settings` to enable GPS. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

## Message Transmission

If you have two supported devices, and there are not many MeshCore users near you, flash both to BLE Companion firmware so you can use your devices to communicate with your nearby friends and family.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### Advert

MeshCore allows you to manually broadcast your name, position and public encryption key, which is also signed to prevent spoofing. When you click the advert button, it broadcasts that data over LoRa. MeshCore calls that an Advert. There's two ways to advert, "zero hop" and "flood".

- **Zero hop** means your advert is broadcast out to anyone that can hear it, and that's it.
- **Flooded** means it's broadcast out and then repeated by all the repeaters that hear it.

You can send advert on the APP. Also you can send advert directly on the device advert page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### Public Message

After you configure the LoRa, you can send messages in the primary channel. All nearby people in the same frequency band will hear it.


### Private Message

The two devices only establish a connection when they have both received each other's advert.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### How to reboot the device

 Press and hold the button, then connect the charging cable.

## Troubleshooting

### Device never turns on

- Charge the device for 1~2 hours

- Change the charging cable
 
 - If still no luck, press and hold the device button, then connect the charging cable, see whether or not the a disk pop out in your PC. If so, [click here](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-the-bootloader) to re-install the bootloader.

### Device stuck in boot loop

**Description:**

The device will restart repeatedly, and the serial port connects and disconnects repeatedly.

**Solution:**

- Step 1: Try to enter DFU mode manually: press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid on.

:::note
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Step 2: Erase Flash

- Step 3: Flash Firmware

### Device bricked

#### Description

The device not responding, no LED, can not pair with your App.

**1) Device can still enter the DFU mode, then try to flash the bootloader**.

#### Flash the Bootloader

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
When you are flashing the bootloader, please make sure the cable connection is stable and **DO NOT** disconnect it during the flash process.
:::

**Step1: Adafruit-nrfutil Installation**

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

This is recommended method, to install latest version:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Installing from Source">

Use this method if you have issue installing with PyPi or want to modify the tool. First clone this repo and go into its folder.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Note: following commands use `python3`, however if you are on Windows, you may need to change it to `python` since windows installation of python 3.x still uses the name python.exe

To install in user space in your home directory:

```
pip3 install -r requirements.txt
python3 setup.py install
```

If you get permission errors when running `pip3 install`, your `pip3` is older or is set to try to install in the system directories. In that case use the `--user` flag:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

If you want to install in system directories (generally not recommended):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

To generate a self-contained executable binary of the utility (Windows and MacOS), run these commands:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

You will find the .exe in `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` ( with `.exe` if you are on windows).
Copy or move it elsewhere for your convenience, such as directory in your %PATH%.

</TabItem>
</Tabs>

**Step2: Check your port number**

Connect your device to your PC, and check the port number.

Example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: Flash the bootloader**

In the terminal or command prompt, navigate to the directory where you downloaded the bootloader zip package and execute the following command, replacing the correct port for your device:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

When you have completed the above steps, then [click here](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#firmware-flashing) to flash the application firmware.

**2) Device can not enter DFU mode, but the serial port can be detected**.

- Open a serial port tool

- Set the baud rate to `1200`.

- Connect the device.
   The light will flash briefly when you connect it. Keep trying this until the light stays on, means the device can back to DFU mode, then flash [bootloader](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-the-bootloader)-> [Erase flash](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-erase) -> [flash the firmware](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-firmware)

**3) Device can not enter DFU mode and no serial port display**

- press and hold the device button, then connect the charging cabl. After a disk pop out in your PC, you may see the serial port.

- If still no luck, please disconnect the charging cable and leave the device for a few days until the battery is completely drained, then connect the charging cable and try to pair it again.

**4) If none of the above steps work, please contact the tech support: support@sensecapmx.com**

### Firmware flashing failed

- **No data received on serial port**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Check if the device is in the DFU mode, the green light will be solid when the device is in DFU mode.

- **Can't open serial port**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Check if the port is correct, or try another port.

 ### Device automatically turn off

 #### Description

 - After the device turning on, it will turn off or reboot automatically after a while. 
 - The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcely rebooting or turning off the device when the device is in the following states:not finishing the messages transmission process, being configured......

 #### Troubleshoot

Perform a [flash-erase](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-erase). 

 ### Factory Reset
If you want to restore to the default settings, you can do the factory reset. There are two methods for you to do the factory reset.

- [Flash erase](https://wiki.seeedstudio.com/sensecap_t1000_e_meshcore/#flash-erase) the device. And then re-flash the latest firmware.

- Click the `Factory Reset` Button on the App. The device will reboot with the factory configuration automatically. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### Signal Quality

  - **SNR** reflects the quality of the communication link. Normal device usually operates above -7 dB. Device with a SNR lower than -10 dB indicates poor performance.

  - **RSSI** is determined jointly by the device and its surrounding environment. Normal device usually operates above -110 dBm. Device with an RSSI lower than -115 dBm is considered to have poor performance. 

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

## Resource

- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E for Meshtastic Consumption Test and Battery Life Calculation](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


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
