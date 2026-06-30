---
title: Seeed Studio XIAO ESP32-C5 でのピンマルチプレクシング
description: ''
keywords:
  - xiao
  - esp32c5
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_pin_multiplexing
last_update:
  date: 12/30/2025
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-01-19'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_pin_multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Seeed Studio XIAO ESP32-C5 は、多様な周辺インターフェースと GPIO ピンを備えた高性能で汎用性の高い開発ボードです。これらのピンは、他のデバイスとの通信、アナログセンサーの読み取り、LED の制御など、さまざまな用途に使用できます。本チュートリアルでは、XIAO ESP32-C5 のマルチプレクスされたピンの使い方を解説します。<br/>
まとめると、XIAO ESP32-C5 は 1×I2C、1×SPI、2×UART、最大 11×GPIO（PWM 対応）、5×ADC チャンネル、および JTAG（裏面パッド）のボンディングパッドインターフェースを備えています。

## 入門ガイド

次に、**PlatformIO** と **Arduino IDE** の 2 つのプラットフォームに基づいて、それぞれサンプルチュートリアルとコードを提供します。ご自身の状況に応じて開発プラットフォームを選択してください。<br/>
**Arduino IDE** をまだ使用したことがない場合は、[Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/) を参照してください。<br/>
**PlatfromIO** をまだ使用したことがない場合は、[Platform IO with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/ja/xiao_esp32c5_with_platformio/) を参照してください。

### ピン配置の概要

始める前に、次の回路図を使って XIAO ESP32-C5 が持つすべてのピンとその機能を確認しましょう。

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

### デジタル

XIAO ESP32-C5 の 11 本すべての IO ピン（D0–D10）はデジタル機能をサポートしています。以下は、デジタル機能を使用してライトのオン／オフ状態を制御する実用的な例であり、用途に応じてこれらのピンをマルチプレクスして使用できます。

#### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ制御効果を実現します。実際の開発状況に応じて、適切なコードを選択して再利用できます。

<Tabs>
<TabItem value=' Arduino IDE'>

- 参考コード

```cpp
const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認してください。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参考コード

```cpp
#include <Arduino.h>

const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>
</Tabs>

#### 結果

- コードを書き込んだ後、ボタンを押すと、押すたびに LED のオン／オフが切り替わり、実際の照明を制御しているような効果を再現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_1.gif" style={{width:400, height:'auto'}}/></div>

:::tip
ボタンを押しても上記のような動作が得られない場合は、まずオンボードの RESET ボタンを押してボードを起動する必要があるかもしれません。
:::

### PWM

XIAO ESP32-C5 の D0–D11 のすべてのピンは PWM 機能をサポートしています。PWM は、サーボ、モーター、LED ライトなどのデバイスを駆動するために使用できます。以下は、PWM 制御による呼吸ライトの例で、PWM の機能を示すものです。

#### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ制御効果を実現します。実際の開発状況に応じて、適切なコードを選択して再利用できます。

<Tabs>
<TabItem value=' Arduino IDE'>

- 参照コード

```cpp
int ledPin = D1;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参照コード

```cpp
#include <Arduino.h>

int ledPin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

</TabItem>
</Tabs>

#### 結果

コードを書き込むと、Grove - Variable Color LED がブレスライト効果を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_2.gif" style={{width:400, height:'auto'}}/></div>

### アナログ

XIAO ESP32-C5 では、A0〜A5 ピンがアナログ読み取り機能をサポートしています。ADC 読み取りは、バッテリー電圧の測定やロータリーエンコーダの読み取りなどのシナリオに適用できます。次に、Grove-Rotary Angle Sensor の電圧測定を例に、ADC 読み取り機能をデモンストレーションします。

#### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Rotary Angle Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ制御効果を実現します。実際の開発状況に応じて、適切なコードを選択して再利用できます。

<Tabs>
<TabItem value=' Arduino IDE'>

```cpp
iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参照コード

```cpp
#include <Arduino.h>

iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>
</Tabs>

#### 結果

シリアルモニタを開くと、Grove-Rotary Angle Sensor から読み取った生の ADC 値（analogValue）、ミリボルト値（analogVolts）、電圧値（voltage）が出力されます。Grove-Rotary Angle Sensor を回転させると、明らかな変化が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

### シリアル通信

XIAO ESP32-C5 には、シリアル通信に利用できる 2 つのハードウェアシリアル通信インターフェース **USB Serial** と **UART1 Serial** が搭載されています。さらに、他の汎用ピンを使用してシリアル通信インターフェースを擬似的に実装することもできます。

