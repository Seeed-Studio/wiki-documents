---
description: Get Started with Wio Tracker L2 Series. Guiding for device installation, firmware flashing and device connection.
title: Get Started with Wio Tracker L2
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /get_started_with_meshtastic_wio_tracker_l2
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l2/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.

1. Not finishing the message transmission process
2. Being configured
:::

## Flash Firmware


Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Select the target device to `Seeed Wio Tracker L2` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

Switch on the device, click `Enter DFU Mode`, there will be a serial port named `Tracker L2`, click and connect it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

And then click "Flash". Don't forget to tick "Full Erase and Install" if you want to cover previous firmware.

## Get Started


### UI Switching


<Tabs>

<TabItem value="1" label="MUI to BaseUI">
Go to Setting page **->** Choose `Reboot/Shutdown` **->** Long press the Bluetooth icon **->** Click `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
The BaseUI switch popup appears when you `long-press` the Bluetooth icon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

If you just click the Bluetooth icon, you will enter Bluetooth mode. If so, long press the Bluetooth icon shown on the screen, the device will automatically reboot to MUI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI to MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Phone Connection

**Step1. Get in Bluetooth Connection Mode**

<Tabs>

<TabItem value="3" label="MUI">

Go to `Setting` page, click `Reboot/Shutdown`, then click the `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

:::tip
While using MUI, please first switch to Bluetooth Pairing mode before pairing with your ohone. Or else your phone can not recognize your device.
:::

The device will then reboot in Bluetooth mode. The Bluetooth pairing code will be shown on the screen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

The device is always in Bluetooth pairing mode, requiring no special operation.

</TabItem>
</Tabs>

**Step2. Download Meshtastic APP**

