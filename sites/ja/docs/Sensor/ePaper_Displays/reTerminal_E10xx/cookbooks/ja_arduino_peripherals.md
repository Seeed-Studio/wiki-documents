---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け Arduino クックブック — LED、ブザー、3 つのユーザーボタン、SHT4x 温度・湿度センサー、バッテリー監視、microSD カード、および SD からの BMP 画像描画など、オンボードハードウェアペリフェラルのサンプル集です。
title: 'Arduino クックブック：オンボードペリフェラル (reTerminal E シリーズ)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals
sidebar_position: 2
sidebar_label: Arduino – ペリフェラル
last_update:
  date: 05/15/2026
  author: dimo
createdAt: '2026-05-15'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino クックブック：オンボードペリフェラル (reTerminal E シリーズ)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

:::tip ディスプレイ側を探していますか？
このページでは、Arduino を使って reTerminal E シリーズの**オンボードハードウェアペリフェラルを制御する方法**に焦点を当てています。テキスト、グラフィックス、画像を ePaper スクリーンに描画したい場合は、**[Arduino クックブック：ePaper ディスプレイ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino)** を参照してください。
:::

## はじめに

reTerminal E シリーズは単なる ePaper スクリーンではありません。すべてのモデルにオンボード LED、ブザー、3 つのユーザーボタン、SHT4x 温度・湿度センサー、バッテリー電圧監視、microSD カードスロットが搭載されています。このクックブックでは、それぞれのペリフェラル向けにすぐに書き込める Arduino サンプルと、SD カードから BMP 画像を読み込んで ePaper スクリーンに描画する実用的なサンプルをまとめています。

このクックブックで扱う内容：

- GPIO6（反転ロジック）での**LED 制御**。
- GPIO45 での**ブザー**によるアラートと音階再生。
- **3 つのユーザーボタン**（KEY0 / KEY1 / KEY2）のチャタリング除去済み状態検出。
- Sensirion ライブラリを用いた I²C（GPIO19 SDA / GPIO20 SCL）経由の **SHT4x センサー**。
- ADC + イネーブルピン回路を用いた**バッテリー電圧監視**。
- 共有 SPI バス上での**microSD カード**のマウント / 検出 / ファイル一覧取得。
- **複合サンプル**：SD カードから BMP 画像を読み込み、ePaper スクリーンに描画。

### 必要なもの

このクックブックは reTerminal E シリーズの 4 つすべてのモデルに適用できます。お手元のデバイスを選んでください：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 事前準備

以下のサンプルを実行する前に、次の準備ができている必要があります：

