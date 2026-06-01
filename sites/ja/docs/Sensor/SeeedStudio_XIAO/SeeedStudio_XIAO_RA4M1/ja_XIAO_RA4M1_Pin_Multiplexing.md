---
description: Seeed Studio XIAO RA4M1 を使用したピン多重化。
title: Seeed Studio XIAO RA4M1 を使用したピン多重化
keywords:
  - ra4m1
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
sidebar_position: 1
slug: /xiao_ra4m1_pin_multiplexing
last_update:
  date: 08/15/2024
  author: Jason
createdAt: '2024-08-21'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/xiao_ra4m1_pin_multiplexing/
---

## ハードウェア概要

作業を始める前に、この製品の基本的なパラメータを把握しておくことが非常に重要です。次の表は、Seeed Studio XIAO RA4M1 の特性に関する情報を示しています。

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## デジタル

XIAO RA4M1 には最大 11 本の通常の GPIO ピン、6 本のアナログピン、および背面に 8 個の再利用可能な IO ポートがあります。この例では、XIAO RA4M1、XIAO 拡張ボード、およびリレーを使用して、異なるデジタルピンを読み取りおよび書き込みに使用する方法を説明します。

### ハードウェアの準備

<table align="center">
  <tr>
      <th>Seeed Studio XIAO R4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RA4M1 または Sense を拡張ボードに装着し、Grove ケーブルを使用してリレーを拡張ボードの **A0/D0** インターフェースに接続してください。最後に、USB-C ケーブルで XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO 拡張ボードに接続されたボタンを使用して、リレーのオン／オフ状態を制御する方法を実装します。ボタンが押されるとリレーがオンになり、ボタンを離すとリレーがオフになります。

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

すべてが順調に進めば、プログラムを書き込んだ後、次のような動作が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/31.gif" style={{width:600, height:'auto'}}/></div>

## デジタルを PWM として使用

XIAO RA4M1 上のすべての GPIO ピンは PWM 出力をサポートしています。そのため、任意のピンを使用して PWM を出力し、ライトの明るさを調整したり、サーボを制御したり、その他の機能を実現できます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO RA4M1 または Sense を拡張ボードに装着し、その後 Grove ケーブルを使用して Variable Color LED を拡張ボードの A0/D0 インターフェースに接続してください。最後に、USB-C ケーブルで XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、PWM 出力を使用してライトの明るさを制御する方法を説明します。

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

プログラムが正常に動作すると、次のような動作結果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/32.gif" style={{width:600, height:'auto'}}/></div>

## アナログ

XIAO RA4M1 開発ボードは最大 14 ビットの ADC を備えており、アナログセンサー値を高分解能で読み取ることができます。これにより、より正確な値を取得するのに役立ちます。XIAO RA4M1 開発ボード上のアナログ・デジタルコンバータ（ADC）は、デフォルトでは分解能が 10 ビットに設定されていますが、アナログ読み取りの精度を向上させるために 12 ビットおよび 14 ビットの分解能に設定することもできます。

ADC 精度ごとの詳細データ

- 10-bit :  0~1024
- 12-bit :  0~4096
- 14-bit :  0~16383

次に、ADC の特性を反映するために 2 つのセンサーを選択します。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェア実装

``` cpp
#define ADC_Bit_Fourteen 14
#define ADC_Bit_Twelve 12
#define ADC_Bit_Ten 10

const int analogInPin = A1;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9;  // Analog output pin that the LED is attached to

int sensorValue = 0;  // value read from the pot
int outputValue = 0;  // value output to the PWM (analog out)

void setup() {

  Serial.begin(115200);
  // Ten_Bite_ADC_Config(); // 10bit
  // Twelve_Bite_ADC_Config(); // 12bit
  Fourteen_Bite_ADC_Config(); // 14bit

}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);
  delay(100);
}

void Ten_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Ten);
}

void Twelve_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Twelve);
}

void Fourteen_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Fourteen);
}
```

すべてが順調に進めば、プログラムを書き込んだ後に次のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/33.gif" style={{width:650, height:'auto'}}/></div>

## シリアル

Arduino IDE を使用する際、シリアル通信は多くのプロジェクトで不可欠な要素です。Arduino IDE でシリアルを使用するには、まずシリアルモニタウィンドウを開く必要があります。これはツールバーの **Serial Monitor** アイコンをクリックするか、ショートカットキー **Ctrl+Shift+M** を押すことで行えます。

