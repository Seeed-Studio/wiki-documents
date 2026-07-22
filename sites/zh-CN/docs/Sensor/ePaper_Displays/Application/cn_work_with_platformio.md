---
description: 使用 PlatformIO 搭配 Seeed ePaper 产品的参考指南——VS Code 安装、项目结构、platformio.ini 配置、Seeed_GFX 设置以及按产品选择环境。
title: 使用 PlatformIO 开发
keywords:
  - ePaper 显示屏
  - PlatformIO
  - platformio.ini
  - Seeed_GFX
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_platformio
sidebar_position: 5
last_update:
  date: 06/01/2026
  author: Citric
createdAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/epaper_work_with_platformio/
updatedAt: '2026-06-12'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 PlatformIO 开发

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/248.png" style={{width:650, height:'auto'}}/></div>

本页是 Seeed ePaper 产品的 **PlatformIO 配置参考**。它重点说明与 Arduino IDE 工作流不同的部分：

1. 在 Visual Studio Code 中安装 PlatformIO。
2. 理解 PlatformIO 创建的项目结构。
3. 编辑 `platformio.ini`，这个主配置文件用于选择开发板、选择框架、声明库依赖、设置串口监视器波特率、上传选项以及编译标志。
4. 为每款 Seeed ePaper 产品选择正确的 PlatformIO 环境。
5. 添加 `Seeed_GFX`，并使用 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) 生成匹配的 `driver.h`。

如果你在寻找显示绘图 API、示例草图或与硬件相关的演示代码，请从 [使用 Arduino 开发](/cn/epaper_work_with_arduino) 和本页末尾链接的产品菜谱开始。PlatformIO 中使用的 C/C++ 代码通常与 Arduino 代码相同，主要区别在于项目的配置方式。

## 兼容硬件

对于提供 Arduino 兼容固件路径的 Seeed ePaper 产品，PlatformIO 可用于基于代码的工作流。先使用本页准备 PlatformIO 项目，然后为你的开发板和屏幕选择正确的 `driver.h`。

<div class="table-center">
  <table align="center">
    <tr>
      <th>产品线</th>
      <th>典型 MCU / 开发板目标</th>
      <th>配置说明</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>基于 ESP32-S3 的 reTerminal E 系列</td>
      <td>使用 ESP32-S3 的 PlatformIO 环境，然后为具体的 reTerminal 型号生成 `driver.h`。</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05 驱动板</strong></td>
      <td>XIAO ESP32-S3 系列</td>
      <td>在整个 EE0x 系列中使用相同的 PlatformIO 结构。`BOARD_SCREEN_COMBO` 的取值会随所选开发板和屏幕而变化。</td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY 套件</strong></td>
      <td>XIAO ESP32-S3 系列</td>
      <td>当你编写自定义 Arduino 风格固件、而不是使用 TRMNL 云固件时，请使用 ESP32-S3 环境。</td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper 面板</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>使用 XIAO ESP32-C3 的 PlatformIO 环境，然后参考产品菜谱进行与屏幕对应的 `driver.h` 配置。</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05 以及基于 nRF52840 的 ePaper 板卡</strong></td>
      <td>XIAO nRF52840 系列</td>
      <td>在固件开发中使用 nRF52840 的 PlatformIO 环境。如果尚未发布针对某款 ePaper 的专用菜谱，请将本页作为环境参考，并结合产品原理图/菜谱获取引脚信息。</td>
    </tr>
  </table>
</div>

:::note
PlatformIO 项目只是构建和上传环境。显示仍然依赖正确的 `driver.h`。如果 `platformio.ini` 正确但 `driver.h` 针对的是错误的开发板或面板，固件可能会成功编译和上传，但屏幕仍然一片空白。
:::

## 为什么在 ePaper 开发中使用 PlatformIO？

当你的 ePaper 项目不再只是一个单一草图时，PlatformIO 会非常有用：

