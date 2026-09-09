---
description: 针对 XIAO 1.14'' IPS Display（nRF52840）上每个板载外设的独立函数级演示。涵盖屏幕、IMU、PDM 麦克风、内部 Flash 录音和 I2S 音频回放、按键、电池以及 Grove I2C。
title: 板载外设使用
sidebar_label: 功能
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 1.14
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 2
last_update:
  date: 08/12/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/function_1.14_inch_display_nrf52840/
---

# 板载外设使用

本页收集了 1.14'' IPS Display 上每个板载外设的独立函数级演示。每一节都是自包含的——你可以直接选择与你的使用场景匹配的那一节，而无需阅读其他内容。

:::tip
本页中的演示 GIF 为了缩短时长都进行了加速播放。
:::

:::note
本页中的所有演示都需要已按 [入门指南](/cn/getting_started_1.14_inch_display_nrf52840) 中说明安装好的 **Seeed nRF52 Boards (1.1.13)**，以及按下文说明手动安装的 **Seeed_GFX2** 库。
:::

- **库管理器（Library Manager）** — 进入 **Sketch > Include Library > Manage Libraries...**，搜索并安装：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU 演示</td></tr>
  </table>
</div>

- **Seeed_GFX2（手动安装）** — 此库在库管理器中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到一个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，进入 **Sketch > Include Library > Add .ZIP Library...**，选择下载好的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果改为手动安装，请先解压压缩包，并在将其放入 `Documents/Arduino/libraries/` 之前，将解压后的文件夹重命名为 `Seeed_GFX2`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个演示都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 135×240 分辨率、颜色顺序和反色设置。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，演示使用 `Board_XIAO_1inch14_LCD<38, 37>`（RST=38，BL=37）配合 `Config_Seeed_1inch14_LCD_ST7789`（135×240）。部分演示会定义一个草图本地的 `Config_XIAO_1inch14_LCD_ST7789_BGR` 覆盖配置，以使用 BGR 颜色顺序。
- **IMU** 演示使用上文安装的 **Seeed Arduino LSM6DS3** 库。
- 1.14'' IPS Display **没有触摸控制器，也没有 SD 卡槽**，因此不需要任何触摸或 SD 相关库。
:::

:::note
**Flash Recorder** 教程使用的 **PDM**、**Adafruit TinyUSB**、**Adafruit LittleFS** 和 **InternalFileSystem** 库已经与 **Seeed nRF52 Boards 1.1.13** 一同打包——不要再从库管理器单独安装其它版本。

录音会存储在 nRF52840 的 **内部 Flash 文件系统** 中。该显示屏没有 SD 卡槽，本教程也不使用 SdFat。
:::

## 获取演示代码

本页中的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示都是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A — 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示 **Code location** 行中所示的文件夹。例如，本板子的 GraphicTest 演示位于 `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B — 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开该演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示会在 1.14 英寸 ST7789 IPS 面板（135×240）上运行完整的图形基准测试，涵盖色条、线段、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用它来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 ST7789 IPS 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每一种的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_1inch14_LCD<38, 37>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数使用裸 GPIO 编号，因此 `<38, 37>` 表示 RST=GPIO38、BL=GPIO37。**Panel Config** 预设了 135×240 分辨率、颜色顺序以及反色设置（`invert = true`），因此无需 `driver.h` 或手动调用 `invertDisplay()`。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当能看到每个测试的计时输出：

```
LCD width: 135
LCD height: 240
Color bars: 34.18 ms
Lines: 2599.61 ms
Fast lines: 57.62 ms
Rectangles: 44.92 ms
Filled rectangles: 125.98 ms
Circles: 291.02 ms
Triangles: 289.06 ms
Round rectangles: 95.70 ms
Text: 1416.02 ms
Pixel gradient: 4774.42 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案显示约一秒钟，然后开始下一个。当所有测试完成后，会出现一个 “Finished” 结束画面。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Finished” 提示信息。重置开发板即可再次运行测试。

---

## IMU

1.14'' IPS Display 搭载了一个通过 D4/D5 I2C 连接的板载 6 轴 IMU（LSM6DS3）。**D14** 上的运动中断引脚支持硬件唤醒和手势检测。

下方两个演示都使用 I2C 地址为 **0x6A** 的 LSM6DS3。

<a id="imu-quicksand"></a>

### 演示 1：电子流沙

