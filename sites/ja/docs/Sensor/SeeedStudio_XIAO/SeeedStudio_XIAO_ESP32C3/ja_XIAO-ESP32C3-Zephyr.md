---
description: XIAO ESP32C3 と Zephyr(RTOS)
title: XIAO ESP32C3 と Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-ESP32C3-Zephyr/
---

# XIAO ESP32C3 と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## RTOS とは

今日の組み込みシステムで最も重要なコンポーネントの 1 つが **RTOS**（**Real-Time Operating System（リアルタイムオペレーティングシステム）**）であり、タスクスケジューリングからアプリケーションの実行まで、あらゆることを担っています。

**RTOS** は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制約を満たさなければならない場合に RTOS が使用されます。そのため、GPOS（General Purpose Operating System、汎用オペレーティングシステム）と比較して、RTOS は通常軽量かつ小型であり、一般的に特定のハードウェア上で特定タイプのアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存の RTOS を変更し、特定のアプリケーションに必要な機能だけを提供するように縮小したり、機能や性能特性をカスタマイズしたりすることができます。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小さなフットプリントのカーネルをベースとしており、リソースに制約のある組み込みシステムでの使用を目的に設計されています。シンプルな環境センサーや LED ウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoT 無線アプリケーションまで対応します。

## 特長

Zephyr は、数多くの、そして今も増え続けている機能を提供します。

### 充実したカーネルサービス群

Zephyr は開発向けに、次のような馴染みのあるサービスを多数提供します。

- 協調型、優先度ベース、非プリエンプティブおよびプリエンプティブスレッドに対する *マルチスレッドサービス*（オプションのラウンドロビンタイムスライシングを含む）。POSIX pthreads 互換の API サポートを含みます。
- 割り込みハンドラをコンパイル時に登録するための *割り込みサービス*。
- 固定サイズまたは可変サイズのメモリブロックを動的に割り当ておよび解放するための *メモリアロケーションサービス*。
- バイナリセマフォ、カウンティングセマフォ、ミューテックスセマフォ用の *スレッド間同期サービス*。
- 基本メッセージキュー、拡張メッセージキュー、バイトストリーム用の *スレッド間データ受け渡しサービス*。
- システム全体、アプリケーションまたはポリシー定義のシステム電源管理、およびドライバ定義のきめ細かなデバイス電源管理といった *電源管理サービス*。

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

Bluetooth 5.0 準拠（ESR10）および Bluetooth Low Energy コントローラサポート（LE Link Layer）。Bluetooth Mesh と、Bluetooth 認証取得準備済みの Bluetooth コントローラを含みます。

- すべての LE ロールに対応した Generic Access Profile (GAP)
- Generic Attribute Profile (GATT)
- Bluetooth 4.2 の Secure Connections 機能を含むペアリングサポート
- クリーンな HCI ドライバ抽象化
- Zephyr を完全な Host スタックではなく Controller として動作させるための Raw HCI インターフェース
- 複数の一般的なコントローラで検証済み
- 高い構成可能性

Mesh サポート：

- Relay、Friend Node、Low-Power Node (LPN)、および GATT Proxy 機能
- 両方のプロビジョニングベアラー（PB-ADV と PB-GATT）をサポート
- 高い構成可能性があり、少なくとも 16k RAM を持つデバイスに収まります

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyr を扱う最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。お使いの環境に必要なセットアップ手順については、[Zephyr getting started guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンをセットアップし、対応する SDK をダウンロードしたら、アプリケーション開発を開始できます。

Xiao ESP32C3 については、さらなるセットアップ情報として [ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) を参照できます。

ESP32C3 を使用するために必要な blob を取得するには、次のコマンドを実行します。

```
west blobs fetch hal_espressif
```

この後、サンプルをビルドしてボードに書き込むことができます。

最も簡単な例として、ボード上で "Hello World" サンプルを実行してみましょう。Zephyr をインストールしたディレクトリに移動した後、次のコマンドを実行します。

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

最後のコマンドを実行すると、"Hello World!" のあいさつが表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用する複数のオーバーレイと設定を含むリポジトリが用意されています。この wiki 記事に含まれるコマンドは、Zephyr ルートからの相対パスで `../applications/xiao-zephyr-examples` に配置されていることを前提としています。以下のコマンド内のパスを更新することで、別のパスを指定することもできます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェアの準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Grove Red LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO 拡張ボード

  Seeed Studio XIAO ESP32C3 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO ESP32C3 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際には、以下の図に従って、適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### 主な機能

- GPIO / LED 有効化
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / LED 有効化

このセットアップをテストするために、Zephyr の blinky サンプルを使用できますが、ここでは追加の Grove LED とオーバーレイを使用して、LED を D0 ピンに割り当てることで、この動作を確認します（Xiao ESP32C3 にはプログラム可能なオンボード LED がありません）。

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

RESET を素早く 2 回押すか、RST ピンを GND に短絡させます。

```
west flash
```

接続された赤色 LED がオンとオフを切り替え、点滅しているのが確認できます。

なぜこれが動作するのか、この例を少し掘り下げてみましょう。

関連するサンプルコードは led0 を参照しています。

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

LED オーバーレイ（`xiao-zephyr-examples/d0_led.overlay`）は、この LED を次のように定義しています。

```
/ {
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
   label = "Demo LED";
  };
 };
};
```

このオーバーレイは、D0（`&xiao_d 0` で示される）を LED として設定し、エイリアス `led0` を関連付けています。`led0` はエイリアスであり、多くのサンプルが制御対象の LED としてこの名前を探しに行くため、多くのサンプルで利用できるようになっています。

`west espressif monitor` を使ってシリアル出力を監視すると、次のような出力が表示されます。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

このセットアップをテストするために、Zephyr の既存サンプルを使用できます。

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Starting Observer Demo
Started scanning...
Device found: E5:44:60:88:DB:99 (random) (RSSI -92), type 0, AD data len 27
Device found: F3:38:F3:AD:FC:C6 (random) (RSSI -63), type 3, AD data len 8
Device found: 49:E6:31:0F:A6:25 (random) (RSSI -55), type 2, AD data len 28
Device found: EC:11:27:22:AF:D2 (public) (RSSI -80), type 0, AD data len 31
Device found: FB:3C:4A:AC:64:33 (random) (RSSI -78), type 0, AD data len 30
Device found: 79:05:36:B8:1E:1B (random) (RSSI -34), type 2, AD data len 4
Device found: 77:4D:FC:E2:12:D4 (random) (RSSI -86), type 2, AD data len 4
Device found: E0:9D:13:29:DA:15 (public) (RSSI -99), type 0, AD data len 31
Device found: 53:17:1B:22:70:23 (random) (RSSI -97), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

ここにある[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)は、Zephyr ビルド用に Bluetooth 関連の機能を有効にします。

#### Wi-Fi

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

ローカルネットワークの表示や接続を可能にする複数のコマンドが存在します。詳細については、[サンプルの README](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) を参照してください。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
uart:~$ wifi scan
Scan requested
Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

なぜこれが動作するのかを確認するために、このサンプルを少し掘り下げてみましょう：

```
&wifi {
 status = "okay";
};
```

アプリの[overlay ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay)は、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、サンプルロジックに Wi-Fi を有効にするよう通知する overlay によって、このサンプルを利用できるようになります。

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

ここにある[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf)は、Zephyr ビルド用に複数のネットワーク関連機能を有効にします。

#### TFLite - Hello World

Zephyr で TFLite を有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

サンプルをビルドしてボードに書き込みます：

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

コンソールから結果が返されるのが確認できます：

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

TFLite に関する追加情報はこのガイドの範囲外ですが、このサンプルはデバイスの機能と、TFLite セットアップを実行するために必要なコンポーネントを理解するためのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

このディスプレイは 2 色のみをサポートしているため、複数の黒いボックスと、隅で点滅するボックスが表示されます。

なぜこれが動作するのかを確認するために、このサンプルを少し掘り下げてみましょう：

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
};

