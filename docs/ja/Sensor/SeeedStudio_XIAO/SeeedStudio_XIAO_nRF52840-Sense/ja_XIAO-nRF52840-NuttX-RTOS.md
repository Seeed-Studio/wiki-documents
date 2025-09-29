---
description: XIAO nRF52840(sense) With NuttX(RTOS)
title: XIAO nRF52840(sense) With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_nrf52840_nuttx
last_update:
    date: 02/12/2025
    author: rcsim
---

# Seeed Studio XIAO nRF52840 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小さなフットプリントで広く認知されている成熟したリアルタイムオペレーティングシステム（RTOS）です。NuttXの主な特徴の一つはスケーラビリティであり、8ビットマイクロコントローラから64ビットシステムまでの環境で使用できます。この柔軟性は、POSIXおよびANSI標準への準拠により実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似のNuttX機能を実験することができます。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

さらに、NuttXはUSB、Ethernet、Audio、Graphicsサブシステムなど、多くの高度で有用な機能を提供します。これらの特性により、NuttXは様々なタイプのハードウェア上で動作可能な汎用性があり堅牢なRTOSを求める開発者にとって魅力的な選択肢となっています。

NuttXは膨大で継続的に拡張されているボード数をサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/)では、アーキテクチャとSystem-on-Chip（SoC）シリーズ別に整理されたサポートボードの包括的なリストを提供しています。

例えば、NuttXドキュメントの[Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html)ページでは、サポートされている各機能の詳細な説明とそれらの使用方法に関する指示を提供しています。また、NuttXドキュメントには[Nordic Semiconductor nRF52](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html)シリーズチップ専用のページもあります。

## ツールセットアップ

XIAO nRF52840でNuttXを始めるための最初のステップは、hexファイル形式をuf2に変換するために必要なUF2 Toolsをインストールし、その後NuttXソースコード自体をダウンロードすることです。Nuttxは異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。以下の手順に従ってください：

1. UF2 Toolsをダウンロード：

    ```bash
    git clone https://github.com/microsoft/uf2.git
    ```

2. ワークスペースを作成

    ```bash
    mkdir nuttxspace
    ```

3. リポジトリをクローン

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttxは2つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバー、サブシステムの実装を含みます。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションを含みます。

## アプリケーション

アプリケーションを開始するには、以下のコマンドを呼び出してNuttX上に設定をロードする必要があります：

```bash
./tools/configurate.sh board_name:your_application
```

また、以下のコマンドを実行してボード対応リストを確認することも可能です：

```bash
./tools/configurate.sh -L
```

4. NuttXをビルド

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. U2Fツールを使用してnuttx.hexをUF2形式に変換：

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. Seeed Studio XIAO nRF52840を接続し、2回素早くクリックしてブートローダーモードに入ります。ボードはUSBマスストレージデバイスとして検出されます。その後、「nuttx.uf2」をデバイスにコピーします。

## ハンズオン

実際にNuttXを探索する時間です。このセッションでは、NSH、USBNSH、JUMBOの3つのアプリケーションが利用可能です。

### NSH

NuttShell（NSH）はNuttXで使用されるシェルシステムで、bashや他の類似オプションと似ています。豊富な内蔵コマンドセット、スクリプト機能、および独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSH設定では、115200 bpsを使用してUART0でコンソールを有効にします。

前の設定をクリアしてビルドプロセスを開始できます

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボードにNSH設定を選択します：

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

ソースコードをコンパイルします。

```bash
make -j
```

U2F Toolsを使用してnuttx.hexをUF2形式に変換します：

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

ファームウェアをボードにロードし、USB-to-SerialをTXとRXピンに接続してから、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyUSB0
```

NuttShellコンソールにアクセス：

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

`?`を入力すると、コマンドと組み込みアプリケーションの利用可能なオプションにアクセスできます。

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

NuttXに挨拶してみましょう。`hello`と入力すると、コマンドが実行されます：

```bash
nsh> hello
Hello, World!!
```

おめでとうございます。NuttXとの最初のやり取りが完了しました。

### USBNSH

NSH設定と似ていますが、CDC/ACMシリアル（USBポートでコンソールが有効、115200 bps）を使用します。

以前の設定をクリアして、ビルドプロセスを開始できます

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-nrf5200ボードにNSH設定を選択します：

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

ソースコードをコンパイルします。

```bash
make -j
```

U2F Toolsを使用してnuttx.hexをUF2形式に変換します：

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行します：

```bash
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押す必要があり、その後このメッセージがターミナルに表示されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### JUMBO

この設定では、gpioとledsという2つのサンプルアプリケーションが有効になります。汎用入出力（GPIO）はマイクロコントローラーの最も基本的な部分であり、外部世界との接続を可能にします。この方法でNSHを使用して、これらのピンを希望通りにアクセスし設定します。しかし、まず前の設定をクリアしましょう。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-nrf52840ボードにjumbo設定を選択します。

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押す必要があり、その後このメッセージがターミナルに表示されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

このアプリケーションとの対話で受け入れられるオプションを確認するには、`gpio -h` と入力してください。パラメータのリストが返されます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`と入力してください。入力後、[xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61)で定義されたいくつかのgpioが宣言されているのを確認できます。これらは以下を表しています：

- オンボードRGB LED：

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIO
  - 1 入力          - P0.02(/dev/gpio0)
  - 1 割り込み入力 - P0.03(/dev/gpio2)
  - 1 出力          - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

以下のコマンドに従って、gpio0とgpio2（割り込み付き）を読み取り、gpio1に書き込みます。

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

USERLEDS は、単一の操作で LED を制御できるサブシステムです。また、printf のようなコマンドラインを使用することもできます。このデモでは、オンボードの RGB LED を 1 秒ごとにオンとオフを切り替えます。

`leds` と入力すると、LED が同時に点滅するのを観察できます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

以下のgpioとledsの例のデモ動画をご確認ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSの詳細については、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)をご覧ください

## ✨ Contributor Project

- このプロジェクトはSeeed Studioの[Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
