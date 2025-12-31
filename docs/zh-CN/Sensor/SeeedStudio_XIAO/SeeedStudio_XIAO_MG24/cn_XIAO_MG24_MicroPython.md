---
title: Seeed Studio XIAO MG24 Sense 与 MicroPython
description: 使用 Seeed Studio XIAO MG24(Sense) 进行引脚复用。
image: https://files.seeedstudio.com/wiki/XIAO_MG24_Sense.webp
slug: /cn/xiao_mg24_sense_micropython
keywords:
  - XIAO
  - MG24
  - MicroPython
last_update:
  date: 12/25/2025
  author: Zeller
  sidebar_position: 9
---

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个具有部分原生代码编译功能的 Python 解释器。它提供了 Python 3.5 功能的子集，专为嵌入式处理器和受限系统实现。它与 CircuitPython 不同，您可以在 [MicroPython 文档](https://github.com/micropython/micropython/wiki/Differences) 中了解更多差异。

## 在 XIAO MG24 上使用 MicroPython

接下来，我将指导您如何在 XIAO MG24 Sense 上使用 MicroPython，并基于 Windows 操作系统使用 Thonny IDE 进行编程。

### 硬件准备

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO MG24 Sense</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### 安装 [Thonny IDE](https://thonny.org/)

选择适当的版本进行安装。这里我在 Windows 系统上安装，所以选择了 Windows 版本。

按照所需 Python 版本的说明进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div><br/>

然后，只需按照默认步骤进行配置。

### 下载仓库

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

将其克隆到本地机器，然后记住存储此 XIAO MG24 MicroPython 的路径。此路径稍后会用到。

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### LED 闪烁示例

这里我们将向您展示如何使用 MicroPython 和 Thonny IDE 点亮 XIAO MG24 上的 USER LED。

#### **步骤 1.** 刷入 MicroPython 固件

<!-- 如果您已经刷入了对应的 MircroPython 固件，可以跳过这一步骤 -->
- 下载 [XIAO MG24 MicroPython 固件](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/xiao_mg24_flash.zip) 包并解压到适当位置。然后在此文件夹中打开终端。

- 按住 XIAO MG24 板载的 RESET 按钮，然后给它上电。

- 对于 Windows：点击 `xiao_mg24_flash.bat`。当脚本开始执行时释放 RESET 按钮，等待编程完成。

<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_1.png" style={{width:600, height:'auto'}}/></div>

- 对于 Mac / Linux

```bash
sudo chmod +x xiao_mg24_flash.sh && ./xiao_mg24_flash.sh
```

:::tip
出现的错误是由 EFR32MG24 芯片的内部架构决定的。该芯片集成了受保护的安全子系统（Secure Vault），对应调试接口的 AP#2 和 AP#3 端口。当 pyOCD 工具扫描设备时，它会尝试连接到所有端口；然而，这些安全端口被锁定或受限，因此拒绝连接请求，导致错误日志。这不会影响主程序（AP#0）的正常编程和执行，这是已知且预期的行为。
:::

#### **步骤 2.** 解释器配置

打开 Thonny IDE，然后点击界面右下角配置解释器选项。选择 MicroPython (generic) 和端口。配置成功后，Shell 中将显示 MicroPython 版本信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_2.png" style={{width:600, height:'auto'}}/></div>

#### **步骤 3.** 上传 boards 文件

- 打开视图，选择 **File**，文件管理器路径将显示在左侧边栏。
- 打开克隆或下载文件的路径，并打开 `micropython-seeed-boards-master\examples`
- 选择 **boards** 文件夹并将其上传到闪存。然后，您将能够在 MicroPython 设备/闪存上看到上传的文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_3.png" style={{width:600, height:'auto'}}/></div>

#### **步骤 4.** 运行代码

点击 **File** -> **New** 创建新文件并保存为 blink.py。<br/>

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

代码说明：

- **导入模块**
        - `time` 导入时间模块
        - `Xiao Pin` 从 boards.xiao 模块导入 Seeed Xiao 开发板的引脚控制类，用于操作板上的引脚。

- **定义引脚**
        - `led = "led""` 指定引脚连接到开发板的 `led` 引脚（这里是 USER 引脚）

- **主逻辑（try 块）**
        - USER LED 将以 0.5 秒间隔闪烁。

复制上述代码，然后点击绿色按钮或按 F5 运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_4.png" style={{width:600, height:'auto'}}/></div>

代码开始运行后，USER LED 将以 0.5 秒间隔闪烁。

结果如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_1.gif" style={{width:600, height:'auto'}}/></div>

### PWM 示例

XIAO MG24 Sense 上的所有 GPIO 引脚都支持 PWM 输出。因此，您可以使用任何引脚输出 PWM 来调节灯光亮度、控制舵机和其他功能。

#### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 软件

- 创建一个名为 pwm.py 的新文件并将参考代码复制到其中。

```py
import time
from boards.xiao import XiaoPWM

PIN = 0  # D0

# set the frequency and period of the PWM signal
FREQ = 1000
PERIOD_NS = int(1_000_000_000 // FREQ)  
# set the number of steps to fade the LED and the delay between steps
FADE_STEPS = 255
STEP_DELAY = 0.01
STEP_SIZE = 3

pwm = None

try:
    # initialize the PWM with a frequency and a 0% duty cycle
    pwm = XiaoPWM(PIN)
    pwm.init(freq=FREQ, duty_ns=0)

    while True:
        # fade the LED in and out
        for fade in range(0, FADE_STEPS + 1, STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS

            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)
        # fade the LED in and out again
        for fade in range(FADE_STEPS, -1, -STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS
            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")

except Exception as e:

    print("\nError occurred:", repr(e))

finally:
    if pwm is not None:
        try:
            pwm.deinit()
        except Exception:
            pass
```

代码说明：

- **导入模块**
        - `time`：导入标准时间模块来处理延迟（用于控制呼吸效果的速度）。
        - `XiaoPWM`：从 `boards.xiao` 模块导入 PWM（脉宽调制）控制类，用于在数字引脚上生成类似模拟的信号。

- **定义引脚和常量**
        - `PIN = 0`：指定设备连接到开发板上的 D0 引脚。
        -`FREQ / PERIOD_NS`：将 PWM 频率设置为 1000 Hz，并计算以纳秒为单位的总周期（1 秒 / 1000）。
        - `FADE_STEPS / STEP_DELAY`：配置动画分辨率（255 步）和速度（变化之间等待 0.01 秒）。

- **主逻辑（try 块）**
        - **初始化**：代码在 D0 引脚上初始化 PWM 对象，起始亮度为 0%（占空比）。
        - **呼吸循环**：在无限的 `while True` 循环内，两个 `for` 循环控制 LED 亮度：
            1. **淡入**：逐渐将 `duty_ns`（脉冲宽度）从 0 增加到完整周期持续时间。
            2. **淡出**：逐渐将 `duty_ns` 从完整周期减少回 0。

- **占空比计算**：公式 `(fade * PERIOD_NS) // FADE_STEPS` 将循环步骤（0-255）映射到 PWM 硬件所需的纳秒时序。
        - **安全/清理**：`finally` 块确保在程序停止时（例如通过 Ctrl+C）调用 `pwm.deinit()` 来释放硬件资源。

#### 结果图

程序运行后，LED 将实现淡入淡出效果，您可以根据实际需要调整 PWM 步长。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_2.gif" style={{width:400, height:'auto'}}/></div>

### 模拟示例

XIAO MG24 Sense 开发板具有 12 位 ADC，可高分辨率读取模拟传感器值，帮助我们读取更准确的数值。

接下来，我们将选择两个传感器来体现 ADC 的特性。

#### 硬件准备

<table align="center">
 <tr>
        <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove-Rotary Angle Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a></div>
    </td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a></div>
    </td>
 </tr>
</table>

#### 软件

- 创建一个名为 adc.py 的新文件，并将参考代码复制到其中。

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM 

adc_pin = 0    
pwm_pin = 1    

try:
    adc = XiaoADC(adc_pin)            
    pwm = XiaoPWM(pwm_pin)     

    FREQ = 1000                     
    PERIOD_NS = 1000000000 // FREQ 
    pwm.init(freq=FREQ, duty_ns=0)  

    MAX_VOLTAGE = 3.3     
    DEAD_ZONE = 0.02
    last_duty = -1 

    while True:
        raw_value = adc.read_u16()
        voltage = (raw_value / 65535.0) * MAX_VOLTAGE

        # Calculate the base percentage (0.0 - 1.0)
        duty_percent = voltage / MAX_VOLTAGE

        # scope limitation
        if duty_percent < 0: duty_percent = 0
        if duty_percent > 1: duty_percent = 1

        if abs(duty_percent - last_duty) < DEAD_ZONE:
            time.sleep(0.05)
            continue

        inverted_duty = 1.0 - duty_percent
        duty_ns = int(inverted_duty * PERIOD_NS)

        if duty_ns < 20: duty_ns = 20
        elif duty_ns > (PERIOD_NS * 0.96): duty_ns = int(PERIOD_NS * 0.96)

        pwm.duty_ns(duty_ns)

        print("Voltage: {:.2f}V, Brightness: {:.1f}%".format(voltage, duty_percent * 100))

        last_duty = duty_percent
        time.sleep(0.05)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: {}".format(e))
finally:
    pwm.deinit()
```

- **导入模块**
        - `time`：导入标准时间模块来处理延迟（用于控制呼吸效果的速度）。
        - `XiaoPWM`：从 `boards.xiao` 模块导入 PWM（脉宽调制）控制类，用于在数字引脚上生成类似模拟的信号。
代码说明：

- **导入模块**
        - `time`：导入标准时间模块来处理延迟（用于控制循环的采样率）。
        - `XiaoADC`、`XiaoPWM`：从 `boards.xiao` 模块导入硬件控制类。`XiaoADC` 处理模拟输入（电位器），`XiaoPWM` 处理脉宽调制输出（LED）。

- **定义引脚和常量**
        - `adc_pin = 0` / `pwm_pin = 1`：映射物理引脚。D0 引脚用于输入传感器，D1 引脚用于输出 LED。
        - `FREQ / PERIOD_NS`：将 PWM 工作频率设置为 1000 Hz，并计算以纳秒为单位的周期持续时间（1,000,000 ns）。
        - `MAX_VOLTAGE / DEAD_ZONE`：定义参考电压（3.3V）和 2% 死区阈值，用于过滤电气噪声并防止 LED 闪烁。

- **主逻辑（try 块）**
        - **初始化**：设置 ADC 和 PWM 对象。PWM 以 0 的占空比开始。
        - **控制循环**：在 `while True` 循环内，代码持续监控传感器：
            1. **读取和归一化**：从 ADC 读取原始 16 位整数（0-65535），并将其转换为浮点电压（0.0V - 3.3V）。
            2. **抖动滤波器**：将当前读数与 `last_duty` 比较。如果变化小于 `DEAD_ZONE`，循环跳过更新以保持稳定性。

- **占空比计算和逻辑反转**
        - **低电平有效逻辑**：`inverted_duty = 1.0 - duty_percent` 这行代码反转逻辑。
        - **原因**：您的 LED 可能是**低电平有效**（连接到 VCC）。
        - **效果**：随着电压增加，`duty_ns` 变小（将引脚拉低更长时间），使 LED **更亮**。

- **安全限制**：代码将输出信号限制在最小 20ns 和最大周期的 96% 之间。这保护硬件并确保信号保持在有效范围内。

- **输出和清理**
        - **反馈**：使用 `.format()` 将当前电压和亮度百分比打印到控制台，以兼容较旧的 MicroPython 版本。
        - **安全/清理**：`finally` 块保证在程序停止时执行 `pwm.deinit()`，安全地关闭 PWM 硬件资源。

#### 结果图

- 旋转 Grove-Rotary Angle Sensor，LED 的亮度将相应变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_3.gif" style={{width:400, height:'auto'}}/></div>

- Shell 窗口也会打印电压和亮度百分比。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_5.png" style={{width:400, height:'auto'}}/></div>

### UART 示例

UART 是最常用的通信协议之一。它只需两条数据线即可进行数据传输，其低成本使其在许多领域得到广泛应用。接下来，我们将以传输 GPS 模块数据为例来演示串行通信的应用。

#### 硬件准备

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24 Sense</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a></div>
    </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 软件

- 创建一个名为 uart.py 的新文件，并将参考代码复制到其中。

<details>

<summary>参考代码</summary>

```py
from boards.xiao import XiaoUART
import time
import math

uart = "uart1"
baudrate = 9600
tx = 6              # D6
rx = 7              # D7

# Coordinate structure
class Coordinates:
    def __init__(self, Lon=0.0, Lat=0.0):
        self.Lon = Lon
        self.Lat = Lat

# GPS data structure
class GNRMC:
    def __init__(self):
        self.Lon = 0.0      # GPS Longitude
        self.Lat = 0.0      # GPS Latitude
        self.Lon_area = ''  # E or W
        self.Lat_area = ''  # N or S
        self.Time_H = 0     # Time Hour
        self.Time_M = 0     # Time Minute
        self.Time_S = 0     # Time Second
        self.Status = 0     # 1: Successful positioning, 0: Positioning failed

# Convert WGS-84 to GCJ-02
def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * pi) + 40.0 * math.sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * pi) + 320 * math.sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

