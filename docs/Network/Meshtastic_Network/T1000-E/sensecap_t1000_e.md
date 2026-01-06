---
description: Get Started with SenseCAP Card Tracker T1000-E for Meshtastic
title: Get Started with T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---
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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

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

### Configure the LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Navigate to `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

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

### Configure GPS

Please set GPS enabled. You can adjust the update inerval and broadcast interval to obtain a more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For IOS, please turn on the `Accurate Location`. Otherwise, the positioning may deviate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## Flash Firmware

### Check the Firmware Version

Navigate to `Settings` -> `Firmware Updates`, check the current firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

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

- Charge the device for 1~2 hours

- Change the charging cable

- Sometimes it looks like turning off, but in fact it is because the LED and the buzzer have not been activated. Check the following parameters: 

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>
 
 - If still no luck, press and hold the device button, then connect the charging cable, see whether or not the a disk pop out in your PC. If so, [click here](https://wiki.seeedstudio.com/sensecap_t1000_e/#device-bricked) to re-install the bootloader

### Device stuck in boot loop

**Description:**

The device will restart repeatedly, and the serial port connects and disconnects repeatedly.

**Solution:**

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

### Signal Quality

  - **SNR** reflects the quality of the communication link. Normal device usually operates above -7 dB. Device with a SNR lower than -10 dB indicates poor performance.

  - **RSSI** is determined jointly by the device and its surrounding environment. Normal device usually operates above -110 dBm. Device with an RSSI lower than -115 dBm is considered to have poor performance. 

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

## Resource

- [Meshtastic Doc](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)


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
