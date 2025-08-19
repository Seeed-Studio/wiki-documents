---
description: XIAO nRF52840(sense) 与 Zephyr(RTOS)
title:  XIAO nRF52840(sense) 与 Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
---

# XIAO nRF52840(sense) 与 Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## 什么是 RTOS

当今嵌入式系统最重要的组件之一是 **RTOS**，也称为**实时操作系统**，它负责从任务调度到执行应用程序的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，就会使用 RTOS。因此，与 GPOS（通用操作系统）相比，RTOS 通常重量轻、体积小，通常只提供在特定硬件上运行特定类型应用程序所需的功能。在某些情况下，开发人员可以修改现有的 RTOS，将其缩减为仅提供特定应用程序所需的功能，和/或定制其功能或性能特征。


## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于一个小占用空间的内核，专为在资源受限和嵌入式系统上使用而设计：从简单的嵌入式环境传感器和 LED 可穿戴设备到复杂的嵌入式控制器、智能手表和 IoT 无线应用程序。

## 特性
Zephyr 提供大量且不断增长的特性，包括：

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
  - Meta IRQ 调度，实现"中断下半部"或"tasklet"行为
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
- 已通过多个流行控制器验证
- 高度可配置

网格支持：

- 中继、朋友节点、低功耗节点 (LPN) 和 GATT 代理功能
- 支持两种配置承载 (PB-ADV 和 PB-GATT)
- 高度可配置，适用于至少具有 16k RAM 的设备

*参考：[**Zephyr 项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 开始使用

一旦设置了 Zephyr 工具链并下载了相关的 SDK，您就可以开始应用程序开发了。

对于 Xiao nrf52840，可以参考[板卡描述文件](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html)获取更多设置信息。

要对 Xiao nrf52840 进行编程，可以采取以下步骤：
1. 构建示例或您的应用程序
2. 插入 Xiao nrf52840
3. 双击 `RST` 按钮，将设备设置为 uf2 引导加载程序模式
4. 运行命令 `west flash -r uf2` 来刷写设备

最简单的示例是在板卡上运行"Hello World"示例。切换到 Zephyr 安装目录后，运行以下命令。

```
west build -p always -b xiao_ble samples/hello_world
```

如果您使用的是 Xiao nRF52840 Sense 板卡，您可以通过使用 `xiao_ble/nrf52840/sense` 替代 `xiao_ble` 来为其板卡定义文件构建，如下所示（对于此示例没有区别）：

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

完成后，进入 uf2 引导加载程序模式并输入：
```
west flash -r uf2
```

找到您设备的端口，在 Ubuntu 的情况下，可以通过：`ls /dev/tty*` 来完成，并确认插入 USB 时出现的设备。

在我的示例中，我看到 `/dev/ttyACM0`：

使用 screen，您可以连接并监控串行响应：
```
screen /dev/ttyACM0 115200
```

您应该看到类似以下的响应：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

为了协助在 Xiao 及其扩展板上使用 Zephyr 的过程，已构建了一个包含此处使用的多个覆盖层和配置的存储库。本 wiki 文章中包含的命令假设它位于相对于 zephyr 根目录的 `../applications/xiao-zephyr-examples`。可以通过更新以下命令来提供替代路径。

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

### 开发者知识

#### XIAO 扩展板

  为了将 Grove 模块与 Seeed Studio XIAO nrf52840 一起使用，我们将使用 [Seeed Studio XIAO 扩展底板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO nrf52840 连接到其上。

  之后，板卡上的 Grove 连接器可用于连接 Grove 模块

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

  当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove 扩展板上的 Grove 连接器时，您需要按照下图使用适当的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主要功能

- 板载 LED
- 板载 IMU（Sense）
- 板载麦克风（Sense）
- 蓝牙
- TFLite

#### 板载 LED

对于此示例，我们将使用闪烁示例来闪烁板载 LED。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

双击 RESET 按钮，然后刷写：

```
west flash -r uf2
```

您将看到板载红色 LED 开关切换，产生闪烁效果。

让我们深入了解这个示例，看看它为什么有效。

相关的示例代码引用了 led0：
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

这在 Xiao nRF52840 设备树代码中通过别名定义：
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

它对应板卡上的第 26 号引脚。

对于 Xiao 分线板的引脚，您不需要直接使用 &gpio0 引脚映射，因为板卡文件提供了简化接口的 Xiao 连接器。

例如，如果我要引用 D0，我会将其引用为 `&gpio 2` 或 `&xiao_d 0`。

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &gpio0 2 0>		/* D0 */
			, <1 0 &gpio0 3 0>		/* D1 */
			, <2 0 &gpio0 28 0>		/* D2 */
			, <3 0 &gpio0 29 0>		/* D3 */
			, <4 0 &gpio0 4 0>		/* D4 */
			, <5 0 &gpio0 5 0>		/* D5 */
			, <6 0 &gpio1 11 0>		/* D6 */
			, <7 0 &gpio1 12 0>		/* D7 */
			, <8 0 &gpio1 13 0>		/* D8 */
			, <9 0 &gpio1 14 0>		/* D9 */
			, <10 0 &gpio1 15 0>		/* D10 */
			;
	};
};
```

#### 板载 IMU（Sense）

Xiao nrf52840 的主要特性之一是其内置的 IMU 传感器。利用这些数据，可以训练机器学习模型、检测手势、板卡移动等。

为了测试这个功能，我们将使用一个内置示例，该示例利用了IMU，然后查看相关代码以了解其工作原理。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

双击RESET按钮，然后烧录：

```
west flash -r uf2
```

接下来您需要连接以查看输出：

```
screen /dev/ttyACM0 115200
```

这应该显示类似以下内容：
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

为什么它能工作？我们可以通过Zephyr的github仓库查看[示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl)。

```
	const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

