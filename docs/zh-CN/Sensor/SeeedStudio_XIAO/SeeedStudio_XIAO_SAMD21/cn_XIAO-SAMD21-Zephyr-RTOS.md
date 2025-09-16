---
description: XIAO SAMD21 与 Zephyr(RTOS)
title:  XIAO SAMD21 与 Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
---

# XIAO SAMD21 与 Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

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
  - 红黑树就绪队列
  - 传统多队列就绪队列

### 蓝牙低功耗 5.0 支持

蓝牙 5.0 兼容 (ESR10) 和蓝牙低功耗控制器支持 (LE 链路层)。包括蓝牙网格和蓝牙认证就绪的蓝牙控制器。

- 通用访问配置文件 (GAP)，支持所有可能的 LE 角色
- 通用属性配置文件 (GATT)
- 配对支持，包括蓝牙 4.2 的安全连接功能
- 清晰的 HCI 驱动程序抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而不是完整的主机堆栈运行
- 经过多个流行控制器验证
- 高度可配置

网格支持：

- 中继、朋友节点、低功耗节点 (LPN) 和 GATT 代理功能
- 支持两种配置承载 (PB-ADV 和 PB-GATT)
- 高度可配置，适用于至少具有 16k RAM 的设备

*参考：[**Zephyr 项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

本 wiki 涵盖了 [Zephyr](https://www.zephyrproject.org/) 对 [XIAO SAMD21 Zephyr(RTOS) 入门指南](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html) 的支持。在本指南的帮助下，您将能够利用该开发板的可用功能集。

使用 Zephyr 的第一步是为本地开发设置 SDK 和工具链。应参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) 了解您的环境所需的相关设置程序。

一旦设置了 Zephyr 工具链并下载了相关的 SDK，您就可以开始应用程序开发。

要对 Xiao SAMD21 进行编程，可以采取以下步骤：

1. 构建一个示例或您的应用程序
2. 插入 Xiao SAMD21
3. 将 RST 引脚短接到 GND（使用可见的测试点）以将 MCU 引导到引导加载程序模式（或快速连续按两次连接的扩展板上的 RESET 按钮）
4. 继续使用 `west flash` 将固件刷写到开发板

最简单的示例是在开发板上运行"Hello World"示例。切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

通过输入 `ls /dev/tty*` 找到您设备的端口，并确认插入 USB 后出现的设备。

在我的示例中，我看到 `/dev/ttyACM0` 是新添加的设备。

使用 screen 您可以连接并监控串行响应：

```
screen /dev/ttyACM0 115200
```

You should see a response similar to the following:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

为了协助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含了此处使用的多个覆盖文件和配置。本 wiki 文章中包含的命令假设该仓库位于相对于 zephyr 根目录的 `../applications/xiao-zephyr-examples` 路径。可以通过更新下面的命令来提供替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Seeed Studio 扩展板</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
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

  为了在 Seeed Studio XIAO SAMD21 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO SAMD21 连接到上面。

  之后，板上的 Grove 连接器可以用来连接 Grove 模块

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

  当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 连接器时，您需要按照下图使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 板载 LED
- USB HID
- LittleFS
- TFLite

#### 板载 LED

在这个示例中，我们将使用闪烁示例来闪烁板载 LED。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

您将看到板载黄色 LED 开关切换，产生闪烁效果。

让我们深入了解这个示例，看看它为什么有效。

相关的示例代码引用了 led0：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

This is defined in the Xiao SAMD21 devicetree code via an alias:

```
 aliases {
  led0 = &led;
 };

 leds {
  compatible = "gpio-leds";
  led: led_0 {
   gpios = <&porta 17 GPIO_ACTIVE_LOW>;
   label = "LED";
  };
 };
```

它对应于板上的 PA17 引脚。这可以通过查看 Xiao SAMD21 原理图找到，方法是查看 MCU 并观察引脚上的标签。

对于使用 Xiao 分线板的引脚，您不需要直接使用 &porta 和 &portb 引脚映射，因为板文件提供了一个 Xiao 连接器，简化了接口。

例如，如果我要引用 D0，我可以将其引用为 `&porta 2` 或 `&xiao_d 0`。

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &porta 2 0>  /* D0 */
   , <1 0 &porta 4 0>  /* D1 */
   , <2 0 &porta 10 0>  /* D2 */
   , <3 0 &porta 11 0>  /* D3 */
   , <4 0 &porta 8 0>  /* D4 */
   , <5 0 &porta 9 0>  /* D5 */
   , <6 0 &portb 8 0>  /* D6 */
   , <7 0 &portb 9 0>  /* D7 */
   , <8 0 &porta 7 0>  /* D8 */
   , <9 0 &porta 5 0>  /* D9 */
   , <10 0 &porta 6 0>  /* D10 */
   ;
 };
};
```

#### USB HID

对于这个示例应用程序，我们将使用 USB HID 鼠标示例来允许 Xiao SAMD21 为主机计算机触发鼠标点击。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

在您的 Xiao 重置后，您现在应该能够通过扩展板上的按钮来控制鼠标左键。尝试将鼠标悬停在一些文本上并快速双击按钮。您会看到文本被高亮显示，就像您使用普通鼠标左键点击一样。您还会注意到当您点击按钮时板载 LED 会亮起，因为示例还依赖于在设备树中设置的 LED。

可以配置额外的按钮来与示例一起使用，因为它允许配置多达 4 个按钮来触发鼠标的按钮和方向，用于示例目的。

```
 buttons {
  compatible = "gpio-keys";
  xiao_button0: button_0 {
   gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
   label = "SW0";
   zephyr,code = <INPUT_KEY_0>;
  };
 };

 aliases {
  sw0 = &xiao_button0;
 };
