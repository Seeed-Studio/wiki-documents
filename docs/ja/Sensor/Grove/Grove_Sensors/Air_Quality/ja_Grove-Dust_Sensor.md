---
description: Grove - ダストセンサー
title: Grove - ダストセンサー
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Dust_Sensor
last_update:
  date: 05/15/2025
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust1.JPG)

このダストセンサーは、環境内の空気質を示す良い指標を提供し、ダスト濃度を測定します。空気中の粒子状物質レベル（PMレベル）は、一定時間内の低パルス占有時間（LPO時間）をカウントすることで測定されます。LPO時間はPM濃度に比例します。このセンサーは空気清浄システムに信頼性のあるデータを提供でき、直径1μmのPMに反応します。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4df5kaaKa6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution

- このセンサーはダスト濃度を測定する際に計量法ではなくカウント法を使用しており、単位は pcs/L または pcs/0.01cf です。
- 以下の警告に注意してください：
  - センサーを直立状態に保ってください。
  - 初回使用時には3分間の予熱時間が必要です。
  - 任意の操作は予期しない損傷を引き起こす可能性があります。
  - 以下のウィジェット（赤い四角でマークされた部分）は工場設定専用です。デフォルト設定を**変更しないでください**。

:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                   | リリース日 |
|------------------------------|-------------------------------------------|---------------|
|Grove-Dust Sensor V1.0        | 初版                                     | 2012年11月    |

## 特徴

- 室内の喘息トリガーとなるタバコの煙やハウスダストを安定して感知。
- 内蔵ヒーターによる空気生成機構で空気を自動吸引。
- 簡単なメンテナンス。高感度が長期間持続。
- 1ミクロン以上および約2.5ミクロン以上の粒子サイズに対応するデュアル出力。
- よりコンパクトで軽量、簡単に設置可能。

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

|項目| 規格| 単位 |
|----|-----|-------|
|VCC | 4.75~5.75| V    |
|待機時電流供給| 90| mA|
|濃度の検出範囲| 0~28,000 / 0 ~ 8000 | pcs/liter / pcs/0.01cf|
|動作温度範囲| 0~45| °C|
|出力方式| 負論理、デジタル出力、高: 4.0V以上(Rev.2)、低: 0.7V以下|-|
|検出可能な粒子径| >1 |μm|
|寸法| 59(W) × 45(H) × 22(D) |mm|
|湿度範囲| 95% rh以下|-|

:::note
最新バージョンでは、出力の高電圧が4.0Vから4.5Vに変更されています。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## アプリケーションアイデア

- 空気清浄機
- 空気質モニター
- エアコン
- 換気装置

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **ステップ2.** Grove-Dust SensorをGrove-Base Shieldの**D8**ポートに接続します。
- **ステップ3.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/seeeduino_dust.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Dust SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | 赤             |
| GND       | 黒             |
| NC        | 白             |
| D8        | 黄色           |

**ソフトウェア**

- **ステップ1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```
int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 30000;//サンプル時間30秒
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() 
{
    Serial.begin(9600);
    pinMode(pin,INPUT);
    starttime = millis();//現在の時間を取得
}

void loop() 
{
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms)//サンプル時間が30秒の場合
    {
        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // 0から100の整数パーセンテージ
        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // スペックシートの曲線を使用
        Serial.print(lowpulseoccupancy);
        Serial.print(",");
        Serial.print(ratio);
        Serial.print(",");
        Serial.println(concentration);
        lowpulseoccupancy = 0;
        starttime = millis();
    }
}
```

- **ステップ2.** このプログラムでは、Seeeduinoが30秒間の「ロジック低」の合計時間をサンプリングし、この時間が環境の粉塵密度を示します。シリアルモニターを開くと、PCのシリアルポートからセンサーが検出した空気質の値を取得できます。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Serial.png)

**用語：**

- **"Lowpulseoccupancy"** は、指定された30秒間に検出された低パルス占有時間（LPO時間）を表します。単位はマイクロ秒です。

