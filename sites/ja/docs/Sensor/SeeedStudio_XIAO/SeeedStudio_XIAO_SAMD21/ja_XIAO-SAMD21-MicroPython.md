---
description: MicroPython を搭載した Seeed Studio XIAO SAMD21
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/ja/XIAO-SAMD21-MicroPython/
---

# **MicroPython を搭載した Seeed Studio XIAO SAMD21**

## **MicroPython の概要**

[MicroPython](https://github.com/micropython/micropython/wiki) は、一部にネイティブコードコンパイル機能を備えた Python インタプリタです。組み込みプロセッサや制約のあるシステム向けに実装された、Python 3.5 機能のサブセットを提供します。これは CPython とは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## はじめに

まず、Seeed Studio XIAO SAMD21 をコンピュータに接続し、MicroPython から簡単なコードを書き込んで、ボードが正常に動作しているか確認します。

### ハードウェアの準備

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) または [Seeed Studio XIAO SAMD21 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html) x1
- Type-C ケーブル x1
- PC x1

### ファームウェアを書き込む

#### XIAO SAMD21 の場合

:::tip

- [**XIAO SAMD21 シリーズのブートローダーモード**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#enter-bootloader-mode)

:::

- **ステップ 1**. Seeed Studio XIAO SAMD21 を Type‑C ケーブルでコンピュータに接続し、Reset ボタンを素早く 2 回押して BOOT モードに入ります。正常に動作していれば、PC 上に **Arduino** ディスクが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **ステップ 2**. ファームウェアを書き込む

MicroPython の公式サイトにアクセスし、最新のファームウェアをダウンロードします。

    - [XIAO SAMD21 Series MicroPython Firmware](https://micropython.org/download/SEEED_XIAO_SAMD21/)


セキュリティを確保し、最新機能をサポートするために[独自のファームウェアをコンパイル](https://wiki.seeedstudio.com/ja/Compiling_MicroPython_for_embedded_devices/)することも可能ですが、必須ではありません。
<br/>

#### XIAO SAMD21 Plus の場合

- **ステップ 1**. XIAO SAMD21 Plus を Type‑C ケーブルで PC に接続し、Reset ボタンを続けて 2 回押します。すべてが正しく動作していれば、PC 上に **Arduino** ディスクが表示されます。

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **ステップ 2**. 下記リンクをクリックしてファームウェアをダウンロードし、`.uf2` ファイルを **Arduino** ディスクにドラッグ＆ドロップしてファームウェアの書き込みを完了します。

    - [XIAO SAMD21 Series MicroPython Firmware](https://micropython.org/download/SEEED_XIAO_SAMD21/)


### ソフトウェアの準備

- **ステップ 1**. お使いの OS に応じて、最新版の [Thonny editor](https://thonny.org/) をダウンロードしてインストールします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **ステップ 2**. Thonny を起動します。

- **ステップ 3**. **Tools-->Options** をクリックして設定画面を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **ステップ 4**. **Interpreter** タブを選択し、デバイスを **MicroPython(generic)**、ポートを **Board CDC @ Port** に設定します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

## ソフトウェア開発

### SEEED XIAO SAMD21 シリーズのピン割り当て表

| MicroPython ピン名 | XIAO SAMD21 GPIO (ID) | XIAO SAMD21 Plus GPIO (ID) | IRQ SAMD21 / Plus | ADC | 機能 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| D0 / A0 | PA02 (2) | PA02 (2) | 2 / 2 | 0 | GPIO, ADC, DAC |
| D1 / A1 | PA04 (4) | PA04 (4) | 4 / 4 | 4 | GPIO, ADC |
| D2 / A2 | PA10 (10) | PA10 (10) | 10 / 10 | 18 | GPIO, ADC |
| D3 / A3 | PA11 (11) | PA11 (11) | 11 / 11 | 19 | GPIO, ADC |
| D4 / A4 / SDA | PA08 (8) | PA08 (8) | NMI / NMI | 16 | GPIO, ADC, I2C SDA |
| D5 / A5 / SCL | PA09 (9) | PA09 (9) | 9 / 9 | 17 | GPIO, ADC, I2C SCL |
| D6 / A6 / TX | PB08 (40) | PB08 (40) | 8 / 8 | 2 | GPIO, ADC, UART TX |
| D7 / A7 / RX | PB09 (41) | PB09 (41) | 9 / 9 | 3 | GPIO, ADC, UART RX |
| D8 / A8 / SCK | PA07 (7) | PA07 (7) | 7 / 7 | 7 | GPIO, ADC, SPI SCK |
| D9 / A9 / MISO | PA05 (5) | PA05 (5) | 5 / 5 | 5 | GPIO, ADC, SPI MISO |
| D10 / A10 / MOSI | PA06 (6) | PA06 (6) | 6 / 6 | 6 | GPIO, ADC, SPI MOSI |
| USER_LED / D13 / SCL1 | PA17 (17) | PA17 (17) | 1 / 1 | — | 元のユーザー LED、Plus では D13 & I2C1 SCL |
| RX_LED / D27 | PA18 (18) | PA18 (18) | 2 / 2 | — | 元の RX LED、Plus では D27 |
| TX_LED / D19 / I2S_SD | PA19 (19) | PA19 (19) | 3 / 3 | — | 元の TX LED、Plus では D19 & I2S データ |
| D12 | — | PA28 (28) | — / 8 | — | Plus 拡張 GPIO |
| D14 / SDA1 | — | PA16 (16) | — / 0 | — | Plus I2C1 SDA |
| D15 | — | PA15 (15) | — / 15 | — | Plus 拡張 GPIO |
| D16 | — | PA14 (14) | — / 14 | — | Plus 拡張 GPIO |
| D17 | — | PA13 (13) | — / 13 | — | Plus 拡張 GPIO |
| D18 | — | PA12 (12) | — / 12 | — | Plus 拡張 GPIO |
| D20 / I2S_SCK | — | PA20 (20) | — / 4 | — | Plus GPIO & I2S クロック |
| D21 / I2S_WS | — | PA21 (21) | — / 5 | — | Plus GPIO & I2S ワードセレクト |
| D22 | — | PB10 (42) | — / 10 | — | Plus 拡張 GPIO |
| D23 | — | PB11 (43) | — / 11 | — | Plus 拡張 GPIO |
| D24 | — | PB23 (55) | — / 7 | — | Plus 拡張 GPIO |
| D25 | — | PA23 (23) | — / 7 | — | Plus 拡張 GPIO |
| D26 | — | PA22 (22) | — / 6 | — | Plus 拡張 GPIO |
| RGB_LED | — | PA27 (27) | — / 15 | — | Plus アドレス指定可能 RGB LED (WS2812) |
| BUTTON | — | PB22 (54) | — / 6 | — | Plus ユーザーボタン（アクティブ Low） |
| USB_DM | PA24 (24) | PA24 (24) | 12 / 12 | — | USB D−（ネイティブ USB、GPIO ではない） |
| USB_DP | PA25 (25) | PA25 (25) | 13 / 13 | — | USB D+（ネイティブ USB、GPIO ではない） |
| SWCLK | PA30 (30) | PA30 (30) | 10 / 10 | — | SWD クロック |
| SWDIO | PA31 (31) | PA31 (31) | 11 / 11 | — | SWD データ |

:::note
GPIO (ID) の括弧内の数字は、物理 MCU パッケージのピン番号ではなく、MicroPython SAMD のピン ID を示します。
:::

### コードを書き込む

"Run current script" ボタンをクリックしてコードを書き込みます。初回は、Thonny からコードファイルの保存先を尋ねられます。**This Computer** と **MicroPython device** のどちらを選んでも構いません。

プログラムをオフラインで使用したい場合は、プログラムを XIAO SAMD21 に保存する必要があります。

Ctrl + Shift + S を同時に押し続け、**MicroPython device** に保存するオプションを選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### GPIO テスト（LED）

準備するもの：

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

    次のコードを Thonny にコピーします。

1. XIAO SAMD21 の場合、RX_LED は PA18 です。

    青色の RX_LED が点灯し、1 秒ごとに点滅するのが確認できます。

```python
from machine import Pin, Timer

led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)

tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

2. XIAO SAMD21 Plus では RX_LED と TX_LED は取り外されており、その代わりに WS2812 LED が使用されています。そのデータピンは PA27 に割り当てられています。
<br/>
```py
from machine import Pin, Timer
import machine
import time

led = Pin(27, Pin.OUT)

Counter = 0


def ws2812_write(r, g, b):
    data = bytearray([g, r, b])

    machine.bitstream(
        led,
        0,
        (400, 850, 800, 450),
        data
    )

    time.sleep_us(80)


def fun(tim):
    global Counter

    Counter += 1
    print(Counter)

    if Counter % 2 == 1:
        ws2812_write(0, 0, 255)
    else:
        ws2812_write(0, 0, 0)


# Initial state: OFF
ws2812_write(0, 0, 0)

# 500 ms periodic timer
tim = Timer(-1)
tim.init(
    period=500,
    mode=Timer.PERIODIC,
    callback=fun
)
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3_1.gif" /></div>

### GPIO でリレーを制御する

準備するもの：

- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>

### 人感検知による自動制御

準備するもの：

- [人感検知用ドップラーレーダー](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    お使いのブラウザは video タグをサポートしていません。
  </video></div>

### I2C サポート

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Decimal address: ",device," | Hexa address: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'a') # write 'a' to device with address 0x51
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>

micropython に慣れてくると、さらに多くのことができるようになります。私たちは、皆さまのためにより多くの価値を生み出せることを楽しみにしています。ぜひ、あなたのプロジェクトも私たちと共有してください！

### DAC サポート

コードを提供してくださった Aleksei Tertychnyi 氏に感謝いたします。関連するすべての機能は彼によって開発・貢献されました。

```python
from machine import Pin, Timer, DAC

led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) #DAC on A0 output

def loop(tim):
    global counter
    led.value(counter%2)
    print('DAC value: ', end =" ")
    print(counter)
    dac.write(counter%1024)
    counter = counter + 1

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```

**ピン A0** 上の電圧は徐々に上昇し、約 *3.3V* の最大値に達した後、*0V* まで下がり、このサイクルを繰り返します。

### ADC サポート
ADC の MicroPython コード例：

```python
from machine import Pin, Timer, ADC
led = Pin(18, Pin.OUT)  # digital output for blinking
counter = 0             # simple counter for LED toggle

ADC_CONVERT_V = 1.0 / 65535.0  # conversion factor: raw ADC (16-bit) → voltage (vref=1.0V)

adc = ADC(4, vref=0)   # ADC reads on pin A4, using internal 1.0V reference
adcVoltage = 0.0       # variable to store measured voltage

def fun(tim):
    global counter, adcVoltage  # make sure we update the global variables
    counter += 1                # increment counter
    adcVoltage = adc.read_u16() * ADC_CONVERT_V  # read ADC and convert to voltage
    print(adcVoltage)           # print voltage to REPL
    led.value(counter % 2)      # toggle LED every callback (blink)

tim = Timer(-1)                    # create a virtual timer
tim.init(period=1000,              # callback period in milliseconds (1000 ms = 1 s)
         mode=Timer.PERIODIC,      # periodic callback
         callback=fun)             # function to call
```

## MicroPython デバイスコンソール

パートナーの **Neil** が、MicroPython を使用して XIAO 用のコマンドラインコンソールプログラムを作成してくれました。このプログラムを使うと、ファイルのアップロード、ダウンロード、削除を簡単に行うことができます。XIAO への彼の貢献に感謝いたします！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div>

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
