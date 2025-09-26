---
description: Seeed Studio XIAO nRF52840 (Sense) のピン多重化
title: 両バージョンのピン多重化
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 (Sense) のピン多重化

Seeed Studio XIAO nRF52840 (Sense) は豊富なインターフェースを持っています。**PWMピン**として使用できる**11個のデジタルI/O**と、**ADCピン**として使用できる**6個のアナログ入力**があります。**UART、I2C、SPI**などの3つの一般的なシリアル通信インターフェースをすべてサポートしています。このwikiは、これらのインターフェースについて学び、次のプロジェクトで実装するのに役立ちます！

> ここでの基本機能は、Seeed Studio XIAO nRF52840 Arduinoライブラリの両方で良好に動作します。

## デジタル

プッシュボタンをピンD6に、LEDをピンD10に接続します。次に、以下のコードをアップロードして、プッシュボタンを使用してLEDのON/OFFを制御します。

```cpp
const int buttonPin = 6;     // pushbutton connected to digital pin 6
const int ledPin =  10;      // LED connected to digital pin 10
 
int buttonState = 0;         // variable for reading the pushbutton status
 
void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
 
  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

## デジタルを PWM として使用

LEDをピンD10に接続してください。その後、以下のコードをアップロードすると、LEDが徐々にフェードしていく様子を確認できます。

```cpp
int ledPin = 10;    // LED connected to digital pin 10

void setup() {

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

## アナログ

ポテンショメータをピンA5に、LEDをピンD10に接続します。その後、以下のコードをアップロードして、ポテンショメータのノブを回すことでLEDの点滅間隔を制御します。

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // read the value from the sensor:
  int sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

## シリアル

USBの代わりにGPIO経由でUARTを使用するにはSerial1を使用してください。両方を同時に使用することも可能です。
UARTのTXピンとしてピンD6を、UARTのRXピンとしてピンD7を使用して「Hello World!」メッセージを送信してください。

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}
 
void loop() {
    Serial1.println("Hello World!");
    delay(1000);
}
```

## I2C

- **ステップ 1.** [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に以下のハードウェア接続に従って接続します。

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       |
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動します

- **ステップ 3.** **u8g2** を検索してインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** OLED ディスプレイにテキスト文字列を表示するために、以下のコードをアップロードします

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

## SPI

- **ステップ 1.** [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に以下のハードウェア接続に従って接続します。

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       |
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** このOLEDディスプレイはI2CとSPI通信の両方をサポートしており、デフォルトモードはI2Cです。SPIモードを使用するには、[Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c)を参照して、OLEDディスプレイの通信をSPIに変更してから次に進む必要があります

**注意:** 前のステップでU8g2ライブラリがインストールされていることを確認してください。

- **ステップ 3.** OLEDディスプレイにテキスト文字列を表示するために、以下のコードをアップロードしてください

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();
 
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```
