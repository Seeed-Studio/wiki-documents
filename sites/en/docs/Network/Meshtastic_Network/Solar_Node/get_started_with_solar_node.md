---
description: Get Started with SenseCAP Solar Node for Meshtastic & LoRa
title: Get Started with SenseCAP Solar Node
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sku: 114993633,114993643
sidebar_position: 2
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-05-13'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/
---

:::danger note
When the device is in either of the states below, do not manually reboot or turn it off. Otherwise, the device may become bricked.
1. Not finishing the message transmission process
2. Being configured
:::
## Get Started

Before formal deployment, please test and configure the node first.

### Flash Firmware

:::caution note
Do not use `NRF-OTA` to update the firmware, as it may cause the device to become completely unresponsive.
Before flashing the firmware, please run the flash erase step first!
:::

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/). Select `Seeed SenseCAP Solar Node` as the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### Flash Erase

Click the `trash` symbol.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

Download and copy the erase firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Click `Enter DFU Mode`, select and connect to the serial port named `XIAO-xxx`, and a drive named `XIAO-xxx` should appear. Copy the erase firmware to the drive.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

This process may take some time. Please wait for the "XIAO-XXX" drive to disappear.

#### Flash Application Firmware

Choose the firmware version you want. Click `flash`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Download the UF2 file and enter DFU mode. Drag the UF2 file to the DFU drive. The firmware should be flashed after the file is copied and the device reboots.

### Install Battery and GPS Module (Optional)

:::tip
When you need to install or replace the battery, use a `button-top` 18650 (3.6 V) battery.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
The P1-Pro version has a built-in battery and GPS module. For the P1 version, users need to install the battery and GPS module manually if needed.
:::



- Step 1: Remove all the screws and the cover.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Step 2: Install the battery and GPS module.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Assemble the shell.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Ensure that the shell is properly mounted and the screws are firmly tightened to maintain the device’s waterproof integrity.
:::

### Power on the device

The device needs to be activated by connecting the USB cable before first use. If the blue Mesh light blinks, the device has been successfully turned on, as shown in the video below:

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
If the device does not respond when you press the button, please charge it first. Do not use a fast charger.
:::

### Connect via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="iOS App">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code (the default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Enter the code (the default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Connect via Website

If you want to send text messages and communicate with other nodes in the web client, you can connect the device to the [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) now.

  Step 1: Open the Website

