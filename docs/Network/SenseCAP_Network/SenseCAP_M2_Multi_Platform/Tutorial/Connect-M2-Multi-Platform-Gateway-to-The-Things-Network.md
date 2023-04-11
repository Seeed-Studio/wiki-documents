---
description: Connect SenseCAP M2 Multi-Platform Gateway to TTN
title: Connecting to TTN
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---

**Connect SenseCAP M2 Multi-Platform Gateway to The Things Network** 

1. ### **Connecting via Packet Forwarders**
#### **1.1 TTN Configuration**
Log into [The Things Stack](https://eu1.cloud.thethings.network/console). If you don't have a TTN account, please register first.



Register the gateway








**Gateway EUI**: Gateway EUI can be found on the device label or Local Console

**Gateway ID**: A unique identifier for your gateway(the ID must contain only lowercase letters, numbers, and dashes)

**Gateway name**: A name of your gateway

**Frequency plan**: Select the corresponding frequency according to your gateway version




You can check the Gateway in the overview after successful registration.


#### **1.2 Gateway Configuration**
Configure the gateway via the Web UI,please check the [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) to log into Local Console first.

- **Step 1**: LoRa Network Settings

Navigate to **LoRa** > **LoRa** **Network** 

**Mode:** Packet Forward

Packet Forwarder Settings:

**Gateway EUI**: It will automatically get the EUI of the connected gateway 

**Server Address**: The link to The Things Network server( eg: For Europe is eu1.cloud.thethings.network)

**Server Port(Up/Down)**: 1700

Other settings can be left as default, or can be changed to suit your requirements.

Click **Save&Apply** to apply your settings.

- **Step 2**: Channel Plan Settings

Navigate to **LoRa** > **Channel Plan** 

Select the Region and Frequency plan according to the actual choice.

After setting, click **Save&Apply**





1. ### **Connecting via Basic Station**
#### **2.1 TTN Configuration**
Please refer to 1.1 for adding a gateway

- **Step 1**: Enable Require authenticated connection

This will only allow a gateway to connect if it uses a TLS enabled Basic Station or MQTT connection. It will not allow connections from UDP packet forwarders.


- **Step 2:** Create an API key

Navigate to **API keys**, click Add API key




Choose **Grant individual rights** > Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink




















#### **2.2 Gateway Configuration**
**Mode:** Basics Station

Basic Station Settings:

**Gateway EUI**: It will automatically get the EUI of the connected gateway 

**Server**: LNS Server

**URL:** The link to The Things Network server( eg: For Europe is eu1.cloud.thethings.network)；Port:8887

**Authentication Mode:** TLS server authentication and Client token

**trust:** Select the [certificate](https://www.thethingsindustries.com/docs/reference/root-certificates/) you need and download it, recommend：[Let’s Encrypt ISRG Root X1 Trust](https://letsencrypt.org/certs/isrgrootx1.pem)

Copy the data content of the certificate file (the certificate can be opened in text form)

**token:** Authorization: Your\_API\_Key

Other settings can be left as default, or can be changed to suit your requirements.




1. ### **Check the Gateway Status**
After the settings are completed, we can view the live data of your gateway.

You can see that your gateway is connected to TTN now.





