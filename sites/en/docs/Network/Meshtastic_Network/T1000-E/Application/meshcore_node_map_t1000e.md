---
description: This guide explains how to display the locations of MeshCore devices on MeshCore Node Maps.
title: MeshCore Node Map
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_t1000e
sku: 114993369,114993649
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/meshcore_node_map_t1000e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Why Use MeshCore Node Map

Node Map can provide real-time visibility into the [MeshCore](https://meshcore.io/#hardware) network by plotting node locations, allowing users to understand network topology and node distribution. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore Node Map relies on nodes periodically reporting their geographic position to the network. It is particularly useful for:

- **Discovering nearby repeaters**: Identify available repeaters to extend connectivity
- **Monitoring your own network**: Track node status and location
- **Debugging and optimization**: Optimize placement of repeaters and gateways


## Tutorial on MeshCore Official Map

The most popular MeshCore Node Map is the officual `MeshCore Node Map`. [Click here](https://map.meshcore.io/) to enter the website.

### Companion Configuration

To let a companion node appear on the MeshCore Node Map, a device must be properly configured to report its location. Configure as followed:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Repeater or Room Server Configuration

To let a repeater or room server appear on the MeshCore Node Map, a device must be properly configured to report its location. 

First log in to the repeater. The default admin password to a repeater is `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Enable the GPS and get the location (some repeater firmware do not support updating the real-time location, you may need to manually choose your location).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Search for your node

After the configuration, wait for a few mins, then you can see your nodes on the map.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

You can see device name, role and configuration information. So by using this map, you can easily figure out where are those alive nodes.

## (Advanced) Building Your Own Node Map Frontend

For advanced users, it is possible to build a custom Node Map frontend. It is recommended to use the following workfolow: 

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]