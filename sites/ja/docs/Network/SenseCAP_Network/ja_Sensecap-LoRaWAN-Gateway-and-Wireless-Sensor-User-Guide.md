---
description: Sensecap LoRaWAN ユーザーガイド
title: Sensecap LoRaWAN ユーザーガイド
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


## 1.製品紹介

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg)

SenseCAP は、導入が簡単なハードウェアとデータ API サービスを統合した産業用ワイヤレスセンサーネットワークで、低消費電力、長距離の環境データ収集を可能にします。SenseCAP には LoRaWAN、NB-IoT などの複数のバージョンがあります。
  
SenseCAP LoRaWAN バージョンの製品には、LoRaWAN ゲートウェイとセンサーノードが含まれます。LoRaWAN プロトコルに基づいて、一対多、長距離ネットワーキングと双方向通信を実現できます。LoRaWAN ゲートウェイは Ethernet と 4G をサポートします。センサーノードは最大 3 年間持続する大容量バッテリーで駆動されます（1 時間に 1 回データをアップロードする場合）。また、ホットスワップもサポートしており、メンテナンスとアップグレードが簡単です。

SenseCAP は使いやすいクラウドプラットフォームを提供します。ユーザーは SenseCAP アプリで QR コードをスキャンして、デバイスをそれぞれのアカウントにバインドしてデバイスを管理し、SenseCAP Portal でセンサーノードデータを確認できます。SenseCAP Portal は、ユーザーが Portal 上のデータに基づいてさらに開発するための API を提供します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-c-1339.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**主な特徴**

- ゲートウェイ：高性能 Cortex A8 1GHz プロセッサ
- センサーは LoRaWAN プロトコルをサポート、超低消費電力、バッテリーは 3 年間持続（1 時間に 1 回データをアップロードする場合）
- ゲートウェイは複数の方法でネットワークに接続：4G と Ethernet で異なるシナリオをサポート
- 超長距離通信：見通しの良いシナリオで 10km、都市部のシナリオで 2km
- 使いやすいクラウドプラットフォームと API
- 産業用保護等級 IP66 定格エンクロージャ、-40℃～70℃の屋外環境に適用
- 導入が簡単で、エンジニアリング背景のない人でもデバイスを迅速にインストール可能
- センサーノードのモジュラー設計、センサーノードコントローラーとセンサープローブを含み、ポールや壁への簡単な設置のための特別設計のブラケット付き。

**LoRaWAN ゲートウェイ：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png)

ゲートウェイの底部には Ethernet ポートと電源コネクタがあり、すべて防水要件を満たしています。LED インジケーターライトはネットワーキング状態を示します。ゲートウェイの上部は 4G/LoRa アンテナを取り付けるためのコネクタで、その他のコネクタは予約されています。

**LoRaWAN センサーノード：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png)

デバイスをスナップして開くと、2 つの部分が見えます。センサーノードコントローラーの回路には、電源スイッチ、RESET ボタン、インジケーター LED、モードボタン、シリアルポートが表示されており、これらはファームウェアアップグレードに使用されます。2 つの部分は 2 つのスプリングコネクタを介して接続し、通信します。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png)

各センサーノードには、ポールや壁への簡単な設置のためのブラケットが付属しています。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg)

**SenseCAP Portal：**

SenseCAP Portal は、Web ベースの管理ポータルとデータ呼び出し用 API を含む複数のサービスを提供します。ユーザーは API を使用してシステム統合をさらに開発でき、組み込みハードウェア技術を心配する必要がなく、開発サイクルを短縮できます。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png)

## 2.クイックスタート

このクイックスタートガイドについては、[SenseCAP Product User Guide(LoRaWAN Series)-V1.1](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx) を参照してください。
