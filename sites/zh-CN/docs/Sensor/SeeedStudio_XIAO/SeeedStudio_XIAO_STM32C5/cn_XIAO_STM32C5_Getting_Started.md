---
title: XIAO STM32C5 入门指南
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_getting_started
sku: 100036669
last_update:
  date: 08/11/2026
  author: Zeller
createdAt: '2026-08-07'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/xiao_stm32c5_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 概述

迎接首款由 STM32 驱动的 XIAO。XIAO STM32C5 基于 STM32C5A3CG，搭载 144MHz Arm Cortex-M33 内核，将 CAN FD 连接、16MB 外部 Flash，以及带可编程加热功能的六轴 IMU 集成到紧凑的 XIAO 外形中。IMU 周围的专用加热电阻支持通过固件控制预热，适用于机器人和运动感知项目。两个原生 CAN FD 控制器（其中一路配备板载 TCAN3403-Q1 收发器）为 USB-CAN 适配器、联网传感器和机器人控制项目提供了起点。USB-C 和板载电池充电功能同时支持桌面开发和便携式应用。

## 特性

- **首款 STM32 驱动的 XIAO**：基于 STM32C5A3CG，配备 144MHz Arm Cortex-M33 处理器，支持浮点运算和 DSP 指令，用于嵌入式控制和传感器处理。
- **内置 CAN FD 连接**：两个原生 CAN FD 控制器，其中一路连接到板载 TCAN3403-Q1 收发器，并通过 CANH/CANL 焊盘引出。添加外部收发器即可使用第二路通道。
- **带可编程加热的六轴 IMU**：板载 LSM6DS3TR-C 加速度计和陀螺仪，周围配有专用加热电阻。通过 GPIO 控制加热，实现可编程预热，并可结合带温度反馈的固件实现闭环温度调节，有助于降低机器人和运动感知应用中的温度相关漂移。
- **16MB 外部 Flash**：可通过应用固件存储应用数据、传感器日志、配置文件和 CAN 报文记录。
- **用于通信定时的外部晶振**：板载高速外部晶振为 CAN FD 和其他对时序敏感的应用提供时钟参考。
- **USB-C 与电池充电**：可通过 USB-C 进行开发，或利用板载锂电池充电电路和电池连接焊盘构建电池供电设备。
- **紧凑且易于集成的设计**：XIAO 外形和半孔边缘焊盘既支持通过排针在面包板上原型开发，也便于集成到自定义载板中。

## 规格参数

| 项目                       | 规格参数                                                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 产品                       | Seeed Studio XIAO STM32C5                                                                                             |
| 微控制器                   | STMicroelectronics STM32C5A3CG                                                                                        |
| CPU                        | 单核 Arm Cortex-M33，最高 144MHz，带 FPU 和 DSP 指令                                                                  |
| MCU 封装                   | UFQFPN48                                                                                                              |
| 内部程序 Flash             | 1MB                                                                                                                   |
| SRAM                       | 256KB                                                                                                                 |
| 外部 Flash                 | 16MB                                                                                                                  |
| CAN 控制器                 | 2 个原生 CAN FD 控制器                                                                                                |
| 板载 CAN 收发器            | 1 x TI TCAN3403-Q1                                                                                                    |
| 板载 CAN 总线连接          | CANH/CANL 焊盘；使用板载 GND 作为信号参考                                                                            |
| 第二路 CAN 通道            | 数字 TX/RX 信号；需要外部 CAN 收发器                                                                                 |
| CAN 终端电阻               | 120 欧姆，默认启用；可通过可切割焊盘断开                                                                             |
| CAN 隔离                   | 无板载电气隔离                                                                                                       |
| IMU                        | STMicroelectronics LSM6DS3TR-C，三轴加速度计和三轴陀螺仪                                                             |
| IMU 加热                   | IMU 周围的专用加热电阻，采用 GPIO 控制驱动                                                                           |
| 温度调节                   | 可编程预热；闭环设定点调节需要温度反馈和合适的应用固件                                                               |
| 外部时钟                   | 板载高速外部晶振                                                                                                     |
| USB                        | USB-C；USB 2.0 Full Speed，12Mbps 信号速率                                                                           |
| 逻辑电平                   | 3.3V                                                                                                                  |
| 供电                       | USB-C 5V 输入或通过 BAT 焊盘连接兼容锂电池                                                                           |
| 电池充电                   | 板载充电电路                                                                                                         |
| 用户控制                   | 复位按钮和启动按钮                                                                                                   |
| 指示灯                     | 用户 LED 和充电指示灯                                                                                                 |
| 调试接口                   | SWD                                                                                                                   |
| 外形尺寸                   | 紧凑的 XIAO 模块，带半孔边缘焊盘                                                                                     |

