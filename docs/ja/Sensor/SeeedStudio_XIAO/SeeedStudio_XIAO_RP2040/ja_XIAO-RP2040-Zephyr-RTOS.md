---
description: XIAO RP2040 With Zephyr(RTOS)
title:  XIAO RP2040 With Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
---

# XIAO RP2040 と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

このwikiでは、[Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/xiao_rp2040_getting_started/)の[Zephyr](https://www.zephyrproject.org/)サポートについて説明します。このガイドの支援により、ボードで利用可能な機能セットを活用できるようになります。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、リソース制約のある組み込みシステムでの使用を目的として設計された小フットプリントカーネルに基づいています：シンプルな組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまで対応します。

Zephyrは、サポートされている各デバイスに対して、ボードとその機能を記述する[devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html)ファイルを持っています。[Xiao RP2040 Zephyrボードページ](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features)では、現在利用可能なサポート機能について説明されており、これは[ボードのdtsファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7)によって定義されています。

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyrを使用する最初のステップは、ローカル開発用のSDKとツールチェーンをセットアップすることです。お使いの環境に必要な関連セットアップ手順については、[Zephyr入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)を参照してください。

Zephyrツールチェーンがセットアップされ、関連するSDKがダウンロードされたら、アプリケーション開発を開始できます。

Xiao RP2040については、さらなるセットアップ情報として[ボード説明ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html)を参照できます。

Xiao RP2040をプログラムするには、以下の手順を実行できます：

1. サンプルまたはアプリケーションをビルドする
2. Xiao RP2040を接続する
3. `B`（ブート）と指定されたボタンを押しながら`R`（リセット）を押すと、デバイスがマスストレージデバイスとしてマウントされます
4. フラッシュコマンドを実行してデバイスをフラッシュする `west flash -r uf2`

最もシンプルな例は、ボード上で「Hello World」サンプルを実行することです。Zephyrインストールのディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

前述のようにブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

デバイスはファイルを受信した後にリセットされ、お使いのマシンはシリアル通信用にUSB経由で接続されるはずです。

デバイスのポートを見つけてください。例えば、Ubuntuでは `ls /dev/tty*` と入力し、USBが接続されたときに表示されるデバイスを確認してください。

私の例では、新しく追加されたデバイスとして `/dev/ttyACM0` が表示されます。

screenを使用して接続し、シリアル応答を監視できます：

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

Xiaoとその拡張ボードでZephyrを使用するプロセスを支援するため、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このwiki記事に含まれるコマンドは、zephyrルートに対して相対的に`../applications/xiao-zephyr-examples`に配置されていることを前提としています。以下のコマンドでパスを更新することで、代替パスを提供できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
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

  Seeed Studio XIAO RP2040でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO RP2040を接続します。

  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  GroveモジュールをSeeed Studio XIAO用Grove ShieldのGroveコネクタに接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### 主要機能

- WS2812 LED
- LED PWM
- クロック
- TFLite

#### WS2812 LED

この例では、Xiao RP2040がオンボードLEDを利用し、赤、緑、青を連続的に点滅させます。

このセットアップをテストするために、Zephyrの既存サンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

オンボードのWS2812 LEDが赤、青、緑を点滅パターンで連続的に循環しているのが見えるでしょう。

この例がなぜ動作するのかを詳しく見てみましょう：

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

デバイスツリーのこれらの要素は、オンボードのWS2812とその利用方法を示しています。WS2812のVCCラインがRP2040のピン11に設定されているため、デバイスツリーはgpio-hog機能を利用して、環境変数を通じてLEDを有効にできるようにしています。この場合、ピン12がWS2812のデータライン用に設定されているため、CONFIG_GPIO_HOGS環境変数が有効になっていると、LEDストリップをサンプルで使用できるようになります。

これが機能するのは、サンプルがboardsディレクトリの一部としてxiao_rp2040.confファイルを持っているためで、その設定をボードの設定とマージして有効にするからです。

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

オンボードのWS2812を利用したい場合は、この変数を有効にして電力を供給できるようにすることをお勧めします。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

この例では、Xiao RP2040のPWM機能を実演します。そのために、オンボードの青色LEDを使用し、PWMを使って連続的にフェードさせます。

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

基板上のRGB LEDの青い光がゆっくりとフェードし、再びそのプロセスを繰り返すのが見えるでしょう。

この例がなぜ動作するのかを理解するために、少し詳しく見てみましょう：

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

この `boards/xiao_rp2040.overlay` の例におけるロジックの部分は、通常無効になっているデバイスツリーからPWM機能を有効にします。Xiao RP2040 セットアップでは、青色のオンボードRGB LEDがデフォルトのPWMとして設定されています。

zephyr ボードファイルの `xiao_rp2040-pinctrl.dtsi` で確認できるように、以下が存在します：

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

この場合、PWMは設定されたdevicetree pwm LEDを使用しており、これはピン25（青色LED）に関連付けられています。PWMピンは[RP2040ドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html)から参照できます。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### Clock

これには既存のサンプルとコンソールオーバーレイを使用します：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスをフラッシュしてください：

```
west flash -r uf2
```

モニターに接続します（ボードが確実に再起動するように素早くリセットした後）：

```
screen /dev/ttyACM0 115200
```

設定された遅延の後、一連のタイマーが次々とトリガーされるのが確認できます：

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

ZephyrでTFLiteを有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、サンプルのtflite「Hello World」を、コンソールオーバーレイとconfと組み合わせて使用し、USB シリアル経由でレスポンスを読み取ります。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスをフラッシュしてください：

```
west flash -r uf2
```

モニターに接続：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

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

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
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

この例のシールドオーバーレイファイルは、0x3Cレジスタに SSD1306 OLED スクリーンを設定します。これは chosen セクションで zephyr ディスプレイとして選択されます。

#### Grove - 拡張ボード - ボタン

この設定をテストするために、USBコンソールオーバーレイとconfと一緒に使用するZephyrの既存のサンプルを使用できます。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

モニターに接続：

```
screen /dev/ttyACM0 115200
```

ボタンをサンプルで押すと、オンボードLEDが点灯します。

コンソールから結果が返されるのが確認できます：

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

この場合、GPIO 27はXiao RP2040のピンA1/D1に対応します。このオーバーレイでボタンとして動作するように設定され、sw0という名前でエイリアスされ、このコードを期待するサンプルで使用できるようになります。

#### Grove - 拡張ボード - ブザー

blinky PWMの例を使用してブザーを有効化し、PWM信号を介してその動作を制御します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

ブートローダーモードに入り、デバイスをフラッシュしてください：

```
west flash -r uf2
```

uf2ファイルをフラッシュした後、サンプルが実行される過程で音が変化する一連のブザー音が聞こえ始めるはずです。

これがなぜ動作するのかを見てみましょう：

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

使用中のオーバーレイは、まず既存の `pwm_led0` ノードを削除します。このボードはPWM用のオンボードLEDセットアップを通じてサポートされているためです。その後、A3ピンをPWMとして使用するように設定します。

ここではPWMにチャンネル6Bを使用しています。Xiao RP2040のA3に関連するピンはピン29だからです。詳細情報や他のピンのピンマッピングについては、[RP2040 pinctrlドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150)を参照してください。

#### Grove - 拡張ボード - SD カード

ここではファイルシステムサンプルをXiao Expansion Boardシールドと組み合わせて使用し、SPI経由でSDカードリーダーとのインターフェースを試します。拡張ボードシールドには、関連する `&xiao_d 2` ピン用にCSピンが設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

モニターに接続：

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

前述のように、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なく D2 ピンを選択できるようにするために使用されます。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao RP2040 を拡張ボードに接続します。次に、Grove SHT31 と拡張ボード上の I2C ポートの 1 つの間に Grove コネクタケーブルを接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

この設定をテストするために、Zephyr の既存のサンプルを使用し、オーバーレイと設定ファイルで USB コンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

モニターに接続：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

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

この例を少し詳しく見て、なぜ動作するのかを理解しましょう：

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

まず、以下の画像をガイドとして使用してボードをLCDスクリーンに接続してください（この場合はXiao RP2040を使用していますが、接続には同じピンレイアウトが使用されます）。

| 1.69インチLCD SPIディスプレイ| XIAO RP2040 |
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

次に、ハードウェアの準備ができたら、フラッシュ用のuf2ファイルをビルドできます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

新しいファームウェアが配置されると、デバイスは以前に拡張ボードで見たのと同じデモ画面を表示しますが、今度はSPI経由のカラーLCD用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558)によってサポートされています。
- **Timの努力**に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
