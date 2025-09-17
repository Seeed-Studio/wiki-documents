---
description: Seeed Studio XIAO SAMD21 with MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO SAMD21 with MicroPython**

## **MicroPython の紹介**

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を持つPythonインタープリターです。組み込みプロセッサーや制約のあるシステム向けに実装されたPython 3.5機能のサブセットを提供します。CPythonとは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **はじめに**

まず、Seeed Studio XIAO SAMD21をコンピューターに接続し、MicroPythonから簡単なコードをアップロードして、ボードが正常に動作しているかを確認します。

### **ハードウェアセットアップ**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-Cケーブル x1
- PC x1

### **ソフトウェアセットアップ**

- **ステップ 1**. お使いのオペレーティングシステムに応じて、[Thonny editor](https://thonny.org/)の最新バージョンをダウンロードしてインストールします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **ステップ 2**. Thonnyを起動します

- **ステップ 3**. **"Tools-->Options"** をクリックして設定を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **ステップ 4**. "Interpreter"インターフェースを選択し、デバイスを **"MicroPython(generic)"** として、ポートを **"Try to detect port automatically"** として選択します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>

### **Seeed Studio XIAO SAMD21をPCに接続して点灯させる**

- **ステップ 1**. "BOOT"ボタンを押し続けながら、Type-CケーブルでSeeed Studio XIAO SAMD21をPCに接続します。正常に動作すると、PC上に"Arduino"デスクが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **ステップ 2**. ファームウェアをフラッシュします

公式[リンク](https://micropython.org/download/SEEED_XIAO_SAMD21/)にアクセスして、最新のファームウェアをダウンロードしてください

セキュリティを確保し、最新機能をサポートするために[独自のファームウェアをコンパイル](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/)することも可能ですが、これは必須ではありません。

## ソフトウェア開発

### SEEED XIAO SAMD21 ピン配置表

|Pin|GPIO|Xiao Pin name|IRQ|ADC|
|-|--|---|--|---|
|2|PA02|0|2|0| * | * | * | * |
|4|PA04|1|4|4| * | * | * | * |
|10|PA10|2|10|18| * | * | * | * |
|11|PA11|3|11|19| * | * | * | * |
|8|PA08|4|*|16| * | * | * | * |
|9|PA09|5|9|17| * | * | * | * |
|40|PB082|6|8|2| * | * | * | * |
|41|PB09|7|9|3| * | * | * | * |
|7|PA07|8|7|7| * | * | * | * |
|5|PA05|9|5|5| * | * | * | * |
|6|PA06|10|6|6| * | * | * | * |
|18|PA18|RX_LED|2|*| * | * | * | * |
|30|PA30|SWCLK|10|*| * | * | * | * |
|31|PA31|SWDIO|11|*| * | * | * | * |
|19|PA19|TX_LED|3|*| * | * | * | * |

### コードをアップロードする

「Run current script」ボタンをクリックしてコードをアップロードします。初回時、Thonnyはコードファイルの保存場所を尋ねます。**This Computer**と**MicroPython device**のどちらでも構いません。

プログラムをオフラインで使用したい場合は、プログラムをXIAO SAMD21に保存する必要があります

Ctrl + Shift + Sを同時に長押しし、**MicroPython device**への保存を選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### GPIO テスト (LED)

準備するもの:

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

以下のコードをThonnyにコピーします。

青いRX_LEDが点灯し、1秒に1回点滅することが確認できます

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

### GPIO リレー制御

準備するもの：

- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
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

### 自動制御のための人体検出

準備するもの：

- [人体検出用ドップラーレーダー](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
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
    Your browser does not support the video tag.
  </video></div>

### I2Cサポート

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

MicroPythonに慣れることで、より多くのことができるようになります。私たちはあなたにより多くの価値を創造することを楽しみにしています。あなたのプロジェクトもぜひ私たちと共有してください！

### DAC サポート

コードを提出してくださったAleksei Tertychnyiに感謝します。関連するすべての機能は彼によって開発され、貢献されました。

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

**ピンA0**の電圧は徐々に増加し始め、約*3.3V*で最大値に達した後、*0V*まで下がり、このサイクルが繰り返されます。

## MicroPython デバイスコンソール

私たちのパートナーである**Neil**が、MicroPythonを使用してXIAO用のコマンドラインコンソールプログラムを作成しました。このプログラムを使用すると、ファイルのアップロード、ダウンロード、削除を簡単に行うことができます。XIAOへの貢献に感謝いたします！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div>

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
