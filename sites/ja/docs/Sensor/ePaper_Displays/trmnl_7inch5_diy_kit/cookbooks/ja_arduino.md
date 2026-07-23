---
description: TRMNL 7.5" (OG) DIY Kit 向けのエンドツーエンド Arduino クックブック - XIAO ESP32-S3 Plus を活用して、TRMNL クラウドプラットフォームではなくカスタム Arduino スケッチから 7.5" ePaper ディスプレイを直接駆動します。
title: Arduino クックブック
keywords:
  - ePaper ディスプレイ
  - TRMNL
  - Arduino
  - XIAO ESP32-S3 Plus
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ogdiy_kit_works_with_arduino
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-07-17'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino/
---

# Arduino クックブック: TRMNL 7.5" (OG) DIY Kit

:::tip まずメインの Arduino ガイドを読んでください
このページは **TRMNL DIY Kit 専用のクックブック**です。共通の手順 ― Arduino IDE のセットアップ、ESP32 ボードパッケージ、`Seeed_GFX` のインストール、Configuration Tool からの `driver.h` 生成 ― は **[Work with Arduino](/ja/epaper_work_with_arduino)** にまとまっています。Seeed の ePaper で Arduino を使うのが初めての場合は、まずそちらに目を通してください。このページでは TRMNL DIY Kit ハードウェアに特有の部分に焦点を当てます。

カスタムコード不要でプラグイン駆動のダッシュボードを使う **TRMNL クラウドダッシュボード** ワークフローをお探しですか？その場合は **[Work with TRMNL](/ja/reterminal_e10xx_trmnl)** を参照してください。
:::

## はじめに

TRMNL 7.5" (OG) DIY Kit は、高性能な XIAO ESP32-S3 Plus を中核とした多用途な開発プラットフォームです。この DIY Kit は、ESP32-S3 の処理能力と美しい 7.5 インチ ePaper ディスプレイを組み合わせ、低消費電力の情報表示プロジェクトに最適な基盤を提供します。本ガイドでは Arduino フレームワークを用いて TRMNL DIY Kit をプログラミングする方法に焦点を当て、そのさまざまなハードウェア機能を活用するための基本知識を提供します。

## セットアップ

各機能の詳細に入る前に、TRMNL 7.5" (OG) DIY Kit 用の開発環境をセットアップしましょう。

### 機材の取り付け

**Step 1. ディスプレイをドライバボードに接続する**  
FPC ケーブルを XIAO ePaper Display Board 上のコネクタに合わせ、ラッチを固定して確実に接続されるようにします。  

:::tip
FPC ケーブルの金属面は上向きにする必要があります。向きが逆だと、何も表示されません。

多くの方が間違える部分なので、必ず以下の取り付けチュートリアルに従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2. バッテリーを接続する**  
バッテリーケーブルをドライバボード上の JST コネクタに接続し、極性が正しいことを確認します（赤い線を +、黒い線を - へ）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3. ケースの組み立て（任意）**  

:::tip
画面のフレキシブルケーブルは非常に繊細です。作業時は十分注意してください。損傷すると、画面全体が動作しなくなります。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNL キットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

画面をケースに差し込み、FPC が外に出せるようにします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC 延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 字型ケースもほとんど同じ手順です。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNL キットがルーターから遠い場合は、アンテナをケースの外に出すことができます。その方が性能が向上します。
:::

### 開発環境の準備

Arduino で TRMNL DIY Kit をプログラムするには、ESP32 をサポートするように Arduino IDE をセットアップする必要があります。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を強くお勧めします。
:::

**Step 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールし、Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Step 2.** Arduino IDE に ESP32 ボードサポートを追加します。

Arduino IDE で **File > Preferences** を開き、「Additional Boards Manager URLs」フィールドに次の URL を追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** ESP32 ボードパッケージをインストールします。

**Tools > Board > Boards Manager** に移動し、「esp32」を検索して、Espressif Systems の ESP32 パッケージをインストールします。

**Step 4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino** を開き、「XIAO_ESP32S3_PLUS」を選択します。

