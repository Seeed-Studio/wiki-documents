---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: ''
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
createdAt: '2026-01-28'
updatedAt: '2026-01-28'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54l15_zigbee/
---

本教程指导您在 Seeed Studio **XIAO nRF54L15** 开发板上实现 [Zigbee](https://en.wikipedia.org/wiki/Zigbee) 应用，该开发板结合了 **Wi-Fi**、**低功耗蓝牙 (BLE)** 和 **Zigbee** 连接功能，非常适合 **物联网应用**。本指南中的示例使用 NCS 来实现 Zigbee 功能。



:::note 前提条件：nRFConnect SDK 使用

如果您还没有准备好 NCS，请参考 **[入门指南](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**。

如果您担心 nRF Connect SDK 没有完全下载或存在问题，可以通过以下方式验证已下载的 nRF Connect SDK 的完整性和正确性。选择 **Manage west workspace**，然后选择 **West Update**，如下所示。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## 目录
- [Zigbee 概述](#Zigbee-概述)
  - [Zigbee 数据模型](#Zigbee-数据模型)
  - [Zigbee 网络架构](#Zigbee-网络架构)
    - [网络拓扑](#网络拓扑)
- [NCS Zigbee 入门](#NCS-Zigbee-入门)

## Zigbee 概述

Zigbee 是一种基于 IEEE 802.15.4 标准的 **低功耗**、**低带宽** 无线通信协议。它专为 **家庭自动化**、**智慧城市** 和 **工业控制** 等物联网场景量身定制，提供强大的网状网络功能，在动态环境中实现可靠通信。

- 我们将简要介绍 Zigbee 相关内容。如果您想直接参考应用示例，也可以跳转到：
       - [NCS Zigbee 入门](#NCS-Zigbee-入门)

### Zigbee 数据模型

Zigbee 通信依赖于 **Zigbee 集群库 (ZCL)**，它定义了设备如何组织其功能并进行交互。关键组件包括：

1. **设备类型**
    Zigbee 设备（例如开关、传感器、灯具）具有预定义的特定行为，按功能分组到 **集群** 中。

2. **集群**
    集群是以下内容的逻辑分组：

   - **属性**：表示设备状态，如亮度或温度。
   - **命令**：触发动作，如打开灯或将亮度设置为 50%。

   示例：

   - **开/关集群**：控制二进制状态，如电源。
   - **级别控制集群**：调节强度或亮度。
   - **温度测量集群**：发送温度读数。
   - **场景集群**：保存和调用预设配置。

3. **属性和命令**
    属性存储设备数据（例如状态、配置），而命令启动操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee 网络架构

Zigbee 网络由三种主要节点类型组成：

1. **Zigbee 协调器 (ZC)**  
   - 作为网络的中央枢纽。  
   - 处理网络创建、设备认证和地址分配。  
   - 负责初始化和管理网络。  
   - 每个 Zigbee 网络只能有 **一个协调器**。  

2. **Zigbee 路由器 (ZR)**  
   - 通过在设备之间中继消息来扩展网络范围。  
   - 支持更多设备加入网络。  
   - 通常使用市电供电以确保持续运行和可靠的消息中继。  
   - 电池供电的路由器是可能的，但由于能耗较高而不太常见。

 :::tip

当然，路由器不是必需的。当距离较短时，可以省略路由器。例如，我们接下来的演示就不使用路由器。

:::

3. **Zigbee 终端设备 (ZED)**  
   - 轻量级且节能的设备，与父节点（协调器或路由器）通信。  
   - 不向其他设备路由消息。  
   - 针对电池操作进行优化，通常进入睡眠模式以节约能源。

:::note

- **寻址和路由**：
  - Zigbee 使用 16 位寻址方案。设备通过直接和间接寻址的混合方式进行通信。  
  - 路由决策由路由器使用 AODV（按需距离矢量）等算法做出。  

- **电源管理**：
  - Zigbee 终端设备针对低功耗进行了优化。它们通常在睡眠模式下运行，只在需要时唤醒。  
  - 路由器和协调器通常使用市电供电以确保持续可用性。

:::

#### 网络拓扑

Zigbee 支持三种主要网络拓扑，具体取决于应用需求和环境：

#### 1. 网状拓扑

- 单个协调器和多个路由器形成自愈、强健的网络。  
- 如果通信路径中断，设备可以动态重新路由消息，确保高可靠性。  
- 适用于需要广泛覆盖和冗余的大规模网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 动态重新路由确保高可靠性。  
  - 支持具有可扩展覆盖范围的大型网络。  
  - 自愈机制提高容错能力。  

#### 2. 树状拓扑

- 协调器作为分层结构的根，路由器形成分支。  
- 每个分支可以有多个终端设备或额外的路由器，创建树状结构。  
- 通信依赖于分层路径，这会引入潜在的单点故障。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 适用于结构化环境。  
  - 比网状网络更容易设置和管理。  
  - 容易受到分支故障影响，可能导致整个子网络断开连接。  

#### 3. 星状拓扑

- 所有设备直接与协调器通信。  
- 部署简单，但协调器是单点故障。  
- 最适合设备靠近协调器的小型网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 易于设置和管理。  
  - 由于范围和设备容量限制，可扩展性有限。  
  - 依赖协调器进行所有通信，降低了容错能力。  

:::tip

我们接下来的演示也是这种类型的拓扑
:::

## NCS Zigbee 入门

### 硬件准备

您需要准备 3 块 XIAO nRF54L15 开发板。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-114993697-xiao-nrf54l15-sense_pre-soldered_.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54L15-Sense-Pre-Soldered-p-6500.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**按照图中所示的方式连接设备**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### 软件准备

**步骤 1.** 安装 Zigbee R23 插件

- 点击 **NCS** 插件图标 -> **Create a new application** 并选择模式为 **Browse nRF Connect SDK Add-on Index**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- 搜索 **R23**，进入 **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- 选择最新版本 -> 选择工作区目录并创建

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

等待 Zigbee 插件完全安装，NCS 版本将自动切换到 v2.9.2。
由于插件相当大（超过 4 GB），下载过程将需要很长时间。请保持网络连接稳定，不要中途中断该过程。

:::

- 创建完成后将出现弹出提示。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 代码准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- 参考 Seeed Studio 官方仓库获取示例。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- 或者，如果您已设置 Git 环境，可以直接将代码拉取到刚才指定的文件目录中。

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

获取示例代码后，让我们简要了解一下：

1.boards 目录包含板级配置文件，用于适配不同开发板之间的硬件差异（如引脚和外设）：
- 其中的 .overlay 文件是"设备树覆盖文件"，用于修改芯片/开发板的默认硬件配置；
- 例如，xiao_nrf54l15_nrf54l15_cpuapp.overlay 是专门为 XIAO nRF54L15 编写的配置（例如，将 D3 引脚映射到代码中的 LED 控制引脚）；

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- 其他文件（例如 nrf54l15dk_xxx.overlay）是为 Nordic 官方开发套件（DK）准备的，因此您无需关心它们——只需关注以 xiao_xxx 为前缀的文件。

2. include 目录是存储头文件的地方：
- zb_dimmable_light.h 是 Zigbee 可调光灯的功能头文件，定义了灯节点的 Zigbee 协议相关功能和参数（例如亮度控制、状态报告）。

3. src 目录是存储核心代码的地方：
 - main.c 是整个项目的入口文件，包含程序启动逻辑、Zigbee 网络初始化和 LED 控制逻辑（例如，在接收到开关命令后控制 D3 引脚的电平）。

4. 根目录中的文件 这些是项目构建和配置文件（NCS/Zephyr 框架的标准文件）：

- CMakeLists.txt：CMake 构建脚本，定义项目需要编译哪些文件以及依赖哪些库；
- Kconfig.sysbuild：配置项目的编译选项（例如是否启用 Zigbee 功能、调试日志）；
- prj.conf：项目的核心配置文件，设置芯片参数和 Zephyr 系统参数（例如启用 GPIO 功能、Zigbee 协议栈）；
- sample.yaml：NCS 示例配置文件，描述项目的基本信息（例如支持的开发板、功能描述）。

### 编译和烧录代码

本指南向您展示如何将现有应用程序（以 light_switch 为例）添加到您的 VS Code 环境中，并将其编译和烧录到目标硬件（以 xiao_nrf54l15 为例）。

**步骤 1.** 将应用程序添加到工作区

- 找到 APPLICATIONS 面板：在侧边栏中，找到名为 "APPLICATIONS" 的面板。

- 添加现有应用程序：点击面板右上角的 "+"（Add an existing application）图标，如下图红框所示。

- 选择应用程序文件夹：在弹出的文件浏览器窗口中，导航到您的项目所在文件夹（例如 D:...\workspace）。从列表中选择您要烧录的应用程序文件夹——本例中为 light_switch——然后点击 "Open" 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**步骤 2.** 创建和配置编译选项

- 添加构建配置：在 "APPLICATIONS" 面板中，您将看到新添加的 light_switch 项目。点击其下方的 "+ Add build configuration"。

- 配置编译参数：在打开的 "Add Build Configuration" 页面中，进行以下设置：SDK 和工具链：您安装的 nRF Connect SDK 和工具链通常会自动选择——请验证版本是否正确。（如果您之前下载的插件完整，这里会自动选择 V2.9。）

- 板目标：这是最关键的步骤。您需要选择代码将在其上运行的硬件。点击 "Browse" 或直接在输入框中搜索。如图所示，您需要选择的目标板是 xiao_nrf54l15/nrf54l15/cpuapp。您可以勾选 "Custom" 来快速过滤或查找不受官方支持的板。

- 其他配置：除非有特殊要求，否则暂时将 Kconfig fragments 和 Devicetree overlays 等其他设置保持默认。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
建议首先勾选 **"Custom"** 来快速过滤或查找不受官方支持的板，然后找到您需要选择的目标板：**xiao_nrf54l15/nrf54l15/cpuapp**。如果您直接搜索，故障排除过程可能会花费太长时间，并且可能找不到目标板。

:::


:::note

- 更新板级文件。如果您的文件长时间未更新，也建议您在使用前更新它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
有关详细教程，您可以参考下面的链接。
      **[入门指南](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**。

**步骤 3.** 编译和烧录

- 连接硬件：确保您的目标硬件（例如 XIAO nRF54L15 开发板）通过数据线正确连接到您的计算机。

- 打开终端：在 **NRF CONNECT 扩展**的 WELCOME 面板中，找到并点击 "Open terminal" 选项（图中红框标记）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- 导航到项目目录：在终端中，使用 cd 命令进入您的项目文件夹。

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- 请将此路径替换为您自己的实际项目路径。

- 监控烧录过程：终端将输出详细日志，包括编译进度、连接到调试器（例如 CMSIS-DAP）、闪存擦除和数据写入过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- 同样，按照相同步骤烧录其余两个代码项目。
- 如果您担心代码是否已成功烧录，有以下方法来验证：

  -  通过串口连接到开发板并观察串口输出（此方法不仅验证烧录结果，还允许您直观地查看程序运行日志，使验证逻辑更清晰）。

### 连接到 Zigbee

**步骤 1.** 连接到 Zigbee

1. 给加载了**协调器程序**的 XIAO 开发板上电并启动。
2. 在串口助手中观察日志，等待协调器完成 Zigbee 协议栈初始化和网络参数配置，直到输出串口信息。
3. 保持协调器上电以持续维护网络，这为后续设备加入网络提供了基础。

**步骤 2.** 灯泡端的网络加入配置

1. 在上电的协调器网络准备就绪后，给加载了灯泡程序的 XIAO 开发板上电并启动。

2. 灯泡端自动开始网络扫描以查找可用的 Zigbee 协调器网络。
3. 检查串口日志以确认灯泡端已成功加入协调器网络。
核心日志参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 灯开关端的网络加入和设备发现

1. 确认灯泡端成功加入网络后，给加载了灯开关程序的 XIAO 开发板上电并启动（根据需要通过板载按钮触发恢复出厂设置以确保重新扫描网络）。
2. 灯开关端自动扫描并加入同一个协调器网络。
核心日志参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. 检查灯泡端的串口日志以确认命令已接收并执行，LED 完成开/关动作。核心日志参考：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Zigbee 网络重置程序

**步骤 1.** 协调器的网络重置

按下网络协调器的板载按钮以完成 Zigbee 网络重置。

**步骤 2.** 灯控设备（灯开关/灯泡）的重置和重新加入

1. 按住灯控设备（灯开关/灯泡）的板载按钮；
2. 按下设备的复位按钮；
3. 释放板载按钮。设备将完成重置并自动加入新的 Zigbee 网络。

:::note

> **重要提示：** 如果设备由电池供电，必须明确禁用串口；否则程序将无法启动。

:::

## 结果

如果一切顺利，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### 常见问题

1. 不要使用过长的目录作为安装根目录。否则，在 Windows 上编译示例时，您会经常遇到由于目录名过长而导致的编译错误。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


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
