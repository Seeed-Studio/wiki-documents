---
description: Introduces how to use Himax's SDK to develop Grove Vision AI V2.
title: 使用 Himax SDK 编译模块
keywords:
- himax
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_himax_sdk
last_update:
  date: 03/17/2024
  author: guiyingzhao
---

# 使用 Himax SDK 开发 Grove Vision AI V2

这个教程旨在指导您如何使用Himax SDK开发Grove Vision AI平台，重点介绍如何有效地利用微型SD卡进行数据管理和使用PDM麦克风进行音频捕获。通过本指南，您将学会在您的AI项目中实现这些组件，使您能够轻松地在您的Grove Vision AI设备上存储大型数据集并捕获高质量的声音。

以下是本教程的目录列表。

1. [在Windows子系统Linux（WSL）上安装Ubuntu 22.04](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#install-ubuntu-2204-on-windows-subsystem-for-linux-wsl)
2. [编译环境准备](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#preparation-of-the-compilation-environment)
3. [使用Himax SDK运行录音示例](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#run-the-recording-example-using-the-himax-sdk)
4. [Himax SDK 代码分析](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#himax-sdk-code-analysis)

## 入门

在本文教程内容开始之前，您可能需要准备以下硬件。

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

如果您想使用microSD卡例程，那么您可能需要购买自己的microSD卡（目前已测试的最大容量为64GB），支持的存储卡格式为：**FAT12/FAT16/FAT32/exFAT**。

## 在Windows子系统Linux（WSL）上安装Ubuntu 22.04

:::tip 此部分仅适用于Windows计算机；如果您不使用Windows计算机，请跳过此部分，继续执行 **[编译环境准备](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#preparation-of-the-compilation-environment)**。 :::

Himax SDK需要在Linux环境中进行编译，因此如果您使用的是Windows计算机，您需要安装WSL。要在Windows子系统Linux（WSL）上安装Ubuntu 22.04，您需要按照以下一般步骤进行操作。在开始之前，请确保您正在运行兼容的Windows 10或Windows 11版本。

### 第一步：下载并安装Ubuntu 22.04.3

现在，您可以从Microsoft Store安装Ubuntu：

1. 打开Microsoft Store。
2. 搜索 **Ubuntu 22.04.3 LTS**。
3. 从搜索结果中选择Ubuntu 22.04.3 LTS版本。
4. 单击“获取”或“Install”以下载并安装Ubuntu应用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/4.png" style={{width:1000, height:'auto'}}/></div>

安装完成后，从“开始”菜单启动Ubuntu。第一次启动时，您将被要求创建用户账户和密码。按照提示进行设置。

```shell
wsl --install -d Ubuntu-22.04
```

安装完成后，从“Start（开始）”菜单启动Ubuntu。第一次启动时，您将被要求创建用户账户和密码。按照提示进行设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/5.png" style={{width:800, height:'auto'}}/></div>

1. 现在您可以使用WSL在Windows机器上使用Ubuntu。您可以访问Linux终端，安装软件包并运行Linux应用程序。

    :::note 如果您之前安装了WSL 1并且希望升级到WSL 2，则需要遵循一些额外步骤，包括安装WSL 2 Linux内核更新包并设置您的现有发行版使用WSL 2。您可以在[官方微软文档](https://learn.microsoft.com/en-us/windows/wsl/install)中找到这些额外步骤的说明。 :::

    请记住查看[官方微软文档](https://learn.microsoft.com/en-us/windows/wsl/install)以获取最新的说明和故障排除提示。

    ## 编译环境准备

    ### 步骤2. 安装 Microsoft VSCode

    Visual Studio Code (VSCode) 是由微软开发的免费开源代码编辑器，适用于Windows、macOS和Linux。以下我将逐步指导您在每个平台上安装VSCode的步骤。

    **Windows**:

    1. **下载安装程序：**
       - 访问[官方Visual Studio Code下载页面](https://code.visualstudio.com/Download)。
       - 单击Windows安装程序，下载 `.exe` 文件。
    2. **运行安装程序：**
       - 下载完成后，运行安装程序（`VSCodeSetup-x.y.z.exe`，其中x.y.z为版本号）。
       - 按照安装向导中的提示进行操作。您可以接受默认选择，但您可能想要勾选将VSCode添加到您的PATH并创建桌面图标以便轻松访问。
    3. **完成安装：**
       - 单击“完成”以完成安装。VSCode应该会自动打开。
    4. **启动VSCode：**
       - 您可以通过双击桌面图标或在“开始”菜单中搜索来启动VSCode。

    **macOS**:

    1. **下载安装程序：**
       - 前往[官方Visual Studio Code下载页面](https://code.visualstudio.com/Download)。
       - 单击macOS版本，下载 `.zip` 文件。
    2. **安装应用程序：**
       - 下载完成后，打开 `.zip` 文件以提取应用程序。
       - 将Visual Studio Code拖放到“应用程序”文件夹中。这将使其在启动器中可用。
    3. **启动VSCode：**
       - 打开Launchpad，单击Visual Studio Code图标。
       - 第一次打开VSCode时，您可能会收到警告，因为它是从互联网下载的。单击“打开”继续。

    **Linux**:

    您可以通过snap包或通过您的发行版的软件包存储库安装VSCode。以下是通过命令行在Ubuntu上的示例：

    1、**更新软件包索引（Ubuntu/Debian-based发行版）：**

    ```sh
    sudo apt update
    ```

    2、**安装依赖项（如果尚未安装）：**

    ```sh
    sudo apt install software-properties-common apt-transport-https wget
    ```

    3、**添加Microsoft的GPG密钥和仓库：**

    ```sh
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    ```

    4、**安装 VSCode:**

    ```sh
    sudo apt update
    sudo apt install code
    ```

    5、**启动 VSCode:**

    - 您可以在应用程序菜单中搜索VSCode启动，或在终端中运行 `code`。

    对于支持snap包的发行版：

```sh
sudo snap install --classic code
```

:::note 请记住，安装命令可能会因您的Linux发行版而略有不同，因此您应该查阅官方文档或特定Linux版本的软件包管理说明。 :::

### 步骤3. 安装Python

安装Python 3是一个简单直接的过程，具体步骤可能因您的操作系统而异。以下，我将为您介绍Windows、macOS和Linux的安装步骤。

**Windows**:

1. **下载Python:**
   - 前往官方Python网站[python.org](https://www.python.org/downloads/windows/)。
   - 单击“Download Python”以获取最新的Windows版本。
   - 选择您想要的版本的可执行安装程序。
2. **运行安装程序:**
   - 启动安装程序。
   - 确保在安装程序窗口底部选中“将Python 3.x添加到PATH”复选框，以确保Python被添加到您的环境变量中。
   - 单击“立即安装”。
3. **验证安装:**

- 打开命令提示符并输入以下命令来验证Python是否已正确安装：

```
 python --version
```

 您应该看到您安装的Python版本。

**macOS**:

1. **下载Python:**
   - 访问官方Python网站[python.org](https://www.python.org/downloads/macos/)。
   - 单击“Download Python”以获取最新的macOS版本。
   - 下载macOS 64位安装程序。
2. **运行安装程序:**
   - 打开下载的安装包并按照说明安装Python。
3. **验证安装:**
   - 打开终端并输入以下命令：

```sh
python3 --version
```

系统应显示已安装的Python版本。

**Linux**:

Python 3通常预先安装在许多Linux发行版中。要检查Python 3是否已安装并验证版本，请打开终端并输入：

```sh
python3 --version
```

如果Python 3未安装，或者您想安装不同版本，您可以使用您的Linux发行版附带的软件包管理器。

例如，在Ubuntu或基于Debian的系统上，您可以按照以下步骤安装Python 3：

1. **更新软件包列表：**
   
   ```sh
   sudo apt update
   ```
   
2. **安装Python 3:**
   
   ```sh
   sudo apt install python3
   ```
   
3. **验证安装：**
   
   ```sh
   python3 --version
   ```

在基于Fedora或Red Hat的系统上，您将使用 `dnf`：

```sh
sudo dnf install python3
```

在Arch Linux或Manjaro上：

```sh
sudo pacman -S python
```

### 步骤4. 安装python-pip

- **安装`pip`**:

  `pip` 是Python的包安装程序。您可以使用它来从Python包索引和其他索引安装软件包。在Windows和macOS上，`pip` 包含在Python安装程序中。在Linux上，您可能需要单独安装它：

  对于Ubuntu或基于Debian的系统：

  ```sh
  sudo apt install python3-pip
  ```

  对于 Fedora:
  ```sh
  sudo dnf install python3-pip
  ```

  对于Arch Linux:
  ```sh
  sudo pacman -S python-pip
  ```

- **验证 `pip` 安装：**

  通过运行以下命令检查 `pip` 的安装情况：

  ```sh
  pip3 --version
  ```

- **虚拟环境：**

  使用虚拟环境来管理Python项目的依赖项是一种良好的做法。您可以使用以下命令创建一个虚拟环境：

  ```sh
  python3 -m venv /path/to/new/virtual/environment
  ```

请记住将 `/path/to/new/virtual/environment` 替换为您想要放置新虚拟环境的目录。

通过按照这些步骤，您应该能够在您的系统上安装Python 3和 `pip` 并开始进行Python开发。

### 步骤5. 安装make编译环境

将项目存储库克隆到您想要保存的位置。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载项目</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


```sh
cd /mnt/c/Users/mengd/Desktop/
git clone https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic.git
```

然后，请在VSCode中打开项目，并通过在VSCode的终端中输入命令 `wsl` 进入Linux环境。（如果您在MacOS或Linux上，则不需要此命令）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/6.png" style={{width:1000, height:'auto'}}/></div>

接下来，请在WSL环境（Windows）或Linux环境中运行以下命令来安装编译环境。

**安装先决条件**

首先，您需要安装 `make`，这是一个基本的构建自动化工具。

```sh
sudo apt install make
```

在提示输入密码时，请键入您的密码以继续安装。

**下载Arm GNU工具链**

您将需要Arm GNU工具链来编译ARM项目。要下载它，请转到您的主目录并使用 `wget` 下载该软件包。请选择一个适合的地址进行安装，您将能够找到它的位置。在这里，我将其安装在项目文件夹的上级目录。

```sh
cd /mnt/c/Users/mengd/Desktop/
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

此命令将获取指定版本的ARM工具链。

**提取工具链存档**

下载工具链后，您需要将其解压缩。在您的终端中，执行以下操作：

```sh
tar -xvf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

这将创建一个包含所有必要工具链文件的目录。

**更新您的PATH**

最后，为了从任何目录使用工具链，您应该将提取文件的bin目录添加到您系统的PATH中。运行以下命令：

```sh
export PATH="/mnt/c/Users/mengd/Desktop/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"
```

为了使更改永久生效，您应该将导出命令添加到您的 `~/.bashrc`、`~/.zshrc` 或您首选shell的配置文件中。

```sh
echo 'export PATH="$HOME/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"' >> ~/.bashrc
```

然后，通过对配置文件进行源化或关闭并重新打开终端来应用更改：

```sh
source ~/.bashrc
```

**验证**

要验证一切是否设置正确，您可以输入：

```sh
echo $PATH | tr ':' '\n' | grep gnu
arm-none-eabi-gcc --version
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/7.png" style={{width:1000, height:'auto'}}/></div>

这应该显示ARM GCC编译器的版本，表明它已经正确安装并且可以从系统的任何位置访问。

现在，您的环境已经准备好进行ARM开发。

:::note 请不要使用 `apt install` 来安装arm编译器，因为该版本太旧，可能无法编译此项目。请确保您使用的版本与屏幕截图上的版本13.2相同。 :::

## 使用Himax SDK运行录音示例

### 步骤6. 编译和上传录音项目

到目前为止，我们已经完成了基本的环境配置，然后我们可以编译项目并上传它。项目文件夹命名为 **EPII_CM55M_APP_S**。

继续在wsl或Linux环境中执行以下命令来编译项目。

```sh
cd Seeed_Grove_Vision_AI_V2_SD-Mic/EPII_CM55M_APP_S
make clean
```

然后，请打开 **EPII_CM55M_APP_S** 文件夹中的 **makefile** 文件，并在代码的[line 47](https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic/blob/3de76e628b74bdb075ea27d6fd98b89d6c2f80bb/EPII_CM55M_APP_S/makefile#L47)中更改 **GNU_TOOLPATH** 的路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/8.png" style={{width:1000, height:'auto'}}/></div>

这个路径需要填写为Arm GNU工具链解压后的 `bin` 文件夹的绝对路径，该文件夹位于[步骤5](https://chat.openai.com/c/39651f87-794b-406a-8ac8-e5a5c8f209f7#step-5-install-the-make-compilation-environment)中解压的工具链文件夹中。

然后保存文件。执行以下命令编译项目。

```sh
make
```

如果编译顺利，您将看到以下编译结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/1.png" style={{width:1000, height:'auto'}}/></div>

然后，我们需要将 `.elf` 文件转换为 `.img` 文件，以便刷写到Grove Vision AI V2上。我们只需要执行脚本 `output.sh`。

```sh
./output.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/2.png" style={{width:1000, height:'auto'}}/></div>

通过执行 flasher.py 脚本，我们可以将生成的固件刷写到设备上。

:::note 

如果您使用的是Windows计算机，请创建一个新的终端，并确保在 git bash 环境中执行以下命令。 

:::

```sh
pip install xmodem --user
cd ..
python flasher.py we2_image_gen_local/output_case1_sec_wlcsp/output.img COM3
```

命令中的 `COM3` 表示设备的端口号，请根据您的Grove Vision AI V2实际设备端口号进行更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/3.png" style={{width:800, height:'auto'}}/></div>

###  步骤7. 录制和保存

然后，我们可以开始执行录制命令，借助Python的录制程序。

```
pip install playsound --user
python getdate.py
```

该代码记录约4秒钟的音频并将其保存到名为 `record.wav` 的文件夹中，该文件夹位于 `Seeed_Grove_Vision_AI_V2_SD-Mic` 中。

## Himax SDK代码分析

为了让开发者更容易地使用Himax的SDK在Grove Vision AI V2上开发硬件，本节将专注于SDK中的麦克风和SD代码。此项目的主要程序代码路径如下：

```
EPII_CM55M_APP_S\app\scenario_app\grove_vision_ai\grove_vision_ai.c
```

提供的代码配置并使用脉冲密度调制（PDM）接口来捕获嵌入式系统中的音频数据，并使用直接内存访问（DMA）传输数据。它包含了几个外部库和设备驱动程序，涉及文件系统操作和GPIO控制。

### 包含头文件和宏定义

```c
#include <stdio.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
```
这个部分包含了标准C库头文件，用于输入/输出、断言、布尔数据类型、整数类型、字符串操作和标准库功能。

```c
#ifdef TRUSTZONE_SEC
// ...
#endif
```
这个条件编译块包含了TrustZone安全相关的配置代码，只有在定义了 `TRUSTZONE_SEC` 宏的情况下才会被编译。该部分通常包括安全功能，如内存保护和安全调用。

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
这些头文件包括特定于硬件和板级的定义和接口，例如GPIO、SPI和PDM的驱动程序和配置。

### PDM音频缓冲区和回调标志定义

```c
#define quarter_second_mono_bytes 8000
#define blk_num 20
int16_t audio_buf[blk_num * quarter_second_mono_bytes / 2];
volatile bool rx_cb_flag;
```
定义音频缓冲区的大小和块的数量，声明一个整数数组作为音频缓冲区，以及一个标志变量`rx_cb_flag`来表示DMA接收是否完成。 

### PDM DMA接收回调函数

```c
void app_pdm_dma_rx_cb()
{
    // ...
}
```
定义在完成PDM DMA接收时调用的回调函数。该函数包括缓存失效，以确保数据是通过DMA更新从内存中读取的。 

### PDM配置功能

```c
int app_pdm_setting()
{
    // ...
}
```
设置采样率、DMA通道、时钟源等PDM设备配置参数，将回调函数与PDM设备关联。 

### 主函数

```c
int app_main(void)
{
    // ...
}
```
main函数执行设备初始化和配置:

- 设置GPIO引脚复用并初始化GPIO状态。
- 初始化PDM并设置DMA传输。
- 配置FatFS文件系统进行文件操作。
- 通过GPIO读取输入状态，控制输出状态。
- 使用循环检查DMA接收标志和捕获音频数据。
- 输出数据到调试控制台，完成后停止PDM。

### PDM麦克风部分 

该代码包括使用麦克风，这是通过配置和使用脉冲密度调制(PDM)接口实现的。 

**PDM 配置**

```c
int app_pdm_setting()
{
    // PDM configuration settings
    // ...
}
```
`app_pdm_setting`函数设置PDM设备配置参数。这些参数，如采样率、DMA (Direct Memory Access)通道和时钟源，对从麦克风捕获数据至关重要。 

**PDM初始化和DMA传输设置**

```c
if (hx_drv_pdm_init(&pdm_dev_info) != PDM_NO_ERROR)
    return -1;

hx_drv_pdm_dma_lli_transfer((void *)audio_buf, blk_num, quarter_second_mono_bytes, 0);
```
这部分代码初始化PDM设备并设置DMA传输。`hx_drv_pdm_dma_lli_transfer`函数调用启动DMA传输过程，该过程将从连接的麦克风捕获音频数据并将其存储在预定义的缓冲区`audio_buf`中。 

**PDM DMA接收回调函数**

```c
void app_pdm_dma_rx_cb()
{
    // Callback function invoked when PDM DMA reception is complete
    // ...
}
```

`app_pdm_dma_rx_cb`是一个回调函数，在PDM接口通过DMA完成接收音频数据后被调用。在这个函数中，接收到的音频数据(存储在`audio_buf`缓冲区中)将被输出以供进一步处理。 

从所描述的代码中，我们可以看到该程序主要涉及配置和使用麦克风来捕获音频数据。 

### microSD部分 

该代码包括通过使用FatFS文件系统库与microSD卡相关的操作。

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

本节尝试挂载microSD卡上的文件系统，该文件系统是对microSD卡进行读写操作所必需的。

```c
FIL file;
res = f_open(&file, _T("/test.txt"), FA_CREATE_ALWAYS | FA_WRITE | FA_READ);
// ...
```

这部分代码试图在挂载的文件系统上打开(如果不存在，则创建)一个名为“test.txt”的文件，如果挂载成功，该文件将在microSD卡上。

```c
res = f_write(&file, buffer, strlen(buffer), NULL);
// ...
```

这里，代码试图向之前打开的文件写入数据。该操作将数据保存到microSD卡。

```c
res = f_read(&file, buffer, 512, NULL);
// ...
```

本节从“test.txt”文件中读取数据，并将其存储在缓冲区中。该操作将从microSD卡中检索数据。 

总而言之，该代码包括挂载microSD卡、创建或打开文件、向文件写入数据和从文件读取数据的功能，表明microSD卡在此应用程序中用于存储。 

:::提示 
代码`grove_vision_ai.c`已经为使用PDM microphone和存储卡. 提供了更完整的配置。然而，由于microphone输出是通过SDK中的串口，为了保存音频文件，你需要使用`getdata.py`读取串口，然后转录它。另一方面，microSD卡不需要单独的Python程序来完成存储任务。 
::: 

# 资源 

- **[GITHUB]** [Grove Vision AI V2的Himax存储库](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2) 


##  技术支持和产品讨论 

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

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





