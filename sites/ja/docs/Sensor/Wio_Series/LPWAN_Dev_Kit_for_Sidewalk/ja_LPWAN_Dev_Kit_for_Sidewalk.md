---
description: LPWAN Asset Tracker Dev Kit for Amazon Sidewalk – Wio Tracker 1110
title: Sidewalk向けLPWAN開発キット
keywords:
- トラッカー
- サイドウォーク
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/wio_tracker_for_sidewalk
last_update:
  date: 05/15/2025
  author: Jessie
---


LPWAN Asset Tracker開発キットは、[Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)を基盤としており、パッシブWiFiスキャンまたはGNSSを通じて位置データを収集し、BLEおよびLoRa無線を使用してAmazon Sidewalkネットワークブリッジと通信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::tip
Amazon Sidewalkは現在米国のみで利用可能です。[Sidewalk Network Coverage](https://coverage.sidewalk.amazon/)を確認してください。

他の地域では、世界中のLoRaWAN®ネットワークと互換性のある[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)を選択することもできます。
:::

## 特徴

* **Amazon Sidewalkネットワーク対応**

* **複数の接続オプションを提供**: LoRa®、GNSS(GPS/BeiDou)、Bluetooth、Wi-Fiスニファー

* **300以上のSeeed Groveセンサーをサポート**: 様々なトラッキングおよびセンシング要件に対応可能

* **オンボード温度センサー、湿度センサー、3軸加速度計**: 環境および動作データを幅広く収集

* **完全オープンソースプラットフォーム**: LR1110およびnRF52840の広範なオープンソースエコシステムを活用し、無限のアプリケーション可能性を提供

## 説明

### Amazon Sidewalk対応

Amazon Sidewalkは、暗号化された無料接続の長距離ネットワークであり、数十億のデバイスに持続的な接続性を提供します。スマートデバイスを匿名で接続し、信頼性の高い共有コミュニティネットワークを構築します。このネットワークを利用して、よりコスト効率の高い接続ソリューションを作成できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

### 複数の位置決定技術

LPWAN Asset Tracker開発キット – WM1110は、位置情報目的に特化したマルチパーパス無線フロントエンドを統合しています。屋外位置決定専用のGNSSに加え、屋内位置決定用のWi-FiスニファーおよびBluetoothスキャンを備えています。屋外と屋内の活動間で自動的に切り替えることができ、屋内または屋外用の異なるトラッカーを構築する必要がなくなります。これにより、全方位の位置情報カバレッジを提供し、複雑さとコストを削減します。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>

### 豊富な周辺機器

オンボードの温度および湿度センサー(SHT41)、3軸加速度計(LIS3DHTR)に加え、一連の周辺インターフェースを備え、ADC/UARTおよびIIC伝送プロトコルをサポートしています。これにより、300以上のGroveモジュールに接続可能で、よりスマートなソリューションへの簡単なアップグレードを可能にします。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### Amazon Sidewalkを使用した資産トラッカーアプリケーションの構築

[Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011)および[AWS IoT Core for Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html)について学び、LPWAN Asset Tracker開発キットを広範なAmazon Sidewalkネットワークに接続し、AWS IoT Coreと統合する方法を理解してください。

このデモアプリケーションは、re: Invent 2023で開催されたIOT202ワークショップ「AWS IoTを使用した準拠、安全な接続製品の構築」のために特別に作成されており、今後のAWSワークショップイベントで使用されることを目的としています。開発者や愛好家は、AWS IoTサービス（AWS IoT CoreやAmazon Sidewalkを含む）について良好な理解を得て、それらをワークショップを通じて接続製品に統合する方法を学ぶことができます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>


## アプリケーション

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>


## 仕様

**LoRa®および位置情報（Semtech LR1110）**

|周波数|863~928MHz|
| :- | :- |
|感度|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|出力電力|最大20dBm @LoRa®|
|位置情報技術|GNSS(GPS,BeiDou),WiFi|
|通信範囲|2~10km (アンテナと環境による)|

**Bluetooth（Nordic nRF52840）**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|フラッシュメモリ|1MB|
|RAM|256KB|
|プロトコル|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANTおよび2.4 GHz独自スタック|
|出力電力|最大6dBm @Bluetooth|

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