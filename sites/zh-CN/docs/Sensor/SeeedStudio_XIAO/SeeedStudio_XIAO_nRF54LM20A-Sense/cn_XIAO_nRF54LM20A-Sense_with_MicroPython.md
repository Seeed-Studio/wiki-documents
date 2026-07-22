---
title: 使用 MicroPython 的 XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_started/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_micropython
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-06-15'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_micropython/
---

# Seeed Studio XIAO nRF54LM20A Sense 与 MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个 Python 解释器，支持为性能关键代码生成本地代码。它提供了经过优化、适用于微控制器和资源受限系统的 Python 3.6+ 核心特性子集。它与 CPython 不同，你可以在 [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) 页面了解更多差异。

## 在 XIAO nRF54LM20A Sense 上使用 MicroPython

接下来，我将基于 Windows 操作系统，带你了解如何在 **XIAO nRF54LM20A Sense** 上使用 **MicroPython**，并通过 [Thonny IDE](https://thonny.org/) 对其进行编程。

### 硬件准备

在开始之前，你需要准备一块 XIAO nRF54LM20A Sense 开发板。


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

### 安装 [Thonny IDE](https://thonny.org/)

选择适合的版本进行安装。这里我是在 Windows 系统上安装，因此选择了 Windows 版本。

根据所需的 Python 版本按照提示进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
然后只需按照默认步骤完成配置即可。

### 部署 MicroPython 固件

接下来，我们将带你了解如何在 XIAO nRF54LM20A Sense 上部署 MicroPython 固件。

:::tip

在烧录固件之前，请先将 XIAO nRF54LM20A Sense 连接到电脑

:::


1. 下载固件压缩包


<div class="xiao_nrf54lm20a_flash.zip.zip" style={{textAlign: 'center'}}>
    <a class="xiao_nrf54lm20a_flash.zip.zip" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/tools/xiao_nrf54lm20a_flash_package.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub 仓库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. 解压文件夹

需要将文件夹解压到任意目录，然后会出现如下文件内容

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/1.1.png" style={{width:400, height:'auto'}}/></div>

3. 使用脚本烧录 MicroPython 固件

- 对于 Windows，在解压后的文件夹中右键打开 PowerShell 终端并执行烧录脚本，脚本正确执行后，输出结果如下图所示

```bash
.\flash.bat
```


- 对于 Mac/Linux

```bash
cd ~/xiao_nrf54lm20a_flash

sed -i '' $'s/\r$//' xiao_nrf54lm20a_flash.sh

chmod +x xiao_nrf54lm20a_flash.sh
./xiao_nrf54lm20a_flash.sh
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/2.png" style={{width:800, height:'auto'}}/></div>

### 测试烧录效果

本章节主要带你完成 Thonny IDE 的配置



1. 打开 Thonny IDE，点击右下角，准备选择 Configure interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/3.png" style={{width:800, height:'auto'}}/></div>

2. 选择 **MicroPython (generic)**，根据设备选择对应的 **Port**，然后点击 OK

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/4.png" style={{width:800, height:'auto'}}/></div>

3. 连接成功后，如下图所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/5.png" style={{width:800, height:'auto'}}/></div>

4. 在 File -> New 中新建文件，并进行保存测试

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/6.png" style={{width:800, height:'auto'}}/></div>

5. 固件烧录完成后，编写一个 Python 程序，使 RGB-B LED 以 0.5 秒的频率闪烁

```py
from machine import Pin
import time

led_r = Pin(("gpio1", 22), Pin.OUT)
led_g = Pin(("gpio1", 24), Pin.OUT)
led_b = Pin(("gpio1", 23), Pin.OUT)

led_r.value(1)
led_g.value(1)
led_b.value(1)

while True:
    led_b.value(0)          
    time.sleep_ms(500)     

    led_b.value(1)         
    time.sleep_ms(500)      
```

6. 点击左上角的按钮运行程序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/7.png" style={{width:800, height:'auto'}}/></div>

- 程序效果如下图所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/12.gif" style={{width:800, height:'auto'}}/></div>

## 数字

数字引脚主要通过输出高低电平来实现对外部传感器和执行器的通断控制。结合 Grove Base for XIAO 扩展板和标准 Grove 外设模块，本节将演示如何在 XIAO nRF54LM20A Sense 上使用 MicroPython 操作数字引脚。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚定义，可以选择 **D0 (P1.0)** 作为 **Grove-Button** 的控制引脚，选择 **D1 (P1.31)** 作为 **Grove-Piezo Buzzer** 的控制引脚。

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚定义，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

```python
"""
Grove Button (D0 / P1.0) + Grove Piezo Buzzer (D1 / P1.31) - Digital mode
Button pressed → Buzzer ON; Button released → Buzzer OFF
"""

import time
from boards.xiao import XiaoPin

BUTTON = 0   # D0  → P1.0 (Grove Button, onboard pull-down)
BUZZER = 1   # D1  → P1.31 (Grove Piezo Buzzer)

try:
    button = XiaoPin(BUTTON, XiaoPin.IN)
    buzzer = XiaoPin(BUZZER, XiaoPin.OUT)
    buzzer.value(0)
    print("Digital demo started. Press the button to activate the buzzer.")

    while True:
        val = button.value()
        buzzer.value(val)
        time.sleep(0.01)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    buzzer.value(0)
```

**代码说明：**

1. **导入与引脚定义：** 来自 `boards.xiao` 的 `XiaoPin` 提供 GPIO 控制。`BUTTON = 0` 映射到 D0（P1.0），`BUZZER = 1` 映射到 D1（P1.31）。
2. **初始化：** 按键引脚被配置为输入（Grove 按键板载下拉电阻——按下时为 HIGH）。蜂鸣器引脚被配置为输出，并初始化为 LOW（关闭）。
3. **主循环：** 持续读取按键状态并直接写入蜂鸣器。当按键被按下（HIGH）时，蜂鸣器打开；当按键松开（LOW）时，蜂鸣器关闭。10 ms 的延时可防止忙轮询。
4. **清理：** `finally` 代码块确保在程序退出时关闭蜂鸣器。

### 结果

运行程序后，按下按键，蜂鸣器会发出蜂鸣声。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM 以固定频率快速切换引脚电平并动态调整占空比，从而向外设输出等效的模拟信号。它被广泛用于舵机的精确角度控制以及 LED 的平滑亮度调节。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚分布，**D0（P1.0）** 可以被选作 **Grove-Servo** 的控制引脚。

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚分布，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

```python
"""
Servo control on D0 (P1.0) via PWM (50 Hz).
Sweeps 0 → 180° and back.
"""

import time
from boards.xiao import XiaoPWM

SERVO_PIN = 0             # D0 → P1.0
FREQ = 50                 # Standard servo: 50 Hz
PERIOD_NS = 20_000_000    # 20 ms period in nanoseconds

# Standard servo: 0.5 ms → 0°, 2.5 ms → 180°
MIN_NS = 500_000
MAX_NS = 2_500_000

STEP_MS = 30              # 30 ms per degree step

try:
    servo = XiaoPWM(SERVO_PIN)
    servo.init(freq=FREQ, duty_ns=MIN_NS)
    print("PWM servo demo started on D0 (P1.0).")

    while True:
        # 0° → 180°
        for angle in range(0, 181):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

        # 180° → 0°
        for angle in range(180, -1, -1):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    servo.deinit()
```

**代码说明：**

1. **导入与常量：** `XiaoPWM` 提供 PWM 输出。标准航模舵机工作在 50 Hz，脉宽 0.5–2.5 ms 对应 0–180° 转角。
2. **初始化：** 在 D0 上以 50 Hz 频率初始化 PWM 通道。初始占空比设置为最小脉宽（0° 位置）。
3. **主循环：** 两个嵌套循环先将舵机从 0° 扫到 180°，再扫回。角度通过线性插值转换为以纳秒为单位的脉宽。当前角度会打印到控制台。
4. **清理：** 在 `finally` 代码块中调用 `servo.deinit()` 释放 PWM 资源。

### 结果

固件烧录完成后，舵机会以 33 弧度每秒的速度从 0° 旋转到 180°，然后再旋转回 0°。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

同时，当前舵机角度会通过 USB 串口打印输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/13.png" style={{width:800, height:'auto'}}/></div>

## 模拟量

模拟输入基于模数转换器（ADC），主要用于采集来自外部传感器的连续模拟电压信号。原始数字采样值可以通过线性或非线性转换算法映射为实际的工程测量值。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚分布，**D0（P1.0，AIN0）** 被用作 ADC 输入引脚。每隔 500 ms 通过 USB 串口读取并打印一次 ADC 数值。

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚分布，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

```python
"""
Read ADC on D0 (P1.0 / AIN0) and print raw value every 500 ms.
"""

import time
from boards.xiao import XiaoADC

ADC_PIN = 0   # D0 → P1.0 (AIN0)

try:
    adc = XiaoADC(ADC_PIN)
    print("ADC demo started on D0 (P1.0 / AIN0).")

    while True:
        raw = adc.read_uv()
        voltage = raw / 1_000_000.0
        print("ADC raw: %d uV  |  Voltage: %.3f V" % (raw, voltage))
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

**代码说明：**

1. **导入：** 来自 `boards.xiao` 的 `XiaoADC` 提供 ADC 功能。`ADC_PIN = 0` 映射到 D0（P1.0 / AIN0）。
2. **初始化：** `XiaoADC(ADC_PIN)` 将该引脚配置为模数转换输入。
3. **主循环：** `adc.read_uv()` 返回以微伏（µV）为单位的 ADC 读数。该值被转换为伏特用于显示。原始 µV 值和电压值每隔 500 ms 打印一次。
4. **错误处理：** `try/except/finally` 确保程序能够优雅退出。

### 结果

烧录程序后，将 Grove-Capacitive Soil Moisture Sensor 插入家用盆栽土壤中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
在电脑上打开串口助手，观察输出数值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/9.png" style={{width:800, height:'auto'}}/></div>

:::tip

电压参考读数表
| 状态     | 传感器输出电压 | 期望 ADC 原始值|
| -------------- | -------------- | ---------------- |
| 空气中（干燥） | ~2.0–2.4V      | ~3400–4095       |
| 潮湿土壤中       | ~1.3–1.8V      | ~2200–3000       |
| 完全浸没在水中   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

由于元器件存在个体差异，在相同环境下，不同模块的测量结果可能会有所不同。

:::

## UART

通用异步收发器（UART）是一种标准的异步串行通信协议。它不需要外部时钟信号进行同步，而是依靠通信双方预设的波特率来实现数据的发送和接收。只需将 TX 和 RX 引脚交叉连接即可建立全双工数据链路。

### 硬件准备


<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>CH340G USB-to-Serial TTL Module Adapter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚分布，**D6 (P1.08)** 和 **D7 (P1.09)** 被用作 UART 通信的 TX 和 RX 引脚，波特率为 115200。

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚分布，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

```python
import time
from machine import UART
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

uart_id = xiao.uart("uart1")   # → "uart21"

uart = None
try:
    uart = UART(uart_id, baudrate=115200)
    print("UART demo started.")

    uart.write("========================================\r\n")
    uart.write("  UART Demo for XIAO nRF54LM20A Sense\r\n")
    uart.write("========================================\r\n")
    uart.write("Pin Configuration:\r\n")
    uart.write("  TX: D6 (P1.08)\r\n")
    uart.write("  RX: D7 (P1.09)\r\n")
    uart.write("  Baud Rate: 115200\r\n")
    uart.write("\r\nType something and press Enter to see it echoed.\r\n\r\n")

    heartbeat_count = 0
    last_heartbeat = time.ticks_ms()

    while True:
        if uart.any():
            data = uart.read()
            if data:
                uart.write(data)

        now = time.ticks_ms()
        if time.ticks_diff(now, last_heartbeat) >= 5000:
            last_heartbeat = now
            heartbeat_count += 1
            uart.write("\r\n[Heartbeat #%d]\r\n" % heartbeat_count)
            print("Heartbeat #%d" % heartbeat_count)

        time.sleep_ms(10)

except KeyboardInterrupt:
    print("\nStopped by user")
except Exception as e:
    print("\nError: %s" % e)
finally:
    if uart is not None:
        uart.deinit()
```

**代码说明：**

1. **导入与引脚映射：** `machine.UART` 提供对硬件 UART 的访问。`xiao.pin(n)` 根据开发板定义返回给定数字引脚编号对应的端口和引脚元组。
2. **初始化：** 将 UART 1 配置为 115200 波特率，TX 使用 D6 (P1.08)，RX 使用 D7 (P1.09)。启动时会发送一条欢迎消息。
3. **主循环：** 将接收到的数据回显输出。每 5 秒发送一次心跳消息，以确认 UART 仍在运行。
4. **清理：** 在 `finally` 代码块中，`uart.deinit()` 释放 UART 硬件资源。

### 结果

1. 按照下表进行连线：

| XIAO nRF54LM20A Sense | CH340 |
| --------------------- | ----- |
| VBUS                  | 5V    |
| GND                   | GND   |
| D6 (P1.08) - TX       | RX    |
| D7 (P1.09) - RX       | TX    |

2. 在电脑上打开串口监控软件。启动时会打印已配置的 UART 信息。默认情况下，每隔 5 秒会打印一次字符串 `[Heartbeat #N] UART running...`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/10.png" style={{width:600, height:'auto'}}/></div>

## I2C

I2C 是一种同步的半双工数据通信协议。它通过 SCL 时钟线和 SDA 数据线的寻址实现多设备连接，常用于读取 IMU、温湿度等传感器的数据，或用于 OLED 显示输出。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚分布，**D4 (P1.03)** 和 **D5 (P1.07)** 分别被配置为 I2C 的 SDA 和 SCL 引脚。本示例通过 I2C 驱动一块 SSD1306 128×64 OLED 显示屏。

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚分布，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

<details>

<summary>oled.py</summary>

```python
"""
SSD1306 128x64 OLED display via I2C on XIAO nRF54LM20A Sense.
SDA: D4 (P1.03), SCL: D5 (P1.07)
"""

import time
from boards.xiao import XiaoI2C

SDA = 4          # D4 → P1.03
SCL = 5          # D5 → P1.07
I2C_BUS = "i2c0"
FREQ = 400_000   # 400 kHz

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font data
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))
    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]
    for cmd in commands:
        ssd1306_write_commands(cmd)
    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_draw_text(text, x, y):
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))
    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)
    ssd1306_write_data(display_data)

try:
    i2c = XiaoI2C(I2C_BUS, SDA, SCL, FREQ)
    print("I2C initialized on %s (SDA: D%d, SCL: D%d)" % (I2C_BUS, SDA, SCL))

    i2c_addr = i2c.scan()
    if SSD1306_I2C_ADDR not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

    # Initialize display and draw text
    ssd1306_init()
    ssd1306_draw_text("NRF54LM20A", 22, 2)
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    print("Display updated. Running...")

    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

**代码说明：**

1. **导入与引脚定义：** 来自 `boards.xiao` 的 `XiaoI2C` 提供 I2C 总线管理。SDA 位于 D4（P1.03），SCL 位于 D5（P1.07）。总线工作在 400 kHz。
2. **SSD1306 驱动：** SSD1306 OLED 显示屏通过原始 I2C 命令/数据写入进行控制。辅助函数 `ssd1306_write_command()`、`ssd1306_write_data()`、`ssd1306_clear()`、`ssd1306_init()` 和 `ssd1306_draw_text()` 组成一个精简驱动。
3. **字体数据：** 一个 8×8 位图字体字典为可打印 ASCII 字符提供字形定义。`ssd1306_draw_text()` 函数通过查找字形位图并将其发送到显示屏来渲染文本字符串。
4. **主逻辑：** 扫描 I2C 总线以验证 SSD1306 是否存在于地址 `0x3C`。初始化显示屏，并绘制两行居中文本（"NRF54LM20A" 和 "HELLO WORLD"）。
5. **清理：** `try/except` 代码块在键盘中断或错误时实现优雅关闭。

### 结果


程序运行后，文本 **NRF54LM20A** 和 **HELLO WORLD** 将显示在屏幕上，同时状态信息会通过 USB 串口打印输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI 是一种高速、同步、全双工的通信协议。它依赖专用的 SCK 时钟线进行数据同步，并采用由 MOSI、MISO、SCK 和 CS/SS 引脚组成的四线拓扑结构。它被广泛用于驱动高分辨率显示屏、Flash/SD 卡存储以及高频采样传感器。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A Sense 的引脚分布，SPI 配置使用以下引脚：

| 功能 | 数字引脚 | 物理引脚 |
| -------- | ----------- | ------------ |
| SCK      | D8          | P1.04        |
| MOSI     | D10         | P1.06        |
| MISO     | D9          | P1.05        |
| CS       | D1          | P1.31        |
| DC       | D3          | P1.29        |

:::tip

- 关于 XIAO nRF54LM20A Sense 的引脚分布，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

```python
import time
from machine import Pin, SPI
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

cs  = Pin(("gpio1", 31), Pin.OUT)   # D1
dc  = Pin(("gpio1", 29), Pin.OUT)   # D3
bl  = Pin(("gpio1", 8), Pin.OUT)   
rst = Pin(("gpio1", 30), Pin.OUT)   # D2 

spi_id = xiao.spi("spi0") 
spi = SPI(spi_id, baudrate=8000000, polarity=0, phase=0)

cs.value(1)
dc.value(1)
bl.value(1) 

LCD_W = 240
LCD_H = 240

def write_command(cmd):
    dc.value(0); cs.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    cs.value(1)

def write_data(data):
    dc.value(1); cs.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(bytearray(data))
    cs.value(1)

def set_addr_window(x0, y0, x1, y1):
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2A]))
    dc.value(1)
    spi.write(bytearray([x0>>8, x0&0xFF, x1>>8, x1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2B]))
    dc.value(1)
    spi.write(bytearray([y0>>8, y0&0xFF, y1>>8, y1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2C]))
    cs.value(1)

