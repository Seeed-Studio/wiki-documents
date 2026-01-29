---
description: Semtech LR2021 LoRa Plus™ 评估套件入门指南。
title: Semtech LR2021 LoRa Plus™ 评估套件
keywords:
  - Semtech LR2021
  - XIAO
  - nRF54L15
  - docusaurus
slug: /cn/semtech_lr2021_evk_getting_started
last_update:
  date: 12/30/2025
  author: David Du
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/2-100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0.jpg" style={{width:600, height:'auto'}}/></div>

## 特性

**Semtech LR2021 LoRa Plus 评估套件**采用模块化设计，将强大的 **Seeed Studio XIAO nRF54L15 核心板**与 **LoRa Plus 扩展板**无缝集成。这个紧凑而坚固的硬件平台专为评估全场景地面到卫星通信而设计。它与众多主流物联网协议的兼容性确保了在各种应用场景中满足开发需求。

### Semtech LR2021 收发器

- **通用连接（多频段支持）：**
    - **Sub-GHz LoRa/FSK：** 完美兼容传统的 470/868/915 MHz LoRaWAN 网络，保持极远距离传输和穿透能力。
    - **2.4GHz LoRa：** 支持全球 ISM 频段 LoRa 调制。这解决了不同国家的监管分散问题（实现"全球一个 SKU"），同时提供比 Sub-GHz 更高的数据速率。
    - **S 波段卫星支持：** 重大升级。LR2021 原生支持 **1.9GHz - 2.5GHz** 频段，能够与低地球轨道（LEO）卫星直接通信，填补海洋、沙漠和地面网络无法覆盖的偏远地区的覆盖空白。

- **增强的 LR-FHSS 支持：** 
该芯片内置硬件支持 **长距离跳频扩频（LR-FHSS）**。这种调制技术显著提高了网络容量和抗干扰能力，是 **直连卫星物联网**的关键技术。

- **多种调制支持：**
LoRa、LR-FHSS、FLRC、FSK/GFSK、OQPSK、OOK、BLE 5.0 PHY

- **多协议兼容：**
LoRaWAN（Sub-GHz、2.4 GHz）、Amazon Sidewalk、Wi-SUN、Wireless M-Bus、Z-Wave、BLE、IEEE 802.15.4（Thread、Zigbee）

- **超低功耗架构：** 
尽管集成了多频段射频前端，LR2021 仍保持 Semtech 业界领先的低功耗标准： 
    - 105mA @ +22dBm 发射功率
    - 5.7mA 接收电流
    - 470nA 睡眠电流

使其非常适合电池供电的长生命周期资产跟踪设备。

- **增强的信道活动检测（CAD）：**
LR2021 的快速 CAD 采用智能自适应阈值和早期终止机制，显著降低了空闲信道检测所需的功耗和时间。


### LoRa Plus 扩展板特性

#### 双天线接口设计
- **LF 端口（SMA）：** 专用于 Sub-GHz 频段（150MHz - 960MHz）。
- **HF 端口（SMA）：** 专用于 2.4GHz ISM 和 S 波段卫星频率。

#### 主控核心：XIAO nRF54L15
- **下一代硅片：** 
采用 Nordic Semiconductor 最新的 **nRF54 系列**（nRF54L15）。
- **高性能处理：** 
配备运行频率高达 **128 MHz** 的 ARM Cortex-M33 内核，为复杂的 LoRaWAN 协议栈和边缘 AI 算法提供充足的计算能力。
- **下一代效率：** 
与 nRF52 系列相比，nRF54 在功耗效率方面实现了飞跃。与 LR2021 配对时，可以构建具有卓越电池寿命的终端产品。
- **紧凑外形：** 
采用经典的 XIAO 邮票孔设计，便于集成到更小的原型外壳中。

