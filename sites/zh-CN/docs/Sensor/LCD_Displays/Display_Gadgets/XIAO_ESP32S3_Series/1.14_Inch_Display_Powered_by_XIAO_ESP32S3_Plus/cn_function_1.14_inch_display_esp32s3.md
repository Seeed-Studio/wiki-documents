---
description: 针对 XIAO 1.14'' IPS Display（ESP32-S3）上每个板载外设的独立功能级演示。涵盖屏幕、IMU、PDM 麦克风和 I2S 音频（语音条 + Flash 录音机）、Grove I2C、按键以及电池电压检测。
title: 板载外设使用
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/cn/function_1.14_inch_display_esp32s3/
---

# 板载外设使用

本页收集了 1.14'' IPS Display 上每个板载外设的独立功能级演示。每个小节都是自包含的——你可以直接选择与你的使用场景匹配的那一个，而无需阅读其他部分。

:::tip
本页中的演示 GIF 为了缩短时长都进行了加速。
:::

:::note
本页中的所有演示都需要按照[快速上手](/cn/getting_started_1.14_inch_display_esp32s3)中所述安装 **esp32 Boards by Espressif (3.3.11)**，并额外手动安装 **Seeed_GFX2** 库（如下所述）。
:::

- **Seeed_GFX2（手动安装）** —— 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到一个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，依次点击 **Sketch > Include Library > Add .ZIP Library...**，然后选择下载的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你不需要重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，将解压后的文件夹重命名为 `Seeed_GFX2`，再放入 `Documents/Arduino/libraries/`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个演示都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 135×240 分辨率、颜色顺序和反色设置。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，演示使用 `Board_XIAO_1inch14_LCD<13, 12>`（RST=13，BL=12）配合 `Config_Seeed_1inch14_LCD_ST7789`（135×240）。少数演示会定义一个草图本地的 `Config_XIAO_1inch14_LCD_ST7789_BGR` 覆盖配置，以使用 BGR 颜色顺序。
- 这些演示中，**IMU** 通过 I2C（`Wire`）直接读取——不需要额外的 IMU 库。**PDM 麦克风**和 **I2S 输出**使用 ESP-IDF 5 的驱动（`driver/i2s_pdm.h`、`driver/i2s_std.h`）以及 `LittleFS`，全部包含在 esp32 开发板包中。
- 1.14'' IPS Display **没有触摸控制器，也没有 SD 卡槽**，因此不需要任何触摸或 SD 相关库。
:::

## 获取演示代码

本页中的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A —— 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示在 **Code location** 行中给出的文件夹。例如，本板子的 GraphicTest 演示位于 `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B —— 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开该演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示在 1.14 英寸 ST7789 IPS 面板（135×240）上运行完整的图形基准测试，涵盖色条、线段、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 ST7789 IPS 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每一种的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_1inch14_LCD<13, 12>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数直接使用裸 GPIO 号，因此 `<13, 12>` 会将 RST 设为 GPIO13（D17），BL 设为 GPIO12（D18）。**Panel Config** 预设了 135×240 分辨率、颜色顺序以及反色设置（`invert = true`），因此无需 `driver.h` 或手动调用 `invertDisplay()`。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当能看到面板尺寸以及每个测试的耗时输出：

```
=== XIAO ESP32-S3 Plus 1.14 graphic test ===
LCD width: 135
LCD height: 240
Color bars: 96.02 ms
Lines: 2634.02 ms
Fast lines: 143.65 ms
Rectangles: 113.85 ms
Filled rectangles: 340.06 ms
Circles: 358.57 ms
Triangles: 378.17 ms
Round rectangles: 163.69 ms
Text: 1458.63 ms
Pixel gradient: 4670.28 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案大约显示一秒钟，然后开始下一个。当所有测试完成后，会出现一个带蓝色圆角矩形边框的 “Graphic / Finished” 屏幕。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Graphic / Finished” 信息，下方是 “Reset to rerun”。重置开发板即可再次运行测试。

---

## IMU

1.14'' IPS Display 板载一颗 **LSM6DS3** 六轴 IMU（3 轴加速度计 + 3 轴陀螺仪），通过 I2C 连接在 D4/D5 上，地址为 **0x6A**。位于 **D14** 的运动中断引脚支持硬件唤醒和手势检测。

