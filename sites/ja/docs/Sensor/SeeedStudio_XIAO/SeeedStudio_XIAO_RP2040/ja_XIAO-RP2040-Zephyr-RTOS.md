---
description: XIAO RP2040 と Zephyr(RTOS)
title: XIAO RP2040 と Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2024-04-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-RP2040-Zephyr-RTOS/
---

# XIAO RP2040 と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

このWikiでは、[Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/xiao_rp2040_getting_started/) に対する [Zephyr](https://www.zephyrproject.org/) のサポートについて説明します。このガイドに従うことで、ボードで利用可能な機能セットを活用できるようになります。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小さなフットプリントのカーネルをベースとしており、リソースに制約のある組み込みシステムでの使用を目的に設計されています。シンプルな環境センサやLEDウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoTワイヤレスアプリケーションまで対応します。

各サポート対象デバイスごとに、Zephyr にはボードとその機能を記述した [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) ファイルがあります。[Xiao RP2040 Zephyr ボードページ](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) には、[ボードの dts ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7) によって定義されている、現在利用可能なサポート機能が記載されています。

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入門ガイド

Zephyr を扱う最初のステップは、ローカル開発用に SDK とツールチェーンをセットアップすることです。お使いの環境に必要なセットアップ手順については、[Zephyr 入門ガイド](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を参照してください。

Zephyr ツールチェーンをセットアップし、対応する SDK をダウンロードしたら、アプリケーション開発を開始できます。

Xiao RP2040 については、さらなるセットアップ情報として [ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) を参照できます。

Xiao RP2040 を書き込むには、次の手順を実行します。

1. サンプルまたは自分のアプリケーションをビルドする
2. Xiao RP2040 を接続する
3. `B`（ブート）に指定されたボタンを押しながら `R`（リセット）を押し、デバイスをマスストレージデバイスとしてマウントする
4. フラッシュコマンド `west flash -r uf2` を実行してデバイスを書き込む

最も簡単な例として、ボード上で "Hello World" サンプルを実行してみましょう。Zephyr をインストールしたディレクトリに移動した後、次のコマンドを実行します。

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

前述のとおりブートローダーモードに入り、次にデバイスを書き込みます。

```
west flash -r uf2
```

デバイスはファイルを受信するとリセットされ、マシンは USB 経由でシリアル接続されているはずです。

デバイスのポートを探します。例えば Ubuntu では `ls /dev/tty*` と入力し、USB を接続したときにどのデバイスが現れるかを確認します。

この例では、新しく追加されたデバイスとして `/dev/ttyACM0` が表示されます。

screen を使って接続し、シリアルの応答をモニタできます。

```
screen /dev/ttyACM0 115200
```

次のような応答が表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用している複数のオーバーレイと設定を含むリポジトリが用意されています。このWiki記事に含まれるコマンドは、そのリポジトリが Zephyr のルートから見て `../applications/xiao-zephyr-examples` に配置されていることを前提としています。別のパスを使用する場合は、以下のコマンド内のパスを変更してください。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェアの準備

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

### 開発者向け知識

#### XIAO Expansion Board

  Seeed Studio XIAO RP2040 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO RP2040 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2040" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際は、下の図に従って、適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### 主な機能

- WS2812 LED
- LED PWM
- クロック
- TFLite

#### WS2812 LED

この例では、Xiao RP2040 のオンボード LED を使用し、赤、緑、青を連続的に点滅させます。

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

ブートローダーモードに入り、デバイスを書き込みます。

```
west flash -r uf2
```

オンボードの WS2812 LED が、赤、青、緑を点滅パターンで連続的に切り替えるのが確認できます。

なぜこの例が動作するのか、少し掘り下げて見てみましょう。

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

devicetree のこれらの要素は、オンボード WS2812 とその利用方法を示しています。WS2812 の VCC ラインは RP2040 のピン11 に接続されているため、devicetree では gpio-hog 機能を利用して、環境変数を通じて LED を有効化できるようにしています。この場合、ピン12 が WS2812 のデータラインとして設定されているため、環境変数 CONFIG_GPIO_HOGS を有効にすると、この例で LED ストリップを使用できるようになります。

これが動作するのは一部、例の boards ディレクトリ内に xiao_rp2040.conf ファイルがあり、その設定がボードの設定とマージされて有効化されるためです。

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

オンボードの WS2812 を利用したい場合は、電源を供給できるよう、この変数を有効にすることを推奨します。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

この例では、Xiao RP2040 の PWM 機能をデモします。そのためにオンボードの青色 LED を使用し、PWM によって連続的にフェードさせます。

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用できます。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

ブートローダーモードに入り、デバイスを書き込みます。

```
west flash -r uf2
```

オンボード RGB LED の青色の光がゆっくりとフェードし、その動作が繰り返されるのが確認できます。

なぜこの例が動作するのか、少し掘り下げて見てみましょう。

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

この例の `boards/xiao_rp2040.overlay` にあるこのロジックによって、通常は無効になっている devicetree から PWM 機能が有効化されます。Xiao RP2040 の構成では、オンボード RGB LED の青色がデフォルトの PWM として設定されています。

Zephyr のボードファイルにある `xiao_rp2040-pinctrl.dtsi` を見ると、次のような記述が存在します。

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

この場合、PWM は設定済みの devicetree の PWM LED を使用しており、これはピン 25（青色 LED）に関連付けられています。PWM ピンは [RP2040 のドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html)から参照できます。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### クロック

ここでは既存のサンプルと、コンソール用オーバーレイを使用します：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

モニタに接続します（ボードが再起動するように素早くリセットした後）：

```
screen /dev/ttyACM0 115200
```

一定の遅延の後に、次々と一連のタイマーが動作するのが分かります：

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

TFLite を Zephyr で有効化し、更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

この例では、USB シリアル経由で応答を読み取るために、サンプルの tflite「Hello World」とコンソール用オーバーレイおよび conf を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから結果が返されるのが分かります：

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

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD カード
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr の既存サンプルを使用できます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

このディスプレイは 2 色のみをサポートしているため、複数の黒いボックスと、隅で点滅するボックスが表示されます。

なぜ動作するのか、この例を少し掘り下げてみましょう：

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

この例のシールドオーバーレイファイルでは、SSD1306 OLED 画面をレジスタ 0x3C に設定しています。chosen セクションで Zephyr のディスプレイとして選択されています。

#### Grove - Expansion Board - ボタン

このセットアップをテストするために、USB コンソール用オーバーレイと conf と共に使用する Zephyr の既存サンプルを利用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

モニタに接続します：

```
screen /dev/ttyACM0 115200
```

このサンプルでボタンを押すと、オンボード LED が点灯します。

コンソールから結果が返されるのが分かります：

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

なぜ動作するのか、この例を少し掘り下げてみましょう：

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

このアプリ用オーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使うことで、ボタンの例を利用できます。オーバーレイにより Zephyr がボタンを構成し、関連するコードで利用できるようにしているためです。

この場合、GPIO 27 は Xiao RP2040 上のピン A1/D1 に対応します。このオーバーレイではボタンとして動作するように設定されており、sw0 という名前にエイリアスされているため、この名前を想定しているサンプルコードで使用できます。

#### Grove - Expansion Board - ブザー

ここでは、ブザーの動作を PWM 信号で制御するために、blinky PWM の例を使ってブザーを動作させます。このために、A3 ピンの PWM を有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

uf2 ファイルを書き込むと、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

なぜ動作するのか見てみましょう：

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

使用しているオーバーレイでは、まず既存の `pwm_led0` ノードを削除します。このボードは PWM 用に設定されたオンボード LED によってサポートされているためです。その後、A3 ピンを PWM として使用できるように構成します。

ここでは PWM にチャネル 6B を使用しています。というのも、Xiao RP2040 上の A3 に対応するピンは 29 番ピンだからです。詳細や他のピンのピンマッピングについては、[RP2040 pinctrl ドキュメント](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150)を参照してください。

#### Grove - Expansion Board - SD カード

ここでは、ファイルシステムサンプルと Xiao Expansion Board シールドを使用して、SPI 経由で SD カードリーダーとのインターフェースを試します。Expansion Board シールドでは、CS ピンが対応する `&xiao_d 2` ピンに設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は不要です。さらに準備として、SD カード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

ブートローダーモードに入り、デバイスにフラッシュします：

```
west flash -r uf2
```

モニタに接続します：

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

この場合、私の SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関係する要素を確認してみましょう：

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

前述のように、`&xiao_d 2` ピンマッピングは、ボードが `&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なく D2 ピンを選択できるようにするために使用されます。

#### Grove - Temperature and Humidity Sensor (SHT31)

まずピンをはんだ付けし、Xiao RP2040 をエクスパンションボードに接続します。次に Grove コネクタケーブルを、Grove SHT31 とエクスパンションボード上の I2C ポートのいずれかの間に接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されている既存のサンプルを使用し、オーバーレイと conf で USB コンソールサポートを有効にします。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

ブートローダーモードに入り、デバイスを書き込みます：

```
west flash -r uf2
```

モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから次のような結果が返されます：

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

なぜこれが動作するのか、このサンプルを少し掘り下げてみましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

app オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、オーバーレイが [サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) に対して、ボード用にセンサをどのように設定するかを知らせるため、SHT31 のサンプルを利用できます。

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

この例では、SPI を使用して 240x280 解像度の 1.69 インチ LCD に接続します。

まず、次の画像をガイドとして使用してボードを LCD 画面に接続します（この例では Xiao RP2040 を使用していますが、ここでの接続には同じピン配置が使用されます）。

| 1.69-inch LCD SPI Display| XIAO RP2040 |
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

次に、ハードウェアの準備ができたら、書き込み用の uf2 ファイルをビルドします：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

ブートローダーモードに入り、デバイスを書き込みます：

```
west flash -r uf2
```

新しいファームウェアが書き込まれると、デバイスには、先ほどエクスパンションボードで見たのと同じデモ画面が表示されますが、今度は SPI 経由のカラー LCD 用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558) によってサポートされています。
- **Tim の尽力**に感謝します。あなたの成果は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

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
