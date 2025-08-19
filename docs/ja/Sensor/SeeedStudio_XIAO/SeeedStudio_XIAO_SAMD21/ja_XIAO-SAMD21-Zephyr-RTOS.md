---
description: XIAO SAMD21 と Zephyr(RTOS)
title:  XIAO SAMD21 と Zephyr(RTOS)
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 05/15/2025
  author: timo614
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO SAMD21 と Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## RTOSとは

今日の組み込みシステムにおいて最も重要なコンポーネントの1つが**RTOS**、つまり**リアルタイムオペレーティングシステム**です。RTOSはタスクスケジューリングからアプリケーションの実行までを担います。

**RTOS**は予測可能な実行モードを提供するよう設計されています。処理がシステムの時間制限を満たす必要がある場合にRTOSが使用されます。そのため、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小型であり、特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者が既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように縮小したり、その機能や性能特性をカスタマイズすることができます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、小型カーネルを基盤としており、リソースが制約された組み込みシステムでの使用を目的としています。これには、シンプルな組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoT無線アプリケーションまでが含まれます。

## 特徴
Zephyrは多くの機能を提供しており、その数は増え続けています。

### 豊富なカーネルサービス

Zephyrは開発において馴染みのある多くのサービスを提供します：

- *マルチスレッドサービス*：協調型、優先度ベース、非プリエンプティブ、プリエンプティブスレッドに対応し、オプションでラウンドロビンタイムスライスを提供。POSIX pthreads互換APIサポートを含む。
- *割り込みサービス*：割り込みハンドラのコンパイル時登録。
- *メモリ割り当てサービス*：固定サイズまたは可変サイズのメモリブロックの動的割り当てと解放。
- *スレッド間同期サービス*：バイナリセマフォ、カウントセマフォ、ミューテックスセマフォ。
- *スレッド間データ転送サービス*：基本的なメッセージキュー、拡張メッセージキュー、バイトストリーム。
- *電源管理サービス*：包括的なアプリケーションまたはポリシー定義のシステム電源管理と、ドライバー定義の細かいデバイス電源管理。

### 複数のスケジューリングアルゴリズム

Zephyrは包括的なスレッドスケジューリングの選択肢を提供します：
- 協調型およびプリエンプティブスケジューリング
- 最早期限優先（EDF）
- 割り込みボトムハーフまたはタスクリット動作を実装するMeta IRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でのタイムスライスを可能にする
- 複数のキューイング戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0対応
Bluetooth 5.0準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LEリンク層）。BluetoothメッシュおよびBluetooth認定準備済みBluetoothコントローラーを含む。

- 汎用アクセスプロファイル（GAP）：すべての可能なLEロールに対応
- 汎用属性プロファイル（GATT）
- ペアリングサポート：Bluetooth 4.2のセキュアコネクション機能を含む
- クリーンなHCIドライバー抽象化
- Zephyrをコントローラーとして実行するためのRaw HCIインターフェース（フルホストスタックではなく）
- 複数の人気コントローラーで検証済み
- 高い構成可能性

メッシュサポート：

- リレー、フレンドノード、低電力ノード（LPN）、およびGATTプロキシ機能
- 両方のプロビジョニングベアラーに対応（PB-ADV & PB-GATT）
- 高い構成可能性：少なくとも16k RAMを持つデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

このウィキでは、[Zephyr](https://www.zephyrproject.org/)が[XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html)をサポートする方法について説明します。このガイドを利用することで、ボードで利用可能な機能セットを活用することができます。

Zephyrを使用する最初のステップは、ローカル開発用にSDKとツールチェーンをセットアップすることです。環境に必要なセットアップ手順については、[Zephyrの入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)を参照してください。

Zephyrツールチェーンがセットアップされ、関連するSDKがダウンロードされたら、アプリケーション開発を開始できます。

Xiao SAMD21をプログラムするには、以下の手順を実行します：
1. サンプルまたはアプリケーションをビルドする
2. Xiao SAMD21を接続する
3. RSTピンをGNDにショート（テストポイントを使用）してMCUをブートローダーモードにする（または、拡張ボードに接続されたRESETボタンを素早く2回押す）
4. `west flash`を使用してファームウェアをボードにフラッシュする

最も簡単な例は、ボード上で「Hello World」サンプルを実行することです。Zephyrインストールディレクトリに移動した後、以下のコマンドを実行します。

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

RESETボタンを2回押すか、RSTピンをGNDにショートしてください：

```
west flash
```

USBが接続されたときに表示されるデバイスを確認するために、`ls /dev/tty*`を入力してデバイスのポートを見つけます。

例として、`/dev/ttyACM0`が新しく追加されたデバイスとして表示されます。

次に、screenを使用してシリアル応答を監視します：
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

Xiaoおよびその拡張ボードでZephyrを使用するプロセスを支援するために、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このウィキ記事に含まれるコマンドは、Zephyrルートに対して`../applications/xiao-zephyr-examples`に配置されていると仮定しています。以下のコマンドを更新することで、代替パスを指定することができます。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO 拡張ボード

Seeed Studio XIAO SAMD21でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、XIAO SAMD21を接続します。

その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

Grove Shield for Seeed Studio XIAOのGroveコネクタにGroveモジュールを接続する際には、以下のグラフィックに従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### 主な機能

- オンボードLED
- USB HID
- LittleFS
- TFLite

#### オンボードLED

この例では、オンボードLEDを点滅させるためにblinkyサンプルを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

RESETボタンを2回押すか、RSTピンをGNDにショートしてください：

```
west flash
```

オンボードの黄色LEDが点滅する様子が確認できます。

この例が動作する理由を少し掘り下げてみましょう。

関連するサンプルコードは`led0`を参照しています：
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これはXiao SAMD21のデバイスツリーコードでエイリアスとして定義されています：
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

これはボード上のPA17ピンに対応しています。Xiao SAMD21の回路図を確認し、MCUのピンラベルを確認することで見つけることができます。

Xiaoのブレークアウトピンを使用する場合、ボードファイルが提供するXiaoコネクタを使用することで、&portaや&portbのピンマッピングを直接使用する必要がなくなります。

例えば、D0を参照する場合、`&porta 2`または`&xiao_d 0`として参照します。

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &porta 2 0>		/* D0 */
			, <1 0 &porta 4 0>		/* D1 */
			, <2 0 &porta 10 0>		/* D2 */
			, <3 0 &porta 11 0>		/* D3 */
			, <4 0 &porta 8 0>		/* D4 */
			, <5 0 &porta 9 0>		/* D5 */
			, <6 0 &portb 8 0>		/* D6 */
			, <7 0 &portb 9 0>		/* D7 */
			, <8 0 &porta 7 0>		/* D8 */
			, <9 0 &porta 5 0>		/* D9 */
			, <10 0 &porta 6 0>		/* D10 */
			;
	};
};
```

#### USB HID

このサンプルアプリケーションでは、USB HID Mouse サンプルを使用して Xiao SAMD21 がホストコンピュータのマウスクリックをトリガーできるようにします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

RESET ボタンをダブルプレスするか、RST ピンを GND にショートしてください：

```
west flash
```

Xiao がリセットされた後、拡張ボード上のボタンを使用して左マウスボタンを制御できるようになります。テキストの上にカーソルを合わせ、ボタンを素早くダブルクリックしてみてください。通常のマウスで左クリックした場合と同様に、テキストがハイライトされるのがわかります。また、サンプルがデバイスツリーで設定された LED に依存しているため、ボタンをクリックするとオンボード LED が点灯するのも確認できます。

このサンプルでは、最大4つのボタンを設定して、マウスのボタンや方向をトリガーするように構成することができます。

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

この例では、`&xiao_d` 1 が D1 ピンを示すために使用されています。このマッピングは Xiao SAMD21 ボードファイルによって提供されており、基盤となる MCU のマッピングを知る必要がなく、Xiao のピン配置に依存して接続できるため便利です。

HID Mouse サンプルでは、ボタンは `compatible = "gpio-keys";` として設定されているかどうか、また関連するキー（マウス用に 0-3）にマッピングされているかどうかによって決定されます。この場合、`zephyr,code = <INPUT_KEY_0>;` を使用しており、これは左マウスボタンに対応しています。

`led0` エイリアスは、前のセクションで述べたように、ボードのデバイスツリーファイルによって設定されています。

#### LittleFS

この例では、LittleFS Zephyr サンプルを使用して LittleFS パーティションを作成し、ファイルをファイルシステムに保存します。その後、再接続してシリアル出力を通じてファイルがまだ存在することを確認します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESET ボタンをダブルプレスするか、RST ピンを GND にショートしてください：

```
west flash
```

フラッシュ後、MCU がリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

以下のような出力が表示されます：
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

再度シリアルモニターに接続すると、フォーマットやファイル作成が不要であることが確認できます：
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

Zephyr で TFLite を有効化し、更新します：
```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、サンプルの TFLite "Hello World" を使用し、コンソールオーバーレイと設定を組み合わせて USB シリアル経由で応答を読み取ります。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESET ボタンをダブルプレスするか、RST ピンを GND にショートしてください：

```
west flash
```

フラッシュ後、MCU がリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

