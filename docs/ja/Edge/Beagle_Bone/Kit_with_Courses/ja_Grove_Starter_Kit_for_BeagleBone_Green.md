---
description: BeagleBone® Green用Groveスターターキット
title: BeagleBone® Green用Groveスターターキット
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Starter_Kit_for_BeagleBone_Green
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_bbg_start_kit.jpg)

BeagleBone® Green用Groveスターターキットは初心者向けのエントリーレベルのキットで、BBGを探索し、革新的なプロジェクトを作成するのに役立ちます。これは、BBGを使用してクールなプロジェクトを開発し、プロトタイプを構築するための初心者に最適な選択肢です。ここでは、BeagleBone® Greenで成功を収めたセンサー、アクチュエーター、シールドのコレクションを紹介します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Starter-Kit-for-SeeedStudio-BeagleBone-Green-p-2526.html)

アプリケーションアイデア
-----------------

BeagleBone® GreenとGroveを使用して素晴らしいプロジェクトを作成したい場合、以下のプロジェクトを参考にしてください。

| **BBG & BBGスターターキットを使用したスマートライトデモ(HA)**                                           | **BBG & BBGスターターキットを使用したIoTアプリケーション**              |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/BBG_starter_kit1.png)                              | ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/图片1.png)  |
| [今すぐ作成！](https://www.seeedstudio.com/recipe/363-smart-light-demo-with-bbg-amp-bbg-start-kit-ha.html) | [今すぐ作成！](https://www.seeedstudio.com/recipe/367-an-iot-application-with-bbg-amp-bbg-start-kit.html)        |

部品リスト
---------

### Grove - I2C ハブ

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2c_hub_b.jpg)

I2C Hub Groveは、Grove I2Cソケットに複数のI2Cデバイスを接続するための拡張Groveモジュールです。

Universal 4 Pin to X2 4 Pinケーブルを使用して、最大7つのI2Cデバイスを接続でき、ほとんどの開発目的をカバーできます。

このモジュールに関する詳細情報を知りたい場合は、[**こちら**](/ja/Grove-I2C_Hub)をクリックしてください。

### Grove - ボタン

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button1.jpg)

この新しいバージョンのボタンGroveには、独立したボタンが1つ含まれており、プルダウン抵抗で構成されています。これにより、マイクロコントローラーでデジタル入力としてすぐに使用できます。このボタンはSIG(D1)ワイヤに信号を送りますが、NC(D2)はこのGroveでは使用されません。

**ボタンスキーマティック**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buttonsch.jpg)

### Grove - I2C ADC

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2C_ADC_01.jpg)

Grove - I2C ADCは、ADC121C021に基づいた12ビット精度のADCモジュールです。

このモジュールは、一定の基準電圧を提供することで、アナログセンサーから収集した値の精度を向上させます。

アドレスが変更可能なため、最大で9つのI2C ADCを同時に使用できます。

また、このモジュールは自動スリープ機能を提供し、消費電力を大幅に削減します。
<!-- このモジュールに関する詳細情報を知りたい場合は、[**こちら**](/ja/Grove-I2C_ADC)をクリックしてください。 -->

### Grove - 温度センサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_temp.jpg)

Grove - 温度センサーは、サーミスタを使用して周囲温度を検出します。

サーミスタの抵抗は、周囲温度が低下すると増加します。

この特性を利用して、周囲温度を計算します。

このセンサーの検出可能範囲は-40〜125ºCで、精度は±1.5ºCです。

Grove - I2C ADC J2ポートに接続する必要があります。
このモジュールに関する詳細情報を知りたい場合は、[**こちら**](/ja/Grove-Temperature_Sensor_V1.2)をクリックしてください。

### Grove - サウンドセンサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Twig-Sound-sensor.jpg)

Grove - サウンドセンサーは、環境の音の強さを検出できます。

このモジュールの主なコンポーネントは、LM358アンプとエレクトレットマイクをベースにしたシンプルなマイクです。

このモジュールの出力はアナログであり、Grove - I2C ADC J2ポートに接続する必要があります。
このモジュールに関する詳細情報を知りたい場合は、[**こちら**](/ja/Grove-Sound_Sensor)をクリックしてください。

### Grove - 3軸デジタル加速度センサー(±16g)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/3-axis_Accelerometer_ADXL345.jpg)

これは、高解像度のデジタル加速度センサーで、最大3.9mg/LSBの解像度と±16gの大きな測定範囲を提供します。

