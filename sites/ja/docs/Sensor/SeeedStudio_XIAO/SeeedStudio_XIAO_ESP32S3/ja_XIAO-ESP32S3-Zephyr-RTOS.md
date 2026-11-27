---
description: XIAO ESP32S3(sense) と Zephyr(RTOS)
title: XIAO ESP32S3(sense) と Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_esp32s3_zephyr_rtos
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_zephyr_rtos/
---

# XIAO ESP32S3(sense) と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

この wiki では、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) に対する [Zephyr](https://www.zephyrproject.org/) のサポートについて説明します。このガイドに従うことで、ボードで利用可能な機能セットを活用できるようになります。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、リソースに制約のある組み込みシステムでの使用を目的として設計された小さなフットプリントのカーネルに基づいています。シンプルな環境センサーや LED ウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoT ワイヤレスアプリケーションまで対応します。

Zephyr がサポートする各デバイスには、ボードとその機能を記述する [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) ファイルがあります。[Xiao ESP32S3 Zephyr ボードページ](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) には、[ボードの dts ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7) によって定義されている、現在利用可能なサポート機能が記載されています。

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入門ガイド

Zephyr を扱う最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。お使いの環境に必要なセットアップ手順については、[Zephyr 入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンをセットアップし、対応する SDK をダウンロードしたら、アプリケーション開発を開始できます。

Xiao ESP32S3 については、追加のセットアップ情報として [ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) を参照できます。

ESP32S3 を使用するために必要な blob を取得するには、次のコマンドを実行します。

```
west blobs fetch hal_espressif
```

これが完了すると、サンプルをビルドしてボードに書き込むことができます。

最も簡単な例として、ボード上で "Hello World" サンプルを実行してみましょう。Zephyr をインストールしたディレクトリに移動した後、次のコマンドを実行します。

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

最後のコマンドを実行すると、"Hello World!" のあいさつが表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用する複数のオーバーレイと設定を含むリポジトリが用意されています。この wiki 記事に含まれるコマンドは、Zephyr のルートから見て `../applications/xiao-zephyr-examples` に配置されていることを前提としています。必要に応じてパスを更新することで、以下のコマンドに別のパスを指定できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェアの準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

  Seeed Studio XIAO ESP32S3 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO ESP32S3 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際は、下の図に従って、適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### 主要な機能

- Bluetooth
- Wi-Fi
- TFLite

#### Bluetooth

このセットアップをテストするために、Zephyr に含まれる既存のサンプルを使用できます。

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます。

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -77), type 0, AD data len 31
Device found: 02:96:58:9A:B4:64 (random) (RSSI -78), type 3, AD data len 31
Device found: 66:A5:E1:CF:8C:35 (random) (RSSI -58), type 0, AD data len 17
Device found: 62:09:50:DB:85:D0 (random) (RSSI -92), type 0, AD data len 14
Device found: C4:5A:95:A7:96:7D (random) (RSSI -78), type 0, AD data len 20
Device found: E5:44:60:88:DB:99 (random) (RSSI -82), type 0, AD data len 27
Device found: 66:18:ED:DD:74:1C (random) (RSSI -71), type 0, AD data len 17
Device found: 37:D2:FC:F8:FA:B8 (random) (RSSI -75), type 3, AD data len 31
Device found: 40:B8:84:E5:5F:A4 (random) (RSSI -70), type 2, AD data len 28
Device found: 44:EB:7C:AA:89:0B (random) (RSSI -83), type 0, AD data len 18
Device found: 71:AC:4A:98:5E:73 (random) (RSSI -72), type 2, AD data len 4
Device found: 60:D9:62:70:EF:4C (random) (RSSI -95), type 2, AD data len 4
Device found: D8:7D:FC:AE:37:F0 (random) (RSSI -67), type 3, AD data len 8
Device found: 48:1F:C0:29:77:C2 (random) (RSSI -73), type 2, AD data len 4
Device found: 46:B7:35:F5:D7:BE (random) (RSSI -86), type 3, AD data len 17
Device found: E5:4A:F1:1C:3C:39 (random) (RSSI -88), type 3, AD data len 8
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

ここで使用している [conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) は、Zephyr ビルドにおける Bluetooth 関連機能を有効にします。

#### Wi-Fi

このセットアップをテストするために、Zephyr に含まれる既存のサンプルを使用できます。

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます。

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

ローカルネットワークの確認や接続を行うためのコマンドがいくつか用意されています。詳細については、[サンプルの README](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) を参照してください。

```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable

```

なぜこのサンプルが動作するのかを確認するために、少し掘り下げてみましょう。

```
&wifi {
 status = "okay";
};
```

アプリの [overlay ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay) は、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、サンプルロジックに Wi-Fi を有効にするよう指示するオーバーレイがサンプルに情報を与えるため、この例を利用できます。

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

ここで使用している [conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf) は、Zephyr ビルドにおける複数のネットワーク関連機能を有効にします。

#### TFLite - Hello World

Zephyr で TFLite を有効にし、更新します。

```
west config manifest.project-filter -- +tflite-micro
west update
```

サンプルをビルドしてボードに書き込みます。

```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

コンソールから結果が返されるのが確認できます。

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
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

TFLite に関する追加情報は本ガイドの範囲外ですが、このサンプルはデバイスの機能と、TFLite セットアップを実行するために必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD カード
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

このディスプレイは 2 色のみをサポートしているため、複数の黒いボックスと、隅で点滅するボックスが表示されます。

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

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

シールドは 0x3C レジスタに SSD1306 OLED スクリーンをセットアップします。chosen セクションで Zephyr の display として選択されています。

#### Grove - Expansion Board - ボタン

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
west flash
west espressif monitor
```

サンプルを実行した状態でボタンを押すと、オンボード LED が点灯します。

コンソールには次のような結果が返されます：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Set up button at gpio@60004000 pin 2
Set up LED at gpio@60004000 pin 21
Press the button
Button pressed at 842621292
Button pressed at 1164489270
Button pressed at 1329015357
Button pressed at 1577684271
Button pressed at 1728636675
Button pressed at 1728755988
Button pressed at 1822426500
```

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

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

shield / overlay ファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、overlay が Zephyr にボタンの設定方法を知らせ、関連するコードから利用できるようにするため、ボタンのサンプルを使用できます。

この場合、Xiao ESP32S3 上の D1 です。この overlay ではボタンとして動作するように設定されており、コードがそれを想定しているサンプルで使用できるように、sw0 という名前にエイリアスされています。

#### Grove - Expansion Board - ブザー

ここでは blinky PWM サンプルを使用して PWM 信号でブザーの動作を制御し、ブザーを鳴らします。そのために、A3 ピン用の PWM を有効にするカスタム overlay を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32s3/xiao_expansion_buzzer.overlay"
```

フラッシュ後、サンプルの実行に伴って音が変化する一連のブザー音が聞こえるはずです。

なぜ動作するのか見てみましょう：

```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
    aliases {
        pwm-0 = &ledc0;
        pwm-led0 = &pwm_buzzer;
    };

    pwmleds {
        compatible = "pwm-leds";
        pwm_buzzer: pwm_led_gpio0_4 {
            label = "PWM Buzzer";
            pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
        };
    };
};

&pinctrl {
    ledc0_default: ledc0_default {
        group1 {
            pinmux = <LEDC_CH0_GPIO4>;
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

overlay は、ESP32S3 のピン配置において A3 ピンに対応するピン 4 の PWM ロジックを構成します。

#### Grove - Expansion Board - SD カード

ここでは filesystem サンプルと Xiao Expansion Board シールドを使用して、SPI 経由で SD カードリーダーとのインターフェースを試します。Expansion Board シールドでは、対応する `&xiao_d 2` ピン用に CS ピンが設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は不要です。さらに準備として、SD カード機能を有効にするカスタム config を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

ではフラッシュしてモニタリングしましょう：

```
west flash
west espressif monitor
```

次のような応答が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.208,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.208,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

この場合、私の SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関係する要素を確認してみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する config では、SPI、SDMMC ディスクドライバ、および GPIO を有効にしています。この config がないと、サンプルが SD カードを見つけられないため、overlay によってエラーが発生します。

Xiao Expansion Board シールドの関連部分は次のとおりです：

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

前述のとおり、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピンセットアップをサポートするボードであればどれでも、D2 ピンを選択できるようにするために使用されます。

#### Grove - Temperature and Humidity Sensor (SHT31)

まずピンをはんだ付けし、Xiao ESP32S3 を Expansion Board に接続します。次に、Grove SHT31 と Expansion Board 上の I2C ポートの 1 つの間を grove コネクタケーブルで接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

コンソールには次のような結果が返されます：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
SHT3XD: 25.54 Cel ; 53.39 %RH
SHT3XD: 25.58 Cel ; 53.42 %RH
SHT3XD: 25.60 Cel ; 53.57 %RH
SHT3XD: 25.68 Cel ; 53.71 %RH
SHT3XD: 25.68 Cel ; 53.72 %RH
SHT3XD: 25.71 Cel ; 53.67 %RH
SHT3XD: 25.75 Cel ; 53.60 %RH
SHT3XD: 25.76 Cel ; 53.48 %RH
SHT3XD: 25.82 Cel ; 53.31 %RH
SHT3XD: 25.84 Cel ; 53.16 %RH
```

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

app overlay ファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、overlay が [sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) に対して、センサをボード用にどのように構成するかを知らせるため、SHT31 のサンプルを利用できます。

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

このサンプルでは、SPI を使用して 240x280 解像度の 1.69 インチ LCD に接続します。

まず、次の画像をガイドとして使用しながらボードを LCD スクリーンに接続します（ここでは Xiao ESP32S3 を使用していますが、接続に使用するピン配置は同じです）。

| 1.69-inch LCD SPI Display| XIAO ESP32S3 |
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
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

新しいファームウェアを書き込むと、デバイスには先ほど拡張ボードで見たのと同じデモ画面が表示されますが、SPI 接続のカラー LCD 用に更新されたものになります。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Xiao 用ラウンドディスプレイ

このセットアップをテストするには、Zephyr に用意されている既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスを書き込みます：

```
west flash
```

複数の色付きコーナーが表示され、そのうちの黒いコーナーが点滅している画面が見えるはずです。

別のサンプルでは、タッチスクリーンの使用方法を示しています：

```
west build -p always -b xiao_esp32s3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示しているミュージックデモは実際の画面の一部だけですが、それでもタッチスクリーンが動作している様子を確認できます。ご覧のように、再生ボタンに触れると音楽アニメーションが開始されます。

[shield file](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) から分かるように、これは SPI 経由で GC9A01 ラウンドディスプレイドライバと、i2c 経由で CHSC6X タッチモジュールにインターフェースすることで動作しています。

このサンプルがどのように動作しているか、少し掘り下げて見てみましょう：

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

- GC9A01 ディスプレイを、選択された Zephyr ディスプレイとして指定します
- LVGL ポインターロジックが CHSC6X モジュールを使用するように設定します
- シリアルを無効にします。これは、ピンがバックライトとタッチ割り込み用に使用されているためです（上記の `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;` から分かるように）
- D1、D2、D3 ピンを使用して、ラウンドディスプレイを SPI 用に設定します

[sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) は、さらに詳しく調べることができる [LVGL demo example code](https://github.com/lvgl/lvgl/tree/master/demos/music) に依存しています。

## ✨ Contributor Project

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975) によって支援されています。
- **Tim の尽力**に感謝するとともに、あなたの成果は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
