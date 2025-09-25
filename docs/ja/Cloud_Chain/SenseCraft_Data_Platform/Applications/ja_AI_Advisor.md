---
sidebar_position: 3
title: AI Advisor
description: SenseCraft Data PlatformとAppでAI Advisorをデプロイし、高度なセンサーデータ分析を行う方法を学びます。監視を自動化し、運用を最適化し、AI駆動ソリューションで実用的な洞察を得ることができます。
keywords:
  - SenseCraft
  - AI Advisor
  - Smart Sensors
  - Sensor Data Analysis
  - Environmental Monitoring
  - Precision Agriculture
  - Smart Farming
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-data-platform/applications/ai-advisor
aliases:
  - /ja/how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
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
---

# WebとSenseCraft APPでAI Advisorを使用する方法

## 概要

**SenseCraft AI Advisor**は、センサーデータを最大限に活用し、実用的な洞察を得るのに役立つAI駆動機能です。SenseCraftセンサーをSenseCraftプラットフォームに接続することで、温度、湿度、光、空気品質などの環境要因に関するデータを簡単に収集・分析できます。私たちのAI Advisorは、このデータを活用して、運用の最適化、コスト削減、効率向上に役立つ提案と推奨事項を提供します。

空気品質の監視、作物成長の最適化、農場管理の改善など、どのような目的であっても、SenseCraft AI Advisorはあなたの意思決定をサポートするよう設計されています。AI Advisorは[SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login)と[SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/)で利用でき、ユーザーはいつでもどこでも洞察にアクセスできます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## 測定項目

SenseCraft AI Advisorは現在、以下の測定項目とデバイスタイプを分析しています。ユーザーは以下の測定項目を含むデバイスを選択できます。

| 測定項目             | デバイスタイプ                                        |
|-------------------------|-----------------------------------------------------|
| 気温         | [SenseCAP S2103 LoRaWAN® CO2、温度、湿度センサー](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S2101 LoRaWAN® 気温・湿度センサー](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html) |
|                         | [S-H2S-01 産業グレード MODBUS RS485 H2Sセンサー（H2S、温度・湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
|                         | [S-NH3-01 産業グレード MODBUS RS485 NH3センサー（NH3、温度・湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
|                         | [SenseCAP S500 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html) |
|                         | SenseCAP S300 コンパクト気象ステーション |
|                         | SenseCAP S400 コンパクト気象ステーション |
|                         | [SenseCAP S700 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 コンパクト気象ステーション](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S800 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html) |
|                         | [SenseCAP S1000 コンパクト気象ステーション 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 湿度            | デバイスタイプは気温と同じ          |
| 光強度         | [SenseCAP S2102 LoRaWAN 光強度センサー](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 コンパクト気象ステーション |
|                         | [SenseCAP S700 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 コンパクト気象ステーション](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 コンパクト気象ステーション](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 コンパクト気象ステーション 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2、温度、湿度センサー](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 コンパクト気象ステーション 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 土壌温度        | [SenseCAP ワイヤレス土壌温度、VWC・ECセンサー](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® 土壌水分、温度・ECセンサー](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| 土壌水分           | デバイスタイプは土壌温度と同じ          |
| 電気伝導度 | [SenseCAP ワイヤレス土壌温度、VWC・ECセンサー](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® 土壌水分、温度・ECセンサー](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 産業グレード MODBUS RS485 NH3センサー（NH3、温度・湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 産業グレード MODBUS RS485 H2Sセンサー（H2S、温度・湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| 光合成有効放射（PAR） | [産業用PARセンサー S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. [SenseCAP Mate APP](https://app.sensecapmx.com/)をダウンロードしてログインします
2. デバイスページにアクセスし、**+** アイコンをクリックして、デバイスのQRコードをスキャンしてSenseCraftセンサーをバインドします
3. センサーがSenseCraftプラットフォームにデータを送信していることを確認してください。AI Advisorはセンサーのデータを必要とします
4. デバイスページで**AI Advisor**をクリックして、AI駆動のセンサーデータ分析を開始します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. 栽培している作物や飼育している動物、および所在地を入力します
6. センサーデータの期間を選択します：
   - 月：過去1ヶ月のセンサーデータ
   - 6ヶ月：過去6ヶ月のセンサーデータ
   - 年：過去1年のセンサーデータ

7. 測定項目を選択します（最大5つ）：**+** アイコンをクリックします
   - デバイスを選択してから測定項目を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. 情報を`AI Advisor`に送信すると、提案が返されます

> **注意：** AIの提案は参考用のみです。SenseCraftはAI Advisorの提案に基づいて行われた決定について責任を負わないため、慎重にご利用ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft データプラットフォーム

1. [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/#/login)または[SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)にログインします
2. センサーのSNとコードを入力してSenseCraftセンサーをバインドします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. センサーが`SenseCraft Data Platform`にデータを送信していることを確認してください。`AI Advisor`機能はセンサーのデータを必要とします
4. `AI Advisor`にアクセスして、AI駆動のセンサーデータ分析を開始します
5. 栽培している作物や飼育している動物、および所在地を入力します
6. センサーデータの期間を選択します：
   - 月：過去1ヶ月のセンサーデータ
   - 6ヶ月：過去6ヶ月のセンサーデータ
   - 年：過去1年のセンサーデータ

7. 測定項目を選択します（最大5つ）：**+** アイコンをクリックします
   - デバイスを選択してから測定項目を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. 情報を`AI Advisor`に送信すると、提案が返されます

> **注意：** AIの提案は参考用のみです。SenseCraftはAI Advisorの提案に基づいて行われた決定について責任を負わないため、慎重にご利用ください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
