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

**Seeed Studio XIAO nRF54L15** 是一款紧凑、高性能的开发板，搭载了前沿的 Nordic nRF54L15 芯片。这款下一代 SoC 集成了超低功耗多协议 2.4 GHz 无线电和包含 **128 MHz Arm® Cortex®-M33 处理器**以及用于高级电源管理的 **Arm® Cortex®-M0**+ 的 MCU。它提供高达 **1.5 MB NVM 和 256 KB RAM** 的可扩展内存，以及显著延长电池寿命的内部超低功耗设计。其强大的无线电支持 **Bluetooth® 6.0（包括信道探测）、Matter、Thread、Zigbee**，以及高达 **4 Mbps** 的高吞吐量 2.4 GHz 专有模式。该开发板包含全面的外设集、集成的 **128 MHz RISC-V 协处理器**，以及诸如 **TrustZone®** 隔离和加密引擎保护等高级安全功能。凭借**内置锂离子电池管理**，XIAO nRF54L15 非常适合紧凑、安全且节能的物联网解决方案，如智能可穿戴设备、工业传感器和高级人机界面。

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

- **强大的 CPU**：128 MHz Arm® Cortex®-M33 处理器，支持 DSP 指令和 FPU 浮点运算，32 位 RISC 架构，集成 128 MHz RISC-V 协处理器。
- **超低功耗**：专为卓越的超低功耗而设计，显著延长电池寿命，包含高级电源管理。
- **多模式无线传输**：集成 2.4 GHz 多协议无线收发器，支持低功耗蓝牙（包括信道探测）、802.15.4-2020、Matter、Thread、Zigbee 和 2.4 GHz 专有模式（高达 4 Mbps）。
- **强大的安全性**：高级安全功能，包括 TrustZone® 隔离、篡改检测和加密引擎侧的信道泄漏保护。
- **丰富的片上资源**：可扩展内存配置，高达 1.5 MB NVM 和 256 KB RAM，提供充足的存储空间。
- **丰富的接口**：全面的外设集，包括新的全局 RTC（在系统关闭模式下可用）、14 位 ADC 和高速串行接口。内置锂电池管理。

## 硬件概述
<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>XIAO nRF54L15 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 正面示意图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 背面示意图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>XIAO nRF54L15 Sense 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 正面示意图</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 背面示意图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>


## nRFConnect SDK 使用
nRF Connect SDK (NCS) 是 Nordic Semiconductor 推出的一个可扩展、统一的软件开发套件，专门为基于 Nordic nRF52、nRF53、nRF54、nRF70 和 nRF91 系列的无线设备构建低功耗无线应用而设计。

NCS 提供了丰富的现成示例应用程序、协议栈、库和硬件驱动程序生态系统，旨在简化开发过程并加快产品上市时间。其模块化和可配置的特性为开发者提供了灵活性，既可以为内存受限的设备构建尺寸优化的软件，也可以为更高级和复杂的应用程序提供强大的功能。NCS 是一个托管在 GitHub 上的开源项目，为 Visual Studio Code 等集成开发环境提供了出色的支持。

### 使用 Vscode 安装

<details>

<summary>提前了解 nRF Connect SDK 安装知识</summary>

本文档详细介绍了如何在 Windows 11 计算机上安装 nRF Connect SDK 开发环境。以下是需要安装的工具概述
- Visual Studio Code
- nRF Command Line Tools
- nRF Connect for Desktop
- Git

```cpp
git --version
```

- Python

```cpp
python --version
```

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

***如果您已经在计算机上预安装了这些工具，可以通过以下命令检查工具的版本号***

</details>


<Steppers>

<!-- #### 安装 SEGGER J-Link v8.18
从 https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack 下载适用于您平台的安装程序。运行安装程序；在安装过程中出现"选择可选组件"窗口时，请务必勾选"为 J-Link 安装传统 USB 驱动程序"，这是某些支持的开发套件所需的组件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### 安装 nrfutil 和 nrfutil device 命令。