示例逻辑找到目标板的相关`st_lsm6dsl`设备树对象。我们可以查看Xiao nrf52840 sense设备树以进一步了解其配置方式：

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

GPIO被用来使能引脚电源。从定义文件中可以看到它使用的是GPIO1 8。我在下面突出显示了[Xiao nRF52840原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)的相关部分：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

从这个原理图高亮部分可以看到GPIO1 8是IMU的使能引脚。此外GPIO0 11是中断引脚。因此这在上述设备树片段中得到了体现。

#### 板载麦克风 (Sense)

Xiao nrf52840的主要功能之一是其内置麦克风。像其IMU一样，它通过使用允许许多机器学习应用。

为了测试这个功能，我们将使用一个内置示例，该示例利用了麦克风，然后查看相关代码以了解其工作原理。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

双击RESET按钮，然后烧录：

```
west flash -r uf2
```

接下来您需要连接以查看输出：

```
screen /dev/ttyACM0 115200
```

这应该显示类似以下内容：
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

为什么它能工作？我们可以通过Zephyr的github仓库查看[示例代码](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic)。

此示例演示了以下内容：

> 这是一个非常简单的应用程序，旨在展示如何使用:ref:`Audio DMIC API`，同时也是开发实现此API的驱动程序的辅助工具。它执行两个不同配置的PDM传输（使用一个通道和两个通道），但不以任何方式处理接收到的音频数据。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

示例逻辑找到目标板的相关`dmic_dev`设备树对象。我们可以查看Xiao nrf52840 sense设备树以进一步了解其配置方式：

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

在示例项目覆盖中，然后启用此调节器：
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

一个 GPIO 被用来启用引脚电源。我在下面突出显示了 [Xiao nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) 的相关部分：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

从这个原理图突出显示中，您可以看到 GPIO1 10 是麦克风的使能引脚。

#### 蓝牙

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

烧录您的开发板：
```
west flash -r uf2
```

等待 MCU 在烧录后重置，然后连接到监视器：
```
screen /dev/ttyACM0 115200
```


您将看到一个可用于向开发板发送命令的控制台：
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

这里的 [配置文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) 为 Zephyr 构建启用了蓝牙相关功能。

#### TFLite - Hello World

使用 Zephyr 启用 TFLite 并更新：
```
west config manifest.project-filter -- +tflite-micro
west update
```

