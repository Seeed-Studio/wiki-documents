---
description: 本文介绍如何使用 XIAO Debug Mate 的 DAPLink 调试功能。
title: DAPLink 调试器
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /cn/xiao_debug_mate_debug
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

欢迎使用 XIAO Debug Mate DAPLink 功能的官方用户手册。这份全面的指南旨在帮助初学者和高级用户充分发挥 XIAO Debug Mate 在专业调试任务中的全部潜力。在这里，您将学习如何连接、配置和操作 DAPLink 调试器，了解基本的软件工具，并遵循最佳实践，确保与各种 XIAO 系列开发板的调试体验顺畅且高效。无论您是在排查复杂的固件问题还是优化开发工作流程，本文档都提供了清晰的分步说明、技巧和深入的技术解释，为您的项目从开始到完成提供支持。


## 调试器概念解释

为了有效使用 XIAO Debug Mate 的 DAPLink 功能，了解协同工作以实现调试的关键软件组件和协议是很有帮助的。以下是每个概念的详细说明以及它们之间的关系。

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**，GNU 项目调试器，是调试过程的核心引擎。它是运行在您的主机计算机（PC）上的强大命令行工具。GDB 负责控制目标微控制器上程序的执行。它允许您：
*   启动和停止程序。
*   设置断点以在特定代码行暂停执行。
*   逐行单步执行代码。
*   检查变量值和内存寄存器的内容。

大多数现代集成开发环境（IDE），如 VS Code（配合 PlatformIO）或 Eclipse，都提供图形用户界面作为 GDB 的前端，将您的点击操作转换为 GDB 命令。

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)**（开放片上调试器）和 **[PyOCD](https://pyocd.io/)** 是运行在主机计算机上的重要"服务器"应用程序。它们充当 GDB 的高级命令与物理调试探针（在本例中为 XIAO Debug Mate）所需的低级信号之间的桥梁或转换器。

当 GDB 发出诸如"读取变量 `x` 的值"这样的命令时，OpenOCD 接收此命令，将其转换为调试探针能够理解的指令序列，并通过 USB 将这些指令发送给探针。

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** 是运行在 XIAO Debug Mate 的 ESP32-S3 微控制器上的开源固件。该固件将 Debug Mate 转换为功能齐全的调试探针。其主要工作是实现 CMSIS-DAP 协议，使其能够通过 USB 从主机计算机接收调试命令，并与目标芯片的调试引脚（SWD）进行物理交互。本质上，DAPLink 是设备上执行 OpenOCD 发送命令的"代理"。

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)**（Cortex 微控制器软件接口标准 - 调试访问端口）是一个标准化协议，定义了主机计算机如何通过 USB 与调试探针通信。由于 XIAO Debug Mate 的 DAPLink 固件遵循此标准，它与 OpenOCD、PyOCD 和 Keil MDK 等各种行业标准工具即时兼容，无需任何专有驱动程序或软件。

### Telnet

**Telnet** 是一个简单的基于文本的网络协议。在调试环境中，OpenOCD 通常在特定端口（通常是端口 4444）上开启 Telnet 服务器。这提供了直接的、人类可读的命令行界面来访问 OpenOCD 服务器本身。虽然 GDB 用于应用程序级调试，但 Telnet 界面对于高级任务很有用，如配置 OpenOCD、检查调试探针状态或发出低级复位命令。

### 它们如何协同工作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

以下是从您的 IDE 到目标 XIAO 的整个调试链的总结：

1.  **您**（在 IDE 中）点击"开始调试"。
2.  **IDE** 使用适当的程序文件启动 **GDB**。
3.  **GDB** 连接到运行在您 PC 上的 **OpenOCD** 服务器。
4.  **OpenOCD** 检测通过 USB 连接的 **XIAO Debug Mate**。它使用 **CMSIS-DAP** 协议与设备通信。
5.  Debug Mate 上的 **DAPLink** 固件接收这些 CMSIS-DAP 命令。
6.  **DAPLink** 将这些命令转换为 **SWD**（串行线调试）引脚（SWDIO 和 SWCLK）上的电信号。
7.  这些 SWD 信号直接控制目标 XIAO 内部的 **ARM Cortex 核心**，允许 OpenOCD 和 GDB 暂停 CPU、读取内存并执行所有其他调试操作。

简而言之：**GDB** 是指挥官，**OpenOCD** 是翻译员，**CMSIS-DAP** 是它们使用的语言，**DAPLink** 是在现场执行命令的士兵。

## 调试入门

### 兼容性检查

XIAO Debug Mate 专为整个 XIAO 生态系统设计，但 DAPLink 调试功能专门针对 ARM Cortex-M 核心。然而，UART 和功耗监控功能是通用兼容的，因为它们与架构无关。请参考下表了解详细的兼容性信息。

<div class="table-center">

<table align="center">

<tr>

<th>XIAO 型号</th>

<th>核心架构</th>

<th>DAPLink 调试</th>

<th>UART 监控</th>

<th>功耗分析</th>

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

### 软件准备

在开始调试之前，您需要在主机计算机上设置必要的软件。

#### 安装 OpenOCD

:::tip
已验证：请使用 OpenOCD 版本 0.12.0-7 或更高版本。
:::

为了确保兼容性并获得最新功能，我们强烈建议使用 **xPack** 版本的 OpenOCD。系统包管理器（如 macOS 上的 Homebrew 或 Linux 上的 APT）通常提供较旧的过时版本，可能无法与现代目标正常工作。

