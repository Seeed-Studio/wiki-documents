---
description: Connect to Datacake via TTN
title: Connect to Datacake via TTN
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 6/10/2025
  author: Zeno
---

# Connect to Datacake via TTN

## Datacake
Datacake is a versatile low-code IoT platform. It enables anyone to build custom IoT applications quickly, without coding, and instantly convert them into white-label solutions with a single click.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## Step1: Connect to TTN
Please refer to "[How to connect S210X Sensors to The Things Network](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)"

**Note:** Please select **“Other Platform”** for platform setting. 

## Step2: Upload Data from TTN to Datacake

(1)Create a new account, website: `https://datacake.co/`  
(2)Click **"Devices" -> "Add Device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

(3)Select **"LoranWAN"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

(4)Select **"New Product from template"** and search for **"Seeed"**, then select product

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

(5)Select **"The Things Stack V3"**, then click **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

(6)Enter **"DEVEUI"** and **"NAME"**, then click **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

-   Select **"Free"**  
-   Click **"Add 1 device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

(7)Create API keys for subsequent Webhook authentication
-   Navigate over to your Datacake Workspace and select "Members" from Sidebar.  
-   Select "API Users" from Tab-Bar and switching to the API Users Tab. 
-   Click on the upper right Button "Add API User"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

-   Enter a name for your API User
-   Next select "Devices" from Workspace Permissions List
-   Click on "Add Permission for all Devices in Workspace"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

-   Select "Can record measurements"
-   Press "Save" to create the Token

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

-   Click "Copy"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

This API Token is now valid for all devices in your workspace. Everytime you create a new device, this Token does automatically work for that device.

If you are interested in creating a Token for selected Devices only, you can navigate into the device and select the token from there. But you have to leave out the "All devices in workspace"-Permission here.

(8)Create Integration on TTN
-   Select "Webhooks" on the TTN Application’s Side-Bar
-   Select "Add webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

-   Select "Datacake"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

-   Enter a name for your Webhook ID
-   Enter the token copied from Datacake
-   Select "Create Datacake webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

(9)Configure Downlinks  
In order to be able to queue up Downlinks on your TTI Application you need to provide additional detail on your Datacake-Device. To set the configuration please move into the LoRaWAN settings on the corresponding device.
-   Switch back to Datacake
-   Select "configuration" and scroll down a little bit

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

-   Select "Change"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

-   Here you need to fill in the 4 textboxes with Information that you find on the TTN Console.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

-   For TTS Device ID, this is the ID of your Device in your TTN Application. You find it here:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

-   For TTI Server URL, this is the URL of your TTN Instance as available to the public.For public TTNv3: `eu1.cloud.thethings.network`

-   For TTI App ID, this is the ID of your Application on TTN:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

-   Create TTI API Key
-   Select "API keys" and then click "Add APIkey"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

-   Enter the name
-   Set corresponding rights to allow queuing up downlinks
-   Click "Create API key"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

-   After you created your API Key you will see the notification
-   Please copy your key to your clipboard as it will only be shown once!
-   Paste this key into the device settings on Datacake

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

-   Final Settings:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**Note: Do not forget to click "Update"**

-   Successfully configure Downlinks

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

(10)Add Payload Decoder  
Copy your Payload Decoder to here:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

You can also find [SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main) on GitHub.