---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
---

![](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/img/EL_Shield_02.jpg)

This shield is used to control EL devices. It can control 4 EL devices simultaneously. The controlling method is as simple as controlling an LED. Driven by PWM, it can create a colorful and florid effect by controlling each EL wire with a simple program. Combined with our EL Inverter, it can drive an EL wire as long as 15m, which provides infinite possibility for your design. Besides, the Shield is covered by Acrylic board, which enhances user's safety.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/el-shield-p-1287.html)

Specifications
--------------

- Operating Voltage: 5V
- Invertor interface: JST 2.0
- Control channel interface: 2P - 2.5SM socket

## Compatibility

We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)


Hardware Overview
---------

![](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/img/EL_Shield_interface.jpg)

Demonstration
-------------

Here is a simple demo involving EL shield, 4 EL tapes and the custom invertor that accompanies EL shield.
Hook all things up as in the picture below.

![](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/img/EL_Shield_Hardware_Installation.jpg)

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

Resources
---------

-   [EL Shield eagle file](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/res/EL_Shield_Eagle_File.zip)
-   [EL Shield Source code file for Arduino 1.0](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/res/EL_Shield_Test_code.zip)
-   [BT134W-600D datasheet](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/res/BT134W-600D.pdf)
-   [MOC 3063 datasheet](https://raw.githubusercontent.com/SeeedDocument/EL_Shield/master/res/MOC3063M.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/EL_Shield -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>