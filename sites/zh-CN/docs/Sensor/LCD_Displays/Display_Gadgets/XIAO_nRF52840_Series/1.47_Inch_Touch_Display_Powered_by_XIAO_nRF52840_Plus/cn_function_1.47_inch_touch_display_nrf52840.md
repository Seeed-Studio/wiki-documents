---
description: 针对 XIAO 1.47'' IPS Display（nRF52840）上每个板载外设的独立功能级演示。涵盖屏幕、触摸、SD 卡、麦克风、IMU、按键和电池电压检测。
title: 板载外设使用
sidebar_label: 功能
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 2
last_update:
  date: 08/20/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/function_1.47_inch_touch_display_nrf52840/
---

# 板载外设使用

本页收集了 1.47'' IPS Display 上每个板载外设的独立功能级演示。每个小节都是自包含的——你可以直接选择与你使用场景匹配的那一个，而无需阅读其他部分。

:::tip
本页中的演示 GIF 为了缩短时长都经过了加速处理。
:::

:::note
本页中的所有演示都需要按照[快速上手](/cn/getting_started_1.47_inch_touch_display_nrf52840)中所述安装 **Seeed nRF52 Boards (1.1.13)**，并额外手动安装 **Seeed_GFX2** 库（如下所述）。
:::

- **Library Manager** — 进入 **Sketch > Include Library > Manage Libraries...**，搜索并安装：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU 演示</td></tr>
  </table>
</div>

:::note
**SdFat** 已随 **Seeed nRF52 Boards (1.1.13)** 开发板包一同提供，因此 **SD Image Reader** 和 **Record to SD** 演示无需单独安装 SdFat。请不要通过 Library Manager 安装 SdFat，否则可能覆盖随板包提供的版本并导致库或 API 冲突。
:::

- **Seeed_GFX2（手动安装）** — 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到某个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆该仓库。

**步骤 2.** 在 Arduino IDE 中，进入 **Sketch > Include Library > Add .ZIP Library...**，选择下载好的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，并在放入 `Documents/Arduino/libraries/` 之前将解压后的文件夹重命名为 `Seeed_GFX2`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个演示都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 172×320 分辨率、颜色顺序（BGR）和方向。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，演示使用 `Board_XIAO_1inch47_Touch_Display<38, 37>`（RST=38，BL=37）以及 `Config_Seeed_1inch47_Touch_JD9853A`（172×320，BGR，无反色）。
- **触摸控制器**（AXS5106L）由 `Seeed_GFX2` 的 Touch 层（`Touch_AXS5106L`）处理——无需额外库。**IMU** 演示使用上面安装的 **Seeed Arduino LSM6DS3** 库。
:::

## 获取演示代码

本页中的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A — 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示中 **Code location** 行所示的文件夹。例如，本板的 GraphicTest 演示位于 `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B — 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开该演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示在 1.47 英寸 JD9853A 面板上运行完整的图形基准测试，涵盖色条、直线、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用它来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 JD9853A 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每一种的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<38, 37>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数直接使用裸 GPIO 号，因此 `<38, 37>` 即设置 RST=GPIO38、BL=GPIO37。**Panel Config** 预设了 172×320 分辨率、BGR 颜色顺序以及无反色——无需 `driver.h` 或手动写 MADCTL。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当能看到每个测试的计时输出：

```
LCD width: 172
LCD height: 320
Color bars: 57.62 ms
Lines: 4859.38 ms
Fast lines: 95.70 ms
Rectangles: 74.22 ms
Filled rectangles: 236.33 ms
Circles: 588.87 ms
Triangles: 413.09 ms
Round rectangles: 125.98 ms
Text: 1961.91 ms
Pixel gradient: 8716.80 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案显示约一秒钟，然后开始下一个。当所有测试完成后，会出现一个带蓝色圆角矩形边框的 “Finished” 结束画面。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Graphic Test / Finished” 信息。重置开发板即可再次运行测试。

