---
description: Introduction of MUI. Introduce the definition, features and usage of MUI.
title: MUI Introduction
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png
slug: /l2_mui
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/l2_mui/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## What is MUI?

MUI (Meshtastic User Interface) is an open-source graphical interface designed for Meshtastic devices. It provides a more intuitive way for users to interact with device. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png" alt="pir" width={900} height="auto" /></p>

**Key Features**

- **Interactive Map**: MUI displays node locations directly on online or offline maps. Check nearby devices and their positions without opening a mobile or desktop APP.

- **Convenient Device Configuration**: Configure Meshtastic settings directly on the device, including radio, GPS, display, and other common options. No external app is required for routine configuration.

- **Intuitive Graphical Interface**: MUI provides a touchscreen-optimized interface with clear menus and map-based navigation. Common operations can be completed with just a few taps, making the device easier to use for both new and experienced users.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIIntro.gif" alt="pir" width={600} height="auto" /></p>

## Get start with MUI based on Wio Tracker L2


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
Go to `Setting` page, click `Reboot/Shutdown`, then click the `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

The device will then reboot in Bluetooth mode. The Bluetooth pairing code will be shown on the screen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

### LoRa Configuration
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

Go to `Setting` page, click `Region`, choose region and then click the `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

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

<TabItem value="10" label="Online Map">

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

<TabItem value="11" label="Offline Map">

**Step1. Enable GPS**

You need to enable GPS to get position. This can be configured directly on device by `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Also, you can configure it on your phone APP.

**Step2. Set and enable Wifi**

Set the Wifi name and password. This can be operated directly on device. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

Wifi is disabled when the wifi ip is empty and the wifi icon is grey. Wifi is enabled when the wifi ip is displayed and the wifi icon is white. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Long press the `Wifi` icon to switch status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>

:::tip

The connected Wifi should be 2.4G. 5G Wifi can not be used by the device.

:::



**Step3. View map**

Waiting for the map to load. After successfully connecting to Wi-Fi and obtaining location, the device will display an online map.



</TabItem>
</Tabs>


## Advance Interation

### Menu Bar
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MenuBarMUII.png" alt="pir" width={600} height="auto" /></p>


### Home Page

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIHOme.png" alt="pir" width={900} height="auto" /></p>

### Node Page

- **Click any node**: Expand node detailed parameter information

- **Long press any node**: Enter chatting

- **Long press coordinate**: See node position on map

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodePaje.png" alt="pir" width={300} height="auto" /></p>

### Channel Page

- **Click a channel**: Enter channel chatting

- **Long press a channel**: Mute/Unmute the channel

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelPage.png" alt="pir" width={300} height="auto" /></p>

:::tip

Only configured channels, such as the named channel shown in the left image below, can be interacted with. Channels like the one shown in the right image, which are not configured and only labeled, cannot be interacted with.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelConfiguration.png" alt="pir" width={300} height="auto" /></p>

:::

### Message Page

- **Click a chat**: Enter a chatting.

- **Long press a chat**: Reveals a DEL button to delete it.

- **Highlighted in orange**: Indicates a new unread message.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChatInterct.png" alt="pir" width={900} height="auto" /></p>

### Setting Page

- **Reboot**: Choose "Reboot/Shutdown", click the green "Reboot" icon.

- **Turn off**: Choose "Reboot/Shutdown", click the red "Turn off" icon.

- **Enter Bluetooth mode**: Choose "Reboot/Shutdown", click the blue "Bluetooth" icon.

- **Switch to BaseUI**: Choose "Reboot/Shutdown", long press the blue "Bluetooth" icon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SettingMUII.png" alt="pir" width={900} height="auto" /></p>


### Tool

- **Mesh Detector**: Displays detected active nodes
- **Signal Scanner**: Displays RSSI and SNR of the selected node
- **Trace Route**: Displays the routing path of the selected node
- **Statistic**: Displays packet decoding information
- **Packet Log**: Show device log

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TOOLMUI.png" alt="pir" width={500} height="auto" /></p>

## MUI Device Requirement

MUI is designed to run on hardware that supports Meshtastic and provides a graphical display. To use all MUI features, including offline maps, your device should meet the following requirements.

| Component | Requirement |
|-----------|-------------|
| Display | Color display with touch support |
| GNSS | Built-in GNSS receiver for location services |
| LoRa® | Compatible LoRa® radio for Meshtastic communication |
| Storage | microSD card slot for offline maps |
| MCU | A high-performance MCU is required, capable of supporting both screen display and Meshtastic firmware|


**Seeed Wio Tracker L2** is the recommended hardware platform for MUI.

It integrates all required components in a single device:

- Color touchscreen
- Built-in GNSS
- LoRa® communication
- Wi-Fi and Bluetooth® connectivity
- microSD card slot for offline maps
- USB Type-C for programming and power

No additional expansion boards are required.

## FAQ
### How to activate keyboard
Click the keyboard icon shown as below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Keyboardicon.png" alt="pir" width={500} height="auto" /></p>

Then you can enter numbers and letters. Not every page has a keyboard icon; it usually appears only on pages where input is required.

### Why my wifi automatically turned off

When you enter Bluetooth pairing mode, the device wifi will be automatically set to be disabled. 
You can enable wifi in the phone app wdevice is in Bluetooth mode.

### How to send mqtt message in MUI

Device can not transmit mqtt message when it is in MUI. If you want to transmit mqtt message, please:

**Step1**. Enter Bluetooth pairing mode

**Step2**. Pair your device with phone APP

**Step3**. Configure mqtt in phone APP

**Step4**. Start message transmission

