---
description: XIAO SAMD21 と Zephyr(RTOS)
title: XIAO SAMD21 と Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-SAMD21-Zephyr-RTOS/
---

# XIAO SAMD21 と Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## RTOS とは

今日の組み込みシステムで最も重要なコンポーネントの 1 つが **RTOS**（**Real-Time Operating System**、リアルタイムオペレーティングシステム）であり、タスクスケジューリングからアプリケーションの実行まで、あらゆることを担当します。

**RTOS** は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制約を満たさなければならない場合に RTOS が使用されます。そのため、GPOS（General Purpose Operating System、汎用オペレーティングシステム）と比較して、RTOS は通常軽量かつ小型であり、一般的に特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存の RTOS を変更し、特定のアプリケーションに必要な機能だけを提供するように縮小したり、その機能や性能特性をカスタマイズしたりすることができます。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小さなフットプリントのカーネルをベースとしており、リソースに制約のある組み込みシステムでの使用を目的としています。シンプルな環境センサーや LED ウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoT ワイヤレスアプリケーションまで対応します。

## 特長

Zephyr は、数多くの、そして増え続けている機能を提供します。

### 充実したカーネルサービス群

Zephyr は開発向けに、次のような馴染みのあるサービスを提供します。

- *マルチスレッドサービス*：協調型、優先度ベース、非プリエンプティブ、およびプリエンプティブスレッド向けで、オプションとしてラウンドロビンタイムスライスをサポートします。POSIX pthreads 互換の API サポートを含みます。
- *割り込みサービス*：割り込みハンドラのコンパイル時登録。
- *メモリアロケーションサービス*：固定サイズまたは可変サイズのメモリブロックの動的な割り当てと解放。
- *スレッド間同期サービス*：バイナリセマフォ、カウンティングセマフォ、ミューテックスセマフォ。
- *スレッド間データ受け渡しサービス*：基本メッセージキュー、拡張メッセージキュー、バイトストリーム。
- *電源管理サービス*：包括的でアプリケーションまたはポリシー定義のシステム電源管理と、ドライバ定義のきめ細かなデバイス電源管理。

### 複数のスケジューリングアルゴリズム

  Zephyr は包括的なスレッドスケジューリングの選択肢を提供します。

- 協調型およびプリエンプティブスケジューリング
- Earliest Deadline First (EDF)
- 「割り込みボトムハーフ」または「タスクレット」動作を実装する Meta IRQ スケジューリング
- タイムスライシング：同一優先度のプリエンプティブスレッド間でのタイムスライスを有効化
- 複数のキューイング戦略：
  - シンプルなリンクリストレディキュー
  - 赤黒木レディキュー
  - 従来型マルチキューレディキュー

### Bluetooth Low Energy 5.0 対応

Bluetooth 5.0 準拠 (ESR10) および Bluetooth Low Energy コントローラサポート（LE Link Layer）。Bluetooth Mesh と、Bluetooth 認証取得済みの Bluetooth コントローラを含みます。

- すべての LE ロールに対応した Generic Access Profile (GAP)
- Generic Attribute Profile (GATT)
- Bluetooth 4.2 の Secure Connections 機能を含むペアリングサポート
- クリーンな HCI ドライバ抽象化
- Zephyr をフルホストスタックではなくコントローラとして動作させるための Raw HCI インターフェース
- 複数の一般的なコントローラで検証済み
- 高いコンフィギュラビリティ

Mesh サポート：

- Relay、Friend Node、Low-Power Node (LPN)、GATT Proxy 機能
- 両方のプロビジョニングベアラー（PB-ADV と PB-GATT）をサポート
- 高いコンフィギュラビリティで、少なくとも 16k RAM を持つデバイスに収まります

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

