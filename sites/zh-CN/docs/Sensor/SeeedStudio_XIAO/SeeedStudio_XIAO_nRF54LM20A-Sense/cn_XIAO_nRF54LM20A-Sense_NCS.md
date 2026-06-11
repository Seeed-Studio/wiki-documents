---
title: 使用 NRF Connect SDK 搭配 Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# 在 Seeed Studio XIAO nRF54LM20A Sense 上使用 nRFConnect SDK

nRF Connect SDK（NCS）是 Nordic Semiconductor 官方的软件开发套件，构建在 Zephyr RTOS 实时操作系统之上。它为 nRF 系列芯片提供了完整、原生且高度优化的开发框架。与 PlatformIO 相比，NCS 为开发者提供了对 nRF54 系列全部硬件能力的更充分访问，包括对 Bluetooth Low Energy（BLE）、Thread、Matter 等无线协议栈的原生支持，以及更精细的电源管理和外设控制。Nordic 官方持续维护并更新该 SDK，确保与芯片固件的最佳兼容性，并能更早使用最新特性。

本教程将一步步引导你完成整个流程——从搭建 nRF Connect SDK 开发环境和安装工具链，到创建和配置你的第一个项目，最后将第一个示例程序烧录到 XIAO nRF54LM20A Sense 上并实际运行。

## 硬件准备

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

## 在 VSCode 上使用 nRF Connect SDK

<details>

<summary>提前安装 nRF Connect SDK 相关知识</summary>

本文档详细说明了如何在 Windows 11 电脑上安装 nRF Connect SDK 开发环境。以下是需要安装的工具概览

- 安装 VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect 插件

***如果你已经在电脑上预先安装了这些工具，可以通过下面的命令检查工具的版本号***

</details>

<Steppers>

### 安装扩展

打开 VS Code，在插件中心搜索 **nRF Connect for VS Code Extension Pack**。该插件包会自动安装 nRF Connect 所需的其他 VS Code 插件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
nRF Connect for VS Code 扩展使开发者能够利用流行的 Visual Studio Code 集成开发环境（VS Code IDE），来开发、构建、调试和部署基于 Nordic nRF Connect SDK（Software Development Kit）的嵌入式应用程序。该扩展包含实用的开发工具，例如编译器接口、链接器、完整的构建系统、支持 RTOS 的调试器、与 nRF Connect SDK 的无缝对接、设备树可视化编辑器以及集成串口终端。

VS Code 的 nRF Connect 扩展包包括以下组件：

- nRF Connect for VS Code：主扩展，包含构建系统与 nRF Connect SDK 之间的接口，以及用于管理 nRF Connect SDK 版本和工具链的接口。
- nRF DeviceTree：提供设备树语言支持和设备树可视化编辑器。
- nRF Kconfig：提供 Kconfig 语言支持。
- nRF Terminal：串口和 RTT 终端。
- Microsoft C/C++：为 C/C++ 添加语言支持，包括 IntelliSense 功能。
- CMake：CMake 语言支持。
- GNU Linker Mapping Files：链接器映射文件支持。
我们可以通过该扩展下载任意所需版本的 nRF Connect SDK 及其工具链。完整的 nRF Connect for VS Code 文档可在 https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html 查看。

### 安装工具链

工具链是一组协同工作的工具，用于构建 nRF Connect SDK 应用程序，包括汇编器、编译器、链接器和 CMake 组件。
第一次打开 nRF Connect for VS Code 时，系统会提示你安装工具链。如果扩展未检测到电脑上已安装的任何工具链，通常就会出现此提示。
点击 Install Toolchain，会列出可在电脑上下载并安装的工具链版本列表。选择与你计划使用的 nRF Connect SDK 版本相匹配的工具链版本。我们始终建议使用最新的 nRF Connect SDK 标记版本。

默认情况下，nRF Connect for VS Code 只显示工具链的 Released 选项卡（即稳定版本）。如果你在评估新特性，并希望使用 Preview 选项卡或其他类型的选项卡（例如 Customer Sampling -cs），请点击如下所示的 “Show all toolchain versions”：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_7.png" style={{width:800, height:'auto'}}/></div>

:::note
**此处的 ToolChain 版本需为 3.3.0 或更高**
:::

### 安装 nRF Connect SDK

在 VS Code 的 nRF Connect 扩展中，点击 Manage SDK。在 Manage SDK 菜单中，我们可以安装或卸载 nRF Connect SDK 版本。由于这是我们第一次使用该扩展，界面上只会显示两个选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

点击 Install SDK 会列出所有可下载并在本地安装的 nRF Connect SDK 版本。选择项目开发所需的 nRF Connect SDK 版本。

:::note
**此处的 nRF Connect SDK 版本需为 3.2.4 或更高**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_8_1.png" style={{width:800, height:'auto'}}/></div>


:::tip
如果你没有看到这两个选项中的任意一个，请确保已安装最新版本的 nRF Connect for VS Code 扩展包。
需要特别注意的是，nRF Connect SDK 与 IDE 无关，这意味着你可以选择使用任意 IDE，甚至不使用 IDE。nRF Connect SDK 可以通过 https://www.nordicsemi.com/Products/Development-tools/nRF-Util（nrfutil）命令行界面（CLI）获取，该 CLI 会下载并安装 nRF Connect。不过，我们强烈建议在 VS Code 中使用我们的 nRF Connect for VS Code 扩展，因为它不仅集成了方便的图形用户界面（GUI）和高效的命令行界面（CLI），还包含大量能极大简化固件开发的功能。将其他 IDE 配置为与 nRF Connect SDK 协同工作需要额外的手动步骤，超出了本课程的范围。
:::

### 创建用户程序

