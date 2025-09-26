---
description: SenseCAP Gateway
title: SenseCAP Gateway
keywords:
- SenseCAP
- Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_Gateway_Intro
last_update:
  date: 09/26/2023
  author: Jessie
---


SenseCAP は、ホビイストから産業従事者まで、さまざまなユーザーのニーズに対応する製品ラインナップを提供し、私たちの周りの世界をデジタル化するための包括的なソリューションスイートを提供しています。

LoRaWAN センサーに加えて、SenseCAP は web3 用のホットスポットや LoRaWAN センシングソリューション用の LoRaWAN ゲートウェイなど、さまざまなタイプのゲートウェイ、そしてソフトウェア、クラウドサービス、API の配列を提供し、ユーザーがリアルタイムでデータを収集、保存、分析できるようにしています。ハードウェア、ソフトウェア、クラウドサービスの組み合わせにより、ユーザーは環境の変化に迅速に対応し、データ駆動型の意思決定を行うことができます。

## 概要

**SenseCAP Gateway** は、長距離無線通信用に設計された産業グレードの高性能ゲートウェイです。Seeed Studio によって開発された SenseCAP Gateway は、モノのインターネット（IoT）エコシステムにおける重要なコンポーネントとして機能し、幅広いアプリケーションに対して堅牢で信頼性の高い接続を可能にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/helium-sensecap6.png" alt="pir" width={1000} height="auto" /></p>

SenseCAP Gateway の主要な特徴は以下の通りです：

- 高信頼性：IP66 定格エンクロージャーにより、過酷な環境条件に耐えるよう構築されています。
- 長距離：LoRa 技術により広範囲のカバレッジを提供できます。
- 高性能：多数の接続デバイスを管理するための強力な処理能力を備えています。
- 導入の容易さ：シンプルなセットアップとメンテナンスにより、さまざまなユーザーや業界でアクセスしやすくなっています。
- スケーラビリティ：高いデータスループットと多数のデバイス接続により、大規模な IoT 展開をサポートします。

SenseCAP Gateway のアプリケーションは、スマート農業や環境監視から産業オートメーションやスマートシティまで多岐にわたります。

## LoRa 通信

LoRa（Long Range）は、地域、国内、またはグローバルネットワークにおける無線バッテリー駆動デバイス用に設計された低電力広域ネットワーク（LPWAN）プロトコルです。LoRa は、長距離、低電力、安全なデータ伝送を必要とするアプリケーションに最適です。

1. 変調技術：LoRa は Chirp Spread Spectrum（CSS）変調を使用し、信号を広い周波数範囲に拡散することで、干渉や信号劣化に対する堅牢な耐性を提供します。
2. 長距離：LoRa は農村地域で最大 15 km、都市部で 5 km の距離でデータを送信でき、幅広いアプリケーションに適しています。
3. 低消費電力：LoRa を使用するデバイスは、低電力要件により小型バッテリーで数年間動作できます。
4. 低データレート：LoRa は長距離通信をサポートしますが、低データレート用に最適化されており、通常 0.3 kbps から 50 kbps の範囲です。
5. 安全な通信：LoRa は、エンドツーエンド暗号化を含む強力なセキュリティ機能を提供し、データの整合性と機密性を確保します。
6. LoRa は通常、ゲートウェイがエンドデバイスと中央ネットワークサーバー間でメッセージを中継するスター・オブ・スターズトポロジで使用されます。ゲートウェイは透明なブリッジとして機能し、RF パケットを IP パケットに変換し、その逆も行います。

## ハードウェア製品

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/029cab35952193f5e1ea3c80fda40937-2.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/1ef6149dd438035c41238babee3f27e5-1.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

### SenseCAP M2 マルチプラットフォームゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 Multi-Platform LoRaWAN Gatewayは、異なるネットワークサーバーへの接続をサポートする標準的なLoRaWAN®ゲートウェイです。865 MHzから923 MHzまでのグローバルLoRaWAN®周波数プランをサポートし、スマートビルディング、環境監視システム、精密農業などの複数のLoRaWAN®アプリケーションで使用できます。広範囲カバレッジと強力な信号出力能力などの機能を備えており、LoRaWAN®ネットワーク構築に最適なゲートウェイです。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

### Helium Gateway

#### SenseCAP M1 ゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M1は、Helium LongFi™ネットワークに接続された高性能で即座に使用可能なLoRaWAN屋内ゲートウェイです。Raspberry Pi 4をベースとし、WM1302/WM1303（Semtech SX1302/SX1303）LoRaコンセントレーターを内蔵しています。内蔵BLEを提供し、数ステップでデバイスのセットアップを支援し、Wi-FiまたはEthernetを介したインターネット接続をサポートします。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-EU868-p-5022.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

#### SenseCAP M2 データのみ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/d/a/data_eu.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 Data OnlyはHelium LongFiネットワークに接続されたLoRaWANゲートウェイで、Long Range/LoRaWANデバイスに数マイルの無線ネットワークカバレッジとデータ伝送能力を提供できます。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

#### SenseCAP M2 ライトゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-sensecap-m2-light-hotspot-software-license--first_1_.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 Light Hotspotは、ユーザーが最小限のコストでHeliumネットワークに参加できる高性能Helium LoRaWANゲートウェイです。1日あたり$0.05からの柔軟なSenseCAP Licenceプランを提供し、ユーザーが最小限の投資とより高い柔軟性でPoCとデータ転送の利点を享受できるようにします。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M2-Light-Hotspot-and-Software-License.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

### Flux Gateway

#### SenseCAP M4

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M4 Squareは、複数のWeb 3.0アプリを実行するように設計されたデバイスです。コード不要でCUMULUS FluxNodeとHelium light hotspotをシームレスにセットアップし、Fluxにスケーラブルで分散化された計算ネットワークと、LoRa/LoRaWANデバイスに数マイルの無線ネットワークカバレッジとデータ伝送能力を提供します。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M4-Sqaure-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

### 屋外ゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/sensecap_lorawan_eu868_1.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Gateway - LoRaWANは、IP66産業グレードの屋外製品で、拡張動作温度範囲をサポートし、スマート農業などの低消費電力、長距離データ収集IoTシナリオに適用できます。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

## SenseCAP クラウドサービス

### LoRaWANゲートウェイ用

#### SenseCAP Mate APP

SenseCAP Mate APPは、データ可視化とリモートLoRaWANデバイス管理のための強力なアプリです。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-12.png" alt="pir" width={200} height="auto" /></p>

### SenseCAP Portal

SenseCAP Portal

### ホットスポット用

#### SenseCAP ホットスポットアプリ

SenseCAP Hotspot Appは、ユーザーがWeb 3.0デバイス（Helium、Fluxなど）の購入、展開、管理を支援するオールインワンアプリです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/hotspot-app.png" alt="pir" width={1000} height="auto" /></p>

#### SenseCAP Dashbaord

SenseCAPデバイスと報酬を管理する効率的な方法として、SenseCAP Dashbaordは、デバイスやブロックチェーンからのホットスポットに関する最新情報を提供します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/dashboard.png" alt="pir" width={1000} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、これは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちはwikiプラットフォームの開発を通じて、ユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962531)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## SenseCAP技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
