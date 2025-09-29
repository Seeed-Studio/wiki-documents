---
description: Grove - Thumb Joystick
title: Grove - Thumb Joystick
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Thumb_Joystick
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - Thumb Joystick
category: Sensor
bzurl: https://seeedstudio.com/Grove-Thumb-Joystick-p-935.html
oldwikiname: Grove_-_Thumb_Joystick
prodimagename: Bgjoy1.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/bgjoy1.jpg
surveyurl: https://www.research.net/r/Grove-Thumb_Joystick
sku: 101020028
tags: grove_analog, io_3v3, io_5v, plat_duino,plat_pi
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg)

Grove - Thumb Joystick は、PS2（PlayStation 2）コントローラーの「アナログ」ジョイスティックに非常に似た Grove 互換モジュールです。X軸とY軸は2つの約10kΩのポテンショメータで構成されており、アナログ信号を生成して2Dの動きを制御します。このジョイスティックには、特別な用途に使用できるプッシュボタンも搭載されています。モジュールが動作モードにあるとき、2つのアナログ値を出力し、それぞれ2つの方向を表します。通常のジョイスティックと比較して、出力値はより狭い範囲（例：200～800）に制限されます。押された場合のみ、X値が1023に設定され、MCUが押された動作を検出できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border={0} /></a></p>

## バージョン

| 製品バージョン                  | 変更点                                                                                                                                                                                    | リリース日       |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Grove - Thumb Joystick V1.1      | 初版                                                                                                                                                                                     | 2016年10月       |

## 仕様

| 項目                                | 最小値 | 標準値 | 最大値 | 単位 |
|-------------------------------------|--------|--------|--------|------|
| 動作電圧                           | 4.75   | 5.0    | 5.25   | V    |
| 出力アナログ値（X座標）             | 206    | 516    | 798    | \    |
| 出力アナログ値（Y座標）             | 203    | 507    | 797    | \    |

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応可能と記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### デモンストレーション

Grove - Thumb Joystickはアナログデバイスで、0から1023までの範囲のアナログ信号を出力します。そのため、Arduinoのアナログポートを使用して値を読み取る必要があります。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Thumb Joystick |
|----------------|-------------|-------------------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **ステップ 2.** Grove - Base Shieldの**`A0`/`A1`**ポートに4ピンのGroveケーブルを使用してモジュールを接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumb_Joystick.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Thumb JoystickをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - Thumb Joystick |
|-----------------|-------------------------|
| 5V              | 赤                     |
| GND             | 黒                     |
| `A1`            | 白                     |
| `A0`            | 黄                     |

#### ソフトウェア

- **ステップ 1.** 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

```c
/*
  Thumb Joystick demo v1.0
  by:https://www.seeedstudio.com
  connect the module to A0&A1 for using;
*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

- **ステップ 2.** シリアルモニターを開いて、出力されるアナログ信号の値を確認できます。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumd_Joystick_Result.jpg)

Arduinoのアナログポートからの出力値は、以下の式を使用して対応する抵抗値に変換できます：  
R=(float)(1023-sensorValue)*10/sensorValue

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Thumb Joystickを Base Shield のポート `A0` に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[CodecraftでArduinoを使用するガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/cc_Thumb_Joystick.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了すると、シリアルモニターにXとYの座標が表示されます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Thumb Joystick |
|--------------|---------------------------|-------------------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ 3.** Thumb Joystickを Base Hat のポート `A0` に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Thumb_Hat.jpg)

:::note
ステップ3では、Thumb Joystickを**任意のアナログポート**に接続できますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_thumb_joystick.py 0
```

:::note
プログラムを `python grove_thumb_joystick.py pin` で実行できます。pinはADCグループ内の{0, 2, 4, 6}のいずれかで、デバイスを対応するスロット{`A0`, `A2`, `A4`, `A6`}に接続します。
:::

以下はgrove_thumb_joystick.pyのコードです。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveThumbJoystick:

    def __init__(self, channelX, channelY):
        self.channelX = channelX
        self.channelY = channelY
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channelX), self.adc.read(self.channelY)

Grove = GroveThumbJoystick


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveThumbJoystick(int(pin), int(pin + 1))

    while True:
        x, y = sensor.value
        if x > 900:
            print('Joystick Pressed')
        print("X, Y = {0} {1}".format(x, y))
        time.sleep(.2)

if __name__ == '__main__':
    main()