- 2.1. 从 https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs 下载与您的操作系统兼容的二进制文件，并将其保存到您的磁盘驱动器（例如 Windows）。对于 Windows，将其保存为 C:\nordic_tools\nrfutil.exe。
如果您使用的是 macOS 或 Linux，请将其保存在已添加到系统 PATH 的目录中（例如 /usr/bin/），您可以跳过步骤 2.2。

- 2.2. （Windows）更新系统的 PATH 以包含 nrfutil 的存储位置。打开"编辑帐户环境变量"并添加存储 nrfutil 二进制文件的路径（C:\nordic_tools\）。

- 2.3. 您刚刚下载的 nrfutil 二进制文件不包含任何预安装的命令。在此步骤中，我们将升级核心 nrfutil 并下载 device 命令。

- 2.3.1 为确保我们拥有最新版本的 nrfutil，请在终端（命令提示符或 PowerShell）中运行以下命令。使用哪个终端都无关紧要，因为 nrfutil 在步骤 2.2 中已全局设置。

```cpp
nrfutil self-upgrade
```

- 2.3.2 安装 nrfutil device 命令
我们需要使用 device 命令将二进制文件烧录到开发套件中。
在您当前活动的终端中，输入：nrfutil install device
您应该看到以下输出：

```cpp
[00:00:02] ###### 100% [Install packages] Install packages
```

#### VScode 配置开发板并构建烧录文件

***1.安装 VS Studio Code***
[Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

2.打开 VS Code 并在插件中心搜索 nRF Connect for VS Code Extension Pack。这个插件包会自动安装 nRF Connect 所需的其他 VS Code 插件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>

nRF Connect for VS Code 扩展使开发者能够利用流行的 Visual Studio Code 集成开发环境（VS Code IDE）来开发、构建、调试和部署基于 Nordic nRF Connect SDK（软件开发工具包）的嵌入式应用程序。该扩展包含有用的开发工具，如编译器接口、链接器、完整的构建系统、支持 RTOS 的调试器、与 nRF Connect SDK 的无缝接口、设备树可视化编辑器和集成串行终端。
VS Code 的 nRF Connect 扩展包包含以下组件：
- nRF Connect for VS Code：主扩展包含构建系统与 nRF Connect SDK 之间的接口，以及管理 nRF Connect SDK 版本和工具链的接口。
- nRF DeviceTree：提供设备树语言支持和设备树可视化编辑器。
- nRF Kconfig：提供 Kconfig 语言支持。
- nRF Terminal：串行和 RTT 终端。
- Microsoft C/C++：为 C/C++ 添加语言支持，包括 IntelliSense 功能。
- CMake：CMake 语言支持。
- GNU Linker Mapping Files：支持链接器映射文件。
我们可以通过扩展下载任何首选版本的 nRF Connect SDK 及其工具链。完整的 nRF Connect for VS Code 文档可在 https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html 获取。

#### 安装工具链
工具链是一组协同工作来构建 nRF Connect SDK 应用程序的工具集合，包括汇编器、编译器、链接器和 CMake 组件。
第一次打开 nRF Connect for VS Code 时，系统会提示您安装工具链。如果扩展在您的计算机上未检测到任何已安装的工具链，通常会发生这种情况。
点击 Install Toolchain，将列出可以下载并安装到您计算机上的工具链版本列表。选择与您计划使用的 nRF Connect SDK 版本匹配的工具链版本。我们始终建议使用最新标记版本的 nRF Connect SDK。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown1.png" style={{width:600, height:'auto'}}/></div>

默认情况下，nRF Connect for VS Code 只显示工具链的 Released 选项卡（即稳定版本）。如果您正在评估新功能并希望使用 Preview 选项卡或其他类型的选项卡（例如 Customer Sampling -cs），请点击"Show all toolchain versions"，如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown2.png" style={{width:600, height:'auto'}}/></div>

:::note
**这里的 ToolChain 是 3.0.1 或以上版本**
:::
#### 安装 nRF Connect SDK
在 VS Code 的 nRF Connect 扩展中，点击 Manage SDK。从 Manage SDK 菜单中，我们可以安装或卸载 nRF Connect SDK 版本。由于这是我们第一次使用该扩展，界面将只显示两个选项。
 
点击 Install SDK 将列出所有可以下载并本地安装的可用 nRF Connect SDK 版本。选择您项目开发所需的 nRF Connect SDK 版本。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown3.png" style={{width:600, height:'auto'}}/></div>

如果您已经在 VS Code 中打开了 SDK 文件夹，您将看到 Manage west workspace 而不是 Manage SDK 菜单选项。要解决此问题，请在 VS Code 中打开另一个窗口或文件夹。

:::note
**这里的 nRF Connect SDK 是 3.0.1 或以上版本**
:::

:::tip
如果您没有看到这些选项中的任何一个，请确保您已安装最新版本的 nRF Connect for VS Code 扩展包。
需要注意的是，nRF Connect SDK 是独立于 IDE 的，这意味着您可以选择使用任何 IDE 或完全不使用。nRF Connect SDK 可通过 https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) 命令行界面（CLI）下载和安装 nRF Connect。但是，我们强烈建议将我们的 nRF Connect for VS Code 扩展与 VS Code 一起使用，因为它不仅集成了便捷的图形用户界面（GUI）和高效的命令行界面（CLI），还包含许多将大大简化固件开发的功能。配置其他 IDE 以与 nRF Connect SDK 配合使用需要额外的手动步骤，超出了本课程的范围。
:::