此演示将屏幕变成一个交互式流体模拟——金色沙粒会根据板载 6 轴 IMU 测得的重力方向流动和沉降。倾斜开发板，沙子就会实时改变流动方向。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该仿真在 135×240 屏幕上叠加了一个 **22×40 占用网格**，其中每个单元为 6×6 像素。在网格中放置大约 **150 个粒子**，每个粒子具有位置、速度以及金色渐变颜色。

IMU 通过 I2C（D4/D5）使用 Seeed Arduino LSM6DS3 库在地址 `0x6A` 处进行读取。原始加速度值经过低通滤波，用于推导重力向量。当你倾斜开发板时：

1. **重力向量更新** — 使用指数移动平均对加速度计数据进行平滑处理，以避免抖动。
2. **粒子速度** — 每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流体中深度的每粒子流动性系数。
3. **单元占用** — 在流体中更深（相对于重力更接近“底部”）的粒子流动性降低，从而产生逼真的堆积效果。
4. **差分渲染** — 只重绘粒子移入或移出的单元，最大限度减少 SPI 传输并保持动画流畅。

靠近表面的粒子自由流动（流动性更高）；埋得更深的粒子紧密堆积（流动性更低）——模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== Electronic Quicksand 1.14 ===
imu.begin=0
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，金色沙粒会平滑流动。当保持水平时，沙子会沉积在屏幕底部。将开发板旋转 90 度，沙子会在一秒内流向新的“底部”。

---

### 演示 2：抬起唤醒

该演示实现了一个由 IMU 内置运动中断（引脚 **D14**）驱动的**屏幕休眠/唤醒系统**。屏幕会在可配置的空闲时间后自动关闭（背光关闭 + nRF52 System ON 休眠），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用 LSM6DS3 的**嵌入式唤醒事件检测器**——这是一项硬件特性，可在内部监测加速度计数据，当运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

**IMU 配置（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>寄存器</th><th>数值</th><th>用途</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度计 @ 104 Hz，±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>启用嵌入式中断</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>唤醒阈值（中低灵敏度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>无持续时间滤波（响应快速的唤醒）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>将唤醒信号路由到 INT1</td></tr>
  </table>
</div>

**休眠/唤醒流程：**

1. **活动状态** — 屏幕点亮，背光全亮，UI 每 250 ms 刷新一次实时 IMU 数据。倒计时计时器显示距离自动休眠剩余的秒数。
2. **自动休眠** — 在空闲超时后，示例程序会关闭背光，显示“Sleeping... Pick up device to wake”消息，并进入 nRF52 System ON 休眠（带 RAM 保留的低功耗模式）。IMU 在 D14 上的唤醒中断已在启动时配置，因此在休眠期间运动检测仍然有效。
3. **唤醒** — 当用户拿起开发板时，IMU 检测到运动并将 D14 拉高。nRF52840 退出 System ON 休眠，恢复背光并重绘 UI。LCD 和 IMU **不会**被重新初始化——System ON 休眠会保留 RAM 和外设配置，因此二者都会保持启动时应用的设置。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>强制休眠</td></tr>
    <tr><td>USR2</td><td>D7</td><td>强制唤醒</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个包含电源状态、运动数据和倒计时计时器的仪表盘。让开发板保持静止——在空闲时间结束后它会自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以观察休眠/唤醒过程：

