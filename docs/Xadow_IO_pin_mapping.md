---
name: Xadow IO pin mapping
category: Tutorial
bzurl:
oldwikiname:  Xadow IO pin mapping
prodimagename:
surveyurl: https://www.research.net/r/Xadow_IO_pin_mapping
sku:
---

Single reference page for all pin information including:-

*   How to use each pin in your Arduino code

*   Xadow FFC to Atmega32u4 pin mapping

*   pins that have interrupts and timers

*   the 2 serial ports, IIc and ISP
*   additional on board IO, that might be hacked

The tables provide different views of the data and are especially useful when you are planning which modules to use and which IO pins for direct use!

##  Xadow FFC IO bus and matching Arduino and Atmega information and example Arduino code.

<table>
<tr>
<td colspan="4"> **Xadow FFC pins**
</td>
<td colspan="2"> **Arduino**
</td>
<td colspan="2"> **Atmega32u4 pins**
</td>
<td>
</td></tr>
<tr>
<td> **Name**
</td>
<td> **IO function**
</td>
<td> **Alternate use**
</td>
<td> **#**
</td>
<td> **IO Pin**
</td>
<td> **code example(s)**
</td>
<td> **Name (**interrupts in red**)**
</td>
<td> **#**
</td>
<td> **Notes**
</td></tr>
<tr>
<td> P1
</td>
<td> Digital Pin
</td>
<td> ISP SCK
</td>
<td> 1
</td>
<td> **15**
</td>
<td> PinMode(15, OUTPUT); digitalWrite(15, HIGH);
</td>
<td> PB1**(PCINT1**/SCLK)
</td>
<td> 9
</td>
<td> ISP SMD header pads also on rear of Xado Main board
</td></tr>
<tr>
<td> P2
</td>
<td> Digital Pin
</td>
<td> ISP MOSI
</td>
<td> 2
</td>
<td> **16**
</td>
<td> PinMode(16, OUTPUT); digitalWrite(16, HIGH);
</td>
<td> PB2(PDI/**PCINT2**/MOSI)
</td>
<td> 10
</td></tr>
<tr>
<td> P3
</td>
<td> Digital Pin
</td>
<td> ISP MISO
</td>
<td> 3
</td>
<td> **14**
</td>
<td> PinMode(14, OUTPUT); digitalWrite(14, HIGH);
</td>
<td> PB3(PDO/**PCINT3**/MISO)
</td>
<td> 11
</td></tr>
<tr>
<td> P4
</td>
<td> Analogue Pin
</td>
<td> Digital pin!
</td>
<td> 4
</td>
<td> **A5**
</td>
<td> analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);
</td>
<td> PF0(ADC0)
</td>
<td> 41
</td>
<td> Arduino analogue pins can also be used as digital pins!
</td></tr>
<tr>
<td> P5
</td>
<td> Digital Pin
</td>
<td> IIC SCL
</td>
<td> 9
</td>
<td> **3**
</td>
<td> PinMode(3, OUTPUT); digitalWrite(3, HIGH);
</td>
<td> PD0(OC0B/SCL/**INT0**)
</td>
<td> 18
</td>
<td>
</td></tr>
<tr>
<td> P6
</td>
<td> Digital Pin
</td>
<td> IIC SDA
</td>
<td> 10
</td>
<td> **2**
</td>
<td> PinMode(2, OUTPUT); digitalWrite(2, HIGH);
</td>
<td> PD1 (SDA/**INT1**)
</td>
<td> 19
</td>
<td>
</td></tr>
<tr>
<td> P7
</td>
<td> Digital Pin
</td>
<td> Serial Rxd
</td>
<td> 11
</td>
<td> **0**
</td>
<td> PinMode(0, OUTPUT); digitalWrite(0, HIGH);
</td>
<td> PD2(RXD/**INT2**)
</td>
<td> 20
</td>
<td> See Xadow BLE/GPS examples for these serial pin usage info.

NOT same serial port uploading code–see Red/Green LED below.

</td></tr>
<tr>
<td> P8
</td>
<td> Digital Pin
</td>
<td> Serial Txd
</td>
<td> 12
</td>
<td> **1**
</td>
<td> PinMode(1, OUTPUT); digitalWrite(1, HIGH);
</td>
<td> PD3(TXD/**INT3**)
</td>
<td> 21
</td></tr></table>

##  Some MORE Xadow IO pins - only on the Main module, NOT on the FFC bus!

<table>
<tr>
<td colspan="4"> **Xadow pins**
</td>
<td colspan="2"> **Arduino**
</td>
<td colspan="2"> **Atmega32u4 pins**
</td>
<td>
</td></tr>
<tr>
<td> **Name**
</td>
<td> **IO function**
</td>
<td> **Alternate use**
</td>
<td> **#**
</td>
<td> **IO Pin**
</td>
<td> **code example(s)**
</td>
<td> **Name (**interrupts in red**)**
</td>
<td> **#**
</td>
<td> **Notes**
</td></tr>
<tr>
<td> Red LED
</td>
<td> Rx
</td>
<td>
</td>
<td> -
</td>
<td> **17**
</td>
<td> PinMode(17, OUTPUT); digitalWrite(17, HIGH);
</td>
<td> PB0(SS/**PCINT0**)
</td>
<td> 8
</td>
<td> Serial port uploading code
</td></tr>
<tr>
<td> Green LED
</td>
<td> Tx
</td>
<td>
</td>
<td> -
</td>
<td> **11**
</td>
<td> PinMode(11, OUTPUT); digitalWrite(11, HIGH);
</td>
<td> PB7(**PCINT7**/OC0A/OC1C/!RTS)
</td>
<td> 12
</td></tr>
<tr>
<td> Wake
</td>
<td>
</td>
<td>
</td>
<td> -
</td>
<td> **10**
</td>
<td> Have not yet connected and validated this!
</td>
<td> PB^/A10/D10
</td>
<td> 30
</td>
<td> On board switch – you need super soldering skills to access this!
</td></tr></table>

