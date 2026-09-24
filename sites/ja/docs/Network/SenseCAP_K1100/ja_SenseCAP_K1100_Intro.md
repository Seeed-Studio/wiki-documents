---
description: SenseCAP K1100 ガイド - センサープロトタイプキット
title: SenseCAP K1100 ガイド - センサープロトタイプキット
keywords:
  - SenseCAP Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_K1100_Intro
sku: 110991748
last_update:
  date: 08/07/2024
  author: Frank
createdAt: '2023-07-20'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/SenseCAP_K1100_Intro/
---

## はじめに

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/___-1-_-7_1_.png" style={{width:800, height:'auto'}}/></div>

SenseCAP K1100 は、シームレスなデータ収集と分析を実現するために設計された、包括的で最先端の環境モニタリングキットです。高度なセンサーと接続オプションを統合しており、さまざまな環境モニタリング用途に対応できる多用途なソリューションとなっています。このキットは、堅牢な IoT ソリューションを効率的にプロトタイピングおよび展開したい開発者、研究者、ホビイストに最適です。

## True Wild のコンセプト

SenseCAP K1100 プロトタイプキットは、初期コンセプトの開発と実際の現場での展開とのギャップを埋めます。ユーザーは、フィールドに展開する前に、自身の環境モニタリングソリューションを迅速に作成・テストすることができます。プロトタイプから真の野外ソリューションへのこの移行により、デバイスが信頼性と耐久性を備え、さまざまな環境条件に耐えられることが保証されます。

## SenseCAP K1100 を使い始める

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>センサープロトタイプキットの紹介</font></th>
      <th class="table-trnobg"><font size={"4"}>SenseCraft によるクイック & ノーコードでの開始</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/banner.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、オープンソースプロジェクトを使って、最短時間でデータ収集とデータ処理の楽しさを体験できます。 </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> ユーザーが IoT を体験できるように、LoRa® と WiFi の 2 つのパスを用意しています。本チュートリアルでは、それらの使い方を解説します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## LoRaWAN ネットワークアプリケーション

### Arduino を使ったセンサーの基本的な使い方

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal 光センサー</th>
      <th class="table-trnobg">Wio Terminal IMU センサー</th>
      <th class="table-trnobg">Grove 土壌水分センサー</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、光センサーの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、IMU センサーの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove 土壌水分センサーの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-IMU-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove VOC および eCO2 ガスセンサー (SGP30)</th>
      <th class="table-trnobg">Grove 温湿度センサー (SHT40)</th>
      <th class="table-trnobg">Grove Vision AI モジュール</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove VOC および eCO2 ガスセンサーの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove 温湿度センサーの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove Vision AI モジュールの動作原理、Wio Terminal を使ってセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使ってデータを送信する方法を詳しく説明します。 </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### クラウドサービス

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">TTN クラウドサービス</th>
      <th class="table-trnobg">SenseCAP & Node-Red を用いたクラウドサービス</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/25.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この章では、TTN コンソールの第一印象をつかむために使用する TTN コンソールのコントロールについて紹介します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Node-RED は、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で相互接続するためのプログラミングツールです。ここでは SenseCAP と Node-RED の一連のチュートリアルを行います。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Wi-Fi ネットワークアプリケーション

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">高度な WiFi の使用方法</th>
      <th class="table-trnobg">クラウドサービス</th>
      <th class="table-trnobg">Azure IoT プラットフォームの使用方法</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この wiki では、HTTPClient、DNSServer、WebServer ライブラリなど、Wi-Fi の高度なライブラリの使い方を紹介します。これらのライブラリを実装することで、シンプルな API を使って IoT プロジェクトを開発できるようになります。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この章では、Wio Terminal を使用して Ubidots、Blynk、Google Cloud に接続する方法を案内します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このチュートリアルでは、Wio Terminal を Microsoft Azure IoT Central に接続し、3 軸加速度センサ、照度センサ、3 つのボタンなど、Wio Terminal 搭載のセンサ／ハードウェアから Microsoft Azure IoT Central へテレメトリデータを送信する手順を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Advanced-WiFi/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Getting_started_with_Ubidots/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 組み込み ML アプリケーション

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge Impulse を用いた内蔵センサ</font></th>
      <th class="table-trnobg"><font size={"4"}>カスタマイズ可能なモデルによる Vision AI</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、Edge Impulse を使ってモデルを生成し、クラウドに接続したい方のためのソリューションを紹介します。デモでは Google スプレッドシートを使用します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この wiki では、特定のアプリケーション向けに独自の AI モデルをトレーニングし、それを Grove - Vision AI Module に簡単にデプロイする方法を説明します。さっそく始めましょう！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1111-Edge-Impulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Vision_AI_with_Customizable_Models/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## プロジェクトセクション

上記の各プラットフォーム向けの基本チュートリアルに加えて、このキットの使い方に関するさまざまな豊富なサンプルを用意しました。ここから、このキットの価値が無限であることを実感していただけます！

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>IoT Into the Wild Contest for Sustainable Planet 2022</font></th>
      <th class="table-trnobg"><font size={"4"}>カスタマイズ可能なモデルによる Vision AI</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100_overview/000000.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この素晴らしいキットを使って参加者の皆さんが制作したプロジェクトを、ここでご紹介できることをうれしく思います。彼らのプロジェクトを参考にすることで、さらに多くの可能性を見いだすことができます！</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この wiki では、キットに含まれる Wio Terminal を活用して Grove - Wio-E5 と Grove - Soil Moisture Sensor を接続し、Azure IoT Central プラットフォームに接続して、リアルタイムの庭の鉢植えモニタリングと給水リマインダーを構築し、モノのインターネットの一端を体験する方法を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/IoT-into-the-wild-contest/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1111-Quick-Start-Guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## ✨ コントリビュータープロジェクト

- 私たちはこのページを更新するためのタスクリストを、[contributor project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) の中に分類して用意しています。これは、ユーザー体験を向上させ、wiki プラットフォームの開発を通じてより良いサポートを提供することに尽力しているためです。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962909)は、私たちにとって非常に重要です！皆さまからのご意見を大切にしており、アイデア出しへのご協力を心より歓迎します。

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
