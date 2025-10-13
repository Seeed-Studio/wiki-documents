---
description: Grove - 湿度センサー
title: Grove - 湿度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Moisture_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div>

この湿度センサーは、土壌の湿度を検知したり、センサー周辺に水があるかどうかを判断するために使用できます。これにより、庭の植物が乾燥しているときに人間に助けを求めることが可能になります。このセンサーは非常に簡単に使用でき、土壌に挿入してデータを読み取るだけです。このセンサーを使用すれば、植物が「今、喉が渇いています。水をください」といったメッセージを送る小さなプロジェクトを作成することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン               | 変更内容                                   | リリース日   |
|------------------------------|-------------------------------------------|---------------|
| Grove - Moisture Sensor V1.4 | 初期版                                    | 2014年6月     |

## 産業用センサーへのアップグレード可能性

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。土壌状態のモニタリングにおいて、より高性能で堅牢なS2105ワイヤレス土壌湿度、温度、ECセンサーをご参照ください。このシリーズには、土壌湿度、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象ステーション用センサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)を試してみてください。

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
          <strong>S2105 土壌湿度 &amp; 温度 &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 土壌抵抗測定に基づく土壌湿度センサー
- 簡単に使用可能
- 2.0 cm x 6.0 cm の Grove モジュール

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

|項目|条件|最小|典型値|最大|単位|
|---|---|---|---|---|---|
|電圧|-|3.3|-|5|V|
|電流|-|0|-|35|mA|
|出力値|センサーが乾燥した土壌にある場合、センサーが湿った土壌にある場合、センサーが水中にある場合|0, 300, 700,|-|300, 700, 950|-|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## 応用アイデア

- 植物園のガーデニング
- 湿度センサー
- 一貫性測定

## はじめに

