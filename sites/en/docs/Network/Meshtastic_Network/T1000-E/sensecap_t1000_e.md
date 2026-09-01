---
description: Get Started with SenseCAP Card Tracker T1000-E for Meshtastic
title: Get Started with T1000-E Tracker
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: Advent Jiang
createdAt: '2024-07-24'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.

1. Not finishing the message transmission process
2. Being configured
:::

## Video Tutorial

### Part 1: Unboxing Setup

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Part 2: Status Indicators

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Part 3: Flash New Firmware

:::caution note
Before flashing the firmware, please ensure you bought the `T1000-E for Meshtastic`. Please don't flash the firmware to other tracker model that doen't support Meshtastic. Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Part 4: Troubleshooting Instruction

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Get Started

Download `Meshtastic` App:

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### Power on the device

Press once to power on the device, there will be a rising melody, and the LED light will stay on for about 1s.

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

- Enter the code(default code is `123456`) and then click `OK` to connect the device.

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

### Configure Sensor

|Sensor|Description|
|-|-|
|Temperature|✅|
|Light|Not supported by the App currently|
|Accelerometer|To be continued|

**Temperature Sensor Config**

<Tabs>
<TabItem value="ios" label="IOS App">

Navigate to `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Navigate to `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp-an-new.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Buzzer and LED Config**

||Type|Output PIN|
|-|-|-|
|Buzzer|PWM buzzer|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

Navigate to `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Navigate to `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Check [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) for more details.

:::tip
After you update the device configuration, the device will restart, which may take some time.
:::

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

### Configure GPS

Please set GPS enabled. You can adjust the update inerval and broadcast interval to obtain a more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For IOS, please turn on the `Accurate Location`. Otherwise, the positioning may deviate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Configure Buzzer

The buzzer is enabled by default. If you want to disable the buzzer, set `Alert Message buzzer`, `Alert bell buzzer` and `Use PWM bizzer` as the following screenshot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

## Flash Firmware

### Check the Firmware Version

Navigate to `Settings` -> `Firmware Updates`, check the current firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/check_firmware123.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️DO NOT FLASH THE FOLLOWING FIRMWARE</div>

:::danger
DO NOT FLASH OTHER FIRMWARE OTHER THAN T1000-E FIRMWARE, THIS MAY CAUSE THE DEVICE TO FREEZE.
:::

The following firmware will brick your device：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Flash the Application Firmware

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
Before flashing the firmware, please ensure you bought the `T1000-E for Meshtastic`. Please don't flash the firmware to other tracker model that doen't support Meshtastic. Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::
#### Step 1: Enter DFU mode

<Tabs>
<TabItem value="method1" label="Method 1">

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Connect the device to your PC, select the device to `Seeed Card Tracker T1000-E` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Click `Enter DFU Mode`, there will be a serial port named `T1000-E xxx` display, click and connect it, the green LED will be solid, and there should be a driver named `T1000-E` display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Method 2">

Connect the USB cable to your PC, press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid, and there should be a driver named `T1000-E` display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Step 2: Flash Erase

:::caution note
Before flashing the firmware, please flash the erased firmware first!
:::

Click the `trash` symbol.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Download the erase firmware and copy to the driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

This process may take some time, wait for the drive to disappear, then open a serial monitor to complete the erase process.

#### Step 3: Flash Firmware

Select the latest firmware, and download the `UF2` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copy UF2 file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.

## FAQ

