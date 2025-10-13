---
description: Seeed Studio XIAO ESP32C3 と CircuitPython
title: XIAO ESP32C3 と CircuitPython
keywords:
- xiao
- esp32c3
- circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /ja/xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C3 と CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

このwikiでは、Seeed Studio XIAO ESP32C3開発ボードにAdafruit Industries公式のCircuitPythonをインストールして実行する方法を紹介します！
CircuitPythonは、低コストのマイコンボードでの実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。事前のデスクトップダウンロードが不要で、これまで以上に簡単に始められます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については、[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPythonのインストール

### 方法1: コマンドラインesptool

#### Esptoolのインストール

まだesptool.pyをインストールしていない場合は、PCでpipを使用してインストールできます：

``` linux
pip install esptool
```

#### XIAO ESP32C3 CircuitPython ファームウェアのダウンロード

[circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/)からファームウェアバイナリファイルをダウンロードする必要があります。
正しいbinファイルをダウンロードした後、そのフォルダに移動し、そこでcmdターミナルを開きます。
最終稿の時点で、binファイルの最新バージョンは以下の通りです：

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### PC に XIAO ESP32C3 を接続する

XIAO ESP32C3 ボードの BOOT ボタンを押し続けながら、Type C USB ケーブルで PC に接続して「ブートローダー」モードに入る必要があります。

#### ポートを確認する

PC 上のすべてのシリアルデバイスを見つけます。

- Linux

Linux では、*dmesg* コマンドを使用して接続されたデバイスを表示できます：

```Linux
dmesg | grep tty
```

または、*ls*を使用してシリアルデバイスを一覧表示することもできます：

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

Windowsでは、デバイスマネージャーを通じてシリアルポートを確認できます。「ポート (COM と LPT)」セクションを探して、利用可能なシリアルポートを確認してください。また、コマンドプロンプトでmodeコマンドを使用してシリアルポートを一覧表示することもできます：

```
mode
```

- macOS

macOSでは、*ls*コマンドを使用して利用可能なシリアルポートを一覧表示できます：

```
ls /dev/cu*
```

これにより、すべてのシリアルポートデバイスが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
ポートがビジー状態の場合、以下のコマンドを使用してポートを使用しているプロセスを見つけて終了できます（macOS上で）：
ポートを使用しているプロセスを特定する：

```
lsof | grep port
```

このコマンドは開いているファイルを一覧表示し、指定されたポートを使用しているプロセスを検索します。
出力からプロセスID（PID）を見つけて、そのプロセスを終了させます：

```
kill -9 <PID>
```

*PID* を実際に見つかったプロセス ID に置き換えてください。
:::

#### フラッシュの消去

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

'/dev/cu.usbmodem11301' をシステムの正しいポート名に置き換えてください（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）。

#### フラッシュ書き込み

ファームウェアを XIAO ESP32C3 にフラッシュします：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

再度、'/dev/cu.usbmodem11301' を正しいポート名に、'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' をブランクファームウェアファイルのパスに置き換えてください。
RTSピンによるハードリセット中...

### 方法2: Web Serial esptool

WebSerial ESPToolは、シリアルベースのROMブートローダーを持つEspressif ESP系マイクロコントローラーボードをプログラミングするためのウェブ対応オプションとして設計されました。マイクロコントローラーの内容を消去し、異なるオフセットで最大4つのファイルをプログラムすることができます。[Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool)を参照してください。

その後、お好みのツールを使用してXIAO ESP32C3用のスクリプトのコンパイルを開始できます！

## CircuitPython推奨エディター

一般的に、CircuitPythonのインストールが完了するか、CircuitPythonが既にインストールされたCircuitPythonボードをコンピューターに接続すると、ボードはCIRCUITPYという名前のUSBドライブとしてコンピューター上に表示されます。
ただし、ネイティブUSBをサポートしないESP32またはESP32-C3マイクロコントローラーは、CIRCUITPYドライブを表示できません。
これらのボードでは、ファイルを転送・編集する代替方法があります。REPLに送信される隠しコマンドを使用してファイルの読み書きを行う[Thonny](https://thonny.org/)を使用できます。または、Circuitpython 8で導入された[CircuitPython web workflow](https://code.circuitpython.org/)を使用できます。web workflowはCircuitPythonファイルシステムへのブラウザベースのWiFiアクセスを提供します。[code editorを使用したweb workflowの開始方法](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)を参照してください。

### 1. Thonny

Thonnyをインストールして開き、以下の手順に従ってThonnyを設定してください：

```
pip install thonny
#open thonny after installation
thonny
```

Run-->Configure Interpreterに移動し、Thonnyオプションのインタープリタータブが以下のように表示されることを確認し、「CircuitPython (generic)」とポートを選択してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

ダイアログで「OK」をクリックすると、以下の図に示すようにthonnyウィンドウの下部にMicropythonシェルが表示されます。
その後、シリアル接続用の**R**ead-**E**valuate-**P**rint-**L**oop、またはREPLを使用できます。これにより、個々のコード行を入力してシェルで即座に実行できます。特定のプログラムでトラブルが発生し、その理由がわからない場合に非常に便利です。インタラクティブなので、新しいアイデアをテストするのに最適です。詳細については[REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl)を参照してください。

REPLの探索を開始する場所を教えてくれる*help()*でREPLと対話します。REPLでコードを実行するには、REPLプロンプトの横に入力します。
組み込みモジュールをリストするには*help("modules")*と入力すると、「*board*」を含むCircuitPythonに組み込まれたすべてのコアモジュールのリストが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

次に、REPLに*"import board"*と入力してEnterキーを押します。次に、REPLに*"dir(board)"*と入力すると、ボード上のすべてのピンのリストが取得されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web ワークフロー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[CircuitPythonコードエディタ](https://code.circuitpython.org/)は、最新バージョンのCircuitPythonを実行するESP32ベースのデバイス上でファイルを編集する際に、より充実した豊かな体験を提供します。
エディタでは、Web Bluetooth、USB、およびWiFi経由のWeb Workflowを使用してファイルを編集できます。

## ピンアウト/ポート情報

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

- 詳細については[ハードウェア概要](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#hardware-overview)を参照してください
- [Seeed Studio XIAO ESP32C3回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## XIAO ESP32C3でのCircuitPython入門

### Network-WLAN

ネイティブUSBを持たないボード（ESP32-C3やESP32など）の場合、Wi-Fiに接続するためにREPLを使用する必要があります。Wi-Fi機能は、*settings.toml*という名前のファイルがCircuitPythonファイルシステムのルートフォルダに追加されたときに有効になります。
REPL経由で*settings.toml*ファイルを作成：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- *wifissid* をローカルWiFiネットワークの名前に置き換えてください
- *password* をローカルWiFiパスワードに置き換えてください
- もう一つのパスワード *webpassword* は、Webブラウザ経由でボードにアクセスする際に使用されます。これは任意の値に設定してください

接続後、**Reset**ボタンを押してファームウェアを起動し、Enterキーを数回押してREPLプロンプトを表示できます。その後、デバイスをThonnyに再接続すると、XIAO ESP32C3のIPアドレスが表示されます。

:::note
ESP32は5GHzネットワークをサポートしていないことを忘れないでください。2つのネットワークがある場合は、2.4GHz SSIDを使用してください。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 遅延とタイミング

*time*モジュール：

```python
import time
time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### ピンとGPIO

モジュール "*board*" と "*microcontroller*" を使用して以下のコードでgpioを制御し、LEDをD5に接続できます：
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

*busio* モジュールを使用：

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

XIAO ESP32C3 には1つのハードウェアUARTがあります。以下にピンを示します：

| UART | Pin |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM(パルス幅変調)

*pwmio* モジュールを使用：

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

### ADC（アナログ・デジタル変換）

*analogio* モジュールを使用：

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

| SPI  | ピン |
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

### XIAO用拡張ボードベース

*前提条件*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> ヘッダーはんだ付け済み</th>
      <th>XIAO用拡張ボードベース</th>
      <th>Grove 光センサー</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 光センサーデータの読み取り

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

#### OLEDスクリーンを点灯させる

**ライブラリバンドルをダウンロードして展開する**:
- [ライブラリ](https://circuitpython.org/libraries)にアクセスし、CircuitPython用のライブラリバンドルをダウンロードします。インストールするには、お使いのCircuitPythonのバージョンに適したバンドルをダウンロードしてください。

**ライブラリをCIRCUITPYにコピーする**:

- ライブラリバンドルのZIPファイルを展開します。様々な*.mpy*ファイルが含まれたlibという名前のフォルダが見つかります。
- Thonny-->View-->Filesを開き、必要な.mpyファイルとlibフォルダをCircuitPythonデバイス/libにコピーします。
バンドルから必要なライブラリを手動でインストールする必要があります：
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**CircuitPythonコードを作成する**:

- code.pyファイル（またはmain.py）を作成します。このファイルにはCircuitPythonコードを記述します。

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

## CircuitPythonの「アンインストール」

私たちのボードの多くは複数のプログラミング言語で使用できます。例えば、Circuit Playground ExpressはMakeCode、Code.org CS Discoveries、CircuitPython、Arduinoで使用できます。ArduinoやMakeCodeに戻りたい場合があるかもしれません。アンインストールするものは何もありません。CircuitPythonはボードに読み込まれる「単なる別のプログラム」です。そのため、別のプログラム（ArduinoやMakeCode）を読み込むだけで、CircuitPythonが上書きされます。

### コードのバックアップ

CircuitPythonを置き換える前に、CIRCUITPYドライブにあるコードのバックアップを作成することを忘れないでください。つまり、*code.py*やその他のファイル、libフォルダなどです。CircuitPythonを削除する際にこれらのファイルを失う可能性があるため、バックアップが重要です！USBドライブと同じように、ファイルをラップトップやデスクトップコンピュータのフォルダにドラッグするだけです。

### Arduinoへの移行

代わりにArduinoを使用したい場合は、Arduino IDEを使用してArduinoプログラムを読み込むだけです。以下は簡単な「Blink」Arduinoプログラムをアップロードする例ですが、この特定のプログラムを使用する必要はありません。
まず、ボードを接続し、オンボードLEDが点灯するまでリセットをダブルクリックします。

この記事をお読みいただき、ありがとうございました！コメントでご意見をお聞かせください。

## リソース

- XIAO ESP32C3用CircuitPython[ファームウェアバイナリファイル](https://circuitpython.org/board/seeed_xiao_esp32c3/)
- [CircuitPython用ライブラリバンドル](https://circuitpython.org/libraries)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
