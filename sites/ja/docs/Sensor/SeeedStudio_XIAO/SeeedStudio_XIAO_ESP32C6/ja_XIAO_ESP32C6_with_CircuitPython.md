---
description: Seeed Studio XIAO ESP32C6 と CircuitPython
title: XIAO ESP32C6 と CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /ja/xiao_esp32c6_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C6 と CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png" /></div>

このwikiでは、Seeed Studio XIAO ESP32C6開発ボードにAdafruit Industries公式のCircuitPythonをインストールして実行する方法を紹介します！
CircuitPythonは、低コストのマイコンボードでのプログラミング実験と学習を簡素化するために設計されたプログラミング言語です。事前のデスクトップダウンロードが不要で、これまで以上に簡単に始められます。ボードをセットアップしたら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については、[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)を参照してください。

## CircuitPythonのインストール

### 方法1: コマンドラインesptool

#### Esptoolのインストール

まだesptool.pyをインストールしていない場合は、PCでpipを使用してインストールできます：

``` linux
pip install esptool
```

#### ESP32C6 CircuitPython ファームウェアをダウンロードする

[circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c6/)からファームウェアバイナリファイルをダウンロードする必要があります。
正しいbinファイルをダウンロードした後、そのフォルダに移動し、そこでcmdターミナルを開きます。
最終稿の時点で、binファイルの最新バージョンは以下の通りです：

```
adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

#### XIAO ESP32C6 をPCに接続する

XIAO ESP32C6 ボードのBOOTボタンを押し続けながら、Type C USBケーブルでPCに接続して「ブートローダー」モードに入る必要があります。

#### ポートを確認する

PC上のすべてのシリアルデバイスを見つけます。

- Linux

Linuxでは、*dmesg* コマンドを使用して接続されたデバイスを確認できます：

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
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 erase_flash
```

'/dev/cu.usbmodem11301' をシステムの正しいポート名に置き換えてください（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）。

#### フラッシュ書き込み

XIAO ESP32C6 にファームウェアをフラッシュします：

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

再度、'/dev/cu.usbmodem11301' を正しいポート名に、'adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin' をブランクファームウェアファイルのパスに置き換えてください。
RTSピンによるハードリセット中...

### 方法2: Web Serial esptool

WebSerial ESPToolは、シリアルベースのROMブートローダーを持つEspressif ESP系マイクロコントローラーボードをプログラミングするためのウェブ対応オプションとして設計されました。マイクロコントローラーの内容を消去し、異なるオフセットで最大4つのファイルをプログラムすることができます。詳細は[Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool)を参照してください。

その後、お好みのツールを使用してスクリプトのコンパイルをESP32C6で開始できます！

## CircuitPythonの推奨エディター

