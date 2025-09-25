---
description: XIAO ESP32C3 与 Zephyr(RTOS)
title:  XIAO ESP32C3 与 Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
---

# XIAO ESP32C3 与 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## 什么是 RTOS

当今嵌入式系统最重要的组件之一是 **RTOS**，也称为**实时操作系统**，它负责从任务调度到执行应用程序的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，就会使用 RTOS。因此，与 GPOS（通用操作系统）相比，RTOS 通常重量轻、体积小，通常只提供在特定硬件上运行特定类型应用程序所需的功能。在某些情况下，开发人员可以修改现有的 RTOS，将其缩减为仅提供特定应用程序所需的功能，和/或定制其功能或性能特征。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小占用空间的内核，专为在资源受限和嵌入式系统上使用而设计：从简单的嵌入式环境传感器和 LED 可穿戴设备到复杂的嵌入式控制器、智能手表和 IoT 无线应用程序。

## 特性

Zephyr 提供大量且不断增长的功能，包括：

### 广泛的内核服务套件

Zephyr 为开发提供了许多熟悉的服务：

- *多线程服务*，支持协作式、基于优先级的、非抢占式和抢占式线程，可选循环时间片。包括 POSIX pthreads 兼容 API 支持。
- *中断服务*，用于中断处理程序的编译时注册。
- *内存分配服务*，用于固定大小或可变大小内存块的动态分配和释放。
- *线程间同步服务*，包括二进制信号量、计数信号量和互斥信号量。
- *线程间数据传递服务*，包括基本消息队列、增强消息队列和字节流。
- *电源管理服务*，如总体的、应用程序或策略定义的系统电源管理和细粒度的、驱动程序定义的设备电源管理。

### 多种调度算法

  Zephyr 提供了一套全面的线程调度选择：

- 协作式和抢占式调度
- 最早截止时间优先 (EDF)
- Meta IRQ 调度实现"中断下半部"或"tasklet"行为
- 时间片：在相同优先级的可抢占线程之间启用时间片
- 多种队列策略：
  - 简单链表就绪队列
  - 红/黑树就绪队列
  - 传统多队列就绪队列

### 蓝牙低功耗 5.0 支持

蓝牙 5.0 兼容 (ESR10) 和蓝牙低功耗控制器支持 (LE 链路层)。包括蓝牙网格和蓝牙认证就绪的蓝牙控制器。

- 通用访问配置文件 (GAP)，支持所有可能的 LE 角色
- 通用属性配置文件 (GATT)
- 配对支持，包括蓝牙 4.2 的安全连接功能
- 清晰的 HCI 驱动程序抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而不是完整的主机堆栈运行
- 已通过多个流行控制器验证
- 高度可配置

网格支持：

- 中继、朋友节点、低功耗节点 (LPN) 和 GATT 代理功能
- 支持两种配置承载 (PB-ADV 和 PB-GATT)
- 高度可配置，适用于至少具有 16k RAM 的设备

*参考：[**Zephyr 项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

使用 Zephyr 的第一步是为本地开发设置 SDK 和工具链。应参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) 了解您的环境所需的相关设置程序。

一旦设置了 Zephyr 工具链并下载了相关的 SDK，您就可以开始应用程序开发了。

对于 Xiao ESP32C3，可以参考[板卡描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html)获取进一步的设置信息。

要获取使用 ESP32C3 所需的 blob 文件，请运行以下命令：

```
west blobs fetch hal_espressif
```

在此之后，示例可以被构建并烧录到开发板上。

最简单的示例是在开发板上运行"Hello World"示例。切换到Zephyr安装目录后，运行以下命令。

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

执行最后一条命令后,你应该会看到显示"Hello World!"问候语的响应。

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

为了协助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含了此处使用的多个覆盖层和配置。本 wiki 文章中包含的命令假设该仓库位于相对于 zephyr 根目录的 `../applications/xiao-zephyr-examples` 位置。可以通过更新下面的命令来提供替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 扩展板</th>
      <th>Grove 红色LED</th>
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

### 开发者知识

#### XIAO 扩展板

  为了在 Seeed Studio XIAO ESP32C3 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO ESP32C3 连接到其上。

  之后，板上的 Grove 连接器可用于连接 Grove 模块。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

  当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 连接器时，您需要按照下图使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### 主要功能

- GPIO / LED 启用
- 蓝牙
- Wi-Fi
- TFLite

#### GPIO / LED 启用

为了测试此设置，我们可以使用 Zephyr 的闪烁示例，但我们将使用额外的 Grove LED 和覆盖层将 LED 重写到 D0 引脚以演示其工作原理（Xiao ESP32C3 没有可编程的板载 LED）：

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

双击 RESET 或将 RST 引脚短接到 GND。

```
west flash
```

您将看到连接的红色 LED 开关切换，产生闪烁效果。

让我们深入了解这个示例，看看它为什么有效。

相关的示例代码引用了 led0：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

LED 覆盖文件（`xiao-zephyr-examples/d0_led.overlay`）为我们定义了这个 LED：

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

这个覆盖层将 D0（通过 `&xiao_d 0` 显示）设置为 LED，并将其与别名 `led0` 关联。`led0` 是一个别名，允许许多示例使用它作为被控制的 LED，因为它们专门寻找这个名称。

