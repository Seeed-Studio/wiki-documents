---
description: SenseCAP ゲートウェイ
title: SenseCAP ゲートウェイ
keywords:
- SenseCAP
- ゲートウェイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_Gateway_Intro
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

趣味から産業用途まで、さまざまなユーザーのニーズに応える製品群を提供するSenseCAP製品ラインは、周囲の世界をデジタル化するための包括的なソリューションを提供します。

LoRaWANセンサーに加えて、SenseCAPはWeb3用のホットスポットやLoRaWANセンサーソリューション用のLoRaWANゲートウェイなど、さまざまな種類のゲートウェイを提供しています。また、ソフトウェア、クラウドサービス、APIの幅広い選択肢を提供し、ユーザーがリアルタイムでデータを収集、保存、分析できるようにします。ハードウェア、ソフトウェア、クラウドサービスの組み合わせにより、ユーザーは環境の変化に迅速に対応し、データに基づいた意思決定を行うことができます。


## 概要

**SenseCAP ゲートウェイ**は、長距離無線通信のために設計された産業用グレードの高性能ゲートウェイです。Seeed Studioによって開発されたSenseCAPゲートウェイは、モノのインターネット（IoT）エコシステムにおける重要なコンポーネントとして機能し、幅広いアプリケーションに対して堅牢で信頼性の高い接続性を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/helium-sensecap6.png" alt="pir" width={1000} height="auto" /></p>

SenseCAP ゲートウェイの主な特徴は以下の通りです：

- 高い信頼性: IP66規格のエンクロージャーで過酷な環境条件に耐える設計。
- 長距離通信: LoRa技術を使用して広範囲のカバレッジを提供。
- 高性能: 多数の接続デバイスを管理するための強力な処理能力を搭載。
- 簡単な導入: シンプルなセットアップとメンテナンスにより、さまざまなユーザーや業界で利用可能。
- 拡張性: 高いデータスループットと多数のデバイス接続をサポートし、大規模なIoT展開に対応。

SenseCAP ゲートウェイの用途は、スマート農業や環境モニタリングから産業オートメーション、スマートシティまで多岐にわたります。

## LoRa通信

LoRa（Long Range）は、地域、国内、またはグローバルネットワークにおける無線バッテリー駆動デバイス向けに設計された低消費電力広域ネットワーク（LPWAN）プロトコルです。LoRaは、長距離、低消費電力、セキュアなデータ伝送を必要とするアプリケーションに最適です。

1. 変調技術: LoRaはChirp Spread Spectrum（CSS）変調を使用し、信号を広い周波数範囲に広げることで、干渉や信号劣化に対する強力な耐性を提供します。
2. 長距離通信: LoRaは農村部で最大15 km、都市部で最大5 kmの距離でデータを送信でき、幅広いアプリケーションに適しています。
3. 低消費電力: LoRaを使用するデバイスは、低消費電力要件のおかげで小型バッテリーで数年間動作可能です。
4. 低データレート: LoRaは長距離通信をサポートする一方で、通常0.3 kbpsから50 kbpsの範囲で低データレートに最適化されています。
5. セキュアな通信: LoRaはエンドツーエンドの暗号化を含む強力なセキュリティ機能を提供し、データの完全性と機密性を確保します。
6. LoRaは通常、スターオブスターズトポロジーで使用され、ゲートウェイがエンドデバイスと中央ネットワークサーバー間のメッセージを中継します。ゲートウェイは透明なブリッジとして機能し、RFパケットをIPパケットに、またその逆に変換します。

## ハードウェア製品

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/029cab35952193f5e1ea3c80fda40937-2.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/1ef6149dd438035c41238babee3f27e5-1.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>


