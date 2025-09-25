---
description: Grove初心者キット for Arduino
title: Grove初心者キット for Arduino
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Beginner-Kit-For-Arduino
last_update:
  date: 2/14/2023
  author: hushuxu
---

# Grove初心者キット for Arduino

Grove初心者キット for Arduinoは、初心者にとって最高のArduino初心者キットの一つです。Arduino互換ボード1枚と10個の追加Arduinoセンサーが含まれており、すべて一体型PCB設計になっています。**すべてのモジュールはPCBスタンプホールを通じてSeeeduinoに接続されているため、接続にGroveケーブルは必要ありません**。もちろん、モジュールを取り外してGroveケーブルでモジュールを接続することも可能です。このGrove初心者キット for Arduinoで、お好みのArduinoプロジェクトを構築できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## ハードウェア概要

**旧バージョン**（2025年10月以前）↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg" style={{width:1000, height:'auto'}}/></div>

**新バージョン**（2025年10月以降）↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip 新旧バージョンの更新について
旧バージョンと比較して、この新リリースでは一部の廃止されたセンサーが更新されています。DHT11温湿度センサーはDHT20温湿度センサーに置き換えられ、BMP280気圧センサーはSPA06-003気圧センサーに置き換えられました。
:::

**注意：** 寸法 - 17.69 *11.64* 1.88cm

