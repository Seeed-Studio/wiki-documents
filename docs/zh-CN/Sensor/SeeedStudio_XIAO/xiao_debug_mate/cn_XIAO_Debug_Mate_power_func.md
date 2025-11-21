---
description: 创建一个包含丰富内容的文档页面。
title: 功率计
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/xiao_debug_mate_power" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

XIAO Debug Mate 的功率计功能将您的设备转变为一个多功能、高精度的工具，用于测量电压、电流和功耗。通过直观的图形界面和实时数据更新，您可以轻松监控 XIAO 开发板或其他连接硬件在开发各个阶段的功耗。无论您是在优化超低功耗运行还是验证负载下的系统稳定性，功率计都能为您提供清晰、准确的洞察。本节将引导您了解其关键功能以及如何充分利用此功能。

## 使用功率计的提示

为确保准确测量并保护您的设备，请在使用功率分析功能之前查看这些重要提示。

### 安全输入电压

XIAO Debug Mate 本身应由标准的 **5V/1A USB 电源**供电。使用功率不足、功率过大或不合规的充电器可能导致运行不稳定或损坏设备的风险。

<svg viewBox="0 0 800 520" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#2f9e44" />
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#e03131" />
    </marker>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">电源要求</text>

  {/* Central Device: XIAO Debug Mate - Moved down to align with taller boxes */}
  <g transform="translate(300, 175)">
    <rect x="0" y="0" width="200" height="140" rx="10" fill="#343a40" filter="url(#dropShadow)" />
    <rect x="10" y="10" width="180" height="120" rx="5" fill="#495057" />
    <text x="100" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">XIAO Debug Mate</text>
    <text x="100" y="75" textAnchor="middle" fontSize="12" fill="#adb5bd">USB-C 输入</text>

    {/* Port Graphic */}
    <rect x="70" y="90" width="60" height="20" rx="4" fill="#212529" stroke="#868e96" strokeWidth="2" />
    <line x1="80" y1="100" x2="120" y2="100" stroke="#868e96" strokeWidth="2" />
  </g>

  {/* Left Side: The CORRECT Way - Increased Height */}
  <g transform="translate(50, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#ebfbee" stroke="#2f9e44" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#2f9e44" />
    <rect x="0" y="20" width="200" height="20" fill="#2f9e44" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">推荐</text>

    {/* Icon */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#2f9e44" strokeWidth="2" />
    <path d="M90 90 L100 90 L100 80 M100 90 L110 90" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" />

    <text x="100" y="145" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#2b8a3e">5V / 1A</text>
    <text x="100" y="170" textAnchor="middle" fontSize="14" fill="#2b8a3e">标准电源</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 210)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#40c057" />
      <text x="60" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">稳定运行</text>
    </g>
  </g>

  {/* Right Side: The WRONG Way - Increased Height to fix overflow */}
  <g transform="translate(550, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#fff5f5" stroke="#e03131" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#e03131" />
    <rect x="0" y="20" width="200" height="20" fill="#e03131" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">避免</text>

    {/* Warning Icons */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#e03131" strokeWidth="2" />
    <text x="100" y="98" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e03131">!</text>

    {/* Bad Specs - Spaced out vertically */}
    <text x="100" y="140" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">功率过大 (&gt;5V)</text>
    <text x="100" y="165" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">功率不足</text>
    <text x="100" y="190" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">不合规</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 215)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#fa5252" />
      <text x="60" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">损坏风险</text>
    </g>
  </g>

  {/* Connecting Arrows - Adjusted Y to new center (245) */}
  {/* Green Arrow */}
  <path d="M250 245 L290 245" stroke="#2f9e44" strokeWidth="4" markerEnd="url(#arrowGreen)" />

  {/* Red Arrow with X */}
  <path d="M550 245 L510 245" stroke="#e03131" strokeWidth="4" markerEnd="url(#arrowRed)" />
  <line x1="525" y1="235" x2="535" y2="255" stroke="#e03131" strokeWidth="3" />
  <line x1="535" y1="235" x2="525" y2="255" stroke="#e03131" strokeWidth="3" />

  {/* Bottom Note - Widened Box to fix overflow */}
  <g transform="translate(100, 430)">
    {/* Width increased from 400 to 600 */}
    <rect x="0" y="0" width="600" height="50" rx="4" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="1" />
    <circle cx="30" cy="25" r="10" fill="#1c7ed6" />
    <text x="30" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">i</text>
    <text x="50" y="20" fontSize="12" fill="#495057" fontWeight="bold">提示：</text>
    {/* Text alignment adjusted for wider box */}
    <text x="50" y="35" fontSize="12" fill="#495057">使用标准 PC USB 端口或高质量的 5V/1A 墙式适配器。</text>
  </g>

</svg>

### 安全测量范围

功率计是一个高精度仪器，设计用于测量 **1µA 到 1A** 的电流。在 10µA 到 1A 范围内保持 **±1%** 的精度。超过 1A 限制可能会损坏测量电路。

### 功耗差异：功率计 vs. 电池

当您使用 Debug Mate 测量 XIAO 开发板的功耗时，测量是从 5V 电源线进行的。这个电源然后通过 XIAO 的内部电压调节器（LDO）产生 3.3V 供芯片使用。这个调节器本身会消耗少量功率。

<svg viewBox="0 0 800 450" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#495057" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">功率测量逻辑：调节器前</text>

  {/* --- SECTION 1: The Measurement Device (Debug Mate) --- */}
  {/* Moved Left to x=20 to create space */}
  <g transform="translate(20, 100)">
    {/* Device Body */}
    <rect x="0" y="0" width="160" height="200" rx="10" fill="#343a40" filter="url(#shadow)" />
    <text x="80" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">Debug Mate</text>

    {/* Screen */}
    <rect x="20" y="50" width="120" height="60" rx="4" fill="#212529" stroke="#495057" strokeWidth="2" />
    <text x="80" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#40c057" fontFamily="monospace">50.0 mA</text>
    <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#868e96">显示值</text>

    {/* Probe Line Out - Extended length to cross the gap */}
    <line x1="160" y1="140" x2="280" y2="140" stroke="#fa5252" strokeWidth="6" />

    {/* 5V Label - Centered in the new gap */}
    <text x="220" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fa5252">5V 线路</text>

    {/* Measurement Point Indicator - Centered in the new gap */}
    <circle cx="220" cy="140" r="6" fill="#fa5252" stroke="#fff" strokeWidth="2" />
    <text x="220" y="165" textAnchor="middle" fontSize="11" fill="#fa5252" fontWeight="bold">测量点</text>
  </g>

  {/* --- SECTION 2: The XIAO Board --- */}
  {/* Moved Right to x=300 to fix overlap */}
  <g transform="translate(300, 80)">
    {/* PCB Outline */}
    <rect x="0" y="0" width="480" height="240" rx="15" fill="#ebfbee" stroke="#2f9e44" strokeWidth="3" />
    <text x="20" y="30" fontSize="16" fontWeight="bold" fill="#2b8a3e">XIAO 开发板</text>

    {/* Component: LDO Regulator */}
    <g transform="translate(50, 90)">
      <rect x="0" y="0" width="100" height="100" rx="4" fill="#e9ecef" stroke="#adb5bd" strokeWidth="2" />
      <text x="50" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#495057">LDO</text>
      <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#868e96">电压调节器</text>

      {/* Heat/Loss visualization */}
      <path d="M30 70 Q40 60 50 70 T70 70" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <path d="M30 80 Q40 70 50 80 T70 80" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <text x="50" y="120" textAnchor="middle" fontSize="11" fill="#fd7e14" fontWeight="bold">自耗电</text>
      <text x="50" y="135" textAnchor="middle" fontSize="10" fill="#fd7e14">(~5mA 损耗)</text>
    </g>

    {/* Component: MCU (The Chip) */}
    <g transform="translate(280, 60)">
      <rect x="0" y="0" width="140" height="140" rx="8" fill="#343a40" filter="url(#shadow)" />
      <rect x="10" y="10" width="120" height="120" rx="4" fill="#212529" />
      <text x="70" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ced4da">MCU / 芯片</text>
      <text x="70" y="90" textAnchor="middle" fontSize="12" fill="#adb5bd">实际负载</text>
      <text x="70" y="110" textAnchor="middle" fontSize="14" fill="#40c057" fontWeight="bold">~45 mA</text>
    </g>

    {/* Internal Connections */}
    {/* 5V Input to LDO - Dashed line inside board */}
    <line x1="0" y1="140" x2="50" y2="140" stroke="#fa5252" strokeWidth="4" strokeDasharray="4,4" opacity="0.6" />

    {/* 3.3V LDO to MCU */}
    <line x1="150" y1="140" x2="280" y2="140" stroke="#fab005" strokeWidth="6" markerEnd="url(#arrowFlow)" />
    {/* Moved text up slightly to avoid overlap with line */}
    <text x="215" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fab005">3.3V 线路</text>
  </g>

  {/* --- SECTION 3: The Equation / Explanation --- */}
  <g transform="translate(100, 360)">
    <rect x="0" y="0" width="600" height="70" rx="8" fill="#f1f3f5" stroke="#dee2e6" strokeWidth="1" />

    {/* Equation Parts */}
    <text x="300" y="25" textAnchor="middle" fontSize="14" fill="#495057" fontWeight="bold">为什么读数更高？</text>

    <g transform="translate(60, 45)">
      <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#343a40">显示值</text>
      <text x="140" y="0" fontSize="16" fontWeight="bold" fill="#868e96">=</text>
      <text x="170" y="0" fontSize="16" fontWeight="bold" fill="#2b8a3e">芯片消耗</text>
      <text x="330" y="0" fontSize="16" fontWeight="bold" fill="#868e96">+</text>
      <text x="360" y="0" fontSize="16" fontWeight="bold" fill="#fd7e14">调节器开销</text>
    </g>
  </g>

</svg>

因此，Debug Mate 上显示的功耗值会比 XIAO 直接由 3.3V 电池供电时的实际功耗略**高**。这是任何"调节器前"测量的正常和预期行为。

### 校准和验证

每个 XIAO Debug Mate 都在工厂进行了电压和电流的单独校准。此校准数据存储在内存的写保护区域（EEPROM）中，不会受到固件更新的影响。

:::danger
请勿尝试手动擦除或更改此校准数据。这样做会破坏工厂校准，并可能永久禁用功耗测量功能。
:::

## 入门指南

要访问功耗计，请导航到主菜单上的**功耗计图标**（右下角）并**按下按钮**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### 入门指南：了解三种功耗计界面

功耗计功能提供三种不同的用户界面（UI），每种都针对开发过程的特定阶段量身定制。您可以在这些视图之间即时切换，以获取所需的数据，无论是高精度快照、低功耗读数还是长期分析。

**导航：**
*   **切换界面：** 只需**转动滚轮**即可在三个功耗计屏幕之间循环切换。没有光标；整个页面都会改变。
*   **重置数据：** 只有当您**长按按钮**返回主菜单时，UI 3 上的统计数据才会被清除。

#### UI 1：高精度仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

这是默认视图，专为即时、高分辨率反馈而设计。

*   **显示内容：**
    *   `U`：瞬时电压（V），精确到小数点后 4 位。
    *   `I`：瞬时电流（A），精确到小数点后 4 位。
    *   `P`：瞬时功率（W），精确到小数点后 4 位。

*   **目的和用例：**
    此界面是您进行**实时调试和基本合理性检查**的首选。其高精度允许您看到功耗的微小波动。使用此屏幕快速验证：
    *   设备在空闲时是否消耗预期的电流量。
    *   打开外设（如屏幕或传感器）对功耗的即时影响。
    *   5V 电源的稳定性。


#### UI 2：低功耗多单位视图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

此视图针对低功耗项目的直观观察进行了优化。

*   **显示内容：**
    *   `U`：瞬时电压（V）。
    *   `I`：瞬时电流，自动缩放并以**安培（A）**、**毫安（mA）**和**微安（µA）**显示。
    *   `P`：瞬时功率，自动缩放并以**瓦特（W）**和**毫瓦（mW）**显示。

*   **目的和用例：**
    在开发电池供电或节能设备时，电流可能降至微安范围。此界面**消除了手动单位转换的需要**，让您能够即时了解设备功耗的大小。它非常适合：
    *   验证您的设备是否成功进入深度睡眠模式（电流应在 µA 范围内）。
    *   比较不同代码优化的功耗，而无需手动计算单位。

#### UI 3：统计分析和电池估算

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

此视图专为长期测试和最终产品验证而设计。

*   **显示内容：**
    *   `Min/Max`：会话期间记录的最小和最大**电流（A）**和**功率（W）**。
    *   `Total`：累积的**能量（Wh）**和**电荷（Ah）**。
    *   `Time`：自测量会话开始以来的经过时间。

*   **操作：**
    当您首次进入此屏幕时，计时器和数据累积会**自动开始**。切换到 UI 1 或 UI 2 **不会**重置数据，允许您在长期测试运行时检查实时值。只有当您退出到主菜单时，数据才会被清除。

*   **目的和用例：**
    此界面对于**部署前验证**至关重要。在选择电池之前，您可以模拟设备的工作负载并使用此屏幕：
    *   识别峰值电流（`Max A`）以确保您的电池和电源电路能够处理负载。
    *   使用总消耗电荷（`Total Ah`）准确估算特定容量（mAh）电池的预期电池寿命。

#### **电池寿命估算的重要说明**

使用 UI 3 进行电池计算时，请注意一个关键细节：

XIAO Debug Mate 测量从 **5V 电源输入**到 XIAO 的功耗。这个 5V 电源然后由 XIAO 的板载电源管理 IC（PMIC/LDO）转换为 3.3V。这个转换过程不是 100% 高效的，PMIC 本身也会消耗少量功率。

当您直接用锂聚合物电池为 XIAO 供电时，通常将其连接到背面的 3.3V 电池焊盘，绕过 5V 到 3.3V 转换电路。

因此，Debug Mate 测量的功耗将比从 3.3V 电池实际消耗的功率**略高**。您测量的值是电池寿命计算的优秀且安全的**上限估算**。

### 测量 XIAO 的功耗

这是最直接的用例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  只需将您的 XIAO 板直接插入 XIAO Debug Mate 正面的母头中。
2.  Debug Mate 将自动为 XIAO 供电并开始测量其总功耗。

### 测量 XIAO 及其外设

您可以测量 XIAO 板和任何连接的传感器或模块的组合功耗。

将您的外设（例如传感器）连接到 XIAO 插座周围的 I/O 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger 关键
1. 要包含在测量中，外设**必须**从接头上的 **5V 引脚**供电。从 3.3V 引脚消耗的功率由 XIAO 的内部调节器提供，Debug Mate **不会**测量。

2. **不要**将外设连接到 Debug Mate 的 Grove 端口进行功耗测量，因为其电源线与 XIAO 测量电路是分离的。
:::

### 测量其他微控制器

功耗计不仅限于 XIAO 系列。您可以测量任何可以由 5V 供电的开发板。

1.  使用杜邦线将您的目标板连接到 XIAO Debug Mate 母头上的 **5V 和 GND 引脚**。
2.  确保您的整个目标系统（微控制器板和您希望测量的所有外设）完全通过来自 Debug Mate 的这个 5V 连接供电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**示例：测量 Seeeduino V4.2**

1.  将 Seeeduino V4.2 的 **5V 引脚**连接到 Debug Mate 排针上的 **5V 引脚**。
2.  将 Seeeduino V4.2 的 **GND 引脚**连接到 Debug Mate 排针上的 **GND 引脚**。
3.  打开 Debug Mate 的电源。它现在将为 Seeeduino 板提供 5V 电源并测量其总电流消耗。

## 故障排除

### Q1：Grove 接口的功耗是否也包含在统计中？

**不要**将外设连接到 Debug Mate 的 Grove 端口进行功耗测量，因为其电源线与 XIAO 测量电路是分离的。

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