### 一般的な使い方

よく使用されるシリアル関数には次のようなものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- 読み取り可能な形式でデータをシリアルポートに送信します。
- `Serial.write()` -- バイナリデータをシリアルポートに送信します。
- `Serial.available()` -- シリアルポートから読み取ることができるデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから 1 バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信完了を待機します。

これらのシリアル関数を使用することで、Arduino ボードとコンピュータ間でデータの送受信が可能になり、インタラクティブなプロジェクトを作成するための多くの可能性が広がります。

以下にサンプルプログラムを示します：

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }

  // wait for a second before repeating the loop
  delay(1000);
}
```

### Serial1 の使用方法

上記の XIAO RA4M1 のピン図にある各種パラメータによると、TX ピンと RX ピンがあることがわかります。
これは通常のシリアル通信とは異なりますが、いくつかのパラメータを追加する必要がある点を除けば、使い方は非常によく似ています。
そこで次に、チップから引き出されたピンを使ってシリアル通信を行います。

```c

#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
}

void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

### Software Serial の使用方法

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // initialize software serial
  mySerial.begin(9600);
}

void loop() {
  // read data from software serial
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // write data to software serial
  mySerial.print("Hello World!");

  // wait for a second before repeating the loop
  delay(1000);
}
```

このプログラムでは、まず `SoftwareSerial.h` ライブラリをインクルードしてソフトウェアシリアルを使用できるようにします。次に、ピン 2 と 3 をそれぞれ RX と TX として使用し、mySerial という名前の新しい SoftwareSerial オブジェクトを作成します。

`setup()` 関数では、ハードウェアシリアル（`Serial.begin()`）とソフトウェアシリアル（`mySerial.begin()`）の両方を初期化します。

`loop()` 関数では、`mySerial.available()` 関数を使用して、ソフトウェアシリアルから読み取ることができるデータがあるかどうかを確認します。データがある場合は、`mySerial.read()` 関数を使用して受信したバイトを読み取り、data という変数に保存します。その後、`Serial.print()` と `Serial.println()` 関数を使用して、「Received data: 」という文字列に続けて data の値をハードウェアシリアルに出力します。

また、`mySerial.print()` 関数を使用して「Hello World!」という文字列をソフトウェアシリアルに書き込みます。これにより、XIAO からソフトウェアシリアルポートに接続されたデバイスへデータが送信されます。

最後に、`delay()` 関数を追加して、ループを繰り返す前に 1 秒待機します。

## IIC

XIAO RA4M1 には I2C インターフェースが搭載されており、多くのセンサーのデータ送信や解析、さらには一部の OLED 画面の使用にも利用できます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Grove OLED 付き Seeed Studio Expansion Base for XIAO</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO 拡張ボード上の OLED ディスプレイは I2C プロトコルを使用しており、ボード上の I2C 回路を介して XIAO の I2C インターフェースに接続されています。したがって、XIAO を拡張ボードに直接挿し込み、画面にコンテンツを表示するようにプログラムすることができます。

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO RA4M1 上の OLED ディスプレイの使用方法を紹介します。

#### ステップ 1. Seeed Studio XIAO RA4M1 を拡張ボードに取り付け、Type-C ケーブルを接続します

#### ステップ 2. u8g2 ライブラリをインストールします

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### ステップ 3. コードをコピーして Arduino IDE に貼り付け、書き込みます

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("i'm XIAO RA4M1");
}
```

コードの最初の数行では、Arduino.h、U8x8lib.h、Wire.h などの必要なライブラリをインクルードしています。U8x8lib.h ライブラリは OLED ディスプレイを制御するための関数を提供し、Wire.h ライブラリは I2C 通信のための関数を提供します。

`setup()` 関数では、`u8x8.begin()` 関数を使用して OLED ディスプレイを初期化します。また、`u8x8.setFlipMode()` 関数を使用してディスプレイのフリップモードを設定し、画面を 180 度回転させます。

`loop()` 関数では、`u8x8.setFont()` 関数を使用してフォントを設定し、`u8x8.setCursor()` 関数を使用してディスプレイ上のカーソル位置を指定します。最後に、`u8x8.print()` 関数を使用して、OLED ディスプレイに「Hello World!」という文字列を表示します。

XIAO RA4M1 にプログラムを書き込むと、拡張ボード上の OLED ディスプレイ画面に内容が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/21.png" style={{width:800, height:'auto'}}/></div>

