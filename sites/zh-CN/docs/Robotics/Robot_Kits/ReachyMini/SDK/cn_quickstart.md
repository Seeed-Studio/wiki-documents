---
description: Reachy Mini快速入门指南，涵盖先决条件、守护进程设置和您的第一个机器人脚本。
title: 快速入门指南
slug: /reachymini_sdk_quickstart
keywords:
  - quickstart
  - first script
  - daemon
  - setup
  - hello world
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_quickstart/
---

# 快速入门指南

按照本指南让您的Reachy Mini启动并运行，无论是真机还是仿真模式。

## 1. 先决条件

确保您已按照我们的[安装指南](/reachymini_sdk_installation)在您的计算机上安装了Reachy Mini。

:::tip
确保您已创建并激活了Python虚拟环境。**请记住，每次打开新终端时都要激活它！**
:::

<details>
<summary><strong>🔧 直接在无线Reachy Mini上运行SDK（可选）</strong></summary>

如果您想在无线Reachy Mini上直接运行SDK而不是远程在计算机上运行，您可以通过SSH连接。

### 步骤1：SSH连接

打开终端并运行：

```bash
ssh pollen@reachy-mini
```

当提示时，使用这些**默认凭据**：
- 用户名：`pollen`
- 密码：`root`

### 步骤2：激活Python虚拟环境

连接后，激活虚拟环境：

```bash
source /venvs/apps_venv/bin/activate
```

### 步骤3：本地运行脚本

在Reachy Mini本机上运行脚本时，使用标准的`ReachyMini()`构造函数。自动模式会保持连接在localhost上，除非您明确覆盖它：

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # 您的代码在这里
```

:::tip
本地运行的好处
更低的延迟、无需网络依赖，并直接访问所有机器人资源。
:::
:::warning
缺点
CPU性能较低，且没有GUI可用。
:::

</details>

## 2. 确保机器人服务器正在运行（守护进程）

**守护进程**是一个后台服务，处理与电机和传感器的底层通信。它必须正在运行，您的代码才能工作。

* **在Reachy Mini（无线版）上**：当机器人开机时守护进程正在运行。确保您的计算机和Reachy Mini在同一个网络上。
* **在Reachy Mini Lite（USB）上** - 您有两个选择：
  - 启动[桌面应用程序](/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - 打开终端并运行：
    ```bash
    reachy-mini-daemon
    ```
* **对于仿真（无需机器人）** - 您有两个选择：
  - 启动[桌面应用程序](/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - 打开终端并运行：
    - **Linux和Windows：**
      ```bash
      reachy-mini-daemon --sim
      ```
    - **macOS：**
      ```bash
      mjpython -m reachy_mini.daemon.app.main --sim
      ```
      > **⚠️ macOS用户：** `uv`可能在macOS上与MuJoCo有兼容性问题。如果您遇到安装或运行时问题，建议直接使用`pip`而不是`uv`来安装MuJoCo相关包。
      >
      > 如果您从`libgstpython`收到段错误，请参阅[仿真故障排除](/reachymini_platforms_simulation_get_started#-troubleshooting)部分。

:::success
在浏览器中打开[http://localhost:8000/docs](http://localhost:8000/docs)。如果您看到Reachy SDK API文档，说明您已准备好了！
:::

## 3. 您的第一个脚本

:::warning
保持守护进程终端打开并运行！守护进程必须保持活动状态，机器人才能工作。
:::

### 创建您的Python脚本

**步骤1：** 打开一个新的终端窗口

**步骤2：** 创建一个名为`hello.py`的新文件，并将以下代码复制粘贴到其中：

:::tip
构造函数现在会自动检测Lite还是无线版，并在localhost和网络之间自动切换。只有在高级情况下才需要覆盖它，例如`ReachyMini(connection_mode="network")`。
:::

```python
from reachy_mini import ReachyMini

# 连接到运行的守护进程
with ReachyMini() as mini:
    print("已连接到Reachy Mini！")

    # 摆动天线
    print("正在摆动天线...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("完成！")
```

**步骤3：** 保存文件并运行您的脚本：

在您的新终端中，运行：

```bash
python hello.py
```

🎉 如果一切顺利，您的机器人现在应该会摆动它的天线！

## ❓ 故障排除

遇到问题了吗？👉**[查看故障排除和常见问题指南](/reachymini_troubleshooting)**

## 使用AI编码代理？

如果您使用的是**Claude Code**、**Codex**或**Copilot**等AI代理，您可以立即开始构建应用。只需粘贴此提示：

> *我想创建一个Reachy Mini应用。首先请阅读https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

此指南为您的AI代理提供了有关SDK、最佳实践和可用工具的所有所需信息。

## 下一步
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、观看、说话和聆听。
* **[浏览示例文件夹](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系统和安全限制。