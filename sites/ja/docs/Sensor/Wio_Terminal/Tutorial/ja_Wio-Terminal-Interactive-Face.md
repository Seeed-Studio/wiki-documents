---
description: Wio Terminal インタラクティブ顔デモ
title: Wio Terminal インタラクティブ顔デモ
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Interactive-Face
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal インタラクティブ絵文字顔

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## 概要

この例では、SDカード（BMP形式）を使用してLCD画面に複数の画像（目）を表示し、内蔵ボタンとジャイロスコープを使用してユーザーと対話する方法を示します。

### 特徴

- 左ボタン: 前の画像（目）

- 中央ボタン: アニメーション

- 右ボタン: 次の画像（目）

- ジャイロ: ボードの向きに応じて目が動く

## 必要なArduinoライブラリ

- LCD画面ライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- SDカードライブラリ `Seeed_Arduino_FS` をインストールしてください。詳細は [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) を参照してください。

- 内蔵加速度センサーライブラリ `Seeed_Arduino_LIS3DHTR` をインストールしてください。詳細は [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) を参照してください。

- `RawImage.h` ライブラリをインストールしてください。詳細は [画像の読み込み](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Loading-Image/) を参照してください。

## Arduinoの手順

1. [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) と `RawImage.h` ファイルをダウンロードし、`Arduino IDE` を使用して Wio Terminal にアップロードしてください。すべてのライブラリがインストールされていることを確認してください。

2. `face` ファイル（すべての画像を含む）をSDカードに保存してください。

3. Wio Terminal を動かしてインタラクションを開始してください！

## コード

- **LCD画面の初期化**

```Cpp
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(3);
  ...
}
```

- **SDカードの初期化**

```Cpp
void setup() {
  ...
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
      while (1);
  }
  ...
}
```

- **内蔵加速度センサーの初期化**

```Cpp
LIS3DHTR<TwoWire>  lis;

void setup () {
  ...
  lis.begin(Wire1);
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // 加速度センサーの出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール選択
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); // x軸の生データを読み取る
  float y_raw = lis.getAccelerationY(); // y軸の生データを読み取る
  ...
}
```

- **内蔵ボタンの初期化**

```Cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); // 左ボタン
  pinMode(BUTTON_2, INPUT); // 中央ボタン
  pinMode(BUTTON_3, INPUT); // 右ボタン
  ...
}
```

- **画像の初期化と描画**

この例では、画像は320x240のフルサイズではないため、描画時に画像の開始位置を指定する必要があります。画像はまずバッファにロードされ、Wio Terminal の揺れによる画像遅延を防ぎます。

詳細は [画像の読み込み](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Loading-Image/) を参照してください。

```Cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); // 8ビット画像の初期化
  writeToBuffer(x_axis, y_axis, eyes); // まずバッファに書き込む。完全なコードでこの関数を確認してください。
  ...
}
```