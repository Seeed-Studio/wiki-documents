---
description: Wio Terminal を使用した気圧センサー
title: Wio Terminal を使用した気圧センサー
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Barometric-Pressure-sensor-using-the-Wio-terminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を使用した高精度気圧センサー

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" /></div>

## 概要

このデモでは、Grove 高精度気圧センサー DPS310 が Wio Terminal と完全に互換性があり、その測定が高精度であることを示しています。

## 特徴

- 通常の気圧値の範囲をダイヤルの色で表示
- 時間とともに温度を表示
- 高精度な気圧および温度検出

## ハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Grove 高精度気圧センサー DPS310**](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

### ハードウェア接続

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/111111.png" /></div>

## ソフトウェア

Arduino IDE をお持ちでない場合は、[**Wio Terminal の使い方**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)をご覧ください。

- LCD スクリーンライブラリ `Seeed_Arduino_LCD` をインストールしてください。[Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- DPS310-Pressure-Sensor ライブラリ `#include <Dps310.h>` をインストールしてください。[DPS310-Pressure-Sensor](https://wiki.seeedstudio.com/ja/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310/) を参照してください。

## コード

```cpp
#include <Dps310.h>
#include <SPI.h>
#include <TFT_eSPI.h>       // ハードウェア固有のライブラリ
TFT_eSPI tft = TFT_eSPI(); 

#define TFT_GREY 0x5AEB
#define LOOP_PERIOD 35 // 35msごとにディスプレイを更新

Dps310 Dps310PressureSensor = Dps310();

#define M_SIZE 1.4

TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト

float ltx = 0;    // 針の下部の x 座標を保存
uint16_t osx = M_SIZE * 120, osy = M_SIZE * 120; // 保存された x & y 座標
uint32_t updateTime = 0;       // 次の更新時間

int old_analog =  -999; // 最後に表示された値

int value[6] = {0, 0, 0, 0, 0, 0};
int d = 0;

void setup(void) {
    tft.begin();
    tft.init();
    tft.setRotation(3);
    Serial.begin(57600); // デバッグ用
    tft.fillScreen(TFT_WHITE);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    Dps310PressureSensor.begin(Wire);
    analogMeter(); // アナログメーターを描画

    updateTime = millis(); // 次の更新時間
}


void loop() {
  float temperature;
  float pressure;
  uint8_t oversampling = 7;
  int16_t ret;

  ret = Dps310PressureSensor.measureTempOnce(temperature, oversampling);
  ret = Dps310PressureSensor.measurePressureOnce(pressure, oversampling);
  Serial.println(pressure);

    if (updateTime <= millis()) {
        updateTime = millis() + 35; // 35ミリ秒ごとにメーターを更新

        // テスト用のサイン波を作成
        d += 4;
        if (d >= 360) {
            d = 0;
        }
        ////////////////////////////////////////////////////////
        // これは例です。'- 100050' を削除するだけで済みます
        ////////////////////////////////////////////////////////
        plotNeedle(pressure-100050, 0); // 針を再描画するのに 2 ～ 12ms かかります
    }

delay(100);
    spr.fillSprite(TFT_WHITE);
    spr.createSprite(250, 40);
    spr.fillSprite(TFT_WHITE);
    spr.setTextColor(TFT_BLACK, TFT_WHITE);
    spr.setFreeFont(&FreeSansBoldOblique12pt7b);
    spr.drawNumber(temperature, 0, 0);
    spr.drawString(" °C", 30, 0);
    spr.drawNumber(pressure, 120,0);
    spr.drawString("Pa", 210,0); 
    spr.pushSprite(30, 190); 
    spr.deleteSprite();

}


// #########################################################################
//  アナログメーターを画面に描画
// #########################################################################
void analogMeter() {

    // メーターのアウトライン
    tft.fillRect(0, 0, M_SIZE * 239, M_SIZE * 126, TFT_GREY);
    tft.fillRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_WHITE);

    tft.setTextColor(TFT_BLACK);  // テキストの色

    // -50度から+50度まで5度ごとに目盛りを描画（100度の全スイング）
    for (int i = -50; i < 51; i += 5) {
        // 長い目盛りの長さ
        int tl = 15;

        // 描画する目盛りの座標
        float sx = cos((i - 90) * 0.0174532925);
        float sy = sin((i - 90) * 0.0174532925);
        uint16_t x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        uint16_t y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        uint16_t x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        uint16_t y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        // 次の目盛りの座標（ゾーン塗りつぶし用）
        float sx2 = cos((i + 5 - 90) * 0.0174532925);
        float sy2 = sin((i + 5 - 90) * 0.0174532925);
        int x2 = sx2 * (M_SIZE * 100 + tl) + M_SIZE * 120;
        int y2 = sy2 * (M_SIZE * 100 + tl) + M_SIZE * 140;
        int x3 = sx2 * M_SIZE * 100 + M_SIZE * 120;
        int y3 = sy2 * M_SIZE * 100 + M_SIZE * 140;

        // 緑色ゾーンの範囲
        if (i >= -50 && i < -25) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);
        }
        
        if (i >= -25 && i < 0) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);
        }

        // 赤色ゾーンの範囲
        if (i >= 0 && i < 25) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // オレンジ色ゾーンの範囲
        if (i >= 25 && i < 50) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // 短い目盛りの長さ
        if (i % 25 != 0) {
            tl = 8;
        }

        // 目盛りの長さが変更された場合に再計算
        x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        // 目盛りを描画
        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);

        // ラベルを描画するかどうかを確認し、位置を調整
        if (i % 25 == 0) {
            // ラベルの位置を計算
            x0 = sx * (M_SIZE * 100 + tl + 10) + M_SIZE * 120;
            y0 = sy * (M_SIZE * 100 + tl + 10) + M_SIZE * 140;

            ////////////////////////////////////////////////////////////
            // ここでダイヤルプレートを変更できます
            ////////////////////////////////////////////////////////////
            switch (i / 25) {
                case -2: tft.drawCentreString("100000", x0, y0 - 12, 2); break;
                case -1: tft.drawCentreString("100025", x0, y0 - 9, 2); break;
                case 0: tft.drawCentreString("100050", x0, y0 - 7, 2); break;
                case 1: tft.drawCentreString("100075", x0, y0 - 9, 2); break;
                case 2: tft.drawCentreString("100100", x0, y0 - 12, 2); break;
            }
        }

        // スケールのアークを描画
        sx = cos((i + 5 - 90) * 0.0174532925);
        sy = sin((i + 5 - 90) * 0.0174532925);
        x0 = sx * M_SIZE * 100 + M_SIZE * 120;
        y0 = sy * M_SIZE * 100 + M_SIZE * 140;
        // スケールアークを描画、最後の部分は描画しない
        if (i < 50) {
            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);
        }
    }

    tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // フォント4を避けるためにコメントアウト可能
    tft.drawRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_BLACK); // ベゼルラインを描画

    plotNeedle(0, 0); // メーター針を0に設定
}

// #########################################################################
// 針の位置を更新
// この関数は針が動いている間ブロックされます。時間は ms_delay に依存します。
// 10ms は、針のスイープエリア内でテキストが描画される場合の針のちらつきを最小限に抑えます。
// テキストがスイープエリア内にない場合は小さい値でもOKです。0は即時更新ですが、
// リアルには見えません...（注：フルスケール偏向で100インクリメント）
// #########################################################################
void plotNeedle(int value, byte ms_delay) {

    if (value < -10) {
        value = -10;    // 針のエンドストップをエミュレートするために値を制限
    }
    if (value > 110) {
        value = 110;
    }

    // 新しい値に達するまで針を動かす
    while (!(value == old_analog)) {
        if (old_analog < value) {
            old_analog++;
        } else {
            old_analog--;
        }

        if (ms_delay == 0) {
            old_analog = value;    // 遅延が0の場合は即時更新
        }

        float sdeg = map(old_analog, -10, 110, -150, -30); // 値を角度にマッピング
        // 針の先端の座標を計算
        float sx = cos(sdeg * 0.0174532925);
        float sy = sin(sdeg * 0.0174532925);

        // 針の開始位置の x のデルタを計算（ピボットポイントから開始しない）
        float tx = tan((sdeg + 90) * 0.0174532925);

        // 古い針の画像を消去
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_WHITE);

        // 針の下のテキストを再描画
        tft.setTextColor(TFT_BLACK);
        tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // フォント4を避けるためにコメントアウト可能
        
        // 次の消去のために新しい針の端座標を保存
        ltx = tx;
        osx = M_SIZE * (sx * 98 + 120);
        osy = M_SIZE * (sy * 98 + 140);

        // 新しい位置に針を描画、マゼンタで針を少し太くする
        // 針を太くするために3本の線を描画
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_RED);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_MAGENTA);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_RED);

        // 新しい位置に近づくにつれて針を少し遅くする
        if (abs(old_analog - value) < 10) {
            ms_delay += ms_delay / 5;
        }

        // 次の更新まで待機
        delay(ms_delay);
    }
}
```
