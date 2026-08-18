---
title: XIAO nRF54LM20A Sense 入门指南
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 07/28/2026
  author: Zeller
createdAt: '2025-05-13'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

## 介绍

Seeed Studio XIAO nRF54LM20A Sense 是一款紧凑、超低功耗的无线开发板，基于 Nordic Semiconductor 的 nRF54LM20A SoC 构建。它集成了 128 MHz Arm Cortex-M33 处理器、512 KB RAM、2 MB 片上 NVM、多协议 2.4 GHz 无线连接、板载 IMU、数字麦克风、8MB 外部 Flash、IPEX 天线连接器以及 nPM1300 PMIC，可用于先进的电池供电物联网、可穿戴设备、智能感知和边缘 AI 应用。

### 规格参数

<table>
  <thead>
    <tr>
      <th>产品名称</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>处理器</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; RISC-V 128 MHz 协处理器</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB 非易失性存储器（NVM）</td>
    </tr>
    <tr>
      <td><strong>外部 Flash</strong></td>
      <td colspan="2">8MB 板载外部 Flash</td>
    </tr>
    <tr>
      <td><strong>PMIC / 电池</strong></td>
      <td colspan="2">nPM1300 PMIC，用于电源调节和电池充电</td>
    </tr>
    <tr>
      <td><strong>接口</strong></td>
      <td colspan="2">
        28x GPIO 引脚<br/>
        9x 模拟引脚<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>板载资源</strong></td>
      <td>
        1x 用户 LED（R/G/B 三色）<br/>
        1x 充电 LED（电池充电指示灯）<br/>
        1x 复位按钮<br/>
        1x 用户按钮<br/>
        1x IPEX4 连接器（用于外接天线）
      </td>
      <td>
        1x 用户 LED（R/G/B 三色）<br/>
        1x 充电 LED（电池充电指示灯）<br/>
        1x 复位按钮<br/>
        1x 用户按钮<br/>
        1x IPEX4 连接器（用于外接天线）<br/>
        1x 六轴 IMU<br/>
        1x PDM 麦克风
      </td>
    </tr>
    <tr>
      <td><strong>无线连接</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0（包含 Channel Sounding）<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        专有 2.4 GHz 协议
      </td>
    </tr>
    <tr>
      <td><strong>电源输入</strong></td>
      <td colspan="2">
        Type-C：5V<br/>
        电池：3.7V
      </td>
    </tr>
    <tr>
      <td><strong>低功耗模式（3.7V@2A）</strong></td>
      <td>/</td>
      <td>
        轻睡眠：约 9.96µA<br/>
        深度睡眠（系统关闭）：约 4.76µA<br/>
        深度睡眠（系统关闭，GRTC 唤醒）：约 4.92µA<br/>
        船运模式：0.33µA
      </td>
    </tr>
    <tr>
      <td><strong>软件兼容性</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK（基于 Zephyr RTOS）<br/>
        PlatformIO（基于 Zephyr RTOS）
      </td>
    </tr>
    <tr>
      <td><strong>工作温度</strong></td>
      <td colspan="2">-20°C 至 70°C</td>
    </tr>
    <tr>
      <td><strong>尺寸</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
  </tbody>
</table>

### 特性

- **具备高级连接与安全性的强大 SoC**

  Seeed Studio XIAO nRF54LM20A Sense 是一款紧凑、超低功耗的无线开发板，由 Nordic Semiconductor 的 nRF54LM20A SoC 提供动力。它配备 128 MHz Arm Cortex-M33 处理器、512 KB RAM、2 MB 片上 NVM、128 MHz RISC-V 协处理器、多协议 2.4 GHz 无线连接、板载 IMU、数字麦克风、8MB 外部 Flash、IPEX 天线连接器以及 Nordic nPM1300 PMIC，用于高效电源管理。凭借对 Bluetooth LE、Bluetooth Channel Sounding、Bluetooth Mesh、Thread、Zigbee、Matter 以及最高 4 Mbps 的专有 2.4 GHz 协议的支持，该开发板专为下一代互联产品而设计。板载的运动与音频传感器使其非常适合可穿戴设备、智能感知、TinyML、手势识别、语音触发设备以及电池供电的物联网应用。

