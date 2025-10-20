---
description: 60GHz mmWave転倒検知センサーキット XIAO ESP32C6 (MR60FDA2) の使用開始
title: MR60FDA2の使用開始
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /ja/getting_started_with_mr60fda2_mmwave_kit
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# 60GHz mmWave転倒検知センサーキット XIAO ESP32C6 (MR60FDA2) の使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div><br />

XIAO用の先進的な**mmWaveセンサーモジュール**をご紹介します。転倒検知と[心拍](https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/)監視の両方に対応した最先端の監視ソリューションを提供するよう設計されています。Wi-FiとBluetooth接続機能を内蔵した堅牢なXIAO ESP32マイクロコントローラーを搭載し、これらのモジュールは精密で信頼性の高い検知機能を提供します。リアルタイムでの転倒監視や敏感な精度での心拍追跡が必要な場合でも、当社のモジュールはカスタマイズ可能なRGB LEDと環境光センシングを含む最先端技術を搭載しています。Grove GPIOポートによる簡単な拡張オプションにより、これらの多用途モジュールはスマートホーム統合からヘルスケア監視まで、幅広いアプリケーションに最適です。

## 特徴

- **Wi-Fi & Bluetooth対応**: 両モジュールはESPHomeファームウェアがプリフラッシュされたXIAO ESP32を搭載し、迅速なセットアップとカスタマイズを保証します。
- **転倒検知モジュール**:
  - **精密な転倒検知**: 100° x 40°の検知角度で3x3x3メートルエリアをカバーします。
  - **静的存在検知**: 最大6メートル離れた静止している個人を監視します。

<!-- - **心拍検知モジュール**:
  - **敏感な心拍監視**: 最大1.5メートルから心拍を検知します。
  - **静的存在検知**: 最大6メートル離れた静止している個人を監視します。 -->
  
- **環境センシング**:
  - **BH1750光センサー**: 1から65,535ルクスの環境光を測定します。
  - **WS2812 RGB LED**: 視覚的フィードバックとDIYプロジェクト用のカスタマイズ可能なLED。
- **拡張可能な接続性**: 追加のセンサーやモジュールを追加するためのGrove GPIOポートを含みます。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 仕様

| **一般パラメータ**   |                                      |
| ------------------------ | ------------------------------------ |
| **mmWaveファームウェア**      | 転倒検知監視 |
| **検知範囲**      | 人間静的存在検知: 最大6メートル<br />転倒検知: <br />- 3x3x3メートル範囲<br />- 水平視野角(FoV) 120°<br />- 垂直FoV 100° |
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **ボタン**               | リセット |
| **光センサー**         | BH1750 範囲: 1から65,535ルクス、最大100,000ルクスまでの調整可能な測定 |
| **接続性**         | 1 GPIOポート (D0, D10) |
| **ピンヘッダー間隔**   | 2.54mm |
| **電源供給**         | 5V/1A入力 |
| **消費電力**    | 0.5w: スタンバイモード<br />0.8w: アクティベーションモード<br />1.4w: Groveリレー状態での動作 |

## アプリケーション

- セキュリティシステム
- ヘルスケアモニタリング
- スマートホームオートメーション
- 高齢者ケア

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## はじめに

### 設置方法と検知範囲

天井取り付け高さ2.2-3.0m、最大検知半径2m、mmWaveセンサーがある面を検知方向に向けて設置してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放的な空間で使用し、モジュールの干渉を防ぐため、検知範囲内で以下のシナリオを避けてください：

- 複数のレーダーが近すぎる場所に設置されている
- 風でカーテンが動いたり植物が揺れたりする
- 水流や水膜
- 大きな金属面や鏡の反射
- ガラスや薄い木板を通しての検知
- 振動しやすい設置場所
- 低品質な電源の使用

:::

### ソフトウェア準備（Arduino）

:::info 注意

デフォルトでは、MR60BHA2は[XIAO ESP32C6](/ja/xiao_esp32c6_getting_started)が事前に組み立てられていますが、通信と統合のために他の様々なマイクロコントローラーとも互換性があります。

:::

XIAO シリーズでArduinoを初めて使用する場合は、お使いのボードに適したセットアップガイドに従ってください：

