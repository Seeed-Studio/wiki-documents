---
description: This guide explains how to display the locations of Meshtastic devices on Meshtastic Node Maps.
title: Meshtastic Node Map
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_t1000_e
sku: 114993369,114993649
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/meshtastic_node_map_t1000_e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to display the locations of [Meshtastic](https://meshtastic.org/docs/introduction/) devices on Meshtastic Node Maps using [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) and [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) devices, assuming the devices have already been flashed with the Meshtastic firmware.

## Introduction to Meshtastic Network Monitors

The Meshtastic Node Map is an online interface that visualizes the locations of Meshtastic devices on a map. It helps users monitor the real-time positions of devices in a mesh network, providing insight into network coverage and connectivity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic devices periodically report their location to a Meshtastic server via MQTT. The Node Map retrieves these reports and displays each node's position, route, and signal range. Devices can report their location:

- **Directly via MapReport:** The device sends location data to the server directly.
- **Indirectly via other nodes:** The location is relayed through neighboring nodes.

**Suitable Use Cases**

Meshtastic Node Maps are ideal for:

- Outdoor adventures such as hiking, biking, or expeditions.
- Remote monitoring of distributed IoT devices.
- Tracking assets or team members without relying on cellular networks.

### Common Meshtastic Node Maps

| Node Map | Features | Ideal For | Notes |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | Real-time node tracking, Mesh route display, signal range display | Casual users, beginners | Simple interface, default Meshtastic server |
| [Liam Cottle's Meshtastic Map](https://meshtastic.liamcottle.net/) | Real-time tracking, historical route view, signal range display | Advanced users, data analysis | Uses custom MQTT server |

## Get Started with MeshMap

### Configuration

**LoRa Settings**
   - Configure your device to the correct LoRa frequency band for your region.
   - Enable **OK to MQTT** to allow reporting.

**MQTT Settings**
   - Enable MQTT on your device.
   - Use the default Meshtastic server, username and password.
   - Enable **MapReport** and check **I agree**. Select the reporting interval according to your needs.

### Viewing Device Locations

Open **MeshMap** in your web browser: [MeshMap Link](https://meshmap.net/). 

You will see all nodes on the map. Nodes reported **via MapReport** are direct updates from the device. Nodes reported **via other nodes** are relayed updates.

Click on any node to view detailed information (device ID, battery level, etc.), mesh route and signal coverage

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Get Started with Liam Cottle's Meshtastic Map

### Configuration

**LoRa Settings**
   - Configure your device to the correct LoRa frequency band.
   - Enable **OK to MQTT**.

**MQTT Settings**
   - Enable MQTT
   - Configure the following parameters:
     - Address: `mqtt.meshtastic.liamcottle.net`
     - Username: `uplink`
     - Password: `uplink`
     - Encryption Enabled: Yes
     - JSON Output: No
     - TLS Enabled: No
   - Enable `MapReport` and check `I agree`. Select your preferred reporting interval.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### Viewing Device Locations

Open **Liam Cottle's Meshtastic Map** in your web browser: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/). You will see all nodes displayed on the map.

Click on any node to view: detailed information about the device, signal range, historical routes and previous location updates

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>