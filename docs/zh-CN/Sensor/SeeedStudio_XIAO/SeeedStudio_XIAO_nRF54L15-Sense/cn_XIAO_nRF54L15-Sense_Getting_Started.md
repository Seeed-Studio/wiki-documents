---
title: Seeed Studio XIAO nRF54L15(Sense)
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /cn/xiao_nrf54l15_sense_getting_started
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 0
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:600, height:'auto'}}/></div>

# Seeed Studio XIAO nRF54L15(Sense) 入门指南

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 介绍

**Seeed Studio XIAO nRF54L15** 是一款紧凑、高性能的开发板，搭载了前沿的 Nordic nRF54L15 芯片。这款下一代 SoC 集成了超低功耗多协议 2.4 GHz 无线电和包含 **128 MHz Arm® Cortex®-M33 处理器**以及用于高级电源管理的 **Arm® Cortex®-M0**+ 的 MCU。它提供可扩展的内存，最高可达 **1.5 MB NVM 和 256 KB RAM**，以及内部超低功耗设计，显著延长电池寿命。其强大的无线电支持 **Bluetooth® 6.0（包括信道探测）、Matter、Thread、Zigbee**，以及高达 **4 Mbps** 的高吞吐量 2.4 GHz 专有模式。该开发板包含全面的外设集、集成的 **128 MHz RISC-V 协处理器**，以及先进的安全功能，如 **TrustZone®** 隔离和加密引擎保护。凭借**内置锂离子电池管理**，XIAO nRF54L15 非常适合紧凑、安全且节能的物联网解决方案，如智能可穿戴设备、工业传感器和先进的人机界面。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 规格参数

<table align="center">
  <tr>
      <th>项目</th>
      <th>XIAO nRF54L15</th>
      <th>XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
      <th>MCU</th>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V 协处理器 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V 协处理器 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>无线连接</th>
      <td align="center">
        Bluetooth LE 6.0（包括信道探测）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        专有 2.4 GHz 协议<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（包括信道探测）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        专有 2.4 GHz 协议<br/>
      </td>
  </tr>
  <tr>
      <th>内存</th>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
  </tr>
  <tr>
      <th>内置传感器</th>
      <td align="center">无</td>
      <td align="center">6 轴 IMU(LSM6DS3TR-C)<br/>麦克风 (MSM261DGT006)</td>
  </tr>
  <tr>
      <th>发射功率</th>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
  </tr>
  <tr>
      <th>接收灵敏度</th>
      <td align="center">-96 dBm</td>
      <td align="center">-96 dBm</td>
  </tr>
  <tr>
      <th>主要外设</th>
      <td align="center">14 位 ADC，全局 RTC</td>
      <td align="center">14 位 ADC，全局 RTC</td>
  </tr>
  <tr>
      <th>电源</th>
      <td align="center">
        USB Type-C 接口供电<br/>
        内部 PMIC 支持锂电池供电<br/>
        支持锂电池电量采集
      </td>
      <td align="center">
        USB Type-C 接口供电<br/>
        内部 PMIC 支持锂电池供电<br/>
        支持锂电池电量采集
      </td>
  </tr>
  <tr>
      <th>工作温度</th>
      <td align="center">-40 至 105°C</td>
      <td align="center">-40 至 105°C</td>
  </tr>
  <tr>
      <th>供电电压范围</th>
      <td align="center">3.7 至 5 V</td>
      <td align="center">3.7 至 5 V</td>
  </tr>
  <tr>
      <th>ESB 和 2.4 GHz 专有协议</th>
      <td align="center">高达 4 Mbps</td>
      <td align="center">高达 4 Mbps</td>
  </tr>
  <tr>
      <th>篡改检测器</th>
      <td align="center">是</td>
      <td align="center">是</td>
  </tr>
  <tr>
      <th>蓝牙信道探测</th>
      <td align="center">是</td>
      <td align="center">是</td>
  </tr>
</table>

### 特性

