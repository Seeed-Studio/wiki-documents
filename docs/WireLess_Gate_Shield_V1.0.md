---
name: WireLess Gate Shield V1.0
category: MakerPro
bzurl: https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html
oldwikiname:  WireLess Gate Shield V1.0
prodimagename:  WLG_h.jpg
surveyurl: https://www.research.net/r/WireLess_Gate_Shield_V1
sku:      113990088
---
![](https://github.com/SeeedDocument/WireLess_Gate_Shield_V1.0/raw/master/img/WLG_h.jpg)

WireLess Gate Shield is an Arduino-compatible expansion card designed to build a system of receiving / transmitting and broadcasting various wireless commands and data. For maximum coverage possible wireless communication interfaces on the board has an IR receiver interface for connecting popular  transceiver nRF24L01 + and RFM69HW. Additionally, the board has a real time clock module DS1307.

![](https://github.com/SeeedDocument/WireLess_Gate_Shield_V1.0/raw/master/img/WLG_intro.jpg)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html)

##   Features
---
*   Interface to connect the transceiver 315/433/868/915 MHz (depending on the version) [RFM69HW](http://devicter.ru/goods/RFM69HW-RF-transceiver)

*   Interface to connect the transceiver at 2.4 GHz [nRF24L01 +](http://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0)

*   IR receiver
*   Real-time clock module based on DS1307 with battery backup
*   LED automatic activity radio modules
*   LED for user
*   Clock button to operate
*   [GROVE](http://www.seeedstudio.com/depot/Grove-t-3.html?ref=top)-compatible connector: I2C
*   Fully compatible with [Ethernet Shield](http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html)

##   Layout and schematics
---
![](https://github.com/SeeedDocument/WireLess_Gate_Shield_V1.0/raw/master/img/Wl-top.png)

On the left side WireLess Gate Shield are interfaces to wireless modules:

*   nRF24l01 +, including the enhanced ("PA") version (above)
*   RFM69HW (bottom).

Between wireless modules is U.FL connector for external antenna for RFM69HW. If you plan to use the regular antenna (bit of wire required length) - it is possible to solder directly to the board Schild (near the connector U.FL)

To the right and slightly above the module is RFM69HW LED LED1 "RF433"

In the central part of the board is a slot for a backup battery for clock module DS1307

To the right and slightly below the slot for the battery - I2C-connector.

On the right side is (top-down):

*   LED LED2 "RF24"
*   IR receiver
*   LED LED3 - user
*   Clock button S1

![](https://github.com/SeeedDocument/WireLess_Gate_Shield_V1.0/raw/master/img/Wl-Scheme.PNG)

##   Basic functionality
---
In the basic version (without the use of Ethernet Shield) may organize a wireless gateway between the radios and the IR receiver.

Command (or data) can be broadcast between all three wireless interfaces according to the logic of that program the user.

Availability of real-time clock module will automate the sending of any data or commands with reference to the date / time.

Device Management can be organized using a button located on the Shield.

##  Expansion Capabilities
---
Additionally WireLess Gate Shield can connect any i2c device using Grove-compatible connections (sensors, displays, etc.).

WireLess Gate Shield was designed to be fully compatible with [Ethernet Shield](http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) - so you can use these two together Schild to create even more advanced wireless control device (logging on SD-card and presenting data on a web page, manage wireless devices via the web).

##  Interfaces
---
*   Interface for RF-module nRF24L01 +:
    *   D11 - MOSI

        *   D12 - MISO
    *   D13 - SCK

        *   D7 - RF24_CE

        *   D8 - RF24_CSN

        *   D2 - RF24_IRQ

*   Interface for RF-module RFM69HW:
    *   D11 - MOSI

        *   D12 - MISO
    *   D13 - SCK

        *   D9 - RF433_NSS

        *   A0 - RF433_RESET

        *   D3 - RF433_IRQ

*   A4 (SDA), A5 (SCL) - displayed on the connector "I2C" (the other two pins in the connector - VCC and GND for sensor supply)
*   A4 (SDA), A5 (SCL) - are involved in parallel for RTC DS1307
*   A1 - Button
*   D6 - Custom LED (LED3)

##  Features  WireLess Gate Shield
---
###   Wireless Modules

Both wireless module RFM69HW and nRF24l01 + connected hardware bus SPI.

Selection of a particular wireless module is a low potential for the establishment of the appropriate chip select pin:

*   CSN (D8) for the module nRF24l01 +
*   NSS (D9) for the module RFM69HW

_ 'Warning', 'If you have installed, but the software is not involved RFM69HW, be sure to install NSS pin of this module in state HIGH (otherwise it will interfere with the normal operation nRF24l01 + and Ethernet Shield. _

###   Automatic display of the wireless modules

LED indication of the wireless module is implemented as follows:

*   LED cathode LED1 "RF24" connected to pin CSN (D8) module nRF24l01 +, the anode of the LED (through a current limiting resistor) - to pin SCK bus SPI (D13)
*   LED cathode LED2 "RF433" connected to pin NSS (D9) module RFM69HW, the anode of the LED (through a current limiting resistor) - to pin SCK bus SPI (D13)

When radios are not active - at the appropriate pines chip select (CSN and NSS) there is a high potential, with the appearance of the clock at pin SCK does not lead to the ignition of the LEDs.
If the same MK "communicates" with any wireless module to select it at the appropriate Pina (CSN and NSS) is set low potential and at the same timing pulses at pin SCK "ignite" the corresponding LED.

Thus, the user is not required to arrange for any additional programming work on the MC to indicate operation of the module.

###   Features

If necessary, SMD-LED to replace the usual outs (eg to embed the finished device in a cute case with display):

*   The board is close to the equipment corresponding LED is seating where you can solder terminals LEDs (or the appropriate cable).
*   Current-limiting resistor is on the board (for the output of the LED series resistor is not required)
*   SMD-LED when setting the output of the LED must be removed from the board

###   Modification to control via IR

Custom LED can be replaced by LED3 pin IR LED and thereby further expand the use of WireLess Gate Shield (for example, a command sent via any wireless interface or LAN - control devices using infrared commands).

##  Libraries

###  Required Library

To use the WireLess Gate Shield requires the following libraries:

*   Work with the transceiver nRF24L01 + - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

*   Work with the transceiver RFM69HW - [RFM69](https://github.com/LowPowerLab/RFM69/archive/master.zip)

*   Real-time clock (RTC) - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

*   IR-receiver - [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)

Additionally required libraries that are used when working RF24 and LCD-display:

*   SPI

Libraries are examples of them just to understand how they work.

###   Features  use libraries

**NRF24l01 + **

Module Initialization nRF24l01 + as follows:

```
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```


**RFM69HW**

To work with a wireless module RFM69HW need to make minor corrections to the file RFM69.h follows:

At the beginning of the file to find the line:

```
#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
```

And replace them with:

```
//#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
//#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
#define SPI_CS               9 // SS is the SPI slave select pin, for WireLess Gate Shield - D9
#define RF69_IRQ_PIN          3 // INT1 on AVRs should be connected to DIO0 (ex on Atmega328 it's D3)
```

Additionally, the file RFM69.cpp need to find the line:

```
void RFM69::isr0() { selfPointer-&gt;interruptHandler(); }
```

And replace them with:

```
//void RFM69::isr0() { selfPointer-&gt;interruptHandler(); }
void RFM69::isr1() { selfPointer-&gt;interruptHandler(); }
```

Module Initialization RFM69HW as follows:


```
  resetRFM69();
  radio.setCS(9); // NSS - D9
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
```


_ 'Note:' _ Working with RFM69HW determined by the state of its registers. For more tinctures for specific endpoints required by the rules in the file RFM69.cpp function RFM69 :: initialize
To better understand the purpose registers read the file RFM69registers.h (also included in the library), and documentation [radio RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

##   Demonstration

###   Code for the main unit with WireLess Gate Shield (works with RTC, IR, RFM69HW, nRF24l01 +)

*   Sends a structure to another RFM69HW and receives a response (ping-pong).
*   Listen nRF24l01 + comes and if appropriate package - outputs it to monitor
*   Accepts commands via IR receiver (the recognized commands are displayed in the monitor) and lights custom LED

All results are displayed in the Serial Monitor
```
#include <RFM69.h>
#include <SPI.h>
#include "RF24.h"
#include <IRremote.h>
#include <Wire.h>
#include "RTClib.h"

RF24 radio24(7,8);

RTC_DS1307 RTC;

int RECV_PIN = 5;

IRrecv irrecv(RECV_PIN);

decode_results results;

// create a framework for the transmission of values
typedef struct{
    int SensorID;        // ID sensor
    int CommandTo;       // command module number ...
    int Command;         // command
    // 0 - answer
    // 1 - get the value
    // 2 - set the value
    int ParamID;         // parameter identifier
    float ParamValue;    // value
    boolean Status;      // status
    // 0 - read-only (RO)
    // 1 -  can change the (RW)
    char Comment[16];    // comment
}
Message;

Message sensor;

const uint64_t pipes[2] = {
0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };

volatile boolean waitRF24 = false;

#define NODEID      99
#define NETWORKID   100
#define GATEWAYID   1
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14  //A0
#define RFM69_NSS 9
#define RFM69_DIO0 3

#define BUTTON 15 // A1

#define MOSI 11
#define MISO 12
#define SCK 13

int TRANSMITPERIOD = 500; //transmit a packet to gateway so often (in ms)
byte sendSize=0;
boolean requestACK = false;
RFM69 radio;

int delta=2000;

unsigned long blinkStop;
unsigned long timeReady;

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
}
Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);

    pinMode(LED, OUTPUT);

    pinMode(RFM69_NSS, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(8, OUTPUT);
    pinMode(MOSI, OUTPUT);
    pinMode(MISO, INPUT);
    pinMode(SCK, OUTPUT);

    pinMode(RFM69_RESET, OUTPUT);
    pinMode(RFM69_DIO0, INPUT);

    pinMode(BUTTON, INPUT);

    digitalWrite(RFM69_NSS, HIGH);
    digitalWrite(7, HIGH);

    resetRFM69();
    radio.setCS(RFM69_NSS);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    char buff[50];
    sprintf(buff, "\nTransmitting at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);

    radio24.begin();
    // optionally, increase the delay between retries & # of retries
    radio24.setRetries(15,15);
    radio24.setChannel(119);
    // по умолчанию СЛУШАЕМ
    radio24.openWritingPipe(pipes[1]);
    radio24.openReadingPipe(1,pipes[0]);
    radio24.startListening();

    delay(20);

    attachInterrupt(0, isr_RF24, FALLING);

    irrecv.enableIRIn();

    Wire.begin();
    RTC.begin();

    if (! RTC.isrunning()) {
        Serial.println("RTC is NOT running!");
        // following line sets the RTC to the date & time this sketch was compiled
        RTC.adjust(DateTime(__DATE__, __TIME__));
    }
}

long lastPeriod = -1;
void loop() {

    //check for any received packets
    if (radio.receiveDone())
    {
        Serial.print('[');
        Serial.print(radio.SENDERID, DEC);
        Serial.print("] ");
        for (byte i = 0; i < radio.DATALEN; i++)
        Serial.print((char)radio.DATA[i]);
        Serial.print("   [RX_RSSI:");
        Serial.print(radio.readRSSI());
        Serial.print("]");

        if (radio.ACK_REQUESTED)
        {
            radio.sendACK();
            Serial.print(" - ACK sent");
            delay(10);
        }
        Serial.println();
    }

    int currPeriod = millis()/TRANSMITPERIOD;
    if (currPeriod != lastPeriod)
    {
        //fill in the struct with new values
        theData.nodeId = NODEID;
        theData.uptime = millis();
        theData.temp = radio.readTemperature();//91.23; //it's hot!

        Serial.print("Sending struct (");
        Serial.print(sizeof(theData));
        Serial.print(" bytes) ... ");
        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))
        Serial.print(" ok!");
        else Serial.print(" nothing...");
        Serial.println();
        lastPeriod=currPeriod;
    }

    listenRF24();

    if (irrecv.decode(&results)) {
        Serial.println(results.value, HEX);
        irrecv.resume(); // Receive the next value
        blinkStop=millis()+100;
        digitalWrite(LED, HIGH);
    }

    if (digitalRead(BUTTON)==LOW) {
        blinkStop=millis()+1000;
        digitalWrite(LED, HIGH);
    }

    if (millis()>blinkStop) {
        digitalWrite(LED, LOW);
    }

    if(millis()>timeReady){
        timeReady=millis()+2000;
        DateTime now = RTC.now();

        Serial.print(now.year(), DEC);
        Serial.print('/');
        Serial.print(now.month(), DEC);
        Serial.print('/');
        Serial.print(now.day(), DEC);
        Serial.print(' ');
        Serial.print(now.hour(), DEC);
        Serial.print(':');
        Serial.print(now.minute(), DEC);
        Serial.print(':');
        Serial.print(now.second(), DEC);
        Serial.println();
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}

void isr_RF24(){
    waitRF24 = true;
}

void listenRF24() {
    if (waitRF24) {
        waitRF24 = false;
        if ( radio24.available() )
        {
            bool done = false;
            while (!done)
            {
                done = radio24.read( &sensor, sizeof(sensor) );
                if(sensor.Command == 0) {
                    Serial.print(sensor.SensorID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamValue);
                    Serial.print(" ");
                    Serial.println(sensor.Comment);
                }
            }
        }
    }
}
```
###   Code for "receiver" (for the test used Arduino Nano and RFM69HW module on the breadboard)

*   Takes using RFM69HW structure
*   Accountable for admission
*   Prints additional information regarding the module RFM69HW (registers, etc.)
```
#include <RFM69.h>
#include <SPI.h>

#define NODEID      1
#define NETWORKID   100
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14

RFM69 radio;
bool promiscuousMode = false; //set to 'true' to sniff all packets on the same network

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
} Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);
    pinMode(RFM69_RESET, OUTPUT);
    pinMode(3, INPUT);
    resetRFM69();
    radio.setCS(9);
    //delay(10);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    radio.promiscuous(promiscuousMode);
    char buff[50];
    sprintf(buff, "\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);
}

byte ackCount=0;
void loop() {
    //process any serial input
    if (Serial.available() > 0)
    {
        char input = Serial.read();
        if (input == 'r') //d=dump all register values
        radio.readAllRegs();
        if (input == 'E') //E=enable encryption
        radio.encrypt(KEY);
        if (input == 'e') //e=disable encryption
        radio.encrypt(null);
        if (input == 'p')
        {
            promiscuousMode = !promiscuousMode;
            radio.promiscuous(promiscuousMode);
            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");
        }

        if (input == 'd') //d=dump flash area
        {
            Serial.println("Flash content:");
            int counter = 0;

            while(counter<=256){
                //Serial.print(flash.readByte(counter++), HEX);
                Serial.print('.');
            }
            //while(flash.busy());
            Serial.println();
        }
        if (input == 'D')
        {
            Serial.print("Deleting Flash chip content... ");
            //flash.chipErase();
            //while(flash.busy());
            Serial.println("DONE");
        }
        if (input == 'i')
        {
            Serial.print("DeviceID: ");
            //word jedecid = flash.readDeviceId();
            //Serial.println(jedecid, HEX);
        }
    }

    if (radio.receiveDone())
    {
        Serial.print('[');Serial.print(radio.SENDERID, DEC);Serial.print("] ");
        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");
        if (promiscuousMode)
        {
            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");
        }

        if (radio.DATALEN != sizeof(Payload))
        Serial.print("Invalid payload received, not matching Payload struct!");
        else
        {
            theData = *(Payload*)radio.DATA; //assume radio.DATA actually contains our struct and not something else
            Serial.print(" nodeId=");
            Serial.print(theData.nodeId);
            Serial.print(" uptime=");
            Serial.print(theData.uptime);
            Serial.print(" temp=");
            Serial.print(theData.temp);
        }

        if (radio.ACK_REQUESTED)
        {
            byte theNodeID = radio.SENDERID;
            radio.sendACK();
            Serial.print(" - ACK sent.");

            // When a node requests an ACK, respond to the ACK
            // and also send a packet requesting an ACK (every 3rd one only)
            // This way both TX/RX NODE functions are tested on 1 end at the GATEWAY
            if (ackCount++%3==0)
            {
                Serial.print(" Pinging node ");
                Serial.print(theNodeID);
                Serial.print(" - ACK...");
                delay(3); //need this when sending right after reception .. ?
                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = only 1 attempt, no retries
                Serial.print("ok!");
                else Serial.print("nothing");
            }
        }
        Serial.println();
        Blink(LED,3);
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}
```

##  Product versions

<table  cellpadding="5" cellspacing="0">
<tr>
<td width="150"> **Revision**
</td>
<td width="450"> **Description**
</td>
<td width="80"> **Release**
</td></tr>
<tr style="font-size: 90%">
<td> 0.9
</td>
<td> Prototype
</td>
<td> 05.05.2014
</td></tr>
<tr style="font-size: 90%">
<td> 1.0
</td>
<td> Public version
</td>
<td> 05.07.2014
</td></tr></table>

##   Applications

*   Universal Wireless Gateway RF2.4 GHz (nRF24l01 +), RF433 MHz (RFM69HW), IR and LAN (using Ethernet Shield)
*   Logging system commands and data wireless devices with the time (using the Ethernet Shield)
*   Design and construction of administering various wireless commands at a certain time (for example, "turn on the light August 23, 2014 at 18:02" or "every day to include an automatic watering at 5:00")

##   Questions and Answers

*   Blog [WireLess Gate Shield](//devicter.blogspot.ru) RU

*   Ask a question by e-mail support@devicter.ru

##   How to buy

This product can be purchased:

China (shipping worldwide)

[Elecrow store](http://www.elecrow.com/wireless-gate-shield-p-1139.html)

[Seeed store](http://www.seeedstudio.com/depot/wireless-gate-shield.html)

Russia

[Devicter store](http://devicter.ru/goods/WireLess-Gate-Shield)

##   Links

*   [Description RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

*   [Description nRF24l01+](ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf)

*   [schematic of the device](http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>