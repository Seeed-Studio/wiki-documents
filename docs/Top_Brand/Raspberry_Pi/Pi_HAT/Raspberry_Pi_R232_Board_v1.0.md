---
description: Raspberry Pi RS232 Board v1.0
title: Raspberry Pi RS232 Board v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_R232_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi-R232-Board-v1.0.jpg)

Raspberry Pi RS232 Board v1.0 is a standard communication port for industry equipment.This module is base on MAX3232,which is a dual driver/receiver that includes a capacitive voltage generator to supply TIA/EIA-232-F voltage levels from a single 5-V supply. The shield integrates DB9 connectors (female) that provide connection to various devices with RS232 interface. Also the RS232 headers will facilitate your connections and commissioning. It provides the welding areas to make full use of extra space on it, which is highly convenient for prototyping.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)

Features
--------

- Low Supply Current:300μA
- Guaranteed Data Rate:120kbps
- Meets EIA/TIA-232 Specifications Down to 3.0V
- Pin Compatible with Industry-Standard MAX232
- Guaranteed Slew Rate:6V/μs
- LED Indicator
- DB9 Connectors(female)

Specifications
-------------

<table border={1} cellSpacing={0} style={{width: 500, height: 442}} width={800}>
  <tbody><tr>
      <th align="center" scope="col" style={{width: '50%'}}> Item
      </th>
      <th align="center" scope="col"> Min
      </th>
      <th align="center" scope="col"> Typical
      </th>
      <th align="center" scope="col"> Max
      </th>
      <th align="center" scope="col"> Unit
      </th></tr>
    <tr>
      <th scope="row"> Input Voltage Range
      </th>
      <td align="center"> -25
      </td>
      <td align="center"> /
      </td>
      <td align="center"> 25
      </td>
      <td align="center"> V
      </td></tr>
    <tr>
      <th scope="row"> Input Threshold Low(VCC=3.3V/5.0V)
      </th>
      <td align="center"> 0.6 / 0.8
      </td>
      <td align="center"> 1.2 / 1.5
      </td>
      <td align="center"> /
      </td>
      <td align="center"> V
      </td></tr>
    <tr>
      <th scope="row"> Input Threshold High (VCC=3.3V/5.0V)
      </th>
      <td align="center"> /
      </td>
      <td align="center"> 1.5 / 1.8
      </td>
      <td align="center"> 2.4 / 2.4
      </td>
      <td align="center"> V
      </td></tr>
    <tr>
      <th scope="row"> Maximum Data Rate
      </th>
      <td align="center"> 120
      </td>
      <td align="center"> 235
      </td>
      <td align="center">
      </td>
      <td align="center"> kHz
      </td></tr>
    <tr>
      <th scope="row"> Operating Temperature
      </th>
      <td align="center"> 0
      </td>
      <td align="center"> /
      </td>
      <td align="center"> 70
      </td>
      <td align="center"> ℃
      </td></tr>
    <tr>
      <th scope="row"> Dimension
      </th>
      <td align="center" colSpan={3}> 91.20 *56.15*32
      </td>
      <td align="center"> mm
      </td></tr></tbody></table>

Hardware Overview
------------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p2.jpg)

UART Pin must be pup joint if you want to connect to raspberry pi.

Usage
-----

Using serial COM ports to Configure system on Raspberry Pi.

### Hardware Installation

1. Raspberry Pi&USB to serial COM Port line.

2. Connect as in the following picture:

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p5.jpg)

3. Fine out which com it is using on you PC's device management.
4. Run a serial port assistant, and set it as shown:

    COM must be set as what you fine on you PC's device management.Then power on your raspberry pi. You can see the serial port assistant as shown below.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p6.jpg)

5. Have communication with Raspberry Pi successfully.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p4.jpg)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
--------

- [Raspberry\_Pi\_RS232\_Board\_v1.0\_sch\_pcb](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip)
- [MAX3232](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/MAX3232.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0 -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
