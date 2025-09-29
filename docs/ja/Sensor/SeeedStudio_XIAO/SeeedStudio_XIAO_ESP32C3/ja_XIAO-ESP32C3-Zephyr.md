---
description: XIAO ESP32C3 with Zephyr(RTOS)
title:  XIAO ESP32C3 with Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
---

# XIAO Zephyr(RTOS)を使用したESP32C3

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## RTOSとは

今日の組み込みシステムの最も重要なコンポーネントの一つは、**RTOS**（**リアルタイムオペレーティングシステム**）として知られており、タスクスケジューリングからアプリケーションの実行まで、すべてを担当しています。

**RTOS**は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制限を満たす必要がある場合、RTOSが使用されます。したがって、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小さく、一般的に特定のハードウェア上で特定のタイプのアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように絞り込んだり、その機能や性能特性をカスタマイズしたりできます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、リソース制約のある組み込みシステムでの使用を目的として設計された小さなフットプリントカーネルに基づいています：シンプルな組み込み環境センサーやLEDウェアラブルから、洗練された組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまで。

## 特徴

Zephyrは、以下を含む多数の機能を提供し、その数は絶えず増加しています：

### 広範なカーネルサービススイート

Zephyrは開発のための多数の馴染みのあるサービスを提供します：

- *マルチスレッドサービス* - 協調的、優先度ベース、非プリエンプティブ、およびプリエンプティブスレッド用で、オプションのラウンドロビンタイムスライシング付き。POSIX pthreads互換API サポートを含みます。
- *割り込みサービス* - 割り込みハンドラーのコンパイル時登録用。
- *メモリ割り当てサービス* - 固定サイズまたは可変サイズメモリブロックの動的割り当てと解放用。
- *スレッド間同期サービス* - バイナリセマフォ、カウンティングセマフォ、およびミューテックスセマフォ用。
- *スレッド間データ受け渡しサービス* - 基本メッセージキュー、拡張メッセージキュー、およびバイトストリーム用。
- *電源管理サービス* - 包括的な、アプリケーションまたはポリシー定義のシステム電源管理や、きめ細かい、ドライバー定義のデバイス電源管理など。

### 複数のスケジューリングアルゴリズム

  Zephyrは包括的なスレッドスケジューリング選択肢のセットを提供します：

- 協調的およびプリエンプティブスケジューリング
- 最早期限優先（EDF）
- 「割り込みボトムハーフ」または「タスクレット」動作を実装するメタIRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でのタイムスライシングを有効化
- 複数のキューイング戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0サポート

Bluetooth 5.0準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LE Link Layer）。Bluetooth meshおよびBluetooth認定対応Bluetoothコントローラーを含みます。

- すべての可能なLEロールを持つGeneric Access Profile（GAP）
- Generic Attribute Profile（GATT）
- Bluetooth 4.2のSecure Connections機能を含むペアリングサポート
- クリーンなHCIドライバー抽象化
- 完全なHostスタックの代わりにZephyrをコントローラーとして実行するためのRaw HCIインターフェース
- 複数の人気コントローラーで検証済み
- 高度に設定可能

Meshサポート：

- Relay、Friend Node、Low-Power Node（LPN）およびGATT Proxy機能
- 両方のProvisioningベアラーをサポート（PB-ADV & PB-GATT）
- 高度に設定可能で、少なくとも16k RAMを持つデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyrを使用する最初のステップは、ローカル開発用のSDKとツールチェーンをセットアップすることです。お使いの環境に必要な関連セットアップ手順については、[Zephyr入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)を参照してください。

Zephyrツールチェーンがセットアップされ、関連するSDKがダウンロードされたら、アプリケーション開発を開始できます。

Xiao ESP32C3については、さらなるセットアップ情報として[ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html)を参照できます。

ESP32C3を使用するために必要なblobを取得するには、以下のコマンドを実行してください：

```
west blobs fetch hal_espressif
```

このサンプルをビルドしてボードにフラッシュできるようになります。

最も簡単な例は、ボード上で「Hello World」サンプルを実行することです。Zephyrインストールのディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

最後のコマンドで、"Hello World!" の挨拶を表示するレスポンスが確認できるはずです。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Xiaoとその拡張ボードでZephyrを使用するプロセスを支援するため、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このwiki記事に含まれるコマンドは、zephyrルートに対して相対的に`../applications/xiao-zephyr-examples`に配置されていることを前提としています。以下のコマンドでパスを更新することで、代替パスを提供できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 拡張ボード</th>
      <th>Grove 赤色LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO拡張ボード

  Seeed Studio XIAO ESP32C3でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO ESP32C3を接続します。

  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  GroveモジュールをSeeed Studio XIAO用GroveシールドのGroveコネクタに接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### 主要機能

- GPIO / LED有効化
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / LED有効化

このセットアップをテストするために、Zephyrでblinkサンプルを使用できますが、追加のGrove LEDとオーバーレイを使用してLEDをD0ピンにオーバーライドし、これが動作することを実証します（Xiao ESP32C3にはプログラム可能なオンボードLEDがありません）：

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

RESETをダブルプレスするか、RSTピンをGNDにショートしてください。

```
west flash
```

赤色LEDが点滅してオンオフを切り替える様子が確認できます。

この例がなぜ動作するのか、少し詳しく見てみましょう。

関連するサンプルコードはled0を参照しています：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

LEDオーバーレイ（`xiao-zephyr-examples/d0_led.overlay`）は、このLEDを次のように定義しています：

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

このオーバーレイは、D0（`&xiao_d 0` で示される）をLEDとして設定し、エイリアス `led0` に関連付けます。`led0` は多くのサンプルがこの名前を特別に探すため、制御されるLEDとして使用できるエイリアスです。

