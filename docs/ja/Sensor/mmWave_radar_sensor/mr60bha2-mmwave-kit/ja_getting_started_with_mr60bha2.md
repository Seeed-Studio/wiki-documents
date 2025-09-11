---
description: XIAO ESP32C6を使用した60GHz mmWave呼吸・心拍検出センサーキット（MR60BHA2）の使用開始
title: MR60BHA2の使用開始
keywords:
- mmwave
- radar
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /ja/getting_started_with_mr60bha2_mmwave_kit
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# XIAO ESP32C6を使用した60GHz mmWave呼吸・心拍検出センサーキット（MR60BHA2）の使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div><br />

XIAO向けの先進的な**mmWaveセンサーモジュール**をご紹介します。[転倒検出](https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/)と心拍モニタリングの両方に対応した最先端のモニタリングソリューションを提供するよう設計されています。内蔵Wi-FiとBluetooth接続機能を備えた堅牢なXIAO ESP32マイクロコントローラーを搭載し、これらのモジュールは精密で信頼性の高い検出機能を提供します。リアルタイムでの転倒監視や敏感な精度での心拍追跡が必要な場合でも、当社のモジュールは、カスタマイズ可能なRGB LEDや環境光センシングを含む最先端技術を搭載しています。Grove GPIOポートによる簡単な拡張オプションにより、これらの多用途モジュールは、スマートホーム統合からヘルスケアモニタリングまで、幅広いアプリケーションに最適です。

## 特徴

- **Wi-Fi & Bluetooth対応**: 両モジュールは、事前にESPHomeファームウェアがフラッシュされたXIAO ESP32を搭載し、迅速なセットアップとカスタマイズを保証します。
<!-- - **転倒検出モジュール**:
  - **精密な転倒検出**: 100° x 40°の検出角度で3x3x3メートルのエリアをカバーします。
  - **静的存在検出**: 最大6メートル離れた静止している個人を監視します。 -->
- **心拍検出モジュール**:
  - **敏感な心拍モニタリング**: 最大1.5メートルから心拍を検出します。
  - **静的存在検出**: 最大6メートル離れた静止している個人を監視します。
- **環境センシング**:
  - **BH1750光センサー**: 1から65,535ルクスの環境光を測定します。
  - **WS2812 RGB LED**: 視覚的フィードバックとDIYプロジェクト用のカスタマイズ可能なLED。
- **拡張可能な接続性**: 追加のセンサーやモジュールを追加するためのGrove GPIOポートを含みます。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 仕様

| **一般パラメータ**   |                                      |
| ------------------------ | ------------------------------------ |
| **mmWaveファームウェア**      | 呼吸・心拍検出 |
| **検出範囲**      | 人体静的存在検出：最大6メートル<br />呼吸・心拍検出：1.5メートル|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **ボタン**               | リセット |
| **光センサー**         | BH1750 範囲：1～65,535ルクス、最大100,000ルクスまで調整可能な測定 |
| **接続性**         | 1 GPIO ポート (D0, D10) |
| **ピンヘッダー間隔**   | 2.54mm |
| **電源供給**         | 5V/1A入力 |
| **消費電力**    | 0.5w：スタンバイモード<br />0.8w：アクティベーションモード<br />1.4w：Grove リレー状態での動作時 |

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

**方法1.** 側面設置。レーダーの設置高さは測定対象者の胸の高さと一致させることを推奨し、モジュール位置と胸の位置は≤1.5mとしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" style={{width:600, height:'auto'}}/></div>

**方法2.** 傾斜設置。睡眠時の呼吸と心拍検知のニーズに対しては、傾斜設置方法を採用できます。レーダーはベッドの頭部の真上1mの高さに設置し、ベッドの中央に向かって45°下向きに傾け、レーダーと胸腔の距離を1.5m以内に制御する必要があります。レーダーの法線方向を主要検知位置に合わせ、レーダーが呼吸と心拍データを検知できることを確保してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放空間で使用し、モジュールへの干渉を防ぐため、検知範囲内で以下のシナリオを避けてください：

- 複数のレーダーが近すぎる距離に設置されている
- 風によるカーテンの動きや植物の揺れ
- 水流と水膜
- 大面積の金属と鏡の反射
- ガラスや薄い木板を通した検知
- 振動しやすい設置場所
- 低品質電源の使用

