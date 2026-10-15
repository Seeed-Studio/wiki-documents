---
description: Grove - 湿度センサー
title: Grove - 湿度センサー
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Moisture_Sensor
sku: 101020008
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/ja/Grove-Moisture_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div>

この湿度センサーは、土壌の水分を検出したり、センサーの周囲に水があるかどうかを判断するために使用できます。これにより、庭の植物がのどが渇いたときに人間に助けを求められるようになります。このセンサーはとても簡単に使うことができ、土に差し込んでデータを読み取るだけです。このセンサーを使えば、「今のどが渇いています。水をください。」といったメッセージを植物から送らせるような小さなプロジェクトを作ることができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                   | リリース日 |
|------------------------------|-------------------------------------------|---------------|
| Grove - Moisture Sensor V1.4 | 初版                                      | 2014年6月     |

## 産業用センサーへのアップグレード

SenseCAP の[S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーへと変換できます。Seeed はプロトタイピングを支援するだけでなく、堅牢な SenseCAP シリーズの[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)によって、プロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズ産業用センサーは、環境センシングにおいて箱から出してすぐに使える体験を提供します。土壌状態のモニタリングには、より高い性能と堅牢性を備えた S2105 ワイヤレス土壌水分・温度・EC センサーを参照してください。このシリーズには、土壌水分、気温・湿度、光強度、CO2、EC、および 8-in-1 気象ステーション用のセンサーが含まれます。次の産業用プロジェクトの成功のために、最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 土壌水分 &amp; 温度 &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 土壌抵抗測定に基づく土壌水分センサー
- 使いやすい
- 2.0 cm X 6.0 cm の Grove モジュール

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

|項目|条件|最小|標準|最大|単位|
|---|---|---|---|---|---|
|電圧|-|3.3|-|5|V|
|電流|-|0|-|35|mA|
|出力値|センサーが乾いた土壌中、センサーが湿った土壌中、センサーが水中|0, 300, 700,|-|300, 700, 950|-|

## 対応プラットフォーム

<table align="center">
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
</table>

:::caution
上記で対応として挙げたプラットフォームは、このモジュールのソフトウェアまたは理論上の互換性を示すものです。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリまたはコード例のみを提供しています。存在しうるすべての MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## 応用例

- 植物ガーデニング
- 水分センシング
- 一貫性測定

## はじめに

:::note
Arduino を扱うのが初めての場合は、始める前に必ず [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::
### PlatformIO で遊ぶ
**ハードウェア**

- **ステップ 1.** 以下のものを準備します：

<table align="center">
  <tr>
    <th>XIAO ESP32 C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove - Soil Moisture Sensor</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881132_3.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
  </tr>
</table>

- **ステップ 2.** Grove-Moisture Sensor を Seeed Studio Grove Base for XIAO の A0 ポートに接続します。
- **ステップ 3.** XIAO を Seeed Studio Grove Base for XIAO に挿し込みます。
- **ステップ 4.** XIAO を USB ケーブルで PC に接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Soil_Moisture_Temperature_Sensor/xiao.jpg" /></div>

**ソフトウェア**

- **ステップ 1.** コードを PlatformIO にコピーします。

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **ステップ 2.** 以下のように、ターミナル上に水分量が表示されるのが確認できます。

```
Moisture = 0
Moisture = 31
Moisture = 48
Moisture = 139
Moisture = 155
Moisture = 124
Moisture = 236
Moisture = 218
Moisture = 215
Moisture = 221
```
製品詳細ページの「Wiki & Learn」セクションには、実用的または芸術的なデモがいくつか掲載されています。
### Arduino で遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備します：

| Seeeduino V4.2 | Base Shield|  Grove-Moisture Sensor |
|--------------|-------------|-----------------| 
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **ステップ 2.** Grove-Moisture Sensor を Grove-Base Shield の A0 ポートに接続します。
- **ステップ 3.** Grove - Base Shield を Seeeduino に挿し込みます。
- **ステップ 4.** Seeeduino を USB ケーブルで PC に接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg" /></div>

:::note
Grove Base Shield がない場合は、以下のように Grove-Moisture Sensor を Seeeduino に直接接続することもできます。
:::

| Seeeduino       | Grove-Moisture Sensor |
|---------------|-------------------------|
| 5V           | 赤                      |
| GND           | 黒                      |
| 未接続        | 白                      |
| A0            | 黄                      |

**ソフトウェア**

- **ステップ 1.** コードを Arduino IDE にコピーしてアップロードします。コードのアップロード方法がわからない場合は、[how to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **ステップ 2.** 以下のように、ターミナル上に水分量が表示されるのが確認できます。

```
Moisture = 0
Moisture = 31
Moisture = 48
Moisture = 139
Moisture = 155
Moisture = 124
Moisture = 236
Moisture = 218
Moisture = 215
Moisture = 221
```

### Codecraft で遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Moisture Sensor を Base Shield の A0 ポートに接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に挿し込みます。

**ステップ 3.** Seeeduino/Arduino を USB ケーブルで PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加して、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**Step 2.** 下の図のようにブロックをドラッグするか、このページの末尾からダウンロードできる cdc ファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png" /></div>

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、Serial Monitor に水分値が表示されます。
:::

### Raspberry Pi で遊ぶ（Grove Base Hat for Raspberry Pi 使用）

#### ハードウェア

- **Step 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi | Grove - Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)

- **Step 2**. Grove Base Hat を Raspberry Pi に接続します。
- **Step 3**. Grove - Moisture Sensor を Base Hat の A0 ポートに接続します。
- **Step 4**. Raspberry Pi を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg" /></div>

#### ソフトウェア

- **Step 1**. 開発環境を構成するには、[Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従います。
- **Step 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3.** 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

以下は grove_moisture_sensor.py のコードです。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
#
# Grove Base Hat for the Raspberry Pi, used to connect grove sensors.
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
'''
This is the code for
    - Grove - Moisture Sensor <https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html>`_

Examples:

    .. code-block:: python

        import time
        from grove.grove_moisture_sensor import GroveMoistureSensor

        # connect to alalog pin 2(slot A2)
        PIN = 2

        sensor = GroveMoistureSensor(PIN)

        print('Detecting moisture...')
        while True:
            m = sensor.moisture
            if 0 <= m and m < 300:
                result = 'Dry'
            elif 300 <= m and m < 600:
                result = 'Moist'
            else:
                result = 'Wet'
            print('Moisture value: {0}, {1}'.format(m, result))
            time.sleep(1)
'''
import math
import sys
import time
from grove.adc import ADC

__all__ = ["GroveMoistureSensor"]

class GroveMoistureSensor:
    '''
    Grove Moisture Sensor class

    Args:
        pin(int): number of analog pin/channel the sensor connected.
    '''
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def moisture(self):
        '''
        Get the moisture strength value/voltage

        Returns:
            (int): voltage, in mV
        '''
        value = self.adc.read_voltage(self.channel)
        return value

Grove = GroveMoistureSensor


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveMoistureSensor(pin)

    print('Detecting moisture...')
    while True:
        m = sensor.moisture
        if 0 <= m and m < 300:
            result = 'Dry'
        elif 300 <= m and m < 600:
            result = 'Moist'
        else:
            result = 'Wet'
        print('Moisture value: {0}, {1}'.format(m, result))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::tip
すべてがうまくいけば、次のような結果が表示されます：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_moisture_sensor.py 0
Detecting moisture...
Moisture value: 0, Dry
Moisture value: 1, Dry
Moisture value: 25, Dry
Moisture value: 3, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 1, Dry
^CTraceback (most recent call last):
  File "grove_moisture_sensor.py", line 74, in <module>
    main()
  File "grove_moisture_sensor.py", line 71, in main
    time.sleep(1)
KeyboardInterrupt

```

このセンサを使って空気の質を検出できます。終了するには ++ctrl+c++ を押します。

:::note
アナログポートの場合、シルク印刷のピン番号は **A1, A0** のようになっていますが、コマンドではデジタルポートと同様にパラメータ **0** と **1** を使用していることにお気付きかもしれません。そのため、モジュールを必ず正しいポートに接続してください。そうしないと、ピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ（GrovePi_Plus 使用）

**ハードウェア**

- **Step 1.** 以下のものを準備します：

| Raspberry pi | GrovePi_Plus | Grove-Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **Step 2.** GrovePi_Plus を Raspberry に接続します。
- **Step 3.** Grove-Moisture Sensor を GrovePi_Plus の **A0** ポートに接続します。
- **Step 4.** Raspberry を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg" /></div>

**ソフトウェア**

- **Step 1.** 開発環境を構成するには、[Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従います。
- **Step 2.** Github リポジトリを git clone します。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Grove-Moisture Sensor を使用して水分を測定するために、以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

こちらが grove_moisture_sensor.py のコードです。

```python
#  Here are suggested sensor values:
#   Min  Typ  Max  Condition
#   0    0    0    sensor in open air
#   0    20   300  sensor in dry soil
#   300  580  700  sensor in humid soil
#   700  940  950  sensor in water


import time
import grovepi

# Connect the Grove Moisture Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        print(grovepi.analogRead(sensor))
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")
```

- **Step 4.** 以下のように、ターミナルに水分値が表示されます。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_moisture_sensor.py
0
90
130
150
160
218
238
```

### TI LaunchPad で遊ぶ

**ハードウェア**

次のスケッチは、土壌中の水分を検知するシンプルなアプリケーションを示しています。これにより、センサの出力結果を観察することで、植物に水やりが必要かどうかを知ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg" /></div>

**ソフトウェア**

```c
/*
  Moisture-Sensor
  The following sketch demonstrates a simple application of sensing
  the moisture of the soil. You can know whether a plant needs water
  or not by observing the results that the sensor outputs.
  The circuit:
    * Moisture-Sensor attached to pin 24 (J6 plug on Grove Base BoosterPack)
    * one side pin (either one) to ground
    * the other side pin to +VCC
    * LED anode (long leg) attached to RED_LED
    * LED cathode (short leg) attached to ground
  - NOTE:
    This example code is in the public domain.
    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* Macro Define */
#define CLK 39              /* 4-digital display clock pin */
#define DIO 38              /* 4-digiral display data pin */
#define BLINK_LED RED_LED   /* blink led */
#define MOISTURE_PIN 24     /* pin of moisture sensor */
#define THRESHOLD_VALUE 300 /* threshold for watering the flowers */
#define ON HIGH             /* led on */
#define OFF LOW             /* led off */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* handle led */

/* Global Varibles */
TM1637 tm1637(CLK, DIO);    /* 4-digital display object */
int analog_value = 0;       /* varible to store the value coming from rotary angle
sensor */
int8_t bits[4] = {0};       /* array to store the single bits of the value */
/* the setup() method runs once, when the sketch starts */
void setup() {
/* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* declare the red_led pin as an OUTPUT */
    pinMode(BLINK_LED, OUTPUT);
}
/* the loop() method runs over and over again */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* read the value from the sensor */
/* if the value is smaller than threshold, turn on led */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
/* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* display by 4-digital display */
    }
    delay(200);
}
```

## よくある質問

**Q1: 出力は何を意味しますか？電圧ですか、それともカウント値ですか？**

A1: 出力は電圧値です。analogRead() を使用すると、5V は 1023 で割られます。したがって、出力値 = Vout * 1023/5 となります。出力電圧が高いほど、土壌の水分量も多くなります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]**[Grove - Moisture Sensor v1.4 回路図](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)

- **[Codecraft]**[CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip)

## プロジェクト

**AWS IoT を使用した植物モニタリングシステム**：休暇を計画している場合、dweet.io と AWS IoT を使用して植物の温度と土壌水分を追跡できる、素晴らしいプロジェクトです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