一般的に、CircuitPythonのインストールが完了するか、CircuitPythonが既にインストールされたCircuitPythonボードをコンピューターに接続すると、ボードはCIRCUITPYと呼ばれるUSBドライブとしてコンピューター上に表示されます。
ただし、ネイティブUSBをサポートしないESP32 / ESP32-C3 / ESP32-C6マイクロコントローラーは、CIRCUITPYドライブを表示できません。
これらのボードでは、ファイルを転送・編集する代替方法があります。REPLに送信される隠しコマンドを使用してファイルの読み書きを行う[Thonny](https://thonny.org/)を使用できます。または、Circuitpython 8で導入された[CircuitPython web workflow](https://code.circuitpython.org/)を使用できます。web workflowはCircuitPythonファイルシステムへのブラウザベースのWiFiアクセスを提供します。詳細は[code editorを使用したweb workflowの開始方法](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview)を参照してください。

### 1. Thonny

Thonnyをインストールして開き、以下の手順に従ってThonnyを設定してください：

```
pip install thonny
#open thonny after installation
thonny
```

Run-->Configure Interpreterに移動し、Thonnyオプションのインタープリタータブが以下に示すように表示されることを確認し、"CircuitPython (generic)"とポートを選択してください：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

ダイアログで"OK"をクリックすると、以下の図に示すようにthonnyウィンドウの下部にMicropythonシェルが表示されます。
その後、シリアル接続用の**R**ead-**E**valuate-**P**rint-**L**oop、またはREPLを使用できます。これにより、個々のコード行を入力してシェルで即座に実行できます。特定のプログラムでトラブルが発生し、その理由がわからない場合に非常に便利です。インタラクティブなので、新しいアイデアをテストするのに最適です。詳細については[REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl)を参照してください。

*help()*を使用してREPLと対話すると、REPLの探索を開始する場所がわかります。REPLでコードを実行するには、REPLプロンプトの横に入力します。
組み込みモジュールをリストするには*help("modules")*と入力すると、"*board*"を含むCircuitPythonに組み込まれたすべてのコアモジュールのリストが表示されます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/3.png" /></div>

次に、REPLに"*import board*"と入力してEnterキーを押します。次に、REPLに"*dir(board)*"と入力すると、ボード上のすべてのピンのリストが取得できます。

```
#check pin using following command.For details on REPL, see Welcome to CircuitPython! 
#enter to the shell of Thonny.
>>> import board
>>> dir(board)
['__class__', '__name__', 'A0', 'A1', 'A2', 'A4', 'A5', 'A6', 'D0', 'D1', 'D10', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'I2C', 'LP_I2C_SCL', 'LP_I2C_SDA', 'LP_UART_RXD', 'LP_UART_TXD', 'MISO', 'MOSI', 'MTCK', 'MTDI', 'MTDO', 'MTMS', 'RX', 'SCK', 'SCL', 'SDA', 'SPI', 'TX', 'UART', '__dict__', 'board_id']
```

### 2. CircuitPython Web ワークフロー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>
[CircuitPython コードエディタ](https://code.circuitpython.org/)は、CircuitPython の最新バージョンを実行している ESP32 ベースのデバイス上でファイルを編集する際に、より充実した豊かな体験を提供します。
このエディタでは、Web Bluetooth、USB、および WiFi 経由の Web Workflow を使用してファイルを編集できます。

## ピン配置/ポート情報

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/5.png" /></div>

- 詳細については[ハードウェア概要](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#hardware-overview)を参照してください
- [Seeed Studio XIAO ESP32C6 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

## XIAO ESP32C6 での CircuitPython 入門

### ネットワーク-WLAN

ネイティブ USB を持たないボード（ESP32-C6 や ESP32 など）では、Wi-Fi に接続するために REPL を使用する必要があります。Wi-Fi 機能は、*settings.toml* という名前のファイルが CircuitPython ファイルシステムのルートフォルダに追加されたときに有効になります。

#### 方法 1: REPL 経由で *setting.toml* ファイルを作成

REPL 経由で *settings.toml* ファイルを作成：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- ローカルWiFiネットワークの名前で *wifissid* を置き換える

- ローカルWiFiパスワードで *password* を置き換える
- もう一つのパスワード *webpassword* は、Webブラウザ経由でボードにアクセスする際に使用されます。これは任意の値に設定してください

接続後、**Reset**ボタンを押してファームウェアを起動し、Enterキーを数回押してREPLプロンプトを表示できます。その後、デバイスをThonnyに再接続すると、XIAO ESP32C6のIPアドレスが表示されます。

#### 方法2：Thonny Filesで*setting.toml*ファイルを編集

Thonny-->View-->Filesを開き、setting.tomlファイルにWiFiネットワーク、パスワード、webpasswordを記述します。保存してResetボタンを押してファームウェアを起動し、Thonnyを再度開いてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/6.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/7.png" /></div>
:::note
忘れないでください。ESP32は5GHzネットワークをサポートしていないため、2つのネットワークがある場合は2.4GHz SSIDを使用してください。
:::
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/8.png" /></div>

### 遅延とタイミング

*time*モジュール：

```python
import time
dir(time)
time.sleep(1)           # sleep for 1 second
time.localtime()        # get local time
```

### ピンとGPIO

モジュール "*board*" と "*microcontroller*" を使用して以下のコードでgpioを制御し、LEDをD5に接続できます：
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

*busio* モジュールを使用：

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

XIAO ESP32C6 には1つのハードウェアUARTがあります。以下にピンを示します：

| UART       | Pin   | GPIO  |
|------------|-------|-------|
| LP_UART_TXD | A5    | GPIO5 |
| LP_UART_RXD | A4    | GPIO4 |

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

XIAO ESP32C6 には1つのハードウェア SPI があります。以下にピンを示します：

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

### XIAO用拡張ボードベース

*前提条件*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C6<br /> ヘッダーはんだ付け済み</th>
      <th>XIAO用拡張ボードベース</th>
      <th>Grove 光センサー</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/11.png" /></div>

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
  
**font5x8.binをCIRCUITPYにコピーする**:

- font5x8.binファイルを[こちら](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)からダウンロードします。
- Thonny-->View-->Filesを開き、font5x8.binファイルをCircuitPythonデバイスにコピーします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/12.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/13.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/14.png" /></div>

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

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/15.png" /></div>

## CircuitPythonの「アンインストール」

私たちのボードの多くは、複数のプログラミング言語で使用できます。例えば、Circuit Playground ExpressはMakeCode、Code.org CS Discoveries、CircuitPython、Arduinoで使用できます。ArduinoやMakeCodeに戻りたい場合があるかもしれません。アンインストールするものは何もありません。CircuitPythonは、ボードにロードされる「単なる別のプログラム」です。そのため、別のプログラム（ArduinoやMakeCode）をロードするだけで、CircuitPythonが上書きされます。

### コードのバックアップ

CircuitPythonを置き換える前に、CIRCUITPYドライブにあるコードのバックアップを作成することを忘れないでください。つまり、*code.py*やその他のファイル、libフォルダなどです。CircuitPythonを削除する際にこれらのファイルを失う可能性があるため、バックアップが重要です！USBドライブと同じように、ファイルをラップトップやデスクトップコンピュータのフォルダにドラッグするだけです。

### Arduinoへの移行

代わりにArduinoを使用したい場合は、Arduino IDEを使用してArduinoプログラムをロードするだけです。以下は、シンプルな「Blink」Arduinoプログラムをアップロードする例ですが、この特定のプログラムを使用する必要はありません。
まず、ボードを接続し、オンボードLEDが点灯するまでリセットをダブルクリックします。

この記事をお読みいただき、ありがとうございました！コメントでご意見をお聞かせください。

## リソース

- XIAO ESP32C6用のCircuitPython[ファームウェアバイナリファイル](https://circuitpython.org/board/seeed_xiao_esp32c6/)

- [CircuitPython用ライブラリバンドル](https://circuitpython.org/libraries)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