## SPI

RA4M1 チップには複数のペリフェラルが統合されており、その中には SPI インターフェースも含まれます。これを使用して、フラッシュメモリ、ディスプレイ、センサなどの外部 SPI デバイスを接続できます。XIAO RA4M1 は高速 SPI 転送モードもサポートしており、最大 80 MHz の SPI 転送レートを実現できます。これにより、ほとんどの SPI デバイスのデータ転送ニーズを満たすことができます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

上記のようにハードウェアを準備したら、ジャンパワイヤを使用して XIAO と OLED の SPI インターフェースを接続します。配線方法については、次の図を参照してください。

### ソフトウェア実装

次に、以下のプログラムを例として、SPI インターフェースを使用して OLED 画面表示を制御する方法を紹介します。

u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);

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

`setup()` 関数では、チップセレクト (cs)、データ/コマンド (dc)、リセットに使用するピンを指定する適切なコンストラクタ引数で `U8G2_SH1107_128X128_1_4W_HW_SPI` クラスをインスタンス化します。次に、`u8g2.begin()` 関数を呼び出してディスプレイを初期化します。

`loop()` 関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()` 関数を使用して、新しいコンテンツでディスプレイを更新します。`u8g2.firstPage()` 関数は書き込み用にディスプレイバッファを設定し、`u8g2.nextPage()` が更新された内容を表示します。do-while ループにより、プログラムが停止するまでコンテンツが継続的に表示されます。

全体として、このコードは U8g2 ライブラリを使用して OLED ディスプレイを制御し、その上にテキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>

## CAN(XIAO CAN Bus Expansion Board)

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
     <th>XIAO CAN Bus Expansion Board</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ステップ 1 . 2 枚の CAN Bus Breakout Board と XIAO RA4M1 を準備します

#### ステップ 2 . これら 2 つの XIAO RA4M1 を、それぞれ CAN Bus Breakout Board に挿し込みます

#### ステップ 3 . DuPont ケーブル接続を準備します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/36.png" style={{width:400, height:'auto'}}/></div>

### ソフトウェアの準備

[MCP2515 ボード用の Arduino ライブラリ](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) を提供しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

このライブラリには、次のようないくつかのサンプルが含まれています：

- ***OBDII-PIDs*** -  OBD-II インターフェースからデータを取得
- ***send*** - CAN バスにフレームを送信
- ***recv*** - CAN バスからフレームを受信
- ***set_mask_filter_recv*** - マスクとフィルタ設定を使用して CAN バスからフレームを受信

### ソフトウェア実装

:::tip
2 つの XIAO RA4M1 に対して同時に電源を入れたりプログラムをダウンロードしたりすることはできません。そうするとシリアルポートのダウンロード時にエラーが発生します。1 台目のダウンロードが完了したらそれを抜き、次にもう一方の XIAO RA4M1 の電源を入れてプログラムをダウンロードし、最後に両方に同時に電源を入れてシリアルポートメッセージを確認してください。
:::

**CAN 書き込みコード**

```c

/*  send a frame from can bus

    CAN Baudrate,

    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18
*/

#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to your board.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/

#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);

    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);

    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);

    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```

**CAN 読み取りコード**

```c
/*  receive a frame from can bus

    CAN Baudrate,

    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18

    CANBed V1: https://www.longan-labs.cc/1030008.html
    CANBed M0: https://www.longan-labs.cc/1030014.html
    CAN Bus Shield: https://www.longan-labs.cc/1030016.html
    OBD-II CAN Bus GPS Dev Kit: https://www.longan-labs.cc/1030003.html
*/

#include <SPI.h>
#include "mcp_can.h"

