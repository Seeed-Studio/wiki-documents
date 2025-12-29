---
description: Get_Started_with_SenseCAP_T2000_tracker
title: Quick Start
keywords:
- SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /Get_Started_with_SenseCAP_T2000_tracker
last_update:
  date: 12/23/2025
  author: Janet
---

# Get Started with SenseCAP T2000 Tracker

This chapter shows you how to quickly set up your SenseCAP T2000 Tracker with the SenseCraft App.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Please ensure you have coverage from a LoRaWAN network, such as Helium, TTN or other LoRaWAN networks. Without LoRaWAN networks, the device cannot send data to the cloud. The easiest way to use the trackers is with the `SenseCAP LoRaWAN Gateway` and the `SenseCraft app`.
:::

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-A/B Exploded View</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-C with Solar Panel Exploded View</div>  
<br />

## Device Functions

### Work Mode

To apply to different scenarios, there are several different working modes on the SenseCAP T2000 tracker, which you can choose according to your needs.

| **Work Mode** | **Description** | **Scene** |
| - | - | - |
| Standby Mode | <ul><li>Only heartbeat packets are uploaded, just includes battery info.</li><li>The location can be obtained using the LoRa downlink command.</li></ul> | If you need to locate the device for a long time and the device can run for a long time before being charged, the cloud platform can issue a location request command to locate the device. |
| Periodic Mode | Set an interval at which the device periodically uploads location, 3-axis accelerometer data, and battery info. | Recommended for most scenarios<ul><li>Asset tracking</li><li>Livestock monitoring</li></ul> |
| Event Mode | Adjust the upload interval based on the 3-axis accelerometer sensors, including motion events, motionless timeout, and shock events. The device will upload location, 3-axis accelerometer data and battery info whenever an event is triggered. | It is recommended when you need to monitor the movement status of the tracking object. |

### Sensor Function

The SenseCAP T2000 Tracker is equipped with 3-Axis Accelerometer.

- You can choose to enable or disable the sensor in the SenseCraft App (disabled by default).
- You can configure the corresponding thresholds for the 3-axis accelerometer based on your application needs, motion/motionless event and shock event are triggered.

### Data Cache

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache2.png" alt="pir" width={800} height="auto" /></p>

The device can cache data, which can be enabled through Bluetooth configuration by opening `Location Data Cache`. The device uploads confirmation packets. When the LoRaWAN signal coverage is weak or there is no network coverage, the device cannot receive an ACK when uploading data. In this case, the data will be saved and entered the next cycle. When the device successfully uploads data at some point, it will send offline data.

The device uploads the real-time location data first. Once the platform returns an ACK for that uplink, the tracker begins uploading the cached data stored locally, starting from the oldest entries to avoid overwriting newer data.

The cache-uplink interval has been set to 40s. Cached data will be sent continuously at this interval until either a new real-time location uplink is triggered or the platform stops returning ACKs during the process.

The maximum number of data that can be cached is 1000 records.

Click the `Clear Cache` button will clear all cached data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache.png" alt="pir" width={800} height="auto" /></p>

### Button Function

#### Magnetic Attachment Instructions

| **Status**        | **Operation** |
|-------------------|--------------|
| Power On          | Bring the magnet close to the sensor area and tap 4 times quickly. Power on succeeds when the green light turns on. |
| Power Off         | Bring the magnet close to the sensor area and tap 4 times quickly. Power off succeeds when the green light turns on. |
| Bluetooth On      | Bring the magnet close to the sensor area and tap 2 times quickly. Bluetooth scanning is enabled when the blue light flashes. |
| Bluetooth Off     | Bring the magnet close to the sensor area and tap 2 times quickly. |

#### LED Status Indicator

| Status              | LED Color | Indicator Pattern        |
|---------------------|-----------|--------------------------|
| Power ON            | Green     | Steady on for 1s         |
| Power OFF           | Green     | Steady on for 1s         |
| Joining Network     | Green     | Breathing light          |
| Join Success        | Green     | Fast flash 5 times       |
| Join Fail           | Red       | Fast flash 5 times       |
| Bluetooth Search    | Blue      | Continuous slow flash    |
| Bluetooth Connected | Blue      | Steady on                |
| Tamper Alarm        | Red       | Continuous fast flash    |
| Firmware Updating   | Green     | Continuous slow flash    |
| Enter DFU Mode      | Green     | Steady on                |
  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_PowerOn.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Power On/Off</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_GreenBreathingLight.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">After powering on, the green breathing light</div>
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Bluetooth.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Enter/Exit Bluetooth mode</div>  

<br />

:::info Note

- It's recommended to power off the device if it's not in use.
- When first turned on, it is recommended to test it outdoors, as the GPS needs to update the time via satellite.
- Please make sure the frequency band matches your gateway frequency.
:::

