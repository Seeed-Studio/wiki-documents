---
description: Grove - 温度および湿度センサー(SHT31)
title: Grove - 温度および湿度センサー(SHT31)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TempAndHumi_Sensor-SHT31
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg" /></div>

Grove - 温度＆湿度センサー(SHT31)は、高信頼性、高精度、迅速な応答性を備えた統合型の温度および湿度センサーです。このモジュールに使用されているセンサー（チップ）は、SensirionのCMOSens<sup>®</sup>技術で設計されています。このチップは、デジタル出力用に十分に校正され、線形化され、補正されています。

このモジュールの典型的な精度は、相対湿度に対して**±2%RH**、温度に対して**±0.3°C**です。このモジュールは3.3ボルトおよび5ボルトに対応しており、電圧レベルシフターを必要としません。このモジュールはI<sup>2</sup>Cシリアルバスを使用して通信し、最大1 MHzの速度で動作できます。また、この製品をより簡単に使用できるように、高度に抽象化されたライブラリも提供しています。

センサーの使用は簡単です。[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7)（Arduino互換）を使用する場合、このブレイクアウトボードを[Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57)を介してメインコントロールボードに接続するだけです。その後、GitHubで提供されているライブラリとサンプル/デモコードを使用してデータを取得できます。Base Shieldを使用しないArduinoを使用する場合は、VINピンを5V電圧ピンに、GNDをグラウンドに、SCLをI2Cクロック（アナログ5）、SDAをI2Cデータ（アナログ4）に接続してください。

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温度および湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空気温度＆湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン                          | 変更点                                                                                                                                                                                    | リリース日       |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Grove - Temperature&Humidity Sensor(SHT31) V1.0 | 初版                                                                                                                                                                                       | 2016年1月        |

## 特徴

- 高信頼性、高精度、迅速な応答時間
- Grove互換で使いやすい
- デジタル出力用に十分に校正、線形化、補正済み
- 高度に抽象化された開発ライブラリ
- I2Cアドレス 0x44

:::note
    複数のI2Cデバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| パラメータ                | 値                                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------------|
| 入力電圧 (VCC)           | 3.3ボルトまたは5ボルト                                                                                   |
| I/Oロジックレベル         | VCCに基づき3.3ボルトまたは5ボルト                                                                         |
| 動作電流                 | 100 μA                                                                                                   |
| 動作温度範囲             | -40–125 ℃                                                                                               |
| 温度センサー範囲         | -40–125 ℃、精度 ±0.3°C                                                                                   |
| 湿度センサー範囲         | 0% - 100%(相対湿度)、精度 ±2%                                                                             |
| センサーIC               | SHT31([データシート](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| ポート                   | I<sup>2</sup>C                                                                                           |
| 重量                     | ブレイクアウトボード: 4 g、パッケージ全体: 1個あたり9 g                                                   |
| 寸法                     | 40(長さ)×20(幅) mm                                                                                      |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド |  Grove - 温湿度センサー(SHT31) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)|

- **ステップ 2.** Grove - 温湿度センサー(SHT31)をGrove-Base ShieldのI2Cポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg" /></div>

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg" /></div>

:::caution
 使用中にこの製品に触れたり、揺らしたり、振動させたりしないでください。そうしないと、測定データの精度に影響を与える可能性があります。
:::

:::note
 Grove Base Shieldを持っていない場合でも、以下のようにGrove - Temperature&Humidity Sensor(SHT31)をSeeeduinoに直接接続することができます。
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL           | 黄                  |

#### ソフトウェア

- **ステップ 1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)をGithubからダウンロードします。

- **ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。新しいスケッチを開き、以下のコードを新しいスケッチにコピーします。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("開始...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("温度 = "); 
  Serial.print(temp);
  Serial.println(" C"); // Arduinoのデフォルトでは特殊記号がサポートされていないため、摂氏の単位を明示
  Serial.print("湿度 = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**9600**に設定します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png" /></div>

### Raspberry Piでの使用

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp&Hum Sensor(SHT31)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに接続します。
- **ステップ 3.** Grove - Temperature&Humidity Sensor (SHT31)をBase Hatの**I2C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python grove_temperature_humidity_sensor_sht3x.py 
```

以下は`grove_temperature_humidity_sensor_sht3x.py`のコードです。

```python
import time
from grove.i2c import Bus


def CRC(data):
    crc = 0xff
    for s in data:
        crc ^= s
        for _ in range(8):
            if crc & 0x80:
                crc <<= 1
                crc ^= 0x131
            else:
                crc <<= 1
    return crc


class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x44, bus=None):
        self.address = address

        # I2Cバス
        self.bus = Bus(bus)

    def read(self):
        # 高精度、クロックストレッチング無効
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # 測定時間 < 16 ms
        time.sleep(0.016)

        # 6バイトを読み取る
        # 温度MSB, 温度LSB, 温度CRC, 湿度MSB, 湿度LSB, 湿度CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("温度CRC不一致")
        if data[5] != CRC(data[3:5]):
            raise ValueError("湿度CRC不一致")

        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('摂氏温度: {:.2f} C'.format(temperature))
        print('相対湿度: {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()
```

:::tip
すべてが正常に動作していれば、温度と湿度が表示されます。
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor_sht3x.py 
摂氏温度: 21.48 C
相対湿度: 51.32 %
摂氏温度: 21.47 C
相対湿度: 51.34 %
摂氏温度: 21.46 C
相対湿度: 51.37 %
^CTraceback (most recent call last):
  File "grove_temperature_humidity_sensor_sht3x.py", line 95, in <module>
    main()
  File "grove_temperature_humidity_sensor_sht3x.py", line 91, in main
    time.sleep(1)
KeyboardInterrupt

```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。Seeed と Geppetto を使った簡単なモジュラー電子設計をお試しください。今すぐ構築を始めましょう。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## リソース

- **[EAGLE]** [Grove - 温度＆湿度センサー(SHT31) PCBファイルとPDF回路図](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[データシート]** [SHT31センサー データシート](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[ライブラリ]** [ライブラリとサンプルコード](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[追加資料]** [Arduino用I<sup>2</sup>Cの使い方](https://www.arduino.cc/en/Reference/Wire)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) から作成されました -->

## プロジェクト

**MediaTek オープンソースハードウェア植物健康モニター**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
