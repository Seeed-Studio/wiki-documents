---
description: XIAO 0.96'' IPS Display（ESP32-S3）板载各外设的独立功能级演示示例。涵盖屏幕、IMU、PDM 麦克风和 I2S 音频（闪存录音机）、按键以及电池电压检测。
title: 板载外设使用
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/cn/function_0.96_inch_display_esp32s3/
---

# 板载外设使用

本页汇总了 0.96'' IPS Display 上每个板载外设的独立功能级演示示例。每个小节都是自包含的——你可以直接选择符合自己使用场景的示例，而无需通读其他部分。

:::tip
本页中的演示 GIF 为了缩短时长都经过了加速处理。
:::

:::note
本页所有演示都需要按照[快速上手](/cn/getting_started_0.96_inch_display_esp32s3)中所述安装 **esp32 Boards by Espressif (3.3.11)**，并按下文说明手动安装 **Seeed_GFX2** 库。
:::

- **Seeed_GFX2（手动安装）** —— 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到某个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，依次点击 **Sketch > Include Library > Add .ZIP Library...**，然后选择下载好的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，将解压后的文件夹重命名为 `Seeed_GFX2`，再放入 `Documents/Arduino/libraries/` 中。）

**步骤 3.** 重启 Arduino IDE，使其检测到新安装的库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个示例都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 80×160 分辨率、BGR 颜色顺序和旋转方向。无需 `driver.h` 或手动构造面板。
- 在这块板子上，示例使用 `Board_XIAO_0inch96_LCD<13, 12>`（RST=13，BL=12）配合 `Config_Seeed_0inch96_LCD_ST7789`（80×160，BGR，旋转 2）。
- 这些示例中，**IMU** 通过 I2C（`Wire`）直接读取——不需要额外的 IMU 库。**PDM 麦克风**和 **I2S 输出**使用 ESP-IDF 5 的驱动（`driver/i2s_pdm.h`、`driver/i2s_std.h`）以及 `LittleFS`，它们都包含在 esp32 开发板包中。
- 0.96'' IPS Display **没有触摸控制器、没有 SD 卡槽，也没有 Grove 接口**——仅在背面提供一个 4 针 I2C 测试焊盘——因此不需要任何触摸、SD 或 Grove 相关库。
:::

## 获取演示代码

本页的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A —— 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示中 **Code location** 行所示的文件夹。例如，本板子的 GraphicTest 演示位于 `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B —— 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开对应演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示会在 0.96 英寸 ST7789 IPS 面板（80×160）上运行完整的图形基准测试，涵盖色条、直线、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 ST7789 IPS 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每种图元的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_0inch96_LCD<13, 12>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数直接使用裸 GPIO 号，因此 `<13, 12>` 会将 RST 设为 GPIO13（D17），BL 设为 GPIO12（D18）。**Panel Config** 预设了 80×160 分辨率、BGR 颜色顺序以及旋转 2——无需 `driver.h` 或手动调用 `invertDisplay()`。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_096_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当能看到面板尺寸以及每个测试的耗时输出：

```
=== XIAO ESP32-S3 Plus 0.96 graphic test ===
LCD width: 80
LCD height: 160
Color bars: 56.67 ms
Lines: 1819.10 ms
Fast lines: 85.03 ms
Rectangles: 73.34 ms
Filled rects: 177.53 ms
Circles: 262.63 ms
Triangles: 235.64 ms
Round rects: 100.58 ms
Text: 635.61 ms
Pixel gradient: 1960.36 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案大约显示一秒钟，然后切换到下一个。当所有测试完成后，会出现 “Done! All tests OK” 的屏幕。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Done!” 提示。重置开发板即可再次运行测试。

---

## IMU

0.96'' IPS Display 板载一颗 **LSM6DS3** 六轴 IMU（3 轴加速度计 + 3 轴陀螺仪），通过 I2C 连接在 D4/D5 上，地址为 **0x6A**。位于 **D14** 的运动中断引脚支持硬件唤醒和手势检测。

:::note
板载 IMU 为 **LSM6DS3**（I2C 地址 `0x6A`）。Electronic Quicksand 演示会作为防御性回退，探测是否存在兼容 QMI8658 的传感器。Raise to Wake 演示则针对板载 LSM6DS3 的唤醒寄存器进行配置。
:::

下列演示通过 I2C（`Wire`）直接读取 IMU——无需任何外部 IMU 库。