## 规格参数

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">参数</th><th class="tg-6cwf">规格</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">尺寸</td>
<td class="tg-g9rn">扩展板：65(W)x73(L)x27(H)mm  包装：200x130x50mm</td>
</tr>
<tr>
<td class="tg-g9rn">供电电压</td>
<td class="tg-g9rn">5V（USB Type C）</td>
</tr>
<tr>
<td class="tg-g9rn">输出电压</td>
<td class="tg-g9rn">3.3V / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">最大工作电流（发射器）</td>
<td class="tg-g9rn">Sub-GHz：105mA @ +22dBm<br />2.4 GHz：27mA @ +14dBm</td>
</tr>
<tr>
<td class="tg-g9rn">最大工作电流（接收器）</td>
<td class="tg-g9rn">LoRa SF7 @ 125KHz：5.7mA<br />FLRC：10.9mA</td>
</tr>
<tr>
<td class="tg-g9rn">频率计划</td>
<td class="tg-g9rn">EU868 / US915 / CN490</td>
</tr>
<tr>
<td class="tg-g9rn">输出功率</td>
<td class="tg-g9rn">Sub-GHz：+22dBm 到 -10dBm<br />2.4 GHz：+12dBm</td>
</tr>
<tr>
<td class="tg-g9rn">接收灵敏度</td>
<td class="tg-g9rn">LoRa SF12 @ 125kHz：-141.5dBm<br />FLRC @ 260kbps：-111dBm<br />BLE @ 2Mbps：-97dBm</td>
</tr>
<tr>
<td class="tg-g9rn">接口</td>
<td class="tg-g9rn">USB Type C / Grovex3（IICx2 / UARTx1）/ SMA-Kx2 </td>
</tr>
<tr>
<td class="tg-g9rn">调制</td>
<td class="tg-g9rn">LoRa、（G）FSK、LR-FHSS、FLRC、OQPSK、OOK、BLE 5.0 PHY</td>
</tr>
<tr>
<td class="tg-g9rn">工作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>

<br />

## 硬件概述



### 原理图



### 引脚图

**扩展板：**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Front.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Back.jpg" style={{width:600, height:'auto'}}/></div>

<br />

**XIAO nRF54L15：**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:600, height:'auto'}}/></div>

<br />

**引脚映射：**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">XIAO 引脚定义</th><th class="tg-6cwf">nRF54L15 引脚定义</th><th class="tg-6cwf">引脚功能</th><th class="tg-6cwf">DeviceTree 索引</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">A0 / D0</td>
<td class="tg-g9rn">P1.04</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A1 / D1</td>
<td class="tg-g9rn">P1.05</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A2 / D2</td>
<td class="tg-g9rn">P1.06</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A3 / D3</td>
<td class="tg-g9rn">P1.07</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">SDA0 / D4</td>
<td class="tg-g9rn">P1.10</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c22</td>
</tr>
<tr>
<td class="tg-g9rn">SCL0 / D5</td>
<td class="tg-g9rn">P1.11</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">TX / D6</td>
<td class="tg-g9rn">P2.08</td>
<td class="tg-g9rn">UART</td>
<td class="tg-g9rn" rowspan="2">uart21</td>
</tr>
<tr>
<td class="tg-g9rn">RX / D7</td>
<td class="tg-g9rn">P2.07</td>
<td class="tg-g9rn">UART</td>
</tr>
<tr>
<td class="tg-g9rn">SCK / D8</td>
<td class="tg-g9rn">P2.01</td>
<td class="tg-g9rn">SPI</td>
<td class="tg-g9rn" rowspan="3">spi00</td>
</tr>
<tr>
<td class="tg-g9rn">MISO / D9</td>
<td class="tg-g9rn">P2.04</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">MOSI / D10</td>
<td class="tg-g9rn">P2.02</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">SCL1 / D11</td>
<td class="tg-g9rn">P0.03</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c30</td>
</tr>
<tr>
<td class="tg-g9rn">SDA1 / D12</td>
<td class="tg-g9rn">P0.04</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">D13</td>
<td class="tg-g9rn">P2.10</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D14</td>
<td class="tg-g9rn">P2.09</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D15</td>
<td class="tg-g9rn">P2.06</td>
<td class="tg-g9rn">数字 IO</td>
<td class="tg-g9rn"></td>
</tr>
</tbody>
</table>



<br />

## 入门指南