```

シールドは 0x3C レジスタに SSD1306 OLED 画面をセットアップします。chosen セクションで Zephyr のディスプレイとして選択されています。

#### Grove - Expansion Board - ボタン

このセットアップをテストするために Zephyr に用意されている既存のサンプルを使用しますが、これが動作することを示すために、追加の Grove LED と overlay を使用して LED を D0 ピンに割り当て直します（Xiao ESP32C3 にはプログラム可能なオンボード LED がありません）：

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

サンプル実行中にボタンを押すと、D0 に対応する LED が点灯します。

コンソールから結果が返されるのが確認できます：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@60004000 pin 3
Set up LED at gpio@60004000 pin 2
Press the button
Button pressed at 39818120
Button pressed at 63872629
Button pressed at 168304681
Button pressed at 241105558
Button pressed at 346324767
Button pressed at 382181856
Button pressed at 419342954
```

なぜこれが動作するのかを確認するために、このサンプルを少し掘り下げてみましょう：

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

shield / overlay ファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、overlay が Zephyr にボタンを構成させ、関連するコードから利用できるようにするため、ボタンのサンプルを利用できます。

この場合は Xiao ESP32C3 上の D1 です。この overlay ではボタンとして動作するように設定されており、サンプル側のコードが想定している sw0 という名前にエイリアスされているため、サンプルで使用できるようになっています。

上記の LED サンプルで示したように、LED も overlay ファイルを通じて構成されています。ボタンを関連付けることで、ボタンを押すとこの LED が点灯します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - Expansion Board - ブザー

blinky PWM サンプルを使用して PWM 信号で制御し、ブザーを鳴らします。このために、A3 ピン用の PWM を有効にするカスタム overlay を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

書き込み後、サンプルの実行に伴って音が変化する一連のブザー音が聞こえるはずです。

なぜこれが動作するのかを見てみましょう：

```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
 aliases {
  pwm-0 = &ledc0;
  pwm-led0 = &pwm_buzzer;
 };

 pwmleds {
  compatible = "pwm-leds";
  pwm_buzzer: pwm_led_gpio0_5 {
   label = "PWM LED0";
   pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
  };
 };
};

&pinctrl {
 ledc0_default: ledc0_default {
  group1 {
   pinmux = <LEDC_CH0_GPIO5>;
   output-enable;
  };
 };
};

&ledc0 {
 pinctrl-0 = <&ledc0_default>;
 pinctrl-names = "default";
 status = "okay";
 #address-cells = <1>;
 #size-cells = <0>;
 channel0@0 {
  reg = <0x0>;
  timer = <0>;
 };
};
```

overlay は、ESP32C3 のピン配置において A3 ピンに対応するピン 5 の PWM ロジックを構成します。

#### Grove - Expansion Board - SD カード

ここでは filesystem サンプルと Xiao Expansion Board シールドを使用して、SPI 経由で SD カードリーダーとのインターフェースを試します。Expansion Board シールドでは、CS ピンが対応する `&xiao_d 2` ピンに設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は不要です。さらに準備として、SD カード機能を有効にするカスタム config を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

では、フラッシュしてモニタリングします：

```
west flash
west espressif monitor
```

次のような出力が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.032,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.033,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

この場合、SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで動作している関連要素を確認してみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する config では、SPI、SDMMC ディスクドライバ、および GPIO を有効にしています。この config がないと、サンプルが SD カードを見つけられないため、オーバーレイはエラーになります。

Xiao Expansion Board シールドの関連部分を以下に示します：

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
  spi-max-frequency = <24000000>;
 };
};
```

前述のとおり、`&xiao_d 2` ピンマッピングは、ボードが `&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なく D2 ピンを選択できるようにするために使用されます。