- **强大的CPU**：128 MHz Arm® Cortex®-M33处理器，支持DSP指令和FPU浮点运算，32位RISC架构，集成128 MHz RISC-V协处理器。
- **超低功耗**：专为卓越的超低功耗设计，显著延长电池寿命，包含先进的电源管理。
- **多模式无线传输**：集成2.4 GHz多协议无线收发器，支持低功耗蓝牙（包括信道探测）、802.15.4-2020、Matter、Thread、Zigbee和2.4 GHz专有模式（高达4 Mbps）。
- **强大的安全性**：先进的安全特性，包括TrustZone®隔离、篡改检测和加密引擎侧的信道泄漏保护。
- **丰富的片上资源**：可扩展的存储器配置，高达1.5 MB NVM和256 KB RAM，提供充足的存储空间。
- **丰富的接口**：全面的外设集，包括新的全局RTC（在系统关闭模式下可用）、14位ADC和高速串行接口。内置锂电池管理。

## 硬件概述

<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>XIAO nRF54L15 正面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_front.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 背面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>XIAO nRF54L15 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
</table>

</TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>XIAO nRF54L15 Sense 正面指示图</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_Sense_Font.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 背面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>XIAO nRF54L15 Sense 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## nRFConnect SDK 使用

nRF Connect SDK (NCS) 是 Nordic Semiconductor 推出的可扩展、统一的软件开发套件，专门用于为基于 Nordic nRF52、nRF53、nRF54、nRF70 和 nRF91 系列的无线设备构建低功耗无线应用程序。

NCS 提供了丰富的现成示例应用程序、协议栈、库和硬件驱动程序生态系统，旨在简化开发过程并加快产品上市时间。其模块化和可配置的特性为开发人员提供了灵活性，既可以为内存受限的设备构建尺寸优化的软件，也可以为更高级和复杂的应用程序构建强大的功能。NCS 是一个托管在 GitHub 上的开源项目，为 Visual Studio Code 等集成开发环境提供了出色的支持。

### 在 VSCode 上使用 nRF Connect SDK

<details>

<summary>提前了解 nRF Connect SDK 安装知识</summary>

本文档详细介绍了如何在 Windows 11 计算机上安装 nRF Connect SDK 开发环境。以下是需要安装的工具概述

- 安装 VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect 插件

***如果您已经在计算机上预安装了它，可以通过以下命令检查工具的版本号***

</details>

<Steppers>

<!-- #### 安装 SEGGER J-Link v8.18
从 https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack 下载适用于您平台的安装程序。运行安装程序；当安装过程中出现"选择可选组件"窗口时，请务必勾选"为 J-Link 安装传统 USB 驱动程序"，这是某些支持的开发套件所需的组件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### 安装 nrfutil 和 nrfutil device 命令。

- 2.1. 从 https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs 下载与您的操作系统兼容的二进制文件，并将其保存到您的磁盘驱动器（例如 Windows）。对于 Windows，将其保存为 C:\nordic_tools\nrfutil.exe。
如果您使用的是 macOS 或 Linux，请将其保存在已添加到系统 PATH 的目录中（例如 /usr/bin/），您可以跳过步骤 2.2。

- 2.2. （Windows）更新系统的 PATH 以包含 nrfutil 的存储位置。打开"编辑帐户环境变量"并添加存储 nrfutil 二进制文件的路径（C:\nordic_tools\）。

- 2.3. 您刚刚下载的 nrfutil 二进制文件不包含任何预安装的命令。在此步骤中，我们将升级核心 nrfutil 并下载 device 命令。

- 2.3.1 为了确保我们拥有最新版本的 nrfutil，请在终端（命令提示符或 PowerShell）中运行以下命令。使用哪个终端并不重要，因为 nrfutil 在步骤 2.2 中已全局设置。
```cpp
nrfutil self-upgrade
```

