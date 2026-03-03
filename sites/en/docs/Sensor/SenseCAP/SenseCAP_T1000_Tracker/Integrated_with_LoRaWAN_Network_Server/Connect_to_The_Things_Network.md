---
description: Connect_to_The_Things_Network
title: Connect to The Things Network
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_TTN
last_update:
  date: 8/15/2023
  author: Jessie
---



The Things Stack(TTS) is a LoRaWAN® Network Server stack which is the critical component for any LoRaWAN solution. In this chapter we will guide users to connect the [SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to the Things Network.



## Device Configuration

Before connecting to the TTS, you need to configure the basic parameters of your device on SenseCAP Mate APP, check [Get Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker) for more details.

* Set the platform to TTN, and then copy the Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

The Things Stack(TTS) is an enterprise grade LoRaWAN network server, built on an open-source core. The Things Stack allows you to build and manage LoRaWAN networks on your own hardware or in the cloud.

To begin, register an account on [The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>





### Step 1: Create an application

Navigate to Applications page, click "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Enter an Application ID, click Create Application to save your changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### Step 2: Register the Device

We uploaded a template for users，you only need to select the product model to quickly set up.
Select the input method to 'Select the end device in the LoRaWAN Device Repository'

:::info
**End device brand**:SenseCAP<br />
**Model**:SenseCAP T1000 Tracker A/B
:::

Select the frequency plan according to your device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>



Paste the Device EUI/APP EUI/APP Key from the SenseCraft App, and then click `Register end device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
The "JoinEUI" above is simliar to "AppEUI".
:::


### Step 3: Check the data

When the device tries to connect to the network, the breathing light will flash. If the device joins the network successfully, the breathing light will flash quickly, and there will be a light and cheerful melody.

Then you can check the data on the TTS console.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## Resource

[SenseCAP T1000 Tracker Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)