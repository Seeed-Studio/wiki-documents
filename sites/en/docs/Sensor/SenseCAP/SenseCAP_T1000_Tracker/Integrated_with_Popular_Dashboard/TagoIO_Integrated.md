---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO Integrated(via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[TagoIO](https://tago.io/) is an IoT Cloud Platform for businesses to manage devices, data, users, analytics, and integration. Its intuitive interface makes it easy for businesses of all sizes to build and deploy innovative IoT solutions.

The content of this chapter will guide users how to connect the [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to TagoIO through TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.

## Configura the TagoIO

To get started, create an account with [TagoIO](https://admin.tago.io/signup).

### Add Device

Navigate to **Devices** tab and click **Add Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

Search **Seeed SenseCAP T1000** for quick setup.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

Name your device and paste your device EUI, then click **Create my Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### Generate authorization

Click **Generate authorization** and copy your authorization.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## Configura The Things Stack

On The Things Stack, navigate to **Integrations** → **Webhooks**, and click **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Choose the TaoIO Webhook template.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

Name your integration by filling in the Webhook ID, and paste the Plugin ID and TagoIO token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

After your device is connected, you can check all the connections in the **Live Inspector** tab in TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## TagoIO Dashboard(Optional)

A dashboard is where you place your widgets to visualize and interact with data, all in real-time. You can customize your dashboard to your needs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

Navigate to **Dashboard** tab, name your dashboard and click **Create my Dashboard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>

**Location Dashboard**

Click **Add widget**, choose **Map** type.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

**Data from**: Your device -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>
