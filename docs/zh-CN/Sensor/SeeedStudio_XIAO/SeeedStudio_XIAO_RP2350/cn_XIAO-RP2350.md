---
title: Seeed Studio XIAO RP2350 入门指南（MicroPython）
description: |
  XIAO RP2350，来自 Seeed Studio 的尖端微控制器。它具有双核处理器、增加的 SRAM 和闪存以及增强的连接性。
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /cn/getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div><br></br>

XIAO RP2350 将 Raspberry Pi RP2350（双 Cortex-M33 内核，运行频率 150MHz，带 FPU，增强的安全性和加密功能）的强大功能封装在经典的 XIAO 外形尺寸中。尺寸仅为 21x17.8mm，它具有 19 个多功能 GPIO、一个 RGB LED 和一个电池管理系统，具有 50μA 的超低功耗、电池供电和直接电池电压测量功能。得益于 XIAO 生态系统，XIAO RP2350 兼容各种扩展模块，包括显示器、LED 矩阵、Grove 模块、CAN 总线、视觉 AI 传感器和毫米波传感器。凭借对 MicroPython、C 和 C++ 的原生支持，XIAO RP2350 非常适合各个级别的开发者创建紧凑的电池供电应用，用于智能控制、可穿戴设备、DIY 键盘等。

## 特性

- **强大的 MCU 板**：配备 Raspberry Pi RP2350 芯片，具有对称双 Arm Cortex-M33 @ 150MHz 和 FPU。
- **增强的安全特性**：内置安全启动和加密引导加载程序确保应用程序安全。
- **软件支持**：兼容 C/C++ 和 MicroPython，确保轻松的项目开发和原型制作。
- **丰富的板载资源**：集成 RGB LED、2MB 闪存、520kB SRAM 和 19 个多功能 GPIO（模拟、数字、I²C、UART、SPI、PWM）。
- **扩展的 8 个新 IO**：与之前的 XIAO MCU 相比，背面增加的 8 个 IO 引脚支持更复杂的应用。
- **高效的电源设计**：睡眠模式下仅 50μA 的超低功耗，支持电池供电。通过内部 IO 直接测量电池电压，增强电池管理系统（BMS）。
- **紧凑的拇指大小设计**：尺寸为 21 x 17.8mm，采用 Seeed Studio 经典的 XIAO 外形尺寸，非常适合空间受限的应用。
- **生产友好**：表面贴装器件（SMD）设计，所有组件都在正面，两侧有邮票孔，便于高效的批量生产。

## 规格参数

<table align="center">
    <tr>
        <td>产品</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">处理器</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>双 Cortex-M0+ @ 133MHz</td>
        <td>双 Cortex-M33 @ 150MHz，FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>闪存</td>
        <td>2MB 板载</td>
        <td>2MB 闪存</td>
    </tr>
    <tr>
        <td>LED</td>
        <td>1 个用户 LED（3 色）、1 个电源 LED、1 个 RGB LED</td>
        <td>1 个用户 LED、1 个充电 LED（电池充电指示器）、1 个 RGB LED</td>
    </tr>
    <tr>
        <td>接口</td>
        <td>11 个引脚：4x 模拟、11x 数字、1x I²C、1x UART、1x SPI，全部 PWM</td>
        <td><b>19 个引脚：3x 模拟、19x 数字、2x I²C、2x UART、2x SPI，全部 PWM</b></td>
    </tr>
    <tr>
        <td>按钮</td>
        <td align="center" colspan="2">1 个 RESET 按钮、1 个 BOOT 按钮</td>
    </tr>
    <tr>
        <td>安全性</td>
       <td align="center"> - </td>
        <td>OTP、安全启动、Arm TrustZone</td>
    </tr>
    <tr>
        <td>低功耗</td>
       <td align="center"> - </td>
        <td>4.2V/50uA</td>
    </tr>
    <tr>
        <td>软件兼容性</td>
        <td>Arduino、PlatformIO、MicroPython、CircuitPython、Zephyr，<a href="https://wiki.seeedstudio.com/cn/xiao_topic_page/">更多即将推出</a></td>
        <td>Arduino、PlatformIO、MicroPython、CircuitPython，<a href="https://wiki.seeedstudio.com/cn/xiao_topic_page/">更多即将推出</a></td>
    </tr>
    <tr>
        <td>工作温度</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>尺寸</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## 硬件概述

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 正面引脚图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 背面引脚图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 组件</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

