---
name: BLE (dual) Bee v1.0
category: Wireless
bzurl: https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html
oldwikiname:  BLE (dual) Bee v1.0
prodimagename: Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg
surveyurl: https://www.research.net/r/BLE_dual_Bee_v1
sku:  113050013
---
![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg)

BLE (dual) Bee v1.0 uses CSR dual mode Bluetooth chip,with the ARM architecture single chip which supports AT instructions, Users can develop flexibly according to the serial baud rate, equipment name, pairing password.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html)

##   Features
---
- BT Version: Bluetooth Specification V4.0 &amp; BLE

- UART send and receive max bytes is 512

- Other device to module in SPP mode: 90 Bytes per packet

- Other device to module in BLE mode: 20 Bytes per packet

- Two data transmission mode, balance mode and high speed mode

- Working frequency: 2.4GHz ISM band

- Modulation method: GFSK(Gaussian Frequency Shift Keying)

- RF Power: -23dbm, -6dbm, 0dbm, 6dbm.

- Speed: Asynchronous: 3K Bytes

- Synchronous: 3K Bytes

- Security: Authentication and encryption

- Service: Slave SPP, Peripheral BLE, UUID FFE0,FFE1

- Power: +3.3VDC 50mA

- Long range: SPP 30 meters, BLE 60 meters

- Power: SPP 13.5mA, BLE 9.5mA

- Working temperature:–5 ~ +65 Centigrade

##   Specification
---
![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/BLE-dual-Bee_v1.0.png)

- **U1**:U1 is the wireless module,It includes automatic power on reset circuit.

- **D3**:The led display two work models:
sleeping whit It slowly flashing;connected status whit It continuously lighting.

- **JP1&amp;JP3**:The standard Bee connector.

##   Cautions
---
The supply voltage of this module is 2.5V ~ 3.7V, higher than this may cause permanent damage to the device.BLE transmission speed is slower than SPP transmission, so we selected the lower one in the design, in accordance with the speed of a BLE dual-mode product planning.

##   Hardware Installation
---
###   Connecting Bluetooth to PC through Uart Bee

The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider.

|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/Editing_BLE-dual-Bee_v1.0_ConnectToPC.jpg)|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/Editing_BLE-dual-Bee_v1.0_ConnectToPCSet.jpg)
|---|---|

###   Connecting Bluetooth to Arduino

Here we use [XBee Shield](/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/Seeeduino_Lotus).

Since the hardware UART of Seeedino was used as debug with PC, We choose D2 and D3 to simulate software UART to communicate with Bluetooth. please refer to the jumper setting on below picture

|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduino.jpg)|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduinoSet.jpg)
|---|---|

##   Software Instruction
---
###   Conventions

*   In EDR mode, only slave can be configured while either master or slave can be in BLE mode.
*   Factory default setting:

        *   EDR Name HMSoft, Slave role, PinCode 1234
    *   BLE Name HMSoft, Slave role, PinCode 000000
    *   Baud: 115200, N, 8, 1;

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
<td width="300"> OK/ER/Disconnect link
</td>
<td width="300"> None
</td></tr></table>

If module is not connected to remote device will receive: “OK”

If module has an error, will receive: “ER”

If Module has connected, module will disconnected from remote device, if “AT + NOTI” is setup to 1, will receive information string

**2. Query module EDR address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+ADDE?
</td>
<td width="300"> OK+ Get: MAC
</td>
<td width="300"> None
</td></tr></table>

**3. Query module BLE address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+ADDB?
</td>
<td width="300"> OK+ Get: MAC
</td>
<td width="300"> None
</td></tr></table>

**4. Query/Set Authentication mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+AUTH?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0 – Not authentication

1 – Must authentication

