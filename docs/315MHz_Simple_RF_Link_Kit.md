---
name: 315MHz Simple RF Link Kit
category: MakerPro
bzurl: https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140
oldwikiname:  315MHz Simple RF Link Kit
prodimagename:  315M_433M.jpg
surveyurl: https://www.research.net/r/315MHz_Simple_RF_Link_Kit
sku:      113020001
---
![](https://github.com/SeeedDocument/315MHz_Simple_RF_Link_Kit/raw/master/img/315M_433M.jpg)

This kit is used for one way wireless communication at a frequency of 315MHz and includes a transmitter module and a receiver module. The Grove configuration of this kit allows for around 40 meters of transmitting distance indoors, or around 100 meters outside.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

##   Features
---
*   GROVE compatible interface.

*   Uses ASK (Amplitude Shift Keying) Modulation.

*   One way communication

##  Specification

###  Transmitter Module

<table  cellspacing="0" width="80%">
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
<th scope="row"> Working Voltage
</th>
<td> 3.0
</td>
<td> 5.0
</td>
<td> 12.0
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Current
</th>
<td> 3
</td>
<td> /
</td>
<td> 10
</td>
<td> mA
</td></tr>
<tr>
<th scope="row">Work Mode
</th>
<td colspan="3"> ASK
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Transmit Power(Max)
</th>
<td colspan="3"> 15
</td>
<td> mW
</td></tr>
<tr>
<th scope="row"> Working Distance
</th>
<td> 40
</td>
<td> /
</td>
<td> 100
</td>
<td> m
</td></tr></table>

###  Receiver Module

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Working Voltage
</th>
<td> 5
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current
</th>
<td> 5
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Receiver Sensitivity
</th>
<td> -103
</td>
<td> dBm
</td></tr>
<tr>
<th scope="row"> Operating frequency
</th>
<td> 315
</td>
<td> MHz
</td></tr></table>

##   Application Ideas

*   Remote control

*   Remote automation

*   Alarm

##   Usage

The transmitter and receiver modules both rely on a single wire for communication. Though using the UART supplied by the Arduino platform can work, it is recommended, instead, to use the VirtualWire library which uses Amplitude Shift Keying for modulation which provides better communication.

Both the transmitter and receiver modules require three wires: Vcc, Ground, and signal. Both of pin 2 parts of the kit are not connected.

*   Connect the Transmitter module to Digital I/O 2 of the [Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield") on the Arduino being used for transmission.
Grove-433MHz_Simple_RF_Link_Kit
*   Connect the Receiver module to Digital I/O 2 of the [Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield") on the receiving Arduino.

**Note:** The hardware installation can refer to [the usage of the module Grove - 433MHz Simple RF Link Kit](/Grove-433MHz_Simple_RF_Link_Kit "Grove-433MHz_Simple_RF_Link_Kit").

*   Download the [File: VirtualWire library](https://github.com/SeeedDocument/315MHz_Simple_RF_Link_Kit/raw/master/res/VirtualWire_Library.zip) and unzip it into the libraries file of Arduino IDE by the path: ..\arduino-1.0\libraries. Please reference [here](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
*   Upload the below code for transmitter module:
```
#include <VirtualWire.h>

//Grove - 315(433) RF link kit Demo v1.0
//by :http://www.seeedstudio.com/
//connect the sent module to D2 to use
#include <VirtualWire.h>

int RF_TX_PIN = 2;

void setup()
{
    vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
    vw_setup(2000); // Transmission speed in bits per second.
}

void loop()
{
    const char *msg = "hello";
    vw_send((uint8_t *)msg, strlen(msg));  // Send 'hello' every 400ms.
    delay(400);

}
```

*   Upload the below code for receiver module:
```
//Grove - 315(433) RF link kit Demo v1.0
//by :http://www.seeedstudio.com/
//connect the receive module to D2 to use ..
#include <VirtualWire.h>

int RF_RX_PIN = 2;

void setup()
{
    Serial.begin(9600);
    Serial.println("setup");
    vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
    vw_setup(2000); // Transmission speed in bits per second.
    vw_rx_start(); // Start the PLL receiver.
}

void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;
    if(vw_get_message(buf, &buflen)) // non-blocking I/O
    {
        int i;
        // Message with a good checksum received, dump HEX
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
            Serial.print(buf[i], HEX);
            Serial.print(" ");
            //Serial.print(buf[i]);
        }
        Serial.println("");
    }
}
```

*   Open the serial monitor of receiver module to see the result.

![](https://github.com/SeeedDocument/315MHz_Simple_RF_Link_Kit/raw/master/img/Receive_Data.jpg)

This is just a simple transmitter and receiver instance as a reference.

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
<td width="300px"> v0.9b
</td>
<td width="500px"> Initial public release
</td>
<td width="200px"> 03,Oct,2011
</td></tr></table>

##   Resources

*   [File:VirtualWire Library.zip](https://github.com/SeeedDocument/315MHz_Simple_RF_Link_Kit/raw/master/res/VirtualWire_Library.zip)

*   [File:315MHz_demo.zip](https://github.com/SeeedDocument/315MHz_Simple_RF_Link_Kit/raw/master/res/315MHz_Demo.zip)

*   [VirtualWire Documentation](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>