---
name:  Seeeduino v2.21‏‎
category: Discontinued
bzurl:
oldwikiname: Seeeduino_v2.21‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Seeeduino_v2-21
sku:
tags:
---

![](https://github.com/SeeedDocument/Seeeduino_v2.21/raw/master/img/Seeeduino-168p.jpg) ![](https://github.com/SeeedDocument/Seeeduino_v2.21/raw/master/img/Seeeduino_fritzing.png)

Here is the wiki page for Both Seeeduino V2.21 Atmega 168P and Seeeduino V2.21 Atmega 328P.

Seeeduino is Arduino compatible board. Its design is based on Diecimila scheme, 100% compatible to its existing program, shield and IDEs. On the hardware part, remarkable changes are taken to improve the flexibility and user experience.



##   Features  ##

-  Inherits all of Arduino Diecimila's features.

-  Compatible to Diecimila's pin layout, screw hole and dimensions.

-  Evolved with SMD components

-  Improved on extensibility and convenience

##   FAQ   ##

Here is the Seeeduino FAQ, now the version is v2.21, users can list the Frequently Asked Questions here, example as below:

###   What is Seeeduino  ###

**Answer:** Seeeduino is a ...

###   How do I use the Seeduino 328 with the Arduino IDE?  ###

Answer: Select the "Arduino Dueminalove 328" in the Arduino IDE and also make sure the reset switch is set to AUTO for programming.

###   What voltages can I feed through the JST power connector  ###

**Answer:** This is a non-authoritative (user-submitted) response. The JST connector is connected to a L1117-50 voltage regulator which takes the input voltage down to 5.0 VDC. The L1117 is a LDO (low-drop out) regulator, so it needs a minimum of +1.2 volts over the regulated voltage to operate.  In conclusion, you need a minimum of at least 6.2 VDC but more is preferred. The maximum voltage is 15 volts DC for the regulator, however this assumes best-case scenario for the regulator. To be on the safe side with adequate margins on both ends, you should keep the voltage between 7 VDC and 13 VDC.

###  What is the use of M_RST_A switch ? ###

""Answer:""M_RST_A switch , turn on 'M' mean when you download the program the board will auto restart , turn on 'A' will not auto restart ,default to turn on 'M'

##   Support   ##

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Version Tracker   ##

|Revision|Descriptions|Release Date|
|---|---|---|
 |Seeeduino V0.9|Initial public release||
 |Seeeduino v1.1|**1.** Fixed bug - unnessesary via on Pin4 wire.**2.** Fixed bug - Lable mistakenly covered by switches. **3.** Added I2C and sensor port.**4.** Added an 100uF capacitor for vcc switch.**5.** Grouped new 100mil grid pins.**6.** Replaced reset buttons with metal ones.**7.** Rearranged texts and lables for clearer indications.||
 |Seeeduino v2.12|**1.** Zero external power consumption when switched off **2.** Stronger Switches**3.** Second power supply for 5V direct input. [Caution] USE 5V ONLY!**4.** 150mA driver capacity under 3.3V**5.** 1.0mm slim PCB for lighter weighs**6.** Extra row reserved for pin headers||
 |Seeeduino v2.2|**1.** USB/EXT power auto select**2.** Upgrade power capacitor**3.** Clean up layouts**4.** Reset easier**5.** Real Quartz Crystal**6.** Extern power Diode change to 1N4004(more power on Vin pin)|Dec 16, 2010|
 |Seeeduino v2.21|1.Upgraded to Stronger mini USB connector.|Jan 12, 2011|
 |Seeeduino v3.0|1.change JST connector to DC Jack connector|Jan 1, 2012|

##   Bug Tracker   ##

Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products.

-  The mini-USB connector can break off the board very easily if you apply sidewise force while a mini-USB cable is connected. Consider using an extension USB cable and refrain for plugging/unplugging the mini-USB cable to/from the Seeduino board very often.

##   Additional Idea   ##

The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

##   How to buy   ##

Here to buy Seeeduino v2.21 [(Atmega 168P)](http://seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html) and Seeeduino v3.0 [(Atmega 328P)](http://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133) on SEEED **Bazaar**


##   Licensing   ##

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

##   Resources   ##

- **[PDF]** [Schematic in pdf](https://github.com/SeeedDocument/Seeeduino_v2.21/raw/master/res/Seeeduino_v2.21.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>