---
name: Breakout for LinkIt Smart 7688
category: LinkIt
bzurl: https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html
oldwikiname:   Breakout for LinkIt Smart 7688
prodimagename:  Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg
surveyurl: https://www.research.net/r/Breakout_for_LinkIt_Smart_7688
sku:   103100002
---

![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688/raw/master/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

**Breakout for LinkIt Smart 7688** is a Grove port integrated expansion board for LinkItTM Smart 7688 development board. This breakout board will save a lot of work and makes prototyping easier through simplified wiring. It will assist a beginner to get started fast. It supports serial buses like  I2C, UART. It comes with USB, Ethernet and 3.5mm Audio ports.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

##  Features
---
*   Grove interface makes wiring easier and allows expansions with Grove modules.

*   USB host

*   Audio Output

*   Ethernet port

*   Cost-effective.

##  Application ideas
---
*   IoT/Gateway Device.

*   Robotics

*   Smart multimedia devices

*   Teaching and learning

##  Specification
---
<table>
<tr>
<td> Input voltage </td>
<td> 5.0V(With USB Power port)
</td></tr>
<tr>
<td> Operating voltage </td>
<td> 3.3V
</td></tr>
<tr>
<td colspan="2"> Debug pins, Ethernet pins and USB type-A host pins conect with MT7688, Ohter pins connect with ATmega32U4.
</td></tr></table>

##  Hardware Overview
---
![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688/raw/master/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Grove interface**

Connect rich [Grove](/Grove_System) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules.

!!!note
    **Note** that we will add the function of audio recording for this board in next version of this product.


This section will show those senior customers how to add recording funtion to this board.

1.Download the schematic file at bottom of this page. Open the file named **Breakout for LinkIt Smart7688 v1.0 brd.pdf**, and find the section **MIC Input**. Remove following components inductor L6 and capacitor C21. This will added recording function to this board. **Note** this way only works as you use LinkIt Smart 7688 firmware version 0.9.3 and above.


![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688/raw/master/img/To_use_recording_function_on_version_1.0.png)



2.For beginner, we recommend that you buy Breakout for LinkIt Smart 7688 v2.0 at [bazaar](http://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142).


###  **Parts list**

<table>
<tr>
<th>Parts name   </th>
<th> Quantity
</th></tr>
<tr>
<td> Breakout for LinkIt Smart 7688 </td>
<td> 1PCS
</td></tr></table>

##  Get started

###  Material required

*   LinkIt Smart 7688 × 1

*   USB cable(type A to micro type-B) × 2

*   USB to Serial adapter × 1

*   Jumper wires × 3

*   Stereo(with 3.5 mm audio cable) × 1

*   USB flash driver(with audio file of MP3 format inside) × 1

###  Play music

1.Refer [here](/LinkIt_Smart_7688#Getting_Started) to connect your LinkIt Smart 7688 to internet.


!!!Note
    - You can plug jumper wires to MT7688 UART2 port instead soldering them to Pin 8, Pin 9 and Pin GND.
    - In rare cases, you might not connect to internet successfully, reboot the embedded OS.

2.Open a console with USB to Serial  adapter.

3.Connect all parts like follows:


![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688/raw/master/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4.Enter folder of USB by type **cd /Media/USB-A1** in console.

5.Play music with utility **Madplay**(installed on OpenWRT) by typing **madplay filename.mp3** into console.

6.Now you will hear the music.
</dd></dl>

##  Resources

*   [Schematic files](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688/raw/master/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

*   [LinkIt smart 7688](/LinkIt_Smart_7688)

*   [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

*   [Link](http://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142) to buy a LinkIt Smart 7688.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>