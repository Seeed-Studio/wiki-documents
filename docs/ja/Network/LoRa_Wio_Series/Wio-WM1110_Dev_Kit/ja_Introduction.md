---
description: Wio-WM1110 Dev Kit の紹介
title: 紹介
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-WM1110_Dev_Kit/Introduction
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Wio-WM1110 Dev Kit

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


WM1110 Dev Kit は Wio-WM1110 ワイヤレスモジュールをベースにしており、Semtech の LoRa® トランシーバーと測位用の多目的無線フロントエンドを統合しています。  
LoRa® トランシーバーは低消費電力で高感度のネットワークカバレッジを提供し、GNSS（GPS/北斗）および Wi-Fi スキャンは全方位の位置情報カバレッジを提供します。  
また、さまざまな周辺機器との接続オプションも提供します。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>


## 特徴
* **低消費電力・高感度 LoRa/(G)FSK 半二重 RF トランシーバー**: 863-928MHz の周波数帯域をサポート
* **測位用多目的無線フロントエンド**: GNSS（GPS/北斗）、Wi-Fi、Bluetooth
* **豊富な GPIO**: 柔軟な拡張オプションを可能にする 400 以上の Grove 互換 GPIO
* **オープンソースプラットフォーム**: 無限のアプリケーション可能性を持つ LR1110 および nRF52840 オープンソースエコシステムを活用

### 低消費電力 LoRa® トランシーバー
Semtech の LoRa Edge™ LR1110 を活用することで、Wio-WM1110 Dev Kit は長距離・低消費電力の LoRa® 通信を提供します。  
Long Range のネットワークアーキテクチャやアプリケーションなどの特徴について学ぶには、LoRa® および LoRa®WAN® 技術の紹介をご覧ください。これにより、Long Range が何であるか、どのように機能するか、その利点と欠点について理解できます。

### 位置情報サービス
Wio-WM1110 Dev Kit は測位を目的とした多目的無線フロントエンドを統合しています。  
屋外測位専用の GNSS に加え、屋内測位用の低消費電力 Wi-Fi および Bluetooth スキャンを備えています。  
屋外と屋内の活動間を自動的に切り替えることができ、屋内用と屋外用の異なるトラッカーを構築する必要がなくなります。これにより、複雑さとコストを削減しながら、全方位の位置情報カバレッジを提供します。


**屋外測位（GNSS）**

Wio-WM1110 Dev Kit は GNSS（GPS/北斗）低消費電力スキャンを統合しており、  
衛星からデータを取得し、それを暗号化して LoRa® クラウドに送信することで、消費電力を削減しセキュリティを向上させます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS（Wi-Fi + Bluetooth）**
屋外 GNSS を補完する形で、WM1110 Dev Kit は Wi-Fi 超低消費電力パッシブスキャンおよび Bluetooth スキャンもサポートしており、屋内測位に適しています。  
近隣の Bluetooth ビーコン/Wi-Fi の MAC アドレスと RSSI をスキャンし、クラウドサービスにデータをアップロードして正確な位置情報を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### 豊富な周辺機器
内蔵の温湿度センサーと 3 軸加速度計に加え、このキットには一連の周辺機器インターフェースが含まれており、ADC/UART および IIC 伝送プロトコルをサポートしています。  
これにより、400 以上の Grove モジュールに接続でき、よりスマートなソリューションへの簡単なアップグレードが可能です。また、Arduino と互換性があり、開発者に無限の可能性を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>


### ユーザーアプリケーションの開発
Wio-WM1110 Dev Kit は、開発者向けの完全オープンソースで強力な IoT 開発プラットフォームです。  
また、一連のサンプルアプリケーションとコードサンプル、さらに開始を支援するためのソフトウェア開発キット（SDK）も含まれています。

## 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>



## 仕様


**LoRa®と位置情報（Semtech LR1110）**

|LoRa®WANプロトコル|V1.0.4|
| :- | :- |
|周波数|863~928MHz|
|感度|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|出力パワー|最大20dBm @LoRa®|
|位置情報技術|GNSS(GPS,BeiDou),WiFi|
|通信距離|2~10km (アンテナと環境による)|



**Bluetooth（Nordic nRF52840）**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|フラッシュ|1MB|
|RAM|256KB|
|プロトコル|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANTおよび2.4 GHz独自スタック|
|出力パワー|最大6dBm @Bluetooth|

**内蔵センサー**

**THセンサー（SHT41）**

|  | 範囲 | 精度 |
| -------- | -------- | -------- |
|温度  | -40~125°C |0.2°C|
|湿度 | 0~100%RH |1.8%RH|



**3軸加速度センサー（LIS3DHTR）**

| 範囲 | 帯域幅 | 感度(LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

    
**一般仕様**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>




## 技術サポート

**Wio-WM1110 Dev Kitに関するサポートが必要ですか？私たちがサポートします！**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>