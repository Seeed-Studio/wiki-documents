---
description: XIAO ePaper Driver Board (EE0x) ファミリ向け PlatformIO クックブック - ハードウェア概要、プロジェクトのブートストラップ、ライブラリ設定、および ESP32-S3 上でのエンドツーエンドのプログラミング。EE04 を動作例として使用しますが、EE02 / EE03 / EE05 も同じワークフローを共有します。
title: PlatformIO クックブック
keywords:
  - 電子ペーパーディスプレイ
  - PlatformIO
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/pio_show_1.webp
sidebar_position: 2
slug: /ee04_with_platformio
aliases:
  - /ee0x_with_platformio
last_update:
  date: 04/28/2026
  author: Zeller
createdAt: '2025-10-09'
updatedAt: '2026-04-28'
---

# PlatformIO クックブック: XIAO ePaper Driver Boards (EE0x)

:::tip このクックブックは EE0x ファミリ全体をカバーします
**EE02 / EE03 / EE04 / EE05** に適用できます。4 つのボードはいずれも同じ XIAO ESP32-S3 ベースと同じ `Seeed_GFX` ドライバパイプラインを共有しているため、プロジェクト設定、ライブラリ一覧、コードパターンはすべて同一です。ボード間で変わる唯一の点は、`driver.h` 用の [Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) で選択する `BOARD_SCREEN_COMBO` の値だけです。

**動作例: EE04 + 7.5 インチ 800×480 モノクロ電子ペーパースクリーン。** `driver.h` 内のボード + スクリーンの組み合わせを自分のものに置き換えれば、残りのワークフロー（ボタン GPIO、バッテリ ADC、ダッシュボード UI、ボタンドリブンのページ切り替え）はそのまま引き継がれます。
:::

:::note Arduino を使いたい場合はこちら
このクックブックは **PlatformIO 専用** です。より一般的なパスである **Arduino IDE** を使いたい場合は、プラットフォームレベルのガイドとして **[Work with Arduino](/ja/epaper_work_with_arduino)** を、EE0x ボードにも適用できるハードウェアレベルの例として [reTerminal E シリーズ Arduino クックブック](/ja/reterminal_e10xx_with_arduino) を参照してください（Configuration Tool が正しい `driver.h` を生成します）。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:500, height:'auto'}}/></div>

## PlatformIO の紹介

PlatformIO は、組み込みシステム向けに設計された強力かつ高い拡張性を備えた開発エコシステムです。多数の開発ボードやマイコンをシームレスにサポートし、比類ない柔軟性を提供します。PlatformIO を際立たせているのは、その優れたスケーラビリティです。特定のボードがネイティブサポートされていない場合でも、そのアーキテクチャによりカスタムボード定義を容易に追加できます。

特に、Arduino に慣れた開発者にとっては、関連ライブラリをインクルードするだけで Arduino スタイルのコードをコンパイルおよびデプロイできるため、PlatformIO はそのギャップを埋める存在となります。

### ハードウェアの準備

XIAO ePaper Display Board EE04 と、サポートされているサイズのスクリーンを用意する必要があります。このチュートリアルでは、24 ピン 800×480 7.5 インチの電子ペーパースクリーンを例として使用します。
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