```
LCD: 135x240
[IMU] Seeed LSM6DS3 begin=0
[IMU] D14 wake interrupt OK
[BOOT] done. Screen should be on.
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=3568 sleepLoops=0
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=1378 sleepLoops=439
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时运动数据。在静止一段空闲时间后，屏幕变暗，nRF52840 进入低功耗休眠。拿起设备后，屏幕会立即恢复，并且唤醒计数器会递增。

---

## 麦克风与扬声器

1.14'' IPS Display 采用与 1.47" 版本相同的 PDM 数字麦克风，并连接到相同的引脚：

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>输出到麦克风的 PDM 时钟</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

### 演示 1：语音音量条

该演示将 PDM 麦克风的实时音频输入可视化为动态均衡器风格的波形和分段音量条。对板载麦克风说话、鼓掌或吹气，观察音量条即时响应。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 工作原理

该示例通过 `PDM` 库（随 Seeed nRF52 Boards 一起提供）以 16 kHz、单通道的方式使用 nRF52840 的 PDM 外设。ISR（`onPDMdata`）将原始 PDM 采样捕获到一个 256 采样的环形缓冲区中，并计算峰值幅度。

屏幕被划分为三个区域：

<div class="table-center">
  <table align="center">
    <tr><th>区域</th><th>位置</th><th>描述</th></tr>
    <tr><td><strong>波形</strong></td><td>顶部（y=30–95）</td><td>27 柱均衡器可视化。对原始采样进行降采样，并围绕中心基线绘制为对称柱状图。波形颜色由与音量条和百分比标签相同的平滑音量驱动——绿色（&lt;50%）、黄色（50–90%）、红色（&gt;90%）。</td></tr>
    <tr><td><strong>百分比</strong></td><td>中部</td><td>大型数字音量百分比（0–100%），颜色编码为绿色（&lt;50%）、黄色（50–90%）、红色（&gt;90%）。</td></tr>
    <tr><td><strong>音量条</strong></td><td>底部（y=130–225）</td><td>10 段条（绿色/黄色/红色渐变）。使用来自 PDM 峰值的平滑音量进行更新。</td></tr>
  </table>
</div>

**信号处理：**

1. **PDM ISR** — `onPDMdata()` 以约 62 Hz（16000 / 256）触发。它读取原始采样，计算峰值幅度，并下采样为 27 个桶用于波形可视化。
2. **归一化** — 峰值低于 10 被视为静音。高于 1500 的值饱和为 100%。中间范围通过线性映射生成 0.0–1.0 的音量级别。
3. **指数平滑** — 为避免抖动，显示的音量使用 20% 混合因子（`SMOOTH = 0.20`）进行平滑。在静音期间，音量以每帧 6% 的速率衰减。
4. **差分渲染** — 只有在数值变化时才重绘音量条和百分比标签，从而将 SPI 流量降到最低。

#### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_voice_bar.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
[MIC] ready
```

**步骤 5.** 对着麦克风说话、拍手或吹气。波形和音量条会实时响应。随着音量增加，百分比标签的颜色会发生变化。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

在静音时，波形是平的，音量条为空（0%）。对着麦克风说话时，均衡器条会动画显示，同时音量条会从绿色逐渐填充到黄色再到红色。百分比标签会实时更新。

### 演示 2：带 I2S 回放的 Flash 录音机

此演示将板载 PDM 麦克风采集的一小段音频录制到 nRF52840 的**内部 Flash 文件系统**中，然后通过外部 I2S 功放和扬声器回放：

- **USR1** 从板载 PDM 麦克风录音。
- 录音为 **16 kHz、16 位、单声道**。
- 每段录音约 **0.7 秒**——11,200 个采样（22,400 字节 PCM）。
- 录音以 **`/REC_RAW.WAV`** 的形式保存在内部 Flash 文件系统中。
- **USR2** 通过外部 **MAX98357A** 和扬声器回放录音。
- 此演示已在 XIAO nRF52840 Plus 上使用 **Seeed nRF52 Boards 1.1.13** 编译、烧录并通过硬件验证。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 硬件连接

回放需要一个外部**I2S 音频功放和扬声器**。本演示针对连接到开发板 I2S 输出焊盘的 **MAX98357A** 模块编写：

<div class="table-center">
  <table align="center">
    <tr><th>显示板</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td></tr>
    <tr><td>D11 / I2S_SD</td><td>DIN</td></tr>
    <tr><td>D12 / I2S_SCK</td><td>BCLK</td></tr>
    <tr><td>D13 / I2S_WS</td><td>LRC / WS</td></tr>
  </table>
</div>

将扬声器连接到 MAX98357A 的 **SPK+** 和 **SPK-** 端子。**不要**将任一扬声器线连接到 GND——MAX98357A 是桥接负载（BTL）功放，因此两个扬声器端子都必须连接到 SPK 输出。

:::caution
在连接功放和扬声器之前，请先断开 USB 供电。
:::

#### 工作原理

- PDM 麦克风使用 **D0（CLK）** 和 **D1（DATA）**。
- `PDM` 库以 **16 kHz 单声道**采集麦克风数据。
- WAV 文件由 **44 字节文件头**加上 **22,400 字节 PCM** 数据组成。
- 内部 Flash 文件系统（InternalFS）只有约 **28 KB**，这将每次录音限制在大约 **0.7 秒**。
- 回放使用 nRF52840 的 **I2S 硬件外设**，Philips I2S 格式，**16 位、立体声**输出。
- 单声道采样会复制到左右两个声道。
- I2S 引脚为 **D11**、**D12** 和 **D13**。

