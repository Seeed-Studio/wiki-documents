---
description: 一篇关于搭建 Meshtastic 固件源代码环境、编译太阳能节点并烧录固件的实用教程。
title: Meshtastic 源代码开发教程
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/cn/meshtastic_source_code_practical_tutorial_solar_node/
createdAt: '2026-03-19'
updatedAt: '2026-05-14'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic 固件源代码实用教程

本教程面向刚开始接触 Meshtastic 固件源代码的用户，涵盖 Windows 和 macOS 的常见工作流程。目标很简单：克隆官方仓库，完成一次成功的构建，做一个简单的 UI 修改，并将修改后的固件烧录到设备上进行验证。

如果你已经熟悉 Git、Python 或 PlatformIO，可以跳过对应章节，直接进入上手实践部分。

:::tip
本指南包含 Windows 和 macOS 的常用命令。大部分截图仍然来自 Windows 环境，但在 macOS 上的整体流程非常相似。
:::

## 前置准备

在开始之前，请准备以下工具：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. 安装 Git

<Tabs>
<TabItem value="windows" label="Windows">

打开 Git for Windows 官方下载页面：

[Git for Windows](https://git-scm.com/install/windows)

通常在你打开页面时安装程序会自动开始下载。下载完成后，双击安装程序并按照安装向导进行操作。

在安装过程中，最重要的一步是**调整 PATH 环境变量**。请选择：

**Git from the command line and also from 3rd-party software**

对于其他选项，一般保持默认值即可。只需不断点击 `Next`。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

等待安装完成。

安装完成后，**关闭当前所有 PowerShell 和 VS Code 终端窗口**，然后重新打开一个新的 PowerShell 窗口并运行：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

如果显示了 Git 版本号，说明 Git 已成功安装。

**如果 `git` 命令仍然不可用**

你可以先在 PowerShell 中运行以下命令，确认 Git 的默认安装路径：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

然后手动将 Git 添加到系统环境变量中。

**图形界面修复步骤**

1. 按下 `Win`
2. 搜索 "Edit the system environment variables"
3. 打开后点击 **Environment Variables**
4. 在 **System variables** 下找到 `Path`
5. 点击 **Edit**
6. 点击 **New** 并添加以下两个路径：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 一路点击 **OK** 保存

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存后，你仍然需要：

- 关闭**所有** PowerShell 窗口
- 重新打开 PowerShell

然后运行：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

如果出现版本号，说明安装已经完成。

</TabItem>

<TabItem value="macos" label="macOS">

在 macOS 上，安装 Git 的方式不止一种，但使用 Homebrew 通常是最简单的选择：

1. 先安装命令行工具（Command Line Tools）：

```bash
xcode-select --install
```

2. 如果还没有安装 Homebrew，请先安装它：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. 安装 Git：

```bash
brew install git
```

4. 检查已安装的版本：

```bash
git --version
```

如果终端已经返回了有效的 Git 版本，则无需再次安装。

</TabItem>
</Tabs>

**配置你的 Git 身份信息**

接下来，配置你的 Git 用户信息。将示例值替换为你自己的姓名和邮箱地址：

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

然后运行：

```plain
git config --global --list
```

以确认配置已经生效。

### 2. 安装 Python 3

**通过命令行安装 Python**

<Tabs>
<TabItem value="windows" label="Windows">

在终端中运行以下命令：

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

如果第一个命令可以找到 Python，第二个命令通常就能直接安装它。

安装完成后，关闭终端并重新打开，然后运行：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

如果显示了版本号，说明 Python 和 pip 已经可以使用。

</TabItem>

<TabItem value="macos" label="macOS">

macOS 通常已经自带一个 Python 环境。在安装新版本之前，先检查是否已经可以使用 `python3` 和 `pip3`：

```bash
python3 --version
pip3 --version
```

如果它们不可用，或者你希望使用更新的版本，可以通过 Homebrew 安装 Python：

```bash
brew install python
```

安装完成后，重新打开终端并运行：

```bash
python3 --version
pip3 --version
```

如果你更习惯使用 `python` 和 `pip`，可以自行设置 shell 别名。不过在 macOS 上，使用 `python3` 和 `pip3` 通常更可靠。

</TabItem>
</Tabs>

### 3. 安装 PlatformIO

这一步对新手来说可能不太友好，因为 PlatformIO 会自动下载很多依赖，安装过程可能需要一些时间。如果安装过程中出现错误，通常最好耐心等待，并逐个排查问题。借助 AI 工具来分析报错信息也能节省时间。

在 VS Code 扩展市场中搜索 `PlatformIO` 并安装。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

安装完成后，左侧工具栏中通常会出现一个蚂蚁形状的图标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. 克隆 Meshtastic 固件仓库

Meshtastic 官方固件仓库为 `meshtastic/firmware`。

<Tabs>
<TabItem value="windows" label="Windows">

在你的工作目录终端中运行以下命令：

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

如果你的项目目录在其他磁盘或不同路径下，请先切换到对应位置。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

如果输出结果与上面的截图类似，说明仓库已经成功克隆。

</TabItem>

<TabItem value="macos" label="macOS">

在你的工作目录终端中运行以下命令：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

如果 `~/workplace` 还不存在，请先创建它：

```bash
mkdir -p ~/workplace
```

如果命令都正常执行完成，说明仓库已经成功克隆。

</TabItem>
</Tabs>

仓库准备好之后，你可以继续进行下面两个实践项目中的任意一个。项目 A 侧重于 `Wio Tracker L1` 的 UI 自定义；项目 B 侧重于基于 Meshtastic 的 `XIAO ESP32S3` 环境遥测。

## 项目 A：Wio Tracker L1 UI 自定义

### 实战练习

在这个阶段，不要急于修改代码。首先要确保项目可以完整地跑通一次构建流程。

建议从以下三个任务开始：

1. 打开 `firmware`
2. 查看 `platformio.ini`
3. 找到目标开发板对应的构建环境

一个重要细节：不要只关注根目录下的 `platformio.ini`。它实际上还包含了额外的配置文件，例如：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

这意味着真正的板级环境定义通常位于 `variants/.../platformio.ini` 下。

在确认目标开发板时，特别留意以下两个目录：

- `variants/`
- `boards/`

这里我们以 **Wio Tracker L1 Pro** 作为示例目标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

这表明，在 Meshtastic 中，**Wio Tracker L1 / L1 Pro 的构建目标是** `seeed_wio_tracker_L1`。

**最小修改实践总结**

如果你只想完成一次最小化的端到端实践，请关注以下关键步骤：

1. 安装 Git、Python 3、VS Code 和 PlatformIO。
2. 克隆 `meshtastic/firmware` 仓库并初始化子模块。
3. 使用 `pio run -e seeed_wio_tracker_L1` 确认原始项目可以成功构建。
4. 修改 `src/graphics/SharedUIDisplay.cpp` 中的显示逻辑。
5. 重新构建固件，并将生成的 UF2 文件烧录到设备上进行验证。

**步骤 1：确认项目可以成功构建**

这里我们使用 PlatformIO Core CLI 进行构建。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

对于第一次构建，建议运行以下命令：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image13.png)

