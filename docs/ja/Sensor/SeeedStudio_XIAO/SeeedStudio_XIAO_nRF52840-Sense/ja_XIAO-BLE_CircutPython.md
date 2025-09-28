---
description: Seeed Studio XIAO nRF52840 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE_CircutPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO nRF52840 と CircuitPython**

CircuitPython は、低コストのマイコンボードでのプログラミングの実験と学習を簡素化するために設計されたプログラミング言語です。事前のデスクトップダウンロードが不要で、これまで以上に簡単に始めることができます。ボードをセットアップしたら、任意のテキストエディタを開いて、コードの編集を開始するだけです。それほど簡単です。

## **はじめに**

### インストール

**ステップ 1** ブートローダーモードに入る

Seeed Studio XIAO nRF52840 に CircuitPython をインストールする前に、ブートローダーモードが必要です。リセットボタンを2回クリックすることで、ブートローダーモードに入ることができます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

すると、ディスクが表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**ステップ 2** Seeed Studio XIAO nRF52840 用の[ファームウェア](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2)をダウンロードする

**ステップ 3** .uf2ファイルをディスクドライバー（"XIAO-SENSE"）にドラッグする

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**ステップ 4** ディスクドライバーの名前が"CIRCUITPY"に変更されているかを確認する

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

これで、Seeed Studio XIAO nRF52840 ボードに CircuitPython を正常にインストールできました。

### アプリケーション

**ステップ 1** CircuitPython エディター - [Mu Editor](https://codewith.mu/en/download) をダウンロードして開く

**ステップ 2** "Mode"をクリックして、モードを"CircuitPython"として選択する

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3** 以下のコードをコピーしてアップロードする：

```cpp
"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""
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

"Serial"をクリックしてREPLを開き、コードを'code.py'または'main.py'としてREPLに保存する

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO nRF52840 のユーザーLEDが点滅します。

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