---
description: Seeed Studio XIAO RP2040 with NuttX
title: XIAO RP2040 With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao-rp2040-with-nuttx
last_update:
    date: 8/18/2024
    author: halyssonJr
---

# Seeed Studio XIAO RP2040 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/)は、標準準拠と小さなフットプリントで広く認知されている成熟したリアルタイムオペレーティングシステム（RTOS）です。NuttXの主な特徴の一つはスケーラビリティであり、8ビットマイクロコントローラから64ビットシステムまでの環境で使用できます。この柔軟性は、POSIXおよびANSI標準への準拠によって実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似のNuttX機能を実験することができます。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

さらに、NuttXはUSB、Ethernet、Audio、Graphicsサブシステムなど、多くの高度で有用な機能を提供しています。これらの特性により、NuttXは様々なタイプのハードウェアで動作可能な汎用性があり、堅牢なRTOSを求める開発者にとって魅力的な選択肢となっています。

NuttXは膨大で継続的に拡張されているボードの数をサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/)では、アーキテクチャとSystem-on-Chip（SoC）シリーズ別に整理されたサポートボードの包括的なリストを提供しています。

例えば、NuttXドキュメントの[Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html)ページでは、サポートされている各機能の詳細な説明とそれらの使用方法に関する指示が提供されています。

## ツールのセットアップ

NuttXを始めるための最初のステップは、一連の必要なツール、作業するアーキテクチャ用のツールチェーン、そして最後にNuttXソースコード自体をダウンロードすることです。Nuttxは異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。

環境をインストールしてセットアップした後、以下の手順に従ってください：

1. Raspberry Pi Pico SDKをダウンロード：

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git

```

3. PICO_SDK_PATH環境変数を設定します：

```
export PICO_SDK_PATH=<absolute_path_to_pico-sdk_directory>
```

2. ワークスペースを作成する

```
mkdir nuttxspace
```

3. リポジトリをクローンする

```
cd nuttxspace
git clone https://github.com/apache/nuttx.git nuttx
git clone https://github.com/apache/nuttx-apps apps
```

Apache Nuttxは2つのプロジェクトに分かれています：

- Nuttx: カーネル、ドライバー、サブシステムの実装が含まれています。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションが含まれています。

## アプリケーション

アプリケーションを開始するには、NuttXに設定をロードする必要があり、以下のコマンドを呼び出します：

```
./tools/configurate.sh board_name:your_application
```

また、以下のコマンドを実行してボード対応リストを確認することも可能です：

```
./tools/configurate.sh -L
```

スクリプトが実行されると、NuttXをコンパイルする必要があります。これを行うには2つの方法があります：[Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html)または[CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html)を使用します。

## プログラミング

コンパイルが正常に完了したら、次の目標はBOOTSELを使用してプログラミングすることです。そのためには、以下の手順に従う必要があります：

**ステップ1**：ボタン`B`（ブート）を押しながらSeed Stduio XIAO RP2040をUSBポートに接続します。ボードはUSBマスストレージデバイス`RPI-RP2`として検出されます。

**ステップ2**：ワークスペースで`nuttx`に移動し、`nuttx.uf2`をSeed Stduio XIAO RP2040にコピーします。

**ステップ3**：コンピューター上で新しいUSBデバイスを検索します。

**ステップ4**：Seed Stduio XIAO RP2040とのシリアル通信を開きます。

## ハンズオン

NuttXを実践的に探索する時間です。このセッションでは、4つのアプリケーションが利用可能です：USB NSH、GPIO、USERLEDS、およびWS2812ドライバーです。

### USBNSH

NuttXShell(NSH)はNuttXで使用されるシェルシステムで、bashや他の類似オプションと似ています。豊富な組み込みコマンドセット、スクリプト機能、および独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。

前の設定をクリアしてビルドプロセスを開始できます

```
cd ~/nuttxspace/nuttx
make distclean
```

次に、seeed-xiao-rp2040ボードにUSBNSH設定を選択します：

```
./tools/configurate.sh seeed-xiao-rp2040:usbnsh
```

ソースコードをコンパイルします。

```
make -j
```

プログラミングとシリアル通信のオープン後

```
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押す必要があり、その後このメッセージがターミナルに表示されます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> 
```

`?`を入力すると、コマンドと組み込みアプリケーションの利用可能なオプションにアクセスできます。

```
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

```
nsh> hello
Hello, World!!
```

おめでとうございます。NuttXとの最初のやり取りが完了しました。

### GPIOドライバー

汎用入出力（GPIO）は、マイクロコントローラーが外部世界と接続することを可能にする最も基本的な部分です。このようにして、NSHを使用してこれらのピンにアクセスし、必要に応じて設定します。しかし、まず前の設定をクリアしましょう。

```
cd ~/nuttxspace/nuttx
make distclean
```

seeed-xiao-rp2040ボードにgpio設定を選択します。

```
./tools/configurate.sh seeed-xiao-rp2040:gpio
```

ソースコードをコンパイルします。

```
make -j
```

プログラミングとシリアル通信のオープン後

```
picocom -b 115200 /dev/ttyACM0
```

Enterキーを3回押す必要があり、その後このメッセージがターミナルに表示されます。

