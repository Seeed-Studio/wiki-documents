---
description: Energy Monitor Shield V0.9b
title: Energy Monitor Shield V0.9b
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Energy_Monitor_Shield_V0.9b
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Energy Monitor Shield V0.9b
category: Discontinued
bzurl:
oldwikiname: Energy_Monitor_Shield_V0.9b
prodimagename:
bzprodimageurl: https://www.research.net/r/Energy_Monitor_Shield_V0-9b
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_intro.jpg)

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_h.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Energy Monitor Shieldは、LCDスクリーンとワイヤレストランシーバーnRF24L01+を接続するインターフェースを備えたエネルギー監視システムを構築するために設計されたArduino互換の拡張カードです。

モデル: [830070001](https://www.seeedstudio.com/)

## 特徴

* 最大3つのACセンサー（30-100A）を接続可能。

* LCDスクリーンNokia LCD5110をサポート。

* ジャンパーでLCDバックライトをオフにする機能。

* 2つのボタンで操作可能（1つのアナログピンを使用）。

* 2.4G nRF24L01+トランシーバーを接続するためのインターフェース。

* GROVE互換コネクタ：I2C。

* Ethernet Shield（Wiznet 5100 + SD）と完全互換。

## レイアウトと回路図

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/Em-top.jpg)

* EM Shieldの左側には電流センサー用の3つのコネクタがあり、右側にはLCDスクリーン用のコネクタがあります。

* ジャンパーJP1はLCDスクリーンのリアルバックライトをオン/オフするために使用されます。

* 右上隅にはI2Cコネクタがあります。

* 右側には2つのボタン（S1およびS2とラベル付けされています）があります。

* ボードの中央（LCDスクリーンのすぐ右側）にはnRF24L01+用のコネクタがあります。

**デバイスの回路図**

## 基本機能

基本バージョン（Ethernet Shieldを使用しない場合）では、電流センサーを使用して3つの異なる回路のエネルギー消費を監視することができます。消費電力の現在のレベルに関する情報はLCDスクリーンに表示できます。デバイスの管理はShield上の2つのボタンを使用して行うことができます。取得したデータはトランシーバーnRF24L01+によって送信することができます。

## 拡張機能

さらに、EM Shieldはi2c Grove互換コネクタを使用して任意のデバイス（センサー、ディスプレイなど）を接続することができます。
EM ShieldはEthernet Shield（Wiznet 5100 + SD）と完全互換で設計されているため、これら2つのShieldを組み合わせて、さらに高度な電力監視デバイス（SDカードへのログ記録やウェブページでのデータ表示）を作成することができます。

## インターフェース

* A0, A1, A2 - ACセンサー接続用

* A4 (SDA), A5 (SCL) - "I2C"コネクタに表示（コネクタの他の2つのピンはセンサー供給用のVCCとGND）

* RFモジュールnRF24L01+接続用インターフェース：

  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D8 - RF_CE

    * D7 - RF_CSN

    * D2 - RF_IRQ

* LCD5110接続用インターフェース：

  * D11 - MOSI
  * D13 - SCK

    * D5 - LCD_D/C

    * D6 - LCD_RST

    * D3 - LCD_CS

* A3 - ボタン

## ライブラリ

### 必要なライブラリ

Energy Monitor Shield を使用するには、以下のライブラリが必要です：