- **"Ratio"** は、LPO時間が全サンプル時間に占める割合を反映します。

- **"Concentration"** は物理的な意味を持つ数値です。LPO時間を使用して以下の特性グラフから計算されます。
![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Characteristics.jpg)

- 以下はオフィスで測定された粉塵濃度のグラフです：

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Dust_sensor_4.jpg)

夕方には粉塵濃度が非常に低いことがわかりますが、午後には濃度が高くなります。濃度が一定値を超えた場合に閾値を設定することができます。また、センサーをより敏感にしたい場合は、センサーにファンを追加し、Pin5とGroundの間に10kΩの抵抗を追加することができます。詳細については、[A.Jのブログ](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/)をご覧ください。

### Raspberry Piで遊ぶ

**ハードウェア**

- **ステップ1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Dust Sensor を GrovePi_Plus の **D2** ポートに接続します。
- **ステップ 4.** Raspberry を USB ケーブルを介して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/rpi_dust.jpg)

**ソフトウェア**

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してダストを監視します。

```python
cd ~/GrovePi/Software/Python
python grove_dust_sensor.py
```

以下は grove_dust_sensor.py のコードです。

```python
import time
import grovepi
import atexit

atexit.register(grovepi.dust_sensor_dis)

print("ダストセンサーから読み取り中")
grovepi.dust_sensor_en()
while True:
    try:
        [new_val, lowpulseoccupancy] = grovepi.dustSensorRead()
        if new_val:
            print(lowpulseoccupancy)
        time.sleep(5)

    except IOError:
        print("エラー")
```

- **ステップ 4.** 以下のようにダストの状態が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py 
ダストセンサーから読み取り中
14029
2621
1725
1978
2533
1619
```

## 関連プロジェクト

Grove - Dust Sensor を使用して素晴らしいプロジェクトを作りたい場合は、以下のプロジェクトを参考にしてください。

**Air Quality Box**

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Overview0.png)

このセクションでは、Seeeduino と [Grove](https://www.seeedstudio.com/wiki/Grove_System) を使用して作成された IoT デモを紹介します。

近年、環境の空気質に対する関心が高まっています。空気中の微粒子は人々の健康に悪影響を及ぼす可能性があります。通常、環境情報は政府機関から提供されますが、それは都市や地域全体の平均値であり、周囲の環境を正確に反映するものではありません。

[![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)

## FAQs

**Q1: Grove - Dust Sensor (5V ロジック) を Seeeduino Stalker (3.3V ロジック) で使用するにはどうすればよいですか？**

A1: Dust Sensor からの出力信号を 3.3V ロジックにスケールダウンする必要があります。Dust Sensor の出力は、ロジック Low の場合は 0.7V、ロジック High の場合は 4.0V 以上です。出力を 3.3V ロジックに対応させるには、電圧分割器を使用するか、TTL ロジックレベル変換器を使用することができます。

## リソース

- **[データシート]** [Grove-Dust_sensor データシート](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/Grove_-_Dust_sensor.pdf)
- **[データシート]** [Shinyei PPD42NS ダストセンサーの分解 - Tracy Allenによる](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[デモ]** [低コストのネットワーク化されたPM2.5モニターの構築](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- A.J.による
- **[デモ]** [Pickle Jr.の測定 – ファンを取り付けた改造PPD42](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- A.J.による
- **[デモ]** [Shinyei PPD42NSのテスト](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- darell tanによる
- **[デモ]** [空気質モニタリング](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Chris Nafisによる

## プロジェクト

**Air Quality Box**: 周囲の空気質をモニタリング

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed' width='350'></iframe>

**Smart Crops: 従来型農業にIoTを導入！**: 自然を守ることを使命とし、IoTを活用した技術とモニタリング方法を設計・実装します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**LoRa IoTea**: 茶畑に適用される自動情報収集システム。これはインテリジェント農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能性

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>