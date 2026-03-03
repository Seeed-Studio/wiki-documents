---
description: Wio Terminal データの保存
title: Wio Terminal データの保存
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Storting-Analog-Data
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal アナログデータの表示と保存

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## 概要

この例では、Wio Terminal 上で Grove - 光センサーの読み取り値をライングラフ機能を使用して表示する方法を示します。これはまるでシリアルプロッターのようです！さらに、光センサーのデータは SD カードに保存されます。

### 特徴

- 光センサーの値を読み取り、ライングラフにプロットする

## 必要な Arduino ライブラリ

- ラインチャートライブラリ `Seeed_Arduino_Linechart` をインストールしてください。詳細は [Line Charts](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/) を参照してください。

- SD ライブラリをインストールしてください。詳細は [FS](https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-Overview/) を参照してください。

## Arduino の手順

1. この例のコードを試す前に、まず [Line Charts](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/) をよく読んでください。

2. [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) ファイルをダウンロードし、`Arduino IDE` を使用して Wio Terminal にアップロードしてください。すべてのライブラリがインストールされていることを確認してください。

3. 周囲の明るさを変えて、ライングラフの変化を確認してください！

4. アナログ読み取り値は SD カード内の `Readings.txt` に保存されています。

## コード

- **LCD とアナログポートの初期化**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

ご覧の通り、Wio Terminal には 2 つの Grove ポートがあります。1 つはデフォルトの I2C ポートで、もう 1 つはデジタル D0、D1 またはアナログ A0、A1 ポート、さらに UART ポートとして設定可能です。この場合、アナログポートが必要なのでアナログ入力として定義されています。

また、以下のように SD カードを初期化します：

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //ライブラリをインクルード

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト 

#define max_size 30 //データの最大サイズ
doubles data; //データを格納するための doubles 型を初期化
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("初期化に失敗しました！");
        while(1);
  }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

- **センサー値の読み取りとデータのロード**

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);
    int brightness = analogRead(LIGHT); //光センサー値を読み取り

    if (data.size() == max_size) {
        data.pop(); //最初の読み取り変数を削除するために使用
    }
    data.push(brightness); //光センサー値を格納
    saveData(); //SD カードにデータを保存
    ...
}
```

- **タイトル設定**

詳細は [Line Charts](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/) を参照してください。

```cpp
//ライングラフタイトルの設定
auto header =  text(0, 0)
            .value("光センサーの読み取り値")
            .align(center)
            .valign(vcenter)
            .width(tft.width())
            .thickness(2);

header.height(header.font_height() * 2);
header.draw(); //ヘッダーの高さはフォントの高さの 2 倍
```

- **ラインチャート設定**

詳細は [Line Charts](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/) を参照してください。

```cpp
//ライングラフの設定
auto content = line_chart(20, header.height()); //(x,y) ラインチャートの開始位置
        content
            .height(tft.height() - header.height() * 1.5) //ラインチャートの実際の高さ
            .width(tft.width() - content.x() * 2) //ラインチャートの実際の幅
            .based_on(0.0) //y 軸の開始点、float 型で指定
            .show_circle(false) //各ポイントに円を描画、デフォルトはオン
            .value(data) //ラインチャートにデータを渡す
            .color(TFT_RED) //ラインの色を設定
            .draw();

spr.pushSprite(0, 0);
```

- **SD カードへのデータ書き込み**

詳細は [SD カードからの読み取り/書き込み](https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-ReadWrite/) を参照してください。

```cpp
void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```

## 完全なコード

```cpp
##include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //ライブラリをインクルード

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト

#define max_size 30 //データの最大サイズ
doubles data; //データを格納するための doubles 型を初期化
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("初期化に失敗しました！");
        while(1);
    }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);

    if (data.size() == max_size) {
        data.pop(); //最初に読み取った変数を削除するために使用
    }
    data.push(brightness); //変数を読み取り、データに格納
    saveData();

    //折れ線グラフのタイトル設定
    auto header =  text(0, 0)
                .value("光センサーの読み取り値")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //ヘッダーの高さはフォントの高さの2倍

    //折れ線グラフの設定
    auto content = line_chart(20, header.height()); //(x,y) 折れ線グラフの開始位置
         content
                .height(tft.height() - header.height() * 1.5) //折れ線グラフの実際の高さ
                .width(tft.width() - content.x() * 2) //折れ線グラフの実際の幅
                .based_on(0.0) //y軸の開始点（float型で指定）
                .show_circle(false) //各点に円を描画するかどうか（デフォルトはオン）
                .value(data) //折れ線グラフにデータを渡す
                .color(TFT_RED) //線の色を設定
                .draw();

    spr.pushSprite(0, 0);
}

void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```