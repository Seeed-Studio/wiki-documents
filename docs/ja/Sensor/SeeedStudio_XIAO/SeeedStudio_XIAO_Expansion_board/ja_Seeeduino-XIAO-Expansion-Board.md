---
description: Seeed Studio XIAO 拡張ボード
title: XIAO 用拡張ボードベース
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

Seeed Studio XIAO 用の強力な機能拡張ボードで、Raspberry Pi 4 の半分のサイズしかありません。これにより、プロトタイプやプロジェクトを簡単かつ迅速に構築できます。OLED、RTC、拡張可能なメモリ、パッシブブザー、RESET/ユーザーボタン、5Vサーボコネクタ、複数のデータインターフェースなどの豊富な周辺機器を備えており、Seeed Studio XIAO の無限の可能性を探求できます。このボードは [Circuitpython](https://circuitpython.org/) にも完全対応しています。

Seeed Studio XIAO のフォームファクタに基づき、すべての Seeed Studio XIAO ボードは [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) と [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) の両方をサポートしています。ピンに若干の違いがありますが、Pinout を参照すれば簡単に管理できます。

Seeed Studio XIAO SAMD21、Seeed Studio XIAO RP2040、および Seeed Studio XIAO nRF52840 は、Seeed Studio Expansion Base for XIAO と互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **迅速なプロトタイピング:** RESETボタンとSWDピンがオスヘッダーに引き出されており、デバッグとリセットが簡単。
<!-- 0.96インチOLEDにより、PCのシリアルモニターなしでデータを視覚的に表示可能。便利なプラグアンドプレイのGroveコネクタは、IIC、UART、アナログ/デジタルなどの複数のデータプロトコルをサポート。すべてのピンが引き出されており、はんだ付け不要。 -->
- **豊富な周辺機器:** OLEDディスプレイ、RTC、拡張可能なメモリスペース、パッシブブザー、ユーザーボタン、オンボードバッテリーマネジメントチップ。
- **はんだ付け不要:** すべてのピンが引き出されています。便利なプラグアンドプレイのGroveコネクタは、IIC、UART、アナログ/デジタルなどの複数のデータプロトコルをサポート。
- **Circuit Python 対応:** Circuit Python を完全サポート。MicroSDカードスロットによりメモリスペースを拡張可能で、プロトタイピングやプロジェクト構築に必要なライブラリをより多く割り当てることが可能。
- **コンパクトサイズ:** Raspberry Pi 4 の半分のサイズでコンパクトかつエレガント。特に小型サイズを必要とするプロジェクトに最適。

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
    <td>460mA (最大)</td>
  </tr>
  <tr>
    <td>RTCタイマー精度</td>
    <td>± 1.5秒/日 (25°C)</td>
  </tr>
  <tr>
    <td>RTCバッテリー</td>
    <td>CR1220</td>
  </tr>
  <tr>
    <td>ディスプレイ</td>
    <td>0.96インチ OLEDディスプレイ</td>
  </tr>
  <tr>
    <td>拡張可能なメモリ</td>
    <td>MicroSDカード</td>
  </tr>
  <tr>
    <td>Groveインターフェース</td>
    <td>Grove IIC*2, Grove UART*1, A0/D0 Grove*1</td>
  </tr>
  <tr>
    <td>その他の外部機器</td>
    <td>パッシブブザー、ユーザーボタン、5Vサーボコネクタ</td>
  </tr>
</table>
</div>

## アプリケーション

- SWDデバッグ
- ラピッドプロトタイピング
- データ表示
- 小型プロジェクト

## パーツリスト

|項目|値|
|---|---|
|Seeed Studio XIAO用拡張ベース| *1 |

:::note
この製品にはSeeed Studio XIAOおよびバッテリーは含まれていません。Seeed Studio XIAOは新製品を継続的にリリースしています。このシリーズの最新製品情報を確認するには、[XIAOシリーズのホームページ](https://www.seeedstudio.com/xiao-series-page)をご覧ください。

<!-- このリンクをクリックして[**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB)を入手してください -->
:::

## はじめに

### 必要な材料

| Seeed Studio XIAO SAMD21 (プリハンダリング済み) | Seeed Studio XIAO用拡張ベース |
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**今すぐ購入**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**今すぐ購入**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

外部MicroSDカードスロットとRTCバッテリーホルダーがあります。MicroSDカードは主に`python.py`ファイルを保存および実行するために使用され、RTCは現在時刻を追跡し、特定の時間にアクションをプログラムするために使用できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### ピンアウト図

Seeed Studio XIAO用Groveシールドの外部ヘッダーピンの説明。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## 拡張ボードの使用方法

### 接続

Seeed Studio XIAO SAMD21を拡張ボードに取り付けると、Seeed Studio XIAO SAMD21の緑色のLEDが点灯します。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::note
最初にSeeed Studio XIAOを拡張ボードに取り付け、その後Type-Cケーブルを接続してください。Seeed Studio XIAOを**2つのメスヘッダーコネクタの中央**に取り付けることを忘れないでください。そうしないと、Seeed Studio XIAOや拡張ボードが損傷する可能性があります。
:::

## バッテリーの使用

Seeed Studio XIAO用拡張ベースはバッテリーで電源供給が可能です。そのため、移動が必要なデモを行う場合、このバッテリーが電源供給の問題を解決します。バッテリーを接続する際は、正極と負極に注意し、ボードを損傷しないように画像に従って接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

さらに、バッテリーケーブルとType-Cケーブルを接続し、スイッチをオンにすると、ボードはバッテリーを充電します。

以下の画像のように、LEDが点滅している場合はバッテリーが充電されていないか、ボードがバッテリーに接続されていないことを意味します。LEDが点灯し続けている場合は、バッテリーが充電中であることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## 拡張ボード上のモジュール

ボード上の豊富な周辺機器には以下が含まれます：

- **OLEDディスプレイ:** PCに接続せずにデータを視覚的に表示でき、効率的なデバッグを可能にします。また、センサーハブやデータモニタリングシステムなどのアプリケーションを構築できます。

- **リセットボタン:** ジャンパーワイヤーやショート回路が不要で、ワンクリックで簡単にリセットできます。

- **SWDデバッグ:** SWDピンがオスピンヘッダーとして引き出されており、デバッガー接続やファームウェアのダウンロードが容易になります。

- **高精度RTC:** バッテリーバックアップ付きの高精度リアルタイムクロックにより、メイン電源がオフになっても正確な時刻を維持できます。

- **拡張可能なメモリ:** 背面にMicroSDカードスロットがあり、ライブラリの追加やCircuit Pythonの使用時にメモリ制限を心配する必要がありません。

- **ユーザーボタン:** リセットボタンに加えて、もう1つのユーザー定義ボタンを提供します。

- **パッシブブザー:** PWM周波数を変更して異なるビープ音を鳴らし、「ブザー音楽」を作成できます。

- **Groveコネクタ:** すべてのピンが引き出されており、Groveコネクタをプラグアンドプレイで使用可能。一般的なデータプロトコル（Grove IIC*2、Grove UART*1、A0/D0 Grove*1）をサポートします。

- **リポバッテリ充電:** JST2.0mm標準リポバッテリコネクタとバッテリ管理システムを備え、USBとリポバッテリの両方の電源供給をサポートし、オンボードで簡単にバッテリを充電できます。

- **5Vサーボコネクタ:** 5V出力がオスヘッダーとして引き出されており、5Vサーボやセンサーの接続が可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### OLEDディスプレイ

この例では、Seeed Studio Expansion Base for XIAO上のOLEDディスプレイの使用方法を紹介します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**ステップ1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ2**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)ライブラリをインストールします。ライブラリのインストール方法については[**こちらのガイド**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)をご覧ください。

**ステップ3**. 以下のコードをコピーしてArduino IDEに貼り付け、アップロードします。

**OLEDコード**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // リセットなしのOLEDディスプレイ

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // 数値を1から3に設定すると、画面の文字が180度回転します
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

### ユーザーボタンによるLED制御

この例では、Seeed Studio Expansion Base for XIAO上のボタンを使用して、Seeed Studio XIAO SAMD21上のLEDを制御する方法を紹介します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**ステップ1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ2**. Arduino IDEを開き、以下のコードをコピーしてArduino IDEに貼り付け、アップロードします。

**コード**

```cpp
const int buttonPin = 1;     // プッシュボタンピンの番号
int buttonState = 0;         // プッシュボタンの状態を読み取るための変数

void setup() {
  // LEDピンを出力として初期化
  pinMode(LED_BUILTIN, OUTPUT);
  // プッシュボタンピンを入力として初期化
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // プッシュボタンの状態を読み取る
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認。押されている場合、buttonStateはHIGH
  if (buttonState == HIGH) {
    // LEDをオンにする
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // LEDをオフにする
    digitalWrite(LED_BUILTIN, LOW);
  }
}
```

### ブザー

ブザーはデフォルトでPin A3に接続されています。ブザー機能を無効にしたい場合は、以下の画像に従ってラインを切断してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **パッシブブザーで曲を再生**

この例では、Seeed Studio Expansion Base for XIAO上のブザーを使用して「ハッピーバースデー」を再生します。

**ステップ1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**ステップ2**. Arduino IDEを開き、以下のコードをコピーしてArduino IDEに貼り付け、アップロードします。

**コード**

```cpp
int speakerPin = D3;
int length = 28; // 音符の数
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

  // 音符名に対応するトーンを再生
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
      delay(beats[i] * tempo); // 休符
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // 音符間の間隔
    delay(tempo);
  }
}
```

### ロータリー角度センサーによるサーボ制御

この例では、Seeed Studio Expansion Base for XIAOの統合ポートを介してロータリー角度センサーを使用してサーボを制御します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**ステップ1**. Seeed Studio XIAO SAMD21を拡張ボードに取り付け、Type-Cケーブルを接続します。

**Step 2**. サーボケーブルを **I2C** ポートに接続し、ロータリー角度センサーを **D0** に接続します。

**Step 3**. Arduino IDE を開き、以下のコードをコピーして Arduino IDE に貼り付け、アップロードします。

:::tip
開発ボードが **XIAO ESP32 シリーズ**の場合、以下のコードを実行する前に、**Arduino Library Manager** で ESP32Servo ライブラリをインストールし、コード内の ```#include <Servo.h>``` を ```#include <ESP32Servo.h>``` に変更する必要があります。
:::

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 // ADC の基準電圧は 3Vです。Seeeduino の Vcc スイッチがオンの場合
#define GROVE_VCC 3 // Grove インターフェースの VCC は通常 3Vです
#define FULL_ANGLE 300 // ロータリー角度の最大値は 300 度です

Servo myservo;  // サーボを制御するためのサーボオブジェクトを作成
// 多くのボードでは最大 12 個のサーボオブジェクトを作成可能

int pos = 0;    // サーボの位置を格納する変数

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // サーボオブジェクトをピン 9 に接続
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("マークと開始位置の間の角度:");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees);
}
```

### RTC クロック表示

この例では、RTC を使用して OLED に時計を表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**Step 1**. Seeed Studio XIAO SAMD21 を拡張ボードに取り付け、Type-C ケーブルを接続します。

**Step 2**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino) と [**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library) ライブラリをインストールします。ライブラリのインストール方法については、こちらのガイドをご覧ください: [**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)。

**Step 3**. 以下のコードをコピーして Arduino IDE に貼り付け、アップロードします。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // リセットなしの OLED ディスプレイ

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();// クロックを初期化
  pcf.stopClock();// クロックを停止
  pcf.setYear(20);// 年を設定
  pcf.setMonth(10);// 月を設定
  pcf.setDay(23);// 日を設定
  pcf.setHour(17);// 時間を設定
  pcf.setMinut(33);// 分を設定
  pcf.setSecond(0);// 秒を設定
  pcf.startClock();// クロックを開始
}

void loop() {
  Time nowTime = pcf.getTime();// 現在時刻を取得
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // 適切なフォントを選択

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

XIAO SAMD21、XIAO RP2040、XIAO ESP32C3、XIAO ESP32S3 の場合、サードパーティの SD カードライブラリを別途インストールする必要はありません。以下の手順はこれらの XIAO に適用されます。

:::tip
拡張ボードの回路設計では、SDカードスロットの CS ピンが XIAO の **D2** ピンに接続されています。
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ:
  Serial.begin(115200);
  while(!Serial);              // シリアルモニターをオンにした後に実行
  delay(500);

  Serial.print("SDカードを初期化しています...");

  pinMode(D2, OUTPUT);          // 使用している SDカードの CS ピンに合わせてピンを変更してください。
  if (!SD.begin(D2)) {
    Serial.println("初期化に失敗しました!");
    return;
  }
  Serial.println("初期化完了。");

  // ファイルを開きます。注意: 一度に開けるファイルは1つだけです。
  // 別のファイルを開く前に現在のファイルを閉じる必要があります。
  myFile = SD.open("/test.txt", FILE_WRITE);          // ファイルの読み書きパスは "/" で始める必要があります。

  // ファイルが正常に開いた場合、書き込みを行います:
  if (myFile) {
    Serial.print("test.txt に書き込み中...");
    myFile.println("testing 1, 2, 3.");
    // ファイルを閉じます:
    myFile.close();
    Serial.println("完了。");
  } else {
    // ファイルが開かなかった場合、エラーを表示します:
    Serial.println("test.txt のオープンエラー");
  }

  // 読み取りのためにファイルを再オープン:
  myFile = SD.open("/test.txt");                       // ファイルの読み書きパスは "/" で始める必要があります。
  if (myFile) {
    Serial.println("test.txt:");

    // ファイルに内容がある限り読み取ります:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じます:
    myFile.close();
  } else {
    // ファイルが開かなかった場合、エラーを表示します:
    Serial.println("test.txt のオープンエラー");
  }
}

void loop() {
  // setup の後は何も実行されません
}

```

