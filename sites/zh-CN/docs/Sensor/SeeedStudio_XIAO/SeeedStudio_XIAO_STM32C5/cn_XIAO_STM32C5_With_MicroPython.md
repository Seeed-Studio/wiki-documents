---
title: XIAO STM32C5 与 MicroPython
description: 学习如何在 Seeed Studio XIAO STM32C5 上安装 MicroPython，并使用 GPIO、软件生成的舵机控制信号和 CAN 来构建实用应用。
keywords:
  - xiao
  - stm32
  - stm32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_micropython
sku: 100036669
last_update:
  date: 09/02/2026
  author: Zeller
createdAt: '2026-09-01'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/cn/xiao_stm32c5_with_micropython/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_micropython.png" style={{width:600, height:'auto'}}/></div>

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

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个 Python 解释器，支持为性能关键代码生成本地代码。它提供了经过优化、适用于微控制器和资源受限系统的 Python 3.6+ 核心特性子集。它与 CPython 不同，你可以在 [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) 页面了解更多差异。

## 硬件准备

在开始之前，你需要准备一块 XIAO STM32C5 开发板。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO STM32C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 部署 MicroPython 固件

通过进入 bootloader 模式，并将 `.uf2` 固件文件复制到开发板的 USB 大容量存储驱动器上，来更新 XIAO STM32C5 上的 MicroPython 固件。

1. 下载并解压 XIAO STM32C5 MicroPython 固件压缩包：

- **📄[Firmware]** [XIAO STM32C5 MicroPython 固件](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao-stm32c5-micropython-firmware.zip)

2. 通过 USB 将 XIAO STM32C5 连接到电脑。快速双击 **Reset** 按钮进入 bootloader 模式。此时会出现名为 **XIAOC5BOOT** 的 USB 驱动器。将解压后的 **micropython-xiao-stm32c5.uf2** 复制到该驱动器中。固件安装完成后，开发板会自动重启。

:::tip
如果没有出现 **XIAOC5BOOT**，请断开并重新连接 USB 线，然后再次双击 **Reset**。确保 USB 线支持数据传输。
:::

## 安装 [Thonny IDE](https://thonny.org/)

选择适合的版本进行安装。这里我是在 Windows 系统上安装，因此选择了 Windows 版本。

根据所需的 Python 版本，按照提示进行安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
然后按照默认步骤完成配置即可。


### 解释器配置

- 打开 Thonny IDE，为 XIAO STM32C5 配置解释器和串口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_1.png" style={{width:800, height:'auto'}}/></div>
- 固件安装完成并且 Thonny 已连接到 XIAO STM32C5 后，MicroPython 固件信息会显示在 Shell 面板中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_2.png" style={{width:800, height:'auto'}}/></div>
## 引脚映射

:::tip

