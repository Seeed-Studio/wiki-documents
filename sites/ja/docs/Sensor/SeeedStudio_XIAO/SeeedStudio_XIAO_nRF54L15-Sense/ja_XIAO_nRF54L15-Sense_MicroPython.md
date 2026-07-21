---
description: ''
title: Seeed Studio XIAO nRF54L15 向け MicroPython
keywords:
  - nRF54L15
  - xiao
  - MicroPython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.webp
slug: /xiao_nrf54l15_sense_micropython
last_update:
  date: 1/15/2026
  author: Brandy
createdAt: '2025-09-26'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_micropython/
---



### MicroPython を理解する

このチュートリアルでは、XIAO nRF54L15 をベースに Thonny 上で MicroPython を使用する方法を紹介します。

[MicroPython](https://github.com/micropython/micropython/wiki) は、一部にネイティブコードコンパイル機能を備えた Python インタプリタです。組み込みプロセッサや制約のあるシステム向けに実装された、Python 3.5 機能のサブセットを提供します。これは CPython とは異なり、その違いについては[こちら](https://github.com/micropython/micropython/wiki/Differences)で詳しく読むことができます。さらに興味深いコレクションが必要な場合は、[こちら](
https://awesome-micropython.com/)を確認してください。

<!-- ## 安装Python3
Thonny自带Python解释器，所以不需要额外安装Python环境
Win + R -->

## ハードウェアの準備

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF54L15 </th>
        <th> Seeed Studio XIAO nRF54L15 Sense</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/16.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Thonny IDE のインストール

[Thonny IDE](https://thonny.org/)

インストールする環境に合ったバージョンを選択します。ここでは Windows システムにインストールするので、Windows 版を選択しています。

使用したい Python バージョンに応じて、指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div>

その後は、デフォルトの手順に従って設定を進めるだけです。

### リポジトリをダウンロードする


リポジトリをローカルマシンにクローンし、この XIAO nRF54L15 用 MicroPython が保存されているパスを覚えておきます。このパスは後で使用します。

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/2.png" style={{width:600, height:'auto'}}/></div>

### ボードファイルをアップロードする

**Step 0.** XIAO NRF54L15 を USB ケーブルでコンピュータに接続します

**Step 1.** XIAO nRF54L15 用の MicroPython ファームウェアを書き込みます

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- ファームウェアパッケージをダウンロードして適切な場所に解凍します。その後、flash.bat をクリックすると、自動的にファームウェアを書き込んでくれます。

    **[Firmware]** [XIAO nRF54L15 MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao54_flash.zip)
<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/10.png" style={{width:600, height:'auto'}}/></div>
結果は次のようになります
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
このスクリプトには、フラッシュ用ツールチェーンコマンドがあらかじめ設定されています。初めて使用する場合は、少し時間がかかることがあります。ダウンロード後は自動的にクラッシュします。XIAO NRF54L15 が接続されていない場合、書き込み中に「200」エラーが発生します。
:::

**Step 2.** Thonny IDE を開き、画面右下をクリックしてインタプリタオプションを設定します。MicroPython (generic) と Port を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_1.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** boards ファイルをアップロードします

- 「view」を開き、"File" を選択すると、左側のサイドバーにファイルマネージャのパスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/11.png" style={{width:600, height:'auto'}}/></div>

- クローンまたはダウンロードしたファイルのパスを開き、`micropython-seeed-boards\examples` を開きます
-「boards」フォルダを右クリックして flash にアップロードします。その後、MicroPython device/flash 上にアップロードされたファイルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/12.png" style={{width:600, height:'auto'}}/></div>

正常な場合、「3」の位置にアイコンが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/13.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** LED を点灯する

新しいファイル（XX.py）を開くかスタートページに移動し、コードをコピーして `F5` を押して実行します。

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

結果は次のとおりです：

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
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
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
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア

```py
from machine import Pin
from boards.xiao_nrf54l15 import xiao_nrf54l15 as xiao

# Define a function to get the GPIO information corresponding to pin A0
def get_a0_pin():
    # Get the information of pin A0 through the pin method of the xiao module
    # According to the definition in xiao_nrf54l15.py, A0 corresponds to digital pin 0
    pin_info = xiao.pin(0)  # Get the information of digital pin 0, the return value is a tuple, such as ("gpio1", 4)
    return pin_info

# Define a function to set pin A0 to high level
def set_a0_high():
    # Get the GPIO information of pin A0
    gpio_port, gpio_pin = get_a0_pin()  # Get the port and pin number
    # Create a Pin object, specify the pin as output mode, and set it to high level
    pin = Pin((gpio_port, gpio_pin), Pin.OUT)  # Initialize the pin as output mode
    pin.value(1)  # Set the pin to high level

# Main program
if __name__ == "__main__":
    set_a0_high()  # Call the function to set pin A0 to high level
    print("Pin A0 has been set to high level")  # Output prompt information
```

コードの説明：
このコードは 4 つの部分から構成されています。モジュールのインポート、ピン A0 の GPIO 情報を取得する関数、ピン A0 を High レベルに設定する関数、そしてメイン関数です。メインプログラムでは、ピン A0 を High レベルに設定する処理を呼び出しています。

### 結果
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/15.jpg" style={{width:500, height:'auto'}}/></div>

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
このコードは4つの部分に分けることができます：
 - モジュールのインポート：遅延処理用のtimeモジュール、およびXiaoADCモジュールとXiaoPWMモジュールを含みます
 - ハードウェアの初期化：ADCとPWMのピンを定義し、ポテンショメータの電圧を読み取るためにADCを初期化し、LEDの明るさを制御するためにPWMを初期化します。 
 - メインプログラムロジック：無限ループ内でポテンショメータの電圧を読み取り、それをPWMデューティサイクルに変換し、電圧に応じてLEDの明るさを調整します。 
 - 例外処理とクリーンアップ：ユーザーの割り込み（Ctrl+Cの押下など）やその他の例外を捕捉し、プログラムが安全に終了するようにします。



### 結果
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:500, height:'auto'}}/></div>

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