### How to check the device name

 Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Click `Open Serial Monitor`, connect the device to your PC, check the serial log, keyword `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### How to reboot the device

 Press and hold the button, then connect the charging cable.

## Troubleshooting

### Device never turns on

- The device may appear to be powered off when the LED indicator and buzzer are not activated. Before performing the steps below, it is recommended to `check the following parameters`:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- Use a known working USB cable to `charge the device` continuously for 1–2 hours to ensure the battery has sufficient power to wake up the system.

:::note
Lithium batteries slowly self-discharge even when powered off. A device stored unused for a long time may therefore become deeply discharged and fail to turn on or keep restarting during boot. This is common for lithium-battery devices, not a T1000-E defect.
:::

- If the device has been stored unused for a long time and cannot start, charge it continuously for up to 24 hours, then try again. The 24-hour charge is only for recovering a deeply discharged battery, not for normal charging.

- If it still keeps restarting during startup, disconnect the cable and leave the device unused for about 7 days, then charge it again and try to power it on.

- To avoid deep discharge, do not store the device with an empty or very low battery for a long time; recharge it when it drops below 20% and periodically during long-term storage.

- If the device still does not respond after charging, `perform a hard reset` as followed: Unplug the USB cable. Press and hold the button, then plug in the USB cable while keeping the button pressed. Hold for approximately 3 seconds, then release it. This forces a system reset.

- If still no luck, try `re-install the bootloader`. Connect a USB cable to a computer. Hold the device button, then connect the device to the computer, see whether or not the a disk pop out in your PC. If so, [re-install the bootloader](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-bootloader).

### Device stuck in boot loop

**Description:**

The device will restart repeatedly, and the serial port connects and disconnects repeatedly.

**Solution:**

:::note
If the device has been unused for a long time, a deeply discharged battery may also cause repeated restarts during startup. Try the battery recovery steps in [Device never turns on](https://wiki.seeedstudio.com/sensecap_t1000_e/#device-never-turns-on) before the firmware recovery below.
:::

- Step 1: Try to enter DFU mode manually: press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid on.

:::note
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Step 2: [Erase Flash](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase).

- Step 3: [Flash Firmware](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-3-flash-firmware).

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

For window user, press "Win" key and "r" key, then enter "cmd" in the pop-oyt window, click "Enter". This can open the command line.

For MAC user, press "Command" key and "Space" key, so that you can open Spotlight. Then enter "termial", click "Return". This can open the command line.

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Check in your command line that whether or not the python and pip are installed successfully.

```
python --version
```

```
python -m pip --version
```

Then "Python xxx" and "pip xxx" should appear. If it does not, please try install python again.

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

This is recommended method, to install latest version:

```
pip3 install --user adafruit-nrfutil
```

Check the installation path:

```
python -m pip show adafruit-nrfutil
```

This is the installation location:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

For window user, you may need to add the  path manually. Copy the installation location showed in the last step. Then add it as followed:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

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

For Window User, open your device manager, and go to "port", the port number newly pop out after the device connection is the device port number.

For Mac user, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

For Window user, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Step3: Flash the bootloader**

In the terminal or command prompt, navigate to the directory where you downloaded the bootloader zip package and execute the following command, replacing the correct port for your device:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Please change COMXX to your com number. For example, if your device is on com6, change the command to be:

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Some of the device will change their port number after you enter this command. So if the installation fail, check the port number again.

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

When you have completed the above steps, then you can follow this [step](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-application-firmware) to flash the application firmware.

**2) Device can not enter DFU mode, but the serial port can be detected**.

- Open a serial port tool

- Set the baud rate to `1200`.

- Connect the device.
   The light will flash briefly when you connect it. Keep trying this until the light stays on, means the device can back to DFU mode, then [flash bootloader](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-bootloader) -> [Erase flash](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase) -> [flash the firmware](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-3-flash-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

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

If you are not sure which settings were changed, restore the device to its default settings by following the [Factory Reset](https://wiki.seeedstudio.com/sensecap_t1000_e/#factory-reset) guide. If only the PSK was changed, set it back to `AQ==`.

### Device automatically turn off

#### Description

- After the device turning on, it will turn off or reboot automatically after a while.
- The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcely rebooting or turning off the device when the device is in the following states:not finishing the messages transmission process, being configured......

#### Troubleshoot

 [Click here](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase) to perform a flash-erase.

### Factory Reset

If you want to restore to the default settings, you can do the factory reset. There are two methods for you to do the factory reset.

- [Click here](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase) to flash erase the device. And then re-flash the latest firmware.

- Click the `Factory Reset` Button on the App. The device will reboot with the factory configuration automatically.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Message Communication Fail

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

Reboot the faulty device to make the configuration function. After the key regeneration, other device needs to reconnect with the node. So it is better to delete the node in other device's node list.

:::note
For more information about the communication with other LoRa chip, please refer to: [link](https://meshtastic.org/docs/hardware/devices/seeed-studio/sensecap/card-tracker/)

:::

### Signal Quality

- **SNR** reflects the quality of the communication link. Normal device usually operates above -7 dB. Device with a SNR lower than -10 dB indicates poor performance.

- **RSSI** is determined jointly by the device and its surrounding environment. Normal device usually operates above -110 dBm. Device with an RSSI lower than -115 dBm is considered to have poor performance.

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

### Pogo Pin Definition

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Resources

- [Meshtastic Doc](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

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