* トランシーバー nRF24L01+ を操作するためのライブラリ - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* SPI をサポートする LCD 51110 ディスプレイを使用するためのライブラリ - [LCD5110_Graph_SPI](https://github.com/stepanovalex/LCD5110_Graph_SPI/archive/master.zip)

* 電流センサーを操作するためのライブラリ - [EmonLib](https://github.com/openenergymonitor/EmonLib/archive/master.zip)

* 以下のライブラリを使用する必要があります - [www.mysensors.org](https://github.com/mysensors/Arduino/tree/master)

* MySensors Arduino Library [(v1.5)](http://www.mysensors.org/download/sensor_api_15)

RF24 と LCD ディスプレイを操作する際に使用されるライブラリには SPI が必要です。

### ライブラリ使用時の特徴

ライブラリには、それらの動作を理解するための例が含まれています。

RF モジュールの初期化は以下のように行います：

```cpp
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```

LCD ディスプレイの初期化は以下のように行います：

```cpp
//LCD5110 myGLCD(DC,RST,CS);
LCD5110 myGLCD(5,6,3);
```

## 簡単なデモ

```cpp

#include <SPI.h>
#include <LCD5110_Graph_SPI.h>
#include "EmonLib.h"   

#define WINDOW 15
#define DELTA 1500

EnergyMonitor emon1;

double sIrms;
float Pcur;
float Pmax;
float Pmin=100;

LCD5110 myGLCD(5,6,3);

extern unsigned char SmallFont[];

unsigned long measureTime;
boolean flag=false;
double delta=0;

#define DELTAMEASURE 30000

void setup(void)
{
  myGLCD.InitLCD(70);
  myGLCD.setFont(SmallFont);

  myGLCD.update();

  emon1.current(0, 111.1);             // 電流: 入力ピン、キャリブレーション。
  double Irms[WINDOW];
  // キャリブレーション (オフセットを見つける)
  double cIrms = 0;
  flag = false;

  while (!flag) {
    myGLCD.print("calibrating", 0, 0);
    myGLCD.update();
    Irms[0] = emon1.calcIrms(1480); // 測定の最初の値は明らかに「不正確」
      //Serial.println("delta を計算");
      for (int i=0; i<WINDOW; i++) {
        Irms[i] = emon1.calcIrms(1480);
        cIrms = cIrms + Irms[i];
        delay(100);
      }
      delta = cIrms/WINDOW;
      flag = true;
  }

//myGLCD.print(" ready", 0, 0);
    //myGLCD.update();    

}

void loop(void)
{
  // 現在の値を記録
  sIrms = emon1.calcIrms(1480) - delta;  // Irms のみを計算
  sIrms = abs(sIrms);
  Pcur = sIrms*0.220;

    // 取得したデータを表示
    char tbuf[6];
    dtostrf(Pcur,5,5,tbuf);
    myGLCD.print(tbuf, 0, 0);
    dtostrf(analogRead(A3),4,0,tbuf);
    myGLCD.print(tbuf, 30, 15);

    myGLCD.update();

    delay(250);

}
```

## ワイヤレス技術を使用した簡単なデモ

```cpp
/*
 このサンプルコードはパブリックドメインに属します。
 */

#include <SPI.h>
#include <MySensor.h>  // MySensors.org ライブラリ V1.5 を含む
#include "EmonLib.h" // Emon ライブラリを含む
#include <LCD5110_Graph_SPI.h> // NOKIA5110 ライブラリを含む

#define CHILD_ID_POWER 0

EnergyMonitor emon;

LCD5110 myGLCD(5,6,3);
extern unsigned char SmallFont[];

MyTransportNRF24 transport(7, 8); //EMv1 用
MySensor gw(transport);

unsigned long lastSend;
unsigned long SEND_FREQUENCY = 20000; // 送信間の最小時間 (ミリ秒単位)。ゲートウェイをスパムしないようにする。

float Irms;
float lastIrms = -99;

char tbuf[8];
char sbuf[12];

MyMessage IrmsMsg(CHILD_ID_POWER, V_KWH);

void setup()  
{
  myGLCD.InitLCD();
  myGLCD.setFont(SmallFont);
  myGLCD.update();

  // 第三引数はリピーターモードを有効にします。
  gw.begin(NULL, AUTO, true),
  gw.sendSketchInfo("Energy Monitor v1", "1.0");

//  emon.current(0, 111.1);             // 電流: 入力ピン、キャリブレーション。
   emon.current(0, 66.5);

  // すべてのセンサーをゲートウェイに登録 (子デバイスとして作成されます)

  gw.present(CHILD_ID_POWER, S_POWER);
}

void loop()      
{      
  gw.process();
  unsigned long now = millis();

  double Irms = emon.calcIrms(1480);  // Irms のみを計算
  float realIrms  = emon.Irms*220;        // 実効電力を変数に抽出

 if (realIrms != lastIrms) {
      gw.send(IrmsMsg.set(realIrms, 1)); // ゲートウェイに送信

  lastIrms=realIrms;
  }

   dtostrf(realIrms,5,2,tbuf);
    sprintf(sbuf, "  %s kWt", tbuf);
    myGLCD.print(sbuf, 20, 0);   
    myGLCD.print("Powr:", 0, 0);  

    dtostrf(Irms,5,2,tbuf);
    sprintf(sbuf, "  %s Amp", tbuf);
    myGLCD.print(sbuf, 20, 10);   
    myGLCD.print("Irms:", 0, 10);  

    myGLCD.update();

      Serial.print("Power: ");
      Serial.println(realIrms);

  gw.sleep(SEND_FREQUENCY);
  }
```

## バージョントラッカー

| リビジョン | 説明 | リリース日 |
|---|---|---|
| 1.0 | 公開バージョン | 2014年4月1日 |
| 0.9b | 公開バージョン（未製造） | 2013年10月20日 |
| 0.9 | 試作版 | 2013年9月10日 |

## 質問と回答

* ブログ [Energy Monitor Shield - Wireless energy monitoring](//devicter.blogspot.ru/2014/03/energy-monitor-shield.html#more) RU

* 質問はメールでどうぞ: support@devicter.ru

## 購入方法  

この製品は以下で購入可能です：

* 中国（世界中に配送可能）

  * [Seeedストア](https://www.seeedstudio.com/depot/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html)

* ロシア

  * [Devicterストア](http://devicter.ru/goods/EM-Shield)

## ライセンス  

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードおよびライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされており、詳細はソースコードファイルをご確認ください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>