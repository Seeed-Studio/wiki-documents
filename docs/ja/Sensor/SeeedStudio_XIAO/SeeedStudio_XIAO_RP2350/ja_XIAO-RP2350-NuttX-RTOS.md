---
description: XIAO RP2350 With NuttX(RTOS)
title: XIAO RP2350 With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /ja/xiao_rp2350_nuttx
sidebar_position: 3
last_update:
    date: 03/11/2025
    author: rcsim
---

# Seeed Studio XIAO RP2350 と NuttX(RTOS)

:::note

ソフトウェアバージョンの変更により、このドキュメントの一部の手順は正確でなくなったり、最新でなくなったりする可能性があります。

:::

## はじめに

[NuttX](https://nuttx.apache.org/)は、標準準拠と小さなフットプリントで広く認知されている成熟したリアルタイムオペレーティングシステム（RTOS）です。NuttXの主な特徴の一つはその拡張性であり、8ビットマイクロコントローラから64ビットシステムまでの環境で使用できます。この柔軟性は、POSIXおよびANSI標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーからの幅広いチップで類似のNuttX機能を実験することができます。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttXはUSB、Ethernet、Audio、Graphicsサブシステムなど、多くの高度で有用な機能を提供します。これらの特性により、NuttXは様々なタイプのハードウェア上で動作可能な汎用性があり、堅牢なRTOSを求める開発者にとって魅力的な選択肢となっています。

NuttXは膨大で継続的に拡張されているボードの数をサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/)では、アーキテクチャとSystem-on-Chip（SoC）シリーズ別に整理されたサポートボードの包括的なリストを提供しています。

例えば、NuttXドキュメントの[Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html)ページでは、サポートされている各機能の詳細な説明とそれらの使用方法に関する指示を提供しています。また、[Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html)シリーズチップ専用のページもNuttXドキュメントにあります。

## インストール

Nuttxドキュメントでは、異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。Seeed Studio XIAO RP2350については、以下の手順に従ってください：

1. picotoolツールをダウンロード（オプション）：

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # somewhere in your PATH
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

- Nuttx：カーネル、ドライバー、サブシステムの実装が含まれています。
- Apps：ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、以下のコマンドを呼び出してNuttX上に設定をロードする必要があります：

```bash
./tools/configure.sh board_name:your_application
```

また、以下のコマンドを実行してボードがサポートされているかどうかのリストを確認することも可能です：

```bash
./tools/configure.sh -L
```

4. NuttXをビルドします（ビルドプロセスでnuttx.uf2を含むファームウェアバイナリが生成されます）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. picotoolを使用してファームウェアをロードします：

    ```bash
    picotool load nuttx -t elf
    ```

6. RESETボタンとBOOTボタンを使用してブートローダーモードに入ることができます。BOOTボタンを押し続けながらRESETボタンを押して離します。その後、ボードはUSB経由で接続されたコンピューターにストレージデバイスとして認識されます。このデバイスに.UF2ファイルを保存すると、RP2350のFlash ROMの内容が置き換えられます。

## ハンズオン

実際にNuttXを探索する時間です。このセッションでは、NSH、USBNSH、COMBOの3つのアプリケーションが利用可能です。

### NSH

NuttShell（NSH）はNuttXで使用されるシェルシステムで、bashや他の類似オプションと似ています。豊富な内蔵コマンドセット、スクリプト機能、および独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSH設定では、115200 bpsを使用してUART0でコンソールを有効にします。

前の設定をクリアしてビルドプロセスを開始できます

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-rp2350ボードにNSH設定を選択します：

```bash
./tools/configure.sh xiao-rp2350:nsh
```

ソースコードをコンパイルします。

```bash
make -j
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

次に、xiao-rp2350ボードにNSH設定を選択します：

```bash
./tools/configure.sh xiao-rp2350:usbnsh
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

### COMBO

この設定では、gpio、leds、ws2812の3つのサンプルアプリケーションが有効になります。汎用入出力（GPIO）はマイクロコントローラーの最も基本的な部分であり、外部世界との接続を可能にします。この方法でNSHを使用して、これらのピンを希望通りにアクセスし設定します。しかし、まず前の設定をクリアしましょう。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-rp2350ボードにcombo設定を選択します。

```bash
./tools/configure.sh xiao-rp2350:combo
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyUSB0
```

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

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`と入力してください。入力後、boards/arm/rp23xx/xiao-rp2350/include/board.hで定義されたいくつかのgpioが宣言されているのを確認できます。これらは以下を表しています：

- オンボードLED：
  - 黄色            -> GPIO25

- GPIO
  - 1つの入力           -> GPIO27
  - 1つの割り込み入力 -> GPIO26
  - 1つの出力          -> GPIO28

```bash
nsh> ls /dev
/dev:
 console
 gpio26
 gpio27
 gpio28
 leds0
 null
 ttyS0
 userleds
 zero
nsh> 
```

以下のコマンドに従って、gpio27とgpio26を読み取り（割り込み付き）、gpio28に書き込みを行います。

```bash
nsh> gpio -w 1 /dev/gpio26
Driver: /dev/gpio26
  Interrupt pin: Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

USERLEDS は、単一の操作で LED を制御できるサブシステムです。また、printf のようなコマンドラインを使用することもできます。このデモでは、オンボードの黄色 LED を 1 秒ごとにオン・オフします。

`leds` と入力すると、LED が同時に点滅するのを観察できます。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

Seeed Studio XIAO RP2350 には WS2812 アドレサブル LED も搭載されており、ws2812 アプリケーションを使用してテストできます：

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```

gpio、LED、ws2812の例のデモについては、以下の動画をご確認ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSの詳細については、[NuttX ドキュメント](https://nuttx.apache.org/docs/latest/index.html)をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは、Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