- 2.3.2 安装 nrfutil device 命令
我们需要使用 device 命令将二进制文件烧录到开发套件中。
在您当前活动的终端中，输入：nrfutil install device
您应该看到以下输出：
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
``` -->

#### VScode configures the board and builds the burn-in file

Open VS Code and search for nRF Connect for VS Code Extension Pack in the Plugin Center. This plugin pack will automatically install other VS Code plugins required for nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
The nRF Connect for VS Code extension enables developers to utilize the popular Visual Studio Code Integrated Development Environment (VS Code IDE) to develop, build, debug and deploy embedded applications based on Nordic's nRF Connect SDK (Software Development Kit). The extension includes useful development tools such as a compiler interface, linker, complete build system, RTOS-enabled debugger, seamless interfacing with the nRF Connect SDK, device tree visualization editor, and an integrated serial terminal.
The nRF Connect extension package for VS Code includes the following components:

- nRF Connect for VS Code: The main extension contains the interface between the build system and the nRF Connect SDK, as well as an interface to manage the nRF Connect SDK version and toolchain.
- nRF DeviceTree: Provides device tree language support and a device tree visualization editor.
- nRF Kconfig: Provides Kconfig language support.
- nRF Terminal: Serial and RTT terminals.
- Microsoft C/C++: Adds language support for C/C++, including features of IntelliSense.
- CMake: CMake language support.
- GNU Linker Mapping Files: Support for linker mapping files.
We can download any preferred version of the nRF Connect SDK and its toolchain via the extension. The full nRF Connect for VS Code documentation is available at https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Installing the toolchain

The toolchain is a collection of tools that work together to build nRF Connect SDK applications, including assembler, compiler, linker, and CMake components.
The first time you open nRF Connect for VS Code, you will be prompted to install the toolchain. This usually happens if the extension does not detect any installed toolchain on your computer.
Click Install Toolchain and a list of toolchain versions will be listed that can be downloaded and installed on your computer. Select the version of the toolchain that matches the version of the nRF Connect SDK you plan to use. We always recommend using the latest tagged version of the nRF Connect SDK.

By default, nRF Connect for VS Code only displays the Released tab (i.e., the stable version) of the toolchain. If you are evaluating a new feature and would like to use the Preview tab or another type of tab (e.g. Customer Sampling -cs), click on "Show all toolchain versions" as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/toolchain2.png" style={{width:800, height:'auto'}}/></div>

:::note
**The ToolChain here is 3.0.1 or above**
:::

#### Installing the nRF Connect SDK

In the nRF Connect extension for VS Code, click on Manage SDK. from the Manage SDK menu, we can install or uninstall the nRF Connect SDK version. Since this is the first time we are using the extension, the interface will only show two options.

Clicking Install SDK will list all available nRF Connect SDK versions that can be downloaded and installed locally. Select the version of the nRF Connect SDK that is required for the development of your project.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

If you have opened the SDK folder in VS Code, instead of the Manage SDK menu option, you will see the Manage west workspace. To resolve this issue, open another window or folder in VS Code.

:::note
**The nRF Connect SDK here is 3.0.1 or above**
:::

:::tip
If you do not see either of these options, make sure you have the latest version of the nRF Connect for VS Code extension package installed.
It is important to note that the nRF Connect SDK is IDE independent, which means you can choose to use any IDE or none at all. The nRF Connect SDK is available via the https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) command line The  (nrfutil) command line interface (CLI) will download and install nRF Connect. However, we highly recommend using our nRF Connect for VS Code extension with VS Code, as it integrates not only a convenient graphical user interface (GUI) and an efficient command line interface (CLI), but also includes a number of features that will greatly simplify firmware development. Configuring other IDEs to work with the nRF Connect SDK requires additional manual steps beyond the scope of this course.
:::

#### Creating User Programs

In this exercise we will write a simple application based on the blinky example to control blinking LEDs on a development board. The same applies to all supported NordicSemiconductor development boards (nRF54, nRF53, nRF52, nRF70 or nRF91 series). The goal is to make sure that all the tools needed to build and burn the example are set up correctly. The focus is on learning how to create an application, build it and burn it to a Nordic chip development board using the “Copy Example” template!

- In VS Code, click the nRF Connect extension icon. In the Welcome view, click Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Type blinky in the search bar and select the second Blinky sample (path zephyr/samples/basic/blinky), as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

The Blinky example will cause the LED1 on the development board to blink continuously.
Our first application will be based on the Blinky example. The Blinky example is derived from the Zephyr mold block in the nRF Connect SDK, so you will see the zephyr name in the sample path: zephyr\samples\basic\blinky.

#### Add XIAO nRF54L15 Board

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

To get started, **clone the repository from the GitHub link**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` into your preferred local folder. Once cloned, navigate to the `platform-seeedboards/zephyr/` directory. **Remember this `zephyr` folder Path**;