```

:::tip
すべてが正常に動作すれば、以下のような結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_thumb_joystick.py 0
Hat Name = 'Grove Base Hat RPi'
X, Y = 506 484
X, Y = 484 484
X, Y = 506 484
X, Y = 506 487
Joystick Pressed
X, Y = 999 485
X, Y = 310 736
X, Y = 681 484
Joystick Pressed
X, Y = 999 277
Joystick Pressed
X, Y = 999 487
X, Y = 506 484
X, Y = 501 486
X, Y = 509 484
X, Y = 511 486
X, Y = 510 485
^CTraceback (most recent call last):
  File "grove_thumb_joystick.py", line 69, in <module>
    main()
  File "grove_thumb_joystick.py", line 66, in main
    time.sleep(.2)
KeyboardInterrupt

```

このプログラムを終了するには、Ctrl+C を押すだけです。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **`A1`, `A0`** のようになっていますが、コマンドでは **0** と **1** のパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないと、ピンの競合が発生する可能性があります。
:::

### Raspberry Pi での操作 (GrovePi_Plus を使用)

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Thumb Joystick を GrovePi_Plus の **`A0`** ポートに接続します。
- **ステップ 4.** USB ケーブルを使って Raspberry を PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Pi_Joystick%20connection.jpg)

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を搭載した Raspberry Pi を使用している場合は、**Python3** のみでこのコマンドラインを使用してください。
:::

- **ステップ 1.** デモのディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/

```

- **ステップ 2.** コードを確認します：

```
nano grove_thumb_joystick.py   # "Ctrl+x" で終了 #
```

```python
import time
import grovepi

# Grove Thumb Joystick をアナログポート A0 に接続

# GrovePi ポート A0 は Arduino ピン 0 と 1 を使用
# GrovePi ポート A1 は Arduino ピン 1 と 2 を使用
# ピン 1 を使用するデバイスをポート A1 に接続しないでください
# ほとんどの Grove センサーは 4 ピンのうち 3 ピンしか使用しないため、GrovePi は隣接するポート間で Arduino ピンを共有します
# センサーのピン定義が SIG,NC,VCC,GND の場合、2 番目の (白い) ピンは何にも接続されていません

# 2 つのジョイスティックを接続する場合は、ポート A0 と A2 を使用してください (A1 をスキップ)

# X 軸と Y 軸の 2 つのピンを使用
# この設定ではポート A0 を使用
xPin = 0
yPin = 1
grovepi.pinMode(xPin,"INPUT")
grovepi.pinMode(yPin,"INPUT")

# Grove Thumb Joystick はアナログデバイスで、0 から 1023 の範囲のアナログ信号を出力
# X 軸と Y 軸は 2 つの約 10k のポテンショメータと、X 軸を短絡するモーメンタリプッシュボタンで構成

# 私のジョイスティックは、上記 URL の仕様とは若干異なる結果を出力
# 両方を以下に記載：

# 仕様
#     Min  Typ  Max  Click
#  X  206  516  798  1023
#  Y  203  507  797

# 私のジョイスティック
#     Min  Typ  Max  Click
#  X  253  513  766  1020-1023
#  Y  250  505  769
while True:
    try:
        # X/Y 座標を取得
        x = grovepi.analogRead(xPin)
        y = grovepi.analogRead(yPin)

        # X/Y 抵抗を計算
        Rx = (float)(1023 - x) * 10 / x
        Ry = (float)(1023 - y) * 10 / y

        # X 軸でクリックが検出されたか？
        click = 1 if x >= 1020 else 0

        print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **ステップ 3.** デモを実行します。

```
sudo python3 grove_thumb_joystick.py
```

- **ステップ 4.** 以下のようにターミナルに出力が表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/pi_result.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---------

- **[Eagle]** [Grove-Thumb Joystick 回路図](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip)
- **[データシート]** [アナログジョイスティック データシート](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Analog_Joystick_Datasheet.jpg)
- **[PDF]** [ジョイスティック回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Joystick.pdf)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Grove_Thumb_Joystick_CDC_File.zip)

## プロジェクト

**Raspberry Pi ミュージックサーバー**: Raspberry Pi プロジェクトの第一歩。

<iframe frameBorder="0" height="327.5" scrolling="no" src="https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed" width="350"></iframe>

**カスタム Minecraft コントローラーを作る**: GrovePi を使ってカスタム Minecraft コントローラーを作成。

<iframe frameBorder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dexterindustries/build-a-custom-minecraft-controller-d55d9c/embed" width="350"></iframe>

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