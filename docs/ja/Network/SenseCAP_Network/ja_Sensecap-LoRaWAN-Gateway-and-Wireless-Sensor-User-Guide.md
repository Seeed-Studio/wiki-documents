---
description: Sensecap LoRaWAN ユーザーガイド
title: Sensecap LoRaWAN ユーザーガイド
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 1.製品紹介

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg)

SenseCAP は、簡単に展開可能なハードウェアとデータ API サービスを統合した産業用ワイヤレスセンサーネットワークであり、低消費電力かつ長距離で環境データを収集することができます。SenseCAP には、LoRaWAN、NB-IoT など、いくつかのバージョンがあります。

SenseCAP LoRaWAN バージョンの製品には、LoRaWAN ゲートウェイとセンサーノードが含まれています。LoRaWAN プロトコルに基づき、1対多の長距離ネットワーク構築と双方向通信を実現します。LoRaWAN ゲートウェイはイーサネットと 4G をサポートしています。センサーノードは高容量バッテリーで駆動し、1時間ごとにデータをアップロードする場合、最大3年間持続します。また、ホットスワップをサポートしており、メンテナンスやアップグレードが容易です。

SenseCAP は使いやすいクラウドプラットフォームを提供します。ユーザーは SenseCAP アプリで QR コードをスキャンしてデバイスをアカウントに紐付け、デバイスを管理し、SenseCAP ポータルでセンサーノードのデータを確認できます。SenseCAP ポータルは API を提供しており、ポータル上のデータを基にさらなる開発が可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-c-1339.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**主な特徴**

- ゲートウェイ：高性能 Cortex A8 1GHz プロセッサ
- センサーは LoRaWAN プロトコルをサポートし、超低消費電力で、1時間ごとにデータをアップロードする場合、バッテリーは3年間持続
- ゲートウェイは 4G とイーサネットを使用してネットワークに接続し、さまざまなシナリオに対応
- 超長距離通信：見通しの良いシナリオで 10km、都市部で 2km
- 使いやすいクラウドプラットフォームと API
- 工業用保護等級 IP66 の筐体で、-40℃～70℃ の屋外環境に対応
- 簡単に展開可能で、エンジニアリングの知識がなくても迅速にデバイスを設置可能
- センサーノードはモジュール設計で、センサーノードコントローラーとセンサープローブを含み、特別設計のブラケットでポールや壁に簡単に取り付け可能

**LoRaWAN ゲートウェイ：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png)

ゲートウェイの底部にはイーサネットポートと電源コネクタがあり、すべて防水要件を満たしています。LED インジケーターライトはネットワーク接続状況を示します。ゲートウェイの上部には 4G/LoRa アンテナを取り付けるためのコネクタがあり、その他のコネクタは予備として用意されています。

**LoRaWAN センサーノード：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png)

デバイスをスナップして開くと、2つの部分が見えます。センサーノードコントローラーの回路には、電源スイッチ、リセットボタン、インジケーター LED、モードボタン、ファームウェアアップグレード用のシリアルポートが表示されます。この2つの部分は、2つのスプリングコネクタを介して接続および通信します。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png)

各センサーノードには、ポールや壁に簡単に取り付けるためのブラケットが付属しています。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg)

**SenseCAP ポータル：**

SenseCAP ポータルは、ウェブベースの管理ポータルやデータ呼び出し用の API など、複数のサービスを提供します。ユーザーは API を使用してシステム統合をさらに開発でき、組み込みハードウェア技術を気にすることなく、開発サイクルを短縮できます。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png)

## 2.クイックスタート

このクイックスタートガイドについては、[SenseCAP 製品ユーザーガイド(LoRaWAN シリーズ)-V1.1](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx) を参照してください。