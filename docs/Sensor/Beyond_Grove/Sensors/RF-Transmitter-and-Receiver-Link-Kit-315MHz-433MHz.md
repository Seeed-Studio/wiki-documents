---
title: RF Transmitter and Receiver Link Kit - 315MHz/433MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
last_update:
  date: 02/03/2022
  author: gunengyu
---

# RF Transmitter and Receiver Link Kit - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>


This is an ultra-long-distance 315MHz or 433MHz radio frequency link set, with VCO and PLL technology, stable frequency and strong anti-interference ability. You can directly use it for your projects, such as wireless data transmission and remote control.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Low power consumption: 5V about 6.0mA / 3.3V about 5mA
- High receiving sensitivity: -110dBm@10kbps
- Long emission distance: 2km(Open area without interference）
- Wide temperature range: -20~75℃
- Flexible application,breadboard and PCB friendly
- Strong radiation suppression ability:no mutual interference, no influence on receiving distance.

## Specifications

| Parameter             | Value/Range  |
|-----------------------|--------------|
| Operating voltage     | Transmitter(3-9V),Receiver(3-5V) |
| Working current       | 50mA(9VDC)   |
| Principle of work     | Superhet（VCO, PLL）|
| Modulation            |   OOK/ASK     |
| Working band          | 315MHz ; 433.92MHz (customize service available)|
| Operation Temperature | -20℃ to +75℃ |
| Bandwidth             | 200KHZ       |
| Sensitivity         	|-110dBm (50Ω) |
| Modulation rate	      |＜10Kbps      |
| Decoding form         | PT2272       |
| Antenna length	      |18cm(Tx)、24cm (Rx) |
| Emission Distance	    |2KM(Open area without interference)|
| Working Output Modes	| Unlocked, interlocked, self-locked|

## Application Ideas

- Automobile remote control door switch
- Remote control door opener
- Wireless security alarm
- Remote control curtain machine
- Wireless industrial controller
- Wireless data transmission
- Wireless remote control model 
- Wireless toys control

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>


1.Transmitter-Pin interface: 7PIN (pitch: 2.54mm)
2.Receiver-Pin interface: 7PIN (pitch: 2.54mm)
3.Transmitting antenna(Antenna should be straightened during usage.)
4.Spring receiving antenna

## Getting Started

Here, we will use an RF transceiver kit, an LED, a switch button, a development board to provide power, and some wires to achieve a simple demo of wireless control LED on and off. 

- **Step 1.** Prepare RF transceiver kit, wires, breadboards or development boards, and other components related to the functions you want to implement.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>


Take our simple wireless lighting control demo as an example, we will use:

| Name                | Value|
|--------------------|------|
| RF transceiver kit |	*1 |
| Breadboards	       |  *1 |
| LED	               |  *1 |
| Key switch         |	*1 |
| Seeeduino XIAO     |	*1 |
| Wires	             | Some |

- **Step 2.** Follow the instructions below to connect the circuit system.

**Note:** All signal ports are used in the diagram below, but the actual circuit connection we give uses only one port.

### Connection diagram

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>


### Actual circuit connection diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**Note:**  In this RF wireless lighting control demo, we use the development board Seeeduino XIAO (3.3V output) as the common power supply system, and build the transmitting module and receiving module on the same board. In practice, the remote transceiver module is usually powered by their own power supply. For example, you can directly use battery pack power supply.

- **Step 3.**  To supply power to the system, press the button switch.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>


**Note:** You can change the LED light in the RF wireless light control Demo to the object you want to control, and use multiple signal ports to achieve wireless control of a variety of signal systems.

You can also use the Seeedino XIAO in the demo to achieve more functions, such as connecting a light sensor to make the light go on and off and the brightness of the light be controlled wirelessly according to the intensity of the light. This process can send signals without manual operation.

## Resources

- **[Datasheet]** [Datasheet for PT2272 and PT2262](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)


## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>