---
description: 针对 XIAO 0.96'' IPS Display (nRF52840) 上每个板载外设的独立函数级演示。涵盖屏幕、IMU、PDM 麦克风、内部 Flash 录音与 I2S 音频回放、按键和电池。
title: 板载外设使用
sidebar_label: 功能
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 0.96
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/function_0.96_inch_display_nrf52840/
---

# 板载外设使用

本页汇总了 0.96'' IPS Display 上每个板载外设的独立函数级演示。每个小节都是自包含的——你可以直接选择符合自己使用场景的示例，而无需阅读其他部分。

:::tip
本页中的演示 GIF 为了缩短时长都经过了加速处理。
:::

:::note
本页所有演示都需要已按 [入门指南](/cn/getting_started_0.96_inch_display_nrf52840) 中说明安装好的 **Seeed nRF52 Boards (1.1.13)**，以及按下文说明手动安装的 **Seeed_GFX2** 库。
:::

- **Library Manager** —— 进入 **Sketch > Include Library > Manage Libraries...**，搜索并安装：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Quicksand, Wake</td></tr>
  </table>
</div>

- **Seeed_GFX2（手动安装）** —— 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到一个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，进入 **Sketch > Include Library > Add .ZIP Library...**，选择刚刚下载的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果改为手动安装，请先解压压缩包，将解压后的文件夹重命名为 `Seeed_GFX2`，再放入 `Documents/Arduino/libraries/`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个演示都通过一次 `display.begin<Board_XIAO_0inch96_LCD<38, 37>, Config_Seeed_0inch96_LCD_ST7789>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 80×160 分辨率、BGR 颜色顺序和旋转 2。Seeed_GFX2 使用保守的 10 MHz 硬件 SPI 驱动该面板，从而避免了旧示例中不得不使用软件 SPI 的信号裕度问题。
- 0.96'' IPS Display **没有触摸控制器和 SD 卡槽**，因此不需要任何触摸或 SD 库。
:::

## 获取演示代码

本页中的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A —— 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示中 **Code location** 行所示的文件夹。例如，本板的 GraphicTest 演示位于 `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B —— 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开该演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示在 0.96 英寸 ST7789 IPS 面板（80×160）上运行完整的图形基准测试，涵盖色条、直线、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 ST7789 IPS 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每种图元的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_0inch96_LCD<38, 37>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数直接使用裸 GPIO 号，因此 `<38, 37>` 即设置 RST=GPIO38、BL=GPIO37。**Panel Config** 预设了 80×160 分辨率、BGR 颜色顺序和旋转 2——无需 `driver.h` 或手动调用 `invertDisplay()`。Seeed_GFX2 使用保守的 10 MHz 硬件 SPI 驱动面板，从而避免了旧演示中被迫使用软件 SPI 的信号裕度问题。

:::note
**颜色顺序（BGR 面板）。** 这块 0.96 英寸面板在物理上交换了红色和蓝色通道。演示中对颜色做了相应别名处理（例如，线级的红色 `0xF800` 在屏幕上会显示为蓝色）。如果你编写自己的绘图代码，请使用演示中的颜色别名，或自行考虑 BGR 顺序——否则红色和蓝色会互换显示。
:::

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_096_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应能看到每个测试的计时输出：