如果界面看起来与上面的截图类似，说明构建过程已经正确开始。第一次构建通常会花比较长的时间，请耐心等待。

**如果构建失败**

当构建失败时，你可以先让 PlatformIO 安装当前环境所需的依赖：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

这种方式有几个好处：

- 它只安装依赖，而不会立刻开始完整构建。
- 它可以更容易看出是哪个软件包导致了问题。
- 错误信息通常更集中，也更容易排查。

依赖安装完成后，运行：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image14.png)

依赖安装完成后，再次运行正常的构建命令：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image15.png)

如果此时构建通过，说明你的固件输出已经成功生成。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**步骤 2：修改代码**

**练习 1：修改 UI 显示**

首先从板级配置开始追踪显示实现。你可以先查看：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

从这些配置文件中可以看到，L1 定义了 `HAS_SCREEN` 和 `USE_SSD1306`。这意味着它使用的是标准的 OLED 显示管线，而不是无屏幕配置，也不是电子墨水方案。

如果继续追踪显示逻辑，大部分相关代码位于：

- `src/graphics/`
- `src/graphics/draw/`

具体如何修改取决于你阅读源码的能力。这里我们从一个非常简单的例子开始：修改主屏幕 UI。

**修改 1：记录电池文本的右边界**

```cpp
Before / After

// Before
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;

// After
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;
```

