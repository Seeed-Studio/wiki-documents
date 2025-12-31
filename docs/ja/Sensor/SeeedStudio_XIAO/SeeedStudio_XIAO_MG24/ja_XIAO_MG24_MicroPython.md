---
title: Seeed Studio XIAO MG24 Sense と MicroPython
description: Seeed Studio XIAO MG24(Sense) でのピン多重化。
image: https://files.seeedstudio.com/wiki/XIAO_MG24_Sense.webp
slug: /ja/xiao_mg24_sense_micropython
keywords:
  - XIAO
  - MG24
  - MicroPython
last_update:
  date: 12/25/2025
  author: Zeller
  sidebar_position: 9
---

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を持つ Python インタープリターです。組み込みプロセッサーや制約のあるシステム向けに実装された Python 3.5 機能のサブセットを提供します。CircuitPython とは異なり、違いについては [MicroPython ドキュメント](https://github.com/micropython/micropython/wiki/Differences) で詳しく読むことができます。

## XIAO MG24 で MicroPython を使用する

次に、Windows オペレーティングシステムを基に、XIAO MG24 Sense で MicroPython を使用し、Thonny IDE でプログラムする方法をガイドします。

### ハードウェアの準備

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO MG24 Sense</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### [Thonny IDE](https://thonny.org/) のインストール

インストールに適したバージョンを選択してください。ここでは Windows システムにインストールするため、Windows バージョンを選択しました。

希望する Python バージョンの指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div><br/>

その後、設定のデフォルト手順に従ってください。

### リポジトリのダウンロード

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ローカルマシンにクローンし、この XIAO MG24 MicroPython が保存されているパスを覚えておいてください。このパスは後で使用されます。

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### LED 点滅の例

ここでは、Thonny IDE で MicroPython を使用して XIAO MG24 の USER LED を点灯させる方法を示します。

#### **ステップ 1.** MicroPython ファームウェアの書き込み

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- [XIAO MG24 MicroPython ファームウェア](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/xiao_mg24_flash.zip) パッケージをダウンロードし、適切な場所に展開します。その後、このフォルダでターミナルを開きます。

- XIAO MG24 のオンボード RESET ボタンを押し続けながら、電源を入れます。

- Windows の場合：`xiao_mg24_flash.bat` をクリックします。スクリプトの実行が開始されたら RESET ボタンを離し、プログラミングが完了するまで待ちます。

<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_1.png" style={{width:600, height:'auto'}}/></div>

- Mac / Linux の場合

```bash
sudo chmod +x xiao_mg24_flash.sh && ./xiao_mg24_flash.sh
```

:::tip
発生するエラーは、EFR32MG24 チップの内部アーキテクチャによって決定されます。このチップには保護されたセキュリティサブシステム（Secure Vault）が組み込まれており、これはデバッグインターフェースの AP#2 および AP#3 ポートに対応します。pyOCD ツールがデバイスをスキャンする際、すべてのポートに接続を試みますが、これらのセキュアポートはロックまたは制限されているため、接続要求を拒否し、エラーログが発生します。これは通常のプログラミングとメインプログラム（AP#0）の実行には影響せず、既知で予期される動作です。
:::

#### **ステップ 2.** インタープリターの設定

Thonny IDE を開き、インターフェースの右下角をクリックしてインタープリターオプションを設定します。MicroPython (generic) とポートを選択します。設定が成功すると、Shell に MicroPython バージョン情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_2.png" style={{width:600, height:'auto'}}/></div>

#### **ステップ 3.** boards ファイルのアップロード

- ビューを開き、**File** を選択すると、ファイルマネージャーのパスが左サイドバーに表示されます。
- クローンまたはダウンロードしたファイルのパスを開き、`micropython-seeed-boards-master\examples` を開きます
- **boards** フォルダを選択し、フラッシュにアップロードします。その後、MicroPython デバイス/フラッシュにアップロードされたファイルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_3.png" style={{width:600, height:'auto'}}/></div>

#### **ステップ 4.** コードの実行

**File** -> **New** をクリックして新しいファイルを作成し、blink.py として保存します。<br/>

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

コードの説明：

- **モジュールのインポート**
        - `time` time モジュールをインポート
        - `Xiao Pin` boards.xiao モジュールから Seeed Xiao 開発ボード用のピン制御クラスをインポートし、ボード上のピンを操作するために使用されます。

- **ピンの定義**
        - `led = "led""` ピンが開発ボードの `led` ピン（ここでは USER ピン）に接続されていることを指定

- **メインロジック（try ブロック）**
        - USER LED は 0.5 秒間隔で点滅します。

上記のコードをコピーし、緑色のボタンをクリックするか F5 を押して実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_4.png" style={{width:600, height:'auto'}}/></div>

コードの実行が開始されると、USER LED は 0.5 秒間隔で点滅します。

結果は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_1.gif" style={{width:600, height:'auto'}}/></div>

### PWM の例

XIAO MG24 Sense のすべての GPIO ピンは PWM 出力をサポートしています。したがって、任意のピンを使用して PWM を出力し、ライトの明るさを調整したり、サーボを制御したりできます。

#### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェア

- pwm.py という名前の新しいファイルを作成し、参考コードをコピーします。

```py
import time
from boards.xiao import XiaoPWM

PIN = 0  # D0

# set the frequency and period of the PWM signal
FREQ = 1000
PERIOD_NS = int(1_000_000_000 // FREQ)  
# set the number of steps to fade the LED and the delay between steps
FADE_STEPS = 255
STEP_DELAY = 0.01
STEP_SIZE = 3

pwm = None

try:
    # initialize the PWM with a frequency and a 0% duty cycle
    pwm = XiaoPWM(PIN)
    pwm.init(freq=FREQ, duty_ns=0)

    while True:
        # fade the LED in and out
        for fade in range(0, FADE_STEPS + 1, STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS

            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)
        # fade the LED in and out again
        for fade in range(FADE_STEPS, -1, -STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS
            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")

except Exception as e:

    print("\nError occurred:", repr(e))

finally:
    if pwm is not None:
        try:
            pwm.deinit()
        except Exception:
            pass
```

コード説明：

- **モジュールのインポート**
        - `time`: 遅延を処理するための標準時間モジュールをインポートします（呼吸効果の速度制御に使用）。
        - `XiaoPWM`: `boards.xiao`モジュールからPWM（パルス幅変調）制御クラスをインポートし、デジタルピンでアナログ風信号を生成するために使用します。

- **ピンと定数の定義**
        - `PIN = 0`: デバイスが開発ボードのピンD0に接続されていることを指定します。
        -`FREQ / PERIOD_NS`: PWM周波数を1000 Hzに設定し、ナノ秒単位での総周期（1秒 / 1000）を計算します。
        - `FADE_STEPS / STEP_DELAY`: アニメーション解像度（255ステップ）と速度（変更間の0.01秒待機）を設定します。

- **メインロジック（tryブロック）**
        - **初期化**: コードはピンD0でPWMオブジェクトを0%の明度（デューティサイクル）で初期化します。
        - **呼吸ループ**: 無限の`while True`ループ内で、2つの`for`ループがLEDの明度を制御します：
            1. **フェードイン**: `duty_ns`（パルス幅）を0から完全な周期時間まで徐々に増加させます。
            2. **フェードアウト**: `duty_ns`を完全な周期から0まで徐々に減少させます。

- **デューティサイクル計算**: 式`(fade * PERIOD_NS) // FADE_STEPS`は、ループステップ（0-255）をPWMハードウェアに必要なナノ秒タイミングにマッピングします。
        - **安全性/クリーンアップ**: `finally`ブロックは、プログラムが停止された場合（例：Ctrl+C）にハードウェアリソースを解放するために`pwm.deinit()`が確実に呼び出されることを保証します。

#### 結果グラフ

プログラムが実行されると、LEDはフェード効果を実現し、実際のニーズに応じてPWMステップサイズを調整できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_2.gif" style={{width:400, height:'auto'}}/></div>

### アナログ例

XIAO MG24 Sense開発ボードは、アナログセンサー値の高解像度読み取りのための12ビットADCを搭載しており、より正確な値を読み取ることができます。

次に、ADCの特性を反映するために2つのセンサーを選択します。

#### ハードウェア準備

<table align="center">
 <tr>
        <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove-Rotary Angle Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a></div>
    </td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a></div>
    </td>
 </tr>
</table>

#### ソフトウェア

- adc.pyという名前の新しいファイルを作成し、参考コードをコピーしてください。

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM 

adc_pin = 0    
pwm_pin = 1    

try:
    adc = XiaoADC(adc_pin)            
    pwm = XiaoPWM(pwm_pin)     

    FREQ = 1000                     
    PERIOD_NS = 1000000000 // FREQ 
    pwm.init(freq=FREQ, duty_ns=0)  

    MAX_VOLTAGE = 3.3     
    DEAD_ZONE = 0.02
    last_duty = -1 

    while True:
        raw_value = adc.read_u16()
        voltage = (raw_value / 65535.0) * MAX_VOLTAGE

        # Calculate the base percentage (0.0 - 1.0)
        duty_percent = voltage / MAX_VOLTAGE

        # scope limitation
        if duty_percent < 0: duty_percent = 0
        if duty_percent > 1: duty_percent = 1

        if abs(duty_percent - last_duty) < DEAD_ZONE:
            time.sleep(0.05)
            continue

        inverted_duty = 1.0 - duty_percent
        duty_ns = int(inverted_duty * PERIOD_NS)

        if duty_ns < 20: duty_ns = 20
        elif duty_ns > (PERIOD_NS * 0.96): duty_ns = int(PERIOD_NS * 0.96)

        pwm.duty_ns(duty_ns)

        print("Voltage: {:.2f}V, Brightness: {:.1f}%".format(voltage, duty_percent * 100))

        last_duty = duty_percent
        time.sleep(0.05)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: {}".format(e))
finally:
    pwm.deinit()
```

- **モジュールのインポート**
        - `time`: 遅延を処理するための標準時間モジュールをインポートします（呼吸効果の速度制御に使用）。
        - `XiaoPWM`: `boards.xiao`モジュールからPWM（パルス幅変調）制御クラスをインポートし、デジタルピンでアナログ風信号を生成するために使用します。
コード説明：

- **モジュールのインポート**
        - `time`: 遅延を処理するための標準時間モジュールをインポートします（ループのサンプリングレート制御に使用）。
        - `XiaoADC`, `XiaoPWM`: `boards.xiao`モジュールからハードウェア制御クラスをインポートします。`XiaoADC`はアナログ入力（ポテンショメータ）を処理し、`XiaoPWM`はパルス幅変調出力（LED）を処理します。

- **ピンと定数の定義**
        - `adc_pin = 0` / `pwm_pin = 1`: 物理ピンをマッピングします。ピンD0は入力センサーに使用され、ピンD1は出力LEDに使用されます。
        - `FREQ / PERIOD_NS`: PWM動作周波数を1000 Hzに設定し、ナノ秒単位での周期時間（1,000,000 ns）を計算します。
        - `MAX_VOLTAGE / DEAD_ZONE`: 基準電圧（3.3V）と2%のデッドゾーン閾値を定義し、電気ノイズをフィルタリングしてLEDのちらつきを防ぎます。

- **メインロジック（tryブロック）**
        - **初期化**: ADCとPWMオブジェクトを設定します。PWMはデューティサイクル0で開始します。
        - **制御ループ**: `while True`ループ内で、コードは継続的にセンサーを監視します：
            1. **読み取りと正規化**: ADCから生の16ビット整数（0-65535）を読み取り、浮動小数点電圧（0.0V - 3.3V）に変換します。
            2. **ジッターフィルタ**: 現在の読み取り値を`last_duty`と比較します。変化が`DEAD_ZONE`未満の場合、ループは安定性を維持するために更新をスキップします。

- **デューティサイクル計算とロジック反転**
        - **アクティブローロジック**: 行`inverted_duty = 1.0 - duty_percent`はロジックを反転させます。
        - **理由**: あなたのLEDは**アクティブロー**（VCCに接続）である可能性があります。
        - **効果**: 電圧が増加すると、`duty_ns`は小さくなり（ピンをより長時間LOWに引く）、LEDが**明るく**なります。

- **安全クランプ**: コードは出力信号を最小20nsと最大周期の96%の間に制限します。これによりハードウェアを保護し、信号が有効な範囲内に留まることを保証します。

- **出力とクリーンアップ**
        - **フィードバック**: 古いMicroPythonバージョンとの互換性のために`.format()`を使用して、現在の電圧と明度パーセンテージをコンソールに出力します。
        - **安全性/クリーンアップ**: `finally`ブロックは、プログラムが停止したときに`pwm.deinit()`が実行され、PWMハードウェアリソースを安全にオフにすることを保証します。

#### 結果グラフ

- Grove-Rotary Angle Sensorを回転させると、LEDの明度がそれに応じて変化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_3.gif" style={{width:400, height:'auto'}}/></div>

- シェルウィンドウには電圧と明度パーセンテージも表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_5.png" style={{width:400, height:'auto'}}/></div>

### UART例

UARTは最も一般的に使用される通信プロトコルの1つです。わずか2本のデータラインでデータ送信が可能で、低コストのため多くの分野で広く使用されています。次に、GPSモジュールデータの送信を例として、シリアル通信の応用を実演します。

#### ハードウェア準備

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24 Sense</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a></div>
    </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### ソフトウェア

- uart.py という名前の新しいファイルを作成し、参考コードをコピーしてください。

<details>

<summary>参考コード</summary>

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

コードの説明：

- **モジュールのインポート**
        - `XiaoUART` `boards.xiao` モジュールから Seeed Xiao 開発ボード用の UART 通信クラスをインポートし、シリアル通信の初期化と制御に使用します。
        - `time` タイミング関連の機能をサポートするために time モジュールをインポートします（ここでは直接使用されませんが、将来の使用や互換性のためにインポートされています）。
        - `math` 座標変換アルゴリズムに必要な数学関数（`sin`、`cos`、`sqrt`、`atan2` など）をインポートします。

- **UART 設定の定義**
        - `uart = "uart1"` 使用する UART コントローラーインスタンスを指定します — ここでは `uart1` です。
        - `baudrate = 9600` シリアル通信のボーレートを 9600 bps に設定します。
        - `tx = 6` UART 送信ピン（TX）がデジタルピン D6 に接続されていることを指定します。
        - `rx = 7` UART 受信ピン（RX）がデジタルピン D7 に接続されていることを指定します。

- **データ構造の定義**
        - `Coordinates` クラス：経度/緯度の値を浮動小数点数として格納するシンプルなコンテナです。
        - `GNRMC` クラス：`$GNRMC` NMEA センテンスから解析された GPS データを表します。以下を含みます：
            - 十進度での緯度/経度
            - 半球インジケーター（`N/S`、`E/W`）
            - 時刻（時、分、秒 — GMT+8 に調整）
            - ステータスフラグ（1 = 有効な測位、0 = 測位なし）

- **座標変換関数**
        - `transformLat(x, y)` & `transformLon(x, y)` — WGS-84 → GCJ-02 変換アルゴリズムの一部を実装するヘルパー関数（中国でのマップ難読化に使用）。
        - `bd_encrypt(gg)` — 追加のオフセットと回転を適用して GCJ-02 座標を Baidu の BD-09 座標系に変換します。
        - `transform(gps)` — 楕円地球モデルに基づく複雑な三角関数式を使用して WGS-84（生 GPS）座標を GCJ-02 に変換するメイン関数。
        - `L76X_Baidu_Coordinates(gps)` — 生 GPS（WGS-84）→ GCJ-02 → BD-09（Baidu Maps 形式）に変換するラッパー。
        - `L76X_Google_Coordinates(gps)` — 生 GPS（WGS-84）→ GCJ-02（中国での Google Maps 形式）に変換するラッパー。

- **GNRMC センテンスの解析**
        - `parse_gnrmc(nmea_sentence)` — 生の NMEA `$GNRMC` または `$PNRMC` 文字列を構造化された `GNRMC` オブジェクトに解析します。
            - 時刻を抽出（UTCからGMT+8に変換）。
            - ステータスをチェック（`A` = アクティブ/有効な測位、`V` = 無効）。
            - 緯度/経度をDDMM.MMMMM形式から十進度に解析。
            - 解析に成功した場合は入力された`GNRMC`オブジェクトを返し、失敗した場合はデフォルトの空のオブジェクトを返す。

- **フォーマットされたGPSデータの表示**
        - `print_gps_data(gps)` — 以下を含む人間が読みやすいGPS情報を印刷：
            - ローカル時刻（GMT+8）
            - 半球付きの生のWGS-84座標
            - 変換されたGCJ-02（Google互換）およびBD-09（Baidu互換）座標
            - 測位が成功したかどうかを示すステータスメッセージ

- **メインロジック（tryブロック）**
        - 指定されたパラメータでUARTインターフェースを初期化。
        - 座標計算に必要なグローバル定数（`pi`、`a`、`ee`、`x_pi`）を定義 — 地球楕円体パラメータとスケーリング係数。
        - UART経由で受信するGPSデータを継続的に読み取るための無限ループに入る。
            - `buffer`を使用して、完全な行（`\n`で終わる）が受信されるまで部分的なメッセージを蓄積。
            - 完全な行が到着したとき：
                - `$GNRMC`または`$PNRMC`で始まるかチェック
                - その場合、`parse_gnrmc()`を使用して解析
                - `print_gps_data()`経由でフォーマットされた出力を表示
        - 例外を処理：
            - `KeyboardInterrupt`：Ctrl+Cで正常に終了。
            - 一般的な`Exception`：予期しないエラーをキャッチして印刷。
        - 最後に、終了前にUARTリソースをクリーンアップするため`uart.deinit()`を呼び出し。

#### 結果グラフ

- 任意のシリアルポートツールを開き、ボーレートを9600に設定します。
- GPSモジュールは屋外の開けた場所で使用する必要があります。
- プログラムはあなたの位置のGPS情報を印刷します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

### I2Cの例

XIAO MG24 SenseにはI2Cインターフェースがあり、多くのセンサーのデータ送信と解析、およびOLEDスクリーンの使用に利用できます。

#### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェア

- i2c.pyという名前の新しいファイルを作成し、参考コードをコピーしてください。

<details>

<summary>参考コード</summary>

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
ssd1306_draw_text("XIAO MG24", 30, 2)
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
        - `SSD1306_I2C_ADDR = 0x3C` SSD1306 OLEDディスプレイのデフォルトI2Cアドレス。
        - 各種コマンド定数（`SSD1306_SET_CONTRAST`、`SSD1306_DISPLAY_ON`など）は、ディスプレイハードウェアの設定と制御のための制御コマンドを定義します。
        - `SSD1306_WIDTH = 128`、`SSD1306_HEIGHT = 64`、`SSD1306_PAGES = 8` ディスプレイの解像度とページ構造を定義します（各ページは8行の高さ）。

- **フォントデータの定義**
        - `font_data` ASCII文字を8x8ピクセルのビットマップ表現にマッピングする辞書。各文字は8バイトのリストとして表現され、各バイトは1行のピクセルに対応します（LSB = 最左端のピクセル）。

- **ヘルパー関数**
        - `ssd1306_write_command(cmd)` 制御バイト`0x00`を使用してI2C経由でSSD1306に単一のコマンドバイトを送信します。
        - `ssd1306_write_commands(cmds)` 1つのトランザクションで複数のコマンドバイトを送信します。
        - `ssd1306_write_data(data)` 制御バイト`0x40`（データモード）を使用してSSD1306にディスプレイデータバイトを送信します。
        - `ssd1306_clear()` すべてのページと列にゼロバイトを書き込むことで、ディスプレイ全体をクリアします。
        - `ssd1306_init()` コントラスト、マルチプレックス比、メモリモード、ディスプレイオンなどの推奨設定でSSD1306ディスプレイを初期化します。
        - `ssd1306_draw_text(text, x, y)` 列`x`とページ`y`から始まるテキストを描画します。各文字を8x8フォントビットマップに変換し、90°時計回りに回転させ（ディスプレイの向きに合わせるため）、ピクセルデータをディスプレイバッファに書き込みます。

- **メインロジック（初期化とディスプレイ）**
        - `i2c.scan()` I2Cバスをスキャンして接続されたデバイスを検出します。
        - SSD1306がアドレス`0x3C`で見つからない場合、例外が発生します。そうでなければ、成功メッセージが出力されます。
        - `ssd1306_init()` ディスプレイハードウェアを初期化します。
        - `ssd1306_draw_text("XIAO MG24", 30, 2)` 文字列**XIAO MG24**を列30、ページ2（≈ 行16）から描画します。
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)` 文字列**HELLO WORLD**を列20、ページ4（≈ 行32）から描画します。

#### 結果グラフ

- プログラムが実行を開始すると、画面に**XIAO MG24**と**HELLO WORLD**が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_6_1.jpg" style={{width:400, height:'auto'}}/></div>

### まとめ

おめでとうございます！上記のチュートリアルを完了することで、XIAO MG24 SenseとMicroPythonを使用した基本的な開発とデバッグの能力を習得しました。これらの基礎スキルに基づいて、より興味深いプロジェクトを作成されることを楽しみにしています。

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