```
=== XIAO nRF52840 Plus 0.96 graphic test ===
LCD: 80x160
Color bars: 13.67 ms
Lines: 1712.89 ms
Fast lines: 25.39 ms
Rectangles: 23.44 ms
Filled rects: 47.85 ms
Circles: 207.03 ms
Triangles: 166.99 ms
Round rects: 48.83 ms
Text: 539.06 ms
Pixel gradient: 1907.23 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案显示约一秒钟，然后开始下一个。当所有测试完成后，会出现 “Done! All tests OK” 屏幕。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Done!” 信息。重置开发板即可再次运行测试。

---

## IMU

0.96'' IPS Display 集成了一颗板载 6 轴 IMU（**LSM6DS3**），通过 D4/D5 上的 I2C 连接。**D14** 上的运动中断引脚支持硬件唤醒和手势检测。

下方两个演示都将 LSM6DS3 配置在 I2C 地址 **0x6A**。

<a id="imu-quicksand"></a>

### 演示 1：电子流沙

此演示将屏幕变成一个交互式流体模拟——金色沙粒会根据重力流动和沉降，而重力由板载 6 轴 IMU 测量。倾斜开发板，沙子会实时改变流动方向。

**代码位置：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该仿真在 80×160 屏幕上叠加了一个 **13×26 占用网格**，每个单元为 6×6 像素。大约有 **65 个粒子** 被放置在网格中，每个粒子具有位置、速度以及金色渐变颜色。

IMU 通过 I2C（D4/D5）在地址 `0x6A` 使用 Seeed Arduino LSM6DS3 库进行读取。原始加速度值经过低通滤波，用于推导重力向量。当你倾斜开发板时：

1. **重力向量更新** —— 加速度计数据通过指数移动平均进行平滑处理，以避免抖动。
2. **粒子速度** —— 每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流体中深度的逐粒子流动性系数。
3. **单元占用** —— 在流体中更深（相对于重力更接近“底部”）的粒子流动性更低，从而产生逼真的堆积效果。
4. **差分渲染** —— 只重绘粒子移入或移出的单元，最大限度减少 SPI 传输，使小屏幕上的动画保持流畅。

靠近表面的粒子流动自如（流动性更高）；埋得更深的粒子紧密堆积（流动性更低）—— 模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_096_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
LCD w=80 h=160
=== Electronic Quicksand 0.96 ===
imu.begin=0
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，金色沙粒会平滑流动。当保持水平时，沙子会沉积在屏幕底部。将开发板旋转 90 度，沙子会在一秒内流向新的“底部”。

---

### 演示 2：抬起唤醒

该演示实现了一个由 IMU 内置运动中断（连接到 **D14**）驱动的**屏幕休眠/唤醒系统**。在可配置的空闲时间后，屏幕会自动关闭（背光关闭 + nRF52 System ON 休眠），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用了 LSM6DS3 的**嵌入式唤醒事件检测器**——这是一项硬件特性，可在内部监测加速度计数据，当运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

**IMU 配置（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>寄存器</th><th>数值</th><th>用途</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>阻塞数据更新（BDU）+ 自动递增</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度计 @ 104 Hz，±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>启用嵌入式中断</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>唤醒阈值（中低灵敏度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>无持续时间滤波（响应快速的唤醒）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>将唤醒路由到 INT1</td></tr>
  </table>
</div>

**休眠/唤醒流程：**

1. **活动状态** —— 屏幕点亮，背光全亮，UI 每 250 ms 刷新一次，显示实时 IMU 数据。
2. **自动休眠** —— 在 8 秒无操作后，示例程序会关闭背光，显示 “Sleep — Move to wake” 消息，并进入 nRF52 System ON 休眠（带 RAM 保留的低功耗模式）。IMU 在 D14 上的唤醒中断在启动时已配置好，因此在休眠期间运动检测仍然有效。
3. **唤醒** —— 当用户拿起开发板时，IMU 检测到运动并将 D14 拉高。nRF52840 退出 System ON 休眠，重新点亮背光并重绘 UI —— 由于 System ON 休眠保留 RAM，LCD 和 IMU 的状态都会被保留。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>强制休眠</td></tr>
    <tr><td>USR2</td><td>D7</td><td>强制唤醒</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_096_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个紧凑的仪表盘，包括电源状态、运动数据和倒计时。让开发板保持静止——8 秒后会自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以观察启动和休眠/唤醒过程：

```
=== XIAO nRF52840 Plus 0.96 IMU Wake Demo ===
[LCD] OK 0.96 ST7789 80x160
[IMU] LSM6DS3 begin=0
[IMU] CTRL1_XL    = 0x40
[IMU] TAP_CFG     = 0x80
[IMU] MD1_CFG     = 0x20
[IMU] WAKE_UP_THS = 0x05
[IMU] D14 wake interrupt OK
[IMU] D14 pin state = 0
[BOOT] done. Screen should be on.
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[SLEEP] loops=1025 D14=0 awake=N
[WAKE] D14 pin HIGH (polled)
[WAKE] src=0xA
[WAKE] reason=IMU_D14 wakeCount=8 sleptMs=4142 sleepLoops=1936 wakeSrc=0xA
[WAKE] src=0x0
```

`sleptMs`、`sleepLoops` 和 `wakeSrc` 字段会根据开发板休眠的时长以及触发唤醒的手势而变化。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时运动数据。静止 8 秒后，屏幕变暗，nRF52840 进入低功耗休眠。拿起设备后，屏幕会立即恢复，并且唤醒计数器会递增。

---

## 麦克风与扬声器 — 闪存录音机

该演示将 0.96'' IPS Display 变成一个微型录音机。按下 USR1 将板载 PDM 麦克风的短音频片段录制到 nRF52840 的内部闪存文件系统中，然后按下 USR2 通过外部 I2S 功放回放。

0.96'' IPS Display 的 PDM 麦克风连接到与其他 XIAO 显示板相同的引脚：

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM 时钟输出到麦克风</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

**代码位置：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 硬件连接

回放端需要一个外部 I2S 功放。该演示针对 **MAX98357A** 模块编写，并连接到 0.96'' IPS Display 的 I2S 测试焊盘：

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 引脚</th><th>I2S 信号</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>电源</td><td>VIN</td></tr>
    <tr><td>GND</td><td>地</td><td>GND</td></tr>
    <tr><td>D11</td><td>I2S_SD（数据输出）</td><td>DIN</td></tr>
    <tr><td>D12</td><td>I2S_SCK（位时钟）</td><td>BCLK</td></tr>
    <tr><td>D13</td><td>I2S_WS (word select)</td><td>LRC</td></tr>
  </table>
</div>

:::caution
在连接功放和扬声器之前，请先断开 USB 供电。将扬声器连接到 MAX98357A 的 **SPK+** 和 **SPK-** 端子——**不要**将任一扬声器线连接到 GND。
:::

:::note
0.96'' IPS Display **没有** SD 卡槽，因此本示例将录音保存到 nRF52840 的**内部闪存文件系统**（InternalFS）中。InternalFS 大约为 **28 KB**——本教程以 16 kHz 采集 11,200 个单声道采样点，生成约 22 KB 的 PCM 音频，录音时长约为 0.7 秒。
:::

### 工作原理

**显示：**

屏幕由 **Seeed_GFX2** 驱动，使用 `Board_XIAO_0inch96_LCD<38, 37>` 和 `Config_Seeed_0inch96_LCD_ST7789`（80×160，BGR，旋转 2），通过 10 MHz 硬件 SPI 通信。

**录音（USR1）：**

1. 示例程序以**16 kHz、单通道**启动 PDM 外设，并通过 ISR（`onPdmData`）将原始采样捕获到一个 11200 采样点的缓冲区中（≈ 0.7 秒，≈ 22 KB PCM）。
2. 进度界面实时显示录音百分比和已用时间。
3. 当缓冲区填满后，示例程序在前面添加一个 44 字节的 WAV 头，并将文件 `/REC_RAW.WAV` 写入 InternalFS。

**回放（USR2）：**

1. 从 InternalFS 中重新加载该 WAV 文件。
2. 示例程序以**主机模式**、32× 比率（≈ 16 kHz LRCK）驱动 nRF52840 的 I2S 外设，将 16 位立体声帧以 **0.75× 增益**发送到 MAX98357A（每个单声道采样会复制到两个声道）。
3. 双缓冲（乒乓）机制保持音频流不中断，直到片段结束。

**按键：**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>录制新片段（覆盖之前的录音）</td></tr>
    <tr><td>USR2</td><td>D7</td><td>回放已保存的片段</td></tr>
  </table>
</div>

:::note
**PDM**、**Adafruit TinyUSB**、**Adafruit LittleFS** 和 **InternalFileSystem** 库已随 **Seeed nRF52 Boards 1.1.13** 一同打包——不要再从 Library Manager 单独安装其它版本。本教程不使用 SdFat。
:::

### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_096_flash_record.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 屏幕会显示“Recorder”空闲界面。按下 **USR1**——录音时红色 “REC” 进度条会逐渐填充。完成后，它会保存 WAV 文件并返回空闲界面。

**步骤 5.** 按下 **USR2**——片段会通过已连接的 MAX98357A 扬声器播放，屏幕显示 “Playing...”。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

按下 USR1 后，红色进度条会填充到 100%，并保存片段。按下 USR2 会通过 MAX98357A 回放录音。WAV 文件存储在 InternalFS 中，在复位或断电重启后仍然可用。再次按下 USR1 录音会覆盖之前的文件。

:::note
本教程已在 XIAO nRF52840 Plus、0.96'' IPS Display、MAX98357A 功放和外接扬声器上完成编译、烧录和硬件测试。
:::

---

## 用户按键

0.96'' IPS Display 上有**两个物理按键**连接到 XIAO nRF52840 Plus：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>低电平有效（按下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>低电平有效（按下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

:::note
与 1.14'' IPS Display 不同，0.96'' IPS Display **没有第三个按键**（D19 上没有 USR3）。它也没有专用的按键引出焊盘。
:::

### 读取按键

板载示例使用内部上拉配置按键：

```cpp
const int USR1 = D6;
const int USR2 = D7;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
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
}
```

### 使用中断消抖

为了在不阻塞主循环的情况下实现灵敏且带消抖的按键处理，可以使用引脚变化中断：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
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
}
```

