---
title: Grove - ラウドネスセンサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Loudness_Sensor/
slug: /ja/Grove-Loudness_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/Loudness%20Sensor_new.jpg)

Grove - ラウドネスセンサーは、環境音を検出するために設計されています。LM2904アンプと内蔵マイクを基に、マイクから受信した高周波信号を増幅およびフィルタリングし、正のエンベロープを出力します。これはArduinoの信号取得に使用されます。出力値は音入力のレベルに依存します。不要な信号の干渉を避けるために、入力信号はモジュール内で2回フィルタリングされます。また、出力ゲインを手動で調整できるネジ式ポテンショメータが搭載されています。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## バージョン

| 製品バージョン               | 変更点                                    | リリース日   |
|------------------------------|-------------------------------------------|---------------|
|Grove-Loudness Sensor V0.9b   | 初期版                                    | 2012年12月    |

## 特徴

- Groveインターフェース
- 簡単に使用可能
- 基本的なGrove要素

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ             | 値/範囲              |
|-----------------------|------------------------|
| 電圧                  | 3.5~10 VDC            |
| 動作周波数            | 5~2000 Hz             |
| 感度                  | -60~-56dBV/Pa         |
| 信号対雑音比          | >58 dB                |
| 出力信号範囲          | アナログ信号 (0-1023) |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-Loudness Sensor |
|----------------|-------------|-----------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **ステップ 2.** Grove-Loudness SensorをGrove-Base Shieldの**A0**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_loudness.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-Loudness SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino | Grove-Loudness Sensor |
|-----------|-----------------------|
| 5V        | 赤                   |
| GND       | 黒                   |
| NC        | 白                   |
| A0        | 黄色                 |

**ソフトウェア**

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```
int loudness;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    loudness = analogRead(0);
    Serial.println(loudness);
    delay(200);
}
```

- **ステップ 2.** シリアルモニターを開いて出力を確認します。センサーに息を吹きかけると大きな変化が見られます。

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_serial.png)

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Loudness Sensor |
|--------------|---------------------------|-------------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ 3.** Grove - Loudness SensorをBase HatのA0ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。
![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/withrpi_basehat.jpg)

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
python grove_loudness_sensor.py 0
```

以下はgrove_loudness_sensor.pyのコードです。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveLoudnessSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveLoudnessSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLoudnessSensor(int(sys.argv[1]))

    print('Detecting loud...')
    while True:
        value = sensor.value
        if value > 10:
            print("Loud value {}, Loud Detected.".format(value))
            time.sleep(.5)

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます：
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_loudness_sensor.py 0
Detecting loud...
Loud value 15, Loud Detected.
Loud value 11, Loud Detected.
Loud value 250, Loud Detected.
Loud value 429, Loud Detected.
Loud value 203, Loud Detected.
Loud value 16, Loud Detected.
Loud value 11, Loud Detected.
^CTraceback (most recent call last):
  File "grove_loudness_sensor.py", line 68, in <module>
    main()
  File "grove_loudness_sensor.py", line 65, in main
    time.sleep(.5)
KeyboardInterrupt
```

このセンサーを使用して音量を検出することができます。++ctrl+c++を押して終了します。

:::note
        アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-Loudness Sensor |
|--------------|--------------|-----------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Loudness Sensor を GrovePi_Plus の **A0** ポートに接続します。
- **ステップ 4.** Raspberry を USB ケーブルを介して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/rpi_loudness.jpg)

**ソフトウェア**

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行して音量をモニタリングします。

```python
cd ~/GrovePi/Software/Python
python grove_loudness_sensor.py
```

以下は `grove_loudness_sensor.py` のコードです。

```python
import time
import grovepi

# Grove Loudness Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
loudness_sensor = 0

while True:
    try:
        # 音量レベルを読み取る
        sensor_value = grovepi.analogRead(loudness_sensor)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **ステップ 4.** 以下のように音量の状態が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_loudness_sensor.py
sensor_value = 135
sensor_value = 23
sensor_value = 196
sensor_value = 258
sensor_value = 98
sensor_value = 131
```

## FAQ

- Q1: Grove-Loudness Sensor と Grove-Sound Sensor の違いは何ですか？
  - A1: Grove-Loudness Sensor には出力ゲインを調整するためのスクリューポテンショメータがあります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove - Loudness Sensor Schematic](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip)
- **[データシート]** [LM2904DR Datasheet](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/LM2904DR.pdf)

## プロジェクト

**ソーラー駆動環境モニタリングキット**: 空気質、音量、湿度、温度をモニタリングするためのソーラー駆動オープンソースキット。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed' width='350'></iframe>

**ダ・ヴィンチ・コード**: アートとエレクトロニクスを組み合わせた作品。アート部分はスケルトンを作成し、中密度繊維板の11層で構成されています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変換できます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢です。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>