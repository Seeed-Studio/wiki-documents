---
description: Grove - 4-Digit Display
title: Grove - 4-Digit Display
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-4-Digit_Display
last_update:
  date: 05/15/2025
  author: shuxu hu
---


[<img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Grove-4_digit_display.jpg" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/depot/grove-4digital-display-p-1198.html)

Grove - 4-Digit Display モジュールは、12ピンのモジュールです。このモジュールでは、TM1637を使用して制御ピンの数を2本に削減しています。つまり、ArduinoまたはSeeeduinoのデジタルピン2本だけで、内容と輝度の両方を制御できます。英数字の表示が必要なプロジェクトにおいて、このモジュールは良い選択肢となるでしょう。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-4digital-display-p-1198.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)

## バージョン

| 製品バージョン              | 変更点                                   | リリース日 |
|------------------------------|-------------------------------------------|---------------|
|Grove - 4-Digit Display V1.0  | 初版                                     | 2012年5月      |     

## 特徴

-   4桁の赤色英数字ディスプレイ
-   Grove互換インターフェース (3.3V/5V)
-   8段階の輝度調整可能

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

<table border="2" cellspacing="0" width="58.2%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
0.2
</td>
<td>
27
</td>
<td>
80
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
42x24x14
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
正味重量
</th>
<td colspan="3">
7±1
</td>
<td>
g
</td>
</tr>
</table>

## 応用例

-   時刻表示
-   ストップウォッチ
-   センサー入力の表示

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-4-Digit Display |
|----------------|-------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **ステップ 2.** Grove-4-Digit DisplayをGrove-Base Shieldの**D2**ポートに接続します。
- **ステップ 3.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Grove Base Shieldがない場合でも、以下のようにGrove-4-Digit DisplayをSeeeduinoに直接接続することができます。また、他のGroveデジタルポートに接続することも可能です。
:::
| Seeeduino | Grove-4-Digit Display |
|-----------|-----------------------|
| 5V        | 赤                   |
| GND       | 黒                   |
| D3        | 白 (DIO)             |
| D2        | 黄 (CLK)             |

:::warning
    Grove-4-Digit DisplayにはGND、VCC、DIO、CLKの4つのピンがあります。DIOとCLKは任意のデジタルピンに接続できます。これはI2Cプロトコルではありません。
:::

**ソフトウェア**

