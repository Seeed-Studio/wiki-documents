---
description: This article mainly introduces how to use the 485 communication function of reComputer R1225, and tests the rs485 and Modbus communication functions.
title: How to use rs485 and modbus with R1225
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_modbus_rs485_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/14/2026
  author: Kian
---

## Introduction

This article mainly introduces how to use the 485 communication function of reComputer R1225, and tests the RS485 and Modbus communication functions.

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### Software

* Using [modbus poll](https://www.modbustools.com/modbus_poll.html) on your W10 PC.You can also use other modbus testing tools
* Using [modbusmechanic](https://modbusmechanic.scifidryer.com/) on reComputer R1225 and W10 PC.You can also use other modbus testing tools
* Using [mobaxterm](https://mobaxterm.mobatek.net/) on your W10 PC.You can also use other serial port testing tools
* You need to download the **minicom** tool using the following command on the reComputer R1225:

```sh
sudo apt-get install minicom
```

### Hardware Configuration

For Modbus RTU, we use an RS485-to-USB converter to connect the R1225 to a Windows 10 PC for testing.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

For Modbus TCP, we use Ethernet cables to connect the W10 PC and reComputer R1225 to a switch to ensure that they are on the same network segment.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

### Method 1: Using the Command-Line Interface (CLI)

#### Steps to use Modbus RTU testing

##### Installing and configuring minicom

Install minicom on both your host computer and reComputer R1225 with command below:

```
sudo apt install minicom
```

Open a terminal,and input command like below:

```
sudo minicom -D /dev/ttyAMA*
```

The `ttyAMA*` should be `ttyAMA2, ttyAMA3 or ttyAMA4` depends on which RS485 you use.

And then type `Ctal+A` then type `Z` you will see minicom like below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Type `o` to configure minicom, and select `Serial port setup` you will see like below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

And the type `F` and `H` to make minicom to RS485 model, the result will show as below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Finally, select `Exit` and type `Enter` to exit configure, like below: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

**Step 1**: Testing RS485 Functionality

Enter the following script on reComputer R1225 to open the minicom software

```shell
minicom -D /dev/ttyAMAx -b 9600
```

Parameter Description:

-D: Enter the device number you want to open in the field below.the device number needs to be the newly created device number.

-b: Enter the baud rate below

Then open MobaXterm on the W10 PC, create a new serial port terminal, select the serial port number, and the baud rate is 9600; finally, you can perform two-way communication with RS485. As shown in the figure, the content entered on the reComputer R1000 can be sent to via RS485. In W10 PC, the content entered on W10 PC can also be sent to reComputer R1225, and the two-way communication is normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**Step 2**: Test the R1225 as a Modbus slave

Open the ModbusMechanic software on reComputer R1225, select the device number and baud rate, then click on the simulated slave function in the upper left corner to add two coils; then open Modbus poll in W10 as the master station to read the coils of the slave station. Then open the display window of Modbus poll, and you can see that the sending and receiving messages of Modbus RTU are normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Step 3**: Test the R1225 as a Modbus master

pen the ModbusMechanic software on both reComputer R1225 and W10 PC, and select the device number and baud rate. W10 PC refers to the third step of setting. Select `Read Coils(0x01)` on reComputer R1000 to read the coil of the slave, set `Slave Node` to 1, `Register` select the address you want to read, and finally click `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

#### Steps to use the  Modbus TCP testing

**Step 1**: Open modbusmechanic on Win10 PC and R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Step 2**: Test the R1225 as a Modbus TCP host

Click `Tool => Start Slave Simulator` on W10 PC, select `TCP` for TYPE, select `1` for Slave ID, and then add `Coils`; then enter `IP` in R1225, and select `Read Coil` for Scan group. Enter `Slave Node` and `Register`, and finally click `Transmit packet`. You can see that the slave data has been successfully read.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Step 3**: Test the R1225 as a Modbus TCP slave

Refer to the second step for configuration. You can see that R1225 can read data normally as a slave.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

:::note
Running the Modbus TCP slave program in R1000 needs to listen to the 502 port, which may require sudo permissions. If your application cannot listen to the 502 port, please try to add permissions to it.
:::

### Method 2: Using the Graphical User Interface (GUI)

#### RS485 Parameter Configuration

Follow the [Quick Start](https://wiki.seeedstudio.com/r1225_quick_start/)  guide to access the SenseCAP Gateway OS web interface.

**Step 1**: Login Luci

Input the IP Address of your device in a browser to enter the Luci page.
Then input your device username and password to login, and click the Login button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Step 2 Click on `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

The parameter settings for all three 485 channels of the R1225 are integrated here.

First,select the channel you want to use (CH1, CH2, CH3);

Next, configuration parameters: baud rate, data bits, stop bits, parity, flow control, and read timeout.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

**Step 3**:Click `Save & Apply` to apply your settings

#### Modbus RTU Parameter Configuration

After configuring the parameters for the three RS-485 ports (the default settings are ‘9600, 8, 1, N’), you can proceed with the Modbus RTU configuration.

**Step 4**: Click on `RS485` - `Protocol Configuration`

Select the channel you want to debug (CH1, CH2, CH3).

Select “Enable” for the protocol status and “Modbus RTU” for the protocol type.

Once enabled, you will see the Modbus RTU settings screen; simply configure it according to the datasheet for the connected sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_3.png" alt="pir" width={800} height="auto" /></p>

**Step 5**: Modbus RTU Parameter Settings

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_4.png" alt="pir" width={800} height="auto" /></p>

**Step 6**: Click on`Save & Apply`

Once the settings have taken effect, click the `Read Data`, you can see the retrieved data in the `Frame Data`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_5.png" alt="pir" width={800} height="auto" /></p>

#### Modbus TCP Parameter Configuration

**Step 7**: Click on `RS485` - `MQTT Setttings`

Select the channel you want to use (CH1, CH2, CH3).

Select TCP as the transport protocol.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp1.png" alt="pir" width={800} height="auto" /></p>

**Step 8**: MQTT Settings

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp2.png" alt="pir" width={800} height="auto" /></p>

**Step 9**: Click on`Save & Apply`

Now your configuration is active.

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