- **XIAO ESP32S3**: [XIAO ESP32S3 はじめに ガイド](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)を参照してください。
- **XIAO ESP32C3**: [Seeed Studio XIAO ESP32C3 はじめに](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)ガイドに従ってください。
- **XIAO ESP32C6**: [Seeed Studio XIAO ESP32C6 はじめに](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)ガイドに従ってください。

ボードのセットアップが完了したら、以下の手順に進んでください：

1. **Seeed mmWave ライブラリをダウンロード**：
   - GitHubから[Seeed mmWave ライブラリ](https://github.com/Love4yzp/Seeed-mmWave-library)をダウンロードします。

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Arduino IDEにライブラリをインストール**：
   - Arduino IDEを開きます。
   - **スケッチ > ライブラリをインクルード > .ZIP形式のライブラリをインストール...**に移動します。
   - ダウンロードした`.zip`ファイルを選択してライブラリをインストールします。
3. **XIAOボードを接続**：
   - XIAOボードをUSB経由でコンピューターに接続します。
   - Arduino IDEで、**ツール > ボード**に移動し、XIAOボードモデルを選択します。
   - **ツール > ポート**で正しいポートを選択します。
4. **サンプルスケッチを読み込み**：
   - **ファイル > スケッチ例 > Seeed Arduino mmWave**に移動します。
   - 転倒検知に関連するサンプルを選択します。
   - コードを確認し、必要に応じて調整を行います。
5. **スケッチをアップロード**：
   - **アップロード**をクリックしてコードをXIAOボードに書き込みます。
   - Arduino IDEで**シリアルモニター**を開いて、リアルタイムのセンサーデータを表示します。

<!-- ## Hardware Connections -->

### 使用方法

このセクションでは、転倒検知、RGB LED制御、光センシングなど、様々な機能でSeeed Arduino mmWaveライブラリを素早く使い始めるためのサンプルコードスニペットを提供します。

<!-- 
### Breath Module

This example demonstrates how to use the **MR60BHA2** sensor for monitoring breathing and heartbeat.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// Set up serial communication depending on the board type
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);
}

