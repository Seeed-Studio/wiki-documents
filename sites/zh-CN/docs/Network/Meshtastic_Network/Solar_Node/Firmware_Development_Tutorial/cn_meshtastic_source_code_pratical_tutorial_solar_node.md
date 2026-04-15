---
description: 一个关于搭建 Meshtastic 固件源代码环境、编译太阳能节点和刷写固件的实用教程。
title: Meshtastic 源代码开发教程
keywords:
  - Meshtastic
  - 源代码
  - PlatformIO
  - 太阳能节点
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/cn/meshtastic_source_code_practical_tutorial_solar_node/
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic 固件源代码实用教程

本教程面向刚刚开始接触 Meshtastic 固件源代码的用户。它包含了适用于 Windows 和 macOS 的常见工作流程。目标很直接：克隆官方仓库，完成一次成功的构建，做一个简单的 UI 修改，然后将修改后的固件刷写到设备上进行验证。

如果你已经熟悉 Git、Python 或 PlatformIO，可以跳过相应部分，直接进入动手实践环节。

:::tip
本指南包含了 Windows 和 macOS 的常用命令。大部分截图仍来自 Windows 环境，但 macOS 上的整体工作流程非常相似。
:::

## 先决条件

开始之前，请准备以下工具：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. 安装 Git

<Tabs>
<TabItem value="windows" label="Windows">

打开官方的 Git for Windows 下载页面：

