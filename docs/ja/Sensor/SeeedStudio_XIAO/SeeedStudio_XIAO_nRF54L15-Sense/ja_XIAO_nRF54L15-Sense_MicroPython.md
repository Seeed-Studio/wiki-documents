---
description: |
title: Seeed Studio XIAO nRF54L15 Sense 用 MicroPython
keywords: 
- nRF54L15
- xiao
- MicroPython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.webp
slug: /ja/xiao_nrf54l15_sense_micropython
last_update:
  date: 9/23/2025
  author: Sherlock
---

このチュートリアルは、XIAO nRF54L15 を基に Thonny で MicroPython を使用する方法を紹介することを目的としています。

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を持つ Python インタープリターです。組み込みプロセッサーと制約のあるシステム向けに実装された Python 3.5 機能のサブセットを提供します。CPython とは異なり、違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。

<!-- ## 安装Python3
Thonny自带Python解释器，所以不需要额外安装Python环境
Win + R -->

## Thonny IDE を使用する

XIAO nRF54L15 を準備します。

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO nRF54L15 Sense</th>
</tr>
<tr>
<th><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></th>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### Thonny IDE をインストールする

[Thonny IDE](https://thonny.org/)

インストールに適したバージョンを選択してください。ここでは Windows システムにインストールするため、Windows バージョンを選択しました。

希望する Python バージョンの指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div>

その後、設定のデフォルト手順に従うだけです。

### リポジトリをダウンロードする

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ローカルマシンにクローンし、この XIAO nRF54L15 の MicroPython が保存されているパスを覚えておいてください。このパスは後で使用します。

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### ボードファイルをアップロードする

**ステップ 1.** XIAO nRF54L15 用の MicroPython ファームウェアをフラッシュする

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- ファームウェアパッケージをダウンロードして適切な場所に展開します。その後、flash.bat をクリックすると、自動的にファームウェアがフラッシュされます。

    **[ファームウェア]** [XIAO nRF54L15 MicroPython ファームウェア](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao54_flash.zip)
<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/MicroPython_firmware_1.png" style={{width:600, height:'auto'}}/></div>

:::tip
このスクリプトには事前設定されたフラッシュツールチェーンコマンドがあります。初回使用時は少し時間がかかる場合があります。
:::

**ステップ 2.** Thonny IDE を開き、インターフェースの右下角をクリックしてインタープリターオプションを設定します。MicroPython (generic) とポートを選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_1.png" style={{width:600, height:'auto'}}/></div>

**ステップ 3.** ボードファイルをアップロードする

- ビューを開き、"File" を選択すると、ファイルマネージャーパスが左サイドバーに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_2.png" style={{width:600, height:'auto'}}/></div>

- クローンまたはダウンロードしたファイルのパスを開き、`micropython-seeed-boards\examples` を開きます
- "boards" フォルダを選択してフラッシュにアップロードします。その後、MicroPython デバイス/フラッシュにアップロードされたファイルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_3.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4.** LED を点灯させる

コードをコピーして `F5` を押して実行します。

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

結果は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## デジタル

### ハードウェア

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
         <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/button.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```py
import time
from boards.xiao import XiaoPin

button = "sw"
relay = 0      #D0

try:
    # Initialize button and relay
    button = XiaoPin(button, XiaoPin.IN)
    relay = XiaoPin(relay, XiaoPin.OUT)
    relay.value(0)
    while True:
        # Read button state 
        button_state = button.value()

        # Control relay based on button state
        if button_state == 0:       
            relay.value(1)         
        else:                      
            relay.value(0)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    relay.off()
```

コードの説明：

- **モジュールのインポート**
        - `time` time モジュールをインポートします
        - `Xiao Pin` boards.xiao モジュールから Seeed Xiao 開発ボード用のピン制御クラスをインポートします。これはボード上のピンを操作するために使用されます。

- **ピンの定義**
        - `button = "sw"` ボタンが開発ボードの "sw" ピン（ここでは BOOT ピン）に接続されていることを指定します
        - `relay = 0` リレーがデジタルピン D0 に接続されていることを指定します。

- **メインロジック（try ブロック）**
        - ボタンが押されたとき（状態は0）→ リレーが作動します（出力は1）。
        - ボタンが押されていないとき（状態は1）→ リレーが非作動になります（出力は0）。

### 結果
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light2.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

### ハードウェア

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
         <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェア

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/adc.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM

adc = 0    #D0
pwm = 1    #D1

try:
    # Initialize ADC for potentiometer
    adc = XiaoADC(adc)            
    # Initialize PWM for LED control
    pwm = XiaoPWM(pwm)     
    FREQ = 1000                     
    PERIOD_NS = 1000000             
    pwm.init(freq=FREQ, duty_ns=0)  
    # Potentiometer parameters
    MIN_VOLTAGE = 0.0      
    MAX_VOLTAGE = 3.3     
    DEAD_ZONE = 0.05   
    last_duty = -1 
    while True:
        # Read ADC voltage value
        voltage = adc.read_uv() / 1000000  

        # Ensure voltage is within valid range
        if voltage < MIN_VOLTAGE:
            voltage = MIN_VOLTAGE
        elif voltage > MAX_VOLTAGE:
            voltage = MAX_VOLTAGE

        duty_percent = (voltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)

        # Apply dead zone to prevent tiny fluctuations
        if abs(duty_percent - last_duty) < DEAD_ZONE / 100:
            time.sleep(0.05)
            continue

        # Calculate duty cycle time (nanoseconds)
        duty_ns = int(duty_percent * PERIOD_NS)

        # Set PWM duty cycle
        pwm.duty_ns(duty_ns)

        # Print current status
        print("Voltage: {:.2f}V, Duty Cycle: {:.1f}%".format(voltage, duty_percent * 100))

        # Update last duty cycle value
        last_duty = duty_percent

        # Short delay
        time.sleep(0.05)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    pwm.deinit()
```

コードの説明：

- **依存ライブラリのインポート**
        - `time`：遅延を追加し、プログラムの実行リズムを制御するために使用されます。
        - `boards.xiao`：Xiao開発ボードのハードウェア制御クラスをインポートします。以下が含まれます：
        - `XiaoADC`：アナログ信号（ポテンショメータの出力など）を読み取るために使用されます。
        - `XiaoPWM`：PWM信号を生成するために使用されます（LED の明るさを制御）。

- **ハードウェアピンの定義**
        - `adc`は開発ボードのD0ピンに対応し（ポテンショメータの出力を接続するために使用）、`pwm`はD1ピンに対応します（LEDを接続するために使用）。

- **ハードウェアの初期化（tryブロック）**
        - `XiaoADC(adc)`：D0ピンをADC入力モードとして初期化し、ポテンショメータの電圧信号を読み取ります。
        - `XiaoPWM(pwm)`：D1ピンをPWM出力モードとして初期化し、LEDを制御します。
        - `PWMパラメータ`：1000Hzの周波数は、信号周期が1ミリ秒（1e6ナノ秒）であることを意味します。デューティサイクル（周期のうちハイレベルが持続する割合）がLEDの明るさを決定します（デューティサイクルが高いほど、LEDが明るくなります）。

- **メインループ（コアロジック）**
        - 電圧読み取り：ADCを通じてポテンショメータが出力する電圧を読み取ります（単位をボルトに変換）。
        - 範囲制限：電圧が0〜3.3Vの範囲内にあることを確認します（ハードウェア安全範囲）。
        - デューティサイクル計算：電圧を0〜1のデューティサイクルに線形変換します（例：1.65Vは50%のデューティサイクルに対応）。
        - デッドゾーン処理：軽微な電圧変動（ノブの軽微な振動など）を無視し、LEDの頻繁な変化を防ぎます。
        - LED制御：PWMデューティサイクルを通じてLEDの明るさを調整します（デューティサイクルが高いほど、LEDが明るくなります）。

### 結果
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:500, height:'auto'}}/></div>

## UART

### ハードウェア

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/imu.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>コード</summary>

```py
from boards.xiao import XiaoUART
import time
import math

uart = "uart1"
baudrate = 9600
tx = 6              # D6
rx = 7              # D7

# Coordinate structure
class Coordinates:
    def __init__(self, Lon=0.0, Lat=0.0):
        self.Lon = Lon
        self.Lat = Lat

# GPS data structure
class GNRMC:
    def __init__(self):
        self.Lon = 0.0      # GPS Longitude
        self.Lat = 0.0      # GPS Latitude
        self.Lon_area = ''  # E or W
        self.Lat_area = ''  # N or S
        self.Time_H = 0     # Time Hour
        self.Time_M = 0     # Time Minute
        self.Time_S = 0     # Time Second
        self.Status = 0     # 1: Successful positioning, 0: Positioning failed

# Convert WGS-84 to GCJ-02
def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * pi) + 40.0 * math.sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * pi) + 320 * math.sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

