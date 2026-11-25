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
createdAt: '2026-01-27'
updatedAt: '2026-01-27'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54l15_zigbee/
---

本教程将指导你在 Seeed Studio **XIAO nRF54L15** 开发板上实现 [Zigbee](https://en.wikipedia.org/wiki/Zigbee) 应用，该开发板集成了 **Wi-Fi**、**Bluetooth Low Energy (BLE)** 和 **Zigbee** 连接能力，非常适合 **物联网 (IoT) 应用**。本指南中的示例使用 NCS 来实现 Zigbee 功能。



:::note 前提条件：nRFConnect SDK 使用

如果你还没有准备好 NCS，请参考 **[入门指南](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**。 

如果你担心 nRF Connect SDK 没有完全下载或存在问题，可以通过以下方式验证已下载的 nRF Connect SDK 的完整性和正确性。选择 **Manage west workspace**，然后选择 **West Update**，如下图所示。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## 目录
- [Zigbee 概述](#zigbee-概述)
  - [Zigbee 数据模型](#zigbee-数据模型)
  - [Zigbee 网络架构](#zigbee-网络架构)
    - [网络拓扑](#网络拓扑)
- [NCS Zigbee 入门](#ncs-zigbee-入门)

## Zigbee 概述

Zigbee 是一种基于 IEEE 802.15.4 标准的**低功耗**、**低带宽**无线通信协议。它专为 **家庭自动化**、**智慧城市**和**工业控制**等物联网场景设计，提供强大的网状网络能力，以在动态环境中实现可靠通信。

- 我们将对 Zigbee 相关内容做简要说明。如果你想直接参考应用示例，也可以跳到后面章节。
       - [NCS Zigbee 入门](#ncs-zigbee-入门)

### Zigbee 数据模型

Zigbee 通信依赖于 **Zigbee Cluster Library (ZCL)**，它定义了设备如何组织其功能以及如何交互。关键组成包括：

1. **设备类型**
    Zigbee 设备（例如开关、传感器、灯具）预先定义了特定行为，并被归类到功能性 **Cluster（簇）** 中。

2. **簇（Clusters）**
    簇是以下内容的逻辑分组：

   - **属性（Attributes）**：表示设备状态，如亮度或温度。
   - **命令（Commands）**：触发操作，例如打开灯或将亮度设置为 50%。

   示例：

   - **On/Off Cluster**：控制电源等二进制状态。
   - **Level Control Cluster**：调节强度或亮度。
   - **Temperature Measurement Cluster**：发送温度读数。
   - **Scenes Cluster**：保存和调用预设配置。

3. **属性与命令**
    属性存储设备数据（例如状态、配置），而命令用于发起动作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee 网络架构

一个 Zigbee 网络由三种主要节点类型组成：

1. **Zigbee 协调器 (ZC)**  
   - 作为网络的中心枢纽。  
   - 负责网络创建、设备认证和地址分配。  
   - 负责初始化和管理网络。  
   - 每个 Zigbee 网络只能有 **一个协调器**。  

2. **Zigbee 路由器 (ZR)**  
   - 通过在设备之间中继消息来扩展网络范围。  
   - 支持更多设备加入网络。  
   - 通常由市电供电，以确保持续运行和可靠的消息中继。  
   - 路由器也可以使用电池供电，但由于能耗较高而较少见。 

 :::tip

当然，路由器并不是必须的。当距离较短时，可以省略路由器。例如，我们接下来的演示就没有使用路由器。

:::

3. **Zigbee 终端设备 (ZED)**  
   - 轻量且高能效的设备，与父节点（协调器或路由器）进行通信。  
   - 不会为其他设备转发消息。  
   - 针对电池供电进行了优化，通常通过进入睡眠模式来节省能量。

:::note

- **寻址与路由**：
  - Zigbee 使用 16 位寻址方案。设备通过直接和间接寻址的组合进行通信。  
  - 路由决策由路由器使用 AODV（Ad hoc On-demand Distance Vector，即按需距离矢量）等算法完成。  

- **电源管理**：
  - Zigbee 终端设备针对低功耗进行了优化。它们通常在睡眠模式下运行，仅在需要时唤醒。  
  - 路由器和协调器通常由市电供电，以保证持续可用。

:::

#### 网络拓扑

Zigbee 支持三种主要网络拓扑，具体取决于应用需求和环境：

#### 1. 网状拓扑（Mesh Topology）

- 一个协调器和多个路由器组成自愈、健壮的网络。  
- 当通信路径中断时，设备可以动态重新路由消息，从而确保高可靠性。  
- 适用于需要广覆盖和冗余的大规模网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 动态重路由确保高可靠性。  
  - 支持具有可扩展覆盖范围的大型网络。  
  - 自愈机制提高了容错能力。  

#### 2. 树形拓扑（Tree Topology）

- 协调器作为分层结构的根节点，路由器形成分支。  
- 每个分支可以拥有多个终端设备或额外的路由器，形成树状结构。  
- 通信依赖分层路径，这会引入潜在的单点故障。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 适用于结构化环境。  
  - 比网状网络更易于搭建和管理。  
  - 易受分支故障影响，可能导致整个子网络断开。  

#### 3. 星型拓扑（Star Topology）

- 所有设备都直接与协调器通信。  
- 部署简单，但协调器是单点故障。  
- 最适合设备距离协调器较近的小型网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主要特性**：  
  - 易于搭建和管理。  
  - 由于距离和设备容量限制，可扩展性有限。  
  - 所有通信都依赖协调器，降低了容错能力。  

:::tip

我们接下来的演示也是这种拓扑结构。
:::

## NCS Zigbee 入门

### 硬件准备

你需要准备 3 块 XIAO nRF54L15 开发板。

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
    <strong><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**按照图中所示方式连接设备**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### 软件准备

**步骤 1.** 安装 Zigbee R23 插件

- 点击 **NCS** 插件图标 -> **Create a new application**，并将模式选择为 **Browse nRF Connect SDK Add-on Index**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- 搜索 **R23**，进入 **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- 选择最新版本 -> 选择工作区目录并创建

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

等待 Zigbee 插件完全安装完成，NCS 版本会自动切换到 v2.9.2。
由于插件体积较大（超过 4 GB），下载过程将耗费较长时间。请保持网络连接稳定，不要在中途中断该过程。

:::

- 创建完成后会弹出提示窗口。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 代码准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- 参考 Seeed Studio 官方仓库获取示例。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><font color={'FFFFFF'} size={"4"}> 下载库文件</font></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- 或者，如果你已经配置好了 Git 环境，也可以直接将代码拉取到你刚才指定的文件目录中。

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

获取示例代码后，我们先对其进行一个简单的了解：

1.boards 目录中包含板级配置文件，用于适配不同开发板之间的硬件差异（例如引脚和外设）：
- 其中的 .overlay 文件是“设备树覆盖文件（Device Tree Overlay files）”，用于修改芯片/开发板的默认硬件配置；
- 例如，xiao_nrf54l15_nrf54l15_cpuapp.overlay 是专门为 XIAO nRF54L15 编写的配置（例如在代码中将 D3 引脚映射为 LED 控制引脚）；

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- 其他文件（例如 nrf54l15dk_xxx.overlay）是为 Nordic 官方开发套件（DK）准备的，因此你无需关心它们——只需关注以 xiao_xxx 为前缀的文件。

2. include 目录用于存放头文件：
- zb_dimmable_light.h 是 Zigbee 可调光灯的功能头文件，其中定义了灯节点的 Zigbee 协议相关函数和参数（例如亮度控制、状态上报）。

3. src 目录用于存放核心代码：
 - main.c 是整个工程的入口文件，包含程序启动逻辑、Zigbee 网络初始化以及 LED 控制逻辑（例如在接收到开关指令后控制 D3 引脚电平）。

4. 根目录下的文件为工程构建和配置文件（NCS/Zephyr 框架的标准文件）：

- CMakeLists.txt：CMake 构建脚本，用于定义工程需要编译的文件以及所依赖的库；
- Kconfig.sysbuild：用于配置工程的编译选项（例如是否启用 Zigbee 功能、调试日志）；
- prj.conf：工程的核心配置文件，用于设置芯片参数和 Zephyr 系统参数（例如启用 GPIO 功能、Zigbee 协议栈）；
- sample.yaml：NCS 示例配置文件，用于描述工程的基本信息（例如支持的开发板、功能说明）。

### 编译并烧录代码

本指南将向你展示如何将一个已有的应用程序（以 light_switch 为例）添加到 VS Code 环境中，并将其编译和烧录到目标硬件（以 xiao_nrf54l15 为例）。

**步骤 1.** 将应用添加到工作区

- 找到 APPLICATIONS 面板：在侧边栏中找到名为 "APPLICATIONS" 的面板。

- 添加已有应用：点击面板右上角的 “+”（Add an existing application）图标，如下图红框所示。

- 选择应用文件夹：在弹出的文件浏览窗口中，定位到你的工程所在文件夹（例如 D:...\workspace）。在列表中选择你要烧录的应用文件夹——本例中为 light_switch——然后点击 "Open" 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**步骤 2.** 创建并配置编译选项

- 添加构建配置：在 "APPLICATIONS" 面板中，你会看到新添加的 light_switch 工程。点击其下方的 "+ Add build configuration"。

- 配置编译参数：在打开的 "Add Build Configuration" 页面中，进行如下设置：SDK 和 Toolchain：你已安装的 nRF Connect SDK 和工具链通常会被自动选中——请确认版本是否正确。（如果你之前下载的插件完整无误，这里会自动选择 V2.9。）

- Board target：这是最关键的一步。你需要选择代码将要运行的硬件。点击 "Browse" 或在输入框中直接搜索。如图所示，你需要选择的目标板为 xiao_nrf54l15/nrf54l15/cpuapp。你可以勾选 "Custom" 来快速筛选或查找非官方支持的开发板。

- 其他配置：除非有特殊需求，Kconfig fragments 和 Devicetree overlays 等其他设置暂时保持默认即可。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
建议先勾选 **"Custom"**，以便快速筛选或查找非官方支持的开发板，然后再定位到你需要选择的目标板：**xiao_nrf54l15/nrf54l15/cpuapp**。如果直接搜索，排查过程可能会耗时较长，并且可能无法找到目标板。

:::


:::note

- 更新板级文件。如果你的文件长时间未更新，也建议在使用前进行更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
详细教程可参考下方链接。
      **[入门指南](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

**步骤 3.** 编译与烧录

- 连接硬件：确保你的目标硬件（例如 XIAO nRF54L15 开发板）通过数据线正确连接到电脑。

- 打开终端：在 **NRF CONNECT extension** 的 WELCOME 面板中，找到并点击 "Open terminal" 选项（如图中红框所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- 进入工程目录：在终端中使用 cd 命令进入你的工程文件夹。

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- 请将此路径替换为你自己实际的工程路径。

- 监控烧录过程：终端会输出详细日志，包括编译进度、连接调试器（例如 CMSIS-DAP）、擦除 Flash 以及数据写入过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- 同样地，按照相同步骤烧录剩余两个代码工程。
- 如果你担心代码是否已经成功烧录，可以通过以下方法进行验证：

  -  通过串口连接开发板并观察串口输出（这种方式不仅可以验证烧录结果，还能直观查看程序运行日志，使验证逻辑更加清晰）。

### 连接到 Zigbee

**步骤 1.** 连接到 Zigbee

1. 给已烧录 **Coordinator 程序** 的 XIAO 开发板上电并启动。
2. 在串口助手中观察日志，等待协调器完成 Zigbee 协议栈初始化和网络参数配置，直到有串口信息输出。
3. 保持协调器持续上电以维持网络，为后续设备入网提供基础。

**步骤 2.** 灯泡端入网配置

1. 在已上电且网络就绪的协调器之后，再给已烧录 Light Bulb 程序的 XIAO 开发板上电并启动。

2. 灯泡端会自动开始网络扫描，以寻找可用的 Zigbee 协调器网络。
3. 检查串口日志，确认灯泡端已成功加入协调器网络。
核心日志参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 灯控开关端的入网与设备发现

1. 在确认灯泡端已成功入网后，上电并启动已烧录 Light Switch 程序的 XIAO 开发板（可根据需要通过板载按键触发出厂重置，以确保重新扫描网络）。
2. 灯控开关端会自动扫描并加入同一个协调器网络。
核心日志参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. 检查灯泡端的串口日志，确认已接收并执行指令，LED 完成亮灭动作。核心日志参考：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Zigbee 网络重置流程

**步骤 1.** 协调器网络重置

按下网络协调器的板载按键即可完成 Zigbee 网络重置。

**步骤 2.** 灯控设备（灯控开关/灯泡）的重置与重新入网

1. 按住灯控设备（灯控开关/灯泡）的板载按键；
2. 按下设备的复位按键；
3. 松开板载按键。设备将完成重置并自动加入新的 Zigbee 网络。

:::note

> <strong>重要说明：</strong> 在早期硬件版本中，为了实现仅由电池供电的冷启动，可能需要禁用板载 USB 转串口 UART，因为其信号可能会对未上电的 SAMD11 进行反向供电。V1.2 增加了硬件信号隔离，不再需要仅针对这一历史问题使用该 UART 规避方案。这只会影响板载 USB 转串口/调试 UART，不会影响侧边的 <code>D6/TX</code> 和 <code>D7/RX</code> 用户 UART 引脚。有关不同版本的具体配置，请参阅 [入门指南中的电池供电板卡章节](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#电池电压检测)。

:::

## 结果

如果一切顺利，你将看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### 常见问题解答

1. 请不要使用过长的目录作为安装根目录。否则在 Windows 上编译示例时，你会经常遇到由于目录名称过长而导致的编译错误。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