void loop() {
if (mmWave.update(100)) {
 float total_phase, breath_phase, heart_phase;
 if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {
   Serial.printf("total_phase: %.2f\t", total_phase);
   Serial.printf("breath_phase: %.2f\t", breath_phase);
   Serial.printf("heart_phase: %.2f\n", heart_phase);
 }

 float breath_rate;
 if (mmWave.getBreathRate(breath_rate)) {
   Serial.printf("breath_rate: %.2f\n", breath_rate);
 }

 float heart_rate;
 if (mmWave.getHeartRate(heart_rate)) {
   Serial.printf("heart_rate: %.2f\n", heart_rate);
 }

 float distance;
 if (mmWave.getDistance(distance)) {
   Serial.printf("distance: %.2f\n", distance);
 }
}
}
``` -->

#### Fall Module

この例では、転倒検知に**MR60FDA2**センサーを使用する方法を示しています。

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include <hp_BH1750.h>  //inlude the library
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmwaveSerial(0);
#else
#  define mmwaveSerial Serial1
#endif

#define LIGHT_GPIO D0

/****** instance ******/

hp_BH1750 BH1750;  // create the sensor object

SEEED_MR60FDA2 mmWave;

Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(1, /* pixelPin */ D1, NEO_GRB + NEO_KHZ800);

/****** funtions ******/

void relay_init();
void relay_on();
void relay_off();

/****** variables ******/
uint32_t sensitivity = 15;
float height = 2.8, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

const uint8_t dark_lux = 10;

void setup() {
  bool result;
  Serial.begin(115200);
  mmWave.begin(&mmwaveSerial);
  /* init relay device*/
  relay_init();

  /* init RGB LED */
  pixels.begin();
  pixels.clear();
  pixels.setBrightness(8);
  pixels.show();
  pixels.setPixelColor(0, pixels.Color(125, 125, 125));
  /* init built-in light ambient light sensor */
  BH1750.begin(BH1750_TO_GROUND);  // will be false no sensor found
                                   // | already connected to I2C
  BH1750.calibrateTiming();
  BH1750.start(BH1750_QUALITY_HIGH2,
               254);  // start the first measurement in setup
  /* set mmwave-fall parameters */
  mmWave.setUserLog(0);

  /** set the height of the installation **/
  if (mmWave.setInstallationHeight(height)) {
    Serial.printf("setInstallationHeight success: %.2f\n", height);
  } else {
    Serial.println("setInstallationHeight failed");
  }

  /** Set threshold **/
  if (mmWave.setThreshold(threshold)) {
    Serial.printf("setThreshold success: %.2f\n", threshold);
  } else {
    Serial.println("setThreshold failed");
  }

  /** Set sensitivity **/
  if (mmWave.setSensitivity(sensitivity)) {
    Serial.printf("setSensitivity success %d\n", sensitivity);
  } else {
    Serial.println("setSensitivity failed");
  }

  /** get new parameters of mmwave **/
  if (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,
                                rect_XR, rect_ZF, rect_ZB)) {
    Serial.printf("height: %.2f\tthreshold: %.2f\tsensitivity: %d\n", height,
                  threshold, sensitivity);
    Serial.printf(
        "rect_XL: %.2f\trect_XR: %.2f\trect_ZF: %.2f\trect_ZB: %.2f\n", rect_XL,
        rect_XR, rect_ZF, rect_ZB);
  } else {
    Serial.println("getRadarParameters failed");
  }
}

typedef enum {
  EXIST_PEOPLE,
  NO_PEOPLE,
  PEOPLE_FALL,
} MMWAVE_STATUS;

MMWAVE_STATUS status = NO_PEOPLE, last_status = NO_PEOPLE;
float lux = 100;
void loop() {
  /* get status */
  if (mmWave.update(100)) {
    bool is_human, is_fall;
    // Get the human detection status
    if (mmWave.getHuman(is_human)) {
      // Get the fall detection status
      if (mmWave.getFall(is_fall)) {
        // Determine the status based on human and fall detection
        if (!is_human && !is_fall) {
          status = NO_PEOPLE;  // No human and no fall detected
        } else if (is_fall) {
          status = PEOPLE_FALL;  // Fall detected
        } else {
          status = EXIST_PEOPLE;  // Human detected without fall
        }
      }
    }
    // Get the human detection status
    if (!mmWave.getHuman(is_human) && !mmWave.getFall(is_fall)) {
      status = NO_PEOPLE;  // No human and no fall detected
    } else if (is_fall) {
      status = PEOPLE_FALL;  // Fall detected
    } else {
      status = EXIST_PEOPLE;  // Human detected without fall
    }
  }

  switch (status) {
    case NO_PEOPLE:
      Serial.printf("Waiting for people");
      break;
    case EXIST_PEOPLE:
      Serial.printf("PEOPLE !!!");
      break;
    case PEOPLE_FALL:
      Serial.printf("FALL !!!");
      break;
    default:
      break;
  }
  Serial.print("\n");

  /* change interactive Light*/
  if (status != last_status) {  // switching LED
    switch (status) {
      case NO_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 0, 255));  // BLUE
        break;
      case EXIST_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // GREEN
        break;
      case PEOPLE_FALL:
        pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // RED
        break;
      default:
        break;
    }
    pixels.show();
    last_status = status;
  }

  /* update lux value */
  if (BH1750.hasValue() == true) {
    lux = BH1750.getLux();
    BH1750.start(BH1750_QUALITY_HIGH2, 254);
  }

  Serial.print("LUX: ");
  Serial.print(lux);
  Serial.print("\t");

  if ((status == EXIST_PEOPLE || status == PEOPLE_FALL) && lux < dark_lux) {
    relay_on();
  } else {
    relay_off();
  }
}

void relay_init() {
  pinMode(LIGHT_GPIO, OUTPUT);
}
void relay_on() {
  digitalWrite(LIGHT_GPIO, HIGH);
}
void relay_off() {
  digitalWrite(LIGHT_GPIO, LOW);
}
```

Arduino シリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/fall_detection.png" style={{width:700, height:'auto'}}/></div>

#### RGB LED を点滅させる

この例では、NeoPixel ライブラリを使用して RGB LED を制御する方法を示します。

- **ステップ 1.** `Adafruit_NeoPixel` ライブラリをダウンロードする

**Sketch > Include Liarbry > Manage Libraries...** に移動し、**Adafruit_NeoPixel** を検索して、最新バージョンをインストールします。

- **ステップ 2.** 以下のコードを新しいスケッチにコピーします：

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>

const int pixelPin = D1;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
Serial.begin(115200);
pixels.begin();
pixels.clear();
pixels.show();
}

