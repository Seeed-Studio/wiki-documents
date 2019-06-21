---
name: Grove - LoRa Radio
category: Communication
bzurl: https://www.seeedstudio.com
oldwikiname: Grove - LoRa Radio
prodimagename: cover.jpg
surveyurl: https://www.research.net/r/F5K3G3F
sku:  113060006/113060007
tags: grove_uart, io_3v3, io_5v, plat_duino
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/cover.jpg)

Grove is a very powerful platform developed by Seeed Studio to simplify your IoT projects.We have integrated the grove connector to most boards produced by Seeed to make them become a system. This time, we combined Grove with LoRa to provide an ultra-long-range wireless module for you.

The main functional module in Grove - LoRa Radio 433MHz is RFM98, which is a transceiver features the LoRa long range modem that provides ultra-long range spread spectrum communication and high interference immunity whilst mini-missing current consumption. The heart of Grove - LoRa Radio 433MHz is ATmega168, a widely used chip with very high-performance and low power consumption, especially suitable for this grove module.

There we already integrated a simple wire antenna to receive signal, if the signal is too weak to receive, don’t worry, the MHF connector next to the antenna is for adding a second antenna which has MHF interface to gain more signal.

This is the 433MHz version, which can be used for 433MHz communication. You can also find the version for 868MHz at Grove - LoRa Radio 868MHz.

