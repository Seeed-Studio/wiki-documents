---
description: Xadow - NFCタグ
title: Xadow - NFCタグ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_NFC_tag
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg)

Xadow - NFCタグは、高度に統合された近距離無線通信（NFC）タグモジュールです。このモジュールはI2Cインターフェースを採用しており、M24LR64E-Rをベースにしています。M24LR64E-Rには64ビットのユニーク識別子と64-KbitのEEPROMが搭載されています。Xadow - NFCタグには独立したPCBアンテナが付属しており、使用するエンクロージャから簡単に引き出すことができ、プロジェクトの外観デザインにより多くのスペースを提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

##  仕様
---
*   動作電圧: 5Vまたは3V3
*   動作電流: &lt;1mA
*   最大有効範囲: 2CM
*   13.56MHzでの非接触通信に対応
*   ISO 15693およびISO 18000-3モード1に準拠
*   64ビットユニーク識別子（UID）
*   ブロックの読み取り＆書き込み（32ビットブロック）
*   I2Cインターフェース

##  使用方法
---

##  モバイルによる読み取り/書き込み

1.  [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)をダウンロードしてインストールします。

2.  モバイルで読み取り/書き込みが可能です。

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg)

3. スマートフォンをタグに近づけます。

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png)|
|---|---|

##  LEDの制御
---
1.  [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)をダウンロードしてインストールします。

2.  [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)をダウンロードし、NFC_Tag_M24LR6EにリネームしてArduinoのライブラリに追加します。

3.  Arduino IDEを開きます。すでに開いている場合は再起動してください。

4.  Arduino IDEで、メニューからFile -&gt; Example -&gt; NFC_Tag_M24LR6E -&gt; ledControlをクリックします。

5.  これで、スマートフォンでLEDを制御できます。
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
        Serial.println("リモートNFC制御信号を受信しました！");
        if(flag == true){
            Serial.println("LEDが点灯します！");
            digitalWrite(led,HIGH);
        }else{
            Serial.println("LEDが消灯します！");
            digitalWrite(led,LOW);
        }
        preFlag = flag;
    }
    delay(5*1000);
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

##  リソース
---
*   [Xadow - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf)

*   [Xadow - NFC Tag Eagle](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip)

*   [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf)

*   [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

*   [NFC Tag M24LR6E  Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## 技術サポート＆製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>