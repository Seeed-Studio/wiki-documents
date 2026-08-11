---
description: Grove - GSR センサ
title: Grove - GSR センサ
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-GSR_Sensor
sku: 101020052
last_update:
  date: 1/6/2023
  author: Seraphina
createdAt: '2023-01-06'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Grove-GSR_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" /></div>

GSR は galvanic skin response（皮膚電気反応）の略で、皮膚の電気伝導度を測定する方法です。強い感情は交感神経系を刺激し、その結果として汗腺から分泌される汗の量が増加します。Grove - GSR を使えば、片手の 2 本の指に 2 つの電極を取り付けるだけで、そのような強い感情を検出できます。睡眠の質モニタのような、感情に関連したプロジェクトを作るのに適したおもしろいモジュールです。

:::caution
Grove-GSR センサは人の抵抗値を測定するものであり、導電率を測定するものではありません！
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## バージョン

| 製品バージョン                  |  変更点 | リリース日                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | 初期リリース     |  2013 年 6 月 19 日     |
| Grove - GSR_Sensor V1.2  |M324PW-TSSOP14 と GND 間に C3 100nF を追加  | 2014 年 7 月 31 日 |

## 仕様

| パラメータ               | 値 / 範囲                    |
|-------------------------|--------------------------------|
| 動作電圧       | 3.3V/5V                        |
| 感度             | ポテンショメータで調整可能 |
| 入力信号            | 抵抗値（導電率ではない）   |
| 出力信号           | 電圧（アナログ読み取り）        |
| 指接触部の材質 | ニッケル                         |

:::tip
Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記の対応プラットフォームは、このモジュールのソフトウェアまたは理論上の互換性を示すものです。ほとんどの場合、ソフトウェアライブラリやコード例は Arduino プラットフォーム向けのみ提供しています。考えられるすべての MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduino で遊ぶ

#### ハードウェア

- Step 1. 以下のものを準備します：

| Seeeduino V4.2 | Base Shield |  Grove - GSR|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- Step 2. Grove-GSR を Base Shield の **A0** に接続します。
- Step 3. Base Shield を Seeeduino-V4.2 に挿し込みます。
- Step 4. USB ケーブルを使って Seeeduino-V4.2 を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" /></div>

:::note
Base Shield がなくても心配はいりません。センサは Arduino に直接接続できます。以下の表に従って Arduino と接続してください。
:::

| Seeeduino |Grove-GSR センサ |
|------------------|---------|
| GND              | 黒  |
| 5V               |  赤   |
| NC               | 白  |
| A0               | 黄 |

#### ソフトウェア

- Step 1. 以下のコードを Arduino IDE にコピーしてアップロードします。

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}

```

- Step 2. GSR センサを装着しないでください。
- Step 3. Arduino IDE の Tools -> Serial Plotter をクリックします。
- Step 4. ドライバーを使って抵抗を調整し、シリアル出力が最小になるようにします。このときのシリアルポートのデータを Serial_calibration として記録します。
- Step 5. GSR センサを装着します。
- Step 6. 下図のようなグラフが表示されます。深呼吸をして、トレンドを確認してください。  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" /></div><br />



**Human Resistance（人体の抵抗値）** = ((1024 + 2 x Serial_Port_Reading) x 10000)/(Serial_calibration - Serial_Port_Reading)

- 単位はオームです。 
- Serial_Port_Reading はシリアルポートに表示される値（0～1023 の範囲）です。 
- Serial_calibration は Step 4 で得られた値です（ドライバーを使って抵抗を調整し、シリアル出力が最小になったときのシリアルポートのデータを Serial_calibration とします）。


### Raspberry Pi で遊ぶ（Grove Base Hat for Raspberry Pi 使用）

#### ハードウェア

- **Step 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - GSR センサ|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **Step 2**. Grove Base Hat を Raspberry Pi に挿し込みます。
- **Step 3**. Grove - GSR センサを Base Hat の A0 ポートに接続します。
- **Step 4**. USB ケーブルで Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" /></div>

:::note
Step 3 では、Grove - GSR センサを **任意のアナログポート** に接続できますが、その場合は対応するポート番号に合わせてコマンドを変更してください。
:::

#### ソフトウェア

- **Step 1**. 開発環境を構成するために、[Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って設定します。
- **Step 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
nano grove_gsr_sensor.py

```

その後、次のコードをこのファイルにコピーし、++ctrl+x++ を押して終了・保存します。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **Step 4**. 以下のコマンドを実行してコードを動かします

```

python grove_gsr_sensor.py 0

```

:::tip
すべてが正しく動作していれば、次のような結果が表示されます
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
^CTraceback (most recent call last):
  File "grove_gsr_sensor.py", line 69, in <module>
    main()
  File "grove_gsr_sensor.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

`ctrl`+`c` を押すだけで、このプログラムを終了できます。

:::note
アナログポートでは、シルク印刷のピン番号が **A1, A0** のようになっていることにお気付きかもしれませんが、コマンドではデジタルポートと同様にパラメータ **0** と **1** を使用します。そのため、必ずモジュールを正しいポートに接続してください。そうしないと、ピンの競合が発生する可能性があります。
:::

## FAQ

**Q1: 出力の単位は何ですか？**

A1: 信号は電圧で測定し、COM ポートへ (0~1023) の値として出力します。

# Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDF をダウンロード](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324 データシート](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

## プロジェクト

**eMotion - Towards a Better Future**：私たちは、生体センサー、Helium プラットフォームのセキュリティ、そして Google Cloud の強力な機能を活用することで、起こりうる不安状態を可視化できると考えています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>