void loop() {
for (int i = 0; i < 10; i++) {
 pixels.setPixelColor(0, pixels.Color(255, 0, 0));
 pixels.show();
 delay(100);
 pixels.setPixelColor(0, pixels.Color(0, 0, 0));
 pixels.show();
 delay(100);
}

for (int i = 255; i >= 0; i--) {
 pixels.setPixelColor(0, pixels.Color(i, 0, 0));
 pixels.show();
 delay(10);
}
}
```

- **ステップ 3.** 正しいボードとポート番号を選択してプログラムをアップロードします。

プログラムが正常にアップロードされると、mmWave センサーモジュールの右側にある RGB LED が点滅しているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### 光センサー (BH1750)

この例では、BH1750 センサーを使用して光強度値を読み取る方法を示します。

- **ステップ 1.** `hp_BH1750` ライブラリをダウンロードします

**スケッチ > ライブラリをインクルード > ライブラリを管理...** に移動し、**hp_BH1750** を検索して、最新バージョンをインストールします。

- **ステップ 2.** 以下のコードを新しいスケッチにコピーします：

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("No BH1750 sensor found!");
 while (true) {}
}

Serial.printf("conversion time: %dms\n", BH1750.getMtregTime());
BH1750.start();
}

void loop() {
if (BH1750.hasValue()) {
 float lux = BH1750.getLux();
 Serial.println(lux);

 BH1750.start();
}
}
```

- **ステップ 3.** 正しいボードとポート番号を選択してプログラムをアップロードします。

Arduino シリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

<!-- 
### Breath モジュール API

この例では、`SEEED_MR60BHA2`クラスを使用してMR60BHA2センサーとインターフェースし、心拍と呼吸のモニタリングを行います。各主要機能の動作は以下の通りです：

- **`mmWave.begin(&mmWaveSerial)`**: 
  - 指定されたシリアルインターフェースを使用して通信用にセンサーを初期化します。XIAOボードとMR60BHA2センサー間の接続を設定します。

- **`mmWave.update(100)`**:
  - センサーデータを更新します。パラメータ`100`はミリ秒単位のタイムアウト値で、センサーが新しいデータを提供するまでの待機時間を指定します。この時間内に新しいデータが利用可能な場合、関数は`true`を返します。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 心拍と呼吸活動に関連する位相情報を取得します。
  - `total_phase`は全体的な位相シフトを表し、`breath_phase`と`heart_phase`はそれぞれ呼吸と心拍活動に特有のものです。

- **`mmWave.getBreathRate(float &rate)`**:
  - センサーによって検出された現在の呼吸数を取得します。呼吸数は参照変数`rate`に返されます。

- **`mmWave.getHeartRate(float &rate)`**:
  - センサーによって検出された現在の心拍数を取得します。心拍数は参照変数`rate`に返されます。

- **`mmWave.getDistance(float &distance)`**:
  - センサーから検出されたオブジェクト（例：人体）までの距離を取得します。この関数は検出された信号の範囲を理解するのに役立ちます。 -->

## Fall モジュール API

この例では、転倒検知のためにMR60FDA2センサーとインターフェースする`SEEED_MR60FDA2`クラスを使用します。各主要機能の動作は以下の通りです：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 通信用にセンサーを初期化し、XIAOボードとMR60FDA2センサー間のシリアル接続を設定します。

- **`mmWave.setInstallationHeight(float height)`**:
  - レーダーの設置高度を設定します。これは正確な転倒検知にとって重要です。`height`パラメータはセンサーが設置される高度（メートル単位）を指定し、初期化設定パラメータは`2.2 m`で、有効範囲は通常1〜5メートルです。

- **`mmWave.setThreshold(float threshold)`**:
  - 転倒検知の閾値を設定します。レーダーのデフォルト転倒閾値は`0.6 m`です。この値は、センサーからの高度と距離に基づいて転倒を検知する際のレーダーの感度を決定します。

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - 転倒検知のためのレーダーの感度を調整します。感度の初期値は`3`で、これは3フレームのデータの平均を表します。通常の値は3〜10の範囲で、値が高いほどセンサーが潜在的な転倒により敏感に反応します。

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - 設置高度、転倒検知閾値、感度設定を含む、レーダーの現在の設定パラメータを取得します。これらのパラメータは参照変数を通じて返されます。

- **`mmWave.getHuman()`**:
  - レーダーによって人の存在が検知されているかどうかをチェックします。人が検知された場合は`true`を、そうでなければ`false`を返します。

