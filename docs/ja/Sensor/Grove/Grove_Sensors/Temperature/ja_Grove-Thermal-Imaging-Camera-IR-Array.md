---
description: Grove - サーマルイメージングカメラ IRアレイ MLX90641
title: Grove - サーマルイメージングカメラ IRアレイ MLX90641
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Thermal-Imaging-Camera-IR-Array
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/grove-thermal-imaging-camera_-ir-array-mlx90641-55-front.jpg" />
  <figcaption><b></b> <i>Grove - サーマルイメージングカメラ / IRアレイ MLX90641</i></figcaption>
</div>

このIRサーマルカメラは、16x12のサーマルセンサーアレイ **(MLX90641)** を搭載しており、中心エリアで±1℃、平均で±1.5℃の精度で遠距離の物体の温度を検出できます。サーマル画像を簡単に取得するために、I2Cプロトコルを使用してカメラから低解像度の画像を取得します。このカメラの視野角（FOV）は110°x75°で、温度測定範囲は-40℃から300℃です。サーマル画像を簡単に取得するために、I2Cプロトコルを使用してカメラから低解像度の画像を取得します。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/90640.png" />
  <figcaption><b></b> <i>Grove - サーマルイメージングカメラ / IRアレイ MLX90640</i></figcaption>
</div>

一方、Grove - サーマルイメージングカメラはサーマルセンサー **(MLX90640)** を搭載しており、32x24のサーマルセンサーアレイを持ち、±1.5℃の精度で数フィート離れた物体の温度を検出し、動的なサーマル画像を表示し、周囲温度を-40℃から300℃まで検出できます。狭角/広角のカメラは、視野角（FOV）が55°x35°/110°x75°です。サーマル画像を簡単に取得するために、I2Cプロトコルを使用してカメラから低解像度の画像を取得します。

## バージョン

|バージョン|リリース日|注文|
|----|-----|------|
|Grove - サーマルイメージングカメラ / IRアレイ **MLX90641** 110度 **[*新*]**|2020年6月3日|[購入する](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html)|
|Grove - サーマルイメージングカメラ / IRアレイ **MLX90640** 110度|2019年11月12日|[購入する](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|

:::note
このWikiは、サーマルイメージングカメラIRアレイMLX90641およびMLX90640の両方に対応しています。
:::

## 特徴

- コンパクトサイズの16x12ピクセルIRサーマルセンサーアレイ（MLX90641）、32x24ピクセルIRサーマルセンサーアレイ（MLX90640）
- 広い視野角（FOV）110°x75°で広範囲をキャプチャ
- 広い温度測定範囲（-40℃～300℃）
- MCUとの簡単な通信を可能にするI2C Groveインターフェース
- セットアップが簡単な完全校正済みIRアレイ

## 仕様

|項目|Grove - サーマルイメージングカメラ - MLX90640|Grove - サーマルイメージングカメラ - MLX90641|
|----|-----|------|
|サーマルセンサー|32x24アレイ MLX90640|16x12アレイ MLX90641|
|動作電圧|3.3V - 5V|3.3V - 5V|
|消費電流|約18mA|約18mA|
|視野角（FOV）|110°x75°|110°x75°|
|温度測定範囲|-40°C - 300°C|-40°C - 300°C|
|温度分解能|± 1.5°C|± 1.5°C（中心エリアで±1℃）|
|リフレッシュレート|0.5Hz - 64Hz|0.5Hz - 64Hz|
|インターフェース|I2C Groveインターフェース|I2C Groveインターフェース|
|I2Cアドレス|0x33|0x33|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

### Wio Terminal を使用した開始方法

**必要な材料**

|Wio Terminal|Grove - Thermal Imaging Camera / IR Array MLX90641 110度|
|--------|---------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/wio.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html)|

#### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/hardware-connection.jpg" /></div>

**ステップ 1.** Groveケーブルを使用してGrove - Thermal Imaging CameraをWio Terminalに接続し、USBケーブルを介してWio TerminalをPCに接続します。

**ステップ 2.** [ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_MLX9064x/archive/master.zip)をダウンロードし、**Seeed_Arduino_MLX9064x**ファイル全体をArduino IDEのライブラリフォルダにコピーして貼り付けます。

