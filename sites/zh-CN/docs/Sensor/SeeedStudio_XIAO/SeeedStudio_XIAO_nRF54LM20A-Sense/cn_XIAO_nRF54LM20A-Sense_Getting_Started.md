---
title: Seeed Studio XIAO nRF54LM20A Sense 入门指南
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

## 介绍

Seeed Studio XIAO nRF54LM20A Sense 是一款基于 Nordic Semiconductor nRF54LM20A SoC 的紧凑型、超低功耗无线开发板。它集成了 128 MHz Arm Cortex-M33 处理器、512 KB RAM、2 MB 片上 NVM、多协议 2.4 GHz 无线连接、板载 IMU、数字麦克风、8MB 外部 Flash、IPEX 天线连接器以及 nPM1300 PMIC，可用于先进的电池供电物联网、可穿戴设备、智能感知和边缘 AI 应用。

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
      <td colspan="2">2 MB 非易失性存储器 (NVM)</td>
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
      <td><strong>板载器件</strong></td>
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
      <td><strong>低功耗模式 (3.7V@2A)</strong></td>
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

  Seeed Studio XIAO nRF54LM20A Sense 是一款由 Nordic Semiconductor nRF54LM20A SoC 驱动的紧凑型、超低功耗无线开发板。它配备 128 MHz Arm Cortex-M33 处理器、512 KB RAM、2 MB 片上 NVM、128 MHz RISC-V 协处理器、多协议 2.4 GHz 无线连接、板载 IMU、数字麦克风、8MB 外部 Flash、IPEX 天线连接器以及 Nordic nPM1300 PMIC，用于高效电源管理。凭借对 Bluetooth LE、Bluetooth Channel Sounding、Bluetooth Mesh、Thread、Zigbee、Matter 以及最高 4 Mbps 的专有 2.4 GHz 协议的支持，该开发板专为下一代互联产品而设计。板载的运动与音频传感器使其非常适合可穿戴设备、智能感知、TinyML、手势识别、语音触发设备以及电池供电的物联网应用。

- **超低功耗效率**

  基于 Nordic nRF54LM20A 和 nPM1300 PMIC，XIAO nRF54LM20A Sense 在电池供电（BAT）下实现了仅 4.76 µA 的实测深度睡眠电流。结合 nPM1300 PMIC 及其 0.33 µA 的船运模式 BAT 电流，在有源无线工作状态下，在 3.7 V 模拟电池输入、发射功率设置为 +8 dBm 的条件下，其平均电流仅为 3.87 mA，使该开发板非常适合长寿命电池供电的传感应用、可穿戴设备以及始终在线的物联网设备。

- **精简的开发体验**

  对 Nordic nRF Connect SDK 和 PlatformIO（Zephyr）的全面支持，使高效的嵌入式开发流程成为可能。（注意：当前不支持 Arduino IDE）

## 硬件概览

<div className="table-center">
  <TabItem value="54lm20a" label="XIAO nRF54LM20A" default>
    <table align="center">
      <tbody>
        <tr>
          <th>XIAO nRF54LM20A 引脚列表</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</div>

## **引脚映射**

| XIAO 引脚      | 功能           | 芯片引脚                          | 描述                                                                         |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **电源引脚**   |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V 电源输入/输出                                                            |
| GND            | GND            | -                                 | 地                                                                          |
| 3V3            | 3V3-OUT        | -                                 | 3.3V 电源输出                                                               |
| BAT+           | BAT+           | -                                 | 电池输入（通过 I²C 由 nPM1300 监测）                                        |
| BAT-           | BAT-           | -                                 | 电池负极端子                                                                |
| SHPHLD         | SHPHLD         | -                                 | PMIC 船运/休眠模式控制（超低功耗出厂状态）                                 |
| **系统与控制引脚** |             |                                   |                                                                             |
| RESET          | RESET          | -                                 | 板级复位                                                                    |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | 串行线时钟（用于 nRF54 和 SAMD11）                                         |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | 串行线数据（用于 nRF54 和 SAMD11）                                         |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 协处理器复位                                                         |
| **用户与 LED 引脚** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | 用户按钮输入                                                                |
| -              | RGB-B          | P1.23                             | 板载 RGB LED 蓝色通道                                                       |
| -              | RGB-G          | P1.24                             | 板载 RGB LED 绿色通道                                                       |
| -              | RGB-R          | P1.22                             | 板载 RGB LED 红色通道                                                       |
| **模拟输入 (ADC) 引脚** |       |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | 模拟输入 0 / GPIO                                                           |
| A1             | AIN1           | P1.31                             | 模拟输入 1 / GPIO                                                           |
| A2             | AIN2           | P1.30                             | 模拟输入 2 / GPIO                                                           |
| A3             | AIN3           | P1.29                             | 模拟输入 3 / GPIO                                                           |
| A7             | AIN7           | P1.03                             | 模拟输入 7 / GPIO                                                           |
| **I2C 引脚**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C 数据线（IMU 与外设）                                                    |
| SCL            | I2C_SCL        | P1.07                             | I2C 时钟线（IMU 与外设）                                                    |
| -              | BAT_SDA        | P1.18                             | 电池监测 I2C SDA（nPM1300）                                                 |
| -              | BAT_SCL        | P1.17                             | 电池监测 I2C SCL（nPM1300）                                                 |
| **UART 引脚**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART 发送                                                                   |
| RX             | UART_RX        | P1.09                             | UART 接收                                                                   |
| **SPI 引脚**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI 主出从入                                                                |
| MISO           | SPI_MISO       | P1.05                             | SPI 主入从出                                                                |
| SCK            | SPI_SCK        | P1.04                             | SPI 串行时钟                                                                |
| **板载外设引脚** |               |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | 麦克风数据线                                                                |
| -              | MIC_CLK        | P1.13                             | 麦克风时钟线                                                                |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA（板载 IMU）                                                     |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL（板载 IMU）                                                     |
| -              | IMU_CS         | P3.12                             | IMU 片选                                                                    |
| -              | IMU_INT1       | P0.06                             | IMU 中断 1                                                                  |
| -              | NFC            | P1.02 / P1.01                     | NFC 天线引脚                                                                |
| -              | GRTC           | P0.04 / P0.05                     | 通用 RTC 引脚                                                               |
## 入门指南