:::tip PlatformIO 注意事项
如果您使用 VS Code 配合 PlatformIO 扩展，PlatformIO 将在您开始调试会话时自动下载并为您的项目配置正确版本的 OpenOCD。
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

在 Windows 上，手动安装方法很简单。

1.  **下载 OpenOCD 包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。最新版本总是列在最顶部。在最新发布版本中找到 Windows 版本（例如，`xpack-openocd-...-win32-x64.zip`）并下载此文件。

2.  **解压文件**

右键点击下载的 ZIP 文件并选择"全部解压..."。选择一个稳定的位置，如 `C:\Users\YourName\AppData\Local\xPacks\OpenOCD`。解压后，您将得到一个类似 `xpack-openocd-0.12.0-7` 的文件夹，其中包含 `bin` 目录。

3.  **将 OpenOCD 添加到系统 PATH**

这允许您从任何终端运行 `openocd`。

    - 在开始菜单中搜索"Environment Variables"并选择"Edit the system environment variables"。
    - 点击 **"Environment Variables..."**。
    - 在"System variables"下，选择 **"Path"** 变量并点击 **"Edit..."**。
    - 点击 **"New"** 并粘贴您之前解压的 `bin` 目录的完整路径。例如：  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - 在所有窗口上点击 OK 保存。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **验证安装**

打开一个**新的**命令提示符或 PowerShell 窗口并运行：

```bash
openocd --version
```

如果安装成功，您将看到版本信息打印出来（例如，`xPack Open On-Chip Debugger 0.12.0+dev-02228`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

此过程与 Windows 手动设置相似。

1.  **下载 OpenOCD 包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。找到最新版本并下载适合您 Mac 的正确存档文件（例如，Intel 版本为 `...-darwin-x64.tar.gz`，Apple Silicon 版本为 `...-darwin-arm64.tar.gz`）。

2.  **解压文件**

打开终端并运行以下命令。我们将在您的主目录中创建一个标准位置。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **将 OpenOCD 添加到您的 PATH**

您需要告诉您的 shell 在哪里找到 `openocd` 可执行文件。现代 macOS 的默认 shell 是 Zsh。

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
确保将 `xpack-openocd-0.12.0-7` 替换为实际创建的文件夹名称。如果您使用 Bash，请编辑 `~/.bash_profile` 而不是 `~/.zshrc`。
:::

4.  **应用并验证**

您所做的 `PATH` 更改在当前终端会话中不会生效，直到重新加载配置文件。

在您现有的终端中运行以下命令：

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

现在，通过运行以下命令验证安装：

```bash
openocd --version
```

您应该看到正确的 xPack 版本信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

此过程与其他操作系统上的手动设置相同。

1.  **下载 OpenOCD 包**