def init_display():
    # Hardware reset (if reset pin is connected)
    rst.value(1)
    time.sleep_ms(10)
    rst.value(0)
    time.sleep_ms(10)
    rst.value(1)
    time.sleep_ms(120)

    # GC9A01 full initialization sequence
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)

    write_command(0xFE) 
    write_command(0xEF) 

    write_command(0xEB)
    write_data(0x14)

    write_command(0x84)
    write_data(0x40)

    write_command(0x85)
    write_data(0xFF)

    write_command(0x86)
    write_data(0xFF)

    write_command(0x87)
    write_data(0xFF)

    write_command(0x88)
    write_data(0x0A)

    write_command(0x89)
    write_data(0x21)

    write_command(0x8A)
    write_data(0x00)

    write_command(0x8B)
    write_data(0x80)

    write_command(0x8C)
    write_data(0x01)

    write_command(0x8D)
    write_data(0x01)

    write_command(0x8E)
    write_data(0xFF)

    write_command(0x8F)
    write_data(0xFF)

    write_command(0xB6)
    write_data(0x00)
    write_data(0x20)

    write_command(0x36)
    write_data(0x08)  # Memory access control, adjust rotation direction as needed

    write_command(0x3A)
    write_data(0x05)  # RGB565 16-bit color mode

    write_command(0x90)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08) 

    write_command(0xBD)
    write_data(0x06)

    write_command(0xBC)
    write_data(0x00)

    write_command(0xFF)
    write_data(0x60)
    write_data(0x01)
    write_data(0x04)

    write_command(0xC3)
    write_data(0x13)
    write_command(0xC4)
    write_data(0x13)

    write_command(0xC9)
    write_data(0x22)

    write_command(0xBE)
    write_data(0x11)

    write_command(0xE1)
    write_data(0x10)
    write_data(0x0E)

    write_command(0xDF)
    write_data(0x21)
    write_data(0x0c)
    write_data(0x02)

    write_command(0xF0)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF1)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xF2)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF3)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xED)
    write_data(0x1B)
    write_data(0x0B)

    write_command(0xAE)
    write_data(0x77)

    write_command(0xCD)
    write_data(0x63)

    write_command(0x70)
    write_data(0x07)
    write_data(0x07)
    write_data(0x04)
    write_data(0x0E) 
    write_data(0x0F)
    write_data(0x09)
    write_data(0x07)
    write_data(0x08)
    write_data(0x03)

    write_command(0xE8)
    write_data(0x34)

    write_command(0x62)
    write_data(0x18)
    write_data(0x0D)
    write_data(0x71)
    write_data(0xED)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x0F)
    write_data(0x71)
    write_data(0xEF)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x63)
    write_data(0x18)
    write_data(0x11)
    write_data(0x71)
    write_data(0xF1)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x13)
    write_data(0x71)
    write_data(0xF3)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x64)
    write_data(0x28)
    write_data(0x29)
    write_data(0xF1)
    write_data(0x01)
    write_data(0xF1)
    write_data(0x00)
    write_data(0x07)

    write_command(0x66)
    write_data(0x3C)
    write_data(0x00)
    write_data(0xCD)
    write_data(0x67)
    write_data(0x45)
    write_data(0x45)
    write_data(0x10)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)

    write_command(0x67)
    write_data(0x00)
    write_data(0x3C)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_data(0x01)
    write_data(0x54)
    write_data(0x10)
    write_data(0x32)
    write_data(0x98)

    write_command(0x74)
    write_data(0x10)
    write_data(0x85)
    write_data(0x80)
    write_data(0x00)
    write_data(0x00)
    write_data(0x4E)
    write_data(0x00)

    write_command(0x98)
    write_data(0x3e)
    write_data(0x07)

    write_command(0x35) 
    write_command(0x21)

    write_command(0x11)
    time.sleep_ms(120)

    write_command(0x29)
    time.sleep_ms(120)

    bl.value(0) 
    print("Seeed Studio Round Display & Backlight Active!")

def fill_screen(color):
    hi = (color >> 8) & 0xFF
    lo = color & 0xFF
    set_addr_window(0, 0, LCD_W-1, LCD_H-1)
    dc.value(1); cs.value(0)
    buf = bytearray([hi, lo] * LCD_W)
    for _ in range(LCD_H):
        spi.write(buf)
    cs.value(1)

init_display()

colors = [
    (0xF800, "RED"),
    (0x07E0, "GREEN"),
    (0x001F, "BLUE"),
    (0xFFE0, "YELLOW"),
    (0x07FF, "CYAN"),
    (0xF81F, "MAGENTA"),
    (0x0000, "BLACK"),
    (0xFFFF, "WHITE"),
]

while True:
    for color, name in colors:
        print("Solid: %s" % name)
        fill_screen(color)
        time.sleep_ms(1000)
```

### 结果

运行程序后，圆形显示屏按红、绿、蓝、黄、青、洋红的顺序刷新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:400, height:'auto'}}/></div>


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