# Convert WGS-84 to GCJ-02
def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * pi) + 40.0 * math.sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * pi) + 300.0 * math.sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# Convert GCJ-02 to BD-09
def bd_encrypt(gg):
    bd = Coordinates()
    x = gg.Lon
    y = gg.Lat
    z = math.sqrt(x * x + y * y) + 0.00002 * math.sin(y * x_pi)
    theta = math.atan2(y, x) + 0.000003 * math.cos(x * x_pi)
    bd.Lon = z * math.cos(theta) + 0.0065
    bd.Lat = z * math.sin(theta) + 0.006
    return bd

# Convert WGS-84 to GCJ-02
def transform(gps):
    gg = Coordinates()
    dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0)
    dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0)
    radLat = gps.Lat / 180.0 * pi
    magic = math.sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * math.cos(radLat) * pi)
    gg.Lat = gps.Lat + dLat
    gg.Lon = gps.Lon + dLon
    return gg

# Convert to Baidu coordinates (BD-09)
def L76X_Baidu_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    bd09_coords = bd_encrypt(gcj02_coords)
    return bd09_coords

# Convert to Google coordinates (GCJ-02)
def L76X_Google_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    return gcj02_coords

# Parse GNRMC NMEA sentence
def parse_gnrmc(nmea_sentence):
    gps = GNRMC()

    if not nmea_sentence.startswith(b'$GNRMC') and not nmea_sentence.startswith(b'$PNRMC'):
        return gps

    try:
        # Convert to string and split by commas
        sentence_str = nmea_sentence.decode('ascii', 'ignore')
        fields = sentence_str.split(',')

        if len(fields) < 12:
            return gps

        # Parse time field (HHMMSS.sss)
        if fields[1]:
            time_str = fields[1]
            if '.' in time_str:
                time_str = time_str.split('.')[0]
            if len(time_str) >= 6:
                gps.Time_H = int(time_str[0:2]) + 8  # GMT+8
                gps.Time_M = int(time_str[2:4])
                gps.Time_S = int(time_str[4:6])
                if gps.Time_H >= 24:
                    gps.Time_H -= 24

        # Parse status
        gps.Status = 1 if fields[2] == 'A' else 0

        if gps.Status == 1:
            # Parse latitude (DDMM.MMMMM)
            if fields[3] and fields[4]:
                lat_str = fields[3]
                if '.' in lat_str:
                    degrees = float(lat_str[0:2])
                    minutes = float(lat_str[2:])
                    gps.Lat = degrees + minutes / 60.0
                    gps.Lat_area = fields[4]

            # Parse longitude (DDDMM.MMMMM)
            if fields[5] and fields[6]:
                lon_str = fields[5]
                if '.' in lon_str:
                    degrees = float(lon_str[0:3])
                    minutes = float(lon_str[3:])
                    gps.Lon = degrees + minutes / 60.0
                    gps.Lon_area = fields[6]

    except Exception as e:
        print("Parse error:", e)

    return gps

