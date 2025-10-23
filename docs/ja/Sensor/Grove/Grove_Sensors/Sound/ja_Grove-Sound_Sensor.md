---
title: Grove - サウンドセンサー
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor/
slug: /ja/Grove-Sound_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)

Grove - サウンドセンサーは、環境の音の強度を検出することができます。このモジュールの主な構成要素は、L358アンプとエレクトレットマイクを基にしたシンプルなマイクです。このモジュールの出力はアナログであり、Seeeduinoによって簡単にサンプリングおよびテストすることができます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="{200}" height="{38}" border="{0}" /></a></p>

## 特徴

* 簡単に使用可能
* アナログ出力信号を提供
* Grove回路の入力側でロジックモジュールと簡単に統合可能

:::warning
    このサウンドセンサーは、周囲に音があるかどうかを検出するためのものであり、音声信号を収集するためのものではありません。例えば、音声制御ランプを作ることはできますが、録音デバイスとして使用することはできません。
:::

## 仕様

|項目|値|
|-----|------|
|動作電圧範囲| 5 V |
|動作電流(Vcc=5V)|4~5 mA|
|電圧増幅(V=6V, f=1kHz)|26 dB|
|マイク感度(1kHz)|-60~-56dBV/Pa|
|マイクインピーダンス|2.2k Ohm|
|マイク周波数|16-20 kHz|
|マイクS/N比|54 dB|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

* **ステップ 1.** 以下のものを準備してください：

|Seeeduino V4.2| Base Shield|Grove-Sound Sensor|
|--------------|------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **ステップ 2.** Grove-Sound SensorをGrove-Base Shieldのポート**A0**に接続します。
* **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
* **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/1_connect.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-Sound SensorをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| A1            | 白                     |
| A0            | 黄色                   |

**ソフトウェア**

* **ステップ 1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
// Grove - Sound Sensorのテストコード
// loovee @ 2016-8-30

const int pinAdc = A0;

void setup()
{
    Serial.begin(115200);
    //Serial.println("Grove - Sound Sensor Test...");
}

void loop()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    Serial.println(sum);
    delay(10);
}

```

* **ステップ 2.** **Serial > Plotter**をクリックして、センサーの変化する曲線を確認します。音を立てて値の変化を確認してください。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/sound_raw.png)

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Sound SensorをBase ShieldのポートA0に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[ArduinoでのCodecraftの使い方ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開いてください。

![cc](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/cc_Sound_Sensor.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、Serial Monitorに音の値が表示されます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

* **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Sound Sensor|
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **ステップ 2.** Grove Base HatをRaspberryに差し込みます。
* **ステップ 3.** Grove - Sound SensorをBase HatのポートA0に接続します。
* **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/Sound_Hat.jpg)

:::note
    ステップ3では、**任意のアナログポート**にサウンドセンサーを接続できますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用してください。
:::

* **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
* **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_sound_sensor.py 0

```

以下はgrove_sound_sensor.pyコードです。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSoundSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def sound(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveSoundSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSoundSensor(int(sys.argv[1]))

    print('Detecting sound...')
    while True:
        print('Sound value: {0}'.format(sensor.sound))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0 
Detecting sound...
Sound value: 499
Sound value: 525
Sound value: 529
Sound value: 493
Sound value: 457
Sound value: 457
Sound value: 503
Sound value: 537
Sound value: 606
Sound value: 614
Sound value: 661
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

:::note
        アナログポートについて、シルクスクリーンのピン番号が **A1, A0** のようになっていることに気付いたかもしれませんが、コマンドでは **0** や **1** といったパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続するようにしてください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

**ハードウェア**

* **ステップ 1.** 以下のものを準備してください:

| Raspberry pi | GrovePi_Plus|Grove-Sound Sensor|Grove-Blue LED|
|--------------|-------------|-----------------|----------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/groveblue%20led.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[今すぐ購入](https://www.seeedstudio.com/Grove---Blue-LED-p-1139.html)|

* **ステップ 2.** GrovePi_Plus を Raspberry に接続します。

* **ステップ 3.** Grove-Sound Sensor を GrovePi_Plus の **A0** ポートに接続し、Grove-Blue LED を GrovePi_Plus の **D5** ポートに接続します。

* **ステップ 4.** USB ケーブルを使用して Raspberry を PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/2_connect.jpg)

**ソフトウェア**

* **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成してください。

* **ステップ 2.** [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って GrovePi の最新ファームウェアを更新してください。

:::note
     **Raspberry Pi with Raspberrypi OS >= Bullseye** を使用している場合は、**Python3** のみを使用してこのコマンドラインを実行する必要があります。
:::

:::tip
    この Wiki では **~/GrovePi/** のパスを使用していますが、**/home/pi/Desktop/GrovePi** の代わりに使用しています。ステップ 2 とステップ 3 で同じパスを使用する必要があります。
:::

:::note
    ファームウェアを更新することを強くお勧めします。そうしないと、一部のセンサーでエラーが発生する可能性があります。
:::

* **ステップ 3.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* **ステップ 4.** デモのディレクトリに移動します。

```
cd yourpath/GrovePi/Software/Python/
```

以下は grove_sound_sensor.py のコードです。

```python

#!/usr/bin/env python
#
# GrovePi Example for using the Grove Sound Sensor and the Grove LED
#
# GrovePi は Raspberry Pi と Grove センサーを接続します。GrovePi の詳細はこちらをご覧ください: http://www.dexterindustries.com/GrovePi
#
# モジュール:
#  https://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor
#  https://www.seeedstudio.com/wiki/Grove_-_LED_Socket_Kit
#
# この例について質問がありますか? フォーラムで質問してください: http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MIT ライセンス (MIT)
Raspberry Pi 用 GrovePi: Grove センサーを Raspberry Pi に接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
このソフトウェアおよび関連文書ファイル (以下「ソフトウェア」) のコピーを取得したすべての人に対し、以下の条件に従い、ソフトウェアを制限なく使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および非侵害の保証が含まれますが、これに限定されません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の行為に起因する請求、損害、またはその他の責任について責任を負いません。
'''

import time
import grovepi

# Grove Sound Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
sound_sensor = 0

# Grove LED をデジタルポート D5 に接続
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(sound_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

# LED をオンにする閾値 400.00 * 5 / 1024 = 1.95v
threshold_value = 400

while True:
    try:
        # 音量を読み取る
        sensor_value = grovepi.analogRead(sound_sensor)

        # 音が大きい場合は LED を点灯、小さい場合は消灯
        if sensor_value > threshold_value:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("エラー")
```

* **ステップ 5.** デモを実行します。

```
sudo python3 grove_sound_sensor.py
```


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [**Eagle**][Eagle形式の回路図とPCB](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip)
* [**PDF**][PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf)
* [**PDF**][PDF形式のPCB](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf)
* [**データシート**][LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM358.pdf)
* [**Codecraft**][CDCファイル](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove_Sound_Sensor_CDC_File.zip)

## プロジェクト

**マルチタスクIoT Wi-Fiセンサーを作成する**: このチュートリアルでは、インターネット接続センサーを作成し、EnergiaとTI LaunchPadのユニークなマルチタスク機能を活用する方法を紹介します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adrianf/create-a-multi-tasking-iot-wi-fi-sensor-9d7fdf/embed' width='350'></iframe>

**Wio-LinkとNode-Redを使用したLEDサウンドメーター**: SeeedStudio GroveサウンドセンサーとLEDストリップをWio-Linkに接続し、Node-Redフローで制御します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

**Groveモジュールのサウンドセンサー**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/N19VfMYyn60" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NfFlz8KEFxw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢です。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>