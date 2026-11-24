---
description: 本文介绍如何使用 XIAO Debug Mate 的 DAPLink 调试功能。
title: DAPLink 调试器
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /xiao_debug_mate_debug
sku: 109990585
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/xiao_debug_mate_debug/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

欢迎阅读 XIAO Debug Mate 的 DAPLink 功能官方用户手册。本综合指南旨在帮助初学者和高级用户充分释放 XIAO Debug Mate 在专业调试任务中的全部潜力。在这里，你将学习如何连接、配置和操作 DAPLink 调试器，了解关键的软件工具，并遵循最佳实践，以便在各种 XIAO 系列开发板上获得顺畅高效的调试体验。无论你是在排查复杂固件问题，还是在优化开发流程，本文档都将通过清晰的分步说明、技巧以及深入的技术解析，为你的项目从开始到结束提供支持。


## 一些调试器概念的说明

要高效使用 XIAO Debug Mate 的 DAPLink 功能，了解一些关键的软件组件和协议如何协同工作以实现调试非常有帮助。下面是对每个概念的拆解，以及它们之间的关系。

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**，即 GNU Project Debugger，是调试过程的核心引擎。它是一个在主机电脑（PC）上运行的强大命令行工具。GDB 负责控制目标微控制器上程序的执行。它允许你：
*   启动和停止程序。
*   设置断点，在特定代码行暂停执行。
*   逐行单步执行代码。
*   检查变量的值以及内存寄存器的内容。

大多数现代集成开发环境（IDE），如 VS Code（配合 PlatformIO）或 Eclipse，都提供图形用户界面，作为 GDB 的前端，将你的点击操作转换为 GDB 命令。

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)**（Open On-Chip Debugger）和 **[PyOCD](https://pyocd.io/)** 是运行在主机电脑上的关键“服务器”应用程序。它们充当桥梁或翻译器，将来自 GDB 的高级命令转换为物理调试探针（本例中为 XIAO Debug Mate）所需的低层信号。

当 GDB 发出诸如“读取变量 `x` 的值”这样的命令时，OpenOCD 会接收该命令，将其转换为调试探针可以理解的一系列指令，并通过 USB 将这些指令发送给探针。

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** 是运行在 XIAO Debug Mate 上 ESP32-S3 微控制器中的开源固件。该固件将 Debug Mate 变成一个功能完整的调试探针。它的主要任务是实现 CMSIS-DAP 协议，使其能够通过 USB 从主机电脑接收调试命令，并在物理层面与目标芯片的调试引脚（SWD）交互。本质上，DAPLink 是设备上的“代理”，负责执行 OpenOCD 发送的指令。

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)**（Cortex Microcontroller Software Interface Standard - Debug Access Port）是一种标准化协议，用于定义主机电脑如何通过 USB 与调试探针通信。由于 XIAO Debug Mate 的 DAPLink 固件遵循这一标准，它可以无需任何专有驱动或软件，就能与 OpenOCD、PyOCD 和 Keil MDK 等众多行业标准工具即插即用地兼容。

### Telnet

**Telnet** 是一种简单的基于文本的网络协议。在调试场景中，OpenOCD 通常会在特定端口（常见为 4444 端口）上开启一个 Telnet 服务器。这为 OpenOCD 服务器本身提供了一个直接、可读性强的命令行接口。GDB 用于应用层调试，而 Telnet 接口则适用于高级任务，例如配置 OpenOCD、检查调试探针状态或发送底层复位命令。

### 它们如何协同工作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

下面是从 IDE 到目标 XIAO 的整个调试链路概览：

1.  **你** 在 IDE 中点击“Start Debugging”（开始调试）。
2.  **IDE** 使用合适的程序文件启动 **GDB**。
3.  **GDB** 连接到运行在你电脑上的 **OpenOCD** 服务器。
4.  **OpenOCD** 检测到通过 USB 连接的 **XIAO Debug Mate**，并使用 **CMSIS-DAP** 协议与该设备通信。
5.  Debug Mate 上的 **DAPLink** 固件接收这些 CMSIS-DAP 命令。
6.  **DAPLink** 将这些命令转换为 **SWD**（Serial Wire Debug，串行线调试）引脚（SWDIO 和 SWCLK）上的电信号。
7.  这些 SWD 信号直接控制目标 XIAO 内部的 **ARM Cortex 内核**，从而使 OpenOCD 和 GDB 能够暂停 CPU、读取内存并执行所有其他调试操作。

简而言之：**GDB** 是指挥官，**OpenOCD** 是翻译，**CMSIS-DAP** 是它们使用的语言，而 **DAPLink** 则是执行命令的一线“士兵”。

## 调试入门

### 兼容性检查

XIAO Debug Mate 面向整个 XIAO 生态设计，但 DAPLink 调试功能仅适用于 ARM Cortex-M 内核。不过，UART 和电源监测功能与架构无关，因此具有通用兼容性。请参考下表获取详细的兼容性信息。

<div class="table-center">

<table align="center">

<tr>

<th>XIAO 型号</th>

<th>内核架构</th>

<th>DAPLink 调试</th>

<th>UART 监视器</th>

<th>电源分析仪</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