# Print formatted GPS data
def print_gps_data(gps):
    print("\n--- GPS Data ---")
    print("Time (GMT+8): {:02d}:{:02d}:{:02d}".format(gps.Time_H, gps.Time_M, gps.Time_S))
    if gps.Status == 1:
        print("Latitude (WGS-84): {:.6f} {}".format(gps.Lat, gps.Lat_area))
        print("Longitude (WGS-84): {:.6f} {}".format(gps.Lon, gps.Lon_area))

        # Coordinate conversion
        baidu_coords = L76X_Baidu_Coordinates(gps)
        google_coords = L76X_Google_Coordinates(gps)

        print("Baidu Latitude: {:.6f}".format(baidu_coords.Lat))
        print("Baidu Longitude: {:.6f}".format(baidu_coords.Lon))
        print("Google Latitude: {:.6f}".format(google_coords.Lat))
        print("Google Longitude: {:.6f}".format(google_coords.Lon))
        print("GPS positioning successful.")
    else:
        print("GPS positioning failed or no valid data.")

try:
    uart = XiaoUART(uart, baudrate, tx, rx)
    # Initialize UART
    uart.init(9600, bits=8, parity=None, stop=1)
    # Buffer to accumulate complete messages
    buffer = bytearray()
    # Constants for coordinate transformation
    pi = 3.14159265358979324
    a = 6378245.0
    ee = 0.00669342162296594323
    x_pi = 3.14159265358979324 * 3000.0 / 180.0
    while True:
        available = uart.any()
        if available > 0:
            # Read all available bytes
            data = uart.read(available)
            buffer.extend(data)
            # Check if we have a complete line (ends with newline)
            if b'\n' in buffer:
                # Find the newline position
                newline_pos = buffer.find(b'\n')
                # Extract the complete message
                complete_message = buffer[:newline_pos + 1]
                # Remove the processed part from buffer
                buffer = buffer[newline_pos + 1:]
                # Parse GNRMC sentences
                if complete_message.startswith(b'$GNRMC') or complete_message.startswith(b'$PNRMC'):
                    gps_data = parse_gnrmc(complete_message)
                    print_gps_data(gps_data)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    uart.deinit()