この wiki では、[XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html) に対する [Zephyr](https://www.zephyrproject.org/) のサポートについて説明します。このガイドを利用することで、ボードで利用可能な機能セットを活用できるようになります。

Zephyr を扱う最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。お使いの環境に必要なセットアップ手順については、[Zephyr getting started guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンがセットアップされ、対応する SDK がダウンロードされたら、アプリケーション開発を開始できます。

Xiao SAMD21 をプログラムするには、次の手順を実行します。

1. サンプルまたは自分のアプリケーションをビルドする
2. Xiao SAMD21 を接続する
3. RST ピンを GND にショートさせて（見えているテストポイントを使用）、MCU をブートローダーモードで起動する（または、接続された拡張ボード上の RESET ボタンを素早く 2 回押す）
4. `west flash` を使用してファームウェアをボードに書き込む

最も簡単な例は、ボード上で "Hello World" サンプルを実行することです。Zephyr インストールディレクトリに移動した後、次のコマンドを実行します。

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

RESET を 2 回押すか、RST ピンを GND にショートさせます。

```
west flash
```

`ls /dev/tty*` と入力してデバイスのポートを探し、USB を接続したときにどのデバイスが現れるかを確認します。

この例では、新しく追加されたデバイスとして `/dev/ttyACM0` が表示されます。

screen を使用して接続し、シリアル応答をモニタできます。

```
screen /dev/ttyACM0 115200
```

次のような応答が表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用されている複数のオーバーレイと設定を含むリポジトリが作成されています。この wiki 記事に含まれるコマンドは、Zephyr ルートから相対パスで `../applications/xiao-zephyr-examples` に配置されていることを前提としています。別のパスを使用する場合は、以下のコマンド内のパスを更新してください。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェアの準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向けの知識

#### XIAO 拡張ボード

  Seeed Studio XIAO SAMD21 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO SAMD21 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">インタラクティブピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際は、以下の図に従って、適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### 主要な機能

- オンボード LED
- USB HID
- LittleFS
- TFLite

#### オンボード LED

この例では、blinky サンプルを使用してオンボード LED を点滅させます。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

RESET を 2 回押すか、RST ピンを GND にショートさせます。

```
west flash
```

オンボードの黄色い LED がオンとオフを切り替え、点滅しているのが確認できます。

なぜこの例が動作するのか、少し掘り下げてみましょう。

関連するサンプルコードでは led0 を参照しています。

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これはエイリアスを介して Xiao SAMD21 の devicetree コード内で定義されています。

```
 aliases {
  led0 = &led;
 };

 leds {
  compatible = "gpio-leds";
  led: led_0 {
   gpios = <&porta 17 GPIO_ACTIVE_LOW>;
   label = "LED";
  };
 };
```

これはボード上の PA17 ピンに対応しています。これは、Xiao SAMD21 の回路図で MCU を確認し、ピンのラベルを確認することで分かります。

Xiao ブレークアウトのピンについては、&porta や &portb のピンマッピングを直接使用する必要はありません。ボードファイルが Xiao コネクタを提供しており、インターフェースが簡素化されているためです。

例えば D0 を参照する場合、`&porta 2` または `&xiao_d 0` のいずれかとして参照します。

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &porta 2 0>  /* D0 */
   , <1 0 &porta 4 0>  /* D1 */
   , <2 0 &porta 10 0>  /* D2 */
   , <3 0 &porta 11 0>  /* D3 */
   , <4 0 &porta 8 0>  /* D4 */
   , <5 0 &porta 9 0>  /* D5 */
   , <6 0 &portb 8 0>  /* D6 */
   , <7 0 &portb 9 0>  /* D7 */
   , <8 0 &porta 7 0>  /* D8 */
   , <9 0 &porta 5 0>  /* D9 */
   , <10 0 &porta 6 0>  /* D10 */
   ;
 };
};
```

#### USB HID

このサンプルアプリケーションでは、USB HID Mouse サンプルを使用して、Xiao SAMD21 がホストコンピュータのマウスクリックをトリガーできるようにします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます：

```
west flash
```

Xiao がリセットされた後は、拡張ボード上のボタンを使って左クリックボタンを制御できるようになっているはずです。テキストの上にカーソルを置き、ボタンを素早くダブルクリックしてみてください。通常のマウスで左クリックした場合と同様に、テキストがハイライト表示されるのが分かります。また、このサンプルでは devicetree で LED も設定されているため、ボタンをクリックするとオンボード LED が点灯することにも気付くでしょう。

このサンプルでは、最大 4 つのボタンを設定して、サンプル用途としてマウスのボタンおよび方向をトリガーできるように、追加のボタンを設定することもできます。

```
 buttons {
  compatible = "gpio-keys";
  xiao_button0: button_0 {
   gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
   label = "SW0";
   zephyr,code = <INPUT_KEY_0>;
  };
 };

 aliases {
  sw0 = &xiao_button0;
 };