1. **[Grove - LED](https://wiki.seeedstudio.com/ja/Grove-Red_LED/)：** シンプルなLEDモジュール
2. **[Grove - ブザー](https://wiki.seeedstudio.com/ja/Grove-Buzzer/)：** ピエゾブザー
3. **[Grove - OLEDディスプレイ 0.96"](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-0.96-SSD1315/)：** 128×64ドット解像度、高輝度、自発光、高コントラスト比、コンパクト設計の大画面、低消費電力。
4. **[Grove - ボタン](https://wiki.seeedstudio.com/ja/Grove-Button/)：** モーメンタリープッシュボタン
5. **[Grove - ロータリーポテンショメーター](https://wiki.seeedstudio.com/ja/Grove-Rotary_Angle_Sensor/)：** 調整可能なポテンショメーター
6. **[Grove - 光センサー](https://wiki.seeedstudio.com/ja/Grove-Light_Sensor/)：** 周囲の光強度を検出
7. **[Grove - 音センサー](https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor/)：** 周囲の音強度を検出
8. **[Grove - 温湿度センサー](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/)：** 周囲の温度と湿度の値を検出。旧バージョンではDHT11センサーを使用し、2025.10以降のバージョンではDHT20センサーを使用。
9. **Grove - 気圧センサー：** 周囲の大気圧を検出

- 旧バージョンでは[BMP280](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP280/)を使用。
- 2025年10月付けの新バージョンでは[SPA06-003](https://wiki.seeedstudio.com/ja/grove_barometer_sensor_spa06_003)を使用。

10. **[Grove - 3軸加速度センサー](https://wiki.seeedstudio.com/ja/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR)：** オブジェクトの加速度を検出
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/)：** Groveポート付きArduino互換ボード

**注意：**
        デフォルトでは、GroveモジュールはPCBスタンプホールを介してSeeeduinoに接続されています。これは、分離していない場合、Groveケーブルを使用して接続する必要がないことを意味します。デフォルトのピンは以下の通りです：

|モジュール|インターフェース|ピン/アドレス|
|---|---|---|
|LED|デジタル|D4|
|ブザー|デジタル|D5|
|OLEDディスプレイ 0.96"|I2C|I2C, 0x78(デフォルト)|
|ボタン|デジタル|D6|
|ロータリーポテンショメーター|アナログ|A0|
|光センサー|アナログ|A6|
|音センサー|アナログ|A2|
|温湿度センサー|デジタル|D3|
|気圧センサー|I2C|I2C, 0x77(デフォルト) / 0x76(オプション)|
|3軸加速度センサー|I2C|I2C, 0x19(デフォルト)|

### 分離手順

**注意:**
    ナイフを使用する際は手を切らないよう十分注意してください

モジュールを他の場所で使用したい場合は、以下の手順に従ってモジュールを分離することができます！

**ステップ 1**

ナイフまたは鋭利な物を使用して、センサー同士を接続しているスタンプホールを切断します

**ステップ 2**

モジュールを上下に振ると、簡単に外れるはずです！

## パーツリスト

|モジュール|数量|
|---|---|
|**センサー**||
|温湿度センサー|x1|
|3軸加速度センサー|x1|
|気圧センサー|x1|
|光センサー|x1|
|音センサー|x1|
|**入力モジュール**||
|ロータリーポテンショメーター|x1|
|ボタン|x1|
|**出力モジュール**||
|LED|x1|
|ブザー|x1|
|**ディスプレイモジュール**||
|OLEDディスプレイ|x1|
|**Grove ケーブル**|x6|
|**Micro USBケーブル**|x1|

## 学習目標

- オープンソースハードウェアシステムの基礎。
- 基本的なArduinoプログラミング。
- センサーの通信原理と方法。
- オープンソースハードウェアプロジェクトの実践的な実装。

### プラグアンドプレイ開封デモ

Grove Beginner Kitには、プラグアンドプレイの開封デモが付属しており、最初にボードに電源を接続すると、すべてのセンサーを一度に体験する機会が得られます！ボタンとロータリーポテンショメーターを使用して、各センサーのデモを体験してください！

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **スクロール** -> ロータリーポテンショメーターを回転
- **選択** -> ボタンを短押し
- **現在のデモを終了** -> ボタンを長押し

ブザーとLEDモジュールはキープロンプトに使用されます。

## Arduinoを始める方法

### Arduino IDEのインストール

- **Arduino IDE**は、Arduinoの統合開発環境で、単一チップマイクロコンピューターのソフトウェアプログラミング、ダウンロード、テストなどに使用されます。
- お使いのオペレーティングシステム用の[Arduino IDE](https://www.arduino.cc/en/Main/Software)をここからダウンロードしてインストールしてください。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)

### USBドライバーのインストール

- ArduinoはUSBケーブルを介してPCに接続されます。USBドライバーは、Arduinoで使用しているUSBチップの種類によって異なります。*注意：USBチップは通常、開発ボードの裏面に印刷されています。*

  - [CP2102 USBドライバー](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)をダウンロードしてください。**注意：**お使いのOSに応じてダウンロードしてください。
  - ドライバーのインストールが完了したら、USBケーブルでArduinoをPCのUSBポートに接続します。
    - **Windowsユーザーの場合：**`マイコンピューター` -> `プロパティ` -> `ハードウェア` -> `デバイスマネージャー`で確認できます。`COM`が表示されます。
    - **Mac OSユーザーの場合：**左上角の``に移動し、`このMacについて` -> `システムレポート...` -> `USB`を選択します。CP2102 USBドライバーが表示されるはずです。
  - ドライバーがインストールされていない場合、またはドライバーが正しくインストールされていない場合（チップモデルと一致しない）、デバイスマネージャーで「不明なデバイス」として表示されます。この時点で、ドライバーを再インストールする必要があります。

### Arduino IDEの起動

1.PCで**Arduino IDE**を開きます。
2.`ツール` -> `ボード`-> `Arduino AVRボード`-> `Arduino Uno`をクリックして、正しい開発ボードモデルを選択します。ボードとして**Arduino Uno**を選択してください。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/uno_board.jpg)

3.`ツール` -> `ポート`をクリックして、正しいポート（前のステップでデバイスマネージャーに表示されたシリアルポート）を選択します。この場合、`COM11`が選択されています。**Mac OSユーザーの場合**、`/dev/cu.SLAB_USBtoUART`になるはずです。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.jpg)

4.新しいArduinoファイルを作成し、`Hello.ino`と名前を付け、以下のコードをコピーしてください：

```Cpp
void setup() {
  Serial.begin(9600); // initializes the serial port with a baud rate of 9600
}
void loop() {
  Serial.println("hello, world"); // prints a string to a serial port
  delay(1000); //delay of 1 second
}
```

5.Arduino IDEの左上角に、**Verify（検証）とUpload（アップロード）**の2つのボタンがあります。まず、Verifyボタン（✓）を押してコンパイルします。コンパイルが成功したら、uploadボタン（→）を押します。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.`Tools` -> `Serial Monitor`に移動するか、右上角の**Serial Monitor**（虫眼鏡マーク）をクリックすると、プログラムの実行結果を確認できます：

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**注意：** USBドライブからポータブル版Arduino IDEをインストールした場合、**Files** -> **Sketch Book**ですべてのモジュールデモを見つけることができ、すべてのモジュールライブラリもArduino IDEに事前インストールされています！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png" style={{width:600, height:'auto'}}/></div>

**注意：**
        すべてのモジュールは単一の回路基板上に事前配線されているため、ケーブルやはんだ付けは不要です。ただし、モジュールを分離してGroveケーブルで接続したい場合は、Breakout Guideを確認してください。

## レッスンガイド

### レッスン1：LEDの点滅

「Hello world」プログラムの出力が完了しました。次に、LEDモジュールを点灯させる方法を学びましょう。制御システムの3つの基本コンポーネント：入力、制御、出力を知っています。しかし、LEDの点灯は出力のみを使用し、入力は使用しません。Seeduinoは制御ユニット、LEDモジュールは出力ユニットで、出力信号はデジタル信号です。

背景情報：

- **デジタル信号とは**

**デジタル信号：** デジタル信号とは、振幅の値が離散的で、振幅が有限個の値に制限される信号を指します。私たちのコントローラーでは、デジタル信号には2つの状態があります：LOW（0V）は0、HIGH（5V）は1です。したがって、LEDにHIGH信号を送信すると点灯させることができます。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)

使用コンポーネント
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove ケーブル（分離した場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)

ハードウェア接続
    - **モジュール接続**
        - PCBスタンプホールによるデフォルト接続。
    - USBケーブルを通してSeeduidoをコンピューターに接続します。

-ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//LED Blink
//The LED will turn on for one second and then turn off for one second
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

コード解析

```cpp
setup(){
}
```

`setup()` 関数は、スケッチが開始されるときに呼び出されます。変数の初期化、ピンモードの設定、ライブラリの使用開始などに使用します。`setup()` 関数は、Arduinoボードの電源投入またはリセット後に一度だけ実行されます。

```cpp
loop(){
}
```

`setup()` 関数を作成した後、初期化と初期値の設定を行い、`loop()` 関数はその名前が示す通りの動作を正確に実行し、連続的にループして、プログラムが変化し応答することを可能にします。これを使用してArduinoボードを能動的に制御します。

```cpp
int ledPin = 4;
```

**説明:**

値をint型データに変換します。

**構文:**

int(**x**) または (int)**x** (C言語スタイルの型変換)

**パラメータ:**

**x**: 値。許可されるデータ型: 任意の型。

ledPinという名前の変数に`int`型の4を代入します。

```cpp
pinMode(ledPin, OUTPUT);
```

**説明:**

指定されたピンを入力または出力として動作するように設定します。ピンの機能の詳細については、デジタルピンのページを参照してください。

Arduino 1.0.1以降、`INPUT_PULLUP`モードで内部プルアップ抵抗を有効にすることが可能です。さらに、`INPUT`モードは内部プルアップを明示的に無効にします。

**構文:**

pinMode(**pin, mode**)

**パラメータ:**

**pin**: モードを設定するArduinoピン番号。

**mode**: `INPUT`、`OUTPUT`、または`INPUT_PULLUP`。

ledPinを出力モードに設定します。

```cpp
digitalWrite(ledPin, HIGH);
```

**説明:**

デジタルピンに `HIGH` または `LOW` の値を書き込みます。

ピンが pinMode() で OUTPUT として設定されている場合、その電圧は対応する値に設定されます：`HIGH` の場合は 5V（3.3V ボードでは 3.3V）、`LOW` の場合は 0V（グランド）。

ピンが INPUT として設定されている場合、digitalWrite() は入力ピンの内部プルアップを有効（HIGH）または無効（LOW）にします。内部プルアップ抵抗を有効にするために pinMode() を `INPUT_PULLUP` に設定することをお勧めします。詳細については、デジタルピンのチュートリアルを参照してください。

pinMode() を OUTPUT に設定せず、ピンに LED を接続した場合、digitalWrite(HIGH) を呼び出すと LED が暗く見える場合があります。明示的に pinMode() を設定しないと、digitalWrite() は内部プルアップ抵抗を有効にし、これが大きな電流制限抵抗として機能します。

**構文:**

digitalWrite(**pin, value**)

**パラメータ:**

**pin**: Arduino のピン番号。

**value**: `HIGH` または `LOW`。

ledPin を出力として設定すると、HIGH はピンにハイレベルを送信することを意味し、LED が点灯します。

```cpp
digitalWrite(ledPin, LOW);
```

LEDを出力として設定した場合、lowはピンに低レベルを送信することを意味し、LEDが消灯します。

```cpp
delay(1000);
```

**説明:**

プログラムを指定されたパラメータの時間（ミリ秒単位）だけ一時停止します。（1秒は1000ミリ秒です。）

**構文:**

delay(**ms**)

**パラメータ:**

**ms**: 一時停止するミリ秒数。許可されるデータ型: unsigned long。

プログラムを1000ms（1秒）遅延させます。

**デモ効果とシリアル出力結果:**

LEDモジュールは1秒点灯し、1秒消灯します。

**LED輝度調整:**

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>
  <br />
</div>

Grove LEDモジュールには、**ドライバーで調整できる可変抵抗器があります。** それを回してLEDをより明るく光らせましょう！

分離ガイド

モジュールがボードから分離されている場合は、Grove ケーブルを使用して **Grove LED** をSeeeduino Lotusのデジタルインターフェース **D4** に接続してください。

### レッスン2: ボタンを押してLEDを点灯させる

最初に知っておく必要があることは、ボタンの入力はデジタル信号であり、0または1の2つの状態しかないということです。そのため、これら2つの状態に基づいて出力を制御できます。

- **実習:** ボタンを使用してLEDモジュールをON/OFFする

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Button
    4. Grove ケーブル（分離されている場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoはUSBケーブルでコンピュータに接続されます。

- **ハードウェア分析**:
  - 入力: ボタン
  - 制御: Seeeduino
  - 出力: LEDモジュール

センサーとLEDの両方がデジタル信号を使用するため、デジタルインターフェースに接続する必要があります。

- **ソフトウェアコード**:
  - Arduino IDEを開きます。
  - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//Button to turn ON/OFF LED
//Constants won't change. They're used here to set pin numbers:
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  4;      // the number of the LED pin

// variables will change:
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
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
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

指定されたデジタルピンから値を読み取ります。`HIGH` または `LOW` のいずれかです。

**構文:**

digitalRead(**pin**)

**パラメータ:**

**pin**: 読み取りたいArduino `pin` 番号

この関数はデジタルピンの状態を読み取るために使用され、HIGH または LOW のいずれかです。ボタンが押されると状態は HIGH になり、そうでなければ LOW になります。

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**説明:**

if…​else文は、複数のテストをグループ化することで、基本的なif文よりもコードの流れをより詳細に制御できます。else節（存在する場合）は、if文の条件がfalseになった場合に実行されます。elseは別のifテストに続けることができるため、複数の相互排他的なテストを同時に実行できます。

各テストは、true条件に遭遇するまで次のテストに進みます。true条件が見つかると、それに関連するコードブロックが実行され、プログラムはif/else構造全体に続く行にスキップします。すべてのテストがtrueでない場合、デフォルトのelseブロックが存在すれば実行され、デフォルトの動作を設定します。

else ifブロックは、終端のelseブロックありまたはなしで使用でき、その逆も可能であることに注意してください。このようなelse if分岐は無制限に許可されます。

**構文:**

```cpp
if (condition1) {
  // do Thing A
}
else if (condition2) {
  // do Thing B
}
else {
  // do Thing C
}
```

この文の使用方法は：括弧内の論理式が真の場合、**if** の後の中括弧内の文を実行し、そうでなければ **else** の後の中括弧内の文を実行します。ボタンの状態がハイの場合、LED ピンはハイレベルを出力して LED をオンにし、そうでなければ LED をオフにします。

**デモ効果とシリアルプリント結果：**

ボタンを押すと LED モジュールがオンになります。

ブレイクアウトガイド

Grove ケーブルを使用して Grove LED を Seeeduino Lotus のデジタルインターフェース **D4** に接続します。Grove ボタンをデジタルインターフェース **D6** に接続します。

### レッスン 3: 点滅の周波数を制御する

前のセクションでは、ボタンには ON/OFF 状態の 2 つの状態しかなく、0V と 5V に対応することを学びましたが、実際には、0V と 5V だけでなく、多くの状態が必要になることがよくあります。その場合、アナログ信号を使用する必要があります！回転ポテンショメータは、アナログ信号を使用する典型的な例です。

背景情報：

- **アナログ信号とは**

**アナログ信号：** 時間と値において連続的に変化する信号で、信号の振幅、周波数、または位相がいつでも連続的に変化します。現在の放送音声信号や画像信号などがその例です。アナログ信号には正弦波や三角波などがあります。マイクロコントローラのアナログピンは 0V から 5V の間で、0 から 1023 の範囲にマッピングされ、1023 が 5V に、512 が 2.5V にマッピングされます。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)

使用するコンポーネント
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 回転スイッチ
    4. Grove ケーブル（ブレイクアウトした場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)

ハードウェア接続
    - **モジュール接続：**
        - PCB スタンプホールによるデフォルト接続。
    - Seeeduino を USB ケーブルでコンピュータに接続します。

- **ハードウェア解析：**

  - 入力：回転ポテンショメータ
  - 制御：Seeeduino Lotus
  - 出力：LED モジュール

入力はアナログ信号なので、アナログ信号インターフェースに接続し、LED モジュールはデジタル信号インターフェースに接続します。

ソフトウェア

    - Arduino IDE を開きます。
    - 以下のコードをコピーし、Verify をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//Rotary controls LED
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
int rotaryValue = 0;  // variable to store the value coming from the rotary

void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // read the value from the sensor:
  rotaryValue = analogRead(rotaryPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(rotaryValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(rotaryValue);
}
```

コード解析

```cpp
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
```

**説明:**

rotatePin と ledPin を異なる方法で定義していることに気づくかもしれません。これは、ロータリーポテンショメータがアナログ信号を生成し、LEDがデジタル信号によって制御されるためです。

**アナログピンを定義する場合**、A + ピン番号を使用します（例：ここでは `A0`）。

**デジタルピンを定義する場合**、ピン番号のみを使用します（例：ここでは `4`）。

```cpp
rotaryValue = analogRead(rotaryPin);
```

**説明:**

指定されたアナログピンから値を読み取ります。Arduinoボードには、マルチチャンネルの10ビットアナログ・デジタル変換器が搭載されています。これは、0と動作電圧（5Vまたは3.3V）の間の入力電圧を0から1023の整数値にマッピングすることを意味します。例えば、Arduino UNOでは、読み取り間の分解能は次のようになります：5ボルト / 1024単位、つまり単位あたり0.0049ボルト（4.9 mV）です。

**構文:**

analogRead(**pin**)

**パラメータ:**

**pin**: 読み取るアナログ入力ピンの名前（ほとんどのボードでA0からA5）。

**戻り値:** ピンでのアナログ読み取り値。アナログ・デジタル変換器の分解能に制限されます（10ビットの場合は0-1023、12ビットの場合は0-4095）。データ型: int。

この関数は、アナログピン（ロータリーセンサーの位置）の値を読み取るために使用され、値の範囲は0 ~ 1023です。

```cpp
delay(rotaryValue);
```

遅延関数、遅延のミリ秒持続時間は括弧内の値です。この値はノブピンから読み取られるアナログ信号の値であるため、遅延時間はノブで制御できます。

**デモ効果とシリアルプリント結果：**

ポテンショメータを回すとLEDの点滅周波数が変わります。

ブレイクアウトガイド

Groveケーブルを使用してLEDをSeeeduino LotusのデジタルインターフェースD4に接続し、GroveケーブルでGrove回転スイッチをアナログ信号インターフェースA0に接続します。

### レッスン4：ブザーをビープ音で鳴らす

LEDモジュールと同様に、ブザーも出力モジュールですが、光る代わりにビープ音を発生させます。これは指示目的で多くの状況で使用できます。ブザーを使って音を生成する方法を学びましょう！

背景情報：

- **アクティブブザーとパッシブブザーの違いは何ですか**

 ブザーには2つのタイプがあり、一つは**アクティブ**で、もう一つは**パッシブ**です。アクティブブザーとパッシブブザーの両方が電子機器で音を出すために使用されます。

  **アクティブブザー**は内部発振源を持ち、電源が供給されるとブザーが音を出します。アクティブブザーは、コンピュータ、プリンタ、コピー機、アラーム、電子玩具、自動車電子機器、電話、タイマー、その他の電子製品の音響装置で広く使用されています。

  **パッシブブザー**は内部発振源がなく、**方形波**と**異なる周波数**で駆動する必要があります。電磁スピーカーのように動作し、変化する入力信号が自動的にトーンではなく音を生成します。

 <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

このキットでは、**Grove-ブザーはパッシブブザー**なので、制御するためにAC信号が必要です。これは次の質問につながります：ArduinoでSquare Wave（AC信号）をどのように生成するか！簡単な方法はPWMを使用することです。

- **PWMとは何ですか**

**パルス幅変調（PWM）**は、デジタル手段でアナログ結果を得る技術です。デジタル制御を使用して方形波、つまりオンとオフの間で切り替わる信号を作成します。このオンオフパターンは、信号がオンに費やす時間とオフに費やす時間の割合を変更することで、フルオン（5ボルト）とオフ（0ボルト）の間の電圧をシミュレートできます。「オン時間」の持続時間はパルス幅と呼ばれます。さまざまなアナログ値を得るには、そのパルス幅を変更または変調します。このオンオフパターンを十分に速く繰り返すと、結果として信号がAC信号として0Vと5Vの間の安定した電圧であるかのようになります。*参考：[Arduino](https://www.arduino.cc/en/tutorial/PWM)*。このPWM信号は、パッシブブザーを簡単に制御するために使用できます。

ArduinoでPWM信号を生成するには、DC信号を生成する`digitalWrite()`とは対照的に、**`analogWrite()`**を使用できます。

Seeduinoには「~」記号でマークされた6つのデジタルピンがあり、これはPWM信号を送信できることを意味します：3、5、6、9、10、11。これらはPWMピンと呼ばれます。

関連コンポーネント

    1. Seeeduino Lotus
    2. Grove ブザー
    3. Grove ケーブル（ブレイクアウト時）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)

ハードウェア接続

    - **モジュール接続**
        - PCBスタンプホールによるデフォルト接続。
    - USBケーブルを通してSeeduinoをコンピュータに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、「検証」をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
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

コード解析

```cpp
analogWrite(BuzzerPin, 128);
```

**説明:**

ピンにアナログ値（PWM波）を書き込みます。LEDを様々な明るさで点灯させたり、モーターを様々な速度で駆動させたりするために使用できます。analogWrite()を呼び出した後、ピンは同じピンで次のanalogWrite()の呼び出し（またはdigitalRead()やdigitalWrite()の呼び出し）まで、指定されたデューティサイクルの安定した矩形波を生成します。

**構文:**

analogWrite(**pin, value**)

**パラメータ:**

**pin**: 書き込み先のArduino `pin`。許可されるデータ型: int。

**value**: デューティサイクル: `0`（常にオフ）から`255`（常にオン）の間。許可されるデータ型: int。

ブザーにアナログ値（PWM波）を書き込みます。

**デモ効果とシリアルプリント結果:**

ブザーがビープ音を鳴らします。

ブレイクアウトガイド

Groveケーブルを使用してGroveブザーをSeeeduino Lotusのデジタルインターフェース**D5**に接続します。

-----

PWM使用法

PWMの使用方法を学んだので、PWMを使用してパッシブブザーを制御することに加えて、PWMを使用してモーターの速度や**LEDライトの明るさ**などを制御することもできます。

下図に示すように、`analogWrite()`を使用してPWM波を生成し、デューティサイクルの割合が高いほど、LEDは明るくなります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png" /></div>

ただし、Grove Beginner KitのLEDモジュールはPWMで直接制御することはできません。なぜなら、LEDモジュールはD4に接続されており、上記で述べたように、PWMピンは3、5、6、9、10、11であり、ピン4はPWMピンではないからです。LEDをPWMで制御したい場合は、それを取り外してGroveケーブルを使用してPWM機能を持つGroveポートに接続する必要があります。

例えば、**Groveケーブルを使用してGrove-LEDをD3に接続**してみましょう:

!!!Note
    D3はGrove-温湿度センサーとも相互接続されているため、この例はGrove-温湿度センサーと一緒に使用することはできません。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png" /></div>

```cpp
int LED = 3; // Cable connection from LED to D3
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //Mapping potentiometer value to PWM signal value
  analogWrite(LED, Value);
}
```

**コードをコンパイルしてアップロード**すると、PWM信号を使用してLEDの明るさを調整できるようになります！

コード解析

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**説明:**

ある範囲から別の範囲に数値を再マッピングします。つまり、**fromLow**の値は**toLow**にマッピングされ、**fromHigh**の値は**toHigh**にマッピングされ、その間の値はその間の値にマッピングされます。

範囲外の値が意図的で有用な場合があるため、値を範囲内に制限しません。範囲の制限が必要な場合は、この関数の前後で`constrain()`関数を使用できます。

どちらの範囲の「下限」も「上限」より大きくても小さくてもよいため、`map()`関数は数値の範囲を逆転させるために使用できます。例えば

**y = map(x, 1, 50, 50, 1);**

この関数は負の数もうまく処理するため、次の例

**y = map(x, 1, 50, 50, -100);**

も有効で正常に動作します。

map()関数は整数演算を使用するため、数学的に分数を生成すべき場合でも分数は生成されません。小数の余りは切り捨てられ、四捨五入や平均化は行われません。

**構文:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**パラメータ:**

**value**: マッピングする数値。

**fromLow**: 値の現在の範囲の下限。

**fromHigh**: 値の現在の範囲の上限。

**toLow**: 値の目標範囲の下限。

**toHigh**: 値の目標範囲の上限。

ポテンショメータセンサーのアナログ信号（0から1023）をライトの明度（0から255）にマッピングします。

**デモ効果とシリアルプリント結果:**

ポテンショメータを調整してLEDの明度を調整します。

総じて、PWM機能を使用する場合は、名前の前に「~」記号が付いているピンを選択してください。

### レッスン5: 光感知LEDの作成

光センサーには、光の強度を測定するための感光抵抗器が含まれています。感光抵抗器の抵抗は光の強度の増加とともに減少します。周囲が暗い場合はLEDが点灯し、周囲が明るい場合は消灯したままになります。

以下のセクションでは、Serial Monitorを使用してセンサーからの結果を観察するため、簡単な紹介をします！

背景情報:

- **Serial Monitorとは**

Serial MonitorはArduinoで結果を観察するための便利なツールで、センサーからの結果を印刷したり、一般的なデバッグに非常に有用です。シリアルモニターを介してコントローラーにデータを送り返して特定のタスクを実行することもできます！注意：シリアルデータ転送がコードと一致していることを確認してください。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

**Tools** -> **Serial Monitor**をクリックしてSerial Monitorを開くことができます。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

使用コンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Light Sensor
    4. Grove Cable（分離する場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoはUSBケーブルを介してコンピューターに接続されます。

- **ハードウェア分析:**

  - 入力: Light Sensor
  - 制御: Seeeduino Lotus
  - 出力: LEDモジュール

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認してから、コードをアップロードできます。

```Cpp
// Light Switch
int sensorpin = A6; // Analog input pin that the sensor is attached to
int ledPin = 4;    // LED port
int sensorValue = 0;        // value read from the port
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
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

**Serial Monitor**からも光強度の読み取り値を確認できます。**Tools** -> **Serial Monitor**に移動してください。

コード解析

```cpp
Serial.begin(9600);
```

**説明:**

シリアルデータ伝送のデータレートをビット毎秒（ボー）で設定します。シリアルモニターとの通信では、画面右下のメニューにリストされているボーレートのいずれかを使用してください。ただし、他のレートを指定することも可能です - 例えば、特定のボーレートを必要とするコンポーネントとピン0と1を介して通信する場合などです。

オプションの第2引数では、データ、パリティ、ストップビットを設定します。デフォルトは8データビット、パリティなし、1ストップビットです。

コンピューター上で動作するソフトウェアは開発ボードと通信し、ボーレートは9600です。

**構文:**

Serial.begin(**speed**)

**パラメータ:**

**speed**: シリアル通信の速度。例：`9600`、`115200`など。

シリアルボーレートを9600に設定します。

```cpp
Serial.println(sensorValue);
```

**説明:**

人間が読めるASCIIテキストとしてデータをシリアルポートに出力し、その後にキャリッジリターン文字（ASCII 13、または '\r'）と改行文字（ASCII 10、または '\n'）を続けます。このコマンドはSerial.print()と同じ形式を取ります。

**構文:**

Serial.println(**val**) または Serial.println(**val**, **format**)

**パラメータ:**

**val**: 出力する値。許可されるデータ型: 任意のデータ型。

**format**: 数値の基数（整数データ型の場合）または小数点以下の桁数（浮動小数点型の場合）を指定します。

シリアルポートは光センサーの値を出力します。そのため、IDEインターフェースで**シリアルモニター**を開くと、出力センサーの値を確認できます。

**デモ効果とシリアル出力結果:**

LEDモジュールは暗い場合に点灯し、明るい場合は消灯したままになります。

ブレイクアウトガイド

Groveケーブルを使用してGrove LEDをSeeeduino Lotusのデジタル信号インターフェース**D4**に接続し、Grove光センサーをSeeeduino Lotusのアナログ信号インターフェース**A6**に接続します。

### レッスン6: 音感応LEDライト

音センサーは環境の音の強度を検出でき、その出力もシミュレートされます。皆さんは音制御ライトに触れたことがあると思いますが、今度は自分で作ることができます。基礎があれば、この実験は簡単でしょう。ここでは結果を視覚化するためにSerial Plotterを使用しました。

背景情報:

- **Serial Plotterとは**

Serial Plotterはシリアルモニターに似ており、Arduinoからコンピューターへのシリアルデータをリアルタイムでネイティブにグラフ化できます。これはデータを視覚化する必要がある場合に非常に便利です。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

**Tools** -> **Serial Plotter**をクリックしてSerial Plotterを開くことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg" style={{width:400, height:'auto'}}/></div>

- **実習:** 音が出るとLEDライトが点灯します。音がなく非常に静かな時は、LEDライトが消灯します。

関連コンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove音センサー
    4. Groveケーブル（ブレイクアウトした場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - その後、SeeeduinoをUSBケーブルでコンピューターに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//Sound Control Light
int soundPin = A2; // Analog sound sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  Serial.println(soundState);
  // if the sound sensor’s value is greater than 400, the light will be on.
  //Otherwise, the light will be turned off
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

**シリアルプロッター**からも光強度の読み取り値を確認できます。**ツール** -> **シリアルプロッター**に移動してください。

**注意：周囲の光強度に応じて値を調整することもできます。**

コード解析

```cpp
Serial.begin(9600);
```

コンピュータ上で動作するソフトウェアは開発ボードと通信し、ボーレートは9600です。

```cpp
Serial.print(" ");
```

この関数はシリアルポートからデータを出力するために使用され、出力は二重引用符内に含まれる内容です。

```cpp
Serial.println( );
```

この文は上記のものと似ていますが、**serial.println** には改行が含まれている点が異なります。

```cpp
Serial.println(soundState);
```

シリアルポートは音センサーの値を出力します。IDEインターフェースで**シリアルモニター**を開くと、出力センサーの値を確認できます。

**デモ効果とシリアル出力結果:**

周囲が十分に騒がしい場合、LEDモジュールが点灯します。

ブレイクアウトガイド

Groveケーブルを使用してGrove LEDをSeeeduino Lotusのデジタル信号インターフェース**D4**に接続し、Grove音センサーをSeeeduino Lotusのアナログ信号インターフェース**A2**に接続します。

### レッスン7: OLEDでのデータ表示

OLEDディスプレイは多くの状況で使用でき、センサーの読み取り値を視覚化するために使用できます！

背景情報:

- **Arduinoライブラリとは**

Arduino環境は、他のほとんどのプログラミングプラットフォームと同様に、ライブラリの使用によって拡張できます。ライブラリは、スケッチで使用するための追加機能を提供します。つまり、特定のハードウェアでの作業やデータの操作などです。スケッチでライブラリを使用するには、**Sketch** ->**Include Library**から選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg" style={{width:500, height:'auto'}}/></div>

詳細については、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)もご覧ください。

関連コンポーネント

    1. Seeeduino Lotus
    2. Grove OLED
    3. Groveケーブル（ブレイクアウトした場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoはUSBケーブルでコンピューターに接続されます。

ソフトウェアコード

    - Arduino IDEを開きます。
    - **U8g2ライブラリ**をインストール: **Sketch** -> **Include Library** -> **Manage Libraries...**に移動し、**Library Manager**で"**U8g2**"というキーワードを検索します。**oliver作のu8g2ライブラリ**をクリックしてインストールします。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

- 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  //u8x8.setBusClock(100000);  // If you breakout other modules, please enable this line
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
  すべてのモジュールを分離してGrove OLEDを単独で使用する場合、このコードでは動作しない可能性があります。このような問題が発生した場合は、このセクションの最後にある分離ガイドを参照してください。

- **コード解析**

```cpp
#include <>
```

**説明:**

`#include`は、スケッチに外部ライブラリを含めるために使用されます。これにより、プログラマーは標準Cライブラリ（事前に作成された関数のグループ）の大きなグループや、Arduino専用に書かれたライブラリにアクセスできるようになります。

`#include`は`#define`と同様に、セミコロン終端子がないことに注意してください。セミコロンを追加すると、コンパイラーは不可解なエラーメッセージを出力します。

```cpp
#include <U8x8lib.h>
```

**#include** はヘッダーファイルを導入する命令です。ここではU8x8lib.hライブラリを使用します。

```cpp
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  
```

**注意**
  
他のモジュールを取り外してOLEDのみを使用する場合は、ソフトウェアI2Cを使用する必要があります：

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

Arduino環境でのディスプレイの簡略化されたセットアップ手順。適切なU8g2コンストラクタの選択については、セットアップガイドを参照してください。

**構文:**

u8x8.begin()

u8g2ライブラリを初期化する

```cpp
u8x8.setFlipMode(1);
```

**説明:**

一部のディスプレイは、内部フレームバッファの180度回転をサポートしています。このハードウェア機能は、この手順で制御できます。重要：フリップモードを変更した後は、ディスプレイ全体を再描画してください。最良の方法は、まずディスプレイをクリアし、次にフリップモードを変更し、最後にコンテンツを再描画することです。画面上の既存のコンテンツについては、結果が未定義になります。

**構文:**

u8x8.setFlipMode(**mode**)

**パラメータ:**

**mode**: `0` または `1`

ディスプレイを180度反転します。

```cpp
u8x8.setCursor();
```

**説明:**

print関数のカーソルを定義します。print関数の出力はすべてこの位置から開始されます。

**構文:**

u8x8.setCursor(**x, y**)

**パラメータ:**

**x, y**: print関数のカーソルの列/行位置。

描画カーソル位置を設定します。

```cpp
u8x8.setFont()
```

**説明:**

グリフと文字列描画関数用のu8x8フォントを定義します。

**構文:**

u8x8.setFont(**font_8x8**)

ディスプレイ用のフォントを設定します。

```cpp
u8x8.print();
```

OLEDにコンテンツを描画します。

**デモ効果とシリアルプリント結果:**

OLEDディスプレイにHello Worldを印刷します。

**U8g2ライブラリリファレンス**

U8g2ライブラリの詳細情報については、[こちら](https://github.com/olikraus/u8g2/wiki/u8g2reference)を参照してください。

ブレークアウトガイド

Groveケーブルを使用してOLEDをSeeeduino Lotusの**I2C**インターフェースに接続します（注意：I2Cのデフォルトアドレスは0x78です）。

!!!Note
    - 他のモジュールをブレークアウトしてOLEDを使用する際に動作しない場合、または最速のOLED I2C（デフォルト：40KHZ）を使用したい場合は、以下の手順に従ってください：

  「PC」-> ドキュメント -> Arduino -> libraries -> U8g2 -> src -> U8x8lib.cpp をクリック -> 1334行までスライド -> この行を削除または無効化 -> ファイルを保存。

  ```CPP
  Wire.setClock(u8x8->bus_clock);   // just delete or disable this line
  ```

 または、バスクロックを100000に設定してからsetup()に追加することもできます。

```cpp
void setup(void) {
  u8x8.setBusClock(100000); //  it for limit the I2C bus clock
  u8x8.begin();
  u8x8.setFlipMode(1);
}
```

### レッスン8: 周囲の温度と湿度の検出

周囲の温度と湿度について疑問に思ったことはありませんか？正確な数値を知りたいですか？今日の気温に応じてスカートやコートを着たいですか？温度計を作ってみましょう！

背景情報：

- **プロトコル信号（I2C）とは**

**プロトコル信号：** 私たちが使用するプロトコル信号はI2Cです。ここでI2Cについて簡単に紹介します。I2Cバスは、デバイス間の情報接続の伝送において2本のワイヤーのみを必要とします：SDA（シリアルデータライン）とSCL（シリアルクロックライン）。

これらの2本のラインは双方向I/Oラインで、バス転送データを開始し、伝送デバイスを開くクロックを生成するために使用される主要コンポーネントです。この時点でアドレス指定されているデバイスはすべてスレーブデバイスと見なされます。

バス上のマスターとスレーブ（送信者と受信者）の関係は一定ではなく、データ伝送の方向に依存します。ホストがスレーブデバイスにデータを送信したい場合、ホストは最初にスレーブデバイスをアドレス指定し、次にスレーブデバイスにアクティブにデータを送信し、最後にホストによってデータ伝送を終了します。ホストがスレーブからデータを受信する場合、スレーブは最初にマスターによってアドレス指定されます。

その後、ホストはデバイスから送信されたデータを受信し、ホストが受信プロセスを終了します。この場合、ホストはタイミングクロックの生成とデータ転送の終了を担当します。

- **実習：** OLEDディスプレイに現在の周囲温度と湿度を表示させましょう。

使用コンポーネント

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove 温度・湿度センサー
    4. Grove ケーブル（分離している場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

ハードウェア接続

    - **モジュール接続：**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピューターに接続します。

**注意**

一部のアップグレードされたキットにはDHT20が搭載されています。キット上の湿度・温度検出器が黒色の場合、検出器はDHT20であり、そのサンプルコードはDHT11の後に記載されています。

ソフトウェアコード（DHT11）

    - Arduino IDEを開きます。
    - 必要な[ライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)をダウンロードしてインストールします。
    - 以下のコードをコピーし、「検証」をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     // what pin we're connected to
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
    - 以下のコードをコピーし、「検証」をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```cpp
//Temperature and Humidity Sensor
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
    debug.println("DHTxx test!");
    Wire.begin();
 
    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);
 
    dht.begin();
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

右上角の「Monitor」をクリックして結果を確認してください。

Code Analysis

```cpp
float temp, humi;
```

読み取り値を格納する変数を定義します。

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**説明:**

センサーから温度と湿度の値を読み取るために使用される関数。

**構文:**

**dht.readTemperature()** と **dht.readHumidity()**。戻り値の型: float。

これらの関数を呼び出して温度と湿度を読み取り、定義された変数に格納します。

**デモ効果とシリアルプリント結果:**

周囲の温度と湿度がOLEDスクリーンに表示されます。

ブレイクアウトガイド

Groveケーブルを使用してOLEDをSeeeduino Lotusの**I2C**インターフェースに接続します（注意: I2Cのデフォルトアドレスは0x78です）。Grove温湿度センサーをSeeeduino Lotusのデジタル信号インターフェース**D3**に接続します。

### レッスン9: 周囲の気圧測定

Grove気圧センサーは大気圧を測定するためのブレイクアウトボードです。以前のバージョン（2025年10月以前）はBMP280センサーを使用していましたが、新しいバージョン（2025年10月以降）はSPA06-003センサーを使用しています。両方のセンサーは温度と大気圧を正確に測定できます。大気圧は高度によって変化するため、場所のおおよその高度も測定できます。

使用コンポーネント
    1. Seeeduino Lotus
    2. Grove気圧センサー（BMP280またはSPA06-003）
    3. Groveケーブル（ブレイクアウトの場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

ハードウェア接続
    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - その後、SeeeduinoをUSBケーブルでコンピューターに接続します。

ソフトウェアコード

#### BMP280用（2025年10月以前の旧バージョン）

    - Arduino IDEを開きます。
    - **Grove気圧センサーライブラリ**をインストールします: **スケッチ** -> **ライブラリをインクルード** -> **ライブラリを管理...**に移動し、**ライブラリマネージャー**で「**Grove BMP280**」のキーワードを検索してインストールします。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

- 以下のコードをコピーし、検証をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。
- このプログラムでは、気圧センサー情報がI2Cバス経由でセンサーからSeeeduinoに送信され、その後Seeeduinoがそれらをシリアルモニターに出力します。結果を確認するために**シリアルモニター**を開きます。

```cpp
//Air pressure detection
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("Device not connected or broken!");
    }
}