`src/graphics/SharedUIDisplay.cpp:157`

这里新增了 `batteryTextEndX`，用于记录电池百分比文本的结束位置。这样后续在电池信息后追加自定义文本会更方便。

**修改 2：在绘制电池百分比时计算右边界**

```cpp
// Before
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
}

// After
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    int percentWidth = display->getStringWidth("%");
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
    batteryTextEndX = batteryX + chargeNumWidth + percentWidth - 1 + (isBold ? 1 : 0);
} else {
    batteryTextEndX = batteryX - 1;
}
```

`src/graphics/SharedUIDisplay.cpp:204`

这段代码位于电池百分比绘制逻辑内部。它在正常显示电量的同时，也计算文本区域的右边界，以便在电池信息后放置自定义标签。

**修改 3：为右侧图标区域预留边界**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

这部分处理右侧时间、邮件、静音等图标所占用的区域。我添加了 `headerLabelRight`，用于限制中间文本的最大右边界，避免与右侧内容重叠。

**修改 4：在标题为空时绘制自定义标签**

```cpp
// Newly added core logic
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif
```

`src/graphics/SharedUIDisplay.cpp:350`

这是本次修改的核心逻辑。它只适用于 `SEEED_WIO_TRACKER_L1`，并显式排除了电子墨水版本。它会在电池信息和时间显示之间的空白区域，将 `made by AE` 文本居中显示。

**修改 5：处理不显示时间的分支**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

这是在没有时间值显示时使用的分支。这里同样需要加入相同的边界控制。

```cpp
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
        if (titleStr && titleStr[0] == '\0') {
            static const char *yclLabel = "made by AE";
            int labelWidth = display->getStringWidth(yclLabel);
            int labelLeft = batteryTextEndX + 4;
            if (labelLeft + labelWidth <= headerLabelRight) {
                int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
                display->drawString(labelX, textY, yclLabel);
                if (isBold)
                    display->drawString(labelX + 1, textY, yclLabel);
            }
        }
#endif
```

`src/graphics/SharedUIDisplay.cpp:426`

这是在无时间分支中绘制 `made by AE` 的实现。

你可以在这里找到完整代码：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**步骤 3：构建你自己的固件**

完成修改后，回到项目根目录，再次构建相同的目标：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

显示逻辑已经改变，但构建目标仍然保持不变：

```plain
seeed_wio_tracker_L1
```