前往 [xPack OpenOCD 发布页面](https://github.com/xpack-dev-tools/openocd-xpack/releases)。找到最新版本并下载 Linux 存档文件（`...-linux-x64.tar.gz`）。

2.  **解压文件**

打开终端并运行以下命令。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **将 OpenOCD 添加到您的 PATH**

您需要告诉您的 shell 在哪里找到 `openocd` 可执行文件。大多数 Linux 发行版使用 Bash shell。

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
确保将 `xpack-openocd-0.12.0-7` 替换为实际创建的文件夹名称。
:::

4.  **应用并验证**

您所做的 `PATH` 更改在当前终端会话中不会生效，直到重新加载配置文件。

在您现有的终端中运行以下命令：

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

现在，通过运行以下命令验证安装：

```bash
openocd --version
```

您应该看到正确的 xPack 版本信息。

</TabItem>
</Tabs>

#### 安装 PyOCD

:::info
如果您打算使用 XIAO RA4M1 的固件烧录功能，您可能需要参考这里的步骤来额外下载和使用 PyOCD。
:::

PyOCD 是一个基于 Python 的工具，用于编程和调试 Arm Cortex-M 微控制器。

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **先决条件**
    确保您的系统上安装了 **Python**。如果没有，请从官方 [python.org](https://www.python.org/) 网站下载，并确保在安装过程中勾选 **"Add Python to PATH"** 选项。

2.  **安装 PyOCD**
    打开命令提示符或 PowerShell 窗口并运行以下命令：

    ```bash
    pip install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。您需要安装特定的支持包以便 PyOCD 识别它。

    搜索包以确认可用性：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否现在被识别：
    ```bash
    pyocd list --targets
    ```
    您应该在列表中看到 `r7fa4m1ab`。

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **先决条件**
    MacOS 通常自带 Python，但建议使用 Homebrew 或官方安装程序来获取最新版本。打开您的终端。

2.  **安装 PyOCD**
    在您的终端中运行以下命令：

    ```bash
    pip3 install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。您需要安装特定的支持包。

    搜索包：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否被识别：
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **先决条件**
    确保通过您的包管理器安装了 `python3` 和 `pip`（例如，在 Ubuntu 上运行 `sudo apt install python3-pip`）。

    :::note USB 权限
    在 Linux 上，您可能还需要设置 udev 规则以允许在不使用 `sudo` 的情况下访问 USB 设备。
    :::

2.  **安装 PyOCD**
    在您的终端中运行以下命令：

    ```bash
    pip3 install -U pyocd
    ```

3.  **安装 XIAO RA4M1 支持包**
    XIAO RA4M1 使用 `R7FA4M1AB` 芯片。

    搜索包：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    安装包：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **验证目标**
    检查目标是否被识别：
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### 了解 `XIAO_Debug_Mate_DAPLink_Package` 包

在您开始使用 DAPLink 调试器功能之前，您需要单独下载 ZIP 文件。此文件包含调试各种 XIAO 开发板所需的所有文件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ZIP 文件</font></span></strong>
    </a>
</div>


##### 目录结构说明

解压文件后，您将看到以下文件夹结构。每个部分都有特定的用途：

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
    此文件夹包含从 Arduino 导出的各种 XIAO 开发板的预编译示例固件文件（例如 `.bin`、`.elf`、`.hex`）。这些将在后续教程中用于演示如何烧录和调试微控制器。

*   **`target/`**
    此文件夹包含官方 OpenOCD 发行版中可能缺失的 XIAO 开发板的目标配置（`.cfg`）文件。当您在现有的 OpenOCD 安装中使用 XIAO SAMD21 或 XIAO RA4M1 等开发板时，您需要手动将这些配置文件添加到您的 OpenOCD 环境中。具体步骤将在后面介绍。

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    这是 **XIAO MG24** 开发板的特殊且非常重要的组件。目前，官方 OpenOCD 发布版本或标准 xPack 发行版中都不支持此芯片。为了解决这个问题，我们为 Windows（`XIAO_MG24_Win_...`）和 macOS/Linux（`XIAO_MG24_Mac_Linux_...`）提供了完整的独立 OpenOCD 包。当您使用 XIAO MG24 时，您**必须**使用这些特定文件夹中提供的 `openocd` 可执行文件。

### 硬件准备

连接您的硬件进行调试非常简单。

#### 对于 XIAO 开发板

:::tip
一般来说，Debug Mate 上的 XIAO 的所有功能都不需要为 XIAO 额外供电，除非另有说明。
:::

XIAO Debug Mate 专为与所有 Seeed Studio XIAO 开发板的无缝即插即用体验而设计。

1.  拿起您的 XIAO 开发板并将其与 Debug Mate 上的母头对齐。
2.  **确保 XIAO 上的 USB-C 端口与 Debug Mate 上的 USB-C 端口朝向相同方向。**
3.  将 XIAO 直接向下牢固按压到插座中，直到完全就位。这确保 Debug Mate 上的弹簧针与 XIAO 底部的 SWD 焊盘建立牢固连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
一些较早的 XIAO 开发板，如 **XIAO SAMD21**、**XIAO RP2040** 和 **XIAO nRF52840**，是在建立背面焊盘统一标准之前设计的。虽然 Debug Mate 的弹簧针位置尽可能兼容，但这些较旧开发板的轻微变化可能导致接触不完美。

如果您遇到不稳定的调试连接，请尝试**稍微调整 XIAO 开发板在插座中的位置**。您可能不需要将其完全按下。轻微的移动通常可以确保弹簧针与 XIAO 背面的 SWD 焊盘建立牢固接触。
:::

:::danger hot-swapping
我们强烈建议不要热插拔 XIAO 和 Debug Mate！
:::

#### 适用于其他开发板

您也可以将 XIAO Debug Mate 用作其他基于 ARM 的开发板的通用 SWD 调试探针。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  您需要四根杜邦线（母对公或母对母，取决于您的目标板）。
2.  在目标板上找到 SWD 调试引脚。这些引脚通常标记为 `SWDIO`、`SWCLK`、`GND`，有时还有 `VTref` 或 `VCC`。
3.  将 XIAO Debug Mate 扩展接头的线缆连接到目标板，连接方式如下：

| XIAO Debug Mate 引脚 | 目标板引脚 | 描述                               |
| :------------------ | :--------------- | :---------------------------------------- |
| `SWDIO`             | `SWDIO`          | 串行线数据输入/输出             |
| `SWCLK`             | `SWCLK`          | 串行线时钟                         |
| `GND`               | `GND`            | 公共地线                             |
| `VCC`               | `VTref` 或 `3V3` | 目标电压参考（对电平转换很重要） |

连接完成后，您可以配置 OpenOCD 使用 CMSIS-DAP 接口，并像使用任何其他探针一样开始调试会话。


## 通过 Telnet 与 OpenOCD 交互

虽然现代 IDE 提供了图形化的调试界面，但有时您需要一种更直接、更底层的方式与调试器交互。这就是 Telnet 的用武之地。OpenOCD 运行一个 Telnet 服务器，允许您直接连接并发送基于文本的命令来控制目标芯片。这对于快速检查、编写自动化任务脚本，或在完整 IDE 不可用或不必要时调试问题非常有用。

### 启用 Telnet 客户端

在使用 Telnet 之前，您可能需要在操作系统上启用它，因为它并不总是默认安装或启用的。

<Tabs>
<TabItem value="Windows" label="Windows" default>

在现代 Windows 系统上，Telnet 客户端是一个需要手动启用的传统功能。

1.  按 `Win` + `R` 打开"运行"对话框，输入 `control panel`，然后按 Enter。
2.  转到 **Programs** > **Programs and Features**。
3.  在左侧，点击 **Turn Windows features on or off**。
4.  在出现的新窗口中，向下滚动找到 **Telnet Client**。
5.  勾选旁边的复选框，然后点击 **OK**。Windows 将安装该功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
在最新版本的 macOS 中，原生 Telnet 客户端可能已被移除。最简单的安装方法是使用 [Homebrew]。打开终端并运行：
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
大多数 Linux 发行版都自带 Telnet 客户端。如果没有，您可以使用包管理器轻松安装。对于基于 Debian/Ubuntu 的系统，打开终端并运行：
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### 使用 Telnet 进行逐步调试

#### 步骤 1：运行 OpenOCD 服务器

在下面的列表中找到您的 XIAO 开发板，并按照您操作系统的具体说明启动 OpenOCD 服务器。此服务器进程将等待来自 GDB 等调试器的连接。

##### 适用于 Seeed Studio XIAO SAMD21

标准 OpenOCD 包不包含 XIAO SAMD21 的配置文件。您必须手动将其从我们提供的包中复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 从 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到您的 xPack OpenOCD 安装的 `target` 脚本文件夹中。路径因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为您的实际用户名和安装的 OpenOCD 版本。
:::

**2. 运行 OpenOCD 命令**

在系统的任意位置打开新终端并运行相应命令：

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

RP2040 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

RP2350 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

nRF52 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

与 SAMD21 类似，标准 OpenOCD 包不包含 XIAO RA4M1 的配置文件。您必须手动复制它。

**1. 复制配置文件**

*   **源文件：** 从 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_RA4M1/ra4m1.cfg`。
*   **目标文件夹：** 将此文件复制到您的 xPack OpenOCD 安装的 `target` 脚本文件夹中。

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为您的实际用户名和安装的 OpenOCD 版本。
:::

**2. 运行 OpenOCD 命令**

在系统的任意位置打开新终端并运行相应命令：

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

:::warning[重要]
XIAO MG24 需要 `XIAO_Debug_Mate_DAPLink_Package` 中包含的特殊版本 OpenOCD。**不要**使用系统范围的 OpenOCD 安装。您**必须**从包中提供的特定目录内运行命令。
:::

**1. 准备终端**

打开命令行工具并导航到解压包中适合您操作系统的正确文件夹。

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

了解命令各部分的作用可以帮助您排除故障或自定义工作流程。让我们分解一个典型命令：

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd`（或 `bin\openocd.exe`）：这执行 OpenOCD 程序。我们假设它位于 `bin` 子目录中，这是标准约定。名称和扩展名因操作系统而异。

*   `-s share/openocd/scripts`：`-s` 标志至关重要。它告诉 OpenOCD 在哪里**搜索**其脚本库。设置此路径后，OpenOCD 可以找到 `-f` 标志指定的文件。

*   `-f interface/cmsis-dap.cfg`：`-f` 标志指定要加载的配置**文件**。第一个定义我们使用的调试适配器（标准 CMSIS-DAP 探针）。

*   `-f target/rp2040.cfg`：第二个 `-f` 标志加载目标微控制器的配置（XIAO 板上的 RP2040 芯片）。

*   `-c "..."`：`-c` 标志在 OpenOCD 启动后向其传递**命令**。
    *   `adapter speed 5000`：（适用于 RP2040/RP2350）将 SWD 时钟速度设置为 5000 kHz 以实现稳定通信。
    *   `reset_config srst_nogate`：（适用于 MG24）此特定目标所需的特殊复位配置。

运行其中一个命令后，OpenOCD 将初始化连接并等待调试器（如 GDB）连接（通常在端口 3333 上）。然后您可以使用调试器加载程序（`load <path/to/your/firmware.elf>`）、设置断点并调试代码。

#### 步骤 2：连接到 Telnet 服务器

现在，打开**第二个新的**命令提示符或终端窗口。输入以下命令并按 Enter：

```bash
telnet localhost 4444
```

*   `localhost` 指您自己的计算机。
*   `4444` 是 OpenOCD 用于 Telnet 连接的默认端口号。

如果连接成功，您的终端将显示来自 OpenOCD 的欢迎消息，您将看到一个 `>` 提示符，准备接受您的命令。

#### 步骤 3：执行调试命令

您现在可以直接在 Telnet 会话中输入命令来控制目标芯片。以下是一些最常用的命令：

| 命令             | 描述                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **初始化目标。** 建立与芯片的连接。这应该始终是连接后运行的第一个命令。                                        |
| `reset halt`        | **复位并暂停。** 复位微控制器并立即暂停（停止）其执行。这是进入调试就绪状态的主要方式。                       |
| `reg`               | **显示寄存器。** 显示所有 CPU 寄存器的当前值。                                                                                                   |
| `mdw [address] [count]` | **内存显示字。** 读取并显示内存内容。例如，`mdw 0x20000000 10` 将显示从内存地址 `0x20000000` 开始的 10 个字（32 位值）。 |
| `step`              | **单步执行。** 在 CPU 上执行单条指令。如果指令是函数调用，它将步进*进入*函数。                                      |
| `resume`            | **恢复执行。** 让程序从当前状态自由运行。它将继续运行，直到遇到断点（如果设置了任何断点）或您再次停止它。              |
| `exit`              | **退出 Telnet。** 关闭 Telnet 连接并返回到您的命令提示符。另一个窗口中的 OpenOCD 服务器将保持运行。                          |

典型的手动调试会话可能遵循以下步骤：
1.  输入 `init` 连接到芯片。
2.  输入 `reset halt` 在最开始停止程序。
3.  输入 `mdw 0x20000000 10` 检查一些 RAM 值。
4.  输入 `step` 几次来逐步执行初始启动代码。
5.  输入 `resume` 让程序正常运行。
6.  完成后输入 `exit`。

## 使用 OpenOCD/PyOCD 烧录固件

除了交互式调试，XIAO Debug Mate 还擅长使用命令行工具直接将固件编程（烧录）到 XIAO 的微控制器上。主要工具是 **OpenOCD**（开放式片上调试器）和 **PyOCD**。

本指南将引导您使用这些强大的工具上传预编译的固件文件。我们使用"OpenOCD/PyOCD"这个称呼，因为大多数兼容的 XIAO 开发板使用 OpenOCD，而 **XIAO RA4M1** 专门需要 PyOCD 进行烧录。

### 烧录兼容性

此表总结了哪些 XIAO 开发板和文件类型支持使用提供的工具进行命令行烧录。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO 型号</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>引导程序</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (使用 OpenOCD 的 .bin 文件)</td>
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
            <td>✅ (使用 OpenOCD 的 .hex 文件)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (使用 PyOCD 的 .hex 文件)</td>
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

1. 此兼容性表中标记为 ❌ 的项目是使用 OpenOCD v0.12.0 测试失败的样本。请使用其他固件文件以节省您的时间。
2. 引导程序文件：这里仅提供 XIAO 引导程序文件和烧录命令。如果此 XIAO 型号不附带引导程序文件，将标记为 ❌。
3. **XIAO RA4M1 和 XIAO MG24 不支持烧录 `.elf` 文件。尝试将 `.elf` 文件烧录到 XIAO RA4M1 或 XIAO MG24 将导致设备变砖**。

### 先决条件

1.  **OpenOCD 安装：** 对于所有 XIAO 开发板**除了 XIAO MG24**，您需要[在系统上安装 OpenOCD 并可从命令行访问（即添加到系统的 PATH 中）](#install-openocd)。

2.  **XIAO Debug Mate 固件包：** 我们准备了一个包含自定义配置文件和示例固件的包。请下载并解压。结构如下：

    *   `examples/`：包含各种 XIAO 开发板的预编译示例固件（`.elf`、`.hex`、`.bin`）和一些 XIAO 引导程序文件。
    *   `target/`：包含特定开发板（如 XIAO SAMD21 和 RA4M1）所需的自定义 OpenOCD 配置文件（`.cfg`）。
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`：用于在 macOS 和 Linux 上烧录 XIAO MG24 的独立 OpenOCD。
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`：用于在 Windows 上烧录 XIAO MG24 的独立 OpenOCD。

3.  **终端/命令提示符：** 您需要熟悉打开和使用命令行界面（例如，命令提示符、PowerShell 或终端）。

#### 命令执行策略

*   **选项 A（推荐）：从包目录运行**

    本指南中的所有命令都假设您已在解压的 `XIAO_Debug_Mate_DAPLink_Package` 文件夹的根目录中打开了终端。这是最简单的方法，因为固件和配置文件的相对路径将直接工作。

*   **选项 B（高级）：从任何目录运行**

    如果您更喜欢从自己的项目文件夹运行命令，可以使用 `-s` 标志告诉 OpenOCD 在哪里找到我们包的自定义脚本。

    *   **需要的操作：** 在您的 `openocd` 命令中添加 `-s <包文件夹路径>`。例如：

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows vs. macOS/Linux：** 在所有命令中，Windows 用户应使用 `openocd.exe` 而不是 `openocd`。我们建议在文件路径中使用正斜杠（`/`）以实现跨平台兼容性。
:::

**烧录您自己的自定义固件：**

只需将示例路径（例如，`examples/Blink_RP2040.elf`）替换为您自己的固件文件路径。

### 了解固件文件（.bin、.hex、.elf）

当您编译项目时，工具链会生成一个要上传到微控制器的文件。您通常会遇到三种格式：

*   **.bin（二进制）：** 仅包含机器代码的原始、紧凑的二进制文件。它没有关于内存地址的额外信息，因此必须告诉编程工具将其放置在何处。
*   **.hex（Intel HEX）：** 二进制代码的 ASCII 文本表示。它包括内存地址、校验和和元数据，使其比 `.bin` 更强大的格式。
*   **.elf（可执行和可链接格式）：** 最全面的格式。它包含机器代码、内存地址信息，还包含调试信息，如函数名、变量名和源代码行号。这是调试的首选格式。
*   **.bootloader（引导程序文件）：** 引导程序文件是一个专门的固件映像，驻留在微控制器内存的受保护区域中，负责促进固件烧录、设备恢复和启动任务。在 XIAO 开发板上，引导程序允许您将新的应用程序代码上传到设备（通常通过 USB），而无需专用的硬件编程器。如果设备变得无响应或主程序失败，重新烧录引导程序可以帮助恢复开发板。仅使用适用于您特定开发板型号的官方引导程序文件，因为使用不正确的文件可能会使设备无法操作，直到使用特殊工具修复。

**如何从您的项目获取这些文件：**

*   **Arduino IDE：** 编译后（`Sketch > Verify/Compile`），使用 `Sketch > Export compiled Binary`。这将在您的草图文件夹中保存一个 `.hex` 或 `.bin` 文件。
*   **PlatformIO：** 成功构建后，固件文件（`firmware.bin`、`firmware.hex`、`firmware.elf`）位于您项目的 `.pio/build/<environment_name>/` 目录中。



### 烧录 `.bin` 文件

#### 适用于 Seeed Studio XIAO SAMD21

标准 OpenOCD 包不包含 XIAO SAMD21 的配置文件。您必须从我们提供的包中手动将其复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 从 `XIAO_Debug_Mate_DAPLink_Package` 中，找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到您的 xPack OpenOCD 安装的 `target` 脚本文件夹中。路径因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为您的实际用户名和您安装的 OpenOCD 版本。
:::

**2. 烧录固件**

在系统的任意位置打开新终端并运行相应命令：

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

使用 OpenOCD 烧录 XIAO RP2040 时，强烈建议使用 `.elf` 文件而不是 `.bin` 文件。

这是因为 `.elf` 文件内部已经包含了程序的内存地址信息（链接器地址）。OpenOCD 会自动将其写入正确位置（通常是 `0x10000000`），因此您无需手动计算或猜测偏移地址。

如果您必须使用 `.bin` 文件，需要手动指定 XIAO RP2040 的 Flash 起始地址 `0x10000000`。

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

使用 OpenOCD 烧录 XIAO RP2350 时，强烈建议使用 `.elf` 文件而不是 `.bin` 文件。

这是因为 `.elf` 文件内部已经包含了程序的内存地址信息（链接器地址）。OpenOCD 会自动将其写入正确位置（通常是 `0x10000000`），因此您无需手动计算或猜测偏移地址。

如果您必须使用 `.bin` 文件，需要手动指定 XIAO RP2350 的 Flash 起始地址 `0x10000000`。

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

nRF52 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

目前，标准 OpenOCD 发行版通常缺乏对 Renesas RA 系列的内置支持，如专用驱动程序和目标配置文件。这使得使用 OpenOCD 进行烧录成为一个需要手动设置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供开箱即用的支持。

要烧录固件（例如 `Blink_RA4M1.hex`），请使用与您操作系统对应的命令。

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
烧录 `.elf` 文件时，请密切关注固件大小。如果文件超过 2MB，请确保您的设备有足够的 Flash 存储空间。否则可能导致设备变砖！
:::

#### 适用于 Seeed Studio XIAO SAMD21

由于 XIAO SAMD21 的 Flash 内存有限（256KB），通常无法烧录大于 256KB 的固件文件。Blink 示例的 `.elf` 文件已达到 658KB，无法烧录。我们建议使用更小的 `.bin` 或 `.hex` 文件。

---

#### 适用于 Seeed Studio XIAO RP2040

RP2040 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

RP2350 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

nRF52 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
有时您可能需要烧录固件两次才能生效；这是正常的。
:::

---

#### 适用于 Seeed Studio XIAO RA4M1

:::danger 请勿使设备变砖
XIAO RA4M1 禁止烧录 `.elf` 文件，这样做可能会使设备变砖！！！
:::

---

#### 适用于 Seeed Studio XIAO MG24

:::danger 请勿使设备变砖
XIAO MG24 禁止烧录 `.elf` 文件，这样做可能会使设备变砖！！！
:::


### 烧录 `.hex` 文件

#### 适用于 Seeed Studio XIAO SAMD21

标准 OpenOCD 包不包含 XIAO SAMD21 的配置文件。您必须从我们提供的包中手动将其复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 从 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到您的 xPack OpenOCD 安装的 `target` 脚本文件夹中。路径因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为您的实际用户名和安装的 OpenOCD 版本。
:::

**2. 烧录固件**

在系统的任意位置打开新终端并运行相应命令：

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

nRF52 的配置包含在标准 xPack OpenOCD 中。打开终端并运行命令。

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

目前，标准 OpenOCD 发行版通常缺乏对 Renesas RA 系列的内置支持，如专用驱动程序和目标配置文件。这使得使用 OpenOCD 进行烧录成为一个需要手动设置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供开箱即用的支持。

要烧录固件（例如 `Blink_RA4M1.hex`），请使用与您操作系统对应的命令。

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
*   `-e sector`：在编程前擦除闪存的必要扇区。
*   `-a 0x0`：指定烧录的起始地址，即 `0x00000000`。
*   `-t r7fa4m1ab`：指定目标 MCU 类型。
*   `examples\Blink_RA4M1.hex` 或 `examples/Blink_RA4M1.hex`：要烧录的固件文件路径。注意在 Windows 上使用 `\`，在 macOS/Linux 上使用 `/`。

#### 适用于 Seeed Studio XIAO MG24

此开发板需要使用包中专用的 OpenOCD 版本。您**必须**在运行命令前导航到正确的目录。

1.  **导航到正确的目录：**
    *   **在 Windows 上：** 打开命令提示符并运行：
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **在 macOS/Linux 上：** 打开终端并运行：
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **运行烧录命令：**
    固件路径现在是 `../examples/Blink_MG24.hex`，因为您在包目录内的两级深度。

    **在 Windows 上：**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **在 macOS / Linux 上：**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### 烧录引导加载程序文件

这是一个可以恢复开发板的关键操作。

#### 适用于 Seeed Studio XIAO SAMD21

标准的 OpenOCD 包不包含 XIAO SAMD21 的配置文件。您必须手动将我们提供的包中的配置文件复制到系统的 OpenOCD 安装目录中。

**1. 复制配置文件**

*   **源文件：** 从 `XIAO_Debug_Mate_DAPLink_Package` 中找到文件：`target/XIAO_SAMD21/at91samd21g18.cfg`。
*   **目标文件夹：** 将此文件复制到您的 xPack OpenOCD 安装的 `target` 脚本文件夹中。路径因操作系统而异：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
将 `YourName` 和 `xpack-openocd-0.12.0-7` 替换为您的实际用户名和安装的 OpenOCD 版本。
:::

**2. 烧录固件**

此命令使用我们包中提供的自定义 `at91samd21g18.cfg` 文件来烧录 `.bin` 引导加载程序。

*   **在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### 适用于 Seeed Studio XIAO nRF52840

此过程涉及下载引导加载程序，然后擦除芯片并烧录新文件。

此命令使用您的 OpenOCD 安装中的标准 `nrf52.cfg`。

**在 Windows 上：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**在 macOS / Linux 上：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
使用 OpenOCD 烧录引导加载程序后再烧录固件 bin 文件，固件 bin 文件无法正常运行。您需要使用 Arduino 上传程序才能使程序正常运行。

这是因为 Nordic 系列芯片（如 nRF52832）的引导加载程序在启动时需要检查特定内存地址（通常称为"引导加载程序设置页"）处的应用固件有效性信息。此"设置页"包含固件的 CRC 校验和、长度和有效性标志。

当您使用 OpenOCD 等通用编程工具直接烧录 .bin 文件时，它们只会将固件的二进制数据写入指定的应用启动地址，而不会自动生成或写入引导加载程序所需的"设置页"。因此，当设备重启时，引导加载程序无法检测到有效的设置页，并判断没有合法的应用程序，从而拒绝启动固件，通常会进入 DFU（设备固件更新）模式，等待通过 OTA 或串口进行更新。
:::

#### 适用于 Seeed Studio XIAO RA4M1

目前，标准的 OpenOCD 发行版通常缺乏对 Renesas RA 系列的内置支持，如专用驱动程序和目标配置文件。这使得使用 OpenOCD 进行烧录成为一个需要手动设置的复杂过程。

因此，我们强烈建议使用 `PyOCD`，它为 RA4M1 提供开箱即用的支持。

要烧录引导加载程序，请使用与您的操作系统对应的命令。

**在 Windows 上：**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**在 macOS / Linux 上：**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## 在 PlatformIO 上使用调试功能

首先，确保您已在 Visual Studio Code 中安装了 PlatformIO IDE 扩展。

1.  **安装 VS Code**：[下载并安装 Visual Studio Code](https://code.visualstudio.com/)。
2.  **安装 PlatformIO IDE**：打开 VS Code，导航到扩展视图（Ctrl+Shift+X），搜索 `PlatformIO IDE` 并安装。

### 创建和配置 PlatformIO 项目

1.  **启动 PlatformIO**：点击 VS Code 活动栏中的 PlatformIO 图标，选择 "Home" 打开 PIO 主页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **创建新项目**：点击 "New Project" 并为您的项目命名。
    *   **选择开发板**：搜索您打算使用的特定 XIAO 开发板。

:::note
由于 Seeed Studio 开发板托管在第三方存储库中，您的特定开发板可能默认不会出现在搜索列表中。如果发生这种情况，您可以选择一个通用开发板（或任何可用的开发板）来初始化项目，我们将在下一步中进行修正。
:::

3.  **配置 `platformio.ini`**：这是最关键的步骤。要启用 XIAO Debug Mate 的调试功能并正确识别开发板，您必须修改位于项目根目录的 `platformio.ini` 文件。

    **添加 Seeed Studio 开发板支持：**
    Seeed Studio 开发板不包含在默认的 PlatformIO 注册表中，而是在**第三方存储库**中维护。要使用它们，您必须在配置中指定存储库 URL。

    您需要将 `platform` 参数设置为以下 URL：
    `https://github.com/Seeed-Studio/platform-seeedboards`

    配置文件告诉 PlatformIO 从此自定义存储库下载开发板定义，并指定用于上传和调试的工具。XIAO Debug Mate 作为标准的 **CMSIS-DAP** 调试器运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    以下是各种 XIAO 型号的推荐 `platformio.ini` 配置。复制与您的开发板对应的内容。我们使用来自 GitHub 的平台开发版本，以确保您拥有最新的开发板支持文件。

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

对于 nRF52840，PlatformIO 提供两个开发板支持包。选择适合您项目需求的一个。

**Mbed 核心：**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit 核心：**
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

请注意，RA4M1 是一个特殊情况。它使用 `pyocd` 进行上传，但仍使用 `cmsis-dap` 进行调试。

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

保存 `platformio.ini` 文件后，PlatformIO 将在下次构建或调试时自动下载所有必要的工具链和包。

### 逐步调试

逐步执行是跟踪代码逻辑和识别错误的核心功能。

1.  **连接硬件**：将您的 XIAO 开发板插入 XIAO Debug Mate。使用 USB-C 线缆将 Debug Mate 连接到您的计算机。
2.  **开始调试**：您可以通过两种方式启动调试会话：
    *   按 `F5` 键。
    *   导航到"运行和调试"视图（活动栏中的错误图标），然后点击顶部的绿色"开始调试"箭头。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **调试控制**：PlatformIO 将编译您的代码，通过 Debug Mate 将其上传到 XIAO，并在 `main()` 或 `setup()` 的第一行暂停执行。编辑器顶部将出现调试工具栏，允许您控制程序流程：
    *   **继续（F5）**：恢复执行，直到遇到下一个断点或程序结束。
    *   **单步跳过（F10）**：执行当前行。如果该行包含函数调用，它将执行整个函数并停在下一行。
    *   **单步进入（F11）**：执行当前行。如果该行包含函数调用，调试器将进入函数并停在其第一行。
    *   **单步跳出（Shift+F11）**：如果在函数内暂停，这将执行函数的剩余部分并返回到调用它的行。
    *   **Restart (Ctrl+Shift+F5)**：终止并重启当前调试会话。
    *   **Stop (Shift+F5)**：终止调试会话。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### 断点调试

如果您希望程序在特定位置暂停，断点是完成此任务的工具。

1.  **设置断点**：在代码编辑器中，将光标移动到您希望暂停的行号左侧。会出现一个淡红色圆点。点击它来设置断点（圆点会变成亮红色）。
2.  **运行到断点**：启动调试会话（`F5`）。程序将全速运行，并在到达带有断点的行时自动暂停。
3.  **管理断点**：在"Run and Debug"侧面板中，"BREAKPOINTS"部分列出了所有活动断点。您可以从这里启用、禁用或删除它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### RAM 读写

当程序在断点处暂停时，您可以检查甚至修改变量的状态。

1.  **查看变量（读取）**：在"Run and Debug"侧面板中，"VARIABLES"部分显示当前作用域内的所有局部和全局变量及其当前值。
2.  **监视变量**：如果您想监控特定变量或表达式，请转到"WATCH"部分，点击`+`图标，并输入变量名（例如，`myVariable`或`&myVariable`来查看其内存地址）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **修改变量（写入）**：在"VARIABLES"或"WATCH"部分，您通常可以双击变量的值来输入新值。按 Enter 键应用更改。这对于在不重启程序的情况下测试不同条件非常有用。


## 故障排除

### Q1：如果我的 XIAO RA4M1 变砖了，有什么方法可以修复吗？

您可以尝试重新刷写引导加载程序来恢复设备。对于 XIAO RA4M1 型号，请参考**[此方法](#for-seeed-studio-xiao-ra4m1-2)**进行引导加载程序恢复。

在恢复引导加载程序时，如果出现错误，请尝试将 XIAO RA4M1 连接到 XIAO Debug Mate，然后连接到您的计算机。按住 XIAO RA4M1 上的 B 按钮，同时点击一次 R 按钮，然后释放 R 和 B 按钮。继续重新刷写引导加载程序。

刷写引导加载程序后，尝试使用 Arduino 等软件重新更新固件。这通常会恢复功能。如果不成功，设备可能已永久损坏且无法修复。任何涉及使用 XIAO Debug Mate 刷写固件的操作都可能需要您承担全部责任。


### Q2：如何判断设备是否已变砖？

判断 XIAO 设备是否损坏的最直接方法是连接到计算机时不显示串口连接。如果在按住 B 按钮然后插入计算机后设备仍然不显示串口连接，则设备已损坏。


### Q3：损坏的设备可以修复吗？我可以联系技术支持请求更换吗？

XIAO 设备的损坏通常是由分区或引导加载程序文件问题引起的。这通常可以通过重新刷写引导加载程序文件来解决。如果失败，目前没有其他解决方案。用户必须为自己执行此操作承担全部责任，因此请确保刷写命令和固件已经过验证且有效。

### Q4：XIAO Debug Mate 需要驱动程序吗？

XIAO Debug Mate 已在最新的计算机操作系统上进行了测试和验证，无需安装驱动程序即可正常工作。对于 Windows 计算机，我们建议使用 **Windows 11** 操作系统。在测试过程中，我们发现如果您使用 Zading 安装了驱动程序，可能会导致设备无法被识别。

### Q5：我的 XIAO Debug Mate 在 Windows 11 上持续显示红灯且无法被识别，报告错误："unable to find a matching CMSIS-DAP device."

关于您的 XIAO Debug Mate 显示红灯并在 Windows 11 上报告"unable to find a matching CMSIS-DAP device"的问题，请尝试以下故障排除步骤：

**1. 验证 USB 线缆**

首先，请确保您使用的 USB 线缆支持数据传输，而不仅仅是充电线缆。您可以通过检查设备是否出现在串口监视器软件中或是否可以看到任何设备日志来验证这一点。如果插入时计算机完全没有反应，请尝试更换线缆。

**2. 通过 PowerShell 重新安装驱动程序**

如果确认线缆正常工作，问题很可能是由错误的驱动程序安装引起的。您可以使用 PowerShell 删除冲突的驱动程序来解决此问题。请按照以下步骤操作：

1.  右键点击开始按钮并选择 **Terminal (Admin)** 或 **PowerShell (Admin)**。

2.  运行以下命令查找 CMSIS-DAP 驱动程序详细信息：

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  在输出中查找 **"Published Name"**（通常看起来像`oemXX.inf`）。

4.  运行以下命令删除并卸载驱动程序（将`{inf_name}`替换为您在上一步中找到的实际名称，例如`oem10.inf`）：

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

完成这些步骤后，请重新连接您的设备并检查是否能正确识别。

### Q6：如果我系统上显示的 OpenOCD 版本与 Wiki 截图中的不同，我应该怎么办？

如果您检查系统上的 OpenOCD 版本，输出与 Wiki 截图中显示的推荐版本不匹配，您可能有多个 OpenOCD 安装，或者您的系统默认使用不同的版本。

在 Windows 计算机上，打开**系统环境变量**并转到**系统变量**部分。编辑`Path`变量，将 Wiki 推荐的 OpenOCD 安装路径（例如，`C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`）移动到列表的最顶部。这确保推荐的 OpenOCD 版本将首先被您的系统找到和使用。进行此更改后，打开新终端并重新运行`openocd --version`以确认现在显示正确的版本。



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
