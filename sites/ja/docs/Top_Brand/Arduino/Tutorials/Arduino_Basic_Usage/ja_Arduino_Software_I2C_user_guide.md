---
description: Arduinoボード向けI2Cユーザーガイド
title: Arduinoボード向けI2Cユーザーガイド
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino_Software_I2C_user_guide
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ArduinoソフトウェアI2Cユーザーガイド

Arduinoの標準的なI2CライブラリはWireライブラリです。このライブラリはほとんどの場合で十分ですが、以下のような状況では使用できない場合があります：

- I2CピンA4/A5（またはSDA/SCL）が他の目的で既に使用されている場合
- 同じI2Cアドレスのデバイスが使用されている場合

そのため、デジタルポートとアナログポートを使用して、複数の同じI2CアドレスのデバイスをArduino上で動作させるためにSoftwareI2Cライブラリを作成しました。

## Arduino用I2Cスキャナー

I2Cスキャナーは、I2Cバス上のデバイスをスキャンするシンプルなスケッチです。このコードをArduinoにアップロードすることで、モジュールのI2Cアドレスを確認できます。以下のスケッチをアップロードし、シリアルモニターを開いて結果を確認してください：

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin();

    Serial.begin(9600);
    while (!Serial); // シリアルモニターを待機
    Serial.println("---I2C Scanner---");
}

void loop()
{
    byte error, address;
    int nDevices;

    Serial.println("Scanning...");

    nDevices = 0;
    for(address = 1; address < 127; address++ )
    {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();

        Wire.beginTransmission(address+1);

    if (error == 0 && Wire.endTransmission() != 0 ) // SAMDシリーズ用の特別なフラグ
    {
        Serial.print("I2Cデバイスがアドレス0x");
        if (address<16)
            Serial.print("0");
        Serial.print(address,HEX);
        Serial.println("に見つかりました！");

        nDevices++;
    }
    else if (error==4) 
    {
        Serial.print("アドレス0xで不明なエラーが発生しました：");
        if (address<16) 
            Serial.print("0");
        Serial.println(address,HEX);
    }
    }
    if (nDevices == 0)
        Serial.println("I2Cデバイスが見つかりませんでした\n");
    else
        Serial.println("完了\n");

    delay(5000);           // 次のスキャンまで5秒待機
}
```

## SoftwareI2Cライブラリのインストール

----

- [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)に従ってライブラリをインストールしてください。
- **SoftwareI2C**用のArduinoライブラリを提供しています。[**こちら**](https://github.com/Seeed-Studio/Arduino_Software_I2C)をクリックしてダウンロードしてください。

## 例#1: I2Cデバイスアドレスのスキャン

----

### 接続

ここでは、簡単なデモを通じてこの機能を説明します。まず、以下のものを準備してください：

| Seeeduino V4.2 | Grove - OLED Display 1.12" | Base Shield |
|--------------|----------------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

このモジュールは使いやすく、Base Shieldの**D2ポート**に接続するだけです。

![画像を挿入](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/One_OLED.jpg)

Base Shieldを持っていない場合は、以下の接続を行ってください。

|Arduinoピン|OLEDピン  |
|--------|------|
|デジタル3 | SDA   |
|デジタル2   | SCL|
|VCC   | VCC  |
|GND | GND  |

### ソフトウェア

- 次のパスからコードを直接開きます：**File -> Example ->Arduino_Software_I2C-master->SoftwareI2C_Scan**。

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/I2C_Scan.jpg)

```cpp
#include "SoftwareI2C.h"

SoftwareI2C softwarei2c;

void setup()
{
    Serial.begin(115200);
    softwarei2c.begin(3, 2);       // sda, scl
    Serial.println("スキャンを開始します...");
}

