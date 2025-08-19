---
description: XIAO ESP32C3とZephyr(RTOS)
title:  XIAO ESP32C3とZephyr(RTOS)
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-ESP32C3-Zephyr
last_update:
  date: 05/15/2025
  author: timo614
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3とZephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## RTOSとは

今日の組み込みシステムにおいて最も重要なコンポーネントの1つが**RTOS**、つまり**リアルタイムオペレーティングシステム**です。RTOSはタスクスケジューリングからアプリケーションの実行までを担います。

**RTOS**は予測可能な実行モードを提供するよう設計されています。処理がシステムの時間制限を満たす必要がある場合にRTOSが使用されます。そのため、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小型であり、特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者が既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように縮小したり、その機能や性能特性をカスタマイズすることができます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、小型フットプリントのカーネルに基づいており、リソースが制約された組み込みシステムで使用するために設計されています。これには、単純な組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまでが含まれます。

## 特徴
Zephyrは多くの機能を提供しており、その数は増え続けています。

### 豊富なカーネルサービスのスイート

Zephyrは開発において馴染みのある多くのサービスを提供します：

- *マルチスレッドサービス*：協調型、優先度ベース、非プリエンプティブ、プリエンプティブスレッドに対応し、オプションでラウンドロビンタイムスライスを提供。POSIX pthreads互換APIサポートを含む。
- *割り込みサービス*：割り込みハンドラーのコンパイル時登録をサポート。
- *メモリ割り当てサービス*：固定サイズまたは可変サイズのメモリブロックの動的割り当てと解放をサポート。
- *スレッド間同期サービス*：バイナリセマフォ、カウントセマフォ、ミューテックスセマフォを提供。
- *スレッド間データ転送サービス*：基本的なメッセージキュー、拡張メッセージキュー、バイトストリームを提供。
- *電源管理サービス*：包括的なアプリケーションまたはポリシー定義のシステム電源管理と、ドライバー定義の細かいデバイス電源管理を提供。

### 複数のスケジューリングアルゴリズム

Zephyrは包括的なスレッドスケジューリングの選択肢を提供します：
- 協調型およびプリエンプティブスケジューリング
- 最早期限優先（EDF）
- 割り込みの「ボトムハーフ」または「タスクリット」動作を実装するMeta IRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でタイムスライスを可能にする
- 複数のキューイング戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0のサポート
Bluetooth 5.0準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LEリンク層）。BluetoothメッシュおよびBluetooth認定準備済みBluetoothコントローラーを含む。

- 汎用アクセスプロファイル（GAP）：すべての可能なLEロールに対応
- 汎用属性プロファイル（GATT）
- ペアリングサポート：Bluetooth 4.2のセキュアコネクション機能を含む
- クリーンなHCIドライバー抽象化
- Zephyrをコントローラーとして実行するためのRaw HCIインターフェース（完全なホストスタックではなく）
- 複数の人気コントローラーで検証済み
- 高度に構成可能

メッシュサポート：

- リレー、フレンドノード、低電力ノード（LPN）、およびGATTプロキシ機能
- 両方のプロビジョニングベアラーをサポート（PB-ADV & PB-GATT）
- 高度に構成可能で、少なくとも16k RAMを持つデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyr を使用する最初のステップは、ローカル開発のための SDK とツールチェーンをセットアップすることです。[Zephyr の入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)を参照して、環境に必要なセットアップ手順を確認してください。

Zephyr ツールチェーンがセットアップされ、関連する SDK がダウンロードされたら、アプリケーション開発を開始できます。

Xiao ESP32C3 の場合、[ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html)を参照して、さらなるセットアップ情報を確認してください。

ESP32C3 を使用するために必要なブロブを取得するには、以下のコマンドを実行します：

```
west blobs fetch hal_espressif
```

これが完了したら、サンプルをビルドしてボードにフラッシュできます。

最も簡単な例として、ボード上で "Hello World" サンプルを実行します。Zephyr インストールディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

最後のコマンドを実行すると、"Hello World!" の挨拶が表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このウィキ記事に含まれるコマンドは、Zephyr ルートに対して `../applications/xiao-zephyr-examples` に配置されていると仮定しています。以下のコマンドを更新することで、代替パスを指定できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 拡張ボード</th>
      <th>Grove 赤色 LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO 拡張ボード

