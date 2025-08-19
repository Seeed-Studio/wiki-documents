---
description: Seeed Studio XIAO ESP32C6 におけるピンの多重化。
title: Seeed Studio XIAO ESP32C6 におけるピンの多重化
keywords:
  - esp32c6
  - xiao
  - ピン多重化
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /ja/xiao_pin_multiplexing_esp33c6
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32C6 の Arduino プログラミング

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Seeed Studio XIAO ESP32C6 は、高度に統合された [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) によって駆動されており、**2つの32ビットRISC-Vプロセッサ**を搭載しています。高性能 (HP) プロセッサは**最大160 MHz**で動作し、低消費電力 (LP) の32ビットRISC-Vプロセッサは最大20 MHzで動作可能です。チップには**512KB SRAM と 4 MB Flash**が搭載されており、より多くのプログラミングスペースを提供し、IoT制御シナリオにさらなる可能性をもたらします。

## はじめに

### ピンアウト概要

始める前に、XIAO ESP32C6 が持つすべてのピンとその機能を以下の回路図で確認しましょう。

<table align="center">
	<tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 センスピンリスト</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

- 5V - USBポートからの5V出力です。このピンを電圧入力として使用することもできますが、外部電源とこのピンの間にアノードをバッテリー、カソードを5Vピンに接続したダイオード（ショットキー、信号、電力）が必要です。
- 3V3 - オンボードレギュレーターからの規制された出力です。700mAを引き出すことができます。
- GND - 電力/データ/信号のグランド <!-- 確認が必要 -->

## シリアル通信

XIAO ESP32C6 では、`ソフトウェアシリアル`と`ハードウェアシリアル`の2つの方法でシリアル通信を行うことができます。ソフトウェアシリアルは柔軟性が高く、ハードウェアシリアルはより良い性能を提供します。

### ハードウェアセットアップ

1. 外部デバイスの**TXピン**を XIAO ESP32C6 の RXピン (`D7`) に接続します。
2. 外部デバイスの**RXピン**を XIAO ESP32C6 の TXピン (`D6`) に接続します。

### コード例

#### ソフトウェアシリアル

ソフトウェアシリアルを使用するには、[EspSoftwareSerial](https://github.com/plerup/espsoftwareserial) ライブラリをインストールしてください。

:::tip
現在、EspSoftwareSerial ライブラリのバージョン **7.0.0** を推奨しています。他のバージョンでは、ソフトシリアルポートが正常に動作しない問題が発生する可能性があります。
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("ソフトウェアシリアルで受信: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("ハードウェアシリアルで受信: ");
    mySerial.println(data);
  }
}
```

この例では、ピン `D7 (RX)` と `D6 (TX)` にソフトウェアシリアルを設定し、9600ボーで動作します。ハードウェアシリアル（USB）とソフトウェアシリアルポートの両方を監視し、受信したデータを相互にエコーします。

#### ハードウェアシリアル

XIAO ESP32C6 にはシリアル通信用のハードウェアUART (UART0) があり、ピン D7/D6 に対応しています。

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(0); // UART0 (Serial0)

void setup() {
  Serial.begin(9600);  // USBシリアル
  mySerial.begin(9600); // UART0
}

void loop() {
  if (Serial.available()) {
    char data = Serial.read();
    Serial.print("USBで受信: ");
    Serial.println(data);
  }
  
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("UART0で受信: ");
    Serial.println(data);
  }
}
```

この例では、通信にハードウェアUART0 (Serial0) を使用します。USBシリアルとUART0の両方を初期化し、両方のポートで受信したデータを監視して、USBシリアルポートに受信メッセージを出力します。

#### Serial1 の使用

上記の XIAO ESP32C6 ピン図に基づいて特定のパラメータを確認すると、TXピンとRXピンがあることがわかります。これはシリアル通信とは異なりますが、使用方法は非常に似ており、いくつかのパラメータを追加する必要があります。次に、チップから引き出されたピンを使用してシリアル通信を行います。

含める必要があるコア関数:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1 を有効化する関数プロトタイプ : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  : ボーレート
  - `config`: 設定ビット
  - `rxPin` : 受信ピン
  - `txPin` : 送信ピン

