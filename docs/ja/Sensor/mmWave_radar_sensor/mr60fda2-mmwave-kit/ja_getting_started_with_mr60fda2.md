---
description: 60GHz mmWave転倒検知センサーキット（XIAO ESP32C6搭載、MR60FDA2）の使い方
title: MR60FDA2の使い方
keywords:
- mmwave
- レーダー
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /ja/getting_started_with_mr60fda2_mmwave_kit
sidebar_position: 0
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 60GHz mmWave転倒検知センサーキット（XIAO ESP32C6搭載、MR60FDA2）の使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

XIAO向けに設計された高度な**mmWaveセンサーモジュール**を紹介します。このモジュールは転倒検知と[心拍検知](https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/)の両方を提供する最先端の監視ソリューションです。Wi-FiとBluetooth接続を備えた強力なXIAO ESP32マイクロコントローラーによって駆動され、正確で信頼性の高い検知能力を提供します。リアルタイムでの転倒監視や高精度な心拍追跡が必要な場合でも、RGB LEDや周囲光センサーを含む最先端技術を搭載したこれらのモジュールが対応します。Grove GPIOポートを通じた簡単な拡張オプションにより、スマートホーム統合からヘルスケア監視まで、幅広い用途に適しています。

## 特徴

- **Wi-Fi & Bluetooth対応**: 両モジュールはXIAO ESP32を搭載し、ESPHomeファームウェアが事前にフラッシュされているため、迅速なセットアップとカスタマイズが可能です。
- **転倒検知モジュール**:
  - **正確な転倒検知**: 3x3x3メートルの範囲を100° x 40°の検知角度でカバー。
  - **静的存在検知**: 最大6メートル離れた静止した人物を監視。

<!-- - **心拍検知モジュール**:
  - **高感度心拍監視**: 最大1.5メートル離れた心拍を検知。
  - **静的存在検知**: 最大6メートル離れた静止した人物を監視。 -->
  
- **環境センサー**:
  - **BH1750光センサー**: 1～65,535ルクスの周囲光を測定。
  - **WS2812 RGB LED**: 視覚的フィードバックやDIYプロジェクト向けのカスタマイズ可能なLED。
- **拡張可能な接続性**: 追加センサーやモジュールを接続可能なGrove GPIOポートを搭載。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 仕様

| **一般的なパラメータ**   |                                      |
| ------------------------ | ------------------------------------ |
| **mmWaveファームウェア** | 転倒検知監視 |
| **検知範囲**            | 人間の静的存在検知: 最大6メートル<br />転倒検知: <br />- 3x3x3メートル範囲<br />- 水平方向視野角(FoV): 120°<br />- 垂直方向FoV: 100° |
| **MCU**                 | Seeed Studio XIAO ESP32C6 |
| **LED**                 | WS2812 RGB LED |
| **ボタン**              | リセット |
| **光センサー**          | BH1750 範囲: 1～65,535ルクス、最大100,000ルクスまで調整可能 |
| **接続性**              | 1 GPIOポート (D0, D10) |
| **ピンヘッダー間隔**    | 2.54mm |
| **電源供給**            | 5V/1A入力 |
| **消費電力**            | 0.5w: 待機モード<br />0.8w: アクティベーションモード<br />1.4w: Groveリレー状態で動作 |

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

天井に取り付ける場合の高さは2.2～3.0m、最大検知半径は2mです。mmWaveセンサーのある側を検知方向に合わせる必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放空間で使用してください。以下のような状況が検知範囲内にある場合、モジュールに干渉を与える可能性があるため避けてください：

- 複数のレーダーが近接して設置されている  
- 風によるカーテンや植物の揺れ  
- 水の流れや水膜  
- 大面積の金属や鏡の反射  
- ガラスや薄い木板を通した検知  
- 振動が発生しやすい設置場所  
- 低品質の電源の使用  

:::

### ソフトウェア準備 (Arduino)

:::info 注意

MR60BHA2はデフォルトで[XIAO ESP32C6](/ja/xiao_esp32c6_getting_started)にプリインストールされていますが、他の様々なマイクロコントローラーとも通信および統合が可能です。

:::

ArduinoをXIAOシリーズで初めて使用する場合は、ボードに適したセットアップガイドに従ってください：

- **XIAO ESP32S3**: [XIAO ESP32S3 Getting Started Guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)を参照してください。
- **XIAO ESP32C3**: [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)ガイドに従ってください。
- **XIAO ESP32C6**: [Getting Started with Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)ガイドに従ってください。

