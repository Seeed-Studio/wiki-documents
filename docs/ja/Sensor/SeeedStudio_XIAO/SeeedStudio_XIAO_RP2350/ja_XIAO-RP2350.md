---
title: Seeed Studio XIAO RP2350(MicroPython) の始め方
description: |
  Seeed Studio の最先端マイクロコントローラー XIAO RP2350。デュアルコアプロセッサ、増強されたSRAMとフラッシュメモリ、そして強化された接続性を備えています。
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /ja/getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div><br></br>

XIAO RP2350 は、Raspberry Pi RP2350（デュアル Cortex-M33 コア、150MHz、FPU、強化されたセキュリティと暗号化）をクラシックな XIAO フォームファクターに詰め込んだ製品です。サイズはわずか 21x17.8mm で、19 の多機能 GPIO、RGB LED、超低消費電力（50μA）のバッテリーマネジメントシステム、バッテリー電源供給、直接バッテリー電圧測定機能を備えています。XIAO エコシステムのおかげで、XIAO RP2350 はディスプレイ、LED マトリックス、Grove モジュール、CAN バス、Vision AI センサー、mmWave センサーなど、幅広いアドオンに対応しています。MicroPython、C、C++ をネイティブでサポートしており、スマートコントロール、ウェアラブル、DIY キーボードなどのコンパクトでバッテリー駆動のアプリケーションを開発したいすべてのレベルの開発者に最適です。

## 特徴

- **強力な MCU ボード:** 対称デュアル Arm Cortex-M33 @ 150MHz と FPU を備えた Raspberry Pi RP2350 チップを搭載。
- **強化されたセキュリティ機能:** セキュアブートと暗号化されたブートローダーを内蔵し、アプリケーションのセキュリティを確保。
- **ソフトウェアサポート:** C/C++ および MicroPython に対応し、プロジェクト開発やプロトタイピングが容易。
- **豊富なオンボードリソース:** RGB LED、2MB フラッシュ、520kB SRAM、19 の多機能 GPIO（アナログ、デジタル、I²C、UART、SPI、PWM）を統合。
- **新たに 8 つの IO を拡張:** 従来の XIAO MCU と比較して、背面に 8 つの IO ピンを追加し、より複雑なアプリケーションに対応。
- **効率的な電力設計:** スリープモードでわずか 50μA の超低消費電力を実現し、バッテリー電源供給が可能。内部 IO を介した直接バッテリー電圧測定により、バッテリーマネジメントシステム（BMS）を強化。
- **コンパクトな親指サイズのデザイン:** 21 x 17.8mm のサイズで、Seeed Studio のクラシックな XIAO フォームファクターを採用。スペースを意識したアプリケーションに最適。
- **量産に適した設計:** 表面実装デバイス（SMD）設計で、すべてのコンポーネントが前面に配置され、両側にスタンプホールを備え、効率的な量産を実現。

## 仕様

<table align="center">
    <tr>
        <td>製品</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">プロセッサ</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>デュアル Cortex-M0+ @ 133MHz</td>
        <td>デュアル Cortex-M33 @ 150MHz, FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>フラッシュ</td>
        <td>2MB オンボード</td>
        <td>2MB フラッシュ</td>
    </tr>
    <tr>
        <td>LED</td>
        <td>1 ユーザー LED(3色), 1 電源 LED, 1 RGB LED</td>
        <td>1 ユーザー LED, 1 充電 LED(バッテリー充電インジケーター), 1 RGB LED</td>
    </tr>
    <tr>
        <td>インターフェース</td>
        <td>11 ピン: 4x アナログ, 11x デジタル, 1x I²C, 1x UART, 1x SPI, 全て PWM</td>
        <td><b>19 ピン: 3x アナログ, 19x デジタル, 2x I²C, 2x UART, 2x SPI, 全て PWM</b></td>
    </tr>
    <tr>
        <td>ボタン</td>
        <td align="center" colspan="2">1 リセットボタン, 1 BOOT ボタン</td>
    </tr>
    <tr>
        <td>セキュリティ</td>
       <td align="center"> - </td>
        <td>OTP, セキュアブート, Arm TrustZone</td>
    </tr>
    <tr>
        <td>低消費電力</td>
       <td align="center"> - </td>
        <td>4.2V/50uA</td>
    </tr>
    <tr>
        <td>ソフトウェア互換性</td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr, <a href="https://wiki.seeedstudio.com/ja/xiao_topic_page/">その他対応予定</a></td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, <a href="https://wiki.seeedstudio.com/ja/xiao_topic_page/">その他対応予定</a></td>
    </tr>
    <tr>
        <td>動作温度</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>寸法</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## ハードウェア概要

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 前面ピン配置</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 前面ピン配置" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 背面ピン配置</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 背面ピン配置" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 コンポーネント</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 コンポーネント" /></div></td>
 </tr>
