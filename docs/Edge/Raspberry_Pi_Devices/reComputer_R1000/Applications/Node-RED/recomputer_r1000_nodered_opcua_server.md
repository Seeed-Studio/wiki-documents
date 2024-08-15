---
description: This wiki provides a step-by-step guide on setting up an OPC UA server using Node-RED on a Raspberry Pi-powered reComputer R1000. It includes detailed instructions on installing and configuring the OPC UA server node, connecting Modbus TCP and RTU devices, and monitoring data using the UaExpert OPC client. Perfect for those looking to integrate and visualize industrial data with ease.
title: reComputer R1000 act as OPC UA server with Node-RED

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_nodered_opcua_server
last_update:
  date: 08/14/2024
  author: Kasun Thushara
---

## Introduction 

The OPC Unified Architecture (UA), introduced in 2008, represents a significant evolution in industrial communication standards. Unlike its predecessors under the OPC Classic umbrella, OPC UA is a platform-independent, service-oriented architecture that unifies all the functionalities of previous OPC specifications into a single, extensible framework. This modern approach not only preserves the core capabilities of OPC Classic but also enhances them with a multi-layered design that meets the complex demands of today’s industrial environments.

OPC UA’s architecture is designed with key principles in mind: it ensures **functional equivalence** by mapping all COM-based OPC Classic specifications to the UA framework, enabling seamless transitions for legacy systems. The **platform independence** of OPC UA allows it to operate across a wide range of devices, from embedded microcontrollers to cloud-based infrastructures, making it versatile and future-proof. **Security** is a cornerstone of OPC UA, with robust encryption, authentication, and auditing features to protect data integrity and confidentiality. Furthermore, its **extensible nature** allows for the continuous integration of new features without disrupting existing applications, ensuring that it can adapt to evolving industrial needs. The **comprehensive information modeling** capabilities of OPC UA also provide a powerful tool for defining complex information structures, making it an ideal choice for industries requiring detailed and scalable data management solutions.

