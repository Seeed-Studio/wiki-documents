---
description: Connect_Wio_Tracker_1110_to_TTN
title: Connect Wio Tracker to LoRa Cloud™ Locator
keywords: 
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 10/23/2023
  author: Jessie
---


This document details the step-by-step instructions on how to set up the [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) and configure it in the [LoRa Cloud™ Locator](https://locator.loracloud.com).

## Gateway Settings

### Add the Gateway on LoRa Cloud™ Locator

Login to [LoRa Cloud™ Locator web](https://locator.loracloud.com).

Navigate to `GATEWAY SETTINGS`, click `Add New Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>

Enter the Gateway EUI and select the right LoRaWAN® frequency band based on your location.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>

Click on `Create` and you should see a popup with new Gateway’s supporting files(certificates, keys). Make sure you click on Download and save the files to a safe location (you might need to allow browser to download multiple files). The downloaded files are:

- **cups_url.txt**: Contains the URL that should be used in your gateway to point to the CUPS server
- **cups.trust**: Contain the CUPS trust certificate
- **cups.crt**: Contain the certificate used to connect to CUPS server
- **cups.key**: Contain the private key used to connect to CUPS server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### Set up the Gateway

Then we need to configure the [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), check [Get Started](https://wiki.seeedstudio.com/quick_start_with_M2_MP/) for more details.

Login to Luci page, navigate to `LoRa` > `LoRa Network`

- **Step 1**: LoRa Network Settings
Navigate to **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>

- **Step 2**:Set Mode to Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>

- **Step 3**:Basic Station Settings:

2. **Gateway EUI**: It will automatically get the EUI of the connected gateway

3. **Server**: Select CUPS

4. **URL:**: Copy the URL in your `cups_url.txt` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>

```cpp
Example: https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>

5. **Authentication Mode:** TLS Server and Client Authentication

6. **trust**/**certificate**/**key** : Copy the file contect we downloaded before.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

Click `Save & Apply` once everything is set up.

Once your gateway is properly configured, its status should switch to `Connected`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>

## Device Settings

### Set up the device

Please check [Connect Wio Tracker 1110 Dev Board to TTN](https://wiki.seeedstudio.com/connect_wio_tracker_to_TTN/) to select the platform to TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

### Add device on LoRa Cloud™ Locator

Then go back to the LoRa Cloud™ Locator web page, navigate to `DEVICE SETTINGS`, click `Add New Device`.

**Tracker type**: `LoRa Basics™ Modem SDK`

Choose the APPKey as the activation mode, then copy the Dev EUI, Join EUI and APP key we defined before.
**Network**: `The Things Network Community`, and select your regional cluster, then click `Create` to add your device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

Once the device successfully joins the network, you can see its messages here。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

Then navigate to `TRACKING`, you can check the location now.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>
