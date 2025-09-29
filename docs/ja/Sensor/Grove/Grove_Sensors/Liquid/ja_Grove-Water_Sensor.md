---
description: Grove - 水センサー
title: Grove - 水センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Water_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png" alt="pir" width={600} height="auto" /></p>


水センサーモジュールはGroveシステムの一部です。このセンサーは導電性を測定することで、センサーが乾燥しているか、湿っているか、完全に水に浸かっているかを示します。センサーのトレースには1 MΩの弱いプルアップ抵抗が組み込まれています。この抵抗は、センサーのトレース値を高く保ちますが、水滴がセンサーのトレースを接地されたトレースに短絡させると値が変化します。この回路はArduinoのデジタルI/Oピンで動作するだけでなく、アナログピンを使用して接地トレースとセンサートレース間の水による接触量を検出することもできます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Water Sensor V1.1 | 初期バージョン                                                                                                                                                                                    | 2014年7月      |


## 特徴

- Grove互換インターフェース
- 低消費電力
- 2.0cm x 2.0cmのGroveモジュール
- 高感度

## 応用例

- 降雨検知
- 液体漏れ検知
- タンクのオーバーフロー検知

## 仕様

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
動作温度
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
動作湿度（結露なし）
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、作業を開始する前に「Arduinoの使い方」を確認することを強くお勧めします。
:::
### Arduinoで遊ぶ

#### ハードウェア

モジュールをBasicボードの任意のデジタルピンに接続します。信号ピンの値を取得できます。裸の導電ワイヤに水がある場合、値はLOWになります。それ以外の場合はHIGHになります。

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **ステップ2.** Grove-Base ShieldのD2ポートにWater Sensorを接続します。
- **ステップ3.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合は、以下のようにGrove_Water_SensorをSeeeduinoに直接接続することもできます。
:::
| Seeeduino       | Grove - Water Sensor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 接続なし       | 白                   |
| D2            | 黄色                  |

#### ソフトウェア
- **ステップ1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```
- **ステップ2.** 以下のようにターミナルに出力が表示されます。

```c
1
1
0
0
1
1
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Water SensorをBase ShieldのD2ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png" alt="pir" width={600} height="auto" /></p>

Arduino/Seeeduinoにプログラムをアップロードします。

:::success
    コードのアップロードが完了すると、Serial Monitorで水があるかどうかが確認できます。
:::
### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **ステップ 2**. Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3**. Grove - Water Sensor を Base Hat の A0 ポートに接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルを介して PC に接続します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python grove_water_sensor.py 0
```

以下は grove_water_sensor.py のコードです。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::
```python
pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (most recent call last):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value        
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt
```

このセンサーを使用して水を検知することができます。終了するには ++ctrl+c++ を押してください。

:::note
        アナログポートの場合、シルクスクリーンのピン番号は **A1, A0** のようになっていますが、コマンドでは **0** や **1** のパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続するようにしてください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi と GrovePi_Plus を使用する

#### ハードウェア

- **ステップ 1**. 以下のアイテムを準備します：

| Raspberry pi | GrovePi_Plus | Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **ステップ 2**. GrovePi_Plus を Raspberry に接続します。
- **ステップ 3**. Grove-Water Sensor を GrovePi_Plus の **D2** ポートに接続します。
- **ステップ 4**. Raspberry を USB ケーブルを介して PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1**. [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2**. デモのディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

- **ステップ 3**. コードを確認します：

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Grove Water Sensor をデジタルポート D2 に接続
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **ステップ 4**. デモを実行します。

```
sudo python grove_water_sensor.py
```

- **ステップ 5**. 以下のようにターミナルに出力が表示されます。

```
1
1
0
0
1
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Eagle]** [Grove Water Sensor 回路図](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip)
- **[Library]** [Grove Water Sensor のデモコード](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip)

<!-- この Markdown ファイルは https://wiki.seeedstudio.com/ja/Grove-Water_Sensor/ から作成されました -->

## プロジェクト 

**スマート作物：従来の農業に IoT を導入！**: 自然との使命はそれを保護することです。IoT を活用した技術と監視方法を設計・実装することで、Helium を通じて自然を守ります。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>