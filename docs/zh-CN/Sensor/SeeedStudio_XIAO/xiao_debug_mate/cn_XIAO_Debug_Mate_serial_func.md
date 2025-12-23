---
description: 本页面介绍如何使用 XIAO Debug Mate 的 UART 监视器功能。
title: UART 监视器
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.webp
slug: /cn/xiao_debug_mate_serial
sidebar_position: 3
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

欢迎查看 XIAO Debug Mate UART 监视器的文档。

本页面提供了如何使用 Debug Mate 进行串行数据监视的清晰指导。您将找到硬件设置的分步说明、推荐的软件工具，以及相关概念的解释，帮助您在开发和调试场景中充分利用 UART 监视功能。

## 使用串行监视器前需要了解的概念

在深入了解之前，让我们先明确两个对于串行通信工作至关重要的基本概念。

### 串行通信

串行通信是一种通过单个通信通道一次发送一个比特数据的方法，按顺序进行。可以把它想象成汽车在单车道道路上一辆接一辆地行驶。在微控制器世界中，这通常使用一种称为 **UART**（通用异步收发器）的协议来实现。这是开发者从设备获取调试消息、传感器读数和状态更新的主要方式。

### RX/TX

这是实现串行通信的两个引脚：

*   **TX（发送）：** 这是"发送"引脚。微控制器使用此引脚发送数据。
*   **RX（接收）：** 这是"接收"引脚。微控制器使用此引脚监听传入的数据。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart_communica_logic.gif" style={{width:800, height:'auto'}}/></div> -->

export const UartDiagram = () => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f4f4f9",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      margin: "20px auto",
      textAlign: "center"
    }}
  >
    <h3 style={{ color: "#333", marginBottom: "10px" }}>UART 通信逻辑</h3>
    <div style={{ color: "#666", fontSize: "0.9em", marginBottom: "20px" }}>
      黄金法则：<strong>TX</strong>（发送）必须连接到 <strong>RX</strong>（接收）
    </div>

    <svg viewBox="0 0 600 350" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
        </marker>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Device A */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">设备 A</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(MCU/PC)</text>

        {/* A Pins */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">发送</text>
        </g>
        <g transform="translate(120, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">接收</text>
        </g>
        <g transform="translate(120, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="5" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Device B */}
      <g transform="translate(430, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">设备 B</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(传感器)</text>

        {/* B Pins */}
        <g transform="translate(0, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">发送</text>
        </g>
        <g transform="translate(0, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">接收</text>
        </g>
        <g transform="translate(0, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="5" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Connections */}
      <path id="lineAtoB" d="M 176 130 C 250 130, 350 170, 424 170" fill="none" stroke="#e67e22" strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
      <path id="lineBtoA" d="M 424 130 C 350 130, 250 170, 176 170" fill="none" stroke="#3498db" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
      <path d="M 176 220 L 424 220" fill="none" stroke="#333" strokeWidth="3" strokeDasharray="5,5" />

      {/* Animated Packets */}
      <circle r="5" fill="#e67e22">
        <animateMotion repeatCount="indefinite" dur="1.5s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineAtoB" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#3498db">
        <animateMotion repeatCount="indefinite" dur="1.5s" begin="0.75s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineBtoA" />
        </animateMotion>
      </circle>

      {/* Labels */}
      <text x="300" y="110" textAnchor="middle" fontSize="12" fill="#e67e22" fontWeight="bold">数据流 (TX &rarr; RX)</text>
      <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#3498db" fontWeight="bold">数据流 (RX &larr; TX)</text>
      <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#333">共同接地 (GND)</text>
    </svg>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px", fontSize: "0.85em", color: "#555" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#e67e22" }}></div>
        <span>橙色：A 到 B</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#3498db" }}></div>
        <span>蓝色：B 到 A</span>
      </div>
    </div>
  </div>
);

<UartDiagram />

需要记住的最重要规则是，您必须在设备之间**交叉连接**这些引脚。一个设备的 TX 引脚必须连接到另一个设备的 RX 引脚，反之亦然。这就像对话一样：一个人的嘴巴（TX）对另一个人的耳朵（RX）说话。

## 入门指南

XIAO Debug Mate 可以通过两种方式监视串行数据：直接在其内置 LCD 屏幕上显示，或将数据传递到计算机。本指南涵盖了这两种方式。

### 软件准备（用于 PC 监视）

如果您选择在计算机上查看串行数据，您将需要一个"串行终端"或"串行监视器"应用程序。XIAO Debug Mate 将在您的 PC 上显示为标准 COM 端口。以下是一些流行的软件选择：