需要更多引脚详细信息？请导航到下面的[资产和资源](#assets--resources)。

## 支持的平台

XIAO RP2350 由 RP2350 驱动，支持 MicroPython 和 Raspberry Pi 提供的 C/C++ SDK。这种灵活性允许开发者为原型制作和开发选择他们首选的编程语言和环境。

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## 入门指南▶️

:::info attention
本页面主要面向 MicroPython 用户。对于有兴趣学习 SDK 编程或高级用户，您可能想从 [Raspberry Pi Pico 系列 C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) 开始。本指南将帮助您设置环境并开始使用示例代码。此外，您可以访问 [XIAO RP2350 与 C/C++ SDK](/cn/xiao-rp2350-c-cpp-sdk) 获取与 XIAO RP2350 相关的更具体说明。
:::

:::tip
目前，使用官方[固件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/SEEED_XIAO_RP2350.uf2)时，ADC 功能可能无法正常工作。请先下载并使用我们修改的固件。一旦拉取请求被合并，我们将相应地更新 Wiki 上的相关内容。
:::

### 步骤 1：在 XIAO RP2350 上安装 MicroPython

要在 XIAO RP2350 上安装 MicroPython 固件，请按照以下步骤操作：

**步骤 1.1. 下载 MicroPython 固件：**  

- 导航到 [MicroPython 下载](https://micropython.org/download/SEEED_XIAO_RP2350/) 页面。
- 下载与 XIAO RP2350 兼容的最新 `.uf2` 固件文件。

:::tip
默认固件适用于 ARM 架构，如果您想使用 RISC-V，请使用链接中相应的固件版本。
:::

**步骤 1.2 进入 BOOTSEL 模式：**  

您可以使用以下两种方法之一在 XIAO RP2350 上进入 BOOTSEL 模式：

<Tabs>
<TabItem value="method1" label="方法 1：连接计算机之前" default>

1. **按住 BOOT 按钮**：  
   当您的 XIAO RP2350 与计算机断开连接时，**按住** BOOT 按钮。
2. **连接到您的计算机**：  
   在按住 BOOT 按钮的同时，使用 USB 电缆将 XIAO RP2350 连接到您的计算机。
3. **释放 BOOT 按钮**：  
   板子连接到计算机后，您可以释放 BOOT 按钮。XIAO RP2350 现在应该处于 BOOTSEL 模式，您的计算机将识别它为可移动存储设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>按住 Boot-> 插入电缆-> 释放 Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="方法 2：连接到计算机时">

1. **按住 BOOT 按钮**：  
   在 XIAO RP2350 已连接到计算机的情况下，按住 BOOT 按钮。
2. **点击 RESET 按钮**：  
   在仍然按住 BOOT 按钮的同时，按下并释放 RESET 按钮，该按钮在上图中标记为"B"，位于板子的右下角。
3. **释放 BOOT 按钮**：  
   按下 RESET 按钮后，释放 BOOT 按钮。XIAO RP2350 现在应该处于 BOOTSEL 模式，您的计算机将识别它为可移动存储设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>按住 Boot-> 点击 Reset-> 释放 Boot</em></div>
</div>

</TabItem>
</Tabs>

**步骤 1.3. 安装固件：**  

- **拖放**下载的 `.uf2` 文件到 XIAO RP2350 的可移动存储驱动器中。
- 文件复制后，板子将自动重启，完成固件安装。

### 步骤 2：安装 Thonny IDE

:::tip about MicroPython

[MicroPython](https://micropython.org/) 是一种类似于 [Python](https://www.python.org/) 的解释型语言。然而，与 Python 不同，MicroPython 直接在硬件上运行（裸机），提供交互式提示符（REPL）来立即执行命令，以及从内置文件系统运行和导入脚本的能力。

要连接到 XIAO RP2350 开发板并开始编写和运行 Python 代码，您可以使用任何支持串行连接的终端工具，如 minicom、PuTTY、electerm、warp 等。为了获得更*用户友好的体验*，您可以使用 **[Thonny](https://thonny.org/)**，因为它易于使用、功能集成且界面对初学者友好。这样，您就可以享受直接在设备上编写和运行 Python 代码的乐趣。

:::

Thonny IDE 是一个对初学者友好的 Python 编辑器，非常适合 MicroPython 开发。以下是安装方法：

1. **下载 Thonny：**  
   - 访问 [Thonny 下载页面](https://thonny.org/)。
   - 选择适合您操作系统（Windows、macOS 或 Linux）的安装程序并下载。

2. **安装 Thonny：**  
   - **运行**下载的安装程序。
   - **按照**屏幕上的说明完成安装过程。

3. **为 MicroPython 配置 Thonny：**  
   - **打开** Thonny IDE。
   - 查看 Thonny 窗口的右下角。
   - 点击**解释器**选择区域。
   - 从下拉菜单中选择 **'MicroPython (RP2040)'**。
   - 确保选择了正确的**端口**——Thonny 通常会自动检测。

现在您已经准备好使用 Thonny IDE 为您的 XIAO RP2350 编写和上传 MicroPython 代码了！

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY 控制台">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

如果您的设备已经准备好使用 MicroPython，让我们从一个简单的项目开始：

### 让它闪烁起来！ ✨

让开发板闪烁 LED 通常是每个人运行的第一个程序。XIAO RP2350 也是如此。

:::note
根据原理图，XIAO RP2350 上的黄色 LED `USER LED` 连接到 `GPIO25/D19`。
对于所有 XIAO 系列开发板，`USER LED` 在设置为`低电平`时会**点亮**，在设置为`高电平`时会**熄灭**。
:::

<Tabs>
  <TabItem value="blink" label="闪烁" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="LED 渐变" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

将代码复制到 Thonny IDE 中后，如下图所示，只需点击 `Run current script` 按钮或按 `F5`。这将执行代码片段，您将看到 XIAO RP2350 上的 LED 开始闪烁。

### 玩转 RGB LED

XIAO RP2350 配备了内置的 RGB LED，您可以使用 MicroPython 来控制它。以下是如何循环显示不同颜色的示例：

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### 电池和电源管理

是否可以在不使用额外组件的情况下读取电池电压？是的，使用 XIAO RP2350，这比以往任何时候都更容易。在之前的 XIAO 系列成员中，如 [XIAO ESP32C3](/cn/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)，读取电池电压需要手动连接到 *A0* 并使用电阻。

但是使用 XIAO RP2350，这个过程得到了简化。您现在可以直接使用 `A3/GPIO29` 引脚来读取电池电压水平，简化了您的设计和开发。只需记住将 `GPIO19` 引脚设置为高电平，因为这是启用电池电量读取所必需的。

按照这个代码片段使用 Pico SDK 读取电池电压：

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")

    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference

    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>

## 资源与资料

XIAO RP2350 利用 Raspberry Pi RP2350 的强大功能，充分利用 Raspberry Pi 社区的丰富共享资源。这为您在这块小巧的开发板上定制项目开启了无限创意的可能性。以下是帮助您入门的重要资源和资料。

***数据手册和原理图***

- 📄 **[PDF]** [RP2350 数据手册](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 引脚图表](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Seeed Studio XIAO RP2350 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[链接]** [Seeed Studio XIAO RP2350 3D STEP 文件](https://grabcad.com/library/seeed-studio-xiao-rp2350-2)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 原理图和 PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [低功耗测试固件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***相关资源***

- 📄 **[PDF]** [Raspberry Pi Pico 系列入门指南](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)：设置和编程 Raspberry Pi Pico 开发板的综合指南，非常适合想要学习 MicroPython 或 C/C++ 的初学者。
- 📄 **[PDF]** [Raspberry Pi Pico 系列 Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf) 记录 MicroPython 设置教程和 API 的书籍
- 📄 **[PDF]** [Raspberry Pi Pico 系列 C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) 记录 Pico C/C++ SDK API 的书籍
- 🔗 **[Kicad]** [Seeed Studio XIAO RP2350 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 扩展和应用

[XIAO 系列](/cn/xiao_topic_page)拥有大量的外设和外设配件供您学习和使用，无论您想要一个允许完美交互的彩色屏幕，还是一个带有明亮简洁 RGB 灯的集成板等等，都等待着您的探索。

作为 XIAO 家族的一员，XIAO RP2350 也是如此。当然，为了更好地利用引出的额外引脚，新的*外设和开发板*将不断推出，充分利用其创造的性能。

- 🌟 **[配件扩展](/cn/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  探索与 XIAO 家族兼容的各种附加组件和模块，从显示器和 LED 矩阵到 Grove 模块和传感器，了解它们如何增强您的项目。

### 社区和学习

此外，深入充满活力的 Raspberry Pi 社区，扩展您的知识并发现新的项目想法。利用社区共享的资源、论坛和教程来增强您使用 XIAO RP2350 的体验。除了 Seeed Studio Wiki，以下是一些其他推荐的学习场所：

- **[Raspberry Pi 文档](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**：获取关于 RP2350 的可靠和最新信息。
- **[Raspberry Pi 论坛](https://www.raspberrypi.org/forums/)**：与其他爱好者互动，提问并分享您的项目。
- **[XIAO GitHub 仓库](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**：探索官方 XIAO 仓库，获取更集中的文档并与我们的团队进行更多互动，**加入我们！**
- **[Reddit 上的 r/embedded](https://www.reddit.com/r/embedded/)**：加入嵌入式系统社区，分享见解并讨论各种话题。
- **[GitHub 上的 Pico 话题](https://github.com/topics/pico)**：探索与 Pico 相关的仓库和讨论。
- **[Hackster.io](https://www.hackster.io/)**：发现与各种硬件平台相关的项目和教程，包括 XIAO 和 Raspberry Pi。
- **[Instructables](https://www.instructables.com/)**：查找使用 XIAO 和其他硬件创作的 DIY 项目和分步指南。
- **[Element14 社区](https://www.element14.com/community/)**：参与与电子和嵌入式系统相关的讨论、网络研讨会和项目。

更多内容，我们始终欢迎您在我们的 [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) 和 [Seeed Studio 论坛](https://forum.seeedstudio.com/)上分享您的项目。这些平台为您提供了与其他创客联系、获得反馈和寻找灵感的绝佳机会。无论您需要帮助解决问题、想要展示您的最新作品，还是只是希望成为支持性社区的一部分，*Seeed Studio 的 Discord 和论坛*都是参与和协作的完美场所。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
