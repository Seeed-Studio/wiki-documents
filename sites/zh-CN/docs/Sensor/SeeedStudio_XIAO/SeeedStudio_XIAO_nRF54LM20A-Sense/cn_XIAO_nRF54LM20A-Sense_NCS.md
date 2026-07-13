---
title: 使用 NRF Connect SDK 开发 XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 06/15/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_first.png" style={{width:600, height:'auto'}}/></div>

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

nRF Connect SDK（NCS）是 Nordic Semiconductor 官方的软件开发套件，构建在 Zephyr RTOS 实时操作系统之上。它为 nRF 系列芯片提供了完整、原生且高度优化的开发框架。与 PlatformIO 相比，NCS 为开发者提供了对 nRF54 系列全部硬件能力的更全面访问，包括对 Bluetooth Low Energy（BLE）、Thread、Matter 等无线协议栈的原生支持，以及更精细的电源管理和外设控制。Nordic 官方持续维护并更新该 SDK，确保与芯片固件的最佳兼容性，并能更早使用最新特性。

本教程将一步步引导你完成整个流程——从搭建 nRF Connect SDK 开发环境和安装工具链，到创建和配置你的第一个项目，最后将第一个示例程序烧录到 XIAO nRF54LM20A Sense 上并运行起来。

## NCS 入门

### 硬件准备

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

### 安装 nRF Connect for VS Code Extension Pack 扩展

1. 打开 VS Code，搜索并安装 **nRF Connect for VS Code Extension Pack**。该扩展会自动安装完整工具链所需的所有子扩展，包括 nRF Connect、Kconfig、DeviceTree 等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. nRF Connect for VS Code Extension Pack 会自动为你安装以下扩展。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_2.png" style={{width:800, height:'auto'}}/></div>


### 安装 nRF Connect SDK 和工具链

1. 打开 nRF Connect 扩展，选择 **Install SDK**，然后选择 **nRF Connect SDK**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>

2. 在 **Pre-packaged SDKs & Toolchains** 列表中选择 **v3.3.0**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

对于 nRF Connect SDK v3.3.0，预打包安装同时包含 SDK 代码和匹配的工具链，你无需单独安装工具链。

nRF Connect SDK 体积较大，首次安装会花费一定时间。请在安装过程中确保网络连接稳定，以避免安装失败。

:::

### 环境验证

安装完成后，nRF Connect SDK 的集成环境会自动配置好。为确保后续开发顺利，建议在此步骤对环境进行验证。

1. 启动 **nRF Terminal**，这是 nRF Connect SDK 内置的终端。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip
请确保 nRF Connect SDK（NCS）版本和 Toolchain 版本均为 3.3.0。混用不同版本可能导致构建或兼容性问题。
:::

2. 输入命令检查所需工具的版本信息。你可以逐条复制并运行这些命令进行验证。

```bash
# Check west (project manager & build entry) version
west --version
#West version: v1.5.0

# Check CMake (build system generator) version
cmake --version
#cmake version 4.2.1

# Check Ninja (build executor) version
ninja --version
#1.13.2

# Check Python (scripting runtime for west & Zephyr tools) version
python --version
#Python 3.11.7

# Check ARM cross-compiler (Zephyr toolchain for Cortex-M) version
arm-zephyr-eabi-gcc --version
#arm-zephyr-eabi-gcc (Zephyr SDK 0.17.0) 12.2.0
#Copyright (C) 2022 Free Software Foundation, Inc.
#This is free software; see the source for copying conditions.  There is NO
#warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

# Check OpenOCD (on-chip debugger & flasher via CMSIS-DAP) version
openocd --version
#Open On-Chip Debugger 0.12.0+dev-01514-g21fa2de70 (2024-02-07-19:03)
#Licensed under GNU GPL v2
#For bug reports, read
#        http://openocd.org/doc/doxygen/bugs.html
```

- 输出如下所示。如果有任何组件缺失，请重新安装工具链，并在安装过程中确保网络稳定。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/3.png" style={{width:800, height:'auto'}}/></div>



### 添加自定义板卡路径

XIAO nRF54LM20A 系列的板卡定义尚未合入官方 NCS 仓库，因此你需要手动添加板卡路径。