#### 创建用户程序

在本练习中，我们将基于 blinky 示例编写一个简单的应用程序来控制开发板上的闪烁 LED。这同样适用于所有支持的 NordicSemiconductor 开发板（nRF54、nRF53、nRF52、nRF70 或 nRF91 系列）。目标是确保构建和烧录示例所需的所有工具都正确设置。重点是学习如何使用"Copy Example"模板创建应用程序、构建它并将其烧录到 Nordic 芯片开发板！

- 在 VS Code 中，点击 nRF Connect 扩展图标。在 Welcome 视图中，点击 Create New Application。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky.png" style={{width:600, height:'auto'}}/></div>

- 在搜索栏中输入 blinky 并选择第二个 Blinky sample（路径 zephyr/samples/basic/blinky），如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky2.png" style={{width:600, height:'auto'}}/></div>

Blinky 示例将使开发板上的 LED1 持续闪烁。
我们的第一个应用程序将基于 Blinky 示例。Blinky 示例来源于 nRF Connect SDK 中的 Zephyr 模块，因此您会在示例路径中看到 zephyr 名称：zephyr\samples\basic\blinky。

#### 添加 XIAO nRF54L15 开发板

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


首先，**从 GitHub 链接克隆仓库**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` 到您首选的本地文件夹。克隆完成后，导航到 `platform-seeedboards/zephyr/boards` 目录。**记住这个 `boards` 文件夹路径**；

要在 VS Code 中为 nRF Connect 配置您的开发板，您可以按照以下步骤操作：

- 打开 VS Code 并进入设置。

- 在搜索框中输入 nRF Connect。

- 找到 Board Roots 设置项并点击在 settings.json 中编辑。

- 将下载的 XIAO nRF54L15 开发板文件路径添加到 boardRoots 数组中。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/addboard.jpg" style={{width:600, height:'auto'}}/></div>

- 在应用程序视图中，点击应用程序名称下方的添加构建配置。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config3.png" style={{width:600, height:'auto'}}/></div>

- 我们可以在 Board target 中选择 XIAO nRF54L15 的型号，在 Base configuartion files 中选择默认的 prj.config 文件，最后点击 `Generate and Build` 来构建文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config2.jpg" style={{width:600, height:'auto'}}/></div>

#### 下载烧录插件

<Tabs>
<TabItem  value="window" label="Window" default>

**附加插件：**

在 Windows 上，我们将使用 Chocolatey 包管理器来安装 OpenOCD。

**1.打开 PowerShell（以管理员身份运行）：**

- 在 Windows 搜索栏中，输入"PowerShell"。
- 右键点击"Windows PowerShell"并选择"以管理员身份运行"。

**2.检查 PowerShell 执行策略：**

- 输入 `Get-ExecutionPolicy` 并按回车。
- 输入 `Get-ExecutionPolicy -List` 并按回车。

**3.安装 Chocolatey：**
- 粘贴并运行以下命令：

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

此命令会绕过当前 PowerShell 会话的执行策略并安装 Chocolatey。安装完成后，关闭并重新打开 PowerShell 窗口（仍以管理员身份运行）。

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

在终端中，输入：

```cpp
brew install ccache
```

**3.安装 OpenOCD：**

在终端中，输入：

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
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn12.png" style={{width:600, height:'auto'}}/></div>

- 只需输入 `west flash` 命令，要烧录您的设备，只需输入 west flash 命令。红色高亮显示的路径表示您编译的 .elf 文件的位置。您可以使用相同的路径找到对应的 .hex 文件，该文件适用于使用 J-Link 调试器进行编程。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn13.png" style={{width:600, height:'auto'}}/></div>

:::tip
如果出现 west flash 错误，说明与 VS Code 中的 CMake 插件存在冲突，您需要移除 CMake 插件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:600, height:'auto'}}/></div>
:::
#### 点亮 LED

当我们成功在 Seeed Studio XIAO nRF54L15 Sense 中烧录程序后，您可以看到板子上方的用户指示灯在不停地闪烁绿光，如果您的手中也有相同的渲染效果，说明您已经成功点亮了它！🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### 深入了解 nRF Connect SDK 内部机制
要真正掌握 nRF Connect SDK，您需要从内到外了解其构建模块。跳转到这些课程来提升您的知识：

- [**nRF Connect SDK 基础**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK 中级**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>


## 电池供电板
XIAO nRF54L15 内置电源管理芯片，允许 XIAO nRF54L15 通过电池独立供电，或通过 XIAO nRF54L15 的 USB 端口为电池充电。

如果您想为 XIAO 连接电池，我们建议您购买合格的可充电 3.7V 锂电池。焊接电池时，请注意区分正负极。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>电池连接示意图</em></p>
</div>

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. XIAO nRF54L15 在电池供电时不会有任何 LED 亮起（除非您编写了特定程序），请不要通过 LED 的状态来判断 XIAO nRF54L15 是否工作，请通过您的程序合理判断。

同时，我们为电池充电设计了红色指示灯，通过指示灯显示来告知用户电池当前的充电状态。

<!-- 1. 当 XIAO nRF54L15 未连接电池时，连接 Type-C 线缆时红灯亮起，30 秒后熄灭。
2. 连接电池并连接 Type-C 线缆充电时，红灯闪烁。
3. 连接 Type-C 为电池充满电时，红灯熄灭。 -->

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
- 它是一个智能电源开关，按需控制电池电压的通断。当需要测量电池电压时，它会导通，将电池连接到分压电路；当不需要测量时，它会关断，断开连接。

- 这个功能帮助我们做什么？
通过这种按需切换机制，芯片大大减少了不必要的电流消耗，有效延长电池寿命。结合后续的分压电路和 nRF54L15 的 ADC（模数转换器），XIAO nRF54L15 能够准确监控电池的剩余电量，为电池供电的低功耗应用（如物联网设备）提供重要的续航优化。
:::note
以下示例代码是为 PlatformIO 设计的，但它也与 nRF Connect SDK 兼容。

在 PlatformIO 中使用 XIAO nRF54L15
如果您想在 PlatformIO 中使用 XIAO nRF54L15，请参考此教程进行配置：[XIAO nRF54L15 PlatformIO 配置](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_with_platform_io/)。

在 nRF Connect SDK 中使用 XIAO nRF54L15
要在 nRF Connect SDK 中使用此代码，您需要移植以下三个文件 `main.c`、`prj.conf`、`app.overlay`
[XIAO nRF54L15 PlatformIO 配置](http://localhost:3000/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

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
#error "未指定合适的设备树覆盖"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
	ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* 设备树中指定的 ADC io-channels 数据。 */
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
		/* 缓冲区大小以字节为单位，不是样本数量 */
		.buffer_size = sizeof(buf),
	};

	regulator_enable(vbat_reg);
	k_sleep(K_MSEC(100));

	/* 在采样之前单独配置通道。 */
	if (!adc_is_ready_dt(&adc_channels[7]))
	{
		printf("ADC 控制器设备 %s 未就绪\n", adc_channels[7].dev->name);
		return 0;
	}

	err = adc_channel_setup_dt(&adc_channels[7]);
	if (err < 0)
	{
		printf("无法设置通道 #7 (%d)\n", err);
		return 0;
	}

	(void)adc_sequence_init_dt(&adc_channels[7], &sequence);

	err = adc_read_dt(&adc_channels[7], &sequence);
	if (err < 0)
	{
		printf("无法读取 (%d)\n", err);
		return 0;
	}

	/*
	 * 如果使用差分模式，ADC 样本缓冲区中的 16 位值
	 * 应该是有符号的 2 的补码值。
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
	/* 可能不支持转换为 mV，如果不支持则跳过 */
	if (err < 0)
	{
		printf(" mV 值不可用\n");
	}
	else
	{
		printf("电池电压 = %" PRId32 " mV\n", val_mv * 2);
	}

	regulator_disable(vbat_reg);
	return 0;
}
```

