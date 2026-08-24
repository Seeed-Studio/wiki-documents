---
description: Grove - 気圧センサ (BMP280)
title: Grove - 気圧センサ (BMP280)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BMP280
sku: 101020192
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP280/
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - Barometer Sensor (BMP280)** は、Bosch BMP280 高精度・低消費電力デジタル気圧センサ用のブレークアウトボードです。このモジュールは、**温度**と**気圧**を高精度に測定することができます。気圧は高度によって変化するため、おおよその**高度**も測定できます。I<sup>2</sup>C（Grove ソケット内蔵）または SPI バスを介してマイコンに接続できます。また、この製品をより簡単に使用できるよう、高度に抽象化されたライブラリも提供しています。

BMP280 は BMP180 のアップグレード版であり、BMP180 から大幅に改善されています。BMP280 は、より小さいフットプリント、低消費電力、低ノイズ測定、より高い圧力および温度分解能、より低い RMS ノイズ、新たに追加された SPI インターフェース、より多くの測定モード、より高い測定レート、環境ノイズに対する新しいフィルタを備えています。気圧の読み取り値は高度と温度の影響を受けるため、ライブラリには補正機能を追加しました。そのため、Grove - Barometer Sensor (BMP280) は、より正確な温度・気圧値とおおよその高度データを、より信頼性高く提供できます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## 産業用センサへのアップグレード
SenseCAP の [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサへ変換できます。Seeed はプロトタイピングを支援するだけでなく、堅牢な SenseCAP シリーズの[産業用センサ](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)でプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズ産業用センサは、環境センシングにおいて開封してすぐに使える体験を提供します。空気質モニタリング向けに、より高い性能と堅牢性を備えた S2101 ワイヤレス温湿度センサを参照してください。このシリーズには、土壌水分、気温および湿度、照度、CO2、EC、そして 8-in-1 気象ステーション用のセンサが含まれます。次の産業用プロジェクトの成功のために、最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサ</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody>
</table>


## 事前読書

**気圧センサとは何か**、および**どのように動作するか**の紹介は、まだよく知らない場合は事前に読んでおくことを強くお勧めします。詳しい情報は、当社の[ブログ](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/)をご覧ください。

## 特徴

-   より正確な温度・気圧値とおおよその高度データを取得
-   Grove 互換で使いやすい
-   プロジェクトをより早く構築するための高度に抽象化されたライブラリ

:::tip
     Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::
## 仕様


| パラメータ                            | 値                                                                                                                       |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 入力電圧                        | 3.3V または 5V                                                                                                                  |
| I/O 電圧                          | 3.3V または 5V                                                                                                                  |
| 動作電流                    | 0.6mA                                                                                                                       |
| 動作温度                | -40 - 85 ℃                                                                                                                  |
| 有効気圧測定範囲 | 300 - 1100 hPa（1 hPa = 100 Pa）精度 ±1.0 hPa                                                               |
| 温度測定精度     | ±1.0°C                                                                                                                      |
| 測定モード                    | Piezo & Temperature、強制モードまたは周期モード                                                                                     |
| チップ                                 | BMP280 ([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| 可能なサンプリングレート               | 182 Hz（標準）                                                                                                            |
| インターフェースバス                        | SPI、I<sup>2</sup>C（いずれか一方を使用）                                                                                |
| 重量                               | 3 g（ブレークアウトボード）                                                                                                    |
| 寸法                           | 40（幅）× 20（奥行き）mm                                                                                                  |
| I2C アドレス | 0x77()default または 0x76 |

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> 1. インターフェースバスの選択方法については、まもなく説明/紹介します。</p>
<p> 2. 高度は温度と気圧の組み合わせによって計算されます。高度専用のコンポーネントはありません。</p>
</div>

## 応用例

- GPS ナビゲーションの強化
- 屋外/屋内ナビゲーション
- 天気予報
- 植物管理

## 対応プラットフォーム


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     上記でサポートされていると記載されているプラットフォームは、そのモジュールのソフトウェアまたは理論上の互換性を示すものです。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリまたはコード例のみを提供しています。すべての MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは自分でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduino で遊ぶ

#### 必要な部材

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


-   **SPI はんだ付けパッド**、電圧監視回路。
-   **インターフェースバス選択パッド** 、I<sup>2</sup>C バスを選択するには、2 つのパッドをはんだ付けで接続します（デフォルトで接続されています）。SPI バスを選択するには、鋭利なナイフまたははんだごてで 2 つのパッドを切り離します。
-   **スレーブボードアドレス選択パッド**、アドレスの衝突を避けるためにスレーブボードのアドレスを選択します。

:::tip
      * I2C バスを選択した場合、スレーブボードのデフォルトアドレスは **0x77**（右側 2 つのパッドが接続）です。アドレス **0x76** を使用したい場合は、左側 2 つだけをはんだ付けで接続し（右側 2 つは切り離し）ます。

      * 鋭利なナイフだけでパッドを切り離すことができます。

      * SPI バスを選択した場合、スレーブボードのデフォルトアドレスは **0x77**（右側 2 つのパッドが接続）です。アドレス **0x76** を使用したい場合は、3 つすべてのパッドを切り離します。
:::
<div class="admonition note">
<p class="admonition-title">Note</p>
動作中はこの製品に触れたり、振動させたりしないでください。干渉が発生し、収集されるデータの精度に影響を与えます。
</div>

**ステップ 1.** Grove-Barometer_Sensor-BMP280 を Grove-Base Shield の **I2C** ポートに接続します。

**ステップ 2.** Grove - Base Shield を Seeeduino に挿し、USB ケーブルで Seeeduino を PC に接続します。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.
:::
<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### ソフトウェア

**ステップ 1.** Github から[ライブラリ](https://github.com/Seeed-Studio/Grove_BMP280.git)をダウンロードします。

**ステップ 2.** [How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。


**ステップ 3.** 新しい Arduino スケッチを作成し、以下のコードを貼り付けるか、File -> Example ->bmp280_example->bmp280_example のパスからコードを直接開きます。

**コードは次のとおりです：**

```cpp
/*
 * bmp280_example.ino
 * Example sketch for BMP280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor, CHN
 * Create Time:
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");//add a line between output of different times.

  delay(1000);
}
```

**ステップ 4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[how to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

**ステップ 5.** シリアルモニタを開き、温度、気圧値、高度を含むセンサーのデータを受信します。

:::success
        すべてが正常に動作していれば、結果は次のように **Serial Port** に表示されます。
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## リソース

<!-- - **[Eagle]** [Grove-Barometer Sensor BMP280 Schematic](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip) -->
- **[KiCad]** [Grove-Barometer Sensor (BMP280) v1.0 回路図 (PDF)](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-v1.0_SCH_20260820.pdf)
- **[KiCad]** [Grove-Barometer Sensor (BMP280) v1.0 回路図 & PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-v1.0_SCH-PCB_20260820.zip)
- **[Datasheet]** [BMP280 データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[References]**  [Arduino 用 I<sup>2</sup>C ハウツー](https://www.arduino.cc/en/Reference/Wire)

## プロジェクト

**BBG（IoT）で作るインテリジェント警報システム**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**スマート作物用モニタリングシステム** Netduino 3 WiFi を使用して、作物の状態を監視するシステムを設計・構築します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## 技術サポート & 製品ディスカッション