コンソールから以下のような結果が返されます：
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

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD カード
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチ LCD ディスプレイモジュール、240×280 解像度、SPI インターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - 拡張ボード - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするには、Zephyr の既存のサンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

RESET ボタンを2回押すか、RST ピンを GND に短絡させます：

```
west flash
```

このディスプレイは2色のみをサポートしているため、複数の黒いボックスと隅に点滅するボックスが表示されます。

この例がなぜ動作するのかを少し掘り下げてみましょう：
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

この例のシールドオーバーレイファイルは、0x3C レジスタに SSD1306 OLED スクリーンを設定します。それが `chosen` セクションで Zephyr ディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするには、USB コンソールオーバーレイと設定ファイルを使用して Zephyr の既存のサンプルを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

RESET ボタンを2回押すか、RST ピンを GND に短絡させます：

```
west flash
```

フラッシュ後、MCU がリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

サンプルでボタンを押すと、オンボード LED が点灯します。

コンソールに以下のような結果が表示されます：

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

この例がなぜ動作するのかを少し掘り下げてみましょう：
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

アプリケーションオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、ボタンの例をオーバーレイを通じて Zephyr がボタンを設定し、関連するコードで利用できるようにします。

この場合、`&xiao_d` コネクタインターフェースを使用して D1 をボタンとして関連付けています。代わりに、MCU 上で D1 に対応するピンである `&porta 4` を使用することも可能です。

#### Grove - 拡張ボード - ブザー

PWM 信号を使用してブザーを制御するために、blinky PWM の例を使用します。このために、A3 ピンの PWM を有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

uf2 ファイルをアップロードすると、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえます。

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
	/* 最大周期は 1.4 秒 */
	prescaler = <1024>;
	#pwm-cells = <2>;

	pinctrl-0 = <&pwm_default>;
	pinctrl-names = "default";
};
```

使用されているオーバーレイは、まず既存の `pwm_led0` ノードを削除します。このボードはすでにこのエイリアスで構成されているためです。その後、A3 ピンを PWM 用に設定します。

A3 ピンは SAMD21 上の GPIO PA11 に対応しています。その関連する PWM ピンマックスが PA11E_TCC1_WO1 であるため、PWM には tcc1 タイマーを使用します。

#### Grove - 拡張ボード - SD カード

ここでは、Xiao 拡張ボードシールドを使用して SPI 経由で SD カードリーダーとインターフェースするためにファイルシステムサンプルを使用します。拡張ボードシールドには、CS ピンが `&xiao_d 2` ピンに設定されているため、この機能をボードに関連付けるためにシールドを追加する以外に作業は必要ありません。これをさらに準備するために、SD カード機能を有効にするカスタム設定を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

UF2ファイルをアップロードした後、モニターに接続します：
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

この場合、SDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を確認してみましょう：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバ、およびGPIOを有効にしています。この設定がない場合、オーバーレイはエラーを引き起こし、サンプルがSDカードを見つけることができなくなります。

Xiao Expansion Boardシールドの関連部分は、実際には以下に示すように、Xiao SAMD21用に使用される`xiao_expansion_sd.overlay`によってオーバーライドされています：

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

前述のように、`&xiao_d 2`ピンマッピングは、使用するボードが`&xiao_d`ピンセットアップをサポートしている限り、D2ピンを選択できるように使用されています。

ここでシールドのオーバーレイを使用せずにオーバーライドしている理由は、シールドによって設定された`spi-max-frequency`が`24000000`であり、これが高すぎてSAMD21が失敗するためです。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao SAMD21を拡張ボードに接続します。その後、Grove SHT31と拡張ボードのI2Cポートの1つの間にGroveコネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用し、オーバーレイと設定でUSBコンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

RESETボタンを2回押すか、RSTピンをGNDにショートします：

```
west flash
```

フラッシュ後、MCUがリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

コンソールから結果が返されます：
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

この例がなぜ機能するのかを少し掘り下げてみましょう：
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

アプリオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、SHT31の例を利用できるようになり、オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)にセンサーをボード用に設定する方法を通知します。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用して、ボードをLCDスクリーンに接続します（この場合、Xiao SAMD21を使用していますが、ここでの接続に使用されるピンレイアウトは同じです）。

| 1.69インチLCD SPIディスプレイ | XIAO SAMD21 |
| ------------------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

次に、ハードウェアを準備した状態でビルドとフラッシュを行います：
```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

RESETボタンを2回押すか、RSTピンをGNDにショートします：

```
west flash
```

新しいファームウェアがインストールされると、デバイスは拡張ボードで以前に見たデモ画面を表示しますが、今回はSPI経由でカラーLCDに更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) によってサポートされています。
- **Tim の尽力**に感謝します。あなたの作業は [こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) に展示されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>