`west espressif monitor` でシリアル出力を監視すると、以下のような出力が表示されます：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが利用可能になります：

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

こちらの[confファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)は、Zephyrビルド用のBluetooth関連機能を有効にします。

#### Wi-Fi

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

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

いくつかのコマンドが存在し、ローカルネットワークを表示して接続することができます。詳細については[サンプルreadme](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst)を参照してください。

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

この例を少し詳しく見て、なぜ動作するのかを確認してみましょう：

```
&wifi {
 status = "okay";
};
```

アプリの[オーバーレイファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay)は、様々なボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、オーバーレイがサンプルロジックにWi-Fiを有効にするよう指示するため、例を活用することができます。

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

[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf)は、Zephyr ビルドのためのいくつかのネットワーク関連機能を有効にします。

#### TFLite - Hello World

Zephyr で TFLite を有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

サンプルをビルドしてボードにフラッシュします：

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
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

TFLiteに関する追加情報はこのガイドの範囲外ですが、この例はデバイスの機能とTFLiteセットアップの実行に必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
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
};

```

シールドは0x3Cレジスタに SSD1306 OLED スクリーンを設定します。これは chosen セクションで zephyr ディスプレイとして選択されます。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyr の既存のサンプルを使用できますが、追加の Grove LED とオーバーレイを使用して LED を D0 ピンにオーバーライドし、これが動作することを実証します（Xiao ESP32C3 にはプログラム可能なオンボード LED がありません）：

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

ボタンをサンプルで押すと、D0に関連付けられたLEDが点灯します。

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

シールド/オーバーレイファイルは、さまざまなボードコンポーネントのセットアップに使用されます。このファイルを使用することで、ボタンの例を活用できます。オーバーレイによりZephyrがボタンを設定し、関連するコードで使用できるようになります。

この場合、Xiao ESP32C3のD1です。このオーバーレイでボタンとして動作するように設定され、sw0という名前でエイリアスされ、このコードを期待するサンプルで使用できるようになります。

上記のLEDの例で示されているように、LEDもそのオーバーレイファイルを介して設定されます。ボタンが関連付けられた状態で、ボタンを押すとこのLEDが点灯します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - 拡張ボード - ブザー

blinky PWMの例を使用してブザーを有効化し、PWM信号を介してその動作を制御します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

フラッシュ後、サンプルが実行される過程で音が変化する一連のブザー音が聞こえ始めるはずです。

なぜこれが機能するのかを見てみましょう：

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

オーバーレイは、ESP32C3ピンアウトのA3ピンに対応するピン5のPWMロジックを設定します。

#### Grove - 拡張ボード - SDカード

ここではファイルシステムサンプルをXiao拡張ボードシールドと一緒に使用して、SPI経由でSDカードリーダーとのインターフェースを試してみます。拡張ボードシールドには、関連する`&xiao_d 2`ピン用に設定されたCSピンがあるため、この機能をボードに関連付けるためにシールドを追加する以外に、あなたが行う作業はありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Now flash and monitor:

```
west flash
west espressif monitor
```

次のような応答が表示されるはずです：

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

この場合、私のSDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を見てみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバー、およびGPIOを有効にしています。この設定がないと、サンプルがSDカードを見つけることができないため、オーバーレイがエラーを引き起こします。

Xiao拡張ボードシールドの関連部分を以下に示します：

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

前述のように、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なくD2ピンを選択できるようにするために使用されます。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao ESP32C3 を拡張ボードに接続します。次に、Grove SHT31と拡張ボード上のI2Cポートの1つの間にgroveコネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr の既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

コンソールから返される結果が表示されます：

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

この例を少し詳しく見て、なぜうまくいくのかを理解しましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

アプリオーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、SHT31の例を活用できます。オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)に対して、私たちのボード用にセンサーを設定する方法を通知するためです。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用してボードをLCDスクリーンに接続してください（この場合はXiao ESP32C3を使用していますが、接続には同じピンレイアウトが使用されます）。

| 1.69インチLCD SPIディスプレイ| XIAO ESP32C3 |
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

新しいファームウェアが配置されると、デバイスは以前に拡張ボードで見たのと同じデモ画面を表示しますが、今度はSPI経由のカラーLCD用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Xiao用ラウンドディスプレイ

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash
```

複数の色付きコーナーと黒いコーナーが点滅している表示が見えます。

別の例では、タッチスクリーンの使用方法を示しています：

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示されている音楽デモは実際の画面の一部分のみですが、それでもタッチスクリーンの動作を実演しています。ご覧のように、再生ボタンをタッチすると音楽アニメーションがオンになります。

[シールドファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)から分かるように、これはGC9A01円形ディスプレイドライバーとSPI経由でインターフェースし、CHSC6Xタッチモジュールとi2c経由でインターフェースすることで動作します。

この例について少し詳しく見て、どのように動作するかを確認してみましょう：

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

このシールドは以下の機能を提供します：

- 選択されたZephyrディスプレイとしてGC9A01ディスプレイを選択
- CHSC6Xモジュールを使用するようにLVGLポインターロジックを設定
- ピンがバックライトとタッチ割り込みに使用されるため、シリアルを無効化（上記の通り：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`で確認可能）
- D1、D2、D3ピンを使用してSPI用の円形ディスプレイを設定

[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)は[LVGLデモサンプルコード](https://github.com/lvgl/lvgl/tree/master/demos/music)に依存しており、さらに詳しく調べることができます。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521)によってサポートされています。
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