#### 运行教程

**步骤 1.** 断开 USB 供电，并按上图连接 MAX98357A 和扬声器。

**步骤 2.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_flash_record.ino`。

**步骤 3.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 4.** 编译并上传示例程序。

**步骤 5.** 按下 **USR1**，并立刻对着板载麦克风说话，大约 **0.7 秒**。

:::tip
录音在你按下 **USR1** 的那一刻就开始——不要等红色进度条出现。0.7 秒的时间窗口是从按下 **USR1** 的那一刻开始计时的，因此请立即开始说话，否则会错过录音开头。
:::

**步骤 6.** 等待屏幕显示 **Saved WAV**。

**步骤 7.** 按下 **USR2**，扬声器会回放你的录音。

#### 预期结果

- 启动时屏幕显示 **Flash Recorder**。
- 当不存在录音时，屏幕显示 **No recording**。
- 录音过程中，屏幕显示进度读数。
- 保存完成后，屏幕显示 **Saved WAV**。
- 按下 **USR2**，你会通过扬声器听到录音。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_flash_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

---

## Grove I2C

1.14'' IPS 显示屏配备了一个专用的 **Grove I2C 接口**，通过标准 4 针 Grove 插座（GND / 3V3 / SDA / SCL）引出 D4（SDA）和 D5（SCL）。与 1.47" 版本中 D4/D5 还与触摸控制器共享不同，1.14" 显示屏的 D4/D5 只与板载 IMU 共享（它没有触摸控制器）。

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

此演示从插在 Grove I2C 接口上的 **Grove SHT31** 传感器读取温度和湿度，并在屏幕上显示读数。示例程序通过 I2C 使用 `Wire.h` 直接与传感器通信——不需要 SHT31 库——并使用传感器的 CRC 校验每次读数。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 硬件连接

将 **Grove SHT31** 温湿度传感器插入 Grove I2C 接口。传感器使用 3.3V 供电，并在 I2C 地址 `0x44` 上通信：

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

示例程序通过 I2C（`Wire`）在地址 `0x44` 直接读取 SHT31：

1. **I2C 扫描** — 启动时扫描 I2C 总线并报告发现的每个设备。
2. **单次测量** — 发送高重复性单次测量命令（`0x24 0x00`，无时钟拉伸），等待 20 ms，然后读取 6 个字节：温度高/低字节 + CRC，湿度高/低字节 + CRC。
3. **CRC 校验** — 每个 16 位数值都会与其 CRC 字节进行校验；若不匹配，则报告为错误（接线问题或模块损坏/噪声过大）。
4. **转换** — 将原始数值转换为温度（`-45 + 175 × raw / 65535` °C）和相对湿度（`100 × raw / 65535` %）。

显示屏使用 `Board_XIAO_1inch14_LCD<38, 37>` 和草稿本地的 `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240，BGR 颜色顺序，反相）进行初始化，以确保颜色正确显示。屏幕会显示 “SHT31 OK” 以及实时温度和湿度；如果读取失败，则显示 “SHT31 ERROR” 和错误代码。

#### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_sht31_temperature_humidity.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
=== XIAO nRF52840 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

屏幕会显示 “SHT31 OK” 以及温度和湿度，每秒更新一次。如果传感器断开连接或 CRC 校验失败，屏幕会显示 “SHT31 ERROR” 和错误代码。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

屏幕上的温度和湿度每秒更新一次。对着传感器呼气，湿度读数会升高。

---

## 用户按键

1.14'' IPS 显示屏上有 **三个物理按键** 连接到 XIAO nRF52840 Plus。所有三个按键在板上都带有外部 **1 KΩ 上拉电阻**，因此你可以将相应引脚配置为 `INPUT`（不需要内部上拉）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th><th>Breakout Pad</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>低电平有效（按下 = LOW）</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>低电平有效（按下 = LOW）</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>低电平有效（按下 = LOW）</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### 读取按键

由于板上已经有外部 1 KΩ 上拉，你可以通过简单的直接读取来读取按键：

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  // External 1K pull-up on the board — no internal pull-up needed.
  pinMode(USR1, INPUT);
  pinMode(USR2, INPUT);
  pinMode(USR3, INPUT);
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

### 使用中断消抖

为了在不阻塞主循环的情况下实现响应迅速且已消抖的按键处理，你可以使用引脚变化中断：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT);
  pinMode(D7, INPUT);
  pinMode(D19, INPUT);
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