```

</details>

- **モジュールのインポート**
        - `XiaoUART` `boards.xiao`モジュールからSeeed Xiao開発ボード用のUART通信クラスをインポートし、シリアル通信の初期化と制御に使用します。
        - `time` タイミング関連の機能をサポートするためにtimeモジュールをインポートします（ここでは直接使用されませんが、将来の使用や互換性のためにインポートされています）。
        - `math` 座標変換アルゴリズムに必要な数学関数（`sin`、`cos`、`sqrt`、`atan2`など）をインポートします。

- **UART設定の定義**
        - `uart = "uart1"` 使用するUARTコントローラーインスタンスを指定します — ここでは`uart1`。
        - `baudrate = 9600` シリアル通信のボーレートを9600 bpsに設定します。
        - `tx = 6` UART送信ピン（TX）がデジタルピンD6に接続されていることを指定します。
        - `rx = 7` UART受信ピン（RX）がデジタルピンD7に接続されていることを指定します。

- **データ構造の定義**
        - `Coordinates`クラス：経度/緯度の値を浮動小数点数として格納するシンプルなコンテナ。
        - `GNRMC`クラス：`$GNRMC` NMEA文から解析されたGPSデータを表します。含まれる内容：
            - 十進度での緯度/経度
            - 半球インジケータ（`N/S`、`E/W`）
            - 時刻（時、分、秒 — GMT+8に調整）
            - ステータスフラグ（1 = 有効な測位、0 = 測位なし）

- **座標変換関数**
        - `transformLat(x, y)` & `transformLon(x, y)` — WGS-84 → GCJ-02変換アルゴリズムの一部を実装するヘルパー関数（中国でのマップ難読化に使用）。
        - `bd_encrypt(gg)` — 追加のオフセットと回転を適用してGCJ-02座標をBaiduのBD-09座標系に変換します。
        - `transform(gps)` — 楕円地球モデルに基づく複雑な三角関数式を使用してWGS-84（生GPS）座標をGCJ-02に変換するメイン関数。
        - `L76X_Baidu_Coordinates(gps)` — 生GPS（WGS-84）→ GCJ-02 → BD-09（Baiduマップ形式）に変換するラッパー。
        - `L76X_Google_Coordinates(gps)` — 生GPS（WGS-84）→ GCJ-02（中国でのGoogleマップ形式）に変換するラッパー。

- **GNRMC文の解析**
        - `parse_gnrmc(nmea_sentence)` — 生NMEA `$GNRMC`または`$PNRMC`文字列を構造化された`GNRMC`オブジェクトに解析します。
            - 時刻を抽出（UTCからGMT+8に変換）。
            - ステータスをチェック（`A` = アクティブ/有効な測位、`V` = 無効）。
            - DDMM.MMMMM形式から緯度/経度を解析 → 十進度。
            - 入力された`GNRMC`オブジェクトまたは解析に失敗した場合はデフォルトの空のオブジェクトを返します。

- **フォーマットされたGPSデータの表示**
        - `print_gps_data(gps)` — 以下を含む人間が読みやすいGPS情報を印刷します：
            - 現地時刻（GMT+8）
            - 半球付きの生WGS-84座標
            - 変換されたGCJ-02（Google互換）およびBD-09（Baidu互換）座標
            - 測位が成功したかどうかを示すステータスメッセージ

- **メインロジック（tryブロック）**
        - 指定されたパラメータでUARTインターフェースを初期化します。
        - 座標計算に必要なグローバル定数を定義（`pi`、`a`、`ee`、`x_pi`）— 地球楕円体パラメータとスケーリング係数。
        - UART経由で受信するGPSデータを継続的に読み取る無限ループに入ります。
            - `buffer`を使用して完全な行（`\n`で終わる）が受信されるまで部分的なメッセージを蓄積します。
            - 完全な行が到着したとき：
                - `$GNRMC`または`$PNRMC`で始まるかチェック
                - そうであれば、`parse_gnrmc()`を使用して解析
                - `print_gps_data()`を介してフォーマットされた出力を表示
        - 例外を処理：
            - `KeyboardInterrupt`：Ctrl+Cで正常に終了。
            - 一般的な`Exception`：予期しないエラーをキャッチして印刷。
        - 最後に、終了前にUARTリソースをクリーンアップするために`uart.deinit()`を呼び出します。

### 結果
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

## I2C

### ハードウェア

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
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
</div>

### ソフトウェア

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/oled.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>コード</summary>

```py
import time
from boards.xiao import XiaoI2C

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

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