# Convert WGS-84 to GCJ-02
def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * pi) + 40.0 * math.sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * pi) + 300.0 * math.sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# Convert GCJ-02 to BD-09
def bd_encrypt(gg):
    bd = Coordinates()
    x = gg.Lon
    y = gg.Lat
    z = math.sqrt(x * x + y * y) + 0.00002 * math.sin(y * x_pi)
    theta = math.atan2(y, x) + 0.000003 * math.cos(x * x_pi)
    bd.Lon = z * math.cos(theta) + 0.0065
    bd.Lat = z * math.sin(theta) + 0.006
    return bd

# Convert WGS-84 to GCJ-02
def transform(gps):
    gg = Coordinates()
    dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0)
    dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0)
    radLat = gps.Lat / 180.0 * pi
    magic = math.sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * math.cos(radLat) * pi)
    gg.Lat = gps.Lat + dLat
    gg.Lon = gps.Lon + dLon
    return gg

# Convert to Baidu coordinates (BD-09)
def L76X_Baidu_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    bd09_coords = bd_encrypt(gcj02_coords)
    return bd09_coords

# Convert to Google coordinates (GCJ-02)
def L76X_Google_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    return gcj02_coords

# Parse GNRMC NMEA sentence
def parse_gnrmc(nmea_sentence):
    gps = GNRMC()

    if not nmea_sentence.startswith(b'$GNRMC') and not nmea_sentence.startswith(b'$PNRMC'):
        return gps

    try:
        # Convert to string and split by commas
        sentence_str = nmea_sentence.decode('ascii', 'ignore')
        fields = sentence_str.split(',')

        if len(fields) < 12:
            return gps

        # Parse time field (HHMMSS.sss)
        if fields[1]:
            time_str = fields[1]
            if '.' in time_str:
                time_str = time_str.split('.')[0]
            if len(time_str) >= 6:
                gps.Time_H = int(time_str[0:2]) + 8  # GMT+8
                gps.Time_M = int(time_str[2:4])
                gps.Time_S = int(time_str[4:6])
                if gps.Time_H >= 24:
                    gps.Time_H -= 24

        # Parse status
        gps.Status = 1 if fields[2] == 'A' else 0

        if gps.Status == 1:
            # Parse latitude (DDMM.MMMMM)
            if fields[3] and fields[4]:
                lat_str = fields[3]
                if '.' in lat_str:
                    degrees = float(lat_str[0:2])
                    minutes = float(lat_str[2:])
                    gps.Lat = degrees + minutes / 60.0
                    gps.Lat_area = fields[4]

            # Parse longitude (DDDMM.MMMMM)
            if fields[5] and fields[6]:
                lon_str = fields[5]
                if '.' in lon_str:
                    degrees = float(lon_str[0:3])
                    minutes = float(lon_str[3:])
                    gps.Lon = degrees + minutes / 60.0
                    gps.Lon_area = fields[6]

    except Exception as e:
        print("Parse error:", e)

    return gps

