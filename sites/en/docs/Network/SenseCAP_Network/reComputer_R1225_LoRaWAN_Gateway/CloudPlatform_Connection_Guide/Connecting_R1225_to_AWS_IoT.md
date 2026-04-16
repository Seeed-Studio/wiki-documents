---
description: Connecting R1225 to AWS IoT
title: Connecting to AWS IOT
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_aws_iot
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/07/2026
  author: Kian
---

## AWS IoT Gateway Configuration

Log in to [AWS](https://signin.aws.amazon.com).
If you don’t have an AWS account, please create a new account first.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Add Gateway

Navigate to **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws1.png" alt="pir" width={800} height="auto" /></p>

Select **LPWAN devices** > **Gateway** to add a gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws2.png" alt="pir" width={800} height="auto" /></p>

**Gateway's EUI:** The gateway EUIcan be found on the device label or [Local Console](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Frequency band:** Select the Frequency plan according to the actual choice.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws3.png" alt="pir" width={800} height="auto" /></p>

#### Create certificate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws4.png" alt="pir" width={800} height="auto" /></p>

Download the certificate files and server trust certificates.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws5.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws6.png" alt="pir" width={800} height="auto" /></p>

#### Choose the Role

choose **IoT Wireless Gateway Cert Manager Role**, then submit the configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws7.png" alt="pir" width={800} height="auto" /></p>

## R1225 Gateway Configuration

Log into Local Console Check out the device's [Quick Start](https://wiki.seeedstudio.com/r1225_quick_start/) to login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws9.webp" alt="pir" width={800} height="auto" /></p>

### LoRaWAN Network Settings

Navigate to **LoRa** > **LoRa Network**

**Mode**: Basics Station

**Gateway EUI**: It will automatically get the EUIof the connected gateway

**Server**: Choose CUPS Server or LNS Server (For CUPS, port is 443; for LNS, port is 8887)

Learn more about [CUPS and LNS Server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Authenentication Mode**: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws10.png" alt="pir" width={800} height="auto" /></p>

Click on Save&Apply when you finish the settings.

## Check gateway connection status

Navigate to the Gateways page and choose the gateway you've added.

In the LoRaWAN specific details section of the Gateway details page, you'll see the connection status and the date and time the last uplink was received.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws8.png" alt="pir" width={800} height="auto" /></p>

## AWS IoT Device Configuration

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
