---
description: Seeed Studio XIAO 拡張ボード
title: XIAO 用拡張ボードベース
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 07/18/2024
  author: Spencer
---

## 概要

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

Raspberry Pi 4 の半分のサイズしかない、Seeed Studio XIAO 用の強力な機能拡張ボードです。簡単かつ迅速にプロトタイプやプロジェクトを構築できます。OLED、RTC、拡張可能メモリ、パッシブブザー、RESET/ユーザーボタン、5V サーボコネクタ、複数のデータインターフェースなどの豊富な周辺機器により、Seeed Studio XIAO の無限の可能性を探求できます。[Circuitpython](https://circuitpython.org/) もこのボードでよくサポートされています。

Seeed Studio XIAO フォームファクターとして、すべての Seeed Studio XIAO ボードは [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) と [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) の両方をサポートします。ピン間にわずかな違いがありますが、ピン配置を参照すれば簡単に管理できます。

Seeed Studio XIAO SAMD21、Seeed Studio XIAO RP2040、および Seeed Studio XIAO nRF52840 は Seeed Studio Expansion Base for XIAO と互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **迅速なプロトタイピング：** RESET ボタンと男性ヘッダーに引き出された SWD ピンによる簡単なデバッグとリセット。
<!-- 0.96"OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out. -->
- **豊富な周辺機器：** OLED ディスプレイ、RTC、拡張可能メモリ空間、パッシブブザー、ユーザーボタン、オンボードバッテリー管理チップ。
- **はんだ付け不要：** すべてのピンが引き出されています。便利なプラグアンドプレイ Grove コネクタは、IIC、UART、アナログ/デジタルを含む複数のデータプロトコルをサポートします。
- **Circuit Python サポート：** Circuit Python をよくサポートします。MicroSD カードスロットによりメモリ空間の拡張が可能で、プロトタイピングやプロジェクト構築に必要なより多くのライブラリを割り当てることができます。
- **ミニサイズ：** Raspberry Pi 4 の半分のサイズでコンパクトかつエレガント、特にミニサイズが必要なプロジェクトに適しています。

## 仕様

<div class="table-center">
<table align="center">
  <tr>
    <th>項目</th>
    <th>値</th>
  </tr>
  <tr>
    <td>動作電圧</td>
    <td>5V / 3.7V リチウムバッテリー</td>
  </tr>
  <tr>
    <td>充電電流</td>
    <td>460mA（最大）</td>
  </tr>
  <tr>
    <td>RTC タイマー精度</td>
    <td>± 1.5S/DAY（25°C）</td>
  </tr>
  <tr>
    <td>RTC バッテリー</td>
    <td>CR1220</td>
  </tr>
  <tr>
    <td>ディスプレイ</td>
    <td>0.96" OLED ディスプレイ</td>
  </tr>
  <tr>
    <td>拡張可能メモリ</td>
    <td>MicroSD カード</td>
  </tr>
  <tr>
    <td>Grove インターフェース</td>
    <td>Grove IIC*2、Grove UART*1、A0/D0 Grove*1</td>
  </tr>
  <tr>
    <td>その他の外部機器</td>
    <td>パッシブブザー、ユーザーボタン、5V サーボコネクタ</td>
  </tr>
</table>
</div>

## 用途

- SWD デバッグ
- 迅速なプロトタイピング
- データ表示
- ミニサイズプロジェクト

## パーツリスト

|項目|値|
|---|---|
|Seeed Studio Expansion Base for XIAO  | *1 |

:::note
この製品には Seeed Studio XIAO とバッテリーは含まれていません。この拡張ボードは XIAO nRF54L15 と XIAO MG24 をサポートしていません。Seeed Studio XIAO は常に新製品を導入しています。このシリーズの最新製品開発に追いつくには、[XIAO シリーズホームページ](https://www.seeedstudio.com/xiao-series-page)をご覧ください。

<!-- please click this link to get [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB) -->

:::

## 入門ガイド

### 必要な材料

| Seeed Studio XIAO SAMD21（事前はんだ付け） | Seeed Studio Expansion Base for XIAO|
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**今すぐ入手**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**今すぐ入手**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

外部 MicroSD カードスロットと RTC バッテリーホルダーがあります。MicroSD カードは主に `python.py` ファイルの保存と実行に使用され、RTC は現在時刻を追跡し、特定の時刻にアクションをプログラムするために使用できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### ピン配置図

Grove-Shield for Seeed Studio XIAO の外部ヘッダーピン説明。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## 拡張ボードの使用方法

### 接続

Seeed Studio XIAO SAMD21 を拡張ボードに取り付けると、Seeed Studio XIAO SAMD21 の緑色 LED が点灯するはずです。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::note
まず Seeed Studio XIAO を拡張ボードに差し込んでから、Type-C を差し込んでください。Seeed Studio XIAO を**2つの雌ヘッダーコネクタの中央**に差し込むことを忘れないでください。そうしないと、Seeed Studio XIAO と拡張ボードを損傷します。
:::

## バッテリーの使用

Seeed Studio Expansion Base for XIAO はバッテリーで電源供給できるため、移動が必要なデモを行う場合、そのバッテリーが電源供給の問題を解決するのに役立ちます。バッテリーを接続する際は、正極と負極に注意し、ボードを損傷しないよう写真に従ってバッテリーを接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

さらに、バッテリーケーブルと Type-C ケーブルを差し込み、ボタンをオンに切り替えると、ボードがバッテリーを充電します。

下の写真のように、LED が点滅している場合はバッテリーが充電されていないか、ボードがバッテリーに接続されていないことを意味し、LED が点灯し続けている場合はバッテリーが充電中であることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## 拡張ボード上のモジュール

ボード上の豊富な周辺機器には以下が含まれます：

- **OLED ディスプレイ：** PC に接続せずに視覚的なデータ表示が可能で、より効率的なデバッグを可能にし、センサーハブ、データ監視システムなどのアプリケーションを構築できます。

- **RESET ボタン：** ジャンパーワイヤーやショート回路は不要で、ワンクリックで簡単にリセットできます。

- **SWD デバッグ：** SWD ピンが男性ピンヘッダーとして引き出されており、デバッガー接続とファームウェアダウンロードがより簡単になります。

- **高精度 RTC：** バッテリーバックアップ付きの高精度リアルタイムクロックで、メイン電源がオフになっても正確な時刻を維持できます。

- **拡張可能メモリ：** 背面に MicroSD カードスロットがあり、ライブラリを追加したり Circuit Python を使用したりする際にメモリ制限を心配する必要がありません。

- **ユーザーボタン：** RESET ボタンに加えて、もう一つのユーザー定義ボタンも提供されています。

- **パッシブブザー：** PWM 周波数を変更して異なるビープ音を出し、「ブザー音楽」を作ることができます。

- **Grove コネクタ：** すべてのピンが引き出され、プラグアンドプレイ Grove コネクタが一般的なデータプロトコル（Grove IIC*2、Grove UART*1、A0/D0 Grove*1）をサポートします。

- **リポバッテリー充電：** JST2.0mm 標準リポバッテリーコネクタとバッテリー管理システムで、USB とリポバッテリーの両方の電源供給をサポートし、簡単なオンボードバッテリー再充電が可能です。

- **5V サーボコネクタ：** 5V サーボとセンサー接続用に 5V 出力が男性ヘッダーに引き出されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### OLED ディスプレイ

この例では、Seeed Studio Expansion Base for XIAO の OLED ディスプレイの使用方法を紹介します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**ステップ 1**. Seeed Studio XIAO SAMD21 を拡張ボードに取り付けてから、Type-C ケーブルを接続します。

**ステップ 2**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino) ライブラリをインストールします。これは[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ 3**. コードをコピーして Arduino IDE に貼り付けてからアップロードします。

**OLED コード**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // Enable (1) and disbale (0) 180 degree rotation of the display content
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

### ユーザーボタンによる LED 制御

この例では、Seeed Studio Expansion Base for XIAO のボタンを使用して Seeed Studio XIAO SAMD21 の LED を制御する方法を紹介します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**ステップ 1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ 2**. Arduino IDEを開き、コードをコピーしてArduino IDEに貼り付け、アップロードします。

**コード**

```cpp
const int buttonPin = 1;     // the number of the pushbutton pin
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(LED_BUILTIN, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }

}
```

### ブザー

ブザーはデフォルトでピンA3に接続されています。ブザー機能を無効にしたい場合は、下の画像に従って線を切断してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **パッシブブザーで楽曲を演奏**

この例では、Seeed Studio Expansion Base for XIAOのブザーを使用してハッピーバースデーを演奏します。

**ステップ 1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ 2**. Arduino IDEを開き、コードをコピーしてArduino IDEに貼り付け、アップロードします。

**コード**

```cpp
int speakerPin = D3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
  for (long i = 0; i < duration * 1000L; i += tone * 2) {
    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(tone);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(tone);
  }
}

void playNote(char note, int duration) {
  char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
                  'c', 'd', 'e', 'f', 'g', 'a', 'b',
                  'x', 'y'
                 };
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
                  956,  834,  765,  593,  468,  346,  224,
                  655 , 715
                };
  int SPEE = 5;

  // play the tone corresponding to the note name

  for (int i = 0; i < 16; i++) {
    if (names[i] == note) {
      int newduration = duration / SPEE;
      playTone(tones[i], newduration);
    }
  }
}

void setup() {
  pinMode(speakerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < length; i++) {
    if (notes[i] == ' ') {
      delay(beats[i] * tempo); // rest
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // pause between notes
    delay(tempo);
  }
}
```

### 回転角度センサーによるサーボ制御

この例では、Seeed Studio Expansion Base for XIAOの統合ポートを介して、回転角度センサーを使用してサーボを制御します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**ステップ 1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ 2**. サーボケーブルを**I2C**ポートに、回転角度センサーを**D0**に接続します。

**ステップ 3**. Arduino IDEを開き、コードをコピーしてArduino IDEに貼り付け、アップロードします。

:::tip
開発ボードが**XIAO ESP32 シリーズ**の場合、以下のコードを実行する前に、まず**Arduino Library Manager**でESP32Servoライブラリをインストールし、コードの```#include <Servo.h>```を```#include <ESP32Servo.h>```に変更する必要があります。
:::

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //reference voltage of ADC is 3v.If the Vcc switch on the seeeduino
#define GROVE_VCC 3 //VCC of the grove interface is normally 3v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // attaches the servo on pin 9 to the servo object
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("The angle between the mark and the starting position:");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees);
}
```

### RTC時計表示

この例では、RTCを使用してOLEDに時計を表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**ステップ 1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ 2**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)と[**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library)ライブラリをインストールします。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ 3**. コードをコピーしてArduino IDEに貼り付け、アップロードします。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();//initialize the clock
  pcf.stopClock();//stop the clock
  pcf.setYear(20);//set year
  pcf.setMonth(10);//set month
  pcf.setDay(23);//set dat
  pcf.setHour(17);//set hour
  pcf.setMinut(33);//set minut
  pcf.setSecond(0);//set second
  pcf.startClock();//start the clock
}

void loop() {
  Time nowTime = pcf.getTime();//get current time
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font

  u8x8.setCursor(0, 0);
  u8x8.print(nowTime.day);
  u8x8.print("/");
  u8x8.print(nowTime.month);
  u8x8.print("/");
  u8x8.print("20");
  u8x8.print(nowTime.year);
  u8x8.setCursor(0, 1);
  u8x8.print(nowTime.hour);
  u8x8.print(":");
  u8x8.print(nowTime.minute);
  u8x8.print(":");
  u8x8.println(nowTime.second);
  delay(1000);
}
```

