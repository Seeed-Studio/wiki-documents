---
name: Fubarino SD
category: MakerPro
bzurl: https://www.seeedstudio.com/Fubarino-SD-p-1265.html
oldwikiname:  Fubarino SD
prodimagename:  Fubarinosd.jpg
surveyurl: https://www.research.net/r/Fubarino_SD
sku:     102990019
---
![](https://github.com/SeeedDocument/Fubarino_SD/raw/master/img/Fubarinosd.jpg)

Fubarino SD is a small, easily breadboardable microcontroller board. It is chipKIT and MPIDE compatible, which means you can write sketches for it in MPIDE, which is the Arduino IDE fork for chipKIT compatible boards. The microcontroller on the board is a Microchip PIC32MX440F256H.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Fubarino-SD-p-1265.html)

##   Features
---
*   USB connector wired to the PIC32's USB peripheral.
*   microSD connector wired to hardware SPI periperhal on PIC32.
*   Complete integration and compatibility with MPIDE - in fact, current versions of MPIDE support Fubarino SD as a target board.
*   All I/O and power pins in standard "DIP" form factor for easy use with a breadboard.
*   Powered from USB connector, external 3.3 or external 2.8V to 13.2V power supply.
*   15 analog inputs (10 bits)
*   45 digital I/O pins
*   ICSP header pins if you want to use a hardware programmer or debugger under MPLAB or MPAB X IDEs. (both free from Microchip)
*   Like all chipKIT compatible boards, the Fubarino SD can run any Arduino sketch or library as long as they don't access native AVR registers directly.
*   All I/O operates at 3.3V, but many I/O pins are 5V tollerant.
*   PIC32MX440F256H is a 32 bit processor running at 80 MHz with 256K of Flash and 32K RAM
*   Can use USB (5V), 3.3V or 2.3V to 15V input for power
*   Includes 4 DMA channels, 1 SPI (used for microSD but brought out to pins), 2 I2C ports, USB (host, function, OTG), 15 A/D channels (10 bit), 5 16-bit timers, 5 hardware PWM, PMP, etc. as part of PIC32 processor



##   Support

Please use the Github [issue tracker](https://github.com/fubarino/fubarino.github.com/issues) for any bugs related to Fubarino SD hardware. For bugs in MPIDE, software or libraries, please refer to the [chipKIT/MPIDE forum](http://www.chipkit.org/forum/index.php) or the chipKIT/MPIDE Github [issue tracker](https://github.com/organizations/chipKIT32/dashboard/issues/).

Note that the first 100 Fubarino SD boards were mistakenly built with PIC32MX795F512 parts. This should not impact sketches built from MPIDE. However, it does mean that [RetroBSD](http://retrobsd.org/) is an option for these first 100 boards.

##   Resources
---
*   Fubarino SD v1.4 board and schematic (Eagle 6 format) - [Github directory](https://github.com/fubarino/fubarino.github.com/tree/master/sd/v1.4)

*   Fubarino SD v1.4 [schematic](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_sch.pdf) (PDF)
*   Fubarino SD v1.4 [board layout](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_brd.pdf) (PDF)
*   Fubarino SD v1.4 [BOM](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_BOM_SeeedFormat.xlsx) (Excel)
*   Fubarino SD [Reference Manual](https://github.com/fubarino/fubarino.github.com/raw/master/sd/docs/FubarinoSDURefManual.docx) (Word)
*   USB Bootloader (avrdude compatible) [HEX file](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/BL_1_1_6_FuncTest_1_0.hex) note: right click and select 'save as' to get the .HEX file - the board already comes with this bootloader pre-programmed
*   [Factory Test sketch](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/FubarinoSD_ManufactureTest.pde) This sketch is what the factory uses to test the Fubarino SD board - right click and select 'save as'.


##   Authors

Fubarino SD was designed by Brian Schmalz (from [Schmalz Haus LLC](http://www.schmalzhaus.com)) and Rick Anderson (from [Fubar Labs](http://fubarlabs.org)). Both are also on the chipKIT/MPIDE development team.

##   External Links

Links to external webpages which provide more application ideas, documents/datasheet or software libraries

*   MPIDE (Multi Platform Integrated Development Environment) [download](http://www.chipkit.org/forum)

*   [Fubarino website](http://fubarino.org/) (includes latest files, FAQ, tutorials, examples, etc.)
*   [chipKIT and MPIDE forums](http://www.chipkit.org/forum/index.php)

*   [chipKIT/MPIDE wiki](http://chipkit.org/wiki/index.php?title=Main_Page "Main_Page")

*   [Digilent Inc](http://www.digilentinc.com) Designers of the chipKIT boards
*   [PIC32MX440F256H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en534168) Microchip PIC32 processor

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>