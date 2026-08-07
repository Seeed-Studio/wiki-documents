---
description: MicroPython を使った Seeed Studio XIAO RP2040
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-MicroPython/
---

# Seeed Studio XIAO RP2040 と MicroPython

## MicroPython の概要

[MicroPython](https://github.com/micropython/micropython/wiki) は、一部のネイティブコードコンパイル機能を備えた Python インタプリタです。組み込みプロセッサや制約のあるシステム向けに実装された、Python 3.5 機能のサブセットを提供します。これは CPython とは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## 入門ガイド

まず、Seeed Studio XIAO RP2040 をコンピュータに接続し、MicroPython から簡単なコードを書き込んで、ボードが正常に動作しているか確認します。

### ハードウェアの準備

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Type-C ケーブル x1
- PC x1

### ソフトウェアの準備

- **Step 1**. お使いのオペレーティングシステムに応じて、[Thonny editor](https://thonny.org/) の最新バージョンをダウンロードしてインストールします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Step 2**. Thonny を起動します

- **Step 3**. **Tools-->Options** をクリックして設定画面を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Step 4**. **Interpreter** タブを選択し、デバイスを **MicroPython(Raspberry Pi Pico)**、ポートを **Try to detect port automatically** に設定します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### Seeed Studio XIAO RP2040 を PC に接続する

- **Step 1**. **BOOT** ボタンを押し続けたまま、Type-C ケーブルで Seeed Studio XIAO RP2040 を PC に接続します。正常に動作していれば、PC 上に「RPI-RP2」というドライブが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Step 2**. **Install or update MicroPython** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

すると自動的にデバイスを検索し、Target Volume に表示します。下の Micropython のバージョン選択では、デフォルトのままで構いません。

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython_1.png" /></div>

Install ボタンをクリックし、インストール状況が Done と表示されたらこのページを閉じます。ファームウェアが完了すると、インターフェース上に次の情報が表示されます。

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython_2.png" /></div>

- **Step 3**. 次のコードを Thonny にコピーします。

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

- **Step 4**. **Run current script** ボタンをクリックしてコードをアップロードします。初回は、コードファイルをどこに保存するか Thonny から尋ねられます。**This Computer** と **Raspberry Pi Pico** のどちらを選んでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作していれば、LED が 1 秒ごとに点灯と消灯を繰り返します。また、増加していく数字の出力が Shell に表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

これで接続は完了です。次のプロジェクトに進むことができます。

### Seeed XIAO Studio XIAO RP2040 Plus を接続する

**Step 1.** ファームウェアを書き込みます。[XIAO RP2040 Plus Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip) をダウンロードします。ZIP パッケージを解凍したら、XIAO RP2040 Plus の BOOT ボタンを押しながらコンピュータに接続します。**RPI-RP2** という名前のドライブが表示されるので、このドライブに **firmware.uf2** ファイルをコピーします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.png" /></div><br/>

**Step 2.** Thonny IDE を開き、Tools → Options を選択し、図のように設定します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2.png" /></div>

**Step 3.** バージョン情報が Shell に表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2_1.png" /></div><br/>

**Step 4.** Files -> New に進み、以下のコードを貼り付けてスクリプトを実行します。

```py
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

- LED が 1 秒間隔で点滅します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.jpg" /></div><br/>

:::tip

- [Additional Resources](#追加リソース) セクションには、XIAO RP2040 Plus 用の MicroPython ファームウェアと関連するサンプルが含まれています。これらのサンプルは XIAO RP2040 のチュートリアルに従って使用できますが、対応するピンを置き換えて修正することを忘れないでください。
- XIAO RP2040 シリーズ間の違いを確認するには、[XIAO RP2040 Series Pin Overview](https://wiki.seeedstudio.com/ja/XIAO-RP2040/#ハードウェア概要) を参照してください

:::

## Seeed Studio XIAO RP2040 上の RGB LED を点灯する

Seeed Studio XIAO RP2040 には RGB LED が搭載されており、これを MicroPython で点灯させます。サードパーティ製ライブラリが必要なので、まず追加のライブラリを導入する必要があります。

- **Step 1**. [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) ライブラリをダウンロードし、Thonny で開きます。

- **Step 2**. **File-->Save as** をクリックしてライブラリを保存します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存先として **Raspberry Pi Pico** を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存したファイル名が必ず **ws2812.py** になっていることを確認してください。そうでないと動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Step 3**. 次のコードを Thonny にコピーします。

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

- **Step 4**. "Run current script" ボタンをクリックしてコードをアップロードします。初回は、コードファイルをどこに保存するか Thonny から尋ねられます。**This Computer** と **Raspberry Pi Pico** のどちらを選んでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作していれば、RGB LED の色が変化しながら点滅します。また、"Beautiful Color" というテキストの出力が Shell に表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## Seeed Studio XIAO RP2040 とディスプレイを IIC で接続する

このプロジェクトでは、[Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) を IIC インターフェース経由で接続し、Seeed Studio XIAO RP2040 上での IIC 機能をデモします。

**ハードウェア接続**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Step 1**. [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) ライブラリをダウンロードし、Thonny で開きます。

- **Step 2**. "File-->Save as" をクリックし、"Raspberry Pi Pico" にライブラリを保存します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存先として "Raspberry Pi Pico" を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存したファイル名が "ssd1306.py" になっていることを確認してください。そうでないと動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **Step 3**. 次のコードを Thonny にコピーします。

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

- **Step 4**. "Run current script" ボタンをクリックしてコードをアップロードします。初回は、コードファイルをどこに保存するか Thonny から尋ねられます。**This Computer** と **Raspberry Pi Pico** のどちらを選んでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作していれば、画面に "Hello,World!" というテキストが表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## MicroPython デバイスコンソール

パートナーの **Neil** が、MicroPython を使用して XIAO 向けのコマンドラインコンソールプログラムを作成しました。このプログラムを使うと、ファイルのアップロード、ダウンロード、削除を簡単に行うことができます。XIAO への貢献に感謝します！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div>

## 追加リソース

追加のライブラリとサンプルコードはこちらにあります：

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

- **[ZIP]** [XIAO-RP2040-Plus-Firmware-And-Examples](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
