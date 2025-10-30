---
description: PlatfromIO と XIAO ePaper Display Board EE04 
title: XIAO ePaper Display Board EE04 と PlatfromIO
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/pio_show_1.webp
sidebar_position: 1
slug: /ja/ee04_with_platformio
last_update:
  date: 10/10/2025
  author: Zeller
---
# XIAO ePaper Display Board(ESP32-S3) EE04 と PlatfromIO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:500, height:'auto'}}/></div>

## PlatformIO の紹介

PlatformIO は、組み込みシステム向けに設計された強力で高度に拡張可能な開発エコシステムです。膨大な数の開発ボードとマイクロコントローラーのサポートをシームレスに統合し、比類のない柔軟性を提供します。PlatformIO を際立たせているのは、その優れたスケーラビリティです：特定のボードがネイティブでサポートされていない場合でも、そのアーキテクチャにより簡単にカスタムボード定義を作成できます。

重要なことに、PlatformIO は Arduino に慣れ親しんだ開発者のギャップを埋め、関連するライブラリを含めるだけで Arduino スタイルのコードのコンパイルとデプロイを可能にします。

### ハードウェアの準備

サポートされているサイズの画面と一緒に XIAO ePaper Display Board EE04 を準備する必要があります。このチュートリアルでは、24ピン 800×480 7.5インチ電子インク画面を例として使用します。
<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.5" モノクロ eInk</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/7.5-inch-elink_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Vscode のダウンロード

