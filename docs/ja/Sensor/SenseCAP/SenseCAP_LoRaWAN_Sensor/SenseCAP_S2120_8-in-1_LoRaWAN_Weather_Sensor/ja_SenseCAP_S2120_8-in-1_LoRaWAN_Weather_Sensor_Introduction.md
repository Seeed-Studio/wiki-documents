---
description: SenseCAP S2120 8-in-1 LoRaWAN 気象センサーの紹介
title: SenseCAP S2120 8-in-1 LoRaWAN 気象センサーの紹介
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP S2120 8-in-1 LoRaWAN 気象センサー

[![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction146.png)](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)

SenseCAP S2120はバッテリー駆動の8-in-1 LoRaWAN 気象センサーで、気温、湿度、風速、風向、降雨量、光強度、UV指数、気圧を測定します。このセンサーは超低消費電力、信頼性の高い性能、内蔵Bluetooth、OTA設定およびリモートデバイス管理のためのアプリサービスにより、低メンテナンスコストを実現します。庭、スマート農業、気象学、スマートシティなどの多様なシナリオでの利用をサポートします。SenseCAP S21XXはLoRaWAN® V1.0.3プロトコルに対応しており、[LoRaWAN®ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-c-1936.html)と連携して動作します。

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction914.png)

LoRaWAN®ゲートウェイは、このようなセンサーを使用する際に必要なLoRaWAN®ネットワークカバレッジを提供します。S210Xは異なるLoRaWAN®ゲートウェイに接続可能で、Seeedが提供する製品はシームレスなユーザー体験を提供します。

Heliumネットワーク：センサーはHeliumネットワークでカバーされている地域で動作します（[Helium Explorer](https://explorer.helium.com/)で確認可能）。[SenseCAP M1](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html)および[SenseCAP M2](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)をご覧ください。

LoRaWANネットワーク：センサーはThe Things Network、Loriot、ChirpstackなどのLoRaWAN®ネットワークで動作します。[SenseCAP Outdoor Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html)および[SenseCAP M2 Multiplatform Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)をご覧ください。

# アプリケーション

-   庭とガーデン：庭やガーデンで気温、湿度、降雨量、UV指数などを測定し、家族を守ります。

-   スマート農業：農家が気候データや情報をタイムリーに取得し、科学的な管理手法を生産に取り入れることで、農業生産能力とレベルを向上させます。

-   気象学：交通や輸送分野での異常気象条件の変化をタイムリーに反映し、交通管理部門にリアルタイムの科学的データを提供します。

-   都市の気象：都市広場、公園、観光地、ゴルフコースなどの都市エリアにリアルタイムデータを提供します。

# ![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3232.png)



# **フィールド展開**

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3252.png)

写真提供：Ted Urbaniak、Mapping Network、Nibiaa

# 

# 仕様

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3325.png)

# LoRaWAN 周波数

*注：周波数制限なし。気象ステーションはいつでも他の周波数プランに切り替えることができます。*

*S2120は863MHz \~928MHzのユニバーサル周波数プランを1つのSKUでサポートするよう製造されています。つまり、以下の周波数プランをサポートします：*

|周波数プラン|一般名称|サブバンド|
| :- | :- | :- |
|EU863-870|EU868|\_\_\_|
|US902-928|US915|サブバンド1から8|
|AU915-928|AU915|サブバンド1から8|
|AS923|AS923|AS923\_1、AS923\_2、AS923\_3、AS923\_4|
|IN865-867|IN865|\_\_\_|
|KR920-923|KR920|\_\_\_|
|RU864-867|RU864|\_\_\_|

周波数プラン設定はデフォルトでは未設定であり、初回の電源投入時にBluetooth経由でアプリによって設定されるまでRF信号を送信しません。また、いつでも他の周波数プランに変更可能です。

# 部品リスト

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3841.png)

ECCN/HTS

|HSCODE|9031809090|
| :- | :- |
|USHSCODE|9026104000|
|UPC||
|EUHSCODE|8517180000|
|COO|中国|

|CE|1|
| :- | :- |
|EU DoC|1|
|FCC|1|
|ROHS|1|
|UK DoC|1|