# Basic 8x8 font 
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

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))

    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Initialize SSD1306 display with recommended settings
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

# Draw a string of text at specified column and page (row) on SSD1306
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

i2c_addr = i2c.scan()
if SSD1306_I2C_ADDR not in i2c_addr:
    raise Exception("SSD1306 not found on I2C bus")
else:
    print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

# Initialize display
ssd1306_init()
ssd1306_draw_text("NRF54L15", 30, 2)
ssd1306_draw_text("HELLO WORLD", 20, 4)
```

</details>

コード説明：

- **モジュールのインポート**
        - `time` 遅延などの時間関連機能を有効にするためにtimeモジュールをインポートします。
        - `XiaoI2C` `boards.xiao`モジュールからSeeed Xiao開発ボード用のI2C通信クラスをインポートし、I2Cペリフェラルの初期化と制御に使用します。

- **I2C設定の定義**
        - `sda = 4` I2CバスのSDA（データ）ラインがデジタルピンD4に接続されていることを指定します。
        - `scl = 5` I2CバスのSCL（クロック）ラインがデジタルピンD5に接続されていることを指定します。
        - `i2c = "i2c0"` 使用するI2Cコントローラーインスタンスを指定します — ここでは`i2c0`です。
        - `frq = 400000` I2Cバス周波数を400 kHz（標準高速モード）に設定します。
        - `i2c = XiaoI2C(i2c, sda, scl, frq)` 指定されたパラメータでI2Cインターフェースを初期化します。

- **SSD1306定数の定義**
        - `SSD1306_I2C_ADDR = 0x3C` SSD1306 OLEDディスプレイのデフォルトI2Cアドレスです。
        - 各種コマンド定数（`SSD1306_SET_CONTRAST`、`SSD1306_DISPLAY_ON`など）は、ディスプレイハードウェアの設定と制御のための制御コマンドを定義します。
        - `SSD1306_WIDTH = 128`、`SSD1306_HEIGHT = 64`、`SSD1306_PAGES = 8` ディスプレイの解像度とページ構造を定義します（各ページは8行の高さ）。

- **フォントデータの定義**
        - `font_data` ASCII文字を8x8ピクセルのビットマップ表現にマッピングする辞書です。各文字は8バイトのリストとして表現され、各バイトは1行のピクセルに対応します（LSB = 最左ピクセル）。

- **ヘルパー関数**
        - `ssd1306_write_command(cmd)` 制御バイト`0x00`を使用してI2C経由でSSD1306に単一のコマンドバイトを送信します。
        - `ssd1306_write_commands(cmds)` 1つのトランザクションで複数のコマンドバイトを送信します。
        - `ssd1306_write_data(data)` 制御バイト`0x40`（データモード）を使用してSSD1306にディスプレイデータバイトを送信します。
        - `ssd1306_clear()` すべてのページと列にゼロバイトを書き込んでディスプレイ全体をクリアします。
        - `ssd1306_init()` コントラスト、マルチプレックス比、メモリモード、ディスプレイオンなどの推奨設定でSSD1306ディスプレイを初期化します。
        - `ssd1306_draw_text(text, x, y)` 列`x`とページ`y`から始まるテキストを描画します。各文字を8x8フォントビットマップに変換し、90°時計回りに回転させ（ディスプレイの向きに合わせるため）、ピクセルデータをディスプレイバッファに書き込みます。

- **メインロジック（初期化とディスプレイ）**
        - `i2c.scan()` I2Cバスをスキャンして接続されたデバイスを検出します。
        - SSD1306がアドレス`0x3C`で見つからない場合、例外が発生します。そうでなければ、成功メッセージが印刷されます。
        - `ssd1306_init()` ディスプレイハードウェアを初期化します。
        - `ssd1306_draw_text("NRF54L15", 30, 2)` 文字列"NRF54L15"を列30、ページ2（≈行16）から描画します。
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)` 文字列"HELLO WORLD"を列20、ページ4（≈行32）から描画します。

