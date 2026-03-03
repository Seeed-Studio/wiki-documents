---
description: XIAO ESP32C3 With NuttX(RTOS)
title: XIAO ESP32C3 With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.webp
slug: /ja/xiao_esp32c3_nuttx
last_update:
    date: 04/28/2025
    author: rcsim
---

# Seeed Studio XIAO ESP32C3 と NuttX(RTOS)

## はじめに

[NuttX](https://nuttx.apache.org/) は、標準準拠と小さなフットプリントで広く認知されている成熟したリアルタイムオペレーティングシステム（RTOS）です。NuttXの主な特徴の一つはスケーラビリティであり、8ビットマイクロコントローラから64ビットシステムまでの環境で使用できます。この柔軟性は、POSIXおよびANSI標準への準拠により実現されており、異なるアーキテクチャ、ファミリー、半導体ベンダーの幅広いチップで類似のNuttX機能を実験することができます。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.svg"/></div>

さらに、NuttXはUSB、Ethernet、Audio、Graphicsサブシステムなど、多くの高度で有用な機能を提供します。これらの特性により、NuttXは様々なタイプのハードウェアで動作可能な汎用性があり堅牢なRTOSを求める開発者にとって魅力的な選択肢となっています。

NuttXは膨大で継続的に拡張されているボード数をサポートしています。[公式ドキュメント](https://nuttx.apache.org/docs/latest/platforms/)では、アーキテクチャとSystem-on-Chip（SoC）シリーズ別に整理されたサポートボードの包括的なリストを提供しています。

例えば、NuttXドキュメントの[Seeed Studio XIAO ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html)ページでは、サポートされている各機能の詳細な説明とその利用方法の手順を提供しています。また、NuttXドキュメントには[Espressif ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/index.html)シリーズチップ専用のページもあり、サポートされているMCUと周辺機器のリストを確認できます。

## インストール

Nuttxドキュメントでは、異なるプラットフォーム向けの[ガイド](https://nuttx.apache.org/docs/latest/quickstart/install.html)を提供しています。Seeed Studio XIAO ESP32C3については、以下の手順に従ってください：

1. Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/)をダウンロード：

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
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

- Nuttx: カーネル、ドライバー、サブシステムの実装を含む。
- Apps: ツール、シェル、ネットワークユーティリティ、ライブラリ、インタープリターのコレクションを含む。

## アプリケーション

アプリケーションを開始するには、以下のコマンドを呼び出してNuttXに設定をロードする必要があります：

```bash
./tools/configurate.sh board_name:your_application
```

また、以下のコマンドを実行してボード対応リストを確認することも可能です：

```bash
./tools/configurate.sh -L
```

4. NuttXをビルドします（ビルドプロセスでnuttx.binを含むファームウェアバイナリが生成されます）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32c3:usbnsh
    make V=1
    ```

5. RESETボタンとBOOTボタンを使用して「ブートローダー」モードに入ることができます。電源投入時にBOOTキーを押し続けてから、RESETキーを一度押します。

6. esptool.pyを使用してファームウェアをロードします：

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## ハンズオン

NuttXを実際に探索する時間です。このセッションでは、USBNSH、COMBO、WIFI、BLEの4つのアプリケーションが利用可能です。

### USBNSH

NuttShell（NSH）はNuttXで使用されるシェルシステムで、bashや他の類似オプションと似ています。豊富な内蔵コマンドセット、スクリプト機能、および独自のアプリケーションを「builtin」（同じNuttXバイナリの一部）として実行する機能をサポートしています。NSH設定では、115200 bpsを使用してUSBでコンソールを有効にします。

前の設定をクリアしてビルドプロセスを開始できます

```bash
cd ~/nuttxspace/nuttx
make distclean
```

次に、xiao-esp32c3ボードにNSH設定を選択します：

```bash
./tools/configurate.sh xiao-esp32c3:usbnsh
```

Compile the source code.

```bash
make -j
```

ファームウェアをボードにロードし、ボードを再起動して、CDC/ACMシリアルインターフェースを使用してUSB経由でNuttShell（NSH）コンソールに接続します：

```bash
picocom -b 115200 /dev/ttyACM0
```

NuttShellコンソールにアクセス：

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 6b4bc72626-dirty Apr 26 2025 17:40:37 risc-v esp32c3-xiao
nsh> 
```

`?` を入力すると、コマンドと組み込みアプリケーションの利用可能なオプションにアクセスできます。

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

### GPIO

この設定はgpioサンプルアプリケーションを有効にします。汎用入出力（GPIO）はマイクロコントローラーの最も基本的な部分であり、外部世界との接続を可能にします。この方法でNSHを使用してこれらのピンにアクセスし、必要に応じて設定します。しかし、まず前の設定をクリアしましょう。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32c3ボードにgpio設定を選択します。

```bash
./tools/configurate.sh xiao-esp32c3:gpio
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

このアプリケーションとの対話で受け入れられるオプションを確認するには、`gpio -h` と入力してください。パラメータのリストが返されます。

```bash
NuttShell (NSH) NuttX-12.9.0
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

GPIOデバイスファイルが作成されたことを確認するには、`ls/dev`と入力してください。入力後、boards/risc-v/esp32c3/esp32c3-xiao/src/esp32c3_gpio.cで宣言定義されたいくつかのgpioが表示されます。これらは以下を表しています：

- GPIO
  - 1つのIRQを持つ入力    -> GPIO3
  - 1つの出力          -> GPIO2

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyACM0
 ttyS0
 zero
nsh> 
```

これらのコマンドに従ってGPIO1(/dev/gpio1)を読み取り（割り込みあり）、GPIO2(/dev/gpio0)に書き込む。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
nsh> 
nsh> gpio -o 0 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio -w 1 /dev/gpio1
Driver: /dev/gpio1
  Interrupt pin: Value=0
  Verify:        Value=1
```

以下のgpioのデモ動画をご確認ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-gpio.mp4" type="video/mp4" />
  </video>
</div>

### WIFI

この設定により、以下のコマンドを使用して設定および初期化できるwlanネットワークインターフェースが有効になります：

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

この場合、SSID myssid のアクセスポイントへの接続が行われ、パスワードとして mypasswd が使用されます。IP アドレスは renew コマンドを使用して DHCP 経由で取得されます。その後 ifconfig を実行して結果を確認できます。

まず、以前の設定をクリアすることから始めましょう：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32c3ボードにwifi設定を選択します。

```bash
./tools/configurate.sh xiao-esp32c3:wifi
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

WAPI コマンドを [WAPI NuttX ドキュメント](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html) に記載されている通りに使用できるようになりました。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> wapi psk wlan0 nuttxpwd 3
nsh> wapi essid wlan0 nuttxnw 1
nsh> renew wlan0
nsh> ifconfig
wlan0   Link encap:Ethernet HWaddr a0:85:e3:0e:4a:30 at RUNNING mtu 576
        inet addr:192.168.59.144 DRaddr:192.168.59.134 Mask:255.255.255.0

nsh> ping 8.8.8.8
PING 8.8.8.8 56 bytes of data
56 bytes from 8.8.8.8: icmp_seq=0 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=1 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=2 time=30.0 ms
56 bytes from 8.8.8.8: icmp_seq=3 time=60.0 ms
56 bytes from 8.8.8.8: icmp_seq=4 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=5 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=6 time=140.0 ms
56 bytes from 8.8.8.8: icmp_seq=7 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=8 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=9 time=30.0 ms
10 packets transmitted, 10 received, 0% packet loss, time 10100 ms
rtt min/avg/max/mdev = 30.000/64.000/140.000/34.985 ms
nsh> nslookup google.com
Host: google.com Addr: 142.251.128.238
nsh> nslookup nuttx.apache.org
Host: nuttx.apache.org Addr: 151.101.2.132
```

以下のwifiのデモ動画をご確認ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

### BLE

この設定は、ESP32-C3チップのBluetooth Low Energy（BLE）を有効にするために使用されます。

まず、以前の設定をクリアすることから始めましょう：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

xiao-esp32c3ボードにble設定を選択します。

```bash
./tools/configurate.sh xiao-esp32c3:ble
```

ソースコードをコンパイルします。

```bash
make -j
```

ファームウェアをボードにロードし、miniconやpicocomなどのシリアル通信プログラムを実行してください：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

BT コマンドを [btsak NuttX ドキュメント](https://nuttx.apache.org/docs/latest/applications/wireless/btsak/index.html) に記載されている通りに使用できるようになりました。

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> bt bnep0 scan start
nsh> bt bnep0 scan stop
nsh> bt bnep0 scan get
Scan result:
 1.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -92
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 2.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -91
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 3.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 4.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   4
        advertiser data:
 5.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -97
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26 
```

以下のBLEのデモ動画をご確認ください：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-ble.mp4" type="video/mp4" />
  </video>
</div>

NuttX RTOSの詳細については、[NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)をご覧ください。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
