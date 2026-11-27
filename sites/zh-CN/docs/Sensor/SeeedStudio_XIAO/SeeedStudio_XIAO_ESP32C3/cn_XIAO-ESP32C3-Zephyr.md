---
description: XIAO ESP32C3 搭配 Zephyr(RTOS)
title: XIAO ESP32C3 搭配 Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-ESP32C3-Zephyr/
---

# XIAO ESP32C3 搭配 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## 什么是 RTOS

当今嵌入式系统中最重要的组件之一是 **RTOS**，也称为**实时操作系统（Real-Time Operating System）**，它负责从任务调度到应用程序执行的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理过程必须满足系统的时间限制时，就会使用 RTOS。因此，与 GPOS（通用操作系统，General Purpose Operating System）相比，RTOS 通常更轻量、体积更小，一般只提供在特定硬件上运行特定类型应用所需的功能。在某些情况下，开发者可以修改现有的 RTOS，将其精简到只提供特定应用所需的功能，和/或自定义其功能或性能特性。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS 基于一个小体积内核设计，用于资源受限和嵌入式系统：从简单的嵌入式环境传感器和 LED 可穿戴设备，到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 特性

Zephyr 提供了大量且不断增长的功能，包括：

### 丰富的内核服务套件

Zephyr 为开发提供了许多常见服务：

- *多线程服务*：支持协作式、基于优先级的非抢占式和抢占式线程，并可选支持时间片轮转。包含兼容 POSIX pthreads 的 API 支持。
- *中断服务*：支持在编译期注册中断处理程序。
- *内存分配服务*：支持动态分配和释放固定大小或可变大小的内存块。
- *线程间同步服务*：支持二值信号量、计数信号量和互斥信号量。
- *线程间数据传递服务*：支持基础消息队列、增强消息队列和字节流。
- *电源管理服务*：例如全局的、由应用或策略定义的系统电源管理，以及由驱动定义的细粒度设备电源管理。

### 多种调度算法

  Zephyr 提供了一套全面的线程调度选项：

- 协作式和抢占式调度
- 最早截止时间优先（EDF）
- 实现“中断下半部”或“tasklet”行为的 Meta IRQ 调度
- 时间片：在相同优先级的可抢占线程之间启用时间片轮转
- 多种排队策略：
  - 简单链表就绪队列
  - 红黑树就绪队列
  - 传统多队列就绪队列

### 支持 Bluetooth Low Energy 5.0

符合 Bluetooth 5.0（ESR10）规范，并支持 Bluetooth Low Energy 控制器（LE 链路层）。包括 Bluetooth Mesh 以及通过 Bluetooth 认证准备就绪的 Bluetooth 控制器。

- 通用访问配置文件（GAP），支持所有可能的 LE 角色
- 通用属性配置文件（GATT）
- 配对支持，包括来自 Bluetooth 4.2 的 Secure Connections 功能
- 简洁的 HCI 驱动抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而非完整主机协议栈运行
- 已通过多款主流控制器验证
- 高度可配置

Mesh 支持：

- 中继、好友节点、低功耗节点（LPN）和 GATT 代理功能
- 支持两种配网承载（PB-ADV 和 PB-GATT）
- 高度可配置，可适配至少具有 16k RAM 的设备

*参考：[**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

使用 Zephyr 的第一步是获取 SDK 和工具链，并完成本地开发环境的搭建。请参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)，根据你的环境完成相应的安装步骤。

一旦完成 Zephyr 工具链的配置并下载了相应的 SDK，你就可以开始进行应用开发。

对于 Xiao ESP32C3，可以参考 [板级描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) 获取更多的配置信息。

要获取使用 ESP32C3 所需的二进制文件，请运行以下命令：

```
west blobs fetch hal_espressif
```

完成后，就可以构建示例并将其烧录到开发板上。

最简单的示例是在开发板上运行 “Hello World” 示例。在切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