To configure your board for nRF Connect in VS Code, you can follow these steps:

- Open VS Code and go to Settings.

- Type nRF Connect in the search box.

- Find the Board Roots settings item and click Edit in settings.json.

- Add the `zephyr` path of the downloaded XIAO nRF54L15 board file to the boardRoots array.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board1.png" style={{width:800, height:'auto'}}/></div>

- In the application view, click Add Build Configuration below the application name .

- We can select the model of XIAO nRF54L15 in the Board target, and select the default prj.config file in the Base configuration files, and finally click `Generate and Build` to build the file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board2.png" style={{width:800, height:'auto'}}/></div>

#### Download Burn-in Plug-in

<Tabs>
<TabItem  value="window" label="Window" default>

**Additional Plugins:**

On Windows, we'll use the Chocolatey package manager to install OpenOCD.

**1.Open PowerShell (Run as Administrator):**

- In the Windows search bar, type "PowerShell".
- Right-click "Windows PowerShell" and select "Run as administrator".

**2.Check PowerShell Execution Policy:**

- Type `Get-ExecutionPolicy` and press Enter.
- Type `Get-ExecutionPolicy -List` and press Enter.

**3.Install Chocolatey:**

- Paste and run the following command:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

此命令会绕过当前 PowerShell 会话的执行策略并安装 Chocolatey。安装完成后，关闭并重新打开 PowerShell 窗口（仍需以管理员身份运行）。

**4.安装 OpenOCD：**

- 在新的 PowerShell 窗口中（以管理员身份），输入：

```cpp
choco install openocd
```

**5.验证 OpenOCD 安装：**

- 输入 `Get-Command openocd` 并按回车键。

- 如果安装成功，此命令将显示 openocd.exe 的路径。

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**附加插件：**

在 macOS 上，我们将使用 Homebrew 包管理器来安装必要的工具。

**1.安装 Homebrew（如果尚未安装）：**

- 打开 Terminal.app。

- 运行以下命令：

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 按照屏幕提示操作；您可能需要输入 macOS 用户密码。安装完成后，运行终端提示的命令将 Homebrew 添加到您的 PATH 环境变量中 `(例如，eval "$(/opt/homebrew/bin/brew shellenv)")`。然后关闭并重新打开终端。

**2.安装 Ccache：**

在终端中输入：

```cpp
brew install ccache
```

**3.Install OpenOCD:**

In the terminal, type:

```cpp
brew install openocd
```

**4.验证 OpenOCD 安装：**

- 输入 `which openocd` 并按回车键。

- 如果安装成功，此命令将显示 `openocd` 可执行文件的路径。

</TabItem>

</Tabs>

#### West Flash 烧录程序

- 打开 nRF 终端

- 只需输入 `west flash` 命令，要烧录您的设备，只需输入 west flash 命令。红色高亮显示的路径表示您编译的 .elf 文件的位置。您可以使用相同的路径找到对应的 .hex 文件，该文件适用于使用 J-Link 调试器进行编程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/west_flash_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
如果出现 west flash 错误，说明与 VS Code 中的 CMake 插件存在冲突，您需要移除 CMake 插件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
:::

当我们成功在 Seeed Studio XIAO nRF54L15 Sense 中烧录程序后，您可以看到板子上方的用户指示灯不停地闪烁绿光，如果您的板子也有相同的效果，说明您已经成功了！🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### Blinky 程序说明

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

/* 1000 msec = 1 sec */
#define SLEEP_TIME_MS   1000

/* The devicetree node identifier for the "led0" alias. */
#define LED0_NODE DT_ALIAS(led0)

/*
 * A build error on this line means your board is unsupported.
 * See the sample documentation for information on how to fix this.
 */
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
int ret;
bool led_state = true;

