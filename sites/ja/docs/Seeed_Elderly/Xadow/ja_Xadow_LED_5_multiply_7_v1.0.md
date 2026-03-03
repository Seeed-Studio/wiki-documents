---
description: Xadow - LED 5x7 v1.0
title: Xadow - LED 5x7 v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_LED_5_multiply_7_v1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/Xadow_LED_01.jpg)

Xadow LED 5x7 は、LED パネルと LED コントローラーの 2 つの部分で構成されています。LED パネルは 5x7 のモノクロマトリックスです。LED コントローラーは、Atmega168PV の 12 本の I/O ピンを使用して LED パネルを制御するための制御モジュールです。I2C インターフェースを介して LED コントローラーにコマンドを送信することができます。その後、LED コントローラーが LED ディスプレイを制御します。例えば、アルファベットや数字を表示したり、消費電力を抑えるためにスリープモードに入ることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/xadow-led-p-1518.html)

##  仕様
---
*   動作電圧: 3.3V
*   内蔵マイクロコントローラー
*   制御モード: I2C (アドレス 0x04)
*   寸法: 25.43mm x 20.35mm

##  デモンストレーション
---
紹介で述べたように、LED はアルファベットや数字を表示することができます。次に、興味深いデモをお見せします。

ハードウェアの接続は以下の図のようになります：

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/XadowLED5X7.jpg)

注意: Xadow LED 5X7 を Xadow メインボードに接続する際には、接続方向に注意してください。接続方法は、1 つの Xadow モジュールの未充填の角を別のモジュールの直角に接続する必要があります（各 Xadow モジュールの 4 つの角を参照してください）。

文字列や文字を表示するためのテストコード：

```
#include "Wire.h"
#define XADOW_DEBUG 1
#define LEDAddress 0x04

#define DISP_CHAR_5X7    0x80
#define DISP_STRING        0x81
#define SET_DISP_ORIENTATION 0x82
/* LED マトリックスの表示方向のマクロ定義 */
#define RIGHT_TO_LEFT 0
#define LEFT_TO_RIGHT 1
#define POWER_DOWN  0x83
uint8_t buffer[24];
int error;
int n;
char *str = "SeeedStudio123";
void setup(void)
{
    Wire.begin();
    delay(100);
#if 0
    TESTIO();
    if(error==0)
    {
        DDRB|=0x80;
        PORTB&=~0x80;
    }
#endif

}
void loop(void)
{
    for(n=0;n<100;n++)
    {
        dispString(str,strlen(str),150);
        delay(300);
    }
    // "seeed0728"（9文字）を Xadow LED に表示し、
    // 文字が 1 ステップ移動するのに 150ms かかる

}

/**********************************************************************/
/* 関数: I2C を介して Xadow LED に文字列を表示するコマンドを送信します。 */
/* パラメータ: - char* data_, Xadow LED に表示する文字列を格納します。 */
/*            - uint8_t len, data_ の長さ。                     */
/*            - uint16_t time, 文字が 1 ステップ移動する時間。 */
/* 戻り値: void                                                        */
void dispString(char* data_,uint8_t len,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_STRING);
    Wire.write(len);
    Wire.write((uint8_t*)data_,len);
    Wire.write(time>>8); // 時間の上位バイト
    Wire.write(time);        // 時間の下位バイト
    Wire.endTransmission();
}
void dispChar(uint8_t data_,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_CHAR_5X7);
    Wire.write(data_);
    Wire.write(time>>8); // 時間の上位バイト
    Wire.write(time);        // 時間の下位バイト
    Wire.endTransmission();
}
void setDispOrientation(uint8_t orientation)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(SET_DISP_ORIENTATION);
    Wire.write(orientation);
    Wire.endTransmission();
}
void powerDown()
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(POWER_DOWN);
    Wire.endTransmission();
    digitalWrite(3,HIGH);
}
void wakeUp()
{
    Wire.beginTransmission(LEDAddress);
    Wire.endTransmission();
}

void TESTIO(void)
{

    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
```

コードを Xadow メインボードにアップロードすると、以下のようなシーンが表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/LED_Effect_Diagram_.JPG)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
*   [Xadow LED 5X7 Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip)

*   [Xadow LED ファームウェア](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_Firmware.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>