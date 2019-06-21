---
name:  Seeeduino Stalker v1.0
category: Discontinued
bzurl:
oldwikiname: Seeeduino_Stalker_v1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Seeeduino_Stalker_v1-0
sku:
tags:
---
![](https://github.com/SeeedDocument/Seeeduino_Stalker_v1.0/raw/master/img/Seeeduino-stalker-168.jpg)

**This is not the latest version of Seeeduino Stalker and has been discontinued.
The latest version can be found here: [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)
Look [ here](/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker)  for comparison between v1.0, v2.0 and v2.1.**

Link to product page for this device (follow this link to buy):
**Seeeduino Stalker Atmega 168P v1.0Model: [ARD125B5P](http://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80)**

Seeeduino Stalker is a feature rich Arduino compatible Wireless Sensor Network node. It's modular structure and onboard peripherals makes it convenient to log time stamp sensor data on a periodic basis. The Seeeduino Stalker is a good candidate for all your tracking, monitoring and control projects.




##   Features  ##

- **Arduino**  compatible, based on [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)
-  Onboard microcontroller: ATmega168P or ATmega328P (both variants available for purchase)

-  Dual mode of operation: As a standalone Arduino or as a Shield stacked ontop of Arduino. (Pinheader locations are Arduino Duemilanove compatible)

-  Onboard Real Time Clock chip with CR2032 coin cell as backup power source

-  Serial interface with DTR for auto reset during programming when operating in standalone mode. (For programming, [UartSBee](https://seeeddoc.github.io/UartSBee/)  must be bought separately)

-  microSD card socket

-  I2C Pin header (operation voltage is selectable: 5.0V or 3.3V)

-  User defined switch and LED

- **Bee series socket** - 2*10 pin 2.0mm pitch (which will mate with - one at a time - any of the wireless modules: **XBee** , [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) , **GPSBee** or [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) . Please note that [UartSBee](https://seeeddoc.github.io/UartSBee/)  is incompatible with this socket - a separate serial interface connector (as mentioned above) is provided for [UartSBee](https://seeeddoc.github.io/UartSBee/)

##   Applications  ##

-  Wireless Sensor Network (using **XBee** - bought seperately)

-  GPS Logging (using **GPSBee** - bought seperately)

-  Data Acquisition System capable of communicating with an App running on iPhone/Android Phone/Nokia Phone (using [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)  - bought seperately)

-  RF Remote Control (using [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) (title=undefined) - bought seperately)

-  As a simple standalone Arduino compatible physical computing platform ([UartSBee](https://seeeddoc.github.io/UartSBee/)  must be bought seperately for programming)

##   Cautions   ##

-  The product is provided as is. Please observe ESD precautions specially in dry (low humidity) weather.

-  Please disable bluetooth serial ports when using a Windows based development machine to prevent the Arduino IDE from freezing.

##   Block Diagram   ##

![](https://github.com/SeeedDocument/Seeeduino_Stalker_v1.0/raw/master/img/Stalker-V1-Block.jpg)

##   Schematics   ##

[Schematics for Seeeduino Stalker v1.0 (PDF)](http://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf)

##   Specifications  ##

###   Key Technical Specifications  ###

|Microprocessor:|ATMega168P or ATmega328P|
|---|---|
|PCB size:|6.8cm x 5.5cm x 0.16cm|
|Indicators:|Reset, Power, LED on PB5 (Arduino Pin 13)|
|Power supply:|5V or 7-12V|
|Power Connector:|2 pin JST/ USB|
|I/O counts:|20|
|ADC input:|Dedicated 2 channel (10 bit resolution)|
|Connectivity:|I2C, UART, SPI|
|RoHS:|Yes|

###   Electrical Characterstics  ###

 |Specifications|Min|Norm|Max|Units|
|---|---|---|---|---|
 |Input voltage|  5|  9|  12|  Volts (DC)|
 |Global Current Consumption|  -|  300|  1000|  mA|
 |3.3V I2C voltage|  3.2|  3.3|3.5|  Volts (DC)|
 |5.0V I2C voltage|  4.6|  4.7|  5|  Volts (DC)|
| UART Baud Rate(while programming)|  -|  -|  115200|  bps|

##   Usage   ##

###   Application Notes  ###

![](https://github.com/SeeedDocument/Seeeduino_Stalker_v1.0/raw/master/img/Stalker-V1-applications.jpg)

###   Connection Notes  ###

![](https://github.com/SeeedDocument/Seeeduino_Stalker_v1.0/raw/master/img/Stalker-V1-hardware.jpg)

- **Bee series** socket - 2*10 pin 2.0mm pitch (which will mate with - one at a time - any of the **wireless modules**: **XBee**, [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) , **GPSBee**or [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) .) Communication with these modules are done through UART.

- Serial interface – To save space and lower costs, USB<->Serial connectivity is not provided by default. You may use the FT232 based [UartSBee](/UartSBee) (title=undefined) or other USB to serial adapter to do the programming or communicate with the PC.

- User LED and Switch – An LED and a Switch have been provided onboard for use in your application as desired.

- Master switch – Removes power from the Seeeduino Stalker board. RTC will remain working if a CR2032 battery has been installed.

- Interrupt Jumper – Mount this jumper if you want to allow the module inserted in the Bee series socket to interrupt the microcontroller on any data reception event. This is useful in sensor network application to wake up the microcontroller from sleep mode.

- I2C Interface: Onboard I2C level shifter IC provides voltage translation between 3.3V and 5V devices. This allows you to connect 5.0 Volt I2 ICs to you microcontroller when its operating on 3.3 Volts.

##   Datasheets of Components  ##

- [ATmega168](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf) - 8-bit AVR Microcontroller present onboard Seeeduino Stalker.

- [PCA9306](http://www.nxp.com/documents/data_sheet/PCA9306.pdf) - Dual bidirectional I2C-bus and SMBus voltage-level translator.

- [DS1307](http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf) - I2C Real Time Clock chip.

- [LM1117](http://www.national.com/ds/LM/LM1117.pdf) - Low Drop Out linear voltage regulator used in the power supply section.

##   Source Code Examples  ##

Programming Seeeduino Stalker is made easy through the use of Arduino and its libraries. A few code snippets provided below will help you kickstart the coding for your project. A RAR archive containing all of the following sketches is available **here**.

Please note that all of the Demo sketches presented below make use of the FileLogger library. Please refer to [this](http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all) thread at the Arduino Forum and download the library from its [project page](http://code.google.com/p/arduino-filelogger/) at Google Code.

Also, a few Seeeduino Stalker users have shared some of the code developed by them in a [thread](http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20) at the Arduino Forum.

###   Demo 1 - SD card usage  ###

Using a FileLogger library to store all the data from GPSBee on to the SD Card.

```
#include <SD.h>constint chipSelect =10;
String buffer ="";unsignedchar ptr;
File myFile;
byte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}
  File myFile = SD.open("data.log",FILE_WRITE);
   myFile.close();}voidloop(){if(Serial.available()>0){
    val =Serial.read();
    buffer = String(val);
    myFile = SD.open("data.log",FILE_WRITE);
    myFile.print(buffer);
    myFile.close();}}
```

###   Demo 2 – Logging timestamped sensor data  ###

The onboard Real Time Clock module can be used for adding timestamp to the periodically read sensor data.

The Arduino sketch presented below illustrates how to take sensor readings from Analog Pin 0 and save it to SD Card along with timestamps.

```
#include "FileLogger.h"#include "DS1307.h"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};
byte buffer[20];int temp;
byte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);
    RTC.stop();
    RTC.set(DS1307_MIN,30);//set the minutes
    RTC.set(DS1307_HR,10);//set the hours
    RTC.set(DS1307_DATE,22);//set the date
    RTC.set(DS1307_MTH,12);//set the month
    RTC.set(DS1307_YR,9);//set the year
    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){
            oldtime=time;
            temp=RTC.get(DS1307_MTH,false);
            buffer[0]=ASCII[(temp/10)];
            buffer[1]=ASCII[(temp%10)];
            buffer[2]='-';
            temp=RTC.get(DS1307_DATE,false);
            buffer[3]=ASCII[(temp/10)];
            buffer[4]=ASCII[(temp%10)];
            buffer[5]='-';
            temp=RTC.get(DS1307_HR,false);
            buffer[6]=ASCII[(temp/10)];
            buffer[7]=ASCII[(temp%10)];
            buffer[8]='-';
            temp=RTC.get(DS1307_MIN,false);
            buffer[9]=ASCII[(temp/10)];
            buffer[10]=ASCII[(temp%10)];
            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);
            buffer[12]=ASCII[(time/10)];
            buffer[13]=ASCII[(time%10)];
            buffer[14]=':';
            state=Accept;}break;case Accept:
        temp=analogRead(0);
        buffer[15]=ASCII[(temp/100)];
        buffer[16]=ASCII[((temp%100)/10)];
        buffer[17]=ASCII[(temp%10)];
        buffer[18]=0x0D;
        buffer[19]=0x0A;
        state=Record;break;case Record:
        result = FileLogger::append("data.log", buffer, 20);if(result==0){
            state=Timing;}break;default:
        state=Timing;break;}}
```

###   Demo 3 Operating the Seeeduino Stalker as a Shield  ###

The Seeeduino Stalker can be mounted as a shield on another Arduino Duemilanove/UNO compatible board.

The following sketch illustrates how to receive data from the microcontroller below via I2C and save it onto the SD Card.

```
#include "FileLogger.h"#include <Wire.h>
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);Wire.begin(4);// join i2c bus with address #4Wire.onReceive(receiveEvent);// register event}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){
        buffer[i]=Wire.receive();// receive byte as a character
        i++;}
    result = FileLogger::append("data.log", buffer, i);while(result) result = FileLogger::append("data.log", start, 7);}
```

##   Support   ##

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Revision History   ##

|Revision|Descriptions|Release Date|
|---|---|---|
|Seeeduino Stalker v1.0 |Initial public release|Dec 23, 2009|
|Seeeduino Stalker v2.0 | New and improved version with more features|Dec 17, 2010|

##   Bug Tracker   ##

Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products.

##   Additional Ideas   ##

The Additional Ideas is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

##   Resources   ##

[Stalker Eagle Design Files](http://seeedstudio.com/wiki/images/4/40/Stalker.zip)

##   How to buy   ##

Seeeduino Stalker v1.0 is already out of stock (Product page [here](http://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80), instead please checkout Seeeduino Stalker v2.0: [ Wiki page](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)  | [Product Page](http://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80)

##   See Also   ##

- [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)
- [Comparison between various versions of Seeeduino Stalker](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)

##   Licensing   ##

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>