- **ステップ 1.** [Grove-4-Digit Displayライブラリ](https://github.com/Seeed-Studio/Grove_4Digital_Display/archive/master.zip)と[TimerOneライブラリ](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)をダウンロードします。
- **ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、ライブラリをインストールします。
- **ステップ 3.** 以下の手順に従ってArduino IDEにコードを選択してアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。以下の3つの例があります：
    - 時計表示
    - 数字の流れ
    - ストップウォッチ

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** Grove-4-Digit Displayが点灯するのが確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove-4-Digit DisplayをBase ShieldのD2ポートに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。
<!-- 
![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、0から9までの数字が流れるのが確認できます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 4 Digit Display |
|--------------|---------------------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ 3.** 4-Digit DisplayをBase Hatのポート12に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、4-Digit Displayを**任意のGPIOポート**に接続することも可能ですが、その場合は対応するポート番号でコマンドを変更する必要があります。
:::

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
python grove_4_digit_display.py 12 13
```

以下は `grove_4_digit_display.py` コードです。

```python
import sys
import time
from grove.gpio import GPIO

charmap = {
    '0': 0x3f,
    '1': 0x06,
    '2': 0x5b,
    '3': 0x4f,
    '4': 0x66,
    '5': 0x6d,
    '6': 0x7d,
    '7': 0x07,
    '8': 0x7f,
    '9': 0x6f,
    'A': 0x77,
    'B': 0x7f,
    'b': 0x7C,
    'C': 0x39,
    'c': 0x58,
    'D': 0x3f,
    'd': 0x5E,
    'E': 0x79,
    'F': 0x71,
    'G': 0x7d,
    'H': 0x76,
    'h': 0x74,
    'I': 0x06,
    'J': 0x1f,
    'K': 0x76,
    'L': 0x38,
    'l': 0x06,
    'n': 0x54,
    'O': 0x3f,
    'o': 0x5c,
    'P': 0x73,
    'r': 0x50,
    'S': 0x6d,
    'U': 0x3e,
    'V': 0x3e,
    'Y': 0x66,
    'Z': 0x5b,
    '-': 0x40,
    '_': 0x08,
    ' ': 0x00
}

ADDR_AUTO = 0x40
ADDR_FIXED = 0x44
STARTADDR = 0xC0
BRIGHT_DARKEST = 0
BRIGHT_DEFAULT = 2
BRIGHT_HIGHEST = 7

class Grove4DigitDisplay(object):
    colon_index = 1

    def __init__(self, clk, dio, brightness=BRIGHT_DEFAULT):
        self.brightness = brightness

        self.clk = GPIO(clk, direction=GPIO.OUT)
        self.dio = GPIO(dio, direction=GPIO.OUT)
        self.data = [0] * 4
        self.show_colon = False

    def clear(self):
        self.show_colon = False
        self.data = [0] * 4
        self._show()

    def show(self, data):
        if type(data) is str:
            for i, c in enumerate(data):
                if c in charmap:
                    self.data[i] = charmap[c]
                else:
                    self.data[i] = 0
                if i == self.colon_index and self.show_colon:
                    self.data[i] |= 0x80
                if i == 3:
                    break
        elif type(data) is int:
            self.data = [0, 0, 0, charmap['0']]
            if data < 0:
                negative = True
                data = -data
            else:
                negative = False
            index = 3
            while data != 0:
                self.data[index] = charmap[str(data % 10)]
                index -= 1
                if index < 0:
                    break
                data = int(data / 10)

            if negative:
                if index >= 0:
                    self.data[index] = charmap['-']
                else:
                    self.data = charmap['_'] + [charmap['9']] * 3
        else:
            raise ValueError('Not support {}'.format(type(data)))
        self._show()

    def _show(self):
        with self:
            self._transfer(ADDR_AUTO)

        with self:
            self._transfer(STARTADDR)
            for i in range(4):
                self._transfer(self.data[i])

        with self:
            self._transfer(0x88 + self.brightness)

    def update(self, index, value):
        if index < 0 or index > 4:
            return

        if value in charmap:
            self.data[index] = charmap[value]
        else:
            self.data[index] = 0

        if index == self.colon_index and self.show_colon:
            self.data[index] |= 0x80

        with self:
            self._transfer(ADDR_FIXED)

        with self:
            self._transfer(STARTADDR | index)
            self._transfer(self.data[index])

        with self:
            self._transfer(0x88 + self.brightness)

    def set_brightness(self, brightness):
        if brightness > 7:
            brightness = 7

        self.brightness = brightness
        self._show()

    def set_colon(self, enable):
        self.show_colon = enable
        if self.show_colon:
            self.data[self.colon_index] |= 0x80
        else:
            self.data[self.colon_index] &= 0x7F
        self._show()

    def _transfer(self, data):
        for _ in range(8):
            self.clk.write(0)
            if data & 0x01:
                self.dio.write(1)
            else:
                self.dio.write(0)
            data >>= 1
            time.sleep(0.000001)
            self.clk.write(1)
            time.sleep(0.000001)

        self.clk.write(0)
        self.dio.write(1)
        self.clk.write(1)
        self.dio.dir(GPIO.IN)

        while self.dio.read():
            time.sleep(0.001)
            if self.dio.read():
                self.dio.dir(GPIO.OUT)
                self.dio.write(0)
                self.dio.dir(GPIO.IN)
        self.dio.dir(GPIO.OUT)

    def _start(self):
        self.clk.write(1)
        self.dio.write(1)
        self.dio.write(0)
        self.clk.write(0)

    def _stop(self):
        self.clk.write(0)
        self.dio.write(0)
        self.clk.write(1)
        self.dio.write(1)

    def __enter__(self):
        self._start()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._stop()

Grove = Grove4DigitDisplay

def main():
    if len(sys.argv) < 3:
        print('Usage: {} clk dio'.format(sys.argv[0]))
        sys.exit(1)

    display = Grove4DigitDisplay(int(sys.argv[1]), int(sys.argv[2]))

    count = 0
    while True:
        t = time.strftime("%H%M", time.localtime(time.time()))
        display.show(t)
        display.set_colon(count & 1)
        count += 1
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、4桁のディスプレイに現在時刻が表示されます。
:::

このプログラムを終了するには、++ctrl+c++ を押してください。

### Raspberry Pi での操作 (GrovePi_Plus を使用)

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-4-Digit Display |
|--------------|--------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。
- **ステップ 3.** Grove-4-Digit Display を GrovePi_Plus の **D5** ポートに接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

**ソフトウェア**

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **ステップ 3.** 以下のコマンドを実行して音量を監視します。

```python
cd ~/GrovePi/Software/Python
python grove_4_digit_display.py
```

以下は grove_4_digit_display.py のコードです。

```python
# 注意: コロン付きの4桁赤色7セグメントディスプレイ、8段階の輝度レベル、ただし小数点はなし

import time
import grovepi

# Grove 4 Digit Display をデジタルポート D5 に接続
# CLK,DIO,VCC,GND
display = 5
grovepi.pinMode(display,"OUTPUT")

# アナログセンサーを A0 に接続して監視する場合
sensor = 0
grovepi.pinMode(sensor,"INPUT")

time.sleep(.5)

# 4桁ディスプレイのメソッド
# grovepi.fourDigit_init(pin)
# grovepi.fourDigit_number(pin,value,leading_zero)
# grovepi.fourDigit_brightness(pin,brightness)
# grovepi.fourDigit_digit(pin,segment,value)
# grovepi.fourDigit_segment(pin,segment,leds)
# grovepi.fourDigit_score(pin,left,right)
# grovepi.fourDigit_monitor(pin,analog,duration)
# grovepi.fourDigit_on(pin)
# grovepi.fourDigit_off(pin)

while True:
    try:
        print ("テスト 1) 初期化")
        grovepi.fourDigit_init(display)
        time.sleep(.5)

        print ("テスト 2) 輝度設定")
        for i in range(0,8):
            grovepi.fourDigit_brightness(display,i)
            time.sleep(.2)
        time.sleep(.3)

        # 最低輝度レベルに設定
        grovepi.fourDigit_brightness(display,0)
        time.sleep(.5)

        print ("テスト 3) 先頭ゼロなしで数字を設定")
        leading_zero = 0
        grovepi.fourDigit_number(display,1,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,12,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,123,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,1234,leading_zero)
        time.sleep(.5)

        print ("テスト 4) 先頭ゼロありで数字を設定")
        leading_zero = 1
        grovepi.fourDigit_number(display,5,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,56,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,567,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,5678,leading_zero)
        time.sleep(.5)

        print ("テスト 5) 個別の桁を設定")
        grovepi.fourDigit_digit(display,0,2)
        grovepi.fourDigit_digit(display,1,6)
        grovepi.fourDigit_digit(display,2,9)
        grovepi.fourDigit_digit(display,3,15) # 15 = F
        time.sleep(.5)

        print ("テスト 6) 個別のセグメントを設定")
        grovepi.fourDigit_segment(display,0,118) # 118 = H
        grovepi.fourDigit_segment(display,1,121) # 121 = E
        grovepi.fourDigit_segment(display,2,118) # 118 = H
        grovepi.fourDigit_segment(display,3,121) # 121 = E
        time.sleep(.5)

        grovepi.fourDigit_segment(display,0,57) # 57 = C
        grovepi.fourDigit_segment(display,1,63) # 63 = O
        grovepi.fourDigit_segment(display,2,63) # 63 = O
        grovepi.fourDigit_segment(display,3,56) # 56 = L
        time.sleep(.5)

        print ("テスト 7) スコアを設定")
        grovepi.fourDigit_score(display,0,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,1)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,2)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,3)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,4)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,5)
        time.sleep(.5)

        print ("テスト 8) 時間を設定")
        grovepi.fourDigit_score(display,12,59)
        time.sleep(.5)

        print ("テスト 9) アナログピンを監視")
        seconds = 10
        grovepi.fourDigit_monitor(display,sensor,seconds)
        time.sleep(.5)

        print ("テスト 10) 全てオンにする")
        grovepi.fourDigit_on(display)
        time.sleep(.5)

        print ("テスト 11) 全てオフにする")
        grovepi.fourDigit_off(display)
        time.sleep(.5)

    except KeyboardInterrupt:
        grovepi.fourDigit_off(display)
        break
    except IOError:
        print ("エラー")

```

- **ステップ 4.** 以下のように Grove-4-Digit Display が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_4_digit_display.py 
テスト 1) 初期化
テスト 2) 輝度設定
テスト 3) 先頭ゼロなしで数字を設定
テスト 4) 先頭ゼロありで数字を設定
テスト 5) 個別の桁を設定
テスト 6) 個別のセグメントを設定
テスト 7) スコアを設定
テスト 8) 時間を設定
テスト 9) アナログピンを監視
テスト 10) 全てオンにする
テスト 11) 全てオフにする
```


### TI LaunchPadで遊ぶ

数字を表示する (4-Digital-Display)

この例では、Grove-4-Digital Display を使用していくつかのデジタル数字を表示する方法を示します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg" alt="pir" width={600} height="auto" /></p>

```
/*
 * TM1637.cpp
 * 4桁ディスプレイ用ライブラリ
 */