**Step 5.** USB-C ケーブルを使用して TRMNL DIY Kit をコンピュータに接続します。

**Step 6.** **Tools > Port** から正しいポートを選択します。

## Arduino サンプル

ここからは、Arduino のコード例を通して TRMNL DIY Kit の主な機能を見ていきます。

### ユーザボタン

TRMNL DIY Kit には、ユーザがプログラム可能な 3 つのボタン（D1、D2、D4）と 1 つのリセットボタンがあります。ここではボタンの押下を検出する簡単な例を作成します。

#### ボタンテストの例

この例では、3 つのユーザボタンの状態を読み取り、そのステータスをシリアルモニタに出力します。

```cpp
// TRMNL DIY Kit - Button Test Example

// Define button pins
const int BUTTON_D1 = D1;  // First user button
const int BUTTON_D2 = D2;  // Second user button
const int BUTTON_D4 = D4;  // Third user button

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Button Test");

  // Configure button pins as inputs with internal pull-up resistors
  pinMode(BUTTON_D1, INPUT_PULLUP);
  pinMode(BUTTON_D2, INPUT_PULLUP);
  pinMode(BUTTON_D4, INPUT_PULLUP);
}

void loop() {
  // Read button states (buttons are LOW when pressed because of pull-up resistors)
  bool d1Pressed = !digitalRead(BUTTON_D1);
  bool d2Pressed = !digitalRead(BUTTON_D2);
  bool d4Pressed = !digitalRead(BUTTON_D4);

  // Print button states if any button is pressed
  if (d1Pressed || d2Pressed || d4Pressed) {
    Serial.print("Button D1: ");
    Serial.print(d1Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D2: ");
    Serial.print(d2Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D4: ");
    Serial.println(d4Pressed ? "PRESSED" : "released");

    // Add a small delay to avoid repeated readings
    delay(200);
  }
}
```

**コードの動作説明：**

1. 3 つのユーザボタン（D1、D2、D4）用のピン定数を定義します。

2. `setup()` 関数内でシリアル通信を初期化し、ボタンピンを内部プルアップ抵抗付きの入力として設定します。

3. `loop()` 関数内で各ボタンの状態を読み取ります。プルアップ抵抗を使用しているため、ボタンが押されるとピンは LOW を読み取ります。

4. 読み取り値を（`!` 演算子で）反転させ、`true` が「押されている」、`false` が「離されている」を意味するようにします。

5. いずれかのボタンが押された場合、すべてのボタンの状態をシリアルモニタに出力します。

6. 小さなディレイを入れることで、ボタンを押し続けたときの高速な連続読み取りを防ぎます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/6_button_test_serial.png" style={{width:1000, height:'auto'}}/></div>

### バッテリー電圧のモニタリング

TRMNL 7.5" (OG) DIY Kit には、バッテリー電圧をモニタリングするための回路があり、ピン D0（GPIO1）に接続されています。この設計の重要な特徴として、ADC 電源を有効／無効にするための制御ピン（GPIO6）も含まれており、測定していないときのバッテリー消費を抑えることができます。

#### バッテリー電圧モニタリングの例