# Print formatted GPS data
def print_gps_data(gps):
    print("\n--- GPS Data ---")
    print("Time (GMT+8): {:02d}:{:02d}:{:02d}".format(gps.Time_H, gps.Time_M, gps.Time_S))
    if gps.Status == 1:
        print("Latitude (WGS-84): {:.6f} {}".format(gps.Lat, gps.Lat_area))
        print("Longitude (WGS-84): {:.6f} {}".format(gps.Lon, gps.Lon_area))

        # Coordinate conversion
        baidu_coords = L76X_Baidu_Coordinates(gps)
        google_coords = L76X_Google_Coordinates(gps)

        print("Baidu Latitude: {:.6f}".format(baidu_coords.Lat))
        print("Baidu Longitude: {:.6f}".format(baidu_coords.Lon))
        print("Google Latitude: {:.6f}".format(google_coords.Lat))
        print("Google Longitude: {:.6f}".format(google_coords.Lon))
        print("GPS positioning successful.")
    else:
        print("GPS positioning failed or no valid data.")

try:
    uart = XiaoUART(uart, baudrate, tx, rx)
    # Initialize UART
    uart.init(9600, bits=8, parity=None, stop=1)
    # Buffer to accumulate complete messages
    buffer = bytearray()
    # Constants for coordinate transformation
    pi = 3.14159265358979324
    a = 6378245.0
    ee = 0.00669342162296594323
    x_pi = 3.14159265358979324 * 3000.0 / 180.0
    while True:
        available = uart.any()
        if available > 0:
            # Read all available bytes
            data = uart.read(available)
            buffer.extend(data)
            # Check if we have a complete line (ends with newline)
            if b'\n' in buffer:
                # Find the newline position
                newline_pos = buffer.find(b'\n')
                # Extract the complete message
                complete_message = buffer[:newline_pos + 1]
                # Remove the processed part from buffer
                buffer = buffer[newline_pos + 1:]
                # Parse GNRMC sentences
                if complete_message.startswith(b'$GNRMC') or complete_message.startswith(b'$PNRMC'):
                    gps_data = parse_gnrmc(complete_message)
                    print_gps_data(gps_data)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    uart.deinit()
