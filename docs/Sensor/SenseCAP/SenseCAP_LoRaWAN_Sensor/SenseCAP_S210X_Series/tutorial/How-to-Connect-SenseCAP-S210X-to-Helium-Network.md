---
description: Connect to Helium Network
title: Connect to Helium Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 11/26/2023
  author: Leo
---

# Connect to Helium Network

## Helium Console

The Helium Console is a web-based device management tool hosted by the Helium Foundation that allows developers to register, authenticate, and manage their devices on the Helium network. In addition to device management, Console provides prebuilt connections called Integrations to route device data via HTTPs or MQTT; or directly to cloud services like AWS IoT.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Connect to Helium Network

### Create a New account

Please go to &lt;https://console.helium.com/&gt;  , and register your account.

### Setup the Sensor

(1) Open the SenseCAP Mate App

(2) Press button and hold for 3 seconds, the LED will flash at 1s frequency.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) Please click the “Setup” button to turn on Bluetooth and click “Scan” to start scanning the sensor's Bluetooth.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) Select the Sensor by S/N (label). Then, the basic information of the sensor will be displayed after entering.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### Set Frequency of Sensor via SenseCAP Mate App

Set the corresponding frequency band based on the frequency band of the gateway.

(1) Click the “Setting” and select the platform is “**Helium**”.

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) Select the Frequency Plan, if the gateway is US915, set the sensor to US915.

(3) Click the “Send” button, send the setting to the sensor for it to take effect.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) Click the “Home” button, the App will disconnect the Bluetooth connection.

Then, the sensor will reboot.

(5) When the device is disconnected from Bluetooth, the LED lights up for **15 seconds** and then flashes as a **breathing light**.

(6) After joining the network successfully, LED **flashes fast for 2s**.

# Helium Console Configuration

## Add New Device

(1) Click “Devices” –> “Add New Device”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) Enter the Device EUI, App EUI, App Key: please refer to SenseCAP mate APP for details.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) Save device.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4）Add a new label, then add the label to a device.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Check the data on Helium

(1) Enter device details page and find the REAL TIME PACKETS.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) Power on the Sensor, it will display raw data.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## Upload Data from Helium to Datacake

### Create a Datacake Account

(1) Create a new account, website: &lt;https://datacake.co/&gt;

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) Click the “Edit Profile” -> “API” -> Get API token.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Add New Integration on Helium Console

(1) Click “Integrations” -> ”Add New Integration” -> ”Datacake”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) Enter Datacake Token (Refer to [the section](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)) and name your integration.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### Configure the Flows on Helium

(1) Click “Flows”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) Drag the Label into a blank place.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) Drag the Integration in to a blank place.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) Connect the two blocks.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) Save Changes.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### Add the Sensor on Datacake

(1) Return Datacake Dashboard, and click “Device” -> ”Add Device”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) Search “Seeed”, You can select some sensors directly.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) Select the Sensor Template.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) Select “Helium”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) Enter your Device EUI and Name.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) Select your Plan and add device.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Check Data from Datacake

Click Debug button, it will display debug log.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
