---
description: Wio_Tracker_Introduction
title: Wio Tracker 1110 紹介
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 11/3/2023
  author: Jessie
---


[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)は[Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)をベースとし、[Semtech's LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® トランシーバーと位置情報取得用の多目的無線フロントエンドを統合した、ユーザーフレンドリーなLoRaベースのトラッキング開発プラットフォームです。

コンパクトなサイズと豊富なインターフェースを備えたWio Tracker 1110 Dev Boardは、簡単な展開のためのオンボードアンテナを便利に装備しています。Arduino開発環境とLoRaWANプロトコルスタックをサポートし、トラッキング関連のIoTプロジェクトに最適です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>

## 特徴

- **Nordic nRF52840とSemtech LR1110を搭載**<br/>
- **マルチプロトコル**: LoRa®、GNSS（GPS/BeiDou）、Bluetooth、Wi-Fi Sniffer<br/>
- **300種類以上のSeeed Groveセンサーをサポート**: 様々なトラッキングとセンシング要件に高い適応性を提供<br/>
- **オンボード温度センサー、湿度センサー、3軸加速度計**: 幅広い環境データとモーションデータを取得<br/>
- **完全オープンソースプラットフォーム**: 広範なLR1110とnRF52840オープンソースエコシステムを活用し、無限のアプリケーション可能性を提供<br/>
- **Arduino IDE互換性**: プログラミングの容易さと開発者にとって馴染みのある環境を提供

## 説明

### 低消費電力LoRa® トランシーバー

Semtech's LR1110の恩恵により、Wio Tracker 1110 Dev Boardは長距離、低消費電力のLoRa® 通信を提供します。Long Rangeとそのネットワークアーキテクチャやアプリケーションなどの機能について学ぶには、LoRa®とLoRaWAN® 技術の紹介をご確認ください。Long Rangeとは何か、どのように動作するか、その長所と短所について説明しています。

### 複数の測位技術

Wio Tracker 1110 Dev Boardは、位置情報取得を目的とした多目的無線フロントエンドを統合しています。屋外測位専用のGNSSと、屋内測位用のWi-FiおよびBluetoothスキャニングを装備しています。屋外と屋内の活動間で自動的に切り替えることができ、屋内または屋外用の異なるトラッカーを構築する必要性を置き換え、複雑さとコストを削減しながら全方位の位置カバレッジを提供します。

### 豊富な周辺機器

オンボードTHセンサーと3軸加速度計に加えて、一連の周辺インターフェースを備え、ADC/UARTとIIC伝送プロトコルをサポートし、400種類以上のGroveモジュールに接続でき、よりスマートなソリューションへの簡単なアップグレードを可能にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### ユーザーアプリケーションの開発

Wio Tracker 1110 Dev Boardは完全オープンソースの強力なIoT開発プラットフォームで、Arduino IDEと互換性があります。スムーズかつ迅速に開始できるよう、一連のサンプルアプリケーションとコードサンプルが付属しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### クイックスタートデモ

プラグアンドプレイデモを提供しており、ユーザーは単純にQRコードをスキャンし、電源を接続するだけで、5分以内にSenseCAP Mate APPで位置情報とセンサーデータを表示できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### 仕様

|LoRa® と測位 (Semtech LR1110)||
|----|----|
|LoRaWAN® プロトコル|V1.0.3|
|周波数プラン|863~928MHz|
|感度| -125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|出力パワー|20dBm max @LoRa®|
|測位技術|GNSS(GPS/BeiDou), WiFi Sniffer|
|範囲|2~10km（アンテナと環境に依存）|

|Bluetooth(Nordic nRF52840)||
|----|----|
|Bluetooth|Bluetooth 5.3|
|Flash|1MB|
|RAM|256KB|
|プロトコル|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, <br/>802.15.4, ANT and 2.4 GHz proprietary stacks|
|出力パワー|6dBm max @Bluetooth|

|一般||
|----|----|
|電源電圧|5V (USB 2.0 Type-C)<br/>バッテリーコネクタ-4.5V|
|RFIO |GNSSアンテナコネクタ x 1<br/>LoRaアンテナコネクタ x 1|
|USB type-C| x 1|
|Groveインターフェース|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>Digital x 3|
|ボタン|USER-設定可能ボタン<br/>RESET-リセット|

|オンボードセンサー||
|----|----|
|THセンサー (SHT41)||
|範囲|精度|
|温度|-40~125°C<br/>0.2°C|
|湿度|0~100%RH<br/>±1.8%RH|
|3軸加速度計(LIS3DHTR)||
|範囲|±2g, 4g, 8g, 16g|
|帯域幅|0.5Hz ~ 625Hz|
|感度 (LSB/g)|1000 (±2g) ~ 83 (±16g)|