在执行最后一条命令后，你应该会看到输出中显示 “Hello World!” 问候语。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

为了帮助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含本文使用的多个 overlay 和配置。本文中的命令假定该仓库位于 Zephyr 根目录相对路径 `../applications/xiao-zephyr-examples` 下。你也可以通过修改下面的命令来提供一个替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Grove Red LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 开发者须知

#### XIAO 扩展板

  为了在 Seeed Studio XIAO ESP32C3 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，并将 XIAO ESP32C3 插接在其上。

  之后，板上的 Grove 接口即可用于连接 Grove 模块。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

  当你将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要参考下图来使用合适的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### 主要功能

- GPIO / LED 使能
- 蓝牙
- Wi-Fi
- TFLite

#### GPIO / LED 使能

为了测试该配置，我们可以在 Zephyr 中使用 blinky 示例，但我们会额外使用一个 Grove LED，并通过 overlay 将 LED 覆盖到 D0 引脚，以演示其工作情况（Xiao ESP32C3 没有可编程的板载 LED）：

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

双击 RESET 按键或将 RST 引脚短接到 GND。

```
west flash
```

你会看到连接的红色 LED 周期性亮灭，形成闪烁效果。

下面我们稍微深入了解一下这个示例，看看它为什么能工作。

相关的示例代码引用了 led0：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

LED overlay（`xiao-zephyr-examples/d0_led.overlay`）为我们定义了这个 LED：

```
/ {
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
   label = "Demo LED";
  };
 };
};
```

这个 overlay 将 D0（通过 `&xiao_d 0` 指定）设置为一个 LED，并将其与别名 `led0` 关联。`led0` 是一个别名，使得许多示例可以将其作为被控制的 LED，因为它们会特意查找这个名称。

如果你通过 `west espressif monitor` 监视串口输出，会看到类似如下的输出：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### 蓝牙

为了测试该配置，我们可以在 Zephyr 中使用一个现有示例：

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

你会看到一个可用于向开发板发送命令的控制台：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Starting Observer Demo
Started scanning...
Device found: E5:44:60:88:DB:99 (random) (RSSI -92), type 0, AD data len 27
Device found: F3:38:F3:AD:FC:C6 (random) (RSSI -63), type 3, AD data len 8
Device found: 49:E6:31:0F:A6:25 (random) (RSSI -55), type 2, AD data len 28
Device found: EC:11:27:22:AF:D2 (public) (RSSI -80), type 0, AD data len 31
Device found: FB:3C:4A:AC:64:33 (random) (RSSI -78), type 0, AD data len 30
Device found: 79:05:36:B8:1E:1B (random) (RSSI -34), type 2, AD data len 4
Device found: 77:4D:FC:E2:12:D4 (random) (RSSI -86), type 2, AD data len 4
Device found: E0:9D:13:29:DA:15 (public) (RSSI -99), type 0, AD data len 31
Device found: 53:17:1B:22:70:23 (random) (RSSI -97), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

这里的 [conf 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) 为 Zephyr 构建启用了与蓝牙相关的特性。

#### Wi-Fi

为了测试这个设置，我们可以使用 Zephyr 中已有的一个示例：

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

你会看到一个可用于向开发板发送命令的控制台：

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

有多个命令可用，让你查看并连接到本地网络，更多信息请参阅 [示例自述文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst)。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
uart:~$ wifi scan
Scan requested
Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

让我们稍微深入了解一下这个示例，看看它为什么能工作：

```
&wifi {
 status = "okay";
};
```

这里的应用 [overlay 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) 用于设置各种板载组件。通过使用这个文件，该示例就可以被利用，因为 overlay 会告知示例逻辑启用 Wi-Fi。

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

这里的 [conf 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf) 为 Zephyr 构建启用了若干与网络相关的特性。

#### TFLite - Hello World

在 Zephyr 中启用 TFLite 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

构建该示例并烧录到你的开发板：

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
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