XIAO nRF52840 シリーズを使用している場合、SDカード機能を使用するには [SdFat ライブラリ](https://github.com/greiman/SdFat) を別途ダウンロードする必要があります。

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ:
  Serial.begin(9600);
  while (!Serial) {
    ; // シリアルポートが接続されるのを待つ。ネイティブ USB ポートのみ必要
  }


  Serial.print("SDカードを初期化しています...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("初期化に失敗しました!");
    return;
  }
  Serial.println("初期化完了。");

  // ファイルを開きます。注意: 一度に開けるファイルは1つだけです。
  // 別のファイルを開く前に現在のファイルを閉じる必要があります。
  myFile = SD.open("/test.txt", FILE_WRITE);

  // ファイルが正常に開いた場合、書き込みを行います:
  if (myFile) {
    Serial.print("test.txt に書き込み中...");
    myFile.println("testing 1, 2, 3.");
    // ファイルを閉じます:
    myFile.close();
    Serial.println("完了。");
  } else {
    // ファイルが開かなかった場合、エラーを表示します:
    Serial.println("test.txt のオープンエラー");
  }

  // 読み取りのためにファイルを再オープン:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // ファイルに内容がある限り読み取ります:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じます:
    myFile.close();
  } else {
    // ファイルが開かなかった場合、エラーを表示します:
    Serial.println("test.txt のオープンエラー");
  }
}

