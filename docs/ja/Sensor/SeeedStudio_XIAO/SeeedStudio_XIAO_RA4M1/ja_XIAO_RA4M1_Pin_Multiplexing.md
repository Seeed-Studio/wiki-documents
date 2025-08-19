---
description: Seeed Studio XIAO RA4M1 のピン多重化について。
title: Seeed Studio XIAO RA4M1 のピン多重化
keywords:
- ra4m1
- xiao
- ピン多重化
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
sidebar_position: 1
slug: /ja/xiao_ra4m1_pin_multiplexing
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## デジタル

XIAO RA4M1 は最大 11 個の通常 GPIO ピン、6 個のアナログピン、および 8 個の再利用可能な IO ポートを備えています。この例では、XIAO RA4M1、XIAO 拡張ボード、およびリレーを使用して、異なるデジタルピンを読み取りおよび書き込みに使用する方法を示します。

### ハードウェア準備

<table align="center">
  <tr>
      <th>Seeed Studio XIAO R4M1</th>
        <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
        <th>Grove - リレー</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RA4M1 または Sense を拡張ボードに取り付け、リレーを Grove ケーブルを使用して拡張ボードの **A0/D0** インターフェースに接続してください。最後に、USB-C ケーブルを使用して XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO 拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御します。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
const int buttonPin = D1;     // プッシュボタンのピン番号
int buttonState = 0;          // プッシュボタンの状態を読み取るための変数
const int relayPin = D0;

void setup() {
  // リレーピンを出力として初期化
  pinMode(relayPin, OUTPUT);
  // プッシュボタンピンを入力として初期化
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // プッシュボタンの状態を読み取る
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認。押されている場合、buttonState は HIGH
  if (buttonState == HIGH) {
    // リレーをオンにする
    digitalWrite(relayPin, HIGH);
  } else {
    // リレーをオフにする
    digitalWrite(relayPin, LOW);
  }
}
```

すべてが正常に動作すれば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/31.gif" style={{width:600, height:'auto'}}/></div>

## デジタルをPWMとして使用

XIAO RA4M1のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したり、その他の機能を実現することができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - 可変カラーLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO RA4M1またはSenseを拡張ボードに取り付け、Groveケーブルを使用して可変カラーLEDを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

この例では、PWM出力を使用してライトの明るさを制御する方法を示します。

```cpp
int LED_pin = D0;    // LEDがデジタルピン10に接続されている

void setup() {
  // LEDピンを出力として宣言
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 最小値から最大値まで5ポイントずつ増加してフェードイン
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }

  // 最大値から最小値まで5ポイントずつ減少してフェードアウト
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }
}
```

プログラムが正常に実行されると、以下のような動作効果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/32.gif" style={{width:600, height:'auto'}}/></div>

## アナログ

XIAO RA4M1 開発ボードは最大14ビットのADCを備えており、アナログセンサー値を高解像度で読み取ることができます。これにより、より正確な値を取得することが可能です。XIAO RA4M1 開発ボードのアナログ-デジタルコンバーター（ADC）は、デフォルトでは10ビットの解像度に設定されていますが、12ビットおよび14ビットの解像度に変更することで、アナログ読み取りの精度を向上させることができます。

ADC精度による詳細データ:
- 10ビット: 0～1024
- 12ビット: 0～4096
- 14ビット: 0～16383

次に、ADCの特性を反映するために2つのセンサーを選択します。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove-可変カラーLED</th>
	    <th>Grove-回転角センサー</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

### ソフトウェア実装

``` cpp
#define ADC_Bit_Fourteen 14
#define ADC_Bit_Twelve 12
#define ADC_Bit_Ten 10

const int analogInPin = A1;  // ポテンショメータが接続されているアナログ入力ピン
const int analogOutPin = 9;  // LEDが接続されているアナログ出力ピン

int sensorValue = 0;  // ポテンショメータから読み取った値
int outputValue = 0;  // PWM（アナログ出力）に出力する値

void setup() {

  Serial.begin(115200);
  // Ten_Bite_ADC_Config(); // 10ビット
  // Twelve_Bite_ADC_Config(); // 12ビット
  Fourteen_Bite_ADC_Config(); // 14ビット
  
}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("センサー値 = ");
  Serial.print(sensorValue);
  Serial.print("\t 出力値 = ");
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

すべてが正常に動作すれば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/33.gif" style={{width:650, height:'auto'}}/></div>

## シリアル通信

Arduino IDEを使用する際、シリアル通信は多くのプロジェクトにおいて重要な部分です。Arduino IDEでシリアル通信を使用するには、まずシリアルモニターウィンドウを開く必要があります。これは、ツールバーの**シリアルモニター**アイコンをクリックするか、**Ctrl+Shift+M**ショートカットキーを押すことで行えます。

### 一般的な使用方法

よく使用されるシリアル通信の関数には以下のものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- シリアルポートにデータを読みやすい形式で送信します。
- `Serial.write()` -- シリアルポートにバイナリデータを送信します。
- `Serial.available()` -- シリアルポートから読み取れるデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから1バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信が完了するまで待機します。