```

您可以在这里看到示例中使用了 `&xiao_d` 1 来表示 D1 引脚。这个映射由 Xiao SAMD21 板文件提供，使连接到指定引脚变得方便，因为您不需要了解底层 MCU 映射，而可以依赖 Xiao 引脚布局。

对于 HID 鼠标示例，按钮是通过检查它们是否为 `compatible = "gpio-keys";` 以及是否具有关联键的映射（鼠标为 0-3）来确定的。在这种情况下，我们使用 `zephyr,code = <INPUT_KEY_0>;`，它对应于鼠标左键。

`led0` 别名由板的设备树文件设置，如前一节所述。

#### LittleFS

在这个示例中，我们将使用 littlefs zephyr 示例来创建一个 littlefs 分区并将文件保存到文件系统。然后我们将重新连接并通过串行输出确认文件仍然存在。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

Wait a moment for the MCU to reset after flashing and connect to monitor:

```
screen /dev/ttyACM0 115200
```

With this loaded you should see something similar to:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
E: WEST_TOPDIR/modules/fs/littlefs/lfs.c:1351: Corrupted dir pair at {0x0, 0x1}
W: can't mount (LFS -84); formatting
I: /lfs mounted
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 62

Listing dir /lfs ...
/lfs/boot_count read count:0 (bytes: 0)
/lfs/boot_count write new boot count 1: [wr:1]
I: Test file: /lfs/pattern.bin not found, create one!
------ FILE: /lfs/pattern.bin ------
01 55 55 55 55 55 55 55 02 55 55 55 55 55 55 55
03 55 55 55 55 55 55 55 04 55 55 55 55 55 55 55
05 55 55 55 55 55 55 55 06 55 55 55 55 55 55 55
07 55 55 55 55 55 55 55 08 55 55 55 55 55 55 55
09 55 55 55 55 55 55 55 0a 55 55 55 55 55 55 55
0b 55 55 55 55 55 55 55 0c 55 55 55 55 55 55 55
```

```
screen /dev/ttyACM0 115200
```

Now connecting again to the serial monitor we do not see the formatting nor does it need to create a file:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 59

Listing dir /lfs ...
[FILE] boot_count (size = 1)
[FILE] pattern.bin (size = 547)
/lfs/boot_count read count:1 (bytes: 1)
/lfs/boot_count write new boot count 2: [wr:1]
------ FILE: /lfs/pattern.bin ------
02 55 55 55 55 55 55 55 03 55 55 55 55 55 55 55
04 55 55 55 55 55 55 55 05 55 55 55 55 55 55 55
06 55 55 55 55 55 55 55 07 55 55 55 55 55 55 55
08 55 55 55 55 55 55 55 09 55 55 55 55 55 55 55
0a 55 55 55 55 55 55 55 0b 55 55 55 55 55 55 55
0c 55 55 55 55 55 55 55 0d 55 55 55 55 55 55 55
0e 55 55 55 55 55 55 55 0f 55 55 55 55 55 55 55
10 55 55 55 55 55 55 55 11 55 55 55 55 55 55 55
12 55 55 55 55 55 55 55 13 55
```

#### TFLite - Hello World

启用 TFLite 与 Zephyr 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

在这个示例中，我们将使用示例 tflite "Hello World" 以及我们的控制台覆盖层和配置来通过 USB 串口读取响应。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

Wait a moment for the MCU to reset after flashing and connect to monitor:

```
screen /dev/ttyACM0 115200
```

You will see results returned from the console:

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

### 附加组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

您将看到一个显示多个黑色方框和角落中一个闪烁方框的显示，因为这个显示器只支持两种颜色。

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
```

在这个示例中，扩展板的覆盖文件设置了一个位于 0x3C 寄存器的 SSD1306 OLED 屏幕。它在 chosen 部分被选择为 zephyr 显示器。

#### Grove - 扩展板 - 按钮

为了测试这个设置，我们可以使用 Zephyr 的现有示例，我们将把它与 USB 控制台覆盖和配置一起使用。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

Wait a moment for the MCU to reset after flashing and connect to monitor:

```
screen /dev/ttyACM0 115200
```

按下带有示例的按钮将触发板载LED点亮。

