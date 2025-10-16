---
description: SenseCAP Indicator を始める
title: SenseCAP Indicator を始める
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 10/13/2025
  author: Twelve
---

## 概要

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">今すぐ購入 🖱️</a>
</div>

SenseCAP Indicator は、ESP32-S3 と RP2040 デュアル MCU によって駆動される 4 インチタッチスクリーンで、Wi-Fi/Bluetooth/LoRa 通信をサポートしています。

このデバイスには 2 つの Grove インターフェースが搭載されており、ADC と I2C 伝送プロトコルをサポートし、内部に GPIO 拡張ピンを持つ 2 つの USB Type-C ポートがあるため、ユーザーは USB ポート経由で外部アクセサリを簡単に拡張できます。

SenseCAP Indicator は、開発者向けの完全オープンソースの強力な IoT 開発プラットフォームです。カスタマイゼーションと迅速なスケールアップのためのワンストップ ODM Fusion サービスも利用可能です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
Meshtastic をサポートしていないインジケーターに Meshtastic ファームウェアをフラッシュしないでください。これによりハードウェアの損傷が発生する可能性があります。Meshtastic 用のデバイスを購入したい場合は、この [Sensecap Indicator for Meshtastic](https://wiki.seeedstudio.com/ja/sensecap_indicator_meshtastic) をお買い求めください。
:::

## 特徴

- **デュアル MCU と豊富な GPIO**
強力な ESP32S3 と RP2040 デュアル MCU、および柔軟な拡張オプションのための 400 以上の Grove 互換 GPIO を搭載。
- **リアルタイム空気質監視**
内蔵の tVOC と CO2 センサー、およびより正確な温度と湿度の測定のための外部 Grove AHT20 TH センサー。
- **IoT 接続のためのローカル LoRa ハブ**
統合された Semtech SX1262 LoRa チップ（オプション）により、追加の互換デバイスを必要とせずに、Wi-Fi 経由で LoRa デバイスを Matter などの人気の IoT プラットフォームに接続できます。
- **完全オープンソースプラットフォーム**
広範な ESP32 と Raspberry Pi オープンソースエコシステムを活用して、無限のアプリケーション可能性を実現。
- **Fusion ODM サービス利用可能**
Seeed Studio は、様々なニーズに対応するための迅速なカスタマイゼーションとスケールアップのためのワンストップ ODM サービスも提供しています。（iot@seeed.cc までお問い合わせください）

## ハードウェア概要

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### システム図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### ボタン機能

- **短押し：** 画面をオフ/ウェイクアップ。
- **3秒長押し：** デバイスの電源オン/オフ。
- **10秒長押し：** 工場出荷時ファームウェアリセット。

### Grove

Grove モジュールを接続するための 2 つの Grove インターフェースがあり、開発者により多くの可能性を提供します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove は、モジュラーで標準化されたコネクタプロトタイピングシステムであり、強力なオープンソースハードウェアエコシステムです。詳細については[**こちら**](https://www.seeedstudio.com/category/Grove-c-1003.html)をクリックしてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

内蔵の Semtech SX1262 LoRa® モジュールにより、LoRa® アプリケーションを構築し、Wi-Fi 経由でローカル LoRa センサーをクラウドに接続できます。例えば、LoRa ハブデバイスを構築して、LoRa センサーをスマートホームエコシステムに接続し、Wi-Fi 経由で Matter を実装できます。この方法により、新しい Matter 互換デバイスを購入する必要なく、LoRa デバイスを Wi-Fi 経由で Matter エコシステムに接続できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 仕様

|画面|3.95 インチ、静電容量式 RGB タッチスクリーン|
| :- | :- |
|**画面解像度**|480 x 480 ピクセル|
|**電源供給**|5V-DC、1A|
|**バッテリー**|バッテリーなし、USB ポートのみで電源供給|
|**プロセッサー**|<p>**ESP32-S3:** Xtensa® デュアルコア 32 ビット最大 240 MHz</p><p>**RP2040:** デュアル ARM Cortex-M0+ 最大 133MHz</p>|
|**フラッシュ**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部ストレージ**|最大 32GB Micro SD カードをサポート（別売り）|
|**Wi-Fi**|802.11b/g/n、2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa および FSK モデム</p><p>+21dBm 最大送信電力</p> <p>-136dBm@SF12 BW=125KHz RX 感度</p><p>最大 5km 通信距離</p>|
|**センサー**（オプション）|<p>**CO2(Sensirion SCD41)**</p><p>範囲: 0-40000ppm</p><p>精度: 400ppm-5000ppm ±(50ppm+読み取り値の5%)</p><p>**TVOC (SGP40)**</p><p>範囲: 1-500 VOC インデックスポイント</p>**Grove 温湿度センサー(AHT20)**<p>温度範囲: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## リソース

- [**PDF**]: [RP2040 データシート](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## 技術サポート

**SenseCAP Indicator でお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
