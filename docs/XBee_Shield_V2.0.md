---
name: XBee Shield V2.0
category: Shield
bzurl: https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html
oldwikiname:  XBee Shield V2.0
prodimagename:  Xbeeshield_01.jpg
surveyurl: https://www.research.net/r/XBee_Shield_V2
sku:   103030004
---

![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/Xbeeshield_01.jpg)

The new version of XBee Shield is a standardized and stackable shield compatible with Arduino. You can easily stack any modules from the Bee series onto it, and build a wireless network for your project. In spite of that, it is also equipped with function of level conversion, which enables a double-way conversion between high&amp; low IO levels. The reserved digital pins facilitate users to select TX/RX port using jumper caps.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)

##   Feature
---
-  Standardized shape design
-  Can be configured by connecting UartSBee module to USB
-  The DIN and DOUT pins can be connected with both UART and other digital pins（D2~D12）
-  Enlarged space for your own development
-  LED indicators


## Hardware Overview
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_Interface%202.jpg)

- U2：[CJT1117 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf), provides 3.3V voltage for XBee modules.
- U3：[SN74LVC1G125 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf), achieves Logic-level translator function.

##   Getting Started
---

Here we will show you how this XBee Shield V2.0 works with RF Bee. We also can use Bluetooth Bee or other modules.

| XBee Shield V2.0 | RF Bee |
|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee%20Shield%20V2.0_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/rfbee1_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)|[Get ONE Now](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

- Plug RF Bee into Xbee Sheild V2.0.

 ![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_connect_RF_XBee.jpg)

- Use a jumper cap to **connect XB_TX and Digital 4**. Also, Use a jumper cap to connect **XB_RX and Digital 5**. Of course you can change the digital port as you like. But don’t forget to change the port number in the definition of the demo code at the same time.

!!!note
        The followings are its known limitations:
        1. If you are using multiple software serial ports, only one can receive data at a time.
        2. Not all pins on the Mega and Mega 2560 support change interrupts, so only the following can be used for RX: 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69
        3. Not all pins on the Leonardo support change interrupts, so only the following can be used for RX: 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

If you need further information about how to communicate, please refer to WIKI pages of relevant modules.


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/XBee_Shield_V2.0/raw/master/res/XBee_Shield_Eagle_file.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


##   Resource
---
- **[Eagle]** [XBee Shield V2.0 Eagle File](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip)
- **[PDF]** [XBee Shield V2.0b Schematics File](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_v2.0b.pdf)
- **[PDF]** [XBee Shield V2.0b PCB File](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee%20Shield%20v2.0b%20PCB.pdf)
- **[Datasheet]**[CJT1117 Datasheet](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)
- **[Datasheet]**[SN74LVC1G125 Datasheet](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>