デジタルピンポートを定義する場合は、`#define RX_PIN D7`、`#define TX_PIN D6` とする必要があります。異なる XIAO シリーズのピン図を参照して具体的なパラメータを確認してください。

以下はサンプルプログラムです:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("受信しました: ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

プログラムをアップロードした後、Arduino IDE のシリアルモニタを開き、ボーレートを 115200 に設定します。その後、シリアルモニタを通じて XIAO ESP32C6 に送信したい内容を入力できます。XIAO は、送信された内容の各バイトを出力します。ここでは、入力した内容が "Hello Everyone" の場合の結果を以下に示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## デジタル I/O

XIAO ESP32C6 には、入力または出力として設定可能な 12 本の GPIO ピンがあります。

### ハードウェア準備

1. ピン `D1` にボタンを接続します：
   - 外部プルアップ抵抗を使用します（内部プルアップ抵抗を使用する場合は省略可能）。
2. ピン `D10` に LED を接続します：
   - LED と直列に電流制限抵抗を含めます。

### ソフトウェア実装

GPIO API を使用して、GPIO ピンを設定および操作できます。詳細については、[GPIO API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) ドキュメントを参照してください。

```cpp
const int buttonPin = D1; // ボタンのピン
const int ledPin = D10; // LED のピン

void setup() {
  pinMode(ledPin, OUTPUT); // LED ピンを出力として設定
  pinMode(buttonPin, INPUT); // ボタンピンを入力として設定
  // 外部プルアップ抵抗を使用しない場合
  pinMode(buttonPin, INPUT_PULLUP); // 内部プルアップ抵抗を有効化
}

void loop() {
  int buttonState = digitalRead(buttonPin); // ボタンの状態を読み取る
  digitalWrite(ledPin, buttonState); // ボタンの状態を LED に書き込む
}
```

#### 割り込み方式

ボタンの押下をより効率的に処理するために、割り込みを使用することもできます。

```cpp
// ボタンと LED のピン番号を定義
const int buttonPin = D1;
const int ledPin = D10;

// ボタン関連のデータを保持する構造体を定義
struct Button {
    const uint8_t PIN; // ボタンのピン番号
    uint32_t numberKeyPresses; // ボタンが押された回数のカウンタ
    bool pressed; // ボタンが現在押されているかを示すフラグ
};

// ボタン用の構造体インスタンスを作成
Button my_button = {buttonPin, 0, false};

// ボタン押下を処理する割り込みサービスルーチン (ISR)
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // 引数を Button ポインタにキャスト
    s->numberKeyPresses += 1; // ボタン押下回数をインクリメント
    s->pressed = true; // 押下フラグを設定
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // ボタンピンを内部プルアップ抵抗付きの入力として設定
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // ボタンピンに ISR を割り当て、下降エッジでトリガー
}

void loop() {
    if (my_button.pressed) { // ボタンが押されたかを確認
        Serial.printf("Button 1 has been pressed %lu times\n", my_button.numberKeyPresses); // ボタン押下回数をシリアルモニタに出力
        my_button.pressed = false; // 押下フラグをリセット
    }

    static uint32_t lastMillis = 0; // 割り込みがデタッチされた最後の時間を保持する変数
    if (millis() - lastMillis > 10000) { // 10 秒が経過したかを確認
        lastMillis = millis(); // 最後のデタッチ時間を更新
        detachInterrupt(my_button.PIN); // ボタンピンから割り込みをデタッチ
    }
}
```

この例では、`Button` 構造体を使用して、ボタンに関連するデータ（ピン番号、押下回数、現在押されているかのフラグ）を保持します。

`isr` 関数は、ボタン押下を処理する割り込みサービスルーチン (ISR) です。この関数は、ボタン押下回数をインクリメントし、押下フラグを `true` に設定します。

`setup` 関数では、シリアル通信を初期化し、ボタンピンを内部プルアップ抵抗付きの入力として設定し、`isr` 関数をボタンピンの割り込みハンドラとして割り当てます（下降エッジでトリガー）。

`loop` 関数では、ボタンが押されたかを確認します。押されている場合、ボタン押下回数をシリアルモニタに出力し、押下フラグをリセットします。また、10 秒ごとにボタンピンから割り込みをデタッチするセクションを含めています。これは、他の操作を許可するため、または意図しない割り込みを防ぐためと考えられます。

## ADC - アナログ-デジタルコンバータ

XIAO ESP32C6 には複数のアナログ入力ピンがあり、アナログ電圧を読み取ることができます。

詳細については、[ADC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) のドキュメントを参照してください。

### ハードウェア設定

1. ポテンショメータをピン A0 に接続します。一端を 3.3V に、もう一端を GND に接続します。

### ソフトウェア実装

以下はアナログ値を読み取る Arduino スケッチです：

```cpp
const int analogPin = A0; 

void setup() {
  // シリアル通信を 115200 ビット/秒で初期化
  Serial.begin(115200);
  
  // 解像度を 12 ビット (0-4095) に設定
  analogReadResolution(12);
}

void loop() {
  // analogPin のアナログ値とミリボルト値を読み取る
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);
  
  // シリアルモニタに値を出力
  Serial.printf("ADC アナログ値 = %d\n", analogValue);
  Serial.printf("ADC ミリボルト値 = %d\n", analogVolts);
  
  delay(100); // シリアルからの読み取りを明確にするための遅延
}
```

このコードは、指定されたピンからアナログ値を読み取り、その値とミリボルト値をシリアルモニタに出力します。

## PWM 信号 / LED 制御

XIAO ESP32-C6 には 6 つの LEDC チャンネルがあり、それぞれ独立した波形を生成できます。これにより、例えば RGB LED デバイスを駆動することが可能です。

詳細については、[LEDC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) のドキュメントを参照してください。

### ハードウェア設定

1. 電流制限抵抗を直列に接続した LED をピン `D2` に接続します。

### ソフトウェア実装

以下は PWM 出力を示す Arduino スケッチです：

#### 一般的な PWM

```cpp
const int ledPin = D2;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    analogWrite(ledPin, dutyCycle);
    delay(10);
  }
}
```

このコードは PWM を使用して LED の明るさを徐々に増加させます。

#### LED 制御

```cpp
/*
 LEDC ソフトウェアフェード

 この例は、ledcWrite 関数を使用して
 LED をソフトウェアでフェードさせる方法を示します。

 このコードは、元の Arduino Fade 例を基にしています：
 https://www.arduino.cc/en/Tutorial/Fade

 この例のコードはパブリックドメインです。
 */

// LEDC タイマーに 12 ビットの精度を使用
#define LEDC_TIMER_12_BIT  12

// LEDC の基本周波数として 5000 Hz を使用
#define LEDC_BASE_FREQ     5000

// フェードする LED ピン (内蔵 LED の場合は LED_BUILTIN 定数を使用)
#define LED_PIN            D5

int brightness = 0;    // LED の明るさ
int fadeAmount = 5;    // LED のフェード量

// Arduino ライクな analogWrite
// 値は 0 から valueMax の間でなければなりません
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // デューティ比を計算、4095 は 2 ^ 12 - 1 に由来
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // LEDC にデューティ比を書き込む
  ledcWrite(pin, duty);
}

void setup() {
  // タイマーを設定し、LED ピンにタイマーをアタッチ
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // LEDC チャンネルに明るさを設定
  ledcAnalogWrite(LED_PIN, brightness);

  // 次のループの反復のために明るさを変更
  brightness = brightness + fadeAmount;

  // フェードの端でフェード方向を反転
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // 暗くなる効果を見るために 30 ミリ秒待機
  delay(30);
}
```

このコードは、`ledcWrite` 関数を使用して LED をフェードさせる方法を示しています。LED の明るさは連続的に増減を繰り返します。

## I2C

XIAO ESP32C6 には、I2C デバイスと通信するためのハードウェア I2C インターフェースが搭載されています。

詳細については、[I2C API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) ドキュメントを参照してください。

### ハードウェア準備

1. I2C デバイスの SDA ピンを XIAO の SDA ピン (`D4`) に接続します。
2. I2C デバイスの SCL ピンを XIAO の SCL ピン (`D5`) に接続します。

### ソフトウェア実装

#### マスターモード

以下は、I2C センサーからデータを読み取る Arduino スケッチの例です：

```cpp
#include <Wire.h>

const int sensorAddress = 0x40;

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  Wire.beginTransmission(sensorAddress);
  Wire.write(0x01);  // レジスタアドレス
  Wire.endTransmission();

  Wire.requestFrom(sensorAddress, 2);
  if (Wire.available() >= 2) {
    int data = Wire.read() << 8 | Wire.read();
    Serial.println(data);
  }

  delay(100);
}
```

このコードは、I2C センサーのレジスタ `0x01` から 16 ビットの値を読み取ります。

#### スレーブモード

以下は、XIAO ESP32C6 を I2C *スレーブデバイス* として使用する Arduino スケッチの例です：

```cpp
#include "Wire.h"

#define I2C_DEV_ADDR 0x55

uint32_t i = 0;

void onRequest() {
  Wire.print(i++);
  Wire.print(" Packets.");
  Serial.println("onRequest");
}

void onReceive(int len) {
  Serial.printf("onReceive[%d]: ", len);
  while (Wire.available()) {
    Serial.write(Wire.read());
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Wire.onReceive(onReceive);
  Wire.onRequest(onRequest);
  Wire.begin((uint8_t)I2C_DEV_ADDR);

#if CONFIG_IDF_TARGET_ESP32
  char message[64];
  snprintf(message, 64, "%lu Packets.", i++);
  Wire.slaveWrite((uint8_t *)message, strlen(message));
#endif
}

void loop() {
  // スレーブデバイスのコードをここに記述
}
```

このスレーブモードの例では、XIAO ESP32C6 はアドレス `0x55` の I2C スレーブデバイスとして設定されています。`onReceive` コールバック関数はスレーブがマスターからデータを受信したときに呼び出され、`onRequest` コールバック関数はマスターがスレーブからデータを要求したときに呼び出されます。

## SPI

XIAO ESP32C6 マイクロコントローラーボードには、SPI 対応デバイスとの高速データ交換を可能にする組み込み SPI インターフェースが搭載されています。これは、複数のデバイス間で迅速な通信が必要なプロジェクトに特に役立ちます。

- 詳細な技術仕様については、[XIAO ESP32C6 データシート](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf) を参照してください。
- XIAO ESP32C6 の SPI インターフェースの使用方法については、[SPI API ドキュメント](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#) を参照してください。

### ハードウェア準備

XIAO ESP32C6 を他の SPI デバイスに接続するには、以下の手順に従ってください：

1. **MOSI (Master Out Slave In):** SPI デバイスの `MOSI` ピンを XIAO のピン `D10` に接続します。
2. **MISO (Master In Slave Out):** SPI デバイスの `MISO` ピンを XIAO のピン `D9` に接続します。
3. **SCK (Serial Clock):** SPI デバイスの `SCK` ピンを XIAO のピン `D8` に接続します。
4. **CS (Chip Select):** SPI デバイスの `CS` ピンをデジタルピン（例：`D3`）に接続します。

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (例)
```

### ソフトウェア実装

以下は、XIAO ESP32C6 を使用して SPI デバイスと基本的な通信を行う Arduino スケッチの例です。このスケッチでは、SPI デバイスにコマンドを送信し、応答を読み取ります。

```cpp
#include <SPI.h>

const int csPin = 3;  // チップセレクト (CS) に D3 ピンを使用

void setup() {
  // SPI 通信を初期化
  SPI.begin();            
  // CS ピンを出力として設定
  pinMode(csPin, OUTPUT); 
  // CS ピンを HIGH に設定して通信を無効化
  digitalWrite(csPin, HIGH);
}

void loop() {
  // デバイスとの通信を開始
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // デバイスにコマンドを送信
  int data = SPI.transfer(0);  // 応答を読み取る
  digitalWrite(csPin, HIGH);  // 通信を終了

  // 受信したデータを出力
  Serial.println(data);       
  delay(100);  // 短い待機時間
}
```

:::note
スケッチ内のピン割り当てがハードウェア設定と一致していることを確認してください。上記の例では、XIAO ESP32-C6 の `pin_arduino.h` ファイルに基づく事前定義されたピン番号を使用し、CS ピンには追加の定義を行っています。
:::

## リソース

- [XIAO ESP32C6 ドキュメント](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)
- [ESP32-C6 データシート](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Arduino リファレンス](https://www.arduino.cc/reference/en/)
- [Arduino ESP32 リファレンス](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)