---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Qubitro Integrated(via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---


[Qubitro](https://www.qubitro.com/) is a Device Data Platform (DDP) for developers that provides the tools, workflows, and infrastructure you need to develop solutions faster, without the need of manual integration of multiple services. Qubitro supports popular data sources out-of-the-box and provides tools for real-time collaboration on your projects combined with scalable infrastructure.

The content of this chapter will guide users how to connect the SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to Qubitro through TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.

## Configure The Qubitro 

To get started, create an account with [Qubitro](https://portal.qubitro.com/login). By creating an account, you’ll automatically be on a Starter plan. 



### Get credentials from Qubitro Dashboard

Create a new project.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>


Click on the **New source** button and click on **The Things Stack** in the list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

Then you will get the Project ID and Webhook Signing Keys.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>


## Configure The Things Stack

Navigate to [TTS Console](https://eu1.cloud.thethings.network/console/) to configure the webhook integration.

On The Things Stack, navigate to **Integrations** → **Webhooks**, and click **Add Webhook**.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Choose the Qubitro Webhook template. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Name your integration by filling in the Webhook ID, and paste the values provided in the first step on Qubitro Portal. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

Click on the **Create Qubitro Webhook** button and go back to the Qubitro Portal.



## Device status

Click on the **Go to project** button and then the **Refresh** button to verify that the devices are listed successfully.


:::info Tip
Once the integration is configured, all devices connected to the same project on The Things Stack will be synchronized automatically.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Configure the decoder on Qubitro

Navigate to your device page, and click **Create function button**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

Choose the **Decoder function**, and click **Get started**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>


We uploaded a template for users，you only need to select the product model to quickly set up.

:::info
**Formatter type**: Device template<br />
**Manufacturer Brand**: Seeed Studio<br />
**Model**: SenseCAP_T1000
:::

Then click **Save and complete**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>



## Check the data

Navigate to the device and click on the **Data** tab to verify the incoming data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>


## Customize the dashboard(optional)

**Location Dashboard**

Navigate to your dashbaord page, and click **Create new**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

Name your dashboard and click **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>


Choose **Map** for the widget type.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

Choose your device and **coordinates** value.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>


Then you can check you location on the dashbaord. 
You can also customize your other widgets.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>

