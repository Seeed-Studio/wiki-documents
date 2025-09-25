---
description: XIAO SAMD21 With Zephyr(RTOS)
title:  XIAO SAMD21 With Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
---

# XIAO SAMD21 と Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## RTOSとは

今日の組み込みシステムの最も重要なコンポーネントの一つが**RTOS**（**リアルタイムオペレーティングシステム**）であり、タスクスケジューリングからアプリケーションの実行まで、すべてを担当しています。

**RTOS**は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制限を満たす必要がある場合、RTOSが使用されます。そのため、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小さく、一般的に特定のハードウェア上で特定のタイプのアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように絞り込んだり、その機能や性能特性をカスタマイズしたりできます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、リソース制約のある組み込みシステムでの使用を目的として設計された小さなフットプリントカーネルに基づいています：シンプルな組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまで。

## 機能

Zephyrは多数の機能を提供し、その数は絶えず増加しています：

### 豊富なカーネルサービス群

Zephyrは開発のための多くの馴染みのあるサービスを提供します：

- *マルチスレッドサービス* - 協調的、優先度ベース、非プリエンプティブ、およびプリエンプティブスレッドに対応し、オプションでラウンドロビンタイムスライシングを提供。POSIX pthreads互換API サポートを含む。
- *割り込みサービス* - 割り込みハンドラーのコンパイル時登録。
- *メモリ割り当てサービス* - 固定サイズまたは可変サイズメモリブロックの動的割り当てと解放。
- *スレッド間同期サービス* - バイナリセマフォ、カウンティングセマフォ、ミューテックスセマフォ。
- *スレッド間データ受け渡しサービス* - 基本メッセージキュー、拡張メッセージキュー、バイトストリーム。
- *電力管理サービス* - 包括的、アプリケーションまたはポリシー定義のシステム電力管理と、きめ細かいドライバー定義のデバイス電力管理。

### 複数のスケジューリングアルゴリズム

  Zephyrは包括的なスレッドスケジューリング選択肢を提供します：

- 協調的およびプリエンプティブスケジューリング
- Earliest Deadline First (EDF)
- "割り込みボトムハーフ"または"タスクレット"動作を実装するMeta IRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でのタイムスライシングを有効化
- 複数のキューイング戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0サポート

Bluetooth 5.0準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LE Link Layer）。Bluetooth meshとBluetooth認定対応Bluetoothコントローラーを含む。

- すべての可能なLEロールを持つGeneric Access Profile (GAP)
- Generic Attribute Profile (GATT)
- Bluetooth 4.2のSecure Connections機能を含むペアリングサポート
- クリーンなHCIドライバー抽象化
- 完全なHostスタックの代わりにZephyrをコントローラーとして実行するためのRaw HCIインターフェース
- 複数の人気コントローラーで検証済み
- 高度に設定可能

Meshサポート：

- Relay、Friend Node、Low-Power Node (LPN)、GATT Proxy機能
- 両方のProvisioningベアラーをサポート（PB-ADV & PB-GATT）
- 高度に設定可能で、最低16k RAMのデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

