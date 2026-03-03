---
description: Connect SenseCAP T1000 Tracker to Akenza
title: Akenza Integrated(via TTS)
keywords:
- Tracker
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 8/25/2023
  author: Jessie
---

[Akenza](https://akenza.io/) is the IoT application enablement platform, allowing you to build great IoT products and services with value. It connects, controls, and manages IoT devices; all in one place.

In this tutorial you will learn how to integrate the [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) from Seeed with TTN on Akenza.
​
<div align="right">
Written by Akenza Team
</div>

[Source](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**Applications**:
Indoor/outdoor asset tracking for various use cases: <br/>
International asset tracking<br/>
Equipment monitoring<br/>
Shared equipment tracking and more.<br/>
Personal safety cases (retirement home, search & rescue) thank to the SOS button and embedded buzzer.<br/>

**Product features**: <br/>
3 positioning technology for both indoor and outdoor: GNSS, Bluetooth and Wi-Fi<br/>
Temperature, light and motion sensor<br/>
SOS button & buzzer<br/>
Card size device with just 6.5mm thickness
:::


### Getting Started

In this tutorial, you will learn how to register the T1000 tracker from Seeed on akenza using the connectivity provider The Things Network (TTN). 

:::info
We will assume here that you don't have an existing TTN account and will connect the device using [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) of akenza. 

If you already have an account with TTN, you can of course synchronize it directly by using our [integration](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations) panel.
:::

To register a new device on the platform, you will need to create a `Data Flow`, which defines the data processing chain in akenza. 

### Creating a Data Flow

#### Device Connector

To create a **Data Flow**, go to `Data Flow` and select `Create Data Flow`. 

Choose `LoRa` as your Device Connector. If you have integrated your TTN account, you will see it listed here. If you do not have your own account, you can make use of the [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) of akenza.

Select The Things Network.
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### Device Type

The **Device Type** specifies the payload decoder to be used to decode the data from the device.

Use the search field to find the **T1000** device and select the Device Type accordingly. Proceed further to Output connectors.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### Output Connector

Choose one or multiple Output connectors for your Data Flow. **Output Connectors** define where the data from the device shall be stored and/or processed.

Proceed by choosing the **Akenza DB**. 

With the connection to the Akenza DB, we ensure that all data passing through this data flow is saved in the Akenza Database and thereby becomes accessible to you. Save your **Data Flow** and give it a name.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### Connect the T1000 device of Seeed

To create a new device, select `Create Device within the menu of Assets Inventory`. Add a device name and optionally a description, a [tag](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza) or [custom fields](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza) . 

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

In the next step, select the **Data Flow** that you created previously.
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

Fill in now all **Connectivity Parameters** about your T1000 tracker. These are supplied by the manufacturer of the device.

Finish the process by clicking on Create Device.

Your T1000 tracker device will now be displayed in the **Asset Inventory Overview**.

To check the incoming data of your device, select your device from the list and see the status on the **Data Overview**.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**Congratulations**, you have successfully connected the Seeed SenseCAP T1000-A tracker on akenza via the TTN LoRaWAN network!

### How to configure the tracker via Bluetooth

The SenseCAP Mate App by Seeed allows you to configure the different work modes and other setting of the tracker.<br/> 
For iOS, please search for “SenseCAP Mate” in the App Store and download it.<br/>
For Android, please search for “SenseCAP Mate” in the Google Store and download it.<br/>
Please refer to the [User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) of the device for a detailed description of the different work modes and configuration settings.

### How to configure the tracker via LoRa Downlink

Alternatively to the mobile app, you can configure the T1000 tracker directly using [downlink](https://docs.akenza.io/akenza.io/get-started/connectors/downlink) packets.<br/>
For that, navigate to the device detail page of your tracker and select the Downlink tab.<br/>
Simply enter the correct HEX payload and Port number and proceed by clicking on Send message.<br/>
Please refer to the [User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) of the device for a detailed description of the different work modes and configuration settings.
​
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀Going further with the geofense and map view

Now that you are receiving location data from your device, you can leverage the other asset tracking features of akenza, namely the geofense logic block and dashboard builder.

#### Geofense Logic Block

Create actions and notifications based on the location of your device thanks to our no-code geofense block. 

Simply specify a data input, in this case the T1000 tracker, add the geofense block, create your custom fense, and finally define a resulting action triggered when the device enters or leaves the fense.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### Map view of the Dashboard Builder

Display the position of your T1000 tracker in real-time thanks the to map component of the dashboard builder.

Simply head over to the Dashboard Builder and create a new dashboard. Alternatively, you can use the Asset Tracking template as a starting point. Add a Map component and select the T1000 tracker as the source of the data. Select the Latitude and Longitude readings of the sensor and add additional Marker Data points if needed (e.g. Battery charge).

You can now follow your assets in real time on the map and even display their path by clicking on Track next to the device icon.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>