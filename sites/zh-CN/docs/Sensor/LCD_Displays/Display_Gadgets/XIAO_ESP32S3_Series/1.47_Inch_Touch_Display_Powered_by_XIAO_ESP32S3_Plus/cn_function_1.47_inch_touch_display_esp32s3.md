---
description: 针对 XIAO 1.47'' IPS Display (ESP32-S3) 上每个板载外设的独立功能级演示。涵盖屏幕、SD 卡、IMU、触摸、PDM 麦克风、SD 音频录制与回放、按键以及电池电压检测。
title: 板载外设使用
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/cn/function_1.47_inch_touch_display_esp32s3/
---

# 板载外设使用

本页收集了 1.47'' IPS Display 上每个板载外设的独立功能级演示。每个小节都是自包含的——你可以直接选择与你使用场景匹配的那一节，而无需阅读其他内容。

:::tip
本页中的演示 GIF 为了缩短时长都经过了加速处理。
:::

:::note
本页中的所有演示都需要按照 [Getting Started](/cn/getting_started_1.47_inch_touch_display_esp32s3) 中所述安装 **esp32 Boards by Espressif (3.3.11)**，并额外按下文说明手动安装 **Seeed_GFX2** 库。
:::

- **Seeed_GFX2（手动安装）** —— 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到一个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，依次点击 **Sketch > Include Library > Add .ZIP Library...**，然后选择下载的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你不需要重命名解压后的文件夹。（如果改为手动安装，请先解压压缩包，将解压后的文件夹重命名为 `Seeed_GFX2`，再放入 `Documents/Arduino/libraries/`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个演示都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了分辨率、颜色顺序（BGR）和方向。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，演示使用 `Board_XIAO_1inch47_Touch_Display<13, 12>`（RST=13，BL=12），配合 `Config_Seeed_1inch47_Touch_JD9853A`（172×320，BGR，无反色）。
- **触摸控制器**（AXS5106L）由 `Seeed_GFX2` 的 Touch 层（`Touch_AXS5106L`）处理——不需要额外的库。**IMU** 在示例中通过裸 I2C（`Wire`）读取。
- **SD BMP Reader** 和 **SD Recorder** 示例使用 ESP32 板卡包内置的 **`SD.h`** 访问 SD 卡。
:::

## 获取演示代码

本页中的每个演示都位于 [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) 仓库的 `code_GFX2/Function/` 目录下。每个演示是一个包含单个 `.ino` 草图的文件夹。**务必下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

**方案 A —— 将仓库下载为 ZIP（推荐）：**

1. 打开 [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets)，点击 **Code > Download ZIP**，然后在任意方便的位置解压压缩包。
2. 进入 `code_GFX2/Function/`，打开每个演示中 **Code location** 行所示的文件夹。例如，本板子的 GraphicTest 演示位于 `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`。
3. **双击 `.ino` 文件**，在 Arduino IDE 中将其打开。

**方案 B —— 使用 git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

然后从克隆得到的 `code_GFX2/Function/...` 文件夹中打开对应演示的 `.ino` 文件。

## 屏幕显示 — GraphicTest

此演示在 1.47 英寸 JD9853A 面板上运行完整的图形基准测试，涵盖色条、直线、矩形、圆形、三角形、圆角矩形、文本以及像素渐变。可用来验证屏幕连线是否正确，以及所有绘图调用是否按预期工作。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该草图通过 **Seeed_GFX2** 初始化 JD9853A 面板，然后依次运行十种图形基本图元，并通过 `micros()` 测量每一种的执行时间，将结果打印到串口监视器。

显示屏通过一次模板调用完成初始化：

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<13, 12>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

**Board** 模板负责引脚映射——CS=D2、DC=D3、SCK=D8、MOSI=D10——其 `<RST, BL>` 模板参数直接使用裸 GPIO 号，因此 `<13, 12>` 会将 RST 设为 GPIO13（D17），BL 设为 GPIO12（D18）。**Panel Config** 预设了 172×320 分辨率、BGR 颜色顺序以及无反色——无需 `driver.h` 或手动写 MADCTL。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_graphictest.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 以及正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当能看到每个测试的计时输出：