### 工厂 Dashboard 中的默认行为

在预烧录的工厂固件中，按键映射如下（你可以在自己的代码中覆盖这些行为）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>循环切换屏幕亮度（100% → 75% → 50% → 25% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>切换屏幕关闭 / 恢复到上次亮度</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>在 "Hello,XIAO!" 和 "Seeed" 之间切换标题栏文字</td></tr>
  </table>
</div>

按键引出焊盘（在板上标记为 U1、U2 和 U3）分别与 D6、D7 和 D19 相连，使你可以在需要时连接外部按键。

---

## 电池状态

本示例会在 1.14'' IPS 显示屏上显示电池状态——带有电量等级和充电状态的电池图标。它会检测是否实际连接了 LiPo 电池，并显示三种状态之一：**USB PWR**（无电池）、**percentage**（仅电池）或 **charging**（USB + 电池）。

1.14'' IPS 显示屏内置了一个电池电压测量电路，并连接到 XIAO nRF52840 Plus。

**代码位置：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**显示：**

屏幕由 **Seeed_GFX2** 驱动，使用 `Board_XIAO_1inch14_LCD<38, 37>` 和 `Config_Seeed_1inch14_LCD_ST7789` 的 BGR 覆盖配置（135×240，BGR，旋转 2），通过 10 MHz 硬件 SPI 通信。

**电池电路：**

nRF52840 Plus 使用 **三个 GPIO 引脚** 组成一个完整的电池监测系统：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>电池分压器使能。低电平有效——设为 LOW 以使能分压器，然后释放为 HIGH（高阻态）以节省功耗。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>模拟输入，用于读取分压后的电池电压。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充电状态指示。低电平有效——当连接充电器且电池正在充电时读取为 LOW。</td></tr>
  </table>
</div>

**检测：**

在 USB-C 供电下，仅通过静态 VBAT 电压无法判断电池是否存在——即使没有连接电池，充电器的 BAT 节点看起来也像一个真实的锂电池。因此示例程序首先学习一个 **仅 USB 的基线值**，然后只有在 VBAT 持续向下偏移后才确认电池插入，并在出现噪声/跳变读数且 `~CHG` 变为 HIGH 时确认电池移除。这与工厂 Dashboard 的检测逻辑一致。

**图标状态：**

- **无电池** —— 灰色轮廓电池图标带红色叉号，标注为 **USB PWR**。
- **电池存在** —— 白色轮廓电池图标，内部填充颜色（根据百分比为绿色 / 黄色 / 红色），标注 **百分比** 和 **电压**。
- **充电中** —— 青色填充并带有闪电图标，标注百分比和电压。

:::note
`~CHG` 引脚是通过 nRF52840 的 **原始 GPIO 寄存器**（`nrf_gpio_cfg_input()` 和 `NRF_P0->IN`）读取的，而不是通过 `digitalRead()`。在 Arduino API 中，引脚编号遵循开发板包的映射，其中 `digitalRead(17)` 实际读取的是 **P0.07**（6D IMU 的 I2C 数据线），而不是 P0.17。这里的常量 `14` 和 `17` 是 **Nordic 原始 P0.x 引脚编号**（P0.14 和 P0.17），这正是寄存器调用所期望的编号。
:::

:::note
该示例使用工厂校准的 **499 kΩ** 低端电阻（分压比约为 3.004），而不是标称的 510 kΩ。分压器集成在 XIAO nRF52840 Plus 模组本身，而不是显示板上。P0.14 使能引脚为 **低电平有效**：将其驱动为 LOW 以使能分压器，然后释放为高阻态（INPUT），以在不测量电池时将静态电流消耗降到最低。
:::

### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_114_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示带有当前状态的电池图标。插拔 LiPo 电池（或 USB-C 线缆），观察图标在三种状态之间切换。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（无电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（仅电池）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + 电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

在没有电池的情况下，屏幕会显示一个带红色叉号的灰色电池图标，并标有 **USB PWR** 标签。插入 LiPo 电池后，图标会切换为彩色填充，并显示百分比和电压。当电池存在时插入 USB-C，填充会变为青色并带有闪电符号，表示正在充电。

该演示还会每 500 ms 向串口监视器打印一行诊断信息，例如：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## 资源

- **🗃️[PCB 设计文件]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[数据手册]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[演示]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — 所有功能演示都在 `code_GFX2/Function/114_nRF52840/` 目录中

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

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
