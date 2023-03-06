---
description: Grove-Mega_Shield
title: Grove-Mega Shield
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mega_Shield
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/500px-Megashieldn1_03.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shield is a extension board for Arduino Mega and Google ADK. We have standardized all the connectors into 4 pins(Signal 1,Signal 2,VCC and GND) 2mm connectors and keep some of the 3pin(Signal, VCC and GND ) 2.54mm headers for Servo and Electronic Bricks , which simplify the wiring of electronics projects. The 4pins buckled connectors also make the wiring situation more stable. The Mega Shield includes Digital 0 - 21 and Analog 0 - 15; We abandon Digital 22 - 53 for easily installing Mega Shield with Xduino Mega/Google ADK.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield001.jpg" alt="pir" width={600} height="auto" /></p>

The Digital Area of Grove - Mega Shield can also be partitioned into four sections according to different function of GPIO: IIC( 3 connectors ), UART( UART0-3 ), PWM ( PWM2-13 ) and ICSP( not connector ). Please be aware that PWM have two ways of appearance: 3Pin 2.54mm Header and our standard 4Pin 2mm connector. Those two forms of appearance serve different purpose, 4Pin 2mm connectors can connect to our standard Groves while 3Pin 2.54mm Header can connect to Servo, Ultra Sonic range measurement module and Electronic Bricks. Please be aware that When using 3Pin and 4Pin modules on PWM at the same time, Do take extra attention in case of multi-using the same GPIO. Please refer to the following diagram:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield002.jpg" alt="pir" width={600} height="auto" /></p>

# Grove - Mega Shield
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Mega Shield v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---
- [Eagle File of Grove - Mega Shield.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip)
- [Eagle File of Grove - Mega Shield v1.1.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>