---
name: Bluetooth V4.0 HM-11 BLE Module
category: MakerPro
bzurl: https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html
oldwikiname:  Bluetooth V4.0 HM-11 BLE Module
prodimagename:  HM-11%20BLE%20Module.jpg
surveyurl: https://www.research.net/r/Bluetooth_V4_HM_11_BLE_Module
sku:     317030001
---
![](https://github.com/SeeedDocument/Bluetooth_V4.0_HM_11_BLE_Module/raw/master/img/HM-11%20BLE%20Module.jpg)

This is a SMD BLE module used in our BLE Bee and Xadow BLE. It is based on TI CC2541 chip, enables robust network nodes to be built with low total bill-of-material costs and highly suited for ultralow power consumption systems. The module is small and easy to use, with the preprogrammed firmware of manufacturer, you could quickly build BLE communications via its AT command. Supporting BLE communications with iphone, ipad and Android 4.3.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html)

##     Features
---
*   Bluetooth protocol: Bluetooth Specification V4.0 BLE

*   Working frequency: 2.4 GHz ISM band

*   Interface way: a serial port

*   Open environment within 30 meters can realize communication between modules

*   To send and receive no byte limit between modules

*   Modulation method: GFSK (Gaussian Frequency Shift Keying)

*   Transmission power: - DBM, 23-6 DBM, 0 DBM, 6 DBM, can be modified by the AT command

*   use TI CC2541 chip, configuration space of 256 KB, support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate, name of equipment, matching parameters such as passwords, use agile.

*   power supply: + 3.3 VDC 50 mA

*   working temperature: - 5 ~ + 65 Centigrade

##   Specification
---
<table>
<tr>
<th> Specification
</th>
<th> Value
</th></tr>
<tr>
<td width="200px"> Microprocessor
</td>
<td width="200px"> CC2541
</td></tr>
<tr>
<td> Resources
</td>
<td> Support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate,name of equipment,Matching parameters such as password, the use of flexible.
</td></tr>
<tr>
<td> Outline Dimension
</td>
<td> 13.5mm x 18.5mm x 2.3mm
</td></tr>
<tr>
<td> Power supply
</td>
<td> 3.3V
</td></tr>
<tr>
<td> Communication Protocol
</td>
<td> Uart(3.3V LVTTL)
</td></tr>
<tr>
<td> IO counts
</td>
<td> 2
</td></tr>
<tr>
<td> Key input IO
</td>
<td> 1
</td></tr>
<tr>
<td> LED Indicators IO
</td>
<td> 1
</td></tr>
<tr>
<td> Connectivity
</td>
<td> Socket compatible with XBee
</td></tr></table>

##     Electrical Characteristics
---
<table >
<tr>
<th> Specification
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
<td width="400px"> Max Input Voltage
</td>
<td width="150px"> -0.3
</td>
<td width="150px">
</td>
<td width="150px"> 3.6
</td>
<td width="150px"> V
</td></tr>
<tr>
<td> Working Input Voltage
</td>
<td> 2.0
</td>
<td> 3.3
</td>
<td> 3.6
</td>
<td> V
</td></tr>
<tr>
<td> Transmit Current
</td>
<td>
</td>
<td> 15
</td>
<td>
</td>
<td> mA
</td></tr>
<tr>
<td> Receive Current
</td>
<td>
</td>
<td> 8.5
</td>
<td>
</td>
<td> mA
</td></tr>
<tr>
<td> Deep Sleep Current
</td>
<td>
</td>
<td> 600
</td>
<td>
</td>
<td> uA
</td></tr>
<tr>
<td> Operating Temperature
</td>
<td> -40
</td>
<td>
</td>
<td> +65
</td>
<td> °C
</td></tr></table>

