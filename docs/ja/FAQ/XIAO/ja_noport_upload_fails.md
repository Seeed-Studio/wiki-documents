---
description: XIAO-FAQ
title: アップロードが失敗する/プログラムが異常に動作する/デバイスポートが見つからない場合の対処法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/noport_upload_fails
last_update:
  date: 6/21/2023
  author: Seraphina
---


間違ったプログラムを使用してXIAOがポートを失ったり、正常に動作しなくなったりすることがあります。具体的な症状は以下の通りです：

- コンピュータに接続されているが、XIAOのポート番号が見つからない。

- コンピュータに接続されてポート番号は表示されるが、プログラムのアップロードが失敗する。

このWikiでは、解決策を見つけることができます。XIAOのモデルによってトラブルシューティング方法が異なりますので、お使いのモデルに対応する解決策を選択してください。

:::successクイックブラウズ
以下は、様々なタイプのXIAOにおけるアップロード失敗、プログラムの異常動作、またはデバイスポートが見つからないエラーのトラブルシューティング方法です。以下のリンクから素早くインデックスできます：

- [**XIAO SAMD21**](/ja/noport_upload_fails/#for-xiao-samd21)
- [**XIAO RP2040**](/ja/noport_upload_fails/#for-xiao-rp2040)
- [**XIAO nRF52840(Sense)**](/ja/noport_upload_fails/#for-xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/ja/noport_upload_fails/#for-xiao-esp32c3)
- [**XIAO ESP32S3(Sense)**](/ja/noport_upload_fails/#for-xiao-esp32s3-sense)
:::

## **XIAO SAMD21の場合**

ユーザーのプログラミングプロセスが失敗した際に、Seeed Studio XIAO SAMD21のポートが消失することがあります。以下の操作でこの問題を解決できます：

### リセット

まず、XIAO SAMD21をリセットしてみてください。手順は以下の通りです：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- ピンセットまたは短線を使用してRSTピンを**一度だけ**ショートします
- オレンジ色のLEDが点滅し、点灯します。

:::note
内蔵LEDの動作はArduinoとは逆になっています。Seeed Studio XIAO SAMD21では、ピンをローに引く必要がありますが、他のマイクロコントローラーではハイに引く必要があります。
:::

それでもうまくいかない場合は、**ブートローダーモード**に入ってみてください：

### ブートローダーモードに入る

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、認識されないデバイスやアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- ピンセットまたは短線を使用して図のRSTピンを**2回**ショートします。
- オレンジ色のLEDが点滅し、点灯します。

この時点で、チップはBootloaderモードに入り、書き込みポートが再び表示されます。samd21チップには2つのパーティションがあり、1つはBootloader、もう1つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

それでもうまくいかない場合は、ボードをPCから切断し、再度ボードを接続してください。

## **XIAO RP2040の場合**

ユーザーのプログラミングプロセスが失敗した際に、Seeed Studio XIAO RP2040のポートが消失することがあります。以下の操作でこの問題を解決できます：

### リセット

まず、XIAO RP2040をリセットしてみてください。手順は以下の通りです：

- Seeed Studio XIAO RP2040をコンピュータに接続します。
- "R"ピンを**一度**押します。

:::note
内蔵プログラマブル単色LED（2つは青、1つは緑）の動作はArduinoとは逆になっています。Seeed Studio XIAO RP2040では、有効にするためにピンをローに引く必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

それでもうまくいかない場合は、**ブートローダーモード**に入ってみてください：

### ブートローダーモードに入る

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、認識されないデバイスやアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- "B"ボタンを長押しします。
- Seeed Studio XIAO PR2040をコンピュータに接続します。
- コンピュータにディスクドライバが表示されます。

この時点で、チップはBootloaderモードに入り、書き込みポートが再び表示されます。RP2040チップには2つのパーティションがあり、1つはBootloader、もう1つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

それでもうまくいかない場合は、ボードをPCから切断し、再度ボードを接続してください。

## **XIAO nRF52840 (Sense)の場合**

ユーザーのプログラミングプロセスが失敗した際に、Seeed Studio XIAO nRF52840 (Sense)のポートが消失することがあります。以下の操作でこの問題を解決できます：

### リセット

まず、XIAO nRF52840 (Sense)を**リセット**してみてください。手順は以下の通りです：

- Seeed Studio XIAO nRF52840 (Sense)をコンピューターに接続します。
- 「リセットボタン」を**1回**押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

それでもうまくいかない場合は、**ブートローダーモード**に入ってみてください：

### ブートローダーモードに入る

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- Seeed Studio XIAO nRF52840 (Sense)をコンピューターに接続します。
- 「リセットボタン」を**2回**押します。

それでもうまくいかない場合は、ボードをPCから切断し、再度ボードを接続してください。

## **XIAO ESP32C3の場合**

ユーザーのプログラミングプロセスが失敗した際に、Seeed Studio XIAO ESP32C3のポートが消失することがあります。以下の操作でこの問題を解決できます：

### リセット

まず、XIAO ESP32C3をリセットしてみてください。手順は以下の通りです：

- Seeed Studio XIAO ESP32C3をコンピューターに接続します。
- 「RESET BUTTON」を**1回**押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

それでもうまくいかない場合は、**ブートローダーモード**に入ってみてください：

### ブートローダーモードに入る

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- 「BOOT BUTTON」を長押しします。
- **BOOT BUTTON**を押したまま、Seeed Studio XIAO ESP32C3をコンピューターに接続します。
- **ブートローダーモード**に入るためにボタンを離します。

## **XIAO ESP32S3 (Sense)の場合**

ユーザーのプログラミングプロセスが失敗した際に、Seeed Studio XIAO ESP32S3(Sense)のポートが消失することがあります。以下の操作でこの問題を解決できます：

### リセット

まず、XIAO ESP32S3をリセットしてみてください。手順は以下の通りです：

- Seeed Studio XIAO ESP32S3をコンピューターに接続します。
- 「RESET BUTTON」を**1回**押します。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

それでもうまくいかない場合は、**ブートローダーモード**に入ってみてください：

### BootLoaderモードに入る

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- **ステップ1**. XIAO ESP32S3のBOOTボタンを離さずに押し続けます。

- **ステップ2**. BOOTボタンを押したまま、データケーブルでコンピューターに接続します。コンピューターに接続した後、BOOTボタンを離します。

:::note
電源投入時にBOOTキーを押し続けてからResetキーを1回押すことでも、BootLoaderモードに入ることができます。
:::

- **ステップ3**. **Blink**プログラムをアップロードして、XIAO ESP32S3の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>