## 硬件概览

<Tabs>
<TabItem value="XIAO STM32C5" label="XIAO STM32C5" default>

### XIAO STM32C5 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
### XIAO STM32C5 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Back_1.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **引脚映射**

| XIAO 引脚 / 信号 | 功能            | 芯片引脚 | 复用功能              | 描述                                                          |
| :---------------: | :-------------: | :-------: | :-----------------: | :----------------------------------------------------------- |
| VBUS              | 电源            |           | USB 5V              | 5V 电源输入/输出                                             |
| GND               | 地              |           |                     | 电源地                                                       |
| 3V3 / 3.3V-OUT    | 电源            |           | VOUT_3V3            | 稳压 3.3V 输出                                               |
| D0                | 模拟            | PA0       | A0, ADC             | GPIO 和模拟输入                                              |
| D1                | 模拟            | PA1       | A1, ADC             | GPIO 和模拟输入                                              |
| D2                | 模拟            | PA2       | A2, ADC             | GPIO 和模拟输入                                              |
| D3                | 模拟            | PA3       | A3, ADC             | GPIO 和模拟输入                                              |
| D4                | I2C             | PB7       | I2C1_SDA            | GPIO 和 I2C 数据                                             |
| D5                | I2C             | PB6       | I2C1_SCL            | GPIO 和 I2C 时钟                                             |
| D6                | UART            | PA9       | UART_TX             | GPIO 和 UART 发送                                            |
| D7                | UART            | PA10      | UART_RX             | GPIO 和 UART 接收                                            |
| D8                | SPI             | PE2       | SPI_SCK             | GPIO 和 SPI 时钟                                             |
| D9                | SPI             | PB0       | SPI_MISO            | GPIO 和 SPI 数据输入                                         |
| D10               | SPI             | PB15      | SPI_MOSI            | GPIO 和 SPI 数据输出                                         |
| D11               | CAN FD          | PB8       | FDCAN1_RX           | GPIO 和 FDCAN1 接收                                          |
| D12               | CAN FD          | PB9       | FDCAN1_TX           | GPIO 和 FDCAN1 发送                                          |
| D13               | CAN FD          | PB5       | FDCAN2_RX           | GPIO 和板载 CAN 收发器接收                                  |
| D14               | CAN FD          | PB13      | FDCAN2_TX           | GPIO 和板载 CAN 收发器发送                                  |
| D15               | CAN 控制        | PB14      | CAN_STB             | 控制板载 CAN 收发器待机模式                                 |
| CAN_H             | CAN 总线        |           | TCAN3403 CANH       | CAN FD 差分总线高电平                                        |
| CAN_L             | CAN 总线        |           | TCAN3403 CANL       | CAN FD 差分总线低电平                                        |
| CANFD2_TERM       | CAN 终端        |           | JP1, 120 ohm        | 切断/断开以禁用板载 120 欧姆终端电阻                        |
| BAT+              | 电池电源        |           | VBAT                | 3.7V 锂离子/锂聚合物电池正极                                |
| BAT-              | 电池地          |           | GND                 | 电池负极                                                     |
| BAT_EN            | 电池监测        | PA15      |                     | 使能电池电压测量电路                                         |
| BAT_READ          | 模拟            | PA4       | ADC                 | 读取电池电压；ADC 输入约为 VBAT / 2                         |
| SWCLK             | 调试            | PA14      | SWD Clock           | 串行线调试时钟焊盘                                           |
| SWDIO             | 调试            | PA13      | SWD Data            | 串行线调试数据焊盘                                           |
| RST               | 系统            | NRST      | STM32C5_RESET       | 硬件复位测试焊盘                                             |
| USB_D+            | USB             | PA12      | USB_DP              | USB 2.0 差分数据正                                           |
| USB_D-            | USB             | PA11      | USB_DN              | USB 2.0 差分数据负                                           |
| BOOT              | 系统            | PH2-BOOT0 | STM32C5_BOOT        | 启动模式测试焊盘和启动按钮信号                              |
| CHARGE_LED        | 指示灯          |           | Charger NCHG output | 由充电 IC 控制的红色充电状态 LED                             |
| USER_LED          | GPIO 指示灯     | PB12      | GPIO25 / User_LED   | 绿色用户 LED；低电平点亮                                    |
| IMU_SDA           | 板载 IMU        | PB4       | I2C2_SDA            | 板载 LSM6DS3TR-C IMU 的 I2C 数据线                           |
| IMU_SCL           | 板载 IMU        | PB3       | I2C2_SCL            | 板载 LSM6DS3TR-C IMU 的 I2C 时钟线                           |
| IMU_INT           | 板载 IMU        | PC13      | IMU_INT1            | 来自板载 IMU 的中断输出                                      |
| IMU_HEATER_PWM    | IMU 加热器      | PA8       | PWM                 | IMU 温度补偿加热器的 PWM 控制                               |