```cpp
// TRMNL DIY Kit - Battery Voltage Monitoring Example

#define BATTERY_PIN 1       // GPIO1 (A0) - BAT_ADC
#define ADC_EN_PIN 6        // GPIO6 (A5) - ADC_EN

const float CALIBRATION_FACTOR = 0.968;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Battery Voltage Monitoring Example");

  // Configure ADC_EN
  pinMode(ADC_EN_PIN, OUTPUT);
  digitalWrite(ADC_EN_PIN, LOW);  // Start with ADC disabled to save power

  // Configure ADC
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);
}

void loop() {
  // Read battery voltage
  float voltage = readBatteryVoltage();

  // Print the results
  Serial.print("Battery Voltage: ");
  Serial.print(voltage, 2);  // Print with 2 decimal places
  Serial.println("V");

  // Determine battery level
  String batteryStatus;
  if (voltage >= 4.0) {
    batteryStatus = "Full";
  } else if (voltage >= 3.7) {
    batteryStatus = "Good";
  } else if (voltage >= 3.5) {
    batteryStatus = "Medium";
  } else if (voltage >= 3.2) {
    batteryStatus = "Low";
  } else {
    batteryStatus = "Critical";
  }

  Serial.print("Battery Status: ");
  Serial.println(batteryStatus);
  Serial.println();

  // Wait for a while before the next reading
  delay(5000);  // 5 seconds
}

float readBatteryVoltage() {
  // Enable ADC
  digitalWrite(ADC_EN_PIN, HIGH);
  delay(10);  // Short delay to stabilize

  // Read 30 times and average for more stable readings
  long sum = 0;
  for(int i = 0; i < 30; i++) {
    sum += analogRead(BATTERY_PIN);
    delayMicroseconds(100);
  }

  // Disable ADC to save power
  digitalWrite(ADC_EN_PIN, LOW);

  // Calculate voltage
  float adc_avg = sum / 30.0;
  float voltage = (adc_avg / 4095.0) * 3.6 * 2.0 * CALIBRATION_FACTOR;

  return voltage;
}
```

**コードの動作説明：**

1. 2つの重要なピンを定義します：

- `BATTERY_PIN` (GPIO1/A0): バッテリーの分圧回路に接続されています

- `ADC_EN_PIN` (GPIO6/A5): ADC 測定回路への電源を制御します

2. 電圧読み取り精度を微調整するために `CALIBRATION_FACTOR` (0.968) を定義します。

3. `setup()` 関数内では：

- シリアル通信を初期化します

- ADC_EN ピンを出力として設定し、LOW（無効）にして消費電力を抑えます

- ADC の分解能を 12 ビット（0〜4095）に設定します

- バッテリーピンに対して適切なアッテネーションを設定します

4. `loop()` 関数内では：

- `readBatteryVoltage()` を呼び出して現在のバッテリー電圧を取得します

- 電圧をシリアルモニタに出力します

- 電圧のしきい値に基づいてバッテリー状態を判定し表示します

- 次の測定を行う前に 5 秒待機します

5. `readBatteryVoltage()` 関数は次の処理を行います：

- ADC_EN_PIN を HIGH にして ADC 回路を有効化します

- 回路が安定するまで短時間待機します

- 30 回測定して平均を取り、より安定した結果を得ます

- 消費電力を抑えるために ADC 回路を無効化します

- 次の値を用いて実際のバッテリー電圧を計算します：

  - ADC 読み取り値の平均
  - ADC 分解能 (4095)
  - 基準電圧 (3.6V)
  - 分圧比 (2.0)
  - キャリブレーション係数 (0.968)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/7_battery_monitor_serial.png" style={{width:1000, height:'auto'}}/></div>

**省電力設計：**

この実装の重要な特徴は、使用していないときにバッテリー測定回路を無効化できることです。TRMNL DIY Kit は低消費電力を念頭に設計されており、このアプローチにより、実際に測定が必要なときだけ分圧回路に電力を供給することでバッテリー寿命を延ばすことができます。

キャリブレーション係数 (0.968) は、分圧回路の部品誤差を補正し、正確な測定値を得るのに役立ちます。マルチメータでの測定値と比較して常にずれている場合は、お使いのボードに合わせてこの値をわずかに調整する必要があるかもしれません。

複数回測定して平均を取ることでノイズを低減し、より安定した電圧測定が可能になります。これは、残容量の判定において小さな電圧変化が重要となるバッテリー監視では特に重要です。

## ePaper ディスプレイ

TRMNL 7.5" (OG) DIY Kit には、美しい 7.5 インチの白黒 ePaper ディスプレイが搭載されており、さまざまな照明条件下での高い視認性と超低消費電力を実現します。このセクションでは、Arduino を使って ePaper ディスプレイをセットアップし制御する方法を説明します。

### ハードウェアのセットアップ

プログラミングを始める前に、ePaper ディスプレイが TRMNL ボードに正しく接続されていることを確認しましょう：

**ステップ 1.** ePaper ディスプレイをドライバボード上の 24 ピンコネクタに接続します。このコネクタはブラインド挿入に対応しているため、誤った向きで挿入してしまうことはありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/8_connect_display.png" style={{width:600, height:'auto'}}/></div>

