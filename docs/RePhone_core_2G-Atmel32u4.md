---
name: Rephone Core 2G-Atmel32u4
category: RePhone
bzurl: https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1.0-p-2779.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/S7PZCZH
sku: 102040006
---

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/cover.jpg)

RePhone is one of the most unique and interesting development board platform that created by Seeed Studio, with RePhone you can not only DIY a special phone for yourself, but also enchant things around you with cellular connectivity. The first edition of RePhone core is Xadow – GSM+BLE, this time we provided another 2 edition of RePhone core which with higher performance and lower power consumption, one of them is the RePhone core 2G Atmel32u4 v1.0.

The RePhone core 2G Atmel32u4 v1.0 is a new Arduino compatible RePhone core 2G board, which is based on Atmel32u4 and SIM800H, Most features of RePhone Core 2G Atmel32u4 v1.0 is the same as Xadow – GSM+BLE, such as offering rich range of communication protocols – GSM, GPRS, and Bluetooth, supporting quad-band 850/900/1800/1900Mz, and supporting 2G Nano SD card. But the solution of Atmel32u4 plus SIM800H has dropped power consumption a lot comparing to Xadow – GSM+BLE. If you are looking for a high-performance and low power consumption Rephone core to enchant the world, then this new RePhone core 2G module is the best choice.

We also provide an even more powerful version of new RePhone core 2G because its solution is AtmelSAMD21+SIM800. Click [here](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html) to find it.

!!!Warning
    1. This product **DOESN'T** include a lopo-battery, and there's no lipo-battery sold at our Bazaar as well, any 3.7V lipo-battery will work
    2. This product **DOESN'T** include a Mic, Speaker and 3.5mm handset input, you need to buy a [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) for those function.

##Features

###Arduino/Processor

* Atmega32u4 work at 16MHz
* Works with Arduino IDE (based on Arduino Leonardo bootloader)
* Embedded with lithium battery management chip
* User button


###SIM800H

* Quad band850/900/1800/1900MHz
* GPRS multi-slot class 12/10
* GPRS mobile station class B
* Meet the GSM 2/2 + standard
    * Class 4 (2 W @850/900MHz
    * Class 1 (1 W @1800/1900MHz)
* bluetooth:compatible3.0+EDR
* FM:band limits 76~109MHz,Tuning step by step 50KHz
* Via ATcommand control 3GPP TS 27.007, 27.005 and SIMCOM enhance ATcommand set
* SIM USAT
* Low power
* Operating temperature range : -40 ~+85 °C


##Specification

| Item|Value|
|--------------|-------------------------------------|
|Microcontroller |Atmega32U4 |
|Operating Voltage	|3.3V|
|DC Current per I/O Pin	|50|
|Flash Memory	|32 KB of which 4KB used by bootloader|
|SRAM	|2.5 KB|
|EEPROM	|1KB|
|Clock Speed	|16 MHz|
|Lenght	|68 mm|
|Width	|30 mm|
|Weight	|12 gr.|

## Hardware Overview

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/hw.png)

* **1- **11pin Xadow Connector
* **2- **User Button(D3)
* **3- **Micro USB connector for programming and power
* **4- **35pin Xadow Connector
* **5- **Jst1.0 Battery Connector
* **6- **Nano Sim Card (same to iPhone 5/6/7)
* **7- **Atmega32U4 IC
* **8- **Charge status monitor LED
    * blink - no battery insert
    * on - charging
    * off - charge done
* **9- **IC - ETA6003(datasheet)
* **A- **ICSP pads
* **B- **Antenna Connector
* **C- **I/O PIN pad
* **D- **SIM800H

##Pin map

[![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/pinmap.png)](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/pinmap.png)

!!!Tip
    [Click](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/pinmap.png) to view larger image.

!!!Note
    * INT1 connect to D7
    * INT2 connect to D12

##Arduino IDE

