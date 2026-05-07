---
title: XIAO ESP32-C5 con Zephyr(RTOS)
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
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_with_zephyr/
---

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de huella reducida diseñado para su uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales integrados y wearables con LED hasta sofisticados controladores embebidos, relojes inteligentes y aplicaciones inalámbricas de IoT.

## Introducción

### Preparación de hardware

Prepara una placa XIAO ESP32-C5 para realizar las siguientes verificaciones y trabajos relacionados.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Preparación de software

Este artículo se desarrolla y verifica sobre la base de Ubuntu 24.04 LTS. Consulta la documentación correspondiente para desplegar el entorno de desarrollo en Ubuntu, Mac y Windows. [Guía de inicio de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)

:::tip
Se recomienda oficialmente utilizar **Ubuntu 24.04 LTS y versiones posteriores**, lo que puede evitar eficazmente problemas causados por dependencias del entorno y ahorrarte tiempo.
:::

1. Activa el entorno virtual.

Crea un nuevo entorno virtual:

```bash
python3 -m venv ~/zephyrproject/.venv
```

Activa el entorno virtual:

```bash
source ~/zephyrproject/.venv/bin/activate
```

2. Abre la carpeta **blinky**.

```bash
cd ~/zephyrproject/zephyr/samples/basic/blinky
```

3. Actualiza el archivo overlay y el archivo prj.conf.

La salida de registro del puerto serie predeterminada se asigna a GPIO11 y GPIO12, que corresponden a D6 y D7 en la XIAO ESP32‑C5.
Para utilizar USB Serial/JTAG para la salida de registros, debes reasignar los pines del puerto serie a los pines correspondientes de USB Serial/JTAG. Al mismo tiempo, de acuerdo con el diseño de hardware de la XIAO ESP32‑C5, también debes configurar el pin del LED de usuario en GPIO27.

:::tip
Si no estás familiarizado con el pinout de la XIAO ESP32-C5, puedes consultar [Pinlist](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/#hardware-overview)
:::

Crea un nuevo archivo overlay

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/esp32c5_devkitc_esp32c5_hpcore.overlay
```

  Añade el contenido del overlay

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

Después de añadir el contenido, pulsa Ctrl + O para guardar el archivo y luego Ctrl + X para salir.

Modifica el contenido de prj.conf

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/prj.conf
```

Modifica el contenido al siguiente, ajustando principalmente la relación de mapeo del UART.

```prj
CONFIG_USB_DEVICE_STACK=y
CONFIG_USB_CDC_ACM=y
CONFIG_UART_LINE_CTRL=y
CONFIG_GPIO=y
CONFIG_LOG=y
```

4. Establece la placa de destino en **esp32c5_devkitc** y comienza a compilar.

:::tip
**hpcore** significa High Performance Core. Normalmente se utiliza para ejecutar programas principales y tareas con altos requisitos de rendimiento.
:::

```bash
west  build -p always -b esp32c5_devkitc/esp32c5/hpcore ~/zephyrproject/zephyr/samples/basic/blinky
```

Síntomas de compilación exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_1.png" style={{width:800, height:'auto'}}/></div>

5. Flashea el dispositivo

:::tip
Antes de flashear el programa al dispositivo, la XIAO ESP32-C5 debe ponerse en modo Bootloader Download.

Método:
Mantén pulsado el botón BOOT y luego enciende el dispositivo.
:::

Comprueba el dispositivo de puerto serie. El dispositivo suele ser `/dev/ttyACM0`.

```bash
ls /dev/ttyACM*
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_2.png" style={{width:800, height:'auto'}}/></div>

Debido a las restricciones de permisos de acceso en el archivo de dispositivo del puerto serie, es necesario modificar sus permisos para admitir operaciones de lectura y escritura.

```bash
sudo chmod 666 /dev/ttyACM0
```

Especifica el dispositivo de puerto serie y comienza la descarga.

```bash
west flash --esp-device /dev/ttyACM0
```

Salida de ejemplo para una descarga exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_3.png" style={{width:800, height:'auto'}}/></div>

6. Demostración del fenómeno

Después de descargar correctamente, el LED comenzará a parpadear.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/z1.gif" style={{width:800, height:'auto'}}/></div>

Abre el puerto serie y se imprimirá la información de registro de LED ON o LED OFF.

```bash
west espressif monitor --port /dev/ttyACM0
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_4.png" style={{width:800, height:'auto'}}/></div>

## Aplicación

La XIAO ESP32-C5 admite el uso de placas de expansión compatibles con la serie XIAO, lo que permite ampliar fácilmente periféricos y escenarios de aplicación.

### Uso de la Expansion Board Base for XIAO

La Expansion Board Base for XIAO está equipada con una interfaz IIC y una pantalla OLED integrada de 0,96 pulgadas.

#### Preparación de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Preparación de software

Según la definición de pines de la XIAO ESP32-C5, GPIO23 corresponde a SDA, que es D4; GPIO24 corresponde a SCL, que es D5. Es necesario crear y modificar el contenido del nodo del device tree.

1. Abre el ejemplo de display.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Añade el archivo overlay.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Añade el contenido del nodo del device tree.

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

3. Compila y flashea

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Resultado

La Expansion Board Base for XIAO mostrará un efecto en pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_5.jpg" style={{width:800, height:'auto'}}/></div>

### Uso de la Round Display for Seeed Studio XIAO

La Round Display for Seeed Studio XIAO es una pantalla redonda especialmente diseñada para la serie XIAO. Está equipada con el chip controlador GC9A01 integrado y adopta el protocolo de comunicación SPI estándar.

#### Preparación de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Preparación de software

1. Abre el ejemplo de pantalla.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Añade el archivo overlay.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Añade el contenido del nodo del árbol de dispositivos.

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

3. Compila y flashea

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Resultado

Después de flashear el firmware, pulsa la tecla y el contenido de la pantalla se mostrará en la pantalla redonda para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_6.jpg" style={{width:800, height:'auto'}}/></div>

## Conclusión

Creo que a estas alturas ya has dominado básicamente el desarrollo con Zephyr en el XIAO ESP32-C5. Si tienes alguna idea creativa, no dudes en desarrollar tus proyectos y compartirlos con la comunidad, permitiendo que otros vean tus excelentes trabajos.

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