:::note
板载 IMU 为 **LSM6DS3**（已从板卡原理图确认，I2C 地址为 `0x6A`）。Electronic Quicksand 演示会探测 QMI8658 兼容传感器，作为防御性回退方案。Raise to Wake 演示则针对板载 LSM6DS3 的唤醒寄存器。
:::

下面的演示通过 I2C（`Wire`）直接读取 IMU——不需要外部 IMU 库。

<a id="imu-quicksand"></a>

### 演示 1：电子流沙

此演示将屏幕变成一个交互式流体模拟——金色沙粒会根据重力方向流动和沉降，而重力方向由板载六轴 IMU 测量。倾斜开发板，沙粒就会实时改变流动方向。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该仿真在 135×240 屏幕上叠加了一个 **22×40 占用网格**，其中每个单元为 6×6 像素。大约有 **150 个粒子** 被放置在网格中，每个粒子具有位置、速度以及金色渐变颜色。

IMU 通过 I2C（D4/D5）读取。示例程序会在两个已知地址上探测 IMU——先是 QMI8658，然后是 LSM6DS3——并使用先响应的那个。原始加速度值经过低通滤波，用于推导重力向量。当你倾斜开发板时：

1. **重力向量更新** —— 使用指数移动平均对加速度计数据进行平滑处理，以避免抖动。
2. **粒子速度** —— 每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流体中深度的每粒子流动性系数。
3. **单元占用** —— 在流体中更深（相对于重力更接近“底部”）的粒子流动性更低，从而产生逼真的堆积效果。
4. **差分渲染** —— 只重绘粒子进出过的单元，最大限度减少 SPI 传输并保持动画流畅。

靠近表面的粒子流动自如（流动性更高）；埋得更深的粒子紧密堆积（流动性更低）——模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== Electronic Quicksand 1.14 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，粒子会朝较低的一边流动。当显示屏保持水平放置时，演示会保留之前的重力方向。

---

### 演示 2：抬起唤醒

该演示实现了一个由 IMU 内置唤醒中断（连接到 **D14**）驱动的**屏幕休眠/唤醒系统**。屏幕在 8 秒无操作后会自动关闭（背光关闭 + ESP32 轻睡眠），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用了兼容 LSM6 的 IMU 的**嵌入式唤醒事件检测器**——这是一项硬件特性，它在内部监测加速度计数据，当运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

**IMU 配置（兼容 LSM6）：**

<div class="table-center">
  <table align="center">
    <tr><th>寄存器</th><th>数值</th><th>用途</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>启用 BDU + 块读取自动递增</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度计 @ 104 Hz，±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>陀螺仪 @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>启用嵌入式中断</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>唤醒阈值（中低灵敏度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>无持续时间滤波（响应快速的唤醒）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>将唤醒事件路由到 INT1</td></tr>
  </table>
</div>

**休眠/唤醒流程：**

1. **活动状态** —— 屏幕点亮，背光 PWM 为 160。IMU 数据和电池电压定期刷新。倒计时计时器显示距离自动休眠剩余的秒数。
2. **自动休眠** —— 在 8 秒无活动后，示例程序会关闭背光，显示“Sleeping... Pick up device to wake”消息，通过 `esp_sleep_enable_gpio_wakeup()` 将 D14 配置为唤醒源，并让 ESP32 进入轻睡眠。
3. **唤醒** —— 当用户拿起开发板时，IMU 检测到运动并将 D14 拉高。ESP32 从轻睡眠中唤醒并重新绘制 UI。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>强制休眠</td></tr>
    <tr><td>USR2</td><td>D7</td><td>强制唤醒</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个仪表盘，包括电源状态、运动数据和倒计时计时器。让开发板静止 8 秒——它会自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== XIAO ESP32-S3 Plus 1.14 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时运动数据。静止 8 秒后，屏幕熄灭，ESP32-S3 进入轻睡眠。拿起设备后，屏幕会在不到一秒的时间内恢复，并且唤醒计数器会递增。

---

## 麦克风与扬声器

