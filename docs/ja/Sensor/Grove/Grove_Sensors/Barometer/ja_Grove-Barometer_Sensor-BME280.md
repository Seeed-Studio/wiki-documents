---
description: Grove - 気圧センサー(BME280)
title: Grove - 気圧センサー(BME280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Barometer_Sensor-BME280
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg" alt="pir" width={500} height="auto" /></p>

Grove - 温度・湿度・気圧センサー (BME280) は、Bosch BMP280 高精度・低消費電力の湿度、気圧、温度センサーを搭載したブレイクアウトボードです。このモジュールは、温度、大気圧、湿度を正確かつ迅速に測定することができます。また、大気圧は高度によって変化するため、場所のおおよその**高度**も測定できます。このセンサーは、I<sup>2</sup>C（Groveソケット統合）またはSPIバスを介してマイクロコントローラーに接続できます。また、この製品をより簡単に使用できるように、高度に抽象化されたライブラリも提供しています。

BME280はBMP180のアップグレード版であり、BMP180から大幅な改良が加えられています。BME280は、より小型のフットプリント、低消費電力、低ノイズ測定、気圧と温度の高解像度、低RMSノイズ、新たに追加されたSPIバス、より多くの測定モード、高速測定レート、環境干渉に対する新しいフィルターを備えています。大気圧の読み取りは高度と温度の影響を受けるため、補正機能を追加しました。そのため、Grove - 温度・湿度・気圧センサー (BME280) は、正確な温度、大気圧値、湿度、およびおおよその高度データを提供する上で、より信頼性が高くなっています。

センサーの使用は簡単です。[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7)（Arduino互換）を使用する場合、このブレイクアウトボードを[Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57)を使ってI2C Groveコネクタに接続するだけです。その後、GitHubから提供されているライブラリとサンプルコードを使用します。Arduinoを使用する場合は、Base Shield v2.0を使用するか、単にVCCピンを5V電圧ピンに、GNDをグラウンドに、SCLをI2Cクロック（アナログ5）、SDAをI2Cデータ（アナログ4）に接続してください。

主な用途: GPSナビゲーションの強化、屋外/屋内ナビゲーション、天気予報、または正確な大気圧の読み取りを必要とするその他のプロジェクト。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

## 産業用センサーへのアップグレード可能性
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのために、より高性能で堅牢なS2101ワイヤレス温湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空気温度＆湿度</strong></a></td>
    </tr>
  </tbody></table>

## 特徴

-   より正確な温度、大気圧値、湿度、およびおおよその高度データを迅速に取得
-   Grove互換で使いやすい
-   プロジェクトを迅速に構築するための高度に抽象化されたライブラリ

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ                                     | 値                                                                                             |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
| 入力電圧                                      | 3.3Vまたは5V                                                                                     |
| I/O電圧                                       | 3.3Vまたは5V                                                                                     |
| 動作電流                                      | 0.4mA                                                                                            |
| 動作温度                                      | -40 - 85 ℃                                                                                      |
| 大気圧センサー測定範囲                        | 300 - 1100 hPa (1 hPa=100 Pa) ±1.0 hPaの精度                                                     |
| 温度センサー測定範囲                          | -40 - 85 ℃ ±1.0°Cの精度                                                                         |
| 湿度センサー測定範囲                          | 0% - 100% 相対湿度 ±3%の精度                                                                    |
| 測定モード                                    | 圧電＆温度、強制または周期的                                                                     |
| チップ                                        | BME280([データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)) |
| インターフェースバス                          | SPI、I<sup>2</sup>C（いずれかを使用）                                                            |
| 重量                                          | 3.2 g（ブレイクアウトボード用）、9.3 g（各パッケージ全体）                                       |
| 寸法                                          | 40（長さ）× 20（幅）mm                                                                           |
| I2C                                           | 0x76（デフォルト）または0x77                                                                     |

<div class="admonition note">
<p class="admonition-title">注意</p>
<ol><li>インターフェースバスの選択方法については、近日中に説明します。</li>
<li>高度は温度と大気圧の組み合わせで計算されます。高度専用のコンポーネントはありません。</li></ol>
</div>

### 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

-   **SPIはんだ付けパッド**、電圧監視回路。
-   **インターフェースバス選択パッド**、I<sup>2</sup>Cバスを選択するには、2つのパッドをはんだ付けで接続します（デフォルトで接続されています）。SPIバスを選択するには、鋭利なナイフまたははんだごてで2つのパッドを切断します。
-   **スレーブボードアドレス選択パッド**、アドレスの衝突を避けるためにスレーブボードアドレスを選択します。

    - I2Cバスを選択した場合、スレーブボードのデフォルトアドレスは**0x76**（右側の2つのパッドが接続されています）。アドレス**0x77**を使用したい場合は、左側の2つだけを接続し（右側の2つを切断）、はんだ付けします。
<div class="admonition tip">
<p class="admonition-title">ヒント</p>
パッドは鋭利なナイフだけで切断できます。
</div>
    - SPIバスを選択した場合、スレーブボードのデフォルトアドレスは**0x76**（右側の2つのパッドが接続されています）。アドレス**0x77**を使用したい場合は、3つのパッドすべてを切断します。

<div class="admonition note">
<p class="admonition-title">注意</p>
この製品が動作中に触れたり揺らしたり、振動させたりしないでください。これにより干渉が発生し、収集されたデータの精度に影響を与えます。
</div>

### **パッケージ内容**（主要部品）

| 部品名                                                                                                                    | 数量 |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Temp&Humi&Barometer Sensor (BME280)                                                                                            | 1個  |
| [Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1本  |

## はじめに

では、このモジュールを使って基本的な例を実行してみましょう。

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備します：

| Seeeduino V4.2 | ベースシールド| Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **ステップ2.** Grove-Barometer_Sensor-BME280をGrove-Base Shieldのポート**I2C**に接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使ってSeeeduinoをPCに接続します。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### ソフトウェア
**ステップ1.** [ライブラリとサンプルコード](https://github.com/Seeed-Studio/Grove_BME280)をGithubからダウンロードします。

**ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスから直接コードを開きます：File -> Example ->Barometer_Sensor->Barometer_Sensor。

以下がコードです：
```c

/*
 * bme280_example.ino
 * bme280の例スケッチ
 *
 * Copyright (c) 2016 seeed technology inc.
 * ウェブサイト: www.seeedstudio.com
 * 作成者: Lambor
 * 作成日時:
 * 変更履歴:
 *
 * MITライセンス (MIT)
 *
 * このソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得するすべての人に対し、制限なく使用、複製、変更、結合、公開、配布、サブライセンス、販売する権利を無償で許可します。
 * ただし、以下の条件を満たす必要があります：
 *
 * 上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
 *
 * ソフトウェアは「現状のまま」提供され、明示的または暗示的な保証はありません。
 * 商品性、特定目的への適合性、および非侵害性の保証を含むがこれに限定されない。
 * 著者または著作権者は、いかなる請求、損害、またはその他の責任についても責任を負いません。
 * これは、契約、不法行為、またはその他の行為に起因するものであっても、ソフトウェアまたはソフトウェアの使用またはその他の取引に関連するものです。
 */
#include "Seeed_BME280.h"
#include <Wire.h>

BME280 bme280;

void setup()
{
  Serial.begin(9600);
  if(!bme280.init()){
    Serial.println("デバイスエラー！");
  }
}

void loop()
{
  float pressure;

  // 温度を取得して表示
  Serial.print("温度: ");
  Serial.print(bme280.getTemperature());
  Serial.println("C");// オリジナルのArduinoは特殊記号をサポートしていないため、摂氏の単位

  // 大気圧データを取得して表示
  Serial.print("気圧: ");
  Serial.print(pressure = bme280.getPressure());
  Serial.println("Pa");

  // 高度データを取得して表示
  Serial.print("高度: ");
  Serial.print(bme280.calcAltitude(pressure));
  Serial.println("m");

  // 湿度データを取得して表示
  Serial.print("湿度: ");
  Serial.print(bme280.getHumidity());
  Serial.println("%");

  delay(1000);
}

```

**ステップ 4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**ステップ 5.** シリアルモニターを開き、温度、気圧値、高度、湿度を含むセンサーのデータを受信します。

### Wio Terminal (ArduPy) を使ってみる

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Wio Terminal | Grove-Barometer Sensor-BME280 |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **ステップ 2.** Grove-Barometer Sensor-BME280 を Wio Terminal の **I2C** Grove ポートに接続します。

- **ステップ 3.** USB Type-C ケーブルを使用して Wio Terminal を PC に接続します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal 上で ArduPy 開発環境を構成してください。

- **ステップ 2.** ArduPy ファームウェアが Wio Terminal にフラッシュされていることを確認してください。詳細については [**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started) を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-bme280
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-bme280.py` として保存してください：

```python
from arduino import grove_bme280
from machine import LCD
from machine import Sprite
import time

bme280 = grove_bme280()
lcd = LCD()
spr = Sprite(lcd) # バッファを作成

def main():
    spr.createSprite(320, 240)
    while True:
      spr.setTextSize(2)
      spr.fillSprite(spr.color.BLACK)
      spr.setTextColor(lcd.color.ORANGE)
      spr.drawString("BME280 Reading", 90, 10)
      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
      spr.setTextColor(lcd.color.WHITE)
      spr.drawString("- Temperature: ", 20, 50)
      spr.drawString("- Humidity: ", 20, 80)
      spr.drawString("- Pressure: ", 20, 110)

      spr.drawFloat(bme280.temperature, 2, 220,50)
      spr.drawNumber(bme280.humidity, 220,80)
      spr.drawNumber(bme280.pressure, 220,110)
      spr.pushSprite(0,0)
      time.sleep_ms(500)

      print ("\nTemperature: ", bme280.temperature, "C")
      print ("Humidity: ", bme280.humidity, "%")
      print ("Pressure: ", bme280.pressure, "Pa")

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-bme280.py` をわかりやすい場所に保存してください。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-bme280.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
```

- **ステップ 5.** 以下のようにターミナルに値が表示され、Wio Terminal の LCD 画面にも表示されます。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy

Temperature:  29.88 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.91 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.88 C
Humidity:  54 %
Pressure:  100331 Pa
```

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

-  **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_回路図](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
-  **[データシート]** [BME280 データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)
-  **[ライブラリ]** [Grove_BME280 ライブラリ](https://github.com/Seeed-Studio/Grove_BME280) (GitHub)
-  **[参考資料]** [Arduino 用 I<sup>2</sup>C の使い方](https://www.arduino.cc/en/Reference/Wire)

## プロジェクト

**Seeed LoRa IoTea ソリューション**: 茶畑に適用される自動情報収集システムです。これは、スマート農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション