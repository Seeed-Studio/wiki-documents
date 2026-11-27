---
description: XIAO SAMD21 搭配 Zephyr(RTOS)
title: XIAO SAMD21 搭配 Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-SAMD21-Zephyr-RTOS/
---

# XIAO SAMD21 搭配 Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## 什么是 RTOS

当今嵌入式系统中最重要的组件之一是 **RTOS**，也就是**实时操作系统（Real-Time Operating System）**，它负责从任务调度到执行应用程序的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理过程必须满足系统的时间限制时，就会使用 RTOS。因此，与 GPOS（通用操作系统，General Purpose Operating System）相比，RTOS 通常更轻量、体积更小，一般只提供在特定硬件上运行特定类型应用所需的功能。在某些情况下，开发者可以修改现有的 RTOS，将其精简到只提供特定应用所需的功能，和/或自定义其功能或性能特性。

## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小体积内核，专为资源受限和嵌入式系统设计：从简单的嵌入式环境传感器和 LED 可穿戴设备，到复杂的嵌入式控制器、智能手表和物联网无线应用。

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

符合 Bluetooth 5.0（ESR10）规范，并支持 Bluetooth Low Energy 控制器（LE 链路层）。包括 Bluetooth Mesh 以及通过 Bluetooth 认证、可用于 Bluetooth 资格认证的控制器。

- 通用访问配置文件（GAP），支持所有可能的 LE 角色
- 通用属性配置文件（GATT）
- 配对支持，包括来自 Bluetooth 4.2 的 Secure Connections 功能
- 简洁的 HCI 驱动抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而非完整主机协议栈来运行
- 已通过多款主流控制器验证
- 高度可配置

Mesh 支持：

- 中继、好友节点、低功耗节点（LPN）和 GATT 代理功能
- 支持两种配网承载（PB-ADV 和 PB-GATT）
- 高度可配置，可适配至少具有 16k RAM 的设备

*参考：[**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

本 wiki 涵盖了 [Zephyr](https://www.zephyrproject.org/) 对 [XIAO SAMD21 Zephyr(RTOS) 入门](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html)的支持。借助本指南，你将能够使用该开发板所提供的功能集。

使用 Zephyr 的第一步，是为本地开发准备好 SDK 和工具链。请参考 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)，根据你的环境完成相应的安装配置流程。

一旦 Zephyr 工具链安装完成并下载了相应的 SDK，你就可以开始进行应用开发。

要为 Xiao SAMD21 烧录程序，可以按照以下步骤进行：

1. 编译一个示例或你的应用程序
2. 插入 Xiao SAMD21
3. 将 RST 引脚与 GND 短接（使用可见的测试点），使 MCU 进入 bootloader 模式（或者在连接的扩展板上快速连续按两次 RESET 按钮）
4. 使用 `west flash` 将固件烧录到开发板

最简单的示例是在开发板上运行 “Hello World” 示例。在切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

双击 RESET 按钮或将 RST 引脚与 GND 短接：

```
west flash
```

通过输入 `ls /dev/tty*` 查找你的设备端口，并确认在插入 USB 后出现的是哪个设备。

在我的示例中，我看到 `/dev/ttyACM0` 是新出现的设备。

然后可以使用 screen 连接并监视串口输出：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的输出：

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

为了帮助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含本文中使用的多个 overlay 和配置。本文中的命令假设它位于相对于 Zephyr 根目录的 `../applications/xiao-zephyr-examples` 路径下。你也可以通过修改下面的命令来提供一个替代路径。

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

### 开发者须知

#### XIAO 扩展板

  为了在 Seeed Studio XIAO SAMD21 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，并将 XIAO SAMD21 插接在其上。

  之后，板载的 Grove 接口即可用于连接 Grove 模块

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

  你需要参考下图，在将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，使用合适的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 板载 LED
- USB HID
- LittleFS
- TFLite

#### 板载 LED

在本示例中，我们将使用 blinky 示例来让板载 LED 闪烁。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

双击 RESET 按钮或将 RST 引脚与 GND 短接：

```
west flash
```

你会看到板载黄色 LED 周期性亮灭，形成闪烁效果。

接下来我们稍微深入了解一下这个示例，看看它为什么能工作。

相关示例代码引用了 led0：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

它在 Xiao SAMD21 的 devicetree 代码中通过一个别名进行定义：

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

它对应开发板上的 PA17 引脚。可以通过查看 Xiao SAMD21 原理图中 MCU 的引脚标注来找到这一点。

对于 Xiao 引出排针上的引脚，你不需要直接使用 &porta 和 &portb 的引脚映射，因为板级文件提供了 Xiao 连接器，从而简化了接口。

例如，如果我要引用 D0，我可以将其写作 `&porta 2` 或 `&xiao_d 0`。

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

在这个示例应用中，我们将使用 USB HID 鼠标示例，让 Xiao SAMD21 为主机电脑触发鼠标点击。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

在你的 Xiao 复位之后，现在你应该可以通过扩展板上的按键来控制鼠标左键。尝试将鼠标悬停在一些文本上，然后快速双击按键。你会看到文本被高亮显示，其效果与使用普通鼠标左键点击类似。你还会注意到，当你按下按键时，板载 LED 会亮起，因为该示例同样依赖在 devicetree 中设置的一个 LED。

可以为该示例配置更多按键，它允许最多 4 个按键被配置，用于在示例中触发鼠标的按键和方向。

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

你可以从这个示例中看到，`&xiao_d` 1 在这里用来表示 D1 引脚。这个映射由 Xiao SAMD21 的板级文件提供，使得连接到指定引脚更加方便，因为你不需要了解底层 MCU 的映射，只需依赖 Xiao 的引脚定义即可。

对于 HID 鼠标示例，按键由其是否为 `compatible = "gpio-keys";` 以及是否映射到关联按键（鼠标的 0-3）来决定。在这个例子中，我们使用的是 `zephyr,code = <INPUT_KEY_0>;`，它对应鼠标左键。

`led0` 别名是由前一节中提到的板级 devicetree 文件设置的。

#### LittleFS

在这个示例中，我们将使用 littlefs Zephyr 示例来创建一个 littlefs 分区，并将文件保存到文件系统中。然后我们会重新连接，并通过串口输出确认它仍然存在。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

烧录完成后，等待 MCU 复位片刻，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

加载完成后，你应该会看到类似如下的输出：

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

现在再次连接到串口监视器时，我们不会再看到格式化输出，也不需要再创建文件：

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

在 Zephyr 中启用 TFLite 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

在这个示例中，我们将使用 tflite 的 “Hello World” 示例，并结合我们的控制台 overlay 和配置，通过 USB 串口读取返回结果。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

烧录完成后，等待 MCU 复位片刻，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

你会看到从控制台返回的结果：

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

### 其他组件

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - I2C Display

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

为了测试这个连接，我们可以使用 Zephyr 中已有的一个示例：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

你会看到显示屏上显示多个黑色方块，以及在角落里有一个闪烁的方块，因为这个显示屏只支持两种颜色。

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
```

在这个示例中，扩展板的 overlay 文件在 0x3C 寄存器上配置了一个 SSD1306 OLED 屏幕。它在 chosen 部分被选为 Zephyr 的显示设备。

#### Grove - Expansion Board - Button

为了测试这个连接，我们可以使用 Zephyr 中已有的一个示例，并配合 USB 控制台 overlay 和配置一起使用。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

烧录完成后，等待 MCU 复位片刻，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

在该示例中按下按钮会触发板载 LED 点亮。

你会看到从控制台返回的结果：

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

app overlay 文件用于设置各种板级组件。使用该文件可以利用按键示例，因为 overlay 允许 Zephyr 配置按键并使其可供相关代码使用。

在这个例子中，它使用 `&xiao_d` 连接器接口将 D1 关联为一个按键。或者，我们也可以在这里使用 `&porta` 接口，即 `&porta 4`，它是 MCU 上与 D1 对应的引脚。

#### Grove - 扩展板 - 蜂鸣器

我们将使用 blinky PWM 示例，通过 PWM 信号来控制蜂鸣器的启停。为此我们会使用一个自定义 overlay，使 A3 引脚启用 PWM 功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

上传 uf2 文件后，你应该会听到一系列蜂鸣声，并且在示例运行过程中声音会发生变化。

我们来看看为什么它能工作：

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

这里使用的 overlay 首先移除了已有的 `pwm_led0` 节点，因为该板子已经用这个别名进行了配置。然后它将 A3 引脚配置为 PWM 使用。

我们使用的是 A3 引脚，它在 SAMD21 上对应 GPIO PA11。鉴于其关联的 PWM pinmux 为 PA11E_TCC1_WO1，我们为 PWM 使用 tcc1 定时器。

#### Grove - 扩展板 - SD 卡

这里我们将结合 filesystem 示例和 Xiao 扩展板 shield，通过 SPI 尝试与 SD 卡读卡器进行接口通信。扩展板 shield 已经将 CS 引脚配置为与 `&xiao_d 2` 引脚关联，因此除了添加 shield 外，你无需再做额外工作来将此功能与板子关联。为了进一步做好准备，我们使用了一个自定义配置来启用 SD 卡功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

上传 uf2 文件后，连接到监视器：

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

在这个例子中，我的 SD 卡上有两个文件。它们的名称和大小都被输出到了我的控制台。

我们来看看这里起作用的相关元素：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关的配置中，我们启用了 SPI、SDMMC 磁盘驱动以及 GPIO。如果没有这个配置，overlay 会导致错误，因为示例无法找到 SD 卡。

Xiao 扩展板 shield 的相关部分实际上在这个示例中被 `xiao_expansion_sd.overlay` 覆盖了，该 overlay 用于下面所示的 Xiao SAMD21：

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

如前所述，`&xiao_d 2` 引脚映射用于让 D2 引脚被选作此用途，只要所用板子支持 `&xiao_d` 引脚设置，就与具体板型无关。

我们在这里不使用 shield 自带的 overlay 而是覆盖它的原因，是因为 shield 设置的 `spi-max-frequency` 为 `24000000`，频率过高，会导致 SAMD21 运行失败。

#### Grove - 温湿度传感器 (SHT31)

首先焊接排针，并将 Xiao SAMD21 连接到扩展板。然后使用 Grove 连接线将 Grove SHT31 与扩展板上的一个 I2C 端口连接起来。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

为了测试这个连接，我们可以使用 Zephyr 中已有的一个示例，并通过 overlay 和 conf 启用 USB 控制台支持。

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

烧录完成后等待 MCU 复位片刻，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

你会在控制台中看到返回的结果：

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

我们稍微深入了解一下这个示例，看看它为什么能工作：

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

app overlay 文件用于设置各种板级组件。使用该文件可以利用 SHT31 示例，因为 overlay 会告知[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的板子配置该传感器。

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

在这个示例中，我们将使用 SPI 连接到一块 1.69 英寸、240x280 分辨率的 LCD。

首先按照下图所示将你的开发板连接到 LCD 屏幕（本例中我们使用的是 Xiao SAMD21，但这里的连接使用相同的引脚布局）。

| 1.69-inch LCD SPI Display| XIAO SAMD21 |
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

接下来，在硬件准备就绪后，我们可以进行构建和烧录：

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

双击 RESET 或将 RST 引脚短接到 GND：

```
west flash
```

在新固件就位后，设备现在会显示与刚才在扩展板上看到的相同演示画面，只是现在更新为通过 SPI 驱动的彩色 LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的 [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) 提供支持。
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
