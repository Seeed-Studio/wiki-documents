---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け Arduino クックブック — LED、ブザー、3 つのユーザーボタン、SHT4x 温度・湿度センサー、バッテリー監視、microSD カード、そして 4 種類すべてのパネルバリアントに対応したエンドツーエンドの画像パイプライン（JPEG / BMP / PNG → ディザ → ePaper）を含む、オンボードハードウェアペリフェラルのサンプル集です。
title: 'Arduino クックブック: オンボードペリフェラル (reTerminal E シリーズ)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals
sidebar_position: 2
sidebar_label: Arduino – ペリフェラル
last_update:
  date: 05/21/2026
  author: Citric
createdAt: '2026-05-15'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino クックブック: オンボードペリフェラル (reTerminal E シリーズ)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/245.png" style={{width:600, height:'auto'}}/></div>

:::tip ディスプレイ側を探していますか？
このページでは、Arduino を使って reTerminal E シリーズの**オンボードハードウェアペリフェラルを制御する方法**に焦点を当てています。代わりに ePaper 画面にテキスト、グラフィックス、画像を描画したい場合は、**[Arduino クックブック: ePaper ディスプレイ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino)** を参照してください。
:::

## はじめに

reTerminal E シリーズは単なる ePaper 画面ではありません。すべてのモデルに、オンボード LED、ブザー、3 つのユーザーボタン、SHT4x 温度・湿度センサー、バッテリー電圧監視機能、microSD カードスロットが搭載されています。このクックブックでは、それぞれのペリフェラル向けにすぐに書き込める Arduino サンプルと、SD カードから JPEG / BMP / PNG ファイルを読み込み、パネルのパレット向けにディザ処理を行い、ePaper 画面に描画するエンドツーエンドの画像パイプラインをまとめています。各パネルバリアント（E1001 BW、E1001 Gray4、E1002、E1003、E1004）ごとに 1 つの完成済みスケッチが用意されています。

このクックブックで扱う内容:

- GPIO6（反転ロジック）による**LED 制御**。
- GPIO45 上の**ブザー**によるアラートと音階トーン。
- **3 つのユーザーボタン**（KEY0 / KEY1 / KEY2）のチャタリング除去済み状態検出。
- Sensirion ライブラリを用いた I²C（GPIO19 SDA / GPIO20 SCL）経由の **SHT4x センサー**。
- ADC + イネーブルピン回路を用いた**バッテリー電圧監視**。
- 共有 SPI バス上での**microSD カード**のマウント / 検出 / ファイル一覧取得。
- **応用例 — SD カード画像パイプライン**: SD カード上の任意の JPEG / BMP / PNG を選択し、5 種類の内蔵ディザリングアルゴリズムのいずれかで処理し、アンカー位置、フィットモード、スケールを設定してパネルに描画します。

### 必要なもの

このクックブックは、4 種類すべての reTerminal E シリーズモデルに適用できます。手元にあるデバイスを選んでください:

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

以下のサンプルを実行する前に、次の準備ができている必要があります:

