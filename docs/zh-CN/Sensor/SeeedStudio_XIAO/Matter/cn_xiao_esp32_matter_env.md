---
description: 介绍如何安装和配置 ESP-Matter 环境。
title: 使用 XIAO ESP32 系列进行 Matter 开发
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32_matter_env
last_update:
  date: 05/15/2024
  author: Citric
---

# 使用 XIAO ESP32 系列进行 Matter 开发

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第三个教程。如果您还没有阅读之前的教程，我们建议您先阅读它们，以检查您的设备是否已按要求配置。

- **[使用 Espressif ESP-IDF 在 XIAO 上开发](https://wiki.seeedstudio.com/cn/xiao_idf)**
- **[使用 XIAO ESP32 系列快速入门 Matter](https://wiki.seeedstudio.com/cn/getting_started_with_matter)**

:::

在物联网（IoT）快速发展的环境中，一个新的参与者已经出现，它将彻底改变智能家居设备相互通信和交互的方式。认识一下 Matter，这个统一协议承诺弥合各种智能家居生态系统之间的差距，为全球用户创造无缝、可互操作的体验。

那么，Matter 到底是什么，为什么它在 IoT 社区中引起如此大的兴奋？Matter 是一个开源的标准化协议，使来自不同制造商的智能家居设备能够毫不费力地协同工作。它旨在通过提供通用的通信语言和框架来简化 IoT 设备的开发和部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- 智能家居设备的通信协议。
- 1.0 版本于 2022 年 10 月 4 日发布，此前曾两次推迟。
- 标准化的命令集，使来自不同制造商的设备能够相互通信。
- 运行在 IP 网络之上，使用 Thread、Wi-Fi 或以太网。
- 采用安全设计和零信任原则。
- 本地运行 - 通常通过 Matter 集线器连接到云端。
- 与其他智能家居标准（如 Zigbee、Z-Wave 和 433MHz）并存。
- 电池寿命和范围取决于无线网络技术。
- 由 Matter 集线器协调。

Matter 的价值主张很明确：它为更加互联、用户友好和安全的智能家居体验提供了一条路径。通过采用 Matter，设备制造商可以确保他们的产品与广泛的智能家居平台和助手兼容，如 Amazon Alexa、Google Home 和 Apple HomeKit。这种互操作性不仅有利于消费者，还为 IoT 领域的开发者和企业开辟了新的机会。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

作为开发者，拥抱 Matter 意味着进入一个庞大的设备和服务生态系统，让您能够创建可以与现有智能家居设置无缝集成的创新解决方案。通过利用 Matter 的力量，您可以专注于构建引人注目的用户体验和功能，而不必担心设备通信和兼容性的复杂性。

要开始您的 Matter 开发之旅，您需要合适的工具和环境。在本教程中，我们将指导您使用 Seeed Studio XIAO ESP32C6 设置 Matter 开发环境的过程，这是一款专为 IoT 应用设计的紧凑而强大的开发板。凭借其 ESP32-C6 微控制器和丰富的外设接口，XIAO ESP32C6 是开发 Matter 兼容设备的理想选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

在接下来的章节中，我们将引导您完成配置 Matter 开发环境的步骤，包括安装必要的软件、设置 Seeed Studio XIAO ESP32C6 开发板，以及运行您的第一个 Matter 示例程序。在本教程结束时，您将拥有坚实的基础来开始构建自己的 Matter 设备，并为不断增长的可互操作智能家居解决方案生态系统做出贡献。

那么，让我们深入了解并释放使用 Seeed Studio XIAO ESP32C6 进行 Matter 开发的潜力！

## 准备软件

下面我将列出本文中使用的系统版本、ESP-IDF 版本和 ESP-Matter 版本供参考。这是一个经过测试可以正常工作的稳定版本。

- **主机**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**: 标签 [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **ESP-Matter**: main 分支，截至 2024 年 5 月 10 日，提交 [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5)。
- **connectedhomeip**: 目前适用于提交 [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10)，截至 2024 年 5 月 10 日。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## 准备硬件

在本节中，我们将详细介绍如何在 Ubuntu 环境中配置 ESP-IDF 的使用，并执行 ESP-IDF 提供的照明示例。因此，对于本文，您只需要准备以下任何一款 XIAO ESP32 系列。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32-C3</th>
   <th>XIAO ESP32-S3</th>
   <th>XIAO ESP32-C5</th>
    <th>XIAO ESP32-C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

除了 XIAO，我们还需要 WS281x 型号的灯带或灯珠。目前 Espressif 提供的照明示例仅支持单个灯珠，因此无论您使用灯带还是灯珠，都只会点亮一个灯。我们还建议您购买 Grove Base for XIAO 以便于接线。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base for XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

为了统一接口，我们将在本例中使用 **D9** 引脚作为示例，请将您的 LED 灯带或灯珠连接到 XIAO 的 **D9** 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## 视频教程

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 逐步安装 ESP-Matter

:::tip
在开始 Matter 环境安装之前，请确保您已经[安装并访问了 ESP-IDF 编程环境](https://wiki.seeedstudio.com/cn/xiao_idf/#step-5-set-up-environment-variables)。
:::

:::tip
在设置 ESP-IDF 环境时，您需要确保您使用的 XIAO 开发板与当前的 Matter 环境兼容。例如，在使用 XIAO ESP32-C5 和 XIAO ESP32-C6 时，撰写本 wiki 时支持的最新版本是 ESP-IDF v5.5.1。更多详情，请访问[支持的 ESP-IDF 和 connectedhomeip 版本](https://github.com/espressif/esp-matter)
:::

### 步骤 1. 安装依赖项

首先，您需要使用 `apt-get` 安装所需的软件包。打开终端并执行以下命令：

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

此命令安装各种软件包，如 `git`、编译器（`gcc`、`g++`）以及构建和运行 Matter SDK 所需的库。

### 步骤 2. 克隆 ESP-Matter 仓库

使用 `git clone` 命令从 GitHub 克隆 `esp-matter` 仓库，深度为 1 以仅获取最新快照：

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

切换到 `esp-matter` 目录并初始化所需的 Git 子模块：

```bash
cd esp-matter
git submodule update --init --depth 1
```

导航到 `connectedhomeip` 目录并运行 Python 脚本来管理特定平台的子模块：

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

此脚本以浅层方式（仅最新提交）更新 ESP32 和 Linux 平台的子模块。

### 步骤 3. 安装 ESP-Matter

返回到 `esp-matter` 根目录，然后运行安装脚本：

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

此脚本将安装 ESP-Matter SDK 特定的附加依赖项。

### 步骤 4. 设置环境变量

执行 `export.sh` 脚本以设置开发所需的环境变量：

```bash
source ./export.sh
```

此命令使用必要的环境路径和变量配置您的 shell。

### 步骤 5（可选）. 快速访问 ESP-Matter 开发环境

要将提供的别名和环境变量设置添加到您的 `.bashrc` 文件中，请按照以下步骤操作。这将配置您的 shell 环境以轻松在 IDF 和 Matter 开发设置之间切换，并启用 ccache 以加快构建速度。

打开终端并使用文本编辑器打开位于主目录中的 `.bashrc` 文件。您可以使用 `nano` 或任何您喜欢的编辑器。例如：

```bash
nano ~/.bashrc
```

滚动到 `.bashrc` 文件的底部并添加以下行：

```bash
# Alias for setting up the ESP-Matter environment
alias get_matter='. ~/esp/esp-matter/export.sh'

# Enable ccache to speed up compilation
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

添加行后，保存文件并退出文本编辑器。如果您使用的是 `nano`，可以按 `Ctrl+O` 保存，按 `Enter` 确认，然后按 `Ctrl+X` 退出。

要使更改生效，您需要重新加载 `.bashrc` 文件。您可以通过执行 `.bashrc` 文件或关闭并重新打开终端来完成此操作。要执行 `.bashrc` 文件，请使用以下命令：

```bash
source ~/.bashrc
```

现在您可以运行 `get_matter` 和 `set_cache` 来在任何终端会话中设置或刷新 esp-matter 环境。

```bash
get_matter
set_cache
```

## 运行灯光示例

配置好 Matter 环境后，我们可以编译并上传示例应用程序 light 来检查它。

### 步骤 1. 配置项目参数

导航到 `examples/light` 目录。

```bash
cd examples/light                # Navigate to the light example directory
```

执行清理操作以删除之前的构建文件。

```bash
rm -rf build/                     # Clean previous build files
```

将目标设置为 ESP32-C6。

```bash
idf.py set-target esp32c6        # Set the build target to ESP32-C6
```

进入配置菜单并进行必要的配置。

```bash
idf.py menuconfig                # Enter the configuration menu
```

在 `menuconfig` 中，您需要找到并启用 `Channel for console oputput` 选项。通常，此选项可以在 **Component config** -> **ESP System Settings** 下找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. 使用箭头键导航到该选项。
2. 按空格键或回车键选择选项：`USB Serial/JTAG Controller`。

对于不同的 XIAO，我们还需要更新其 GPIO 引脚号。此选项可以在 **Component config -> Board Support Package (generic) -> LEDs** 下找到。

- 对于 XIAO ESP32-C3，D9 的 GPIO 是 9。
- 对于 XIAO ESP32-S3，D9 的 GPIO 是 8。
- 对于 XIAO ESP32-C5，D9 的 GPIO 是 9。
- 对于 XIAO ESP32C6，D9 的 GPIO 是 20。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. 使用箭头键导航到该选项。
2. 按空格键或回车键输入 GPIO 号。
3. 启用必要选项后，按 `q` 退出 `menuconfig`，然后按 `y`。

### 步骤 2. 编译并上传示例应用程序

继续构建和烧录过程：

```bash
idf.py build                      # Build the project
```

如果编译顺利，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

然后您可以上传程序。

```bash
idf.py -p /dev/ttyACM0 flash monitor  # Flash the firmware and monitor the output
```

如果不同，请将 `/dev/ttyACM0` 替换为与您的 XIAO ESP32 对应的实际 USB 设备文件。

请记住仔细遵循所有说明，并确保每个步骤都成功完成后再进行下一步。如果遇到任何错误，需要在继续之前解决它们。

:::tip
在烧录 Matter 固件的过程中，您可能会遇到没有权限的情况，此时您可以使用以下命令为设备端口授予权限并重新上传程序。由于设备插入或重启，可能需要再次授予权限。

```
sudo chmod 666 /dev/ttyACM0       # Grant permissions to the USB device file
```

如果不同，请将 `/dev/ttyACM0` 替换为与您的 XIAO ESP32 对应的实际 USB 设备文件。
:::

那么恭喜您，如果您已成功烧录固件，那么在监视器中您将在终端中看到调试日志输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

接下来，我们将学习如何使用 matter 命令和 chip-tool 来配置 Matter 设备，以完成 Matter 设备的调试和检查。

## 主机控制和设备调试

我们在 `menuconfig` 中将 Channel for `console oputput to USB Serial`，目的是我们可以使用 USB 接口来控制 XIAO，配置加入网络或进行其他调试。这一步至关重要，决定了我们是否可以使用串行工具向设备发出命令。

这些是通过电缆连接直接控制设备的命令，通常以 `matter` 开头。

### 常用命令

- BLE 命令：启动和停止 BLE 广播：

 ```
 matter ble [start|stop|state]
 ```

- Wi-Fi 命令：设置和获取 Wi-Fi 模式：

 ```
 matter wifi mode [disable|ap|sta]
 ```

- 设备配置：转储设备静态配置：

 ```
 matter config
 ```

- 恢复出厂设置：

 ```
 matter device factoryreset
 ```

- 入网代码：转储入网配对代码载荷：

 ```
 matter onboardingcodes
 ```

- 获取属性：（ID 为十六进制）：

 ```
 matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
 ```

  - 示例：on_off::on_off：

  ```
  matter esp attribute get 0x1 0x6 0x0
  ```

- 设置属性：（ID 为十六进制）：

 ```
 matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
 ```

  - 示例：on_off::on_off：

  ```
  matter esp attribute set 0x1 0x6 0x0 1
  ```

- 诊断：

 ```
 matter esp diagnostics mem-dump
 ```

- Wi-Fi

 ```
 matter esp wifi connect <ssid> <password>
 ```

### 使用方法

#### 步骤 1. 安装 Minicom

Minicom 是一个基于文本的调制解调器控制和终端仿真程序，适用于类 Unix 操作系统。通过安装 Minicom，我们可以轻松地向 XIAO 发送 Matter 控制命令。要在 Ubuntu 上安装 Minicom，请打开终端并输入以下命令：

```bash
sudo apt update
sudo apt install minicom
```

此命令更新您的软件包列表并安装 Minicom。

#### 步骤 2. 配置用户权限

要允许非 root 用户访问串行端口（如 `ttyACM0`），您需要将用户添加到 `dialout` 组。您可以使用以下命令执行此操作：

```bash
sudo usermod -a -G dialout $USER
```

将 `$USER` 替换为您的用户名，或省略它以应用于当前登录的用户。运行此命令后，您**必须注销并重新登录**才能使组更改生效。

#### 步骤 3. 设置 Minicom

现在您需要配置 Minicom 以使用 `ttyACM0` 端口。使用以下命令在设置模式下运行 Minicom：

```bash
sudo minicom -s
```

在设置菜单中，按照以下步骤操作：

1. 选择 **Serial port setup**。
2. 按 'A' 将串行设备更改为 `/dev/ttyACM0`。
3. 根据需要调整其他设置。默认设置通常是 9600 8N1（9600 波特率，无奇偶校验，8 数据位，1 停止位）。我们只需要将波特率更改为 **115200**。
4. 按 'Enter' 退出此屏幕。

#### 步骤 4. 保存配置

设置串行端口后：

1. 选择 **Save setup as dfl** 将其设为默认配置。
2. 通过选择 **Exit from Minicom** 退出 Minicom 设置。

#### 步骤 5：运行 Minicom

要使用默认设置启动 Minicom，只需输入：

```bash
minicom
```

如果您需要使用 sudo 权限运行（例如，如果遇到权限问题），可以使用：

```bash
sudo minicom
```

要退出 Minicom，按 `Ctrl-A` 然后按 `Z` 调出帮助菜单，然后按 `X` 退出程序。

#### 步骤 6. 设置 XIAO 配网

使用以下命令让 XIAO 连接到您的网络。选择网络时，您可以选择 2.4G 网络连接。

:::tip
在本教程中，除了支持双频 2.4G 和 5G WiFi 的 XIAO ESP32-C5 外，所有 XIAO 系列开发板都只支持 2.4G WiFi。
:::

```
matter esp wifi connect <ssid> <password>
```

配对成功后，您可以使用以下命令查询 Matter 设备的重要信息：**VendorID**、**ProductId**、**Discriminator** 和 **PinCode**。这些信息有助于您在使用 Chip-tool 工具调试时配对设备。

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

最后，使用以下命令转储入网配对代码载荷。

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

这里最后显示的是设备配对二维码的链接。有了二维码，您可以在手机上扫描代码来绑定 Matter 设备，就像[入门指南](https://wiki.seeedstudio.com/cn/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app)步骤一样。

## 使用 Chip-tool 远程调试 Matter 设备

Matter 设备是智能家居的重要组成部分，一直使用数据线进行调试和设置是不现实的。在 Matter 调试工具中，最常用的是 Chip-tool，它帮助我们在设备连接时远程调试设备。

Chip-tool 命令通常需要 Chip-tool 脚本，因此它们通常以 `chip-tool` 开头。

### 通过 IP 配对设备

下面的命令将发现设备并尝试使用提供的设置代码与发现的第一个设备配对：

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

下面的命令将发现长判别器为 3840 的设备，并尝试使用提供的设置代码与发现的第一个设备配对：

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

下面的命令将根据给定的二维码（设备启动时记录的）发现设备，并尝试与发现的第一个设备配对。

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

在所有这些情况下，设备将被分配节点 ID `${NODE_ID_TO_ASSIGN}`（必须是十进制数字或 0x 前缀的十六进制数字）。

### 忘记当前已配置的设备

```
chip-tool pairing unpair
```

### 使用客户端发送 Matter 命令

要使用客户端发送 Matter 命令，运行构建的可执行文件并传递目标集群名称、目标命令名称以及端点 ID。

端点 ID 必须在 1 到 240 之间。

```
chip-tool onoff on 1
```

客户端将发送单个命令包然后退出。

### 使用方法

当您准备使用 Chip-tool 进行调试时，可以断开 XIAO 与计算机的连接，并将其连接到电源。

第一步，我们需要匹配设备，这可以通过使用上面[通过 IP 配对设备](#通过-IP-配对设备)部分中的任何方法来完成。

例如，我使用以下命令。

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

在这种情况下，设备将被分配节点 ID `0x12`（必须是十进制数字或 0x 前缀的十六进制数字）。20202021 是 PinCode，3840 是 Discriminator。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

最后，使用以下命令验证您可以控制灯的开关。

打开灯：

```
chip-tool onoff on 0x12 0x1
```

关闭灯：

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

0x12 是我们匹配时分配给设备的节点 ID。

恭喜大家，通过这里进行的教程步骤，我相信您已经对 ESP-Matter 开发框架的一般步骤和调试工具的使用有了初步了解。如果还有不理解或不熟悉的地方，我们将在后续教程中继续使用和指导您，敬请期待！

## 故障排除

### Q1：为什么在安装环境时会出现各种错误？

ESP-Matter 的环境要求比较高，如果您使用的是经常用于开发的 Ubuntu 主机，很可能会因为某些 Python 依赖项的版本不同而出现错误。由于 Matter 框架不是由 Seeed 开发的，我们可能无法解决这部分问题，因此如果您在安装时遇到问题，我们建议您向官方 **[ESP-Matter 仓库](https://github.com/espressif/esp-matter)** 提交问题寻求帮助。

### Q2：组件解析失败

从 v4.x 升级到 v5.0+ 后，许多功能模块（如 mqtt、json、esp_https_server 等）已从核心框架中移除并转换为独立组件。因此，编译过程中可能会出现组件依赖缺失错误。您可以根据错误消息添加缺失的组件。<br/>
参考：[ESP 组件注册表](https://components.espressif.com/)

### Q3：如何卸载 Matter 环境？

如果您正在运行 `./install.sh` 脚本并在配置 Python 环境的步骤中卡住，那么您可能需要检查您的 Matter [版本](#prepare-the-software)是否与 connectedhomeip 的版本匹配。

重置的简单方法是执行以下命令。

```
rm -r connectedhomeip/connectedhomeip/.environment
```

然后重新拉取适当版本的 connectedhomeip 分支。

```
git submodule update --init --depth 1
```

如果仍然不起作用，删除整个 esp-matter 文件夹并按照 Wiki 内容重新运行。

## 资源

- **[ESPRESSIF Matter - 使用 SDK 开发](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

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