### 1. 概述
本指南提供了设置命令行 Zephyr RTOS 开发环境的分步说明，该环境集成了 Semtech 的 `usp_zephyr` 模块，通过使用板载 **XIAO-nRF54L15** 提供的示例进行快速评估。了解更多关于 Semtech 的 LoRa [USP™（统一软件平台）](https://www.semtech.com/products/wireless-rf/unified-software-platform)。您也可以下载源代码并在 Semtech **usp_zephyr** 仓库中找到更详细的信息：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Lora-net/usp_zephyr" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>从 GitHub 下载</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

`usp_zephyr` 项目采用混合结构，结合了：

- **West 工作空间模块结构：** 核心硬件支持（板卡、驱动程序、HAL）作为标准模块直接集成到 Zephyr 构建系统中。

- **分层结构：** 应用层库和示例在工作空间中单独存放，以便更好地组织和重用。

### 2. 先决条件

在继续之前，请确保您的系统满足这些要求。了解[更多](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)关于设置 Zephyr 开发环境的信息：

- **操作系统：** 
    - Ubuntu 22.04 LTS（推荐）或其他支持的 Linux 发行版、Windows（10 及更高版本）或 macOS。

- **主要依赖项：**

    - `west`（Zephyr 的元工具）

    - `ninja`

    - `cmake`（版本 3.20.0 或更高）

    - Python 3.8 或更高版本，带有 `pip`

    - 设备树编译器 `dtc`


<details>
<summary>安装和检查依赖项</summary>

- 对于 Linux：
```shell
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-venv python3-tk \
  xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
```
由于在 AArch64（ARM64）系统上无法使用 `gcc-multilib` 和 `g++-multilib`，您可能需要从要安装的软件包列表中省略它们。

- 对于 macOS：
使用 `brew` 安装所需的依赖项：
```shell
brew install cmake ninja gperf python3 python-tk ccache qemu dtc libmagic wget openocd
```

- 对于 Windows：
这里我们使用预安装的 Windows 包管理器 `winget`。如果这不是一个选项，您也可以从各自的网站安装依赖项，并将它们的环境变量添加到 `PATH` 中。

使用 `winget` 安装所需的依赖项：
```shell
winget install Kitware.CMake Ninja-build.Ninja oss-winget.gperf Python.Python.3.12 Git.Git oss-winget.dtc wget 7zip.7zip
```

<br />

您可以通过以下方式验证系统上安装的主要依赖项的版本：

```shell
cmake --version
```

```shell
python3 --version
```

```shell
ninja --version
```

</details>


### 3. 设置 Zephyr 工作空间（独立工作空间）

创建一个基础的 Zephyr 工作空间：
```shell
# Create and navigate into your workspace directory
mkdir ~/zephyr_workspace && cd ~/zephyr_workspace
```

:::note
为了避免 Python 环境冲突，我们强烈建议创建并使用虚拟环境进行开发和测试。请记住每次开始工作时都要激活虚拟环境。
:::


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Linux" label="Linux">

创建一个新的虚拟环境：
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

激活虚拟环境：
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

激活后，您的 shell 将以 `(.venv)` 为前缀。虚拟环境可以随时通过运行 `deactivate` 来停用。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

然后我们需要安装 Zephyr 软件开发工具包（SDK），它包含 Zephyr 支持的所有架构的工具链。SDK 包括编译器、汇编器、链接器和构建 Zephyr 应用程序所需的其他程序：
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="macOS" label="macOS">

创建一个新的虚拟环境：
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

激活虚拟环境：
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

激活后，您的 shell 将以 `(.venv)` 为前缀。虚拟环境可以随时通过运行 `deactivate` 来停用。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

然后我们需要安装 Zephyr 软件开发工具包（SDK），它包含 Zephyr 支持的所有架构的工具链。SDK 包括编译器、汇编器、链接器和构建 Zephyr 应用程序所需的其他程序：
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="Windows" label="Windows">

以普通用户身份打开 `cmd.exe`，并创建一个新的虚拟环境：
```shell
cd %HOMEPATH%
python -m venv zephyr_workspace\.venv
```

激活虚拟环境：
```shell
zephyr_workspace\.venv\Scripts\activate.bat
```

激活后，您的 shell 将以 `(.venv)` 为前缀。虚拟环境可以随时通过运行 `deactivate` 来停用。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
cmd /c scripts\utils\west-packages-pip-install.cmd
```

然后我们需要安装 Zephyr [软件开发工具包（SDK）](https://docs.zephyrproject.org/latest/develop/toolchains/zephyr_sdk.html#toolchain-zephyr-sdk)，它包含 Zephyr 支持的所有架构的工具链。SDK 包括编译器、汇编器、链接器和构建 Zephyr 应用程序所需的其他程序：
```shell
cd %HOMEPATH%\zephyr_workspace\zephyr
west sdk install
```

</TabItem>
</Tabs>


<br />

请等待 `west` 工具完成所有模块和组件的获取和安装。安装完成后，您将获得以下 `zephyr_workspace` 目录结构：

```shell
zephyr_workspace/
├── bootloader/
├── modules/
├── tools/
├── usp_zephyr/
│       ├── boards/
│       │     ├── seeed/xiao_nrf54l15/
│       │     └── shields/
│       ├── doc/
│       ├── drivers/
│       │     └── usp/
│       │          ├── lr11xx/
│       │          ├── lr20xx/
│       │          └── sx126x/
│       ├── dts/bindings/
│       ├── include/zephyr/
│       ├── modules/
│       │     ├── lora_basics_modem/
│       │     ├── smtc_modem_hal/
│       │     ├── usp/
│       │     └── usp_drivers/
│       ├── samples/
│       │     └── usp/
│       │          ├── lbm/
│       │          ├── rac/
│       │          └── sdk/
│       ├── subsys/
│       └── zephyr/
│             └─ module.yml
└── zephyr
```

<br />

**Zephyr 项目结构的 USP：**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">目录路径</th><th class="tg-6cwf">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">boards/</td>
<td class="tg-g9rn">**板级支持** 包含硬件平台的定义：<br />- `seeed/xiao_nrf54l15/`：对 Seeed Studio XIAO nRF54L15 板的支持 <br />- `shields/`：与 LoRa 无线电驱动程序兼容的 Zephyr 扩展板（附加板）的定义</td>
</tr>
<tr>
<td class="tg-g9rn">drivers/usp/</td>
<td class="tg-g9rn">**设备驱动程序** Semtech 无线电的核心硬件抽象层：<br />- `lr11xx/`、`lr20xx/`、`sx126x/`：包含特定 Semtech LoRa 收发器芯片的无线电 HAL 和 BSP 实现。
用户不应修改这些文件。</td>
</tr>
<tr>
<td class="tg-g9rn">dts/bindings/</td>
<td class="tg-g9rn">**设备树绑定** 包含定义如何在 Zephyr 设备树（`.dts` 文件）中描述 LoRa 无线电硬件（SPI 连接、控制引脚）的 YAML 文件。这将硬件描述链接到驱动程序。</td>
</tr>
<tr>
<td class="tg-g9rn">include/zephyr/</td>
<td class="tg-g9rn">**公共 API 头文件** 向 Zephyr 应用程序代码的其余部分公开公共驱动程序 API（`drivers/usp/lr20xx.h`）。</td>
</tr>
<tr>
<td class="tg-g9rn">modules/</td>
<td class="tg-g9rn">**Semtech 库和 HAL** <br />- `lora_basics_modem/`：Semtech LoRa Basics Modem 软件库。<br />- `smtc_modem_hal/`：调制解调器的硬件抽象层（HAL）。<br />- `usp/` 和 `usp_drivers/`：指导编译文件指向 Zephyr 模块中的相应组件。</td>
</tr>
<tr>
<td class="tg-g9rn">samples/usp/</td>
<td class="tg-g9rn">**示例应用程序** 演示关键功能的即用型示例代码。<br />- `lbm/`：Lora Basics Modem 的示例。<br />- `rac/`：无线电抽象控制器的示例。<br />- `sdk/`：通用 SDK 示例</td>
</tr>
<tr>
<td class="tg-g9rn">subsys/</td>
<td class="tg-g9rn">**子系统集成** </td>
</tr>
<tr>
<td class="tg-g9rn">zephyr/module.yml</td>
<td class="tg-g9rn">**模块清单** YAML 文件将整个 `usp_zephyr/` 目录声明为 Zephyr 模块。`west` 工具将使用此文件查找并将模块的 `boards`、`drivers` 集成到构建中。</td>
</tr>
</tbody>
</table>

<br />

### 4. 构建和运行

Semtech 提供了几个示例，用于与评估套件一起进行快速评估。所有示例都位于 `samples/usp` 目录中，您可以使用任何支持的板/扩展板定义来构建和烧录这些示例。我们将从 `LBM` 示例开始，演示新一代 LR2021 的核心功能。

```shell
usp_zephyr/samples/
└── usp/
     ├── lbm/
     │    ├── geolocation
     │    ├── lctt_certif
     │    ├── periodical_uplink
     │    └── porting_tests     
     ├── rac/
     └── sdk/
```

<br />

:::note
**LoRa Basics Modem (LBM)：**

LoRa Basics Modem 是由 Semtech 设计的用户友好型软件库，旨在简化在 ISM Sub-GHz 和 2.4GHz 频段运行的 LoRaWAN® 终端节点的开发，确保全球互操作性。它为开发者提供了高级的事件驱动接口，在抽象复杂性的同时保持与 [TS001-LoRaWAN L2 1.0.4](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) 规范和区域参数 [RP2-1.0.3](https://resources.lora-alliance.org/technical-specifications/rp2-1-0-3-lorawan-regional-parameters) 标准的完全合规性。

在此了解更多关于 [LoRa Basics Modem](https://www.semtech.com/products/wireless-rf/lora-basics-modem) 的信息。
:::

<br />

#### 4.1. LoRaWAN 周期性上行链路

此应用程序演示了如何使用 LoRa Basics Modem (LBM) 协议栈设置和运行 LoRaWAN 设备。它支持`周期性自动上行链路`、`手动按钮触发上行链路`和`下行链路接收`，是基本 LoRaWAN 功能验证的理想原型。

**主要特性**
- **LoRaWAN 网络加入：** 仅支持 **OTAA**（空中激活）网络加入。
- **周期性上行链路：** 可配置的自动上行链路，默认每 60 秒在 `FPort 101` 发送一次。
- **按钮触发上行链路：** 通过按钮按压在 `FPort 102` 触发手动上行链路传输。
- **下行链路接收：** 接收和处理下行链路消息。
- **多个 LoRaWAN 区域：** 支持多个区域，包括 EU868、US915 和 CN470。
- **中继 TX 支持：** 可选的 LoRaWAN 中继传输功能。
- **低功耗模式：** 可选的功耗优化配置。

**先决条件**

- 一个 **LoRaWAN 网络**账户（The Things Network、ChirpStack 等）
- 有效的 LoRaWAN **凭据**：`DevEUI`、`JoinEUI`、`AppKey`
- 范围内的兼容 **LoRaWAN 网关**

**设置 LoRaWAN 凭据**

:::note
这里我们以 The Thing Network 为例。如果需要，您可以选择您偏好的 LNS。
:::

- **步骤 1.** 访问 [The Things Network](https://www.thethingsnetwork.org) 网站并注册新账户。

- **步骤 2.** 登录后，点击您的个人资料并选择 **Console**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 选择一个集群开始添加网关和设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_cluster.png" style={{width:600, height:'auto'}}/></div>

<br />

:::note
为了在您的站点快速部署 LoRaWAN 覆盖网络，请查看我们的开箱即用 [SenseCAP M2 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)。
:::

- **步骤 4.** 在面板上点击 **Applications**，然后点击 **Add application**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_application.png" style={{width:600, height:'auto'}}/></div>

- **步骤 5.** 填写 **Application ID** 然后点击 **Create application**。

- **步骤 6.** 点击创建的应用程序并在面板上选择 **End devices**，然后点击 **Register end device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_device.png" style={{width:600, height:'auto'}}/></div>

- **步骤 7.** 选择 **Manually** 手动输入注册凭据。

- **步骤 8.** 根据您的区域选择 **Frequency plan**。同时确保您使用与将连接此设备的网关相同的频率。选择 **LoRaWAN Specification 1.0.4** 作为 **LoRaWAN version**，选择 **RP002 Regional Parameters 1.0.3** 作为 **Regional Parameters version**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_1.png" style={{width:500, height:'auto'}}/></div>

- **步骤 9.** 根据您自己的需要设置 **JoinEUI**、**DevEUI** 和 **AppKey**。这些凭据将进一步用于终端设备配置。为注册的设备选择一个 **End device ID**，然后点击 **Register end device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_2.png" style={{width:500, height:'auto'}}/></div>

- **步骤 10.** 编辑文件 `boards/user_keys.overlay` 并用您的实际凭据替换占位符值：

```dts
/ {
    zephyr,user {
        user-lorawan-device-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-join-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-gen_app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                                   0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                               0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-region = "EU_868";
    };
};
```

从支持的列表中选择适当的区域代码，并更新 `user_keys.overlay` 中的 `user-lorawan-region`：

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">区域代码</th><th class="tg-6cwf">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">EU_868</td>
<td class="tg-g9rn">欧洲 868 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">US_915</td>
<td class="tg-g9rn">北美 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP1</td>
<td class="tg-g9rn">亚太 923 MHz (GRP1)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP2</td>
<td class="tg-g9rn">亚太 923 MHz (GRP2)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP3</td>
<td class="tg-g9rn">亚太 923 MHz (GRP3)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP4</td>
<td class="tg-g9rn">亚太 923 MHz (GRP4)</td>
</tr>
<tr>
<td class="tg-g9rn">AU_915</td>
<td class="tg-g9rn">澳大利亚 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470</td>
<td class="tg-g9rn">中国 470 MHz (RP2)</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470_RP_1_0</td>
<td class="tg-g9rn">中国 470 MHz (RP1)</td>
</tr>
<tr>
<td class="tg-g9rn">IN_865</td>
<td class="tg-g9rn">印度 865 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">KR_920</td>
<td class="tg-g9rn">韩国 920 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">RU_864</td>
<td class="tg-g9rn">俄罗斯 864 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">WW_2G4</td>
<td class="tg-g9rn">全球 2.4 GHz</td>
</tr>
</tbody>
</table>

<br />

**构建标准版本：**

```shell
# Enable full logging and debug capabilities
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink
```

**构建低功耗版本：**

```shell
# Power-optimized with minimal logging features
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink -- -DCONF_FILE=prj_lowpower.conf
```



如果构建过程成功，您应该看到如下所示的 Zephyr 编译和构建信息：

```shell
...
-- Zephyr version: 4.2.0 (/Users/admin/zephyr_workspace/zephyr), build: v4.2.0
[248/248] Linking C executable zephyr/zephyr.elf
Memory region         Used Size  Region Size  %age Used
           FLASH:      257576 B      1428 KB     17.61%
             RAM:       40292 B       188 KB     20.93%
        IDT_LIST:          0 GB        32 KB      0.00%
Generating files from /Users/admin/zephyr_workspace/build/zephyr/zephyr.elf for board: xiao_nrf54l15
```

**烧录设备：**

```shell
# Flash the firmware to the board
west flash
```
**监控串口控制台输出：**

连接串口监视器（screen、PuTTY 等）查看日志。这里我们使用内置的终端应用程序 `screen` 进行演示：

```shell
# Unplug the XIAO-nRF54L15
# Use ls /dev/tty.* command to list current ports
ls /dev/tty.*
```

```shell
# Plug in the Type-c cable and run the ls /dev/tty.* command again
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbmodemB141F6A13
/dev/tty.debug-console			/dev/tty.wlan-debug
```

在这里，我们找到了新条目 `/dev/tty.usbmodemB141F6A13`，这是我们开发板的端口。

```shell
# Connect to the device with screen
# The default baud rate is 115200
screen /dev/tty.usbmodemB141F6A13 115200
```

现在串口输出将出现在终端中，您可以从中监控套件的输出日志。要退出 `screen` 会话，按 `Ctrl + A`，然后按 `Ctrl + \`。

<br />

**加入 LNS：**

<details>
<summary>输出：启动并加入 LNS</summary>

```shell
[00:00:00.046,323] <inf> lorawan: smtc_modem_join_network
[00:00:00.046,388] <inf> lorawan:  Start a new join sequence in 5 seconds on stack 0
[00:00:05.057,559] <inf> lorawan: DevEUI
                                  70 b3 d5 7e d0 07 44 86                          |p..~..D.         
[00:00:05.057,586] <inf> lorawan: JoinEUI
                                  00 00 00 00 00 00 00 00                          |........         
[00:00:05.057,624] <inf> lorawan: DevNonce 0x1d2, stack_id 0
...
[00:00:12.433,537] <inf> usp: Event received: JOINED
[00:00:12.433,543] <inf> usp: Modem is now joined 
[00:00:12.433,568] <inf> lorawan: add send task
[00:00:12.438,666] <inf> lorawan:  User LoRaWAN tx on FPort 101
```

</details>

- **周期性上行链路：** 设备每分钟使用从 `01` 开始递增的计数器在 `FPort 101` 上传一次数据。您可以在控制台上实时监控数据，如下所示：

<details>
<summary>输出：周期性上行链路</summary>

```shell
[00:00:18.811,852] <inf> lorawan:   *************************************
[00:00:18.811,879] <inf> lorawan:   *  TX DONE
[00:00:18.811,896] <inf> lorawan:   *************************************
[00:00:18.811,984] <inf> lorawan: 

[00:00:18.812,016] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:00:18.812,072] <inf> lorawan:   RX1 LoRa at 23841 ms: freq:867300000, SF12, BW125, sync word = 0x34
[00:00:18.812,102] <inf> lorawan:   Timer will expire in 5030 ms
[00:00:24.041,328] <inf> lorawan: 

