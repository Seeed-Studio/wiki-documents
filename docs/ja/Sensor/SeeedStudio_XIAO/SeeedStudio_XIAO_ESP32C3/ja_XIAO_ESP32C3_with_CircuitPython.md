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
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Seeed Studio XIAO ESP32C3 と CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

このウィキでは、Adafruit Industries による公式 CircuitPython を Seeed Studio XIAO ESP32C3 開発ボードにインストールして実行する方法を紹介します！  
CircuitPython は、低コストのマイクロコントローラーボード上での実験やプログラミング学習を簡単にするために設計されたプログラミング言語です。デスクトップソフトウェアの事前ダウンロードが不要で、これまで以上に簡単に始められます。ボードのセットアップが完了したら、任意のテキストエディタを開いてコードの編集を開始できます。詳細については、[こちら](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)をご参照ください。

## CircuitPython のインストール

### 方法 1: コマンドライン esptool

#### Esptool のインストール
まだ esptool.py をインストールしていない場合は、PC 上で pip を使用してインストールできます：

``` linux
pip install esptool
```

#### XIAO ESP32C3 CircuitPython ファームウェアのダウンロード
[circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/) からファームウェアのバイナリファイルをダウンロードする必要があります。  
正しい bin ファイルをダウンロードした後、そのフォルダに移動し、そこでコマンドプロンプトを開きます。  
最終版の時点での最新の bin ファイルは以下の通りです：

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
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

または、*ls* コマンドを使用してシリアルデバイスをリストできます：

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
ポートがビジー状態の場合、以下のコマンドを使用してポートを使用しているプロセスを特定し、終了させることができます（macOS 上）：
ポートを使用しているプロセスを特定：

```
lsof | grep port
```

このコマンドは開いているファイルをリストし、指定されたポートを使用しているプロセスを検索します。  
出力からプロセス ID（PID）を見つけてプロセスを終了します：

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

#### フラッシュの書き込み
XIAO ESP32C3 にファームウェアを書き込みます：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

再度、'/dev/cu.usbmodem11301' を正しいポート名に置き換え、'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' を空のファームウェアファイルのパスに置き換えてください。  
RTS ピンを介してハードリセット中...

### 方法 2: Web Serial esptool
WebSerial ESPTool は、シリアルベースの ROM ブートローダーを持つ Espressif ESP ファミリーのマイクロコントローラーボードをプログラムするためのウェブ対応オプションとして設計されました。これにより、マイクロコントローラーの内容を消去し、異なるオフセットで最大 4 つのファイルをプログラムできます。詳細は [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool) を参照してください。

その後、お好みのツールを使用して XIAO ESP32C3 にスクリプトをコンパイルできます！

## CircuitPython におすすめのエディタ

