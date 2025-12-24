---
description: Get_Started_with_SenseCAP_T1000_tracker
title: Quick Started
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 12/24/2025
  author: Janet
---


This chapter will guide you to setup the SenseCAP T1000 Tracker via SenseCAP Mate APP.

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> User Guide </font></span></strong>
    </a>
</div>
<br />

:::caution note
Please ensure you have coverage from a LoRaWAN network, such as Helium, TTN or other LoRaWAN networks. Without LoRaWAN networks, the device cannot send data to the cloud. The easiest way to use the trackers is with the `SenseCAP LoRaWAN Gateway` and the `SenseCraft app`.
:::

## Device Functions

### Work Mode

To apply to different scenarios, there are several different working modes on the SenseCAP T1000 tracker, which you can choose according to your needs.

|**Work Mode**|**Description**|**Scene**|
| - | - | - |
|Standby Mode|<p>Only heartbeat packets are uploaded, just includes battery info. </p><p>The location can be obtained using the LoRa downlink command.</p>|If you need to locate the device for a long time and the device can run for a long time before being charged, the cloud platform can issue a location request command to locate the device.|
|Periodic Mode|Set an interval at which the device periodically uploads location and sensor data.|This mode is recommended for most scenarios.|
|Event Mode|Adjust the upload interval according to the temperature, light and acceleration sensor of the tracker, including temperature event, light event, motion event, motionless timeout, and shock event.|It can be used in complex scenarios, such as monitoring the transportation of important items. But the power consumption increases a lot.|

### Sensor Function

The SenseCAP T1000 Tracker is equipped with 3 sensors: Temperature sensor, Light sensor and 3-Axis Accelerometer.
You can choose enable or disable these sensors:

- Turn off all sensors, but you can also choose a version without sensor to reduce costs.
- Only the temperature and light sensors are enabled to monitor data periodically with low power consumption.
- When temperature, illumination and accelerometer are used as trigger conditions, the sensor will always be powered, and the device consumes a lot of power.

|**Sensor**|**Description**|
| - | - |
|Temperature|<p>This is an onboard independent temperature sensor with **an accuracy of ±0.5~1℃**. It should be noted that there may be some temperature measurement delay here, because it is separated from the shell.</p><p>Range: -20 to 60℃; Accuracy: ± 1℃(min 0.5℃, max 1℃); Resolution: 0.1℃</p>|
|Light|<p>The light sensor is not the actual lumen value monitored, but a percentage of the light from dark to amount. Mainly can be used for anti-demolition monitoring and some light sensitive monitoring.</p><p>Range: 0 to 100%, (0% is dark, 100% is brightest)</p>|
|3-Axis Accelerometer|By setting the value of acceleration, motion event and shock event are triggered.|

### Data Cache

