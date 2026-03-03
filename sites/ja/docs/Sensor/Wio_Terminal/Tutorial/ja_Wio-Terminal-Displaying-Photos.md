---
description: Wio Terminal 写真の表示
title: Wio Terminal 写真の表示
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Displaying-Photos
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal 写真の表示

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## 概要

この例では、SDカードから画像をループ表示する方法を示します。

### 特徴

- 写真のループ表示

## 必要なArduinoライブラリ

- LCDスクリーンライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal 概要](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- SDカードライブラリ `Seeed_Arduino_FS` をインストールしてください。詳細は [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) を参照してください。

- `RawImage.h` ライブラリをインストールしてください。詳細は [画像の読み込み](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Loading-Image/) を参照してください。

## Arduinoの手順

1. [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) と `RawImage.h` ファイルをダウンロードし、`Arduino IDE` を使用して Wio Terminal にアップロードしてください。すべてのライブラリがインストールされていることを確認してください。

2. `photos` ファイルをドラッグして、SDカードにファイル全体を保存してください。

3. 画像がループ表示されるのが確認できます！

## コード

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" // SDカードライブラリを含む
#include"RawImage.h"  // 画像処理ライブラリを含む
TFT_eSPI tft;

void setup() {
    // SDカードを初期化
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    // LCDスクリーンを初期化
    tft.begin();
    tft.setRotation(3);

}
// 写真の名前を格納
const char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};

void loop() {
    for (uint8_t cnt = 0; cnt < 4; cnt++) {
        drawImage<uint16_t>(list[cnt],0,0); // 画像を1枚ずつ表示
        delay(1000);
    }
}
```

## Wio Terminal ボタンで写真を表示

### 概要

この例は上記と似ていますが、内蔵ボタンを使用して表示する画像を変更します！

### 特徴

- 左ボタン: 前の画像

- 右ボタン: 次の画像

### 必要なArduinoライブラリ

- LCDスクリーンライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal 概要](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- SDカードライブラリ `Seeed_Arduino_FS` をインストールしてください。詳細は [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) を参照してください。

- `RawImage.h` ライブラリをインストールしてください。詳細は [画像の読み込み](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Loading-Image/) を参照してください。

### Arduinoの手順

1. [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) と `RawImage.h` ファイルをダウンロードし、`Arduino IDE` を使用して Wio Terminal にアップロードしてください。すべてのライブラリがインストールされていることを確認してください。

2. `photos` ファイルをドラッグして、SDカードにファイル全体を保存してください。

3. 左ボタンを押して左にスクロールし、右ボタンを押して右にスクロールしてください！

### コード

- **ボタンの初期化**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); // 左ボタン
    pinMode(BUTTON_3, INPUT); // 右ボタン
    ...
}
```

### 完全なコード

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" // SDカードライブラリを含む
#include"RawImage.h"  // 画像処理ライブラリを含む
TFT_eSPI tft;

bool left_flag = false;
void button_handler_left() {
  left_flag = true;
}

bool right_flag = false;
void button_handler_right() {
  right_flag = true;
}

void setup() {
  // SDカードを初期化
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI,16000000)) {
    while (1);
  }
  tft.begin();
  tft.setRotation(3);

  pinMode(BUTTON_1, INPUT);
  pinMode(BUTTON_3, INPUT);
  attachInterrupt(digitalPinToInterrupt(BUTTON_1), button_handler_left, FALLING);
  attachInterrupt(digitalPinToInterrupt(BUTTON_3), button_handler_right, FALLING);

}

const char* list[] = {"1.bmp", "2.bmp", "3.bmp", "4.bmp"};
int8_t cnt = 0;

void loop() {
  if (left_flag) {
    cnt++;
    left_flag = false;
    if (cnt == 4) {
      cnt = 0;
    }
  }
  if (right_flag) {
    cnt--;
    right_flag = false;
    if (cnt < 0) {
      cnt = 3;
    }
  }
  drawImage<uint16_t>(list[cnt], 0, 0);
}
```