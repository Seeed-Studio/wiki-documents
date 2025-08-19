---
description: Grove Beginner Kit for Arduino
title: Grove Beginner Kit for Arduino
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Beginner-Kit-For-Arduino
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grove Beginner Kit For Arduino

Grove Beginner Kit for Arduino は、初心者向けの最高の Arduino 初心者キットの一つです。このキットには、Arduino 互換ボードと 10 個の追加 Arduino センサーが含まれており、すべてが一体型の PCB デザインに収められています。**すべてのモジュールは、PCB のスタンプホールを介して Seeeduino に接続されているため、Grove ケーブルを使用して接続する必要はありません**。もちろん、モジュールを取り外して Grove ケーブルを使用して接続することも可能です。この Grove Beginner Kit For Arduino を使用して、好きな Arduino プロジェクトを構築できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg)

**注:** 寸法 - 17.69 * 11.64 * 1.88cm

1. **[Grove - LED](https://wiki.seeedstudio.com/ja/Grove-Red_LED/):** シンプルな LED モジュール
2. **[Grove - Buzzer](https://wiki.seeedstudio.com/ja/Grove-Buzzer/):** 圧電ブザー
3. **[Grove - OLED Display 0.96"](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-0.96-SSD1315/):** 128×64 ドット解像度、高輝度、自発光、高コントラスト比、コンパクトなデザインで大画面、低消費電力
4. **[Grove - Button](https://wiki.seeedstudio.com/ja/Grove-Button/):** モーメンタリープッシュボタン
5. **[Grove - Rotary Potentiometer](https://wiki.seeedstudio.com/ja/Grove-Rotary_Angle_Sensor/):** 調整可能なポテンショメータ
6. **[Grove - Light](https://wiki.seeedstudio.com/ja/Grove-Light_Sensor/):** 周囲の光強度を検出
7. **[Grove - Sound](https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor/):** 周囲の音強度を検出
8. **[Grove - Temperature & Humidity Sensor](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/):** 周囲の温度と湿度を検出
9. **[Grove - Air Pressure Sensor](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP280/):** 周囲の気圧を検出
10. **[Grove - 3-Axis Accelerator](https://wiki.seeedstudio.com/ja/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR):** オブジェクトの加速度を検出
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/):** Grove ポートを備えた Arduino 互換ボード

**注:**
Grove モジュールはデフォルトで PCB スタンプホールを介して Seeeduino に接続されています。このため、モジュールを取り外さない限り Grove ケーブルを使用する必要はありません。デフォルトのピンは以下の通りです：

| モジュール | インターフェース | ピン/アドレス |
|---|---|---|
| LED | Digital | D4 |
| Buzzer | Digital | D5 |
| OLED Display 0.96" | I2C | I2C, 0x78 (デフォルト) |
| Button | Digital | D6 |
| Rotary Potentiometer | Analog | A0 |
| Light | Analog | A6 |
| Sound | Analog | A2 |
| Temperature & Humidity Sensor | Digital | D3 |
| Air Pressure Sensor | I2C | I2C, 0x77 (デフォルト) / 0x76 (オプション) |
| 3-Axis Accelerator | I2C | I2C, 0x19 (デフォルト) |

### モジュール取り外し手順

**注意:**
ナイフを使用する際は、手を切らないように十分注意してください。

モジュールを他の場所で使用したい場合は、以下の手順に従ってモジュールを取り外してください！

**ステップ 1**

センサーを接続しているスタンプホール部分をナイフや鋭利な物で切ります。

**ステップ 2**

モジュールを上下に揺らすと、簡単に取り外すことができます！

## 部品リスト

|モジュール|数量|
|---|---|
|**センサー**||
|温度・湿度センサー|x1|
|3軸加速度センサー|x1|
|気圧センサー|x1|
|光センサー|x1|
|音センサー|x1|
|**入力モジュール**||
|回転ポテンショメーター|x1|
|ボタン|x1|
|**出力モジュール**||
|LED|x1|
|ブザー|x1|
|**ディスプレイモジュール**||
|OLEDディスプレイ|x1|
|**Groveケーブル**|x6|
|**Micro USBケーブル**|x1|


## 学習目標

- オープンソースハードウェアシステムの基礎。
- Arduinoプログラミングの基礎。
- センサーの通信原理と方法。
- オープンソースハードウェアプロジェクトの実践的な実装。

### プラグアンドプレイ開封デモ

Grove Beginner Kitにはプラグアンドプレイの開封デモが含まれています。まずボードに電源を接続すると、すべてのセンサーを一度に体験することができます！ボタンと回転ポテンショメーターを使用して、各センサーデモを体験してください。

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **スクロール** -> 回転ポテンショメーターを回す
- **選択** -> ボタンを短押し
- **現在のデモを終了** -> ボタンを長押し

ブザーとLEDモジュールはキーのプロンプトとして使用されます。


## Arduinoの始め方

### Arduino IDEをインストールする

- **Arduino IDE**はArduino用の統合開発環境で、マイコンソフトウェアのプログラミング、ダウンロード、テストなどに使用されます。
- 必要なオペレーティングシステムに対応した[Arduino IDE](https://www.arduino.cc/en/Main/Software)をダウンロードしてインストールしてください。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)



### USBドライバをインストールする

- ArduinoはUSBケーブルを介してPCに接続されます。USBドライバは、Arduinoで使用されているUSBチップの種類に依存します。*注: USBチップは通常、開発ボードの裏面に印刷されています。*

  - [CP2102 USBドライバ](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)をダウンロードしてください。**注:** OSに応じてダウンロードしてください。
  - ドライバのインストールが完了したら、USBケーブルでArduinoをPCのUSBポートに接続します。
      - **Windowsユーザーの場合:** `マイコンピュータ` -> `プロパティ` -> `ハードウェア` -> `デバイスマネージャー`で確認できます。`COM`が表示されます。
      - **Mac OSユーザーの場合:** 左上の``をクリックし、`このMacについて` -> `システムレポート...` -> `USB`を選択します。CP2102 USBドライバが表示されるはずです。
  - ドライバがインストールされていない場合、またはドライバが正しくインストールされていない場合（チップモデルと一致しない場合）、デバイスマネージャーに「不明なデバイス」として表示されます。この場合、ドライバを再インストールする必要があります。



### Arduino IDEを起動する

1. **Arduino IDE**をPCで開きます。
2. `ツール` -> `ボード` -> `Arduino AVR Boards` -> `Arduino Uno`をクリックして、正しい開発ボードモデルを選択します。**Arduino Uno**をボードとして選択してください。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/uno_board.jpg)

3. `ツール` -> `ポート`をクリックして、正しいポートを選択します（前のステップでデバイスマネージャーに表示されたシリアルポート）。この場合、`COM11`が選択されています。**Mac OSユーザーの場合**、`/dev/cu.SLAB_USBtoUART`が表示されるはずです。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.jpg)


4. 新しいArduinoファイルを作成し、`Hello.ino`という名前を付け、以下のコードをコピーしてください：

```Cpp
void setup() {
  Serial.begin(9600); // シリアルポートを9600ボーレートで初期化
}
void loop() {
  Serial.println("hello, world"); // シリアルポートに文字列を出力
  delay(1000); // 1秒の遅延
}
```

5. Arduino IDEの左上にある2つのボタン、**Verify（検証）とUpload（アップロード）**を使用します。まず、検証ボタン（✓）を押してコンパイルします。コンパイルが成功したら、アップロードボタン（→）を押します。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6. `ツール` -> `シリアルモニター`に移動するか、右上の**シリアルモニター**（虫眼鏡のシンボル）をクリックすると、プログラムの実行結果が表示されます：

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**注:** USBドライブからポータブルArduino IDEをインストールした場合、**ファイル** -> **スケッチブック**で、すべてのモジュールデモを見つけることができます。また、すべてのモジュールライブラリがArduino IDEに事前インストールされています！

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png)

**注:**
すべてのモジュールは単一の回路基板上で事前配線されているため、ケーブルやはんだ付けは必要ありません。ただし、モジュールを分離してGroveケーブルで接続したい場合は、Breakout Guideをご確認ください。

## レッスンガイド

### レッスン 1: LED を点滅させる

「Hello world」プログラムの出力を完了しました。次に、LED モジュールを点灯させる方法を学びましょう。制御システムの基本的な 3 つの構成要素（入力、制御、出力）を知っていますが、LED を点灯させるには出力のみを使用し、入力は使用しません。Seeeduino は制御ユニット、LED モジュールは出力ユニット、出力信号はデジタル信号です。

背景情報:

- **デジタル信号とは**

**デジタル信号:** デジタル信号とは、振幅の値が離散的であり、振幅が有限の値に制限されている信号を指します。コントローラーでは、デジタル信号には 2 つの状態があります：LOW（0V）は 0、HIGH（5V）は 1 を表します。したがって、LED に HIGH 信号を送ると点灯します。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)

使用するコンポーネント:
1. Seeeduino Lotus
2. Grove LED
3. Grove ケーブル（切り離された場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)

ハードウェア接続:
- **モジュール接続**
  - PCB スタンプホールによるデフォルト接続。
- USB ケーブルを使用して Seeeduino をコンピュータに接続します。

- ソフトウェアコード:
  - Arduino IDE を開きます。
  - 以下のコードをコピーし、[Verify] をクリックして構文エラーを確認します。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
// LED 点滅
// LED は 1 秒間点灯し、その後 1 秒間消灯します
int ledPin = 4;
void setup() {
    pinMode(ledPin, OUTPUT);
}
void loop() {
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
}
```

コード解析:

```cpp
setup(){
}
```

`setup()` 関数はスケッチが開始されると呼び出されます。変数の初期化、ピンモードの設定、ライブラリの使用開始などに使用します。`setup()` 関数は、Arduino ボードの電源投入またはリセット後に一度だけ実行されます。

```cpp
loop(){
}
```

`setup()` 関数で初期値を設定した後、`loop()` 関数はその名の通り連続的にループし、プログラムが変化や応答を行えるようにします。Arduino ボードを積極的に制御するために使用します。

```cpp
int ledPin = 4;
```

**説明:**

値を int データ型に変換します。

**構文:**

int(**x**) または (int)**x**（C スタイルの型変換）

**パラメータ:**

**x**: 値。許可されるデータ型: 任意の型。

`ledPin` という名前の変数に int 型の値 4 を割り当てます。

```cpp
pinMode(ledPin, OUTPUT);
```

**説明:**

指定されたピンを入力または出力として動作するように設定します。ピンの機能の詳細については、Digital Pins ページを参照してください。

Arduino 1.0.1 以降では、`INPUT_PULLUP` モードを使用して内部プルアップ抵抗を有効にすることができます。また、`INPUT` モードは内部プルアップを明示的に無効にします。

**構文:**

pinMode(**pin, mode**)

**パラメータ:**

**pin**: モードを設定する Arduino ピン番号。

**mode**: `INPUT`、`OUTPUT`、または `INPUT_PULLUP`。

`ledPin` を出力モードに設定します。

```cpp
digitalWrite(ledPin, HIGH);
```

**説明:**

デジタルピンに `HIGH` または `LOW` の値を書き込みます。

ピンが pinMode() で OUTPUT として設定されている場合、その電圧は対応する値に設定されます：`HIGH` の場合は 5V（または 3.3V ボードでは 3.3V）、`LOW` の場合は 0V（グラウンド）。

ピンが INPUT として設定されている場合、digitalWrite() は入力ピンの内部プルアップを有効（HIGH）または無効（LOW）にします。内部プルアップ抵抗を有効にするには、pinMode() を `INPUT_PULLUP` に設定することをお勧めします。詳細は Digital Pins チュートリアルを参照してください。

pinMode() を OUTPUT に設定せずに LED をピンに接続し、digitalWrite(HIGH) を呼び出すと、LED が暗く見える場合があります。pinMode() を明示的に設定しない場合、digitalWrite() は内部プルアップ抵抗を有効にしており、これが大きな電流制限抵抗として機能します。

**構文:**

digitalWrite(**pin, value**)

**パラメータ:**

**pin**: Arduino ピン番号。

**value**: `HIGH` または `LOW`。

`ledPin` を出力として設定した場合、HIGH はピンに高レベルを送信することを意味し、LED が点灯します。

```cpp
digitalWrite(ledPin, LOW);
```

`ledPin` を出力として設定した場合、LOW はピンに低レベルを送信することを意味し、LED が消灯します。

```cpp
delay(1000);
```

**説明:**

指定された時間（ミリ秒単位）だけプログラムを一時停止します。（1 秒は 1000 ミリ秒です。）

**構文:**

delay(**ms**)

**パラメータ:**

**ms**: 一時停止するミリ秒数。許可されるデータ型: unsigned long。

プログラムを 1000ms（1 秒）遅延させます。

**デモ効果とシリアル出力結果:**

LED モジュールは 1 秒間点灯し、1 秒間消灯します。

**LED の明るさ調整:**

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>
  <br />
</div>

Grove LED モジュールには、**ドライバーで調整可能な可変抵抗器**があります。これを回して LED の明るさを調整できます！

ブレークアウトガイド:

モジュールが基板から切り離されている場合、Grove ケーブルを使用して **Grove LED** を Seeeduino Lotus のデジタルインターフェース **D4** に接続します。

### レッスン 2: ボタンを押して LED を点灯させる

最初に知っておくべきことは、ボタンの入力がデジタル信号であり、状態が 0 または 1 のみであるということです。この 2 つの状態に基づいて出力を制御できます。

- **練習:** ボタンを使用して LED モジュールを ON/OFF する

使用するコンポーネント:
1. Seeeduino Lotus
2. Grove LED
3. Grove ボタン
4. Grove ケーブル（切り離された場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

ハードウェア接続:
- **モジュール接続:**
  - PCB スタンプホールによるデフォルト接続。
- USB ケーブルを使用して Seeeduino をコンピュータに接続します。

- **ハードウェア解析**:
  - 入力: ボタン
  - 制御: Seeeduino
  - 出力: LED モジュール

センサーと LED の両方がデジタル信号を使用するため、デジタルインターフェースに接続する必要があります。

- **ソフトウェアコード**:
  - Arduino IDE を開きます。
  - 以下のコードをコピーし、[Verify] をクリックして構文エラーを確認します。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
// ボタンで LED を ON/OFF
// 定数は変更されません。ここではピン番号を設定するために使用されます:
const int buttonPin = 6;     // プッシュボタンのピン番号
const int ledPin =  4;      // LED のピン番号

// 変数は変更されます:
int buttonState = 0;         // プッシュボタンの状態を読み取るための変数

void setup() {
  // LED ピンを出力として初期化:
  pinMode(ledPin, OUTPUT);
  // プッシュボタンピンを入力として初期化:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // プッシュボタンの状態を読み取る:
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認。押されている場合、buttonState は HIGH:
  if (buttonState == HIGH) {
    // LED を点灯:
    digitalWrite(ledPin, HIGH);
  } else {
    // LED を消灯:
    digitalWrite(ledPin, LOW);
  }
}
```

コード解析

```cpp
pinMode(ledPin, OUTPUT);
```

LEDを出力ユニットとして定義します。

```cpp
pinMode(buttonPin, INPUT);
```

ボタンを入力ユニットとして定義します。

```cpp
buttonState = digitalRead(buttonPin);
```

**説明:**

指定されたデジタルピンから値を読み取ります。値は `HIGH` または `LOW` のいずれかです。

**構文:**

digitalRead(**pin**)

**パラメータ:**

**pin**: 読み取りたいArduinoのピン番号

この関数はデジタルピンの状態を読み取るために使用されます。ボタンが押されている場合、状態は `HIGH` になり、押されていない場合は `LOW` になります。

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**説明:**

if…​else 文は、基本的な if 文よりもコードの流れをより詳細に制御することができます。if 文の条件が偽の場合、else 節が実行されます。else 節は、別の if テストを続けることができ、複数の排他的なテストを同時に実行できます。

各テストは次のテストに進み、真のテストが見つかるまで続きます。真のテストが見つかった場合、その関連するコードブロックが実行され、プログラムは if/else 構造全体の後の行にスキップします。どのテストも真でない場合、デフォルトの else ブロックが存在すればそれが実行され、デフォルトの動作が設定されます。

else if ブロックは、終了する else ブロックがあってもなくても使用できます。また、その逆も可能です。このような else if 分岐は無制限に許可されています。

**構文:**

```cpp
if (condition1) {
  // Thing A を実行
}
else if (condition2) {
  // Thing B を実行
}
else {
  // Thing C を実行
}
```

この文の使用方法は、括弧内の論理式が真の場合、**if** の後の波括弧内の文を実行し、そうでない場合は **else** の後の波括弧内の文を実行します。ボタンの状態が高い場合、LEDピンは高レベルを出力し、LEDを点灯させます。それ以外の場合はLEDを消灯します。

**デモ効果とシリアルプリント結果:**

ボタンを押すとLEDモジュールが点灯します。

ブレイクアウトガイド

Groveケーブルを使用して、Grove LEDをSeeeduino Lotusのデジタルインターフェース **D4** に接続します。Groveボタンをデジタルインターフェース **D6** に接続します。

---

### レッスン3: 点滅の周波数を制御する

前のセクションでは、ボタンがON/OFFの2つの状態（0Vと5Vに対応）しか持たないことを学びましたが、実際には0Vと5Vだけでなく多くの状態が必要になる場合があります。その場合、アナログ信号を使用する必要があります！ロータリーポテンショメータはアナログ信号を使用する典型的な例です。

**背景情報:**

- **アナログ信号とは**

**アナログ信号:** 信号は時間と値の両方で連続的に変化し、信号の振幅、周波数、または位相が任意の時点で連続的に変化します。例えば、現在の放送音声信号や画像信号などです。アナログ信号には正弦波や三角波などがあります。マイクロコントローラのアナログピンは0Vから5Vの範囲を持ち、0から1023の範囲にマッピングされます。例えば、1023は5V、512は2.5Vにマッピングされます。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)

**使用するコンポーネント**
1. Seeeduino Lotus
2. Grove LED
3. Grove ロータリースイッチ
4. Grove ケーブル（ブレイクアウト時）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)

