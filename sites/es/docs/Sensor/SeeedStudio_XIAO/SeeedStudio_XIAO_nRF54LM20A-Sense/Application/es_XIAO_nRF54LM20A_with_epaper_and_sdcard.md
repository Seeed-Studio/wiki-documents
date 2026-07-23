---
title: Control de E-Paper y tarjeta MicroSD con XIAO nRF54LM20A
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
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_epaper_and_sdcard/
---

# Control de E-Paper y tarjeta SD con XIAO nRF54LM20A Sense

El XIAO nRF54LM20A admite el desarrollo con módulos periféricos de la serie XIAO y es totalmente compatible con todo el ecosistema de desarrollo de productos XIAO. Este artículo demuestra su compatibilidad con el ecosistema utilizando como ejemplos el controlador de ePaper y las funciones de lectura/escritura de tarjetas MicroSD de la serie XIAO.

:::tip

Este tutorial se desarrolla sobre la base del sistema de compilación PlatformIO y Zephyr RTOS. Si no estás familiarizado con la creación de un proyecto para el XIAO nRF54LM20A en PlatformIO, puedes ir a [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/).

:::

## Preparación de hardware

Antes de empezar, prepara un XIAO nRF54LM20A y los periféricos correspondientes.

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>Placa controladora de ePaper para Seeed Studio XIAO</th>
   <th>eInk monocromático de 2,13"</th>
   <th>Placa base de expansión Seeed Studio para XIAO</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>

## Epaer con eInk monocromático de 2,13"

Esta sección te muestra cómo utilizar la ePaper Breakout Board para controlar la pantalla eInk monocromática de 2,13" y renderizar los gráficos de destino.

### Preparación de software

1. Modifica el archivo del árbol de dispositivos **app.overlay** y escribe la configuración de hardware para el controlador de pantalla de destino.

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

2. Modifica **prj.conf** para habilitar las configuraciones de software.

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

3. Modifica el archivo **main.c** e implementa la lógica y el contenido de la pantalla.

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
Si necesitas controlar pantallas de otros tamaños y tipos, visita el siguiente enlace del repositorio.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

### Resultado

Después de flashear el programa y encender el dispositivo, el texto `nRF54LM20A Hello World` se mostrará en la pantalla eInk monocromática de 2,13".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_1.jpg" style={{width:800, height:'auto'}}/></div>

## Tarjeta SD

Antes de comenzar este ejemplo, además de la Expansion Board Base for XIAO, también necesitas una tarjeta MicroSD formateada como FAT32 con una capacidad no mayor de 32 GB. La ranura de la tarjeta se encuentra en la parte posterior de la Expansion Board Base for XIAO.

### Preparación de software

1. Modifica el archivo del árbol de dispositivos **app.overlay** y añade configuraciones del protocolo SPI para las operaciones de lectura y escritura de la tarjeta SD.

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

2. Habilita la configuración de software SPI en **prj.conf**.

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

3. Añade la lógica para escribir datos en la tarjeta SD en **main.c**. Dado que el código es bastante extenso, se recomienda consultar el código de ejemplo en el repositorio.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/blob/main/examples/zephyr-expansion-base-for-xiao/sd_card/src/main.c" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> platform-seeedboards</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Resultado

1. Inserta la tarjeta MicroSD en la ranura de la Expansion Board for XIAO. Enciende el dispositivo y abre el monitor serie. El sistema leerá el tamaño de la tarjeta SD, probará la función de montaje y luego escribirá archivos.

- Crea una nueva carpeta llamada `some`
- Crea un nuevo archivo llamado `some.dat`
- Crea un nuevo archivo llamado `test.txt` y escribe contenido en él

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_4.png" style={{width:600, height:'auto'}}/></div>
<br/>

2. Usa un lector de tarjetas para acceder a la tarjeta SD y encontrarás los tres archivos creados con contenido dentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_5.png" style={{width:600, height:'auto'}}/></div>
<br/>

3. Abre el archivo TXT. Su contenido es `XIAO nRF54LM20A SD Card Test`, lo que verifica la escritura correcta en la tarjeta SD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_6_1.png" style={{width:600, height:'auto'}}/></div>
<br/>

## Resumen

Con los ejemplos anteriores, ahora deberías tener un buen dominio del uso de la pantalla ePaper y la tarjeta MicroSD en la XIAO nRF54LM20A. No dudes en compartir tus ideas con la comunidad de código abierto.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
