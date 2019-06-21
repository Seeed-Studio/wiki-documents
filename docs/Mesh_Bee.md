---
name: Mesh Bee
category: Wireless
bzurl: https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html
oldwikiname: Mesh Bee
prodimagename: Mesh_bee.jpg
surveyurl: https://www.research.net/r/Mesh_Bee
sku:  114990002
---

##  Welcome to MeshBee Wiki
---
This is a community resource, intended to bring together documentation, demo, and links to good sources of information about:

 1. MeshBee firmware architecture;
 2. MeshBee starter guide;
 3. MeshBee use cases and examples;


![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Mesh_bee.jpg)

Mesh Bee is a 2.4GHz wireless transceiver from seeed studio. It's based on NXP's newly JN516x series wireless microcontroller chip and supports ZigBee Pro network stack. The factory firmware wraps the complicated ZigBee stack operation into a few easy to use serial commands, and drives Mesh Bee into a transparent serial communication node that can be part of a simple point-to-point connection or a complex mesh network. Moreover, Mesh Bee is totally open hardware and open sourced, which means that you can customize the firmware on your requirements. You can use JN516x's ARM core to control things and JenOS to simplify your development. The development environment and tools from NXP are all free. Mesh Bee will bring you lots of fun.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html)


##   2. Features
---
*   Range: Indoor/Urban: up to 30m; Outdoor line-of-sight: up to 100m;
*   Receiver Sensitivity: -95dBm
*   Data Transmission Rate: 4800, 9600, 19200, 38400, 57600, 115200 (bps)
*   Working Frequency: unlicensed 2.4GHz band
*   Communication type: Point to Point or Start Network or Mesh Network
*   OTA support: update node's firmware on-the-air
*   Easy-to-Use Serial Interface and rich extendable ports
*   Easy-to-Use AT Command: Setup ZigBee network, Set Serial Baud Rate, etc.
*   Open source Hardware and Firmware
*   Programmable 32-bit RISC CPU: 32M clock, 256KB Flash, 32KB RAM, 4KB EEPROM
*   Socket compatible with the Xbee, so you can plug it into any Xbee socket as a quick replacement.

Note: Mesh Bee will not communicate with Xbee as the ZigBee stack versions they're using are different.

##   3. Specification
---
<table>
<tr>
<th> Specification
</th>
<th> Value
</th></tr>
<tr>
<td width="400px"> Microprocessor
</td>
<td width="600px"> JN5168 (32-bit RISC CPU, 32MHz clock speed)
</td></tr>
<tr>
<td> Resources
</td>
<td> 256kB/32kB/4kB (Flash/RAM/EEPROM)
</td></tr>
<tr>
<td> PCB size
</td>
<td> 24.5mmx30.5mmx0.8mm
</td></tr>
<tr>
<td> Outline Dimension
</td>
<td> 24.5mmx30.5mmx9.77mm
</td></tr>
<tr>
<td> Indicators
</td>
<td> No
</td></tr>
<tr>
<td> Power supply
</td>
<td> 3.3V
</td></tr>
<tr>
<td> IO counts
</td>
<td> 12
</td></tr>
<tr>
<td> ADC input
</td>
<td> 3(2 multiplexing with IO)
</td></tr>
<tr>
<td> Interfaces
</td>
<td> UARTx2, SPI, I2C
</td></tr>
<tr>
<td> Program interface
</td>
<td> UART+MISO
</td></tr>
<tr>
<td> Connectivity
</td>
<td> Socket compatible with XBee
</td></tr>
<tr>
<td> Communication Protocol
</td>
<td> Uart(TTL)
</td></tr>
<tr>
<td> Operating Frequency Band
</td>
<td> 2.4GHz
</td></tr>
<tr>
<td> Stack/Software
</td>
<td> RF4CE, JenNet-IP , ZigBee Pro
</td></tr></table>

###   3.1 Electrical Characteristics

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
<td> 17
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
<td> 0.12
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
<td> 125
</td>
<td> °C
</td></tr></table>

##   4. Pin definition

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Mesh_Bee_Pin.jpg)

