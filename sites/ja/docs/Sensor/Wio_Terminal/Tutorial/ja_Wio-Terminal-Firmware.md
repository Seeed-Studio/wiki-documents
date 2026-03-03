---
description:  Wio Terminal レトロゲームファームウェア
title:  Wio Terminal レトロゲームファームウェア
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Firmware
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal レトロゲームファームウェア

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

ここでは、Wio Terminal の初期工場出荷ファームウェアを公開しています。このファームウェアは、Wio Terminal で遊べるシンプルなゲームです！

## 完全なソースコードのダウンロード

Wio Terminal 初期ファームウェアの完全なソースコードは、[**こちらのリポジトリ**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper)からダウンロードできます。

- リポジトリ全体をダウンロードしてください。

- `examples/jumper` の場所にあります。

## 必要なライブラリ

### Adafruit ZeroTimer ライブラリのインストール

1. [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Adafruit ZeroTimer ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Adafruit_ZeroTimer` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
また、**1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA** にも依存しますが、これらのライブラリは Wio Terminal ボードライブラリに含まれています。問題が発生した場合は、最新のボードライブラリに更新してください。
:::

## Arduino の手順

ゲーム要素の画像をロードする方法は、**2つ**あります：

1. **フラッシュを使用する場合:**

      - これはデフォルトの方法で、画像をフラッシュにロードします。

      - コードをアップロードします。

2. **SDカードを使用して画像をロードする場合:**

      - `rgb332` ファイル（すべての画像を含む）をSDカードにコピー＆ペーストします。

      - SDカードから画像をロードする場合は、マクロ `LOAD_IMAGE_SD` をコメント解除する必要があります。

      - コードをアップロードします。

これで、Wio Terminal を使ってレトロゲームを再び楽しむことができます！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>