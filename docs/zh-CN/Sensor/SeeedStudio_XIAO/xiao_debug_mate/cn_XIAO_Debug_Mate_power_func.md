---
description: 学习如何使用 XIAO Debug Mate 的功率计功能进行精确的电压、电流和功率监测。
title: 功率计
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/32.webp
slug: /cn/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

XIAO Debug Mate 的功率计功能将您的设备转变为一个多功能、高精度的工具，用于测量电压、电流和功耗。通过直观的图形界面和实时数据更新，您可以轻松监控 XIAO 开发板或其他连接硬件在开发各个阶段的功耗。无论您是在优化超低功耗运行还是验证负载下的系统稳定性，功率计都能为您提供清晰、准确的洞察。本节将引导您了解其关键功能以及如何充分利用此功能。

## 使用功率计的提示

为确保准确测量并保护您的设备，请在使用功率分析功能之前查看这些重要提示。

### 安全输入电压

XIAO Debug Mate 本身应由标准的 **5V/1A USB 电源**供电。使用功率不足、功率过大或不合规的充电器可能导致运行不稳定或损坏设备的风险。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/37.png" style={{width:1000, height:'auto'}}/></div>

### 安全测量范围

功率计是一个高精度仪器，设计用于测量 **1µA 到 1A** 的电流。在 10µA 到 1A 范围内保持 **±1%** 的精度。超过 1A 限制可能会损坏测量电路。

### 功耗差异：功率计 vs. 电池

当您使用 Debug Mate 测量 XIAO 开发板的功耗时，测量是从 5V 电源线进行的。这个功率然后通过 XIAO 的内部电压调节器（LDO）产生 3.3V 供芯片使用。这个调节器本身会消耗少量功率。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/38.png" style={{width:1000, height:'auto'}}/></div>

因此，Debug Mate 显示的功率值将略**高于** XIAO 直接由 3.3V 电池供电时的实际功耗。这对于任何"调节器前"测量都是正常和预期的行为。

### 校准和验证

每个 XIAO Debug Mate 都在工厂进行了电压和电流的单独校准。此校准数据存储在内存（EEPROM）的写保护部分，不会受到固件更新的影响。

:::danger
不要尝试手动擦除或更改此校准数据。这样做会破坏工厂校准，并可能永久禁用功率测量功能。
:::

## 入门指南

要访问功率计，请导航到主菜单上的**功率计图标**（右下角）并**按下按钮**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### 入门指南：了解三个功率计界面

功率计功能提供三个不同的用户界面（UI），每个都针对开发过程的特定阶段量身定制。您可以即时在这些视图之间切换以获取所需的数据，无论是高精度快照、低功耗读数还是长期分析。

**导航：**
*   **切换界面：** 只需**转动滚轮**即可在三个功率计屏幕之间循环。没有光标；整个页面都会改变。
*   **重置数据：** 只有当您**长按按钮**返回主菜单时，UI 3 上的统计数据才会被清除。

#### UI 1：高精度仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

这是默认视图，专为即时、高分辨率反馈而设计。

*   **显示内容：**
    *   `U`：瞬时电压（V），最多 4 位小数。
    *   `I`：瞬时电流（A），最多 4 位小数。
    *   `P`：瞬时功率（W），最多 4 位小数。

*   **目的和用例：**
    此界面是您进行**实时调试和基本合理性检查**的首选。其高精度允许您看到功耗的微小波动。使用此屏幕快速验证：
    *   设备在空闲时是否消耗预期的电流量。
    *   打开外设（如屏幕或传感器）对功率的即时影响。
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
    *   比较不同代码优化的功耗，无需手动计算单位。

#### UI 3：统计分析和电池估算

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

此视图专为长期测试和最终产品验证而设计。

*   **显示内容：**
    *   `Min/Max`：会话期间记录的最小和最大**电流（A）**和**功率（W）**。
    *   `Total`：累积的**能量（Wh）**和**电荷（Ah）**。
    *   `Time`：自测量会话开始以来的经过时间。

*   **操作：**
    当您首次进入此屏幕时，计时器和数据累积**自动开始**。切换到 UI 1 或 UI 2 **不会**重置数据，允许您在长期测试运行时检查实时值。只有当您退出到主菜单时，数据才会被清除。

*   **目的和用例：**
    此界面对于**部署前验证**至关重要。在选择电池之前，您可以模拟设备的工作负载并使用此屏幕：
    *   识别峰值电流（`Max A`）以确保您的电池和电源电路能够处理负载。
    *   使用总消耗电荷（`Total Ah`）准确估算特定容量（mAh）电池的预期电池寿命。

#### **电池寿命估算的重要说明**

使用 UI 3 进行电池计算时，请注意一个关键细节：

XIAO Debug Mate 测量从 XIAO 的 **5V 电源输入**消耗的功率。这个 5V 电源然后由 XIAO 的板载电源管理 IC（PMIC/LDO）转换为 3.3V。这个转换过程不是 100% 高效的，PMIC 本身也会消耗少量功率。

当您直接用锂聚合物电池为 XIAO 供电时，通常将其连接到背面的 3.3V 电池焊盘，绕过 5V 到 3.3V 转换电路。

因此，Debug Mate 测量的功耗将**略高于**从 3.3V 电池实际消耗的功率。您测量的值是电池寿命计算的出色且安全的**上限估算**。

### 测量 XIAO 的功耗

这是最直接的用例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  只需将您的 XIAO 开发板直接插入 XIAO Debug Mate 正面的母头。
2.  Debug Mate 将自动为 XIAO 供电并开始测量其总功耗。

### 测量 XIAO 及其外设

您可以测量 XIAO 开发板和任何连接的传感器或模块的组合功耗。

将您的外设（例如传感器）连接到 XIAO 插座周围排针上的 I/O 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger CRITICAL
1. 要包含在测量中，外设**必须**从排针上的 **5V 引脚**供电。从 3.3V 引脚消耗的功率由 XIAO 的内部调节器提供，Debug Mate **不会**测量。

2. **不要**将外设连接到 Debug Mate 的 Grove 端口进行功率测量，因为其电源线与 XIAO 测量电路是分离的。
:::

### 测量其他微控制器

功率计不限于 XIAO 系列。您可以测量任何可以由 5V 供电的开发板。

1.  使用杜邦线将您的目标板连接到 XIAO Debug Mate 母头上的 **5V 和 GND 引脚**。
2.  确保您的整个目标系统（微控制器板和您希望测量的所有外设）完全通过来自 Debug Mate 的这个 5V 连接供电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**示例：测量 Seeeduino V4.2**

1.  将 Seeeduino V4.2 的 **5V 引脚** 连接到 Debug Mate 排针上的 **5V 引脚**。
2.  将 Seeeduino V4.2 的 **GND 引脚** 连接到 Debug Mate 排针上的 **GND 引脚**。
3.  给 Debug Mate 上电。它现在将为 Seeeduino 板提供 5V 电源并测量其总电流消耗。

## 故障排除

### Q1：Grove 接口的功耗是否也包含在统计中？

**不要** 将外设连接到 Debug Mate 的 Grove 端口进行功耗测量，因为其电源线与 XIAO 测量电路是分离的。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