Seeed Studio XIAO ESP32C3 で Grove モジュールを使用するために、[Seeed Studio XIAO 用拡張ベース](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、XIAO ESP32C3 を接続します。

その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

Grove Shield for Seeed Studio XIAO の Grove コネクタに Grove モジュールを接続する際には、以下の図を参照して適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### 主な機能

- GPIO / LED 有効化
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / LED 有効化

このセットアップをテストするために、Zephyr の blinky サンプルを使用します。ただし、追加の Grove LED とオーバーレイを使用して、D0 ピンに LED を割り当てて動作を確認します（Xiao ESP32C3 にはプログラム可能なオンボード LED がありません）。

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

RESET をダブルプレスするか、RST ピンを GND に短絡してください。

```
west flash
```

接続された赤色 LED が点滅してオン・オフを繰り返すのが確認できます。

この例がなぜ動作するのかを少し掘り下げてみましょう。

関連するサンプルコードは `led0` を参照しています：
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

LED オーバーレイ (`xiao-zephyr-examples/d0_led.overlay`) は、この LED を定義しています：
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

このオーバーレイは、D0（`&xiao_d 0` として示される）を LED として設定し、それをエイリアス `led0` に関連付けます。`led0` はエイリアスで、多くのサンプルがこの名前を特定して LED を制御するために使用します。

`west espressif monitor` を使用してシリアル出力を監視すると、以下のような出力が表示されます：
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

このセットアップをテストするために、Zephyr の既存のサンプルを使用します：

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：
```
*** Zephyr OS build v3.6.0-2566-gc9b45bf4672a を起動中 ***
Observer Demo を開始
スキャンを開始...
デバイスが見つかりました: E5:44:60:88:DB:99 (ランダム) (RSSI -92), タイプ 0, AD データ長 27
デバイスが見つかりました: F3:38:F3:AD:FC:C6 (ランダム) (RSSI -63), タイプ 3, AD データ長 8
デバイスが見つかりました: 49:E6:31:0F:A6:25 (ランダム) (RSSI -55), タイプ 2, AD データ長 28
デバイスが見つかりました: EC:11:27:22:AF:D2 (パブリック) (RSSI -80), タイプ 0, AD データ長 31
デバイスが見つかりました: FB:3C:4A:AC:64:33 (ランダム) (RSSI -78), タイプ 0, AD データ長 30
デバイスが見つかりました: 79:05:36:B8:1E:1B (ランダム) (RSSI -34), タイプ 2, AD データ長 4
デバイスが見つかりました: 77:4D:FC:E2:12:D4 (ランダム) (RSSI -86), タイプ 2, AD データ長 4
デバイスが見つかりました: E0:9D:13:29:DA:15 (パブリック) (RSSI -99), タイプ 0, AD データ長 31
デバイスが見つかりました: 53:17:1B:22:70:23 (ランダム) (RSSI -97), タイプ 0, AD データ長 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)は、Zephyr ビルドの Bluetooth 関連機能を有効にします。

#### Wi-Fi

このセットアップをテストするには、Zephyr の既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：
```
*** Zephyr OS build v3.6.0-1155-g1a55caf8263e を起動中 ***
uart:~$
```

ローカルネットワークを確認して接続するためのいくつかのコマンドが存在します。詳細は [サンプルの README](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) を参照してください。
```
*** Zephyr OS build v3.6.0-2566-gc9b45bf4672a を起動中 ***
uart:~$ wifi scan
スキャンを要求しました
番号 | SSID                             (長さ) | チャンネル (バンド) | RSSI | セキュリティ        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | 無効
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | 無効
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | 無効
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

この例が動作する理由を少し掘り下げてみましょう：
```
&wifi {
	status = "okay";
};
```

アプリの [オーバーレイファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) は、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、サンプルロジックに Wi-Fi を有効にするよう指示し、例を利用できます。

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

[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf)は、Zephyr ビルドのネットワーキング関連機能をいくつか有効にします。

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

コンソールから結果が返されます：
```
*** Zephyr OS build v3.6.0-2566-gc9b45bf4672a を起動中 ***
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

TFLite に関する追加情報はこのガイドの範囲外ですが、この例はデバイスの能力と TFLite セットアップを実行するために必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチ LCD ディスプレイモジュール、240×280 解像度、SPI インターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao 用ラウンドディスプレイ](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - 拡張ボード - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするには、Zephyr の既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

このディスプレイは2色のみをサポートしているため、複数の黒いボックスと隅に点滅するボックスが表示されます。

この例が動作する理由を少し掘り下げてみましょう：
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

シールドは 0x3C レジスタに SSD1306 OLED スクリーンを設定します。これは chosen セクションで Zephyr ディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyr の既存のサンプルを使用しますが、追加で Grove LED を使用し、LED を D0 ピンにオーバーレイで上書きして動作を確認します（Xiao ESP32C3 にはプログラム可能なオンボード LED がありません）：

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

サンプルでボタンを押すと、D0 に関連付けられた LED が点灯します。

コンソールから以下のような結果が返されます：

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

この例がなぜ動作するのかを詳しく見てみましょう：
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

シールド / オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、ボタンの例をオーバーレイを通じて Zephyr がボタンを設定し、関連するコードで利用できるようにします。

この場合、Xiao ESP32C3 の D1 がボタンとして動作するようにオーバーレイで設定され、`sw0` という名前にエイリアスされてサンプルで使用されます。このサンプルコードはこのエイリアスを期待しています。

上記の LED の例で示したように、LED もオーバーレイファイルを介して設定されています。ボタンを押すと、この LED が点灯するように関連付けられています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - 拡張ボード - ブザー

ブザーをアクティブにするために、PWM 信号を使用して制御する blinky PWM の例を使用します。このために、A3 ピンの PWM を有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

フラッシュ後、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

これがなぜ動作するのかを見てみましょう：
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

このオーバーレイは、ESP32C3 のピン 5（A3 ピンに対応）の PWM ロジックを設定します。

#### Grove - 拡張ボード - SD カード

ここでは、ファイルシステムのサンプルを使用し、Xiao 拡張ボードシールドを使用して SPI 経由で SD カードリーダーとインターフェースを試みます。拡張ボードシールドには、関連する `&xiao_d 2` ピン用に CS ピンが設定されているため、シールドを追加する以外に特別な作業は必要ありません。SD カード機能を有効にするカスタム設定を使用して準備します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

次にフラッシュしてモニターします：
```
west flash
west espressif monitor
```

以下のような応答が表示されるはずです：
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

この場合、私の SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここでの関連要素を見てみましょう：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMC ディスクドライバ、および GPIO を有効にしています。この設定がないと、オーバーレイはエラーを引き起こし、サンプルが SD カードを見つけることができません。

Xiao 拡張ボードシールドの関連部分は以下の通りです：

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

前述のように、`&xiao_d 2` ピンマッピングは、D2 ピンを選択できるように使用されます。これにより、`&xiao_d` ピンセットアップをサポートするボードであれば、どのボードでも動作します。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao ESP32C3 を拡張ボードに接続します。その後、Grove SHT31 と拡張ボードの I2C ポートのいずれかの間に Grove コネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

コンソールから以下の結果が表示されます：
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

この例が動作する理由を少し掘り下げてみましょう：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

アプリケーションオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、SHT31の例を活用できます。オーバーレイは[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)に、センサーをボードに合わせて設定する方法を通知します。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用して、ボードをLCDスクリーンに接続します（この場合、Xiao ESP32C3を使用していますが、接続には同じピン配置が使用されます）。

| 1.69インチLCD SPIディスプレイ | XIAO ESP32C3 |
| -------------------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

次に、ファームウェアをビルドしてフラッシュします：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

新しいファームウェアが適用されると、デバイスは以前に拡張ボードで見たデモ画面を表示しますが、今回はSPI経由でカラーLCDに更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Xiao用のラウンドディスプレイ

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash
```

複数の色付きコーナーが表示され、黒いコーナーが点滅するディスプレイが確認できます。

別の例では、タッチスクリーンの使用を示しています：

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示されている音楽デモは画面の一部のみですが、タッチスクリーンの動作を示しています。再生ボタンをタッチすると音楽アニメーションがオンになります。

[シールドファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)から、このセットアップがSPI経由でGC9A01ラウンドディスプレイドライバーと、i2c経由でCHSC6Xタッチモジュールとインターフェースすることで動作することがわかります。

この例がどのように動作するかを少し掘り下げてみましょう：
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
 * xiao_serialはXiaoのD6およびD7ピンを使用します。これらはそれぞれ
 * スクリーンのバックライト制御およびタッチコントローラ割り込みとして使用されます。
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

このシールドは以下を行います：
- GC9A01ディスプレイをZephyrの選択されたディスプレイとして設定
- LVGLポインタロジックをCHSC6Xモジュールに設定
- ピンがバックライトとタッチ割り込みに使用されるため、シリアルを無効化（上記の`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`参照）
- D1、D2、D3ピンを使用してSPI経由でラウンドディスプレイを設定

[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)は、[LVGLデモ例コード](https://github.com/lvgl/lvgl/tree/master/demos/music)に依存しており、さらに調査することができます。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) によってサポートされています。
- **Timの努力**に感謝します。あなたの作業は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)される予定です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>