高度な3軸IC ADXL345に基づいています。自由落下検出プロジェクトに実装する際も心配ありません。最大10,000gの衝撃に耐えるほど頑丈です。

同時に、シングルタップとダブルタップを検出するのに十分な敏捷性を備えています。モーション検出、ジェスチャー検出、ロボティクスに最適です。

このモジュールに関する詳細情報を知りたい場合は、[**こちら**](/ja/Grove-3-Axis_Digital_Accelerometer-16g)をクリックしてください。

### Grove - リレー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_relay.jpg)

リレーGroveは、通常開スイッチで、BBGボードよりもはるかに高い電圧と電流を切り替えることができるリレーを制御します。

HIGHに設定すると、LEDが点灯し、リレーが閉じて電流が流れるようになります。

ピーク電圧能力は250Vで、10アンペアです。

:::caution
メイン電圧を扱う際は十分注意してください。不安な場合は、ライセンスを持つ電気技師などの専門家に相談してください。
:::

**リレースキーマティック**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Relaysch.jpg)

### Grove - ブザー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzer1.jpg)

これはシンプルでありながら楽しい Grove モジュールです。

ピエゾはデジタル出力に接続でき、出力が高いときに音を発します。

また、アナログのパルス幅変調出力に接続することで、さまざまな音や効果を生成することもできます。

**Grove ブザー回路図**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzersch.jpg)

### Grove - チェーン可能な RGB LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Chanbalelednb1.jpg)

チェーン可能な RGB LED は、フルカラー光源 LED ドライバーチップである P9813 チップに基づいており、256階調のグレースケールの定電流駆動と変調出力を提供します。

ワイヤ（DATA と CLK）による伝送と内蔵リサイクル機能により、伝送距離を向上させることができます。

<!-- このモジュールについてさらに詳しい情報を知りたい場合は、[**こちら**](/ja/Grove-Chainable_RGB_LED/) をクリックしてください。 -->

### Grove - OLED ディスプレイ 0.96"

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Oled1281281.jpg)

これは、Grove 互換の 4 ピン I2C インターフェースを備えた 16 階調グレースケールの 96×96 ドットマトリックス OLED ディスプレイモジュールです。

Grove - OLED 96 x 96 は、96 x 96 ドットマトリックス OLED モジュール LY120 と SSD1327 ドライバ IC で構成されています。

LCD と比較して、OLED スクリーンは高輝度、自発光、高コントラスト比、薄型設計、広視野角、広い温度範囲、低消費電力など、多くの利点を持っています。

このモジュールについてさらに詳しい情報を知りたい場合は、[**こちら**](/ja/Grove-OLED_Display_0.96inch) をクリックしてください。

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

例
--------

ボード上のプログラムを編集し始めるには、Cloud9 IDE を使用できます。Cloud9 IDE に慣れるための簡単な練習として、BeagleBone® の 4 つのユーザープログラム可能な LED の 1 つを点滅させるシンプルなアプリケーションを作成するのが良いスタートです。

Cloud9 IDE を初めて使用する場合は、この [**リンク**](/ja/BeagleBone_Green) に従ってください。

### Grove - ボタンを BBG で使用する方法

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button_on_bbg.jpg)

**ステップ1:** Grove - UART ソケットを Grove - GPIO ソケットとして設定します。この [**リンク**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html) に従ってください。

**ステップ2:** 右上の "+" をクリックして新しいファイルを作成します。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9_newfile.jpg)

**ステップ3:** 以下のコードを新しいタブにコピー＆ペーストします。

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
# 注意: P9_22(UART2_RXD) を GPIO として使用します。
# Grove ボタンを BeagleBone® Green の UART Grove ポートに接続します。
Button = "P9_22"            # GPIO P9_22
GPIO.setup(Button, GPIO.IN)
 
if __name__== '__main__':
    while True:
        if GPIO.input(Button):
            print "Button is pressed."
            time.sleep(1)
        else:
            print "Button is unstuck."
            time.sleep(1)
```

**ステップ4:** ディスクアイコンをクリックしてファイルを保存し、.py 拡張子を付けて名前を付けます。

**ステップ5:** コードを実行します。

:::note
他の Grove モジュールの使用方法も Grove ボタンと似ています。
:::

リソース
---------

- [Grove Starter kit for BBG サンプルコード](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green から作成されました -->

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>