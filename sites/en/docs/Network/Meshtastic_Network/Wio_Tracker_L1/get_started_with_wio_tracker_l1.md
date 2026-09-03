---
description: Get Started with Wio Tracker L1 Series
title: Get Started with Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
The Wio Tracker L1 Series share the same hardware framework. Although the video guide was for the L1 Pro, it is applicable to all other products in the L1 series.
:::

## Video Tutorial

### Part 1 Unboxing

When using the L1, L1 Lite or L1 E-Ink models for the first time, after connecting to USB power supply, lift the power switch upwards to turn it on.

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Part 2 Firmware Flashing

:::caution note
Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Part 3 Device Usage

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Four-way Joystick

The `latest Alpha firmware` of L1 E-Ink firmware currently supports the four-way joystick. If you want to use the joystick, please [click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) to upgarde the firmware. 

#### Menu Bar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
Only the 2.7 firmware support the menu bar. If you want to use the menu bar, follow the [Flash Firmware Tutorial](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) to update firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Buzzer

If you want to turn on or off the buzzer, please first `update the firmware` to `2.7` version. Because only the 2.7 version firmware has the menu bar.

- Turn on the buzzer
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> Disable
- Turn off the buzzer
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Part 4 Phone Connection

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Part 5 Different States

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Get Started

:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.

1. Not finishing the message transmission process
2. Being configured
:::

### Flash Firmware

:::caution note
Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

For L1, L1 Lite and L1 Pro, select the target device to `Seeed Wio Tracker L1` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

For L1 E-Ink, select the target device to `Seeed Wio Tracker L1 E-Ink` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

Switch on the device, click `Enter DFU Mode`, there will be a serial port named `Tracker L1`, click and connect it, and there should be a driver named `Tracker L1` display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Drag the UF2 file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.

### Power on the device

Connect the USB cable to activate the device. Lift the power switch upwards to turn it on.

:::tip
If the device doesn't respond when you press the button, please charge it first. Do not use the fast-charging charger.
:::

### Connect via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- Enter the code on the display and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configure the LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.

:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::

Now that you have set the LoRa region on your device, you can continue with configuring any [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) to suit your needs.

## Advanced Configuration

### Connect via Website

If you want to text messages and communicate with other nodes in the website, you can connect the device to the [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) now.

  Step 1: Open the Website

[Click here](https://client.meshtastic.org/messages/broadcast/0) to go to the webstite.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Step 2: Add the new device
  
    Click "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    There are two ways to connect. You can choose your preferred method.

 Method 1: Via Bluetooth
  
    Choose bluetooth method. Choose the device ID in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Choose serial method. Open the device manager to see which port the device is connected to. Choose that port in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Your device will be shown in the list. Click to connect. If the connection succeed, you can see the device status directly on the website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configure GPS

Please set GPS enabled. You can adjust the update inerval and broadcast interval to obtain a more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For IOS, please turn on the `Accurate Location`. Otherwise, the positioning may deviate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Sensor connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

You can add sensor to the device via the grove interface. The following sensors have been verified to be compatible with the Grove interface on the device.

<table>
  <tr>
    <th colspan="2">Sensor type</th>
    <th colspan="1">Sensor Model</th>
  </tr>
  <tr>
    <td rowspan="4">Environmental Sensor</td>
    <td>Pressure</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperature</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>Temperature & Humidity</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>Temperature & Humidity & Pressure</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Other</td>
    <td>Heart Rate & SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C Keyboard</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Enable Telemetry to get sensor data. If you want to show sensor data on the OLED screen, enale `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Enable Telemetry to get sensor data. If you want to show sensor data on the OLED screen, enale `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

The OLED will show sensor data if you enable `on screen`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### Screen Connection

- E-Ink Screen
  [Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) to get the compatible E-Ink screen.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED Screen
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) to get the compatible OLED screen. The current OLED driver is SSD1306.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### Virtual Keyboard

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
The 2.7 version firmware now support virtual keyboard! You can type message directly on the device to communicate with other device. Follow the [Flash Firmware Tutorial](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) to update firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### Configure Ringtone

Navigate to `Settings` -> `Ringtone Config`, then enter the RTTTL ringtone string you want to use for external notifications.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="The Legend of Zelda: Item Get">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="Super Mario Theme (Short)">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="Mario Coin">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia Ringtone">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="Mario Power-Up">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="Morse Code CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