**ハードウェア接続**
- **モジュール接続:**
  - PCBスタンプホールによるデフォルト接続。
- SeeeduinoをUSBケーブルでコンピュータに接続します。

- **ハードウェア解析:**
  - 入力: ロータリーポテンショメータ
  - 制御: Seeeduino Lotus
  - 出力: LEDモジュール

入力はアナログ信号であるため、アナログ信号インターフェースに接続されます。LEDモジュールはデジタル信号インターフェースに接続されます。

---

**ソフトウェア**

- Arduino IDEを開きます。
- 以下のコードをコピーし、構文エラーを確認するために「Verify」をクリックします。エラーがないことを確認したら、コードをアップロードできます。

```cpp
// ロータリーポテンショメータでLEDを制御
int rotaryPin = A0;    // ロータリーポテンショメータの入力ピンを選択
int ledPin = 4;        // LEDのピンを選択
int rotaryValue = 0;   // ロータリーポテンショメータからの値を格納する変数

void setup() {
  // ledPinをOUTPUTとして宣言
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // センサーから値を読み取る
  rotaryValue = analogRead(rotaryPin);
  // ledPinをオンにする
  digitalWrite(ledPin, HIGH);
  // プログラムを<sensorValue>ミリ秒間停止
  delay(rotaryValue);
  // ledPinをオフにする
  digitalWrite(ledPin, LOW);
  // プログラムを<sensorValue>ミリ秒間停止
  delay(rotaryValue);
}
```

