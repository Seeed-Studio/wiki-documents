---
description: Grove - AHT20 I2C 産業グレード温湿度センサー
title: Grove - AHT20 I2C 産業グレード温湿度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png 
slug: /ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" /></div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

AHT20は、リフロー半田付けに適したデュアルロウフラット・リードレスSMDパッケージを内蔵した新世代の温湿度センサーです。AHT20には新しく設計されたASICチップが搭載されており、改良されたMEMS半導体容量式湿度センサーと標準的なオンチップ温度センサーを備えています。AHT20の性能は、Grove - Temperature & Humidity Sensor Pro（AM2302/DHT22）などの前世代の温湿度センサーと比較して、過酷な環境でもより安定しており、実際、AHT20はほとんどの産業シナリオに適用可能です。

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変換できます。Seeedはプロトタイピングをサポートするだけでなく、堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)のSenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

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
          <strong>S2101 大気温湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 温度測定範囲 -40 ~ 85°C、湿度測定範囲 0 ~ 100% RH
- デジタル出力、Grove I2Cインターフェース
- 優れた長期安定性
- リフロー半田付けに適したSMDパッケージ
- 高速応答と強力な抗干渉能力
- Arduino対応
- 4ピンインターフェース予約済み

## 仕様

|項目|値|
|---|---|
|動作電圧 |DC: 2.0V-5.5V|
|測定範囲（湿度） |0 ~ 100% RH|
|温度範囲| -40 ~ + 85 ℃|
|湿度精度|± 2% RH (25 ℃)|
|温度精度| ± 0.3 ℃|
|分解能| 温度 : 0.01 ℃; 湿度 : 0.024% RH|
|出力インターフェース|Grove I²C インターフェース|
|I2Cアドレス|0x38| -->

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入門ガイド

### 必要な材料

| Seeeduino Lotus V1.1 |Grove-AHT20 温湿度センサー|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/hardware-connection.jpg" /></div>

:::tip
USBケーブル、Grove-AHT20 温湿度センサーインターフェースをSeeeduino Lotus V1.1インターフェースに優しく差し込んでください。そうしないとポートを損傷する可能性があります。
:::

- **ステップ 1.** Grove-AHT20 温湿度センサーをGroveケーブルでSeeeduino Lotus V1.1の**I2C**インターフェースに接続します。

- **ステップ 2.** Seeeduino Lotus V1.1をUSBケーブルでPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行すると、Arduino IDEの**Serial Monitor**画面に結果が表示されます。

### ソフトウェア

:::caution
        Arduinoを初めて使用する場合は、開始前に[Arduino入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/archive/master.zip)をダウンロードします。

- **ステップ 2.** **Seeed_Arduino_AHT20**ファイル全体をコピーして、Arduino IDEライブラリファイルに貼り付けます。

- **ステップ 3.** Arduino IDEで**examples**の**BasicRead**ファイルを開きます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

#### ソフトウェアコード

```cpp
// ARDUINO DEMO FOR GROVE-AHT20
//
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void setup()
{
    Serial.begin(115200);
    Serial.println("AHT20 DEMO");
    AHT.begin();
}

void loop()
{
    float humi, temp;

    int ret = AHT.getSensor(&humi, &temp);

    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temerature: ");
        Serial.println(temp);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }

    delay(100);
}

// END FILE
```

:::tip
  すべてが正常に動作すれば、**Serial Monitor**で以下のような結果を確認できます：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/outcome_aht20.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box' }}>
</div>

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove-AHT20 温湿度センサー |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

- **ステップ 2**. Grove Base HatをRaspberryに差し込みます。
- **ステップ 3**. Grove-AHT20 温湿度センサーをBase Hatの**I2C**ポートに接続します。
- **ステップ 4**. USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
     **Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. 関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```
<Tabs>
  <TabItem value="old" label="旧版" default>

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
nano ~/grove_env/AHT20_demo.py
```

```python 
import time
from grove.i2c import Bus


class GroveTemperatureHumidityAHT20(object):
    def __init__(self, address=0x38, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        self.bus.write_i2c_block_data(self.address, 0x00, [0xac, 0x33, 0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        humidity = data[1]
        humidity <<= 8
        humidity += data[2]
        humidity <<= 4
        humidity += (data[3] >> 4)
        humidity /= 1048576.0
        humidity *= 100

        temperature = data[3] & 0x0f
        temperature <<= 8
        temperature += data[4]
        temperature <<= 8
        temperature += data[5]
        temperature = temperature / 1048576.0*200.0-50.0  # Convert to Celsius

        return temperature, humidity


def main():
    sensor = GroveTemperatureHumidityAHT20()
    while True:
        temperature, humidity  = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()
```

- このコードを実行します

```
python AHT20_demo.py
```

  </TabItem>

  <TabItem value="new" label="新版">

  - **ステップ 3**. 以下のコマンドを実行してコードを実行します。

- 以下は grove_temperature_humidity aht20.py コードを確認するためのものです。

```
less grove_temperature_humidity aht20.py
```


- このコードを実行します
```
python grove_temperature_humidity aht20.py
```

  </TabItem>
</Tabs>


すべてが順調に進めば、以下の現象が見られるでしょう。😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.png" alt="pir" width={600} height="auto" /></p>



## リソース

- **[ZIP]** [Grove-AHT-eagle-file](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip)
- **[PDF]** [Datasheet of AHT20](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/AHT20-datasheet-2020-4-16.pdf)

## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお送りください。
弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