void loop() {
  // setup の後は何も実行されません
}
```

## Seeed Studio XIAO 用拡張ベースのアクリルケース

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

私たちは [**アクリルケース**](https://www.seeedstudio.com/XIAO-p-4812.html) を作成しました。このケースは Seeed Studio XIAO 用拡張ベースを保護するためのものです。以下はアクリルケースの構成部品です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

Seeed Studio XIAO 用 Grove Shield と比較すると、Seeed Studio XIAO 用拡張ベースはユーザーにとって非常に便利なモジュールを多数追加しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

このアクリルケースは簡単に組み立てることができ、ケースをより整然とした外観にすることができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## Seeed Studio XIAO SAMD21 拡張ボードでの CircuitPython

この Wiki では、Adafruit Industries による公式 [**CircuitPython**](https://circuitpython.org/) を [**Seeed Studio XIAO SAMD21 開発ボード**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html) にインストールして実行する方法を紹介します！

CircuitPython は、低コストのマイクロコントローラボードでのプログラミングを簡単にするために設計されたプログラミング言語です。デスクトップダウンロードが不要で、セットアップがこれまで以上に簡単になります。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については [**こちら**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython) を参照してください。

## CircuitPython のインストール

**ステップ 1.** Seeed Studio XIAO SAMD21 を拡張ボードに取り付け、Type-C ケーブルを接続します。

**ステップ 2.** 公式の [**Seeed Studio XIAO SAMD21 用 CircuitPython ブートローダー**](https://circuitpython.org/board/seeeduino_xiao/) をダウンロードします。`.uf2` ファイルが PC のダウンロードフォルダに保存されます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**ステップ 3.** Seeed Studio XIAO 用拡張ベースのリセットボタンを素早く2回押して DFU ブートローダーモードに入ります。その後、PC に Arduino ドライブが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**ステップ 4.** PC に `Arduino` という名前の外部ドライブが表示されます。ダウンロードした CircuitPython の uf2 ファイルを `Arduino` ドライブにドラッグします。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**ステップ 5.** CircuitPython ブートローダーがロードされたら、USB Type-C を抜いて再接続します。`CIRCUITPY` という名前の新しい外部ドライブが表示されます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**ステップ 6.** これで CircuitPython が Seeed Studio XIAO SAMD21 にロードされました！ あとは Python プログラムを書いて `main.py` という名前で保存し、それを `CIRCUITPY` ドライブにドラッグするだけです。

### CircuitPython の点滅例

以下は Seeed Studio XIAO で CircuitPython を使用する簡単な例です。

**ステップ 1** `CIRCUITPY` ドライブに `main` という名前のテキストファイルを作成します。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note
`main` の名前は以下のいずれかである必要があります：**code.txt**, **code.py**, **main.py**, **main.txt**。詳細については [**この動作**](https://docs.circuitpython.org/en/latest/README.html#behavior) を参照してください。
:::

**ステップ 2** REPL を使用してオレンジ色の LED のピンを取得します。REPL の詳細については [Welcome to CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) を参照してください。REPL を使用するには、まずシリアルコンソールに接続する必要があります。接続が確立されたら、CTRL+C を2回押して編集モードに入ります。その後、以下のコードをそれぞれコピーして入力します。

```
>>> import board
>>> dir(board)
```

ボード上のすべてのピンのリストが表示されます。各ボードは利用可能なピンの数に応じて若干異なります。
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

YELLOW_LED_INVERTED が見えますか？これがオレンジ色の LED を点滅させるために使用するピンです！

**ステップ 3** 以下のコードを `main` ファイルに貼り付けて保存します。すると、Seeed Studio XIAO SAMD21 ボード上でオレンジ色の LED が点滅するのが見えます。

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

Seeed Studio XIAO SAMD21 は約 40 KB のフラッシュメモリを内蔵していますが、大きなサイズの Python コードファイルを保存するには十分なスペースがない場合があります。幸いなことに、Seeed Studio XIAO SAMD21 拡張ボードには MicroSD カードスロットが内蔵されており、ストレージスペースを拡張できます。この手順に従って、MicroSD カード上で CircuitPython を実行する方法を学びましょう。

:::note
MicroSD カードのシステムフォーマットは FAT または exFAT である必要があります。他のシステムフォーマットを使用すると、MicroSD カードが認識されない原因となります。
:::

**ステップ 1.** Seeed Studio XIAO SAMD21 拡張ボードに MicroSD カードを準備して挿入します。

**ステップ 2.** まだ [**CircuitPython ファイル**](https://circuitpython.org/board/seeeduino_xiao/) をダウンロードしていない場合は、[**CircuitPython のインストール**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/#installing-circuitpython) の章を参照してください。

**ステップ 3.** [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) をダウンロードしてファイルを解凍し、新しい lib を `CIRCUITPY` に置き換えてください。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**ステップ 4.** [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) ファイルを `CIRCUITPY` ドライブにダウンロードしてください。

**`main.py` のコード**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## SDカードからファイルを読み取る
print(f.read())
```

