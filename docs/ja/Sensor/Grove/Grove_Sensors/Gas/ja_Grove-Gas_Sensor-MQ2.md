---
description: Grove - ガスセンサー(MQ2)
title: Grove - ガスセンサー(MQ2) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor-MQ2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>



Grove - ガスセンサー(MQ2)モジュールは、ガス漏れ検知（家庭および産業用途）に役立ちます。H2、LPG、CH4、CO、アルコール、煙、またはプロパンを検出するのに適しています。このセンサーは高感度で応答時間が速いため、測定を迅速に行うことができます。センサーの感度はポテンショメーターで調整可能です。

<!-- |Sensor|Gas Type|今すぐ購入取|
|:---:|---|---|
|[MQ2](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2/)|Combustible Gas, Smoke|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ3](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ3/)|Alcohol Vapor|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ5](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ5/)|LPG, Natural Gas, Town Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ9](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ9/)|Carbon Monoxide, Coal Gas, Liquefied Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>ガスタイプ</h4></td>
    <td><h4>今すぐ購入</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃性ガス、煙</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>アルコール蒸気</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>LPG、天然ガス、都市ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>一酸化炭素、石炭ガス、液化ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    [Seeed ガスセンサー選択ガイド](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

## 特徴

- 広い検出範囲
- 安定性が高く、長寿命
- 高速応答と高感度

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| 項目 | パラメータ           | 最小値 | 標準値       | 最大値 | 単位 |
|------|---------------------|-----|------------|-----|------|
| VCC  | 動作電圧           | 4.9 | 5          | 5.1 | V    |
| PH   | 加熱消費電力       | 0.5 | -          | 800 | mW   |
| RL   | 負荷抵抗           |     | 調整可能   |     |      |
| RH   | ヒーター抵抗       | -   | 33         | -   | Ω    |
| Rs   | センサー抵抗       | 3   | -          | 30  | kΩ   |

## 対応プラットフォーム

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>| 

:::caution          
    上記の対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## 応用例

- ガス漏れ検知
- おもちゃ
- IoTアプリケーション
- スマート検知

## 初めての使用方法

ガスセンサーからの出力電圧は、ガス濃度が増加すると増加します。感度はポテンショメータを回すことで調整できます。MQ-2センサーの詳細情報については、**Resources**セクションに記載されているデータシートを参照してください。

:::warning
    センサーの最適な予熱時間は24時間以上です。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のアイテムを準備してください：

| Seeeduino V4.2 | Base Shield| Grove-Gas Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **ステップ2.** Grove-Gas_Sensor-MQ2をGrove-Base ShieldのA0ポートに接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!--connected with arduino-->
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>
上記の画像のように、Grove - Gas Sensor(MQ2)をA0ポートに接続します。

:::note
	Grove Base Shieldがない場合は、以下のようにGrove-Gas_Sensor-MQ2をSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Gas_Sensor-MQ2 |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| 接続なし       | 白                     |
| A0            | 黄色                   |

#### ソフトウェア

いくつかの例があります。以下のコードを新しいArduinoスケッチにコピーして貼り付け、それぞれアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**基本例: ガス検知**

この例では、センサーがA0ピンに接続されています。センサーから読み取った電圧が表示されます。この値は、ガス濃度の増減を検知するための閾値として使用できます。

```cpp
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

**測定: 概算**

これらの例は、ガス濃度の概算を知る方法を示しています。MQxセンサーのデータシートによると、これらの方程式は標準条件でテストされており、校正されていません。温度や湿度の変化によって異なる場合があります。

:::note
    ガスセンサーを清浄な空気環境に置いてください。
:::

```c
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; // 清浄な空気中でRSの値を取得
    float R0;  // H2中でR0の値を取得
    float sensorValue;

  // 100回のテストで平均データを取得
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // * RLを省略
    R0 = RS_air/9.8; // グラフから清浄な空気中でのRS/R0比率は9.8 (WebPlotDigitizerを使用して取得)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

次に、Arduino IDEのシリアルモニターを開きます。R0の値を記録し、次のプログラムで使用します。読み取り値が安定した後にR0を記録してください。

:::warning
    以下のR0を上記でテストしたR0の値に置き換えてください。
:::

センサーを上記のいずれかのガスにさらしてください。

```c
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // ガス中でのRS値を取得
    float ratio; // RS_GAS/RS_airの比率を取得
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // * RLを省略

          /*-最初のテストのデモでのR0の値に名前"R0"を置き換えてください-*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

さて、以下の図からガスの濃度を取得することができます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png" alt="pir" width={600} height="auto" /></p>

グラフによると、テスト可能な最小濃度は100ppm、最大濃度は10000ppmであることがわかります。つまり、ガス濃度は0.01%から1%の間で取得できます。ただし、比率と濃度の関係が非線形であるため、公式を提供することはできません。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)
#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの:

| Raspberry Pi | Grove Base Hat for RasPi | Grove-Gas_Sensor-MQ2 |
|--------------|---------------------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **ステップ 2**. Grove Base HatをRaspberry Piに接続します。
- **ステップ 3**. Grove-Gas Sensor MQ2をBase HatのA0ポートに接続します。
- **ステップ 4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
ステップ3では、Grove-Gas Sensor MQ2を**任意のアナログポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構築します。
- **ステップ 2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。
```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを書きます。
```sh
cd grove.py/grove
nano grove_gas_sensor_mq2.py
```

次に、以下のコードをこのファイルにコピーし、++ctrl+x++を押して終了し保存します。

```python
import math
import sys
import time
from grove.adc import ADC

class GroveGasSensorMQ2:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ2(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ2


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ2(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ2))
        time.sleep(.3)

if __name__ == '__main__':
    main()
```

- **ステップ 4**. 以下のコマンドを実行してコードを実行します。
```sh
python grove_gas_sensor_mq2.py 0
```

:::success
すべてが正常に動作すれば、以下の結果が表示されます。
:::

```sh
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq2.py 0
Detecting...
Gas value: 760
Gas value: 714
Gas value: 675
Gas value: 637
Gas value: 603
Gas value: 568
Gas value: 535
Gas value: 506
Gas value: 481
Gas value: 464
Gas value: 449
Gas value: 429
Gas value: 413
Gas value: 456
Gas value: 470
Gas value: 440
Gas value: 404
Gas value: 373
Gas value: 352
Gas value: 339
Gas value: 330
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq2.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq2.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

++ctrl+c++を押すだけでこのプログラムを終了できます。

:::note
アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。デジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ 1**. 以下のものを準備します:

| Raspberry Pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|--------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **ステップ 2**. GrovePi_PlusをRaspberry Piに接続します。
- **ステップ 3**. Grove-Gas_Sensor-MQ2をGrovePi_Plusの**A0**ポートに接続します。
- **ステップ 4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<!--wrong link-->
<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構築します。
- **ステップ 2**. Githubリポジトリをクローンします。
```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3**. 以下のコマンドを実行してセンサーを使用します。
```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

以下は日本語に翻訳された内容です：

**grove_gas_sensor.py のコードはこちらです:**

```python
#!/usr/bin/env python
#
# Grove Gas Sensor を使用するための GrovePi の例
#
# GrovePi は Raspberry Pi と Grove センサーを接続します。 GrovePi についての詳細はこちらをご覧ください: http://www.dexterindustries.com/GrovePi
#
# この例について質問がありますか？ フォーラムで質問してください: http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MIT ライセンス (MIT)
Raspberry Pi 用 GrovePi: Grove センサーを Raspberry Pi に接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
このソフトウェアおよび関連するドキュメントファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従って、ソフトウェアを無制限に使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含めるものとします。
このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および権利侵害の保証が含まれますが、これに限定されません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の行為に起因する損害賠償請求、損害、またはその他の責任について責任を負いません。
'''

# 注意:
# ガスセンサーは5種類あります
# MQ2 - 可燃性ガス、煙
# MQ3 - アルコール蒸気
# MQ5 - LPG、天然ガス、都市ガス
# MQ9 - 一酸化炭素、石炭ガス、液化ガス
# O2 - 酸素
# 感度はオンボードのポテンショメータで調整可能です
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# Grove Gas Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # センサー値を取得
        sensor_value = grovepi.analogRead(gas_sensor)

        # ガス密度を計算 - 値が大きいほどガスが濃い
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("エラー")
```

### Wio Terminal (ArduPy) を使ってみる

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください:

| Raspberry Pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。
- **ステップ 3.** Grove-Gas_Sensor-MQ2 を GrovePi_Plus の **A0** ポートに接続します。
- **ステップ 4.** USB ケーブルを使って Raspberry Pi を PC に接続します。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構築します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してセンサーを使用します。

```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

**grove_gas_sensor.py のコードはこちらです:**

```python
#!/usr/bin/env python
#
# Grove Gas Sensor を使用するための GrovePi の例
#
# GrovePi は Raspberry Pi と Grove センサーを接続します。 GrovePi についての詳細はこちらをご覧ください: http://www.dexterindustries.com/GrovePi
#
# この例について質問がありますか？ フォーラムで質問してください: http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MIT ライセンス (MIT)
Raspberry Pi 用 GrovePi: Grove センサーを Raspberry Pi に接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
このソフトウェアおよび関連するドキュメントファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従って、ソフトウェアを無制限に使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含めるものとします。
このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および権利侵害の保証が含まれますが、これに限定されません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の行為に起因する損害賠償請求、損害、またはその他の責任について責任を負いません。
'''
# 注意:
# ガスセンサーは5種類あります
# MQ2 - 可燃性ガス、煙
# MQ3 - アルコール蒸気
# MQ5 - LPG、天然ガス、都市ガス
# MQ9 - 一酸化炭素、石炭ガス、液化ガス
# O2 - 酸素
# 感度はオンボードのポテンショメータで調整可能です
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# Grove Gas Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # センサー値を取得
        sensor_value = grovepi.analogRead(gas_sensor)

        # ガス密度を計算 - 値が大きいほどガスが濃い
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("エラー")
```

### Wio Terminal を使った遊び方 (ArduPy)
#### ハードウェア
- **ステップ 1.** 以下のものを準備してください：

| Wio Terminal | Grove - Gas Sensor(MQ2) |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)|

- **ステップ 2.** Grove - Gas Sensor(MQ2) を Wio Terminal の **A0** Grove ポートに接続します。

- **ステップ 3.** USB Type-C ケーブルを使用して Wio Terminal を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png" alt="pir" width={600} height="auto" /></p>


#### ソフトウェア

- **ステップ 1.** [**ArduPy 入門ガイド**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal 上で ArduPy 開発環境を構築してください。

- **ステップ 2.** ArduPy ファームウェアが Wio Terminal にフラッシュされていることを確認してください。詳細については [**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started) を参照してください。
```sh
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-mq2.py` として保存してください：

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq2 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # バッファを作成

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("MQ2 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq2.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ2 Gas Sensor Reading is: ", mq2.read())

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-mq2.py` をわかりやすい場所に保存してください。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-mq2.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
```
- **ステップ 5.** ガス値がターミナルに以下のように表示され、Wio Terminal の LCD 画面にも表示されます。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
MQ2 Gas Sensor Reading is:  60
MQ2 Gas Sensor Reading is:  61
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  63
MQ2 Gas Sensor Reading is:  66
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  64
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース

<!-- -  **[推奨読書]** [ガスセンサーの選び方](#/How_to_Chose_A_Gas_Sensor) -->
-  **[参考文献]** [LELとは](https://en.wikipedia.org/wiki/Flammability_limit)
-  **[回路図]** [Grove Gas Sensor - EAGLE (回路図と基板) ファイル](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip)
-  **[回路図]** [Grove Gas Sensor - PDF回路図](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Schematic.pdf)
-  **[データシート]** [MQ-2 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/MQ-2.pdf)


## プロジェクト

**ArduinoとMQ2ガスセンサー**: Grove Gas Sensor (MQ2) モジュールは、ガス漏れ検知（家庭および産業用途）に役立ちます。H2、LPG、CH4、COの検知に適しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karimmufte/arduino-and-mq2-gas-sensor-57f98c/embed' width='350'></iframe>

[**果物の熟成を検知する電子鼻**](https://hackaday.io/project/16809-electronic-nose-to-detect-fruit-ripening)

[**ED-E: ホームオートメーションと監視システム**](https://hackaday.io/project/8011-ed-e-home-automation-and-monitoring-system)

**スケーラブルなインテリジェント空気質モニタリングと対応**: Intel Edison Compute Module、Amazon AWS、Kibanaによる可視化、ドローンを使用した空気質モニタリング。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/iot-warriors/scalable-intelligent-air-quality-monitoring-and-response-b72732/embed' width='350'></iframe>

**Octopod: スマートIoTホームオートメーションプロジェクト**: Octopodは、AIとスマートRFIDロックを使用して家庭を監視し、セキュリティを確保するユニークな形状の完全なホームオートメーションシステムです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sakshambhutani2001/octopod-smart-iot-home-automation-project-fa939b/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>