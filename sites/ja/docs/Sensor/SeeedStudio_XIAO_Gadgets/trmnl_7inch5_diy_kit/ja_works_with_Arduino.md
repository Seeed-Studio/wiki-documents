---
description: この記事では、TRMNL 7.5inch(OG) DIY KitをArduinoで使用する方法について説明します。
title: Arduinoとの連携
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ja/ogdiy_kit_works_with_arduino
sidebar_position: 4
last_update:
  date: 06/29/2025
  author: Allen
---


# ArduinoでTRMNL 7.5" (OG) DIY Kitを始める

## はじめに

TRMNL 7.5" (OG) DIY Kitは、強力なXIAO ESP32-S3 Plusを中核とする多用途開発プラットフォームです。このDIY Kitは、ESP32-S3の処理能力と美しい7.5インチePaperディスプレイを組み合わせ、低消費電力の情報表示プロジェクトに最適な基盤を提供します。このガイドでは、Arduinoフレームワークを使用してTRMNL DIY Kitをプログラミングすることに焦点を当て、様々なハードウェア機能を活用するための必要な知識を提供します。

## 始めに

具体的な機能に入る前に、TRMNL 7.5" (OG) DIY Kit用の開発環境をセットアップしましょう。

### 機器の取り付け

**ステップ1. ディスプレイをドライバーボードに接続**  
FPCケーブルをXIAO ePaper Display Boardのコネクタに合わせ、ラッチを固定して確実な接続を確保します。  

:::tip
FPCケーブルの金属面は上向きにする必要があります。そうでないと、コンテンツが表示されません。

以下の取り付けチュートリアルに従ってください。多くの人が間違えます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ2. バッテリーの取り付け**  
バッテリーケーブルをドライバーボードのJSTコネクタに接続し、正しい極性（赤線を+、黒線を-）を確認します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ3. エンクロージャーの組み立て（オプション）**  