- **Arduino IDE** をインストールし、**ESP32 ボードパッケージ**を導入して **XIAO_ESP32S3** ボードを選択していること。
- 動作する **USB-C データケーブル**があり、正しいシリアルポートを選択していること。
- デバイスに基本的なスケッチを書き込めることを確認していること — まだの場合は、[Arduino クックブック：ePaper ディスプレイ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino#環境準備) の環境構築手順を参照してください。

このクックブック内のすべてのスケッチは、**GPIO44 (RX) / GPIO43 (TX)** の `Serial1` を通じて **115200 ボー**でデバッグ情報を出力します。Arduino のシリアルモニタを開き、対応するポートとボーレートを選択して出力を確認してください。

## LED 制御

reTerminal E シリーズには、GPIO で制御できるオンボード LED が搭載されています。LED のロジックは反転している点に注意してください（LOW = 点灯、HIGH = 消灯）。LED ピンはモデルごとに異なります：

<div class="table-center">
	<table align="center">
		<tr>
			<th>モデル</th>
			<th>LED GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002</td>
			<td>GPIO6</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1004</td>
			<td>GPIO48</td>
		</tr>
	</table>
</div>

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

```cpp
// reTerminal E1001/E1002 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1003" label="E1003">

```cpp
// reTerminal E1003 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 16  // GPIO16 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1004" label="E1004">

```cpp
// reTerminal E1004 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 48  // GPIO48 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
</Tabs>

## ブザー制御

reTerminal E シリーズには GPIO45 に接続されたブザーが搭載されており、さまざまな音階やアラート音を鳴らすことができます。

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**音階付きブザー**

<details>
<summary>クリックしてブザーの完全なサンプルコードを展開</summary>

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

</details>

**ブザーの機能：**

- `digitalWrite()`: 基本的なビープ音のためのシンプルなON/OFF制御
- `tone(pin, frequency, duration)`: メロディーやアラート用に特定の周波数を生成
- `noTone(pin)`: トーン生成を停止

**一般的なアラートパターン：**

- 1回のビープ音：確認
- 2回のビープ音：警告
- 3回のビープ音：エラー
- 連続音：重大なアラート

## ユーザーボタン

reTerminal E シリーズには、さまざまな制御用途に使用できるユーザー設定可能なボタンが3つ搭載されています。このセクションでは、Arduino を使用してボタンの状態を読み取り、ボタン押下に応答する方法を説明します。

reTerminal E シリーズには、ESP32-S3 に KEY0（GPIO3）、KEY1（GPIO4）、KEY2（GPIO5）を介して接続された3つのボタンがあります。すべてのボタンはアクティブ Low であり、押されたときに LOW、離されたときに HIGH を読み取ります。

これらのボタンの物理的な配置と機能は、モデルによって異なります：

<div class="table-center">
	<table align="center">
		<tr>
			<th>キー</th>
			<th>E1001 / E1002 / E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><strong>KEY0</strong> (GPIO3)</td>
			<td>右ボタン（緑色ボタン）</td>
			<td>右方向ボタン（前面）</td>
		</tr>
		<tr>
			<td><strong>KEY1</strong> (GPIO4)</td>
			<td>中央ボタン</td>
			<td>左方向ボタン（前面）</td>
		</tr>
		<tr>
			<td><strong>KEY2</strong> (GPIO5)</td>
			<td>左ボタン</td>
			<td>リフレッシュボタン（前面左）</td>
		</tr>
	</table>
</div>

:::note
E1004 には、デバイスの前面と背面の両方にボタンがあります。上記の KEY0–KEY2 の接続は、前面パネル上のボタンに対応しています。
:::

### 基本的なボタン読み取りの例

この例では、ボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

**コードの動作：**

1. **ピン定義**：各ボタンの GPIO ピン番号に対して定数を定義します。

2. **ピン設定**：`setup()` 内で、各ボタンピンを `INPUT` として設定します。

3. **ボタン検出**：`loop()` 内で `digitalRead()` を使用して各ボタンの状態を継続的にチェックします。ボタンが押されると、そのピンは LOW を読み取ります。

4. **デバウンス**：各ボタン押下後に 200ms の簡易ディレイを入れることで、機械的なチャタリングによる単一押下の複数検出を防ぎます。

5. **シリアル出力**：各ボタン押下時に、デバッグおよび確認用としてシリアルモニタにメッセージを出力します。

---

**ステップ 1.** コードを reTerminal E シリーズデバイスに書き込みます。

**ステップ 2.** Arduino IDE でシリアルモニタを開きます（Tools > Serial Monitor）。

**ステップ 3.** ボーレートを 115200 に設定します。

**ステップ 4.** 各ボタンを押し、シリアルモニタ上の出力を確認します。

ボタンを押したときの想定される出力：

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

## 環境センサ（SHT4x）

reTerminal E シリーズには、I2C 接続の SHT4x 温度・湿度センサが統合されています。

### 必要なライブラリのインストール

Arduino ライブラリマネージャ（**Tools > Manage Libraries...**）から次の 2 つのライブラリをインストールします：

1. 「**Sensirion I2C SHT4x**」を検索してインストール
2. 依存ライブラリとして「**Sensirion Core**」を検索してインストール

### 基本的な温度・湿度取得の例

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");

    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;

    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**setup 関数：**

1. **シリアル初期化**：reTerminal E シリーズ専用のピン 44（RX）と 43（TX）を使用して `Serial1` を初期化します
2. **I2C 初期化**：ピン 19（SDA）と 20（SCL）で I2C を設定します
3. **センサ初期化**：`sht4x.begin(Wire, 0x44)` を呼び出して、アドレス 0x44 の SHT4x センサを初期化します
4. **シリアル番号の読み取り**：センサの一意なシリアル番号を読み取り、確認のために表示します

**loop 関数：**

1. **ディレイ**：オーバーサンプリングを避けるため、測定の間に 5 秒待機します
2. **測定**：高精度な読み取りのために `measureHighPrecision()` を使用します（約 8.3ms かかります）
3. **エラーハンドリング**：エラーをチェックし、`errorToString()` を使用して読みやすいメッセージに変換します
4. **結果表示**：温度（摂氏）と相対湿度（パーセンテージ）を出力します

**想定される出力**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

## バッテリーマネジメントシステム

reTerminal E シリーズには、分圧回路付き ADC ピンを介したバッテリー電圧監視機能が搭載されています。

### シンプルなバッテリー電圧監視

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Battery Voltage Monitor");

  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring

  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;

  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**コードの説明：**

- GPIO1 は、ADC を通して分圧されたバッテリー電圧を読み取ります
- GPIO21 はバッテリー監視回路を有効にします
- 分圧回路のため、実際のバッテリー電圧は測定電圧の 2 倍になります
- フル充電された LiPo バッテリーでは、およそ 4.2V を想定してください
- バッテリー残量が少ないときは、電圧はおよそ 3.3V まで低下します

**期待される出力**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

## MicroSD カードの使用

デジタルフォトフレームやデータロギングなど、追加ストレージを必要とするアプリケーション向けに、reTerminal E シリーズには MicroSD カードスロットが搭載されています。

デバイスをデジタルフォトフレームとして使用する場合や、追加ストレージが必要な場合は microSD カードを挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズは、**Fat32** ファイルシステムでフォーマットされた 64GB までの MicroSD カードのみをサポートします。
:::

### 基本的な SD カード操作：ファイル一覧表示

この例では、SD カードを初期化し、挿入および取り外しを検出し、ルート内のすべてのファイルとディレクトリを一覧表示する方法を示します。SD カードの電源イネーブルピン（`SD_EN_PIN`）はモデルによって異なります：

<div class="table-center">
	<table align="center">
		<tr>
			<th>モデル</th>
			<th>SD_EN_PIN</th>
			<th>GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002 / E1004</td>
			<td>16</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>39</td>
			<td>GPIO39</td>
		</tr>
	</table>
</div>

その他の SD カードピン（DET、CS、MOSI、MISO、SCK）は、どのモデルでも同じです。お使いのデバイスに対応するタブを選択し、そのコードを Arduino IDE のスケッチにコピーしてください。

<Tabs>
<TabItem value="e1001_e1002_e1004" label="E1001 / E1002 / E1004" default>

<details>
<summary>クリックして SD カードのサンプルコード全体を展開</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>クリックして SD カードのサンプルコード全体を展開</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   39  // Power enable for the SD card slot (E1003)
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
</Tabs>

#### コードの解説

- **ピン定義:** コードはまず、MicroSD カードスロットに使用する GPIO ピンを定義することから始まります。SPI ピン（`MOSI`、`SCK`）は電子ペーパー・ディスプレイと共有されていますが、個別のチップセレクト（`SD_CS_PIN`）と専用の SPI インスタンス（`spiSD`）によって、それぞれを独立して使用できるようになっています。
- **SPI の初期化:** ESP32 の 2 つ目のハードウェア SPI コントローラ（HSPI）を使用するために、新しい SPI オブジェクト `spiSD(HSPI)` を生成します。これは、他の SPI デバイスとの競合を避けるためのベストプラクティスです。
- **カード検出:** `isCardInserted()` 関数は `SD_DET_PIN` を読み取ります。reTerminal ハードウェアでは、このピンはカードが挿入されているときに LOW にプルダウンされます。
- **マウント / アンマウント:** `mountSD()` 関数はカードへの電源を有効にし、正しいピンで HSPI バスを設定し、`SD.begin()` を呼び出してファイルシステムを初期化します。`unmountSD()` はリソースを解放します。
- **ファイル一覧:** `listRoot()` はルートディレクトリ（`/`）を開き、`listDir()` はファイルシステムを走査して、すべてのファイルとディレクトリ名を表示する再帰関数です。
- **`setup()`:** 出力用に `Serial1` を初期化し、カード検出ピンを設定し、デバイスの電源投入時にカードがすでに挿入されているかどうかを最初にチェックします。
- **`loop()`:** カードを常に監視する代わりに、コードはノンブロッキングタイマー（`millis()`）を使用して、カードの状態変化があるかどうかを 1 秒ごとにチェックします。変化（カードの挿入または取り外し）が検出されると、カードをマウントまたはアンマウントし、その状態をシリアルモニタに出力します。

#### 期待される結果

1. コードを reTerminal に書き込みます。
2. Arduino IDE のシリアルモニタ（**Tools > Serial Monitor**）を開きます。
3. ボーレートが **115200** に設定されていることを確認します。

次の操作に対応した出力が表示されます:

- **起動時にカードがない場合:** モニタには `[SD] No card detected at startup...` と表示されます。
- **カードを挿入したとき:** モニタには `[SD] Card inserted.` と表示され、その後にカード上のすべてのファイルとディレクトリの一覧が続きます。
- **カードを取り外したとき:** モニタには `[SD] Card removed.` と表示されます。

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

## 応用例: SD カードから BMP 画像を表示する

この包括的な例では、前のセクションの機能を組み合わせます。MicroSD カードから Bitmap（`.bmp`）画像ファイルを読み取り、reTerminal の電子ペーパー画面に表示するプログラムを作成します。これは、デバイスの実用的で現実的なアプリケーションを示すものです。

プログラムは、SD カードのルートディレクトリにある `test.bmp` という名前のファイルを探します。

### 準備

コードを実行する前に、MicroSD カードと画像ファイルの両方を正しく準備する必要があります。これは、画像を正しく表示するための最も重要なステップです。

**1. MicroSD カードをフォーマットする**

MicroSD カード（64GB 以下を推奨）を用意し、**FAT32** ファイルシステムでフォーマットします。

**2. 画像ファイルを準備する**

画像の準備方法は、使用している reTerminal モデルによって少し異なります。お使いのデバイスに合ったガイドに従ってください。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="reTerminal E1001 用（白黒画面）" default>

白黒画面は白と黒のピクセルのみを表示できます。コードはカラー画像をリアルタイムでグレースケールに変換できますが、**事前に PC 上で高品質なグレースケール画像に変換しておく**ことで、コントラストとディテールが大幅に向上します。

1. **画像サイズを変更:** 画像を **800x480 ピクセル** にリサイズします。

2. **グレースケールに変換（推奨）:** 画像編集ソフトで、まず画像をグレースケールに変換します。**GIMP** の場合:
    - メニュー **Colors > Desaturate > Desaturate...** に進みます。最良の結果を得るには "Luminosity" などのモードを選択します。

3. **標準 BMP として保存:** カラー画面用ガイドと同じ手順でファイルを保存します。画像はグレースケールですが、24 ビット BMP として保存することで、コードとの互換性が最大になります。
    - **File > Export As...** に進み、`test.bmp` という名前を付けます。
    - 書き出しダイアログの **Advanced Options** で **"24 bits: R8 G8 B8"** を選択します。
    - **Export** をクリックします。

4. **SD カードにコピー:** 最後に作成した `test.bmp` ファイルを MicroSD カードのルートディレクトリにコピーします。

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="reTerminal E1002 用（カラー画面）">

カラー画面は 6 色を表示できます: 黒、白、赤、黄、青、緑です。提供されているコードには「最も近い色」アルゴリズムが含まれており、元画像の任意の色を画面上で利用可能な最適な色にインテリジェントにマッピングします。最良の結果を得るには、次の手順に従ってください:

1. **画像サイズを変更:** 任意の画像編集ソフトを使用して、画像を **800x480 ピクセル** にリサイズします。

2. **標準 BMP として保存:** コードは **非圧縮** の 24 ビットまたは 32 ビット BMP ファイルを読み取るように設計されています。フォーマットを正しく保つには、プロフェッショナルな画像編集ソフトを使用するのが最適です。ここでは、無料かつオープンソースの **GIMP** を推奨します:
    - リサイズした画像を GIMP で開きます。
    - メニュー **File > Export As...** に進みます。
    - ファイル名を `test.bmp` にして **Export** をクリックします。
    - 表示される "Export Image as BMP" ダイアログで、**Advanced Options** を展開します。
    - **"24 bits: R8 G8 B8"** を選択します。これは最も互換性が高い非圧縮フォーマットです。
    - **Export** をクリックします。

3. **SD カードにコピー:** 最後に作成した `test.bmp` ファイルを MicroSD カードのルートディレクトリにコピーします。

</TabItem>
</Tabs>

テスト用にすぐ使える画像を利用したい場合は、GxEPD2 が提供している[サンプル画像](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps)を使用できます。

### コード

これは最終的に検証済みのコードです。必要なすべてのチェックと高度な色マッチングアルゴリズムが含まれています。`EPD_SELECT` マクロを、E1001（白黒）の場合は `0`、E1002（カラー）の場合は `1` に設定するだけです。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="reTerminal E1001 用（白黒画面）" default>

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="reTerminal E1002（カラー画面）向け">

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
</Tabs>

### 動作の仕組み

- **`setup()`**: `setup` 関数は、必要なハードウェアを順番に初期化します。デバッグ用のシリアルポート、共有 SPI バス、電子ペーパーディスプレイ、最後に SD カードの順に初期化します。すべての初期化が成功すると、メインタスクを実行するために `drawBmp()` を 1 回だけ呼び出します。
- **`drawBmp()`**: これは中核となる関数です。BMP ファイルを開き、ヘッダーを解析してそのサイズやプロパティを読み取り、重要な検証チェックを行います。特にサポートされていない圧縮形式をチェックし、見つかった場合は役立つエラーメッセージを表示します。
- **描画ループ**: 関数は SD カードから画像を 1 行ずつ読み込みます。各行の各ピクセルについて、赤・緑・青の各色成分を取り出します。
- **色の処理**: ここでロジックは `EPD_SELECT` マクロに基づいて分岐します。
  - **カラー用 (E1002)**: `findNearestColor(r, g, b)` を呼び出します。この関数は、そのピクセルの色と画面のパレットにある 6 色それぞれとの「距離」を計算します。そして距離が最も小さいパレット色を返し、可能な限り正確な色再現を行います。
  - **白黒用 (E1001)**: 標準的な輝度の式（`r * 0.299 + g * 0.587 + b * 0.114`）を使って、RGB の色を 1 つの明るさの値に変換します。この値がしきい値（128）未満であればピクセルは黒として描画され、それ以外の場合は白として描画されます。

### アップロードと実行

1. Arduino IDE で、正しいボード（`XIAO_ESP32S3`）が選択されていることを確認します。
2. コード先頭の `EPD_SELECT` マクロを、reTerminal E1002 の場合は `1`、E1001 の場合は `0` に設定します。
3. 準備した MicroSD カードを reTerminal に挿入します。
4. コードをアップロードします。
5. シリアルモニタをボーレート `115200` で開きます。進行状況のログが表示され、数秒後に画像が電子ペーパーディスプレイに描画されます。

:::tip リフレッシュ速度について
画面のリフレッシュ速度は遅い場合があり、プログラムをアップロードしてから 2～3 分間、画面が反応しないことがあります。
:::


## トラブルシューティング

Arduino IDE のセットアップの問題、USB ドライバの問題、アップロードの失敗、または「電子ペーパーディスプレイが更新されない」といった問題については、[Arduino Cookbook: ePaper Display](/ja/reterminal_e10xx_with_arduino#トラブルシューティング) の **トラブルシューティング** セクションを参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
