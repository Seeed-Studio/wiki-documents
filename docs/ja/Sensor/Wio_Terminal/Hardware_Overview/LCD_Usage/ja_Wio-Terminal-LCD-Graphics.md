---
title: グラフィックス
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Graphics/
slug: /ja/Wio-Terminal-LCD-Graphics
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 基本的なグラフィカル関数

このリポジトリでは、Wio Terminal のTFT LCDライブラリの基本的なグラフィカル関数について説明します。これらの関数を使用して、独自の描画関数を作成することができます！

## ピクセルを描画する

LCD画面にピクセルを描画するには以下の関数を使用します：

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

ここで `(x, y)` はピクセルの座標、`color` はピクセルの色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawPixel(4,7,TFT_BLACK); //座標 (4,7) に黒いピクセルを描画
}

void loop() {}
```

## 線を描画する

LCD画面上で2点間に線を描画するには以下の関数を使用します：

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

ここで、線は `(x0, y0)` から `(x1, y1)` に向かって描画され、`color` は線の色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawLine(0,0,160,120,TFT_BLACK); //座標 (0,0) から (160,120) まで黒い線を描画
}

void loop() {}
```

水平線または垂直線を描画するために、このライブラリは最適化された関数も提供しています：

### 水平線と垂直線を描画する

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //水平線
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //垂直線
```

ここで `(x, y)` は開始座標、`w` は水平線の幅、`h` は垂直線の高さ、`color` は線の色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawFastHLine(0,120,320,TFT_BLACK); //座標 (0, 120) から始まる黒い水平線
    tft.drawFastVLine(160,0,240,TFT_BLACK); //座標 (160, 0) から始まる黒い垂直線
}

void loop() {}
```

## 長方形を描画する

LCD画面上で長方形を描画または塗りつぶすには以下の関数を使用します：

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

ここで `(x, y)` は開始座標、`w` は幅、`h` は高さ、`color` は長方形の色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawRect(110,70,100,100,TFT_BLACK); //座標 (110, 70) から始まる100x100の黒い長方形
}

void loop() {}
```

## 円を描画する

LCD画面上で円を描画または塗りつぶすには以下の関数を使用します：

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

ここで `(x0, y0)` は円の中心座標、`r` は円の半径、`color` は円の色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawCircle(160,120,50,TFT_BLACK); //座標 (160, 120) を中心とする黒い円
}

void loop() {}
```

このライブラリは楕円を描画または塗りつぶすための関数も提供しています：

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

ここで `(x0, y0)` は楕円の中心座標、`rx` は水平半径、`ry` は垂直半径、`color` は楕円の色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //赤い背景
    tft.drawEllipse(160,120,50,100,TFT_BLACK); 
    //座標 (160, 120) を中心とし、水平半径50、垂直半径100の黒い楕円
}

void loop() {}
```

## 三角形の描画

LCD画面上に三角形を描画または塗りつぶすには以下の関数を使用します：

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

ここで、`(x0, y0)`は三角形の最初の座標、`(x1, y1)`は2番目の座標、`(x2, y2)`は3番目の座標、`color`は色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // 赤い背景
    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);
    // 点 (160, 70)、(60, 170)、(260, 170) に三角形を描画
}

void loop() {}
```

## 丸角矩形の描画

LCD画面上に丸角矩形を描画または塗りつぶすには以下の関数を使用します：

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

ここで、`(x, y)`は開始座標、`w`と`h`は矩形の幅と高さ、`r`は角の半径、`color`は色を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // 赤い背景
    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);
    // (110, 70) から始まる 100x100 の黒い丸角矩形を描画
}

void loop() {}
```

## 文字の描画

LCD画面上に単一の文字を描画するには以下の関数を使用します：

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

ここで、`(x, y)`は開始位置、`c`は文字、`color`は文字の色、`bg`は文字の背景色、`size`は文字のサイズスケールを指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // 赤い背景
    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2); // (140,120) に黒い文字 'A' を描画
    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2); // (155,120) に黒い文字 'B' を描画
    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2); // (170,120) に黒い文字 'C' を描画
}

void loop() {}
```

## テキスト文字列の描画

LCD画面上に文字列を描画するには以下の関数を使用します：

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

ここで、`string`はテキスト文字列、`(poX, poY)`は開始座標を指定します。

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);

  tft.fillScreen(TFT_RED); // 赤い背景

  tft.setTextColor(TFT_BLACK);          // テキストの色を黒に設定
  tft.setTextSize(1);                   // テキストサイズを設定
  tft.drawString("Hello world!", 0, 0); // (0, 0) から文字列を描画
  tft.setTextSize(2);
  tft.drawString("Hello world!", 0, 10);
}

void loop() {}
```

## 画面の塗りつぶし

画面全体を塗りつぶすには以下の関数を使用します：

```cpp
fillScreen(uint32_t color);
```

### サンプルコード

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
}

void loop() {
    // 色を赤、緑、青でループ
    tft.fillScreen(TFT_RED);
    delay(1000);
    tft.fillScreen(TFT_GREEN);
    delay(1000);
    tft.fillScreen(TFT_BLUE);
    delay(1000);
}

void loop() {}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>