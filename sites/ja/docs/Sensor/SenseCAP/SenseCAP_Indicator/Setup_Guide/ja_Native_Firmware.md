---
description: SenseCAP Indicator ネイティブファームウェアの使用開始
title: ネイティブファームウェア
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 11/16/2023
  author: Spencer
---

# **ネイティブファームウェア**

SenseCAP Indicator D1SおよびD1Proバージョンには、内蔵のtVOCおよびCO2センサーと、正確なデータ読み取りのための外部Grove THセンサーが搭載されています。SenseCAPネイティブファームウェアは、センサーデータを表示する空気品質検出器UIを提供します。センサーが含まれていないD1およびD1Lバージョンでは、データページにN/Aが表示されます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

設定ページでSenseCAP Indicatorを設定する簡単な手順。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Wi-Fi設定**

Wi-Fi名を選択し、パスワードを入力して接続します。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
緑色のWi-Fiアイコンが表示されたら、設定完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **ディスプレイ設定**

- **明度**: 画面の明度を調整します。
- **スリープモード**: 設定した間隔に従って画面をオフにします。スリープモード中は、画面がオフになり、コンテンツは表示されません。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **日付と時刻設定**

- **時刻フォーマット:** 24時間または12時間フォーマットを設定できます。
- **時刻自動更新/タイムゾーン自動更新**: デバイスがWiFiに接続されている場合、対応するタイムゾーンと日付を自動的に取得します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**手動設定**: タイムゾーンを通じて取得した時刻が冬時間を自動識別できない場合、またはデバイスがオフラインの場合は、手動でタイムゾーンを設定できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **センサーデータ**

D1、D1S、D1L、D1Proの4つの異なるバージョンを提供しています。各バージョンは、不要なハードウェアによる追加コストなしに、異なるアプリケーションニーズを満たすように設計されています。バージョン間の違いは以下の通りです：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

デバイスのファームウェアには、tVOC、CO2、温度、湿度のデータを表示する2つのページがあります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **注意:**
ネイティブファームウェアのUIは、SenseCAP Indicatorのすべてのバージョンで同じです。内蔵センサーがないD1およびD1Lバージョンでは、センサーデータに「N/A」が表示されます。他のGroveセンサーと接続して、独自のカスタマイズされたUIを作成することができます。
:::

指定されたセンサーをクリックして詳細情報ページに入り、過去24時間または1週間の値を表示することを選択できます。データは1週間以内に保持されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip ChatGPT x DALL·Eをお探しですか？
[SenseCAP Indicator X OpenAI](/ja/SenseCAP_Indicator_OpenAI_X_Overview)をご覧ください
:::