---
description: This article mainly introduces how to use the modbus rtu function of reComputer R1000 based on CODESYS

title: How to use CODESYS to configure the Modbus rtu function of R1000
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 10/10/2024
  author: ShuishengPeng
---
## Introduction 
This article mainly introduces how to use the modbus rtu function of reComputer R1000 based on CODESYS. We will use the two rs485 ports of reComputer R1000, one port is used for Modbus master and the other port is used for Modbus slave. This article will detail how to configure Modbus master and Modbus slave on CODESYS and show how to deploy them on reComputer R1000.
## Hardware Preparation

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

## Software Preparation

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Getting Start

Before you begin, please ensure that your reComputer R1000 is in the same network segment as the host and that you have deployed `CODESYS run-time` on the reComputer R1000. For information on how to deploy `CODESYS run-time`, please refer to [wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_codesys/)

### Hardware Configuration

The two RS485 ports of R1000 are connected, one as Modbus master and the other as Modbus slave

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### Modify the configuration file of R1000
Enter the command:
```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```
Add the following content:
```shell
# Add the following content to the end of the file, where ttyAMAx is the serial port number of reComputer R1000. Linux.Devicefile.1~3 represents the serial port number in CODESYS. Here, the serial port number of CODESYS is bound to the serial port number of reComputer R1000, otherwise CODESYS cannot identify the correct serial port
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```
Then enter the following command to restart the CODESYS service:
```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Modbus master configuration
**Step 1**: Open CODESYS, click `File`--->`NEW Project` to create a new project

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**Step 2**: Enter the project name, select `Standard project`, then click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**Step 3**: Select `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` in the `Device` column, select `Structured Text (ST)` in `PLC_PRG in`, and then click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**Step 4**: Right click on the project and select `Add Device` to add the device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**Step 5**: Click `Modbus`--->`Modbus serial Port`--->`Modbus COM` to add a Modbus serial port device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**Step 6**: Double-click the newly added `Modbus_COM`, click `General`, you can set the serial port number and baud rate and other information

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**Step 7**: Right-click `Modbus_COM` and click `Add Device` to add a Modbus device to this port

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**Step 8**: Select `Modbus Serial Master` ---> `Modbus Client, COM Port` to bind a Modbus Master device to this serial port

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**Step 9**: Right-click `Modbus_Clent_COM_Port` and select `Add Device` to add the slave device to be operated for this Modbus Master. You can add multiple slave devices here. The slave devices here represent the slave devices that the master station wants to operate. You need to configure the operations that the master station will perform on these slaves later.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**Step 10**: Select `Modbus Serial Slave` ---> `Modbus Server, COM Port` to add a Modbus slave device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**Step 11**: Double-click the newly added slave device, and in `General` you can set the `Server address` and `Response timeout` properties

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**Step 12**: Click `Modbus Server Channel`, then click `Add Channel` in the lower right corner to configure the operations that the master station will perform on the slave station, such as selecting the function code, the number of registers to be operated, etc. You can click `Add Channel` to add multiple operations

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**Step 13**: Click `ModbusGenericSerialServer I/O Mapping`, where the data can be mapped to a specified variable, and select `Enable 1` in the `Always update variables` column in the lower right corner. At this point, the configuration of Modbus Master is complete.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>



### Modbus slave configuration

**Step 1**: Right click on the project and select `Add Device` to add a device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**Step 2**: Select `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM` to add a Modbus serial port

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**Step 3**: Click the newly added Modbus serial port, select `General`, and configure the serial port number, baud rate and other information

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**Step 4**: Right-click the newly added Modbus serial port, select `Add Device`, and add the Modbus slave device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**Step 5**: Select `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device` to add a slave device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**Step 6**: Double-click the newly added slave device. In `General`, you can configure the properties of this slave, such as the number of registers and coils, address, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**Step 7**: Click `Modbus Serial Device I/O Mapping`, and select `Enable 1` in the `Always update variable` in the lower right corner. The Modbus slave configuration is now complete

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Modbus deployment

**Step 1**: Double-click the project, click `Scan Network`, then select your device, and click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**Step 2**: Enter the reComputer R1000 username and password to connect to the device

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**Step 3**: Click the button as shown to deploy the project to reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**Step 4**: Click the Start button to start the project. You can see that the indicator lights of the Modbus master and slave are both green, indicating that the Modbus communication is normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>


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
