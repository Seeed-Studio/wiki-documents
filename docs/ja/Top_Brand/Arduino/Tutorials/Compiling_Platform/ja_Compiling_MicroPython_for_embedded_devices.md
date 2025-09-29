---
description: Arduino対応ボード向けMicroPython
title: Arduino対応ボード向けMicroPython
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Compiling_MicroPython_for_embedded_devices
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 組み込みデバイス向けMicroPythonのコンパイル

## MicroPythonとは

MicroPythonは、Python 3とほぼ互換性のあるプログラミング言語のソフトウェア実装で、C言語で記述され、マイクロコントローラ上で動作するように最適化されています。

MicroPythonは、Pythonコードをバイトコードにコンパイルするコンパイラと、そのバイトコードを実行するランタイムインタプリタで構成されています。ユーザーにはインタラクティブなプロンプト（REPL）が提供され、サポートされているコマンドを即座に実行できます。また、コアPythonライブラリの選択が含まれており、MicroPythonには低レベルハードウェアへのアクセスを提供するモジュールが含まれています。

## ファームウェアのビルド方法（Xiao SAMDを例にしてみましょう）

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)は、すでにMicroPython開発をサポートしています。

### ステップ1: 関連ソフトウェアの準備

"arm-none-linux-gnueabi"は、Debianベースのシステムでaptのようなパッケージマネージャを使用してインストールできるツールチェーンです（パッケージ名はgcc-arm-linux-gnueabi）。Ubuntuでは、arm-none-linux-gnueabiはubertooth-firmware-sourceに含まれています。また、gcc、python、git、makeなどの必要なツールをインストールして環境を準備する必要があります。そのため、以下のコマンドを実行します。

```bash
sudo apt update
sudo apt install cmake make gcc ubertooth-firmware-source python3 git 
```

### ステップ2: ワークスペースの切り替えとソースコードのクローン

ソースコードをクローンし、必要なサブモジュールのコードをダウンロードします。

以下のコマンドを順に実行します。

```bash
cd ~
git clone https://github.com/micropython/micropython
cd ~/micropython
git submodule update --init --recursive
```

ダウンロードする情報はこのファイルに含まれており、ダウンロード先のパスとコードリポジトリのアドレスが記載されています。

```bash
cat ~/micropython/.gitmodules 
```

### ステップ3: mpy-crossのビルド（MicroPythonクロスコンパイラ）

ほとんどのポートでは、最初にMicroPythonクロスコンパイラをビルドする必要があります。このプログラム（mpy-crossと呼ばれる）は、Pythonスクリプトを.mpyファイルに事前コンパイルするために使用され、これらのファイルをポートのファームウェア/実行可能ファイルに含めることができます（フリーズ）。mpy-crossをビルドするには、以下を使用します。

```bash
cd ~/micropython/mpy-cross
make
```

### 次のステップ: 外部依存関係のビルド

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)は、すでにMicroPython開発をサポートしています。これは、ARMアーキテクチャのSAMDチップに基づくコントローラです。そのため、バージョン番号を指定し、対応するディレクトリに移動してコンパイルします。

```bash
cd ~/micropython/ports/samd
BOARD=SEEED_XIAO make V=1
```

### 最終ステップ: ファームウェアの書き込み

生成されたファームウェアはここにあります。ファームウェアをデバイスにコピーすると、XIAO SAMDでMicroPythonが利用可能になります。

```bash
ls ~/micropython/ports/samd/build-SEEED_XIAO/ |grep firmware.uf2
```

```bash
sudo cp ~/micropython/ports/samd/build-SEEED_XIAO/firmware.uf2 /media/$USER/Arduino/
```

## ファームウェアのテスト

以下のコードをコピーすると、青色のLEDが点滅するのが確認できます。

```python3
from machine import Pin, Timer

led = Pin(19, Pin.OUT)
Counter = 0    
def fun(tim):
    global Counter
    Counter = Counter + 1
    state  =  Counter%2
    led.value(state)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/XIAO_SAMD_MICROPYTHON_LED.gif" border="0" /></p>

ご覧の通り、[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)はすでにMicroPython開発をサポートしています。

このプロセスを参考にして、他のデバイス向けにMicroPythonファームウェアをコンパイルすることもできます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>