- **`mmWave.getFall()`**:
  - 転倒が検知されたかどうかを判定します。この関数は転倒が検知された場合は`true`を、そうでなければ`false`を返します。

## モジュールファームウェアアップグレード

:::caution
レーダーファームウェアの変更は危険な操作ですので、各ステップを慎重に実行する前に、このセクションを注意深く読んでください。ステップが正しく実行されない場合、レーダーがブリック状態になったり、使用できなくなったりする可能性があることをご承知おきください。

**特別な注意事項：Radar MR60BHA2を購入された場合は、以下の方法で不正にファームウェアをフラッシュしないでください。デバイスが確実にブリック状態になります！！！！**
:::

まず、XIAO ESP32C6とMR60FDA2モジュールを接続します。次に、以下のコードを使用してXIAOをプログラムします。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

void setup() {
  // Initialize the serial communication for debugging
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for Serial to initialize
  }

  // Initialize the mmWaveSerial communication
  mmWaveSerial.begin(115200);
}

void loop() {
  // Check if there is data available from mmWaveSerial
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // Forward data to Serial
  }

  // Check if there is data available from Serial
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // Forward data to mmWaveSerial
  }
}
```

:::tip
上記のコードの機能は、モジュールのシリアルポートをXIAOのUSBシリアルポートに透過的に送信することで、XIAOを通じてモジュールのファームウェアをアップグレードできるようにすることです。  
アップグレードプロセス中は、XIAOをPCに接続してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

モジュールから送信された元のデータが表示されます。

次に、OTAツールとファームウェアをここからダウンロードして解凍する必要があります。

- **MR60FDA2 ファームウェアアップグレードツール**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 ファームウェア v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)

1. シリアルポートを確認して接続します（ボーレートを115200に設定）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 「REQUEST UPDATE」をクリックしてアップグレードモードに入ります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 「C」または「43」が印刷された場合、モジュールがアップグレードモードに入ったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. アップグレードするファームウェアを選択します。選択後、自動的にアップグレード状態に入ります。

アップグレードが完了すると、自動的に通常モードにジャンプします。ジャンプしない場合は、電源を切って再起動し、OTAツールを使用してシリアルポートデータを表示してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file-fda2.png" style={{width:700, height:'auto'}}/></div>

5. アップグレードが完了した後、OTAツールを使用してバージョンと生データを読み取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done-fda2.png" style={{width:700, height:'auto'}}/></div>

6. アップグレード完了後、XIAO ESP32C6のファームウェアを再フラッシュする必要があります。

:::tip
上記の手順で誤った操作により異常が発生し、ファームウェアの書き込みを再試行できず、レーダーが正常に動作しない場合、ファームウェアの破損によりレーダーがブリック状態になった可能性があります。デバイスを復旧する唯一の方法は、**[こちら](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**のファイルとドキュメントを参照することです。ただし、誤った操作によりブリック状態になったデバイスについては、技術サポートや支援を提供していないことをご理解ください。
:::

## カスタマイズ対応

キットをあなた独自のアプリケーションに合わせてカスタマイズしたいですか？

mmWaveモジュールをカスタマイズする際の3Dポイントクラウドデータ生成と干渉ゾーン設定について詳しく知りたい場合は、Seeedがコンセプトから製造まで迅速な開発のためのワンストップR&Dカスタマイズおよび製造サービスを提供しています。詳細については [iot@seeed.cc](mailto:iot@seeed.cc) までお問い合わせください。

:::danger カスタマイズサービスの説明
レーダーのファームウェアとアルゴリズムはオープンソースではなく、転倒高さ設定、取り付け位置設定などのレーダーの複雑なパラメータにはカスタマイズサービスが必要で、追加のカスタマイズ費用とMOQが発生する場合があります。
:::

## リソース

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub Repository**: 完全なコードベースとドキュメントは [Seeed mmWave Library GitHub page](https://github.com/Love4yzp/Seeed-mmWave-library) でアクセスできます。
- **ESPHome Documentation**: さらなるカスタマイズと統合については、[ESPHome documentation](https://esphome.io/) を参照してください。
- **MR60FDA2 Firmware upgrade tool**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 Firmware v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUI Software**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2 Module Technical Specification**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frame Interface Manual**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)
- **Radar Firmware Recovery Method via Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
