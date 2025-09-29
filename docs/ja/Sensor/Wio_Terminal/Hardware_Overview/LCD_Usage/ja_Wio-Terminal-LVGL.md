---
title: LvGL グラフィックスライブラリの使用方法
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LVGL/
slug: /ja/Wio-Terminal-LVGL
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal 用 LvGL グラフィックスライブラリの使用方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

このチュートリアルでは、Wio Terminal 用の [**LvGL**](https://lvgl.io/) (Light and Versatile Graphics Library) グラフィックスライブラリの使用方法を説明します。これは、元の [lv_arduino](https://github.com/lvgl/lv_arduino) を Wio Terminal に移植したものです。

[**LvGL**](https://lvgl.io/) は、使いやすいグラフィカル要素、美しい視覚効果、低メモリ使用量を備えた組み込みGUIを作成するために必要なすべてを提供するオープンソースのグラフィックスライブラリです。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 始める前に

- 以下の手順を進める前に、[**Wio Terminal の始め方**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/) を確認してください。

### Seeed_Arduino_LvGL のインストール

1. [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、FSライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_LvGL` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### サンプル

#### 1. ベンチマーク

これは Wio Terminal 上での LvGL グラフィックスライブラリのベンチマークデモです。Arduino IDE を使用して `benchmark.ino` をデバイスにアップロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    現在のポートでは、ベンチマークデモのFPSが正しく表示されていません。今後の更新をお待ちください。
:::

#### 2. ストレステスト

これは Wio Terminal 上での LvGL グラフィックスライブラリのストレステストデモです。Arduino IDE を使用して `lv_stresss.ino` をデバイスにアップロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

さらに使用例については、[**LvGL の公式ドキュメント**](https://docs.lvgl.io/latest/en/html/index.html) や [Arduino サンプル](https://github.com/lvgl/lvgl/tree/master/examples/arduino) を参考にしてください。

## リソース

- [LvGL ライブラリの公式ドキュメント](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>