[Click here](https://client.meshtastic.org/messages/broadcast/0) to go to the website.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Step 2: Add the new device 
  
    Click "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    There are two ways to connect. You can choose your preferred method.

 Method 1: Via Bluetooth
  
    Choose the Bluetooth method. Select the device ID in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Choose the serial method. Open the device manager to see which port the device is connected to. Select that port in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Your device will be shown in the list. Click to connect. If the connection succeeds, you can see the device status directly on the website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configure the LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<Tabs>
<TabItem value="ios" label="iOS App">

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

### Configure GPS

Please enable GPS. You can adjust the update interval and broadcast interval to obtain more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For iOS, please turn on `Accurate Location`. Otherwise, the positioning may be inaccurate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Button

|Button Action|Description|
|--|--|
|Press PWR for 3s|Power on|
|Press PWR twice|Update node/location info|
|Press PWR three times|Switch on/off the GPS|
|Press PWR for 5s|Power off|
|Press RST twice|Manually enter DFU|

## Installation

:::danger note
Since the device will be used outdoors for extended periods, please avoid installing the panel in a horizontal position. A tilted or diagonal installation is recommended to prevent water accumulation. Additionally, ensure that all screws are securely tightened and the cover is properly installed. For enhanced waterproof protection, you may also consider applying extra sealing measures.
:::

- **Part List**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### Step-by-step Installation Guidance

- Step 1: Connect part 1 to the bottom of the device using washers and screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 2: Connect the universal joint (part 2) and the bracket (part 3) with screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 3: Connect the RF cable (part 4) and antenna (part 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 4: Install the hoop ring in the appropriate position.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 5: Connect the universal joint bracket.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 6: Loosen the screws, adjust the universal joint to the appropriate position, and then tighten the screws.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step 7: Connect the antenna to the device.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Complete installation guidance

- You can complete the entire installation and initialization process through a video.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Add sensors to Solar Node (Optional)

- You can install your sensor by following this video.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- The following sensors have been verified to be compatible with the Grove interface on the device.

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
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
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

### Upgrade Antenna (Optional)

- You can replace the antenna with a fiberglass one by watching this video.

If you need an antenna with higher gain, we recommend the [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) antenna and the [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) antenna.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

### Boot Loop

- Reason 

This is usually caused by a firmware flashing failure. When flashing the firmware, please maintain a stable connection.

- Troubleshoot

[Click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/#flash-firmware) to re-flash the firmware.

### Device bricked

#### Description

The device does not respond, the LED does not light up, and it cannot pair with your app.

**1) Device can still enter the DFU mode, then try to flash the bootloader**.

#### Flash the Bootloader

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
When you are flashing the bootloader, please make sure the cable connection is stable and **DO NOT** disconnect it during the flash process.
:::

**Step1: Adafruit-nrfutil Installation**

For Windows users, press the "Win" key and "R" key, then enter "cmd" in the pop-up window and press "Enter". This opens the command line.

For Mac users, press the "Command" key and "Space" key to open Spotlight. Then enter "terminal" and press "Return". This opens the command line.

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)


Check in your command line whether Python and pip are installed successfully.

```
python --version
```

```
python -m pip --version
```

Then "Python xxx" and "pip xxx" should appear. If they do not, please try installing Python again.

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

This is the recommended method for installing the latest version:

```
pip3 install --user adafruit-nrfutil
```


Check the installation path:

```
python -m pip show adafruit-nrfutil
```

This is the installation location:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

For Windows users, you may need to add the path manually. Copy the installation location shown in the last step. Then add it as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="Installing from Source">

Use this method if you have issues installing with PyPI or want to modify the tool. First, clone this repo and go into its folder.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Note: The following commands use `python3`; however, if you are on Windows, you may need to change it to `python`, since Windows installations of Python 3.x still use the name `python.exe`.

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

You will find the executable in `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (with `.exe` if you are on Windows).
Copy or move it elsewhere for your convenience, such as a directory in your `%PATH%`.

</TabItem>
</Tabs>

**Step2: Check your port number**

Connect your device to your PC, and check the port number.

For Windows users, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

For Mac users, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: Flash the bootloader**

In the terminal or command prompt, navigate to the directory where you downloaded the bootloader zip package and execute the following command, replacing the port with the correct one for your device:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Please change COMXX to your COM port number. For example, if your device is on COM6, change the command to:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Some devices will change their port number after you enter this command. If the installation fails, check the port number again.


- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

When you have completed the above steps, follow this [step](https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/#flash-firmware) to flash the application firmware.

 ### Device automatically turns off

 #### Description

 - After the device turns on, it turns off or reboots automatically after a while.
 - The serial port log ran for a while and then stopped.

 This may be caused by manually and forcibly rebooting or turning off the device while it is in one of the following states: not finishing the message transmission process or being configured.

 #### Troubleshoot

[Click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/#flash-erase) to perform a flash erase, and then re-flash the latest firmware.


### Factory Reset

If you want to restore the default settings, you can perform a factory reset. There are two methods for doing the factory reset.

- [Click here](https://wiki.seeedstudio.com/get_started_with_meshtastic_solar_node/#flash-erase) to perform a flash erase, and then re-flash the latest firmware.

- Click the `Factory Reset` button in the app. The device will automatically reboot with the factory configuration.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### NodeDB Reset

NodeDB is the local database that stores information about nodes discovered in the current Mesh network, including:

- **Node ID**
- **User name**
- **Location information**
- **Signal information (SNR)**
- **Last seen time**

**When to reset**

Reset NodeDB when:

- The node list contains outdated, duplicate, or invalid entries.
- You move to a different Mesh environment and want to rediscover nearby nodes.
- Node information in the app appears incorrect or incomplete.

:::danger
Resetting NodeDB only clears the node database stored on the device. It **does not perform a factory reset** and **does not remove the device's basic configuration**.
:::

**Reset from the App**

1. Open the app and connect to the target device.
2. Go to **Settings**.
3. Tap **Device**.
4. Scroll to the bottom of the **Device Config** page and find **Reset NodeDB**.
5. Tap it and confirm the action.

**App Path**

`Settings > Device > Reset NodeDB`

**Example Screens**

Step 1: Open **Device** from the **Settings** page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

Step 2: Tap `Reset NodeDB` on the **Device Config** page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
Please note the difference between the following options:

- **Reset NodeDB**: Only clears the node database.
- **Factory Reset**: Restores the device to factory settings and removes additional configuration data.
:::

**What happens after reset**

After **Reset NodeDB** is executed, the device clears the currently stored node list. As the device continues running, it will rediscover and record nearby nodes again.

You may observe the following:

- The node list may temporarily become empty or smaller.
- Nodes will gradually reappear as the device continues operating.
- Previously stored historical node records will no longer be available.

**Notes**

- Before resetting, make sure the issue is actually related to an abnormal node list.
- If the problem is only a delay in node display, wait for a while first to see whether it recovers automatically.
- If the issue remains after resetting NodeDB, continue troubleshooting the device configuration or other possible causes.
- Use **Factory Reset** carefully to avoid accidentally removing device configuration.

### Power Consumption

Power consumption primarily depends on factors such as the data transmission frequency and GPS update rate.
The figures below are for reference only; actual consumption may vary based on real-world usage conditions.

- **Shutdown sleep mode power consumption**

|Description|Consumption|
|---|---|
|GPS_LED working current|1.02 mA|
|Powered but not activated|56.195 μA|
|Powered and activated|611 μA|

**Example:**

|Battery capacity |Battery life|
|---|---|
|3350|136.8|
|12000|490.2|

- **Active mode power consumption**

|Mode|Current|
|---|---|
|Static Current|10.65 mA|
|EU868 Transmission Current|157.74 mA|
|US915 Transmission Current|205.22 mA|
|GPS Operating Current|50 mA|
|GPS_LED Operating Current|1.02 mA|

### Signal Quality

- **SNR** reflects the quality of the communication link. A normal device usually operates above -7 dB. A device with an SNR lower than -10 dB indicates poor performance.

- **RSSI** is determined jointly by the device and its surrounding environment. A normal device usually operates above -110 dBm. A device with an RSSI lower than -115 dBm is considered to have poor performance.

      To achieve the best signal performance, please use the device in an open, unobstructed area with minimal interference.

### Charging Current

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

The Xiao nRF-52840 Plus maximum charging current is 200 mA. The CN3165 charging management chip supports 0.99 A. Therefore, the maximum charging current is 1 A.

## Resource
- [Solar Node Battery Life Calculation Table](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
