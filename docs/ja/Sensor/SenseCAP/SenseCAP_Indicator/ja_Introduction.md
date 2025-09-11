---
description: SenseCAP Indicator の使い方を始める
title: SenseCAP Indicator の使い方を始める
keywords:
- SenseCAP Indicator の使い方
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">今すぐ購入 🖱️</a>
</div>

SenseCAP Indicator は ESP32-S3 と RP2040 デュアル MCU によって駆動される 4 インチのタッチスクリーンで、Wi-Fi/Bluetooth/LoRa 通信をサポートしています。

このデバイスには 2 つの Grove インターフェースが搭載されており、ADC と I2C 伝送プロトコルをサポートしています。また、GPIO 拡張ピンを備えた 2 つの USB Type-C ポートがあり、ユーザーは USB ポートを介して外部アクセサリを簡単に拡張できます。

SenseCAP Indicator は開発者向けの完全オープンソースの強力な IoT 開発プラットフォームです。一括 ODM Fusion サービスも利用可能で、カスタマイズや迅速なスケールアップが可能です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

## 特徴

- **デュアル MCU と豊富な GPIO**
強力な ESP32S3 と RP2040 デュアル MCU を搭載し、柔軟な拡張オプションを提供する 400 以上の Grove 互換 GPIO を備えています。
- **リアルタイムの空気質モニタリング**
内蔵の tVOC と CO2 センサー、さらに外部 Grove AHT20 TH センサーにより、より正確な温度と湿度の測定が可能です。
- **IoT 接続のためのローカル LoRa ハブ**
Semtech SX1262 LoRa チップ（オプション）を統合し、Wi-Fi 経由で Matter などの人気 IoT プラットフォームに LoRa デバイスを接続可能。追加の互換デバイスは不要です。
- **完全オープンソースプラットフォーム**
広範な ESP32 と Raspberry Pi オープンソースエコシステムを活用し、無限のアプリケーション可能性を提供します。
- **Fusion ODM サービス利用可能**
Seeed Studio は迅速なカスタマイズとスケールアップを可能にする一括 ODM サービスも提供しています。（お問い合わせは iot@seeed.cc まで）

## ハードウェア概要

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### システム図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### ボタン機能
- **短押し:** 画面のオン/オフ。
- **3秒間長押し:** デバイスのオン/オフ。
- **10秒間長押し:** 工場出荷時のファームウェアリセット。

### Grove

Grove モジュールを接続するための 2 つの Grove インターフェースがあり、開発者にさらなる可能性を提供します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove はモジュール化された標準化コネクタプロトタイピングシステムであり、強力なオープンソースハードウェアエコシステムです。[**こちら**](https://www.seeedstudio.com/category/Grove-c-1003.html)をクリックして詳細をご覧ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®
内蔵の Semtech SX1262 LoRa® モジュールにより、LoRa® アプリケーションを構築し、Wi-Fi 経由でローカル LoRa センサーをクラウドに接続できます。例えば、LoRa ハブデバイスを構築して LoRa センサーをスマートホームエコシステムに接続し、Matter over Wi-Fi を実現することが可能です。この方法では、新しい Matter 互換デバイスを購入する必要なく、LoRa デバイスを Wi-Fi 経由で Matter エコシステムに接続できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 仕様

|画面|3.95インチ、静電容量式RGBタッチスクリーン|
| :- | :- |
|**画面解像度**|480 x 480 ピクセル|
|**電源供給**|5V-DC, 1A|
|**バッテリー**|バッテリーなし、USBポートからのみ給電|
|**プロセッサ**|<p>**ESP32-S3:** Xtensa® デュアルコア 32ビット 最大240MHz</p><p>**RP2040:** デュアルARM Cortex-M0+ 最大133MHz</p>|
|**フラッシュメモリ**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部ストレージ**|最大32GBのMicro SDカードに対応（別売り）|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262)**|<p>LoRaおよびFSKモデム</p><p>+21dBm 最大送信出力</p><p>-136dBm@SF12 BW=125KHz 受信感度</p><p>最大5kmの通信距離</p>|
|**センサー**（オプション）|<p>**CO2(Sensirion SCD41)**</p><p>範囲: 0-40000ppm</p><p>精度: 400ppm-5000ppm ±(50ppm+読み値の5%)</p><p>**TVOC (SGP40)**</p><p>範囲: 1-500 VOCインデックスポイント</p>**Grove温湿度センサー(AHT20)**<p>温度範囲: -40 ~ +85 ℃/± 0.3 ℃; 湿度範囲: 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## リソース

- [**PDF**]: [RP2040 データシート](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## 技術サポート

**SenseCAP インジケーターに関するサポートが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>