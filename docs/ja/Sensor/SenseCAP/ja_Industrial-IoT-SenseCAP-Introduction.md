---
description: SenseCAP エコシステムの紹介
title: SenseCAP エコシステムの紹介
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_introduction
last_update:
  date: 05/15/2025
  author: Frank
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/sensecap-intro.png" alt="pir" width={1000} height="auto" /></p>

趣味から産業用途まで、さまざまなユーザーのニーズに応える製品群を備えたSenseCAP製品ラインは、周囲の世界をデジタル化するための包括的なソリューションを提供します。

センサーからゲートウェイまで、ユーザーは環境のさまざまな側面を監視および制御するための独自のソリューションを構築し、カスタマイズすることができます。この製品ラインには、大規模に展開可能な産業用デバイスも含まれており、高度な機能と堅牢な性能を提供します。

さらに、SenseCAP製品ラインは、リアルタイムでデータを収集、保存、分析するためのソフトウェア、クラウドサービス、およびAPIの配列も提供します。ハードウェア、ソフトウェア、クラウドサービスの組み合わせにより、ユーザーは環境の変化に迅速に対応し、データに基づいた意思決定を行うことができます。

## Wild IoT

Wild IoTは、自然環境にセンサーネットワークを展開して、温度、湿度、気圧、光強度、土壌水分などのさまざまな環境データをリアルタイムで監視および収集する技術を指します。このデータは、科学研究、生態系保護、資源管理に役立ちます。

### なぜ産業用センサーが必要なのか？

1. **耐久性と信頼性**: 屋外環境は複雑で変化に富んでいます。産業用センサーは、高温、湿度、腐食に対する耐性があり、過酷な条件下でも長期間安定して動作します。
2. **高精度なデータ収集**: 科学研究や環境監視には高精度なデータが必要です。産業用センサーの高い精度と安定性はこれらの要求を満たします。
3. **低消費電力と長寿命バッテリー**: 野外では電源供給が困難な場合があります。産業用センサーは通常低消費電力設計であり、長期間の運用を可能にし、メンテナンスやバッテリー交換の頻度を減らします。

### どのように動作するのか？

1. **データ収集**: 産業用センサーは屋外環境に設置され、温度、湿度、気圧などのリアルタイムデータを収集します。
2. **データ送信**: 収集されたデータは、LoRaWANのような低消費電力広域ネットワーク（LPWAN）技術を使用してゲートウェイに送信されます。
3. **データ処理と保存**: ゲートウェイはデータをクラウドプラットフォームに送信し、処理、保存、分析を行います。
4. **データの可視化と応用**: ユーザーはクラウドプラットフォーム上のアプリケーションやダッシュボードを通じてリアルタイムでデータを確認し、分析や意思決定に役立てることができます。

## ハードウェア製品

### SenseCAP T1000 トラッカー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)は、GNSS/Wi-Fi/Bluetoothを利用した正確な屋内外の位置追跡を可能にするコンパクトなLoRaWAN®トラッカーです。自己地理適応機能、ローカルデータストレージ、数ヶ月間のバッテリー寿命を誇ります。また、温度、光、動きセンサーを搭載しており、さまざまな位置ベースのアプリケーションに最適です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/sensecap_t1000_tracker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/sensecap_t1000_tracker/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

### LoRaWAN センサー

#### SenseCAP S210x シリーズセンサー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-sensors.png" alt="pir" width={1000} height="auto" /></p>

SenseCAP S210Xは、ワイヤレスLoRaWAN®センサーのシリーズです。都市部では2km、見通しの良い場所では10kmの通信範囲をカバーし、通信プロセス中の消費電力を抑えます。交換可能なバッテリーは最大10年間の使用をサポートし、産業用IP66エンクロージャを備えています。-40 ~ 85℃の動作温度をサポートし、過酷な環境での展開が可能です。SenseCAP S210XはLoRaWAN® V1.0.3プロトコルに対応しており、LoRaWAN®ゲートウェイと連携して動作します。

|空気温度と湿度|光|空気温度・湿度とCO2|土壌水分と温度|
|------------------|--------------------------|-----------------------|-----------------------|
|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2101.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2102.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2103.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2104.png" alt="pir" width={300} height="auto" />|
|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2106-p-5647.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html)</p>|

|土壌水分・温度・間隙・EC|土壌水分・温度・EC|PH|PT1000 温度|
|------------------|--------------------------|-----------------------|--------------------------|
|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2108.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2105.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/2106.png" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993078-sensecap-s2107-temperature-sensor-45font.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/o/font_5.png" alt="pir" width={300} height="auto" />|
|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/SenseCAP-S2108-Soil-Moisture-Temperature-and-Pore-EC-Sensor-p-5825.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/SenseCAP-S2106-p-5647.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/SenseCAP-S2107-Temperature-Sensor-p-5807.html)</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>


#### SenseCAP S2120 8-in-1 気象センサー

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/o/font_5.png" alt="pir" width={600} height="auto" /></p>

