---
description: Bugduino
title: Bugduino
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bugduino
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg)

BugduinoはArduino互換モジュールです。

[Buglabs BUGプラットフォーム](http://www.buglabs.net/)での使用を目的に設計されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bugduino-V2.0-p-863.html)

## 特徴
---
* [Arduino](https://arduino.cc)互換、Seeeduinoベース
* BUGコネクタ
* USB to UART: FT232RL
* ATmega328マイクロコントローラ
* 入力電圧 - 7-12V
* 14デジタルI/Oピン（6 PWM出力）
* 8アナログ入力
* 32kフラッシュメモリ
* 16MHzクロックスピード

**

## 回路図

1. [File:BUGduinoSchematicPDF.pdf](https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf)

## 仕様

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row"> マイクロプロセッサ</th>
<td> Atmega328</td>
</tr>
<tr>
<th scope="row"> PCBサイズ</th>
<td> 60.2cm x 60.2cm</td>
</tr>
<tr>
<th scope="row"> インジケータ</th>
<td> POWER、緑色LED。Txd、Rxd、Rst用のLED</td>
</tr>
<tr>
<th scope="row"> 電源供給</th>
<td> 5V DC</td>
</tr>
<tr>
<th scope="row"> インターフェース</th>
<td> Mini-B USB、2.54mmピッチピンヘッダ</td>
</tr>
<tr>
<th scope="row"> 接続性</th>
<td> USB</td>
</tr>
<tr>
<th scope="row"> 通信プロトコル</th>
<td> UART、Bit Bang I/O、SPI、I2C</td>
</tr>
<tr>
<th scope="row"> ROHS</th>
<td> YES</td>
</tr>
</table>

## 機械的寸法

60.2mm * 60.2mm * 20.5mm

## 使用方法

### ハードウェアのインストール

1. シリアルスイッチをUSB側に切り替えます。

2. USBケーブルを接続します。

3. Arduino IDEで対応するCOMポートを選択します。

4. Arduinoボードメニューで「Arduino Duemilanove or Nano w/ ATmega328」を選択します。

5. Arduino IDEでアップロードボタンをクリックします。

### プログラミング
```
#include <Wire.h>

//SLOTS: Vendor:  0x02
//SLOTS: Product  0x10
//SLOTS: Revision 0x20
//A0-->GND, A1-->GND, A2-->GND
#define AT24C02B_Addr  0b1010000

unsigned char bugduino_signature[]=
{
    0x00,0x00,0x02,0x00,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x0b,0x16,0x00,0x00,0x00,0x0f
};
unsigned char address_map[]=
{
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0x7f
};

void setup()
{
    Wire.begin();
    Serial.begin(38400);
}
void loop()
{
  /*
   */
    unsigned char i = 0;
    unsigned char eeprom = 0;
    for(i=0;i<20;i++)
    {
        Wire.beginTransmission(AT24C02B_Addr); //開始
        Wire.send(address_map[i]);
        Wire.endTransmission();    //終了
        Wire.requestFrom(AT24C02B_Addr, 1);    // リクエスト
        delay(1);
        while(Wire.available())    // スレーブが要求より少ないデータを送る可能性あり
        {
            unsigned char c = Wire.receive(); // 1バイトを文字として受信
            if(c != bugduino_signature[i])
            {
                eeprom =1;
            }
        }
    }
    delay(100);

    if(eeprom)
    {
        Serial.println("署名を書き込み中");
        for(i=0;i<20;i++)
        {
            Wire.beginTransmission(AT24C02B_Addr); //開始
            Wire.send(address_map[i]);
            Wire.send(bugduino_signature[i]);
            Wire.endTransmission();    //終了
            delay(10);
        }
    }
    else
    {
        Serial.println("署名OK");
    }
    for(;;);
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>