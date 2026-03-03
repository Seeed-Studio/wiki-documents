---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake Integrated(via TTS)
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---

[Datacake](https://datacake.co/) is a multi-purpose IoT platform, which provides the possibility of building custom IoT applications, without requiring programming skills.

To meet the growing need for building IoT applications, we’ve been working with Datacake to create templates to enable the community to add [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to Datacake through The Things Network conveniently and easily.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.

## Configure The Datacake

To begin, register an account on [Datacake](https://app.datacake.de/signup).

### Create a Workspace

First, create a Workspace on Datacake by navigating to the **Create Workspace** button in the upper left corner.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### Add Device

Click **Devices** on the left hand menu.
To add a new device, click the **Add Device** button on the right.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

Choose **LoRaWAN** to add LoRaWAN devices.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

We uploaded a template for users, you only need to select the product model and paste your device EUI to quickly set up.

:::info
Device Template: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### Get a API Token

Navigate to **Account Settings** on your Datacake workspace, and copy your API Token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## Configure The Things Stack

On The Things Stack, navigate to **Integrations** → **Webhooks**, and click **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Choose the Datacake Webhook template.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Name your integration by filling in the Webhook ID and paste the API token from Datacake for the authorization.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Datacake Dashboard

Then you can check your devcie data on the Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>