## Get Started

### Connect to SenseCraft App

- **Step 1**: Download SenseCraft App

SenseCraft App is used to config LoRa parameters, interval, bind devices to your account and check device basic information.

- For iOS, please search for “SenseCraft” in the App Store and download it.
- For Android, please search for “SenseCraft” in the Google Store and download it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**: Add Device

Login to the SenseCraft APP.
Click '+' tab on the top right, then scan the QR code on the device label.
Click 'Add to account' then you can 'Configure' the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

Bring the magnet close to the sensor area and tap 4 times quickly to turn it on, then tracker will enter the Bluetooth pairing automatically (if the tracker has powered on, tap 2 times quickly to manually enter Bluetooth pairing), and select device by SN.

There are 2 configuration modes:

- **Quick Configuration**: For quick start, you can select quick config the basic parameters
- **Advanced Configuration**: To set more parameters please check the following steps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### Quick Configuration

For Quick Configuration, you only need to setup the following parameters:

- **Frequency**:it should be same as your gateway.
- **Uplink interval**: The uplink interval of Periodic Mode (default mode), you can set other mode via “Device Bluetooth Configuration” on “User” page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

Tracker will try to join LoRaWAN network after exiting the Bluetooth pairing mode, the green breathing light flashes when trying to join the network, and flashes 5 times quickly if the network is successfully joined.

### Advanced Configuration

- Open the APP and click `Device Bluetooth Configuration` in the `User` page. Then select  `SenseCAP Asset Tracker T2000` to enter `Setup` to config the tracker.
- Follow the steps above to enter the Bluetooth pairing mode.
- Select the device by S/N (S/N is on the label of the device) and choose `Advanced Configuration`. Then, the basic information of the tracker will be displayed after entering.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

There are four configuration pages in total.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

Click the `Measure` in the `Information` - `Basic` page, then you will get the sensor values:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Measure.png" alt="pir" width={800} height="auto" /></p>

<br />

#### LoRa Parameters Setup

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Platform.png" alt="pir" width={800} height="auto" /></p>

**Platform**

<table align="center">
  <tbody>
    <tr>
    <td><h4>Platform</h4></td>
    <td><h4>Description</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>Default platform.
