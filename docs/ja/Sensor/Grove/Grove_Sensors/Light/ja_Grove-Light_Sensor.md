---
description: Grove - 光センサー
title: Grove - 光センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Light_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg" /></div>

Grove - 光センサーは、フォトレジスタ（光依存抵抗）を統合して光の強度を検出します。光の強度が増加すると、フォトレジスタの抵抗が減少します。基板上のデュアルOpAmpチップLM358は、光の強度に対応する電圧（つまり、抵抗値に基づく）を生成します。出力信号はアナログ値であり、光が明るいほど値が大きくなります。

このモジュールは、光制御スイッチを構築するために使用できます。例えば、昼間にライトを消し、夜間にライトを点灯するスイッチです。

:::caution
光センサーの値は光の強度の概略的な傾向を反映するだけであり、正確なルーメン値を表すものではありません。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センサーとしての即時使用体験を提供します。光強度検出において高性能かつ堅牢性を備えたS2102ワイヤレス光強度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)を試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 Light</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン                  | 変更内容                                                            | リリース日       |
|--------------------------------|--------------------------------------------------------------------|------------------|
| Grove - Light Sensor 1.0       | 初版                                                               | 2013年4月28日    |
| Grove - Light Sensor(P)        | Groveコネクタを背面に移動                                          | 2014年5月15日    |
| Grove - Light Sensor(P) V1.1   | フォトレジスタ5528をLS06-Sに置き換え（Grove - Light Sensor(P)との比較） | 2015年12月31日   |
| Grove - Light Sensor 1.2       | フォトレジスタ5528をLS06-Sに置き換え（Grove - Light Sensor 1.0との比較） | 2016年1月20日    |

## 特徴

* アナログ値出力
* 高い信頼性と感度
* 小型フットプリント

* より広いスペクトルを認識可能

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

### プラットフォームサポート

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## 仕様

|項目|値|
|-----|--------|
|動作電圧|3~5V|
|動作電流|0.5~3 mA|
|応答時間|20-30ミリ秒|
|ピーク波長|540 nm|
|重量|4 g|

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

* ステップ1. 以下のものを準備してください:

| Seeeduino V4 | Base Shield | Grove - Light Sensor | Grove - LED Bar |
|--------------|----------------------|-----------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html)|

* ステップ2. Grove-Light SensorをGrove-Base ShieldのポートA0に接続します。
* ステップ3. Grove-Led BarをGrove-Base ShieldのポートD2に接続します。
* ステップ4. Grove - Base ShieldをSeeeduinoに差し込みます。
* ステップ5. USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/seeeduino_light.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Light SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Light Sensor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                     |
| 接続なし      | 白                     |
| A0            | 黄色                   |

| Seeeduino       | Grove-Led Bar |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| D3            | 白                     |
| D2            | 黄色                   |

#### ソフトウェア

