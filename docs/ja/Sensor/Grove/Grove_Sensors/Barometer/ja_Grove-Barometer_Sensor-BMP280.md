---
description: Grove - 気圧センサー (BMP280)
title: Grove - 気圧センサー (BMP280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Barometer_Sensor-BMP280
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>

**Grove - 気圧センサー (BMP280)** は、Bosch BMP280 高精度・低消費電力デジタル気圧計用のブレークアウトボードです。このモジュールは、**温度**および**気圧**を正確に測定するために使用できます。気圧は高度によって変化するため、場所の概算**高度**も測定することができます。このモジュールは、I<sup>2</sup>C（Groveソケット統合）またはSPIバスを介してマイクロコントローラーに接続できます。また、この製品をより簡単に使用できるように、高度に抽象化されたライブラリも提供しています。

BMP280はBMP180のアップグレード版であり、BMP180から劇的な改善が施されています。BMP280は、より小型のフットプリント、低消費電力、低ノイズ測定、気圧と温度の高解像度、低RMSノイズ、新たに追加されたSPIインターフェース、より多くの測定モード、より高い測定速度、環境干渉に対する新しいフィルターを備えています。気圧の読み取りは高度と温度に影響されるため、ライブラリに補正機能を追加しました。そのため、Grove - 気圧センサー (BMP280) は、正確な温度、気圧値、および概算高度データを提供する上でより信頼性が高くなります。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## 産業用センサーへのアップグレード可能
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズ産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温度・湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、および8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空気温度 &amp; 湿度</strong></a></td>
    </tr>
  </tbody></table>

## 事前読解

**気圧センサーとは何か**および**その仕組み**についての紹介を、事前に読むことを強くお勧めします。これらに詳しくない場合は、ぜひ当社の[ブログ](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/)をご覧ください。

## 特徴

- より正確な温度、気圧値、およびおおよその高度データを取得可能  
- Grove互換で使いやすい  
- プロジェクトを迅速に構築するための高度に抽象化されたライブラリ  

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ                           | 値                                                                                                                         |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 入力電圧                             | 3.3V または 5V                                                                                                             |
| I/O電圧                              | 3.3V または 5V                                                                                                             |
| 動作電流                             | 0.6mA                                                                                                                      |
| 動作温度                             | -40 - 85 ℃                                                                                                                 |
| 有効な圧力測定範囲                   | 300 - 1100 hPa (1 hPa=100 Pa) ±1.0 hPaの精度                                                                               |
| 温度測定精度                         | ±1.0°C                                                                                                                     |
| 測定モード                           | 圧電 & 温度、強制または周期的                                                                                              |
| チップ                               | BMP280 ([データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| 可能なサンプリングレート             | 182 Hz (標準)                                                                                                              |
| インターフェースバス                 | SPI, I<sup>2</sup>C (いずれかを使用)                                                                                       |
| 重量                                 | 3 g (ブレイクアウトボードの場合)                                                                                           |
| 寸法                                 | 40 (幅) × 20 (奥行き) mm                                                                                                   |
| I2Cアドレス                          | 0x77 (デフォルト) または 0x76                                                                                              |

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> 1. インターフェースバスの選択方法については、後ほど説明します。</p>
<p> 2. 高度は温度と気圧の組み合わせによって計算されます。高度専用の部品は使用していません。</p>
</div>

## アプリケーション

- GPSナビゲーションの強化
- 屋外/屋内ナビゲーション
- 天気予報
- 植物管理

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### 必要な材料

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

-   **SPIはんだ付けパッド**、電圧監視回路。
-   **インターフェースバス選択パッド**、I<sup>2</sup>Cバスを選択するには、2つのパッドをはんだ付けで接続します（デフォルトで接続されています）。SPIバスを選択するには、鋭利なナイフまたははんだごてで2つのパッドを切断します。
-   **スレーブボードアドレス選択パッド**、アドレスの衝突を避けるためにスレーブボードアドレスを選択します。

:::tip
      * I2Cバスを選択した場合、スレーブボードのデフォルトアドレスは**0x77**（右側の2つのパッドが接続されています）。アドレス**0x76**を使用したい場合は、左側の2つのみを接続し（右側の2つを切断）、はんだ付けしてください。

      * パッドを切断するには、鋭利なナイフを使用するだけで十分です。

      * SPIバスを選択した場合、スレーブボードのデフォルトアドレスは**0x77**（右側の2つのパッドが接続されています）。アドレス**0x76**を使用したい場合は、3つのパッドすべてを切断してください。
:::
<div class="admonition note">
<p class="admonition-title">注意</p>
この製品が動作中に触れたり揺らしたり、振動させたりしないでください。これにより干渉が発生し、収集されたデータの精度に影響を与える可能性があります。
</div>

**ステップ1.** Grove-Barometer_Sensor-BMP280をGrove-Base Shieldのポート**I2C**に接続します。

**ステップ2.** Grove - Base ShieldをSeeeduinoに差し込み、USBケーブルを介してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldをお持ちでない場合は、以下のようにこのモジュールを[Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino)に直接接続することもできます。
:::
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### ソフトウェア

**ステップ1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_BMP280.git)をGithubからダウンロードします。

**ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスからコードを直接開きます：File -> Example -> bmp280_example -> bmp280_example

**以下がコードです：**

```cpp
/*
 * bmp280_example.ino
 * BMP280の例スケッチ
 *
 * Copyright (c) 2016 seeed technology inc.
 * ウェブサイト: www.seeedstudio.com
 * 作成者: Lambor, CHN
 * 作成日時:
 * 変更履歴:
 *
 * MITライセンス
 *
 * このソフトウェアおよび関連ドキュメントファイル（以下「ソフトウェア」）を取得するすべての人に対し、
 * 無制限で使用、コピー、変更、結合、公開、配布、サブライセンス、または販売する権利を無償で許可します。
 * ただし、以下の条件を満たす必要があります：
 *
 * 上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
 *
 * ソフトウェアは「現状のまま」提供され、明示的または暗示的な保証はありません。
 * 商品性、特定目的への適合性、および非侵害性を含むがこれに限定されない保証も含まれません。
 * 著者または著作権者は、ソフトウェアの使用またはその他の取引に起因するいかなる請求、損害、またはその他の責任についても責任を負いません。
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("デバイスエラー！");
  }
}

void loop()
{
  float pressure;

  // 温度を取得して出力
  Serial.print("温度: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // Arduinoの仕様上、特殊記号はサポートされていないため摂氏の単位を明記

  // 大気圧データを取得して出力
  Serial.print("気圧: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  // 高度データを取得して出力
  Serial.print("高度: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n"); // 出力間に改行を追加

  delay(1000);
}
```

**ステップ 4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**ステップ 5.** シリアルモニターを開き、センサーのデータ（温度、気圧値、高度）を受信します。

:::success
        すべてが正常に動作している場合、結果は以下のように**シリアルポート**に表示されます。
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove-Barometer Sensor BMP280 回路図](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[データシート]** [BMP280 データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[参考資料]**  [Arduino 用 I<sup>2</sup>C の使い方](https://www.arduino.cc/en/Reference/Wire)

## プロジェクト

**BBG (IoT) を使用したインテリジェントアラームシステム**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**スマート作物の監視システム** Netduino 3 WiFi を使用して作物の状態を監視するシステムを設計・構築します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## 技術サポートと製品ディスカッション