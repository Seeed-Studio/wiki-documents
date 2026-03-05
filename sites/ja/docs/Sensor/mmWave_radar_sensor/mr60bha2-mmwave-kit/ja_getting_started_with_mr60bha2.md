---
description: XIAO ESP32C6（MR60BHA2）を用いた 60GHz mmWave 呼吸・心拍検出センサキット入門
title: MR60BHA2 入門ガイド
keywords:
  - mmwave
  - radar
  - MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /getting_started_with_mr60bha2_mmwave_kit
sku: 114993387
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/
---

# XIAO ESP32C6（MR60BHA2）を用いた 60GHz mmWave 呼吸・心拍検出センサキット入門

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div><br />

XIAO 向けの高度な **mmWave Sensor Modules** を紹介します。これは、[fall detection](https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/) と心拍モニタリングの両方に対応した最先端の監視ソリューションを提供するよう設計されています。Wi-Fi と Bluetooth を内蔵した高性能マイコン XIAO ESP32 によって駆動され、このモジュールは高精度かつ信頼性の高い検出機能を備えています。転倒をリアルタイムに監視する必要がある場合でも、心拍を高感度に計測したい場合でも、本モジュールはカスタマイズ可能な RGB LED や周囲光センサなどの最先端技術を搭載しています。Grove GPIO ポートによる容易な拡張オプションも備えており、スマートホーム連携からヘルスケアモニタリングまで、幅広いアプリケーションに最適です。

## 特長

- **Wi-Fi & Bluetooth 対応**: どちらのモジュールも XIAO ESP32 を搭載し、ESPHome ファームウェアがあらかじめ書き込まれているため、素早いセットアップとカスタマイズが可能です。
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **Heartbeat Detection Module**:
  - **高感度な心拍モニタリング**: 最大 1.5m 離れた位置から心拍を検出します。
  - **静的在席検知**: 最大 6m 離れた静止した人物を監視します。
- **環境センシング**:
  - **BH1750 光センサ**: 1〜65,535 lux の周囲光を測定可能。
  - **WS2812 RGB LED**: 視覚的フィードバックや DIY プロジェクト向けにカスタマイズ可能な LED。
- **拡張可能な接続性**: 追加のセンサやモジュールを接続できる Grove GPIO ポートを搭載。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 仕様

| **一般パラメータ**       |                                      |
| ------------------------ | ------------------------------------ |
| **mmWave Firmware**      | 呼吸および心拍検出 |
| **検出距離**             | 人体静的在席検知: 最大 6 m<br />呼吸および心拍検出: 1.5 m|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **Button**               | Rest |
| **Light Sensor**         | BH1750 範囲: 1〜65,535 lux、最大 100,000 lux まで調整可能 |
| **Connectivity**         | 1 GPIO Port (D0, D10) |
| **ピンヘッダ間隔**       | 2.54mm |
| **電源**                 | 5V/1A 入力 |
| **消費電力**             | 0.5w: 待機モード<br />0.8w: 動作開始モード<br />1.4w: Grove Relay 動作時 |

## 用途

- セキュリティシステム
- ヘルスケアモニタリング
- スマートホームオートメーション
- 高齢者ケア

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## はじめに

### 取り付け方法と検知範囲

:::caution
最新の呼吸および心拍レーダーは、睡眠時のシナリオでのみ使用することを推奨します。机に座っているときや運動中にレーダーの呼吸および心拍機能を使用しないでください。大きな誤差が生じる可能性があります。
:::

傾斜取り付け。睡眠時の呼吸および心拍検出が必要な場合は、傾斜させた取り付け方法を採用できます。レーダーはベッドの頭側真上 1m の高さに設置し、ベッド中央に向けて下向き 45° に傾けます。レーダーと胸郭との距離は 1.5m 以内に保ちます。レーダーの法線方向を主な検出位置と一致させることで、レーダーが呼吸および心拍データを検出できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放的な空間で使用し、検知範囲内で以下のような状況を避けて、モジュールへの干渉を防いでください。

- 複数のレーダーを近接して設置している場合  
- 風によるカーテンの揺れや植物の揺れ
- 水流や水膜  
- 広い金属面や鏡面による反射  
- ガラスや薄い木板越しの検出  
- 振動が発生しやすい設置場所  
- 低品質な電源の使用  

:::

### ソフトウェア準備（Arduino）

:::info Attention

MR60BHA2 にはデフォルトで [XIAO ESP32C6](/ja/xiao_esp32c6_getting_started) が組み立て済みですが、通信や統合のために他のさまざまなマイコンとも互換性があります。

:::