* ステップ1. [Grove-LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar/archive/master.zip)をGithubからダウンロードします。
* ステップ2. [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Seeeduino用のライブラリをインストールします。
* ステップ3. 以下のコードをSeeeduino IDEにコピーしてアップロードします。

```c

#include <Grove_LED_Bar.h>

Grove_LED_Bar bar(3, 2, 0);  // クロックピン、データピン、方向

void setup()
{
  // 初期化は不要
  bar.begin();
  bar.setGreenToRed(true);
}

void loop()
{

  int value = analogRead(A0);
  value = map(value, 0, 800, 0, 10);

  bar.setLevel(value);
  delay(100);
}
```

* ステップ4. LEDバーが光に応じて変化します。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Light SensorをBase ShieldのポートA0に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/cc_Light_Sensor.png" /></div>

Arduino/Seeeduinoにプログラムをアップロードします。

:::tip
コードのアップロードが完了すると、シリアルモニターに明るさの値が表示されます。
:::

### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

* **ステップ1**. このプロジェクトで使用するもの:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Light Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|

* **ステップ2**. Grove Base HatをRaspberryに差し込みます。
* **ステップ3**. Light SensorをBase HatのポートA0に接続します。
* **ステップ4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/Light_Hat.jpg" /></div>

:::note
ステップ3では、Light Sensorを**任意のアナログポート**に接続できますが、対応するポート番号でコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用してください。
:::

* **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
* **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_light_sensor_v1_2.py 0

```

以下はgrove_light_sensor_v1_2.pyのコードです。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLightSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def light(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveLightSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLightSensor(int(sys.argv[1]))

    print('Detecting light...')
    while True:
        print('Light value: {0}'.format(sensor.light))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

:::tip
すべてが正常に動作すれば、周囲の光に対応する以下の結果が表示されるはずです。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_light_sensor_v1_2.py 0
Detecting light...
Light value: 600
Light value: 448
Light value: 267
Light value: 311
Light value: 102
Light value: 82
Light value: 63
Light value: 54
Light value: 49
Light value: 45
Light value: 545
^CTraceback (most recent call last):
  File "grove_light_sensor_v1_2.py", line 67, in <module>
    main()
  File "grove_light_sensor_v1_2.py", line 64, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムは ++ctrl+c++ を押すだけで終了できます。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **A1, A0** のようになっていますが、コマンドでは **0** や **1** のパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続するようにしてください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

* ステップ 1. 以下のものを準備してください:

| Raspberry pi | GrovePi_Plus | Grove - Light Sensor | Grove - Red LED |
|--------------|-------------|-----------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

* ステップ 2. GrovePi_Plus を Raspberry に接続します。
* ステップ 3. Grove-light センサーを GrovePi_Plus の A0 ポートに接続します。
* ステップ 4. Grove-Red LED を GrovePi_Plus の D4 ポートに接続します。
* ステップ 5. USB ケーブルを使用して Raspberry を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/rasp_light.jpg" /></div>

#### ソフトウェア

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

* ステップ 1. [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
* ステップ 2. Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* ステップ 3. 以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python3 grove_light_sensor.py
```

以下は grove_light_sensor.py のコードです。

```python
import time
import grovepi

# Grove Light Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
light_sensor = 0

# LED をデジタルポート D4 に接続
# SIG,NC,VCC,GND
led = 4

# センサーが閾値抵抗を超えた場合に LED をオンにする
threshold = 10

grovepi.pinMode(light_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

while True:
    try:
        # センサー値を取得
        sensor_value = grovepi.analogRead(light_sensor)

        # センサーの抵抗値を K 単位で計算
        resistance = (float)(1023 - sensor_value) * 10 / sensor_value

        if resistance > threshold:
            # HIGH を送信して LED をオンにする
            grovepi.digitalWrite(led,1)
        else:
            # LOW を送信して LED をオフにする
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d resistance = %.2f" %(sensor_value,  resistance))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* ステップ 4. 光センサーが覆われると LED が点灯します。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_light_sensor.py
sensor_value = 754 resistance = 3.57
sensor_value = 754 resistance = 3.57
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 313 resistance = 22.68
sensor_value = 155 resistance = 56.00
sensor_value = 753 resistance = 3.59
```

# Grove - Light Sensor V1.0 用 Eagle ファイル

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Light Sensor(P) V1.0 用 Eagle ファイル

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Light Sensor(P) V1.1 用 Eagle ファイル

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/Grove_Light_Sensor_CDC_File.zip)
* **[Eagle&PDF]** [Grove - Light Sensor V1.0 用 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip)
* **[Eagle&PDF]** [Grove - Light Sensor(P) V1.0 用 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
* **[Eagle&PDF]** [Grove - Light Sensor(P) V1.1 用 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
* **[データシート]** [LS06-MΦ5 参照情報](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf)
* **[データシート]** [LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf)
* **[さらに読む]** シークレットボックス

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png" /></div>

ここでは、Grove - Light Sensor を使用したプロジェクト「シークレットボックス」を紹介します。まず、箱を用意します。紙箱、木箱、どんな箱でも構いません。箱の中に何かを入れます。この箱を「シークレットボックス」と名付けた理由は、誰にも開けられたくないからです。もし誰かが開けたら、アラームで通知されます。

ここでは、Arduino 互換のボードで豊富な機能を備えた LinkIt ONE をコントローラーとして使用します。また、以下のものが必要です：

* [LinkIt ONE](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html)
* Grove - Light Sensor
* Grove - Base Shield
* SIM カード

Grove - Light Sensor を A0 または Base Shield に接続し、Arduino IDE を開いて、以下のコードをコピーして LinkIt ONE にアップロードします。その後、誰かが箱を開けると、光センサーがそれを検知し、SMS を送信します。

```c
// LinkIt ONE 用 Grove スターターキットのデモ
// シークレットボックス

#include <LGSM.h>

char num[20] = "13425171053";           // ここに自分の電話番号を記入
char text[100] = "警告: あなたの箱が開けられました!!";    // 送信したいメッセージ


const int pinLight = A0;                // 光センサーを A0 に接続

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // データが 50 未満の場合、光センサーが箱の中にあると判断
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // 箱の中に入るまで待機
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // 箱が開けられた場合
    {
        Serial.println("箱が開けられました");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM が作動可能です!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS が送信されました");
        }
        else
        {
            Serial.println("SMS の送信に失敗しました");
        }

        while(!isLightInBox());             // 箱の中に戻るまで待機
        delay(2000);
    }

    delay(10);
}
```

楽しんでください。

## プロジェクト

**Grove - 光センサーの紹介**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**環境キューブ！Sigfoxを使用して地面の状態を把握する**: 必要なセンサーをすべて備えたキューブで、農業、モニタリングなど、幅広い用途に適しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**光センサー Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GOROc2f5Xkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>