The device can cache data, which can be enabled through Bluetooth configuration by opening "GNSS Data Cache". The device uploads confirmation packets. When the LoRaWAN signal coverage is weak or there is no network coverage, the device cannot receive an ack when uploading data. In this case, the data will be saved and entered the next cycle. When the device successfully uploads data at some point, it will send offline data. The maximum number of data that can be cached is 1000 records.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Button Function

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>Actions</b></th><th colspan="1"><b>Description</b></th><th colspan="1"><b>LED Status</b></th><th colspan="1"><b>Buzzer</b></th></tr>
<tr><td colspan="1" rowspan="2">Press button and hold for 3 seconds</td><td colspan="1">If the tracker is powered off, press and hold the button for 3 seconds to turn it on. The Bluetooth pairing will be activated automatically, and the user can use the app to scan and connect.</td><td colspan="1">The LED flashes once a second.</td><td colspan="1">Melody of rise</td></tr>
<tr><td colspan="1">If the device is powered on, press and hold the button for 3 seconds to activate Bluetooth pairing.</td><td colspan="1">The LED flashes once a second.</td><td colspan="1">None</td></tr>
<tr><td colspan="1">Press button and hold for 9 seconds</td><td colspan="1">Power off.</td><td colspan="1">None</td><td colspan="1">Melody of descent</td></tr>
<tr><td colspan="1">Join LoRa network</td><td colspan="1">After exiting the Bluetooth settings, try to join the LoRaWAN network.</td><td colspan="1">The breathing light flashes when trying to access the network, and flashes quickly if the network is successfully joined</td><td colspan="1">A quick and cheerful melody when the network is successfully joined</td></tr>
<tr><td colspan="1" rowspan="2">Press once</td><td colspan="1">Get location/sensor data, upload data, and trigger the "Press once" event immediately.</td><td colspan="1">The LED is bright for 2 seconds</td><td colspan="1">A sound will beep when the data is uploaded successfully.</td></tr>
<tr><td colspan="1">If Bluetooth pairing is turned on, press once can be turned off Bluetooth.</td><td colspan="1">The LED will off</td><td colspan="1">None</td></tr>
<tr><td colspan="1" rowspan="3">Press twice continuously</td><td colspan="1">If the SOS is set to single-shot mode, double-clicking the button will activate the single-shot SOS mode and upload the location/sensor data and SOS events once.</td><td colspan="1">Twinkle with the sound</td><td colspan="1">3 seconds of alarm sound</td></tr>
<tr><td colspan="1">If the SOS is set to continuous mode, double-click the button to activate the continuous SOS mode. The location, sensor data, and SOS events will be uploaded once every minute, and the mode will automatically end after 30 times.</td><td colspan="1">Twinkle with the sound</td><td colspan="1">A constant alarm sound</td></tr>
<tr><td colspan="1">Double-click twice to exit SOS mode</td><td colspan="1">None</td><td colspan="1">None</td></tr>
</table>

:::info Note

- It's recommended to power off the device if it's not in use.
- When first turned on, it is recommended to test it outdoors, as the GPS needs to update the time via satellite.
- Please make sure the frequency band matches your gateway frequency.
:::

## Get Started

### Connect to SenseCAP Mate App

- **Step 1**: Download SenseCAP Mate App

SenseCAP Mate App is used to config LoRa parameters, interval, bind devices to your account and check device basic information.

- For iOS, please search for “SenseCAP Mate” in the App Store and download it.
- For Android, please search for “SenseCAP Mate” in the Google Store and download it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**: Add Device

Login to the SenseCAP Mate APP.
Click 'Add Device' tab on the top right, then scan the QR code on the device label.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

Press the button for 3 seconds, and select device by SN.

There are 2 configuration mode:

- **Quick Configuration**:For quick start, you can select quick config the basic parameters
- **Advanced Configuration**: To set more parameters please check the following steps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### Quick Configuration

For Quick Configuration, you only need to setup the following parameters:

- **Frequency**:it should be same as your gateway.
- **Uplink interval**: The uplink interval of Periodic Mode (default mode), you can set other mode via “Device Bluetooth Configuration” on “User” page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

Tracker will try to join LoRaWAN network, the breathing light flashes when trying to join the network, and flashes quickly if the network is successfully joined with a quick and cheerful melody.

### Advanced Configuration

- Press button and hold for 3 seconds to turn it on, then turn on the Bluetooth pairing automatically, user can use the app to scan and connect.
- Open the App and click the “Tracker T1000”. Select the “Setup” to config the tracker.
- Select the device by S/N (S/N is on the label of the device). Then, the basic information of the sensor will be displayed after entering.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

Click the “Measure”, then you will get the sensor values:

|Temperature|Range: -20 to 60℃; Accuracy: ± 1℃(min 0.5℃, max 1℃); Resolution: 0.1℃|
| - | - |
|Light|0 to 100%, (0% is dark, 100% is brightest)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa Parameters Setup

Trackers are manufactured to support universal frequency plan from 863MHz~928MHz in one SKU. Every single device can support 7 frequency plans.

<table align="center">
  <caption> <h2>Platform</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Platform</h4></td>
    <td><h4>Description</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>Default platform.
