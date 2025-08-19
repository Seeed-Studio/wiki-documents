---
description: Seeed Studio XIAO ESP32C3 と MicroPython
title: XIAO ESP32C3 と MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png
slug: /ja/xiao_esp32c3_with_micropython
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO ESP32C3 と MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) は、部分的なネイティブコードコンパイル機能を備えた Python インタープリタです。これは、組み込みプロセッサや制約のあるシステム向けに実装された Python 3.5 のサブセットを提供します。CPython とは異なり、その違いについては [こちら](https://github.com/micropython/micropython/wiki/Differences) を参照してください。

## MicroPython のインストール

#### Esptool のインストール
まだ esptool.py をインストールしていない場合は、PC 上で pip を使用してインストールできます：
``` linux
pip install esptool
```

#### XIAO ESP32C3 MicroPython ファームウェアのダウンロード
ファームウェアのバイナリファイルを [micropython.org](https://micropython.org/download/ESP32_GENERIC_C3/) からダウンロードする必要があります。  
正しい bin ファイルをダウンロードした後、そのフォルダに移動し、そこでコマンドプロンプトを開きます。  
最終版の時点での最新バージョンの bin ファイルは以下の通りです：
```
ESP32_GENERIC_C3-20230602-v1.23.0.bin
```

#### XIAO ESP32C3 を PC に接続
XIAO ESP32C3 ボードの BOOT ボタンを押し続けながら、タイプ C USB ケーブルを使用して PC に接続し、「ブートローダーモード」に入ります。

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

Windows では、デバイスマネージャーを通じてシリアルポートを確認できます。「ポート (COM & LPT)」セクションを探して、利用可能なシリアルポートを確認してください。また、コマンドプロンプトで mode コマンドを使用してシリアルポートをリストすることもできます：
```
mode
```

* macOS

macOS では、*ls* コマンドを使用して利用可能なシリアルポートをリストできます：
```
ls /dev/cu*
```
これにより、すべてのシリアルポートデバイスが表示されます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
ポートがビジー状態の場合、以下のコマンドを使用してポートを使用しているプロセスを特定し、終了させることができます（macOS 上で）：
ポートを使用しているプロセスを特定：
```
lsof | grep port
```
このコマンドは開いているファイルをリストし、指定されたポートを使用しているプロセスを検索します。  
出力からプロセス ID (PID) を見つけてプロセスを終了：
```
kill -9 <PID>
```
*PID* を実際のプロセス ID に置き換えてください。
:::

#### フラッシュの消去
```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```
'/dev/cu.usbmodem11301' をシステム上の正しいポート名に置き換えてください（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/2.png" /></div>

#### フラッシュの書き込み
ファームウェアを XIAO ESP32C3 にフラッシュします：
```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_C3-20240602-v1.23.0.bin
```
再度、'/dev/cu.usbmodem11301' を正しいポート名に、'ESP32_GENERIC_C3-20240602-v1.23.0.bin' を空のファームウェアファイルのパスに置き換えてください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/3.png" /></div>
これで、お好みのツールを使用して ESP32 にスクリプトをコンパイルする準備が整いました！

## MicroPythonにおすすめのエディタ
以下は、人気のあるツールのリストです。
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
「Run」→「Configure Interpreter」に移動し、Thonnyオプションのインタープリタタブが以下のように表示されていることを確認してください。「CircuitPython (generic)」を選択し、ポートを設定します：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

ダイアログで「OK」をクリックすると、Thonnyウィンドウの下部にMicroPythonシェルが表示されます。以下のスクリプトをシェルに1行ずつ入力して、フラッシュサイズとSRAMサイズを取得します：
```python
import gc
gc.mem_free()

import esp
esp.flash_size()
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

これで、Thonnyを使用してXIAO ESP32C3でMicroPythonを正常にセットアップできました。おめでとうございます！

### 2. Arduino Lab for MicroPython
Arduino Lab for MicroPythonをダウンロードし、デバイスをPCに接続します。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

以下のようにコードを書きます：
```python
from machine import Pin
import time

# LEDピンを定義
led = Pin(7, Pin.OUT)  # 正しいGPIO番号を使用してください（例：D10ではなく）

# ループ内でLEDを点滅
while True:
    led.value(1)   # LEDをオンにする
    time.sleep(1)  # 1秒待つ
    led.value(0)   # LEDをオフにする
    time.sleep(1)  # 1秒待つ
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/9.png" /></div>

### 3. Visual Studio CodeのPymakr
* **Pymakrをインストール**
  [インストール手順](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)に従ってPymakrをインストールします。
* **XIAO ESP32C3をコンピュータに接続**
* **新しいプロジェクトを作成**
  VS Codeを開き、マイクロコントローラ用の新しいプロジェクトを作成します。
* **新しいPythonファイルを追加**
  プロジェクト内に新しいPythonファイルを作成します。
* **スクリプトをMCUにアップロードしてコンパイル**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPyCraft IDE
* [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)
* [Windows](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
* [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## ピン配置/ポート情報
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/11.png" /></div>

* 詳細については、[ハードウェア概要](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#hardware-overview)を参照してください。
* [Seeed Studio XIAO ESP32C3回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## MicroPython を使用した XIAO ESP32C3 のセットアップ

こちらは [MicroPython による ESP32 の操作に関するクイックリファレンス](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython) です。
また、[MicroPython ライブラリ](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries)に関する詳細な情報はこちらをご覧ください。

### 一般的なボード制御
MicroPython の REPL (*R*ead-*E*val-*P*rint-*L*oop) は UART0 (GPIO1=TX, GPIO3=RX) にあり、ボーレートは 115200 です。タブ補完はオブジェクトが持つメソッドを確認するのに便利です。ペーストモード (ctrl-E) は大量の Python コードを REPL に貼り付ける際に役立ちます。
MicroPython では *dir()* 関数を使用してオブジェクトの属性やメソッドを一覧表示できます (Python と同様)。例えば、シェルで *dir(machine)* を入力します:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/12.png" /></div>

*machine* モジュール:
```python
import machine
machine.freq()          # CPU の現在の周波数を取得、ESP32C3 の場合は 160000000
machine.freq(160000000) # CPU 周波数を 160 MHz に設定
```
*esp* モジュール:
```python
import esp

esp.osdebug(None)       # ベンダー OS のデバッグメッセージをオフにする
esp.osdebug(0)          # ベンダー OS のデバッグメッセージを UART(0) にリダイレクトする

# フラッシュストレージと対話する低レベルメソッド
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

*esp32* モジュール:
ESP32C3、ESP32S2、および ESP32S3 には内部温度センサーがあり、摂氏温度を返します:
```python
import esp32
esp32.mcu_temperature() # MCU の内部温度を摂氏で読み取る
```

### ネットワーク-WLAN
*Network* モジュール:
詳細情報は [こちら](https://docs.micropython.org/en/latest/library/network.WLAN.html) を参照してください。
```python
import network

wlan = network.WLAN(network.STA_IF) # ステーションインターフェースを作成
wlan.active(True)       # インターフェースをアクティブ化
wlan.scan()             # アクセスポイントをスキャン
wlan.isconnected()      # ステーションが AP に接続されているか確認
wlan.connect('ssid', 'key') # AP に接続
wlan.config('mac')      # インターフェースの MAC アドレスを取得
wlan.ifconfig()         # インターフェースの IPv4 アドレスを取得

ap = network.WLAN(network.AP_IF) # アクセスポイントインターフェースを作成
ap.config(ssid='ESP-AP')         # アクセスポイントの SSID を設定
ap.config(max_clients=10)        # ネットワークに接続できるクライアント数を設定
ap.active(True)                  # インターフェースをアクティブ化
```
ローカル WiFi ネットワークに接続するための便利な関数:
```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('ネットワークに接続中...')
        wlan.connect('ssid', 'key') # ssid と key を置き換えてください
        while not wlan.isconnected():
            pass
    print('ネットワーク設定:', wlan.ifconfig())
```

### 遅延とタイミング
*time* モジュール:
```python
import time

time.sleep(1)           # 1 秒間スリープ
time.sleep_ms(500)      # 500 ミリ秒スリープ
time.sleep_us(10)       # 10 マイクロ秒スリープ
start = time.ticks_ms() # ミリ秒カウンターを取得
delta = time.ticks_diff(time.ticks_ms(), start) # 時間差を計算
```

### タイマー
ESP32 ポートには 4 つのハードウェアタイマーがあります。[クラス](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer)を使用してタイマー ID を 0 から 3 (含む) の範囲で指定します:
```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```
期間はミリ秒単位です。
このポートでは仮想タイマーは現在サポートされていません。

### ピンと GPIO
*machine.Pin* クラス:
```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # GPIO2 に出力ピンを作成
p2.on()                 # ピンを "オン" (高レベル) に設定
p2.off()                # ピンを "オフ" (低レベル) に設定
p2.value(1)             # ピンをオン/高レベルに設定

p3 = Pin(3, Pin.IN)     # GPIO3 に入力ピンを作成
print(p3.value())       # 値を取得、0 または 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # 内部プルアップ抵抗を有効化
p5 = Pin(5, Pin.OUT, value=1)    # 作成時にピンを高レベルに設定
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # 最大駆動強度を設定
```
使用可能なピンは以下の範囲 (含む) です: 2,3,4,5,6,7,8,9,10,20,21。これらは ESP32C3 チップの実際の GPIO ピン番号に対応しています。

### UART (シリアルバス)
*machine.UART* クラス:
```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # 5 バイトを書き込み
uart1.read(5)         # 最大 5 バイトを読み取り
```
ESP32C3 には 1 つのハードウェア UART があります。以下のピンが使用可能です:

| UART | ピン |
|------|-----|
| TX   | 21  |
| RX   | 20  |

### PWM (パルス幅変調)
PWM はすべての出力可能なピンで有効化できます。基本周波数は 1Hz から 40MHz の範囲ですが、基本周波数が増加するとデューティ解像度が低下します。
*machine.PWM* クラス:
```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # ピンから PWM オブジェクトを作成
freq = pwm2.freq()         # 現在の周波数を取得
pwm2.freq(1000)            # PWM 周波数を 1Hz から 40MHz に設定

duty = pwm2.duty()         # 現在のデューティサイクルを取得、範囲 0-1023 (デフォルト 512, 50%)
pwm2.duty(256)             # デューティサイクルを 0 から 1023 の範囲で設定 (現在 25%)

duty_u16 = pwm2.duty_u16() # 現在のデューティサイクルを取得、範囲 0-65535
pwm2.duty_u16(2**16*3//4)  # デューティサイクルを 0 から 65535 の範囲で設定 (現在 75%)

duty_ns = pwm2.duty_ns()   # 現在のパルス幅を ns 単位で取得
pwm2.duty_ns(250_000)      # パルス幅をナノ秒単位で設定 (現在 25%)

pwm2.deinit()              # ピン上の PWM をオフにする

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # 作成と設定を一度に実行
print(pwm3)                               # PWM 設定を表示
```

ESP チップには異なるハードウェア周辺機器があります:

| ハードウェア仕様                             | ESP32C3 | ESP32 |
|---------------------------------------------|----------|-------|
| グループ数 (速度モード)                     | 1        | 2     |
| グループごとのタイマー数                     | 4        | 4     |
| グループごとのチャンネル数                   | 6        | 8     |
| 異なる PWM 周波数 (グループ * タイマー)      | 4        | 8     |
| 合計 PWM チャンネル数 (ピン、デューティ) (グループ * チャンネル) | 6        | 16    |

### ADC（アナログからデジタル変換）
XIAO ESP32C3では、ADC機能はピン2、3、4で利用可能です。
:::note
A3（GP105）はADC2を使用しますが、誤ったサンプリング信号により動作しなくなる可能性があります。アナログ読み取りには、ADC1（A0/A1/A2）を使用してください。詳細はXIAO ESP32C3のデータシートを参照してください。
:::
*machine.ADC* クラスの使用例：
```python
from machine import ADC

adc = ADC(pin)        # ピンに基づいてADCオブジェクトを作成
val = adc.read_u16()  # 0-65535の範囲で生のアナログ値を読み取る
val = adc.read_uv()   # マイクロボルト単位でアナログ値を読み取る
```

### SPI

#### ソフトウェアSPIバス
ソフトウェアSPI（ビットバン方式）はすべてのピンで動作し、*machine.SoftSPI* クラスを介してアクセスします：
```python
from machine import Pin, SoftSPI

# 指定されたピンでSoftSPIバスを構築
# polarityはSCKのアイドル状態
# phase=0はSCKの最初のエッジでサンプリング、phase=1は2番目のエッジでサンプリング
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # ボーレートを設定

spi.read(10)            # MISOで10バイトを読み取る
spi.read(10, 0xff)      # MOSIで0xffを出力しながら10バイトを読み取る

buf = bytearray(50)     # バッファを作成
spi.readinto(buf)       # 指定されたバッファに読み取る（この場合50バイト）
spi.readinto(buf, 0xff) # 指定されたバッファに読み取り、MOSIで0xffを出力

spi.write(b'12345')     # MOSIで5バイトを書き込む

buf = bytearray(4)      # バッファを作成
spi.write_readinto(b'1234', buf) # MOSIに書き込み、MISOからバッファに読み取る
spi.write_readinto(buf, buf) # MOSIにバッファを書き込み、MISOから同じバッファに読み取る
```
#### ハードウェアSPIバス
ハードウェアSPIは*machine.SPI* クラスを介してアクセスし、上記のソフトウェアSPIと同じメソッドを持ちます：
```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(8), mosi=Pin(10), miso=Pin(9))
```

| SPI  | ピン |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

#### ソフトウェアI2Cバス
ソフトウェアI2C（ビットバン方式）はすべての出力可能なピンで動作し、*machine.SoftI2C* クラスを介してアクセスします：
```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(7), sda=Pin(6), freq=100000)

i2c.scan()              # デバイスをスキャン

i2c.readfrom(0x3a, 4)   # アドレス0x3aのデバイスから4バイトを読み取る
i2c.writeto(0x3a, '12') # アドレス0x3aのデバイスに'12'を書き込む

buf = bytearray(10)     # 10バイトのバッファを作成
i2c.writeto(0x3a, buf)  # 指定されたバッファを周辺機器に書き込む
```

#### ハードウェアI2Cバス
ドライバは*machine.I2C* クラスを介してアクセスし、上記のソフトウェアI2Cと同じメソッドを持ちます：
```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(7), sda=Pin(6), freq=400000)
```
| I2C  | GPIO | ピン |
|------|------|-----|
| SCL  | GPIO7 | D5  |
| SDA  | GPIO6 | D4  |

### XIAO用拡張ボードベース
*必要条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br />（ヘッダー付き）</th>
      <th>XIAO用拡張ボードベース</th>
      <th>Groveライトセンサー</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
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

# ピン2（A0に対応）でアナログ入力を初期化
analog_in = ADC(Pin(2))
analog_in.atten(ADC.ATTN_11DB)  # 入力範囲を設定（0-3.6V）

def get_voltage(pin):
    # 生のADC値を電圧に変換
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
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/14.png" /></div>

#### OLEDスクリーンを点灯する
XIAO ESP32C3を接続し、Thonnyを開いて右下をクリックしてインタープリタを設定します。
インタープリタを選択 - Micropython (ESP32) を選択し、**ポート >>> OKをクリック**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/15.png" /></div>

すべてが正常に動作していれば、シェルに出力が表示されます。
必要な[ライブラリ](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_MicroPython/#install-required-libraries)をインストールします。
「ツール」をクリック >>> 「パッケージ管理」をクリック >>> ライブラリ名を入力 >>> 「micropython-libとPyPlを検索」をクリック
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/16.png" /></div>

スクリプトを実行してボードにフラッシュしてください。  
コーディングが完了したら、緑色のボタンをクリックしてスクリプトを実行します。

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ピンの割り当て
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 接続に基づいてピン番号を調整してください
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

この記事を読んでいただきありがとうございます！ コメントでお気軽にご意見をお寄せください。

## リソース

* MicroPython を搭載した XIAO ESP32C3 用の [ファームウェアバイナリファイル](https://micropython.org/download/ESP32_GENERIC_C3/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！ 製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>