---

## 触摸 — Touch Circle

此演示将 1.47 英寸触摸屏变成一个交互式绘图板。轻触屏幕任意位置，你的指尖处会出现一个白色圆圈。圆圈会保留在屏幕上，随着你不断点击而累积。点击屏幕底部的 **CLEAR** 条即可清除所有圆圈并重新开始。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该示例使用通过 D4/D5 上的 I2C 连接的 **AXS5106L** 电容式触摸控制器（I2C 地址为 `0x63`）。当手指触摸或离开屏幕时，**D7** 上的触摸中断线在下降沿触发。触摸由 Seeed_GFX2 的 **Touch 层**（`Touch_AXS5106L`）处理：

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>功能</th></tr>
    <tr><td>D4 (SDA)</td><td>I2C 数据总线 — 与 IMU 共享</td></tr>
    <tr><td>D5 (SCL)</td><td>I2C 时钟总线 — 与 IMU 共享</td></tr>
    <tr><td>D7</td><td>触摸中断（低电平有效，下降沿触发）</td></tr>
    <tr><td>RST</td><td>与 LCD 复位（GPIO38）共用</td></tr>
  </table>
</div>

**边沿触发绘制。** 该示例使用边沿检测方式：只在触摸的下降沿（手指按下瞬间）添加圆，而不是在手指按住期间持续添加。这样可以实现清晰、可控的点按绘制行为，而不是在拖动时连续绘制轨迹。

**X 轴镜像。** 触摸面板的物理安装方向与 LCD 不同，因此原始 X 坐标必须镜像。`display.getTouch()` 已在内部应用了这种镜像并返回屏幕坐标，因此不需要手动进行 `screenX = 172 - 1 - rawX` 变换。

**圆形缓冲区。** 最多 120 个圆存储在一个环形缓冲区中。当缓冲区满时，最旧的圆会被移除，并重绘屏幕以保持显示干净。

**CLEAR 区域。** 屏幕底部 36 个像素被保留为 CLEAR 条。点击该区域会擦除所有圆并重置计数器，而不是绘制新圆。

**安全绘制区域。** 一条暗灰色边框勾勒出圆形可以完全可见的区域。

### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_touch_circle.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**步骤 4.** 轻触屏幕——每次点击都会打印映射后的屏幕坐标：

```
Touch: screen=(144,124)
Touch: screen=(166,210)
Touch: screen=(121,250)
Touch: screen=(37,231)
Touch: screen=(122,44)
```

点击底部的 CLEAR 条以擦除所有圆。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

每次点击都会在指尖位置留下一个白色圆圈。屏幕标题栏显示运行中的计数。点击 CLEAR 条后，屏幕会重置为空白，并重新绘制边框和标题栏。

---

## SD 卡 — 图像读取器

该示例从 MicroSD 卡中读取 `.bmp` 图像文件并在屏幕上显示。它支持 24 位未压缩 BMP 图像，并将其居中裁剪以适配 172×320 显示屏。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_image_reader/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

LCD 和 SD 卡共享同一硬件 SPI 总线（SCK = D8，MOSI = D10，MISO = D9）。为避免总线争用，示例在任何 LCD 操作前都会取消 SD 卡片选（D6），并在访问 SD 之前重新使能片选。SD 卡由 SdFat 在默认 `SPI` 实例上的 `SHARED_SPI` 模式驱动，而 LCD 运行在 Seeed_GFX2 的 SPI 主机上——两者共享相同的 D8/D9/D10 物理引脚。

示例会扫描 SD 卡根目录中的 `.bmp` 文件（最多 24 个），然后以 2 秒间隔循环显示它们。

**支持的 BMP 格式：**

<div class="table-center">
  <table align="center">
    <tr><th>格式</th><th>位深</th><th>说明</th></tr>
    <tr><td>未压缩 BMP</td><td>24 位</td><td>BGR888 转换为 RGB565 进行显示</td></tr>
  </table>
