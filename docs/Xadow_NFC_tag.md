---
name: Xadow - NFC Tag
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html
oldwikiname: Xadow - NFC Tag
prodimagename: Xadow%20NFC%20Tag.jpg
surveyurl: https://www.research.net/r/xadow_NFC_Tag
sku:  113040004
---

![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/Xadow%20NFC%20Tag.jpg)

Xadow - NFC Tag is a highly integrated Near Field Communication Tag module, this module is I2C interface, which base on M24LR64E-R,M24LR64E-R have a 64-bit unique identifier and 64 -Kbit EEPROM.Xadow - NFC Tag attach an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

##  Specification
---
*   Working Voltage:5V or 3V3
*   Working Current&lt;1mA
*   2CM max effective range
*   Serve for contactless communication at 13.56MHz
*   ISO 15693 and ISO 18000-3 mode 1 compatible
*   64-bit unique identifier (UID)
*   Read Block &amp; Write (32-bit blocks)
*   I2C Interface

##  Usage
---

##  Read/Write by Mobile

1.  Download [NfcV-reader for Androud](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) and install it

2.  We can Read/Write it by Mobile

![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/Xadow-NFC_Tag_photo1.jpg)

3.Place your phone close to a tag.

|![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/NFC_Tag_1.png)|![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/NFC_Tag_3.jpg)|![](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/img/NFC_Tag_4.png)
|---|---|
##  Control LED
---
1.  Download [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) and install it

2.  Download [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)rename it to NFC_Tag_M24LR6E and put it into Arduino's library .

3.  Open Arduino IDE. If Arduino IDE is already opened, restart it.

4.  In Arduino IDE, click menus: File -&gt; Example -&gt; NFC_Tag_M24LR6E -&gt; ledControl

5.  Now,you can control LED by you phone.
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
##  Resources
---
*   [Xadow - NFC Tag.PDF](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/res/Xadow-NFC_Tag_v1.0.pdf)

*   [Xadow - NFC Tag Eagle](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/res/Xadow-NFC_Tag_v1.0.zip)

*   [M24LR64E-R datasheet.pdf](https://github.com/SeeedDocument/Xadow_NFC_tag/raw/master/res/M24LR64E-R.pdf)

*   [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

*   [NFC Tag M24LR6E  Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>