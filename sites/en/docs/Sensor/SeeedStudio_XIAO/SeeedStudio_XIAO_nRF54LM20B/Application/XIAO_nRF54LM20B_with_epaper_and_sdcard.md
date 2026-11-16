---
title: Driving E-Paper with XIAO nRF54LM20B
sidebar_label: E-Paper for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - epaper
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_epaper.webp
slug: /xiao_nrf54lm20b_with_epaper_and_sdcard
sku:
last_update:
  date: 11/04/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_epaper_and_sdcard/
---

# Driving E-Paper with XIAO nRF54LM20B

The XIAO nRF54LM20B is compatible with the XIAO-series peripheral modules and the broader XIAO development ecosystem. This article uses the ePaper driver examples to show how the board drives XIAO-series eInk displays over its SPI interface, covering the 2.13" and 5.83" monochrome panels.

:::tip

This tutorial is built on PlatformIO and Zephyr RTOS. If you have not set up a project for the XIAO nRF54LM20B under PlatformIO yet, start with [Getting Started With Seeed Studio XIAO nRF54LM20B](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

## Hardware Preperation

Before you start, prepare an XIAO nRF54LM20B and the corresponding peripherals. Both eInk examples run over SPI through the ePaper Driver Board for XIAO, which exposes the XIAO SPI pins and provides the level-shifting and power the panel needs.

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.13" Monochrome eInk</th>
   <th>5.83" Monochrome eInk</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993558-epaper-driver-board-for-xiao.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990845-2.13-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990845-2.13-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>

<!-- TODO: replace the 5.83" eInk BOM image (currently reusing the 2.13" thumbnail) with the confirmed 5.83" product photo once assets are available. -->

## E-Paper with 2.13" Monochrome eInk

This section shows you how to use the ePaper Driver Board to drive the 2.13" Monochrome eInk display and render target graphics.

### Software Preperation

1. Modify the device tree file **app.overlay** and write the hardware configuration for the target display driver.

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
			width = <250>;
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

2. Modify **prj.conf** to enable software configurations.

```prj
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_HEAP_MEM_POOL_SIZE=16384

CONFIG_LOG=y
CONFIG_ASSERT=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_STDOUT_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_LOG_PRINTK=y
CONFIG_LOG_MODE_DEFERRED=y
CONFIG_UDC_DRIVER_LOG_LEVEL_OFF=y

CONFIG_MIPI_DBI_SPI=y
CONFIG_DISPLAY=y

CONFIG_LVGL=y
CONFIG_LV_Z_MEM_POOL_SIZE=49152
CONFIG_LV_USE_DRAW_VG_LITE=n
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

3. Modify the **main.c** file and implement the display logic and content.

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

    // NOTE: do NOT call display_blanking_off() here. The Zephyr LVGL EPD flush
    // callback (lvgl_flush_cb_mono) manages blanking itself: it holds off the
    // refresh while rendering the frame in chunks, then calls
    // display_blanking_off() on the last chunk to trigger the physical refresh.
    // Calling it manually first disrupts that flow and the objects end up only
    // in the SSD1680 RAM without being shown -> blank white screen.

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
    lv_obj_set_size(panel, 220, 50);
    lv_obj_align(panel, LV_ALIGN_CENTER, 0, 0);

    // Set panel background to white, border to black for visibility
    lv_obj_set_style_bg_color(panel, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_color(panel, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_width(panel, 2, LV_STATE_DEFAULT);
    lv_obj_set_style_pad_all(panel, 10, LV_STATE_DEFAULT);


    // Add text to the panel
    lv_obj_t *label = lv_label_create(panel);
    lv_label_set_text(label, "nRF54LM20B hello world");

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
    lv_label_set_text(author_label, "Brandy");
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
If you need to drive displays of other sizes and types, please visit the repository link below.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

### Result

After flashing the program and powering on the device, the text `nRF54LM20B hello world` will be shown on the 2.13" Monochrome eInk display.

<div style={{position:'relative', height:500, overflow:'hidden'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ePaper/2.13.jpeg" style={{position:'absolute', top:'50%', left:'50%', width:500, height:'auto', transform:'translate(-50%,-50%) rotate(270deg)'}}/></div>

## E-Paper with 5.83" Monochrome eInk

This section shows you how to drive the larger 5.83" Monochrome eInk display (648×480) through the same ePaper Driver Board. The 5.83" panel uses the UC8179 controller instead of the SSD1680, so the device tree, the panel waveforms, and the LVGL layout sizes all change accordingly.

### Software Preperation

1. Modify the device tree file **app.overlay**. The panel node switches to the `gooddisplay,gdey0583t81` / `ultrachip,uc8179` compatible, the resolution becomes 648×480, the busy line is active-low, and the `full` block carries the `pwr` / `cdi` / `tcon` waveform settings the UC8179 needs.

```dts
/ {
	chosen {
		zephyr,display = &uc8179_5inch83_epaper_gdey0583t81;
	};

	mipi_dbi_xiao_epaper {
		compatible = "zephyr,mipi-dbi-spi";
		spi-dev = <&xiao_spi>;
		dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;
		write-only;
		#address-cells = <1>;
		#size-cells = <0>;

		uc8179_5inch83_epaper_gdey0583t81: uc8179@0 {
			compatible = "gooddisplay,gdey0583t81", "ultrachip,uc8179";
			mipi-max-frequency = <4000000>;
			reg = <0>;
			width = <648>;
			height = <480>;
			busy-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

			softstart = [17 17 17 17];

			full {
				pwr = [07 07 3f 3f];
				cdi = <07>;
				tcon = <0x22>;
			};
		};
	};
};