### SDカード機能

XIAO SAMD21、XIAO RP2040、XIAO ESP32C3、XIAO ESP32S3については、サードパーティの別のSDカードライブラリをインストールする必要はありません。以下の手順はこれらのXIAOに適用されます。

:::tip
拡張ボードの回路は、SDカードスロットのCSピンがXIAOの**D2**ピンに接続されるように設計されています。
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);              // Execute after turning on the serial monitor
  delay(500);

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);          // Modify the pins here to fit the CS pins of the SD card you are using.
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);          // The path to read and write files needs to start with "/"

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");                       // The path to read and write files needs to start with "/"
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}

```

XIAO nRF52840シリーズを使用している場合は、SDカード機能を使用するために[SdFatライブラリ](https://github.com/greiman/SdFat)を別途ダウンロードする必要がある場合があります。

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }


  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

## Seeed Studio XIAO 用 Seeed Studio 拡張ベースのアクリルケース

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Seeed Studio XIAO 用拡張ベースを保護するために、この[**アクリルケース**](https://www.seeedstudio.com/XIAO-p-4812.html)を作りました。これらはアクリルケースのコンポーネントです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

Seeed Studio XIAO 用 Grove シールドと比較して、Seeed Studio XIAO 用拡張ベースはユーザーにとって多くの便利なモジュールを追加しました。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

このアクリルケースは組み立てが簡単で、ケースの見た目をより整然とさせることもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## 拡張ボード付き Seeed Studio XIAO SAMD21 での CircuitPython

このwikiでは、[**Seeed Studio XIAO SAMD21 開発ボード**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html)に Adafruit Industries の公式[**CircuitPython**](https://circuitpython.org/)をインストールして実行する方法を紹介します！

CircuitPython は、低コストのマイクロコントローラーボードでの実験とプログラミング学習を簡素化するために設計されたプログラミング言語です。事前のデスクトップダウンロードが不要で、これまで以上に簡単に始められます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については、[**こちら**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPython のインストール

**ステップ 1.** Seeed Studio XIAO SAMD21 を拡張ボードに取り付け、Type-C ケーブルを接続します。

**ステップ 2.** 公式の[**Seeed Studio XIAO SAMD21 用 CircuitPython ブートローダー**](https://circuitpython.org/board/seeeduino_xiao/)をダウンロードします。`.uf2` ファイルが PC のダウンロードフォルダに保存されます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**ステップ 3.** Seeed Studio XIAO 用拡張ベースのリセットボタンを素早く2回押して DFU ブートローダーモードに入ると、PC に Arduino ドライブが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**ステップ 4.** PC に `Arduino` という名前の外部ドライブが表示されます。ダウンロードした CircuitPython uf2 ファイルを `Arduino` ドライブにドラッグします。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**ステップ 5.** CircuitPython ブートローダーがロードされたら、USB Type-C を抜いて再接続します。`CIRCUITPY` という新しい外部ドライブが表示されます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**ステップ 6.** これで、CircuitPython が Seeed Studio XIAO SAMD21 にロードされました！あとは Python プログラムを書いて `main.py` という名前を付け、`CIRCUITPY` ドライブにドラッグするだけです。

### CircuitPython 点滅サンプル

Seeed Studio XIAO で CircuitPython を使用する方法を紹介する簡単な例があります。

**ステップ 1** `CIRCUITPY` ドライブに `main` という名前のテキストファイルを作成します。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note
`main` の名前は次のいずれかです：**code.txt**、**code.py**、**main.py**、**main.txt**。[**この動作**](https://docs.circuitpython.org/en/latest/README.html#behavior)についての詳細があります。
:::

**ステップ 2** REPL を使用してオレンジ色の LED のピンを取得します。REPL の詳細については、[Welcome to CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) を参照してください。REPL を使用するには、まずシリアルコンソールに接続する必要があります。接続が確立されたら、CTRL+C を2回押して編集モードに入ります。次に、以下のコードをコピーしてそれぞれ入力します。

```
>>> import board
>>> dir(board)
```

コードで使用できるボード上のすべてのピンのリストが表示されます。各ボードは利用可能なピン数によって若干異なります。
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

YELLOW_LED_INVERTED が見えますか？それがオレンジ色の LED を点滅させるために使用したピンです！

**ステップ 3** コードを `main` ファイルに貼り付けて保存すると、Seeed Studio XIAO SAMD21 ボードでオレンジ色の LED が点滅するのが見えます。

**コード**

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.YELLOW_LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

### CircuitPython 用 MicroSD カード

Seeed Studio XIAO SAMD21 には約 40 KB のフラッシュが内蔵されていますが、大きなサイズの Python コードファイルを保存するには十分なスペースがない場合があります。幸い、Seeed Studio XIAO SAMD21 拡張ボードには保存スペースを拡張するための MicroSD カードスロットが内蔵されているので、この手順に従って MicroSD カードで CircuitPython を実行する方法を学ぶことができます。

:::note
MicroSD カードのシステム形式は FAT または exFAT です。他の MicroSD カードシステム形式を使用すると、MicroSD カードが認識されない原因となります。
:::
**ステップ 1.** Seeed Studio XIAO SAMD21 拡張ボードに差し込むマイクロ SD カードを準備します。

**ステップ 2.** まだ[**CircuitPython ファイル**](https://circuitpython.org/board/seeeduino_xiao/)をダウンロードしていない場合は、[**CircuitPython のインストール**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/#installing-circuitpython)の章を参照してください。

**ステップ 3.** [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) をダウンロードしてファイルを解凍し、`CIRCUITPY` の新しい lib と置き換えます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**ステップ 4.** [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) ファイルを `CIRCUITPY` ドライブにダウンロードします。

**`main.py` コード**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

**ステップ 5.** [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) ファイルを `CIRCUITPY` ドライブにダウンロードします。

**`sd.py` コード**

```cpp
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Connect to the card and mount the filesystem for Seeed Studio XIAO .
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## switch to the path to SD card
```

**ブザーの例**

この例は、MicroSD カードで `buzzer.py` を実行してブザーをテストするためのものです。

**ステップ 1.** [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) を MicroSD カードに貼り付けるだけです。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**ステップ 2.** `CIRCUITPY` ドライブの `main.py` を開きます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**ステップ 3.** main.py ファイルに `import buzzer` を追加します。
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

すべてのステップを完了すると、ブザーが動作します。MicroSD カードで他の Python ファイルを実行したい場合は、この例を参考にしてください。

:::note
Arduino モードに戻りたい場合は、Arduino IDE で任意のプログラムをアップロードするだけです。
:::

## デモ

### プロジェクト 1 - リモコン扇風機

**概要**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

この wiki では、部屋を涼しく保つためのミニ扇風機の作り方を紹介します。

**特徴**

- 自動首振り扇風機

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 用拡張ベース**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove ミニファン**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-サーボ**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR（赤外線）レシーバー**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**ハードウェア接続**

同じ色の線に従って、各センサーをボードに接続してください。ファンの Grove ケーブルを D0 に、サーボの Grove ケーブルを **I2C** に、IR の Grove ケーブルを **D7** に接続してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Arduino 手順**

**ステップ 1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ 2**. [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) ライブラリをインストールします。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ 3**. コードをコピーして Arduino IDE に貼り付け、アップロードします。

**ステップ 4**. ファンを安全な位置に置き、ボタンを押して安全に動作することを確認してください。

**コード**

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int RECV_PIN = 7; // set pin 2 as IR control

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // variable to store the servo position
int fanPin = 0;  // set D6 as control switch
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  Serial.println("Enabled IRin");
  myservo.attach(5);  // attaches the servo on pin 2 to the servo object
  pinMode(fanPin, OUTPUT);

}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155829415) {    // Power off/on
      IO++;
      if (IO % 2 == 0) {
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
      else {
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
    }

    if (results.value == 2155821255 ) {    // fan swing to left
      for (pos; pos <= 89; pos += 1) { // goes from 0 degrees to 90 degrees
        // in steps of 1 degree
        myservo.write(pos);              // tell servo to go to position in variable 'pos'

        delay(40);                       // waits 15ms for the servo to reach the position
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // fan swing to right
      for (pos; pos >= 1; pos -= 1) { // goes from 90 degrees to 0 degrees
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(40);                       // waits 15ms for the servo to reach the position

        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155821255)
            break;
        }
      }
    }
    Serial.println(pos);
    Serial.println(results.value, HEX);
    Serial.println(results.value);
    irrecv.resume();                    //recive next intrustion
  }
  delay(100);
}
```

