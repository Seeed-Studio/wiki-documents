---
description: Bluetooth Bee v2.0
title: Bluetooth Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
sku: 113050013
type: gettingstarted
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

## Features

---

### Hardware Features

- Typical -80dBm sensitivity.

- Up to +4dBm RF transmit power.

- Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

- Low Power 1.8V Operation, 1.8 to 3.6V I/O.

- PIO control.

- UART interface with programmable baud rate.

- Integrated PCB antenna.

- Bee compatible headers.

### Software Features

- Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

- Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

- Use CTS and RTS to control the data stream.

- When a rising pulse is detected in PIO0, device will be disconnected.

- Status instruction port PIO1: low-disconnected, high-connected;

- PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

- Auto-connect the last device on power as default.

- Permit matched device connect by default.

- Default PINCODE:0000.

- Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

:::caution
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.
c;;;

## Hardware Installation

---

### Connecting Bluetooth to PC through Uart Bee

<!-- The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider. -->

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|

### Connecting Bluetooth to Arduino

<!-- Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus). -->

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

## Software Instruction

---

### Conventions

- Factory default setting:

  - Name: HMSoft;

    - Baud: 9600, N, 8, 1;

    - Pin code: 1234;

    - transmit Version.

- AT Command format:
  - Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

    - Any incorrect command would be no response.

### AT Commands(to be continued...)

**1. Test Command**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK</td>
<td width="300">None</td>
</tr>
</table>

**2. Query/Set baud rate**

<!-- <table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+BAUD?</td>
<td width="300">OK+Set:[para1]</td>
<td rowspan="2" width="300">Para1: Baud rate No.

<dl>1---------1200</dl>
<dl>2---------2400</dl>
<dl>3---------4800</dl>
<dl>4---------9600</dl>
<dl>5---------19200</dl>
<dl>6---------38400</dl>
<dl>7---------57600</dl>
<dl>8---------115200</dl>
<dl>9---------230400</dl>
<dl>A---------460800</dl>
<dl>B---------921600</dl>
<dl>C---------1382400</dl>