#### USB / UART1 シリアル

**USB Serial** の場合は、ボードを USB-C でコンピュータに直接接続してモニタリングします。これは前述の例で使用したインターフェースです。**UART1 Serial** の場合は、Seeed Studio の **XIAO Debug Mate** を使用してモニタリングします。

##### ハードウェアの準備

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio XIAO Debug Mate</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ制御効果を実現します。実際の開発状況に応じて、適切なコードを選択して再利用できます。<br/>
Serial1 に対応するピンは `RX_PIN - D7` と `TX_PIN - D6` です。

<Tabs>
<TabItem value=' Arduino IDE'>

- 参照コード

```cpp
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>

<TabItem value='PlatformIO'>

- platform.ini の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参照コード

```cpp
#include <Arduino.h>

#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>
</Tabs>

##### 結果

プログラムを書き込んだ後、Seeed Studio の **XIAO Debug Mate** の UART 機能を介してモニタリングできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_debug.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Seeed Studio XIAO Debug Mate をまだ使用したことがない場合は、[Getting Started with XIAO Debug Mate](https://wiki.seeedstudio.com/ja/getting_started_with_xiao_debug_mate/) を参照してください。
:::

#### ソフトウェアシリアル

このセクションでは、汎用ピンを使用してシリアル通信ピンをシミュレートし、ソフトウェアシリアル通信の機能をデモンストレーションします。

##### ハードウェアの準備

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>CH340G USB to Serial (TTL) Module&Adapter</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ制御効果を実現します。実際の開発状況に応じて、適切なコードを選択して再利用できます。<br/>
対応するソフトウェアシミュレートピンは `RX_PIN - D2` と `TX_PIN - D1` です。

<Tabs>
<TabItem value=' Arduino IDE'>

- `EspSoftwareSerial` 依存ライブラリをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_1.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考コード

```cpp
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = plerup/EspSoftwareSerial@^8.2.0
```

- 参考コード

```cpp
#include <Arduino.h>
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>
</Tabs>

##### 結果

- 配線図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_1.png" style={{width:600, height:'auto'}}/></div>

- プログラムを書き込んだ後、ボードを任意のシリアルツールに接続し、対応するボーレートを設定すると、双方向通信を確立できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.png" style={{width:600, height:'auto'}}/></div>

### I2C

XIAO ESP32-C5 チップには I2C インターフェースが統合されており、フラッシュメモリ、ディスプレイ、センサなどの外部 I2C デバイスを接続するために使用できます。次に、Seeed Studio Expansion Board Base for XIAO を例として、I2C の使用方法を説明します。

#### ハードウェアの準備

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio Expansion Board Base for XIAO</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### ソフトウェア

以下のコード例は、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ表示効果を実現します。実際の開発シナリオに応じて、適切なコードを選択して再利用できます。

<Tabs>
<TabItem value=' Arduino IDE'>

- U8g2 ライブラリをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考コード

```cpp
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = 
	olikraus/U8g2@^2.36.15
```

- 参考コード

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0); 
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>
</Tabs>

#### 結果

- プログラムを書き込むと、画面に `Hello World!` と `XIAO ESP32-C5!` のテキストが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.jpg" style={{width:600, height:'auto'}}/></div>

### SPI

XIAO ESP32-C5 チップには SPI インターフェースが統合されており、フラッシュメモリ、ディスプレイ、センサなどの外部 SPI デバイスを接続するために使用できます。この例では、SPI 画面を使用して SPI の機能をデモンストレーションします。

#### ハードウェアの準備

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/10402050_main-02-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### ソフトウェア

以下のコードスニペットは、それぞれ Arduino IDE と PlatformIO をベースにしており、同じ表示効果を実現します。実際の開発ニーズに応じて、適切なコードを選択して再利用できます。

<Tabs>
<TabItem value=' Arduino IDE'>

- U8g2 ライブラリをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考コード

```cpp
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>

<TabItem value='PlatformIO'>

- `platform.ini` の内容が次のようになっていることを確認します。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps =
  olikraus/U8g2@^2.36.15
```

- 参考コード

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>
</Tabs>

#### 結果

- 配線図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_2.png" style={{width:600, height:'auto'}}/></div>

- コードを書き込むと、画面に Hello XIAO ESP32-C5 というテキストが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
