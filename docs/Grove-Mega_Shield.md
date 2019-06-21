---
name: Grove - Mega Shield
category: Wireless
bzurl: https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html
oldwikiname:  Grove - Mega Shield
prodimagename: 500px-Megashieldn1_03.jpg
surveyurl: https://www.research.net/r/Grove_Mega_Shield
sku:   103020027
---
![](https://github.com/SeeedDocument/Grove-Mega_Shield/raw/master/img/500px-Megashieldn1_03.jpg)

Grove - Mega Shield is a extension board for Arduino Mega and Google ADK. We have standardized all the connectors into 4 pins(Signal 1,Signal 2,VCC and GND) 2mm connectors and keep some of the 3pin(Signal, VCC and GND ) 2.54mm headers for Servo and Electronic Bricks , which simplify the wiring of electronics projects. The 4pins buckled connectors also make the wiring situation more stable. The Mega Shield includes Digital 0 - 21 and Analog 0 - 15; We abandon Digital 22 - 53 for easily installing Mega Shield with Xduino Mega/Google ADK.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html)

## Features
---
- Arduino Mega1280/2560 compatible
- Grove compatible
- Google ADK compatible
- Dimensions: 92.8 mm X 57.2 mm.

## Function Block
---
The purpose of the Grove - Mega Shield is to allow easy connection of Xduino Mega/Google ADK input and output pins to the Grove units.

Each socket is clearly labelled with its matching I/O pin. the Grove - Mega Shield can be divided into four sections: Reset Button, Analog Area, Digital Area and Power Area.
Please consider the following diagram:

![](https://github.com/SeeedDocument/Grove-Mega_Shield/raw/master/img/Megashield001.jpg)

The Digital Area of Grove - Mega Shield can also be partitioned into four sections according to different function of GPIO: IIC( 3 connectors ), UART( UART0-3 ), PWM ( PWM2-13 ) and ICSP( not connector ). Please be aware that PWM have two ways of appearance: 3Pin 2.54mm Header and our standard 4Pin 2mm connector. Those two forms of appearance serve different purpose, 4Pin 2mm connectors can connect to our standard Groves while 3Pin 2.54mm Header can connect to Servo, Ultra Sonic range measurement module and Electronic Bricks. Please be aware that When using 3Pin and 4Pin modules on PWM at the same time, Do take extra attention in case of multi-using the same GPIO. Please refer to the following diagram:

![](https://github.com/SeeedDocument/Grove-Mega_Shield/raw/master/img/Megashield002.jpg)

## Resources
---
- [Eagle File of Grove - Mega Shield.](https://github.com/SeeedDocument/Grove-Mega_Shield/raw/master/res/Eagle_file_of_Megashield.zip)
- [Eagle File of Grove - Mega Shield v1.1.](https://github.com/SeeedDocument/Grove-Mega_Shield/raw/master/res/Eagle_file_of_Megashield_v1.1.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>