<a id="imu-quicksand"></a>

### 演示 1：电子流沙

此演示将屏幕变成一个交互式流体模拟——金色沙粒会根据板载六轴 IMU 测得的重力方向流动和沉降。倾斜开发板，沙子就会实时改变流动方向。

**代码位置：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该仿真在 80×160 屏幕上叠加了一个 **13×26 占用网格**，每个单元为 6×6 像素。大约 **65 个粒子** 被放置在网格中，每个粒子具有位置、速度以及金色渐变颜色。

IMU 通过 I2C（D4/D5）读取。示例程序会在两个已知地址上探测 IMU——先是 QMI8658，然后是 LSM6DS3——并使用先响应的那一个。原始加速度值经过低通滤波，用于推导重力向量。当你倾斜开发板时：

1. **重力向量更新** —— 使用指数移动平均对加速度计数据进行平滑处理，以避免抖动。
2. **粒子速度** —— 每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流体中深度的每粒子机动性因子。
3. **单元占用** —— 在流体中更深（相对于重力更接近“底部”）的粒子机动性更低，从而产生逼真的堆积效果。
4. **差分渲染** —— 只重绘粒子移入或移出的单元，最大限度减少 SPI 传输，使小屏幕上的动画保持流畅。

靠近表面的粒子流动自如（机动性更高）；埋得更深的粒子紧密堆积（机动性更低）——模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_096_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== Electronic Quicksand 0.96 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，粒子会朝较低的一边流动。当显示屏平放时，演示会保留之前的重力方向。

---

### 演示 2：抬起唤醒

该演示实现了一个由 IMU 内置唤醒中断（引脚 **D14**）驱动的**屏幕休眠/唤醒系统**。屏幕在 8 秒无操作后会自动关闭（背光关闭），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用 LSM6 兼容 IMU 的**嵌入式唤醒事件检测器**——这是一项硬件特性，可在内部监测加速度计数据，当运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

**IMU 配置（LSM6 兼容）：**

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

1. **活动状态** —— 屏幕点亮且背光开启。IMU 数据和电池电压（D16）会定期刷新，并显示一个倒计时，指示距离自动休眠还有多少秒。
2. **自动休眠** —— 在 8 秒无活动后，示例程序会关闭背光并显示 “Sleep — Move to wake” 消息。默认情况下，演示使用**仅显示休眠**：ESP32-S3 继续运行（因此 USB CDC 串口保持连接），只是关闭面板。D14 上的 IMU 唤醒中断保持使能，因此运动检测仍然有效。（在示例中将 `ENABLE_LIGHT_SLEEP` 设为 `true` 可使用真正的 ESP32 轻睡眠并通过 GPIO 唤醒——注意芯片睡眠期间 USB CDC 可能会断开。）
3. **唤醒** —— 当用户拿起开发板时，IMU 检测到运动并将 D14 拉高。示例程序重新打开背光并重绘 UI —— LCD 和 IMU 不会被重新初始化。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>强制休眠</td></tr>
    <tr><td>USR2</td><td>D7</td><td>强制唤醒</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_096_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个紧凑的仪表盘，包括电源状态、电池电压/电量、运动数据、中断计数以及休眠倒计时。让开发板保持静止——它会在 8 秒后自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以观察启动和唤醒的状态变化：

```
=== XIAO ESP32-S3 Plus 0.96 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[READY] awake; USR1=sleep, USR2=manual wake, motion=IMU wake
[READY] auto sleep in 8 seconds
[READY] sleep mode: display only (USB CDC stays connected)
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
[SLEEP] USR1
[WAKE] IMU_D14  count=3
[WAKE] IMU_D14  count=4
[SLEEP] USR1
[WAKE] IMU_D14  count=5
[SLEEP] AUTO_TIMEOUT
```

启动后，三行 `[READY]` 会说明控制方式：USR1 让开发板进入休眠，USR2 手动唤醒，而运动会触发 IMU 唤醒。每次状态切换都会被记录——运动唤醒时为 `[WAKE] IMU_D14 count=N`（计数每次递增），按下 USR1 时为 `[SLEEP] USR1`，在 8 秒无运动后自动休眠则为 `[SLEEP] AUTO_TIMEOUT`。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时运动和电池数据。静止 8 秒后，屏幕会熄灭。拿起设备后，屏幕会立即恢复显示，并且唤醒计数会递增。

---

## 麦克风与扬声器 — Flash 录音机