/* Please modify SPI_CS_PIN to adapt to your board.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/


#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin


void setup()
{
    Serial.begin(115200);
    while(!Serial);

    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);

    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);

    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}


void loop()
{
    unsigned char len = 0;
    unsigned char buf[8];

    if(CAN_MSGAVAIL == CAN.checkReceive())            // check if data coming
    {
        CAN.readMsgBuf(&len, buf);    // read data,  len: data length, buf: data buf

        unsigned long canId = CAN.getCanId();

        Serial.println("-----------------------------");
        Serial.print("Get data from ID: ");
        Serial.println(canId, HEX);

        for(int i = 0; i<len; i++)    // print the data
        {
            Serial.print(buf[i], HEX);
            Serial.print("\t");
        }
        Serial.println();
    }
}

// END FILE

```

:::tip
この例では、CAN Bus Breakout Board の端子ピン P1 のいずれかをはんだ付けする必要があります。そうして初めて任意の速度を使用できます。そうでない場合は、125 CAN ボーレート未満しか使用できません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/30.png" style={{width:600, height:'auto'}}/></div>

## CAN（その他のトランシーバ）

[Arduino](https://docs.arduino.cc/tutorials/uno-r4-minima/can/) に、チュートリアルとコードの提供に感謝いたします。

### ハードウェアの準備

CAN プロトコルでは、送信側は自分が送信したメッセージを必ず受信する必要があります。TX と RX を接続するだけでは通信は完了せず、通信にはトランシーバを接続する必要があります。ここでは、Arduino 公式の **SN65HVD230 分配モジュール** を使用します。

<table>
    <thead>
        <tr>
            <th>3.3 V</th>
            <th>GND</th>
            <th>D9(CANRX0)</th>
            <th>D10 (CANTX0)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>VCC</th>
            <td>GND</td>
            <th>CANRX</th>
            <td>CANTX</td>
        </tr>
    </tbody>
</table>

### ソフトウェアの準備

**CAN 書き込みコード**

```cpp
/*
  CANWrite

  Write and send CAN Bus messages

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/can
*/

/**************************************************************************************
 * INCLUDE
 **************************************************************************************/

#include <Arduino_CAN.h>

/**************************************************************************************
 * CONSTANTS
 **************************************************************************************/

static uint32_t const CAN_ID = 0x20;

/**************************************************************************************
 * SETUP/LOOP
 **************************************************************************************/

void setup()
{
  Serial.begin(115200);
  while (!Serial) { }

  if (!CAN.begin(CanBitRate::BR_250k))
  {
    Serial.println("CAN.begin(...) failed.");
    for (;;) {}
  }
}

static uint32_t msg_cnt = 0;

void loop()
{
  /* Assemble a CAN message with the format of
   * 0xCA 0xFE 0x00 0x00 [4 byte message counter]
   */
  uint8_t const msg_data[] = {0xCA,0xFE,0,0,0,0,0,0};
  memcpy((void *)(msg_data + 4), &msg_cnt, sizeof(msg_cnt));
  CanMsg const msg(CanStandardId(CAN_ID), sizeof(msg_data), msg_data);

  /* Transmit the CAN message, capture and display an
   * error core in case of failure.
   */
  if (int const rc = CAN.write(msg); rc < 0)
  {
    Serial.print  ("CAN.write(...) failed with error code ");
    Serial.println(rc);
    for (;;) { }
  }

  /* Increase the message counter. */
  msg_cnt++;

  /* Only send one message per second. */
  delay(1000);
}

```

**CAN 読み取りコード**

```cpp
/*
  CANRead

  Receive and read CAN Bus messages

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/can
*/

/**************************************************************************************
 * INCLUDE
 **************************************************************************************/

#include <Arduino_CAN.h>

/**************************************************************************************
 * SETUP/LOOP
 **************************************************************************************/

void setup()
{
  Serial.begin(115200);
  while (!Serial) { }

  if (!CAN.begin(CanBitRate::BR_250k))
  {
    Serial.println("CAN.begin(...) failed.");
    for (;;) {}
  }
}

void loop()
{
  if (CAN.available())
  {
    CanMsg const msg = CAN.read();
    Serial.println(msg);
  }
}

```

***終端抵抗はいつ接続する必要がありますか？***

- 1. 長距離通信：CAN バスが長い場合（例：1 メートル以上）、信号反射による通信障害を避けるため、バスの両端に終端抵抗を接続する必要があります。
- 2. マルチノード通信：複数のノードが同じ CAN バスに接続されている場合も、終端抵抗は不可欠です。終端抵抗はバスのインピーダンスを安定させ、信号の歪みを防ぎます。

***終端抵抗はいつ外してもよいですか？***

- 1. 短距離通信：一部の短距離アプリケーション（通常 1 メートル未満）では、信号反射が通信に与える影響が比較的小さいため、終端抵抗を省略できる場合があります。
- 2. シングルノード通信：バス上に 1 つのノードしかない場合（デバッグ環境など）で、かつ距離が短いときは、終端抵抗を一時的に外すことができます。

<table align="center">
 <tr>
     <th>送信側コードの結果</th>
     <th>受信側コードの結果</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/25.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/26.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
