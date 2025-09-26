---
description: Seeed Studio XIAO RP2040 with MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO RP2040 と MicroPython**

## **MicroPython の紹介**

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を持つ Python インタープリターです。組み込みプロセッサーや制約のあるシステム向けに実装された Python 3.5 機能のサブセットを提供します。CPython とは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **はじめに**

まず、Seeed Studio XIAO RP2040 をコンピューターに接続し、MicroPython から簡単なコードをアップロードして、ボードが正常に動作しているかどうかを確認します。

### **ハードウェアセットアップ**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Type-C ケーブル x1
- PC x1

### **ソフトウェアセットアップ**

- **ステップ 1**. お使いのオペレーティングシステムに応じて、[Thonny エディター](https://thonny.org/)の最新バージョンをダウンロードしてインストールします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **ステップ 2**. Thonny を起動します

- **ステップ 3**. **「Tools-->Options」**をクリックして設定を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **ステップ 4**. 「Interpreter」インターフェースを選択し、デバイスを**「MicroPython(Raspberry Pi Pico)」**、ポートを**「Try to detect prot automatically」**として選択します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Seeed Studio XIAO RP2040 を PC に接続して点灯させる**

- **ステップ 1**. 「BOOT」ボタンを押し続けながら、Type-C ケーブルを通して Seeed Studio XIAO RP2040 を PC に接続します。正常に動作すると、PC に「RPI-RP2」デスクが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **ステップ 2**. **MicroPython をインストールまたは更新**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

その後、自動的にデバイスを検索し、Target Volume に表示されます。下の Micropython のバージョン選択では、デフォルトのままにしておきます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

Install ボタンをクリックし、インストール状況が Done と表示されたらこのページを閉じます。ファームウェアが完了すると、インターフェースに以下の情報が表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **ステップ 3**. 以下のコードを Thonny にコピーします。

```cpp
from machine import Pin, Timer
 
led = Pin(25, Pin.OUT)
Counter = 0
Fun_Num = 0
 
def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

- **ステップ 4**. 「Run current script」ボタンをクリックしてコードをアップロードします。初回の場合、Thonnyはコードファイルをどこに保存するかを尋ねます。**This Computer**と**Raspberry Pi Pico**のどちらでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作すると、LEDライトが1秒間隔で点灯と消灯を繰り返すのが確認できます。また、増加する数値の出力もShellに表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

接続が完了したので、他のプロジェクトに進むことができます。

## **Seeed Studio XIAO RP2040のRGB LEDを点灯させる**

Seeed Studio XIAO RP2040にはRGB LEDが搭載されており、MicroPythonを使用してそれを点灯させます。サードパーティライブラリが必要なので、まず追加のライブラリを追加する必要があります。

- **ステップ 1**. [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py)ライブラリをダウンロードし、Thonnyで開きます。

- **ステップ 2**. 「File-->Save as」をクリックしてライブラリを保存します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存場所として「Raspberry Pi Pico」を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存するファイル名が「ws2812.py」であることを確認してください。そうでないと動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **ステップ 3**. 以下のコードをThonnyにコピーします。

```cpp
from ws2812 import WS2812
import utime
import machine
power = machine.Pin(11,machine.Pin.OUT)
power.value(1)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

led = WS2812(12,1)#WS2812(pin_num,led_count)

while True:
    print("Beautiful color")
    for color in COLORS: 
        led.pixels_fill(color)
        led.pixels_show()
        utime.sleep(0.2)
```

- **ステップ 4**. 「Run current script」ボタンをクリックしてコードをアップロードします。初回の場合、Thonnyはコードファイルを保存する場所を尋ねます。**This Computer**と**Raspberry Pi Pico**のどちらでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作すると、RGB LEDライトが変換して点滅するのが見えます。また、「Beautiful Color」というテキストの出力もShellに表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Seeed Studio XIAO RP2040をIIC経由でディスプレイに接続**

このプロジェクトでは、[Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)をIICインターフェース経由で接続し、Seeed Studio XIAO RP2040のIIC機能をデモンストレーションします。

**ハードウェア接続**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **ステップ 1**. [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py)ライブラリをダウンロードし、Thonnyで開きます。

- **ステップ 2**. 「File-->Save as」をクリックし、ライブラリを「Raspberry Pi Pico」に保存します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存場所として「Raspberry Pi Pico」を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存するファイル名が「ssd1306.py」であることを確認してください。そうでないと動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **ステップ 3**. 以下のコードをThonnyにコピーします。

```cpp
from ssd1306 import SSD1306_I2C
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)
oled = SSD1306_I2C(128, 64, i2c)

while True:  
    oled.fill(0)#clear
    oled.text("Hello,World!",0,0)
    oled.show()
    #sleep(0.5)
```

- **ステップ 4**. 「Run current script」ボタンをクリックしてコードをアップロードします。初回時、Thonnyはコードファイルの保存場所を尋ねます。**This Computer**と**Raspberry Pi Pico**のどちらでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作すれば、画面に「Hello,World!」のテキストが表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## MicroPython デバイスコンソール

私たちのパートナーである**Neil**が、MicroPythonを使用してXIAO用のコマンドラインコンソールプログラムを作成しました。このプログラムを使用すると、ファイルのアップロード、ダウンロード、削除を簡単に行うことができます。XIAOへの貢献に感謝いたします！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div>

## 追加リソース

追加のライブラリとサンプルコードはこちらです：

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