### SenseCAP M2 マルチプラットフォームゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 マルチプラットフォーム LoRaWAN ゲートウェイは、異なるネットワークサーバーへの接続をサポートする標準的な LoRaWAN® ゲートウェイです。865 MHz から 923 MHz までのグローバル LoRaWAN® 周波数プランをサポートし、スマートビルディング、環境モニタリングシステム、精密農業などの複数の LoRaWAN® アプリケーションで使用できます。広範囲のカバレッジと強力な信号出力能力などの特徴を備えており、LoRaWAN® ネットワークを構築するための完璧なゲートウェイです。</font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を学ぶ</font></span></strong></a>
</div>



### Helium ゲートウェイ

#### SenseCAP M1 ゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M1 は、高性能で使いやすい LoRaWAN 屋内ゲートウェイで、Helium LongFi™ ネットワークに接続されています。Raspberry Pi 4 をベースにしており、WM1302/WM1303 (Semtech SX1302/SX1303) LoRa コンセントレーターが組み込まれています。内蔵の BLE を提供しており、簡単な手順でデバイスをセットアップでき、Wi-Fi またはイーサネットを介してインターネットに接続することができます。</font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-EU868-p-5022.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を学ぶ</font></span></strong></a>
</div>


#### SenseCAP M2 データ専用

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/d/a/data_eu.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 データ専用は、Helium LongFi ネットワークに接続された LoRaWAN ゲートウェイで、長距離/LoRaWAN デバイスに対して数マイルのワイヤレスネットワークカバレッジとデータ伝送能力を提供することができます。</font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を学ぶ</font></span></strong></a>
</div>


#### SenseCAP M2 ライトゲートウェイ

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-sensecap-m2-light-hotspot-software-license--first_1_.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 ライトホットスポットは、高性能な Helium LoRaWAN ゲートウェイで、ユーザーが最小限のコストで Helium ネットワークに参加できるようにします。柔軟な SenseCAP ライセンスプランは、1日あたり $0.05 から提供されており、ユーザーが最小限の投資で PoC とデータ転送の利点を享受し、より柔軟に利用できるようにします。</font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M2-Light-Hotspot-and-Software-License.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を学ぶ</font></span></strong></a>
</div>



### Flux ゲートウェイ

#### SenseCAP M4

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M4 スクエアは、複数の Web 3.0 アプリを実行するために設計されたデバイスです。コード不要でシームレスにセットアップできる CUMULUS FluxNode と Helium ライトホットスポットは、Flux のスケーラブルで分散型の計算ネットワークを提供し、LoRa/LoRaWAN デバイスに対して数マイルのワイヤレスネットワークカバレッジとデータ伝送能力を提供します。</font>
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
        <font size={"2.1"}>SenseCAP Gateway - LoRaWAN はIP66の工業用屋外製品で、拡張された動作温度範囲をサポートしており、スマート農業のような低消費電力、長距離データ収集IoTシナリオに適しています。</font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>



## SenseCAP クラウドサービス

### LoRaWAN ゲートウェイ向け

#### SenseCAP Mate APP

SenseCAP Mate APPは、データの可視化とリモートLoRaWANデバイス管理のための強力なアプリです。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-12.png" alt="pir" width={200} height="auto" /></p>


### SenseCAP ポータル

SenseCAP ポータル


### ホットスポット向け

#### SenseCAP Hotspot App

SenseCAP Hotspot Appは、ユーザーがWeb 3.0デバイス（Helium, Fluxなど）を購入、展開、管理するのを支援するオールインワンアプリです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/hotspot-app.png" alt="pir" width={1000} height="auto" /></p>


#### SenseCAP ダッシュボード

SenseCAP ダッシュボードは、デバイスやブロックチェーンからホットスポットに関する最新情報を提供し、SenseCAPデバイスと報酬を効率的に管理する方法を提供します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/dashboard.png" alt="pir" width={1000} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)に分類されています。私たちはユーザーエクスペリエンスを向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962531)は私たちにとって非常に重要です！あなたの意見を大切にしており、アイデアの生成にご協力いただけると幸いです。

## SenseCAP 技術サポート

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。



<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>