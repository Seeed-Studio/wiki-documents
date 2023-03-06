---
description: Grove - Base Shield for IOIO-OTG
title: Grove - Base Shield for IOIO-OTG
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Base_Shield_for_IOIO-OTG
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Grove-Base_Shield_for_IOIO-OTG.md.jpg)

IOIO is a board specially designed to work with your Android device. And this Grove - Base Shield for IOIO is an expansion board for IOIO to work with abundant Grove resources. There are 6 ready Grove sockets on the board covering functions like ADC and I2C. And in this way, all Grove Modules are accessible for the IOIO board. Wanna make some projects with IOIO and need some sensors or display? This Grove - Base Shield for IOIO can bring you this convenience.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Shield-for-IOIO-OTG-p-1613.html)

##  Interface

![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Base_Shield_for_IOIO_Interface_Function.jpg)

**J1,J2:** can be used for TWI.

**J3,J6,J7,J8:** can be used inputs and outputs, include PWM, UART.

The pins describe mapping to the Grove - Base Shield for IOIO-OTG board as show below:

<center>
<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> Grove Interface
</th>
<th scope="col"> IOIO Pin
</th>
<th scope="col"> A/D
</th>
<th scope="col"> I²C
</th>
<th scope="col"> PPSi
</th>
<th scope="col"> PPSo
</th>
<th scope="col"> PIC Pin
</th>
<th scope="col"> PIC function
</th></tr>
<tr>
<td rowspan="2"> J2
</td>
<td scope="row"> 1
</td>
<td>
</td>
<td> DA1
</td>
<td> Y
</td>
<td> Y
</td>
<td> 31
</td>
<td> SDA2/RP10/GD4/CN17/RF4
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td>
</td>
<td> CL1
</td>
<td> Y
</td>
<td> Y
</td>
<td> 32
</td>
<td> SCL2/RP17/GD5/CN18/RF5
</td></tr>
<tr>
<td rowspan="2"> J1
</td>
<td> 4
</td>
<td>
</td>
<td> DA0
</td>
<td> Y
</td>
<td> Y
</td>
<td> 43
</td>
<td> DPLN/SDA1/RP4/GD8/CN54/RD9
</td></tr>
<tr>
<td> 5
</td>
<td>
</td>
<td> CL0
</td>
<td> Y
</td>
<td> Y
</td>
<td> 44
</td>
<td> SCL1/RP3/GD6/CN55/RD10
</td></tr>
<tr>
<td rowspan="2"> J3
</td>
<td> 11
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 50
</td>
<td> DPH/RP23/CN51/RD2
</td></tr>
<tr>
<td> 12
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 51
</td>
<td> RP22/GEN/CN52/RD3
</td></tr>
<tr>
<td rowspan="2"> J6
</td>
<td> 13
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 52
</td>
<td> RP25/GCLK/CN13/RD4
</td></tr>
<tr>
<td> 14
</td>
<td>
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 53
</td>
<td> RP20/GPWR/CN14/RD5
</td></tr>
<tr>
<td rowspan="2"> J7
</td>
<td scope="row"> 33
</td>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 50
</td>
<td> DPH/RP23/CN51/RD2
</td></tr>
<tr>
<th scope="row"> 34
</th>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 51
</td>
<td> RP22/GEN/CN52/RD3
</td></tr>
<tr>
<td rowspan="2"> J8
</td>
<td scope="row"> 37
</td>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 17
</td>
<td> PGEC2/AN6/RP6/CN24/RB6
</td></tr>
<tr>
<th scope="row"> 38
</th>
<td> Y
</td>
<td>
</td>
<td> Y
</td>
<td> Y
</td>
<td> 18
</td>
<td> PGED2/AN7/RP7/RCV/CN25/RB7
</td></tr></table>
</center>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resources

- [Grove - Base Shield for IOIO-OTG Eagle File](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