##     Pin definition
---
![](https://github.com/SeeedDocument/Bluetooth_V4.0_HM_11_BLE_Module/raw/master/img/HM-11_Pinout.jpg)

<table >
<tr>
<th> Pin
</th>
<th> Name
</th>
<th> Description
</th></tr>
<tr>
<td width="100px"> 1
</td>
<td width="200px"> UART_RTS
</td>
<td width="350px"> UART
</td></tr>
<tr>
<td> 2
</td>
<td> UART_TX
</td>
<td> UART
</td></tr>
<tr>
<td> 3
</td>
<td> UART_CTS
</td>
<td> UART
</td></tr>
<tr>
<td> 4
</td>
<td> UART_RX
</td>
<td> UART
</td></tr>
<tr>
<td> 5
</td>
<td> NC
</td>
<td>
</td></tr>
<tr>
<td> 6
</td>
<td> NC
</td>
<td>
</td></tr>
<tr>
<td> 7
</td>
<td> NV
</td>
<td>
</td></tr>
<tr>
<td> 8
</td>
<td> NV
</td>
<td>
</td></tr>
<tr>
<td> 9
</td>
<td> VCC
</td>
<td> Power supply 3.3V
</td></tr>
<tr>
<td> 10
</td>
<td> NC
</td>
<td>
</td></tr>
<tr>
<td> 11
</td>
<td> RESETB
</td>
<td> Reset, active low at least in 5ms
</td></tr>
<tr>
<td> 12
</td>
<td> GND
</td>
<td> GND
</td></tr>
<tr>
<td> 13
</td>
<td> PIO3
</td>
<td> IO port, used for connect to DHT11/DS18B20
</td></tr>
<tr>
<td> 14
</td>
<td> PIO2
</td>
<td> Digital input, output
</td></tr>
<tr>
<td> 15
</td>
<td> PIO1
</td>
<td> LED indicator
</td></tr>
<tr>
<td> 16
</td>
<td> PIO0
</td>
<td> Button pin
</td></tr></table>

##    AT commands &amp; Configuration
---
**1）	Query the native MAC address
**
Send: AT+ADDR?

Send after a successful return: OK+LADD: MAC address (address for 12 string)

**2）	Query the baud rate
**
Send: AT+BAUD?

Send after a successful return: OK+Get: [para1]

Scope of para1:0 ~ 8. The parameters corresponding lists as below:

0 -------- 9600<br>
1 -------- 19200<br>
2 -------- 38400<br>
3 -------- 57600<br>
4 -------- 115200<br>
5 -------- 4800<br>
6 -------- 2400<br>
7 -------- 1200<br>
8 -------- 230400<br>
Default: 0(9600)

**3）	Set the baud rate
**
Send: AT+BAUD[para1]

Send after a successful return: OK+Set:[para1]

Example: send: AT + BAUD1, return: OK+Set: 2.The baud rate is set to 19200.

Note: after the switch to the 1200, module will no longer support the configurations of the AT command, and press the PIO0 under standby, module can restore the factory Settings.Do not recommend using the baud rate.After setting the baud rate, modules should be on electricity, anew set parameters can take effect.

**4）	from the device connected to the bluetooth address specified
**
Send: AT+CON[para1]

Send after a successful return: OK+CONN[para2]

Para2 range is: A, E, F

Example: from the bluetooth address is: 0017EA0943AE, sending the AT+CON0017EA0943AE, module returns: OK+CONNA or OK+CONNF CONNE or OK.

**5）	removal equipment matching information
**
Send: AT+CLEAR

Send after a successful return: OK+CLEAR

Clear success had connected device address code information.

**6）	query module working mode
**
Send: AT+MODE?

Send after a successful return: OK+Get: [para]

Para: the range of 0 ~ 2. 0 represents passthrough mode, on behalf of the PIO acquisition + remote control + 1 passthrough, 2 representative passthrough + remote control mode.The default is 0.

**7）	set module working mode:
**
Send: AT+MODE []

Send after a successful return: OK+Set: [para]

**8）	query device name
**
Send: AT+NAME?

Send after a successful return: OK+NAME [para1]

**9）	set the device name
**
Send: AT+NAME [para1]

Send after a successful return: OK+Set: [para1]

Example: Set the device name to Seeed, sending the AT + NAMESeeed, return OK + Set: Seeed AT this time, the name of the bluetooth module has been changed to Seeed.
Note: after the instruction execution, required to electricity, set the parameters of the approval.

**10）	query matching password
**
Send: AT+PASS?

Send after a successful return: OK+PASS: [para1]

Para1 range is 000000 ~ 999999, the default is 000000.

**11）	pairing set password
**
Send the AT+PASS [para1]

Send after a successful return: OK+Set: [para1]

**12）	restore factory Settings
**
The AT+RENEW send

Send after a successful return: OK+RENEW

Restore the default factory Settings module, the module Settings will be reset so, back to the factory with the status of the factory default, delay module 500 ms after the restart.If no need, please be careful.

**13）	module reset
**
Send: AT+RESET

Send after a successful return: OK+RESET

After the instruction execution module will delay 500 ms after the restart.

**14）	set the master-slave mode
**
Send: AT + ROLE [para1]

Send after a successful return: OK+Set: [para1]

##    Example Code
---
//master
```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set master
    mySerial.print("AT+ROLE1");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am master  ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```
//slave
```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set slave
    mySerial.print("AT+ROLE0");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am slave ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

##   Related Projects
---
###  What is Grove-Serial Bluetooth

![](https://github.com/SeeedDocument/Bluetooth_V4.0_HM_11_BLE_Module/raw/master/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg)

Serial Bluetooth is designed for transparent wireless serial connection setup.

Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband.

It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH (Adaptive Frequency Hopping Feature).

###   IR Remote

![](https://github.com/SeeedDocument/Bluetooth_V4.0_HM_11_BLE_Module/raw/master/img/Seeed-recipe-66-20140625115150.jpg)

This project uses Grove - Water Sensor to create a simple but effective solution to watering plants.

With this demo, we can:

*   Integrate all the remote commands into one Android device

*   Talk between Seeeduino and the Android panel via Bluetooth.

*   Remote control via IR

[**I want to make it.**](http://www.seeedstudio.com/recipe/66-ir-remote.html)

[**More Awesome Projects by Bluetooth**](http://www.seeedstudio.com/recipe/index.php?query=bluetooth)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>