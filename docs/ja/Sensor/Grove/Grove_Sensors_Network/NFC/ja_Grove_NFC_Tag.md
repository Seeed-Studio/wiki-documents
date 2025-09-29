---
title: Grove - NFC_tag
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove_NFC_Tag/
slug: /ja/Grove_NFC_Tag
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_uasge.jpg)

Grove - NFC Tag は、高度に統合された近距離無線通信タグモジュールです。このモジュールは I2C インターフェースを備えており、M24LR64E-R を基盤としています。M24LR64E-R は 64 ビットのユニーク識別子と 64-Kbit EEPROM を持っています。Grove - NFC Tag は独立した PCB アンテナを備えており、使用するエンクロージャから簡単に伸ばすことができるため、プロジェクトの外観デザインにより多くの余地を残します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)

仕様
=============

- 動作電圧: 5V または 3V3
- 動作電流: &lt;1mA
- 有効範囲: &lt;2cm
- 13.56MHz での非接触通信に対応
- ISO 15693 および ISO 18000-3 モード 1 に準拠
- 64 ビットユニーク識別子 (UID)
- ブロックの読み取り & 書き込み (32 ビットブロック)
- Grove I2C インターフェース

:::tip
    Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
=====

モバイルからの読み取り/書き込み
--------------------

1. [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) をダウンロードしてインストールします。
2. モバイルから読み取り/書き込みが可能です。

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_1.png)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_3.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_4.png)

LED の制御
-----------

1. ハードウェアのインストール

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_Photo.jpg)

1. [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) をダウンロードしてインストールします。
2. [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E) をダウンロードし、NFC_Tag_M24LR6E に名前を変更して Arduino のライブラリに追加します。
3. Arduino IDE を開きます。すでに開いている場合は再起動してください。
4. Arduino IDE のメニューで、File -> Example -> NFC_Tag_M24LR6E -> ledControl をクリックします。
5. これで、スマートフォンから LED を制御できるようになります。

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

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.pdf)
- [Grove - NFC Tag Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip)
- [M24LR64E-R データシート.pdf](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/M24LR64E-R.pdf)
- [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)
- [NFC Tag M24LR6E ライブラリ](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_NFC_Tag から作成されました -->

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>