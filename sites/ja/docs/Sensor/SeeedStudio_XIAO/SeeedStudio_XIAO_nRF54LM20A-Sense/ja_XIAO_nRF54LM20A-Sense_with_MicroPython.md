---
title: Seeed Studio XIAO nRF54LM20A Sense と MicroPython
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_started/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_micropython
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-06-15'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_micropython/
---

# Seeed Studio XIAO nRF54LM20A Sense と MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) は、パフォーマンスが重要なコード向けにネイティブコード出力をサポートする Python インタプリタです。マイコンやリソースに制約のあるシステム向けに最適化された、Python 3.6+ のコア機能のサブセットを提供します。これは CPython とは異なり、その違いについては [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) のページで詳しく読むことができます。

## XIAO nRF54LM20A Sense で MicroPython を使う

ここでは、**XIAO nRF54LM20A Sense** 上で **MicroPython** を使用し、Windows オペレーティングシステムを前提として [Thonny IDE](https://thonny.org/) でプログラムする方法を順を追って説明します。

### ハードウェアの準備

始める前に、XIAO nRF54LM20A Sense 開発ボードを 1 枚用意する必要があります。


<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### [Thonny IDE](https://thonny.org/) のインストール

使用している環境に合ったバージョンを選んでインストールします。ここでは Windows システムにインストールするため、Windows 版を選択しています。

使用したい Python バージョンに応じて、指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
その後は、デフォルトの手順に従って設定を進めるだけです。

### MicroPython ファームウェアの書き込み

次に、XIAO nRF54LM20A Sense に MicroPython ファームウェアを書き込む手順を説明します。

:::tip

ファームウェアを書き込む前に、XIAO nRF54LM20A Sense をコンピュータに接続してください。

:::


1. ファームウェア圧縮パッケージをダウンロードする


<div class="xiao_nrf54lm20a_flash.zip.zip" style={{textAlign: 'center'}}>
    <a class="xiao_nrf54lm20a_flash.zip.zip" href="https://github.com/Seeed-Studio/micropython-seeed-boards/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub リポジトリ</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. フォルダを解凍する

フォルダを任意のディレクトリに解凍すると、次のようなファイル内容が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/1.1.png" style={{width:400, height:'auto'}}/></div>

3. スクリプトを使用して MicroPython ファームウェアを書き込む

- Windows の場合、解凍したフォルダ内で右クリックして PowerShell ターミナルを開き、書き込みスクリプトを実行します。スクリプトが正しく実行されると、出力結果は次の図のようになります。

```bash
.\flash.bat
```


- Mac/Linux の場合

```bash
cd ~/xiao_nrf54lm20a_flash

sed -i '' $'s/\r$//' xiao_nrf54lm20a_flash.sh

chmod +x xiao_nrf54lm20a_flash.sh
./xiao_nrf54lm20a_flash.sh
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/2.png" style={{width:800, height:'auto'}}/></div>

### 書き込み結果のテスト

この章では主に、Thonny IDE の設定方法について説明します。



1. Thonny IDE を開き、右下をクリックしてインタプリタの設定を選択する準備をします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/3.png" style={{width:800, height:'auto'}}/></div>

2. **MicroPython (generic)** を選択し、デバイスに応じて対応する **Port** を選択して OK をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/4.png" style={{width:800, height:'auto'}}/></div>

3. 接続に成功すると、次の図のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/5.png" style={{width:800, height:'auto'}}/></div>

4. File -> New で新しいファイルを作成し、保存テストを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/6.png" style={{width:800, height:'auto'}}/></div>

5. ファームウェアを書き込んだ後、Python プログラムを作成し、RGB-B LED が 0.5 秒ごとに点滅するようにします。

```py
from machine import Pin
import time

led_r = Pin(("gpio1", 22), Pin.OUT)
led_g = Pin(("gpio1", 24), Pin.OUT)
led_b = Pin(("gpio1", 23), Pin.OUT)

led_r.value(1)
led_g.value(1)
led_b.value(1)

while True:
    led_b.value(0)          
    time.sleep_ms(500)     

    led_b.value(1)         
    time.sleep_ms(500)      
```

6. 左上のボタンをクリックしてプログラムを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/7.png" style={{width:800, height:'auto'}}/></div>

- プログラムの動作結果は次の図のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/12.gif" style={{width:800, height:'auto'}}/></div>

## デジタル

デジタルピンは主に、高レベルと低レベルの論理信号を出力することで、外部センサやアクチュエータのオン・オフ制御に使用されます。Grove Base for XIAO 拡張ボードと標準 Grove 周辺モジュールを組み合わせて、このセクションでは XIAO nRF54LM20A Sense 上で MicroPython を用いてデジタルピンを使用する方法を示します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置に従い、**D0 (P1.0)** を **Grove-Button** の制御ピンとして、**D1 (P1.31)** を **Grove-Piezo Buzzer** の制御ピンとして選択できます。

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

```python
"""
Grove Button (D0 / P1.0) + Grove Piezo Buzzer (D1 / P1.31) - Digital mode
Button pressed → Buzzer ON; Button released → Buzzer OFF
"""

import time
from boards.xiao import XiaoPin

BUTTON = 0   # D0  → P1.0 (Grove Button, onboard pull-down)
BUZZER = 1   # D1  → P1.31 (Grove Piezo Buzzer)

try:
    button = XiaoPin(BUTTON, XiaoPin.IN)
    buzzer = XiaoPin(BUZZER, XiaoPin.OUT)
    buzzer.value(0)
    print("Digital demo started. Press the button to activate the buzzer.")

    while True:
        val = button.value()
        buzzer.value(val)
        time.sleep(0.01)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    buzzer.value(0)
```

**コード解説：**

1. **インポートとピン定義：** `boards.xiao` の `XiaoPin` は GPIO 制御を提供します。`BUTTON = 0` は D0（P1.0）に対応し、`BUZZER = 1` は D1（P1.31）に対応します。
2. **初期化：** ボタンピンは入力として設定されます（Grove Button にはオンボードのプルダウン抵抗があり、押されたときに HIGH になります）。ブザーピンは出力として設定され、初期状態は LOW（オフ）です。
3. **メインループ：** ボタンの状態を連続的に読み取り、その値をそのままブザーに書き込みます。ボタンが押されている（HIGH）とブザーが鳴り、離すと（LOW）ブザーが止まります。10 ms のスリープでビジーループを防ぎます。
4. **クリーンアップ：** `finally` ブロックで、プログラム終了時にブザーがオフになることを保証します。

### 結果

プログラムを実行した後、ボタンを押すとブザーが鳴ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM は一定の周波数でピンのレベルを高速に切り替え、デューティサイクルを動的に調整することで、周辺機器に等価なアナログ信号を出力します。サーボモーターの精密な角度制御や、LED の滑らかな明るさ調整などに広く利用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置に従い、**D0 (P1.0)** を **Grove-Servo** の制御ピンとして選択できます。

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

```python
"""
Servo control on D0 (P1.0) via PWM (50 Hz).
Sweeps 0 → 180° and back.
"""

import time
from boards.xiao import XiaoPWM

SERVO_PIN = 0             # D0 → P1.0
FREQ = 50                 # Standard servo: 50 Hz
PERIOD_NS = 20_000_000    # 20 ms period in nanoseconds

# Standard servo: 0.5 ms → 0°, 2.5 ms → 180°
MIN_NS = 500_000
MAX_NS = 2_500_000

STEP_MS = 30              # 30 ms per degree step

try:
    servo = XiaoPWM(SERVO_PIN)
    servo.init(freq=FREQ, duty_ns=MIN_NS)
    print("PWM servo demo started on D0 (P1.0).")

    while True:
        # 0° → 180°
        for angle in range(0, 181):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

        # 180° → 0°
        for angle in range(180, -1, -1):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    servo.deinit()
```

**コード解説：**

1. **インポートと定数：** `XiaoPWM` は PWM 出力を提供します。一般的なホビー用サーボは 50 Hz で動作し、0.5〜2.5 ms のパルス幅が 0〜180° の回転に対応します。
2. **初期化：** PWM チャンネルは D0 上で 50 Hz の周波数に設定して初期化します。初期デューティサイクルは最小パルス幅（0° 位置）に設定されます。
3. **メインループ：** 2 つのネストされたループで、サーボを 0° から 180° までスイープし、その後元に戻します。角度は線形補間によってナノ秒単位のパルス幅に変換されます。現在の角度はコンソールに出力されます。
4. **クリーンアップ：** `servo.deinit()` は `finally` ブロック内で PWM リソースを解放します。

### 結果

ファームウェアを書き込むと、サーボは 0° から 180° まで毎秒 33 ラジアンの速度で回転し、その後 0° まで戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

同時に、現在のサーボ角度が USB シリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/13.png" style={{width:800, height:'auto'}}/></div>

## アナログ

アナログ入力は ADC（アナログ-デジタルコンバータ）に基づいており、主に外部センサからの連続的なアナログ電圧信号を取得するために使用されます。生のデジタルサンプリング値は、線形または非線形の変換アルゴリズムを用いて、実際の工学的な測定値にマッピングできます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置に従い、**D0 (P1.0, AIN0)** が ADC 入力ピンとして使用されます。ADC 値は 500 ms ごとに USB シリアルポート経由で読み取られ、出力されます。

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

```python
"""
Read ADC on D0 (P1.0 / AIN0) and print raw value every 500 ms.
"""

import time
from boards.xiao import XiaoADC

ADC_PIN = 0   # D0 → P1.0 (AIN0)

try:
    adc = XiaoADC(ADC_PIN)
    print("ADC demo started on D0 (P1.0 / AIN0).")

    while True:
        raw = adc.read_uv()
        voltage = raw / 1_000_000.0
        print("ADC raw: %d uV  |  Voltage: %.3f V" % (raw, voltage))
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

**コード解説：**

1. **インポート：** `boards.xiao` の `XiaoADC` は ADC 機能を提供します。`ADC_PIN = 0` は D0（P1.0 / AIN0）に対応します。
2. **初期化：** `XiaoADC(ADC_PIN)` によって、そのピンがアナログ-デジタル変換用に設定されます。
3. **メインループ：** `adc.read_uv()` はマイクロボルト（µV）単位の ADC 読み取り値を返します。この値を表示用にボルトに変換します。生の µV 値と電圧値の両方が 500 ms ごとに出力されます。
4. **エラー処理：** `try/except/finally` によって、正常に終了処理が行われるようにします。

### 結果

プログラムを書き込んだ後、Grove-Capacitive Soil Moisture Sensor を家庭用の鉢植えに挿し込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
PC 上でシリアルポートアシスタントを開き、出力値を観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/9.png" style={{width:800, height:'auto'}}/></div>

:::tip

電圧リファレンス読み取りテーブル
| 状態     | センサー出力電圧 | 期待される ADC 生データ値|
| -------------- | -------------- | ---------------- |
| 空気中（乾燥） | 約 2.0–2.4V      | 約 3400–4095       |
| 湿った土壌中       | 約 1.3–1.8V      | 約 2200–3000       |
| 完全に水に浸した場合   | 約 0.8–1.2V      | 約 1365–2048       |

:::

:::caution

部品ごとの個体差により、同じ環境でもモジュールごとの測定値が異なる場合があります。

:::

## UART

Universal Asynchronous Receiver/Transmitter（UART）は、標準的な非同期シリアル通信プロトコルです。同期のための外部クロック信号を必要とせず、両端で事前に設定したボーレートに依存してデータの送受信を行います。TX ピンと RX ピンをクロス接続するだけで、全二重のデータリンクを確立できます。

### ハードウェアの準備


<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>CH340G USB-to-Serial TTL Module Adapter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置によると、**D6 (P1.08)** と **D7 (P1.09)** は UART 通信の TX および RX ピンとして、ボーレート 115200 で使用されます。

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

```python
import time
from machine import UART
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

uart_id = xiao.uart("uart1")   # → "uart21"

uart = None
try:
    uart = UART(uart_id, baudrate=115200)
    print("UART demo started.")

    uart.write("========================================\r\n")
    uart.write("  UART Demo for XIAO nRF54LM20A Sense\r\n")
    uart.write("========================================\r\n")
    uart.write("Pin Configuration:\r\n")
    uart.write("  TX: D6 (P1.08)\r\n")
    uart.write("  RX: D7 (P1.09)\r\n")
    uart.write("  Baud Rate: 115200\r\n")
    uart.write("\r\nType something and press Enter to see it echoed.\r\n\r\n")

    heartbeat_count = 0
    last_heartbeat = time.ticks_ms()

    while True:
        if uart.any():
            data = uart.read()
            if data:
                uart.write(data)

        now = time.ticks_ms()
        if time.ticks_diff(now, last_heartbeat) >= 5000:
            last_heartbeat = now
            heartbeat_count += 1
            uart.write("\r\n[Heartbeat #%d]\r\n" % heartbeat_count)
            print("Heartbeat #%d" % heartbeat_count)

        time.sleep_ms(10)

except KeyboardInterrupt:
    print("\nStopped by user")
except Exception as e:
    print("\nError: %s" % e)
finally:
    if uart is not None:
        uart.deinit()
```

**コードの説明：**

1. **インポートとピンマッピング：** `machine.UART` はハードウェア UART へのアクセスを提供します。`xiao.pin(n)` は、ボード定義から指定したデジタルピン番号に対応するポートとピンのタプルを返します。
2. **初期化：** UART 1 は、TX を D6 (P1.08)、RX を D7 (P1.09) として、ボーレート 115200 で設定されます。起動時にウェルカムメッセージが送信されます。
3. **メインループ：** 受信したデータをエコーバックします。UART が動作し続けていることを確認するため、5 秒ごとにハートビートメッセージが送信されます。
4. **クリーンアップ：** `uart.deinit()` は、`finally` ブロック内で UART ハードウェアを解放します。

### 結果

1. 以下の表に従って配線します：

| XIAO nRF54LM20A Sense | CH340 |
| --------------------- | ----- |
| VBUS                  | 5V    |
| GND                   | GND   |
| D6 (P1.08) - TX       | RX    |
| D7 (P1.09) - RX       | TX    |

2. パソコンでシリアルポートモニタリングソフトウェアを開きます。設定された UART 情報が起動時に出力されます。デフォルトでは、`[Heartbeat #N] UART running...` という文字列が 5 秒ごとに出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/10.png" style={{width:600, height:'auto'}}/></div>

## I2C

I2C は同期式の半二重データ通信プロトコルです。SCL クロックラインと SDA データラインを介したアドレッシングによって複数デバイスの接続を可能にし、IMU や温湿度センサーなどのセンサーからデータを読み取ったり、OLED ディスプレイ出力に使用されたりするのが一般的です。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置によると、**D4 (P1.03)** と **D5 (P1.07)** は、それぞれ I2C の SDA および SCL ピンとして設定されています。この例では、I2C 経由で SSD1306 128×64 OLED ディスプレイを駆動します。

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

<details>

<summary>oled.py</summary>

```python
"""
SSD1306 128x64 OLED display via I2C on XIAO nRF54LM20A Sense.
SDA: D4 (P1.03), SCL: D5 (P1.07)
"""

import time
from boards.xiao import XiaoI2C

SDA = 4          # D4 → P1.03
SCL = 5          # D5 → P1.07
I2C_BUS = "i2c0"
FREQ = 400_000   # 400 kHz

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font data
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))
    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]
    for cmd in commands:
        ssd1306_write_commands(cmd)
    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_draw_text(text, x, y):
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))
    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)
    ssd1306_write_data(display_data)

try:
    i2c = XiaoI2C(I2C_BUS, SDA, SCL, FREQ)
    print("I2C initialized on %s (SDA: D%d, SCL: D%d)" % (I2C_BUS, SDA, SCL))

    i2c_addr = i2c.scan()
    if SSD1306_I2C_ADDR not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

    # Initialize display and draw text
    ssd1306_init()
    ssd1306_draw_text("NRF54LM20A", 22, 2)
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    print("Display updated. Running...")

    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

**コード解説：**

1. **インポートとピン定義：** `boards.xiao` の `XiaoI2C` は I2C バス管理を提供します。SDA は D4（P1.03）、SCL は D5（P1.07）に接続され、バスは 400 kHz で動作します。
2. **SSD1306 ドライバ：** SSD1306 OLED ディスプレイは、生の I2C コマンド／データ書き込みで制御します。`ssd1306_write_command()`、`ssd1306_write_data()`、`ssd1306_clear()`、`ssd1306_init()`、`ssd1306_draw_text()` のヘルパー関数によって、最小限のドライバを構成しています。
3. **フォントデータ：** 8×8 ビットマップフォントのディクショナリが、印字可能な ASCII 文字のグリフ定義を提供します。`ssd1306_draw_text()` 関数は、テキスト文字列をグリフビットマップで検索し、それをディスプレイに送信することで描画します。
4. **メインロジック：** I2C バスをスキャンして、SSD1306 がアドレス `0x3C` に存在することを確認します。ディスプレイを初期化し、中央揃えの 2 行のテキスト（"NRF54LM20A" と "HELLO WORLD"）を描画します。
5. **クリーンアップ：** `try/except` ブロックにより、キーボード割り込みやエラー発生時に、正常にシャットダウンできるようにします。

### 結果


プログラムの実行後、テキスト **NRF54LM20A** と **HELLO WORLD** が画面に表示され、ステータス情報が USB シリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI は、高速で同期式かつフルデュプレックスの通信プロトコルです。データ同期のための専用 SCK クロックラインに依存し、MOSI、MISO、SCK、CS/SS ピンからなる 4 線式トポロジを採用しています。高解像度ディスプレイの駆動、Flash/SD カードストレージ、高周波サンプリングセンサなどに広く利用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A Sense のピン配置に従い、SPI 設定では次のピンを使用します：

| 機能 | デジタルピン | 物理ピン |
| -------- | ----------- | ------------ |
| SCK      | D8          | P1.04        |
| MOSI     | D10         | P1.06        |
| MISO     | D9          | P1.05        |
| CS       | D1          | P1.31        |
| DC       | D3          | P1.29        |

:::tip

- XIAO nRF54LM20A Sense のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

```python
import time
from machine import Pin, SPI
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

cs  = Pin(("gpio1", 31), Pin.OUT)   # D1
dc  = Pin(("gpio1", 29), Pin.OUT)   # D3
bl  = Pin(("gpio1", 8), Pin.OUT)   
rst = Pin(("gpio1", 30), Pin.OUT)   # D2 

spi_id = xiao.spi("spi0") 
spi = SPI(spi_id, baudrate=8000000, polarity=0, phase=0)

cs.value(1)
dc.value(1)
bl.value(1) 

LCD_W = 240
LCD_H = 240

def write_command(cmd):
    dc.value(0); cs.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    cs.value(1)

def write_data(data):
    dc.value(1); cs.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(bytearray(data))
    cs.value(1)

def set_addr_window(x0, y0, x1, y1):
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2A]))
    dc.value(1)
    spi.write(bytearray([x0>>8, x0&0xFF, x1>>8, x1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2B]))
    dc.value(1)
    spi.write(bytearray([y0>>8, y0&0xFF, y1>>8, y1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2C]))
    cs.value(1)

