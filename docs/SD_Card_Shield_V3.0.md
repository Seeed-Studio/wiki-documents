---
name: SD Card Shield V3.0‏‎
category: Discontinued
bzurl:
oldwikiname: SD_Card_Shield_V3.0‏‎
prodimagename:
surveyurl: https://www.research.net/r/SD_Card_Shield_V3-0
sku:   
---
 ![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/SD_card_shield.jpg)

The SD card v3.0 shield adds storage to your Arduino project. It supports SD, SDHC, or MicroSD TF cards. Use the on-board toggle switch to select the SD card type. The card supports use of one and only one format of SD card, either SD/SDHC, or MicroSD. Before using an SD or MicroSD card, please set the shields "SELECT" switch to the proper setting: toward the SD/SDHC slot, or the MicroSD slot.

The SD Card shield v3.0 uses only the the SPI ports of Arduino. The shield is also stackable, so additional shields can go on top. There are Grove compatible sockets for the I2C and UART ports on board.

The SD Card shield v3.0 makes use of pin 10 as a chip select. Please be sure other stacked shields do not make use of that same pin. See v4.0 of this shield for a version that uses pin 4.

These next lines were user added: This shield works fine for the Arduino Mega 2560, you just have to make the appropriate connections. 4or10 -&gt;53, 11-&gt;51, 12 -&gt;50, and 13 -&gt;52. This arrangement works fine so long as you make sure not to assign anything else to those pins.

**Model: [INT106D1P](http://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)**


##   Features  

*   Arduino/Seeeduino compatible<font color="red">( Do not compatible with Mega)</font>

*   Grove compatible
*   SD card, Micro SD card and SDHC card supportable
*   3.3v and 5v logical voltage compatible
*   2.6~3.6v DC power supply

##   Specification  

<table  cellspacing="0" width="100%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Voltage
</th>
<td> 2.7
</td>
<td> 3.3
</td>
<td> 3.6
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Current
</th>
<td> 0.159
</td>
<td> 40
</td>
<td> 200
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Supported Card Type
</th>
<td colspan="3"> SD card(&lt;=2G); Micro SD card(&lt;=2G); SDHC card(&lt;=16G)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Dimension
</th>
<td colspan="3"> 57.15x44.70x19.00
</td>
<td> mm
</td></tr>
<tr>
<th scope="row"> Net Weight
</th>
<td colspan="3"> 16.6
</td>
<td> g
</td></tr></table>

##   Interface Function  

![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/SD_Card_interface.png)
 **D10** – Used for CS of SPI
 **D11** – Used for MOSI of SPI
 **D12** – Used for MISO of SPI
 **D13** – Used for SCK of SPI
 **Grove connectors** - One for Uart serial port, and the other one for I2C port.

##   Usage  

###   Hardware Installation  

Plug the SD Card Shield onto the Arduino; Insert your SD card into the socket and make sure the card selector pointing to the right way (Standard card or micro).And then connect the Arduino to PC with USB cable.
 <font color="red">**Warning:** Don't insert SD card and microSD card into the shield at the same time.</font>
 ![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/SD_shield_hardware.jpg)

###   Software  

First you have to get an [SD card or micro SD card](http://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182), and then format the SD card as FAT16 or FAT32 if it is necessary.
Format the SD card as the screenshots below:
 ![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/Format.jpg) ![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/Format2.jpg)

1.  Download the latest version of **SdFat for Arduino**.

2.  Uncompress this package and put it in Arduino-1.0 program: ..\arduino-1.0\libraries.

3.  Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others, and the COM port you are using.

4.  Upload the sketch _**Sdinfo**_.The following image is the result from the serial monitor. Of course you can upload other sketches.
![](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/img/SD_card_software.jpg)
5.  If an error occurs, please recheck all the steps, and make sure the SD card is working. If none of that fixes the problem, try replacing the SD card.
With that done, you can take a look at the other library examples for reading, writing, and sample logging with a GPS or real time clock. Enjoy!

##   FAQ  

1. SD card can't be initialized .

2. Please reformat SD card to FAT/FTA32 .If it still can't work ,suggest to download the [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) and reformat SD card by this software.

##   Version Tracker  

<table  cellspacing="0" width="85%">
<tr>
<th scope="col"> Revision
</th>
<th scope="col"> Descriptions
</th>
<th scope="col"> Release
</th></tr>
<tr>
<td> v3.0
</td>
<td> V3.0 Release
</td>
<td> 2012/3/29
</td></tr>
<tr>
<td> v3.1
</td>
<td> Voltage regulator upgraded to MIC5205
</td>
<td> 2012/5/10
</td></tr></table>

##   Resources  

- **[Eagle]**  [Eagle file of SD Card Shield v3.1](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/res/Eagle_file_for_SD_card_shiled.zip)

- **[PDF]**[SD Card Shield pdf](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/res/SD%20Card%20Shield.pdf)

- **[PDF]**   [PDF file of SD Card Sheild v3.1](https://github.com/SeeedDocument/SD_Card_Shield_V3.0/raw/master/res/SD_Card_Shield.pdf)

- **[Eagle]**   [Eagle file of SD Card Shield v3.0](http://wiki.seeedstudio.com/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP).

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>