[00:00:24.041,357] <inf> lorawan:   *************************************
[00:00:24.041,389] <inf> lorawan:   * RX1 Timeout for stack_id = 0
[00:00:24.041,407] <inf> lorawan:   *************************************
[00:00:24.041,498] <inf> lorawan: 

[00:00:24.041,530] <inf> lorawan:   Open Rx2 for Hook Id = 4
[00:00:24.041,585] <inf> lorawan:   RX2 LoRa at 24813 ms: freq:869525000, SF9, BW125, sync word = 0x34
[00:00:24.041,614] <inf> lorawan:   Timer will expire in 772 ms
[00:00:24.839,344] <inf> lorawan: 

[00:00:24.839,363] <inf> lorawan:   *************************************
[00:00:24.839,408] <inf> lorawan:   * RX2 Timeout for stack_id = 0
[00:00:24.839,426] <inf> lorawan:   *************************************
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_periodical_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**按钮触发上行链路：** 每次按下 `user_key` 都会触发立即数据上行链路，在 `FPort 102` 上将计数器递增 `1`。按钮触发的报告不会影响周期性报告的时间。

<details>
<summary>输出：按钮触发上行链路</summary>

```shell
[00:01:43.010,970] <inf> usp: Button pushed
[00:01:43.011,015] <inf> lorawan: add send task
[00:01:43.011,449] <inf> lorawan:  User LoRaWAN tx on FPort 102
[00:01:43.011,489] <inf> lorawan: 

[00:01:43.011,507] <inf> lorawan:   *************************************
[00:01:43.011,536] <inf> lorawan:   * Send Payload  for stack_id = 0
[00:01:43.011,553] <inf> lorawan:   *************************************
[00:01:43.011,627] <inf> lorawan:   Tx  LoRa at 107167 ms: freq:867100000, SF12, BW125, len 17 bytes 14 dBm, fcnt_up 4, toa = 1319
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_button_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**计划下行链路：** 在 TTN 的 `Messaging` 选项中计划下行链路数据包。指定帧端口（`FPort 1`）和数据内容（`AA BB CC DD`），然后点击 **Schedule downlink**。您可以观察到载荷现在正在队列中等待，一旦下一次上行链路到来，下行链路数据包将由网络服务器发送并被设备接收。

<details>
<summary>输出：下行链路接收</summary>

```shell
[00:02:14.666,960] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:02:14.667,016] <inf> lorawan:   RX1 LoRa at 139695 ms: freq:867100000, SF12, BW125, sync word = 0x34
[00:02:14.667,046] <inf> lorawan:   Timer will expire in 5029 ms
[00:02:20.837,445] <inf> lorawan: 

