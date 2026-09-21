---
description: SenseCAP Indicator を使い始める
title: SenseCAP Indicator を使い始める
keywords:
  - Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sku: 114993068,114993071,114993069,114993070
sidebar_position: 1
last_update:
  date: 09/20/2026
  author: Twelve
createdAt: '2023-05-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/
---

## 概要

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">今すぐ入手 🖱️</a>
</div>

SenseCAP Indicator は、ESP32-S3 と RP2040 のデュアル MCU によって駆動される 4 インチタッチスクリーンで、Wi-Fi/Bluetooth/LoRa 通信をサポートします。

本デバイスには 2 つの Grove インターフェースが搭載されており、ADC と I2C 伝送プロトコルをサポートします。また、内部に GPIO 拡張ピンを備えた 2 つの USB Type-C ポートを備えているため、ユーザーは USB ポート経由で外部アクセサリを簡単に拡張できます。

SenseCAP Indicator は、開発者向けの完全オープンソースで強力な IoT 開発プラットフォームです。ワンストップ ODM Fusion サービスも利用可能で、カスタマイズや迅速なスケールアップに対応します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
Meshtastic をサポートしていない Indicator に Meshtastic ファームウェアを書き込まないでください。ハードウェアの損傷を引き起こす可能性があります。Meshtastic 用にデバイスを購入したい場合は、こちらの [Sensecap Indicator for Meshtastic](https://wiki.seeedstudio.com/ja/sensecap_indicator_meshtastic) をご購入ください。
:::

## 特長

- **デュアル MCU と豊富な GPIO**
高性能な ESP32S3 と RP2040 デュアル MCU を搭載し、400 を超える Grove 互換 GPIO により柔軟な拡張オプションを提供します。
- **リアルタイム空気質モニタリング**
内蔵 tVOC および CO2 センサに加え、より正確な温度・湿度測定のための外部 Grove AHT20 温湿度センサを備えています。
- **IoT 接続のためのローカル LoRa ハブ**
Semtech SX1262 LoRa チップ（オプション）を内蔵しており、追加の互換デバイスを用意することなく、Wi-Fi 経由で LoRa デバイスを Matter などの一般的な IoT プラットフォームに接続できます。
- **完全オープンソースプラットフォーム**
豊富な ESP32 および Raspberry Pi のオープンソースエコシステムを活用し、無限のアプリケーションの可能性を実現します。
- **Fusion ODM サービス対応**
Seeed Studio は、さまざまなニーズに対応するための迅速なカスタマイズとスケールアップを可能にするワンストップ ODM サービスも提供しています。（iot@seeed.cc までお問い合わせください）

## ハードウェア概要

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### システム構成図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### ボタン機能

- **短押し:** 画面のオフ/ウェイクアップ。
- **3 秒長押し:** デバイスの電源オン/オフ。
- **10 秒長押し:** 工場出荷時ファームウェアにリセット。

### Grove

Grove モジュールを接続するための Grove インターフェースが 2 つあり、開発者にさらなる可能性を提供します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove は、モジュール式で標準化されたコネクタプロトタイピングシステムであり、強力なオープンソースハードウェアエコシステムです。詳しくは [**こちら**](https://www.seeedstudio.com/category/Grove-c-1003.html) をご覧ください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

内蔵の Semtech SX1262 LoRa® モジュールにより、LoRa® アプリケーションを構築し、ローカルの LoRa センサを Wi-Fi 経由でクラウドに接続できます。例えば、LoRa ハブデバイスを構築して LoRa センサをスマートホームエコシステムに接続し、Matter over Wi-Fi を実現できます。この方法により、新たに Matter 対応デバイスを購入することなく、LoRa デバイスを Wi-Fi 経由で Matter エコシステムに接続できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 仕様

|Screen|3.95 インチ、静電容量式 RGB タッチスクリーン|
| :- | :- |
|**Screen Resolution**|480 x 480 ピクセル|
|**Power Supply**|5V-DC, 1A|
|**Battery**|バッテリなし、USB ポートからのみ給電|
|**Processor**|<p>**ESP32-S3:** Xtensa® デュアルコア 32 ビット 最大 240 MHz</p><p>**RP2040:** デュアル ARM Cortex-M0+ 最大 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|最大 32GB の Micro SD カードに対応（別売）|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa および FSK モデム</p><p>+21dBm 最大送信電力</p> <p>-136dBm@SF12 BW=125KHz 受信感度</p><p>最大 5km の通信距離</p>|
|**Sensors**(Optional)|<p>**CO2(Sensirion SCD41)**</p><p>レンジ: 0-40000ppm</p><p>精度: 400ppm-5000ppm ±(50ppm+読値の 5%)</p><p>**TVOC (SGP40)**</p><p>レンジ: 1-500 VOC インデックスポイント</p>**Grove 温度・湿度センサ(AHT20)**<p>温度レンジ: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## リソース

- [**PDF**]: [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [ Exterior overall 3D model STP file](https://files.seeedstudio.com/wiki/SenseCAP_Indicator/Indicator_3D.stp )

## 技術サポート

**SenseCAP Indicator でお困りですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