</div>

大于 172×320 的图像会被居中裁剪。

### 运行示例

**步骤 1.** 将 MicroSD 卡格式化为 **FAT32**。

**步骤 2.** 将一个或多个 `.bmp` 图像复制到 SD 卡根目录。

**步骤 3.** 将 SD 卡插入显示板上的 MicroSD 插槽。

**步骤 4.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_sd_image_reader.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 5.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
[IMAGE] /Atest.bmp
[IMAGE] /Another test.bmp
[IMAGE] /test.bmp
[SD] mounted @ 8000000
```

:::note
列出的文件名反映了你放在 SD 卡上的 `.bmp` 文件。输出会根据你复制到卡中的文件而有所不同。
:::

屏幕会以 2 秒为间隔显示每张图像，然后进入下一张，循环播放。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_sd_reader.gif" style={{width:500, height:'auto'}}/></div>

如果未找到 BMP 文件，屏幕会显示“No BMP found”。如果图像解码失败，屏幕会短暂显示文件路径和“BMP decode failed”，然后跳到下一个文件。

---

## 麦克风和扬声器

1.47'' IPS 显示屏板载 **PDM（脉冲密度调制）数字麦克风**用于音频输入，并提供 I2S 输出焊盘以驱动外部扬声器/功放。本节展示两个示例：一个是实时的麦克风输入 **音量条** 可视化（无需额外硬件），另一个是 **录制到 SD** 示例，可将 5 秒音频录制到 MicroSD 卡，并通过外部 I2S 功放回放。

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>到麦克风的 PDM 时钟输出</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

### 示例 1：音量条

该示例将板载 PDM 麦克风变成一个大而灵敏的音量计。一个 10 段条形图填充在屏幕中央——低电平为绿色，中等电平为黄色，高音量时为红色。条形图上方显示百分比，并随音量等级改变颜色。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 工作原理

板载 **PDM（脉冲密度调制）数字麦克风** 通过 **D0（PDM_CLK）** 和 **D1（MIC_DATA）** 连接到 nRF52840 的 PDM 外设，如上表所示。

Arduino 的 **PDM 库** 在硬件中处理底层的 PDM 到 PCM 转换。示例将 PDM 外设配置为 **16 kHz 单声道**、增益 **30**，然后注册一个中断驱动的回调函数（`onPDMdata`），每当 256 采样点的缓冲区就绪时触发。

**信号处理：**

1. **峰值提取** —— 每次回调都会扫描 256 采样点缓冲区，找到绝对值最大的样本（峰值幅度）。  
2. **归一化** —— 将原始峰值从下限 40 映射到上限 16,000，得到 0.0–1.0 的音量值。低于下限的值视为静音。  
3. **指数平滑** —— 显示的音量是原始峰值的指数移动平均（α = 0.20），以防止抖动。当检测到静音时，显示值每帧按 ×0.94 衰减。  

**条形图绘制：**

<div class="table-center">
  <table align="center">
    <tr><th>段</th><th>颜色</th><th>音量范围</th></tr>
    <tr><td>0–4（底部 5 段）</td><td>绿色</td><td>0% – 50%</td></tr>
    <tr><td>5–8（中间 4 段）</td><td>黄色</td><td>50% – 90%</td></tr>
    <tr><td>9 (top)</td><td>红色</td><td>90% – 100%</td></tr>
  </table>
</div>

该条形图使用**差分渲染**：只重绘自上一帧以来状态发生变化的段。未变化的段保持不变，从而将 SPI 通信量降到最低并防止闪烁。

#### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_mic_canvas.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
[MIC] ready
```

**步骤 4.** 对着 PDM 麦克风（位于显示板左下角附近）说话或向其吹气。条形图会从绿色逐渐填充到黄色再到红色，上方的百分比会随之更新。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_mic_bar.gif" style={{width:500, height:'auto'}}/></div>