- 完整引脚说明请参阅 [XIAO STM32C5 引脚列表](https://wiki.seeedstudio.com/cn/xiao_stm32c5_getting_started/#硬件概述)。

:::

| 引脚 / 信号 | GPIO | 功能 | MicroPython 用法 |
|---|---|---|---|
| D0 / A0 | PA0 | ADC1_IN0 / GPIO | `XiaoADC(0)` / `XiaoPin(0)` |
| D1 / A1 | PA1 | ADC1_IN1 / GPIO | `XiaoADC(1)` / `XiaoPin(1)` |
| D2 / A2 | PA2 | ADC1_IN2 / GPIO | `XiaoADC(2)` / `XiaoPin(2)` |
| D3 / A3 | PA3 | ADC1_IN3 / GPIO | `XiaoADC(3)` / `XiaoPin(3)` |
| D4 | PB7 | I2C1 SDA / GPIO | 头部 I2C 数据 |
| D5 | PB6 | I2C1 SCL / GPIO | 头部 I2C 时钟 |
| D6 | PA9 | USART1 TX / GPIO | UART 发送 |
| D7 | PA10 | USART1 RX / GPIO | UART 接收 |
| D8 | PE2 | SPI3 SCK / GPIO | 硬件 SPI 时钟 |
| D9 | PB0 | SPI3 MISO / GPIO | 硬件 SPI 数据输入 |
| D10 | PB15 | SPI3 MOSI / GPIO | 硬件 SPI 数据输出 |
| D11 | PB8 | GPIO / FDCAN1 RX 功能 | 当前固件未启用 FDCAN1 |
| D12 | PB9 | GPIO / FDCAN1 TX 功能 | 当前固件未启用 FDCAN1 |
| D13 | PB5 | FDCAN2 RX / GPIO | `XiaoCAN("can0", ...)` |
| D14 | PB13 | FDCAN2 TX / GPIO | `XiaoCAN("can0", ...)` |
| D15 / CAN_STB | PB14 | CAN 收发器待机控制 | 低：正常；高：待机 |
| CAN_H | — | CAN FD 差分总线高电平 | 板载 CAN 收发器输出；不是 GPIO |
| CAN_L | — | CAN FD 差分总线低电平 | 板载 CAN 收发器输出；不是 GPIO |
| BAT_EN | PA15 | 电池测量使能 | `XiaoPin("bat_en", Pin.OUT)` |
| BAT_READ | PA4 | ADC1_IN4 | `XiaoADC("vbat")`；电池电压约为 ADC 电压 × 2 |
| IMU_SDA | PB4 | I2C2 SDA | 板载 LSM6DS3TR-C 数据 |
| IMU_SCL | PB3 | I2C2 SCL | 板载 LSM6DS3TR-C 时钟 |
| IMU_INT | PC13 | IMU INT1 | `XiaoPin("imu_int", Pin.IN)` |
| IMU_HEATER_PWM | PA8 | TIM1_CH1 PWM | `XiaoPWM(0)` |
| USER_LED | PB12 | GPIO 输出 | `XiaoPin("led", Pin.OUT)`；低电平点亮 |


## LED 闪烁

数字引脚主要通过输出高、低逻辑电平，实现对外部传感器和执行器的通断控制。结合 Grove Base for XIAO 扩展板和标准 Grove 外设模块，本节将详细说明 XIAO STM32C5 上数字引脚的底层驱动逻辑和实际调用方式。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - LED Pack</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-led-pack-all-2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件程序

本示例使用 XIAO STM32C5 的 D1 引脚作为数字输出，使外接 LED 闪烁。

1. 在 Thonny 中选择 **File > New** 创建文件，然后输入以下代码：

```py
# Copyright (c) 2026 Seeed Technology Co., Ltd.
# SPDX-License-Identifier: Apache-2.0
#
# Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.

import time
from machine import Pin
from boards.xiao import XiaoPin

SLEEP_TIME_MS = 1000
D1_PIN = 1

# D1 corresponds to PA1.
d1_gpio = XiaoPin(D1_PIN, Pin.OUT)

# Match GPIO_OUTPUT_ACTIVE in the Zephyr example.
led_state = True
d1_gpio.value(1)

try:
    while True:
        led_state = not led_state
        d1_gpio.value(1 if led_state else 0)

        print("LED state:", "ON" if led_state else "OFF")
        time.sleep_ms(SLEEP_TIME_MS)

except KeyboardInterrupt:
    # Turn the output off when the script is stopped.
    d1_gpio.value(0)
    print("Blinky stopped")
```

2. 选择 **Run > Run current script**，或按下 **F5**。

### 结果

脚本启动后，连接到 D1 的外部 LED 将以一秒为周期闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

## 驱动舵机

PWM 是一种基于数字输出 GPIO 实现的定时波形输出功能。它以固定频率快速切换引脚电平，并在单个周期内动态调整高电平占空比，从而向外设输出等效的模拟信号。在实际工程应用中，PWM 被广泛用于舵机的精确角度控制以及 LED 的平滑亮度调节。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件程序

本示例使用 XIAO STM32C5 上的 D0 作为舵机控制信号引脚。定时由软件生成，而不是由硬件 PWM 外设生成。

1. 在 Thonny 中，选择 **File > New** 创建一个文件，然后输入以下代码：

```py
import time
from machine import Pin
from boards.xiao import XiaoPin

SERVO_PIN = 0                  # D0 / PA0
SERVO_PERIOD_US = 20_000       # 50 Hz
SERVO_MIN_US = 1_000           # Approximately 0 degrees
SERVO_MAX_US = 2_000           # Approximately 180 degrees

servo = XiaoPin(SERVO_PIN, Pin.OUT)
servo.value(0)


def output_servo_frame(angle):
    """Output one 20 ms servo-control frame."""
    angle = max(0, min(180, angle))

    pulse_us = SERVO_MIN_US + (
        angle * (SERVO_MAX_US - SERVO_MIN_US) // 180
    )

    frame_start = time.ticks_us()

    servo.value(1)
    time.sleep_us(pulse_us)
    servo.value(0)

    elapsed = time.ticks_diff(time.ticks_us(), frame_start)
    remaining = SERVO_PERIOD_US - elapsed

    if remaining > 0:
        time.sleep_us(remaining)


def hold_angle(angle, duration_ms):
    """Keep the servo at an angle for the specified duration."""
    frames = max(1, duration_ms // 20)

    for _ in range(frames):
        output_servo_frame(angle)


try:
    print("Software servo control started on D0")

    hold_angle(90, 1000)

    while True:
        for angle in range(0, 181):
            output_servo_frame(angle)

        for angle in range(180, -1, -1):
            output_servo_frame(angle)

except KeyboardInterrupt:
    print("Servo control stopped")

finally:
    servo.value(0)
```

2. 选择 **Run > Run current script**，或按下 **F5**。

### 结果

脚本启动后，舵机会反复从约 0° 扫到 180°，再回到 0°。循环每 20 ms 控制帧将指令推进 1°，对应标称指令扫描速率为 50°/s（约 0.87 rad/s），不包括执行开销和舵机自身的机械极限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

## 通过 CAN 驱动 DM-J4310-2EC 电机

XIAO STM32C5 提供两个 CAN FD 接口。其中一个引出逻辑电平的发送和接收信号，用于连接外部 CAN 收发器。另一个连接到板载 TCAN3403-Q1 CAN FD 收发器，可通过 CAN_H 和 CAN_L 直接连接到 CAN 总线。CAN FD 在保持与经典 CAN 兼容的同时，支持更大的有效载荷和更高的数据相位比特率，非常适合汽车电子、工业控制、机器人以及分布式传感器网络等应用。

板载 CAN FD 电路还包括一个可断开的 120 Ω 终端电阻。当开发板位于总线一端时，请启用该电阻；当开发板位于总线中间，或在 XIAO 端已经安装了另一个 120 Ω 电阻时，请断开该电阻。收发器还支持待机控制，在未使用 CAN 通信时可降低功耗。

- 参考用法：[XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/cn/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

### 硬件准备

- XIAO STM32C5 × 1
- 电脑和 USB Type-C 数据线
- 适用于电机的稳压 24 V 直流电源
- DM-J4310-2EC 电机 × 1
- XT30 2+2 供电分离板

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>XT30 2+2 Power Separation Board</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
         <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-100094243--seeed-gripper-01.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
            <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100045091-xt30-2_2-power-separationboard.jpg"
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
         <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html"
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
   <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html"
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

### 软件程序

:::caution
电机需要 24 V 电源。请使用符合规范、带限流功能且电流额定值合适的电源。在更改任何接线前关闭电源，在初始测试期间保持电机空载，并将 XIAO 的地线连接到电机电源的负极端子。不正确的电源或接线可能会损坏设备并造成安全隐患。
:::

1. 使用 Damiao 上位机配置软件将电机的 **CAN ID** 设置为 `0x001`，**Master ID** 设置为 `0x011`。详情请参阅 [Getting Started with the Damiao 43 Series Motors](https://wiki.seeedstudio.com/cn/damiao_series/)。

- 将电机连接到 XIAO STM32C5 背面的 CAN_H 和 CAN_L 焊盘。板载收发器使用 D13/PB5（RX）、D14/PB13（TX）和 D15/PB14（待机）；将 D15 置低以进入正常工作模式。

2. 在 Thonny 中，选择 **File > New** 创建一个文件，然后将以下程序保存为 `driver_dm4310.py`：

<details>

<summary>driver_dm4310.py</summary>

```py
"""Drive a Damiao DM-J4310-2EC V1.1 from XIAO STM32C5.
This motor example uses Classical CAN at 1 Mbit/s (fd=False), although the board supports CAN FD.
Protocol: classic CAN 2.0B at 1 Mbit/s, Damiao speed mode.

Wiring:
    XIAO CAN_H -> motor CAN_H
    XIAO CAN_L -> motor CAN_L
    XIAO GND   -> motor GND / 24 V negative
    Motor VCC  -> external 24 V positive

Use 120-ohm termination at both ends of the CAN bus. Never connect the
MCU-side CAN TX/RX pins directly to the motor.
"""

import struct
import time
from machine import Pin
from boards.xiao import XiaoCAN, XiaoPin


# Motor and CAN configuration.
DM_MOTOR_ID = 0x001
DM_MASTER_ID = 0x011
DM_CAN_BITRATE = 1_000_000

DM_CONTROL_ID = 0x200 + DM_MOTOR_ID
DM_PARAM_ID = 0x7FF

DM_CMD_ENABLE = 0xFC
DM_CMD_DISABLE = 0xFD
DM_CMD_CLEAR_ERROR = 0xFB

DM_PARAM_WRITE = 0x55
DM_REG_CTRL_MODE = 0x0A
DM_CTRL_MODE_SPEED = 3

DM_VMAX_RAD_S = 30.0

CONTROL_PERIOD_MS = 20
GEAR_PERIOD_MS = 5_000
FEEDBACK_PRINT_MS = 500
START_DELAY_MS = 3_000

# Same speed sequence as the Zephyr example.
SPEED_SEQUENCE = (0.0, 3.0, 6.0, 10.0, 6.0, 3.0)


def send_control(can, command):
    payload = bytes((0xFF, 0xFF, 0xFF, 0xFF,
                     0xFF, 0xFF, 0xFF, command))
    can.send(DM_CONTROL_ID, payload)


def write_u32_parameter(can, register, value):
    payload = struct.pack(
        "<HBBI",
        DM_MOTOR_ID,
        DM_PARAM_WRITE,
        register,
        value,
    )
    can.send(DM_PARAM_ID, payload)


def send_speed(can, speed_rad_s):
    can.send(DM_CONTROL_ID, struct.pack("<f", float(speed_rad_s)))


def decode_feedback(frame):
    """Return decoded Damiao feedback, or None for an unrelated frame."""
    if frame is None or len(frame) < 2:
        return None

    can_id = frame[0]
    data = frame[1]

    if data is None or len(data) < 8:
        return None

    motor_id = data[0] & 0x0F
    if motor_id != (DM_MOTOR_ID & 0x0F):
        return None

    fault = data[0] >> 4
    position_raw = (data[1] << 8) | data[2]
    velocity_raw = (data[3] << 4) | (data[4] >> 4)
    torque_raw = ((data[4] & 0x0F) << 8) | data[5]

    velocity_rad_s = (
        (velocity_raw / 4095.0) * 2.0 - 1.0
    ) * DM_VMAX_RAD_S

    return {
        "can_id": can_id,
        "motor_id": motor_id,
        "fault": fault,
        "position_raw": position_raw,
        "velocity_raw": velocity_raw,
        "velocity_rad_s": velocity_rad_s,
        "torque_raw": torque_raw,
        "mos_temperature": data[6],
        "rotor_temperature": data[7],
    }


def print_feedback(feedback):
    print(
        "FB id=0x{:03X} motor={} err=0x{:X} pos=0x{:04X} "
        "vel=0x{:03X} {:.2f}rad/s tq=0x{:03X} mos={}C rotor={}C".format(
            feedback["can_id"],
            feedback["motor_id"],
            feedback["fault"],
            feedback["position_raw"],
            feedback["velocity_raw"],
            feedback["velocity_rad_s"],
            feedback["torque_raw"],
            feedback["mos_temperature"],
            feedback["rotor_temperature"],
        )
    )


def drain_feedback(can, duration_ms, print_frames=False):
    deadline = time.ticks_add(time.ticks_ms(), duration_ms)

    while time.ticks_diff(deadline, time.ticks_ms()) > 0:
        frame = can.recv(0)
        if frame is None:
            time.sleep_ms(5)
            continue

        feedback = decode_feedback(frame)
        if print_frames and feedback is not None:
            print_feedback(feedback)


def initialise_motor(can):
    # Clear error -> select speed mode -> enable.
    send_control(can, DM_CMD_CLEAR_ERROR)
    drain_feedback(can, 100)

    write_u32_parameter(can, DM_REG_CTRL_MODE, DM_CTRL_MODE_SPEED)
    drain_feedback(can, 100)

    send_control(can, DM_CMD_ENABLE)
    drain_feedback(can, 100)


def stop_motor(can):
    """Best-effort controlled stop followed by motor disable."""
    if can is None:
        return

    try:
        # Repeat zero speed briefly so the motor receives the stop request.
        for _ in range(5):
            send_speed(can, 0.0)
            time.sleep_ms(CONTROL_PERIOD_MS)
        send_control(can, DM_CMD_DISABLE)
        time.sleep_ms(50)
    except Exception as exc:
        print("Motor stop warning:", exc)


def main():
    can = None
    can_stb = None

    try:
        print("XIAO STM32C5 DM-J4310-2EC speed-mode driver")
        print(
            "motor_id=0x{:03X} master_id=0x{:03X} bitrate={}Mbps".format(
                DM_MOTOR_ID,
                DM_MASTER_ID,
                DM_CAN_BITRATE // 1_000_000,
            )
        )

        # PB14 / D15 is active-high standby. Drive it low for normal mode.
        can_stb = XiaoPin(15, Pin.OUT)
        can_stb.value(0)
        time.sleep_ms(10)

        can = XiaoCAN(
            "can0",
            bitrate=DM_CAN_BITRATE,
            data_bitrate=2_000_000,
            fd=False,
            loopback=False,
        )

        print("Check wiring and keep the motor unloaded.")
        print("Starting in {} seconds...".format(START_DELAY_MS // 1000))
        time.sleep_ms(START_DELAY_MS)

        initialise_motor(can)
        print("Motor enabled in speed mode")

        sequence_index = 0
        speed = SPEED_SEQUENCE[sequence_index]
        print("Target speed: {:.2f} rad/s".format(speed))

        next_gear = time.ticks_add(time.ticks_ms(), GEAR_PERIOD_MS)
        last_feedback_print = time.ticks_ms()

        while True:
            now = time.ticks_ms()

            if time.ticks_diff(now, next_gear) >= 0:
                sequence_index = (sequence_index + 1) % len(SPEED_SEQUENCE)
                speed = SPEED_SEQUENCE[sequence_index]
                print("Target speed: {:.2f} rad/s".format(speed))
                next_gear = time.ticks_add(next_gear, GEAR_PERIOD_MS)

            send_speed(can, speed)

            # Drain every queued frame so the MicroPython CAN queue cannot fill.
            while True:
                frame = can.recv(0)
                if frame is None:
                    break

                feedback = decode_feedback(frame)
                if feedback is None:
                    continue

                if time.ticks_diff(now, last_feedback_print) >= FEEDBACK_PRINT_MS:
                    print_feedback(feedback)
                    last_feedback_print = now

            time.sleep_ms(CONTROL_PERIOD_MS)

    except KeyboardInterrupt:
        print("User requested stop")
    except Exception as exc:
        print("Motor driver error:", exc)
        raise
    finally:
        stop_motor(can)

        if can is not None:
            try:
                can.deinit()
            except Exception:
                pass

        if can_stb is not None:
            try:
                can_stb.value(1)
            except Exception:
                pass

        print("Motor disabled; CAN transceiver in standby")


if __name__ == "__main__":
    main()

```

</details>

3. 选择 **Run > Run current script**，或按下 **F5**。

### 结果

电机使能后，DM-J4310 会在 `0 → 3 → 6 → 10 → 6 → 3 rad/s` 的目标转速之间循环，每五秒更换一次目标。Shell 会显示当前选择的目标转速以及解码后的电机反馈数据。该示例不会控制板载 LED。

:::tip

将 XIAO STM32C5 上的 CAN_H 连接到电机的 CAN_H，CAN_L 连接到 CAN_L，同时连接地线。反接差分线或未连接公共地线都可能导致通信失败。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>
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
