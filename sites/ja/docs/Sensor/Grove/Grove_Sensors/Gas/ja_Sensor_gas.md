---
description: センサー - ガス
title: センサー - ガス
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_Gas_Sensor_Selection_Guide
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg" alt="pir" width={600} height="auto" /></p>


ガスセンサーは、環境中に存在するさまざまな有毒および可燃性ガスの存在を検出することができるデバイスです。

## 動作原理

試験ガスと感知表面との相互作用は、抵抗、静電容量、仕事関数、質量、光学特性などの変化を測定することで検出できます。以下の表は出典[^1]から引用したものです。

| ガスセンサーの分類          | 動作原理                                                                                                                                                                                                 |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 電気化学式                 | 電流、電圧、静電容量/インピーダンスの変化: 1. ボルタンメトリー（アンペロメトリーを含む） 2. ポテンショメトリー 3. 化学的に感知された電界効果トランジスタ 4. 固体電解質を用いたガス感知のポテンショメトリー |
| 電気式                     | 金属酸化物の導電性 有機導電性 電解導電性 ヘテロ接合導電性（ショットキー・ダイオード、FET、MOS） 仕事関数 電気誘電率（静電容量）                                                                 |
| 質量感知式                 | 重さ、振幅、位相または周波数、サイズ、形状、位置の変化: 1. 水晶振動子マイクロバランス 2. 表面音波伝播 3. カンチレバー                                                                                   |
| 磁気式                     | 常磁性ガス特性の変化                                                                                                                                                                                     |
| 光学デバイス               | 光の強度、色、または発光スペクトルの変化: 1. 吸収 2. 反射 3. 発光 4. 屈折率 5. 光熱効果 6. 光散乱（ラマン散乱、プラズモン共鳴）                                                                       |
| 熱測定式（熱量測定式）     | 特定の化学反応の熱効果。温度、熱流、熱内容の変化: 1. 熱電効果 2. 焦電効果 3. 触媒ビーズ（ペリスタ） 4. 熱伝導率                                                                                   |

<div align="center"><b>表1.</b><i>1991年にIUPAC（国際純正・応用化学連合）の分析化学部門によって提案されたガスセンサーの分類</i></div>

[^1]: 出典: I lulanicki et al. (1991)より転載。国際純正・応用化学連合によって出版。

## 応用分野

これらのガスセンサーには多くの用途があります。特に、これらのガスセンサーを使用することで、人々を潜在的な危険から守ることができます。そのため、ガスセンサーは産業、医療、環境、家庭など、毒性ガスや可燃性ガスを監視するさまざまな分野で重要な役割を果たしています。以下の表は出典[^2]からのものです。

| 応用分野                                                      | 機能                                                                                                                                                                                                                                       | 検出されるガスの例                                              |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 環境                                                         | 工業排出物による大気中の有毒ガスの監視（気象観測所、汚染監視）                                                                                                                                                                              | CO、CH4、湿度、CO2、O3、VOCs、SOx                               |
| 作業場の安全                                                 | 室内空気質の管理；作業環境での有毒ガスの監視（例：危険な化学物質を使用する工場）                                                                                                                     | 有毒ガス、可燃性ガス、O2                                        |
| 家庭の安全/家庭用アプリケーション                            | 火災や爆発などの事故による家庭内の有毒ガスや煙の検出；インテリジェント冷蔵庫やオーブン；火災警報；天然ガス暖房；漏れ検出；空気質管理；空気清浄機；調理管理                                            | CO、湿度、CO2、VOCs                                             |
| 車両の安全                                                   | 車両の換気制御；ガソリン蒸気の検出；アルコール呼気検査                                                                                                                                                  | CO、LPG、VOCs、CH4                                              |
| 公共の安全                                                   | 室内空気質の管理；一般市民の安全を脅かす物質の検出                                                                                                                                                      | 有毒ガス、可燃性ガス、引火性ガス、爆発物、O2                     |
| 医療/臨床                                                   | 診断（呼気分析、病気の検出）；患者のポイントオブケアモニタリング；薬物モニタリング；人工臓器や義肢；新薬の発見                                                                                       | O2、NH、NOx、CO2、H2S、H2、CL2、麻酔ガス                        |
| 農業                                                         | 植物/動物の診断；土壌および水の検査；肉/家禽の検査；廃棄物/下水の監視                                                                                                                                  | アミン、湿度、CO                                                |
| 食品品質管理                                                 | 食品が腐敗し、消費に適さなくなった際に形成される特定の分子の検出                                                                                                                                       | 湿度、CO2                                                       |
| ユーティリティ/自動車/発電所                                 | エンジンやガスボイラー内のガス濃度を制御し、燃焼プロセスの効率を最大限に高める。発電所にも同様の概念が適用され、燃焼によってエネルギーが生成される                                                     | O2、CO、HCs、NOx、SOx、CO2、H2、HCs                             |
| 産業：石油化学、製鉄/水処理/半導体                           | プロセスの監視と制御；品質管理；作業場の監視；廃棄物流の監視；漏れ警報                                                                                                                                  | HCs、従来の汚染物質、O2、H2、O3、CO2、CL2、CH4、H2S             |
| 防衛/軍事                                                   | 化学、生物、毒性兵器の検出；条約の検証                                                                                                                                                                  | 化学剤、爆発物、推進剤                                           |
| 航空宇宙                                                     | 環境大気中の酸素、有毒ガス、可燃性ガスの監視                                                                                                                                                            | H2、O2、CO3、湿度                                               |
| 交通/トンネル/駐車場                                         | 都市交通の制御と管理；トンネルや地下駐車場での空気質の監視                                                                                                                                              |                                                                 |

