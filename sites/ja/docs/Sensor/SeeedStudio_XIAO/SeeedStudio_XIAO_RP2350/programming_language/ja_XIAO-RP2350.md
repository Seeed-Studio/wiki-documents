---
title:  Seeed Studio XIAO RP2350 と MicroPython
description: |
  XIAO RP2350 は Seeed Studio の最先端マイコンです。デュアルコアプロセッサ、増量された SRAM とフラッシュメモリ、強化された接続機能を備えています。
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /getting-started-xiao-rp2350
sku: 102010550,102010637
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
---

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
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
  </a>
</div><br></br>

XIAO RP2350 は、Raspberry Pi RP2350（150MHz で動作するデュアル Cortex-M33 コア、強化されたセキュリティと暗号化機能）をクラシックな XIAO フォームファクタに搭載したボードです。サイズはわずか 21×17.8mm で、19 本の多機能 GPIO、RGB LED、50μA の超低消費電力、バッテリー電源供給、バッテリー電圧の直接測定に対応したバッテリーマネジメントシステムを備えています。XIAO エコシステムのおかげで、XIAO RP2350 はディスプレイ、LED マトリクス、Grove モジュール、CAN Bus、Vision AI センサ、mmWave センサなど、幅広いアドオンと互換性があります。MicroPython、C、C++ をネイティブサポートしているため、XIAO RP2350 はスマート制御、ウェアラブル、DIY キーボードなどのコンパクトでバッテリー駆動のアプリケーションを作成したい、あらゆるレベルの開発者に最適です。


## 対応プラットフォーム

RP2350 を搭載した XIAO RP2350 は、Raspberry Pi が提供する MicroPython と C/C++ SDK をサポートしています。この柔軟性により、開発者はプロトタイピングや開発において、好みのプログラミング言語と環境を選択できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## はじめに▶️

:::info attention
このページは主に MicroPython ユーザーに焦点を当てています。SDK プログラミングを学びたい方や上級ユーザーの方は、[Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) から始めるとよいでしょう。このガイドでは、環境構築とサンプルコードの実行方法を説明しています。さらに、XIAO RP2350 に特化した手順については [XIAO RP2350 with C/C++ SDK](/ja/xiao-rp2350-c-cpp-sdk) も参照してください。
:::

### ステップ 1：XIAO RP2350 に MicroPython をインストールする

XIAO RP2350 に MicroPython ファームウェアをインストールするには、次の手順に従ってください。

**ステップ 1.1. MicroPython ファームウェアをダウンロード:**  

