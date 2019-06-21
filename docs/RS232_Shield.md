---
name: RS232 Shield
category: Shield
bzurl: https://seeedstudio.com/RS232-Shield-p-1910.html
oldwikiname: RS232_Shield
prodimagename: RS232_Shield_Photo.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/RS232 Shield.jpg
surveyurl: https://www.research.net/r/RS232_Shield
sku: 113030016
---

![](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/img/RS232_Shield_Photo.jpg)

RS232 Shield is a standard communication port for industry equipment.This module is base on MAX232,which is a dual driver/receiver that includes a capacitive voltage generator to supply TIA/EIA-232-F voltage levels from a single 5-V supply. The shield integrates DB9 connectors (female) that provide connection to various devices with RS232 interface. Also the RS232 headers will facilitate your connections and commissioning. It provides the welding areas to make full use of extra space on it, which is highly convenient for prototyping.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/RS232-Shield-p-1910.html)

## Specifications
-------------

-   Meets or Exceeds TIA/EIA-232-F and ITU
-   Operates Up To 120 kbit/s
-   Low Supply Current
-   LED Indicator
-   DB9 Connectors(female)
-   Welding Areas

## Compatibility
-------
We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)


## Interface Function
------------------

**Usage**

First,we can test it by computer.

### Hardware Installation

1. Seeeduino v3.0,Mini usb Cable,RS232 Shield,RS232 to USB Cable.
2. Make the connections as below. The jumper hats can be used to select the software serial port from the digital pins. You can set them to D7(232\_TX) and D6(232\_RX), and modify the code to "*SoftwareSerial mySerial(7, 6); // 232\_TX, 232\_RX*"

![](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/img/RS232_Shield_usage.jpg)

### Software Part

-   1) Open Arduino IDE, and paste the code below.

```
 
#include <SoftwareSerial.h>
 
SoftwareSerial mySerial(7, 6); //232_TX,232_RX
 
void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }
 
 
    Serial.println("Goodnight moon!");
 
    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    mySerial.println("Hello, world?");
}
 
void loop() // run over and over
{
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

-   2) Upload the code. Note that you should select the correct board type and COM port.
-   3) Open the Serial Monitor.

You can see :
![](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/img/RS232_Shield_usage1.jpg)

Resources
--------

-   [RS232 Shield eagle file](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/res/RS232_Shield_v1.0_Eagle.zip)
-   [RS232\_Shield\_v1.0.pdf](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/res/RS232_Shield_v1.pdf)
-   [Datasheet MAX232D.pdf](https://raw.githubusercontent.com/SeeedDocument/RS232_Shield/master/res/MAX232D.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/RS232_Shield -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>