构建成功后，输出通常位于：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
D:\workplace\firmware\.pio\build\seeed_wio_tracker_L1\
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
~/workplace/firmware/.pio/build/seeed_wio_tracker_L1/
```

</TabItem>
</Tabs>

你需要确认已经更新的文件是：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 烧录固件

构建完成后，打开官方烧录页面：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

在大多数情况下，你应该先执行擦除操作。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

然后选择你刚刚构建的固件文件，并将其烧录到设备上。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

至此，Meshtastic 源码实战练习已经完成。你已经走完了完整流程：环境搭建、仓库克隆、板卡配置查找、固件编译、显示逻辑修改以及最终烧录验证。

如果你想更进一步，可以继续探索以下方向：

1. 修改主屏幕上的更多元素
2. 调整按键、GPS、蓝牙等模块的行为
3. 为你自己的板子添加一个独立的 `variant`
4. 继续追踪 `src/`、`variants/` 和 `boards/` 之间的关系

如果你想要一个更偏向功能的源码级示例，请继续查看下面的项目 B。它基于 `XIAO ESP32S3 + Wio-SX1262 + SHT40` 构建一个专用的环境遥测节点。与上面 Wio Tracker L1 的 UI 修改相比，这一部分更关注默认配置、遥测节奏以及两个节点之间的真实 Mesh 验证。

## 项目 B：XIAO ESP32S3 环境遥测节点

### 项目目标

这个进阶示例会在同一个 Mesh 中使用两个 Meshtastic 设备。

**远程传感器节点**

- 从 `SHT40` 读取温度和湿度
- 使用 Meshtastic 环境遥测功能
- 将遥测数据发送到 Mesh 中
- 将 Mesh 发送间隔改为 `60s`
- 跳过首次启动时的交互式区域设置
- 将默认区域设置为 `US`

**附近网关节点**

- 以 `CLIENT` 身份加入 Meshtastic 网络
- 通过 LoRa 接收远程 `TELEMETRY_APP` 数据包
- 解析 `environmentMetrics.temperature`
- 解析 `environmentMetrics.relativeHumidity`

**通信路径**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### 硬件准备

**远程节点硬件**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**网关节点硬件**

附近节点可以是任何加入同一网络的 Meshtastic 设备。在下面的示例中，我仍然使用另一块 `XIAO ESP32S3 + Wio-SX1262` 设备。

**SHT40 接线**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

已确认可用的设置：

- `I2C address = 0x44`
- `GPIO5 / GPIO6` 是当前可用的 I2C 接线对

下图展示了远程节点上实际使用的接线：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**本项目使用的模块和 SKU**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### 修改远程节点的 Meshtastic 固件

本项目的目标环境为：

```plain
seeed-xiao-s3
```

主要文件为：

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

在本部分中，只需更新 `variants/esp32s3/seeed_xiao_s3/platformio.ini` 中的 `build_flags` 部分。其余上游文件保持不变。

```ini
build_flags =
  ${esp32s3_base.build_flags}
  -D SEEED_XIAO_S3
  -D ENVIRONMENTAL_TELEMETRY_MODULE_ENABLE=1 ; enable environmental telemetry by default
  -D USERPREFS_CONFIG_LORA_REGION=meshtastic_Config_LoRaConfig_RegionCode_US ; set the default region to US
  -D USERPREFS_CONFIG_DEVICE_ROLE=meshtastic_Config_DeviceConfig_Role_SENSOR ; set the default role to SENSOR
  -I variants/esp32s3/seeed_xiao_s3
  -DBOARD_HAS_PSRAM
  -DARDUINO_USB_MODE=0
```

`build_flags` 的更改应类似如下：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

这三个标志的作用如下：

- 默认启用环境遥测
- 将默认区域设置为 `US`，因此首次启动不再停在区域选择界面
- 将默认设备角色设置为 `SENSOR`

遥测时序的更改是在 `EnvironmentTelemetry.h` 和 `EnvironmentTelemetry.cpp` 中实现的，而不是在 `platformio.ini` 中。

完成全部修改后，行为变为：

- 环境遥测默认启用
- 设备以区域 `US` 启动
- 设备以角色 `SENSOR` 启动
- Mesh 环境遥测每 `60s` 发送一次
- `path=phone` 和 `path=mesh` 分别记录日志
- 仅在实际 mesh 发送成功后才更新 mesh 发送时间戳

预期的 mesh 分发日志如下所示：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### 配置附近的网关节点

在同一 mesh 上使用附近的 Meshtastic 设备作为 `CLIENT`。在远程节点开始发送遥测后，确认网关可以接收到：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

如果网关在测试期间一直尝试连接 Wi-Fi，请使用 Meshtastic CLI 禁用 Wi-Fi。将 `<gateway_port>` 替换为你实际的串口，例如 Windows 上的 `COMx` 或 macOS 上的 `/dev/cu.usbmodem...`。

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### 构建、烧录并验证

**步骤 1：复制修改后的文件**

在构建之前，将三个修改后的文件复制到你的 Meshtastic `2.7.20` 或 `2.7.21` 源码树中：

| 包中的文件 | 替换 Meshtastic 源码树中的这个文件 |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<your Meshtastic directory>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

直接下载链接：

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

如果你使用图形文件管理器复制文件，替换提示应类似如下：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**步骤 2：构建远程固件**

在 Meshtastic 固件根目录下运行：

```bash
pio run -e seeed-xiao-s3
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image6.png)

