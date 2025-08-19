---
title: Seeed Studio XIAO MG24 におけるピンの多重化
description: Seeed Studio XIAO MG24(Sense) におけるピンの多重化について
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.webp
slug: /ja/xiao_mg24_pin_multiplexing
keywords:
  - XIAO
  - MG24
last_update:
  date: 05/15/2025
  author: Jason
sidebar_position: 1
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/top.png" style={{width:700, height:'auto'}}/></div>

***XIAO MG24*** は、***22本の通常ピン***、***18本のアナログピン***、***18本のデジタルピン***、***2つのSPI***、***2つのUART***、***2つのI2C*** を備え、***すべてのPWM*** をサポートしています。これにより、非常に多様なピンを利用することが可能です。このWikiでは、これらのピンをどのように駆動するかを学び、効果的に活用する方法を紹介します 😀！

## デジタル

### ハードウェア準備

<table align="center">
  <tr>
      <th>Seeed Studio XIAO MG24 Sense</th>
      <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
      <th>Grove - リレー</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
  <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
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

XIAO MG24(Sense) を拡張ボードに取り付け、リレーを Grove ケーブルを使用して拡張ボードの **A0/D0** インターフェースに接続してください。最後に、USB-C ケーブルを使用して XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO 拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御します。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
const int buttonPin = D1;     // プッシュボタンのピン番号
int buttonState = 0;          // プッシュボタンの状態を読み取る変数
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

### 結果グラフ

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.gif" style={{width:500, height:'auto'}}/></div>

## デジタルをPWMとして使用

XIAO MG24(Sense)のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したり、その他の機能を実現することができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - 可変色LED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

:::tip
XIAO MG24(Sense)を拡張ボードに取り付け、Groveケーブルを使用して可変色LEDを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。
:::

### ソフトウェア実装

この例では、PWM出力を使用してライトの明るさを制御する方法を示します。

```cpp
int LED_pin = D0;    // LEDがデジタルピン10に接続されています

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

### 結果グラフ

プログラムが正常に実行されると、以下のような動作効果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/5.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

XIAO MG24(Sense) 開発ボードには12ビットのADCが搭載されており、アナログセンサーの値を高解像度で読み取ることができます。これにより、より正確な値を取得することが可能です。

次に、ADCの特性を反映するために2つのセンサーを選択します。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Grove-可変カラーLED</th>
	    <th>Grove-ロータリー角度センサー</th>
	    <th>Seeed Studio Grove Base for XIAO</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
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

<Tabs>
  <TabItem value="Without DMA" label="DMAなしのanalogRead" default>

``` cpp
const int analogInPin = D1;  // ポテンショメータが接続されているアナログ入力ピン
const int analogOutPin = 9;  // LEDが接続されているアナログ出力ピン

int sensorValue = 0;  // ポテンショメータから読み取った値
int outputValue = 0;  // PWM（アナログ出力）に出力する値

void setup() {
  Serial.begin(115200);
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
```

  </TabItem>
  <TabItem value="With DMA" label="DMAを使用したanalogRead">

``` cpp
#define ANALOG_VALUE_MIN 0     // アナログ値の最小値を定義
#define ANALOG_VALUE_MAX 4095  // 12ビットADCの最大アナログ値を定義
#define NUM_SAMPLES 128        // 1回の収集で取得するサンプル数を定義

const int analogInPin = D1;            // ポテンショメータが接続されているアナログ入力ピン
const int analogOutPin = LED_BUILTIN;  // LEDが接続されているアナログ出力ピン

// サンプルを格納するバッファ
uint32_t analog_buffer[NUM_SAMPLES];        // サンプル値を格納するグローバルバッファ
uint32_t analog_buffer_local[NUM_SAMPLES];  // 計算用にサンプル値を格納するローカルバッファ

volatile bool data_ready_flag = false;  // 新しいサンプルデータが利用可能であることを示すフラグ

void analog_samples_ready_cb();                         // サンプルが準備完了時に呼び出されるコールバック関数
void calculate_and_display_analog_level();              // アナログレベルを計算して表示する関数
float getAverage(uint32_t *buffer, uint32_t buf_size);  // 指定されたバッファの平均値を計算する関数

void setup() {
  Serial.begin(115200);
  pinMode(analogOutPin, OUTPUT);

  // DMAサンプリングを開始し、サンプルをanalog_bufferに格納し、完了時にコールバックを呼び出す
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
  Serial.println("サンプリングを開始しました...");
}

void loop() {
  // データが準備完了の場合、処理を実行
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_analog_level();
  }
}

