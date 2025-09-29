---
description: ArduPy の説明
title:  ArduPy と Wio Terminal
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ArduPy
last_update:
  date: 05/15/2025
  author: cessarr
---


# ArduPy 入門

ArduPy を始めるには、まず **`aip` - ArduPy Integrated Platform** をインストールする必要があります。`aip` は ArduPy を開発し、ArduPy ボードとやり取りするためのユーティリティです。これにより、ユーザーは ArduPy を迅速に始めることができます。`aip` はシンプルなコマンドラインツールとして設計されており、ArduPy の詳細を知らなくても、自分専用の ArduPy ファームウェアをカスタマイズできます。

## 対応ボード

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## ArduPy のクイックスタート

以下の方法を使用して、最も簡単な方法で ArduPy ソフトウェアを体験できます。手順に従って、今すぐ始めましょう！

- **ステップ.1 ブートローダーモードに入る**

デバイスを USB 接続で PC に接続します。デバイスを素早くリセットしてブートローダーモードに入ります。

  1. **Wio Terminal** の場合は、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq)を参照してください。
  2. **Seeeduino XIAO** の場合は、[こちら](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#reset)を参照してください。

PC に **`Arduino`** という名前の USB ドライブが表示されるはずです。Arduino USB ドライブの場所に移動してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

- **ステップ.2 ArduPy UF2 ファームウェアをダウンロード**

UF2 ファイル形式の ArduPy ファームウェアをダウンロードします。

  1. [Wio Terminal 用](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
  2. [Seeeduino XIAO 用](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

ダウンロードしたファイルをドライブに保存します。

- **ステップ.3 ArduPy ファームウェアをデバイスにフラッシュ**

デバイス用のファームウェアをダウンロードしたら、`.UF2` ファイルを `ARDUINO` USB ドライブにドラッグします。これで、ボードが PC から一時的に消えます。ボードをリセットすると、ArduPy ファームウェアがロードされます！

- **ステップ.4 デバイスを点滅させる**

PC に **`ARDUPY`** という名前の USB ドライブが表示されます。`ARDUPY` を開き、`main.py` という Python ファイルを見つけます。`main.py` を [Microsoft Visual Studio Code](https://code.visualstudio.com/)、[Atom](https://atom.io/)、[Sublime Text](https://www.sublimetext.com/) などの好きなエディタで開きます。以下のコードをコピーして `main.py` に保存してください。

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

これで、デバイスの内蔵 LED が点滅し始めるはずです！以下のセクションで ArduPy についてさらに詳しく学びましょう！`ArduPy-aip` ツールの使い方や、`aip` を使用して独自のファームウェアをデバイスにビルドおよびフラッシュする方法を学べます！

## macOS での `aip` のインストール

macOS ユーザーの場合、以下のコマンドをターミナルで実行するだけで ArduPy-aip をインストールできます：

```sh
pip3 install ardupy-aip
```

**注意:** macOS に **Python 3** がインストールされていることを確認してください。Python 3 をインストールするには、macOS 用のソフトウェアパッケージマネージャである [**Homebrew**](https://brew.sh/) を使用できます。Homebrew をインストールした後、以下を実行して Python 3 をインストールしてください：**`brew install python3`**。または、[公式 Python ウェブサイト](https://www.python.org/downloads/mac-osx/) から Python 3 をダウンロードしてインストールすることもできます。

## Windowsで`aip`をインストールする

以下のセッションからWindows用の最新バージョンのArduPyをダウンロードできます。ダウンロード後、バイナリ`aip`を`PATH`に含まれるディレクトリに抽出してください。

- [**Windows 64ビット用**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

または、**Python 3**環境がある場合は、`pip3`を使用してインストールすることもできます：

```sh
pip3 install ardupy-aip
```

## Linuxで`aip`をインストールする

Linuxユーザーの場合、以下のコマンドをターミナルで実行するだけでArduPy-aipをインストールできます：

```sh
pip3 install ardupy-aip
```

**注意:** **Python 3**がインストールされており、`pip3`が最新であることを確認してください。

## ArduPy-aip CLI

`aip`はArduPy用のコマンドラインインターフェースであり、ArduPyライブラリのインストール、ArduPyファームウェアのビルドおよびハードウェアへの書き込みを簡単に行うことができます。`help`を使用して詳細情報を取得できます：

```sh
aip help
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- ボード情報（ファームウェア情報）を取得するには：

```sh
aip board
```

- ArduinoライブラリをArduPyとバインドしてインストールするには：

利用可能な[**ArduPyライブラリ**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=)を確認してください。

```sh
aip install <ArduPy Library Path> 
# 使用例: 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- ArduPyライブラリをアンインストールするには：

```sh
aip uninstall <ArduPy Library Path> 
# 使用例: 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- インストール済みのArduPyライブラリを一覧表示するには：

```sh
aip list
```

- インストールしたライブラリと基本的なArduPy機能を含むArduPyファームウェアをビルドするには。現在、[Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)または[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)向けにビルドを選択できます！

```sh
aip build --board=<board>
# Seeeduino XIAOの場合:
# aip build --board=xiao
# Wio Terminalの場合:
# aip build --board=wio_terminal
```

- ArduPyファームウェアをハードウェアに書き込むには：

```sh
aip flash
```

!!!注意
        コマンドの後に`-h`フラグを使用すると、そのコマンドの詳細な使用方法を確認できます。例: `aip flash -h`

- ボードと対話するには（シェルベースのファイルエクスプローラー）：

```sh
aip shell
```

**注意:** ardupy-mpfshellに入ると、`help`を使用して詳細情報とコマンドを確認できます。

- **REPL**モードに入るには：

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- Pythonファイルを実行するには：

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# 使用例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- シェルを使用してボードにファイルをロードするには：

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# 使用例:
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### 初めてのスクリプトを実行する

ArduPyファームウェアを書き込むと、PCに**`ARDUPY`**という名前のUSBドライブが表示されるはずです。以下のPythonファイルを作成して開始できます。

- **`boot.py`**

起動時にMicroPythonスクリプトを実行するには、プロジェクトをボードのルート位置に**`boot.py`**という名前で保存してください。**このスクリプトはデバイスの起動時に実行されます。**

- **`main.py`**

これはデフォルトのPythonスクリプトですが、起動時には実行されません。`main.py`は変更が保存されると実行されます。つまり、自動リロードが可能です。

### ardupy-mpfshellでの使用方法

ardupy-mpfshellに入ると、`help`を使用してコマンドの使用方法を確認できます。以下に便利なコマンドをいくつか示します：

- デバイス上のファイルを一覧表示するには：

```sh
ls
```

- デバイス上のファイル（またはディレクトリ）を削除するには：

```sh
rm <File/Directory>
```

- 例えばローカルファイル`boot.py`をデバイスにアップロードするには：

```sh
put <YourPythonFilePath> [Path]
```

- デバイス上のファイル（例: `test.py`）を実行するには：

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## 他の ArduPy ライブラリを含めるための `aip` 使用例

`aip` は ArduPy の主要な機能の一つであり、Arduino ライブラリを Python インターフェースに変換して ArduPy で使用できるようにします。ここでは、Wio Terminal を使用して ArduPy ライブラリを ArduPy ファームウェアに含める方法の例を示します。

1. ターミナルまたは Powershell を開き、以下のコマンドを実行して ArduPy ライブラリをインストールします。

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2. ファームウェアをビルドします：

```sh
aip build --board=wio_terminal
```

**注意:** ファームウェアのフラッシュ方法はビルドの最後に表示されます。

3. **ビルドの最後に表示された使用方法をコピーして**、**新しい**ファームウェアをボードにフラッシュします。`aip` は自動的に PC に接続されたボードを検出してファームウェアをアップロードします。ボードが接続されていない場合はエラーが表示されます。

```sh
aip flash
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### ライブラリの使用例

ライブラリが ArduPy ファームウェアに含まれ、デバイスにフラッシュされたら、以下のようにモジュールをインポートして使用できます：

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

> `/Users/ansonhe/Desktop` をあなたのパスに置き換えてください。

ここで、`ur.py` の内容は以下の通りです：

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

詳細については、[seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor) を参照してください。

### FAQ

`aip` に関する詳細な情報は、[ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) を訪問して確認してください。

---

## 時間と遅延

- `time` モジュールをインポートして遅延を設定する：

```py
import time

time.sleep(1)           # 1秒間の遅延
time.sleep_ms(500)      # 500ミリ秒の遅延
time.sleep_us(500)      # 500マイクロ秒の遅延
```

- 時間カウンターを使用する：

```py
import time

time.ticks_ms()          # ミリ秒カウンター
start = time.ticks_us()  # マイクロ秒カウンター
time.ticks_diff(time.tick_us(), start) # カウンター間の差を測定
```

**注意:** **`TAB`** キーを使用して自動補完を行い、利用可能なすべての関数を確認できます。例えば、`time.` と入力した後に **`TAB`** を押すと、`time` モジュール内のすべての関数が表示されます。

詳細については、[MicroPython time 関連関数](https://docs.micropython.org/en/latest/library/utime.html) を参照してください。

## ピンと GPIO

### Seeeduino XIAO のピン配置図

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

### Wio Terminal のピン配置図

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

ArduPy で GPIO を参照するには、使用しているデバイスの物理ピンマップを単純に使用します。例えば、Wio Terminal の場合、ピン 1 は 3.3V、ピン 2 は 5V です。

- ピンをインポートして GPIO を設定する：

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # ピン 3 を出力ピンとして設定
p3.on()                 # ピン 3 を HIGH に設定
p3.off()                # ピン 3 を LOW に設定

p3.value(1)             # value メソッドを使用してピン 3 を HIGH に設定

p5 = Pin(5, Pin.IN)     # ピン 5 を入力ピンとして設定
p5.value()              # 入力ピンの値を出力

p3 = Pin(3, Pin.OUT, value=1) # ピン 3 を出力ピンとして設定し、同時に HIGH に設定
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # ピン 5 をプルアップ抵抗付きの入力ピンとして設定
```

## マップ

ボードの周辺機器へのアクセスを簡単にするために、ArduPyはArduinoと同じ呼び出し方法をマッピングしています：

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # 内蔵LEDを出力として設定

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

## PWM（パルス幅変調）

PWMを使用するには、デバイス上のPWMチャネルを使用する必要があります。デバイスのピンマップを参照し、PWMチャネルがどこにあるかを確認してください。

- PWMの使用例：

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # ピン13でPWMチャネルを作成
pwm0.freq()             # 現在の周波数を取得
pwm0.freq(1000)         # 周波数を1000Hzに設定
pwm0.duty()             # 現在のデューティサイクルを取得
pwm0.duty(200)          # デューティサイクルを200に設定
pwm0.deinit()           # ピン上のPWMをオフにする

pwm1 = PWM(Pin(16), freq=1000, duty=200) # 1行でPWMを設定
```

## ADC

デバイスでADCを使用するには、アナログピンを使用する必要があります。例えば、Wio Terminalのピン13(A0)。

**注意: Wio TerminalのADCチャネルは10ビット(0-1023)です。**

- ADCの使用例：

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # ピン13でADCを作成
adc.read()              # ADC値を読み取る、範囲は0〜1023
```

## DAC

デバイスでDACを使用するには、DACピンまたはボード上のPWMピンを使用する必要があります。例えば、Wio Terminalのピン11(DAC0)。

**注意: Wio TerminalのDACチャネルは12ビット(0-4095)です。**

- DACの使用例：

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # ピン11でDACを作成
dac0.write(512)          # DACに値を書き込む、512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # ピン26でDACを作成し、10ビット解像度を使用
dac1.write(1023)                    # DACに最大出力を書き込む、3.3V
```

**注意:** PWMピンでDACを使用する場合、チャネルの解像度は8ビットのみになります。

```py
# PWMピンでDACを使用する例
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # ピン16でDACを作成
dac2.write(128)         # DACに値を書き込む、128/255*3.3 = 1.65V
```

## LCD

Wio Terminalでは、TFT LCDディスプレイを以下のように使用できます。LCDに関する詳細なリファレンスについては、[**ArduPy LCD API Reference**](https://wiki.seeedstudio.com/ja/ArduPy-LCD/)をご覧ください。

- LCDモジュールの使用例：

```py
from machine import LCD

lcd = LCD()                            # LCDを初期化し、バックライトをオンにする
lcd.fillScreen(lcd.color.BLACK)        # LCD画面を黒色で塗りつぶす
lcd.setTextSize(2)                     # フォントサイズを2に設定
lcd.setTextColor(lcd.color.GREEN)      # テキストカラーを緑色に設定
lcd.drawString("Hello World!", 0, 0)   # (0, 0)に"Hello World!"を表示
```

注意: 利用可能な関数を確認するには、**`tab`** を使用してください。

---

## IDEの使い方

前述の通り、お好みのエディタを使用してPythonプログラムを書くことができます。プログラムを簡単に実行・テストするには、`ARDUPY` USBの場所にある`main.py`ファイルを編集するだけです（自動リロード機能）。ここでは、**Wio Terminal** を使用した別の簡単な例を示します：

>次のセッションに進む前に、上記の手順をすべて完了していることを確認してください。

1. `ARDUPY` USBの場所にある`main.py`を開きます。

2. 以下のコードを`main.py`にコピーして保存します。

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# 円のセグメントを描画
# x,y == 円の中心座標
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = 張角
# r = 半径
# colour = 16ビットカラー値

def fillSegment(x, y, startAngle, subAngle, r, color):
    # セグメント開始の最初の座標ペアを計算
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # 各度数で色ブロックを描画
    for i in range(startAngle, startAngle+subAngle, 1):
        # セグメント終了の座標ペアを計算
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # 次のセグメントのために終了座標を開始座標にコピー
        x1 = x2
        y1 = y2

def main():
    # 4つの円グラフセグメントを描画
    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)
    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)
    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)
    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)
    time.sleep(1)
    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)

if __name__ == "__main__":
    while True:
        main()
```

3. Wio Terminalが画面に円グラフを描画し始めるのがすぐに確認できるはずです！

自動リロード機能は、小さなプログラムをテストする際に非常に便利です。

## 技術サポート

技術的な問題については、[フォーラム](https://forum.seeedstudio.com/)にご投稿ください。<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>