---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Bluetooth Bee v2.0
category: Wireless
bzurl: https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html
oldwikiname:  Bluetooth Bee v2.0
prodimagename: 113050014%201_02.jpg
surveyurl: https://www.research.net/r/Bluetooth_Bee_v2
sku:  113050014
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee is an easy to use Bluetooth SPP module compatible with existing Xbee sockets, designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It even has the smallest footprint  as small as 12.7mmx27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

##   Features
---
###   Hardware Features

*   Typical -80dBm sensitivity.

*   Up to +4dBm RF transmit power.

*   Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation.

*   Low Power 1.8V Operation, 1.8 to 3.6V I/O.

*   PIO control.

*   UART interface with programmable baud rate.

*   Integrated PCB antenna.

*   Bee compatible headers.

###   Software Features

*   Default Baud rate: 38400, Data bits:8, Stop bit:1,Parity:No parity, Data control: has.

*   Supported baud rate: 9600,19200,38400,57600,115200,230400,460800.

*   Use CTS and RTS to control the data stream.

*   When a rising pulse is detected in PIO0, device will be disconnected.

*   Status instruction port PIO1: low-disconnected, high-connected;

*   PIO10 is connected to red led, PIO11 is connected to green led. When master and slave are paired, red and green led blinks 1time / 2s in interval, while disconnected only green led blinks 2 times/ s.

*   Auto-connect the last device on power as default.

*   Permit matched device connect by default.

*   Default PINCODE:0000.

*   Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.

!!!Cautions
    The supply voltage of this module is 3.3V, higher than this may cause permanent damage to the device.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|
###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   Factory default setting:

    *   Name: HMSoft;

        *   Baud: 9600, N, 8, 1;

        *   Pin code: 1234;

        *   transmit Version.

*   AT Command format:
    *   Uppercase AT command format. string format, without any other symbol. (e.g. \r or \n).

        *   Any incorrect command would be no response.

###   AT Commands

**1. Test Command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT
</td>
<td width="300"> OK
</td>
<td width="300"> None
</td></tr></table>

**2. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BAUD?
</td>
<td width="300"> OK+Set:[para1]
</td>
<td rowspan="2" width="300"> Para1: Baud rate No.

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>Default: 4(9600)

</td></tr>
<tr>
<td width="300"> AT+BAUD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**3. Query/Set Parity bit**

<table >
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
</td></tr></table>

**4. Query/Set Stop bit**

<table >
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
</td></tr></table>

**5. Query/Set Baud rate, parity bit, stop bit**

<table >
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
</td></tr></table>

**6. Module self check command**

<table >
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
</td></tr></table>

**8. Query module temperature command**

<table >
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
</td></tr></table>

**10. Query/Set PIO0 function (System KEY)**

<table >
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
---
name: Breakout for LinkIt Smart 7688
category: LinkIt
bzurl: https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html
oldwikiname:   Breakout for LinkIt Smart 7688
prodimagename:  Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg
surveyurl: https://www.research.net/r/Breakout_for_LinkIt_Smart_7688
sku:   103100002
---

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

**Breakout for LinkIt Smart 7688** is a Grove port integrated expansion board for LinkItTM Smart 7688 development board. This breakout board will save a lot of work and makes prototyping easier through simplified wiring. It will assist a beginner to get started fast. It supports serial buses like  I2C, UART. It comes with USB, Ethernet and 3.5mm Audio ports.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

##  Features
---
*   Grove interface makes wiring easier and allows expansions with Grove modules.

*   USB host

*   Audio Output

*   Ethernet port

*   Cost-effective.

##  Application ideas
---
*   IoT/Gateway Device.

*   Robotics

*   Smart multimedia devices

*   Teaching and learning

##  Specification
---
<table>
<tr>
<td> Input voltage </td>
<td> 5.0V(With USB Power port)
</td></tr>
<tr>
<td> Operating voltage </td>
<td> 3.3V
</td></tr>
<tr>
<td colspan="2"> Debug pins, Ethernet pins and USB type-A host pins conect with MT7688, Ohter pins connect with ATmega32U4.
</td></tr></table>

##  Hardware Overview
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Grove interface**

Connect rich [Grove](/Grove_System) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules.

!!!note
    **Note** that we will add the function of audio recording for this board in next version of this product.


This section will show those senior customers how to add recording funtion to this board.

1.Download the schematic file at bottom of this page. Open the file named **Breakout for LinkIt Smart7688 v1.0 brd.pdf**, and find the section **MIC Input**. Remove following components inductor L6 and capacitor C21. This will added recording function to this board. **Note** this way only works as you use LinkIt Smart 7688 firmware version 0.9.3 and above.


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/To_use_recording_function_on_version_1.0.png)



2.For beginner, we recommend that you buy Breakout for LinkIt Smart 7688 v2.0 at [bazaar](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142).


###  **Parts list**

<table>
<tr>
<th>Parts name   </th>
<th> Quantity
</th></tr>
<tr>
<td> Breakout for LinkIt Smart 7688 </td>
<td> 1PCS
</td></tr></table>

##  Get started

###  Material required

*   LinkIt Smart 7688 × 1

*   USB cable(type A to micro type-B) × 2

*   USB to Serial adapter × 1

*   Jumper wires × 3

*   Stereo(with 3.5 mm audio cable) × 1

*   USB flash driver(with audio file of MP3 format inside) × 1

###  Play music

1.Refer [here](/LinkIt_Smart_7688#Getting_Started) to connect your LinkIt Smart 7688 to internet.


!!!Note
    - You can plug jumper wires to MT7688 UART2 port instead soldering them to Pin 8, Pin 9 and Pin GND.
    - In rare cases, you might not connect to internet successfully, reboot the embedded OS.

2.Open a console with USB to Serial  adapter.

3.Connect all parts like follows:


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4.Enter folder of USB by type **cd /Media/USB-A1** in console.

5.Play music with utility **Madplay**(installed on OpenWRT) by typing **madplay filename.mp3** into console.

6.Now you will hear the music.
</dd></dl>


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


##  Resources

*   [Schematic files](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

*   [LinkIt smart 7688](/LinkIt_Smart_7688)

*   [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

*   [Link](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142) to buy a LinkIt Smart 7688.

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>