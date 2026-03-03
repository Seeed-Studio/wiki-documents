---
title: Grove - NFC标签
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove_NFC_Tag/
slug: /cn/Grove_NFC_Tag
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_uasge.jpg)

Grove - NFC标签是一个高度集成的近场通信标签模块，该模块采用I2C接口，基于M24LR64E-R芯片，M24LR64E-R具有64位唯一标识符和64-Kbit EEPROM。Grove - NFC标签配备了独立的PCB天线，可以轻松伸出您使用的任何外壳，为您设计项目外观留出更多空间。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)

规格参数
=============

- 工作电压：5V或3V3
- 工作电流：&lt;1mA
- 有效范围：&lt;2cm
- 在13.56MHz频率下提供非接触式通信服务
- 兼容ISO 15693和ISO 18000-3模式1
- 64位唯一标识符（UID）
- 读取块和写入（32位块）
- Grove I2C接口

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

使用方法
=====

从手机读取/写入
--------------------

1. 下载[Android版NfcV-reader](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)并安装
2. 我们可以从手机读取/写入数据

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_1.png)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_3.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_4.png)

控制LED
-----------

1. 硬件安装

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_Photo.jpg)

1. 下载[Android版NfcV-reader](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)并安装
2. 下载[NFC标签库](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)，将其重命名为NFC_Tag_M24LR6E并放入Arduino的库文件夹中。
3. 打开Arduino IDE。如果Arduino IDE已经打开，请重新启动它。
4. 在Arduino IDE中，点击菜单：文件 -> 示例 -> NFC_Tag_M24LR6E -> ledControl
5. 现在，您可以从手机控制LED。

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

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.pdf)
- [Grove - NFC Tag Eagle 文件](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip)
- [M24LR64E-R 数据手册.pdf](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/M24LR64E-R.pdf)
- [Android 版 NfcV-reader](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)
- [NFC Tag M24LR6E 库](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_NFC_Tag -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>