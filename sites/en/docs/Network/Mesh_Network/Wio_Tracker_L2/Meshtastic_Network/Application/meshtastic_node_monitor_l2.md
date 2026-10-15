---
description: Meshtastic Network Monitor is a tool that allows you to visualize, manage, and monitor nodes in a Meshtastic mesh network.
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /meshtastic_node_monitor_l2
sku: 100029766
sidebar_position: 5
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/meshtastic_node_monitor_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction to Meshtastic Network Monitor

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor is a tool that allows you to visualize, manage, and monitor nodes in a Meshtastic mesh network. It provides real-time information about the status, routing, and communication between devices. The monitor is the Meshtastic analyzer that collects data either through a connected gateway or MQTT server, visualizes the network topology, and displays node information such as battery status, signal strength, and GPS location. It can function as a Meshtastic node map too.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Use Cases**

* Meshtastic node map. Tracking and visualizing outdoor nodes in remote areas.
* Meshtastic analyzer. Monitoring communication performance and routing in mesh networks.
* Meshtatsic monitor. Debugging and testing network connectivity for Meshtastic devices.

**Common Meshtastic Monitors**

* Meshsense: [click here](https://affirmatech.com/meshsense) to learn more
* Meshmonitor: [click here](https://meshmonitor.org/) to learn more

**How to Connect to a Meshtastic Monitor**

1. Set up your Meshtastic nodes and ensure they form a functioning mesh.
2. Configure at least one node as a gateway (e.g., MQTT Gateway).
3. Connect the monitor app to the gateway or MQTT server.
4. Verify that nodes are visible and reporting status in the monitor interface.

## Get Started with Meshsense

### Configuration

#### App Preparation

Download and install the **Meshsense** app for your platform: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### Device Preparation

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
</a>
</div>

#### MQTT Gateway Configuration

Follow the official configuration tutorial to set up mqtt: [Wio Trcker L2 MQTT Gateway Setup](https://wiki.seeedstudio.com/set_up_mqtt_gateway_l2/)

:::tip
To display real-time GPS location, make sure the GPS is enabled on your node. And while configuring MQTT, ensure location reporting is allowed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### Network Connection

Connect your computer to the same Wi-Fi network as the Xiao ESP32S3 kit. Please make sure it is a 2.4G wifi.

Open a serial terminal (e.g., Arduino Serial Monitor or PuTTY) to find the IP address of your Xiao device. You can use the [Meshtastic web serial monitor](https://flasher.meshtastic.org/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

Enter this IP address in the Meshsense device connection field.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

Once connected, your Meshtastic node should appear in Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### Position Display

You need to enable GPS to get position. This can be configured directly on device by `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Also, you can configure it on your phone APP.

* In the Meshsense app, ensure GPS reporting is enabled.
* Once connected, the app will display the real-time location of each node on the map. You can see your node position directly on the APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

Also on Meshsense website map, you can see your real-time position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


With this setup, you can manage your private Meshtastic network efficiently and visualize node behavior directly in Meshsense.
