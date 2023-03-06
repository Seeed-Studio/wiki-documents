---
description: Xadow - Gesture v1.0
title: Xadow - Gesture v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Gesture_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg)

The sensor on Xadow - Gesture v1.0 is PAJ7620U2 that integrates gesture recognition function with general I2C interface into a single chip. It can recognize 13 gestures including move up, move down, move left, move right, move forward, move backward,circle-clockwise, circle-counter clockwise, up to down ,down to up,left to right ,right to left and wave. These gestures information can be simply accessed via the I2C bus.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html)

## Features
---
- 13 gesture recognition
- Gesture speed is 60°/s to 600°/s in Normal Mode and 60°/s to 1200°/s in Gaming Mode
- Ambient light immunity: < 100k Lux
- Built-in proximity detection
- I2C interface up to 400 kbit/s
- Compatible with the Xadow interface

## Specification
---
- Sensor:PAJ7620U2
- Power supply:2.8V to 3.3V and I/O voltage is 1.8V~3.3V
- Compatible: Xadow interface
- Interface:IIC
- Operating Temperature: -40°C to +85°C
- Dimensions:25 * 20mm;
-
## Interface Function
---
![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg)

- P1:Short-circuits,then interrupt signal will be connected with pin PF0/A5 .
- U1:PAJ7620U2;Integrated Gesture Recognition Sensor.
- J1,J2:FPC interface.

:::note
When connect Xadow - Gesture to Xadow Main Board, the connection direction should be cautious. The connection method is that the unfilled corner of one xadow module connect to the right angle of another module(see four corners of each xadow module).
:::
## Pins Description
---
Pins on both sides of Xadow modules are symmetrical, here are pins descriptions about Interface from top to bottom.

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg)

|Xadow Pins|	PAJ7620U2 Pins	|Function|
|---|---|---|
|1	|NC	|(PCINT1/SCLK)PB1
|2	|NC	|(PDI/PCINT2/MOSI)PB2
|3	|NC	|(PDO/PCINT3/MISO)PB3
|4	|3/INT	|PF5(ADC5/TMS)
|5	|1/VBUS , 11/VLED , 12/VDD	|VCC
|6	|6/GND , 10/GND	|GND
|7	|6/GND , 10/GND	|GND
|8	|1/VBUS , 11/VLED , 12/VDD	|VCC
|9	|5/SCL	|(OC0B/SCL/INT0 )PD0
|10	|2/SDA	|(SDA/INT1)PD1
|11	|NC	|(RXD/INT2)PD2
|12	|NC	|(TXD/INT3)PD3


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---
- [Xadow - Gesture v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Library of Xadow - Guesture](https://github.com/Seeed-Studio/Grove_Guesture)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
