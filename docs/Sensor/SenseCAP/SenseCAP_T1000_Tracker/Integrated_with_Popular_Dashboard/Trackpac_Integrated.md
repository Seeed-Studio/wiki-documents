---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac Integrated
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_trackpac
last_update:
  date: 10/26/2023
  author: Jessie
---

[Trackpac](https://trackpac.io/) is an innovative IoT (Internet of Things) Dashboard management system designed to streamline the supervision, control, and notification processes for a wide range of IoT devices. These devices encompass a variety of functionalities, including trackers, temperature sensors, humidity sensors, level indicators, and other sensor-based data measurement tools.

The content of this chapter will guide users how to connect the [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to Trackpac.


## Configure the Device

Please check the [Quick Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/) to set up your device correctly.

Select the platform to `Other Platform`, configure the `APP EUI` to the recommended value: 
```cpp 
545241434B504143
```

:::tip
If you ever want to change it back, a `reset` will restore the orignal keys.
:::

Then copy the `Device EUI`, `APP EUI` and `APP key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## Configure the Trackpac portal


Login to [Trackpac portal](https://v2.trackpac.io).

### Add Device

Navigate to `Devices`, click the `+` icon to add a new device.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

Choose `Enter Keys Manually`, name your device, and configure the `Device EUI`, `APP EUI`,`APP key`.

**LoRaWAN Network**: Helium

:::note
Check the [Helium Network Coverage](https://explorer.helium.com/).
:::

**Device Type**: SenseCAP T1000

Then click `Add Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Tracking

Then your SenseCAP T1000 is now successfully integrated with Trackpac, you can check the data now.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Add Geofence(optional)


Before adding a geofence, you need to add contacts first.

Navigate to the `Contacts` section, and click the `+` button top right.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

Enter `Name` and `Select Contact Type`: In the fields provided, enter the contact's name. Select the type of contact you're adding—whether they will receive alerts via SMS, Email, or Both.

Input the contact's email and/or phone number in the respective fields.

After entering all necessary information, click the `Add` button to finalize and add the contact.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

Navigate the `Geofences` option.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


Click the `+` arrow.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


Enter Geofence Name and set Radius: Use the slider or input field to set the radius of the geofence in meters.

**Configure Alerts**: Toggle on or off whether you want to receive alerts when the geofence boundary is crossed.

* Out of Hours: Specify if you want to receive alerts only outside of certain hours.

* Start and End Time: If "Out of Hours" is selected, input the time range during which you don't want to receive alerts.

**Select Contacts for Alerts**: 

Choose which of your saved contacts should receive geofence alerts by entering in their names, or by clicking the box and selecting them from the list.

**Set Geofence Center**:

* Click on the Map: Use your mouse to click on the location where you want the center of the geofence to be.

* Use Geolocate: Alternatively, you can use the geolocate function (usually represented as a compass or location icon) to zoom into your current location and set it as the geofence center.

Click `Add Geofence` to save.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


Then you will get alerts when a tracker enters or exits the geofence.