```
=== XIAO ESP32-S3 Plus 1.47 graphic test ===
LCD width: 172
LCD height: 320
Color bars: 162.32 ms
Lines: 4562.40 ms
Fast lines: 240.45 ms
Rectangles: 189.31 ms
Filled rectangles: 644.85 ms
Circles: 667.74 ms
Triangles: 531.25 ms
Round rectangles: 236.16 ms
Text: 1899.09 ms
Pixel gradient: 7933.69 ms
Graphic test finished.
```

在屏幕上，你会看到每个测试图案显示约一秒钟，然后开始下一个。当所有测试完成后，会出现一个带蓝色圆角矩形边框的 “Finished” 结束画面。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

当草图运行完所有图案后，屏幕会显示 “Graphic Test / Finished” 信息。重置开发板即可再次运行测试。

---

## 触摸 — Touch Circle

此演示将 1.47 英寸触摸屏变成一个交互式绘图板。轻触屏幕任意位置，会在指尖位置出现一个白色圆圈。圆圈会保留在屏幕上，随着你不断点击而累积。点击屏幕底部的 **CLEAR** 条即可清除所有圆圈并重新开始。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用 **AXS5106L** 电容式触摸控制器（I2C 地址 `0x63`），通过 D4/D5 上的 I2C 连接。控制器报告显示屏像素范围内的绝对 (X, Y) 坐标。触摸由 Seeed_GFX2 的 **Touch 层**（`Touch_AXS5106L`）处理：

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
    <tr><td>D7</td><td>触摸中断 (INT)</td></tr>
    <tr><td>RST</td><td>与 LCD 复位共享 (GPIO13 / D17)</td></tr>
  </table>
</div>

**边沿触发绘制。** 该示例使用边沿检测方式：它只在触摸的下降沿（手指按下瞬间）添加一个圆，而不是在手指按住期间持续添加。这样可以实现干净、明确的点按绘制行为，而不是在拖动时连续绘制轨迹。

**X 轴镜像。** 触摸面板的物理安装方向与 LCD 不同，因此原始 X 坐标必须镜像。`display.getTouch()` 已在内部应用了这种镜像并返回屏幕坐标，因此不需要手动进行 `screenX = 172 - 1 - rawX` 变换。

**圆形缓冲区。** 最多 120 个圆存储在一个环形缓冲区中。当缓冲区已满时，最旧的圆会被移除，并重绘屏幕以保持显示干净。

**CLEAR 区域。** 屏幕底部 36 像素被保留为 CLEAR 条。点击该区域会擦除所有圆并重置计数器，而不是绘制新圆。

**安全绘制区域。** 一条暗灰色边框勾勒出圆形可以完全可见的区域。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_touch_circle.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当会看到：

```
=== XIAO ESP32-S3 Touch Circle Demo ===
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**步骤 4.** 轻触屏幕——每次点击都会打印映射后的屏幕坐标，点击 CLEAR 条会打印擦除消息：

```
Touch: (76,163)
Touch: (64,226)
Touch: (32,80)
Touch: (118,100)
Touch: (37,311)
Clear zone tapped — erasing all circles.
Touch: (72,143)
Touch: (134,61)
Touch: (61,293)
Clear zone tapped — erasing all circles.
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

每次点击都会在指尖位置留下一个白色圆圈。屏幕标题栏显示运行计数。点击 CLEAR 条后，屏幕会重置为空白，并重新绘制边框和标题栏。

---

## SD 卡 — BMP 阅读器

该示例从 MicroSD 卡读取 24 位未压缩 `.bmp` 图像并显示在屏幕上。它包含内置的 SD 探测测试（写入/读取），并将完整诊断信息打印到串口监视器，非常适合用于验证 SD 卡访问和 BMP 解码。大于 172×320 的图像会被居中裁剪；较小的图像会在屏幕上居中显示。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