<table >
<tr>
<th> Pin
</th>
<th> Alternate Functions
</th>
<th> Type
</th>
<th> Description
</th></tr>
<tr>
<td width="100px"> 3V3
</td>
<td width="200px"> -
</td>
<td width="200px"> Supply input
</td>
<td width="400px"> VCC, +3.3V
</td></tr>
<tr>
<td> TX1
</td>
<td> D14
</td>
<td> Output
</td>
<td> Uart1 Tx port; Digital IO 14
</td></tr>
<tr>
<td> RX1
</td>
<td> D15
</td>
<td> Input
</td>
<td> Uart Rx port; Digital IO 15
</td></tr>
<tr>
<td> DO1
</td>
<td> SPIMISO
</td>
<td> Input/Output
</td>
<td> Digital Output 1; SPI Master In Slave Out Input
</td></tr>
<tr>
<td>  !RST
</td>
<td> -
</td>
<td> Input
</td>
<td> Reset port
</td></tr>
<tr>
<td> D11
</td>
<td> PWM1
</td>
<td> Input/Output
</td>
<td> Digital IO 11 (default usage: RSSI Indicator); PWM1 Output
</td></tr>
<tr>
<td> DO0
</td>
<td> SPICLK
</td>
<td> Output
</td>
<td> Digital Output 0; SPI Master Clock Output
</td></tr>
<tr>
<td> D18
</td>
<td> SPIMOSI
</td>
<td> Input/Output
</td>
<td> Digital IO 18; SPI Master Out Slave In Output
</td></tr>
<tr>
<td> VRef
</td>
<td> ADC2
</td>
<td> Input
</td>
<td> Analogue peripheral reference voltage; ADC input 2
</td></tr>
<tr>
<td> GND
</td>
<td> -
</td>
<td> GND
</td>
<td> GND
</td></tr>
<tr>
<td> TX0
</td>
<td> D6
</td>
<td> Input/Output
</td>
<td> Uart0 Tx port; Digital IO 6
</td></tr>
<tr>
<td> D12
</td>
<td> CTS0
</td>
<td> Input/Output
</td>
<td> Digital IO 12; UART 0 Clear To Send Input
</td></tr>
<tr>
<td> D9
</td>
<td> -
</td>
<td> Input/Output
</td>
<td> Digital IO 9 (default usage: Mesh Bee ON/Sleep Indicator)
</td></tr>
<tr>
<td> RX0
</td>
<td> D7
</td>
<td> Input/Output
</td>
<td> Uart0 Rx port; Digital IO 7
</td></tr>
<tr>
<td> D10
</td>
<td> -
</td>
<td> Input/Output
</td>
<td> Digital IO 10 (default usage: Network Association Indicator)
</td></tr>
<tr>
<td> D13
</td>
<td> RTS0
</td>
<td> Input/Output
</td>
<td> Digital IO 13; UART 0 Request To Send Output
</td></tr>
<tr>
<td> D1
</td>
<td> SPISEL2; ADC4
</td>
<td> Input/Output
</td>
<td> Digital IO 1; SPI Master Select Output 2; ADC input 4
</td></tr>
<tr>
<td> D0
</td>
<td> SPISEL1; ADC3
</td>
<td> Input/Output
</td>
<td> Digital IO 0; SPI Master Select Output 1; ADC input 3
</td></tr>
<tr>
<td> D16
</td>
<td> SCL
</td>
<td> Input/Output
</td>
<td> Digital IO 16; I2C clock
</td></tr>
<tr>
<td> D17
</td>
<td> SDA
</td>
<td> Input/Output
</td>
<td> Digital IO 17; I2C data
</td></tr></table>

Note: Only important alternate functions are listed, may have more, please refer to JN516x data sheet.

Note2: SPI related pins can be used as digital IO only if you know how to disable the external flash driving.

##   5. Usage
---
###   5.1 Hardware Installation

The Mesh Bee has a general Bee socket. So you can use it just like XBee or RFBee etc. One thing to notice is that, the pins are not 100% compatible with each other except for part of them.
If you're newer to Bee series, please follow [this link](/Grove_Cape_for_BeagleBone_Series "Grove_Cape_for_BeagleBone_Series") to learn The Bee Series and [this link](/RFbee_V1.1-Wireless_Arduino_compatible_node#Usage "RFbee V1.1 - Wireless Arduino compatible node") to know how to install Bee with other hardware.

