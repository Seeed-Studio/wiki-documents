---
sidebar_position: 3
title: AI アドバイザー
description: SenseCraft Data Platform とアプリ上で AI Advisor をデプロイして、高度なセンサーデータ解析を行う方法を学びます。モニタリングを自動化し、運用を最適化し、AI 搭載ソリューションで実用的なインサイトを引き出しましょう。
keywords:
  - SenseCraft
  - AI Advisor
  - スマートセンサー
  - センサーデータ解析
  - 環境モニタリング
  - 精密農業
  - スマートファーミング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/applications/ai-advisor
aliases:
  - /how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
tags:
  - SenseCraft
  - SenseCraft Data Platform
  - SenseCraft App
  - AI
  - Cloud
  - LLM
last_update:
  date: 06/06/2025
  author: Jancee
createdAt: '2023-06-19'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/sensecraft-data-platform/applications/ai-advisor/
---

# Web と SenseCraft アプリで AI Advisor を使用する方法

## 概要

**SenseCraft AI Advisor** は、センサーデータを最大限に活用し、実行可能なインサイトを引き出すのに役立つ AI 搭載機能です。SenseCraft センサーを SenseCraft プラットフォームに接続することで、温度、湿度、光、空気質などの環境要因に関するデータを簡単に収集・分析できます。AI Advisor はこれらのデータを活用して、運用の最適化、コスト削減、効率向上に役立つ提案や推奨事項を提供します。

大気質のモニタリング、作物の生育最適化、農場管理の改善など、どのような目的であっても、SenseCraft AI Advisor は意思決定を支援するよう設計されています。AI Advisor は [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) と [SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/) で利用でき、ユーザーはいつでもどこでもインサイトにアクセスできます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## 測定項目

SenseCraft AI Advisor は現在、以下の測定項目とデバイスタイプを解析します。ユーザーは、以下の測定項目を含むデバイスを選択できます。

| 測定項目                 | デバイスタイプ                                        |
|-------------------------|-----------------------------------------------------|
| 気温                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S2101 LoRaWAN® Air Temperature and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html) |
|                         | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
|                         | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
|                         | [SenseCAP S500 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html) |
|                         | SenseCAP S300 Compact Weather Station |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S800 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 空気湿度                 | デバイスタイプは気温と同じ                              |
| 光強度                   | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 土壌温度                 | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| 土壌水分                 | デバイスタイプは土壌温度と同じ                            |
| 電気伝導度               | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| 光合成有効放射 (PAR)     | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate アプリ

1. [SenseCAP Mate APP](https://app.sensecapmx.com/) をダウンロードしてログインします
2. デバイスページに移動し、**+** アイコンをクリックして、デバイスの QR コードをスキャンし、SenseCraft センサーをバインドします
3. センサーが SenseCraft プラットフォームにデータを送信していることを確認します。AI Advisor にはセンサーのデータが必要です
4. デバイスページで **AI Advisor** をクリックして、AI によるセンサーデータ解析を開始します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. 栽培している作物または飼育している動物と、所在地を入力します
6. センサーデータの期間を選択します：
   - Month: 直近 1 か月のセンサーデータ
   - 6 Months: 直近 6 か月のセンサーデータ
   - Year: 直近 1 年間のセンサーデータ

7. 測定項目を選択します（最大 5 つ）：**+** アイコンをクリック
   - デバイスを選択し、その後に測定項目を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. 情報を `AI Advisor` に送信すると、推奨事項が返されます

> **注意：** AI の提案は参考情報に過ぎません。AI Advisor の提案に基づいて行われた意思決定について、SenseCraft は一切の責任を負いませんので、慎重にご利用ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft Data Platform

1. [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) または [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login) にログインします
2. センサーの SN とコードを入力して、SenseCraft センサーをバインドします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. センサーが `SenseCraft Data Platform` にデータを送信していることを確認します。`AI Advisor` 機能にはセンサーのデータが必要です
4. `AI Advisor` にアクセスして、AI によるセンサーデータ解析を開始します
5. 栽培している作物または飼育している動物と、所在地を入力します
6. センサーデータの期間を選択します：
   - Month: 直近 1 か月のセンサーデータ
   - 6 Months: 直近 6 か月のセンサーデータ
   - Year: 直近 1 年間のセンサーデータ

7. 測定項目を選択します（最大 5 つ）：**+** アイコンをクリック
   - デバイスを選択し、その後に測定項目を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. 情報を `AI Advisor` に送信すると、推奨事項が返されます

> **注意：** AI の提案は参考情報に過ぎません。AI Advisor の提案に基づいて行われた意思決定について、SenseCraft は一切の責任を負いませんので、慎重にご利用ください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