LCD 和 SD 卡共享相同的物理 SPI 引脚（SCK = D8、MOSI = D10、MISO = D9），但使用**独立的 SPI 主机**：LCD 运行在 Seeed_GFX2 的 HSPI 主机上，而 SD 卡运行在默认的 ESP32 FSPI 主机上。SD 片选（D6）在空闲时保持为 HIGH，使卡保持离开共享总线。示例程序**先读取 SD 卡，然后再初始化 LCD**——它挂载 SD、将 BMP 解码到 RAM 帧缓冲区、调用 `SD.end()`，然后才初始化显示屏。这样的顺序可以防止两个 SPI 主机在共享的 D8/D10 引脚上发生冲突。

示例程序会以多个 SPI 频率挂载 SD 卡（4 MHz → 1 MHz → 400 kHz），然后运行一个快速写入/读取探测（`/SDPROBE.TXT`），在解码任何图像之前确认文件系统可访问。随后它会在 SD 根目录中查找 BMP 文件（首选名称：`/test.bmp`、`/TEST.BMP`、`/image.bmp`、`/IMAGE.BMP` 等），按行将其解码到 RGB565 帧缓冲区中，并在屏幕上绘制结果，顶部显示“BMP OK”标题（显示解码时间），底部边缘显示文件路径。

**支持的 BMP 格式：**

<div class="table-center">
  <table align="center">
    <tr><th>格式</th><th>位深</th><th>说明</th></tr>
    <tr><td>未压缩 BMP (BI_RGB)</td><td>24 位（也接受 16/32 位）</td><td>BGR888 转换为 RGB565 进行显示</td></tr>
  </table>
</div>

大于 172×320 的图像会被居中裁剪；较小的图像会居中显示。为获得最佳效果，请使用尺寸恰好为 172×320 像素、24 位未压缩的 BMP，并命名为 `/test.bmp`。

### 运行演示

**步骤 1.** 将 MicroSD 卡格式化为 **FAT32**。

**步骤 2.** 将一个名为 `test.bmp` 的 24 位未压缩 BMP 图像（理想尺寸为 172×320 像素）复制到 SD 卡根目录。

**步骤 3.** 将 SD 卡插入显示板上的 MicroSD 插槽。

**步骤 4.** 在 Arduino IDE 中打开 `xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 5.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应当会看到：

```
=== XIAO ESP32-S3 Plus 1.47 SD BMP Reader Diagnostic v0.8 ===
[PIN] SD  CS=D6 SCK=D8 MISO=D9 MOSI=D10
[IMG] Put /test.bmp in SD root
[SD] Trying 4000000 Hz...
[SD] OK card=15193 MB freq=4000000 Hz
[PROBE] write /SDPROBE.TXT
[PROBE] write OK
[PROBE] read /SDPROBE.TXT
[PROBE] read OK: XIAO ESP32-S3 SD probe OK