#### Grove - Temperature and Humidity Sensor (SHT31)

まずピンをはんだ付けし、Xiao ESP32C3 をエクスパンションボードに接続します。次に Grove SHT31 とエクスパンションボード上の I2C ポートの 1 つの間を grove コネクタケーブルで接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

コンソールから次のような結果が返されます：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 25.92 Cel ; 53.37 %RH
SHT3XD: 25.97 Cel ; 54.37 %RH
SHT3XD: 26.00 Cel ; 54.43 %RH
SHT3XD: 26.02 Cel ; 54.11 %RH
SHT3XD: 26.03 Cel ; 53.33 %RH
SHT3XD: 26.02 Cel ; 52.88 %RH
SHT3XD: 26.04 Cel ; 52.12 %RH
SHT3XD: 26.07 Cel ; 51.87 %RH
SHT3XD: 26.13 Cel ; 52.81 %RH
```

なぜこれが動作するのかを確認するために、この例を少し掘り下げてみましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

app オーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、[sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) に、センサをこのボード向けにどのように設定するかを知らせるため、SHT31 のサンプルを利用できます。

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

この例では、SPI を使用して 240x280 解像度の 1.69 インチ LCD に接続します。

まず、以下の画像をガイドとして使用し、ボードを LCD スクリーンに接続します（この例では Xiao ESP32C3 を使用していますが、ここでの接続には同じピン配置が使われます）。

| 1.69-inch LCD SPI Display| XIAO ESP32C3 |
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

これでファームウェアをビルドしてフラッシュできます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

新しいファームウェアを書き込むと、デバイスには先ほどエクスパンションボードで見たのと同じデモ画面が表示されますが、今回は SPI 経由のカラー LCD 用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Round Display for Xiao

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash
```

複数の色付きコーナーが表示され、そのうち 1 つの黒いコーナーが点滅している画面が表示されます。

別の例では、タッチスクリーンの使用方法を示しています：

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示しているミュージックデモは実際の画面の一部に過ぎませんが、それでもタッチスクリーンが動作していることを示しています。ご覧のとおり、再生ボタンに触れると音楽アニメーションが開始されます。

[shield file](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) からわかるように、これは SPI 経由で GC9A01 ラウンドディスプレイドライバと、i2c 経由で CHSC6X タッチモジュールにインターフェースすることで動作しています。

この例がどのように動作するのかを確認するために、少し掘り下げてみましょう：

```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

 lvgl_pointer {
  compatible = "zephyr,lvgl-pointer-input";
  input = <&chsc6x_xiao_round_display>;
 };
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
 status = "disabled";
};

&xiao_i2c {
 clock-frequency = < I2C_BITRATE_FAST >;

 chsc6x_xiao_round_display: chsc6x@2e {
  status = "okay";
  compatible = "chipsemi,chsc6x";
  reg = <0x2e>;
  irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
 };
};

&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 gc9a01_xiao_round_display: gc9a01@0 {
  status = "okay";
  compatible = "galaxycore,gc9x01x";
  reg = <0>;
  spi-max-frequency = <DT_FREQ_M(100)>;
  cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
  pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
  width = <240>;
  height = <240>;
  display-inversion;
 };
};
```

このシールドは次のことを行います：

- GC9A01 ディスプレイを、選択された Zephyr ディスプレイとして指定する
- LVGL ポインタロジックが CHSC6X モジュールを使用するように設定する
- シリアルを無効化する（上記の `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;` に見られるように、ピンがバックライトとタッチ割り込みに使用されるため）
- D1、D2、D3 ピンを使用して SPI 用にラウンドディスプレイを構成する

[sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) は、さらに詳しく調べることができる [LVGL demo example code](https://github.com/lvgl/lvgl/tree/master/demos/music) に依存しています。

## ✨ Contributor Project

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) によって支援されています。
- **Tim の尽力**に感謝するとともに、あなたの成果は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