[Git for Windows](https://git-scm.com/install/windows)

打开页面后，安装程序通常会自动开始下载。下载完成后，双击安装程序并按照设置向导操作。

在安装过程中，最重要的一步是 **调整你的 PATH 环境变量**。选择：

**Git from the command line and also from 3rd-party software**

对于其他选项，通常默认值即可。只需不断点击 `Next`。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

等待安装完成。

安装完成后，**关闭所有当前的 PowerShell 和 VS Code 终端窗口**，然后打开一个新的 PowerShell 窗口并运行：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

如果显示了 Git 版本号，则 Git 已安装成功。

**如果 `git` 命令仍然不可用**

你可以先在 PowerShell 中运行以下命令来确认默认的 Git 安装路径：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

然后手动将 Git 添加到系统环境变量中。

**图形界面修复步骤**

1. 按下 `Win` 键
2. 搜索 "Edit the system environment variables"
3. 打开它并点击 **环境变量**
4. 在 **系统变量** 下找到 `Path`
5. 点击 **编辑**
6. 点击 **新建** 并添加以下两个路径：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 一路点击 **确定** 保存

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存后，你仍然需要：

- 关闭 **所有** PowerShell 窗口
- 再次打开 PowerShell

然后运行：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

如果出现版本号，则安装完成。

</TabItem>

<TabItem value="macos" label="macOS">

在 macOS 上，安装 Git 的方式不止一种，但使用 Homebrew 通常是最简单的选择：

1. 首先安装命令行工具：

```bash
xcode-select --install
```

2. 如果尚未安装 Homebrew，请先安装它：

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

如果你的终端已经返回有效的 Git 版本，则无需再次安装。

</TabItem>
</Tabs>

**配置你的 Git 身份**

接下来，配置你的 Git 用户信息。将示例值替换为你自己的姓名和电子邮件地址：

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

然后运行：

```plain
git config --global --list
```

以确认配置已生效。

### 2. 安装 Python 3

**从命令行安装 Python**

<Tabs>
<TabItem value="windows" label="Windows">

在终端中运行以下命令：

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

如果第一条命令能找到 Python，第二条命令通常应该会直接安装它。

安装完成后，关闭终端并重新打开，然后运行：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

如果显示了版本号，则 Python 和 pip 已准备就绪。

</TabItem>

<TabItem value="macos" label="macOS">

macOS 通常已经包含 Python 环境。在安装新版本之前，检查 `python3` 和 `pip3` 是否已可用：

```bash
python3 --version
pip3 --version
```

如果它们不可用，或者你想要更新的版本，请使用 Homebrew 安装 Python：

```bash
brew install python
```

安装完成后，重新打开终端并运行：

```bash
python3 --version
pip3 --version
```

如果你更喜欢使用 `python` 和 `pip`，可以自己设置 shell 别名。然而，在 macOS 上，使用 `python3` 和 `pip3` 通常是更可靠的选择。

</TabItem>
</Tabs>

### 3. 安装 PlatformIO

这一步可能对初学者不太友好，因为 PlatformIO 会自动下载许多依赖项，安装可能需要一些时间。如果安装过程中出现错误，通常最好耐心等待并逐个解决问题。使用 AI 工具帮助检查错误信息也可以节省时间。

在 VS Code 扩展市场中搜索 `PlatformIO` 并安装它。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

安装后，左侧工具栏通常会出现一个蚂蚁形状的图标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. 克隆 Meshtastic 固件仓库

官方的 Meshtastic 固件仓库是 `meshtastic/firmware`。

<Tabs>
<TabItem value="windows" label="Windows">

在你的工作目录终端中运行以下命令：

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

如果你的项目目录在不同的驱动器或不同的路径下，请先切换到该位置。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

如果输出看起来与上面的截图相似，则仓库已成功克隆。

</TabItem>

<TabItem value="macos" label="macOS">

在你的工作目录终端中运行以下命令：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

如果 `~/workplace` 尚不存在，请先创建它：

```bash
mkdir -p ~/workplace
```

如果命令正常完成，则仓库已成功克隆。

</TabItem>
</Tabs>

仓库准备就绪后，你可以继续以下两个实践项目中的任意一个。项目 A 侧重于 `Wio Tracker L1` 的 UI 定制。项目 B 侧重于通过 Meshtastic 传输 `XIAO ESP32S3` 的环境遥测数据。

## 项目 A：Wio Tracker L1 UI 定制

### 动手实践

在这个阶段，不要急于编辑代码。首先，确保项目能够成功运行完整的构建过程。

建议从三个任务开始：

1. 打开 `firmware`
2. 检查 `platformio.ini`
3. 找到你的目标开发板的构建环境

一个重要细节：不要只关注根目录的 `platformio.ini`。它实际上包含了额外的配置文件，例如：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

这意味着真正的板级环境定义通常位于 `variants/.../platformio.ini` 下。

在识别目标开发板时，请特别注意这两个目录：

- `variants/`
- `boards/`

这里我们使用 **Wio Tracker L1 Pro** 作为示例目标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

这表明，在 Meshtastic 中，**Wio Tracker L1 / L1 Pro 的构建目标是** `seeed_wio_tracker_L1`。

**最小修改总结**

如果你只想完成一次最小化的端到端实践，请专注于这些关键步骤：

1. 安装 Git、Python 3、VS Code 和 PlatformIO。
2. 克隆 `meshtastic/firmware` 仓库并初始化子模块。
3. 使用 `pio run -e seeed_wio_tracker_L1` 确认原始项目构建成功。
4. 修改 `src/graphics/SharedUIDisplay.cpp` 中的显示逻辑。
5. 重新构建固件，并将生成的 UF2 文件刷写到设备上进行验证。

**步骤 1：确认项目构建成功**

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

如果界面看起来与上面的截图类似，则构建过程已正确启动。首次构建通常需要一段时间，请耐心等待。

**如果构建失败**

当构建失败时，你可以首先要求 PlatformIO 安装当前环境所需的依赖项：

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

这种方法有几个好处：

- 它只安装依赖项，不会立即开始完整构建。
- 它更容易看出是哪个包导致了问题。
- 错误信息通常更集中，更容易排查。

依赖项安装完成后，运行：

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

依赖安装完成后，再次运行正常的构建：

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

如果此时构建通过，则你的固件输出已成功生成。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**步骤 2：修改代码**

**实践 1：修改 UI 显示**

首先从板级配置开始追踪显示实现。你可以先检查：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

从这些配置文件中，你可以看到 L1 定义了 `HAS_SCREEN` 和 `USE_SSD1306`。这意味着它使用标准的 OLED 显示流水线，而不是无屏幕配置，也不是电子墨水解决方案。

如果你继续追踪显示逻辑，大部分相关代码位于：

- `src/graphics/`
- `src/graphics/draw/`

具体如何修改取决于你阅读源代码的能力。这里我们从一个非常简单的例子开始：修改主屏幕 UI。

**修改 1：记录电池文本的右边缘**

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

这添加了 `batteryTextEndX`，用于记录电池百分比文本的结束位置。这使得稍后更容易在电池信息后面追加自定义文本。

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

这段代码位于电池百分比绘制逻辑内部。除了正常显示电池电量外，它还计算文本区域的右边界，以便可以在电池信息之后放置自定义标签。

**修改 3：为右侧图标区域预留边界**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

这部分处理右侧时间、邮件、静音等图标使用的区域。我添加了 `headerLabelRight` 来限制中心文本的最大右边界，防止与右侧内容重叠。

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

这是修改的核心逻辑。它仅适用于 `SEEED_WIO_TRACKER_L1`，并明确排除了电子墨水变体。它将文本 `made by AE` 居中显示在电池信息和时间显示之间的空白区域。

**修改 5：处理不显示时间的分支**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

这是当不显示时间值时使用的分支。这里也需要添加相同的边界控制。

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

你可以在这里找到完整的代码：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**步骤 3：构建你自己的固件**

修改完成后，返回项目根目录并再次构建相同的目标：

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

显示逻辑已经改变，但构建目标仍然是相同的：

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

你应该确认已更新的文件是：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 刷写固件

构建完成后，打开官方刷写页面：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

在大多数情况下，你应该先执行擦除操作。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

然后选择你刚刚构建的固件文件，并将其刷写到设备中。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

至此，Meshtastic 源代码实践练习已完成。你已经走过了完整的工作流程：环境设置、仓库克隆、板级配置发现、固件编译、显示逻辑修改以及最终的刷写验证。

如果你想更进一步，可以继续探索以下方向：

1. 修改主屏幕上的更多元素
2. 调整按钮、GPS、蓝牙和其他模块的行为
3. 为你自己的板子添加独立的 `variant`
4. 继续追踪 `src/`、`variants/` 和 `boards/` 之间的关系

如果你想要一个更侧重于功能的源代码级示例，请继续阅读下面的项目 B。它使用 `XIAO ESP32S3 + Wio-SX1262 + SHT40` 构建一个专用的环境遥测节点。与上面的 Wio Tracker L1 UI 修改相比，这部分侧重于默认配置、遥测定时以及两个节点之间的真实网状网络验证。

## 项目 B：XIAO ESP32S3 环境遥测节点

### 项目目标

这个高级示例在同一网状网络中使用两个 Meshtastic 设备。

**远程传感器节点**

- 从 `SHT40` 读取温度和湿度
- 使用 Meshtastic 环境遥测功能
- 将遥测数据发送到网状网络中
- 将网状网络发送间隔更改为 `60s`
- 跳过首次启动时的交互式区域设置
- 将默认区域设置为 `US`

**附近的网关节点**

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

附近的节点可以是任何加入同一网络的 Meshtastic 设备。在下面的示例中，我仍然使用另一个 `XIAO ESP32S3 + Wio-SX1262` 设备。

**SHT40 接线**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

已确认可用的设置：

- `I2C 地址 = 0x44`
- `GPIO5 / GPIO6` 是当前可用的 I2C 接线对

下图显示了远程节点上使用的实际接线：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**本项目使用的模块和 SKU**

- [`Seeeduino XIAO 扩展板`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`用于 Meshtastic 和 LoRa 的 XIAO ESP32S3 & Wio-SX1262 套件`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### 修改远程节点的 Meshtastic 固件

本项目的目标环境是：

```plain
seeed-xiao-s3
```

主要文件是：

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

在这一部分，只更新 `variants/esp32s3/seeed_xiao_s3/platformio.ini` 中的 `build_flags` 部分。保持上游文件的其余部分不变。

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

`build_flags` 的更改应类似于这样：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

这三个标志的作用如下：

- 默认启用环境遥测
- 将默认区域设置为 `US`，这样首次启动时不再停留在区域选择界面
- 将默认设备角色设置为 `SENSOR`

遥测时序的更改是在 `EnvironmentTelemetry.h` 和 `EnvironmentTelemetry.cpp` 中实现的，而不是在 `platformio.ini` 中。

完成全部修改后，设备行为变为：

- 默认启用环境遥测
- 设备以 `US` 区域启动
- 设备以 `SENSOR` 角色启动
- 每 `60` 秒发送一次 Mesh 环境遥测数据
- `path=phone` 和 `path=mesh` 的日志是分开记录的
- 只有在真实的 Mesh 发送成功后，才会更新 Mesh 发送时间戳

预期的 Mesh 分发日志如下所示：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### 配置附近的网关节点

使用附近的一个 Meshtastic 设备作为同一 Mesh 网络中的 `CLIENT`。远程节点开始发送遥测数据后，确认网关可以接收到：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

如果网关在测试期间不断尝试连接 Wi-Fi，请使用 Meshtastic CLI 禁用 Wi-Fi。将 `<gateway_port>` 替换为你的实际串口，例如 Windows 上的 `COMx` 或 macOS 上的 `/dev/cu.usbmodem...`。

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### 构建、刷写和验证

**步骤 1：复制修改后的文件**

在构建之前，将三个修改后的文件复制到你的 Meshtastic `2.7.20` 或 `2.7.21` 源代码树中：

| 包中的文件 | 替换 Meshtastic 源代码树中的此文件 |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<你的 Meshtastic 目录>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<你的 Meshtastic 目录>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<你的 Meshtastic 目录>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

直接下载链接：

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

如果你使用图形文件管理器复制文件，替换提示应类似于这样：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**步骤 2：构建远程固件**

从 Meshtastic 固件根目录运行：

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

如果需要手动进入下载模式：

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

首先使用 `pio device list`，以便识别正确的串口：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

上传完成后，PlatformIO 应报告刷写成功：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**步骤 4：监控串口日志**

使用 PlatformIO 的串口监视器检查远程节点和附近的网关。

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

查找如下日志：

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

安装后，重新打开终端并确认 `meshtastic --help` 可用。

对于下面的命令，将 `<gateway_port>` 替换为你的实际网关串口：

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

**步骤 6：在移动应用中确认**

刷写后，使用 Meshtastic 移动应用连接到远程节点，并确认环境数据可见。然后将应用连接到同一 Mesh 网络中的另一个设备，并检查 `Nodes` 视图，以确认传感器值正在通过 Mesh 网络接收。

在远程传感器节点上，你应该能在应用中直接看到环境遥测值：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

在附近的节点上，相同的读数在通过 Mesh 网络转发后，应出现在 `Nodes` 视图中：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## 常见问题

**`git` 命令不可用**

- 在 Windows 上，首先检查 Git 是否已添加到 `PATH`。
- 在 macOS 上，首先运行 `git --version`。如果系统要求你安装命令行工具，请按照提示操作。

**`python3` 或 `pip3` 不可用**

- 在 Windows 上，确认 Python 已添加到 `PATH`，或者重新打开终端再试一次。
- 在 macOS 上，首先检查 `python3` / `pip3` 是否已存在，仅在需要时使用 Homebrew 安装 Python。

**`pio` 命令不可用**

- 首先运行 `pio --version`。
- 如果命令仍然不可用，重启 VS Code 和终端，然后再试一次。
- 如有必要，重新安装 PlatformIO 扩展，并确认 PlatformIO Core 已正确初始化。

**执行 `git submodule update --init` 后，代码看起来仍然不完整**

- 首先确保你位于 `firmware` 仓库的根目录。
- 如果网络连接不稳定，请尝试使用以下命令重试：

```bash
git submodule update --init --recursive
```

**首次构建耗时过长**

- 首次构建下载许多依赖项是正常的。
- 如果看起来卡住时间过长，请先尝试单独安装这些包：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

然后再次运行构建。

**Web 客户端未显示完整的环境遥测数据**

- Meshtastic Web Client 目前未提供完整的远程环境遥测用户界面。
- `消息` / `广播` 页面用于聊天流量，并非专用的遥测页面。
- 如果数值未在那里显示，并不自动意味着 Mesh 链路已失效。

**在手机上看到数据并不能证明 Mesh 转发成功**

- 在直接连接的手机上看到刷新的数值，仅证明本地手机到设备的链路工作正常。
- 这并不自动证明环境遥测数据已被转发到 Mesh 网络中。
- 要确认真正的 Mesh 转发，请在日志中检查以下条目：
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**首次设置时 `seeed-xiao-s3` 构建失败**

- 首次依赖项安装可能需要很长时间。这是正常现象。
- 如果目标环境失败，请先安装软件包，然后运行详细构建：

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- 依赖项准备就绪后，返回正常构建流程：

```bash
pio run -e seeed-xiao-s3
```
