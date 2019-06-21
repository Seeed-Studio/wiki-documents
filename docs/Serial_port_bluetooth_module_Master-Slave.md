---
name: Serial port bluetooth module(Master/Slave)‏‎
category: Discontinued
bzurl:
oldwikiname: Serial_port_bluetooth_module_(Master/Slave)‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Serial_port_bluetooth_module__Master-Slave
sku:
tags:

---

![](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/img/newblue_LRG.jpg)

This module is an easy to use Bluetooth SPP (Serial Port Protocol) module, designed for transparent wireless serial connections.

The Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR (Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband. It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature). It has a footprint as small as 12.7mmx27mm. Hopefully it will simplify your overall design/development cycle.

**Model: [WLS123A1M](http://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)**



##   Features  

###   Hardware features  

*   Typical -80dBm sensitivity
*   Up to +4dBm RF transmit power
*   Low Power 1.8V Operation ,1.8 to 3.6V I/O
*   PIO control
*   UART interface with programmable baud rate
*   Integrated antenna
*   Edge connector

###   Software features  

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: yes. Supported baud rate:

9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control data stream.
*   Given a rising pulse in PIO0, device will be disconnected.
*   Status instruction port PIO1: low-disconnected, high-connected;
*   PIO10 and PIO11 can be connected to red and blue LED separately. When master and slave are paired, red

and blue led blinks 1time/2s in interval. While disconnected only blue led blinks 2times/s.

*   Auto-connects to the last device on power as default.
*   Permits pairing device to connect as default.
*   Auto-pairing PINCODE:”0000” as default
*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

##   Application Ideas  

*   Remote controller
*   Wireless communication

##   Cautions  

<font color="red">
</font>

*   While using with Seeeduino / Arduino, set the operation voltage to 5V. Else use a proper logic level converter.
*   While using with UartSBee, set the operation voltage to 5V
*   Command to change baud rate is persistent even after reset. Hence remember the baud rate for next use.

##   Specification  

![](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/img/Bluetooth-module-pin.JPG)

<table >
<tr>
<th> Pin
</th>
<th> #
</th>
<th> Pad Type
</th>
<th> Description
</th></tr>
<tr>
<td width="100px"> PIO11
</td>
<td width="100px"> 34
</td>
<td width="350px"> Bi-Direction
</td>
<td width="450px"> Programmable input/output line
</td></tr>
<tr>
<td> PIO10
</td>
<td> 33
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO9
</td>
<td> 32
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO8
</td>
<td> 31
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO7
</td>
<td> 30
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO6
</td>
<td> 29
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO5
</td>
<td> 28
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO4
</td>
<td> 27
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO3
</td>
<td> 26
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO32
</td>
<td> 25
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PIO1
</td>
<td> 24
</td>
<td> Bi-Direction TX EN
</td>
<td> Programmable input/output line, control output for PA(if fitted)
</td></tr>
<tr>
<td> PIO0
</td>
<td> 23
</td>
<td> Bi-Direction RX EN
</td>
<td> Programmable input/output line, control output for LNA(if fitted)
</td></tr>
<tr>
<td> GND
</td>
<td> 13,21,22
</td>
<td> VSS
</td>
<td> Ground pot
</td></tr>
<tr>
<td> USB±
</td>
<td> 15,20
</td>
<td> Bi-Directional
</td>
<td>
</td></tr>
<tr>
<td> SPI_CLK
</td>
<td> 19
</td>
<td> CMOS input with weak internal pull-down
</td>
<td> Serial peripheral interface clock
</td></tr>
<tr>
<td> SPI_MISO
</td>
<td> 18
</td>
<td> CMOS input with weak internal pull-down
</td>
<td> Serial peripheral interface data Output
</td></tr>
<tr>
<td> SPI_MOSI
</td>
<td> 17
</td>
<td> CMOS input with weak internal pull-down
</td>
<td> Serial peripheral interface data input
</td></tr>
<tr>
<td> SPI_CSB
</td>
<td> 16
</td>
<td> CMOS input with weak internal pull-up
</td>
<td> Chip select for serial peripheral interface,active low
</td></tr>
<tr>
<td> NC
</td>
<td> 14
</td>
<td>
</td>
<td>
</td></tr>
<tr>
<td> 3.3VCC
</td>
<td> 12
</td>
<td> 3.3V
</td>
<td> Integrated 3.3V(+)supply with on-chip linear regulator output within 3.15-3.3V
</td></tr>
<tr>
<td> RESETB
</td>
<td> 11
</td>
<td> CMOS input with weak internal pull-up
</td>
<td> Reset if low. input debouncde so must be low for&gt;5MS to cause a reset
</td></tr>
<tr>
<td> AIO1
</td>
<td> 10
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> AIO0
</td>
<td> 9
</td>
<td> Bi-Direction
</td>
<td> Programmable input/output line
</td></tr>
<tr>
<td> PCM_SYNC
</td>
<td> 8
</td>
<td> Bi-Direction
</td>
<td> Synchronous PCM data strobe
</td></tr>
<tr>
<td> PCM_IN
</td>
<td> 7
</td>
<td> CMOS Input
</td>
<td> Synchronous PCM data input
</td></tr>
<tr>
<td> PCM_OUT
</td>
<td> 6
</td>
<td> CMOS output
</td>
<td> Synchronous PCM data output
</td></tr>
<tr>
<td> PCM_CLK
</td>
<td> 5
</td>
<td> Bi-Direction
</td>
<td> Synchronous PCM data clock
</td></tr>
<tr>
<td> UART_RTS
</td>
<td> 4
</td>
<td> CMOS output tri-stable with weak internal pull-up
</td>
<td> UART request to send, active low
</td></tr>
<tr>
<td> UART_CTS
</td>
<td> 3
</td>
<td> CMOS input with weak internal pull-down
</td>
<td> UART Data input
</td></tr>
<tr>
<td> UART_RX
</td>
<td> 2
</td>
<td> CMOS output,tri-stable with weak internal pull-down
</td>
<td> UART Data input
</td></tr>
<tr>
<td> UART_TX
</td>
<td> 1
</td>
<td> CMOS output,tri-stable with weak internal pull-up
</td>
<td> UART Data output
</td></tr></table>

##   Software Instruction  

####   Working Sketch Map  

![](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/img/Bluetooth-1.jpg)

####   Flowchat  

![](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/img/Bluetooth-2.jpg)

####   Commands to change default configuration  

**1. Set working MODE**

<table>
<tr>
<td width="200px"> \r\n+STWMOD=0\r\n
</td>
<td width="400px"> Set device working mode as client (slave). Save and Rest.
</td></tr>
<tr>
<td> \r\n+STWMOD=1\r\n
</td>
<td> Set device working mode as server (master). Save and Rest.
</td></tr></table>

**Note:** **\r\n** is necessary for operation and the value of are **0x0D 0x0A** in Hex. **\r** and **\n** represent **carriage-return** and **line-feed**(or next line),

**2.Set BAUDRATE**

<table>
<tr>
<td width="200px"> \r\n+STBD=115200\r\n
</td>
<td width="400px"> Set baudrate 115200. Save and Rest.
</td></tr>
<tr>
<td colspan="2"> Supported baudrate: 9600, 19200,38400,57600,115200,230400,460800.
</td></tr></table>

**3. Set Device NAME**

<table>
<tr>
<td width="200px"> \r\n+STNA=abcdefg
</td>
<td width="400px"> Set device name as “abcdefg”. Save and Rest.
</td></tr></table>

**4. Auto-connect the last paired device on power**

<table>
<tr>
<td width="200px"> \r\n+STAUTO=0\r\n
</td>
<td width="400px"> Auto-connect forbidden. Save and Rest.
</td></tr>
<tr>
<td width="200px"> \r\n+STAUTO=1\r\n
</td>
<td width="400px"> Permit Auto-connect. Save and Rest.
</td></tr></table>

**5. Permit Paired device to connect me**

<table>
<tr>
<td width="200px"> \r\n+STOAUT=0\r\n
</td>
<td width="400px"> Forbidden. Save and Rest.
</td></tr>
<tr>
<td width="200px"> \r\n+STOAUT=1\r\n
</td>
<td width="400px"> Permit. Save and Rest.
</td></tr></table>

**6. Set PINCODE**

<table>
<tr>
<td width="200px"> \r\n +STPIN=2222\r\n
</td>
<td width="400px"> Set pincode “2222”, Save and Rest.
</td></tr></table>

**7. Delete PINCODE(input PINCODE by MCU)**

<table>
<tr>
<td width="200px"> \r\n+DLPIN\r\n
</td>
<td width="400px"> Delete pincode. Save and Rest.
</td></tr></table>

**8. Read local ADDRESS CODE**

<table>
<tr>
<td width="200px"> \r\n+RTADDR\r\n
</td>
<td width="400px"> Return address of the device.
</td></tr></table>

**9. Auto-reconnecting when master device is beyond the valid range (slave device will auto-reconnect in 30 min when it is beyond the valid range)**

<table>
<tr>
<td width="200px"> \r\n+LOSSRECONN=0\r\n
</td>
<td width="400px"> Forbid auto-reconnecting.
</td></tr>
<tr>
<td width="200px"> \r\n+LOSSRECONN=1\r\n
</td>
<td width="400px"> Permit auto-reconnecting.
</td></tr></table>

####   Commands for Normal Operation:  

**1. Inquire**

<table>
<tr>
<td colspan="2" width="600px"> **a) Master**
</td></tr>
<tr>
<td width="200px"> \r\n+INQ=0\r\n
</td>
<td width="400px"> Stop Inquiring
</td></tr>
<tr>
<td> \r\n+INQ=1\r\n
</td>
<td> Begin/Restart Inquiring
</td></tr>
<tr>
<td colspan="2" width="600px"> **b) Slave**
</td></tr>
<tr>
<td> \r\n+INQ=0\r\n
</td>
<td> Disable been inquired
</td></tr>
<tr>
<td> \r\n+INQ=1\r\n
</td>
<td> Enable been inquired
</td></tr></table>

