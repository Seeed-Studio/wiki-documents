---
name: Grove - NFC Tag
category: Communication
bzurl: https://seeedstudio.com/Grove-NFC-Tag-p-1866.html
oldwikiname: Grove_-_NFC_Tag
prodimagename: Grove-NFC_Tag_uasge.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/grove nfc tag.jpg
surveyurl: https://www.research.net/r/Grove-NFC_Tag
sku: 101020070
tags: grove_i2c, io_3v3, io_5v, plat_duino
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/Grove-NFC_Tag_uasge.jpg)

Grove - NFC Tag is a highly integrated Near Field Communication Tag module,this module is I2C interface,which base on M24LR64E-R,M24LR64E-R have a 64-bit unique identifier and 64 -Kbit EEPROM.Grove - NFC Tag attach an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.


[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)

Specifications
=============

-   Working Voltage:5V or 3V3
-   Working Current&lt;1mA
-   Effective range&lt;2cm
-   Serve for contactless communication at 13.56MHz
-   ISO 15693 and ISO 18000-3 mode 1 compatible
-   64-bit unique identifier (UID)
-   Read Block & Write (32-bit blocks)
-   Grove I2C Interface

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Platforms Supported
-------------------
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.





Usage
=====

Read/Write from Mobile
--------------------

1.  Download [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) and install it
2.  We can Read/Write it from Mobile

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/NFC_Tag_1.png)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/NFC_Tag_2.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/NFC_Tag_3.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/NFC_Tag_4.png)

Control LED
-----------

1.  Hardware Installation

![](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/img/Grove-NFC_Tag_Photo.jpg)

1.  Download [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) and install it
2.  Download [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E), rename it to NFC_Tag_M24LR6E and put it into Arduino's library .
3.  Open Arduino IDE. If Arduino IDE is already opened, restart it.
4.  In Arduino IDE, click menus: File -> Example -> NFC_Tag_M24LR6E -> ledControl
5.  Now, you can control LED from your phone.

```
 
#include "NfcTag.h"
#include <Wire.h>
 
NfcTag nfcTag;
int led = 5;
bool flag = false;
bool preFlag = false;
void setup(){
  Serial.begin(9600);
  pinMode(led,OUTPUT);
  nfcTag.init();
}
 
void loop(){
  flag = nfcTag.readByte(EEPROM_I2C_LENGTH-1) == 0xff?true:false;
  if(flag != preFlag){
    Serial.println("get remote NFC control signal!");
    if(flag == true){
      Serial.println("led will light up!");
      digitalWrite(led,HIGH);
    }else{
      Serial.println("led will turn dark!");
      digitalWrite(led,LOW);
    }
    preFlag = flag;
  }
  delay(5*1000);
}
```

Resources
--------

-   [Grove - NFC Tag.PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/res/Grove-NFC_Tag_v1.0.pdf)
-   [Grove - NFC Tag Eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/res/Grove-NFC_Tag_v1.0.zip)
-   [M24LR64E-R datasheet.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-NFC_Tag/master/res/M24LR64E-R.pdf)
-   [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)
-   [NFC Tag M24LR6E Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_NFC_Tag -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>