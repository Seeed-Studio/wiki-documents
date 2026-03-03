---
description: 概要
title: 概要
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 概要

このリポジトリでは、Wio Terminal をUSBクライアントとして使用する方法を紹介します。これには、キーボードやマウスなどのヒューマンインターフェースデバイス（HID）として使用する方法が含まれます。また、MIDI（Musical Instrument Digital Interface）もサポートしています。

この機能は [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) に依存しています。このライブラリは Wio Terminal(SAMD51) でテストされており、正常に動作しています。

## Adafruit TinyUSB Library for Arduino のインストール

1. [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Adafruit_TinyUSB_Arduino` ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)