通常、CircuitPython のインストールが完了するか、すでに CircuitPython がインストールされた CircuitPython ボードをコンピュータに接続すると、ボードは CIRCUITPY という名前の USB ドライブとしてコンピュータに表示されます。
しかし、ネイティブ USB をサポートしていない ESP32 や ESP32-C3 マイクロコントローラーでは、CIRCUITPY ドライブを表示することができません。
これらのボードでは、ファイルを転送および編集するための代替方法があります。[Thonny](https://thonny.org/) を使用することで、REPL に送信される隠しコマンドを利用してファイルを読み書きできます。または、CircuitPython 8 で導入された [CircuitPython Web Workflow](https://code.circuitpython.org/) を使用することもできます。この Web Workflow は、ブラウザベースの WiFi アクセスを通じて CircuitPython のファイルシステムにアクセスする方法を提供します。[Web Workflow を使用したコードエディタの使い方](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview) を参照してください。

### 1. Thonny
Thonny をインストールして開き、以下の手順に従って設定してください：

```
pip install thonny
# インストール後に Thonny を開く
thonny
```

Run-->Configure Interpreter に移動し、Thonny のオプション内の Interpreter タブが以下のように表示されることを確認してください。"CircuitPython (generic)" を選択し、ポートを指定します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

ダイアログで "OK" をクリックすると、Thonny ウィンドウの下部に Micropython シェルが表示されます。以下の図のように表示されます。
これで、**R**ead-**E**valuate-**P**rint-**L**oop（REPL）を使用してシリアル接続を行うことができます。REPL を使用すると、コードの個々の行を入力してすぐにシェルで実行することができます。特定のプログラムで問題が発生して原因がわからない場合に非常に便利です。インタラクティブなので、新しいアイデアをテストするのにも適しています。[REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) を参照してください。

REPL を操作するには、*help()* を使用します。これにより、REPL の探索を開始する方法がわかります。REPL でコードを実行するには、REPL プロンプトの横にコードを入力します。
組み込みモジュールのリストを表示するには、*help("modules")* を入力します。これにより、CircuitPython に組み込まれているすべてのコアモジュール（"*board*" を含む）のリストが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

次に、REPL に *"import board"* を入力して Enter を押します。その後、REPL に *"dir(board)"* を入力すると、ボード上のすべてのピンのリストが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web Workflow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) は、最新バージョンの CircuitPython を実行している ESP32 ベースのデバイスでファイルを編集する際に、より充実した体験を提供します。
このエディタを使用すると、Web Bluetooth、USB、および WiFi を介した Web Workflow を使用してファイルを編集できます。

## ピン配置/ポート情報

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