[IMG] open start /test.bmp
[IMG] open done  /test.bmp
[IMG] file size=117814
[BMP] header OK path=/test.bmp size=122x320 bpp=24 row=368 offset=54
[IMG] BMP loaded /test.bmp
[DONE] BMP loaded path=/test.bmp readMs=7881 totalMs=8016
```

:::note
具体数值（`card=15193 MB`、`file size=117814`、`readMs=7881` 等）取决于你的 SD 卡和 BMP 文件——你的输出会有所不同。
:::

随后屏幕会显示解码后的图像，顶部有绿色 “BMP OK” 标题（显示解码时间，单位毫秒），底部显示文件路径。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_bmp_reader.gif" style={{width:500, height:'auto'}}/></div>

图像会显示在屏幕上，顶部有绿色 “BMP OK” 标题（显示解码时间），底部显示文件路径。如果未找到 BMP 文件，屏幕会显示 “No BMP loaded”，并附带说明，提示检查串口监视器并使用 `/test.bmp`。

---

## 麦克风与扬声器

### 演示 1：音量条

该示例将板载 PDM 麦克风变成一个大型、响应迅速的音量计。一个 10 段条形图填充在屏幕中央——低电平为绿色，中等电平为黄色，高音量时为红色。条形图上方显示百分比，并随电平变化颜色。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 工作原理

板载 **PDM（脉冲密度调制）数字麦克风** 通过 ESP32-S3 的 I2S 外设在 PDM RX 模式下进行采样。在 ESP-IDF v5（Arduino core 3.3.11）上，这使用了新的驱动 API（`driver/i2s_pdm.h`）：

<div class="table-center">
  <table align="center">
    <tr><th>引脚</th><th>信号</th><th>功能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>输出到麦克风的 PDM 时钟</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>来自麦克风的 PDM 数据输入</td></tr>
  </table>
</div>

I2S 外设被配置为**16 kHz 单声道**，带有 4 个 DMA 描述符，每个包含 256 帧。PDM CLK 驱动强度在初始化后被降低，以最小化电气耦合。在主循环中通过 `i2s_channel_read()` 以 20 ms 超时时间读取采样数据。

**信号处理：**

1. **峰值提取** — 扫描每个 256 采样的缓冲区，找到绝对值最大的样本（峰值幅度）。
2. **归一化** — 将原始峰值从下限 40 映射到上限 16,000，生成 0.0–1.0 的音量值。低于下限的值被视为静音。
3. **指数平滑** — 显示的音量是原始峰值的指数移动平均（α = 0.20），以防止抖动。当检测到静音时，显示值每帧按 ×0.94 衰减。

**音量条绘制：**

<div class="table-center">
  <table align="center">
    <tr><th>段</th><th>颜色</th><th>音量范围</th></tr>
    <tr><td>0–4（底部 5 格）</td><td>绿色</td><td>0% – 50%</td></tr>
    <tr><td>5–8（中间 4 格）</td><td>黄色</td><td>50% – 90%</td></tr>
    <tr><td>9（顶部）</td><td>红色</td><td>90% – 100%</td></tr>
  </table>
</div>

该音量条使用**差分渲染**：仅重绘自上一帧以来状态发生变化的段。未变化的段保持不动，从而最小化 SPI 传输并防止闪烁。

#### 运行示例

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_mic_canvas.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 打开 **Tools > Serial Monitor**（115200 波特率）。你应该会看到：

```
=== Volume Bar (ESP32-S3) ===
[MIC] PDM RX ready (IDF v5)
[MIC] ready — speak or blow into the mic
```

**步骤 4.** 对着 PDM 麦克风（位于显示板左下角附近）说话或吹气。音量条会从绿色填充到黄色再到红色，上方的百分比也会随之更新。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_mic_canvas.gif" style={{width:500, height:'auto'}}/></div>

音量条实时响应。在安静的房间里，音量条保持为空。从约 20 cm 远处以正常音量说话会点亮绿色段。直接对着麦克风吹气会进入黄色或红色范围。

---

### 示例 2：SD 录音机

此示例将开发板变成一个简单的录音机。按下 **USR1** 从板载 PDM 麦克风录制 5 秒音频，将其以 WAV 文件保存到 MicroSD 卡，然后按下 **USR2** 通过外接的 **MAX98357A** I2S 功放和扬声器回放录音。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::note
此示例使用 **Seeed_GFX2** 进行屏幕状态显示，并使用 esp32 开发板包中自带的 **`SD.h`** 进行文件访问。**不需要 SdFat**。
:::

#### 硬件连接

**MicroSD 卡。** 在烧录示例或上电**之前**，将 FAT32 格式化的 MicroSD 卡插入显示板上的卡槽。板载 PDM 麦克风无需任何外部接线。

**扬声器输出。** 将 MAX98357A I2S 功放模块连接到底部的 I2S 引出焊盘：

<div class="table-center">
  <table align="center">
    <tr><th>I2S 焊盘</th><th>XIAO 引脚</th><th>GPIO</th><th>MAX98357A</th></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>GPIO38</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>GPIO39</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>GPIO40</td><td>LRC / WS</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>—</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>—</td><td>GND</td></tr>
  </table>
</div>

将扬声器连接到 MAX98357A 的 **SPK+** 和 **SPK-** 端子。

#### 工作原理

该示例依次运行四个阶段，按顺序使用四种不同的外设：

**PDM 麦克风（录音）。** 板载 PDM 麦克风通过 I2S 外设在 PDM RX 模式下，在 **D0 (PDM_CLK)** 和 **D1 (MIC_DATA)** 上以 16 kHz 单声道采样。为避免录音开头出现“咔嗒”声，前 **300 ms** 的采集数据会被丢弃作为预热数据。

**RAM 缓冲区。** 以 16 kHz、16 位单声道录制 5 秒音频需要 **160,000 字节**（`5 s × 16,000 samples/s × 2 bytes`）。这些采样数据先保存在 RAM 缓冲区中，然后再写入 SD 卡。

**SD 卡（存储）。** 录音被写入 MicroSD 卡上的 `/REC_RAW.WAV` 文件，使用 ESP32 开发板包自带的 `SD.h`。示例会以多个 SPI 频率挂载 SD 卡——依次尝试 **8 MHz → 4 MHz → 1 MHz → 0.4 MHz**——直到有一个成功。每次新的录音都会覆盖之前的文件。

:::caution
此示例在启动时会删除 `/REC_RAW.WAV`。如果你想保留录音，请在重新启动开发板前将文件拷贝到电脑上。
:::

**I2S 回放。** 回放时 I2S 外设工作在主机 / 发送模式，配置为 **16 kHz、16 位、Philips 立体声**。单声道采样会被复制到 I2S 的左右两个声道，从而无论 MAX98357A 选择哪个声道都能播放。

**共享 LCD/SD 总线。** LCD 和 SD 卡共用 **D8**（SCK）、**D9**（MISO）和 **D10**（MOSI）引脚。该示例通过为它们分配各自的 SPI 主机来避免冲突：

- **LCD** 使用 Seeed_GFX2 的 **HSPI** 主机。
- **SD 卡** 使用 ESP32 的默认 **FSPI** 主机。
- 在向 SD 卡写入或从 SD 卡读取之前，示例会调用 `display.end()` 以释放 LCD 对共享引脚的占用，然后在 SD 传输完成后重新初始化显示屏。

这种分离方式避免了 LCD 刷新与 SD 卡访问之间的 SPI 事务冲突。

#### 运行示例

**步骤 1.** 将一张 **FAT32** MicroSD 卡插入显示板上的卡槽。

**步骤 2.** 按上述说明将 **MAX98357A** 功放和扬声器连接到 I2S 引出焊盘。

**步骤 3.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_sd_record.ino`。

