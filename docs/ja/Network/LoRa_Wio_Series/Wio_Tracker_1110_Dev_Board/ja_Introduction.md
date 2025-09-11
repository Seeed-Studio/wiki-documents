---
description: Wio_Tracker_Introduction
title: Wio Tracker 1110 の紹介
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Wio Tracker 1110 開発ボード](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)は、[Wio-WM1110 ワイヤレスモジュール](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)をベースにしており、[Semtech の LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® トランシーバーと位置情報取得用の多目的ラジオフロントエンドを統合した、使いやすい LoRa ベースのトラッキング開発プラットフォームです。

コンパクトなサイズと豊富なインターフェースを備えた Wio Tracker 1110 開発ボードは、オンボードアンテナを搭載しており、簡単に展開できます。Arduino 開発環境と LoRaWAN プロトコルスタックをサポートしており、トラッキング関連の IoT プロジェクトに最適です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>

## 特徴

* **Nordic nRF52840 と Semtech LR1110 による駆動**<br/>
* **マルチプロトコル対応**: LoRa®、GNSS(GPS/BeiDou)、Bluetooth、Wi-Fi スニファー<br/>
* **300 以上の Seeed Grove センサーをサポート**: 様々なトラッキングおよびセンシング要件に対応可能<br/>
* **オンボード温度センサー、湿度センサー、3軸加速度計**: 環境および動作データを幅広く取得<br/>
* **完全オープンソースプラットフォーム**: LR1110 と nRF52840 の広範なオープンソースエコシステムを活用し、無限のアプリケーション可能性を提供<br/>
* **Arduino IDE 互換性**: 開発者にとって使いやすく、馴染みのある環境でプログラミング可能

## 説明

### 低消費電力 LoRa® トランシーバー

Semtech の LR1110 の恩恵を受け、Wio Tracker 1110 開発ボードは長距離、低消費電力の LoRa® 通信を提供します。ネットワークアーキテクチャやアプリケーションなどの特徴については、LoRa® と LoRaWAN® 技術の紹介をご覧ください。これにより、LoRa® が何であるか、どのように機能するか、その利点と欠点について理解できます。

### 複数の位置情報技術

Wio Tracker 1110 開発ボードは、位置情報取得を目的とした多目的ラジオフロントエンドを統合しています。屋外位置情報専用の GNSS、屋内位置情報用の Wi-Fi および Bluetooth スキャンを備えています。屋外と屋内の活動間で自動的に切り替えることができ、屋内用と屋外用の異なるトラッカーを構築する必要がなくなります。これにより、複雑さとコストを削減しながら、全方位の位置情報カバレッジを提供します。

### 豊富な周辺機器

オンボードの TH センサーと 3軸加速度計に加えて、一連の周辺インターフェースを備えており、ADC/UART および IIC 伝送プロトコルをサポートします。これにより、400 以上の Grove モジュールに接続可能で、よりスマートなソリューションへの簡単なアップグレードが可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### ユーザーアプリケーションの開発

Wio Tracker 1110 開発ボードは完全オープンソースの強力な IoT 開発プラットフォームであり、Arduino IDE に対応しています。例題アプリケーションとコードサンプルが付属しており、スムーズかつ迅速に始められるように設計されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### クイックスタートデモ

プラグアンドプレイデモを提供しており、ユーザーは QR コードをスキャンし、電源を接続するだけで、5 分以内に SenseCAP Mate APP 上で位置情報とセンサーデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### 仕様

|LoRa® と位置情報 (Semtech LR1110)||
|----|----|
|LoRaWAN® プロトコル|V1.0.3|
|周波数プラン|863~928MHz|
|感度|	-125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|出力電力|最大 20dBm @LoRa®|
|位置情報技術|GNSS(GPS/BeiDou)、WiFi スニファー|
|通信範囲|2~10km(アンテナと環境による)|

|Bluetooth (Nordic nRF52840)||
|----|----|
|Bluetooth|Bluetooth 5.3|
|フラッシュ|1MB|
|RAM|256KB|
|プロトコル|Bluetooth LE、Bluetooth メッシュ、Thread、Zigbee、<br/>802.15.4、ANT および 2.4 GHz 独自スタック|
|出力電力|最大 6dBm @Bluetooth|

|一般仕様||
|----|----|
|電圧 - 供給|5V (USB 2.0 Type-C)<br/>バッテリーコネクタ - 4.5V|
|RFIO	|GNSS アンテナコネクタ x 1<br/>LoRa アンテナコネクタ x 1|
|USB Type-C|	x 1|
|Grove インターフェース|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>デジタル x 3|
|ボタン|ユーザー設定可能ボタン<br/>リセットボタン|

|オンボードセンサー||
|----|----|
|TH センサー (SHT41)||
|範囲|精度|
|温度|-40~125°C<br/>0.2°C|
|湿度|0~100%RH<br/>±1.8%RH|
|3軸加速度計 (LIS3DHTR)||
|範囲|±2g, 4g, 8g, 16g|
|帯域幅|0.5Hz ~ 625Hz|
|感度 (LSB/g)|1000 (±2g) ~ 83 (±16g)|