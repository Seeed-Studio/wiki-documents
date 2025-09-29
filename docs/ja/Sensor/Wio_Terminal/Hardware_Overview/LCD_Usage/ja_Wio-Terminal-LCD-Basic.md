---
title: LCDの基本
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /ja/Wio-Terminal-LCD-Basic
last_update:
  date: 05/15/2025
  author: gunengyu
---


# TFT LCDスクリーンの基本

## ピクセル座標系

デジタル2次元画像は、ピクセルの行と列で構成されています。画像内のピクセルは、どの列とどの行にあるかを指定することで特定されます。簡単に言えば、ピクセルは列番号と行番号を提供する整数のペアで識別できます。例えば、座標 (4,7) のピクセルは、列4、行7に位置します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>

一般的に、列は左上から右に向かって番号が付けられ、ゼロから始まりますが、場合によっては他の角から始めることもできます（回転を設定することで）。

## 8ビット & 16ビットカラーモデル

ピクセルは色形式でも表現されるため、いくつかのカラーモデルについても触れておくと良いでしょう。MCUが扱いやすい8ビットおよび16ビットカラーモデルは良い出発点です。これらの2つのカラーモデルは、**赤、緑、青**の3つの色成分で構成されています。カラーモデルに応じて、これらの3つの色成分は8ビットまたは16ビットの変数に格納されます。

### 8ビットカラー

| ビット  | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **データ** | 赤   | 赤   | 赤   | 緑   | 緑   | 緑   | 青   | 青   |

### 16ビットカラー

| ビット  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **データ** | 赤   | 赤   | 赤   | 赤   | 赤   | 緑   | 緑   | 緑   | 緑   | 緑   | 緑   | 青   | 青   | 青   | 青   | 青   |

以下はLCDライブラリに含まれる基本的な定義済みの色（16ビット）の例です：

```cpp
#define TFT_BLACK       0x0000      /*   0,   0,   0 */
#define TFT_NAVY        0x000F      /*   0,   0, 128 */
#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */
#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */
#define TFT_MAROON      0x7800      /* 128,   0,   0 */
#define TFT_PURPLE      0x780F      /* 128,   0, 128 */
#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */
#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */
#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */
#define TFT_BLUE        0x001F      /*   0,   0, 255 */
#define TFT_GREEN       0x07E0      /*   0, 255,   0 */
#define TFT_CYAN        0x07FF      /*   0, 255, 255 */
#define TFT_RED         0xF800      /* 255,   0,   0 */
#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */
#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */
#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */
#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */
#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */
```

## TFT LCDスクリーンの初期化

Wio TerminalでTFT LCDスクリーンを初期化するには：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // バックライトをオンにする
  ...
}
```

ここで、`r`はTFT LCDスクリーンの回転（0から3まで）を意味し、どの角から開始するかを指定します。

### サンプルコード

この例では、Wio TerminalでTFT LCDスクリーンを初期化し、スクリーン全体を赤色で塗りつぶします。

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // スクリーン全体を赤色で塗りつぶす
}

void loop() {

}
```

## LCDバックライトのオフ

Wio TerminalのLCDバックライトをオフにするには、LCDバックライト制御ピン `72Ul` を定義し、`HIGH` に設定してオンにし、`LOW` に設定してオフにします：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // LCDの制御ピン

void setup() {
  // 初回実行時のセットアップコード
  
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // LCDバックライトをオフにする
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // LCDバックライトをオンにする
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // 繰り返し実行されるメインコード

}
```

## LCDバックライトの明るさを制御する

この例は[**Kenta IDA**](https://github.com/ciniml)によって作成され、すべてのクレジットはKenta IDAに帰属します。

**ステップ 1.** **[リポジトリ](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook)をダウンロードしてください。**

- `examples/WioTerminal_BackLight` の場所にあります。

**ステップ 2.** **コードをアップロードしてください。**

`lcd_backlight_control.ino` を Wio Terminal にアップロードすると、LCDの明るさが変化するのが確認できます。

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>