---
description: Seeed Studio XIAO ESP32S3 と MicroPython
title: XIAO ESP32S3 と MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png
slug: /ja/xiao_esp32s3_with_micropython
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO ESP32S3 と MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を備えた Python インタプリタです。これは、組み込みプロセッサや制約のあるシステム向けに実装された Python 3.5 のサブセットを提供します。CPython とは異なり、その違いについては [こちら](https://github.com/micropython/micropython/wiki/Differences) を参照してください。

## MicroPython のインストール

#### Esptool のインストール
まだ esptool.py をインストールしていない場合は、PC 上で pip を使用してインストールできます：
``` linux
pip install esptool
```

#### XIAO ESP32S3 MicroPython ファームウェアのダウンロード
[Micropython.org](https://micropython.org/download/ESP32_GENERIC_S3/) からファームウェアのバイナリファイルをダウンロードする必要があります。正しい bin ファイルをダウンロードした後、そのフォルダに移動し、そこでコマンドプロンプトを開きます。  
最終版の時点での最新の bin ファイルは以下の通りです：
```
ESP32_GENERIC_S3-20230602-v1.23.0.bin
```

#### XIAO ESP32S3 を PC に接続
XIAO ESP32S3 ボードの BOOT ボタンを押し続けながら、タイプ C USB ケーブルを使用して PC に接続し、「ブートローダーモード」に入ります。

#### ポートの確認
PC 上のすべてのシリアルデバイスを確認します。

* Linux

Linux では、*dmesg* コマンドを使用して接続されたデバイスを表示できます：
```Linux
dmesg | grep tty
```
または、*ls* を使用してシリアルデバイスをリストできます：
```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

Windows では、デバイスマネージャを開いて USB からシリアルポートのアドレスを確認できます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

* macOS

macOS では、*ls* コマンドを使用して利用可能なシリアルポートをリストできます：
```
ls /dev/cu*
```
これにより、すべてのシリアルポートデバイスが表示されます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
ポートがビジー状態の場合、以下のコマンドを使用してポートを使用しているプロセスを特定し、終了させることができます（macOS の場合）：
ポートを使用しているプロセスを特定：
```
lsof | grep port
```
このコマンドは開いているファイルをリストし、指定されたポートを使用しているプロセスを検索します。  
出力からプロセス ID（PID）を見つけてプロセスを終了：
```
kill -9 <PID>
```
*PID* を実際のプロセス ID に置き換えてください。

#### フラッシュの消去
```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 erase_flash
```
'/dev/cu.usbmodem11301' をシステム上の正しいポート名に置き換えてください（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）。

#### フラッシュの書き込み
XIAO ESP32S3 にファームウェアを書き込みます：
```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_S3-20240602-v1.23.0.bin
```
再度、'/dev/cu.usbmodem11301' を正しいポート名に、'ESP32_GENERIC_S3-20240602-v1.23.0.bin' を空のファームウェアファイルのパスに置き換えてください。  
RTS ピンを介してハードリセットすることを忘れないでください。  
その後、お好みのツールを使用してスクリプトを ESP32 にコンパイルできます！

## MicroPythonにおすすめのエディタ
以下にいくつかの人気ツールを挙げます。
* [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
* [Arduino for micropython](https://docs.arduino.cc/micropython/)
* [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
* [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
  
### 1. Thonny
Thonnyをインストールして開き、以下の手順に従って設定してください：
```
pip install thonny
# インストール後にthonnyを開く
thonny
```
「Run」-->「Configure Interpreter」に進み、Thonnyオプションのインタープリタタブが以下のように表示されていることを確認してください。「CircuitPython (generic)」を選択し、ポートを設定します：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

ダイアログで「OK」をクリックすると、Thonnyウィンドウの下部にMicroPythonシェルが表示されます。以下のスクリプトをシェルに1行ずつ入力して、フラッシュサイズとSRAMサイズを取得します：
```python
import esp
esp.flash_size()
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/4.png" /></div>

おめでとうございます！Thonnyを使用してXIAO ESP32S3でMicroPythonを正常にセットアップできました！

### 2. Arduino Lab for MicroPython
Arduino Lab for MicroPythonをダウンロードし、デバイスをPCに接続します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

以下のようにコードを書きます：
```python
from machine import Pin
import time

# LEDピンを定義
led = Pin(6, Pin.OUT)  # 正しいGPIOを使用

# ループ内でLEDを点滅
while True:
    led.value(1)   # LEDをオン
    time.sleep(1)  # 1秒待機
    led.value(0)   # LEDをオフ
    time.sleep(1)  # 1秒待機
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/7.png" /></div>

### 3. Visual Studio CodeのPymakr

* **Pymakrをインストール**
[インストール手順](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)に従ってPymakrをインストールします。
* **XIAO ESP32S3をコンピュータに接続**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/8.png" /></div>

* **新しいプロジェクトを作成**
VS Codeを開き、マイクロコントローラ用の新しいプロジェクトを作成します。
* **新しいPythonファイルを追加**
プロジェクト内に新しいPythonファイルを作成します。
* **スクリプトをMCUにアップロードしてコンパイル**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPyCraft IDE
* [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)
* [Windows](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
* [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## ピン配置/ポート情報
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/10.png" /></div>

* 詳細については[ハードウェア概要](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#hardware-overview)を参照してください。
* [Seeed Studio XIAO ESP32S3回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

## XIAO ESP32S3でのMicroPythonの始め方

こちらは [MicroPythonによるESP32操作のクイックリファレンス](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython)です。  
また、[MicroPythonライブラリ](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries)に関する知識はこちらをご参照ください。

### 一般的なボード制御
MicroPythonのREPL(*R*ead-*E*val-*P*rint-*L*oop)はUART0 (GPIO1=TX, GPIO3=RX)で動作し、ボーレートは115200です。タブ補完を使用すると、オブジェクトが持つメソッドを確認するのに便利です。ペーストモード（Ctrl-E）は、大量のPythonコードをREPLに貼り付ける際に役立ちます。  
MicroPython（Pythonでも同様）の*dir()*関数を使用して、オブジェクトの属性やメソッドを一覧表示できます。  
例えば、シェルで*dir(machine)*を入力します：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/11.png" /></div>

*machine*モジュール:
```python
import machine
machine.freq()          # CPUの現在の周波数を取得、ESP32S3の場合は240000000
machine.freq(160000000) # CPU周波数を160MHzに設定
# 周波数は20MHz, 40MHz, 80MHz, 160MHz, 240MHzのいずれかである必要があります
```

*esp*モジュール:
```python
import esp

esp.osdebug(None)       # ベンダーOSのデバッグメッセージをオフにする
esp.osdebug(0)          # ベンダーOSのデバッグメッセージをUART(0)にリダイレクトする

# フラッシュストレージと対話する低レベルメソッド
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

*esp32*モジュール:
ESP32C3、ESP32S2、ESP32S3には内部温度センサーがあり、摂氏温度を返します:
```python
import esp32
esp32.mcu_temperature() # MCUの内部温度を摂氏で読み取る
```

### ネットワーク-WLAN
*Network*モジュール:  
詳細は[こちら](https://docs.micropython.org/en/latest/library/network.WLAN.html)をご参照ください。
```python
import network

wlan = network.WLAN(network.STA_IF) # ステーションインターフェースを作成
wlan.active(True)       # インターフェースをアクティブ化
wlan.scan()             # アクセスポイントをスキャン
wlan.isconnected()      # ステーションがAPに接続されているか確認
wlan.connect('ssid', 'key') # APに接続
wlan.config('mac')      # インターフェースのMACアドレスを取得
wlan.ifconfig()         # インターフェースのIPv4アドレスを取得

ap = network.WLAN(network.AP_IF) # アクセスポイントインターフェースを作成
ap.config(ssid='ESP-AP')         # アクセスポイントのSSIDを設定
ap.config(max_clients=10)        # ネットワークに接続できるクライアント数を設定
ap.active(True)                  # インターフェースをアクティブ化
```

ローカルWiFiネットワークに接続するための便利な関数:
```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('ネットワークに接続中...')
        wlan.connect('ssid', 'key') # ssidとkeyを置き換えてください
        while not wlan.isconnected():
            pass
    print('ネットワーク設定:', wlan.ifconfig())
```

### 遅延とタイミング
*time*モジュール:
```python
import time

time.sleep(1)           # 1秒間スリープ
time.sleep_ms(500)      # 500ミリ秒スリープ
time.sleep_us(10)       # 10マイクロ秒スリープ
start = time.ticks_ms() # ミリ秒カウンターを取得
delta = time.ticks_diff(time.ticks_ms(), start) # 時間差を計算
```

### タイマー
ESP32ポートには4つのハードウェアタイマーがあります。[クラス](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer)を使用して、タイマーIDを0から3（含む）の範囲で指定します:
```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```
期間はミリ秒単位です。  
現在、このポートでは仮想タイマーはサポートされていません。

### ピンとGPIO
*machine.Pin*クラス:
```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # GPIO2に出力ピンを作成
p2.on()                 # ピンを「オン」（高レベル）に設定
p2.off()                # ピンを「オフ」（低レベル）に設定
p2.value(1)             # ピンをオン/高レベルに設定

p3 = Pin(3, Pin.IN)     # GPIO3に入力ピンを作成
print(p3.value())       # 値を取得、0または1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # 内部プルアップ抵抗を有効化
p5 = Pin(5, Pin.OUT, value=1)    # 作成時にピンを高レベルに設定
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # 最大駆動強度を設定
```

使用可能なピンは以下の範囲（含む）です: 1,2,3,4,5,6,7,8,9,43,44。これらはESP32S3チップの実際のGPIOピン番号に対応しています。

### UART（シリアルバス）
*machine.UART*クラス:
```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=43, rx=44)
uart1.write('hello')  # 5バイトを書き込み
uart1.read(5)         # 最大5バイトを読み取り
```

ESP32C3には1つのハードウェアUARTがあります。使用可能なピンは以下の通りです:
| UART | ピン |
|------|-----|
| TX   | 43  |
| RX   | 44  |

### PWM（パルス幅変調）
PWMはすべての出力可能なピンで有効化できます。基本周波数は1Hzから40MHzの範囲ですが、基本周波数が増加するとデューティ解像度が低下します。  
*machine.PWM*クラス:
```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # ピンからPWMオブジェクトを作成
freq = pwm2.freq()         # 現在の周波数を取得
pwm2.freq(1000)            # PWM周波数を1Hzから40MHzに設定

duty = pwm2.duty()         # 現在のデューティサイクルを取得、範囲0-1023（デフォルト512、50%）
pwm2.duty(256)             # デューティサイクルを0から1023の範囲で設定、（現在25%）

duty_u16 = pwm2.duty_u16() # 現在のデューティサイクルを取得、範囲0-65535
pwm2.duty_u16(2**16*3//4)  # デューティサイクルを0から65535の範囲で設定、（現在75%）

duty_ns = pwm2.duty_ns()   # 現在のパルス幅をナノ秒単位で取得
pwm2.duty_ns(250_000)      # パルス幅をナノ秒単位で設定、0から1_000_000_000/freqの範囲、（現在25%）

pwm2.deinit()              # ピン上のPWMをオフにする

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # 作成と設定を一度に実行
print(pwm3)                               # PWM設定を表示
```

### ADC（アナログからデジタル変換）
XIAO ESP32S3では、ADC機能はピン1,2,3,4,5,6,7,8,9で利用可能です。  
*machine.ADC*クラス:
```python
from machine import ADC

adc = ADC(pin)        # ピンに作用するADCオブジェクトを作成
val = adc.read_u16()  # 生のアナログ値を0-65535の範囲で読み取る
val = adc.read_uv()   # アナログ値をマイクロボルト単位で読み取る
```

### SPI

#### ソフトウェア SPI バス
ソフトウェア SPI（ビットバンを使用）はすべてのピンで動作し、*machine.SoftSPI* クラスを介してアクセスします：
```python
from machine import Pin, SoftSPI

# 指定されたピンで SoftSPI バスを構築
# polarity は SCK のアイドル状態
# phase=0 は SCK の最初のエッジでサンプリング、phase=1 は 2 番目のエッジでサンプリング
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # ボーレートを設定

spi.read(10)            # MISO で 10 バイトを読み取る
spi.read(10, 0xff)      # MOSI で 0xff を出力しながら 10 バイトを読み取る

buf = bytearray(50)     # バッファを作成
spi.readinto(buf)       # 指定されたバッファに読み取る（この場合 50 バイト）
spi.readinto(buf, 0xff) # 指定されたバッファに読み取り、MOSI で 0xff を出力

spi.write(b'12345')     # MOSI で 5 バイトを書き込む

buf = bytearray(4)      # バッファを作成
spi.write_readinto(b'1234', buf) # MOSI に書き込み、MISO からバッファに読み取る
spi.write_readinto(buf, buf) # buf を MOSI に書き込み、MISO から buf に読み取る
```

#### ハードウェア SPI バス
ハードウェア SPI は *machine.SPI* クラスを介してアクセスされ、上記のソフトウェア SPI と同じメソッドを持ちます：
```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(7), mosi=Pin(9), miso=Pin(8))
```

| SPI  | ピン |
|------|-----|
| SCK  | D7  |
| MOSI | D9  |
| MISO | D8  |

### I2C

#### ソフトウェア I2C バス
ソフトウェア I2C（ビットバンを使用）は、出力可能なすべてのピンで動作し、*machine.SoftI2C* クラスを介してアクセスします：
```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(6), sda=Pin(5), freq=100000)

i2c.scan()              # デバイスをスキャン

i2c.readfrom(0x3a, 4)   # アドレス 0x3a のデバイスから 4 バイトを読み取る
i2c.writeto(0x3a, '12') # アドレス 0x3a のデバイスに '12' を書き込む

buf = bytearray(10)     # 10 バイトのバッファを作成
i2c.writeto(0x3a, buf)  # 指定されたバッファを周辺機器に書き込む
```

#### ハードウェア I2C バス
ドライバは *machine.I2C* クラスを介してアクセスされ、上記のソフトウェア I2C と同じメソッドを持ちます：
```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(6), sda=Pin(5), freq=400000)
```

### XIAO 用拡張ボードベース
*前提条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32S3<br />（ヘッダー付き）</th>
      <th>XIAO 用拡張ボードベース</th>
      <th>Grove ライトセンサー</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### ライトセンサーのデータを読み取る
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
from machine import Pin, ADC

# ピン 2（A0 に対応）でアナログ入力を初期化
analog_in = ADC(Pin(1))
analog_in.atten(ADC.ATTN_11DB)  # 入力範囲を設定（0-3.6V）

def get_voltage(pin):
    # 生の ADC 値を電圧に変換
    return (pin.read() / 4095) * 3.3

while True:
    # 生のアナログ値を読み取る
    raw_value = analog_in.read()
    # 生の値を電圧に変換
    voltage = get_voltage(analog_in)
    
    # 生の値と電圧をシリアルコンソールに出力
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # 再度読み取る前に短時間待機
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/13.png" /></div>

#### OLED スクリーンを点灯する
XIAO ESP32S3 を接続し、Thonny を開いて右下をクリックしてインタプリタを設定します。  
インタプリタを選択 - Micropython (ESP32) と **ポート >>> OK をクリック**  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/14.png" /></div>

すべてが正常に動作していれば、シェルに出力が表示されます。  
MicroPython から ssd1306 ライブラリをインストールします。  
「ツール」をクリック >>> 「パッケージ管理」をクリック >>> ライブラリ名を入力 >>> 「micropython-lib と PyPl を検索」をクリック  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/15.png" /></div>

スクリプトを実行してボードにフラッシュします。  
コードを書き終えたら、緑色のボタンをクリックしてスクリプトを実行します。
```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 ピン割り当て
i2c = SoftI2C(scl=Pin(6), sda=Pin(5))  # 接続に基づいてピン番号を調整
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # 画面をクリア
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # テキストを表示
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/17.png" /></div>

#### カメラストリーミングテスト

ESP32S3 Sense（カメラ付き）向けのカメラストリーミングテストも提供されています。詳細については[こちら](https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Micropython/#step-3-testing-the-streaming-example)をご参照ください。

この記事をお読みいただきありがとうございます！ぜひコメントでご意見をお寄せください。

## リソース
* MicroPythonを搭載したXIAO ESP32S3用の[ファームウェアバイナリファイル](https://micropython.org/download/ESP32_GENERIC_S3/)

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験をスムーズにするために、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>