<div align="center"><b>表 2.</b><i>ガスセンサーの応用例</i></div>

[^2]: 出典: Taylor (1996)、Stcttcr et al. (2003)、Capone ct al. (2003) などのデータ。HCsは炭化水素、VOCsは揮発性有機化合物を指します。

## Seeed ガスセンサー

当社のバザールにあるすべてのGroveガスセンサーについては、[bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all)をクリックしてご確認ください。

または、**[こちら](https://wiki.seeedstudio.com/ja/gas_sensor_selection/)** をクリックして、表をより見やすくご覧ください。

| 名前 | サムネイル | 対象ガス | ガスセンサーの種類 | 応用分野 | センサー | 検出範囲 | 精度 | 動作電圧 | インターフェース | 購入リンク |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [Grove - Multichannel Gas Sensor V2](https://wiki.seeedstudio.com/ja/Grove-Multichannel-Gas-Sensor-V2/)  | <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png"/>|一酸化炭素 (CO)、二酸化窒素 (NO2)、エチルアルコール (C2H5CH)、揮発性有機化合物 (VOC) など | 電気式 | 環境 | GM102B, GM302B, GM502B, GM702B | / | NA | 3.3V 5V | I2C | [注文する](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html) |
| [Grove - Multichannel Gas Sensor V1](https://wiki.seeedstudio.com/ja/Grove-Multichannel_Gas_Sensor/)  |  <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V1.png"/>|一酸化炭素、二酸化窒素、エタノール、水素、アンモニア、メタン、プロパン、イソブタン | 電気式 | 環境 | MiCS-6814  | CO: 1–1000ppm   NO2: 0.05–10ppm   H2: 10–500ppm   C2H5OH: 1-1000ppm  NH3: 1-500ppm  CH4: >1000ppm  C3H8: >1000ppm  C4H10: >1000ppm | NA | 3.3V 5V | I2C | [注文する](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
| [Grove - Air Quality Sensor v1.3](https://wiki.seeedstudio.com/ja/Grove-Air_Quality_Sensor_v1.3/) |  <img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_Air_Quality_Sensor_small.jpg"/>|アルコール、煙 | 電気化学式 | 環境 | MP503 | 10-1000ppm (アルコール) | NA | 3.3V 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
| [Grove - Alcohol Sensor](https://wiki.seeedstudio.com/ja/Grove-Alcohol_Sensor/) | <img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/achohol.png"/>|アルコール | 電気化学式 | 車内安全、公共の安全 | MQ303A | 20-1000ppm アルコール | NA | 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html) |
| [Grove - CO2 Sensor](https://wiki.seeedstudio.com/ja/Grove-CO2_Sensor/) | <img src="https://files.seeedstudio.com/wiki/Grove-CO2-Sensor/img/45d_small.jpg"/>|CO2 | 電気化学式 | 環境、農業 | MH-Z16 | 0-5000ppm | ±(50ppm +5%) | 5V | UART | [注文する](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html) |
| [Grove - CO2 & Temperature & Humidity Sensor (SCD30)](https://wiki.seeedstudio.com/ja/Grove-CO2_Temperature_Humidity_Sensor-SCD30/) | <img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png"/>|CO2 | 光学デバイス | 環境、農業 | SCD30 | 0-40000ppm | ±(30 ppm + 3%) | 3.3V 5V | I2C | [注文する](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| [Grove - VOC and eCO2 Gas Sensor (SGP30)](https://wiki.seeedstudio.com/ja/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/) | <img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg"/>|VOC、CO2 | 電気式 | 環境、農業 | SGP30 | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V | I2C | [注文する](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html) |
| [Grove - Gas Sensor(MQ2)](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2/) | <img src="https://files.seeedstudio.com/wiki/Grove-Gas-Sensor-MQ2/img/45d_small.jpg"/>|LPG、イソブタン、プロパン、メタン、アルコール、水素、煙 | 電気化学式 | 家庭用安全、職場安全 | MQ2 | LPGとプロパン: 200ppm-5000ppm  ブタン: 300ppm-5000ppm  メタン: 5000ppm-20000ppm  H2: 300ppm-5000ppm  アルコール:100ppm-2000ppm | NA | 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html) |
| [Grove - Gas Sensor(MQ3)](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ3/) | <img src="https://files.seeedstudio.com/wiki/Grove-Gas-Sensor-MQ3/img/45d_small.jpg"/>|アルコールに高感度、ベンゼンに低感度 | 電気化学式 | 車内安全、公共の安全 | MQ3 | アルコール: 0.05-10mg/L | NA | 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html) |
| [Grove - Gas Sensor(MQ5)](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ5/) | <img src="https://files.seeedstudio.com/wiki/Grove-Gas-Sensor-MQ5/img/45d_small.jpg"/>|LPG、天然ガス、都市ガスに高感度、アルコール、煙に低感度 | 電気化学式 | 石油化学、鉄鋼、水処理、半導体、ユーティリティ、自動車、発電所 | MQ5 | 200-10000ppm | NA | 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html) |
| [Grove - Gas Sensor(MQ9)](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ9/) | <img src="https://files.seeedstudio.com/wiki/Grove-Gas-Sensor-MQ9/img/45d_small.jpg"/>|一酸化炭素、CH4、LPGに高感度 | 電気化学式 | 車内安全、石油化学、鉄鋼、水処理、半導体、ユーティリティ、自動車、発電所、家庭用安全 | MQ9 | 一酸化炭素: 20-2000ppm  CH4: 500-10000ppm  LPG: 500-10000ppm | NA | 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html) |
| [Grove - Gas Sensor(O2)](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-O2/) | <img src="https://files.seeedstudio.com/wiki/Grove-Gas-Sensor-O2/images/45d_small.jpg"/>|O2 | 電気化学式 | 車内安全、石油化学、鉄鋼、水処理、半導体、ユーティリティ、自動車、発電所、家庭用安全 | ME2-O2-Ф20 | 0～25%Vol | NA | 3.3V 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-2-p-1541.html) |
| [Grove - HCHO Sensor](https://wiki.seeedstudio.com/ja/Grove-HCHO_Sensor/) | <img src="https://files.seeedstudio.com/wiki/Grove-HCHO-Sensor/img/45d_small.jpg"/>|トルエン、ホルムアルデヒド、ベンゼン、アルコール、アセトン | 電気化学式 | 環境 | WSP2110 | 1～50ppm | NA | 3.3V 5V | アナログ | [注文する](https://www.seeedstudio.com/Grove-HCHO-Sensor-p-1593.html) |
| [Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://wiki.seeedstudio.com/ja/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) | <img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg"/>|IAQ | 電気式 | 環境、家庭用安全 | BME680 | 0-500 | NA | 3.3V 5V | I2C | [注文する](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-BME68-p-3109.html) |

<div align="center"><b>表 3.</b><i>Seeed ガスセンサーカテゴリ</i></div>

## プロジェクト

**スマート作物: 従来の農業にIoTを導入！**: 自然を守ることを使命とし、IoTを活用してHeliumを通じて技術と監視方法を設計・実装します。

**周囲の環境データを確認できるウェブサイト**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>


<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>