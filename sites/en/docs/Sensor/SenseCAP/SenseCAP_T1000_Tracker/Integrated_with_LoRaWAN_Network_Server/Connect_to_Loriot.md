---
description: Connect SenseCAP T1000 Tracker to Loriot
title: Connect to Loriot
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 12/12/2023
  author: KeweiLee
---


[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN Network Server (LNS) is hardware independent abd support every LoRaWAN® Gateways and sensors in the market.

:::info
If you do not have a Loriot account, go here [here](https://loriot.io/register.html) select one of the LORIOT Community Public Servers in your region and register a new one.
:::

## Add a Network

Networks are simply a collection of LoRaWAN gateways, and provide an efficient environment to monitor and manage your gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

When adding a new gateway, it needs to be assigned to a network, It can be either by itself or with a collection of other gateways.

A typical method to group gateways into networks is by geographic location, model, client, or what ever structure works best for you.

There are no restriction to how many gateways can be included in a network (as long as within account gateway limit), but each gateway can only belong to a single network.

### Add your first Gateway

Start your LoRaWAN network by adding your first gateway! You can also follow Loriot [step by step](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station) to register a Gateway or Base Station guide to get started. 

We create a gateway(Basics Station Semtech) here as an example. Navigate to `Network`, then click the network you just added. Click `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

On the bottom half of the page a list of gateways will appear, select the relevant gateway model by clicking on its picture.
To register the gateway, the eth0 MAC address of the gateway (six octets separated by colons) needs to be entered.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

Finally its location can be set up that can be defined in two different ways. Either by selecting a location on the map or filling out the required information to register the address manually.

### Configure your gateway certificate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

In the `Certificate` page you will find the Network Server Address, Network Server Port, and will be able to download or copy the TLS CA Certificate in order to configure your gateway model.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

In your gateway's user interface, select "LoRa Basics Station" as the mode of operation. Please be sure of configuring the address, port, and server certificate using the information obtained in last step. This is in order to establish the connection between the gateway and the LORIOT Network Management System.

Go back to the LORIOT´S UI and verify that your LoRa Basics™ Station is now online and properly functioning with the LORIOT Network Management System.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>


## Add an Application

[Applications](https://docs.loriot.io/display/NMS/Create+a+New+Application) are simply where we register, manage and organize devices and select the output destination for the device data.
When adding a new device(s), it is assigned to an application, this informs the server of the application your device(s) are registered within and the details of your chosen data output.   

As long as the total number of devices doesn't exceed the user's account limit, any number of devices can be added to an application no matter the sensor type or manufacturer.

Typically, an application will contain all the devices of a specific use case (e.g. all sensors in a smart building) or devices of the same type (e.g. temperature sensors).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>


### Add your first device(SenseCAP T1000 Tracker)


Click `Enroll Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

The LORIOT Network Server supports both LoRaWAN 1.0.x and 1.1 devices. The device can be added via two different enrollment process. OTAA (Over-The-Air-Activation) is the recommended option for most devices, but ABP (activation by personalization) is also available. After successfully connecting to the Tracker using SenseCAP Mate App Bluetooth, you can obtain OTAA information on this tab.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

Set the platform to other platform, and then copy the Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

Finally, Select Enroll. Once you have added your device(s), you will be able to see the data stream on Loriot.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>




