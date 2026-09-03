---
description: Guide to flashing MeshCore firmware on the Wio Tracker L1 Pro via Web USB or drag-and-drop, along with app configuration for LoRa region, GPS, and sending messages.
title: Get Started with MeshCore on Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Firmware Flashing

### Method1 via Web Flasher

Connect your device with a USB cable to the computer. Please make sure the cable supports data transmission.

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://meshcore.io/flasher).

Choose `Seeed Studio Wio Tracker L1 Pro` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://docs.meshcore.io/) to see the tutorial.

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

Go to the [Meshcore Web Flasher](https://meshcore.io/flasher).

Choose `Seeed Studio Wio Tracker L1 Pro` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Companion Bluetooth`. Devices flashed with Bluetooth companion firmware can be connected to the APP. If you want to flash other firmware, please [click here](https://docs.meshcore.io/) to see the tutorial.

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

Download from the Google Store or Apple Store. Or [click here](https://meshcore.io/#download) to get the Meshcore APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Connect via App

Click `Connect` and choose the target device The default device ID is `Meshcore-MAC Address`. The MAC address can be seen on the label at the bottom of the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Enter the pin code shown on the device screen and then click `Pair` to connect the device.

:::tip
If the connection fails, open your phone's Bluetooth list and `forget` or `Unpair` the device. Then try to reconnect again.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Connect via the web interface（BLE）

1. Open the [MeshCore Web App](https://app.meshcore.nz/) and click the **Settings** icon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Select the **BLE** tab, then click **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. In the system Bluetooth popup, select your device (for example, MeshCore-xxxxxx) and click **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. When prompted, enter the Bluetooth passkey shown on the device screen, then click **OK**. This passkey is not `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Wait until the status changes to connected and your node appears in the MeshCore interface.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

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

### Configure Sensor

The Wio Tracker L1 ships with MeshCore firmware `1.12` pre-installed. Grove sensor support via the built-in Grove connector was added in firmware `1.13`; the latest release is `1.16`.

:::note
Grove sensors require firmware `1.13` or later. If your device still runs the factory `1.12`, follow [Method1 via Web Flasher](#method1-via-web-flasher) and select the latest version.
:::

From `1.13` onward, this opens up straightforward integration of environmental sensors — temperature, humidity, air quality, and more — through the L1's built-in Grove connector, without any soldering or additional hardware. Plug a compatible Grove sensor into the connector and it will be recognized automatically.

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

### Device Bricked & Bootloader Recovery {#device-bricked--bootloader-installation}

**Description:**

The device is not responding, no LED, can not pair with your app. If you find the device completely dead after flashing your own firmware, you can try re-installing the bootloader too.

The bootloader is restored over the USB serial port (Serial DFU) with `adafruit-nrfutil`.

:::danger note
During flashing, keep the cable connection stable and **DO NOT** disconnect it — even if the serial port number changes.
:::

**Step 1: Prepare**

- A Wio Tracker L1 series device (L1 / L1 Pro)
- A known-good USB data cable (not a charge-only cable)
- A Windows, macOS or Linux PC with Python 3 and pip
- The bootloader package: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — do NOT extract the ZIP; `adafruit-nrfutil` uses it as it is

**Step 2: Install adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

Check that Python 3 and pip are available (if pip is missing, run `python -m ensurepip --upgrade` first):

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

Then install and verify (the version tested for this guide is `0.5.3.post16`):

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

If pip is missing, run `python3 -m ensurepip --upgrade` first.

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

If pip is missing, run `python3 -m ensurepip --upgrade` first.

</TabItem>
</Tabs>

:::note
Always check the version with `adafruit-nrfutil version`. Do NOT use `adafruit-nrfutil --version`.
:::

**Step 3: Check the serial port**

Note the device’s serial port — the examples below vary by PC:

<Tabs>
<TabItem value="windows" label="Windows">

Open **Device Manager → Ports (COM & LPT)**, for example:

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

The device appears as `/dev/cu.usbmodemXXXX`.

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

The device usually appears as `/dev/ttyACM0`; if nothing is listed, also try `ls /dev/ttyUSB*`.

</TabItem>
</Tabs>

**Step 4: Flash the bootloader**

Replace the port with the one you found in Step 3:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

If the ZIP is not in your terminal’s current folder, pass its full path to `--package`, e.g. `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`.

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**Step 5: Handle the serial port change**

`--touch 1200` restarts the device into DFU mode, so the serial port usually changes and the first command may stop with a traceback like this:

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

This is NOT a failure — the device already entered DFU mode on a NEW port. On the tested Windows PC, for example, it changed from `COM43` to `COM45`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="DFU serial port after re-enumeration in Windows Device Manager" width={600} height="auto" /></p>

**Keep the USB cable connected.** Find the new port (refresh **Device Manager → Ports (COM & LPT)**, or re-run `ls /dev/cu.*` / `ls /dev/ttyACM*`), then flash again on the new port WITHOUT `--touch 1200`:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**Step 6: Confirm the result**

The flashing succeeded when the output ends with `Device programmed.`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil output ending with Device programmed" width={600} height="auto" /></p>

After that, a UF2 drive appears on your PC (screenshot from the tested Windows PC). Its volume label varies with the bootloader build — the tested unit showed `XIAO-BOOT` — and is NOT a pass/fail criterion; do not judge the result by the drive name or by `INFO_UF2.TXT`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="UF2 drive appears after bootloader flashing" width={600} height="auto" /></p>

**Step 7: Reinstall the application firmware**

:::warning
Restoring the bootloader does NOT reinstall the application firmware — the device still has no working firmware until you flash it again.
:::

When you have completed the above steps, follow [Firmware Flashing](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#firmware-flashing) to flash the application firmware.

**Troubleshooting**

- `adafruit-nrfutil` is not recognized after installation: the Python user scripts directory is not on your PATH (`Scripts` on Windows, `bin` under your home directory on macOS/Linux) — add it to PATH, or reinstall without `--user`.
- Port busy / access denied: close serial monitors, web flasher tabs, Arduino IDE, or anything else holding the port.
- `FileNotFoundError: could not open port ...` after `Touched serial port ...`: the device entered DFU mode on a new port — follow Step 5.
- Unable to enter DFU mode: see [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Manual DFU recovery**

If `--touch 1200` cannot put the device into DFU mode (e.g. the firmware is completely unresponsive), enter it by hand: connect the device, double-press `Reset` (the yellow LED stays solid), find the DFU serial port as in Step 3, then run the Step 5 command on that port WITHOUT `--touch 1200`. Success looks the same as Step 6.

### Unable to enter DFU & Entering DFU Mode Manually

Connect the device to your PC and double-press the `Reset` button — the yellow LED stays solid and a DFU serial port appears on your PC.

To flash the bootloader in this mode, follow [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/get_started_with_other_mesh_firmware/#device-bricked--bootloader-installation), but skip `--touch 1200` — the device is already in DFU mode.

### Exiting DFU Mode

Press the `Reset` button once to exit DFU mode.

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

- [Bootloader (Serial DFU package)](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) 3D printing reference file](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 New Four-way Joystick) 3D printing reference file](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 Enclosure Design Challenge](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Outline File](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC Certification](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC Certification](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE Certification](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Power Consumption Test and Battery Life Calculation](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>