构建示例并烧录到您的开发板：
```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

烧录您的开发板：
```
west flash -r uf2
```

等待 MCU 在烧录后重置，然后连接到监视器：
```
screen /dev/ttyACM0 115200
```


您将看到从控制台返回的结果：
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

关于 TFLite 的其他信息超出了本指南的范围，但该示例可作为设备功能和运行 TFLite 设置所需组件的指南。

### 其他组件

- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C 显示屏
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 按钮
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - 蜂鸣器
- [Grove - 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD 卡
- [Grove - 温湿度传感器 (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69英寸 LCD 显示模块，240×280 分辨率，SPI 接口](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Xiao 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SD 卡

#### Grove - 扩展板 - I2C 显示屏

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

您将看到显示屏显示多个黑色方框和角落中的一个闪烁方框，因为此显示屏仅支持两种颜色。

让我们深入了解这个示例，看看它为什么有效：
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

该屏蔽设置了一个位于 0x3C 寄存器的 SSD1306 OLED 屏幕。它在 chosen 部分被选为 zephyr 显示屏。


#### Grove - 扩展板 - 按钮

要测试此设置，我们可以使用 Zephyr 的现有示例：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

烧录您的开发板：
```
west flash -r uf2
```

等待 MCU 在烧录后重置，然后连接到监视器：
```
screen /dev/ttyACM0 115200
```

按下示例按钮将触发板载LED点亮。

您将在控制台看到返回的结果：

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

让我们深入了解这个示例，看看它为什么能工作：
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

shield / overlay 文件用于设置各种板载组件。使用此文件，按钮示例可以被利用，因为overlay允许Zephyr配置按钮并使其可用于相关代码。

在这种情况下是Xiao nrf52840上的D1。它在此overlay中被设置为按钮，并被别名为sw0名称，以允许它用于具有期望此功能的代码的示例。

#### Grove - 扩展板 - 蜂鸣器

我们将使用blinky PWM示例来激活蜂鸣器，通过PWM信号控制其激活。为此，我们将使用一个自定义overlay，它为A3引脚启用PWM。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

刷写后，您应该开始听到一系列蜂鸣声，随着示例运行过程中声音会发生变化。

让我们看看这为什么有效：
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

overlay为引脚29配置PWM逻辑，该引脚对应Xiao nrf52840引脚图中的A3引脚。

#### Grove - 扩展板 - SD卡

我们将在这里使用文件系统示例以及Xiao扩展板shield来尝试通过SPI与SD卡读卡器接口。扩展板shield为相关的`&xiao_d 2`引脚配置了CS引脚，因此除了添加shield之外，您无需为将此功能与板关联做任何工作。为了进一步准备，我们使用启用SD卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

现在刷写并监控（首先按两次RESET进入uf2引导加载程序模式）：
```
west flash -r uf2
```

您应该看到类似这样的响应：
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

在这种情况下，我的SD卡有两个文件。它们的名称和大小被输出到我的控制台。

让我们看看这里起作用的相关元素：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

在相关配置中，我们启用了SPI、SDMMC磁盘驱动程序和GPIO。没有此配置，overlay将导致错误，因为示例无法找到SD卡。

Xiao扩展板shield的相关部分如下所示：

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

如前所述，`&xiao_d 2`引脚映射用于允许选择D2引脚，无论使用什么板，只要它支持`&xiao_d`引脚设置。

#### Grove - 温湿度传感器 (SHT31)

首先焊接引脚并将您的Xiao nrf52840连接到扩展板。然后在Grove SHT31和扩展板上的I2C端口之一之间连接grove连接器电缆。

要测试此设置，我们可以使用Zephyr的现有示例：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

在板子进入uf2引导加载程序模式后刷写：
```
west flash -r uf2
```

等待MCU在刷写后重置，然后连接到监控器：
```
screen /dev/ttyACM0 115200
```

您将在控制台看到返回的结果：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

让我们深入了解这个示例，看看它为什么能工作：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

应用overlay文件用于设置各种板载组件。使用此文件可以利用SHT31示例，因为overlay告知[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)如何为我们的板配置传感器。

#### 1.69英寸LCD显示模块，240×280分辨率，SPI接口

对于此示例，我们将使用SPI连接到240x280分辨率的1.69英寸LCD。

首先使用以下图像作为指南将您的板连接到LCD屏幕（在这种情况下我们使用Xiao nrf52840，但这里使用相同的引脚布局进行连接）。

| 1.69英寸LCD SPI显示屏| XIAO nrf52840 |
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

新固件就位后，设备现在显示与我们之前在扩展板上看到的相同演示屏幕，只是现在更新为通过SPI的彩色LCD。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Xiao 圆形显示屏

要测试此设置，我们可以使用Zephyr的现有示例：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

进入引导加载程序模式并烧录您的设备：
```
west flash -r uf2
```

您将看到显示屏显示多个彩色角落，其中一个黑色角落在闪烁。

另一个示例演示了触摸屏的使用：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

这里显示的音乐演示只是实际屏幕的一部分，但仍然演示了触摸屏的操作。如您所见，触摸播放按钮会开启音乐动画。

您可以从[shield文件](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)中看到，这通过SPI与GC9A01圆形显示驱动器接口，并通过i2c与CHSC6X触摸模块接口来工作。

让我们深入研究这个示例，看看它是如何工作的：
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

此shield执行以下操作：
- 选择GC9A01显示屏作为选定的Zephyr显示屏
- 设置LVGL指针逻辑以使用CHSC6X模块
- 禁用串口，因为引脚用于背光和触摸中断（如上所示通过：`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`）
- 使用D1、D2和D3引脚为SPI配置圆形显示屏

[示例逻辑](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)依赖于[LVGL演示示例代码](https://github.com/lvgl/lvgl/tree/master/demos/music)，可以进一步研究。


#### Xiao 圆形显示屏 - SD卡

我们将在这里使用文件系统示例以及Xiao扩展板shield来尝试通过SPI与SD卡读卡器接口。扩展板shield为相关的`&xiao_d 2`引脚配置了CS引脚，因此您无需为将此功能与板关联而做任何工作，除了添加shield。为了进一步准备，我们使用启用SD卡功能的自定义配置。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

现在烧录并监控（首先按两次RESET进入uf2引导加载程序模式）：
```
west flash -r uf2
```

等待MCU在烧录后重置，然后连接到监控器：
```
screen /dev/ttyACM0 115200
```

您应该看到类似这样的响应：
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

如预期的那样，文件内容以类似于Xiao扩展板SD卡示例输出的方式显示。

圆形显示屏shield的相关部分如下所示：

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

D2用于SD CS引脚。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) 支持。
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