&xiao_spi {
    status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};
```

2. Modify **prj.conf** to enable software configurations. The configuration is the same as the 2.13" panel, with the addition of the Montserrat 20 font used by the larger UI.

```prj
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_HEAP_MEM_POOL_SIZE=16384

CONFIG_LOG=y
CONFIG_ASSERT=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_STDOUT_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_LOG_PRINTK=y
CONFIG_LOG_MODE_DEFERRED=y
CONFIG_UDC_DRIVER_LOG_LEVEL_OFF=y

CONFIG_MIPI_DBI_SPI=y
CONFIG_DISPLAY=y

CONFIG_LVGL=y
CONFIG_LV_Z_MEM_POOL_SIZE=49152
CONFIG_LV_USE_DRAW_VG_LITE=n
CONFIG_LV_USE_MONKEY=y

CONFIG_LV_USE_LABEL=y

CONFIG_LV_USE_THEME_DEFAULT=y
CONFIG_LV_Z_VDB_SIZE=64
CONFIG_LV_COLOR_DEPTH_1=y

CONFIG_LV_FONT_MONTSERRAT_12=y
CONFIG_LV_FONT_MONTSERRAT_14=y
CONFIG_LV_FONT_MONTSERRAT_16=y
CONFIG_LV_FONT_MONTSERRAT_18=y
CONFIG_LV_FONT_MONTSERRAT_20=y
CONFIG_LV_FONT_MONTSERRAT_24=y

# Benchmark Demo
CONFIG_LV_USE_FONT_COMPRESSED=y
```

3. Modify the **main.c** file and implement the display logic and content. As with the 2.13" panel, do **not** call `display_blanking_off()` manually — the LVGL EPD flush callback drives the physical refresh on the last chunk. The panel, label, and square sizes below are scaled up for the 648×480 canvas.

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
    // if (display_blanking_off(display_dev)) {
    //     LOG_ERR("Failed to turn off display blanking!");
    //     return 0;
    // }
    // LOG_INF("Display blanking is off. Screen should be cleared by full refresh.");

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
    lv_obj_set_size(panel, 340, 100);
    lv_obj_align(panel, LV_ALIGN_CENTER, 0, 0);

    // Set panel background to white, border to black for visibility
    lv_obj_set_style_bg_color(panel, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_color(panel, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_width(panel, 2, LV_STATE_DEFAULT);
    lv_obj_set_style_pad_all(panel, 10, LV_STATE_DEFAULT);


    // Add text to the panel
    lv_obj_t *label = lv_label_create(panel);
    lv_label_set_text(label, "nRF54LM20B hello world");

    // Set text color to black for visibility on white background
    lv_obj_set_style_text_color(label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);

    // Add a time label at the top right
    lv_obj_t *time_label = lv_label_create(scr);
    lv_label_set_text(time_label, "Time 07:21 PM");
    lv_obj_set_style_text_color(time_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(time_label, &lv_font_montserrat_18, LV_STATE_DEFAULT);
    lv_obj_align(time_label, LV_ALIGN_TOP_RIGHT, -20, 10);

    // Add a Zephyr logo at the top left
    lv_obj_t *zephyr_label = lv_label_create(scr);
    lv_label_set_text(zephyr_label, "Powered by Zephyr");
    lv_obj_set_style_text_color(zephyr_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(zephyr_label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(zephyr_label, LV_ALIGN_BOTTOM_LEFT, 20, -10);

    // Add author label at the bottom right
    lv_obj_t *author_label = lv_label_create(scr);
    lv_label_set_text(author_label, "Author: Brandy");
    lv_obj_set_style_text_color(author_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(author_label, &lv_font_montserrat_16, LV_STATE_DEFAULT);
    lv_obj_align(author_label, LV_ALIGN_BOTTOM_RIGHT, -20, -10);


    // Add four squares at the top left with a for loop
    lv_obj_t *squares[4];
    int square_offsets = 20;
    for (int i = 0; i < 4; i++) {
        squares[i] = lv_obj_create(scr);
        lv_obj_set_size(squares[i], 30, 30);
        lv_obj_set_style_bg_color(squares[i], lv_color_white(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_color(squares[i], lv_color_black(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_width(squares[i], 2, LV_STATE_DEFAULT);
        lv_obj_set_style_radius(squares[i], 0, LV_STATE_DEFAULT);
        lv_obj_align(squares[i], LV_ALIGN_TOP_LEFT, square_offsets, 20);
        square_offsets+=40;
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
If you need to drive displays of other sizes and types, please visit the repository link below.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

### Result

After flashing the program and powering on the device, the text `nRF54LM20B hello world` will be shown on the 5.83" Monochrome eInk display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ePaper/5.83.jpeg" style={{width:500, height:'auto', transform:'rotate(180deg)'}}/></div>

## Summary

With the above examples, you should now have a good grasp of driving the 2.13" and 5.83" Monochrome eInk displays on the XIAO nRF54LM20B over the ePaper Driver Board. The key points are the MIPI-DBI-over-SPI device tree node, the LVGL 1-bit pipeline, and leaving display blanking to the LVGL EPD flush callback. Feel free to share your ideas with the open-source community.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