:::note
Arduino を初めて使用する場合は、開始前に [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

### Arduino で遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove-Moisture Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **ステップ 2.** Grove-Moisture Sensor を Grove-Base Shield のポート A0 に接続します。
- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。
- **ステップ 4.** USB ケーブルを使用して Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg" /></div>

:::note
Grove Base Shield がない場合は、以下のように Grove-Moisture Sensor を Seeeduino に直接接続することもできます。
:::

| Seeeduino       | Grove-Moisture Sensor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 接続なし      | 白                   |
| A0            | 黄色                  |

**ソフトウェア**

- **ステップ 1.** 以下のコードを Arduino IDE にコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // センサーから値を読み取る:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **ステップ 2.** 以下のようにターミナルに湿度が表示されます。

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

**ステップ 1.** Grove - Moisture Sensor を Base Shield のポート A0 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に差し込みます。

**ステップ 3.** USB ケーブルを使用して Seeeduino/Arduino を PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Arduino 用 Codecraft ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできる cdc ファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png" /></div>

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、シリアルモニターに湿度値が表示されます。
:::

### Raspberry Pi で遊ぶ (Raspberry Pi 用 Grove Base Hat を使用)

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの:

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Moisture Sensor |
|--------------|---------------------------|-------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **ステップ 2**. Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3**. Grove - Moisture Sensor を Base Hat の A0 ポートに接続します。
- **ステップ 4**. USB ケーブルを使用して Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg" /></div>

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

以下は `grove_moisture_sensor.py` のコードです。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# MITライセンス (MIT)
#
# Raspberry Pi 用 Grove Base Hat、Grove センサーを接続するために使用。
# 著作権 (C) 2018 Seeed Technology Co.,Ltd.
'''
これは以下のためのコードです:
    - Grove - Moisture Sensor <https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html>`_

例:

    .. code-block:: python

        import time
        from grove.grove_moisture_sensor import GroveMoistureSensor

        # アナログピン 2 (スロット A2) に接続
        PIN = 2

        sensor = GroveMoistureSensor(PIN)

        print('湿度を検出中...')
        while True:
            m = sensor.moisture
            if 0 <= m and m < 300:
                result = '乾燥'
            elif 300 <= m and m < 600:
                result = '湿潤'
            else:
                result = '湿った状態'
            print('湿度値: {0}, {1}'.format(m, result))
            time.sleep(1)
'''
import math
import sys
import time
from grove.adc import ADC

__all__ = ["GroveMoistureSensor"]

class GroveMoistureSensor:
    '''
    Grove Moisture Sensor クラス

    引数:
        pin(int): センサーが接続されているアナログピン/チャネルの番号。
    '''
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def moisture(self):
        '''
        湿度強度値/電圧を取得

        戻り値:
            (int): 電圧 (mV 単位)
        '''
        value = self.adc.read_voltage(self.channel)
        return value

Grove = GroveMoistureSensor


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveMoistureSensor(pin)

    print('湿度を検出中...')
    while True:
        m = sensor.moisture
        if 0 <= m and m < 300:
            result = '乾燥'
        elif 300 <= m and m < 600:
            result = '湿潤'
        else:
            result = '湿った状態'
        print('湿度値: {0}, {1}'.format(m, result))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます:
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_moisture_sensor.py 0
湿度を検出中...
湿度値: 0, 乾燥
湿度値: 1, 乾燥
湿度値: 25, 乾燥
湿度値: 3, 乾燥
湿度値: 0, 乾燥
湿度値: 0, 乾燥
湿度値: 0, 乾燥
湿度値: 0, 乾燥
湿度値: 0, 乾燥
湿度値: 1, 乾燥
^CTraceback (most recent call last):
  File "grove_moisture_sensor.py", line 74, in <module>
    main()
  File "grove_moisture_sensor.py", line 71, in main
    time.sleep(1)
KeyboardInterrupt
```

このセンサーを使用して空気の品質を検出することができます。++ctrl+c++ を押して終了します。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **A1, A0** のように表示されますが、コマンドでは **0** や **1** のようなパラメータを使用します。デジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi と GrovePi_Plus を使用する

**ハードウェア**

- **ステップ 1.** 以下のものを準備します:

| Raspberry Pi | GrovePi_Plus | Grove-Moisture Sensor |
|--------------|--------------|-----------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Moisture Sensor を GrovePi_Plus の **A0** ポートに接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg" /></div>

**ソフトウェア**

- **ステップ 1.** [ソフトウェア設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。
- **ステップ 2.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行して、Grove-Moisture Sensor を使用して土壌の湿度を測定します。

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

以下は `grove_moisture_sensor.py` のコードです。

```python
#  以下は推奨されるセンサー値です:
#   Min  Typ  Max  状態
#   0    0    0    センサーが空気中にある場合
#   0    20   300  センサーが乾燥した土壌にある場合
#   300  580  700  センサーが湿った土壌にある場合
#   700  940  950  センサーが水中にある場合

import time
import grovepi

# Grove Moisture Sensor をアナログポート A0 に接続
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

- **ステップ 4.** 以下のように、ターミナルに湿度が表示されます。

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

### TI LaunchPad を使ってみる

**ハードウェア**

以下のスケッチは、土壌の湿度を測定する簡単なアプリケーションを示しています。このセンサーの出力結果を観察することで、植物が水を必要としているかどうかを知ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg" /></div>

**ソフトウェア**

```c
/*
  Moisture-Sensor
  以下のスケッチは、土壌の湿度を測定する簡単なアプリケーションを示しています。
  センサーの出力結果を観察することで、植物が水を必要としているかどうかを知ることができます。
  回路:
    * Moisture-Sensor をピン 24 (Grove Base BoosterPack の J6 プラグ) に接続
    * 一方のピン (どちらか) をグランドに接続
    * もう一方のピンを +VCC に接続
    * LED のアノード (長い脚) を RED_LED に接続
    * LED のカソード (短い脚) をグランドに接続
  - 注意:
    このサンプルコードはパブリックドメインにあります。
    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* マクロ定義 */
#define CLK 39              /* 4桁ディスプレイのクロックピン */
#define DIO 38              /* 4桁ディスプレイのデータピン */
#define BLINK_LED RED_LED   /* 点滅 LED */
#define MOISTURE_PIN 24     /* 湿度センサーのピン */
#define THRESHOLD_VALUE 300 /* 花に水をやるための閾値 */
#define ON HIGH             /* LED 点灯 */
#define OFF LOW             /* LED 消灯 */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* LED を操作 */

/* グローバル変数 */
TM1637 tm1637(CLK, DIO);    /* 4桁ディスプレイオブジェクト */
int analog_value = 0;       /* 回転角センサーからの値を格納する変数 */
int8_t bits[4] = {0};       /* 値の各桁を格納する配列 */
/* setup() メソッドはスケッチ開始時に一度だけ実行されます */
void setup() {
/* 4桁ディスプレイを初期化 */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* red_led ピンを OUTPUT として宣言 */
    pinMode(BLINK_LED, OUTPUT);
}
/* loop() メソッドは繰り返し実行されます */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* センサーから値を読み取る */
/* 値が閾値より小さい場合、LED を点灯 */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* 使用する際に配列をリセット */
    for(int i = 3; i >= 0; i--) {
/* アナログ値の各桁を取得 */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* 4桁ディスプレイに表示 */
    }
    delay(200);
}
```

## よくある質問 (FAQs)

**Q1: 出力は何を意味しますか？電圧ですか、それともカウントですか？**

A1: 出力は電圧値を意味します。analogRead() を使用すると、5V が 1023 に分割されます。そのため、出力値 = Vout * 1023/5 となります。出力電圧が高いほど、土壌の湿度が高いことを示します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove - Moisture Sensor v1.4 回路図](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip)

## プロジェクト

**AWS IoT を使用した植物モニタリングシステム**: 休暇を計画している場合、dweet.io と AWS IoT を使用して植物の温度と土壌湿度を追跡するための素晴らしいプロジェクトです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>