```

</details>

代码说明：

- **导入模块**
        - `XiaoUART` 从 `boards.xiao` 模块导入 Seeed Xiao 开发板的 UART 通信类，用于初始化和控制串行通信。
        - `time` 导入时间模块以支持与时间相关的功能（虽然在这里没有直接使用，但为了潜在的未来使用或兼容性而导入）。
        - `math` 导入坐标转换算法所需的数学函数（`sin`、`cos`、`sqrt`、`atan2` 等）。

- **定义 UART 配置**
        - `uart = "uart1"` 指定要使用的 UART 控制器实例——这里是 `uart1`。
        - `baudrate = 9600` 将串行通信的波特率设置为 9600 bps。
        - `tx = 6` 指定 UART 发送引脚（TX）连接到数字引脚 D6。
        - `rx = 7` 指定 UART 接收引脚（RX）连接到数字引脚 D7。

- **定义数据结构**
        - `Coordinates` 类：用于存储经度/纬度值作为浮点数的简单容器。
        - `GNRMC` 类：表示从 `$GNRMC` NMEA 语句解析的 GPS 数据。包含：
            - 十进制度数的纬度/经度
            - 半球指示符（`N/S`、`E/W`）
            - 时间（小时、分钟、秒——调整为 GMT+8）
            - 状态标志（1 = 有效定位，0 = 无定位）

- **坐标转换函数**
        - `transformLat(x, y)` 和 `transformLon(x, y)` — 实现 WGS-84 → GCJ-02 转换算法部分的辅助函数（在中国用于地图混淆）。
        - `bd_encrypt(gg)` — 通过应用额外的偏移和旋转将 GCJ-02 坐标转换为百度的 BD-09 坐标系。
        - `transform(gps)` — 使用基于椭球地球模型的复杂三角函数公式将 WGS-84（原始 GPS）坐标转换为 GCJ-02 的主函数。
        - `L76X_Baidu_Coordinates(gps)` — 将原始 GPS（WGS-84）→ GCJ-02 → BD-09（百度地图格式）转换的包装器。
        - `L76X_Google_Coordinates(gps)` — 将原始 GPS（WGS-84）→ GCJ-02（中国的谷歌地图格式）转换的包装器。

- **解析 GNRMC 语句**
        - `parse_gnrmc(nmea_sentence)` — 将原始 NMEA `$GNRMC` 或 `$PNRMC` 字符串解析为结构化的 `GNRMC` 对象。
            - 提取时间（从 UTC 转换为 GMT+8）。
            - 检查状态（`A` = 活跃/有效定位，`V` = 无效）。
            - 从 DDMM.MMMMM 格式解析纬度/经度 → 十进制度数。
            - 返回填充的 `GNRMC` 对象，如果解析失败则返回默认空对象。

- **显示格式化的 GPS 数据**
        - `print_gps_data(gps)` — 打印人类可读的 GPS 信息，包括：
            - 本地时间（GMT+8）
            - 带半球的原始 WGS-84 坐标
            - 转换后的 GCJ-02（Google 兼容）和 BD-09（百度兼容）坐标
            - 指示定位是否成功的状态消息

- **主逻辑（try 块）**
        - 使用指定参数初始化 UART 接口。
        - 定义坐标数学计算所需的全局常量（`pi`、`a`、`ee`、`x_pi`）— 地球椭球参数和缩放因子。
        - 进入无限循环，通过 UART 持续读取传入的 GPS 数据。
            - 使用 `buffer` 累积部分消息，直到接收到完整行（以 `\n` 结尾）。
            - 当完整行到达时：
                - 检查是否以 `$GNRMC` 或 `$PNRMC` 开头
                - 如果是，使用 `parse_gnrmc()` 解析
                - 通过 `print_gps_data()` 显示格式化输出
        - 处理异常：
            - `KeyboardInterrupt`：在 Ctrl+C 时优雅退出。
            - 一般 `Exception`：捕获并打印任何意外错误。
        - 最后，调用 `uart.deinit()` 在退出前清理 UART 资源。

#### 结果图表

- 打开任何串口工具并将波特率设置为 9600。
- GPS 模块应在开阔的室外区域使用。
- 程序将打印您位置的 GPS 信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

### I2C 示例

XIAO MG24 Sense 具有 I2C 接口，可用于许多传感器的数据传输和解析，以及使用 OLED 屏幕。

#### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio XIAO 扩展底板配 Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 软件

- 创建一个名为 i2c.py 的新文件，并将参考代码复制到其中。

<details>

<summary>参考代码</summary>

```py
import time
from boards.xiao import XiaoI2C

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

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

