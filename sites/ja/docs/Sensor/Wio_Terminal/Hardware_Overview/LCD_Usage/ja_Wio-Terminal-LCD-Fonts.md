---
title: フォント
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Fonts/
slug: /ja/Wio-Terminal-LCD-Fonts
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 異なるフォントの使用

このリポジトリでは、ライブラリに含まれる異なる無料フォント（GNU FreeFonts）の使用方法について説明します。このガイドに従って、お気に入りのフォントをWio Terminalに表示する方法を選択してください！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## 利用可能なフォント

このライブラリでは、`Serif`、`Sans`、`Mono`の3つの主要なフォントを使用できます。各フォントには、いくつかのスタイル（**太字**、*斜体*、斜め）と、9pt、12pt、18pt、24ptのフォントサイズが用意されています。

## Wio Terminalでのフォントの使用

これらのフォントを簡単に使用するために、[Seeed_Arduino_LCDリポジトリ](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately)から`Free_Fonts.h`ファイルをコピーすることを強くお勧めします。リポジトリをすでにダウンロードしていると仮定し、パスが`~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`である場合、このヘッダーファイルをスケッチの場所に添付できます。これにより、フォントの参照が非常に簡単になります。

タイピングを大幅に節約するために、各フォントは以下の3つの方法でスケッチ内で参照できます：

1. フォントファイル名の前に`&`を付ける方法。例：`&FreeSansBoldOblique24pt7b`

#### 方法1の例

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2. `Free_Fonts.h`内のリストを見て決定される番号`FF#`を使用する方法。

#### 方法2の例

```cpp
tft.setFreeFont(FF32);
```

3. ファイル名の略称を使用する方法。以下のリストで使用される略称を確認してください。

#### 方法3の例

```cpp
tft.setFreeFont(FSSBO24)
```

略称の意味は以下の通りです：

- F = Freeフォント
- M = Mono
- SS = Sans Serif（Serifフォントと区別するためにダブルS）
- S = Serif
- B = 太字（Bold）
- O = 斜め（Oblique、数字のゼロではなく文字O）
- I = 斜体（Italic）
- No = ポイントサイズ（9、12、18、24のいずれか）

## 異なるフォントを使用したサンプルコード

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" //ヘッダーファイルを含む
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); //黒背景
  
  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //Free, Sans, Bold, Oblique, 12ptを選択
  tft.drawString("Sans Serif 12pt",70,80);//(70,80)に文字列を表示

  tft.setFreeFont(FF10); //Free, Mono, Oblique, 12ptを選択
  tft.drawString("Mono 12pt",70,110);//(70,110)に文字列を表示

  tft.setFreeFont(FS12); //Free, Serif, 12ptを選択
  tft.drawString("Serif 12pt",70,140);//(70,140)に文字列を表示
  
}
void loop() {}
```

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>