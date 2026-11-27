---
description: CircuitPython を搭載した Seeed Studio XIAO ESP32C3
title: CircuitPython を搭載した XIAO ESP32C3
keywords:
  - xiao
  - esp32c3
  - circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C3 と CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

この wiki では、Seeed Studio XIAO ESP32C3 開発ボード上で、Adafruit Industries の公式 CircuitPython をインストールして実行する方法を紹介します。
CircuitPython は、低コストのマイコンボード上での実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。事前にデスクトップ用ソフトをダウンロードする必要がなく、これまでになく簡単に使い始めることができます。ボードのセットアップが完了したら、任意のテキストエディタを開いてコードの編集を開始できます。詳しくは[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPython のインストール

### 方法 1: コマンドライン esptool

#### Esptool のインストール

まだ esptool.py をインストールしていない場合は、PC 上で pip を使ってインストールできます:

``` linux
pip install esptool
```

#### XIAO ESP32C3 用 CircuitPython ファームウェアのダウンロード

[circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/) からファームウェアのバイナリファイルをダウンロードする必要があります。
正しい bin ファイルをダウンロードしたら、そのフォルダに移動し、そこで cmd ターミナルを開きます。
最終稿時点での最新バージョンの bin ファイルは次のとおりです:

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### XIAO ESP32C3 を PC に接続

XIAO ESP32C3 ボードの BOOT ボタンを押し続けたまま、Type-C USB ケーブルで PC に接続して「bootloader」モードに入る必要があります。

#### ポートの確認

PC 上のすべてのシリアルデバイスを確認します。

- Linux

Linux では、*dmesg* コマンドを使用して接続されているデバイスを確認できます:

```Linux
dmesg | grep tty
```

または、*ls* を使用してシリアルデバイスを一覧表示できます:

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Window

Windows では、デバイスマネージャーからシリアルポートを確認できます。「ポート (COM と LPT)」セクションを探して、利用可能なシリアルポートを確認してください。また、コマンドプロンプトで mode コマンドを使用してシリアルポートを一覧表示することもできます:

```
mode
```

- macOS

macOS では、*ls* コマンドを使用して利用可能なシリアルポートを一覧表示できます:

```
ls /dev/cu*
```

これにより、すべてのシリアルポートデバイスが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
ポートがビジーな場合は、次のコマンドを使用して、そのポートを使用しているプロセスを特定して終了できます（macOS の場合）:
ポートを使用しているプロセスを特定します:

```
lsof | grep port
```

このコマンドは開いているファイルを一覧表示し、指定したポートを使用しているプロセスを検索します。
出力からプロセス ID（PID）を見つけ、そのプロセスを終了します:

```
kill -9 <PID>
```

*PID* を実際に見つかったプロセス ID に置き換えてください。
:::

#### フラッシュの消去

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

'/dev/cu.usbmodem11301' を、お使いのシステムでの正しいポート名（例: Windows では `COM3`、Linux では `/dev/ttyUSB0`）に置き換えてください。

#### フラッシュへの書き込み

ファームウェアを XIAO ESP32C3 に書き込みます:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

同様に、'/dev/cu.usbmodem11301' を正しいポート名に、'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' をブランクファームウェアファイルへのパスに置き換えてください。
RTS ピン経由でハードリセット中...

### 方法 2: Web Serial esptool

WebSerial ESPTool は、シリアルベースの ROM ブートローダーを持つ Espressif ESP ファミリのマイコンボードをプログラムするための、Web 対応オプションとして設計されました。これを使用すると、マイコンの内容を消去し、最大 4 つのファイルを異なるオフセットに書き込むことができます。詳しくは [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool) を参照してください。

その後は、好みのツールを使ってスクリプトをコンパイルし、XIAO ESP32C3 で実行できます。

## CircuitPython に推奨されるエディタ

一般的に、CircuitPython のインストールが完了するか、すでに CircuitPython がインストールされている CircuitPython ボードをコンピュータに接続すると、そのボードは CIRCUITPY という名前の USB ドライブとしてコンピュータに表示されます。
しかし、ネイティブ USB をサポートしていない ESP32 や ESP32-C3 マイコンは、CIRCUITPY ドライブを提示することができません。
これらのボードでは、ファイルを転送および編集するための代替手段があります。[Thonny](https://thonny.org/) を使用することができ、これは REPL に送信される隠しコマンドを使ってファイルの読み書きを行います。また、Circuitpython 8 で導入された [CircuitPython web workflow](https://code.circuitpython.org/) を使用することもできます。web workflow は、ブラウザベースの WiFi アクセスを通じて CircuitPython のファイルシステムにアクセスできるようにします。詳しくは [getting started with web workflow using the code editor](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.) を参照してください。

### 1. Thonny

Thonny をインストールして開き、次に以下の手順に従って Thonny を設定します:

```
pip install thonny
#open thonny after installation
thonny
```

Run-->Configure Interpreter に移動し、Thonny オプションの Interpreter タブが下図のようになっていることを確認し、「CircuitPython (generic)」とポートを選択します:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

ダイアログで "OK" をクリックすると、下図のように Thonny ウィンドウ下部に Micropython シェルが表示されるはずです。
その後、シリアル接続用の **R**ead-**E**valuate-**P**rint-**L**oop、つまり REPL を使用できます。これにより、コードを 1 行ずつ入力して、シェル内ですぐに実行させることができます。特定のプログラムで問題が発生し、その原因がわからない場合に非常に便利です。対話的に動作するため、新しいアイデアを試すのにも最適です。詳しくは [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) を参照してください。

*help()* を使って REPL と対話します。これは REPL のどこから探索を始めればよいかを教えてくれます。REPL でコードを実行するには、REPL プロンプトの後にコードを入力します。
組み込みモジュールを一覧表示するには *help("modules")* と入力します。すると、"*board*" を含む、CircuitPython に組み込まれているすべてのコアモジュールのリストが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

次に、REPL に *"import board"* と入力して Enter キーを押します。続いて、REPL に *"dir(board)"* と入力すると、ボード上のすべてのピンのリストが取得できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web Workflow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) は、最新バージョンの CircuitPython を実行している ESP32 ベースのデバイス上のファイルを編集する際に、より充実した体験を提供します。
このエディタでは、Web Bluetooth、USB、および WiFi 経由の Web Workflow を使用してファイルを編集できます。

## ピン配置 / ポート情報

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

- さらに詳しい情報は [hardware overview](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#ハードウェア概要) を参照してください
- [Seeed Studio XIAO ESP32C3 回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## XIAO ESP32C3 で CircuitPython を始める

### Network-WLAN

ネイティブ USB を持たないボード（ESP32-C3 や ESP32 など）の場合、Wi-Fi に接続するには REPL を使用する必要があります。Wi-Fi 機能は、CircuitPython ファイルシステムのルートフォルダに *settings.toml* という名前のファイルを追加すると有効になります。
REPL を介して *settings.toml* ファイルを作成します:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- *wifissid* をローカル Wi-Fi ネットワークの名前に置き換えます
- *password* をローカル Wi-Fi のパスワードに置き換えます
- もう一つのパスワード *webpassword* は、Web ブラウザ経由でボードにアクセスする際に使用されます。任意の値を設定してください

接続が完了したら、**Reset** ボタンを押してファームウェアを再起動し、REPL プロンプトが表示されるまで数回 Enter キーを押します。その後、デバイスを Thonny に再接続すると、XIAO ESP32C3 の IP アドレスが表示されます。

:::note
ESP32 は 5 GHz ネットワークをサポートしていないため、2.4 GHz と 5 GHz の両方の SSID がある場合は、2.4 GHz の SSID を使用することを忘れないでください。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 遅延とタイミング

*time* モジュール:

```python
import time
time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### ピンと GPIO

次のコードのように "*board*" と "*microcontroller*" モジュールを使用して GPIO を制御し、D5 に LED を接続できます:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

```python
# using board module
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)

# using microcontroller module
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART（シリアルバス）

*busio* モジュールを使用します：

```python
import board
import busio

# initialise UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

XIAO ESP32C3 には 1 つのハードウェア UART があります。対応するピンは次のとおりです：

| UART | Pin |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM（パルス幅変調）

*pwmio* モジュールを使用します：

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# initialise PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# a dimming led
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)

```

### ADC（アナログ‐デジタル変換）

*analogio* モジュールを使用します：

```python
import board
import analogio
import time

# initialise ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```

### SPI

```python
import board
import busio
import digitalio

# initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# choose a chip
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

| SPI  | Pin |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### XIAO 用拡張ボードベース

*前提条件*：

<table align="center">
  <tbody><tr>
      <th>ヘッダーピンをはんだ付けした XIAO ESP32C3<br /></th>
      <th>XIAO 用拡張ボードベース</th>
      <th>Grove Light sensor</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 照度センサーのデータを読み取る

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# Initialize the analog input on A0
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # Read the raw analog value
    raw_value = analog_in.value
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)

    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))

    # Delay for a short period of time before reading again
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### OLED 画面を点灯させる

**ライブラリバンドルをダウンロードして展開する**：

- [library](https://circuitpython.org/libraries) にアクセスし、CircuitPython 用のライブラリバンドルをダウンロードします。インストールするには、自分が使用しているバージョンの CircuitPython に対応したバンドルをダウンロードしてください。

**ライブラリを CIRCUITPY にコピーする**：

- ライブラリバンドルの ZIP ファイルを展開します。さまざまな *.mpy* ファイルを含む lib フォルダが見つかります。
- Thonny を開き、View-->Files を選択してから、必要な .mpy ファイルと lib フォルダを CircuitPython デバイスの lib フォルダにコピーします。
バンドルから必要なライブラリを手動でインストールする必要があります：
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**自分の CircuitPython コードを作成する**：

- code.py ファイル（または main.py）を作成します。このファイルに CircuitPython のコードを記述します。

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA)

# Define the display parameters
oled_width = 128
oled_height = 64

# Initialize the OLED display
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# Fill the display with the color 0
oled.fill(0)
# Set the first pixel white
oled.pixel(0, 0, 1)
oled.show()
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>

## CircuitPython の「アンインストール」

多くのボードは複数のプログラミング言語で使用できます。たとえば Circuit Playground Express は、MakeCode、Code.org CS Discoveries、CircuitPython、Arduino で使用できます。Arduino や MakeCode に戻したくなるかもしれません。アンインストールするものは何もありません。CircuitPython はボードに書き込まれる「単なる別のプログラム」にすぎません。そのため、別のプログラム（Arduino や MakeCode）を書き込めば、CircuitPython は上書きされます。

### コードをバックアップする

CircuitPython を置き換える前に、CIRCUITPY ドライブ上にあるコードのバックアップを忘れずに作成してください。つまり、*code.py* やその他のファイル、lib フォルダなどです。CircuitPython を削除するときにこれらのファイルを失う可能性があるため、バックアップが重要です。通常の USB ドライブと同じように、ファイルをノート PC やデスクトップ PC 上の任意のフォルダにドラッグするだけです。

### Arduino へ移行する

代わりに Arduino を使用したい場合は、Arduino IDE を使って Arduino プログラムを書き込みます。ここでは簡単な「Blink」Arduino プログラムを書き込む例を示しますが、必ずしもこのプログラムを使う必要はありません。
まずボードを接続し、リセットボタンをダブルクリックして、オンボード LED が点灯するまで繰り返します。

この記事をお読みいただきありがとうございます。コメント欄でぜひご意見をお寄せください。

## リソース

- CircuitPython を搭載した XIAO ESP32C3 用 [ファームウェアバイナリファイル](https://circuitpython.org/board/seeed_xiao_esp32c3/)
- [CircuitPython 用ライブラリバンドル](https://circuitpython.org/libraries)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
