---
description: Wio-Tracker 1110の開発チュートリアル
title: 開発チュートリアル
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 9/4/2023
  author: Jessie
---

開発を始める前に、まず[ツールチェーンのセットアップ](https://wiki.seeedstudio.com/ja/setup_toolchain_for_wio_tracker/)を確認してツールをセットアップしてください。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## ファームウェア概要

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>

## Grove

Wio Tracker 1110 Dev Boardには6つのGroveインターフェースがあり、300以上のGroveモジュールを接続できます。Groveモジュールについて詳しく知りたい場合は[こちら](https://wiki.seeedstudio.com/ja/Grove_Sensor_Intro/)をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>

### Grove I2C

DKにはGrove I2Cポートがあり、`SDA`はピン27、`SCL`はピン26に接続されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

### Grove UART

Wio Tracker 1110 Dev Boardには2つのUARTペリフェラル、`uart0`と`uart1`があります。`uart0`のピンはデバッグ用にCH340Cに接続されており、`uart1`はGrove UARTポートとして機能します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

回路図を参照すると、TXDはピン8、RXDはピン6に配置されています。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

### Grove Digital

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
  Serial.begin(115200);        // ボーレート115200でシリアル通信を開始
  while (!Serial) delay(100); 

void loop()
{
  long RangeInInches;         // インチ単位の距離を格納する変数
  long RangeInCentimeters;    // センチメートル単位の距離を格納する変数

  Serial.println("The distance to obstacles in front is: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // 超音波センサーを使用してインチ単位で距離を測定
  Serial.print(RangeInInches);  
  Serial.println(" inch");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" cm");             

  delay(2500);  
}
```

### Grove Analog

<details>
<summary>サンプルコード:</summary>

```cpp
#include <Adafruit_TinyUSB.h> // for Serial

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10-bit ADC with 3.6V input range

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
 // Get a fresh ADC value
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // Display the results
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