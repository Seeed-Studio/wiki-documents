---
description: 介绍如何安装和配置 IDF 环境。
title: 使用 Espressif ESP-IDF 在 XIAO 上开发
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_idf
last_update:
  date: 05/09/2024
  author: Citric
---

# 使用 Espressif ESP-IDF 在 XIAO 上开发

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第一个教程。如果您想开始使用 XIAO ESP32 系列的 Matter 设备开发之旅，请从这里开始。

本教程适用于 XIAO ESP32C3、XIAO ESP32S3 和 XIAO ESP32C6。
:::

在物联网开发领域，ESP-IDF（Espressif IoT Development Framework）由于其强大的功能和对 ESP32 系列微控制器的广泛支持而获得了显著的普及。随着 Matter 协议的出现，该协议旨在为智能家居设备提供统一标准，开发者们渴望探索这一新领域。然而，Matter 开发目前不支持 Arduino 框架，这使得 ESP-IDF 成为开发的主要选择。在本教程中，我们将指导您在 Ubuntu 系统上安装 ESP-IDF 的过程，使您能够在 XIAO ESP32 系列上开始您的 Matter 开发之旅。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## 基于 Ubuntu 22.04

在 Matter 开发方面，操作系统的选择是一个重要的考虑因素。虽然 Windows 不提供对 Matter 开发的原生支持，但开发者仍然可以使用 Windows Subsystem for Linux (WSL) 来**[创建兼容的环境](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**。**[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)** 允许直接在 Windows 上运行 Linux 发行版（如 Ubuntu），提供对 Matter 开发所需工具和库的访问。

另一方面，macOS 由于其基于 Unix 的基础和全面的开发工具而在开发者中很受欢迎。

最终，操作系统的选择取决于您的个人偏好和 Matter 项目的具体要求。Ubuntu 作为 Linux 发行版，为 Matter 开发提供了原生和流畅的体验。但是，如果您更习惯使用 Windows 或 macOS，您仍然可以使用 Windows 上的 WSL 或 macOS 上的内置终端等工具来设置合适的开发环境。

:::caution
我们不建议在 Windows 上开发 ESP-Matter，即使使用 WSL。Windows 不支持将 COM 端口暴露给 WSL 发行版。您可能需要频繁切换终端或安装 [usbipd-win](https://github.com/dorssel/usbipd-win) 来解决端口问题，包括 [chip-tool 的使用也是一个痛点](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst)。
:::

**总之，我们将在接下来的开发步骤中使用 Ubuntu，并将使用 Matter 目前支持的最新 Ubuntu 22.04**。如果您想使用本文以外的操作系统进行 Matter 开发，您可以参考阅读乐鑫的官方文档。本文将不再重复。

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## 准备软件

下面我将列出本文中使用的系统版本和 ESP-IDF 版本供参考。这是一个经过测试能够正常工作的稳定版本。

- **主机**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**: 标签 [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## 准备硬件

在本节中，我们将详细介绍如何在 Ubuntu 环境中配置 ESP-IDF 的使用，并执行 ESP-IDF 提供的点灯示例。因此对于本文，您只需要准备以下任意一款 XIAO ESP32 系列。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::caution
XIAO ESP32C3 没有板载LED，所以如果您使用的是XIAO ESP32C3，您可能需要额外准备一个LED。
:::

## 视频教程

由于ESP-IDF开发框架面向的是更专业的软件开发者，使用门槛比Arduino要高。相关的文档和资料也会比Arduino少。为了让XIAO用户尽快开始使用ESP-IDF，并减少在开发环境配置中遇到问题的可能性，我们将以视频和图文的形式来展示环境的配置。本节是视频部分，如果您想跟着视频操作，可以参考这个视频来安装和配置ESP-IDF环境，最终点亮XIAO ESP32C6的板载LED。

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 逐步安装ESP-IDF

本节是ESP-IDF环境配置的图文教程部分。

### 步骤1. 安装先决条件

首先更新和升级您的Ubuntu系统，以确保您拥有最新的软件包和依赖项。打开终端并运行以下命令：

```
sudo apt update
sudo apt upgrade
```

通过运行以下命令安装 ESP-IDF 的必要先决条件，如果您确定以下软件包已经安装，可以跳过此步骤，但我们仍建议您运行此命令再次检查。

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
使用 ESP-IDF 需要 CMake 3.16 或更新版本。如果您的操作系统版本没有合适的版本，请运行 "[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" 来安装合适的版本。
:::

### 步骤 2. 安装 Python3

通常，Ubuntu 22.04 LTS 的完整版本默认安装 Python 3.12。如果您不确定，可以按以下方式检查。如果没有安装或者您曾经卸载过它，也可以按以下方式重新安装。如果您确定已经安装了 Python 3，可以跳过此步骤。

检查您当前拥有的 Python 版本：

```
python --version
```

如果输出类似 `Python 2.7.17`，则您的默认解释器是 `Python 2.7`。如果是这样，还要检查您的计算机上是否尚未安装 Python 3：

```
python3 --version
```

如果上述命令返回错误，说明未安装 Python 3。

以下是安装 Python 3 的步骤概述。

- 使用 HomeBrew 安装可以按如下方式进行：

    ```
    brew install python3
    ```

- 如果您使用 MacPorts，可以运行：

    ```
    sudo port install python38
    ```

### 步骤 3. 获取 ESP-IDF

要获取 ESP-IDF，请导航到您的安装目录，并使用 `git clone` 克隆仓库，按照下面针对您操作系统的具体说明进行操作。打开终端，并运行以下命令：

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

通过执行上述命令，ESP-IDF 将被下载到 `~/esp/esp-idf`。

### 步骤 4. 设置工具

除了 ESP-IDF 之外，您还需要安装 ESP-IDF 使用的工具，例如编译器、调试器、Python 包等，用于支持 ESP32 的项目。

```
cd esp-idf/
./install.sh
```

### 步骤 5. 设置环境变量

已安装的工具尚未添加到 PATH 环境变量中。要使这些工具能够从命令行使用，必须设置一些环境变量。ESP-IDF 提供了另一个脚本来完成此操作。

在您要使用 ESP-IDF 的终端中，运行：

```
source ./export.sh
cd ..
```

此时，整个 ESP-IDF 环境实际上已经配置完成。要验证 ESP-IDF 是否正确安装，请运行以下命令：

```
idf.py --version
```

如果安装成功，您应该能看到 ESP-IDF 的版本信息。

### 步骤 6（可选）。快速访问 ESP-IDF 开发环境

如上述步骤所述，每次我们启动终端或重启计算机时，都需要在新终端中导入 ESP-IDF 的环境变量，这给我们带来了很大的不便，特别是如果我们需要频繁开发 ESP32。我们可以通过以下步骤修改 Shell 的配置文件，以便通过 `get_idf` 命令启动 ESP-IDF 环境。

在终端中输入以下命令打开 `.bashrc` 文件。

```
nano ~/.bashrc
```
将以下内容添加到 `.bashrc` 文件的末尾。

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

通过重启终端会话或运行 `source [配置文件路径]` 来刷新配置，例如 `source ~/.bashrc`。

现在您可以运行 `get_idf` 在任何终端会话中设置或刷新 esp-idf 环境。

:::caution
从技术上讲，您可以直接将 `export.sh` 添加到您的 shell 配置文件中；但是，不建议这样做。这样做会在每个终端会话中激活 IDF 虚拟环境（包括那些不需要 IDF 的会话），违背了虚拟环境的目的，并可能影响其他软件。
:::

## 运行 LED 示例程序

为了确保您的 ESP-IDF 环境设置正确，让我们运行一个简单的 LED 示例程序。

### 步骤 1. 将 XIAO ESP32C6 连接到 PC

现在将您的 XIAO ESP32 系列开发板连接到计算机，并检查开发板在哪个串行端口下可见。我们将以 XIAO ESP32C6 为例。

串行端口具有以下命名模式：`/dev/tty`。通常，您的计算机可能有许多以 `tty` 开头的端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

确定端口也很容易，您可以使用查询命令查看在未连接到 XIAO 时默认存在哪些端口。

```
ls /dev/tty*
```

然后，将 XIAO 连接到计算机并再次查询，额外的串口名称就是 XIAO 的端口号。

请记住端口名称，因为在接下来的步骤中会用到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

如上所示，我的计算机上 XIAO 的端口号应该是 **ttyACM0**。

### 步骤 2. 启动项目

导航到示例目录

```
cd ~/esp/esp-idf/examples/get-started/blink
```

Set the target device.

```
idf.py set-target esp32c6
```

:::tip

- 如果您使用的是 **XIAO ESP32C3**，那么您需要使用的命令是 `idf.py set-target esp32c3`。
- 如果您使用的是 **XIAO ESP32S3**，那么您需要使用的命令是 `idf.py set-target esp32s3`。

:::

由于此示例项目的主要效果是使板载LED闪烁，我们需要配置LED所在的GPIO以及闪烁时间和其他参数。ESP-IDF提供了menuconfig命令来设置项目的一些可调参数。

```
idf.py menuconfig
```

此命令打开一个配置菜单，您可以在其中修改各种设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

以 blink 项目为例，有三个可以调整的参数。

1. Blink LED type：设置要使用的 LED 类型，在这种情况下我们将其设置为 **GPIO**。

2. Blink GPIO number：LED 所在的 GPIO 引脚号，这里设置为 **15**。XIAO ESP32C6 的 LED 连接到 GPIO15。

3. Blink period in ms：灯光闪烁之间的时间间隔。默认为 **1000** 毫秒，即 1 秒。

设置完成后，按 **q** 退出设置菜单，然后按 **y** 确认更改。

### 步骤 3. 构建并烧录示例

通过运行以下命令构建项目：

```
idf.py build
```

此命令编译应用程序和所有 ESP-IDF 组件，然后生成引导加载程序、分区表和应用程序二进制文件。如果没有错误，构建过程将通过生成固件二进制 .bin 文件来完成。

要烧录您在上一步中为 ESP32 构建的二进制文件，您需要运行以下命令：

```
idf.py -p PORT flash
```

将 `PORT` 替换为您的 XIAO ESP32 开发板的 USB 端口名称。如果未定义 **PORT**，`idf.py` 将尝试使用可用的 USB 端口自动连接。根据我们在第一步中查询到的设备端口号，对我来说，我应该输入以下命令来烧录程序。

```
idf.py -p /dev/ttyACM0 flash
```

如果刷写过程结束时没有问题，XIAO 将重启并启动"闪烁"应用程序。

要查看 LED 示例程序的输出，请运行以下命令

```
idf.py monitor
```

您应该看到 XIAO 上的 LED 在闪烁，表明示例程序正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

如果您希望退出串口监视器，可以使用快捷键 `Ctrl+]`。

:::tip
以下是 ESP-IDF 环境中一些常用的命令：

- `idf.py menuconfig`：打开项目配置菜单。
- `idf.py build`：构建项目。
- `idf.py flash`：将构建的固件烧录到连接的设备。
- `idf.py monitor`：启动串口监视器以查看设备的输出。
- `idf.py clean`：清理构建目录。
- `idf.py fullclean`：执行完全清理，包括下载的依赖项。
- `idf.py set-target`：为项目设置目标芯片。
- `idf.py size`：显示构建固件的大小信息。
- `idf.py app`：管理项目中的应用程序。
- `idf.py component`：管理项目中的组件。

:::

恭喜！您已成功在 Ubuntu 系统上安装了 ESP-IDF，为您的 Matter 开发之旅奠定了基础。Seeed Studio 将继续在 Matter 背景下增强和扩展 XIAO ESP32 系列的开发文档。随着 ESP-IDF 设置和配置的完成，您现在已准备好继续进行 Matter 开发部分的旅程。

Seeed Studio 致力于提供全面的资源和支持，以促进您的 Matter 开发体验。请关注即将推出的针对 XIAO ESP32 系列量身定制的 Matter 特定文档和教程。这些资源将指导您完成利用 ESP-IDF 框架构建符合 Matter 协议的尖端智能家居设备的过程。

当您深入 Matter 开发时，请务必参考官方 ESP-IDF 文档，以获取有关框架功能和最佳实践的深入信息。与充满活力的开发者和爱好者社区互动，交流知识、寻求指导并在创新项目上进行协作。

凭借 ESP-IDF 的强大功能和 Seeed Studio 即将推出的 Matter 开发资源，您已具备创建卓越智能家居解决方案的充分条件，这些解决方案将推动互操作性和用户体验的边界。拥抱前方令人兴奋的可能性，满怀信心地踏上您的 Matter 开发之旅。编程愉快！

## 故障排除

### 为什么在安装环境过程中出现各种错误？

ESP-IDF 的环境要求比较高，如果您使用的是经常用于开发的 Ubuntu 主机，很可能会由于某些 Python 依赖项的不同版本而出现错误。由于 Matter 框架不是由 Seeed 开发的，我们可能无法解决这部分问题，因此如果您在安装过程中遇到问题，我们建议您向官方 **[ESP-IDF 仓库](https://github.com/espressif/esp-idf)** 提交 issue 寻求帮助。

## 资源

- **[ESPRESSIF IDF - 入门指南](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