コードの説明：

このコードは、I2C 通信を介して SSD1306 OLED ディスプレイを初期化および制御し、ディスプレイのコマンドとパラメータを定義し、画面クリア、初期化、テキスト表示のための関数を実装します。

- モジュールのインポートと I2C 通信の初期化：
       遅延処理のために time モジュールをインポートし、I2C 通信を初期化するために XiaoI2C モジュールをインポートしました。I2C の SDA と SCL ピンを定義し、I2C 周波数を設定しました。その後、OLED ディスプレイなどの I2C デバイスと通信するために XiaoI2C オブジェクトを作成しました。


- SSD1306 ディスプレイの命令とパラメータの定義：
       SSD1306 ディスプレイの I2C アドレスと、一連の制御コマンド（コントラスト設定、表示のオン/オフ など）を定義します。また、ディスプレイのサイズパラメータ（幅、高さ、ページ数）と、画面に文字を表示するためのシンプルな 8x8 ドットマトリクスフォントライブラリも定義します。
- ヘルパー関数の定義：
        SSD1306 にコマンドやデータを送信するための一連のヘルパー関数を定義します。
- メインプログラムのロジック：
      まず、I2C スキャンを実行して SSD1306 ディスプレイが I2C バスに接続されているかを確認します。ディスプレイが見つかった場合、`ssd1306_init` 関数を呼び出してディスプレイを初期化します。その後、`ssd1306_draw_text` 関数を呼び出して、ディスプレイに "NRF54L15" と "HELLO WORLD" の 2 行のテキストを表示します。

### 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/14.jpg" style={{width:500, height:'auto'}}/></div>

## SPI

### ハードウェア

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
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

コードの説明：

- モジュールのインポート
        - `time`: 遅延などの時間関連の機能を有効にします。
        - `XiaoPin and XiaoSPI`: `boards.xiao` からインポートされます。XiaoPin は GPIO ピンの制御に使用され、XiaoSPI は SPI 通信を扱います。

