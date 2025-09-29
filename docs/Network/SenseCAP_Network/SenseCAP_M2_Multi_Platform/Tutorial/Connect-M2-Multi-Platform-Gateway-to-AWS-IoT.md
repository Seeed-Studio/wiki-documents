---
description: Connect SenseCAP M2 Multi-Platform Gateway to AWS
title: Connecting to AWS IoT
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
---


## AWS IoT Configuration

Log in to [AWS](https://signin.aws.amazon.com).
If you don’t have an AWS account, please create a new account first.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Add Gateway


Navigate to **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Select **LPWAN devices** > **Gateway** to add a gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**Gateway's EUI:** The gateway EUIcan be found on the device label or [Local Console ](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Frequency band:** Select the Frequency plan according to the actual choice.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>


#### Create certificate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Download the certificate files and server trust certificates.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Choose the Role: **IoT Wireless Gateway Cert Manager Role**, then submit the configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Check gateway connection status

Navigate to the Gateways page and choose the gateway you've added.

In the LoRaWAN specific details section of the Gateway details page, you'll see the connection status and the date and time the last uplink was received.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Add Profiles

Device and service profiles can be defined to describe common device configurations. These profiles describe configuration parameters that are shared by devices to make it easier to add those devices. AWS IoT Core for LoRaWAN supports device profiles and service profiles.

#### Add devices profiles

Navigate to **Devices** > **Profiles**, click Add device profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Provide a Device profile name, select the Frequency band (RfRegion)that you're using for the device and gateway, and keep the other settings to the default values.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Add service profiles

Navigate to **Devices** > **Profiles**, click Add service profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

It's recommend that you leave the setting AddGWMetaData enabled so that you'll receive additional gateway metadata for each payload, such as RSSIand SNR for the data transmission.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Add Destination

Navigate to **Devices** > **Destination**, click Add destination

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publish to AWS IoT Core message broker

**Permissions**: Select an existing service role > IoT Wireless Gateway Cert Manager Role

:::tip Note
Adestination name can only have alphanumeric, - (hyphen)and _ (underscore) characters and it can't have any spaces.
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Add LoRaWAN Devices

#### Add wireless device

Navigate to **LPWAN devices** > **Devices**, click Add wireless device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configure device

**Wireless device specification**: OTAAv1.0x 

**DevEUI:** The `device EUI/APP EUI/APP` key can be found the the device label.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>


#### Check device connection status

Navigate to the **Devices** page and choose the device you've added.

In the Details section of the Wireless devices details page, you'll see the date and time the last uplink was received.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Gateway Configuration

Log into Local Console Check out the device's [Quick Start to](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN Network Settings

Navigate to **LoRa** > **LoRa Network**

**Mode**: Basics Station

**Gateway EUI**: It will automatically get the EUIof the connected gateway

**Server**: Choose CUPS Server or LNS Server (For CUPS, port is 443; for LNS, port is 8887)

Learn more about [CUPS and LNS Server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Authenentication Mode**: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>


Click on Save&Apply when you finish the settings.

