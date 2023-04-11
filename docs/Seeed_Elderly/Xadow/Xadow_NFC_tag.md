---
description: Xadow - NFC Tag
title: Xadow - NFC Tag
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_NFC_tag
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg)

Xadow - NFC Tag is a highly integrated Near Field Communication Tag module, this module is I2C interface, which base on M24LR64E-R,M24LR64E-R have a 64-bit unique identifier and 64 -Kbit EEPROM.Xadow - NFC Tag attach an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

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

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg)

3.Place your phone close to a tag.

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png)
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


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resources
---
*   [Xadow - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf)

*   [Xadow - NFC Tag Eagle](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip)

*   [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf)

*   [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

*   [NFC Tag M24LR6E  Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