```

ここでの例から分かるように、`&xiao_d` 1 は D1 ピンを示すために使用されています。このマッピングは Xiao SAMD21 のボードファイルによって提供されており、基盤となる MCU のマッピングを知る必要はなく、Xiao のピン配置に依存できるため、特定のピンへの接続が容易になります。

HID Mouse サンプルでは、ボタンは `compatible = "gpio-keys";` であるかどうかと、対応するキー（マウス用に 0〜3）のマッピングがあるかどうかによって決定されます。この場合、左クリックボタンに対応する `zephyr,code = <INPUT_KEY_0>;` を使用しています。

`led0` エイリアスは、前のセクションで述べたように、ボードの devicetree ファイルによって設定されています。

#### LittleFS

この例では、littlefs の Zephyr サンプルを使用して littlefs パーティションを作成し、ファイルシステムにファイルを保存します。その後、再接続してシリアル出力を通して、ファイルがまだ存在することを確認します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます：

```
west flash
```

フラッシュ後に MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

これを読み込むと、次のような出力が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
E: WEST_TOPDIR/modules/fs/littlefs/lfs.c:1351: Corrupted dir pair at {0x0, 0x1}
W: can't mount (LFS -84); formatting
I: /lfs mounted
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 62

Listing dir /lfs ...
/lfs/boot_count read count:0 (bytes: 0)
/lfs/boot_count write new boot count 1: [wr:1]
I: Test file: /lfs/pattern.bin not found, create one!
------ FILE: /lfs/pattern.bin ------
01 55 55 55 55 55 55 55 02 55 55 55 55 55 55 55
03 55 55 55 55 55 55 55 04 55 55 55 55 55 55 55
05 55 55 55 55 55 55 55 06 55 55 55 55 55 55 55
07 55 55 55 55 55 55 55 08 55 55 55 55 55 55 55
09 55 55 55 55 55 55 55 0a 55 55 55 55 55 55 55
0b 55 55 55 55 55 55 55 0c 55 55 55 55 55 55 55
```

```
screen /dev/ttyACM0 115200
```

再度シリアルモニタに接続すると、フォーマットは行われず、ファイルを作成する必要もないことが分かります：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 59

Listing dir /lfs ...
[FILE] boot_count (size = 1)
[FILE] pattern.bin (size = 547)
/lfs/boot_count read count:1 (bytes: 1)
/lfs/boot_count write new boot count 2: [wr:1]
------ FILE: /lfs/pattern.bin ------
02 55 55 55 55 55 55 55 03 55 55 55 55 55 55 55
04 55 55 55 55 55 55 55 05 55 55 55 55 55 55 55
06 55 55 55 55 55 55 55 07 55 55 55 55 55 55 55
08 55 55 55 55 55 55 55 09 55 55 55 55 55 55 55
0a 55 55 55 55 55 55 55 0b 55 55 55 55 55 55 55
0c 55 55 55 55 55 55 55 0d 55 55 55 55 55 55 55
0e 55 55 55 55 55 55 55 0f 55 55 55 55 55 55 55
10 55 55 55 55 55 55 55 11 55 55 55 55 55 55 55
12 55 55 55 55 55 55 55 13 55
```

#### TFLite - Hello World

Zephyr で TFLite を有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、USB シリアル経由で応答を読み取るために、コンソール用の overlay と conf と共に、サンプルの tflite「Hello World」を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます：

```
west flash
```

フラッシュ後に MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから次のような結果が返されるのが分かります：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD カード
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr の既存サンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます：

```
west flash
```

このディスプレイは 2 色のみをサポートしているため、複数の黒いボックスと、隅で点滅するボックスが表示されるのが分かります。

なぜ動作するのかを確認するために、この例を少し掘り下げてみましょう：

```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
```

この例のシールドの overlay ファイルでは、0x3C レジスタに SSD1306 OLED 画面を設定しています。これは chosen セクションで Zephyr の display として選択されています。

#### Grove - Expansion Board - ボタン

このセットアップをテストするために、USB コンソール用の overlay と conf と共に使用する Zephyr の既存サンプルを利用できます。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます：

```
west flash
```

フラッシュ後に MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

このサンプルでボタンを押すと、オンボード LED が点灯します。

コンソールから次のような結果が返されるのが分かります：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@41004400 pin 4
Set up LED at gpio@41004400 pin 17
Press the button
Button pressed at 420744116
Button pressed at 454208099
Button pressed at 484598863
Button pressed at 518217016
Button pressed at 550754013
Button pressed at 591496990
```

なぜ動作するのかを確認するために、この例を少し掘り下げてみましょう：