if (!gpio_is_ready_dt(&led)) {
  return 0;
}

ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
if (ret < 0) {
  return 0;
}

while (1) {
  ret = gpio_pin_toggle_dt(&led);
  if (ret < 0) {
    return 0;
  }

  led_state = !led_state;
  printf("LED state: %s\n", led_state ? "ON" : "OFF");
  k_msleep(SLEEP_TIME_MS);
}
return 0;
}
```

**LED设备定义**：

- `#define LED0_NODE DT_ALIAS(led0)`：检索"led0"别名的设备树节点标识符，实现对LED的硬件无关引用。
- `static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios)`：使用设备树节点创建GPIO规范结构体（`led`），包含LED的硬件详细信息（引脚、端口）。此处出现构建错误表示硬件不受支持。

**main()函数初始化**：

- **变量设置**：
  - `int ret`：存储函数返回值以检查操作是否成功。
  - `bool led_state = true`：跟踪LED状态（初始化为"开启"）。

- **GPIO就绪检查**：
  - `if (!gpio_is_ready_dt(&led)) { return 0; }`：验证LED的GPIO硬件是否就绪（例如，驱动程序已加载）。如果未就绪则退出。

- **GPIO配置**：
  - `ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE)`：将LED的GPIO引脚配置为高电平有效输出。
  - 失败时退出（`ret < 0`）以防止无效操作。

**主循环**：
在无限`while (1)`循环中运行，定期切换LED状态：

- **切换LED状态**：
  - `ret = gpio_pin_toggle_dt(&led)`：翻转LED的GPIO输出（开启 ↔ 关闭）。失败时退出。

- **更新状态跟踪**：
  - `led_state = !led_state`：将软件状态标志与硬件状态同步。

- **日志记录和延时**：
  - `printf("LED state: %s\n", led_state ? "ON" : "OFF")`：通过串口输出打印当前LED状态。
  - `k_msleep(SLEEP_TIME_MS)`：使用Zephyr的RTOS延时函数暂停1000毫秒（1秒），控制闪烁频率。

#### 深入了解nRF Connect SDK内部原理

如果您想更深入地了解nRF Connect SDK的内部原理，可以参考以下课程：

