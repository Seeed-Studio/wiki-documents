---
description: This article mainly introduces how to use fuxa for MQTT communication.

title: reComputer R1000 with fuxa to use mqtt client
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introduction 
FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. 

This article mainly introduces how to use fuxa for mqtt communication on reComputerR1000. This article uses mosquitto as the MQTT server agent, fuxa and node-red as the MQTT client, and introduces a ModbusTCP slave as the source of data published by fuxa. fuxa subscribes to a topic named /dev/fromNode_red and publishes a topic named /dev/fromfuxa. The data of this topic comes from the ModbusTCP slave; node-red subscribes to a topic named /dev/fromfuxa and publishes a topic named /dev/fromfuxa. /dev/fromNode_red topic. The communication framework is shown in the figure:
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

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
* Python 3.11 may be incompatible with fuxa. If your Python version is 3.11, please consider changing to a different Python version.
* Using [modbusmechanic](https://modbusmechanic.scifidryer.com/) on W10 PC.You can also use other modbus testing tools
* Using [fuxa](https://github.com/frangoteam/FUXA) on reComputer R1000.You can refer to the following steps to install fuxa on reComputer R1000
  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```
* Regarding how to use the modbusTCP function in fuxa, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/).
* Regarding how to download and configure mosquitto, you can refer to this [tutorial](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/).Here is also how to configure mqtt communication in node-red, you can also refer to it.

### Hardware Configuration

For ModbusTCP, we use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## MQTT client communication steps

**Step 1**: Refer to this [tutorial](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/) and use `fuxa` to establish a connection with `modbusmechanic`.And refer to this [wiki](https://wiki.seeedstudio.com/Edge-Box-Node-Red-MQTT/) to deploy `mosquitto` and `Node-red`on reComputer R1000.

**Step 2**: Connect to the MQTT server. Click the `+` button in the lower right corner of the `fuxa` interface, enter `Name`, `Type`, select `MQTTclient`, and then enter the IP address and port number of the MQTT server. If your MQTT server requires security verification, you also need to enter `Client ID`, `Username`, `Password`, etc. Our server does not require this verification, so it is not filled in. Finally click `OK` and wait for a green dot to appear in the lower left corner of the module, indicating that the connection to the MQTT server is successful.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**Step 3**: Subscribe to the topic. Enter the configuration interface, click the `+` button in the upper left corner, enter the topic to be subscribed to in `Browser Topics on broker`, here we subscribe to the `/dev/fromNode_red` topic published by node-red, and then click the search button next to it , you can see the content of the corresponding topic. fuxa supports two display formats: `raw` and `json`. Here we choose `json`, and finally click `subscribe` to subscribe successfully.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**Step 4**: Publish the topic. Enter the configuration interface, select the `Publish` column, enter the topic name to be published in `Topic path`, here we enter /dev/fromfuxa, and then click `Add attribute to payload`, a line of data content that can be published will pop up, here we Select 4 data obtained from the ModbusTCP slave and a timestamp as the content of our publishing topic, and select the publishing format as `json`, and finally click `Publish` to publish successfully.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**Step 5**: After the above configuration is completed, we change the data on the Modbus slave side. You can see the real-time changes in the data in the debug window of node-red, indicating that fuxa successfully published the data through the /dev/fromfuxa topic. come out.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

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