|Version|Released Date|How to Buy|
|--------|-----------|-----------|
|Grove - LoRa Radio 433 MHz |Dec 10, 2016|[![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Grove - LoRa Radio 868 MHz |Dec 10, 2016|[![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html)|


##  Features
---
- Using RFM95 module based on SX1276 LoRa®
- Working Voltage:5V/3.3V
- ~28mA(Avg) @+20dBm continuous transmit
- ~8.4mA(Avg)@standby mode
- ~20mA(Avg) @receive mode, BW-500kHz
- Working Temperature:-20 – 70℃
- Interface:Grove - UART(RX,TX,VCC,GND)
- Simple wire antenna or MHF Connector for external high gain antenna
- Working Frequency:868MHz/433MHz
- +20dBm 100 mW Power Output Capability
- Size:20*40mm
- Rate:0.3kps~50kps
- Ready-to-go Arduino libraries
- Resered MHF antenna connector

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Hardware Overview
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/hardware.png)

1. ATMega168 MCU ([datasheet](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf))
2. MHF Connector
3. Wire Antenna
4. RFM95 Module ([datesheet](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/RFM95_96_97_98_DataSheet.pdf))
5. Grove Interface

|PIN|NAME|FUNCTION|
|-------|--------|--------|
|1      |TX |TX of UART|
|2      |RX |RX of UART|
|3      |VCC|Power supply, 3.3V or 5V|
|4      |GND|Connect Ground|

## Application Ideas
---
- Internet of Things
- Smart Home
- Sensor Hub
- Long distance wireless communication

##Getting Started

After this section, you can make **Grove - LoRa Radio** run with only few steps.

###Preparations

Now we are making a demo for P2P(point to point) communication with the Grove - Lora Radio 433MHz, the Grove - LoRa Radio 868MHz is the same way to use.

!!!Tip
    Grove - LoRa Radio 433MHz can't talk to Grove - LoRa Radio 868MHz.


|Item|Qty|Link|
|----|---|----|
|Seeeduino Lotus|2|[GET ONE NOW!](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
|Grove - LoRa Radio 433MHz|2|[GET ONE NOW!](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Micro USB Cable|2|[GET ONE NOW!](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

If this is your first time using [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), please refer to [Seeeduino Lotus's wiki](http://wiki.seeedstudio.com/Seeeduino_Lotus/).

Seeeduino Lotus is fully compatible with Arduino which works as simple as Arduino.

If this is your first time using Arduino, Please put hand on [here](http://arduino.cc) to start your Arduino journey.

###Connecting hardware

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) is a combination of Seeeduino and Base Shield. We can connect the LoRa Radio module to the D5 socket directly as the below picture shows.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/demo.jpg)


###Download Library

Click to download the library and install it ([How to install an Arduino Library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/))

[![](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/library.png)](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip)

!!!Tips
    The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.

There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-LoRa Radio). The other is ShowSerial, stands for serial info display port(connectiong with PC). 

Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it’s not as fast or efficient as hardware serial. For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 

- **AVR:** For the below example, We define Software Serial as SSCOM(connectiong with PC), you need USB to TTL adapter to connect with PC. NOT all the digital pins can be used for software serial. You can refer to [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) for detail pins. We define hardware Serial as COMSerial(connecting with Grove-LoRa Radio). If you want to use the hardware serial as COMSerial and software serial as ShowSerial, you can define as **#define ShowSerial Serial** and **#define COMSerial SSerial**. If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting. 

- **SAMD:** For the below example, The SAMD does not support software serial. We use the hardware serial **Serial1** to commuincate with Grove-LoRa Radio and **SerialUSB** to print message on PC. 

- **STM32F4:** For the below example, We use the hardware serial **Serial** to commuincate with Grove-LoRa Radio and **SerialUSB** to print message on PC. 

!!!Note
    For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 


```
#include <RH_RF95.h>

#################### AVR #######################

#ifdef __AVR__

#include <SoftwareSerial.h>
SoftwareSerial  SSerial(10, 11); // RX, TX

#define COMSerial Serial
#define ShowSerial SSerial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### AVR Mega ###################

#ifdef __AVR__

#define COMSerial Serial1
#define ShowSerial Serial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### SAMD ######################

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE

#define COMSerial Serial1
#define ShowSerial SerialUSB 

RH_RF95<Uart> rf95(COMSerial);

#endif

#################### STM32F4 ###################

#ifdef ARDUINO_ARCH_STM32F4

#define COMSerial Serial
#define ShowSerial SerialUSB 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif
```

###Open the example

Open your Arduino IDE, click **File > Examples>Grove_LoRa_433MHz_and_915MHz_RF-master** you will get many examples for the module.

![](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/library_2.png)

|Node|Example Name|Function|
|----|------------|--------|
|Sender|rf95_client|Send "Hello World" every 1s|
|Receiver|rf95_server|Receive data and print it|

Click **Tools>Board** to choose "Seeeduino Lotus" and select respective serial port then click on Upload button to finish the steps.


!!!Tip
    If you're using Grove - LoRa Radio 868MHz module change the following code.

```c
//rf95.setFrequency(434.0);
rf95.setFrequency(868.0);
```

###Review Results

After upload completed, you can open the serial monitor to see the result.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/result.jpg)

###Data Rate

The below chart shows the relationships between the band rate signal band width spreding factor and sensitivity.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_LoRa_Radio/master/img/DateRate.png)





##  Resources
---

* ***Schematics***
    *   [Grove - LoRa Radio 433MHz v1.0 Schematics (Eagle files)](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/433_eagle.zip)
    *   [Grove - LoRa Radio 433MHz v1.0 Schematics (PDF files)](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/433_sch.pdf)
    *   [Grove - LoRa Radio 868MHz v1.0 Schematics (Eagle files)](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/868_eagle.zip)
    *   [Grove - LoRa Radio 868MHz v1.0 Schematics (PDF files)](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/868_sch.pdf)

* ***Datasheet***
    *   [RFM95/96/97 Datasheet](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/RFM95_96_97_98_DataSheet.pdf)
    *   [Atmega168 Datasheet](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf)

* ***References***
    *   [LoRa Alliance](https://www.lora-alliance.org/)

* ***Library***
    *   [Grove - LoRa Radio Library and Examples](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/)
    *   [LMIC Library](https://github.com/matthijskooijman/arduino-lmic)

* [***Download ALL Above***](https://github.com/SeeedDocument/Grove_LoRa_Radio/blob/master/res/res.zip)



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>