---

**コード解析**

```cpp
int rotaryPin = A0;    // ロータリーポテンショメータの入力ピンを選択
int ledPin = 4;        // LEDのピンを選択
```

**説明:**

ロータリーポテンショメータとLEDピンを異なる方法で定義していることに気付くかもしれません。これは、ロータリーポテンショメータがアナログ信号を生成し、LEDがデジタル信号で制御されるためです。

**アナログピンを定義するには**、「A + ピン番号」を使用します（例: `A0`）。

**デジタルピンを定義するには**、ピン番号のみを使用します（例: `4`）。

```cpp
rotaryValue = analogRead(rotaryPin);
```

**説明:**

指定されたアナログピンから値を読み取ります。Arduinoボードには多チャンネルの10ビットアナログ-デジタルコンバータが含まれています。これにより、入力電圧（0Vから動作電圧（5Vまたは3.3V））が0から1023の整数値にマッピングされます。例えば、Arduino UNOでは、読み取りの解像度は次のようになります: 5ボルト / 1024ユニット、つまり1ユニットあたり0.0049ボルト（4.9mV）。

**構文:**

analogRead(**pin**)

**パラメータ:**

**pin**: 読み取るアナログ入力ピンの名前（ほとんどのボードではA0からA5）。

**戻り値:** ピンのアナログ読み取り値。アナログ-デジタルコンバータの解像度に制限されます（10ビットの場合は0-1023、12ビットの場合は0-4095）。データ型: int。

この関数はアナログピン（ロータリセンサーの位置）の値を読み取るために使用されます。値の範囲は0〜1023です。

```cpp
delay(rotaryValue);
```

遅延関数、遅延のミリ秒単位の時間は括弧内の値です。この値はノブピンのアナログ信号値を読み取った値であるため、遅延時間はノブで制御できます。

**デモ効果とシリアル出力結果:**

ポテンショメータを回すことで、LEDの点滅周波数が変化します。

ブレークアウトガイド

Groveケーブルを使用してLEDをSeeeduino Lotusのデジタルインターフェース**D4**に接続し、Groveケーブルを使用してGroveロータリースイッチをアナログ信号インターフェース**A0**に接続します。

---

### レッスン4: ブザーを「ビー」と鳴らす

LEDモジュールと同様に、ブザーも出力モジュールですが、点灯する代わりにビープ音を発生させます。これは、多くの状況でインジケーション目的で使用できます。ブザーを使って音を生成する方法を学びましょう！

背景情報:

- **アクティブブザーとパッシブブザーの違いとは**

  ブザーには**アクティブ**と**パッシブ**の2種類があります。どちらも電子機器で音を出すために使用されます。

  **アクティブブザー**は内部に発振源を持ち、電源が供給されると自動的に音を出します。アクティブブザーは、コンピュータ、プリンター、コピー機、アラーム、電子玩具、車載電子機器、電話、タイマー、その他の電子製品の音響デバイスで広く使用されています。

  **パッシブブザー**は内部に発振源を持たず、**矩形波**と**異なる周波数**で駆動する必要があります。これは電磁スピーカーのように動作し、入力信号の変化によって音を生成しますが、自動的にトーンを出すわけではありません。

 <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

このキットでは、**Grove-Buzzerはパッシブブザー**であるため、制御には交流信号が必要です。次の疑問として、Arduinoで矩形波（交流信号）を生成する方法があります！簡単な方法はPWMを使用することです。

- **PWMとは**

**パルス幅変調（Pulse Width Modulation, PWM）**は、デジタル手段でアナログ結果を得るための技術です。デジタル制御を使用して矩形波（オンとオフを切り替える信号）を生成します。このオンオフパターンを使用して、信号がオンの時間とオフの時間の割合を変えることで、完全にオン（5ボルト）と完全にオフ（0ボルト）の間の電圧をシミュレートします。このオンの時間の長さをパルス幅と呼びます。アナログ値を変化させるには、このパルス幅を変更します。このオンオフパターンを十分に速く繰り返すと、信号が0〜5Vの間の一定の電圧（交流信号）のように見えます。*参考: [Arduino](https://www.arduino.cc/en/tutorial/PWM)*。このPWM信号を使用して、パッシブブザーを簡単に制御できます。

ArduinoでPWM信号を生成するには、`digitalWrite()`を使用してDC信号を生成するのとは対照的に、**`analogWrite()`**を使用できます。

Seeeduinoには、PWM信号を出力できる「~」記号が付いた6つのデジタルピンがあります: 3, 5, 6, 9, 10, 11。これらはPWMピンと呼ばれます。

使用するコンポーネント

1. Seeeduino Lotus  
2. Grove Buzzer  
3. Groveケーブル（ブレークアウトの場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)

---

ハードウェア接続

- **モジュール接続**  
  - PCBスタンプホールによるデフォルト接続。  
- USBケーブルを介してSeeeduinoをコンピュータに接続します。

---

ソフトウェアコード

- Arduino IDEを開きます。  
- 以下のコードをコピーし、構文エラーを確認するために[Verify]をクリックします。エラーがないことを確認し、コードをアップロードします。

```cpp
int BuzzerPin = 5;

void setup() {
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  analogWrite(BuzzerPin, 128);
  delay(1000);
  analogWrite(BuzzerPin, 0);
  delay(0);
}
```

---

コード解析

```cpp
analogWrite(BuzzerPin, 128);
```

**説明:**

ピンにアナログ値（PWM波）を書き込みます。LEDの明るさを変えたり、モーターの速度を調整したりするのに使用できます。`analogWrite()`を呼び出した後、そのピンは指定されたデューティサイクルの一定の矩形波を生成します。次に`analogWrite()`（または同じピンで`digitalRead()`または`digitalWrite()`）を呼び出すまで続きます。

**構文:**

analogWrite(**pin, value**)

**パラメータ:**

**pin**: 書き込むArduinoの`pin`。許容データ型: int。  

**value**: デューティサイクル: `0`（常にオフ）から`255`（常にオン）の間。許容データ型: int。

ブザーにアナログ値（PWM波）を書き込みます。

---

**デモ効果とシリアル出力結果:**

ブザーがビープ音を鳴らします。

ブレークアウトガイド

Groveケーブルを使用してGrove BuzzerをSeeeduino Lotusのデジタルインターフェース**D5**に接続します。

---

PWMの使用

PWMの使用方法を学んだので、パッシブブザーを制御する以外にも、PWMを使用してモーターの速度や**LEDライトの明るさ**などを制御することができます。

以下の図が示すように、`analogWrite()`を使用してPWM波を生成し、デューティサイクルの割合が高いほどLEDが明るくなります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png" /></div>

ただし、Grove Beginner KitのLEDモジュールはPWMで直接制御することはできません。これは、LEDモジュールがD4に接続されており、前述のようにPWMピンは3, 5, 6, 9, 10, 11であり、ピン4はPWMピンではないためです。PWMでLEDを制御したい場合は、Groveケーブルを使用してPWM機能を持つGroveポートに接続する必要があります。

例えば、**Grove-LEDをD3にGroveケーブルで接続**してみましょう:

!!!注意  
    D3はGrove-温湿度センサーと相互接続されているため、この例はGrove-温湿度センサーと一緒に使用することはできません。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png" /></div>

```cpp
int LED = 3; // LEDをD3にケーブル接続
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); // ポテンショメータ値をPWM信号値にマッピング
  analogWrite(LED, Value);
}
```

**コードをコンパイルしてアップロード**すると、PWM信号を使用してLEDの明るさを調整できるようになります！

コード解析

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**説明:**

数値をある範囲から別の範囲に再マッピングします。つまり、**fromLow** の値は **toLow** にマッピングされ、**fromHigh** の値は **toHigh** にマッピングされ、その間の値もそれぞれ対応する値にマッピングされます。

範囲内に値を制約することはありません。範囲外の値が意図的で有用な場合があるためです。範囲を制限したい場合は、`constrain()` 関数をこの関数の前後で使用することができます。

どちらの範囲の「下限」が「上限」よりも大きい場合や小さい場合でも、`map()` 関数を使用して数値の範囲を逆転させることができます。例えば：

**y = map(x, 1, 50, 50, 1);**

この関数は負の数も適切に処理します。例えば以下の例も有効で正常に動作します：

**y = map(x, 1, 50, 50, -100);**

`map()` 関数は整数演算を使用するため、数学的に分数が生成される場合でも分数は生成されません。分数の余りは切り捨てられ、丸めたり平均化されたりすることはありません。

**構文:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**パラメータ:**

**value**: マッピングする数値。

**fromLow**: 現在の範囲の下限。

**fromHigh**: 現在の範囲の上限。

**toLow**: 目標範囲の下限。

**toHigh**: 目標範囲の上限。

ポテンショメータセンサーのアナログ信号（0～1023）を光の明るさ（0～255）にマッピングします。

**デモ効果とシリアルプリント結果:**

ポテンショメータを調整してLEDの明るさを調整します。

全体として、PWM機能を使用する場合は、名前の前に「~」記号が付いているピンを選択することを確認してください。

### レッスン 5: 光感知LEDの作成

光センサーには光感知抵抗が含まれており、光の強度を測定します。光感知抵抗の抵抗値は光の強度が増加するにつれて減少します。周囲が暗い場合はLEDが点灯し、周囲が明るい場合は消灯します。

以下のセクションでは、センサーからの結果を観察するためにシリアルモニターを使用しますので、簡単な紹介を行います！

背景情報:

- **シリアルモニターとは**

シリアルモニターはArduinoで結果を観察するための便利なツールであり、センサーからの結果を表示したり、一般的なデバッグに非常に役立ちます。また、シリアルモニターを介してコントローラーにデータを送り返し、特定のタスクを実行することもできます！注意: シリアルデータ転送がコードと一致していることを確認してください。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

シリアルモニターは **Tools** -> **Serial Monitor** をクリックして開くことができます。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

  
使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Light Sensor
    4. Groveケーブル（ブレークアウトの場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)



ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoはUSBケーブルを介してコンピュータに接続されます。