###   5.2 How to update firmware

The default firmware pre-flashed in Mesh Bee is a co-ordinator firmware due to the manufacture and selling inconvenience. You should flash the router / end-device firmware by yourself. And it's simple enough for makers like you.

JN516x has a specific firmware download interface with a UART and some other pins, so you need a **programmer** to flash it. We provide this with [UartSBee v5](/UartSBee_v5 "UartSBee v5"). UartSBee v5 has most of the features of v4 and in addition a programmer for Mesh Bee.

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/UartSBee_V05.jpg)

To update firmware, follow the steps:

- <big>Step 1: Download the latest firmware from github;</big>

  - [Mesh_Bee#9.1_Firmware_Downloads](/Mesh_Bee#9.1_Firmware_Downloads "Mesh Bee")

- <big>Step 2: Configure the UartSBee v5 with FT_Prog;</big>

  - Download FT_Prog: [File:FT Prog v2.8.2.0.zip](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/FT_Prog_v2.8.2.0.zip "File:FT Prog v2.8.2.0.zip") and install. (Windows only)

  - Connect the UartSBee v5 to PC, open FT_Prog and configure it like this:

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/FT_Prog.jpg)

- <big>Step 3: <span style="color:red">Switch the SW1 to "3V3" and SW3 to "Prog" position;</span></big>

- <big>Step 4: Plug the Mesh Bee module into UartSBee v5 ;</big>

- <big>Step 5: Flash firmware with "Jennic Flash Programmer";</big>

Download Jennic Flash Programmer: [File:Jennic flash programmer.zip](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/Jennic_flash_programmer.zip "File:Jennic flash programmer.zip") and unzip. (Windows only)

Open "FlashGUI.exe" -&gt; browser to the firmware bin file

-&gt; select COM port of UartSBee v5 (if not exist, click Refresh button)

-&gt; other selections just like the following picture -&gt; check "Connect"

-&gt; the device information and MAC address will be detected

-&gt; click "Program" button

-&gt; A small tool window will pop up and the downloading progress will be displayed

-&gt; finish.

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Flash_programmer1.jpg)

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Flash_programmer3.png)

###   5.3 AT commands &amp; Configuration

####   5.3.1 AT commands

The Mesh Bee can be configured with AT commands by now. The binary API configuration method may be provided on your needs. So please post your requirements to the [discussion group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group) if you need this feature. We'll make the developing decision based on your voices.

**Download the AT command manual:** [File:AT command manual for Mesh Bee V1.0.pdf](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf "File:AT command manual for Mesh Bee V1.0.pdf")

####   5.3.2 Configuration

The Mesh Bee supports ZigBee Pro standard which can construct a mesh network with a large number of nodes. You may need some ZigBee basics to configure it more effective. But here's a guide of how to form a simple point-to-point network. Everyone can make this without any ZigBee basic knowledge.

<big>Step 1: Get two Mesh Bee modules and a UartSBee v5 ready;</big>

<big>Step 2: Flash the End-Device firmware into one of the two Mesh Bee, please refer to 5.2 How to update firmware;</big>

<big>Step 3: Configure the co-ordinator node;</big>

To configure a Mesh Bee node, you should firstly connect it to PC. There're many ways to do this. If you have a UartSBee v5, it gets greatly easy. Just plug the co-ordinator into UartSBee v5 and  <span style="color:red">switch SW3 to "Uart" side</span>.

In addition, you can use any USB-to-TTL devices. The basic thing is Mesh Bee communicates with outside through UART1(TX1&amp;RX1) and UART1's voltage level is 3.3V. Higher voltage may break down the IO.

After wire connection, open a serial tool, select the COM port and set the band rate to 115200(default).

Send "+++" to turn Mesh Bee into AT command mode. <span style="color:red">Notice that you should configure your serial tool to send the CR character.</span>

Send "ATPA1" command.

Press the reset button of UartSBee v5 to reset Mesh Bee.

Wait until the "ASSOC" led of UartSBee v5 light up. OK, the co-ordinator has finished the formation of ZigBee network. You can send "ATIF" command to view the network information.

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Configure_coo2.png)

Send "ATEX" command to exit AT mode and enter data transmit mode. Now the co-ordinator node is set up.

