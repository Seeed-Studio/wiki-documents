---
description: This article mainly introduces how to use fuxa for OPC-UA communication.

title: reComputer R1000 with fuxa to use OPC-UA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_opc_ua
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introduction 
FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. 

This article mainly introduces how to use fuxa for OPC-UA communication.We run `Prosys OPC UA Simulation Server` on W10 PC, and then read the data of the simulator on reComputer R1000.


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
* Using [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php) on W10 PC.You can also use other modbus testing tools
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

### Hardware Configuration

We use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## OPC-UA communication steps
**Step 1**: Open `Prosys OPC UA Simulation Server` and copy `Connection Address(UA TCP)`.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**Step 2**: Click the `+` button in the lower right corner, enter `Name`, select `OPCUA` for `Type`, and paste the `Connection Address(UA TCP)` copied in the first step to `Address`, `Security and encryption mode` is selected according to your own device requirements. Here I choose `None-None`. If your device requires `Username` and `Password` when establishing a connection, you can fill in the corresponding places. Finally click `OK`. Open the `ConnectionLog` of `Prosys OPC UA Simulation Server`, and the log as shown in the figure appears, indicating that the connection is successfully established.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**Step 3**: Create labels to display data. Enter the configuration interface, click the `+` button in the upper left corner or lower right corner, you can see the three labels `Objects`, `Type`, `Views`, click `Objects`, and then click `Simulation` to see what the simulator simulates For the data, we select all the data under `Simulation` and create labels. Finally, click `OK`. You can see that we can try to read the data of the OPCUA device.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

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