## FAQ

### Device Bricked & Bootloader Recovery {#device-bricked--bootloader-installation}

**Description:**

The device is not responding, no LED, can not pair with your App. If you found the device completely dead after flashing your own firmware, you can try re-install the bootloader too.

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

When you have completed the above steps, follow [Flash Firmware](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) to flash the application firmware.

**Troubleshooting**

- `adafruit-nrfutil` is not recognized after installation: the Python user scripts directory is not on your PATH (`Scripts` on Windows, `bin` under your home directory on macOS/Linux) — add it to PATH, or reinstall without `--user`.
- Port busy / access denied: close serial monitors, web flasher tabs, Arduino IDE, or anything else holding the port.
- `FileNotFoundError: could not open port ...` after `Touched serial port ...`: the device entered DFU mode on a new port — follow Step 5.
- Unable to enter DFU mode: see [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Manual DFU recovery**

If `--touch 1200` cannot put the device into DFU mode (e.g. the firmware is completely unresponsive), enter it by hand: connect the device, double-press `Reset` (the yellow LED stays solid), find the DFU serial port as in Step 3, then run the Step 5 command on that port WITHOUT `--touch 1200`. Success looks the same as Step 6.

### Unable to enter DFU & Entering DFU Mode Manually

Connect the device to your PC and double-press the `Reset` button — the yellow LED stays solid and a DFU serial port appears on your PC.

To flash the bootloader in this mode, follow [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation), but skip `--touch 1200` — the device is already in DFU mode.

### Exiting DFU Mode

Press the `Reset` button once to exit DFU mode.

### Unable to Communicate on the Primary Channel

If the device cannot communicate with nearby nodes or send messages, first check that the LoRa region and modem preset match the surrounding nodes. You should also check whether the default **PSK** has been changed. A different PSK on the primary channel will prevent the device from communicating with other nodes on that channel.

The easiest way to find this issue is through the mobile app. Open the app, connect to the target device, then navigate to `Settings` -> `Channels`. Select the primary channel and check the **PSK** value. If it is different from the surrounding nodes, update it to the same PSK and save the channel settings.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**Solution**

If you are not sure which settings were changed, restore the device to its default settings by following the [Factory Reset](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#factory-reset) guide. If only the PSK was changed, set it back to `AQ==`.

### Device automatically turn off

#### Description

- After the device turning on, it will turn off or reboot automatically after a while.
- The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcely rebooting or turning off the device when the device is in the following states:not finishing the messages transmission process, being configured......

#### Troubleshoot

[click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) to see the video. You need to perform a flash erase, and the re-flash the latest firmware.

### Factory Reset

If you want to restore to the default settings, you can do the factory reset. There are two methods for you to do the factory reset.

- [click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) to see the video. You need to perform a flash erase, and the re-flash the latest firmware.

- Click the `Factory Reset` Button on the App. The device will reboot with the factory configuration automatically.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Direct Message Fail

#### NodeDB Reset

NodeDB is the local database that stores information about nodes discovered in the current Mesh network. If you encounter a situation where you can't communicate with a certain node, it might be because your nodedB has stored outdated information for that node. You will need to update it.

Open the app and connect to the target device. Go to **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Device settings and Reset NodeDB button in the app" width={600} height="auto" /></p>

#### Exchange User Info

Each node will periodically send its own node information, enabling other nodes in the mesh to "see" and "recognize" it. Two nodes need to exchange their node information with each other in order to be able to communicate with each other. If you are unable to send or receive private messages with another node on the list, you can manually prompt them to exchange information in the app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerate Private Key

Two nodes need to know their private key with each other in order to be able to communicate with each oher. If one node keeps failing in private message transmission, try regenerate the private key for it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reboot the faulty device to make the configuration function.

:::note
After the key regeneration, other device needs to reconnect with the node. So it is better to delete the node in other device's node list.
:::

### Signal Quality

- **SNR** reflects the quality of the communication link. Normal device usually operates above -7 dB. Device with a SNR lower than -10 dB indicates poor performance.

- **RSSI** is determined jointly by the device and its surrounding environment. Normal device usually operates above -110 dBm. Device with an RSSI lower than -115 dBm is considered to have poor performance.

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

### Compatible Antenna

If you need a antenna replacement for L1 Pro, [click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) to get one.

## Resources

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