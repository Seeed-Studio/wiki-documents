---
description: Seeed Studio XIAO SAMD21とMicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-SAMD21-MicroPython
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO SAMD21とMicroPython**

## **MicroPythonの紹介**

[MicroPython](https://github.com/micropython/micropython/wiki)は、部分的なネイティブコードコンパイル機能を備えたPythonインタプリタです。これは、組み込みプロセッサや制約のあるシステム向けに実装されたPython 3.5のサブセットを提供します。CPythonとは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>


## **始め方**

まず、Seeed Studio XIAO SAMD21をコンピュータに接続し、MicroPythonから簡単なコードをアップロードしてボードが正常に動作しているか確認します。

### **ハードウェアセットアップ**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-Cケーブル x1
- PC x1

### **ソフトウェアセットアップ**

- **ステップ1**. お使いのオペレーティングシステムに応じて最新バージョンの[Thonnyエディタ](https://thonny.org/)をダウンロードしてインストールします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>


- **ステップ2**. Thonnyを起動します。

- **ステップ3**. **"Tools-->Options"**をクリックして設定を開きます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>


- **ステップ4**. "Interpreter"インターフェースを選択し、デバイスを**"MicroPython(generic)"**、ポートを**"Try to detect port automatically"**に設定します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>


### **Seeed Studio XIAO SAMD21をPCに接続して点灯させる**

- **ステップ1**. "BOOT"ボタンを押し続けながら、Seeed Studio XIAO SAMD21をType-Cケーブルを介してPCに接続します。正常に動作している場合、PCに「Arduino」デスクが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>


- **ステップ2**. ファームウェアをフラッシュします。

公式[リンク](https://micropython.org/download/SEEED_XIAO_SAMD21/)にアクセスして最新のファームウェアをダウンロードしてください。

セキュリティを確保し最新の機能をサポートするために[独自のファームウェアをコンパイル](https://wiki.seeedstudio.com/ja/Compiling_MicroPython_for_embedded_devices/)することも可能ですが、必須ではありません。

## ソフトウェア開発

### SEEED XIAO SAMD21ピン割り当て表

|ピン|GPIO|Xiaoピン名|IRQ|ADC|
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

コードをアップロードするには、「現在のスクリプトを実行」ボタンをクリックします。初回時には、コードファイルを保存する場所をThonnyが尋ねます。**このコンピュータ**または**MicroPythonデバイス**のどちらでも問題ありません。

オフラインでプログラムを使用したい場合は、プログラムをXIAO SAMD21に保存する必要があります。

Ctrl + Shift + Sを同時に押し、**MicroPythonデバイス**に保存を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>


### GPIOテスト (LED)

準備するもの:
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

以下のコードをThonnyにコピーします。

青いRX_LEDが点灯し、1秒ごとに点滅する様子が確認できます。

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

### GPIOでリレーを制御する

準備するもの:
- [Seeeduino-XIAO-拡張ボード](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/)
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
    お使いのブラウザは動画タグをサポートしていません。
  </video></div>


### 人検知による自動制御

準備するもの:

- [人検知用ドップラーセンサー](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-拡張ボード](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board/)
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
    print("10進数アドレス: ", device, " | 16進数アドレス: ", hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # アドレス 0x51 のデバイスから 4 バイト読み取る
i2c.writeto(0x51, 'a') # アドレス 0x51 のデバイスに 'a' を書き込む
print(i2c.readfrom(0x51, 4))   # アドレス 0x51 のデバイスから 4 バイト読み取る
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>


Micropython に精通していることで、さらに多くのことが可能になります。私たちはあなたがより多くの価値を創造することを楽しみにしています。ぜひあなたのプロジェクトを私たちと共有してください！

### DAC サポート
Aleksei Tertychnyi 氏にコードを提供していただきありがとうございます。関連するすべての機能は彼によって開発および貢献されました。
```python
from machine import Pin, Timer, DAC
 
led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) # A0 出力の DAC
 
def loop(tim):
    global counter
    led.value(counter % 2)
    print('DAC 値: ', end =" ")
    print(counter)
    dac.write(counter % 1024)
    counter = counter + 1
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```
**ピン A0** の電圧は徐々に増加し始め、約 *3.3V* に達した後、*0V* に落ち、サイクルが繰り返されます。

## MicroPython デバイスコンソール

私たちのパートナー **Neil** が MicroPython を使用して XIAO 用のコマンドラインコンソールプログラムを書いてくれました。このプログラムを使用すると、ファイルのアップロード、ダウンロード、削除が簡単に行えます。彼の XIAO への貢献に感謝します！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細はこちら</font></span></strong></a></div>

## 技術サポート & 製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>