ボードのセットアップが完了したら、以下の手順を進めてください：

1. **Seeed mmWaveライブラリをダウンロード**:
   - GitHubから[Seeed mmWaveライブラリ](https://github.com/Love4yzp/Seeed-mmWave-library)をダウンロードします。

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Arduino IDEにライブラリをインストール**:
   - Arduino IDEを開きます。
   - **スケッチ > ライブラリを含める > .ZIPライブラリを追加...**を選択します。
   - ダウンロードした`.zip`ファイルを選択してライブラリをインストールします。
3. **XIAOボードを接続**:
   - USB経由でXIAOボードをコンピュータに接続します。
   - Arduino IDEで**ツール > ボード**に移動し、XIAOボードモデルを選択します。
   - **ツール > ポート**で正しいポートを選択します。
4. **サンプルスケッチをロード**:
   - **ファイル > サンプル > Seeed Arduino mmWave**に移動します。
   - 転倒検知に関連するサンプルを選択します。
   - コードを確認し、必要に応じて調整を行います。
5. **スケッチをアップロード**:
   - **アップロード**をクリックしてXIAOボードにコードを書き込みます。
   - Arduino IDEの**シリアルモニタ**を開き、リアルタイムのセンサーデータを確認します。

<!-- ## ハードウェア接続 -->

### 使用方法

このセクションでは、Seeed Arduino mmWaveライブラリを使用して転倒検知、RGB LED制御、光センサーなどの機能を迅速に開始するためのサンプルコードを提供します。

<!-- 
### 呼吸モジュール

この例では、**MR60BHA2**センサーを使用して呼吸と心拍をモニタリングする方法を示します。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// ボードタイプに応じたシリアル通信の設定
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

#### 転倒モジュール

この例では、**MR60FDA2**センサーを使用して転倒検知を行う方法を示します。

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include <hp_BH1750.h>  // ライブラリをインクルード
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmwaveSerial(0);
#else
#  define mmwaveSerial Serial1
#endif

#define LIGHT_GPIO D0

/****** インスタンス ******/

hp_BH1750 BH1750;  // センサーオブジェクトを作成

SEEED_MR60FDA2 mmWave;

Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(1, /* pixelPin */ D1, NEO_GRB + NEO_KHZ800);

/****** 関数 ******/

void relay_init();
void relay_on();
void relay_off();

/****** 変数 ******/
uint32_t sensitivity = 15;
float height = 2.8, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

const uint8_t dark_lux = 10;

void setup() {
  bool result;
  Serial.begin(115200);
  mmWave.begin(&mmwaveSerial);
  /* リレーデバイスの初期化 */
  relay_init();

  /* RGB LEDの初期化 */
  pixels.begin();
  pixels.clear();
  pixels.setBrightness(8);
  pixels.show();
  pixels.setPixelColor(0, pixels.Color(125, 125, 125));
  /* 内蔵光センサーの初期化 */
  BH1750.begin(BH1750_TO_GROUND);  // センサーが見つからない場合はfalse
                                   // | すでにI2Cに接続済み
  BH1750.calibrateTiming();
  BH1750.start(BH1750_QUALITY_HIGH2,
               254);  // setupで最初の測定を開始
  /* mmWave転倒検知パラメータの設定 */
  mmWave.setUserLog(0);

  /** 設置高さの設定 **/
  if (mmWave.setInstallationHeight(height)) {
    Serial.printf("setInstallationHeight success: %.2f\n", height);
  } else {
    Serial.println("setInstallationHeight failed");
  }

  /** 閾値の設定 **/
  if (mmWave.setThreshold(threshold)) {
    Serial.printf("setThreshold success: %.2f\n", threshold);
  } else {
    Serial.println("setThreshold failed");
  }

  /** 感度の設定 **/
  if (mmWave.setSensitivity(sensitivity)) {
    Serial.printf("setSensitivity success %d\n", sensitivity);
  } else {
    Serial.println("setSensitivity failed");
  }

  /** mmWaveの新しいパラメータを取得 **/
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
  /* ステータスを取得 */
  if (mmWave.update(100)) {
    bool is_human, is_fall;
    // 人間検知ステータスを取得
    if (mmWave.getHuman(is_human)) {
      // 転倒検知ステータスを取得
      if (mmWave.getFall(is_fall)) {
        // 人間と転倒検知に基づいてステータスを決定
        if (!is_human && !is_fall) {
          status = NO_PEOPLE;  // 人間も転倒も検知されない
        } else if (is_fall) {
          status = PEOPLE_FALL;  // 転倒検知
        } else {
          status = EXIST_PEOPLE;  // 転倒なしで人間検知
        }
      }
    }
    // 人間検知ステータスを取得
    if (!mmWave.getHuman(is_human) && !mmWave.getFall(is_fall)) {
      status = NO_PEOPLE;  // 人間も転倒も検知されない
    } else if (is_fall) {
      status = PEOPLE_FALL;  // 転倒検知
    } else {
      status = EXIST_PEOPLE;  // 転倒なしで人間検知
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

  /* インタラクティブライトの変更 */
  if (status != last_status) {  // LEDの切り替え
    switch (status) {
      case NO_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 0, 255));  // 青
        break;
      case EXIST_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // 緑
        break;
      case PEOPLE_FALL:
        pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // 赤
        break;
      default:
        break;
    }
    pixels.show();
    last_status = status;
  }

  /* lux値を更新 */
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

#### RGB LED の点滅

この例では、NeoPixel ライブラリを使用して RGB LED を制御する方法を示します。

- **ステップ 1.** `Adafruit_NeoPixel` ライブラリをダウンロードします

**Sketch > Include Library > Manage Libraries...** に移動し、**Adafruit_NeoPixel** を検索して最新バージョンをインストールします。

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

この例では、BH1750 センサーを使用して光の強度値を読み取る方法を示します。

- **ステップ 1.** `hp_BH1750` ライブラリをダウンロードします

**Sketch > Include Library > Manage Libraries...** に移動し、**hp_BH1750** を検索して最新バージョンをインストールします。

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

<!-- ## API 説明 -->

<!-- 
### 呼吸モジュール API

この例では、`SEEED_MR60BHA2` クラスを使用して MR60BHA2 センサーをインターフェースし、心拍および呼吸のモニタリングを行います。以下は各主要関数の説明です：

- **`mmWave.begin(&mmWaveSerial)`**: 
  - 指定されたシリアルインターフェースを使用してセンサーを初期化します。この関数は XIAO ボードと MR60BHA2 センサー間の接続を設定します。

- **`mmWave.update(100)`**:
  - センサーデータを更新します。パラメータ `100` はタイムアウト値（ミリ秒）で、新しいデータがこの時間内に利用可能である場合、関数は `true` を返します。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 心拍および呼吸活動に関連するフェーズ情報を取得します。
  - `total_phase` は全体のフェーズシフトを表し、`breath_phase` と `heart_phase` はそれぞれ呼吸および心拍活動に特化したフェーズを表します。

- **`mmWave.getBreathRate(float &rate)`**:
  - センサーによって検出された現在の呼吸速度を取得します。速度は参照変数 `rate` に返されます。

- **`mmWave.getHeartRate(float &rate)`**:
  - センサーによって検出された現在の心拍速度を取得します。速度は参照変数 `rate` に返されます。

- **`mmWave.getDistance(float &distance)`**:
  - センサーから検出された物体（例：人体）までの距離を取得します。この関数は検出信号の範囲を理解するのに役立ちます。 -->

## 転倒検知モジュール API

この例では、MR60FDA2センサーを使用して転倒検知を行うために `SEEED_MR60FDA2` クラスを使用します。以下は各主要関数の説明です：

- **`mmWave.begin(&mmWaveSerial)`**:
  - センサーを通信のために初期化し、XIAOボードとMR60FDA2センサー間のシリアル接続を設定します。

- **`mmWave.setInstallationHeight(float height)`**:
  - レーダーの設置高さを設定します。これは正確な転倒検知にとって重要です。`height` パラメータはセンサーが設置される高さ（メートル単位）を指定します。初期設定値は `2.2 m` で、有効範囲は通常1〜5メートルです。

- **`mmWave.setThreshold(float threshold)`**:
  - 転倒検知の閾値を設定します。レーダーのデフォルトの転倒閾値は `0.6 m` です。この値は、センサーの高さと距離に基づいて転倒を検知する感度を決定します。

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - 転倒検知の感度を調整します。感度の初期値は `3` で、これはデータの平均値を3フレーム分取ることを意味します。通常、値の範囲は3〜10で、値が高いほど転倒検知に対してセンサーが敏感になります。

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - レーダーの現在の設定パラメータ（設置高さ、転倒検知閾値、感度設定）を取得します。これらのパラメータは参照変数を通じて返されます。

- **`mmWave.getHuman()`**:
  - レーダーが人間の存在を検知しているかどうかを確認します。人間が検知された場合は `true` を返し、そうでない場合は `false` を返します。

- **`mmWave.getFall()`**:
  - 転倒が検知されたかどうかを判断します。この関数は転倒が検知された場合に `true` を返し、そうでない場合は `false` を返します。

## モジュールファームウェアのアップグレード

:::caution
レーダーファームウェアの変更はリスクのある操作です。このセクションを慎重に読み、各ステップを正確に実行してください。ステップを誤ると、レーダーが使用不能になる可能性があります。

**特別注意：MR60BHA2レーダーを購入した場合、以下の方法で違法にファームウェアをフラッシュしないでください。デバイスが確実に壊れます!!!!**
:::

まず、XIAO ESP32C6とMR60FDA2モジュールを接続します。その後、以下のコードを使用してXIAOをプログラムします。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// ESP32ボードの場合、HardwareSerialライブラリをインクルードし、mmWaveシリアル通信用のHardwareSerialオブジェクトを作成
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// それ以外の場合、mmWaveSerialをSerial1として定義
#  define mmWaveSerial Serial1
#endif

void setup() {
  // デバッグ用のシリアル通信を初期化
  Serial.begin(115200);
  while (!Serial) {
    ; // Serialが初期化されるまで待機
  }

  // mmWaveSerial通信を初期化
  mmWaveSerial.begin(115200);
}

void loop() {
  // mmWaveSerialからデータが利用可能か確認
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // データをSerialに転送
  }

  // Serialからデータが利用可能か確認
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // データをmmWaveSerialに転送
  }
}
```

:::tip
上記コードの機能は、モジュールのシリアルポートをXIAOのUSBシリアルポートに透過的に転送し、XIAOを介してモジュールのファームウェアをアップグレードすることです。  
アップグレードプロセス中はXIAOをPCに接続してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

モジュールから送信された元のデータが表示されます。

次に、OTAツールとファームウェアを以下からダウンロードして解凍する必要があります。

- **MR60FDA2 ファームウェアアップグレードツール**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 ファームウェア v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)

1. シリアルポートを確認して接続します（ボーレートを115200に設定）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 「REQUEST UPDATE」をクリックしてアップグレードモードに入ります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 「C」または「43」が表示された場合、モジュールがアップグレードモードに入ったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. アップグレードするファームウェアを選択します。選択後、自動的にアップグレード状態に入ります。

アップグレードが完了すると、自動的に通常モードに移行します。移行しない場合は、電源を切って再起動し、OTAツールを使用してシリアルポートデータを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file-fda2.png" style={{width:700, height:'auto'}}/></div>

5. アップグレードが完了した後、OTAツールを使用してバージョンと生データを読み取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done-fda2.png" style={{width:700, height:'auto'}}/></div>

6. アップグレードが完了した後、XIAO ESP32C6のファームウェアを再度フラッシュする必要があります。

:::tip
上記の手順で誤った操作を行い異常が発生し、ファームウェアの書き込みを再試行できず、レーダーが正常に動作しない場合、ファームウェアが破損してデバイスがブリック状態になった可能性があります。デバイスを復旧する唯一の方法は、**[こちら](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)** のファイルとドキュメントを参照することです。ただし、誤った操作によるブリック状態のデバイスについては、技術サポートや支援を提供していないことをご理解ください。
:::

## カスタマイズのためのオープン

独自のアプリケーションに合わせてキットをカスタマイズしたいですか？

mmWaveモジュールをカスタマイズする際の3Dポイントクラウドデータ生成や干渉ゾーン設定に関する詳細情報については、Seeedがコンセプトから製品化までの迅速な開発を支援するワンストップのR&Dカスタマイズおよび製造サービスを提供しています。詳細は [iot@seeed.cc](mailto:iot@seeed.cc) までお問い合わせください。

## リソース

- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: [Seeed mmWave Library GitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でコードベースとドキュメントを確認できます。
- **ESPHomeドキュメント**: カスタマイズや統合の詳細については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60FDA2ファームウェアアップグレードツール**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2ファームウェア v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWaveセンサーSCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2モジュール技術仕様書**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)
- **Jlinkによるレーダーファームウェア復旧方法**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>