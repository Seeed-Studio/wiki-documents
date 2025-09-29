---
description: Grove - GSR センサー
title: Grove - GSR センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-GSR_Sensor
last_update:
  date: 05/15/2025
  author: Seraphina
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" /></div>

GSR（Galvanic Skin Response、皮膚電気反応）は、皮膚の電気伝導率を測定する方法です。強い感情は交感神経系に刺激を与え、汗腺からの発汗が増加します。Grove - GSR を使用すると、2つの電極を片手の2本の指に取り付けるだけで、このような強い感情を検出することができます。睡眠の質をモニタリングするなど、感情に関連したプロジェクトを作成するのに適しています。

:::caution
Grove-GSR センサーは人の抵抗を測定します。**伝導率ではありません！**
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## バージョン

| 製品バージョン                  | 変更点 | リリース日                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | 初版     | 2013年6月19日     |
| Grove - GSR_Sensor V1.2  | M324PW-TSSOP14 と GND の間に C3 100nf を追加  | 2014年7月31日 |

## 仕様

| パラメータ               | 値/範囲                    |
|-------------------------|--------------------------------|
| 動作電圧       | 3.3V/5V                        |
| 感度             | ポテンショメータで調整可能 |
| 入力信号            | 抵抗、**伝導率ではありません**   |
| 出力信号           | 電圧、アナログ読み取り        |
| 指接触素材 | ニッケル                         |

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備します：

| Seeeduino V4.2 | Base Shield | Grove - GSR |
|----------------|-------------|-------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- ステップ2. Grove-GSRをBase Shieldの**A0**に接続します。
- ステップ3. Base ShieldをSeeeduino-V4.2に差し込みます。
- ステップ4. USBケーブルを使用してSeeeduino-V4.2をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" /></div>

:::note
Base Shieldがない場合でも心配しないでください。センサーはArduinoに直接接続することができます。以下の表に従ってArduinoに接続してください。
:::

| Seeeduino | Grove-GSR Sensor |
|-----------|------------------|
| GND       | 黒              |
| 5V        | 赤              |
| NC        | 白              |
| A0        | 黄色            |

#### ソフトウェア

- ステップ1. 以下のコードをArduino IDEにコピーしてアップロードします。

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           // 10回の測定を平均化してグリッチを除去
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}
```

- ステップ2. GSRセンサーを装着しないでください。
- ステップ3. Arduino IDEの「ツール」->「シリアルプロッタ」をクリックします。
- ステップ4. ドライバーを使用して抵抗を調整し、シリアル出力が最小化されるまで調整します。この時点でのシリアルポートデータを「Serial_calibration」として記録します。
- ステップ5. GSRセンサーを装着します。
- ステップ6. 以下のグラフが表示されます。深呼吸をしてトレンドを確認してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" /></div><br />

**人間の抵抗値** = ((1024 + 2 x Serial_Port_Reading) x 10000)/(Serial_calibration - Serial_Port_Reading)

- 単位はオームです。
- Serial_Port_Readingはシリアルポートに表示される値（0〜1023の間）。
- Serial_calibrationはステップ4で記録した値（抵抗を調整してシリアル出力を最小化した時点のシリアルポートデータ）。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - GSR Sensor |
|--------------|---------------------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3**. Grove - GSR SensorをBase HatのA0ポートに接続します。
- **ステップ4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" /></div>

:::note
ステップ3では、Grove - GSRセンサーを**任意のアナログポート**に接続できますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

- **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構築します。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
nano grove_gsr_sensor.py
```

次に、以下のコードをこのファイルにコピーし、++ctrl+x++を押して終了し保存します。

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

- **ステップ4**. 以下のコマンドを実行してコードを実行します。

```
python grove_gsr_sensor.py 0
```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます。
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

このプログラムを終了するには、`ctrl`+`c`を押してください。

:::note
アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。デジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

## FAQ

**Q1: 出力の単位は何ですか？**

A1: 信号は電圧で測定され、COMポートに(0~1023)として出力されます。

# Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDFをダウンロード](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324データシート](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

## プロジェクト

**eMotion - より良い未来へ**: バイオメトリックセンサー、Heliumプラットフォームのセキュリティ、そしてGoogle Cloudの力を活用して、潜在的な不安状態を明らかにすることができると信じています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>