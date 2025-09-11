---
description: SenseCAP Indicator ネイティブファームウェアの使い方
title: ネイティブファームウェア
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **ネイティブファームウェア**

SenseCAP Indicator の D1S および D1Pro バージョンには、内蔵の tVOC および CO2 センサーと、正確なデータ読み取りのための外部 Grove TH センサーが搭載されています。SenseCAP ネイティブファームウェアは、センサーのデータを表示する空気品質検出器のUIを提供します。センサーが含まれていない D1 および D1L バージョンでは、データページに「N/A」と表示されます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

設定ページで SenseCAP Indicator を簡単に設定する手順。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Wi-Fi設定**

Wi-Fi名を選択し、パスワードを入力して接続します。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
緑色のWi-Fiアイコンが表示されたら、設定完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **ディスプレイ設定**

- **明るさ**: 画面の明るさを調整します。
- **スリープモード**: 設定した間隔に従って画面をオフにします。スリープモード中は画面がオフになり、コンテンツは表示されません。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **日付と時刻の設定**

- **時刻形式**: 24時間形式または12時間形式を設定できます。
- **時刻自動更新/タイムゾーン自動更新**: デバイスがWi-Fiに接続されている場合、対応するタイムゾーンと日付を自動的に取得します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**手動設定**: タイムゾーンを通じて取得した時刻が冬時間を自動的に識別できない場合やデバイスがオフラインの場合、手動でタイムゾーンを設定できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **センサーデータ**

私たちは、D1、D1S、D1L、およびD1Proの4つの異なるバージョンを提供しています。各バージョンは、不要なハードウェアによる追加コストなしで、異なるアプリケーションニーズに対応するよう設計されています。以下は各バージョンの違いです。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

デバイスのファームウェアには、tVOC、CO2、温度、湿度のデータを表示する2つのページがあります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **注意:**
SenseCAP Indicator のネイティブファームウェアのUIは、すべてのバージョンで同じです。センサーが内蔵されていない D1 および D1L バージョンでは、センサーデータが「N/A」と表示されます。他の Grove センサーを接続して、独自のカスタマイズされたUIを作成することができます。
:::

指定されたセンサーをクリックして詳細情報ページに移動すると、過去24時間または1週間の値を表示するオプションを選択できます。データは1週間以内に保持されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip ChatGPT x DALL·E をお探しですか？
[SenseCAP Indicator X OpenAI](/ja/SenseCAP_Indicator_OpenAI_X_Overview) にアクセスしてください。
:::