これらのシリアル通信関数を使用することで、Arduinoボードとコンピュータ間でデータを送受信でき、インタラクティブなプロジェクトを作成する可能性が広がります。

以下は例プログラムです：

```c
void setup() {
  // シリアル通信を9600bpsで初期化
  Serial.begin(9600);
}

void loop() {
  // シリアルポートにデータを送信
  Serial.println("Hello World!");

  // シリアルポートからデータを読み取る
  if (Serial.available() > 0) {
    // 受信したバイトを読み取る
    char incomingByte = Serial.read();
    // 受信したバイトをシリアルモニターに表示
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

### Serial1の使用方法

上記のXIAO RA4M1ピン図に基づいて特定のパラメータを確認すると、TXピンとRXピンがあることがわかります。これは通常のシリアル通信とは異なりますが、使用方法は非常に似ています。ただし、いくつかのパラメータを追加する必要があります。次に、チップから引き出されたピンを使用してシリアル通信を行います。

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

### ソフトウェアシリアルの使用方法

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // シリアル通信を初期化
  Serial.begin(9600);
  while (!Serial);

  // ソフトウェアシリアルを初期化
  mySerial.begin(9600);
}

void loop() {
  // ソフトウェアシリアルからデータを読み取る
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // ソフトウェアシリアルにデータを書き込む
  mySerial.print("Hello World!");

  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

このプログラムでは、まず`SoftwareSerial.h`ライブラリをインクルードしてソフトウェアシリアルを使用します。そして、ピン2と3をRXおよびTXとして使用して、`mySerial`という新しいSoftwareSerialオブジェクトを作成します。

`setup()`関数では、ハードウェアシリアル（`Serial.begin()`）とソフトウェアシリアル（`mySerial.begin()`）の両方を初期化します。

`loop()`関数では、`mySerial.available()`関数を使用して、ソフトウェアシリアルから読み取れるデータがあるかどうかを確認します。データがある場合、`mySerial.read()`関数を使用して受信したバイトを読み取り、`data`という変数に格納します。その後、`Serial.print()`および`Serial.println()`関数を使用して、"Received data: "と`data`の値をハードウェアシリアルに表示します。

また、`mySerial.print()`関数を使用して、"Hello World!"をソフトウェアシリアルに書き込みます。これにより、XIAOからソフトウェアシリアルポートに接続されたデバイスにデータが送信されます。

最後に、`delay()`関数を追加して、ループを繰り返す前に1秒待機します。

## IIC

XIAO RA4M1 には I2C インターフェースが搭載されており、多くのセンサーのデータ送受信や解析、さらには一部の OLED スクリーンの使用に利用できます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO 拡張ボード上の OLED ディスプレイは I2C プロトコルを使用しており、ボード上の I2C 回路を介して XIAO の I2C インターフェースに接続されています。そのため、XIAO を拡張ボードに直接差し込んでプログラムを作成し、画面にコンテンツを表示することができます。

### ソフトウェア実装

この例では、Seeed Studio XIAO RA4M1 用拡張ベース上の OLED ディスプレイの使用方法を紹介します。

#### ステップ 1. Seeed Studio XIAO RA4M1 を拡張ボードに取り付け、Type-C ケーブルを接続します。

#### ステップ 2. u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### ステップ 3. 以下のコードをコピーして Arduino IDE に貼り付け、アップロードします。

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // リセットなしの OLED ディスプレイ

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // 数値を 1 から 3 に設定すると、画面の文字が 180 度回転します
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("i'm XIAO RA4M1");
}
```

コードの最初の数行では、Arduino.h、U8x8lib.h、Wire.h などの必要なライブラリをインクルードしています。U8x8lib.h ライブラリは OLED ディスプレイを制御するための関数を提供し、Wire.h ライブラリは I2C 通信のための関数を提供します。

`setup()` 関数では、`u8x8.begin()` 関数を使用して OLED ディスプレイを初期化します。また、`u8x8.setFlipMode()` 関数を使用してディスプレイのフリップモードを設定し、画面を 180 度回転させます。

`loop()` 関数では、`u8x8.setFont()` 関数を使用してフォントを設定し、`u8x8.setCursor()` 関数を使用してディスプレイ上のカーソルの位置を指定します。最後に、`u8x8.print()` 関数を使用して OLED ディスプレイに文字列 "Hello World!" を表示します。

XIAO RA4M1 にプログラムをアップロードすると、拡張ボード上の OLED ディスプレイ画面にコンテンツが表示されるのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/21.png" style={{width:800, height:'auto'}}/></div>

## SPI

RA4M1チップは複数の周辺機器を統合しており、その中にはSPIインターフェースも含まれています。このインターフェースを使用して、フラッシュメモリ、ディスプレイ、センサーなどの外部SPIデバイスを接続することができます。XIAO RA4M1は高速SPI転送モードもサポートしており、最大80 MHzのSPI転送速度を実現できます。これにより、ほとんどのSPIデバイスのデータ転送ニーズを満たすことができます。

### ハードウェア準備

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

上記のハードウェアを準備した後、ジャンパーワイヤーを使用してXIAOとOLEDのSPIインターフェースを接続します。配線方法については以下の図を参照してください。