:::note
初めてWio Terminalを使用する場合、どのインターフェースに接続するか分からない場合は、**[Wio Terminalの使い方](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)**を参照してください。
:::

**ステップ 3.** 以下のソフトウェアコード1をArduino IDEにコピーし、アップロードして**シリアルポート**を介した視覚化形式を表示します。

#### 視覚化形式の結果

**ソフトウェアコード1**

```cpp
/*
    温度読み取り値をすべてのピクセルに出力し、Processingビジュアライザーで読み取れるようにします
*/

#include <Wire.h>

#define USE_MLX90641

#ifndef USE_MLX90641
    #include "MLX90640_API.h"
#else
    #include "MLX90641_API.h"
#endif

#include "MLX9064X_I2C_Driver.h"

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  Serial
#else
    #define debug  Serial
#endif

#ifdef USE_MLX90641
    const byte MLX90641_address = 0x33; //MLX90641のデフォルトの7ビット未シフトアドレス
    #define TA_SHIFT 8 //MLX90641のデフォルトのオープンエアシフト

    uint16_t eeMLX90641[832];
    float MLX90641To[192];
    uint16_t MLX90641Frame[242];
    paramsMLX90641 MLX90641;
    int errorno = 0;
#else
    const byte MLX90640_address = 0x33; //MLX90640のデフォルトの7ビット未シフトアドレス

    #define TA_SHIFT 8 //MLX90640のデフォルトのオープンエアシフト

    float mlx90640To[768];
    paramsMLX90640 mlx90640;
#endif
void setup() {
    Wire.begin();
    Wire.setClock(400000); //I2Cクロック速度を400kHzに増加

    debug.begin(115200); //可能な限り高速なデバッグ

    while (!debug); //ユーザーがターミナルを開くのを待つ
    //debug.println("MLX90640 IR Array Example");


#ifndef USE_MLX90641
    if (isConnected() == false) {
        debug.println("MLX9064xがデフォルトのI2Cアドレスで検出されません。配線を確認してください。停止します。");
        while (1);
    }
    //デバイスパラメータを取得 - これを一度だけ行う必要があります
    int status;
    uint16_t eeMLX90640[832];
    status = MLX90640_DumpEE(MLX90640_address, eeMLX90640);
    if (status != 0) {
        debug.println("システムパラメータのロードに失敗しました");
    }

    status = MLX90640_ExtractParameters(eeMLX90640, &mlx90640);
    if (status != 0) {
        debug.println("パラメータ抽出に失敗しました");
    }

    //パラメータが抽出されたら、eeMLX90640配列を解放できます

    //MLX90640_SetRefreshRate(MLX90640_address, 0x02); //2Hzに設定
    MLX90640_SetRefreshRate(MLX90640_address, 0x03); //4Hzに設定
    //MLX90640_SetRefreshRate(MLX90640_address, 0x07); //64Hzに設定
#else
    if (isConnected() == false) {
        debug.println("MLX90641がデフォルトのI2Cアドレスで検出されません。配線を確認してください。停止します。");
        while (1);
    }
    //デバイスパラメータを取得 - これを一度だけ行う必要があります
    int status;
    status = MLX90641_DumpEE(MLX90641_address, eeMLX90641);
    errorno = status;//MLX90641_CheckEEPROMValid(eeMLX90641);//eeMLX90641[10] & 0x0040;//
    
    if (status != 0) {
        debug.println("システムパラメータのロードに失敗しました");
       while(1);
    }

    status = MLX90641_ExtractParameters(eeMLX90641, &MLX90641);
    //errorno = status;
    if (status != 0) {
        debug.println("パラメータ抽出に失敗しました");
        while(1);
    }

    //パラメータが抽出されたら、eeMLX90641配列を解放できます

    //MLX90641_SetRefreshRate(MLX90641_address, 0x02); //2Hzに設定
    MLX90641_SetRefreshRate(MLX90641_address, 0x03); //4Hzに設定
    //MLX90641_SetRefreshRate(MLX90641_address, 0x07); //64Hzに設定    
#endif 

}

void loop() {
#ifndef USE_MLX90641
    long startTime = millis();
    for (byte x = 0 ; x < 2 ; x++) {
        uint16_t mlx90640Frame[834];
        int status = MLX90640_GetFrameData(MLX90640_address, mlx90640Frame);

        float vdd = MLX90640_GetVdd(mlx90640Frame, &mlx90640);
        float Ta = MLX90640_GetTa(mlx90640Frame, &mlx90640);

        float tr = Ta - TA_SHIFT; //センサー周囲温度に基づく反射温度
        float emissivity = 0.95;

        MLX90640_CalculateTo(mlx90640Frame, &mlx90640, emissivity, tr, mlx90640To);
    }
    long stopTime = millis();

    for (int x = 0 ; x < 768 ; x++) {
        //if(x % 8 == 0) debug.println();
        debug.print(mlx90640To[x], 2);
        debug.print(",");
    }
    debug.println("");
#else
    long startTime = millis();
    
    for (byte x = 0 ; x < 2 ; x++) {
        int status = MLX90641_GetFrameData(MLX90641_address, MLX90641Frame);

        float vdd = MLX90641_GetVdd(MLX90641Frame, &MLX90641);
        float Ta = MLX90641_GetTa(MLX90641Frame, &MLX90641);

        float tr = Ta - TA_SHIFT; //センサー周囲温度に基づく反射温度
        float emissivity = 0.95;

        MLX90641_CalculateTo(MLX90641Frame, &MLX90641, emissivity, tr, MLX90641To);
    }
    long stopTime = millis();
   /*
    debug.print("vdd=");
    debug.print(vdd,2);
    debug.print(",Ta=");
    debug.print(Ta,2);
   
    debug.print(",errorno=");
    debug.print(errorno,DEC);
    
    
    for (int x = 0 ; x < 64 ; x++) {
        debug.print(MLX90641Frame[x], HEX);
        debug.print(",");
    }
    
    delay(1000);
    */
    for (int x = 0 ; x < 192 ; x++) {
        debug.print(MLX90641To[x], 2);
        debug.print(",");
    }
    debug.println("");    
#endif
}

//I2Cバス上でMLX90640が検出された場合にtrueを返します
boolean isConnected() {
#ifndef USE_MLX90641
    Wire.beginTransmission((uint8_t)MLX90640_address);
#else
    Wire.beginTransmission((uint8_t)MLX90641_address);
#endif
    if (Wire.endTransmission() != 0) {
        return (false);    //センサーがACKしませんでした
    }
    return (true);
}
```

