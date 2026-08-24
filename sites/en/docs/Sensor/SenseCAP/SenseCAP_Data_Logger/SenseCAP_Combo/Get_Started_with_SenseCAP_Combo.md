---
description: Get_Started_with_SenseCAP_Combo
title: Get Started with SenseCAP Combo
keywords:
  - SenseCAP Combo
  - Data Logger
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /get_started_with_sensecap_combo
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/get_started_with_sensecap_combo/
---

# Get Started with SenseCAP Combo

This chapter shows you how to quickly set up your SenseCAP Combo 5-in-1 Sensor with 4G and connect it to the SenseCAP Cloud Platform.

:::tip note
SenseCAP Combo 5-in-1 Sensor with 4G uses 4G Cat.1 connectivity and the MQTT protocol to upload data to the SenseCAP Cloud Platform or your own third-party MQTT server. Please make sure you have a valid Micro SIM card (3FF) with cellular data coverage in your deployment area.
:::

### Operating Environment

SenseCAP Combo is designed to operate reliably within a specific temperature range to ensure stable performance and battery safety. Please make sure the device is used and charged within these temperature ranges to avoid performance degradation or battery issues.

| Parameter | Specification |
|---------|---------------|
| Operating Temperature | 0°C ~ 40°C |
| Charging Temperature | 0°C ~ 40°C |
| Operating Humidity | 0 ~ 100% RH (non-condensing) |

:::caution note
The operating temperature of the device is limited by the included power adapter, which supports an operating temperature range of 0°C to 40°C.

The power adapter is designed for indoor use only. Do not expose the power adapter directly to outdoor environments. The power adapter must be installed inside a waterproof enclosure or electrical cabinet to ensure proper protection.
:::
<br />

## Install SIM Card

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/14.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

1. Open the rubber cover labeled “SIM” and lift the metal holder.
2. Insert the SIM card into the slot, secure it with the metal holder, and close the rubber cover tightly.


:::caution note
After installing the SIM card, make sure the rubber cover is fully sealed. Otherwise, the waterproof performance of the device may be affected.
:::

<br />

## Sensor Connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/15.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

The device provides an RS-485 port for connecting external Modbus-RTU sensors.

1. Unscrew the protective cap of the interface and connect the sensor to the RS-485 port.
2. After connecting the sensor, make sure the aviation connector is fully tightened. If the connector is not in use, it must also be tightened to prevent water and device damage.

:::caution note
1. Connect the sensors **before** powering on the device. Otherwise may cause them not to be detected. In this case, restart the device.
2. When using a splitter, do not connect sensors with the same Modbus address to the RS-485 interface.
3. If you connect a 12V sensor, the device must be powered by an external DC power supply.
:::

<br />

## Configure to the SenseCAP Cloud Platform

Before deployment, make sure the device can operate normally and upload data.

### Step 1. Download SenseCraft APP

Download the SenseCraft APP from the App Store or Google Play to manage your device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Step 2. Create New Account