<big>Step 4: Configure the end-device node;</big>

First, connect to end-device's UART1 with baud rate 115200. Note that if you have only 1 UartSBee v5 and want to configure the end-device with the same one, you should power the co-ordinator on again after it's un-plugged from UartSBee v5. The co-ordinator should always be powered on because it holds the created ZigBee network. If it's down, the network's gone.

Send "+++" to end-device.

-&gt; Then send "ATAJ1" command.

-&gt; Send "ATRS" command

-&gt; Wait a few seconds

-&gt; The "ASSOC" led of UartSBee v5 light up (configure with UartSBee v5).

-&gt; Send "ATIF" command, check out the "PANID" of "3. belonging to" section, if "PANID" isn't 0x0000, then end-device has joined the ZigBee network.

Now send "ATEX" command to exit AT mode.

OK, end-device's well configured.

<big>Step 5: Test the connection;</big>

Connect the two nodes (co-ordinator &amp; end-device) with serial tool. Send data on one side, and check whether the same data's received on the other side.

The connection information will be saved persistently over power off.

###   5.4 OTA guide

Mesh Bee supports updating firmware over-the-air. That is, once you finished the network configuration, the router/end-device's firmware can be updated by OTA.

<big>Step 1: Flash a new firmware into co-ordinator's external flash. </big>

To achieve this step all you should do is very mush similar to [5.2 How to update firmware](/Mesh_Bee#5.2_How_to_update_firmware "Mesh Bee"), the only difference is choosing "External" for "Flash Select".

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Flash_External.jpg)

<big>Step 2: Make sure that the network is correctly configured and nodes can communicate with others.</big>

