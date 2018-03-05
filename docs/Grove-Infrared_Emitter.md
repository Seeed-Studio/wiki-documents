---
title: Grove - Infrared Emitter
category: Actuator
bzurl: https://seeedstudio.com/Grove-Infrared-Emitter-p-993.html
oldwikiname: Grove_-_Infrared_Emitter
prodimagename: Grove-Infrared_Emitter.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020026 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Emitter
sku: 101020026
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Emitter/master/img/Grove-Infrared_Emitter.jpg)

The Infrared Emitter is used to transmit infrared signals through an infrared LED, while there is an **Infrared receiver** to get the signals on the other side. An infrared LED is like any other LED, with its color centered around 940nm. We can not only use the emitter to transmit data or commands, but also to emulate remotes to control your home appliance using an Arduino. The Infrared Emitter can transmit signals reliable up to 10 meters. Beyond 10 meters, the receiver may not get the signals.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)


Specifications
-------------

-   Voltage: 3.3-5V
-   Distance:10m

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

Demonstration
-------------

The Grove - Infrared Emitter can send data while Grove - Infrared Receiver will receive them.

-   Connect the Grove - Infrared Emitter to D3.
-   Connect the Grove - Infrared Receiver to D2.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Emitter/master/img/IR_SendRev.jpg)

With Arduino/Seeeduino
----------------------

### Suggest Reading for Starter

- [Download Arduino and install Arduino driver](/Download_Arduino_and_install_Arduino_driver)

- [Getting Started with Seeeduino/Arduino](/Getting_Started_with_Seeeduino)

### IRSendRev Library

We have created a library to help you start playing quickly with the Seeeduino/Arduino, in this section we'll show you how to set up the library.

#### Setup

1.  Download the [library code as a zip file](https://github.com/Seeed-Studio/IRSendRev) from the IRSendRev github page.
2.  Unzip the downloaded file into your …/arduino/libraries.
3.  Rename the unzipped folder "IRSendRev"
4.  Start the Arduino IDE (or restart if it is open).

### Infrared Emitter Examples/Applications

These examples are going to show you how to use features of Grove - Infrared Emitter. You can use Grove - Infrared Emitter in combination with Grove - Infrared Receiver. Connect the IR send pins to D3 for this demo.

#### Receiver

<div class="admonition note">
<p class="admonition-title">Note</p>
You need to have a <span style="font-weight:bold">Grove - Infrared Receiver</span>. And upload this demo to the board with Infrared Receiver Grove.
</div>

-   Open File->Examples->IRSendRev->example->recv sketch for a complete example, or copy and paste code below to a new Arduino sketch.

**Description**: 
This example connect the IR receiver pins to D2 for this demo. You can see the remote control's infrared data that received through a serial port terminal, then write the received infrared data into send.ino and upload to the board with Infrared Emitter Grove, so you can send the same data with remote control's button.

**Application**: 
You can note the remote control's infrared data down through Infrared Receiver, then send the same data through Infrared Emitter in some cases, such as open the fan switch when indoor temperature is greater than 26 degrees.

```
#include <IRSendRev.h>
 
#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6
 
const int pinRecv = 2;              // ir receiver connect to D2
 
void setup()
{
    Serial.begin(115200);
    IR.Init(pinRecv);
    Serial.println("init over");
}
 
unsigned char dta[20];
 
void loop()
{
    if(IR.IsDta())                  // get IR data
    {
        IR.Recv(dta);               // receive data to dta
 
        Serial.println("+------------------------------------------------------+");
        Serial.print("LEN = ");
        Serial.println(dta[BIT_LEN]);
        Serial.print("START_H: ");
        Serial.print(dta[BIT_START_H]);
        Serial.print("\tSTART_L: ");
        Serial.println(dta[BIT_START_L]);
 
        Serial.print("DATA_H: ");
        Serial.print(dta[BIT_DATA_H]);
        Serial.print("\tDATA_L: ");
        Serial.println(dta[BIT_DATA_L]);
 
        Serial.print("\r\nDATA_LEN = ");
        Serial.println(dta[BIT_DATA_LEN]);
 
        Serial.print("DATA: ");
        for(int i=0; i<dta[BIT_DATA_LEN]; i++)
        {
            Serial.print("0x");
            Serial.print(dta[i+BIT_DATA], HEX);
            Serial.print("\t");
        }
        Serial.println();
 
        Serial.print("DATA: ");
        for(int i=0; i<dta[BIT_DATA_LEN]; i++)
        {
            Serial.print(dta[i+BIT_DATA], DEC);
            Serial.print("\t");
        }
        Serial.println();
        Serial.println("+------------------------------------------------------+\r\n\r\n");
    }
}
```

-   Upload the code to the development board.
-   Open the serial monitor window and wait for the input.
-   Using IR remote control sending data<font color="Blue">(This example uses MIDEA Company's IR remote control of fans, and press the open/close key.)</font>.
-   You can see the information below.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Emitter/master/img/Data：IR_remote_control_of_fans.jpg)

#### Emitter

-   Open File->Examples->IRSendRev->example->send sketch for a complete example, or copy and paste code below to a new Arduino sketch.

**Description**: 
Connect the IR send pins to D3 for this demo. You can see the remote control's infrared data that received through Infrared Receiver, such as the example above. Then write the received infrared data into this example and upload to the board with Infrared Emitter Grove, so you can send the same data with remote control's button.

**Application**: 
You can note the remote control's infrared data down through Infrared Receiver, then send the same data through Infrared Emitter in some cases, such as open the fan switch when indoor temperature is greater than 26 degrees.

<div class="admonition note">
<p class="admonition-title">Note</p>
You must connect the IR send pins to D3 for this demo.
</div>


```
#include <IRSendRev.h>
 
#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6
 
const int ir_freq = 38;                 // 38k
 
unsigned char dtaSend[20];
 
void dtaInit()
{
    dtaSend[BIT_LEN]        = 11;          // all data that needs to be sent
    dtaSend[BIT_START_H]    = 180;         // the logic high duration of "Start"
    dtaSend[BIT_START_L]    = 91;          // the logic low duration of "Start"
    dtaSend[BIT_DATA_H]     = 11;          // the logic "long" duration in the communication
    dtaSend[BIT_DATA_L]     = 33;          // the logic "short" duration in the communication
 
    dtaSend[BIT_DATA_LEN]   = 6;           // Number of data which will sent. If the number is other, you should increase or reduce dtaSend[BIT_DATA+x].
 
    dtaSend[BIT_DATA+0]     = 128;           // data that will sent
    dtaSend[BIT_DATA+1]     = 127;
    dtaSend[BIT_DATA+2]     = 192;
    dtaSend[BIT_DATA+3]     = 63;
    dtaSend[BIT_DATA+4]     = 192;
    dtaSend[BIT_DATA+5]     = 63;
}
 
void setup()
{
    dtaInit();
}
 
void loop()
{
    IR.Send(dtaSend, 38);
 
    delay(2000);
}
```

Resources
---------

-   [Grove-Infrared Emitter eagle files](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Emitter/master/res/Grove-Infrared_Emitter_eagle_files.zip)
-   [IR Send and Receiver Library](https://github.com/Seeed-Studio/IRSendRev)
-   [TSAL6200 Datasheet](http://www.vishay.com/docs/81010/tsal6200.pdf)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Infrared_Emitter -->