void loop()
{
    for(unsigned char i=1; i<=127; i++)
    {
        if(softwarei2c.beginTransmission(i))
        {
            Serial.print("0x");
            Serial.println(i, HEX);

            while(1);
        }
        softwarei2c.endTransmission();
    }

    Serial.println("何も見つかりませんでした");
    while(1);

}
```

- コードをArduinoにアップロードします。
- シリアルポートのボーレートを115200に設定してください。
- シリアルモニターからI2Cアドレスを確認できます。

## Example#2: 2つの Grove - OLED Display 1.12 に異なる情報を表示する

----

### 接続

ここでは、簡単なデモを通じてこの仕組みを説明します。まず、以下のものを準備する必要があります：

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- 1つの Grove - OLED Display 1.12 を **D2ポート** に接続し、もう1つを **D4ポート** に接続します。

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/Two_OLED.jpg)

### ソフトウェア

- [こちら](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip) をクリックして Grove-OLED-Display-1.12 ライブラリをダウンロードします。
- **SeeedGrayOLED.cpp と SeeedGrayOLED.h を Arduino_Software_I2C-master フォルダにコピーします**
- **SeeedGrayOLED.cpp を編集します**

  - ステップ1: ライブラリを Wire.h から SoftwareI2C.h に変更します

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- ステップ2: initSoftwareI2C 関数を追加します。異なる製品に対してクラス名を変更する必要があります。

```cpp
void SeeedGrayOLED::initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl)
{
    Wire = w;
    Wire->begin(__sda, __scl);
}
```

- ステップ3: すべての `Wire.` を `Wire->` に置き換えます。例えば、`Wire.endTransmission()` を `Wire->endTransmission()` に変更します。

```cpp
From
Wire.endTransmission();
To
Wire->endTransmission();
```

- **SeeedGrayOLED.h を編集します**

  - ステップ1: ライブラリ `Wire.h` を `SoftwareI2C.h` に変更します

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- ステップ2: initSoftwareI2C 関数を public クラスに追加します

```cpp
void initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl);
```

- ステップ3: SoftwareI2C *Wire を private クラスに追加します

```cpp
SoftwareI2C *Wire;
```

- 次のパスからコードを直接開きます：**File -> Example -> Arduino_Software_I2C-master -> OLED_Display**。

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/OLED_Display.jpg)

- SoftwareI2C オブジェクトと SeeedGrayOLED オブジェクトを定義する必要があります。

```cpp
// 2つの SoftwareI2C オブジェクトを定義
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

// 2つの SeeedGrayOLED オブジェクトを定義
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;
```

- setup 中に Wire.begin の代わりに initSoftwareI2C を使用します。

```cpp
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl
```

```cpp
// 2つの SoftwareI2C オブジェクトを定義
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

// 2つの SeeedGrayOLED オブジェクトを定義
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;


void setup()
{
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl

  SeeedGrayOled1.init(SSD1327);
  SeeedGrayOled1.clearDisplay();     // ディスプレイをクリア
  SeeedGrayOled1.setNormalDisplay(); // 通常表示モードを設定
  SeeedGrayOled1.setVerticalMode();  // テキスト表示用に垂直モードを設定


  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled1.setTextXY(i,0);  // カーソルを i 行目、0 列目に設定
  SeeedGrayOled1.setGrayLevel(i); // グレースケールレベルを設定（0 - 15 の任意の数値）
  SeeedGrayOled1.putString("11111111"); // "11111111" を表示
  }


  SeeedGrayOled2.initSoftwareI2C(&WireS2, 5, 4);     // initSoftwareI2C, sda, scl

  SeeedGrayOled2.init(SSD1327);             // SEEED OLED ディスプレイを初期化
  SeeedGrayOled2.clearDisplay();     // ディスプレイをクリア
  SeeedGrayOled2.setNormalDisplay(); // 通常表示モードを設定
  SeeedGrayOled2.setVerticalMode();  // テキスト表示用に垂直モードを設定

  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled2.setTextXY(i,0);  // カーソルを i 行目、0 列目に設定
  SeeedGrayOled2.setGrayLevel(i); // グレースケールレベルを設定（0 - 15 の任意の数値）
  SeeedGrayOled2.putString("00000000"); // "00000000" を表示
  }
}

  void loop()
  {

  }
```

- スケッチにアップロードします。
- 1つの画面には "11111111" が表示され、もう1つの画面には "00000000" が表示されます。

## ライブラリのAPI

-----

- **begin() 関数**: SoftwareI2Cライブラリを使用してソフトウェアI2C通信を開始するには、まずSoftwareI2C.begin()を呼び出す必要があります。

```cpp
SoftwareI2C::begin(int Sda, int Scl)
```

- **beginTransmission 関数**: ATmegaがI2Cマスターとして動作している場合に使用します。指定されたアドレスへの送信準備のために、SoftwareI2Cライブラリ内の内部変数を設定します。

```cpp
SoftwareI2C.beginTransmission(uchar addr)
```

- **endTransmission() 関数**: 指定されたアドレスへの送信を終了します。

```cpp
SoftwareI2C.endTransmission()
```

- **write 関数**: 引数リストにあるデータを送信データバッファに格納します。この関数には2つのバリエーションがあります。1つはバイトを送信するもので、もう1つは配列を送信するものです。

```cpp
SoftwareI2C.write(uchar dta)
```

```cpp
SoftwareI2C::write(uchar len, uchar *dta)
```

- **read 関数**: 受信バッファ内のバイトを返します。

```cpp
SoftwareI2C.read()
```

## 参考資料

----

- **[ライブラリ]** [Arduino SoftwareI2C Library](https://github.com/Seeed-Studio/Arduino_Software_I2C/archive/master.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>