---
description: XIAO nRF52840(sense) 搭配 Zephyr(RTOS)
title: XIAO nRF52840(sense) 搭配 Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-nRF52840-Zephyr-RTOS/
---

# XIAO nRF52840(sense) 搭配 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## 什么是 RTOS

当今嵌入式系统中最重要的组件之一就是 **RTOS**，也称为**实时操作系统（Real-Time Operating System）**，它负责从任务调度到应用程序执行的所有工作。

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
- *电源管理服务*：例如由应用或策略定义的系统电源管理，以及由驱动定义的细粒度设备电源管理。

### 多种调度算法

  Zephyr 提供了一套全面的线程调度选项：

- 协作式和抢占式调度
- 最早截止时间优先（EDF）
- 实现“中断下半部”或“tasklet”行为的 Meta IRQ 调度
- 时间片轮转：在相同优先级的可抢占线程之间启用时间片轮转
- 多种队列策略：
  - 简单链表就绪队列
  - 红黑树就绪队列
  - 传统多队列就绪队列

### 支持 Bluetooth Low Energy 5.0

符合 Bluetooth 5.0（ESR10）规范，并支持 Bluetooth Low Energy 控制器（LE 链路层）。包括 Bluetooth Mesh 以及可用于 Bluetooth 认证的 Bluetooth 控制器。

- 通用访问配置文件（GAP），支持所有可能的 LE 角色
- 通用属性配置文件（GATT）
- 配对支持，包括来自 Bluetooth 4.2 的 Secure Connections 功能
- 简洁的 HCI 驱动抽象
- 原始 HCI 接口，可将 Zephyr 作为控制器而非完整主机协议栈运行
- 已在多款流行控制器上验证
- 高度可配置

Mesh 支持：

- 中继、好友节点、低功耗节点（LPN）和 GATT 代理功能
- 支持两种配网承载（PB-ADV 和 PB-GATT）
- 高度可配置，可适配至少 16k RAM 的设备

*参考：[**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门指南

一旦完成 Zephyr 工具链的搭建并下载了相关 SDK，就可以开始进行应用开发。

对于 Xiao nrf52840，可以参考 [板级描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) 获取更多设置信息。

要为 Xiao nrf52840 烧录程序，可以按照以下步骤进行：

1. 构建一个示例或你的应用程序
2. 插入 Xiao nrf52840
3. 双击 `RST` 按钮，将设备设置为 uf2 引导加载程序模式
4. 运行命令 `west flash -r uf2` 来烧录设备

最简单的示例是在开发板上运行 “Hello World” 示例。在切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b xiao_ble samples/hello_world
```

如果你使用的是 Xiao nRF52840 Sense 开发板，可以通过使用 `xiao_ble/nrf52840/sense` 替代 `xiao_ble` 来为其板级定义文件进行构建（在本示例中这不会产生区别）：

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

完成后进入 uf2 引导加载程序模式，然后输入：

```
west flash -r uf2
```

找到你的设备所对应的端口，在 Ubuntu 中可以通过 `ls /dev/tty*` 来完成，并确认插入 USB 后出现的是哪个设备。

在我的示例中，我看到的是 `/dev/ttyACM0`：

使用 screen，你就可以连接并监视串口输出：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的输出：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

为了帮助在 Xiao 及其扩展板上使用 Zephyr 的过程，我们构建了一个仓库，其中包含此处使用的多个 overlay 和配置。本文中的命令假定它位于相对于 Zephyr 根目录的 `../applications/xiao-zephyr-examples`。你可以通过更新下面的命令，为其提供一个替代路径。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio 扩展板</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
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

  为了在 Seeed Studio XIAO nrf52840 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)，并将 XIAO nrf52840 插接在其上。

  之后，板上的 Grove 接口就可以用来连接 Grove 模块。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

  当你将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要参考下图来使用合适的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 板载 LED
- 板载 IMU（Sense）
- 板载麦克风（Sense）
- Bluetooth
- TFLite

#### 板载 LED

在本示例中，我们将使用 blinky 示例来让板载 LED 闪烁。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

双击 RESET 按钮，然后进行烧录：

```
west flash -r uf2
```

你会看到板载红色 LED 周期性地亮灭，形成闪烁效果。

接下来我们稍微深入了解一下这个示例，看看它为什么能工作。

相关的示例代码引用了 led0：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

它在 Xiao nRF52840 的 devicetree 代码中通过一个别名进行定义：

```
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
   label = "Red LED";
  };
  ...
  }