**步骤 4.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（使用 esp32 开发板包版本 **3.3.11**）以及正确的 **Port**，然后点击 **Upload**。

**步骤 5.** 上传完成后，屏幕会显示 **"SD Recorder"**。

**步骤 6.** 按下 **USR1**，对着板载 PDM 麦克风说话 5 秒。

**步骤 7.** 等待屏幕显示 **"Saved SD WAV"** —— 录音已经写入 SD 卡。

**步骤 8.** 按下 **USR2**，通过扬声器回放刚刚录制的音频。

#### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

- 录音过程中，屏幕会显示录音进度。
- 录音结束后，屏幕会显示 **"Saved SD WAV"**。
- SD 卡上会生成一个 `/REC_RAW.WAV` 文件。
- 按下 **USR2** 会通过扬声器回放你刚刚录制的音频。

---

## IMU

1.47'' IPS Display 配备了一个板载 6 轴 IMU（LSM6DS3），通过 I2C 连接在 D4/D5 上。**D14** 上的运动中断线支持硬件唤醒和手势检测。

:::note
板载 IMU 为 **LSM6DS3**（从电路板原理图确认，I2C 地址为 `0x6A`）。示例草图还会额外探测 QMI8658 兼容传感器作为防御性后备，但出厂的 1.47'' IPS Display 使用的是 LSM6DS3。
:::

下面的两个示例都通过 I2C 读取板载 **LSM6DS3**。草图同样会探测 QMI8658 兼容传感器作为防御性后备，但抬手唤醒配置针对的是 LSM6DS3 的寄存器。

<a id="imu-quicksand"></a>

### 示例 1：电子流沙

此示例将屏幕变成一个交互式流体模拟——金色沙粒会根据板载 6 轴 IMU 测得的重力方向流动和沉降。倾斜开发板，沙粒会实时改变流动方向。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该仿真在 172×320 屏幕上叠加了一个 **24×45 占用网格**，其中每个单元为 7×7 像素。大约有 **180 个粒子** 被放置在网格中，每个粒子具有位置、速度以及金色渐变颜色。