在本练习中，我们将基于 blinky 示例编写一个简单应用，用于控制开发板上的 LED 闪烁。这同样适用于所有受支持的 Nordic Semiconductor 开发板（nRF54、nRF53、nRF52、nRF70 或 nRF91 系列）。目标是确保构建和烧录示例所需的所有工具都已正确配置。重点是学习如何使用 “Copy Example” 模板创建应用、构建应用并将其烧录到 Nordic 芯片开发板上！

- 在 VS Code 中，点击 nRF Connect 扩展图标。在 Welcome 视图中，点击 Create New Application。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- 在搜索栏中输入 blinky，并选择第二个 Blinky 示例（路径 zephyr/samples/basic/blinky），如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

Blinky 示例会让开发板上的 LED1 持续闪烁。然而，由于我们的 nRF54LM20A 配备了 RGB 灯，你可以通过以下步骤修改一些文件，让 RGB 灯呈现出多种灯光效果。

我们的第一个应用将基于 Blinky 示例。Blinky 示例源自 nRF Connect SDK 中的 Zephyr 模板模块，因此你会在示例路径中看到 zephyr 名称：zephyr\samples\basic\blinky。

### 添加 XIAO nRF54LM20A 开发板

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

首先，**从 GitHub 链接克隆仓库**到你偏好的本地文件夹。克隆完成后，进入 `platform-seeedboards/zephyr/` 目录。**记住这个 `zephyr` 文件夹路径**；

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

要在 VS Code 中为 nRF Connect 配置你的开发板，可以按照以下步骤进行：

- 打开 VS Code 并进入 Settings。

- 在搜索框中输入 nRF Connect。

- 找到 Board Roots 设置项并点击 Edit in settings.json。

- 将下载的 XIAO nRF54LM20A 开发板文件中的 `zephyr` 路径添加到 boardRoots 数组中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/12ncs_2.PNG" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
请注意，添加路径的终点应为 `boards` 文件夹的路径，而不是 `platform-seeedboards` 文件夹的路径。
:::

- 在应用视图中，点击应用名称下方的 Add Build Configuration。

- 我们可以在 Board target 中选择 XIAO nRF54LM20A 的型号，在 Base configuration files 中选择默认的 prj.config 文件，最后点击 `Generate and Build` 来构建文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/11ncs_1.PNG" style={{width:800, height:'auto'}}/></div>

### 下载烧录插件

<Tabs>
<TabItem  value="window" label="Window" default>

**附加插件：**

在 Windows 上，我们将使用 Chocolatey 包管理器来安装 OpenOCD。

**1. 打开 PowerShell（以管理员身份运行）：**

- 在 Windows 搜索栏中输入 **PowerShell**。
- 右键点击 **Windows PowerShell** 并选择 **Run as administrator**。

**2. 检查 PowerShell 执行策略：**

- 输入 `Get-ExecutionPolicy` 并按回车。
- 输入 `Get-ExecutionPolicy -List` 并按回车。

**3. 安装 Chocolatey：**

- 粘贴并运行以下命令：

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

该命令会在当前 PowerShell 会话中绕过执行策略并安装 Chocolatey。安装完成后，关闭并重新打开 PowerShell 窗口（仍需以管理员身份运行）。

**4. 安装 OpenOCD：**

- 在新的 PowerShell 窗口中（以管理员身份），输入：

```cpp
choco install openocd
```

**5. 验证 OpenOCD 安装：**

- 输入 `Get-Command openocd` 并按回车。

- 如果安装成功，该命令会显示 openocd.exe 的路径。

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**附加插件：**

在 macOS 上，我们将使用 Homebrew 包管理器来安装所需工具。

**1. 安装 Homebrew（如果尚未安装）：**

- 打开 Terminal.app。

- 运行以下命令：

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 按照屏幕提示操作；你可能需要输入 macOS 用户密码。安装完成后，根据终端提示运行命令，将 Homebrew 添加到你的 PATH 环境变量中`(例如，eval "$(/opt/homebrew/bin/brew shellenv)")`。然后关闭并重新打开终端。

**2. 安装 Ccache：**

在终端中输入：

```cpp
brew install ccache
```

**3. 安装 OpenOCD：**

在终端中输入：

```cpp
brew install openocd
```

**4. 验证 OpenOCD 安装：：**

- 输入 `which openocd` 并按回车。

- 如果安装成功，该命令会显示 `openocd` 可执行文件的路径。

</TabItem>

</Tabs>

### 烧录程序

- 打开 **src/main.c** 和 **prj.conf** 文件，并将原有代码替换为以下代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_1.png" style={{width:800, height:'auto'}}/></div>

<details>
<summary>src/main.c</summary>
<div>

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

</div>
</details>

<details>
<summary>prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details>

<details>
<summary>board/xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>
1. 如果你需要修改或重新定义设备树节点内容，请在 Zephyr 目录下新建一个 **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** 文件，以显式绑定设备节点。
2. 如果你已经修改了设备树文件，请在重新构建前清理原有文件，以防止 CMake 无法识别你的更改。
<div>

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

</div>
</details>

- 然后打开 **Open terminal** 并输入 `west flash` 命令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
 如果出现 west flash 错误，说明你需要再次添加构建配置，但在此之前需要先移除错误的构建。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
:::

</Steppers>

### 代码说明

- **src/main.c**
主应用入口，实现演示逻辑，包括 LED 颜色配置、呼吸效果、闪烁节奏控制、基于按键的模式切换以及其他硬件交互行为。

- **zephyr/prj.conf**
Zephyr RTOS 配置文件，用于启用/禁用系统组件和外设驱动，包括日志、UART、PWM、I2C、SPI、低功耗管理等功能。

### 观察效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>


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
