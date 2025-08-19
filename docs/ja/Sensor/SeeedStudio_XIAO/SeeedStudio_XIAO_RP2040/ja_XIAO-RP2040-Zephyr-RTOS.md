---
description: XIAO RP2040 と Zephyr(RTOS)
title:  XIAO RP2040 と Zephyr(RTOS)
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 05/15/2025
  author: timo614
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO RP2040 と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

このウィキでは、[Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/xiao_rp2040_getting_started/) に対する [Zephyr](https://www.zephyrproject.org/) のサポートについて説明します。このガイドを利用することで、ボードで利用可能な機能セットを活用できるようになります。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小型フットプリントのカーネルに基づいており、リソースが制約された組み込みシステムでの使用を目的としています。これには、シンプルな組み込み環境センサーや LED ウェアラブルデバイスから、高度な組み込みコントローラー、スマートウォッチ、IoT ワイヤレスアプリケーションまでが含まれます。

Zephyr では、サポートされている各デバイスに対して、ボードとその機能を記述する [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) ファイルが用意されています。[Xiao RP2040 Zephyr ボードページ](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) では、現在利用可能なサポート機能について説明しており、これは [ボードの dts ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7) によって定義されています。

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyr を使用する最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。関連するセットアップ手順については、[Zephyr のはじめにガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンがセットアップされ、関連する SDK がダウンロードされたら、アプリケーション開発を開始できます。

Xiao RP2040 の場合、さらなるセットアップ情報については [ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) を参照してください。

Xiao RP2040 をプログラムするには、以下の手順を実行します：
1. サンプルまたはアプリケーションをビルドする
2. Xiao RP2040 を接続する
3. `B`（ブート）ボタンを押しながら `R`（リセット）ボタンを押して、デバイスをマスストレージデバイスとしてマウントする
4. フラッシュコマンドを実行してデバイスをフラッシュする：`west flash -r uf2`

最も簡単な例として、ボード上で「Hello World」サンプルを実行します。Zephyr インストールディレクトリに移動した後、以下のコマンドを実行します。

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

前述のようにブートローダーモードに入り、次にデバイスをフラッシュします：

```
west flash -r uf2
```

デバイスはファイルを受信した後にリセットされ、USB 経由でシリアル接続が確立されます。

デバイスのポートを確認します。例えば、Ubuntu では `ls /dev/tty*` を入力して、USB が接続されたときに表示されるデバイスを確認します。

この例では、新しく追加されたデバイスとして `/dev/ttyACM0` が表示されます。

screen を使用して接続し、シリアル応答をモニタリングします：
```
screen /dev/ttyACM0 115200
```

以下のような応答が表示されるはずです：
```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このウィキ記事に含まれるコマンドは、Zephyr ルートに対して `../applications/xiao-zephyr-examples` に配置されていると仮定しています。以下のコマンドを更新することで、別のパスを指定することも可能です。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio 拡張ボード</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
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

Seeed Studio XIAO RP2040でGroveモジュールを使用するために、[Seeed Studio XIAO用拡張ベース](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、XIAO RP2040を接続します。

その後、ボード上のGroveコネクタを使用してGroveモジュールを接続することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

Grove Shield for Seeed Studio XIAOのGroveコネクタにGroveモジュールを接続する際には、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### 主な機能

- WS2812 LED
- LED PWM
- クロック
- TFLite

#### WS2812 LED

この例では、Xiao RP2040はオンボードLEDを使用し、赤、緑、青を連続的に点滅させます。

このセットアップをテストするには、Zephyrの既存のサンプルを使用します：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

オンボードのWS2812 LEDが赤、青、緑を連続的に点滅する様子が見られます。

この例がなぜ動作するのかを少し掘り下げてみましょう：
```

 / {
     aliases {
         led-strip = &ws2812;
     };
 }
 &gpio0 {
     status = "okay";
     neopixel-power-enable {
		gpio-hog;
		gpios = <11 GPIO_ACTIVE_HIGH>;
		output-high;
	};
 };
 &pio0 {
     status = "okay";

     pio-ws2812 {
         compatible = "worldsemi,ws2812-rpi_pico-pio";
         status = "okay";
         pinctrl-0 = <&ws2812_pio0_default>;
         pinctrl-names = "default";
         bit-waveform = <3>, <3>, <4>;

         ws2812: ws2812 {
             status = "okay";
             gpios = <&gpio0 12 GPIO_ACTIVE_HIGH>;
             chain-length = <1>;
             color-mapping = <LED_COLOR_ID_GREEN
                      LED_COLOR_ID_RED
                      LED_COLOR_ID_BLUE>;
             reset-delay = <280>;
             frequency = <800000>;
         };
     };
 };
```

これらのデバイスツリーの要素は、オンボードのWS2812とその利用方法を示しています。WS2812のVCCラインがRP2040のピン11に設定されているため、デバイスツリーはgpio-hog機能を利用してLEDを環境変数を介して有効にします。この場合、ピン12がWS2812のデータライン用に設定されているため、CONFIG_GPIO_HOGS環境変数を有効にすると、LEDストリップが例で使用可能になります。

この動作は、例がボードディレクトリ内にxiao_rp2040.confファイルを持っているため、その設定がボードの設定と統合されて有効になることによります。

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

オンボードのWS2812を利用したい場合、この変数を有効にして電力供給を可能にすることをお勧めします。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

この例では、Xiao RP2040のPWM機能を示します。オンボードの青色LEDを使用し、PWMを使って連続的にフェードさせます。

このセットアップをテストするには、Zephyrの既存のサンプルを使用します：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

RGBオンボードLEDの青色光がゆっくりとフェードし、そのプロセスを繰り返す様子が見られます。

この例がなぜ動作するのかを少し掘り下げてみましょう：
```
&pwm {
	status = "okay";
	divider-int-4 = <255>;
};
```

このロジックは、例の`boards/xiao_rp2040.overlay`内でデバイスツリーから通常は無効化されているPWM機能を有効にします。Xiao RP2040のセットアップでは、青色のオンボードRGB LEDがデフォルトのPWMとして設定されています。

Zephyrボードファイルの`xiao_rp2040-pinctrl.dtsi`を見ると、以下の設定が存在します：
```
	pwm_ch4b_default: pwm_ch4b_default {
		group1 {
			pinmux = <PWM_4B_P25>;
		};
	};
```

この場合、PWMは設定されたデバイスツリーのPWM LEDを使用しており、ピン25（青色LED）に関連付けられています。PWMピンは[RP2040ドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html)から参照できます。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### 時計

ここでは、既存のサンプルとコンソールオーバーレイを使用します：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスにフラッシュします：
```
west flash -r uf2
```

モニターに接続します（ボードをすばやくリセットして再起動を確認してください）：
```
screen /dev/ttyACM0 115200
```

設定された遅延後にタイマーが次々と作動する様子が表示されます：
```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Counter alarm sample

Set alarm in 2 sec (2000000 ticks)
!!! Alarm !!!
Now: 2
Set alarm in 4 sec (4000000 ticks)
!!! Alarm !!!
Now: 6
Set alarm in 8 sec (8000000 ticks)
!!! Alarm !!!
Now: 14
Set alarm in 16 sec (16000000 ticks)
!!! Alarm !!!
Now: 30
Set alarm in 32 sec (32000000 ticks)
```

#### TFLite - Hello World

ZephyrでTFLiteを有効化し、更新します：
```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、TFLiteの「Hello World」サンプルを使用し、USBシリアル経由で応答を読み取るためにコンソールオーバーレイと設定ファイルを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスにフラッシュします：
```
west flash -r uf2
```

モニターに接続します：
```
screen /dev/ttyACM0 115200
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

### 追加コンポーネント

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SDカード
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - 拡張ボード - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用します：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスにフラッシュします：
```
west flash -r uf2
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
};
```

この例のシールドオーバーレイファイルは、0x3CレジスタにSSD1306 OLEDスクリーンを設定します。`chosen`セクションでZephyrディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyrの既存のサンプルを使用します。このサンプルではUSBコンソールオーバーレイと設定ファイルを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスにフラッシュします：
```
west flash -r uf2
```

モニターに接続します：
```
screen /dev/ttyACM0 115200
```

このサンプルでは、ボタンを押すとオンボードLEDが点灯します。

コンソールから結果が返されます：
```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Set up button at gpio@40014000 pin 27
Set up LED at gpio@40014000 pin 25
Press the button
Button pressed at 1934761489
Button pressed at 2178879257
Button pressed at 3084766465
Button pressed at 3388674993
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

アプリケーションオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、Zephyrがボタンを設定し、関連するコードで利用できるようになります。

この場合、GPIO 27はXiao RP2040のPin A1/D1に対応しています。このオーバーレイではボタンとして動作するように設定されており、`sw0`というエイリアス名に関連付けられています。これにより、コードがこの名前を期待するサンプルで使用することができます。

#### Grove - 拡張ボード - ブザー

ブザーをアクティブにするために、PWM信号を使用して制御する`blinky PWM`のサンプルを使用します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

uf2ファイルをフラッシュした後、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

これが動作する理由を見てみましょう：
```
/delete-node/ &pwm_led0;

/ {
	aliases {
		pwm-led = &pwm_led0;
	};
};

&{/pwm_leds} {
	status = "okay";
	compatible = "pwm-leds";

	pwm_led0: pwm_led0 {
		status = "okay";
		pwms = <&pwm 13 PWM_HZ(880) PWM_POLARITY_NORMAL>;
	};
};

&pinctrl {
	pwm_ch6b_default: pwm_ch6b_default {
		group1 {
			pinmux = <PWM_6B_P29>;
		};
	};
};

&pwm {
	status = "okay";
	pinctrl-0 = <&pwm_ch6b_default>;
	divider-frac-6 = <15>;
	divider-int-6 = <255>;
};
```

使用されているオーバーレイは、既存の`pwm_led0`ノードを削除します。このボードはオンボードLEDのPWM設定をサポートしているためです。その後、A3ピンをPWMとして使用するように設定します。

ここではPWMのチャンネル6Bを使用しています。これは、Xiao RP2040のA3ピンに関連付けられているピンが29であるためです。詳細や他のピンのマッピングについては、[RP2040 pinctrlドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150)を参照してください。

#### Grove - 拡張ボード - SDカード

ここでは、Xiao拡張ボードシールドを使用して、SPI経由でSDカードリーダーとインターフェースするためにファイルシステムサンプルを使用します。拡張ボードシールドには、CSピンが`&xiao_d 2`ピンに設定されているため、シールドを追加する以外に特別な作業は必要ありません。SDカード機能を有効にするカスタム設定を使用して準備します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

モニターに接続します：
```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.201,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.202,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

この場合、SDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を見てみましょう：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバ、およびGPIOを有効にしています。この設定がないと、オーバーレイはエラーを引き起こし、サンプルがSDカードを見つけることができません。

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

前述のように、`&xiao_d 2`ピンマッピングは、使用するボードが`&xiao_d`ピン設定をサポートしている限り、D2ピンを選択できるようにします。

#### Grove - 温湿度センサー (SHT31)

まず、ピンをはんだ付けし、Xiao RP2040を拡張ボードに接続します。その後、Grove SHT31と拡張ボードのI2Cポートの1つの間にGroveコネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

このセットアップをテストするには、Zephyrの既存のサンプルを使用し、オーバーレイと設定でUSBコンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

モニターに接続します：
```
screen /dev/ttyACM0 115200
```

コンソールに結果が表示されます：
```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
SHT3XD: 26.20 Cel ; 52.49 %RH
SHT3XD: 26.19 Cel ; 52.69 %RH
SHT3XD: 26.20 Cel ; 52.75 %RH
SHT3XD: 26.24 Cel ; 52.88 %RH
SHT3XD: 26.24 Cel ; 52.67 %RH
SHT3XD: 26.23 Cel ; 52.49 %RH
SHT3XD: 26.23 Cel ; 52.48 %RH
SHT3XD: 26.24 Cel ; 52.30 %RH
```

この例が動作する理由を詳しく見てみましょう：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

アプリケーションオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、SHT31のサンプルを利用でき、オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)にセンサーをボード用に設定する方法を通知します。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像を参考にして、ボードをLCDスクリーンに接続してください（この例ではXiao RP2040を使用していますが、ここでの接続には同じピン配置が使用されます）。

| 1.69インチLCD SPIディスプレイ | XIAO RP2040 |
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

次に、ハードウェアの準備が整ったら、フラッシュ用のuf2ファイルをビルドします：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

新しいファームウェアがインストールされると、デバイスは以前拡張ボードで表示されていたデモ画面を、SPI経由のカラーLCDに更新して表示します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558)によってサポートされています。
- **Timの努力**に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>