- **超低功耗效率**

  基于 Nordic nRF54LM20A 和 nPM1300 PMIC，XIAO nRF54LM20A Sense 在电池供电（BAT）下实现了仅 4.76 µA 的实测深度睡眠电流。结合 nPM1300 PMIC 及其 0.33 µA 船运模式 BAT 电流，在有源无线工作状态下，以 3.7 V 模拟电池输入、发射功率设置为 +8 dBm 时，其平均电流仅为 3.87 mA，非常适合长寿命电池供电的传感应用、可穿戴设备以及始终在线的物联网设备。

- **精简的开发体验**

  对 Nordic nRF Connect SDK 和 PlatformIO（Zephyr）的完整支持，可实现高效的嵌入式开发流程。

## 硬件概览

<Tabs>
<TabItem value="XIAO nRF54LM20A" label="XIAO nRF54LM20A" default>

### XIAO nRF54LM20A 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_nRF54LM20A_f.png" style={{width:800, height:'auto'}}/></div>

### XIAO nRF54LM20A 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_nRF54LM20A_back.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="XIAO nRF54LM20A Sense" label="XIAO nRF54LM20A Sense">

### XIAO nRF54LM20A Sense 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png" style={{width:800, height:'auto'}}/></div>

### XIAO nRF54LM20A Sense 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **引脚图**

| XIAO 引脚      | 功能           | 芯片引脚                          | 描述                                                                         |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **电源引脚**   |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V 电源输入/输出                                                             |
| GND            | GND            | -                                 | 地                                                                          |
| 3V3            | 3V3-OUT        | -                                 | 3.3V 电源输出                                                                |
| BAT+           | BAT+           | -                                 | 电池输入（通过 I²C 由 nPM1300 监测）                                         |
| BAT-           | BAT-           | -                                 | 电池负极端子                                                                 |
| SHPHLD         | SHPHLD         | -                                 | PMIC 船运/休眠模式控制（超低功耗出厂状态）                                  |
| **系统与控制引脚** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | 板级复位                                                                     |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | 串行线时钟（用于 nRF54 和 SAMD11）                                           |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | 串行线数据（用于 nRF54 和 SAMD11）                                           |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 协处理器复位                                                          |
| **用户与 LED 引脚** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | 用户按钮输入                                                                 |
| -              | RGB-B          | P1.23                             | 板载 RGB LED 蓝色通道                                                        |
| -              | RGB-G          | P1.24                             | 板载 RGB LED 绿色通道                                                        |
| -              | RGB-R          | P1.22                             | 板载 RGB LED 红色通道                                                        |
| **模拟输入（ADC）引脚** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | 模拟输入 0 / GPIO                                                            |
| A1             | AIN1           | P1.31                             | 模拟输入 1 / GPIO                                                            |
| A2             | AIN2           | P1.30                             | 模拟输入 2 / GPIO                                                            |
| A3             | AIN3           | P1.29                             | 模拟输入 3 / GPIO                                                            |
| A7             | AIN7           | P1.03                             | 模拟输入 7 / GPIO                                                            |
| **I2C 引脚**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C 数据线（IMU 与外设）                                                     |
| SCL            | I2C_SCL        | P1.07                             | I2C 时钟线（IMU 与外设）                                                     |
| -              | BAT_SDA        | P1.18                             | 电池监测 I2C SDA（nPM1300）                                                  |
| -              | BAT_SCL        | P1.17                             | 电池监测 I2C SCL（nPM1300）                                                  |
| **UART 引脚**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART 发送                                                                    |
| RX             | UART_RX        | P1.09                             | UART 接收                                                                    |
| **SPI 引脚**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI 主出从入                                                                 |
| MISO           | SPI_MISO       | P1.05                             | SPI 主入从出                                                                 |
| SCK            | SPI_SCK        | P1.04                             | SPI 串行时钟                                                                 |
| **板载外设引脚** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | 麦克风数据线                                                                 |
| -              | MIC_CLK        | P1.13                             | 麦克风时钟线                                                                 |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA（板载 IMU）                                                      |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL（板载 IMU）                                                      |
| -              | IMU_CS         | P3.12                             | IMU 片选                                                                     |
| -              | IMU_INT1       | P0.06                             | IMU 中断 1                                                                   |
| -              | NFC            | P1.02 / P1.01                     | NFC 天线引脚                                                                 |
| -              | GRTC           | P0.04 / P0.05                     | 通用 RTC 引脚                                                                |

