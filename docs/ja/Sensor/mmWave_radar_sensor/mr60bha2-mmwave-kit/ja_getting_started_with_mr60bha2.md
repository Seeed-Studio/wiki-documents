---
description: 60GHz mmWave 呼吸および心拍検出センサーキット XIAO ESP32C6 (MR60BHA2) の使い方
title: MR60BHA2 の使い方
keywords:
- mmwave
- レーダー
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /ja/getting_started_with_mr60bha2_mmwave_kit
sidebar_position: 0
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 60GHz mmWave 呼吸および心拍検出センサーキット XIAO ESP32C6 (MR60BHA2) の使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

最先端の XIAO 用 **mmWave センサーモジュール** をご紹介します。このモジュールは、[転倒検出](https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/)や心拍モニタリングのための高度な監視ソリューションを提供します。Wi-Fi と Bluetooth 接続を備えた強力な XIAO ESP32 マイクロコントローラーを搭載し、正確で信頼性の高い検出能力を実現します。リアルタイムでの転倒監視や高感度な心拍追跡が必要な場合でも、RGB LED のカスタマイズや周囲光センサーを含む最先端技術を備えています。Grove GPIO ポートを通じた簡単な拡張オプションにより、スマートホーム統合からヘルスケアモニタリングまで、幅広い用途に対応する汎用性の高いモジュールです。

## 特徴

- **Wi-Fi & Bluetooth 対応**: 両モジュールは XIAO ESP32 によって駆動され、ESPHome ファームウェアが事前にフラッシュされており、迅速なセットアップとカスタマイズが可能です。
<!-- - **転倒検出モジュール**:
  - **正確な転倒検出**: 3x3x3 メートルの範囲をカバーし、100° x 40° の検出角度を持ちます。
  - **静的存在検出**: 最大 6 メートル離れた静止した個人を監視します。 -->
- **心拍検出モジュール**:
  - **高感度心拍モニタリング**: 最大 1.5 メートルの距離から心拍を検出します。
  - **静的存在検出**: 最大 6 メートル離れた静止した個人を監視します。
- **環境センサー**:
  - **BH1750 光センサー**: 1 から 65,535 lux の範囲で周囲光を測定します。
  - **WS2812 RGB LED**: 視覚的フィードバックや DIY プロジェクト向けのカスタマイズ可能な LED。
- **拡張可能な接続性**: 追加のセンサーやモジュールを接続するための Grove GPIO ポートを備えています。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 仕様

| **一般的なパラメータ**   |                                      |
| ------------------------ | ------------------------------------ |
| **mmWaveファームウェア** | 呼吸および心拍検出 |
| **検出範囲**            | 人間の静的存在検出: 最大6メートル<br />呼吸および心拍検出: 1.5メートル |
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

**方法1.** 側面取り付け。レーダーの設置高さは測定対象者の胸の高さと一致することが推奨され、モジュール位置と胸位置の距離が1.5m以下である必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" style={{width:600, height:'auto'}}/></div>

**方法2.** 傾斜取り付け。睡眠時の呼吸および心拍検出のニーズに応じて、傾斜取り付け方法を採用できます。レーダーはベッドの頭上1mの高さに設置し、ベッドの中央に向かって45°下向きに傾けます。レーダーと胸腔の距離は1.5m以内に制御され、レーダーの正面方向が主な検出位置に一致するようにして、呼吸および心拍データを検出できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放空間で使用してください。以下のような検出範囲内の状況を避けて、モジュールへの干渉を防いでください：

- 複数のレーダーが近接して設置されている  
- 風によるカーテンや植物の揺れ  
- 水の流れや水膜  
- 大面積の金属や鏡の反射  
- ガラスや薄い木板を通した検出  
- 振動が発生しやすい設置場所  
- 低品質の電源の使用  

:::

### ソフトウェア準備 (Arduino)

:::info 注意

デフォルトでは、MR60BHA2は[XIAO ESP32C6](/ja/xiao_esp32c6_getting_started)と事前に組み立てられていますが、通信および統合のために他のさまざまなマイクロコントローラーと互換性があります。

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
   - XIAOボードをUSB経由でコンピュータに接続します。
   - Arduino IDEで**ツール > ボード**に移動し、XIAOボードモデルを選択します。
   - **ツール > ポート**で正しいポートを選択します。
