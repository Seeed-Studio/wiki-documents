---
name: Grove - NFC
category: Communication
bzurl: https://seeedstudio.com/Grove-NFC-p-1804.html
oldwikiname: Grove_-_NFC
prodimagename: Grove-NFC_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/grove nfc.jpg
surveyurl: https://www.research.net/r/Grove-NFC
sku: 113020006
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

<table>
    <tr>
        <td>
            <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/img/Grove-NFC_01.jpg">
        </td>
        <td>
            <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/img/Grove-NFC_02.jpg">
        </td>
    </tr>
</table>

Near Field Communication (NFC) is a set of short-range wireless technologies. It is behind daily applications such as access control system and mobile payment system.
Grove NFC features a highly integrated transceiver module PN532 which handles contactless communication at 13.56MHz. You can read and write a 13.56MHz tag with this module or implement point to point data exchange with two NFCs. Grove NFC is designed to use I2C or UART communication protocols, and UART is the default mode. In addition, we assign an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.



<p style=":center"><a href="http://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Version

|Version|Data|Change|
|--|--|--|
|Grove NFC V1.0|December 11,2015 |inital|
|Grove NFC V1.1|Augest 31,2016| Add TP2/TP3 Pad on the back of the PCB, to switch the I2C and UART|



## Specifications


-   Working Voltage: 3.3V
-   Working Current:
    - Static Mode: 73mA
    - Write/Read Mode: 83mA
-   Support host interface: I2C, UART(default).
-   Serve for contactless communication at 13.56MHz.
-   Support ISO14443 Type A and Type B protocols.
-   Max operating distance for detecting NFC tags is 28mm depending on current antenna size.
-   Support P2P communication.
-   Dimensions: 25.43mm x 20.35mm

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Hardware overview

### Grove NFC v1.0

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/img/NFC_cutAndsolder.jpg)  
 
 
The default setting is UART, if you need to change it into I2C, then you should do some soldering at first.


Cut following connections:

-   TP1 to UART
-   TP2 to RX
-   TP3 to TX

Solder following connections:

-   TP1 to I2C
-   TP2 to SCL
-   TP3 to SDA


### Grove NFC v1.1

The default setting is UART, if you need to change it into I2C, then you should cut the UART connection and then solder the I2C pins as below.

![](https://github.com/SeeedDocument/Grove-NFC/raw/master/img/v1.1%20hardware%20connection.png)

## Getting Started

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


The Grove - NFC supports I2C and UART, [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) supports Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan and Arduino Leonardo/Seeeduino Lite. 



### Play with Seeeduino Lite(UART)

#### Hardware

**Materials required**

| Seeeduino Lite | Base Shield| Grove - NFC |  NFC Tags|
|--------------|-------------|-----------------|---|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/lite.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-NFC/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-NFC/raw/master/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Get One Now</a>|Please Prepare yourself|


- **Step 1.** Connect Grove - NFC to port **UART** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino Lite.

- **Step 3.** Connect Seeeduino Lite to PC via a USB cable



#### Software


- **Step 1.**  Download [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Step 2.**  Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install **Seeed Arduino NFC** library for Arduino.

- **Step 3.**  Download [PN532 Library](https://github.com/Seeed-Studio/PN532) and put it under **C:\Program Files (x86)\Arduino\libraries\Seeed_Arduino_NFC-master\src**.

- **Step 4.**  Open “ReadTag” code via the path: **File --> Examples --> ReadTag**. 

- **Step 5.**  Modify the code as below to enable UART communication.

```
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 1 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 0  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Step 7.** Upload the code. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 8.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud Rate **9600**

- **Step 9.** Use the Grove - NFC to get close to an NFC Tag. If everything goes well, you will get the NFC Tag information in the Serial Monitor.


!!!warning
    If you want to connect to Arduino Mega UART ports, You can change the PN532_HSU pn532hsu(Serial1) to PN532_HSU pn532hsu(SerialX). X stands for the arduino mega serial port you use. If you want to connect Grove-NFC sensors to Arduino Uno, you can use the software serial. Please follow below to configure [software serial](https://www.arduino.cc/en/Reference/softwareSerial). 

```
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 1  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```	
	
### Play with Seeedunio V4.2 (I2C)

### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - NFC |  NFC Tags|
|--------------|-------------|-----------------|---|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-NFC/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-NFC/raw/master/img/NFC-for-Marketing-Header.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Get One Now</a>|Please Prepare yourself|


!!!note
    **1** Please choose 13.5MHZ, ISO14443 NFC Tags, or the Grove - NFC module may can not read the tag.
    
    
    **2** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **3** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **4** For this demo, you can work without the baseshild, for the Seeeduino V4.2 has a on-board Grove I2C connector. 



- **Step 1.** Connect Grove - NFC to port **I2C** of Grove-Base Shield. Please make sure you follow hardware overview to change the default UART setting to I2C.

- **Step 2.** Plug Grove - Base Shield into Seeeduino V4.2.

- **Step 3.** Connect Seeeduino V4.2 to PC via a USB cable



#### Software

- **Step 1.**  Download [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Step 2.**  Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install **Seeed Arduino NFC** library for Arduino.

- **Step 3.**  Download [PN532 Library](https://github.com/Seeed-Studio/PN532) and put it under **C:\Program Files (x86)\Arduino\libraries\Seeed_Arduino_NFC-master\src**.

- **Step 4.**  Open “ReadTag” code via the path: **File --> Examples --> ReadTag**. 

- **Step 5.**  Modify the code as below to enable I2C communication.

```
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 0  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Step 6.** Upload the code. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 7.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud Rate **9600**

- **Step 8.** Use the Grove - NFC to get close to an NFC Tag. If everything goes well, you will get the NFC Tag information in the Serial Monitor.


## Resources

- **[Zip]** [Grove - NFC v1.0 EAGLE (schematic and board) files](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/Grove-NFC.zip)
- **[Zip]** [Grove - NFC v1.1 EAGLE (schematic and board) files](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/Grove-NFC_v1.1.zip)
- **[PDF]** [PN532 Datasheet PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/PN532.pdf)
- **[Library]** [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)
- **[Library]** [PN532 Library](https://github.com/Seeed-Studio/PN532)

## Project

**Particle Photon + Grove NFC + Grove LCD via I2C** Use Particle Photon to read UID of a NFC Card and display on LCD, all with I2C.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed' width='350'></iframe>

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_NFC -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>