## 使用 PlatformIO 入门

在本节中，我们将通过 RGB LED 的多色闪烁效果，带你快速上手 XIAO nRF54LM20A。
请先完成以下软硬件准备，为后续在 XIAO 上的开发做好环境搭建。

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

### 下载 VS Code

根据你所使用的系统下载 [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### 安装 PlatformIO 扩展

打开 VSCode，点击 Extensions，然后搜索 PlatformIO 并选择安装。安装完成后，重启 VSCode。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 安装 platform-seeedboards 平台包

Seeed Studio XIAO 系列开发板使用自定义的 PlatformIO 平台，因此你需要手动安装对应的平台包。

- 全新安装请运行以下命令：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 如果你之前已经在 PlatformIO 中使用过 Seeed Studio XIAO 系列开发板，请运行下面的命令进行更新：


```bash
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/gett_start_1.png" style={{width:800, height:'auto'}}/></div>
<br/>


:::tip

如果你想使用已有的 PlatformIO 项目，请将 **platformio.ini** 的内容替换为如下所示：

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

:::

### 创建新项目

1. 打开 PlatformIO 扩展并选择 **Create New Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. 设置项目名称，选择开发板、框架以及文件存储路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 创建完成后，会弹出打开工作区的提示。点击 OK。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. 进入项目文件夹。如果你没有指定自定义路径，文件将存储在默认目录中。

- Windows 默认路径：

```bash
<path>: C:\Users\your_name\Documents\PlatformIO\Projects
```

- Mac / Linux 默认路径：

```bash
<path>: ~/Documents/PlatformIO/Projects
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_5.png" style={{width:800, height:'auto'}}/></div>

### 添加 Blink 程序

本教程基于 Zephyr RTOS 开发。项目由三个核心文件组成：

- `main.c`：包含应用逻辑的主程序。
- `app.overlay`：用于硬件外设配置的 Devicetree 覆盖文件。
- `prj.conf`：用于启用所需 Zephyr 模块的项目配置文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_6.png" style={{width:800, height:'auto'}}/></div>

1. 添加 **main.c** 程序

<details>

<summary>main.c</summary>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led0)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led1)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}
```

</details>

2. 添加 app.overlay 文件

在新创建的空白示例中不存在 Devicetree 覆盖文件，你需要在 zephyr 目录下添加该文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_7.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Red LED)   -> pwm_led0
 *   - Channel 1: P1.23 (Blue LED)  -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
			label = "Red LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
			label = "Blue LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</details>

3. 修改 `prj.conf` 并启用相应的配置。

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

### 编译并上传程序

下面介绍两种编译和上传的方法。

1. 通过按钮进行编译和上传

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. 通过命令行进行编译和上传

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_9.png" style={{width:800, height:'auto'}}/></div>

### 观察运行效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:800, height:'auto'}}/></div>

## 蓝牙天线

本开发板使用外置蓝牙天线。为了确保更好的蓝牙信号质量并提升你的蓝牙使用体验，建议安装蓝牙天线。
连接方式如下图所示：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## 电池使用

XIAO nRF54LM20A 支持使用 3.7V 锂电池作为电源输入。你可以参考下图进行接线。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
焊接时请务必注意不要将正负极短路，以免烧毁电池和设备。
如果电池本身带电，切勿直接焊接到电路板上，否则可能烧毁电路板。在电路上电的情况下发生短路风险极大，建议使用适配器。

:::

**电池使用说明：**

1. 请使用符合规格要求的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到你的计算机设备，请放心，XIAO 内置电路保护芯片，使用安全。

### 充电指示灯工作效果
本示例通过读取 nPM1300 的 VBUS、VBAT 和 IBAT 状态来控制板载 LEDDRV1：在充电过程中 LED 点亮，当电池充满、电池未连接或 USB 线被拔出时 LED 熄灭。同时，程序会通过串口输出电池电压、充电电流和充电状态，方便监控充电过程。


<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/blob/main/examples/zephyr-npm1300-register-read" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>



### 电池电压检测

XIAO nRF54LM20A 集成了电池电压检测功能，核心是利用 nPM1300-CAA 负载开关高效管理电池电源测量。本指南将重点分析电池检测的软件实现**（尤其是 main.c 代码）**，并指导你如何在 PlatformIO 环境中轻松部署和使用该功能，从而避免直接使用 Zephyr NCS SDK 带来的复杂性。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>电池检测原理图</em></p>
</div>

nPM1300-CAA 芯片的作用：

nPM1300-CAA 是一款高度集成的电源管理 IC（PMIC），用于替代 TPS22916 的简单负载开关功能。它不仅负责低功耗监测场景下的电池电压切换控制，还集成了充电、稳压以及精确的电量计量（通过电压、电流、温度），以最大化 nRF54LM20A 的电池续航。



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
以下示例同时适用于 PlatformIO 和 nRF Connect SDK。在 PlatformIO 中可以直接使用，而在 SDK 中则需要手动添加文件。请参考此[链接](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#battery-powered-board)
:::

## 外设概览

本板载的外设电路包括一个 IMU 和一个麦克风。你可以在下图中看到它们的位置：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

XIAO nRF54LM20A Sense 搭载了一颗 LSM6DS3TR-C IMU，集成 3 轴加速度计和 3 轴陀螺仪。

- [XIAO nRF54LM20A IMU 使用方法](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

XIAO nRF54LM20A Sense 配备了一颗 MSM261DGT006 数字麦克风，用于音频采集。
- [XIAO nRF54LM20A MIC 使用方法](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_onboard/#mic)

### 常见问题

**Q1：修改配置文件后遇到构建错误，该怎么办？**

如果你之前已经构建过项目，之后又修改了配置文件（例如 `prj.conf`、`app.overlay` 或 `CMakeLists.txt`），建议在重新构建前先清理构建缓存。这样可以避免由于缓存文件过期或损坏而导致的编译错误。

运行以下命令：

```shell
pio run -t clean
```

---

**Q2：安装完成后为什么会出现 `zsh: command not found: openocd`？（macOS）**

通常是因为 OpenOCD 可执行文件所在目录尚未添加到系统的 `PATH` 中。你可以使用以下命令将其永久添加到 `~/.zshrc` 文件中。

> **注意：** 此解决方案仅适用于 **macOS**。

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

如果成功显示版本号，则说明配置已完成。

---

**Q3：多次安装 Seeed Studio XIAO 平台后，PlatformIO 项目下拉列表失效怎么办？**



如果你多次安装了不同版本的 Seeed Studio XIAO PlatformIO 平台，重复或过期的平台包可能会导致版本冲突，从而使 PlatformIO 项目无法正确加载。

建议删除所有旧的 Seeed 平台包，让 PlatformIO 自动下载最新的官方版本。

运行以下命令：

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

清理完成后，重新打开 PlatformIO 并重新构建你的项目。

## 资源

### Seeed Studio XIAO nRF54LM20A

**硬件设计**
- **📄[Datasheet]** [Nordic nRF54LM20A 数据手册](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20A 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad 工程](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[XIAO nRF54LM20A 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**硬件设计**
- **📄[Datasheet]** [Nordic nRF54LM20A 数据手册](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20A Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad 工程](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]**
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[XIAO nRF54LM20A Sense 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
