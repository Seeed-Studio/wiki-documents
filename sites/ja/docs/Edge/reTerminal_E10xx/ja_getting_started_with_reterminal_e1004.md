---
description: reTerminal E1004 は、ESP32-S3 を搭載し、E Ink® Spectra™ 6 テクノロジーと SenseCraft HMI をサポートする、13.3 インチのオープンソースフルカラー電子ペーパーディスプレイです。
title: reTerminal E1004 入門ガイド
sidebar_position: 4
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /ja/getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
---

# reTerminal E1004 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## はじめに

reTerminal E1004 は、最大 6 か月のバッテリー駆動が可能な 13.3 インチ オープンソース フルカラー電子ペーパーディスプレイです。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートするほか、さらなる開発のために Home Assistant、Arduino、ESP-IDF にも対応しています。E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイを採用しており、デジタルフォトフレームやカラフルなダッシュボードの可視化に最適です。

### 特長

- **高精細カラーディスプレイ:** 13.3 インチ E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイ、1200x1600 ピクセルの高解像度。
- **高性能プロセッサ:** ESP32-S3 搭載、8MB PSRAM と 32MB Flash により高いパフォーマンスを実現。
- **超低消費電力:** 内蔵 5000mAh バッテリーにより、1 回の充電で最大 6 か月使用可能（6 時間ごとにリフレッシュした場合）。
- **ノーコード UI 開発:** 既定のファームウェアで SenseCraft HMI をサポートし、ドラッグ＆ドロップでのダッシュボード作成と AI 支援デザインが可能。
- **高い互換性:** Home Assistant (ESPHome)、Arduino、PlatformIO、ESP-IDF をサポート。
- **豊富な接続性:** 2.4GHz Wi-Fi (802.11 b/g/n) と Bluetooth 5.0 を内蔵。
- **センサー & オーディオ内蔵:** 温度・湿度センサーおよびアラート用ブザーを内蔵。
- **すぐに使えるストレージ:** 16GB Micro SD カードを同梱（最大 32GB まで対応）。

## 仕様

| Item | Description |
| :--- | :--- |
| **Product Name** | reTerminal E1004 |
| **Processor** | ESP32-S3 with 8MB PSRAM |
| **Storage** | 32MB Flash, support Micro SD card (Up to 32GB, 16GB included) |
| **Display** | 13.3" Spectra™ 6 Full Color ePaper |
| **Resolution** | 1200 x 1600 Pixels |
| **Wireless Connectivity** | 2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0 |
| **Sensors** | Temperature, Humidity sensors |
| **Audio** | Buzzer (Sound alert) |
| **Battery** | 5000mAh |
| **Power Input** | USB-C 5V/1A |
| **Software Support** | SenseCraft HMI (Default), ESPHome, Arduino, PlatformIO, ESP-IDF |
| **Working Temperature** | 0-40°C |
| **Dimensions** | 376mm x 311mm x 40mm |

## アプリケーション

- **低消費電力電子フォトフレーム:** 高解像度の家族写真やアートを、紙のような表示品質で、毎日の充電を気にせず表示可能。
- **ファミリーインフォメーションボード:** カレンダー、通知、天気、ニュースを、スタイリッシュで常時表示の形式で確認。
- **ホームオートメーションダッシュボード:** Home Assistant を通じて、温度、湿度、空気質などのスマートホームデータをリアルタイムに可視化。
- **スマートオフィスディスプレイ:** 会議室のスケジュール、空き状況、案内表示などに利用可能。
- **小売・公共サイネージ:** 省エネなメニュー、時刻表、混雑状況インジケーターなどに最適。
- **教育・プロトタイピング:** IoT、組み込みシステム、UI デザイン学習に理想的なプラットフォーム。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **ページアップ・ダウンボタン:** ナビゲーションやページ送りに使用します。
2. **画面リフレッシュボタン:** E-ink ディスプレイを手動でリフレッシュするために使用します。
3. **赤色電源 LED:** デバイスの電源状態を示します。
4. **USB-C データ・充電ポート:** デバイスの充電およびデータ転送に使用します。
5. **電源スイッチ:** デバイスの電源をオン／オフします。
6. **緑色ステータス LED:** 現在の動作状態またはシステムステータスを示します。
7. **Boot:** システムのブートやブートモードへの移行に使用します。
8. **Reset:** ハードウェアコンポーネントをリセットするために使用します。
9. **拡張ポート:** 外部拡張モジュールや周辺機器を接続するために使用します。
10. **スタンド固定用ネジ:** デバイスをスタンドに固定するために使用します。
11. **金属スタンド:** デバイスに物理的な支持と安定性を提供します。

## SenseCraft HMI を使い始める

reTerminal E1004 には、ノーコードプラットフォーム **SenseCraft HMI** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・展開できます。

### ステップ 1. 電源オンとネットワーク設定

1. **Power Button** をオンにして reTerminal E1004 の電源を入れます。
2. スマートフォンを使用してデバイスのホットスポット（AP モード）に接続し、Wi-Fi の認証情報を設定します。
3. 画面に「Network Configuration」QR コードが表示されるか、ブラウザで 192.168.4.1 ページを開きます。
4. インターネットに接続されると、デバイスに **Device Code** または **Binding QR Code** が表示されます。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### ステップ 2. デバイスをバインドする

1. パソコンのブラウザで [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) にアクセスします。
2. アカウントにログインします（未作成の場合は新規作成します）。
3. **Device Management** セクションに移動し、**Add Device** をクリックします。
4. reTerminal E1004 の画面に表示されている **Device Code** を入力して、バインドを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. プラットフォーム上でコンテンツを作成する

1. **Home Page** に移動し、使用したいテンプレートを選択するか、**Wrokspace** で一から作成します。
2. [使い方に疑問がある場合は、このリンクをクリックして HMI Platform の使用方法を学んでください。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. コンテンツをデバイスにデプロイする

1. デザインが完成したら、**Preview** ボタンをクリックして表示を確認します。
2. **Save** または **deploy** ボタンをクリックします。
3. リストからバインド済みの reTerminal E1004 を選択します。
4. プラットフォームが Wi-Fi 経由でデータをデバイスに送信します。電子ペーパースクリーンがリフレッシュされ、新しいダッシュボードが表示されます。

:::note
E Ink テクノロジーの特性上、画像が完全に更新されゴーストが消えるまで、画面のリフレッシュに数秒かかる場合があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## リソース

- [reTerminal E1004 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
