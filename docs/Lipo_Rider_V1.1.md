---
name:  Lipo Rider V1.1
category: Discontinued
bzurl:
oldwikiname: Lipo_Rider_V1.1
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Lipo_Rider_V1-1
sku:
tags:
---

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Liporider-setup.jpg)

Power your favourite electronic kit with green energy! The Lipo Rider board allows you ride the solar wave to run your favourite 5V device. The Lipo Rider board is the ideal green power solution for your outdoor sensor design. Attach the Lipo Rider board to your sensor board and it can run on solar power forever!

The LipoRider is extremely affordable and easy to use. No programming is required. Plug it in and it works. The internal charger IC handles all the power flow between the various components.

In case solar power is not sufficient, the microUSB port allows you to charge your lithium battery through USB. It can also be used to program your kit without detaching the Lipo Rider board.

The Lipo Rider can be purchased as a separate board or as a kit (Lipo Rider + Lithium Battery + Solar Panel) from [Seeed Studio](http://www.seeedstudio.com/depot/).

Model:POW115D2P



##   Features   ##

-   Jst 2.0 connector

- 	Stable 5V USB power supply regardless of source

- 	Charge/Recharge algorithms built into chip

- 	Charge Lithium Polymer Battery through solar power or USB

- 	Stable supply voltage through either lithium battery or USB

- 	2 x USB ports let you program your kit while charging your Lithium battery

- 	LED indications for battery full or charging states

- 	Simple design means extremely affordable

- 	Scalable to multiple lithium batteries and large/multiple solar panels through simple end-user modifications

##   Application Ideas   ##

- 	Green Power and backup supply for distributed outdoor sensor network

- 	Charger for Lithium batteries

##   Cautions   ##

- 	Live exposed electronic components

- 	The board may get hot when supplying large loads

- 	Potential short circuit or electric shock, especially if device gets wet when placed outdoors for solar power collection

- 	Not recommended for charging mobile phones as module may overheat

##   Schematic   ##

###   Block Diagram  ###

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Lipo-rider-blockdiagram.JPG)

##   Specification   ##

- 	Small Footprint – Dimensions = L47 × H37.5 × D6.6

- 	600mA maximum charging current for Lithium battery

- 	350mA maximum supply current from Lithium battery

- 	Power diodes to prevent back feed from USB device into Lipo battery

###   Key Specification   ###

|Items|Min|Norm|Max|
|---|---|---|---|
| Iin Solar| 4.8V| 5.0V| 6.5V|
| Icharge (RIset=3.9kΩ)| 400mA| 500mA| 600mA|
| Isupply 0mA|350mA|||
| Vbatt(Rx=0Ω)|4.2V|||
| Vsource USB 5.0V|Vdestination USB 5.0V||||

##   Pin definition and Rating   ##

###   Pin Instruction and LED Statement   ###

|CH pin level(Red LED state)|OK pin level(Green LED state)|Statements|
|---|---|---|
 |low level(on)|high level(off)| Charging|
 | high level(off)|low level(last on)|Complete|
 |pulse signal(flash)|pulse signal(on)| The battery isn't exist|
 | high level(off)|high level(off)|  Two situations :-      Input voltage lower than gate voltage -      The input voltage lower than battery voltage|

##   Usage   ##

The Lipo Rider works as a power module to supply a stable 5VDC power for **MCU**  projects. Here is an example to drive 300mA output wave for a power supply:

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/MAP001.jpg)

###   Hardware Setup   ###

####   Hardware Components  ####

**Solar Panel**

The solar panel is connectedto the board via the lower JST connector. Please note that the Solar Charger IC only accepts input voltage inside the 4.8-6.5V range. If the charging LED is not on, it is possibly due to:

1.Lithium Battery Full

2.Solar Panel voltage outside of range (most likely due to insufficient solar power).

In the second case, re-position your solar panel to accept more sunlight if possible.
None of the above conditions will prevent the Lipo Rider from providing a steady 5V supply to the USB, unless the battery is flat.

Solar Panel Equations

Solar Panel Output Power = Output current × Supply Voltage

e.g. 1W = Iout× 5V

Iout = 200mA

Therefore, charging for 1 hour will give 200mAh, ignoring losses. For a 1000mAH battery, charging from empty to full will take approximately 5 hours under ideal conditions.

**Lithium Battery**

The name Lipo Rider suggest that a Lithium Polymer to be used. However, the chemistry of a lithium polymer and a lithium ion battery is sufficient similar for the two battery types to be interchangeably used.
In case more than one battery is to be used, connect them in parallel instead of in series, as the charger IC supplies 4.2V.

**Slide switch**

The slide switch controls the source of the USB 5V power.
ON – Charge enabled from lithium battery and/or solar
OFF – Charge disabled from lithium battery and/or solar

**Source USB Port**

The source USB port is a mini USB port which is used as a normal USB port. The source USB port can be used to charge the lithium battery or connected to destination device via the destination USB port.

**Destination USB port**

The destination USB port is where the destination device is to be connected. Power to the destination device will be supplied by the Lipo Rider board. The supply will be either from solar panel, lithium battery or source USB port.

####   Power Flow Dierctions under Different connection scenarios  ####

Due to the huge number of combinations, I have only included only the main scenarios:

Standalone Mode

Solar Power charges lithium battery

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Lipo-Rider-v1.2-standalone.JPG)

USB Mode

Solar Power charges lithium battery. Lithium battery supplies destination USB device

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Lipo-Rider-v1.2-usb.JPG)
Program Mode

Source USB will charge lithium battery and power destination USB device. Data connection will be enabled between source and destination USB devices

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Lipo-Rider-v1.2-program.JPG)

###   Example   ###

####  Outdoor Sensor Device Power Supply  ####

One important application of the Lipo Rider board is as an affordable power supply for outdoor sensors. The outdoor sensor device will be powered by the lithium battery supplemented by the solar panel. Please note that it is not recommended to run the outdoor sensor ONLY on solar power, as this may vary during the day and may cause the sensor to reset / power down unexpectedly. In this case, the device is running in “USB Mode”.

If a firmware reprogram for the outdoor sensor device is required, simple connect the mini USB port to your PC which will put the device under “Program Mode” as explained above.

Larger/multiple batteries and/or solar panels can be used, but only with end-user modifications.

![](https://github.com/SeeedDocument/Lipo_Rider_V1.1/raw/master/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider powering an Arduino Duemilanove (not strict an outdoor sensor in this case as I have not connected any sensor and it is not outdoor, but you get the point )

##   Support   ##

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Version Tracker   ##

 |Revision| Descriptions|Date|Editor|
 |---|---|---|---|
|Lipo Rider V0.9b | Initial public release|Nov 2, 2010| Lafier|
|Lipo Rider V1.0 |Revise release|Jan 11, 2011|Silas Wan|
|Lipo Rider V1.1 |Change the Jst connector from 2.54 to 2.0|Nov 2, 2011|Mike|

##   Resources   ##

- [File:Lipo rider v1.1.zip](https://github.com/SeeedDocument/Lipo_Rider_V1.1/blob/master/res/Lipo_rider_v1.1.zip)

##   How to buy   ##

Click [here](http://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107) to buy [Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/)  ,or other **products** you like.

##   See Also   ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

##   Licensing   ##

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>