关于 TFLite 的更多信息超出了本指南的范围，但该示例可作为设备能力以及运行 TFLite 设置所需组件的参考。

### 其他组件

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

为了测试这个设置，我们可以使用 Zephyr 中已有的一个示例：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

你会看到显示屏上显示多个黑色方块，以及在角落里闪烁的方块，因为这个显示屏只支持两种颜色。

让我们稍微深入了解一下这个示例，看看它为什么能工作：

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

该 shield 在 0x3C 寄存器处设置了一个 SSD1306 OLED 屏幕。它在 chosen 部分被选为 Zephyr 的显示设备。

#### Grove - Expansion Board - 按钮

为了测试这个设置，我们可以使用 Zephyr 中已有的一个示例，但我们会使用一个额外的 Grove LED 和一个 overlay，将 LED 覆盖到 D0 引脚上来演示其工作（Xiao ESP32C3 没有可编程的板载 LED）：

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

在运行该示例时按下按钮，会触发与 D0 关联的 LED 点亮。

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@60004000 pin 3
Set up LED at gpio@60004000 pin 2
Press the button
Button pressed at 39818120
Button pressed at 63872629
Button pressed at 168304681
Button pressed at 241105558
Button pressed at 346324767
Button pressed at 382181856
Button pressed at 419342954
```

让我们稍微深入了解一下这个示例，看看它为什么能工作：

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

shield / overlay 文件用于设置各种板载组件。通过使用这个文件，按钮示例就可以被利用，因为 overlay 允许 Zephyr 配置按钮，并让关联的代码可以使用它。

在这个例子中，是 Xiao ESP32C3 上的 D1。它在这个 overlay 中被设置为一个按钮，并被别名为 sw0 名称，以便用于示例中期望该名称的代码。

如上面的 LED 示例所示，LED 也是通过它的 overlay 文件进行配置的。现在将按钮与其关联后，按下按钮就会点亮这个 LED。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - Expansion Board - 蜂鸣器

我们将使用 blinky PWM 示例，通过 PWM 信号控制蜂鸣器的启停。为此我们会使用一个自定义 overlay，它为 A3 引脚启用了 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

烧录完成后，你应该会开始听到一系列蜂鸣声，并且随着示例的运行，声音会发生变化。

让我们看看它为什么能工作：

```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
 aliases {
  pwm-0 = &ledc0;
  pwm-led0 = &pwm_buzzer;
 };

 pwmleds {
  compatible = "pwm-leds";
  pwm_buzzer: pwm_led_gpio0_5 {
   label = "PWM LED0";
   pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
  };
 };
};

&pinctrl {
 ledc0_default: ledc0_default {
  group1 {
   pinmux = <LEDC_CH0_GPIO5>;
   output-enable;
  };
 };
};

&ledc0 {
 pinctrl-0 = <&ledc0_default>;
 pinctrl-names = "default";
 status = "okay";
 #address-cells = <1>;
 #size-cells = <0>;
 channel0@0 {
  reg = <0x0>;
  timer = <0>;
 };
};
```

该 overlay 为引脚 5 配置了 PWM 逻辑，它对应于 ESP32C3 引脚分布中的 A3 引脚。

#### Grove - Expansion Board - SD 卡

这里我们将使用 filesystem 示例以及 Xiao Expansion Board shield，尝试通过 SPI 与 SD 卡读卡器进行交互。扩展板 shield 已经为关联的 `&xiao_d 2` 引脚配置了 CS 引脚，因此除了添加该 shield 外，你无需做额外工作来将此能力与开发板关联。为了进一步做好准备，我们使用了一个自定义配置来启用 SD 卡功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

现在烧录并监视：

```
west flash
west espressif monitor
```

你应该会看到类似如下的响应：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.032,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.033,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

在这个例子中，我的 SD 卡上有两个文件。它们的名称和大小都被输出到了控制台。

我们来看看这里涉及到的相关元素：

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

如前所述，`&xiao_d 2` 引脚映射用于允许选择 D2 引脚来完成这一点，只要所用开发板支持 `&xiao_d` 引脚设置即可。

#### Grove - Temperature and Humidity Sensor (SHT31)

首先焊接排针，并将 Xiao ESP32C3 连接到扩展板。然后使用一个 Grove 连接线，将 Grove SHT31 与扩展板上的一个 I2C 端口连接起来。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

为了测试这个连接，我们可以在 Zephyr 中使用一个已有的示例：

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 25.92 Cel ; 53.37 %RH
SHT3XD: 25.97 Cel ; 54.37 %RH
SHT3XD: 26.00 Cel ; 54.43 %RH
SHT3XD: 26.02 Cel ; 54.11 %RH
SHT3XD: 26.03 Cel ; 53.33 %RH
SHT3XD: 26.02 Cel ; 52.88 %RH
SHT3XD: 26.04 Cel ; 52.12 %RH
SHT3XD: 26.07 Cel ; 51.87 %RH
SHT3XD: 26.13 Cel ; 52.81 %RH
```

