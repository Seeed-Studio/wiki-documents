---
title: XIAO ESP32-C5 与 Zephyr(RTOS)
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
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_with_zephyr/
---

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小体积内核设计，用于资源受限和嵌入式系统：从简单的嵌入式环境传感器和 LED 可穿戴设备，到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 入门指南

### 硬件准备

请准备一块 XIAO ESP32-C5 开发板，以支持后续的验证和相关工作。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 软件准备

本文基于 Ubuntu 24.04 LTS 进行开发和验证。请参考相关文档，在 Ubuntu、Mac 和 Windows 上部署开发环境。[Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)

:::tip
官方推荐使用 **Ubuntu 24.04 LTS 及更高版本**，这可以有效避免由环境依赖问题带来的麻烦，节省你的时间。
:::

1. 激活虚拟环境。

创建一个新的虚拟环境：

```bash
python3 -m venv ~/zephyrproject/.venv
```

激活虚拟环境：

```bash
source ~/zephyrproject/.venv/bin/activate
```

2. 打开 **blinky** 文件夹。

```bash
cd ~/zephyrproject/zephyr/samples/basic/blinky
```

3. 更新 overlay 文件和 prj.conf 文件。

默认串口日志输出映射到 GPIO11 和 GPIO12，对应 XIAO ESP32‑C5 上的 D6 和 D7。
若要使用 USB Serial/JTAG 进行日志输出，需要将串口引脚重新映射到 USB Serial/JTAG 对应的引脚。同时，根据 XIAO ESP32‑C5 的硬件设计，还必须将用户 LED 引脚配置为 GPIO27。

:::tip
如果你不熟悉 XIAO ESP32-C5 的引脚分布，可以查看 [Pinlist](https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/#硬件概述)
:::

创建一个新的 overlay 文件

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/esp32c5_devkitc_esp32c5_hpcore.overlay
```

  添加 overlay 内容

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

添加完成后，按 Ctrl + O 保存文件，然后按 Ctrl + X 退出。

修改 prj.conf 的内容

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/prj.conf
```

将内容修改为如下所示，主要是调整 UART 的映射关系。

```prj
CONFIG_USB_DEVICE_STACK=y
CONFIG_USB_CDC_ACM=y
CONFIG_UART_LINE_CTRL=y
CONFIG_GPIO=y
CONFIG_LOG=y
```

4. 将目标开发板设置为 **esp32c5_devkitc** 并开始编译。

:::tip
**hpcore** 代表 High Performance Core（高性能内核）。它通常用于运行主程序和对性能要求较高的任务。
:::

```bash
west  build -p always -b esp32c5_devkitc/esp32c5/hpcore ~/zephyrproject/zephyr/samples/basic/blinky
```

编译成功现象

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_1.png" style={{width:800, height:'auto'}}/></div>

5. 烧录设备

:::tip
在将程序烧录到设备之前，必须先将 XIAO ESP32-C5 设置为 Bootloader 下载模式。

方法：
按住 BOOT 按钮，然后给设备上电。
:::

检查串口设备。设备通常为 `/dev/ttyACM0`。

```bash
ls /dev/ttyACM*
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_2.png" style={{width:800, height:'auto'}}/></div>

由于串口设备文件存在访问权限限制，需要修改其权限以支持读写操作。

```bash
sudo chmod 666 /dev/ttyACM0
```

指定串口设备并开始下载。

```bash
west flash --esp-device /dev/ttyACM0
```

下载成功的示例输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_3.png" style={{width:800, height:'auto'}}/></div>

6. 现象演示

下载成功后，LED 将开始闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/z1.gif" style={{width:800, height:'auto'}}/></div>

打开串口，将打印 LED ON 或 LED OFF 的日志信息。

```bash
west espressif monitor --port /dev/ttyACM0
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_4.png" style={{width:800, height:'auto'}}/></div>

## 应用

XIAO ESP32-C5 支持使用兼容 XIAO 系列的扩展板，从而轻松扩展外设和应用场景。

### 使用 Expansion Board Base for XIAO

Expansion Board Base for XIAO 配备 IIC 接口和板载 0.96 英寸 OLED 屏幕。

#### 硬件准备

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 软件准备

根据 XIAO ESP32-C5 的引脚定义，GPIO23 对应 SDA，即 D4；GPIO24 对应 SCL，即 D5。需要创建并修改设备树节点的内容。

1. 打开显示示例。

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. 添加 overlay 文件。

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

添加设备树节点内容。

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

3. 编译并烧录

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### 结果

Expansion Board Base for XIAO 将显示屏幕效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_5.jpg" style={{width:800, height:'auto'}}/></div>

### 使用 Round Display for Seeed Studio XIAO

Round Display for Seeed Studio XIAO 是一款专为 XIAO 系列设计的圆形显示屏，板载 GC9A01 驱动芯片，并采用标准 SPI 通信协议。

#### 硬件准备

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 软件准备

1. 打开显示示例。

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. 添加 overlay 文件。

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

添加设备树节点内容。

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

3. 编译并烧录

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### 结果

在烧录固件后，按下按键，屏幕内容将显示在 Round Display for Seeed Studio XIAO 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_6.jpg" style={{width:800, height:'auto'}}/></div>

## 总结

相信此时你已经基本掌握了在 XIAO ESP32-C5 上进行 Zephyr 开发。如果你有任何创意想法，欢迎自由开发你的项目并与社区分享，让更多人看到你的优秀作品。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
