---
description: 一个实用教程，介绍如何搭建 Meshtastic 固件源代码环境、编译 Wio Tracker L1 目标、做一个简单的 UI 修改并烧录固件。
title: Meshtastic 源代码开发实用教程
keywords:
  - Meshtastic
  - 源代码
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/cn/meshtastic_source_code_practical_tutorial/
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic 固件源代码实用教程

本教程在 Windows 和 macOS 上演示一个基础的 Meshtastic 固件工作流程：克隆仓库、构建 `seeed_wio_tracker_L1`、做一个小的 UI 修改，并将结果烧录到设备中。

如果你已经安装好了 Git、Python 和 PlatformIO，可以直接跳到动手实践部分。

:::tip
文中提供了 Windows 和 macOS 双平台的命令。大部分截图基于 Windows，但在 macOS 上的工作流程是相同的。
:::

## 前置准备

准备以下工具：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. 安装 Git

<Tabs>
<TabItem value="windows" label="Windows">

打开官方的 Git for Windows 下载页面：

[Git for Windows](https://git-scm.com/install/windows)

通常在你打开页面时，安装程序会自动开始下载。下载完成后，双击安装程序并按照安装向导进行操作。

安装过程中，最重要的一步是**调整 PATH 环境变量**。请选择：

**Git from the command line and also from 3rd-party software**

对于其他选项，默认值一般就可以，直接连续点击 `Next` 即可。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

等待安装完成。

安装结束后，**关闭当前所有 PowerShell 与 VS Code 终端窗口**，然后重新打开一个新的 PowerShell 窗口并运行：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

如果能显示出 Git 版本号，说明 Git 已成功安装。

**如果 `git` 命令依然不可用**

你可以先在 PowerShell 中运行下面的命令，确认 Git 的默认安装路径：

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
2. 搜索“Edit the system environment variables”
3. 打开后点击 **Environment Variables**
4. 在 **System variables** 下找到 `Path`
5. 点击 **Edit**
6. 点击 **New**，添加以下两个路径：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 一路点击 **OK** 保存

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存后，你还需要：

- 关闭**所有** PowerShell 窗口
- 再次打开 PowerShell

然后运行：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

如果能看到版本号，说明安装已经完成。

</TabItem>

<TabItem value="macos" label="macOS">

在 macOS 上，安装 Git 的方式有多种，但使用 Homebrew 通常是最简单的选项：

1. 先安装 Command Line Tools：

```bash
xcode-select --install
```

2. 如果尚未安装 Homebrew，先安装 Homebrew：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. 安装 Git：

```bash
brew install git
```

4. 查看已安装的版本：

```bash
git --version
```

如果终端里已经返回了一个有效的 Git 版本，就不需要重复安装。

</TabItem>
</Tabs>

**配置你的 Git 身份信息**

接下来，配置 Git 用户信息。请将示例值替换为你自己的姓名和邮箱地址：

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

如果第一个命令可以找到 Python，第二个命令通常就能直接完成安装。

安装结束后，关闭终端并重新打开，然后运行：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

如果显示出了版本号，说明 Python 和 pip 已经可以正常使用。

</TabItem>

<TabItem value="macos" label="macOS">

macOS 通常已经自带一个 Python 环境。在安装新版本之前，先检查是否已经可以使用 `python3` 和 `pip3`：

```bash
python3 --version
pip3 --version
```

如果不可用，或者你希望使用更高版本，可以通过 Homebrew 安装 Python：

```bash
brew install python
```

安装完成后，重新打开终端并运行：

```bash
python3 --version
pip3 --version
```

如果你更习惯使用 `python` 和 `pip`，也可以自己在 shell 中设置别名。不过在 macOS 上，使用 `python3` 和 `pip3` 通常更加可靠。

</TabItem>
</Tabs>

### 3. 安装 PlatformIO

PlatformIO 在安装过程中会自动下载依赖，因此可能需要一些时间。如果出现错误，请逐条查看并处理。

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

如果你的项目目录在其他盘符或路径下，请先切换到对应位置。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

如果输出内容与你看到的截图类似，就说明仓库已经成功克隆。

</TabItem>

<TabItem value="macos" label="macOS">

在你的工作目录终端中运行以下命令：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

如果 `~/workplace` 目录尚不存在，请先创建它：

```bash
mkdir -p ~/workplace
```

如果上述命令都能正常执行完毕，就表示仓库已经成功克隆。

</TabItem>
</Tabs>

### 5. 动手实践

在这个阶段，先不要急着修改代码。请先确认工程可以顺利完成一次完整的构建流程。

建议先从以下三项任务开始：

1. 打开 `firmware`
2. 查看 `platformio.ini`
3. 找到你的目标开发板对应的构建环境

有一个关键细节：不要只关注根目录下的 `platformio.ini`。它实际上还包含了一些额外的配置文件，例如：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

这意味着，真正的板级环境定义通常位于 `variants/.../platformio.ini` 下面。

在确认目标开发板时，特别要留意下面两个目录：

- `variants/`
- `boards/`

这里我们以 **Wio Tracker L1 Pro** 作为示例目标板。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

由此可见，在 Meshtastic 中，**Wio Tracker L1 / L1 Pro 对应的构建目标为** `seeed_wio_tracker_L1`。

**步骤 1：确认工程可以成功构建**

这里我们使用 PlatformIO Core CLI 进行构建。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

第一次构建时，建议运行下面的命令：

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

如果界面与上图类似，就说明构建流程已经正确启动。第一次构建通常需要较长时间，请耐心等待。

**如果构建失败**

当构建失败时，你可以先让 PlatformIO 仅安装当前环境所需的依赖：

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

- 只安装依赖，不会立即启动完整构建。
- 更容易看清是哪个依赖包引发了问题。
- 错误信息通常更集中，更便于排查。

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

如果此时构建通过，则表示你的固件输出已成功生成。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**步骤 2：修改代码**

**实践 1：修改 UI 显示**

首先从板级配置开始追踪显示实现。你可以先查看：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

从这些配置文件中，你可以看到 L1 定义了 `HAS_SCREEN` 和 `USE_SSD1306`。这意味着它使用的是标准 OLED 显示管线，而不是无屏幕配置，也不是 E-Ink 方案。

如果继续追踪显示逻辑，大部分相关代码位于：

- `src/graphics/`
- `src/graphics/draw/`

这里我们用一个简单的例子：在主界面顶栏添加一个自定义标签。

使用以下更改更新 `src/graphics/SharedUIDisplay.cpp`：

```cpp
// Track the end of the battery text
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;

// Update the boundary while drawing the battery percentage
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

// In the branch that displays time
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;

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

// In the branch that does not display time
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;

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

这次更新做了三件事：

- 记录电池文字的右边缘位置。
- 在电池区域和右侧图标之间预留空间。
- 仅在 `SEEED_WIO_TRACKER_L1` 且标题为空时绘制 `made by AE`。

你可以在这里找到完整代码：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**步骤 3：构建你的自定义固件**

完成修改后，返回项目根目录，再次构建同一个目标：

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

显示逻辑已经改变，但构建目标仍然是同一个：

```plain
seeed_wio_tracker_L1
```

成功构建后，输出通常位于：

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

你应当确认已经被更新的文件是：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. 烧录固件

构建完成后，打开官方烧录页面：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

在大多数情况下，你需要先执行擦除操作。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

然后选择你刚刚构建的固件文件，并将其烧录到设备上。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

至此，Meshtastic 源码实战练习已经完成。你已经走完了完整流程：环境搭建、仓库克隆、板级配置探索、固件编译、显示逻辑修改以及最终烧录验证。

如果你想更进一步，可以继续探索下面这些方向：

1. 修改主界面上的更多元素
2. 调整按键、GPS、蓝牙以及其他模块的行为
3. 为你自己的板子添加一个独立的 `variant`
4. 继续追踪 `src/`、`variants/` 和 `boards/` 之间的关系

## 常见问题

**`git` 命令不可用**

- 在 Windows 上，先检查是否已经将 Git 添加到 `PATH`。
- 在 macOS 上，先运行 `git --version`。如果系统提示你安装 Command Line Tools，请按照提示操作。

**`python3` 或 `pip3` 不可用**

- 在 Windows 上，确认安装 Python 时已添加到 `PATH`，或者重新打开终端再试一次。
- 在 macOS 上，先检查是否已经存在 `python3` / `pip3`，仅在确有需要时再使用 Homebrew 安装 Python。

**`pio` 命令不可用**

- 先运行 `pio --version`。
- 如果命令仍然不可用，重启 VS Code 和终端后再试一次。
- 如有必要，重新安装 PlatformIO 扩展，并确认 PlatformIO Core 已正确初始化。

**运行 `git submodule update --init` 后代码仍然不完整**

- 首先确认你当前位于 `firmware` 仓库的根目录。
- 如果网络连接不稳定，可以尝试使用以下命令重试：

```bash
git submodule update --init --recursive
```

**第一次构建耗时过长**

- 第一次构建下载大量依赖是正常现象。
- 如果长时间看起来都没有进展，可以先单独安装这些包：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

然后再次运行构建。