### プロジェクト 2 - リモコンカー

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

このwikiでは、リモコンカーの作り方を紹介します。

**特徴**

- 狭い道も通りやすいミニサイズのカー

**必要なコンポーネント**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**DC Motor**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**ハードウェア接続**

同じ色の線に従って、各センサーをボードに接続してください。IRセンサーのGroveケーブルをD0に、Mini Motor DriverのGroveケーブルをI2Cに接続してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Arduino 手順**

**ステップ 1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ 2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software)をダウンロードします

**ステップ 3**. [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) と [**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver) ライブラリをインストールします。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ 4**. コードをコピーして Arduino IDE に貼り付け、アップロードします。

**コード**

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  1     // Pin used for fault detection.

int RECV_PIN = 0; // set pin 2 as IR control
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155862055) {
      //Forward  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      //Brake   2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      //backward  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      //Stop  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      //turn right   2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      //turn left    2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    //recive next intrustion

  }
  delay(100);
}

void delayUntil(unsigned long elapsedTime) {
  unsigned long startTime = millis();
  while (startTime + elapsedTime > millis()) {
    if (digitalRead(FAULTn) == LOW) {
      byte result = motor0.getFault();
      result = motor1.getFault();
    }
  }
}
```

### プロジェクト 3 - 指紋認証宝箱 - Seeed Studio XIAO

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

この箱は重要なものを保管でき、誰かがあなたの物を取ることを心配する必要がありません。この箱には指紋認証機能があり、あなたの物を保護します。指紋認証に失敗した場合、ブザーがアラームを鳴らし、LEDリングが赤色を表示します。最初にボードに登録された指紋のみが認証され、指紋認証が通ると、LEDリングが緑色を表示します。

**特徴**

- 指紋の登録が簡単
- LEDリングでロック状態を確認可能
- OLEDスクリーンで現在の情報を表示
- ブザーで指紋認証の成否を通知

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Capacitive Fingerprint Scanner/Sensor**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove RGB LED Ring - 24**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Servo**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

図に示すように、各モジュールをボードに接続してください。指紋モジュールをXIAO拡張ボードのUARTポートに、サーボをXIAO拡張ボードのD0ポートに接続してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

NeoPixelリングは3本の異なる色のワイヤーを通してXIAO開発ボードのピンに直接接続されることに注意してください：NeoPixelリングのDINピンを黄色のワイヤーでXIAOのD1ピンに、NeoPixelリングのVINピンを赤いワイヤーでXIAOの3V3ピンに、NeoPixelリングのGNDピンを黒いワイヤーでXIAOのGNDピンに接続してください。

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Arduino 手順**

**ステップ 1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ 2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software)をダウンロードします

**ステップ 3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Servo**](https://github.com/arduino-libraries/Servo)、[**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202)、[**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring) ライブラリをインストールします。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ 4**. コードをコピーして Arduino IDE に貼り付け、アップロードします。

**デモンストレーション**

1. 指紋の登録

最初に画面に指紋記録が表示されるので、指紋デバイスに指を置くだけです。その後、プログラムが指紋を解析し、登録が完了します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. 身元認証（認証通過）

画面に「Please verify」と表示されるので、指紋デバイスに指を置くと、LEDリングが緑色に変わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. 身元認証（認証失敗）

他の人が指を置くと、LEDリングが赤色に変わり、ボードに「Identity deny」が表示され、同時にアラームが作動します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

**コード**

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"
#include "Adafruit_NeoPixel.h"

#define PIXEL_PIN    2    // Digital IO pin connected to the NeoPixels.
#define PIXEL_COUNT 24
#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

Servo myservo;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;
int pos = 0;
const int buttonPin = 1;
int buttonState = 0;
int BuzzerPin = A3;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(115200);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  colorWipe(strip.Color(125, 0, 125), 50);
  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(BuzzerPin, OUTPUT);
  kct202.begin(uart, debug);
  myservo.attach(0);
  myservo.write(0);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    debug.println("Register ok!");
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    colorWipe(strip.Color(0, 125, 125), 50);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }
}

void loop(void) {
  uint16_t finger_num = 0;

  kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                               LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print(" Please verify  ");

  if (0 == kct202.getVerifyResponAndparse(finger_num)) {
    debug.println("Verify ok!");
    debug.print("Your finger temp id = ");
    debug.println(finger_num, HEX);
    colorWipe(strip.Color(0, 255, 30), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Identity comfirm");
    delay(800);

    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);

    for (pos = 0; pos <= 90; pos += 1) {
      myservo.write(pos);
      delay(15);
    }
    while (1) {
      //      pinMode(buttonPin, INPUT);
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);              // tell servo to go to position in variable 'pos'
          delay(15);                       // waits 15ms for the servo to reach the position
        }
        colorWipe(strip.Color(255, 0, 0), 50);
        break;
      }
    }
  }

  else {
    colorWipe(strip.Color(255, 0, 0), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Identity deny ");
    //    myservo.write(0);
    delay(200);

  analogWrite(BuzzerPin, 250);
  delay(2000);
    analogWrite(BuzzerPin, 0);
  delay(100);

    u8x8.setCursor(0, 3);
    u8x8.print("  Please retry  ");
    delay(1500);
  }
}

void colorWipe(uint32_t c, uint8_t wait) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(70);
  }
}
```

