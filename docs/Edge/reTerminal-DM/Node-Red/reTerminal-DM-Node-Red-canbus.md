---
description: reTerminal DM CANBUS with Node-RED
title: reTerminal DM CANBUS with Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/28/2023
  author: Peter Pan
---

# reTerminal DM CAN BUS with Node-RED

## Brief info about CAN BUS

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

CAN bus (Controller Area Network bus) is a type of network used to connect multiple electronic control units (ECUs) within a vehicle or industrial system. It was originally developed by Bosch in the 1980s and has become an international standard (ISO 11898) for serial communication in vehicles and other applications.

The CAN bus enables high-speed data exchange between ECUs, allowing them to share information and coordinate their activities. It uses a two-wire system, with one wire for transmitting data and the other for receiving data, and it supports multiple nodes, making it ideal for use in complex systems where many devices need to communicate with each other.

CAN bus technology is widely used in the automotive industry for a variety of applications, including engine control, transmission control, ABS (anti-lock braking system), airbag control, and many others. It is also used in other industries, such as industrial automation, medical equipment, and aerospace, where reliable and efficient communication between devices is essential.

CAN bus has many advantages, including high reliability, low cost, and the ability to operate in harsh environments. It is easy to install and maintain, and it is highly resistant to electromagnetic interference. These features make it an ideal choice for many different applications where reliable and efficient communication is required.

## Getting start with CAN BUS Node on reTerminal DM

To use Node-RED with CAN bus, you will need a CAN bus interface device that connects to the reTerminal DM CAN BUS port, and a Node-RED CAN bus node that allows you to send and receive messages on the network, in this case we will explore the `node-red-contrib-socketcan` nodes together. Once you have installed the CAN bus node in Node-RED, you can start building flows that read data from the CAN bus network, process it, and send it to other systems or devices. For example, you can read the engine RPM from a vehicle's CAN bus, process the data to calculate fuel consumption, and send the result to a dashboard for display.

You can find more information in the [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan) page.

If you are using Senscraft Edge OS you can skip the Socketcan node installation steps.

### Prerequisite

#### Hardware

* 1 x reTerminal DM
* 1 x Host Computer

:::note
The Host Computer should be able to have internet connection to the reTerminal DM to perform the follow setup steps.
:::

### Install Socketcan Node

In this Wiki tutorial we are going to use the `node-red-contrib-socketcan` node, so please install the `node-red-contrib-socketcan` with the guide [install nodes](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

### Config CAN BUS on reTerminal DM

:::note
Assume you have access direct access of the `Terminal` app on reTerminal DM or access reTerminal DM via SSH, if not please follow the first step [here](/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red) to get yourself familiar on how to do it.
:::

Please key in the following command one-by-one to enable a virtual can device called can0 with the CAN BUS port on reTerminal DM.

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

## Socketcan Node with reTerminal DM

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

### Import the Flows

:::note

The following steps just for tutorial purpose, in this section we will show you how to quickly import flow with the copy JSON format flow and paste to the input box of the import nodes pop-up menu. 

:::

#### Final Result

Congratulations, you have successfully experienced and learned how to use MQTT protocol with reTerminal DM and node-RED now, your final results should be similar as the image shown below

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>


You can copy the following JSON code to import the Nodes

```json
[
    {
        "id": "8d317d539464f080",
        "type": "tab",
        "label": "MQTT",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "128fa85f993944d6",
        "type": "mqtt in",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b6a7c986cb61ea54",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 300,
        "y": 220,
        "wires": [
            [
                "a022e0bf3404fdd9"
            ]
        ]
    },
    {
        "id": "a022e0bf3404fdd9",
        "type": "debug",
        "z": "8d317d539464f080",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "9d0098383c96ee8b",
        "type": "mqtt out",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "b6a7c986cb61ea54",
        "x": 520,
        "y": 320,
        "wires": []
    },
    {
        "id": "3c967b7d5cc112fc",
        "type": "inject",
        "z": "8d317d539464f080",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "this is the message",
        "payloadType": "str",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "9d0098383c96ee8b"
            ]
        ]
    },
    {
        "id": "b6a7c986cb61ea54",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    }
]

``` 

# Explore more nodes on reTerminal DM with node-RED

* [reTerminal DM RS485 Port with Node-RED](/reTerminal-DM-Node-Red-RS485)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