**ステップ 5.** [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) ファイルを `CIRCUITPY` ドライブにダウンロードしてください。

**`sd.py` のコード**

```cpp
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Seeed Studio XIAO 用にカードに接続し、ファイルシステムをマウントします。
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## SDカードのパスに切り替え
```

**ブザーの例**

この例では、MicroSDカード内の `buzzer.py` を実行してブザーをテストします。

**ステップ 1.** [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) をMicroSDカードに貼り付けるだけです。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**ステップ 2.** `CIRCUITPY` ドライブ内の `main.py` を開きます。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**ステップ 3.** `main.py` ファイルに `import buzzer` を追加します。
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

すべてのステップを完了すると、ブザーが動作します。他のPythonファイルをMicroSDカードで実行したい場合は、この例を模倣してください。

:::note
Arduinoモードに戻りたい場合は、Arduino IDEで任意のプログラムをアップロードするだけです。
:::

## デモ

### プロジェクト 1 - リモート制御ファン

**概要**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

このWikiでは、部屋を涼しく保つためのミニファンの作り方を紹介します。

**特徴**

- 自動スイングファン

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**ハードウェア接続**

各センサーをボードに接続する際は、同じ色のラインに従ってください。ファンのGroveケーブルをD0に、サーボのGroveケーブルを **I2C** に、IRのGroveケーブルを **D7** に接続してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Arduinoの手順**

