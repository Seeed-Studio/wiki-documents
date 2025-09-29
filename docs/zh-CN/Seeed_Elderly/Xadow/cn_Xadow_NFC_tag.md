---
description: Xadow - NFC 标签
title: Xadow - NFC 标签
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_NFC_tag
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg)

Xadow - NFC 标签是一款高度集成的近场通信标签模块，该模块采用 I2C 接口，基于 M24LR64E-R。M24LR64E-R 具有一个 64 位唯一标识符和 64-Kbit EEPROM。Xadow - NFC 标签配备了一个独立的 PCB 天线，可以轻松地从您使用的任何外壳中伸出，为您的项目外观设计提供更多空间。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

## 规格
---
* 工作电压：5V 或 3V3
* 工作电流：&lt;1mA
* 最大有效范围：2CM
* 支持 13.56MHz 的非接触式通信
* 兼容 ISO 15693 和 ISO 18000-3 模式 1
* 64 位唯一标识符 (UID)
* 读取块 &amp; 写入 (32 位块)
* I2C 接口

## 使用方法
---

## 使用手机进行读写

1. 下载 [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) 并安装。

2. 我们可以通过手机进行读写。

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg)

3. 将手机靠近标签。

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png)|
|---|---|

## 控制 LED
---
1. 下载 [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) 并安装。

2. 下载 [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)，将其重命名为 NFC_Tag_M24LR6E 并放入 Arduino 的库中。

3. 打开 Arduino IDE。如果 Arduino IDE 已经打开，请重新启动。

4. 在 Arduino IDE 中，点击菜单：File -&gt; Example -&gt; NFC_Tag_M24LR6E -&gt; ledControl。

5. 现在，您可以通过手机控制 LED。
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

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
* [Xadow - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf)

* [Xadow - NFC Tag Eagle](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip)

* [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf)

* [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

* [NFC Tag M24LR6E Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>