Note: Reset switch is connected to Atmega32u4 Reset pin 13 via a diode – so no access to the 32u4 IO pin AT THE RESET SWITCH!

##  The BIG Table of Xadow modules and the IO bus pin use for each module.

Why such a big complicated table? Well it brings together all of the IO information in one place, but more importantly it lets you see which IO pins are still available once you have selected several Xadow modules! Also the schematic has different FFC pin numbers to the rest of the wiki documentation!

Notes:-

1. Remember that IIC devices are daisy chained – that is they can connect in parallel, so you can have more than one IIC device connected to the same pins!

2. Need more IO pins? You may be able to use ONE pin for several different uses, the same way the vibration motor and buzzer are sharing one pin, or in some situations you can use the same pin for different purposes at DIFFERENT TIMES. For example you might set a pin as output to trigger an ultrasonic sensor, then change the pin to input to detect when the signal is received!

3. Most IIC modules {except the Main Board module, LED, RTC}, ALSO have IIC breakout pins.

So items in purple in the IIC SCL &amp; IIC SDA columns do NOT also have breakout pins!

4. ** Additional details highlighted in yellow in center of table document the **ADDITIONAL** breakout pins on each Xadow module!

5. ? = Don't know, or not yet verified!

<table>
<tr>
<td>
</td>
<td>
</td>
<td> <center>SCK</center>
</td>
<td> <center>MOSI</center>
</td>
<td> <center>MISO</center>
</td>
<td> <center>A5</center>
</td>
<td> <center>3</center>
</td>
<td> <center>2</center>
</td>
<td> <center>1</center>
</td>
<td> <center>0</center>
</td>
<td> **Arduino Pin name**
</td></tr>
<tr>
<td>
</td>
<td> **Interrupts in red--------&gt;**
</td>
<td> PB1**(PCINT1**/SCLK)
</td>
<td> PB2(PDI/**PCINT2**/MOSI)
</td>
<td> PB3(PDO/**PCINT3**/MISO)
</td>
<td> PF0(ADC0)
</td>
<td> PD0(OC0B/SCL/INT0)
</td>
<td> PD1(SDA/**INT1**)
</td>
<td> PD2(RXD/**INT2**)
</td>
<td> PD3(TXD/**INT3**)
</td>
<td> Atmega32u4 pin Name
</td></tr>
<tr>
<td> <center>**IIC = I2C**</center>
</td>
<td>
</td>
<td> 9
</td>
<td> 10
</td>
<td> 11
</td>
<td> 41
</td>
<td> 18
</td>
<td> 19
</td>
<td> 20
</td>
<td> 21
</td>
<td> Atmega32u4 pin#
</td></tr>
<tr>
<td>
</td>
<td>
</td>
<td> P1, 1
</td>
<td> P2, 2
</td>
<td> P3, 3
</td>
<td> P4, 4
</td>
<td> P5, 9
</td>
<td> P6, 10
</td>
<td> P7, 11
</td>
<td> P8,12
</td>
<td> FFC pin Name, #
</td></tr>
<tr>
<td> **Xadow Modules **
</td>
<td> **Module Control Mode &amp; Address**
</td>
<td> <center>Digital Pin </center>
</td>
<td> <center>Digital Pin </center>
</td>
<td> <center>Digital Pin </center>
</td>
<td> <center>**Analog or **Digital Pin </center>
</td>
<td> <center>**IIC SCL**</center>
</td>
<td> <center>**IIC SDA**</center>
</td>
<td> <center>**Serial Rxd**</center>
</td>
<td> <center>**Serial Txd**</center>
</td>
<td> **Xadow Pin function**
</td></tr>
<tr>
<td> <center>3-Axis Accelerometer </center>
</td>
<td> <center>IIC 0x53</center>
</td>
<td> SCK
</td>
<td> MOSI
</td>
<td> MISO
</td>
<td> <center>A5</center>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td> Rxd
</td>
<td> TxD
</td>
<td>
</td></tr>
<tr>
<td> <center>BaroMeter </center>
</td>
<td> <center>IIC 0x77</center>
</td>
<td> SCK
</td>
<td> MOSI
</td>
<td> MISO
</td>
<td> <center>A5</center>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td> Rxd
</td>
<td> TxD
</td>
<td>
</td></tr>
<tr>
<td> <center>BLE Slave </center>
</td>
<td> <center>Serial </center>
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
</td>
<td>
</td>
<td colspan="2"> <center>RX/TX </center>
</td>
<td> Plus pads specific to BLE on rear
</td></tr>
<tr>
<td> <center>Breakout </center>
</td>
<td> <center>None!</center>
</td>
<td> SCK
</td>
<td> MOSI
</td>
<td> MISO
</td>
<td> <center>A5</center>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td> Rxd
</td>
<td> TxD
</td>
<td> + Grove I2C &amp; Serial sockets
</td></tr>
<tr>
<td> <center>LED Controller </center>
</td>
<td> <center>IIC 0x04</center>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> <center>OLED </center>
</td>
<td> <center>IIC 0x3C</center>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> <center>Vibration Motor </center>
</td>
<td> <center>Digital Signal </center>
</td>
<td>
</td>
<td> <center>H </center>
</td>
<td>
</td>
<td> <center>H </center>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td> _**Disconnect module BEFORE using ISP**_
</td></tr>
<tr>
<td> <center>RTC </center>
</td>
<td> <center>IIC 0x68</center>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td>
</td>
<td>
</td>
<td> rear pad connect INTB – Int0???
</td></tr>
<tr>
<td> <center>Buzzer </center>
</td>
<td> <center>Digital Signal </center>
</td>
<td> <center>H </center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>H </center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> _**Disconnect module BEFORE using ISP**_
</td></tr>
<tr>
<td> <center>Digital Compass </center>
</td>
<td> <center>IIC 0x1E</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td>
</td></tr>
<tr>
<td> <center>Motor </center>
</td>
<td> <center>TBD </center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td>
</td></tr>
<tr>
<td> <center>GPS </center>
</td>
<td> <center>Serial </center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td colspan="2"> <center>RX/TX </center>
</td>
<td>
</td></tr>
<tr>
<td> <center>Storage </center>
</td>
<td> <center>IIC 0x50 &amp; 0x51</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td> <center>?</center>
</td>
<td>
</td></tr>
<tr>
<td> <center>**Main Board**</center>
</td>
<td> <center>?IIC master =0x00?</center>
</td>
<td> ISP – SCK
</td>
<td> ISP MOSI
</td>
<td> ISP MISO
</td>
<td>
</td>
<td> <center>SCL</center>
</td>
<td> <center>SDA</center>
</td>
<td>
</td>
<td>
</td>
<td> All via SMD pads on rear.
</td></tr></table>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>