---
description: SenseCAP Indicatorを始める
title: SenseCAP Indicatorを始める
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 7/11/2024
  author: Spencer
---

## 概要

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">今すぐ購入 🖱️</a>
</div>

SenseCAP Indicatorは、ESP32-S3とRP2040デュアルMCUによって駆動される4インチタッチスクリーンで、Wi-Fi/Bluetooth/LoRa通信をサポートしています。

このデバイスには2つのGroveインターフェースが搭載されており、ADCとI2C伝送プロトコルをサポートし、内部にGPIO拡張ピンを備えた2つのUSB Type-Cポートがあるため、ユーザーはUSBポート経由で外部アクセサリを簡単に拡張できます。

SenseCAP Indicatorは、開発者向けの完全オープンソースの強力なIoT開発プラットフォームです。カスタマイゼーションと迅速なスケールアップのためのワンストップODM Fusionサービスも利用可能です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

## 特徴

- **デュアルMCUと豊富なGPIO**
強力なESP32S3とRP2040デュアルMCU、および400以上のGrove互換GPIOを搭載し、柔軟な拡張オプションを提供します。
- **リアルタイム空気質監視**
内蔵のtVOCとCO2センサー、および外部Grove AHT20 THセンサーにより、より正確な温度と湿度の測定が可能です。
- **IoT接続のためのローカルLoRaハブ**
統合されたSemtech SX1262 LoRaチップ（オプション）により、追加の互換デバイスを必要とせずに、Wi-Fi経由でMatterなどの人気IoTプラットフォームにLoRaデバイスを接続できます。
- **完全オープンソースプラットフォーム**
ESP32とRaspberry Piの広範なオープンソースエコシステムを活用し、無限のアプリケーション可能性を提供します。
- **Fusion ODMサービス利用可能**
Seeed Studioは、様々なニーズに対応するための迅速なカスタマイゼーションとスケールアップのためのワンストップODMサービスも提供しています。（iot@seeed.ccまでお問い合わせください）

## ハードウェア概要

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### システム図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### ボタン機能

- **短押し：** 画面をオフ/ウェイクアップします。
- **3秒長押し：** デバイスをオン/オフします。
- **10秒長押し：** ファクトリーファームウェアリセット。

### Grove

Groveモジュールを接続するための2つのGroveインターフェースがあり、開発者により多くの可能性を提供します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Groveは、モジュラーで標準化されたコネクタプロトタイピングシステムであり、強力なオープンソースハードウェアエコシステムです。詳細については[**こちら**](https://www.seeedstudio.com/category/Grove-c-1003.html)をクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

内蔵のSemtech SX1262 LoRa®モジュールにより、LoRa®アプリケーションを構築し、ローカルLoRaセンサーをWi-Fi経由でクラウドに接続できます。例えば、LoRaハブデバイスを構築してLoRaセンサーをスマートホームエコシステムに接続し、Wi-Fi経由でMatterを実装できます。この方法により、新しいMatter互換デバイスを購入する必要なく、LoRaデバイスをWi-Fi経由でMatterエコシステムに接続できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 仕様

|画面|3.95インチ、静電容量式RGBタッチスクリーン|
| :- | :- |
|**画面解像度**|480 x 480ピクセル|
|**電源**|5V-DC、1A|
|**バッテリー**|バッテリーなし、USBポートからの電源供給のみ|
|**プロセッサ**|<p>**ESP32-S3:** Xtensa® デュアルコア32ビット最大240MHz</p><p>**RP2040:** デュアルARM Cortex-M0+ 最大133MHz</p>|
|**フラッシュ**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部ストレージ**|最大32GB Micro SDカード対応（別売り）|
|**Wi-Fi**|802.11b/g/n、2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRaおよびFSKモデム</p><p>+21dBm 最大送信電力</p> <p>-136dBm@SF12 BW=125KHz RX感度</p><p>最大5km通信距離</p>|
|**センサー**(オプション)|<p>**CO2(Sensirion SCD41)**</p><p>範囲: 0-40000ppm</p><p>精度: 400ppm-5000ppm ±(50ppm+読み取り値の5%)</p><p>**TVOC (SGP40)**</p><p>範囲: 1-500 VOC Index Points</p>**Grove 温湿度センサー(AHT20)**<p>温度範囲: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## リソース

- [**PDF**]: [RP2040 データシート](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## 技術サポート

**SenseCAP Indicatorでお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
