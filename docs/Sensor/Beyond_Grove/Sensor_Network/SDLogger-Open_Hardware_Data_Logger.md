---
title: SDLogger - Open Hardware Data Logger
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/SDLogger-Open_Hardware_Data_Logger/
slug: /SDLogger-Open_Hardware_Data_Logger
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

SDLogger is a simple serial logger based on [SparkFun](http://www.sparkfun.com/)/[Nathan Seidle's OpenLog](https://github.com/sparkfun/OpenLog/wiki/). It is using an ATmega644P processor running at 14.7456MHz and logs to full-size SD cards. It supports both standard SD cards (FAT16) and SDHC cards (FAT32). SDLogger ships with OpenLog firmware 1.61 installed (compiled with SDHC/FAT32 support and large 2048 character input buffer) together with an Arduino-compatible bootloader for easy program update.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


##   Features

*   Simple to configure and use

*   Automatically logs data received on the serial input port

*   Can be configured using a config file on the SD card

*   Supports 2400, 4800, 9600, 19200, 38400, 57600, 115200 and 230400 serial baud rates at 8-N-1.

*   Supports both standard SD cards up to 2GB (FAT16) and SDHC cards up to 16GB (FAT32)

*   Large input buffer (2048 characters)

*   Full-size SD card form factor

*   14.7456 MHz crystal oscillator for precise baud rate generation

*   Input voltage range: 3.3 to 12V

*   Arduino-compatible bootloader installed for easy program update

*   Full Arduino environment support - can be used as an inexpensive Arduino board for program development

*   I/O ports supported in Arduino environment (in addition to the main serial port): 4 analog inputs, second serial port, I2C port

*   Simple SDLogger original firmware restore procedure using the Arduino environment

*   SDLogger hardware/firmware designed by Saanlima/Magnus Karlsson and released under CC BY-SA v3 license

*   Design files, Arduino code and other ported code available on [GitHub](http://github.com/magnuskarlsson/SDLogger)

##   Resources

1.  SDLogger wiki pages

1.  *   [Basic operation](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)

1.  *   [SDLogger FTDI-cable Howto](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)

1.  *   [SDLogger-as-Arduino-board Howto](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)

1.  *   [How to restore the original firmware using the Arduino environment](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)

1.  OpenLog wiki pages (Much of the information here is also relevant to SDLogger)

1.  *   [Link to OpenLog datasheet wiki](https://github.com/sparkfun/OpenLog/wiki/datasheet)

1.  *   [Link to OpenLog firmware command-set wiki](https://github.com/sparkfun/OpenLog/wiki/command-set)


###   Credits

1.  The FAT16/FAT32 firmware was originally designed by Roland Riegel and is released under GPL v2.

2.  OpenLog hardware and firmware developed by [SparkFun](http://www.sparkfun.com/)/Nathan Seidle's OpenLog and released under CC-SA v3 license

3.  Arduino SdFat library written by Bill Greiman and is released under GPL v3

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>