使用しているシステムに応じて [Vscode](https://code.visualstudio.com/download) をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### PlatformIO のインストール

VSCode を開き、Extensions をクリックして PlatformIO を検索し、インストールを選択します。インストールが完了したら、VSCode を再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 新規プロジェクト

- PIO Home インターフェースを開き、`New Project` を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: プロジェクト名を入力します。
- Board: Seeed Studio XIAO ESP32S3 を選択します。
- Framework: Ardunio を選択します。
- Location: プロジェクトファイルのパスはカスタムパスを設定するか、デフォルトパスを選択できます。
- 「Finish」をクリックし、作成が完了するまで待ちます。その後、ワークスペースでプロジェクトファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### Seeed GFX ライブラリの追加

:::tip
このライブラリは TFT ライブラリと同等の機能を持ちますが、互換性はありません。TFT ライブラリやその他の類似したディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

ここでは Seeed_GFX ライブラリを使用します。これは、さまざまな Seeed Studio 製ディスプレイデバイスを包括的にサポートします。

**Step 1.** GitHub から Seeed_GFX ライブラリをダウンロードします:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** 展開したファイルをプロジェクトファイルの `lib` ディレクトリに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** `driver.h` ファイルを追加します。

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- ツールページで、使用しているスクリーン仕様を選択します。ここでは、7.5 インチのモノクロ電子ペーパースクリーンを選択しています。
- ドライバボードとして XIAO ePaper Display Board EE04 を選択すると、対応するドライバコードが生成されます。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
誤った選択をすると、スクリーンには何も表示されません。
そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- PlatformIO プロジェクトファイルの `lib` ディレクトリの下に新しく `driver` フォルダを作成し、その中に `driver.h` ファイルを追加します。生成されたヘッダファイルのコードをコピーし、Ctrl + S を押して保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### アップロード

コードを `main.cpp` にコピーし、`Build` をクリックして完了後にアップロードします。

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

- 動作例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### ユーザーボタン

EE04 には、さまざまな制御用途に使用できる 3 つのユーザープログラマブルボタンが搭載されています。このセクションでは、Arduino を使用してボタンの状態を読み取り、ボタン押下に応答する方法を示します。

EE04 では、3 つのボタンは ESP32-S3 に次のように接続されています。

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

すべてのボタンはアクティブ Low であり、押されているときは LOW、離されているときは HIGH を読み取ります。

基本的なボタン読み取りの例

この例では、ボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

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

コード解説：

- **コア関数の解析**

1. **`pinMode(pin, mode)`**  
   - 役割：ピンのモードを設定します。  
   - ここでは `INPUT_PULLUP` モードを使用して内部プルアップ抵抗を有効にしています。これにより、ボタンが押されていないときはピンがデフォルトで高レベル（HIGH）を出力し、ボタンが押されてグラウンドに接続されると低レベル（LOW）を出力します。

2. **`digitalRead(pin)`**  
   - 役割：指定したピンのレベル状態（HIGH または LOW）を読み取ります。  
   - ループ内で使用してボタンの現在状態をリアルタイムに取得し、ボタンが動作したかどうかを判断します。

3. **`Serial.begin(baud)`** と **`Serial.println()`**  
   - 前者はシリアル通信を初期化します（ボーレート 115200）、後者はテキスト情報をシリアルポートへ出力します。これにより、モニタ上にボタン状態を表示できます。

4. **`delay(ms)`**  
   - 役割：指定したミリ秒数だけプログラムを一時停止します。  
   - ここでは 2 つの場面で使用されています。1 つ目は `setup()` 内でシリアルポート接続を待つため、2 つ目はボタン状態が変化した後に 50ms 待つためです。これは「チャタリングが収まるまで待つ」ことでハードウェアデバウンスを実現し、誤動作を防ぎます。

- **コアロジックの解析**

1. **状態比較による検出**  
   - 各ボタンの「前回の状態」（例：`lastKey0State`）を記録し、ループ内で「現在の状態」を読み取ります。  
   - 「現在の状態 ≠ 前回の状態」であれば、ボタンが動作した（押された／離された）ことを示します。

2. **ボタン動作の判定**  
   - 状態が HIGH から LOW に変化したとき：これは「押された」と判定され（"pressed" を出力）、  
   - 状態が LOW から HIGH に変化したとき：これは「離された」と判定されます（"released" を出力）。  
   - 各状態変化の後、「前回の状態」を現在の状態に更新し、次回比較の基準とします。

3. **ループ実行**  
   - `loop()` 関数は無限ループで動作し、「状態を読む → 状態を比較する → 結果を出力する」という処理を繰り返し実行することで、リアルタイム検出を実現します。

- 動作例：

Serial Monitor でシリアルポートの状態を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_button_1.png" style={{width:800, height:'auto'}}/></div>

### バッテリー電圧

- XIAO ePaper Display Board EE04 は 3.7V ～ 4.2V のリチウムバッテリーで動作します。さらに、電圧を測定してバッテリー電圧をリアルタイムに監視するための ADC インターフェースも備えています。
- ADC 測定ピンは `A0 (GPIO1)`、ADC 有効化ピンは `D5 (GPIO_6)` です。

接続：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_0.png" style={{width:600, height:'auto'}}/></div><br/>

バッテリー電圧を監視するためのプログラムです。あくまで参考用です。

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

コード解説：

- 主な機能：

  - **バッテリー電圧の取得**：ADC ピンを介して分圧されたバッテリー電圧を読み取ります（バッテリー電圧は Arduino の ADC 基準電圧を超える可能性があるため、事前に分圧が必要です）。
  - **精度の最適化**：複数回サンプリングして平均化することで、回路ノイズの影響を低減します。
  - **電圧変換**：ADC のデジタル値を実際のバッテリー電圧に変換します（分圧比と基準電圧を考慮）。
  - **シリアル出力**：測定した電圧を一定周期でシリアルポートに出力し、外部機器（例：PC）から確認できるようにします。

- コア関数と役割

  - `setup()`（初期化関数）

    - **役割**：プログラム起動時に 1 回だけ実行され、ハードウェアや各種パラメータを設定します。
    - **主な処理**：
      - `Serial.begin(115200)`：シリアル通信を初期化し（ボーレート 115200）、電圧データを出力できるようにします。
      - `analogReadResolution(12)`：ADC 分解能を 12 ビット（読み取り範囲：0～4095）に設定し、測定精度を高めます。
      - `pinMode(BATTERY_ADC, INPUT)`：バッテリー検出ピン（A0）をアナログ信号入力モードに設定します。
      - `pinMode(ADC_EN, OUTPUT)` と `digitalWrite(ADC_EN, HIGH)`：ADC モジュールを有効化します（低消費電力用途では、測定時のみオンにすることも可能）。

  - `loop()`（メインループ関数）

    - **役割**：初期化後に繰り返し実行され、周期的に電圧を検出して出力します。
    - **主な処理**：
      - `readBatteryVoltage()` を呼び出して現在のバッテリー電圧を取得します。
      - `Serial.print()`／`Serial.println()` を用いて、電圧値を小数点以下 2 桁（例："Battery Voltage: 3.82 V"）で整形して出力します。
      - `delay(500)`：測定間隔を 0.5 秒に設定します。

  - `readBatteryVoltage()`（コア測定関数）

    - **役割**：ADC 信号を読み取り、結果を最適化し、実際の電圧値に変換します。
    - **主な処理**：
      - **平均サンプリング**：ADC を 10 回読み取り、合計して平均化することでノイズを低減します。
      - `analogRead(BATTERY_ADC)`：A0 ピンからアナログ電圧を読み取ります（戻り値は 0～4095）。
      - `delay(2)`：サンプル間に 2ms の間隔を設け、測定の安定性を高めます。
      - **電圧計算**：`(adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO` の式で実際のバッテリー電圧を算出します。
      - 計算された電圧値（float 型）を `loop()` に返し、そこで利用します。

- 動作例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_1.png" style={{width:800, height:'auto'}}/></div>

## UI デザイン

EE04 を使うことで、ダッシュボードや画像表示など、さまざまなクリエイティブなデザインを行うことができます。ボタンと組み合わせることで、複数ページの切り替えも可能です。以下はダッシュボードの一例です。

:::tip
このルーチンでは、ダッシュボードの描画処理は LVGL ライブラリに基づいて行われます。

LVGL 公式ドキュメント： [LVGL docs](https://docs.lvgl.io/master/examples.html#get-started)
:::

### ソフトウェア

- LVGL ライブラリを追加します。PIO Home インターフェースの Library ツールで LVGL を検索し、現在のプロジェクトにライブラリを追加します。LVGL 9.0 以上のバージョンを使用することを推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_1.png" style={{width:800, height:'auto'}}/></div>

- **lib** ディレクトリ内
  - **dashboard** フォルダを作成し、その中に `dashboard_ui.cpp` と `dashboard_ui.h` ファイルを作成します。これらのファイルは主に LGVL の描画コードを保存するために使用します。
  - **e1001_display** フォルダを作成し、画面ドライバファイル `e1001_display.c` と `e1001_display.h` を追加します。
  - **lvgl_conf** フォルダを作成し、LVGL の設定ファイル `lv_conf.h` を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_2.png" style={{width:800, height:'auto'}}/></div><br/>

完成版の参考コード： [EE04_Dashboard_ui.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_dashboard_ui.zip)

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

### 効果デモ

EE04 ボード上のボタンを押すことで、対応する UI インターフェースに切り替えることができます：

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

- **7.5" モノクロ eInk エンクロージャ（3D モデル）**: [Download from Printables](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
