---
description: earn how to configure Siemens PLCs using the S7 protocol and integrate them with Node-RED on a Raspberry Pi-powered reComputer for efficient edge computing. Discover step-by-step guidance on setting up S7 nodes, creating flows, and monitoring PLC variables.
title: Connecting Siemens PLCs Using the S7 Protocol with reComputer R1000

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_nodered_s7
last_update:
  date: 08/30/2024
  author: Kasun Thushara
---

## Introduction 

The **S7 Protocol** is a communication standard developed by Siemens for their family of programmable logic controllers (PLCs). It's crucial for enabling smooth and reliable data exchange between Siemens PLCs. This protocol operates over Ethernet using a method called ISO TCP, which is structured around blocks of data known as Protocol Data Units (PDUs). Each PDU is a segment of information whose size and structure are determined when the connection is first established.

In this article, we'll explore how to use Node-RED, a popular flow-based development tool, on a Raspberry Pi-powered reComputer to interface with Siemens PLCs using the S7 Protocol. This setup allows for efficient and flexible integration of industrial automation systems with modern IoT platforms.

## Configuring Your PLC for S7 Protocol

After designing your Ladder or Function Block Diagram, the next step is to configure your Siemens PLC to enable the S7 protocol. The exact steps may vary depending on the PLC model you're using. For example, if you’re using a [Siemens LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html), you’ll configure this in the LOGO Soft programming software.

**Network Configuration**: Under the Ethernet settings, you'll need to input the PLC's IP address, subnet mask, and default gateway.

**Enable S7 Protocol**: There’s an option to allow S7 communication—make sure to tick this box.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**Set Up S7 Communication**: Add an Ethernet connection configured as an S7 server. You’ll also need to set up the Client and Server TSAP (Transport Service Access Point).

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
If you’re using a different Siemens PLC model, be sure to consult the relevant documentation for specific configuration steps.
:::



## Configuring S7 Nodes in Node-RED


To integrate Siemens PLCs with Node-RED, you'll need to use the `node-red-contrib-s7` node. Follow these steps to set it up:

### Install the S7 Node

- Go to the **Manage Palette** option in Node-RED.
- Navigate to the **Install** tab and search for `node-red-contrib-s7`.
- Install the node to add S7 capabilities to your Node-RED environment.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### Create a Flow

- Drag and drop the **S7 out** node onto your workspace, along with two **inject** nodes.
- Connect the inject nodes to the S7 out node to initiate communication with the PLC.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### Configure the S7 Out Node

- First, configure the endpoint by clicking the `+ (plus)` icon.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- Enter the `IP address` of your PLC.
- Set the Mode to `TSAP`.
- Input the `Local TSAP` and `Remote TSAP` as configured in your PLC’s server settings.
- Give your PLC a recognizable name for easy identification.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### Add Variables

- Define each variable with a **Name** and **Address**.
- Use the appropriate address spaces corresponding to different block types (e.g., coils, inputs). You can refer to [Siemens S7 Address Documentation](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html) for more details.
- Ensure each variable name accurately corresponds to its block type.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### Configure the Inject Node

- Edit the inject node’s payload to set a boolean value. Use one inject node for `true` and another for `false`.



<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### Add S7 In Node for Monitoring

- Drag and drop the **S7 in** node to monitor variable values.
- You can configure this node to view a single variable or all variables.
- Select the corresponding `PLC, Mode`, and `Variable` you wish to monitor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### Deploy Your Flow

- Once everything is configured, deploy your flow to start communicating with your Siemens PLC.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>


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