---
description:  EL Shield
title:  EL Shield
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EL_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
--- -->

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_02.jpg)

This shield is used to control EL devices. It can control 4 EL devices simultaneously. The controlling method is as simple as controlling an LED. Driven by PWM, it can create a colorful and florid effect by controlling each EL wire with a simple program. Combined with our EL Inverter, it can drive an EL wire as long as 15m, which provides infinite possibility for your design. Besides, the Shield is covered by Acrylic board, which enhances user's safety.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/el-shield-p-1287.html)

Specifications
--------------

- Operating Voltage: 5V
- Invertor interface: JST 2.0
- Control channel interface: 2P - 2.5SM socket

Hardware Overview
---------

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_interface.jpg)

Demonstration
-------------

Here is a simple demo involving EL shield, 4 EL tapes and the custom invertor that accompanies EL shield.
Hook all things up as in the picture below.

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_Hardware_Installation.jpg)

Upload the code below to your microcontroller.

```
// EL test code
 
void setup(){
 for(int i = 4; i<8; i++)
 {
  pinMode(i, OUTPUT);
 }
}
 
void setEL(int ch) // set a certain EL on
{
 for(int i = 4; i<8; i++) // all off
 digitalWrite(i, LOW);
 digitalWrite(ch+3, HIGH); // ch on
}
 
int count = 0;
 
void loop()
{
 setEL(count%4 + 1);
 delay(200);
 if(count++ == 1000)
 {
  count = 0;
 }
}
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [EL Shield eagle file](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip)
- [EL Shield Source code file for Arduino 1.0](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Test_code.zip)
- [BT134W-600D datasheet](https://files.seeedstudio.com/wiki/EL_Shield/res/BT134W-600D.pdf)
- [MOC 3063 datasheet](https://files.seeedstudio.com/wiki/EL_Shield/res/MOC3063M.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/EL_Shield -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
