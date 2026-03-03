---
description: Seeed Studio XIAO SAMD21 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 での CircuitPython

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

このwikiでは、[Seeed Studio XIAO SAMD21 開発ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)にAdafruit Industries公式の[CircuitPython](https://circuitpython.org/)をインストールして実行する方法を紹介します！

CircuitPythonは、低コストのマイコンボードでの実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。事前のデスクトップダウンロードが不要で、これまで以上に簡単に始められます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については、[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPython のインストール

1. 公式の[**Seeed Studio XIAO SAMD21 用 CircuitPython ブートローダー**](https://circuitpython.org/board/seeeduino_xiao/)をダウンロードします。`.uf2`ファイルがダウンロードされます。

2. USB Type-CケーブルでSeeed Studio XIAO SAMD21をPCに接続します。

3. ジャンパーを使用してRSTピンを2回素早くショートさせることで、DFUブートローダーモードに入ります。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#reset)も参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. PCに`Arduino`という名前の外部ドライブが表示されます。ダウンロードしたCircuitPython uf2ファイルを`Arduino`ドライブにドラッグします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. CircuitPythonブートローダーが読み込まれたら、USB Type-Cを抜いて再接続します。`CIRCUITPY`という名前の新しい外部ドライブが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. これで、Seeed Studio XIAO SAMD21にCircuitPythonが読み込まれました！あとはPythonプログラムを書いて`main.py`という名前で保存し、`CIRCUITPY`ドライブにドラッグするだけです。

## CircuitPython の基本

CircuitPythonを使用した`Blink`の実行：

**注意：** 以下のコードをコピーして保存し、`main.py`という名前で`CIRCUITPY`ドライブにドラッグしてください。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

内蔵LEDが点滅し始めるのが確認できます！

### Grove モジュールで遊ぶ

CircuitPythonでは、シンプルなアナログ/デジタルインターフェースを持つGroveモジュールを使用できます。例えば、Grove - Light SensorをSeeeduino XIAOの`A0`ポートに接続して、以下を実行します：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Seeedino XIAO のアナログピン

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


CircuitPython APIリファレンスの詳細については、[**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)をご覧ください。

## リソース

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Installing Circuit Python on Seeed Studio Xiao SAMD21**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## 技術サポート & 製品ディスカッション


私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>