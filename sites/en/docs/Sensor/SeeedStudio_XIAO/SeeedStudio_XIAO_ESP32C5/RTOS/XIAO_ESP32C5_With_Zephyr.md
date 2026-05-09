---
title: XIAO ESP32-C5 With Zephyr(RTOS)
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
url: https://wiki.seeedstudio.com/xiao_esp32c5_with_zephyr/
---

The [**Zephyr**](https://www.zephyrproject.org/) OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications.

## Getting Started

### Hardware Preparation

Please prepare one XIAO ESP32-C5 board to support the following verification and related work.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software Preparation

This article is developed and verified based on Ubuntu 24.04 LTS. Please refer to the relevant documentation for deploying the development environment on Ubuntu, Mac, and Windows. [Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)

:::tip
It is officially recommended to use **Ubuntu 24.04 LTS and later versions**, which can effectively avoid troubles caused by environmental dependency issues and save your time.
:::

1. Activate the virtual environment.

Create a new virtual environment:

```bash
python3 -m venv ~/zephyrproject/.venv
```

Activate the virtual environment:

```bash
source ~/zephyrproject/.venv/bin/activate
```

2. Open the **blinky** folder.

```bash
cd ~/zephyrproject/zephyr/samples/basic/blinky
```

3. Update the overlay file and the prj.conf file.

The default serial port log output is mapped to GPIO11 and GPIO12 ，corresponding to D6 and D7 on XIAO ESP32‑C5.
To use USB Serial/JTAG for log output, you need to remap the serial port pins to the corresponding pins of USB Serial/JTAG. Meanwhile, according to the hardware design of XIAO ESP32‑C5, you must also configure the user LED pin to GPIO27.

:::tip
If you are not familiar with the pinout of the XIAO ESP32-C5, you can check [Pinlist](https://wiki.seeedstudio.com/xiao_esp32c5_getting_started/#hardware-overview)
:::

Create a new overlay file

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/esp32c5_devkitc_esp32c5_hpcore.overlay
```

  Add the overlay content

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

After adding the content, press Ctrl + O to save the file, then Ctrl + X to exit.

Modify the content of prj.conf

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/prj.conf
```

Modify the content to the following, mainly adjusting the UART mapping relationship.

```prj
CONFIG_USB_DEVICE_STACK=y
CONFIG_USB_CDC_ACM=y
CONFIG_UART_LINE_CTRL=y
CONFIG_GPIO=y
CONFIG_LOG=y
```

4. Set the target board to **esp32c5_devkitc** and start compiling.

:::tip
**hpcore** stands for High Performance Core. It is usually used to run main programs and tasks with high performance requirements.
:::

```bash
west  build -p always -b esp32c5_devkitc/esp32c5/hpcore ~/zephyrproject/zephyr/samples/basic/blinky
```

Successful Compilation Symptoms

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_1.png" style={{width:800, height:'auto'}}/></div>

5. Flash the device

:::tip
Before flashing the program to the device, the XIAO ESP32-C5 must be set to Bootloader Download Mode.

Method:
Press and hold the BOOT button, then power on the device.
:::

Check the serial port device. The device is usually `/dev/ttyACM0`.

```bash
ls /dev/ttyACM*
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_2.png" style={{width:800, height:'auto'}}/></div>

Due to access permission restrictions on the serial port device file, it is necessary to modify its permissions to support read and write operations.

```bash
sudo chmod 666 /dev/ttyACM0
```

Specify the serial port device and start downloading.

```bash
west flash --esp-device /dev/ttyACM0
```

Sample Output for Successful Download

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_3.png" style={{width:800, height:'auto'}}/></div>

6. Phenomenon Demonstration

After downloading successfully, the LED will start blinking.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/z1.gif" style={{width:800, height:'auto'}}/></div>

Open Serial Port, and log information of LED ON or LED OFF will be printed.

```bash
west espressif monitor --port /dev/ttyACM0
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_4.png" style={{width:800, height:'auto'}}/></div>

## Application

The XIAO ESP32-C5 supports the use of expansion boards compatible with the XIAO series, enabling easy expansion of peripherals and application scenarios.

### Using the Expansion Board Base for XIAO

Expansion Board Base for XIAO is equipped with an IIC interface and an onboard 0.96-inch OLED screen.

#### Hardware Preparation

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Software Preparation

According to the pin definition of the XIAO ESP32-C5, GPIO23 corresponds to SDA, which is D4; GPIO24 corresponds to SCL, which is D5. It is necessary to create and modify the content of the device tree node.

1. Open the display example.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Add the overlay file.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Add the device tree node content.

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

3. Compile and flash

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Result

The Expansion Board Base for XIAO will display a screen effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_5.jpg" style={{width:800, height:'auto'}}/></div>

### Using the Round Display for Seeed Studio XIAO

Round Display for Seeed Studio XIAO is a round display specially designed for the XIAO series. It is equipped with the GC9A01 driver chip onboard and adopts the standard SPI communication protocol.

#### Hardware Preparation

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Software Preparation

1. Open the display example.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Add the overlay file.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Add the device tree node content.

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

3. Compile and flash

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Result

After flashing the firmware, press the key, and the screen content will be displayed on the Round Display for Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_6.jpg" style={{width:800, height:'auto'}}/></div>

## Conclusion

I believe by now you have basically mastered Zephyr development on the XIAO ESP32-C5. If you have any creative ideas, feel free to develop your projects and share them with the community, letting others see your excellent works.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
