---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title:  Ubidots Integrated(via Helium)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 8/16/2023
  author: Jessie
---


This article will illustrate the process of connecting the [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to Ubidots through Helium LNS.

<div align="right">
Written by Juan David Tangarife - From Ubidots Team
</div>

[Source](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### Requirements

An Ubidots active account
A [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)
An active account in the Helium console with some DC
An cellphone supporting either Google Play Store or AppStore as well as Bluetooth.

### Install SenseCAP Mate app and configure the tracker

Scan the following QR code. It will take you to Seeed Studio's SenseCAP Mate app official download page.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

Once it is installed, enable the Bluetooth on your cellphone and launch the app. If you don't have an account already, you will have to register to use the app.

After that, press and hold the tracker's button for at least 3 seconds or until the LED starts flashing. Then, from the list of devices, select **Tracker T1000**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

Tap on your device:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

Go to the **settings** tab and then **LoRa** tab. There select as _platform_ **Helium** and select the _Frequency plan_ according to your requirements, also, make sure to copy the **Device EUI, APP EUI** and **APP Key** for you are going to need it in later steps. Once finished, tap the **Send** button to save the settings.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### Register the tracker on Helium LNS

Log into your Helium console, then, go to **“Devices”** section and click on **“Add device”** button

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

Fill the required fields such as the device name**,** the LoRaWAN credentials, etc. Then click the **Save Device** button.
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Create the decoder function on Helium

The next step is to setup the function that will decode the raw bytes into a human readable form. Head to **Function** tab on the panel at the left side. Then click the **Add New Function** button and give it a name:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio provides a decoder specifically for this device on the following [repository](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js). Paste that decoder on the text field and then save the changes.

### Create the integration to Ubidots

Go to the **Integrations** section, then click on **Add integration** and search for the Ubidots integration:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

Click on **+Add integration**
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

Enter your Ubidots token in the respective field, then click on the **Continue** button and wait for the confirmation pop-up message. After that, name your integration and click the **Add Integration** button:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

After performing this step, a new **Helium plugin** will be created on your Ubidots account.

### Create the flow to connect the integration to Ubidots

Head to the **Flows** section, then, from the drop-down menu at the top left corner, drag and drop the device, the decoder function and the integration into the blank area, then join the dots together as the GIF below shows:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

In this example, both the device and the decoder function are called "sensecap-lorawan-tracker", and the integration is called "send data to ubidots".

Since the JSON object returned by Seeed Studio's decoder is not compatible with the Ubidots schema, a transformation is needed after extracting the data of interest.  
Head to the decoder section of your Helium plugin, delete all the code there and replace it with the following one:  

```cpp
#Set to true in order to enable hotspot information
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

If everything got wired up correctly, you should be seeing this on a newly created device on Ubidots
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