[SenseCAP LoRaWAN S2120 気象ステーション](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)は、世界中のLoRaWANネットワークに対応し、気温、湿度、風速/風向、降雨強度、光強度、UV指数、気圧データを収集してアップロードします。S2120気象ステーションは、庭園、農業、気象学、都市環境モニタリングなどの用途に適しています。また、超低消費電力、信頼性の高い性能、Bluetooth内蔵によるOTA設定およびリモートデバイス管理により、低メンテナンスコストを実現します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

#### SenseCAP A1101 Vision AI センサー

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg" alt="pir" width={600} height="auto" /></p>

[SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - LoRaWAN Vision AI センサーは、TinyML Edge AI対応のスマート画像センサーです。画像認識、人数カウント、ターゲット検出、メーター認識など、さまざまなAIモデルをサポートします。また、TensorFlow Liteを使用してモデルをトレーニングすることも可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP-Vision-AI-Get-Started/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong></a>
</div>

### SenseCAP ONE 気象センサー

現在、局所的な気象データ（マイクロ気候）は、より正確で精密な気象予測のための新たなフロンティアとなっています。その結果、気象データの収集はますます小規模でグリッド化されています。このような状況を踏まえ、気象データを収集する最も便利な手段である気象ステーションの需要が増加しています。SenseCAPは、さまざまなシナリオで環境データを収集および監視するためのオールインワン気象センサーを提供します。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NDUzODQzODY1Mw_607717_gJ-z6vK8gbiTsmB3_1681182673?w=960&h=766" alt="pir" width={800} height="auto" /></p>

SenseCAP ONEは、複数のセンサーを統合したコンパクトなオールインワン気象センサーシリーズであり、最大10の気象パラメータを監視します：気温、湿度、気圧、光強度、風速、風向、降雨量、PM2.5、PM10、CO2。

||気温|湿度|気圧|光|風速|風向|降雨量|PM2.5|PM10|CO2|騒音|
|--|--|--|--|--|--|--|--|--|--|--|--|
|<p style={{textAlign: 'center'}}>[S200](https://www.seeedstudio.com/SenseCAP-S200-Wind-Speed-and-Direction-Sensor-p-5693.html)</p>|||||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||||||
|<p style={{textAlign: 'center'}}>[S500](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html)</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||||||
|<p style={{textAlign: 'center'}}>[S700](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html)</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|||||
|<p style={{textAlign: 'center'}}>[S800](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html)</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||<p style={{textAlign: 'center'}}>✅</p>|
|<p style={{textAlign: 'center'}}>[S900](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html)</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|||
|<p style={{textAlign: 'center'}}>[S1000](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP-ONE-Compact-Weather-Station-Introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

### センサープローブ

アプリケーションの利便性を向上させるために、土壌水分、温度、土壌電気伝導率、pHレベルを検出するRS485センサープローブも提供しています。さらに多くのRS485センサーが近日中に登場予定です。

<p style={{textAlign: 'center'}}><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/751082a4ebef3470bf20ee2e9523bbd4.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></p>

|液体レベル|土壌水分 & 温度|土壌水分 & 温度 & EC|
|------------------|--------------------------|-----------------------|
|<img src="https://files.seeedstudio.com/wiki/Liquid_Level_Sensor/img/01_14_4.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Soil_Moisture_Temperature_Sensor/101990668_2.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Soil_Moisture_Temperature_EC_Sensor/101990667_2.png" alt="pir" width={300} height="auto" />|
|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/Liquid-Level-Sensor-p-4619.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-Sensor-S-Soil-MT-02-p-4634.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02-p-4633.html)</p>|

|RS485 500cm 超音波レベル|RS485 700cm 超音波レベル|pH|
|------------------|--------------------------|-----------------------|
|<img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Industrial_Grade_ph_Sensor/Image/101990666_2.png" alt="pir" width={300} height="auto" />|
|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/RS485-pH-Sensor-S-pH-01A-p-4632.html)</p>|

|光学式雨量計 RG-9|光学式雨量計 RG-15|水漏れ検知器|
|------------------|--------------------------|-----------------------|
|<img src="https://files.seeedstudio.com/wiki/Optical_Rain_Gauge_RG-9/0000_front-05.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Industrial-Grade_Optical_Rain_Gauge_RG-15/114992321-07.png" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Water_Leak_Detector/pic.PNG" alt="pir" width={270} height="auto" />|
|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/Rain-Gauge-RG-9-p-4744.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/Rain-Gauge-RG-15-p-4648.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/Water-Leak-Detector-p-4620.html)</p>|

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP_Sensor_Probes_Product_Catalogue/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

### センサービルダー

#### SenseCAP S2110 センサービルダー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

SenseCAP S2110 センサービルダーは、産業用モジュールとメーカーレベルモジュールの融合を可能にする画期的なソリューションです。このオープンソースツールは、500以上のGroveモジュールを使用してRS485機能モジュールを構築する能力を備えています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP_Builder_build_LoRaWAN_Sensors/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

### データロガー

データロガーは、産業用センサー、Groveセンサー、アナログ/RS485/GPIOセンサーを含む200以上のセンサーとの橋渡し役を果たします。

