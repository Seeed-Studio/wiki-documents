---
description: XIAO RP2040 与 Zephyr(RTOS)
title: XIAO RP2040 与 Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2024-11-13'
updatedAt: '2025-09-23'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040-Zephyr-RTOS/
---

# XIAO RP2040 与 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

本wiki介绍了[Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/cn/xiao_rp2040_getting_started/)对[Zephyr](https://www.zephyrproject.org/)的支持。通过本指南的帮助，您将能够利用该开发板的可用功能集。

## 什么是[Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小占用空间的内核，专为资源受限和嵌入式系统而设计：从简单的嵌入式环境传感器和LED可穿戴设备到复杂的嵌入式控制器、智能手表和IoT无线应用。

对于每个支持的设备，Zephyr都有一个[设备树](https://docs.zephyrproject.org/latest/build/dts/index.html)文件来描述开发板及其功能。[Xiao RP2040 Zephyr开发板页面](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features)描述了当前可用的支持功能，这些功能由[开发板的dts文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7)定义。

*参考：[**Zephyr项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

使用Zephyr的第一步是为本地开发设置SDK和工具链。应参考[Zephyr入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)了解您的环境所需的相关设置程序。

一旦Zephyr工具链已设置完成并下载了相关的SDK，您就可以开始应用程序开发。

对于Xiao RP2040，可以参考[开发板描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html)获取进一步的设置信息。

要对Xiao RP2040进行编程，可以采取以下步骤：

1. 构建一个示例或您的应用程序
2. 插入Xiao RP2040
3. 按住标记为`B`（启动）的按钮并按下`R`（复位），这将把设备挂载为大容量存储设备
4. 运行flash命令来刷写设备 `west flash -r uf2`

最简单的示例是在开发板上运行"Hello World"示例。在切换到Zephyr安装目录后，运行以下命令。

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

按照之前描述的方法进入引导加载程序模式，然后刷写设备：

```
west flash -r uf2
```

设备接收到文件后将重置，您的机器现在应该通过USB进行串行连接。

找到您设备的端口，例如在Ubuntu上输入`ls /dev/tty*`，并确认插入USB时出现的设备。

在我的示例中，我看到`/dev/ttyACM0`作为新添加的设备。

使用screen，您可以连接并监控串行响应：

```
screen /dev/ttyACM0 115200
```

你应该看到类似以下的响应：

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

为了协助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含了此处使用的多个覆盖层和配置。本 wiki 文章中包含的命令假设该仓库位于相对于 zephyr 根目录的 `../applications/xiao-zephyr-examples` 位置。可以通过更新下面的命令来提供替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio 扩展板</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 开发者知识

#### XIAO 扩展板

  为了在 Seeed Studio XIAO RP2040 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO RP2040 连接到其上。

  之后，板上的 Grove 连接器可用于连接 Grove 模块

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

  当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 连接器时，您需要按照下图使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### 主要功能

- WS2812 LED
- LED PWM
- 时钟
- TFLite

#### WS2812 LED

在此示例中，Xiao RP2040 利用其板载 LED 并持续闪烁红色、绿色和蓝色。

为了测试此设置，我们可以使用 Zephyr 的现有示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

您将看到板载的 WS2812 LED 持续以闪烁模式循环显示红色、蓝色和绿色。

让我们深入了解这个示例，看看它为什么能够工作：

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

设备树的这些元素显示了板载 WS2812 及其使用方式。由于 WS2812 的 VCC 线连接到 RP2040 的引脚 11，设备树利用 gpio-hog 功能允许通过环境变量启用 LED。在这种情况下，引脚 12 是为 WS2812 数据线设置的，因此在启用 CONFIG_GPIO_HOGS 环境变量的情况下，LED 灯带能够用于示例。

这之所以有效，部分原因是示例在其 boards 目录中有一个 xiao_rp2040.conf 文件，因此它将该配置与板子的配置合并并启用它。

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

如果您希望使用板载的 WS2812，建议启用此变量以允许其获得电源。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

在这个示例中，我们将演示 Xiao RP2040 的 PWM 功能。为此，我们将使用板载蓝色 LED 并使用 PWM 使其持续淡入淡出。

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

您将看到板载RGB LED的蓝光缓慢淡出，然后重复这个过程。

让我们深入了解这个示例，看看它为什么有效：

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

这段在示例的 `boards/xiao_rp2040.overlay` 中的逻辑启用了设备树中通常被禁用的 PWM 功能。Xiao RP2040 设置将板载蓝色 RGB LED 设置为默认 PWM。

从 zephyr 板文件中的 `xiao_rp2040-pinctrl.dtsi` 可以看到存在以下内容：

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

在这种情况下，PWM 使用配置的设备树 pwm LED，它与引脚 25（蓝色 LED）相关联。PWM 引脚可以从 [RP2040 文档](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html) 中参考。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### 时钟

为此，我们将使用现有的示例和我们的控制台覆盖：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

连接到显示器（在快速重置开发板以确保它重新启动后）：

```
screen /dev/ttyACM0 115200
```

您将看到一系列定时器在设定的延迟后依次触发：

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

使用 Zephyr 启用 TFLite 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

在这个示例中，我们将使用示例 tflite "Hello World" 以及我们的控制台覆盖层和配置来通过 USB 串口读取响应。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

Connect to monitor:

```
screen /dev/ttyACM0 115200
```

你将看到从控制台返回的结果：

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

### 附加组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

您将看到一个显示多个黑色方块和角落中一个闪烁方块的显示，因为这个显示器只支持两种颜色。

让我们深入了解这个例子，看看它为什么有效：

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

这个示例中的扩展板覆盖文件设置了一个位于 0x3C 寄存器的 SSD1306 OLED 屏幕。它在 chosen 部分被选择为 zephyr 显示器。

#### Grove - 扩展板 - 按钮

为了测试这个设置，我们可以使用 Zephyr 的现有示例，我们将把它与 USB 控制台覆盖和配置一起使用。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

Connect to monitor:

```
screen /dev/ttyACM0 115200
```

按下带有示例的按钮将触发板载LED点亮。

您将看到从控制台返回的结果：

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

让我们深入探讨这个例子，看看为什么它能够起作用：

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

应用程序覆盖文件用于设置各种板载组件。使用此文件，按钮示例可以被利用，因为覆盖允许 Zephyr 配置按钮并使其可用于相关代码。

在这种情况下，GPIO 27 对应于 Xiao RP2040 上的引脚 A1/D1。它在此覆盖中被设置为充当按钮，并被别名为 sw0 名称，以允许它用于具有期望此功能的代码的示例。

#### Grove - 扩展板 - 蜂鸣器

我们将使用闪烁 PWM 示例来激活我们的蜂鸣器，通过 PWM 信号控制其激活。为此，我们将使用一个自定义覆盖，该覆盖为 A3 引脚启用 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

刷入 uf2 文件后，您应该开始听到一系列蜂鸣声，这些声音会随着示例程序的运行而发生变化。

让我们看看这是如何工作的：

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

这里使用的覆盖层首先移除现有的 `pwm_led0` 节点，因为该开发板通过板载 LED 设置支持 PWM。然后它配置 A3 引脚用作 PWM。

我们在这里使用通道 6B 进行 PWM，因为 Xiao RP2040 上 A3 的关联引脚是引脚 29。有关更多信息/其他引脚的引脚映射，请参阅 [RP2040 pinctrl 文档](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150)。

#### Grove - 扩展板 - SD 卡

我们将在这里使用文件系统示例以及 Xiao 扩展板屏蔽来尝试通过 SPI 与 SD 卡读卡器进行接口。扩展板屏蔽的 CS 引脚配置为关联的 `&xiao_d 2` 引脚，因此除了添加屏蔽外，您无需为将此功能与开发板关联做任何工作。为了进一步准备，我们使用启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

Connect to monitor:

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

在这种情况下，我的 SD 卡有两个文件。它们的名称和大小被输出到我的控制台。

让我们来看看这里涉及的相关元素：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关配置中，我们启用了 SPI、SDMMC 磁盘驱动程序和 GPIO。如果没有这个配置，覆盖层将导致错误，因为示例无法找到 SD 卡。

Xiao 扩展板屏蔽层的相关部分如下所示：

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

如前所述，`&xiao_d 2` 引脚映射用于允许选择 D2 引脚，无论使用哪种开发板，只要它支持 `&xiao_d` 引脚设置即可。

#### Grove - 温湿度传感器 (SHT31)

首先焊接引脚并将您的 Xiao RP2040 连接到扩展板。然后使用 grove 连接线将 Grove SHT31 与扩展板上的其中一个 I2C 端口连接。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

为了测试这个设置，我们可以使用 Zephyr 的现有示例，我们将通过覆盖层和配置文件启用 USB 控制台支持。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

Connect to monitor:

```
screen /dev/ttyACM0 115200
```

你将看到从控制台返回的结果：

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

让我们深入探讨这个例子，看看为什么它能够起作用：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

应用程序覆盖文件用于设置各种板载组件。使用此文件，SHT31 示例可以被利用，因为覆盖文件会告知[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的板子配置传感器。

#### 1.69英寸LCD显示模块，240×280分辨率，SPI接口

在这个示例中，我们将使用SPI连接到一个1.69英寸、240x280分辨率的LCD。

首先使用以下图片作为指导将您的板子连接到LCD屏幕（在这种情况下我们使用的是Xiao RP2040，但这里使用相同的引脚布局进行连接）。

| 1.69英寸LCD SPI显示屏| XIAO RP2040 |
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

接下来在硬件准备好后，我们可以构建用于刷写的uf2文件：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

进入引导加载程序模式并刷写您的设备：

```
west flash -r uf2
```

随着新固件的安装，设备现在显示了与我们之前在扩展板上看到的相同演示屏幕，只是现在更新为通过 SPI 连接的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558)支持。
- 感谢 **Tim 的努力**，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
