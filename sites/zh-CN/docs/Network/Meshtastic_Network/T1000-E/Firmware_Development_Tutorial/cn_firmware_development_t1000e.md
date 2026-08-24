---
description: 搭建 Meshtastic 固件源代码环境、编译 t1000_e 并烧录固件的实用教程。
title: Meshtastic 源代码开发教程
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_t1000_e
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/cn/meshtastic_source_code_practical_tutorial_t1000_e/
createdAt: '2026-03-19'
updatedAt: '2026-07-31'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic 固件源代码实用教程

本教程面向刚开始接触 Meshtastic 固件源代码的用户，涵盖 Windows 和 macOS 的常见工作流程。目标很简单：克隆官方仓库，完成一次成功的构建，做一个简单的 UI 修改，并将修改后的固件烧录到设备上进行验证。

如果你已经熟悉 Git、Python 或 PlatformIO，可以跳过对应章节，直接进入上手实战部分。

:::tip
本指南包含 Windows 和 macOS 的常用命令。大部分截图仍然来自 Windows 环境，但在 macOS 上的整体流程非常相似。
:::

## 前置准备

开始之前，请准备以下工具：

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

安装过程中，最重要的一步是**调整 PATH 环境变量**。请选择：

**Git from the command line and also from 3rd-party software**

对于其他选项，一般保持默认值即可。只需持续点击 `Next`。

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

7. 连续点击 **OK** 保存

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

1. 先安装 Command Line Tools：

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

如果终端已经返回了有效的 Git 版本，则无需再次安装。

</TabItem>
</Tabs>

**配置你的 Git 身份信息**

接下来配置 Git 用户信息。将示例值替换为你自己的姓名和邮箱地址：

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

如果第一条命令可以找到 Python，第二条通常就能直接安装它。

安装完成后，关闭终端并重新打开，然后运行：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

如果显示了版本号，说明 Python 和 pip 已经可以使用。

</TabItem>

<TabItem value="macos" label="macOS">

macOS 通常已经自带一个 Python 环境。在安装新版本之前，先检查 `python3` 和 `pip3` 是否已经可用：

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

如果你更习惯使用 `python` 和 `pip`，可以自行设置 shell 别名。但在 macOS 上，使用 `python3` 和 `pip3` 通常更可靠。

</TabItem>
</Tabs>

### 3. 安装 PlatformIO

这一步对新手来说可能不太友好，因为 PlatformIO 会自动下载很多依赖，安装过程可能需要一些时间。如果安装过程中出现错误，通常最好耐心等待，并逐个排查问题。借助 AI 工具帮助分析报错信息也能节省时间。

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

如果输出内容与上方截图类似，说明仓库已经成功克隆。

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

如果命令正常执行完毕，说明仓库已经成功克隆。

</TabItem>
</Tabs>

### 5. 上手实战

在这个阶段，先不要急着修改代码。请先确保项目能够完整地跑通一次构建流程。

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

如果界面与上方截图类似，说明构建流程已经正确启动。第一次构建通常会花费较长时间，请耐心等待。

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

这种方法有几个好处：

- 它只安装依赖项，而不会立即开始完整构建。
- 它可以更容易地看出是哪个软件包导致了问题。
- 错误信息通常更聚焦，也更容易排查。

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

依赖安装完成后，再次运行正常构建：

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

如果此时构建通过，说明你的固件输出已成功生成。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**步骤 2：修改代码**

**实践 1：修改 UI 显示**

首先从板级配置开始追踪显示实现。你可以先查看：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

从这些配置文件中可以看到，L1 定义了 `HAS_SCREEN` 和 `USE_SSD1306`。这意味着它使用的是标准 OLED 显示管线，而不是无屏配置，也不是电子墨水方案。

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

这段代码位于电池百分比绘制逻辑内部。它在正常显示电量的同时，还计算了文本区域的右边界，以便在电池信息后放置自定义标签。

**修改 3：为右侧图标区域预留边界**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

这部分处理的是右侧时间、邮件、静音等图标所占用的区域。我添加了 `headerLabelRight` 来限制中间文本的最大右边界，防止与右侧内容重叠。

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

这是本次修改的核心逻辑。它只适用于 `SEEED_WIO_TRACKER_L1`，并明确排除了电子墨水版本。它会在电池信息和时间显示之间的空白区域居中显示 `made by AE` 文本。

**修改 5：处理不显示时间的分支**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

这是在没有时间值显示时使用的分支。这里同样需要添加相同的边界控制。

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

完成修改后，返回项目根目录，再次构建相同的目标：

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

显示逻辑已经改变，但构建目标仍然相同：

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

你需要确认已更新的文件是：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. 烧录固件

构建完成后，打开官方烧录页面：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

在大多数情况下，你应该先执行擦除操作。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

然后选择你刚刚构建的固件文件，并将其烧录到设备中。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

至此，Meshtastic 源码实战练习就完成了。你已经完整走了一遍工作流：环境搭建、仓库克隆、板级配置查找、固件编译、显示逻辑修改以及最终烧录验证。

如果你想更进一步，可以继续探索以下方向：

1. 修改主屏幕上的更多元素
2. 调整按键、GPS、蓝牙等模块的行为
3. 为你自己的板子添加一个独立的 `variant`
4. 继续追踪 `src/`、`variants/` 和 `boards/` 之间的关系

## 常见问题

**`git` 命令不可用**

- 在 Windows 上，先检查是否已将 Git 添加到 `PATH`。
- 在 macOS 上，先运行 `git --version`。如果系统提示你安装 Command Line Tools，请按提示操作。

**`python3` 或 `pip3` 不可用**

- 在 Windows 上，确认安装 Python 时已添加到 `PATH`，或者重新打开终端再试一次。
- 在 macOS 上，先检查是否已经存在 `python3` / `pip3`，只有在确实缺失时才使用 Homebrew 安装 Python。

**`pio` 命令不可用**

- 先运行 `pio --version`。
- 如果命令仍然不可用，重启 VS Code 和终端后再试一次。
- 如有必要，重新安装 PlatformIO 扩展，并确认 PlatformIO Core 已正确初始化。

**执行 `git submodule update --init` 后代码仍然不完整**

- 首先确保你位于 `firmware` 仓库的根目录。
- 如果网络连接不稳定，可以尝试使用以下命令重试：

```bash
git submodule update --init --recursive
```

**第一次构建耗时过长**

- 第一次构建需要下载许多依赖项，这是正常现象。
- 如果长时间看起来都没有进展，尝试先单独安装这些软件包：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

然后再次运行构建命令。

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