Configure the network nodes as described [5.3.2_Configuration](/Mesh_Bee#5.3.2_Configuration "Mesh Bee"). Send "ATLA" command to view the nodes on the network.

<big>Step 3: Trigger the OTA process. </big>

Send "ATDAxxxx" command to set the destination address (xxxx is the node's short address whose firmware will be updated)

-&gt; Send "ATOR200" to set ota packet interval to 200ms/packet. Slower will be better.

-&gt; Send "ATOT" to trigger the OTA download process

-&gt; Send "ATOS" to monitor the download processing, or send "ATOA" to abort the download if you want to.

When download is finished, the target node will reboot and the new firmware will take the place. You can send "ATLA" command to confirm the target's FW version.

###   5.5 Example

This example is only compatible with firmware v1.0, for later versions firmware, please refer to the Cook Book which can be downloaded in the Resources section.

This is a simple example about remote control with 2 Mesh Bee nodes.

<big>Step 1: Prepare the materials</big>

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Example0.jpg)

They are:

*   [Seeeduino v3](http://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7) x2

*   XBee shield x2 , version 1/2, picture above shows [XBee Shield v1](http://www.seeedstudio.com/depot/xbee-shield-p-419.html?cPath=73) and [XBee Shield v2](http://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

*   Mesh Bee x2 (pic above shows the prototype version, the release version maybe different in color)

*   UartSBee v5 x1

*   [Rotary Angle](http://www.seeedstudio.com/depot/grove-rotary-angle-sensor-p-770.html?cPath=85_52) x1

*   [Servo](http://www.seeedstudio.com/depot/grove-servo-p-1241.html?cPath=39_41) x1

*   Cables

<big>Step 2: Configure Mesh Bee nodes</big>

Refer to [5.3.2_Configuration](/Mesh_Bee#5.3.2_Configuration "Mesh Bee") to configure a p2p connection.

<big>Step 3: Assembly the Servo side (be controlled) </big>

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Example1.jpg)

Connect servo's signal line(yellow) to Digital 10, red line to VCC and black/brown line to GND

-&gt; Connect "XB_TX" with D0 and connect "XB_RX" with D1 (means using the hardware UART of seeeduino)

-&gt; Plug Mesh Bee (co-ordinator) into XBee shield's Bee socket

-&gt; Don't forget plugging XBee shield onto Seeeduino D:

<big>Step 4: Assembly the control side</big>

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Example2.jpg)

Connect rotary angle's signal line(yellow) to A0, red line to VCC and black line to GND

-&gt; Switch XBee Shield v1's "USB_UART_M..8" switch to right side (M..8) and "D11/12_XBEE_UART" switch to right side (X_RX_X_TX)

-&gt; Plug Mesh Bee (end-device) into XBee shield's Bee socket

-&gt; Plug XBee Shield onto Seeeduino

<big>Step 5: Program</big>

MeshBeeDemo_servo:

```
#include <Servo.h>
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(11, 12); // RX, TX

Servo myservo;  // create servo object to control a servo
// a maximum of eight servo objects can be created

int pos = 0;    // variable to store the servo position
unsigned int sensorValue = 0;  // variable to store the value coming from the sensor
unsigned char cmd;
unsigned int lastSensorValue = 0;

void setup()
{
    Serial.begin(115200);
    //mySerial.begin(9600);
    myservo.attach(10);  // attaches the servo on pin 9 to the servo object

    //config Mesh Bee
    Serial.println("atex");

}


void loop()
{
    if (read_msg(&cmd, &sensorValue))
    {
        if (cmd ==  CMD_POS)
        {

            if (lastSensorValue != sensorValue)
            {
                lastSensorValue = sensorValue;
                //Serial.println(sensorValue);
                pos = map(sensorValue, 0, 1023, 0, 180);
                myservo.write(pos);
            }
        }
    }
    //delay(10);
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

MeshBeeDemo_analogInput:

```
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(10, 11); // RX, TX

int sensorPin = A0;    // select the input pin for the potentiometer
int sensorValue = 0;  // variable to store the value coming from the sensor
int lastSensorValue = 0;

void send_msg(unsigned char cmd, unsigned int msg);
boolean read_msg(unsigned char *cmd, unsigned int *msg);

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(115200);

    Serial.println("+++");
    Serial.println("ATTM1");  //set Mesh Bee into unicast tx mode
    Serial.println("ATDA0000");  //set the unicast address to COO
    Serial.println("ATEX");  //exit the AT command mode

    // set the data rate for the SoftwareSerial port
    //mySerial.begin(9600);
    //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    if (sensorValue != lastSensorValue || 1)
    {
        //Serial.println(sensorValue);
        send_msg(CMD_POS, (unsigned int)sensorValue);
        lastSensorValue = sensorValue;
        delay(50);
    }
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/Example3.gif)

###   5.6 Usage Note

ZigBee is a low-power &amp; low-speed networked transmission protocol. So it's not designed for high speed situation.

The data rate specification of Mesh Bee network with 2~3 nodes:

<table>
<tr>
<th> Transmission Direction </th>
<th> Transmit Method </th>
<th> Packet Period (ms) </th>
<th> Max Packet Length (bytes)
</th></tr>
<tr>
<td> COO/ROU  </td>
<td> Broadcast </td>
<td> 250 </td>
<td> 50
</td></tr>
<tr>
<td> COO/ROU -&gt; END </td>
<td> Unicast </td>
<td> 40 </td>
<td> 50
</td></tr>
<tr>
<td> END  </td>
<td> Broadcast </td>
<td> 150 </td>
<td> 50
</td></tr>
<tr>
<td> END -&gt; COO/ROU </td>
<td> Unicast </td>
<td> 20 </td>
<td> 25
</td></tr>
<tr>
<td> END -&gt; COO/ROU </td>
<td> Unicast </td>
<td> 40 </td>
<td> 50
</td></tr></table>

The data rate will be lower for a bigger network.

##   6. Development

The biggest feature we want to introduce is Mesh Bee supports re-programming. What an excitement having a programmable ZigBee module with such a reasonable price.

Mesh Bee uses the chip named JN5168 with a 32-bit RISC core and rich resources:

*   Flash/RAM/EEPROM: 256kB/32kB/4kB

*   Master SPI port with three select outputs

*   Slave SPI port

*   2x UART’s

*   5x PWM (4x timer &amp; 1x counter)

*   I2C

*   4 channel 10-bit ADC

*   Comparator

*   Battery &amp; temperature sensor

With our UartSBee v5 you can easily re-program Mesh Bee. There's just a little step of learning some NXP documents before playing good.

###   7.1 Software architecture:

This is the software architecture of Mesh Bee.

You can develop a stand-alone application in AUPS. The user application consists of two arduino-style functions at the top level: setup &amp; loop, which act just like arduino's.

We introduced Suli too. Suli means Seeed Unified Library Interface. We'll switch to Suli for our future module driver/library release. That means our suli-compatible library/driver will adapt all platforms that suli supporting. Please glance over [https://github.com/Seeed-Studio/Suli](https://github.com/Seeed-Studio/Suli) for more information.

![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/MeshBeeArchitecture0603.jpg)

###   7.2 Development Environment

NXP provides full-scale development environment, tools and documents. The development environment consists of the SDK toolchain and the ZigBee stack SDK.

Please goto NXP's website to have all these resources with a detailed description page: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

Note: Mesh Bee's factory firmware is developed on top of the Smart Energy profile.

To create the development environment you should download:

*   JN-SW-4041    SDK Toolchain

*   JN-SW-4064    ZigBee Smart Energy SDK

*   JN-SW-4067-JN516x ZigBee Home Automation SDK

and then install them on a <span style="color:red">Windows</span> PC (install JN-SW-4064 after JN-SW-4041).

To edit the .oscfgdiag file and .zpscfg file, you should install the eclipse plugins according to the guide in section 6.2.2 in &lt;[SDK Installation and User Guide.pdf](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/SDK_Installation_and_User_Guide.pdf)&gt;.

Note2: The misfortune is only Windows toolchain is presented now. For linux and Mac users, a Windows VM may be your choice.

###   7.3 Programming Guide

Programming JN5168 needs some base knowledge, so it's hard to explain in a few words. Digging into the official documents maybe is a must.

NXP official resources:

User Guides

*   **JN-UG-3048	&lt;ZigBee PRO Stack User Guide&gt;	Introduces essential ZigBee PRO concepts and details the ZigBee PRO APIs for developing applications.**

*   JN-UG-3059	&lt;ZigBee PRO Smart Energy API User Guide&gt;	Introduces ZigBee Smart Energy (SE) and details the SE API for developing applications.

*   **JN-UG-3075	&lt;JenOS User Guide&gt;	      Details the JenOS APIs used in ZigBee PRO application code to manage OS resources.**

*   JN-UG-3077	&lt;ZigBee Cluster Library User Guide&gt;	Describes the NXP implementation of the ZigBee Cluster Library (ZCL).

Application Notes

*   JN-AN-1135	&lt;Smart Energy HAN Solutions Application Note&gt;	Provides and describes example Smart Energy Home Area Network solutions

Related Documentation

*   **JN-DS-JN516x	&lt;JN516x Datasheet&gt;	Details the JN516x series of micro controllers.**

*   **JN-UG-3087	&lt;JN516x Integrated Peripherals API User Guide&gt;	Details the JN516x Integrated Peripherals API, used in application code to interact with JN516x on-chip peripherals.**

Download page: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

###   7.4 Contribution

[![](https://github.com/SeeedDocument/Mesh_Bee/raw/master/img/MeshBeeFirmwareProject.png)](http://seeed-studio.github.io/Mesh_Bee/)

##   8. Discussion Group

We created a google group for Mesh Bee's general discussion and development related topics. Please follow this link to see what's happening there: [https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)

##   9. Resources

*   [Eagle file for Mesh Bee v1.0](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/Mesh_Bee_v1.0_eagle.zip)

*   [AT command manual for Mesh Bee V1.0](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf)

*   [JN5168 datasheet](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/JN516X.pdf)

*   [Cook Book for v1004](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/MeshBee_Cook_Book.pdf)

*   [User Manual for v1004](https://github.com/SeeedDocument/Mesh_Bee/raw/master/res/MeshBee_User_Manual_v0.3.pdf)

###   9.1 Firmware Downloads

**v1001 (factory firmware, the most stable version so far):**

Co-ordinator's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin)

Router's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin)

End-device's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin)

**v1004**

Co-ordinator's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin)

Router's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin)

End-device's firmware: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin)

**Sync with our development and releases:**

[https://github.com/Seeed-Studio/Mesh_Bee/releases](https://github.com/Seeed-Studio/Mesh_Bee/releases)

**More information about Mesh Bee's firmware:**

*   [Mesh Bee firmware source code on Github](https://github.com/Seeed-Studio/Mesh_Bee)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>