- **ESP32 ボードパッケージ**をインストールし、ボードに **XIAO_ESP32S3** を選択した **Arduino IDE** がインストールされていること。
- 動作する **USB-C データケーブル**があり、正しいシリアルポートが選択されていること。
- デバイスに基本的なスケッチを書き込めることを確認していること — まだの場合は、[Arduino クックブック: ePaper ディスプレイ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino#環境準備) の環境構築手順を参照してください。

このクックブック内のすべてのスケッチは、**GPIO44 (RX) / GPIO43 (TX)** を使用し、**115200 ボー**で `Serial1` 経由のデバッグ情報を出力します。Arduino シリアルモニタを開き、対応するポートとボーレートを選択してログを確認してください。

## LED 制御

reTerminal E シリーズには、GPIO から制御できるオンボード LED が搭載されています。LED のロジックは反転している点に注意してください（LOW = 点灯、HIGH = 消灯）。LED ピンはモデルによって異なります:

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

reTerminal E シリーズには GPIO45 に接続されたブザーが搭載されており、さまざまなトーンやアラート音を鳴らすことができます。

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

**トーン付きブザー**

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

- 1回ビープ：確認
- 2回ビープ：警告
- 3回ビープ：エラー
- 連続：重大なアラート

## ユーザーボタン

reTerminal E シリーズには、さまざまな制御用途に使用できるユーザー設定可能なボタンが3つ搭載されています。このセクションでは、Arduino を使用してボタン状態を読み取り、ボタン押下に応答する方法を説明します。

reTerminal E シリーズには、ESP32-S3 に KEY0（GPIO3）、KEY1（GPIO4）、KEY2（GPIO5）を介して接続された3つのボタンがあります。すべてのボタンはアクティブローであり、押されているときは LOW、離されているときは HIGH を読み取ります。

これらのボタンの物理レイアウトと機能は、モデルによって異なります：

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

**コードの動作説明：**

1. **ピン定義**：各ボタンの GPIO ピン番号に対して定数を定義します。

2. **ピン設定**：`setup()` 内で、各ボタンピンを `INPUT` として設定します。

3. **ボタン検出**：`loop()` 内で `digitalRead()` を使用して各ボタンの状態を継続的にチェックします。ボタンが押されると、そのピンは LOW を読み取ります。

4. **デバウンス**：各ボタン押下後に 200ms の簡易ディレイを入れることで、機械的なチャタリングによる単一押下の複数検出を防ぎます。

5. **シリアル出力**：各ボタン押下時に、デバッグと確認のためにシリアルモニタへメッセージを出力します。

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

Arduino ライブラリマネージャ（**Tools > Manage Libraries...**）から次の2つのライブラリをインストールします：

1. 「**Sensirion I2C SHT4x**」を検索してインストール
2. 「**Sensirion Core**」（依存ライブラリ）を検索してインストール

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
4. **シリアル番号の読み取り**：センサの一意なシリアル番号を読み取り、検証のために表示します

**loop 関数：**

1. **ディレイ**：オーバーサンプリングを避けるため、測定の間に 5 秒待機します
2. **測定**：高精度な読み取りのために `measureHighPrecision()` を使用します（約 8.3ms かかります）
3. **エラーハンドリング**：エラーをチェックし、`errorToString()` を使用して読みやすいメッセージに変換します
4. **結果表示**：温度を摂氏、湿度を相対湿度（パーセンテージ）で出力します

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

- GPIO1 は、ADC を通じて分圧されたバッテリー電圧を読み取ります
- GPIO21 はバッテリ監視回路を有効にします
- 分圧回路のため、実際のバッテリ電圧は測定電圧の 2 倍になります
- フル充電された LiPo バッテリでは、およそ 4.2V を想定してください
- バッテリ残量が少ないときは、電圧はおよそ 3.3V まで低下します

**期待される出力**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

## MicroSD カードの使用

デジタルフォトフレームやデータロギングなど、追加のストレージを必要とするアプリケーション向けに、reTerminal E シリーズには MicroSD カードスロットが搭載されています。

デバイスをデジタルフォトフレームとして使用する場合や、追加のストレージが必要な場合は、microSD カードを挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズは、**Fat32** ファイルシステムでフォーマットされた 64GB までの MicroSD カードのみをサポートします。
:::

### 基本的な SD カード操作：ファイル一覧表示

このサンプルでは、SD カードを初期化し、挿入および取り外しを検出し、ルート内のすべてのファイルとディレクトリを一覧表示する方法を示します。SD カードの電源イネーブルピン（`SD_EN_PIN`）はモデルによって異なります：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Model</th>
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

その他の SD カードピン（DET、CS、MOSI、MISO、SCK）は、すべてのモデルで同じです。お使いのデバイスに対応するタブを選択し、そのコードを Arduino IDE のスケッチにコピーしてください。

<Tabs>
<TabItem value="e1001_e1002_e1004" label="E1001 / E1002 / E1004" default>

<details>
<summary>クリックして SD カードの完全なサンプルコードを展開</summary>

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
<summary>クリックして SD カードの完全なサンプルコードを展開</summary>

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

- **ピン定義:** コードはまず、MicroSD カードスロットに使用される GPIO ピンを定義するところから始まります。SPI ピン（`MOSI`、`SCK`）は電子ペーパーディスプレイと共有されていますが、個別のチップセレクト（`SD_CS_PIN`）と専用の SPI インスタンス（`spiSD`）によって、互いに独立して使用できるようになっています。
- **SPI の初期化:** ESP32 の 2 つ目のハードウェア SPI コントローラ（HSPI）を使用するために、新しい SPI オブジェクト `spiSD(HSPI)` を生成します。これは、他の SPI デバイスとの競合を避けるためのベストプラクティスです。
- **カード検出:** `isCardInserted()` 関数は `SD_DET_PIN` を読み取ります。reTerminal ハードウェアでは、このピンはカードが挿入されているときに LOW にプルダウンされます。
- **マウント / アンマウント:** `mountSD()` 関数はカードへの電源を有効にし、正しいピンで HSPI バスを設定し、`SD.begin()` を呼び出してファイルシステムを初期化します。`unmountSD()` はリソースを解放します。
- **ファイル一覧:** `listRoot()` はルートディレクトリ（`/`）を開き、`listDir()` はファイルシステムを走査して、すべてのファイルとディレクトリ名を再帰的に表示する関数です。
- **`setup()`:** 出力用に `Serial1` を初期化し、カード検出ピンを設定し、デバイスの電源投入時にカードがすでに挿入されているかどうかを最初にチェックします。
- **`loop()`:** カードを常時チェックする代わりに、コードはノンブロッキングタイマー（`millis()`）を使って、カードの状態変化を 1 秒に 1 回確認します。変化（カードの挿入または取り外し）が検出されると、カードをマウントまたはアンマウントし、その状態をシリアルモニタに出力します。

#### 期待される結果

1. コードを reTerminal に書き込みます。
2. Arduino IDE のシリアルモニタ（**Tools > Serial Monitor**）を開きます。
3. ボーレートが **115200** に設定されていることを確認します。

すると、次の操作に対応した出力が表示されます:

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

## 応用例: SD カード → ePaper 画像パイプライン

これは reTerminal E シリーズ向けのフラッグシップ例です。microSD カードから **JPEG / BMP / PNG** ファイルを読み込み、設定可能なディザリングパイプラインを通して処理し、その結果を ePaper パネルに描画します。ここでは **ディザリングアルゴリズム**、**明るさ**、**アンカー位置**、**フィット / スケール** を調整できます。同じコード構造が 4 つすべてのパネルバリエーションで動作し、モデルごとに変わるのは出力の色深度（1 ビット白黒、2 ビット Gray4、4 ビット Gray16、または 6 色 E6）のみです。

書き込み準備済みのスケッチが 5 つ **Seeed_GFX** ライブラリに同梱されています。お使いのハードウェアに合うものを選んでください:

### サンプル一覧

<div class="table-center">
  <table>
    <tr>
      <th>デバイス</th>
      <th>サンプルスケッチ</th>
      <th>パネル解像度</th>
      <th>出力パレット</th>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (BW)</td>
      <td><code>reTerminal_E1001_SDcard_BW</code></td>
      <td>800 × 480</td>
      <td>1 ビット白 / 黒</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (Gray4)</td>
      <td><code>reTerminal_E1001_SDcard_Gray4</code></td>
      <td>800 × 480</td>
      <td>2 ビット 4 階調グレースケール</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1002</td>
      <td><code>reTerminal_E1002_SDcard_Color6</code></td>
      <td>800 × 480</td>
      <td>6 色（B / W / R / Y / G / B）</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1003</td>
      <td><code>reTerminal_E1003_SDcard_Gray16</code></td>
      <td>1872 × 1404</td>
      <td>4 ビット 16 階調グレースケール</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1004</td>
      <td><code>reTerminal_E1004_SDcard_Color6</code></td>
      <td>1200 × 1600</td>
      <td>6 色（B / W / R / Y / G / B）</td>
    </tr>
  </table>
</div>

5 つすべてのスケッチは [`Seeed_GFX/examples/ePaper/reTerminal_SDcard_Bitmap/`](https://github.com/Seeed-Studio/Seeed_GFX/tree/master/examples/ePaper/reTerminal_SDcard_Bitmap) に含まれています。各フォルダは **完全に自己完結** しており、追加でインストールするライブラリは不要です。開いてそのまま書き込むだけです。

### パイプラインが行うこと

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1050 300" 
  width="100%" 
  height="auto" 
  style={{ 
    backgroundColor: '#ffffff', 
    borderRadius: '12px', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
    padding: '20px',
    marginBottom: '20px'
  }}
>
  {/* マーカーとフィルタの定義 */}
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.05" />
    </filter>
  </defs>

  {/* タイトル */}
  <text x="525" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b" textAnchor="middle">
    画像処理パイプライン: microSD から ePaper へ
  </text>

  {/* ================= ノード ================= */}

  {/* ノード 1: microSD */}
  <g transform="translate(20, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M55 15 v14 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2-2 V19 l-4-4 H57 a2 2 0 0 0-2 2z m4 2 h2 v4 h-2 v-4z m4 0 h2 v4 h-2 v-4z" fill="#3b82f6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">microSD</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">JPG / BMP / PNG</text>
  </g>

  {/* ノード 2: PSRAM */}
  <g transform="translate(240, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#ef4444" strokeWidth="2" filter="url(#shadow)" />
    <path d="M57 17 v12 h20 V17 H57z m2 2 h16 v8 H59 v-8z m-4 2 h-2 v2 h2 v-2z m0 4 h-2 v2 h2 v-2z m24-4 h2 v2 h-2 v-2z m0 4 h2 v2 h-2 v-2z" fill="#ef4444" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">PSRAM</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">RGB888</text>
  </g>

  {/* ノード 3: Scaled Buffer */}
  <g transform="translate(460, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
    <path d="M67 15 l2.3 2.3 -2.89 2.87 1.42 1.42 L70.7 18.7 73 21 V15 h-6z M55 21 l2.3-2.3 2.87 2.89 1.42-1.42 L58.7 17.3 61 15 h-6 v6z m6 12 l-2.3-2.3 2.89-2.87 -1.42-1.42 L57.3 29.3 55 27 v6h6z m12-6 l-2.3 2.3 -2.87-2.89 -1.42 1.42 2.89 2.87 L73 33 v-6z" fill="#f59e0b" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Scaled Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">scaled RGB888</text>
  </g>

  {/* ノード 4: Palette Buffer */}
  <g transform="translate(680, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M70 14 c-5.52 0-10 4.48-10 10 s4.48 10 10 10 c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.6-.39-.41-.61-.98-.61-1.6 0-1.38 1.12-2.5 2.5-2.5 h1.5 c2.21 0 4-1.79 4-4 0-3.86-4.48-7-10-7z m-4 7 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5-3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z" fill="#8b5cf6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Palette Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">panel-palette indices</text>
  </g>

  {/* ノード 5: ePaper */}
  <g transform="translate(900, 100)">
    <rect x="0" y="0" width="130" height="90" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
    <path d="M77 15 H53 c-1.1 0-2 .9-2 2 v14 c0 1.1 .9 2 2 2 h24 c1.1 0 2-.9 2-2 V17 c0-1.1-.9-2-2-2z m0 16 H53 V17 h24 v14z" fill="#10b981" />
    <text x="65" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">ePaper</text>
    <text x="65" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">panel update</text>
  </g>

  {/* ================= 矢印 & ラベル ================= */}

  {/* 矢印 1: デコード */}
  <g>
    <line x1="160" y1="145" x2="232" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="196" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">decode</text>
    <text x="196" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">pngle / jpeg / bmp</text>
    {/* アニメーションするデータパケット */}
    <circle cy="145" r="4" fill="#3b82f6">
      <animate attributeName="cx" from="160" to="230" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* 矢印 2: リサイズ */}
  <g>
    <line x1="380" y1="145" x2="452" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="416" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="middle">リサイズ</text>
    <text x="416" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">最近傍補間</text>
    {/* アニメーションするデータパケット */}
    <circle cy="145" r="4" fill="#ef4444">
      <animate attributeName="cx" from="380" to="450" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* 矢印 3：ディザ */}
  <g>
    <line x1="600" y1="145" x2="672" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="636" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">ディザ</text>
    <text x="636" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Bayer / FS / ...</text>
    {/* アニメーションするデータパケット */}
    <circle cy="145" r="4" fill="#f59e0b">
      <animate attributeName="cx" from="600" to="670" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* 矢印 4：プッシュ */}
  <g>
    <line x1="820" y1="145" x2="892" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="856" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">プッシュ</text>
    <text x="856" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">スプライト</text>
    {/* アニメーションするデータパケット */}
    <circle cy="145" r="4" fill="#8b5cf6">
      <animate attributeName="cx" from="820" to="890" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* ePaper 画面更新アニメーション（パルス） */}
  <rect x="900" y="100" width="130" height="90" rx="8" fill="none" stroke="#10b981" strokeWidth="4" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="strokeWidth" values="4;8;4" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
  </rect>