:::

### ソフトウェア準備（Arduino）

:::info 注意

デフォルトでは、MR60BHA2は[XIAO ESP32C6](/xiao_esp32c6_getting_started)と組み立て済みで提供されますが、通信と統合のために様々な他のマイクロコントローラーと互換性があります。

:::

XIAOシリーズでArduinoを初めて使用する場合は、お使いのボードに適したセットアップガイドに従ってください：

- **XIAO ESP32S3**: [XIAO ESP32S3 はじめに ガイド](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)を参照してください。
- **XIAO ESP32C3**: [Seeed Studio XIAO ESP32C3 はじめに](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)ガイドに従ってください。
- **XIAO ESP32C6**: [Seeed Studio XIAO ESP32C6 はじめに](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)ガイドに従ってください。

ボードのセットアップが完了したら、以下の手順に進んでください：

1. **Seeed mmWaveライブラリをダウンロード**：

   - GitHubから[Seeed mmWaveライブラリ](https://github.com/Love4yzp/Seeed-mmWave-library)をダウンロードしてください。

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
   - 心拍検知に関連するサンプルを選択します。
   - コードを確認し、必要に応じて調整を行います。
5. **スケッチをアップロード**：
   - **アップロード**をクリックしてコードをXIAOボードに書き込みます。
   - Arduino IDEで**シリアルモニター**を開いて、リアルタイムセンサーデータを表示します。

<!-- ## Hardware Connections -->

### 使用方法

このセクションでは、呼吸モニタリング、RGB LED制御、光センシングなど、様々な機能でSeeed Arduino mmWaveライブラリを素早く使い始めるためのサンプルコードスニペットを提供します。

#### 呼吸モジュール

この例では、呼吸と心拍のモニタリングに**MR60BHA2**センサーを使用する方法を示します。

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
```

Arduino シリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

返されたデータが `0` でない場合、検出範囲内に生物が存在することを示します。

#### 人体検出

この例では、**MR60BHA2** センサーを人体検出に使用する方法を説明します。

:::caution
MR60BHA2 モジュールの[ファームウェアをアップグレード](#module-firmware-upgrade)して最新バージョンにしていることを確認してください。  
最新のファームウェアには、人体存在検出と人体オブジェクト関連機能が追加されています。
:::

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

SEEED_MR60BHA2 mmWave;

void setup() {
  Serial.begin(115200);
  mmWave.begin(&mmWaveSerial);
}

void loop() {
  if (mmWave.update(100)) {
    if (mmWave.isHumanDetected()) {
        Serial.printf("-----Human Detected-----\n");
    }

    PeopleCounting target_info;
    if (mmWave.getPeopleCountingTargetInfo(target_info)) {
        Serial.printf("-----Got Target Info-----\n");
        Serial.printf("Number of targets: %zu\n", target_info.targets.size());

        for (size_t i = 0; i < target_info.targets.size(); i++) {
            const auto& target = target_info.targets[i];
            Serial.printf("Target %zu:\n", i + 1);
            Serial.printf("  x_point: %.2f\n", target.x_point);
            Serial.printf("  y_point: %.2f\n", target.y_point);
            Serial.printf("  dop_index: %d\n", target.dop_index);
            Serial.printf("  cluster_index: %d\n", target.cluster_index);
            Serial.printf("  move_speed: %.2f cm/s\n", target.dop_index * RANGE_STEP);
        }
    }
    // delay(500);
  }
}
```

Arduino シリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
呼吸と心拍数は1.5メートル以内で検出でき、存在は1.5から6メートルの範囲で検出できます。  
1.5M範囲内に人がいる場合、モジュールは心拍と呼吸検出モードに入ります。   
このモードでは、人体検出機能の感度が低下する可能性があります。  
:::

<!-- 
### Fall Module

This example shows how to use the **MR60FDA2** sensor for fall detection.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60FDA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);

delay(1000);

uint32_t sensitivity = 15;
float height = 3.0, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

if (mmWave.setInstallationHeight(height)) {
 Serial.printf("setInstallationHeight success: %.2f\n", height);
} else {
 Serial.println("setInstallationHeight failed");
}

if (mmWave.setThreshold(threshold)) {
 Serial.printf("setThreshold success: %.2f\n", threshold);
} else {
 Serial.println("setThreshold failed");
}