1.14'' IPS Display 板载一个用于音频输入的 **PDM（脉冲密度调制）数字麦克风**，以及用于驱动外部扬声器/功放的 I2S 输出焊盘。本节展示两个演示：一个是麦克风输入的实时 **Voice Bar** 可视化（无需额外硬件），另一个是 **Flash Recorder**，可将音频录制到板载 Flash，并通过外部 I2S 功放回放。

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM 时钟输出到麦克风</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

### 演示 1：Voice Bar

该演示将 PDM 麦克风的实时音频输入可视化为动态均衡器风格的波形和分段音量条。对着板载麦克风说话、鼓掌或吹气，观察音量条即时响应——无需任何外部硬件。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 工作原理

该示例通过 ESP32-S3 的 I2S 外设（配置为 **PDM RX 模式**）采集板载 PDM 麦克风，使用 ESP-IDF v5 驱动 API（`driver/i2s_pdm.h`）。这需要 **Espressif 提供的 esp32 Boards 3.x**——来自 2.x 内核的旧版 `i2s_config_t` API 将无法编译。

:::note
ESP-IDF v5 API（`i2s_new_channel()` / `i2s_channel_read()`）与本演示的 nRF52840 版本不同，后者使用 nRF52 的 `PDM` 库。如果你正在移植 nRF52840 代码，必须完全替换 PDM 的初始化配置。
:::

麦克风以 **16 kHz 单声道**采样到 256 样本的 DMA 缓冲区（4 个描述符）。在 `loop()` 中，`i2s_channel_read()` 获取一个缓冲区，移除直流偏移，计算峰值幅度，并将信号降采样到 27 个区间用于波形可视化。还通过 `gpio_set_drive_capability()` 降低 PDM 时钟驱动能力，以减少 EMI/耦合噪声。

屏幕被划分为三个区域：

<div class="table-center">
  <table align="center">
    <tr><th>区域</th><th>位置</th><th>描述</th></tr>
    <tr><td><strong>波形</strong></td><td>顶部 (y=30–95)</td><td>27 柱均衡器可视化。原始采样被降采样，并以围绕中心基线对称的柱状条绘制。波形颜色跟随平滑后的音量变化——绿色 (&lt;50%)、黄色 (50–90%)、红色 (&gt;90%)。</td></tr>
    <tr><td><strong>百分比</strong></td><td>中部</td><td>大的数字音量百分比 (0–100%)，按颜色编码为绿色 (&lt;50%)、黄色 (50–90%)、红色 (&gt;90%)。</td></tr>
    <tr><td><strong>音量条</strong></td><td>底部 (y=130–225)</td><td>10 段条形（绿色/黄色/红色渐变）。根据来自 PDM 峰值的平滑音量进行更新。</td></tr>
  </table>
</div>

**信号处理：**

1. **I2S PDM RX** — `i2s_channel_read()` 获取 256 个 PDM 采样。示例程序移除直流偏移（均值），使峰值反映实际响度，然后计算峰值幅度。
2. **归一化** — 低于 `VOL_FLOOR` (20) 的峰值被视为静音。高于 `VOL_CEIL` (2400) 的值饱和为 100%。中间范围通过线性映射生成 0.0–1.0 的音量级别。
3. **指数平滑** — 显示的音量使用 20% 混合因子（`SMOOTH = 0.20`）进行平滑，以避免抖动。在静音期间，音量以每帧 6% 的速率衰减。
4. **差分渲染** — 只有在数值变化时才重绘音量条和百分比标签，从而将 SPI 传输量降到最低。

#### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_voice_bar.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当看到：

```
=== Voice Bar | XIAO ESP32-S3 Plus 1.14 ===
[MIC] PDM RX ready (ESP-IDF v5)
[MIC] ready
```

**步骤 5.** 对着麦克风说话、拍手或吹气。波形和音量条会实时响应。随着音量增加，百分比标签的颜色会发生变化。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

在静音时，波形是平的，音量条为空（0%）。对着麦克风说话时，均衡器柱状条会动画显示，同时音量条会从绿色逐渐填充到黄色再到红色。百分比标签会实时更新。

---

### 演示 2：Flash 录音机

