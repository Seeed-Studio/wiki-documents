---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title:  Wialon Integrated
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Wialon
last_update:
  date: 6/4/2024
  author: Jessie
---


[Wialon](https://wialon.com/) is the fleet management software platform for GPS monitoring and IoT which tracks over 3,7 million mobile and stationary units in 150+ countries of the world and consists of more than 2,500 partner companies, 700 hardware manufacturers, hundreds of Wialon-based solution developers.

The content of this chapter will guide users how to connect the SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to Wialon platform.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Get Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker) to connect your SenseCAP T1000 Tracker to SenseCAP Cloud first.

## Get SenseCAP API on SenseCAP Portal

Log into [SenseCAP Portal](https://sensecap.seeed.cc/portal), navigate to `Access API keys`, click `Create Access Key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

Then you will get the `API ID` and `Access API keys`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Wialon Configuration

Log into [Wialon Hosting](https://hosting.wialon.com/?lang=en).

**Wialon Hosting** is a platform for GPS monitoring and IoT which is stored and administered in our data centers.

### Add Unit

Navigate to **Units** tab and click **New** to add a new unit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

Name your unit, and select the `Device Type` to `SenseCAP API`, click the wrench icon to fill in  the properties.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**:sensecap.seeed.cc<br/>
**API ID**: The API ID in SenseCAP Portal<br/>
**API Password**: The Access API keys in SenseCAP Portal<br/>
**Unique ID**: The EUI of your device.

Keep your device online, then you can see the location on the map.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### Geofence(optional)

Geofence is a limited area on the map that can be used for monitoring purposes.

Navigate to `Geofences` tab and click `New` to add a new geofence.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* Indicate the geofence name.
* Select the type.
* Mark the center of the geofence on the map (double-click on the required place).
* Indicate the geofence radius.
* Click `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>
