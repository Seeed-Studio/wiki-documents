---
description: Grove - 温湿度センサー(SHT31)
title: Grove - 温湿度センサー(SHT31)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TempAndHumi_Sensor-SHT31
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg" /></div>

Grove - 温湿度センサー(SHT31)は、高信頼性、高精度、高速応答、統合型の温度・湿度センサーです。このモジュールで使用されているセンサー（チップ）は、SensirionのCMOSens<sup>®</sup>技術で設計されています。チップは十分に校正、線形化、補償されており、デジタル出力を提供します。

このモジュールの標準精度は、**±2%RH**（相対湿度）および**±0.3°C**（温度）です。このモジュールは3.3Vと5Vの両方に対応しているため、電圧レベルシフターは必要ありません。このモジュールはI<sup>2</sup>Cシリアルバスを使用して通信し、最大1MHzの速度で動作できます。また、この製品をより使いやすくするために、高度に抽象化されたライブラリも提供しています。

センサーの使用は簡単です。[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7)（Arduino互換）の場合、[Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57)を使用してこのブレークアウトボードをメインコントロールボードに接続するだけです。その後、GitHubで提供されているライブラリとサンプル/デモコードを使用してデータを取得できます。Base Shieldなしでアルドゥイーノを使用している場合は、VINピンを5V電圧ピンに、GNDをグラウンドに、SCLをI2Cクロック（アナログ5）に、SDAをI2Cデータ（アナログ4）に接続するだけです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変換できます。Seeedはプロトタイピングをサポートするだけでなく、堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)のSenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのためのすぐに使える体験を提供します。大気質監視のためのより高い性能と堅牢性を持つS2101ワイヤレス温湿度センサーを参照してください。このシリーズには、土壌水分、気温・湿度、光強度、CO2、EC、および8-in-1気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトには、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 産業用センサー</strong></font></td>
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
          <strong>S2101 大気温度・湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - 温湿度センサー(SHT31) V1.0 | 初期版                                                                                                                                                                                    | 2016年1月      |

## 特徴

- 高信頼性、高精度、高速応答時間
- Grove互換で使いやすい
- デジタル出力のために十分に校正、線形化、補償済み
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
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| 入力電圧 (VCC)      | 3.3ボルトまたは5ボルト                                                                                         |
| I/O論理レベル          | VCCに基づく3.3ボルトまたは5ボルト                                                                            |
| 動作電流        | 100 μA                                                                                                       |
| 動作温度    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| 温度センサー範囲 | -40–125 ℃、±0.3°C精度                                                                              |
| 湿度センサー範囲    | 0% - 100%（相対湿度）、±2%精度                                                              |
| センサーチップ              | SHT31([データシート](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| ポート            | I<sup>2</sup>C                                                                                               |
| 重量                   | 4 g（ブレークアウトボード）、パッケージ全体で各9 g                                                   |
| 寸法               | 40（長さ）×20（幅） mm                                                                                      |

## サポートプラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記でサポートされているとして言及されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性の指標です。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。したがって、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - 温湿度センサー(SHT31) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)|

- **ステップ 2.** Grove - Temperature&Humidity Sensor(SHT31) を Grove-Base Shield の I2C ポートに接続します。
- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。
- **ステップ 4.** USB ケーブルで Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg" /></div>

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg" /></div>

:::caution
 使用中はこの製品に触れたり、振動させたりしないでください。そうしないと、測定データの精度に影響します。
:::

:::note
 Grove Base Shield がない場合は、以下のように Grove - Temperature&Humidity Sensor(SHT31) を Seeeduino に直接接続することもできます。
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### ソフトウェア

- **ステップ 1.** Github から[ライブラリ](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。新しいスケッチを開き、以下のコードを新しいスケッチにコピーします。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** **Tool-> Serial Monitor** をクリックして Arduino IDE の **Serial Monitor** を開きます。または ++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定します。すべてが正常に動作すれば、結果が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png" /></div>

### Raspberry Pi で使用する

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp&Hum Sensor(SHT31)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **ステップ 2.** Grove Base Hat を Raspberry に差し込みます。
- **ステップ 3.** Grove - Temperature&Humidity Sensor (SHT31) を Base Hat の **I2C** ポートに接続します。
- **ステップ 4.** USB ケーブルで Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2.** 関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
#Run code
python grove_temperature_humidity_sensor_sht3x.py
#View Code
less grove_temperature_humidity_sensor_sht3x.py
```

以下は grove_temperature_humidity_sensor_sht3x.py のコードです。

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

    def __init__(self, address=0x44, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise ValueError("humidity CRC mismatch")


        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()

```

- このコードを実行します
```

python grove_temperature_humidity_sensor_sht3x.py
```

  すべてが正常に動作すれば、以下の結果を確認できます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/GROVE-fix/SHT3.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。Seeed と Geppeto を使った簡単なモジュラー電子設計です。今すぐ構築してください。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## リソース

- **[EAGLE]** [Grove - Temperature&Humidity Sensor(SHT31) PCB ファイルと PDF 回路図](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[データシート]** [SHT31 センサーデータシート](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[ライブラリ]** [ライブラリとサンプルコード](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[詳細情報]** [Arduino 用 I<sup>2</sup>C ハウツー](https://www.arduino.cc/en/Reference/Wire)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## プロジェクト

**MediaTek オープンソースハードウェア植物健康モニター**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
