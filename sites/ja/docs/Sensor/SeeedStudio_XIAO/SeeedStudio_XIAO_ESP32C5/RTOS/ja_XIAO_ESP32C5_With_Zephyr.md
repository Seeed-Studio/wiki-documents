---
title: XIAO ESP32-C5 と Zephyr(RTOS)
keywords:
  - xiao
  - esp32c5
  - Zephyr
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_with_zephyr
sku: 100010048
last_update:
  date: 4/28/2026
  author: Zeller
createdAt: '2026-04-28'
updatedAt: '2026-05-06'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_with_zephyr/
---

[**Zephyr**](https://www.zephyrproject.org/) OS は、小さなフットプリントのカーネルをベースとしており、リソースに制約のある組み込みシステムでの使用を想定して設計されています。シンプルな環境センサや LED ウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoT 無線アプリケーションまで対応します。

## はじめに

### ハードウェアの準備

以下の検証および関連作業を行うために、XIAO ESP32-C5 ボードを 1 枚用意してください。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェアの準備

この記事は Ubuntu 24.04 LTS をベースに開発および検証されています。Ubuntu、Mac、Windows 上で開発環境を構築するには、関連ドキュメントを参照してください。[Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)

:::tip
公式には **Ubuntu 24.04 LTS 以降のバージョン** の使用が推奨されています。これにより、環境依存関係によるトラブルを効果的に回避し、時間を節約できます。
:::

1. 仮想環境を有効化します。

新しい仮想環境を作成します：

```bash
python3 -m venv ~/zephyrproject/.venv
```

仮想環境を有効化します：

```bash
source ~/zephyrproject/.venv/bin/activate
```

2. **blinky** フォルダを開きます。

```bash
cd ~/zephyrproject/zephyr/samples/basic/blinky
```

3. overlay ファイルと prj.conf ファイルを更新します。

デフォルトのシリアルポートログ出力は GPIO11 と GPIO12 にマッピングされており、XIAO ESP32‑C5 上の D6 と D7 に対応します。
USB Serial/JTAG をログ出力に使用するには、シリアルポートのピンを USB Serial/JTAG の対応ピンに再マッピングする必要があります。同時に、XIAO ESP32‑C5 のハードウェア設計に従い、ユーザー LED ピンを GPIO27 に設定する必要があります。

:::tip
XIAO ESP32-C5 のピン配置に慣れていない場合は、[Pinlist](https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/#ハードウェア概要) を確認できます。
:::

新しい overlay ファイルを作成します

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/esp32c5_devkitc_esp32c5_hpcore.overlay
```

  overlay の内容を追加します

```overlay
/ {
    chosen {
        zephyr,console = &usb_serial;
        zephyr,shell-uart = &usb_serial;
    };

    aliases {
        led0 = &led0;
    };

    leds {
        compatible = "gpio-leds";
        led0: led_0 {
            gpios = <&gpio0 27 GPIO_ACTIVE_HIGH>;
            label = "LED0";
        };
    };
};

&usb_serial {
    status = "okay";
};
```

内容を追加したら、Ctrl + O でファイルを保存し、Ctrl + X で終了します。

prj.conf の内容を修正します

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/prj.conf
```

内容を次のように変更します。主に UART のマッピング関係を調整します。

```prj
CONFIG_USB_DEVICE_STACK=y
CONFIG_USB_CDC_ACM=y
CONFIG_UART_LINE_CTRL=y
CONFIG_GPIO=y
CONFIG_LOG=y
```

4. ターゲットボードを **esp32c5_devkitc** に設定し、コンパイルを開始します。

:::tip
**hpcore** は High Performance Core（高性能コア）を表します。通常、メインプログラムや高い性能が要求されるタスクの実行に使用されます。
:::

```bash
west  build -p always -b esp32c5_devkitc/esp32c5/hpcore ~/zephyrproject/zephyr/samples/basic/blinky
```

コンパイル成功時の表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_1.png" style={{width:800, height:'auto'}}/></div>

5. デバイスを書き込みます

:::tip
プログラムを書き込む前に、XIAO ESP32-C5 をブートローダーダウンロードモードに設定する必要があります。

方法：
BOOT ボタンを押し続けたまま、デバイスの電源を入れます。
:::

シリアルポートデバイスを確認します。デバイスは通常 `/dev/ttyACM0` です。

```bash
ls /dev/ttyACM*
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_2.png" style={{width:800, height:'auto'}}/></div>

シリアルポートデバイスファイルへのアクセス権制限のため、読み書き操作をサポートするように権限を変更する必要があります。

```bash
sudo chmod 666 /dev/ttyACM0
```

シリアルポートデバイスを指定し、ダウンロードを開始します。

```bash
west flash --esp-device /dev/ttyACM0
```

ダウンロード成功時の出力例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_3.png" style={{width:800, height:'auto'}}/></div>

6. 動作デモ

ダウンロードが正常に完了すると、LED が点滅し始めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/z1.gif" style={{width:800, height:'auto'}}/></div>

シリアルポートを開くと、LED ON または LED OFF のログ情報が出力されます。

```bash
west espressif monitor --port /dev/ttyACM0
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_4.png" style={{width:800, height:'auto'}}/></div>

## アプリケーション

XIAO ESP32-C5 は XIAO シリーズと互換性のある拡張ボードの使用をサポートしており、ペリフェラルやアプリケーションシナリオを容易に拡張できます。

### Expansion Board Base for XIAO を使用する

Expansion Board Base for XIAO には IIC インターフェースと、オンボードの 0.96 インチ OLED スクリーンが搭載されています。

#### ハードウェアの準備

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
   <th>Seeed Studio Expansion Board Base for XIAO with Grove OLED</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### ソフトウェアの準備

XIAO ESP32-C5 のピン定義によると、GPIO23 は SDA（D4）、GPIO24 は SCL（D5）に対応します。デバイスツリーノードの内容を作成および修正する必要があります。

1. display のサンプルを開きます。

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. overlay ファイルを追加します。

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

デバイスツリーノードの内容を追加します。

```dts
#include <zephyr/dt-bindings/pinctrl/esp32c5-pinctrl.h>
#include <zephyr/dt-bindings/i2c/i2c.h>

&pinctrl {
    i2c0_custom: i2c0_custom {
        group1 {
            pinmux = <I2C0_SDA_GPIO23>,
                     <I2C0_SCL_GPIO24>;
            bias-pull-up;
            drive-open-drain;
            output-high;
        };
    };
};

&i2c0 {
    status = "okay";
    clock-frequency = <I2C_BITRATE_FAST>;
    pinctrl-0 = <&i2c0_custom>;
    pinctrl-names = "default";

    ssd1306_128x64: ssd1306@3c {
        compatible = "solomon,ssd1306";
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

/ {
    chosen {
        zephyr,display = &ssd1306_128x64;
    };
};
```

3. コンパイルと書き込み

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### 結果

Expansion Board Base for XIAO に画面効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_5.jpg" style={{width:800, height:'auto'}}/></div>

### Round Display for Seeed Studio XIAO を使用する

Round Display for Seeed Studio XIAO は、XIAO シリーズ向けに特別に設計された円形ディスプレイです。オンボードに GC9A01 ドライバチップを搭載し、標準的な SPI 通信プロトコルを採用しています。

#### ハードウェアの準備

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
   <th>Round Display for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-104030087-seeed-studio-round-display-for-xiao-new-first.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### ソフトウェアの準備

1. ディスプレイのサンプルを開きます。

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. overlay ファイルを追加します。

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

デバイスツリーノードの内容を追加します。

<details>
<summary>esp32c5_devkitc_esp32c5_hpcore.overlay</summary>

```dts
/*
 * Copyright (c) 2026
 * SPDX-License-Identifier: Apache-2.0
 *
 * Standalone overlay for GC9A01 round display on XIAO ESP32-C5.
 * Does not depend on seeed_xiao_round_display shield.
 *
 * Pin mapping (XIAO ESP32-C5):
 *   D1  = GPIO0  -> display CS  (active low)
 *   D2  = GPIO25 -> SD card CS  (active low)
 *   D3  = GPIO7  -> display DC  (active high)
 *   D4  = GPIO23 -> SDA
 *   D5  = GPIO24 -> SCL
 *   D6  = GPIO11 -> TX (disabled, reused for backlight control)
 *   D7  = GPIO12 -> touch IRQ   (active low)
 *   D8  = GPIO8  -> SCK
 *   D9  = GPIO9  -> MISO
 *   D10 = GPIO10 -> MOSI
 */

#include <freq.h>
#include <zephyr/dt-bindings/pinctrl/esp32c5-pinctrl.h>
#include <zephyr/dt-bindings/display/panel.h>

/ {
    chosen {
        zephyr,display = &gc9a01_round_display;
        zephyr,touch = &chsc6x_round_display;
    };

    lvgl_pointer {
        compatible = "zephyr,lvgl-pointer-input";
        input = <&chsc6x_round_display>;
    };

    vbatt {
        compatible = "voltage-divider";
        io-channels = <&adc0 0>;
        output-ohms = <470000>;
        full-ohms = <940000>;
    };

    aliases {
        rtc = &pcf8563_round_display;
    };
};

&pinctrl {
    /* I2C0: SDA = GPIO23 (D4), SCL = GPIO24 (D5) */
    i2c0_custom: i2c0_custom {
        group1 {
            pinmux = <I2C0_SDA_GPIO23>,
                     <I2C0_SCL_GPIO24>;
            bias-pull-up;
            drive-open-drain;
            output-high;
        };
    };

    /* SPI2: SCK = GPIO8 (D8), MISO = GPIO9 (D9), MOSI = GPIO10 (D10) */
    spim2_custom: spim2_custom {
        group1 {
            pinmux = <SPIM2_MISO_GPIO9>,
                     <SPIM2_SCLK_GPIO8>;
        };
        group2 {
            pinmux = <SPIM2_MOSI_GPIO10>;
            output-low;
        };
    };
};

/* D6 = GPIO11 reused for backlight, disable UART TX */
&uart0 {
    status = "disabled";
};

&adc0 {
    status = "okay";
};

&i2c0 {
    status = "okay";
    clock-frequency = <I2C_BITRATE_FAST>;
    pinctrl-0 = <&i2c0_custom>;
    pinctrl-names = "default";

    /* RTC, address 0x51 */
    pcf8563_round_display: pcf8563@51 {
        status = "okay";
        compatible = "nxp,pcf8563";
        reg = <0x51>;
    };

    /* Touch controller, IRQ = GPIO12 (D7) */
    chsc6x_round_display: chsc6x@2e {
        status = "okay";
        compatible = "chipsemi,chsc6x";
        reg = <0x2e>;
        irq-gpios = <&gpio0 12 GPIO_ACTIVE_LOW>;
        screen-width = <240>;
        screen-height = <240>;
    };
};

&spi2 {
    status = "okay";
    pinctrl-0 = <&spim2_custom>;
    pinctrl-names = "default";
    /* D1 = GPIO0  -> display CS
     * D2 = GPIO25 -> SD card CS */
    cs-gpios = <&gpio0 0  GPIO_ACTIVE_LOW>,
               <&gpio0 25 GPIO_ACTIVE_LOW>;

    /* MIPI DBI SPI wrapper for GC9A01, DC = GPIO7 (D3) */
    round_display_mipi_dbi: mipi_dbi {
        compatible = "zephyr,mipi-dbi-spi";
        spi-dev = <&spi2>;
        dc-gpios = <&gpio0 7 GPIO_ACTIVE_HIGH>;
        write-only;
        #address-cells = <1>;
        #size-cells = <0>;

        gc9a01_round_display: gc9a01@0 {
            status = "okay";
            compatible = "galaxycore,gc9x01x";
            reg = <0>;
            mipi-max-frequency = <DT_FREQ_M(100)>;
            pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
            width = <240>;
            height = <240>;
            display-inversion;
        };
    };

    /* SD card slot, CS = GPIO25 (D2) */
    sdhc_round_display: sdhc@1 {
        compatible = "zephyr,sdhc-spi-slot";
        reg = <1>;
        status = "okay";
        spi-max-frequency = <DT_FREQ_M(24)>;
        mmc {
            compatible = "zephyr,sdmmc-disk";
            disk-name = "SD";
            status = "okay";
        };
    };
};
```

</details>

3. コンパイルして書き込みます

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### 結果

ファームウェアを書き込んだ後、キーを押すと、画面の内容が Round Display for Seeed Studio XIAO に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_6.jpg" style={{width:800, height:'auto'}}/></div>

## まとめ

ここまでで、XIAO ESP32-C5 上での Zephyr 開発を基本的に習得できたと思います。何かクリエイティブなアイデアがあれば、ぜひプロジェクトを開発してコミュニティと共有し、他の人にもあなたの優れた作品を見てもらいましょう。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