[Click here](https://meshtastic.org/downloads/) to download Meshtastic APP.

**Step3. Pair with Device**

<Tabs>

<TabItem value="5" label="IOS">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code shown on the screen and then click `Pair` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Enter the code shown on the screen and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Configure LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

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

<Tabs>

<TabItem value="7" label="Configure on MUI">

Go to `Setting` page, click `LeoR Region`, the device will automatically reboot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="8" label="Configure on BaseUI">

Go to `LoRa Info` page, click `Region`, choose region and then click the `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BaseUILoRa.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configure on Phone">

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

Now that you have set the LoRa region on your device, you can continue with configuring any [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) to suit your needs.

### Map Usage

<Tabs>

<TabItem value="10" label="Offline Map">

**Step1. Enable GPS**

You need to enable GPS to get position. This can be configured directly on device by `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Also, you can configure it on your phone APP.

**Step2. SD Card Preparation**

You need to format and install map in your SD card. For detailedd SD card usage tutorial, please click here to view.

**Step3. Install SD Card**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Step4. View Map**

Waiting for the map to load. After successfully connecting to Wi-Fi and obtaining location, the device will display an offline map.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Online Map">

**Step1. Enable GPS**

You need to enable GPS to get position. This can be configured directly on device by `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Also, you can configure it on your phone APP.

**Step2. Set and enable Wifi**

Set the Wifi name and password. This can be operated directly on device. 

:::tip

The connected Wifi should be 2.4G. 5G Wifi can not be used by the device.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

Wifi is disabled when the wifi ip is empty and the wifi icon is grey. Wifi is enabled when the wifi ip is displayed and the wifi icon is white. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Long press the `Wifi` icon to switch status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>



**Step3. View map**

Waiting for the map to load. After successfully connecting to Wi-Fi and obtaining location, the device will display an online map.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


## Advanced Usage

### Connect via Website

If you want to text messages and communicate with other nodes in the website, you can connect the device to the [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) now.

  **Step 1**: Switch to BaseUI

  **Step 2**: Open the Website

[Click here](https://client.meshtastic.org/messages/broadcast/0) to go to the webstite.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  **Step 3**: Add the new device
  
    Click "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Choose serial method. Open the device manager to see which port the device is connected to. Choose that port in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Your device will be shown in the list. Click to connect. If the connection succeed, you can see the device status directly on the website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configure GPS

You can adjust the update inerval and broadcast interval to obtain a more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For IOS, please turn on the `Accurate Location`. Otherwise, the positioning may deviate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Sensor connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SensorConnection.png" alt="pir" width={500} height="auto" /></p>

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Enable Telemetry to get sensor data. If you want to show sensor data on the OLED screen, enale `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Other Function

<Tabs>

<TabItem value="12" label="MUI">

<Tabs>

<TabItem value="13" label="Menu Bar">
| Interaction Method | Effect |
|---|---|
| Long press home icon | Resynced |
| Long press node list icon | Enters node filter page |
| Long press settings icon | Screen turns off |

</TabItem>


<TabItem value="15" label="Home Page">

| Interaction Method | Effect |
|---|---|
| Click Message icon| Navigates to the message page |
| Click Node icon | Navigates to the node page |
| Click Clock icon| Real Time/Uptime Switch |
| Long press LoRa icon| LoRa TX off/on|
| Long press Notification icon| Notification enabled/Disabled|
| Click Notification icon| Sound/Banner/Sound & Banner Switch|
| Llong press GPS icon| GPS ON/Off|
| Long press WiFi icon| WiFi ON/Off|
| Long press MQTT icon| MQTT ON/Off|
| Click QR code icon| Displays the device QR code |

</TabItem>

<TabItem value="16" label="Node Page">
| Interaction Method | Effect |
|---|---|
| Click a node| Displays detail Information|
| Long press a node| Enters the private chat|
| View a node Position| Displays the node location in map|

</TabItem>

<TabItem value="17" label="Channel Page">
Long press a channel to disable/enable Notification. Choose and click a channel to enter chat window.

</TabItem>

<TabItem value="18" label="Message Page">
Long press a chat to delete it. Choose and click a chat to enter chat window.

</TabItem>

<TabItem value="19" label="Setting Page">

| Interaction Method | Effect |
|---|---|
| User Short Name | Change device short name|
| User Long Name | Change device long name|
| Screen Pin | Set password for device startup |
| Configuration Pin | Set password for configuration changes |
| Region | Configure LoRa region|
| Modem Preset| Configure LoRa preset |
| Channel | Edit channel|
| Device Role | Configure role |
| WiFi | Set Wifi SSID and password |
| Screen Timeout| Set screen timeout|
| Screen Brightness| Set screen brightness|
| Theme| Switches teame between dark and light backgrounds |
| Screen Calibration | Calibrate screen|
| Language| Switch displayed language|
| Factory Reset | Configuration restored to defaults |
| NodeDB Reset | Node data cleared |
| Clear Chat History | Chat history cleared |
| Reboot (green icon) | Device reboots |
| Turn Off (red icon) | Device powers off |

</TabItem>

<TabItem value="20" label="Tool">
| Interaction Method | Effect |
|---|---|
| Mesh Detector| Displays detected active nodes |
| Signal Scanner| Displays RSSI and SNR of the selected node |
| Trace Route| Displays the routing path of the selected node |
| Statistic | Displays packet decoding information |
| Packet Log | Show device log|

</TabItem>
</Tabs>

</TabItem>

<TabItem value="13" label="BaseUI">

<Tabs>

<TabItem value="21" label="Home">
| Interaction Method | Effect |
|---|---|
| Select "Sleep Screen" | Turns off the display temporarily; wakes with user button press |
| Select "Send Position" | Manually announces device position to nodes on the mesh (speeds up discovery) |

</TabItem>

<TabItem value="23" label="Node">

Nevigate to "Node Action"

| Interaction Method | Effect |
|---|---|
| Select "Favorite" | Marks the selected node as a favorite|
| Select "Trace Route" | Performs a trace route to the selected node |

</TabItem>

<TabItem value="24" label="Position">
| Interaction Method | Effect |
|---|---|
| Select "GPS Toggle" | GPS on/off|
| Select "GPS Format" | Switches PS format|
| Select "Compass Headings" | Toggles between Dynamic, Fixed, and Freeze Heading for "N" |
| Select "Compass Calibrate" | Starts a 30-second compass calibration routine |
</TabItem>

<TabItem value="25" label="LoRa">
| Interaction Method | Effect |
|---|---|
| Select "LoRa Region" | Select LoRa region |
| Select "Device Role" | Switches between device Role |
| Select "Radio Preset" | Chooses from available presets|

</TabItem>

<TabItem value="26" label="System">
| Interaction Method | Effect |
|---|---|
| Select "Notifications" | Enables / disables beeps|
| Select "Bluetooth Toggle" | Enables / disables Bluetooth|
| Select "Reboot/Shutdown" | Manually reboots or powers off the device|

</TabItem>

</Tabs>

</TabItem>
</Tabs>

## FAQ

### Device can not pair with Phone via BLE

- While using MUI, please first switch to Bluetooth Pairing mode before pairing with your ohone. Or else your phone can not recognize your device. Go to `Setting` page, click `Reboot/Shutdown`, then click the `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

- While using BaseUI, after setting and enabling Wifi, you can only connect your device with your phone APP via Network. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

### Device can not connect with my Wifi

- Please make sure you are connecting a `2.4g Wifi`. The devcie can not pair with 5G Wifi. Usually phone hot spot can be adjusted to be 2.4g in phone setting. So you can test your phone hot spot first.

- Please enable Wifi after setting Wifi name and Wifi password.

Wifi is disabled when the wifi ip is empty and the wifi icon is grey. Wifi is enabled when the wifi ip is displayed and the wifi icon is white. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

### Device automatically turn off

**Description**

- After the device turning on, it will turn off or reboot automatically after a while.
- The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcely rebooting or turning off the device when the device is in the following states:not finishing the messages transmission process, being configured......

**Troubleshoot**

You need to perform a flash erase, and the re-flash the latest firmware.

### Factory Reset

If you want to restore to the default settings, you can do the factory reset. There are two methods for you to do the factory reset.

<Tabs>

<TabItem value="7" label="Configure on MUI">

Go to `Setting` page, click `Configure Reset`, choose `Factory Reset` and then click the `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="pir" width={900} height="auto" /></p>

The device will reboot with default configuration.

</TabItem>

<TabItem value="9" label="Configure on Phone">

Click the `Factory Reset` Button on the App. The device will reboot with the factory configuration automatically. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

</TabItem>

</Tabs>

### Direct Message Fail

#### NodeDB Reset

NodeDB is the local database that stores information about nodes discovered in the current Mesh network. If you encounter a situation where you can't communicate with a certain node, it might be because your nodedB has stored outdated information for that node. You will need to update it.

<Tabs>

<TabItem value="7" label="Configure on MUI">

Go to `Setting` page, click `Configure Reset`, choose `NodedB Reset` and then click the `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="pir" width={900} height="auto" /></p>

The device will reboot.

</TabItem>

<TabItem value="9" label="Configure on Phone">

Open the app and connect to the target device. Go to **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>
  
</TabItem>
</Tabs>


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


<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