```

它对应开发板上的 26 号引脚。

对于 Xiao 引出排针上的引脚，你不需要直接使用 &gpio0 引脚映射，因为板级文件提供了 Xiao 连接器，从而简化了接口。

例如，如果我要引用 D0，我可以将其引用为 `&gpio 2` 或 `&xiao_d 0`。

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &gpio0 2 0>  /* D0 */
   , <1 0 &gpio0 3 0>  /* D1 */
   , <2 0 &gpio0 28 0>  /* D2 */
   , <3 0 &gpio0 29 0>  /* D3 */
   , <4 0 &gpio0 4 0>  /* D4 */
   , <5 0 &gpio0 5 0>  /* D5 */
   , <6 0 &gpio1 11 0>  /* D6 */
   , <7 0 &gpio1 12 0>  /* D7 */
   , <8 0 &gpio1 13 0>  /* D8 */
   , <9 0 &gpio1 14 0>  /* D9 */
   , <10 0 &gpio1 15 0>  /* D10 */
   ;
 };
};
```

#### 板载 IMU（Sense）

Xiao nrf52840 的主要特性之一是其内置 IMU 传感器。利用这些数据，可以训练机器学习模型、检测手势、检测开发板的运动等。

为了测试这个功能，我们将使用一个内置示例来调用 IMU，然后再查看相关代码来理解它为何能工作。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

双击 RESET 按钮，然后烧录：

```
west flash -r uf2
```

接下来你需要连接串口以查看输出：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的输出：

```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

为什么它能工作？我们可以通过 Zephyr 的 github 仓库查看这个[示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl)。

```
 const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

该示例逻辑会找到目标板卡对应的 `st_lsm6dsl` devicetree 对象。我们可以查看 Xiao nrf52840 sense 的 devicetree，进一步了解它是如何配置的：

```
 lsm6ds3tr-c-en {
  compatible = "regulator-fixed-sync", "regulator-fixed";
  enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "LSM6DS3TR_C_EN";
  regulator-boot-on;
  startup-delay-us = <3000>;
 };
```

```
&i2c0 {
 compatible = "nordic,nrf-twim";
 /* Cannot be used together with spi0. */
 status = "okay";
 pinctrl-0 = <&i2c0_default>;
 pinctrl-1 = <&i2c0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-frequency = <I2C_BITRATE_FAST>;

 lsm6ds3tr_c: lsm6ds3tr-c@6a {
  compatible = "st,lsm6dsl";
  reg = <0x6a>;
  irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
  status = "okay";
 };
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

这里使用了一个 GPIO 来使能引脚电源。你可以从定义文件中看到它使用的是 GPIO1 8。下面我在 [Xiao nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) 中高亮了相关部分：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

从这个原理图高亮部分你可以看到，GPIO1 8 是 IMU 的使能引脚。另外 GPIO0 11 是中断引脚。因此这也体现在上面的 devicetree 代码片段中。

#### 板载麦克风（Sense）

Xiao nrf52840 的主要特性之一是其内置麦克风。与 IMU 一样，它的使用可以实现许多机器学习应用。

为了测试这个功能，我们将使用一个内置示例来调用麦克风，然后再查看相关代码来理解它为何能工作。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

双击 RESET 按钮，然后烧录：

```
west flash -r uf2
```

接下来你需要连接串口以查看输出：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的输出：

```
[00:00:00.297,088] <inf> dmic_sample: PCM output rate: 16000, channels: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - got buffer 0x20008380 of 3200 bytes
[00:00:00.497,222] <inf> dmic_sample: 1 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.597,229] <inf> dmic_sample: 2 - got buffer 0x20005180 of 3200 bytes
[00:00:00.697,235] <inf> dmic_sample: 3 - got buffer 0x20008380 of 3200 bytes
[00:00:00.797,241] <inf> dmic_sample: 4 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.897,247] <inf> dmic_sample: 5 - got buffer 0x20005180 of 3200 bytes
[00:00:00.997,222] <inf> dmic_sample: 6 - got buffer 0x20008380 of 3200 bytes
[00:00:01.097,229] <inf> dmic_sample: 7 - got buffer 0x20006a80 of 3200 bytes
[00:00:01.097,259] <inf> dmic_sample: PCM output rate: 16000, channels: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - got buffer 0x20008380 of 6400 bytes
[00:00:01.297,393] <inf> dmic_sample: 1 - got buffer 0x20005180 of 6400 bytes
[00:00:01.397,399] <inf> dmic_sample: 2 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.497,375] <inf> dmic_sample: 3 - got buffer 0x20008380 of 6400 bytes
[00:00:01.597,381] <inf> dmic_sample: 4 - got buffer 0x20005180 of 6400 bytes
[00:00:01.697,387] <inf> dmic_sample: 5 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.797,393] <inf> dmic_sample: 6 - got buffer 0x20008380 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: 7 - got buffer 0x20005180 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: Exiting
```

为什么它能工作？我们可以通过 Zephyr 的 github 仓库查看这个[示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic)。

该示例演示了以下内容：

> 这是一个非常简单的应用程序，旨在展示如何使用 :ref:`Audio DMIC API`，同时也有助于开发实现该 API 的驱动程序。它执行了两次 PDM 传输，使用了不同的配置（单通道和双通道），但并不会以任何方式处理接收到的音频数据。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

该示例逻辑会找到目标板卡对应的 `dmic_dev` devicetree 对象。我们可以查看 Xiao nrf52840 sense 的 devicetree，进一步了解它是如何配置的：

```
/ {
 msm261d3526hicpm-c-en {
  compatible = "regulator-fixed";
  enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "MSM261D3526HICPM-C-EN";
 };
}

