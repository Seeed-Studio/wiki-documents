---
description: Wio-Tracker 1110 の開発チュートリアル
title: 開発チュートリアル
keywords:
- トラッカー
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

開発を始める前に、まず [ツールチェーンのセットアップ](https://wiki.seeedstudio.com/ja/setup_toolchain_for_wio_tracker/) を確認してツールをセットアップしてください。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## ファームウェア概要

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>

## Grove

Wio Tracker 1110 開発ボードには 6 つの Grove インターフェースがあり、300 以上の Grove モジュールに接続できます。Grove モジュールについて詳しくは [こちら](https://wiki.seeedstudio.com/ja/Grove_Sensor_Intro/) をご覧ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>

### Grove I2C

DK には Grove I2C ポートがあり、`SDA` はピン 27、`SCL` はピン 26 に接続されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

### Grove UART

Wio Tracker 1110 開発ボードには 2 つの UART ペリフェラル、すなわち `uart0` と `uart1` が搭載されています。`uart0` のピンはデバッグ用に CH340C に接続されており、`uart1` は Grove UART ポートとして機能します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

回路図を参照すると、TXD はピン 8、RXD はピン 6 に位置しています。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

### Grove デジタル

```cpp
#include <Adafruit_TinyUSB.h>  
#include <Wire.h>              
#include <Ultrasonic.h>        

// 超音波センサーが接続されているピンを定義
constexpr int ULTRASONIC_PIN = D0;  

Ultrasonic ultrasonic(ULTRASONIC_PIN);  

void setup()
{
  delay(100);                 
  Serial.begin(115200);        // シリアル通信を115200ボーレートで開始
  while (!Serial) delay(100); 
}

void loop()
{
  long RangeInInches;         // 距離（インチ単位）を格納する変数
  long RangeInCentimeters;    // 距離（センチメートル単位）を格納する変数

  Serial.println("前方の障害物までの距離: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // 超音波センサーでインチ単位の距離を測定
  Serial.print(RangeInInches);  
  Serial.println(" インチ");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" センチメートル");             

  delay(2500);  
}
```

### Grove アナログ

<details> 
<summary>サンプルコード:</summary>

```cpp
#include <Adafruit_TinyUSB.h> // シリアル通信用

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10ビットADC、3.6V入力範囲

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
	// 新しいADC値を取得
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // 結果を表示
  Serial.print(adcvalue);
  Serial.print(" [");
  Serial.print((float)adcvalue * MV_PER_LSB);
  Serial.println(" mV]");

  delay(1000);
}
```
</details> 

### LoRaWAN

## リソース

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)