#include "TM1637.h"
#define CLK 39 // TM1637のピン定義。他のポートに変更可能
#define DIO 38
TM1637 tm1637(CLK,DIO);
void setup()
{
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);//BRIGHT_TYPICAL = 2,BRIGHT_DARKEST = 0,BRIGHTEST = 7;
}
void loop()
{
    int8_t NumTab[] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};//0~9,A,b,C,d,E,F
    int8_t ListDisp[4];
    unsigned char i = 0;
    unsigned char count = 0;
    delay(150);
    while(1)
    {
        i = count;
        count ++;
        if(count == sizeof(NumTab)) count = 0;
        for(unsigned char BitSelect = 0;BitSelect < 4;BitSelect ++)
        {
            ListDisp[BitSelect] = NumTab[i];
            i ++;
            if(i == sizeof(NumTab)) i = 0;
        }
        tm1637.display(0,ListDisp[0]);
        tm1637.display(1,ListDisp[1]);
        tm1637.display(2,ListDisp[2]);
        tm1637.display(3,ListDisp[3]);
        delay(300);
    }
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-4-Digit Display V1.0 回路図](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip)
- **[Library]** [4-Digit Display ライブラリ](https://github.com/Seeed-Studio/Grove_4Digital_Display)
- **[Library]** [TimerOne ライブラリ](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)
- **[Library]** [Four-Digit Display Suli ライブラリ](https://github.com/Seeed-Studio/Four_Digit_Display_Suli)
- **[Library]** [CodeCraft コード](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/4-Digit%20Display.zip)
- **[Datasheet]** [TM1637 データシート](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/res/TM1637_datasheet.pdf)
- **[More Reading]** [木製レーザーガン](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg" alt="pir" width={600} height="auto" /></p>

OVERWATCHにインスパイアされて、最近とてもクールな木製レーザーガンのおもちゃを作りました！

木製レーザーガンとガンターゲットは、Seeeduino LotusというArduinoボードをベースにしています。レーザーガンのレーザーエミッターは、レーザーパルスを発射してガンターゲットを「アクティベート」するように制御されています。そして、ガンターゲットにはレーザーパルスを検出するための3つの光センサーがあります。とてもシンプルに見えますよね？このプロジェクトに興味があるなら、自分やお子さんのためにぜひ作ってみてください！クリスマスプレゼントとして1日かけてDIYする価値があります。

## プロジェクト

**MSP430とGroveモジュールを使ったアラームクロック**: MSP430F5529 LaunchPadとSeeedStudio Groveモジュールを使用して、自分だけのアラームクロックを作成しましょう。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carlosventura/alarm-clock-with-grove-modules-e4e9f1/embed' width='350'></iframe>

**時計 - Grove 4桁ディスプレイとPhotonを使用**: GroveとTM1637をベースにした、4つのコンポーネントで作る最初の時計

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/clock-grove-4-digit-display-using-photon-7c4369/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>