```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

app オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、オーバーレイが Zephyr にボタンを構成させ、関連するコードで利用できるようにするため、ボタンのサンプルを活用できます。

この場合、&xiao_d コネクタインターフェースを使用して D1 をボタンとして関連付けています。別の方法として、ここでは `&porta 4` のように `&porta` インターフェースを使用することもでき、これは D1 に対応する MCU 上のピンです。

#### Grove - Expansion Board - ブザー

ブザーを有効にするために、blinky PWM サンプルを使用して PWM 信号によってその動作を制御します。このために、A3 ピンで PWM を有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

uf2 ファイルを書き込むと、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえ始めるはずです。

なぜこれが動作するのか見てみましょう：

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };

    pwm_leds {
        status = "okay";
        compatible = "pwm-leds";

        pwm_led0: pwm_led_0 {
            pwms = <&tcc1 1 PWM_HZ(880) >;
        };
    };
};

&pinctrl {
 pwm_default: pwm_default {
  group1 {
   pinmux = <PA11E_TCC1_WO1>;
  };
 };
};

&tcc1 {
 status = "okay";
 compatible = "atmel,sam0-tcc-pwm";
 /* Gives a maximum period of 1.4 s */
 prescaler = <1024>;
 #pwm-cells = <2>;

 pinctrl-0 = <&pwm_default>;
 pinctrl-names = "default";
};
```

使用しているオーバーレイでは、まずこのボードにはすでにこのエイリアスが設定されているため、既存の `pwm_led0` ノードを削除します。その後、A3 ピンを PWM 用に構成します。

SAMD21 上の GPIO PA11 に対応する A3 ピンを使用しています。対応する PWM pinmux が PA11E_TCC1_WO1 であるため、PWM には tcc1 タイマを使用します。

#### Grove - Expansion Board - SD カード

ここでは filesystem サンプルと Xiao Expansion Board シールドを使用して、SPI 経由で SD カードリーダーとのインターフェースを試します。Expansion Board シールドでは、CS ピンが対応する `&xiao_d 2` ピンに設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は不要です。さらに準備として、SD カード機能を有効にするカスタム config を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

uf2 ファイルを書き込んだら、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.197,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 10000000Hz
[00:00:00.198,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

この場合、私の SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで動作している関連要素を確認してみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する config では、SPI、SDMMC ディスクドライバ、および GPIO を有効にしています。この config がないと、サンプルが SD カードを見つけられないため、オーバーレイはエラーにつながります。

Xiao Expansion Board シールドの該当部分は、実際には以下に示す Xiao SAMD21 用に使用される `xiao_expansion_sd.overlay` によって、この例では上書きされています：

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc0: sdhc@0 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <0>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <10000000>;
 };
};
```

前述のとおり、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピンセットアップをサポートするボードであればどれでも、D2 ピンを選択できるようにするために使用されています。

ここでシールドのオーバーレイを使用せずに上書きしている理由は、シールドによって設定されている `spi-max-frequency` の `24000000` が高すぎて、SAMD21 が動作に失敗してしまうためです。

#### Grove - 温湿度センサ (SHT31)

まずピンをはんだ付けし、Xiao SAMD21 を Expansion Board に接続します。次に、Grove SHT31 と Expansion Board 上の I2C ポートの 1 つの間を Grove コネクタケーブルで接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

この構成をテストするために、Zephyr にある既存のサンプルを使用し、オーバーレイと conf で USB コンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESET を 2 回押すか、RST ピンを GND にショートさせます：

```
west flash
```

フラッシュ後に MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから結果が返されるのが確認できます：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 26.13 Cel ; 47.34 %RH
SHT3XD: 26.11 Cel ; 46.93 %RH
SHT3XD: 26.14 Cel ; 46.78 %RH
SHT3XD: 26.17 Cel ; 46.60 %RH
SHT3XD: 26.19 Cel ; 46.25 %RH
SHT3XD: 26.21 Cel ; 46.01 %RH
SHT3XD: 26.21 Cel ; 45.82 %RH
SHT3XD: 26.23 Cel ; 46.28 %RH
SHT3XD: 26.27 Cel ; 47.11 %RH
SHT3XD: 26.27 Cel ; 47.72 %RH
```

なぜこのサンプルが動作するのか、少し掘り下げてみましょう：

```
&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};
```

app オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)に対して、センサをこのボード向けにどのように構成するかを知らせるため、SHT31 サンプルを活用できます。

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

この例では、SPI を使用して 240x280 解像度の 1.69 インチ LCD に接続します。

まず、以下の画像をガイドとして使用し、ボードを LCD 画面に接続します（この例では Xiao SAMD21 を使用していますが、ここでの接続には同じピン配置が使用されます）。

| 1.69-inch LCD SPI Display| XIAO SAMD21 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

次に、ハードウェアの準備ができたらビルドしてフラッシュします：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

RESET を 2 回押すか、RST ピンを GND にショートさせます：

```
west flash
```

新しいファームウェアが書き込まれると、デバイスには先ほど Expansion Board 上で見たのと同じデモ画面が表示されますが、今回は SPI 経由のカラー LCD 用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) によってサポートされています。
- **Tim の尽力**に感謝します。あなたの成果は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