void analog_samples_ready_cb() {
  // データが上書きされないようにローカルバッファにコピー
  memcpy(analog_buffer_local, analog_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_analog_level() {
  // アナログレベルを平滑化するためのローリング平均
  static uint32_t rolling_average = 0u;

  // 現在のデータが上書きされないようにサンプリングを停止
  ADC.scan_stop();

  // サンプル値の平均を取得
  uint32_t analog_level = (uint32_t)getAverage(analog_buffer_local, NUM_SAMPLES);
  // アナログレベルを調整
  analog_level = constrain(analog_level, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX);
  // ローリング平均を計算
  rolling_average = (analog_level + rolling_average) / 2;

  // 現在の平均レベルを明るさにマッピング
  int brightness = map(rolling_average, ANALOG_VALUE_MIN, ANALOG_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(analogOutPin, 255 - brightness);
  } else {
    analogWrite(analogOutPin, brightness);
  }
  // 平均アナログレベルと明るさの出力を表示
  Serial.print("センサー値 = ");
  Serial.print(rolling_average);
  Serial.print("\t 出力値 = ");
  Serial.println(brightness);

  // サンプリングを再開
  analogReadDMA(analogInPin, analog_buffer, NUM_SAMPLES, analog_samples_ready_cb);
}

// 指定されたサンプルの平均値を取得
float getAverage(uint32_t *buffer, uint32_t buf_size) {
  if (!buffer) {
    return 0.0f;
  }

  float sum = 0.0f;
  for (uint32_t i = 0u; i < buf_size; i++) {
    sum += buffer[i];
  }
  return sum / buf_size;
}
```

</TabItem>
</Tabs>

:::tip
アナログ信号をDMAで読み取る場合、ライブラリのバージョンが2.2.0以上である必要があることに注意してください。現在、新しいバージョンは承認されておらず、手動でインストールする必要があります。
:::

### 結果グラフ
すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/4.gif" style={{width:500, height:'auto'}}/></div>

## UART

Arduino IDEを使用する際、シリアル通信は多くのプロジェクトにおいて重要な部分です。  
Arduino IDEでシリアル通信を使用するには、まずシリアルモニタウィンドウを開く必要があります。これは、ツールバーの**シリアルモニタ**アイコンをクリックするか、**Ctrl+Shift+M**ショートカットキーを押すことで行えます。

### 一般的なシリアルの使用方法

よく使用されるシリアル関数には以下のものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- シリアルポートにデータを読みやすい形式で送信します。
- `Serial.write()` -- シリアルポートにバイナリデータを送信します。
- `Serial.available()` -- シリアルポートから読み取れるデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから1バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信が完了するまで待機します。

これらのシリアル関数を使用することで、Arduinoボードとコンピュータ間でデータを送受信でき、インタラクティブなプロジェクトを作成する可能性が広がります。

以下はサンプルプログラムです：

```c
void setup() {
  // シリアル通信を9600ビット/秒で初期化
  Serial.begin(9600);
}

void loop() {
  // シリアルポートにデータを送信
  Serial.println("Hello World!");

  // シリアルポートからデータを読み取る
  if (Serial.available() > 0) {
    // 受信したバイトを読み取る
    char incomingByte = Serial.read();
    // 受信したバイトをシリアルモニタに出力
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

### Serial1の使用

上記のXIAO MG24(Sense)のピン図に基づいて、特定のパラメータを確認すると、TXピンとRXピンがあることがわかります。  
これはシリアル通信とは異なりますが、使用方法は非常に似ており、いくつかのパラメータを追加する必要があるだけです。  
次に、チップから引き出されたピンを使用してシリアル通信を行います。

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

## I2C

XIAO MG24(Sense)にはI2Cインターフェースがあり、多くのセンサーのデータ送信や解析、また一部のOLEDスクリーンの使用に利用できます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO拡張ボード上のOLEDディスプレイはI2Cプロトコルを使用しており、ボード上のI2C回路を介してXIAOのI2Cインターフェースに接続されています。したがって、XIAOを拡張ボードに直接差し込み、プログラムを作成して画面に内容を表示することができます。

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO MG24(Sense)上のOLEDディスプレイの使用方法を紹介します。

***ステップ1. Seeed Studio XIAO MG24(Sense)を拡張ボードに取り付け、Type-Cケーブルを接続します。***

***ステップ2. u8g2ライブラリをインストールします。***

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

***ステップ3. コードをコピーしてArduino IDEに貼り付け、アップロードします。***
- 以下のzipファイルをダウンロードします。

📄 **[ZIP]** [smiley_face Header](https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/smiley_face.zip)

- "smiley_face.h"という名前のヘッダーファイルを作成し、ダウンロードしたzipファイルの内容を作成したヘッダーファイルにコピーします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/8.png" style={{width:800, height:'auto'}}/></div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>
#include "smiley_face.h" 

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

int xx = 20; 
int yy = 10; 

void setup() {
    u8g2.begin();
}

void loop() {
    smeil_display();
    delay(500); 
}

void smeil_display() {
    const unsigned char* smileImages[] = {
        semil1, semil2, semil3, semil4, semil5,
        semil6, semil7, semil8, semil9, semil10,
        semil11, semil12, semil13, semil14, semil15,
        semil16, semil17, semil18, semil19, semil20,
        semil21, semil22, semil23, semil24, semil25,
        semil26, semil27
    };

    int delays[] = {
        40, 50, 40, 40, 40,
        40, 40, 50, 40, 40,
        40, 40, 40, 50, 40,
        40, 50, 40, 40, 50,
        40, 50, 40, 40, 50,
        50, 50, 40, 50
    };

    for (int i = 0; i < sizeof(smileImages) / sizeof(smileImages[0]); i++) {
        u8g2.firstPage();
        do {
            u8g2.drawXBMP(xx, yy, 48, 48, smileImages[i]); 
        } while (u8g2.nextPage());
        delay(delays[i]); 
    }
}
```

### 結果グラフ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/7.gif" style={{width:500, height:'auto'}}/></div>

## SPI

XIAO MG24(Sense) チップは複数の周辺機器を統合しており、その中にはSPIインターフェースも含まれています。このインターフェースを使用して、フラッシュメモリ、ディスプレイ、センサーなどの外部SPIデバイスを接続できます。

### Arduinoライブラリ概要

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Waveshare**が提供するArduinoのサンプルプログラムを基に、XIAOシリーズ全体で使用できるArduinoライブラリを作成しました。以下のボタンをクリックして、このライブラリのGithubページに直接アクセスできます。

### ハードウェア準備

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24 Sense</th>
			<th>1.69インチLCD SPIディスプレイ</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### ピン接続

上記のハードウェアを準備した後、ジャンパーワイヤーを使用してXIAOのSPIインターフェースとOLEDを接続します。配線方法については、以下の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/3.png" style={{width:700, height:'auto'}}/></div>

### インストール

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールは成功です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### ソフトウェア実装

ライブラリを正しくダウンロードしてインストールした後、examplesフォルダ内に**helloworld.ino**と**bgcolor.ino**という2つのサンプルプログラムが見つかります。**bgcolor.ino**は背景色を表示する例で、デフォルトで赤色に設定されています。一方、**helloworld.ino**は会社のロゴに関するアニメーションを表示する例で、**bgcolor**例の効果も含まれています。

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // 初回実行時にセットアップコードを記述
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // 繰り返し実行されるメインコード
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Jason", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

ディスプレイには動的に Seeed Studio のロゴが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/1.gif"style={{width:500, height:'auto'}}/></div>

## 仕上げ
XIAO MG24 (Sense) ピンの基本的な機能を学びました。次に、内蔵センサーをさらに探ってみましょう。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>