</svg>

1. **デコード** — ファイル形式はマジックバイト（`FF D8`、`BM`、または `89 50 4E 47`）で検出されます。誤解を招く拡張子は自動的に修正され、警告がログに記録されます。
2. **リサイズ**（オプション） — `DISPLAY_FIT` / `DISPLAY_SCALE` に基づいて最近傍でダウンスケールします。
3. **ディザ** — 5 つのアルゴリズムのいずれかが、24 ビット RGB をパネルの小さなパレット（2 / 4 / 6 / 16 段階）に量子化します。
4. **プッシュ** — 量子化されたバッファはアンカー位置の ePaper スプライトに書き込まれ、その後 `epaper.update()` によってパネルへクロックアウトされます。

### ステップ 1 — 自分のモデル用のサンプルを開く

Arduino IDE で：**File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap →** *(自分のモデルを選択)*。

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_BW/
    ├── reTerminal_E1001_SDcard_BW.ino   ← config + setup() + loop()
    ├── dither.{h,cpp}                   ← BW dither algorithms
    ├── image_loader.{h,cpp}             ← JPEG / BMP / PNG decoder
    ├── pngle.{h,c} + miniz.{h,c}        ← PNG backend (MIT, vendored)
    └── driver.h                         ← selects Setup520 (UC8179, 800x480)
