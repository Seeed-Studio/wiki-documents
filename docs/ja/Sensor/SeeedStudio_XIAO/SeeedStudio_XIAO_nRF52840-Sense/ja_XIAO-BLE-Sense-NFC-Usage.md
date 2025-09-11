---
description: XIAO nRF52840 (Sense) の NFC 使用方法
title: 両バージョンでの NFC 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# Seeed Studio XIAO nRF52840 (Sense) での NFC 使用方法

<!-- :::note
Seeed Studio XIAO nRF52840 ボードの NFC 機能は一時的に動作していません。新しい NFC ライブラリが公開され次第、新しい wiki が更新される予定です。
::: -->

:::note
Seeed nRF52 Boards バージョン 1.1.3 と Seeed nRF52 mbed-enabled Boards バージョン 2.9.2 がテストされ、承認されています。
:::

**Seeed Studio XIAO nRF52840** と **Seeed Studio XIAO nRF52840 Sense** の両方には **NFC（Near Field Communication）モジュール** が搭載されています。この wiki では、これらのボードで NFC を使い始めるのに役立ちます。ここでは、NFC アンテナに電話を近づけた後、ボードから電話にテキスト文字列を送信する基本的な例を実演します。

## 準備作業

> NFC 機能は「Seeed nRF52 mbed-enabled Boards Library」を使用する際に良好に動作します。

ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)を参照してインストールを完了してください。既にインストール済みの場合は、先に進んでプロジェクトを処理できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC アンテナ
- 1 x USB Type-C ケーブル
- 1 x スマートフォン

## 必要なソフトウェア

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## ハードウェア接続

以下のように NFC アンテナを Seeed Studio XIAO nRF52840 (Sense) にはんだ付けします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>


## NFC でテキスト文字列を送信

- **ステップ 1.** Arduino IDE を開き、以下のコードをアップロードします

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

ここでは単純にテキスト文字列「Hello World!」を送信します。

- **ステップ 2.** 「NFC TagInfo」モバイルアプリを開き、**Scan & Launch** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **ステップ 3.** NFC アンテナを電話に近づけると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>