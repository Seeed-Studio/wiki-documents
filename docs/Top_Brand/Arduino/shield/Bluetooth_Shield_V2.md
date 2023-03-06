---
description: Bluetooth_Shield_V2
title: Bluetooth Shield V2
tags:
  - Shield
  - bluetooth
keywords:
  - Shield
  - bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Shield_V2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG" alt="pir" width={600} height="auto" /></p>

The Bluetooth Shield integrates a Serial Bluetooth module. It can be easily used with Arduino/Seeedstudio for transparent wireless serial communication. You can choose two pins from Arduino D0 to D7 as Software Serial Ports to communicate with Bluetooth Shield (D0 and D1 is Hardware Serial Port). The shield also has two Grove connectors (one is Digital, the other is Analog) for you to install Grove modules.

##   Features
---
*   Input Voltage: 3.3V
*   Baudrate: 9600, 19200, 38400, 57600, 115200, 230400, 460800
*   Seeeduino/Arduino compatible
*   Up to10m communication distance in house without obstacle
*   UART interface (TTL) with programmable baud rate
*   Default Baud rate: 9600, Data bits: 8, Stop bit: 1, Parity: No parity
*   Default PINCODE:”1234”
*   A full set of configuration commands
*   On board PCB Antenna

##   Interface function
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Pad Type</h3></td>
    <td><h3>Description</h3></td>
  </tr>
  <tr>
    <td><h4>BT_IO</h4></td>
    <td><h4>IO Port of Bluetooth module can be control: read, write.</h4></td>
  </tr>
  <tr>
    <td><h4>BT_RX</h4></td>
    <td><h4>UART Data input of Bluetooth module.</h4></td>
  </tr>  
  <tr>
    <td><h4>BT_TX</h4></td>
    <td><h4>UART Data output Bluetooth module.</h4></td>
  </tr>
  <tr>
    <td><h4>Two Grove connectors</h4></td>
    <td><h4>One is Digital (D8 and D9), the other is I2C/Analog (A4 and A5).</h4></td>
  </tr>
  </tbody></table>


##   Demonstration

### 1：Two Bluetooth Shield Connect

This demo will show you how to connect two Bluetooth shield.

You need two piece of [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7),
One Bluetooth Shield as Master while the other as Slave.

**Hardware Installation **

as folowing:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png" alt="pir" width={600} height="auto" /></p>


make sure the right connection of the jumpers
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg" alt="pir" width={600} height="auto" /></p>


**Download Code and Upload **

1.  You can download the code in github, click [here](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip),then extract it to libraries folder of Arduino.

2.  Open Arduino IDE, open File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Master_Button, then you can open the code of Master

3.  Open Arduino IDE, open File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_led, then you can open the code of Slave

4.  Click Upload to Upload the code, if you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg" alt="pir" width={600} height="auto" /></p>

**Check The Result**

1.  After finish Uploading the code to both Master and Slave, reset the two devices meanwhile

2.  You can see the led blink, indicate that devices was initializing and connecting.

3.  After about servel seconds, led on, indicate that Master and Slave had connected.

!!!Note
    If the phenomenon is not observed above, try unplugging the power and re-plug in again.


### 2：Connect to Smart Phone

This demo will show you how to connect Bluetooth Shield to a Smart Phone.

We need a Seeeduino V3.0, a Smart Phone that with Bluetooth function.

Via a Bluetooth SPP App

**Hardware Installation**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png" alt="pir" width={600} height="auto" /></p>


**Download Code and Upload**

1.  You can download the code in github, click [here](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip),then extract it to libraries folder of Arduino.

2.  Open Arduino IDE, File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_Temperature, then you can open the code

3.  Click Upload to Upload the code, if you have any problem about how to start Arduino, please click [here](//Getting_Started_with_Seeeduino) for some help.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg" alt="pir" width={600} height="auto" /></p>

**Download a SSP App**

Here we us an Ardriod Phone, Mine is a Xiaomi 2A, open Google Play, search bluetooth spp, you can find many results.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png" alt="pir" width={600} height="auto" /></p>

Most of this app are useful, just choose one and have try.

**Get Temperature**

After installing an SPP app, try connecting it to SeeedBTSlave, pin code is: "0000"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png" alt="pir" width={600} height="auto" /></p>


When connect is ok, send 't' to SeeedBTSlave, and you can get the temperature now:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png" alt="pir" width={600} height="auto" /></p>


##   Resources
*   [Schematic and Layout in Eagle format](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip)

*   [module Datasheet](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>