*   **PlatformIO Serial Monitor：** 如果您在 VS Code 中使用 PlatformIO，您可以简单地点击状态栏中的 "Serial Monitor" 按钮。
*   **Arduino IDE Serial Monitor：** 内置在 Arduino IDE 中的经典简单监视器。
*   **PuTTY：** 适用于 Windows 的轻量级且非常流行的终端模拟器。
*   **CoolTerm：** 适用于 Windows、macOS 和 Linux 的用户友好且功能丰富的串行终端。
*   **minicom / screen：** 适用于 Linux 和 macOS 用户的强大命令行工具。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/23.png" style={{width:1000, height:'auto'}}/></div>

### 硬件准备

XIAO Debug Mate 提供三种灵活的方式来连接您的目标设备进行串行监视。

#### 适用于 XIAO 开发板（即插即用）

这是监视 XIAO 开发板最简单的方法。Debug Mate 设计为默认监听 XIAO 的 `Serial1` 端口（`D6` 和 `D7`）。

1.  只需将您的 XIAO 开发板直接插入 XIAO Debug Mate 正面的母头插座。
2.  连接会自动建立。不需要额外的线缆。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

#### 对于 UART Grove 设备

专用的 Grove 连接器可以与任何基于 UART 的 Grove 模块进行干净且安全的连接。

1.  拿出您的 Grove UART 设备（例如，Grove GPS 或 Grove MP3 V4）。
2.  使用标准 Grove 线缆将其连接到 XIAO Debug Mate 右侧的 Grove 端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/24.jpg" style={{width:800, height:'auto'}}/></div>

#### 对于其他 UART 设备

:::danger 电源引脚连接说明
是否需要连接两个开发板的 3.3V 电源引脚取决于您的其他设备是否由 Debug Mate 供电。如果其他设备通过自己的独立 USB 连接供电，则不应连接设备和 Debug Mate 的 3.3V 引脚。这样做可能会损坏设备。
:::

您可以监控任何具有可访问 TX 和 RX 引脚的设备，例如另一个开发板或自定义电路。

有两种主要方法可以做到这一点：

*   **选项 1：使用主排针：** 使用杜邦线将您设备的 TX 和 RX 引脚连接到 XIAO Debug Mate 的母排针。记住要交叉连接：设备 TX -> Debug Mate RX（排针上的 D7 引脚）和设备 RX -> Debug Mate TX（排针上的 D6 引脚）。

*   **选项 2：使用 Grove 端口：** 使用 **Grove 转杜邦转换线缆**。将 Grove 连接器插入 Debug Mate，并将各个杜邦端连接到您设备的 TX、RX、VCC 和 GND 引脚。这通常是更稳定和可靠的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/25.jpg" style={{width:800, height:'auto'}}/></div>

以下图表显示了 Grove 接口的引脚定义。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/39.png" style={{width:400, height:'auto'}}/></div>

:::caution 重要提醒
始终确保您设备的 TX 引脚连接到 Debug Mate 的接收引脚，设备的 RX 引脚连接到发送引脚。
:::

由于其多功能设计，XIAO Debug Mate 允许您**同时连接多达两个 UART 设备**：一个通过 XIAO 插座，另一个通过 Grove 端口。然后您可以使用屏幕菜单在监控每个设备之间切换。

这个强大的功能**消除了在调试涉及多个串行设备的复杂系统时反复重新布线的痛苦过程**。

## 操作串行监视器

XIAO Debug Mate 具有多功能串行工具，可用于设备上和基于 PC 的监控。本指南将引导您了解其导航和功能。


<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 基本导航和控制

在探索功能之前，了解如何导航界面至关重要。所有操作都使用滚轮和按钮执行。

1.  **进入菜单：** 从主屏幕，使用**滚轮**突出显示**串行工具图标**（左下角）。**按下按钮**进入串行菜单。

2.  **核心控制：**
    *   **滚轮：** 用于移动光标或在主要模式之间切换。
    *   **短按按钮：** 用于确认选择或激活设置光标。
    *   **长按按钮：** 用于退出菜单或返回。

有两种主要的交互状态：

*   **无光标激活：** 在此状态下，转动滚轮在主要功能之间切换（例如，透传模式与监控模式）。
*   **光标激活：** 短按后，屏幕顶部出现光标。现在，滚轮移动此光标，允许您选择要更改的设置。

#### 快速导航指南

| 操作 | 功能 |
| :--- | :--- |
| **滚轮（无光标）** | 在透传和监控模式之间切换。 |
| **短按按钮** | 激活源/波特率的选择光标。 |
| **长按按钮** | 返回上一个菜单。 |