### 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/i2c_result.png" style={{width:500, height:'auto'}}/></div>

## SPI

### ハードウェア

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio XIAO用ePaperドライバーボード</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/imu.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>コード</summary>

```py
import time
from boards.xiao import XiaoPin, XiaoSPI

# -------- Pins & SPI --------
RST = 0; CS = 1; DC = 3; BUSY = 5
sck = 9; mosi = 10; miso = 8; spi_id = "spi0"

RST = XiaoPin(RST, XiaoPin.OUT)
CS  = XiaoPin(CS, XiaoPin.OUT)
DC  = XiaoPin(DC, XiaoPin.OUT)
BUSY = XiaoPin(BUSY, XiaoPin.IN, XiaoPin.PULL_UP)
spi = XiaoSPI(spi_id, 20_000_000, sck, mosi, miso)

# -------- ePaper basics --------
def reset():
    RST.value(0); time.sleep_ms(10)
    RST.value(1); time.sleep_ms(10)

def send_command(cmd):
    DC.value(0); CS.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    CS.value(1)

def send_data(data):
    DC.value(1); CS.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(data)
    CS.value(1)

def wait_until_idle():
    # If BUSY = 0, it indicates that the device is busy. You can then switch back to polling.
    # while BUSY.value() == 0: time.sleep_ms(1)
    time.sleep_ms(1)

def init_display():
    reset()
    send_command(0x00); send_data(0x1F)
    send_command(0x04); time.sleep_ms(100); wait_until_idle()
    send_command(0x50); send_data(0x21); send_data(0x07)

def clear_screen():
    CS.value(0)
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Geometry --------
WIDTH, HEIGHT = 800, 480
BYTES_PER_ROW = WIDTH // 8
linebuf = bytearray(BYTES_PER_ROW)

# -------- Minimal 5x7 glyphs (columns, LSB=top) --------
FONT_W, FONT_H = 5, 7
G = {
    ' ':[0x00,0x00,0x00,0x00,0x00],
    # Digits
    '0':[0x3E,0x51,0x49,0x45,0x3E],
    '1':[0x00,0x42,0x7F,0x40,0x00],
    '2':[0x42,0x61,0x51,0x49,0x46],
    '3':[0x21,0x41,0x45,0x4B,0x31],
    '4':[0x18,0x14,0x12,0x7F,0x10],
    '5':[0x27,0x45,0x45,0x45,0x39],
    '6':[0x3C,0x4A,0x49,0x49,0x30],
    '7':[0x01,0x71,0x09,0x05,0x03],
    '8':[0x36,0x49,0x49,0x49,0x36],
    '9':[0x06,0x49,0x49,0x29,0x1E],
    # Uppercase
    'A':[0x7E,0x11,0x11,0x11,0x7E],
    'F':[0x7F,0x09,0x09,0x09,0x01],
    'H':[0x7F,0x08,0x08,0x08,0x7F],
    'I':[0x00,0x41,0x7F,0x41,0x00],
    'L':[0x7F,0x40,0x40,0x40,0x40],
    'M':[0x7F,0x02,0x0C,0x02,0x7F],
    'O':[0x3E,0x41,0x41,0x41,0x3E],
    'P':[0x7F,0x09,0x09,0x09,0x06],
    'R':[0x7F,0x09,0x19,0x29,0x46],
    'T':[0x01,0x01,0x7F,0x01,0x01],
    'X':[0x63,0x14,0x08,0x14,0x63],
    'Y':[0x07,0x08,0x70,0x08,0x07],
    # Lowercase
    'a':[0x20,0x54,0x54,0x54,0x78],
    'c':[0x38,0x44,0x44,0x44,0x20],
    'e':[0x38,0x54,0x54,0x54,0x18],
    'h':[0x7F,0x08,0x04,0x04,0x78],
    'i':[0x00,0x44,0x7D,0x40,0x00],
    'l':[0x00,0x41,0x7F,0x40,0x00],
    'n':[0x7C,0x08,0x04,0x04,0x78],
    'o':[0x38,0x44,0x44,0x44,0x38],
    'p':[0x7C,0x14,0x14,0x14,0x08],
    'r':[0x7C,0x08,0x04,0x04,0x08],
    't':[0x04,0x3F,0x44,0x40,0x20],
    'y':[0x0C,0x50,0x50,0x50,0x3C],
}

def glyph(ch):
    return G.get(ch, G[' '])

# -------- Text helpers --------
def text_size(text, scale=1, spacing=1):
    w = 0
    for _ in text:
        w += (FONT_W * scale + spacing)
    if w: w -= spacing
    return w, FONT_H * scale

def text_pixel(x, y, text, sx, sy, scale=1, spacing=1):
    # Return 0 = Black, 1 = White
    if y < sy or y >= sy + FONT_H * scale:
        return 1
    lx = x - sx
    if lx < 0:
        return 1
    cursor = 0
    for ch in text:
        cw = FONT_W * scale
        if cursor <= lx < cursor + cw:
            cx_scaled = lx - cursor
            cy_scaled = y - sy
            cx = cx_scaled // scale
            cy = cy_scaled // scale
            col = glyph(ch)[cx] 
            bit = (col >> cy) & 1
            return 0 if bit else 1
        cursor += cw + spacing
    return 1

# -------- Stream update --------
def epaper_update_lines(lines):
    CS.value(0)

    # The old picture is completely white.
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(HEIGHT * BYTES_PER_ROW):
        spi.write(b'\xFF')

    # New image: Generated row by row
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for y in range(HEIGHT):
        bi = 0; bitpos = 7; linebuf[:] = b'\x00' * BYTES_PER_ROW
        for x in range(WIDTH):
            val = 1  # Default white
            for (txt, tx, ty, scale) in lines:
                if text_pixel(x, y, txt, tx, ty, scale) == 0:
                    val = 0
                    break
            if val:
                linebuf[bi] |= (1 << bitpos)  # 1 = white
            bitpos -= 1
            if bitpos < 0:
                bitpos = 7; bi += 1
        spi.write(linebuf)

    # Redresh
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Main --------
LINE1 = "XIAO nRF541L15"
LINE2 = "Hello MicroPython"
SCALE1 = 3
SCALE2 = 3

def main():
    init_display()
    clear_screen()

    # Centered layout
    w1, h1 = text_size(LINE1, SCALE1)
    w2, h2 = text_size(LINE2, SCALE2)
    total_h = h1 + 12 + h2  # Line spacing: 12 px
    y0 = (HEIGHT - total_h) // 2
    x1 = (WIDTH - w1) // 2
    x2 = (WIDTH - w2) // 2
    y1 = y0
    y2 = y0 + h1 + 12

    lines = [
        (LINE1, x1, y1, SCALE1),
        (LINE2, x2, y2, SCALE2),
    ]
    epaper_update_lines(lines)

    while True:
        time.sleep(1_000_000)

if __name__ == "__main__":
    main()
```