<p style={{textAlign: 'center'}}><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/8939fbb3c723aea6c946d42bd464ee32-1.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></p>

SenseCAP は2種類のデータロガーを提供しています：

|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/hub.png" width="475"/>|<img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/log.png" width="475"/>|
|------------------|--------------------------|
|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html)</p>|


### SenseCAP デコーダー

SenseCAP デコーダーは、SenseCAP LoRaWAN® デバイスから送信されたLoRaWANメッセージをデコードするために使用されます。デコード後、ユーザーのアプリケーションはより親しみやすく読みやすいメッセージを取得できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP_Decoder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

## ソフトウェアサービス

### SenseCAP ポータル

SenseCAP ポータルは、デバイス、データ、およびアクセスキーを管理するために設計されています。アカウントを作成すると、このポータル上で所有するすべてのデバイスを紐付けることができます。ポータルのクイックスタートとガイドについては、[SenseCAP ドキュメントセンター – ポータル](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_Portal/QuickStart/)をご覧ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991154/wiki%20images/portal.png" alt="pir" width={800} height="auto" /></p>

### SenseCAP Mate APP

[SenseCAP Mate APP](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP) は、データの可視化とリモートデバイス管理のための強力なアプリです。

* 時間を節約 - スキャン＆プレイ体験を提供し、ユーザーが4ステップで全体の設定を完了できるようにします
* 技術的な背景が少ない、またはない人でも簡単にセンサーデータを利用開始できる
* クリーンなユーザーインターフェースでデータを取得し表示
* 時間間隔を設定: バッテリー効率を向上
* 閾値を設定: アクションが必要なデータに集中 - 近日公開
* 安全範囲外のデータがある場合にアラームを送信 - 近日公開

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png" alt="pir" width={400} height="auto" /></p>

### SenseCAP AI

[SenseCAP AI](https://wiki.seeedstudio.com/ja/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/) は、センサーデータを最大限に活用し、その可能性を引き出すためのAI駆動型ソリューションです。SenseCAP センサーを SenseCAP プラットフォームに接続することで、温度、湿度、光、空気質などの環境要因に関するデータを簡単に収集・分析できます。その後、強力なAIアルゴリズムがこのデータを使用して、運用の最適化、コスト削減、効率向上に役立つ実用的な洞察と推奨事項を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991154/wiki%20images/portal.png" alt="pir" width={800} height="auto" /></p>

空気質の監視、作物成長の最適化、効率向上を目指している場合でも、SenseCAP AIは成功に必要なツールを提供します。SenseCAP AIは現在、[SenseCAP ポータル](https://sensecap.seeed.cc/portal/#/login)および[SenseCAP Mate App](https://sensecap-mate-download.seeed.cc/)でリリースされており、ユーザーはいつでも利用できます。使いやすいプラットフォームとアプリを使用して、センサーを迅速に接続し、数分で貴重な洞察を受け取ることができます。

### SenseCAP API

SenseCAP アプリケーションプログラミングインターフェースを使用することで、独自のSenseCAPデバイスとデータを管理し、特定のニーズに対応することができます。以下の3種類のAPIメソッドを柔軟に適用できます：

* HTTP APIを使用すると、LoRaおよびNB-IoTデバイスを管理し、RAWデータや履歴データを取得できます。
* MQTT APIを使用すると、MQTTプロトコルを介してセンサーのリアルタイム測定データを購読できます。
* WebSocket APIを使用すると、WebSocketプロトコルを介してセンサーのリアルタイム測定データを取得できます。

SenseCAP APIのガイドと参考資料について詳しく知りたい場合は、[SenseCAP ドキュメントセンター – API](https://sensecap-docs.seeed.cc/introduction.html)をご覧ください。

## アプリケーション

### 5分で産業用LoRaWANセンサーを開発

5分で直接商業利用可能な産業用LoRaWANワイヤレスセンサーを迅速に構築しましょう。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

商業データ収集プロジェクトのプロトタイピングでは、多くの時間とコストがかかります。例えば、農業プロジェクト用にワイヤレスpHセンサーを作る必要がある場合、以下の手順が必要です：
1) 開発ボードとセンサープローブを探す。
2) コードを書く。
3) シェルを3Dプリントする。
4) 最終組み立てとテストを行う。

プロトタイプを完成させるまでに、数日から数週間かかることがあります。

しかし、現在ではワイヤレスLoRaコレクターを使用し、センサーをBluetooth経由でアプリに接続して、5分で製品を構築し、直接商業プロジェクトに組み込むことが可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/develop_an_industrial_lorawan_sensor/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

### SenseCAPセンサーとHome Assistantの連携

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

この記事シリーズでは、Home Assistantでスマートホームを構築し、Seeed StudioのSenseCAP製品センサーを使用する方法を共有します。そして、これが最初のマイルストーンです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_with_sensecap_lorawan_sensors/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しくはこちら</font></span></strong></a>
</div>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)に分類されています。私たちはユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに尽力しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33960915)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの生成にご協力いただけると幸いです。

## SenseCAP技術サポート

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>