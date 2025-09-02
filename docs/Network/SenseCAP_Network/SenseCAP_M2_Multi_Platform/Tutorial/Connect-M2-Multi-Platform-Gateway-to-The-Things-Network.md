---
description: Connect SenseCAP M2 Multi-Platform Gateway to TTN
title: Connecting to TTN
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
---


There are two ways to connect to the Things Network: Packet forward and Basics™ Station. Choose a way to connect your gateway.

Semtech UDP Packet Forwarder is the original LoRaWAN® packet forwarder, connecting to servers through the Semtech UDP protocol.

LoRa Basics™ Station is the preferred way of connecting Gateways to The Things Stack.

## **Connecting via Packet Forwarders**

The Semtech UDP Packet Forwarder is the original LoRaWAN® packet forwarder, connecting to servers through the Semtech UDP protocol.

### TTN Configuration

- **Step 1**: Log into [The Things Stack](https://eu1.cloud.thethings.network/console). If you don't have a TTN account, please register first.

- **Step 2**: Register the gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: Gateway EUI can be found on the device label or Local Console

**Gateway ID**: A unique identifier for your gateway(the ID must contain only lowercase letters, numbers, and dashes)

**Gateway name**: A name of your gateway

**Frequency plan**: Select the corresponding frequency according to your gateway version

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

You can check the Gateway in the overview after successful registration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### Gateway Configuration

Configure the gateway via the Web UI,please check the [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) to log into Local Console first.

- **Step 1**: LoRa Network Settings

Navigate to **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Step 2:** Set Mode to Packet Forward

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **Step 3:**Packet Forwarder Settings:

1. **Gateway EUI**: It will automatically get the EUI of the connected gateway

2. **Server Address**:
For Semtech UDP Packet Forwarder use 'server-address'
The 'server-address' is the address of your The Things Stack deployment.
See [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) for more info.

3. **Server Port(Up/Down)**: The Up Port and Down Port are typically 1700.

Other settings can be left as default, or can be changed to suit your requirements.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

Click **Save&Apply** to apply your settings.

- **Step 4**: Channel Plan Settings

Navigate to **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

Select the Region and Frequency plan according to the actual choice.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

After setting, click **Save&Apply**

## **Connecting via Basic Station**

LoRa Basics™ Station is the preferred way of connecting Gateways to The Things Stack.

### TTN Configuration

- **Step 1**: Register gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**:Enable Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

This will only allow a gateway to connect if it uses a TLS enabled Basic Station or MQTT connection.

- **Step 3:** Create an API key

Select a option to generate a API key for the CUPS or LNS service automatically, then you can authorize the gateway right away.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

Choose a Server according to your need, then click "Register gateway"

**LoRaWAN Network Server (LNS)**

LNS establishes a data connection between a LoRa Basics™ Station gateway and a Network Server (in this case, The Things Stack). LoRa® uplink and downlink frames are exchanged through this data connection. The LNS protocol is required for sending and receiving LoRaWAN data.

**Configuration and Update Server (CUPS)**

CUPS allows a Network Server to configure gateways remotely, and to update gateway firmware. CUPS is not required for sending and receiving LoRaWAN data, but it can greatly simplify the management of gateways. Configuring CUPS will also automatically retrieve LNS credentials and configure LNS on your gateway.

More information about LoRa Basics™ Station is available at [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Gateway Configuration

- **Step 1**: LoRa Network Settings
Navigate to **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**:Set Mode to Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **Step 3**:Basic Station Settings:

1. **Gateway EUI**: It will automatically get the EUI of the connected gateway

2. **Server**: Select LNS or CUPS
Check the previous step for more details about the servers.

3. **URL:**
CUPS uses the URI: https://server-address:443, LNS uses the URI: wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode:** TLS server authentication and Client token
The Things Stack supports TLS server authentication and client token. This requires a *.trust* file and a *.key* file. .

5. **trust:** This is the [CA certificate](https://en.wikipedia.org/wiki/Certificate_authority) which secures your domain.
A .pem file containing common certificates is available in the [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Download the **minimal certificate list**, then copy the data content of the certificate file (the certificate can be opened in text form).

6. **token:** Authorization:Bearer `<Your_API_Key>`

Other settings can be left as default, or can be changed to suit your requirements.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## Check the Gateway Status

After the settings are completed, we can view the live data of your gateway.

You can see that your gateway is connected to TTN now.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