**步骤 3：上传到远程节点**

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port COMx
```

如果你需要手动进入下载模式：

1. 按住 `BOOT`
2. 轻按 `RESET`
3. 松开 `RESET`
4. 松开 `BOOT`

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port /dev/cu.usbmodemXXXX
```

</TabItem>
</Tabs>

先使用 `pio device list`，以便识别正确的串口：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

上传完成后，PlatformIO 应该会报告烧录成功：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**步骤 4：监控串口日志**

使用 PlatformIO 的串口监视器检查远程节点和附近网关的日志。

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device monitor -p COMx -b 115200
pio device monitor -p COMy -b 115200
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device monitor -p /dev/cu.usbmodemE072A1D89EB81 -b 115200
pio device monitor -p /dev/cu.usbmodem3030F917FF281 -b 115200
```

</TabItem>
</Tabs>

留意如下日志：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

**步骤 5：使用 Meshtastic CLI 验证**

首先安装 CLI：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pip install meshtastic
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pip3 install meshtastic
```

</TabItem>
</Tabs>

安装完成后，重新打开终端并确认 `meshtastic --help` 可以正常运行。

在下面的命令中，将 `<gateway_port>` 替换为你实际的网关串口：

- Windows 示例：`COMx`
- macOS 示例：`/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

重点关注：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**步骤 6：在手机应用中确认**

烧录完成后，使用 Meshtastic 手机应用连接远程节点，并确认可以看到环境数据。然后将应用连接到同一 mesh 上的另一台设备，在 `Nodes` 视图中检查传感器数值是否通过 mesh 被接收。

在远程传感器节点上，你应该可以在应用中直接看到环境遥测数值：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

在附近节点上，这些读数在通过 mesh 转发后，应出现在 `Nodes` 视图中：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## 项目 C：T1000-E 开机和关机提示音自定义

### 项目目标

这个紧凑的示例聚焦于一个非常小但容易感知的源码级自定义：将默认的 T1000-E 开机和关机声音替换为更干净的自定义提示音。

与项目 A 和项目 B 相比，本项目只修改一个源文件、两个函数。它很好地展示了如何在不影响其余 Meshtastic 代码库的情况下，进行板级特定行为的更改。

### 修改 `buzz.cpp`

本项目中唯一被修改的文件是：

- `src/buzz/buzz.cpp`

两个被修改的函数是：

- `playStartMelody()`
- `playShutdownMelody()`

在这两个位置都添加了一个 `#if defined(TRACKER_T1000_E)` 分支。

这种结构很重要，因为它将自定义限定在 `T1000-E` 目标上：

- `TRACKER_T1000_E` 使用自定义开机提示音
- `TRACKER_T1000_E` 使用匹配的自定义关机提示音
- 所有其他 Meshtastic 开发板仍然在现有的 `#else` 分支中遵循原始默认旋律

这意味着更改在范围上是刻意收窄的。它为一块开发板定制了用户体验，同时保留了其他所有受支持目标的原始行为。

在我的本地测试版本中，开机旋律被改为更像手机的上行提示音，而关机旋律被改为与之匹配的下行提示音。

