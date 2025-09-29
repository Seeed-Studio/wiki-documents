---
description: 概要
title: 概要
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBH-Overview
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 概要

このリポジトリでは、Wio Terminal をUSBホストとして使用する方法を紹介します。これにより、USBデバイスを Wio Terminal に接続し、コンピュータのように操作することができます！

この機能は [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) に依存しています。このライブラリは Wio Terminal(SAMD51) でテストされており、正常に動作しています。

## USB Host Library SAMD のインストール

1. [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_LCD` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## USBホストの設定

Wio Terminal でUSBホストを有効にするには、2つのピンを設定する必要があります。`PIN_USB_HOST_ENABLE` を **LOW** に設定し、`OUTPUT_CTR_5V` を **HIGH** に設定する必要があります。

これを簡単に行うには、以下のコードを `void setup()` に追加してください：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```