- [**nRF Connect SDK基础**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK中级**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## 访问J-Link引脚以烧录程序

如果您想使用JLink进行编程，可以按照以下步骤操作。但是，我们建议您使用Seeed Studio XIAO nRF54L15板载的串口进行编程，这样会更加方便。

**所需硬件**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
您需要下载最新版本的J-Link以获得nRF54L15型号板的支持。
:::

**所需软件**

需要从网站下载[Segger](https://www.segger.com/downloads/jlink/)软件。

- **步骤1.** 使用Jlink连接以下引脚：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **步骤2.** 启动J-Flash并搜索nRF54L15_M33，创建新项目：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤3.** 点击"Target"然后选择"Connect"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤4.** 将bin或[hex文件](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex)拖拽到软件中。然后依次按F4和F5。重新烧录完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## 电池供电板

XIAO nRF54L15 内置电源管理芯片，允许 XIAO nRF54L15 通过电池独立供电，或通过 XIAO nRF54L15 的 USB 端口为电池充电。

如果您想为 XIAO 连接电池，我们建议您购买符合规格的可充电 3.7V 锂电池。焊接电池时，请注意区分正负极。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>电池连接示意图</em></p>
</div>

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. XIAO nRF54L15 在电池供电时不会有任何 LED 亮起（除非您编写了特定程序），请不要通过 LED 状态来判断 XIAO nRF54L15 是否工作，请通过您的程序合理判断。

同时，我们为电池充电设计了红色指示灯，通过指示灯显示来告知用户电池当前的充电状态。

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
焊接时请注意不要短路正负极，以免烧坏电池和设备。
:::

### 电池电压检测

XIAO nRF54L15 集成了电池电压检测功能，该功能以使用 TPS22916CYFPR 负载开关高效管理电池功率测量为核心。本指南将重点分析电池检测的软件实现**（特别是 main.c 代码）**，并指导您如何在 PlatformIO 环境中轻松部署和使用此功能，避免 Zephyr NCS SDK 的复杂性。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>电池检测示意图</em></p>
</div>

TPS22916CYFPR 芯片的作用：

- 它是一个智能电源开关，按需控制电池电压的通断。当需要测量电池电压时，它会开启，将电池连接到分压电路；当不需要测量时，它会关闭，断开连接。

- 这个功能帮助我们做什么？
通过这种按需开关机制，该芯片大大减少了不必要的电流消耗，有效延长电池寿命。结合后续的分压电路和 nRF54L15 的 ADC（模数转换器），XIAO nRF54L15 能够准确监控电池剩余电量，为电池供电的低功耗应用（如物联网设备）提供重要的续航优化。

:::note
以下示例代码是为 PlatformIO 设计的，但它也兼容 nRF Connect SDK。

在 PlatformIO 中使用 XIAO nRF54L15
如果您想在 PlatformIO 中使用 XIAO nRF54L15，请参考此教程进行配置：[XIAO nRF54L15 PlatformIO 配置](https://wiki.seeedstudio.com/xiao_nrf54l15_with_platform_io/)。

:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 添加覆盖文件并修改配置文件

如果您想在 nRF Connect SDK 中使用此电池例程，您需要添加 app.overlay 并修改 prj.conf 文件。

- 在项目目录下创建一个名为 `app.overlay` 的新文件。然后将以下代码粘贴到其中，最后按 Ctrl + S 保存。

  - 覆盖文件扩展了硬件描述层，通过设备树自定义物理硬件连接。它不修改代码逻辑，而是声明实际的硬件细节，以确保驱动程序能够正确初始化物理设备。
<br />
  <details>

  <summary>app.overlay 代码</summary>

  ```cpp
  / {
  /*
    * @brief Device Tree Overlay for XIAO nRF54L15
    *
    * This file customizes the base board device tree to configure
    * peripherals for a specific application, including:
    * - User-defined ADC channels
    * - PWM-controlled LED
    * - Buttons and a relay
    * - E-paper display (UC8179) via SPI
    * - OLED display (SSD1306) via I2C
    *
    * To switch between the two displays, simply uncomment one and comment
    * out the other in the "chosen" node below.
    */

  /************************************************************
    * Aliases for easy access to devices in application code
    ************************************************************/
  aliases {
    pwm-led = &pwm0_led0;
    sw1 = &xiao_button0;
    relay0 = &xiao_relay0;
  };

  /************************************************************
    * Display selection (choose one if multiple)
    ************************************************************/
  chosen {
    zephyr,display = &uc8179_7inch5_epaper_gdew075t7;
    zephyr,display = &ssd1306_128x64;
  };

  /************************************************************
    * PWM LED, Button, and Relay configuration
    ************************************************************/
  pwm_leds {
    compatible = "pwm-leds";
    pwm0_led0: my_pwm_led {
      // PWM channel 0 on PWM instance 20
      // PWM_MSEC(20) sets a period of 20ms
      pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
      status = "okay";
    };
  };

  buttons {
    compatible = "gpio-keys";
    xiao_button0: button_0 {
      // Connect to the XIAO nRF54L15 pin D1
      // GPIO_PULL_UP ensures the pin is high when the button is not pressed
      // GPIO_ACTIVE_LOW means the button press drives the pin low
      gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
      zephyr,code = <INPUT_KEY_0>;
    };
  };

  relay {
    compatible = "gpio-leds";
    xiao_relay0: relay_0 {
      // Connect to the XIAO nRF54L15 pin D0
      gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
    };
  };

  /************************************************************
    * Local nodes that don't modify existing ones
    ************************************************************/
  zephyr,user {
    io-channels = <&adc 0>, <&adc 1>, <&adc 2>, <&adc 3>,
            <&adc 4>, <&adc 5>, <&adc 6>, <&adc 7>;
  };

  // MIPI-DBI SPI interface for the E-paper display
  mipi_dbi_xiao_epaper {
    compatible = "zephyr,mipi-dbi-spi";
    spi-dev = <&xiao_spi>;
    // D3 pin for Data/Command control
    dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
    // D0 pin for Reset
    reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;
    write-only;
    #address-cells = <1>;
    #size-cells = <0>;

    uc8179_7inch5_epaper_gdew075t7: uc8179@0 {
      compatible = "gooddisplay,gdew075t7", "ultrachip,uc8179";
      // Max SPI frequency for the display
      mipi-max-frequency = <4000000>;
      reg = <0>;
      width = <800>;
      height = <480>;
      // D2 pin for Busy signal from the display
      busy-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;
      softstart = [17 17 17 17];
      full {
        pwr = [07 07 3f 3f];
        cdi = <07>;
        tcon = <0x22>;
      };
    };
  };
  };

  /************************************************************
  * Device fragments (modifying nodes from the base board DTS)
  ************************************************************/
  // PWM instance 20
  &pwm20 {
  status = "okay";
  pinctrl-0 = <&pwm20_default>;
  pinctrl-1 = <&pwm20_sleep>;
  pinctrl-names = "default", "sleep";
  };

  // GPIO pin control
  &pinctrl {
  pwm20_default: pwm20_default {
    group1 {
      // Configure PWM channel 0 on P1.04 pin (Pin D0)
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
    };
  };

  pwm20_sleep: pwm20_sleep {
    group1 {
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
      low-power-enable;
    };
  };
  };

  // PDM instance 20 for DMIC
  dmic_dev: &pdm20 {
  status = "okay";
  };

  // Power configuration
  &pdm_imu_pwr {
  /delete-property/ regulator-boot-on;
  };

  // UART instance 20
  &uart20 {
  current-speed = <921600>;
  };

  // SPI peripheral
  &xiao_spi {
  status = "okay";
  // D1 pin for Chip Select
  cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
  };

  // I2C peripheral
  &xiao_i2c {
  status = "okay";
  zephyr,concat-buf-size = <2048>;

  ssd1306_128x64: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
  };
  ```

  </details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_overlay1.png" style={{width:800, height:'auto'}}/></div>

- 在 prj.conf 文件下添加以下内容

  - prj.conf 是 Zephyr 项目的核心配置文件。它由 Kconfig 系统管理，用于在编译期间选择软件功能。它决定了固件中包含哪些驱动程序（如 ADC、显示器、蓝牙）、中间件（如 LVGL）和系统服务（如日志记录、内存管理），并设置它们的行为参数（如日志级别、堆大小），最后按 Ctrl + S 保存。
<br />
  <details>

  <summary>prj.conf 代码</summary>

    ```python
    # =========================================================
    # Basic system configuration
    # =========================================================
    CONFIG_GPIO=y
    CONFIG_I2C=y
    CONFIG_ADC=y
    CONFIG_ADC_ASYNC=y
    CONFIG_PWM=y
    CONFIG_SENSOR=y
    CONFIG_INPUT=y

    # =========================================================
    # Power management
    # =========================================================
    CONFIG_PM_DEVICE=y
    CONFIG_NRFX_POWER=y
    CONFIG_POWEROFF=y
    CONFIG_HWINFO=y
    CONFIG_CRC=y

    # =========================================================
    # Serial port and console configuration
    # =========================================================
    CONFIG_SERIAL=y
    CONFIG_CONSOLE=y
    CONFIG_STDOUT_CONSOLE=y
    CONFIG_UART_CONSOLE=y
    CONFIG_UART_ASYNC_API=y
    CONFIG_UART_INTERRUPT_DRIVEN=y
    CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y
    CONFIG_CBPRINTF_FP_SUPPORT=y

    # =========================================================
    # Log and Debugging
    # =========================================================
    CONFIG_LOG=y
    CONFIG_LOG_PRINTK=y
    CONFIG_LOG_MODE_IMMEDIATE=y
    CONFIG_LOG_DEFAULT_LEVEL=3
    CONFIG_PWM_LOG_LEVEL_DBG=y
    CONFIG_PRINTK=y

    # =========================================================
    #  Memory and Stack
    # =========================================================
    CONFIG_MAIN_STACK_SIZE=4096
    CONFIG_HEAP_MEM_POOL_SIZE=16384
    CONFIG_NEWLIB_LIBC=y
    CONFIG_NEWLIB_LIBC_FLOAT_PRINTF=y

    # =========================================================
    # Bluetooth configuration
    # =========================================================
    CONFIG_BT=y
    CONFIG_BT_PERIPHERAL=y
    CONFIG_BT_DEVICE_NAME="zephyr-ble"

    # =========================================================
    # Audio configuration
    # =========================================================
    CONFIG_AUDIO=y
    CONFIG_AUDIO_DMIC=y

    # =========================================================
    # Display and Graphics
    # =========================================================
    CONFIG_DISPLAY=y
    CONFIG_MIPI_DBI_SPI=y
    CONFIG_SSD1306=y
    CONFIG_CHARACTER_FRAMEBUFFER=y

    # LVGL Graphics Library
    CONFIG_LVGL=y
    CONFIG_LV_Z_MEM_POOL_SIZE=49152
    CONFIG_LV_Z_SHELL=y
    CONFIG_LV_USE_MONKEY=y
    CONFIG_LV_USE_LABEL=y
    CONFIG_LV_COLOR_DEPTH_1=y
    CONFIG_LV_FONT_MONTSERRAT_12=y
    CONFIG_LV_FONT_MONTSERRAT_14=y
    CONFIG_LV_FONT_MONTSERRAT_16=y
    CONFIG_LV_FONT_MONTSERRAT_18=y
    CONFIG_LV_FONT_MONTSERRAT_24=y
    CONFIG_LV_USE_FONT_COMPRESSED=y

    # =========================================================
    # Shell configuration
    # =========================================================
    CONFIG_SHELL=y
    CONFIG_SHELL_BACKEND_DUMMY=y
    ```

  </details>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_prj1.png" style={{width:800, height:'auto'}}/></div>

### 核心代码

```cpp
#include <inttypes.h>
#include <stddef.h>
#include <stdint.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/kernel.h>


#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
 !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
 ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
 DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
       DT_SPEC_AND_COMMA)};

static const struct device *const vbat_reg = DEVICE_DT_GET(DT_NODELABEL(vbat_pwr));

int main(void)
{
 int err;
 uint16_t buf;
 int32_t val_mv;
 struct adc_sequence sequence = {
  .buffer = &buf,
  /* buffer size in bytes, not number of samples */
  .buffer_size = sizeof(buf),
 };

 regulator_enable(vbat_reg);
 k_sleep(K_MSEC(100));

 /* Configure channels individually prior to sampling. */
 if (!adc_is_ready_dt(&adc_channels[7]))
 {
  printf("ADC controller device %s not ready\n", adc_channels[7].dev->name);
  return 0;
 }

 err = adc_channel_setup_dt(&adc_channels[7]);
 if (err < 0)
 {
  printf("Could not setup channel #7 (%d)\n", err);
  return 0;
 }

 (void)adc_sequence_init_dt(&adc_channels[7], &sequence);

 err = adc_read_dt(&adc_channels[7], &sequence);
 if (err < 0)
 {
  printf("Could not read (%d)\n", err);
  return 0;
 }

 /*
  * If using differential mode, the 16 bit value
  * in the ADC sample buffer should be a signed 2's
  * complement value.
  */
 if (adc_channels[7].channel_cfg.differential)
 {
  val_mv = (int32_t)((int16_t)buf);
 }
 else
 {
  val_mv = (int32_t)buf;
 }
 err = adc_raw_to_millivolts_dt(&adc_channels[7],
           &val_mv);
 /* conversion to mV may not be supported, skip if not */
 if (err < 0)
 {
  printf(" value in mV not available\n");
 }
 else
 {
  printf("bat vol = %" PRId32 " mV\n", val_mv * 2);
 }

 regulator_disable(vbat_reg);
 return 0;
}
```

## 资源

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD 库文件](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF 格式尺寸图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Seeed Studio XIAO nRF54L15 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 Sense KiCAD 库文件](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Sense DXF 格式尺寸图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 Sense 引脚定义表](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

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
