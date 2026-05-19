---
description: Reachy Mini是一个面向黑客和AI构建者的开源表情机器人。具有应用商店、Python SDK和多种平台选项。
title: Reachy Mini
slug: /reachymini_intro
keywords:
  - reachy mini
  - robotics
  - open source
  - robot kit
  - expressive robot
  - python sdk
  - ai robot
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_intro/
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini是一个面向黑客和AI构建者的开源表情机器人。**

🛒 [**购买Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ 构建并启动您自己的机器人

**选择您的平台以访问特定指南：**

| **🤖 Reachy Mini（无线版）** | **🔌 Reachy Mini Lite** | **💻 仿真** |
| :---: | :---: | :---: |
|完整的自主体验。<br/>Raspberry Pi CM4 + 电池 + WiFi。|开发者版本。<br/>通过USB连接到您的电脑。|无需硬件。<br/>在MuJoCo中进行原型设计。|
|👉 [**进入无线版指南**](/reachymini_platforms_reachy_mini_get_started) | 👉 [**进入Lite指南**](/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**进入仿真**](/reachymini_platforms_simulation_get_started) |

:::tip 专业提示
安装[uv](https://docs.astral.sh/uv/getting-started/installation/)可获得10-100倍更快的应用安装速度（自动检测，失败时回退到`pip`）。
:::

## 📱 应用与生态系统

Reachy Mini配备了一个由Hugging Face Spaces提供支持的应用商店。您可以直接从Reachy Mini Control一键安装这些应用！

* **🗣️ [对话应用](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app)：** 与Reachy Mini自然交谈（由LLM驱动）。
* **📻 [收音机](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio)：** 与Reachy Mini一起听收音机！
* **👋 [手部追踪器](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2)：** 机器人实时跟随您的手部动作。

👉 [**在Hugging Face上浏览所有应用**](https://hf.co/reachy-mini/#/apps)

## 🚀 Reachy Mini SDK入门

<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在YouTube上观看：Reachy Mini SDK运行指南</i></p>
  </a>
</div>

### 快速概览
只需**几行代码**即可控制您的机器人：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # 向上看并倾斜头部
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

### 用户指南
* **[安装](/reachymini_sdk_installation)**：5分钟设置您的电脑
* **[快速入门指南](/reachymini_sdk_quickstart)**：在Reachy Mini上运行您的第一个行为
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、观看、说话和聆听。
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[构建和发布应用](/reachymini_sdk_apps)**：创建、测试、发布和调试Reachy Mini应用。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系统和安全限制。
* **[教程](/reachymini_examples_minimal_demo)**：实践示例逐步学习SDK。
* 📂 [**浏览示例文件夹**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 硬件概述

Reachy Mini机器人以套件形式出售，通常需要**2到3小时**组装。详细的分步指南可在上面链接的特定平台文件夹中找到。

* **Reachy Mini（无线版）**：板载运行（RPi CM4）、自主、包含IMU。[查看规格](/reachymini_platforms_reachy_mini_hardware)。
* **Reachy Mini Lite**：在您的PC上运行，通过壁挂式电源供电。[查看规格](/reachymini_platforms_reachy_mini_lite_hardware)。

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**

## 🤝 社区与贡献

* **加入社区：** 加入[Discord](https://discord.gg/2bAhWfXme9)分享您与Reachy的时刻，一起构建应用并获得帮助。
* **发现bug？** 在[此仓库](https://github.com/pollen-robotics/reachy_mini/issues)上提交问题。
* **下一步：** 查看我们的[路线图](/reachymini_troubleshooting_roadmap)并分享您的反馈！

## 许可

本项目根据Apache 2.0许可证获得许可。有关详细信息，请参阅[LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE)文件。
硬件设计文件根据知识共享BY-SA-NC许可。