使用しているシステムに応じて [Vscode](https://code.visualstudio.com/download) をダウンロードしてください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### PlatformIO のインストール

VSCode を開き、Extensions をクリックし、PlatformIO を検索してインストールを選択します。インストールが完了したら、VSCode を再起動してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 新しいプロジェクト

- PIO Home インターフェースを開き、`New Project` を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: プロジェクト名を入力します
- Board: Seeed Studio XIAO ESP32S3 を選択します
- Framework: Ardunio を選択します
- Location: エンジニアリングファイルのパスは、カスタムパスとして設定するか、デフォルトパスを選択できます。
- "Finish" をクリックして作成が完了するまで待ちます。その後、ワークスペースでプロジェクトファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### Seeed GFX ライブラリの追加

:::tip
このライブラリは TFT ライブラリと同じ機能を持ち、互換性がありません。TFT ライブラリや他の類似のディスプレイライブラリをインストールしている場合は、まずアンインストールしてください。
:::

様々な Seeed Studio ディスプレイデバイスの包括的なサポートを提供する Seeed_GFX ライブラリを使用します。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** 抽出したファイルをプロジェクトファイルの `lib` ディレクトリに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** `driver.h` ファイルを追加します

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- ツールページで、使用している画面仕様を選択します。ここでは、7.5インチモノクロ電子ペーパー画面を選択しています。
- ドライバーボードに XIAO ePaper Display Board EE04 を選択すると、対応するドライバーコードが生成されます。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
間違った選択をすると、画面には何も表示されません。
デバイスやコンポーネントのタイプを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- PlatfromIO プロジェクトファイルの `lib` ディレクトリの下に新しい `driver` フォルダを作成し、`driver.h` ファイルを追加します。生成されたヘッダーファイルコードをコピーし、Ctrl + S を押して保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### アップロード

コードを `main.cpp` にコピーし、`Build` をクリックし、完了後にアップロードします。

```cpp
#include "TFT_eSPI.h"

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h
EPaper epaper;
#endif

void setup()
{
#ifdef EPAPER_ENABLE
    epaper.begin();
    epaper.fillScreen(TFT_WHITE);

    epaper.fillCircle(25, 25, 15, TFT_BLACK);
    epaper.fillRect(epaper.width() - 40,  10, 30, 30, TFT_BLACK);

    for (int i = 0; i < epaper.height() / 80; i++)
    {
        epaper.setTextSize(i + 1);
        epaper.drawLine(10, 70 + 60 * i, epaper.width() - 10, 70 + 60 * i, TFT_BLACK);
        epaper.drawString("Hello EE04", 10, 80 + 60 * i);
    }

    epaper.update(); // update the display

#endif
}

void loop()
{
    // put your main code here, to run repeatedly:
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_upload_2.png" style={{width:800, height:'auto'}}/></div>

- 効果のデモンストレーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### ユーザーボタン

EE04 には、様々な制御目的に使用できる3つのユーザープログラマブルボタンが搭載されています。このセクションでは、Arduino を使用してボタンの状態を読み取り、ボタンの押下に応答する方法を説明します。

EE04 では、3つのボタンが ESP32-S3 に接続されています：

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

すべてのボタンはアクティブローで、押されたときに LOW を読み取り、離されたときに HIGH を読み取ります。

基本的なボタン読み取りの例

この例では、ボタンの押下を検出し、シリアルモニターにメッセージを出力する方法を説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
#include <Arduino.h>
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

コード説明：

- **コア機能分析**

1. **`pinMode(pin, mode)`**  
   - 機能：ピンモードを設定します。  
   - ここでは`INPUT_PULLUP`モードを使用して内部プルアップ抵抗を有効にします。これにより、ボタンが押されていない時はピンがデフォルトで高レベル（HIGH）を出力し、ボタンが押された時（グランドに接続されるため）は低レベル（LOW）を出力します。

2. **`digitalRead(pin)`**  
   - 機能：指定されたピンのレベル状態（HIGHまたはLOW）を読み取ります。  
   - ループ内でボタンの現在の状態をリアルタイムで取得するために使用され、ボタンがアクティブになったかどうかを判断するのに役立ちます。

3. **`Serial.begin(baud)`** と **`Serial.println()`**  
   - 前者はシリアル通信を初期化し（ボーレート115200）、後者はシリアルポートにテキスト情報を出力します。これはモニターでボタンの状態を表示するために使用されます。

4. **`delay(ms)`**  
   - 機能：指定されたミリ秒数だけプログラムを一時停止します。  
   - ここでは2つのシナリオで使用されます：まず、`setup()`でシリアルポート接続を待つため；次に、ボタンの状態が変化した後に50ms遅延させます。これは「ジッターが消えるのを待つ」ことでハードウェアデバウンスを実現し、誤トリガーを防ぎます。

- **コアロジック分析**

1. **状態比較検出**  
   - 各ボタンの「前の状態」（`lastKey0State`など）を記録し、ループで「現在の状態」を読み取ります。  
   - 「現在の状態 ≠ 前の状態」の場合、ボタンがアクティブになった（押されたまたは離された）ことを示します。

2. **ボタンアクション判定**  
   - 状態がHIGHからLOWに変化した場合：「押された」と判定（"pressed"を出力）。  
   - 状態がLOWからHIGHに変化した場合：「離された」と判定（"released"を出力）。  
   - 各状態変化後、「前の状態」を現在の状態に更新し、次の比較の基準として使用します。

3. **ループ実行**  
   - `loop()`関数は無限ループで実行され、「状態を読み取る → 状態を比較する → 結果を出力する」プロセスを繰り返し実行してリアルタイム検出を実現します。

- 効果デモンストレーション：

シリアルモニターでシリアルポートの状態を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_button_1.png" style={{width:800, height:'auto'}}/></div>

### バッテリー電圧

- XIAO ePaper Display Board EE04は3.7V - 4.2Vリチウムバッテリーで駆動されます。さらに、電圧を測定してバッテリー電圧をリアルタイムで監視するためのADCインターフェースがあります。
- ADC測定ピンは`A0 (GPIO1)`で、ADC有効ピンは`D5 (GPIO_6)`です。

接続：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_0.png" style={{width:600, height:'auto'}}/></div><br/>

バッテリー電圧を監視するプログラムです。参考用です。

```cpp
#include <Arduino.h>

#define BATTERY_ADC A0  // Battery voltage ADC pin
#define ADC_EN 6        // ADC enable pin
#define VOLTAGE_DIVIDER_RATIO 2.0  // Voltage divider ratio (adjust based on your resistor values) ((R1+R2)/R2) 

// Function to read battery voltage
static float readBatteryVoltage() {
  int sum = 0;
  // Read multiple samples for better accuracy
  for (int i = 0; i < 10; i++) {
    sum += analogRead(BATTERY_ADC);
    delay(2);
  }
  int adcValue = sum / 10;

  // Calculate actual battery voltage
  // Formula: voltage = (ADC_value / 4095) * 3.3V * divider_ratio
  float voltage = (adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO;

  return voltage;
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  analogReadResolution(12);  // Set ADC resolution to 12 bits
  pinMode(BATTERY_ADC, INPUT);

  pinMode(ADC_EN, OUTPUT);
  digitalWrite(ADC_EN, HIGH);  // Enable ADC
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery Voltage: ");
  Serial.print(batteryVoltage, 2);
  Serial.println(" V");

  delay(500);  // Read every 0.5 seconds
}
```

コード説明：

- 主な機能：

  - **バッテリー電圧取得**：ADCピンを介して抵抗分割されたバッテリー電圧を読み取ります（バッテリー電圧がArduinoのADC基準電圧を超える可能性があるため、まず分割が必要です）。
  - **精度最適化**：複数のサンプルを平均化することで回路ノイズ干渉を減らします。
  - **電圧変換**：ADCのデジタル信号を実際のバッテリー電圧に変換します（電圧分割比と基準電圧を考慮）。
  - **シリアル出力**：測定された電圧を定期的にシリアルポート経由で出力し、外部デバイス（例：コンピュータ）で確認できるようにします。

- コア機能と役割

  - `setup()`（初期化関数）

    - **役割**：プログラム開始時に一度実行され、ハードウェアとパラメータを設定します。
    - **主要操作**：
      - `Serial.begin(115200)`：シリアル通信を初期化（ボーレート115200）して電圧データを出力します。
      - `analogReadResolution(12)`：ADC解像度を12ビット（読み取り範囲：0〜4095）に設定してより高い精度を実現します。
      - `pinMode(BATTERY_ADC, INPUT)`：バッテリー検出ピン（A0）をアナログ信号用の入力モードに設定します。
      - `pinMode(ADC_EN, OUTPUT)` & `digitalWrite(ADC_EN, HIGH)`：ADCモジュールを有効にします（低消費電力用：測定時のみオン）。

  - `loop()`（メインループ関数）

    - **役割**：初期化後に繰り返し実行され、定期的な電圧検出と出力を行います。
    - **主要操作**：
      - `readBatteryVoltage()`を呼び出して現在のバッテリー電圧を取得します。
      - `Serial.print()`/`Serial.println()`を使用してフォーマットされた電圧を出力します（小数点以下2桁、例："Battery Voltage: 3.82 V"）。
      - `delay(500)`：測定間隔を0.5秒に設定します。

  - `readBatteryVoltage()`（コア測定関数）

    - **役割**：ADC信号を読み取り、結果を最適化し、実際の電圧に変換します。
    - **主要操作**：
      - **平均サンプリング**：ADCを10回読み取り、合計してから平均化します（ノイズを減らす）。
      - `analogRead(BATTERY_ADC)`：ピンA0からアナログ電圧を読み取ります（0〜4095を返す）。
      - `delay(2)`：サンプル間に2msの間隔を設けて安定性を確保します。
      - **電圧計算**：式`(adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO`を使用して実際のバッテリー電圧を取得します。
      - 計算された電圧（float型）を返して`loop()`で使用します。

- 効果デモンストレーション：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_1.png" style={{width:800, height:'auto'}}/></div>

## UI設計

EE04では、ダッシュボードや画像表示など、さまざまなクリエイティブなデザインを実行できます。ボタンと組み合わせることで、複数のページ間の切り替えが可能になります。ここではダッシュボードの例を示します。

:::tip
このルーチンでは、ダッシュボードの描画操作はLVGLライブラリに基づいて実行されます。

LVGL公式ドキュメント：[LVGL docs](https://docs.lvgl.io/master/examples.html#get-started)
:::

### ソフトウェア

- LVGLライブラリを追加します。PIO Homeインターフェースのライブラリツールで、LVGLを検索し、現在のプロジェクトにライブラリを追加することを選択します。LVGL 9.0以上のバージョンを選択することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_1.png" style={{width:800, height:'auto'}}/></div>

- **lib**ディレクトリ内で
  - **dashboard**フォルダを作成し、`dashboard_ui.cpp`と`dashboard_ui.h`ファイルを作成します。これらのファイルは主にLGVLの描画コードを格納するために使用されます。
  - **e1001_display**フォルダを作成し、画面ドライバファイル`e1001_display.c`と`e1001_display.h`を追加します
  - **lvgl_conf**フォルダを作成し、LVGLの設定ファイル`lv_conf.h`を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_2.png" style={{width:800, height:'auto'}}/></div><br/>

完全な参考コード：[EE04_Dashboard_ui.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_dashboard_ui.zip)

<details>

<summary>main.cpp コード</summary>

```cpp
/*
 * Seeed reTerminal E1001 Multi-UI Demo
 * - All hardware I/O and e-paper driver work happens here.
 * - All runtime parameters and debug logs live here.
 * - dashboard_ui.cpp is a pure LVGL UI layer (no driver calls, no runtime params).
 *
 * UI switching:
 *   KEY0 (GPIO2) → Vehicle Dashboard
 *   KEY1 (GPIO3) → Smart Home
 *   KEY2 (GPIO5) → Super Mario (default)
 */

#include <TFT_eSPI.h>
#include <lvgl.h>

#include "dashboard_ui.h"  // Pure UI layer
#include "e1001_display.h" // E1001 e-paper driver (init/refresh in this file only)

/* ============ Global driver object ============ */
static e1001_driver_t e1001_driver;

/* ============ Current UI ============ */
static UIType current_ui = UI_SUPER_MARIO;

/* ============ Smart Home runtime parameters (tuned here) ============ */
static String smh_location = "New York";
static String smh_weather = "Sunny";
static float smh_temperature = 22.5f;
static int smh_humidity = 45;
static float smh_batt_voltage = 12.4f;
static int smh_batt_capacity = 85;
static int smh_wifi_signal = 4; // 0..4

/* ============ Vehicle runtime parameters (tuned here) ============ */
static int veh_speed = 85;        // km/h
static int veh_rpm = 2800;        // RPM
static int veh_fuel = 75;         // %
static int veh_engine_temp = 82;  // °C
static char veh_gear = 'D';       // gear char
static long veh_odometer = 86531; // km
static bool veh_seatbelt = true;  // indicator example

/* ---------------------------------------------------------------
 * LVGL periodic tick (moved here from dashboard_ui.cpp)
 * --------------------------------------------------------------- */
void ui_update_loop()
{
    lv_timer_handler();
    delay(50);
}

/* ---------------------------------------------------------------
 * Rebuild the active screen for a given UI type (moved here)
 * --------------------------------------------------------------- */
void load_ui(UIType type)
{
    lv_obj_clean(lv_scr_act());
    current_ui = type;

    switch (type)
    {
    case UI_VEHICLE_DASHBOARD:
        create_vehicle_dashboard_ui();
        break;
    case UI_SMART_HOME:
        create_smarthome_ui();
        break;
    case UI_SUPER_MARIO:
    default:
        create_supermario_ui();
        break;
    }
}

/* ---------------------------------------------------------------
 * Helper to apply Smart Home params to the active UI (if loaded)
 * --------------------------------------------------------------- */
static void apply_smarthome_params()
{
    update_temperature(smh_temperature);
    update_humidity(smh_humidity);
    update_battery_voltage(smh_batt_voltage);
    update_battery_capacity(smh_batt_capacity);
    update_wifi_signal(smh_wifi_signal);
    update_weather_status(smh_weather.c_str());
    update_location(smh_location.c_str());

    // Example to-do placeholders (UI has checkboxes already)
    add_todo_item("Water plants");
    add_todo_item("Check security");
    add_todo_item("Update firmware");
    add_todo_item("Check smart plugs");
}

/* -------------------------------------------------------------
 * Helper to apply Vehicle params to the active UI (if loaded)
 * ------------------------------------------------------------- */
static void apply_vehicle_params()
{
    update_speed_gauge(veh_speed);
    update_rpm_gauge(veh_rpm);
    update_fuel_level(veh_fuel);
    update_engine_temp(veh_engine_temp);
    update_gear_position(veh_gear);
    update_odometer(veh_odometer);
    set_warning_indicator(0, veh_seatbelt);
}

/* -------------------------------------------------------------
 * Switch UI (rebuilds the UI and applies current parameters)
 * ------------------------------------------------------------- */
static void switch_ui(UIType next_ui)
{
    if (next_ui == current_ui)
        return;

    current_ui = next_ui;
    load_ui(current_ui);

    if (current_ui == UI_VEHICLE_DASHBOARD)
    {
        Serial.println("[UI] Loaded Vehicle Dashboard");
        apply_vehicle_params();
    }
    else if (current_ui == UI_SMART_HOME)
    {
        Serial.println("[UI] Loaded Smart Home");
        apply_smarthome_params();
    }
    else
    {
        Serial.println("[UI] Loaded Super Mario");
    }

    // Trigger an e-paper refresh immediately after rebuilding UI
    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Setup
 * ------------------------------------------------------------- */
void setup()
{
    Serial.begin(115200);
    Serial.println("LVGL Multi-UI + E1001 e-paper demo starting...");

    // Configure keys (active LOW due to INPUT_PULLUP)
    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    // Initialize e-paper (includes LVGL/timer/display config handled by your driver)
    Serial.println("Initializing E1001 e-paper driver...");
    e1001_display_init(&e1001_driver);
    Serial.println("E1001 init done.");

    // Default UI: Super Mario
    current_ui = UI_SUPER_MARIO;
    load_ui(current_ui);
    Serial.println("Default UI created: Super Mario");

    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Loop: button-based UI switching + LVGL ticks + e-paper refresh
 * ------------------------------------------------------------- */
void loop()
{
    // Handle UI switching (debounced)
    if (digitalRead(BUTTON_KEY0) == LOW)
    { // Vehicle
        switch_ui(UI_VEHICLE_DASHBOARD);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY1) == LOW)
    { // Smart Home
        switch_ui(UI_SMART_HOME);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY2) == LOW)
    { // Super Mario
        switch_ui(UI_SUPER_MARIO);
        delay(300);
    }

    // Drive LVGL internal timers only (no driver I/O in UI layer)
    ui_update_loop();

    // Check if e-paper refresh is needed (driver logic stays here)
    if (e1001_display_should_refresh(&e1001_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1001_display_refresh(&e1001_driver);
        Serial.println("Display refresh complete.");
    }
}
```

</details>

### 効果デモンストレーション

EE04ボード上のボタンを押すことで、対応するUIインターフェースに切り替えることができます：

- KEY1: 車両ダッシュボード
- KEY2: スマートホームダッシュボード
- KEY3: スーパーマリオ
- デフォルト: スーパーマリオ

<div class="table-center">
<table align="center">
    <tr>
        <th>スーパーマリオ</th>
        <th>車両</th>
        <th>スマートホーム</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_3.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

### リソース

- **7.5" モノクロeInkエンクロージャー（3Dモデル）**: [Printablesからダウンロード](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
