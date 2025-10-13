---
description: Wio-WM1110 Dev Kit 紹介
title: 紹介
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-WM1110_Dev_Kit/Introduction
sidebar_position: 1
last_update:
  date: 6/26/2023
  author: Jessie
---


# Wio-WM1110 開発キット

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

WM1110 Dev KitはWio-WM1110ワイヤレスモジュールをベースとし、Semtech社のLoRa®トランシーバーと位置情報取得用の多目的無線フロントエンドを統合しています。
LoRa®トランシーバーは低消費電力で高感度のネットワークカバレッジを提供し、GNSS（GPS/北斗）とWi-Fiスキャンは全方位の位置カバレッジを提供します。
また、様々な周辺機器への接続オプションも提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## 特徴

- **低消費電力高感度LoRa/(G)FSK半二重RFトランシーバー**: 863-928MHz範囲の周波数帯をサポート

- **位置情報取得用多目的無線フロントエンド**: GNSS（GPS/北斗）、Wi-Fi、Bluetooth
- **豊富なGPIO**: 400以上のGrove互換GPIOで柔軟な拡張オプション
- **オープンソースプラットフォーム**: 広範なLR1110とnRF52840オープンソースエコシステムを活用し、無限のアプリケーション可能性を提供

### 低消費電力LoRa®トランシーバー

Semtech社のLoRa Edge™ LR1110の恩恵により、Wio-WM1110 Dev Kitは長距離・低消費電力のLoRa®通信を提供します。Long Rangeとそのネットワークアーキテクチャやアプリケーションなどの機能について学ぶには、LoRa®およびLoRa®WAN®技術の紹介をご確認ください。Long Rangeとは何か、どのように動作するか、その長所と短所について説明しています。

### 位置情報サービス

Wio-WM1110 Dev Kitは位置情報取得を目的とした多目的無線フロントエンドを統合しています。屋外測位専用のGNSSと、屋内測位用のWi-FiおよびBluetooth低消費電力スキャンを搭載しています。
屋外と屋内の活動間で自動的に切り替えることができ、屋内または屋外用の異なるトラッカーを構築する必要性を置き換え、複雑さとコストを削減しながら全方位の位置カバレッジを提供します。

**屋外測位（GNSS）**

Wio-WM1110 Dev KitはGNSS（GPS/北斗）低消費電力スキャンを統合し、
衛星からデータを取得してLoRa®クラウドに暗号化して送信し、消費電力を削減してセキュリティを向上させます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS（Wi-Fi+Bluetooth）**
屋外GNSSを補完して、WM1110 Dev Kitは屋内測位に適したWi-Fi超低消費電力パッシブスキャンとBluetoothスキャンもサポートし、近くのBluetoothビーコン/Wi-FiのMACアドレスとRSSIをスキャンし、データをクラウドサービスにアップロードして正確な位置を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### 豊富な周辺機器

内蔵のTHセンサーと3軸加速度計に加えて、このキットには一連の周辺インターフェースも含まれ、ADC/UARTおよびIIC伝送プロトコルをサポートし、400以上のGroveモジュールに接続でき、よりスマートなソリューションへの簡単なアップグレードを可能にします。Arduinoとも互換性があり、開発者に無限の可能性を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### ユーザーアプリケーションの開発

Wio-WM1110 Dev Kitは開発者向けの完全オープンソースの強力なIoT開発プラットフォームであり、サンプルアプリケーションとコードサンプルのセット、および開始に役立つソフトウェア開発キット（SDK）も含まれています。

## 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## 仕様

**LoRa® および測位 (Semtech LR1110)**

|LoRa®WAN プロトコル|V1.0.4|
| :- | :- |
|周波数|863~928MHz|
|感度|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|出力電力|20dBm max @LoRa®|
|測位技術|GNSS(GPS,BeiDou),WiFi|
|通信距離|2~10km（アンテナと環境に依存）|

**Bluetooth(Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocol|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT and 2.4 GHz proprietary stacks|
|Output Power|6dBm max @Bluetooth|

**内蔵センサー**

**TH センサー (SHT41)**

|  | 範囲 | 精度 |
| -------- | -------- | -------- |
|温度  | -40~125°C |0.2°C|
| 湿度 | 0~100%RH |1.8%RH|

**3軸加速度センサー(LIS3DHTR)**

| 範囲 | 帯域幅 | 感度(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

**一般仕様**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## 技術サポート

**Wio-WM1110 Dev Kitでお困りですか？私たちがサポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