该演示会将来自板载 PDM 麦克风的 5 秒音频录制到板载 Flash 存储中，然后通过连接到 I2S 输出的外部扬声器进行回放。按下一个按键进行录音，另一个按键进行播放。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 硬件连接

回放需要一个外部 **I2S 音频功放和扬声器**。该演示针对连接到开发板 I2S 输出焊盘的 **MAX98357A** 模块编写：

<div class="table-center">
  <table align="center">
    <tr><th>I2S 焊盘</th><th>XIAO 引脚</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

I2S 焊盘（3V3、GND、D11、D12、D13）暴露在显示板底部的扩展焊盘组上。

### 工作原理

**录音** — 板载 **PDM（脉冲密度调制）数字麦克风** 通过 ESP32-S3 的 I2S 外设在 PDM RX 模式下进行采样。在 ESP-IDF v5（Arduino core 3.3.11）上，这使用新的驱动 API（`driver/i2s_pdm.h`）。麦克风以 **16 kHz 单声道** 采集，使用 4 个 DMA 描述符，每个包含 256 帧。当你按下 **USR1** 时，示例程序会将 5 秒音频采样到 RAM 缓冲区，然后使用 `LittleFS` 将其作为 WAV 文件（`/REC_RAW.WAV`）写入板载 Flash。

在 PDM 麦克风启动后，示例程序会丢弃最初 **300 ms** 的采集数据作为预热数据，以减小录音开头的启动瞬态。

如果示例程序无法在 **7 秒** 内采集完所有采样，它会停止录音并显示 **"Mic capture timeout"**，而不是一直阻塞在录音循环中。

**回放** — 按下 **USR2** 会从 Flash 中读回 WAV 文件，并通过 I2S 外设在标准（Philips）立体声模式下从 D11/D12/D13 输出。单声道采样会复制到两个声道，并施加 `0.75×` 增益以避免削波。功放驱动一个小扬声器，这样你就可以听到录音。

**屏幕状态：**

<div class="table-center">
  <table align="center">
    <tr><th>状态</th><th>描述</th></tr>
    <tr><td><strong>就绪</strong></td><td>显示 "Flash Recorder" 标题以及 "USR1: record" 和 "USR2: play Flash WAV"（或 "No saved recording"）</td></tr>
    <tr><td><strong>预热</strong></td><td>在开始采集前显示 "Warming up mic..." 和 "Please wait"</td></tr>
    <tr><td><strong>录音中</strong></td><td>采集期间显示 "Capturing 5 seconds"（无实时进度）</td></tr>
    <tr><td><strong>错误</strong></td><td>当采集超过 7 秒时，显示 "Mic capture timeout" 和 "Try recording again"</td></tr>
    <tr><td><strong>已保存</strong></td><td>显示 "Done — Saved Flash WAV" 确认信息，然后返回到就绪状态</td></tr>
    <tr><td><strong>回放</strong></td><td>流式播放时显示 "Playing raw audio"，结束后显示 "Finished"</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 按上述说明将 MAX98357A 功放和扬声器连接到 I2S 焊盘。