条形图实时响应。在安静的房间里，条形图保持为空。从约 20 cm 远的地方以正常音量说话会点亮绿色段。直接对着麦克风吹气会将条形图推入黄色或红色范围。

---

### 示例 2：录制到 SD

此示例会从板载 PDM 麦克风录制**5 秒**音频到 RAM，将其以 WAV 文件保存到 MicroSD 卡，然后通过外部 I2S 功放回放。按一个按键录音，另一个按键播放。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_unline_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 硬件连接

回放需要一个外部**I2S 音频功放和扬声器**。该示例针对连接到开发板 I2S 输出焊盘的 **MAX98357A** 模块编写：

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

I2S 焊盘（3V3、GND、D11、D12、D13）位于显示板底部的扩展焊盘组上。

#### 工作原理

**录音。** 板载 PDM 麦克风通过 nRF52840 的 PDM 外设以 **16 kHz 单声道、16 位**采集，使用与示例 1 相同的 **D0 (PDM_CLK)** / **D1 (MIC_DATA)** 引脚。当你按下 **USR1** 时，示例会将 5 秒音频直接采样到一个静态 RAM 缓冲区中，然后使用 Seeed nRF52 Boards 1.1.13 中捆绑的 SdFat 库将其作为 WAV 文件（`/REC_001_RAW.WAV`）写入 SD 卡。

录音缓存在 RAM 中是因为 nRF52840 只有 **256 KB RAM**。在 16 kHz × 16 位单声道下，5 秒需要 160,000 字节——可以放得下。10 秒则需要 320,000 字节，放不下，因此示例固定为 5 秒。

**回放。** 按下 **USR2** 会从 SD 卡中读回 WAV 文件（跳过 44 字节的 WAV 头），并通过 nRF52840 的 I2S 外设以 Philips 立体声模式在 **D11/D12/D13** 上进行流式输出。单声道采样会复制到两个声道，并施加 `0.75×` 增益以避免削波。功放驱动一个小扬声器，让你可以听到录音。

**状态机。** 录音器按确定性的状态序列运行，并将每次状态切换打印到串口监视器：

```
IDLE → PREPARE_SYSTEM → QUIET_RADIO → PREPARE_PERIPHERALS → START_HFCLK → START_PDM
     → DISCARD_WARMUP → CAPTURE_RAM → STOP_PDM → SAVE_RAW → DONE
```

- **QUIET_RADIO** 禁用 RADIO 外设（此示例从未初始化 BLE），以保持对时间敏感的采集部分稳定。
- **START_HFCLK** 将高频时钟切换到外部 32 MHz 晶振，PDM 外设需要它来实现精确采样。
- **DISCARD_WARMUP** 丢弃前 300 ms 的 PDM 输出，以等待麦克风稳定。
- **CAPTURE_RAM** 填充缓冲区，直到收集到 80,000 个采样点（5 s），同时在屏幕上绘制实时进度条。

**屏幕上的状态：**

<div class="table-center">
  <table align="center">
    <tr><th>状态</th><th>描述</th></tr>
    <tr><td><strong>Ready</strong></td><td>"RAM Recorder" 标题，以及 "USR1: record" 和 "USR2: play last"</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Recording" 标签、已用时间计时器（"2.3s / 5s"）以及红色进度条</td></tr>
    <tr><td><strong>Done</strong></td><td>"Done" 标题，显示已保存的文件名和 "Saved raw WAV"，以及 "USR1: record" / "USR2: play raw"</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playback" 标题，先显示 "Loading RAW audio..."，然后是 "Playing RAW audio"，最后以 "Finished" 结束</td></tr>
  </table>
</div>

#### 运行示例

**步骤 1.** 将 MicroSD 卡格式化为 **FAT32**，并插入显示板上的 MicroSD 卡槽。