### プロジェクト 4 - Seeed Studio Expansion Base for XIAO - ムジョルニア

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

このハンマーはムジョルニアをシミュレートしたもので、このデバイスに指紋を登録することで、あなたがその主人になります。ハンマーは Grove - 電磁石に磁力で吸着されており、主人が指紋でロックを解除するまで、ハンマーを持ち去ることはできません。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 静電容量式指紋スキャナー/センサー**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 電磁石**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

拡張ボードと必要なモジュールを Grove ワイヤーで接続してください。Grove 電磁石モジュールを D0 ポートに、指紋モジュールを I2C ポートに接続してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Arduino 手順**

**ステップ 1**. 接続図に従って、すべてのセンサーをボードに接続してください。

**ステップ 2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードしてください。

**ステップ 3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino) と [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) ライブラリをインストールしてください。こちらが [**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) のガイドです。

**ステップ 4**. コードをコピーして Arduino IDE に貼り付け、アップロードしてください。

**コード**

```cpp
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"

#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

int Electromagnet = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.

  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(Electromagnet, OUTPUT);
  digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
  kct202.begin(uart, debug);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }

}

  // the loop routine runs over and over again forever:
  void loop() {

    uint16_t finger_num = 0;
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Please verify  ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Identity comfirm");
      delay(800);
      digitalWrite(Electromagnet, LOW);  // turn the Electromagnet on (HIGH is the voltage level)
      delay(5000);
      digitalWrite(Electromagnet, HIGH);
    }

    else {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print(" Identity deny ");
      //    myservo.write(0);
      delay(200);

      u8x8.setCursor(0, 3);
      u8x8.print("  Please retry  ");
      delay(1500);
      digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)

    }
  }
```