**步骤 2.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_flash_record.ino`。

**步骤 3.** 选择开发板：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（使用 esp32 Boards **3.3.11**）。

**步骤 4.** 选择 **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**。

**步骤 5.** 选择正确的 **Port**，然后点击 **Upload**。

:::caution
录音机会将 WAV 文件存储在 `LittleFS` 中，而它使用的是 **SPIFFS** 分区。开发板的默认分区方案（`16M Flash (2MB APP/12.5MB FATFS)`）不包含 SPIFFS 分区，因此 `LittleFS.begin()` 会返回 `false`，屏幕上会显示 "Flash write failed / Check partition"。你**必须**选择上面的 SPIFFS 分区方案，否则录音将无法工作。
:::

**步骤 6.** 按下 **USR1 (D6)** 从板载麦克风录制 5 秒音频。录音期间，屏幕会显示 "Capturing 5 seconds"。

**步骤 7.** 按下 **USR2 (D7)** 通过扬声器回放录音。

:::note
录音存储在板载 Flash（`LittleFS`）中，因此可以在断电后保留——你可以录制一次，稍后再回放。再次录音会覆盖之前的文件。
:::

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

按下 USR1，屏幕会显示 "Capturing 5 seconds"。5 秒后会确认 WAV 已保存。按下 USR2，音频会通过连接的扬声器播放，同时屏幕显示回放状态。

---

## Grove I2C

1.14'' IPS 显示屏配备了一个专用的 **Grove I2C 接口**，通过标准 4 针 Grove 插座（GND / 3V3 / SDA / SCL）引出 D4（SDA）和 D5（SCL）。D4/D5 在内部与板载 IMU 共享。

<div class="table-center">
  <table align="center">
    <tr><th>Grove 引脚</th><th>XIAO 引脚</th><th>说明</th></tr>
    <tr><td>GND</td><td>GND</td><td>公共地</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>3.3V 电源输出</td></tr>
    <tr><td>SDA</td><td>D4</td><td>I2C 数据——与板载 IMU 共享</td></tr>
    <tr><td>SCL</td><td>D5</td><td>I2C 时钟——与板载 IMU 共享</td></tr>
  </table>
</div>

:::note
D4/D5 在 Grove 接口和板载 IMU 之间共享。IMU 的地址为 `0x6A`。连接外部 I2C 设备时，请确保其地址不会与该地址冲突。
:::

### 演示：SHT31 温湿度

该演示从插在 Grove I2C 接口上的 **Grove SHT31** 传感器读取温度和湿度，并在屏幕上显示读数。示例程序通过 I2C 使用 `Wire.h` 直接与传感器通信——无需 SHT31 库——并使用传感器的 CRC 校验每次读数。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 硬件连接

将一个 **Grove SHT31** 温湿度传感器插入 Grove I2C 接口。该传感器由 3.3V 供电，并通过 I2C 地址 `0x44` 通信：

<div class="table-center">
  <table align="center">
    <tr><th>Grove 引脚</th><th>XIAO 引脚</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### 工作原理

该示例通过 I2C（`Wire`）在地址 `0x44` 直接读取 SHT31：

1. **I2C 扫描** — 启动时扫描 I2C 总线并报告发现的每个设备。
2. **单次测量** — 发送高重复性单次测量命令（`0x24 0x00`，无时钟拉伸），等待 20 ms，然后读取 6 个字节：温度高/低字节 + CRC，湿度高/低字节 + CRC。
3. **CRC 校验** — 每个 16 位数值都会与其 CRC 字节进行校验；如果不匹配，则报告为错误（接线问题或模块损坏/噪声过大）。
4. **数值转换** — 将原始数值转换为温度（`-45 + 175 × raw / 65535` °C）和相对湿度（`100 × raw / 65535` %）。

显示屏通过 `Board_XIAO_1inch14_LCD<13, 12>` 和示例本地的 `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240，BGR 颜色顺序，反相）进行初始化，以确保颜色正确显示。屏幕会显示 “SHT31 OK” 以及实时温度和湿度；如果读取失败，则显示 “SHT31 ERROR” 和错误代码。

#### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_sht31_temperature_humidity.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 和正确的 **Port**，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
=== XIAO ESP32-S3 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

屏幕会显示 “SHT31 OK” 以及温度和湿度，每秒更新一次。如果传感器断开连接或 CRC 校验失败，屏幕会显示 “SHT31 ERROR” 和错误代码。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

屏幕上的温度和湿度每秒更新一次。对着传感器呼气，湿度读数会升高。

---

## 用户按键

1.14'' IPS 显示屏上有 **三个物理按键** 连接到 XIAO ESP32-S3 Plus：

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>逻辑</th><th>丝印标识</th><th>引出焊盘</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>低电平有效（按下 = LOW）</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>低电平有效（按下 = LOW）</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>低电平有效（按下 = LOW）</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### 读取按键