```

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_Gray4/
    ├── reTerminal_E1001_SDcard_Gray4.ino
    ├── dither.{h,cpp}                   ← Gray4 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup520 + initGrayMode(4)
```

</TabItem>
<TabItem value="e1002" label="E1002">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1002_SDcard_Color6/
    ├── reTerminal_E1002_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup521 (ED2208, 800x480 E6)
```

</TabItem>
<TabItem value="e1003" label="E1003">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1003_SDcard_Gray16/
    ├── reTerminal_E1003_SDcard_Gray16.ino
    ├── dither.{h,cpp}                   ← Gray16 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup522 + initGrayMode(16)
```

</TabItem>
<TabItem value="e1004" label="E1004">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1004_SDcard_Color6/
    ├── reTerminal_E1004_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup523 (T133A01, 1200x1600 E6)
```

</TabItem>
</Tabs>

:::tip 自給自足のスケッチ
Arduino Library Manager から pngle や miniz などをインストールする必要はありません。PNG デコーダのソースは**各サンプルフォルダの中に**同梱されているため、スケッチをコンパイルするときに Arduino IDE が自動的に取り込みます。
:::

### スケッチ全体のコード

各バリアント用の完全な `.ino` ソースを以下に示します。ユーザーが調整できる設定（画像パス、ディザリングアルゴリズム、アンカー、フィット／スケール）はすべて、先頭付近の **USER CONFIGURATION** ブロック内にあります — それ以外のファイル部分は、通常編集する必要のない定型コードです。

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

<details>
<summary>ここをクリックしてコード全体をプレビュー — reTerminal_E1001_SDcard_BW.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int    PIN_SD_SCK   = 7;
static constexpr int    PIN_SD_MISO  = 8;
static constexpr int    PIN_SD_MOSI  = 9;
static constexpr int    PIN_SD_CS    = 14;
static constexpr int    PIN_SD_EN    = 16;
static constexpr int    PIN_SD_DET   = 15;
static constexpr int    PIN_DBG_RX   = 44;
static constexpr int    PIN_DBG_TX   = 43;
#define LOG       Serial1
#define TAG       "[e1001-bw]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
// 1.0 = neutral, >1.0 darkens, <1.0 brightens
static const float DITHER_GAMMA = 1.0f;
// false = normal, true = invert black/white
static const bool DITHER_INVERT = false;

// ANCHOR_TOP_LEFT / ANCHOR_TOP_CENTER / ANCHOR_TOP_RIGHT /
// ANCHOR_MIDDLE_LEFT / ANCHOR_CENTER / ANCHOR_MIDDLE_RIGHT /
// ANCHOR_BOTTOM_LEFT / ANCHOR_BOTTOM_CENTER / ANCHOR_BOTTOM_RIGHT
enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

// FIT_ORIGINAL / FIT_CONTAIN / FIT_SCALE
enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below -- no need to edit)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap() / 1024),
             (unsigned long)(ESP.getFreePsram() / 1024),
             (unsigned long)(ESP.getPsramSize() / 1024));
  LOG.flush();
}

static void list_sd_root(int max_entries = 32) {
  File root = SD.open("/");
  if (!root || !root.isDirectory()) { LOG.println("[sd] cannot open '/'"); return; }
  LOG.println("[sd] contents of '/' :");
  int n = 0;
  File entry = root.openNextFile();
  while (entry) {
    if (entry.isDirectory()) LOG.printf("   <DIR>  %s\n", entry.name());
    else LOG.printf("   %7lu B  %s\n", (unsigned long)entry.size(), entry.name());
    entry.close();
    if (++n >= max_entries) { LOG.printf("   ... (truncated at %d)\n", max_entries); break; }
    entry = root.openNextFile();
  }
  if (n == 0) LOG.println("   (empty)");
  root.close(); LOG.flush();
}

static void compute_target_size(int src_w, int src_h, DisplayFit fit, float scale,
                                int panel_w, int panel_h, int* out_w, int* out_h) {
  switch (fit) {
    case FIT_ORIGINAL: *out_w = src_w; *out_h = src_h; break;
    case FIT_CONTAIN: {
      double s = (double)panel_w/src_w; if ((double)panel_h/src_h < s) s = (double)panel_h/src_h;
      if (s > 1.0) s = 1.0;
      *out_w = (int)(src_w*s+0.5); *out_h = (int)(src_h*s+0.5); break;
    }
    case FIT_SCALE: *out_w = (int)(src_w*scale+0.5); *out_h = (int)(src_h*scale+0.5); break;
  }
  if (*out_w & 7) *out_w &= ~7;
  if (*out_w < 8) *out_w = 8;
  if (*out_h < 1) *out_h = 1;
}

static void compute_anchor_xy(int img_w, int img_h, DisplayAnchor a,
                              int panel_w, int panel_h, int* out_x, int* out_y) {
  int x = 0, y = 0;
  switch (a) {
    case ANCHOR_TOP_LEFT:      x=0;                     y=0;                    break;
    case ANCHOR_TOP_CENTER:    x=(panel_w-img_w)/2;     y=0;                    break;
    case ANCHOR_TOP_RIGHT:     x=panel_w-img_w;         y=0;                    break;
    case ANCHOR_MIDDLE_LEFT:   x=0;                     y=(panel_h-img_h)/2;    break;
    case ANCHOR_CENTER:        x=(panel_w-img_w)/2;     y=(panel_h-img_h)/2;    break;
    case ANCHOR_MIDDLE_RIGHT:  x=panel_w-img_w;         y=(panel_h-img_h)/2;    break;
    case ANCHOR_BOTTOM_LEFT:   x=0;                     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_CENTER: x=(panel_w-img_w)/2;     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_RIGHT:  x=panel_w-img_w;         y=panel_h-img_h;        break;
  }
  if (x & 7) x &= ~7;
  *out_x = x; *out_y = y;
}

static bool show_image_on_panel(RgbImage* img) {
  int W, H;
  compute_target_size(img->width, img->height, DISPLAY_FIT, DISPLAY_SCALE,
                      EPD_WIDTH, EPD_HEIGHT, &W, &H);
  int x, y;
  compute_anchor_xy(W, H, DISPLAY_ANCHOR, EPD_WIDTH, EPD_HEIGHT, &x, &y);

  if (W != img->width || H != img->height) {
    if (!resize_image(img, W, H)) { LOG.println("[layout] resize OOM"); return false; }
  }
  const size_t npx = (size_t)W * H;
  uint8_t* idx = (uint8_t*)ps_malloc(npx);
  if (!idx) idx = (uint8_t*)malloc(npx);
  if (!idx) { LOG.println(TAG " OOM idx"); return false; }

  static const char* kDN[] = {"NONE","BAYER8","FS","JARVIS","ATKINSON"};
  LOG.printf(TAG " dithering BW with %s, gamma=%.2f\n", kDN[(int)DITHER_METHOD], DITHER_GAMMA);
  if (!dither_image(img->pixels, W, H, PAL_BW, DITHER_METHOD, DITHER_GAMMA, DITHER_INVERT, idx)) {
    free(idx); return false;
  }
  image_free(img);

  const size_t bm_bytes = ((size_t)W+7)/8 * (size_t)H;
  uint8_t* bm = (uint8_t*)ps_malloc(bm_bytes);
  if (!bm) bm = (uint8_t*)malloc(bm_bytes);
  if (!bm) { free(idx); return false; }
  pack_1bpp_msb(idx, bm, W, H, true);
  free(idx);

  epaper.drawBitmap(x, y, bm, W, H, TFT_BLACK, TFT_WHITE);
  epaper.update();
  free(bm);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (BW)");
  LOG.println("==============================================");
  log_mem("start");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED -- aborting"); return;
  }
  list_sd_root();

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed -- aborting"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

<details>
<summary>完全なコードをプレビューするにはここをクリック — reTerminal_E1001_SDcard_Gray4.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1001-g4]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  // (fit/anchor logic omitted for brevity -- see full source in the library)
  if (W != img->width || H != img->height)
    if (!resize_image(img, W, H)) return false;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY4, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (Gray4)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL4);
  epaper.fillSprite(TFT_GRAY_3);

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1002" label="E1002">

<details>
<summary>完全なコードをプレビューするにはここをクリック — reTerminal_E1002_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup521_Seeed_reTerminal_E1002 -- check driver.h selects BOARD_SCREEN_COMBO 521"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1002]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1002 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // ED2208 is write-only (TFT_MISO=-1 in Setup521). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>完全なコードをプレビューするにはここをクリック — reTerminal_E1003_SDcard_Gray16.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup522_Seeed_reTerminal_E1003 -- check driver.h selects BOARD_SCREEN_COMBO 522"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 39;  // E1003 uses GPIO39, not GPIO16
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1003]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// At 1872x1404, error-diffusion needs >10 MB -- use DITHER_BAYER8 or shrink source first.
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY16, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1003 -- SD Bitmap (Gray16)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL16);
  epaper.fillSprite(TFT_GRAY_15);

  // Re-init SPI bus to ensure MISO=GPIO8 is wired (symmetry with E1001/E1002).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1004" label="E1004">

<details>
<summary>完全なコードをプレビューするにはここをクリック — reTerminal_E1004_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup523_Seeed_reTerminal_E1004 -- check driver.h selects BOARD_SCREEN_COMBO 523"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1004]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// Default BAYER8: safe at any source size. Switch to FS only for small images.
static const DitherMethod DITHER_METHOD = DITHER_BAYER8;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1004 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // Re-init SPI bus for symmetry with E1001/E1002 (no-op on E1004, MISO already configured).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
</Tabs>

:::note 簡略版と完全なソースの違い
上のコードブロックは、ここで読みやすくするために**少しだけ簡略化**されています（ヘルパー関数のインライン化、冗長なログ呼び出しの削除など）。ライブラリ内のスケッチ（**File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap** から開くもの）には、完全な診断ログ、完全なフィット／アンカー処理ロジック、そしてすべてのコメントが含まれています。
:::

### ステップ 2 — microSD カードを準備する

1. カードを **FAT32** でフォーマットします。
2. スケッチ内で設定するパスに合わせたフォルダ構造を作成します — デフォルトは `/img/demo.jpg` です：

   ```text
   <SD root>/
   └── img/
       └── demo.jpg          ← or demo.png / demo.bmp
   ```

3. 電源を入れる**前に**、reTerminal にカードを挿入します（ホットプラグも動作しますが、信頼性はやや低くなります）。

### ステップ 3 — 画像を準備する

ローダーは標準で次の 3 つの形式を受け付けます：

| フォーマット | 使えるもの | 避けるべきもの |
|---|---|---|
| **JPEG** (`.jpg` / `.jpeg`) | ベースライン 8 ビット、YCbCr またはグレースケール、任意のクロマサブサンプリング（4:4:4 / 4:2:2 / 4:2:0）。 | プログレッシブ JPEG、CMYK、EXIF の回転情報のみで向きが指定されたソース。 |
| **BMP** (`.bmp`) | 24 ビット BGR 非圧縮、または 4 ビットインデックス（パレット + `BI_RGB`）。 | `BI_BITFIELDS`、RLE 圧縮 BMP。 |
| **PNG** (`.png`) | 標準的な PNG なら何でも可（8 ビット、16 ビット、パレット、インターレース、RGBA）。RGBA は ePaper パネルが不透明なため、**白**の上に合成されます。 | なし — pngle はすべての標準 PNG バリアントを処理できます。 |

ファイルの実際の形式は拡張子ではなく **マジックバイト** から判別されます。`.bmp` として保存された JPEG でも動作します（シリアルログに警告が表示されるだけです）。

パネルごとのサイズの目安：

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

パネルは **800 × 480** です。おおよそ **1600 × 1200** までのソースであれば、8 MB の PSRAM で問題なくデコードできます。さらに大きな画像も受け付けますが、その場合は `DISPLAY_FIT = FIT_CONTAIN` を使って、量子化の前にローダー側で縮小できるようにすることを推奨します。

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

BW と同じパネル（**800 × 480**）ですが、階調の幅がかなり広くなります — ポートレートや風景写真をネイティブ解像度で表示すると、BW スケッチよりも明らかに滑らかに見えます。

</TabItem>
<TabItem value="e1002" label="E1002">

パネルは **800 × 480** です。6 色パレットは色数が少ないため、写真コンテンツでは強めのディザリング（FS / Jarvis）を使うと見かけ上の画質が最も良くなります。

</TabItem>
<TabItem value="e1003" label="E1003">

パネルは **1872 × 1404**（約 **260 万ピクセル**、RGB888 で約 7.5 MB）です。パネルいっぱいのサイズのソースを使うと PSRAM が飽和し、ディザ段は `DITHER_NONE` にフォールバックせざるを得なくなります — この状況になるとローダーが警告を出力します。

最良の結果を得るには、PC 上でソースをあらかじめ **1200 × 900 以下** にスケーリングしておく（または `DISPLAY_FIT = FIT_CONTAIN` とより小さい `DISPLAY_SCALE` を使う）うえで、最終的なディザリングをデバイス側に任せてください。

</TabItem>
<TabItem value="e1004" label="E1004">

パネルは **1200 × 1600**（約 190 万ピクセル、RGB888 で約 5.5 MB）です。8 MB の PSRAM には余裕で収まりますが、**パネル解像度での FS** と、それに必要な 11 MB のエラーバッファを組み合わせると、**必ず** フォールバックが発生します。安全のためデフォルトは `DITHER_BAYER8` になっています。ソースを縮小したあとでのみ `DITHER_FS` に切り替えてください。

</TabItem>
</Tabs>

### ステップ 4 — スケッチを設定する

ユーザーが調整できるオプションは、各 `.ino` ファイルの先頭にある設定ブロックにまとまっています。最も重要な 4 つのパラメータについて、以下で順に説明します。

#### `IMAGE_PATH` — 表示するファイル

```cpp
static const char* IMAGE_PATH = "/img/demo.jpg";
```

先頭に `/` を付けてください。ローダーはマジックバイトから形式を判別するため、拡張子は見た目だけのものです — 実際には JPEG データが入っている `/photo.bmp` でも問題なくデコードされます。

#### `DITHER_METHOD` — 使用するディザリングアルゴリズム

ePaper パネルが物理的に表示できるのは 2 / 4 / 6 / 16 色だけです。典型的な写真に含まれる何百万もの色を表現するには、ローダーは各ピクセルをそれら少数のパレットエントリのいずれかに**量子化**する必要があります。ディザリングアルゴリズムは、その量子化誤差を隣接ピクセルにどのように分散させるかを決定します。

```cpp
static const DitherMethod DITHER_METHOD = DITHER_FS;
```

| オプション | 動作 | 使いどころ |
|---|---|---|
| `DITHER_NONE` | 最も近い色に量子化し、誤差拡散なし。最速だがブロック感が強い。 | 診断用途、またはポスタライズされた見た目にしたい場合。 |
| `DITHER_BAYER8` | 8×8 の順序付き Bayer 行列。決定論的で、**エラーバッファ不要**。 | パネル解像度での E1003 / E1004 に最も安全な選択 — メモリ不足になりません。 |
| `DITHER_FS` | Floyd-Steinberg 誤差拡散。**画質と速度**のバランスが最良。 | E1001 / E1002 でのデフォルト。滑らかなグラデーションを含む写真に最適。 |
| `DITHER_JARVIS` | Jarvis-Judice-Ninke。係数 12 個の広いカーネルで、より滑らかな出力。 | FS より高画質ですが、約 3 倍遅く、PSRAM 使用量も増えます。 |
| `DITHER_ATKINSON` | Atkinson（クラシック Mac）。誤差の 6/8 のみを拡散 → コントラストが高く、より「エッチング」されたような見た目。 | スタイライズされた白黒出力、コミック／線画コンテンツ向け。 |

:::caution 誤差拡散のメモリコスト
`DITHER_FS`、`DITHER_JARVIS`、`DITHER_ATKINSON` には、おおよそ `W × H × N_channels × 4` バイトの **浮動小数点エラーバッファ** が必要です。1872 × 1404 の場合、カラーでは約 **31 MB**、グレースケールでも約 **10 MB** となり、利用可能な PSRAM を大きく超えます。

`ps_malloc` が失敗すると、ローダーは次のメッセージを出力し

```
[dither] FS error buffer alloc FAILED (10358 kB) -- falling back to DITHER_NONE
```

静かに `DITHER_NONE` へ切り替えます。このフォールバックを避けたい場合は、`DITHER_BAYER8`（順序付きで追加メモリアロケーションなし）に変更する **か**、先に画像を縮小してください。
:::

#### `DITHER_GAMMA` — 輝度補正

```cpp
static const float DITHER_GAMMA = 1.0f;
```

`1.0` がニュートラルです。値を大きくすると出力が**暗く**なります（屋外写真が ePaper 上で明るくなりすぎる場合に有効）。値を小さくすると**明るく**なります（夜景写真やスクリーンショットに有効）。実用的な範囲はおおよそ **0.8 – 1.6** です。

#### `DISPLAY_ANCHOR` — パネル上のどこに画像を配置するか

3×3 のアンカーポイントグリッドです。画像は、その角 / 辺 / 中心が対応するパネル位置に揃うように配置されます。

```text
ANCHOR_TOP_LEFT       ANCHOR_TOP_CENTER       ANCHOR_TOP_RIGHT
ANCHOR_MIDDLE_LEFT    ANCHOR_CENTER           ANCHOR_MIDDLE_RIGHT
ANCHOR_BOTTOM_LEFT    ANCHOR_BOTTOM_CENTER    ANCHOR_BOTTOM_RIGHT
```

```cpp
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;
```

パネルより小さい画像は、未使用領域が白で**自動的にパディング**されるため、パネルにぴったり合わせるように事前リサイズする必要はありません。パネルより大きい画像は、アンカーを中心として対称に**クリップ**されます。

#### `DISPLAY_FIT` + `DISPLAY_SCALE` — 画像サイズの調整

```cpp
static const DisplayFit  DISPLAY_FIT   = FIT_ORIGINAL;
static const float       DISPLAY_SCALE = 1.0f;
```

| モード | 動作 |
|---|---|
| `FIT_ORIGINAL` | デコードされたサイズをそのまま保持します。推奨デフォルト — 予測しやすく、常に安全です。 |
| `FIT_CONTAIN` | アスペクト比を維持したまま、画像全体がパネル内に**完全に**収まるように縮小します。**拡大は一切行いません** — 小さい画像は小さいままです（拡大には `FIT_SCALE` を使用します）。 |
| `FIT_SCALE` | ソースサイズに `DISPLAY_SCALE` を掛けます。縮小（`< 1.0`）と拡大（`> 1.0`）の両方をサポートします。 |

`DISPLAY_SCALE` の代表的な値：`0.25` 4分の1、`0.5` 半分、`1.0` 元サイズ、`2.0` 2倍。

:::warning 大型パネルでのアップスケーリングは OOM を起こしやすい
E1003（1872 × 1404）および E1004（1200 × 1600）では、`DISPLAY_SCALE` が `1.0` を超えると PSRAM を急速に使い切ります。ローダーはメモリ不足メッセージを出力して中止します。代わりにホスト側でのトリミングや事前スケーリングを推奨します。
:::

#### グレースケール深度（E1001 のみ）

E1001 には **2 つ**のスケッチが同梱されています。これは同じ UC8179 パネルが BW（高速、1ビット）**または** Gray4（低速、2ビット、4階調）で動作できるためです。コンテンツに応じて選択してください：

| コンテンツ | 推奨スケッチ |
|---|---|
| 線画、QR コード、テキスト、手描きコミック。 | `reTerminal_E1001_SDcard_BW` |
| 写真、滑らかな陰影を持つイラスト。 | `reTerminal_E1001_SDcard_Gray4` |

E1003 は 16 階調グレースケール（`initGrayMode(16)`）を無条件に使用します — このモードがパネルの代表的な機能です。E1002 と E1004 は 6 色パネルであり、グレースケール深度の選択肢は提供されません。

### ステップ 5 — ビルド、書き込み、ログの確認

1. **Arduino IDE → Tools** で、ボードを **XIAO_ESP32S3**、**PSRAM = OPI PSRAM**、**Flash = 8 MB**、**Partition Scheme = Default 8 MB** に設定します。
2. 準備した microSD カードを挿入します。
3. スケッチを**アップロード**します。
4. **キャリアの USB-UART ブリッジ上のシリアルモニタ**を開きます（GPIO43 TX / GPIO44 RX、**115200 baud, 8N1**）— これは IDE が自動で開く USB-CDC の `Serial` ではなく、`Serial1` である点に注意してください。

典型的なログ出力（1080 × 1920 PNG を使用した E1004 の例）：

```text
[reTerm_E1004] dithering Color6 with BAYER8, gamma=1.00 ...
[mem]  before image load        heap=275 kB  PSRAM free=8030/8192 kB
[png]   IHDR 1080x1920, allocating RGB888 buffer: 6075 kB
[img]   image decoded: 1080x1920  (6075 kB in PSRAM)
[mem]  after image decoded      heap=275 kB  PSRAM free=1955/8192 kB
[mem]  after dither             heap=275 kB  PSRAM free=1955/8192 kB
[reTerm_E1004] anchor=CENTER  fit=ORIGINAL  scale=1.00
[reTerm_E1004] frame pushed OK
[reTerm_E1004] done. Sleeping panel.
```

この後パネルがリフレッシュを行います — モデルと選択したグレー / カラーモードに応じて、フル更新には**15〜45 秒**かかります。静止した状態を保ち、リフレッシュの途中でボードをリセットしないでください。

### メモリ予算チートシート

| パネル | RGB888 バッファ | FS エラーバッファ（ピーク） | FS 利用の余裕 |
|---|---|---|---|
| E1001 BW @ 800×480 | 1.1 MB | 1.5 MB | ✅ あり |
| E1001 Gray4 @ 800×480 | 1.1 MB | 1.5 MB | ✅ あり |
| E1002 E6 @ 800×480 | 1.1 MB | 4.6 MB | ✅ あり |
| E1003 Gray16 @ 1872×1404 | 7.5 MB | 10.1 MB | ❌ なし — `DITHER_BAYER8` を使用するかソースを縮小 |
| E1004 E6 @ 1200×1600 | 5.5 MB | 22.0 MB | ❌ なし — `DITHER_BAYER8` を使用するかソースを縮小 |

XIAO ESP32-S3 モジュール上の 8 MB OPI PSRAM モジュールでは、Arduino ランタイムのオーバーヘッドを差し引くと、およそ**7.9 MB の使用可能領域**が得られます。ローダーがメモリアロケーションを満たせない場合、必要とした正確なサイズをログに出力し、`DISPLAY_FIT = FIT_CONTAIN` のときはサイズ変更して再試行するか、`DITHER_NONE` にフォールバックします。

:::tip リフレッシュ速度について
書き込み後、ドライバが初期ウェーブフォームを実行している間、ePaper が最初の数秒間は空白のままになることがあります。最初のフルリフレッシュは、冷えたパネルでは数分かかる場合があります — これはパネルの電気化学的特性であり、不具合ではありません。2 回目以降のリフレッシュはより高速になります。
:::

## トラブルシューティング

Arduino IDE のセットアップ、USB ドライバの問題、書き込み失敗、または「ePaper ディスプレイがリフレッシュしない」といった問題については、[Arduino Cookbook: ePaper Display](/ja/reterminal_e10xx_with_arduino#トラブルシューティング) の **Troubleshooting** セクションを参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