**步骤 2.** 按上述说明将 MAX98357A 功放和扬声器连接到 I2S 焊盘。

**步骤 3.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_sd_unline_record.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。上电后你应该会看到：

```
=== XIAO nRF52840 Plus RAM PDM recorder ===
[RAM] record buffer bytes=160000
[RADIO] BLE is not initialized by this sketch
[PDM] library uses EasyDMA double buffering
[STATE] IDLE
```

**步骤 5.** 按下 **USR1 (D19)** 从板载麦克风录制 5 秒音频。录制时进度条会填充，状态机会打印每次状态切换：

```
[STATE] PREPARE_SYSTEM
[STATE] QUIET_RADIO
[STATE] PREPARE_PERIPHERALS
[STATE] START_HFCLK
[STATE] START_PDM
[STATE] DISCARD_WARMUP
[STATE] CAPTURE_RAM
[STATE] STOP_PDM
[STATE] SAVE_RAW
[STATE] DONE
[SAVE] /REC_001_RAW.WAV
```

**步骤 6.** 按下 **USR2 (D15)** 通过扬声器回放录音：

```
[PLAY] latest RAW audio
[PLAY] finished
```

:::note
每次新的录音都会保存为一个带编号的 WAV 文件（`REC_001_RAW.WAV`、`REC_002_RAW.WAV` ……），因此之前的录音会被保留。"Done" 屏幕会显示最近一次录音的文件名。
:::

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_record.gif" style={{width:500, height:'auto'}}/></div>

按下 USR1，屏幕会显示录音进度条。5 秒后会确认 WAV 已保存到 SD 卡。按下 USR2，音频会通过连接的扬声器播放，同时屏幕显示回放状态。

---

## IMU

### 示例 1：电子流沙

此示例将屏幕变成一个交互式流体模拟——金色沙粒会根据板载 LSM6DS3 六轴 IMU 测得的重力方向流动和沉降。倾斜电路板，沙子会实时改变流动方向。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该模拟在 172×320 屏幕上叠加了一个**24×45 占用网格**，其中每个单元为 7×7 像素。大约放置了 **180 个粒子**在网格中，每个粒子具有位置、速度以及金色渐变颜色。

通过 I2C（D4/D5）每 **8 ms** 读取一次 LSM6DS3 加速度计。原始加速度值经过低通滤波，用于计算重力向量。当你倾斜电路板时：

1. **重力向量更新**——加速度计数据通过指数移动平均进行平滑，以避免抖动。
2. **粒子速度**——每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流动中深度的逐粒子流动性系数。
3. **单元占用**——在流动中更深（相对于重力更接近“底部”）的粒子流动性更低，从而产生逼真的堆积效果。
4. **差分渲染**——只重绘粒子移入或移出的单元，最大限度减少 SPI 通信量并保持动画流畅。

靠近表面的粒子流动自如（更高的流动性）；埋得更深的粒子紧密堆积（更低的流动性）——模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== Electronic Quicksand ===
imu.begin=0
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，金色沙粒会平滑流动。保持水平放置时，沙子会沉到屏幕底部。将开发板旋转 90 度，沙子会在一秒内流向新的“底部”。

---

### 演示 2：抬起唤醒

此演示实现了一个由 LSM6DS3 IMU 内置的唤醒中断驱动的**屏幕休眠/唤醒系统**，中断连接在 **D14**。屏幕在 8 秒无操作后会自动关闭（背光关闭 + CPU 进入 System ON 休眠），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用 LSM6DS3 的**嵌入式唤醒事件检测器**——这是一项硬件特性，可在内部监测加速度计数据，当运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

**IMU 配置：**

<div class="table-center">
  <table align="center">
    <tr><th>寄存器</th><th>数值</th><th>用途</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度计 @ 104 Hz，±2g</td></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>阻塞数据更新 + 自动地址递增</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>启用嵌入式中断</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>唤醒阈值（中低灵敏度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>无持续时间滤波（响应快速的唤醒）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>将唤醒事件路由到 INT1</td></tr>
  </table>