## Getting Start 

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation 
In this tutorial, we'll create a practical example of setting up our reComputer R1000 as an OPC UA server using Node-RED. We'll focus on collecting data from Modbus TCP and RTU devices, though it's worth noting that you can also gather data from MQTT, BACnet, and other devices. For demonstration purposes, we'll specifically use Modbus TCP and RTU. If you're unfamiliar with collecting data from these protocols, please refer to our previous tutorials:
- [reComputer R1000 with Node-RED and BACnet IP](https://wiki.seeedstudio.com/reComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000 with Node-RED and Modbus TCP](https://wiki.seeedstudio.com/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000 with Node-RED and MQTT](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/)

## Installing the OPC-UA Server Node

**Access Node-RED on reComputer R1000**

Open your web browser and navigate to `http://{reComputer_IP_ADDRESS}:1880` to access the Node-RED interface on your reComputer R1000.

**Install the OPC-UA Server Node**

In Node-RED, go to the top-right menu and select Manage palette.

In the Install tab, search for `node-red-contrib-opcua-server`.

Click the Install button next to the node package to add it to your Node-RED environment.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**Add the Compact OPC-UA Server Node.**

After installation, locate the OPC-UA nodes in the Node-RED palette.Drag and drop the compact server node into your workspace to start configuring your OPC-UA server.

## Port Configuration:

After dragging the compact server node into your workspace, double-click on it to open the configuration settings.

In the configuration panel, you'll see the Port number assigned to the server. Make a note of this port number as you'll need it for the next steps.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**Create the Endpoint URL**

Switch to the **Discovery** tab within the configuration settings.

Here, you'll need to create an **Endpoint URL** for the OPC-UA server.

Use the following format for the URL:
`opc.tcp://<IP_reComputer>:<Port>`

For example, if your reComputer’s IP address is 192.168.0.157 and the assigned port is 54840, your Endpoint URL would be:
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## Storing Variables in Flow Context

In Node-RED, the flow.set() function is used to store data in the flow context, enabling you to save information that can be accessed by any node within the same flow. This is particularly useful when you need to share data between different parts of your flow.


**Add a Function Node**

Drag and drop a Function node onto your Node-RED workspace.Double-click on the Function node to open its editor.

**Storing Temperature Data**

Suppose you want to store the temperature value from a Modbus RTU sensor as a flow context variable. In the Function node editor, enter the following code.

```bash
flow.set("Temperature", msg.payload);

```
This code saves the temperature data (contained in msg.payload) into a flow context variable called "Temperature".

**Connecting the Function Node**

Connect this Function node to the node where the raw temperature data is coming in. This ensures that the temperature value is stored as soon as it is received from the sensor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**Storing PLC DI/DO Values**

If you need to store a specific value from a PLC Digital Input/Output (DI/DO) array, you can do so using a similar approach. For instance, to store the value of the third coil in the array, use the following code:

```bash
flow.set("Coil3", msg.payload[2]);

```
This code extracts the third value from the msg.payload array and stores it in a flow context variable named "Coil3".

**Connecting the Function Node for DI/DO**

Connect this Function node to the node that outputs the DI/DO array. This will store the specific coil value each time the array is updated.

## OPC UA Server Address Space Setup

The **Address Space** tab is where the OPC UA server’s Information Model is constructed. This model defines the structure and data available to OPC UA clients, using classes and methods from the node-opcua SDK.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Import the OPC UA SDK and utilities from the coreServer
const opcua = coreServer.choreCompact.opcua;

```
### Namespace Creation

The **namespace** is created within the server’s address space. This namespace will contain all the nodes and variables specific to your application.

```bash
// Create a new namespace for the server within the address space
const namespace = addressSpace.getOwnNamespace();
// Internal reference to the server instance for use within functions
var flexServerInternals = this;

```

### OPC UA Data Types and Status Codes

The **Variant, DataType, and StatusCodes** classes from the OPC UA SDK are used for defining the types and statuses of the variables that will be published by the server.

```bash
// Define OPC UA data structures and types for later use
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```
### Initializing Variables

The variables that will be published by the server are initialized in the flow context. These variables represent the data that clients will read or write.

```bash
// Initialize variables in the flow context that will be exposed by the OPC UA server
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### Defining Folder Structure in the Address Space

A folder structure is defined within the server’s namespace to organize the nodes. This structure makes it easier for clients to navigate the available data.

```bash
// Find the root folder node in the address space
const rootFolder = addressSpace.findNode("RootFolder");

// Add a new device folder under the root for the RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Add subfolders for digital outputs (DIO) and analog values under the device folder
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### Defining OPC UA Views

OPC UA views are custom hierarchies that provide alternative ways for clients to browse the server’s data, aside from the default folder structure.

```bash
// Create a view for digital outputs (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Create a view for analog values
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Add references to the nodes in the respective views
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Reference to the Humidity node
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Reference to the Coil2 node
});
```
## Connecting to the OPC UA Server with UaExpert

To connect to our OPC UA server endpoint, you'll need an OPC UA client. Follow these steps to get started:

**Download UaExpert**

[Visit](https://www.unified-automation.com/downloads/opc-ua-clients) and register to download UaExpert, a free OPC UA client.

**Install UaExpert**

After downloading, install UaExpert on your computer following the on-screen instructions.

**Set Up the Connection**

Launch UaExpert and go to the Endpoints section.Create a new connection by entering your OPC UA server’s endpoint URL. 
For example:`opc.tcp://<IP_reComputer>:<Port>`

Example: `opc.tcp://192.168.0.157:54840`

Configure any necessary security settings or connection rules based on your server configuration.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**Connect to the Server**

Once the connection is established, navigate to the Address Space in UaExpert.You'll see the main folder labeled RaspberryPI-reComputer, which you created in Node-RED. Inside this main folder, you'll find two subfolders: Analog and DIO.

**Monitor Values**

Drag and drop the variables from the Analog and DIO folders into the UaExpert data view area.You can now visually monitor how the values change in real-time as your system operates.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>