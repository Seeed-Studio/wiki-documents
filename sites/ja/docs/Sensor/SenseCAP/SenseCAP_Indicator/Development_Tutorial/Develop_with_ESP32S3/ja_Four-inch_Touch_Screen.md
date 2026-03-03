---
description: 4インチタッチスクリーン
title: 4インチタッチスクリーン
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 5/23/2023
  author: Thomas
---
# **4インチタッチスクリーン**

SenseCAP Indicatorは4インチタッチスクリーンを搭載しており、必要なUIインターフェースをカスタマイズできます。
このチュートリアルでは、SenseCAP IndicatorでLvGL（Light and Versatile Graphics Library）グラフィックスライブラリを使用する方法をご案内します。

**ピクセル座標系**

デジタル2D画像は、ピクセルの行と列で構成されています。画像内のピクセルは、そのピクセルがどの列とどの行にあるかを指定することで特定されます。簡単に言えば、ピクセルは列番号と行番号を提供する整数のペアで識別できます。

慣例的に、列は左上から右に向かって0から番号が付けられますが、場合によっては他の角から開始することもあります（回転設定による）。

**16ビットカラーモデル**

ピクセルは色の形でも表現されるため、いくつかのカラーモデルについても説明した方が良いでしょう。16ビットカラーモデルはMCUが動作するのに適しているため、これは良い出発点です。カラーモデルは3つの色成分（赤、緑、青）で構成されています。カラーモデルに応じて、これら3つの色成分は16ビット変数に格納されます。

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Red   | Red   | Red   | Red   | Red   | Green   | Green   | Green   | Green   | Green   | Green   | Blue   | Blue   | Blue   | Blue   | Blue   |

**LCDスクリーンの初期化**

SenseCAP IndicatorでLCDスクリーンを初期化するには：

```c
lcd init:
bsp_board_init()
```

# **技術サポート**

ご心配なく、私たちがサポートします！ご質問は[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)にお越しください！

大量注文やカスタマイズ要件がある場合は、iot@seeed.ccまでお問い合わせください