</td></tr>
<tr>
<td width="300"> S: AT+AUTH[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

AT+AUTH0: allow made an insecure connection.

AT+AUTH1: every connection must with authentication.

**5. Query/Set A to B mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+ATOB?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0 – Not Open ATOB

1 – Open ATOB mode

</td></tr>
<tr>
<td width="300"> S: AT+ATOB[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

This command must work with AT+MODE0 command. When A device (SPP mode) connect to the module and B device (BLE mode) is also connect to the module, The data string from A device send to the module will send to B device. The data string from B device send to the module is also send to the A device.

**6. Query/Set baud rate**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+BAUD?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 1~7, (Default: 6).

1 - 4800

2 – 9600

3 – 19200

4 – 38400

5 – 57600

6 – 115200

7 - 230400

</td></tr>
<tr>
<td width="300"> S: AT+BAUD[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**7. Clear bond information**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BONDE
</td>
<td width="300"> OK+BONDE
</td>
<td width="300"> Clear EDR bond info
</td></tr>
<tr>
<td width="300"> AT+BONDB
</td>
<td width="300"> OK+BONDB
</td>
<td width="300"> Clear BLE bond info
</td></tr></table>

BLE mode not supports it yet.

**8. Clear Last Connected EDR Device Address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+CLEAE
</td>
<td width="300"> OK+CLEAE
</td>
<td width="300"> None
</td></tr></table>

**9. Clear Last Connected BLE Device Address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+CLEAB
</td>
<td width="300"> OK+CLEAB
</td>
<td width="300"> None
</td></tr></table>

**10. Query/Set Module DUAL Work Mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+DUAL?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0 – Allow dual connect.

1 – Allow one connect.

</td></tr>
<tr>
<td width="300"> S: AT+DUAL[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

AT+DUAL0: allow two connections at same time (SPP and BLE).

AT+DUAL1: Only allow one connection at same time (SPP or BLE)

**11. Query/Set hardware flow control switch**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+FIOW?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1,(Default: 0)

0: Hardware flow control off

1: Hardware flow control on

</td></tr>
<tr>
<td width="300"> AT+FIOW[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**12. Query/Set module data transmission speed mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+HIGH?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1,(Default: 0)

0: Balance mode

1: High speed mode

</td></tr>
<tr>
<td width="300"> AT+HIGH[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

In balance mode, we balanced SPP and BLE with a steady speed.

In high speed mode, we don’t control speed, so SPP mode will got high speed.

In high speed mode, module lost RESETB pin function, but you still could use

“AT+RESET” command to reset module.

**13. System Help Information**

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
<td width="300"> None
</td></tr></table>

**14. Query/Set module loaded notify**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+INIT?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1,?, (Default: 0)

0: Loaded notify 0ff

1: Loaded notify on

</td></tr>
<tr>
<td width="300"> AT+INIT[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

When “AT+INIT1” is setup, after module loaded, module will output “OK+INIT” string through UART.

**15. Query/Set Module Work Mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+MODE?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0 – Data transmission.

1 – Remote control.

</td></tr>
<tr>
<td width="300"> S: AT+MODE[P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

AT+MODE0: Only transfer data when connection establishment.

AT+MODE1: Transfer data and response AT commands.

**16. Query/Set Notify information**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+NOTI?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0: Don’t Notify

1: Notify

</td></tr>
<tr>
<td width="300"> S: AT+NOTI[P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

After AT+NOTI1, module will send connect or disconnect string through

UART when module state is change:

OK+CONE ======== EDR connect

OK+LSTE ========= EDR disconnect

OK+CONB========= BLE connect

OK+LSTB ========= BLE disconnect

OK+LSTA ========= except disconnect, module will reset after 500 ms.

**17. Query/Set notify mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+NOTP?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1; default: 0

0: without address

1: with address

</td></tr>
<tr>
<td width="300"> Q: AT+NOTP[P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

This command must work with “AT+NOTI1”, if this switch is open, when the module connect to disconnect, the prompt string will include the remote address.

**18. Query/Set Module EDR name**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+NAME?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: module EDR name,

Max length is 12.

Default: HMSoft

</td></tr>
<tr>
<td width="300"> Q: AT+NAME[P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

**19. Query/Set Module BLE name**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+NAMB?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: module BLE name,

Max length is 12.

Default: HMSoft

</td></tr>
<tr>
<td width="300"> S: AT+NAMB[P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

**20. Query/Set PIO1 output status (System LED)e**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+PIO1?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1

0: Unconnected Output 500ms High 500ms Low, Connected output High.

1: Unconnected output Low, Connected output High.

Default: 0

</td></tr>
<tr>
<td width="300"> S: AT+ PIO1 [P1]
</td>
<td width="300"> OK+ Set:[ P1]
</td></tr></table>

**21. Query/Set PIO output status**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+PIO[P1]?
</td>
<td width="300"> OK+ Get:[P1][P2]
</td>
<td rowspan="2" width="300"> P1: 2~B (HM-12)

P2: 2~3 (HM-13)

0: Output Low

1: Output High

?: Query

</td></tr>
<tr>
<td width="300"> S: AT+ PIO[P1][P2]
</td>
<td width="300"> OK+ Set:[P1][P2]
</td></tr></table>

**22. Query/Set EDR Pin Code**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+PINE?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: module EDR Code

Max length: 6

Default: 1234

</td></tr>
<tr>
<td width="300"> S: AT+PINE[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**23. Query/Set BLE Pin Code**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+PINB?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: module BLE Code

000000~999999

Default: 000000

</td></tr>
<tr>
<td width="300"> S: AT+PINB[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**24. Query/Set UART parity bit**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+PARI?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, 2, (Default: 0)

0: Parity None

1: Parity even

2: Parity odd

</td></tr>
<tr>
<td width="300"> S: AT+PARI[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**25. Restore all setup value to factory setup**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RENEW
</td>
<td width="300"> OK+RENEW
</td>
<td width="300"> None
</td></tr></table>

**26. Restart module**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RESET
</td>
<td width="300"> OK+RESET
</td>
<td width="300"> None
</td></tr></table>

**27. Query BLE RSSI value**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RSSB?
</td>
<td width="300"> OK+RSSB: [P1]
</td>
<td width="300"> P1: RSSI value

9999: No connection

9998: Try later

9997: Read error

Xxxx: RSSI value

</td></tr></table>

This command must use after “AT+MODE1” is setup.
This command is only used by remote Bluetooth device.
**28. Query EDR RSSI value**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RSSE?
</td>
<td width="300"> OK+RSSE: [P1]
</td>
<td width="300"> P1: RSSI value

9999: No connection

9998: Try later

9997: Read error

Xxxx: RSSI value

</td></tr></table>

**29. Query Last Connected EDR Device Address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RADE?
</td>
<td width="300"> OK+Get:MAC Address
</td>
<td width="300"> None
</td></tr></table>

**30. Query Last Connected BLE Device Address**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RADB?
</td>
<td width="300"> OK+Get:MAC Address
</td>
<td width="300"> None
</td></tr></table>

**31. Query/Set Master and Slaver Role**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+ROLB?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1 (default: 0)

0: Peripheral

1: Central

</td></tr>
<tr>
<td width="300"> AT+ROLB[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

This command will take effect after module next power on or reset.
**32. Query/Set EDR work mode**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+SCAN?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0: Discovery and connectable

1: Only connectable

</td></tr>
<tr>
<td width="300"> S: AT+SCAN[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**33. Query/Set UART stop bit**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Q: AT+STOP?
</td>
<td width="300"> OK+ Get:[P1]
</td>
<td rowspan="2" width="300"> P1: 0, 1, (Default: 0)

0: 1 stop bit

1: 2 stop bits

</td></tr>
<tr>
<td width="300"> S: AT+STOP[P1]
</td>
<td width="300"> OK+ Set:[P1]
</td></tr></table>

**34. Query Software Version**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+VERR?

AT+VERS?

</td>
<td width="300"> Version Information
</td>
<td width="300"> None
</td></tr></table>

##   Programming
---
###   Configure the Bluetooth module with Serial under Windows

This section shows how to configure Bluetooth with PC, some basic methods of setting could be learn.
Set up hardware connection refer to “Hardware Installation” section. You will find the blue LED on the module flashes illustrate no connection is set up.

Open a serial terminal and set Baud Rate:115200, Databits: 8, Stopbits: 1 and No Flow Control. Send “AT” to Bluetooth with the serial terminal and “OK” will be return if all goes well. The Bluetooth only respond AT commands when no connection was set up, or all commands were seen as string and sent out. You can distinguish the status through LED indicates.

![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-AT.png)

Then some useful configurations could be sent. Here’s are some samples of commands and response.

1. Test serial connection, send “AT”, will return “OK”.

2. Restore factory settings, send “AT+RENEW”, return “OK+RENEW”.

3. Reset baud rate of serial port, send “AT+BAUD2”, return “OK+Set:2”.

4. Enable authentication, send “AT+AUTH1”, return “OK+Set:1”.

5. Reset the Bluetooth, send “AT+RESET”, return ”OK+RESET”.

6. Query firmware version, send “AT+VERS?”, return “OK+Get:HMSoftV217”.

7. Query MAC of EDR, send “AT+ADDE?”, return “OK+Get:000E0E002074”.

8. Query MAC of BLE, send “AT+ADDB?”, return “OK+Get:000E0B002074”.

9. Set the name of EDR, send “AT+NAMEHM-13-EDR”, return “OK+Set:HM-13-EDR”.

10. Set the name of BLE, send “AT+NAMEHM-13-BLE”, return “OK+Set:HM-13-BLE”.

11. Set the password of EDR, send “AT+PINE123451”, return “OK+Set:123451”.

12. Set the password of BLE, send “AT+PINB123451”, return “OK+Set:123451”.

13. Enable discovery and connectable, send “AT+SCAN0”, return “OK+Set:0”.

14. Enable notify information of connection, send “AT+NOTI1”, return “OK+Set:1”.

15. Notify information include address, send “AT+NOTP1”, return “OK+Set:1”.

16. Enable user key, send “AT+PIO01”, return “OK+Set:1”.

17. Set to Central mode, send “AT+ROLB1”, return “AT+ROLB1”.

Or Set to Peripheral mode, send “AT+ROLB0”, return “AT+ROLB0”.

We use two Bluetooth connected with PC, one was set as Central while the other is Peripheral. Several seconds later they find each other and the LED stop flash, connected!

###   Communicate with iPhone

This kind of Bluetooth module has two protocol: Bluetooth EDR(Enhanced Data Rate) and Bluetooth Low Energy. It can communicate with any device has one of these protocols. Some Android phone with OS higher than 4.3 and iPhone4 or later have BLE ability. We use a iPhone to demonstrate how to use a cellphone to interact with Bluetooth.

Power the Bluetooth and configure it as Peripheral role. Search LightBlue in Apple Store and install it. Launch the app, you may find “HM-13-BLE” which we just renamed. Touch it to connect, then touch “Properties” to control it. The key “Hex” on the top right is for change data format, maybe String is easy to see. Hit “Listen for notifications” to enable data receiving. Then we can send data to PC through BLE, hit “Write new value” and write some words. Also PC can transfer data to iPhone with serial terminal.

|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-IMG_0108.PNG)|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-IMG_0109.PNG)|
|---|---|
|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-IMG_0111.PNG)|![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-IMG_0114.PNG)|

![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-DialogWithIOS.png)

###   Data transmission between Two Arduinos

Are you ready to code? It’s time to do something after practice. Prepare a pair of Bluetooth, and Arduino or other platform to control them. Here we use two Arduino Uno.
Set up the connection as mentioned in section “Hardware Installation”.

The program of Central and Peripheral use the same code, the only difference is the micro define at the beginning of the program. To assign the Bluetooth to Central role, Just need to modify the text to “#define MASTER 1”, or “#define MASTER 1” if Peripheral role was assigned.

The initialization program flow please refer to the following flow chart. First of all we need to distinguish the presetting baud rate of the Bluetooth. After this, send commands to restore factory settings, and change baud rate from 115200 to 9600 since software serial will not working well at high baud rate. Then other parameters were configured to the Bluetooth with Reset command in the final.

![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-Init-flowchat.png)

After the initialization, the Central and Peripheral will do different things, the Central will send message to Peripheral interval and print what received from Peripheral while the Peripheral only responds the Central.

Click [here](https://github.com/Seeed-Studio/HM-13_SW) to download the test code and open HM-13_SW.ino with Arduino IDE, compile and download to Arduino Uno. Remember to configure the Bluetooth to different role by modify the macro at the beginning. If you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help.

After downloading program, open two serial terminal windows, the LEDs on Bluetooth will flash, several seconds later, they stop to flash and keep on, this indicates that they connected to each other. According to the program is written, the Central sends message to the Peripheral continually and get feedback every time.

![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-Debug_Output_Master.png)
![](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/img/HM-13-Debug_Output_Slave.png)

##   Resources
---
*   [HM-13 Bluetooth Datasheet](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/res/Bluetooth_HM-13_en.pdf)

*   [Arduino code](https://github.com/Seeed-Studio/HM-13_SW)

*   [Eagle_BLE(dual)_Bee_V1.0_sch_pcb](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/res/BLE-dual-Bee_V1.0_sch_pcb.zip)

*   [PDF_BLE(dual)_bee_v1.0](https://github.com/SeeedDocument/BLE_dual_Bee_v1.0/raw/master/res/BLE-dual-bee_v1.0.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>