- 它将开发板、框架、库、上传速度、串口监视器速度和编译标志集中保存在一个可版本控制的 `platformio.ini` 文件中。
- 它可以在一个项目中定义多个构建环境，因此同一代码库可以面向多款 Seeed ePaper 产品。
- 它通过 `lib_deps` 下载库，使项目更容易在另一台电脑上复现。
- 它在 VS Code 中提供构建、上传、清理和串口监视器任务。

在显示绘图和硬件 API 方面，继续使用 Arduino 菜谱中相同的 Arduino 风格 C/C++ 代码即可。PlatformIO 主要改变的是项目布局和配置方式。

## 步骤 1：安装 VS Code 和 PlatformIO

**步骤 1。** 下载并安装 [Visual Studio Code](https://code.visualstudio.com/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2。** 在 VS Code 中打开 **Extensions**，搜索 `PlatformIO IDE` 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3。** 扩展安装完成后重启 VS Code。

**步骤 4。** 从 VS Code 活动栏中的 PlatformIO 图标打开 **PlatformIO Home**。

:::tip
如果你在 VS Code 中使用 PlatformIO IDE，PlatformIO Core 已包含在扩展中。只有当你希望在 VS Code 之外使用 `pio` 命令时，才需要单独安装 PlatformIO Core。
:::

## 步骤 2：创建一个 PlatformIO 项目

**步骤 1。** 在 **PlatformIO Home** 中选择 **New Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2。** 输入项目名称。

**步骤 3。** 选择任意一个临时的 Arduino 兼容开发板，让 PlatformIO 创建项目。这个首次选择仅用于生成项目文件夹。

**步骤 4。** 选择 **Arduino** 作为框架。

**步骤 5。** 点击 **Finish**，并等待 PlatformIO 创建项目。

**步骤 6。** 打开 `platformio.ini`，将生成的配置替换为下一节中给出的 Seeed 配置。

:::caution
本 ePaper 产品线所使用的大多数 Seeed Studio 开发板，是通过 Seeed 的 PlatformIO 平台包维护的，而不仅仅是通过 PlatformIO 的默认开发板列表。如果你在 PlatformIO 的 **New Project** 窗口中找不到完全匹配的 Seeed 开发板，这是正常的。请先创建一个临时项目，然后在 `platformio.ini` 中设置 `platform = https://github.com/Seeed-Studio/platform-seeedboards.git` 和正确的 `board` ID。
:::

创建完成后，以下文件和文件夹最为重要：

<div class="table-center">
  <table align="center">
    <tr>
      <th>路径</th>
      <th>用途</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>主 PlatformIO 配置文件。本指南中最重要的文件。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>主固件源文件。Arduino 风格代码写在这里。</td>
    </tr>
    <tr>
      <td><code>lib/</code></td>
      <td>可选的本地库。这里也是放置本地 <code>driver.h</code> 辅助文件夹的便捷位置。</td>
    </tr>
    <tr>
      <td><code>.pio/</code></td>
      <td>PlatformIO 的构建输出和已下载依赖。不要手动编辑此文件夹。</td>
    </tr>
  </table>
</div>

## 步骤 3：理解 `platformio.ini`

`platformio.ini` 是 PlatformIO 项目的核心。每个 `[env:name]` 段定义一个构建环境。环境会告诉 PlatformIO 要为哪块开发板编译、使用哪个框架、下载哪些库，以及如何上传或监视固件。

对于初学者，最简单的工作流是从 [步骤 4](#step-4-copy-the-configuration-for-your-device) 复制适用于你设备的完整配置，粘贴到 `platformio.ini` 中，然后创建匹配的 `driver.h` 文件。你不需要自己把一个共享基础段和另一个设备段合并起来。

最重要的字段包括：

<div class="table-center">
  <table align="center">
    <tr>
      <th>字段</th>
      <th>控制内容</th>
      <th>示例</th>
    </tr>
    <tr>
      <td><code>platform</code></td>
      <td>PlatformIO 平台包。对于本指南中的 Seeed 开发板，请使用 Seeed 的平台包 URL，以便 PlatformIO 下载开发板定义。</td>
      <td><code>platform = https://github.com/Seeed-Studio/platform-seeedboards.git</code></td>
    </tr>
    <tr>
      <td><code>board</code></td>
      <td>PlatformIO 开发板 ID。它决定 MCU、Flash 布局、上传工具和默认构建设置。</td>
      <td><code>board = seeed-xiao-esp32-s3-sense</code></td>
    </tr>
    <tr>
      <td><code>framework</code></td>
      <td>固件使用的软件框架。对于 Arduino 风格示例，请使用 <code>arduino</code>。</td>
      <td><code>framework = arduino</code></td>
    </tr>
    <tr>
      <td><code>monitor_speed</code></td>
      <td>串口监视器波特率。应与固件中的 <code>Serial.begin(...)</code> 保持一致。</td>
      <td><code>monitor_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>upload_speed</code></td>
      <td>PlatformIO 通过 USB 串口烧录固件时使用的上传波特率。</td>
      <td><code>upload_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>lib_deps</code></td>
      <td>PlatformIO 为该环境自动下载的库。</td>
      <td><code>https://github.com/Seeed-Studio/Seeed_GFX</code></td>
    </tr>
    <tr>
      <td><code>build_flags</code></td>
      <td>额外的编译器定义。仅在产品菜谱或库有要求时使用。</td>
      <td><code>-DBOARD_HAS_PSRAM</code></td>
    </tr>
    <tr>
      <td><code>upload_port</code></td>
      <td>可选的固定串口。如果你更喜欢 PlatformIO 自动检测，可以不设置。</td>
      <td><code>upload_port = /dev/ttyACM0</code></td>
    </tr>
  </table>
</div>

:::caution
不要在不相关的产品之间盲目复制 `platformio.ini`。相同的 C/C++ 源码也许可以移植，但 `board`、PSRAM 设置和 `driver.h` 必须与实际硬件匹配。
:::

## 步骤 4：复制适用于你设备的配置

选择与你设备对应的标签页，复制整个 `platformio.ini` 代码块，并将其粘贴到 PlatformIO 项目中的 `platformio.ini` 文件里。每个标签页中都刻意完整重复了配置，因此你不需要把共享基础段和设备段手动合并。

:::tip
第一次构建可能会花费更长时间，因为 PlatformIO 需要下载 Seeed 的平台包、工具链、Arduino 框架以及 `Seeed_GFX` 库。
:::

<Tabs groupId="platformio-device">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

对 **reTerminal E1001** 使用以下配置：

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

使用为 **reTerminal E1001** 生成的 `driver.h`。在现有的 `Seeed_GFX` 示例中，E1001 使用：

```cpp
#define BOARD_SCREEN_COMBO 520
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

对 **reTerminal E1002** 使用以下配置：

```ini
[env:reterminal_e1002]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

使用为 **reTerminal E1002** 生成的 `driver.h`。在现有的 `Seeed_GFX` 示例中，E1002 使用：

```cpp
#define BOARD_SCREEN_COMBO 521
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

对 **reTerminal E1003** 使用以下配置：

```ini
[env:reterminal_e1003]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

使用为 **reTerminal E1003** 生成的 `driver.h`。在现有的 `Seeed_GFX` 示例中，E1003 使用：

```cpp
#define BOARD_SCREEN_COMBO 522
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

对 **reTerminal E1004** 使用以下配置：

```ini
[env:reterminal_e1004]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

使用为 **reTerminal E1004** 生成的 `driver.h`。在现有的 `Seeed_GFX` 示例中，E1004 使用：

```cpp
#define BOARD_SCREEN_COMBO 523
```

</TabItem>
<TabItem value="ee0x" label="EE02 / EE03 / EE04 / EE05">

对 **EE02 / EE03 / EE04 / EE05** ESP32-S3 ePaper 驱动板使用以下配置：

```ini
[env:ee0x_epaper_driver_board]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

为你所使用的具体 EE0x 板卡和 ePaper 面板生成 `driver.h`。例如，带有 7.5" 单色 ePaper 面板的 EE04 使用：

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

对 **TRMNL 7.5" (OG) DIY Kit** 上的自定义 Arduino 风格固件使用以下配置：

```ini
[env:trmnl_diy_kit]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

在构建之前，为 TRMNL DIY Kit 的显示组合生成 `driver.h`。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

对 **XIAO 7.5" ePaper Panel** 使用以下配置：

```ini
[env:xiao_075_epaper_panel]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c3
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

在构建之前，为 XIAO 7.5" ePaper Panel 生成 `driver.h`。

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

将此配置用作 **EN04 / EN05** 基于 nRF52840 的 ePaper 板卡在 PlatformIO 中的起点：

```ini
[env:en04_en05]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840-plus
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
```

EN04 / EN05 的显示驱动、引脚映射和库依赖应遵循你所基于的产品专用固件或 cookbook。

</TabItem>
</Tabs>

## 步骤 5：添加 `driver.h`

`platformio.ini` 用于选择 MCU 和构建环境。`driver.h` 用于选择 `Seeed_GFX` 所使用的 ePaper 板卡和屏幕组合。

**步骤 1.** 打开 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)。

**步骤 2.** 选择你的板卡和屏幕。

**步骤 3.** 复制生成的配置。

**步骤 4.** 将该配置添加到一个可被固件包含的 `driver.h` 文件中。

一个典型的生成文件如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

现有 ePaper 文档中常用的 `BOARD_SCREEN_COMBO` 值包括：

<div class="table-center">
  <table align="center">
    <tr>
      <th>硬件</th>
      <th>示例生成设置</th>
      <th>权威来源</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>#define BOARD_SCREEN_COMBO 520</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>#define BOARD_SCREEN_COMBO 521</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>#define BOARD_SCREEN_COMBO 522</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>#define BOARD_SCREEN_COMBO 523</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>EE04 + 7.5" 单色 ePaper</td>
      <td><code>#define BOARD_SCREEN_COMBO 502</code><br/><code>#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>其他 EE0x / 屏幕组合</td>
      <td>按板卡和屏幕分别生成</td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
  </table>
</div>

:::caution
当你更换 ePaper 板卡、显示尺寸、显示颜色类型或驱动板时，一定要重新生成 `driver.h`。不匹配的 `BOARD_SCREEN_COMBO` 是导致屏幕空白的最常见原因之一。
:::

最终，使用 PlatformIO 的完整屏幕产品，其代码和项目框架应如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/249.png" style={{width:1000, height:'auto'}}/></div>


## 步骤 6：构建、烧录和监视

在 `platformio.ini` 和 `driver.h` 准备好之后，在 VS Code 中使用 PlatformIO 工具栏：

<div class="table-center">
  <table align="center">
    <tr>
      <th>操作</th>
      <th>作用</th>
    </tr>
    <tr>
      <td><strong>Build</strong></td>
      <td>编译所选环境，并检查板卡、框架、库和代码是否兼容。</td>
    </tr>
    <tr>
      <td><strong>Upload</strong></td>
      <td>通过所选上传协议将固件烧录到已连接的设备。</td>
    </tr>
    <tr>
      <td><strong>Monitor</strong></td>
      <td>使用来自 <code>monitor_speed</code> 的波特率打开串口监视器。</td>
    </tr>
    <tr>
      <td><strong>Clean</strong></td>
      <td>删除之前的构建输出。在更改板卡包、PSRAM 设置或主要构建标志后使用此操作。</td>
    </tr>
  </table>
</div>

如果项目有多个环境，请在构建或烧录之前，从 PlatformIO 项目任务中选择目标环境。

## 可选：使用 Seeed_GxEPD2 库

本页中的默认示例使用 `Seeed_GFX`。对于基于 GxEPD2 显示工作流的项目，你可以将显示库依赖替换为 Seeed 的 GxEPD2 分支。

仅当项目代码是为 `Seeed_GxEPD2` / `GxEPD2` API 编写时才使用此选项。如果你的代码遵循标准的 `Seeed_GFX` 示例，请在 `lib_deps` 中保留 `Seeed_GFX`。

例如，可以将 reTerminal E1001 的配置修改为如下所示：

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Projects/Seeed_GxEPD2
```

此处仅展示一个显示库以保持配置清晰。如果你的项目需要额外的库，请在 `lib_deps` 下以单独的行添加它们。

## 接下来去哪里

本页有意聚焦于 PlatformIO 环境配置。请继续查看各产品专用页面，了解接线、屏幕选择和固件行为：

- [使用 Arduino](/cn/epaper_work_with_arduino) — 通用 Arduino 和 `Seeed_GFX` 工作流。
- [XIAO ePaper Driver Boards PlatformIO Cookbook](/cn/ee04_with_platformio) — 以 EE04 为运行示例的 EE0x PlatformIO 工作流。
- [reTerminal E 系列 Arduino cookbook](/cn/reterminal_e10xx_with_arduino) — 适用于 E1001 / E1002 / E1003 / E1004 的显示示例。
- [reTerminal E 系列板载外设 cookbook](/cn/reterminal_e10xx_with_arduino_peripherals) — 按键、蜂鸣器、电池监测、SHT4x 传感器和 microSD 示例。
- [XIAO 7.5" ePaper Panel Arduino 指南](/cn/xiao_075inch_epaper_panel_arduino) — 基于 XIAO ESP32-C3 面板的产品专用设置。
- [TRMNL DIY Kit Arduino 指南](/cn/ogdiy_kit_works_with_arduino) — 面向 TRMNL Kit 硬件的自定义 Arduino 固件路径。

## 常见问题

### Q1：为什么 PlatformIO 的板卡列表中没有显示我的 Seeed 开发板？

对于许多 Seeed 开发板来说，这是预期行为。本指南中使用的板卡定义来自 Seeed 的 PlatformIO 平台包，因此在安装该平台包之前，它们可能不会出现在 PlatformIO 默认的 **New Project** 板卡搜索中。

在 `platformio.ini` 中直接使用 Seeed 的平台包 URL：

```ini
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
```

然后将 `board` 设置为你的产品所使用的 Seeed 板卡 ID，例如：

```ini
board = seeed-xiao-esp32-s3-sense
```

首次构建时，PlatformIO 会下载该平台包，然后识别该板卡 ID。

### Q2：为什么固件上传成功了，但电子纸屏幕仍然是空白的？

最常见的原因是 `driver.h` 错误或缺失。

- 使用 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) 重新生成 `driver.h`。
- 确认所选的开发板和显示屏与实际硬件相匹配。
- 确认生成的 `BOARD_SCREEN_COMBO` 对包含 `Seeed_GFX` 的源文件是可见的。
- 对于具有大缓冲区的 ESP32-S3 产品，确认产品使用手册中是否要求设置 PSRAM。

### Q3：为什么 PlatformIO 无法向开发板上传固件？

对于 reTerminal E1003，一个常见原因是上传波特率过高。在检查其他原因之前，请在同一个 environment 块中将 `upload_speed` 设置为 `115200`。

```ini
upload_speed = 115200
```

如果上传仍然失败，请继续进行以下检查：

- 使用支持数据传输的 USB-C 线缆。
- 断开其他串口设备后再试。
- 仅在自动检测选择了错误端口时才设置 `upload_port`。
- 对于基于 ESP32 的开发板，如果开发板不会自动进入下载模式，请在连接 USB 时按住 boot 按钮。

## 资源

- **[Docs]** [PlatformIO 项目配置文件](https://docs.platformio.org/en/stable/projectconf/index.html)
- **[Docs]** [适用于 VS Code 的 PlatformIO IDE](https://docs.platformio.org/en/stable/integration/ide/pioide.html)
- **[GitHub]** [Seeed PlatformIO 平台包](https://github.com/Seeed-Studio/platform-seeedboards)
- **[GitHub]** [Seeed PlatformIO Arduino Blink 示例](https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/arduino-blink)
- **[GitHub]** [Seeed_GFX 库](https://github.com/Seeed-Studio/Seeed_GFX)
- **[Tool]** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
- **[Wiki]** [适用于 Arduino 支持开发板的 PlatformIO](/cn/Software-PlatformIO)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