</div>

**休眠/唤醒流程：**

1. **活动状态**——屏幕点亮，背光 PWM 为 120。IMU 数据和电池状态分别每 250 ms / 1000 ms 刷新一次。倒计时计时器显示距离自动休眠剩余的秒数。
2. **自动休眠**——在 8 秒无活动后，示例程序会关闭背光，绘制“Sleeping... Pick up device to wake”消息，并通过 WFE（Wait For Event）让 nRF52840 进入 **System ON 休眠**。
3. **唤醒**——当用户拿起开发板时，LSM6DS3 检测到运动并将 D14 拉高。GPIO 中断触发，CPU 从 WFE 唤醒，背光点亮，UI 被完全重绘。

在 System ON 休眠中，所有 RAM 和外设状态都会被保留——唤醒几乎是瞬时的（从中断到背光点亮不足 1 ms）。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D19</td><td>强制休眠</td></tr>
    <tr><td>USR2</td><td>D15</td><td>强制唤醒</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个包含电源状态、运动数据和倒计时计时器的仪表盘。让开发板静止放置 8 秒——它会自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以观察休眠/唤醒过程：

```
[SLEEP] screen backlight off, waiting for IMU D14 wake
[SYS_ON_SLEEP] waiting, sleepLoops=26625 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=27649 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=28673 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=29697 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=58776 sleepLoops=29705
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=60110 sleepLoops=29705
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时加速度计和陀螺仪数据。静止 8 秒后，屏幕熄灭，nRF52840 进入低功耗休眠。拿起设备后，屏幕会在不到一秒的时间内恢复显示，并且唤醒计数器会递增。

---

## 用户按键

1.47 英寸 IPS 显示屏上有 **两个物理按键** 连接到 XIAO nRF52840 Plus：

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>逻辑</th><th>丝印标识</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>低电平有效（按下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>低电平有效（按下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

### 读取按键

两个按键都使用 XIAO 的内部上拉电阻。一个简单的非阻塞读取方式如下：

```cpp
const int BTN_A = D19;
const int BTN_B = D15;

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BTN_A) == LOW) {
    Serial.println("BTN_A pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(BTN_B) == LOW) {
    Serial.println("BTN_B pressed");
    delay(200);
  }
}
```

### 使用中断消抖

为了在不阻塞主循环的情况下实现响应迅速且已消抖的按键处理，你可以使用引脚变化中断：

```cpp
volatile bool btnAFlag = false;
volatile bool btnBFlag = false;

void btnAIsr() { btnAFlag = true; }
void btnBIsr() { btnBFlag = true; }

void setup() {
  pinMode(D19, INPUT_PULLUP);
  pinMode(D15, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D19), btnAIsr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D15), btnBIsr, FALLING);
}

