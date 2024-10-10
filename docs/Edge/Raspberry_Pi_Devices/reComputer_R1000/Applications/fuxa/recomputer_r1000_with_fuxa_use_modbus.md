---
description: This article mainly introduces how to use fuxa for ModbusRTU/TCP communication.

title: reComputer R1000 with fuxa to use modbus RTU/TCP
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_modbus_rtu_and_tcp
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introduction 
FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. 

This article mainly introduces how to use fuxa for ModbusRTU/TCP communication.


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
* Regarding how to use the modbus function of reComputer R1000, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/).
### Hardware Configuration
For ModbustRTU, we used an rs485 to USB module to connect the reComuputer R1000 with the W10 pc.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

For ModbusTCP, we use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## ModbusRTU communication steps

**Step 1**:Open ModbusMechanic on Win10 PC, select the corresponding serial port and baud rate, then click `Tools` in the upper right corner, select `Start Slave Simulator`, then select `RTU`, enter `slave ID`, and then you can set the slave In the data field of the machine, we added three coils and a `Holding Register` for subsequent reading from the Modbus host.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**Step 2**:In `fuxa`, click the `+` button in the lower right corner, enter the module name, select `modbusRTU` for `Type`, select `SeriaPort` for `Connection options`, then select the serial port number you need to use and set the corresponding baud rate and other parameters, and finally click `OK`. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**Step 3**:After that, we enter the `Devices settings` page and click the `+` button in the upper left corner to set the data fields we need to read. We set the corresponding parameters and click `OK` to see that `fuxa` has successfully obtained Modbus slave data.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## ModbusTCP communication steps

**Step 1**:Open ModbusMechanic in Win10 PC, then click `Tools` in the upper right corner, select `Start Slave Simulator`, then select `TCP`, enter `slave ID`, and you can set the data field of the slave. We added two The coil has a `holding register` for subsequent reading from the Modbus host

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**Step 2**:Click the `+` button in the lower right corner of `fuxa`, enter the module name, select `modbusTCP` for `Type`, select `TcpPort` for `Connection options`, select the IP address of the slave machine for `Slave IP and port`, the default port number is 502, then enter `Slave ID`, and finally click `OK`. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**Step 3**:After that, we enter the `Devices settings` page and click the `+` button in the upper left corner to set the data fields we need to read. We set the corresponding parameters and click `OK` to see that `fuxa` has successfully obtained Modbus slave data.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

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
