---
title: 概要
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/
slug: /ja/Wio-Terminal-LCD-Overview
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 概要

このリポジトリでは、Wio Terminalで使用されるTFT LCDライブラリのインストール方法を紹介します。このライブラリは、Wio Terminalに最低限の労力で基本的なグラフィカル機能を提供します！

## TFT LCDライブラリのデフォルトインストール

デフォルトでは、TFT LCDライブラリは**Wio Terminalボードライブラリ内に含まれています**。したがって、TFT LCDライブラリを再度ダウンロードする必要はありません。次のチュートリアルに従って、ディスプレイの使用を開始してください！

## TFT LCDライブラリを個別にインストールする

TFT LCDライブラリを個別にインストールしたい場合、またはTFT LCDライブラリのみを更新したい場合は、以下の手順に従ってください：

1. [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、TFT LCDライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Seeed_Arduino_LCD`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Adafruit Zero DMAライブラリのインストール

TFT LCDライブラリの一部の機能にはこのライブラリが必要です。

1. `スケッチ` -> `ライブラリを含める` -> `ライブラリマネージャ`に移動すると、ライブラリマネージャウィンドウが表示されます。

2. **Adafruit Zero DMA**を検索し、インストールをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg" /></div>

## 技術サポートと製品ディスカッション

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