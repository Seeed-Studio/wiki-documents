---
name: GPS Bee kit
category: MakerPro
bzurl: https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145
oldwikiname:  GPS Bee kit
prodimagename:  Gpsbee_05.jpg
surveyurl: https://www.research.net/r/GPS_Bee_kit
sku:  113050003
---
![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/Gpsbee_05.jpg)

To make the GPS module be easily compatible with the existent shield , we use the same pin packaging as XBee wireless module.So you can put the GPS module into the existent shield which compatible with XBee. Also you can use the [UartSBee V4](http://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) to connect the GPS module to USB port, run a software named u-center to analyze the GPS data and to reset the GPS module parameter. Put the GPS Bee on the [UartSBee V4](http://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) , and connect the [UartSBee V4](http://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) to the PC , open the u-center.exe , choose the UartSB port , then you can see the data that GPS module send back , and the software analyze them and show you the specific information ,like : time , speed , latitude and longitude, ASL and so on.

Kit is come with Mini Embedded Antenna U.FL for GPS，you can also purchase another Antenna with lager size [Embedded Antenna U.FL for GPS](http://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89). Compatible with all shields, breakout, boards with Xbee standard sockets.

[4 pin 2.54mm to 2.0mm Female jumper wire](http://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html) is also available for easy adaption!

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

##   Features
---
*   50-channel u-blox 5 engine with over 1 million effective correlators
*   &lt;1 second Time To First Fix for Hot and Aided Starts
*   -160dBm SuperSense® acquisition and tracking sensitivity
*   Accelerated startup at weak signals for modules with KickStart feature
*   Supports AssistNow Online and AssistNow Offline A-GPS services; OMA SUPL compliant
*   High immunity to jamming
*   4 Hz position update rate
*   Miniature 2.0mm pitch header, compatible with Xbee sockets
*   UART, USB, DDC and SPI interfaces
*   RoHS compliant

##   Application Ideas
---
*   Any position system

##   Specification
---
<table >
<tr>
<th> Item
</th>
<th> Symbol
</th>
<th> Min
</th>
<th> Typ
</th>
<th> Max
</th>
<th> Unit
</th></tr>
<tr>
<td> Power Supply
</td>
<td> Vcc
</td>
<td> 2.7
</td>
<td> 3.0
</td>
<td> 3.6
</td>
<td> V
</td></tr>
<tr>
<td> Peak Supply Current (Vcc=3.6V)
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td> 150
</td>
<td> mA
</td></tr>
<tr>
<td> Sustained Supply Current (Vcc=3.0V)
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> Acquisition
</td>
<td>
</td>
<td>
</td>
<td> 102
</td>
<td>
</td>
<td> mA
</td></tr>
<tr>
<td> Tracking
</td>
<td>
</td>
<td>
</td>
<td> 44
</td>
<td>
</td>
<td> mA
</td></tr>
<tr>
<td> Antenna Gain
</td>
<td>
</td>
<td>
</td>
<td> 30
</td>
<td>
</td>
<td> dB
</td></tr>
<tr>
<td> Operation temperature
</td>
<td>
</td>
<td> -40
</td>
<td>
</td>
<td> 85
</td>
<td> ℃
</td></tr></table>

###   Pin definition and Rating

![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/GPS.jpg)

<table >
<tr>
<th> Pin
</th>
<th> Name
</th>
<th> Function
</th></tr>
<tr>
<td> 1
</td>
<td> Vcc
</td>
<td> Power suppl, 2.7-3.6VDC
</td></tr>
<tr>
<td> 2
</td>
<td> TX
</td>
<td> Serial Port 1
</td></tr>
<tr>
<td> 3
</td>
<td> RX
</td>
<td> Serial Port 2
</td></tr>
<tr>
<td> 4
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 5
</td>
<td> EX
</td>
<td> Reserved
</td></tr>
<tr>
<td> 6
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 7
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 8
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 9
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 10
</td>
<td> GND
</td>
<td> Ground
</td></tr>
<tr>
<td> 11
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 12
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 13
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 14
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 15
</td>
<td> TP
</td>
<td> Configurable Pulse output (default 1Hz, max 4Hz)
</td></tr>
<tr>
<td> 16
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 17
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 18
</td>
<td> NC
</td>
<td> Reserved
</td></tr>
<tr>
<td> 19
</td>
<td> SCL
</td>
<td> I2C clock pin (configuration only)
</td></tr>
<tr>
<td> 20
</td>
<td> SDA
</td>
<td> I2C data pin (configuration only)
</td></tr></table>

##   Usage
---
1.General purpose GPS shield Benefiting from XBee compatible pinout and voltage, GPS Bee could re-use any Xbee socket, from Xbee shield to Xbee explore. For example, you may just mount the Xbee module to Arduino projects by a Xbee shield.

2.

<table border="0">
<tr>
<td width="300"> USB
</td>
<td width="300"> ![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/GPSBee-exam.jpg)
</td></tr></table>
<table border="0">
<tr>
<td width="300"> **Bluetooth GPS module**

Work with UartSB as a USB port GPS module. You may use powerful Ucenter to get practical details easily. Or, add a Bluetooth module to get a Bluetooth GPS module for your projects.

</td>
<td width="300"> ![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/GPSBee-exam-2.jpg)
</td></tr></table>

![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/GPSBee-exam-3.jpg)

Click [here](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg) to see the legible and complete image.

###  SIM28 module Note:

1. GPS Bee has change the module as SIM28 which the same footprint as origin version.

2. You should use ["SIMCom GPS DEMO"](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/SIMCom_GPS_DEMO_V1.07.zip) tools to receive SIM28 module data.

3. Open SIMCom_GPS_DEMO tools, go to Module-&gt;properties-&gt;module-&gt;select SIM28.

![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/SIM28_module_select.jpg)

4. Open SIMCom_GPS_DEMO tools, go to Module-&gt;connect. Select the serial port which the GPS module used.

![](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/img/SIM28_module_tools_pannel.jpg)


##   Version Tracker

<table>
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td width="300"> GPS Bee kit (with Mini Embedded Antenna)
</td>
<td width="500"> -
</td>
<td width="200"> Nov 08, 2009
</td></tr>
<tr>
<td> v0.91
</td>
<td> complement
</td>
<td> Mar 15, 2011
</td></tr>
<tr>
<td> v1.2
</td>
<td> antenna
</td>
<td> May 18,2012
</td></tr>
<tr>
<td> v1.2
</td>
<td>  change the GPS module to SIM28
</td>
<td> Dec 5,2013
</td></tr>
<tr>
<td> v1.3
</td>
<td> change the GPS module to SIM28, change the LED to the bottom side.
</td>
<td> Jan 10,2014
</td></tr></table>

##   Resources
---
*   [NEO-5 DataSheet Of U-blox](http://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

*   [NEO-6 DataSheet Of U-blox](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

*   [LEA-6 NEO-6 HardwareIntegrationManual](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

*   [U-center](http://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

*   [GPSBee Schematic v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

*   [GPSBee v1.2 Eagle file](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/GPSBee_v1.2_eagle.zip)

*   [SIM28_DATA_File](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/SIM28_DATA_File.zip)

*   [SIMCom_GPS_DEMO_V1.07](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/SIMCom_GPS_DEMO_V1.07.zip)

*   [GPSBee V1.3 Eagle File](https://github.com/SeeedDocument/GPS_Bee_kit/raw/master/res/GPS_Bee_v1.3_eagle.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>