---
name: FST-01
category: MakerPro
bzurl: https://www.seeedstudio.com/FST-01-without-Enclosure-p-1276.html
oldwikiname:  FST-01
prodimagename:  FST-01_board.jpg
surveyurl: https://www.research.net/r/FST-01
sku:  102990031
---
![](https://github.com/SeeedDocument/FST-01/raw/master/img/FST-01_board.jpg)

FST-01 is a tiny USB 32-bit computer.  In fact, FST-01 is an abbreviation and its full name is "Flying Stone Tiny ZERO-ONE".

It is designed by Flying Stone Technology, a company in Maebashi, Gunma, Japan.

The concept is "Minimalist Design".    It is by free (as in freedom) hardware design.  The intended applications are Gnuk (The Cryptographic Token for GnuPG) and NeuG (True Random Number Generator based on ADC noise).  Those applications are Free Software.

Flying Stone Technology is a second source manufacturer of "Gnuk", which is copyrighted by the Non-Profit organization, Free Software Initiative of Japan.

For those who want rich features, please consider [Maple Mini](http://www.seeedstudio.com/depot/maple-mini-p-861.html), instead.

```
                        SWD port
                        (GND, SWD-CLK, SWD-IO)
    Power port +---------------------+
           Vdd |[]           []()() -------+
           GND |[]                  |      |
               |()() I/O port       | USB  |
               |      (PA2, PA3)    |      |
               |                    -------+
               +---------------------+
```

Please use [FST-01 Q&amp;A site](http://no-passwd.net/askbot/questions/) for your questions.

|FST-01 without enclosure|FST-01 with heat shrink tube|FST-01 with case (P1A-120704U)|
|---|---|---|
|[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](http://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html)|[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](http://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html)|[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](http://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html)|

It is also available at Flying Stone Technology (飛石技術), person to person.  See [Buy FST-01!](http://www.gniibe.org/shop/buy-fst-01) page at gniibe.org (in Japanese).

##   Applications
---
As explained in the section above, we intend to run [Gnuk](http://www.fsij.org/gnuk/) on FST-01.  It is copyrighted software distributed under **GPLv3** license.

![](https://github.com/SeeedDocument/FST-01/raw/master/img/Gnuk-sticker.png)

Gnuk is an implementation of Cryptographic Token for GnuPG, and it runs on STM32F103.  Source code is available at gniibe.org or gitorious.org.  FOr source code, please visit: [https://gitorious.org/gnuk/gnuk/trees/release/1.0.1](https://gitorious.org/gnuk/gnuk/trees/release/1.0.1)

For more information about Gnuk, please visit: [Gnuk WiKi](https://gitorious.org/gnuk/pages/Home) and [Official Gnuk Documentation](http://www.fsij.org/doc-gnuk/).

Also, we intend to run NeuG on FST-01.

![](https://github.com/SeeedDocument/FST-01/raw/master/img/NeuG.png)

[NeuG](http://www.gniibe.org/memo/development/gnuk/rng/neug) is an implementation of True Random Number Generator based on quantization error of ADC.

Note that only an application can be installed on FST-01 (either Gnuk or NeuG).

###   Development Environment

For Gnuk 1.0.1, we use [GCC ARM Embedded 4.6-2012-q2](https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update).

###   For the first lot of FST-01

In this product, it contains copyrighted software, Gnuk version 1.0.1, that is licensed under the **GPLv3**. A copy of that license is included in this WiKi, see **GPLv3**.
You may obtain the complete Corresponding Source code for a period of three years after the last shipment of this product, which will be no earlier than 2016-01-01, on the manufacturer website at http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git and we put the tag "release/1.0.1" for the version of the product.

Note that Gnuk binary in the first lot of FST-01 was compiled with "-O3 -Os" option by GCC ARM Embedded 4.6-2012-q2.

###   Mailing list for Gnuk/NeuG

We have a mailing list for Gnuk/NeuG: [https://lists.alioth.debian.org/mailman/listinfo/gnuk-users](https://lists.alioth.debian.org/mailman/listinfo/gnuk-users)

As well as git.gniibe.org, the source code repositories are available at : [https://anonscm.debian.org/cgit/gnuk/](https://anonscm.debian.org/cgit/gnuk/)

##   Writing flash ROM of MCU
---
We use SWD port to write flash ROM of MCU. Since SWD is a kind of new, there is not yet good hardware and software experiences.

We select ST-Link/V2 for cheap SWD debugger and wrote our own tool stlinkv2.py in Python. The tool stlinkv2.py is distributed within Gnuk.  See [this article](http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection) for the connection of ST-Link/V2 and FST-01.

Forthcoming OpenOCD 0.6.0 will support ST-Link/V2 and SWD.  You will be able to use that, too.


###   Description

FST-01 is minimum STM32F103 board, which is suitable to run computation-oriented applications like Gnuk.
- Dimensions: 1.62 x 0.52 inch (including USB plug)
- USB Bus Powered
- MCU: 32-bit ARM Cortex M3 at 72MHz (STM32F103TBU6), flash ROM: 128KB, - RAM: 20KB
- SPI Flash Memory: 4MB
- SWD port, Two I/O pins
- Content of Flash ROM of MCU: As a side effect of test plan, FST-01 comes with Gnuk version 1.0.1 installed on the flash ROM of MCU and it is protected. You need to disable the protection before writing the flash ROM.

Please visit this page for detail.

**FST-01 without enclosure**

This is a bare board for evaluation, development or those who want their own enclosures.

You can access SWD port and change the content of flash ROM.

**FST-01 with heat shrink tube**

The board is covered by transparent heat shrink tube. Thus, it is not possible to access SWD port.
This can be daily use as Gnuk Token.

**FST-01 with case (P1A-120704U)**

The board comes with the case. Note that it is users who put the board to the case.
This would be better if transparent tube doesn't match your taste or you want to change the content of flash ROM of MCU.
Although FST-01 PCB is designed following the recommendation of P1A-120704U specification, the case might be a bit larger and you will need a bit of glue to fit the board and the case. Otherwise, the board will be able to move a bit (< 1mm or so).

##   History
---
*   2011-08-06: [Idea](http://www.gniibe.org/memo/development/fst-01/fst-01-idea)

*   2011-08-08: Initial commit to [FST-01 Git repository](http://www.gniibe.org/gitweb?p=fst-01.git)

*   2011-08-23: Fusion PCB order for prototype PCB: #33163

*   2011-08-26: [Wish for FST-01](http://www.seeedstudio.com/wish/?p=783)

*   2011-09-06: Fusion PCB order for prototype PCB: #34012

*   2011-09-13: Fusion PCB order for prototype PCB: #34217

*   2011-09-30: Fusion PCB order for prototype PCB: #35421

*   2011-10-27: Fusion PCB order for prototype PCB: #37126

*   2011-11-14: Version 1.0 of FST-01 PCB Design released

*   2012-07-10: Submitted to Propagete

*   2012-08-??: Placed the order for production

*   2012-09-27: Production finish for the first lot

    *   For the first lot, XTAL is changed to one with 20pF load capacitance. (Because of availability of the part.)

        *   For the first lot, content of flash ROM of MCU is Gnuk 1.0.1 and it's protected.

*   2012-10-08: Start selling at Seeed Bazaar

*   2015-04-01: Start selling at FSF Shop, with NeuG installed: [http://shop.fsf.org/product/usb/](http://shop.fsf.org/product/usb/)

##   Free (as in freedom) Board Design

![](https://github.com/SeeedDocument/FST-01/raw/master/img/Fst-01-schematic.png)

Fst-01-schematic.png

The board design is available as [KiCAD](http://www.kicad-pcb.org/) format. Please visit http://git.gniibe.org/gitweb?p=gnuk/fst-01.git.

The schematic design is distributed under Creative Commons Attribution 3.0 Unported License (CC BY 3.0).

The PCB design is distributed under Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0).

##   BOM of FST-01
---
<table  cellspacing="0">
<caption> BoM of FST-01
</caption>
<tr>
<th> Part #
</th>
<th> Name
</th>
<th> Detail
</th>
<th> Package
</th>
<th> Manufacturer
</th>
<th> Distributor
</th>
<th> distributor reference
</th></tr>
<tr>
<td> C1
</td>
<td> Capacitor
</td>
<td> 27pF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C2
</td>
<td> Capacitor
</td>
<td> 27pF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C3
</td>
<td> Capacitor
</td>
<td>0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C4
</td>
<td> Capacitor
</td>
<td> 0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C5
</td>
<td> Capacitor
</td>
<td> 0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C6
</td>
<td> Capacitor
</td>
<td> 0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C7
</td>
<td> Capacitor
</td>
<td> 0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C8
</td>
<td> Capacitor
</td>
<td> 4.7uF
</td>
<td> C0603
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C9
</td>
<td> Capacitor
</td>
<td> 0.01uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C10
</td>
<td> Capacitor
</td>
<td> 4.7uF
</td>
<td> C0603
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> C11
</td>
<td> Capacitor
</td>
<td> 0.1uF
</td>
<td> C0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> R1
</td>
<td> Resister
</td>
<td> 510R
</td>
<td> R0402
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> D1
</td>
<td> LED
</td>
<td> Blue
</td>
<td> LED0603
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> J1
</td>
<td> Connector
</td>
<td> USB 2.0, 1002-015-01001
</td>
<td> USB Plug A Male
</td>
<td> CNC Tech
</td>
<td> Digikey
</td>
<td> 1175-1020-ND
</td></tr>
<tr>
<td> U1
</td>
<td> MCU
</td>
<td> STM32F103TBU6
</td>
<td> QFN36
</td>
<td> ST Microelectronics
</td>
<td> AVNET
</td>
<td> STM32F103TBU6
</td></tr>
<tr>
<td> U2
</td>
<td> LDO V-Regulator
</td>
<td> CAT6217-330TDGT3 +3.3V
</td>
<td> TSOT23-5
</td>
<td> ON Semiconductor
</td>
<td> Mouser
</td>
<td> 698-CAT6217330TD-G
</td></tr>
<tr>
<td> U3
</td>
<td> USB Terminator
</td>
<td> NUF2221W1
</td>
<td> SOT363
</td>
<td> ON Semiconductor
</td>
<td> Digikey
</td>
<td> NUF2221W1T2GOSTR-ND
</td></tr>
<tr>
<td> U4
</td>
<td> SPI Flash Memory
</td>
<td> SST25VF032B-80-4I-QAE-T
</td>
<td> WSON8
</td>
<td> Silicon Storage Technology
</td>
<td> Digikey
</td>
<td> SST25VF032B-80-4I-QAE-T-ND
</td></tr>
<tr>
<td> X1
</td>
<td> Crystal
</td>
<td> ABM8G-12.000MHZ-18-D2Y-T
</td>
<td> 3.2mmx2.5mm
</td>
<td> Abracon Corporation
</td>
<td> Digikey
</td>
<td> 535-10261-2-ND
</td></tr>
<tr>
<td>
</td>
<td> Enclosure
</td>
<td> P1A-120704U  White
</td>
<td> 1.2 x .71 x .40 inch
</td>
<td> New Age Enclosures
</td>
<td>
</td>
<td>
</td></tr></table>

##   Components of FST-01
---
*   STM32F103TB
*   SPI Flash memory (32Mbit)
*   USB Terminator
*   LDO Regulator (3.3V)
*   12MHz XTAL C<sub>L</sub>=18pF

*   LED
*   SWD Port of GND/SWDIO/SWDCLK
*   Extension port of VDD/GND/Port0/Port1
*   USB plug A

**<big>STM32F103TB </big>**

MCU is Cortex-M3 based ARM by STMicroelectronics.  It runs at 72MHz, it has 128KB flash ROM and 20KB RAM.

**<big>SPI Flash memory</big>**

Secret data should be on MCU's flash, but non confidential data (such as backup of public keyring) can be on SPI flash memory.

We use SST25VF032B (32Mbit = 4MB).

**<big>USB Terminator</big>**

We use NUF2221W1 USB Upstream Terminator.

This is because it has the feature of electrostatic discharge protection.  It is also better for smaller footprint than two capacitors and two resistors.

**<big>LDO Regulator</big>**

We use CAT6217-330 for 3.3V Regulator (from 5V).  Currency of 150mA is enough.

**<big>XTAL 12MHz C<sub>L</sub>=18pF</big>**

We use 12MHz XTAL C<sub>L</sub>=18pF.

This is because we can find smaller footprint XTAL for 12MHz (than 8MHz).

**<big>LED</big>**

We use a LED to show status.

**<big>SWD port</big>**

SWD port is to install firmware to MCU's flash ROM.

**<big>Extension port of VDD/GND/Port0/Port1</big>**

We decided to have two I/O pins. (One I/O pin is not enough even for minimalist.)

With two I/O pins, it can be:

*   TX and RX of serial communication
*   Drive and input of touch sensor
*   Controlling other MCU's SWD port

**<big>USB plug A</big>**

FST-01 usage is just connect it to USB port, like USB thumb drive.

##   Possible Changes to the circuit and parts
---
**<big>LDO Regulator</big>**

MCP1700T-330 would be alternative (electrical characteristic seems worse, but for the case of more current).  In this case, we need to change circuit a bit.

**<big>XTAL</big>**

It is possible to just replace XTAL with 12MHz XTAL C<sub>L</sub>=20pF.
This change is within the margin of the design.

It would be better to also replace C1 and C2 to 33pF together in that case, if you will do that from the beginning.

See [explanation about load capacitance in Wikipedia](https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance).

**<big>Shield GND to Signal GND</big>**

FST-01 is intended to be inserted to USB port directly.
If the usage is not direct but connected by extension cable, it is better to connect Shield GND and Signal GND by resister (and capacitor if you like).

Reference:
[http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield](http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

**<big>USB_EN</big>**

USB_EN is not needed, but pin 5 of NUF2221W1 can be connected to 3.3V (Vdd) directly.

In many designs of boards with STM32F103, we see something like that, but because it is possible to control USB D+ to be 0V by software, USB_EN is not needed.

**<big>No SPI flash memory by default</big>**

The size is somewhat too small to be useful, so, it could be a special users' option and no chip would be OK by default.

##   PCB images
---
PCB images are generated by [prettygerbv](http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv).

![](https://github.com/SeeedDocument/FST-01/raw/master/img/Fst-01-front.png)

![](https://github.com/SeeedDocument/FST-01/raw/master/img/Fst-01-back.png)

![](https://github.com/SeeedDocument/FST-01/raw/master/img/Fst-01-conn.png)

##   Engineering Prototype of FST-01
---

![](https://github.com/SeeedDocument/FST-01/raw/master/img/FST-01-Prototype-PCB.jpg)

FST-01-Prototype-PCB.jpg

Thanks to Fusion PCB service, we made PCB of FST-01 Engineering Prototype.

![](https://github.com/SeeedDocument/FST-01/raw/master/img/FST-01-prototype.jpg)

PCB Assembly was done by **User:Gniibe** by hand.  See [my article](http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering) for detail.

##   Test plan outline
---
1.  Check MCU ID
2.  Write to flash ROM of MCU
3.  Check LED blinking
4.  Check SPI Flash ROM access
5.  Run an application which uses USB and see if it works (Hub assigning address)
    1.  On power up (or reset), LED emits light.
    2.  FST-01 application waits for USB address assignment by USB Hub. (It takes a few seconds for Hub to detect and to assign address to the device.)
    3.  After USB address assignment, FST-01 application goes enter the loop
            * waiting 5 seconds
            * blink LED (emits lights for 25ms,off 200ms).

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>