### 出厂 Dashboard 中的默认行为

在预烧录的出厂固件中，按键映射如下（你可以在自己的代码中覆盖这些行为）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>循环切换屏幕亮度（100% → 75% → 50% → 25% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>切换屏幕背光 ON/OFF</td></tr>
  </table>
</div>

当屏幕关闭（通过 USR2 切换）时，再次按下 USR2 会将其恢复到之前的非零亮度等级。

---

## 电池状态

本示例会在 0.96'' IPS Display 上显示电池状态——带电量等级和充电状态的电池图标。它会检测是否实际连接了 LiPo 电池，并显示三种状态之一：**USB PWR**（无电池）、**百分比**（仅电池供电）或 **charging**（USB + 电池）。

0.96'' IPS Display **没有专用的电池 ADC 引脚**（D16 未连接）——电池电压通过 XIAO nRF52840 Plus 模组的内部分压器测量。

**代码位置：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**显示：**

屏幕由 **Seeed_GFX2** 驱动，使用 `Board_XIAO_0inch96_LCD<38, 37>` 和 `Config_Seeed_0inch96_LCD_ST7789`（80×160，BGR，旋转 2），通过 10 MHz 硬件 SPI 通信。

**电池电路：**

nRF52840 Plus 使用**三个 GPIO 引脚**构成完整的电池监控系统：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>电池分压器使能。低电平有效——拉低以使能分压器，然后释放为高电平（高阻态）以节省功耗。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>读取分压后电池电压的模拟输入。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充电状态指示。低电平有效——当连接充电器且电池正在充电时读取为 LOW。</td></tr>
  </table>