```
NuttShell (NSH) NuttX-12.5.1
nsh>
```

このアプリケーションとの対話で受け入れられるオプションを確認するには、`gpio -h` と入力してください。パラメータのリストが返されます。

```
NuttShell (NSH) NuttX-12.5.1
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

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`と入力してください。入力後、[seed-studio-gpio.c](https://github.com/apache/nuttx/blob/9d5b9b7c056e59c2fcc81e7029c95a995140063c/boards/arm/rp2040/seeed-xiao-rp2040/src/rp2040_gpio.c#L49-L61)で定義されたいくつかのgpioが宣言されているのを確認できます。これらは以下を表しています：

- オンボード3個のLED（gpio 18、gpio 17、gpio 16）
- 1個の入力（gpio 6）
- 1個の割り込み入力（gpio 7）

```
nsh> ls /dev
/dev:
 console
 gpio16
 gpio17
 gpio18
 gpio6
 gpio7
 null
 ttyACM0
```

Seeed Studio RP2040 回路図によると、ボードのLEDはGPIOレベルがゼロに設定されたときに点灯します。

GPIO出力を制御するには、パラメータ —o、値（ゼロまたは1）、およびパス（/dev/gpio）を渡す必要があります。

これら2つのコマンドに従うと、黄色のLEDが点滅するのが確認できます。

```
nsh> gpio -o 0 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-green.jpg"/></div>

同様に、赤色LEDでも同じ結果が得られます。

```
nsh> gpio -o 0 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-red.jpg"/></div>

### USERLED

USERLEDSは、単一の操作でLEDを制御できるサブシステムです。また、printfのようなコマンドラインを使用することもできます。このデモでは、オンボードのLEDを1秒間隔でオン・オフします。

まず、以前の設定をクリアします。

```
cd ~/nuttxspace/nuttx
make distclean
```

次のコマンドを使用してuserledアプリケーション用にボードを設定します：

```
./tools/configurate.sh seeed-xiao-rp2040:userleds
```

ソースコードをコンパイルします。

```
make -j
```

プログラミング後、シリアル通信を開き、Enterキーを3回押して、前のアプリケーションで示したのと同じ手順に従います。

`ls /dev/`と入力すると、デバイスのリストが表示され、`userleds`ファイルが作成されたことが確認できます。

```
nsh> ls /dev/
/dev:
 console
 userleds
 null
 ttyACM0
 ttyS0
```

`leds`と入力すると、LEDが同時に点滅するのを観察できます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid # 3): Running
led_daemon: Opening /dev/userled
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-userleds.gif" style={{width:300, height:'auto'}}/></div>

## WS2812 LED

WS2812ドライバーは、ws2812プロトコルを使用する任意のスマートピクセルの制御を可能にします。NSH上のこのアプリケーションにより、コマンドを呼び出してサンプルを実行することができます。

以前の設定をクリアする

```
cd ~/nuttxspace/nuttx
make distclean
```

seeed-xiao-rp2040ボードにws2812設定を選択します。

```
./tools/configurate.sh seeed-xiao-rp2040:ws2812
```

ソースコードをコンパイルします。

```
make -j
```

コンパイルが完了したら、ボードのプログラミングに進み、シリアル通信を開いてEnterキーを3回押し、前のアプリケーションで示したのと同じ手順に従います。`?`と入力すると、ws2812アプリケーションが利用可能であることが確認できます。

```
NuttShell (NSH) NuttX-12.5.1
nsh> ?
help usage:  help [-v] [<cmd>]

    .           cp          exit        mkdir       rm          uname       
    [           cmp         expr        mkrd        rmdir       umount      
    ?           dirname     false       mount       set         unset       
    alias       dd          fdinfo      mv          sleep       uptime      
    unalias     df          free        pidof       source      usleep      
    basename    dmesg       help        printf      test        xd          
    break       echo        hexdump     ps          time        
    cat         env         kill        pwd         true        
    cd          exec        ls          reboot      truncate    

Builtin Apps:
    getprime    hello       nsh         ostest      sh          ws2812      
nsh> 

```

アプリケーションを実行する前に、フォルダ `ls /dev/` に `leds0` ファイルが作成されていることを確認することが重要です。このファイルはws2812ドライブに使用されます。

```
nsh> ls /dev/
/dev:
 console
 leds0
 null
 ttyACM0
 ttyS0

```

`ws2812 -h`と入力すると、このアプリケーションとやり取りするために受け入れられるパラメータのリストが返されます。

```
nsh> ws2812 -h
Usage: ws2812 [OPTIONS]

Arguments are "sticky".  For example, once the device path is
specified, that path will be re-used until it is changed.
  [-p path] selects the ws2812 device.  Default: /dev/leds0 Current: /dev/leds0
  [-l leds] selects number of ws2812s in the chain.  Default: 1 Current: 1
  [-r repeat] selects the number change cycles.  Default: 4 Current: 4
  [-d delay] selects delay between updates.  Default: 20000 us Current: 20000 us

```

アプリケーションを開始しましょう。`ws2812` と入力すると、LEDが色を変えるのが見えます。

```
nsh> ws2812
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-rgb.gif" style={{width:400, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
