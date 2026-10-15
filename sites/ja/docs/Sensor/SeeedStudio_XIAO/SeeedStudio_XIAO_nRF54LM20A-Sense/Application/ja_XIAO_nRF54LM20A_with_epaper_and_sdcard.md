---
title: XIAO nRF54LM20A で E-Paper と MicroSD カードを駆動する
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - sdcard
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_epaper.webp
slug: /xiao_nrf54lm20a_with_epaper_and_sdcard
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-15'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_epaper_and_sdcard/
---

# XIAO nRF54LM20A Sense で E-Paper と SD カードを駆動する

XIAO nRF54LM20A は、XIAO シリーズの周辺モジュールによる開発をサポートしており、XIAO 製品の開発エコシステム全体と完全な互換性があります。本記事では、XIAO シリーズの ePaper ドライバと MicroSD カードの読み書き機能を例に、そのエコシステム互換性を紹介します。

:::tip

このチュートリアルは PlatformIO ビルドシステムと Zephyr RTOS をベースに作成されています。PlatformIO で XIAO nRF54LM20A 向けプロジェクトの作成に慣れていない場合は、[Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/) にジャンプしてください。

:::

## ハードウェアの準備

始める前に、XIAO nRF54LM20A と対応する周辺機器を用意します。

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.13" Monochrome eInk</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993558-epaper-driver-board-for-xiao.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990845-2.13-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/103030356_back-06.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>

## 2.13" モノクロ eInk を用いた Epaer

このセクションでは、ePaper Breakout Board を使用して 2.13" モノクロ eInk ディスプレイを駆動し、目的のグラフィックを描画する方法を説明します。

### ソフトウェアの準備

1. デバイスツリー・ファイル **app.overlay** を編集し、対象ディスプレイドライバのハードウェア構成を記述します。

```dts
/ {
	chosen {
		zephyr,display = &ssd16xx_2in13_epaper_gdey0213b74;
	};

	mipi_dbi_2in13_epaper_gdey0213b74 {
		compatible = "zephyr,mipi-dbi-spi";
		spi-dev = <&xiao_spi>;
		dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;	
		#address-cells = <1>;
		#size-cells = <0>;

		ssd16xx_2in13_epaper_gdey0213b74: ssd16xxfb@0 {
			compatible = "gooddisplay,gdey0213b74", "solomon,ssd1680";
			mipi-max-frequency = <4000000>;
			reg = <0>;
			/* Adjust to an integer multiple of 8, the actual resolution is 250x122.*/
			width = <256>; 
			height = <122>;
			busy-gpios = <&xiao_d 2 GPIO_ACTIVE_HIGH>;	/* D7 */

			tssv = <0x80>;

			full {
				border-waveform = <0x05>;
			};

			partial {
				border-waveform = <0x3c>;
			};
		};
	};
};

&xiao_spi {
    status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};
```

2. **prj.conf** を編集して、ソフトウェア構成を有効にします。

```prj
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_HEAP_MEM_POOL_SIZE=16384

CONFIG_LOG=y
CONFIG_LOG_DEFAULT_LEVEL=3

CONFIG_MIPI_DBI_SPI=y
CONFIG_DISPLAY=y

CONFIG_LVGL=y
CONFIG_LV_Z_MEM_POOL_SIZE=49152
CONFIG_LV_USE_MONKEY=y

CONFIG_LV_USE_LABEL=y

CONFIG_LV_USE_THEME_DEFAULT=y
CONFIG_LV_Z_VDB_SIZE=64
CONFIG_LV_COLOR_DEPTH_1=y

CONFIG_LV_FONT_MONTSERRAT_12=y
CONFIG_LV_FONT_MONTSERRAT_14=y
CONFIG_LV_FONT_MONTSERRAT_16=y
CONFIG_LV_FONT_MONTSERRAT_18=y
CONFIG_LV_FONT_MONTSERRAT_24=y

# Benchmark Demo
CONFIG_LV_USE_FONT_COMPRESSED=y
```

3. **main.c** ファイルを編集し、表示ロジックとコンテンツを実装します。

