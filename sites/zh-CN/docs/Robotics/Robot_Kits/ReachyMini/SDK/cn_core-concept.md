---
description: Reachy Mini核心概念和架构文档，涵盖坐标系统、安全限制、电机模式和软件架构。
title: 核心概念和架构
slug: /reachymini_sdk_core-concept
keywords:
  - core concepts
  - architecture
  - coordinate systems
  - safety limits
  - motor modes
  - head frame
  - world frame
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_sdk_core-concept/
---

# 核心概念和架构

了解Reachy Mini的工作原理将帮助您构建健壮的应用并调试问题。

## 软件架构

Reachy Mini使用**客户端-服务器**架构：

1.  **守护进程（服务器）：**
    * 在连接到机器人的计算机上运行（或仿真）。
    * 处理硬件I/O（USB/串行）、安全检查和传感器读取。
    * 公开REST API（`localhost:8000`）和WebSocket。

2.  **SDK（客户端）：**
    * 您的Python代码（`reachy_mini`包）。
    * 通过网络连接到守护进程。
    * *优势：* 您可以在功能强大的服务器上运行AI代码，而守护进程在连接到机器人的Raspberry Pi上运行。

## 坐标系统

移动机器人时，您将使用两个主要参考帧：

### 1. 头部帧
位于头部底部。用于`goto_target`和`set_target`命令。

[![Reachy Mini头部帧](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_frame.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### 2. 世界帧
相对于机器人基座固定。用于`look_at_world`命令。

[![Reachy Mini世界帧](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/world_frame.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## 安全限制 ⚠️

Reachy Mini具有物理和软件限制以防止自碰撞和损坏。SDK将自动限制值到最近的有效位置。

| 关节/轴 | 限制范围 |
| :--- | :--- |
| **头部 Pitch/Roll** | [-40°, +40°] |
| **头部 Yaw** | [-180°, +180°] |
| **身体 Yaw** | [-160°, +160°] |
| **Yaw增量** | 头部和身体Yaw之间最大65度差异 |

## 电机模式

您可以更改电机的行为方式：
* **`mini.enable_motors()`**：僵硬。保持位置。
* **`mini.disable_motors()`**：松弛。无功率。
* **`mini.enable_gravity_compensation()`**："柔软"模式。您可以手动移动头部，它将保持在您离开的位置。（仅在使用Placo运动学后端时有效。）

## 下一步
* **[快速入门指南](/reachymini_sdk_quickstart)**：在Reachy Mini上运行您的第一个行为
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、观看、说话和聆听。
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。