---
description: 介绍如何使用 Himax 的 SDK 开发 Grove Vision AI V2。
title: 使用 Himax SDK 开发 Grove Vision AI V2
keywords:
- himax
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_himax_sdk
last_update:
  date: 01/17/2023
  author: Citric
---

# 使用 Himax SDK 开发 Grove Vision AI V2

本教程旨在指导您使用 Himax SDK 开发 Grove Vision AI 平台，重点介绍如何有效利用 microSD 卡进行数据管理以及使用 PDM 麦克风进行音频捕获。通过本指南，您将学会在 AI 项目中实现这些组件，从而能够轻松地在 Grove Vision AI 设备上存储大数据集并捕获高质量声音。

以下是本教程的目录列表。

1. [在 Windows 子系统 Linux (WSL) 上安装 Ubuntu 22.04](#install-ubuntu-2204-on-windows-subsystem-for-linux-wsl)
2. [编译环境准备](#preparation-of-the-compilation-environment)
3. [使用 Himax SDK 运行录音示例](#run-the-recording-example-using-the-himax-sdk)
4. [Himax SDK 代码分析](#himax-sdk-code-analysis)

## 入门

在开始本教程内容之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

如果您希望使用 microSD 卡相关功能，则需要自行购买 microSD 卡（目前测试的最大容量为 64GB），支持的存储卡格式为：**FAT12/FAT16/FAT32/exFAT**。

## 在 Windows 子系统 Linux (WSL) 上安装 Ubuntu 22.04

:::tip
本节仅适用于 Windows 电脑；如果您未使用 Windows 电脑，请跳过本节并继续阅读 **[编译环境准备](#preparation-of-the-compilation-environment)**。
:::

Himax SDK 需要在 Linux 环境中编译，因此如果您使用的是 Windows 电脑，则需要安装 WSL。在 Windows 子系统 Linux (WSL) 上安装 Ubuntu 22.04，您需要按照以下步骤操作。在开始之前，请确保您运行的是兼容的 Windows 10 或 Windows 11 版本。

### 步骤 1. 下载并安装 Ubuntu 22.04.3

现在，您可以通过 Microsoft Store 安装 Ubuntu：

打开 Microsoft Store。搜索 **Ubuntu 22.04.3 LTS**。从搜索结果中选择 Ubuntu 22.04.3 LTS 版本。点击“获取”或“安装”以下载并安装 Ubuntu 应用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/4.png" style={{width:1000, height:'auto'}}/></div>

或者，您可以通过命令行安装 Ubuntu。打开 PowerShell 或命令提示符，运行以下命令：

```shell
wsl --install -d Ubuntu-22.04
```

安装完成后，从开始菜单启动 Ubuntu。首次启动时，系统会要求您创建一个用户账户和密码。按照提示完成设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/5.png" style={{width:800, height:'auto'}}/></div>

现在，您可以在 Windows 机器上通过 WSL 使用 Ubuntu。您可以访问 Linux 终端、安装软件包以及运行 Linux 应用程序。

:::note
如果您之前安装过 WSL 1，并希望升级到 WSL 2，则需要执行一些额外步骤，包括安装 WSL 2 Linux 内核更新包并将现有的发行版设置为使用 WSL 2。您可以在 [微软官方文档](https://learn.microsoft.com/en-us/windows/wsl/install) 中找到这些额外步骤的说明。
:::

请记得查看 [微软官方文档](https://learn.microsoft.com/en-us/windows/wsl/install) 以获取最新的安装说明和故障排除提示。

## 编译环境准备

### 第 2 步：安装 Microsoft VSCode

Visual Studio Code (VSCode) 是由 Microsoft 开发的一款免费开源代码编辑器，可用于 Windows、macOS 和 Linux。以下是针对这些平台安装 VSCode 的步骤指南。

**Windows**：

1. **下载安装程序：**
   - 访问 [Visual Studio Code 官方下载页面](https://code.visualstudio.com/Download)。
   - 点击 Windows 安装程序以下载 `.exe` 文件。

2. **运行安装程序：**
   - 下载完成后，运行安装程序（`VSCodeSetup-x.y.z.exe`，其中 x.y.z 是版本号）。
   - 按照安装向导中的提示操作。您可以接受默认选项，但建议勾选将 VSCode 添加到 PATH 和创建桌面图标以便于访问。

3. **完成安装：**
   - 点击“完成”以完成安装。VSCode 应会自动打开。

4. **启动 VSCode：**
   - 您可以通过双击桌面图标或在开始菜单中搜索 VSCode 来启动它。

**macOS**：

1. **下载安装程序：**
   - 访问 [Visual Studio Code 官方下载页面](https://code.visualstudio.com/Download)。
   - 点击 macOS 版本以下载 `.zip` 文件。

2. **安装应用程序：**
   - 下载完成后，打开 `.zip` 文件以解压应用程序。
   - 将 Visual Studio Code 拖放到“应用程序”文件夹中。这将使其在启动器中可用。

3. **启动 VSCode：**
   - 打开 Launchpad，然后点击 Visual Studio Code 图标。
   - 第一次打开 VSCode 时，可能会收到警告提示，因为它是从互联网下载的。点击“打开”继续。

**Linux**：

您可以通过 snap 包或使用您的发行版的包管理器安装 VSCode。以下是通过命令行在 Ubuntu 上安装的示例：

1. **更新包索引（适用于 Ubuntu/Debian 系发行版）：**
    ```sh
    sudo apt update
    ```

2. **安装依赖项（如果尚未安装）：**
    ```sh
    sudo apt install software-properties-common apt-transport-https wget
    ```

3. **添加 Microsoft 的 GPG 密钥和软件源：**
    ```sh
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    ```

4. **安装 VSCode：**
    ```sh
    sudo apt update
    sudo apt install code
    ```

5. **启动 VSCode：**
   - 您可以通过在应用菜单中搜索 VSCode 或在终端中运行 `code` 来启动它。

对于支持 snap 包的发行版：

```sh
sudo snap install --classic code
```

:::note
请注意，安装命令可能会因您的 Linux 发行版而略有不同，因此建议您查阅官方文档或针对您的 Linux 版本的包管理说明。
:::

### 第 3 步：安装 Python

安装 Python 3 是一个简单的过程，根据您的操作系统可能会有所不同。以下是针对 Windows、macOS 和 Linux 的安装步骤指南。

**Windows**：

1. **下载 Python：**
   - 访问 Python 官方网站 [python.org](https://www.python.org/downloads/windows/)。
   - 点击“下载 Python”以获取最新的 Windows 版本。
   - 选择您需要的版本的可执行安装程序。

2. **运行安装程序：**
   - 启动安装程序。
   - 确保勾选安装窗口底部的“Add Python 3.x to PATH”选项，以确保将 Python 添加到环境变量中。
   - 点击“立即安装”。

3. **验证安装：**
   - 打开命令提示符，输入以下命令以验证 Python 是否正确安装：

    ```
    python --version
    ```

    您应该看到您安装的 Python 版本。

**macOS**：

1. **下载 Python：**
   - 访问 Python 官方网站 [python.org](https://www.python.org/downloads/macos/)。
   - 点击“下载 Python”以获取最新的 macOS 版本。
   - 下载 macOS 64 位安装程序。

2. **运行安装程序：**
   - 打开下载的安装包并按照说明安装 Python。

3. **验证安装：**
    - 打开终端并输入以下命令：

    ```sh
    python3 --version
    ```

    系统应显示已安装的 Python 版本。

**Linux**：

许多 Linux 发行版通常预装了 Python 3。要检查是否已安装 Python 3 并验证版本，请打开终端并输入：

```sh
python3 --version
```

如果未安装 Python 3 或您希望安装其他版本，可以使用您的 Linux 发行版附带的包管理器。

例如，在 Ubuntu 或 Debian 系统上，您可以按照以下步骤安装 Python 3：

1. **更新包列表：**
   ```sh
   sudo apt update
   ```

2. **安装 Python 3：**
   ```sh
   sudo apt install python3
   ```

3. **验证安装：**
   ```sh
   python3 --version
   ```

对于 Fedora 或 Red Hat 系统，您可以使用 `dnf`：

```sh
sudo dnf install python3
```

对于 Arch Linux 或 Manjaro：

```sh
sudo pacman -S python
```

### 第 4 步：安装 python-pip

- **安装 `pip`**：

  `pip` 是 Python 的包安装工具。您可以使用它从 Python 包索引或其他索引安装包。在 Windows 和 macOS 上，`pip` 已包含在 Python 安装程序中。在 Linux 上，您可能需要单独安装：

  对于 Ubuntu 或 Debian 系统：
  ```sh
  sudo apt install python3-pip
  ```

  对于 Fedora：
  ```sh
  sudo dnf install python3-pip
  ```

  对于 Arch Linux：
  ```sh
  sudo pacman -S python-pip
  ```

- **验证 `pip` 安装：**

  运行以下命令检查 pip 是否安装成功：
  ```sh
  pip3 --version
  ```

- **虚拟环境：**

  为了管理 Python 项目的依赖项，建议使用虚拟环境。您可以使用以下命令创建虚拟环境：

  ```sh
  python3 -m venv /path/to/new/virtual/environment
  ```

请将 `/path/to/new/virtual/environment` 替换为您希望放置新虚拟环境的目录。

通过遵循这些步骤，您应该能够在系统上安装 Python 3 和 `pip`，并开始 Python 开发。

### 第五步：安装 make 编译环境

将项目仓库克隆到您希望保存的位置。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载项目</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```sh
cd /mnt/c/Users/mengd/Desktop/
git clone https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic.git
```

然后，请在 VSCode 中打开项目，并通过在 VSCode 的终端中输入命令 `wsl` 进入 Linux 环境。（如果您使用的是 MacOS 或 Linux，则无需此命令）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/6.png" style={{width:1000, height:'auto'}}/></div>

接下来，请在 WSL 环境（Windows）或 Linux 环境中运行以下命令以安装编译环境。

**安装必要组件**

首先，您需要安装 `make`，这是一个重要的构建自动化工具。

```sh
sudo apt install make
```

当系统提示输入密码时，请输入以继续安装。

**下载 Arm GNU 工具链**

您需要 Arm GNU 工具链来编译 ARM 项目。要下载它，请导航到您的主目录并使用 `wget` 下载包。请选择一个合适的地址进行安装，您将能够找到它的位置。在这里，我将其安装在项目文件夹的上级目录。

```sh
cd /mnt/c/Users/mengd/Desktop/
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

此命令将获取指定版本的 ARM 工具链。

**解压工具链压缩包**

下载工具链后，您需要解压它。在终端中执行以下命令：

```sh
tar -xvf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

这将创建一个包含所有必要工具链文件的目录。

**更新 PATH 环境变量**

最后，为了能够从任何目录使用工具链，您需要将解压文件的 bin 目录添加到系统的 PATH 中。运行以下命令：

```sh
export PATH="/mnt/c/Users/mengd/Desktop/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"
```

为了使更改永久生效，您应该将 export 命令添加到您的 `~/.bashrc`、`~/.zshrc` 或您首选 shell 的配置文件中。

```sh
echo 'export PATH="$HOME/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"' >> ~/.bashrc
```

之后，通过重新加载配置文件或关闭并重新打开终端应用更改：

```sh
source ~/.bashrc
```

**验证安装**

要验证一切是否正确设置，您可以输入以下命令：

```sh
echo $PATH | tr ':' '\n' | grep gnu
arm-none-eabi-gcc --version
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/7.png" style={{width:1000, height:'auto'}}/></div>

这应该显示 ARM GCC 编译器的版本，表明它已正确安装并可以从系统的任何位置访问。

现在，您的环境已准备好进行 ARM 开发。

:::note
请不要使用 `apt install` 来安装 ARM 编译器，该版本过旧，可能无法编译此项目。请检查您使用的版本是否与截图中的 13.2 版本一致。
:::

## 使用 Himax SDK 运行录音示例

### 第 6 步：编译并上传录音项目

到目前为止，我们已经完成了基本环境配置，接下来可以编译项目并上传。项目文件夹名为 **EPII_CM55M_APP_S**。

在 wsl 或 Linux 环境中执行以下命令继续编译项目：

```sh
cd Seeed_Grove_Vision_AI_V2_SD-Mic/EPII_CM55M_APP_S
make clean
```

然后，请打开 **EPII_CM55M_APP_S** 文件夹中的 **makefile** 文件，并修改代码 [第 47 行](https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic/blob/3de76e628b74bdb075ea27d6fd98b89d6c2f80bb/EPII_CM55M_APP_S/makefile#L47) 的 **GNU_TOOLPATH** 路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/8.png" style={{width:1000, height:'auto'}}/></div>

此路径需要填写为您在 [第 5 步](#step-5-install-the-make-compilation-environment) 中解压的 Arm GNU Toolchain 的 `bin` 文件夹的绝对路径。

保存文件后，执行以下命令编译项目：

```sh
make
```

如果编译成功，您将看到以下编译结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/1.png" style={{width:1000, height:'auto'}}/></div>

接下来，我们需要将 `.elf` 文件转换为 `.img` 文件，以便烧录到 Grove Vision AI V2。只需执行脚本 `output.sh`：

```sh
./output.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/2.png" style={{width:1000, height:'auto'}}/></div>

通过执行 flasher.py 脚本，我们可以将生成的固件烧录到设备上。

:::note
如果您使用的是 Windows 电脑，请新建一个终端，并确保在 git bash 环境中执行以下命令。
:::

```sh
pip install xmodem --user
cd ..
python flasher.py we2_image_gen_local/output_case1_sec_wlcsp/output.img COM3
```

命令中的 `COM3` 表示设备的端口号，请根据实际设备的端口号修改为您的 Grove Vision AI V2 的端口号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/3.png" style={{width:800, height:'auto'}}/></div>

### 第 7 步：录音并保存

接下来，我们可以借助 Python 的录音程序开始执行录音命令。

```
pip install playsound --user
python getdate.py
```

代码会录制一段约 4 秒的音频，并将其保存到名为 `record.wav` 的文件夹中，路径为 `Seeed_Grove_Vision_AI_V2_SD-Mic`。

## Himax SDK 代码分析

为了方便开发者使用 Himax 的 SDK 在 Grove Vision AI V2 上开发硬件，本节将重点介绍 SDK 中的麦克风和 SD 代码。此项目的主程序代码路径如下：

```
EPII_CM55M_APP_S\app\scenario_app\grove_vision_ai\grove_vision_ai.c
```

提供的代码配置并使用脉冲密度调制（PDM）接口在嵌入式系统中捕获音频数据，并通过直接内存访问（DMA）传输数据。代码集成了多个外部库和设备驱动程序，涉及文件系统操作和 GPIO 控制。

### 引入头文件和宏定义

```c
#include <stdio.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
```
此部分引入了标准 C 库头文件，用于输入/输出、断言、布尔数据类型、整数类型、字符串操作和标准库功能。

```c
#ifdef TRUSTZONE_SEC
// ...
#endif
```
此条件编译块包含与 TrustZone 安全相关的配置代码，仅在定义了 `TRUSTZONE_SEC` 宏时编译。此部分通常包括安全功能，例如内存保护和安全调用。

### 设备和板级支持包头文件

```c
#include "WE2_device.h"
#include "WE2_device_addr.h"
#include "board.h"
#include "hx_drv_scu.h"
#include "hx_drv_spi.h"
#include "hx_drv_gpio.h"
#include "WE2_core.h"
#include "WE2_debug.h"
#include "mmc_we2.h"
#include "hx_drv_swreg_aon.h"
#include "hx_drv_pdm_rx.h"
```
这些头文件包含硬件特定和板级定义与接口，例如 GPIO、SPI 和 PDM 的驱动程序和配置。

### PDM 音频缓冲区和回调标志定义

```c
#define quarter_second_mono_bytes 8000
#define blk_num 20
int16_t audio_buf[blk_num * quarter_second_mono_bytes / 2];
volatile bool rx_cb_flag;
```
定义了音频缓冲区的大小和块数，声明了一个整数数组作为音频缓冲区，以及一个标志变量 `rx_cb_flag`，用于指示 DMA 接收是否完成。

### PDM DMA 接收回调函数

```c
void app_pdm_dma_rx_cb()
{
    // ...
}
```
定义了一个回调函数，该函数将在 PDM DMA 接收完成时调用。函数包括缓存失效操作，以确保从 DMA 更新的内存中读取数据。

### PDM 配置函数

```c
int app_pdm_setting()
{
    // ...
}
```
设置 PDM 设备的配置参数，例如采样率、DMA 通道、时钟源等，并将回调函数与 PDM 设备关联。

### 主函数

```c
int app_main(void)
{
    // ...
}
```
主函数执行设备初始化和配置：

- 设置 GPIO 引脚复用并初始化 GPIO 状态。
- 初始化 PDM 并设置 DMA 传输。
- 配置 FatFS 文件系统以进行文件操作。
- 通过 GPIO 读取输入状态并控制输出状态。
- 使用循环检查 DMA 接收标志并捕获音频数据。
- 将数据输出到调试控制台，并在完成后停止 PDM。

### PDM 麦克风部分

代码包括麦克风的使用，通过配置和使用脉冲密度调制（PDM）接口实现。

**PDM 配置**

```c
int app_pdm_setting()
{
    // PDM 配置设置
    // ...
}
```
此函数 `app_pdm_setting` 设置 PDM 设备的配置参数。这些参数（如采样率、DMA（直接内存访问）通道和时钟源）对于从麦克风捕获数据至关重要。

**PDM 初始化和 DMA 传输设置**

```c
if (hx_drv_pdm_init(&pdm_dev_info) != PDM_NO_ERROR)
    return -1;

hx_drv_pdm_dma_lli_transfer((void *)audio_buf, blk_num, quarter_second_mono_bytes, 0);
```
这段代码初始化了 PDM 设备并设置了 DMA 传输。`hx_drv_pdm_dma_lli_transfer` 函数调用启动了 DMA 传输过程，该过程将从连接的麦克风捕获音频数据并将其存储在预定义的缓冲区 `audio_buf` 中。

**PDM DMA 接收回调函数**

```c
void app_pdm_dma_rx_cb()
{
    // 当 PDM DMA 接收完成时调用的回调函数
    // ...
}
```

`app_pdm_dma_rx_cb` 是一个回调函数，当 PDM 接口通过 DMA 完成音频数据接收时会调用该函数。在此函数中，接收到的音频数据（存储在 `audio_buf` 缓冲区中）将被输出以供进一步处理。

从上述代码可以看出，该程序主要涉及配置和使用麦克风以捕获音频数据。

### microSD 部分

代码通过使用 FatFS 文件系统库包含了与 microSD 卡相关的操作。

```c
FATFS fs;
TCHAR drv[3] = {_T('0'), _T(':'), _T('0')};
FRESULT res = f_mount(&fs, drv, 1);
bool mount = false;
if (res != FR_OK)
{
    mount = false;
    xprintf("Mount Failed: %d\n", res);
}
else
{
    mount = true;
    xprintf("Mount Success\n");
}
```

这部分代码尝试挂载位于 microSD 卡上的文件系统，这是执行卡上的读写操作所必需的。

```c
FIL file;
res = f_open(&file, _T("/test.txt"), FA_CREATE_ALWAYS | FA_WRITE | FA_READ);
// ...
```

这部分代码尝试打开（如果不存在则创建）名为 "test.txt" 的文件，该文件位于已挂载的文件系统上，即 microSD 卡上（如果挂载成功）。

```c
res = f_write(&file, buffer, strlen(buffer), NULL);
// ...
```

这里，代码尝试将数据写入之前打开的文件。此操作会将数据保存到 microSD 卡上。

```c
res = f_read(&file, buffer, 512, NULL);
// ...
```

这部分代码从 "test.txt" 文件中读取数据并将其存储到缓冲区中。此操作会从 microSD 卡中检索数据。

总之，代码包含挂载 microSD 卡、创建或打开文件、向文件写入数据以及从文件读取数据的功能，表明 microSD 卡在此应用中用于存储。

:::tip
代码 `grove_vision_ai.c` 已经对 PDM 麦克风和存储卡的使用进行了更完整的配置。然而，由于 SDK 中麦克风的输出是通过串口进行的，为了保存音频文件，需要使用 `getdata.py` 来读取串口并进行转录。而 microSD 卡则无需额外的 Python 程序即可完成存储任务。
:::

## 资源

- **[GITHUB]** [Himax Grove Vision AI V2 仓库](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>