It must be used with SenseCAP Gateway. SenseCAP builds a proprietary TTN server that enables sensors to be used out of the box when paired with an SenseCAP gateway. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>When there is the Helium network coverage, data can upload via Helium. Devices run on a private Helium console of SenseCAP. Users do not need to create devices on Helium console, out of the box with SenseCraft App and Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Connect device to your public [Helium console](https://console.helium.com)</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Connect device to your [TTN(TTS) server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>Other LoRaWAN Network Server</td>
    </tr>
  </tbody>
</table>

**Frequency Plan**

Trackers are manufactured to support universal frequency plan from 863MHz~928MHz. Every single device can support 8 frequency plans, including EU868, US915, AU915, AS923-1-TTN, AS923-2-TTN, IN865, KR920 and RU864.

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parameters</h4></td>
    <td><h4>Description</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
    <td>Default EU868</td>
    </tr>
        <tr>
    <td>Packet Policy</td>
    <td>1C</td>
    <td>LoRaWAN use confirm packet</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>Default open</td>
    <td>LoRaWAN parameters, default open is recommended</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>When “Platform” switches back to SenseCAP from another platform, LoRa parameters (EUI/App EUI/ App Key etc.) need to be restored</td>
    <td>You can use this function when you need to restore LoRa parameters to factory defaults</td>
    </tr>
  </tbody>
</table>

:::info Note
Different countries and LoRaWAN network servers use different frequency plans.<br />
For Helium network, please refer to: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
For The Things Network, please refer to:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
If you are unsure which frequency band is required in your area, please consult our technical support team or refer to [RP002-1.0.0 LoRaWAN® Regional Parameters](https://lora-alliance.org/wp-content/uploads/2019/11/rp_2-1.0.0_final_release.pdf) for detailed regional frequency information.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_FrequencyPlan.jpg" alt="pir" width={400} height="auto" /></p>

**Activation Type**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_LoRaSetup.png" alt="pir" width={800} height="auto" /></p>

The sensor supports two network access modes, OTAA by default.

|**Parameter**|**Description**|
| - | - |
|OTAA (default)|Over The Air Activation, it joins the network through Device EUI, App EUI, and App Key.|
|ABP|Activation By Personalization, it joins the network through DevAddr, NwkSkey, and AppSkey.|

The device uses OTAA to join the LoRaWAN network by default. So, it can set the device EUI, App EUI and App Key.

|**Parameter**|**Type**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16, hexadecimal from 0 ~ F|
|App EUI|16, hexadecimal from 0 ~ F|
|App Key|32, hexadecimal from 0 ~ F|

:::info Note
When using the SenseCAP platform, the EUI, APP EUI and APP Key are fixed and are the same as the sensor label.<br />
When the sensor is selected to be used with a public platform such as Helium or TTN, the EUI will not change, and the sensor will generate a new fixed App EUI and App Key for network access.<br />
To obtain EUI information in batches, please contact our sales team.
:::

<br />

#### Work Mode Setup

Please setup the work mode according to your needs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_WorkMode.png" alt="pir" width={800} height="auto" /></p>

<table>
<tr><th colspan="1"><b>Parameters</b></th><th colspan="1"><b>Description</b></th><th colspan="1"><b>Default / Note</b></th></tr> <tr><td colspan="1">Heartbeat Interval</td><td colspan="1">When no data is uploaded by the device within the heartbeat interval, a heartbeat packet will be triggered. This packet only contains battery information.</td><td colspan="1">Default 720 minutes.</td></tr> <tr><td colspan="1">Enable 3-axis Sensor</td><td colspan="1">If this switch is turned on, 3-axis sensor will be collected and uploaded, but it will increase power consumption.</td><td colspan="1">Off by default.</td></tr> <tr><td colspan="1">Enable Disassembly Alarm</td><td colspan="1">If this switch is turned on, the device activates an alarm when the device is removed after installation.</td><td colspan="1">Enabled by default.</td></tr> <tr><td colspan="1">Disassembly Alarm Duration(min)</td><td colspan="1">This parameter specifies how long the device keeps reporting after a Disassembly Alarm is triggered, sending one real-time position packet with the alarm event every minute.</td><td colspan="1">This setting is only visible when Enable Disassembly Alarm is turned on. Default 3 minutes.</td></tr> <tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1"><b>Standby Mode</b></td><td colspan="1">Uploads heartbeat packets (battery level only) based on the heartbeat interval.</td></tr> <tr><td colspan="1"><b>Periodic Mode</b></td><td colspan="1">Location and sensor data are uploaded according to the uplink interval.</td></tr> <tr><td colspan="1"><b>Event Mode</b></td><td colspan="1">Set threshold trigger conditions based on measured values such as movement and shock, and adjust the uplink interval when no event is triggered.</td></tr> <tr><td colspan="1">Uplink Interval (min)</td> <td colspan="1"><b>Periodic Mode</b></td> <td colspan="1">Periodically locates and uploads data. Default 60 minutes. Higher frequency increases power consumption.</td></tr> <tr><td colspan="1">Restore All Settings</td><td colspan="2">Restore all configuration parameters to factory settings, including LoRa, Work Mode, and Geolocation.</td></tr>
</table>

<br />

For Event Mode, there are three events:

<table>
<tr><th><b>Event Mode</b></th><th colspan="2"><b>Description</b></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td>This is the upload interval when no events are triggered.</td><td><p>Default 60 minutes.</p><p>Range: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>When the shock event is enabled, the shock of the tracker will trigger a data report, including the shock event, location, and sensor data.</td><td>Off by default.</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>Default is 300. When the acceleration exceeds 300mg, the shock event is triggered.</td></tr>
<tr><td rowspan="3">Motion Event</td><td>When the acceleration exceeds the set value, the device starts to move, and when there is no movement for 2 minutes, the device movement stops. Set the upload interval according to the start movement and stop movement.</td><td>Off by default.</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>Default is 30. When the acceleration exceeds 30mg, determine that the device is in motion, when it is 2 minutes below this value, determine that the device is in motionless.</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>Set the upload interval for the current state when the device is in motion.</td></tr>
<tr><td rowspan="2">Motionless Event</td><td colspan="2">When the device is stationary in a location for more than a certain amount of time, a stationary timeout event is triggered. </td></tr>
<tr><td>Motionless Timeout(min)</td><td>Default is 360 minutes.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### Geolocation Mode Setup

The tracker supports positioning via GNSS, Wi-Fi (Only T2000-B support), and Bluetooth.

- **GNSS**: The longitude and latitude can be directly obtained through GPS and other satellite positioning, then upload data via LoRa.
- **Wi-Fi**: Passive scanning, uploads the scanned 5 MAC addresses via LoRa.
- **BLE**: Uploads the scanned 5 MAC addresses of Beacon via LoRa.

<table>
<tr><th><b>Geolocation Strategy</b></th><th colspan="2"><b>Description</b></th></tr>
<tr><td rowspan="9"><b>Geolocation Strategy</b></td><td>GNSS Only</td><td>Default use GNSS. Only GNSS is used for position.</td></tr>
<tr><td>Wi-Fi Only</td><td>Only Wi-Fi scans are used for position.</td></tr>
<tr><td>Bluetooth Only</td><td>Only Bluetooth scans are used for position.</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>Use GNSS before Wi-Fi. If GNSS fails, then use Wi-Fi in one geolocation cycle.</td></tr>
<tr><td>GNSS + Bluetooth</td><td>Use GNSS before Bluetooth. If GNSS fails, then use Bluetooth in one geolocation cycle.</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>Use Wi-Fi before GNSS. If Wi-Fi fails, then use GNSS in one geolocation cycle.</td></tr>
<tr><td>Bluetooth + GNSS</td><td>Use Bluetooth before GNSS. If Bluetooth fails, then use GNSS in one geolocation cycle.</td></tr>
<tr><td>Bluetooth + Wi-Fi</td><td>Use Bluetooth before Wi-Fi. If Bluetooth fails, then use Wi-Fi in one geolocation cycle.</td></tr>
<tr><td>Bluetooth + Wi-Fi + GNSS</td><td>Use Bluetooth, Wi-Fi and GNSS for positioning in turn (switch to the next type of positioning after one type of positioning fails). </td></tr>
<tr><td><b>GNSS Max Scan Time(s)</b></td><td>The maximum time to spend waiting for the GNSS to get a coarse position fix.</td><td><p>Default is 60s.</p><p>It is not recommended to modify, the longer of the time, the bigger of power consumption.</p></td></tr>
<tr><td><b>iBeacon Scan Timeout(s)</b></td><td>Under Bluetooth positioning, the maximum time for the device to scan surrounding Bluetooth beacons to obtain a coarse position fix.</td><td><p>Default is 3s.</p><p>Range 1~10s.</p></td></tr>
<tr><td><b>Group UUID (Hex)</b></td><td>It allows the tracker to only scan and report Bluetooth beacons whose UUIDs match the specified pattern, helping filter out irrelevant beacons.</td><td><p>Set UUID Filter, up to 16 bytes. For example, if set as '01 02 03 04' it will filter beacons with the pattern '01 02 03 04 xx xx ...'</p></td></tr>
<tr><td><b>Location Data Cache</b></td><td>When it can't upload data via LoRa, the data is saved locally(up to 1000 records) and uploaded when the LoRa coverage is recovered.</td><td><p>Off by default.</p></td></tr>
<tr><td><b>Clear Cache</b></td><td colspan="2">Clear all historical cache data.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

After all parameters are configured, click “Send”.
If no parameter needs to be modified, exit Bluetooth configuration, and return to the home page.
At this point, the device initiates a LoRa network access request.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### Device Data View

#### SenseCraft App

Check the Location on the APP.
After binding the device, enter the device page and click the button in the upper right corner to view the historical location data of the device.
Click on the filter to choose to view location data under positioning modes such as 'All/GNSS/BLE/Wi-Fi'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

If the device triggers a Disassembly Alarm, a red alarm icon will be displayed next to each data packet during the triggering period.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

The Disassembly Alarm will appear on both the `Device` and `Details` pages in the APP, along with a notification window, which helps users quickly check the device's status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

The main function of the [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/dashboard) is to manage SenseCAP devices and store data. It is built on Azure, a secure and reliable cloud service from Microsoft. Users can apply for an account and bind all devices to this account. The SenseCAP Portal provides a web portal and API. The web portal includes Dashboard, Device Management, Data Management, and Access Key Management. The API is open to users for further development.

- **Dashboard:** Including Device Overview, Announcement, Scene Data, and Data Chart, etc.
- **Device Management:** Manage SenseCAP devices.
- **Data Management:** Manage data, including Data Table and Graph section, providing methods to search for data.
- **Subaccount System:** Register subaccounts with different permissions.
- **Access Key Management:** Manage Access Key (to access API service), including Key Create, Key Update, and Key Check.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Device Data View

Log in [SenseCAP Portal](http://sensecap.seeed.cc)

If you have created an account through the APP, you can log in directly.

1) Select register account, enter email information, and click "register", the registered email will be sent to the user's mailbox

2) Open the "SenseCAP…"Email, click the jump link, fill in the relevant information, and complete the registration

3) Return to the login interface and complete the login

Check [SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API is for users to manage IoT devices and data. It includes 3 types of API methods: HTTP protocol, MQTT protocol, and Websocket protocol.

- With HTTP API, users can manage LoRa devices, to get raw data or historical data.
- With MQTT API, users can subscribe to the sensor's real-time measurement data through the MQTT protocol.
- With Websocket API, users can get real-time measurement data of sensors through Websocket protocol.

Please check [API User Guide](https://sensecap-docs.seeed.cc/) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

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