- [MicroPython Downloads](https://micropython.org/download/SEEED_XIAO_RP2350/) ページに移動します。
- XIAO RP2350 と互換性のある最新の `.uf2` ファームウェアファイルをダウンロードします。

:::tip
1. デフォルトのファームウェアは ARM アーキテクチャ向けです。RISC-V を使用したい場合は、リンク先の対応するファームウェアバージョンを使用してください。

2. 古いファームウェアにはさまざまなソフトウェア脆弱性が含まれている可能性があるため、必ず最新バージョンのファームウェアを使用してください。
:::

**ステップ 1.2 BOOTSEL モードに入る:**  

XIAO RP2350 を BOOTSEL モードにするには、次の 2 つの方法のいずれかを使用できます。

<Tabs>
<TabItem value="method1" label="方法 1: パソコンに接続する前" default>

1. **BOOT ボタンを押し続ける:**  
   XIAO RP2350 がパソコンに接続されていない状態で、**BOOT ボタンを押し続けます**。
2. **パソコンに接続する:**  
   BOOT ボタンを押したまま、USB ケーブルを使って XIAO RP2350 をパソコンに接続します。
3. **BOOT ボタンを離す:**  
   ボードがパソコンに接続されたら、BOOT ボタンを離します。XIAO RP2350 は BOOTSEL モードになり、パソコンからリムーバブルストレージデバイスとして認識されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Hold Boot-> Plug in Cable-> Release Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="方法 2: パソコンに接続した状態で">

1. **BOOT ボタンを押し続ける:**  
   XIAO RP2350 をすでにパソコンに接続した状態で、BOOT ボタンを押し続けます。
2. **RESET ボタンをクリックする:**  
   BOOT ボタンを押したまま、RESET ボタンを押して離します。RESET ボタンは、上の画像でボード右下に「B」と表示されているボタンです。
3. **BOOT ボタンを離す:**  
   RESET ボタンを押した後、BOOT ボタンを離します。XIAO RP2350 は BOOTSEL モードになり、パソコンからリムーバブルストレージデバイスとして認識されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Hold Boot-> Click Reset-> Release Boot</em></div>
</div>

</TabItem>
</Tabs>

**ステップ 1.3. ファームウェアをインストールする:**  

- ダウンロードした `.uf2` ファイルを、XIAO RP2350 のリムーバブルストレージドライブに**ドラッグ＆ドロップ**します。
- ファイルのコピーが完了すると、ボードは自動的に再起動し、ファームウェアのインストールが完了します。

### ステップ 2：Thonny IDE をインストールする

:::tip about MicroPython

[MicroPython](https://micropython.org/) は [Python](https://www.python.org/) に似たインタプリタ言語です。ただし Python と異なり、MicroPython はハードウェア上（ベアメタル）で直接動作し、コマンドを即座に実行できる対話型プロンプト（REPL）や、内蔵ファイルシステムからスクリプトを実行・インポートする機能を提供します。

XIAO RP2350 ボードに接続して Python コードの作成と実行を始めるには、minicom、PuTTY、electerm、warp など、シリアル接続をサポートする任意のターミナルツールを使用できます。より*ユーザーフレンドリーな体験*を求める場合は、使いやすさ、統合機能、初心者に優しいインターフェースを備えた **[Thonny](https://thonny.org/)** を使用することをおすすめします。これにより、デバイス上で直接 Python コードの作成と実行を楽しむことができます。

:::

Thonny IDE は、MicroPython 開発に最適な初心者向け Python エディタです。インストール方法は次のとおりです。

1. **Thonny をダウンロード:**  
   - [Thonny Download Page](https://thonny.org/) にアクセスします。
   - お使いのオペレーティングシステム（Windows、macOS、Linux）に合ったインストーラを選択してダウンロードします。

2. **Thonny をインストール:**  
   - ダウンロードしたインストーラを**実行**します。
   - 画面の指示に**従って**インストールを完了します。

3. **Thonny を MicroPython 用に設定:**  
   - Thonny IDE を**起動**します。
   - Thonny ウィンドウの右下を確認します。
   - **interpreter** の選択エリアをクリックします。
   - ドロップダウンから **'MicroPython (RP2040)'** を選択します。
   - 正しい **Port** が選択されていることを確認します。通常、Thonny が自動検出します。

これで、Thonny IDE を使って XIAO RP2350 に MicroPython コードを書き込み、実行する準備が整いました。

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY コンソール">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

デバイスに MicroPython の準備ができたら、簡単なプロジェクトから始めましょう。

### 点滅させてみよう！ ✨

LED を点滅させることは、多くの人が最初に実行するプログラムです。XIAO RP2350 でも同様です。

:::note
XIAO RP2350 上の黄色い LED である `USER LED` は、回路図によると `GPIO25/D19` に接続されています。
すべての XIAO ファミリーボードにおいて、`USER LED` は `low level` に設定すると**点灯**し、`high level` に設定すると**消灯**します。
:::

<Tabs>
  <TabItem value="blink" label="点滅" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
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
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
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

下の画像のようにコードを Thonny IDE にコピーしたら、`Run current script` ボタンをクリックするか、`F5` キーを押すだけです。これでコードスニペットが実行され、XIAO RP2350 上の LED が点滅し始めるのが確認できます。

### RGB LED で遊ぶ

XIAO RP2350 には、MicroPython を使って制御できる RGB LED が内蔵されています。以下は、さまざまな色を順番に切り替えるサンプルです：

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
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

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
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

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能でしょうか？はい、XIAO RP2350 ならこれまで以上に簡単です。以前の XIAO ファミリー、たとえば [XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) では、バッテリー電圧を読み取るには抵抗を使って手動で *A0* に接続する必要がありました。

しかし XIAO RP2350 では、このプロセスが簡略化されています。`A3/GPIO29` ピンを直接使用してバッテリー電圧レベルを読み取ることができ、設計と開発を効率化できます。バッテリーレベルの読み取りを有効にするには、`GPIO19` ピンを High に設定する必要があることを忘れないでください。

Pico SDK を使ってバッテリー電圧を読み取るには、次のコードスニペットに従ってください：

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")

    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference

    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

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

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>


### 拡張性とアプリケーション

[The XIAO series](/ja/xiao_topic_page) には、学習や活用のための豊富な周辺機器および周辺アクセサリが用意されています。カラフルでインタラクティブな表示ができるスクリーンや、明るくシンプルな RGB ライトを備えた統合ボードなど、さまざまなものがあり、あなたに使われるのを待っています。

XIAO ファミリーの一員として、XIAO RP2350 も同様です。もちろん、引き出された追加ピンをより有効に活用するために、新しい *peripherals and boards* が今後も続々と登場し、その性能を余すところなく引き出していきます。

- 🌟 **[Expanding with Accessories](/ja/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  ディスプレイや LED マトリクスから Grove モジュールやセンサーまで、XIAO ファミリーと互換性のある多彩なアドオンやモジュールを発見し、それらがどのようにプロジェクトを強化できるかを学びましょう。

### コミュニティと学習

さらに、活気ある Raspberry Pi コミュニティに飛び込んで、知識を広げたり新しいプロジェクトアイデアを見つけたりしましょう。コミュニティが共有するリソース、フォーラム、チュートリアルを活用して、XIAO RP2350 の体験をより充実させてください。Seeed Studio Wiki に加えて、学習におすすめの場所をいくつかご紹介します：

- **[Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: RP2350 に関する信頼性が高く最新の情報を入手できます。
- **[Raspberry Pi Forums](https://www.raspberrypi.org/forums/)**: 他の愛好家と交流し、質問したり、プロジェクトを共有したりできます。
- **[XIAO GitHub Repository](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: 公式 XIAO リポジトリを探索して、より集約されたドキュメントや、私たちのチームとのさらなる交流を行いましょう。**Join Us!**
- **[r/embedded on Reddit](https://www.reddit.com/r/embedded/)**: 組み込みシステムのコミュニティに参加し、知見を共有し、さまざまなトピックについて議論しましょう。
- **[Pico Topic on GitHub](https://github.com/topics/pico)**: Pico に関連するリポジトリやディスカッションを探索できます。
- **[Hackster.io](https://www.hackster.io/)**: XIAO や Raspberry Pi を含むさまざまなハードウェアプラットフォームに関するプロジェクトやチュートリアルを見つけましょう。
- **[Instructables](https://www.instructables.com/)**: XIAO やその他のハードウェアを使った DIY プロジェクトやステップバイステップのガイドを探せます。
- **[Element14 Community](https://www.element14.com/community/)**: エレクトロニクスや組み込みシステムに関するディスカッション、ウェビナー、プロジェクトに参加しましょう。

さらに、あなたのプロジェクトを私たちの [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) や [Seeed Studio Forum](https://forum.seeedstudio.com/) で共有することも、いつでも大歓迎です。これらのプラットフォームは、他のメイカーとつながり、フィードバックを得て、インスピレーションを見つけるための絶好の場を提供します。問題のトラブルシューティングの助けが必要なとき、最新の作品を披露したいとき、あるいは単に支え合うコミュニティの一員になりたいときなど、*Seeed Studio の Discord と Forum* は交流とコラボレーションに最適な場所です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