4. **サンプルスケッチをロード**:
   - **ファイル > サンプル > Seeed Arduino mmWave**に移動します。
   - 心拍検出に関連するサンプルを選択します。
   - コードを確認し、必要に応じて調整を行います。
5. **スケッチをアップロード**:
   - **アップロード**をクリックしてXIAOボードにコードを書き込みます。
   - Arduino IDEの**シリアルモニター**を開き、リアルタイムのセンサーデータを確認します。

### 使用方法

このセクションでは、呼吸モニタリング、RGB LED制御、光センサーなどの機能を含む、Seeed Arduino mmWaveライブラリを迅速に使用開始するためのコード例を提供します。

#### 呼吸モジュール

この例では、**MR60BHA2**センサーを使用して呼吸と心拍をモニタリングする方法を示します。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// ボードタイプに応じてシリアル通信を設定
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

Arduinoシリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

返されるデータが`0`でない場合、検出範囲内に生物が存在することを示します。

#### 人間検出

この例では、**MR60BHA2**センサーを使用して人間を検出する方法を示します。

:::caution
必ずMR60BHA2モジュールの[ファームウェアを最新バージョンにアップグレード](#module-firmware-upgrade)してください。  
最新のファームウェアでは、人間の存在検出および人間関連の機能が追加されています。
:::

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// ボードがESP32の場合、HardwareSerialライブラリをインクルードし、mmWaveシリアル通信用のHardwareSerialオブジェクトを作成
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// それ以外の場合、mmWaveSerialをSerial1として定義
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
    if (mmWave.getPeopleCountingTartgetInfo(target_info)) {
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

Arduinoシリアルモニターでの出力は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
呼吸と心拍は1.5メートル以内で検出可能であり、存在検出は1.5～6メートルの範囲で可能です。  
1.5M範囲内に人がいる場合、モジュールは心拍と呼吸検出モードに入ります。  
このモードでは、人間検出機能の感度が低下する可能性があります。  
:::

#### RGB LEDを点滅させる

この例では、NeoPixelライブラリを使用してRGB LEDを制御する方法を示します。

- **ステップ1.** `Adafruit_NeoPixel`ライブラリをダウンロード

**スケッチ > ライブラリを含める > ライブラリを管理...**に移動し、**Adafruit_NeoPixel**を検索して最新バージョンをインストールします。

- **ステップ2.** 以下のコードを新しいスケッチにコピーします：

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

- **Step 3.** 正しいボードとポート番号を選択してプログラムをアップロードします。

プログラムが正常にアップロードされると、mmWaveセンサーモジュールの右側にあるRGB LEDが点滅しているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### 光センサー (BH1750)

この例では、BH1750センサーを使用して光強度の値を読み取る方法を示します。

- **Step 1.** `hp_BH1750`ライブラリをダウンロードします。

**Sketch > Include Library > Manage Libraries...** に移動し、**hp_BH1750**を検索して最新バージョンをインストールします。

- **Step 2.** 以下のコードを新しいスケッチにコピーします：

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("BH1750センサーが見つかりません！");
 while (true) {}
}

Serial.printf("変換時間: %dms\n", BH1750.getMtregTime());
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

- **Step 3.** 正しいボードとポート番号を選択してプログラムをアップロードします。

Arduinoシリアルモニター上で以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## 呼吸モジュールAPI

この例では、`SEEED_MR60BHA2`クラスを使用してMR60BHA2センサーとインターフェースし、心拍および呼吸のモニタリングを行います。以下は各主要関数の説明です：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 指定されたシリアルインターフェースを使用してセンサーを初期化します。これにより、XIAOボードとMR60BHA2センサー間の接続が設定されます。

- **`mmWave.update(100)`**:
  - センサーデータを更新します。パラメータ`100`はタイムアウト値（ミリ秒）で、新しいデータが提供されるまでの待機時間を指定します。この時間内に新しいデータが利用可能な場合、関数は`true`を返します。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 心拍および呼吸活動に関連する位相情報を取得します。
  - `total_phase`は全体の位相シフトを表し、`breath_phase`と`heart_phase`はそれぞれ呼吸および心拍活動に特化した位相を表します。

- **`mmWave.getBreathRate(float &rate)`**:
  - センサーによって検出された現在の呼吸速度を取得します。速度は参照変数`rate`に返されます。

- **`mmWave.getHeartRate(float &rate)`**:
  - センサーによって検出された現在の心拍速度を取得します。速度は参照変数`rate`に返されます。

- **`mmWave.getDistance(float &distance)`**:
  - センサーから検出されたオブジェクト（例：人体）までの距離を取得します。この関数は検出信号の範囲を理解するのに役立ちます。

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - 点群情報を取得します。この関数はメッセージタイプの受信を実現するだけであり、データがない場合は正常です。
  - `PeopleCounting`構造体には検出されたターゲットのベクトルが含まれます。各ターゲットには以下の属性が含まれます：
    - `x_point` : ターゲットのX座標（メートル単位）。
    - `y_point` : ターゲットのY座標（メートル単位）。
    - `dop_index` : ターゲットの速度を表すドップラーインデックス。
      - 実際の移動速度（cm/s）は次のように計算できます：`dop_index * RANGE_STEP`（`RANGE_STEP`は速度分解能）。
    - `cluster_index` : シーン内の個々のターゲットを識別するためのターゲットのクラスタID。

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - 検出されたターゲット情報を取得します。
  - `PeopleCounting`構造体には検出されたターゲットのベクトルが含まれます。各ターゲットには以下の属性が含まれます：
    - `x_point` : ターゲットのX座標（メートル単位）。
    - `y_point` : ターゲットのY座標（メートル単位）。
    - `dop_index` : ターゲットの速度を表すドップラーインデックス。
      - 実際の移動速度（cm/s）は次のように計算できます：`dop_index * RANGE_STEP`（`RANGE_STEP`は速度分解能）。
    - `cluster_index` : シーン内の個々のターゲットを識別するためのターゲットのクラスタID。

- **`mmWave.isHumanDetected()`**:
  - 人間が検出されたかどうかを返します。

<!-- 
### 転倒モジュールAPI

この例では、`SEEED_MR60FDA2`クラスを使用してMR60FDA2センサーとインターフェースし、転倒検出を行います。以下は各主要関数の説明です：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 呼吸モジュールと同様に、シリアル接続を設定してセンサーを初期化します。

- **`mmWave.setInstallationHeight(float height)`**:
  - レーダーの設置高さを設定します。これは正確な転倒検出に重要です。`height`パラメータはセンサーが設置されている高さ（メートル単位）を指定し、有効範囲は通常1〜5メートルです。

- **`mmWave.setThreshold(float threshold)`**:
  - 転倒検出閾値を設定します。この値は、センサーが高さと距離に基づいて転倒を検出する感度を決定します。

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - 転倒検出のためのレーダー感度を調整します。感度値は通常3〜10の範囲であり、高い値はセンサーが潜在的な転倒に対してより反応しやすくなります。

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - レーダーの現在の構成パラメータ（設置高さ、転倒検出閾値、感度設定）を取得します。これらのパラメータは参照変数を介して返されます。

- **`mmWave.getHuman()`**:
  - レーダーによって人間の存在が検出されたかどうかを確認します。人間が検出された場合は`true`を返し、そうでない場合は`false`を返します。

- **`mmWave.getFall()`**:
  - 転倒が検出されたかどうかを判断します。この関数は転倒が検出された場合に`true`を返し、そうでない場合は`false`を返します。-->

## モジュールのファームウェアアップグレード

:::caution
レーダーのファームウェアを変更することはリスクのある操作です。このセクションを注意深く読み、各ステップを慎重に実行してください。ステップを正しく実行しない場合、レーダーが使用不能になる可能性があります。

**特別な注意：Fall Radar MR60FDA2を購入した場合、以下の方法で違法にファームウェアをフラッシュしないでください。デバイスが確実に壊れます!!!!**
:::

まず、XIAO ESP32C6とMR60BHA2モジュールを接続します。その後、以下のコードを使用してXIAOをプログラムします。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// ボードがESP32の場合、HardwareSerialライブラリをインクルードし、
// mmWaveシリアル通信用のHardwareSerialオブジェクトを作成します
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// それ以外の場合、mmWaveSerialをSerial1として定義します
#  define mmWaveSerial Serial1
#endif

void setup() {
  // デバッグ用のシリアル通信を初期化します
  Serial.begin(115200);
  while (!Serial) {
    ; // Serialが初期化されるまで待機します
  }

  // mmWaveSerial通信を初期化します
  mmWaveSerial.begin(115200);
}

void loop() {
  // mmWaveSerialからデータが利用可能か確認します
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // データをSerialに転送します
  }

  // Serialからデータが利用可能か確認します
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // データをmmWaveSerialに転送します
  }
}
```

:::tip
上記のコードの機能は、モジュールのシリアルポートをXIAOのUSBシリアルポートに透過的に転送し、XIAOを介してモジュールのファームウェアをアップグレードすることです。  
アップグレードプロセス中はXIAOをPCに接続してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

モジュールから送信された元のデータが表示されます。

次に、OTAツールとファームウェアをダウンロードして解凍する必要があります。

:::note
ファームウェア1.6.5には以下の更新が含まれています：
1. 人体が静止している場合に呼吸と心拍数が検出されない問題を修正しました。
:::

- **MR60BHA2 ファームウェアアップグレードツール**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 ファームウェア v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

<details>

<summary>旧バージョンをプレビューするにはここをクリック</summary>

- **MR60BHA2 ファームウェア v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
ファームウェア1.6.4には以下の更新が含まれています：
1. 小さな身体の動きによるデータ損失を修正し、呼吸と心拍数検出機能を最適化しました。  
2. 3D存在検出機能を強化：呼吸と心拍数は1.5メートル以内で検出可能、存在は1.5〜6メートルの範囲で検出可能。  
3. 人員検出機能を追加：6メートル以内で最大3人を検出可能。
:::

</details>

1. シリアルポートを確認して接続します（ボーレートを115200に設定）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 「REQUEST UPDATE」をクリックしてアップグレードモードに入ります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 「C」または「43」が表示された場合、モジュールがアップグレードモードに入ったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. アップグレードするファームウェアを選択します。選択後、自動的にアップグレード状態に入ります。

アップグレードが完了すると、自動的に通常モードに移行します。移行しない場合は電源を切って再起動し、OTAツールを使用してシリアルポートデータを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. アップグレードが完了したら、OTAツールを使用してバージョンと生データを読み取ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. アップグレードが完了した後、XIAO ESP32C6のファームウェアを再フラッシュする必要があります。

:::tip
上記のステップで誤った操作を行い異常が発生し、ファームウェアを再度書き込もうとしてもレーダーが正常に動作しない場合、ファームウェアが破損してレーダーが壊れた可能性があります。デバイスを復旧する唯一の方法は、**[こちら](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**のファイルとドキュメントを参照することです。ただし、誤った操作によるデバイスの破損については、技術サポートや支援を提供しないことをご理解ください。
:::

## カスタマイズのご提案

あなたの独自のアプリケーションに合わせてキットをカスタマイズしたいですか？

mmWaveモジュールをカスタマイズする際の3Dポイントクラウドデータ生成や干渉ゾーン設定に関する詳細情報については、Seeedがコンセプトから製品化までの迅速な開発を可能にするワンストップのR&Dカスタマイズおよび製造サービスを提供しています。詳細については、[iot@seeed.cc](mailto:iot@seeed.cc)までお問い合わせください。

## リソース

- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: 完全なコードベースとドキュメントは[Seeed mmWave Library GitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でアクセスできます。
- **ESPHomeドキュメント**: さらなるカスタマイズと統合については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60BHA2ファームウェアアップグレードツール**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2ファームウェアv1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)
- **MR60BHA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWaveセンサーSCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2モジュール技術仕様書**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Jlinkによるレーダーファームウェア復旧方法**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

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