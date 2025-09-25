---
description: Seeed Studio XIAO RP2040 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-with-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO RP2040 と CircuitPython**

CircuitPython は、低コストのマイコンボードでの実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。事前にデスクトップでのダウンロードが不要で、これまで以上に簡単に始めることができます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始するだけです。とても簡単です。

## **はじめに**

### インストール

**ステップ 1** ブートローダーモードに入る

Seeed Studio XIAO RP2040 に CircuitPython をインストールする前に、ブートローダーモードが必要です。以下の操作でブートローダーモードに入ることができます：

- 「BOOT」ボタンを長押しします。（右に示すボードに「B」と書かれています）
- ボタンを押したまま、Seeed Studio XIAO PR2040 をコンピュータに接続します。
- コンピュータにディスクドライバ（RP1-RP2）が表示されます

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

ディスクが表示されます（RP1-RP2）：

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**ステップ 2** Seeed Studio XIAO RP2040 用の[ファームウェア](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2)をダウンロードします

**ステップ 3** .urf ファイルをディスクドライバ（「RP1-RP2」）にドラッグします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**ステップ 4** ディスクドライブの名前が「CIRCUITPY」に変更されているかを確認します。

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


これで、Seeed Studio XIAO RP2040 ボードに CircuitPython のインストールが正常に完了しました。

### LED点滅チュートリアル

**ステップ 1** CircuitPython エディタ - [Mu Editor](https://codewith.mu/en/download) をダウンロードします

**ステップ 2** 開いて、モードを「CircuitPython」として選択します

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**ステップ 3** 以下のコードをコピーしてアップロードします：

```cpp
"""Example for Pico. Blinks the built-in LED."""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

「Serial」をクリックして REPL を開き、コードを 'code.py' または 'main.py' として REPL に保存します

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


Seeed Studio XIAO RP2040 のユーザー LED が点滅します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>