:::tip
画面のフレキシブルケーブルは非常に壊れやすいことにご注意ください。操作時は注意してください。損傷すると、画面全体が動作しなくなります。
:::
[Resource part](#resources)からオープンソースのエンクロージャー部品を印刷し、内部にコンポーネントを組み立てます。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバーボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNLキットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

画面をケースに差し込み、FPCケーブルを外に出します。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L字型エンクロージャーも非常に似ています。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNLキットがルーターから遠い場合は、アンテナをケースの外に移動できます。より良いパフォーマンスが得られます。
:::

### 環境の準備

TRMNL DIY KitをArduinoでプログラミングするには、ESP32サポート付きのArduino IDEをセットアップする必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**ステップ1.** [Arduino IDE](https://www.arduino.cc/en/software)をダウンロードしてインストールし、Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ2.** Arduino IDEにESP32ボードサポートを追加します。

Arduino IDEで、**File > Preferences**に移動し、"Additional Boards Manager URLs"フィールドに以下のURLを追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ3.** ESP32ボードパッケージをインストールします。

**Tools > Board > Boards Manager**に移動し、"esp32"を検索してEspressif SystemsのESP32パッケージをインストールします。

**ステップ4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino**に移動し、"XIAO_ESP32S3_PLUS"を選択します。

**ステップ5.** USB-CケーブルでTRMNL DIY Kitをコンピューターに接続します。

**ステップ6.** **Tools > Port**から正しいポートを選択します。

## Arduinoの例

それでは、Arduinoコード例を使ってTRMNL DIY Kitの主要機能を探ってみましょう。

### ユーザーボタン

TRMNL DIY Kitには、3つのユーザープログラマブルボタン（D1、D2、D4）と1つのリセットボタンがあります。ボタンの押下を検出する簡単な例を作成しましょう。

#### ボタンテストの例

この例では、3つのユーザーボタンの状態を読み取り、その状態をシリアルモニターに出力します。

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

**コードの動作原理：**

1. 3つのユーザーボタン（D1、D2、D4）のピン定数を定義します。

2. `setup()`関数で、シリアル通信を初期化し、ボタンピンを内部プルアップ抵抗付きの入力として設定します。

3. `loop()`関数で、各ボタンの状態を読み取ります。プルアップ抵抗を使用しているため、ボタンが押されるとピンはLOWを読み取ります。

4. 読み取り値を反転（`!`演算子で）して、`true`が「押下」、`false`が「解放」を意味するようにします。

5. いずれかのボタンが押されると、すべてのボタンの状態をシリアルモニターに出力します。

6. 小さな遅延により、ボタンが押し続けられたときの急速な繰り返し読み取りを防ぎます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/6_button_test_serial.png" style={{width:1000, height:'auto'}}/></div>

### バッテリー電圧監視

TRMNL 7.5" (OG) DIY Kitには、ピンD0（GPIO1）に接続されたバッテリー電圧を監視する回路が含まれています。この設計の重要な特徴は、ADC電源を有効/無効にする制御ピン（GPIO6）も含まれていることで、測定を積極的に行わないときのバッテリー節約に役立ちます。

#### バッテリー電圧監視の例

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

**コードの動作原理：**

1. 2つの重要なピンを定義します：

- `BATTERY_PIN` (GPIO1/A0): バッテリー電圧分圧器に接続

- `ADC_EN_PIN` (GPIO6/A5): ADC測定回路への電源を制御

2. 電圧読み取り精度を微調整するために`CALIBRATION_FACTOR`（0.968）を定義します。

3. `setup()`関数内で：

- シリアル通信を初期化

- ADC_ENピンを出力として設定し、LOW（無効）に設定して電力を節約

- ADC解像度を12ビット（0-4095）に設定

- バッテリーピンに適切な減衰を設定

4. `loop()`関数内で：

- `readBatteryVoltage()`を呼び出して現在のバッテリー電圧を取得

- 電圧をシリアルモニターに出力

- 電圧しきい値に基づいてバッテリー状態を判定し表示

- 次の読み取りまで5秒間待機

5. `readBatteryVoltage()`関数：

- ADC_EN_PINをHIGHに設定してADC回路を有効化

- 回路が安定するまで短時間待機

- より安定した結果を得るために30回の読み取りを行い平均化

- 電力節約のためADC回路を無効化

- 以下を使用して実際のバッテリー電圧を計算：

  - 平均ADC読み取り値
  - ADC解像度（4095）
  - 基準電圧（3.6V）
  - 電圧分圧係数（2.0）
  - 校正係数（0.968）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/7_battery_monitor_serial.png" style={{width:1000, height:'auto'}}/></div>

**省電力設計：**

この実装の重要な特徴は、使用していないときにバッテリー測定回路を無効にできることです。TRMNL DIYキットは低消費電力を目的として設計されており、このアプローチは実際の測定が必要なときのみ電圧分圧回路に電力を供給することで、バッテリー寿命の延長に役立ちます。

校正係数（0.968）は電圧分圧器のコンポーネント許容差を補償し、正確な読み取りを確保するのに役立ちます。マルチメーターでの測定と比較して読み取り値が一貫してずれている場合、この値は特定のボードに対して微調整が必要な場合があります。

複数の読み取りを行い平均化することで、ノイズを減らし、より安定した電圧測定を提供します。これは、小さな電圧変化が残容量の判定に重要なバッテリー監視において特に重要です。

## ePaperディスプレイ

TRMNL 7.5"（OG）DIYキットは、様々な照明条件での明確な視認性と超低消費電力を提供する美しい7.5インチ白黒ePaperディスプレイを特徴としています。このセクションでは、Arduinoを使用してePaperディスプレイを設定し制御する方法を探ります。

### ハードウェアセットアップ

プログラミングを始める前に、ePaperディスプレイがTRMNLボードに適切に接続されていることを確認しましょう：

**ステップ1.** ePaperディスプレイをドライバーボードの24ピンコネクタに接続します。コネクタはブラインド挿入をサポートしているため、間違って挿入することはできません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/8_connect_display.png" style={{width:600, height:'auto'}}/></div>

**ステップ2.** リボンケーブルを挿入した後、ロック機構を閉じて固定します。

:::caution
リボンケーブルは壊れやすく、簡単に損傷する可能性があります。可能な限り横方向に曲げることは避けてください。
:::

**ステップ3.** ジャンパーがボード上の24PinとGNDピンを接続していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/10_jumper_setting.png" style={{width:700, height:'auto'}}/></div>

### ソフトウェアセットアップ

ePaperディスプレイを制御するために、様々なSeeed Studioディスプレイデバイスの包括的なサポートを提供するSeeed_GFXライブラリを使用します。

**ステップ1.** GitHubからSeeed_GFXライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ2.** Arduino IDEでZIPファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library**に移動し、ダウンロードしたZIPファイルを選択します。

:::note
以前にTFT_eSPIライブラリをインストールしている場合、競合を避けるためにArduinoライブラリフォルダから一時的に削除または名前を変更する必要がある場合があります。Seeed_GFXは追加機能を持つTFT_eSPIのフォークです。
:::

**ステップ3.** Seeed_GFXライブラリからサンプルスケッチを開きます：**File > Seeed_GFX > Examples > ePaper > Basic > Clock**

**ステップ4.** サンプルタブの横にある矢印をクリックして"New Tab"を選択し、Arduinoスケッチと同じフォルダに`driver.h`という名前の新しいファイルを作成します。

**ステップ5.** 新しいファイルに`driver.h`と名前を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

**ステップ6.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)に移動し、画像に示すように"TRMNL 7.5" (OG) DIY Kit"を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/13_display_config_tool.png" style={{width:700, height:'auto'}}/></div>

**ステップ7.** 生成されたコードをコピーし、作成した`driver.h`ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

ステップ8. これでサンプルをTRMNL DIYキットにアップロードし、ePaperディスプレイの動作を確認できます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/18_upload_sketch.jpg" style={{width:700, height:'auto'}}/></div>

### 基本的なePaperディスプレイの例

ePaperディスプレイにグラフィックを描画する方法を示すシンプルなアナログ時計の例を探ってみましょう。[この例](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/Clock/Clock.ino)は、時針、分針、秒針を持つクラシックな時計の文字盤を作成します。

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

**時計サンプルの動作原理：**

この洗練されたサンプルは、ePaperディスプレイ上にクラシックなアナログ時計を作成します。その動作原理を詳しく見てみましょう：

1. **初期化と設定：**
   - コードは`#ifdef EPAPER_ENABLE`による条件コンパイルを使用して、e-paperディスプレイサポートを持つハードウェアでのみ実行されるようにしています。
   - 時計の針の位置とその前の位置を追跡するための変数を宣言します。
   - 初期時刻は`__TIME__`マクロを使用してスケッチのコンパイル時刻に基づいて設定されます。

2. **Setup関数：**
   - `epaper.begin()`でe-paperディスプレイを初期化します。
   - `epaper.fillScreen(TFT_WHITE)`を使用してディスプレイを白で背景として塗りつぶします。
   - 時計の文字盤を白い内部を持つ黒い円として描画します。
   - 時間マーカーを円周の周りに12本の線として描画します。
   - 分マーカーを60個の点として描画し、15分位置に特別な強調を加えます。
   - 時計の文字盤の中央に小さな黒い円を描画します。
   - ディスプレイの下部に「Time flies」のテキストを追加します。
   - 最後に`epaper.update()`を呼び出して物理ディスプレイを更新します。

3. **Loop関数：**
   - 毎秒（`millis()`が`targetTime`を超えたとき）、時計の針を更新します。
   - 必要に応じて秒、分、時間をインクリメントします。
   - 現在の時刻に基づいて各針の角度を計算します。
   - 針の位置は三角関数を使用して計算されます：
     - 時針：1時間あたり30度（分による調整を含む）
     - 分針：1分あたり6度（秒による調整を含む）
     - 秒針：1秒あたり6度
   - 不要な更新を減らしてディスプレイの寿命を延ばすため、時針と分針は1分に1回（秒 = 0のとき）のみ消去して再描画します。
   - 秒針は毎秒、前の位置を消去して新しい位置に描画することで更新されます。
   - すべての針を描画した後、中央の点を更新し、`epaper.update()`を呼び出して物理ディスプレイを更新します。

4. **ヘルパー関数：**
   - `conv2d`関数は数値の文字列表現を整数値に変換し、コンパイル時の時、分、秒の値を解析するために使用されます。

**このサンプルに関する重要な注意事項：**

1. **ディスプレイ更新：** LCDやOLEDディスプレイとは異なり、ePaperディスプレイは頻繁な更新用に設計されていません。このサンプルは毎秒ディスプレイを更新しますが、これはデモンストレーション目的では問題ありませんが、実際のアプリケーションでは、ディスプレイの寿命を延ばすためにより少ない頻度で更新することをお勧めします。

2. **部分更新：** このサンプルは、ディスプレイの必要な部分のみを消去して再描画することで部分更新を実演しており、これは画面全体を更新するよりも効率的です。

3. **条件コンパイル：** `#ifdef EPAPER_ENABLE`ディレクティブにより、e-paperディスプレイがシステムで適切に設定されている場合にのみコードがコンパイルされ実行されることが保証されます。

4. **描画関数：** このサンプルは様々な描画関数を紹介しています：
   - `fillCircle()`：時計の文字盤を作成
   - `drawLine()`：時計の針と時間マーカーを描画
   - `drawPixel()`と`fillCircle()`：分マーカー用
   - `drawCentreString()`：中央揃えテキスト用

このアナログ時計サンプルは、TRMNL 7.5" (OG) DIY KitのePaperディスプレイ上で独自のグラフィカルアプリケーションを作成するための優れた出発点を提供します。

### 描画とテキスト関数

Seeed_GFXライブラリは、ディスプレイに描画するための多くの関数を提供しています：

- `display.drawPixel(x, y, color)`：単一のピクセルを描画
- `display.drawLine(x0, y0, x1, y1, color)`：線を描画
- `display.drawRect(x, y, w, h, color)`：矩形の輪郭を描画
- `display.fillRect(x, y, w, h, color)`：塗りつぶされた矩形を描画
- `display.drawCircle(x, y, r, color)`：円の輪郭を描画
- `display.fillCircle(x, y, r, color)`：塗りつぶされた円を描画
- `display.drawTriangle(x0, y0, x1, y1, x2, y2, color)`：三角形の輪郭を描画
- `display.fillTriangle(x0, y0, x1, y1, x2, y2, color)`：塗りつぶされた三角形を描画
- `display.setCursor(x, y)`：テキストカーソル位置を設定
- `display.setTextColor(color)`：テキストの色を設定
- `display.setTextSize(size)`：テキストサイズを設定（1-6）
- `display.print("text")`：カーソル位置にテキストを印刷
- `display.println("text")`：改行付きでテキストを印刷

このモノクロームディスプレイで利用可能な色は：

- `GxEPD_BLACK`：黒いピクセル
- `GxEPD_WHITE`：白いピクセル

描画操作の後は、物理ディスプレイを更新するために`display.update()`を呼び出すことを忘れないでください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
