---
description: Connect_Wio_Tracker_1110_to_TTN
title: Connect to TTN
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connect_wio_tracker_to_TTN
last_update:
  date: 9/14/2023
  author: Jessie
---



[The Things Stack(TTS)](https://www.thethingsnetwork.org/) is a LoRaWAN® Network Server stack which is the critical component for any LoRaWAN solution. In this chapter we will guide users to connect the Wio Tracker 1110 Dev Board to the Things Network.


## Configure the Dev Board



Before connecting to the TTS, you need to configure the basic parameters of your board on SenseCAP Mate APP, check [Get Started](https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) for more details.

* Set the platform to TTN, and then copy the Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>





## Configure The Things Stack




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


Paste the Device EUI/APP EUI/APP Key of your device, and then click 'Register end device'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/register-wio.png" alt="pir" width={800} height="auto" /></p>


### Step 3: Configure the decoder

Navigate to `Payload formatters`, select Formatter type to `Custom Javasript formatter`, then copy the following code:

<details>

<summary>For TTN</summary>

```cpp
```
</details>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config-decoder.png" alt="pir" width={800} height="auto" /></p>


### Step 4: Check the data

When the device tries to connect to the network, the breathing light will flash. If the device joins the network successfully, the breathing light will flash quickly, and there will be a light and cheerful melody.

Then you can check the data on the TTS console.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## Resource

[SenseCAP T1000 Tracker Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)