void loop() {
  if (btnAFlag) {
    btnAFlag = false;
    delay(30); // debounce settling time
    if (digitalRead(D19) == LOW) {
      // handle BTN_A press
    }
  }
  if (btnBFlag) {
    btnBFlag = false;
    delay(30);
    if (digitalRead(D15) == LOW) {
      // handle BTN_B press
    }
  }
}
```

### 出厂仪表盘中的默认行为

在预烧录的出厂固件中，按键映射如下（你可以在自己的代码中覆盖这些行为）：

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>动作</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>短按：循环切换屏幕亮度 <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>短按：<strong>切换屏幕关闭 / 恢复到上次亮度</strong></td></tr>
  </table>
</div>

按键引出焊盘（在板上标记为 U1 和 U2）分别与 D19 和 D15 相连，如果需要，你可以接入外部按键。

---

## 电池状态

此演示会在 1.47 英寸 IPS 显示屏上显示电池状态——带电量等级和充电状态的电池图标。它会检测是否实际连接了 LiPo 电池，并显示三种状态之一：**USB PWR**（无电池）、**百分比**（仅电池供电）或**充电中**（USB + 电池）。

1.47 英寸 IPS 显示屏内置电池电压测量电路。nRF52840 Plus 通过分压电路读取 LiPo 电池电压，并可以将剩余电量显示为百分比。

**代码位置：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**显示：**

屏幕由 **Seeed_GFX2** 驱动，使用 `Board_XIAO_1inch47_Touch_Display<38, 37>` 和 `Config_Seeed_1inch47_Touch_JD9853A`（172×320，BGR，旋转 2），通过 10 MHz 硬件 SPI 通信。

**电池电路：**

XIAO nRF52840 Plus 使用**三个 GPIO 引脚**构成一个完整的电池监控系统：

<div class="table-center">
  <table align="center">
    <tr><th>信号</th><th>nRF52840 引脚</th><th>功能</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>电池分压器使能。低电平有效——设为 LOW 以使能分压器，然后释放为 HIGH（高阻态）以节省功耗。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>读取分压后电池电压的模拟输入。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充电状态指示。低电平有效——当连接充电器且电池正在充电时读到 LOW。</td></tr>
  </table>
</div>

**检测：**

在 USB-C 供电下，静态 VBAT 电压无法判断电池是否存在——即使没有接电池，充电器的 BAT 节点也可能看起来像一个真实的锂电池。因此示例程序首先学习一个**仅 USB 的基线值**，然后只有在 VBAT 持续下降后才确认电池插入，并在出现带噪声/跳变的读数且 `~CHG` 变为 HIGH 时确认电池被移除。这与出厂 Dashboard 的检测逻辑一致。

**图标状态：**

- **无电池**——灰色轮廓电池配红色叉号，标注为 **USB PWR**。
- **有电池**——白色轮廓电池配彩色填充（根据百分比为绿色 / 黄色 / 红色），标注**百分比**和**电压**。
- **充电中**——青色填充并带有闪电图标，标注百分比和电压。

:::note
`~CHG` 引脚是通过 nRF52840 的**原始 GPIO 寄存器**（`nrf_gpio_cfg_input()` 和 `NRF_P0->IN`）读取的，而不是通过 `digitalRead()`。在 Arduino API 中，引脚编号遵循开发板包的映射，其中 `digitalRead(17)` 实际读取的是 **P0.07**（6D IMU 的 I2C 数据线），而不是 P0.17。这里的常量 `14` 和 `17` 是**Nordic 原始 P0.x 引脚编号**（P0.14 和 P0.17），这正是寄存器调用所期望的编号。
:::

:::note
该示例使用出厂校准的 **499 kΩ** 低端电阻（分压比约为 3.004），而不是标称的 510 kΩ。分压器集成在 XIAO nRF52840 Plus 模组本身，而不是在显示板上。P0.14 使能引脚为**低电平有效**：将其驱动为 LOW 以使能分压器，然后释放为高阻态（INPUT），以在不测量电池时将静态电流消耗降到最低。
:::

### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_nrf52840_147_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示带有当前状态的电池图标。插入或拔出 LiPo 电池（或 USB-C 线），观察图标在三种状态之间切换。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（无电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（仅电池）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + 电池）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

在没有电池时，屏幕会显示一个带红色叉号的灰色电池，并标注 **USB PWR**。插入 LiPo 电池后，图标会切换为带彩色填充并显示百分比和电压。电池存在时插入 USB-C，填充会变为青色并带有闪电图标，表示正在充电。

该示例还会每 500 ms 向串口监视器打印一行诊断信息，例如：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## 资源

- **🗃️[PCB 设计文件]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[数据手册]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[示例]** [XIAO Display Board 示例代码](https://github.com/Seeed-Projects/Display-Gadgets) — 所有 Function 示例都在 `code_GFX2/Function/147_nRF52840/` 目录下

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
