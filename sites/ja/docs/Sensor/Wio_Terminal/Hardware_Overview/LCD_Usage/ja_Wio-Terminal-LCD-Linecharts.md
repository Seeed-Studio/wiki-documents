---
title: 折れ線グラフ
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/
slug: /ja/Wio-Terminal-LCD-Linecharts
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 折れ線グラフ

このリポジトリでは、Wio Terminal 上で折れ線グラフを描画する方法について説明します。これを使用して、センサーの生データを画面上で視覚化することができます。まるでシリアルプロッターのように表示できます！このライブラリは非常に柔軟で、ニーズに合わせて変更することが可能です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0277.2019-11-27%2018_19_05.gif" /></div>

## ライブラリのインストール

### Wio Terminal 用の 2D グラフィックライブラリ Seeed_Arduino_Linechart のインストール

- [Seeed_Arduino_Linechart](https://files.seeedstudio.com/wiki/Wio-Terminal-LCD-Linecharts/Seeed_Arduino_Linechart-1.0.0.zip) を訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

- 次に、Wio Terminal_graphics ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_Linechart` ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## はじめに

### 折れ線グラフを描画するための初期化

まず、保存する変数の最大数を定義し、データを保存するための doubles 型を初期化します。また、TFT Sprite 関数を使用してバッファを作成します。

```cpp
#define max_size 50 // データの最大サイズ
doubles data; // データを保存するための doubles 型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト
```

### LCDスクリーンの初期化

```cpp
void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

### データへの変数の読み込み

`data.push(variable)` を使用して変数（例: センサーの読み取り値）をデータに保存します。事前に定義された最大数に達した場合、最初の変数を削除します（継続的に処理）。

```cpp
    spr.fillSprite(TFT_WHITE);
    if (data.size() == max_size) {
        data.pop(); // 最初の読み取り変数を削除するために使用
    }
    data.push(0.01 * random(1, 10)); // 変数を読み取り、データに保存
```

### 折れ線グラフのタイトル設定の初期化

折れ線グラフのタイトル表示を設定するための設定を行います。`text(x, y)` 構造体を初期化し、`(x, y)` はタイトルの開始座標です。以下のように設定を構成します。この例では、`header` がこの構造体の名前であり、`header.value("test")` などのように設定を変更できます。

```cpp
    // 折れ線グラフタイトルの設定
    auto header =   text(0, 0)           // タイトルの開始座標
                .value("test")      // 折れ線グラフの実際のタイトル
                .align(center)      // タイトルの水平位置合わせ
                .valign(vcenter)    // タイトルの垂直位置合わせ
                .width(tft.width()) // タイトルの幅
                .thickness(3);      // フォントの太さ

    header.height(header.font_height() * 2); // タイトルの高さはフォントの高さの2倍
    header.draw(); 
```

この例コードを理解するために、以下の画像を参照してください：

<div align="center"><img width={645} height={374} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/title.png" /></div>

### 折れ線グラフの設定を初期化し、LCDスクリーンに描画

折れ線グラフの表示を設定するための設定を行います。`line_chart(x, y)` 構造体を初期化し、`(x, y)` は折れ線グラフの開始座標です。以下のように設定を構成します。この例では、`content` がこの構造体の名前であり、`content.based_on(0.0)` などのように設定を変更できます。好みに合わせて設定を変更してください！

```cpp
  // 折れ線グラフの設定
    auto content = line_chart(20, header.height()); //(x,y) 折れ線グラフの開始位置
         content
                .height(tft.height() - header.height() * 1.5) // 折れ線グラフの実際の高さ
                .width(tft.width() - content.x() * 2) // 折れ線グラフの実際の幅
                .based_on(0.0) // y軸の開始点（float型である必要あり）
                .show_circle(false) // 各点に円を描画するかどうか（デフォルトはオン）
                .value(data) // 折れ線グラフにデータを渡す
                .color(TFT_PURPLE) // 線の色を設定
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
```

この例コードを理解するために、以下の画像を参照してください：

<div align="center"><img width={768} height={432} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/linegraph2.png" /></div>

## 完全なコード

```cpp
#include"seeed_line_chart.h" //ライブラリをインクルード
TFT_eSPI tft;

#define max_size 50 //データの最大サイズ
doubles data; //データを格納するための doubles 型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    if (data.size() == max_size) {
        data.pop();//最初に読み取った変数を削除するために使用
    }
    data.push(0.01 * random(1, 10)); //変数を読み取り、データに格納

    //折れ線グラフのタイトル設定
    auto header =  text(0, 0)
                .value("test")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //ヘッダーの高さはフォントの高さの2倍

  //折れ線グラフの設定
    auto content = line_chart(20, header.height()); //(x,y) 折れ線グラフの開始位置
         content
                .height(tft.height() - header.height() * 1.5) //折れ線グラフの実際の高さ
                .width(tft.width() - content.x() * 2) //折れ線グラフの実際の幅
                .based_on(0.0) //y軸の開始点、float型で指定
                .show_circle(false) //各点に円を描画するかどうか、デフォルトはオン
                .value(data) //折れ線グラフにデータを渡す
                .color(TFT_PURPLE) //線の色を設定
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## 技術サポートと製品に関するディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>