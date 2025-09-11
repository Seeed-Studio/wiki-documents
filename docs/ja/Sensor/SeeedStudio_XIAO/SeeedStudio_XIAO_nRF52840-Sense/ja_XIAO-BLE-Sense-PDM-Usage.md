---
description: Seeed Studio XIAO nRF52840 Sense での PDM マイクロフォンの使用方法
title: XIAO nRF52840 Sense での PDM 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 06/25/2024
  author: Spencer
---

# Seeed Studio XIAO nRF52840 Sense での PDM マイクロフォンの使用方法

## 概要

**Seeed Studio XIAO nRF52840 Sense** には **PDM（パルス密度変調）マイクロフォン** が搭載されており、リアルタイムで音声データを受信し、音声認識に使用できます。ワイヤレス接続機能と FPU による優れた音声データ処理性能により、デバイスのリモート音声制御などの興味深い TinyML プロジェクトに最適です。

:::note 注意

- **Seeed Studio XIAO nRF52840** には、この PDM マイクロフォンモジュールは搭載されていません。
- PDM マイクロフォンは *Seeed nrf52 mbed-enabled Boards Library* を使用する際により良いパフォーマンスを発揮するため、これを強く推奨します。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

この wiki では、このボードでの **PDM マイクロフォンの使用** の基本を紹介し、2つの例を含みます：

1. [生データの可視化](#demo1)：この例では、マイクロフォンからの生データをリアルタイムで可視化する方法を示します。
2. [録音した音声の保存](#demo2)：この例では、マイクロフォンから録音した音声を SD カードに保存する方法を示します。

それでは、これらの例を探ってみましょう！

## 例 1：PDM マイクロフォンからの生データをリアルタイムで可視化 {#demo1}

この例では、PDM マイクロフォンからの生データを **シリアルモニター** と **シリアルプロッター** でリアルタイムに可視化します。

### 前提条件

- **ステップ 1**. Arduino ライブラリを取得し、[Seeed_Arduino_Mic ライブラリをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) して zip ファイルとして保存します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2**. Arduino IDE を開き、`スケッチ > ライブラリをインクルード > .ZIP形式のライブラリをインストール...` に移動し、ダウンロードした zip ファイルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### 例の実行

- **ステップ 3.** `ファイル > スケッチ例 > Seeed Arduino Mic > mic_serial_plotter` に移動して **mic_serial_plotter** を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 4.** コードをアップロードし、**シリアルモニター** を開きます

:::note 注意
コードをアップロードした後、Arduino ウィンドウの右上角にある **シリアルモニター** をクリックするまで、自動的に実行されません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

これで、上記のようにシリアルモニターに生のマイクロフォンデータがリアルタイムで表示されます！

### 生データの可視化

- **ステップ 5.** `ツール > シリアルプロッター` に移動して **シリアルプロッター** を開くと、生のマイクロフォンデータが波形グラフでリアルタイムに表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## 例2: マイクから録音した音声をSDカードに保存する {#demo2}

Seeed Studio XIAOシリーズと同様に、Seeed Studio XIAO nRF52840 Senseは[Seeeduino Seeed Studio XIAO拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)と完全に互換性があります。拡張ボードに取り付けることで、ボード上のSDカードモジュールを使用できます。拡張ボードを使用したくない場合は、**SPI**インターフェースを通じて別のSDカードモジュールを接続することもできます。

### 前提条件

- **ステップ1.** Seeed Studio XIAO nRF52840 SenseをSeeed Studio XIAO拡張ボードに取り付け、拡張ボードのSDカードスロットにSDカードを挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

拡張ボードのライトが定期的に**緑色**に点滅している場合、接続が成功しています。

> 以前に*Seeed_Arduino_Mic Library*をすでにインストールしているため、この例では再度インストールする必要はありません。ただし、インストールしていない場合は、上記の例の手順に従ってください。
:::

- **ステップ2**. [Seeed_Arduino_FS Library](https://github.com/Seeed-Studio/Seeed_Arduino_FS)をzipファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**注意:** このライブラリはSDカードにアクセスしてデータを保存するために必要です。

### 例の実行

- **ステップ3**. Arduino IDEを開き、`Sketch > Include Library > Add .ZIP Library...`に移動して、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **ステップ4.** `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard`に移動して**mic_Saved_OnSDcard**を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **ステップ5.** コードをアップロードし、**シリアルモニター**を開きます

### データの保存

**注意:** コードをアップロードした後、Arduinoウィンドウの右上角にある**シリアルモニター**をクリックするまで、自動的に実行されません。

これで音声データのサンプリングが開始され、5分間録音し、データが自動的にSDカードに保存されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

この**test.9568.wav**は5秒間の音声ファイルで、SDカードに保存されています。

:::note 再度サンプリングしますか？
音声データを再サンプリングしたい場合は、リセットボタンを押してから**シリアルモニター**を再度クリックしてサンプリングを開始してください。
:::