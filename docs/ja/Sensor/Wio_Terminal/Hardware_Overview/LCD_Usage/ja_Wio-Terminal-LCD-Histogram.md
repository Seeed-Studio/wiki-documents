---
title: ヒストグラム
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Histogram/
slug: /ja/Wio-Terminal-LCD-Histogram
last_update:
  date: 05/15/2025
  author: gunengyu
---


# ヒストグラム

このリポジトリでは、Wio Terminalでヒストグラムを描画する方法について説明します。Line Chartsライブラリと同様に、センサーの生データを画面上で視覚化するために使用できます。このライブラリは非常に柔軟で、必要に応じてカスタマイズすることが可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png" /></div>

## ライブラリのインストール

### ヒストグラムライブラリのインストール

- [Seeed_Arduino_Histogram](https://github.com/Seeed-Studio/Seeed_Arduino_Histogram)を訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

- 次に、Arduino IDEにライブラリをインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、ダウンロードした`Seeed_Arduino_Histogram`ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## はじめに

### ヒストグラム描画の初期化

ヒストグラムライブラリをインクルードし、以下のようにヒストグラムを初期化します：

```cpp
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <SPI.h>
#include "Histogram.h"

TFT_Histogram histogram = TFT_Histogram(); // ヒストグラムの初期化
TFT_eSPI tft = TFT_eSPI(); // TFTの初期化

void setup(void) {
  tft.init();
  histogram.initHistogram(&tft);
  ...
}
```

### ヒストグラムの列を作成する

ヒストグラムの列を作成するには以下を使用します：

```cpp
void formHistogram(String label, int NO, double Histogram_value, int Histogram_WIDTH, uint32_t colour);
```

ここで、`label`は列の名前、`NO`はヒストグラム列の番号タグ、`Histogram_value`は列の値、`Histogram_WIDTH`は列の幅、`colour`は列の色を指定します。

### ヒストグラムを表示する

ヒストグラムを表示するには以下を使用します：

```cpp
void showHistogram();
```

### 列の値を変更する

既存の列の値を変更するには以下を使用します：

```cpp
void changeParam(uint8_t NO, String label, float Histogram_value, uint32_t colour);
```

ここで、`NO`は変更する列の番号タグを指します。

### 列を削除する

ヒストグラムから列を削除するには以下を使用します：

```cpp
void deleteCylinder(uint8_t NO);
```

ここで、`NO`は削除する列の番号タグを指します。

### ヒストグラムに折れ線グラフを追加する

折れ線グラフを追加するには以下を使用します：

```cpp
void lineChart(uint32_t colour);
```

ここで、`colour`は折れ線グラフの色を指定します。

### ヒストグラムの軸を非表示にする

以下を使用してヒストグラムの軸を非表示にします：

```cpp
void notShowAxis();
```

### その他の便利な関数

ヒストグラムライブラリのその他の便利な関数については、**`Histogram.h`**を参照してください。また、`examples`フォルダにはセットの例や完全な機能デモが含まれています。

## サンプルコード

```cpp
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <SPI.h>
#include "Histogram.h" // ヒストグラムライブラリをインクルード

TFT_Histogram histogram = TFT_Histogram(); // TFTとヒストグラムの初期化
TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  histogram.initHistogram(&tft);
  histogram.formHistogram("a", 1, 50.55, 40, TFT_RED); // 列1
  histogram.formHistogram("b", 2, 20, 40, TFT_BLACK); // 列2
  histogram.formHistogram("c", 3, 100, 50, TFT_GREEN); // 列3
  histogram.formHistogram("d", 4, 53, 50, TFT_BLUE); // 列4
  histogram.formHistogram("e", 5, 133, 30, TFT_YELLOW); // 列5
  histogram.formHistogram("f", 6, 53, 50, TFT_ORANGE); // 列6
  histogram.formHistogram("g", 7, 80, 50, TFT_PINK); // 列7

  histogram.showHistogram(); // ヒストグラムを表示
  delay(3000);

  histogram.changeParam(6, "F", 55, TFT_PINK); // 列6を変更
  histogram.deleteCylinder(7); // 列7を削除
  histogram.lineChart(TFT_BLACK);

  delay(2000);
  histogram.notShowAxis(); // ヒストグラムの軸を非表示
}
void loop() {

}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>