It must be used with SenseCAP Gateway. SenseCAP builds a proprietary TTN server that enables sensors to be used out of the box when paired with an SenseCAP gateway. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>When there is the Helium network coverage, data can upload via Helium. Devices run on a private Helium console of SenseCAP. Users do not need to create devices on Helium console, out of the box with SenseCAP Mate App and Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Connect device to your public Helium console</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Connect device to your TTN(TTS) server</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>Other LoRaWAN Network Server</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>Parameters</h4></td>
    <td><h4>Description</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

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

<table>
<tr><th colspan="1" valign="top"><b>Frequency</b></th><th colspan="1" valign="top"><b>Common Name</b></th><th colspan="2" valign="top"><b>Sub-band</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">Sub band from 1 to 8 (default sub-band 2)</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">Sub band from 1 to 8 (default sub-band 2)</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">Frequency plan for TTN</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">Frequency plan for TTN</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Frequency plan for Helium</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Note
Different countries and LoRaWAN network servers use different frequency plans.<br />
For Helium network, please refer to: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
For The Things Network, please refer to:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### Work Mode Setup

Please setup the work mode according to your needs.

<table>
<tr><th colspan="1"><b>Parameters</b></th><th colspan="1"><b>Description</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Heartbeat Interval</td><td colspan="1">When no data is uploaded by the device within the heartbeat interval, a heartbeat packet will be triggered. This packet only contains battery information.</td><td colspan="1">Default 720 minutes.</td></tr>
<tr><td colspan="1">Enable Temp&Light</td><td colspan="1">If this switch is turned on, temperature and light will be collected and uploaded, but it will increase power consumption.</td><td colspan="1">Off by default.</td></tr>
<tr><td colspan="1" rowspan="2">SOS Report Mode</td><td colspan="1">Single</td><td colspan="1"><a name="ole_link7"></a>If SOS is set to single mode, double-clicking the button will enable the single-shot SOS mode and upload the location/sensor data and SOS events once</td></tr>
<tr><td colspan="1">Continuous</td><td colspan="1"><p>Default use continuous.</p><p>If SOS is set to continuous mode, double-click the button to open the continuous mode of SOS, and upload location, sensor data and SOS events once in 1 minute, and automatically end after 30 times</p></td></tr>
<tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1">Standby Mode</td><td colspan="1">Upload heartbeat packets (battery level only) based on the heartbeat interval.</td></tr>
<tr><td colspan="1">Periodic Mode</td><td colspan="1">Location and sensor data are uploaded according to the upload interval.</td></tr>
<tr><td colspan="1">Event Mode</td><td colspan="1"><a name="ole_link15"></a>Set threshold trigger conditions according to measured values such as temperature, light, and movement, and adjust the upload interval after trigger.</td></tr>
<tr><td colspan="1">Uplink Interval (min) – Periodic Mode</td><td colspan="1">Periodically locate and upload data.</td><td colspan="1"><p>Default 60 minutes. </p><p>The higher the frequency, the higher the power consumption.</p></td></tr>
<tr><td colspan="1">Restore All Settings</td><td colspan="1">Restore all configuration parameters to factory Settings, includes LoRa, Work Mode and Geolocation.</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

For Event Mode, there are five events:

<table>
<tr><th><b>Event Mode</b></th><th><b>Description</b></th><th></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td><a name="ole_link16"></a>This is the upload interval when no events are triggered.</td><td><p>Default 60 minutes. </p><p>Range: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>When the shock event is enabled, the shock of the tracker will trigger a data report, including the shock event, location, and sensor data.</td><td>Off by default.</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>Default is 300. When the acceleration exceeds 300mg, the shock event is triggered.</td></tr>
<tr><td rowspan="3">Motion Event</td><td>When the acceleration exceeds the set value, the device starts to move, and when there is no movement for 2 minutes, the device movement stops. Set the upload interval according to the start movement and stop movement.</td><td>Off by default.</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>Default is 30. When the acceleration exceeds 30mg, determine that the device is in motion, when it is 2 minutes below this value, determine that the device is in motionless.</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>Set the upload interval for the current state when the device is in motion.</td></tr>
<tr><td rowspan="2">Motionless Event</td><td>When the device is stationary in a location for more than a certain amount of time, a stationary timeout event is triggered.</td><td></td></tr>
<tr><td>Motionless Timeout(min)</td><td>Default is 360 minutes.</td></tr>
<tr><td rowspan="4">Temperature Event</td><td>If the temperature event is enabled, you can set the upload interval based on the temperature. </td><td>For example, Uplink Interval=10, Value≥30, if the temperature is higher than 30 ° C, device will upload the location at 10 minutes interval.</td></tr>
<tr><td>Sample Interval (s)</td><td><p>Default 30 seconds.</p><p>The temperature is detected every 30 seconds. When the threshold is triggered, upload location and sensor data.</p></td></tr>
<tr><td>Uplink Interval (min)</td><td>When the temperature exceeds the threshold, the location and sensor data are uploaded according to this interval.</td></tr>
<tr><td>Value Rule</td><td>One of the four threshold rules can be set.</td></tr>
<tr><td rowspan="3">Light Event</td><td>If the light event is enabled, you can set the upload interval based on the temperature.</td><td>For example, Uplink Interval=10, Value≥30, if the temperature is higher than 30 %, device will upload the location at 10 minutes interval.</td></tr>
<tr><td>Uplink Interval (min)</td><td>When the light exceeds the threshold, the location and sensor data are uploaded according to this interval.</td></tr>
<tr><td>Value Rule</td><td>One of the four threshold rules can be set.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### Geolocation Mode Setup

The tracker supports positioning via GNSS, Wi-Fi, and Bluetooth.

- **GNSS**: The longitude and latitude can be directly obtained through GPS and other satellite positioning, then upload data via LoRa.
- **Wi-Fi**: Passive scanning, uploads the scanned 4 MAC addresses via LoRa.
- **BLE**: Uploads the scanned 3 best signal MAC addresses of Beacon via LoRa.

<table>
<tr><th colspan="1"><b>Geolocation</b></th><th colspan="1"><b>Description</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">Geolocation Strategy</td><td colspan="1">Only GNSS</td><td colspan="1"><p>Default use GNSS. </p><p>Only GNSS is used for position.</p></td></tr>
<tr><td colspan="1">Only Wi-Fi</td><td colspan="1">Only Wi-Fi scans are used for position.</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">Use Wi-Fi before GNSS. If Wi-Fi fails, then use GNSS in one geolocation cycle.</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Use GNSS before Wi-Fi. If GNSS fails, then use Wi-Fi in one geolocation cycle.</td></tr>
<tr><td colspan="1">Only Bluetooth</td><td colspan="1">Only Bluetooth scans are used for position.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Use Bluetooth before Wi-Fi. If Bluetooth fails, then use Wi-Fi in one geolocation cycle.</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">Use Bluetooth before GNSS. If Bluetooth fails, then use GNSS in one geolocation cycle.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Use Bluetooth, Wi-Fi and GNSS for positioning in turn (switch to the next type of positioning after one type of positioning fails)</td></tr>
<tr><td colspan="1">GNSS Timeout</td><td colspan="1"><p>The maximum time to spend waiting for the </p><p>GNSS to get a coarse position fix</p></td><td colspan="1"><p>Default is 60s. </p><p>It is not recommended to modify, the longer of the time, the bigger of power consumption.</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSS Data Cache</td><td colspan="1">When it is not possible to upload data through LoRa, the data is saved locally and uploaded when the LoRa signal is recovered.</td><td colspan="1">Off by default.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

After all parameters are configured, click “Send”.
If no parameter needs to be modified, exit Bluetooth configuration, and return to the home page. At this point, the device initiates a LoRa network access request.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### Device Data View

#### SenseCAP Mate App

Check the Location on the APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

The main function of the SenseCAP Portal is to manage SenseCAP devices and store data. It is built on Azure, a secure and reliable cloud service from Microsoft. Users can apply for an account and bind all devices to this account. The SenseCAP Portal provides a web portal and API. The web portal includes Dashboard, Device Management, Data Management, and Access Key Management. The API is open to users for further development.

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