该演示将 0.96'' IPS Display 变成一个小型录音机。按下 USR1 从板载 PDM 麦克风采集 5 秒音频片段并存入板载 Flash，然后按下 USR2 通过外部 I2S 功放回放。

0.96'' IPS Display 的 PDM 麦克风连接到与其他 XIAO 显示板相同的引脚：

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM 时钟输出到麦克风</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

**代码位置：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 硬件连接

回放需要一个外部**I2S 音频功放和扬声器**。该演示针对一个连接到开发板 I2S 输出焊盘的 **MAX98357A** 扩展板编写：

<div class="table-center">
  <table align="center">
    <tr><th>I2S Pad</th><th>XIAO Pin</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

I2S 焊盘（3V3、GND、D11、D12、D13）暴露在显示板底部的扩展焊盘组上。

### 工作原理

**录音（USR1）** — 片上 **PDM（脉冲密度调制）数字麦克风** 通过配置为 PDM RX 模式的 ESP32-S3 I2S 外设进行采样。在 ESP-IDF v5（Arduino core 3.3.11）上，这使用新的驱动 API（`driver/i2s_pdm.h`）。麦克风以 **16 kHz 单声道** 采集，使用 4 个 DMA 描述符，每个包含 256 帧。当你按下 USR1 时，示例程序会将 **5 秒** 的音频采样到 RAM 缓冲区中，然后使用 `LittleFS` 将其作为 WAV 文件（`/REC_RAW.WAV`）写入板载 Flash。

在 PDM 麦克风开始工作后，示例程序会丢弃最初捕获的 **300 ms** 预热数据，以减小录音开头的启动瞬态。

如果示例程序无法在 **7 秒** 内捕获所有采样，它会停止录音并显示 **"Mic timeout"**，而不是一直阻塞在录音循环中。

:::note
在这块板子上，麦克风的通道选择引脚通过 `R8`（一个 0 Ω 电阻）接到 GND，而 `R6`——备用的 3V3 绑带——未焊接。因此板载麦克风驱动 **左** 侧 PDM 时隙，这就是示例程序设置 `slot_cfg.slot_mask = I2S_PDM_SLOT_LEFT` 的原因。如果你为不同的麦克风接线改写代码，请记住这一点。
:::

**回放（USR2）** — 按下 USR2 会从 Flash 中读回 WAV 文件，并通过 I2S 外设以标准（Philips）立体声模式在 D11/D12/D13 上输出（`driver/i2s_std.h`）。单声道采样会复制到两个声道，并施加 `0.75×` 增益以避免削波。功放驱动一个小扬声器，这样你就可以听到录音。

:::note
ESP-IDF v5 的 API（`i2s_new_channel()` / `i2s_channel_read()` / `i2s_channel_write()`）与此演示的 nRF52840 版本不同，后者直接使用 nRF52 的 `PDM` 库和 `NRF_I2S` 外设。如果你要移植 nRF52840 的代码，必须完全替换音频初始化部分。
:::

**屏幕上的状态：**

<div class="table-center">
  <table align="center">
    <tr><th>State</th><th>Description</th></tr>
    <tr><td><strong>Ready</strong></td><td>"Recorder" 标题，并显示 "USR1: record" 和 "USR2: play"（或 "No recording"）</td></tr>
    <tr><td><strong>Recording</strong></td><td>录音时显示 "Capturing voice" 和 "Please speak"（无实时进度）</td></tr>
    <tr><td><strong>Error</strong></td><td>当录音超过 7 秒时显示 "Mic timeout" 和 "Try again"</td></tr>
    <tr><td><strong>Saved</strong></td><td>显示 "Done — Saved WAV" 确认信息，然后返回 Ready</td></tr>
    <tr><td><strong>Playback</strong></td><td>回放时显示 "Playing..."，结束后显示 "Finished"</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 按上述说明将 MAX98357A 功放和扬声器连接到 I2S 焊盘。

**步骤 2.** 在 Arduino IDE 中打开 `xiao_esp32s3_096_flash_record.ino`。

**步骤 3.** 选择开发板：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（使用 esp32 Boards **3.3.11**）。

**步骤 4.** 选择 **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**。

**步骤 5.** 选择正确的 **Port**，然后点击 **Upload**。