Default: 4(9600)
</td>
</tr>
<tr>
<td width="300">AT+BAUD[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table> -->

**3. Query/Set Parity bit**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Query: AT+CHK?
</td>
<td width="300"> OK+CHK:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0:None

<dl>1:ODD

<dl>2:EVEN

<dl>Default: 0 (None)

</td></tr>
<tr>
<td width="300"> Set: AT+CHK[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**4. Query/Set Stop bit**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+STOP?
</td>
<td width="300"> OK+STOP:[para1]
</td>
<td rowspan="2" width="300"> Para1:1, 2

<dl>1: One stop bit

<dl>2: Two stop bit

<dl>Default: 1 (One stop bit)

</td></tr>
<tr>
<td width="300"> AT+STOP[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**5. Query/Set Baud rate, parity bit, stop bit**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+UART?
</td>
<td width="300"> OK+UART:[para1],[para2],[para3]
</td>
<td rowspan="2" width="300"> Para1: Baud rate

<dl>Value: 1~C

<dl>Default: 4(9600)

<dl>Para2: Parity bit

<dl>Value: 0,1,2

<dl>Default: 0 (None)

<dl>Para3: Stop Bit

<dl>Value: 1, 2

<dl>Default: 1(One Bit)

</td></tr>
<tr>
<td width="300"> AT+UART[para1][para2][para3]
</td>
<td width="300"> OK+Set:[para1] [para2] [para3]
</td></tr></table> -->

**6. Module self check command**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+SECH?
</td>
<td width="300"> OK+SECH:OKAY or

OK+SECH:FAIL

</td>
<td width="300"> None
</td></tr></table>

**7. Module application sectors check command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+APCH?
</td>
<td width="300"> OK+APCH:OKAY or

OK+APCH:FAIL

</td>
<td width="300"> None
</td></tr></table> -->

**8. Query module temperature command**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TEMP?
</td>
<td width="300"> OK+TEMP:[temp value]
</td>
<td width="300"> None
</td></tr></table>

**9. Query/Set module discoverable status**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+DISC?
</td>
<td width="300"> OK+DISC:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0: discoverable and connectable

<dl>1: only discoverable not connectable

<dl>2: only connectable

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+DISC [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**10. Query/Set PIO0 function (System KEY)**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+KEY?
</td>
<td width="300"> OK+KEY:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: Cancel current status.

<dl>1: Cancel current status and restore factory setup.

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+ KEY[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**11. Query/Set PIO1 output status (System LED)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LED?
</td>
<td width="300"> OK+LED:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0:Unconnected Output 500ms High 500ms Low, Connected output High.

<dl>1:Unconnected output Low, Connected output High.

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+ LED [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**12. Query/Set module PIO Pins output status**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIO?
</td>
<td width="300"> OK+PIO:[para1]
</td>
<td rowspan="2" width="300"> Para1: Length 10, every bit value is 1 or 0.

<dl>0: output low; 1:output high

<dl>Default: 0000000000

</td></tr>
<tr>
<td width="300"> AT+PIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**13. Query/Set PIO pins output high or low**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIO[para1]?
</td>
<td width="300"> OK+PIO:[para1][para2]
</td>
<td rowspan="2" width="300"> Para1: 2~B Para2: 0, 1

<dl>Para1 is which PIO pin you want to Query/Set Value:2,3,4,5,6,7,8,9,A,B.

<dl>Para2 is Query or setup value. 0 is low and 1 is high

</td></tr>
<tr>
<td width="300"> AT+PIO[para1][para2]
</td>
<td width="300"> OK+Set:[para1][para2]
</td></tr></table>

**14. Query/Set Module name**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+NAME?
</td>
<td width="300"> OK+NAME[para1]
</td>
<td rowspan="2" width="300"> Para1: module name,Max length is 12.

Default: HMSoft

</td></tr>
<tr>
<td width="300"> AT+NAME[para1]
</td>
<td width="300"> OK+Set[para1]
</td></tr></table>

**15. Restore all setup value to factory setup**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+DEFAULT
</td>
<td width="300"> OK+DEFAULT
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**16. Restart module**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RESTART
</td>
<td width="300"> OK+RESTART
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**17.Query/Set Master and Slaver Role**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+ROLE?
</td>
<td width="300"> OK+ROLE:[para1]
</td>
<td rowspan="2" width="300"> Para1: M, S

<dl>M: Master

<dl>S: Slaver

<dl>Default: S

</td></tr>
<tr>
<td width="300"> AT+ROLE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**18. Query/Set Pin Code**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIN?
</td>
<td width="300"> OK+PIN:[para1]
</td>
<td rowspan="2" width="300"> Para1 is Pin Code, Max length is 12, Allow A~Z, a~z, 0~9

Default: 1234

</td></tr>
<tr>
<td width="300"> AT+PIN[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**19. Clear Connected device address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+CLEAR
</td>
<td width="300"> OK+CLEAR
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**20. Scan slave device**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+SCAN?
</td>
<td width="300"> OK+SCANS

OK+SCAN[MAC]

……………

OK+SCANE

</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**21. Connect to a slave device MAC address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LNK[para1]
</td>
<td width="300"> OK+CONNS(start conn)

<dl>OK+CONN(conn ok)

<dl>OK+CONNF(conn failed)

</td>
<td rowspan="2" width="300"> Para1 is MAC Address string.
</td></tr></table>

**22.Query Software Version**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+VERSION

AT+VERSION?

</td>
<td width="300"> Version Information
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**23.System Help Information**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+HELP?
</td>
<td width="300"> Help Information
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**24. Query Last Connected Device Address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RADD?
</td>
<td width="300"> OK+ADDR:MAC Address
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**25. Query module address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LADD?

<dl>AT+ADDR?

</td>
<td width="300"> OK+LADD:MAC Address
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**26. Query/Set Module work type**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+IMME?
</td>
<td width="300"> OOK+IMME:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: When module is powered on, only respond the AT Command, don't do anything. until AT + WORK is received

<dl>1: When power on, work immediately

<dl>Default: 1

</td></tr>
<tr>
<td width="300"> AT+IMME[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Work immediately**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**28. Query/Set module connect remote device timeout value**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TCON?
</td>
<td width="300"> OK+TCON:[para1]
</td>
<td rowspan="2" width="300"> Para1 is timeout value. when time is up module will not connect this address anymore, then enter search mode.

<dl>Para1 allowed value: 0000~9999 Unit is second.

<dl>Default: 0000 Connect forever

</td></tr>
<tr>
<td width="300"> AT+TCON[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Work immediately**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**29 .Query/Set Module Work Mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TYPE?
</td>
<td width="300"> OK+TYPE:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0~2

<dl>0:Transmission Mode

<dl>1:Remote Control Mode

<dl>2:PIO Collection Mode
Default: 0

</td></tr>
<tr>
<td width="300"> AT+TYPE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**30. Query/Set report PIO states string delay time(unit ms)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TPIO?
</td>
<td width="300"> OK+TPIO:[para1]
</td>
<td rowspan="2" width="300"> Para1 value is between 0000 and 9999 ms If value >0, when PIO states is changed, module will send PIO states string to remote device delay this value.

<dl>Default: 0 send once

</td></tr>
<tr>
<td width="300"> AT+TPIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**31. Switch Remote Control Mode to Transmission Mode(Only this time)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+START
</td>
<td width="300"> OK+START
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**32. Query/Set Buffer save parameter**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BUFF?
</td>
<td width="300"> OK+BUFF:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+BUFF[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Para1: 0~1

<dl>0: Not save

<dl>1:Save

<dl>Default: 0

</td></tr></table>

**33. Query/Set Search Filter**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+FILT?
</td>
<td width="300"> OK+FILT:[para1]
</td>
<td rowspan="2" width="300"> Para1: Allow Type

<dl>Value: 0~C

<dl>Default: C (All)

</td></tr>
<tr>
<td width="300"> AT+FILT[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**34. Query/Set Module Notification**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+NOTI?
</td>
<td width="300"> OK+NOTI:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+NOTI[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Par1 value is 0, 1.

<dl>0: Don't notify(default)

<dl>1:Notify when connected or disconnected

</td></tr></table>

**35.Query/Set Module Class Of Device**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+COD?
</td>
<td width="300"> OK+COD:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+COD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Par1 is COD value.

<dl>Value: 0000~0xFFFF

<dl>Default: 0x1F00 (unknown device)

</td></tr></table> -->

## Programming

### Configure the Bluetooth module with Serial Port under Windows

This section shows how to configure Bluetooth with PC, some basic methods of setting could be learn.

Set up hardware connection refer to "Hardware Installation" section. You will find the blue LED on the module flashes illustrate no connection is set up.
