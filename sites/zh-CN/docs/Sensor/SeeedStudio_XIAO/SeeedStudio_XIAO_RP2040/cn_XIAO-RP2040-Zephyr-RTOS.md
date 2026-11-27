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
createdAt: '2024-04-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040-Zephyr-RTOS/
---

# XIAO RP2040 与 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

本 wiki 介绍了 [Zephyr](https://www.zephyrproject.org/) 对 [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/cn/xiao_rp2040_getting_started/) 的支持。借助本指南，你将能够使用该开发板所提供的全部功能。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小体积内核，专为资源受限和嵌入式系统设计：从简单的嵌入式环境传感器和 LED 可穿戴设备，到复杂的嵌入式控制器、智能手表和物联网无线应用。

对于每一款受支持的设备，Zephyr 都有一个 [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) 文件来描述开发板及其特性。[Xiao RP2040 Zephyr 开发板页面](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) 描述了当前可用的受支持特性，这些特性由 [开发板的 dts 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7) 定义。

*参考：[**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

使用 Zephyr 的第一步，是在本地开发环境中完成 SDK 和工具链的安装配置。请参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)，根据你的环境完成相应的安装步骤。

当 Zephyr 工具链已经配置完成并下载了对应的 SDK 之后，你就可以开始进行应用开发了。

对于 Xiao RP2040，可以参考 [开发板描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) 获取更多的配置信息。

要对 Xiao RP2040 进行编程，可以按照以下步骤操作：

1. 构建一个示例或你自己的应用
2. 插入 Xiao RP2040
3. 按住标记为 `B`（boot）的按键并按下 `R`（reset），这会将设备挂载为一个大容量存储设备
4. 运行烧录命令将固件写入设备 `west flash -r uf2`

最简单的示例是在开发板上运行 “Hello World” 示例。在切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

按照前文所述进入 bootloader 模式，然后烧录设备：

```
west flash -r uf2
```

设备在接收文件后会自动复位，此时你的电脑应已经通过 USB 与其建立串口连接。

找到你的设备所对应的端口，例如在 Ubuntu 上输入 `ls /dev/tty*`，并确认插入 USB 后新出现的是哪个设备。

在我的示例中，我看到 `/dev/ttyACM0` 是新添加的设备。

使用 screen，你就可以连接并监视串口输出：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的输出：

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

为了帮助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们准备了一个仓库，其中包含本教程中使用的多个 overlay 和配置。本文中的命令假设该仓库位于 Zephyr 根目录的相对路径 `../applications/xiao-zephyr-examples`。你也可以修改下面命令中的路径来使用其他位置。

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

### 开发者须知

#### XIAO 扩展板

  为了在 Seeed Studio XIAO RP2040 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，并将 XIAO RP2040 插接在其上。

  之后，板载的 Grove 接口就可以用来连接 Grove 模块。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2040" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

  当你将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要参考下图来使用正确的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### 主要功能

- WS2812 LED
- LED PWM
- 时钟
- TFLite

#### WS2812 LED

在本示例中，Xiao RP2040 使用其板载 LED，并持续循环闪烁红、绿、蓝三种颜色。

为了测试该配置，我们可以使用 Zephyr 中已有的示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

你会看到板载 WS2812 LED 以闪烁的方式不断循环显示红、蓝和绿色。

下面我们稍微深入了解一下这个示例，看看它为什么能工作：

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

这些 devicetree 元素展示了板载 WS2812 以及它是如何被使用的。由于 WS2812 的 VCC 线连接到 RP2040 的 11 号引脚，devicetree 使用了 gpio-hog 功能，使得可以通过环境变量来使 LED 供电。在这个例子中，12 号引脚被配置为 WS2812 的数据线，因此在启用 CONFIG_GPIO_HOGS 环境变量后，LED 灯带就可以在示例中被使用。

之所以能工作，部分原因是该示例在其 boards 目录下包含一个 xiao_rp2040.conf 文件，因此会将该配置与开发板的配置合并并启用。

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

如果你希望使用板载 WS2812，建议启用这个变量以允许其获得电源。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

在这个示例中，我们将演示 Xiao RP2040 的 PWM 功能。为此，我们会使用板载的蓝色 LED，并通过 PWM 让它持续渐亮渐暗。

为了测试该配置，我们可以使用 Zephyr 中已有的示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

你会看到板载 RGB LED 的蓝光缓慢地渐变亮度，并不断重复这一过程。

下面我们稍微深入了解一下这个示例，看看它为什么能工作：

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

在该示例的 `boards/xiao_rp2040.overlay` 中，这段逻辑从 devicetree 中启用了默认被禁用的 PWM 功能。Xiao RP2040 的配置中，将板载 RGB LED 的蓝色通道设置为默认 PWM。

正如在 Zephyr 开发板文件中的 `xiao_rp2040-pinctrl.dtsi` 所看到的，存在如下内容：

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

在本例中，PWM 使用的是已在 devicetree 中配置的 PWM LED，它又关联到引脚 25（蓝色 LED）。PWM 引脚可以在 [RP2040 文档](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html) 中查阅。

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### 时钟

在这里我们将使用一个现有示例以及我们的控制台 overlay：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

连接到监视器（在快速重置你的开发板之后以确保它重新启动）：

```
screen /dev/ttyACM0 115200
```

你会看到一系列定时器在设定的延迟之后依次触发：

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

在 Zephyr 中启用 TFLite 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

在这个示例中，我们将使用 tflite 的示例 “Hello World”，并结合我们的控制台 overlay 和配置，通过 USB 串口读取响应。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

连接到监视器：

```
screen /dev/ttyACM0 115200
```

你会看到从控制台返回的结果：

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

### 额外组件

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

为了测试这一套配置，我们可以在 Zephyr 中使用一个现有示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

你会看到显示屏上显示多个黑色方块，以及在角落里闪烁的方块，因为这个显示屏只支持两种颜色。

让我们稍微深入这个示例，看看它为什么能工作：

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

在这个示例中，shield overlay 文件在 0x3C 寄存器处设置了一个 SSD1306 OLED 屏幕。它在 chosen 部分中被选为 zephyr 显示设备。

#### Grove - Expansion Board - 按钮

为了测试这一套配置，我们可以使用 Zephyr 中的一个现有示例，并结合 USB 控制台 overlay 和配置文件一起使用。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

连接到监视器：

```
screen /dev/ttyACM0 115200
```

在该示例中按下按钮会触发板载 LED 点亮。

你会看到从控制台返回的结果：

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

让我们稍微深入这个示例，看看它为什么能工作：

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

在这个示例中，app overlay 文件用于设置各种板载组件。借助这个文件，可以使用按钮示例，因为该 overlay 允许 Zephyr 配置按钮，并使其可供相关代码使用。

在本例中，GPIO 27 对应 Xiao RP2040 上的 A1/D1 引脚。它在这个 overlay 中被设置为一个按钮，并被别名为 sw0 名称，以便用于该示例中那些期望使用此名称的代码。

#### Grove - Expansion Board - 蜂鸣器

我们将使用 blinky PWM 示例，通过 PWM 信号控制蜂鸣器的启用。为此我们会使用一个自定义 overlay，它为 A3 引脚启用 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

在烧录 uf2 文件之后，你应该会开始听到一系列蜂鸣声，并且随着示例的运行，声音会发生变化。

让我们看看它为什么能工作：

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

所使用的 overlay 首先移除了现有的 `pwm_led0` 节点，因为这块板通过板载 LED 已经支持 PWM。然后它将 A3 引脚配置为 PWM 使用。

在这里我们为 PWM 使用的是通道 6B，因为 Xiao RP2040 上 A3 对应的引脚是 29。更多信息 / 其他引脚的引脚映射请参阅 [RP2040 pinctrl 文档](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150)。

#### Grove - Expansion Board - SD 卡

这里我们将使用 filesystem 示例以及 Xiao Expansion Board shield，尝试通过 SPI 与 SD 卡读卡器进行交互。扩展板 shield 已经将 CS 引脚配置为与 `&xiao_d 2` 引脚关联，因此除了添加该 shield 外，你无需再做额外工作来将这一能力与开发板关联。为了进一步做好准备，我们使用了一个自定义配置来启用 SD 卡功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

连接到监视器：

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

在这个例子中，我的 SD 卡上有两个文件。它们的名称和大小都被输出到了我的控制台。

让我们来看看这里涉及到的相关元素：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关的配置中，我们启用了 SPI、SDMMC 磁盘驱动和 GPIO。没有这个配置，overlay 会导致错误，因为示例无法找到 SD 卡。

Xiao 扩展板 shield 的相关部分如下所示：

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

如前所述，使用 `&xiao_d 2` 引脚映射是为了允许选择 D2 引脚来完成这一点，只要所用开发板支持 `&xiao_d` 引脚设置即可。

#### Grove - 温湿度传感器 (SHT31)

首先焊接排针并将 Xiao RP2040 连接到扩展板。然后使用一个 Grove 连接线，将 Grove SHT31 与扩展板上的一个 I2C 接口连接起来。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

为了测试这一套硬件，我们可以使用 Zephyr 中已有的一个示例，并通过我们的 overlay 和 conf 启用 USB 控制台支持。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

连接到监视器：

```
screen /dev/ttyACM0 115200
```

你会在控制台中看到返回的结果：

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

我们来稍微深入了解一下这个示例，看看它为什么能工作：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

应用 overlay 文件用于设置各种板载组件。借助这个文件，可以使用 SHT31 示例，因为该 overlay 告诉[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的开发板配置这个传感器。

#### 1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口

在这个示例中，我们将使用 SPI 连接到一块 1.69 英寸、分辨率为 240x280 的 LCD。

首先按照下图所示连接你的开发板和 LCD 屏幕（本例中我们使用的是 Xiao RP2040，但这里的连接使用相同的引脚布局）。

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

接下来，在硬件准备就绪后，我们可以构建用于烧录的 uf2 文件：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

进入 bootloader 模式并烧录你的设备：

```
west flash -r uf2
```

在新的固件烧录完成后，设备现在会显示与之前在扩展板上看到的相同演示界面，只是现在通过 SPI 更新为彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558)支持。
- 感谢 **Tim 的付出**，你的作品将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
