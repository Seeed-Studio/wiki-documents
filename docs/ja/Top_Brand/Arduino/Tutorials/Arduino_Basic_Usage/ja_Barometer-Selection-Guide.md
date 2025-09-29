---
description: Seeed 気圧センサー選定ガイド
title: Seeed 気圧センサー選定ガイド

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Barometer-Selection-Guide
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---


# Seeed 気圧センサー選定ガイド

近年、私たちはさまざまな種類の気圧センサーをリリースしてきました。それらの中から選ぶのが難しいと感じるかもしれません。その悩みを解消するために、各センサーを詳しく見て、どれがあなたに最適かを見極めましょう！

Seeed のバザールにあるすべての気圧センサーについては、[Bazaar Barometer タグ](https://www.seeedstudio.com/tag/Barometer.html)をクリックして確認してください。

## 気圧計とは

気圧計は、大気圧（空気圧または気圧とも呼ばれる）を測定するために広く使用される気象計器です。これは、大気中の空気の重さを測定します。気圧計は、気象ステーションに含まれる基本的なセンサーの1つです。気圧計は何世紀にもわたって進化し、さまざまな形状やサイズで提供されています。また、気象や気候分野以外の多くの産業でも使用されています。

たとえば、現在ではほとんどの携帯電話にデジタル気圧計が内蔵されており、これは電子分野での主要な気圧計のタイプです。

<div align="center"><img src="https://files.seeedstudio.com/products/101020812/img/baro%20produced.2019-12-11%2011_05_01.gif" /></div>

### デジタル気圧計の仕組み

デジタル気圧計は、検出セル（つまりチップ）を使用して空気温度を測定します。このチップは大気圧に敏感であり、その電気伝導性に影響を与えます。

体積の変化は流れる電流の強さに影響を与え、その電流の強さを測定することで気圧が計算されます。このテストバッテリーの小型化と多用途性により、さまざまなデバイスに統合され、さまざまな目的で使用できます。

以下の写真は、内蔵チップ（DPS310）を備えた典型的な気圧センサーを示しています：

<div align="center"><img width="400" src="https://github.com/SeeedDocument/Grove-High-Precision-Barometer-Sensor-DPS310/raw/master/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" /><figcaption><b>図1</b>. <i>典型的な気圧センサー</i></figcaption></div>

## Seeed の気圧センサー

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" alt="Seeed 気圧センサー選定ガイド" title="Seeed 気圧センサー選定ガイド" /></a>
  <figcaption><b>図2</b>. <i>Seeed の気圧センサー</i></figcaption>
</figure>
</div>

### どれが最適か

| 仕様                           | [Grove - BMP280](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)   | [Grove - BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)  | [Grove - DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)      | [Grove - HP206F](https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html)    |
|------------------------------|-----------------|-----------------|---------------------|-------------------|
| **サムネイル画像**              |     ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg)            |      ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg)           |                ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg)     |       ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg)            |
| **圧力範囲**                   | 300 ~ 1100hPa   | 300 ~ 1100hPa   | 300 ~ 1200hPa       | 700 ~ 1100hPa     |
| **温度範囲**                   | -40 ～ 85°C     | -40 ～ 85°C     | -40 ～ 85°C         | -40 ～ 85°C       |
| **圧力精度**                   | /               | /               | ± 0.002hPa (±0.02m) | /                 |
| **圧力精度（絶対値）**          | ± 1hPa (または ±8m) | ± 1hPa (または ±8m) | ± 1hPa (または ±8m)     | ± 1.5hPa (または ±8m) |
| **圧力精度（相対値）**          | ± 0.12 hPa      | ± 0.12 hPa      | ± 0.06 hPa          | ± 0.06 hPa        |
| **圧力分解能**                 | 0.18Pa          | 0.18Pa          | 0.06Pa              | 0.01hPa           |
| **湿度**                       | /               | 0 ~ 100%        | /                   | /                 |
| **通信インターフェース**         | I2C / SPI       | I2C / SPI       | I2C / SPI           | I2C               |

### 簡単なインサイト

上記の表から、**圧力範囲**、**圧力精度（相対値）**、および**圧力分解能**が気圧センサーの重要な側面であることがわかります。このため、ニーズに最も適したものを選ぶことができます。さらに、通信インターフェースについても考慮する必要があります。今回の場合、すべての気圧計で I2C 通信が利用可能であり、ほとんどのセンサーで SPI も利用可能です。

:::note
SPI 通信は I2C よりも高速で動作することができ、特定の状況で利点となる場合があります。
:::

さらに、[Grove - Temp&Humi&Barometer Sensor (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) は、特定のニーズに対応するために、温度 ±1% の精度と湿度 ±3% の測定機能を追加しています。

## アプリケーションのアイデア

- 室内ナビゲーション（フロア検出、例：ショッピングモールや駐車場）
- 健康とスポーツ（正確な高度上昇と垂直速度）
- 屋外ナビゲーション（GPSの起動時間と精度の向上、例：トンネル内でのデッドレコニング）
- 気象観測所（「マイクロ気象」および地域予報）
- ドローン（飛行の安定性と高度制御）

## 有用なプロジェクト

**Seeed LoRa IoTea ソリューション**: 茶畑に適用される自動情報収集システム。これは、インテリジェント農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**BBG（IoT）を使用したインテリジェントアラームシステム**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**スマート作物の監視システム** Netduino 3 WiFi を使用して作物の状態を監視するシステムを設計および構築します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>

## リソース

- 参考資料

  - [気圧計の仕組みと天気予報への活用](https://www.thoughtco.com/how-barometers-measure-air-pressure-3444416)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>