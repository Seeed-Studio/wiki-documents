---
description:  Rephone Core 2G-AtmelSAMD21
title:  Rephone Core 2G-AtmelSAMD21
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rephone_core_2G-AtmelSAMD21
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg)

RePhone is one of the most unique and interesting development board platform that created by Seeed Studio, ever since its first show on the stage of KickStarter, it has received tons of attention and support from makers all over the world because with RePhone you can not only DIY a special phone for yourself, but also enchant things around you with cellular connectivity.

The RePhone Core 2G-AtmelSAMD21 v1.0 is a new Arduino compatible RePhone core 2G board, which is based on Atmel’s SAMD21 and SIM800H, Most features of RePhone Core 2G-AtmelSAMD21 v1.0 is the same as Xadow – GSM+BLE, such as offering rich range of communication protocols – GSM, GPRS, and Bluetooth, supporting quad-band 850/900/1800/1900Mz, and supporting 2G Nano SD card. But the solution of Atmel’s SAMD21 plus SIM800H has dropped power consumption a lot comparing to Xadow – GSM+BLE. If you are looking for a high-performance and low power consumption Rephone core to enchant the world, the this new RePhone core 2G module is the best choice.

:::note:
    The RePhone Core 2G-AtmelSAMD21 v1.0 is compatible with all the Xadow v2.0 except the Xadow 1.54 inch Touchscreen
    Please connect a battery to the board if you want to use the GSM or GPRS function in case the power form USB is not enough and fail to communicate.
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)

:::warning
    This product **DOESN'T** include a lopo-battery, and there's no lipo-battery sold at our Bazaar as well, any 3.7V lipo-battery will work.

    This product **DOESN'T** include a Mic, Speaker and 3.5mm handset input, you need to buy a [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) for those function.
:::
## Features
---
### Arduino/Processor

* ATSAMD21G18 @ 48MHz with 3.3V logic/power
* Arduino compatible (based on Arduino Zero bootloader)
* Embedded with lithium battery management chip
* User button

### SIM800H

* Quad band850/900/1800/1900MHz
* GPRS multi-slot class 12/10
* GPRS mobile station class B
* Meet the GSM 2/2 + standard
    * Class 4 (2 W @850/900MHz)
    * Class 1 (1 W @1800/1900MHz)
* bluetooth:compatible3.0+EDR
* FM:band limits 76~109MHz,Tuning step by step 50KHz
* Via ATcommand control 3GPP TS 27.007, 27.005 and SIMCOM enhance ATcommand set
* SIM USAT
* Low power
* Operating temperature range : -40 ~+85 °C


## Specification
---
| Item|Value|
|--------------|-------------------------------------|
|Microcontroller |ATSAMD21G18, 32-Bit ARM Cortex M0+ |
|Operating Voltage	|3.3V|
|DC Current per I/O Pin	|7 mA|
|Flash Memory	|256 KB|
|SRAM	|32 KB|
|EEPROM	|None|
|Clock Speed	|48 MHz|
|Lenght	|68 mm|
|Width	|30 mm|
|Weight	|12 gr.|

## Hardware Overview
---
![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png)

* **1- **11pin Xadow Connector
* **2- **User Button(D3)
* **3- **Micro USB connector for programming and power
* **4- **35pin Xadow Connector
* **5- **Jst1.0 Battery Connector
* **6- **Nano Sim Card (same to iPhone 5/6/7)
* **7- **ATSAMD21G18 IC
* **8- **Charge status monitor LED
    * blink - no battery insert
    * on - charging
    * off - charge done
* **9- **IC - ETA6003([datasheet](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf))
* **A- **SWD Debug port
* **B- **Antenna Connector
* **C- **I/O PIN pad
* **D- **SIM800H

##Pin map

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)

:::tip
    [Click](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png) to view larger image.
:::
:::note
    * INT1 connect to D7
    * INT2 connect to D12
:::
##Arduino IDE

After you download and install the [latest Arduino IDE](https://www.arduino.cc/en/Main/Software), there's something need to set up.
Open your Arduino IDE, and click on **File > Preferences**
Copy blow code to **Additional Boards Manager URLs**, and then **OK**

```c
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png)

Then let's go to **Tools > Board > Boards Manager**

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png)

Click on the **Install** button and wait for minutes before the board is installed.

After the install is completed, you can find RePhone core 2G-AtmelSAMD21 at the bottom of **Tools > Board**.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png)

### Install the Driver (For Windows)

When the first time to insert the board, you should get a USB COM device name RePhone 2G SAMD21 that need to install a driver. Click on the below button to download driver for the board.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)

To make sure the driver was installed successful, open your Device Manager to see if **RePhone 2G SAMD21** exists.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png)

###Hello World
Now we can upload our first demo - Hello World to the board.

Open your Arduino IDE copy the blow code:

```c
void setup()
{
    SerialUSB.begin(115200);
}

void loop()
{
    SerialUSB.println("Hello world!");
    delay(1000);
}
```

And Then,

* Click on **Tools > Board > RePhone core 2G-AtmelSAMD21**
* Click on **Tools > Port** to select a right port number. (*Don't choose COM1*)

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png)

Then click on the **Upload** button on the left-top of Arduino IDE, seconds later the sketch was uploaded successful.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png)

If the uploading is success, you should the some info in red.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png)

Open Serial Monitor of your Arduino IDE and you will get "Hello World" printed per seconds.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png)


## AT Command Mode
---
RePhone core 2G board support AT command mode. TX/RX of SIM800H is connected to Serial1(D0/D1) of AtemlSAMD21.

Copy the below code and upload to your board.

```c
#include "atmelsamd21_gprs.h"

void setup()
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");
    gsm.preInit();                  // power on

    while(0 != gsm.init())
    {
        SerialUSB.println("GSM init error.");
        delay(2000);
    }

    SerialUSB.println("GSM init ok.");
}

void loop()
{
    while(SerialUSB.available())Serial1.write(SerialUSB.read());
    while(Serial1.available())SerialUSB.write(Serial1.read());
}

```

Open your Serial monitor and wait for ***GSM init ok.*** printed on the monitor, then you can input a command.
Try to input an "AT" to get an "OK".

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png)

:::tip
    All command must be end with a new line(\r\n).
:::
Click on below button to get detailed AT command documentation.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)


## Examples
---
We had made many examples to show you how this module work.
At the every beginning, please

1. Insert a nano SIM card
2. Insert the antenna
3. If you got a lipo-battery, insert it to the board as well

Click on **File > Examples** then you can open those examples.
###AtmelSAMD21_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Play music via bluetooth
* **GSM_GPRS_HTTP_GET**: Http get hello.txt from [mbed.org](http://mbed.org)
* **GSM_Receive_SMS**: Receive SMS
* **GSM_Voice_Call**: Receive voice call

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

###rephone_menu_all

* **rephone_menu_test**

###TwilioMessage

* **message_test**: Twilio Message Send/Receive

## RePhone Family
There are several chainable add-on modules to extend the features and functionalities – Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 and Xadow NFC v2.


|GPS v2|Basic Sensors|NFC v2|
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[Get More Details](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

|LED 5 x 7|Audio|Xadow GSM Breakout|
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[Get More Details](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## Resources
---
- [Schematics in PDF](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf)
- [Schematics in EAGLE](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip)
- [Driver](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)
- [Datasheet of ETA6003](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf)
- [AT Command of SIM800H](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf)
- [Download ALL Above](https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