如果你想更清晰地记录这项修改，只需截取一张在同一视图中同时包含这两个函数的截图即可：

- `playStartMelody()` 中的 `#if defined(TRACKER_T1000_E)` 代码块
- `playShutdownMelody()` 中的 `#if defined(TRACKER_T1000_E)` 代码块

这一张截图已经同时说明了代码更改和特定开发板的适用范围，因此不需要单独再放一张图片来解释其他开发板不受影响。

### 构建与验证

完成修改后，构建 T1000-E 目标：

```bash
pio run -e tracker-t1000-e
```

在我的测试构建中，这个目标在更改提示音后可以成功编译。

构建通过后，将固件烧录到 T1000-E 上，并在真实硬件上直接验证结果：

1. 打开设备电源，确认新的开机提示音会播放。
2. 关闭设备电源，确认对应的关机提示音会播放。
3. 如果可能，将新的声音与原始默认旋律进行对比，这样更容易分辨差异。

### 建议配图

为了让 Project C 保持简洁易读，通常三张图片就足够：

1. 一张 `buzz.cpp` 截图，在同一画面中显示 `playStartMelody()` 和 `playShutdownMelody()`
2. 一张终端截图，显示 `pio run -e tracker-t1000-e` 成功执行
3. 一张真实设备验证图片或一段短视频，展示 T1000-E 的开机或关机测试

如果在测试过程中蜂鸣器没有发声，首先检查设备的蜂鸣器模式是否已启用。在 `playTones()` 中，当蜂鸣器被禁用或设置为仅通知模式时，代码会提前返回。

## 常见问题

**`git` 命令不可用**

- 在 Windows 上，先检查 Git 是否已添加到 `PATH`。
- 在 macOS 上，先运行 `git --version`。如果系统提示你安装 Command Line Tools，请按照提示进行安装。

**`python3` 或 `pip3` 不可用**

- 在 Windows 上，确认安装 Python 时已添加到 `PATH`，或者重新打开终端后再试一次。
- 在 macOS 上，先检查是否已经存在 `python3` / `pip3`，只有在确实缺失时才使用 Homebrew 安装 Python。

**`pio` 命令不可用**

- 先运行 `pio --version`。
- 如果命令仍然不可用，重启 VS Code 和终端，然后再试一次。
- 如有必要，重新安装 PlatformIO 扩展，并确认 PlatformIO Core 已正确初始化。

**执行 `git submodule update --init` 后代码看起来仍然不完整**

- 首先确保你当前位于 `firmware` 仓库的根目录。
- 如果网络连接不稳定，请使用以下命令重试：

```bash
git submodule update --init --recursive
```

**第一次构建耗时过长**

- 第一次构建需要下载大量依赖，这是正常现象。
- 如果看起来长时间没有进度，可以先单独安装相关软件包：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

然后再次运行构建。

**Web 客户端没有显示完整的环境遥测数据**

- 目前 Meshtastic Web Client 尚未提供完整的远程环境遥测 UI。
- `Messages` / `Broadcast` 页面是用于聊天流量的，而不是专门的遥测页面。
- 如果数值没有出现在那里，并不意味着 mesh 链路一定已经失败。

**在手机上看到数据并不能证明发生了 mesh 转发**

- 在直接连接的手机上看到刷新后的数值，只能证明本地手机到设备的链路是正常的。
- 这并不能自动证明环境遥测数据已经被转发进 mesh。
- 要确认真正的 mesh 转发，请在日志中检查以下条目：
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**在首次设置时 `seeed-xiao-s3` 构建失败**

- 第一次安装依赖可能会花费较长时间，这是正常的。
- 如果目标环境构建失败，请先安装相关软件包，然后执行一次详细输出的构建：

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- 依赖准备就绪后，再回到正常构建：

```bash
pio run -e seeed-xiao-s3
```
## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>