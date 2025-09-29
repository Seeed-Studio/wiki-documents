---
description: 概要
title: マイクの使い方入門
keywords:
- Wio_terminal マイク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Mic
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# マイクの使い方入門

この Wiki では、Wio Terminal に内蔵されているマイクを使用して音声入力を行う方法を紹介します。このマイクは周囲の音を検知し、それに応じて反応することができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"/></div>

:::note
この Wiki ではマイクの基本的な使い方のみを説明しています。Wio Terminal 用のマイクライブラリを開発中で、さらに多くの機能を提供する予定です！続報をお待ちください！
:::

## サンプルコード

注意: `WIO_MIC` は内蔵マイク用に定義されています。

```cpp
void setup() {
  pinMode(WIO_MIC, INPUT);
  Serial.begin(115200);
}

void loop() {
  int val = analogRead(WIO_MIC);
  Serial.println(val);
  delay(200);
}
```

## LCDスクリーンを使用したサンプルコード

### ライブラリのインストール

- [LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) ライブラリをインストールしてください。

- [Linechart](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/) ライブラリをインストールしてください。

```cpp
#include"seeed_line_chart.h" // ライブラリをインクルード
#include <math.h>

TFT_eSPI tft;

#define max_size 50 // データの最大サイズ
doubles data; // データを格納するための doubles 型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト 

void setup() {
    pinMode(WIO_MIC, INPUT);

    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKGREY);

    int val = analogRead(WIO_MIC);

    if (data.size() == max_size) {
        data.pop(); // 最初に読み取った変数を削除
    }
    data.push(val); // 変数を読み取り、データに格納

    // ライングラフのタイトル設定
    auto header =  text(0, 0)
                .value("マイクの読み取り値")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); // ヘッダーの高さはフォントの高さの2倍

  // ライングラフの設定
    auto content = line_chart(20, header.height()); // ライングラフの開始位置 (x, y)
         content
                .height(tft.height() - header.height() * 1.5) // ライングラフの実際の高さ
                .width(tft.width() - content.x() * 2) // ライングラフの実際の幅
                .based_on(0.0) // Y軸の開始点（float型で指定）
                .show_circle(true) // 各ポイントに円を描画（デフォルトはオン）
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) // データをライングラフに渡す
                .color(TFT_RED) // ラインの色を設定
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```