IMU 通过 I2C（D4/D5）每 **8 ms** 读取一次。示例程序会在两个已知地址上探测 IMU——先是 QMI8658，然后是 LSM6DS3——并使用先响应的那个。原始加速度值经过低通滤波，用于推导重力向量。当你倾斜开发板时：

1. **重力向量更新** —— 使用指数移动平均对加速度计数据进行平滑处理，以避免抖动。
2. **粒子速度** —— 每个粒子沿重力向量方向加速，并带有阻尼以及基于其在流体中深度的每粒子流动性系数。
3. **单元占用** —— 在流体中更深（相对于重力更接近“底部”）的粒子流动性更低，从而产生逼真的堆积效果。
4. **差分渲染** —— 只重绘粒子移入或移出的单元，最大限度减少 SPI 传输并保持动画流畅。

靠近表面的粒子流动自如（流动性更高）；埋得更深的粒子紧密堆积（流动性更低）——模拟真实沙子的行为。

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_electronic_quicksand.ino`。

**步骤 2.** 选择开发板和端口，然后点击 **Upload**。

**步骤 3.** 上传完成后，屏幕底部会被金色粒子填满。将开发板向不同方向倾斜——沙子会像被重力拉动一样流动。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以确认初始化：

```
=== Electronic Quicksand ESP32-S3 1.47 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

当你倾斜开发板时，粒子会朝较低的一边流动。当显示屏保持水平放置时，演示会保留之前的重力方向。

---

### 演示 2：抬起唤醒

该演示实现了一个由 IMU 内置唤醒中断（连接到 **D14**）驱动的**屏幕休眠/唤醒系统**。屏幕在 8 秒无操作后会自动关闭（背光关闭 + ESP32 轻睡眠），当你拿起或移动设备时会立即唤醒。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

该演示使用 IMU 的**嵌入式唤醒事件检测器**——这是一项硬件特性，可在内部监测加速度计数据，并在运动超过可配置阈值时拉高 INT1 引脚（在本板上连接到 D14）。这意味着 MCU 不需要持续轮询加速度计。

抬起唤醒演示将板载 **LSM6DS3** 配置为由运动触发唤醒。

**IMU 配置（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>寄存器</th><th>数值</th><th>用途</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度计 @ 104 Hz，±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>启用嵌入式中断</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>唤醒阈值（中低灵敏度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>无持续时间滤波（响应更快的唤醒）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>将唤醒信号路由到 INT1</td></tr>
  </table>
</div>

**休眠/唤醒流程：**

1. **活动状态** —— 屏幕点亮，背光 PWM 为 160。IMU 数据和电池电压分别每 250 ms / 1000 ms 刷新一次。倒计时计时器显示距离自动休眠剩余的秒数。
2. **自动休眠** —— 在 8 秒无活动后，示例程序关闭背光，显示“Sleeping... Pick up device to wake”消息，通过 `esp_sleep_enable_gpio_wakeup()` 将 D14 配置为唤醒源，并让 ESP32 进入轻睡眠。
3. **唤醒** —— 当用户拿起开发板时，IMU 检测到运动并将 D14 拉高。ESP32 从轻睡眠中唤醒并重绘 UI。

**手动测试按键：**

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>动作</th></tr>
    <tr><td>USR1</td><td>D19</td><td>强制唤醒</td></tr>
    <tr><td>USR2</td><td>D15</td><td>强制休眠</td></tr>
  </table>
