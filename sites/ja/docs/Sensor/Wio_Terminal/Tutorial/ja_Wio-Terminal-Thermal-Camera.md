---
description: Wio Terminal を使用して赤外線サーマルイメージングカメラを構築する
title: Wio Terminal を使用して赤外線サーマルイメージングカメラを構築する
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Thermal-Camera
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を使用して赤外線サーマルイメージングカメラを構築する

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif)

## 概要

[Grove - 赤外線温度センサーアレイ (AMG8833)](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-AMG8833.html) と [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) を使用して、低コストで [FLIR™](https://www.flir.com/) のようなサーマルイメージングカメラを簡単に構築できます！ただし、Grove - 赤外線温度センサーアレイ (AMG8833) の解像度は 8 x 8 (64 ピクセル) に限られており、場合によっては十分な場合もあります。そのため、コード内で線形補間を使用して 70 x 70 (4900 ピクセル) に拡張し、より良い表示を実現しています。

このデモは [Kris Kasprzak の動画](https://www.youtube.com/watch?v=A9F1ezGgaC4&t=365s) に触発されています。Wio Terminal と Grove - 赤外線温度センサーアレイ (AMG8833) に対応するようにいくつかの変更が加えられています。ほとんどのグラフィックは、全体的なパフォーマンスとフレームレートを向上させるために、最初に TFT LCD スプライトに描画されるようになっています。また、画面中央に照準を追加し、照準の温度を表示する機能も追加されています。

## 必要な部品

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Grove - 赤外線温度センサーアレイ (AMG8833)](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-AMG8833.html)

- [Wio Terminal バッテリーチャーシス](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 特徴

- 照準の正確な温度を表示

- サーマルカメラで熱源を検知

- 右ボタンでグリッドの ON/OFF 機能を切り替え可能

## 必要な Arduino ライブラリ

- LCD スクリーンライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- [Seeed_AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833) リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

  - 次に、Seeed_AMG8833 ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_AMG8833` ファイルを選択します。

## Arduino の手順

- Grove - 赤外線温度センサーアレイ (AMG8833) を Wio Terminal の Grove I2C インターフェースに接続します。

- 完全なコードを [こちら](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ThermalCamera.ino) からダウンロードするか、以下をコピーしてください。

- コードをアップロードします。

## 完全なコード

**注意:** この赤外線サーマルイメージングカメラのパフォーマンスとフレームレートを向上させるには、Wio Terminal の CPU スピードを 200MHz にブーストすることができます。`ツール` -> `CPU Speed` -> `200MHz(Overclock)` を選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/CPUboost.png" /></div>

```cpp

/*

  このプログラムは、サーマルカメラの読み取り値を 8 x 8 配列から拡大するためのものです。
  10 倍に拡大し、240 x 320 に表示します。
  補間は線形で、ディスプレイが 5-6-5 カラーパレットであることを考慮すると「十分良い」ものです。
  最終的な配列は、内部ポイントのみで構成された 70 x 70 の配列です。

  改訂履歴
  1.0     Kasprzak      初期コード
  1.1     Anson(Seeed Studio)  Grove - 赤外線センサー(AMG8833) に対応するよう Wio Terminal に適応
  
*/

#include <Seeed_AMG8833_driver.h>
#include <TFT_eSPI.h>                // グラフィックライブラリをインクルード (スプライト機能を含む)

TFT_eSPI    tft = TFT_eSPI(); 
TFT_eSprite Display = TFT_eSprite(&tft);  // "img" スプライトオブジェクトを "tft" オブジェクトへのポインタで作成
// pushSprite() によって TFT にプッシュされる際にポインタが使用されます

unsigned long CurTime;

uint16_t TheColor;
// 初期色を設定
uint16_t MinTemp = 25;
uint16_t MaxTemp = 35;

// 補間された色の変数
byte red, green, blue;

// 行/列補間の変数
byte i, j, k, row, col, incr;
float intPoint, val, a, b, c, d, ii;
byte aLow, aHigh;

// 表示「ピクセル」のサイズ
byte BoxWidth = 3;
byte BoxHeight = 3;

int x, y;
char buf[20];

// グリッド表示を切り替える変数
int ShowGrid = -1;

// 8 x 8 測定ピクセル用配列
float pixels[64];

// 補間された配列用配列
float HDTemp[80][80];

// カメラオブジェクトを作成
AMG8833 ThermalSensor;

// グリッドのオン/オフを切り替える
void toggleGrid() {
  ShowGrid = ShowGrid *-1;
  Display.fillRect(15, 15, 210, 210, TFT_BLACK);
  yield();
}

void setup() {
  Serial.begin(115200);

  // ディスプレイを開始し、背景を黒に設定
  tft.begin();
  tft.fillScreen(TFT_BLACK);

  // グリッドのオン/オフを切り替える割り込み
  pinMode(WIO_KEY_A, INPUT);
  attachInterrupt(digitalPinToInterrupt(WIO_KEY_A), toggleGrid, FALLING);

  // ディスプレイの回転を設定 (ディスプレイに応じて 0 に変更する必要がある場合があります)
  tft.setRotation(3);

  // スプラッシュスクリーンを表示

  tft.setCursor(20, 20);
  tft.setTextColor(TFT_BLUE, TFT_BLACK);
  tft.print("Thermal ");

  tft.setTextColor(TFT_RED, TFT_BLACK);
  tft.print("Camera");

  // センサーを起動
  bool status = ThermalSensor.init();
  delay(100);

  if (!status) {
      Serial.print("AMG8833 の初期化に失敗しました");
  }

  // 初期テストのためにカメラを読み取る
  ThermalSensor.read_pixel_temperature(pixels);

  // ステータスを確認し、結果を表示
  if (pixels[0] < 0) {
    while (1) {
      tft.setCursor(20, 40);
      tft.setTextColor(TFT_RED, TFT_BLACK);
      tft.print("Readings: FAIL");
      delay(500);
    }
  }
  else {
    tft.setCursor(20, 40);
    tft.setTextColor(TFT_GREEN, TFT_BLACK);
    tft.print("Readings: OK");
    delay(2000);
  }

  tft.fillScreen(TFT_BLACK);
  
  Display.createSprite(TFT_HEIGHT, TFT_WIDTH);
  Display.fillSprite(TFT_BLACK); 

  // カラー補間ルーチンのカットオフポイントを取得
  // 温度スケールが変更されたときにこの関数が呼び出されます
  Getabcd();

  // センサーの最大値と最小値に一致するスケールで凡例を描画
  DrawLegend();

}

void loop() {  
  CurTime = millis();

  // 温度エリアの大きな白い枠を描画
  Display.fillRect(10, 10, 220, 220, TFT_WHITE);

  // センサーを読み取る
  ThermalSensor.read_pixel_temperature(pixels);
  
  // 8 x 8 センサー配列を取得したので
  // より大きな画面に補間する
  // 8 行を補間する (最初に 8 センサーピクセル間の 70 列ポイントを補間)
  for (row = 0; row < 8; row ++) {
    for (col = 0; col < 70; col ++) {
      // 最初の配列ポイントを取得し、次を取得
      // また、後続の行のために 8 ずつ増加する必要があります
      aLow =  col / 10 + (row * 8);
      aHigh = (col / 10) + 1 + (row * 8);
      // 各 10 列の補間量を取得
      // ここでは単純な線形補間を行い、主にパフォーマンスを高めるためです
      // ディスプレイは 5-6-5 カラーパレットなので、高度な補間は低色深度で失われます
      intPoint =   (( pixels[aHigh] - pixels[aLow] ) / 10.0 );
      // 各列をどれだけ増加させるかを決定 (基本的に 0-9)
      incr = col % 10;
      // 補間値を見つける
      val = (intPoint * incr ) +  pixels[aLow];
      // 70 x 70 配列に格納
      // ディスプレイが逆方向を向いているため、行を反転して行データを転置
      HDTemp[ (7 - row) * 10][col] = val;

    }
  }

  // 70 列の生データが得られたので
  // 各 70 列を補間する
  // Arduino では到底速くならない...Teensy で > 72 MHz が出発点

  for (col = 0; col < 70; col ++) {
    for (row = 0; row < 70; row ++) {
      // 最初の配列ポイントを取得し、次を取得
      // また、後続の列のために 8 ずつ増加する必要があります
      aLow =  (row / 10 ) * 10;
      aHigh = aLow + 10;
      // 各 10 列の補間量を取得
      // ここでは単純な線形補間を行い、主にパフォーマンスを高めるためです
      // ディスプレイは 5-6-5 カラーパレットなので、高度な補間は低色深度で失われます
      intPoint =   (( HDTemp[aHigh][col] - HDTemp[aLow][col] ) / 10.0 );
      // 各列をどれだけ増加させるかを決定 (基本的に 0-9)
      incr = row % 10;
      // 補間値を見つける
      val = (intPoint * incr ) +  HDTemp[aLow][col];
      // 70 x 70 配列に格納
      HDTemp[ row ][col] = val;
    }
  }


  // 70 x 70 配列を表示
  DisplayGradient();

  // 画面中央に照準を表示
  Display.drawCircle(115, 115, 5, TFT_WHITE);
  Display.drawFastVLine(115, 105, 20, TFT_WHITE);
  Display.drawFastHLine(105, 115, 20, TFT_WHITE);

  // スプライトを画面にプッシュ
  Display.pushSprite(0, 0);

  // 画面中央の温度を表示
  tft.setRotation(3);
  tft.setTextColor(TFT_WHITE);
  tft.drawFloat(HDTemp[35][35], 2, 90, 20);

  // フレームレートを出力するには、以下をコメント解除
  Serial.print("Frame rate: "); Serial.println(1/(0.001*(millis() - CurTime)));

}

// 結果を表示する関数
void DisplayGradient() {

  tft.setRotation(4);

  // 70 行を処理
  for (row = 0; row < 70; row ++) {

    // 高速でちらつきのないグリッドを描画する方法--10 ピクセルごとに 2x2 にするだけで、3x3 にする必要はありません
    // グリッドの後に線を描画すると、ちらつきが多すぎます
    if (ShowGrid < 0) {
      BoxWidth = 3;
    }
    else {
      if ((row % 10 == 9) ) {
        BoxWidth = 2;
      }
      else {
        BoxWidth = 3;
      }
    }
    // 次に各 70 列を処理
    for (col = 0; col < 70; col++) {

      // 高速でちらつきのないグリッドを描画する方法--10 ピクセルごとに 2x2 にするだけで、3x3 にする必要はありません
      if (ShowGrid < 0) {
        BoxHeight = 3;
      }
      else {
        if ( (col % 10 == 9)) {
          BoxHeight = 2;
        }
        else {
          BoxHeight = 3;
        }
      }
      // 最後に 70 x 70 ポイントを描画、補間された色を取得する呼び出しに注意
      Display.fillRect((row * 3) + 15, (col * 3) + 15, BoxWidth, BoxHeight, GetColor(HDTemp[row][col]));
    }
  }
  
}

// 高速かつ効果的なカラー補間ルーチン
uint16_t GetColor(float val) {

  /*
    値を渡して R G B を計算
    公開されているいくつかの方法に基づいていますが、基本的に R G B をグラフ化し、単純な線形方程式を開発しました
    再び、5-6-5 カラーディスプレイでは、正確な温度から R G B への色計算は必要ありません

    以下のリンクに基づく方程式
    http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html

  */

  red = constrain(255.0 / (c - b) * val - ((b * 255.0) / (c - b)), 0, 255);

  if ((val > MinTemp) & (val < a)) {
    green = constrain(255.0 / (a - MinTemp) * val - (255.0 * MinTemp) / (a - MinTemp), 0, 255);
  }
  else if ((val >= a) & (val <= c)) {
    green = 255;
  }
  else if (val > c) {
    green = constrain(255.0 / (c - d) * val - (d * 255.0) / (c - d), 0, 255);
  }
  else if ((val > d) | (val < a)) {
    green = 0;
  }

  if (val <= b) {
    blue = constrain(255.0 / (a - b) * val - (255.0 * b) / (a - b), 0, 255);
  }
  else if ((val > b) & (val <= d)) {
    blue = 0;
  }
  else if (val > d) {
    blue = constrain(240.0 / (MaxTemp - d) * val - (d * 240.0) / (MaxTemp - d), 0, 240);
  }

  // ディスプレイのカラーマッピング関数を使用して 5-6-5 カラーパレットを取得 (R=5 ビット, G=6 ビット, B=5 ビット)
  return Display.color565(red, green, blue);

}

// 温度 vs RGB グラフのカットオフポイントを取得する関数
void Getabcd() {

  a = MinTemp + (MaxTemp - MinTemp) * 0.2121;
  b = MinTemp + (MaxTemp - MinTemp) * 0.3182;
  c = MinTemp + (MaxTemp - MinTemp) * 0.4242;
  d = MinTemp + (MaxTemp - MinTemp) * 0.8182;

}

// 凡例を描画する関数
void DrawLegend() {

  // カラー凡例と最大値および最小値のテキスト
  j = 0;

  float inc = (MaxTemp - MinTemp ) / 160.0;

  for (ii = MinTemp; ii < MaxTemp; ii += inc) {
    tft.drawFastHLine(260, 200 - j++, 30, GetColor(ii));
  }

  tft.setTextSize(2);
  tft.setCursor(245, 20);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MaxTemp, (int) (MaxTemp * 1.8) + 32);
  tft.print(buf);

  tft.setTextSize(2);
  tft.setCursor(245, 210);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MinTemp, (int) (MinTemp * 1.8) + 32);
  tft.print(buf);

}

// コード終了
```