XIAO シリーズで Arduino を初めて使用する場合は、お使いのボードに対応したセットアップガイドに従ってください。

- **XIAO ESP32S3**: [XIAO ESP32S3 Getting Started Guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) を参照してください。
- **XIAO ESP32C3**: [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/) ガイドに従ってください。
- **XIAO ESP32C6**: [Getting Started with Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/) ガイドに従ってください。

ボードのセットアップが完了したら、次の手順に進みます。

1. **Seeed mmWave ライブラリをダウンロード**:

   - GitHub から [Seeed mmWave library](https://github.com/Love4yzp/Seeed-mmWave-library) をダウンロードします。

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Arduino IDE にライブラリをインストール**:
   - Arduino IDE を開きます。
   - **Sketch > Include Library > Add .ZIP Library...** を開きます。
   - ダウンロードした `.zip` ファイルを選択してライブラリをインストールします。
3. **XIAO ボードを接続**:
   - XIAO ボードを USB 経由でコンピュータに接続します。
   - Arduino IDE で **Tools > Board** に進み、使用する XIAO ボードのモデルを選択します。
   - **Tools > Port** から正しいポートを選択します。
4. **サンプルスケッチを読み込む**:
   - **File > Examples > Seeed Arduino mmWave** を開きます。
   - Heartbeat Detection 用の該当サンプルを選択します。
   - コードを確認し、必要に応じて調整します。
5. **スケッチを書き込む**:
   - **Upload** をクリックして、コードを XIAO ボードに書き込みます。
   - Arduino IDE の **Serial Monitor** を開き、リアルタイムのセンサデータを確認します。

<!-- ## Hardware Connections -->

### 使い方

このセクションでは、Seeed Arduino mmWave Library を使用して、呼吸モニタリング、RGB LED 制御、照度センシングなどの各種機能をすぐに使い始めるためのサンプルコードスニペットを紹介します。

#### Breath Module

このサンプルでは、**MR60BHA2** センサを使用して呼吸および心拍をモニタリングする方法を示します。

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

Arduino シリアルモニタ上での出力は次のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

返されるデータが `0` でない場合、検出範囲内に生体が存在することを示します。

#### 人体検知

このサンプルでは、**MR60BHA2** センサを使用して人体検知を行う方法を示します。

:::caution
MR60BHA2 モジュールの[ファームウェアをアップグレード](#モジュール-ファームウェア-アップグレード)して、最新バージョンにしていることを確認してください。  
最新のファームウェアでは、人の在室検知および人体オブジェクト関連の機能が追加されています。
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

Arduino シリアルモニタ上での出力は次のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
呼吸と心拍は 1.5 メートル以内で検出でき、在室は 1.5 ～ 6 メートルの範囲で検出できます。  
1.5m の範囲内に人がいる場合、モジュールは心拍および呼吸検出モードに入ります。
このモードでは、人体検知機能の感度が低下する場合があります。  
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

#### RGB LED を点滅させる

このサンプルでは、NeoPixel ライブラリを使用して RGB LED を制御する方法を示します。

- **Step 1.** `Adafruit_NeoPixel` ライブラリをダウンロードします

**Sketch > Include Liarbry > Manage Libraries...** に移動し、**Adafruit_NeoPixel** を検索して、最新バージョンをインストールします。

- **Step 2.** 次のコードを新しいスケッチにコピーします：

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

- **Step 3.** 正しいボードとポート番号を選択してプログラムを書き込みます。

プログラムが正常に書き込まれると、mmWave Sensor Modules の右側にある RGB LED が点滅しているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### 光センサ (BH1750)

このサンプルでは、BH1750 センサを使用して照度値を読み取る方法を示します。

- **Step 1.** `hp_BH1750` ライブラリをダウンロードします

**Sketch > Include Liarbry > Manage Libraries...** に移動し、**hp_BH1750** を検索して、最新バージョンをインストールします。

- **Step 2.** 次のコードを新しいスケッチにコピーします：

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

- **Step 3.** 正しいボードとポート番号を選択してプログラムを書き込みます。

Arduino シリアルモニタ上での出力は次のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## 呼吸モジュール API

このサンプルでは、`SEEED_MR60BHA2` クラスを使用して MR60BHA2 センサとインターフェースし、心拍および呼吸をモニタリングします。ここでは各主要関数の役割を説明します：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 指定したシリアルインターフェースを使用してセンサとの通信を初期化します。XIAO ボードと MR60BHA2 センサ間の接続を設定します。

- **`mmWave.update(100)`**:
  - センサデータを更新します。パラメータ `100` はミリ秒単位のタイムアウト値であり、センサが新しいデータを提供するまで待機する時間を指定します。この時間内に新しいデータが利用可能な場合、関数は `true` を返します。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 心拍および呼吸活動に関連する位相情報を取得します。
  - `total_phase` は全体的な位相シフトを表し、`breath_phase` と `heart_phase` はそれぞれ呼吸および心拍活動に特有の位相を表します。

- **`mmWave.getBreathRate(float &rate)`**:
  - センサが検出した現在の呼吸数を取得します。値は参照変数 `rate` に返されます。

- **`mmWave.getHeartRate(float &rate)`**:
  - センサが検出した現在の心拍数を取得します。値は参照変数 `rate` に返されます。

- **`mmWave.getDistance(float &distance)`**:
  - センサから検出対象（例：人体）までの距離を取得します。この関数は検出された信号の到達範囲を把握するのに役立ちます。

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - ポイントクラウドに関する情報を取得します。メッセージタイプの受信のみを実現しており、データがない場合でも正常です。
  - `PeopleCounting` 構造体には検出されたターゲットのベクタが含まれます。各ターゲットには次の属性があります：
    - `x_point` : ターゲットの X 座標（メートル単位）。
    - `y_point` : ターゲットの Y 座標（メートル単位）。
    - `dop_index` : ターゲットの速度を表すドップラーインデックス。
      - 実際の移動速度（cm/s）は `dop_index * RANGE_STEP` で計算できます。ここで `RANGE_STEP` は速度分解能です。
    - `cluster_index` : シーン内で個々のターゲットを識別するために使用されるターゲットのクラスタ ID。

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - 検出されたターゲットに関する情報を取得します。
  - `PeopleCounting` 構造体には検出されたターゲットのベクタが含まれます。各ターゲットには次の属性があります：
    - `x_point` : ターゲットの X 座標（メートル単位）。
    - `y_point` : ターゲットの Y 座標（メートル単位）。
    - `dop_index` : ターゲットの速度を表すドップラーインデックス。
      - 実際の移動速度（cm/s）は `dop_index * RANGE_STEP` で計算できます。ここで `RANGE_STEP` は速度分解能です。
    - `cluster_index` : シーン内で個々のターゲットを識別するために使用されるターゲットのクラスタ ID。

- **`mmWave.isHumanDetected()`**:
  - 人体が検出されているかどうかを返します。

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - レーダーの設置高さを設定します。これは正確な転倒検知のために非常に重要です。`height` パラメータはセンサーが設置されている高さ（メートル単位）を指定し、有効な範囲は通常 1〜5 メートルです。

- **`mmWave.setThreshold(float threshold)`**:
  - 転倒検知のしきい値を設定します。この値は、センサーからの高さと距離に基づいて転倒を検知する際のレーダーの感度を決定します。

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - 転倒検知に対するレーダーの感度を調整します。感度値は通常 3〜10 の範囲で、値が大きいほどセンサーは転倒の可能性に対してより敏感になります。

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - レーダーの現在の設定パラメータ（設置高さ、転倒検知しきい値、感度設定）を取得します。これらのパラメータは参照変数を通じて返されます。

- **`mmWave.getHuman()`**:
  - レーダーが人の存在を検知しているかどうかを確認します。人を検知した場合は `true` を返し、そうでない場合は `false` を返します。

- **`mmWave.getFall()`**:
  - 転倒が検知されたかどうかを判定します。この関数は、転倒が検知された場合は `true` を返し、検知されなかった場合は `false` を返します。-->

## モジュールのファームウェアアップグレード

:::caution
レーダーのファームウェアを変更することはリスクの高い操作です。そのため、このセクションをよく読んでから、各手順を慎重に実行してください。手順を正しく実行しないと、レーダーがブリック状態になったり、使用不能になったりする可能性があることに注意してください。

**特別な注意事項：Fall Radar MR60FDA2 を購入された場合は、以下の方法で違法にファームウェアを書き込まないでください。確実にデバイスがブリックします!!!!**
:::

:::tip
文章を読むよりも、**[動画](https://youtu.be/uic8__FFzos)** を参照してファームウェアを更新することもできます。以下の手順で XIAO 用の ESPHome ファームウェアが上書きされるため、レーダーのファームウェア更新後に、この[ウェブページ](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)から XIAO 用の ESPHome ファームウェアを書き込み直す必要がある場合があります。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uic8__FFzos?si=ijBJOLMk9Z5szwSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
:::

まず、XIAO ESP32C6 と MR60BHA2 モジュールを接続します。その後、以下のコードを使用して XIAO に書き込みます。

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
上記コードの機能は、モジュールのシリアルポートを XIAO の USB シリアルポートへ透過的に転送し、XIAO を介してモジュールのファームウェアをアップグレードできるようにすることです。  
アップグレードの過程では、XIAO を PC に接続してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

モジュールから送信される元のデータが表示されます。

次に、ここから OTA ツールとファームウェアをダウンロードして解凍する必要があります。

:::note
ファームウェア 1.6.12 には以下の更新があります：

1. 1.5 メートル以内で静止している場合にターゲットを見失う問題を修正しました。

2. 0〜3 メートルの範囲で移動するターゲットの追跡安定性を最適化し、以前のターゲット座標の不正確さを解消しました。ただし、レポートのリフレッシュレートは低下しました。

3. 呼吸および心拍の精度—このリリースでは更新はありません。関連する機械学習トレーニングの継続的な最適化を進めています。呼吸および心拍の精度を向上させるファームウェア更新は月末頃にリリースされる予定です。以前の呼吸および心拍アルゴリズムには根本的な問題があり、それはすでに対処済みです。

:::

- **MR60BHA2 Firmware upgrade tool**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 Firmware v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)

<details>

<summary>旧バージョンをプレビューするにはここをクリック</summary>

- **MR60BHA2 Firmware v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
ファームウェア 1.6.4 には以下の更新があります：

1. 呼吸および心拍検知機能を最適化し、小さな体の動きでデータが失われるバグを修正しました。  
2. 3D プレゼンス検知機能を強化しました：1.5 メートル以内で呼吸および心拍を検知でき、1.5〜6 メートルの範囲でプレゼンスを検知できます。  
3. 人員検知機能を追加し、6 メートルの範囲内で最大 3 人まで検知可能になりました。

:::

- **MR60BHA2 Firmware v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
ファームウェア 1.6.5 には以下の更新があります：

1. 人体が静止しているときに、呼吸および心拍が検知されない場合がある問題を修正しました。

:::

- **MR60BHA2 Firmware v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

:::note
ファームウェア 1.6.10 には以下の更新があります：

1. 呼吸メカニズムを最適化し、息止め時間が減少しない問題を解消しました。
2. データ収集機能を追加しました。

:::

</details>

1. シリアルポートを確認して接続します（ボーレートを 115200 に設定）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. "REQUEST UPDATE" をクリックしてアップグレードモードに入ります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. "C" または "43" が表示されれば、モジュールがアップグレードモードに入ったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. アップグレードするファームウェアを選択します。選択後、自動的にアップグレード状態に入ります。

アップグレードが完了すると、自動的に通常モードへ移行します。移行しない場合は、電源を切って再起動し、その後 OTA ツールを使用してシリアルポートのデータを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. アップグレード完了後、OTA ツールを使用してバージョンおよび生データを読み取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. アップグレード完了後、XIAO ESP32C6 のファームウェアを再度書き込む必要があります。

:::tip
上記の手順で誤った操作を行い異常が発生し、ファームウェアを書き込み直そうとしてもできず、レーダーが正常に動作しない場合、ファームウェアの破損によりレーダーがブリック状態になっている可能性があります。デバイスの復旧を試みる唯一の方法は、**[こちら](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)** のファイルとドキュメントを参照することです。ただし、誤操作によりブリックしたデバイスについては、技術サポートや支援を提供していないことをご理解ください。
:::

## カスタマイズのご相談

独自のアプリケーションに合わせてキットを特注したいですか？

mmWave モジュールをカスタマイズする際の 3D ポイントクラウドデータ生成や干渉ゾーン設定に関する詳細情報について、Seeed はコンセプトから量産までの迅速な開発を支援するワンストップの研究開発カスタマイズおよび製造サービスを提供しています。詳細については [iot@seeed.cc](mailto:iot@seeed.cc) までお問い合わせください。

:::danger Customised Service Description
レーダーのファームウェアおよびアルゴリズムはオープンソースではなく、3D ポイントクラウド、検知距離、レンジなどのレーダーの複雑なパラメータにはカスタマイズサービスが必要であり、追加のカスタマイズ料金や最小発注数量（MOQ）が発生する場合があります。
:::

## リソース

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub Repository**: [Seeed mmWave Library GitHub page](https://github.com/Love4yzp/Seeed-mmWave-library) でコードベース全体とドキュメントにアクセスできます。
- **ESPHome Documentation**: さらなるカスタマイズや統合については、[ESPHome documentation](https://esphome.io/) を参照してください。
- **MR60BHA2 Firmware upgrade tool**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 Firmware v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)
- **MR60BHA2 GUI Software**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2 Module Technical Specification**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frame Interface Manual**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Jlink を使用したレーダーファームウェア復旧方法**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
