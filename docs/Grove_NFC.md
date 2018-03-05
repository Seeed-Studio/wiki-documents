---
title: Grove - NFC
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

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-NFC-p-1804.html)

Specifications
--------------

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
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

Get Started
-----------

1.  Download [PN532 library](https://github.com/Seeed-Studio/PN532) and put 4 folders(PN532, PN532_SPI, PN532_I2C and PN532_HSU) into Arduino's libraries.
2.  Download [[1]](https://github.com/Seeed-Studio/Grove-NFC-libraries-Part), put it into Arduino's library and rename it to NDEF.
3.  Open Arduino IDE. If Arduino IDE is already opened, restart it.
4.  In Arduino IDE, click menus: File -> Example -> NDEF -> ReadTag
5.  *We used I2C interface in the libraries of NDEF, so please cut off the connection between P1 and UART via a little knife, and solder P1 and I2C together.*

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/img/NFC_cutAndsolder.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Debug for Grove - NFC v1.0 : There is a bug while using I2C communication, please use jumper wires to follow those connection
</div>

| Arduino/Arduino Mega | Grove - NFC |
|----------------------|-------------|
| SCL                  | RX          |
| SDA                  | TX          |
| GND                  | GND         |
| 5V                   | VCC         |

You can still use UART interface without cutting any connection, Seeeduino Mega(Arduino Mega) or Seeeduino lite(Arduino Leonardo) are preferred. Following is the modified program.

```
#include "PN532_HSU.h"
#include "PN532.h"
#include "NfcAdapter.h"
 
PN532_HSU interface(Serial1);
NfcAdapter nfc = NfcAdapter(interface);
 
void setup(void) {
    Serial.begin(115200);
    Serial.println("NDEF Reader");
    nfc.begin();
}
 
void loop(void) {
    Serial.println("\nScan a NFC tag\n");
    if (nfc.tagPresent())
    {
        NfcTag tag = nfc.read();
        tag.print();
    }
    delay(5000);
}
```

<div class="admonition note">
<p class="admonition-title">Note</p>
If using it with Seeeduino or Arduino UNO, the only way to get the return message is setting it to I<sup>2</sup>C interface bus. While using it with Mega or Leonardo, you can use UART interface bus. Ensure PN532 library and Don's NDEF libraries are downloaded for Arduino library. And you might test the example <span style="font-weight:bold">ReadTag.ino</span> under folder <span style="font-weight:bold">example</span>. Delete code Line 1 to Line 10 (line <span style="font-weight:bold">\#else ......</span> and the above lines to top).
</div>

Cut following connections:

-   TP1 to UART
-   TP2 to RX
-   TP3 to TX

Solder following connections:

-   TP1 to I2C
-   TP2 to SCL
-   TP3 to SDA

Resources
--------

- [Grove - NFC v1.0 EAGLE (schematic and board) files](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/Grove-NFC.zip)
- [Grove - NFC v1.1 EAGLE (schematic and board) files](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/Grove-NFC_v1.1.zip)
- [PN532 Datasheet PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC/master/res/PN532.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_NFC -->
