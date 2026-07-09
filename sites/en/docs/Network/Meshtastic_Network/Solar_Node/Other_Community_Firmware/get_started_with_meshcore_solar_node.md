---
description: Get Started with SenseCAP Solar Node for Meshcore & LoRa.  Guiding for device installation, firmware flashing and device connection.
title: Get Started with MeshCore on SenseCAP Solar Node
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/6/2026
  author: Michelle Huang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/get_started_with_meshcore_solar_node/
updatedAt: '2026-04-20'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.
1. Not finishing the message transmission process
2. Being configured
:::

## Firmware Flashing

### Method1 via Web Flasher

Connect your device with a USB cable to the computer. Please make sure the cable supports data transmission. 

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://meshcore.io/flasher). 

Choose `Seeed Studio SenseCAP Solar` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Repeater`. If you want to flash other firmware, please [click here](https://docs.meshcore.io/) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Click `Enter DFU Mode`, choose the serial port named "Solar Node" or "TinyUSB serial". Then click `Erase Flash` and choose the serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

If you have clicked `Erase Flash` but there is no response, click `Enter DFU` again and then click `Erase Flash` to make sure you have successfully entered DFU.

If you see "Flashing erase firmware:100%", the device has been successfully erased.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flash Firmware

Select the firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Click `Enter DFU Mode`, choose the serial port named "P1 Pro" or "TinyUSB" serial. Then click `Flash` and choose the serial port.

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

Choose `Seeed Studio SenseCAP Solar` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Choose `Repeater`. If you want to flash other firmware, please [click here](https://docs.meshcore.io/) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Double click the RST button to manually enter DFU mode. You can see a disk named `Xiao-Boot` or `Solar Node` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will `NOT` automatically reboot.

#### Flash Firmware

Choose the latest firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Download the UF2 file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Double click the RST button to manually enter DFU mode. You can see a disk named `Xiao-Boot` or `Solar Node` will pop out after 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Drag the downloaded UF2 file to the pop-out disk.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

The disk will disappear after the firmware is successfully flashed. At this point there is no firmware in the device, so the device will NOT automatically reboot.

## Get Started

Before formal deployment, please test and configure the node first.

### Installation

#### Assemble the Device

:::danger note
Since the device will be used outdoors for extended periods, please avoid installing the panel in a horizontal position. A tilted or diagonal installation is recommended to prevent water accumulation. Additionally, ensure that all screws are securely tightened and the cover is properly installed. For enhanced waterproof protection, you may also consider applying extra sealing measures.
:::

- **Part List**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Step1: Connect part 1 to the bottom of the device using washers and screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step2: Connect the universal joint(part 2) and the bracket(part 3)  with screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step3: Connect the RF cable(part 4)  and antenna(part 5) .

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step4: Install the hoop ring in the appropriate position.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step5: Connect the universal joint bracket.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step6: Loosen the screws, adjust the universal joint to the appropriate position, and then tighten the screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step7: Connect the antenna to the device.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### Install Battery and GPS Module(Optional)

:::tip
When you need to install or replace the battery, use `Button-top` 18650(3.6V) battery.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro version has built-in battery and GPS module, for P1 version, user needs to install the battery and GPS module manually if needed.
:::



- Step 1: Remove all the screws and the cover.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Step 2: Install battery and the GPS module.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Assemble the shell.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Ensure that the shell is properly mounted and the screws are firmly tightened to maintain the device’s waterproof integrity.
:::

#### (Optional) Upgrate atenna

- You can replace the antenna with a fiberglass one by watching this video.

If you need an antenna with higher gain, we recommend the [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) antenna and the [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) antenna.

### Power on the device

The device needs to be activated by connecting the USB cable. The blue Mesh LED will light on for about 3s, it means that the device has been successfully turned on. 

The blue mesh LED light will not turn on until it send advert.

:::tip
It was not until the release of version 1.14.1 that the power button was enabled. Press the device for `3s` to turn on/off the devcice. You will see a white light shortly blink. This indicates the device is successfully turning on.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuration

- **Step1 Initial Configuration**

When MeshCore is flashed onto a LoRa device is for the first time, it is necessary to set the server device's frequency to make it utilize the frequency that is legal in your country or region.

[Click here](https://config.meshcore.io/) to configure the repeater.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Change the LoRa region and save setting. Then `Reboot` the device, or else the setting will not take effect.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::


- **Step2 Send Advert**

Click "send advert" to enable other Meshcore devices to see this repeater. Then the repeater can be seen in the device list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

After the initialization setting, click 

- **Step3(Optional) Admin Log in**

The default admin password to a repeater is `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

After logging in, you can see the configuration page. You can now adjust the configuration for the repeater.

If you want to show the position of the repeater, you can enable the GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Also, you can adjust the advert broadcast interval. The interval range of `auto zero hop advert` is 60-240 mins. The interval range of `auto flood advert` is 3-168 hours. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Set Path

Before adding the repeater to your route, you may need to use the repeater to send advert first. Repeater will automatically send advert at regular intervals. This interval can be multiple hours (default 3 hours). So you need to manually send advert or else you need to wait.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

You can manually set the message sending path. Connect you Bluetooth companion device to your phone APP. Open a private message window. Then you can choose the discovered repeater to form your path.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

After setting the path, the transmission method will be changed to "n hop". For example, if you add 1 repeater in your route, it will change to 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## FAQ

### Boot Loop

- Reason 

This is usually caused by the firmware flashing failure. When flashing the firmware, please maintain a stable connection. 

- Troubleshoot

[Click here](https://wiki.seeedstudio.com/get_started_with_meshcore_solar_node/#flash-erase) to re-flash the firmware.

### Device bricked

#### Description

The device not responding, no LED, can not pair with your App.

**1) Device can still enter the DFU mode, then try to flash the bootloader**.

#### Flash the Bootloader

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

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

For Window user, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

For Mac user, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: Flash the bootloader**

In the terminal or command prompt, navigate to the directory where you downloaded the bootloader zip package and execute the following command, replacing the correct port for your device:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Please change COMXX to your com number. For example, if your device is on com6, change the command to be:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Some of the device will change their port number after you enter this command. So if the installation fail, check the port number again.


- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

When you have completed the above steps, then you can [flash the application firmware](https://wiki.seeedstudio.com/get_started_with_meshcore_solar_node/#flash-erase).

### Signal Quality

- **SNR** reflects the quality of the communication link. Normal device usually operates above -7 dB. Device with a SNR lower than -10 dB indicates poor performance.

- **RSSI** is determined jointly by the device and its surrounding environment. Normal device usually operates above -110 dBm. Device with an RSSI lower than -115 dBm is considered to have poor performance.

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.

### Charging Current

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

The Xiao nRF-52840 Plus maximum charging current is 200 mA. The charging management chip CN3165 is 0.99A. So the maximum charging current is 1A.

## Resource
- [Solar Node Battery Life Calculation Table](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)