:::caution
录音器将 WAV 文件存储在 `LittleFS` 中，而它使用的是 **SPIFFS** 分区。该板默认的分区方案（`16M Flash (2MB APP/12.5MB FATFS)`）不包含 SPIFFS 分区，因此 `LittleFS.begin()` 会返回 `false`，WAV 文件无法写入，屏幕会显示 "Write failed / Check flash"。你 **必须** 选择上面的 SPIFFS 分区方案，否则录音将无法工作。
:::

**步骤 6.** 按下 **USR1（D6）**，从板载麦克风录制 5 秒音频。录音时屏幕会显示 "Capturing voice"。

**步骤 7.** 按下 **USR2（D7）**，通过扬声器回放录音。

:::note
录音存储在板载 Flash（`LittleFS`）中，因此在断电后仍然保留——你可以录一次，稍后再回放。再次录音会覆盖之前的文件。
:::

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

按下 USR1，屏幕显示 "Capturing voice"。5 秒后会确认 WAV 已保存。按下 USR2，音频会通过连接的扬声器播放，同时屏幕显示回放状态。

---

## 用户按键

0.96 英寸 IPS 显示屏上有 **两个物理按键** 连接到 XIAO ESP32-S3 Plus：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>低电平有效（按下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>低电平有效（按下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

:::note
与 1.14 英寸 IPS 显示屏不同，0.96 英寸 IPS 显示屏 **没有第三个按键**（D19 上没有 USR3）。它也没有专用的按键引出焊盘。
:::

### 读取按键

按键使用 XIAO 的内部上拉电阻。一个简单的读取方式如下：

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

为了实现响应迅速且带消抖的按键处理，你可以使用 GPIO 中断并配合一个短暂的稳定延时：

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

### 出厂仪表盘中的默认行为

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

## 电池电压检测

此演示通过 **D16** 读取板载电池分压，并在 0.96 英寸 IPS 显示屏上以黄色实时显示两个读数：原始的 D16 分压电压和计算出的电池电压。它只显示电压读数；不会估算电池电量百分比，也不会报告充电状态。

**代码位置：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**电池电路：**

ESP32-S3 Plus 通过连接到 **D16** 的板载分压电路读取 LiPo 电池电压：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>模拟输入，用于读取分压后的电池电压。内部连接到 316 kΩ / 160 kΩ 分压电阻。<strong>请勿在外部使用此引脚。</strong></td></tr>
  </table>
</div>

**分压比：** 316 kΩ / 160 kΩ → **分压比 = (316 + 160) / 160 ≈ 2.975**

**读取：**

该示例使用 `Board_XIAO_0inch96_LCD<13, 12>` 和 `Config_Seeed_0inch96_LCD_ST7789`（80×160，BGR，旋转 2）初始化显示屏，然后以 12 位分辨率、11 dB 衰减，使用 `analogReadMilliVolts()` 以 700 µs 间隔对 **D16** 采样 12 次。它对采样值求平均得到分压电路的原始电压，再乘以分压比得到电池电压（`Calc = D16 × 2.975`），并将这两个值以两行黄色居中显示。只有当任一数值发生有意义的变化时（D16 ≥ 0.02 V 或 Calc ≥ 0.05 V），屏幕才会刷新。

:::note
没有将充电状态信号连接到 ESP32-S3 的 GPIO。本示例仅显示电压读数；它不会检测电池是否存在或充电状态，也不会估算电池电量百分比。
:::

### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_096_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示两行黄色文本：原始 D16 分压电压和计算得到的电池电压。连接或断开 LiPo 电池（或 USB-C 线缆）以观察数值的变化。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>电压读数</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>电池连接器</strong>（背面）</div></td>
    </tr>
  </table>
</div>

屏幕顶部一行显示原始 D16 分压电压，底部一行显示计算得到的电池电压（`Calc`）。当连接 LiPo 电池时，`Calc` 近似于电池端电压。在仅使用 USB 供电时也可能出现读数，因此仅凭 `Calc` 无法确认是否连接了电池。

该示例还会每秒向串口监视器打印一行诊断信息，例如：

```
D16 1.39V | Calc 4.14V
```

---

## 资源

- **🗃️[PCB 设计文件]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **🖨️[3D 打印外壳]** [XIAO 0.96'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843001-enclosure-for-xiao-096-ips-display-esp32nrf52840/files)
- **📄[数据手册]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[示例]** [XIAO Display Board 示例代码](https://github.com/Seeed-Projects/Display-Gadgets) — 所有 Function 示例位于 `code_GFX2/Function/096_ESP32/` 目录中

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