- **ハードウェア解析:**

    - 入力: 光センサー
    - 制御: Seeeduino Lotus
    - 出力: LEDモジュール

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、構文エラーを確認するためにVerifyをクリックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
// 光スイッチ
int sensorpin = A6; // センサーが接続されているアナログ入力ピン
int ledPin = 4;    // LEDポート
int sensorValue = 0;        // ポートから読み取った値
int outputValue = 0;        // PWM（アナログ出力）に出力する値

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // アナログ入力値を読み取る:
  sensorValue = analogRead(sensorpin);

  Serial.println(sensorValue);

  if (sensorValue < 200) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }

  delay(200);
}
```

**シリアルモニター**で光の強度の読み取り値を見ることができます。IDEインターフェースで **Tools** -> **Serial Monitor** に移動します。

コード解析

```cpp
Serial.begin(9600);
```

**説明:**

シリアルデータ送信のためのデータレート（ビット/秒、ボー）を設定します。シリアルモニターと通信する場合は、画面右下のメニューにリストされているボー率のいずれかを使用してください。ただし、特定のボー率を必要とするコンポーネントとピン0および1を介して通信する場合など、他のボー率を指定することもできます。

オプションの第2引数でデータ、パリティ、ストップビットを構成します。デフォルトは8データビット、パリティなし、1ストップビットです。

コンピュータ上で動作するソフトウェアが開発ボードと通信し、ボー率は9600です。

**構文:**

Serial.begin(**speed**)

**パラメータ:**

**speed**: シリアル通信の速度。例: `9600`, `115200` など。

シリアルボー率を9600に設定します。

```cpp
Serial.println(sensorValue);
```

**説明:**

データをシリアルポートに人間が読み取れるASCIIテキストとして出力し、キャリッジリターン文字（ASCII 13、または '\r'）と改行文字（ASCII 10、または '\n'）を付加します。このコマンドはSerial.print()と同じ形式を取ります。

**構文:**

Serial.println(**val**) または Serial.println(**val**, **format**)

**パラメータ:** 

**val**: 出力する値。許可されるデータ型: 任意のデータ型。

**format**: 数値の基数（整数データ型の場合）または小数点以下の桁数（浮動小数点型の場合）を指定します。

シリアルポートは光センサーの値を出力します。そのため、IDEインターフェースで **シリアルモニター** を開き、センサーの出力値を確認します。

**デモ効果とシリアルプリント結果:**

暗い場合はLEDモジュールが点灯し、明るい場合は消灯します。

ブレークアウトガイド

Groveケーブルを使用して、Grove LEDをSeeeduino Lotusのデジタル信号インターフェース **D4** に接続し、Grove光センサーをSeeeduino Lotusのアナログ信号インターフェース **A6** に接続します。


### レッスン 6: 音感知LEDライト

音センサーは環境の音の強度を検出でき、その出力もアナログです。皆さんは音声制御ライトに触れたことがあると思いますが、今回は自分でそれを作成してみましょう。基本を理解していれば、この実験は簡単に行えます。ここでは、結果を視覚化するためにシリアルプロッタを使用します。

背景情報:

- **シリアルプロッタとは**

シリアルプロッタはシリアルモニタに似ており、Arduinoからコンピュータにリアルタイムでシリアルデータをグラフ化することができます。データを視覚化する必要がある場合に非常に便利です。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

シリアルプロッタは、**ツール** -> **シリアルプロッタ** をクリックして開くことができます。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg)

- **実践:** 音が発生するとLEDライトが点灯します。音がなく非常に静かな場合、LEDライトは消灯します。

使用するコンポーネント

1. Seeeduino Lotus  
2. Grove LED  
3. Grove サウンドセンサー  
4. Grove ケーブル（必要に応じて）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)

ハードウェア接続

- **モジュール接続:**
  - PCBスタンプホールによるデフォルト接続。
- SeeeduinoをUSBケーブルでコンピュータに接続します。

ソフトウェアコード

- Arduino IDEを開きます。
- 以下のコードをコピーし、構文エラーを確認するために「検証」をクリックします。エラーがないことを確認したら、コードをアップロードします。

```cpp
// サウンド制御ライト
int soundPin = A2; // アナログサウンドセンサーをアナログピンに接続
int ledPin = 4; // デジタルLEDをデジタルピンに接続
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); // サウンドセンサーの値を読み取る
  Serial.println(soundState);
  // サウンドセンサーの値が400を超える場合、ライトが点灯します。
  // それ以外の場合、ライトは消灯します。
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

**シリアルプロッタ**で光の強度の読み取り値を確認することもできます。**ツール** -> **シリアルプロッタ** に移動してください。

**注意: 周囲の光の強度に応じて値を調整することもできます。**

コード解析

```cpp
Serial.begin(9600);
```

コンピュータ上で動作するソフトウェアが開発ボードと通信し、ボーレートは9600です。

```cpp
Serial.print(" ");
```

この関数はシリアルポートからデータを出力するために使用され、出力は二重引用符内に含まれる内容です。

```cpp
Serial.println( );
```

この文は上記と似ていますが、**serial.println**は改行を伴います。

```cpp
Serial.println(soundState);
```

シリアルポートはサウンドセンサーの値を出力します。IDEインターフェースで**シリアルモニタ**を開くと、センサーの出力値が表示されます。

**デモ効果とシリアル出力結果:**

周囲が十分に大きな音を発している場合、LEDモジュールが点灯します。

ブレークアウトガイド

Groveケーブルを使用して、Grove LEDをSeeeduino Lotusのデジタル信号インターフェース**D4**に接続し、GroveサウンドセンサーをSeeeduino Lotusのアナログ信号インターフェース**A2**に接続します。

---

### レッスン7: OLEDにデータを表示する

OLEDディスプレイは、センサーの読み取り値を視覚化するなど、多くの状況で使用できます！

背景情報:

- **Arduinoライブラリとは**

Arduino環境は、他の多くのプログラミングプラットフォームと同様に、ライブラリを使用して拡張できます。ライブラリはスケッチで使用するための追加機能を提供します。たとえば、特定のハードウェアを操作したり、データを操作したりすることができます。スケッチでライブラリを使用するには、**スケッチ** -> **ライブラリを含む** を選択します。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg)

詳細については、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)をご覧ください。

使用するコンポーネント

1. Seeeduino Lotus  
2. Grove OLED  
3. Grove ケーブル（必要に応じて）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

ハードウェア接続

- **モジュール接続:**
  - PCBスタンプホールによるデフォルト接続。
- SeeeduinoをUSBケーブルでコンピュータに接続します。

ソフトウェアコード

- Arduino IDEを開きます。
- **U8g2ライブラリ**をインストールします: **スケッチ** -> **ライブラリを含む** -> **ライブラリを管理...** に移動し、**ライブラリマネージャ**でキーワード "**U8g2**" を検索します。**oliverによるu8g2ライブラリ**を選択し、インストールをクリックします。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

- 以下のコードをコピーし、構文エラーを確認するために「検証」をクリックします。エラーがないことを確認したら、コードをアップロードします。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // リセットなしのOLEDディスプレイ用