您将看到从控制台返回的结果：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@41004400 pin 4
Set up LED at gpio@41004400 pin 17
Press the button
Button pressed at 420744116
Button pressed at 454208099
Button pressed at 484598863
Button pressed at 518217016
Button pressed at 550754013
Button pressed at 591496990
```

Let's dive into this example a bit to see why it works:

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

在这种情况下，它使用 &xiao_d 连接器接口将 D1 关联为按钮。或者，我们也可以在这里使用 `&porta` 接口作为 `&porta 4`，这是 MCU 上与 D1 对应的引脚。

#### Grove - 扩展板 - 蜂鸣器

我们将使用闪烁 PWM 示例来激活蜂鸣器，通过 PWM 信号控制其激活。为此，我们将使用一个自定义覆盖，该覆盖为 A3 引脚启用 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

上传uf2文件后，您应该开始听到一系列蜂鸣声，这些声音会随着示例程序的运行而发生变化。

让我们来看看这是如何工作的：

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };

    pwm_leds {
        status = "okay";
        compatible = "pwm-leds";

        pwm_led0: pwm_led_0 {
            pwms = <&tcc1 1 PWM_HZ(880) >;
        };
    };
};

&pinctrl {
 pwm_default: pwm_default {
  group1 {
   pinmux = <PA11E_TCC1_WO1>;
  };
 };
};

&tcc1 {
 status = "okay";
 compatible = "atmel,sam0-tcc-pwm";
 /* Gives a maximum period of 1.4 s */
 prescaler = <1024>;
 #pwm-cells = <2>;

 pinctrl-0 = <&pwm_default>;
 pinctrl-names = "default";
};
```

正在使用的覆盖层首先移除现有的 `pwm_led0` 节点，因为该开发板已经配置了这个别名。然后它配置 A3 引脚用作 PWM。

我们使用的是 A3 引脚，它对应 SAMD21 上的 GPIO PA11。鉴于其关联的 PWM 引脚复用是 PA11E_TCC1_WO1，我们使用 tcc1 定时器来实现 PWM。

#### Grove - 扩展板 - SD 卡

我们将在这里使用文件系统示例以及 Xiao 扩展板屏蔽层来尝试通过 SPI 与 SD 卡读卡器进行接口通信。扩展板屏蔽层的 CS 引脚配置为关联的 `&xiao_d 2` 引脚，因此除了添加屏蔽层之外，您无需进行任何工作来将此功能与开发板关联。为了进一步准备，我们使用了一个启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

After uploading the uf2 file connect to monitor:

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.197,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 10000000Hz
[00:00:00.198,000] <inf> main: Block count 15519744
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

Xiao 扩展板屏蔽的相关部分实际上在这个示例中通过用于 Xiao SAMD21 的 `xiao_expansion_sd.overlay` 被覆盖，如下所示：

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
  spi-max-frequency = <10000000>;
 };
};
```

如前所述，`&xiao_d 2` 引脚映射用于允许选择 D2 引脚，无论使用哪种开发板，只要它支持 `&xiao_d` 引脚设置即可。

我们在这里不使用扩展板的覆盖层而是重写它的原因是，扩展板设置的 `spi-max-frequency` 为 `24000000` 太高，会导致 SAMD21 失败。

#### Grove - 温湿度传感器 (SHT31)

首先焊接引脚并将您的 Xiao SAMD21 连接到扩展板。然后在 Grove SHT31 和扩展板上的其中一个 I2C 端口之间连接一根 grove 连接器线缆。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

为了测试这个设置，我们可以使用 Zephyr 的现有示例，我们将通过覆盖层和配置文件启用 USB 控制台支持。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

Wait a moment for the MCU to reset after flashing and connect to monitor:

```
screen /dev/ttyACM0 115200
```

You will see results returned from the console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 26.13 Cel ; 47.34 %RH
SHT3XD: 26.11 Cel ; 46.93 %RH
SHT3XD: 26.14 Cel ; 46.78 %RH
SHT3XD: 26.17 Cel ; 46.60 %RH
SHT3XD: 26.19 Cel ; 46.25 %RH
SHT3XD: 26.21 Cel ; 46.01 %RH
SHT3XD: 26.21 Cel ; 45.82 %RH
SHT3XD: 26.23 Cel ; 46.28 %RH
SHT3XD: 26.27 Cel ; 47.11 %RH
SHT3XD: 26.27 Cel ; 47.72 %RH
```

Let's dive into this example a bit to see why it works:

```
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

应用程序覆盖文件用于设置各种板载组件。使用此文件，SHT31 示例可以被利用，因为覆盖文件告知[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的板子配置传感器。

#### 1.69英寸LCD显示模块，240×280分辨率，SPI接口

在这个示例中，我们将使用SPI连接到一个1.69英寸、240x280分辨率的LCD。

首先使用以下图片作为指导将您的板子连接到LCD屏幕（在这种情况下我们使用的是Xiao SAMD21，但这里使用相同的引脚布局进行连接）。

| 1.69英寸LCD SPI显示屏| XIAO SAMD21 |
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

接下来在硬件准备好后，我们可以构建和烧录：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Double press RESET or short the RST pin to the GND:

```
west flash
```

随着新固件的安装，设备现在显示了与我们之前在扩展板上看到的相同演示屏幕，只是现在更新为通过 SPI 连接的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601)支持。
- 感谢 **Tim 的努力**，您的工作将被[展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

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