**ステップ 2.** フラットケーブルを挿入したら、ロック機構を閉じて固定します。

:::caution
フラットケーブルは繊細で、損傷しやすい部品です。できるだけ横方向に曲げないよう注意してください。
:::

**ステップ 3.** ボード上でジャンパが 24Pin と GND ピンを接続していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/10_jumper_setting.png" style={{width:700, height:'auto'}}/></div>

### ソフトウェアのセットアップ

ePaper ディスプレイを制御するために、Seeed Studio の各種ディスプレイデバイスを幅広くサポートする Seeed_GFX ライブラリを使用します。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library** に進み、ダウンロードした ZIP ファイルを選択します。

:::note
以前に TFT_eSPI ライブラリをインストールしている場合、競合を避けるために、一時的に Arduino のライブラリフォルダから削除するか名前を変更する必要があるかもしれません。Seeed_GFX は、追加機能を備えた TFT_eSPI のフォークであるためです。
:::

**ステップ 3.** Seeed_GFX ライブラリからサンプルスケッチを開きます：**File > Seeed_GFX > Examples > ePaper > Basic > Clock**

**ステップ 4.** 例のタブ横の矢印をクリックし、"New Tab" を選択して、Arduino スケッチと同じフォルダ内に `driver.h` という新しいファイルを作成します。

**ステップ 5.** 新しいファイル名を `driver.h` とします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 6.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) にアクセスし、画像のように "TRMNL 7.5" (OG) DIY Kit" を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/13_display_config_tool.png" style={{width:700, height:'auto'}}/></div>

**ステップ 7.** 生成されたコードをコピーし、作成した `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

ステップ 8. これで、サンプルを TRMNL DIY Kit に書き込んで、ePaper ディスプレイの動作を確認できます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/18_upload_sketch.jpg" style={{width:700, height:'auto'}}/></div>

### 基本的な ePaper ディスプレイの例

ePaper ディスプレイ上にグラフィックスを描画する方法を示す、シンプルなアナログ時計の例を見てみましょう。[このサンプル](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/Clock/Clock.ino)では、時針・分針・秒針を備えたクラシックな時計の文字盤を作成します。

```cpp
#include <SPI.h>
#include <TFT_eSPI.h> // Hardware-specific library

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h

EPaper epaper = EPaper(); // Invoke custom library

float sx = 0, sy = 1, mx = 1, my = 0, hx = -1, hy = 0; // Saved H, M, S x & y multipliers
float sdeg = 0, mdeg = 0, hdeg = 0;
uint16_t osx = 120, osy = 120, omx = 120, omy = 120, ohx = 120, ohy = 120; // Saved H, M, S x & y coords
uint16_t x0 = 0, x1 = 0, yy0 = 0, yy1 = 0;
uint32_t targetTime = 0; // for next 1 second timeout

static uint8_t conv2d(const char *p);                                                // Forward declaration needed for IDE 1.6.x
uint8_t hh = conv2d(__TIME__), mm = conv2d(__TIME__ + 3), ss = conv2d(__TIME__ + 6); // Get H, M, S from compile time

bool initial = 1;

#endif

void setup(void)
{
#ifdef EPAPER_ENABLE
  epaper.begin();
  epaper.setRotation(0);

  epaper.fillScreen(TFT_WHITE);

  epaper.setTextColor(TFT_BLACK, TFT_WHITE); // Adding a background colour erases previous text automatically

  // Draw clock face
  epaper.fillCircle(120, 120, 118, TFT_BLACK);
  epaper.fillCircle(120, 120, 110, TFT_WHITE);

  // Draw 12 lines
  for (int i = 0; i < 360; i += 30)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 114 + 120;
    yy0 = sy * 114 + 120;
    x1 = sx * 100 + 120;
    yy1 = sy * 100 + 120;

    epaper.drawLine(x0, yy0, x1, yy1, TFT_BLACK);
  }

  // Draw 60 dots
  for (int i = 0; i < 360; i += 6)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 102 + 120;
    yy0 = sy * 102 + 120;
    // Draw minute markers
    epaper.drawPixel(x0, yy0, TFT_BLACK);

    // Draw main quadrant dots
    if (i == 0 || i == 180)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
    if (i == 90 || i == 270)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
  }

  epaper.fillCircle(120, 121, 3, TFT_BLACK);

  // Draw text at position 120,260 using fonts 4
  // Only font numbers 2,4,6,7 are valid. Font 6 only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : . - a p m
  // Font 7 is a 7 segment font and only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : .
  epaper.drawCentreString("Time flies", 120, 260, 4);

  epaper.update();

  targetTime = millis() + 1000;