void setup(void) {
  //u8x8.setBusClock(100000);  // 他のモジュールをブレークアウトする場合、この行を有効にしてください
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

!!!注意  
すべてのモジュールをブレークアウトし、Grove OLEDを個別に使用する場合、このコードでは動作しない可能性があります。その場合、このセクションの最後にあるブレークアウトガイドを参照してください。

**コード解析**

```cpp
#include <>
```

**説明:**

`#include`は、スケッチに外部ライブラリを含めるために使用されます。これにより、プログラマーは標準Cライブラリ（事前に作成された関数のグループ）や、Arduino専用に作成されたライブラリにアクセスできます。

`#include`にはセミコロンの終端子がなく、追加するとコンパイラが難解なエラーメッセージを出力します。

```cpp
#include <U8x8lib.h>
```

**#include**はヘッダーファイルを導入する命令です。ここではU8x8lib.hライブラリを使用しています。

```cpp
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  
```

**注意**

他のモジュールを分離してOLEDのみを使用する場合、ソフトウェアI2Cを使用する必要があります：

```cpp
// U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  

U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE); 
```

**説明:**

オブジェクトが宣言されると、ライブラリの関数を使用できます。

```cpp
u8x8.begin();
```

**説明:**

Arduino環境でのディスプレイの簡易セットアップ手順です。適切なU8g2コンストラクタの選択についてはセットアップガイドを参照してください。

**構文:**

u8x8.begin()

u8g2ライブラリを初期化します。

```cpp
u8x8.setFlipMode(1);
```

**説明:**

一部のディスプレイは内部フレームバッファの180度回転をサポートしています。このハードウェア機能はこの手順で制御できます。重要: フリップモードを変更した後はディスプレイ全体を再描画してください。最初にディスプレイをクリアし、次にフリップモードを変更し、最後にコンテンツを再描画するのが最適です。画面上の既存のコンテンツに対して結果は未定義になります。

**構文:**

u8x8.setFlipMode(**mode**)

**パラメータ:**

**mode**: `0` または `1`

ディスプレイを180度回転させます。

```cpp
u8x8.setCursor();
```

**説明:**

print関数のカーソルを定義します。print関数の出力はこの位置から開始されます。

**構文:**

u8x8.setCursor(**x, y**)

**パラメータ:**

**x, y**: print関数のカーソルの列/行位置。

描画カーソル位置を設定します。

```cpp
u8x8.setFont()
```

**説明:** 

グリフおよび文字列描画関数のためのu8x8フォントを定義します。

**構文:**

u8x8.setFont(**font_8x8**)

ディスプレイのフォントを設定します。

```cpp
u8x8.print();
```

OLEDにコンテンツを描画します。

**デモ効果とシリアルプリント結果:**

OLEDディスプレイに「Hello World」を表示します。

**U8g2ライブラリリファレンス**

U8g2ライブラリに関する詳細情報が必要な場合は、[こちら](https://github.com/olikraus/u8g2/wiki/u8g2reference)を参照してください。

ブレークアウトガイド

Groveケーブルを使用してOLEDをSeeeduino Lotusの**I2C**インターフェースに接続します（注意: I2Cのデフォルトアドレスは0x78です）。

!!!注意 
    - 他のモジュールを分離してOLEDを使用し、それが動作しない場合、または最速のOLED I2C（デフォルト: 40KHZ）を使用したい場合は、以下の手順に従ってください：

  「このPC」-> ドキュメント -> Arduino -> libraries -> U8g2 -> src -> U8x8lib.cpp -> 1334行目までスクロール -> この行を削除または無効化 -> ファイルを保存。

  ```CPP
  Wire.setClock(u8x8->bus_clock);   // この行を削除または無効化
  ```
  

 または、バスロックを100000に設定してセットアップに追加します。
```cpp
void setup(void) {
  u8x8.setBusClock(100000); // I2Cバスクロックを制限するための設定
  u8x8.begin();
  u8x8.setFlipMode(1);
}
```

### レッスン8: 周囲の温度と湿度を検出する

周囲の温度と湿度について考えたことはありますか？正確な数値を知りたいですか？温度に応じてスカートやコートを着るかどうかを決めたいですか？温度計を作りましょう！

背景情報:

- **プロトコル信号（I2C）とは**

**プロトコル信号:** 使用するプロトコル信号はI2Cです。ここではI2Cについて簡単に紹介します。I2Cバスは、デバイス間の情報接続に2本のワイヤのみを必要とします: SDA（シリアルデータライン）とSCL（シリアルクロックライン）。

これらの2本のラインは双方向のI/Oラインであり、バス転送データを開始するために使用され、転送デバイスを開くためのクロックを生成します。この時点でアドレス指定されるデバイスはスレーブデバイスと見なされます。

バス上のマスターとスレーブ（送信者と受信者）の関係は一定ではなく、データ転送の方向によって異なります。ホストがスレーブデバイスにデータを送信したい場合、ホストは最初にスレーブデバイスをアドレス指定し、次にスレーブデバイスにデータを積極的に送信し、最後にホストによってデータ転送を終了します。ホストがスレーブからデータを受信する場合、スレーブは最初にマスターによってアドレス指定されます。

その後、ホストはデバイスから送信されたデータを受信し、ホストは受信プロセスを終了します。この場合、ホストはタイミングクロックを生成し、データ転送を終了する責任を負います。

- **実践:** OLEDディスプレイに現在の周囲温度と湿度を表示させます。

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove 温度および湿度センサー
    4. Groveケーブル（分離されている場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピュータに接続します。

**注意**

一部のアップグレードキットにはDHT20が装備されています。キットの湿度および温度検出器が黒の場合、その検出器はDHT20であり、その例コードはDHT11の後に記載されています。

ソフトウェアコード（DHT11）

    - Arduino IDEを開きます。
    - 必要な[ライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)をダウンロードしてインストールします。
    - 以下のコードをコピーし、構文エラーを確認するために「Verify」をクリックします。エラーがないことを確認し、コードをアップロードできます。

```Cpp
// 温度および湿度センサー
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     // 接続されているピン
#define DHTTYPE DHT11   // DHT 11 
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(9600); 
  Serial.println("DHTxx test!");
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}

void loop(void) {

  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
  
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

ソフトウェアコード（DHT20）

    - Arduino IDEを開きます。
    - 必要な[ライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)をダウンロードしてインストールします。
    - 以下のコードをコピーし、構文エラーを確認するために「Verify」をクリックします。エラーがないことを確認し、コードをアップロードできます。

```cpp
//温度と湿度センサー
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>
#include "Wire.h"

#define DHTTYPE DHT20   // DHT 20

DHT dht(DHTTYPE);  
#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
 
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif
 
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
    debug.begin(115200);
    debug.println("DHTxxテスト開始！");
    Wire.begin();
 
    /*WIOリンクを使用する場合、電源ピンをプルアップする必要があります。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);
 
    dht.begin();
    u8x8.begin();
    u8x8.setPowerSave(0);  
    u8x8.setFlipMode(1);
}
 
void loop(void) {
 
  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
 
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("温度:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("湿度:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

右上の「モニター」をクリックして結果を確認してください。

コード解析

```cpp
float temp, humi;
```

センサーの読み取り値を格納する変数を定義します。

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**説明:**

センサーから温度と湿度の値を読み取るために使用される関数。

**構文:**

**dht.readTemperature()** および **dht.readHumidity()**。戻り値の型: float。

これらの関数を呼び出して温度と湿度を読み取り、定義された変数に格納します。

**デモ効果とシリアルプリント結果:**

周囲の温度と湿度がOLED画面に表示されます。

ブレークアウトガイド

Groveケーブルを使用してOLEDをSeeeduino Lotusの**I2C**インターフェースに接続します（注: I2Cのデフォルトアドレスは0x78）。Grove温度と湿度センサーをSeeeduino Lotusのデジタル信号インターフェース**D3**に接続します。

---

### レッスン9: 周囲の気圧を測定する

Grove気圧センサー(BMP280)は、Bosch BMP280高精度・低消費電力デジタル気圧計用のブレークアウトボードです。このモジュールは、温度と気圧を正確に測定するために使用できます。気圧は高度によって変化するため、場所の概算高度も測定できます。

使用する部品
1. Seeeduino Lotus
2. Grove気圧センサー
3. Groveケーブル（ブレークアウトの場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

ハードウェア接続
- **モジュール接続:**
    - PCBスタンプホールによるデフォルト接続。
- SeeeduinoをUSBケーブルでコンピュータに接続します。

---

ソフトウェアコード

- Arduino IDEを開きます。
- **Grove Barometer Sensorライブラリ**をインストールします: **スケッチ** -> **ライブラリを含める** -> **ライブラリマネージャ...** に移動し、**Grove BMP280**というキーワードを**ライブラリマネージャ**で検索してインストールします。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

- 以下のコードをコピーし、構文エラーを確認するために「検証」をクリックします。エラーがないことを確認したら、コードをアップロードできます。
- このプログラムでは、気圧センサー情報がセンサーからSeeeduinoにI2Cバスを介して送信され、Seeeduinoがそれをシリアルモニターに表示します。**シリアルモニター**を開いて結果を確認してください。

```cpp
//気圧検出
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("デバイスが接続されていないか、故障しています！");
    }
}

void loop() {

    float pressure;

    //温度を取得して表示
    Serial.print("温度: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // Arduinoの元の仕様では特殊記号をサポートしていないため、摂氏の単位を表示

    //気圧データを取得して表示
    Serial.print("気圧: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //高度データを取得して表示
    Serial.print("高度: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//異なるタイミングの出力間に行を追加

    delay(1000);
}
```

コード解析

```cpp
#include <Wire.h>
```

**#include**はヘッダーファイルを導入する命令です。ここではWire.hライブラリを使用します。このライブラリはArduino IDEに含まれています。

```cpp
#include "Seeed_BMP280.h"
```

現在のパスにあるSeeed_BMP280.hヘッダーファイルを導入します。

```cpp
if (!bmp280.init()) {
    Serial.println("デバイスが接続されていないか、故障しています！");
}
```

**説明:**

bmp280.init()を使用して気圧センサーを初期化します。さらに、if条件を使用して正常に開始されたかどうかを確認し、メッセージをスキップします。初期化に問題がある場合は、メッセージを表示します。!はプログラミングにおいてNOTを意味します。

**構文:**

**bmp280.init()**

気圧センサーが正常に開始されなかった場合、シリアルモニターにエラーを出力します。

```cpp
Serial.print(bmp280.getTemperature());
```

**説明:**

センサーから温度値を読み取るために使用される関数。

**構文:**

**bmp280.getTemperature()**。戻り値の型: float

温度データをシリアルモニターに表示します。

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**説明:**

センサーから気圧値を読み取るために使用される関数。

**構文:**

**bmp280.getPressure()**。戻り値の型: float

現在の気圧を表示します。

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**説明:**

気圧値を取得し、高度に変換します。

**構文:**

bmp280.calcAltitude(**float**)。戻り値の型: float

**パラメータ:**

**float**: 気圧値。

高度を表示します。

**デモ効果とシリアルプリント結果:**

気圧の読み取り値がシリアルモニターに表示されます。

ブレークアウトガイド

Groveケーブルを使用してGrove気圧センサーをSeeeduino Lotusの**I2C**インターフェースに接続します（注: I2Cのデフォルトアドレスは0x77または0x76）。

---

### レッスン10: 動きを感知する


これは最後のセンサーである三軸加速度計です。このモジュールを使用すると、設計に簡単に動きの監視を追加できます。そのため、動きに基づいて多くの興味深い小さな実験を行うことができます。

- **実践:** 動きが検出されると、ブザーが警告を発し、物体が動いていることを示します。



使用する部品

    1. Seeeduino Lotus
    2. Grove 3軸加速度計
    3. Groveケーブル（必要に応じて）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)



ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピュータに接続します。





ソフトウェアコード

    - Arduino IDEを開きます。
    - [3-Axis Digital Accelerometer( ±2g to 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) をGithubからダウンロードします。**Sketch** > **Include library** > **Add .ZIP library** をクリックして、ライブラリをIDEにインポートします。
    - 以下のコードをコピーし、構文エラーを確認するためにVerifyをクリックします。エラーがないことを確認したら、コードをアップロードできます。
    - このプログラムでは、センサーからSeeeduinoにI2Cバスを介して加速度情報が送信され、Seeeduinoがそれをシリアルモニターに表示します。**シリアルモニター**を開いて結果を確認してください。

```Cpp
//重力加速度
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //ソフトウェアI2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //ハードウェアI2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC初期化
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTRが接続されていません。");
        while (1);
        return;
    }
    //3軸
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());

    delay(500);
}
```



コード解析

```cpp
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;   //ソフトウェアI2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;        //ハードウェアI2C
    #define WIRE Wire
#endif
```

ソフトウェアI2CまたはハードウェアI2Cを使用してモジュールを初期化します。

```cpp
while (!Serial) {};
```

シリアルモニターを開かない場合、コードはここで停止します。シリアルモニターを開いてください。

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**説明:** 加速度計を初期化します。

**構文:** `LIS.begin(Wire, address)`。

**説明:** 加速度計の出力データレートを設定します。

**構文:** `LIS.setOutputDataRate(odr_type_t odr)`。

加速度計を初期化し、出力レートを50Hzに設定します。

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**説明:** 

センサーからX軸の値を読み取るために使用される関数。

**構文:**

**LIS.getAccelerationX()**。戻り値の型: float。

**説明:** 

センサーからY軸の値を読み取るために使用される関数。

**構文:**

**LIS.getAccelerationY()**。戻り値の型: float。

**説明:** 

センサーからZ軸の値を読み取るために使用される関数。
 
**構文:**

**LIS.getAccelerationZ()**。戻り値の型: float。

3軸データをシリアルモニターに表示します。

**デモ効果とシリアルプリント結果:**

3軸加速度計の読み取り値がシリアルモニターに表示されます。

ブレークアウトガイド

Groveケーブルを使用して、Grove 3軸加速度計をSeeeduino Lotusの**I2C**インターフェースに接続します（注: I2Cのデフォルトアドレスは0x19です）。

## ボーナスプロジェクト

### プロジェクト 1: 音楽の動的リズムランプ

- **プロジェクトの説明:** この実験では、ブザーが心地よい音楽を演奏し、LEDライトが音楽の周波数とビートに合わせて点滅するようにします。

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. ブザー
    4. Grove ケーブル（必要に応じて）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピュータに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、[Verify]をクリックして構文エラーを確認します。エラーがないことを確認したら、コードをアップロードします。

```cpp
// 音楽の動的リズムランプ
#define NTD0 -1
#define NTD1 294
#define NTD2 330
#define NTD3 350
#define NTD4 393
#define NTD5 441
#define NTD6 495
#define NTD7 556

#define NTDL1 147
#define NTDL2 165
#define NTDL3 175
#define NTDL4 196
#define NTDL5 221
#define NTDL6 248
#define NTDL7 278

#define NTDH1 589
#define NTDH2 661
#define NTDH3 700
#define NTDH4 786
#define NTDH5 882
#define NTDH6 990
#define NTDH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625

int tune[]=
{
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD3,NTD2,NTD2,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1,
NTD2,NTD2,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD2,
NTD1,NTD2,NTDL5,NTD0,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD4,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1
};

float durt[]=
{
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,0.5,0.5,1,1,
1,0.5,0.5,1,1,
1,1,1,1,
1,1,1,1,
1,1,1,0.5,0.5,
1,1,1,1,
1+0.5,0.5,1+1,
};

int length;
int tonepin=5;
int ledp=4;

void setup()
{
  pinMode(tonepin,OUTPUT);
  pinMode(ledp,OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);
}

void loop()
{
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    digitalWrite(ledp, HIGH); 
    delay(400*durt[x]);
    digitalWrite(ledp, LOW);
    delay(100*durt[x]);
    noTone(tonepin);

  }
  delay(4000);
}
```

コード解析

```cpp
#define NTD
```

ここでは、Dキーの周波数を定義しています。低音、中音、高音に分かれています。

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

注: リズムは1拍、半拍、1/4拍、1/8拍に分かれています。1拍の音符の時間を1とし、半拍は0.5、1/4拍は0.25、1/8拍は0.125と指定します。

```cpp
int tune[]=...
```

スペクトルに基づいて周波数をリスト化します。

```cpp
float durt[]=...
```

スペクトルに基づいて拍をリスト化します。

```cpp
delay(100*durt[x]);
```

LEDライトのオンとオフを制御します。

**デモ効果とシリアル出力結果:**

ブザーがメロディを鳴らし、LEDモジュールが同じ周波数で点滅します。

ブレークアウトガイド

Grove LEDをSeeeduino Lotusのデジタル信号インターフェース **D4** に接続し、ブザーをSeeeduino Lotusのデジタル信号インターフェース **D5** に接続します。

---

### プロジェクト 2: インテリジェント音光誘導デスクランプを作る

- **プロジェクトの説明:** 名前の通り、このプロジェクトでは音と光で制御される小型ランプを作ります。LEDモジュールを出力として使用し、光センサーと音センサーを入力信号として使用します。この方法で、スマートデスクランプの機能を実現できます。周囲の音量が設定値を超えるとLEDが点灯し、または周囲の光強度が設定値を下回るとLEDモジュールが点灯します。

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. 光センサー
    4. 音センサー
    5. Grove ケーブル（必要に応じて）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピュータに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、[Verify]をクリックして構文エラーを確認します。エラーがないことを確認したら、コードをアップロードします。

```cpp
// 光誘導デスクランプ
int soundPin = A2; // アナログ音センサーをアナログに接続
int lightPin = A6; // アナログ光センサーをアナログに接続
int ledPin = 4; // デジタルLEDをデジタルに接続

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // 音センサーの値を読み取る
  int lightState = analogRead(lightPin); // 光センサーの値を読み取る
  // 音センサーの値が500を超えるか、光センサーの値が200未満の場合、ライトが点灯します。
  // それ以外の場合、ライトは消灯します。
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); // "//"を追加して遅延を削除できます
}else{
  digitalWrite(ledPin, LOW);
}
}
```

コード解析

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

括弧内は論理式です。論理式では **&&** と **||** がよく使用されます。一般的な使用法は **if (式1 || 式2)** および **if (式1 && 式2)** です。

**||** は「**または**」を表し、いずれか1つが満たされれば式全体が真となり、if文の条件を満たします。

**&&** は「**かつ**」を意味し、括弧内のすべての式が真である場合にのみ、if{}内の文が実行されます。

**デモ効果とシリアル出力結果:**

周囲の音が十分に大きい場合、または光強度が低い場合、LEDモジュールがより強く点灯します。

ブレークアウトガイド

Grove LEDをSeeeduino Lotusのデジタル信号インターフェース **D4** に接続し、光センサーをSeeeduino Lotusのアナログ信号インターフェース **A1** に接続します。音センサーをGroveケーブルを使用してSeeeduino Lotusのアナログ信号インターフェース **A2** に接続します。

## 自分のモジュールやボードを作成しよう

この学習期間を経て、Arduinoやオープンソースハードウェアについて体系的な理解を得たことでしょう。それなら、さらに一歩進んで、自分自身のモジュールや開発ボードを作ってみませんか？

### EDA

自分のボードを設計するには、モジュールの回路図を設計する必要があります。そのためにはEDAツールが必要です。ここでは、オープンソースのEDAソフトウェアを推奨します。

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/) は、電子設計自動化のための無料ソフトウェアスイートです。電子回路の回路図設計と、それをPCB設計に変換する作業を支援します。回路図キャプチャとPCBレイアウト設計のための統合環境を備えています。このプログラムは、回路図キャプチャとPCBレイアウトをGerber形式で出力する機能を持っています。このスイートはWindows、Linux、macOSで動作し、GNU GPL v3ライセンスの下で提供されています。

- **Upverter**

もし回路図やレイアウトを自分で作成したくない場合でも、Seeedのモジュールを基にしたプロトタイプを統合製品に変換したい場合は、Upverterを試してみることを強くお勧めします。

詳細については、[**Grove Beginner Kit for Arduino Upverter Guide**](https://wiki.seeedstudio.com/ja/Grove-Beginner-Kit-for-Arduino-Upverter-Guide/) をご覧ください。

### PCBサービス

設計が完了したら、[Seeed Fusion PCBAサービス](https://www.seeedstudio.com/fusion_pcb.html)をチェックしてみてください。このサービスは、設計を実際に機能するデバイスに変換するのに役立ちます。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studio には、[Open Parts Library (OPL)](https://www.seeedstudio.com/opl.html) という独自の部品ライブラリがあります。これは、Seeed Fusion PCBAサービス専用に調達された10,000以上の一般的な部品のコレクションです。PCB設計のプロセスをスピードアップするために、SeeedはKiCadやEagle用の部品ライブラリを構築しています。SeeedのPCBA OPLからすべての部品を調達し、[Seeed Fusion PCB Assembly (PCBA)サービス](https://www.seeedstudio.com/fusion_pcb.html)と組み合わせて使用することで、PCBAの生産時間を20営業日からわずか7日間に短縮することができます。

## FAQ

### 1. 個別の電子モジュールを取り外して使用するにはどうすればよいですか？
![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove1.jpg)

Grove Beginner Kit For Arduinoをよく見ると、各個別モジュールとバックプレーンの間に3つの小さな穴があることがわかります。必要なのは、斜めのペンチを使って小さな穴の周りでモジュールからPCBバックプレーンを切り取ることだけです。

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove2.jpg)

---

**注意: 小さな穴の周囲に沿って慎重に切断してください。小さな穴を切断しないようにしてください（内部配線の短絡を防ぎ、モジュールの損傷を防ぐため）。もし誤って小さな穴を切断してしまった場合は、ナイフを使って小さな穴をきれいにし、短絡を防いでください。**

---

​![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove3.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

1. [**Grove Beginner Kit for Arduino Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. [**Grove Beginner Kit for Arduino 回路設計ファイル**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

3. **モジュールライブラリ（Github 上）:**
      - [OLED ディスプレイ](https://github.com/olikraus/U8g2_Arduino)
      - [温湿度センサー](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
      - [気圧センサー](https://github.com/Seeed-Studio/Grove_BMP280)
      - [3軸加速度センサー](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**センサーのデータシート**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**初期 Arduino ファームウェアデモ**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Grove Beginner Kit For Arduino リソース一式 (20200401) [7z]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

7. [**Grove Beginner Kit For Arduino FCC + SDOC 証明書**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/FCC-SDOC-Certificates.zip)

8. [**Grove Beginner Kit For Arduino Codecraft グラフィカルプログラミングコース web v7**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Codecraft-Graphical-Programming-Course-web-v7.pdf)

## さらなる学習

- [IoT ライブデータ予測のための LSTM](https://github.com/256ericpan/LSTM_IoT)

- [ノーコードプログラミングによる生物学初心者向けガイド](https://www.biomaker.org/nocode-programming-for-biology-handbook)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>