</details>

コード説明：

- **モジュールインポート**
        - `time`: 遅延などの時間関連機能を有効にします。
        - `XiaoPin and XiaoSPI`: `boards.xiao`からインポート；XiaoPinはGPIOピンの制御に使用され、XiaoSPIはSPI通信を処理します。

- **ピンとSPI設定**
        - 特定のピンを定義：リセット（RST）、チップセレクト（CS）、データ/コマンド（DC）、ビジー（BUSY）。
        - SPI関連ピン（SCK、MOSI、MISO）とSPIコントローラーを設定。
        - すべてのGPIOピンの動作モード（入力/出力）を初期化。
        - 20MHzの周波数でSPIインスタンスを作成。

- **ePaper基本機能**
        - `reset()`: ディスプレイのハードウェアリセット操作を実行。
        - `send_command(cmd)`: 単一バイトコマンドを送信。
        - `send_data(data)`: データを送信、単一バイトまたは複数バイト可能。
        - `wait_until_idle()`: ディスプレイがアイドル状態になるまで待機（現在は単純な遅延で実装）。
        - `init_display()`: ディスプレイの初期化手順を実行。
        - `clear_screen()`: 画面をクリアし、完全な白色状態に設定。

- **ディスプレイパラメータ**
        - `WIDTH, HEIGHT = 800, 480`: ディスプレイの解像度を指定。
        - `BYTES_PER_ROW`: 各ピクセル行に必要なバイト数を示す。
        - `linebuf`: 単一行のピクセルデータを一時的に格納するラインバッファ。

