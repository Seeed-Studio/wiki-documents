---
name: Grove Breakout for LinkIt Smart 7688 Duo
category: LinkIt
bzurl: https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html
oldwikiname: Grove Breakout for LinkIt Smart 7688 Duo
prodimagename: Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg
surveyurl: https://www.surveymonkey.com/r/grove-breakout-for-linkit-smart-7688-duo
sku: 103030032
---

---
![](https://github.com/SeeedDocument/Grove-Breakout_for_LinkIt_Smart_7688_Duo/raw/master/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

Grove Breakout for LinkIt Smart 7688 Duo is a grove port integrated and a feature expansion board for LinkIt Smart 7688 Duo[1] development board. This breakout board will save a lot of work for quicker prototyping, by the simplified wiring procedure, even a beginner who has little electronic knowledge can start a project quickly. It supports serial buses like I2C, UART and provides access to reserved original pins of LinkItTM Smart 7688 Duo.

[1] LinkItTM Smart 7688 Duo is an open development board based on the OpenWrt Linux distribution, MT7688 and ATmega32u4. The board is designed especially to enable the prototyping of Rich Application IoT devices for Smart-Home.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## Features
---
- Grove interfaced, makes wiring easier.
- More Grove ports, more expandable to rich Grove modules.
- Cost-effective.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Application ideas
---
- IoT/Gateway Device.
- Robotics
- Smart multimedia devices
- Teaching and learning

## Specification
---
- Input voltage:	5.0V (With USB Power port)
- Operating voltage:	3.3V
- Debug pins connect with MT7688, other pins connect with ATmega32U4.


## Hardware Overview
 ---
 ![](https://github.com/SeeedDocument/Grove-Breakout_for_LinkIt_Smart_7688_Duo/raw/master/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

 !!!Note
     As you need to plug LinkIt Smart 7688 Duo on this breakout, align the side with USB micro type-B of LinkIt Smart 7688 Duo to the side with silkscreen Host of Grove Breakout for LinkIt Smart 7688 Duo.

**Grove interface**

Connect rich [Grove](/Grove_System/) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules.

## Getting started

**Materials required**

- LinkIt Smart 7688 Duo × 1
- USB cable (type A to micro type-B) × 1
- USB to Serial adapter × 1
- Jumper wires × 3
- Grove - Buzzer × 1

**Make some sound with a Grove Buzzer**

1.Refer [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/) to connect your LinkIt Smart 7688 Duo to internet.

!!!Note
    1. You can find Pin 8, Pin 9 and Pin GND close to the port to be connected LinkIt Smart 7688.
    2. You can plug jumper wires into MT7688 UART2 port instead of soldering them to Pin 8, Pin 9 and Pin GND.

2.Open a console after connecting an USB to Serial adapter to LinkIt Smart 7688 Duo.

3.Connect all parts as shown below:

![](https://github.com/SeeedDocument/Grove-Breakout_for_LinkIt_Smart_7688_Duo/raw/master/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

!!!Note
    Plug Grove - Buzzer into port D4.

4.Refer to [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/)to build the Arduino environment for LinkIt Smart 7688 Duo platform on host computer.

5.Download [firmata](https://github.com/SeeedDocument/Grove-Breakout_for_LinkIt_Smart_7688_Duo/raw/master/res/Firmata_to_build_Arduino_IDE_for.zip). Refer to [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/) to install Arduino IDE for LinkIt Smart 7688 platform, and flash the file firmata to developent board.

!!!!Note
    Following steps are carried out on embedded OS(OpenWRT).

6.Type **pip install pyfirmata** into console and press Enter to install python library pyfirmata.

7.Create a file named buzzer.py with typing vi buzzer.py in console, copy the code below into it.

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```
8.Save buzzer.py and type python buzzer.py to run the example code.

9.Now you will hear the buzzing.

## Resources
---
- [Schematic files](https://github.com/SeeedDocument/Grove-Breakout_for_LinkIt_Smart_7688_Duo/raw/master/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>