&pdm0 {
 pinctrl-0 = <&pdm0_default>;
 pinctrl-1 = <&pdm0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-source = "PCLK32M";
};
```

在示例工程的 overlay 中，这个稳压器随后被启用：

```
/ {
 msm261d3526hicpm-c-en {
  regulator-boot-on;
 };
};

dmic_dev: &pdm0 {
 status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

这里使用了一个 GPIO 来使能引脚电源。下面我在 [Xiao nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) 中高亮了相关部分：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

从这个原理图高亮部分你可以看到，GPIO1 10 是麦克风的使能引脚。

#### 蓝牙

为了测试这套配置，我们可以使用 Zephyr 中已有的一个示例：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

烧录你的开发板：

```
west flash -r uf2
```

烧录完成后等待 MCU 重启片刻，然后连接串口监视：

```
screen /dev/ttyACM0 115200
```

你会看到一个可用于向开发板发送命令的控制台：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

这里的 [conf 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) 为 Zephyr 构建启用了蓝牙相关特性。

#### TFLite - Hello World

在 Zephyr 中启用 TFLite 并更新：

```
west config manifest.project-filter -- +tflite-micro
west update
```

构建示例并烧录到你的开发板：

```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

烧录你的开发板：

```
west flash -r uf2
```

烧录完成后等待 MCU 重启片刻，然后连接串口监视：

```
screen /dev/ttyACM0 115200
```

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
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

关于 TFLite 的更多信息超出了本指南的范围，但该示例可以作为了解设备能力以及运行 TFLite 所需组件的参考。

### 额外组件

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SD 卡

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

为了测试这一套接线，我们可以使用 Zephyr 中已有的示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

你会看到显示屏上显示多个黑色方块，并且在角落有一个闪烁的方块，因为这个显示屏只支持两种颜色。

我们来稍微深入看看这个示例，了解它为什么能工作：

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

该 shield 将 SSD1306 OLED 屏幕设置在 0x3C 寄存器处。它在 `chosen` 段中被选为 Zephyr 的显示设备。

#### Grove - 扩展板 - 按钮

为了测试这一套接线，我们可以使用 Zephyr 中已有的示例：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

烧录你的开发板：

```
west flash -r uf2
```

烧录完成后等待 MCU 重启，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

在运行该示例时按下按钮会触发板载 LED 点亮。

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
```

我们来稍微深入看看这个示例，了解它为什么能工作：

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

shield / overlay 文件用于配置各种板级组件。借助这个文件，可以使用按钮示例，因为该 overlay 允许 Zephyr 配置按钮并让相关代码可以访问它。

在这个例子中，使用的是 Xiao nrf52840 上的 D1 引脚。它在这个 overlay 中被配置为按钮，并被起别名为 sw0，以便用于该示例，因为示例代码期望使用这个名称。

#### Grove - 扩展板 - 蜂鸣器

我们将使用 blinky PWM 示例，通过 PWM 信号控制蜂鸣器的启停。为此我们会使用一个自定义 overlay 来为 A3 引脚启用 PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

烧录完成后，你应该会听到一系列蜂鸣声，随着示例程序的运行，声音会发生变化。

我们来看看它为什么能工作：

```
&pwm0 {
 status = "disabled";
};

&sw_pwm {
 status = "okay";
 channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
 pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

该 overlay 为引脚 29 配置了 PWM 逻辑，该引脚对应 Xiao nrf52840 引脚图中的 A3 引脚。

#### Grove - 扩展板 - SD 卡

这里我们将使用 filesystem 示例配合 Xiao 扩展板 shield，尝试通过 SPI 与 SD 卡读卡器进行通信。扩展板 shield 已经为对应的 `&xiao_d 2` 引脚配置了 CS 引脚，因此除了添加该 shield 外，你无需再做额外工作来将这一功能与开发板关联。为了进一步做好准备，我们使用了一个自定义配置来启用 SD 卡功能。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

现在进行烧录并打开监视（先按两次 RESET 进入 uf2 引导加载模式）：

```
west flash -r uf2
```

你应该会看到类似如下的输出：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

在这个例子中，我的 SD 卡上有两个文件。它们的文件名和大小都被输出到了控制台。

我们来看看这里起作用的相关元素：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关的配置文件中，我们启用了 SPI、SDMMC 磁盘驱动以及 GPIO。如果没有这个配置，overlay 会导致错误，因为示例无法找到 SD 卡。

Xiao 扩展板 shield 中的相关部分如下所示：

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

如前所述，使用的是 `&xiao_d 2` 引脚映射，这样只要开发板支持 `&xiao_d` 引脚配置，就可以让 D2 引脚被选作该用途，而不受具体板型限制。

#### Grove - 温湿度传感器 (SHT31)

首先焊接排针，并将 Xiao nrf52840 连接到扩展板。然后使用一根 Grove 连接线，将 Grove SHT31 与扩展板上的一个 I2C 端口连接起来。

为了测试这一套接线，我们可以使用 Zephyr 中已有的示例：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

在进入 uf2 引导加载模式后烧录你的开发板：

```
west flash -r uf2
```

烧录完成后等待 MCU 重启，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

你会在控制台中看到返回的结果：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

我们来稍微深入看看这个示例，了解它为什么能工作：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

app overlay 文件用于配置各种板级组件。借助这个文件，可以使用 SHT31 示例，因为该 overlay 告诉[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的开发板配置该传感器。

#### 1.69 英寸 LCD 显示模块，240×280 分辨率，SPI 接口

在这个示例中，我们将使用 SPI 连接到一块 1.69 英寸、分辨率为 240x280 的 LCD。

首先按照下图所示将开发板连接到 LCD 屏幕（本例中我们使用的是 Xiao nrf52840，但这里的连接使用相同的引脚布局）。

| 1.69-inch LCD SPI Display| XIAO nrf52840 |
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
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

在新的固件运行后，设备现在会显示与之前在扩展板上看到的相同演示画面，只是这次是通过 SPI 输出到彩色 LCD 上。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Xiao 圆形显示屏

为了测试这一套接线，我们可以使用 Zephyr 中已有的示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入引导加载模式并烧录你的设备：

```
west flash -r uf2
```

你会看到显示屏的多个角落显示不同颜色，其中一个黑色角落在闪烁。

另一个示例演示了触摸屏的使用：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里展示的音乐演示只是实际屏幕的一部分，但仍然展示了触摸屏的工作情况。可以看到，点击播放按钮会启动音乐动画。

从这个[shield 文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)可以看出，它是通过 SPI 与 GC9A01 圆形显示驱动通信，并通过 i2c 与 CHSC6X 触摸模块通信来实现的。

我们来稍微深入看看这个示例，了解它是如何工作的：

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

此扩展板执行以下操作：

- 将 GC9A01 显示屏选择为 Zephyr 的目标显示设备
- 将 LVGL 指针逻辑设置为使用 CHSC6X 模块
- 禁用串口，因为这些引脚被用于背光和触摸中断（如上所示：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 使用 D1、D2 和 D3 引脚为 SPI 配置圆形显示屏

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)依赖于 [LVGL 演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，可以进一步进行研究。

#### Xiao 圆形显示屏 - SD 卡

这里我们将使用 filesystem 示例以及 Xiao 扩展板扩展板来尝试通过 SPI 与 SD 卡读卡器进行通信。扩展板扩展板已将 CS 引脚配置为关联的 `&xiao_d 2` 引脚，因此除了添加扩展板之外，你无需做任何额外工作来将此功能与开发板关联。为了进一步做好准备，我们使用了一个启用 SD 卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

现在烧录并监视（先按两次 RESET 进入 uf2 引导加载模式）：

```
west flash -r uf2
```

烧录完成后等待 MCU 复位片刻，然后连接到监视器：

```
screen /dev/ttyACM0 115200
```

你应该会看到类似如下的响应：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

如预期那样，文件内容的显示方式与 Xiao 扩展板 SD 卡示例的输出类似。

圆形显示屏扩展板的相关部分如下所示：

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc_xiao_round_display: sdhc@1 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <1>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <DT_FREQ_M(24)>;
 };
};
```

D2 被用作 SD 的 CS 引脚。

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的 [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) 支持。
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