将一根 USB 数据线直接连接到 XIAO ESP32-C6，以使用其内置的 USB JTAG 实现硬件断点。对于在 Visual Studio 中的 Arduino 草图，请参阅 [Visual Micro 硬件断点操作指南](https://www.visualmicro.com/page/XIAO-ESP32-C6-Visual-Studio.aspx#hardware-breakpoint)。

### 软件准备

在开始调试之前，你需要在主机电脑上安装必要的软件。

#### 安装 OpenOCD

:::tip
已验证：请使用 OpenOCD 0.12.0-7 或更高版本。
:::

为确保兼容性并获得最新功能，我们强烈推荐使用 **xPack** 版本的 OpenOCD。系统包管理器（如 macOS 上的 Homebrew 或 Linux 上的 APT）通常提供的是较旧、已过时的版本，可能无法在现代目标上正常工作。

:::tip PlatformIO 说明
如果你在 VS Code 中使用 PlatformIO 扩展，当你启动调试会话时，PlatformIO 会自动为你的项目下载并配置正确版本的 OpenOCD。
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

在 Windows 上，手动安装方法非常简单。

1.  **下载 OpenOCD 安装包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。最新版本总是列在最顶部。在最上方的发布条目中找到 Windows 版本（例如 `xpack-openocd-...-win32-x64.zip`），并下载该文件。

2.  **解压文件**

右键点击下载好的 ZIP 文件，选择“Extract All...（全部解压）”。选择一个稳定的位置，例如 `C:\Users\YourName\AppData\Local\xPacks\OpenOCD`。解压后，你会得到一个类似 `xpack-openocd-0.12.0-7` 的文件夹，其中包含一个 `bin` 目录。

3.  **将 OpenOCD 添加到系统 PATH**

这样你就可以在任意终端中运行 `openocd`。

    - 在开始菜单中搜索“Environment Variables”（环境变量），并选择“Edit the system environment variables”（编辑系统环境变量）。
    - 点击 **"Environment Variables..."**。
    - 在“System variables”（系统变量）下，选择 **"Path"** 变量并点击 **"Edit..."**。
    - 点击 **"New"**，粘贴之前解压得到的 `bin` 目录的完整路径。例如：  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - 在所有窗口中点击 OK 以保存设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **验证安装**

打开一个**新的**命令提示符或 PowerShell 窗口，并运行：

```bash
openocd --version
```

如果安装成功，你会看到打印出的版本信息（例如：`xPack Open On-Chip Debugger 0.12.0+dev-02228`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

这个过程与 Windows 的手动设置类似。

1.  **下载 OpenOCD 安装包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。找到最新的发布版本，并为你的 Mac 下载正确的压缩包（例如，Intel 选择 `...-darwin-x64.tar.gz`，Apple Silicon 选择 `...-darwin-arm64.tar.gz`）。

2.  **解压文件**

打开 Terminal 终端并运行以下命令。我们会在你的主目录中创建一个标准位置。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **将 OpenOCD 添加到 PATH**

你需要告诉 shell 在哪里可以找到 `openocd` 可执行文件。现代 macOS 的默认 shell 是 Zsh。

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
请确保将 `xpack-openocd-0.12.0-7` 替换为实际创建的文件夹名称。如果你使用 Bash，请编辑 `~/.bash_profile` 而不是 `~/.zshrc`。
:::

4.  **应用并验证**

你所做的 `PATH` 更改在当前终端会话中尚未生效，直到重新加载配置文件。

在当前终端中运行以下命令：

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

现在，通过运行以下命令验证安装：

```bash
openocd --version
```

你应该会看到正确的 xPack 版本信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

这个过程与其他操作系统上的手动设置类似。

1.  **下载 OpenOCD 安装包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。找到最新的发布版本，并下载 Linux 压缩包（`...-linux-x64.tar.gz`）。

2.  **解压文件**

打开 Terminal 终端并运行以下命令。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **将 OpenOCD 添加到 PATH**

你需要告诉 shell 在哪里可以找到 `openocd` 可执行文件。大多数 Linux 发行版使用 Bash shell。

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
请确保将 `xpack-openocd-0.12.0-7` 替换为实际创建的文件夹名称。
:::

4.  **应用并验证**

你所做的 `PATH` 更改在当前终端会话中尚未生效，直到重新加载配置文件。

在当前终端中运行以下命令：

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

现在，通过运行以下命令验证安装：

```bash
openocd --version
```

你应该会看到正确的 xPack 版本信息。

</TabItem>
</Tabs>

#### 安装 PyOCD

:::info
如果你打算使用 XIAO RA4M1 的固件烧录功能，你可能需要参考此处的步骤，额外下载并使用 PyOCD。
:::

PyOCD 是一个基于 Python 的工具，用于对 Arm Cortex-M 微控制器进行编程和调试。

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **前置条件**
    确保你的系统已安装 **Python**。如果没有，请从官方 [python.org](https://www.python.org/) 网站下载，并在安装过程中勾选 **"Add Python to PATH"** 选项。

2.  **安装 PyOCD**
    打开命令提示符或 PowerShell 窗口并运行以下命令：

    ```bash
    pip install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。你需要安装特定的支持包，以便 PyOCD 能识别它。

    搜索该支持包以确认其可用性：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装该支持包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否已被识别：
    ```bash
    pyocd list --targets
    ```
    你应该会在列表中看到 `r7fa4m1ab`。

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **前置条件**
    MacOS 通常自带 Python，但建议使用 Homebrew 或官方安装程序获取最新版本。打开 Terminal 终端。

2.  **安装 PyOCD**
    在 Terminal 中运行以下命令：

    ```bash
    pip3 install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。你需要安装特定的支持包。

    搜索该支持包：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装该支持包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否已被识别：
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **前置条件**
    确保通过你的包管理器安装了 `python3` 和 `pip`（例如在 Ubuntu 上使用 `sudo apt install python3-pip`）。

    :::note USB Permissions
    在 Linux 上，你可能还需要设置 udev 规则，以便在不使用 `sudo` 的情况下访问 USB 设备。
    :::

2.  **安装 PyOCD**
    在 Terminal 中运行以下命令：

    ```bash
    pip3 install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。

    搜索该支持包：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装该支持包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否已被识别：
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### 了解 `XIAO_Debug_Mate_DAPLink_Package` 压缩包

在你开始使用 DAPLink 调试器功能之前，你需要单独下载这个 ZIP 文件。该文件包含调试各类 XIAO 开发板所需的全部文件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ZIP 文件</font></span></strong>
    </a>
</div>


##### 目录结构说明

解压该文件后，你会看到如下文件夹结构。每一部分都有其特定用途：

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    此文件夹包含为各类 XIAO 开发板预编译好的示例固件文件（例如 `.bin`、`.elf`、`.hex`），这些文件是从 Arduino 导出的。它们将在后续教程中用于演示如何烧录和调试微控制器。

*   **`target/`**
    此文件夹包含 XIAO 开发板的目标配置（`.cfg`）文件，这些文件可能在官方 OpenOCD 发行版中缺失。当你在系统现有的 OpenOCD 安装环境中使用诸如 XIAO SAMD21 或 XIAO RA4M1 等开发板时，你需要将这些配置文件手动添加到 OpenOCD 环境中。具体操作步骤将在后文介绍。

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    这是 **XIAO MG24** 开发板的一个特殊且非常重要的组件。目前，官方 OpenOCD 发布版或标准 xPack 发行版中尚未提供对该芯片的支持。为了解决这一问题，我们为 Windows（`XIAO_MG24_Win_...`）和 macOS/Linux（`XIAO_MG24_Mac_Linux_...`）分别提供了完整的、独立的 OpenOCD 安装包。当你使用 XIAO MG24 时，**必须**使用这些特定文件夹中提供的 `openocd` 可执行文件。

### 硬件准备

连接用于调试的硬件非常简单。

#### 适用于 XIAO 开发板

:::tip
一般来说，除非特别说明，XIAO 在 Debug Mate 上的所有功能都不需要额外为 XIAO 供电。
:::

XIAO Debug Mate 专为与所有 Seeed Studio XIAO 开发板实现无缝、即插即用体验而设计。

1.  取出你的 XIAO 开发板，并与 Debug Mate 上的母排针对齐。
2.  **确保 XIAO 上的 USB-C 接口与 Debug Mate 上的 USB-C 接口朝向相同。**
3.  将 XIAO 垂直、用力按压插入插座，直到完全就位。这样可以确保 Debug Mate 上的弹簧针与 XIAO 底部的 SWD 焊盘牢固接触。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
一些早期的 XIAO 开发板，例如 **XIAO SAMD21**、**XIAO RP2040** 和 **XIAO nRF52840**，是在背面焊盘统一标准确立之前设计的。虽然 Debug Mate 的弹簧针位置尽可能做到兼容，但这些旧款开发板的细微差异可能会导致接触不够理想。

如果你遇到调试连接不稳定的情况，可以尝试在插座内**轻微调整 XIAO 开发板的位置**。你可能不需要将它完全压到底。轻微的位移往往就能让弹簧针与 XIAO 背面的 SWD 焊盘实现可靠接触。
:::

:::danger hot-swapping
我们强烈不建议对 XIAO 和 Debug Mate 进行热插拔！
:::

#### 适用于其他开发板

你也可以将 XIAO Debug Mate 作为通用 SWD 调试探针，用于其他基于 ARM 的开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  你需要四根 DuPont 线（母对公或母对母，取决于目标开发板的接口）。
2.  在目标开发板上找到 SWD 调试引脚。它们通常标记为 `SWDIO`、`SWCLK`、`GND`，有时还会有 `VTref` 或 `VCC`。
3.  将 XIAO Debug Mate 扩展排针上的导线按如下方式连接到目标开发板：

| XIAO Debug Mate 引脚 | 目标开发板引脚 | 描述                                       |
| :------------------ | :--------------- | :---------------------------------------- |
| `SWDIO`             | `SWDIO`          | 串行线数据输入/输出                        |
| `SWCLK`             | `SWCLK`          | 串行线时钟                                |
| `GND`               | `GND`            | 公共地                                    |
| `VCC`               | `VTref` or `3V3` | 目标电压参考（对电平转换非常重要）        |

连接完成后，你可以将 OpenOCD 配置为使用 CMSIS-DAP 接口，然后像使用其他探针一样开始调试会话。


## 通过 Telnet 与 OpenOCD 交互

虽然现代 IDE 提供了图形化的调试界面，但有时你需要一种更直接、更底层的方式与调试器交互，这就是 Telnet 派上用场的地方。OpenOCD 会运行一个 Telnet 服务器，你可以直接连接并发送基于文本的命令来控制目标芯片。这对于快速检查、编写自动化脚本任务，或在没有完整 IDE（或不需要 IDE）时排查问题非常有用。

### 启用 Telnet 客户端

在使用 Telnet 之前，你可能需要在操作系统上启用它，因为它并不总是默认安装或启用。

<Tabs>
<TabItem value="Windows" label="Windows" default>

在现代 Windows 系统中，Telnet 客户端是一个需要手动启用的旧版功能。

1.  按下 `Win` + `R` 打开“运行”对话框，输入 `control panel`，然后按 Enter。
2.  进入 **Programs** > **Programs and Features**。
3.  在左侧点击 **Turn Windows features on or off**。
4.  在新弹出的窗口中向下滚动，找到 **Telnet Client**。
5.  勾选其旁边的复选框并点击 **OK**。Windows 将安装该功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
原生 Telnet 客户端在近期版本的 macOS 中可能已被移除。安装它最简单的方式是使用 [Homebrew]。打开 Terminal 并运行：
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
大多数 Linux 发行版都自带 Telnet 客户端。如果没有，你可以很容易地通过包管理器安装它。对于基于 Debian/Ubuntu 的系统，打开终端并运行：
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### 使用 Telnet 进行逐步调试

#### 步骤 1：运行 OpenOCD 服务器

在下面的列表中找到你的 XIAO 开发板，并根据对应操作系统的说明启动 OpenOCD 服务器。该服务器进程会等待来自 GDB 等调试器的连接。

##### 适用于 Seeed Studio XIAO SAMD21

标准 OpenOCD 软件包不包含 XIAO SAMD21 的配置文件。你必须将我们提供的软件包中的配置文件手动复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 在 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将该文件复制到 xPack OpenOCD 安装目录中的 `target` 脚本文件夹。路径会因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为你的实际用户名以及你安装的 OpenOCD 版本。
:::

**2. 运行 OpenOCD 命令**

在系统任意位置打开一个新的终端，并运行对应的命令：

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### 适用于 Seeed Studio XIAO RP2040

RP2040 的配置已包含在标准 xPack OpenOCD 中。打开终端并运行命令。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### 适用于 Seeed Studio XIAO RP2350

RP2350 的配置已包含在标准 xPack OpenOCD 中。打开终端并运行命令。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### 适用于 Seeed Studio XIAO nRF52840

nRF52 的配置已包含在标准 xPack OpenOCD 中。打开终端并运行命令。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### 适用于 Seeed Studio XIAO RA4M1

与 SAMD21 类似，标准 OpenOCD 软件包不包含 XIAO RA4M1 的配置文件。你必须手动复制它。

**1. 复制配置文件**

*   **源文件：** 在 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_RA4M1/ra4m1.cfg`。
*   **目标文件夹：** 将该文件复制到 xPack OpenOCD 安装目录中的 `target` 脚本文件夹。

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为你的实际用户名以及你安装的 OpenOCD 版本。
:::

**2. 运行 OpenOCD 命令**

在系统任意位置打开一个新的终端，并运行对应的命令：

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### 适用于 Seeed Studio XIAO MG24

:::warning[Important]
XIAO MG24 需要使用 `XIAO_Debug_Mate_DAPLink_Package` 中包含的特殊版本 OpenOCD。**不要**使用系统范围安装的 OpenOCD。你**必须**在该软件包中提供的特定目录内运行命令。
:::

**1. 准备终端环境**

打开命令行工具，并在解压后的软件包中，根据你的操作系统进入对应的文件夹。

*   **Windows：**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux：**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. 运行 OpenOCD 命令**

进入正确目录后，执行以下命令：

*   **Windows：**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux：**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### 命令解析

理解命令中每一部分的作用，有助于你排查问题或自定义工作流程。下面我们来拆解一个典型命令：

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd`（或 `bin\openocd.exe`）：用于执行 OpenOCD 程序。我们假设它位于 `bin` 子目录中，这是一个常见约定。名称和扩展名会因操作系统而异。

*   `-s share/openocd/scripts`：`-s` 选项非常关键，它告诉 OpenOCD 到哪里去**搜**索脚本库。有了这个路径，OpenOCD 才能找到由 `-f` 选项指定的文件。

*   `-f interface/cmsis-dap.cfg`：`-f` 选项用于指定要加载的配**置**文件。第一个配置文件定义了我们使用的调试适配器（标准 CMSIS-DAP 探针）。

*   `-f target/rp2040.cfg`：第二个 `-f` 选项加载目标微控制器的配置文件（XIAO 开发板上 RP2040 芯片的配置）。

*   `-c "..."`：`-c` 选项会在 OpenOCD 启动后传入一条**命**令。
    *   `adapter speed 5000`:（适用于 RP2040/RP2350）将 SWD 时钟速度设置为 5000 kHz，以实现稳定通信。
    *   `reset_config srst_nogate`:（适用于 MG24）此特定目标所需的特殊复位配置。

运行上述任一命令后，OpenOCD 将初始化连接并等待调试器（例如 GDB）连接（通常在 3333 端口）。然后你可以使用调试器加载你的程序（`load <path/to/your/firmware.elf>`）、设置断点并调试代码。

#### 步骤 2：连接到 Telnet 服务器

现在，打开一个**第二个、全新的**命令提示符或终端窗口。输入以下命令并按回车：

```bash
telnet localhost 4444
```

*   `localhost` 指的是你自己的电脑。
*   `4444` 是 OpenOCD 用于 Telnet 连接的默认端口号。

如果连接成功，你的终端会显示来自 OpenOCD 的欢迎信息，并看到一个 `>` 提示符，表示已准备好接受你的命令。

#### 步骤 3：执行调试命令

现在你可以在 Telnet 会话中直接输入命令来控制目标芯片。以下是一些最常用的命令：

| Command             | Description                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **初始化目标。** 建立与芯片的连接。这应该始终是你连接后运行的第一个命令。                                                                                               |
| `reset halt`        | **复位并暂停。** 复位微控制器并立即暂停（halt）其执行。这是进入可调试状态的主要方式。                                                                                   |
| `reg`               | **显示寄存器。** 显示所有 CPU 寄存器的当前值。                                                                                                                          |
| `mdw [address] [count]` | **按字显示内存。** 读取并显示内存内容。例如，`mdw 0x20000000 10` 将显示从内存地址 `0x20000000` 开始的 10 个字（32 位值）。                                           |
| `step`              | **单步执行。** 在 CPU 上执行一条指令。如果该指令是函数调用，它会单步*进入*该函数。                                                                                      |
| `resume`            | **继续执行。** 让程序从当前状态自由运行。它会一直运行，直到命中断点（如果设置了断点）或你再次将其暂停。                                                                  |
| `exit`              | **退出 Telnet。** 关闭 Telnet 连接并返回到你的命令提示符。另一个窗口中的 OpenOCD 服务器将继续运行。                                                                      |

一个典型的手动调试会话可能遵循以下步骤：
1.  输入 `init` 以连接到芯片。
2.  输入 `reset halt` 以在程序最开始时停止它。
3.  输入 `mdw 0x20000000 10` 来检查一些 RAM 数值。
4.  输入 `step` 若干次，以逐步执行初始启动代码。
5.  输入 `resume` 让程序正常运行。
6.  完成后输入 `exit`。

## 使用 OpenOCD/PyOCD 烧录固件

除了交互式调试之外，XIAO Debug Mate 还非常擅长使用命令行工具将固件直接烧录（编程）到 XIAO 的微控制器上。主要工具是 **OpenOCD**（Open On-Chip Debugger）和 **PyOCD**。

本指南将引导你使用这些强大的工具上传预编译的固件文件。我们使用“OpenOCD/PyOCD”这一称呼，是因为大多数兼容的 XIAO 开发板使用 OpenOCD，而 **XIAO RA4M1** 在烧录时则必须使用 PyOCD。

### 烧录兼容性

下表总结了哪些 XIAO 开发板和文件类型可以使用所提供的工具进行命令行烧录。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO 型号</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>Bootloader</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.bin file with OpenOCD)</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.hex file with OpenOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (.hex file with PyOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>❌</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>❌</td>
		</tr>
	</table>
</div>

1. 在此兼容性表中标记为 ❌ 的项目，是在使用 OpenOCD v0.12.0 测试时失败的示例。请使用其他固件文件，以节省你的时间。
2. Bootloader 文件：此处仅提供 XIAO 的 bootloader 文件和烧录命令。如果该 XIAO 型号未提供 bootloader 文件，将标记为 ❌。
3. **XIAO RA4M1 和 XIAO MG24 不支持烧录 `.elf` 文件。尝试向 XIAO RA4M1 或 XIAO MG24 烧录 `.elf` 文件会导致设备变砖。**

### 前置条件

1.  **OpenOCD 安装：** 对于除 **XIAO MG24** 之外的所有 XIAO 开发板，你需要[在系统上安装 OpenOCD，并确保可以从命令行访问（即已添加到系统的 PATH 中）](#install-openocd)。

2.  **XIAO Debug Mate 固件包：** 我们准备了一个包含自定义配置文件和示例固件的压缩包。请下载并解压。其结构如下：

    *   `examples/`：包含为各类 XIAO 开发板预编译的示例固件（`.elf`、`.hex`、`.bin`）以及部分 XIAO bootloader 文件。
    *   `target/`：包含针对特定开发板（如 XIAO SAMD21 和 RA4M1）所需的自定义 OpenOCD 配置文件（`.cfg`）。
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`：一个用于在 macOS 和 Linux 上为 XIAO MG24 烧录固件的自包含 OpenOCD。
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`：一个用于在 Windows 上为 XIAO MG24 烧录固件的自包含 OpenOCD。

3.  **终端/命令提示符：** 你需要熟悉如何打开并使用命令行界面（例如 Command Prompt、PowerShell 或 Terminal）。

#### 命令执行策略

*   **选项 A（推荐）：在压缩包目录中运行**

    本指南中的所有命令都假定你已在解压后的 `XIAO_Debug_Mate_DAPLink_Package` 文件夹根目录中打开终端。这是最简单的方法，因为固件和配置文件的相对路径可以直接使用。

*   **选项 B（进阶）：在任意目录中运行**

    如果你更喜欢在自己的项目文件夹中运行命令，可以使用 `-s` 标志告诉 OpenOCD 在哪里查找我们压缩包中的自定义脚本。

    *   **需要操作：** 在你的 `openocd` 命令中添加 `-s <path_to_package_folder>`。例如：

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows 与 macOS/Linux：** 在所有命令中，Windows 用户应使用 `openocd.exe` 而不是 `openocd`。我们建议在文件路径中使用正斜杠（`/`），以提高跨平台兼容性。
:::

**烧录你自己的自定义固件：**

只需将示例路径（例如 `examples/Blink_RP2040.elf`）替换为你自己的固件文件路径即可。

### 了解固件文件（.bin、.hex、.elf）

当你编译一个项目时，工具链会生成一个要上传到微控制器的文件。你通常会遇到三种格式：

*   **.bin（Binary）：** 仅包含机器码的原始、紧凑的二进制文件。它不包含关于内存地址的额外信息，因此必须告知编程工具应将其放置在何处。
*   **.hex（Intel HEX）：** 二进制代码的 ASCII 文本表示。它包含内存地址、校验和和元数据，使其成为比 `.bin` 更健壮的格式。
*   **.elf（Executable and Linkable Format）：** 最全面的格式。它包含机器码、内存地址信息，以及函数名、变量名和源代码行号等调试信息。这是调试时的首选格式。
*   **.bootloader（Bootloader 文件）：** Bootloader 文件是一种专用固件镜像，驻留在微控制器内存的受保护区域，负责固件烧录、设备恢复和启动任务。在 XIAO 开发板上，bootloader 允许你在无需专用硬件编程器的情况下（通常通过 USB）向设备上传新的应用程序代码。如果设备无响应或主程序失败，重新烧录 bootloader 有助于恢复开发板。请仅使用与你的特定开发板型号相匹配的官方 bootloader 文件，因为使用错误的文件可能会导致设备失效，直到通过专用工具修复为止。

**如何从你的项目中获取这些文件：**

*   **Arduino IDE：** 编译完成后（`Sketch > Verify/Compile`），使用 `Sketch > Export compiled Binary`。这会在你的草图文件夹中保存一个 `.hex` 或 `.bin` 文件。
*   **PlatformIO：** 构建成功后，固件文件（`firmware.bin`、`firmware.hex`、`firmware.elf`）位于项目的 `.pio/build/<environment_name>/` 目录中。



### 烧录 `.bin` 文件

#### 适用于 Seeed Studio XIAO SAMD21

标准的 OpenOCD 安装包不包含 XIAO SAMD21 的配置文件。你必须从我们提供的压缩包中手动复制该文件到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 在 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到你 xPack OpenOCD 安装目录中的 `target` 脚本文件夹。路径会因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为你自己的用户名以及你安装的 OpenOCD 版本。
:::

**2. 烧录固件**

在系统任意位置打开一个新的终端，并运行对应的命令：

*   **在 Windows 上：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

*   **在 macOS / Linux 上：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

---

#### 适用于 Seeed Studio XIAO RP2040

在使用 OpenOCD 为 XIAO RP2040 烧录时，强烈建议使用 `.elf` 文件而不是 `.bin` 文件。

这是因为 `.elf` 文件内部已经包含了程序的内存地址信息（链接地址 Linker Address）。OpenOCD 会自动将其写入正确的位置（通常是 `0x10000000`），因此你无需手动计算或猜测偏移地址。

如果你必须使用 `.bin` 文件，则需要手动指定 XIAO RP2040 的 Flash 起始地址 `0x10000000`。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO RP2350

在使用 OpenOCD 为 XIAO RP2350 烧录时，强烈建议使用 `.elf` 文件而不是 `.bin` 文件。

这是因为 `.elf` 文件内部已经包含了程序的内存地址信息（链接地址 Linker Address）。OpenOCD 会自动将其写入正确的位置（通常是 `0x10000000`），因此你无需手动计算或猜测偏移地址。

如果你必须使用 `.bin` 文件，则需要手动指定 XIAO RP2350 的 Flash 起始地址 `0x10000000`。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO nRF52840

标准 xPack OpenOCD 中已包含 nRF52 的配置。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO RA4M1

目前，标准的 OpenOCD 发行版通常缺少对瑞萨 Renesas RA 系列的内置支持，例如专用驱动和目标配置文件。这使得使用 OpenOCD 进行烧录变成一个需要手动配置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供开箱即用的支持。

要烧录固件（例如 `Blink_RA4M1.hex`），请使用与你的操作系统对应的命令。

**在 Windows 上：**
```powershell
pyocd flash -t r7fa4m1ab examples\Blink_RA4M1.bin —base-address 0x4000
```

**在 macOS / Linux 上：**
```bash
pyocd flash -t r7fa4m1ab examples/Blink_RA4M1.bin —base-address 0x4000
```


### 烧录 `.elf` 文件

:::danger
在烧录 `.elf` 文件时，请密切注意固件大小。如果文件超过 2MB，请确保你的设备具有足够的 Flash 存储空间。否则可能会导致设备变砖！
:::

#### 适用于 Seeed Studio XIAO SAMD21

由于 XIAO SAMD21 仅有 256KB 的 Flash 内存，通常无法烧录大于 256KB 的固件文件。Blink 示例的 `.elf` 文件已经达到 658KB，因此无法烧录。我们建议改用更小的 `.bin` 或 `.hex` 文件。

---

#### 适用于 Seeed Studio XIAO RP2040

标准 xPack OpenOCD 中已包含 RP2040 的配置。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO RP2350

标准 xPack OpenOCD 中已包含 RP2350 的配置。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO nRF52840

标准 xPack OpenOCD 中已包含 nRF52 的配置。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
有时你可能需要烧录两次固件才能生效，这是正常现象。
:::

---

#### 适用于 Seeed Studio XIAO RA4M1

:::danger 请勿将设备刷成砖
XIAO RA4M1 禁止烧录 `.elf` 文件，否则可能会导致设备变砖！！！
:::

---

#### 适用于 Seeed Studio XIAO MG24

:::danger 请勿将设备刷成砖
XIAO MG24 禁止烧录 `.elf` 文件，否则可能会导致设备变砖！！！
:::


### 烧录 `.hex` 文件

#### 适用于 Seeed Studio XIAO SAMD21

标准 OpenOCD 软件包中不包含 XIAO SAMD21 的配置文件。你必须将我们提供的软件包中的配置文件手动复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 在 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到你 xPack OpenOCD 安装目录中的 `target` 脚本文件夹。路径会因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为你自己的用户名以及你安装的 OpenOCD 版本。
:::

**2. 烧录固件**

在系统任意位置打开一个新的终端，并运行对应的命令：

*   **在 Windows 上：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

*   **在 macOS / Linux 上：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

---

#### 适用于 Seeed Studio XIAO nRF52840

标准 xPack OpenOCD 中已包含 nRF52 的配置。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

---

#### 适用于 Seeed Studio XIAO RA4M1

目前，标准的 OpenOCD 发行版通常缺少对瑞萨 Renesas RA 系列的内置支持，例如专用驱动和目标配置文件。这使得使用 OpenOCD 进行烧录变成一个需要手动配置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供开箱即用的支持。

要烧录固件（例如 `Blink_RA4M1.hex`），请使用与你的操作系统对应的命令。

**在 Windows 上：**
```powershell
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples\Blink_RA4M1.hex
```

**在 macOS / Linux 上：**
```bash
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
```

**命令说明：**
*   `pyocd flash`：执行烧录操作。
*   `-e sector`：在编程前擦除 Flash 存储器中所需的扇区。
*   `-a 0x0`：指定烧录的起始地址，这里为 `0x00000000`。
*   `-t r7fa4m1ab`：指定目标 MCU 类型。
*   `examples\Blink_RA4M1.hex` 或 `examples/Blink_RA4M1.hex`：你要烧录的固件文件路径。注意 Windows 使用 `\`，而 macOS/Linux 使用 `/`。

#### 适用于 Seeed Studio XIAO MG24

该开发板需要使用软件包中自带的专用 OpenOCD 版本。你**必须**在运行命令前先进入正确的目录。

1.  **进入正确的目录：**
    *   **在 Windows 上：** 打开命令提示符并运行：
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **在 macOS/Linux 上：** 打开终端并运行：
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **运行烧录命令：**
    固件的路径现在是 `../examples/Blink_MG24.hex`，因为你在软件包目录中已经深入了两级。

    **在 Windows 上：**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **在 macOS / Linux 上：**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### 烧录 Bootloader 文件

这是一个可以恢复开发板的关键操作。

#### 适用于 Seeed Studio XIAO SAMD21

标准的 OpenOCD 软件包不包含 XIAO SAMD21 的配置文件。你必须从我们提供的软件包中手动复制该文件到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 在 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到 xPack OpenOCD 安装目录中的 `target` 脚本文件夹。路径会因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为你自己的用户名以及你安装的 OpenOCD 版本。
:::

**2. 烧录固件**

此命令使用我们软件包中提供的自定义 `at91samd21g18.cfg` 文件来烧录 `.bin` Bootloader。

*   **在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### 适用于 Seeed Studio XIAO nRF52840

该过程包括下载 Bootloader，然后擦除芯片并烧录新的文件。

此命令使用你 OpenOCD 安装中的标准 `nrf52.cfg`。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
使用 OpenOCD 烧录 Bootloader 后再烧录固件 bin 时，固件 bin 可能无法正常运行。你需要通过 Arduino 上传一个程序，才能让程序正常运行。

这是因为 Nordic 系列芯片（例如 nRF52832）的 Bootloader 在启动时需要在特定的内存地址（通常称为“Bootloader Settings Page”）检查应用固件的有效性信息。这个“设置页”包含固件的 CRC 校验和、长度以及有效性标志。

当你使用 OpenOCD 这类通用编程工具直接烧录 .bin 文件时，它们只会把固件的二进制数据写入指定的应用起始地址，而不会自动生成或写入 Bootloader 所需的“设置页”。因此，当设备重启时，Bootloader 无法检测到有效的设置页，就会判断不存在合法的应用，从而拒绝启动固件，通常会进入 DFU（Device Firmware Update）模式，等待通过 OTA 或串口进行更新。
:::

#### 适用于 Seeed Studio XIAO RA4M1

目前，标准的 OpenOCD 发行版通常缺少对 Renesas RA 系列的内置支持，例如专用驱动和目标配置文件。这使得使用 OpenOCD 进行烧录变成一个需要手动配置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供了开箱即用的支持。

要烧录 Bootloader，请使用与你的操作系统对应的命令。

**在 Windows 上：**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**在 macOS / Linux 上：**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## 在 PlatformIO 上使用调试功能

首先，确保你已经在 Visual Studio Code 中安装了 PlatformIO IDE 扩展。

1.  **安装 VS Code**： [下载并安装 Visual Studio Code](https://code.visualstudio.com/)。
2.  **安装 PlatformIO IDE**：打开 VS Code，进入扩展视图（Ctrl+Shift+X），搜索 `PlatformIO IDE` 并安装。

### 创建并配置 PlatformIO 项目

1.  **启动 PlatformIO**：点击 VS Code 活动栏中的 PlatformIO 图标，并选择“Home”以打开 PIO Home 界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **创建新项目**：点击“New Project”，并为你的项目命名。
    *   **选择开发板**：搜索你打算使用的具体 XIAO 开发板。

:::note
由于 Seeed Studio 开发板托管在第三方仓库中，你的特定开发板可能不会默认出现在搜索列表中。如果发生这种情况，你可以先选择一个通用开发板（或任意可用开发板）来初始化项目，我们会在下一步中进行修正。
:::

3.  **配置 `platformio.ini`**：这是最关键的一步。为了启用 XIAO Debug Mate 的调试功能并正确识别开发板，你必须修改位于项目根目录下的 `platformio.ini` 文件。

    **添加 Seeed Studio 开发板支持：**
    Seeed Studio 开发板不包含在默认的 PlatformIO 注册表中，而是维护在一个**第三方仓库**中。要使用它们，你必须在配置中指定该仓库的 URL。

    你需要将 `platform` 参数设置为以下 URL：
    `https://github.com/Seeed-Studio/platform-seeedboards`

    该配置文件会告诉 PlatformIO 从这个自定义仓库下载开发板定义，并指定用于上传和调试的工具。XIAO Debug Mate 的功能等同于标准的 **CMSIS-DAP** 调试器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    下面是针对不同 XIAO 型号推荐的 `platformio.ini` 配置。复制与你的开发板对应的内容。我们使用的是来自 GitHub 的平台开发版本，以确保你拥有最新的开发板支持文件。

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

对于 nRF52840，PlatformIO 提供了两个开发板支持包。请选择符合你项目需求的那个。

**Mbed 内核：**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit 内核：**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

请注意，RA4M1 是一个特殊情况。它使用 `pyocd` 进行上传，但调试仍然使用 `cmsis-dap`。

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

保存 `platformio.ini` 文件后，下次构建或调试时，PlatformIO 会自动下载所有必要的工具链和软件包。

### 单步调试

单步执行是跟踪代码逻辑和定位错误的核心功能。

1.  **连接硬件**：将 XIAO 开发板插入 XIAO Debug Mate。使用 USB-C 线将 Debug Mate 连接到电脑。
2.  **开始调试**：你可以通过两种方式启动调试会话：
    *   按下 `F5` 键。
    *   进入“Run and Debug”视图（活动栏中的小虫图标），然后点击顶部绿色的“Start Debugging”箭头。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **调试控制**：PlatformIO 会编译你的代码，通过 Debug Mate 将其上传到 XIAO，并在 `main()` 或 `setup()` 的第一行暂停执行。编辑器顶部会出现一个调试工具栏，允许你控制程序的执行流程：
    *   **Continue (F5)**: 恢复执行，直到命中下一个断点或程序结束。
    *   **Step Over (F10)**: 执行当前行。如果该行包含函数调用，将执行整个函数并在下一行暂停。
    *   **Step Into (F11)**: 执行当前行。如果该行包含函数调用，调试器将进入该函数并在其第一行暂停。
    *   **Step Out (Shift+F11)**: 如果当前在函数内部暂停，将执行该函数剩余部分并返回到调用该函数的那一行。
    *   **Restart (Ctrl+Shift+F5)**: 终止并重新启动当前调试会话。
    *   **Stop (Shift+F5)**: 终止调试会话。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### 断点调试

如果你希望程序在某个特定位置暂停，断点就是完成这项任务的工具。

1.  **设置断点**：在代码编辑器中，将光标移动到你希望暂停的行号左侧。会出现一个浅红色的小圆点。点击它即可设置断点（小圆点会变成亮红色）。
2.  **运行到断点**：启动调试会话（`F5`）。程序将以全速运行，并在运行到带有断点的那一行时自动暂停。
3.  **管理断点**：在 "Run and Debug" 侧边栏中，"BREAKPOINTS" 部分会列出所有激活的断点。你可以在这里启用、禁用或删除它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### RAM 读/写

当程序在断点处暂停时，你可以检查甚至修改变量的状态。

1.  **查看变量（读）**：在 "Run and Debug" 侧边栏中，"VARIABLES" 部分会显示当前作用域内的所有局部和全局变量及其当前值。
2.  **监视变量**：如果你想监控特定变量或表达式，请转到 "WATCH" 部分，点击 `+` 图标，并输入变量名（例如 `myVariable` 或 `&myVariable` 以查看其内存地址）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **修改变量（写）**：在 "VARIABLES" 或 "WATCH" 部分，你通常可以双击变量的值来输入一个新值。按 Enter 应用更改。这对于在不重启程序的情况下测试不同条件非常有用。


## 故障排查

### Q1: 如果我把 XIAO RA4M1 刷挂了，还有办法修复吗？

你可以尝试重新烧录 Bootloader 来恢复设备。对于 XIAO RA4M1 型号，请参考用于 Bootloader 恢复的 **[此方法](#for-seeed-studio-xiao-ra4m1-2)**。

在恢复 Bootloader 时，如果出现错误，请尝试将 XIAO RA4M1 连接到已连接电脑的 XIAO Debug Mate。按住 XIAO RA4M1 上的 B 按钮，同时单击一次 R 按钮，然后同时松开 R 和 B。接着再次尝试烧录 Bootloader。

烧录 Bootloader 完成后，尝试使用 Arduino 等软件重新更新固件。通常可以恢复功能。如果仍然失败，则设备可能已经永久损坏且无法修复。任何使用 XIAO Debug Mate 烧录固件的操作都可能需要你自行承担全部责任。


### Q2: 如何判断设备是否已经被刷挂？

判断 XIAO 设备是否损坏的最直接方式是：连接电脑时不显示任何串口。如果在按住 B 按钮后再插入电脑，设备仍然不显示串口连接，则说明设备已损坏。


### Q3: 损坏的设备可以修复吗？我可以联系技术支持申请更换吗？

XIAO 设备损坏通常是由分区或 Bootloader 文件问题引起的。通常可以通过重新烧录 Bootloader 文件来解决。如果这一步失败，目前没有其他替代方案。用户必须对自行执行此操作承担全部责任，因此请务必确认烧录命令和固件已经过验证且有效。

### Q4: XIAO Debug Mate 需要驱动吗？

XIAO Debug Mate 已在最新的计算机操作系统上进行了测试和验证，无需安装驱动即可正常工作。对于 Windows 电脑，我们建议使用 **Windows 11** 操作系统。在测试过程中，我们发现如果你使用 Zading 安装过驱动，可能会导致设备无法被识别。

### Q5: 我的 XIAO Debug Mate 在 Windows 11 上一直亮红灯且无法被识别，提示错误：“unable to find a matching CMSIS-DAP device.”

针对你的 XIAO Debug Mate 在 Windows 11 上亮红灯并提示 "unable to find a matching CMSIS-DAP device" 的问题，请尝试以下排查步骤：

**1. 检查 USB 线缆**

首先，请确保你使用的 USB 线缆支持数据传输，而不仅仅是充电线。你可以通过检查设备是否出现在串口监视软件中，或是否能看到任何设备日志来验证。如果插入电脑后完全没有反应，请尝试更换线缆。

**2. 通过 PowerShell 重新安装驱动**

如果线缆确认没有问题，则很可能是驱动安装不正确导致的。你可以通过 PowerShell 删除冲突的驱动来解决。请按照以下步骤操作：

1.  右键单击开始按钮，选择 **Terminal (Admin)** 或 **PowerShell (Admin)**。

2.  运行以下命令以查找 CMSIS-DAP 驱动的详细信息：

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  在输出中查找 **"Published Name"**（通常类似于 `oemXX.inf`）。

4.  运行以下命令以删除并卸载驱动（将 `{inf_name}` 替换为你在上一步中找到的实际名称，例如 `oem10.inf`）：

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

完成上述步骤后，请重新连接你的设备并检查是否已被正确识别。

### Q6: 如果我系统中显示的 OpenOCD 版本与 Wiki 截图中的不同，该怎么办？

如果你在系统中检查 OpenOCD 版本时，输出与 Wiki 截图中推荐的版本不一致，可能是因为你安装了多个 OpenOCD，或者系统默认使用了不同的版本。

在 Windows 电脑上，打开 **系统环境变量**，进入 **系统变量** 部分。编辑 `Path` 变量，并将 Wiki 推荐的 OpenOCD 安装路径（例如 `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`）移动到列表的最顶部。这样可以确保系统优先找到并使用推荐的 OpenOCD 版本。完成更改后，打开一个新的终端并重新运行 `openocd --version`，确认现在显示的是正确的版本。



## 资源

- **[ZIP]** [XIAO_Debug_Mate_DAPLink_Package-v1.0](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip)


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
