---
description: ArduinoボードをSWDインターフェースでデバッグする方法
title: ArduinoボードをSWDインターフェースでデバッグする方法
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-SWD
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ArduinoボードをSWDインターフェースでデバッグする方法

このWikiでは、**J-Linkデバッグプログラマを使用してSWDインターフェースを介してArduinoボードをデバッグする方法**を学びます。参考として、デバッグプロセスを示すためにWio Terminalをハードウェアとして使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### SWDデバッグとは

**SWD**（[Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug)）は、2ピンインターフェース（SWDIO/SWCLK）であり、同じJTAGプロトコルを持つ代替JTAGインターフェースでもあります。SWDは、ARMデバッグプログラマで定義されたARM CPU標準の双方向ワイヤプロトコルを使用します。

## ハードウェア接続

開始する前に、以下の材料が必要です：

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)（またはSWDインターフェースを備えた他のArduinoボード）

2. [**J-Linkデバッグプログラマ**](https://www.segger.com/products/debug-probes/j-link/)

### Wio TerminalのSWDインターフェース

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

Wio Terminalの場合、SWDインターフェースパッドはWio Terminalの前面下部（ケースなしの裸PCBA）にあります。以下の3本のジャンパーワイヤを引き出す必要があります：

- **SWCLK**
- **SWDIO**
- **GND**

ジャンパーワイヤをはんだ付けしたら、SWDピンマップに従ってJ-Linkデバッグプログラマに接続します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

以下のように接続します：

- **`SWCLK`** (Wio Terminal) -> **`SWCLK`** (J-Linkデバッグプログラマ ピン7)
- **`SWDIO`** (Wio Terminal) -> **`SWDIO`** (J-Linkデバッグプログラマ ピン9)
- **`GND`** (Wio Terminal) -> **`GND`** (J-Linkデバッグプログラマ ピン4)

## デバッグ用J-Link GDBサーバーのインストール

J-Linkデバッグプログラマを使用してデバッグするには、[**J-Link GDBサーバー**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/)をダウンロードする必要があります。お使いのOSに応じてダウンロードしてインストールしてください。

## Arduinoのセットアップ

J-Link GDBサーバーを起動する前に、後で設定するために`Arduino` IDEを開く必要があります。

### 1. ArduinoスケッチELFファイルパスの取得

Arduino IDEの設定で、**コンパイルとアップロード中の詳細な出力を表示**が両方ともチェックされていることを確認してください。

デバッグしたいArduinoスケッチの下で、**コンパイル**をクリックします（ボードとしてWio Terminalを選択）。ログ情報を確認して`.elf`ファイルの場所のパスを取得します。例として`Blink`を使用します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

このパスをコピーし、後でGDBで使用します。

例えば、私の場合：

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. GCCパスの取得

同じスケッチのコンパイルログ情報の下で、Arduinoが使用するGCCパスも見つけることができ、これも後でJ-Linkデバッグプログラマで使用できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

例えば、私の場合：

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## J-Link GDB サーバーの使用開始

J-Link デバッグプログラマーを PC に接続し、USB ポートから Wio Terminal に電源を供給します。**J-Link GDB Server** を起動し、以下の設定を選択してください：

- J-Link への接続: **USB**
- ターゲットデバイス: **Cortex-M4**
- ターゲットインターフェース: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

**OK** を選択し、すべてが正常に動作していれば、以下の画面が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

リスニングポートが表示され、J-Link GDB サーバーが起動して準備完了となります！

## GDB クライアントの起動

次に、Arduino の GCC パスから保存したパスを使用して GDB クライアントを起動します。ターミナルを開き、コピーしたパス + `/arm-none-eabi-gdb` を貼り付けます：

例: `/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

gdb 内で以下のコマンドを実行します：

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Arduino スケッチ ELF ファイルパス、例: `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

これで GDB を使用して Arduino スケッチをデバッグできます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### `.gdbinit` メソッド

`.gdbinit` ファイルを作成し、以下をコピーして `~/` に保存することで、GDB の設定プロセスを繰り返す必要がなくなります。

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

これで GDB クライアントを起動するだけで、すぐにデバッグを開始できます！

## デバッグ

GDB の便利なコマンド：

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## リソース

- [公式 GNU GDB ドキュメント](https://www.gnu.org/software/gdb/documentation/)

- [GNU GDB デバッガーコマンド チートシート](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**Q1. Wio Terminal の筐体を取り外すにはどうすればよいですか？**

**A1.** まず、4つの角にあるゴムパッドを取り外すと、Wio Terminal の筐体を固定している2つのネジが見えます。それらを外すだけで筐体を分解できます。

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>