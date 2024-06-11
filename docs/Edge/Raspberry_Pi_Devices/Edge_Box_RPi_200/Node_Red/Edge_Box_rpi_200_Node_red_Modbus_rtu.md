---
description: Learn how to set up and configure Modbus RTU communication using the Edge Box RPi 200 and Node-RED. This guide covers installing the Modbus node, configuring the Modbus getter and server, and using function blocks to extract temperature and humidity data. Follow step-by-step instructions to seamlessly integrate Modbus RTU devices with your industrial IoT setup. Achieve efficient monitoring and control of your processes with ease.

title: Edge Box RPi 200 with Node Red and Modbus RS485
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 06/07/2024
  author: Kasun Thushara
---

## Introduction

Modbus RTU (Remote Terminal Unit) is a popular protocol in industrial automation for connecting devices like sensors and controllers over serial communication lines. Known for its simplicity and reliability, it is widely used in monitoring and controlling industrial processes. The Edge Box RPi 200, an industrial IoT gateway based on the Raspberry Pi, enables integration of Modbus RTU devices with modern networks. Using Node-RED, a flow-based development tool, this wiki guides users in setting up Modbus RTU communication with the Edge Box RPi 200. It highlights applications such as energy management, environmental monitoring, and process control. This resource offers a quick and practical approach to leveraging Modbus RTU in various industrial scenarios.

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

Edge Box comes to your hand pre-installed with Raspberry Pi OS. If you are booting this device for the first time, please read our [Getting Started Wiki](https://wiki.seeedstudio.com/Edge_Box_introduction/). We have prepared a [Getting Started Guide on Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). It is recommended that you review this guide before proceeding to the wiki. In this tutorial, we are going to connect the Host PC running the YABE room temperature simulator with Node-RED running on Edge Box.

### RS485
In the Edge Box RPi 200, there is one RS-485 port. You can find more details [here](https://wiki.seeedstudio.com/Edge_Box_introduction/#serial-ports--rs232-and-rs485). Before working on Node-RED, you should wire the device properly.

## Install Modbus Node

To install the Modbus node, Start Node-RED on your Edge Box. You can usually access it by opening a web browser and navigating to `http://<your-edgebox-ip>:1880`. And follow these steps:


**Step 1.** Click the Settings button, indicated by a **three-dash** icon, located at the top-right corner, then select **Manage palette.**

**Step 2.** In the palette tab, navigate to the **Install tab**.

**Step 3.** Use the node search bar to find the desired [Modbus node](https://flows.nodered.org/node/node-red-contrib-modbus).

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Step 4.** Click the **Install** button next to the node.

**Step 5.** If prompted, click the **Install** button from the dropdown warning window to confirm the installation.

**Step 6.** Wait for the installation process to complete. Once finished, the **Install** button should change to **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identifying Modbus Addresses

Identifying the correct Modbus addresses is a crucial step. It is recommended to consult the PLC,device or sensor manufacturer's datasheet for detailed information on Modbus addresses, including input, output, and holding registers.

Here we are going to use SHT20 RS485 Temperature Sensor. Using an RS485 hardware interface (with lightning protection design), the protocol layer is compatible with the standard industrial Modbus-Rtu protocol. When we explore data sheet we can find the Input register which is given the temperature and humidity data. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600, 
height:'auto'}}/></div>

## Get Data from Device

Required nodes: `Modbus Getter`, 2 `Function` nodes, 2 `Debug` nodes, `Modbus Response`.

Drag and drop these nodes and connect them according to the following manner/order.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### Configure Modbus Getter Node

1. Double-click on the **Modbus Getter** node.
2. Set **Unit ID** to `1`.
3. Set **FC** to `FC4: Read Input Registers`.
4. Set **Address** to `1` (as provided by the simulation device datasheet).
5. Set **Quantity** to `2` (to read two blocks).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600, 
height:'auto'}}/></div>

### Configure Modbus Server

1. Under the **Server** section, click the pencil button to create a new server configuration.
2. Give the server a name.
3. Set **Type** to `Serial Expert`.
4. Set **Serial Port** to `/dev/ttyACM0`.
5. Set **Serial Type** to `RTU`.
6. Keep other settings as they are.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### Function Blocks Configuration

We use the function block to extract the relevant temperature and humidity values. The output of the getter node is a decimal number containing both integer and floating point parts, so we need to adjust using basic mathematics.

#### For Temperature
```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

#### For Humidity
```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

### Deploy

Press the **Deploy** button. You will see the values for humidity and temperature in the debug window.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800, 
height:'auto'}}/></div>

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
