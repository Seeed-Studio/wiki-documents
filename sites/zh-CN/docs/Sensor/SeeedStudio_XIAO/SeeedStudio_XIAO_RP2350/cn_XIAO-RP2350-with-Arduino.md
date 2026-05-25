---
description: 在你的 XIAO RP2350 开发板上使用 Arduino
title: Seeed Studio XIAO RP2350(Arduino) 入门指南
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
createdAt: '2024-10-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/xiao_rp2350_arduino/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 与 Arduino

Seeed Studio XIAO RP2350 开发板现已支持通过 Arduino 进行编程，这要归功于 [arduino-pico core](https://github.com/earlephilhower/arduino-pico)。本指南将帮助你在 RP2350 开发板上完成 Arduino 的设置并开始使用。

## 特性

- **强大的 MCU 开发板：** 搭载 Raspberry Pi RP2350 芯片，配备对称双核 Arm Cortex-M33 @ 150MHz，并带有 FPU。
- **增强的安全特性：** 内置安全启动和加密引导程序，确保应用安全。
- **软件支持：** 兼容 C/C++ 和 MicroPython，便于项目开发和原型制作。
- **丰富的板载资源：** 集成 RGB LED、2MB Flash、520kB SRAM，以及 19 个多功能 GPIO（模拟、数字、I²C、UART、SPI、PWM）。
- **扩展 8 个全新 IO：** 相比之前的 XIAO MCU，在背面新增 8 个 IO 引脚，支持更复杂的应用。
- **高效电源设计：** 睡眠模式下超低功耗仅 50μA，可实现电池供电。通过内部 IO 直接测量电池电压，增强电池管理系统（BMS）。
- **紧凑拇指大小设计：** 尺寸为 21 x 17.8mm，采用 Seeed Studio 经典的 XIAO 外形规格，非常适合对空间敏感的应用。
- **便于量产：** 采用表面贴装器件（SMD）设计，所有元件位于正面，两侧带有邮票孔，便于高效量产。

## 规格参数

<table>
  <tr>
    <th>产品</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>处理器</th>
    <td>Raspberry Pi RP2040<br/>双核 Cortex-M0+ @ 133MHz</td>
    <td>Raspberry Pi RP2350<br/>双核 Cortex-M33 @ 150MHz，FPU</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>264kB SRAM</td>
    <td>520kB SRAM</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td>2MB 板载</td>
    <td>2MB Flash</td>
  </tr>
  <tr>
    <th>LED</th>
    <td>1x 用户 LED<br/>1x 电源 LED<br/>1x RGB LED</td>
    <td>1x 用户 LED<br/>1x 电源 LED<br/>1x RGB LED</td>
  </tr>
  <tr>
    <th>接口</th>
    <td>11 个引脚（全部支持 PWM）：<br/>4x 模拟<br/>11x 数字<br/>1x I²C<br/>1x UART<br/>1x SPI</td>
    <td>19 个引脚（全部支持 PWM）：<br/>3x 模拟<br/>19x 数字<br/>2x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>按键</th>
    <td>1x RESET 按键<br/>1x BOOT 按键</td>
    <td>1x RESET 按键<br/>1x BOOT 按键</td>
  </tr>
  <tr>
    <th>安全性</th>
    <td>-</td>
    <td>OTP，Secure Boot，Arm TrustZone</td>
  </tr>
  <tr>
    <th>软件兼容性</th>
    <td>支持 Micropython / Arduino / CircuitPython</td>
    <td>支持 Micropython / Arduino / C,C++</td>
  </tr>
  <tr>
    <th>工作温度</th>
    <td>-20°C-70°C</td>
    <td>-20°C-70°C</td>
  </tr>
  <tr>
    <th>尺寸</th>
    <td>21x17.8 mm</td>
    <td>21x17.8 mm</td>
  </tr>
</table>

## 硬件总览

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 正面引脚分布</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 背面引脚分布</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 元件分布</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

需要更多引脚分布的详细信息？请前往下方的 [资源与资料](#资源--资料)。


## **引脚映射**
| XIAO 引脚               | 功能       | 芯片引脚     | 复用功能              | 描述                                  |
| :---------------------: | :-------: | :----------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | 电源输入/输出                         |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | 电源输出                             |
| D0                      | 模拟       | GPIO26       |                    | GPIO，ADC                            |
| D1                      | 模拟       | GPIO27       |                    | GPIO，ADC                            |
| D2                      | 模拟       | GPIO28       |                    | GPIO，ADC                            |
| D3                      | SPI0_CSn   | GPIO5        |                    | GPIO，SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO，I2C 数据                       |
| D5                      | SCL1       | GPIO7        |                    | GPIO，I2C 时钟                       |
| D6                      | TX0        | GPIO0        |                    | GPIO，UART 发送                      |
| D7                      | RX0        | GPIO1        |                    | GPIO，UART 接收                      |
| D8                      | SPI0_SCK   | GPIO2        |                    | GPIO，SPI 时钟                       |
| D9                      | SPI0_MISO  | GPIO4        |                    | GPIO，SPI 数据                       |
| D10                     | SPI0_MOSI  | GPIO3        |                    | GPIO，SPI 数据                       |
| D11                     | RX1        | GPIO21       |                    | GPIO，UART 接收                      |
| D12                     | TX1        | GPIO20       |                    | GPIO，UART 发送                      |
| D13                     | SCL0       | GPIO17       |                    | GPIO，I2C 时钟                       |
| D14                     | SDA0       | GPIO16       |                    | GPIO，I2C 数据                       |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO，SPI 数据                       |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO，SPI 数据                       |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO，SPI 时钟                       |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | 读取电池电压值                       |
| ADC_BAT_EN              |            | GPIO19       |                    | 电池电压检测使能                     | 
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | 进入 Boot 模式                       |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_红色                         |
| RGB LED                 |            | GPIO22       |                    | RGB LED                              |
| USER_LED                |            | GPIO25       |                    | 用户指示灯_黄色                      |
## 前置准备

在开始之前，请确保你已经具备：

- 一块 RP2350 开发板
- Arduino IDE
- 一根 USB 数据线

## 软件环境配置

### 1. 安装 Arduino IDE

从官方网站下载并安装最新版本的 Arduino IDE：[Arduino Software](https://www.arduino.cc/en/software)。

### 2. 添加 RP2350 开发板支持

1. 打开 Arduino IDE，依次进入 **File** > **Preferences**。
2. 在 **Additional Boards Manager URLs** 字段中，添加如下 URL：

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. 点击 **OK** 保存设置。
4. 进入 **Tools** > **Board** > **Boards Manager**。
5. 在 Boards Manager 中搜索 **pico**，然后点击 **Install**。
6. 安装完成后，进入 **Tools** > **Board**，并选择下图所示的开发板作为你的目标板。

:::note
请确保安装 4.2.0 或更高版本，以获得对 XIAO RP2350 开发板的完整支持。
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. 上传示例程序

在上传示例程序之前，请先将 XIAO RP2350 置于 BOOT 模式。可以使用以下任一方法：

<Tabs>
<TabItem value="method1" label="方法 1：连接电脑前">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>按住 Boot -> 插入数据线 -> 松开 Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="方法 2：已连接电脑时">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>按住 Boot -> 点击 Reset -> 松开 Boot</em></div></div>

</TabItem>
</Tabs>

1. 打开 Arduino IDE 并创建一个新示例程序。
2. 编写你的代码。例如，可以使用 `Blink` 示例代码。
3. 进入 **Tools** > **Port**，选择 RP2350 所连接的端口。

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## 低功耗性能验证

XIAO RP2350 的电源设计在低功耗场景下表现出色，可广泛应用于各种低功耗应用。

### 电池连接

XIAO RP2350 可以由 3.7V 锂电池供电。你可以参考下图进行接线。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_1.png" alt="pir" width="800" height="auto"/></div>

:::caution
焊接时请注意不要将正负极短路，以免烧坏电池和设备。
:::

### 烧录固件

在 XIAO RP2350 的电池采样电路中，采用了基于 SX1801CCR 的电压采样方案。由两个 470 kΩ 电阻构成分压电路，分压比为 2。程序使用 3.3 V 作为参考电压，可通过电压还原公式计算出实际电池电压。

以下示例使用看门狗重启的方式来模拟深度睡眠，因为 Arduino IDE 无法轻松集成实现真正深度睡眠所需的 pico-extras 库。

<details>
<summary>程序</summary>

```cpp
#include <Arduino.h>
#include "hardware/powman.h"
#include "hardware/adc.h"
#include "hardware/watchdog.h"

// ── Pin Definitions ──────────────────────────────────────────────
#define BAT_ADC_EN    19
#define BAT_ADC_READ  29
#define SLEEP_SEC     30

#define VOLTAGE_DIVIDER_RATIO  2.0f
#define VBAT_LOW_THRESHOLD     3.5f
#define SCRATCH_MAGIC          0xDEADBEEF

// ── Global voltage storage (can be output via other methods, e.g., LED alert) ──────────
static float g_vbat   = 0.0f;
static bool  g_lowBat = false;

// ── Disable ADC Peripheral ──────────────────────────────────────
static void disableADC() {
    adc_run(false);
    hw_clear_bits(&adc_hw->cs, ADC_CS_EN_BITS);
}

// ── Read Battery Voltage ─────────────────────────────────────────
static float readVbat() {
    digitalWrite(BAT_ADC_EN, HIGH);
    delayMicroseconds(500);

    adc_init();
    adc_gpio_init(BAT_ADC_READ);
    adc_select_input(3);
    analogReadResolution(12);
    (void)analogRead(BAT_ADC_READ);   // Discard the first reading

    int32_t sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += analogRead(BAT_ADC_READ);
        delayMicroseconds(200);
    }

    digitalWrite(BAT_ADC_EN, LOW);    // ★ Disable voltage divider immediately after sampling
    disableADC();

    return ((float)sum / 5.0f / 4095.0f * 3.3f) * VOLTAGE_DIVIDER_RATIO;
}

// ── Shut Down All Unnecessary Peripherals ─────────────────────────
static void shutdownPeripherals() {
    // ADC
    digitalWrite(BAT_ADC_EN, LOW);
    disableADC();

    // Pull down all unused pins to eliminate floating leakage
    const uint8_t unused[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18};
    for (uint8_t pin : unused) {
        pinMode(pin, INPUT_PULLDOWN);
    }

    // Reduce frequency to 18MHz to significantly reduce dynamic power consumption
    set_sys_clock_khz(18000, false);
}

// ── Low-Power Wait (Watchdog Reboot to Simulate Sleep) ───────────
static void sleepWithReboot(uint32_t seconds) {
    // Start POWMAN Timer (LPOSC 1kHz)
    if (!powman_timer_is_running()) powman_timer_start();
    powman_timer_set_1khz_tick_source_lposc();

    // Store wake-up target time in scratch registers
    uint64_t wake_ms = powman_timer_get_ms() + (uint64_t)seconds * 1000ULL;
    watchdog_hw->scratch[4] = SCRATCH_MAGIC;
    watchdog_hw->scratch[5] = (uint32_t)(wake_ms & 0xFFFFFFFF);
    watchdog_hw->scratch[6] = (uint32_t)(wake_ms >> 32);

    shutdownPeripherals();

    // Watchdog timeout reboot (max 8.3s), CPU waits in low-frequency WFE
    rp2040.wdt_begin(8300);
    while (true) {
        __wfe();
    }
}

// ─────────────────────────────────────────────────────────────────
void setup() {
    // First action on power-up: pull ADC_EN low
    pinMode(BAT_ADC_EN, OUTPUT);
    digitalWrite(BAT_ADC_EN, LOW);
    pinMode(BAT_ADC_READ, INPUT);

    // ── Check if waking up from sleep reboot ───────────────────────
    if (watchdog_hw->scratch[4] == SCRATCH_MAGIC) {
        if (!powman_timer_is_running()) powman_timer_start();
        powman_timer_set_1khz_tick_source_lposc();

        uint64_t wake_ms = (uint64_t)watchdog_hw->scratch[5]
                         | ((uint64_t)watchdog_hw->scratch[6] << 32);
        uint64_t now_ms  = powman_timer_get_ms();

        if (now_ms < wake_ms) {
            // Not time to wake up yet, continue waiting
            sleepWithReboot((uint32_t)((wake_ms - now_ms) / 1000 + 1));
            // Will not return
        }

        // Time to wake up, clear flag
        watchdog_hw->scratch[4] = 0;
    }

    // ── Restore normal frequency, execute application logic ───────
    set_sys_clock_khz(125000, true);

    // Sample voltage
    g_vbat   = readVbat();
    g_lowBat = (g_vbat < VBAT_LOW_THRESHOLD);

    // TODO: Process sampling results here
    // Example: Turn on LED alert for low battery
    // if (g_lowBat) { digitalWrite(LED_PIN, HIGH); delay(100); ... }

    // Enter sleep mode 2 seconds after power-up
    delay(2000);
}

void loop() {
    sleepWithReboot(SLEEP_SEC);
    // Will not return; restarts from setup() after wake-up
}
```

</details>
<br/>
然后你就可以上传程序了。

或者，你也可以使用我们预先编写好的固件进行验证和性能测试。

下载 [XIAO RP2350 低功耗测试固件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )，并将其拖入文件系统。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_2.png" alt="pir" width="800" height="auto"/></div>

### 测试结果

经过仪器测试和验证，XIAO RP2350 进入低功耗模式时的平均电流为 **53 μA**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_4.jpg" alt="pir" width="800" height="auto"/></div>
<br/>

:::tip

1. 不同仪器测得的低功耗模式平均电流可能存在差异，请以实际测试结果为准。
2. 本测试结果是在烧录低功耗测试固件后得到的。
3. 进行功耗测试时，测试接线应连接到背面的 BAT 接口。
4. 由于 Arduino IDE 难以集成 pico-extras 库（其中包含深度睡眠所需的 pico/sleep.h），建议使用 Pico SDK 或 PlatformIO + arduino-pico 框架进行超低功耗开发。

:::

## 资源与资料

**硬件设计**
- **📄[Datasheet]** [Raspberry Pi RP2350 数据手册](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Schematic]** [XIAO RP2350 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[PCB Design Files]** [XIAO RP2350 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2350 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**机械设计**
- **📄[2D Dimensions]** [DXF 格式的 XIAO RP2350 尺寸图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[3D Model]** [XIAO RP2350 三维模型](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**软件与工具**
- **📄[Test Firmware]** [XIAO RP2350 低功耗测试固件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**其他**
- **📄[Document]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - 一份关于 Raspberry Pi Pico 开发板搭建环境和编程的综合指南，非常适合想要学习 MicroPython 或 C/C++ 的初学者。
- **📄[Document]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - 记录 MicroPython 安装教程和 API 的手册
- **📄[Document]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - 记录 Pico C/C++ SDK API 的手册
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Arduino-Pico Core Documentation]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## 技术支持与交流

感谢你使用 Seeed 的产品！我们提供多种渠道用于技术支持和社区交流：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
