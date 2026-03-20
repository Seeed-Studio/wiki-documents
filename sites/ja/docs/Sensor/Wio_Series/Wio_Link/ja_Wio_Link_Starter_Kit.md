---
title: Wio Link スターターキット
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_Link_Starter_Kit/
slug: /Wio_Link_Starter_Kit
sku: 110020051
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Wio_Link_Starter_Kit/
---

![](https://files.seeedstudio.com/wiki/Wio_Link_Starter_Kit/img/Wio_Link_Starter_Kit_product_view_1200_s.jpg)

このキットは、メイカーになりたい初心者を対象としています。このキットに含まれる機能モジュールは、すべて初心者向けに特別に選定された、よく使われるモジュールで、コストパフォーマンスにも優れています。このキットで最も素晴らしい部分は Wio Link 開発ボードで、さまざまなデバイスに利用でき、しかもプログラミングスキルは一切不要です。モジュールにさせたい動作の設定や、Wio Link へのコード書き込み操作は、モバイルアプリ上でタップするだけで完了します。また、インターネット経由でどこからでもデバイスに指示を送ることができます。そのため Wio Link は、身の回りのモノを誰でも簡単にスマート化できる、理想的なツールとなるでしょう。さあ、メイカーになることを楽しみましょう。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wio-Link-Starter-Kit-p-2614.html)

:::caution
     Wio の IFTTT 機能は EOL となりました。ただし Wio APP は利用可能です。Wio APP の API を使用して、センサーの状態を読み取ったり、アクチュエータを制御したりできます。 
:::
Features
--------

-   一般的で頻繁に使用される環境モニタリング用機能モジュールを同梱
-   Grove ポートインターフェースにより、より実用的な機能をより少ない作業で実現
-   身の回りのモノをスマート化し、日常生活に楽しさを加えることがとても簡単
-   コストパフォーマンスに優れる
-   重量：267 g

Parts list
----------

| 部品名                                                                                                           | 数量 |
|----------------------------------------------------------------------------------------------------------------------|----------|
| [Grove - Button](/ja/Grove-Button/)                                                                                      | 1PC     |
| [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html?queryID=f15824e61eef2f0aa449144b0da3587c&objectID=1804&indexName=bazaar_retailer_products)                                             | 1PC     |
| [Grove - Temp&Humi Sensor](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=ea8d1729f76e80d6b1b53c492c74fcdb&objectID=35&indexName=bazaar_retailer_products)           | 1PC     |
| [Grove - Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html?queryID=c7822737fbcac80a47232a5fb1ac1e1d&objectID=1594&indexName=bazaar_retailer_products) | 1PC     |
| Grove - WS2812 防水 LED ストリップ - 30 個の LED、1 メートル                                                                | 1PC     |
| [Grove - 3-Axis Digital Accelerometer(±1.5g)](/ja//Grove-3-Axis_Digital_Accelerometer-1.5g/)                              | 1PC     |
| [Wio Link](/ja/Wio_Link/)                                                                                                | 1PC     |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html?queryID=a8b80828fdcd52ad1ae49daa5ed97191&objectID=1405&indexName=bazaar_retailer_products)             | 1PC     |

A simple demo
-------------

このデモは、コンパイル結果のインジケータとして使用できます。

### 事前ガイド

-   [Travis CI](https://travis-ci.org/)
-   [Wio Link](/ja/Wio_Link/)
### 必要なもの

-   [Wio Link APP](https://www.seeedstudio.com/Wio-Link-Event-Kit-p-2611.html?queryID=3ab174447ce3813d2105c3db0e9e783a&objectID=537&indexName=bazaar_retailer_products)
-   [Wio Link](/ja/Wio_Link/)
-   [Grove Relay](https://www.seeedstudio.com/Grove-Relay.html?queryID=f15824e61eef2f0aa449144b0da3587c&objectID=1804&indexName=bazaar_retailer_products) × 3
-   Travis CI アカウント
-   GitHub アカウント
-   信号機

### 詳細な手順

詳しい手順については、[Recipe](https://www.seeedstudio.com/recipe/1068-traffic-light-indicates-travis-ci-compiled-results.html) をご覧ください。

## プロジェクト

**ReSpeaker スマートホーム** ReSpeaker Core v2.0 と Wio Link を使用して、IFTTT 経由でライトとファンを制御します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/respeaker-smart-home-cfba70/embed' width='350'></iframe>

**Wio-Link と Node-Red を使用した LED サウンドメーター** SeeedStudio Grove サウンドセンサーと LED ストリップを Wio-Link に接続し、Node-Red フローで駆動します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Wio_Link_Starter_Kit -->

## 技術サポートと製品ディスカッション
 技術的な問題がある場合は、[forum](http://forum.seeedstudio.com/) に問題を投稿してください。 
弊社製品をお選びいただきありがとうございます。お客様の製品体験ができるだけスムーズなものとなるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>