このwikiは[XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html)の[Zephyr](https://www.zephyrproject.org/)サポートについて説明します。このガイドの支援により、ボードで利用可能な機能セットを活用できるようになります。

Zephyrを使用する最初のステップは、ローカル開発用のSDKとツールチェーンをセットアップすることです。お使いの環境に必要な関連セットアップ手順については、[Zephyr入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)を参照してください。

Zephyrツールチェーンがセットアップされ、関連するSDKがダウンロードされたら、アプリケーション開発を開始できます。

Xiao SAMD21をプログラムするには、以下の手順を実行できます：

1. サンプルまたはアプリケーションをビルドする
2. Xiao SAMD21を接続する
3. RSTピンをGNDにショートさせて（見えるテストポイントを使用）、MCUをブートローダーモードで起動する（または接続された拡張ボードのRESETボタンを素早く2回連続で押す）
4. `west flash`を使用してファームウェアをボードにフラッシュする

最も簡単な例は、ボード上で「Hello World」サンプルを実行することです。Zephyrインストールのディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

RESETを2回押すか、RSTピンをGNDにショートしてください：

```
west flash
```

`ls /dev/tty*` と入力してデバイスのポートを見つけ、USBが接続されたときに表示されるデバイスを確認してください。

私の例では、新しく追加されたデバイスとして `/dev/ttyACM0` が表示されています。

screen を使用して接続し、シリアル応答を監視できます：

```
screen /dev/ttyACM0 115200
```

以下のような応答が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

Xiaoとその拡張ボードでZephyrを使用するプロセスを支援するため、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このwiki記事に含まれるコマンドは、zephyrルートに対して相対的に`../applications/xiao-zephyr-examples`に配置されていることを前提としています。以下のコマンドでパスを更新することで、代替パスを提供できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Seeed Studio 拡張ボード</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO拡張ボード

  Seeed Studio XIAO SAMD21でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO SAMD21を接続します。

  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  GroveモジュールをSeeed Studio XIAO用GroveシールドのGroveコネクタに接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### 主要機能

- オンボードLED
- USB HID
- LittleFS
- TFLite

#### オンボードLED

この例では、blinkサンプルを使用してオンボードLEDを点滅させます。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

RESETボタンを2回押すか、RSTピンをGNDにショートさせます：

```
west flash
```

オンボードの黄色LEDがオンとオフを切り替わり、点滅効果を作り出すのが見えるでしょう。

この例がなぜ動作するのかを理解するために、少し詳しく見てみましょう。

関連するサンプルコードはled0を参照しています：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これは、Xiao SAMD21 デバイスツリーコードでエイリアスを介して定義されています：

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

ボード上のPA17ピンに対応しています。これは、Xiao SAMD21 回路図でMCUを確認し、ピンのラベリングを見ることで見つけることができます。

Xiaoブレークアウトのピンについては、ボードファイルがインターフェースを簡素化するXiaoコネクタを提供しているため、&portaと&portbのピンマッピングを直接使用する必要はありません。

例えば、D0を参照する場合、`&porta 2`または`&xiao_d 0`として参照します。

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

このサンプルアプリケーションでは、USB HID Mouseサンプルを使用して、Xiao SAMD21がホストコンピュータのマウスクリックをトリガーできるようにします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

RESETボタンをダブルプレスするか、RSTピンをGNDにショートさせます：

```
west flash
```

Xiaoがリセットされた後、拡張ボードのボタンを使って左マウスボタンを制御できるようになります。テキストの上にカーソルを合わせて、ボタンを素早くダブルクリックしてみてください。通常のマウスで左クリックするのと同様に、テキストがハイライトされるのが確認できます。また、ボタンをクリックするとオンボードLEDが点灯することにも気づくでしょう。これは、サンプルがデバイスツリーで設定されたLEDにも依存しているためです。

このサンプルでは追加のボタンも設定可能で、サンプル用途として最大4つのボタンを設定してマウスのボタンと方向の両方をトリガーできます。

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

ここでは例から、`&xiao_d` 1がD1ピンを示すために使用されていることがわかります。このマッピングはXiao SAMD21ボードファイルによって提供され、基盤となるMCUマッピングを知る必要がなく、Xiaoピンアウトに依存できるため、特定のピンへの接続が便利になります。

HID Mouseサンプルでは、ボタンは`compatible = "gpio-keys";`であるかどうか、および関連するキー（マウスの場合は0-3）へのマッピングがあるかどうかによって決定されます。この場合、左マウスボタンに対応する`zephyr,code = <INPUT_KEY_0>;`を使用しています。

`led0`エイリアスは、前のセクションで述べたように、ボードのdevicetreeファイルによって設定されます。

#### LittleFS

この例では、littlefs zephyrサンプルを使用してlittlefsパーティションを作成し、ファイルをファイルシステムに保存します。その後、再接続してシリアル出力を通じてファイルがまだ存在することを確認します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください：

```
west flash
```

フラッシュ後にMCUがリセットされるまで少し待ってから、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

これがロードされると、以下のような表示が見えるはずです：

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

再度シリアルモニターに接続すると、フォーマットは表示されず、ファイルを作成する必要もありません：

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

ZephyrでTFLiteを有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、サンプルのtflite「Hello World」をコンソールオーバーレイと設定と組み合わせて使用し、USBシリアル経由でレスポンスを読み取ります。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください：

```
west flash
```

フラッシュ後にMCUがリセットされるまで少し待ってから、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

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

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SDカード
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - 拡張ボード - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください：

```
west flash
```

この表示では、複数の黒いボックスと角で点滅するボックスが表示されます。この表示は2色のみをサポートしているためです。

この例がなぜ機能するのかを詳しく見てみましょう：

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

この例のシールドオーバーレイファイルは、0x3Cレジスタに SSD1306 OLED スクリーンを設定します。これは chosen セクションで zephyr ディスプレイとして選択されます。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、USB コンソールオーバーレイと conf と一緒に使用する Zephyr の既存のサンプルを使用できます。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

RESETを2回押すか、RSTピンをGNDにショートさせます：

```
west flash
```

フラッシュ後にMCUがリセットされるまで少し待ってから、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

ボタンをサンプルで押すと、オンボードLEDが点灯します。

コンソールから結果が返されるのが確認できます：

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

この例を少し詳しく見て、なぜ動作するのかを理解しましょう：

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

アプリオーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、ボタンの例を活用できます。オーバーレイによりZephyrがボタンを設定し、関連するコードで使用できるようになります。

この場合、&xiao_d コネクタインターフェースを使用してD1をボタンとして関連付けています。代替として、ここで `&porta` インターフェースを `&porta 4` として使用することもできます。これはD1に関連付けられたMCU上の対応するピンです。

#### Grove - 拡張ボード - ブザー

blinky PWMの例を使用してブザーを有効化し、PWM信号を介してその動作を制御します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

uf2ファイルをアップロードした後、サンプルが実行される過程で音が変化する一連のブザー音が聞こえ始めるはずです。

これがなぜ動作するのかを見てみましょう：

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

使用中のオーバーレイは、まず既存の `pwm_led0` ノードを削除します。このボードは既にこのエイリアスで設定されているためです。その後、A3ピンをPWMとして使用するように設定します。

A3ピンを使用しており、これはSAMD21のGPIO PA11に対応しています。関連するPWM pinmuxがPA11E_TCC1_WO1であることから、PWMにはtcc1タイマーを使用します。

#### Grove - 拡張ボード - SDカード

ここではファイルシステムサンプルとXiao拡張ボードシールドを使用して、SPI経由でSDカードリーダーとのインターフェースを試します。拡張ボードシールドは、関連する `&xiao_d 2` ピン用にCSピンが設定されているため、この機能をボードに関連付けるためにシールドを追加する以外に作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

uf2ファイルをアップロードした後、モニターに接続します：

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

この場合、私のSDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を見てみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバー、およびGPIOを有効にしています。この設定がないと、サンプルがSDカードを見つけることができないため、オーバーレイはエラーを引き起こします。

Xiao拡張ボードシールドの関連部分は、実際にはこの例では、以下に示すXiao SAMD21に使用される`xiao_expansion_sd.overlay`によってオーバーライドされています：

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

前述のように、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なくD2ピンを選択できるようにするために使用されます。

ここでシールドのオーバーレイを使用せずにオーバーライドしている理由は、シールドによって設定された `spi-max-frequency` の `24000000` が高すぎて、SAMD21 が失敗する原因となるためです。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao SAMD21 を拡張ボードに接続します。次に、Grove SHT31と拡張ボード上のI2Cポートの1つの間にgroveコネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr の既存のサンプルを使用し、オーバーレイとconfでUSBコンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください：

```
west flash
```

フラッシュ後にMCUがリセットされるまで少し待ってから、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

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

この例を少し詳しく見て、なぜ動作するのかを理解してみましょう：

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

アプリオーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、SHT31の例を活用できます。オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)に対して、私たちのボード用にセンサーを設定する方法を通知するためです。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、240x280解像度の1.69インチLCDに接続するためにSPIを使用します。

まず、以下の画像をガイドとして使用してボードをLCDスクリーンに接続してください（この場合はXiao SAMD21を使用していますが、接続には同じピンレイアウトが使用されます）。

| 1.69インチLCD SPIディスプレイ| XIAO SAMD21 |
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

次に、ハードウェアの準備ができたら、ビルドとフラッシュを実行できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください：

```
west flash
```

新しいファームウェアが配置されると、デバイスは以前に拡張ボードで見たのと同じデモ画面を表示しますが、今度はSPI経由のカラーLCD用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601)によってサポートされています。
- **Timの努力**に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