#endif
}

void loop()
{
#ifdef EPAPER_ENABLE
  if (targetTime < millis())
  {
    targetTime += 1000;
    ss++; // Advance second
    if (ss == 60)
    {
      ss = 0;
      mm++; // Advance minute
      if (mm > 59)
      {
        mm = 0;
        hh++; // Advance hour
        if (hh > 23)
        {
          hh = 0;
        }
      }
    }

    // Pre-compute hand degrees, x & y coords for a fast screen update
    sdeg = ss * 6;                     // 0-59 -> 0-354
    mdeg = mm * 6 + sdeg * 0.01666667; // 0-59 -> 0-360 - includes seconds
    hdeg = hh * 30 + mdeg * 0.0833333; // 0-11 -> 0-360 - includes minutes and seconds
    hx = cos((hdeg - 90) * 0.0174532925);
    hy = sin((hdeg - 90) * 0.0174532925);
    mx = cos((mdeg - 90) * 0.0174532925);
    my = sin((mdeg - 90) * 0.0174532925);
    sx = cos((sdeg - 90) * 0.0174532925);
    sy = sin((sdeg - 90) * 0.0174532925);

    if (ss == 0 || initial)
    {
      initial = 0;
      // Erase hour and minute hand positions every minute
      epaper.drawLine(ohx, ohy, 120, 121, TFT_WHITE);
      ohx = hx * 62 + 121;
      ohy = hy * 62 + 121;
      epaper.drawLine(omx, omy, 120, 121, TFT_WHITE);
      omx = mx * 84 + 120;
      omy = my * 84 + 121;
    }

    // Redraw new hand positions, hour and minute hands not erased here to avoid flicker
    epaper.drawLine(osx, osy, 120, 121, TFT_WHITE);
    osx = sx * 90 + 121;
    osy = sy * 90 + 121;
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);
    epaper.drawLine(ohx, ohy, 120, 121, TFT_BLACK);
    epaper.drawLine(omx, omy, 120, 121, TFT_BLACK);
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);

    epaper.fillCircle(120, 121, 3, TFT_BLACK);
    epaper.update();
  }
#endif
}

#ifdef EPAPER_ENABLE
static uint8_t conv2d(const char *p)
{
  uint8_t v = 0;
  if ('0' <= *p && *p <= '9')
    v = *p - '0';
  return 10 * v + *++p - '0';
}
#endif
```

**時計のサンプルの動作について：**

この洗練されたサンプルは、ePaper ディスプレイ上にクラシックなアナログ時計を作成します。ここでは、その仕組みを分解して説明します：

1. **初期化と設定：**
   - コードは `#ifdef EPAPER_ENABLE` を使った条件付きコンパイルにより、ePaper ディスプレイをサポートするハードウェア上でのみ実行されるようになっています。
   - 時計の針の位置と、その前回の位置を追跡するための変数を宣言します。
   - 初期時刻は、`__TIME__` マクロを使ってスケッチのコンパイル時刻に基づいて設定されます。

2. **`setup` 関数：**
   - `epaper.begin()` で ePaper ディスプレイを初期化します。
   - `epaper.fillScreen(TFT_WHITE)` を使って、背景としてディスプレイ全体を白で塗りつぶします。
   - 時計の文字盤を、白い内部を持つ黒い円として描画します。
   - 時針の目盛りは、外周の周りに 12 本の線として描画されます。
   - 分針の目盛りは 60 個のドットとして描画され、15 分ごとの位置は特に強調されます。
   - 時計の中心には小さな黒い円が描かれます。
   - ディスプレイの下部に "Time flies" というテキストが追加されます。
   - 最後に `epaper.update()` を呼び出して、実際のディスプレイを更新します。