## Bootloader 使用方法

XIAO STM32C5 出厂预装了支持 UF2 的 bootloader，主要用于固件更新。在烧录 `.uf2` 文件之前，快速双击板载 Reset 按钮。此时一块名为 **XIAOC5BOOT** 的大容量存储磁盘会在你的电脑上挂载。然后将固件文件复制到该磁盘中即可完成烧录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_disk_1.png" style={{width:400, height:'auto'}}/></div>

## 使用 PlatformIO 入门

本节将演示如何使用 PlatformIO 开发平台与 Zephyr RTOS 框架，通过点亮板载用户 LED 来进行 XIAO STM32C5 的开发与使用。

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO STM32C5](https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
       <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### 软件准备

**步骤 1.** 下载 VS Code

根据你所使用的系统下载 [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
**步骤 2.** 安装 PlatformIO 扩展

打开 VSCode，点击 Extensions，然后搜索 PlatformIO 并选择安装。安装完成后，重启 VSCode。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

**步骤 3.** 安装 platform-seeedboards 平台包

Seeed Studio XIAO 系列开发板使用自定义的 PlatformIO 平台，因此你需要手动安装对应的平台包。

- 运行以下命令进行全新安装：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 如果你之前已经在 PlatformIO 中使用过 Seeed Studio XIAO 系列开发板，请运行下面的命令进行更新：


```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

如果你想使用已有的 PlatformIO 项目，请将 **platformio.ini** 的内容替换为如下所示：

```ini
[env:seeed-xiao-stm32c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-stm32c5
```

:::

**步骤 4.** 创建新项目

<details>

<summary>首次创建新项目的加速步骤（可选）</summary>

在此步骤中，你可以预先下载 XIAO STM32C5 开发所需的资源包，以加快首次创建新项目的速度。

**1. 安装 Zephyr 框架包。**

```bash
pio pkg install --global --tool "framework-zephyr-nrf54lm20=https://dl.registry.platformio.org/download/platformio/tool/framework-zephyr/3.40400.260428/framework-zephyr-3.40400.260428.tar.gz"
```

**2. 安装 Zephyr 模块和 STM32 HAL。**

将适用于你操作系统的命令块复制到 VS Code 终端中。如果出现多行粘贴警告，请点击 **Paste** 以保留换行。不要点击 **Paste as one line**。

Windows（PowerShell）：

```powershell
$env:PATH = "$HOME/.platformio/penv/Scripts;$env:PATH"

python "$HOME/.platformio/packages/framework-zephyr-nrf54lm20/scripts/platformio/install-deps.py" `
  --platform ststm32 `
  --secondary-installation
```

macOS/Linux（Bash 或 Zsh）：

```bash
export PATH="$HOME/.platformio/penv/bin:$PATH"

python "$HOME/.platformio/packages/framework-zephyr-nrf54lm20/scripts/platformio/install-deps.py" \
  --platform ststm32 \
  --secondary-installation
```

:::tip

下载体积较大，请耐心等待并保持网络稳定。

:::

</details>

- 在 PlatformIO 插件界面中，选择创建新项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_1.png" style={{width:800, height:'auto'}}/></div>

- 为你的项目命名，选择 **Seeed Studio XIAO STM32C5** 作为目标开发板，并配置开发框架和项目存储路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_2.png" style={{width:800, height:'auto'}}/></div>

:::tip

首次创建项目可能需要一些时间，请耐心等待。

:::

### 编译与上传

**步骤 1.** 编写 LED 闪烁程序

XIAO STM32C5 具有一个用户 LED，映射到 GPIO PB12。该 LED 在低电平时点亮；本示例将其配置为每 500 ms 闪烁一次。

该项目由三个核心文件组成：

- `main.c`：包含应用逻辑的主程序。
- `app.overlay`：用于硬件外设配置的 Devicetree 覆盖文件。
- `prj.conf`：用于启用所需 Zephyr 模块的项目配置文件。

按照以下步骤点亮 LED：

- 打开你新创建的项目，并在 `zephyr` 文件夹下创建 `app.overlay` Devicetree 文件。

```overlay
/* USB CDC console and the user LED are configured by the board DTS. */
```

- 在 `zephyr` 文件夹内创建 `prj.conf` 配置文件。

```conf
# GPIO for LED control
CONFIG_GPIO=y
```

- 将下面展示的参考代码复制到 `main.c` 中。

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.
 * Based on Zephyr samples/basic/blinky.
 *
 * The 1200-bps UF2 bootloader trigger is armed automatically by the
 * board support package — no code changes needed in this example.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS 500

#define LED0_NODE DT_ALIAS(led0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
	int ret;
	bool led_state = true;

	if (!gpio_is_ready_dt(&led)) {
		return 0;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle_dt(&led);
		if (ret < 0) {
			return 0;
		}

		led_state = !led_state;
		printk("LED state: %s\n", led_state ? "ON" : "OFF");
		k_msleep(SLEEP_TIME_MS);
	}

	return 0;
}
```

**步骤 2.** 编译并上传程序

- 在底部工具栏中触发一键项目编译。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_3.png" style={{width:800, height:'auto'}}/></div>

或者，你也可以通过命令行界面进行编译。

```bash
pio run -e seeed-xiao-stm32c5
```

- 上传固件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4.png" style={{width:800, height:'auto'}}/></div>

同样，固件上传也可以通过命令行完成。

```bash
pio run -e seeed-xiao-stm32c5 -t upload
```

- 程序运行结果

XIAO STM32C5 的板载 LED 以 500 ms 的间隔闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

同时，串口会输出 LED 的开关状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## 电池使用

XIAO STM32C5 背面预留了一个 **BAT** 电池接口，可使用 3.7 V‑4.2 V 锂离子电池供电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_5.png" style={{width:600, height:'auto'}}/></div>

### 读取电池电压

XIAO STM32C5 集成了电池电压检测电路和电池充电电路。

在检测电路中，**BAT_EN / PA15** 用于使能 TPS22916CNYFPR 芯片，而 **BAT_Reading / PA4** 用于读取电池电压。电路中使用了两个 10 kΩ 分压电阻，因此测得的数值为实际锂离子电池电压的一半。

在电池充电过程中，Charge_LED 会闪烁，充电完成后则熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6.png" style={{width:550, height:'auto'}}/></div>

- 修改相应的应用代码。

<details>

<summary>app.overlay</summary>

```overlay
/ {
	/* Expose the battery ADC input to the application. */
	zephyr,user {
		io-channels = <&adc1 4>;
	};
};

&adc1 {
	/* Add the battery input on PA4 (ADC1_IN4). */
	pinctrl-0 = <&adc1_in0_pa0 &adc1_in1_pa1 &adc1_in2_pa2
		     &adc1_in3_pa3 &adc1_in4_pa4>;

	channel@4 {
		reg = <4>;
		zephyr,gain = "ADC_GAIN_1";
		zephyr,reference = "ADC_REF_INTERNAL";
		zephyr,acquisition-time = <ADC_ACQ_TIME(ADC_ACQ_TIME_TICKS, 289)>;
		zephyr,resolution = <12>;
	};
};
```

</details>

<details>

<summary>prj.conf</summary>

```overlay
# Battery voltage measurement. USB CDC console support is supplied by the board.
CONFIG_ADC=y
CONFIG_GPIO=y
```

</details>

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Read the XIAO STM32C5 battery voltage once per second.
 * printk() output uses USB CDC;
 * BAT_Reading/PA4 is added by app.overlay. BAT_EN/PA15 and USB CDC are
 * supplied by the board devicetree.
 */

#include <zephyr/device.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No battery ADC io-channel specified"
#endif

#define BATTERY_ADC_NODE        DT_PATH(zephyr_user)
#define BAT_EN_NODE             DT_ALIAS(baten)
#define BATTERY_ENABLE_DELAY_MS 5
#define ADC_AVG_SAMPLES         16
#define SAMPLE_PERIOD_MS        1000

static const struct adc_dt_spec battery_adc =
	ADC_DT_SPEC_GET_BY_IDX(BATTERY_ADC_NODE, 0);
static const struct gpio_dt_spec bat_en =
	GPIO_DT_SPEC_GET(BAT_EN_NODE, gpios);

int main(void)
{
	uint16_t raw;
	struct adc_sequence sequence = {
		.buffer = &raw,
		.buffer_size = sizeof(raw),
	};
	int err;

	if (!device_is_ready(battery_adc.dev) || !gpio_is_ready_dt(&bat_en)) {
		printk("Battery ADC hardware is not ready\n");
		return 0;
	}

	err = gpio_pin_configure_dt(&bat_en, GPIO_OUTPUT_ACTIVE);
	if (err) {
		printk("BAT_EN configure failed: %d\n", err);
		return 0;
	}

	k_msleep(BATTERY_ENABLE_DELAY_MS);

	err = adc_channel_setup_dt(&battery_adc);
	if (err) {
		printk("Battery ADC channel setup failed: %d\n", err);
		return 0;
	}

	err = adc_sequence_init_dt(&battery_adc, &sequence);
	if (err) {
		printk("Battery ADC sequence init failed: %d\n", err);
		return 0;
	}

	printk("Battery voltage monitor (USB CDC)\n");

	while (1) {
		uint32_t raw_sum = 0;
		uint16_t raw_avg;
		int32_t adc_mv;

		/* Discard the first conversion after the one-second idle period. */
		err = adc_read(battery_adc.dev, &sequence);
		for (int i = 0; !err && i < ADC_AVG_SAMPLES; i++) {
			err = adc_read(battery_adc.dev, &sequence);
			raw_sum += raw;
		}

		if (!err) {
			raw_avg = raw_sum / ADC_AVG_SAMPLES;
			adc_mv = raw_avg;
			err = adc_raw_to_millivolts_dt(&battery_adc, &adc_mv);
			if (err) {
				printk("Battery voltage conversion failed: %d\n", err);
			} else {
				/* The 1:1 divider halves the battery voltage. */
				printk("Battery: %d mV\n", adc_mv * 2);
			}
		} else {
			printk("Battery ADC read failed: %d\n", err);
		}

		k_msleep(SAMPLE_PERIOD_MS);
	}

	return 0;
}
```

</details>

- 电压读取结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6_1.png" style={{width:550, height:'auto'}}/></div>

## IMU

XIAO STM32C5 搭载了板载 **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) 六轴惯性传感器**，集成了三轴加速度计和三轴陀螺仪。可用于姿态检测、运动识别、振动监测等应用场景。

为减轻环境温度变化对传感器零偏和测量稳定性的影响，开发板实现了主动温度补偿加热电路。布置在 IMU 周围的加热电阻为传感器提供均匀加热，并可通过 PWM 信号调节加热功率。结合 IMU 内部的温度读数，通过软件控制使传感器在相对稳定的温度下工作，从而降低由温度漂移引起的测量漂移，并在长期运行和变温条件下提升数据一致性。

- 参考用法：[XIAO STM32C5 IMU Usage](https://wiki.seeedstudio.com/cn/xiao_stm32c5_application/#imu-usage)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:550, height:'auto'}}/></div>

## CAN FD

XIAO STM32C5 具有两个 CAN FD 控制器。FDCAN1 提供逻辑电平的 TX 和 RX 引脚，需要外接 CAN 收发器才能连接到 CAN 总线。FDCAN2 则连接到板载的 [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) 收发器，并通过 CAN_H 和 CAN_L 焊盘连接到总线。该开发板也可以收发经典 CAN 帧。但仅支持经典 CAN 的节点无法解码 CAN FD 帧，因此在发送 FD 流量前，请确认总线上活动节点均支持 CAN FD。CAN FD 支持最长 64 字节的有效载荷，并且在启用比特率切换时，可以在数据阶段使用更高的比特率。

开发板上带有一个可断开的 120 Ω 终端电阻，默认启用。当 XIAO 位于 CAN 总线的物理端点且该端点没有其他终端电阻时，请保持其启用；当 XIAO 作为中间节点或该端点已安装其他终端电阻时，请将其禁用。同时确保总线另一端也已正确终端。收发器支持待机模式，在不需要 CAN 通信时可降低功耗。

- 参考用法：[XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/cn/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

## 资源

**硬件设计**
- **📄[数据手册]** [STM32C5A3CG](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[数据手册]** [LSM6DS3TR-C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf)
- **📄[数据手册]** [TCAN3403D4BQ1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf)
- **📄[原理图]** [XIAO STM32C5 原理图](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/Seeed-Studio-XIAO-STM32C5-v1.0.pdf)
- **🗃️[PCB 设计文件]** 
  - [ XIAO STM32C5 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
  - [XIAO STM32C5 Eagle 工程](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip)
- **📄[引脚图]** [XIAO STM32C5 引脚说明表](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO-STM32C5-pinout_sheet.xlsx)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