</div>

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_wakeup.ino`，选择开发板和端口，然后点击 **Upload**。

**步骤 2.** 屏幕会显示一个仪表盘，包括电源状态、运动数据和倒计时计时器。让开发板静止 8 秒——它会自动进入休眠。

**步骤 3.** 拿起开发板或轻轻摇晃——屏幕会立即唤醒。

**步骤 4.** 打开 **Tools > Serial Monitor**（115200 波特率）以观察 IMU 检测和唤醒事件：

```
=== XIAO ESP32-S3 Plus 1.47 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[IMU] wake config OK
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
```

每次运动唤醒都会打印一行新的 `[WAKE] IMU_D14  count=N`，其中计数值递增。休眠切换仅在屏幕上显示——当开发板进入休眠时不会打印串口信息。

### 预期结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

在唤醒状态下，屏幕会显示实时加速度计和陀螺仪数据。静止 8 秒后，屏幕熄灭，ESP32-S3 进入轻睡眠。拿起设备后，屏幕会在不到一秒的时间内恢复显示，同时唤醒计数器递增。

---

## 用户按键

1.47 英寸 IPS 显示屏上有 **两个物理按键** 连接到 XIAO ESP32-S3 Plus：

<div class="table-center">
  <table align="center">
    <tr><th>按键</th><th>引脚</th><th>逻辑</th><th>丝印标识</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>低电平有效（按下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>低电平有效（按下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

### 读取按键

两个按键都使用 XIAO 的内部上拉电阻。一个简单的轮询读取并带消抖的示例如下：

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

### 使用中断进行消抖

为了实现响应迅速且带消抖的按键处理，你可以使用 GPIO 中断并配合一个短暂的稳定延时：

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

## 电池电压检测

该演示通过 **D16** 读取板载电池分压，并在 1.47 英寸 IPS 显示屏上以黄色实时显示两项读数：D16 分压的原始电压以及计算得到的电池电压。它只显示电压读数；不会估算电池电量百分比或报告充电状态。

**代码位置：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 工作原理

**电池电路：**

ESP32-S3 Plus 通过连接到 **D16** 的板载分压电路读取 LiPo 电池电压：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>模拟输入，用于读取分压后的电池电压。内部连接到一个分压电路（316K / 160K）。<strong>请勿在外部使用此引脚。</strong></td></tr>
  </table>
</div>

**分压比：** R14 = 316 kΩ，R15 = 160 kΩ → **分压比 = (316 + 160) / 160 ≈ 2.975**

**读取过程：**

示例程序使用 `Board_XIAO_1inch47_Touch_Display<13, 12>` 和 `Config_Seeed_1inch47_Touch_JD9853A`（172×320，BGR，无反转）初始化显示屏，然后使用 `analogReadMilliVolts()` 在 12 位分辨率、11 dB 衰减下，以 700 µs 间隔对 **D16** 采样 12 次。它对采样值求平均得到分压后的原始电压，再乘以分压比得到电池电压（`Calc = D16 × 2.975`），并将这两个值以两行居中的黄色文本显示。只有当任一数值发生显著变化时（D16 ≥ 0.02 V 或 Calc ≥ 0.05 V），屏幕才会刷新。

:::note
没有充电状态信号连接到任何 ESP32-S3 GPIO。本演示仅显示电压读数；它不会检测电池是否存在或充电状态，也不会估算电池电量百分比。
:::

### 运行演示

**步骤 1.** 在 Arduino IDE 中打开 `xiao_esp32s3_147_battery_status.ino`。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** 和正确的 **Port**。

**步骤 3.** 点击 **Upload**。

**步骤 4.** 观察屏幕——它会显示两行黄色文本：原始 D16 分压电压和计算得到的电池电压。连接或断开 LiPo 电池（或 USB-C 线缆），即可观察数值的变化。

### 预期结果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>电压读数</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>电池连接器</strong>（背面）</div></td>
    </tr>
  </table>
</div>

屏幕顶部一行显示原始 D16 分压电压，底部一行显示计算得到的电池电压（`Calc`）。当连接 LiPo 电池时，`Calc` 近似等于电池端电压。在仅使用 USB 供电时也可能出现读数，因此仅凭 `Calc` 无法确认是否连接了电池。

该演示还会每秒向串口监视器打印一行诊断信息，例如：

```
D16 1.39V | Calc 4.14V
```

---

## 资源

- **🗃️[PCB Design Files]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **🖨️[3D Printed Enclosure]** [XIAO 1.47'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843008-enclosure-for-xiao-147-ips-touch-display-esp32nrf5)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — 所有 Function 演示都在 `code_GFX2/Function/147_ESP32/` 目录中

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
