---
description: Grove - タッチセンサー
title: Grove - タッチセンサー
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Touch_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/surface.jpg)

Grove - タッチセンサーは、押す操作をタッチ操作に置き換えることができます。このセンサーは、指が近づいたときの静電容量の変化を検出します。つまり、指が直接パッドに触れる場合でも、パッドの近くに留まるだけの場合でも、Grove - タッチセンサーはHIGHを出力します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## 仕様

- 動作電圧: 2.0 - 5.5V
- 動作電流(Vcc=3V): 1.5 - 3.0μA
- 動作電流(VDD=3V): 3.5 - 7.0μA
- 出力応答時間: 60 - 220mS
- 使用チップセット: TTP223-BA6

:::tip
Groveモジュールに関する詳細は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

**オプション機能**

| AHLB                     | TOG         | LPMB       | MOTB         | SLRFTB          | RST       | Q           | OPDO            |
|--------------------------|-------------|------------|--------------|-----------------|-----------|-------------|-----------------|
| 出力アクティブハイ/ロー | トグルモード | 電源モード | 最大オン時間 | サンプリング長 | リセットピン | CMOS出力    | オープンドレインモード |
| V                        | V           | 0          | 1            | 1               | X         | V           | X               |
| アクティブハイ           | 無効         | 低電力     | 無限         | 1.6 msec        | 該当なし   | あり         | 該当なし         |

## はじめに

### Arduinoで遊ぶ

このデモでは、LEDのオン/オフを切り替える方法を紹介します。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove-Touch_Sensor |Grove-LED|
|--------------|-------------|-----------------|-----|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

- **ステップ 2.** Grove-Touch_SensorをGrove-Base Shieldのポート**D2**に接続します。
- **ステップ 3.** Grove-LEDをGrove-Base Shieldのポート**D3**に接続します。
- **ステップ 4.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![with_ardu](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_ardu.jpg)

#### ソフトウェア

- **ステップ 1.** 以下のコードを新しいArduinoスケッチにコピーして貼り付けてください。

```c
const int TouchPin=2;
const int ledPin=3;

void setup() {
    pinMode(TouchPin, INPUT);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorValue = digitalRead(TouchPin);
    if(sensorValue==1)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

**ステップ 2.** LEDのオンとオフを確認してください。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Touch SensorをポートD2に接続し、Grove - Red LEDをBase ShieldのポートD3に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開いてください。

![cc](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/image/cc_Touch_Sensor.png)

プログラムをArduino/Seeeduinoにアップロードしてください。

:::tip
コードのアップロードが完了すると、Touch Sensorに触れるとLEDが点灯します。
:::

### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Touch Sensor|
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **ステップ 2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ 3.** Touch SensorをBase Hatのポート12に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/Touch_Hat.jpg)

:::note
ステップ3では、Touch Sensorを**任意のGPIOポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合、このコマンドラインは**Python3のみ**で使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成してください。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_touch_sensor.py 12

```

以下はgrove_touch_sensor.pyのコードです。

```python

import time
from grove.gpio import GPIO


class GroveTouchSensor(GPIO):
    def __init__(self, pin):
        super(GroveTouchSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_press = None
        self._on_release = None

    @property
    def on_press(self):
        return self._on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_press = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if value:
            if callable(self._on_press):
                self._on_press(dt)
        else:
            if callable(self._on_release):
                self._on_release(dt)

Grove = GroveTouchSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    touch = GroveTouchSensor(int(sys.argv[1]))

    def on_press(t):
        print('Pressed')
    def on_release(t):
        print("Released.")

    touch.on_press = on_press
    touch.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
    すべてが正常に動作すれば、以下の結果が表示されるはずです。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_touch_sensor.py 12
押されました
離されました。
押されました
離されました。
押されました
離されました。
押されました
離されました。
^CTraceback (most recent call last):
  File "grove_touch_sensor.py", line 110, in <module>
    main()
  File "grove_touch_sensor.py", line 106, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、単に `ctrl`+`c` を押してください。

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

<!--false link-->
| Raspberry Pi | GrovePi_Plus | Grove-Touch_Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Touch_Sensor を GrovePi_Plus の **D2** ポートに接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry を PC に接続します。

![with_rpi](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_rpi.jpg)

#### ソフトウェア

:::注意
**Raspberry Pi with Raspberrypi OS >= Bullseye** を使用している場合、このコマンドラインは **Python3** のみで使用してください。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **ステップ 3.** 以下のコマンドを実行してこのセンサーを使用します。ポートを D4 から D2 に変更してください。

```bash
python3 grove_touch_sensor.py
```

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Touch Sensor (https://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)
#
# GrovePi は Raspberry Pi と Grove センサーを接続します。GrovePi の詳細はこちらをご覧ください: http://www.dexterindustries.com/GrovePi
#
# この例について質問がありますか？フォーラムで質問してください: http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MIT ライセンス (MIT)
Raspberry Pi 用 GrovePi: Grove センサーを Raspberry Pi に接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従い、ソフトウェアを制限なく使用、コピー、変更、結合、公開、配布、サブライセンス、および/または販売する権利を無償で許可します。
上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含めるものとします。
本ソフトウェアは「現状のまま」提供され、いかなる種類の保証もなく、明示的または黙示的を問わず、商品性、特定目的への適合性、および非侵害性を含むがこれに限定されない保証もありません。著者または著作権者は、契約、不法行為、またはその他の理由に基づくか否かを問わず、本ソフトウェアまたはその使用またはその他の取引に起因または関連するいかなる請求、損害、またはその他の責任についても責任を負いません。
'''
import time
import grovepi

# Grove Touch Sensor をデジタルポート D2 に接続
# SIG,NC,VCC,GND
touch_sensor = 2

grovepi.pinMode(touch_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(touch_sensor))
        time.sleep(.5)

    except IOError:
        print ("エラー")

```

結果は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/rpi_result.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove-Touch_Sensor 回路図](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip)
- **[PDF]** [TTP223](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/TTP223.pdf)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/resource/Grove_Touch_Sensor_CDC_File.zip)

## プロジェクト

**Grove タッチセンサーを使用して Grove LED を制御する**: Grove タッチセンサーを接続して Grove LED ソケットキットを制御する方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed' width='350'></iframe>

**タッチセンサー Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VFKYYG_hNUE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vPkf4czFQsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>