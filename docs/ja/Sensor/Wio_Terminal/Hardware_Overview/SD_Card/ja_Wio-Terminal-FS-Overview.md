---
description: 概要
title: 概要
keywords:
- Wio_terminal ファイルシステム
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-FS-Overview
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 概要

このリポジトリでは、Wio Terminalで使用されるファイルシステムライブラリのインストール方法を紹介します。このライブラリはSDカードを使用した基本的なファイル操作機能を提供し、SPIインターフェースを使用してSDカードへの読み書きを可能にします。

## ファイルシステムライブラリのインストール

1. [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、FSライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Seeed_Arduino_FS`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 依存するSFUDライブラリのインストール

1. [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、SFUDライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Seeed_Arduino_SFUD`ファイルを選択します。

## MicroSDカードのフォーマット

- **最大MicroSDカード容量: `16GB`**

- **対応するMicroSDカードフォーマット:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT