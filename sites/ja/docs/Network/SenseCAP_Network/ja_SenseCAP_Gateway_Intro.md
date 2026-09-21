---
description: SenseCAP Gateway
title: SenseCAP Gateway
keywords:
  - SenseCAP
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_Gateway_Intro
last_update:
  date: 01/08/2026
  author: Kian
createdAt: '2023-07-20'
updatedAt: '2026-01-08'
url: https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_Gateway_Intro/
---


ホビイストから産業ユーザーまで、さまざまなユーザーのニーズに応える製品ラインナップにより、SenseCAP 製品ラインは、私たちの身の回りの世界をデジタル化するための包括的なソリューション群を提供します。

LoRaWAN センサーに加えて、SenseCAP は Web3 向けホットスポットや LoRaWAN センシングソリューション向け LoRaWAN ゲートウェイなど、さまざまなタイプのゲートウェイと、ソフトウェア、クラウドサービス、API の数々を提供し、ユーザーがリアルタイムでデータを収集・保存・分析できるようにします。ハードウェア、ソフトウェア、クラウドサービスを組み合わせることで、ユーザーは環境の変化に素早く対応し、データに基づいた意思決定を行うことができます。

:::caution info
**産業グレードのギャップを埋め、LoRaWAN エッジ機能を再定義**
> 新しい reComputer R1225 LoRaWAN Gateway のご紹介 — BMS / BAS / iBMS 向けの、産業グレード LoRaWAN + センシング + 制御を統合したゲートウェイ
:::

## はじめに

**SenseCAP Gateway** は、長距離無線通信向けに設計された産業グレードの高性能ゲートウェイです。Seeed Studio によって開発された SenseCAP Gateway は、モノのインターネット（IoT）エコシステムにおける重要なコンポーネントとして機能し、幅広いアプリケーションに対して堅牢で信頼性の高い接続性を実現します。



SenseCAP Gateway の主な特長は次のとおりです：

- 高い信頼性：IP66 等級のエンクロージャにより、過酷な環境条件にも耐えられる設計。
- 長距離通信：LoRa 技術により、広範囲をカバー可能。
- 高性能：多数の接続デバイスを管理できる強力な処理能力を搭載。
- 導入の容易さ：セットアップと保守が簡単で、さまざまなユーザーや産業分野で利用しやすい。
- スケーラビリティ：高いデータスループットと多数のデバイス接続により、大規模な IoT 展開をサポート。

SenseCAP Gateway の用途は、スマート農業や環境モニタリングから、産業オートメーションやスマートシティまで多岐にわたります。

## LoRa 通信

LoRa（Long Range）は、地域・国内・グローバルネットワークにおけるバッテリー駆動の無線デバイス向けに設計された、低消費電力広域ネットワーク（LPWAN）プロトコルです。LoRa は、長距離・低消費電力・安全なデータ伝送を必要とするアプリケーションに最適です。

1. 変調方式：LoRa は Chirp Spread Spectrum（CSS）変調を使用し、信号を広い周波数帯域に拡散することで、干渉や信号劣化に対する高い耐性を実現します。
2. 長距離通信：LoRa は、郊外では最大 15 km、都市部では 5 km までデータを送信でき、幅広いアプリケーションに適しています。
3. 低消費電力：LoRa を使用するデバイスは、低い電力要件により、小型バッテリーで数年間動作可能です。
4. 低データレート：LoRa は長距離通信をサポートする一方で、0.3 kbps から 50 kbps 程度の低データレートに最適化されています。
5. 安全な通信：LoRa はエンドツーエンド暗号化を含む強力なセキュリティ機能を提供し、データの完全性と機密性を確保します。
6. LoRa は一般的にスター・オブ・スター型トポロジで使用され、ゲートウェイがエンドデバイスと中央ネットワークサーバー間のメッセージを中継します。ゲートウェイは透過的なブリッジとして機能し、RF パケットを IP パケットに、またその逆に変換します。

## ハードウェア製品

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/029cab35952193f5e1ea3c80fda40937-2.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/1ef6149dd438035c41238babee3f27e5-1.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

### reComputer R1225 LoRaWAN Gateway

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background_1.png" style={{width:900, height:400}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>reComputer R1225 LoRaWAN Gateway は、Raspberry Pi ベースの産業用 IoT LoRaWAN ゲートウェイ兼コントローラであり、CM4 を搭載し AI 機能を備えた、強力かつ柔軟なデバイスです。3 つの RS485、デュアルイーサネット、BACnet および Modbus をサポートし、堅牢で信頼性の高い産業用エッジ IoT デバイスに必要な機能をすべて備えています。AI NPU アクセラレータとの互換性により、特に BMS、BAS、iBMS などのリモートアクセス制御に最適です。 </font>
    </div>
</div>
<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center', marginTop: '48px'}}>
    <a class="get_one_now_item" href="" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <!--缺少商详链接，待产品上架后补上-->
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/r1225_introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong></a>
</div>


### SenseCAP M2 Multi-Platform Gateway

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 Multi-Platform LoRaWAN Gateway は、さまざまなネットワークサーバーへの接続をサポートする標準的な LoRaWAN® ゲートウェイです。865 MHz から 923 MHz までのグローバルな LoRaWAN® 周波数プランをサポートし、スマートビルディング、環境モニタリングシステム、精密農業など、複数の LoRaWAN® アプリケーションで使用できます。広範囲のカバレッジと強力な信号出力能力などの特長を備えており、LoRaWAN® ネットワークを構築するための理想的なゲートウェイです。 </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong></a>
</div>



### 屋外用ゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/sensecap_lorawan_eu868_1.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Gateway - LoRaWAN は IP66 の産業グレード屋外製品であり、拡張動作温度範囲をサポートすることで、スマートファーミングのような、低消費電力かつ長距離のデータ収集を行う IoT シナリオに適しています。 </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong></a>
</div>

## SenseCAP クラウドサービス

### LoRaWAN Gateway 向け

#### SenseCAP Mate APP

SenseCAP Mate APP は、データの可視化とリモート LoRaWAN デバイス管理のための強力なアプリです。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-12.png" alt="pir" width={200} height="auto" /></p>

### SenseCAP Portal

SenseCAP Portal

#### SenseCAP Dashbaord

SenseCAP デバイスと報酬を効率的に管理する方法として、SenseCAP Dashbaord は、デバイスやブロックチェーンから取得したホットスポットに関する最新情報を提供します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/dashboard.png" alt="pir" width={1000} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストを、[contributor project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) の一部として用意しています。これは、ユーザー体験を向上させ、Wiki プラットフォームの開発を通じてより良いサポートを提供することに尽力しているためです。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962531) は、私たちにとって非常に重要です。皆さまからのご意見を大切にしており、アイデア出しへのご協力を心より歓迎します。

## SenseCAP テクニカルサポート

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