void loop() {

    float pressure;

    //get and print temperatures
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

    //get and print atmospheric pressure data
    Serial.print("Pressure: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //get and print altitude data
    Serial.print("Altitude: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//add a line between output of different times.

    delay(1000);
}
```

コード解析

```cpp
#include <Wire.h>
```

**#include** は、ヘッダーファイルを導入する命令です。ここでは Wire.h ライブラリを使用しており、このライブラリは Arduino IDE に含まれています。

```cpp
#include "Seeed_BMP280.h"
```

現在のパスを導入するSeeed_BMP280.hヘッダーファイルを表します。

```cpp
if (!bmp280.init()) {
    Serial.println("Device not connected or broken!");
}
```

**説明:**

bmp280.init()を使用して気圧センサーを初期化します。さらに、if条件を使用して正常に開始されたかどうかを確認し、正常であればメッセージをスキップします。初期化に問題がある場合は、プログラミングにおいて!がNOTを意味するため、メッセージを出力します。

**構文:**

**bmp280.init()**

気圧センサーが正常に開始されなかった場合、シリアルモニターにエラーを出力します。

```cpp
Serial.print(bmp280.getTemperature());
```

**説明:**

センサーから温度値を読み取るために使用される関数。

**構文:**

**bmp280.getTemperature()**. 戻り値の型: float

温度データをシリアルモニターに出力します。

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**説明:**

センサーから気圧値を読み取るために使用される関数。

**構文:**

**bmp280.getPressure()**. 戻り値の型: float

現在の気圧を出力します。

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**説明:**

気圧値を取得し、高度に変換することができます。

**構文:**

bmp280.calcAltitude(**float**). 戻り値の型: float

**パラメータ:**

**float**: 気圧値。

振幅を出力します。

**デモ効果とシリアル出力結果:**

気圧の測定値がシリアルモニターに表示されます。

ブレイクアウトガイド

Groveケーブルを使用してGrove気圧センサーをSeeeduino LotusのI2Cインターフェースに接続してください（注意：I2Cのデフォルトアドレスは0x77または0x76です）。

#### SPA06-003用（2025年10月以降の新バージョン）

SPA06-003は、気圧と温度の両方を測定できる高精度気圧センサーです。Arduinoでの使用方法は以下の通りです：

**ライブラリのインストール:**

- Arduino用の[SPL07-003ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06)をダウンロードしてインストールしてください

- このライブラリは気圧、温度の読み取りと高度計算の機能を提供します

**説明:** このプログラムはSPL07-003気圧・温度センサーとインターフェースして、大気状態を連続的に監視します。特定のサンプリング設定（気圧は32サンプルで4Hz、温度は1サンプルで4Hz）でセンサーを初期化し、気圧、温度、計算された高度の値をリアルタイムで読み取り、シリアル通信を介して結果を表示します。

```cpp
#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR,&Wire) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

### レッスン10: 動きの検知

これが最後のセンサー、三軸加速度計です。このモジュールを使用することで、設計に動き監視を簡単に追加できます。動きを基にして多くの興味深い小実験を行うことができます。

- **実習:** 動きが検出されたとき、ブザーがアラームを鳴らして物体が動いていることを示します。

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove 3軸加速度計
    3. Grove ケーブル（分離している場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - その後、SeeeduinoをUSBケーブルでコンピュータに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - Githubから[3-Axis Digital Accelerometer( ±2g to 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)をダウンロードします。**Sketch** > **Include library** > **Add .ZIP library**をクリックして、ライブラリをIDEにインポートします。
    - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。
    - このプログラムでは、加速度情報がI2Cバス経由でセンサーからSeeeduinoに送信され、その後Seeeduinoがそれらをシリアルモニターに出力します。**シリアルモニター**を開いて結果を確認してください。

```Cpp
//Gravity Acceleration
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //Hardware I2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC init
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTR didn't connect.");
        while (1);
        return;
    }
    //3 axis
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
    LIS3DHTR<SoftwareWire> LIS;   //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;        //Hardware I2C
    #define WIRE Wire
#endif
```

ソフトウェア I2C またはハードウェア I2C を使用してモジュールを初期化する。

```cpp
while (!Serial) {};
```

シリアルモニターを開かないとコードがここで停止するので、シリアルモニターを開いてください。

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**説明:** 加速度センサーを初期化します。

**構文:** `LIS.begin(Wire, address)`。

**説明:** 加速度センサーの出力データレートを設定します。

**構文:** `LIS.setOutputDataRate(odr_type_t odr)`。

加速度センサーを初期化し、出力レートを50Hzに設定します。

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**説明:**

センサーからX軸の値を読み取るために使用される関数。

**構文:**

**LIS.getAccelerationX()**. 戻り値の型: float。

**説明:**

センサーからY軸の値を読み取るために使用される関数。

**構文:**

**LIS.getAccelerationY()**. 戻り値の型: float。

**説明:**

センサーからZ軸の値を読み取るために使用される関数。

**構文:**

**LIS.getAccelerationZ()**. 戻り値の型: float。

3軸のデータをシリアルモニターに出力します。

**デモ効果とシリアル出力結果:**

3軸加速度計の読み取り値がシリアルモニターに表示されます。

ブレイクアウトガイド

Groveケーブルを使用してGrove 3軸加速度計をSeeeduino LotusのI2CインターフェースにGroveケーブルで接続します（注意：I2Cのデフォルトアドレスは0x19です）。

## ボーナスプロジェクト

### プロジェクト1: 音楽ダイナミックリズムランプ

- **プロジェクトの説明:** この実験では、ブザーで心地よい音楽を演奏し、音楽の周波数とビートに合わせてLEDライトを点滅させます。

使用するコンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. ブザー
    4. Groveケーブル（ブレイクアウトする場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピューターに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、「検証」をクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```cpp
//Music Dynamic Rhythm Lamp
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

ここでは、低音、中音、高音に分けられるDキーの周波数の定義を示します。

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

注意：リズムは1拍、半拍、1/4拍、1/8拍に分けられます。1拍音符の時間を1と指定します；半拍は0.5；1/4拍は0.25；1/8拍は0.125です。

```cpp
int tune[]=...
```

スペクトラムに従って周波数を列挙してください。

```cpp
float durt[]=...
```

スペクトラムに従ってビートをリストアップします。

```cpp
delay(100*durt[x]);
```

LEDライトをそれぞれオン・オフで制御します。

**デモ効果とシリアルプリント結果：**

ブザーが音楽を鳴らしながら、LEDモジュールが同じ周波数で点滅します。

ブレイクアウトガイド

Grove LEDをSeeeduino Lotusのデジタル信号インターフェース**D4**に接続し、BuzzerをSeeeduino Lotusのデジタル信号インターフェース**D5**に接続します。

### プロジェクト2: インテリジェント音光感応デスクランプを作る

- **プロジェクト説明:** その名の通り、このプロジェクトは音と光で制御される小さなランプを作ることです。出力としてLEDモジュールを使用する必要があります。光センサーと音センサーを入力信号として使用します。この方法で、スマートデスクランプの機能を実現できます：周囲の音レベルが事前設定された値を超えた場合、LEDが点灯し、または周囲の光強度が特定の値を下回った場合も、LEDモジュールが点灯します。

使用コンポーネント

    1. Seeeduino Lotus
    2. Grove LED
    3. Light Sensor
    4. Sound Sensor
    5. Grove ケーブル（ブレイクアウトした場合）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

ハードウェア接続

    - **モジュール接続:**
        - PCBスタンプホールによるデフォルト接続。
    - SeeeduinoをUSBケーブルでコンピューターに接続します。

ソフトウェアコード

    - Arduino IDEを開きます。
    - 以下のコードをコピーし、Verifyをクリックして構文エラーをチェックします。エラーがないことを確認したら、コードをアップロードできます。

```Cpp
//light Induction Desk Lamp
int soundPin = A2; // Analog sound sensor is to be attached to analog
int lightPin = A6; //Analog light sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  int lightState = analogRead(lightPin); // Read light sensor’s value
  // if the sound sensor's value is greater than 500 or the sound sensor's is less than 200, the light will be on.
  //Otherwise, the light will be turned off
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //You can add the "//" to remove the delay
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

括弧内は論理式です。**&&** と **||** の両方が論理式でよく使用されます。一般的な使用法は **if (式 1 || 式 2)** と **if (式 1 && 式 2)** です。

**||** は「**または**」を表し、そのうちの一つを満たせば、式全体が真となり、if判定の条件を満たします。

**&&** は「**かつ**」を意味し、括弧内のすべての式が真の場合のみ、if{}内の文が実行されます。

**デモ効果とシリアル出力結果：**

周囲の音が十分に大きいか、光の強度が低い場合、LEDモジュールはより強い光度で点灯します。

ブレイクアウトガイド

Grove LEDをSeeeduino Lotusのデジタル信号インターフェース **D4** に接続し、光センサーをSeeeduino Lotusのアナログ信号インターフェース **A1** に接続します。音センサーをGroveケーブルを使用してSeeeduino Lotusのアナログ信号インターフェース **A2** に接続します。

## 独自のモジュールとボードを作成する

この期間の学習を通じて、あなたはすでにArduinoとオープンソースハードウェアについて体系的な理解を持っているので、さらに進んで独自のモジュールや開発ボードを作成してみませんか？

### EDA

独自のボードを設計するには、独自のモジュールの回路図を設計する必要があり、そのためにはEDAツールが必要です。ここではオープンソースのEDAソフトウェアを推奨します。

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/)は電子設計自動化のための無料ソフトウェアスイートです。電子回路の回路図設計とそのPCB設計への変換を促進します。回路図キャプチャとPCBレイアウト設計のための統合環境を特徴としています。プログラムは回路図キャプチャとGerber出力を伴うPCBレイアウトを処理します。このスイートはWindows、Linux、macOSで動作し、GNU GPL v3の下でライセンスされています。

- **Upverter**

回路図やレイアウトを自分で作業したくないが、Seedのモジュールに基づくプロトタイプを統合製品に変換したい場合は、Upverterを試すことを強く推奨します。

詳細については、[**Grove Beginner Kit for Arduino Upverterガイド**](https://wiki.seeedstudio.com/ja/Grove-Beginner-Kit-for-Arduino-Upverter-Guide/)をご覧ください。

### PCBサービス

設計が完了したら、[Seeed Fusion PCBAサービス](https://www.seeedstudio.com/fusion_pcb.html)をチェックしてください。これは設計を実際に機能するデバイスに変換するのに役立ちます。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studioには独自の[オープンパーツライブラリ（OPL）](https://www.seeedstudio.com/opl.html)があり、これはSeeed Fusion PCBAサービス専用に調達された10,000以上の一般的に使用されるコンポーネントのコレクションです。PCB設計プロセスを高速化するため、SeedはKiCadとEagle用のコンポーネントライブラリを構築しています。すべてのコンポーネントがSeedのPCBA OPLから調達され、[Seeed Fusion PCBアセンブリ（PCBA）サービス](https://www.seeedstudio.com/fusion_pcb.html)と併用される場合、PCBA生産時間全体を20営業日からわずか7日に短縮できます。

## FAQ

### 1. 個別の電子モジュールを取り外して使用するにはどうすればよいですか？

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove1.jpg)

Grove Beginner Kit For Arduinoをよく見ると、各個別モジュールとバックプレーンの間に3つの小さな穴があることがわかります。必要なのは、ニッパーを使用して小さな穴からモジュール周辺のPCBバックプレーンを切断することだけです。

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove2.jpg)

---

**注意：小さな穴の周辺に沿って慎重に切断し、小さな穴まで切らないでください（内部配線のショートサーキットを防ぎ、モジュールの損傷を防ぐため）；誤って小さな穴まで切ってしまった場合は、ナイフを使用して小さな穴をきれいにしてショートサーキットを防いでください**

---

​![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove3.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

1. [**Grove Beginner Kit for Arduino Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. 回路図設計ファイル

    - [**Grove Beginner Kit for Arduino 回路図設計ファイル V1.0 プレビュー版**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

    - [**Grove Beginner Kit for Arduino 回路図設計ファイル V1.1 新版**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove_Beginner_Kit_for_Arduino_v2.3_SCH&PCB_250812.zip)

3. **Github上のモジュールライブラリ:**

    - [OLEDディスプレイ](https://github.com/olikraus/U8g2_Arduino)
    - [温湿度センサー](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
    - [気圧センサー (BMP280)](https://github.com/Seeed-Studio/Grove_BMP280)
    - [気圧センサー (SPA06-003)](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06)
    - [3軸加速度センサー](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**センサーデータシート**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**初期Arduinoファームウェアデモ**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Grove Beginner Kit For Arduino リソース一式 [20200401] (7z)**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

7. [**Grove Beginner Kit For Arduino Codecraft グラフィカルプログラミングコース web v7**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Codecraft-Graphical-Programming-Course-web-v7.pdf)

## さらなる学習

- [ライブIoTデータ予測のためのLSTM](https://github.com/256ericpan/LSTM_IoT)

- [生物学初心者のためのノーコードプログラミングガイド](https://www.biomaker.org/nocode-programming-for-biology-handbook)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