[00:02:20.837,477] <inf> lorawan:   *************************************
[00:02:20.837,523] <inf> lorawan:   * Receive a Valid downlink Rx1 for stack_id = 0, rssi: -121 dBm, snr: -9 dB
[00:02:20.837,540] <inf> lorawan:   *************************************
[00:02:20.837,594] <inf> usp: Event received: DOWNDATA
[00:02:20.837,625] <inf> usp: Event received: TXDONE
[00:02:20.837,630] <inf> usp: Transmission done 
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_config.png" style={{width:600, height:'auto'}}/></div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_payload.png" style={{width:600, height:'auto'}}/></div>


## 资源

### Semtech LR2021

- **[PDF]** [Semtech LR2021 数据手册](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ00000BIigz/OP1EbZuxbCU2JJQ7kD9ooPlC8c0u0TFp3e0WDJ5yrNQ)

- **[PDF]** [Semtech LR2021_EU868/US915 原理图](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XDCS_Wio-LR2021_e769v02a_868_915_sch_layout.pdf)

- **[PDF]** [Semtech LR2021_CN490 原理图](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XGCS_Wio_LR2021_e768v02a_490_sch_layout.pdf)

### 扩展板

- **[PDF]** [扩展板原理图](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR20xx_XIAO_LoRa_Plus_Expansion_Board_e758v03a_sch_layout.pdf)

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 引脚图表](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


## 认证



## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
