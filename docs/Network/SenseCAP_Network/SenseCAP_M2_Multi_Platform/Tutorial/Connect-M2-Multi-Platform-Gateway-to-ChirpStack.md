---
description: Connect SenseCAP M2 Multi-Platform Gateway to ChirpStack
title: Connecting to ChirpStack
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
---


### ChirpStack Configuration

ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including an user-friendly web-interface for device management and APIs for integration.

#### Add Gateway

Before starting, please [Login](https://www.chirpstack.io/application-server/use/login/) into the [ChirpStack Application Server](https://www.chirpstack.io/application-server/).

The default credentials are:Username: admin;Password: admin

:::tip Note
If you have not yet connected your [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) instance with a [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) instance, you need do this first. See [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). Also you need connect the organization with the network-server by creating a [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navigate to **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: A name of your gateway

**Gateway EUI**: Gateway EUI can be found on the device label or Local Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### Add device profile

Before you can add your device to ChirpStack, you have to create a [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) if you haven't done this already.

Navigate to **Device profile> Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: A name of your deivce profile

**Region**:Select the Region plan according to your gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Default ADR algorithm( LoRa only)

:::note
Select MAC version/Regional parameters revision/ADR algorithm according to your device. For details, please refer to:https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### Add device

Navigate to **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Click the application to which you want to add your device. Under the **Devices** tab, click **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: A name of your device

**Device EUI**: Device EUI can be found on the device label or SenseCAP Mate APP

**Device profile**: Choose the device profile we create in 1.2 step1.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### Gateway Configuration

Configure the gateway via the Web UI,please check the [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)to log into Local Console first.

#### LoRa Network Settings

Navigate to **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder Settings:

**Gateway EUI**: It will automatically get the EUI of the connected gateway

**Server Address**: Your ChirpStack Server address

**Server Port(Up/Down)**: 1700

Other settings can be left as default, or can be changed to suit your requirements.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### Channel Plan Settings

Navigate to **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

Select the Region and Frequency plan according to the actual choice.

After setting, click **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### Data View

#### Gateway data

Navigate to **Gateways**, choose the gateway you want to check.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### Device data

After adding your LoRaWAN device to ChirpStack, validate that your device is able activate (in case of OTAA) and send data.

Navigate to **Applications** > **Devices**, choose the device you want to check.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