When **+INQ=1** command is successful, the <span style="color:red"> red </span> and <span style="color:green">green</span> LEDS blink alternatively.

**2. Bluetooth module returns inquiring result**

<table>
<tr>
<td width="250px"> \r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n
</td>
<td width="500px"> Serial Bluetooth device with the address “aa,bb,cc,dd,ee,ff” and the name “name” is inquired
</td></tr></table>

**3. Connect device**

<table>
<tr>
<td width="250px"> \r\n+CONN=aa,bb,cc,dd,ee,ff\r\n
</td>
<td width="500px"> Connect to a device with address of "aa,bb,cc,dd,ee,ff”
</td></tr></table>

**4. Bluetooth module requests inputting PINCODE**

\r\n+INPIN\r\n

**5. Input PINCODE**

<table>
<tr>
<td colspan="2"> \r\n+RTPIN=code\r\n
</td></tr>
<tr>
<td> Example: RTPIN=0000
</td>
<td> Input PINCODE which is four zero
</td></tr></table>

**6. Disconnect device** Pulling PIO0 high will disconnect current working Bluetooth device.

**7. Return status** \r\n+BTSTA:**xx**\r\n
 **xx** status:

*   0 - Initializing
*   1 - Ready
*   2 - Inquiring
*   3 - Connecting
*   4 - Connected