在本节中，我们将通过 RGB LED 的多彩闪烁效果，引导你快速上手 XIAO nRF54LM20A。
请完成下面的软硬件准备，以便为后续开发配置好你的 XIAO。

### 硬件

你需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF54LM20A](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-p-5884.html)
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

## 软件

<!-- <Tabs>
  <TabItem value="platformio" label="PlatformIO" default> -->

### 为 XIAO nRF54LM20A 配置 PlatformIO

按照以下精简步骤配置你的开发环境，并在 XIAO nRF54LM20A 上部署你的第一个应用。

#### 为 VS Code 安装 PlatformIO IDE 扩展

如果你尚未安装，请在 Visual Studio Code 中直接安装 PlatformIO IDE 扩展。这个强大的扩展可以将 VS Code 打造成一个完整的嵌入式开发环境。

- 打开 VS Code。
- 进入扩展视图（Ctrl+Shift+X 或 Cmd+Shift+X）。
- 搜索 [**PlatformIO IDE**](https://platformio.org/platformio-ide) 并点击 Install。

#### 创建一个新的 PlatformIO 工程

在这里你可以选择任意一个开发版本来创建工程文件，这里以 XIAO ESP32 C3 为例。

<div className="table-center">
<table align="center">
  <tr>
      <th>操作一</th>
        <th>操作二</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
</table>
</div>

#### 为 XIAO nRF54LM20A 的 Zephyr 支持配置 platformio.ini

工程创建完成后，在工程目录根目录中找到 platformio.ini 文件（在左侧 VS Code 资源管理器中可见）。该文件是 PlatformIO 工程配置的核心。

<table align="center">
  <tbody>
    <tr>
      <th>操作三</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/1.1.png"style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>


你需要将 platformio.ini 文件的全部内容替换为以下配置：

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

然后重新保存 platformio.ini 文件（Ctrl+S 或 Cmd+S），并等待其完全加载完成。

加载完成后，你可以关闭该工程。此步骤是为了下载必要的库文件。

:::tip
如果你之前安装过其他 XIAO 库，我们建议使用以下 PlatformIO 命令将该库更新到最新版本。
这是官方推荐的方法。只需在工程根目录中直接运行该命令（无需进入 platform 文件夹）：

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>

:::

#### 编译并上传你的第一个 Blink 示例

现在，让我们通过经典的 **Blink** 示例来测试你的环境配置。该代码会控制 XIAO nRF54LM20A Sense 上的板载 LED 进行闪烁。

下面是下载库的链接。你可以选择将该工程直接下载到本地，然后在 VS Code 中直接打开。或者，你也可以按照以下步骤操作：替换并添加一些示例代码。该过程包括：

:::tip

Seeed Studio XIAO 系列开发板的定义存储在 **platform-seeedboards** 仓库中。如果你使用的是 XIAO nRF54LM20A Sense，请确保将该仓库更新到最新版本。

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="hhttps://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::

步骤 1：创建一个新工程
<table align="center">
  <tbody>
    <tr>
      <th>操作四</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>

步骤 2：打开工程
你可以先编译一下，查看你拉取的工程是否能正确运行。如果可以，则说明工程拉取成功。
如下图所示：
<table align="center">
  <tbody>
    <tr>
      <th>操作五</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>  
      </td>
    </tr>
  </tbody>
</table>

步骤 3：替换工程代码
- 打开 **src/main.c** 和 **Zephyr/prj.conf** 文件，并将原有代码替换为以下代码。
<table align="center">
  <tbody>
    <tr>
      <th>操作六</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/14io.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>


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
<summary>Zephyr/prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

</div>
</details>

<details>
1. 如果你需要修改或重新定义设备树节点内容，请在 Zephyr 目录中创建一个新的 **app.overlay** 文件，以显式绑定设备节点。
2. 如果你已经修改了设备树文件，请在重新构建前清理原有文件，以防止 CMake 无法识别你的更改。

<summary>Zephyr/app.overlay</summary>
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

现在，通过 USB 将你的 XIAO nRF54LM20A 连接到电脑。保存、编译并下载后，RGB 灯将开始闪烁。在 VS Code 中：

<!-- You can use the command line or the buttons.

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_3.png"
    style={{width: 800, height: 'auto'}}
  />
</div> -->

<table align="center">
  <tbody>
    <tr>
      <th>操作七</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_4.png"
            style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>

终端中的输出应表明编译和烧录过程已成功完成。

### 代码说明

- **src/main.c**
主应用程序入口，实现演示逻辑，包括 LED 颜色配置、呼吸效果、闪烁节奏控制、基于按键的模式切换以及其他硬件交互行为。

- **zephyr/prj.conf**
Zephyr RTOS 配置文件，用于启用/禁用系统组件和外设驱动，包括日志、UART、PWM、I2C、SPI、低功耗管理等功能。

#### 观察结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## 蓝牙天线

该开发板使用外置蓝牙天线。为确保更好的蓝牙信号质量并提升你的蓝牙使用体验，建议安装蓝牙天线。
连接方式如下图所示：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## 电池使用

XIAO nRF54LM20A 支持使用 3.7V 锂电池作为电源输入。你可以参考下图了解接线方式。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
焊接时请注意不要将正负极短路，以免烧毁电池和设备。
如果电池本身带电，切勿直接焊接到电路板上，否则可能烧毁电路板。在电路带电的情况下发生短路风险极大，建议使用转接头。

:::

**电池使用说明：**

1. 请使用符合规格要求的合格电池。
2. 使用电池时，XIAO 仍可通过数据线连接到你的电脑设备，请放心，XIAO 内置电路保护芯片，使用安全。



### 电池电压检测

XIAO nRF54LM20A 集成了电池电压检测功能，核心是利用 nPM1300-CAA 负载开关高效管理电池电量测量。本指南将重点分析电池检测的软实现 **（尤其是 main.c 代码）**，并指导你如何在 PlatformIO 环境中轻松部署和使用该功能，从而避免 Zephyr NCS SDK 的复杂性。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/9_battery.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>电池检测原理图</em></p>
</div>

nPM1300-CAA 芯片的作用：

nPM1300-CAA 是一款高度集成的电源管理 IC（PMIC），替代了 TPS22916 的简单负载开关功能。它不仅控制用于低功耗监测的电池电压切换，还集成了充电、稳压以及精确的电量计量（通过电压、电流、温度），以最大化 nRF54LM20A 的电池寿命。



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
下面的示例同时适用于 PlatformIO 和 nRF Connect SDK。在 PlatformIO 中可以直接使用，而在 SDK 中则需要手动添加文件。请参考此[链接](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#battery-powered-board)
:::

## 外设概览

该开发板上的外设电路包括 IMU 和麦克风。你可以在下图中看到它们的位置：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

XIAO nRF54LM20A 搭载 LSM6DS3TR-C IMU，支持 6 轴加速度计、陀螺仪和磁力计。

- [XIAO nRF54LM20A IMU 使用方法](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

XIAO nRF54LM20A 配备 MSM261DGT006 麦克风，支持 16 位音频采集。
- [XIAO nRF54LM20A MIC 使用方法](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_onboard/#mic)

## 常见问题

### 问题 1：在 macOS 上卡在 **Reading CMake configuration** 步骤

在 macOS 上使用 PlatformIO 编译和上传程序时，即使排除了网络问题，流程仍可能卡在 **Reading CMake configuration** 步骤。这通常是由于 macOS 兼容性问题导致基于 Python 的 `arm-none-eabi-gdb-py` 工具无法正常运行。

**推荐解决方法：** 使用符号链接替换损坏的 `gdb-py` 文件。

1. 进入工具目录：
   `/Users/mengdu/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. 通过重命名将原文件 `arm-none-eabi-gdb-py` 备份为 `arm-none-eabi-gdb-py.broken.bak`。
3. 创建一个名为 `arm-none-eabi-gdb-py` 的新符号链接，指向 `arm-none-eabi-gdb`。

### 问题 2：修改配置文件后构建报错

如果你之前构建过完整的 Zephyr 工程，之后又修改了配置文件，建议在重新构建和上传前清理构建缓存。这样可以避免由于缓存文件过期或损坏而导致的编译错误。

```cpp
pio run -t clean  // Clean command
```

### 问题 3：修改配置文件后构建报错

有些 USB 线只能供电，不能传输数据。如果你没有 USB 线，或者不确定你的 USB 线是否可以传输数据，可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

## 资源

### Seeed Studio XIAO nRF54LM20A

**硬件设计**
- **📄[Datasheet]** [Nordic nRF54LM20A 数据手册](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20A 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad 工程](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad SCH 原理图库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[XIAO nRF54LM20A 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**硬件设计**
- **📄[数据手册]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[原理图]** [XIAO nRF54LM20A Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB 设计文件]** [XIAO nRF54LM20A KiCad 项目](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB 设计库]**
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]**[XIAO nRF54LM20A Sense 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
