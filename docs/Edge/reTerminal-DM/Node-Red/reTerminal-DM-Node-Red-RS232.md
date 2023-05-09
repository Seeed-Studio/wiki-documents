---
description: reTerminal DM RS232 Port with Node-RED
title: reTerminal DM RS232 Port with Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-RS232
last_update:
  date: 04/04/2023
  author: Peter Pan
---

# reTerminal DM RS232 Port with Node-RED

## Brief info about RS232

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS232

RS232 is a standard for serial communication transmission of data between two devices. It was first introduced in 1962 by the Electronic Industries Association (EIA) as a standard for serial communication between data terminal equipment (DTE) and data communication equipment (DCE).

RS232 uses a single-ended voltage signaling scheme with a range of -15V to +15V, where a negative voltage represents a logical one and a positive voltage represents a logical zero. The standard specifies the physical and electrical characteristics of the communication link, including the pin assignments, baud rate, parity, and data bit format.

RS232 has been used in a wide range of applications, including computer serial ports, industrial automation, scientific instruments, and telecommunications equipment. However, its use has declined in recent years with the rise of newer standards such as USB and Ethernet.


# Getting start with Serialport Node on reTerminal DM

You can find more information in the [Serialport Node-RED](https://flows.nodered.org/node/node-red-node-serialport) page.

### prerequisite

#### Hardware

* 1 x USB to RS485/RS232 adoptor
* 3 x Cables
* 1 x reTerminal DM

#### Install Serialport Node

In this section we are going to install the `node-red-contrib-serialport ` node, so please revise on how to [install nodes](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes). or the instruction [here](https://wiki.seeedstudio.com/reTerminal-DM-Node-Red-RS485/#install-modbus-node)

#### Serial COM Software 

Linux:
* Serial communication GUI tool such as [`Cutecom`](https://gitlab.com/cutecom/cutecom)
* Minicom, to install please enter following command in `terminal` app `sudo apt install minicom`, Example Usage `minicom -D /dev/ttyUSB0 -b 115200`

Windows:
* [Putty](https://www.putty.org/)

<div align="center"><img width={600} src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" /></div>

#### Preparation 

STEP 1: Please connect the Hardware as shown below.

:::note
Please make sure the `RX pin` from `USB to RS485/RS232` is connected to the `RT pin` on `reTerminal DM`.
`TX pin` from `USB to RS485/RS232` is connected to the `RX pin` on `reTerminal DM`.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232-connection.png" /></div>

#### Edit the Flows



#### Final Result

Congratulations, you have successfully experienced and learnt how to use RS232 on reTerminal DM with node-RED now, your final results should be similar as the image shown below

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>


You can copy the following JSON code to import the Nodes

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
    }
]

``` 

# Explore more nodes on reTerminal DM with node-RED

* [reTerminal DM MQTT with Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS with Node-RED](/reTerminal-DM-Node-Red-canbus)
* 
## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