Please create an account via the SenseCraft APP or PC on the SenseCAP cloud platform: [https://sensecap.seeed.cc/portal](https://sensecap.seeed.cc/portal)

1. Click "Register", enter your email, and submit. A verification email will be sent.
2. Open the email from "SenseCAP", click the link, and complete the registration.
3. Open the app, select "Global Server", enter your account and password, and log in.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

### Step 3. Bind Device

1. Go to the "Devices" page. Click the "+" icon in the top right corner.
2. Scan the QR code on the device label to bind the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

<br />

## Power On the Device (Indicator Status)

Before powering on, make sure the sensors and SIM card are installed.

:::caution note
When installing sensors, ensure the device is powered off. Otherwise, external sensors may not be detected.
:::

Press the metal button at the bottom of the device. The red indicator will light up. Wait about 3 minutes for the device to come online. (The time depends on the number and type of sensors. More sensors require longer time.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/1.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

:::note
1. The device includes a built-in solar panel for charging.
2. When using 12V sensors, an external adapter is required. Ensure proper waterproof protection when using an adapter.
:::

<br />

## View Data and Status

You can view device data and status via the app or PC.

### Via SenseCraft APP

View data directly in the app after the device is bound and online.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/2.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Via SenseCAP Portal

Go to [https://sensecap.seeed.cc](https://sensecap.seeed.cc) and log in. Click "Data" to check if data is uploaded successfully.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/3.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## SenseCAP API

SenseCAP API is for users to manage IoT devices and data. It includes 3 types of API methods: HTTP protocol, MQTT protocol, and Websocket protocol.

- With HTTP API, users can manage LoRa devices, to get raw data or historical data.
- With MQTT API, users can subscribe to the sensor's real-time measurement data through the MQTT protocol.
- With Websocket API, users can get real-time measurement data of sensors through Websocket protocol.

Please check [API User Guide](https://sensecap-docs.seeed.cc/) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/16.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## General Settings

To configure server address, add sensors, or change reporting intervals, use the PC configuration tool:

- Download tool: [SenseCAP Sensor Hub Configuration Tool NG](https://github.com/Seeed-Solution/SenseCAP-Sensor-Hub-Configuration-Tool-NG/releases)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/4.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

- Driver (first-time use): [CH341 USB Driver](https://wch-ic.com/downloads/CH341SER_EXE.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/5.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### MQTT Server Configuration

1. Connect the device to a PC using a USB Type-C cable.
2. Open the tool, select the COM port, enable "Enter configuration mode automatically on device's booted", click "Connect" then press the metal button. (The "General Settings" and "Sensor Settings" buttons will turn dark blue.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/6.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

3. Click "General Settings". Debug messages will appear on the right panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/7.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

4. Click the input area and type: **b**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/8.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

5. After entering the command: **2**, press Enter. It indicates that you have switched to the new cloud platform 2.

:::note
- **1** is the SenseCAP cloud platform (default)
- **2** is the user's third-party MQTT server
- **3** is the SenseCAP private deployment
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/9.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

6. Click "General Settings". Enter MQTT server address, port, username, and password. Click "Write".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/10.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Data Reporting Interval & CO₂ Reporting Interval

- **Reporting interval:** for all sensors except CO₂
- **CO₂ interval:** multiple of the reporting interval

Click "Write" after setting.

:::note
Short intervals may cause the solar charging rate to be lower than the discharging rate, resulting in the device not being able to charge.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/11.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### APN Configuration

Enter APN, username, and password if required. Default is automatic.

### Export Cache Data

Click "Export Cache Data" to export all historical data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/12.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Verify Data Upload to the Server

After configuring the server:

1. Close the tool
2. Disconnect the USB cable
3. Press the metal button to restart the device

Wait a few minutes, and then subscribe to messages according to the topic format using the MQTT subscription tool to see if you can receive device data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/13.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>


<br />

## Troubleshooting

### Abnormal Sensor Channel Status on Cloud Platform

- Usually caused by a sensor being disconnected during operation.

### [ERROR] No sensor found. Is the sensor connected?

Please check the following:

- Verify that the sensor wiring sequence (positive/negative/RS485 A, B) is correct;
- Ensure that the sensor Modbus address matches the address set in "Sensor Settings";
- Verify that the sensor power supply type is configured correctly;
- Ensure that the warm-up time, startup time, and response timeout time meet the sensor requirements;
- Check that the function code and registers for the measured values are configured correctly;

### [ERROR] RS485 err code: XX

Some sensors require a warm-up time. If communication is initiated before this warm-up time is reached, the sensor will return a function code error.

When testing a sensor, the first step is to check if the sensor exists. This check only requires waiting for the startup time, not the warm-up time. For example, if the sensor startup time is 1 second and the warm-up time is 5 minutes, and the data acquisition unit attempts to communicate after powering on the sensor but only waits 1 second, a function code error will be received. The window will display "[ERROR] rs485 err code". When acquiring data, the warm-up time will be waited before communication to ensure data acquisition.

<br />

## Installation and Notes

### Using the Built-in Battery in Low-Temperature Environments

- Discharge range: 0°C ~ 50°C
- Charging range: 0°C ~ 40°C

Please note that because the device has a built-in lithium battery, when using solar power or an adapter:

1. If the ambient temperature remains below 0 °C, the battery will remain uncharged until the ambient temperature rises above 0 °C.
2. During the period when charging is stopped, if the battery is completely depleted, the device cannot operate using solar power or an adapter. It will require waiting for the ambient temperature to rise above 0 °C and for the li-ion battery to charge to a safe level before the device can function normally.
<br />

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