1. 将 **platform-seeedboards** 仓库克隆到你希望的目录。

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_9.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. 在 VS Code 左下角打开 **Settings**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_10.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 搜索 **nRF Connect**，修改 **Board Roots**，并添加路径 `~\your_path\platform-seeedboards\zephyr`。XIAO nRF54LM20A 系列的板卡定义就存放在这里。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_11.png" style={{width:800, height:'auto'}}/></div>

### 创建新应用

本节中，我们将修改一个空白示例项目。

1. 在扩展中选择 **Create a blank application** 来复制模板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. 将项目命名为 `blinky`，并选择一个存储路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 创建完成后，打开复制出的项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_14.png" style={{width:800, height:'auto'}}/></div>
<br/>

4. 移除原有配置。此步骤是为了消除干扰，方便在下一阶段配置与 XIAO nRF54LM20A 相关的设置。（如果你的项目还没有构建记录，可以直接跳过此步骤）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_15.png" style={{width:800, height:'auto'}}/></div>

### 编写 Blinky 程序

由于 XIAO nRF54LM20A 系列使用了自定义 devicetree 和硬件引脚映射，因此需要修改若干文件。需要编辑的文件如下所示。

- `main.c`: 包含应用逻辑的主程序。
- `app.overlay`: 用于硬件外设配置的 devicetree overlay 文件。
- `prj.conf`: 用于启用所需 Zephyr 模块的项目配置文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_16.png" style={{width:800, height:'auto'}}/></div>
<br/>

1. 修改 main.c 中的代码

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

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

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

2. 添加 **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay**

- 在 blinky 工程的根目录下创建一个 **board** 文件夹，与 src 等文件夹处于同一级目录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_17.png" style={{width:600, height:'auto'}}/></div>
<br/>

- 在 board 文件夹中创建 devicetree 文件 **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay**。

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
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

3. 修改 prj.conf 文件以启用相应的配置。

```conf
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

1. 进入扩展的 APPLICATIONS 部分并选择 Add build configuration。确认 SDK 和工具链版本。将 Board Target 设置为 xiao_nrf54lm20a/nrf54lm20a/cpuapp，将基础配置文件设置为 prj.conf。向下滚动页面，然后点击 Generate and Build 以生成相应的配置文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/4_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

如果在此处找不到 `xiao_nrf54lm20a/nrf54lm20a/cpuapp`，请检查在 [Add Custom Board Path](#Add-Custom-Board-Path) 部分中路径是否已正确添加。

:::

2. 如果构建成功，终端中会显示如下信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

### 程序烧录

本节中，我们使用 nRF Connect SDK 中的 west 工具来烧录程序。

1. 使用 USB-C 线连接 XIAO nRF54LM20A Sense。打开 nRF Terminal，并输入 west 命令来烧录程序。

```bash
west flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

如果要烧录的固件是由 **Add build configuration** 中创建的第一个配置文件生成的，当存在 `build` 和 `build_1` 等多个配置文件夹时，需要指定配置路径。

```bash
# examples: west flash configgration build_1
west flash --build-dir build_1
```

:::

### 观察结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## 常见问题

 **Q1：下载 nRF Connect SDK 非常慢或卡住**

如果 SDK 下载非常慢或卡住，可以使用 **aria2** 通过多连接方式下载所需的安装包，然后使用 **nrfutil** 安装 SDK。

**步骤 1. 安装 aria2**

```bash
brew install aria2
```

**步骤 2. 创建下载目录**

```bash
mkdir -p /opt/nordic/ncs/downloads
```

**步骤 3. 下载 Toolchain Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz \
  "https://files.nordicsemi.cn/artifactory/NCS/external/bundles/v3/ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz"
```

**步骤 4. 下载 nRF Connect SDK Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o sdk-nrf-bundle-v3.3.0.tar.gz \
  "https://files.nordicsemi.cn/artifactory/ncs-src-mirror/external/sdk-nrf/v3.3.0/src.tar.gz"
```

**步骤 5. 安装 nRF Connect SDK v3.3.0**

```bash
nrfutil sdk-manager install v3.3.0 \
  --sdk-path /opt/nordic/ncs/v3.3.0 \
  --type nrf
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持方式，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