**ステップ 1.** 接続図に従って、すべてのセンサーをボードに接続してください。

**ステップ 2.** [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) ライブラリをインストールします。ライブラリのインストール方法については、こちらのガイドをご覧ください：[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)。

**ステップ 3.** コードをArduino IDEにコピーしてアップロードしてください。

**ステップ 4.** ファンを安全な位置に配置し、ボタンを押して安全に動作することを確認してください。

**コード**

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // サーボオブジェクトを作成してサーボを制御
int RECV_PIN = 7; // ピン7をIR制御に設定

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // サーボ位置を格納する変数
int fanPin = 0;  // D0を制御スイッチとして設定
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // IR有効化を通知
  irrecv.enableIRIn(); // レシーバーを開始
  Serial.println("Enabled IRin");
  myservo.attach(5);  // ピン5にサーボオブジェクトを接続
  pinMode(fanPin, OUTPUT);

}

void loop() {
  if (irrecv.decode(&results)) { // IR信号を確認
    if (results.value == 2155829415) {    // 電源オン/オフ
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

    if (results.value == 2155821255 ) {    // ファンを左にスイング
      for (pos; pos <= 89; pos += 1) { // 0度から90度まで移動
        myservo.write(pos);              // サーボを変数 'pos' の位置に移動
        delay(40);                       // サーボが位置に到達するまで待機
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // ファンを右にスイング
      for (pos; pos >= 1; pos -= 1) { // 90度から0度まで移動
        myservo.write(pos);              // サーボを変数 'pos' の位置に移動
        delay(40);                       // サーボが位置に到達するまで待機

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
    irrecv.resume();                    // 次の指示を受信
  }
  delay(100);
}
```

### プロジェクト 2 - リモートコントロールカー

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

このウィキでは、リモートコントロールカーの作り方を紹介します。

**特徴**

- ミニサイズの車で狭い道も簡単に通過可能

**必要なコンポーネント**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 用拡張ベース**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**DC モーター**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (赤外線) 受信機**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**ハードウェア接続**

各センサーをボードに接続する際は、同じ色の線に従って接続してください。IR センサーの Grove ケーブルを D0 に、Mini Motor Driver の Grove ケーブルを I2C に接続してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Arduino 手順**

**ステップ 1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ 2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードします。

**ステップ 3**. [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) と [**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver) ライブラリをインストールします。ライブラリのインストール方法については、こちらのガイドをご覧ください：[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)。

**ステップ 4**. 以下のコードを Arduino IDE にコピーしてアップロードします。

**コード**

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // MiniMoto ライブラリをインクルード
// 異なるアドレス設定で 2 つの MiniMoto インスタンスを作成
MiniMoto motor0(0xC4); // A1 = 1, A0 = クリア
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (デフォルト)

#define FAULTn  1     // フォルト検出に使用するピン

int RECV_PIN = 0; // IR コントロール用にピン 2 を設定
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("IRin を有効化中");  // IR 有効化のリマインド
  irrecv.enableIRIn(); // 受信機を開始
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { // IR 信号をチェック
    if (results.value == 2155862055) {
      // 前進  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      // ブレーキ  2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      // 後退  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      // 停止  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      // 右折  2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      // 左折  2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    // 次の指示を受信
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

### プロジェクト 3 - 指紋認証で宝箱を解錠 - Seeed Studio XIAO

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

この箱は大切なものを保管することができ、他の人が物を取る心配がありません。箱には指紋認証機能があり、認証に失敗するとブザーが鳴り、LED リングが赤色を表示します。初めに登録した指紋のみが認証を通過でき、認証が成功すると LED リングが緑色を表示します。

**特徴**

- 指紋を簡単に登録可能
- LED リングがロック状態を通知
- OLED スクリーンが現在の情報を表示
- ブザーが指紋認証の結果を通知

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 用拡張ベース**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 静電容量式指紋スキャナー/センサー**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove RGB LED リング - 24**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - サーボ**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

各モジュールを図のようにボードに接続してください。指紋モジュールを XIAO 拡張ボードの UART ポートに接続し、サーボを XIAO 拡張ボードの D0 ポートに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

NeoPixel リングは、3 本の異なる色のワイヤーを通じて XIAO 開発ボードのピンに直接接続されます：NeoPixel リングの DIN ピンを黄色のワイヤーで XIAO の D1 ピンに接続し、NeoPixel リングの VIN ピンを赤色のワイヤーで XIAO の 3V3 ピンに接続し、NeoPixel リングの GND ピンを黒色のワイヤーで XIAO の GND ピンに接続します。

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Arduino 手順**

**ステップ 1**. 接続図に従い、すべてのセンサーをボードに接続してください。

**ステップ 2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードしてください。

**ステップ 3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Servo**](https://github.com/arduino-libraries/Servo)、[**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202)、および [**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring) ライブラリをインストールしてください。ライブラリのインストール方法については、[**こちらのガイド**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)をご参照ください。

**ステップ 4**. コードをコピーして Arduino IDE に貼り付け、アップロードしてください。

**デモンストレーション**

1. 指紋を登録する

画面に「指紋を記録中」と表示されます。指紋デバイスに指を置くと、プログラムが指紋を解析し、登録が完了します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. 身元認証（認証成功）

画面に「Please verify」と表示されます。指紋デバイスに指を置くと、LEDリングが緑色に変わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. 身元認証（認証失敗）

他の人が指を置いた場合、LEDリングが赤色に変わり、ボードに「Identity deny」と表示され、同時にアラームが作動します。

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

#define PIXEL_PIN    2    // NeoPixelに接続されるデジタルIOピン
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
  strip.show(); // すべてのピクセルを「オフ」に初期化
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
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) {
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);
          delay(15);
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

### プロジェクト 4 - Seeed Studio XIAO 拡張ベース - mjolnir

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

このハンマーは模擬されたミョルニルです。このデバイスに指紋を登録することで、あなたがその主人となります。ハンマーは、Grove - 電磁石に吸着するために磁石を必要とし、主人が指紋でロックを解除するまで固定されます。その後、ハンマーを持ち去ることができます。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 静電容量式指紋スキャナー/センサー**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 電磁石**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

拡張ボードと必要なモジュールをGroveワイヤーで接続してください。Grove電磁石モジュールをD0ポートに接続し、指紋モジュールをI2Cポートに接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Arduino手順**

**ステップ1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードします。

**ステップ3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino) と [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) ライブラリをインストールします。ライブラリのインストール方法については、[**こちらのガイド**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

**ステップ4**. 以下のコードをArduino IDEにコピーしてアップロードします。

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

// setupルーチンはリセットボタンを押したときに1回だけ実行されます:
void setup() {
  // デジタルピンを出力として初期化します。

  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(Electromagnet, OUTPUT);
  digitalWrite(Electromagnet, HIGH);  // 電磁石をオンにする（HIGHは電圧レベル）
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

// loopルーチンは永遠に繰り返し実行されます:
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
    digitalWrite(Electromagnet, LOW);  // 電磁石をオフにする（LOWは電圧レベル）
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
    digitalWrite(Electromagnet, HIGH);  // 電磁石をオンにする（HIGHは電圧レベル）

  }
}
```

### プロジェクト5 - 空気品質センサーハブ - Seeed Studio Expansion Base for XIAO

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

これは環境検出デバイスで、Grove - レーザーPM2.5センサー、Grove - CO2 & 温度 & 湿度センサー、Grove - ダストセンサーを使用して、それぞれPM2.5、PM10、温度、湿度、CO2、ダスト粒子を収集します。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - CO2 & 温度 & 湿度センサー for Arduino (SCD30) - 3-in-1**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - レーザーPM2.5ダストセンサー - Arduino互換 - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - ダストセンサー（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

各センサーを図に示すように接続してください。CO2センサーとPM2.5センサーをそれぞれ2つのI2Cポートに接続し、ダストセンサーをUARTポートに接続します。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Arduino手順**

**ステップ1**. 接続図に従って、すべてのセンサーをボードに接続します。

**ステップ2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードします。

**ステップ 3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301)、および [**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30) ライブラリをインストールします。ライブラリのインストール方法については、こちらのガイドをご覧ください：[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)。

**ステップ 4**. 以下のコードを Arduino IDE にコピーしてアップロードします。

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
unsigned long sampletime_ms = 5000; // サンプル時間 30秒
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"センサー番号: ", "PM1.0 濃度(CF=1, 標準粒子状物質, 単位:ug/m3): ",
                     "PM2.5 濃度(CF=1, 標準粒子状物質, 単位:ug/m3): ",
                     "PM10 濃度(CF=1, 標準粒子状物質, 単位:ug/m3): ",
                     "PM1.0 濃度(大気環境, 単位:ug/m3): ",
                     "PM2.5 濃度(大気環境, 単位:ug/m3): ",
                     "PM10 濃度(大気環境, 単位:ug/m3): ",
                    };


///////////////////////////////////////////////////////////////////
// PM2.5 濃度(大気環境, 単位:ug/m3): 値
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

/* buf を 29 の uint8_t データで解析 */
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

/* 30秒 */
void setup() {
  Serial.begin(115200);
  Wire.begin();
  u8x8.begin();
  u8x8.setFlipMode(0);
  scd30.initialize();
  pinMode(pin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  starttime = millis(); // 現在の時間を取得
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
    SERIAL_OUTPUT.println("HM330X の結果読み取りに失敗しました!!!");
  }
  if(memu == 0){
  parse_result(buf);
  }

  if ((millis() - starttime) > sampletime_ms  && memu == 0) {
    ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // 0=>100 の整数パーセンテージ
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // 仕様書の曲線を使用

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
    SERIAL_OUTPUT.println("HM330X の結果読み取りに失敗しました!!!");
  }
  if(memu == 1){
  parse_result2(buf);
  }
}
```

### プロジェクト 6 - Seeed Studio XIAO 拡張ベース - 心拍数

**概要**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

このシンプルで低コストなプロジェクトは、Seeed Studio XIAO 拡張ベースを使用して心拍数を報告します。
使用するデバイスは I2C の 2 線式インターフェースを備えており、配線を最小限に抑えることができます。

**必要なコンポーネント**

- [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 拡張ベース**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 指クリップ式心拍センサー**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**ハードウェア接続**

以下の図に示すように、心拍センサーをXIAO拡張ボードのI2Cインターフェースに接続してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Arduinoの手順**

**ステップ1**. 接続図に従い、すべてのセンサーをボードに接続してください。

**ステップ2**. [**Arduino IDE**](https://www.arduino.cc/en/Main/software) をダウンロードしてください。

**ステップ3**. [**u8g2**](https://github.com/olikraus/U8g2_Arduino) ライブラリをインストールしてください。ライブラリのインストール方法については、こちらのガイドをご覧ください：[**ライブラリのインストール方法**](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)。

**ステップ4**. 以下のコードをArduino IDEにコピーしてアップロードしてください。

**コード**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println("心拍センサー:");

  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
}
void loop() {
  Wire.requestFrom(0xA0 >> 1, 1);    // スレーブデバイスから1バイトを要求
  while (Wire.available()) {         // スレーブが要求されたデータより少ない場合もある
    unsigned char c = Wire.read();   // 心拍値（1バイト）を受信
    u8x8.setFont(u8x8_font_chroma48medium8_r);
//    u8x8.setCursor(0, 3);
//    u8x8.print("血液検出中 ");
//    delay(10000);

    u8x8.setCursor(0, 3);
    u8x8.print("心拍数: ");
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

### Q1: XIAO拡張ボードのPMICは5Vピンに電力を供給しますか？

PMICは電力を供給しません。5VはUSBから直接供給されます。5Vピンで提供される電流は、USB接続から利用可能な電流と同じです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>