### ソフトウェア実装

次に、以下のプログラムを例として、SPIインターフェースを使用してOLED画面を制御する方法を紹介します。

u8g2ライブラリをインストールします。

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

`setup()`関数では、`U8G2_SH1107_128X128_1_4W_HW_SPI`クラスが適切なコンストラクタ引数を使用してインスタンス化されます。この引数は、チップセレクト（cs）、データ/コマンド（dc）、リセット（reset）に使用されるピンを指定します。その後、`u8g2.begin()`関数を呼び出してディスプレイを初期化します。

`loop()`関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()`関数を使用して新しいコンテンツでディスプレイを更新します。`u8g2.firstPage()`関数は書き込み用のディスプレイバッファを設定し、`u8g2.nextPage()`関数は更新されたコンテンツを表示します。do-whileループは、プログラムが停止するまでコンテンツが継続的に表示されることを保証します。

全体として、このコードはU8g2ライブラリを使用してOLEDディスプレイを制御し、テキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>

## CAN

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
	    <th>XIAO CAN Bus 拡張ボード</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### ステップ 1. 2つのCAN Bus Breakout BoardとXIAO RA4M1を準備します
#### ステップ 2. これら2つのXIAO RA4M1をそれぞれCAN Bus Breakout Boardに挿入します
#### ステップ 3. デュポン線接続を準備します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/36.png" style={{width:400, height:'auto'}}/></div>

### ソフトウェア準備

[MCP2515ボード用のArduinoライブラリ](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)を提供しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

このライブラリには以下の例が含まれています：

- ***OBDII-PIDs*** - OBD-IIインターフェースからデータを取得
- ***send*** - CANバスにフレームを送信
- ***recv*** - CANバスからフレームを受信
- ***set_mask_filter_recv*** - マスクとフィルタ設定を使用してCANバスからフレームを受信

### ソフトウェア実装

:::tip
2つのXIAO RA4M1を同時に電源オンしてプログラムをダウンロードすることはできません。これを行うとシリアルポートのダウンロード時にエラーが発生します。1つをダウンロードした後に取り外し、次にもう1つのXIAO RA4M1を電源オンしてプログラムをダウンロードし、最後に同時に電源オンしてシリアルポートメッセージを確認してください。
:::

**CAN 書き込みコード**
```c
/*  CANバスからフレームを送信

    CAN ボーレート,
    
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

/* ボードに合わせてSPI_CS_PINを変更してください。

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

MCP_CAN CAN(SPI_CS_PIN);                                    // CSピンを設定

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下のコードはOBD-II GPS Dev Kit Atemga32U4バージョンに必要
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下のコードはOBD-II GPS Dev Kit RP2040バージョンに必要
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // CANバスを初期化 : ボーレート = 500k
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
    delay(100);                       // 100msごとにデータを送信
}

// END FILE
```

**CAN 読み取りコード**
```c
/*  CANバスからフレームを受信

    CAN ボーレート,
    
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

/* ボードに合わせてSPI_CS_PINを変更してください。

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

MCP_CAN CAN(SPI_CS_PIN);                                    // CSピンを設定


void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下のコードはOBD-II GPS Dev Kit Atemga32U4バージョンに必要
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下のコードはOBD-II GPS Dev Kit RP2040バージョンに必要
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // CANバスを初期化 : ボーレート = 500k
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

    if(CAN_MSGAVAIL == CAN.checkReceive())            // データが来ているか確認
    {
        CAN.readMsgBuf(&len, buf);    // データを読み取る, len: データ長, buf: データバッファ

        unsigned long canId = CAN.getCanId();
        
        Serial.println("-----------------------------");
        Serial.print("IDからデータを取得: ");
        Serial.println(canId, HEX);

        for(int i = 0; i<len; i++)    // データを出力
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
この例では、CAN Bus Breakout Board の端子ピン P1 の一つをはんだ付けする必要があります。これを行わない場合、125 CAN ボーレート以下しか使用できませんが、はんだ付けを行えば任意の速度を使用できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/30.png" style={{width:600, height:'auto'}}/></div>

***終端抵抗を接続する必要があるのはいつですか？***
- 1. 長距離通信: CAN バスが長い場合（例: 1メートル以上）、信号反射による通信問題を回避するために、バスの両端に終端抵抗を接続する必要があります。
- 2. 複数ノード通信: 複数のノードが同じ CAN バスに接続されている場合、終端抵抗も不可欠です。これによりバスのインピーダンスが安定し、信号の歪みを防ぐことができます。

***終端抵抗を切断できるのはいつですか？***
- 1. 短距離通信: 一部の短距離アプリケーション（通常 1メートル未満）では、信号反射の影響が比較的小さいため、終端抵抗を省略することができます。
- 2. 単一ノード通信: バス上にノードが1つしかない場合（例: デバッグ環境）で、距離が短い場合、終端抵抗を一時的に切断することができます。

<table align="center">
	<tr>
	    <th>送信側コード結果</th>
	    <th>受信側コード結果</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/25.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/26.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