if (mmWave.setSensitivity(sensitivity)) {
 Serial.printf("setSensitivity success %d\n", sensitivity);
} else {
 Serial.println("setSensitivity failed");
}

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

void loop() {
if (mmWave.update(100)) {
 bool is_human = mmWave.getHuman();
 if (is_human) {
   Serial.printf("People Exist: %s\n", is_human ? "true" : "false");
 }

 bool is_fall = mmWave.getFall();
 if (is_fall) {
   Serial.printf("isFall: %s\n", is_fall ? "true" : "false");
 }
}
}
``` -->

#### Blink RGB LED

This example demonstrates how to control an RGB LED using the NeoPixel library.

- **Step 1.** Download the `Adafruit_NeoPixel` library

Navigate to **Sketch > Include Liarbry > Manage Libraries...**, and search **Adafruit_NeoPixel**, install the lastest version.

- **Step 2.** Copy following code to a new sketch:

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

## 呼吸モジュール API

この例では、`SEEED_MR60BHA2` クラスを使用して MR60BHA2 センサーとインターフェースし、心拍と呼吸の監視を行います。各主要機能の説明は以下の通りです：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 指定されたシリアルインターフェースを使用してセンサーの通信を初期化します。XIAO ボードと MR60BHA2 センサー間の接続を設定します。

- **`mmWave.update(100)`**:
  - センサーデータを更新します。パラメータ `100` はミリ秒単位のタイムアウト値で、センサーが新しいデータを提供するまでの待機時間を指定します。この時間内に新しいデータが利用可能な場合、関数は `true` を返します。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 心拍と呼吸活動に関連する位相情報を取得します。
  - `total_phase` は全体的な位相シフトを表し、`breath_phase` と `heart_phase` はそれぞれ呼吸と心拍活動に特有のものです。

- **`mmWave.getBreathRate(float &rate)`**:
  - センサーによって検出された現在の呼吸数を取得します。レートは参照変数 `rate` で返されます。

- **`mmWave.getHeartRate(float &rate)`**:
  - センサーによって検出された現在の心拍数を取得します。レートは参照変数 `rate` で返されます。

- **`mmWave.getDistance(float &distance)`**:
  - センサーから検出されたオブジェクト（例：人体）までの距離を取得します。この関数は検出された信号の範囲を理解するのに有用です。

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - ポイントクラウドに関する情報を取得します。メッセージタイプの受信のみを実現しており、データがないのは正常です。
  - `PeopleCounting` 構造体には検出されたターゲットのベクターが含まれています。各ターゲットには以下の属性が含まれます：
    - `x_point` : ターゲットの X 座標（メートル単位）。
    - `y_point` : ターゲットの Y 座標（メートル単位）。
    - `dop_index` : ドップラーインデックス、ターゲットの速度を表します。
      - 実際の移動速度（cm/s 単位）は次のように計算できます：`dop_index * RANGE_STEP`、ここで `RANGE_STEP` は速度分解能です。
    - `cluster_index` : ターゲットのクラスター ID、シーン内の個々のターゲットを識別するために使用されます。

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - 検出されたターゲットに関する情報を取得します。
  - `PeopleCounting` 構造体には検出されたターゲットのベクターが含まれています。各ターゲットには以下の属性が含まれます：
    - `x_point` : ターゲットの X 座標（メートル単位）。
    - `y_point` : ターゲットの Y 座標（メートル単位）。
    - `dop_index` : ドップラーインデックス、ターゲットの速度を表します。
      - 実際の移動速度（cm/s 単位）は次のように計算できます：`dop_index * RANGE_STEP`、ここで `RANGE_STEP` は速度分解能です。
    - `cluster_index` : ターゲットのクラスター ID、シーン内の個々のターゲットを識別するために使用されます。

- **`mmWave.isHumanDetected()`**:
  - 人間が検出されているかどうかを返します。

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here's what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Sets the installation height of the radar, which is crucial for accurate fall detection. The `height` parameter specifies the height (in meters) at which the sensor is installed, with a valid range typically between 1 and 5 meters.

- **`mmWave.setThreshold(float threshold)`**:
  - Sets the fall detection threshold. This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Adjusts the sensitivity of the radar for fall detection. The sensitivity value typically ranges from 3 to 10, with higher values making the sensor more responsive to potential falls.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables.

- **`mmWave.getHuman()`**:
  - Checks if a human presence is detected by the radar. Returns `true` if a human is detected, and `false` otherwise.

- **`mmWave.getFall()`**:
  - Determines whether a fall has been detected. This function returns `true` if a fall is detected and `false` if not.-->

## モジュールファームウェアアップグレード

:::caution
レーダーファームウェアの変更は危険な操作ですので、各ステップを慎重に実行する前に、このセクションを注意深く読んでください。ステップが正しく実行されない場合、レーダーがブリック状態になったり使用不能になったりする可能性があることをご承知おきください。

**特別な注意事項：Fall Radar MR60FDA2を購入された場合は、以下の方法で不正にファームウェアをフラッシュしないでください。デバイスが確実にブリック状態になります！！！！**
:::

まず、XIAO ESP32C6とMR60BHA2モジュールを接続します。次に、以下のコードを使用してXIAOをプログラムします。

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

:::note
ファームウェア1.6.5には以下のアップデートがあります：
1. 人体が静止している時に呼吸と心拍数が検出されないことがある問題を修正しました。
:::

- **MR60BHA2 ファームウェアアップグレードツール**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 ファームウェア v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

<details>

<summary>旧バージョンをプレビューするにはここをクリック</summary>

- **MR60BHA2 ファームウェア v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 ファームウェア v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
ファームウェア1.6.4には以下のアップデートがあります：
1. 呼吸と心拍数検出機能を最適化し、小さな体の動きがデータ損失を引き起こすバグを修正しました。  
2. 3D存在検出機能を強化：1.5メートル以内で呼吸と心拍数を検出でき、1.5〜6メートルの範囲で存在を検出できます。  
3. 人員検出機能を追加し、6メートルの範囲内で最大3人まで検出できます。
:::

</details>

1. シリアルポートを確認して接続します（ボーレートを115200に設定）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 「REQUEST UPDATE」をクリックしてアップグレードモードに入ります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 「C」または「43」が印刷されると、モジュールがアップグレードモードに入ったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. アップグレードするファームウェアを選択します。選択後、自動的にアップグレード状態に入ります。

アップグレードが完了すると、自動的に通常モードにジャンプします。ジャンプしない場合は、電源を切って再起動し、OTAツールを使用してシリアルポートデータを表示してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. アップグレードが完了した後、OTAツールを使用してバージョンと生データを読み取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. アップグレード完了後、XIAO ESP32C6のファームウェアを再フラッシュする必要があります。

:::tip
上記の手順で誤った操作により異常が発生し、ファームウェアの書き込みを再試行できず、レーダーが正常に動作しない場合、ファームウェアの破損によりレーダーがブリック状態になった可能性があります。デバイスを復旧する唯一の方法は、**[こちら](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**のファイルとドキュメントを参照することです。ただし、誤った操作によりブリック状態になったデバイスについては、技術サポートと支援を提供しないことをご理解ください。
:::

## カスタマイズ対応

キットをあなた独自のアプリケーションに合わせてカスタマイズしたいですか？

mmWaveモジュールをカスタマイズする際の3Dポイントクラウドデータ生成と干渉ゾーン設定について詳しく知りたい場合は、Seeedがコンセプトから製造まで迅速な開発のためのワンストップR&Dカスタマイズおよび製造サービスを提供しています。詳細については [iot@seeed.cc](mailto:iot@seeed.cc) までお問い合わせください。

:::danger カスタマイズサービスの説明
レーダーのファームウェアとアルゴリズムはオープンソースではなく、3Dポイントクラウド、検出距離、範囲などのレーダーの複雑なパラメータにはカスタマイズサービスが必要で、追加のカスタマイズ費用とMOQが発生する場合があります。
:::

## リソース

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub Repository**: 完全なコードベースとドキュメントは [Seeed mmWave Library GitHub page](https://github.com/Love4yzp/Seeed-mmWave-library) でアクセスできます。
- **ESPHome Documentation**: さらなるカスタマイズと統合については、[ESPHome documentation](https://esphome.io/) を参照してください。
- **MR60BHA2 Firmware upgrade tool**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 Firmware v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)
- **MR60BHA2 GUI Software**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2 Module Technical Specification**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frame Interface Manual**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Radar Firmware Recovery Method via Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

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