### 两种监控模式

了解基本控制后，您现在可以轻松在两种主要操作模式之间切换。只需转动**滚轮**（在没有光标激活时）即可在它们之间切换。

#### 1. 透传模式（到 PC）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/26.jpg" style={{width:600, height:'auto'}}/></div>

这是默认模式，旨在将所选源的所有串行数据直接转发到您的计算机，以便在基于 PC 的串行终端中查看。

*   **屏幕显示：** 屏幕显示状态信息，而不是数据本身。
    *   **左上角：** 活动串行源（例如，`XIAO`）。
    *   **右上角：** 当前波特率（例如，`9600`）。
    *   **中心：** `RX` 和 `TX` 指示器（从 Debug Mate 的角度）将动画显示与 PC 之间的数据流。

#### 2. 监控模式（在 LCD 上）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/27.jpg" style={{width:600, height:'auto'}}/></div>

此模式直接在 Debug Mate 的 LCD 屏幕上捕获和显示串行数据。在此模式下，数据**不会**转发到 PC。

*   **屏幕显示：** 屏幕分为两个窗口以显示数据流量。
    *   `RX 窗口`：显示**从 XIAO/Grove 插座接收**的数据。
    *   `TX 窗口`：显示**从 PC 接收**的数据。

:::caution
Debug Mate 无法同时显示来自两个源的数据。您必须使用设置菜单选择活动源。
:::

:::note
本文档中的标签 **RX** 和 **TX** 始终**从 Debug Mate 的角度**：  
- **RX** 表示 **Debug Mate 接收的**数据（即，进入 Debug Mate 的串行信号）。  
- **TX** 表示 **Debug Mate 发送的**数据（即，Debug Mate 传输的信号）。

这意味着**从 XIAO 或 Grove 设备发送到 Debug Mate 的数据将出现在 RX 窗口中**，无论选择哪个端口作为源。RX 窗口中显示的内容取决于您在设置中选择的源（XIAO/Grove）。

**TX** 始终指**来自 PC 的**数据——当您在计算机上的串行终端中键入和发送消息时，它们通过 Debug Mate 的 TX 传输到当前选择的源（XIAO 或 Grove）。  

- 在"透传"和"监控"模式中，PC 都可以通过其虚拟 COM 端口向 Debug Mate 发送数据，Debug Mate 会将这些消息传递给您选择的目标串行设备。  
- 因此，您在 **TX 窗口**中看到的始终是 PC 通过 Debug Mate 发送的内容，无论当前监控模式如何。
:::

### 配置源和波特率

要更改数据源或波特率，您必须首先激活设置光标。

1.  **激活光标：** 从任一模式，**按一次按钮**。光标将出现在屏幕顶部。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/28.jpg" style={{width:600, height:'auto'}}/></div>

2.  **选择设置：** 使用**按钮**在源（`XIAO`/`Grove`）和波特率之间移动光标。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/29.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
切换源后，来自新源的内容可能不会立即出现。这是因为打印机必须等待前一个输入源的数据完成打印，然后才能接收来自新源的信息。
:::

3.  **进入菜单：** 对于波特率选项，在突出显示所需设置的情况下，**按下按钮**打开其配置菜单。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/30.jpg" style={{width:600, height:'auto'}}/></div>

4.  **更改值：** 使用**滚轮**选择您的波特率，并**按下按钮**确认。

#### 波特率菜单和视觉指示器

波特率菜单允许您从九个常见速率（4800 到 921600）中选择。作为独特的视觉效果，进入此菜单还会激活**设备背面的 36 LED 矩阵**，灯光图案会改变以反映所选速率。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/31.jpg" style={{width:800, height:'auto'}}/></div>

### 关键概念和限制

*   **调试器，而非桥接器：** Debug Mate 是诊断工具，而不是通信桥接器。它不会自动将数据从 XIAO 端口转发到 Grove 端口。
*   **固定串行参数：** 核心串行参数（8-N-1）在固件中是固定的。高级用户可以修改开源代码来更改它们。
*   **单源监控：** 您一次只能主动监控一个源（XIAO 或 Grove）。

## 特别感谢

特别感谢 **啊猫啊狗晒太阳** 为 LED 矩阵提供的设计灵感。Debug Mate 的板载 LED 指示器设计参考了他们出色的开源项目。原始设计非常有创意和实用。

如果您想查看原始设计，可以通过以下链接查看演示视频和作者主页。

*   [原始设计演示视频](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [作者的 Bilibili 主页](https://space.bilibili.com/1155738723)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