* 詳細情報は[ハードウェア概要](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#hardware-overview)を参照してください。
* [Seeed Studio XIAO ESP32C3 回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## XIAO ESP32C3でCircuitPythonを始める

### ネットワーク-WLAN

ネイティブUSBを持たないボード（ESP32-C3やESP32など）の場合、Wi-Fiに接続するにはREPLを使用する必要があります。Wi-Fi機能は、CircuitPythonファイルシステムのルートフォルダに*settings.toml*という名前のファイルを追加することで有効になります。
REPLを使用して*settings.toml*ファイルを作成します：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

* *wifissid*をローカルWi-Fiネットワークの名前に置き換えてください。
* *password*をローカルWi-Fiのパスワードに置き換えてください。
* もう一つのパスワードは、ウェブブラウザ経由でボードにアクセスする際に使用されます。任意の値を設定してください（例：*webpassword*）。

接続後、**リセット**ボタンを押してファームウェアを起動し、数回リターンキーを押してREPLプロンプトに到達します。その後、デバイスをThonnyに再接続すると、XIAO ESP32C3のIPアドレスが表示されます。

:::note
忘れないでください。ESP32は5 GHzネットワークをサポートしていないため、2.4 GHzのSSIDを使用してください（もし2つのネットワークがある場合）。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 遅延とタイミング

*time*モジュール：

```python
import time
time.sleep(1)           # 1秒間スリープ
time.sleep_ms(500)      # 500ミリ秒スリープ
time.sleep_us(10)       # 10マイクロ秒スリープ
start = time.ticks_ms() # ミリ秒カウンターを取得
delta = time.ticks_diff(time.ticks_ms(), start) # 時間差を計算
```

### ピンとGPIO

"*board*"および"*microcontroller*"モジュールを使用してGPIOを制御できます。以下のコードを使用して、LEDをD5に接続します：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

```python
# boardモジュールを使用
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # LEDをオン
    time.sleep(1)
    led.value = False  # LEDをオフ
    time.sleep(1)
    
# microcontrollerモジュールを使用
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # LEDをオン
    time.sleep(1)
    led.value = False  # LEDをオフ
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART（シリアルバス）

*busio*モジュールを使用：

```python
import board
import busio

# UARTを初期化
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# データ送信
uart.write(b"Hello UART\n")

# データ受信
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)
```

XIAO ESP32C3には1つのハードウェアUARTがあります。以下のピンが使用可能です：

| UART | ピン |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM（パルス幅変調）

*pwmio*モジュールを使用：

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# PWMを初期化
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# LEDの明るさを調整
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)
```

### ADC（アナログからデジタル変換）

*analogio*モジュールを使用：

```python
import board
import analogio
import time

# ADCを初期化
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

# SPIを初期化
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# チップを選択
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# データ送受信
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

# I2Cを初期化
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### XIAO用拡張ボードベース

*必要条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> ヘッダー付き</th>
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

#### 光センサーのデータを読み取る

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# A0ピンでアナログ入力を初期化
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # 生のアナログ値を読み取る
    raw_value = analog_in.value
    # 生の値を電圧に変換する
    voltage = get_voltage(analog_in)
    
    # 生の値と電圧をシリアルコンソールに出力する
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # 再度読み取る前に短時間待機
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### OLEDスクリーンを点灯する

**ライブラリバンドルをダウンロードして解凍する**:
* [ライブラリ](https://circuitpython.org/libraries)にアクセスし、CircuitPython用のライブラリバンドルをダウンロードします。インストールするには、使用しているCircuitPythonのバージョンに適したバンドルをダウンロードしてください。

**ライブラリをCIRCUITPYにコピーする**:

* ライブラリバンドルのZIPファイルを解凍します。libという名前のフォルダがあり、その中にさまざまな*.mpy*ファイルが含まれています。
* Thonnyを開き、[View]-->[Files]を選択し、必要な.mpyファイルとlibフォルダをCircuitPythonデバイスのlibフォルダにコピーします。
以下のライブラリをバンドルから手動でインストールする必要があります：
  * adafruit_ssd1306
  * adafruit_bus_device
  * adafruit_register
  * adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**CircuitPythonコードを作成する**:

* code.py（またはmain.py）というファイルを作成します。このファイルにCircuitPythonコードを記述します。

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# I2Cを初期化
i2c = busio.I2C(board.SCL, board.SDA)

# ディスプレイのパラメータを定義
oled_width = 128
oled_height = 64

# OLEDディスプレイを初期化
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# ディスプレイを色0で塗りつぶす
oled.fill(0)
# 最初のピクセルを白に設定
oled.pixel(0, 0, 1)
oled.show()
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>


## CircuitPythonの「アンインストール」

多くのボードは複数のプログラミング言語で使用できます。例えば、Circuit Playground ExpressはMakeCode、Code.org CS Discoveries、CircuitPython、Arduinoで使用可能です。ArduinoやMakeCodeに戻りたい場合がありますが、アンインストールする必要はありません。CircuitPythonはボードにロードされた「単なるプログラム」です。そのため、別のプログラム（ArduinoやMakeCode）をロードするだけで、CircuitPythonが上書きされます。

### コードのバックアップ

CircuitPythonを置き換える前に、CIRCUITPYドライブにあるコードのバックアップを忘れないでください。つまり、*code.py*やその他のファイル、libフォルダなどです。CircuitPythonを削除するとこれらのファイルを失う可能性があるため、バックアップが重要です。USBドライブと同じように、ファイルをノートパソコンやデスクトップコンピュータのフォルダにドラッグしてください。

### Arduinoへの移行

Arduinoを使用したい場合は、Arduino IDEを使用してArduinoプログラムをロードします。以下はシンプルな「Blink」Arduinoプログラムをアップロードする例ですが、この特定のプログラムを使用する必要はありません。
まず、ボードを接続し、リセットボタンをダブルクリックしてオンボードLEDを点灯させます。

この記事を読んでいただきありがとうございます！コメントでご意見をお聞かせください。

## リソース

* CircuitPython 用 XIAO ESP32C3 の [ファームウェアバイナリファイル](https://circuitpython.org/board/seeed_xiao_esp32c3/)
* [CircuitPython 用ライブラリバンドル](https://circuitpython.org/libraries)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>