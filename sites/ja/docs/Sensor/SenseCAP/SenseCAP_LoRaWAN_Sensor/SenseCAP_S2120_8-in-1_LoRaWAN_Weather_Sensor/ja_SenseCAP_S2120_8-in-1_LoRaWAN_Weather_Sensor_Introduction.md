---
description: SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor 紹介
title: SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor 紹介
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction
last_update:
  date: 12/25/2025
  author: Janet
---

# SenseCAP S2120 8-in-1 LoRaWAN 気象センサー

[![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction146.png)](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)

SenseCAP S2120バッテリー駆動8-in-1 LoRaWAN気象センサーは、気温、湿度、風速、風向、降雨量、光強度、UV指数、気圧を測定します。超低消費電力、信頼性の高い性能、内蔵Bluetooth、OTA設定とリモートデバイス管理のためのアプリサービスにより、低メンテナンスコストを実現します。裏庭、庭園、スマート農業、気象学、スマートシティなどのマルチシナリオアプリケーションをサポートします。
SenseCAP S21XXはLoRaWAN® V1.0.3プロトコルと互換性があり、[LoRaWAN® gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-c-1936.html)と連携できます。

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction914.png)

LoRaWAN®ゲートウェイは、このようなセンサーを使用する際に必要なLoRaWAN®ネットワークカバレッジを提供できます。S210Xは異なるLoRaWAN®ゲートウェイに接続できますが、Seeedが提供するものはシームレスなユーザーエクスペリエンスを提供します。

Helium Network: センサーはHelium Networkでカバーされているエリアで動作します（[Helium Explorer](https://explorer.helium.com/)で確認）。[SenseCAP M1](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html)と[SenseCAP M2](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)をご確認ください。

LoRaWAN Network: センサーはThe Things Network、Loriot、ChirpstackなどのLoRaWAN®ネットワークで動作します。[SenseCAP Outdoor Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html)と[SenseCAP M2 Multiplatform Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)をご確認ください。

:::tip **注意**
最新のファームウェアバージョンは `v2.1` です。データ報告の安定性が大幅に向上するため、SenseCraft アプリでデバイスを最新のファームウェアにアップデートすることを強くおすすめします。
:::

# アプリケーション

- 裏庭と庭園: 裏庭と庭園で気温と湿度、降雨量、UV指数などを測定し、ご家族を守ります。

- スマート農業: 農家が気候データと情報をタイムリーに取得し、科学的な管理措置を生産に取り入れ、農業生産能力とレベルを向上させることを可能にします。

- 気象学: 専門的な気象分野でのアプリケーションをサポートし、例えば、交通・運輸分野における様々な異常気象条件の変化をタイムリーに反映し、交通管理部門にリアルタイムの科学的根拠データを提供します。

- 都市気象: 都市広場、公園、景勝地、ゴルフコース、その他の都市エリアにリアルタイムデータを提供します。

# ![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3232.png)

# **フィールド展開**

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3252.png)

写真提供: Ted Urbaniak, Mapping Network, Nibiaa

# 仕様

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3325.png)

# LoRaWAN周波数

*注意: 周波数制限なし。気象ステーションはいつでも他の周波数プランに切り替えることができます。*

*S2120は、1つのSKUで863MHz〜928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、以下の周波数プランをサポートできます:*

|周波数プラン|一般名|サブバンド|
| :- | :- | :- |
|EU863-870|EU868|___|
|US902-928|US915|サブバンド1から8|
|AU915-928|AU915|サブバンド1から8|
|AS923|AS923|AS923_1, AS923_2, AS923_3, AS923_4|
|IN865-867|IN865|___|
|KR920-923|KR920|___|
|RU864-867|RU864|___|

周波数プラン設定はデフォルトでnoneに設定されており、初回電源投入時にBluetooth経由でアプリによって設定されるまでRF信号を送信しません。また、いつでも他の周波数プランに変更できます。

# パーツリスト

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3841.png)

ECCN/HTS

|HSCODE|9031809090|
| :- | :- |
|USHSCODE|9026104000|
|UPC||
|EUHSCODE|8517180000|
|COO|CHINA|

|CE|1|
| :- | :- |
|EU DoC|1|
|FCC|1|
|ROHS|1|
|UK DoC|1|
