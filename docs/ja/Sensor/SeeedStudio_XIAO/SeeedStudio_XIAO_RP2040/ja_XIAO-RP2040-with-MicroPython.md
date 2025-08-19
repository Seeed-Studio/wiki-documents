---
description: Seeed Studio XIAO RP2040 と MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-with-MicroPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO RP2040 と MicroPython**

## **MicroPython の紹介**

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を備えた Python インタープリタです。これは、組み込みプロセッサや制約のあるシステム向けに実装された Python 3.5 のサブセットを提供します。CPython とは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **はじめに**

まず、Seeed Studio XIAO RP2040 をコンピュータに接続し、MicroPython から簡単なコードをアップロードして、ボードが正常に動作しているか確認します。

### **ハードウェアの準備**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Type-C ケーブル x1
- PC x1

### **ソフトウェアの準備**

- **ステップ 1**. お使いのオペレーティングシステムに応じて、最新バージョンの [Thonny エディタ](https://thonny.org/) をダウンロードしてインストールします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **ステップ 2**. Thonny を起動します。

- **ステップ 3**. **"Tools-->Options"** をクリックして設定を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **ステップ 4**. "Interpreter" インターフェースを選択し、デバイスを **"MicroPython(Raspberry Pi Pico)"**、ポートを **"Try to detect port automatically"** に設定します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Seeed Studio XIAO RP2040 を PC に接続して点灯させる**

- **ステップ 1**. "BOOT" ボタンを押し続けながら、Type-C ケーブルを使用して Seeed Studio XIAO RP2040 を PC に接続します。正常に動作している場合、PC に "RPI-RP2" デスクが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **ステップ 2**. **Install or update MicroPython** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

これによりデバイスが自動的に検索され、ターゲットボリュームに表示されます。以下の MicroPython のバージョン選択では、デフォルトのままにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

インストールボタンをクリックし、インストールステータスが「Done」と表示されたらこのページを閉じます。ファームウェアが完了すると、以下の情報がインターフェースに表示されます。

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

- **ステップ 4**. **"Run current script"** ボタンをクリックしてコードをアップロードします。初回は、コードファイルをどこに保存するか尋ねられます。**This Computer** または **Raspberry Pi Pico** のどちらでも構いません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作している場合、LED が 1 秒ごとに点灯および消灯し、増加する数値が Shell に表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

接続が完了したので、次のプロジェクトに進むことができます。

## **Seeed Studio XIAO RP2040 の RGB LED を点灯する**

Seeed Studio XIAO RP2040 には RGB LED が搭載されており、これを MicroPython を使用して点灯させます。この操作にはサードパーティのライブラリが必要なため、まず追加のライブラリを導入する必要があります。

- **ステップ 1**. [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) ライブラリをダウンロードし、Thonny で開きます。

- **ステップ 2**. 「ファイル-->名前を付けて保存」をクリックし、ライブラリを保存します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存先として「Raspberry Pi Pico」を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存するファイル名が「ws2812.py」であることを確認してください。そうでない場合、動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **ステップ 3**. 以下のコードを Thonny にコピーします。

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

- **ステップ 4**. 「現在のスクリプトを実行」ボタンをクリックしてコードをアップロードします。初回実行時には、コードファイルの保存先を尋ねられます。**このコンピュータ**または **Raspberry Pi Pico** のどちらでも問題ありません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作すれば、RGB LED が色を変えながら点滅する様子が確認できます。また、シェルに「Beautiful Color」というテキストが表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Seeed Studio XIAO RP2040 とディスプレイを IIC 接続する**

このプロジェクトでは、[Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) を IIC インターフェースを介して接続し、Seeed Studio XIAO RP2040 の IIC 機能を実演します。

**ハードウェア接続**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **ステップ 1**. [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) ライブラリをダウンロードし、Thonny で開きます。

- **ステップ 2**. 「ファイル-->名前を付けて保存」をクリックし、ライブラリを「Raspberry Pi Pico」に保存します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

保存先として「Raspberry Pi Pico」を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

保存するファイル名が「ssd1306.py」であることを確認してください。そうでない場合、動作しません。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **ステップ 3**. 以下のコードを Thonny にコピーします。

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

- **ステップ 4**. 「現在のスクリプトを実行」ボタンをクリックしてコードをアップロードします。初回実行時には、コードファイルの保存先を尋ねられます。**このコンピュータ**または **Raspberry Pi Pico** のどちらでも問題ありません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

正常に動作すれば、画面に「Hello,World!」というテキストが表示されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## MicroPython デバイスコンソール

パートナーの **Neil** が MicroPython を使用して XIAO 用のコマンドラインコンソールプログラムを作成しました。このプログラムを使用すると、ファイルのアップロード、ダウンロード、削除が簡単に行えます。XIAO への貢献に感謝します！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しくはこちら</font></span></strong></a></div>

## 追加リソース

以下に追加のライブラリやサンプルコードがあります：

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

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