def init_display():
    # Hardware reset (if reset pin is connected)
    rst.value(1)
    time.sleep_ms(10)
    rst.value(0)
    time.sleep_ms(10)
    rst.value(1)
    time.sleep_ms(120)

    # GC9A01 full initialization sequence
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)

    write_command(0xFE) 
    write_command(0xEF) 

    write_command(0xEB)
    write_data(0x14)

    write_command(0x84)
    write_data(0x40)

    write_command(0x85)
    write_data(0xFF)

    write_command(0x86)
    write_data(0xFF)

    write_command(0x87)
    write_data(0xFF)

    write_command(0x88)
    write_data(0x0A)

    write_command(0x89)
    write_data(0x21)

    write_command(0x8A)
    write_data(0x00)

    write_command(0x8B)
    write_data(0x80)

    write_command(0x8C)
    write_data(0x01)

    write_command(0x8D)
    write_data(0x01)

    write_command(0x8E)
    write_data(0xFF)

    write_command(0x8F)
    write_data(0xFF)

    write_command(0xB6)
    write_data(0x00)
    write_data(0x20)

    write_command(0x36)
    write_data(0x08)  # Memory access control, adjust rotation direction as needed

    write_command(0x3A)
    write_data(0x05)  # RGB565 16-bit color mode

    write_command(0x90)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08) 

    write_command(0xBD)
    write_data(0x06)

    write_command(0xBC)
    write_data(0x00)

    write_command(0xFF)
    write_data(0x60)
    write_data(0x01)
    write_data(0x04)

    write_command(0xC3)
    write_data(0x13)
    write_command(0xC4)
    write_data(0x13)

    write_command(0xC9)
    write_data(0x22)

    write_command(0xBE)
    write_data(0x11)

    write_command(0xE1)
    write_data(0x10)
    write_data(0x0E)

    write_command(0xDF)
    write_data(0x21)
    write_data(0x0c)
    write_data(0x02)

    write_command(0xF0)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF1)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xF2)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF3)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xED)
    write_data(0x1B)
    write_data(0x0B)

    write_command(0xAE)
    write_data(0x77)

    write_command(0xCD)
    write_data(0x63)

    write_command(0x70)
    write_data(0x07)
    write_data(0x07)
    write_data(0x04)
    write_data(0x0E) 
    write_data(0x0F)
    write_data(0x09)
    write_data(0x07)
    write_data(0x08)
    write_data(0x03)

    write_command(0xE8)
    write_data(0x34)

    write_command(0x62)
    write_data(0x18)
    write_data(0x0D)
    write_data(0x71)
    write_data(0xED)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x0F)
    write_data(0x71)
    write_data(0xEF)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x63)
    write_data(0x18)
    write_data(0x11)
    write_data(0x71)
    write_data(0xF1)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x13)
    write_data(0x71)
    write_data(0xF3)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x64)
    write_data(0x28)
    write_data(0x29)
    write_data(0xF1)
    write_data(0x01)
    write_data(0xF1)
    write_data(0x00)
    write_data(0x07)

    write_command(0x66)
    write_data(0x3C)
    write_data(0x00)
    write_data(0xCD)
    write_data(0x67)
    write_data(0x45)
    write_data(0x45)
    write_data(0x10)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)

    write_command(0x67)
    write_data(0x00)
    write_data(0x3C)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_data(0x01)
    write_data(0x54)
    write_data(0x10)
    write_data(0x32)
    write_data(0x98)

    write_command(0x74)
    write_data(0x10)
    write_data(0x85)
    write_data(0x80)
    write_data(0x00)
    write_data(0x00)
    write_data(0x4E)
    write_data(0x00)

    write_command(0x98)
    write_data(0x3e)
    write_data(0x07)

    write_command(0x35) 
    write_command(0x21)

    write_command(0x11)
    time.sleep_ms(120)

    write_command(0x29)
    time.sleep_ms(120)

    bl.value(0) 
    print("Seeed Studio Round Display & Backlight Active!")

def fill_screen(color):
    hi = (color >> 8) & 0xFF
    lo = color & 0xFF
    set_addr_window(0, 0, LCD_W-1, LCD_H-1)
    dc.value(1); cs.value(0)
    buf = bytearray([hi, lo] * LCD_W)
    for _ in range(LCD_H):
        spi.write(buf)
    cs.value(1)

init_display()

colors = [
    (0xF800, "RED"),
    (0x07E0, "GREEN"),
    (0x001F, "BLUE"),
    (0xFFE0, "YELLOW"),
    (0x07FF, "CYAN"),
    (0xF81F, "MAGENTA"),
    (0x0000, "BLACK"),
    (0xFFFF, "WHITE"),
]

while True:
    for color, name in colors:
        print("Solid: %s" % name)
        fill_screen(color)
        time.sleep_ms(1000)
```

### 結果

プログラムを実行すると、ラウンドディスプレイは赤、緑、青、黄、シアン、マゼンタの順に更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:400, height:'auto'}}/></div>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