:::note
上記のソフトウェアコード1をArduino IDEにアップロードし、**シリアルポート**を開くと、以下のような視覚化形式の結果が表示されます：
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/20200702112317.png" /><figcaption><b /> <i /></figcaption>
</div>

#### Wio Terminalでの視覚化結果

**ステップ4.** 以下のソフトウェアコード2をArduino IDEにアップロードして、Wio Terminalに視覚化を表示します。

**ソフトウェアコード2**

```cpp
#include <Wire.h>
#include "MLX90641_API.h"
#include "MLX9064X_I2C_Driver.h"
#include <TFT_eSPI.h>                // グラフィックスライブラリをインクルード（これにはスプライト機能が含まれます）

const byte MLX90641_address = 0x33; // MLX90641のデフォルトの7ビット未シフトアドレス
#define TA_SHIFT 12 // 開放空間でのMLX90641のデフォルトシフト
#define debug  Serial
uint16_t eeMLX90641[832];
float MLX90641To[192];
uint16_t MLX90641Frame[242];
paramsMLX90641 MLX90641;
int errorno = 0;

TFT_eSPI    tft = TFT_eSPI(); 
TFT_eSprite Display = TFT_eSprite(&tft);  // "tft"オブジェクトへのポインタを持つスプライトオブジェクト"img"を作成
// ポインタはpushSprite()によってTFTにプッシュされます

unsigned long CurTime;
 
uint16_t TheColor;
// 初期色を設定
uint16_t MinTemp = 25;
uint16_t MaxTemp = 38;

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
 
// 表示グリッドを切り替える変数
int ShowGrid = -1;
 
// 補間された配列用の配列
float HDTemp[6400];

void setup() {
    Wire.begin();
    Wire.setClock(2000000); // I2Cクロック速度を2Mに増加
    debug.begin(115200); // 可能な限り高速なデバッグ
    
    // ディスプレイを開始し、背景を黒に設定

    if (isConnected() == false) {
        debug.println("MLX90641がデフォルトのI2Cアドレスで検出されません。配線を確認してください。停止します。");
        while (1);
    }
    // デバイスパラメータを取得 - これは一度だけ行う必要があります
    int status;
    status = MLX90641_DumpEE(MLX90641_address, eeMLX90641);
    errorno = status; // MLX90641_CheckEEPROMValid(eeMLX90641);//eeMLX90641[10] & 0x0040;//
    
    if (status != 0) {
        debug.println("システムパラメータの読み込みに失敗しました");
       while(1);
    }

    status = MLX90641_ExtractParameters(eeMLX90641, &MLX90641);
    // errorno = status;
    if (status != 0) {
        debug.println("パラメータ抽出に失敗しました");
        while(1);
    }

    // パラメータが抽出されたら、eeMLX90641配列を解放できます
    
    MLX90641_SetRefreshRate(MLX90641_address, 0x05); // レートを16Hzに設定

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Display.createSprite(TFT_HEIGHT, TFT_WIDTH);
    Display.fillSprite(TFT_BLACK); 

    // カラー補間ルーチンのカットオフポイントを取得
    // この関数は温度スケールが変更されたときに呼び出されます
    Getabcd();

    // センサーの最大値と最小値に一致するスケールで凡例を描画
    DrawLegend();    
}
void loop() {
    // 温度エリアの大きな白い枠を描画
    Display.fillRect(10, 10, 220, 220, TFT_WHITE);
    for (byte x = 0 ; x < 2 ; x++) {
        int status = MLX90641_GetFrameData(MLX90641_address, MLX90641Frame);

        float vdd = MLX90641_GetVdd(MLX90641Frame, &MLX90641);
        float Ta = MLX90641_GetTa(MLX90641Frame, &MLX90641);

        float tr = Ta - TA_SHIFT; // センサー周囲温度に基づく反射温度
        float emissivity = 0.95;

        MLX90641_CalculateTo(MLX90641Frame, &MLX90641, emissivity, tr, MLX90641To);
    }

    interpolate_image(MLX90641To,12,16,HDTemp,80,80);

    // 80 x 80配列を表示
    DisplayGradient();
    
    // 画面中央にクロスヘアを描画
    Display.drawCircle(115, 115, 5, TFT_WHITE);
    Display.drawFastVLine(115, 105, 20, TFT_WHITE);
    Display.drawFastHLine(105, 115, 20, TFT_WHITE);
    // 画面中央の温度を表示
     
    // スプライトを画面にプッシュ
    Display.pushSprite(0, 0);

    tft.setRotation(3);
    tft.setTextColor(TFT_WHITE);
    tft.drawFloat(HDTemp[35 * 80 + 35], 2, 90, 20);        

}
// MLX90640がI2Cバス上で検出された場合にtrueを返します
boolean isConnected() {
    Wire.beginTransmission((uint8_t)MLX90641_address);
    if (Wire.endTransmission() != 0) {
        return (false);    // センサーがACKを返さなかった
    }
    return (true);
}
// 結果を表示する関数
void DisplayGradient() {
 
  tft.setRotation(4);
 
  // 70行を高速に処理
  for (row = 0; row < 70; row ++) {
 
    // 高速な非フリッカーグリッド描画方法 - 10ごとにMLX90641Toを2x2にする
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
    // 次に70列を高速に処理
    for (col = 0; col < 70; col++) {
 
      // 高速な非フリッカーグリッド描画方法 - 10ごとにMLX90641Toを2x2にする
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
      // 最後に70 x 70ポイントを描画、補間された色を取得する呼び出しに注意
      Display.fillRect((row * 3) + 15, (col * 3) + 15, BoxWidth, BoxHeight, GetColor(HDTemp[row * 80 + col]));
    }
  }
 
}
// 高速かつ効果的なカラー補間ルーチン
uint16_t GetColor(float val) {
 
  /*
    値を渡してR G Bを計算
    公開されているいくつかの方法に基づき、R G Bをグラフ化し、単純な線形方程式を開発
    5-6-5カラー表示では正確な温度からR G Bへの色計算は不要
 
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
 
  // ディスプレイのカラーマッピング関数を使用して5-6-5カラーパレットを取得（R=5ビット、G=6ビット、B=5ビット）
  return Display.color565(red, green, blue);
 
}
 
// 温度対RGBグラフのカットオフポイントを取得する関数
void Getabcd() {
 
  a = MinTemp + (MaxTemp - MinTemp) * 0.2121;
  b = MinTemp + (MaxTemp - MinTemp) * 0.3182;
  c = MinTemp + (MaxTemp - MinTemp) * 0.4242;
  d = MinTemp + (MaxTemp - MinTemp) * 0.8182;
 
}
float get_point(float *p, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    if (x < 0)
    {
        x = 0;
    }
    if (y < 0)
    {
        y = 0;
    }
    if (x >= cols)
    {
        x = cols - 1;
    }
    if (y >= rows)
    {
        y = rows - 1;
    }
    return p[y * cols + x];
}

void set_point(float *p, uint8_t rows, uint8_t cols, int8_t x, int8_t y, float f)
{
    if ((x < 0) || (x >= cols))
    {
        return;
    }
    if ((y < 0) || (y >= rows))
    {
        return;
    }
    p[y * cols + x] = f;
}

// srcはsrc_rows * src_colsのグリッド
// destは事前に割り当てられたグリッド、dest_rows*dest_cols
void interpolate_image(float *src, uint8_t src_rows, uint8_t src_cols,
                       float *dest, uint8_t dest_rows, uint8_t dest_cols)
{
    float mu_x = (src_cols - 1.0) / (dest_cols - 1.0);
    float mu_y = (src_rows - 1.0) / (dest_rows - 1.0);

    float adj_2d[16]; // 隣接要素を格納する行列

    for (uint8_t y_idx = 0; y_idx < dest_rows; y_idx++)
    {
        for (uint8_t x_idx = 0; x_idx < dest_cols; x_idx++)
        {
            float x = x_idx * mu_x;
            float y = y_idx * mu_y;
            get_adjacents_2d(src, adj_2d, src_rows, src_cols, x, y);

            float frac_x = x - (int)x; // ポイント間の~差分~のみが必要
            float frac_y = y - (int)y; // ポイント間の~差分~のみが必要
            float out = bicubicInterpolate(adj_2d, frac_x, frac_y);
            set_point(dest, dest_rows, dest_cols, x_idx, y_idx, out);
        }
    }
}

// pは4ポイントのリスト、左右に2つずつ
float cubicInterpolate(float p[], float x)
{
    float r = p[1] + (0.5 * x * (p[2] - p[0] + x * (2.0 * p[0] - 5.0 * p[1] + 4.0 * p[2] - p[3] + x * (3.0 * (p[1] - p[2]) + p[3] - p[0]))));
    return r;
}

// pは16ポイントの4x4配列、上下左右に2行/列
float bicubicInterpolate(float p[], float x, float y)
{
    float arr[4] = {0, 0, 0, 0};
    arr[0] = cubicInterpolate(p + 0, x);
    arr[1] = cubicInterpolate(p + 4, x);
    arr[2] = cubicInterpolate(p + 8, x);
    arr[3] = cubicInterpolate(p + 12, x);
    return cubicInterpolate(arr, y);
}

// srcはrows*colsで、destは事前に割り当てられた4ポイント配列
void get_adjacents_1d(float *src, float *dest, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    // 左側の2つのアイテムを選択
    dest[0] = get_point(src, rows, cols, x - 1, y);
    dest[1] = get_point(src, rows, cols, x, y);
    // 右側の2つのアイテムを選択
    dest[2] = get_point(src, rows, cols, x + 1, y);
    dest[3] = get_point(src, rows, cols, x + 2, y);
}

// srcはrows*colsで、destは事前に割り当てられた16ポイント配列
void get_adjacents_2d(float *src, float *dest, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    float arr[4];
    for (int8_t delta_y = -1; delta_y < 3; delta_y++)
    {                                          // -1, 0, 1, 2
        float *row = dest + 4 * (delta_y + 1); // 各4チャンクへのインデックス
        for (int8_t delta_x = -1; delta_x < 3; delta_x++)
        { // -1, 0, 1, 2
            row[delta_x + 1] = get_point(src, rows, cols, x + delta_x, y + delta_y);
        }
    }
}

// 凡例を描画する関数
void DrawLegend() {
 
  // カラー凡例と最大値・最小値のテキスト
  j = 0;
 
  float inc = (MaxTemp - MinTemp ) / 160.0;
 
  for (ii = MinTemp; ii < MaxTemp; ii += inc) {
    tft.drawFastHLine(260, 200 - j++, 30, GetColor(ii));
  }
 
  tft.setTextSize(2);
  tft.setCursor(245, 20);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MaxTemp, (int) (MaxTemp * 1.12) + 32);
  tft.print(buf);
 
  tft.setTextSize(2);
  tft.setCursor(245, 210);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MinTemp, (int) (MinTemp * 1.12) + 32);
  tft.print(buf);
 
}
```

