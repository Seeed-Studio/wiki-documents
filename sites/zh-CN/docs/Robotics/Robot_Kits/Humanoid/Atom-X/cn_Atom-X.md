---
description: Atom-X 入门指南。
title: Atom-X 入门指南
keywords:
  - Humanoid
  - Robotics
  - Atom X
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp
slug: /atom_x
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/atom_x/
createdAt: '2026-05-25'
updatedAt: '2026-05-25'
---

import Link from '@docusaurus/Link';

# Atom-X 入门指南
## 介绍
Atom X 是一款开源的 17 自由度（DOF）双足人形机器人套件，面向机器人开发者、创客和教育机构。机器人由 17 个 Fashionstar RA8-U25H-M 总线舵机驱动，采用完全 3D 打印的开源结构设计。其核心搭载 Seeed Studio XIAO ESP32-S3 主控板和 Grove 扩展板，出厂已预装完整控制固件。其 Web 可视化动作编辑器支持基于浏览器的实时调试、示教编程以及 JSON 导出，便于跨平台二次开发。配套的 RUC-01 转接板提供稳压电源和 UART 接口，并支持蓝牙 / Web 远程控制。开箱即用，是运动算法验证和桌面机器人开发的理想平台。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Atom-X-17-DOF-Open-Source-Robot-Kit-p-6712.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 1. 产品介绍

- **自由度配置**：共 17 个自由度，覆盖手臂、躯干和腿部关节。
- **结构与外观**：全机身采用 3D 打印结构，官方开源 STP/STL 模型文件，便于零件更换、结构加固和外观重设计。
- **关节执行器**：Fashionstar RA8-U25H-M 总线舵机 × 17（支持总线通讯，简化布线）。
- **Web 可视化动作编辑器**：提供无需安装的浏览器控制平台，支持舵机实时调试和示教模式编程。完成的动作组可导出为标准 `.json` 格式文件，便于各类主控（如 Arduino、STM32、Raspberry Pi）解析与集成。
- **开箱即用**：预配置 Seeed Studio XIAO ESP32-S3 作为主控板，并提供出厂演示程序。
- **多模块扩展**：搭配 Seeed Studio XIAO 扩展板，板载 Grove 接口，可连接 Seeed Grove 系列传感器 / 控制模块。
- **生态扩展性**：通过 Seeed Studio XIAO 扩展板上的 Grove 接口，可快速集成视觉、环境感知等 Grove 生态传感器和控制模块。
- **跨平台兼容性**：为降低开发门槛，我们提供 RUC-01 转接板，板载 5V/3.3V 电源输出和 UART 接口。任何具备串口功能的控制器都可以与其通讯！

## 2. 规格参数

| 参数 | 数值 |
|---|---|
| 自由度（DOF） | 17 |
| 机身结构 | 3D 打印 |
| 舵机 | RA8-U25H-M 总线舵机 |
| 舵机电源接口板 | RUC-01 提供 4 路舵机接口、5V/3.3V 控制板电源、串口通讯接口（Grove 接口） |
| 主控制器 | Seeedstudio XIAO ESP32-S3 + Seeed Studio XIAO 扩展板 |
| 通讯协议 | 异步串行通讯（UART） |
| 尺寸 | 200×122×389 mm |

## 3. 清单

| 项目 | 数量 |
| ---------------------- | ---- |
| 17 自由度机器人总成 | 1 |
| 螺丝 KM M2*7mm | 10 |
| 螺丝 KB M2*7mm | 10 |
| 螺丝 PM M3*6mm | 2 |
| 舵机线 200mm 3-pin | 2 |

:::tip
**17 自由度机器人总成包含**

- RA8-U25H-M × 17
- 机器人结构件（套装）× 1
- RUC-01 转接板 × 1
- Seeed XIAO ESP32-S3 × 1
- Seeed XIAO 扩展板 × 1
  :::

## 4. 外形尺寸

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/dimensions.png" />
</div>




## 5. 硬件架构

### 驱动与电源管理（RUC-01 接口板）

作为机器人的电源枢纽，驱动与电源管理（RUC-01 接口板）模块负责总线通讯管理和电源分配：

- **舵机通讯**：板载 4 路总线舵机接口（支持菊花链扩展），负责为 17 个总线舵机提供信号与电源。
- **PC 调试接口**：集成 USB Type-C 接口，可直接连接 PC 主机进行动作组编辑与调试。
- **系统供电**：负责电压转换，并为主控板提供稳定的电源输入。
- **通讯接口**：提供标准 UART 串口，用于接收上位主控板发送的控制指令。

### 逻辑主控与扩展（MCU + Grove 扩展板）

作为机器人的“大脑”，逻辑主控与扩展（MCU + Grove 扩展板）负责运行控制算法和处理传感器数据：

- **核心控制器**：采用 Seeed Studio XIAO 系列开发板，体积小巧但性能强大。
- **生态扩展**：搭配 Grove 接口扩展板，提供丰富的通用接口。
- **主要功能**：运行机器人运动学程序，并通过 Grove 接口无缝连接各类传感器（如超声波、视觉、语音模块等），实现复杂交互功能。

### 数据流说明

**调试 / 编辑模式（Debug Mode）**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

说明：通过 PC 端软件直接调节舵机角度并保存动作组，绕过 XIAO 主控板。

**自主模式（Autonomous Mode）**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

说明：XIAO 主控板根据传感器反馈或预存代码自主控制机器人的动作。



## 6. 机械结构

- 机器人结构展示及默认舵机 ID 编号

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/servo_id_layout.webp" />
</div>

- 所有舵机均为零度时的机器人姿态
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/zero_degree_pose.png" />
</div>


## 7. 图纸与模型下载

如需获取完整的 3D 打印数据，请访问：[MakerWorld - Atom X](https://makerworld.com/zh/models/2534886-atom-x-robot#profileId-2790112)

:::tip
我们后续会逐步提供更完整的装配视频和图文说明，请持续关注本页面的更新。
:::


## 8. 接线指南

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/board_connection_diagram.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/internal_wiring.webp" />
</div>


## 9. 使用说明
:::tip
Atom-X 的使用请参考 Atom-S 用户手册，所有操作与 Atom-S 完全相同。
:::

<div style={{textAlign: 'center'}}>
    <Link to="/atom_s#8-运行你的第一个示例" style={{display: 'inline-block', width: '200px', height: '40px', lineHeight: '40px', backgroundColor: '#007bff', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ 启动示例
    </Link>
</div>

## 常见问题

## Q1: Atom-X 应该使用什么电池？

A: 建议使用 2S 或 3S 锂聚合物电池，并配合 XT60 接插件。

## Q2: 是否可以使用其他主控板替代 XIAO ESP32-S3？

A: 该设计针对 XIAO ESP32-S3 做了优化，但任何具有足够 GPIO 的 ESP32 开发板都可以通过修改代码进行适配。

## Q3: 如何更新固件？

A: 通过 USB 将 XIAO ESP32-S3 连接到电脑，并使用 Arduino IDE 或 PlatformIO 上传新程序。
