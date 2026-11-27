---
description: Seeed Studio XIAO ESP32C6 と CircuitPython
title: XIAO ESP32C6 と CircuitPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /xiao_esp32c6_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C6 と CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png" /></div>

この Wiki では、Seeed Studio XIAO ESP32C6 開発ボード上で、Adafruit Industries 公式の CircuitPython をインストールして実行する方法を紹介します。
CircuitPython は、低コストのマイコンボード上での実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。デスクトップ用ソフトを事前にダウンロードする必要がなく、これまでになく簡単に使い始めることができます。ボードのセットアップが完了したら、任意のテキストエディタを開いてコードの編集を始めるだけです。詳細については[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPython のインストール

### 方法 1: コマンドライン esptool

#### Esptool のインストール

まだ esptool.py をインストールしていない場合は、PC 上で pip を使ってインストールできます:

``` linux
pip install esptool
```

#### ESP32C6 用 CircuitPython ファームウェアのダウンロード

[circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c6/) からファームウェアのバイナリファイルをダウンロードする必要があります。
正しい bin ファイルをダウンロードしたら、そのフォルダに移動し、そこで cmd ターミナルを開きます。
最終稿時点での最新バージョンの bin ファイルは次のとおりです:

```
adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

#### XIAO ESP32C6 を PC に接続

XIAO ESP32C6 ボードの BOOT ボタンを押し続けたまま、Type-C USB ケーブルで PC に接続して「ブートローダ」モードに入る必要があります。

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

- Windows

Windows では、デバイスマネージャーからシリアルポートを確認できます。「ポート (COM と LPT)」セクションに利用可能なシリアルポートが表示されます。また、コマンドプロンプトで mode コマンドを使用してシリアルポートを一覧表示することもできます:

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
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 erase_flash
```

'/dev/cu.usbmodem11301' を、お使いのシステムでの正しいポート名（例: Windows では `COM3`、Linux では `/dev/ttyUSB0`）に置き換えてください。

#### フラッシュへの書き込み

XIAO ESP32C6 にファームウェアを書き込みます:

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

同様に、'/dev/cu.usbmodem11301' を正しいポート名に、'adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin' を使用するファームウェアファイルへのパスに置き換えてください。
RTS ピン経由でハードリセット中...

### 方法 2: Web Serial esptool

WebSerial ESPTool は、シリアルベースの ROM ブートローダを持つ Espressif ESP ファミリのマイコンボードをプログラムするための Web 対応オプションとして設計されました。これにより、マイコンの内容を消去し、最大 4 つのファイルを異なるオフセットに書き込むことができます。詳しくは [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool) を参照してください。

その後は、お好みのツールを使って ESP32C6 向けにスクリプトをコンパイルし始めることができます。

## CircuitPython におすすめのエディタ

一般的に、CircuitPython のインストールが完了するか、すでに CircuitPython がインストールされている CircuitPython ボードをコンピュータに接続すると、そのボードは CIRCUITPY という名前の USB ドライブとしてコンピュータに表示されます。
しかし、ネイティブ USB をサポートしない ESP32 / ESP32-C3 / ESP32-C6 マイコンは、CIRCUITPY ドライブとして認識されません。
これらのボードでは、ファイルを転送および編集するための代替手段があります。[Thonny](https://thonny.org/) を使用することができ、これは REPL に送信される隠しコマンドを使ってファイルの読み書きを行います。また、Circuitpython 8 で導入された [CircuitPython web workflow](https://code.circuitpython.org/) を使用することもできます。Web workflow は、ブラウザベースの WiFi アクセスを通じて CircuitPython のファイルシステムにアクセスできる機能で、詳細は [getting started with web workflow using the code editor](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.) を参照してください。

### 1. Thonny

Thonny をインストールして開き、次に以下の手順に従って Thonny を設定します:

```
pip install thonny
#open thonny after installation
thonny
```

Run-->Configure Interpreter に進み、Thonny のオプション内の Interpreter タブが下図のようになっていることを確認し、「CircuitPython (generic)」とポートを選択します:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

ダイアログで "OK" をクリックすると、下図のように Thonny ウィンドウ下部に Micropython シェルが表示されるはずです。
その後、シリアル接続用の **R**ead-**E**valuate-**P**rint-**L**oop、つまり REPL を使用できます。これにより、コードを 1 行ずつ入力して、シェル内ですぐに実行させることができます。特定のプログラムで問題が発生し、その原因がわからない場合に非常に便利です。対話的に動作するため、新しいアイデアを試すのにも最適です。詳細は [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) を参照してください。

*help()* を使って REPL と対話すると、REPL をどこから探索し始めればよいかを教えてくれます。REPL でコードを実行するには、REPL プロンプトの後にコードを入力します。
組み込みモジュールを一覧表示するには *help("modules")* と入力すると、"*board*" を含む、CircuitPython に組み込まれているすべてのコアモジュールのリストが表示されます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/3.png" /></div>

次に、REPL に "*import board*" と入力して Enter キーを押します。続いて "*dir(board)*" と入力すると、ボード上のすべてのピンのリストが取得できます。

```
#check pin using following command.For details on REPL, see Welcome to CircuitPython! 
#enter to the shell of Thonny.
>>> import board
>>> dir(board)
['__class__', '__name__', 'A0', 'A1', 'A2', 'A4', 'A5', 'A6', 'D0', 'D1', 'D10', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'I2C', 'LP_I2C_SCL', 'LP_I2C_SDA', 'LP_UART_RXD', 'LP_UART_TXD', 'MISO', 'MOSI', 'MTCK', 'MTDI', 'MTDO', 'MTMS', 'RX', 'SCK', 'SCL', 'SDA', 'SPI', 'TX', 'UART', '__dict__', 'board_id']
```

### 2. CircuitPython Web Workflow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>
[The CircuitPython Code Editor](https://code.circuitpython.org/) は、最新バージョンの CircuitPython を実行している ESP32 ベースのデバイス上のファイルを編集する際に、より充実した体験を提供します。
このエディタでは、Web Bluetooth、USB、および WiFi 経由の Web Workflow を使用してファイルを編集できます。

## ピン配置 / ポート情報

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c6" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/5.png" /></div>

- 詳細については [hardware overview](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#ハードウェア概要) を参照してください
- [Seeed Studio XIAO ESP32C6 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

## XIAO ESP32C6 で CircuitPython を始める

### ネットワーク - WLAN

ネイティブ USB を持たないボード（ESP32-C6 や ESP32 など）の場合、Wi-Fi に接続するには REPL を使用する必要があります。Wi-Fi 機能は、*settings.toml* という名前のファイルが CircuitPython ファイルシステムのルートフォルダに追加されたときに有効になります。

#### 方法 1: REPL 経由で *setting.toml* ファイルを作成

REPL を使って *settings.toml* ファイルを作成します:

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

接続が完了したら、**Reset** ボタンを押してファームウェアを再起動し、数回リターンキーを押して REPL プロンプトを表示させます。その後、デバイスを Thonny に再接続すると、XIAO ESP32C6 の IP アドレスが表示されます。

#### 方法 2: Thonny Files から *setting.toml* ファイルを編集

Thonny-->View-->Files を開き、setting.toml ファイルに Wi-Fi ネットワーク名、パスワード、および webpassword を記述します。保存することと、Reset ボタンを押してファームウェアを再起動し、Thonny を再度開くことを忘れないでください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/6.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/7.png" /></div>
:::note
忘れないでください。ESP32 は 5 GHz ネットワークをサポートしていないため、2.4 GHz と 5 GHz の両方がある場合は 2.4 GHz の SSID を使用してください。
:::
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/8.png" /></div>

### 遅延とタイミング

*time* モジュール:

```python
import time
dir(time)
time.sleep(1)           # sleep for 1 second
time.localtime()        # get local time
```

### ピンと GPIO

次のコードのように "*board*" と "*microcontroller*" モジュールを使用して GPIO を制御し、D5 に LED を接続できます:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/16.png" /></div>

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

led = digitalio.DigitalInOut(microcontroller.pin.GPIO23)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/9.png" /></div>

### UART（シリアルバス）

*busio* モジュールを使用します：

```python
import board
import busio

# initialise UART
uart = busio.UART(board.LP_UART_TXD, board.LP_UART_RXD, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

XIAO ESP32C6 には 1 つのハードウェア UART があります。ピンは以下のとおりです：

| UART       | Pin   | GPIO  |
|------------|-------|-------|
| LP_UART_TXD | A5    | GPIO5 |
| LP_UART_RXD | A4    | GPIO4 |

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

# Initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
# Call try_lock (and later unlock) to ensure you are the only user of the SPI bus
spi.try_lock()

# Choose a chip select pin
cs = digitalio.DigitalInOut(board.D3)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True

# Make sure chip select is active (low) before communicating
cs.value = False

# Send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)

try:
    # Write and read data
    spi.write_readinto(data_out, data_in)
    print("Received:", data_in)
finally:
    # Ensure chip select is inactive (high) after communication
    cs.value = True
```

XIAO ESP32C6 には 1 つのハードウェア SPI があります。ピンは以下のとおりです：

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
      <th>ヘッダーピンをはんだ付けした XIAO ESP32C6<br /></th>
      <th>XIAO 用拡張ボードベース</th>
      <th>Grove Light sensor</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/11.png" /></div>

#### OLED 画面を点灯する

**ライブラリバンドルをダウンロードして展開する**：

- [library](https://circuitpython.org/libraries) にアクセスし、CircuitPython 用のライブラリバンドルをダウンロードします。インストールするには、使用している CircuitPython のバージョンに対応したバンドルをダウンロードしてください。

**ライブラリを CIRCUITPY にコピーする**：

- ライブラリバンドルの ZIP ファイルを展開します。さまざまな *.mpy* ファイルを含む lib フォルダが見つかります。
- Thonny-->View-->Files を開き、必要な .mpy ファイルと lib フォルダを CircuitPython デバイスの lib フォルダにコピーします。
バンドルから必要なライブラリを手動でインストールする必要があります：
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

**fond5x8.bin を CIRCUITPY にコピーする**：

- [こちら](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)から font5x8.bin ファイルをダウンロードします。
- Thonny-->View-->Files を開き、font5x8.bin ファイルを CircuitPython デバイスにコピーします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/12.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/13.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/14.png" /></div>

**CircuitPython コードを作成する**：

- code.py（または main.py）ファイルを作成します。このファイルに CircuitPython のコードを記述します。

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

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/15.png" /></div>

## CircuitPython の「アンインストール」

多くのボードは複数のプログラミング言語で使用できます。たとえば Circuit Playground Express は、MakeCode、Code.org CS Discoveries、CircuitPython、Arduino で使用できます。Arduino や MakeCode に戻したくなるかもしれません。アンインストールするものは何もありません。CircuitPython は、ボードに書き込まれる「単なる別のプログラム」にすぎません。そのため、別のプログラム（Arduino や MakeCode）を書き込めば、CircuitPython は上書きされます。

### コードをバックアップする

CircuitPython を置き換える前に、CIRCUITPY ドライブ上にあるコードのバックアップを忘れずに作成してください。つまり、*code.py* やその他のファイル、lib フォルダなどです。CircuitPython を削除するときにこれらのファイルを失う可能性があるため、バックアップが重要です。USB ドライブと同じように、ファイルをノート PC やデスクトップ PC 上のフォルダにドラッグするだけです。

### Arduino へ移行する

代わりに Arduino を使用したい場合は、Arduino IDE を使って Arduino プログラムを書き込みます。ここでは簡単な「Blink」Arduino プログラムを書き込む例を示しますが、このプログラムを必ずしも使う必要はありません。
まずボードを接続し、オンボード LED が点灯するまで reset をダブルクリックします。

この記事をお読みいただきありがとうございます。コメント欄でぜひご意見をお聞かせください。

## リソース

- CircuitPython を搭載した XIAO ESP32C6 用の[ファームウェアバイナリファイル](https://circuitpython.org/board/seeed_xiao_esp32c6/)

- [CircuitPython 用ライブラリバンドル](https://circuitpython.org/libraries)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