</table>
</div>

ピン配置の詳細が必要ですか？以下の [Assets and Resources](#assets--resources) をご覧ください。

## 対応プラットフォーム

RP2350 を搭載した XIAO RP2350 は、Raspberry Pi が提供する MicroPython および C/C++ SDK をサポートしています。この柔軟性により、開発者はプロトタイピングや開発において好みのプログラミング言語と環境を選択できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp ロゴ" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## はじめに▶️

:::info 注意
このページは主に MicroPython ユーザー向けです。SDKプログラミングを学びたい方や上級ユーザー向けには、[Raspberry Pi Picoシリーズ C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)をお勧めします。このガイドでは環境のセットアップ方法とサンプルコードの使用方法を説明します。また、XIAO RP2350に関連する具体的な指示については、[XIAO RP2350 with C/C++ SDK](/ja/xiao-rp2350-c-cpp-sdk)をご覧ください。
:::

:::warning MicroPython ファームウェアの問題

**2024年11月10日**現在、[MicroPython.org for RPI_PICO2](https://micropython.org/download/RPI_PICO2/)でダウンロード可能な安定版 MicroPython ファームウェア **`1.24.0`** は、**フラッシュチップの違いにより一部のデバイスと互換性がありません**。

**Seeed Team**は公式の MicroPython メンテナーと協力してこの問題の解決に取り組んでいます。その間、暫定的な解決策として **プレビュー版ファームウェア** を使用することができます：[RP2350 MicroPython Firmware Preview](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/RPI_PICO2-20240809-v1.24.0-preview.201.g269a0e0e1.uf2)

:::

### ステップ 1: XIAO RP2350 に MicroPython をインストールする

XIAO RP2350 に MicroPython ファームウェアをインストールするには、以下の手順を実行してください：

**ステップ 1.1. MicroPython ファームウェアをダウンロードする:**  

- [MicroPython Downloads](https://micropython.org/download/RPI_PICO2/) ページに移動します。
- XIAO RP2350 に対応する最新の `.uf2` ファームウェアファイルをダウンロードします。

**ステップ 1.2 BOOTSEL モードに入る:**  

XIAO RP2350 を BOOTSEL モードにするには、以下の2つの方法のいずれかを使用します：

<Tabs>
<TabItem value="method1" label="方法 1: コンピュータに接続する前" default>

1. **BOOT ボタンを押し続ける:**  
   XIAO RP2350 をコンピュータに接続していない状態で、**BOOT ボタンを押し続けます**。
2. **コンピュータに接続する:**  
   BOOT ボタンを押し続けたまま、USB ケーブルを使用して XIAO RP2350 をコンピュータに接続します。
3. **BOOT ボタンを離す:**  
   ボードがコンピュータに接続された後、BOOT ボタンを離します。XIAO RP2350 は BOOTSEL モードになり、コンピュータにリムーバブルストレージデバイスとして認識されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>BOOT を押し続ける -> ケーブルを接続 -> BOOT を離す</em></div>
</div>

</TabItem>

<TabItem value="method2" label="方法 2: コンピュータに接続中">

1. **BOOT ボタンを押し続ける:**  
   XIAO RP2350 をコンピュータに接続した状態で、BOOT ボタンを押し続けます。
2. **RESET ボタンをクリックする:**  
   BOOT ボタンを押し続けたまま、ボード右下にある「B」とラベル付けされた RESET ボタンを押して離します。
3. **BOOT ボタンを離す:**  
   RESET ボタンを押した後、BOOT ボタンを離します。XIAO RP2350 は BOOTSEL モードになり、コンピュータにリムーバブルストレージデバイスとして認識されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>BOOT を押し続ける -> RESET をクリック -> BOOT を離す</em></div>
</div>

</TabItem>
</Tabs>

**ステップ 1.3. ファームウェアをインストールする:**  

- ダウンロードした `.uf2` ファイルを XIAO RP2350 のリムーバブルストレージドライブに **ドラッグ＆ドロップ** します。
- ファイルがコピーされると、ボードは自動的に再起動し、ファームウェアのインストールが完了します。

### ステップ 2: Thonny IDE をインストールする

:::tip MicroPython について

[MicroPython](https://micropython.org/) は [Python](https://www.python.org/) に似たインタプリタ言語です。ただし、Pythonとは異なり、MicroPython はハードウェア上で直接動作（ベアメタル）し、コマンドを即座に実行できるインタラクティブプロンプト（REPL）を提供します。また、内蔵ファイルシステムからスクリプトを実行およびインポートすることも可能です。

XIAO RP2350 ボードに接続して Python コードを書き始めるには、minicom、PuTTY、electerm、warp などのシリアル接続をサポートする任意のターミナルツールを使用できます。より *ユーザーフレンドリーな体験* を求める場合は、**[Thonny](https://thonny.org/)** を使用することをお勧めします。Thonny は使いやすさ、統合機能、初心者向けのインターフェースを備えており、デバイス上で直接 Python コードを書く楽しさを提供します。

:::

Thonny IDE は MicroPython 開発に最適な初心者向けの Python エディタです。以下の手順でインストールしてください：

1. **Thonny をダウンロードする:**  
   - [Thonny ダウンロードページ](https://thonny.org/) にアクセスします。
   - 使用しているオペレーティングシステム（Windows、macOS、Linux）に適したインストーラーを選択してダウンロードします。

2. **Thonny をインストールする:**  
   - ダウンロードしたインストーラーを **実行** します。
   - 画面の指示に従ってインストールを完了します。

3. **Thonny を MicroPython 用に設定する:**  
   - **Thonny IDE を開く**。
   - Thonny ウィンドウの右下を確認します。
   - **インタープリタ**選択エリアをクリックします。
   - ドロップダウンから **'MicroPython (RP2040)'** を選択します。
   - 正しい **ポート** が選択されていることを確認します（通常、Thonny が自動検出します）。

これで、Thonny IDE を使用して XIAO RP2350 に MicroPython コードを書き込んでアップロードする準備が整いました！

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY コンソール">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

デバイスが MicroPython で準備できたら、簡単なプロジェクトを始めましょう：

### 点滅させてみよう！✨

LED を点滅させることは、ほとんどの人が最初に実行するプログラムです。XIAO RP2350 でも同様です。

:::note
回路図によると、XIAO RP2350 の黄色の `USER LED` は `GPIO25/D19` に接続されています。
すべての XIAO ファミリーボードでは、`USER LED` は `low level` に設定すると **点灯** し、`high level` に設定すると **消灯** します。
:::

<Tabs>
  <TabItem value="blink" label="点滅" default>

```python showLineNumbers
from machine import Pin # machine モジュールから Pin クラスをインポート
from time import sleep  # time モジュールから sleep 関数をインポート

# GPIO25 を出力ピンとして初期化し、USER LED を制御
led = Pin(25, Pin.OUT) 

# 初期状態で LED を消灯
led.value(1) # led.on() -> high level -> 消灯
sleep(0.5) # 0.5 秒待機

# LED を点灯
led.value(0) # led.off() -> low level -> 点灯
sleep(0.5) # 0.5 秒待機

# 無限ループに入る
while True:
    # LED の状態を切り替え（点灯から消灯、またはその逆）
    led.toggle() 
    # 現在の LED 状態を出力
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # 次の切り替えまで 0.5 秒待機
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="LED のフェード" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# PWM を使用して LED をフェードさせる例

import time
from machine import Pin, PWM

# GPIO25 に接続された LED 用の PWM オブジェクトを作成
pwm = PWM(Pin(25))

# PWM 周波数を設定
pwm.freq(1000)

# LED を数回フェードイン・フェードアウト
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

コードを Thonny IDE にコピーし、以下の画像のように `Run current script` ボタンをクリックするか、`F5` を押すだけで、コードスニペットが実行され、XIAO RP2350 上の LED が点滅し始めます。

### RGB LED を操作する

XIAO RP2350 には組み込みの RGB LED があり、MicroPython を使用して制御できます。以下は、さまざまな色を循環させる例です：

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# グローバル輝度変数 (0.0 から 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# 電源ピンを設定
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # LED の電源をオンにする

# ws2812 プログラムを使用して StateMachine を作成し、LED_PIN に出力
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# StateMachine を開始し、FIFO でデータを待機
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("ランダムな色の遷移を調整可能な輝度で開始します...")

# メインループ
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # スムーズな遷移のための 100 ステップ
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # 遷移速度を変更するにはこの値を調整
    current_color = next_color

    # デモ目的で輝度を変更する場合
    # BRIGHTNESS = random.random()  # 各サイクルでランダムな輝度を設定
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能ですか？はい、XIAO RP2350 ではこれがこれまで以上に簡単になりました。以前の XIAO ファミリー（例：[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)）では、抵抗を使用して *A0* に手動で接続する必要がありました。

しかし、XIAO RP2350 では、このプロセスが簡略化されています。`A3/GPIO29` ピンを直接使用してバッテリー電圧レベルを読み取ることができ、設計と開発が効率化されます。バッテリーレベルを読み取るには、`GPIO19` ピンを高レベルに設定する必要があることを忘れないでください。

以下のコードスニペットに従って、Pico SDK を使用してバッテリー電圧を読み取ります：

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# バッテリー電圧読み取りを有効にするための GPIO ピンを初期化する関数
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # ピンを高レベルに設定してバッテリー電圧読み取りを有効化

def main():
    print("ADC バッテリー例 - GPIO29 (A3)")
    
    init_gpio()  # 有効化ピンを初期化
    adc = ADC(Pin(29))  # GPIO29 上の ADC を初期化

    conversion_factor = 3.3 / (65535)  # 12 ビット ADC と 3.3V リファレンスの変換係数
    
    while True:
        result = adc.read_u16()  # ADC 値を読み取る
        voltage = result * conversion_factor * 2  # 電圧を計算（電圧分圧を考慮して係数 2 を適用）
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # 500 ミリ秒の遅延

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// バッテリー電圧読み取りを有効にするためのGPIOピンを初期化する関数
void init_gpio() {
    const int enable_pin = 19; // バッテリー電圧読み取りを有効にするピン

    gpio_init(enable_pin); // ピンを初期化
    gpio_set_dir(enable_pin, GPIO_OUT); // ピンを出力として設定
    gpio_put(enable_pin, 1); // ピンをハイに設定してバッテリー電圧読み取りを有効化
}

int main() {
    stdio_init_all(); // 標準入出力を初期化
    printf("ADC バッテリー例 - GPIO29 (A3)\n");

    init_gpio(); // 有効化ピンを初期化
    adc_init(); // ADCを初期化

    // ADC GPIOピン (GPIO29) を初期化
    adc_gpio_init(29);
    // ADC入力3を選択 (GPIO29に対応)
    adc_select_input(3);

    while (1) {
        // 12ビット変換、最大値 == ADC_VREF == 3.3 V を仮定
        const float conversion_factor = 3.3f / (1 << 12); // 12ビットADCと3.3V基準の変換係数
        uint16_t result = adc_read(); // ADC値を読み取る
        // 電圧を計算 (電圧分圧器の係数2を考慮)
        printf("生値: 0x%03x, 電圧: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // 500ミリ秒の遅延
    }
}
```

  </TabItem>
</Tabs>

## アセットとリソース

XIAO RP2350はRaspberry Pi RP2350のパワーを活用し、Raspberry Piコミュニティからの豊富なリソースを共有しています。これにより、この小さなボード上で無限の創造性を発揮してプロジェクトをカスタマイズする可能性が広がります。以下は、始めるための重要なリソースとアセットです。

***データシートと回路図***

- 📄 **[PDF]** [RP2350 データシート](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Seeed Studio XIAO RP2350 寸法 (DXF)](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[リンク]** [Seeed Studio XIAO RP2350 3D STEP ファイル](https://grabcad.com/library/seeed-studio-xiao-rp2350-1)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [低消費電力テストファームウェア](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***関連リソース***

- 📄 **[PDF]** [Raspberry Pi Picoシリーズの始め方](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf): Raspberry Pi Picoボードのセットアップとプログラミングに関する包括的なガイド。MicroPythonやC/C++を学びたい初心者に最適です。
- 📄 **[PDF]** [Raspberry Pi Picoシリーズ Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf): MicroPythonのセットアップチュートリアルとAPIを記載した書籍。
- 📄 **[PDF]** [Raspberry Pi Picoシリーズ C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf): Pico C/C++ SDK APIを記載した書籍。
- 🔗 **[Kicad]** [Seeed Studio XIAO RP2350 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 拡張と応用

[XIAOシリーズ](/ja/xiao_topic_page)は、学習や使用のための幅広い周辺機器とアクセサリを提供しています。カラフルな画面で完璧なインタラクションを可能にするものや、明るくシンプルなRGBライトを備えた統合ボードなど、さまざまなオプションが用意されています。

XIAOファミリーの一員として、XIAO RP2350も同様です。もちろん、引き出された追加ピンをより良く活用するために、新しい*周辺機器とボード*が続々と登場し、その性能を最大限に活用できるようになります。

- 🌟 **[アクセサリで拡張](/ja/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  ディスプレイやLEDマトリックスからGroveモジュールやセンサーまで、XIAOファミリーと互換性のある幅広いアドオンやモジュールを発見し、それらがプロジェクトをどのように強化できるかを学びましょう。

### コミュニティと学習

さらに、活気あるRaspberry Piコミュニティに飛び込み、知識を広げ、新しいプロジェクトアイデアを発見してください。コミュニティで共有されるリソース、フォーラム、チュートリアルを活用して、XIAO RP2350の体験を向上させましょう。Seeed Studio Wikiに加えて、以下の学習に役立つおすすめの場所があります：

- **[Raspberry Pi ドキュメント](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: RP2350に関する信頼性の高い最新情報を入手。
- **[Raspberry Pi フォーラム](https://www.raspberrypi.org/forums/)**: 他の愛好家と交流し、質問をしたりプロジェクトを共有したりできます。
- **[XIAO GitHub リポジトリ](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: 公式XIAOリポジトリを探索し、集中化されたドキュメントやチームとの交流を楽しみましょう。**ぜひ参加してください！**
- **[r/embedded on Reddit](https://www.reddit.com/r/embedded/)**: 組み込みシステムのコミュニティに参加し、洞察を共有し、さまざまなトピックを議論。
- **[Pico トピック on GitHub](https://github.com/topics/pico)**: Picoに関連するリポジトリや議論を探索。
- **[Hackster.io](https://www.hackster.io/)**: XIAOやRaspberry Piに関連するプロジェクトやチュートリアルを発見。
- **[Instructables](https://www.instructables.com/)**: XIAOやその他のハードウェアを使ったDIYプロジェクトやステップバイステップガイドを見つける。
- **[Element14 コミュニティ](https://www.element14.com/community/)**: 電子工学や組み込みシステムに関連するディスカッション、ウェビナー、プロジェクトに参加。

さらに、私たちの [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) や [Seeed Studio フォーラム](https://forum.seeedstudio.com/) でプロジェクトを共有することをいつでも歓迎します。これらのプラットフォームは、他のメイカーとつながり、フィードバックを得たり、インスピレーションを見つけたりするための素晴らしい機会を提供します。問題解決のサポートが必要な場合や、最新の作品を披露したい場合、または単にサポートのあるコミュニティの一員になりたい場合でも、*Seeed StudioのDiscordとフォーラム*は交流とコラボレーションに最適な場所です。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>