### プロジェクト 5 - 空気品質センサーハブ - Seeed Studio Expansion Base for XIAO

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

これは、Grove - レーザー PM2.5 センサー、Grove - CO2・温度・湿度センサー、Grove - ダストセンサーを使用して、PM2.5、PM10、温度、湿度、CO2、ダスト粒子をそれぞれ収集する環境検出デバイスです。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - CO2 & Temperature & Humidity Sensor for Arduino (SCD30) - 3-in-1**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Laser PM2.5 Dust Sensor - Arduino Compatible - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Dust Sensor（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

図に示すように各センサーを接続してください。CO2センサーとPM2.5センサーをそれぞれ2つのI2Cポートに接続し、ダストセンサーをUARTポートに接続してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Arduino手順**

**ステップ1**. 接続図に従って、すべてのセンサーをボードに接続してください。

**ステップ2**. [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)をダウンロードしてください

**ステップ3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301)、[**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30)ライブラリをインストールしてください。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ4**. コードをコピーしてArduino IDEに貼り付け、アップロードしてください。

**コード**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Seeed_HM330X.h>
#include "SCD30.h"

#define SERIAL_OUTPUT SerialUSB
#define SERIAL SerialUSB

int pin = 7;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 5000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"sensor num: ", "PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };


///////////////////////////////////////////////////////////////////
//PM2.5 concentration(Atmospheric environment,unit:ug/m3): value
///////////////////////////////////////////////////////////////////
HM330XErrorCode print_result(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM2.5: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

HM330XErrorCode print_result_1(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM10: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

/*parse buf with 29 uint8_t-data*/
HM330XErrorCode parse_result(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[6 * 2] << 8 | data[6 * 2 + 1];
  print_result(str[6 - 1], value);
  return NO_ERROR;
}


HM330XErrorCode parse_result2(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[7 * 2] << 8 | data[7 * 2 + 1];
  print_result_1(str[7 - 1], value);
  return NO_ERROR;
}

////////////////////////////////////////////////////////////////////

/*30s*/
void setup() {
  Serial.begin(115200);
  Wire.begin();
  u8x8.begin();
  u8x8.setFlipMode(0);
  scd30.initialize();
  pinMode(pin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  starttime = millis();//get the current time;

}

void loop() {
  float result[3] = {0};
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy + duration;

  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    memu++;
    delay(15);
    if (memu == 2) {
      memu = 0;
    }
  }
  Serial.println(memu);

  if (scd30.isAvailable() && memu == 0) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("CO2: ");
    u8x8.setCursor(5, 3);
    u8x8.print(result[0]);
    u8x8.setCursor(12, 3);
    u8x8.print("pmm");
    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 0) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 0){
  parse_result(buf);
  }

  if ((millis() - starttime) > sampletime_ms  && memu == 0) {
    ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // Integer percentage 0=>100
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // using spec sheet curve

    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 6);
    u8x8.print("Dust: ");

    u8x8.setCursor(6, 6);
    u8x8.print(concentration);

    u8x8.setCursor(12, 6);
    u8x8.print("pcs");

    //    Serial.println(concentration);
    lowpulseoccupancy = 0;
    starttime = millis();
  }


  if (scd30.isAvailable() && memu == 1) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Temp: ");
    u8x8.setCursor(6, 3);
    u8x8.print(result[1]);
    u8x8.setCursor(10, 3);
    u8x8.print(" C   ");

    u8x8.setCursor(0, 6);
    u8x8.print("Humi: ");
    u8x8.setCursor(5, 6);
    u8x8.print(result[2]);
    u8x8.setCursor(8, 6);
    u8x8.print("  %     ");

    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 1) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 1){
  parse_result2(buf);
  }
}
```

### プロジェクト6 - Seeed Studio Expansion Base for XIAO - 心拍数

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

このシンプルで安価なプロジェクトは、Seeed Studio Expansion Base for XIAOを基に心拍数を報告します。
使用するデバイスはI2C 2線インターフェースを持っているため、配線を最小限に抑えることができます。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Finger-clip Heart Rate Sensor**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

下図に示すように、心拍数センサーをXIAO拡張ボードのI2Cインターフェースに接続してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Arduino手順**

**ステップ1**. 接続図に従って、すべてのセンサーをボードに接続してください。

**ステップ2**. [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)をダウンロードしてください

**ステップ3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)ライブラリをインストールしてください。こちらが[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)のガイドです。

**ステップ4**. コードをコピーしてArduino IDEに貼り付け、アップロードしてください。

**コード**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println("heart rate sensor:");

  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
}
void loop() {
  Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
  while (Wire.available()) {         // slave may send less than requested
    unsigned char c = Wire.read();   // receive heart rate value (a byte)
    u8x8.setFont(u8x8_font_chroma48medium8_r);
//    u8x8.setCursor(0, 3);
//    u8x8.print("blood detecting ");
//    delay(10000);

    u8x8.setCursor(0, 3);
    u8x8.print("HeartRate: ");
    u8x8.setCursor(10, 3);
    u8x8.print(c);
    u8x8.setCursor(13, 3);
    u8x8.print("bpm");
    Serial.println(c);

  }
  delay(500);
}
```

## リソース

- **[PDF]**[**ETA1038**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA1038.pdf)
- **[PDF]**[**ETA3410**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA3410.pdf)
- **[PDF]**[**ETA6003**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA6003.pdf)
- **[PDF]**[**PCF8563T**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/PCF8563T.pdf)
- **[PDF]**[**Seeed Studio Expansion Base for XIAO_v1.0_SCH_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_SCH_200824.pdf)
- **[SCH]**[**Seeed Studio Expansion Base for XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.sch)
- **[BRD]**[**Seeed Studio Expansion Base for XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.brd)

## FAQ

### Q1: XIAO拡張ボード上のPMICは5Vピンに電力を出力しますか？

PMICは電力を出力しません。5VはUSBから直接供給されます。5Vピンで提供される電流は、USB接続から利用可能な電流と同等です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