# Basic 8x8 font 
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

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))

    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Initialize SSD1306 display with recommended settings
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

# Draw a string of text at specified column and page (row) on SSD1306
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

i2c_addr = i2c.scan()
if SSD1306_I2C_ADDR not in i2c_addr:
    raise Exception("SSD1306 not found on I2C bus")
else:
    print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

# Initialize display
ssd1306_init()
ssd1306_draw_text("XIAO MG24", 30, 2)
ssd1306_draw_text("HELLO WORLD", 20, 4)
```

</details>

代码说明：

- **导入模块**
        - `time` 导入时间模块以启用与时间相关的功能，如延迟。
        - `XiaoI2C` 从 `boards.xiao` 模块导入适用于 Seeed Xiao 开发板的 I2C 通信类，用于初始化和控制 I2C 外设。

- **定义 I2C 配置**
        - `sda = 4` 指定 I2C 总线的 SDA（数据）线连接到数字引脚 D4。
        - `scl = 5` 指定 I2C 总线的 SCL（时钟）线连接到数字引脚 D5。
        - `i2c = "i2c0"` 指定要使用的 I2C 控制器实例——这里是 `i2c0`。
        - `frq = 400000` 将 I2C 总线频率设置为 400 kHz（标准快速模式）。
        - `i2c = XiaoI2C(i2c, sda, scl, frq)` 使用指定参数初始化 I2C 接口。

- **定义 SSD1306 常量**
        - `SSD1306_I2C_ADDR = 0x3C` SSD1306 OLED 显示屏的默认 I2C 地址。
        - 各种命令常量（`SSD1306_SET_CONTRAST`、`SSD1306_DISPLAY_ON` 等）定义了用于配置和控制显示硬件的控制命令。
        - `SSD1306_WIDTH = 128`、`SSD1306_HEIGHT = 64`、`SSD1306_PAGES = 8` 定义显示分辨率和页面结构（每页高 8 行）。

- **定义字体数据**
        - `font_data` 一个将 ASCII 字符映射到其 8x8 像素位图表示的字典。每个字符表示为 8 个字节的列表，其中每个字节对应一行像素（LSB = 最左侧像素）。

- **辅助函数**
        - `ssd1306_write_command(cmd)` 通过 I2C 使用控制字节 `0x00` 向 SSD1306 发送单个命令字节。
        - `ssd1306_write_commands(cmds)` 在一次事务中发送多个命令字节。
        - `ssd1306_write_data(data)` 使用控制字节 `0x40`（数据模式）向 SSD1306 发送显示数据字节。
        - `ssd1306_clear()` 通过向所有页面和列写入零字节来清除整个显示。
        - `ssd1306_init()` 使用推荐设置初始化 SSD1306 显示，包括对比度、多路复用比、内存模式和打开显示。
        - `ssd1306_draw_text(text, x, y)` 从列 `x` 和页面 `y` 开始绘制文本。它将每个字符转换为其 8x8 字体位图，顺时针旋转 90°（以匹配显示方向），并将像素数据写入显示缓冲区。

- **主逻辑（初始化和显示）**
        - `i2c.scan()` 扫描 I2C 总线以检测连接的设备。
        - 如果在地址 `0x3C` 处未找到 SSD1306，则引发异常；否则打印成功消息。
        - `ssd1306_init()` 初始化显示硬件。
        - `ssd1306_draw_text("XIAO MG24", 30, 2)` 从列 30、页面 2（≈ 第 16 行）开始绘制字符串 **XIAO MG24**。
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)` 从列 20、页面 4（≈ 第 32 行）开始绘制字符串 **HELLO WORLD**。

#### 结果图

- 程序开始运行后，屏幕上将显示 **XIAO MG24** 和 **HELLO WORLD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_6_1.jpg" style={{width:400, height:'auto'}}/></div>

### 总结

恭喜！完成上述教程后，您已经掌握了使用 XIAO MG24 Sense 和 MicroPython 进行基础开发和调试的能力。我们期待看到您基于这些基础技能创造更多有趣的项目

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