这三个按键在板上带有外部 1 KΩ 上拉电阻，示例代码还启用了 XIAO 的内部上拉（`INPUT_PULLUP`）。一个简单的轮询读取并带消抖的实现如下：

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
  pinMode(USR3, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(USR1) == LOW) {
    Serial.println("USR1 (D6) pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(USR2) == LOW) {
    Serial.println("USR2 (D7) pressed");
    delay(200);
  }
  if (digitalRead(USR3) == LOW) {
    Serial.println("USR3 (D19) pressed");
    delay(200);
  }
}
```

### 使用中断进行消抖

为了获得响应迅速且已消抖的按键处理，你可以使用 GPIO 中断并配合一个短暂的稳定延时：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  pinMode(D19, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D19), btn3Isr, FALLING);
}

void loop() {
  if (btn1Flag) {
    btn1Flag = false;
    delay(30); // debounce settling time
    if (digitalRead(D6) == LOW) {
      // handle USR1 press
    }
  }
  if (btn2Flag) {
    btn2Flag = false;
    delay(30);
    if (digitalRead(D7) == LOW) {
      // handle USR2 press
    }
  }
  if (btn3Flag) {
    btn3Flag = false;
    delay(30);
    if (digitalRead(D19) == LOW) {
      // handle USR3 press
    }
  }
}
```

### 出厂仪表盘中的默认行为

在预烧录的出厂固件中，按键映射如下（你可以在自己的代码中覆盖这些行为）：

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>循环切换屏幕亮度（100% → 75% → 50% → 25% → 0% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>切换屏幕关闭 / 恢复到上次亮度</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>在 "Hello,XIAO!" 和 "Seeed" 之间切换标题栏文字</td></tr>
  </table>
</div>

按键的引出焊盘（在板上标记为 U1、U2 和 U3）分别与 D6、D7 和 D19 相连，允许你在需要时连接外部按键。

---

## 电池电压检测

该示例通过 **D16** 读取板载电池分压电路，并在 1.14'' IPS 显示屏上以两行黄色实时显示：原始 D16 分压电压和计算得到的电池电压。它只显示电压读数；不会估算电池电量百分比，也不会报告充电状态。

**代码位置：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**电池电路：**

ESP32-S3 Plus 通过连接到 **D16** 的板载分压电路读取 LiPo 电池电压：

<div class="table-center">
  <table align="center">
    <tr><th>信号</th><th>ESP32-S3 引脚</th><th>功能</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>模拟输入，用于读取分压后的电池电压。内部连接到一个分压电路（316K / 160K）。<strong>请勿将此引脚用于外部连接。</strong></td></tr>
  </table>
</div>

**分压比：** R13 = 316 kΩ，R14 = 160 kΩ → **分压比 = (316 + 160) / 160 ≈ 2.975**

**读取过程：**

示例通过 `Board_XIAO_1inch14_LCD<13, 12>` 和示例本地的 `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240，BGR，invert = true）初始化显示屏，然后使用 `analogReadMilliVolts()` 在 12 位分辨率、11 dB 衰减下，以 700 µs 间隔对 **D16** 采样 12 次。它将这些样本求平均得到原始分压电压，再乘以分压比得到电池电压（`Calc = D16 × 2.975`），并将两者以两行居中的黄色文字绘制出来。只有当任一数值发生显著变化时（D16 ≥ 0.02 V 或 Calc ≥ 0.05 V），屏幕才会刷新。

:::note
没有任何充电状态信号连接到 ESP32-S3 的 GPIO。本示例仅显示电压读数；不会检测电池是否存在或充电状态，也不会估算电池电量百分比。
:::

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_114_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示两行黄色文字：原始 D16 分压电压和计算得到的电池电压。连接或断开 LiPo 电池（或 USB-C 线缆），即可观察数值变化。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>电压读数</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>电池连接器</strong>（背面）</div></td>
    </tr>
  </table>
</div>

屏幕在第一行显示原始的 D16 分压电压，在第二行显示计算得到的电池电压（`Calc`）。当连接 LiPo 电池时，`Calc` 近似等于电池端电压。在仅使用 USB 供电时也可能出现读数，因此仅凭 `Calc` 无法确认是否连接了电池。

该演示还每秒向串口监视器打印一行诊断信息，例如：

```
D16 1.39V | Calc 4.14V
```

---

## 资源

- **🗃️[PCB 设计文件]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[数据手册]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[演示]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — 所有功能演示都在 `code_GFX2/Function/114_ESP32/` 目录中

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