3. **`loop` 関数：**
   - 毎秒（`millis()` が `targetTime` を超えたとき）に、時計の針を更新します。
   - 必要に応じて秒、分、時をインクリメントします。
   - 現在時刻に基づいて、それぞれの針の角度を計算します。
   - 針の位置は三角関数を使って計算されます：
     - 時針：1 時間あたり 30 度（分に応じた補正を含む）
     - 分針：1 分あたり 6 度（秒に応じた補正を含む）
     - 秒針：1 秒あたり 6 度
   - 不要な更新を減らしディスプレイの寿命を延ばすため、時針と分針は 1 分ごと（秒 = 0 のとき）にのみ消去して再描画します。
   - 秒針は毎秒、前回の位置を消去して新しい位置に描き直します。
   - すべての針を描画した後、中央のドットを再描画し、`epaper.update()` を呼び出して実際のディスプレイを更新します。

4. **ヘルパー関数：**
   - `conv2d` 関数は、数値の文字列表現を整数値に変換する関数で、コンパイル時の時・分・秒の値を解析するために使用されます。

**このサンプルに関する重要な注意点：**

1. **ディスプレイの更新：** LCD や OLED ディスプレイとは異なり、ePaper ディスプレイは頻繁な更新を前提として設計されていません。このサンプルではデモ目的として毎秒ディスプレイを更新していますが、実際のアプリケーションでは、ディスプレイの寿命を延ばすために更新頻度を下げることを検討してください。

2. **部分更新：** このサンプルでは、必要な部分だけを消去して再描画することで部分更新を実演しており、画面全体をリフレッシュするよりも効率的です。

3. **条件付きコンパイル：** `#ifdef EPAPER_ENABLE` ディレクティブにより、ePaper ディスプレイがシステム内で正しく設定されている場合にのみ、コードがコンパイルおよび実行されるようになっています。

4. **描画関数：** このサンプルでは、さまざまな描画関数を紹介しています：
   - `fillCircle()`：時計の文字盤を作成
   - `drawLine()`：時計の針と時針の目盛りを描画
   - `drawPixel()` と `fillCircle()`：分針の目盛りを描画
   - `drawCentreString()`：中央揃えのテキストを描画

このアナログ時計のサンプルは、TRMNL 7.5" (OG) DIY Kit の ePaper ディスプレイ上で独自のグラフィカルアプリケーションを作成するための、優れた出発点となります。

### 描画およびテキスト関連の関数

Seeed_GFX ライブラリは、ディスプレイ上に描画するための多くの関数を提供します：

- `display.drawPixel(x, y, color)`：単一のピクセルを描画
- `display.drawLine(x0, y0, x1, y1, color)`：線を描画
- `display.drawRect(x, y, w, h, color)`：矩形の枠線を描画
- `display.fillRect(x, y, w, h, color)`：塗りつぶし矩形を描画
- `display.drawCircle(x, y, r, color)`：円の枠線を描画
- `display.fillCircle(x, y, r, color)`：塗りつぶし円を描画
- `display.drawTriangle(x0, y0, x1, y1, x2, y2, color)`：三角形の枠線を描画
- `display.fillTriangle(x0, y0, x1, y1, x2, y2, color)`：塗りつぶし三角形を描画
- `display.setCursor(x, y)`：テキストカーソル位置を設定
- `display.setTextColor(color)`：テキスト色を設定
- `display.setTextSize(size)`：テキストサイズ（1〜6）を設定
- `display.print("text")`：カーソル位置にテキストを表示
- `display.println("text")`：テキストを表示し改行

このモノクロディスプレイで利用可能な色は次のとおりです：

- `GxEPD_BLACK`：黒いピクセル
- `GxEPD_WHITE`：白いピクセル

描画処理の後は、実際のディスプレイを更新するために `display.update()` を呼び出すことを忘れないでください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
