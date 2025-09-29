---
description: Wio TerminalでCircuitPythonを使用する
title: Wio TerminalでCircuitPythonを使用する
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-CircuitPython
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalでCircuitPythonを使用する

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

このWikiでは、Adafruit Industriesによる公式の[CircuitPython](https://circuitpython.org/)を[Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)にインストールして実行する方法を紹介します！

CircuitPythonは、低コストのマイクロコントローラボードでの実験やプログラミング学習を簡素化するために設計されたプログラミング言語です。デスクトップソフトウェアの事前ダウンロードが不要で、これまで以上に簡単に始めることができます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)をご参照ください。

## CircuitPythonのインストール

- 公式の[**Seeeduino Wio Terminal用CircuitPythonブートローダー**](https://circuitpython.org/board/seeeduino_wio_terminal/)をダウンロードします。`.uf2`ファイルがダウンロードされます。

- USB Type-Cを使用してSeeeduino Wio TerminalをPCに接続します。

- 電源スイッチを素早く2回スライドしてブートローダーモードに入ります。詳細については[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq)も参照してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- PCに`Arduino`という名前の外部ドライブが表示されます。ダウンロードしたCircuitPythonのuf2ファイルを`Arduino`ドライブにドラッグします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- CircuitPythonブートローダーがロードされたら、USB Type-Cを一度抜いて再接続します。`CIRCUITPY`という名前の新しい外部ドライブが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- これで、Seeeduino Wio TerminalにCircuitPythonがロードされました！あとはPythonプログラムを作成し、`main.py`という名前で保存して`CIRCUITPY`ドライブにドラッグするだけです。

Wio TerminalのLCDが点灯するのが確認できるはずです。CircuitPythonはネイティブLCDディスプレイもサポートしています！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## CircuitPythonの基本

CircuitPythonを使用して`Blink`を実行する：

**注意:** 以下のコードをコピーして保存し、`main.py`という名前で`CIRCUITPY`ドライブにドラッグしてください。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    print("LED ON")
    time.sleep(1)
    led.value = False
    print("LED OFF")
    time.sleep(1)
```

内蔵LEDが点滅し始めるのが確認できるはずです！

### 内蔵光センサー

以下を実行して内蔵光センサーの値を取得します：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Wio Terminalの光センサーピン

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

さらにCircuitPython APIリファレンスについては、[**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)をご覧ください。

## リソース

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>