- **フォントシステム**
        - `G`辞書に格納された、シンプルな5x7ピクセルフォントを定義。
        - `glyph(ch)`: 指定された文字に対応するピクセルデータを取得。
        - `text_size()`: 指定されたスケーリング比率でテキストが表示される際の寸法を計算。
        - `text_pixel()`: 特定の位置でピクセルを描画すべきかを判定（テキストレンダリングで使用）。

- **ディスプレイ更新**
        - **epaper_update_lines(lines)**: ディスプレイ更新のコア機能。
        - まず、完全な白色背景を設定するためのデータを送信。
        - 次に、新しい画像データを行ごとに計算して送信。
        - 最後に、新しいコンテンツを表示するためのディスプレイリフレッシュをトリガー。
        - 複数行テキスト表示をサポート、各行は異なる位置とスケーリング比率を持つことが可能。

- **main()関数**
        - ディスプレイを初期化。
        - テキストの中央配置位置を計算。
        - テキスト行の設定リストを作成。
        - `epaper_update_lines()`を呼び出してディスプレイコンテンツを更新。
        - 無限スリープループに入る。

### 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.jpg" style={{width:600, height:'auto'}}/></div>

## プログラムの自動実行

プログラムを自動実行できるようにしたい場合は、以下の手順に従ってください：

**ステップ1.** 新しいプログラムファイルを作成し、Ctrl + Sを使用してMicroPythonデバイスのフラッシュメモリに保存し、main.pyという名前を付けます。

ここではblinkプログラムを例に取ります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_2.png" style={{width:600, height:'auto'}}/></div>

その後、MicroPythonデバイス/フラッシュセクションの下に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_3.png" style={{width:600, height:'auto'}}/></div>

**ステップ2.** オンボードのResetボタンを押すことで、自動実行効果を実現できます。

効果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

<!-- :::tip
如果您自己自己定义或封装了模块的py文件，也请一并上传
::: -->

## FAQ

### ブートローダーの更新

ThonnyでMicroPythonプログラムをアップロードできない状況に遭遇した場合、工場出荷時に使用されたブートローダーが古いバージョンだったためです。

**ステップ1.** 配線

<div class="table-center">
  <table align="center">
    <tr>
        <th>OpenOCD / JTAG / SWD</th>
        <th>XIAO nRF54L15</th>
    </tr>
    <tr>
        <th>5V</th>
        <th>5V</th>
    </tr>
    <tr>
        <th>GND</th>
        <th>GND</th>
    </tr>
    <tr>
        <th>SWDIO</th>
        <th>SWDIO2</th>
    </tr>
    <tr>
        <th>SWDCLK</th>
        <th>SWDCLK2</th>
    </tr>
    <tr>
        <th>RST</th>
        <th>RST</th>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54_wiring_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
書き込みプロセスの失敗を防ぐため、ピン接続が正しいことを確認してください。
:::

**ステップ2.** ファームウェア書き込みプログラムをダウンロード

[xiao_samd11_flash](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_samd11_flash_nrf.zip)

**ステップ3.** スクリプトを実行

Windowsシステムを例に取ります。ダウンロードしたファイルを解凍し、フォルダ内で右クリックしてターミナルを開きます。**.\xiao_samd11_openocd_flash.bat**を実行します。配線が正しい場合、結果は以下の画像のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
Mac/Linuxシステムでは、**.bat**を**.sh**に変更する必要があります
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
