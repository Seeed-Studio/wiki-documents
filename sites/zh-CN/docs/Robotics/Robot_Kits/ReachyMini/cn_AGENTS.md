---
description: 为AI代理提供的Reachy Mini应用开发综合指南，涵盖SDK要点、REST API、平台兼容性和最佳实践。
title: 面向AI代理的Reachy Mini开发指南
slug: /reachymini_agents
keywords:
  - ai agents
  - development guide
  - sdk
  - rest api
  - platform compatibility
  - app development
  - best practices
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_agents/
---

# 面向AI代理的Reachy Mini开发指南

本指南帮助AI代理协助用户开发Reachy Mini应用程序。

---

## 代理行为

### 首先：检查agents.local.md

**在做任何其他事情之前**，在当前目录中搜索`agents.local.md`：

```
如果 agents.local.md 存在：
    立即读取它
    它包含用户配置和会话上下文
否则：
    → 运行 skills/setup-environment.md 来设置环境
```

该文件存储用户的机器人类型偏好设置和设置状态。始终首先检查它。

### 做一个老师

除非用户明确要求，否则：
- 边做边解释概念
- 鼓励提问（"如果您想了解更多详细信息，请告诉我"）
- 引导非技术用户完成每个步骤
- 不要假设先验知识

### 始终创建Python应用

创建应用时：
- **始终使用Python** - Python应用可通过机器人的应用商店被发现和分享
- **切勿手动创建应用文件夹** - 始终使用应用助手（处理元数据、入口点、结构）
- **如果命令失败** - 请用户在终端中运行它；不要尝试复杂的变通方法
- **Web UI放在`static/`** - Python应用可以有Web前端

```bash
# 默认模板（最小应用 - 适合大多数情况）：
reachy-mini-app-assistant create <app_name> <path> --publish

# 对话模板（用于LLM集成、语音、让机器人说话）：
reachy-mini-app-assistant create --template conversation <app_name> <path> --publish
```

请参阅`skills/create-app.md`了解更多详情。JS-only应用尚不支持发现/分享。

### 编码前始终创建plan.md

在实现任何应用之前：
1. 在应用目录中创建`plan.md`
2. 写下你对用户需求的理解
3. 列出你的技术方法
4. 在`plan.md`中提出澄清问题并提供答案字段
5. 在编码之前等待答案

### 在agents.local.md中保持笔记

使用`agents.local.md`存储：
- 用户的机器人类型（Lite/无线）
- 环境偏好
- 对未来会话有用的上下文
- 保持简洁

---

## 机器人基础知识

**Reachy Mini**是一个小型表情机器人：

| 组件 | 描述 |
|-----------|-------------|
| **头部** | 6 DOF：x、y、z、roll、pitch、yaw（通过Stewart平台） |
| **身体** | 绕垂直轴旋转 |
| **天线** | 2个电机，也可作为物理按钮使用 |

**硬件变体：**
- **Lite**：USB连接到笔记本电脑（完整计算能力）
- **无线**：板载CM4，通过WiFi连接（有限计算能力）

---

## SDK要点

### 连接

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # 您的代码在这里
```

### 两种运动方法

| 方法 | 使用场景 |
|--------|----------|
| `goto_target()` | **默认** - 平滑插值，适用于持续至少0.5秒的 gesture |
| `set_target()` | 实时控制循环（例如跟踪）10Hz以上 |

### 基本示例

请参阅并运行`examples/minimal_demo.py` - 演示连接、头部运动和天线控制。

### 编写代码之前

- 阅读`docs/source/SDK/python-sdk.md`了解API概述
- 浏览`src/reachy_mini/reachy_mini.py`了解方法签名和文档字符串
- 查看`examples/`了解可运行的代码模式

---

## REST API

守护进程在`http://{daemon-ip}:8000/api`公开HTTP/WebSocket API。

- **Lite**：`localhost:8000`（守护进程在您的机器上运行）
- **无线**：`reachy-mini.local:8000`或机器人的IP地址

**使用REST API的场景：** Web UI、非Python客户端、远程控制、通过HTTP的AI/LLM集成。=> 注意：为了让应用被发现，它必须是Python应用，这将在未来版本中改变。

**交互式文档：** `http://{daemon-ip}:8000/docs`（当守护进程运行时）