(**Note:** This is not a command, but the information returned from the module after every command)  

##   Additional Idea  

*   [How to set PC connect with Serial Bluetooth Grove](http://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

*   [Set up connections between two Bluetooth modules step by step](http://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

##   Resources  

- **[Software]**   [Software instruction](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/res/Bluetooth_Software_Instruction.pdf)

- **[Datasheet]**  [Bluetooth module Datasheet](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/res/Bluetooth_module.pdf)

##   Support  

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   How to buy  

Click here to buy: [Serial port bluetooth module (Master/Slave)](http://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)

##   See Also  

*   [Grove - Serial Bluetooth](http://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

*   [Bluetooth Bee - Standalone](http://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)

*   [Bluetooth Shield](http://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=132_134)

*   [Bluetooth Bee](http://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

##   Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

##   External Links  

Links to external webpages which provide more application ideas, documents/datasheet or software libraries

##  Related Projects

If you want to make some awesome projects by Serial port bluetooth module, here's some projects for reference.

###  Control Multiple servo Motor From android app

![](https://github.com/SeeedDocument/Serial_port_bluetooth_module_Master-Slave/raw/master/img/Control_Multiple_servo_Motor_From_android_app.jpg)

This is an interesting demo make by Arduino and [Grove](https://seeeddoc.github.io/Grove_System/).
This is a complete tutorial about how to control multiple servo motors from android app.

[<font color="#FF0000">**I want to make it.**</font>](http://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)

###   Share Your Awesome Projects with Us

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this , the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist and engineers,

as long as you start sharing your works with others,

you are being part of the open source community and you are making your contributions .

Now share you awesome projects on with us on [Recipe](http://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.

*   Core Users, are those who showing high interests and significant contributions in Seeed products.
*   We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improving the product performance and user experience. And for most of cases if our Core Users have any good ideas for making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

<font color="#FF0000">Get more information about Core User please email to: recipe@seeed.cc</font>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>