- ピンと SPI の設定
        - 特定のピンを定義：Reset（RST）、Chip Select（CS）、Data/Command（DC）、Busy（BUSY）。
        - SPI 関連のピン（SCK、MOSI、MISO）と SPI コントローラを設定します。
        - すべての GPIO ピンの動作モード（入力/出力）を初期化します。
        - 周波数 20 MHz で SPI インスタンスを作成します。

- ePaper の基本関数
        - `reset()`: ディスプレイに対してハードウェアリセット操作を実行します。
        - `send_command(cmd)`: 1 バイトのコマンドを送信します。
        - `send_data(data)`: 1 バイトまたは複数バイトのデータを送信します。
        - `wait_until_idle()`: ディスプレイがアイドル状態になるまで待機します（現在は単純なディレイで実装）。
        - `init_display()`: ディスプレイの初期化処理を実行します。
        - `clear_screen()`: 画面をクリアし、全面を白に設定します。

- ディスプレイパラメータ
        - `WIDTH, HEIGHT = 800, 480`: ディスプレイの解像度を指定します。
        - `BYTES_PER_ROW`: 各ピクセル行に必要なバイト数を示します。
        - `linebuf`: 1 行分のピクセルデータを一時的に格納するラインバッファです。

- フォントシステム
        - `G` 辞書に格納されたシンプルな 5x7 ピクセルフォントを定義します。
        - `glyph(ch)`: 指定された文字に対応するピクセルデータを取得します。
        - `text_size()`: 指定したスケーリング比でテキストを表示する際のサイズ（幅と高さ）を計算します。
        - `text_pixel()`: 特定の位置にピクセルを描画すべきかどうかを判定します（テキスト描画で使用）。

- ディスプレイ更新
        - **epaper_update_lines(lines)**: ディスプレイを更新するための中核となる関数です。
        - まず、全面を白にする背景データを送信します。
        - 次に、新しい画像データを行ごとに計算して送信します。
        - 最後に、ディスプレイのリフレッシュをトリガーして新しい内容を表示します。
        - 各行ごとに位置や拡大率を個別に設定できる、複数行テキスト表示をサポートします。

- main() 関数
        - ディスプレイを初期化します。
        - テキストを中央配置するための位置を計算します。
        - テキスト行用の設定リストを作成します。
        - `epaper_update_lines()` を呼び出してディスプレイ内容を更新します。
        - 無限スリープループに入ります。

### 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.jpg" style={{width:600, height:'auto'}}/></div>

## プログラムを自動実行させる

省略形プログラムを自動的に実行できるようにしたい場合は、次の手順に従ってください。

**Step 1.** 新しいプログラムファイルを作成し、Ctrl + S を使用して MicroPython デバイスのフラッシュメモリに保存し、名前を main.py にします。

ここでは例として blink プログラムを取り上げます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_2.png" style={{width:600, height:'auto'}}/></div>

その後、MicroPython device/flash セクションの下に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_3.png" style={{width:600, height:'auto'}}/></div>

**Step 2.** オンボードの Reset ボタンを押すことで、自動実行の効果を得ることができます。

効果:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

<!-- :::tip
如果您自己自己定义或封装了模块的py文件，也请一并上传
::: -->

## FAQ

### ブートローダーの更新

工場出荷時に使用された Bootloader が古いバージョンであるために、Thonny を使用して MicroPython プログラムをアップロードできない状況に遭遇した場合。

**Step 1.** 配線

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
書き込みプロセスの失敗を防ぐため、ピン接続が正しいことを必ず確認してください。
:::

**Step 2.** ファームウェア書き込みプログラムをダウンロードする

[xiao_samd11_flash](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_samd11_flash_nrf.zip)

**Step 3.** スクリプトを実行する

Windows システムを例に説明します。ダウンロードしたファイルを解凍し、フォルダ内で右クリックしてターミナルを開きます。**.\xiao_samd11_openocd_flash.bat** を実行します。配線が正しければ、結果は次の画像のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
Mac/Linux システムでは、**.bat** を **.sh** に変更する必要があります。
:::

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
