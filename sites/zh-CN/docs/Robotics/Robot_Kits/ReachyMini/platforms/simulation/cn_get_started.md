---
description: 使用MuJoCo进行Reachy Mini仿真设置指南，提供真实的物理环境来原型设计和测试应用，无需物理硬件。
title: Reachy Mini仿真设置
slug: /reachymini_platforms_simulation_get_started
keywords:
  - simulation
  - mujoco
  - physics
  - prototype
  - test
  - debug
  - virtual robot
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_platforms_simulation_get_started/
---

# Reachy Mini仿真 - 设置指南

您不需要实体机器人即可开始构建！Reachy Mini仿真运行在[MuJoCo](https://mujoco.org)上，提供真实的物理环境来原型设计、测试和调试您的应用。

![仿真](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. 安装

> **📋 先决条件：** 在设置仿真之前，您必须首先按照**[安装指南](/reachymini_sdk_installation)**完成基本的安装和虚拟环境设置。本指南假设您已经安装了Reachy Mini SDK并激活了虚拟环境。

仿真需要`mujoco`python绑定。您可以使用额外的标签`[mujoco]`与Reachy Mini软件一起安装它们。

使用`pip`运行：
```bash
pip install "reachy-mini[mujoco]"
```
使用`uv`运行：
```bash
uv pip install "reachy-mini[mujoco]"
```

## 2. 运行仿真

要启动仿真机器人，只需使用`--sim`标志运行守护进程命令：

```bash
reachy-mini-daemon --sim
```

应该会打开一个窗口，显示机器人的3D视图。您可以使用鼠标与视图交互（拖动旋转、右键平移、滚轮缩放）。

### 🍎 Mac用户（Apple Silicon / Intel）
在macOS上，MuJoCo需要一个特定的启动器才能与GUI正确配合工作。不是使用上面的命令，而是使用`mjpython`：

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

> **⚠️ macOS用户：** `uv`可能与macOS上的MuJoCo存在兼容性问题。如果您遇到安装或运行时问题，建议直接使用`pip`而不是`uv`来处理MuJoCo相关包。

## 3. Reachy Mini Control和应用

您可以使用**Reachy Mini Control**与仿真机器人交互。只需打开应用并连接到本地仿真。

![使用本地守护进程的控制应用](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-external-daemon.png)

* **应用：** 您可以安装和运行应用！它们将在仿真中执行（例如，机器人将在3D查看器中移动）。

## 4. 场景和选项

您可以使用`--scene`参数自定义仿真环境。

* **`empty`**（默认）：只有空白中的机器人。
* **`minimal`**：添加桌子和一些物体（苹果、牛角面包、鸭子）玩耍。

**示例：**
```bash
reachy-mini-daemon --sim --scene minimal
```

## 5. 连接您的代码

仿真运行后，它的行为与通过USB连接的真实**Reachy Mini Lite**完全一样。守护进程在`localhost`上监听，您可以运行任何Python SDK脚本，无需修改：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

# 连接到localhost上运行的仿真
with ReachyMini() as mini:
    print("已连接到仿真！")

    # 向上看并倾斜头部
    print("移动头部...")
    mini.goto_target(
        head=create_head_pose(z=20, roll=10, mm=True, degrees=True),
        duration=1.0
    )

    # 摆动天线
    print("摆动天线...")
    mini.goto_target(antennas=[0.6, -0.6], duration=0.3)
    mini.goto_target(antennas=[-0.6, 0.6], duration=0.3)

    # 重置到休息位置
    mini.goto_target(
        head=create_head_pose(),
        antennas=[0, 0],
        duration=1.0
    )
```

## 下一步
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、观看、说话和聆听。
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系统和安全限制。

## ❓ 故障排除

<details>
<summary><strong>使用<code>mjpython</code>时出现来自<code>libgstpython.dylib</code>的段错误（macOS）</strong></summary>

您可能会看到类似这样的错误：

```
ERROR: Caught a segmentation fault while loading plugin file:
.../gstreamer_python/lib/gstreamer-1.0/libgstpython.dylib
```

这个GStreamer插件段错误是一个已知问题，在真实机器人上也会发生，但它发生在并行进程中，不会造成任何可见问题。但是使用`mjpython`时，它会崩溃主进程。解决方法是重命名插件，使GStreamer不再加载它：

```bash
# 在您的环境中找到该文件（根据路径调整）
mv $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython.dylib')") \
   $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython_.dylib')")
```

这只是防止GStreamer自动加载插件。它不会影响正常的音频/视频功能。

</details>

遇到其他问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**