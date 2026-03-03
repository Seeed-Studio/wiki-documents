---
description: 概要
title: Bluetooth 概要
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Bluetooth-Overview
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Bluetooth 概要

この Wiki では、Wio Terminal のワイヤレスコア Realtek RTL8720 の最新ファームウェアを更新する方法と、Wio Terminal に Bluetooth 接続を有効にするためのすべての依存ライブラリをインストールする方法を紹介します。

## ワイヤレスコアファームウェアの更新

Wio Terminal のワイヤレスコアファームウェアを更新するには、[こちらのガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)に従ってください。

:::note
このファームウェアにより、Wi-Fi と Bluetooth を同時に使用することができます！
:::

## Seeed SAMD ArduinoCore の更新

:::note
**Seeed SAMD ArduinoCore を最新バージョン (1.8.1) に更新してください！**
:::

- **ステップ 1:** **Arduino IDE** を開き、`ツール` -> `ボード` -> `ボードマネージャ` をクリックし、検索ボックスに **Wio Terminal** を入力します。

- **ステップ 2:** 最新バージョン (1.8.1) がインストールされていることを確認してください。インストールされていない場合は、`バージョンを選択` ドロップダウンメニューをクリックし、最新バージョンを選択して `インストール` をクリックします。

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> Seeed SAMD ArduinoCore のソースコードは [**こちら**](https://github.com/Seeed-Studio/ArduinoCore-samd) からも確認できます。

## ライブラリのインストール

Bluetooth 接続にはいくつかの Arduino ライブラリが必要です。Wio Terminal 用のすべてのワイヤレス関連ライブラリを **Arduino ライブラリマネージャ** に含めています。そのため、Arduino IDE 内で Arduino ライブラリマネージャを開き、必要なライブラリを検索して簡単にインストールすることができます！

### Arduino ライブラリマネージャからライブラリをインストールする方法

- **ステップ 1:** **Arduino IDE** を開き、`スケッチ` -> `ライブラリを含める` -> `ライブラリを管理...` をクリックします。

- **ステップ 2:** 必要なライブラリの**名前**を入力し、ドロップダウンメニューから**最新バージョン**を選択します（利用可能な場合）。

- **ステップ 3:** **インストール**をクリックします。

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Bluetooth に必要なライブラリ

Wio Terminal で Bluetooth を開始するには、以下のライブラリが必要です。Arduino ライブラリマネージャの検索ボックスにライブラリ名を入力して検索してください。

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - `"seeed rpcble"` を検索

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - `"seeed rpcunified"` を検索