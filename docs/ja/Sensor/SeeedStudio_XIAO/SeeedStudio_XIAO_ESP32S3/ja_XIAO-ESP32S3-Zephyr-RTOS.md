---
description: XIAO ESP32S3(sense) と Zephyr(RTOS)
title:  XIAO ESP32S3(sense) と Zephyr(RTOS)
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao_esp32s3_zephyr_rtos
last_update:
  date: 05/15/2025
  author: timo614
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3(sense) と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

このウィキでは、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) に対する [Zephyr](https://www.zephyrproject.org/) のサポートについて説明します。このガイドを使用することで、ボードで利用可能な機能セットを活用できるようになります。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小型フットプリントのカーネルに基づいており、リソースが制約された組み込みシステムでの使用を目的としています。これには、シンプルな組み込み環境センサーや LED ウェアラブルデバイスから、高度な組み込みコントローラー、スマートウォッチ、IoT ワイヤレスアプリケーションまでが含まれます。

Zephyr では、サポートされている各デバイスに対して、ボードとその機能を記述する [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) ファイルが用意されています。[Xiao ESP32S3 Zephyr ボードページ](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) では、現在利用可能なサポート機能が説明されており、これは [ボードの dts ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7) によって定義されています。

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyr を使用するための最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。関連するセットアップ手順については、[Zephyr のはじめにガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンがセットアップされ、関連する SDK がダウンロードされたら、アプリケーション開発を開始できます。

Xiao ESP32S3 の場合、[ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) を参照して、さらに詳細なセットアップ情報を確認できます。

ESP32S3 を使用するために必要なブロブを取得するには、以下のコマンドを実行してください。

```
west blobs fetch hal_espressif
```

これが完了したら、サンプルをビルドしてボードにフラッシュできます。

最も簡単な例として、ボード上で "Hello World" サンプルを実行します。Zephyr インストールディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

最後のコマンドを実行すると、"Hello World!" の挨拶が表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このウィキ記事に含まれるコマンドは、Zephyr ルートに対して `../applications/xiao-zephyr-examples` に配置されていると仮定しています。以下のコマンドを更新して、別のパスを指定することも可能です。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio 拡張ボード</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

  Seeed Studio XIAO ESP32S3でGroveモジュールを使用するために、[Seeed Studio XIAO用拡張ベース](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、XIAO ESP32S3を接続します。

  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  Grove Shield for Seeed Studio XIAOのGroveコネクタにGroveモジュールを接続する際には、以下の図を参照して適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### 主な機能

- Bluetooth
- Wi-Fi
- TFLite

#### Bluetooth

このセットアップをテストするには、Zephyrの既存のサンプルを使用します：

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：
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

[confファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)は、ZephyrビルドのBluetooth関連機能を有効にします。

#### Wi-Fi

このセットアップをテストするには、Zephyrの既存のサンプルを使用します：

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

ボードにコマンドを送信するためのコンソールが表示されます：
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

いくつかのコマンドが存在し、ローカルネットワークを確認したり接続したりできます。詳細は[サンプルのREADME](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst)を参照してください。
```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable

```

この例が動作する理由を少し掘り下げてみましょう：
```
&wifi {
	status = "okay";
};
```

アプリの[オーバーレイファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay)は、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、サンプルロジックにWi-Fiを有効にするよう指示し、例を利用できます。

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

[confファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf)は、Zephyrビルドのネットワーキング関連機能を有効にします。

#### TFLite - Hello World

ZephyrでTFLiteを有効にし、更新します：
```
west config manifest.project-filter -- +tflite-micro
west update
```

サンプルをビルドし、ボードにフラッシュします：
```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

コンソールから結果が返されます：
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

TFLiteに関する追加情報はこのガイドの範囲外ですが、この例はデバイスの能力とTFLiteセットアップを実行するために必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SDカード
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao用ラウンドディスプレイ](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - 拡張ボード - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするには、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

このディスプレイは2色のみをサポートしているため、複数の黒いボックスと角に点滅するボックスが表示されます。

この例がなぜ機能するのかを少し掘り下げてみましょう：
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

シールドは0x3CレジスタにSSD1306 OLEDスクリーンを設定します。これは`chosen`セクションでZephyrディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするには、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
west flash
west espressif monitor
```

サンプルでボタンを押すと、オンボードLEDが点灯します。

コンソールから以下のような結果が返されます：

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

この例がなぜ機能するのかを少し掘り下げてみましょう：
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

シールド/オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、ボタンの例をオーバーレイがZephyrにボタンを設定させ、関連するコードで利用できるようにします。

この場合、Xiao ESP32S3のD1ピンがボタンとして動作するように設定されており、サンプルでコードが期待する`sw0`という名前にエイリアスされています。

#### Grove - 拡張ボード - ブザー

PWM信号を使用してブザーを制御するために、blinky PWMの例を使用します。このため、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32s3/xiao_expansion_buzzer.overlay"
```

フラッシュ後、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

これがなぜ機能するのかを見てみましょう：
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

オーバーレイはESP32S3のピン4（A3ピンに対応）にPWMロジックを設定します。

#### Grove - 拡張ボード - SDカード

ここでは、Xiao拡張ボードシールドを使用してSPI経由でSDカードリーダーとインターフェースするためにファイルシステムサンプルを使用します。拡張ボードシールドには、関連する`&xiao_d 2`ピンにCSピンが設定されているため、シールドを追加する以外にボードにこの機能を関連付けるための作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

次にフラッシュしてモニターします：
```
west flash
west espressif monitor
```

以下のような応答が表示されるはずです：
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

この場合、私のSDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を確認してみましょう：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバ、およびGPIOを有効にしています。この設定がないと、サンプルがSDカードを見つけられず、オーバーレイがエラーを引き起こします。

Xiao拡張ボードシールドの関連部分は以下の通りです：

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

前述のように、`&xiao_d 2`ピンマッピングは、使用するボードが`&xiao_d`ピンセットアップをサポートしている限り、D2ピンを選択できるように使用されています。

#### Grove - 温湿度センサー (SHT31)

まず、ピンをはんだ付けし、Xiao ESP32S3を拡張ボードに接続します。その後、Grove SHT31と拡張ボードのI2Cポートの1つをGroveコネクタケーブルで接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

このセットアップをテストするには、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

コンソールに以下のような結果が表示されます：
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

この例がなぜ動作するのかを少し掘り下げてみましょう：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

アプリケーションオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、SHT31の例を利用でき、オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)にセンサーをボード用に設定する方法を通知します。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用して、ボードをLCDスクリーンに接続します（この場合、Xiao ESP32S3を使用していますが、ここでの接続には同じピンレイアウトが使用されます）。

| 1.69インチLCD SPIディスプレイ | XIAO ESP32S3 |
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

次に、ファームウェアをビルドしてフラッシュします：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

新しいファームウェアが適用されると、デバイスは拡張ボードで以前に見たデモ画面を表示しますが、今回はSPI経由でカラーLCDに更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Xiao用ラウンドディスプレイ

このセットアップをテストするには、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash
```

複数の色付きコーナーが表示され、黒いコーナーが点滅するディスプレイが表示されます。

別の例では、タッチスクリーンの使用を示しています：

```
west build -p always -b xiao_esp32s3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示されている音楽デモは画面の一部のみを使用していますが、タッチスクリーンの動作を示しています。再生ボタンをタッチすると、音楽アニメーションがオンになります。

[シールドファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)からわかるように、これはSPI経由でGC9A01ラウンドディスプレイドライバと、I2C経由でCHSC6Xタッチモジュールとインターフェースすることで動作します。

この例がどのように動作するのかを少し掘り下げてみましょう：
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
 * xiao_serialは、XiaoのD6およびD7ピンを使用します。これらはそれぞれ、
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

このシールドは以下の機能を実行します：
- GC9A01ディスプレイをZephyrディスプレイとして選択します。
- LVGLポインターロジックをCHSC6Xモジュールで使用するように設定します。
- シリアルを無効化します（ピンがバックライトとタッチ割り込みに使用されるため、上記のように`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`で確認できます）。
- D1、D2、D3ピンを使用してSPI用の円形ディスプレイを設定します。

[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)は、[LVGLデモ例コード](https://github.com/lvgl/lvgl/tree/master/demos/music)に基づいており、さらに詳しく調べることができます。


## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975)によってサポートされています。
- **Timの努力**に感謝します。あなたの作業は[こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)で展示されます。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>