<details>

<summary>main.c</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/display.h>
#include <lvgl.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(epaper);

int main(void)
{
    // Get display device
    const struct device *display_dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(display_dev)) {
        LOG_ERR("Display device not ready!");
        return 0;
    }
    LOG_INF("Display device ready.");

    // Initialize LVGL
    // Must be called before any LVGL object creation or operation
    lv_init();

    // Turn off display blanking (for ePaper, this usually triggers a full refresh to clear old content)
    if (display_blanking_off(display_dev)) {
        LOG_ERR("Failed to turn off display blanking!");
        return 0;
    }
    LOG_INF("Display blanking is off. Screen should be cleared by full refresh.");

    // Get the current active screen and set its background to white
    // This is also an LVGL-level "clear" operation to ensure the canvas is white
    lv_obj_t *scr = lv_scr_act();
    lv_obj_set_style_bg_color(scr, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_bg_opa(scr, LV_OPA_COVER, LV_STATE_DEFAULT);

    // Remove screen padding and scrollbar
    lv_obj_set_style_pad_all(scr, 0, LV_STATE_DEFAULT);
    lv_obj_set_scrollbar_mode(scr, LV_SCROLLBAR_MODE_OFF);


    // Get display width and height (for layout)
    lv_disp_t *disp = lv_disp_get_default();
    lv_coord_t width = lv_disp_get_hor_res(disp);
    lv_coord_t height = lv_disp_get_ver_res(disp);
    LOG_INF("Display width: %d, height: %d", width, height);


    // Create a centered panel
    lv_obj_t *panel = lv_obj_create(scr);
    lv_obj_set_size(panel, 230, 50);
    lv_obj_align(panel, LV_ALIGN_CENTER, 0, 0);

    // Set panel background to white, border to black for visibility
    lv_obj_set_style_bg_color(panel, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_color(panel, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_width(panel, 2, LV_STATE_DEFAULT);
    lv_obj_set_style_pad_all(panel, 10, LV_STATE_DEFAULT);


    // Add text to the panel
    lv_obj_t *label = lv_label_create(panel);
    lv_label_set_text(label, "nRF54LM20A Hello World");

    // Set text color to black for visibility on white background
    lv_obj_set_style_text_color(label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(label, &lv_font_montserrat_16, LV_STATE_DEFAULT);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);

    // Add a time label at the top right
    lv_obj_t *time_label = lv_label_create(scr);
    lv_label_set_text(time_label, "07:21 PM");
    lv_obj_set_style_text_color(time_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(time_label, &lv_font_montserrat_12, LV_STATE_DEFAULT);
    lv_obj_align(time_label, LV_ALIGN_TOP_RIGHT, -11, 5);

    // Add a Zephyr logo at the bottom left
    lv_obj_t *zephyr_label = lv_label_create(scr);
    lv_label_set_text(zephyr_label, "Zephyr");
    lv_obj_set_style_text_color(zephyr_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(zephyr_label, &lv_font_montserrat_12, LV_STATE_DEFAULT);
    lv_obj_align(zephyr_label, LV_ALIGN_BOTTOM_LEFT, 5, -5);

    // Add author label at the bottom right
    lv_obj_t *author_label = lv_label_create(scr);
    lv_label_set_text(author_label, "Seeed Studio");
    lv_obj_set_style_text_color(author_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(author_label, &lv_font_montserrat_12, LV_STATE_DEFAULT);
    lv_obj_align(author_label, LV_ALIGN_BOTTOM_RIGHT, -11, -5);


    // Add four squares at the top left with a for loop
    lv_obj_t *squares[4];
    int square_offsets = 5;
    for (int i = 0; i < 4; i++) {
        squares[i] = lv_obj_create(scr);
        lv_obj_set_size(squares[i], 10, 10);
        lv_obj_set_style_bg_color(squares[i], lv_color_white(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_color(squares[i], lv_color_black(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_width(squares[i], 1, LV_STATE_DEFAULT);
        lv_obj_set_style_radius(squares[i], 0, LV_STATE_DEFAULT);
        lv_obj_align(squares[i], LV_ALIGN_TOP_LEFT, square_offsets, 5);
        square_offsets+=15;
    }

    while (1) {
        lv_task_handler();
        k_sleep(K_MSEC(1000)); // Lower refresh rate, suitable for ePaper
    }
    return 0;
}
```

</details>

:::tip
他のサイズや種類のディスプレイを駆動する必要がある場合は、以下のリポジトリリンクを参照してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

### 結果

プログラムを書き込み、デバイスの電源を入れると、2.13インチのモノクロ eInk ディスプレイに `nRF54LM20A Hello World` というテキストが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_1.jpg" style={{width:800, height:'auto'}}/></div>

## SD カード

このサンプルを始める前に、XIAO 用 Expansion Board Base に加えて、FAT32 でフォーマットされた 32 GB 以下の MicroSD カードが必要です。カードスロットは XIAO 用 Expansion Board Base の背面にあります。

### ソフトウェアの準備

1. デバイスツリーファイル **app.overlay** を編集し、SD カードの読み書き用に SPI プロトコルの設定を追加します。

```dts

&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			disk-name = "SD";
			status = "okay";
		};
		spi-max-frequency = <24000000>;
	};
};
```

2. **prj.conf** で SPI のソフトウェア設定を有効にします。

```prj
CONFIG_DISK_ACCESS=y
CONFIG_LOG=y

# Enable SDHC interface
CONFIG_DISK_DRIVERS=y
CONFIG_DISK_DRIVER_SDMMC=y

# Allocate buffer on RAM for transferring chunk of data
# from Flash to SPI — increased from 8 to 64 for SD card reliability
CONFIG_SPI_NRFX_RAM_BUFFER_SIZE=64
# SDHC driver for SD card interface
CONFIG_SDHC=y

# FAT filesystem for SD card
CONFIG_FILE_SYSTEM=y
CONFIG_FAT_FILESYSTEM_ELM=y
CONFIG_FS_FATFS_LFN=y
CONFIG_FS_FATFS_LFN_MODE_STACK=y
CONFIG_FS_FATFS_EXFAT=y
CONFIG_FS_FATFS_MAX_LFN=255

# Increased stack and heap sizes for SD card operations
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=16384
CONFIG_HEAP_MEM_POOL_SIZE=16384
CONFIG_MAIN_STACK_SIZE=32000
CONFIG_IDLE_STACK_SIZE=8192

# Shell for filesystem operations
CONFIG_SHELL=y
CONFIG_SHELL_STACK_SIZE=16000
CONFIG_FILE_SYSTEM_SHELL=y
```

3. **main.c** に SD カードへデータを書き込むロジックを追加します。コードがかなり長いため、リポジトリ内のサンプルコードを参照することをおすすめします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/blob/main/examples/zephyr-expansion-base-for-xiao/sd_card/src/main.c" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 結果

1. MicroSD カードを XIAO 用 Expansion Board のカードスロットに挿入します。デバイスの電源を入れ、シリアルモニタを開きます。システムは SD カードの容量を読み取り、マウント機能をテストした後、ファイルを書き込みます。

- `some` という名前の新しいフォルダを作成
- `some.dat` という名前の新しいファイルを作成
- `test.txt` という名前の新しいファイルを作成し、その中に内容を書き込む

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_4.png" style={{width:600, height:'auto'}}/></div>
<br/>

2. カードリーダーを使って SD カードにアクセスすると、作成された 3 つのファイルが中身とともに存在することが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_5.png" style={{width:600, height:'auto'}}/></div>
<br/>

3. TXT ファイルを開きます。その内容は `XIAO nRF54LM20A SD Card Test` となっており、SD カードへの書き込みが正常に行われたことを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_6_1.png" style={{width:600, height:'auto'}}/></div>
<br/>

## まとめ

ここまでのサンプルにより、XIAO nRF54LM20A 上で ePaper ディスプレイと MicroSD カードを使用する方法を十分に理解できたはずです。ぜひオープンソースコミュニティであなたのアイデアを共有してください。

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
