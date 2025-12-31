---
description: SWDインターフェースを使用してArduinoボードをデバッグする方法
title: SWDインターフェースを使用してArduinoボードをデバッグする方法
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
# SWDインターフェースを使用してArduinoボードをデバッグする方法

このwikiでは、**SWDインターフェースを使用してJ-Link Debug Programmer経由でArduinoボードをデバッグする方法**を学習します。参考として、デバッグプロセスを実演するハードウェアとしてWio Terminalを使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### SWDデバッグとは

**SWD**は、[Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug)としても知られ、2ピンインターフェース（SWDIO/SWCLK）で、同じJTAGプロトコルを持つ代替JTAGインターフェースでもあります。SWDは、ARM Debug programmerで定義されたARM CPU標準双方向ワイヤプロトコルを使用します。

## ハードウェア接続

開始する前に、以下の材料が必要です：

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)（またはSWDインターフェース付きの他のArduinoボード）

2. [**J-Link Debug Programmer**](https://www.segger.com/products/debug-probes/j-link/)

### Wio Terminal SWDインターフェース

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

Wio Terminalの場合、SWDインターフェースパッドはWio Terminalの前面底部にあります（ケースなしのベアPCBA）。引き出す必要がある3本のジャンパーワイヤがあります：

- **SWCLK**
- **SWDIO**
- **GND**

ジャンパーワイヤをはんだ付けしたら、SWDピンマップに従ってJ-Link Debug programmerに接続できます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

以下のように接続します：

- **`SWCLK`**（Wio Terminal）-> **`SWCLK`**（J-Link Debug Programmer Pin 7）
- **`SWDIO`**（Wio Terminal）-> **`SWDIO`**（J-Link Debug Programmer Pin 9）
- **`GND`**（Wio Terminal）-> **`GND`**（J-Link Debug Programmer Pin 4）

## デバッグ用J-Link GDB Serverのインストール

J-Link Debug programmerでデバッグするには、[**J-Link GDB Server**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/)をダウンロードする必要があります。お使いのOSに応じてダウンロードしてインストールしてください。

## Arduino設定

J-Link GDB Serverを起動する前に、後の設定のために`Arduino` IDEも開く必要があります。

### 1. Arduino Sketch ELFファイルパスの取得

Arduino IDEの設定で、**Show verbose output during compilation and upload**の両方にチェックが入っていることを確認してください。

デバッグしたいArduino sketchで、**Compile**をクリックし（ボードとしてWio Terminalを選択）、ログ情報をチェックして`.elf`ファイルの場所のパスを取得します。例として`Blink`を使用しましょう：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

このパスをコピーして、後でGDBで使用します。

例えば、私の場合：

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. GCCパスの取得

同じsketchコンパイルログ情報で、Arduinoで使用されるGCCパスも見つけることができ、これも後でJ-Link Debug Programmerで使用できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

例えば、私の場合：

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## J-Link GDB Serverの開始

J-Link Debug ProgrammerをPCに接続し、USBポートからWio Terminalに電源を供給します。**J-Link GDB Server**を起動し、以下の設定を選択します：

- Connection to J-Link: **USB**
- Target Device: **Cortex-M4**
- Target Interface: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

**OK**を選択し、すべてがうまくいけば以下の画面が表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

リスニングポートが表示され、J-Link GDB serverが起動して準備完了であることが確認できるはずです！

## GDBクライアントの起動

ArduinoのGCCパスから先ほど保存したパスを使用してGDBクライアントを起動できます。ターミナルを開き、コピーしたパス + `/arm-none-eabi-gdb`を貼り付けます：

例：`/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

gdbで以下のコマンドを実行します：

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Arduino Sketch ELFファイルパス、例：`file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

これでGDBを使用してArduino Sketchをデバッグできます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### `.gdbinit`メソッド

`.gdbinit`ファイルを作成し、以下をコピーして`~/`の場所に保存することで、gdbの設定プロセスを繰り返すことを避けることもできます。

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

これでGDBクライアントを起動するだけで、すぐにデバッグを開始できます！

## デバッグ

GDBの便利なコマンド：

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## 推奨ツール：XIAO Debug Mate
より効率的な開発体験のために、[XIAO Debug Mate](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html)をお勧めします。このオールインワン開発ツールは、デバッグプロセスを簡素化するように設計されており、XIAOエコシステム向けのワイヤレスソリューションを提供しながら、より広範な組み込みプロジェクトにとって汎用的なユーティリティとして機能します。ESP32-S3を搭載し、従来の大型デバッガーの現代的な代替品として機能します。

**主な機能：**
- 3-in-1マルチツール：DAPLinkデバッガー、シリアルモニター、パワーメーターを1つのデバイスに統合。
- ビジュアルフィードバック：2.01インチLCD画面を搭載し、PCなしでリアルタイム変数ステータス、電力カーブ、シリアルログを表示。
- XIAOのプラグアンドプレイ：任意のSeeed Studio XIAOボードを直接プラグインして即座にデバッグ。
- ユニバーサルSWDサポート：スタンドアロンSWDプローブ（2.54mm拡張ヘッダー経由）として使用して、他のARM Cortex-Mマイクロコントローラーをデバッグ可能。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB_debug.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>


## リソース

- [公式GNU GDBドキュメント](https://www.gnu.org/software/gdb/documentation/)

- [GNU GDBデバッガーコマンドチートシート](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**Q1. Wio Terminalのエンクロージャーを取り外すにはどうすればよいですか？**

**A1.** まず、4つの角の4つのゴムパッドを取り出すと、Wio Terminalエンクロージャーを固定している2つのネジが見えます。それらを外すだけで分解できます。

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>