</div>

**检测：**

在 USB-C 供电下，静态 VBAT 电压无法判断电池是否存在——即使没有接电池，充电器的 BAT 节点看起来也像一个真实的锂电池。因此示例程序首先学习一个**仅 USB 的基线**，然后只有在 VBAT 持续下降后才确认电池插入，并在出现带噪声/跳变的读数且 `~CHG` 变为 HIGH 时确认电池移除。这与出厂 Dashboard 的检测逻辑一致。

**图标状态：**

- **无电池**——灰色轮廓电池，带红色叉号，标注为 **USB PWR**。
- **有电池**——白色轮廓电池，内部为彩色填充（按百分比分为绿色 / 黄色 / 红色），标注**百分比**和**电压**。
- **充电中**——青色填充并带闪电图标，标注百分比和电压。

:::note
`~CHG` 引脚是通过 nRF52840 的**原始 GPIO 寄存器**（`nrf_gpio_cfg_input()` 和 `NRF_P0->IN`）读取的，而不是通过 `digitalRead()`。在 Arduino API 中，引脚编号遵循开发板包的映射，其中 `digitalRead(17)` 实际读取的是 **P0.07**（6D IMU 的 I2C 数据线），而不是 P0.17。这里的常量 `14` 和 `17` 是**原始 Nordic P0.x 引脚编号**（P0.14 和 P0.17），这正是寄存器调用所期望的编号。
:::

:::note
该演示使用的是工厂校准的 **499 kΩ** 低端电阻（分压比约为 3.004），而不是 510 kΩ 的标称值。该分压器集成在 XIAO nRF52840 Plus 模组本体中，而不是在显示板上。P0.14 使能引脚为**低电平有效**：将其驱动为低电平以启用分压器，然后将其释放为高阻态（输入）以在不测量电池时将静态电流消耗降到最低。
:::

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_096_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示带有当前状态的电池图标。插入或拔出 LiPo 电池（或 USB-C 线缆），观察图标在三种状态之间切换。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（无电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（仅电池）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + 电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

在没有电池的情况下，屏幕会显示一个带红色叉号的灰色电池，并带有 **USB PWR** 标签。插入 LiPo 电池后，图标会切换为带有百分比和电压的彩色填充。电池存在时插入 USB-C，填充颜色会变为青色并带有闪电符号，表示正在充电。

该演示还会每 500 ms 向串口监视器打印一行诊断信息，例如：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## 资源

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — 所有 Function 演示都在 `code_GFX2/Function/096_nRF52840/` 目录中

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
