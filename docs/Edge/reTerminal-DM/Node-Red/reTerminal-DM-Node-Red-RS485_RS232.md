---
description: reTerminal DM Node-Red RS485_RS232
title: reTerminal DM Node-Red RS485_RS232
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-RS485_RS232
last_update:
  date: 04/04/2023
  author: Peter Pan
---

# Brief info about RS485, RS232, Modbus, Modbus RTU and Modbus Node-RED Node

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

## RS485 and RS232

RS485 and RS232 are both serial communication protocols used to transmit data between devices. However, there are some important differences between the two.

RS232 is a standard for serial communication transmission of data, which is commonly used in computer serial ports. It uses a single-ended signal, meaning that there is a single data line (TX) and a single ground line (RX) for communication. The maximum cable length is limited to 50 feet, and the maximum data rate is 115 kbps.

On the other hand, RS485 is a standard for serial communication transmission of data, which is commonly used in industrial applications. It uses a differential signal, meaning that there are two data lines (A and B) and a ground line (GND) for communication. This differential signal provides better noise immunity and allows for longer cable lengths of up to 4,000 feet. The maximum data rate for RS485 is typically higher than RS232, up to 10 Mbps.

Another key difference between RS232 and RS485 is that RS232 is designed for point-to-point communication, whereas RS485 is designed for multi-point communication. This means that RS232 can only transmit data between two devices, while RS485 can transmit data between multiple devices on the same bus.

In summary, RS232 is commonly used for short-distance communication between two devices, such as a computer and a peripheral device, while RS485 is commonly used for longer-distance communication between multiple devices, such as in industrial control systems.

## Modbus RTU

Modbus RTU is a popular industrial communication protocol used for data exchange between devices in a supervisory control and data acquisition (SCADA) system. It is a serial communication protocol that operates on top of RS485 or RS232 bus standards.

Modbus RTU uses a master-slave architecture, where a master device initiates communication with one or more slave devices. The master sends a request message to a slave device, which then responds with a message containing the requested data.

Modbus RTU messages consist of a header, data, and an error-checking field. The header contains information about the message, such as the slave address and function code. The data field contains the actual data being transmitted. The error-checking field is used to ensure the integrity of the message.

Modbus RTU supports a variety of data types, including binary, integer, floating point, and string. It also supports a range of function codes that allow for different types of data access, such as read holding registers, write single coil, and read input registers.

One of the advantages of Modbus RTU is its simplicity and ease of implementation. It is widely supported by a variety of devices and software, making it a popular choice for industrial automation and control systems. It is also well-suited for applications that require real-time data exchange and low-latency communication.


Modbus RTU is a popular communication protocol used in a variety of industrial applications, such as:

  *  Building automation and control systems: Modbus RTU is commonly used for monitoring and controlling lighting, HVAC, and other building systems.

  *  Energy management systems: Modbus RTU can be used to monitor and control energy consumption in commercial and industrial buildings.

  *  Manufacturing and process control: Modbus RTU is often used to monitor and control manufacturing processes, such as assembly lines, conveyor systems, and packaging machines.

  *  Water and wastewater treatment: Modbus RTU is used for monitoring and controlling the operation of pumps, valves, and other equipment in water and wastewater treatment facilities.

  *  Oil and gas production: Modbus RTU is used in oil and gas production facilities to monitor and control pumps, compressors, and other equipment.

  *  Renewable energy systems: Modbus RTU can be used to monitor and control solar panels, wind turbines, and other renewable energy systems.

  *  Transportation systems: Modbus RTU is used for monitoring and controlling traffic signals, lighting, and other equipment in transportation systems.

In general, any application that requires real-time data exchange and low-latency communication in an industrial environment can benefit from the use of Modbus RTU.

## Modbus node

Node-RED has a built-in Modbus node, which allows users to easily integrate Modbus devices into their Node-RED workflows. The Modbus node supports both Modbus TCP and Modbus RTU protocols, and can be used to read and write data from Modbus devices.

To use the Modbus node in Node-RED, users can simply drag and drop it onto the canvas and configure it with the appropriate Modbus settings, such as the device address, function code, and data type. Once configured, the Modbus node can be connected to other nodes in the workflow to process and display the data.

Node-RED also has a range of other nodes and plugins that can be used to extend its functionality and integrate with other systems and devices. For example, there are nodes for MQTT, HTTP, and other communication protocols, as well as nodes for data processing, visualization, and storage.

Overall, Node-RED provides a powerful and flexible platform for building IoT and industrial automation applications, and its built-in Modbus node makes it easy to integrate Modbus devices into these workflows.


# Getting start with Modbus Node on reTerminal DM

You can find more infomation in the [Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus) page.

If you are using Senscraft Edge OS you can skip the modbus node installation steps and go to the [how to use Modbus Node with reTerminal DM](#how-to-use-modbus-node-with-retermianl-dm)

## Install Modbus Node

In this section we are going to install the `node-red-contrib-modbus` node, so please revise on how to [install nodes](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

#### Option 1: Command line

STEP 1: Please go to Node-RED folder

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```
STEP 2: Install Modbus Node

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: Once the node gets install, Please restart the Node-RED service with:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### Option 2: Node-RED editor

STEP 1: Click the `Settings` button with "three dash" icon located at the right corner and then select the `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: At the palette tab click `Install` tab

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: Search for the node in the node search bar and Click `install` button to install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: click on 'Install` button from the dropdown warning window to confirm install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: Wait for the installation to complete and you should see the `install` button changed to `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: you should see the Modbus nodes in the side bar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>


## How to use Modbus Node with reTermianl DM

### prerequisite

#### Hardware

* 1 x USB to RS485/RS232 adoptor
* 6 x Cables
* 1 x reTerminal DM
* 1 x Host Computer

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

#### Software 

* Graphical serial communication program such as `cutecom` installed on your host machine


#### Preparation 

Please connect the Hardware as shown below



### Edit the Flows



```js

``` 

### Test the Result


<!-- # Explore more nodes on reTerminal DM with node-RED-->




## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