After you download and install the [latest Arduino IDE](https://www.arduino.cc/en/Main/Software), then click [here](http://wiki.seeed.cc/Seeed_Arduino_Boards/) to add the board to your Arduino IDE.

###Install the Driver (For Windows)

When the first time to insert the board, you should get a USB COM device name RePhone 2G SAMD21 that need to install a driver. Click on the below button to download driver for the board.

[![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/driver.png)](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/driver.zip)

To make sure the driver was installed successful, open your Device Manager to see if **RePhone 2G 32U4** exists.

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/device_manager.png)

###Hello World
Now we can upload our first demo - Hello World to the board.

Open your Arduino IDE copy the blow code:

```c
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.println("Hello world!");
    delay(1000);
}
```

And Then,

* Click on **Tools > Board > RePhone core 2G-Atmel32u4**


If you can not find the RePhone core 2G-Atmel32u4, please check [How to Add Seeed boards to Arduino IDE](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/)



* Click on **Tools > Port** to select a right port number. (*Don't choose COM1*)

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/arduino_ide.png)

Then click on the **Upload** button on the left-top of Arduino IDE, seconds later the sketch was uploaded successful.

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/upload.png)

If the uploading is success, you should the some info in red.

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/upload_done.png)

Open Serial Monitor of your Arduino IDE and you will get "Hello World" printed per seconds.

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/hello_world.png)


##AT Command Mode

RePhone core 2G board support AT command mode. TX/RX of SIM800H is connected to Serial1(D0/D1) of AtemlSAMD21.

Copy the below code and upload to your board.

```c
#include "atmel32u4_gprs.h"

void setup()
{
    Serial.begin(9600);
    while(!Serial);

    Serial.println("SIM800 Serial Debug Test ...");
    gsm.preInit();

    while(0 != gsm.sendATTest())
    {
        Serial.println("sim800 init error!");
    }

    Serial.println("sim800 init O.K!");
}

void loop()
{
    gsm.ATDebug();
}
```

Open your Serial monitor and wait for ***GSM init ok.*** printed on the monitor, then you can input a command.
Try to input an "AT" to get an "OK".

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/cmd.png)

!!!Tip
    All command must be end with a new line(\r\n).

Click on below button to get detailed AT command documentation.

[![](https://raw.githubusercontent.com/SeeedDocument/RePhone_core_2G-Atmel32u4/master/img/at_cmd.png)](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)


##Examples

We had made many examples to show you how this module work.
At the every beginning, please

1. Insert a nano SIM card
2. Insert the antenna
3. If you got a lipo-battery, insert it to the board as well

Click on **File > Examples** then you can open those examples.
###Atmel32U4_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Play music via bluetooth
* **GSM_GPRS_HTTP_GET**: Http get hello.txt from [mbed.org](http://mbed.org)
* **GSM_Receive_SMS**: Receive SMS
* **GSM_Voice_Call**: Receive voice call
* **SIM800_Serial_Debug**: AT command mode

###RePhone_API_for_Arduino

* **gps_test**: [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html) example
* **ledmatrix_test**: [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html) example
* **nfc_test**: [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html) example
* **sensorhub_test**: [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html) example
* **ws2812_test**: [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html) example

###rephone_button

* **button_test**: On-board button test

###rephone_lcm

* **lcm_display_test**: LCD display exampledkdsafdfds

###rephone_menu_gsm

* **rephone_menu_test**


## RePhone Family
There are several chainable add-on modules to extend the features and functionalities – Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 and Xadow NFC v2.


|GPS v2|Basic Sensors|NFC v2|
|----------------|--------------|-------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product3.jpg)|
|[Get More Details](http://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[Get More Details](http://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[Get More Details](http://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

|LED 5 x 7|Audio|Xadow GSM Breakout|
|----------------|--------------|-------------|
|![](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product4.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product7.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Rephone/master/image/product8.jpg)|
|[Get More Details](http://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[Get More Details](http://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[Get More Details](http://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|


#Resources

- [Schematics in PDF](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/102040006RePhone%20core%202G-Atmel32u4/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [Schematics in EAGLE](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/102040006RePhone%20core%202G-Atmel32u4.zip)
- [Driver](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/driver.zip)
- [Datasheet of ETA6003](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/ETA6003.pdf)
- [AT Command of SIM800H](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/raw/master/res/SIM800_AT.pdf)
- [Download ALL Above](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/archive/master.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>