如果您通过 `west espressif monitor` 监控串行输出，您将看到类似的输出：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

为了测试这个设置，我们可以使用一个包含 Zephyr 的现有样本：

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

你会看到一个可用于向开发板发送命令的控制台:

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

这里的[配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)为Zephyr构建启用了蓝牙相关功能。

#### Wi-Fi

为了测试这个设置，我们可以使用Zephyr的现有示例：

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

你会看到一个可用于向开发板发送命令的控制台:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

存在几个命令允许您查看和连接到本地网络，更多信息请参见[示例说明文档](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst)。

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

让我们深入探讨这个例子，看看为什么它能够起作用：

```
&wifi {
 status = "okay";
};
```

应用程序的[覆盖文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay)用于设置各种板载组件。使用此文件可以利用该示例，因为覆盖文件会通知示例逻辑启用Wi-Fi。

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

[配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf)在这里为Zephyr构建启用了几个网络相关功能。

#### TFLite - Hello World

启用TFLite与Zephyr并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

构建示例并将其烧录到您的开发板：

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

你将看到从控制台返回的结果：

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

关于 TFLite 的其他信息超出了本指南的范围，但该示例可以作为设备功能和运行 TFLite 设置所需组件的指南。

### 其他组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

您将看到一个显示多个黑色方块和角落中一个闪烁方块的显示屏，因为这个显示屏只支持两种颜色。

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

该扩展板在 0x3C 寄存器处设置了一个 SSD1306 OLED 屏幕。它在 chosen 部分被选择为 zephyr 显示器。

#### Grove - 扩展板 - 按钮

为了测试这个设置，我们可以使用 Zephyr 的现有示例，但我们将使用额外的 Grove LED 和一个覆盖层来将 LED 重写到 D0 引脚，以演示其工作原理（Xiao ESP32C3 没有可编程的板载 LED）：

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

按下带有示例的按钮将触发与 D0 关联的 LED 点亮。

您将看到从控制台返回的结果：

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

让我们深入了解这个示例，看看它为什么能够工作：

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

屏蔽/覆盖文件用于设置各种板载组件。使用此文件，按钮示例可以被利用，因为覆盖允许 Zephyr 配置按钮并使其可用于相关代码。

在这种情况下，Xiao ESP32C3 上的 D1。它在此覆盖中被设置为充当按钮，并被别名为 sw0 名称，以允许它用于具有期望此功能的代码的示例。

如上面 LED 示例所示的 LED 也通过其覆盖文件进行配置。现在按钮关联后，按下它会点亮此 LED。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - 扩展板 - 蜂鸣器

我们将使用闪烁 PWM 示例来激活我们的蜂鸣器，通过 PWM 信号控制其激活。为此，我们将使用一个自定义覆盖，它为 A3 引脚启用 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

刷写完成后，您应该开始听到一系列蜂鸣声，这些声音会随着示例程序的运行而发生变化。

让我们来看看这是如何工作的：

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

覆盖层为引脚 5 配置 PWM 逻辑，该引脚对应 ESP32C3 引脚图中的 A3 引脚。

#### Grove - 扩展板 - SD 卡

我们将在这里使用文件系统示例以及 Xiao 扩展板护盾来尝试通过 SPI 与 SD 卡读卡器进行接口连接。扩展板护盾的 CS 引脚配置为关联的 `&xiao_d 2` 引脚，因此除了添加护盾外，您无需为将此功能与开发板关联而做任何工作。为了进一步准备，我们使用了启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Now flash and monitor:

```
west flash
west espressif monitor
```

你应该看到类似这样的响应:

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

首先焊接引脚并将您的 Xiao ESP32C3 连接到扩展板。然后使用 grove 连接线将 Grove SHT31 与扩展板上的其中一个 I2C 端口连接。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

你将看到从控制台返回的结果：

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

首先使用以下图片作为指导将您的板子连接到LCD屏幕（在这种情况下我们使用的是Xiao ESP32C3，但这里使用相同的引脚布局进行连接）。

| 1.69英寸LCD SPI显示屏| XIAO ESP32C3 |
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

现在我们可以构建并刷写固件：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

随着新固件的安装，设备现在显示了与我们之前在扩展板上看到的相同演示屏幕，只是现在更新为通过 SPI 连接的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Xiao 圆形显示屏

为了测试这个设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入引导加载程序模式并刷写您的设备：

```
west flash
```

您将看到一个显示多个彩色角落的显示屏，其中一个黑色角落在闪烁。

另一个示例演示了触摸屏的使用：

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里展示的音乐演示只是实际屏幕的一部分，但仍然演示了触摸屏的操作。如您所见，触摸播放按钮会启动音乐动画。

您可以从[shield文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)中看到，这是通过SPI接口与GC9A01圆形显示驱动程序以及通过i2c与CHSC6X触摸模块进行交互来实现的。

让我们深入了解一下这个示例，看看它是如何工作的：

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

这个扩展板执行以下功能：

- 选择 GC9A01 显示屏作为所选的 Zephyr 显示器
- 设置 LVGL 指针逻辑使用 CHSC6X 模块
- 禁用串口，因为引脚用于背光和触摸中断（如上所示：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 配置圆形显示屏使用 D1、D2 和 D3 引脚进行 SPI 通信

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) 依赖于 [LVGL 演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，可以进一步研究。

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) 支持。
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