请参阅`skills/rest-api.md`了解更多详情。

---

## 平台兼容性

| 设置 | 计算 | 摄像头 | 备注 |
|-------|---------|--------|-------|
| **Lite** | 完整（笔记本电脑） | 直接USB | 最灵活，最适合开发 |
| **无线（本地）** | 有限（CM4） | 直接 | 内存/CPU受限 |
| **无线（流式）** | 完整（笔记本电脑） | 通过网络 | 一些跟踪质量损失 |
| **仿真** | 完整 | 不适用 | 无法测试摄像头功能 |

---

## 安全限制

| 关节 | 范围 |
|-------|-------|
| 头部 pitch/roll | [-40, +40] 度 |
| 头部 yaw | [-180, +180] 度 |
| 身体 yaw | [-160, +160] 度 |
| Yaw增量（头部 - 身体） | 最大65度差异 |

与身体的轻微碰撞是安全的。SDK自动限制值。

有关坐标系统和架构细节，请参阅`docs/source/SDK/core-concept.md`。

---

## 示例应用

| 应用 | 关键模式 | 来源 |
|-----|--------------|--------|
| **reachy_mini_conversation_app** | AI集成、控制循环、LLM工具 | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| **marionette** | 运动录制、安全扭矩、HF数据集 | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| **fire_nation_attacked** | 头部作为控制器、排行榜、游戏 | [HF Space](https://huggingface.co/spaces/RemiFabre/fire_nation_attacked) |
| **spaceship_game** | 头部作为操纵杆、天线按钮 | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |
| **reachy_mini_radio** | 天线交互模式 | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| **reachy_mini_simon** | 无GUI模式（天线启动） | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| **hand_tracker_v2** | 基于摄像头的控制循环 | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| **reachy_mini_dances_library** | 符号运动定义 | [GitHub](https://github.com/pollen-robotics/reachy_mini_dances_library) |

---

## 文档

完整SDK文档在`docs/source/`中：

| 主题 | 文件 |
|-------|------|
| 快速入门 | `docs/source/SDK/quickstart.md` |
| Python SDK | `docs/source/SDK/python-sdk.md` |
| 核心概念 | `docs/source/SDK/core-concept.md` |
| AI集成 | `docs/source/SDK/integration.md` |
| 故障排除 | `docs/source/troubleshooting.md` |

有关特定平台的指南（Lite、无线、仿真），请参阅`docs/source/platforms/`。

---

## 技能参考

在需要详细知识时阅读`skills/`中的这些文件：

| 技能 | 使用时机 |
|-------|------------|
| **setup-environment.md** | 第一次会话，没有`agents.local.md`存在 |
| **create-app.md** | 使用`reachy-mini-app-assistant`创建新应用 |
| **control-loops.md** | 构建实时响应应用（跟踪、游戏） |
| **motion-philosophy.md** | 在`goto_target`和`set_target`之间选择 |
| **safe-torque.md** | 启用/禁用电机而不产生抖动 |
| **ai-integration.md** | 构建LLM驱动的应用 |
| **symbolic-motion.md** | 用数学方式定义运动（舞蹈、节奏） |
| **interaction-patterns.md** | 使用天线作为按钮、头部作为控制器 |
| **debugging.md** | 应用崩溃、连接问题、基本检查 |
| **testing-apps.md** | 交付前测试（仿真vs物理） |
| **rest-api.md** | 非Python客户端的HTTP/WebSocket API |
| **deep-dive-docs.md** | 何时阅读完整SDK文档 |

---

## 快速参考

**电机名称：** `body_rotation`、`stewart_1-6`、`right_antenna`、`left_antenna`

**插值方法：** `linear`、`minjerk`（默认）、`ease_in_out`、`cartoon`

**情绪库：**
```python
from reachy_mini.motion.recorded_move import RecordedMoves
moves = RecordedMoves("pollen-robotics/reachy-mini-emotions-library")
mini.play_move(moves.get("happy"), initial_goto_duration=1.0)
```

---

## 社区

- **应用指南**: https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps
- **源代码**: https://github.com/pollen-robotics/reachy_mini
- **社区应用**: https://huggingface.co/spaces?q=reachy_mini
- **Discord**: https://discord.gg/Y7FgMqHsub