:::tip
 すべてが正常に動作すれば、Wio Terminal の画面に可視化結果が表示されます。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/thermal-sensor-90641.gif" /><figcaption><b /> <i /></figcaption></div>

### Raspberry Pi を使った開始手順

#### ハードウェア

**必要な材料**

|Raspberry Pi 4|Grove Base Hat for Raspberry Pi|Grove - Thermal Imaging Camera / IR Array MLX90641 110度|
|--------------|-------------------------------|-------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/raspberry-pi-preview_2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/httpsstatics3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|

#### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/ras_hardware-connection.jpg" /></div>

- **ステップ 1** Grove - Thermal Imaging Camera を 2つの I2C ポートのいずれかに接続します。
- **ステップ 2** Raspberry Pi 4 を Grove Base Hat for Raspberry Pi に差し込みます。
- **ステップ 3** Raspberry Pi を HDMI ケーブルでディスプレイに接続し、USB Type-C で Raspberry Pi 4 の電源を入れます。

#### ソフトウェア

Raspberry Pi 4 は Python をサポートしているため、以下の手順に従えば、プロジェクトデモを Raspberry Pi 4 のディスプレイに簡単に表示できます。

- **ステップ 1** [grove.py](https://github.com/Seeed-Studio/grove.py) を以下のコマンドでインストールします。

```
pip3 install Seeed-grove.py
```

- **ステップ 2** 以下のコマンドで MLX90641 ドライバをインストールします。
Python 環境（Raspberry Pi の権限がない場合）:

```
pip3 install seeed-python-mlx9064x
```

最新のドライバにアップグレード:

```
pip3 install --upgrade seeed-python-mlx9064x
```

- **ステップ 3** Raspberry Pi の対応する i2c 番号を確認します:

```
ls /dev/i2c*
```

以下のような結果が得られる場合があります:

```
/dev/i2c-1
```

- **ステップ 4** **git clone** コマンドを使用して [MLX90641 ライブラリ](https://github.com/Seeed-Studio/Seeed_Python_MLX9064x.git) をダウンロードします。

- **ステップ 5** 以下のコマンドで **BasicReadings.py** ファイルを実行します:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/90641-raspi.png" /></div>

:::tip
     すべてが正常に動作すれば、上記のような結果が表示されます。
:::

:::note
     Raspberry Pi 上での結果のアップグレードされた UI が以下のようにリリースされています:
:::

- **ステップ 1** pyqt5 をインストールします:

```
sudo apt-get install python3-pyqt5 -y
```

- **ステップ 2** PyPI からインストール:

```
sudo pip3 install seeed_python_ircamera
```

- **ステップ 3** 最大 i2c スピードを設定して再起動:

```bash
sudo sh -c "echo dtparam=i2c_arm=on,i2c_arm_baudrate=400000 >> /boot/config.txt"
sudo reboot
```

- **ステップ 4** ターミナルで以下のコマンドを入力:

```
sudo ircamera I2C MLX90641
```

:::tip
     すべてが正常に動作すれば、以下のような結果が表示されます。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/outcome_UI.png" /><figcaption><b /> <i /></figcaption></div>

## リソース

- **[PDF]** [MLX90641のデータシート](https://files.seeedstudio.com/products/101020892/res/MLX90641-Datasheet-Melexis.pdf)
- **[ZIP]** [MLX90641の可視化ツール](https://files.seeedstudio.com/products/101020892/res/Visualization-mlx90641.zip)

## 技術サポートと製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)に投稿してください。

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetoothによる設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象観測ステーション用センサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>