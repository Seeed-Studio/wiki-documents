---
name: Grove - 433MHz Simple RF Link Kit
category: Communication
bzurl: https://seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html
oldwikiname: Grove_-_433MHz_Simple_RF_Link_Kit
prodimagename: 433MHz_Simple_RF.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/433MHz RF kit.jpg
surveyurl: https://www.research.net/r/Grove-433MHz_Simple_RF_Link_Kit
sku: 113060000
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/img/433MHz_Simple_RF.jpg)

This kit is used for one way wireless communication at a frequency of 433MHz and includes a transmitter module and a receiver module. The twig configuration of this kit allows for around 40 meters of transmitting distance indoors, or around 100 meters outside.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)

Version Tracker
---------------

| Revision | Description            | Release     |
|----------|------------------------|-------------|
| v0.9b    | Initial public release | 03,Oct,2011 |

Features
--------

-   GROVE compatible interface.
-   Uses ASK (Amplitude Shift Keying) Modulation.
-   One way communication.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Specifications
-------------

### Transmitter Module

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Working Voltage
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
12.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td>
3
</td>
<td>
/
</td>
<td>
10
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Work Mode
</th>
<td colspan="3">
ASK
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Transmit Power(Max)
</th>
<td colspan="3">
15
</td>
<td>
mW
</td>
</tr>
<tr align="center">
<th scope="row">
Working Distance
</th>
<td>
40
</td>
<td>
/
</td>
<td>
100
</td>
<td>
m
</td>
</tr>
</table>

### Receiver Module

| Item                 | Typical | Unit |
|----------------------|---------|------|
| Working Voltage      | 5       | VDC  |
| Quiescent Current    | 5       | mA   |
| Receiver Sensitivity | -105    | dBm  |
| Operating frequency  | 433.92  | MHz  |

Application Ideas
-----------------

-   Remote control
-   Remote automation
-   Alarm

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

Getting Started
---------------

The transmitter and receiver modules both rely on a single wire for communication. Though using the UART supplied by the Arduino platform can work, it is recommended, instead, to use the VirtualWire library which uses Amplitude Shift Keying for modulation which provides better communication.

Both the transmitter and receiver modules require three wires: Vcc, Ground, and signal. Pin 2 of both parts of the kit are not connected.

-   Connect the Transmitter module to Digital I/O 2 of the [Grove-Base Shield V2](/Base_Shield_V2 "Grove - Base Shield") on the Arduino being used for transmission.

Error creating thumbnail: Invalid thumbnail parameters

-   Connect the Receiver module to Digital I/O 2 of the [Grove-Base Shield V2](/Base_Shield_V2 "Grove - Base Shield") on the receiving Arduino.

Error creating thumbnail: Invalid thumbnail parameters

-   Download the [VirtualWire library](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/res/VirtualWire_Library.zip) and unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0\\libraries. Please reference [here](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
-   Upload the code below for transmitter module:

```
    #include <VirtualWire.h>

    //Grove - 315(433) RF link kit Demo v1.0
    //by :http://www.seeedstudio.com/
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

-   Upload the code below for receiver module:

```
    //Grove - 315(433) RF link kit Demo v1.0
    //by :http://www.seeedstudio.com/
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

-   Open the serial monitor of receiver module to see the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/img/Receive_Data.jpg)

This is just a simple transmitter and receiver instance as a reference.

Resources
---------

-   [VirtualWire Library.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/res/VirtualWire_Library.zip)
-   [433MHz\_demo.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/res/315MHz_Demo.zip)
-   [VirtualWire Documentation](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
-   [TI:LM358PSR](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/res/1110010P1.pdf)
-   [R433A Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-433MHz_Simple_RF_Link_Kit/master/res/ADI;ACTR433A.pdf)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_433MHz_Simple_RF_Link_Kit -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>