我们稍微深入了解一下这个示例，看看它为什么能工作：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

应用 overlay 文件用于设置各种板载组件。借助这个文件，SHT31 示例就可以被使用，因为该 overlay 告诉[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的开发板配置这个传感器。

#### 1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口

在这个示例中，我们将使用 SPI 连接到一块 1.69 英寸、分辨率为 240x280 的 LCD。

首先按照下图所示连接你的开发板和 LCD 屏幕（这里我们使用的是 Xiao ESP32C3，但在此处连接时使用的是相同的引脚布局）。

| 1.69-inch LCD SPI Display| XIAO ESP32C3 |
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

现在我们可以构建并烧录固件：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

在新的固件烧录完成后，设备现在会显示与我们之前在扩展板上看到的相同演示界面，只不过现在是通过 SPI 在彩色 LCD 上显示。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Round Display for Xiao

为了测试这个连接，我们可以在 Zephyr 中使用一个已有的示例：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入 bootloader 模式并烧录你的设备：

```
west flash
```

你会看到屏幕上显示多个彩色的角落，其中一个黑色角落在闪烁。

另一个示例演示了触摸屏的使用：

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里展示的音乐演示只是实际屏幕的一部分，但仍然展示了触摸屏的实际效果。可以看到，点击播放按钮会启动音乐动画。

从这个[shield 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)可以看出，它是通过 SPI 与 GC9A01 圆形显示驱动器交互，并通过 i2c 与 CHSC6X 触摸模块交互来实现工作的。

我们稍微深入了解一下这个示例，看看它是如何工作的：

```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

 lvgl_pointer {
  compatible = "zephyr,lvgl-pointer-input";
  input = <&chsc6x_xiao_round_display>;
 };
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
 status = "disabled";
};

&xiao_i2c {
 clock-frequency = < I2C_BITRATE_FAST >;

 chsc6x_xiao_round_display: chsc6x@2e {
  status = "okay";
  compatible = "chipsemi,chsc6x";
  reg = <0x2e>;
  irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
 };
};

&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 gc9a01_xiao_round_display: gc9a01@0 {
  status = "okay";
  compatible = "galaxycore,gc9x01x";
  reg = <0>;
  spi-max-frequency = <DT_FREQ_M(100)>;
  cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
  pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
  width = <240>;
  height = <240>;
  display-inversion;
 };
};
```

这个 shield 做了以下事情：

- 选择 GC9A01 显示屏作为选定的 Zephyr 显示设备
- 将 LVGL 指针逻辑设置为使用 CHSC6X 模块
- 禁用串口，因为这些引脚被用于背光和触摸中断（如上所示：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 使用 D1、D2 和 D3 引脚为 SPI 配置圆形显示屏

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)依赖于[LVGL 音乐演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，你可以进一步进行研究。

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521)支持。
- 感谢 **Tim 的付出**，你的工作也将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