## 访问 J-Link 引脚以烧录程序

**所需硬件**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
您需要下载最新版本的 J-Link 以获得 nRF54L15 型号板的支持。
:::

**所需软件**

需要从网站下载 [Segger](https://www.segger.com/downloads/jlink/) 软件。

- **步骤 1.** 使用 Jlink 连接以下引脚：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **步骤 2.** 启动 J-Flash 并搜索 nRF54L15，创建一个新项目：


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>


- **步骤 3.** 点击"Target"然后选择"Connect"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 将 bin 或 [hex 文件](ttps://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex)拖拽到软件中。然后按顺序按下 F4 和 F5。重新烧录完成。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>


## 板载按键

XIAO nRF54L15(Sense) 配备了两个重要的物理按键，它们在设备操作和固件编程中起着关键作用：**复位按键**和**用户按键**。了解它们的功能对于日常使用和固件更新至关重要。

---
### 复位按键

复位按键用于对设备执行硬复位操作。

* **功能：**
    * **强制重启：** 按下此按键会立即中断所有当前设备操作并使其重启，类似于电源循环。
    * **解决程序卡死：** 当设备运行的程序崩溃、进入无限循环或变得无响应时，按下复位按键是强制其恢复正常运行状态的最快方法。
    * **不影响固件：** 复位操作不会擦除或更改已编程到设备中的固件。它只是重新启动当前运行的应用程序。
* **使用场景：**
    * 在开发/调试期间快速重新运行程序。
    * 当设备表现出意外行为或卡死时。

---

### 用户按键

用户按键是一个多功能的可编程输入，在您的应用程序中提供灵活的控制。

**功能：**

- 可定制输入：与复位按键的固定功能不同，用户按键的操作完全由您编程的固件定义。

- 事件触发：它可以被编程来触发特定事件、控制不同功能，或作为应用程序的通用输入。

**使用场景：**

- 在自定义应用程序中激活特定功能或模式。


:::note
以下示例代码是为 PlatformIO 设计的，但它也与 nRF Connect SDK 兼容。

在 PlatformIO 中使用 XIAO nRF54L15 
如果您想在 PlatformIO 中使用 XIAO nRF54L15，请参考此教程进行配置：[XIAO nRF54L15 PlatformIO 配置](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_with_platform_io/)。

在 nRF Connect SDK 中使用 XIAO nRF54L15 
要在 nRF Connect SDK 中使用此代码，您需要移植以下三个文件 `main.c`、`prj.conf`、`app.overlay`
[XIAO nRF54L15 PlatformIO 配置](http://localhost:3000/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-button" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


每次按键时灯亮一次
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/button.gif" style={{width:400, height:'auto'}}/></div>

## XIAO nRF54L15 功耗代码示例（PlatformIO）

以下示例代码专为 PlatformIO 设计，但也兼容 nRF Connect SDK。

在 PlatformIO 中使用 XIAO nRF54L15 
如果您想在 PlatformIO 中使用 XIAO nRF54L15，请参考此教程进行配置：[XIAO nRF54L15 PlatformIO 配置](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_with_platform_io/)。

在 nRF Connect SDK 中使用 XIAO nRF54L15 
要在 nRF Connect SDK 中使用此代码，您需要移植以下三个文件 `main.c`、`prj.conf`、`app.overlay`

**移植 main.c**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/d1.jpg" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/f1.jpg" style={{width:600, height:'auto'}}/></div>

**移植 prj.conf/app.overlay，在进行项目配置时，您可能会看到以下文件：**

- prj.conf：此文件用于设置项目的 Kconfig 配置选项，例如启用特定外设或功能。

- app.overlay：此文件用于修改设备树设置，例如更改引脚功能或调整硬件配置。

如果下面的代码示例包含这些单独的文件，您需要将它们的内容合并到您的 nRF Connect SDK 项目中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/h1.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/g1.jpg" style={{width:600, height:'auto'}}/></div>

**替换位置**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/replace.jpg" style={{width:600, height:'auto'}}/></div>

- `app.overlay 文件：` 将其放在您的 board 文件夹中。

- `prj.conf 文件：` 将其放在您的项目根文件夹中。

- `main.c 文件：` 将其放在您的 src 文件夹中。

### 蓝牙连接

本节详细介绍了设备作为蓝牙低功耗（BLE）外设主动广播时的功耗特性。设备实现了自定义 BLE 服务，允许其他中心设备连接并与其交互。

以下图表展示了设备持续广播时的典型功耗配置文件：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>BLE 广播期间的设备功耗</em></p>
</div>

如图所示，设备表现出与每个广播事件相对应的周期性电流峰值，随后是较低电流消耗的时期。广播期间的平均功耗高于系统关闭模式，反映了广播所需的主动无线电操作。

---
#### BLE 广播代码示例
 
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

 
以下是用于测试 BLE 广播期间功耗的代码：

```c
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

// ONOFF 服务的自定义 128 位 UUID
#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)

// ONOFF 动作特征（写入）的自定义 128 位 UUID
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

// ONOFF 读取特征（读取）的自定义 128 位 UUID
#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

// 用于保存开/关状态的静态标志，初始化为 0（关闭）
static uint8_t onoff_flag = 0;

// 广播数据：标志和完整设备名称
static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)), // 通用可发现，无 BR/EDR
	BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1), // 设备名称
};

// 扫描响应数据：包含我们自定义服务的 128 位 UUID
static const struct bt_data sd[] = {
	BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL), // 服务 UUID
};

/**
 * @brief ONOFF 读取特征的 GATT 读取回调函数。
 *
 * 当连接的中心设备尝试读取 ONOFF 读取特征时调用此函数。
 * 它返回 onoff_flag 的当前值。
 *
 * @param conn 指向连接对象的指针。
 * @param attr 指向正在读取的 GATT 属性的指针。
 * @param buf 用于存储读取值的缓冲区。
 * @param len 缓冲区的最大长度。
 * @param offset 读取属性值的偏移量。
 * @return 读取的字节数，或负错误代码。
 */
static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    // 属性的 user_data 字段指向 onoff_flag
    const uint8_t *value = attr->user_data;
    // 执行 GATT 属性读取操作
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

/**
 * @brief ONOFF 动作特征的 GATT 写入回调函数。
 *
 * 当连接的中心设备尝试写入 ONOFF 动作特征时调用此函数。
 * 它根据接收到的值更新 onoff_flag。
 *
 * @param conn 指向连接对象的指针。
 * @param attr 指向正在写入的 GATT 属性的指针。
 * @param buf 包含要写入值的缓冲区。
 * @param len 缓冲区中值的长度。
 * @param offset 写入属性值的偏移量。
 * @param flags 写入操作的标志。
 * @return 写入的字节数，或负错误代码。
 */
static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
			       const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
	uint8_t val;

	// 确保写入数据的长度为 1 字节
	if (len != 1U) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
	}

	// 确保写入操作从偏移量 0 开始
	if (offset != 0) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
	}

	// 从缓冲区获取值
	val = *((uint8_t *)buf);

	// 根据接收到的值更新 onoff_flag
	if (val == 0x00U) {
		printf("写入: 0\n");
		onoff_flag = 0; // 设置为关闭
	} else if (val == 0x01U) {
		printf("写入: 1\n");
		onoff_flag = 1; // 设置为开启
	} else {
		// 如果值不是 0 或 1，返回错误
		return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
	}

	return len; // 返回成功写入的字节数
}

// 定义自定义 GATT 服务及其特征
BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF), // 主服务：ONOFF 服务
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE, // 特征：ONOFF 动作（写入）
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL), // 权限，回调函数
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ, // 特征：ONOFF 读取（读取）
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag), // 权限，回调函数，user_data（onoff_flag）
);

/**
 * @brief 蓝牙连接成功的回调函数。
 *
 * @param conn 指向连接对象的指针。
 * @param err 错误代码（成功时为 0）。
 */
static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err != 0U) {
		printf("连接失败 (%02x, %s)\n", err, bt_hci_err_to_str(err));
		return;
	}

	printf("已连接\n");
}

/**
 * @brief 蓝牙断开连接的回调函数。
 *
 * @param conn 指向连接对象的指针。
 * @param reason 断开连接的原因。
 */
static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	printf("已断开连接 (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

// 定义连接回调函数
BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

/**
 * @brief 应用程序的主函数。
 *
 * 初始化蓝牙协议栈，开始广播，并进入主循环。
 * @return 成功时返回 0，失败时返回负错误代码。
 */
int main(void)
{
	int err;

	// 启用蓝牙协议栈
	err = bt_enable(NULL);
	if (err < 0) {
		printf("蓝牙启用失败 (err %d)", err);
		return err;
	}

	// 开始 BLE 广播
	err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
	if (err < 0) {
		printf("广播启动失败 (err %d)", err);
		return err;
	}

	printf("蓝牙已启用");
	return 0;
}
```

### 超低功耗状态

为了实现设备的极低功耗，我们在 **System Off** 模式下进行了功耗测试。System Off 模式是 Zephyr OS 提供的深度睡眠模式，在此模式下大部分外设和 CPU 都会关闭，仅保留必要的唤醒源（如 GPIO 中断）以最小化功耗。

以下图表展示了设备进入 System Off 模式后的典型功耗曲线：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>设备在 System Off 模式下的功耗</em></p>
</div>

如图所示，进入 System Off 模式后，功耗显著降低，仅维持在微安级别，这大大延长了电池寿命。当按下 `sw0` 按钮时，设备将从 System Off 模式唤醒并重新启动。

---

#### 功耗代码示例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


以下是用于测试上述 System Off 模式功耗的代码：

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/drivers/comparator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/util.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);

void print_reset_cause(void)
{
	uint32_t reset_cause;

	hwinfo_get_reset_cause(&reset_cause);
	if (reset_cause & RESET_DEBUG) {
		printf("由调试器复位。\n");
	} else if (reset_cause & RESET_CLOCK) {
		printf("由 GRTC 从 System OFF 唤醒。\n");
	} else  {
		printf("其他唤醒原因 0x%08X。\n", reset_cause);
	}
}

int main(void)
{
	int rc;
	const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

	if (!device_is_ready(cons)) {
		printf("%s: 设备未就绪。\n", cons->name);
		return 0;
	}

	printf("\n%s system off 演示\n", CONFIG_BOARD);
	print_reset_cause();


	/* 将 sw0 配置为输入，中断配置为电平有效以允许唤醒 */
	rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
	if (rc < 0) {
		printf("无法配置 sw0 GPIO (%d)\n", rc);
		return 0;
	}

	rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_LOW);
	if (rc < 0) {
		printf("无法配置 sw0 GPIO 中断 (%d)\n", rc);
		return 0;
	}

	printf("进入 system off；按下 sw0 重新启动\n");


	rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("无法挂起控制台 (%d)\n", rc);
		return 0;
	}

	hwinfo_clear_reset_cause();
	sys_poweroff();

	return 0;
}
```

## 资源

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD 库文件](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 引脚图表](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Seeed Studio XIAO nRF54L15 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 Sense KiCAD 库文件](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Sense DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 Sense 引脚图表](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


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