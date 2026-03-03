---
description: This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.
title: reComputer R1000 use bacnet MS/TP
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /reComputer_r1000_use_bacnet_mstp
last_update:
  date: 10/25/2024
  author: ShuishengPeng
---

# reComputer R1000 use bacnet MS/TP

## Introduction
BACnet MS/TP (Master-Slave/Token Passing) is a communication protocol for building automation and control networks. It is part of the BACnet (Building Automation and Control Networks) protocol suite. MS/TP usually uses the RS-485 physical layer and bus topology. All devices are connected to the same twisted pair cable. There are master stations and slave stations in the MS/TP network. The master is responsible for generating and delivering the token, while the slave only responds when a request is received. The master device determines which device can send data by passing the token. The token passing mechanism ensures that communication on the bus is orderly and conflict-free

This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.We simulated a bacnet MS/TP server on reComputer R1000, and then used YABE on the W10 PC to check whether the device is present. If the device we simulated can be found normally, it means that the bacnet MS/TP communication is normal.

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software
* Since bacnet MS/TP uses the RS485 physical layer, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/) on how to use the RS485 function on reComputer R1000 V1.0 normally.
* We simulate a server with the help of the `bacnet-stack` library application, so you need to enter the following command to download it:
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Please go to this [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) and download YABE (Yet Another BACnet Explorer).
* Please go to this [link](https://www.wireshark.org/) and download wireshark.
### Hardware Configuration

This test uses an RS485 to USB module to connect reComputer R1000 and W10 PC.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Steps to test bacnet mstp communication function
**Step 1**: Download `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Step 2**: The default serial port number of `bacnet-stack` is `/dev/ttyUSB0`. If the port number you actually use is not it, communication will not be possible, so you need to modify the port number. The file name that needs to be modified is `ports/ linux/rs485.c`. Change this to the port number you need to use. I changed it to `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Step 3**: Enter the following instructions to compile. The compilation results can be seen in the bin directory.
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Step 4**: Run `bacserv` and use `YABE` to search for simulated devices.You can see that the device we simulated was successfully searched.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Step 5**: Use wireshark to view bacnet MS/TP messages.You can see that the device we simulated passes the token. Since there are no other devices on my bus, it keeps passing the token.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

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